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

    /**
    * Default configuration for the application.
    *
    *
    * @memberof module:app
    *
    * @requires $urlRouterProvider
    * @requires $stateProvider
    *
    */
    .config(function ($httpProvider, $urlRouterProvider, $stateProvider) {

        $stateProvider.state('home', {
            name: 'home',
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController as HomeCtrl',
            resolve: {
                getDefaultUser: function (HomeService, APP_CONFIG) {
                    var defaultUser = APP_CONFIG.defaultUser;
                    return HomeService.getUserDetails(defaultUser).then(function(response) {
                        return response;
                    });
                },
                getUserRepo: function (HomeService, APP_CONFIG) {
                    var defaultUser = APP_CONFIG.defaultUser;
                    return HomeService.getUserRepos(defaultUser).then(function(response) {
                        return response;
                    });
                }
            }
        }).state('about', {
            name: 'about',
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'HomeController as HomeCtrl'
        });

        $urlRouterProvider.otherwise('/home');
        $httpProvider.interceptors.push('httpInterceptor');
    });
}());
