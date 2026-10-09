// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'objectExtensibilityPolyfillCheck'
// - Resolved require(866540) to 'object-extensibility-polyfill-check'
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'u' to 'definePropertiesHelper'
// - Resolved require(581987) to 'define-properties-helper'
// - Renamed variable 'c' to 'weakDataMetadataManager'
// - Resolved require(553786) to 'weak-data-metadata-manager'
// - Renamed variable 'f' to 'mapWeakmapPolyfillFactory'
// - Resolved require(312491) to 'map-weakmap-polyfill-factory'
// - Renamed variable 's' to 'internalCollectionFactory'
// - Resolved require(729395) to 'internal-collection-factory'
// - Renamed variable 'l' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'p' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'h' to 'weakmapNativeCheck_1'
// - Resolved require(194606) to 'weakmap-native-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 640430
         */
module.exports = function (module, exports, require) {
  var n;
  var objectExtensibilityPolyfillCheck = require("object-extensibility-polyfill-check") /*id: 866540*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var definePropertiesHelper = require("define-properties-helper") /*id: 581987*/;
  var weakDataMetadataManager = require("weak-data-metadata-manager") /*id: 553786*/;
  var mapWeakmapPolyfillFactory = require("map-weakmap-polyfill-factory") /*id: 312491*/;
  var internalCollectionFactory = require("internal-collection-factory") /*id: 729395*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var v = require("object-state-manager") /*id: 488732*/.enforce;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var weakmapNativeCheck_1 = require("weakmap-native-check_1") /*id: 194606*/;
  var d = Object;
  var y = Array.isArray;
  var g = d.isExtensible;
  var b = d.isFrozen;
  var w = d.isSealed;
  var m = d.freeze;
  var x = d.seal;
  var A = !globalObjectPolyfill.ActiveXObject && "ActiveXObject" in globalObjectPolyfill;
  function E(t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : undefined);
    };
  }
  var S = mapWeakmapPolyfillFactory("WeakMap", E, internalCollectionFactory);
  var O = S.prototype;
  var R = functionBindFallback(O.set);
  if (weakmapNativeCheck_1) {
    if (A) {
      n = internalCollectionFactory.getConstructor(E, "WeakMap", true);
      weakDataMetadataManager.enable();
      var I = functionBindFallback(O.delete);
      var T = functionBindFallback(O.has);
      var k = functionBindFallback(O.get);
      definePropertiesHelper(O, {
        delete: function (t) {
          if (isObjectOrFunctionCheck(t) && !g(t)) {
            var r = v(this);
            r.frozen ||= new n();
            return I(this, t) || r.frozen.delete(t);
          }
          return I(this, t);
        },
        has: function (t) {
          if (isObjectOrFunctionCheck(t) && !g(t)) {
            var r = v(this);
            r.frozen ||= new n();
            return T(this, t) || r.frozen.has(t);
          }
          return T(this, t);
        },
        get: function (t) {
          if (isObjectOrFunctionCheck(t) && !g(t)) {
            var r = v(this);
            r.frozen ||= new n();
            if (T(this, t)) {
              return k(this, t);
            } else {
              return r.frozen.get(t);
            }
          }
          return k(this, t);
        },
        set: function (t, r) {
          if (isObjectOrFunctionCheck(t) && !g(t)) {
            var e = v(this);
            e.frozen ||= new n();
            if (T(this, t)) {
              R(this, t, r);
            } else {
              e.frozen.set(t, r);
            }
          } else {
            R(this, t, r);
          }
          return this;
        }
      });
    } else if (objectExtensibilityPolyfillCheck && tryCatchFunctionWrapper(function () {
      var t = m([]);
      R(new S(), t, 1);
      return !b(t);
    })) {
      definePropertiesHelper(O, {
        set: function (t, r) {
          var e;
          if (y(t)) {
            if (b(t)) {
              e = m;
            } else if (w(t)) {
              e = x;
            }
          }
          R(this, t, r);
          if (e) {
            e(t);
          }
          return this;
        }
      });
    }
  }
}