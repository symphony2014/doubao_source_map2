// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'VideoPlayerWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 232337
         */
module.exports = function (module, exports, require) {
  var videoPlayerComponent = require("video-player-component") /*id: 483314*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function o(e) {
    let {
      url: i,
      useCssFullscreen: n,
      autoPlay: o,
      definitions: s,
      posterUrl: a,
      showClose: c,
      menuPopoverUseHoverTrigger: d,
      controlsConfig: h,
      setPlayerRef: u,
      onClose: p
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(videoPlayerComponent.VideoPlayerView, {
      ref: u,
      url: i,
      autoPlay: o,
      definitions: s,
      posterUrl: a,
      showClose: c,
      menuPopoverUseHoverTrigger: d,
      onClose: p,
      useCssFullscreen: n,
      controlsConfig: h
    });
  }
  require.d(exports, {
    VideoPlayerWrapper: function () {
      return o;
    }
  });
}