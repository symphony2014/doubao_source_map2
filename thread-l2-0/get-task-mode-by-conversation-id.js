// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'getTaskModeByConvId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 712994
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  let a = e => {
    let n = e || chatStoreManager.getStore("chatViewCoreStore").getState().currentChatViewConfig?.chatId;
    return superTaskStore.getSuperTaskStore().getState().getTaskModeByConvId(n);
  };
  require.d(exports, {
    getTaskModeByConvId: function () {
      return a;
    }
  });
}