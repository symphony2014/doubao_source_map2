// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'commandTypes'
// - Renamed export 'n' to 'directionKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 159374
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).startTab = "start_tab";
  n.blockTab = "block_tab";
  n.untab = "untab";
  n.unalign = "unalign";
  n.deleteText = "delete_text";
  n.deleteBlock = "delete_block";
  n.addLink = "add_inline_link";
  let r = n;
  (o = {}).UP = "UP";
  o.DOWN = "DOWN";
  o.LEFT = "LEFT";
  o.RIGHT = "RIGHT";
  let d = o;
  require.d(exports, {
    commandTypes: function () {
      return r;
    },
    directionKeys: function () {
      return d;
    }
  });
}