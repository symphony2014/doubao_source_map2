// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'RtlIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 383994
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var n = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4h-7v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H4v3a1 1 0 1 1-2 0z"
    })
  }), {}));
  require.d(exports, {
    RtlIcon: function () {
      return n;
    }
  });
}