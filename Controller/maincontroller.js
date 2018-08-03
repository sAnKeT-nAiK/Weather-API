var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope, $http){

	$scope.data=function(pin){
		
        		  var url = "http://api.openweathermap.org/data/2.5/weather?q="+pin+"&appid=11348d335657efe3f9381befd35e09e6";
                $http.get(url)
                    .then(function(data, status, headers, config) {
                        $scope.report = data;
                        // $scope.statcode = status;
                    });

                }

});


