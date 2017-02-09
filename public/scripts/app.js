"use strict";function NotFoundConfig($urlRouterProvider,$stateProvider){function goTo404($injector){var $state=$injector.get("$state"),message="Could not find a state associated with url "+window.location.pathname;$state.go("404",{message:message})}$urlRouterProvider.otherwise(goTo404),$stateProvider.state("404",{views:{main:{templateUrl:"templates/404.template.html"}}})}function NotFoundRun($rootScope,$state){function redirectTo404(event,toState,toParams,fromState,fromParams,error){404===error.status&&$state.go("404")}$rootScope.$on("$stateChangeError",redirectTo404)}function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("http://localhost:4000"),RestangularProvider.setRestangularFields({id:"_id"})}function ApiRun(Restangular,$state){function redirectToParentState(data,operation){return"put"!==operation&&"post"!==operation||$state.go("^",{},{reload:!0}),data}Restangular.addResponseInterceptor(redirectToParentState)}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="//localhost:4000/users/authenticate",$authProvider.authHeader="Authorization",$authProvider.tokenType="",$authProvider.authToken="",$authProvider.storageType="localStorage"}function Authentication($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",redirectTo:"app.users"})}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}}).state("logout",{url:"/logout",redirectTo:"login"})}function LoginController(Authentication,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}Authentication.login(this.credentials).then(redirectToHome)}var email=void 0,password=void 0;this.credentials={email:email,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,Authentication){function logoutInLoginState(event,toState){"login"===toState.name&&Authentication.logout()}function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=Authentication.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}function unauthorized(event,toState,toParams,fromState,fromParams,error){401===error.status&&$state.go("login")}$rootScope.$on("$stateChangeStart",logoutInLoginState),$rootScope.$on("$stateChangeStart",requireAuthentication),$rootScope.$on("$stateChangeError",unauthorized)}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.create",{url:"/create",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.create()}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users,$stateParams){return Users.get($stateParams.id)}}}}})}function UsersController(list,data){this.list=list,this.data=data,this.options=["Stark","Lannister","Targaryen","Snow"]}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}function create(){return resource.one()}var resource=Restangular.service("users");this.list=list,this.get=get,this.create=create}angular.module("prototype",["ui.router","ui.router.redirect","satellizer","mn-sidenav","restangular","angular-loading-bar","ngAnimate","mn-form","mn-input","mn-password","mn-select"]),NotFoundConfig.$inject=["$urlRouterProvider","$stateProvider"],angular.module("prototype").config(NotFoundConfig),NotFoundRun.$inject=["$rootScope","$state"],angular.module("prototype").run(NotFoundRun),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),ApiRun.$inject=["Restangular","$state"],angular.module("prototype").run(ApiRun),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),Authentication.$inject=["$auth"],angular.module("prototype").service("Authentication",Authentication),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("prototype").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["Authentication","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","Authentication"],angular.module("prototype").run(LoginRun),PromisesConfig.$inject=["$qProvider"],angular.module("prototype").config(PromisesConfig),UsersConfig.$inject=["$stateProvider"],angular.module("prototype").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("prototype").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIjQwNC80MDQuY29uZmlnLmpzIiwiNDA0LzQwNC5ydW4uanMiLCJhcGkvYXBpLmNvbmZpZy5qcyIsImFwaS9hcGkucnVuLmpzIiwiYXBwL2FwcC5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwiaG9tZS9ob21lLmNvbmZpZy5qcyIsImxvYWRpbmctYmFyL2xvYWRpbmctYmFyLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanMiLCJsb2dpbi9sb2dpbi5ydW4uanMiLCJwcm9taXNlcy9wcm9taXNlcy5jb25maWcuanMiLCJ1c2Vycy91c2Vycy5jb25maWcuanMiLCJ1c2Vycy91c2Vycy5jb250cm9sbGVyLmpzIiwidXNlcnMvdXNlcnMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJOb3RGb3VuZENvbmZpZyIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIiRzdGF0ZVByb3ZpZGVyIiwiZ29UbzQwNCIsIiRpbmplY3RvciIsIiRzdGF0ZSIsImdldCIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ28iLCJvdGhlcndpc2UiLCJzdGF0ZSIsInZpZXdzIiwibWFpbiIsInRlbXBsYXRlVXJsIiwiTm90Rm91bmRSdW4iLCIkcm9vdFNjb3BlIiwicmVkaXJlY3RUbzQwNCIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsImVycm9yIiwic3RhdHVzIiwiJG9uIiwiQXBpQ29uZmlnIiwiUmVzdGFuZ3VsYXJQcm92aWRlciIsInNldEJhc2VVcmwiLCJzZXRSZXN0YW5ndWxhckZpZWxkcyIsImlkIiwiQXBpUnVuIiwiUmVzdGFuZ3VsYXIiLCJyZWRpcmVjdFRvUGFyZW50U3RhdGUiLCJkYXRhIiwib3BlcmF0aW9uIiwicmVsb2FkIiwiYWRkUmVzcG9uc2VJbnRlcmNlcHRvciIsImFwcENvbmZpZyIsIiRsb2NhdGlvblByb3ZpZGVyIiwiaHRtbDVNb2RlIiwiYWJzdHJhY3QiLCJBdXRoZW50aWNhdGlvbkNvbmZpZyIsIiRhdXRoUHJvdmlkZXIiLCJsb2dpblVybCIsImF1dGhIZWFkZXIiLCJ0b2tlblR5cGUiLCJhdXRoVG9rZW4iLCJzdG9yYWdlVHlwZSIsIkF1dGhlbnRpY2F0aW9uIiwiJGF1dGgiLCJ0aGlzIiwibG9naW4iLCJ1c2VyIiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0UGF5bG9hZCIsIkhvbWVDb25maWciLCJ1cmwiLCJyZWRpcmVjdFRvIiwibG9hZGluZ0NvbmZpZyIsImNmcExvYWRpbmdCYXJQcm92aWRlciIsImluY2x1ZGVTcGlubmVyIiwiaW5jbHVkZUJhciIsIkxvZ2luQ29uZmlnIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsIkxvZ2luQ29udHJvbGxlciIsImF1dGhlbnRpY2F0ZSIsInJlZGlyZWN0VG9Ib21lIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwiZW1haWwiLCJwYXNzd29yZCIsIkxvZ2luUnVuIiwibG9nb3V0SW5Mb2dpblN0YXRlIiwibmFtZSIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsInN0YXRlUmVxdWlyZUxvZ2luIiwic3RhcnRzV2l0aCIsInByZXZlbnREZWZhdWx0IiwidW5hdXRob3JpemVkIiwiUHJvbWlzZXNDb25maWciLCIkcVByb3ZpZGVyIiwiZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMiLCJVc2Vyc0NvbmZpZyIsImNvbnRlbnRAYXBwIiwicmVzb2x2ZSIsImxpc3QiLCJVc2VycyIsImNyZWF0ZSIsIiRzdGF0ZVBhcmFtcyIsIlVzZXJzQ29udHJvbGxlciIsIm9wdGlvbnMiLCJVc2Vyc1NlcnZpY2UiLCJyZXNvdXJjZSIsImdldExpc3QiLCJvbmUiLCJzZXJ2aWNlIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRpbmplY3QiLCJjb25maWci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QUFTSiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgncHJvdG90eXBlJywgW1xuICAndWkucm91dGVyJyxcbiAgJ3VpLnJvdXRlci5yZWRpcmVjdCcsXG4gICdzYXRlbGxpemVyJyxcbiAgJ21uLXNpZGVuYXYnLFxuICAncmVzdGFuZ3VsYXInLFxuICAnYW5ndWxhci1sb2FkaW5nLWJhcicsXG4gICduZ0FuaW1hdGUnLFxuICAnbW4tZm9ybScsXG4gICdtbi1pbnB1dCcsXG4gICdtbi1wYXNzd29yZCcsXG4gICdtbi1zZWxlY3QnLFxuXSlcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhOb3RGb3VuZENvbmZpZylcblxuZnVuY3Rpb24gTm90Rm91bmRDb25maWcoJHVybFJvdXRlclByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKGdvVG80MDQpXG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJzQwNCcsIHtcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtYWluJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzLzQwNC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICAvLyBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICAvLyBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG5cbiAgZnVuY3Rpb24gZ29UbzQwNCgkaW5qZWN0b3IpIHtcbiAgICBjb25zdCAkc3RhdGUgPSAkaW5qZWN0b3IuZ2V0KCckc3RhdGUnKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ291bGQgbm90IGZpbmQgYSBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggdXJsICR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWBcbiAgICAkc3RhdGUuZ28oJzQwNCcsIHttZXNzYWdlfSlcbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKE5vdEZvdW5kUnVuKVxuXG5mdW5jdGlvbiBOb3RGb3VuZFJ1bigkcm9vdFNjb3BlLCAkc3RhdGUpIHtcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZUVycm9yJywgcmVkaXJlY3RUbzQwNClcblxuICBmdW5jdGlvbiByZWRpcmVjdFRvNDA0KGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zLCBlcnJvcikge1xuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgJHN0YXRlLmdvKCc0MDQnKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEFwaUNvbmZpZylcblxuZnVuY3Rpb24gQXBpQ29uZmlnKFJlc3Rhbmd1bGFyUHJvdmlkZXIpIHtcbiAgUmVzdGFuZ3VsYXJQcm92aWRlci5zZXRCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjQwMDAnKVxuICBSZXN0YW5ndWxhclByb3ZpZGVyLnNldFJlc3Rhbmd1bGFyRmllbGRzKHtpZDogJ19pZCd9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKEFwaVJ1bilcblxuZnVuY3Rpb24gQXBpUnVuKFJlc3Rhbmd1bGFyLCAkc3RhdGUpIHtcbiAgUmVzdGFuZ3VsYXIuYWRkUmVzcG9uc2VJbnRlcmNlcHRvcihyZWRpcmVjdFRvUGFyZW50U3RhdGUpXG5cbiAgZnVuY3Rpb24gcmVkaXJlY3RUb1BhcmVudFN0YXRlKGRhdGEsIG9wZXJhdGlvbikge1xuICAgIGlmIChvcGVyYXRpb24gPT09ICdwdXQnIHx8IG9wZXJhdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nLCB7fSwge3JlbG9hZDogdHJ1ZX0pXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhhcHBDb25maWcpXG5cbmZ1bmN0aW9uIGFwcENvbmZpZygkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIpIHtcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXG5cbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcCcsIHtcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICB2aWV3czoge1xuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoQXV0aGVudGljYXRpb25Db25maWcpXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uQ29uZmlnKCRhdXRoUHJvdmlkZXIpIHtcbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9ICcvL2xvY2FsaG9zdDo0MDAwL3VzZXJzL2F1dGhlbnRpY2F0ZSdcbiAgJGF1dGhQcm92aWRlci5hdXRoSGVhZGVyID0gJ0F1dGhvcml6YXRpb24nXG4gICRhdXRoUHJvdmlkZXIudG9rZW5UeXBlID0gJydcbiAgJGF1dGhQcm92aWRlci5hdXRoVG9rZW4gPSAnJ1xuICAkYXV0aFByb3ZpZGVyLnN0b3JhZ2VUeXBlID0gJ2xvY2FsU3RvcmFnZSdcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnNlcnZpY2UoJ0F1dGhlbnRpY2F0aW9uJywgQXV0aGVudGljYXRpb24pXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uKCRhdXRoKSB7XG4gIHRoaXMubG9naW4gPSB1c2VyID0+ICRhdXRoLmxvZ2luKHVzZXIpXG4gIHRoaXMubG9nb3V0ID0gKCkgPT4gJGF1dGgubG9nb3V0KClcbiAgdGhpcy5zdGF0dXMgPSAoKSA9PiAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKVxuICB0aGlzLnVzZXIgPSAoKSA9PiAkYXV0aC5nZXRQYXlsb2FkKClcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhIb21lQ29uZmlnKVxuXG5mdW5jdGlvbiBIb21lQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAuaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgcmVkaXJlY3RUbzogJ2FwcC51c2VycycsXG4gICAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhsb2FkaW5nQ29uZmlnKVxuXG5mdW5jdGlvbiBsb2FkaW5nQ29uZmlnKGNmcExvYWRpbmdCYXJQcm92aWRlcikge1xuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZVNwaW5uZXIgPSBmYWxzZVxuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZUJhciA9IHRydWVcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhMb2dpbkNvbmZpZylcblxuZnVuY3Rpb24gTG9naW5Db25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtYWluJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2xvZ2luJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2xvZ291dCcsIHtcbiAgICAgIHVybDogJy9sb2dvdXQnLFxuICAgICAgcmVkaXJlY3RUbzogJ2xvZ2luJyxcbiAgICB9KVxufVxuXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvbiwgJHN0YXRlKSB7XG4gIGxldCBlbWFpbFxuICBsZXQgcGFzc3dvcmRcblxuICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICB9XG5cbiAgdGhpcy5hdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGVcblxuICBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgQXV0aGVudGljYXRpb25cbiAgICAgIC5sb2dpbih0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgLnRoZW4ocmVkaXJlY3RUb0hvbWUpXG5cbiAgICBmdW5jdGlvbiByZWRpcmVjdFRvSG9tZSgpIHtcbiAgICAgICRzdGF0ZS5nbygnYXBwLmhvbWUnKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKExvZ2luUnVuKVxuXG5mdW5jdGlvbiBMb2dpblJ1bigkcm9vdFNjb3BlLCAkc3RhdGUsIEF1dGhlbnRpY2F0aW9uKSB7XG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGxvZ291dEluTG9naW5TdGF0ZSlcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgcmVxdWlyZUF1dGhlbnRpY2F0aW9uKVxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlRXJyb3InLCB1bmF1dGhvcml6ZWQpXG5cbiAgZnVuY3Rpb24gbG9nb3V0SW5Mb2dpblN0YXRlKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgaWYgKHRvU3RhdGUubmFtZSA9PT0gJ2xvZ2luJykge1xuICAgICAgQXV0aGVudGljYXRpb24ubG9nb3V0KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlQXV0aGVudGljYXRpb24oZXZlbnQsIHRvU3RhdGUpIHtcbiAgICBsZXQgc3RhdGVSZXF1aXJlTG9naW4gPSB0b1N0YXRlLm5hbWUuc3RhcnRzV2l0aCgnYXBwLicpXG4gICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IEF1dGhlbnRpY2F0aW9uLnN0YXR1cygpXG5cbiAgICBpZiAoc3RhdGVSZXF1aXJlTG9naW4gJiYgIWlzQXV0aGVudGljYXRlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgJHN0YXRlLmdvKCdsb2dpbicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5hdXRob3JpemVkKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zLCBlcnJvcikge1xuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgJHN0YXRlLmdvKCdsb2dpbicpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoUHJvbWlzZXNDb25maWcpXG5cbmZ1bmN0aW9uIFByb21pc2VzQ29uZmlnKCRxUHJvdmlkZXIpIHtcbiAgJHFQcm92aWRlci5lcnJvck9uVW5oYW5kbGVkUmVqZWN0aW9ucyhmYWxzZSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhVc2Vyc0NvbmZpZylcblxuZnVuY3Rpb24gVXNlcnNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC51c2VycycsIHtcbiAgICAgIHVybDogJy91c2VycycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdXNlcnMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgbGlzdDogVXNlcnMgPT4gVXNlcnMubGlzdCgpLFxuICAgICAgICAgICAgZGF0YTogKCkgPT4gbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnVzZXJzLmNyZWF0ZScsIHtcbiAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6ICgpID0+IG51bGwsXG4gICAgICAgICAgICBkYXRhOiAoVXNlcnMpID0+IFVzZXJzLmNyZWF0ZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC51c2Vycy5lZGl0Jywge1xuICAgICAgdXJsOiAnLzppZCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdXNlcnMtZm9ybS50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgbGlzdDogKCkgPT4gbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IChVc2VycywgJHN0YXRlUGFyYW1zKSA9PiBVc2Vycy5nZXQoJHN0YXRlUGFyYW1zLmlkKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdVc2Vyc0NvbnRyb2xsZXInLCBVc2Vyc0NvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIFVzZXJzQ29udHJvbGxlcihsaXN0LCBkYXRhKSB7XG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy5kYXRhID0gZGF0YVxuXG4gIHRoaXMub3B0aW9ucyA9IFtcbiAgICAnU3RhcmsnLFxuICAgICdMYW5uaXN0ZXInLFxuICAgICdUYXJnYXJ5ZW4nLFxuICAgICdTbm93JyxcbiAgXVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnVXNlcnMnLCBVc2Vyc1NlcnZpY2UpXG5cbmZ1bmN0aW9uIFVzZXJzU2VydmljZShSZXN0YW5ndWxhcikge1xuICBjb25zdCByZXNvdXJjZSA9IFJlc3Rhbmd1bGFyLnNlcnZpY2UoJ3VzZXJzJylcblxuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMuZ2V0ID0gZ2V0XG4gIHRoaXMuY3JlYXRlID0gY3JlYXRlXG5cbiAgZnVuY3Rpb24gbGlzdCgpIHtcbiAgICByZXR1cm4gcmVzb3VyY2UuZ2V0TGlzdCgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gcmVzb3VyY2Uub25lKGlkKS5nZXQoKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHJldHVybiByZXNvdXJjZS5vbmUoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2VzL2FuZ3VsYXIifQ==
