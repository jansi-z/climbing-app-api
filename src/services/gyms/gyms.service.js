// Initializes the `gyms` service on path `/gyms`
const createService = require('feathers-mongoose');
const createModel = require('../../models/gyms.model');
const hooks = require('./gyms.hooks');
const filters = require('./gyms.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'gyms',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/gyms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('gyms');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
