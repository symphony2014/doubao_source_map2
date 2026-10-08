// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PlayButtonPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 600472
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  var playerIconHoverPlugin = require("player-icon-hover-plugin") /*id: 945213*/;
  var playButtonSvgIcon = require("play-button-svg-icon") /*id: 689622*/;
  var pauseIconSvgFactory = require("pause-icon-svg-factory") /*id: 382284*/;
  var l = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n() {
      babelRuntimeHelpers_1.classCallCheck(this, n);
      return t.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "afterCreate",
      value: function () {
        var e = this;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "afterCreate", this).call(this);
        var t = this.player;
        if (!this.config.disable) {
          this.initIcons();
          this.btnClick = this.btnClick.bind(this);
          this.bind(["touchend", "click"], this.btnClick);
          this.on([videoPlayerEventConstants.PAUSE, videoPlayerEventConstants.ERROR, videoPlayerEventConstants.EMPTIED], function () {
            e.animate(t.paused);
          });
          this.on(videoPlayerEventConstants.PLAY, function () {
            e.animate(t.paused);
          });
          this.animate(true);
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          play: {
            icon: playButtonSvgIcon.createPlayButton,
            class: "xg-icon-play"
          },
          pause: {
            icon: pauseIconSvgFactory.createPauseIcon,
            class: "xg-icon-pause"
          }
        };
      }
    }, {
      key: "btnClick",
      value: function (e) {
        e.preventDefault();
        e.stopPropagation();
        var t = this.player;
        this.emitUserAction(e, "switch_play_pause", {
          prop: "paused",
          from: t.paused,
          to: !t.paused
        });
        if (t.ended) {
          t.replay();
        } else if (t.paused) {
          t.play();
          this.animate(false);
        } else {
          t.pause();
          this.animate(true);
        }
        return false;
      }
    }, {
      key: "initIcons",
      value: function () {
        var e = this.icons;
        this.appendChild(".xgplayer-icon", e.play);
        this.appendChild(".xgplayer-icon", e.pause);
      }
    }, {
      key: "animate",
      value: function (e) {
        if (this.player) {
          var t = this.i18nKeys;
          var n = this.find(".xg-tips");
          if (e) {
            this.setAttr("data-state", "pause");
            if (n) {
              this.changeLangTextKey(n, t.PLAY_TIPS);
            }
          } else {
            this.setAttr("data-state", "play");
            if (n) {
              this.changeLangTextKey(n, t.PAUSE_TIPS);
            }
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(n.prototype), "destroy", this).call(this);
        this.unbind(["touchend", "click"], this.btnClick);
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `<xg-icon class="xgplayer-play">
    <div class="xgplayer-icon">
    </div>
    ${i18nTipRenderer.renderTip(this, "PLAY_TIPS", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "play";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_LEFT,
          index: 0,
          disable: false
        };
      }
    }]);
    return n;
  }(playerIconHoverPlugin.IconHoverPlugin);
  require.d(exports, {
    PlayButtonPlugin: function () {
      return l;
    }
  });
}