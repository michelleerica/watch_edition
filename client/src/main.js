require('./main.css');
require('./js/storage');

const App = require('watch-framework').App;
//test
const routes = require("./js/routes");
const notifications = require("./js/notifications");

new App(routes, notifications).navigateToLocation(window.location);
