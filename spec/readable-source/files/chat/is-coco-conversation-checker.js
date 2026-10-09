// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'isCocoConversation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 714933
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  let r = e => (e == null ? undefined : e.conversation_type) === chatCoreConstants.BotTypes.Coco || (e == null ? undefined : e.conversation_type) === chatCoreConstants.BotTypes.CocoSub || (e == null ? undefined : e.conversation_type) === chatCoreConstants.BotTypes.CocoWeb || (e == null ? undefined : e.conversation_type) === chatCoreConstants.BotTypes.CocoWebSub;
  require.d(exports, {
    isCocoConversation: function () {
      return r;
    }
  });
}