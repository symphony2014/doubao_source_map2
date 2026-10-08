// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MZ' to 'parseStates'
// - Renamed export 'i1' to 'botTypes'
// - Renamed export 'm9' to 'reviewStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 924042
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  (i = {})[i.Coco = 1] = "Coco";
  i[i.Bot = 2] = "Bot";
  i[i.CocoSub = 3] = "CocoSub";
  i[i.CocoWeb = 4] = "CocoWeb";
  i[i.CocoWebSub = 5] = "CocoWebSub";
  let a = i;
  (r = {})[r.ParseState_Default = 0] = "ParseState_Default";
  r[r.ParseState_Success = 1] = "ParseState_Success";
  r[r.ParseState_Failed = 2] = "ParseState_Failed";
  r[r.ParseState_Processing = 3] = "ParseState_Processing";
  let l = r;
  (o = {})[o.ReviewState_Default = 0] = "ReviewState_Default";
  o[o.ReviewState_Access = 1] = "ReviewState_Access";
  o[o.ReviewState_NotCompliant = 2] = "ReviewState_NotCompliant";
  o[o.ReviewState_Processing = 3] = "ReviewState_Processing";
  let s = o;
  require.d(exports, {
    parseStates: function () {
      return l;
    },
    botTypes: function () {
      return a;
    },
    reviewStates: function () {
      return s;
    }
  });
}