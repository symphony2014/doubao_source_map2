// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'checkVideoUploadMultiplePic'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 472580
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = () => {
    let {
      value: e
    } = chatFgStoreHooks.useSourceKey("video_upload_multiple_pic", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.serverAB
    });
    return e !== "0";
  };
  require.d(exports, {
    checkVideoUploadMultiplePic: function () {
      return a;
    }
  });
}