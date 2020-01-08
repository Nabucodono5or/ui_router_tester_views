function StatusController() {
  var vm = this;
  vm.title = "Status componente";
  vm.heroi = {
    name: "Ana",
    vida: 200,
    type: ["Projectile", "Hitscan"],
    damage: 70,
    healing: 75,
    ammo: 14,
    reloadTime: 1.5,
    headshot: ''
  };
}

export default StatusController;
