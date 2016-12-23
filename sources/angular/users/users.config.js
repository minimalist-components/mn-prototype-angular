angular
  .module('prototype')
  .config(UsersConfig)

function UsersConfig($stateProvider) {
  $stateProvider.state('app.users', {
    url: '/users',
    views: {
      'content@app': {
        templateUrl: 'templates/users.template.html',
        controller: 'UsersController',
        controllerAs: 'users',
        resolve: {
          list: Users => Users.list(),
        },
      },
    },
  })
}
