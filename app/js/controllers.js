'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('mainCtrl', function ($scope) {
    $scope.todos = ["First Item", "Second Item", "Third Item"];
    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = "";
    }
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    }
  });
