// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'CanvasSamanthaButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 353355
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var s = {
    "canvas-button": "canvas-button-_Fiq0m",
    canvasButton: "canvas-button-_Fiq0m",
    "canvas-button-size-medium": "canvas-button-size-medium-fFlX2l",
    canvasButtonSizeMedium: "canvas-button-size-medium-fFlX2l",
    "canvas-button-size-small": "canvas-button-size-small-z5TrgF",
    canvasButtonSizeSmall: "canvas-button-size-small-z5TrgF",
    "canvas-button-type-quartary": "canvas-button-type-quartary-XrCqBx",
    canvasButtonTypeQuartary: "canvas-button-type-quartary-XrCqBx"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      className: n,
      size: r = "small",
      type: i = "quartary",
      ...c
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      ref: t,
      className: a(s["canvas-button"], s[`canvas-button-size-${r}`], s[`canvas-button-type-${i}`], n),
      size: r,
      type: i,
      ...c
    });
  });
  require.d(exports, {
    CanvasSamanthaButton: function () {
      return c;
    }
  });
}