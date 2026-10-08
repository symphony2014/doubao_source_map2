// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'n' to 'skillEditorStateStores'
// - Resolved require(168235) to 'skill-editor-state-stores'
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'X' to 'skillEditorStore' (module 168235)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-lifecycle.9b900672.js
         * chunkId: 16829
         * moduleId: 314043
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  class i {
    mounted(e) {
      var t;
      let {
        conversationId: a
      } = e;
      let {
        canvasContent: i,
        conversationId: o
      } = chatStoreManager.getStoreState("chatViewCanvasStore") || {};
      if ((t = i) != null && t.readContent && a === o) {
        return;
      }
      let r = skillEditorStateStores.skillEditorStore.getState().canvasOpenStatusMap[a];
      if (r) {
        setTimeout(() => {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(r));
        }, 0);
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ReadDocumentMessageListLifeCyclePlugin: function () {
      return i;
    }
  });
}