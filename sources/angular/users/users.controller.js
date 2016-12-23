angular
  .module('prototype')
  .controller('UsersController', UsersController)

function UsersController(list) {
  this.list = list
}
