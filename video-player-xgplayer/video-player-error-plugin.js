// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PlayerErrorPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 189387
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var o = function (e) {
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
        this.clickHandler = this.hook("errorRetry", this.errorRetry, {
          pre: function (e) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        this.onError = this.hook("showError", this.handleError);
        this.bind(".xgplayer-error-refresh", "click", this.clickHandler);
        this.on(videoPlayerEventConstants.ERROR, function (t) {
          e.onError(t);
        });
      }
    }, {
      key: "errorRetry",
      value: function (e) {
        this.emitUserAction(e, "error_retry", {});
        this.player.retry();
      }
    }, {
      key: "handleError",
      value: function (e = {}) {
        var t = this.player;
        var n = e.errorType;
        var r = t.errorNote ? this.i18n[t.errorNote] : "";
        if (!r) {
          switch (n) {
            case "decoder":
              r = this.i18n.MEDIA_ERR_DECODE;
              break;
            case "network":
              r = this.i18n.MEDIA_ERR_NETWORK;
              break;
            default:
              r = this.i18n.MEDIA_ERR_SRC_NOT_SUPPORTED;
          }
        }
        this.find(".xgplayer-error-text").innerHTML = r;
        this.find(".xgplayer-error-tips").innerHTML = `${this.i18n.REFRESH_TIPS}<span class="xgplayer-error-refresh">${this.i18n.REFRESH}</span>`;
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind(".xgplayer-error-refresh", "click", this.clickHandler);
      }
    }, {
      key: "render",
      value: function () {
        return "<xg-error class=\"xgplayer-error\">\n      <div class=\"xgplayer-errornote\">\n       <span class=\"xgplayer-error-text\"></span>\n       <span class=\"xgplayer-error-tips\"><em class=\"xgplayer-error-refresh\"></em></span>\n      </div>\n    </xg-error>";
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "error";
      }
    }]);
    return n;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    PlayerErrorPlugin: function () {
      return o;
    }
  });
}