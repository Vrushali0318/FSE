app.service('TaskService', function ($http) {
    //**********----Get All Record----******************
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    };

    //Fundction to Read Task based upon id
    this.getTask = function (id) {
        return $http.get("/api/TaskInfoAPI/" + id);
    };

    //Function to create new Task
    this.post = function (Task) {
        var request = $http({
            method: "post",
            url: "/api/TaskInfoAPI",
            data: Task
        });
        return request;
    };
    //Function  to Edit Task based upon id 
    this.put = function (id, Task) {
        var request = $http({
            method: "put",
            url: "/api/TaskInfoAPI/" + id,
            data: Task
        });
        return request;
    };

    //Function to Delete Task based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/TaskInfoAPI/" + id
        });
        return request;
    };

});
