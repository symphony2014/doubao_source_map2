// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(43984) to 'is-date-util'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 737353
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    o.default(1, arguments);
    return (!!r.default(e) || typeof e == "number") && !isNaN(Number(i.default(e)));
  };
  var r = a(require("is-date-util") /*id: 43984*/);
  var i = a(require("to-date-util") /*id: 728393*/);
  var o = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}