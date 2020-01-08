function appConfig($stateProvider) {
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

  $stateProvider.state(heroi).state(status);
}

export default appConfig;
