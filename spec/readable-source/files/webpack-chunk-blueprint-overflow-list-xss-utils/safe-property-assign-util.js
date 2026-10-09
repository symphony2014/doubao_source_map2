// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safePropertyAssign'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 377863
         */
module.exports = function (module, exports, require) {
  var safePropertySetter = require("safe-property-setter") /*id: 859066*/;
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var throttledArgVerifyUtil = require("throttled-arg-verify-util") /*id: 680343*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var prototypeChecker = require("prototype-checker") /*id: 411247*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var c = Object.prototype.hasOwnProperty;
  var l = throttledArgVerifyUtil.throttledArgVerify(function (e, t) {
    if (prototypeChecker.isPrototype(t) || isArrayLikeUtil.isArrayLike(t)) {
      safePropertyAssign.safePropAssign(t, getOwnKeys.getOwnKeys(t), e);
      return;
    }
    for (var n in t) {
      if (c.call(t, n)) {
        safePropertySetter.setPropertyValue(e, n, t[n]);
      }
    }
  });
  exports.safePropertyAssign = l;
}