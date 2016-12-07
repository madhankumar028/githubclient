(function () {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    // injecting the service and constant
    HomeCtrl.$inject = ['HomeService', 'APP_CONFIG'];

    function HomeCtrl(HomeService, APP_CONFIG) {

        var self = this;
        var defaultUserName = APP_CONFIG.defaultUser;
        var memoize_User = {};

        self.home = {};
        self.repo = [];
        self.error = false;
        self.getUserData = getUserData;

        function getUserData(userName) {
            if(!userName){
                self.error = true;
                self.home.error = "Enter the username and search for it";
                return;
            }
            userData(userName);
        }
        userData(defaultUserName);

        function userData(userName) {

            // Memoize the already searched users
            if (memoize_User[userName]) {
                self.home = memoize_User[userName];
                console.log(memoize);
                return;
            }

            var userDetails = HomeService.getUserDetails(userName);
            userDetails.then(function (response) {
                memoize_User[userName] = response;
                self.home = response;
            });
        }

        getUserRepos(defaultUserName);

        function getUserRepos(userName) {
            var userRepo = HomeService.getUserRepos(userName);
            userRepo.then(function(response) {
                self.repo = response;
                console.log(self.repo);
            });
        }
    }
})();
