import angular from "angular";
import rolesComponent from "./roles.component";

let rolesModule = angular
  .module("rolesModule", [])
  .component("roles", rolesComponent).name;

export default rolesModule;
