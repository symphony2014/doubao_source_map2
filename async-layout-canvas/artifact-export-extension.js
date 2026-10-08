// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'getExportExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 364596
         */
module.exports = function (module, exports, require) {
  var layoutPptExporter = require("layout-ppt-exporter") /*id: 433821*/;
  let r = e => {
    switch (e) {
      case layoutPptExporter.ExportType.ExportPPT:
        return "pptx";
      case layoutPptExporter.ExportType.ExportPDF:
        return "pdf";
      case layoutPptExporter.ExportType.ExportHTMLZIP:
        return "html";
      default:
        return "";
    }
  };
  require.d(exports, {
    getExportExtension: function () {
      return r;
    }
  });
}