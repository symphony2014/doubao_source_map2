// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(926591) to 'safe-object-assign-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 354420
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = function (e, t) {
    var n = r.default({}, e);
    if (Array.isArray(t)) {
      t.forEach(function (e) {
        delete n[e];
      });
    }
    return n;
  };
  var r = esModuleInteropHelper_2(require("safe-object-assign-util") /*id: 926591*/);
}