(function () {

    'use strict';

    var env = {};

    /**
     * Setting Enviroment variables for default config on window
     * @requires window Object
     */
    if (window) {
        Object.assign(env, window.___env);
    }

    /**
     * Currently manages all aspects of the application.This will be refactored into
     * multiple modules later on.
     *
     * @module app
     */
    angular.module('app', [

                    'ui.router',
                    'ngSanitize',

                    /* Features */
                    'app.login',
                    'app.home'
                    ])
            .config(Config)
            .constant('__env', __env);

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

        $stateProvider
        /*.state('login', {
            name: 'login',
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController as LoginCtrl'
        })*/
        .state('home', {
            name: 'profile',
            url: '/profile',
            templateUrl: 'views/home.html',
            controller: 'HomeController as HomeCtrl',
            resolve: {
                getDefaultUser: function (HomeService, __env) {
                    return HomeService.getUserDetails(__env.defaultUser)
                        .then(function(response) {
                            return response;
                        });
                },
                getUserRepo: function (HomeService, __env) {
                    return HomeService.getUserRepos(__env.defaultUser)
                        .then(function(response) {
                            return response;
                        });
                }
            }
        });
        
        // Default Route
        // $urlRouterProvider.otherwise('/login');

        // Production url
        $urlRouterProvider.otherwise('/profile');

        $httpProvider.interceptors.push('httpInterceptor');

        // HTML5 History API to remove the # tag inside in the url
        $locationProvider.html5Mode(true);

    };
}());
