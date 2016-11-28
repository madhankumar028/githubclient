(function () {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = ['HomeService', 'APP_CONFIG'];

    function HomeCtrl(HomeService, APP_CONFIG) {

        var self = this;
        var home = {};
        var defaultUserName = APP_CONFIG.defaultUser;

        self.getUserDetails = getUserDetails;

        function getUserDetails(userName) {
            HomeService.getUserDetails(userName, function(err, data){
                home.user = data;
                console.log(home);
            });
        }

        HomeService.getUserDetails(defaultUserName);
    }
})();
