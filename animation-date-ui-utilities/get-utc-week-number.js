// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(829731) to 'start-of-week-utc'
// - Resolved require(742858) to 'start-of-utc-week-year'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 201443
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    s.default(1, arguments);
    var t = r.default(e);
    return Math.round((i.default(t).getTime() - o.default(t).getTime()) / 604800000) + 1;
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("start-of-week-utc") /*id: 829731*/);
  var o = a(require("start-of-utc-week-year") /*id: 742858*/);
  var s = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}