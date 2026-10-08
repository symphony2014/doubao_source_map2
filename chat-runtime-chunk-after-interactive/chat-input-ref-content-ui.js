// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mr' to 'ChatInputRefContent'
// - Renamed export 'XR' to 'joinTruthyStrings'
// - Renamed export 'mh' to 'getFileListSummary'
// - Renamed export 'yB' to 'getFileDisplayName'
// - Renamed export 'ys' to 'getFileLinkOrName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content-ui.2012527d.js
         * chunkId: 14180
         * moduleId: 917632
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var chatInputRefUtils = require("chat-input-ref-utils") /*id: 859718*/;
  let o = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("chat-input-ref-content") /*id: 3821*/]).then(require.bind(require, "chat-input-ref-content") /*id: 115169*/).then(e => {
      let {
        ChatInputRefContent: n
      } = e;
      return {
        default: n
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  require.d(exports, {
    ChatInputRefContent: function () {
      return o;
    },
    joinTruthyStrings: function () {
      return chatInputRefUtils.joinTruthyStrings;
    },
    getFileListSummary: function () {
      return chatInputRefUtils.getFileListSummary;
    },
    getFileDisplayName: function () {
      return chatInputRefUtils.getFileDisplayName;
    },
    getFileLinkOrName: function () {
      return chatInputRefUtils.getFileLinkOrName;
    }
  });
}