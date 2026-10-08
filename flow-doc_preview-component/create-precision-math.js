// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createPrecisionMath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 324938
         */
module.exports = function (module, exports, require) {
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var c = globalObjectDetector_1.globalObject.isFinite;
  var s = Math.min;
  exports.createPrecisionMath = function (e) {
    var n = Math[e];
    return function (e, i) {
      e = toNumberUtil_1.toNumber(e);
      if ((i = i == null ? 0 : s(toIntegerUtil_1.toInteger(i), 292)) && c(e)) {
        var r = (safeValueToStringUtil.safeToString(e) + "e").split("e");
        var u = n(r[0] + "e" + (+r[1] + i));
        return +((r = (safeValueToStringUtil.safeToString(u) + "e").split("e"))[0] + "e" + (+r[1] - i));
      }
      return n(e);
    };
  };
}