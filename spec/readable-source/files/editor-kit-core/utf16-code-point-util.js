// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'o' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 'i' to 'isHighSurrogate'
// - Resolved require(966229) to 'is-high-surrogate'
// - Renamed variable 'u' to 'isUtf16LowSurrogate'
// - Resolved require(230709) to 'is-utf16-low-surrogate'
// - Renamed variable 'a' to 'utf16SurrogatePairUtil'
// - Resolved require(884794) to 'utf16-surrogate-pair-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 323239
         */
module.exports = function (module, exports, require) {
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var isHighSurrogate = require("is-high-surrogate") /*id: 966229*/;
  var isUtf16LowSurrogate = require("is-utf16-low-surrogate") /*id: 230709*/;
  var utf16SurrogatePairUtil = require("utf16-surrogate-pair-util") /*id: 884794*/;
  var s = getIntrinsicSafe("String.prototype.charAt");
  var c = getIntrinsicSafe("String.prototype.charCodeAt");
  module.exports = function (t, e) {
    if (typeof t != "string") {
      throw new typeErrorConstructor("Assertion failed: `string` must be a String");
    }
    var r = t.length;
    if (e < 0 || e >= r) {
      throw new typeErrorConstructor("Assertion failed: `position` must be >= 0, and < the length of `string`");
    }
    var o = c(t, e);
    var f = s(t, e);
    var l = isHighSurrogate(o);
    var p = isUtf16LowSurrogate(o);
    if (!l && !p) {
      return {
        "[[CodePoint]]": f,
        "[[CodeUnitCount]]": 1,
        "[[IsUnpairedSurrogate]]": false
      };
    }
    if (p || e + 1 === r) {
      return {
        "[[CodePoint]]": f,
        "[[CodeUnitCount]]": 1,
        "[[IsUnpairedSurrogate]]": true
      };
    }
    var d = c(t, e + 1);
    if (isUtf16LowSurrogate(d)) {
      return {
        "[[CodePoint]]": utf16SurrogatePairUtil(o, d),
        "[[CodeUnitCount]]": 2,
        "[[IsUnpairedSurrogate]]": false
      };
    } else {
      return {
        "[[CodePoint]]": f,
        "[[CodeUnitCount]]": 1,
        "[[IsUnpairedSurrogate]]": true
      };
    }
  };
}