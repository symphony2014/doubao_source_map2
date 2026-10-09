// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 245962
         */
module.exports = function (module, exports, require) {
  var objectCreateUtil = require("object-create-util") /*id: 352344*/;
  var prototypeCompositionUtil = require("prototype-composition-util") /*id: 507931*/;
  var prototypeChecker = require("prototype-checker") /*id: 411247*/;
  exports.createObject = function (e) {
    if (typeof e.constructor != "function" || prototypeChecker.isPrototype(e)) {
      return {};
    } else {
      return objectCreateUtil.createObject(prototypeCompositionUtil.getPrototype(e));
    }
  };
}