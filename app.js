/*
* @Author: ASD
* @Date:   2016-10-06 10:36:48
* @Last Modified by:   ASD
* @Last Modified time: 2016-10-07 22:20:01
*/

'use strict';
(function  (angular) {
	angular.module('mainApp',[
		'ngRoute',
		'movieList.comming_soon',
		'movieList.in_theaters',
		'CNMovie',
		]).config(['$routeProvider',function($routeProvider) {
			$routeProvider.otherwise(
				{redirectTo:'/in_theaters/1'}
				);	
		}]).controller('active', [
		'$scope',
		'$location', function($scope,$location){
			$scope.$location = $location;
			$scope.$watch('$location.path()',function  (now) {
				if(now.startsWith('/in_theaters')){
					$scope.active = 'in_theaters';
				}else if(now.startsWith('/coming_soon')){
					$scope.active = 'coming_soon';
				}else if (now.startsWith('/top250')) {
					$scope.active = 'top250';
				}
			});
		}]).controller('searchController', [
		'$scope',
		'$route', function($scope,$route){
			$scope.input = '';
			
			$scope.search = function  () {
				$route.updateParams({'type':'search','q':$scope.input});
				$scope.input = '';
			}
		}]).controller('activeController', [
	'$scope',
	'$location',
	 function($scope,$location){
		$scope.$location = $location;
		$scope.$watch('$location.path()',function  (now) {
			$scope.now = now;
		});
	}])
})(angular);