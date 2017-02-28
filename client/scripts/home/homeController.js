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
        self.users = [];
        // self.getUsersBasedOnKeystrokes = getUsersBasedOnKeystrokes;

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
            
            var res = HomeService.getAllUser();
            
            res.then(function (response) {
                response.forEach(function(user) {
                    self.users.push(user.login);
                });
            });
        }

        /**
         * @private init
         */
        function init() {
            getAllUser();
            // getUsersBasedOnKeystrokes();
        }

        /**
         * @public getUsers based on keystroke
         * TODO service call for every keystrokes
         * to match the user input to auto complete
         */
        //  function getUsersBasedOnKeystrokes() {
        //     var res = HomeService.getAllUser();
        //     res.then(function(response) {
        //         self.users.push(user.login);
        //     });
        //  }

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
