/* eslint-disable linebreak-style */
// Initializes the `events` service on path `/events`
const { Events } = require('./attendees.class');
const createModel = require('../../models/attendees.model');
const hooks = require('./attendees.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/attendees', new Events(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendees');

  service.hooks(hooks);
};
