(function () {
    'use strict';
    angular.module('main')
        .filter('CapitalizeFilter',capitalizeFilter);

    function capitalizeFilter() {
        return function (input,index) {
            if(!input || index>=input.length){
                return input;
            }
            // return input.slice(0,index)+input[index].toUpperCase()+input.slice(index+1);
            return input.slice(0,index)+(input.slice(index)).toUpperCase();
        }
    }
})()