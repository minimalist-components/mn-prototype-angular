angular
  .module('prototype')
  .service('Users', UsersService)

function UsersService(Restangular) {
  const resource = Restangular.all('users')

  this.list = list

  function list() {
    return resource.getList()
  }
}
