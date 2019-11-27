/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\Scripts\angular.min.js" />

/// <reference path="C:\TaskManager\SPA-Angularjs-ASPNET-WebAPI-master\MVC_Using_Angular\MyScripts/Module.js" />
/// <reference path="Services.js" />



app.controller("EditProjectController", function ($scope, $location, ShareData, ProjectService) {

    getProject();
    function getProject() {

        var promiseGeproject = ProjectService.getProject(ShareData.value);


        promiseGeproject.then(function (pl) {
            $scope.Project = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading Project', errorPl;
            });
    }

    //The Save method used to make HTTP PUT call to the WEB API to update the record
    $scope.save = function () {
        var Project = {
            Project_ID: $scope.Project.Project_ID,
            Project1: $scope.Project.Project1,
            Start_Date: $scope.Project.Start_Date,
            End_Date: $scope.Project.End_Date,
            Priority: $scope.Project.Priority
        };

        var promisePutProject = ProjectService.put($scope.Project.Project_ID, Project);
        promisePutProject.then(function (pl) {
            $location.path("/showproject");
        },
            function (errorPl) {
                $scope.error = 'failure loading Project', errorPl;
            });
    };

});