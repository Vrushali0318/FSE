app.controller("DeleteTaskController", function ($scope, $location, ShareData, TaskService) {

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

    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteTask = TaskService.delete(ShareData.value);

        promiseDeleteTask.then(function (pl) {
            $location.path("/showtask");
        },
            function (errorPl) {
                $scope.error = 'failure loading Task', errorPl;
            });
    };

});