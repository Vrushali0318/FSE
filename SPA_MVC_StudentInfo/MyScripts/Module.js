var app = angular.module("ApplicationModule", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;
    $routeProvider.when('/showstudents',
                        {
                            templateUrl: 'ManageStudentInfo/ShowStudents',
                            controller: 'ShowStudentsController'
                        });
    $routeProvider.when('/addstudent',
                        {
                            templateUrl: 'ManageStudentInfo/AddNewStudent',
                            controller: 'AddStudentController'
                        });
    $routeProvider.when("/editStudent",
                        {
                            templateUrl: 'ManageStudentInfo/EditStudent',
                            controller: 'EditStudentController'
                        });
    $routeProvider.when('/deleteStudent',
                        {
                            templateUrl: 'ManageStudentInfo/DeleteStudent',
                            controller: 'DeleteStudentController'
        });


    $routeProvider.when('/adduser',
        {
            templateUrl: 'UserInfo/AddNewUser',
            controller: 'AddUserController'
        });
    $routeProvider.when('/showusers',
        {
            templateUrl: 'UserInfo/ShowUsers',
            controller: 'ShowUsersController'
        });
    $routeProvider.when("/edituser",
        {
            templateUrl: 'UserInfo/EditUser',
            controller: 'EditUserController'
        });
    $routeProvider.when('/deleteuser',
        {
            templateUrl: 'UserInfo/DeleteUser',
            controller: 'DeleteUserController'
        });


    $routeProvider.when('/addtask',
        {
            templateUrl: 'TaskInfo/AddNewTask',
            controller: 'AddTaskController'
        });
    $routeProvider.when('/showtasks',
        {
            templateUrl: 'TaskInfo/ShowTasks',
            controller: 'ShowTasksController'
        });
    $routeProvider.when("/edittask",
        {
            templateUrl: 'TaskInfo/EditTask',
            controller: 'EditTaskController'
        });
    $routeProvider.when('/deletetask',
        {
            templateUrl: 'TaskInfo/DeleteTask',
            controller: 'DeleteTaskController'
        });

    $routeProvider.when('/addproject',
        {
            templateUrl: 'ProjectInfo/AddNewProject',
            controller: 'AddProjectController'
        });
    $routeProvider.when('/showprojects',
        {
            templateUrl: 'ProjectInfo/ShowProjects',
            controller: 'ShowProjectsController'
        });

    $routeProvider.when("/editproject",
        {
            templateUrl: 'ProjectInfo/EditProject',
            controller: 'EditProjectController'
        });
    $routeProvider.when('/deleteproject',
        {
            templateUrl: 'ProjectInfo/DeleteProject',
            controller: 'DeleteProjectController'
        });





    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
        });

    
    $locationProvider.html5Mode(true).hashPrefix('!')
}]);