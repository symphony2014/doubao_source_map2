// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'eventBreakRuleToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 727603
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("event-break-rule");
  require.d(exports, {
    eventBreakRuleToken: function () {
      return n;
    }
  });
}