// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'isValidAiFeature'
// - Renamed export 'G' to 'getFeatureCommand'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 458924
         */
module.exports = function (module, exports, require) {
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  let r = {
    [chatInputAiFeatureConstants.AiFeatureType.SummarizeSingle]: "summarize",
    [chatInputAiFeatureConstants.AiFeatureType.SummarizeMultiple]: "multi_summarize",
    [chatInputAiFeatureConstants.AiFeatureType.SummarizeWebsite]: "link_summarize"
  };
  let a = e => {
    let {
      presetPrompt: t
    } = e;
    if (t && t in r) {
      return true;
    }
  };
  let l = e => {
    if (e && e in r) {
      return {
        command: r[e]
      };
    }
  };
  require.d(exports, {
    isValidAiFeature: function () {
      return a;
    },
    getFeatureCommand: function () {
      return l;
    }
  });
}