// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'orderBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 86613
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var objectPathGetUtil = require("object-path-get-util") /*id: 55071*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var collectionMapUtil = require("collection-map-util") /*id: 543979*/;
  function s(e, t) {
    var n = e.length;
    for (e.sort(t); n--;) {
      e[n] = e[n].value;
    }
    return e;
  }
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var valueComparatorUtil = require("value-comparator-util") /*id: 142324*/;
  function d(e, t, n) {
    var i = -1;
    var r = e.criteria;
    var o = t.criteria;
    var a = r.length;
    var s = n.length;
    while (++i < a) {
      var l = valueComparatorUtil.compareValues(r[i], o[i]);
      if (l) {
        if (i >= s) {
          return l;
        }
        return l * (n[i] == "desc" ? -1 : 1);
      }
    }
    return e.index - t.index;
  }
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  function f(e, t, n) {
    t = t.length ? arrayMapUtil.arrayMap(t, function (e) {
      if (arrayIsArrayUtil.isArray(e)) {
        return function (t) {
          return objectPathGetUtil.getObjectPath(t, e.length === 1 ? e[0] : e);
        };
      } else {
        return e;
      }
    }) : [identityFunctionUtil_1.identity];
    var c = -1;
    t = arrayMapUtil.arrayMap(t, identityWrapper.createWrapper(objectMatcherFactory.createMatcher));
    return s(collectionMapUtil.mapCollection(e, function (e, n, r) {
      return {
        criteria: arrayMapUtil.arrayMap(t, function (t) {
          return t(e);
        }),
        index: ++c,
        value: e
      };
    }), function (e, t) {
      return d(e, t, n);
    });
  }
  require.d(exports, {
    orderBy: function () {
      return f;
    }
  });
}