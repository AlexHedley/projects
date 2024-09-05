var app = angular.module("app", []);
app.controller("controller", function ($scope, $http, $q, $filter) {
    $scope.data = [];

    $scope.init = function () {
        getData();
    };

    getData = () => {
        var file = "data/data.json";

        $http.get(file).then(function (response) {
            $scope.data = response.data.projects;
        });
    };

    $scope.openRepository = (project) => {
        window.open(project.code);
    };

    $scope.openSite = (project) => {
        window.open(project.site);
    };

    $scope.getStatus = (project) => {
        var status = "";
        switch (project.status) {
            case "Complete":
                status = "badge-success";
                break;
            case "In Progress":
                status = "badge-warning";
                break;
            case "Paused":
                status = "badge-info";
                break;
            case "Not Started":
                status = "badge-secondary";
                break;
            default:
                status = "badge-secondary";
        }
        return status;
    };

    $scope.init();
});

app.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});
