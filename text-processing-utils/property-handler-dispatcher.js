// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'createPropertyHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 719028
         */
module.exports = function (module, exports, require) {
  let n = {}.hasOwnProperty;
  function i(e, t) {
    let r = t || {};
    function i(t, ...r) {
      let o = i.invalid;
      let u = i.handlers;
      if (t && n.call(t, e)) {
        let r = String(t[e]);
        o = n.call(u, r) ? u[r] : i.unknown;
      }
      if (o) {
        return o.call(this, t, ...r);
      }
    }
    i.handlers = r.handlers || {};
    i.invalid = r.invalid;
    i.unknown = r.unknown;
    return i;
  }
  require.d(exports, {
    createPropertyHandler: function () {
      return i;
    }
  });
}