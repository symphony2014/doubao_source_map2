// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'AccessPermission'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 968819
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.None = 0] = "None";
  i[i.OnlyOwnerCanReadAndWrite = 1] = "OnlyOwnerCanReadAndWrite";
  i[i.OnlyOwnerCanRead = 2] = "OnlyOwnerCanRead";
  let o = i;
  require.d(exports, {
    AccessPermission: function () {
      return o;
    }
  });
}