// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'nodeUtilTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 500199
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector = require("global-object-detector") /*id: 138856*/;
  var i = typeof exports == "object" && exports && !exports.nodeType && exports;
  var o = i && typeof module == "object" && module && !module.nodeType && module;
  var a = o && o.exports === i && globalObjectDetector.globalObject.process;
  var s = function () {
    try {
      var e = o && o.require && o.require("util").types;
      if (e) {
        return e;
      }
      return a && a.binding && a.binding("util");
    } catch (e) {}
  }();
  exports.nodeUtilTypes = s;
}