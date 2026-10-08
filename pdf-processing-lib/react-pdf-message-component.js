// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PdfMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 727672
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function n({
    children: t,
    type: e
  }) {
    return reactCoreLibraryReexport.createElement("div", {
      className: `react-pdf__message react-pdf__message--${e}`
    }, t);
  }
  require.d(exports, {
    PdfMessage: function () {
      return n;
    }
  });
}