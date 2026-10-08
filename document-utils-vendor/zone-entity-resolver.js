// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'getZoneEntity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 702095
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    var r;
    var n;
    var i = e.getContentState();
    var o = i.getZoneState(t);
    var a = (r = o == null ? undefined : o.parent) === null || r === undefined ? undefined : r.getZoneId();
    return a && ((n = i.getZoneState(a)) === null || n === undefined ? undefined : n.getEntities([["zoneId", t]])[0]) || null;
  }
  require.d(exports, {
    getZoneEntity: function () {
      return n;
    }
  });
}