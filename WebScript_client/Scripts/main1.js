require.config({
    baseUrl: "Scripts/appScripts",
    paths: {
        "angular": "../angular"
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});
require(['app'], function () {
    require(['serv', 'ctrl'], function () {
        angular.bootstrap(document, ['app']);
    });
});
//# sourceMappingURL=main1.js.map