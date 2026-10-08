// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'prismSyntaxHighlightCore'
// - Resolved require(908126) to 'prism-syntax-highlight-core'
// - Resolved require.e(17904) to 'core-utils'
// - Renamed variable 'd' to 'dompurifySanitizerWrapper'
// - Resolved require(37494) to 'dompurify-sanitizer-wrapper'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'm' to 'sanitizeContent' (module 37494)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 360333
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var prismSyntaxHighlightCore = require("prism-syntax-highlight-core") /*id: 908126*/;
  let s = null;
  let l = async () => {
    if (!s) {
      let {
        default: {
          languages: e = null
        } = {}
      } = await require.e("core-utils") /*id: 17904*/.then(require.t.bind(require, 899623, 23));
      s = e;
    }
    return s;
  };
  let u = e => {
    let [t, n] = reactCoreLibraryReexport.useState(s || prismSyntaxHighlightCore.languages);
    let i = async () => {
      let e = await l();
      if (e && e !== t) {
        n(e);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!t[e]) {
        i();
      }
    }, [t, e]);
    return t[e] || t.plaintext;
  };
  let c = (e, t) => {
    let n = t.toLowerCase();
    let i = u(n);
    return reactCoreLibraryReexport.useMemo(() => {
      try {
        return prismSyntaxHighlightCore.highlight(e, i, n);
      } catch (t) {
        return e;
      }
    }, [n, e, i]);
  };
  var dompurifySanitizerWrapper = require("dompurify-sanitizer-wrapper") /*id: 37494*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      code: t,
      language: n = "",
      className: r,
      style: i,
      dark: o = false
    } = e;
    let s = c(t, n);
    return reactJsxRuntimeCoreReexport.jsx("pre", {
      className: a("container-S2LAkl", r, n && `language-${n}`, {
        "dark-XEVr2F": o
      }),
      style: i,
      children: reactJsxRuntimeCoreReexport.jsx("code", {
        className: n && `language-${n}`,
        dangerouslySetInnerHTML: {
          __html: dompurifySanitizerWrapper.sanitizeContent(s)
        }
      })
    });
  };
  var p = h;
  require.r(exports);
  require.d(exports, {
    PrismCodeBlockHighlighter: function () {
      return h;
    },
    default: function () {
      return p;
    }
  });
}