// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N6' to 'AttachmentImageAreaLazy'
// - Renamed export 'dr' to 'AttachmentFileAreaLazy'
// - Renamed export 'og' to 'AttachmentAreaLazy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 22429
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-image-preview") /*id: 87086*/, require.e("api-client-services") /*id: 26176*/, require.e("file-icons-image-preview") /*id: 27298*/, require.e("chat-input-attachment-file-area") /*id: 60681*/]).then(require.bind(require, "chat-input-attachment-file-area") /*id: 440802*/).then(e => {
      let {
        AttachmentFileArea: t
      } = e;
      return {
        default: t
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("chat-input-attachment-image-area") /*id: 60410*/.then(require.bind(require, "chat-input-attachment-image-area") /*id: 690985*/).then(e => {
      let {
        AttachmentImageArea: t
      } = e;
      return {
        default: t
      };
    }),
    fallback: {
      default: () => reactJsxRuntimeCoreReexport.jsx("div", {})
    }
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {}));
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("api-client-services") /*id: 26176*/, require.e("chat-input-attachment-area") /*id: 17478*/]).then(require.bind(require, "chat-input-attachment-area-component") /*id: 692660*/).then(e => {
      let {
        AttachmentArea: t
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
    AttachmentImageAreaLazy: function () {
      return s;
    },
    AttachmentFileAreaLazy: function () {
      return l;
    },
    AttachmentAreaLazy: function () {
      return c;
    }
  });
}