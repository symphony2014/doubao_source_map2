// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'PdfScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 407457
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var scrollIntoViewWrapper = require("scroll-into-view-wrapper") /*id: 180637*/;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var c = {
    container: "container-eMbSIS",
    item: "item-m0jC0z",
    "scroll-baseline": "scroll-baseline-TlcJzs",
    scrollBaseline: "scroll-baseline-TlcJzs",
    preview: "preview-Xw8qVo",
    vertical: "vertical-gXe_Vq",
    horizontal: "horizontal-KQbRoX",
    text: "text-xbFHXw",
    hoverable: "hoverable-NFQqhs",
    selected: "selected-n0dwkX"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e) {
    let {
      className: t,
      style: n,
      dataSource: l,
      renderItem: d,
      renderText: h,
      itemKey: p,
      direction: f = "vertical",
      autoScroll: g = true,
      defaultValue: m,
      value: v,
      onChange: x
    } = e;
    let [b, w] = useControlledStateHook.useControlledState({
      defaultValue: m,
      value: v,
      onChange: x
    });
    let [y, S] = reactCoreLibraryReexport.useState();
    let N = reactCoreLibraryReexport.useRef([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (g && !N.current.includes(b)) {
        S(b);
      }
    }, [g, b]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: i(c.container, t),
      style: n,
      children: (l == null ? undefined : l.length) ? l.map(e => {
        let t = p(e);
        return reactJsxRuntimeCoreReexport.jsx(scrollIntoViewWrapper.ScrollIntoViewWrap, {
          enabled: t === y,
          children: n => reactJsxRuntimeCoreReexport.jsxs(reactIntersectionObserver.InView, {
            className: i(c.item, c.hoverable, {
              [c.selected]: t === b
            }),
            threshold: 1,
            onClick: () => {
              w(t);
            },
            onChange: e => {
              if (e) {
                N.current.push(t);
              } else {
                N.current = N.current.filter(e => e !== t);
              }
            },
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              ref: n,
              className: c["scroll-baseline"]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: i(c.preview, c[f]),
              children: d(e)
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: c.text,
              children: h(e)
            })]
          })
        }, t);
      }) : reactJsxRuntimeCoreReexport.jsxs("div", {
        className: c.item,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: i(c.preview, c[f])
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c.text,
          children: m
        })]
      })
    });
  }
  require.d(exports, {
    PdfScrollView: function () {
      return d;
    }
  });
}