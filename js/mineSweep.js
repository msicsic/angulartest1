var minesweepApp = angular.module('minesweepApp', []);

minesweepApp.controller('fieldCtrl', ["$scope", ($scope) => { 
	$scope.score = Math.random()*100

	$scope.change = () => $scope.score += 1
	}]
);

