requirejs.config({
    baseUrl: "Scripts/appScripts",
    paths: {
        "jquery": "../jquery-2.2.0.min",
        "bootstrap": "../bootstrap",
        "app": "./mainControllers",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "ngSanitize": "../angular-sanitize",
        "mainCtrls": "./mainControllers",
        "loginCtrl": "./loginController",
        "routerCfg": "./configRouter",
        "serviceFactory": "./serviceHandler",
        "productContoller": "./productContoller",
        "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls",
        "UserModel": "UserModel"
    },
    shim: {
        "ngRoute": ['angular'],
        "ngSanitize": ['angular'],
        "ui.bootstrap": ['angular'],
        "bootstrap": ['jquery']
    }
});
requirejs(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap", "mainControllers"], function (app) {
    var mainControllers = new app.mainControllers();
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['mainControllers']);
    });
});
//# sourceMappingURL=main.js.map