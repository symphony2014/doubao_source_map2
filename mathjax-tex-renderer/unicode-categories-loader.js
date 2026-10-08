// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'objectDefinePropertyWrapper_1'
// - Resolved require(753422) to 'object-define-property-wrapper_1'
// - Renamed variable 'T' to 'esModuleInteropHelper'
// - Resolved require(231208) to 'es-module-interop-helper'
// - Resolved require(881907) to 'unicode-character-categories'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 180651
         */
module.exports = function (module, exports, require) {
  var objectDefinePropertyWrapper_1 = require("object-define-property-wrapper_1") /*id: 753422*/;
  var esModuleInteropHelper = require("es-module-interop-helper") /*id: 231208*/;
  objectDefinePropertyWrapper_1(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var n = esModuleInteropHelper(require("unicode-character-categories") /*id: 881907*/);
  exports.default = function (t) {
    if (!t.addUnicodeData) {
      throw ReferenceError("Unicode Base must be loaded before Unicode Categories");
    }
    t.addUnicodeData(n.default);
  };
  module.exports = exports.default;
}