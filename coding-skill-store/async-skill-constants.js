// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'processStatus'
// - Renamed export 'p' to 'resourceType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 292316
         */
module.exports = function (module, exports, require) {
  var a;
  var o;
  (a = {}).FILE = "FILE";
  a.DIR = "DIR";
  a.REPO = "REPO";
  a.DATA_ANALYSIS = "DATA_ANALYSIS";
  a.IMAGE = "IMAGE";
  let n = a;
  (o = {})[o.Start = 1] = "Start";
  o[o.Finish = 2] = "Finish";
  o[o.Updated = 3] = "Updated";
  o[o.Rollbacked = 4] = "Rollbacked";
  let i = o;
  require.d(exports, {
    processStatus: function () {
      return i;
    },
    resourceType: function () {
      return n;
    }
  });
}