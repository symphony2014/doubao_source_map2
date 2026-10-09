// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'requireObjectOrThrowTypeError'
// - Resolved require(434324) to 'require-object-or-throw-type-error'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 279091
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  module.exports = function () {
    var t = requireObjectOrThrowTypeError(this);
    var e = "";
    if (t.hasIndices) {
      e += "d";
    }
    if (t.global) {
      e += "g";
    }
    if (t.ignoreCase) {
      e += "i";
    }
    if (t.multiline) {
      e += "m";
    }
    if (t.dotAll) {
      e += "s";
    }
    if (t.unicode) {
      e += "u";
    }
    if (t.unicodeSets) {
      e += "v";
    }
    if (t.sticky) {
      e += "y";
    }
    return e;
  };
}