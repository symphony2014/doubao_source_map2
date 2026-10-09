// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'platformTypes'
// - Renamed export 'w' to 'HostPlatformService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 857478
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).Web = "web";
  i.LocalDesktop = "local_desktop";
  let o = i;
  let a = Symbol("IFlowDoCHostPlatformService");
  require.d(exports, {
    platformTypes: function () {
      return o;
    },
    HostPlatformService: function () {
      return a;
    }
  });
}