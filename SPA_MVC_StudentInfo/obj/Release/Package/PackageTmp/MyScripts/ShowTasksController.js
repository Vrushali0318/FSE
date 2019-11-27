app.controller('ShowTasksController', function ($scope, $location, SinglePageCRUDService, ShareData, TaskService) {

    // this is base url 
    var baseUrl = '/API/TaskInfoAPI/';
    // get all student from databse
    $scope.getTasks = function () {
        var apiRoute = baseUrl;
        var _task = TaskService.getAll(apiRoute);
        _task.then(function (response) {
            $scope.Tasks = response.data;
        },
            function (error) {
                console.log("Error: " + error);
            });

    }
    $scope.getTasks();

    //Method to route to the addtask
    $scope.addTask = function () {
        $location.path("/addtask");
    }

    //Method to route to the edittask
    //The Task_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.editTask = function (taskNo) {
        ShareData.value = taskNo;
        $location.path("/edittask");
    }

    //Method to route to the deleteTask
    //The Task_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.deleteTask = function (taskNo) {
        ShareData.value = taskNo;
        $location.path("/deletetask");
    }
});