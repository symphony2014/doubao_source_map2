// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arraySliceUtilWrapper'
// - Resolved require(432244) to 'array-slice-util-wrapper'
// - Renamed variable 'r' to 'iterableToArrayUtil'
// - Resolved require(264476) to 'iterable-to-array-util'
// - Renamed variable 'o' to 'arrayLikeSliceUtil'
// - Resolved require(336974) to 'array-like-slice-util'
// - Renamed variable 's' to 'nonIterableSpreadError'
// - Resolved require(945189) to 'non-iterable-spread-error'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 350982
         */
module.exports = function (module, exports, require) {
  var arraySliceUtilWrapper = require("array-slice-util-wrapper") /*id: 432244*/;
  var iterableToArrayUtil = require("iterable-to-array-util") /*id: 264476*/;
  var arrayLikeSliceUtil = require("array-like-slice-util") /*id: 336974*/;
  var nonIterableSpreadError = require("non-iterable-spread-error") /*id: 945189*/;
  module.exports = function (e) {
    return arraySliceUtilWrapper(e) || iterableToArrayUtil(e) || arrayLikeSliceUtil(e) || nonIterableSpreadError();
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}