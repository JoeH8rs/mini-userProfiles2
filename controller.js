angular.module('userProfiles');
///////////////////
app.controller('MainController', function ($scope, mainService) {

	$scope.currentPage = 1;
	$scope.totalPages = 0;
	///////////////////
	$scope.getUsers = function (page) {
		mainService.getUsers(page).then(function (response) {
			$scope.users = response.data;
			$scope.totalPages = response.total_pages;
		});
	};
	///////////////////
	$scope.getUsers(1);
	///////////////////  
	$scope.previous = function () {
		$scope.currentPage -= 1;
		$scope.getUsers($scope.currentPage);
    };
	///////////////////
    $scope.next = function () {
        $scope.currentPage += 1;
		$scope.getUsers($scope.currentPage);
    };
	///////////////////
});

