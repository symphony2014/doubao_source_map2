// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'weakmapNativeCheck'
// - Resolved require(377085) to 'weakmap-native-check'
// - Renamed variable 'c' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 's' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'f' to 'definePropertySafeWrapper'
// - Resolved require(336704) to 'define-property-safe-wrapper'
// - Renamed variable 'a' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'p' to 'coreJsSharedVersion'
// - Resolved require(678932) to 'core-js-shared-version'
// - Renamed variable 'l' to 'sharedSymbolKeyUtil'
// - Resolved require(893493) to 'shared-symbol-key-util'
// - Renamed variable 'v' to 'emptyModule_2'
// - Resolved require(422324) to 'empty-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 653534
         */
module.exports = function (module, exports, require) {
  var e;
  var o;
  var i;
  var weakmapNativeCheck = require("weakmap-native-check") /*id: 377085*/;
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var definePropertySafeWrapper = require("define-property-safe-wrapper") /*id: 336704*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var coreJsSharedVersion = require("core-js-shared-version") /*id: 678932*/;
  var sharedSymbolKeyUtil = require("shared-symbol-key-util") /*id: 893493*/;
  var emptyModule_2 = require("empty-module_2") /*id: 422324*/;
  var y = "Object already initialized";
  var h = getGlobalObject.TypeError;
  var b = getGlobalObject.WeakMap;
  if (weakmapNativeCheck || coreJsSharedVersion.state) {
    var d = coreJsSharedVersion.state ||= new b();
    d.get = d.get;
    d.has = d.has;
    d.set = d.set;
    e = function (t, r) {
      if (d.has(t)) {
        throw new h(y);
      }
      r.facade = t;
      d.set(t, r);
      return r;
    };
    o = function (t) {
      return d.get(t) || {};
    };
    i = function (t) {
      return d.has(t);
    };
  } else {
    var g = sharedSymbolKeyUtil("state");
    emptyModule_2[g] = true;
    e = function (t, r) {
      if (objectHasOwnPolyfill(t, g)) {
        throw new h(y);
      }
      r.facade = t;
      definePropertySafeWrapper(t, g, r);
      return r;
    };
    o = function (t) {
      if (objectHasOwnPolyfill(t, g)) {
        return t[g];
      } else {
        return {};
      }
    };
    i = function (t) {
      return objectHasOwnPolyfill(t, g);
    };
  }
  module.exports = {
    set: e,
    get: o,
    has: i,
    enforce: function (t) {
      if (i(t)) {
        return o(t);
      } else {
        return e(t, {});
      }
    },
    getterFor: function (t) {
      return function (r) {
        var n;
        if (!isObjectOrFunction_1(r) || (n = o(r)).type !== t) {
          throw new h("Incompatible receiver, " + t + " required");
        }
        return n;
      };
    }
  };
}