// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'addWillChangeValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 610147
         */
module.exports = function (module, exports, require) {
  var emptyObjectExport_2 = require("empty-object-export_2") /*id: 824789*/;
  var velocityChecker = require("velocity-checker") /*id: 643254*/;
  function s(t, e) {
    let i = t.getValue("willChange");
    if (velocityChecker.hasVelocity(i) && i.add) {
      return i.add(e);
    }
    if (!i && emptyObjectExport_2.emptyObject.WillChange) {
      let i = new emptyObjectExport_2.emptyObject.WillChange("auto");
      t.addValue("willChange", i);
      i.add(e);
    }
  }
  require.d(exports, {
    addWillChangeValue: function () {
      return s;
    }
  });
}