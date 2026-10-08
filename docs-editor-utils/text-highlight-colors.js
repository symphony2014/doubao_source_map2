// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'lS' to 'textHighlightBg'
// - Renamed export 'or' to 'textHighlight'
// - Renamed export 'vG' to 'highlightColors'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 514350
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {}).COLOR = "color";
  o.BACKGROUND_COLOR = "backgroundColor";
  let i = o;
  let l = "textHighlight";
  let c = "textHighlightBackground";
  require.d(exports, {
    textHighlightBg: function () {
      return c;
    },
    textHighlight: function () {
      return l;
    },
    highlightColors: function () {
      return i;
    }
  });
}