// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(991408) to 'date-utc-week-year'
// - Resolved require(829731) to 'start-of-week-utc'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 742858
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    o.default(1, arguments);
    var t = r.default(e);
    var n = new Date(0);
    n.setUTCFullYear(t, 0, 4);
    n.setUTCHours(0, 0, 0, 0);
    return i.default(n);
  };
  var r = a(require("date-utc-week-year") /*id: 991408*/);
  var i = a(require("start-of-week-utc") /*id: 829731*/);
  var o = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}