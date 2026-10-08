// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'VideoStatsPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 745534
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  require("event-delegation-helper") /*id: 359139*/;
  var a = "info";
  var r = videoPlayerEventConstants.STATS_EVENTS;
  var l = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var o = arguments.length;
      var s = Array(o);
      var r = 0;
      for (; r < o; r++) {
        s[r] = arguments[r];
      }
      t = e.call.apply(e, [this].concat(s));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_recordUserActions", function (e) {
        var i = t._getTime();
        var o = Object.assign({}, e, {
          msg: e.msg || e.action
        });
        t._stats[a].push(babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({
          type: "userAction"
        }, i), {}, {
          payload: o
        }));
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onReset", function () {
        t.reset();
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_recordInfo", function (e) {
        t.info(e);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_downloadStats", function () {
        var e = new Blob([JSON.stringify(t.getStats())], {
          type: "application/json"
        });
        var i = window.URL.createObjectURL(e);
        var n = document.createElement("a");
        n.style.display = "none";
        n.href = i;
        n.download = "player.txt";
        n.disabled = false;
        n.click();
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "_getTime",
      value: function () {
        return {
          timestamp: Date.now(),
          timeFormat: new Date().toISOString()
        };
      }
    }, {
      key: "afterCreate",
      value: function () {
        this.reset();
        this.on(videoPlayerEventConstants.USER_ACTION, this._recordUserActions);
        this.on(r.STATS_INFO, this._recordInfo);
        this.on(r.STATS_DOWNLOAD, this._downloadStats);
        this.on(r.STATS_RESET, this._onReset);
      }
    }, {
      key: "destroy",
      value: function () {
        this.offAll();
      }
    }, {
      key: "downloadStats",
      value: function () {
        this._downloadStats();
      }
    }, {
      key: "info",
      value: function (t) {
        if (t.profile) {
          this._infoProfile(t);
        } else {
          this._info(t);
        }
      }
    }, {
      key: "_info",
      value: function (t) {
        var e = this._getTime();
        this._stats[a].push(babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({}, e), {}, {
          payload: t
        }));
      }
    }, {
      key: "_infoProfile",
      value: function (t) {
        if (t && t.startMs) {
          var e = Date.now() - t.startMs;
          var i = babelRuntimeHelpers_1.objectSpread({
            cat: "function",
            dur: e,
            name: t.name || t.msg,
            ph: "X",
            pid: 0,
            tid: 0,
            ts: t.startMs,
            profile: true
          }, t);
          this._info(i);
        }
      }
    }, {
      key: "reset",
      value: function () {
        var t;
        this._stats = (t = {}, babelRuntimeHelpers_1.defineProperty(t, a, []), babelRuntimeHelpers_1.defineProperty(t, "media", {}), t);
      }
    }, {
      key: "getStats",
      value: function () {
        var t = this.player.media;
        var e = [];
        var i = 0;
        for (; i < t.buffered.length; i++) {
          e.push({
            start: t.buffered.start(i),
            end: t.buffered.end(i)
          });
        }
        var n = {
          currentTime: t.currentTime,
          readyState: t.readyState,
          buffered: e,
          paused: t.paused,
          ended: t.ended
        };
        this._stats.media = n;
        return {
          raw: this._stats,
          timestat: this._getTimeStats(),
          profile: this._getProfile()
        };
      }
    }, {
      key: "_getTimeStats",
      value: function () {
        return this._stats[a].map(function (t) {
          var e = t.payload.data;
          var i = "";
          try {
            if (e instanceof Error) {
              i = e.msg;
            } else if (e !== undefined) {
              i = JSON.stringify(e);
            }
          } catch (t) {}
          return `[${t.timeFormat}] : ${t.payload.msg} ${i} `;
        });
      }
    }, {
      key: "_getProfile",
      value: function () {
        var t = {
          traceEvents: []
        };
        this._stats[a].forEach(function (e) {
          if (e.payload.profile) {
            t.traceEvents.push(e.payload);
          }
        });
        return t;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "stats";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {};
      }
    }]);
    return i;
  }(playerPluginBaseClass.PluginBase);
  require.d(exports, {
    VideoStatsPlugin: function () {
      return l;
    }
  });
}