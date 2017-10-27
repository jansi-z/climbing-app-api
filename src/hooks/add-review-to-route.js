// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addReviewToRoute (hook) {

    const routeId = hook.result.routeId;
    const reviewId = hook.result._id;

    hook.app.service('routes').patch(routeId, {
      $addToSet: {
        reviewIds: reviewId
      }
    });

    return Promise.resolve(hook);
  };
};
