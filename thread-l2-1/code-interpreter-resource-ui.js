// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useCiResourceUi'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 36868
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("chat-attachment-components") /*id: 28526*/.then(require.bind(require, "mdbox-ci-link-export-module") /*id: 526793*/).then(e => ({
      default: e.MdboxCILink
    }))
  })));
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("chat-attachment-components") /*id: 28526*/.then(require.bind(require, "mdbox-ci-link-export-module") /*id: 526793*/).then(e => ({
      default: e.MdBoxCIImage
    }))
  })));
  let d = e => {
    let {
      eventTrigger: n,
      bizMessage: l
    } = e;
    let r = reactCoreLibraryReexport.useMemo(() => {
      return safeJsonUtils.safeParse(l == null ? undefined : l.ext?.code_interpreter_resource_url_map, {});
    }, [l == null ? undefined : l.ext?.code_interpreter_resource_url_map]);
    let d = reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(s, {
      ...e,
      events: n ? {
        onDownloadEvent: n.onClickDownloadAttachmentEvent,
        onClickAttachment: n.onClickAttachmentEvent
      } : undefined,
      uriToUrlMap: r
    }), [r]);
    let u = reactCoreLibraryReexport.useCallback(e => reactJsxRuntimeCoreReexport.jsx(c, {
      ...e,
      uriToUrlMap: r
    }), [r]);
    return reactCoreLibraryReexport.useMemo(() => ({
      Link: d,
      Image: u
    }), [u, d]);
  };
  require.d(exports, {
    useCiResourceUi: function () {
      return d;
    }
  });
}