// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'groupByArtifactKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 158258
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let t = new Map();
    e.forEach(e => {
      let {
        artifactKey: r = ""
      } = e;
      if (t.has(r)) {
        var n;
        if ((n = t.get(r)) !== null && n !== undefined) {
          n.push(e);
        }
      } else {
        t.set(r, [e]);
      }
    });
    return Array.from(t.values());
  }
  require.d(exports, {
    groupByArtifactKey: function () {
      return n;
    }
  });
}