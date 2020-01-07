import angular from "angular";
import homeModule from "./home/home";
import rolesModule from './roles/roles';

let componentsModule = angular.module("components", [homeModule, rolesModule]).name;

export default componentsModule;
