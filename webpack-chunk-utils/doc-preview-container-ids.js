// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B1' to 'flowDocSelector'
// - Renamed export 'Kd' to 'flowDocContainer'
// - Renamed export 'go' to 'docxWrapperClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 449485
         */
module.exports = function (module, exports, require) {
  let i = "flow-doc-preview-container";
  let o = `.${i}`;
  let a = "docx-preview-container-wrapper";
  require.d(exports, {
    flowDocSelector: function () {
      return o;
    },
    flowDocContainer: function () {
      return i;
    },
    docxWrapperClass: function () {
      return a;
    }
  });
}