angular
  .module('prototype')
  .config(NotFoundConfig)

function NotFoundConfig($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise(goTo404)

  $stateProvider
    .state('404', {
      views: {
        'main': {
          templateUrl: 'templates/404.template.html',
          // controller: 'UsersController',
          // controllerAs: 'users',
        },
      },
    })

  function goTo404($injector) {
    const $state = $injector.get('$state')
    const message = `Could not find a state associated with url ${window.location.pathname}`
    $state.go('404', {message})
  }
}
