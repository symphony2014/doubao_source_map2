// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'KeyboardPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 973556
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  function a(t) {
    t.preventDefault();
    t.returnValue = false;
  }
  require("event-delegation-helper") /*id: 359139*/;
  var r = function (t) {
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
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onBodyKeyDown", function (e) {
        var i;
        var n;
        var o = e || window.event;
        if (t.player && (t.player.isUserActive || t.config.isIgnoreUserActive) && !t.config.disable && !t.config.disableBodyTrigger && t.checkIsVisible() && !o.metaKey && !o.altKey && !o.ctrlKey) {
          var s = o.keyCode;
          if ((o.target === document.body || t.config.isGlobalTrigger && (n = (i = o.target).tagName) !== "INPUT" && n !== "TEXTAREA" && !i.isContentEditable) && t.checkCode(s, true)) {
            a(o);
            t.handleKeyCode(s, e);
          }
          return false;
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(t), "onKeydown", function (e) {
        var i = e || window.event;
        if (!t.config.disable && !t.config.disableRootTrigger && !i.metaKey && !i.altKey && !i.ctrlKey && (t.player.isUserActive || t.config.isIgnoreUserActive) && (t.player.isUserActive || t.config.isIgnoreUserActive)) {
          if (!i || i.keyCode !== 37 && !t.checkCode(i.keyCode) || i.target !== t.player.root && i.target !== t.player.video && i.target !== t.player.controls.el) {
            return true;
          }
          a(i);
          t.handleKeyCode(i.keyCode, e);
        }
      });
      return t;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "mergekeyCodeMap",
      value: function () {
        var t = this;
        var e = this.config.keyCodeMap;
        if (e) {
          Object.keys(e).map(function (i) {
            if (t.keyCodeMap[i]) {
              ["keyCode", "action", "disable", "isBodyTarget"].map(function (n) {
                if (e[i][n]) {
                  t.keyCodeMap[i][n] = e[i][n];
                }
              });
            } else {
              t.keyCodeMap[i] = e[i];
            }
          });
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        this.config.disable = !this.playerConfig.keyShortcut;
        var t = typeof this.config.seekStep == "function" ? this.config.seekStep(this.player) : this.config.seekStep;
        if (t && typeof t == "number") {
          this.seekStep = t;
        }
        this.keyCodeMap = {
          space: {
            keyCode: 32,
            action: "playPause",
            disable: false,
            noBodyTarget: false
          },
          up: {
            keyCode: 38,
            action: "upVolume",
            disable: false,
            noBodyTarget: true
          },
          down: {
            keyCode: 40,
            action: "downVolume",
            disable: false,
            noBodyTarget: true
          },
          left: {
            keyCode: 37,
            action: "seekBack",
            disable: false
          },
          right: {
            keyCode: 39,
            action: "seek",
            disable: false
          },
          esc: {
            keyCode: 27,
            action: "exitFullscreen",
            disable: false
          }
        };
        this.mergekeyCodeMap();
        this.player.root.addEventListener("keydown", this.onKeydown);
        document.addEventListener("keydown", this.onBodyKeyDown);
      }
    }, {
      key: "checkIsVisible",
      value: function () {
        if (!this.config.checkVisible) {
          return true;
        }
        var t = this.player.root.getBoundingClientRect();
        var e = t.height;
        var i = t.top;
        var n = t.bottom;
        var o = window.innerHeight;
        return (!(i < 0) || !(i < 0 - e * 0.9)) && (!(n > 0) || !(n - o > e * 0.9));
      }
    }, {
      key: "checkCode",
      value: function (t, e) {
        var i = this;
        var n = false;
        Object.keys(this.keyCodeMap).map(function (o) {
          if (i.keyCodeMap[o] && t === i.keyCodeMap[o].keyCode && !i.keyCodeMap[o].disable) {
            n = !e || e && !i.keyCodeMap[o].noBodyTarget;
          }
        });
        return n;
      }
    }, {
      key: "downVolume",
      value: function (t) {
        var e = this.player;
        var i = parseFloat((e.volume - 0.1).toFixed(1));
        var n = {
          volume: {
            from: e.volume,
            to: i
          }
        };
        this.emitUserAction(t, "change_volume", {
          props: n
        });
        if (i >= 0) {
          e.volume = i;
        } else {
          e.volume = 0;
        }
      }
    }, {
      key: "upVolume",
      value: function (t) {
        var e = this.player;
        var i = parseFloat((e.volume + 0.1).toFixed(1));
        var n = {
          volume: {
            from: e.volume,
            to: i
          }
        };
        this.emitUserAction(t, "change_volume", {
          props: n
        });
        if (i <= 1) {
          e.volume = i;
        } else {
          e.volume = 1;
        }
      }
    }, {
      key: "seek",
      value: function (t) {
        var e = this.player;
        var i = e.currentTime;
        var n = e.duration;
        var o = i;
        o = i + this.seekStep <= n ? i + this.seekStep : n;
        var s = {
          currentTime: {
            from: i,
            to: o
          }
        };
        this.emitUserAction(t, "seek", {
          props: s
        });
        this.player.currentTime = o;
      }
    }, {
      key: "seekBack",
      value: function (t) {
        var e = this.player.currentTime;
        var i = 0;
        if (e - this.seekStep >= 0) {
          i = e - this.seekStep;
        }
        var n = {
          currentTime: {
            from: e,
            to: i
          }
        };
        this.emitUserAction(t, "seek", {
          props: n
        });
        this.player.currentTime = i;
      }
    }, {
      key: "playPause",
      value: function (t) {
        var e = this.player;
        if (e) {
          this.emitUserAction(t, "switch_play_pause");
          if (e.paused) {
            e.play();
          } else {
            e.pause();
          }
        }
      }
    }, {
      key: "exitFullscreen",
      value: function (t) {
        var e = this.player;
        var i = e.fullscreen;
        var n = e.cssfullscreen;
        if (i) {
          this.emitUserAction("keyup", "switch_fullscreen", {
            prop: "fullscreen",
            from: i,
            to: !i
          });
          e.exitFullscreen();
        }
        if (n) {
          this.emitUserAction("keyup", "switch_css_fullscreen", {
            prop: "cssfullscreen",
            from: n,
            to: !n
          });
          e.exitCssFullscreen();
        }
      }
    }, {
      key: "handleKeyCode",
      value: function (t, e) {
        var i = this;
        Object.keys(this.keyCodeMap).map(function (s) {
          var a = i.keyCodeMap[s];
          var r = a.action;
          var l = a.keyCode;
          var c = a.disable;
          if (l === t && !c) {
            if (typeof r == "function") {
              r(e, i.player);
            } else if (typeof r == "string" && typeof i[r] == "function") {
              i[r](e, i.player);
            }
            i.emit(videoPlayerEventConstants.SHORTCUT, babelRuntimeHelpers_1.objectSpread({
              key: s,
              target: e.target
            }, i.keyCodeMap[s]));
          }
        });
      }
    }, {
      key: "destroy",
      value: function () {
        this.player.root.removeEventListener("keydown", this.onKeydown);
        document.removeEventListener("keydown", this.onBodyKeyDown);
      }
    }, {
      key: "disable",
      value: function () {
        this.config.disable = true;
      }
    }, {
      key: "enable",
      value: function () {
        this.config.disable = false;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "keyboard";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          seekStep: 10,
          checkVisible: true,
          disableBodyTrigger: false,
          disableRootTrigger: false,
          isGlobalTrigger: false,
          keyCodeMap: {},
          disable: false,
          isIgnoreUserActive: false
        };
      }
    }]);
    return i;
  }(playerPluginBaseClass.PluginBase);
  require.d(exports, {
    KeyboardPlugin: function () {
      return r;
    }
  });
}