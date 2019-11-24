app.controller('AddTaskController', function ($scope, SinglePageTaskCRUDService) {
    $scope.Task_ID = 0;
    //The Save scope method use to define the Task object and 
    //post the Task information to the server by making call to the Service
    $scope.save = function () {
        var Task = {
            Task_ID: $scope.Task_ID,
            Parent_Task: $scope.Parent_Task,
            Priority: $scope.Priority,
            Start_Date: $scope.Start_Date,
            End_Date: $scope.End_Date
        };

        var promisePost = SinglePageTaskCRUDService.post(Task);

        
        promisePost.then(function (pl) {
            $scope.Task_ID = pl.data.Task_ID;
            alert("Task Added Successfully.");          
        },
            function (errorPl) {
                $scope.error = 'failure loading Task', errorPl;
            });

    };

    $scope.checkErr = function (Start_Date, End_Date, Parent_Task, Priority) {
        $scope.errMessage = '';
        if (new Date(Start_Date) > new Date(End_Date)) {
            $scope.errMessage = 'End Date should be greater than start date';
            return false;
        }
        else if (Parent_Task == undefined) {
            $scope.errMessage = 'Enter Parent Task.';
            return false;
        }
        else if (Priority == undefined) {
            $scope.errMessage = 'Enter Priority.';
            return false;
        }
        else {
            return true;
        }

    };

    $scope.reset = function () {
        $scope.Task_ID = 0,
            $scope.Parent_Task = "",
            $scope.Start_Date = "",
            $scope.End_Date = "",
            $scope.Priority = 0
    };
    $scope.reset();

});