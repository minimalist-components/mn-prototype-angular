angular
  .module('prototype')
  .run(loginRun);

function loginRun($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', requireAuthentication);

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name.startsWith('app.');
    let isAuthenticated = false; // Authentication.status();

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault();
      $state.go('login');
    }
  }
}
