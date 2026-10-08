// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PosterPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 623647
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var a = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "isEndedShow",
      get: function () {
        return this.config.isEndedShow;
      },
      set: function (t) {
        this.config.isEndedShow = t;
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
      key: "beforeCreate",
      value: function (t) {
        if (typeof t.player.config.poster == "string") {
          t.config.poster = t.player.config.poster;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        this.on(videoPlayerEventConstants.ENDED, function () {
          if (t.isEndedShow) {
            playerUtilityHelpers.domUtils.removeClass(t.root, "hide");
          }
        });
        if (this.config.hideCanplay) {
          this.once(videoPlayerEventConstants.TIME_UPDATE, function () {
            t.onTimeUpdate();
          });
          this.on(videoPlayerEventConstants.URL_CHANGE, function () {
            playerUtilityHelpers.domUtils.removeClass(t.root, "hide");
            playerUtilityHelpers.domUtils.addClass(t.root, "xg-showplay");
            t.once(videoPlayerEventConstants.TIME_UPDATE, function () {
              t.onTimeUpdate();
            });
          });
        } else {
          this.on(videoPlayerEventConstants.PLAY, function () {
            playerUtilityHelpers.domUtils.addClass(t.root, "hide");
          });
        }
      }
    }, {
      key: "onTimeUpdate",
      value: function () {
        var t = this;
        if (this.player.currentTime) {
          playerUtilityHelpers.domUtils.removeClass(this.root, "xg-showplay");
        } else {
          this.once(videoPlayerEventConstants.TIME_UPDATE, function () {
            t.onTimeUpdate();
          });
        }
      }
    }, {
      key: "update",
      value: function (t) {
        if (t) {
          this.config.poster = t;
          this.root.style.backgroundImage = `url(${t})`;
        }
      }
    }, {
      key: "render",
      value: function () {
        var t = this.config;
        var e = t.poster;
        var i = t.hideCanplay;
        return `<xg-poster class="xgplayer-poster ${i ? "xg-showplay" : ""}" style="${e ? `background-image:url(${e});` : ""}">
    </xg-poster>`;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "poster";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          isEndedShow: true,
          hideCanplay: false,
          poster: ""
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    PosterPlugin: function () {
      return a;
    }
  });
}