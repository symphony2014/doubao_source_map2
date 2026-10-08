// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'blockTypes'
// - Renamed export 's' to 'renderEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 920877
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).listenBlockCommonRender = "listenBlockCommonRender";
  n.waitResourcesLoaded = "waitResourcesLoaded";
  let l = n;
  (o = {})[o.IMAGE = 10] = "IMAGE";
  o[o.CODE = 20] = "CODE";
  o[o.CHAT_CARD = 30] = "CHAT_CARD";
  o[o.POLL = 40] = "POLL";
  o[o.TASK = 50] = "TASK";
  let s = o;
  require.d(exports, {
    blockTypes: function () {
      return s;
    },
    renderEvents: function () {
      return l;
    }
  });
}