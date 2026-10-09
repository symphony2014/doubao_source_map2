// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Nw' to 'binarySearchLeft'
// - Renamed export 'ml' to 'binarySearchRight'
// - Renamed export 'ZP' to 'binarySearchRight_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 295350
         */
module.exports = function (module, exports, require) {
  var compareValuesUtil = require("compare-values-util") /*id: 378281*/;
  var binarySearchUtil = require("binary-search-util") /*id: 839305*/;
  var numberValidationUtils = require("number-validation-utils") /*id: 339317*/;
  let u = binarySearchUtil.createBinarySearch(compareValuesUtil.compareValues);
  let a = u.right;
  let s = u.left;
  binarySearchUtil.createBinarySearch(numberValidationUtils.coerceToNumber).center;
  exports.binarySearchRight_1 = a;
  require.d(exports, {
    binarySearchLeft: function () {
      return s;
    },
    binarySearchRight: function () {
      return a;
    }
  });
}