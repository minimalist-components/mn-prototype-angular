"use strict";function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("http://localhost:4000"),RestangularProvider.setRestangularFields({id:"_id"})}function ApiRun(Restangular,$state){function redirectToParentState(data,operation){return"put"!==operation&&"post"!==operation||$state.go("^",{},{reload:!0}),data}Restangular.addResponseInterceptor(redirectToParentState)}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="//localhost:4000/users/authenticate",$authProvider.authHeader="Authorization",$authProvider.tokenType="",$authProvider.authToken="",$authProvider.storageType="localStorage"}function Authentication($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",redirectTo:"app.users"})}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}}).state("logout",{url:"/logout",redirectTo:"login"})}function LoginController(Authentication,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}Authentication.login(this.credentials).then(redirectToHome)}var email=void 0,password=void 0;this.credentials={email:email,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,Authentication){function logoutInLoginState(event,toState){"login"===toState.name&&Authentication.logout()}function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=Authentication.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",logoutInLoginState),$rootScope.$on("$stateChangeStart",requireAuthentication)}function MnSelectDirective($parse,$timeout){function link(scope,element,attributes,ngModel){element.bind("change",function(event){$timeout(function(){var value=event.target.value;ngModel.$setViewValue(value),ngModel.$render()})}),$timeout(function(){var value=$parse(attributes.ngModel)(scope);value&&(element[0].value=value),element[0].setMobile(),element[0].setOptionEvents()})}return{restrict:"E",require:"ngModel",link:link}}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.create",{url:"/create",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.create()}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users,$stateParams){return Users.get($stateParams.id)}}}}})}function UsersController(list,data){var _this=this;this.list=list,this.data=data,this.options=[{name:"Stark",value:"stark"},{name:"Lannister",value:"lannister"},{name:"Targaryen",value:"targaryen"}],this.save=function(){return console.log(_this.data.plain())}}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}function create(){return resource.one()}var resource=Restangular.service("users");this.list=list,this.get=get,this.create=create}angular.module("prototype",["ui.router","ui.router.redirect","satellizer","mn-form","mn-input","mn-password","restangular","angular-loading-bar","ngAnimate"]),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),ApiRun.$inject=["Restangular","$state"],angular.module("prototype").run(ApiRun),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),Authentication.$inject=["$auth"],angular.module("prototype").service("Authentication",Authentication),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("prototype").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["Authentication","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","Authentication"],angular.module("prototype").run(LoginRun),MnSelectDirective.$inject=["$parse","$timeout"],angular.module("prototype").directive("mnSelect",MnSelectDirective),PromisesConfig.$inject=["$qProvider"],angular.module("prototype").config(PromisesConfig),UsersConfig.$inject=["$stateProvider"],angular.module("prototype").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("prototype").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwaS9hcGkuY29uZmlnLmpzIiwiYXBpL2FwaS5ydW4uanMiLCJhcHAvYXBwLmNvbmZpZy5qcyIsImF1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbmZpZy5qcyIsImF1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UuanMiLCJob21lL2hvbWUuY29uZmlnLmpzIiwibG9hZGluZy1iYXIvbG9hZGluZy1iYXIuY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJ1bi5qcyIsIm1uLXNlbGVjdC9tbi1zZWxlY3QuZGlyZWN0aXZlLmpzIiwicHJvbWlzZXMvcHJvbWlzZXMuY29uZmlnLmpzIiwidXNlcnMvdXNlcnMuY29uZmlnLmpzIiwidXNlcnMvdXNlcnMuY29udHJvbGxlci5qcyIsInVzZXJzL3VzZXJzLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiQXBpQ29uZmlnIiwiUmVzdGFuZ3VsYXJQcm92aWRlciIsInNldEJhc2VVcmwiLCJzZXRSZXN0YW5ndWxhckZpZWxkcyIsImlkIiwiQXBpUnVuIiwiUmVzdGFuZ3VsYXIiLCIkc3RhdGUiLCJyZWRpcmVjdFRvUGFyZW50U3RhdGUiLCJkYXRhIiwib3BlcmF0aW9uIiwiZ28iLCJyZWxvYWQiLCJhZGRSZXNwb25zZUludGVyY2VwdG9yIiwiYXBwQ29uZmlnIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImh0bWw1TW9kZSIsInN0YXRlIiwiYWJzdHJhY3QiLCJ2aWV3cyIsIm1haW4iLCJ0ZW1wbGF0ZVVybCIsIkF1dGhlbnRpY2F0aW9uQ29uZmlnIiwiJGF1dGhQcm92aWRlciIsImxvZ2luVXJsIiwiYXV0aEhlYWRlciIsInRva2VuVHlwZSIsImF1dGhUb2tlbiIsInN0b3JhZ2VUeXBlIiwiQXV0aGVudGljYXRpb24iLCIkYXV0aCIsInRoaXMiLCJsb2dpbiIsInVzZXIiLCJsb2dvdXQiLCJzdGF0dXMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRQYXlsb2FkIiwiSG9tZUNvbmZpZyIsInVybCIsInJlZGlyZWN0VG8iLCJsb2FkaW5nQ29uZmlnIiwiY2ZwTG9hZGluZ0JhclByb3ZpZGVyIiwiaW5jbHVkZVNwaW5uZXIiLCJpbmNsdWRlQmFyIiwiTG9naW5Db25maWciLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiTG9naW5Db250cm9sbGVyIiwiYXV0aGVudGljYXRlIiwicmVkaXJlY3RUb0hvbWUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiTG9naW5SdW4iLCIkcm9vdFNjb3BlIiwibG9nb3V0SW5Mb2dpblN0YXRlIiwiZXZlbnQiLCJ0b1N0YXRlIiwibmFtZSIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsInN0YXRlUmVxdWlyZUxvZ2luIiwic3RhcnRzV2l0aCIsInByZXZlbnREZWZhdWx0IiwiJG9uIiwiTW5TZWxlY3REaXJlY3RpdmUiLCIkcGFyc2UiLCIkdGltZW91dCIsImxpbmsiLCJzY29wZSIsImVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibmdNb2RlbCIsImJpbmQiLCJ2YWx1ZSIsInRhcmdldCIsIiRzZXRWaWV3VmFsdWUiLCIkcmVuZGVyIiwic2V0TW9iaWxlIiwic2V0T3B0aW9uRXZlbnRzIiwicmVzdHJpY3QiLCJyZXF1aXJlIiwiUHJvbWlzZXNDb25maWciLCIkcVByb3ZpZGVyIiwiZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMiLCJVc2Vyc0NvbmZpZyIsImNvbnRlbnRAYXBwIiwicmVzb2x2ZSIsImxpc3QiLCJVc2VycyIsImNyZWF0ZSIsIiRzdGF0ZVBhcmFtcyIsImdldCIsIlVzZXJzQ29udHJvbGxlciIsIl90aGlzIiwib3B0aW9ucyIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwicGxhaW4iLCJVc2Vyc1NlcnZpY2UiLCJyZXNvdXJjZSIsImdldExpc3QiLCJvbmUiLCJzZXJ2aWNlIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRpbmplY3QiLCJjb25maWciLCJydW4iLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBLFlDSUEsU0FBU0EsV0FBVUMscUJBQ2pCQSxvQkFBb0JDLFdBQVcseUJBQy9CRCxvQkFBb0JFLHNCQUFzQkMsR0FBSSxRQ0ZoRCxRQUFTQyxRQUFPQyxZQUFhQyxRQUczQixRQUFTQyx1QkFBc0JDLEtBQU1DLFdBSW5DLE1BSGtCLFFBQWRBLFdBQXFDLFNBQWRBLFdBQ3pCSCxPQUFPSSxHQUFHLFFBQVVDLFFBQVEsSUFFdkJILEtBTlRILFlBQVlPLHVCQUF1QkwsdUJDRHJDLFFBQVNNLFdBQVVDLGtCQUFtQkMsZ0JBQ3BDRCxrQkFBa0JFLFdBQVUsR0FFNUJELGVBQWVFLE1BQU0sT0FDbkJDLFlBQVUsRUFDVkMsT0FDRUMsTUFDRUMsWUFBYSxrQ0NQckIsUUFBU0Msc0JBQXFCQyxlQUM1QkEsY0FBY0MsU0FBVyxzQ0FDekJELGNBQWNFLFdBQWEsZ0JBQzNCRixjQUFjRyxVQUFZLEdBQzFCSCxjQUFjSSxVQUFZLEdBQzFCSixjQUFjSyxZQUFjLGVDTDlCLFFBQVNDLGdCQUFlQyxPQUN0QkMsS0FBS0MsTUFBUSxTQUFBQyxNQUFBLE1BQUFILE9BQUFFLE1BQUFDLE9BQ2JGLEtBQUtHLE9BQVMsV0FBQSxNQUFBSixPQUFBSSxVQUNkSCxLQUFLSSxPQUFTLFdBQUEsTUFBQUwsT0FBQU0sbUJBQ2RMLEtBQUtFLEtBQU8sV0FBQSxNQUFBSCxPQUFBTyxjQ0pkLFFBQVNDLFlBQVd2QixnQkFDbEJBLGVBQ0dFLE1BQU0sWUFDTHNCLElBQUssSUFDTEMsV0FBWSxjQ0psQixRQUFTQyxlQUFjQyx1QkFDckJBLHNCQUFzQkMsZ0JBQWlCLEVBQ3ZDRCxzQkFBc0JFLFlBQWEsRUNGckMsUUFBU0MsYUFBWTlCLGdCQUNuQkEsZUFDR0UsTUFBTSxTQUNMc0IsSUFBSyxTQUNMcEIsT0FDRUMsTUFDRUMsWUFBYSxnQ0FDYnlCLFdBQVksa0JBQ1pDLGFBQWMsWUFJbkI5QixNQUFNLFVBQ0xzQixJQUFLLFVBQ0xDLFdBQVksVUNkbEIsUUFBU1EsaUJBQWdCbkIsZUFBZ0J2QixRQVd2QyxRQUFTMkMsZ0JBS1AsUUFBU0Msa0JBQ1A1QyxPQUFPSSxHQUFHLFlBTFptQixlQUNHRyxNQUFNRCxLQUFLb0IsYUFDWEMsS0FBS0YsZ0JBYlYsR0FBSUcsT0FBQUEsT0FDQUMsU0FBQUEsTUFFSnZCLE1BQUtvQixhQUNIRSxNQUFBQSxNQUNBQyxTQUFBQSxVQUdGdkIsS0FBS2tCLGFBQWVBLGFDVHRCLFFBQVNNLFVBQVNDLFdBQVlsRCxPQUFRdUIsZ0JBSXBDLFFBQVM0QixvQkFBbUJDLE1BQU9DLFNBQ1osVUFBakJBLFFBQVFDLE1BQ1YvQixlQUFlSyxTQUluQixRQUFTMkIsdUJBQXNCSCxNQUFPQyxTQUNwQyxHQUFJRyxtQkFBb0JILFFBQVFDLEtBQUtHLFdBQVcsUUFDNUMzQixnQkFBa0JQLGVBQWVNLFFBRWpDMkIscUJBQXNCMUIsa0JBQ3hCc0IsTUFBTU0saUJBQ04xRCxPQUFPSSxHQUFHLFVBZmQ4QyxXQUFXUyxJQUFJLG9CQUFxQlIsb0JBQ3BDRCxXQUFXUyxJQUFJLG9CQUFxQkosdUJDRnRDLFFBQVNLLG1CQUFrQkMsT0FBUUMsVUFPakMsUUFBU0MsTUFBS0MsTUFBT0MsUUFBU0MsV0FBWUMsU0FDeENGLFFBQVFHLEtBQUssU0FBVSxTQUFBaEIsT0FFckJVLFNBQVMsV0FDUCxHQUFNTyxPQUFRakIsTUFBTWtCLE9BQU9ELEtBQzNCRixTQUFRSSxjQUFjRixPQUN0QkYsUUFBUUssY0FHWlYsU0FBUyxXQUVQLEdBQU1PLE9BQVFSLE9BQU9LLFdBQVdDLFNBQVNILE1BQ3JDSyxTQUNGSixRQUFRLEdBQUdJLE1BQVFBLE9BRXJCSixRQUFRLEdBQUdRLFlBQ1hSLFFBQVEsR0FBR1Msb0JBdEJmLE9BQ0VDLFNBQVUsSUFDVkMsUUFBUyxVQUNUYixLQUFBQSxNQ0pKLFFBQVNjLGdCQUFlQyxZQUN0QkEsV0FBV0MsNEJBQTJCLEdDRHhDLFFBQVNDLGFBQVl2RSxnQkFDbkJBLGVBQ0dFLE1BQU0sYUFDTHNCLElBQUssU0FDTHBCLE9BQ0VvRSxlQUNFbEUsWUFBYSxxQ0FDYnlCLFdBQVksa0JBQ1pDLGFBQWMsUUFDZHlDLFNBQ0VDLEtBQU0sU0FBQUMsT0FBQSxNQUFBQSxPQUFBRCxRQUNOakYsS0FBTSxXQUFBLE1BQUEsWUFLYlMsTUFBTSxvQkFDTHNCLElBQUssVUFDTHBCLE9BQ0VvRSxlQUNFbEUsWUFBYSxxQ0FDYnlCLFdBQVksa0JBQ1pDLGFBQWMsUUFDZHlDLFNBQ0VDLEtBQU0sV0FBQSxNQUFBLE9BQ05qRixLQUFNLFNBQUFrRixPQUFBLE1BQUFBLE9BQUFDLGVBS2IxRSxNQUFNLGtCQUNMc0IsSUFBSyxPQUNMcEIsT0FDRW9FLGVBQ0VsRSxZQUFhLHFDQUNieUIsV0FBWSxrQkFDWkMsYUFBYyxRQUNkeUMsU0FDRUMsS0FBTSxXQUFBLE1BQUEsT0FDTmpGLEtBQU0sU0FBQWtGLE1BQUFFLGNBQUEsTUFBQUYsT0FBQUcsSUFBQUQsYUFBQXpGLFVDdkNsQixRQUFTMkYsaUJBQWdCTCxLQUFNakYsTUFBTSxHQUFBdUYsT0FBQWhFLElBQ25DQSxNQUFLMEQsS0FBT0EsS0FFWjFELEtBQUt2QixLQUFPQSxLQUVadUIsS0FBS2lFLFVBQ0ZwQyxLQUFNLFFBQVNlLE1BQU8sVUFDdEJmLEtBQU0sWUFBYWUsTUFBTyxjQUMxQmYsS0FBTSxZQUFhZSxNQUFPLGNBRzdCNUMsS0FBS2tFLEtBQU8sV0FBQSxNQUFBQyxTQUFBQyxJQUFBSixNQUFBdkYsS0FBQTRGLFVDWGQsUUFBU0MsY0FBYWhHLGFBT3BCLFFBQVNvRixRQUNQLE1BQU9hLFVBQVNDLFVBR2xCLFFBQVNWLEtBQUkxRixJQUNYLE1BQU9tRyxVQUFTRSxJQUFJckcsSUFBSTBGLE1BRzFCLFFBQVNGLFVBQ1AsTUFBT1csVUFBU0UsTUFmbEIsR0FBTUYsVUFBV2pHLFlBQVlvRyxRQUFRLFFBRXJDMUUsTUFBSzBELEtBQU9BLEtBQ1oxRCxLQUFLOEQsSUFBTUEsSUFDWDlELEtBQUs0RCxPQUFTQSxPZlRoQmUsUUFBUUMsT0FBTyxhQUNiLFlBQ0EscUJBQ0EsYUFDQSxVQUNBLFdBQ0EsY0FDQSxjQUNBLHNCQUNBLGNDUkY1RyxVQUFVNkcsU0FBVyx1QkFEckJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBTzlHLFdDRFZLLE9BQU93RyxTQUFXLGNBQWUsVUFEakNGLFFBQ0dDLE9BQU8sYUFDUEcsSUFBSTFHLFFDRFBTLFVBQVUrRixTQUFXLG9CQUFxQixrQkFEMUNGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT2hHLFdDRFZTLHFCQUFxQnNGLFNBQVcsaUJBRGhDRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU92RixzQkNEVk8sZUFBZStFLFNBQVcsU0FEMUJGLFFBQ0dDLE9BQU8sYUFDUEYsUUFBUSxpQkFBa0I1RSxnQkNEN0JTLFdBQVdzRSxTQUFXLGtCQUR0QkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPdkUsWUNEVkcsY0FBY21FLFNBQVcseUJBRHpCRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU9wRSxlQ0RWSSxZQUFZK0QsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT2hFLGFDRFZHLGdCQUFnQjRELFNBQVcsaUJBQWtCLFVBRDdDRixRQUNHQyxPQUFPLGFBQ1A3RCxXQUFXLGtCQUFtQkUsaUJDRGpDTyxTQUFTcUQsU0FBVyxhQUFjLFNBQVUsa0JBRDVDRixRQUNHQyxPQUFPLGFBQ1BHLElBQUl2RCxVQ0RQVyxrQkFBa0IwQyxTQUFXLFNBQVUsWUFEdkNGLFFBQ0dDLE9BQU8sYUFDUEksVUFBVSxXQUFZN0MsbUJDRHpCaUIsZUFBZXlCLFNBQVcsY0FEMUJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBTzFCLGdCQ0RWRyxZQUFZc0IsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3ZCLGFDRFZRLGdCQUFnQmMsU0FBVyxPQUFRLFFBRG5DRixRQUNHQyxPQUFPLGFBQ1A3RCxXQUFXLGtCQUFtQmdELGlCQ0RqQ08sYUFBYU8sU0FBVyxlQUR4QkYsUUFDR0MsT0FBTyxhQUNQRixRQUFRLFFBQVNKIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdwcm90b3R5cGUnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAndWkucm91dGVyLnJlZGlyZWN0JyxcbiAgJ3NhdGVsbGl6ZXInLFxuICAnbW4tZm9ybScsXG4gICdtbi1pbnB1dCcsXG4gICdtbi1wYXNzd29yZCcsXG4gICdyZXN0YW5ndWxhcicsXG4gICdhbmd1bGFyLWxvYWRpbmctYmFyJyxcbiAgJ25nQW5pbWF0ZScsXG5dKVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEFwaUNvbmZpZylcblxuZnVuY3Rpb24gQXBpQ29uZmlnKFJlc3Rhbmd1bGFyUHJvdmlkZXIpIHtcbiAgUmVzdGFuZ3VsYXJQcm92aWRlci5zZXRCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjQwMDAnKVxuICBSZXN0YW5ndWxhclByb3ZpZGVyLnNldFJlc3Rhbmd1bGFyRmllbGRzKHtpZDogJ19pZCd9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKEFwaVJ1bilcblxuZnVuY3Rpb24gQXBpUnVuKFJlc3Rhbmd1bGFyLCAkc3RhdGUpIHtcbiAgUmVzdGFuZ3VsYXIuYWRkUmVzcG9uc2VJbnRlcmNlcHRvcihyZWRpcmVjdFRvUGFyZW50U3RhdGUpXG5cbiAgZnVuY3Rpb24gcmVkaXJlY3RUb1BhcmVudFN0YXRlKGRhdGEsIG9wZXJhdGlvbikge1xuICAgIGlmIChvcGVyYXRpb24gPT09ICdwdXQnIHx8IG9wZXJhdGlvbiA9PT0gJ3Bvc3QnKSB7XG4gICAgICAkc3RhdGUuZ28oJ14nLCB7fSwge3JlbG9hZDogdHJ1ZX0pXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhhcHBDb25maWcpXG5cbmZ1bmN0aW9uIGFwcENvbmZpZygkbG9jYXRpb25Qcm92aWRlciwgJHN0YXRlUHJvdmlkZXIpIHtcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXG5cbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcCcsIHtcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICB2aWV3czoge1xuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAudGVtcGxhdGUuaHRtbCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoQXV0aGVudGljYXRpb25Db25maWcpXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uQ29uZmlnKCRhdXRoUHJvdmlkZXIpIHtcbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9ICcvL2xvY2FsaG9zdDo0MDAwL3VzZXJzL2F1dGhlbnRpY2F0ZSdcbiAgJGF1dGhQcm92aWRlci5hdXRoSGVhZGVyID0gJ0F1dGhvcml6YXRpb24nXG4gICRhdXRoUHJvdmlkZXIudG9rZW5UeXBlID0gJydcbiAgJGF1dGhQcm92aWRlci5hdXRoVG9rZW4gPSAnJ1xuICAkYXV0aFByb3ZpZGVyLnN0b3JhZ2VUeXBlID0gJ2xvY2FsU3RvcmFnZSdcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnNlcnZpY2UoJ0F1dGhlbnRpY2F0aW9uJywgQXV0aGVudGljYXRpb24pXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uKCRhdXRoKSB7XG4gIHRoaXMubG9naW4gPSB1c2VyID0+ICRhdXRoLmxvZ2luKHVzZXIpXG4gIHRoaXMubG9nb3V0ID0gKCkgPT4gJGF1dGgubG9nb3V0KClcbiAgdGhpcy5zdGF0dXMgPSAoKSA9PiAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKVxuICB0aGlzLnVzZXIgPSAoKSA9PiAkYXV0aC5nZXRQYXlsb2FkKClcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhIb21lQ29uZmlnKVxuXG5mdW5jdGlvbiBIb21lQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAuaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgcmVkaXJlY3RUbzogJ2FwcC51c2VycycsXG4gICAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhsb2FkaW5nQ29uZmlnKVxuXG5mdW5jdGlvbiBsb2FkaW5nQ29uZmlnKGNmcExvYWRpbmdCYXJQcm92aWRlcikge1xuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZVNwaW5uZXIgPSBmYWxzZVxuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZUJhciA9IHRydWVcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhMb2dpbkNvbmZpZylcblxuZnVuY3Rpb24gTG9naW5Db25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2xvZ2luJywge1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdtYWluJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2xvZ2luJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2xvZ291dCcsIHtcbiAgICAgIHVybDogJy9sb2dvdXQnLFxuICAgICAgcmVkaXJlY3RUbzogJ2xvZ2luJyxcbiAgICB9KVxufVxuXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvbiwgJHN0YXRlKSB7XG4gIGxldCBlbWFpbFxuICBsZXQgcGFzc3dvcmRcblxuICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICB9XG5cbiAgdGhpcy5hdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGVcblxuICBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgQXV0aGVudGljYXRpb25cbiAgICAgIC5sb2dpbih0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgLnRoZW4ocmVkaXJlY3RUb0hvbWUpXG5cbiAgICBmdW5jdGlvbiByZWRpcmVjdFRvSG9tZSgpIHtcbiAgICAgICRzdGF0ZS5nbygnYXBwLmhvbWUnKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKExvZ2luUnVuKVxuXG5mdW5jdGlvbiBMb2dpblJ1bigkcm9vdFNjb3BlLCAkc3RhdGUsIEF1dGhlbnRpY2F0aW9uKSB7XG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGxvZ291dEluTG9naW5TdGF0ZSlcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgcmVxdWlyZUF1dGhlbnRpY2F0aW9uKVxuXG4gIGZ1bmN0aW9uIGxvZ291dEluTG9naW5TdGF0ZShldmVudCwgdG9TdGF0ZSkge1xuICAgIGlmICh0b1N0YXRlLm5hbWUgPT09ICdsb2dpbicpIHtcbiAgICAgIEF1dGhlbnRpY2F0aW9uLmxvZ291dCgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZUF1dGhlbnRpY2F0aW9uKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgbGV0IHN0YXRlUmVxdWlyZUxvZ2luID0gdG9TdGF0ZS5uYW1lLnN0YXJ0c1dpdGgoJ2FwcC4nKVxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBBdXRoZW50aWNhdGlvbi5zdGF0dXMoKVxuXG4gICAgaWYgKHN0YXRlUmVxdWlyZUxvZ2luICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICRzdGF0ZS5nbygnbG9naW4nKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuZGlyZWN0aXZlKCdtblNlbGVjdCcsIE1uU2VsZWN0RGlyZWN0aXZlKVxuXG5mdW5jdGlvbiBNblNlbGVjdERpcmVjdGl2ZSgkcGFyc2UsICR0aW1lb3V0KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXF1aXJlOiAnbmdNb2RlbCcsXG4gICAgbGluayxcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIG5nTW9kZWwpIHtcbiAgICBlbGVtZW50LmJpbmQoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUodmFsdWUpXG4gICAgICAgIG5nTW9kZWwuJHJlbmRlcigpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAkdGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9ICRwYXJzZShhdHRyaWJ1dGVzLm5nTW9kZWwpKHNjb3BlKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnRbMF0udmFsdWUgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgZWxlbWVudFswXS5zZXRNb2JpbGUoKVxuICAgICAgZWxlbWVudFswXS5zZXRPcHRpb25FdmVudHMoKVxuICAgIH0pXG4gIH1cbn1cblxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKFByb21pc2VzQ29uZmlnKVxuXG5mdW5jdGlvbiBQcm9taXNlc0NvbmZpZygkcVByb3ZpZGVyKSB7XG4gICRxUHJvdmlkZXIuZXJyb3JPblVuaGFuZGxlZFJlamVjdGlvbnMoZmFsc2UpXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoVXNlcnNDb25maWcpXG5cbmZ1bmN0aW9uIFVzZXJzQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdhcHAudXNlcnMnLCB7XG4gICAgICB1cmw6ICcvdXNlcnMnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWxpc3QudGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6IFVzZXJzID0+IFVzZXJzLmxpc3QoKSxcbiAgICAgICAgICAgIGRhdGE6ICgpID0+IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC51c2Vycy5jcmVhdGUnLCB7XG4gICAgICB1cmw6ICcvY3JlYXRlJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250ZW50QGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy91c2Vycy1mb3JtLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2Vyc0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzJyxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBsaXN0OiAoKSA9PiBudWxsLFxuICAgICAgICAgICAgZGF0YTogKFVzZXJzKSA9PiBVc2Vycy5jcmVhdGUoKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAudXNlcnMuZWRpdCcsIHtcbiAgICAgIHVybDogJy86aWQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6ICgpID0+IG51bGwsXG4gICAgICAgICAgICBkYXRhOiAoVXNlcnMsICRzdGF0ZVBhcmFtcykgPT4gVXNlcnMuZ2V0KCRzdGF0ZVBhcmFtcy5pZClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29udHJvbGxlcignVXNlcnNDb250cm9sbGVyJywgVXNlcnNDb250cm9sbGVyKVxuXG5mdW5jdGlvbiBVc2Vyc0NvbnRyb2xsZXIobGlzdCwgZGF0YSkge1xuICB0aGlzLmxpc3QgPSBsaXN0XG4gIC8vIGRhdGEuaG91c2UgPSAndGFyZ2FyeWVuJ1xuICB0aGlzLmRhdGEgPSBkYXRhXG5cbiAgdGhpcy5vcHRpb25zID0gW1xuICAgIHtuYW1lOiAnU3RhcmsnLCB2YWx1ZTogJ3N0YXJrJ30sXG4gICAge25hbWU6ICdMYW5uaXN0ZXInLCB2YWx1ZTogJ2xhbm5pc3Rlcid9LFxuICAgIHtuYW1lOiAnVGFyZ2FyeWVuJywgdmFsdWU6ICd0YXJnYXJ5ZW4nfSxcbiAgXVxuXG4gIHRoaXMuc2F2ZSA9ICgpID0+IGNvbnNvbGUubG9nKHRoaXMuZGF0YS5wbGFpbigpKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnVXNlcnMnLCBVc2Vyc1NlcnZpY2UpXG5cbmZ1bmN0aW9uIFVzZXJzU2VydmljZShSZXN0YW5ndWxhcikge1xuICBjb25zdCByZXNvdXJjZSA9IFJlc3Rhbmd1bGFyLnNlcnZpY2UoJ3VzZXJzJylcblxuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMuZ2V0ID0gZ2V0XG4gIHRoaXMuY3JlYXRlID0gY3JlYXRlXG5cbiAgZnVuY3Rpb24gbGlzdCgpIHtcbiAgICByZXR1cm4gcmVzb3VyY2UuZ2V0TGlzdCgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXQoaWQpIHtcbiAgICByZXR1cm4gcmVzb3VyY2Uub25lKGlkKS5nZXQoKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHJldHVybiByZXNvdXJjZS5vbmUoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2VzL2FuZ3VsYXIifQ==
