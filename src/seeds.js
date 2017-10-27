const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

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
            console.log(testUser); //eslint-disable-line
            console.log(testClimber); //eslint-disable-line
          });
      });
  });
