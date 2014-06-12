/**
 * Created by wlehman on 5/16/14.
 */
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: "app.html",
            controller: "AppCtrl"
        })
        .when('/pizza', {
            template: "Yum!!"
        }).otherwise({
            template: "This doesn't exist!"
        })
});

app.controller("AppCtrl", function ($scope) {

    $scope.model = {
        message: "This is my app!!!"
    }
});