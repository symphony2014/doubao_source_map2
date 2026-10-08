// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'weakmapNativeCheck_1'
// - Resolved require(194606) to 'weakmap-native-check_1'
// - Renamed variable 'u' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'c' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'f' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 's' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'l' to 'coreJsSharedStoreInit'
// - Resolved require(53489) to 'core-js-shared-store-init'
// - Renamed variable 'v' to 'symbolDescriptionCache'
// - Resolved require(896189) to 'symbol-description-cache'
// - Renamed variable 'p' to 'libPolyfill_1'
// - Resolved require(910663) to 'lib-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 488732
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var weakmapNativeCheck_1 = require("weakmap-native-check_1") /*id: 194606*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsSharedStoreInit = require("core-js-shared-store-init") /*id: 53489*/;
  var symbolDescriptionCache = require("symbol-description-cache") /*id: 896189*/;
  var libPolyfill_1 = require("lib-polyfill_1") /*id: 910663*/;
  var h = "Object already initialized";
  var d = globalObjectPolyfill.TypeError;
  var y = globalObjectPolyfill.WeakMap;
  if (weakmapNativeCheck_1 || coreJsSharedStoreInit.state) {
    var g = coreJsSharedStoreInit.state ||= new y();
    g.get = g.get;
    g.has = g.has;
    g.set = g.set;
    n = function (t, r) {
      if (g.has(t)) {
        throw new d(h);
      }
      r.facade = t;
      g.set(t, r);
      return r;
    };
    o = function (t) {
      return g.get(t) || {};
    };
    i = function (t) {
      return g.has(t);
    };
  } else {
    var b = symbolDescriptionCache("state");
    libPolyfill_1[b] = true;
    n = function (t, r) {
      if (objectHasOwnPolyfill_1(t, b)) {
        throw new d(h);
      }
      r.facade = t;
      definePropertyHelper_1(t, b, r);
      return r;
    };
    o = function (t) {
      if (objectHasOwnPolyfill_1(t, b)) {
        return t[b];
      } else {
        return {};
      }
    };
    i = function (t) {
      return objectHasOwnPolyfill_1(t, b);
    };
  }
  module.exports = {
    set: n,
    get: o,
    has: i,
    enforce: function (t) {
      if (i(t)) {
        return o(t);
      } else {
        return n(t, {});
      }
    },
    getterFor: function (t) {
      return function (r) {
        var e;
        if (!isObjectOrFunctionCheck(r) || (e = o(r)).type !== t) {
          throw new d("Incompatible receiver, " + t + " required");
        }
        return e;
      };
    }
  };
}