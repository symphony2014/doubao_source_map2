// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'regexpStringIteratorFactory'
// - Resolved require(499078) to 'regexp-string-iterator-factory'
// - Renamed variable 'o' to 'objectPropertyGetter_1'
// - Resolved require(91546) to 'object-property-getter_1'
// - Renamed variable 'i' to 'propertyAssignValidator'
// - Resolved require(755146) to 'property-assign-validator'
// - Renamed variable 'u' to 'getSpeciesConstructor'
// - Resolved require(420453) to 'get-species-constructor'
// - Renamed variable 'a' to 'safeIntegerClamp'
// - Resolved require(259631) to 'safe-integer-clamp'
// - Renamed variable 's' to 'stringIntrinsicUtil'
// - Resolved require(162384) to 'string-intrinsic-util'
// - Renamed variable 'c' to 'valueTypeDetector'
// - Resolved require(872717) to 'value-type-detector'
// - Renamed variable 'f' to 'regexpFlagsPolyfillInit'
// - Resolved require(604452) to 'regexp-flags-polyfill-init'
// - Renamed variable 'l' to 'setFunctionNameUtil'
// - Resolved require(664371) to 'set-function-name-util'
// - Renamed variable 'p' to 'getIntrinsicWrapper'
// - Resolved require(798131) to 'get-intrinsic-wrapper'
// - Renamed variable 'd' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'h' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 193254
         */
module.exports = function (module, exports, require) {
  var regexpStringIteratorFactory = require("regexp-string-iterator-factory") /*id: 499078*/;
  var objectPropertyGetter_1 = require("object-property-getter_1") /*id: 91546*/;
  var propertyAssignValidator = require("property-assign-validator") /*id: 755146*/;
  var getSpeciesConstructor = require("get-species-constructor") /*id: 420453*/;
  var safeIntegerClamp = require("safe-integer-clamp") /*id: 259631*/;
  var stringIntrinsicUtil = require("string-intrinsic-util") /*id: 162384*/;
  var valueTypeDetector = require("value-type-detector") /*id: 872717*/;
  var regexpFlagsPolyfillInit = require("regexp-flags-polyfill-init") /*id: 604452*/;
  var setFunctionNameUtil = require("set-function-name-util") /*id: 664371*/;
  var getIntrinsicWrapper = require("get-intrinsic-wrapper") /*id: 798131*/;
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var y = getIntrinsicWrapper("String.prototype.indexOf");
  var b = getIntrinsicUtil("%RegExp%");
  var g = "flags" in b.prototype;
  function v(t, e) {
    var r;
    var n = "flags" in e ? objectPropertyGetter_1(e, "flags") : stringIntrinsicUtil(regexpFlagsPolyfillInit(e));
    r = g && typeof n == "string" ? new t(e, n) : t === b ? new t(e.source, n) : new t(e, n);
    return {
      flags: n,
      matcher: r
    };
  }
  var m = setFunctionNameUtil(function (t) {
    if (valueTypeDetector(this) !== "Object") {
      throw new typeErrorConstructor("\"this\" value must be an Object");
    }
    var e = stringIntrinsicUtil(t);
    var r = v(getSpeciesConstructor(this, b), this);
    var f = r.flags;
    var l = r.matcher;
    propertyAssignValidator(l, "lastIndex", safeIntegerClamp(objectPropertyGetter_1(this, "lastIndex")), true);
    return regexpStringIteratorFactory(l, e, y(f, "g") > -1, y(f, "u") > -1);
  }, "[Symbol.matchAll]", true);
  module.exports = m;
}