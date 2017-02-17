(function () {

    'use strrict';

    angular
    .module('app')
    .factory('httpInterceptor', appInterceptor);

    function appInterceptor($rootScope, $q, $location) {

        var loadings = 0;
        return {
            request: function(config) {
                loadings++;

                //show loader
                $rootScope.$broadcast("loader_show");
                return config || $q.when(config);
            },
            response: function (response) {

                if (response.status === 302) {
                    $location.path(response.header.Location)
                }
                
                if ((--loadings) === 0) {
                    // Hide loader
                    $rootScope.$broadcast("loader_hide");
                }

                return response || $q.when(response);
            }
        };
    }
})();
