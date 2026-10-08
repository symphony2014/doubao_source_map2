// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'CssFullscreenPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 968400
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  function r() {
    return new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="31" height="40" viewBox="0 -5 31 40">
  <path fill="#fff" transform="scale(1.3, 1.3)" class='path_full' d="M9,10v1a.9.9,0,0,1-1,1,.9.9,0,0,1-1-1V9A.9.9,0,0,1,8,8h2a.9.9,0,0,1,1,1,.9.9,0,0,1-1,1Zm6,4V13a1,1,0,0,1,2,0v2a.9.9,0,0,1-1,1H14a1,1,0,0,1,0-2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z"></path>
</svg>
`, "image/svg+xml").firstChild;
  }
  function l() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31\" height=\"40\" viewBox=\"0 -5 31 40\">\n  <path fill=\"#fff\" transform=\"scale(1.3, 1.3)\" d=\"M9,10V9a.9.9,0,0,1,1-1,.9.9,0,0,1,1,1v2a.9.9,0,0,1-1,1H8a.9.9,0,0,1-1-1,.9.9,0,0,1,1-1Zm6,4v1a1,1,0,0,1-2,0V13a.9.9,0,0,1,1-1h2a1,1,0,0,1,0,2Zm3-7H6V17H18Zm2,0V17a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V7A2,2,0,0,1,6,5H18A2,2,0,0,1,20,7Z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var c = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        if (typeof t.player.config.cssFullscreen == "boolean") {
          t.config.disable = !t.player.config.cssFullscreen;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        if (!this.config.disable) {
          if (this.config.target) {
            this.playerConfig.fullscreenTarget = this.config.target;
          }
          this.initIcons();
          this.on(videoPlayerEventConstants.CSS_FULLSCREEN_CHANGE, function (e) {
            t.animate(e);
          });
          this.btnClick = this.btnClick.bind(this);
          this.handleCssFullscreen = this.hook("cssFullscreen_change", this.btnClick, {
            pre: function (t) {
              t.preventDefault();
              t.stopPropagation();
            }
          });
          this.bind(["click", "touchend"], this.handleCssFullscreen);
        }
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        var e = this.find(".xgplayer-icon");
        e.appendChild(t.cssFullscreen);
        e.appendChild(t.exitCssFullscreen);
      }
    }, {
      key: "btnClick",
      value: function (t) {
        t.preventDefault();
        t.stopPropagation();
        var e = this.player.isCssfullScreen;
        this.emitUserAction(t, "switch_cssfullscreen", {
          cssfullscreen: e
        });
        if (e) {
          this.player.exitCssFullscreen();
        } else {
          this.player.getCssFullscreen();
        }
      }
    }, {
      key: "animate",
      value: function (t) {
        if (this.root) {
          if (t) {
            this.setAttr("data-state", "full");
          } else {
            this.setAttr("data-state", "normal");
          }
          this.switchTips(t);
        }
      }
    }, {
      key: "switchTips",
      value: function (t) {
        var e = this.i18nKeys;
        var i = this.find(".xg-tips");
        if (i) {
          this.changeLangTextKey(i, t ? e.EXITCSSFULLSCREEN_TIPS : e.CSSFULLSCREEN_TIPS);
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          cssFullscreen: {
            icon: r,
            class: "xg-get-cssfull"
          },
          exitCssFullscreen: {
            icon: l,
            class: "xg-exit-cssfull"
          }
        };
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        this.unbind(["click", "touchend"], this.btnClick);
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `<xg-icon class='xgplayer-cssfullscreen'>
    <div class="xgplayer-icon">
    </div>
    ${i18nTipRenderer.renderTip(this, "CSSFULLSCREEN_TIPS", this.playerConfig.isHideTips)}
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "cssFullscreen";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 1,
          disable: false,
          target: null
        };
      }
    }]);
    return i;
  }(require("player-icon-hover-plugin") /*id: 945213*/.IconHoverPlugin);
  require.d(exports, {
    CssFullscreenPlugin: function () {
      return c;
    }
  });
}