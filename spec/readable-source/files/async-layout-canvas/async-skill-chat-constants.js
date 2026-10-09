// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'skillStatus'
// - Renamed export 'P' to 'fieldNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 699048
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).Processing = "processing";
  i.Succeed = "succeed";
  i.Failed = "failed";
  i.Broken = "broken";
  let o = i;
  (r = {}).Status = "status";
  r.Artifact = "artifact";
  let a = r;
  require.d(exports, {
    skillStatus: function () {
      return o;
    },
    fieldNames: function () {
      return a;
    }
  });
}