// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(529193) to 'validate-arg-count'
// - Resolved require(829731) to 'start-of-week-utc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 991408
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    i.default(1, arguments);
    var t = r.default(e);
    var n = t.getUTCFullYear();
    var a = new Date(0);
    a.setUTCFullYear(n + 1, 0, 4);
    a.setUTCHours(0, 0, 0, 0);
    var s = o.default(a);
    var l = new Date(0);
    l.setUTCFullYear(n, 0, 4);
    l.setUTCHours(0, 0, 0, 0);
    var u = o.default(l);
    if (t.getTime() >= s.getTime()) {
      return n + 1;
    } else if (t.getTime() >= u.getTime()) {
      return n;
    } else {
      return n - 1;
    }
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  var o = a(require("start-of-week-utc") /*id: 829731*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}