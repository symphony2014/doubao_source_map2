// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'cloneBuffer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 456819
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  var i = typeof exports == "object" && exports && !exports.nodeType && exports;
  var o = i && typeof module == "object" && module && !module.nodeType && module;
  var a = o && o.exports === i ? globalObjectDetector_1.globalObject.Buffer : undefined;
  var s = a ? a.allocUnsafe : undefined;
  exports.cloneBuffer = function (e, t) {
    if (t) {
      return e.slice();
    }
    var n = e.length;
    var r = s ? s(n) : new e.constructor(n);
    e.copy(r);
    return r;
  };
}