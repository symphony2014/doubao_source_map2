// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'collabControllerName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 754546
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("collab-controller");
  require.d(exports, {
    collabControllerName: function () {
      return o;
    }
  });
}