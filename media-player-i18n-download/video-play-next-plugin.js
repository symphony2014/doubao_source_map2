// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PlayNextPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 430001
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  function l() {
    return new DOMParser().parseFromString("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"40\" viewBox=\"10 0 24 40\">\n  <path transform=\"scale(0.038 0.028)\" d=\"M800 380v768h-128v-352l-320 320v-704l320 320v-352z\"></path>\n</svg>\n", "image/svg+xml").firstChild;
  }
  var c = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      o = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "playNext", function (t) {
        var e = babelRuntimeHelpers_1.assertThisInit(o).player;
        t.preventDefault();
        t.stopPropagation();
        if (o.idx + 1 < o.config.urlList.length) {
          o.idx++;
          o.nextHandler(o.config.urlList[o.idx], o.idx);
          e.emit(videoPlayerEventConstants.PLAYNEXT, o.idx + 1);
        } else {
          o.nextHandler();
          e.emit(videoPlayerEventConstants.PLAYNEXT);
        }
      });
      o.idx = -1;
      return o;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        if (this.config.urlList && this.config.urlList.length !== 0) {
          this.appendChild(".xgplayer-icon", this.icons.playNext);
          this.initEvents();
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          playNext: l
        };
      }
    }, {
      key: "initEvents",
      value: function () {
        this.nextHandler = this.hook("nextClick", this.changeSrc);
        var t = environmentDetectorUtil.environmentUtils.device === "mobile" ? "touchend" : "click";
        this.bind(t, this.playNext);
        this.show();
      }
    }, {
      key: "changeSrc",
      value: function (t) {
        var e = this.player;
        if (t) {
          e.pause();
          e.currentTime = 0;
          if (e.switchURL) {
            e.switchURL(t);
          } else {
            e.src = t;
          }
          e.config.url = t;
          e.play();
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind(["touchend", "click"], this.playNext);
      }
    }, {
      key: "render",
      value: function () {
        if (this.config.urlList && this.config.urlList.length !== 0) {
          return `
     <xg-icon class="xgplayer-playnext">
      <div class="xgplayer-icon">
      </div>
      ${i18nTipRenderer.renderTip(this, "PLAYNEXT_TIPS", this.playerConfig.isHideTips)}
     </xg-icon>
    `;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "playNext";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_LEFT,
          index: 1,
          url: null,
          urlList: []
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    PlayNextPlugin: function () {
      return c;
    }
  });
}