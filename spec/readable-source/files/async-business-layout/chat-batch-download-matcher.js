// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatBatchDownloadSymbol_1'
// - Resolved require(580198) to 'chat-batch-download-symbol_1'
// - Updated imported property 'b' to 'batchDownloadKey' (module 580198)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 622409
         */
module.exports = function (module, exports, require) {
  var chatBatchDownloadSymbol_1 = require("chat-batch-download-symbol_1") /*id: 580198*/;
  let r = e => {
    let {
      batchDownload: {
        isBatchDownloadMode: t
      }
    } = e;
    if (t) {
      return chatBatchDownloadSymbol_1.batchDownloadKey;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    matcher: function () {
      return r;
    }
  });
}