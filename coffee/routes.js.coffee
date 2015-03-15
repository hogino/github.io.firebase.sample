
app.config [
  "$stateProvider"
  (
    $stateProvider
  ) ->
    $stateProvider
      .state("app",
        url: "/"
        views:
          "":
            templateUrl: "views/layouts/default.html"
          "header@app":
            templateUrl: "views/layouts/header.html"
          "footer@app":
            templateUrl: "views/layouts/footer.html"
          "content@app":
            templateUrl: "home.html"
      )
]