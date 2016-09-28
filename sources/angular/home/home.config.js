angular
  .module('prototype')
  .config(homeConfig);

function homeConfig($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/',
    views: {
      'main': {
        templateUrl: 'templates/home.template.html',
      },
    },
  });
}
