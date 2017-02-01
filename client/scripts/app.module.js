(function () {

    'use strict';

    /**
    * Currently manages all aspects of the application.This will be refactored into
    * multiple modules later on.
    *
    * @module app
    */
    angular.module('app', [

                    'ui.router',

                    /* Features */
                    'app.constant',
                    'app.home'
                    ])
            .config(Config);

    Config.$inject = ['$httpProvider', '$urlRouterProvider', '$stateProvider', '$locationProvider'];

    /**
    * @memberof module:app
    *
    * Application config phase to handle ui-router states
    * @requires $urlRouterProvider
    * @requires $stateProvider
    * @requires $locationProvider
    *
    */
    function Config($httpProvider, $urlRouterProvider,
                    $stateProvider, $locationProvider) {

        $stateProvider.state('home', {
            name: 'profile',
            url: '/profile',
            templateUrl: 'views/home.html',
            controller: 'HomeController as HomeCtrl',
            resolve: {
                getDefaultUser: function (HomeService, APP_CONFIG) {
                    return HomeService.getUserDetails(APP_CONFIG.defaultUser)
                        .then(function(response) {
                            return response;
                        });
                },
                getUserRepo: function (HomeService, APP_CONFIG) {
                    return HomeService.getUserRepos(APP_CONFIG.defaultUser)
                        .then(function(response) {
                            return response;
                        });
                }
            }
        });
        
        // Default Route
        $urlRouterProvider.otherwise('/profile');

        $httpProvider.interceptors.push('httpInterceptor');

        // HTML5 History API to remove the # tag inside in the url
        $locationProvider.html5Mode(true);

    };
}());
