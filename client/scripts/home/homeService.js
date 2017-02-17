(function () {

    'use strict';

    angular.module('app.home')
    .service('HomeService', HomeService);

    function HomeService($http, $q, __env) {

        var self    = this;
        var apikey  = "client_id=" + __env.clientId + "&client_secret=" + __env.clientSecret;

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
                url: __env.baseUrl,
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
                url: __env.apiUrl + userName + "?" + apikey,
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
                url: __env.apiUrl + userName + "/repos",
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
