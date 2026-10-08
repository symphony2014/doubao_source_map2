// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'minutesArtifactPreviewSymbol'
// - Resolved require(233806) to 'minutes-artifact-preview-symbol'
// - Updated imported property 'M' to 'minutesArtifactId' (module 233806)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 483519
         */
module.exports = function (module, exports, require) {
  var minutesArtifactPreviewSymbol = require("minutes-artifact-preview-symbol") /*id: 233806*/;
  let r = e => {
    let {
      intention: t
    } = e;
    if (t === "meeting_minutes") {
      return minutesArtifactPreviewSymbol.minutesArtifactId;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    meetingMinutesCanvasPluginMatcher: function () {
      return r;
    }
  });
}