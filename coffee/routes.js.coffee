
app.config [
  "$stateProvider"
  (
    $stateProvider
  ) ->
    baseUrl = 'http://localhost:63342/profile'
    $stateProvider
      .state("app",
        url: "/#"
#        template: '<div ui-view="header"></div>' + '<div ui-view="content"></div>' + '<div ui-view="footer"></div>'

        views:
          "":
#            templateUrl: "#{baseUrl}/views/layouts/default.html"
            template: '<div ui-view="header"></div>' + '<div ui-view="content"></div>' + '<div ui-view="footer"></div>'
#            controller: "MainCtrl"
          "header@app":
            template: '<header></header>'
          "footer@app":
            template: "../views/layouts/footer.html"
          "content@app":
            template: "test content"
      )
]