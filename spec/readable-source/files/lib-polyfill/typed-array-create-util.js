// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 254587
         */
module.exports = function (module, exports, require) {
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var o = require("typed-array-polyfill-util") /*id: 357134*/.getTypedArrayConstructor;
  module.exports = function (t, r) {
    return safeArrayCreateUtil(o(t), r);
  };
}