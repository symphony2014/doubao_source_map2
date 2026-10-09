// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SpeedTestPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 566763
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var a = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      var t;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      var o = arguments.length;
      var a = Array(o);
      var r = 0;
      for (; r < o; r++) {
        a[r] = arguments[r];
      }
      t = e.call.apply(e, [this].concat(a));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "getSpeed", function (e) {
        if (t.speedListCache.length <= 0) {
          return 0;
        }
        var i = 0;
        t.speedListCache.map(function (t) {
          i += t;
        });
        return Math.floor(i / t.speedListCache.length);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "_onRealSpeedChange", function (e) {
        if (e.speed) {
          t.appendList(e.speed);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "testSpeed", function () {
        clearTimeout(t.timer);
        t.timer = null;
        if (t.player && t.config.openSpeed) {
          var e = t.config;
          var i = e.url;
          var n = e.loadSize;
          var o = e.testCnt;
          var s = e.testTimeStep;
          var a = i + (i.indexOf("?") < 0 ? "?testst=" : "&testst=") + Date.now();
          if (!(t.cnt >= o)) {
            t.cnt++;
            try {
              var r = new Date().getTime();
              var l = null;
              var c = new XMLHttpRequest();
              t.xhr = c;
              c.open("GET", a);
              var u = {};
              var h = Math.floor(Math.random() * 10);
              u.Range = "bytes=" + h + "-" + (n + h);
              if (u) {
                Object.keys(u).forEach(function (t) {
                  c.setRequestHeader(t, u[t]);
                });
              }
              c.onreadystatechange = function () {
                if (c.readyState === 4) {
                  t.xhr = null;
                  l = new Date().getTime();
                  var e = c.getResponseHeader("Content-Length") / 1024 * 8;
                  var i = Math.round(e * 1000 / (l - r));
                  t.appendList(i);
                  t.timer = setTimeout(t.testSpeed, s);
                }
              };
              c.send();
            } catch (t) {}
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "appendList", function (e) {
        var i = t.config.saveSpeedMax;
        if (t.speedListCache.length >= i) {
          t.speedListCache.shift();
        }
        t.speedListCache.push(e);
        if (t.player) {
          t.player.realTimeSpeed = e;
        }
        t.updateSpeed();
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "updateSpeed", function () {
        var e = t.getSpeed();
        var i = babelRuntimeHelpers_1.assertThisInit(t).player;
        if (i && (!i.avgSpeed || e !== i.avgSpeed)) {
          i.avgSpeed = e;
          i.emit(videoPlayerEventConstants.DOWNLOAD_SPEED_CHANGE, {
            speed: e,
            realTimeSpeed: i.realTimeSpeed
          });
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        var t = this;
        this.speedListCache = [];
        var e = this.config;
        var i = e.openSpeed;
        var n = e.testTimeStep;
        this.timer = null;
        this.cnt = 0;
        this.xhr = null;
        if (i) {
          this.on("real_time_speed", this._onRealSpeedChange);
          this.on([videoPlayerEventConstants.LOADED_DATA, videoPlayerEventConstants.REPLAY], function () {
            if (!playerUtilityHelpers.domUtils.isMSE(t.player.video)) {
              t.speedListCache = [];
              t.cnt = 0;
              t.timer = setTimeout(t.testSpeed, n);
            }
          });
        }
      }
    }, {
      key: "openSpeed",
      get: function () {
        return this.config.openSpeed;
      },
      set: function (t) {
        this.config.openSpeed = t;
        if (!t && this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
          return;
        }
        if (this.config.openSpeed) {
          if (this.timer) {
            return;
          }
          this.timer = setTimeout(this.testSpeed, this.config.testTimeStep);
        }
      }
    }, {
      key: "destroy",
      value: function () {
        clearTimeout(this.timer);
        this.timer = null;
        if (this.xhr && this.xhr.readyState !== 4) {
          this.xhr.cancel();
          this.xhr = null;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "testspeed";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          openSpeed: false,
          testCnt: 3,
          loadSize: 204800,
          testTimeStep: 3000,
          url: "",
          saveSpeedMax: 5
        };
      }
    }]);
    return i;
  }(require("player-ui-plugin-base") /*id: 240976*/.PlayerUiPlugin);
  require.d(exports, {
    SpeedTestPlugin: function () {
      return a;
    }
  });
}