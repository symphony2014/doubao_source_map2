// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'o' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'i' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'u' to 'definePropertyUtil'
// - Resolved require(469792) to 'define-property-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 784907
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var definePropertyUtil = require("define-property-util") /*id: 469792*/;
  module.exports = function () {
    var t = globalNamespaceUtil("Symbol");
    var r = t && t.prototype;
    var n = r && r.valueOf;
    var c = symbolWellKnownRegistry("toPrimitive");
    if (r && !r[c]) {
      definePropertyUtil(r, c, function (t) {
        return functionCallBindHelper(n, this);
      }, {
        arity: 1
      });
    }
  };
}