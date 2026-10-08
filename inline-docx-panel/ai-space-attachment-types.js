// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'AttachmentTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 376069
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.Unknown = 0] = "Unknown";
  n[n.File = 1] = "File";
  n[n.Image = 2] = "Image";
  n[n.Audio = 3] = "Audio";
  n[n.Video = 4] = "Video";
  n[n.URL = 5] = "URL";
  let a = n;
  require.d(exports, {
    AttachmentTypes: function () {
      return a;
    }
  });
}