var minesweepApp = angular.module('minesweepApp', []);

minesweepApp.controller('fieldCtrl', ["$scope", ($scope) => { 
	$scope.score = $scope.$parent.score
);

minesweepApp.controller('plusMinus', ["$scope", ($scope) => { 
	$scope.inc = () => $scope.$parent.score += 1
	$scope.dec = () => $scope.$parent.score -= 1
	}]
);

