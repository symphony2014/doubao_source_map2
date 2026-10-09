// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(227859) to 'safe-assign-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 694858
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e) {
    return r.default({}, e);
  };
  var r = a(require("safe-assign-util") /*id: 227859*/);
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}