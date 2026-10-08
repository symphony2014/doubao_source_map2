// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'requireObjectCoercible'
// - Resolved require(770186) to 'require-object-coercible'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 957710
         */
module.exports = function (module, exports, require) {
  var requireObjectCoercible = require("require-object-coercible") /*id: 770186*/;
  var o = Object;
  module.exports = function (t) {
    return o(requireObjectCoercible(t));
  };
}