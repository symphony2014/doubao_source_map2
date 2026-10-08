// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Af' to 'touchEvents'
// - Renamed export 'El' to 'phaseStates'
// - Renamed export 'cE' to 'selectionEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 561150
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  (o = {}).touchstart = "touchstart";
  o.touchend = "touchend";
  o.touchmove = "touchmove";
  let c = o;
  (i = {}).start = "start";
  i.end = "end";
  let u = i;
  (l = {}).start = "start";
  l.move = "move";
  l.stop = "stop";
  l.beforeStart = "beforeStart";
  l.browserSelectionChange = "browserSelectionChange";
  l.contextmenu = "contextmenu";
  l.restoreFocus = "restoreFocus";
  l.blur = "blur";
  l.selectingTapStop = "selectingTapStop";
  l.selectingTapMove = "selectingTapMove";
  l.selectingTapStart = "selectingTapStart";
  l.updateBrowserSelection = "updateBrowserSelection";
  let a = l;
  require.d(exports, {
    touchEvents: function () {
      return c;
    },
    phaseStates: function () {
      return u;
    },
    selectionEvents: function () {
      return a;
    }
  });
}