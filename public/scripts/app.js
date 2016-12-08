"use strict";function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="",$authProvider.authHeader="Authorization",$authProvider.tokenType="Bearer",$authProvider.authToken="",$authProvider.storageType="localStorage"}function AuthenticationService($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",views:{"content@app":{templateUrl:"templates/home.template.html"}}})}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function LoginController(AuthenticationService,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}AuthenticationService.login(this.credentials).then(redirectToHome)}var username=void 0,password=void 0;this.credentials={username:username,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,AuthenticationService){function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=AuthenticationService.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",requireAuthentication)}angular.module("prototype",["ui.router","satellizer","mn-form","mn-input"]),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("prototype").config(AuthenticationConfig),AuthenticationService.$inject=["$auth"],angular.module("prototype").service("AuthenticationService",AuthenticationService),HomeConfig.$inject=["$stateProvider"],angular.module("prototype").config(HomeConfig),LoginConfig.$inject=["$stateProvider"],angular.module("prototype").config(LoginConfig),LoginController.$inject=["AuthenticationService","$state"],angular.module("prototype").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","AuthenticationService"],angular.module("prototype").run(LoginRun);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC9hcHAuY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsImhvbWUvaG9tZS5jb25maWcuanMiLCJsb2dpbi9sb2dpbi5jb25maWcuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwibG9naW4vbG9naW4ucnVuLmpzIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIiRsb2NhdGlvblByb3ZpZGVyIiwiJHN0YXRlUHJvdmlkZXIiLCJodG1sNU1vZGUiLCJzdGF0ZSIsImFic3RyYWN0Iiwidmlld3MiLCJtYWluIiwidGVtcGxhdGVVcmwiLCJBdXRoZW50aWNhdGlvbkNvbmZpZyIsIiRhdXRoUHJvdmlkZXIiLCJsb2dpblVybCIsImF1dGhIZWFkZXIiLCJ0b2tlblR5cGUiLCJhdXRoVG9rZW4iLCJzdG9yYWdlVHlwZSIsIkF1dGhlbnRpY2F0aW9uU2VydmljZSIsIiRhdXRoIiwidGhpcyIsImxvZ2luIiwidXNlciIsImxvZ291dCIsInN0YXR1cyIsImlzQXV0aGVudGljYXRlZCIsImdldFBheWxvYWQiLCJIb21lQ29uZmlnIiwidXJsIiwiY29udGVudEBhcHAiLCJMb2dpbkNvbmZpZyIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJMb2dpbkNvbnRyb2xsZXIiLCIkc3RhdGUiLCJhdXRoZW50aWNhdGUiLCJyZWRpcmVjdFRvSG9tZSIsImdvIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkxvZ2luUnVuIiwiJHJvb3RTY29wZSIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsImV2ZW50IiwidG9TdGF0ZSIsInN0YXRlUmVxdWlyZUxvZ2luIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJwcmV2ZW50RGVmYXVsdCIsIiRvbiIsImFuZ3VsYXIiLCJtb2R1bGUiLCIkaW5qZWN0IiwiY29uZmlnIiwic2VydmljZSIsInJ1biJdLCJtYXBwaW5ncyI6IkFBQUEsWUNJQSxTQUFTQSxXQUFVQyxrQkFBbUJDLGdCQUNwQ0Qsa0JBQWtCRSxXQUFVLEdBRTVCRCxlQUFlRSxNQUFNLE9BQ25CQyxZQUFVLEVBQ1ZDLE9BQ0VDLE1BQ0VDLFlBQWEsa0NDUHJCLFFBQVNDLHNCQUFxQkMsZUFDNUJBLGNBQWNDLFNBQVcsR0FDekJELGNBQWNFLFdBQWEsZ0JBQzNCRixjQUFjRyxVQUFZLFNBQzFCSCxjQUFjSSxVQUFZLEdBQzFCSixjQUFjSyxZQUFjLGVDTDlCLFFBQVNDLHVCQUFzQkMsT0FDN0JDLEtBQUtDLE1BQVEsU0FBQUMsTUFBQSxNQUFBSCxPQUFBRSxNQUFBQyxPQUNiRixLQUFLRyxPQUFTLFdBQUEsTUFBQUosT0FBQUksVUFDZEgsS0FBS0ksT0FBUyxXQUFBLE1BQUFMLE9BQUFNLG1CQUNkTCxLQUFLRSxLQUFPLFdBQUEsTUFBQUgsT0FBQU8sY0NKZCxRQUFTQyxZQUFXdkIsZ0JBQ2xCQSxlQUFlRSxNQUFNLFlBQ25Cc0IsSUFBSyxJQUNMcEIsT0FDRXFCLGVBQ0VuQixZQUFhLG1DQ0xyQixRQUFTb0IsYUFBWTFCLGdCQUNuQkEsZUFBZUUsTUFBTSxTQUNuQnNCLElBQUssU0FDTHBCLE9BQ0VDLE1BQ0VDLFlBQWEsZ0NBQ2JxQixXQUFZLGtCQUNaQyxhQUFjLFlDUHRCLFFBQVNDLGlCQUFnQmYsc0JBQXVCZ0IsUUFXOUMsUUFBU0MsZ0JBS1AsUUFBU0Msa0JBQ1BGLE9BQU9HLEdBQUcsWUFMWm5CLHNCQUNHRyxNQUFNRCxLQUFLa0IsYUFDWEMsS0FBS0gsZ0JBYlYsR0FBSUksVUFBQUEsT0FDQUMsU0FBQUEsTUFFSnJCLE1BQUtrQixhQUNIRSxTQUFBQSxTQUNBQyxTQUFBQSxVQUdGckIsS0FBS2UsYUFBZUEsYUNUdEIsUUFBU08sVUFBU0MsV0FBWVQsT0FBUWhCLHVCQUdwQyxRQUFTMEIsdUJBQXNCQyxNQUFPQyxTQUNwQyxHQUFJQyxtQkFBb0JELFFBQVFFLEtBQUtDLFdBQVcsUUFDNUN4QixnQkFBa0JQLHNCQUFzQk0sUUFFeEN1QixxQkFBc0J0QixrQkFDeEJvQixNQUFNSyxpQkFDTmhCLE9BQU9HLEdBQUcsVUFSZE0sV0FBV1EsSUFBSSxvQkFBcUJQLHVCUEx0Q1EsUUFBUUMsT0FBTyxhQUNiLFlBQ0EsYUFDQSxVQUNBLGFDSEZuRCxVQUFVb0QsU0FBVyxvQkFBcUIsa0JBRDFDRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU9yRCxXQ0RWUyxxQkFBcUIyQyxTQUFXLGlCQURoQ0YsUUFDR0MsT0FBTyxhQUNQRSxPQUFPNUMsc0JDRFZPLHNCQUFzQm9DLFNBQVcsU0FEakNGLFFBQ0dDLE9BQU8sYUFDUEcsUUFBUSx3QkFBeUJ0Qyx1QkNEcENTLFdBQVcyQixTQUFXLGtCQUR0QkYsUUFDR0MsT0FBTyxhQUNQRSxPQUFPNUIsWUNEVkcsWUFBWXdCLFNBQVcsa0JBRHZCRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU96QixhQ0RWRyxnQkFBZ0JxQixTQUFXLHdCQUF5QixVQURwREYsUUFDR0MsT0FBTyxhQUNQdEIsV0FBVyxrQkFBbUJFLGlCQ0RqQ1MsU0FBU1ksU0FBVyxhQUFjLFNBQVUseUJBRDVDRixRQUNHQyxPQUFPLGFBQ1BJLElBQUlmIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdwcm90b3R5cGUnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnc2F0ZWxsaXplcicsXG4gICdtbi1mb3JtJyxcbiAgJ21uLWlucHV0Jyxcbl0pXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuXG5mdW5jdGlvbiBhcHBDb25maWcoJGxvY2F0aW9uUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKSB7XG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxuXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdmlld3M6IHtcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEF1dGhlbnRpY2F0aW9uQ29uZmlnKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbkNvbmZpZygkYXV0aFByb3ZpZGVyKSB7XG4gICRhdXRoUHJvdmlkZXIubG9naW5VcmwgPSAnJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhIZWFkZXIgPSAnQXV0aG9yaXphdGlvbidcbiAgJGF1dGhQcm92aWRlci50b2tlblR5cGUgPSAnQmVhcmVyJ1xuICAkYXV0aFByb3ZpZGVyLmF1dGhUb2tlbiA9ICcnXG4gICRhdXRoUHJvdmlkZXIuc3RvcmFnZVR5cGUgPSAnbG9jYWxTdG9yYWdlJ1xufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb25TZXJ2aWNlJywgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvblNlcnZpY2UoJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAuY29uZmlnKEhvbWVDb25maWcpXG5cbmZ1bmN0aW9uIEhvbWVDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnY29udGVudEBhcHAnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUudGVtcGxhdGUuaHRtbCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoTG9naW5Db25maWcpXG5cbmZ1bmN0aW9uIExvZ2luQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWFpbic6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcilcblxuZnVuY3Rpb24gTG9naW5Db250cm9sbGVyKEF1dGhlbnRpY2F0aW9uU2VydmljZSwgJHN0YXRlKSB7XG4gIGxldCB1c2VybmFtZVxuICBsZXQgcGFzc3dvcmRcblxuICB0aGlzLmNyZWRlbnRpYWxzID0ge1xuICAgIHVzZXJuYW1lLFxuICAgIHBhc3N3b3JkLFxuICB9XG5cbiAgdGhpcy5hdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGVcblxuICBmdW5jdGlvbiBhdXRoZW50aWNhdGUoKSB7XG4gICAgQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAubG9naW4odGhpcy5jcmVkZW50aWFscylcbiAgICAgIC50aGVuKHJlZGlyZWN0VG9Ib21lKVxuXG4gICAgZnVuY3Rpb24gcmVkaXJlY3RUb0hvbWUoKSB7XG4gICAgICAkc3RhdGUuZ28oJ2FwcC5ob21lJylcbiAgICB9XG4gIH1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLnJ1bihMb2dpblJ1bilcblxuZnVuY3Rpb24gTG9naW5SdW4oJHJvb3RTY29wZSwgJHN0YXRlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgJHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgcmVxdWlyZUF1dGhlbnRpY2F0aW9uKVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVBdXRoZW50aWNhdGlvbihldmVudCwgdG9TdGF0ZSkge1xuICAgIGxldCBzdGF0ZVJlcXVpcmVMb2dpbiA9IHRvU3RhdGUubmFtZS5zdGFydHNXaXRoKCdhcHAuJylcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gQXV0aGVudGljYXRpb25TZXJ2aWNlLnN0YXR1cygpXG5cbiAgICBpZiAoc3RhdGVSZXF1aXJlTG9naW4gJiYgIWlzQXV0aGVudGljYXRlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgJHN0YXRlLmdvKCdsb2dpbicpXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2VzL2FuZ3VsYXIifQ==
