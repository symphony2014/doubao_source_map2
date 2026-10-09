// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'getTemplateConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 339806
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = () => ({
    creationImageTemplateApplyV1: chatFgStoreHooks.getSourceValue("creation_ui_use_template_action", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "v1"
  });
  require.d(exports, {
    getTemplateConfig: function () {
      return a;
    }
  });
}