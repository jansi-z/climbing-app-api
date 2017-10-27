const { authenticate } = require('feathers-authentication').hooks;

const addProfileToUser = require('../../hooks/add-profile-to-user');

const addUserToProfile = require('../../hooks/add-user-to-profile');

const removeProfileFromUser = require('../../hooks/remove-profile-from-user');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), addUserToProfile()],
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
    remove: [removeProfileFromUser()]
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
