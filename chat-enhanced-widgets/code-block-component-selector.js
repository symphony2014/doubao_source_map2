// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'r' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'i' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(46941) to 'prism-code-block-components'
// - Resolved require.bind(523030) to 'code-block-component'
// - Resolved require.e(89990) to 'd3-interpolation-utils'
// - Resolved require.e(41069) to 'd3-axis-svg-geometry'
// - Resolved require.e(5374) to 'html-parser'
// - Resolved require.e(58010) to 'dom-to-image-utils'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(14702) to 'mindmap-visualization'
// - Resolved require.bind(254524) to 'mindmap-component'
// - Resolved require.e(89990) to 'd3-interpolation-utils'
// - Resolved require.e(41069) to 'd3-axis-svg-geometry'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(34190) to 'mermaid-core-renderer'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(27139) to 'mermaid-dom-export-utilities'
// - Resolved require.bind(629650) to 'mermaid-chart-component'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(82098) to 'svg-diagram-panzoom-viewer'
// - Resolved require.bind(287839) to 'svg-diagram-view'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(54121) to 'html-diagram-renderer'
// - Resolved require.bind(52564) to 'html-diagram-component'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(36489) to 'diagram-export-utils'
// - Resolved require.bind(270812) to 'vega-lite-diagram-component'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(80073) to 'geogebra-diagram-renderer'
// - Resolved require.bind(873918) to 'geogebra-diagram-component'
// - Resolved require.e(33965) to 'semi-tabs-component'
// - Resolved require.e(93508) to 'code-block-component'
// - Resolved require.e(48626) to 'diagram-renderer-export'
// - Resolved require.bind(476483) to 'hsir-diagram-component'
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 346427
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  let a = () => ({
    enableGeogebraCode: chatFgStoreHooks.getSourceValue("enable_geogebra_code", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1"
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("prism-code-block-components") /*id: 46941*/.then(require.bind(require, "code-block-component") /*id: 523030*/).then(e => ({
      default: e.MdboxCodeBlock
    }))
  }));
  let c = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("html-parser") /*id: 5374*/, require.e("dom-to-image-utils") /*id: 58010*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("mindmap-visualization") /*id: 14702*/]).then(require.bind(require, "mindmap-component") /*id: 254524*/).then(e => ({
      default: e.Mindmap
    }))
  }));
  let u = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("semi-tabs-component") /*id: 33965*/, require.e("mermaid-core-renderer") /*id: 34190*/, require.e("code-block-component") /*id: 93508*/, require.e("mermaid-dom-export-utilities") /*id: 27139*/]).then(require.bind(require, "mermaid-chart-component") /*id: 629650*/).then(e => ({
      default: e.Mermaid
    }))
  }));
  let m = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("svg-diagram-panzoom-viewer") /*id: 82098*/]).then(require.bind(require, "svg-diagram-view") /*id: 287839*/).then(e => ({
      default: e.SVGDiagram
    }))
  }));
  let h = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("html-diagram-renderer") /*id: 54121*/]).then(require.bind(require, "html-diagram-component") /*id: 52564*/).then(e => ({
      default: e.HTMLDiagram
    }))
  }));
  let _ = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("diagram-export-utils") /*id: 36489*/]).then(require.bind(require, "vega-lite-diagram-component") /*id: 270812*/).then(e => ({
      default: e.VegaLiteDiagram
    }))
  }));
  let p = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("geogebra-diagram-renderer") /*id: 80073*/]).then(require.bind(require, "geogebra-diagram-component") /*id: 873918*/).then(e => ({
      default: e.GeogebraDiagram
    }))
  }));
  let v = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("semi-tabs-component") /*id: 33965*/, require.e("code-block-component") /*id: 93508*/, require.e("diagram-renderer-export") /*id: 48626*/]).then(require.bind(require, "hsir-diagram-component") /*id: 476483*/).then(e => ({
      default: e.HSIRDiagram
    }))
  }));
  let f = e => {
    let {
      language: t,
      showMindMapOrMermaid: n = true,
      meta: o = ""
    } = e;
    let {
      enableGeogebraCode: l
    } = a();
    if (t === "mindmap" && n) {
      return reactJsxRuntimeCoreReexport.jsx(c, {
        ...e
      });
    } else if (t === "mermaid" && n) {
      return reactJsxRuntimeCoreReexport.jsx(u, {
        ...e
      });
    } else if (t === "svg") {
      return reactJsxRuntimeCoreReexport.jsx(m, {
        ...e
      });
    } else if (t === "html" && o.includes("type=\"renderer\"")) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        ...e
      });
    } else if (t === "vega-lite") {
      return reactJsxRuntimeCoreReexport.jsx(_, {
        ...e
      });
    } else if (t === "geogebra" && l) {
      return reactJsxRuntimeCoreReexport.jsx(p, {
        ...e
      });
    } else if (t === "hsir") {
      return reactJsxRuntimeCoreReexport.jsx(v, {
        ...e
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(d, {
        ...e
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    CodeBlockSplitter: function () {
      return f;
    }
  });
}