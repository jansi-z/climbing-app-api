const assert = require('assert');
const addGymToRoute = require('../../src/hooks/add-gym-to-route');

describe('\'AddGymToRoute\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addGymToRoute();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
