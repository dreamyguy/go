// jasmine's first test
function hw() {
    return 'Hello World';
}

// the app!
var myAppModule = angular.module('myApp', []);

myAppModule.controller('myController', function($scope, $window) {

    // do something

    // render showOnLoad on page load
    $scope.showOnLoad = true;

});
