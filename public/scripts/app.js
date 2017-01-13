"use strict";function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("http://localhost:4000"),RestangularProvider.setRestangularFields({id:"_id"})}function ApiRun(Restangular,$state){function redirectToParentState(data,operation){return"put"!==operation&&"post"!==operation||$state.go("^",{},{reload:!0}),data}Restangular.addResponseInterceptor(redirectToParentState)}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="//localhost:4000/users/authenticate",$authProvider.authHeader="Authorization",$authProvider.tokenType="",$authProvider.authToken="",$authProvider.storageType="localStorage"}function Authentication($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",redirectTo:"app.users"})}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}}).state("logout",{url:"/logout",redirectTo:"login"})}function LoginController(Authentication,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}Authentication.login(this.credentials).then(redirectToHome)}var email=void 0,password=void 0;this.credentials={email:email,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,Authentication){function logoutInLoginState(event,toState){"login"===toState.name&&Authentication.logout()}function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=Authentication.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",logoutInLoginState),$rootScope.$on("$stateChangeStart",requireAuthentication)}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.create",{url:"/create",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.create()}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users,$stateParams){return Users.get($stateParams.id)}}}}})}function UsersController(list,data){this.list=list,this.data=data,this.options=["Stark","Lannister","Targaryen","Snow"]}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}function create(){return resource.one()}var resource=Restangular.service("users");this.list=list,this.get=get,this.create=create}angular.module("prototype",["ui.router","ui.router.redirect","satellizer","mn-form","mn-input","mn-password","mn-select","restangular","angular-loading-bar","ngAnimate"]),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),ApiRun.$inject=["Restangular","$state"],angular.module("prototype").run(ApiRun),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),Authentication.$inject=["$auth"],angular.module("prototype").service("Authentication",Authentication),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("prototype").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["Authentication","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","Authentication"],angular.module("prototype").run(LoginRun),PromisesConfig.$inject=["$qProvider"],angular.module("prototype").config(PromisesConfig),UsersConfig.$inject=["$stateProvider"],angular.module("prototype").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("prototype").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwaS9hcGkuY29uZmlnLmpzIiwiYXBpL2FwaS5ydW4uanMiLCJhcHAvYXBwLmNvbmZpZy5qcyIsImF1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbmZpZy5qcyIsImF1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiLCJob21lL2hvbWUuY29uZmlnLmpzIiwibG9hZGluZy1iYXIvbG9hZGluZy1iYXIuY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJ1bi5qcyIsInByb21pc2VzL3Byb21pc2VzLmNvbmZpZy5qcyIsInVzZXJzL3VzZXJzLmNvbmZpZy5qcyIsInVzZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiLCJ1c2Vycy91c2Vycy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkFwaUNvbmZpZyIsIlJlc3Rhbmd1bGFyUHJvdmlkZXIiLCJzZXRCYXNlVXJsIiwic2V0UmVzdGFuZ3VsYXJGaWVsZHMiLCJpZCIsIkFwaVJ1biIsIlJlc3Rhbmd1bGFyIiwiJHN0YXRlIiwicmVkaXJlY3RUb1BhcmVudFN0YXRlIiwiZGF0YSIsIm9wZXJhdGlvbiIsImdvIiwicmVsb2FkIiwiYWRkUmVzcG9uc2VJbnRlcmNlcHRvciIsImFwcENvbmZpZyIsIiRsb2NhdGlvblByb3ZpZGVyIiwiJHN0YXRlUHJvdmlkZXIiLCJodG1sNU1vZGUiLCJzdGF0ZSIsImFic3RyYWN0Iiwidmlld3MiLCJtYWluIiwidGVtcGxhdGVVcmwiLCJBdXRoZW50aWNhdGlvbkNvbmZpZyIsIiRhdXRoUHJvdmlkZXIiLCJsb2dpblVybCIsImF1dGhIZWFkZXIiLCJ0b2tlblR5cGUiLCJhdXRoVG9rZW4iLCJzdG9yYWdlVHlwZSIsIkF1dGhlbnRpY2F0aW9uIiwiJGF1dGgiLCJ0aGlzIiwibG9naW4iLCJ1c2VyIiwibG9nb3V0Iiwic3RhdHVzIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0UGF5bG9hZCIsIkhvbWVDb25maWciLCJ1cmwiLCJyZWRpcmVjdFRvIiwibG9hZGluZ0NvbmZpZyIsImNmcExvYWRpbmdCYXJQcm92aWRlciIsImluY2x1ZGVTcGlubmVyIiwiaW5jbHVkZUJhciIsIkxvZ2luQ29uZmlnIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsIkxvZ2luQ29udHJvbGxlciIsImF1dGhlbnRpY2F0ZSIsInJlZGlyZWN0VG9Ib21lIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwiZW1haWwiLCJwYXNzd29yZCIsIkxvZ2luUnVuIiwiJHJvb3RTY29wZSIsImxvZ291dEluTG9naW5TdGF0ZSIsImV2ZW50IiwidG9TdGF0ZSIsIm5hbWUiLCJyZXF1aXJlQXV0aGVudGljYXRpb24iLCJzdGF0ZVJlcXVpcmVMb2dpbiIsInN0YXJ0c1dpdGgiLCJwcmV2ZW50RGVmYXVsdCIsIiRvbiIsIlByb21pc2VzQ29uZmlnIiwiJHFQcm92aWRlciIsImVycm9yT25VbmhhbmRsZWRSZWplY3Rpb25zIiwiVXNlcnNDb25maWciLCJjb250ZW50QGFwcCIsInJlc29sdmUiLCJsaXN0IiwiVXNlcnMiLCJjcmVhdGUiLCIkc3RhdGVQYXJhbXMiLCJnZXQiLCJVc2Vyc0NvbnRyb2xsZXIiLCJvcHRpb25zIiwiVXNlcnNTZXJ2aWNlIiwicmVzb3VyY2UiLCJnZXRMaXN0Iiwib25lIiwic2VydmljZSIsImFuZ3VsYXIiLCJtb2R1bGUiLCIkaW5qZWN0IiwiY29uZmlnIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLHFCQUNqQkEsb0JBQW9CQyxXQUFXLHlCQUMvQkQsb0JBQW9CRSxzQkFBc0JDLEdBQUksUUNGaEQsUUFBU0MsUUFBT0MsWUFBYUMsUUFHM0IsUUFBU0MsdUJBQXNCQyxLQUFNQyxXQUluQyxNQUhrQixRQUFkQSxXQUFxQyxTQUFkQSxXQUN6QkgsT0FBT0ksR0FBRyxRQUFVQyxRQUFRLElBRXZCSCxLQU5USCxZQUFZTyx1QkFBdUJMLHVCQ0RyQyxRQUFT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dkMsV0FBVyxrQkFBbUIrQixpQkNEakNFLGFBQWFPLFNBQVcsZUFEeEJGLFFBQ0dDLE9BQU8sYUFDUEYsUUFBUSxRQUFTSiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgncHJvdG90eXBlJywgW1xuICAndWkucm91dGVyJyxcbiAgJ3VpLnJvdXRlci5yZWRpcmVjdCcsXG4gICdzYXRlbGxpemVyJyxcbiAgJ21uLWZvcm0nLFxuICAnbW4taW5wdXQnLFxuICAnbW4tcGFzc3dvcmQnLFxuICAnbW4tc2VsZWN0JyxcbiAgJ3Jlc3Rhbmd1bGFyJyxcbiAgJ2FuZ3VsYXItbG9hZGluZy1iYXInLFxuICAnbmdBbmltYXRlJyxcbl0pXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoQXBpQ29uZmlnKVxuXG5mdW5jdGlvbiBBcGlDb25maWcoUmVzdGFuZ3VsYXJQcm92aWRlcikge1xuICBSZXN0YW5ndWxhclByb3ZpZGVyLnNldEJhc2VVcmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcpXG4gIFJlc3Rhbmd1bGFyUHJvdmlkZXIuc2V0UmVzdGFuZ3VsYXJGaWVsZHMoe2lkOiAnX2lkJ30pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5ydW4oQXBpUnVuKVxuXG5mdW5jdGlvbiBBcGlSdW4oUmVzdGFuZ3VsYXIsICRzdGF0ZSkge1xuICBSZXN0YW5ndWxhci5hZGRSZXNwb25zZUludGVyY2VwdG9yKHJlZGlyZWN0VG9QYXJlbnRTdGF0ZSlcblxuICBmdW5jdGlvbiByZWRpcmVjdFRvUGFyZW50U3RhdGUoZGF0YSwgb3BlcmF0aW9uKSB7XG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJ3B1dCcgfHwgb3BlcmF0aW9uID09PSAncG9zdCcpIHtcbiAgICAgICRzdGF0ZS5nbygnXicsIHt9LCB7cmVsb2FkOiB0cnVlfSlcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKGFwcENvbmZpZylcblxuZnVuY3Rpb24gYXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwJywge1xuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHZpZXdzOiB7XG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhBdXRoZW50aWNhdGlvbkNvbmZpZylcblxuZnVuY3Rpb24gQXV0aGVudGljYXRpb25Db25maWcoJGF1dGhQcm92aWRlcikge1xuICAkYXV0aFByb3ZpZGVyLmxvZ2luVXJsID0gJy8vbG9jYWxob3N0OjQwMDAvdXNlcnMvYXV0aGVudGljYXRlJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhIZWFkZXIgPSAnQXV0aG9yaXphdGlvbidcbiAgJGF1dGhQcm92aWRlci50b2tlblR5cGUgPSAnJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhUb2tlbiA9ICcnXG4gICRhdXRoUHJvdmlkZXIuc3RvcmFnZVR5cGUgPSAnbG9jYWxTdG9yYWdlJ1xufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb24nLCBBdXRoZW50aWNhdGlvbilcblxuZnVuY3Rpb24gQXV0aGVudGljYXRpb24oJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEhvbWVDb25maWcpXG5cbmZ1bmN0aW9uIEhvbWVDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICByZWRpcmVjdFRvOiAnYXBwLnVzZXJzJyxcbiAgICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKGxvYWRpbmdDb25maWcpXG5cbmZ1bmN0aW9uIGxvYWRpbmdDb25maWcoY2ZwTG9hZGluZ0JhclByb3ZpZGVyKSB7XG4gIGNmcExvYWRpbmdCYXJQcm92aWRlci5pbmNsdWRlU3Bpbm5lciA9IGZhbHNlXG4gIGNmcExvYWRpbmdCYXJQcm92aWRlci5pbmNsdWRlQmFyID0gdHJ1ZVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKExvZ2luQ29uZmlnKVxuXG5mdW5jdGlvbiBMb2dpbkNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ21haW4nOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIC5zdGF0ZSgnbG9nb3V0Jywge1xuICAgICAgdXJsOiAnL2xvZ291dCcsXG4gICAgICByZWRpcmVjdFRvOiAnbG9naW4nLFxuICAgIH0pXG59XG5cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcilcblxuZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKEF1dGhlbnRpY2F0aW9uLCAkc3RhdGUpIHtcbiAgbGV0IGVtYWlsXG4gIGxldCBwYXNzd29yZFxuXG4gIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQsXG4gIH1cblxuICB0aGlzLmF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZVxuXG4gIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICBBdXRoZW50aWNhdGlvblxuICAgICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAudGhlbihyZWRpcmVjdFRvSG9tZSlcblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5ydW4oTG9naW5SdW4pXG5cbmZ1bmN0aW9uIExvZ2luUnVuKCRyb290U2NvcGUsICRzdGF0ZSwgQXV0aGVudGljYXRpb24pIHtcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgbG9nb3V0SW5Mb2dpblN0YXRlKVxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCByZXF1aXJlQXV0aGVudGljYXRpb24pXG5cbiAgZnVuY3Rpb24gbG9nb3V0SW5Mb2dpblN0YXRlKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgaWYgKHRvU3RhdGUubmFtZSA9PT0gJ2xvZ2luJykge1xuICAgICAgQXV0aGVudGljYXRpb24ubG9nb3V0KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlQXV0aGVudGljYXRpb24oZXZlbnQsIHRvU3RhdGUpIHtcbiAgICBsZXQgc3RhdGVSZXF1aXJlTG9naW4gPSB0b1N0YXRlLm5hbWUuc3RhcnRzV2l0aCgnYXBwLicpXG4gICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IEF1dGhlbnRpY2F0aW9uLnN0YXR1cygpXG5cbiAgICBpZiAoc3RhdGVSZXF1aXJlTG9naW4gJiYgIWlzQXV0aGVudGljYXRlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgJHN0YXRlLmdvKCdsb2dpbicpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoUHJvbWlzZXNDb25maWcpXG5cbmZ1bmN0aW9uIFByb21pc2VzQ29uZmlnKCRxUHJvdmlkZXIpIHtcbiAgJHFQcm92aWRlci5lcnJvck9uVW5oYW5kbGVkUmVqZWN0aW9ucyhmYWxzZSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhVc2Vyc0NvbmZpZylcblxuZnVuY3Rpb24gVXNlcnNDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC51c2VycycsIHtcbiAgICAgIHVybDogJy91c2VycycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdXNlcnMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgbGlzdDogVXNlcnMgPT4gVXNlcnMubGlzdCgpLFxuICAgICAgICAgICAgZGF0YTogKCkgPT4gbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnVzZXJzLmNyZWF0ZScsIHtcbiAgICAgIHVybDogJy9jcmVhdGUnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6ICgpID0+IG51bGwsXG4gICAgICAgICAgICBkYXRhOiAoVXNlcnMpID0+IFVzZXJzLmNyZWF0ZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC51c2Vycy5lZGl0Jywge1xuICAgICAgdXJsOiAnLzppZCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdXNlcnMtZm9ybS50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgbGlzdDogKCkgPT4gbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IChVc2VycywgJHN0YXRlUGFyYW1zKSA9PiBVc2Vycy5nZXQoJHN0YXRlUGFyYW1zLmlkKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdVc2Vyc0NvbnRyb2xsZXInLCBVc2Vyc0NvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIFVzZXJzQ29udHJvbGxlcihsaXN0LCBkYXRhKSB7XG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy5kYXRhID0gZGF0YVxuXG4gIHRoaXMub3B0aW9ucyA9IFtcbiAgICAnU3RhcmsnLFxuICAgICdMYW5uaXN0ZXInLFxuICAgICdUYXJnYXJ5ZW4nLFxuICAgICdTbm93JyxcbiAgXVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnVXNlcnMnLCBVc2Vyc1NlcnZpY2UpXG5cbmZ1bmN0aW9uIFVzZXJzU2VydmljZShSZXN0YW5ndWxhcikge1xuICBjb25zdCByZXNvdXJjZSA9IFJlc3Rhbmd1bGFyLnNlcnZpY2UoJ3VzZXJzJylcblxuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMuZ2V0ID0gZ2V0XG4gIHRoaXMuY3JlYXRlID0gY3JlYXRlXG5cbiAgZnVuY3Rpb24gbGlzdCgpIHtcbiAgICByZXR1cm4gcmVzb3VyY2UuZ2V0TGlzdCgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gcmVzb3VyY2Uub25lKGlkKS5nZXQoKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHJldHVybiByZXNvdXJjZS5vbmUoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2VzL2FuZ3VsYXIifQ==
