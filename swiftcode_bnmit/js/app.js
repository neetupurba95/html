var app = angular.module('SwiftCodeapp',['ngRoute','ngCookies']);
var URL = "http://betsol.org:9000";

//Routing

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    redirectTo: '/login'
  })

  .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    })
  .when('/signup',{
    templateUrl:'views/signup.html',
    controller:'signupCtrl'
  })
  .when('/dashboard',{
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
