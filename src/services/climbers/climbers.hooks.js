const { authenticate } = require('feathers-authentication').hooks;

const addProfileToUser = require('../../hooks/add-profile-to-user');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addProfileToUser()],
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
