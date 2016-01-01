var app = angular.module('userProfiles'); 
     ///////////////////
app.service('mainService', function ($http) {
    this.getUsers = function (page) {
        return $http({
            method: 'Get',
            url: 'http://reqres.in/api/users?page=' + page
        }).then(function (response) {
            if (response.status === 200) {
                return response.data;
            }
        });
    };
});






    
    