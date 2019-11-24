app.controller('ShowProjectsController1', function ($scope, $location, SinglePageProjectCRUDService, ShareData) {
    loadAllStudentsRecords();

    function loadAllStudentsRecords() {
        var promiseGetStudent = SinglePageProjectCRUDService.getProjects();

        promiseGetStudent.then(function (pl) {
            debugger;
            $scope.Projects = pl.data
        },
            function (errorPl) {
                $scope.error = errorPl;
            });
    }

    ////To Edit Student Information
    //$scope.editStudent = function (StudentID) {
    //    ShareData.value = StudentID;
    //    $location.path("/editStudent");
    //}

    ////To Delete a Student
    //$scope.deleteStudent = function (StudentID) {
    //    ShareData.value = StudentID;
    //    $location.path("/deleteStudent");
    //}
});