angular
  .module('prototype')
  .config(AuthenticationConfig)

function AuthenticationConfig($authProvider) {
  $authProvider.loginUrl = '//localhost:4000/users/authenticate'
  $authProvider.authHeader = 'Authorization'
  $authProvider.tokenType = ''
  $authProvider.authToken = ''
  $authProvider.storageType = 'localStorage'
}
