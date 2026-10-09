// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'isPrimitiveUtil'
// - Resolved require(271405) to 'is-primitive-util'
// - Renamed variable 'i' to 'isCallableUtil'
// - Resolved require(103686) to 'is-callable-util'
// - Renamed variable 'u' to 'isDateValidator'
// - Resolved require(908897) to 'is-date-validator'
// - Renamed variable 'a' to 'isSymbolSafeCheck'
// - Resolved require(11085) to 'is-symbol-safe-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 582761
         */
module.exports = function (module, exports, require) {
  var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol";
  var isPrimitiveUtil = require("is-primitive-util") /*id: 271405*/;
  var isCallableUtil = require("is-callable-util") /*id: 103686*/;
  var isDateValidator = require("is-date-validator") /*id: 908897*/;
  var isSymbolSafeCheck = require("is-symbol-safe-check") /*id: 11085*/;
  function s(t, e) {
    if (t == null) {
      throw TypeError("Cannot call method on " + t);
    }
    if (typeof e != "string" || e !== "number" && e !== "string") {
      throw TypeError("hint must be \"string\" or \"number\"");
    }
    var r;
    var n;
    var u;
    var a = e === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"];
    for (u = 0; u < a.length; ++u) {
      if (isCallableUtil(r = t[a[u]]) && isPrimitiveUtil(n = r.call(t))) {
        return n;
      }
    }
    throw TypeError("No default value");
  }
  function c(t, e) {
    var r = t[e];
    if (r != null) {
      if (!isCallableUtil(r)) {
        throw TypeError(r + " returned for property " + String(e) + " of object " + t + " is not a function");
      }
      return r;
    }
  }
  module.exports = function (t) {
    if (isPrimitiveUtil(t)) {
      return t;
    }
    var e;
    var r = "default";
    if (arguments.length > 1) {
      if (arguments[1] === String) {
        r = "string";
      } else if (arguments[1] === Number) {
        r = "number";
      }
    }
    if (n) {
      if (Symbol.toPrimitive) {
        e = c(t, Symbol.toPrimitive);
      } else if (isSymbolSafeCheck(t)) {
        e = Symbol.prototype.valueOf;
      }
    }
    if (e !== undefined) {
      var i = e.call(t, r);
      if (isPrimitiveUtil(i)) {
        return i;
      }
      throw TypeError("unable to convert exotic object to primitive");
    }
    if (r === "default" && (isDateValidator(t) || isSymbolSafeCheck(t))) {
      r = "string";
    }
    return s(t, r === "default" ? "number" : r);
  };
}