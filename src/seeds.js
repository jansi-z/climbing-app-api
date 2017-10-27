const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const feathersClient = feathers();

const climberUser1 = { email: 'climber1@test.com', password: '1234abcd'};

const climber1 = { username: 'Tristan', city: 'Den Haag', country: 'The Netherlands' };

const gymUser1 = { email: 'gym1@test.com', password: '1234abcd' };

const gym1 = { name: 'Over The Top', address: 'Bergstraat 1', city: 'Amsterdam', country: 'The Netherlands', image: 'http://cdn.hiconsumption.com/wp-content/uploads/2017/02/Central-Rock-Climbing-Gym-.jpg' };


feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(climberUser1)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: climberUser1.email,
      password: climberUser1.password
    })
      .then(() => {
        feathersClient.service('climbers').create(climber1)
          .then((result) => {
            console.log(`Climber seeded: ${result.username}`); //eslint-disable-line
          });
      });
  });


feathersClient.service('users').create(gymUser1)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: gymUser1.email,
      password: gymUser1.password
    })
      .then(() => {
        feathersClient.service('gyms').create(gym1)
          .then((result) => {
            console.log(`Gym seeded: ${result.name}`); //eslint-disable-line
          });
      });
  });
