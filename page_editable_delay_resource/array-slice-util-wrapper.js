// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'arrayLikeCopyHelper'
// - Resolved require(977130) to 'array-like-copy-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 432244
         */
module.exports = function (module, exports, require) {
  var arrayLikeCopyHelper = require("array-like-copy-helper") /*id: 977130*/;
  module.exports = function (e) {
    if (Array.isArray(e)) {
      return arrayLikeCopyHelper(e);
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}