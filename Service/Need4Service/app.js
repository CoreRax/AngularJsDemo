/**
 * Created by chengchuan on 2016/07/19.
 */
angular.module('notesApp', [])
    .controller('MainCtrl', [function () {
        var self = this;
        self.tab = 'first';
        self.open = function (tab) {
            self.tab = tab;
        };
    }])
    .controller('SubCtrl',[function () {
        var self = this;
        self.list = [
            {id:1, label: 'item 0'},
            {id:2, label: 'item 1'}
        ];
        self.add = function () {
            self.list.push({
                id: self.list.length + 1,
                label: 'item ' + self.list.length
            });
        };
    }]);
