// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'ComparisonStatus'
// - Renamed export 'U' to 'ChangeType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 699476
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  (o = r = r || {})[o.EQUAL = 0] = "EQUAL";
  o[o.UNEQUAL = 1] = "UNEQUAL";
  o[o.UPDATE = 2] = "UPDATE";
  (a = i = i || {})[a.ZONE = 0] = "ZONE";
  a[a.LINE_UPDATE = 1] = "LINE_UPDATE";
  a[a.LINE_CONSTANT = 2] = "LINE_CONSTANT";
  a[a.LINE_INSERT = 3] = "LINE_INSERT";
  a[a.LINE_DELETE = 4] = "LINE_DELETE";
  a[a.LEAF_UPDATE = 5] = "LEAF_UPDATE";
  a[a.LEAF_CONSTANT = 6] = "LEAF_CONSTANT";
  a[a.LEAF_INSERT = 7] = "LEAF_INSERT";
  a[a.LEAF_DELETE = 8] = "LEAF_DELETE";
  require.d(exports, {
    ComparisonStatus: function () {
      return r;
    },
    ChangeType: function () {
      return i;
    }
  });
}