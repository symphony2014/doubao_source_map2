// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'ChatArtifactCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 48256
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("editor-kit-core") /*id: 2674*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("api-client-services") /*id: 26176*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("styled-components-ui-library") /*id: 96973*/, require.e("canvas-inline-docx-card") /*id: 98857*/]).then(require.bind(require, "canvas-inline-docx-card-component") /*id: 926046*/)).then(e => ({
    default: e.CanvasInlineDocXCard
  }))));
  let u = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("editor-kit-core") /*id: 2674*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("editor-ui-components") /*id: 87169*/]).then(require.bind(require, "step-docx-card-pure") /*id: 619105*/)).then(e => ({
    default: e.StepDocXCardPure
  }))));
  let p = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("semi-toast-ui-components") /*id: 91850*/]).then(require.bind(require, "skill-step-doc-x-card") /*id: 837642*/).then(e => ({
    default: e.StepDocXCard
  })))));
  let m = reactCoreLibraryReexport.memo(function (e) {
    let {
      autoOpenCanvas: t,
      message: n,
      contentBlock: a,
      isShare: s = false,
      hideBottomChatEntry: m = false,
      onOpenDoc: v,
      onCollapse: f
    } = e;
    let h = reactCoreLibraryReexport.useMemo(() => {
      if (messageContentTypeAndStatusChecker.fjb(n)) {
        return extractArtifactFromChatMessage.extractArtifactFromMessage(n, a == null ? undefined : a.content_obj?.resource_id);
      }
      return extractArtifactFromChatMessage.extractArtifactFromMessage(n);
    }, [n, a]);
    if (!h || !n) {
      return null;
    }
    let {
      artifactId: g,
      identifier: _,
      resourceType: b
    } = h;
    if ((g ?? _) && b) {
      if (b === artifactResourceLayout.ArtifactResource.CanvasPages || b === artifactResourceLayout.ArtifactResource.DocxPage) {
        return reactJsxRuntimeCoreReexport.jsx(d, {
          ...e,
          message: n,
          artifact: h,
          autoOpenCanvas: t,
          shareMode: s,
          hideBottomChatEntry: m,
          onCollapse: f,
          onOpenDoc: v
        });
      } else if (b === artifactResourceLayout.ArtifactResource.StepWritingOtterPage || b === artifactResourceLayout.ArtifactResource.StepDocxPage) {
        if (s) {
          return reactJsxRuntimeCoreReexport.jsx(u, {
            mouseOver: false,
            inView: false,
            ...e,
            message: n
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx(p, {
            ...e,
            message: n
          });
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  });
  require.d(exports, {
    ChatArtifactCard: function () {
      return m;
    }
  });
}