(function () {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    HomeCtrl.$inject = ['HomeService', 'APP_CONFIG'];

    function HomeCtrl(HomeService, APP_CONFIG) {

        var self = this;
        var defaultUserName = APP_CONFIG.defaultUser;

        self.home = {};
        self.getUserData = getUserData;

        function getUserData(userName) {
            if(!userName){
                return;
            }
            userData(userName);
        }
        userData(defaultUserName);

        function userData(userName) {
            var userDetails = HomeService.getUserDetails(userName);
            userDetails.then(function (response) {
                self.home = response;
                console.log(self.home);
            })
        }
    }
})();
