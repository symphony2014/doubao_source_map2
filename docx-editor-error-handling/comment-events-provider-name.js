// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'commentEventsToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 751145
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("comment-events");
  require.d(exports, {
    commentEventsToken: function () {
      return n;
    }
  });
}