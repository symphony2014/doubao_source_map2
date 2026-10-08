// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'generationStatus'
// - Renamed export 'Q' to 'roomEventTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 871566
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).USER_NEWINFO = "USER_NEWINFO";
  n.USER_LEAVE = "USER_LEAVE";
  n.ROOM_MEMBERS = "ROOM_MEMBERS";
  n.ENGAGEMENT_CURSOR = "ENGAGEMENT_CURSOR";
  n.USER_IGNORE_ABBREVIATION = "USER_IGNORE_ABBREVIATION";
  n.DATA_MIGRATE = "DATA_MIGRATE";
  n.UPDATE_PERMISSION = "UPDATE_PERMISSION";
  n.META = "META";
  n.UPDATE_ATTACHMENT = "UPDATE_ATTACHMENT";
  let l = n;
  (o = {})[o.GENERATING = 0] = "GENERATING";
  o[o.SUCCESS = 1] = "SUCCESS";
  o[o.FAIL = 2] = "FAIL";
  o[o.TIMEOUT = 3] = "TIMEOUT";
  let s = o;
  require.d(exports, {
    generationStatus: function () {
      return s;
    },
    roomEventTypes: function () {
      return l;
    }
  });
}