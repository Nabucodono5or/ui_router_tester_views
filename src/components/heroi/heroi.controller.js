let heroiController = function HeroiController($stateParams, heroiService) {
  var vm = this;
  vm.title = $stateParams.role;
  vm.herois = heroiService.listaHerois(vm.title);
};

heroiController.$inject = ["$stateParams", "heroiService"];

export default heroiController;
