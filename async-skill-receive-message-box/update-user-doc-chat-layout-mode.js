// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'updateUserDocChatLayoutMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 368269
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var threadResourceTypes = require("thread-resource-types") /*id: 259428*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  let l = async (e, t) => {
    try {
      return await apiServicesCollection.OtterDocApiService.AGWUpdateUserObjSetting({
        obj_type: threadResourceTypes.resourceTypes.Page,
        obj_token: e,
        settings: [{
          key: "chat_window_status",
          value: t === chatSkillInputConstants.SkillDisplayType.Sidebar ? "open" : "close"
        }]
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "update_user_doc_page_chat_layout_mode_error",
        error: e
      });
      return null;
    }
  };
  require.d(exports, {
    updateUserDocChatLayoutMode: function () {
      return l;
    }
  });
}