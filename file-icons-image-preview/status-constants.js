// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'statusTypes'
// - Renamed export 'x' to 'processStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 356183
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).Success = "success";
  i.Processing = "processing";
  i.Failed = "failed";
  let o = i;
  (r = {}).Success = "success";
  r.Processing = "processing";
  r.Failed = "failed";
  let l = r;
  require.d(exports, {
    statusTypes: function () {
      return o;
    },
    processStatus: function () {
      return l;
    }
  });
}