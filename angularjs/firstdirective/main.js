/**
 * Created by wlehman on 6/11/14.
 */
var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        restrict: "E",
        template: "<div>Here I am to save the day</div>"
    }
})