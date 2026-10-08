// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'ScrollableContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35606.ec1d3ef0.js
         * chunkId: 35606
         * moduleId: 222035
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var a = {
    scrollable: "scrollable-GKVCtr",
    "scrollbar-large": "scrollbar-large-snDg2W",
    "vertical-scrollbar": "vertical-scrollbar-uKL2C1",
    "scrollbar-small": "scrollbar-small-oTarhc",
    "show-scrollbar": "show-scrollbar-tUlprL",
    "auto-show-scrollbar": "auto-show-scrollbar-nk0bqc",
    "children-wrapper": "children-wrapper-u5yVmn",
    "children-wrapper-horizontal": "children-wrapper-horizontal-ZOswU5"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      style: n,
      className: r,
      children: o,
      childrenWrapperClassName: c,
      direction: d = "vertical",
      scrollBarSize: u = "large",
      showScrollbar: h = "never",
      onScroll: p
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(a.scrollable, {
        [a["show-scrollbar"]]: h === "always",
        [a["auto-show-scrollbar"]]: h === "auto",
        [a["vertical-scrollbar"]]: d === "vertical",
        [a["scrollbar-large"]]: u === "large",
        [a["scrollbar-small"]]: u === "small"
      }, r),
      style: n,
      ref: t,
      onScroll: p,
      children: (() => {
        let e = isFunctionUtil_1.isFunction(o) ? o() : o;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: s(a["children-wrapper"], d === "horizontal" && a["children-wrapper-horizontal"], c),
          children: e
        });
      })()
    });
  });
  require.d(exports, {
    ScrollableContainer: function () {
      return c;
    }
  });
}