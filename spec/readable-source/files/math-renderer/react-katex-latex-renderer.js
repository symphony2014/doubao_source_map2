// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'katexSafeRenderer'
// - Resolved require(851686) to 'katex-safe-renderer'
// - Renamed variable 'u' to 'reactMemoHooks'
// - Resolved require(573742) to 'react-memo-hooks'
// - Renamed variable 'i' to 'dompurifySanitizerWrapper'
// - Resolved require(37494) to 'dompurify-sanitizer-wrapper'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'NY' to 'useCachedMemo' (module 573742)
// - Updated imported property 'c' to 'renderLatexSafe' (module 851686)
// - Updated imported property 'm' to 'sanitizeContent' (module 37494)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 75906
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var katexSafeRenderer = require("katex-safe-renderer") /*id: 851686*/;
  var reactMemoHooks = require("react-memo-hooks") /*id: 573742*/;
  var dompurifySanitizerWrapper = require("dompurify-sanitizer-wrapper") /*id: 37494*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = t => {
    let {
      tex: n,
      mode: a,
      className: c,
      style: d,
      fallback: m,
      katexOptions: f
    } = t;
    let x = reactMemoHooks.useCachedMemo(() => katexSafeRenderer.renderLatexSafe(n, f), [n, f]);
    let h = reactMemoHooks.useCachedMemo(() => x ? null : katexSafeRenderer.renderLatexSafe(n, {
      ...f,
      displayMode: true
    }), [n, f, !!x]);
    let p = reactCoreLibraryReexport.useMemo(() => /^[a-zA-Z0-9\s]+$/.test(n.trim()), [n]);
    if (!m || x || h) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: l("container-mbkw8x", c, "math-inline", {
          "single-n2Ai8A": p,
          "block-Ppehzh": !!h
        }),
        style: d,
        dangerouslySetInnerHTML: {
          __html: dompurifySanitizerWrapper.sanitizeContent((x || h) ?? n)
        },
        "data-custom-copy-text": p ? n : `\\(${n}\\)`
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: m
      });
    }
  };
  var d = c;
  require.r(exports);
  require.d(exports, {
    KatexTex: function () {
      return c;
    },
    default: function () {
      return d;
    }
  });
}