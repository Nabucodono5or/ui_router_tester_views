function heroiFactory() {
  var herois = {
    Tank: ["Hammond", "Reinhart", "Winston", "Dva"],
    Suporte: ["Ana", "Zenyatta"],
    DPS: ["Mcree", "Genji"]
  };

  var service = {
    listaHerois: listaGHerois
  };

  return service;

  /////////////////

  function listaGHerois(role) {
    return herois[role];
  }
}

export default heroiFactory;


// var herois = {
//   Tank: ["Hammond", "Reinhart", "Winston", "Dva"],
//   Suporte: ["Ana", "Zenyatta", "Lucio", "Mercy", "Baptiste", "Bigitte"],
//   DPS: ["Mcree", "Genji", "Ashe", "Doomfist", "Hanzo", "Junkrat"]
// };
