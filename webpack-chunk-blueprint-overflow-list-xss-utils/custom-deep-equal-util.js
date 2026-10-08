// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'customDeepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 815226
         */
module.exports = function (module, exports, require) {
  var deepEqualCore = require("deep-equal-core") /*id: 489806*/;
  exports.customDeepEqual = function (e, t, n) {
    var i = (n = typeof n == "function" ? n : undefined) ? n(e, t) : undefined;
    if (i === undefined) {
      return deepEqualCore.isEqual(e, t, undefined, n);
    } else {
      return !!i;
    }
  };
}