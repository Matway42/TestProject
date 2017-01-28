define(["require", "exports"], function (require, exports) {
    "use strict";
    var ProductContoller = (function () {
        function ProductContoller($http) {
            this.httpService = $http;
            //this.refreshProducts($scope);
            var controller = this;
            //$scope.addNewProduct = function () {
            //    debugger;
            //    var newProduct = new Product();
            //    newProduct.Name = $scope.newProductName;
            //    newProduct.Price = $scope.newProductPrice;
            //    controller.addProduct(newProduct, function () {
            //        controller.getAllProducts(function (data) {
            //            $scope.products = data;
            //        });
            //    });
            //};
            //$scope.deleteProduct = function (productId) {
            //    controller.deleteProduct(productId, function () {
            //        controller.getAllProducts(function (data) {
            //            $scope.products = data;
            //        });
            //    });
            //}
        }
        ProductContoller.prototype.getAllProducts = function (successCallback) {
            debugger;
            this.httpService.get('http://localhost:51095/api/users').success(function (data, status) {
                successCallback(data);
            });
        };
        ProductContoller.prototype.addProduct = function (product, successCallback) {
            debugger;
            this.httpService.post('/api/products', product).success(function () {
                successCallback();
            });
        };
        ProductContoller.prototype.deleteProduct = function (productId, successCallback) {
            this.httpService.delete('/api/products/' + productId).success(function () {
                successCallback();
            });
        };
        return ProductContoller;
    }());
    exports.ProductContoller = ProductContoller;
    var Product = (function () {
        function Product() {
        }
        return Product;
    }());
});
//# sourceMappingURL=productsController.js.map