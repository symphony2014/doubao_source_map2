// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'MentionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 83252.91175ae0.js
         * chunkId: 83252
         * moduleId: 622152
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {})[o.slash = 1] = "slash";
  o[o.mentionAt = 2] = "mentionAt";
  o[o.mentionBracket = 3] = "mentionBracket";
  o[o.mentionBracketCN = 4] = "mentionBracketCN";
  o[o.mentionRoundBracket = 6] = "mentionRoundBracket";
  o[o.mentionRoundBracketCN = 7] = "mentionRoundBracketCN";
  let l = o;
  require.d(exports, {
    MentionTypes: function () {
      return l;
    }
  });
}