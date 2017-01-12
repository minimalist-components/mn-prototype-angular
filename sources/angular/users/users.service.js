angular
  .module('prototype')
  .service('Users', UsersService)

function UsersService(Restangular) {
  const resource = Restangular.service('users')

  this.list = list
  this.get = get
  this.create = create

  function list() {
    return resource.getList()
  }

  function get(id) {
    return resource.one(id).get()
  }

  function create() {
    return resource.one()
  }
}
