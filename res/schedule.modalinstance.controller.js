var app = angular.module('VanApp');
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($uibModalInstance, clicked) {
  var $ctrl = this;
  $ctrl.items = clicked;
  $ctrl.cickedSked = clicked;
  console.log("clickedSked is " + clicked);

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



  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

