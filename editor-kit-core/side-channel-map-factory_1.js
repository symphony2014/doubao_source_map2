// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'i' to 'objectInspectUtil'
// - Resolved require(406902) to 'object-inspect-util'
// - Renamed variable 'u' to 'sideChannelMap'
// - Resolved require(925641) to 'side-channel-map'
// - Renamed variable 'a' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 603161
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var objectInspectUtil = require("object-inspect-util") /*id: 406902*/;
  var sideChannelMap = require("side-channel-map") /*id: 925641*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var s = getIntrinsicUtil("%WeakMap%", true);
  var c = getIntrinsicSafe("WeakMap.prototype.get", true);
  var f = getIntrinsicSafe("WeakMap.prototype.set", true);
  var l = getIntrinsicSafe("WeakMap.prototype.has", true);
  var p = getIntrinsicSafe("WeakMap.prototype.delete", true);
  module.exports = s ? function () {
    var t;
    var e;
    var r = {
      assert: function (t) {
        if (!r.has(t)) {
          throw new typeErrorConstructor("Side channel does not contain " + objectInspectUtil(t));
        }
      },
      delete: function (r) {
        if (s && r && (typeof r == "object" || typeof r == "function")) {
          if (t) {
            return p(t, r);
          }
        } else if (sideChannelMap && e) {
          return e.delete(r);
        }
        return false;
      },
      get: function (r) {
        if (s && r && (typeof r == "object" || typeof r == "function") && t) {
          return c(t, r);
        } else {
          return e && e.get(r);
        }
      },
      has: function (r) {
        if (s && r && (typeof r == "object" || typeof r == "function") && t) {
          return l(t, r);
        } else {
          return !!e && e.has(r);
        }
      },
      set: function (r, n) {
        if (s && r && (typeof r == "object" || typeof r == "function")) {
          t ||= new s();
          f(t, r, n);
        } else if (sideChannelMap) {
          e ||= sideChannelMap();
          e.set(r, n);
        }
      }
    };
    return r;
  } : sideChannelMap;
}