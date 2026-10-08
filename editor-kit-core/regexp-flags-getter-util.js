// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'regexpFlagsGetter_1'
// - Resolved require(871167) to 'regexp-flags-getter_1'
// - Resolved require(68396) to 'object-assign-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 619362
         */
module.exports = function (module, exports, require) {
  var regexpFlagsGetter_1 = require("regexp-flags-getter_1") /*id: 871167*/;
  var o = require("object-assign-polyfill-util") /*id: 68396*/.supportsDescriptors;
  var i = Object.getOwnPropertyDescriptor;
  module.exports = function () {
    if (o && /a/mig.flags === "gim") {
      var t = i(RegExp.prototype, "flags");
      if (t && typeof t.get == "function" && "dotAll" in RegExp.prototype && "hasIndices" in RegExp.prototype) {
        var e = "";
        var r = {};
        Object.defineProperty(r, "hasIndices", {
          get: function () {
            e += "d";
          }
        });
        Object.defineProperty(r, "sticky", {
          get: function () {
            e += "y";
          }
        });
        t.get.call(r);
        if (e === "dy") {
          return t.get;
        }
      }
    }
    return regexpFlagsGetter_1;
  };
}