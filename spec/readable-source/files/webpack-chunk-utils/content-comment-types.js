// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'CommentStatus'
// - Renamed export 'z' to 'CommentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 900376
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  (i = {}).ContentComment = "ContentComment";
  let a = i;
  (o = {})[o.normal = 1] = "normal";
  o[o.solved = 2] = "solved";
  let u = o;
  require.d(exports, {
    CommentStatus: function () {
      return u;
    },
    CommentType: function () {
      return a;
    }
  });
}