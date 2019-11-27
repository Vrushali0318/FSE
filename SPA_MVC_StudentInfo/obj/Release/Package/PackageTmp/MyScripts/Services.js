 
app.service("SPACRUDService", function ($http) {

    //Read all Students
    this.getStudents = function () {
      
        return $http.get("/api/ManageStudentInfoAPI");
    };

    //Fundction to Read Student by Student ID
    this.getStudent = function (id) {
        return $http.get("/api/ManageStudentInfoAPI/" + id);
    };

    //Function to create new Student
    this.post = function (Student) {
        var request = $http({
            method: "post",
            url: "/api/ManageStudentInfoAPI",
            data: Student
        });
        return request;
    };

    //Edit Student By ID 
    this.put = function (id, Student) {
        var request = $http({
            method: "put",
            url: "/api/ManageStudentInfoAPI/" + id,
            data: Student
        });
        return request;
    };

    //Delete Student By Student ID
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ManageStudentInfoAPI/" + id
        });
        return request;
    };
});

app.service("SinglePageUserCRUDService", function ($http) {

    //Function to Read All Users
    this.getUsers = function () {
        return $http.get("/api/UserInfoAPI");
    };

    //Fundction to Read User based upon id
    this.getUsers = function (id) {
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

});
app.service("SinglePageTaskCRUDService", function ($http) {

    //Function to Read All Tasks
    this.getTasks = function () {
        return $http.get("/api/TaskInfoAPI");
    };

    //Fundction to Read Task based upon id
    this.getTasks = function (id) {
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
app.service("SinglePageProjectCRUDService", function ($http) {


    //Function to Read All Projects
    this.getProjects = function () {
        return $http.get("/api/ProjectInfoAPI");
    };

    //Fundction to Read Project based upon id
    this.getProjects = function (id) {
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

    //Function to Delete Project based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ProjectInfoAPI/" + id
        });
        return request;
    };


});








