// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(4557) to 'date-start-of-week_1'
// - Resolved require(199663) to 'date-start-of-week-year'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 170899
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t) {
    s.default(1, arguments);
    var n = r.default(e);
    return Math.round((i.default(n, t).getTime() - o.default(n, t).getTime()) / 604800000) + 1;
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("date-start-of-week_1") /*id: 4557*/);
  var o = a(require("date-start-of-week-year") /*id: 199663*/);
  var s = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}