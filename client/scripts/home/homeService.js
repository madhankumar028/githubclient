  (function () {

    'use strict';

    angular.module('app.home')
    .service('HomeService', HomeService);

    function HomeService($http, $q, APP_CONFIG) {

        var self    = this;
        var apikey  = "client_id="+APP_CONFIG.client_id+"&client_secret="+APP_CONFIG.client_secret;

        self.getUserDetails = getUserDetails;

        /**
         * get the userDetails
         *
         * @param {String} userName
         *
         *
         * @returns {Promise} Returns a promise
         */
        function getUserDetails(userName) {

            console.log(APP_CONFIG.endpoint + userName + "?" + apikey);
            var options = {
                url: APP_CONFIG.endpoint + userName + "?" + apikey,
                method: 'GET',
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .success(function (response, status, header, config) {
                deferred.resolve(response);
                console.log(response);
            })
            .error(function (response, status, header, config) {

            });

            return deferred.promise;
        }
    }
})();
