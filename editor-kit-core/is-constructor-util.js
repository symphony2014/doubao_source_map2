// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(624379) to 'get-intrinsic-util-proxy'
// - Renamed variable 'o' to 'safeDefineProperty_1'
// - Resolved require(630551) to 'safe-define-property_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 356118
         */
module.exports = function (module, exports, require) {
  var n = require("get-intrinsic-util-proxy") /*id: 624379*/("%Reflect.construct%", true);
  var safeDefineProperty_1 = require("safe-define-property_1") /*id: 630551*/;
  try {
    safeDefineProperty_1({}, "", {
      "[[Get]]": function () {}
    });
  } catch (t) {
    safeDefineProperty_1 = null;
  }
  if (safeDefineProperty_1 && n) {
    var i = {};
    var u = {};
    safeDefineProperty_1(u, "length", {
      "[[Get]]": function () {
        throw i;
      },
      "[[Enumerable]]": true
    });
    module.exports = function (t) {
      try {
        n(t, u);
      } catch (t) {
        return t === i;
      }
    };
  } else {
    module.exports = function (t) {
      return typeof t == "function" && !!t.prototype;
    };
  }
}