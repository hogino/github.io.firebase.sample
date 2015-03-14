# AngularJS Inittiaze

# Include lib and plugin
window.app = angular.module('ngHogiProfile', [
  "ngCookies"
  "ngResource"
  "ngSanitize"
  "ui.router"
  "ngMessages"
  "angularUtils.directives.dirPagination"
#  "rx"
  "angulartics"
  'angulartics.google.analytics'
  "firebase"
  "ngMaterial"
])

# シングルページのルーティング表示をHTML５形式で表示
app.config [
  '$locationProvider'
  '$urlRouterProvider'
  (
    $locationProvider
    $urlRouterProvider
  ) ->
    $locationProvider.html5Mode(false)
    $urlRouterProvider.otherwise('/')
]

# 擬似ページ遷移の収集設定
app.config [
  '$analyticsProvider'
  ($analyticsProvider)->
    $analyticsProvider.virtualPageviews(true)
]

