const { authenticate } = require('feathers-authentication').hooks;

const addGymToRoute = require('../../hooks/add-gym-to-route');

const addRouteToGym = require('../../hooks/add-route-to-gym');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), addGymToRoute()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addRouteToGym()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
