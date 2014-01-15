'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('mainCtrl', function ($scope, $http) {
    var url = '/rest/todo';
    
    $http.get(url)
    .success(function(data, status){
      $scope.todos = data;
    })
    .error(function(data, status){
      console.error('Error occured while retrieving todos list: '+data);
    });

    $scope.addTodo = function () {
    	$scope.todos.push($scope.todo);
    	$scope.todo = "";
    }
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    }
  });
