// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Resolved require(272223) to 'chat-image-text-symbol'
// - Updated imported property 'J' to 'receiveImageTextKey' (module 272223)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 849934
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  let r = {
    pluginIdentifier: require("chat-image-text-symbol") /*id: 272223*/.receiveImageTextKey,
    matchPlugin: e => e.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaCanvasInput
  };
  require.r(exports);
  require.d(exports, {
    receiveImageTextCreationMessageContentMatcher: function () {
      return r;
    }
  });
}