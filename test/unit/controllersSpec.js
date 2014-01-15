'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

	var httpBackend, scope;

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("GET", "/rest/todo").respond([{}, {}, {}]);
            $controller('mainCtrl', {
                $scope: scope,
                $http: $http
            });
        }));
 
        it("should have 3 todos", function () {
            httpBackend.flush();
            expect(scope.todos.length).toBe(3);
        });

  it('should ....', inject(function() {
    //spec body
  }));

  it('should ....', inject(function() {
    //spec body
  }));
});
