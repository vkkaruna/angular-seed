'use strict';
 
angular.module('e2e-mocks', ['ngMockE2E'])
.run(function($httpBackend) {
    // Don't mock the html views
    $httpBackend.whenGET(/partials\/\w+.*/).passThrough();

    // Mock todo items for integration testing
    $httpBackend.whenGET("/rest/todo").respond(["First Item", "Second Item", "Third Item"]);

    // For everything else, don't mock
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
  });
 
angular.module('myApp').requires.push('e2e-mocks');