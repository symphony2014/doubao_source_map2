// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'getPdfFilename'
// - Renamed export 'Y' to 'toPdfFilename'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 46174
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  let a = "document.pdf";
  let l = e => e ? e.replace(/\.[^.]+$/i, "").concat(".pdf") : e;
  let i = e => {
    try {
      let {
        pathname: t
      } = new URL(e);
      let n = lastElementHelper.getLastElement(t.split("/"));
      let l = n ? n.toLowerCase().endsWith(".pdf") ? n : `${n}.pdf` : undefined;
      return l ?? a;
    } catch (e) {
      return a;
    }
  };
  require.d(exports, {
    getPdfFilename: function () {
      return i;
    },
    toPdfFilename: function () {
      return l;
    }
  });
}