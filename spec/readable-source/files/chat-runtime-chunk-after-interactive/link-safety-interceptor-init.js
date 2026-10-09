// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'secureLinkWindowOpenOverride'
// - Resolved require(913157) to 'secure-link-window-open-override'
// - Updated imported property 'OL' to 'overrideWindowOpen' (module 913157)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 659928
         */
module.exports = function (module, exports, require) {
  var secureLinkWindowOpenOverride = require("secure-link-window-open-override") /*id: 913157*/;
  require.r(exports);
  require.d(exports, {
    initSecLink: function () {
      return secureLinkWindowOpenOverride.overrideWindowOpen;
    }
  });
}