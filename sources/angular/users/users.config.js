angular
  .module('prototype')
  .config(UsersConfig)

function UsersConfig($stateProvider) {
  $stateProvider
    .state('app.users', {
      url: '/users',
      views: {
        'content@app': {
          templateUrl: 'templates/users-list.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          resolve: {
            list: Users => Users.list(),
            data: () => null,
          },
        },
      },
    })
    .state('app.users.edit', {
      url: '/:id',
      views: {
        'content@app': {
          templateUrl: 'templates/users-form.template.html',
          controller: 'UsersController',
          controllerAs: 'users',
          resolve: {
            list: () => null,
            data: Users => Users.get('johnsnow')
          },
        },
      },
    })
}
