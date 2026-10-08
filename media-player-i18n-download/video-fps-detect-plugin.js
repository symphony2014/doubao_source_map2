// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FpsDetectPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 783721
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var s = function (t) {
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
        var e = this.player;
        var i = this.config;
        this.timer = null;
        this._lastDecodedFrames = 0;
        this._currentStuckCount = 0;
        this._lastCheckPoint = null;
        this._payload = [];
        if (!i.disabled && e.media.getVideoPlaybackQuality) {
          this.on(videoPlayerEventConstants.PLAY, function () {
            t._startTick();
          });
          this.on(videoPlayerEventConstants.PAUSE, function () {
            t._stopTick();
          });
          this.on(videoPlayerEventConstants.ENDED, function () {
            t._stopTick();
          });
          this.on(videoPlayerEventConstants.EMPTIED, function () {
            t._stopTick();
          });
        }
      }
    }, {
      key: "_startTick",
      value: function () {
        var t = this;
        this._stopTick();
        this._timer = setTimeout(function () {
          t._checkDecodeFPS();
          t._startTick();
        }, this.config.tick);
      }
    }, {
      key: "_stopTick",
      value: function () {
        clearTimeout(this._timer);
        this._timer = null;
      }
    }, {
      key: "_checkStuck",
      value: function (t, e, i, n) {
        var s = this.player.media;
        var a = document.hidden;
        var r = s.paused;
        if (typeof a == "boolean" && !a && !r) {
          var l = s.currentTime;
          var c = s.buffered;
          var u = false;
          var h = [];
          var d = 0;
          for (; d < c.length; d++) {
            var f = c.start(d);
            var p = c.end(d);
            h.push({
              start: f,
              end: p
            });
            if (f <= l && l <= p - 1) {
              u = true;
              break;
            }
          }
          if (s.readyState === 4 && u) {
            if (this._currentStuckCount > this.config.stuckCount) {
              this.emit(videoPlayerEventConstants.FPS_STUCK, this._payload);
              this._reset();
            } else if (t <= this.config.reportFrame) {
              this._currentStuckCount++;
              this._payload.push({
                bufs: h,
                currentTime: s.currentTime,
                curDecodedFrames: t,
                totalVideoFrames: e,
                droppedVideoFrames: i,
                checkInterval: n
              });
            } else {
              this._reset();
            }
          }
        }
      }
    }, {
      key: "_reset",
      value: function () {
        this._payload = [];
        this._currentStuckCount = 0;
      }
    }, {
      key: "_checkDecodeFPS",
      value: function () {
        if (this.player.media) {
          var t = this.player.media.getVideoPlaybackQuality();
          var e = t.totalVideoFrames;
          var i = t.droppedVideoFrames;
          var n = performance.now();
          if (e && this._lastCheckPoint) {
            var o = e - this._lastDecodedFrames;
            var s = n - this._lastCheckPoint;
            this._checkStuck(o, e, i, s);
          }
          this._lastDecodedFrames = e;
          this._lastCheckPoint = n;
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this._stopTick();
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "FpsDetect";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          disabled: false,
          tick: 1000,
          stuckCount: 3,
          reportFrame: 0
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    FpsDetectPlugin: function () {
      return s;
    }
  });
}