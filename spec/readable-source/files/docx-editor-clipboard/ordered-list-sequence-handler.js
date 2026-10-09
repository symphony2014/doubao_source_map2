// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D6' to 'updateOrderedListSequence'
// - Renamed export 'ac' to 'resetCopySequence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 130693
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function i(e, o, r) {
    let i = o.find(e => {
      var o;
      return ((o = r[e]) === null || o === undefined ? undefined : o.snapshot.type) === docBlockTypeConstants.blockTypeConstants.ORDERED;
    });
    if (!i) {
      return;
    }
    let a = r[i];
    if (a.snapshot.seq && a.snapshot.seq !== "auto") {
      return;
    }
    let l = e.orderMap.get(a.id) || 1;
    a.snapshot.seq = String(l);
  }
  function a(e) {
    if (e && e.seq === "copy") {
      e.seq = "auto";
    }
  }
  require("compatible-editor-context_1") /*id: 2711*/;
  require("translation-suffix-utils") /*id: 203170*/;
  require.d(exports, {
    updateOrderedListSequence: function () {
      return i;
    },
    resetCopySequence: function () {
      return a;
    }
  });
}