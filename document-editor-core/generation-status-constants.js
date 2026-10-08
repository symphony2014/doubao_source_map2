// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'generationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 505195
         */
module.exports = function (module, exports, require) {
  var r;
  (r = {}).NotStart = "not_start";
  r.StartNotSend = "start_not_send";
  r.Generating = "generating";
  r.WaitForFeedback = "wait_for_feedback";
  let i = r;
  require.d(exports, {
    generationStatus: function () {
      return i;
    }
  });
}