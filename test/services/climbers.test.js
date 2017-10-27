const assert = require('assert');
const app = require('../../src/app');
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

describe('\'climbers\' service', () => {
  it('registered the service', () => {
    const service = app.service('climbers');

    assert.ok(service, 'Registered the service');
  });

  it('on creation the new climber\'s is added to the user', () => {
    const user = { email: 'test@test.com', password: '1234abcd'};
    const feathersClient = feathers();
    const climber = { username: 'john', city: 'amsterdam', country: 'the netherlands' };

    feathersClient
      .configure(hooks())
      .configure(rest('http://localhost:3030').superagent(superagent))
      .configure(auth());

    feathersClient.service('users').create(user)
      .then((newUser) => {
        const testUser = newUser;

        feathersClient.authenticate({
          strategy: 'local',
          email: user.email,
          password: user.password
        })
          .then(() => {
            feathersClient.service('climbers').create(climber)
              .then((testClimber) => {
                debugger //eslint-disable-line
                console.log(testClimber); //eslint-disable-line
                console.log(testUser); //eslint-disable-line
                assert.ok((testUser._id === testClimber.userId), 'The new climber profile has the user\'s id');
                assert.ok((testUser.climberProfileId === testClimber._id), 'The user has the new climber profile\'s id');
              });
          });
      });
  });
});
