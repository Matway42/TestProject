define(["require", "exports", "./userModel"], function (require, exports, Model) {
    "use strict";
    var loginController = (function () {
        function loginController(services, serviceClass) {
            this.serviceFactory = serviceClass;
            this.serviceFactory.assign(services);
            this.users = new Array();
            this.getAll();
        }
        loginController.prototype.getAll = function () {
            var self = this;
            this.serviceFactory.getAll()
                .then(function (result) {
                var users = result.data;
                for (var i = 0; i < users.length; i++) {
                    var user = new Model();
                    user.name = users[i].Name;
                    user.lastName = users[i].LastName;
                    self.users.push(user);
                }
            });
        };
        return loginController;
    }());
    exports.loginController = loginController;
});
//# sourceMappingURL=loginController.js.map