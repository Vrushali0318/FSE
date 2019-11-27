/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\Scripts\angular.min.js" />

/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />



app.controller("EditUserController", function ($scope, $location, ShareData, UserService) {

    getUser();
    function getUser() {

        var promiseGetUser = UserService.getUser(ShareData.value);


        promiseGetUser.then(function (pl) {
            $scope.User = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading User', errorPl;
            });
    }


    //The Save method used to make HTTP PUT call to the WEB API to update the record
    $scope.save = function () {
        var User = {
            First_Name: $scope.User.First_Name,
            Last_Name: $scope.User.Last_Name,
            Employee_ID: $scope.User.Employee_ID,
            User_ID: $scope.User.User_ID
        };

        var promisePutUser = UserService.put($scope.User.User_ID, User);
        promisePutUser.then(function (pl) {
            $location.path("/showuser");
        },
            function (errorPl) {
                $scope.error = 'failure loading User', errorPl;
            });
    };

});