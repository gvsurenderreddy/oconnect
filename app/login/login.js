'use strict';
angular.module('login', [
  'ngCordova',
  'ui.router',
  'angular-storage',
  'openwrt'
])
  .config(function ($stateProvider) {

    //routing
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/templates/login.html',
        controller: 'LoginCtrl',
        data: {
          pageTitle: 'Welcome',
          requiresLogin: false
        }
      })
      .state('app.logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
  });

