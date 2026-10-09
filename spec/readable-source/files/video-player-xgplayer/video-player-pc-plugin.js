// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'PcVideoPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 492893
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var playerPluginBaseClass = require("player-plugin-base-class") /*id: 738545*/;
  require("event-delegation-helper") /*id: 359139*/;
  var pluginHooksManager = require("plugin-hooks-manager") /*id: 206040*/;
  var s = {
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    mousemove: "onMouseMove"
  };
  var c = ["videoClick", "videoDbClick"];
  var u = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n() {
      var e;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      var i = arguments.length;
      var o = Array(i);
      var s = 0;
      for (; s < i; s++) {
        o[s] = arguments[s];
      }
      e = t.call.apply(t, [this].concat(o));
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onMouseMove", function (t) {
        var n = babelRuntimeHelpers_1.assertThisInit(e);
        var i = n.player;
        var o = n.playerConfig;
        if (!i.isActive) {
          i.focus({
            autoHide: !o.closeDelayBlur
          });
          if (!o.closeFocusVideoFocus) {
            i.media.focus();
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onMouseEnter", function (t) {
        var n = babelRuntimeHelpers_1.assertThisInit(e);
        var i = n.playerConfig;
        var o = n.player;
        if (!i.closeFocusVideoFocus) {
          o.media.focus();
        }
        if (i.closeDelayBlur) {
          o.focus({
            autoHide: false
          });
        } else {
          o.focus();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onMouseLeave", function (t) {
        var n = e.playerConfig;
        var r = n.closePlayerBlur;
        var i = n.leavePlayerTime;
        var o = n.closeDelayBlur;
        if (!r && !o) {
          if (i) {
            e.player.focus({
              autoHide: true,
              delay: i
            });
          } else {
            e.player.blur();
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onVideoClick", function (t) {
        var n = babelRuntimeHelpers_1.assertThisInit(e);
        var i = n.player;
        var o = n.playerConfig;
        if ((!t.target || !o.closeVideoClick) && (t.target === i.root || t.target === i.media || t.target === i.innerContainer || t.target === i.media.__canvas)) {
          t.preventDefault();
          if (!o.closeVideoStopPropagation) {
            t.stopPropagation();
          }
          e._clickCount++;
          if (e.clickTimer) {
            clearTimeout(e.clickTimer);
            e.clickTimer = null;
          }
          e.clickTimer = setTimeout(function () {
            if (e._clickCount) {
              e._clickCount--;
              pluginHooksManager.runHooks(babelRuntimeHelpers_1.assertThisInit(e), c[0], function (t, n) {
                e.switchPlayPause(n.e);
              }, {
                e: t,
                paused: i.paused
              });
              clearTimeout(e.clickTimer);
              e.clickTimer = null;
            }
          }, 300);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(e), "onVideoDblClick", function (t) {
        var n = babelRuntimeHelpers_1.assertThisInit(e);
        var i = n.player;
        var o = n.playerConfig;
        if (!o.closeVideoDblclick && t.target && (t.target === i.media || t.target === i.media.__canvas)) {
          if (!o.closeVideoClick && e._clickCount < 2) {
            e._clickCount = 0;
            return;
          }
          e._clickCount = 0;
          if (e.clickTimer) {
            clearTimeout(e.clickTimer);
            e.clickTimer = null;
          }
          t.preventDefault();
          t.stopPropagation();
          pluginHooksManager.runHooks(babelRuntimeHelpers_1.assertThisInit(e), c[1], function (t, n) {
            e.emitUserAction(n.e, "switch_fullscreen", {
              props: "fullscreen",
              from: i.fullscreen,
              to: !i.fullscreen
            });
            if (i.fullscreen) {
              i.exitFullscreen();
            } else {
              i.getFullscreen();
            }
          }, {
            e: t,
            fullscreen: i.fullscreen
          });
        }
      });
      return e;
    }
    babelRuntimeHelpers_1.createClass(n, [{
      key: "afterCreate",
      value: function () {
        var e = this;
        this._clickCount = 0;
        c.map(function (t) {
          e.__hooks[t] = null;
        });
        if (this.playerConfig.isMobileSimulateMode !== "mobile" && (environmentDetectorUtil.environmentUtils.device !== "mobile" || environmentDetectorUtil.environmentUtils.os.isIpad)) {
          this.initEvents();
        }
      }
    }, {
      key: "initEvents",
      value: function () {
        var e = this;
        var t = this.player;
        var n = t.video;
        var r = t.root;
        var i = this.playerConfig.enableContextmenu;
        if (r) {
          r.addEventListener("click", this.onVideoClick, false);
        }
        if (r) {
          r.addEventListener("dblclick", this.onVideoDblClick, false);
        }
        Object.keys(s).map(function (t) {
          r.addEventListener(t, e[s[t]], false);
        });
        if (i && n) {
          n.addEventListener("contextmenu", this.onContextmenu, false);
        }
      }
    }, {
      key: "switchPlayPause",
      value: function (e) {
        var t = this.player;
        this.emitUserAction(e, "switch_play_pause", {
          props: "paused",
          from: t.paused,
          to: !t.paused
        });
        if (t.ended) {
          if (t.duration !== Infinity && t.duration > 0) {
            t.replay();
          }
        } else if (t.paused) {
          t.play();
        } else {
          t.pause();
        }
      }
    }, {
      key: "onContextmenu",
      value: function (e) {
        if ((e = e || window.event).preventDefault) {
          e.preventDefault();
        }
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.returnValue = false;
          e.cancelBubble = true;
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this;
        var t = this.player;
        var n = t.video;
        var r = t.root;
        if (this.clickTimer) {
          clearTimeout(this.clickTimer);
        }
        r.removeEventListener("click", this.onVideoClick, false);
        r.removeEventListener("dblclick", this.onVideoDblClick, false);
        n.removeEventListener("contextmenu", this.onContextmenu, false);
        Object.keys(s).map(function (t) {
          r.removeEventListener(t, e[s[t]], false);
        });
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "pc";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {};
      }
    }]);
    return n;
  }(playerPluginBaseClass.PluginBase);
  require.d(exports, {
    PcVideoPlugin: function () {
      return u;
    }
  });
}