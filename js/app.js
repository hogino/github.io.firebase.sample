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
      var baseUrl;
      baseUrl = 'http://localhost:63342/profile';
      return $stateProvider.state("app", {
        url: "#",
        views: {
          "": {
            template: '<div ui-view="header"></div>' + '<div ui-view="content"></div>' + '<div ui-view="footer"></div>'
          },
          "header@app": {
            template: '<header></header>'
          },
          "footer@app": {
            template: "../views/layouts/footer.html"
          },
          "content@app": {
            template: "test content"
          }
        }
      });
    }
  ]);

}).call(this);
