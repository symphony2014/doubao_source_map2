// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'createDeleteHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 183328
         */
module.exports = function (module, exports, require) {
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let a = e => {
    let {
      message: t
    } = e;
    return {
      onDeleteClick: () => {
        let e = chatMessageShareSelectStore.chatMessageShareSelectStore.getState();
        e.enterSelectMode({
          scene: skillMessageActions.messageActions.Delete
        });
        e.toggleMessage({
          conversationId: t.conversation_id || "",
          state: chatMessageStoreFactory.createMessageStore.getState(),
          messageIndex: Number(t.index)
        });
      }
    };
  };
  require.d(exports, {
    createDeleteHandler: function () {
      return a;
    }
  });
}