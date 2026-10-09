// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VideoPlayerConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 390603
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var xgplayerLoggerPlugin = require("xgplayer-logger-plugin") /*id: 955123*/;
  var videoPlayerReplayPlugin = require("video-player-replay-plugin") /*id: 22255*/;
  var playerPosterPlugin = require("player-poster-plugin") /*id: 623647*/;
  var playerStartButtonPlugin = require("player-start-button-plugin") /*id: 93801*/;
  var playerEnterPlugin = require("player-enter-plugin") /*id: 272209*/;
  var playerMiniscreenPlugin = require("player-miniscreen-plugin") /*id: 351955*/;
  var videoPlayerPcPlugin = require("video-player-pc-plugin") /*id: 492893*/;
  var mobileGesturePlugin = require("mobile-gesture-plugin") /*id: 950487*/;
  var videoKeyboardPlugin = require("video-keyboard-plugin") /*id: 973556*/;
  var videoPlayerLoadingPlugin = require("video-player-loading-plugin") /*id: 406667*/;
  var videoPlayerProgressPlugin = require("video-player-progress-plugin") /*id: 888087*/;
  var videoPlayButtonPlugin = require("video-play-button-plugin") /*id: 600472*/;
  var playerFullscreenPlugin = require("player-fullscreen-plugin") /*id: 847081*/;
  var videoPlayerTimePlugin = require("video-player-time-plugin") /*id: 626088*/;
  var playerVolumeControlPlugin = require("player-volume-control-plugin") /*id: 802453*/;
  var playerRotatePlugin = require("player-rotate-plugin") /*id: 188745*/;
  var playerPipIconPlugin = require("player-pip-icon-plugin") /*id: 201428*/;
  var videoPlayNextPlugin = require("video-play-next-plugin") /*id: 430001*/;
  var playerDownloadIconPlugin = require("player-download-icon-plugin") /*id: 644133*/;
  var playerScreenshotPlugin = require("player-screenshot-plugin") /*id: 45454*/;
  var videoDefinitionPlugin = require("video-definition-plugin") /*id: 199582*/;
  var playbackRatePlugin = require("playback-rate-plugin") /*id: 909938*/;
  var cssFullscreenPlugin = require("css-fullscreen-plugin") /*id: 968400*/;
  var videoPlayerErrorPlugin = require("video-player-error-plugin") /*id: 189387*/;
  var playerPromptPlugin = require("player-prompt-plugin") /*id: 591567*/;
  var progressPreviewPlugin = require("progress-preview-plugin") /*id: 405182*/;
  var videoThumbnailPlugin = require("video-thumbnail-plugin") /*id: 344817*/;
  var miniProgressPlugin = require("mini-progress-plugin") /*id: 519072*/;
  var dynamicBgPlayerPlugin = require("dynamic-bg-player-plugin") /*id: 158806*/;
  var videoPlayerTextConfig = require("video-player-text-config") /*id: 556791*/;
  var videoPlayerStatsPlugin = require("video-player-stats-plugin") /*id: 745534*/;
  var videoPlayerGapJumpPlugin = require("video-player-gap-jump-plugin") /*id: 826877*/;
  var videoPlayerWaitingJumpPlugin = require("video-player-waiting-jump-plugin") /*id: 631271*/;
  var playerSpeedTestPlugin = require("player-speed-test-plugin") /*id: 566763*/;
  var playerI18nManager = require("player-i18n-manager") /*id: 834464*/;
  var videoFpsDetectPlugin = require("video-fps-detect-plugin") /*id: 783721*/;
  playerI18nManager.playerLangManager.use(videoPlayerTextConfig.playerTextConfig);
  var W = babelRuntimeHelpers_1.createClass(function t(e, i) {
    babelRuntimeHelpers_1.classCallCheck(this, t);
    var Z;
    var F;
    var W;
    var B = i && i.isMobileSimulateMode === "mobile";
    var V = [].concat(i.isLive ? [] : [videoPlayerProgressPlugin.ProgressPlugin, miniProgressPlugin.MiniProgressPlugin, progressPreviewPlugin.ProgressPreview, videoPlayerTimePlugin.TimePlugin], [videoPlayButtonPlugin.PlayButtonPlugin, playerFullscreenPlugin.FullscreenPlugin, playerRotatePlugin.RotatePlugin, videoPlayNextPlugin.PlayNextPlugin, videoDefinitionPlugin.DefinitionPlugin, playbackRatePlugin.PlaybackRatePlugin, playerDownloadIconPlugin.PlayerDownloadPlugin, playerScreenshotPlugin.ScreenshotPlugin, playerVolumeControlPlugin.VolumeControlPlugin, playerPipIconPlugin.PipIconPlugin]);
    var Y = [videoPlayerReplayPlugin.ReplayPlugin, playerPosterPlugin.PosterPlugin, playerStartButtonPlugin.StartButtonPlugin, videoPlayerLoadingPlugin.LoadingPlugin, playerEnterPlugin.EnterPlugin, videoPlayerErrorPlugin.PlayerErrorPlugin, playerPromptPlugin.PromptPlugin, videoThumbnailPlugin.VideoThumbnailPlugin, playerMiniscreenPlugin.MiniscreenPlugin];
    this.plugins = [videoPlayerStatsPlugin.VideoStatsPlugin, xgplayerLoggerPlugin.XgLoggerPlugin].concat(babelRuntimeHelpers_1.toArray(V), Y, [videoPlayerGapJumpPlugin.GapJumpPlugin, videoPlayerWaitingJumpPlugin.WaitingTimeoutJump]);
    var G = B ? "mobile" : environmentDetectorUtil.environmentUtils.device;
    switch (G) {
      case "pc":
        (Z = this.plugins).push.apply(Z, [videoKeyboardPlugin.KeyboardPlugin, videoPlayerPcPlugin.PcVideoPlugin, cssFullscreenPlugin.CssFullscreenPlugin, playerSpeedTestPlugin.SpeedTestPlugin, videoFpsDetectPlugin.FpsDetectPlugin]);
        break;
      case "mobile":
        (F = this.plugins).push.apply(F, [mobileGesturePlugin.MobileGesturePlugin]);
        break;
      default:
        (W = this.plugins).push.apply(W, [videoKeyboardPlugin.KeyboardPlugin, videoPlayerPcPlugin.PcVideoPlugin, cssFullscreenPlugin.CssFullscreenPlugin]);
    }
    if (environmentDetectorUtil.environmentUtils.os.isIpad || G === "pc") {
      this.plugins.push(dynamicBgPlayerPlugin.DynamicBgPlugin);
    }
    if (environmentDetectorUtil.environmentUtils.os.isIpad) {
      this.plugins.push(videoPlayerPcPlugin.PcVideoPlugin);
    }
    this.ignores = [];
    this.i18n = [];
  });
  require.d(exports, {
    VideoPlayerConfig: function () {
      return W;
    }
  });
}