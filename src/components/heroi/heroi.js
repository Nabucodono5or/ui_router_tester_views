import angular from "angular";
import heroiComponent from "./heroi.component";

let heroiModule = angular
  .module("heroiModule", [])
  .component("heroi", heroiComponent).name;

export default heroiModule;
