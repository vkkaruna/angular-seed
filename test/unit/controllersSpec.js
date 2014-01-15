'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  var httpBackend, scope;

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;

            // mock http get for todo items
            httpBackend.when("GET", "/rest/todo").respond(["one", "two", "three", "four"]);
            $controller('mainCtrl', {
                $scope: scope,
                $http: $http
            });
        }));
 
        it("should have 4 todos", function () {
            httpBackend.flush();
            expect(scope.todos.length).toBe(4);
        });

        it("should be able to add a new todo", function()
        {
        	httpBackend.flush();
        	scope.addTodo("five");
        	expect(scope.todos.length).toBe(5);
        });

        it("should be able to remove last todo", function()
        {
        	httpBackend.flush();
        	scope.removeTodo(scope.todos.length - 1);
        	expect(scope.todos.length).toBe(3);
        	expect(scope.todos[2]).toEqual('three');
        });

        it("should be able to remove to do in between", function()
        {
        	httpBackend.flush();
        	scope.removeTodo(1);
        	expect(scope.todos.length).toBe(3);
        	expect(scope.todos[1]).not.toEqual("two");
        });

        it("should not have more than four todos", function()
        {
        	httpBackend.flush();
        	expect(scope.todos[4]).toBeUndefined();
        });

        // In the interest of time i am stopping here.. can be added with some more unit tests.
});