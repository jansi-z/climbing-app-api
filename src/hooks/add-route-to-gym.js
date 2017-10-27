// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addRouteToGym (hook) {

    const gymId = hook.params.user.gymId;
    const routeId = hook.result._id;

    hook.app.service('gyms').patch(gymId, {
      $addToSet: {
        routeIds: routeId
      }
    });

    return Promise.resolve(hook);
  };
};
