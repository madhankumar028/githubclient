(function () {

    'use strict';

    angular
    .module('app.login')
    .service('LoginService', LoginService);

    function LoginService(__env, $http, $q) {

        var self = this;

        self.submit = submit;

        function submit() {

            var options = {
                url: __env.oAuth + "?" + "client_id=" + __env.clientId + "&" + "redirect_uri=" + __env.redirectUri,
                method: 'GET',
                cache: false,
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            function handleSuccess(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            }

            function handleFailure(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            }

            $http(options).success(handleSuccess).error(handleFailure);

            return deferred.promise;
        }
    }
}());
