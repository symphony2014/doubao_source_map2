// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 92553
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var o = require("object-state-manager") /*id: 488732*/.get;
  module.exports = function (t) {
    if (!isObjectOrFunctionCheck(t)) {
      return false;
    }
    var r = o(t);
    return !!r && r.type === "RawJSON";
  };
}