// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'isSending'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 491797
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  let r = e => {
    let {
      stage: t
    } = e;
    return t === chatCoreConstants.MessageStates.SENDING;
  };
  require.d(exports, {
    isSending: function () {
      return r;
    }
  });
}