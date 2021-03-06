/*
* @Author: ASD
* @Date:   2016-10-06 16:18:21
* @Last Modified by:   ASD
* @Last Modified time: 2016-10-06 16:45:29
*/

'use strict';
(function(angular) {
 
  var http = angular.module('moviecat.services.http', []);
  http.service('HttpService', ['$window', '$document', function($window, $document) {
    
    this.jsonp = function(url, data, callback) {
      var fnSuffix = Math.random().toString().replace('.', '');
      var cbFuncName = 'my_json_cb_' + fnSuffix;

      $window[cbFuncName] = callback;
      var querystring = url.indexOf('?') == -1 ? '?' : '&';
      for (var key in data) {
        querystring += key + '=' + data[key] + '&';
      }
      querystring += 'callback=' + cbFuncName;
      var scriptElement = $document[0].createElement('script');
      scriptElement.src = url + querystring;
      $document[0].body.appendChild(scriptElement);
    };
  }]);
})(angular);