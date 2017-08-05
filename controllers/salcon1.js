app.controller("salcon1",function($scope,salFact){
    $scope.compute=function(){
        var sal=$scope.sal;
        salfact.calculate(sal);
        $scope.hra=salFact.hra;
        $scope.da=salFact.da;
        $scope.ta=salFact.ta;
        $scope.pf=salFact.pf;
    }
});