angular
  .module('prototype')
  .config(ApiConfig)

function ApiConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:4000')
  RestangularProvider.setRestangularFields({id: '_id'})
  RestangularProvider.addResponseInterceptor(test)

  function test(data, operation) { // what, url, response, deferred
    if (operation === 'save') {
      console.log(operation)
    }
    return data
  }
}
