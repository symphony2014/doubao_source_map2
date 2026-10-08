// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatBatchDownloadSymbol'
// - Resolved require(875082) to 'chat-batch-download-symbol'
// - Updated imported property 'M' to 'batchDownloadKey' (module 875082)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 370892
         */
module.exports = function (module, exports, require) {
  var chatBatchDownloadSymbol = require("chat-batch-download-symbol") /*id: 875082*/;
  let r = e => {
    let {
      batchDownloadSelected: t
    } = e;
    if (t) {
      return chatBatchDownloadSymbol.batchDownloadKey;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}