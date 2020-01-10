function appConfig($urlRouterProvider, $stateProvider) {
  let otherwise = {
    name: "home",
    url: "/",
    component: "home"
  };

  let heroi = {
    name: "heroi",
    parent: otherwise,
    url: "/heroi?role",
    component: "heroi"
  };

  let status = {
    name: "status",
    parent: heroi,
    url: "/status",
    component: "status"
  };

  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state(heroi)
    .state(status)
    .state(otherwise);
}

export default appConfig;
