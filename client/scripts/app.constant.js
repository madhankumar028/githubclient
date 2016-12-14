(function () {

    /**
    * Currently manages all constant of the application.
    *
    * @module app.constant
    * @constant App_Config
    */
    angular
    .module('app.constant', [])
    .constant('APP_CONFIG', {
        'endpoint'      : '//api.github.com/users/',
        'defaultUser'   : 'madhankumar028',
        'repoCount'     : 10,
        'client_id'     : 'b7641fc061fbc7eba0ae',
        'client_secret' : '582f452b977885775b36fd81d8bfe51a5d48e59d',
    });

}());
