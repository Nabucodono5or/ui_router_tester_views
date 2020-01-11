function statusFactory() {
  var dva = {
    name: "D.Va",
    vida: 600,
    type: ["Projectile", "Hitscan"],
    damage: 50,
    healing: 0,
    ammo: "infinito",
    reloadTime: 0,
    headshot: 0
  };

  var reinhart = {
    name: "Reinhart",
    vida: 500,
    type: ["Melee"],
    damage: 75,
    healing: 0,
    ammo: "infinito",
    reloadTime: 0,
    headshot: 0
  };

  var hammond = {
    name: "Hammond",
    vida: 500,
    type: ["Hitscan"],
    damage: "2.5-5",
    healing: 0,
    ammo: 80,
    reloadTime: 2.1,
    headshot: "5-10"
  };

  var winston = {
    name: "Winston",
    vida: 500,
    type: ["Beam", "multi-target"],
    damage: 60,
    healing: 0,
    ammo: 100,
    reloadTime: 1.7,
    headshot: 0
  };

  var ana = {
    name: "Ana",
    vida: 200,
    type: ["Projectile", "Hitscan"],
    damage: 70,
    healing: 75,
    ammo: 14,
    reloadTime: 1.5,
    headshot: ''
  };

  var zenyatta = {
    name: "Zenyatta",
    vida: 200,
    type: ["Projectile"],
    damage: 48,
    healing: 30,
    ammo: 20,
    reloadTime: 1.5,
    headshot: 96
  };


  var  genji = {
    name: "Genji",
    vida: 200,
    type: ["Projectile"],
    damage: 28,
    healing: 0,
    ammo: 30,
    reloadTime: 1.5,
    headshot: 56
  };

  var mcree = {
    name: "Mcree",
    vida: 200,
    type: ["Hitscan"],
    damage: "35-70",
    healing: 0,
    ammo: 6,
    reloadTime: 1.5,
    headshot: "70-140"
  };

  var listaHerois = {
    Hammond: hammond,
    Reinhart: reinhart,
    Winston: winston,
    Dva: dva,
    Mcree: mcree,
    Genji: genji,
    Ana: ana,
    Zenyatta: zenyatta
  };

  var service = {
    heroiStatus: heroiStatus
  };

  return service;

  /////////////////

  function heroiStatus(heroiNome) {
    return listaHerois[heroiNome];
  }
}

export default statusFactory

// Tank: ["Hammond", "Reinhart", "Winston", "Dva"],
// Suporte: ["Ana", "Zenyatta"],
// DPS: ["Mcree", "Genji"]

