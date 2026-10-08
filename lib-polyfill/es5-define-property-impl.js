// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'defineProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 760974
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var es5DomDefinePropertyCheck = require("es5-dom-define-property-check") /*id: 249084*/;
  var es5DefinePropertyCheck = require("es5-define-property-check") /*id: 411419*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var symbolToStringConverter = require("symbol-to-string-converter") /*id: 980181*/;
  var c = TypeError;
  var f = Object.defineProperty;
  var s = Object.getOwnPropertyDescriptor;
  var l = "enumerable";
  var v = "configurable";
  var p = "writable";
  exports.defineProperty = es5PropertyDescriptorCheck ? es5DefinePropertyCheck ? function (t, r, e) {
    requireObjectOrThrowTypeError_1(t);
    r = symbolToStringConverter(r);
    requireObjectOrThrowTypeError_1(e);
    if (typeof t == "function" && r === "prototype" && "value" in e && p in e && !e[p]) {
      var n = s(t, r);
      if (n && n[p]) {
        t[r] = e.value;
        e = {
          configurable: v in e ? e[v] : n[v],
          enumerable: l in e ? e[l] : n[l],
          writable: false
        };
      }
    }
    return f(t, r, e);
  } : f : function (t, r, e) {
    requireObjectOrThrowTypeError_1(t);
    r = symbolToStringConverter(r);
    requireObjectOrThrowTypeError_1(e);
    if (es5DomDefinePropertyCheck) {
      try {
        return f(t, r, e);
      } catch (t) {}
    }
    if ("get" in e || "set" in e) {
      throw new c("Accessors not supported");
    }
    if ("value" in e) {
      t[r] = e.value;
    }
    return t;
  };
}