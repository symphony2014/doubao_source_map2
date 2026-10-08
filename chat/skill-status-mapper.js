// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'getSkillType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 808463
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let r = e => {
    if (e !== undefined) {
      return {
        [chatAiConstants.itemStatus.New]: "new_skill",
        [chatAiConstants.itemStatus.Recommend]: "suggested_skill",
        [chatAiConstants.itemStatus.Upgrade]: "upgrade_skill"
      }[e];
    }
  };
  require.d(exports, {
    getSkillType: function () {
      return r;
    }
  });
}