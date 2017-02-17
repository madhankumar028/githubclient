(function () {

    'use strict';

    angular
    .module('app.login', [])
    .controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['__env', '$http', '$q', 'LoginService'];

    function LoginCtrl(__env, $http, $q, LoginService) {
        
        var self = this;

        self.submit = submit();

        function submit() {

            var oAuthResponse = LoginService.submit();

            oAuthResponse.then(function(res) {
                console.log(res);
            });
        }
    }

}());
