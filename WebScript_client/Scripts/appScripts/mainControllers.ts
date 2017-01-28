"use strict";
import ng = angular;
import serviceModule = require("serviceHandler");
import userController = require("userController");
import routerModule = require("configRouter");

export class mainControllers {
    constructor() {
        var app = angular.module("mainControllers", []);
        var router = new routerModule.configRouter();
        app.config(router.configure);

        var serviceHandler = new serviceModule.serviceHandler();
        var serviceMod = app.factory("services", ["$http", serviceModule.exportService]);
        app.controller('MainController', (services) => new userController.userController(services, serviceHandler));
    }
}