const assert = require('assert');
const app = require('../../src/app');

describe('\'attendees\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendees');

    assert.ok(service, 'Registered the service');
  });
});
