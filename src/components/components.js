import angular from "angular";
import homeModule from "./home/home";
import rolesModule from "./roles/roles";
import heroiModule from "./heroi/heroi";

let componentsModule = angular.module("components", [
  homeModule,
  rolesModule,
  heroiModule
]).name;

export default componentsModule;
