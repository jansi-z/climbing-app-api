// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addProfileToUser (hook) {

    const profileId = hook.result._id;
    const userId = hook.params.user._id;

    if (hook.path === 'climbers'){
      hook.app.service('users').patch(userId, {
        $set: {
          climberId: profileId,
          profile: true
        }
      });
    } else if (hook.path === 'gyms'){
      hook.app.service('users').patch(userId, {
        $set: {
          gymId: profileId,
          profile: true
        }
      });
    }

    return Promise.resolve(hook);
  };
};
