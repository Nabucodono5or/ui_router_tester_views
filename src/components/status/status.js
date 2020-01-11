import angular from "angular";
import statusComponent from "./status.component";
import statusFactory from './status.service';

let statusModule = angular
  .module("statusModule", [])
  .factory("statusService", statusFactory)
  .component("status", statusComponent).name;

export default statusModule