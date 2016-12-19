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
