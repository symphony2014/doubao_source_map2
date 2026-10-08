// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'AsyncAttachmentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 440766
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("attachment-file-ui") /*id: 9327*/.then(require.bind(require, "attachment-node-ui") /*id: 304762*/).then(e => {
      let {
        AttachmentNodeUI: t
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
    AsyncAttachmentNode: function () {
      return a;
    }
  });
}