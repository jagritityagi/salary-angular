app.controller("salcont3",function($scope,salFact){
    $scope.taxation=function(){
        $scope.tax=salFact.tax;
        $scope.ns=salFact.ns;
    }
});