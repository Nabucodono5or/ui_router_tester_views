import angular from "angular";
import homeComponent from "./home.component";

let homeModule = angular.module("homeModule", []).component(homeComponent).name;

export default homeModule