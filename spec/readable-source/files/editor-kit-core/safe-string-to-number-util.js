// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'i' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'a' to 'getIntrinsicSafe'
// - Resolved require(187792) to 'get-intrinsic-safe'
// - Renamed variable 's' to 'safeRegexTesterFactory'
// - Resolved require(973768) to 'safe-regex-tester-factory'
// - Renamed variable 'h' to 'stringTrimPolyfillWrapper'
// - Resolved require(151599) to 'string-trim-polyfill-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 807200
         */
module.exports = function (module, exports, require) {
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var o = getIntrinsicUtil("%RegExp%");
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var u = getIntrinsicUtil("%parseInt%");
  var getIntrinsicSafe = require("get-intrinsic-safe") /*id: 187792*/;
  var safeRegexTesterFactory = require("safe-regex-tester-factory") /*id: 973768*/;
  var c = getIntrinsicSafe("String.prototype.slice");
  var f = safeRegexTesterFactory(/^0b[01]+$/i);
  var l = safeRegexTesterFactory(/^0o[0-7]+$/i);
  var p = safeRegexTesterFactory(/^[-+]0x[0-9a-f]+$/i);
  var d = safeRegexTesterFactory(new o("[​￾]", "g"));
  var stringTrimPolyfillWrapper = require("string-trim-polyfill-wrapper") /*id: 151599*/;
  module.exports = function t(e) {
    if (typeof e != "string") {
      throw new typeErrorConstructor("Assertion failed: `argument` is not a String");
    }
    if (f(e)) {
      return +u(c(e, 2), 2);
    }
    if (l(e)) {
      return +u(c(e, 2), 8);
    }
    if (d(e) || p(e)) {
      return NaN;
    }
    var r = stringTrimPolyfillWrapper(e);
    if (r !== e) {
      return t(r);
    } else {
      return +e;
    }
  };
}