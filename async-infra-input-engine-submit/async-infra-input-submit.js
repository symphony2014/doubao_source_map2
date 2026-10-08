// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'createResearchPayload'
// - Renamed export 'b' to 'isDeepResearchPrompt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 287774
         */
module.exports = function (module, exports, require) {
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  let r = e => {
    let {
      presetPrompt: t
    } = e;
    return !!t && (t === chatInputAiFeatureConstants.AiFeatureType.DeepResearchAskSug || undefined);
  };
  let a = (e, t) => ({
    text: e,
    direct_research: true,
    reportParams: t
  });
  require.d(exports, {
    createResearchPayload: function () {
      return a;
    },
    isDeepResearchPrompt: function () {
      return r;
    }
  });
}