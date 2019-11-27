app.controller('ShowProjectsController', function ($scope, $location, ProjectService, ShareData) {

    // this is base url 
    var baseUrl = '/API/ProjectInfoAPI/';
    // get all project from databse
    $scope.getProjects = function () {
        var apiRoute = baseUrl;
        var _project = ProjectService.getAll(apiRoute);
        _project.then(function (response) {            
            //$scope.Projects = response.data;            

            $scope.Projects = [
                { Project_ID: 1, Project1: "FSE Test1", Start_Date: "1-Nov-2019", End_Date: "30-Dec-2019", Priority: "5" },
                { Project_ID: 2, Project1: "FSE Test2", Start_Date: "2-Nov-2019", End_Date: "31-Dec-2019", Priority: "3" }
            ];
                        $scope.IsVisible = true;
        },
            function (error) {
                console.log("Error: " + error);
            });

    }
    $scope.getProjects();
  

    //Method to route to the add
    $scope.addProject = function () {
        $location.path("/addproject");
    }

    //Method to route to the editproject
    //The Task_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.editProject = function (projectId) {
        ShareData.value = projectId;
        $location.path("/editproject");
    }

    //Method to route to the deleteproject
    //The Project_id passed to this method is further set to the ShareData
    //This value can then be used to communicate across the Controllers
    $scope.deleteProject = function (projectId) {
        ShareData.value = projectId;
        $location.path("/deleteproject");
    }

    $scope.Selectors = ["Start_Date", "End_Date", "Priority"];
    $scope.SelectedCriteria = ""; //The Object used for selecting value from <option>
    $scope.filterValue = ""; //The object used to read value entered into textbox for filtering information from table

    //Function to Load orders based on criteria
    $scope.getFilteredData = function () {
        var promise = ProjectService.getfilteredData($scope.SelectedCriteria, $scope.filterValue);
        promise.then(function (resp) {
            $scope.Projects = resp.data;
            $scope.Message = "Call is Completed Successfully";
        }, function (err) {
            $scope.Message = "Call Failed " + err.status;
        });
    };
});