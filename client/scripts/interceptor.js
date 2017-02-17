(function () {

    'use strrict';

    angular
    .module('app')
    .factory('httpInterceptor', appInterceptor);

    function appInterceptor($rootScope, $q) {

        var loadings = 0;
        return {
            request: function(config) {
                loadings++;

                //show loader
                $rootScope.$broadcast("loader_show");
                return config || $q.when(config);
            },
            response: function (response) {
                if ((--loadings) === 0) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return response || $q.when(response);
            }
        };
    }
})();
