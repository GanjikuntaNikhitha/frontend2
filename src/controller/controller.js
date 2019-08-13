var mainApp = angular.module("TableApp", []);

mainApp.controller('TableController', function ($scope) {
   $scope.Students = [
      { name: 'nikhita', email: 'nikhita@stucred.com', number: '8639378314', address: 'stucred,chennai..' }


   ]
   // $scope.myCountry = 'Welcome to Tutlane.com';
   $scope.countnum = 0;
   $scope.errorName = "";
   $scope.errorName1 = "";
   $scope.errorName2 = "";

   $scope.errorCheck = function (type, value) {


      if (type == 'name' && value.length == 0) {
         $scope.errorName = "Name is required !"
      } else if (type == 'name' && value.length < 5) {
         $scope.errorName = "Name is too short !"
      } else if (type == 'name' && value.length > 10) {
         $scope.errorName = "Name is too long !";
      } else if (type == 'name' && value.match(/\d+/g)) {
         $scope.errorName = "Invalid Name !";
      } else if(type == 'name'){
         $scope.errorName = undefined;
      }

      if (type == 'email' && value.length == 0) {
         $scope.errorName1 = "email is required !"
      } else if (type == 'email' && !value.match(/^([a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?)$/)) {
         $scope.errorName1 = "Invalid email !";
      } else if(type == 'email'){
         $scope.errorName1 = undefined;
      }

      if (type == 'phone' && value.length == 0) {
         $scope.errorName2 = "Phone Number is required !"
      } else if (type == 'phone' && value.length < 10) {
         $scope.errorName2 = "Phone Number is too short !"
      } else if (type == 'phone' && value.length > 10) {
         $scope.errorName2 = "Phone Number is too long !";
      } else if (type == 'phone' && !value.match(/^[0-9]*$/)) {
         $scope.errorName2 = "Invalid Phone Number !";
      } else if(type == 'phone'){
         $scope.errorName2 = undefined;
      }
   }


   
$scope.add = function (name, email, number, address) {
  


      console.log( $scope.Students );
      var nflag, eflag;
      for(var i = 0; i<$scope.Students.length; i++)
{
 if($scope.Students[i].name === name) {
    nflag =0;
    continue;
 }
else {
   nflag = 1;
}
if($scope.Students[i].email === email) {
   eflag =0;
   continue;
}
else {
  eflag = 1;
}


   }



if(nflag == 1 && eflag == 1) {
   $scope.Students.push({ name: name, email: email, number: number })
         $scope.countnum++;
         console.log($scope.Students);
}

 if(nflag == 0) {
   $scope.message  = "name is already exists"
 }
  else  
  {
     if(eflag == 0){
      $scope.message = "email is already exists"
   }
  else {
   if(nflag == 0 && eflag == 0){
      $scope.message = "email and already exists"
   }
}
  }
}
   $scope.removeEntry = function(index){

      console.log(index)
      $scope.Students.splice(index, 1);
      $scope.countnum--;

   }
})





