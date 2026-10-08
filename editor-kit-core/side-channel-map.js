// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'o' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'i' to 'objectInspectUtil'
// - Resolved require(406902) to 'object-inspect-util'
// - Renamed variable 'u' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 925641
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var objectInspectUtil = require("object-inspect-util") /*id: 406902*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var a = getIntrinsicUtil("%Map%", true);
  var s = getIntrinsicSafe("Map.prototype.get", true);
  var c = getIntrinsicSafe("Map.prototype.set", true);
  var f = getIntrinsicSafe("Map.prototype.has", true);
  var l = getIntrinsicSafe("Map.prototype.delete", true);
  var p = getIntrinsicSafe("Map.prototype.size", true);
  module.exports = !!a && function () {
    var t;
    var e = {
      assert: function (t) {
        if (!e.has(t)) {
          throw new typeErrorConstructor("Side channel does not contain " + objectInspectUtil(t));
        }
      },
      delete: function (e) {
        if (t) {
          var r = l(t, e);
          if (p(t) === 0) {
            t = undefined;
          }
          return r;
        }
        return false;
      },
      get: function (e) {
        if (t) {
          return s(t, e);
        }
      },
      has: function (e) {
        return !!t && f(t, e);
      },
      set: function (e, r) {
        t ||= new a();
        c(t, e, r);
      }
    };
    return e;
  };
}