// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useSuperTaskChatInputMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 830021
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var superTaskSwitchManager = require("super-task-switch-manager") /*id: 656965*/;
  let c = function (e = "") {
    if (arguments.length > 1) {
      arguments[1];
    }
    let {
      mode: t,
      setSuperTaskSwitchByConvId: n
    } = superTaskStore.superTaskStore(t => ({
      mode: t.getSuperTaskSwitchByConvId(e),
      setSuperTaskSwitchByConvId: t.setSuperTaskSwitchByConvId
    }));
    return {
      isEnabled: t === chatConstants.taskTypes.SuperTask,
      currentChatInputMode: t,
      handleSwitchMode: t => {
        if (t === chatConstants.taskTypes.SuperTask) {
          var l;
          let t = (l = attachmentUploadStoreHooks.getAttachments({
            chatId: e
          })) === null || l === undefined ? undefined : l.reduce((e, t, n) => t.type === "link" ? [...e, n] : e, []);
          if (t == null ? undefined : t.length) {
            chatIocServiceLoaderHook.loadServiceAsync("attachmentsStoreService").then(n => {
              t.forEach(t => {
                if (n != null) {
                  n.deleteAttachment({
                    chatId: e,
                    index: t
                  });
                }
              });
            });
          }
        }
        chatStoreManager.getStore("chatInputStore").getState().closeSkillPanel(e || "");
        n(e || "", t);
        if (e.startsWith("local")) {
          let i = superTaskSwitchManager.getSuperTaskSwitchManager().getConvIdByLocalChat(e);
          if (i) {
            n(i || "", t);
          }
        }
      }
    };
  };
  require.d(exports, {
    useSuperTaskChatInputMode: function () {
      return c;
    }
  });
}