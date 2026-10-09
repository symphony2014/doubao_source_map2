// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ChatInputRefV2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 53013
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("chat-input-ref-content-v2") /*id: 93226*/.then(require.bind(require, "chat-input-ref-content-v2") /*id: 78565*/).then(e => {
      let {
        ChatInputRefContentV2: t
      } = e;
      return {
        default: t
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  require.d(exports, {
    ChatInputRefV2: function () {
      return o;
    }
  });
}