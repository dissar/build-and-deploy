(function(){
  'use strict';

  angular.module('calcApp').controller('calcCtrl', CalcController);

  CalcController.$inject = [];

  function CalcController(){
    var vm = this;

    vm.result = '';
    vm.calculate = calculate;
    vm.oper = 'plus';

    function calculate(firstArg, secondArg, operator){
      if(operator === 'plus'){
        var result = firstArg + secondArg;
        vm.result = result;
      //} else if (operator === 'minus'){
      //  var result = firstArg - secondArg;
      //  vm.result = result;
      } else if(operator === 'divide'){
        if (secondArg !== 0){
          var result = firstArg / secondArg;
          vm.result = result;
        } else {
          vm.result = 'You have reached singularity. Welcome.'
        }
      }
      else {
        vm.result = 'Operator not implemented';
      }
    }
  };
}());