const assert = require('assert');
const app = require('../../src/app');
const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = { email: 'test@test.com', password: '1234abcd'};

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

describe('The climbers test suite', () => {

  after(function() {
    app.service('users').find({
      query: { email: 'test@test.com' }
    })
      .then((testUser) => {
        app.service('users').remove(testUser._id);
      });
    app.service('climbers').find({
      query: { username: 'john' }
    })
      .then((testClimber) => {
        app.service('climbers').remove(testClimber._id);
      });
  });

  describe('\'climbers\' service', () => {
    it('registered the service', () => {
      const service = app.service('climbers');

      assert.ok(service, 'Registered the service');
    });

    it('on creation the new climber\'s is added to the user', function() {

      const climber = { username: 'john', city: 'amsterdam', country: 'the netherlands' };

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
                  assert.ok((testUser._id === testClimber.userId), 'The new climber profile has the user\'s id');
                  assert.ok((testUser.climberId === testClimber._id), 'The user has the new climber profile\'s id');
                });
            });
        });
    });
  });
});
