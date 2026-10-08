// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getChatRenderConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 29632
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var codeRunPreviewConfig = require("code-run-preview-config") /*id: 650100*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "code-block-component") /*id: 523030*/).then(e => ({
    default: e.MdboxCodeBlock
  }))));
  let u = {
    slotType: "default",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...u
      } = e;
      let {
        showRun: s
      } = codeRunPreviewConfig.useRunPreviewConfig();
      let c = {
        ...u,
        ...l,
        ...((i == null ? undefined : i.codeblock) ?? {}),
        meta: n,
        showRun: s
      };
      return reactJsxRuntimeCoreReexport.jsx(a, {
        ...c
      });
    }
  };
  let s = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "vega-lite-diagram-component") /*id: 270812*/).then(e => ({
    default: e.VegaLiteDiagram
  }))));
  let c = {
    slotType: "vega-lite",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i["vega-lite"]) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(s, {
        ...a
      });
    }
  };
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "svg-diagram-view") /*id: 287839*/).then(e => ({
    default: e.SVGDiagram
  }))));
  let v = {
    slotType: "svg",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i.svg) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...a
      });
    }
  };
  let f = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "mindmap-component") /*id: 254524*/).then(e => ({
    default: e.Mindmap
  }))));
  let p = {
    slotType: "mindmap",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i.mindmap) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(f, {
        ...a
      });
    }
  };
  let _ = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "mermaid-chart-component") /*id: 629650*/).then(e => ({
    default: e.Mermaid
  }))));
  let m = {
    slotType: "mermaid",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i.mermaid) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(_, {
        ...a
      });
    }
  };
  let h = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "html-diagram-component") /*id: 52564*/).then(e => ({
    default: e.HTMLDiagram
  }))));
  let g = {
    slotType: "html",
    Content: e => {
      let {
        context: n,
        pluginProps: l,
        ...i
      } = e;
      let r = {
        ...i,
        ...n,
        ...((l == null ? undefined : l.html) ?? {})
      };
      return reactJsxRuntimeCoreReexport.jsx(h, {
        ...r
      });
    },
    extraMatcher: e => {
      var t;
      var n;
      return (n = (t = e.meta) === null || t === undefined ? undefined : t.includes("type=\"renderer\"")) !== null && n !== undefined && n;
    }
  };
  let y = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "hsir-diagram-component") /*id: 476483*/).then(e => ({
    default: e.HSIRDiagram
  }))));
  let k = {
    slotType: "hsir",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i.hsir) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(y, {
        ...a
      });
    }
  };
  let b = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("async-markdown-slot-plugin-code-tools") /*id: 92253*/]).then(require.bind(require, "geogebra-diagram-component") /*id: 873918*/).then(e => ({
    default: e.GeogebraDiagram
  }))));
  let x = {
    slotType: "geogebra",
    Content: e => {
      let {
        meta: n,
        context: l,
        pluginProps: i,
        ...r
      } = e;
      let a = {
        ...r,
        ...l,
        ...((i == null ? undefined : i.geogebra) ?? {}),
        meta: n
      };
      return reactJsxRuntimeCoreReexport.jsx(b, {
        ...a
      });
    }
  };
  let C = {
    slotType: "link",
    Content: reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("async-markdown-slot-plugin-ci") /*id: 70194*/.then(require.bind(require, "mdbox-attachment-link") /*id: 888359*/).then(e => ({
      default: e.MdboxCILink
    }))))
  };
  let S = {
    slotType: "image",
    Content: reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => require.e("async-markdown-slot-plugin-ci") /*id: 70194*/.then(require.bind(require, "md-box-ci-image") /*id: 286260*/).then(e => ({
      default: e.MdBoxCIImage
    }))))
  };
  var imMessageFormatter = require("im-message-formatter") /*id: 906408*/;
  var chatResponseTableComponent = require("chat-response-table-component") /*id: 127927*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let I = (e, t) => {
    return {
      events: {
        onDownloadEvent: t.onClickDownloadAttachmentEvent,
        onClickAttachment: t.onClickAttachmentEvent
      },
      uriToUrlMap: safeJsonUtils.safeParse(e.ext?.code_interpreter_resource_url_map, {}),
      messageId: e.message_id
    };
  };
  let N = (e, t) => {
    return {
      events: {
        onDownloadEvent: t.onClickDownloadAttachmentEvent,
        onClickAttachment: t.onClickAttachmentEvent
      },
      uriToUrlMap: safeJsonUtils.safeParse(e.ext?.code_interpreter_resource_url_map, {}),
      messageId: e.message_id
    };
  };
  let E = {};
  let L = {};
  let P = {};
  let j = {};
  let A = {};
  let D = e => ({
    context: {
      message: e,
      conversationId: e.conversation_id
    },
    pluginProps: {
      codeblock: {}
    }
  });
  let O = e => {
    let {
      context: t,
      pluginProps: n
    } = D(e);
    return {
      context: t,
      messageId: e.message_id,
      pluginProps: {
        ...n,
        mindmap: P,
        mermaid: j,
        svg: L,
        html: A,
        "vega-lite": E
      }
    };
  };
  let M = (e, t) => {
    let n = I(e, t);
    let l = N(e, t);
    let i = O(e);
    let r = imMessageFormatter.formatMessage(e);
    return {
      Link: {
        default: C
      },
      LinkContext: n,
      Image: {
        default: S
      },
      ImageContext: l,
      CodeBlock: {
        mindmap: p,
        mermaid: m,
        svg: v,
        html: g,
        hsir: k,
        "vega-lite": c,
        geogebra: x,
        default: u
      },
      CodeBlockContext: i,
      Table: {
        default: {
          slotType: "table",
          Content: chatResponseTableComponent.ChatResponseTable
        }
      },
      TableContext: r
    };
  };
  require.d(exports, {
    getChatRenderConfig: function () {
      return M;
    }
  });
}