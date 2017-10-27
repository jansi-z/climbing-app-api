// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addAuthorToReview (hook) {

    const authorId = hook.params.user._id;
    const reviewData = hook.data;

    hook.data = { ...reviewData, authorId: authorId };

    return Promise.resolve(hook);
  };
};
