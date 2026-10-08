// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'layoutActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 649420
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).ADD_BOT = "ADD_BOT";
  i.DISCOVER = "DISCOVER";
  i.CHAT = "CHAT";
  i.CHAT_CAN_USE = "CHAT_CAN_USE";
  i.AI_SPACE_SHARE = "AI_SPACE_SHARE";
  i.AI_SPACE_SHARE_FILE = "AI_SPACE_SHARE_FILE";
  i.AI_SPACE_SHARE_MULTI_FILE = "AI_SPACE_SHARE_MULTI_FILE";
  i.DEFAULT = "default";
  let n = i;
  require.d(exports, {
    layoutActionTypes: function () {
      return n;
    }
  });
}