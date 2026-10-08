// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'getAiCodingConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 243233
         */
module.exports = function (module, exports, require) {
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let o = {
    ab1: "ai_coding_trae_tips1",
    ab2: "ai_coding_trae_tips2",
    ab3: "ai_coding_trae_tips3",
    ab4: "ai_coding_trae_tips4"
  };
  let s = () => {
    return {
      isEnableChallenge: chatFgStoreHooks.getSourceValue("coding_enable_challenge", {
        source: chatStorageKeys.chatStorageKeys.tea,
        defaultValue: false
      }),
      traeExpText: o[chatFgStoreHooks.getSourceValue("coding_trae_text", {
        source: chatStorageKeys.chatStorageKeys.tea,
        defaultValue: ""
      })] ?? "web_ai_coding_canvas_trae_btn"
    };
  };
  require.d(exports, {
    getAiCodingConfig: function () {
      return s;
    }
  });
}