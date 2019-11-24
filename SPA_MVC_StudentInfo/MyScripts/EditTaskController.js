/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\Scripts\angular.min.js" />

/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />



app.controller("EditTaskController", function ($scope, $location, ShareData, TaskService) {

    getTask();
    function getTask() {

        var promiseGetTask = TaskService.getTask(ShareData.value);


        promiseGetTask.then(function (pl) {
            $scope.Task = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading Task', errorPl;
            });
    }


    //The Save method used to make HTTP PUT call to the WEB API to update the record
    $scope.save = function () {
        var Task = {
            Task_ID: $scope.Task.Task_ID,
            Parent_Task: $scope.Task.Parent_Task,
            Priority: $scope.Task.Priority,
            Start_Date: $scope.Task.Start_Date,
            End_Date: $scope.Task.End_Date
        };

        var promisePutTask = TaskService.put($scope.Task.Task_ID, Task);
        promisePutTask.then(function (pl) {
            $location.path("/showtask");
        },
            function (errorPl) {
                $scope.error = 'failure loading Task', errorPl;
            });
    };

});