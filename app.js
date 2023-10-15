(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function (item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;

        boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: 'Apples', quantity: 5 },
            { name: 'Bananas', quantity: 10 },
            { name: 'Milk', quantity: 2 },
            { name: 'Bread', quantity: 1 },
            { name: 'Eggs', quantity: 12 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (item) {
            var index = toBuyItems.indexOf(item);
            if (index !== -1) {
                toBuyItems.splice(index, 1);
                boughtItems.push(item);
            }
        };
    }
})();
