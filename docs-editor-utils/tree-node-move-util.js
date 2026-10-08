// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'insertChildrenUtil'
// - Renamed export 'm' to 'moveChildrenUtil'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 497145
         */
module.exports = function (module, exports, require) {
  function o(e, n, r, o, l) {
    let c = [...n];
    e.removeChildren(r, n);
    i(e, c, o, l);
  }
  function i(e, n, r, o) {
    e.insertChildren(r, o, n);
    n.forEach(n => {
      e.replace(n, ["parent_id"], r);
    });
  }
  require.d(exports, {
    insertChildrenUtil: function () {
      return i;
    },
    moveChildrenUtil: function () {
      return o;
    }
  });
}