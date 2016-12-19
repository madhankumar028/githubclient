(function () {

    'use strict';

    angular.module('app.home')
    .service('HomeService', HomeService);

    function HomeService($http, $q, APP_CONFIG) {

        var self    = this;
        var apikey  = "client_id="+APP_CONFIG.client_id+"&client_secret="+APP_CONFIG.client_secret;

        self.getAllUser     = getAllUser;
        self.getUserDetails = getUserDetails;
        self.getUserRepos   = getUserRepos;

        /**
         * get allUsers
         *
         * @param {String} userName
         *
         *
         * @returns {Promise} Returns a promise
         */
        function getAllUser() {

            var options = {
                url: APP_CONFIG.all,
                method: 'GET',
                cache: true,
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            function handleSuccess(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }

            function handleError(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            }

            $http(options).success(handleSuccess).error(handleError);

            return deferred.promise;


        }
        /**
         * get the userDetails
         *
         * @param {String} userName
         *
         *
         * @returns {Promise} Returns a promise
         */
        function getUserDetails(userName) {

            var options = {
                url: APP_CONFIG.endpoint + userName + "?" + apikey,
                method: 'GET',
                cache: true,
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            function handleSuccess(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }

            function handleError(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            }

            $http(options).success(handleSuccess).error(handleError);

            return deferred.promise;
        }

        /**
         * get the userRepos
         *
         * @param {String} userName
         *
         *
         * @returns {Promise} Returns a promise
         */
        function getUserRepos(userName) {

            var options = {
                url: APP_CONFIG.endpoint + userName + "/repos",
                method: 'GET',
                cache: true,
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            function handleSuccess(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }

            function handleError(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            }

            $http(options).success(handleSuccess).error(handleError);

            return deferred.promise;
        }
    }
}());
