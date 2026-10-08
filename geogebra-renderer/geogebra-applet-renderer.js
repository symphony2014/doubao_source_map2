// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'c' to 'panzoomCoreModule'
// - Resolved require(615113) to 'panzoom-core-module'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'd' to 'warningIcon_1'
// - Resolved require(215884) to 'warning-icon_1'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'Z' to 'Panzoom' (module 615113)
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'Z' to 'WarningIcon' (module 215884)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: geogebra-renderer.5cd1de1c.js
         * chunkId: 29872
         * moduleId: 103419
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var panzoomCoreModule = require("panzoom-core-module") /*id: 615113*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var warningIcon_1 = require("warning-icon_1") /*id: 215884*/;
  (r = p || {}).True = "true";
  r.False = "false";
  r.Other = "other";
  var p = r;
  let f = e => {
    let t = e.match(/(\w+)\(([^)]*)\)/);
    if (t) {
      if (t[1] !== "ShowAxes") {
        return p.Other;
      } else if (t[2] === "true") {
        return p.True;
      } else {
        return p.False;
      }
    } else {
      return p.Other;
    }
  };
  let h = function (e, t, n, r, o = 791, a = 336, i = 0.001) {
    let l = r - t;
    return l !== 0 && Math.abs((n - e) / l - o / a) < i;
  };
  let m = e => {
    let t;
    let n = /ZoomIn\s*\(\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\)/g;
    let r = [];
    while ((t = n.exec(e)) !== null) {
      r.push({
        full: t[0],
        x1: parseFloat(t[1]),
        y1: parseFloat(t[2]),
        x2: parseFloat(t[3]),
        y2: parseFloat(t[4])
      });
    }
    return r;
  };
  let v = function (e, t, n, r, o = 5) {
    let a = n - e;
    let i = r - t;
    if (a === 0 || i === 0) {
      return false;
    }
    let l = a / i;
    return l <= o && 1 / l <= o;
  };
  let g = function (e, t, n, r, o = 791, a = 336) {
    let i = !(arguments.length > 6) || arguments[6] === undefined || arguments[6];
    if (!v(e, t, n, r)) {
      return [e, t, n, r];
    }
    let l = n - e;
    let c = r - t;
    let s = o / a;
    if (Math.abs(l / c - s) < 1e-12) {
      return [e, t, n, r];
    }
    let u = (e + n) / 2;
    let d = (t + r) / 2;
    let p = c * s;
    let f = u - p / 2;
    let h = u + p / 2;
    let m = l / s;
    if (i) {
      if (!(p < l)) {
        return [f, t, h, r];
      }
      {
        let t = l / s;
        return [e, d - t / 2, n, d + t / 2];
      }
    }
    {
      let o = l * c;
      if (Math.abs(p * c - o) <= Math.abs(l * m - o)) {
        return [f, t, h, r];
      } else {
        return [e, d - m / 2, n, d + m / 2];
      }
    }
  };
  let w = (e, t, n, r) => {
    try {
      if (e.length === 0) {
        return;
      }
      let o = e.length;
      let a = f(e[0]);
      if (a === p.False) {
        t.showAllObjects();
      } else if (a === p.True) {
        let a = m(e[o - 1]);
        if (a.length === 0) {
          return;
        }
        a.forEach(e => {
          if (!h(e.x1, e.y1, e.x2, e.y2)) {
            let o = g(e.x1, e.y1, e.x2, e.y2, n ?? 791, r ?? 336, true);
            let a = `ZoomIn(${o.map(e => Number(e.toFixed(2))).join(", ")})`;
            t.evalCommand(a);
          }
        });
      } else {
        t.showAllObjects();
      }
    } catch (e) {}
  };
  var y = {
    container: "container-_xgypA",
    hide: "hide-cDEcyz",
    spin: "spin-ozSqXp",
    "error-wrapper": "error-wrapper-rRdjMy",
    "error-container": "error-container-lz8vbN",
    "error-icon": "error-icon-pJk8X7",
    "error-text": "error-text-dIgzsv"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      code: i,
      className: p,
      onClick: f,
      onSuccess: h,
      onError: m
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let g = reactCoreLibraryReexport.useRef(null);
    let [x, _] = reactCoreLibraryReexport.useState(null);
    let [S, A] = reactCoreLibraryReexport.useState(false);
    let E = reactCoreLibraryReexport.useCallback(() => x == null ? undefined : x.evalCommand("ZoomOut(0.8)"), [x]);
    let M = reactCoreLibraryReexport.useCallback(() => x == null ? undefined : x.evalCommand("ZoomIn(0.8)"), [x]);
    let O = reactCoreLibraryReexport.useCallback(() => {
      let e = g.current;
      let t = j.current;
      let n = P.current;
      if (!e || !t || !(n == null ? undefined : n.firstChild)) {
        return;
      }
      let r = t.clientWidth;
      let o = t.clientHeight;
      let a = n.offsetWidth;
      let i = n.offsetHeight;
      if (a === 0 || i === 0) {
        return;
      }
      let l = Math.min(Math.min(r - 40, 800) / a, (o - 40) / i);
      e.pan(0, 0, {
        animate: false,
        relative: false
      });
      e.zoom(l, {
        animate: false
      });
    }, []);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      zoomIn: E,
      zoomOut: M,
      fit: O
    }));
    let [C, z] = reactCoreLibraryReexport.useState(false);
    let N = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(e => {
      z(true);
      if (m != null) {
        m(e);
      }
    }), []);
    let j = reactCoreLibraryReexport.useRef(null);
    let P = reactCoreLibraryReexport.useRef(null);
    let R = reactCoreLibraryReexport.useRef(false);
    let X = () => window.geogebraScriptLoaded === true;
    let L = () => {
      window.geogebraScriptLoaded = true;
    };
    let Y = {
      prerelease: false,
      width: P == null ? undefined : P.current?.clientWidth,
      height: P == null ? undefined : P.current?.clientHeight,
      showToolBar: false,
      appName: "classic",
      borderColor: "transparent",
      showMenuBar: false,
      showAlgebraInput: false,
      showResetIcon: false,
      enableLabelDrags: false,
      enableShiftDragZoom: true,
      enableRightClick: false,
      showToolBarHelp: false,
      errorDialogsActive: false,
      useBrowserForJS: false
    };
    function Z() {
      let n = P.current?.clientWidth || 0;
      let r = P.current?.clientHeight || 0;
      if (n === 0 || r === 0) {
        return false;
      }
      let o = {
        ...Y,
        width: n,
        height: r,
        appName: "geometry",
        appletOnLoad(e) {
          e.setAxesVisible(true, true);
          e.setPerspective("G");
          e.setGridVisible(true);
          e.showAllObjects();
          _(e);
          setTimeout(() => {
            A(true);
            if (h != null) {
              h();
            }
          }, 500);
        }
      };
      new window.GGBApplet(o, true).inject(P.current);
      R.current = true;
      return true;
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (X()) {
        Z();
        return;
      }
      let e = document.createElement("script");
      try {
        e.src = "https://www.geogebra.org/apps/deployggb.js";
        e.onload = () => {
          L();
          Z();
        };
        document.body.appendChild(e);
      } catch (e) {
        N(e);
      }
      return () => {
        document.body.removeChild(e);
        if (x) {
          x.remove();
        }
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (i && P.current && (g.current ||= panzoomCoreModule.Panzoom(P.current, {}), x)) {
        try {
          let n = i.split("\n").filter(e => e.trim().length);
          n.slice(0, -1).forEach(e => x.evalCommand(e));
          w(n, x, P.current.clientWidth ?? 791, P.current.clientHeight ?? 336);
        } catch (e) {
          N(e);
        }
      }
    }, [i, x]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!j.current) {
        return;
      }
      let e = new ResizeObserver(e => {
        if (e && e.length !== 0) {
          if (!R.current && X()) {
            Z();
          }
          O();
        }
      });
      e.observe(j.current);
      return () => e.disconnect();
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: j,
      onClick: f,
      className: l("w-full h-full relative", y.container, p),
      children: [!S && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute flex w-full justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          wrapperClassName: y.spin
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        ref: P,
        className: l("h-full w-full !transform-none", {
          [y.hide]: !S
        })
      }), C ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: y["error-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: y["error-container"],
          children: [reactJsxRuntimeCoreReexport.jsx(warningIcon_1.WarningIcon, {
            className: y["error-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: y["error-text"],
            children: v("reading_mindmap_toast_reAsk")
          })]
        })
      }) : null]
    });
  });
  require.r(exports);
  require.d(exports, {
    GeogebraRenderer: function () {
      return x;
    }
  });
}