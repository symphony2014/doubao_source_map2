// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i1' to 'participantTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 437956
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {})[i.Coco = 1] = "Coco";
  i[i.Bot = 2] = "Bot";
  i[i.CocoSub = 3] = "CocoSub";
  i[i.CocoWeb = 4] = "CocoWeb";
  i[i.CocoWebSub = 5] = "CocoWebSub";
  let r = i;
  require.d(exports, {
    participantTypes: function () {
      return r;
    }
  });
}