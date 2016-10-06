angular
  .module('prototype')
  .config(appConfig);

function appConfig($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    views: {
      main: {
        templateUrl: 'templates/app.template.html',
      },
    },
  });
}
