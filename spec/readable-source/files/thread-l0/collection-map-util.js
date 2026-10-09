// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mapCollection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14520.ef9f9644.js
         * chunkId: 14520
         * moduleId: 543979
         */
module.exports = function (module, exports, require) {
  var objectForeachUtil_1_1 = require("object-foreach-util_1_1") /*id: 617264*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  exports.mapCollection = function (t, e) {
    var n = -1;
    var o = isArrayLikeUtil.isArrayLike(t) ? Array(t.length) : [];
    objectForeachUtil_1_1.objectForEach(t, function (t, r, i) {
      o[++n] = e(t, r, i);
    });
    return o;
  };
}