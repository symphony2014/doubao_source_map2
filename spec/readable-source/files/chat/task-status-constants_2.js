// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'TaskStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 654066
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.Loading = 0] = "Loading";
  i[i.Success = 1] = "Success";
  i[i.Failed = 2] = "Failed";
  let r = i;
  require.d(exports, {
    TaskStatus: function () {
      return r;
    }
  });
}