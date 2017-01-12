angular
  .module('prototype')
  .run(ApiRun)

function ApiRun(Restangular, $state) {
  Restangular.addResponseInterceptor(redirectToParentState)

  function redirectToParentState(data, operation) {
    if (operation === 'put' || operation === 'post') {
      $state.go('^', {}, {reload: true})
    }
    return data
  }
}
