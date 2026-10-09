// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setFunctionNameUtil'
// - Resolved require(664371) to 'set-function-name-util'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 871167
         */
module.exports = function (module, exports, require) {
  var setFunctionNameUtil = require("set-function-name-util") /*id: 664371*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var i = Object;
  module.exports = setFunctionNameUtil(function () {
    if (this == null || this !== i(this)) {
      throw new typeErrorConstructor("RegExp.prototype.flags getter called on non-object");
    }
    var t = "";
    if (this.hasIndices) {
      t += "d";
    }
    if (this.global) {
      t += "g";
    }
    if (this.ignoreCase) {
      t += "i";
    }
    if (this.multiline) {
      t += "m";
    }
    if (this.dotAll) {
      t += "s";
    }
    if (this.unicode) {
      t += "u";
    }
    if (this.unicodeSets) {
      t += "v";
    }
    if (this.sticky) {
      t += "y";
    }
    return t;
  }, "get flags", true);
}