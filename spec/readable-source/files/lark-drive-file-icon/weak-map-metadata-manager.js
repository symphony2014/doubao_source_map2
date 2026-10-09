// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'c' to 'emptyModule_2'
// - Resolved require(422324) to 'empty-module_2'
// - Renamed variable 'i' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Resolved require(976843) to 'object-define-property-safe'
// - Renamed variable 'f' to 'getOwnPropertyNamesUtil'
// - Resolved require(572559) to 'get-own-property-names-util'
// - Renamed variable 's' to 'getWindowPropertyNamesFallback'
// - Resolved require(868758) to 'get-window-property-names-fallback'
// - Renamed variable 'u' to 'isObjectExtensibleCheck'
// - Resolved require(414848) to 'is-object-extensible-check'
// - Renamed variable 'h' to 'symbolGeneratorWithRandomSuffix'
// - Resolved require(68100) to 'symbol-generator-with-random-suffix'
// - Renamed variable 'm' to 'objectExtensibilityCheck'
// - Resolved require(173176) to 'object-extensibility-check'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 572559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 770615
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var emptyModule_2 = require("empty-module_2") /*id: 422324*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var l = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  var getOwnPropertyNamesUtil = require("get-own-property-names-util") /*id: 572559*/;
  var getWindowPropertyNamesFallback = require("get-window-property-names-fallback") /*id: 868758*/;
  var isObjectExtensibleCheck = require("is-object-extensible-check") /*id: 414848*/;
  var symbolGeneratorWithRandomSuffix = require("symbol-generator-with-random-suffix") /*id: 68100*/;
  var objectExtensibilityCheck = require("object-extensibility-check") /*id: 173176*/;
  var v = false;
  var p = symbolGeneratorWithRandomSuffix("meta");
  var g = 0;
  function d(e) {
    l(e, p, {
      value: {
        objectID: "O" + g++,
        weakData: {}
      }
    });
  }
  var w = module.exports = {
    enable: function () {
      w.enable = function () {};
      v = true;
      var e = getOwnPropertyNamesUtil.getOwnPropertyNames;
      var t = functionBindPrototypeCheckWrapper([].splice);
      var r = {
        [p]: 1
      };
      if (e(r).length) {
        getOwnPropertyNamesUtil.getOwnPropertyNames = function (r) {
          var n = e(r);
          var a = 0;
          var c = n.length;
          for (; a < c; a++) {
            if (n[a] === p) {
              t(n, a, 1);
              break;
            }
          }
          return n;
        };
        coreJsExportUtil({
          target: "Object",
          stat: true,
          forced: true
        }, {
          getOwnPropertyNames: getWindowPropertyNamesFallback.f
        });
      }
    },
    fastKey: function (e, t) {
      if (!isObjectOrFunction_1(e)) {
        if (typeof e == "symbol") {
          return e;
        } else {
          return (typeof e == "string" ? "S" : "P") + e;
        }
      }
      if (!objectHasOwnPolyfill(e, p)) {
        if (!isObjectExtensibleCheck(e)) {
          return "F";
        }
        if (!t) {
          return "E";
        }
        d(e);
      }
      return e[p].objectID;
    },
    getWeakData: function (e, t) {
      if (!objectHasOwnPolyfill(e, p)) {
        if (!isObjectExtensibleCheck(e)) {
          return true;
        }
        if (!t) {
          return false;
        }
        d(e);
      }
      return e[p].weakData;
    },
    onFreeze: function (e) {
      if (objectExtensibilityCheck && v && isObjectExtensibleCheck(e) && !objectHasOwnPolyfill(e, p)) {
        d(e);
      }
      return e;
    }
  };
  emptyModule_2[p] = true;
}