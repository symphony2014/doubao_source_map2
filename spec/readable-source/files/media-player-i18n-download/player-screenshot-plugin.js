// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ScreenshotPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 45454
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var a = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        if (typeof t.player.config.screenShot == "boolean") {
          t.config.disable = !t.player.config.screenShot;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "afterCreate", this).call(this);
        this.appendChild(".xgplayer-icon", this.icons.screenshotIcon);
        var t = this.config;
        this.initSize = function (e) {
          if (t.fitVideo) {
            t.width = e.vWidth;
            t.height = e.vHeight;
          }
        };
        this.once(videoPlayerEventConstants.VIDEO_RESIZE, this.initSize);
      }
    }, {
      key: "onPluginsReady",
      value: function () {
        this.show();
        this.onClickBtn = this.onClickBtn.bind(this);
        this.bind(["click", "touchend"], this.onClickBtn);
      }
    }, {
      key: "saveScreenShot",
      value: function (t, e) {
        var i = document.createElement("a");
        i.href = t;
        i.download = e;
        var n = document.createEvent("MouseEvents");
        n.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        i.dispatchEvent(n);
      }
    }, {
      key: "createCanvas",
      value: function (t, e) {
        var i = document.createElement("canvas");
        var n = i.getContext("2d");
        this.canvasCtx = n;
        this.canvas = i;
        i.width = t || this.config.width;
        i.height = e || this.config.height;
        n.imageSmoothingEnabled = true;
        if (n.imageSmoothingEnabled) {
          n.imageSmoothingQuality = "high";
        }
      }
    }, {
      key: "onClickBtn",
      value: function (t) {
        var e = this;
        t.preventDefault();
        t.stopPropagation();
        this.emitUserAction(t, "shot");
        this.shot().then(function (t) {
          e.emit(videoPlayerEventConstants.SCREEN_SHOT, t);
          e.saveScreenShot(t, e.config.name + e.config.format);
        });
      }
    }, {
      key: "shot",
      value: function (t, e) {
        var i = this;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          quality: 0.92,
          type: "image/png"
        };
        var o = this.config;
        var s = this.player;
        var a = n.quality || o.quality;
        var r = n.type || o.type;
        return new Promise(function (n, l) {
          var c = null;
          if (s.media.canvas) {
            c = s.media.canvas;
          } else {
            if (i.canvas) {
              i.canvas.width = t || o.width;
              i.canvas.height = e || o.height;
            } else {
              i.createCanvas(t, e);
            }
            c = i.canvas;
            u = i.canvasCtx;
            var u;
            var h;
            var d;
            var f;
            var p;
            var g = s.media.videoWidth / s.media.videoHeight;
            var v = c.width / c.height;
            var m = s.media.videoWidth;
            var y = s.media.videoHeight;
            if (g > v) {
              f = c.width;
              p = c.width / g;
              h = 0;
              d = Math.round((c.height - p) / 2);
            } else if (g === v) {
              f = c.width;
              p = c.height;
              h = 0;
              d = 0;
            } else if (g < v) {
              f = c.height * g;
              p = c.height;
              h = Math.round((c.width - f) / 2);
              d = 0;
            }
            u.drawImage(s.media, 0, 0, m, y, h, d, f, p);
          }
          var k = c.toDataURL(r, a).replace(r, "image/octet-stream");
          n(k = k.replace(/^data:image\/[^;]+/, "data:application/octet-stream"));
        });
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          screenshotIcon: null
        };
      }
    }, {
      key: "destroy",
      value: function () {
        babelRuntimeHelpers_1.getHelper(babelRuntimeHelpers_1.getPrototypeOf(i.prototype), "destroy", this).call(this);
        this.unbind(["click", "touchend"], this.onClickBtn);
        this.off(videoPlayerEventConstants.VIDEO_RESIZE, this.initSize);
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          var t = this.icons.screenshotIcon ? "xgplayer-icon" : "xgplayer-icon btn-text";
          var e = "SCREENSHOT";
          return `
      <xg-icon class="xgplayer-shot">
      <div class="${t}">
      ${this.icons.screenshotIcon ? "" : `<span lang-key="${this.i18nKeys[e]}">${this.i18n[e]}</span>`}
      </div>
    </xg-icon>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "screenShot";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 5,
          quality: 0.92,
          type: "image/png",
          format: ".png",
          width: 600,
          height: 337,
          fitVideo: true,
          disable: false,
          name: "screenshot"
        };
      }
    }]);
    return i;
  }(require("player-icon-hover-plugin") /*id: 945213*/.IconHoverPlugin);
  require.d(exports, {
    ScreenshotPlugin: function () {
      return a;
    }
  });
}