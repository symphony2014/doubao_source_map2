// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'isPresetPromptAiFeature'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 806798
         */
module.exports = function (module, exports, require) {
  let i = [require("chat-input-ai-feature-constants") /*id: 155267*/.AiFeatureType.GeneratePPT];
  let r = e => {
    let {
      presetPrompt: t
    } = e;
    if (t && i.includes(t)) {
      return true;
    }
  };
  require.d(exports, {
    isPresetPromptAiFeature: function () {
      return r;
    }
  });
}