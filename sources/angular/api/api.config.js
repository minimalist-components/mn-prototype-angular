angular
  .module('prototype')
  .config(ApiConfig)

function ApiConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:4000')
  RestangularProvider.setRestangularFields({id: '_id'})
}
