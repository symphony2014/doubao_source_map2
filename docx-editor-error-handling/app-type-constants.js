// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getAppTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 214968
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {}).IMAGE = "IMAGE";
  n.MINI_APP = "MINI_APP";
  n.THIRD_PARTY = "THIRD_PARTY";
  let o = n;
  require.d(exports, {
    getAppTypes: function () {
      return o;
    }
  });
}