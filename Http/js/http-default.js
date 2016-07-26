/**
 * Created by chengchuan on 2016/07/26.
 */
angular.module('notesApp', [])
.controller('LoginCtrl', ['$http', function ($http) {
    var self = this;
    self.user = {};
    self.message = 'Please login';
    self.login = function () {
        $http.post('/api//login', self.user).then(
            function (resp) {
            self.message = resp.data.msg;
        });
    };
}])

.config(['$httpProvider', function ($httpProvider) {
    //仿照jQuery风格POST数据
    $httpProvider.defaults.transformRequest.push(
        function (data) {
            var requestStr;
            if (data){
                data = JSON.parse(data);
                for (var key in data){
                    if (requestStr) {
                        requestStr += '&' + key + '=' + data[key];
                    } else {
                        requestStr = key + '=' + data[key];
                    }
                }
            }
            return requestStr;
        }
    );
    $httpProvider.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencode';
}]);