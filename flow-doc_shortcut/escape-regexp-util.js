// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'escapeRegExp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 711152
         */
module.exports = function (module, exports, require) {
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var o = /[\\^$.*+?()[\]{}|]/g;
  var a = RegExp(o.source);
  exports.escapeRegExp = function (e) {
    if ((e = safeValueToStringUtil.safeToString(e)) && a.test(e)) {
      return e.replace(o, "\\$&");
    } else {
      return e;
    }
  };
}