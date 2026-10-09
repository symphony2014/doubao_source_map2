// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'markdownMetaRenderTypes'
// - Resolved require(912092) to 'markdown-meta-render-types'
// - Renamed variable 'o' to 'arrayFindLastIndexUtil'
// - Resolved require(832584) to 'array-find-last-index-util'
// - Renamed variable 'r' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'c' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'd' to 'artifactResourceLayout'
// - Resolved require(774071) to 'artifact-resource-layout'
// - Renamed variable 'f' to 'extractArtifactFromChatMessage'
// - Resolved require(117895) to 'extract-artifact-from-chat-message'
// - Renamed variable '_' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'v' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'A' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(87517) to 'html-entity-decoder'
// - Resolved require.e(21553) to 'katex-core-library'
// - Resolved require.e(19584) to 'module-federation-runtime'
// - Resolved require.e(45425) to 'text-processing-utils'
// - Resolved require.e(13032) to 'editor-core-selection'
// - Resolved require.e(2674) to 'editor-kit-core'
// - Resolved require.e(79909) to 'editor-kit-state-manager'
// - Resolved require.e(35713) to 'crypto-hashing-utilities'
// - Resolved require.e(11464) to 'virtual-list-module'
// - Resolved require.e(7359) to 'document-utils-vendor'
// - Resolved require.e(35613) to 'event-emitter-utilities'
// - Resolved require.e(16024) to 'dropdown-ui-components'
// - Resolved require.e(22533) to 'analytics-tracking-sdk'
// - Resolved require.e(5888) to 'changeset-easysync-modules'
// - Resolved require.e(5568) to 'semi-ui-tooltip-button'
// - Resolved require.e(43680) to 'ui-toast-crypto-utils'
// - Resolved require.e(23457) to 'image-viewer-preview-ui'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(55100) to 'chat-session-lifecycle'
// - Resolved require.e(30286) to 'konva-external-dependencies'
// - Resolved require.e(57467) to 'flow-auth-space-sdk'
// - Resolved require.e(52853) to 'markdown-autofix-modifiers'
// - Resolved require.e(68834) to 'text-editor-format-export'
// - Resolved require.e(17934) to 'webpack-chunk-utils'
// - Resolved require.e(90774) to 'flow-web-ui-components'
// - Resolved require.e(95317) to 'chat-assistant-store'
// - Resolved require.e(59341) to 'ai-doc-canvas-messaging'
// - Resolved require.e(96973) to 'styled-components-ui-library'
// - Resolved require.e(97103) to 'canvas-inline-doc-card'
// - Resolved require.bind(324483) to 'canvas-inline-doc-card-component'
// - Resolved require.e(19584) to 'module-federation-runtime'
// - Resolved require.e(2674) to 'editor-kit-core'
// - Resolved require.e(35713) to 'crypto-hashing-utilities'
// - Resolved require.e(22533) to 'analytics-tracking-sdk'
// - Resolved require.e(5888) to 'changeset-easysync-modules'
// - Resolved require.e(43680) to 'ui-toast-crypto-utils'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(57467) to 'flow-auth-space-sdk'
// - Resolved require.e(17934) to 'webpack-chunk-utils'
// - Resolved require.e(90774) to 'flow-web-ui-components'
// - Resolved require.e(59341) to 'ai-doc-canvas-messaging'
// - Resolved require.e(96973) to 'styled-components-ui-library'
// - Resolved require.e(98857) to 'canvas-inline-docx-card'
// - Resolved require.bind(926046) to 'canvas-inline-docx-card-component'
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'findLastIndex' (module 832584)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'C5' to 'retryPromise' (module 374795)
// - Updated imported property 'le' to 'extractArtifactFromMessage' (module 117895)
// - Updated imported property '$' to 'ArtifactResource' (module 774071)
// - Updated imported property 'B' to 'MetaRenderTypes' (module 912092)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-write-artifact-meta-render-plugin.725709ad.js
         * chunkId: 4233
         * moduleId: 875688
         */
module.exports = function (module, exports, require) {
  var markdownMetaRenderTypes = require("markdown-meta-render-types") /*id: 912092*/;
  var arrayFindLastIndexUtil = require("array-find-last-index-util") /*id: 832584*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let u = e => {
    return safeJsonUtils.safeParse(e == null ? undefined : e.ext?.samantha_artifact, {});
  };
  let a = (e, t) => {
    var i;
    var c;
    var a;
    let l = arrayFindLastIndexUtil.findLastIndex(t == null ? undefined : t.content_blocks_v2, e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT);
    let d = t == null ? undefined : (c = t.content_blocks_v2) === null || c === undefined ? undefined : (i = c[l]) === null || i === undefined ? undefined : i.content?.text_block;
    return (d == null ? undefined : d.text) && d.text === (e == null ? undefined : (a = e.content) === null || a === undefined ? undefined : a.text_block?.text);
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let s = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CanvasInlineDocCard: e
      } = await Promise.all([require.e("html-entity-decoder") /*id: 87517*/, require.e("katex-core-library") /*id: 21553*/, require.e("module-federation-runtime") /*id: 19584*/, require.e("text-processing-utils") /*id: 45425*/, require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-core") /*id: 2674*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("virtual-list-module") /*id: 11464*/, require.e("document-utils-vendor") /*id: 7359*/, require.e("event-emitter-utilities") /*id: 35613*/, require.e("dropdown-ui-components") /*id: 16024*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("semi-ui-tooltip-button") /*id: 5568*/, require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("image-viewer-preview-ui") /*id: 23457*/, require.e("api-client-services") /*id: 26176*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("markdown-autofix-modifiers") /*id: 52853*/, require.e("text-editor-format-export") /*id: 68834*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("chat-assistant-store") /*id: 95317*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("styled-components-ui-library") /*id: 96973*/, require.e("canvas-inline-doc-card") /*id: 97103*/]).then(require.bind(require, "canvas-inline-doc-card-component") /*id: 324483*/);
      return {
        default: e
      };
    }
  })));
  let T = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryPromise(() => Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("editor-kit-core") /*id: 2674*/, require.e("crypto-hashing-utilities") /*id: 35713*/, require.e("analytics-tracking-sdk") /*id: 22533*/, require.e("changeset-easysync-modules") /*id: 5888*/, require.e("ui-toast-crypto-utils") /*id: 43680*/, require.e("api-client-services") /*id: 26176*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("webpack-chunk-utils") /*id: 17934*/, require.e("flow-web-ui-components") /*id: 90774*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("styled-components-ui-library") /*id: 96973*/, require.e("canvas-inline-docx-card") /*id: 98857*/]).then(require.bind(require, "canvas-inline-docx-card-component") /*id: 926046*/)).then(e => ({
    default: e.CanvasInlineDocXCard
  }))));
  let y = e => {
    let {
      message: t,
      isShare: n,
      hideBottomChatEntry: i
    } = e;
    let o = extractArtifactFromChatMessage.extractArtifactFromMessage(t);
    let {
      intention: r,
      identifier: c,
      artifactId: u,
      artifactKey: a,
      resourceType: l
    } = o || {};
    let _ = u ?? c;
    if (t && o) {
      if (l === artifactResourceLayout.ArtifactResource.CanvasPages || l === artifactResourceLayout.ArtifactResource.DocxPage) {
        return reactJsxRuntimeCoreReexport.jsx(T, {
          message: t,
          artifact: o,
          autoOpenCanvas: s.autoOpenCanvas,
          shareMode: n
        });
      } else if (r === "write") {
        return reactJsxRuntimeCoreReexport.jsx(p, {
          artifactId: _ ?? "",
          artifactKey: a,
          message: t,
          autoOpenCanvas: s.autoOpenCanvas,
          shareMode: n,
          hideBottomChatEntry: i
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  let R = {
    strategy: markdownMetaRenderTypes.MetaRenderTypes.ARTIFACT,
    metaType: undefined,
    getRange: e => {
      let {
        context: t
      } = e;
      let {
        offset: n
      } = u(t.message);
      let {
        start: i,
        end: o
      } = n ?? {};
      return [i ?? 0, o ?? Infinity];
    },
    matcher: e => {
      let {
        context: t
      } = e;
      let {
        offset: n
      } = u(t.message);
      return !!n && !!a(t.block, t.message);
    },
    Content: e => reactJsxRuntimeCoreReexport.jsx(y, {
      ...e,
      hideBottomChatEntry: true
    })
  };
  require.r(exports);
  require.d(exports, {
    WriteArtifactMetaRenderPlugin: function () {
      return R;
    }
  });
}