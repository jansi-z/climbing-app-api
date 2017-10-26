// Initializes the `climbers` service on path `/climbers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/climbers.model');
const hooks = require('./climbers.hooks');
const filters = require('./climbers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'climbers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/climbers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('climbers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
