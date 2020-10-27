const users = require('./users/users.service.js');
const pages = require('./pages/pages.service.js');
const friends = require('./friends/friends.service.js');
const events = require('./events/events.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(pages);
  app.configure(friends);
  app.configure(events);
};
