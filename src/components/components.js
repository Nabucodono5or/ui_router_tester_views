import angular from "angular";
import homeModule from './home/home';

let componentsModule = angular.module("components", [homeModule]).name;

export default componentsModule