angular
  .module('prototype')
  .service('Users', UsersService)

function UsersService(Restangular) {
  const resource = Restangular.service('users')

  this.list = list
  this.get = get

  function list() {
    return resource.getList()
  }

  function get(id) {
    return resource.one(id).get()
  }
}
