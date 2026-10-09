// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'pickArrayElements'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72645.b0fb9881.js
         * chunkId: 72645
         * moduleId: 89042
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function o(e, t) {
    var n = -1;
    var r = t.length;
    var o = Array(r);
    var a = e == null;
    while (++n < r) {
      o[n] = a ? undefined : objectPathGetDefault.getObjectPathDefault(e, t[n]);
    }
    return o;
  }
  var unsetPathsListUtil = require("unset-paths-list-util") /*id: 731790*/;
  var valueComparatorUtil = require("value-comparator-util") /*id: 142324*/;
  var throttledArgStringifyUtil_1 = require("throttled-arg-stringify-util_1") /*id: 931463*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var c = throttledArgStringifyUtil_1.throttledStringify(function (e, t) {
    var n = e == null ? 0 : e.length;
    var i = o(e, t);
    unsetPathsListUtil.unsetPathsList(e, arrayMapUtil.arrayMap(t, function (e) {
      if (isValidLengthUtil.isValidLength(e, n)) {
        return +e;
      } else {
        return e;
      }
    }).sort(valueComparatorUtil.compareValues));
    return i;
  });
  require.d(exports, {
    pickArrayElements: function () {
      return c;
    }
  });
}