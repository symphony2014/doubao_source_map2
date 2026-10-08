// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mediaCanvasSymbols'
// - Resolved require(659793) to 'media-canvas-symbols'
// - Updated imported property 'a' to 'mediaVideoCanvas' (module 659793)
// - Updated imported property 'W' to 'mediaAudioCanvas' (module 659793)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 426212
         */
module.exports = function (module, exports, require) {
  var mediaCanvasSymbols = require("media-canvas-symbols") /*id: 659793*/;
  let r = e => {
    let {
      mediaInfo: t
    } = e;
    if ((t == null ? undefined : t.type) === "video") {
      return mediaCanvasSymbols.mediaVideoCanvas;
    } else {
      return undefined;
    }
  };
  let o = e => {
    let {
      mediaInfo: t
    } = e;
    if ((t == null ? undefined : t.type) === "audio") {
      return mediaCanvasSymbols.mediaAudioCanvas;
    } else {
      return undefined;
    }
  };
  require.r(exports);
  require.d(exports, {
    mediaAudioCanvasPluginMatcher: function () {
      return o;
    },
    mediaVideoCanvasPluginMatcher: function () {
      return r;
    }
  });
}