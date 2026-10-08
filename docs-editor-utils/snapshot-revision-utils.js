// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'upsertRevision'
// - Renamed export 'i' to 'removeRevision'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 696424
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    let {
      snapshot: r
    } = e;
    if (r == null ? undefined : r.revisions) {
      return r.revisions.findIndex(e => e.revisionId === n);
    } else {
      return -1;
    }
  }
  function i(e, n, r) {
    let {
      snapshot: i,
      id: l
    } = n;
    let c = o(n, r.revisionId);
    if (i.revisions) {
      if (c > -1) {
        e.replace(l, ["revisions", c], r);
      } else {
        e.insert(l, ["revisions", 0], r);
      }
    } else {
      e.replace(l, ["revisions"], [r]);
    }
  }
  function l(e, n, r) {
    let i = o(n, r.revisionId);
    if (!(i < 0)) {
      e.remove(n.id, ["revisions", i]);
    }
  }
  require.d(exports, {
    upsertRevision: function () {
      return i;
    },
    removeRevision: function () {
      return l;
    }
  });
}