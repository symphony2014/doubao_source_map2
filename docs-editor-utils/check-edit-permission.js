// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'checkEditPermission'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 849362
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    let r;
    let o = "editPermission";
    let {
      config: i
    } = e.editorAPI;
    if (i.get(o)) {
      n();
    } else {
      r = i.change$.subscribe(e => {
        if (e.has(o) && i.get(o)) {
          n();
          if (r != null) {
            r.unsubscribe();
          }
        }
      });
    }
    return r;
  }
  require.d(exports, {
    checkEditPermission: function () {
      return o;
    }
  });
}