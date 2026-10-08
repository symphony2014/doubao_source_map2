// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(893631) to 'babel-typeof-helper'
// - Resolved require(529193) to 'validate-arg-count'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 728393
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    i.default(1, arguments);
    var t = Object.prototype.toString.call(e);
    return new Date(e instanceof Date || r.default(e) === "object" && t === "[object Date]" ? e.getTime() : typeof e == "number" || t === "[object Number]" ? e : NaN);
  };
  var r = a(require("babel-typeof-helper") /*id: 893631*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}