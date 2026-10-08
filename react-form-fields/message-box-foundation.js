// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UG' to 'MessageBoxFoundation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 238658
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    let n = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => () => {
      clearTimeout(n.current);
    }, []);
    return {
      value: e,
      mouseEvents: {
        onMouseEnter: () => {
          clearTimeout(n.current);
          n.current = setTimeout(() => t(true), 150);
        },
        onMouseLeave: () => {
          clearTimeout(n.current);
          n.current = setTimeout(() => t(false), 150);
        }
      }
    };
  };
  let c = () => {
    let {
      ref: e,
      inView: t
    } = reactIntersectionObserver_1.useInView();
    let [n, i] = reactCoreLibraryReexport.useState(t);
    let a = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      clearTimeout(a.current);
      a.current = setTimeout(() => {
        i(t);
      }, 150);
      return () => {
        clearTimeout(a.current);
      };
    }, [t]);
    return {
      inView: n,
      ref: e
    };
  };
  let d = e => {
    let {
      inlineEnd: t,
      className: n,
      MessageBoxTopFoundation: r,
      MessageBoxLeftFoundation: o,
      MessageBoxCenterFoundation: i,
      MessageBoxBottomFoundation: d,
      MessageBoxRightFoundation: u,
      dataAttributes: p
    } = e;
    let {
      value: f,
      mouseEvents: h
    } = l();
    let {
      ref: m,
      inView: v
    } = c();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ...p,
      ref: m,
      ...h,
      className: a("flex flex-row w-full", {
        "justify-end": t
      }, n),
      children: [o && reactJsxRuntimeCoreReexport.jsx(o, {
        inView: v,
        mouseOver: f
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex flex-col flex-grow max-w-full min-w-0",
        children: [r && reactJsxRuntimeCoreReexport.jsx(r, {
          inView: v,
          mouseOver: f
        }), i && reactJsxRuntimeCoreReexport.jsx(i, {
          inView: v,
          mouseOver: f
        }), d && reactJsxRuntimeCoreReexport.jsx(d, {
          inView: v,
          mouseOver: f
        })]
      }), u && reactJsxRuntimeCoreReexport.jsx(u, {
        inView: v,
        mouseOver: f
      })]
    });
  };
  require.d(exports, {
    MessageBoxFoundation: function () {
      return d;
    }
  });
}