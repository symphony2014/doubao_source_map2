// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(350982) to 'iterable-to-array-helper'
// - Resolved require(203776) to 'element-visibility-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 923622
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.getFocusNodeList = function (e, t = false) {
    var n = r.default(e.querySelectorAll("*")).filter(function (e) {
      return s(e, t);
    });
    if (s(e, t)) {
      n.unshift(e);
    }
    return n;
  };
  var r = esModuleInteropHelper_2(require("iterable-to-array-helper") /*id: 350982*/);
  var o = esModuleInteropHelper_2(require("element-visibility-check") /*id: 203776*/);
  function s(e, t = false) {
    if (o.default(e)) {
      var n = e.nodeName.toLowerCase();
      var i = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || n === "a" && !!e.getAttribute("href");
      var r = e.getAttribute("tabindex");
      var s = Number(r);
      var a = null;
      if (r && !Number.isNaN(s)) {
        a = s;
      } else if (i && a === null) {
        a = 0;
      }
      if (i && e.disabled) {
        a = null;
      }
      return a !== null && (a >= 0 || t && a < 0);
    }
    return false;
  }
}