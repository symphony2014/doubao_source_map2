// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'nodeEnvironmentCheck'
// - Resolved require(705753) to 'node-environment-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 15191
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var nodeEnvironmentCheck = require("node-environment-check") /*id: 705753*/;
  module.exports = function (t) {
    if (nodeEnvironmentCheck) {
      try {
        return globalObjectPolyfill.process.getBuiltinModule(t);
      } catch (t) {}
      try {
        return Function("return require(\"" + t + "\")")();
      } catch (t) {}
    }
  };
}