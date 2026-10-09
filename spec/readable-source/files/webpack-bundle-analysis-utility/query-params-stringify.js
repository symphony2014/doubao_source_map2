// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(893631) to 'babel-typeof-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 736883
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("babel-typeof-helper") /*id: 893631*/);
  function i(e, t) {
    var r = [];
    Object.keys(e).forEach(function (n) {
      var i = e[n];
      if (i != null) {
        if (o.default(i) === "object") {
          if (t && i instanceof Array && i.every(function (e) {
            return o.default(e) !== "object";
          })) {
            i.forEach(function (e) {
              r.push(`${encodeURIComponent(n)}[]=${encodeURIComponent(e)}`);
            });
          } else {
            r.push(`${encodeURIComponent(n)}=${encodeURIComponent(JSON.stringify(i))}`);
          }
        } else {
          r.push(`${encodeURIComponent(n)}=${encodeURIComponent(i)}`);
        }
      }
    });
    return r.join("&");
  }
  i.default = i;
  exports.default = i;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}