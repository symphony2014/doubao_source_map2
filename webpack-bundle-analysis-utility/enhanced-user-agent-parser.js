// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(78254) to 'user-agent-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 310819
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = undefined;
  var o = esModuleInteropHelper_2(require("user-agent-parser") /*id: 78254*/);
  function i() {
    var e;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var r = arguments.length > 1 ? arguments[1] : undefined;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var i = o.default(t, r, n);
    var a = i.os;
    var s = i.browser;
    if (e = (t = t.toLowerCase()).match(/newsarticle\/([\d.]+)/)) {
      s.toutiao = true;
      s.version = e[1];
    }
    return {
      browser: s,
      os: a
    };
  }
  i.default = i;
  exports.default = i;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}