angular
  .module('prototype')
  .controller('UsersController', UsersController)

function UsersController(list, data) {
  this.list = list
  this.data = data

  this.save = save

  function save() {
    console.log(this.data)
  }
}
