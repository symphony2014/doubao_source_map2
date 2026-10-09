// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ns' to 'ChatStatus'
// - Renamed export 't2' to 'ChatLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 558074
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  (i = {}).Pending = "Pending";
  i.Creating = "Creating";
  i.CreatingSecondPhase = "CreatingSecondPhase";
  i.Done = "Done";
  i.Failed = "Failed";
  let o = i;
  (r = {}).ReachLimit = "reach_limit";
  let a = r;
  require.d(exports, {
    ChatStatus: function () {
      return o;
    },
    ChatLimit: function () {
      return a;
    }
  });
}