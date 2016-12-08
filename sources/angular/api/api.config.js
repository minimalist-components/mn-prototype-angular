angular
  .module('prototype')
  .config(ApiConfig)

function ApiConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://private-a82ea-samples9.apiary-mock.com')
}
