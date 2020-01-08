function appConfig($urlRouterProvider, $stateProvider) {
  let otherwise = {
    name: "roles",
    url: "/",
  };

  let heroi = {
    name: "heroi",
    url: "/heroi",
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
