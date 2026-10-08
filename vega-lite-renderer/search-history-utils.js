// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'vegaTransformsModule'
// - Resolved require(110158) to 'vega-transforms-module'
// - Renamed variable 'l' to 'stripJsonComments'
// - Resolved require(81198) to 'strip-json-comments'
// - Renamed variable 'o' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'a' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'warningIcon_1'
// - Resolved require(215884) to 'warning-icon_1'
// - Renamed variable 'c' to 'reactPanzoomHook'
// - Resolved require(872098) to 'react-panzoom-hook'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'K' to 'usePanzoom' (module 872098)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'Z' to 'stripJsonComments' (module 81198)
// - Updated imported property 'ZP' to 'aggregateTransform' (module 110158)
// - Updated imported property 'Z' to 'WarningIcon' (module 215884)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: vega-lite-renderer.9bb222c2.js
         * chunkId: 32683
         * moduleId: 985920
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var vegaTransformsModule = require("vega-transforms-module") /*id: 110158*/;
  var stripJsonComments = require("strip-json-comments") /*id: 81198*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var warningIcon_1 = require("warning-icon_1") /*id: 215884*/;
  var reactPanzoomHook = require("react-panzoom-hook") /*id: 872098*/;
  var v = {
    container: "container-IY4vZS",
    "error-wrapper": "error-wrapper-bK5vXA",
    "error-container": "error-container-Gp0a8T",
    "error-icon": "error-icon-ku32ax",
    "error-text": "error-text-UvhJcv"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = reactCoreLibraryReexport.forwardRef(function (e, n) {
    let {
      code: r,
      className: a,
      onClick: _,
      loading: w,
      onError: p
    } = e;
    let m = i18nTranslationUtils.useTranslationWithFallback();
    let [h, E] = reactCoreLibraryReexport.useState(null);
    let [x, L] = reactCoreLibraryReexport.useState(null);
    let {
      panzoomRef: b
    } = reactPanzoomHook.usePanzoom(h, x, {
      panzoomOptions: {},
      enableDoubleClickZoom: true,
      padding: 20,
      fullscreenMaxWidth: 800
    });
    let g = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = b.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.zoomIn();
      }
    }, [b]);
    let j = reactCoreLibraryReexport.useCallback(() => {
      var e;
      if ((e = b.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.zoomOut();
      }
    }, [b]);
    let k = reactCoreLibraryReexport.useCallback(() => {
      var e;
      var n;
      if ((n = b.current) === null || n === undefined) {
        return undefined;
      } else if ((e = n.fit) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(n);
      }
    }, [b]);
    reactCoreLibraryReexport.useImperativeHandle(n, () => ({
      zoomIn: g,
      zoomOut: j,
      fit: k
    }));
    let [z, A] = reactCoreLibraryReexport.useState(false);
    let C = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(e => {
      A(true);
      if (p != null) {
        p(e);
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      let e;
      if (w || !r || !x) {
        return;
      }
      try {
        e = JSON.parse(stripJsonComments.stripJsonComments(r));
      } catch (e) {
        C(e);
        return;
      }
      if (!e) {
        C(Error("parse error"));
        return;
      }
      let n = null;
      let t = 0;
      vegaTransformsModule.aggregateTransform(x, e, {
        actions: false
      }).then(e => {
        n = e == null ? undefined : e.view;
        t = window.setTimeout(() => {
          k();
          t = window.setTimeout(k, 100);
        }, 0);
      }, e => {
        C(e);
      });
      return () => {
        var e;
        clearTimeout(t);
        if (n != null && (e = n.finalize) !== null && e !== undefined) {
          e.call(n);
        }
      };
    }, [w, r, k, x]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!h) {
        return;
      }
      let e = new ResizeObserver(() => {
        k();
      });
      e.observe(h);
      return () => e.disconnect();
    }, [k, h]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: E,
      onClick: _,
      className: u("w-full h-full relative", v.container, a),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: L
      }), z ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: v["error-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: v["error-container"],
          children: [reactJsxRuntimeCoreReexport.jsx(warningIcon_1.WarningIcon, {
            className: v["error-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: v["error-text"],
            children: m("reading_mindmap_toast_reAsk")
          })]
        })
      }) : null]
    });
  });
  require.r(exports);
  require.d(exports, {
    VegaLiteRenderer: function () {
      return _;
    }
  });
}