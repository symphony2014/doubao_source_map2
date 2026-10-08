// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ko' to 'commentPluginManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 335738
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let n = {
    setEnabled(e) {},
    getEnabled: () => false,
    attachHooks() {},
    unAttachHooks() {}
  };
  let o = {
    getCurrentSuiteCommentSDK: () => undefined,
    getTranslateConfig: () => ({}),
    registerEditorPlugin: () => [],
    initCommentReaction: () => {},
    showPicLimitDialogIfNecessary: () => {},
    MentionPlugin: () => ({
      pluginName: "MentionPlugin",
      ...n
    }),
    AdminControlPlugin: () => ({
      pluginName: "AdminControlPlugin",
      ...n
    }),
    TranslateLimitPlugin: () => ({
      pluginName: "TranslateLimitPlugin",
      ...n
    }),
    UnloadReminderPlugin: () => ({
      pluginName: "UnloadReminderPlugin",
      ...n
    }),
    UserProfilePlugin: () => ({
      pluginName: "UserProfilePlugin",
      ...n
    }),
    CommentUserGuidePlugin: () => ({
      pluginName: "CommentUserGuidePlugin",
      ...n
    }),
    LingoViewPlugin: () => ({
      pluginName: "LingoViewPlugin",
      ...n
    }),
    TextareaReminderPlugin: () => ({
      pluginName: "TextareaReminderPlugin",
      ...n
    }),
    getCommentImageEnabled: () => false,
    commentSDKManager: () => ({}),
    contentReactionPlugin: () => ({
      pluginName: "contentReactionPlugin",
      ...n
    })
  };
  require.d(exports, {
    commentPluginManager: function () {
      return o;
    }
  });
}