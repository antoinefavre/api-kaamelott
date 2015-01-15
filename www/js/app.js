// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    .config(function( $stateProvider, $urlRouterProvider) {

      $stateProvider
          .state('app', {
            abstract: true,
            templateUrl: "templates/menu.html"
          })

          .state('app.home', {
            url: "/home", views: {'menuContent': {templateUrl: "templates/home.html"}}
          })

          .state('app.character', {
            url: "/character", views: {'menuContent': {templateUrl: "templates/character.html", controller: 'CharacterCtrl'}}
          })

          .state('app.actor', {
              url: "/actor", views: {'menuContent': {templateUrl: "templates/actor.html", controller: 'ActorCtrl'}}
          })

          .state('app.citation', {
              url: "/citation", views: {'menuContent': {templateUrl: "templates/citation.html", controller: 'CitationCtrl'}}
          })

          $urlRouterProvider.otherwise('/home');

    });





