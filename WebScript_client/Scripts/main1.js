requirejs.config({
    baseUrl: "Scripts/Test",
    paths: {
        "jquery": "../jquery-3.1.1.min",
        "bootstrap": "../bootstrap",
        "app": "./shareApp",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "ngSanitize": "../angular-sanitize",
        "mainCtrls": "./mainControllers",
        "loginCtrl": "./loginController",
        "routerCfg": "./configRouter",
        "serviceFactory": "./serviceHandler",
        "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls"
    },
    shim: {
        "ngRoute": ['angular'],
        "ngSanitize": ['angular'],
        "ui.bootstrap": ['angular'],
        "bootstrap": ['jquery']
    }
});
requirejs(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap"], function (app) {
    var shareApp = new app.shareApp();
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['shareApp']);
    });
});
//# sourceMappingURL=main1.js.map