// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'SamanthaTag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 79739
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var l = {
    "samantha-tag": "samantha-tag-MHLaqD",
    samanthaTag: "samantha-tag-MHLaqD",
    default: "default-idhuOY",
    large: "large-l03Irx",
    small: "small-UcxgUE",
    selected: "selected-aETUX_",
    disabled: "disabled-vUgmVS",
    underline: "underline-K2IIgE",
    "icon-wrapper": "icon-wrapper-t5r9ZF",
    iconWrapper: "icon-wrapper-t5r9ZF"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      icon: r,
      size: i = "large",
      theme: s = "default",
      isSelected: d,
      onClick: c,
      label: u,
      disabled: h,
      ...f
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      onClick: c,
      "aria-selected": d,
      className: a(l["samantha-tag"], l[i], l[s], {
        [l.selected]: d,
        [l.icon]: !!r
      }, {
        [l.disabled]: h
      }, n),
      ...f,
      children: [r ? reactJsxRuntimeCoreReexport.jsx("span", {
        className: l["icon-wrapper"],
        children: r
      }) : null, reactJsxRuntimeCoreReexport.jsx("span", {
        className: a({
          "tag-text-actived": d
        }),
        children: u
      })]
    });
  });
  require.d(exports, {
    SamanthaTag: function () {
      return s;
    }
  });
}