// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'GapJumpPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 826877
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var s = function (t) {
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
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onGapJump", function () {
        var e = babelRuntimeHelpers_1.assertThisInit(t);
        var o = e.player;
        var s = e.config;
        if (o.media.readyState === HTMLMediaElement.HAVE_NOTHING) {
          return;
        }
        if (o.media.seeking) {
          if (!t.seekingEventReceived) {
            return;
          }
        } else {
          t.seekingEventReceived = false;
        }
        if (o.media.paused && o.media.currentTime !== 0 && t.hasPlayed) {
          return;
        }
        var a = o.media.buffered;
        var r = s.smallGapLimit || 0.5;
        var l = s.gapDetectionThreshold || 0.3;
        var c = o.media.currentTime;
        var u = t._getIndex(a, c, l);
        if (u !== null && u !== 0) {
          var h = a.start(u) + 0.1;
          if (!(h > o.media.duration)) {
            var d = h - c;
            if (!(d < i.BROWSER_GAP_TOLERANCE) && d <= r) {
              if (s.useGapJump !== false) {
                o.media.currentTime = t.isSafari ? h + 0.1 : h;
              }
              if (t.player) {
                t.player.emit("detectGap");
              }
              if (h !== 0.08 && o) {
                o.emit("log", {
                  type: "oneevent",
                  end_type: "gap",
                  vid: o.config.vid,
                  ext: {
                    video_postion: Math.floor(h * 1000)
                  }
                });
              }
            }
          }
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        if (this.config.useGapJump !== false) {
          this.hasPlayed = false;
          this.seekingEventReceived = false;
          this.isSafari = /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          this.on(videoPlayerEventConstants.WAITING, this.onGapJump);
          this.on(videoPlayerEventConstants.PLAY, function () {
            t.hasPlayed = true;
          });
          this.on(videoPlayerEventConstants.SEEKING, function () {
            t.seekingEventReceived = true;
          });
        }
      }
    }, {
      key: "_getIndex",
      value: function (t, e, i) {
        if (!t || !t.length || t.length === 1 && t.end(0) - t.start(0) < 0.000001) {
          return null;
        }
        var n = this._getBuffered(t);
        var o = null;
        var s = 0;
        for (; s < n.length; s++) {
          if (n[s].start > e && (s === 0 || n[s - 1].end - e <= i)) {
            o = s;
            break;
          }
        }
        return o;
      }
    }, {
      key: "_getBuffered",
      value: function (t) {
        if (!t) {
          return [];
        }
        var e = [];
        var i = 0;
        for (; i < t.length; i++) {
          e.push({
            start: t.start(i),
            end: t.end(i)
          });
        }
        return e;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "gapJump";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          useGapJump: false,
          smallGapLimit: 0.5,
          gapDetectionThreshold: 0.3
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  s.BROWSER_GAP_TOLERANCE = 0.001;
  require.d(exports, {
    GapJumpPlugin: function () {
      return s;
    }
  });
}