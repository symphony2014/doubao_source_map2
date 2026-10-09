// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(802660) to 'date-add-milliseconds'
// - Resolved require(529193) to 'validate-arg-count'
// - Resolved require(546552) to 'utils-to-integer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 675123
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t) {
    i.default(2, arguments);
    var n = o.default(t);
    return r.default(e, -n);
  };
  var r = a(require("date-add-milliseconds") /*id: 802660*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  var o = a(require("utils-to-integer") /*id: 546552*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}