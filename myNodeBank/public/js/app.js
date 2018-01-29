let app = angular.module('bankApp', [
  'ngRoute'
]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl:'pages/acc.html',
    controller:'accCtrl'
  })
  .when('/form', {
    templateUrl:'pages/form.html',
    controller: 'formCtrl'
  })
  .when('/editdel', {
    templateUrl: 'pages/edd_del.html',
    controller: 'edit_delCtrl'
  })
  .when('/editForm', {
    templateUrl: 'pages/editForm.html',
    controller:'edit_delCtrl'
  })
})
