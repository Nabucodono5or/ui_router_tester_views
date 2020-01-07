import angular from "angular";
import homeModule from "./home/home";
import rolesModule from "./roles/roles";
import heroiModule from "./heroi/heroi";
import statusModule from "./status/status";

let componentsModule = angular.module("components", [
  homeModule,
  rolesModule,
  heroiModule,
  statusModule
]).name;

export default componentsModule;
