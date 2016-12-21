(function () {

    'use strict';

    angular
    .module('app.home', [])
    .controller('HomeController', HomeCtrl);

    // injecting the service, constant, resolved functions
    HomeCtrl.$inject = ['HomeService', 'APP_CONFIG', 'getDefaultUser', 'getUserRepo'];

    function HomeCtrl(HomeService, APP_CONFIG, getDefaultUser, getUserRepo) {

        var self = this;

        self.home = getDefaultUser;
        self.repo = getUserRepo;
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

        function getAllUser() {
            var users = HomeService.getAllUser();
            users.then(function (response) {
                var options = '';
                for(var i = 0; i < response.length; i++) {
                    options += '<option value="'+response[i].login+'" />';
                    document.getElementById('userList').innerHTML = options;
                }
            });
        }

        getAllUser();

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
    }
}());
