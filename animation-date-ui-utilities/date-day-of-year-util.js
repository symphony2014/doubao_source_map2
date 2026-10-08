// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 643481
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    i.default(1, arguments);
    var t = r.default(e);
    var n = t.getTime();
    t.setUTCMonth(0, 1);
    t.setUTCHours(0, 0, 0, 0);
    return Math.floor((n - t.getTime()) / 86400000) + 1;
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}