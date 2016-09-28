angular
  .module('prototype')
  .run(loginRun);

function loginRun($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', requireAuthentication);

  function requireAuthentication(event, toState) {
    let stateRequireLogin = /^app/.test(toState.name);
    let isAuthenticated = false; // Authentication.status();
    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault();
      $state.go('login');
    }
  }
}
