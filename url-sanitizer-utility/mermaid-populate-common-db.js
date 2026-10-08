// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'populateCommonDb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 341035
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    var r;
    var n;
    var i;
    if (e.accDescr) {
      if ((r = t.setAccDescription) !== null && r !== undefined) {
        r.call(t, e.accDescr);
      }
    }
    if (e.accTitle) {
      if ((n = t.setAccTitle) !== null && n !== undefined) {
        n.call(t, e.accTitle);
      }
    }
    if (e.title) {
      if ((i = t.setDiagramTitle) !== null && i !== undefined) {
        i.call(t, e.title);
      }
    }
  }
  require("mermaid-config-utils") /*id: 101498*/.setName(n, "populateCommonDb");
  require.d(exports, {
    populateCommonDb: function () {
      return n;
    }
  });
}