// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 685568
         */
module.exports = function (module, exports, require) {
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  module.exports = function () {
    var t = requireObjectOrThrowTypeError_1(this);
    var r = "";
    if (t.hasIndices) {
      r += "d";
    }
    if (t.global) {
      r += "g";
    }
    if (t.ignoreCase) {
      r += "i";
    }
    if (t.multiline) {
      r += "m";
    }
    if (t.dotAll) {
      r += "s";
    }
    if (t.unicode) {
      r += "u";
    }
    if (t.unicodeSets) {
      r += "v";
    }
    if (t.sticky) {
      r += "y";
    }
    return r;
  };
}