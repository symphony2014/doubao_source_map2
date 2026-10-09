// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ju' to 'renderInlineDocCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 690621
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CanvasInlineDocCard: e
      } = await Promise.all([require.e("html-entity-decoder") /*id: 87517*/, require.e("katex-core-library") /*id: 21553*/, require.e("module-federation-runtime") /*id: 19584*/, require.e("text-processing-utils") /*id: 45425*/, require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-core") /*id: 2674*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("virtual-list-module") /*id: 11464*/, require.e("document-utils-vendor") /*id: 7359*/, require.e("event-emitter-utilities") /*id: 35613*/, require.e("dropdown-ui-components") /*id: 16024*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("semi-ui-tooltip-button") /*id: 5568*/, require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("image-viewer-preview-ui") /*id: 23457*/, require.e("api-client-services") /*id: 26176*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("markdown-autofix-modifiers") /*id: 52853*/, require.e("text-editor-format-export") /*id: 68834*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("chat-assistant-store") /*id: 95317*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("styled-components-ui-library") /*id: 96973*/, require.e("canvas-inline-doc-card") /*id: 97103*/]).then(require.bind(require, "canvas-inline-doc-card-component") /*id: 324483*/);
      return {
        default: e
      };
    }
  })));
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CanvasInlineDocXCard: e
      } = await Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("editor-kit-core") /*id: 2674*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("api-client-services") /*id: 26176*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("styled-components-ui-library") /*id: 96973*/, require.e("canvas-inline-docx-card") /*id: 98857*/]).then(require.bind(require, "canvas-inline-docx-card-component") /*id: 926046*/);
      return {
        default: e
      };
    }
  })));
  let u = e => {
    let {
      message: t,
      autoOpenCanvas: r,
      onCollapse: o,
      options: s = {}
    } = e;
    let {
      isShare: u = false,
      onOpenDoc: h
    } = s;
    let p = reactCoreLibraryReexport.useMemo(() => extractArtifactFromChatMessage.extractArtifactFromMessage(t), [t]);
    if (!p) {
      return [];
    }
    let {
      offset: f,
      intention: m,
      identifier: g,
      artifactId: v,
      artifactKey: _,
      resourceType: y
    } = p;
    let b = v ?? g;
    if (!f || !t) {
      return [];
    }
    let {
      start: w,
      end: x
    } = f;
    return [{
      range: [w ?? 0, x ?? Infinity],
      type: "block",
      render: () => y === artifactResourceLayout.ArtifactResource.CanvasPages || y === artifactResourceLayout.ArtifactResource.DocxPage ? reactJsxRuntimeCoreReexport.jsx(d, {
        message: t,
        artifact: p,
        autoOpenCanvas: r,
        shareMode: u,
        onCollapse: o,
        onOpenDoc: h
      }) : m === "write" ? reactJsxRuntimeCoreReexport.jsx(c, {
        artifactId: b ?? "",
        artifactKey: _,
        message: t,
        onCollapse: o,
        autoOpenCanvas: r,
        shareMode: u,
        onOpenDoc: h
      }) : undefined
    }];
  };
  require.d(exports, {
    renderInlineDocCard: function () {
      return u;
    }
  });
}