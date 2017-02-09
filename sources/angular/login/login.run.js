angular
  .module('prototype')
  .run(LoginRun)

function LoginRun($rootScope, $state, Authentication) {
  $rootScope.$on('$stateChangeStart', logoutInLoginState)
  $rootScope.$on('$stateChangeStart', requireAuthentication)
  $rootScope.$on('$stateChangeError', unauthorized)

  function logoutInLoginState(event, toState) {
    if (toState.name === 'login') {
      Authentication.logout()
    }
  }

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name.startsWith('app.')
    let isAuthenticated = Authentication.status()

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault()
      $state.go('login')
    }
  }

  function unauthorized(event, toState, toParams, fromState, fromParams, error) {
    if (error.status === 401) {
      $state.go('login')
    }
  }
}
