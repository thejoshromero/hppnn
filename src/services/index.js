const users = require('./users/users.service.js');
const pages = require('./pages/pages.service.js');
<<<<<<< HEAD
const friends = require('./friends/friends.service.js');
=======
const events = require('./events/events.service.js');
>>>>>>> de6777caf194220d965ebaecec4224b4d50a504c
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(pages);
<<<<<<< HEAD
  app.configure(friends);
=======
  app.configure(events);
>>>>>>> de6777caf194220d965ebaecec4224b4d50a504c
};
