import angular from "angular";
import appComponent from "./app.component";
import componentsModule from "./components/components";
import appConfig from "./app.config";
import uiRouter from '@uirouter/angularjs';

angular
  .module("app", [componentsModule, uiRouter])
  .config(appConfig)
  .component("app", appComponent).name;
