// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'boundHasOwnPropertyUtil'
// - Resolved require(495924) to 'bound-has-own-property-util'
// - Resolved require(362782) to 'side-channel-factory'
// - Renamed variable 'i' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 405467
         */
module.exports = function (module, exports, require) {
  var boundHasOwnPropertyUtil = require("bound-has-own-property-util") /*id: 495924*/;
  var o = require("side-channel-factory") /*id: 362782*/();
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var u = {
    assert: function (t, e) {
      if (!t || typeof t != "object" && typeof t != "function") {
        throw new typeErrorConstructor("`O` is not an object");
      }
      if (typeof e != "string") {
        throw new typeErrorConstructor("`slot` must be a string");
      }
      o.assert(t);
      if (!u.has(t, e)) {
        throw new typeErrorConstructor("`" + e + "` is not present on `O`");
      }
    },
    get: function (t, e) {
      if (!t || typeof t != "object" && typeof t != "function") {
        throw new typeErrorConstructor("`O` is not an object");
      }
      if (typeof e != "string") {
        throw new typeErrorConstructor("`slot` must be a string");
      }
      var r = o.get(t);
      return r && r["$" + e];
    },
    has: function (t, e) {
      if (!t || typeof t != "object" && typeof t != "function") {
        throw new typeErrorConstructor("`O` is not an object");
      }
      if (typeof e != "string") {
        throw new typeErrorConstructor("`slot` must be a string");
      }
      var r = o.get(t);
      return !!r && boundHasOwnPropertyUtil(r, "$" + e);
    },
    set: function (t, e, r) {
      if (!t || typeof t != "object" && typeof t != "function") {
        throw new typeErrorConstructor("`O` is not an object");
      }
      if (typeof e != "string") {
        throw new typeErrorConstructor("`slot` must be a string");
      }
      var n = o.get(t);
      if (!n) {
        n = {};
        o.set(t, n);
      }
      n["$" + e] = r;
    }
  };
  if (Object.freeze) {
    Object.freeze(u);
  }
  module.exports = u;
}