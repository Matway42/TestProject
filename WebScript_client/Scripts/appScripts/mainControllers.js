define(["require", "exports", "UserModel"], function (require, exports, UserModel) {
    "use strict";
    var mainControllers = (function () {
        function mainControllers() {
            var app = angular.module("mainControllers", []);
            app.controller('MainController', function ($scope, $location, $http) {
                $scope.users = new Array();
                $http.get('http://localhost:51095/api/user')
                    .then(function (res) {
                    var users = res.data;
                    for (var i = 0; i < users.length; i++) {
                        var user = new UserModel();
                        user.name = users[i].Name;
                        user.lastName = users[i].LastName;
                        $scope.users.push(user);
                    }
                });
            });
        }
        return mainControllers;
    }());
    exports.mainControllers = mainControllers;
});
//# sourceMappingURL=mainControllers.js.map