// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(409831) to 'array-prototype-iteration-helpers'
// - Resolved require(985761) to 'safe-array-method-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 4381
         */
module.exports = function (module, exports, require) {
  var e = require("array-prototype-iteration-helpers") /*id: 409831*/.forEach;
  var o = require("safe-array-method-check") /*id: 985761*/("forEach");
  module.exports = o ? [].forEach : function (t) {
    return e(this, t, arguments.length > 1 ? arguments[1] : undefined);
  };
}