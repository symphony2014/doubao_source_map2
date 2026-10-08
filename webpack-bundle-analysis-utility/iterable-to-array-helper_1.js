// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayIdentityHelper'
// - Resolved require(124018) to 'array-identity-helper'
// - Renamed variable 'r' to 'iterableToArrayLimit'
// - Resolved require(218283) to 'iterable-to-array-limit'
// - Renamed variable 'o' to 'arrayLikeSliceUtil'
// - Resolved require(336974) to 'array-like-slice-util'
// - Renamed variable 's' to 'nonIterableDestructureHelper'
// - Resolved require(826221) to 'non-iterable-destructure-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 975605
         */
module.exports = function (module, exports, require) {
  var arrayIdentityHelper = require("array-identity-helper") /*id: 124018*/;
  var iterableToArrayLimit = require("iterable-to-array-limit") /*id: 218283*/;
  var arrayLikeSliceUtil = require("array-like-slice-util") /*id: 336974*/;
  var nonIterableDestructureHelper = require("non-iterable-destructure-helper") /*id: 826221*/;
  module.exports = function (e, t) {
    return arrayIdentityHelper(e) || iterableToArrayLimit(e, t) || arrayLikeSliceUtil(e, t) || nonIterableDestructureHelper();
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}