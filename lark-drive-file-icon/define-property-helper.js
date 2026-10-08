// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'defineProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 911673
         */
module.exports = function (module, exports, require) {
  var objectDefinePropertyReexport = require("object-define-property-reexport") /*id: 40933*/;
  var symbolPolyfillDomSetupModule_1 = require("symbol-polyfill-dom-setup-module_1") /*id: 467230*/;
  var iteratorSymbolPolyfillReexport = require("iterator-symbol-polyfill-reexport") /*id: 457675*/;
  function i(e) {
    return (i = typeof symbolPolyfillDomSetupModule_1 == "function" && typeof iteratorSymbolPolyfillReexport == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof symbolPolyfillDomSetupModule_1 == "function" && e.constructor === symbolPolyfillDomSetupModule_1 && e !== symbolPolyfillDomSetupModule_1.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  var symbolToPrimitivePolyfillReexport_2 = require("symbol-to-primitive-polyfill-reexport_2") /*id: 68387*/;
  function l(e, t, r) {
    var a;
    a = function (e, t) {
      if (i(e) != "object" || !e) {
        return e;
      }
      var r = e[symbolToPrimitivePolyfillReexport_2];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (i(n) != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string");
    if ((t = i(a) == "symbol" ? a : a + "") in e) {
      objectDefinePropertyReexport(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  require.d(exports, {
    defineProperty: function () {
      return l;
    }
  });
}