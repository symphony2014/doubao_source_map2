// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UP' to 'viewSwitchType'
// - Renamed export 'bW' to 'viewTypes'
// - Renamed export 'mx' to 'viewTypeName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 676077
         */
module.exports = function (module, exports, require) {
  var o;
  let i = "view";
  (o = {}).Card = "Card";
  o.Preview = "Preview";
  o.Inline = "inline";
  let l = o;
  let c = "SWITCH_VIEW_BLOCK_VIEW_TYPE";
  require.d(exports, {
    viewSwitchType: function () {
      return c;
    },
    viewTypes: function () {
      return l;
    },
    viewTypeName: function () {
      return i;
    }
  });
}