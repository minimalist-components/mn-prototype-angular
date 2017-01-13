angular
  .module('prototype')
  .controller('UsersController', UsersController)

function UsersController(list, data) {
  this.list = list
  this.data = data

  this.options = [
    'Stark',
    'Lannister',
    'Targaryen',
    'Snow',
  ]
}
