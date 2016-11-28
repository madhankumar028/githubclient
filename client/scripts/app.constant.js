(function () {

    /**
    * Currently manages all constant of the application.
    *
    * @module app.constant
    * @constant App_Config
    */
    angular
    .module('app.constant', [])
    .constant('App_Config', {
        'config': {
            'endpoint'      : '//api.github.com/users/',
            'defaultUser'   : 'madhankumar028',
            'client_id'     : 'b7641fc061fbc7eba0ae',
            'client_server' : '582f452b977885775b36fd81d8bfe51a5d48e59d',
            'error': {
                'serverError' : 'Oops!! Something went wrong!!',
                'userNotFound': 'Sorry, User not found',
                'emptyuser'   : 'Please enter an username and press enter!!'
            }
        }
    });

})();
