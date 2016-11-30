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
        var memoize = {};

        self.home = {};
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
            if (memoize[userName+"_data"]) {
                self.home = memoize[userName+"_data"];
                console.log(memoize);
                return;
            }

            var userDetails = HomeService.getUserDetails(userName);
            userDetails.then(function (response) {
                memoize[userName+"_data"] = response;
                console.log(memoize);
                self.home = response;
                console.log(self.home);
            });
        }
    }
})();
