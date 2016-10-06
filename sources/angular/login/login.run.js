angular
  .module('prototype')
  .run(LoginRun);

function LoginRun($rootScope, $state, AuthenticationService) {
  $rootScope.$on('$stateChangeStart', requireAuthentication);

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name.startsWith('app.');
    let isAuthenticated = AuthenticationService.status();

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault();
      $state.go('login');
    }
  }
}
