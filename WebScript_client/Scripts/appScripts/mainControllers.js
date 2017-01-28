define(["require", "exports", "serviceHandler", "userController", "configRouter"], function (require, exports, serviceModule, userController, routerModule) {
    "use strict";
    var mainControllers = (function () {
        function mainControllers() {
            var app = angular.module("mainControllers", []);
            var router = new routerModule.configRouter();
            app.config(router.configure);
            var serviceHandler = new serviceModule.serviceHandler();
            var serviceMod = app.factory("services", ["$http", serviceModule.exportService]);
            app.controller('MainController', function (services) { return new userController.userController(services, serviceHandler); });
        }
        return mainControllers;
    }());
    exports.mainControllers = mainControllers;
});
//# sourceMappingURL=mainControllers.js.map