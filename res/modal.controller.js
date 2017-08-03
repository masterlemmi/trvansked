var app = angular.module('VanApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3', "tae", ""];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (sked, size, parentSelector) {
    console.log("showmodal called on "  + sked.van_id  + "  " + sked.time);
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        clicked: function () {
          return sked;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

 


$ctrl.list =  [
  {
    "id": 1,
    "time": "12:00 AM",
    "van_id": 11,
    "route": "SHELL-MH",
    "location": "3 wsq",
    "direction": "IN"
  },
  {
    "id": 2,
    "time": "12:05 AM",
    "van_id": 7,
    "route": "PROP-MH",
    "location": "20 bldg",
    "direction": "IN"
  },
  {
    "id": 3,
    "time": "12:10 AM",
    "van_id": 12,
    "route": "MH-MM",
    "location": "20 bldg",
    "direction": "OUT"
  },
  {
    "id": 4,
    "time": "12:15 AM",
    "van_id": 10,
    "route": "MH-SHELL-SM",
    "location": "20 bldg",
    "direction": "OUT"
  },
  {
    "id": 5,
    "time": "12:15 AM",
    "van_id": 9,
    "route": "SHELL-MH",
    "location": "8 bldg",
    "direction": "IN"
  },
  {
    "id": 6,
    "time": "12:15 AM",
    "van_id": 4,
    "route": "G4-MH",
    "location": "20 bldg",
    "direction": "IN"
  }];




});

