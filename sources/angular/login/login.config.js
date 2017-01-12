angular
  .module('prototype')
  .config(LoginConfig)

function LoginConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        'main': {
          templateUrl: 'templates/login.template.html',
          controller: 'LoginController',
          controllerAs: 'login',
        },
      },
    })
    .state('logout', {
      url: '/logout',
      redirectTo: 'login',
    })
}

