const users = require('./users/users.service.js');
const pages = require('./pages/pages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(pages);
};
