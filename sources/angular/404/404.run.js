angular
  .module('prototype')
  .run(NotFoundRun)

function NotFoundRun($rootScope, $state) {
  $rootScope.$on('$stateChangeError', redirectTo404)

  function redirectTo404(event, toState, toParams, fromState, fromParams, error) {
    if (error.status === 404) {
      $state.go('404')
    }
  }
}
