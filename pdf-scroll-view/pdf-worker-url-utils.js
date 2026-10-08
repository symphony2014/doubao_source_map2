// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getPdfWorkerUrl'
// - Renamed export 'k' to 'createScriptBlobUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 103897
         */
module.exports = function (module, exports, require) {
  let r = () => new URL(require("pdf-worker-asset-path") /*id: 193251*/, require.b).toString();
  let a = e => URL.createObjectURL(new Blob([e], {
    type: "application/javascript"
  }));
  require.d(exports, {
    getPdfWorkerUrl: function () {
      return r;
    },
    createScriptBlobUrl: function () {
      return a;
    }
  });
}