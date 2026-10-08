// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'ThinkingQueryItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55821.62d46e89.js
         * chunkId: 55821
         * moduleId: 860711
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactLayoutPresenceManager = require("react-layout-presence-manager") /*id: 381418*/;
  var motionComponentFactory = require("motion-component-factory") /*id: 400749*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var thinkingUiClassNames = require("thinking-ui-class-names") /*id: 451526*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      title: t,
      desc: l,
      loading: o,
      classname: g,
      prefixIcon: p,
      hoverable: m = true,
      overrideDesc: h,
      showSuffixIcon: f,
      query: M = [],
      onClick: N,
      renderContent: v,
      parseQueryText: _ = e => `\u{201C}${e || ""}\u{201D}`
    } = e;
    let [x, j] = reactCoreLibraryReexport.useState(0);
    let [A, I] = reactCoreLibraryReexport.useState(true);
    let y = M.length === 0;
    let D = h || l;
    reactCoreLibraryReexport.useEffect(() => {
      if (!A || y) {
        return;
      }
      let e = setInterval(() => {
        if (x < M.length - 1) {
          j(e => e + 1);
        } else {
          clearInterval(e);
          I(false);
        }
      }, 600);
      return () => clearInterval(e);
    }, [x, A]);
    let k = !y && o ? reactJsxRuntimeCoreReexport.jsx(reactLayoutPresenceManager.LayoutPresence, {
      mode: "wait",
      children: reactJsxRuntimeCoreReexport.jsx(motionComponentFactory.motionComponent.div, {
        layoutId: "query-text",
        initial: {
          opacity: 0,
          y: 0
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: 0
        },
        transition: {
          duration: 0.1
        },
        className: s(thinkingUiClassNames.classNames.title, "inline-block whitespace-nowrap truncate"),
        children: _(M[x])
      }, x)
    }) : undefined;
    let w = D && reactJsxRuntimeCoreReexport.jsx("div", {
      className: thinkingUiClassNames.classNames.desc,
      children: h || `"${l}"`
    });
    let S = e => e ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(thinkingUiClassNames.classNames.title, {
        "font-normal!": false
      }),
      children: e
    }) : null;
    let b = v ? v({
      renderTitle: S,
      title: t,
      queryNode: k,
      desNode: w
    }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [S(t), w, k]
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s(thinkingUiClassNames.classNames.container, g, {
        [thinkingUiClassNames.classNames["container-hoverable"]]: m
      }),
      onClick: N,
      children: [o ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        wrapperClassName: thinkingUiClassNames.classNames.spin,
        size: "small"
      }) : p, b, f && !o && reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
        className: s(thinkingUiClassNames.classNames.icon, "text-12 -ml-4")
      })]
    });
  };
  require.d(exports, {
    ThinkingQueryItem: function () {
      return g;
    }
  });
}