// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'objectInspectUtil'
// - Resolved require(406902) to 'object-inspect-util'
// - Renamed variable 'i' to 'sideChannelMapFactory'
// - Resolved require(613760) to 'side-channel-map-factory'
// - Renamed variable 'u' to 'sideChannelMap'
// - Resolved require(925641) to 'side-channel-map'
// - Resolved require(603161) to 'side-channel-map-factory_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 362782
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var objectInspectUtil = require("object-inspect-util") /*id: 406902*/;
  var sideChannelMapFactory = require("side-channel-map-factory") /*id: 613760*/;
  var sideChannelMap = require("side-channel-map") /*id: 925641*/;
  var a = require("side-channel-map-factory_1") /*id: 603161*/ || sideChannelMap || sideChannelMapFactory;
  module.exports = function () {
    var t;
    var e = {
      assert: function (t) {
        if (!e.has(t)) {
          throw new typeErrorConstructor("Side channel does not contain " + objectInspectUtil(t));
        }
      },
      delete: function (e) {
        return !!t && t.delete(e);
      },
      get: function (e) {
        return t && t.get(e);
      },
      has: function (e) {
        return !!t && t.has(e);
      },
      set: function (e, r) {
        t ||= a();
        t.set(e, r);
      }
    };
    return e;
  };
}