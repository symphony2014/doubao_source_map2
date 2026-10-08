// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isBufferCheck'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 375215
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  var alwaysFalseUtil = require("always-false-util") /*id: 843723*/;
  var o = typeof exports == "object" && exports && !exports.nodeType && exports;
  var a = o && typeof module == "object" && module && !module.nodeType && module;
  var s = a && a.exports === o ? globalObjectDetector_1.globalObject.Buffer : undefined;
  var u = (s ? s.isBuffer : undefined) || alwaysFalseUtil.alwaysFalse;
  exports.isBufferCheck = u;
}