// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isValidLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 557018
         */
module.exports = function (module, exports, require) {
  var n = /^(?:0|[1-9]\d*)$/;
  exports.isValidLength = function (e, t) {
    var r = typeof e;
    return !!(t = t == null ? 9007199254740991 : t) && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
}