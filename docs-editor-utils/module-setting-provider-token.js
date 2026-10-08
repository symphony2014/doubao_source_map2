// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'moduleSettingToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 609239
         */
module.exports = function (module, exports, require) {
  let o = require("dependency-injection-container") /*id: 555385*/.providerName("moduleSetting");
  require.d(exports, {
    moduleSettingToken: function () {
      return o;
    }
  });
}