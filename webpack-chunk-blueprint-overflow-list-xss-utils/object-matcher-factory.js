// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 452100
         */
module.exports = function (module, exports, require) {
  var objectMatchChecker = require("object-match-checker") /*id: 334875*/;
  var objectEntriesMetaUtil = require("object-entries-meta-util") /*id: 564277*/;
  function o(e, t) {
    return function (n) {
      return n != null && n[e] === t && (t !== undefined || e in Object(n));
    };
  }
  function a(e) {
    var t = objectEntriesMetaUtil.getObjEntriesMeta(e);
    if (t.length == 1 && t[0][2]) {
      return o(t[0][0], t[0][1]);
    } else {
      return function (n) {
        return n === e || objectMatchChecker.matchesObject(n, e, t);
      };
    }
  }
  var deepEqualCore = require("deep-equal-core") /*id: 489806*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var pathArrayValidator = require("path-array-validator") /*id: 679313*/;
  var isPropertyKeyUtil = require("is-property-key-util") /*id: 435695*/;
  var isPrimitiveValueUtil = require("is-primitive-value-util") /*id: 862954*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var propertyAccessor = require("property-accessor") /*id: 119718*/;
  var objectPathGetUtil = require("object-path-get-util") /*id: 55071*/;
  function m(e) {
    if (isPropertyKeyUtil.isPropertyKey(e)) {
      return propertyAccessor.getProperty(valueToStringUtil_1.valueToString(e));
    } else {
      return function (t) {
        return objectPathGetUtil.getObjectPath(t, e);
      };
    }
  }
  function y(e) {
    if (typeof e == "function") {
      return e;
    }
    if (e == null) {
      return identityFunctionUtil_1.identity;
    }
    if (typeof e == "object") {
      var t;
      var n;
      if (arrayIsArrayUtil.isArray(e)) {
        t = e[0];
        n = e[1];
        if (isPropertyKeyUtil.isPropertyKey(t) && isPrimitiveValueUtil.isPrimitiveValue(n)) {
          return o(valueToStringUtil_1.valueToString(t), n);
        } else {
          return function (e) {
            var r = objectPathGetDefault.getObjectPathDefault(e, t);
            if (r === undefined && r === n) {
              return pathArrayValidator.validatePathArray(e, t);
            } else {
              return deepEqualCore.isEqual(n, r, 3);
            }
          };
        }
      } else {
        return a(e);
      }
    }
    return m(e);
  }
  require.d(exports, {
    createMatcher: function () {
      return y;
    }
  });
}