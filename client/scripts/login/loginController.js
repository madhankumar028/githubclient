(function () {

    'use strict';

    angular
    .module('app.login', [])
    .controller('LoginController', LoginController);

    LoginController.$inject = ['__env', '$http', '$q', 'LoginService', '$sce'];

    function LoginController(__env, $http, $q, LoginService, $sce) {
        
        var self = this;

        self.submit = submit;
        self.signupPage;

        function submit() {
            var oAuthResponse = LoginService.submit();

            oAuthResponse.then(function(response) {
                self.signupPage = $sce.trustAsHtml(response);
            });
        }
    }

}());
