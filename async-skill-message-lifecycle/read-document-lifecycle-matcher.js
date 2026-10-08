// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(374916) to 'chat-read-document-symbol_1'
// - Updated imported property '_' to 'readDocumentSymbol' (module 374916)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 530868
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-read-document-symbol_1") /*id: 374916*/.readDocumentSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    ReadDocumentMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}