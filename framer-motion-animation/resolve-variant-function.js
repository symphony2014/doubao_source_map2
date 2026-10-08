// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'resolveVariant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 368107
         */
module.exports = function (module, exports, require) {
  function n(t) {
    let e = [{}, {}];
    if (t != null) {
      t.values.forEach((t, i) => {
        e[0][i] = t.get();
        e[1][i] = t.getVelocity();
      });
    }
    return e;
  }
  function r(t, e, i, r) {
    if (typeof e == "function") {
      let [s, o] = n(r);
      e = e(i !== undefined ? i : t.custom, s, o);
    }
    if (typeof e == "string") {
      e = t.variants && t.variants[e];
    }
    if (typeof e == "function") {
      let [s, o] = n(r);
      e = e(i !== undefined ? i : t.custom, s, o);
    }
    return e;
  }
  require.d(exports, {
    resolveVariant: function () {
      return r;
    }
  });
}