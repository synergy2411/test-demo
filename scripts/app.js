// npm init
// npm i karma-cli -g
// npm i angular@1 angular-mocks --save 
// npm i karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
// karma init
// karma start

(function(){
    angular.module("TestModule", [])
        .controller("TestController", function(){
            this.items = [
                {id : 1, label : "Some Work", done : true},
                {id : 2, label : "New Work", done : false}
            ];
            this.getDone = function(item){
                return {
                    finished : item.done,
                    unfinished : !item.done
                }
            }
        })
})();
