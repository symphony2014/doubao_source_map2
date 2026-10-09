// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'scriptModuleInit'
// - Resolved require(622039) to 'script-module-init'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 772836
         */
module.exports = function (module, exports, require) {
  exports.script = undefined;
  var scriptModuleInit = require("script-module-init") /*id: 622039*/;
  Object.defineProperty(exports, "script", {
    enumerable: true,
    get: function () {
      return scriptModuleInit.script;
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}