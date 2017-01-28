"use strict";
import UserModel = require("UserModel");

export class mainControllers {
    constructor() {
        var app = angular.module("mainControllers", []);
        app.controller('MainController', ($scope, $location, $http) => {
            $scope.users = new Array<UserModel>();
            $http.get('http://localhost:51095/api/user')
                .then(res => {
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


}

