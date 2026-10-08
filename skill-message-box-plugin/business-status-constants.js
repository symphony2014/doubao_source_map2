// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OT' to 'messageActions'
// - Renamed export 'yy' to 'businessStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 215311
         */
module.exports = function (module, exports, require) {
  (l = {}).Reviewing = "reviewing";
  l.Ban = "ban";
  l.Delete = "delete";
  l.Private = "private";
  l.Rollback = "rollback";
  let i = l;
  var l;
  var r = {
    Compose: "compose",
    Reply: "reply"
  };
  require.d(exports, {
    messageActions: function () {
      return r;
    },
    businessStatus: function () {
      return i;
    }
  });
}