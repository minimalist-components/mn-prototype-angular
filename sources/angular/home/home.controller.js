angular
  .module('prototype')
  .controller('HomeController', HomeController)

function HomeController(users) {
  this.users = users
}
