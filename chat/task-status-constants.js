// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'TaskStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 100834
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.NotStarted = 0] = "NotStarted";
  i[i.Loading = 1] = "Loading";
  i[i.Success = 2] = "Success";
  i[i.Failed = 3] = "Failed";
  let r = i;
  require.d(exports, {
    TaskStatus: function () {
      return r;
    }
  });
}