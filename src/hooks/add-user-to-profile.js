// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addUserToProfile (hook) {

    const userId = hook.params.user._id;
    const profileData = hook.data;

    hook.data = { ...profileData, userId: userId } //eslint-disable-line

    return Promise.resolve(hook);
  };
};
