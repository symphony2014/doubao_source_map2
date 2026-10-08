// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DynamicBgPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 158806
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var c = {
    REAL_TIME: "realtime",
    FIRST_FRAME: "firstframe",
    POSTER: "poster"
  };
  var u = null;
  var h = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var s = arguments.length;
      var r = Array(s);
      var l = 0;
      for (; l < s; l++) {
        r[l] = arguments[l];
      }
      t = e.call.apply(e, [this].concat(r));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onLoadedData", function (e) {
        if (t.player) {
          t._frameCount = t.config.startFrameCount;
          t.renderOnTimeupdate(e);
          t.off(videoPlayerEventConstants.TIME_UPDATE, t.renderOnTimeupdate);
          t.on(videoPlayerEventConstants.TIME_UPDATE, t.renderOnTimeupdate);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "renderOnTimeupdate", function (e) {
        if (t._frameCount > 0) {
          t.renderOnce();
          t._frameCount--;
        } else {
          t._isLoaded = true;
          t.off(videoPlayerEventConstants.TIME_UPDATE, t.renderOnTimeupdate);
          if (!t.player.paused && t._checkIfCanStart()) {
            t.start();
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "start", function () {
        var e = t.player.media;
        var i = function () {
          try {
            return parseInt(window.performance.now(), 10);
          } catch (t) {
            return new Date().getTime();
          }
        }();
        var n = t.checkVideoIsSupport(e);
        if (n && t.canvasCtx) {
          t.stop();
          if (e.videoWidth && e.videoHeight) {
            t.videoPI = e.videoHeight > 0 ? parseInt(e.videoWidth / e.videoHeight * 100, 10) : 0;
            if (t.config.mode === c.REAL_TIME) {
              if (e && e.videoWidth) {
                t.update(n, t.videoPI);
              }
              t.preTime = i;
            } else if (i - t.preTime >= t.interval) {
              if (e && e.videoWidth) {
                t.update(n, t.videoPI);
              }
              t.preTime = i;
            }
          }
          t.frameId = playerUtilityHelpers.domUtils.requestAnimationFrame(t.start);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "stop", function () {
        if (t.frameId) {
          playerUtilityHelpers.domUtils.cancelAnimationFrame(t.frameId);
          t.frameId = null;
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        if (this.playerConfig.dynamicBg === true) {
          this.config.disable = false;
        }
        if (!i.isSupport) {
          this.config.disable = true;
        }
        var e = this.config;
        var n = e.disable;
        var o = e.mode;
        var s = e.frameRate;
        if (!n) {
          this._pos = {
            width: 0,
            height: 0,
            rwidth: 0,
            rheight: 0,
            x: 0,
            y: 0,
            pi: 0
          };
          this.isStart = false;
          this._isLoaded = false;
          this.videoPI = 0;
          this.preTime = 0;
          this.interval = parseInt(1000 / s, 10);
          this.canvas = null;
          this.canvasCtx = null;
          this._frameCount = 0;
          this.once(videoPlayerEventConstants.COMPLETE, function () {
            if (t.player) {
              t.init();
              if (!t.player.paused) {
                t.start();
              }
            }
          });
          if (o !== c.POSTER) {
            if (o !== c.FIRST_FRAME) {
              this.on(videoPlayerEventConstants.EMPTIED, function () {
                t.stop();
              });
              this.on(videoPlayerEventConstants.PLAY, function () {
                if (t._checkIfCanStart()) {
                  t.start();
                }
              });
              this.on(videoPlayerEventConstants.PAUSE, function () {
                t.stop();
              });
            }
            this.on(videoPlayerEventConstants.LOADED_DATA, this.onLoadedData);
            this.on(videoPlayerEventConstants.LOAD_START, function () {
              t._isLoaded = false;
              t.stop();
            });
          }
        }
      }
    }, {
      key: "init",
      value: function () {
        var t = this.player;
        var e = this.config;
        this.canvasFilter = i.supportCanvasFilter();
        try {
          var n = this.config.isInnerRender && t.innerContainer || t.root;
          n.insertAdjacentHTML("afterbegin", `<div class="xgplayer-dynamic-bg" data-index="${e.index}"><canvas>
        </canvas><xgmask></xgmask></div>`);
          this.root = n.children[0];
          this.canvas = this.find("canvas");
          if (!this.canvasFilter) {
            this.canvas.style.filter = e.filter;
            this.canvas.style.webkitFilter = e.filter;
          }
          this.mask = this.find("xgmask");
          if (e.addMask) {
            this.mask.style.background = e.maskBg;
          }
          this.canvasCtx = this.canvas.getContext("2d");
          this.renderByPoster();
        } catch (t) {
          xgplayerLogger.logger.logError("plugin:DynamicBg", t);
        }
      }
    }, {
      key: "checkVideoIsSupport",
      value: function (t) {
        if (!t) {
          return null;
        }
        var e = t && t instanceof window.HTMLVideoElement ? t : t.canvas ? t.canvas : t.flyVideo ? t.flyVideo : null;
        if (e && (environmentDetectorUtil.environmentUtils.browser !== "safari" || !/^blob/.test(e.currentSrc) && !/^blob/.test(e.src))) {
          return e;
        }
        var i = e ? e.tagName.toLowerCase() : "";
        if (i === "canvas" || i === "img") {
          return e;
        } else {
          return null;
        }
      }
    }, {
      key: "renderByPoster",
      value: function () {
        var t = this.playerConfig.poster;
        if (t) {
          var e = playerUtilityHelpers.domUtils.typeOf(t) === "String" ? t : playerUtilityHelpers.domUtils.typeOf(t.poster) === "String" ? t.poster : null;
          this.updateImg(e);
        }
      }
    }, {
      key: "_checkIfCanStart",
      value: function () {
        var t = this.config.mode;
        return this._isLoaded && t !== c.FIRST_FRAME && t !== c.POSTER;
      }
    }, {
      key: "renderOnce",
      value: function () {
        var t = this.player.media;
        if (t.videoWidth && t.videoHeight) {
          this.videoPI = parseInt(t.videoWidth / t.videoHeight * 100, 10);
          var e = this.checkVideoIsSupport(t);
          if (e && t.videoWidth) {
            this.update(e, this.videoPI);
          }
        }
      }
    }, {
      key: "updateImg",
      value: function (t) {
        var e = this;
        if (t) {
          var i = this.canvas.getBoundingClientRect();
          var n = i.width;
          var o = i.height;
          var s = new window.Image();
          s.onload = function () {
            if (e.canvas && !e.frameId && !e.isStart) {
              e.canvas.height = o;
              e.canvas.width = n;
              var t = parseInt(n / o * 100, 10);
              e.update(s, t);
              s = null;
            }
          };
          s.src = t;
        }
      }
    }, {
      key: "update",
      value: function (t, e) {
        if (this.canvas && this.canvasCtx && e) {
          try {
            var i = this._pos;
            var n = this.config;
            var o = this.canvas.getBoundingClientRect();
            var s = o.width;
            var a = o.height;
            if (s !== i.width || a !== i.height || i.pi !== e) {
              var l = parseInt(s / a * 100, 10);
              i.pi = e;
              i.width = this.canvas.width = s;
              i.height = this.canvas.height = a;
              var c = a;
              var u = s;
              if (l < e) {
                u = parseInt(a * e / 100, 10);
              } else if (l > e) {
                c = parseInt(s * 100 / e, 10);
              }
              i.rwidth = u * n.multiple;
              i.rheight = c * n.multiple;
              i.x = (s - i.rwidth) / 2;
              i.y = (a - i.rheight) / 2;
            }
            if (this.canvasFilter) {
              this.canvasCtx.filter = n.filter;
            }
            this.canvasCtx.drawImage(t, i.x, i.y, i.rwidth, i.rheight);
          } catch (t) {
            xgplayerLogger.logger.logError("plugin:DynamicBg", t);
          }
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this.stop();
        this.canvasCtx = null;
        this.canvas = null;
      }
    }, {
      key: "render",
      value: function () {
        return "";
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "dynamicBg";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          isInnerRender: false,
          disable: true,
          index: -1,
          mode: "framerate",
          frameRate: 10,
          filter: "blur(50px)",
          startFrameCount: 2,
          addMask: true,
          multiple: 1.2,
          maskBg: "rgba(0,0,0,0.7)"
        };
      }
    }, {
      key: "isSupport",
      get: function () {
        if (typeof u == "boolean") {
          return u;
        } else {
          return u = function () {
            try {
              if (document.createElement("canvas").getContext) {
                return true;
              }
              return false;
            } catch (t) {
              return false;
            }
          }();
        }
      }
    }, {
      key: "supportCanvasFilter",
      value: function () {
        return environmentDetectorUtil.environmentUtils.browser !== "safari" && environmentDetectorUtil.environmentUtils.browser !== "firefox";
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    DynamicBgPlugin: function () {
      return h;
    }
  });
}