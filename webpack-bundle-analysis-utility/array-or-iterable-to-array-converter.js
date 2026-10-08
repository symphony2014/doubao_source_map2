// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arrayIdentityHelper'
// - Resolved require(124018) to 'array-identity-helper'
// - Renamed variable 'o' to 'iterableToArrayUtil'
// - Resolved require(264476) to 'iterable-to-array-util'
// - Renamed variable 'i' to 'arrayLikeSliceUtil'
// - Resolved require(336974) to 'array-like-slice-util'
// - Renamed variable 'a' to 'nonIterableDestructureHelper'
// - Resolved require(826221) to 'non-iterable-destructure-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 746834
         */
module.exports = function (module, exports, require) {
  var arrayIdentityHelper = require("array-identity-helper") /*id: 124018*/;
  var iterableToArrayUtil = require("iterable-to-array-util") /*id: 264476*/;
  var arrayLikeSliceUtil = require("array-like-slice-util") /*id: 336974*/;
  var nonIterableDestructureHelper = require("non-iterable-destructure-helper") /*id: 826221*/;
  module.exports = function (e) {
    return arrayIdentityHelper(e) || iterableToArrayUtil(e) || arrayLikeSliceUtil(e) || nonIterableDestructureHelper();
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}