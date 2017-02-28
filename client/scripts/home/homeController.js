(function () {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    // injecting the service, constant, resolved functions
    HomeCtrl.$inject = ['HomeService', '__env', 'getDefaultUser', 'getUserRepo'];

    function HomeCtrl(HomeService, __env, getDefaultUser, getUserRepo) {

        var self = this;

        self.home = getDefaultUser;
        self.repo = getUserRepo;
        self.error = false;
        self.getUserData = getUserData;
        self.getUsersBasedOnKeystrokes = getUsersBasedOnKeystrokes;

        /**
         * @public 
         */
        function getUserData(userName) {
            if(!userName){
                self.error = true;
                self.home.error = "Enter the username and search for it";
                return;
            }
            userData(userName);
        }

        /**
         * @private
         */
        function getAllUser() {
            var users = HomeService.getAllUser();
            users.then(function (response) {
                var users = [];
                response.forEach(function(user) {
                    users.push(user);
                });
            });
        }

        /**
         * @private init
         */
        function init() {
            getAllUser();
        }

        /**
         * @public getUsers based on keystroke
         */
         function getUsersBasedOnKeystrokes() {
            var users = HomeService.getAllUser();
         }

        function userData(userName) {
            var userDetails = HomeService.getUserDetails(userName);
            userDetails.then(function (response) {
                self.home = response;
            });
            getUserRepos(userName);
        }

        function getUserRepos(userName) {
            var userRepo = HomeService.getUserRepos(userName);
            userRepo.then(function(response) {
                self.repo = response;
            });
        }

        init();
    }
}());
