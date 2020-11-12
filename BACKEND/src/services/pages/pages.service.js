// Initializes the `pages` service on path `/pages`
const { Pages } = require('./pages.class');
const createModel = require('../../models/pages.model');
const hooks = require('./pages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pages', new Pages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pages');

  service.hooks(hooks);
};
