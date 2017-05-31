var toDo = angular.module('myApp', []); //Create the module

toDo.controller('app', function($scope) { //Set up initial state of scope
	$scope.tasks = []; //Create empty array to hold the tasks
	$scope.searchEnter = function() { 				//User inputs task and when they hit Enter, task 
		if(event.which == 13 && $scope.task !="") { //is added to the list. Nothing is added if input field is empty
			$scope.addTask();
		};
	};
	$scope.addTask = function() { 		//Create container for the tasks
		$scope.tasks.push({'taskMessage':$scope.task, 'status':'fasle'});	//Push the text from the input box "task" to the created array in the new container
		$scope.task = ''; //Clear the input box for the next task to be entered
		console.log($scope.tasks);

	};
	$scope.contentEdit = function() {
		console.log('something');
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};
	$scope.enterAgain = function(msg) {
		if(event.which == 13 && msg !="") { //is added to the list. Nothing is added if input field is empty
			$scope.contentEdit();
	};
};
});