// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'handleContentError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23337.bf4ac03a.js
         * chunkId: 23337
         * moduleId: 384013
         */
module.exports = function (module, exports, require) {
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  let a = (M, e) => String(M.errorOption.code) === String(chatErrorCodes.chatErrorCodes.CONTENT_UNAVAILABLE) && (samanthaToastFactory.toastInstance.error({
    content: M.errorOption.message || e,
    showClose: false
  }), true);
  require.d(exports, {
    handleContentError: function () {
      return a;
    }
  });
}