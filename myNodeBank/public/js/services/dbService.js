app
.service('db', function ($http) {
   // constructor f
  this.getAccounts = function () {
    return $http({
      method:'GET',
      url:'/getData'
    })
  }



  this.delAccounts = function (id) {

    return $http({
      method:'POST',
      url: '/del',
      data:{id:id}
    })
  }

  this.sendOne = function (obj) {

    return $http({
      model:'POST',
      url:'/getOne',
      data:obj

    })
  }



})
