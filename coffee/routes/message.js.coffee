
app.config [
  "$stateProvider"
  (
    $stateProvider
  ) ->
    $stateProvider
    .state("app.message",
      url: "^/message"
      views:
        "content@app":
          templateUrl: "views/messages/index.html"
    )
]