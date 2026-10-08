// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'getBlockChildren'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 615212
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e) {
    let {
      type: n
    } = e.data;
    if (n === docBlockTypeConstants.blockTypeConstants.TABLE) {
      return function (e) {
        let {
          cell_set: n
        } = e.data;
        let r = [];
        for (let e in n) {
          let o = n[e];
          r.push(o.block_id);
        }
        return r;
      }(e);
    } else {
      return e.data.children;
    }
  }
  require.d(exports, {
    getBlockChildren: function () {
      return i;
    }
  });
}