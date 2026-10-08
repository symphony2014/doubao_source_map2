// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VX' to 'chatBotDiscoverUrl'
// - Renamed export 'f3' to 'chatBotCreateUrl'
// - Renamed export 'fU' to 'chatBaseUrl'
// - Renamed export 'nj' to 'UserSections'
// - Renamed export 'yy' to 'ModerationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 680824
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).Reviewing = "reviewing";
  i.Ban = "ban";
  i.Delete = "delete";
  i.Private = "private";
  i.Rollback = "rollback";
  let o = i;
  (r = {}).Discover = "discover";
  r.Profile = "profile";
  let a = r;
  let s = "/chat/bot/create";
  let l = "/chat/bot/discover";
  let c = "/chat/";
  require.d(exports, {
    chatBotDiscoverUrl: function () {
      return l;
    },
    chatBotCreateUrl: function () {
      return s;
    },
    chatBaseUrl: function () {
      return c;
    },
    UserSections: function () {
      return a;
    },
    ModerationStatus: function () {
      return o;
    }
  });
}