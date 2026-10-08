// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'addWillChangeProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 118534
         */
module.exports = function (module, exports, require) {
  var emptyNamespaceStub = require("empty-namespace-stub") /*id: 720684*/;
  var hasVelocityMethodCheck = require("has-velocity-method-check") /*id: 862420*/;
  function s(t, e) {
    let i = t.getValue("willChange");
    if (hasVelocityMethodCheck.hasVelocityMethod(i) && i.add) {
      return i.add(e);
    }
    if (!i && emptyNamespaceStub.emptyNamespace.WillChange) {
      let i = new emptyNamespaceStub.emptyNamespace.WillChange("auto");
      t.addValue("willChange", i);
      i.add(e);
    }
  }
  require.d(exports, {
    addWillChangeProperty: function () {
      return s;
    }
  });
}