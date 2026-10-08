// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Go' to 'basicTheme'
// - Renamed export 'cE' to 'panelTheme'
// - Renamed export 'eM' to 'completeTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 541237
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  (o = {}).Text = "text";
  o.Background = "background";
  let c = o;
  (i = {}).Text = "text";
  i.LightBackground = "lightBackground";
  i.DarkBackground = "darkBackground";
  i.LightBorder = "lightBorder";
  i.DarkBroder = "darkBroder";
  i.PanelBorder = "panelBorder";
  i.PanelBackground = "panelBackground";
  let u = i;
  (l = {}).Text = "text";
  l.Background = "background";
  l.PanelBackground = "panelBackground";
  let a = l;
  require.d(exports, {
    basicTheme: function () {
      return c;
    },
    panelTheme: function () {
      return a;
    },
    completeTheme: function () {
      return u;
    }
  });
}