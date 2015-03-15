(function() {
  window.app = angular.module('ngHogiProfile', ["ngCookies", "ngResource", "ngSanitize", "ui.router", "ngMessages", "angularUtils.directives.dirPagination", "angulartics", 'angulartics.google.analytics', "firebase", "ngMaterial"]);

  app.config([
    '$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(false);
      return $urlRouterProvider.otherwise('/');
    }
  ]);

  app.config([
    '$analyticsProvider', function($analyticsProvider) {
      return $analyticsProvider.virtualPageviews(true);
    }
  ]);

}).call(this);

(function() {


}).call(this);

(function() {
  app.controller('HeaderCtrl', [
    '$scope', function($scope) {
      $scope.data = {
        selectedIndex: 0,
        secondLocked: true,
        secondLabel: "Item Two"
      };
      $scope.next = function() {};
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
      $scope.previous = function() {};
      return $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    }
  ]);

}).call(this);

(function() {
  app.controller("SampleCtrl", [
    '$scope', '$firebaseArray', '$state', function($scope, $firebaseArray, $state) {
      var ref;
      ref = new Firebase("https://dev-hogino-sample.firebaseio.com/messages");
      $scope.messages = $firebaseArray(ref);
      $scope.addMessage = function() {
        return $scope.messages.$add({
          text: $scope.newMessageText
        });
      };
      return $scope.authToken = function() {
        return ref.authWithCustomToken($scope.token, function(error, authData) {
          if (error) {
            return console.log("Login Failed!", error);
          } else {
            return console.log("Login Succeeded!", authData);
          }
        });
      };
    }
  ]);

}).call(this);

(function() {
  app.config([
    "$stateProvider", function($stateProvider) {
      return $stateProvider.state("app", {
        url: "/",
        views: {
          "": {
            templateUrl: "views/layouts/default.html"
          },
          "header@app": {
            templateUrl: "views/layouts/header.html"
          },
          "footer@app": {
            templateUrl: "views/layouts/footer.html"
          },
          "content@app": {
            templateUrl: "home.html"
          }
        }
      });
    }
  ]);

}).call(this);

(function() {
  app.config([
    "$stateProvider", function($stateProvider) {
      return $stateProvider.state("app.message", {
        url: "^/message",
        views: {
          "content@app": {
            templateUrl: "views/messages/index.html"
          }
        }
      });
    }
  ]);

}).call(this);
