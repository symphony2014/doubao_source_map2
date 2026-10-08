// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'ThreadTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 878038
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {}).Blank = "blank";
  n.Markdown = "md";
  n.Chat = "chat";
  n.Template = "template";
  n.Duplicate = "duplicate";
  n.SpaceImport = "space_import";
  n.FileImport = "file_import";
  let r = n;
  require.d(exports, {
    ThreadTypes: function () {
      return r;
    }
  });
}