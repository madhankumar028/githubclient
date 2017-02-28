(function () {

    'use strict';

    angular
    .module('app.login')
    .directive('ngAddSubmitEvent', ngAddSubmitEvent);

    ngAddSubmitEvent.$inject = ['$compile'];

    function ngAddSubmitEvent($compile) {
        
        return {
            scope: true,
            link: linker
        };

        function linker($scope, attrs, element) {
            
        }
    }

}());