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

  var listaHerois = {
    Hammond: hammond,
    Reinhart: reinhart,
    Winston: winston,
    Dva: dva    
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

// Tank: ["Hammond", "Reinhart", "Winston", "Dva"],
// Suporte: ["Ana", "Zenyatta", "Lucio", "Mercy", "Baptiste", "Bigitte"],
// DPS: ["Mcree", "Genji", "Ashe", "Doomfist", "Hanzo", "Junkrat"]

// {
//     name: "Ana",
//     vida: 200,
//     type: ["Projectile", "Hitscan"],
//     damage: 70,
//     healing: 75,
//     ammo: 14,
//     reloadTime: 1.5,
//     headshot: ''
//   };
