// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(806199) to 'chat-attachment-symbol'
// - Updated imported property 'H' to 'attachmentSymbol' (module 806199)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 541217
         */
module.exports = function (module, exports, require) {
  let i = {
    pluginIdentifier: require("chat-attachment-symbol") /*id: 806199*/.attachmentSymbol,
    matchPlugin: e => true,
    matchPluginWithPayload: e => true
  };
  require.r(exports);
  require.d(exports, {
    AttachmentMessageLifeCyclePluginMatcher: function () {
      return i;
    }
  });
}