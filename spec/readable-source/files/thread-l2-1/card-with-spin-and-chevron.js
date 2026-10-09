// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'CardComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 22941
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var s = {
    container: "container-anQxBe",
    "container-hover": "container-hover-fmwq5b",
    title: "title-JswDpF",
    desc: "desc-YOYc5k",
    icon: "icon-I4NBYh",
    spin: "spin-Tq_Huq"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      title: n,
      isLoading: i = false,
      desc: l,
      hoverable: d,
      prefixIcon: u,
      showSuffixIcon: p = true,
      onClick: m
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: r(s.container, {
        [s["container-hover"]]: d
      }),
      onClick: m,
      children: [i ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        wrapperClassName: s.spin,
        size: "small"
      }) : u, reactJsxRuntimeCoreReexport.jsx("div", {
        className: s.title,
        children: n
      }), l && reactJsxRuntimeCoreReexport.jsx("div", {
        className: s.desc,
        children: `\u{201C}${l}\u{201D}`
      }), p && reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
        className: r(s.icon, "text-12 -ml-4")
      })]
    });
  });
  require.d(exports, {
    CardComponent: function () {
      return d;
    }
  });
}