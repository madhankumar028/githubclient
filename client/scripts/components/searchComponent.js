(function () {

    'use strict';

    /**
    * search component
    *
    * @module app
    *
    */
    angular
    .module('app', [])
    .component('searchComponent', {
        template: `
        <form class="search" ng-submit="$ctrl.search(userName)">
        <input type="text" class="input" ng-model="userName" placeholder="Search Github users ..." />
        </form>
        `,
        controller: function (HomeService, APP_CONFIG) {

            this.inject = ['HomeService'];

            var defaultUserName = APP_CONFIG.defaultUser;

            this.$onInit = function () {
                search(defaultUserName);
            };

            function search(userName) {
                var userDetails = HomeService.getUserDetails(userName);
                userDetails.then(function (response) {
                    this.home = response;
                });
            }
        }
    });

    // function searchComponent() {
    //     return {
    //         controller: function (HomeService) {
    //             this.inject = ['HomeService'];
    //             function search() {
    //                 var userDetails = HomeService.getUserDetails(userName);
    //                 userDetails.then(function (response) {
    //                     this.home = response;
    //                 });
    //             }
    //         },
    //
    //         template: `
    //         <form class="search" ng-submit="$ctrl.search()">
    //         <input type="text" class="input" ng-model="userName" placeholder="Search Github users ..." />
    //         </form>
    //         `
    //     }
    // }
})();
