// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'coverSourceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 650732
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {})[o.NONE = -1] = "NONE";
  o[o.Preset = 1] = "Preset";
  o[o.Customize = 2] = "Customize";
  o[o.Other = 3] = "Other";
  o[o.AICover = 4] = "AICover";
  let i = o;
  require.d(exports, {
    coverSourceType: function () {
      return i;
    }
  });
}