app.controller('mainCtrl', function ($scope) {

})


app.controller('accCtrl', function ($scope, db) {
  $scope.accounts = [];

  db.getAccounts().then(function (res) {
    $scope.accounts = res.data
  })
});


app.controller('formCtrl', function ($scope, $http,$location, db) {


$scope.sendForm = function () {

  let obj = {
    acc: $scope.newName,
    dep: $scope.newDep,
    card: $scope.newCard
  }

  $http({
    method:'POST',
    url:'/save',
    data: obj
  }).then(function (res) {
    console.log(res.data, res.status);
    $location.path("/");
  $scope.accounts = res.data
  }, function (err) {
    console.log("err");
  })
}


})
