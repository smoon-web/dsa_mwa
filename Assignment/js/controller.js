/*	Author:	Sean Mooney
	Assignment:	WE41 Mobile	Web	Applications Assignemnt 2
	Date: 2017/05/29
	REF: https://angularjs.org/ | https://docs.angularjs.org/guide/controller | https://docs.angularjs.org/guide/scope | https://docs.angularjs.org/guide/directive | 
	https://docs.angularjs.org/guide/module | https://docs.angularjs.org/api/ng/directive/ngRepeat | https://docs.angularjs.org/api/ng/function/angular.module | 
	https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D | https://docs.angularjs.org/api/ng/directive/ngController | https://docs.angularjs.org/api/ng/directive/ngDblclick | 
	https://docs.angularjs.org/api/ng/directive/ngKeyup | https://docs.angularjs.org/api/ng/directive/ngKeydown | https://docs.angularjs.org/api/ng/directive/ngModel | 
	https://docs.angularjs.org/api/ng/type/angular.Module | https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md | 
	https://stackoverflow.com/questions/38580416/how-do-i-prevent-form-submission-in-angularjs-if-i-am-submitting-the-form-using | https://stackoverflow.com/questions/15444178/angular-js-having-an-empty-array | 
	https://stackoverflow.com/questions/33927802/populating-an-array-using-a-form-and-displaying-the-array-in-separate-views-angu | 
*/
var toDo = angular.module('myModule', []); //Create the module

toDo.controller('app', ['$scope', function($scope) { //Set up initial state of scope
	$scope.tasks = []; //Create empty array to hold the tasks
	$scope.searchEnter = function() { 				//User inputs task and when they hit Enter, task is added to the list.
		if(event.which == 13 && $scope.task !="") { // If nothing is entered into the box then no new task is created.
			$scope.addTask();
		};
	};
	// REF: https://www.youtube.com/watch?v=FSOiVprDdj0
	$scope.addTask = function() { 		//Create container for the tasks
		$scope.tasks.push({'taskTitle':$scope.task, 'status':'false'});	//Push the text from the input box ng-model="task" to the created array in the new container
		$scope.task = ''; //Clear the input box for the next task to be entered
		//console.log($scope.tasks);

	};
	
	//These additional controller functions allow the user to edit a task, or update it without having to add it again
	// REF: https://www.youtube.com/watch?v=szmQTNloBoc&list=PLYxzS__5yYQmX2bItSRCqwiQZn5dIL1gt&index=5
	$scope.contentEdit = function() {
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};
	$scope.enterAgain = function(msg) {
		if(event.which == 13 && msg !="") {
			$scope.contentEdit();
	};

};
	// clear all tasks and start a fresh list
	$scope.clearCompleted = function() {
		$scope.tasks = $scope.tasks.filter(function(item) {
			return !item.status
		})
	}
}]);