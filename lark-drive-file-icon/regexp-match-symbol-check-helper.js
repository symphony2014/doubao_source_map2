// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'a' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Resolved require(21227) to 'symbol-well-known-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 573964
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var c = require("symbol-well-known-registry") /*id: 21227*/("match");
  module.exports = function (e) {
    var t;
    return isObjectOrFunction_1(e) && ((t = e[c]) !== undefined ? !!t : getObjectTypeString(e) === "RegExp");
  };
}