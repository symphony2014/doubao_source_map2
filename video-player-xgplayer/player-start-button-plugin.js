// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'StartButtonPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 93801
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var audioPlayStateConstants = require("audio-play-state-constants") /*id: 820236*/;
  var playButtonSvgIcon = require("play-button-svg-icon") /*id: 689622*/;
  var pauseIconSvgFactory = require("pause-icon-svg-factory") /*id: 382284*/;
  var l = {};
  function f(e) {
    if (e) {
      window.clearTimeout(e);
      return;
    }
    Object.keys(l).map(function (e) {
      window.clearTimeout(l[e].id);
      delete l[e];
    });
  }
  var h = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n(e) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      o = t.call(this, e);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onPlayerReset", function () {
        o.autoPlayStart = false;
        var e = o.config.mode === "auto" ? "auto-hide" : "hide";
        o.setAttr("data-state", "play");
        playerUtilityHelpers.domUtils.removeClass(o.root, e);
        o.show();
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onAutoplayStart", function () {
        if (!o.autoPlayStart) {
          var e = o.config.mode === "auto" ? "auto-hide" : "hide";
          playerUtilityHelpers.domUtils.addClass(o.root, e);
          o.autoPlayStart = true;
          o.onPlayPause("play");
        }
      });
      o.autoPlayStart = false;
      return o;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "afterCreate",
      value: function () {
        var e = this;
        var t = this.player;
        var n = this.playerConfig;
        this.initIcons();
        this.once(videoPlayerEventConstants.READY, function () {
          if (n) {
            if (n.lang && n.lang === "en") {
              playerUtilityHelpers.domUtils.addClass(t.root, "lang-is-en");
            } else if (n.lang === "jp") {
              playerUtilityHelpers.domUtils.addClass(t.root, "lang-is-jp");
            }
          }
        });
        this.on(videoPlayerEventConstants.AUTOPLAY_STARTED, this.onAutoplayStart);
        if (!n.autoplay) {
          this.show();
        }
        this.on(videoPlayerEventConstants.AUTOPLAY_PREVENTED, function () {
          var t = e.config.mode === "auto" ? "auto-hide" : "hide";
          e.setAttr("data-state", "play");
          playerUtilityHelpers.domUtils.removeClass(e.root, t);
          e.show();
        });
        this.on(videoPlayerEventConstants.PLAY, function () {
          e.onPlayPause("play");
        });
        this.on(videoPlayerEventConstants.PAUSE, function () {
          e.onPlayPause("pause");
        });
        this.on(videoPlayerEventConstants.RESET, function () {
          e.onPlayerReset();
        });
        this.clickHandler = this.hook("startClick", this.switchPausePlay, {
          pre: function (t) {
            if (t.cancelable) {
              t.preventDefault();
            }
            t.stopPropagation();
            var n = e.player.paused;
            e.emitUserAction(t, "switch_play_pause", {
              props: "paused",
              from: n,
              to: !n
            });
          }
        });
        this.bind(["click", "touchend"], this.clickHandler);
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          startPlay: {
            icon: playButtonSvgIcon.createPlayButton,
            class: "xg-icon-play"
          },
          startPause: {
            icon: pauseIconSvgFactory.createPauseIcon,
            class: "xg-icon-pause"
          }
        };
      }
    }, {
      key: "initIcons",
      value: function () {
        var e = this.icons;
        this.appendChild("xg-start-inner", e.startPlay);
        this.appendChild("xg-start-inner", e.startPause);
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.addClass(this.root, "hide");
      }
    }, {
      key: "show",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "hide");
      }
    }, {
      key: "focusHide",
      value: function () {
        playerUtilityHelpers.domUtils.addClass(this.root, "focus-hide");
      }
    }, {
      key: "recover",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "focus-hide");
      }
    }, {
      key: "switchStatus",
      value: function (e) {
        if (e) {
          this.setAttr("data-state", this.player.paused ? "pause" : "play");
        } else {
          this.setAttr("data-state", this.player.paused ? "play" : "pause");
        }
      }
    }, {
      key: "animate",
      value: function (e) {
        var t = this;
        this._animateId = function (e, t, n = {
          start: null,
          end: null
        }) {
          if (l[e]) {
            window.clearTimeout(l[e].id);
          }
          l[e] = {};
          if (n.start) {
            n.start();
          }
          l[e].id = window.setTimeout(function () {
            if (n.end) {
              n.end();
            }
            window.clearTimeout(l[e].id);
            delete l[e];
          }, t);
          return l[e].id;
        }("pauseplay", 400, {
          start: function () {
            playerUtilityHelpers.domUtils.addClass(t.root, "interact");
            t.show();
            t.switchStatus(true);
          },
          end: function () {
            playerUtilityHelpers.domUtils.removeClass(t.root, "interact");
            if (!e) {
              t.hide();
            }
            t._animateId = null;
          }
        });
      }
    }, {
      key: "endAnimate",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "interact");
        f(this._animateId);
        this._animateId = null;
      }
    }, {
      key: "switchPausePlay",
      value: function (e) {
        var t = this.player;
        if (e.cancelable) {
          e.preventDefault();
        }
        e.stopPropagation();
        if (!(t.state < audioPlayStateConstants.PlayStateMap.READY)) {
          if (this.player.paused || t.state !== audioPlayStateConstants.PlayStateMap.RUNNING) {
            t.play();
          } else {
            t.pause();
          }
        }
      }
    }, {
      key: "onPlayPause",
      value: function (e) {
        var t = this.config;
        var n = this.player;
        if (n && !(n.state < audioPlayStateConstants.PlayStateMap.RUNNING) && this.autoPlayStart) {
          if (t.mode === "show") {
            this.switchStatus();
            this.show();
            return;
          }
          if (t.mode === "auto") {
            this.switchStatus();
            return;
          }
          if (t.isShowPause && n.paused && !n.ended || t.isShowEnd && n.ended) {
            this.switchStatus();
            this.show();
            this.endAnimate();
            return;
          }
          if (t.disableAnimate) {
            this.switchStatus();
            this.hide();
            return;
          }
          if (e === "play") {
            if (this.autoPlayStart) {
              this.animate();
            } else {
              this.hide();
            }
          } else {
            if (!this.autoPlayStart || n.ended) {
              return;
            }
            this.animate();
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind(["click", "touchend"], this.clickHandler);
        f(this._animateId);
      }
    }, {
      key: "render",
      value: function () {
        var e = this.playerConfig.autoplay ? this.config.mode === "auto" ? "auto-hide" : "hide" : "";
        return `
    <xg-start class="xgplayer-start ${e}">
    <xg-start-inner></xg-start-inner>
    </xg-start>`;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "start";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          isShowPause: false,
          isShowEnd: false,
          disableAnimate: false,
          mode: "hide"
        };
      }
    }]);
    return n;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    StartButtonPlugin: function () {
      return h;
    }
  });
}