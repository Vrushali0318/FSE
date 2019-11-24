app.controller('AddUserController', function ($scope, SinglePageUserCRUDService) {
    $scope.User_ID = 0;
    //The Save scope method use to define the User object and 
    //post the User information to the server by making call to the Service
    $scope.save = function () {
        var User = {
            User_ID: $scope.User_ID,
            First_Name: $scope.First_Name,
            Last_Name: $scope.Last_Name,
            Employee_ID: $scope.Employee_ID
        };

        var promisePost = SinglePageUserCRUDService.post(User);

        promisePost.then(function (pl) {
            alert("User Saved Successfully.");
        },

        //promisePost.then(function (pl) {
        //    $scope.User_ID = pl.data.User_ID;
        //    alert("User_ID " + pl.data.User_ID);
        //},
            function (errorPl) {
                $scope.error = 'failure loading User', errorPl;
            });

    };

    $scope.checkErr = function (First_Name, Last_Name, Employee_ID) {
        $scope.errMessage = '';

        if (First_Name == "") {
            $scope.errMessage = 'Enter First Name.';
            return false;
        }
        else if (Last_Name == "") {
            $scope.errMessage = 'Enter Last Name.';
            return false;
        }
        else if (Employee_ID == "") {
            $scope.errMessage = 'Enter Employee ID.';
            return false;
        }
        else { return true; }
    };

    $scope.reset = function () {
        $scope.User_ID = 0,
            $scope.First_Name = "",
            $scope.Last_Name = "",
            $scope.Employee_ID = 0
    };
    $scope.reset();

});