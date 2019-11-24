app.service('UserService', function ($http) {
    //**********----Get All Record----***************
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    };

    //Fundction to Read User based upon id
    this.getUser = function (id) {
        return $http.get("/api/UserInfoAPI/" + id);
    };

    //Function to create new User
    this.post = function (User) {
        var request = $http({
            method: "post",
            url: "/api/UserInfoAPI",
            data: User
        });
        return request;
    };
    //Function  to Edit User based upon id 
    this.put = function (id, User) {
        var request = $http({
            method: "put",
            url: "/api/UserInfoAPI/" + id,
            data: User
        });
        return request;
    };

    //Function to Delete User based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/UserInfoAPI/" + id
        });
        return request;
    };

    //The function to read Orders based on filter and its value
    //The function reads all records if value is not entered
    //Else based on the filter and its value, the Orders will be returned
    this.getfilteredData = function (filter, value) {
        var res;
        if (value.length == 0) {
            res = $http.get("/Users");
            return res;
        } else {
            res = $http.get("/Users/" + filter + "/" + value);
            return res;
        }

    };

});