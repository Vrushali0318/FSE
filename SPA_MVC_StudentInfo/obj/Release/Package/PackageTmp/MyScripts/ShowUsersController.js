app.controller('ShowUsersController', function ($scope, $location, UserService, ShareData) {

    // this is base url 
    var baseUrl = '/API/UserInfoAPI/';
    // get all user from databse
    $scope.getUsers = function () {
        var apiRoute = baseUrl;
        var _user = UserService.getAll(apiRoute);
        _user.then(function (response) {
           // $scope.Users = response.data;
            $scope.Users = [
                { User_ID: 1, First_Name: "TestUser", Last_Name:"TestSurname", Employee_ID:169937 }                
            ];
            $scope.IsVisible = true;

        },
            function (error) {
                console.log("Error: " + error);
            });

    }
    $scope.getUsers();

    //Method to route to the add
    $scope.addUser = function () {
        $location.path("/adduser");
    }

    //Method to route to the edituser
    //The Task_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.editUser = function (userId) {
        ShareData.value = userId;
        $location.path("/edituser");
    }

    //Method to route to the deleteuser
    //The Task_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.deleteUser = function (userId) {
        ShareData.value = userId;
        $location.path("/deleteuser");
    }


    $scope.Selectors = ["First_Name", "Last_Name", "Employee_ID"];
    $scope.SelectedCriteria = ""; //The Object used for selecting value from <option>
    $scope.filterValue = ""; //The object used to read value entered into textbox for filtering information from table

    //Function to Load orders based on criteria
    $scope.getFilteredData = function () {
        var promise = UserService.getfilteredData($scope.SelectedCriteria, $scope.filterValue);
        promise.then(function (resp) {
            $scope.Users = resp.data;
            $scope.Message = "Call is Completed Successfully";
        }, function (err) {
            $scope.Message = "Call Failed " + err.status;
        });
    };


});