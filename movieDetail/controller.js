/*
* @Author: ASD
* @Date:   2016-10-06 10:38:20
* @Last Modified by:   ASD
* @Last Modified time: 2016-10-07 22:26:42
*/

'use strict';
(function  (angular) {
	angular.module('movieList.comming_soon',['ngRoute'])
	.config(['$routeProvider',function  ($routeProvider) {
		$routeProvider.when('/detail/:id',{
			templateUrl:'movieDetail/view.html',
			controller:'commingSoonController'
		});
	}])
	.controller('commingSoonController', [
		'$scope',
		'HttpService',
		'$routeParams',
		 function($scope,HttpService,$routeParams){
		 	$scope.loading = true;
		 	var address = 'https://api.douban.com/v2/movie/subject/' + $routeParams.id;
		HttpService.jsonp(
			address,
			{},
			function  (data) {
				$scope.detail = data;
				$scope.loading = false;
				$scope.$apply();
			})
	}])
})(angular);