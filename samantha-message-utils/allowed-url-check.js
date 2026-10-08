// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'isUrlAllowed'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79175.7881c099.js
         * chunkId: 79175
         * moduleId: 671850
         */
module.exports = function (module, exports, require) {
  let o = function (n, t = {}) {
    try {
      let o = new URL(n);
      return (!t.allowedProtocols || t.allowedProtocols.includes(o.protocol)) && (!t.allowedExtensions || t.allowedExtensions.map(n => n.toLowerCase()).includes(o.pathname.split(".").pop() ?? "")) && (!t.allowedHosts || t.allowedHosts.includes(o.host));
    } catch (n) {
      return false;
    }
  };
  require.d(exports, {
    isUrlAllowed: function () {
      return o;
    }
  });
}