// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(746834) to 'array-or-iterable-to-array-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 305660
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("array-or-iterable-to-array-converter") /*id: 746834*/);
  function i(e, t = typeof window != "undefined" ? window.location && window.location.search.substr(1) : "") {
    var r = {};
    if (t) {
      t.split("&").forEach(function (e) {
        if (e !== "") {
          var t = e.split("=");
          var n = o.default(t);
          var i = n[0];
          var a = n.slice(1);
          var s = decodeURIComponent(i);
          var u = decodeURIComponent(a.join("="));
          if (s.match(/\[\]$/)) {
            var c = s.replace(/\[\]$/, "");
            if (r[c] && r[c] instanceof Array) {
              r[c].push(u);
            } else {
              r[c] = [u];
            }
          } else {
            r[s] = u;
          }
        }
      });
    }
    if (e) {
      return r[e];
    } else {
      return r;
    }
  }
  i.default = i;
  exports.default = i;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}