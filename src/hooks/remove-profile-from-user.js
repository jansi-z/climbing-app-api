// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function removeProfileFromUser (hook) {

    const userId = hook.params.user._id;

    if (hook.path === 'climbers'){
      hook.app.service('users').patch(userId, {
        $set: {
          climberId: null,
          profile: false
        }
      });
    } else if (hook.path === 'gyms'){
      hook.app.service('users').patch(userId, {
        $set: {
          gymId: null,
          profile: false
        }
      });
    }

    return Promise.resolve(hook);
  };
};
