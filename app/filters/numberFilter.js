(function () {
    'use strict';
    angular.module('main')
        .filter('NumberFilter',numberFilter);

    function numberFilter() {
        return function (value) {
            value = parseInt(value);
            if(!value || typeof value!== "number"){
                return '';
            }
            if(value%10 === 1 && value!==11 ){
                return value+""+'st';
            }
            else if(value%10 === 2 && value!==12){
                return value+""+'nd';
            }
            else if(value%10 === 3 && value!== 13){
                return value+""+'rd';
            }
            else{
                return value+""+'th';
            }
        }
    }

})()