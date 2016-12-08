"use strict";function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("https://private-a82ea-samples9.apiary-mock.com")}function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="",$authProvider.authHeader="Authorization",$authProvider.tokenType="Bearer",$authProvider.authToken="",$authProvider.storageType="localStorage"}function AuthenticationService($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",views:{"content@app":{templateUrl:"templates/home.template.html",controller:"HomeController",controllerAs:"home",resolve:{users:function(Users){return Users.list()}}}}})}function HomeController(users){this.users=users}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function LoginController(AuthenticationService,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}AuthenticationService.login(this.credentials).then(redirectToHome)}var username=void 0,password=void 0;this.credentials={username:username,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,AuthenticationService){function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=AuthenticationService.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",requireAuthentication)}function UsersService(Restangular){function list(){return resource.getList()}var resource=Restangular.all("users");this.list=list}angular.module("prototype",["ui.router","satellizer","mn-form","mn-input","restangular"]),ApiConfig.$inject=["RestangularProvider"],angular.module("prototype").config(ApiConfig),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),AuthenticationService.$inject=["$auth"],angular.module("prototype").service("AuthenticationService",AuthenticationService),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),HomeController.$inject=["users"],angular.module("prototype").controller("HomeController",HomeController),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["AuthenticationService","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","AuthenticationService"],angular.module("prototype").run(LoginRun),UsersService.$inject=["Restangular"],angular.module("prototype").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwaS9hcGkuY29uZmlnLmpzIiwiYXBwL2FwcC5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwiaG9tZS9ob21lLmNvbmZpZy5qcyIsImhvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4uY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJ1bi5qcyIsInVzZXJzL3VzZXJzLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiQXBpQ29uZmlnIiwiUmVzdGFuZ3VsYXJQcm92aWRlciIsInNldEJhc2VVcmwiLCJhcHBDb25maWciLCIkbG9jYXRpb25Qcm92aWRlciIsIiRzdGF0ZVByb3ZpZGVyIiwiaHRtbDVNb2RlIiwic3RhdGUiLCJhYnN0cmFjdCIsInZpZXdzIiwibWFpbiIsInRlbXBsYXRlVXJsIiwiQXV0aGVudGljYXRpb25Db25maWciLCIkYXV0aFByb3ZpZGVyIiwibG9naW5VcmwiLCJhdXRoSGVhZGVyIiwidG9rZW5UeXBlIiwiYXV0aFRva2VuIiwic3RvcmFnZVR5cGUiLCJBdXRoZW50aWNhdGlvblNlcnZpY2UiLCIkYXV0aCIsInRoaXMiLCJsb2dpbiIsInVzZXIiLCJsb2dvdXQiLCJzdGF0dXMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJnZXRQYXlsb2FkIiwiSG9tZUNvbmZpZyIsInVybCIsImNvbnRlbnRAYXBwIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsInJlc29sdmUiLCJ1c2VycyIsIlVzZXJzIiwibGlzdCIsIkhvbWVDb250cm9sbGVyIiwiTG9naW5Db25maWciLCJMb2dpbkNvbnRyb2xsZXIiLCIkc3RhdGUiLCJhdXRoZW50aWNhdGUiLCJyZWRpcmVjdFRvSG9tZSIsImdvIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkxvZ2luUnVuIiwiJHJvb3RTY29wZSIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsImV2ZW50IiwidG9TdGF0ZSIsInN0YXRlUmVxdWlyZUxvZ2luIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJwcmV2ZW50RGVmYXVsdCIsIiRvbiIsIlVzZXJzU2VydmljZSIsIlJlc3Rhbmd1bGFyIiwicmVzb3VyY2UiLCJnZXRMaXN0IiwiYWxsIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRpbmplY3QiLCJjb25maWciLCJzZXJ2aWNlIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLHFCQUNqQkEsb0JBQW9CQyxXQUFXLGtEQ0RqQyxRQUFTQyxXQUFVQyxrQkFBbUJDLGdCQUNwQ0Qsa0JBQWtCRSxXQUFVLEdBRTVCRCxlQUFlRSxNQUFNLE9BQ25CQyxZQUFVLEVBQ1ZDLE9BQ0VDLE1BQ0VDLFlBQWEsa0NDUHJCLFFBQVNDLHNCQUFxQkMsZUFDNUJBLGNBQWNDLFNBQVcsR0FDekJELGNBQWNFLFdBQWEsZ0JBQzNCRixjQUFjRyxVQUFZLFNBQzFCSCxjQUFjSSxVQUFZLEdBQzFCSixjQUFjSyxZQUFjLGVDTDlCLFFBQVNDLHVCQUFzQkMsT0FDN0JDLEtBQUtDLE1BQVEsU0FBQUMsTUFBQSxNQUFBSCxPQUFBRSxNQUFBQyxPQUNiRixLQUFLRyxPQUFTLFdBQUEsTUFBQUosT0FBQUksVUFDZEgsS0FBS0ksT0FBUyxXQUFBLE1BQUFMLE9BQUFNLG1CQUNkTCxLQUFLRSxLQUFPLFdBQUEsTUFBQUgsT0FBQU8sY0NKZCxRQUFTQyxZQUFXdkIsZ0JBQ2xCQSxlQUFlRSxNQUFNLFlBQ25Cc0IsSUFBSyxJQUNMcEIsT0FDRXFCLGVBQ0VuQixZQUFhLCtCQUNib0IsV0FBWSxpQkFDWkMsYUFBYyxPQUNkQyxTQUNFQyxNQUFPLFNBQUFDLE9BQUEsTUFBQUEsT0FBQUMsYUNUakIsUUFBU0MsZ0JBQWVILE9BQ3RCYixLQUFLYSxNQUFRQSxNQ0RmLFFBQVNJLGFBQVlqQyxnQkFDbkJBLGVBQWVFLE1BQU0sU0FDbkJzQixJQUFLLFNBQ0xwQixPQUNFQyxNQUNFQyxZQUFhLGdDQUNib0IsV0FBWSxrQkFDWkMsYUFBYyxZQ1B0QixRQUFTTyxpQkFBZ0JwQixzQkFBdUJxQixRQVc5QyxRQUFTQyxnQkFLUCxRQUFTQyxrQkFDUEYsT0FBT0csR0FBRyxZQUxaeEIsc0JBQ0dHLE1BQU1ELEtBQUt1QixhQUNYQyxLQUFLSCxnQkFiVixHQUFJSSxVQUFBQSxPQUNBQyxTQUFBQSxNQUVKMUIsTUFBS3VCLGFBQ0hFLFNBQUFBLFNBQ0FDLFNBQUFBLFVBR0YxQixLQUFLb0IsYUFBZUEsYUNUdEIsUUFBU08sVUFBU0MsV0FBWVQsT0FBUXJCLHVCQUdwQyxRQUFTK0IsdUJBQXNCQyxNQUFPQyxTQUNwQyxHQUFJQyxtQkFBb0JELFFBQVFFLEtBQUtDLFdBQVcsUUFDNUM3QixnQkFBa0JQLHNCQUFzQk0sUUFFeEM0QixxQkFBc0IzQixrQkFDeEJ5QixNQUFNSyxpQkFDTmhCLE9BQU9HLEdBQUcsVUFSZE0sV0FBV1EsSUFBSSxvQkFBcUJQLHVCQ0R0QyxRQUFTUSxjQUFhQyxhQUtwQixRQUFTdkIsUUFDUCxNQUFPd0IsVUFBU0MsVUFMbEIsR0FBTUQsVUFBV0QsWUFBWUcsSUFBSSxRQUVqQ3pDLE1BQUtlLEtBQU9BLEtWUGQyQixRQUFRQyxPQUFPLGFBQ2IsWUFDQSxhQUNBLFVBQ0EsV0FDQSxnQkNKRmhFLFVBQVVpRSxTQUFXLHVCQURyQkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPbEUsV0NEVkcsVUFBVThELFNBQVcsb0JBQXFCLGtCQUQxQ0YsUUFDR0MsT0FBTyxhQUNQRSxPQUFPL0QsV0NEVlMscUJBQXFCcUQsU0FBVyxpQkFEaENGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3RELHNCQ0RWTyxzQkFBc0I4QyxTQUFXLFNBRGpDRixRQUNHQyxPQUFPLGFBQ1BHLFFBQVEsd0JBQXlCaEQsdUJDRHBDUyxXQUFXcUMsU0FBVyxrQkFEdEJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3RDLFlDRFZTLGVBQWU0QixTQUFXLFNBRDFCRixRQUNHQyxPQUFPLGFBQ1BqQyxXQUFXLGlCQUFrQk0sZ0JDRGhDQyxZQUFZMkIsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBTzVCLGFDRFZDLGdCQUFnQjBCLFNBQVcsd0JBQXlCLFVBRHBERixRQUNHQyxPQUFPLGFBQ1BqQyxXQUFXLGtCQUFtQlEsaUJDRGpDUyxTQUFTaUIsU0FBVyxhQUFjLFNBQVUseUJBRDVDRixRQUNHQyxPQUFPLGFBQ1BJLElBQUlwQixVQ0RQVSxhQUFhTyxTQUFXLGVBRHhCRixRQUNHQyxPQUFPLGFBQ1BHLFFBQVEsUUFBU1QiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ3Byb3RvdHlwZScsIFtcbiAgJ3VpLnJvdXRlcicsXG4gICdzYXRlbGxpemVyJyxcbiAgJ21uLWZvcm0nLFxuICAnbW4taW5wdXQnLFxuICAncmVzdGFuZ3VsYXInLFxuXSlcbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbmZpZyhBcGlDb25maWcpXG5cbmZ1bmN0aW9uIEFwaUNvbmZpZyhSZXN0YW5ndWxhclByb3ZpZGVyKSB7XG4gIFJlc3Rhbmd1bGFyUHJvdmlkZXIuc2V0QmFzZVVybCgnaHR0cHM6Ly9wcml2YXRlLWE4MmVhLXNhbXBsZXM5LmFwaWFyeS1tb2NrLmNvbScpXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuXG5mdW5jdGlvbiBhcHBDb25maWcoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKSB7XG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxuXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdmlld3M6IHtcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEF1dGhlbnRpY2F0aW9uQ29uZmlnKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbkNvbmZpZygkYXV0aFByb3ZpZGVyKSB7XG4gICRhdXRoUHJvdmlkZXIubG9naW5VcmwgPSAnJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhIZWFkZXIgPSAnQXV0aG9yaXphdGlvbidcbiAgJGF1dGhQcm92aWRlci50b2tlblR5cGUgPSAnQmVhcmVyJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhUb2tlbiA9ICcnXG4gICRhdXRoUHJvdmlkZXIuc3RvcmFnZVR5cGUgPSAnbG9jYWxTdG9yYWdlJ1xufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb25TZXJ2aWNlJywgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvblNlcnZpY2UoJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEhvbWVDb25maWcpXG5cbmZ1bmN0aW9uIEhvbWVDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUudGVtcGxhdGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2hvbWUnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgdXNlcnM6IFVzZXJzID0+IFVzZXJzLmxpc3QoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKHVzZXJzKSB7XG4gIHRoaXMudXNlcnMgPSB1c2Vyc1xufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKExvZ2luQ29uZmlnKVxuXG5mdW5jdGlvbiBMb2dpbkNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21haW4nOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvblNlcnZpY2UsICRzdGF0ZSkge1xuICBsZXQgdXNlcm5hbWVcbiAgbGV0IHBhc3N3b3JkXG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZCxcbiAgfVxuXG4gIHRoaXMuYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlXG5cbiAgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAudGhlbihyZWRpcmVjdFRvSG9tZSlcblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5ydW4oTG9naW5SdW4pXG5cbmZ1bmN0aW9uIExvZ2luUnVuKCRyb290U2NvcGUsICRzdGF0ZSwgQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIHJlcXVpcmVBdXRoZW50aWNhdGlvbilcblxuICBmdW5jdGlvbiByZXF1aXJlQXV0aGVudGljYXRpb24oZXZlbnQsIHRvU3RhdGUpIHtcbiAgICBsZXQgc3RhdGVSZXF1aXJlTG9naW4gPSB0b1N0YXRlLm5hbWUuc3RhcnRzV2l0aCgnYXBwLicpXG4gICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IEF1dGhlbnRpY2F0aW9uU2VydmljZS5zdGF0dXMoKVxuXG4gICAgaWYgKHN0YXRlUmVxdWlyZUxvZ2luICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICRzdGF0ZS5nbygnbG9naW4nKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnVXNlcnMnLCBVc2Vyc1NlcnZpY2UpXG5cbmZ1bmN0aW9uIFVzZXJzU2VydmljZShSZXN0YW5ndWxhcikge1xuICBjb25zdCByZXNvdXJjZSA9IFJlc3Rhbmd1bGFyLmFsbCgndXNlcnMnKVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcblxuICBmdW5jdGlvbiBsaXN0KCkge1xuICAgIHJldHVybiByZXNvdXJjZS5nZXRMaXN0KClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlcy9hbmd1bGFyIn0=
