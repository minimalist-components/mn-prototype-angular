angular
  .module('prototype')
  .config(loadingConfig)

function loadingConfig(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false
  cfpLoadingBarProvider.includeBar = true
}
