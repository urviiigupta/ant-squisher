
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$timeout) {
    $scope.score=0;
    
    $scope.arrants=[];     
    
    $scope.addscore = function(objpass)
    {
    	$scope.score++;
        $scope.arrants.splice($scope.arrants.findIndex(a => a.IDD === objpass.IDD) , 1);

        
    }
    let stoptimer=false;
    $scope.changepos=function()
    {
        if(stoptimer==true)
        {
            return;
        }
        if($scope.arrants.length>100)
        {
           return; 

        }
    	for(let i=0;i<$scope.arrants.length;i++)
        {   
        		$scope.arrants[i].X=$scope.arrants[i].X+$scope.arrants[i].movx*$scope.arrants[i].directionx;
                $scope.arrants[i].Y=$scope.arrants[i].Y+$scope.arrants[i].movy*$scope.arrants[i].directiony;
                if($scope.arrants[i].X>800)
                {
                    $scope.arrants[i].directionx=-1;
                    $scope.arrants[i].X=800;

                }

                if($scope.arrants[i].X<50)
                {
                    $scope.arrants[i].directionx=1;
                    $scope.arrants[i].X=50;

                }

                if($scope.arrants[i].Y>600)
                {
                    $scope.arrants[i].directiony=-1;
                    $scope.arrants[i].Y=600;

                }

                if($scope.arrants[i].Y<50)
                {
                    $scope.arrants[i].directiony=1;
                    $scope.arrants[i].Y=50;

                }
        }
		$timeout($scope.changepos, 300);    
    }
    
     let id=1;
    $scope.spawn=function()
    {
        if($scope.arrants.length>100)
        {
            stoptimer=true;
            alert("GAME OVER YOU LOSTTT !!!");
            window.reload();

            

        }

        if (stoptimer==true)
        {
            return;
        }
        let obj={};
        obj.IDD=id++;
    obj.X=Math.floor(Math.random()*600);
    obj.Y=Math.floor(Math.random()*600);
    obj.directionx=1;
    obj.directiony=1;
    obj.movx=Math.floor(Math.random()*10)
    obj.movy=Math.floor(Math.random()*30)
    $scope.arrants.push(obj);
        $timeout($scope.spawn, 1000);  

    }

    $scope.newstart=function()
    {
        $scope.spawn();
        $scope.changepos();
    }
    
    
});



