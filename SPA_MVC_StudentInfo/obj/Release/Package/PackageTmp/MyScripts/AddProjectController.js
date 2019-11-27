app.controller('AddProjectController', function ($scope, SinglePageProjectCRUDService) {
    $scope.Project_ID = 0;
    //The Save scope method use to define the Project object and 
    //post the Project information to the server by making call to the Service
    $scope.save = function () {
        var Project = {
            Project_ID: $scope.Project_ID,
            Project1: $scope.Project1,
            Start_Date: $scope.Start_Date,
            End_Date: $scope.End_Date,
            Priority: $scope.Priority
        };

        var promisePost = SinglePageProjectCRUDService.post(Project);


        promisePost.then(function (pl) {
            $scope.Project_ID = pl.data.Project_ID;
            alert("Project Added Successfully.");          
        },
            function (errorPl) {
                $scope.error = 'failure loading Project', errorPl;
            });

    };

    $scope.checkErr = function (Start_Date, End_Date) {
        $scope.errMessage = '';
        if (new Date(Start_Date) > new Date(End_Date)) {
            $scope.errMessage = 'End Date should be greater than start date';
            return false;
        }
        else { return true; }

    };

    $scope.reset = function () {
        $scope.Project_ID = 0,
            $scope.Project1 = "",
            $scope.Start_Date = "",
            $scope.End_Date = "",
            $scope.Priority = 0
    };
    $scope.reset();

});