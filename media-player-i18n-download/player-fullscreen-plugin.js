// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FullscreenPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 847081
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  var playerIconHoverPlugin = require("player-icon-hover-plugin") /*id: 945213*/;
  function u() {
    return new DOMParser().parseFromString("<svg width=\"32px\" height=\"40px\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M11.2374369,14 L17.6187184,7.61871843 C17.9604272,7.27700968 17.9604272,6.72299032 17.6187184,6.38128157 C17.2770097,6.03957281 16.7229903,6.03957281 16.3812816,6.38128157 L9.38128157,13.3812816 C9.03957281,13.7229903 9.03957281,14.2770097 9.38128157,14.6187184 L16.3812816,21.6187184 C16.7229903,21.9604272 17.2770097,21.9604272 17.6187184,21.6187184 C17.9604272,21.2770097 17.9604272,20.7229903 17.6187184,20.3812816 L11.2374369,14 L11.2374369,14 Z\" fill=\"#FFFFFF\"></path>\n    </g>\n</svg>", "image/svg+xml").firstChild;
  }
  var h = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        this.initIcons();
        this.onClick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          t.config.onClick(e);
        };
        this.bind(["click", "touchend"], this.onClick);
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          screenBack: {
            icon: u,
            class: "xg-fullscreen-back"
          }
        };
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        this.appendChild(this.root, t.screenBack);
      }
    }, {
      key: "show",
      value: function () {
        playerUtilityHelpers.domUtils.addClass(this.root, "show");
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "show");
      }
    }, {
      key: "render",
      value: function () {
        return "<xg-icon class=\"xgplayer-back\">\n    </xg-icon>";
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "topbackicon";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.ROOT_TOP,
          index: 0
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  function d() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"2 -4 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0320625 0.0320625)\" d=\"M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  function f() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"40\" viewBox=\"2 -4 28 40\">\n  <path fill=\"#fff\" transform=\"scale(0.0320625 0.0320625)\" d=\"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var p = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var o = arguments.length;
      var s = Array(o);
      var a = 0;
      for (; a < o; a++) {
        s[a] = arguments[a];
      }
      t = e.call.apply(e, [this].concat(s));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onOrientationChange", function (e) {
        if (t.player.fullscreen && t.config.rotateFullscreen) {
          if (window.orientation === 90 || window.orientation === -90) {
            t.player.setRotateDeg(0);
          } else {
            t.player.setRotateDeg(90);
          }
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        var e = this.config;
        var r = this.playerConfig;
        if (!e.disable) {
          if (e.target) {
            this.playerConfig.fullscreenTarget = this.config.target;
          }
          var l = playerUtilityHelpers.domUtils.getFullScreenEl();
          if (r.fullscreenTarget === l) {
            this.player.getFullscreen().catch(function (t) {});
          }
          this.initIcons();
          this.handleFullscreen = this.hook("fullscreenChange", this.toggleFullScreen, {
            pre: function (e) {
              var i = t.player.fullscreen;
              t.emitUserAction(e, "switch_fullscreen", {
                prop: "fullscreen",
                from: i,
                to: !i
              });
            }
          });
          this.bind(".xgplayer-fullscreen", ["touchend", "click"], this.handleFullscreen);
          this.on(videoPlayerEventConstants.FULLSCREEN_CHANGE, function (e) {
            var i = t.find(".xg-tips");
            if (i) {
              t.changeLangTextKey(i, e ? t.i18nKeys.EXITFULLSCREEN_TIPS : t.i18nKeys.FULLSCREEN_TIPS);
            }
            t.animate(e);
          });
          if (this.config.needBackIcon) {
            this.topBackIcon = this.player.registerPlugin({
              plugin: h,
              options: {
                config: {
                  onClick: function (e) {
                    t.handleFullscreen(e);
                  }
                }
              }
            });
          }
          if (environmentDetectorUtil.environmentUtils.device === "mobile") {
            window.addEventListener("orientationchange", this._onOrientationChange);
          }
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          fullscreen: {
            icon: d,
            class: "xg-get-fullscreen"
          },
          exitFullscreen: {
            icon: f,
            class: "xg-exit-fullscreen"
          }
        };
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        this.unbind(".xgplayer-icon", environmentDetectorUtil.environmentUtils.device === "mobile" ? "touchend" : "click", this.handleFullscreen);
        if (environmentDetectorUtil.environmentUtils.device === "mobile") {
          window.removeEventListener("orientationchange", this._onOrientationChange);
        }
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        this.appendChild(".xgplayer-icon", t.fullscreen);
        this.appendChild(".xgplayer-icon", t.exitFullscreen);
      }
    }, {
      key: "toggleFullScreen",
      value: function (t) {
        if (t) {
          t.preventDefault();
          t.stopPropagation();
        }
        var e = this.player;
        var i = this.config;
        if (i.useCssFullscreen === true || typeof i.useCssFullscreen == "function" && i.useCssFullscreen()) {
          if (e.fullscreen) {
            e.exitCssFullscreen();
          } else {
            e.getCssFullscreen();
          }
          this.animate(e.fullscreen);
        } else if (i.rotateFullscreen) {
          if (e.fullscreen) {
            e.exitRotateFullscreen();
          } else {
            e.getRotateFullscreen();
          }
          this.animate(e.fullscreen);
        } else if (i.switchCallback && typeof i.switchCallback == "function") {
          i.switchCallback(e.fullscreen);
        } else if (e.fullscreen) {
          e.exitFullscreen();
        } else {
          e.getFullscreen().catch(function (t) {});
        }
      }
    }, {
      key: "animate",
      value: function (t) {
        if (t) {
          this.setAttr("data-state", "full");
        } else {
          this.setAttr("data-state", "normal");
        }
        if (this.topBackIcon) {
          if (t) {
            this.topBackIcon.show();
            this.hide();
          } else {
            this.topBackIcon.hide();
            this.show();
          }
        }
      }
    }, {
      key: "show",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "show", this).call(this);
      }
    }, {
      key: "hide",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "hide", this).call(this);
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `<xg-icon class="xgplayer-fullscreen">
    <div class="xgplayer-icon">
    </div>
    ${i18nTipRenderer.renderTip(this, "FULLSCREEN_TIPS", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "fullscreen";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 0,
          useCssFullscreen: false,
          rotateFullscreen: false,
          switchCallback: null,
          target: null,
          disable: false,
          needBackIcon: false
        };
      }
    }]);
    return i;
  }(playerIconHoverPlugin.IconHoverPlugin);
  require.d(exports, {
    FullscreenPlugin: function () {
      return p;
    }
  });
}