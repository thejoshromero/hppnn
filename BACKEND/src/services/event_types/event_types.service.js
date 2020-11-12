// Initializes the `event_types` service on path `/event-types`
const { EventTypes } = require('./event_types.class');
const createModel = require('../../models/event_types.model');
const hooks = require('./event_types.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/event-types', new EventTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('event-types');

  service.hooks(hooks);
};
