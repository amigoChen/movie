/*
* @Author: ASD
* @Date:   2016-10-07 21:49:28
* @Last Modified by:   ASD
* @Last Modified time: 2016-10-07 22:26:36
*/

'use strict';
(function  (angular) {
	angular.module('CNMovie',[
		'ngRoute',
		'moviecat.services.http'
		])
	.config(['$routeProvider',
		function($routeProvider) {
		$routeProvider.when('/:city',{
			templateUrl:'movieBoxOffice/view.html',
			controller:'CNController'
		})
	}]).controller('CNController', [
	'$scope',
	'HttpService',
	'$routeParams',
	 function($scope,HttpService,$routeParams){
	 	$scope.loading = true;
		HttpService.jsonp(
			'http://v.juhe.cn/boxoffice/rank.php?key=21ead37d90739932f27edd4b492ae788',
			{'area':$routeParams.city},
			function  (data) {
				$scope.data = data;
				$scope.result = data.result;
				$scope.loading = false;
				$scope.$apply();
			}
			);
	}])
})(angular);