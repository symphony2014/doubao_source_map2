// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'Button'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.d9f0e7db.js
         * chunkId: 44611
         * moduleId: 899242
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 17,
    fill: "none",
    viewBox: "0 0 17 17",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#white-loading_svg__a)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        stroke: "url(#white-loading_svg__b)",
        strokeLinecap: "round",
        strokeWidth: 1.778,
        d: "M15.61 8.5A7.111 7.111 0 0 0 2.097 5.405"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "white-loading_svg__b",
        x1: 2.096,
        x2: 15.611,
        y1: 8.5,
        y2: 8.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopColor: "#fff",
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.399,
          stopColor: "#fff",
          stopOpacity: 0.5
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1,
          stopColor: "#fff"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "white-loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M.5.5h16v16H.5z"
        })
      })]
    })]
  });
  let c = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 17,
    height: 17,
    fill: "none",
    viewBox: "0 0 17 17",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("g", {
      clipPath: "url(#black-loading_svg__a)",
      children: reactJsxRuntimeCoreReexport.jsx("path", {
        stroke: "url(#black-loading_svg__b)",
        strokeLinecap: "round",
        strokeWidth: 1.778,
        d: "M15.61 8.5A7.111 7.111 0 0 0 2.097 5.405"
      })
    }), reactJsxRuntimeCoreReexport.jsxs("defs", {
      children: [reactJsxRuntimeCoreReexport.jsxs("linearGradient", {
        id: "black-loading_svg__b",
        x1: 2.096,
        x2: 15.611,
        y1: 8.5,
        y2: 8.5,
        gradientUnits: "userSpaceOnUse",
        children: [reactJsxRuntimeCoreReexport.jsx("stop", {
          stopOpacity: 0
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 0.399,
          stopOpacity: 0.5
        }), reactJsxRuntimeCoreReexport.jsx("stop", {
          offset: 1
        })]
      }), reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "black-loading_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#000",
          d: "M.5.5h16v16H.5z"
        })
      })]
    })]
  });
  var u = {
    button: "button-PgvIWh",
    clickable: "clickable-lhEBND",
    "type-primary": "type-primary-E2c9e5",
    typePrimary: "type-primary-E2c9e5",
    "type-dashed": "type-dashed-JJCe_r",
    typeDashed: "type-dashed-JJCe_r",
    "type-danger": "type-danger-A2WVaH",
    typeDanger: "type-danger-A2WVaH",
    disabled: "disabled-VV18vy",
    "width-fit": "width-fit-jIb4dX",
    widthFit: "width-fit-jIb4dX",
    "width-full": "width-full-Hzpzu1",
    widthFull: "width-full-Hzpzu1",
    loading: "loading-Hpz2Cf",
    rotate: "rotate-inUE7z",
    rotation: "rotation-_IiPC_"
  };
  let p = e => {
    let {
      disabled: t = false,
      loading: n = false,
      width: o = "full",
      type: p = "primary",
      onClick: h,
      onDisableClick: f,
      onLoadingClick: m,
      icon: g,
      className: _,
      style: v,
      children: b,
      ...y
    } = e;
    let [C, w] = reactCoreLibraryReexport.useState(false);
    let [x, E] = reactCoreLibraryReexport.useState(false);
    let O = C || n;
    let j = x || t;
    let S = {
      setDisabled: E,
      setLoading: w
    };
    let k = async () => {
      if (O) {
        if (m != null) {
          m(S);
        }
        return;
      }
      if (j) {
        if (f != null) {
          f(S);
        }
        return;
      }
      let e = h == null ? undefined : h(S);
      if (e) {
        w(true);
        try {
          await e;
        } finally {
          w(false);
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(u.button, _, u[`type-${p}`], isStringTypeCheck.isString(o) ? u[`width-${o}`] : undefined, {
        [u.disabled]: j,
        [u.clickable]: !!h && (!!m || !n) && !t
      }),
      style: {
        ...v,
        width: isNumberUtil.isNumber(o) ? o : undefined
      },
      onClick: k,
      "data-disabled": t,
      ...y,
      children: [O ? p === "dashed" ? reactJsxRuntimeCoreReexport.jsx(c, {
        className: s(u.loading, u.rotate)
      }) : reactJsxRuntimeCoreReexport.jsx(d, {
        className: s(u.loading, u.rotate)
      }) : g, b]
    });
  };
  require.d(exports, {
    Button: function () {
      return p;
    }
  });
}