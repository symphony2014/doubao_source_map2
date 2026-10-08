// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'sliceArrayIterable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 802480
         */
module.exports = function (module, exports, require) {
  var arraySliceUtil = require("array-slice-util") /*id: 132796*/;
  var iterableToArrayUtil_1 = require("iterable-to-array-util_1") /*id: 935740*/;
  var sliceIterableUtil = require("slice-iterable-util") /*id: 681006*/;
  function a(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return arraySliceUtil.sliceArray(e);
      }
    }(e) || iterableToArrayUtil_1.iterableToArray(e) || sliceIterableUtil.sliceIterable(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  require.d(exports, {
    sliceArrayIterable: function () {
      return a;
    }
  });
}