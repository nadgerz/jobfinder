angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: "Sales Person",
        description: 'you will fight dragons'
    }, {
        title: "Firefighter",
        description: 'you will fight the Sales Person'
    }];
});