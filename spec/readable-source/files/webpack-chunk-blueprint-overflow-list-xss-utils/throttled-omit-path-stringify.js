// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'omitPathStringify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 159496
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var deepCloneUtility = require("deep-clone-utility") /*id: 319011*/;
  var objectPathUnsetUtil = require("object-path-unset-util") /*id: 502450*/;
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  function c(e) {
    if (isPlainObjectUtil.isPlainObject(e)) {
      return undefined;
    } else {
      return e;
    }
  }
  var throttledArgStringifyUtil_1 = require("throttled-arg-stringify-util_1") /*id: 931463*/;
  var objectKeysNormalizer = require("object-keys-normalizer") /*id: 585390*/;
  var h = throttledArgStringifyUtil_1.throttledStringify(function (e, t) {
    var n = {};
    if (e == null) {
      return n;
    }
    var u = false;
    t = arrayMapUtil.arrayMap(t, function (t) {
      t = pathCastUtil.castPath(t, e);
      u ||= t.length > 1;
      return t;
    });
    safePropertyAssign.safePropAssign(e, objectKeysNormalizer.normalizeObjectKeys(e), n);
    if (u) {
      n = deepCloneUtility.deepClone(n, 7, c);
    }
    for (var l = t.length; l--;) {
      objectPathUnsetUtil.unsetObjectPath(n, t[l]);
    }
    return n;
  });
  require.d(exports, {
    omitPathStringify: function () {
      return h;
    }
  });
}