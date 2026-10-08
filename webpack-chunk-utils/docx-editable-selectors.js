// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'selectEditing'
// - Renamed export 'b' to 'selectRevising'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 195725
         */
module.exports = function (module, exports, require) {
  let i = require("create-selector") /*id: 228436*/.createSelector(function (e) {
    var n;
    if ((n = e.docx) === null || n === undefined) {
      return undefined;
    } else {
      return n.editable.editing;
    }
  }, e => e);
  let o = e => e.docx.editable.revising;
  require.d(exports, {
    selectEditing: function () {
      return i;
    },
    selectRevising: function () {
      return o;
    }
  });
}