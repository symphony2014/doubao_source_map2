// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LoadingIllustration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 701444
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var o = require.p + "static/svg/illustration_empty_positive_loading_light.07c1d7e1.svg";
  function a(e) {
    let n;
    let {
      size: i = "normal",
      svgSource: o
    } = e;
    n = typeof (n = i === "normal" ? 120 : i === "small" ? 100 : i) == "number" ? `${n}px` : n;
    let a = {
      ...e.style,
      width: n,
      height: n,
      overflow: "hidden",
      backgroundSize: `auto ${n}`,
      backgroundImage: `url(${o})`
    };
    let l = "ud__illustration__loading-container " + (e.classNames || "");
    return reactCoreLibraryReexport.createElement("div", {
      className: l,
      style: a
    });
  }
  function l(e) {
    return reactCoreLibraryReexport.createElement(a, {
      ...e,
      svgSource: o
    });
  }
  var c = require.p + "static/svg/illustration_empty_positive_loading_dark.1abf5133.svg";
  function s(e) {
    return reactCoreLibraryReexport.createElement(a, {
      ...e,
      svgSource: c
    });
  }
  var themeProvider = require("theme-provider") /*id: 420169*/;
  function d(e) {
    if (themeProvider.useTheme() === "light") {
      return reactCoreLibraryReexport.createElement(l, {
        ...e
      });
    } else {
      return reactCoreLibraryReexport.createElement(s, {
        ...e
      });
    }
  }
  require.d(exports, {
    LoadingIllustration: function () {
      return d;
    }
  });
}