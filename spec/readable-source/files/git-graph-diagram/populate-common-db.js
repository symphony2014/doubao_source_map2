// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'populateCommonDb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16050.dc89ca70.js
         * chunkId: 16050
         * moduleId: 521289
         */
module.exports = function (module, exports, require) {
  function o(t, e) {
    var r;
    var o;
    var i;
    if (t.accDescr) {
      if ((r = e.setAccDescription) !== null && r !== undefined) {
        r.call(e, t.accDescr);
      }
    }
    if (t.accTitle) {
      if ((o = e.setAccTitle) !== null && o !== undefined) {
        o.call(e, t.accTitle);
      }
    }
    if (t.title) {
      if ((i = e.setDiagramTitle) !== null && i !== undefined) {
        i.call(e, t.title);
      }
    }
  }
  require("logger-level-utils") /*id: 696754*/.setFunctionName(o, "populateCommonDb");
  require.d(exports, {
    populateCommonDb: function () {
      return o;
    }
  });
}