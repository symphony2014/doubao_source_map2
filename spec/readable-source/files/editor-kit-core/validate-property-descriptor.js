// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 713775
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var i = {
    __proto__: null,
    "[[Configurable]]": true,
    "[[Enumerable]]": true,
    "[[Get]]": true,
    "[[Set]]": true,
    "[[Value]]": true,
    "[[Writable]]": true
  };
  module.exports = function (t) {
    if (!t || typeof t != "object") {
      return false;
    }
    for (var e in t) {
      if (boundHasOwnPropertyUtil(t, e) && !i[e]) {
        return false;
      }
    }
    var r = boundHasOwnPropertyUtil(t, "[[Value]]") || boundHasOwnPropertyUtil(t, "[[Writable]]");
    var u = boundHasOwnPropertyUtil(t, "[[Get]]") || boundHasOwnPropertyUtil(t, "[[Set]]");
    if (r && u) {
      throw new typeErrorConstructor("Property Descriptors may not be both accessor and data descriptors");
    }
    return true;
  };
}