// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'conversationScope'
// - Renamed export 'i' to 'conversationType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 730433
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  (r = {}).LocalConversation = "LocalConversation";
  r.Conversation = "Conversation";
  let a = r;
  (i = {}).Bot = "bot";
  i.Feed = "feed";
  i.Thread = "thread";
  i.Guest = "guest";
  i.Overall = "overall";
  let l = i;
  require.d(exports, {
    conversationScope: function () {
      return l;
    },
    conversationType: function () {
      return a;
    }
  });
}