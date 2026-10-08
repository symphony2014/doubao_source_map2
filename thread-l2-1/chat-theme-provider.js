// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'ChatThemeProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 638787
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownRendererWrapper = require("markdown-renderer-wrapper") /*id: 252805*/;
  var mergeClassNamesUtil = require("merge-class-names-util") /*id: 975716*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    let d = chatFgStoreHooks.getSourceValue(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage,
      defaultValue: false
    });
    return reactJsxRuntimeCoreReexport.jsx(markdownRendererWrapper.MarkdownRenderer, {
      ref: t,
      className: mergeClassNamesUtil.mergeClassNames(n),
      ...i,
      theme: "default",
      mode: d ? "dark" : "light"
    });
  });
  require.d(exports, {
    ChatThemeProvider: function () {
      return d;
    }
  });
}