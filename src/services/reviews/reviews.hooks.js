const { authenticate } = require('feathers-authentication').hooks;

const addAuthorToReview = require('../../hooks/add-author-to-review');

const addReviewToRoute = require('../../hooks/add-review-to-route');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'), addAuthorToReview()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addReviewToRoute()],
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
