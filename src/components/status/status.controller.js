let statusController = function StatusController($stateParams, statusService) {
  var vm = this;
  vm.title = $stateParams.heroi;
  vm.heroi = statusService.heroiStatus(vm.title);
}

statusController.$inject = ["$stateParams", "statusService"];

export default statusController;
