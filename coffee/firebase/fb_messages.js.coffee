
app.controller "SampleCtrl", [
  '$scope'
  '$firebaseArray'
  '$state'
  (
    $scope
    $firebaseArray
    $state
  ) ->
#    $state.go('app')
    ref = new Firebase("https://dev-hogino-sample.firebaseio.com/messages");
    # create a synchronized array
    $scope.messages = $firebaseArray(ref)
    # add new items to the array
    # the message is automatically added to Firebase!
    $scope.addMessage = () ->
      $scope.messages.$add({
          text: $scope.newMessageText
        })
      # click on `index.html` above to see $remove() and $save() in action

    $scope.authToken = ->
      ref.authWithCustomToken $scope.token, (error, authData) ->
        if (error)
          console.log("Login Failed!", error)
        else
          console.log("Login Succeeded!", authData)
]
#  # Create a callback which logs the current auth state
#  authDataCallback(authData) ->
#    if (authData)
#      console.log("User " + authData.uid + " is logged in with " + authData.provider)
#    else
#      console.log("User is logged out")
#
#  # Register the callback to be fired every time auth state changes
#  ref.onAuth(authDataCallback)

