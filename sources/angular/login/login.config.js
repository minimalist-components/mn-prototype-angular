angular
  .module('prototype')
  .config(loginConfig);

function loginConfig($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      'main': {
        templateUrl: 'templates/login.template.html',
      },
    },
  });
}

