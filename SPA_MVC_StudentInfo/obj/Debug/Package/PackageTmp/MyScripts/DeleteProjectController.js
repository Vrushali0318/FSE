app.controller("DeleteProjectController", function ($scope, $location, ShareData, ProjectService) {

    getProject();
    function getProject() {

        var promiseGetProject = ProjectService.getProject(ShareData.value);

        promiseGetProject.then(function (pl) {
            $scope.Project = pl.data;
        },
            function (errorPl) {
                $scope.error = 'failure loading Project', errorPl;
            });
    }

    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteProject = ProjectService.delete(ShareData.value);

        promiseDeleteProject.then(function (pl) {
            $location.path("/showproject");
        },
            function (errorPl) {
                $scope.error = 'failure loading Project', errorPl;
            });
    };

});