/**
 * Created by chengchuan on 2016/07/15.
 */
// 实现可以点击换样式的列表
angular.module("note_app", [])
    .controller('MainCtrl', [function () {
        var self = this;
        self.notes = [
            {label: 'First'},
            {label: 'Second'},
            {label: 'Third'},
            {label: 'Last'}
        ];

        self.getClass = function (status) {
            return {
                done: status,
                pending: !status
            };
        };
        self.changeStyle = function (id) {
            for (var i in self.notes){
                if(self.notes[i].label == id){
                    self.notes[i].done = true;
                    continue;
                }
                self.notes[i].done = false;
            };
        };
        /*初始化数组状态*/
        self.initList = function () {
            for (var i in self.notes){
                if(i == 0){
                    self.notes[i].done = true;
                    continue;
                }
                self.notes[i].done = false;
            };
        };
        self.initList();
    }]);