const assert = require('assert');
const app = require('../../src/app');

describe('\'climbers\' service', () => {
  it('registered the service', () => {
    const service = app.service('climbers');

    assert.ok(service, 'Registered the service');
  });
});
