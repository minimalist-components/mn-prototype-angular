"use strict";function appConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0})}function homeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",views:{main:{templateUrl:"templates/home.template.html"}}})}function loginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function loginRun($rootScope,$state){function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=!1;stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",requireAuthentication)}angular.module("prototype",["ui.router","mn-input"]),appConfig.$inject=["$locationProvider","$stateProvider"],angular.module("prototype").config(appConfig),homeConfig.$inject=["$stateProvider"],angular.module("prototype").config(homeConfig),loginConfig.$inject=["$stateProvider"],angular.module("prototype").config(loginConfig);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),LoginController=function(){function LoginController(){_classCallCheck(this,LoginController);var username=void 0,password=void 0;this.credentials={username:username,password:password}}return _createClass(LoginController,[{key:"authenticate",value:function(){console.log(this.credentials)}}]),LoginController}();angular.module("prototype").controller("LoginController",LoginController),loginRun.$inject=["$rootScope","$state"],angular.module("prototype").run(loginRun);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC9hcHAuY29uZmlnLmpzIiwiaG9tZS9ob21lLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLnJ1bi5qcyIsImxvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYXBwQ29uZmlnIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImh0bWw1TW9kZSIsInN0YXRlIiwiYWJzdHJhY3QiLCJob21lQ29uZmlnIiwidXJsIiwidmlld3MiLCJtYWluIiwidGVtcGxhdGVVcmwiLCJsb2dpbkNvbmZpZyIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwibG9naW5SdW4iLCIkcm9vdFNjb3BlIiwiJHN0YXRlIiwicmVxdWlyZUF1dGhlbnRpY2F0aW9uIiwiZXZlbnQiLCJ0b1N0YXRlIiwic3RhdGVSZXF1aXJlTG9naW4iLCJuYW1lIiwic3RhcnRzV2l0aCIsImlzQXV0aGVudGljYXRlZCIsInByZXZlbnREZWZhdWx0IiwiZ28iLCIkb24iLCJhbmd1bGFyIiwibW9kdWxlIiwiJGluamVjdCIsImNvbmZpZyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJMb2dpbkNvbnRyb2xsZXIiLCJ0aGlzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNyZWRlbnRpYWxzIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLGtCQUFtQkMsZ0JBQ3BDRCxrQkFBa0JFLFdBQVUsR0FFNUJELGVBQWVFLE1BQU0sT0FDbkJDLFlBQVUsSUNKZCxRQUFTQyxZQUFXSixnQkFDbEJBLGVBQWVFLE1BQU0sWUFDbkJHLElBQUssSUFDTEMsT0FDRUMsTUFDRUMsWUFBYSxtQ0NMckIsUUFBU0MsYUFBWVQsZ0JBQ25CQSxlQUFlRSxNQUFNLFNBQ25CRyxJQUFLLFNBQ0xDLE9BQ0VDLE1BQ0VDLFlBQWEsZ0NBQ2JFLFdBQVksa0JBQ1pDLGFBQWMsWUhxQ3RCLFFBQVNDLGlCQUFnQkMsU0FBVUMsYUFBZSxLQUFNRCxtQkFBb0JDLGNBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0k1Q2hILFFBQVNDLFVBQVNDLFdBQVlDLFFBRzVCLFFBQVNDLHVCQUFzQkMsTUFBT0MsU0FDcEMsR0FBSUMsbUJBQW9CRCxRQUFRRSxLQUFLQyxXQUFXLFFBQzVDQyxpQkFBa0IsQ0FFbEJILHFCQUFzQkcsa0JBQ3hCTCxNQUFNTSxpQkFDTlIsT0FBT1MsR0FBRyxVQVJkVixXQUFXVyxJQUFJLG9CQUFxQlQsdUJKTHRDVSxRQUFRQyxPQUFPLGFBQ2IsWUFDQSxhQ0RGaEMsVUFBVWlDLFNBQVcsb0JBQXFCLGtCQUQxQ0YsUUFDR0MsT0FBTyxhQUNQRSxPQUFPbEMsV0NEVk0sV0FBVzJCLFNBQVcsa0JBRHRCRixRQUNHQyxPQUFPLGFBQ1BFLE9BQU81QixZQ0RWSyxZQUFZc0IsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sYUFDUEUsT0FBT3ZCLFlINENWLElBQUl3QixjQUFlLFdBQWMsUUFBU0Msa0JBQWlCQyxPQUFRQyxPQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxNQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsWUFBYUgsTUFBTUMsRUFBSUUsWUFBV0MsV0FBYUQsV0FBV0MsYUFBYyxFQUFPRCxXQUFXRSxjQUFlLEVBQVUsU0FBV0YsY0FBWUEsV0FBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxPQUFRSSxXQUFXTSxJQUFLTixhQUFpQixNQUFPLFVBQVV6QixZQUFhZ0MsV0FBWUMsYUFBaUosTUFBOUhELGFBQVlaLGlCQUFpQnBCLFlBQVlrQyxVQUFXRixZQUFpQkMsYUFBYWIsaUJBQWlCcEIsWUFBYWlDLGFBQXFCakMsZ0JLOUNoaUJtQyxnQkFBQUEsV0FDRSxRQUFBQSxtQkFBY3JDLGdCQUFBc0MsS0FBQUQsZ0JBQ1osSUFBSUUsVUFBQUEsT0FDQUMsU0FBQUEsTUFFSkYsTUFBS0csYUFDSEYsU0FBQUEsU0FDQUMsU0FBQUEsVUxrRUosTUFWQW5CLGNBQWFnQixrQkFDWEosSUFBSyxlQUNMUyxNQUFPLFdLckRQQyxRQUFRQyxJQUFJTixLQUFLRyxpQkw2RFpKLGtCS2xEVHBCLFNBQ0dDLE9BQU8sYUFDUHBCLFdBQVcsa0JBQW1CdUMsaUJEeEJqQ2pDLFNBQVNlLFNBQVcsYUFBYyxVQURsQ0YsUUFDR0MsT0FBTyxhQUNQMkIsSUFBSXpDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdwcm90b3R5cGUnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnbW4taW5wdXQnLFxuXSk7XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoYXBwQ29uZmlnKTtcblxuZnVuY3Rpb24gYXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcCcsIHtcbiAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgfSk7XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcoaG9tZUNvbmZpZyk7XG5cbmZ1bmN0aW9uIGhvbWVDb25maWcoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgIHVybDogJy8nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWFpbic6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS50ZW1wbGF0ZS5odG1sJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ3Byb3RvdHlwZScpXG4gIC5jb25maWcobG9naW5Db25maWcpO1xuXG5mdW5jdGlvbiBsb2dpbkNvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgdXJsOiAnL2xvZ2luJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21haW4nOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2xvZ2luLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdwcm90b3R5cGUnKVxuICAucnVuKGxvZ2luUnVuKTtcblxuZnVuY3Rpb24gbG9naW5SdW4oJHJvb3RTY29wZSwgJHN0YXRlKSB7XG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIHJlcXVpcmVBdXRoZW50aWNhdGlvbik7XG5cbiAgZnVuY3Rpb24gcmVxdWlyZUF1dGhlbnRpY2F0aW9uKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgbGV0IHN0YXRlUmVxdWlyZUxvZ2luID0gdG9TdGF0ZS5uYW1lLnN0YXJ0c1dpdGgoJ2FwcC4nKTtcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7IC8vIEF1dGhlbnRpY2F0aW9uLnN0YXR1cygpO1xuXG4gICAgaWYgKHN0YXRlUmVxdWlyZUxvZ2luICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkc3RhdGUuZ28oJ2xvZ2luJyk7XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgdXNlcm5hbWU7XG4gICAgbGV0IHBhc3N3b3JkO1xuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQsXG4gICAgfTtcbiAgfVxuXG4gIGF1dGhlbnRpY2F0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAvLyBBdXRoZW50aWNhdGlvblxuICAgIC8vICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgLy8gICAudGhlbihyZWRpcmVjdCk7XG4gIH07XG5cbiAgLy8gZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gIC8vICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpO1xuICAvLyB9XG59XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgncHJvdG90eXBlJylcbiAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2VzL2FuZ3VsYXIifQ==
