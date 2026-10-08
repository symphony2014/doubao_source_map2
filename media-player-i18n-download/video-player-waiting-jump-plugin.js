// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WaitingTimeoutJump'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 631271
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
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onWaiting", function () {
        var e = babelRuntimeHelpers_1.assertThisInit(t).config;
        if (!(t.jumpCnt > e.jumpCntMax) && !t.timer && e.useWaitingTimeoutJump !== false) {
          t.timer = setTimeout(t.onJump, e.waitingTime * 1000);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onJump", function () {
        var e = babelRuntimeHelpers_1.assertThisInit(t);
        var i = e.player;
        var o = e.config;
        clearTimeout(t.timer);
        t.timer = null;
        if (!(t.jumpCnt > o.jumpCntMax) && o.useWaitingTimeoutJump !== false && (!i.media.paused || i.media.currentTime === 0 || !t.hasPlayed)) {
          t.jumpSize = o.jumpSize * (t.jumpCnt + 1);
          if (t.jumpCnt === o.jumpSize && t.jumpSize < 6) {
            t.jumpSize = 6;
          }
          var s = i.currentTime + t.jumpSize;
          if (!(s > i.media.duration)) {
            t.jumpCnt++;
            i.currentTime = s;
          }
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        var e = this.config;
        var i = e.useWaitingTimeoutJump;
        var n = e.jumpSize;
        if (i !== false) {
          this.hasPlayed = false;
          this.jumpCnt = 0;
          this.timer = null;
          this.jumpSize = n;
          this.on(videoPlayerEventConstants.WAITING, this.onWaiting);
          this.on([videoPlayerEventConstants.PLAYING, videoPlayerEventConstants.CANPLAY], function () {
            clearTimeout(t.timer);
            t.timer = null;
            t.jumpSize = t.config.jumpSize;
          });
          this.on(videoPlayerEventConstants.PLAY, function () {
            t.hasPlayed = true;
          });
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "waitingTimeoutJump";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          useWaitingTimeoutJump: false,
          waitingTime: 15,
          jumpSize: 2,
          jumpCntMax: 4
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    WaitingTimeoutJump: function () {
      return s;
    }
  });
}