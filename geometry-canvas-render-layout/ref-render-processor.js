// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EP' to 'getRefHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 869089
         */
module.exports = function (module, exports, require) {
  function i(t) {
    var e = t.render();
    if (e) {
      if (e) {
        e.setAttr("ref", t.groupRef);
      }
    } else {
      t.groupRef.current = null;
    }
    return e;
  }
  require.d(exports, {
    getRefHandler: function () {
      return i;
    }
  });
}