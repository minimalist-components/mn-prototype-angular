"use strict";function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("http://localhost:4000"),RestangularProvider.setRestangularFields({id:"_id"})}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="//localhost:4000/users/authenticate",$authProvider.authHeader="Authorization",$authProvider.tokenType="",$authProvider.authToken="",$authProvider.storageType="localStorage"}function AuthenticationService($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",redirectTo:"app.users"})}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function LoginController(AuthenticationService,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}AuthenticationService.login(this.credentials).then(redirectToHome)}var email=void 0,password=void 0;this.credentials={email:email,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,AuthenticationService){function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=AuthenticationService.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",requireAuthentication)}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.create",{url:"/create",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.create()}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users,$stateParams){return Users.get($stateParams.id)}}}}})}function UsersController(list,data){this.list=list,this.data=data}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}function create(){return resource.one()}var resource=Restangular.service("users");this.list=list,this.get=get,this.create=create}angular.module("prototype",["ui.router","ui.router.redirect","satellizer","mn-form","mn-input","restangular","angular-loading-bar","ngAnimate"]),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),AuthenticationService.$inject=["$auth"],angular.module("prototype").service("AuthenticationService",AuthenticationService),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("prototype").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["AuthenticationService","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","AuthenticationService"],angular.module("prototype").run(LoginRun),PromisesConfig.$inject=["$qProvider"],angular.module("prototype").config(PromisesConfig),UsersConfig.$inject=["$stateProvider"],angular.module("prototype").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("prototype").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwaS9hcGkuY29uZmlnLmpzIiwiYXBwL2FwcC5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwiaG9tZS9ob21lLmNvbmZpZy5qcyIsImxvYWRpbmctYmFyL2xvYWRpbmctYmFyLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanMiLCJsb2dpbi9sb2dpbi5ydW4uanMiLCJwcm9taXNlcy9wcm9taXNlcy5jb25maWcuanMiLCJ1c2Vycy91c2Vycy5jb25maWcuanMiLCJ1c2Vycy91c2Vycy5jb250cm9sbGVyLmpzIiwidXNlcnMvdXNlcnMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBcGlDb25maWciLCJSZXN0YW5ndWxhclByb3ZpZGVyIiwic2V0QmFzZVVybCIsInNldFJlc3Rhbmd1bGFyRmllbGRzIiwiaWQiLCJhcHBDb25maWciLCIkbG9jYXRpb25Qcm92aWRlciIsIiRzdGF0ZVByb3ZpZGVyIiwiaHRtbDVNb2RlIiwic3RhdGUiLCJhYnN0cmFjdCIsInZpZXdzIiwibWFpbiIsInRlbXBsYXRlVXJsIiwiQXV0aGVudGljYXRpb25Db25maWciLCIkYXV0aFByb3ZpZGVyIiwibG9naW5VcmwiLCJhdXRoSGVhZGVyIiwidG9rZW5UeXBlIiwiYXV0aFRva2VuIiwic3RvcmFnZVR5cGUiLCJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCIkYXV0aCIsInRoaXMiLCJsb2dpbiIsInVzZXIiLCJsb2dvdXQiLCJzdGF0dXMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRQYXlsb2FkIiwiSG9tZUNvbmZpZyIsInVybCIsInJlZGlyZWN0VG8iLCJsb2FkaW5nQ29uZmlnIiwiY2ZwTG9hZGluZ0JhclByb3ZpZGVyIiwiaW5jbHVkZVNwaW5uZXIiLCJpbmNsdWRlQmFyIiwiTG9naW5Db25maWciLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiTG9naW5Db250cm9sbGVyIiwiJHN0YXRlIiwiYXV0aGVudGljYXRlIiwicmVkaXJlY3RUb0hvbWUiLCJnbyIsImNyZWRlbnRpYWxzIiwidGhlbiIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpblJ1biIsIiRyb290U2NvcGUiLCJyZXF1aXJlQXV0aGVudGljYXRpb24iLCJldmVudCIsInRvU3RhdGUiLCJzdGF0ZVJlcXVpcmVMb2dpbiIsIm5hbWUiLCJzdGFydHNXaXRoIiwicHJldmVudERlZmF1bHQiLCIkb24iLCJQcm9taXNlc0NvbmZpZyIsIiRxUHJvdmlkZXIiLCJlcnJvck9uVW5oYW5kbGVkUmVqZWN0aW9ucyIsIlVzZXJzQ29uZmlnIiwiY29udGVudEBhcHAiLCJyZXNvbHZlIiwibGlzdCIsIlVzZXJzIiwiZGF0YSIsImNyZWF0ZSIsIiRzdGF0ZVBhcmFtcyIsImdldCIsIlVzZXJzQ29udHJvbGxlciIsIlVzZXJzU2VydmljZSIsIlJlc3Rhbmd1bGFyIiwicmVzb3VyY2UiLCJnZXRMaXN0Iiwib25lIiwic2VydmljZSIsImFuZ3VsYXIiLCJtb2R1bGUiLCIkaW5qZWN0IiwiY29uZmlnIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLHFCQUNqQkEsb0JBQW9CQyxXQUFXLHlCQUMvQkQsb0JBQW9CRSxzQkFBc0JDLEdBQUksUUNGaEQsUUFBU0MsV0FBVUMsa0JBQW1CQyxnQkFDcENELGtCQUFrQkUsV0FBVSxHQUU1QkQsZUFBZUUsTUFBTSxPQUNuQkMsWUFBVSxFQUNWQyxPQUNFQyxNQUNFQyxZQUFhLGtDQ1ByQixRQUFTQyxzQkFBcUJDLGVBQzVCQSxjQUFjQyxTQUFXLHNDQUN6QkQsY0FBY0UsV0FBYSxnQkFDM0JGLGNBQWNHLFVBQVksR0FDMUJILGNBQWNJLFVBQVksR0FDMUJKLGNBQWNLLFlBQWMsZUNMOUIsUUFBU0MsdUJBQXNCQyxPQUM3QkMsS0FBS0MsTUFBUSxTQUFBQyxNQUFBLE1BQUFI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UyxXQUFXa0QsU0FBVyxrQkFEdEJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT25ELFlDRFZHLGNBQWMrQyxTQUFXLHlCQUR6QkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPaEQsZUNEVkksWUFBWTJDLFNBQVcsa0JBRHZCRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU81QyxhQ0RWRyxnQkFBZ0J3QyxTQUFXLHdCQUF5QixVQURwREYsUUFDR0MsT0FBTyxhQUNQekMsV0FBVyxrQkFBbUJFLGlCQ0RqQ1MsU0FBUytCLFNBQVcsYUFBYyxTQUFVLHlCQUQ1Q0YsUUFDR0MsT0FBTyxhQUNQRyxJQUFJakMsVUNEUFUsZUFBZXFCLFNBQVcsY0FEMUJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3RCLGdCQ0RWRyxZQUFZa0IsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT25CLGFDRFZTLGdCQUFnQlMsU0FBVyxPQUFRLFFBRG5DRixRQUNHQyxPQUFPLGFBQ1B6QyxXQUFXLGtCQUFtQmlDLGlCQ0RqQ0MsYUFBYVEsU0FBVyxlQUR4QkYsUUFDR0MsT0FBTyxhQUNQRixRQUFRLFFBQVNMIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdwcm90b3R5cGUnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAndWkucm91dGVyLnJlZGlyZWN0JyxcbiAgJ3NhdGVsbGl6ZXInLFxuICAnbW4tZm9ybScsXG4gICdtbi1pbnB1dCcsXG4gICdyZXN0YW5ndWxhcicsXG4gICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcbiAgJ25nQW5pbWF0ZScsXG5dKVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEFwaUNvbmZpZylcblxuZnVuY3Rpb24gQXBpQ29uZmlnKFJlc3Rhbmd1bGFyUHJvdmlkZXIpIHtcbiAgUmVzdGFuZ3VsYXJQcm92aWRlci5zZXRCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjQwMDAnKVxuICBSZXN0YW5ndWxhclByb3ZpZGVyLnNldFJlc3Rhbmd1bGFyRmllbGRzKHtpZDogJ19pZCd9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKGFwcENvbmZpZylcblxuZnVuY3Rpb24gYXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwJywge1xuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHZpZXdzOiB7XG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhBdXRoZW50aWNhdGlvbkNvbmZpZylcblxuZnVuY3Rpb24gQXV0aGVudGljYXRpb25Db25maWcoJGF1dGhQcm92aWRlcikge1xuICAkYXV0aFByb3ZpZGVyLmxvZ2luVXJsID0gJy8vbG9jYWxob3N0OjQwMDAvdXNlcnMvYXV0aGVudGljYXRlJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhIZWFkZXIgPSAnQXV0aG9yaXphdGlvbidcbiAgJGF1dGhQcm92aWRlci50b2tlblR5cGUgPSAnJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhUb2tlbiA9ICcnXG4gICRhdXRoUHJvdmlkZXIuc3RvcmFnZVR5cGUgPSAnbG9jYWxTdG9yYWdlJ1xufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb25TZXJ2aWNlJywgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvblNlcnZpY2UoJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEhvbWVDb25maWcpXG5cbmZ1bmN0aW9uIEhvbWVDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICByZWRpcmVjdFRvOiAnYXBwLnVzZXJzJyxcbiAgICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKGxvYWRpbmdDb25maWcpXG5cbmZ1bmN0aW9uIGxvYWRpbmdDb25maWcoY2ZwTG9hZGluZ0JhclByb3ZpZGVyKSB7XG4gIGNmcExvYWRpbmdCYXJQcm92aWRlci5pbmNsdWRlU3Bpbm5lciA9IGZhbHNlXG4gIGNmcExvYWRpbmdCYXJQcm92aWRlci5pbmNsdWRlQmFyID0gdHJ1ZVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKExvZ2luQ29uZmlnKVxuXG5mdW5jdGlvbiBMb2dpbkNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21haW4nOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvblNlcnZpY2UsICRzdGF0ZSkge1xuICBsZXQgZW1haWxcbiAgbGV0IHBhc3N3b3JkXG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICBlbWFpbCxcbiAgICBwYXNzd29yZCxcbiAgfVxuXG4gIHRoaXMuYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlXG5cbiAgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAudGhlbihyZWRpcmVjdFRvSG9tZSlcblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5ydW4oTG9naW5SdW4pXG5cbmZ1bmN0aW9uIExvZ2luUnVuKCRyb290U2NvcGUsICRzdGF0ZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIHJlcXVpcmVBdXRoZW50aWNhdGlvbilcblxuICBmdW5jdGlvbiByZXF1aXJlQXV0aGVudGljYXRpb24oZXZlbnQsIHRvU3RhdGUpIHtcbiAgICBsZXQgc3RhdGVSZXF1aXJlTG9naW4gPSB0b1N0YXRlLm5hbWUuc3RhcnRzV2l0aCgnYXBwLicpXG4gICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IEF1dGhlbnRpY2F0aW9uU2VydmljZS5zdGF0dXMoKVxuXG4gICAgaWYgKHN0YXRlUmVxdWlyZUxvZ2luICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICRzdGF0ZS5nbygnbG9naW4nKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKFByb21pc2VzQ29uZmlnKVxuXG5mdW5jdGlvbiBQcm9taXNlc0NvbmZpZygkcVByb3ZpZGVyKSB7XG4gICRxUHJvdmlkZXIuZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMoZmFsc2UpXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoVXNlcnNDb25maWcpXG5cbmZ1bmN0aW9uIFVzZXJzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAudXNlcnMnLCB7XG4gICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWxpc3QudGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6IFVzZXJzID0+IFVzZXJzLmxpc3QoKSxcbiAgICAgICAgICAgIGRhdGE6ICgpID0+IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC51c2Vycy5jcmVhdGUnLCB7XG4gICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250ZW50QGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy91c2Vycy1mb3JtLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2Vyc0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzJyxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBsaXN0OiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgZGF0YTogKFVzZXJzKSA9PiBVc2Vycy5jcmVhdGUoKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAudXNlcnMuZWRpdCcsIHtcbiAgICAgIHVybDogJy86aWQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6ICgpID0+IG51bGwsXG4gICAgICAgICAgICBkYXRhOiAoVXNlcnMsICRzdGF0ZVBhcmFtcykgPT4gVXNlcnMuZ2V0KCRzdGF0ZVBhcmFtcy5pZClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29udHJvbGxlcignVXNlcnNDb250cm9sbGVyJywgVXNlcnNDb250cm9sbGVyKVxuXG5mdW5jdGlvbiBVc2Vyc0NvbnRyb2xsZXIobGlzdCwgZGF0YSkge1xuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMuZGF0YSA9IGRhdGFcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnNlcnZpY2UoJ1VzZXJzJywgVXNlcnNTZXJ2aWNlKVxuXG5mdW5jdGlvbiBVc2Vyc1NlcnZpY2UoUmVzdGFuZ3VsYXIpIHtcbiAgY29uc3QgcmVzb3VyY2UgPSBSZXN0YW5ndWxhci5zZXJ2aWNlKCd1c2VycycpXG5cbiAgdGhpcy5saXN0ID0gbGlzdFxuICB0aGlzLmdldCA9IGdldFxuICB0aGlzLmNyZWF0ZSA9IGNyZWF0ZVxuXG4gIGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHJlc291cmNlLmdldExpc3QoKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KGlkKSB7XG4gICAgcmV0dXJuIHJlc291cmNlLm9uZShpZCkuZ2V0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICByZXR1cm4gcmVzb3VyY2Uub25lKClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlcy9hbmd1bGFyIn0=
