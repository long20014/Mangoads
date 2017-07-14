var app = angular.module('myApp', []);
/*	this.myFunc = function () {
	    if ($scope.stat <=0)
		{
			$scope.showAddStat= false;
		}
		else
		{
			$scope.showAddStat = true;
		} 
	}
});*/
app.controller('myCtrl', function($scope) {
	$scope.stat = 10;
	$scope.strCount = 5;
	$scope.intCount = 5;	
	$scope.enemyHP = 100;
	$scope.myAttack = 10 + $scope.strCount;
	$scope.myDamage = $scope.myAttack + Math.floor((Math.random() * 3));
	$scope.showAddStat = true;
	$scope.showStrSub = true;
	$scope.showIntSub = true;
	$scope.showDamageDealed = false;
	$scope.showEnemyKilled = false;
	$scope.attackDisable = false;
	//str add	        
    $scope.strAdd = function(){
    	$scope.strCount++;
    	console.log($scope.myAttack);
    	$scope.stat--;
    	if ($scope.stat <= 0)
		{
			$scope.showAddStat = false;
		}		
		if ($scope.strCount > 0)
		{
			$scope.showStrSub = true;
		}           	
    }
    $scope.strSub = function(){
      	$scope.strCount--;
      	
      	$scope.stat++;
      	if ($scope.strCount <= 0)
		{
			$scope.showStrSub = false;
		}		
    }		        
    //int add        
    $scope.intAdd = function(){
    	$scope.intCount++;
    	$scope.stat--;
    	if ($scope.stat <=0)
		{
			$scope.showAddStat = false;
		}
		if ($scope.intCount > 0)
		{
			$scope.intStrSub = true;
		}     		  	
    }
    $scope.intSub = function(){
      	$scope.intCount--;
      	$scope.stat++;
      	if ($scope.intCount <= 0)
		{
			$scope.showIntSub = false;
		}
		else if ($scope.intCount > 0)
		{
			$scope.showIntSub = true;
		}  
	}
	//stat add
	$scope.statAdd = function(){
    	$scope.stat++;
    	if ($scope.stat > 0)
		{
			$scope.showAddStat = true;
		}   	           	
    }
    $scope.attack = function(){
    	$scope.enemyHP -= $scope.myDamage;
    	$scope.showDamageDealed = true;
    	if ($scope.enemyHP <=0)
    	{    		
    		$scope.enemyHP = 0
    		$scope.showEnemyKilled = true;
    		$scope.attackDisable = true;
    	}
    }
	
});

