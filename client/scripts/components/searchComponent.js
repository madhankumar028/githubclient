(function () {

    'use strict';

    /**
    * search component
    *
    * @module app
    *
    */
    angular
    .module('app', [])
    .component('searchComponent', {
        template: `
        <form class="search" ng-submit="$ctrl.getUserData(userName)">
            <input type="text" class="input" ng-model="userName" placeholder="Search Github users ..." />
        </form>
        `,
        controller: searchController
    });

    function searchController(HomeService, APP_CONFIG) {

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
})();
