// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'libPolyfill_1'
// - Resolved require(910663) to 'lib-polyfill_1'
// - Renamed variable 'a' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'f' to 'getOwnPropertyNamesPolyfill'
// - Resolved require(667264) to 'get-own-property-names-polyfill'
// - Renamed variable 's' to 'windowObjectPropertyNamesSafeGetter'
// - Resolved require(809638) to 'window-object-property-names-safe-getter'
// - Renamed variable 'l' to 'isExtensiblePolyfillOrCheck'
// - Resolved require(765631) to 'is-extensible-polyfill-or-check'
// - Renamed variable 'v' to 'symbolDescriptionGenerator'
// - Resolved require(556893) to 'symbol-description-generator'
// - Renamed variable 'p' to 'objectExtensibilityPolyfillCheck'
// - Resolved require(866540) to 'object-extensibility-polyfill-check'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 667264)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 553786
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var libPolyfill_1 = require("lib-polyfill_1") /*id: 910663*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var c = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var getOwnPropertyNamesPolyfill = require("get-own-property-names-polyfill") /*id: 667264*/;
  var windowObjectPropertyNamesSafeGetter = require("window-object-property-names-safe-getter") /*id: 809638*/;
  var isExtensiblePolyfillOrCheck = require("is-extensible-polyfill-or-check") /*id: 765631*/;
  var symbolDescriptionGenerator = require("symbol-description-generator") /*id: 556893*/;
  var objectExtensibilityPolyfillCheck = require("object-extensibility-polyfill-check") /*id: 866540*/;
  var h = false;
  var d = symbolDescriptionGenerator("meta");
  var y = 0;
  function g(t) {
    c(t, d, {
      value: {
        objectID: "O" + y++,
        weakData: {}
      }
    });
  }
  var b = module.exports = {
    enable: function () {
      b.enable = function () {};
      h = true;
      var t = getOwnPropertyNamesPolyfill.getOwnPropertyNames;
      var r = functionBindFallback([].splice);
      var e = {
        [d]: 1
      };
      if (t(e).length) {
        getOwnPropertyNamesPolyfill.getOwnPropertyNames = function (e) {
          var n = t(e);
          var o = 0;
          var i = n.length;
          for (; o < i; o++) {
            if (n[o] === d) {
              r(n, o, 1);
              break;
            }
          }
          return n;
        };
        polyfillPropertyDefiner({
          target: "Object",
          stat: true,
          forced: true
        }, {
          getOwnPropertyNames: windowObjectPropertyNamesSafeGetter.f
        });
      }
    },
    fastKey: function (t, r) {
      if (!isObjectOrFunctionCheck(t)) {
        if (typeof t == "symbol") {
          return t;
        } else {
          return (typeof t == "string" ? "S" : "P") + t;
        }
      }
      if (!objectHasOwnPolyfill_1(t, d)) {
        if (!isExtensiblePolyfillOrCheck(t)) {
          return "F";
        }
        if (!r) {
          return "E";
        }
        g(t);
      }
      return t[d].objectID;
    },
    getWeakData: function (t, r) {
      if (!objectHasOwnPolyfill_1(t, d)) {
        if (!isExtensiblePolyfillOrCheck(t)) {
          return true;
        }
        if (!r) {
          return false;
        }
        g(t);
      }
      return t[d].weakData;
    },
    onFreeze: function (t) {
      if (objectExtensibilityPolyfillCheck && h && isExtensiblePolyfillOrCheck(t) && !objectHasOwnPolyfill_1(t, d)) {
        g(t);
      }
      return t;
    }
  };
  libPolyfill_1[d] = true;
}