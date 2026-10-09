// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bo' to 'releaseType'
// - Renamed export 'Fz' to 'uiInteractionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79175.7881c099.js
         * chunkId: 79175
         * moduleId: 169442
         */
module.exports = function (module, exports, require) {
  var o = {
    Diff: 0,
    Release: 1
  };
  var l = {
    InputBox: 0,
    GuidanceOrSuggestion: 1,
    Guidance: 2,
    Suggestion: 3,
    DesktopPush: 4,
    DesktopAskAssistant: 5,
    DesktopLauncher: 6,
    SharedApp: 7,
    CanvasActionbar: 8
  };
  require.d(exports, {
    releaseType: function () {
      return o;
    },
    uiInteractionType: function () {
      return l;
    }
  });
}