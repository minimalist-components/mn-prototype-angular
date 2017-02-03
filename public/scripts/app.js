"use strict";function NotFoundConfig($urlRouterProvider,$stateProvider){function goTo404($injector){var $state=$injector.get("$state"),message="Could not find a state associated with url "+window.location.pathname;$state.go("404",{message:message})}$urlRouterProvider.otherwise(goTo404),$stateProvider.state("404",{views:{main:{templateUrl:"templates/404.template.html"}}})}function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("http://localhost:4000"),RestangularProvider.setRestangularFields({id:"_id"})}function ApiRun(Restangular,$state){function redirectToParentState(data,operation){return"put"!==operation&&"post"!==operation||$state.go("^",{},{reload:!0}),data}Restangular.addResponseInterceptor(redirectToParentState)}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="//localhost:4000/users/authenticate",$authProvider.authHeader="Authorization",$authProvider.tokenType="",$authProvider.authToken="",$authProvider.storageType="localStorage"}function Authentication($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",redirectTo:"app.users"})}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}}).state("logout",{url:"/logout",redirectTo:"login"})}function LoginController(Authentication,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}Authentication.login(this.credentials).then(redirectToHome)}var email=void 0,password=void 0;this.credentials={email:email,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,Authentication){function logoutInLoginState(event,toState){"login"===toState.name&&Authentication.logout()}function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=Authentication.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",logoutInLoginState),$rootScope.$on("$stateChangeStart",requireAuthentication)}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.create",{url:"/create",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.create()}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users,$stateParams){return Users.get($stateParams.id)}}}}})}function UsersController(list,data){this.list=list,this.data=data,this.options=["Stark","Lannister","Targaryen","Snow"]}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}function create(){return resource.one()}var resource=Restangular.service("users");this.list=list,this.get=get,this.create=create}angular.module("prototype",["ui.router","ui.router.redirect","satellizer","mn-sidenav","restangular","angular-loading-bar","ngAnimate","mn-form","mn-input","mn-password","mn-select"]),NotFoundConfig.$inject=["$urlRouterProvider","$stateProvider"],angular.module("prototype").config(NotFoundConfig),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),ApiRun.$inject=["Restangular","$state"],angular.module("prototype").run(ApiRun),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),Authentication.$inject=["$auth"],angular.module("prototype").service("Authentication",Authentication),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("prototype").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["Authentication","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","Authentication"],angular.module("prototype").run(LoginRun),PromisesConfig.$inject=["$qProvider"],angular.module("prototype").config(PromisesConfig),UsersConfig.$inject=["$stateProvider"],angular.module("prototype").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("prototype").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIjQwNC80MDQuY29uZmlnLmpzIiwiYXBpL2FwaS5jb25maWcuanMiLCJhcGkvYXBpLnJ1bi5qcyIsImFwcC9hcHAuY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsImhvbWUvaG9tZS5jb25maWcuanMiLCJsb2FkaW5nLWJhci9sb2FkaW5nLWJhci5jb25maWcuanMiLCJsb2dpbi9sb2dpbi5jb25maWcuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucnVuLmpzIiwicHJvbWlzZXMvcHJvbWlzZXMuY29uZmlnLmpzIiwidXNlcnMvdXNlcnMuY29uZmlnLmpzIiwidXNlcnMvdXNlcnMuY29udHJvbGxlci5qcyIsInVzZXJzL3VzZXJzLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiTm90Rm91bmRDb25maWciLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImdvVG80MDQiLCIkaW5qZWN0b3IiLCIkc3RhdGUiLCJnZXQiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImdvIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ2aWV3cyIsIm1haW4iLCJ0ZW1wbGF0ZVVybCIsIkFwaUNvbmZpZyIsIlJlc3Rhbmd1bGFyUHJvdmlkZXIiLCJzZXRCYXNlVXJsIiwic2V0UmVzdGFuZ3VsYXJGaWVsZHMiLCJpZCIsIkFwaVJ1biIsIlJlc3Rhbmd1bGFyIiwicmVkaXJlY3RUb1BhcmVudFN0YXRlIiwiZGF0YSIsIm9wZXJhdGlvbiIsInJlbG9hZCIsImFkZFJlc3BvbnNlSW50ZXJjZXB0b3IiLCJhcHBDb25maWciLCIkbG9jYXRpb25Qcm92aWRlciIsImh0bWw1TW9kZSIsImFic3RyYWN0IiwiQXV0aGVudGljYXRpb25Db25maWciLCIkYXV0aFByb3ZpZGVyIiwibG9naW5VcmwiLCJhdXRoSGVhZGVyIiwidG9rZW5UeXBlIiwiYXV0aFRva2VuIiwic3RvcmFnZVR5cGUiLCJBdXRoZW50aWNhdGlvbiIsIiRhdXRoIiwidGhpcyIsImxvZ2luIiwidXNlciIsImxvZ291dCIsInN0YXR1cyIsImlzQXV0aGVudGljYXRlZCIsImdldFBheWxvYWQiLCJIb21lQ29uZmlnIiwidXJsIiwicmVkaXJlY3RUbyIsImxvYWRpbmdDb25maWciLCJjZnBMb2FkaW5nQmFyUHJvdmlkZXIiLCJpbmNsdWRlU3Bpbm5lciIsImluY2x1ZGVCYXIiLCJMb2dpbkNvbmZpZyIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJMb2dpbkNvbnRyb2xsZXIiLCJhdXRoZW50aWNhdGUiLCJyZWRpcmVjdFRvSG9tZSIsImNyZWRlbnRpYWxzIiwidGhlbiIsImVtYWlsIiwicGFzc3dvcmQiLCJMb2dpblJ1biIsIiRyb290U2NvcGUiLCJsb2dvdXRJbkxvZ2luU3RhdGUiLCJldmVudCIsInRvU3RhdGUiLCJuYW1lIiwicmVxdWlyZUF1dGhlbnRpY2F0aW9uIiwic3RhdGVSZXF1aXJlTG9naW4iLCJzdGFydHNXaXRoIiwicHJldmVudERlZmF1bHQiLCIkb24iLCJQcm9taXNlc0NvbmZpZyIsIiRxUHJvdmlkZXIiLCJlcnJvck9uVW5oYW5kbGVkUmVqZWN0aW9ucyIsIlVzZXJzQ29uZmlnIiwiY29udGVudEBhcHAiLCJyZXNvbHZlIiwibGlzdCIsIlVzZXJzIiwiY3JlYXRlIiwiJHN0YXRlUGFyYW1zIiwiVXNlcnNDb250cm9sbGVyIiwib3B0aW9ucyIsIlVzZXJzU2VydmljZSIsInJlc291cmNlIiwiZ2V0TGlzdCIsIm9uZSIsInNlcnZpY2UiLCJhbmd1bGFyIiwibW9kdWxlIiwiJGluamVjdCIsImNvbmZpZyIsInJ1biJdLCJtYXBwaW5ncyI6IkFBQUEsWUNJQSxTQUFTQSxnQkFBZUMsbUJBQW9CQyxnQkFjMUMsUUFBU0MsU0FBUUMsV0FDZixHQUFNQyxRQUFTRCxVQUFVRSxJQUFJLFVBQ3ZCQyxR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QUFXLGtCQUR0QkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPaEQsWUNEVkcsY0FBYzRDLFNBQVcseUJBRHpCRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU83QyxlQ0RWSSxZQUFZd0MsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3pDLGFDRFZHLGdCQUFnQnFDLFNBQVcsaUJBQWtCLFVBRDdDRixRQUNHQyxPQUFPLGFBQ1B0QyxXQUFXLGtCQUFtQkUsaUJDRGpDTyxTQUFTOEIsU0FBVyxhQUFjLFNBQVUsa0JBRDVDRixRQUNHQyxPQUFPLGFBQ1BHLElBQUloQyxVQ0RQVyxlQUFlbUIsU0FBVyxjQUQxQkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPcEIsZ0JDRFZHLFlBQVlnQixTQUFXLGtCQUR2QkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPakIsYUNEVk8sZ0JBQWdCUyxTQUFXLE9BQVEsUUFEbkNGLFFBQ0dDLE9BQU8sYUFDUHRDLFdBQVcsa0JBQW1COEIsaUJDRGpDRSxhQUFhTyxTQUFXLGVBRHhCRixRQUNHQyxPQUFPLGFBQ1BGLFFBQVEsUUFBU0oiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Byb3RvdHlwZScsIFtcbiAgJ3VpLnJvdXRlcicsXG4gICd1aS5yb3V0ZXIucmVkaXJlY3QnLFxuICAnc2F0ZWxsaXplcicsXG4gICdtbi1zaWRlbmF2JyxcbiAgJ3Jlc3Rhbmd1bGFyJyxcbiAgJ2FuZ3VsYXItbG9hZGluZy1iYXInLFxuICAnbmdBbmltYXRlJyxcbiAgJ21uLWZvcm0nLFxuICAnbW4taW5wdXQnLFxuICAnbW4tcGFzc3dvcmQnLFxuICAnbW4tc2VsZWN0Jyxcbl0pXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoTm90Rm91bmRDb25maWcpXG5cbmZ1bmN0aW9uIE5vdEZvdW5kQ29uZmlnKCR1cmxSb3V0ZXJQcm92aWRlciwgJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShnb1RvNDA0KVxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCc0MDQnLCB7XG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWFpbic6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy80MDQudGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgLy8gY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgLy8gY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuXG4gIGZ1bmN0aW9uIGdvVG80MDQoJGluamVjdG9yKSB7XG4gICAgY29uc3QgJHN0YXRlID0gJGluamVjdG9yLmdldCgnJHN0YXRlJylcbiAgICBjb25zdCBtZXNzYWdlID0gYENvdWxkIG5vdCBmaW5kIGEgc3RhdGUgYXNzb2NpYXRlZCB3aXRoIHVybCAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gXG4gICAgJHN0YXRlLmdvKCc0MDQnLCB7bWVzc2FnZX0pXG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhBcGlDb25maWcpXG5cbmZ1bmN0aW9uIEFwaUNvbmZpZyhSZXN0YW5ndWxhclByb3ZpZGVyKSB7XG4gIFJlc3Rhbmd1bGFyUHJvdmlkZXIuc2V0QmFzZVVybCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwJylcbiAgUmVzdGFuZ3VsYXJQcm92aWRlci5zZXRSZXN0YW5ndWxhckZpZWxkcyh7aWQ6ICdfaWQnfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnJ1bihBcGlSdW4pXG5cbmZ1bmN0aW9uIEFwaVJ1bihSZXN0YW5ndWxhciwgJHN0YXRlKSB7XG4gIFJlc3Rhbmd1bGFyLmFkZFJlc3BvbnNlSW50ZXJjZXB0b3IocmVkaXJlY3RUb1BhcmVudFN0YXRlKVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0VG9QYXJlbnRTdGF0ZShkYXRhLCBvcGVyYXRpb24pIHtcbiAgICBpZiAob3BlcmF0aW9uID09PSAncHV0JyB8fCBvcGVyYXRpb24gPT09ICdwb3N0Jykge1xuICAgICAgJHN0YXRlLmdvKCdeJywge30sIHtyZWxvYWQ6IHRydWV9KVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuXG5mdW5jdGlvbiBhcHBDb25maWcoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKSB7XG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxuXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdmlld3M6IHtcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEF1dGhlbnRpY2F0aW9uQ29uZmlnKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbkNvbmZpZygkYXV0aFByb3ZpZGVyKSB7XG4gICRhdXRoUHJvdmlkZXIubG9naW5VcmwgPSAnLy9sb2NhbGhvc3Q6NDAwMC91c2Vycy9hdXRoZW50aWNhdGUnXG4gICRhdXRoUHJvdmlkZXIuYXV0aEhlYWRlciA9ICdBdXRob3JpemF0aW9uJ1xuICAkYXV0aFByb3ZpZGVyLnRva2VuVHlwZSA9ICcnXG4gICRhdXRoUHJvdmlkZXIuYXV0aFRva2VuID0gJydcbiAgJGF1dGhQcm92aWRlci5zdG9yYWdlVHlwZSA9ICdsb2NhbFN0b3JhZ2UnXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5zZXJ2aWNlKCdBdXRoZW50aWNhdGlvbicsIEF1dGhlbnRpY2F0aW9uKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbigkYXV0aCkge1xuICB0aGlzLmxvZ2luID0gdXNlciA9PiAkYXV0aC5sb2dpbih1c2VyKVxuICB0aGlzLmxvZ291dCA9ICgpID0+ICRhdXRoLmxvZ291dCgpXG4gIHRoaXMuc3RhdHVzID0gKCkgPT4gJGF1dGguaXNBdXRoZW50aWNhdGVkKClcbiAgdGhpcy51c2VyID0gKCkgPT4gJGF1dGguZ2V0UGF5bG9hZCgpXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoSG9tZUNvbmZpZylcblxuZnVuY3Rpb24gSG9tZUNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLmhvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHJlZGlyZWN0VG86ICdhcHAudXNlcnMnLFxuICAgIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcobG9hZGluZ0NvbmZpZylcblxuZnVuY3Rpb24gbG9hZGluZ0NvbmZpZyhjZnBMb2FkaW5nQmFyUHJvdmlkZXIpIHtcbiAgY2ZwTG9hZGluZ0JhclByb3ZpZGVyLmluY2x1ZGVTcGlubmVyID0gZmFsc2VcbiAgY2ZwTG9hZGluZ0JhclByb3ZpZGVyLmluY2x1ZGVCYXIgPSB0cnVlXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoTG9naW5Db25maWcpXG5cbmZ1bmN0aW9uIExvZ2luQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgIHVybDogJy9sb2dpbicsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnbWFpbic6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9sb2dpbi50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnN0YXRlKCdsb2dvdXQnLCB7XG4gICAgICB1cmw6ICcvbG9nb3V0JyxcbiAgICAgIHJlZGlyZWN0VG86ICdsb2dpbicsXG4gICAgfSlcbn1cblxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29udHJvbGxlcignTG9naW5Db250cm9sbGVyJywgTG9naW5Db250cm9sbGVyKVxuXG5mdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoQXV0aGVudGljYXRpb24sICRzdGF0ZSkge1xuICBsZXQgZW1haWxcbiAgbGV0IHBhc3N3b3JkXG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICBlbWFpbCxcbiAgICBwYXNzd29yZCxcbiAgfVxuXG4gIHRoaXMuYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlXG5cbiAgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIEF1dGhlbnRpY2F0aW9uXG4gICAgICAubG9naW4odGhpcy5jcmVkZW50aWFscylcbiAgICAgIC50aGVuKHJlZGlyZWN0VG9Ib21lKVxuXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUb0hvbWUoKSB7XG4gICAgICAkc3RhdGUuZ28oJ2FwcC5ob21lJylcbiAgICB9XG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnJ1bihMb2dpblJ1bilcblxuZnVuY3Rpb24gTG9naW5SdW4oJHJvb3RTY29wZSwgJHN0YXRlLCBBdXRoZW50aWNhdGlvbikge1xuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBsb2dvdXRJbkxvZ2luU3RhdGUpXG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIHJlcXVpcmVBdXRoZW50aWNhdGlvbilcblxuICBmdW5jdGlvbiBsb2dvdXRJbkxvZ2luU3RhdGUoZXZlbnQsIHRvU3RhdGUpIHtcbiAgICBpZiAodG9TdGF0ZS5uYW1lID09PSAnbG9naW4nKSB7XG4gICAgICBBdXRoZW50aWNhdGlvbi5sb2dvdXQoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVBdXRoZW50aWNhdGlvbihldmVudCwgdG9TdGF0ZSkge1xuICAgIGxldCBzdGF0ZVJlcXVpcmVMb2dpbiA9IHRvU3RhdGUubmFtZS5zdGFydHNXaXRoKCdhcHAuJylcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gQXV0aGVudGljYXRpb24uc3RhdHVzKClcblxuICAgIGlmIChzdGF0ZVJlcXVpcmVMb2dpbiAmJiAhaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkc3RhdGUuZ28oJ2xvZ2luJylcbiAgICB9XG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhQcm9taXNlc0NvbmZpZylcblxuZnVuY3Rpb24gUHJvbWlzZXNDb25maWcoJHFQcm92aWRlcikge1xuICAkcVByb3ZpZGVyLmVycm9yT25VbmhhbmRsZWRSZWplY3Rpb25zKGZhbHNlKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKFVzZXJzQ29uZmlnKVxuXG5mdW5jdGlvbiBVc2Vyc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLnVzZXJzJywge1xuICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250ZW50QGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy91c2Vycy1saXN0LnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2Vyc0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzJyxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBsaXN0OiBVc2VycyA9PiBVc2Vycy5saXN0KCksXG4gICAgICAgICAgICBkYXRhOiAoKSA9PiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAudXNlcnMuY3JlYXRlJywge1xuICAgICAgdXJsOiAnL2NyZWF0ZScsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdXNlcnMtZm9ybS50ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXNlcnNDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd1c2VycycsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgbGlzdDogKCkgPT4gbnVsbCxcbiAgICAgICAgICAgIGRhdGE6IChVc2VycykgPT4gVXNlcnMuY3JlYXRlKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnVzZXJzLmVkaXQnLCB7XG4gICAgICB1cmw6ICcvOmlkJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250ZW50QGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy91c2Vycy1mb3JtLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2Vyc0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzJyxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBsaXN0OiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgZGF0YTogKFVzZXJzLCAkc3RhdGVQYXJhbXMpID0+IFVzZXJzLmdldCgkc3RhdGVQYXJhbXMuaWQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbnRyb2xsZXIoJ1VzZXJzQ29udHJvbGxlcicsIFVzZXJzQ29udHJvbGxlcilcblxuZnVuY3Rpb24gVXNlcnNDb250cm9sbGVyKGxpc3QsIGRhdGEpIHtcbiAgdGhpcy5saXN0ID0gbGlzdFxuICB0aGlzLmRhdGEgPSBkYXRhXG5cbiAgdGhpcy5vcHRpb25zID0gW1xuICAgICdTdGFyaycsXG4gICAgJ0xhbm5pc3RlcicsXG4gICAgJ1RhcmdhcnllbicsXG4gICAgJ1Nub3cnLFxuICBdXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5zZXJ2aWNlKCdVc2VycycsIFVzZXJzU2VydmljZSlcblxuZnVuY3Rpb24gVXNlcnNTZXJ2aWNlKFJlc3Rhbmd1bGFyKSB7XG4gIGNvbnN0IHJlc291cmNlID0gUmVzdGFuZ3VsYXIuc2VydmljZSgndXNlcnMnKVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy5nZXQgPSBnZXRcbiAgdGhpcy5jcmVhdGUgPSBjcmVhdGVcblxuICBmdW5jdGlvbiBsaXN0KCkge1xuICAgIHJldHVybiByZXNvdXJjZS5nZXRMaXN0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiByZXNvdXJjZS5vbmUoaWQpLmdldCgpXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHJlc291cmNlLm9uZSgpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZXMvYW5ndWxhciJ9
