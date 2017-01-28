"use strict";
import serviceModule = require("serviceHandler");
import Model = require("./userModel");

export class userController {
    serviceFactory: serviceModule.serviceHandler;
    users: Array<Model>;

    constructor(services: any, serviceClass: serviceModule.serviceHandler) {
        this.serviceFactory = serviceClass;
        this.serviceFactory.assign(services);
        this.users = new Array<Model>();
        this.getAll();

    }

    private getAll() {
        var self = this;
        this.serviceFactory.getAll()
            .then(result => {
                var users = result.data;
                for (var i = 0; i < users.length; i++) {
                    var user = new Model();
                    user.name = users[i].Name;
                    user.lastName = users[i].LastName;
                    self.users.push(user);
                }
            });
    }
}