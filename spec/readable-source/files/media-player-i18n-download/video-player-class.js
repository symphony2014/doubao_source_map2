// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VideoPlayer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 578845
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerCoreClass = require("video-player-core-class") /*id: 741933*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var xgplayerClassNames = require("xgplayer-class-names") /*id: 643317*/;
  var playerI18nManager = require("player-i18n-manager") /*id: 834464*/;
  var playerErrorHandler = require("player-error-handler") /*id: 608826*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerPluginManager = require("video-player-plugin-manager") /*id: 390603*/;
  var p = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    return babelRuntimeHelpers_1.createClass(i);
  }(videoPlayerCoreClass.Player);
  babelRuntimeHelpers_1.defineProperty(p, "defaultPreset", videoPlayerPluginManager.VideoPlayerConfig);
  babelRuntimeHelpers_1.defineProperty(p, "Util", playerUtilityHelpers.domUtils);
  babelRuntimeHelpers_1.defineProperty(p, "Sniffer", environmentDetectorUtil.environmentUtils);
  babelRuntimeHelpers_1.defineProperty(p, "Errors", playerErrorHandler.MediaErrorClass);
  babelRuntimeHelpers_1.defineProperty(p, "Events", videoPlayerEventConstants);
  babelRuntimeHelpers_1.defineProperty(p, "Plugin", playerUiPluginBase.PlayerUiPlugin);
  babelRuntimeHelpers_1.defineProperty(p, "BasePlugin", playerPluginBaseClass.PluginBase);
  babelRuntimeHelpers_1.defineProperty(p, "I18N", playerI18nManager.playerLangManager);
  babelRuntimeHelpers_1.defineProperty(p, "STATE_CLASS", xgplayerClassNames.playerClasses);
  require.d(exports, {
    VideoPlayer: function () {
      return p;
    }
  });
}