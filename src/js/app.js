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

    $scope.openRepository = (course) => {
        window.open(course.code);
    };

    $scope.openSite = (course) => {
        window.open(course.site);
    };

    $scope.init();
});

app.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});
