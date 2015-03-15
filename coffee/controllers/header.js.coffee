app.controller 'HeaderCtrl', [
  '$scope'
  ($scope) ->
    $scope.data = {
      selectedIndex : 0,
      secondLocked : true,
      secondLabel : "Item Two"
    }
    $scope.next = ->
    $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2)

    $scope.previous = ->
    $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0)
]

