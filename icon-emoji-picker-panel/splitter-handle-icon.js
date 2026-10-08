// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'SplitterHandle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 830584
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function r(e) {
    var t = e.className;
    var n = e.style;
    var r = e.direction;
    var i = r === undefined ? "horizontal" : r;
    var u = e.hasStroke;
    var a = u !== undefined && u;
    return reactCoreLibraryReexport.createElement("svg", {
      width: i === "horizontal" ? 16 : 8,
      height: i === "horizontal" ? 8 : 16,
      viewBox: i === "horizontal" ? `0 ${0} ${16} ${8}` : `${0} 0 ${8} ${16}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      style: n
    }, reactCoreLibraryReexport.createElement("path", {
      className: `${t}__content`,
      d: i === "horizontal" ? a ? "M8-.5H0v1c1.553 0 3.033.664 4.065 1.825l2.814 3.166a1.5 1.5 0 002.242 0l2.814-3.166A5.438 5.438 0 0116 .5v-1H8z" : "M4.438 1.993L7.253 5.16a1 1 0 001.494 0l2.815-3.166A5.938 5.938 0 0116 0H0c1.696 0 3.311.725 4.438 1.993z" : a ? "M-.5 8v8h1c0-1.553.664-3.033 1.825-4.065l3.166-2.814a1.5 1.5 0 000-2.242L2.325 4.065A5.438 5.438 0 01.5 0h-1v8z" : "M1.993 11.562L5.16 8.747a1 1 0 000-1.494L1.993 4.438A5.938 5.938 0 010 0v16c0-1.696.725-3.311 1.993-4.438z"
    }));
  }
  require.d(exports, {
    SplitterHandle: function () {
      return r;
    }
  });
}