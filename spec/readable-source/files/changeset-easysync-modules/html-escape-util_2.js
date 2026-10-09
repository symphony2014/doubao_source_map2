// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'escapeHtml'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 381642
         */
module.exports = function (module, exports, require) {
  var i = require("property-getter-factory") /*id: 10374*/.createPropGetter({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  });
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var o = /[&<>"']/g;
  var a = RegExp(o.source);
  function s(t) {
    if ((t = safeValueToStringUtil.safeToString(t)) && a.test(t)) {
      return t.replace(o, i);
    } else {
      return t;
    }
  }
  require.d(exports, {
    escapeHtml: function () {
      return s;
    }
  });
}