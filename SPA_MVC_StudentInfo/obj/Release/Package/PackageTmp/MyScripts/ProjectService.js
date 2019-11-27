app.service('ProjectService', function ($http) {
    //**********----Get All Record----***************
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    };

    //Fundction to Read Project based upon id
    this.getProject = function (id) {
        return $http.get("/api/ProjectInfoAPI/" + id);
    };

    //Function to create new Project
    this.post = function (Project) {
        var request = $http({
            method: "post",
            url: "/api/ProjectInfoAPI",
            data: Project
        });
        return request;
    };
    //Function  to Edit Project based upon id 
    this.put = function (id, Project) {
        var request = $http({
            method: "put",
            url: "/api/ProjectInfoAPI/" + id,
            data: Project
        });
        return request;
    };

    //Function to Delete User based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ProjectInfoAPI/" + id
        });
        return request;
    };

    //The function to read Orders based on filter and its value
    //The function reads all records if value is not entered
    //Else based on the filter and its value, the Orders will be returned
    this.getfilteredData = function (filter, value) {
        var res;
        if (value.length == 0) {
            debugger;
            res = $http.get("/Projects");
            return res;
        } else {
            res = $http.get("/Projects/" + filter + "/" + value);
            return res;
        }

    };

});