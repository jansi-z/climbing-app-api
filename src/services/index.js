const gyms = require('./gyms/gyms.service.js');
const users = require('./users/users.service.js');
const climbers = require('./climbers/climbers.service.js');
const routes = require('./routes/routes.service.js');
const reviews = require('./reviews/reviews.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(gyms);
  app.configure(users);
  app.configure(climbers);
  app.configure(routes);
  app.configure(reviews);
};
