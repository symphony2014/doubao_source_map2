// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionApplyUtil'
// - Resolved require(954387) to 'function-apply-util'
// - Renamed variable 'o' to 'objectPropertyGetter_1'
// - Resolved require(91546) to 'object-property-getter_1'
// - Renamed variable 'i' to 'getMethodValidator'
// - Resolved require(229866) to 'get-method-validator'
// - Renamed variable 'u' to 'isRegexpUtil'
// - Resolved require(371098) to 'is-regexp-util'
// - Renamed variable 'a' to 'stringIntrinsicUtil'
// - Resolved require(162384) to 'string-intrinsic-util'
// - Renamed variable 's' to 'requireDefinedUtil_1'
// - Resolved require(536844) to 'require-defined-util_1'
// - Renamed variable 'c' to 'getIntrinsicWrapper'
// - Resolved require(798131) to 'get-intrinsic-wrapper'
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'l' to 'regexpFlagsPolyfillInit'
// - Resolved require(604452) to 'regexp-flags-polyfill-init'
// - Renamed variable 'p' to 'getIntrinsicUtil'
// - Resolved require(120433) to 'get-intrinsic-util'
// - Renamed variable 'd' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'b' to 'regexpMatchallShim'
// - Resolved require(60050) to 'regexp-matchall-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 494358
         */
module.exports = function (module, exports, require) {
  var functionApplyUtil = require("function-apply-util") /*id: 954387*/;
  var objectPropertyGetter_1 = require("object-property-getter_1") /*id: 91546*/;
  var getMethodValidator = require("get-method-validator") /*id: 229866*/;
  var isRegexpUtil = require("is-regexp-util") /*id: 371098*/;
  var stringIntrinsicUtil = require("string-intrinsic-util") /*id: 162384*/;
  var requireDefinedUtil_1 = require("require-defined-util_1") /*id: 536844*/;
  var getIntrinsicWrapper = require("get-intrinsic-wrapper") /*id: 798131*/;
  var f = require("symbol-support-check_1") /*id: 237121*/();
  var regexpFlagsPolyfillInit = require("regexp-flags-polyfill-init") /*id: 604452*/;
  var getIntrinsicUtil = require("get-intrinsic-util") /*id: 120433*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var h = getIntrinsicUtil("%RegExp%");
  var y = getIntrinsicWrapper("String.prototype.indexOf");
  var regexpMatchallShim = require("regexp-matchall-shim") /*id: 60050*/;
  function g(t) {
    var e = regexpMatchallShim();
    if (f && typeof Symbol.matchAll == "symbol") {
      var r = getMethodValidator(t, Symbol.matchAll);
      if (r === h.prototype[Symbol.matchAll] && r !== e) {
        return e;
      } else {
        return r;
      }
    }
    if (isRegexpUtil(t)) {
      return e;
    }
  }
  module.exports = function (t) {
    var e = requireDefinedUtil_1(this);
    if (t != null) {
      if (isRegexpUtil(t)) {
        var r = "flags" in t ? objectPropertyGetter_1(t, "flags") : regexpFlagsPolyfillInit(t);
        requireDefinedUtil_1(r);
        if (y(stringIntrinsicUtil(r), "g") < 0) {
          throw new typeErrorConstructor("matchAll requires a global regular expression");
        }
      }
      var i = g(t);
      if (i !== undefined) {
        return functionApplyUtil(i, t, [e]);
      }
    }
    var c = stringIntrinsicUtil(e);
    var f = new h(t, "g");
    return functionApplyUtil(g(f), f, [c]);
  };
}