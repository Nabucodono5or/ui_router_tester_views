import angular from "angular";
import heroiComponent from "./heroi.component";
import heroiFactory from './heroi.service';

let heroiModule = angular
  .module("heroiModule", [])
  .factory('heroiService', heroiFactory)
  .component("heroi", heroiComponent).name;

export default heroiModule;
