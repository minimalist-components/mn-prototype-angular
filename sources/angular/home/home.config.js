angular
  .module('prototype')
  .config(HomeConfig)

function HomeConfig($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/',
    views: {
      'content@app': {
        templateUrl: 'templates/home.template.html',
      },
    },
  })
}
