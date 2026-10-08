// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ArrowLeftRtlIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 232297
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var a = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M11.207 3.793a1 1 0 0 0-1.414 0l-7.5 7.5a1 1 0 0 0 0 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 1 0 0-2H5.414l5.793-5.793a1 1 0 0 0 0-1.414",
      clipRule: "evenodd"
    })
  }), {}));
  require.d(exports, {
    ArrowLeftRtlIcon: function () {
      return a;
    }
  });
}