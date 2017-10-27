// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addGymToRoute (hook) {

    const gymId = hook.params.user.gymId;
    const routeData = hook.data;

    hook.data = { ...routeData, gymId: gymId };

    return Promise.resolve(hook);
  };
};
