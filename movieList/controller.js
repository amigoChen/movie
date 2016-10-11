/*
 * @Author: ASD
 * @Date:   2016-10-06 10:38:20
 * @Last Modified by:   ASD
 * @Last Modified time: 2016-10-07 22:08:14
 */

'use strict';
	(function(angular) {
		angular.module('movieList.in_theaters', [
			'ngRoute',
			'moviecat.services.http'
			])
			.config([
				'$routeProvider', function($routeProvider) {
				$routeProvider.when('/:type/:page', {
					templateUrl: 'movieList/view.html',
					controller: 'inTheatersController'
				});
			}])
			.controller('inTheatersController', [
				'$scope',
				'HttpService',
				'$routeParams',
				'$route',
				function($scope,HttpService,$routeParams,$route) {
					$scope.subjects = [];
					var count = 5;
					var page = parseInt($routeParams.page);
					var start = (page-1)*count;
					$scope.currentPage = page;
					$scope.loading = true;

					HttpService.jsonp(
						'https://api.douban.com//v2/movie/'+$routeParams.type,
						{'start':start,'count':count,'q':$routeParams.q},
						function  (data) {
						
						$scope.data = data;
						$scope.subjects = data.subjects;
						$scope.allPage = Math.ceil($scope.data.total/count);
						$scope.loading = false;
						$scope.$apply();
						});

					$scope.turnPage = function  (page) {
						if(page>=1 && page <= $scope.allPage){
							$route.updateParams({page:page});
						}
        			}
				}
			])
	})(angular);