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
         * @param {String} password
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
            .success(function (data, headers, config, status) {
                deferred.resolve(data);
                console.log(data);
            })
            .error(function (status, headers, config, data) {

            });

            return deferred.promise;
        }
    }
})();
