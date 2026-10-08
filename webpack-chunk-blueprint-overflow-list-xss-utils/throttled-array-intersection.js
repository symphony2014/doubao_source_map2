// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledIntersect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 832949
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var arrayIntersectionUtils = require("array-intersection-utils") /*id: 269495*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var ensureArrayLikeObject = require("ensure-array-like-object") /*id: 723289*/;
  var s = throttledArgStringUtil.throttledStringify(function (e) {
    var t = arrayMapUtil.arrayMap(e, ensureArrayLikeObject.ensureArrayLike);
    if (t.length && t[0] === e[0]) {
      return arrayIntersectionUtils.arrayIntersection(t);
    } else {
      return [];
    }
  });
  exports.throttledIntersect = s;
}