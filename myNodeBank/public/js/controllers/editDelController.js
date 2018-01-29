angular.module('bankApp')
.controller('edit_delCtrl', function ($scope, db, $http, $location) {

  $scope.accounts = [];
  db.getAccounts().then(function (res) {
    $scope.accounts = res.data
  })

  $scope.del = function (id) {

      db.delAccounts(id).then(function (res) {
        $location.path('/editdel')
        
          $scope.accounts = res.data

    }, function (err) {
      console.log("err");
    })
  };

  $scope.edit = function (id) {
    let obj  = {
    idAcc:id
    }
    db.sendOne(obj).then(function (res) {
      console.log(res.data, res.status);

      //$location.path("/editForm")
    })




  }




})
