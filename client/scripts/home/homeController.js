(function () {

    'use strict';

    angular
    .module('app.home', [])
    // .config(config)
    .controller('HomeController', HomeCtrl);

    // injecting the service and constant
    HomeCtrl.$inject = ['HomeService', 'APP_CONFIG'];

    // function config(chartJsProvider) {

    //     ChartJsProvider.setOptions({ colors : [
    //
    //                     '#803690', // Blue
    //                     '#00ADF9', // Light grey
    //                     '#DCDCDC', // Red
    //                     '#46BFBD', // Green
    //                     '#FDB45C', // Yellow
    //                     '#949FB1', // Grey
    //                     '#4D5360'  // Dark Grey
    //                     ]});
    // }

    function HomeCtrl(HomeService, APP_CONFIG) {

        var self = this;
        var defaultUserName = APP_CONFIG.defaultUser;
        var memoize_User = {};
        var memoize_Repo = {};

        self.home = {};
        self.repo = [];
        self.error = false;
        self.getUserData = getUserData;

        // $scope.data = ['test', 'test'];
        // $scope.label = [2, 100];

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
            if (memoize_User[userName] && memoize_Repo[userName+"_Repo"]) {
                self.home = memoize_User[userName];
                self.repo = memoize_Repo[userName+"_Repo"];
                return;
            }

            var userDetails = HomeService.getUserDetails(userName);
            userDetails.then(function (response) {
                memoize_User[userName] = response;
                self.home = response;
            });
            getUserRepos(userName);
        }

        function getUserRepos(userName) {
            var userRepo = HomeService.getUserRepos(userName);
            userRepo.then(function(response) {
                memoize_Repo[userName+"_Repo"] = response;
                self.repo = response;
            });
        }
    }
})();
