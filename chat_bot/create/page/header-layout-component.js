// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'HeaderLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 949835
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  let l = reactCoreLibraryReexport.createContext({}).Provider;
  var o = {
    container: "container-nnayrU",
    "hide-background": "hide-background-pTL1Xf",
    inner: "inner-eY5Caq",
    hidden: "hidden-pkI4yM",
    left: "left-lbUoiv",
    center: "center-dTpNSY",
    right: "right-vYdgqN"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      left: t,
      center: n,
      right: i,
      className: d,
      innerClassName: c,
      backgroundVisible: u = true,
      autoCenter: h = true,
      leftClassName: f,
      rightClassName: m
    } = e;
    let [v, p] = reactCoreLibraryReexport.useState(!h);
    reactCoreLibraryReexport.useEffect(() => {
      if (h) {
        p(true);
      }
    }, [h]);
    let g = e => {
      let {
        leftContainerRef: r,
        rightContainerRef: l,
        leftMinWidth: d,
        rightMinWidth: c
      } = e;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          ref: r,
          className: a(o.left, f),
          style: {
            minWidth: c
          },
          children: t
        }), n && reactJsxRuntimeCoreReexport.jsx("div", {
          className: o.center,
          children: n
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: l,
          className: a(o.right, m),
          style: {
            minWidth: d
          },
          children: i
        })]
      });
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(o.container, d, {
        [o["hide-background"]]: !u
      }),
      children: [h && reactJsxRuntimeCoreReexport.jsx(l, {
        value: {
          isOffscreen: true
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: a(o.inner, o.hidden),
          children: g({
            leftContainerRef: undefined,
            rightContainerRef: undefined
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: a(o.inner, c, {
          [o.hidden]: !v
        }),
        children: g({
          leftMinWidth: undefined,
          rightMinWidth: undefined
        })
      })]
    });
  };
  require.d(exports, {
    HeaderLayout: function () {
      return d;
    }
  });
}