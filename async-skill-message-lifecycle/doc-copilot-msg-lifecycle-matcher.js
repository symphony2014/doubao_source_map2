// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(435716) to 'doc-page-copilot-symbol'
// - Updated imported property 'H' to 'docPageCopilotKey' (module 435716)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 545940
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("doc-page-copilot-symbol") /*id: 435716*/.docPageCopilotKey,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    DocPageCopilotMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}