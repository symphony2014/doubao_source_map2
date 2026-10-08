// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Resolved require(811572) to 'safe-array-method-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 933789
         */
module.exports = function (module, exports, require) {
  var Q = require("array-iteration-polyfill") /*id: 343120*/.forEach;
  var l = require("safe-array-method-check_1") /*id: 811572*/("forEach");
  module.exports = l ? [].forEach : function (U) {
    return Q(this, U, arguments.length > 1 ? arguments[1] : undefined);
  };
}