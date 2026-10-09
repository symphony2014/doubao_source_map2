// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(350982) to 'iterable-to-array-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 490291
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("iterable-to-array-helper") /*id: 350982*/);
  function i(e) {
    var t;
    return (Array.isArray(e[0]) ? e[0] : e).reduce(function (e, t) {
      return [].concat(o.default(e), o.default((t + "").replace(/\[['"]/g, "[").replace(/\]|['"](?=\])/g, "").split(/[.[]/)));
    }, []);
  }
  function a(e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    var o = e;
    if (o && r.length !== 0) {
      (r = i(r)).every(function (e) {
        return (o = o[e]) != null;
      });
    }
    return o;
  }
  a.default = a;
  exports.default = a;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}