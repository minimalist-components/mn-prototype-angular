angular
  .module('prototype')
  .config(PromisesConfig)

function PromisesConfig($qProvider) {
  $qProvider.errorOnUnhandledRejections(false)
}
