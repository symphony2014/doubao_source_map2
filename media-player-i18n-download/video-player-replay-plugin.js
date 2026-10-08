// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ReplayPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 22255
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  function r() {
    return new DOMParser().parseFromString("<svg class=\"xgplayer-replay-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 78 78\" width=\"78\" height=\"78\">\n  <path fill=\"#fff\" transform=\"translate(20, 20)\" d=\"M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var l = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "registerIcons",
      value: function () {
        return {
          replay: r
        };
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        playerUiPluginBase.PlayerUiPlugin.insert(this.icons.replay, this.root, 0);
        this.__handleReplay = this.hook("replayClick", function () {
          t.player.replay();
        }, {
          pre: function (t) {
            t.preventDefault();
            t.stopPropagation();
          }
        });
        this.bind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
        this.on(videoPlayerEventConstants.ENDED, function () {
          if (!t.playerConfig.loop) {
            playerUtilityHelpers.domUtils.addClass(t.player.root, "replay");
          }
          if (!t.config.disable) {
            t.show();
            var e = t.root.querySelector("path");
            if (e) {
              var i = window.getComputedStyle(e).getPropertyValue("transform");
              if (typeof i == "string" && i.indexOf("none") > -1) {
                return null;
              }
              e.setAttribute("transform", i);
            }
          }
        });
        this.on(videoPlayerEventConstants.PLAY, function () {
          t.hide();
        });
      }
    }, {
      key: "handleReplay",
      value: function (t) {
        t.preventDefault();
        t.stopPropagation();
        this.player.replay();
        playerUtilityHelpers.domUtils.removeClass(this.player.root, "replay");
      }
    }, {
      key: "show",
      value: function () {
        if (!this.config.disable) {
          this.root.style.display = "flex";
        }
      }
    }, {
      key: "enable",
      value: function () {
        this.config.disable = false;
      }
    }, {
      key: "disable",
      value: function () {
        this.config.disable = true;
        this.hide();
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind(".xgplayer-replay", ["click", "touchend"], this.__handleReplay);
      }
    }, {
      key: "render",
      value: function () {
        return `<xg-replay class="xgplayer-replay">
      <xg-replay-txt class="xgplayer-replay-txt" lang-key="${this.i18nKeys.REPLAY}">${this.i18n.REPLAY}</xg-replay-txt>
    </xg-replay>`;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "replay";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          disable: false
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    ReplayPlugin: function () {
      return l;
    }
  });
}