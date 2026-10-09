// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'safeDefineProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 976843
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var propertyDescriptorSupportCheck_1 = require("property-descriptor-support-check_1") /*id: 752690*/;
  var propertyDescriptorSupportCheck = require("property-descriptor-support-check") /*id: 248399*/;
  var requireObjectOrThrowTypeError = require("require-object-or-throw-type-error") /*id: 434324*/;
  var toStringPrimitiveConverter = require("to-string-primitive-converter") /*id: 956642*/;
  var s = TypeError;
  var f = Object.defineProperty;
  var a = Object.getOwnPropertyDescriptor;
  var p = "enumerable";
  var l = "configurable";
  var v = "writable";
  exports.safeDefineProperty = checkPropertyDescriptorSupport ? propertyDescriptorSupportCheck ? function (t, r, n) {
    requireObjectOrThrowTypeError(t);
    r = toStringPrimitiveConverter(r);
    requireObjectOrThrowTypeError(n);
    if (typeof t == "function" && r === "prototype" && "value" in n && v in n && !n[v]) {
      var e = a(t, r);
      if (e && e[v]) {
        t[r] = n.value;
        n = {
          configurable: l in n ? n[l] : e[l],
          enumerable: p in n ? n[p] : e[p],
          writable: false
        };
      }
    }
    return f(t, r, n);
  } : f : function (t, r, n) {
    requireObjectOrThrowTypeError(t);
    r = toStringPrimitiveConverter(r);
    requireObjectOrThrowTypeError(n);
    if (propertyDescriptorSupportCheck_1) {
      try {
        return f(t, r, n);
      } catch (t) {}
    }
    if ("get" in n || "set" in n) {
      throw new s("Accessors not supported");
    }
    if ("value" in n) {
      t[r] = n.value;
    }
    return t;
  };
}