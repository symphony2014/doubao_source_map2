// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MobileGesturePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 950487
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var pluginHooksManager = require("plugin-hooks-manager") /*id: 206040*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var audioPlayStateConstants = require("audio-play-state-constants") /*id: 820236*/;
  var u = {
    PRESS: "press",
    PRESS_END: "pressend",
    DOUBlE_CLICK: "doubleclick",
    CLICK: "click",
    TOUCH_MOVE: "touchmove",
    TOUCH_START: "touchstart",
    TOUCH_END: "touchend"
  };
  var h = {
    start: "touchstart",
    end: "touchend",
    move: "touchmove",
    cancel: "touchcancel"
  };
  var d = {
    start: "mousedown",
    end: "mouseup",
    move: "mousemove",
    cancel: "mouseleave"
  };
  function f(t) {
    if (t && t.length > 0) {
      return t[t.length - 1];
    } else {
      return null;
    }
  }
  var p = function () {
    function t(e) {
      var i = this;
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        eventType: "touch"
      };
      babelRuntimeHelpers_1.classCallCheck(this, t);
      this._pos = {
        moving: false,
        start: false,
        x: 0,
        y: 0
      };
      this.config = {
        pressDelay: 600,
        dbClickDelay: 200,
        disablePress: false,
        disableDbClick: false,
        miniStep: 2,
        needPreventDefault: true
      };
      Object.keys(o).map(function (t) {
        i.config[t] = o[t];
      });
      this.root = e;
      this.events = o.eventType === "mouse" ? d : h;
      this.pressIntrvalId = null;
      this.dbIntrvalId = null;
      this.__handlers = {};
      this._initEvent();
    }
    babelRuntimeHelpers_1.createClass(t, [{
      key: "_initEvent",
      value: function () {
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchCancel = this.onTouchCancel.bind(this);
        this.root.addEventListener(this.events.start, this.onTouchStart);
      }
    }, {
      key: "__setPress",
      value: function (t) {
        var e = this;
        var i = this.config;
        if (this.pressIntrvalId) {
          this.__clearPress();
        }
        this.pressIntrvalId = setTimeout(function () {
          e.trigger(u.PRESS, t);
          e._pos.press = true;
          e.__clearPress();
        }, i.pressDelay);
      }
    }, {
      key: "__clearPress",
      value: function () {
        window.clearTimeout(this.pressIntrvalId);
        this.pressIntrvalId = null;
      }
    }, {
      key: "__setDb",
      value: function (t) {
        var e = this;
        var i = this.config;
        if (this.dbIntrvalId) {
          this.__clearDb();
          this.trigger(u.DOUBlE_CLICK, t);
          return;
        }
        this.dbIntrvalId = setTimeout(function () {
          e.__clearDb();
          if (!e._pos.start && !e._pos.press && !e._pos.moving) {
            e.trigger(u.CLICK, t);
          }
        }, i.dbClickDelay);
      }
    }, {
      key: "__clearDb",
      value: function () {
        clearTimeout(this.dbIntrvalId);
        this.dbIntrvalId = null;
      }
    }, {
      key: "on",
      value: function (t, e) {
        this.__handlers[t] ||= [];
        this.__handlers[t].push(e);
      }
    }, {
      key: "off",
      value: function (t, e) {
        if (this.__handlers[t]) {
          var i = this.__handlers[t];
          var n = -1;
          var o = 0;
          for (; o < i.length; o++) {
            if (i[o] === e) {
              n = o;
              break;
            }
          }
          if (n >= 0) {
            this.__handlers[t].splice(n, 1);
          }
        }
      }
    }, {
      key: "trigger",
      value: function (t, e) {
        if (this.__handlers[t]) {
          this.__handlers[t].map(function (t) {
            try {
              t(e);
            } catch (t) {}
          });
        }
      }
    }, {
      key: "onTouchStart",
      value: function (t) {
        var e = this._pos;
        var i = this.root;
        var n = f(t.touches);
        e.x = n ? parseInt(n.pageX, 10) : t.pageX;
        e.y = n ? parseInt(n.pageX, 10) : t.pageX;
        e.start = true;
        this.__setPress(t);
        i.addEventListener(this.events.end, this.onTouchEnd);
        i.addEventListener(this.events.cancel, this.onTouchCancel);
        i.addEventListener(this.events.move, this.onTouchMove);
        this.trigger(u.TOUCH_START, t);
      }
    }, {
      key: "onTouchCancel",
      value: function (t) {
        this.onTouchEnd(t);
      }
    }, {
      key: "onTouchEnd",
      value: function (t) {
        var e = this._pos;
        var i = this.root;
        this.__clearPress();
        i.removeEventListener(this.events.cancel, this.onTouchCancel);
        i.removeEventListener(this.events.end, this.onTouchEnd);
        i.removeEventListener(this.events.move, this.onTouchMove);
        t.moving = e.moving;
        t.press = e.press;
        if (e.press) {
          this.trigger(u.PRESS_END, t);
        }
        this.trigger(u.TOUCH_END, t);
        if (!e.press && !e.moving) {
          this.__setDb(t);
        }
        e.press = false;
        e.start = false;
        e.moving = false;
      }
    }, {
      key: "onTouchMove",
      value: function (t) {
        var e = this._pos;
        var i = this.config;
        var n = f(t.touches);
        var o = n ? parseInt(n.pageX, 10) : t.pageX;
        var s = n ? parseInt(n.pageY, 10) : t.pageX;
        var a = o - e.x;
        if (!(Math.abs(s - e.y) < i.miniStep) || !(Math.abs(a) < i.miniStep)) {
          this.__clearPress();
          if (e.press) {
            this.trigger(u.PRESS_END, t);
          }
          e.press = false;
          e.moving = true;
          this.trigger(u.TOUCH_MOVE, t);
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var t = this;
        var e = {
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchstart: "onTouchStart"
        };
        Object.keys(e).map(function (i) {
          t.root.removeEventListener("touchend", t[e[i]]);
        });
      }
    }]);
    return t;
  }();
  function g() {
    return new DOMParser().parseFromString("<svg width=\"20\" height=\"9\" viewBox=\"0 0 8 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <path opacity=\"0.54\"\n    d=\"M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z\"\n    fill=\"white\" />\n  <path transform=\"translate(5 0)\" d=\"M7.5 3.63397C8.16667 4.01887 8.16667 4.98113 7.5 5.36603L1.5 8.83013C0.833334 9.21503 0 8.7339 0 7.9641L0 1.0359C0 0.266098 0.833333 -0.215027 1.5 0.169873L7.5 3.63397Z\" fill=\"white\"/>\n</svg>", "image/svg+xml").firstChild;
  }
  var v = {
    AUTO: "auto",
    SEEKING: "seeking",
    PLAYBACK: "playbackrate"
  };
  var m = ["videoClick", "videoDbClick"];
  var y = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var s;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      s = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onTouchStart", function (t) {
        var e = babelRuntimeHelpers_1.assertThisInit(s);
        var i = e.player;
        var a = e.config;
        var r = e.pos;
        var l = e.playerConfig;
        var c = s.getTouche(t);
        if (c && !a.disableGesture && s.duration > 0 && !i.ended) {
          r.isStart = true;
          if (playerUtilityHelpers.domUtils.checkIsFunction(l.disableSwipeHandler)) {
            l.disableSwipeHandler();
          }
          s.find(".xg-dur").innerHTML = playerUtilityHelpers.domUtils.format(s.duration);
          var u = s.root.getBoundingClientRect();
          if (i.rotateDeg === 90) {
            r.top = u.left;
            r.left = u.top;
            r.width = u.height;
            r.height = u.width;
          } else {
            r.top = u.top;
            r.left = u.left;
            r.width = u.width;
            r.height = u.height;
          }
          var h = parseInt(c.pageX - r.left, 10);
          var d = parseInt(c.pageY - r.top, 10);
          r.x = i.rotateDeg === 90 ? d : h;
          r.y = i.rotateDeg === 90 ? h : d;
          r.scopeL = a.scopeL * r.width;
          r.scopeR = (1 - a.scopeR) * r.width;
          r.scopeM1 = r.width * (1 - a.scopeM) / 2;
          r.scopeM2 = r.width - r.scopeM1;
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onTouchMove", function (t) {
        var e = s.getTouche(t);
        var i = babelRuntimeHelpers_1.assertThisInit(s);
        var o = i.pos;
        var a = i.config;
        var r = i.player;
        if (e && !a.disableGesture && s.duration && o.isStart) {
          var l = a.miniMoveStep;
          var c = a.hideControlsActive;
          var u = parseInt(e.pageX - o.left, 10);
          var h = parseInt(e.pageY - o.top, 10);
          var d = r.rotateDeg === 90 ? h : u;
          var f = r.rotateDeg === 90 ? u : h;
          if (Math.abs(d - o.x) > l || Math.abs(f - o.y) > l) {
            var p = d - o.x;
            var g = f - o.y;
            var v = o.scope;
            if (v === -1) {
              if ((v = s.checkScope(d, f, p, g, o)) === 0) {
                if (c) {
                  r.blur();
                } else {
                  r.focus({
                    autoHide: false
                  });
                }
                o.time ||= parseInt(r.currentTime * 1000, 10) + s.timeOffset * 1000;
              }
              o.scope = v;
            }
            if (v === -1 || v > 0 && !a.gestureY || v === 0 && !a.gestureX) {
              return;
            }
            if (t.cancelable) {
              t.preventDefault();
            }
            s.executeMove(p, g, v, o.width, o.height);
            o.x = d;
            o.y = f;
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onTouchEnd", function (t) {
        var e = babelRuntimeHelpers_1.assertThisInit(s);
        var i = e.player;
        var a = e.pos;
        var r = e.playerConfig;
        if (a.isStart) {
          if (a.scope > -1 && t.cancelable) {
            t.preventDefault();
          }
          var l = s.config;
          var c = l.disableGesture;
          var u = l.gestureX;
          if (!c && u) {
            s.endLastMove(a.scope);
            setTimeout(function () {
              if (i.getPlugin("progress")) {
                i.getPlugin("progress").resetSeekState();
              }
            }, 10);
          } else {
            a.time = 0;
          }
          a.scope = -1;
          s.resetPos();
          if (playerUtilityHelpers.domUtils.checkIsFunction(r.enableSwipeHandler)) {
            r.enableSwipeHandler();
          }
          s.changeAction(v.AUTO);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onRootTouchMove", function (t) {
        if (!s.config.disableGesture && s.config.gestureX && s.checkIsRootTarget(t)) {
          t.stopPropagation();
          if (s.pos.isStart) {
            s.onTouchMove(t);
          } else {
            s.onTouchStart(t);
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onRootTouchEnd", function (t) {
        if (s.pos.isStart && s.checkIsRootTarget(t)) {
          t.stopPropagation();
          s.onTouchEnd(t);
        }
      });
      s.pos = {
        isStart: false,
        x: 0,
        y: 0,
        time: 0,
        volume: 0,
        rate: 1,
        light: 0,
        width: 0,
        height: 0,
        scopeL: 0,
        scopeR: 0,
        scopeM1: 0,
        scopeM2: 0,
        scope: -1
      };
      s.timer = null;
      return s;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "duration",
      get: function () {
        return this.playerConfig.customDuration || this.player.duration;
      }
    }, {
      key: "timeOffset",
      get: function () {
        return this.playerConfig.timeOffset || 0;
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          seekTipIcon: {
            icon: g,
            class: "xg-seek-pre"
          }
        };
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        m.map(function (e) {
          t.__hooks[e] = null;
        });
        var e = this.playerConfig;
        var i = this.config;
        var n = this.player;
        if (e.closeVideoDblclick === true) {
          i.closedbClick = true;
        }
        this.resetPos();
        if (!playerUtilityHelpers.domUtils.isUndefined(e.disableGesture)) {
          i.disableGesture = !!e.disableGesture;
        }
        this.appendChild(".xg-seek-icon", this.icons.seekTipIcon);
        this.xgMask = playerUtilityHelpers.domUtils.createDom("xg-mask", "", {}, "xgmask");
        n.root.appendChild(this.xgMask);
        this.initCustomStyle();
        this.registerThumbnail();
        var s = this.domEventType === "mouse" ? "mouse" : "touch";
        this.touch = new p(this.root, {
          eventType: s,
          needPreventDefault: !this.config.disableGesture
        });
        this.root.addEventListener("contextmenu", function (t) {
          t.preventDefault();
        });
        n.root.addEventListener("touchmove", this.onRootTouchMove, true);
        n.root.addEventListener("touchend", this.onRootTouchEnd, true);
        this.on(videoPlayerEventConstants.DURATION_CHANGE, function () {
          var e = t.player;
          var i = t.config;
          if (e.duration * 1000 < i.moveDuration) {
            i.moveDuration = e.duration * 1000;
          }
        });
        this.on([videoPlayerEventConstants.CANPLAY, videoPlayerEventConstants.ENDED], function () {
          var e = t.pos;
          var i = e.time;
          if (!e.isStart && i > 0) {
            t.pos.time = 0;
          }
        });
        var r = {
          touchstart: "onTouchStart",
          touchmove: "onTouchMove",
          touchend: "onTouchEnd",
          press: "onPress",
          pressend: "onPressEnd",
          click: "onClick",
          doubleclick: "onDbClick"
        };
        Object.keys(r).map(function (e) {
          t.touch.on(e, function (i) {
            t[r[e]](i);
          });
        });
        if (!i.disableActive) {
          var l = n.plugins.progress;
          if (l) {
            l.addCallBack("dragmove", function (e) {
              t.activeSeekNote(e.currentTime, e.forward);
            });
            l.addCallBack("dragend", function () {
              t.changeAction(v.AUTO);
            });
          }
        }
      }
    }, {
      key: "registerThumbnail",
      value: function () {
        var t = this.player.plugins.thumbnail;
        if (t && t.usable) {
          this.thumbnail = t.createThumbnail(null, "mobile-thumbnail");
          var e = this.find(".time-preview");
          e.insertBefore(this.thumbnail, e.children[0]);
        }
      }
    }, {
      key: "initCustomStyle",
      value: function () {
        var t = (this.playerConfig || {}).commonStyle;
        var e = t.playedColor;
        var i = t.progressColor;
        if (e) {
          this.find(".xg-curbar").style.backgroundColor = e;
          this.find(".xg-cur").style.color = e;
        }
        if (i) {
          this.find(".xg-bar").style.backgroundColor = i;
          this.find(".time-preview").style.color = i;
        }
        if (this.config.disableTimeProgress) {
          playerUtilityHelpers.domUtils.addClass(this.find(".xg-timebar"), "hide");
        }
      }
    }, {
      key: "resetPos",
      value: function () {
        var t = this;
        if (this.pos) {
          this.pos.isStart = false;
          this.pos.scope = -1;
          ["x", "y", "width", "height", "scopeL", "scopeR", "scopeM1", "scopeM2"].map(function (e) {
            t.pos[e] = 0;
          });
        } else {
          this.pos = {
            isStart: false,
            x: 0,
            y: 0,
            volume: 0,
            rate: 1,
            light: 0,
            width: 0,
            height: 0,
            scopeL: 0,
            scopeR: 0,
            scopeM1: 0,
            scopeM2: 0,
            scope: -1,
            time: 0
          };
        }
      }
    }, {
      key: "changeAction",
      value: function (t) {
        var e = this.player;
        this.root.setAttribute("data-xg-action", t);
        var i = e.plugins.start;
        if (i) {
          i.recover();
        }
      }
    }, {
      key: "getTouche",
      value: function (t) {
        this.player.rotateDeg;
        var e = t.touches && t.touches.length > 0 ? t.touches[t.touches.length - 1] : t;
        return {
          pageX: e.pageX,
          pageY: e.pageY
        };
      }
    }, {
      key: "checkScope",
      value: function (t, e, i, n, o) {
        var s = o.width;
        var a = -1;
        if (t < 0 || t > s) {
          return a;
        }
        var r = n === 0 ? Math.abs(i) : Math.abs(i / n);
        if (Math.abs(i) > 0 && r >= 1.73 && t > o.scopeM1 && t < o.scopeM2) {
          a = 0;
        } else if (Math.abs(i) === 0 || r <= 0.57) {
          a = t < o.scopeL ? 1 : t > o.scopeR ? 2 : 3;
        }
        return a;
      }
    }, {
      key: "executeMove",
      value: function (t, e, i, n, o) {
        switch (i) {
          case 0:
            this.updateTime(t / n * this.config.scopeM);
            break;
          case 1:
            this.updateBrightness(e / o);
            break;
          case 2:
            if (!environmentDetectorUtil.environmentUtils.os.isIos) {
              this.updateVolume(e / o);
            }
        }
      }
    }, {
      key: "endLastMove",
      value: function (t) {
        var e = this;
        var i = this.pos;
        var n = this.player;
        var o = this.config;
        var s = (i.time - this.timeOffset) / 1000;
        if (t === 0) {
          n.seek(Number(s).toFixed(1));
          if (o.hideControlsEnd) {
            n.blur();
          } else {
            n.focus();
          }
          this.timer = setTimeout(function () {
            e.pos.time = 0;
          }, 500);
        }
        this.changeAction(v.AUTO);
      }
    }, {
      key: "checkIsRootTarget",
      value: function (t) {
        var e = this.player.plugins || {};
        return (!e.progress || !e.progress.root.contains(t.target)) && (e.start && e.start.root.contains(t.target) || e.controls && e.controls.root.contains(t.target));
      }
    }, {
      key: "sendUseAction",
      value: function (t) {
        var e = this.player.paused;
        this.emitUserAction(t, "switch_play_pause", {
          prop: "paused",
          from: e,
          to: !e
        });
      }
    }, {
      key: "clickHandler",
      value: function (t) {
        var e = this.player;
        var i = this.config;
        var n = this.playerConfig;
        if (e.state < audioPlayStateConstants.PlayStateMap.RUNNING) {
          if (!n.closeVideoClick) {
            this.sendUseAction(playerUtilityHelpers.domUtils.createEvent("click"));
            e.play();
          }
          return;
        }
        if (!i.closedbClick || n.closeVideoClick) {
          if (e.isActive) {
            e.blur();
          } else {
            e.focus();
          }
        } else if (!n.closeVideoClick) {
          if (e.isActive || i.focusVideoClick) {
            this.sendUseAction(playerUtilityHelpers.domUtils.createEvent("click"));
            this.switchPlayPause();
          }
          e.focus();
        }
      }
    }, {
      key: "dbClickHandler",
      value: function (t) {
        var e = this.config;
        var i = this.player;
        if (!e.closedbClick && i.state >= audioPlayStateConstants.PlayStateMap.RUNNING) {
          this.sendUseAction(playerUtilityHelpers.domUtils.createEvent("dblclick"));
          this.switchPlayPause();
        }
      }
    }, {
      key: "onClick",
      value: function (t) {
        var e = this;
        var i = this.player;
        pluginHooksManager.runHooks(this, m[0], function (t, i) {
          e.clickHandler(i.e);
        }, {
          e: t,
          paused: i.paused
        });
      }
    }, {
      key: "onDbClick",
      value: function (t) {
        var e = this;
        var i = this.player;
        pluginHooksManager.runHooks(this, m[1], function (t, i) {
          e.dbClickHandler(i.e);
        }, {
          e: t,
          paused: i.paused
        });
      }
    }, {
      key: "onPress",
      value: function (t) {
        var e = this.pos;
        var i = this.config;
        var n = this.player;
        if (!i.disablePress) {
          e.rate = this.player.playbackRate;
          this.emitUserAction("press", "change_rate", {
            prop: "playbackRate",
            from: n.playbackRate,
            to: i.pressRate
          });
          n.playbackRate = i.pressRate;
          this.changeAction(v.PLAYBACK);
        }
      }
    }, {
      key: "onPressEnd",
      value: function (t) {
        var e = this.pos;
        var i = this.config;
        var n = this.player;
        if (!i.disablePress) {
          this.emitUserAction("pressend", "change_rate", {
            prop: "playbackRate",
            from: n.playbackRate,
            to: e.rate
          });
          n.playbackRate = e.rate;
          e.rate = 1;
          this.changeAction(v.AUTO);
        }
      }
    }, {
      key: "updateTime",
      value: function (t) {
        var e = this.player;
        var i = this.config;
        var n = this.player.duration;
        var o = parseInt((t = Number(t.toFixed(4))) * i.moveDuration, 10) + this.timeOffset;
        o += this.pos.time;
        o = o < 0 ? 0 : o > n * 1000 ? n * 1000 - 200 : o;
        if (e.getPlugin("time")) {
          e.getPlugin("time").updateTime(o / 1000);
        }
        if (e.getPlugin("progress")) {
          e.getPlugin("progress").updatePercent(o / 1000 / this.duration, true);
        }
        this.activeSeekNote(o / 1000, t > 0);
        if (i.isTouchingSeek) {
          e.seek(Number((o - this.timeOffset) / 1000).toFixed(1));
        }
        this.pos.time = o;
      }
    }, {
      key: "updateVolume",
      value: function (t) {
        if (this.player.rotateDeg) {
          t = -t;
        }
        var e = this.player;
        var i = this.pos;
        t = parseInt(t * 100, 10);
        i.volume += t;
        if (!(Math.abs(i.volume) < 10)) {
          var n = parseInt(e.volume * 10, 10) - parseInt(i.volume / 10, 10);
          n = n > 10 ? 10 : n < 1 ? 0 : n;
          e.volume = n / 10;
          i.volume = 0;
        }
      }
    }, {
      key: "updateBrightness",
      value: function (t) {
        if (this.player.rotateDeg) {
          t = -t;
        }
        var e = this.pos;
        var i = this.config;
        var n = this.xgMask;
        var o = e.light + t * 0.8;
        o = o > i.maxDarkness ? i.maxDarkness : o < 0 ? 0 : o;
        if (n) {
          n.style.backgroundColor = `rgba(0,0,0,${o})`;
        }
        e.light = o;
      }
    }, {
      key: "activeSeekNote",
      value: function (t) {
        var e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        var i = this.player;
        var n = this.config;
        var s = this.duration === Infinity || !(this.duration > 0);
        if (t && typeof t == "number" && !s && !n.disableActive) {
          if (t < 0) {
            t = 0;
          } else if (t > i.duration) {
            t = i.duration - 0.2;
          }
          this.changeAction(v.SEEKING);
          var a = i.plugins.start;
          if (a) {
            a.focusHide();
          }
          this.find(".xg-dur").innerHTML = playerUtilityHelpers.domUtils.format(this.duration);
          this.find(".xg-cur").innerHTML = playerUtilityHelpers.domUtils.format(t);
          this.find(".xg-curbar").style.width = `${t / this.duration * 100}%`;
          if (e) {
            playerUtilityHelpers.domUtils.removeClass(this.find(".xg-seek-show"), "xg-back");
          } else {
            playerUtilityHelpers.domUtils.addClass(this.find(".xg-seek-show"), "xg-back");
          }
          this.updateThumbnails(t);
        }
      }
    }, {
      key: "updateThumbnails",
      value: function (t) {
        var e = this.player.plugins.thumbnail;
        if (e && e.usable && this.thumbnail) {
          e.update(this.thumbnail, t, 160, 90);
        }
      }
    }, {
      key: "switchPlayPause",
      value: function () {
        var t = this.player;
        if (t.state < audioPlayStateConstants.PlayStateMap.ATTACHED) {
          return false;
        }
        if (!t.ended) {
          if (t.paused) {
            t.play();
          } else {
            t.pause();
          }
        }
      }
    }, {
      key: "disableGesture",
      value: function () {
        this.config.disableGesture = false;
      }
    }, {
      key: "enableGesture",
      value: function () {
        this.config.disableGesture = true;
      }
    }, {
      key: "destroy",
      value: function () {
        var t = this.player;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.thumbnail = null;
        t.root.removeChild(this.xgMask);
        this.xgMask = null;
        if (this.touch) {
          this.touch.destroy();
        }
        this.touch = null;
        t.root.removeEventListener("touchmove", this.onRootTouchMove, true);
        t.root.removeEventListener("touchend", this.onRootTouchEnd, true);
      }
    }, {
      key: "render",
      value: function () {
        var t = this.config.gradient !== "normal" ? `gradient ${this.config.gradient}` : "gradient";
        return `
     <xg-trigger class="trigger">
     <div class="${t}"></div>
        <div class="time-preview">
            <div class="xg-seek-show ${this.config.disableSeekIcon ? " hide-seek-icon" : ""}">
              <i class="xg-seek-icon"></i>
              <span class="xg-cur">00:00</span>
              <span>/</span>
              <span class="xg-dur">00:00</span>
            </div>
              <div class="xg-bar xg-timebar">
                <div class="xg-curbar"></div>
              </div>
        </div>
        <div class="xg-playbackrate xg-top-note">
            <span><i>${this.config.pressRate}X</i>${this.i18n.FORWARD}</span>
        </div>
     </xg-trigger>
    `;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "mobile";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          index: 0,
          disableGesture: false,
          gestureX: true,
          gestureY: true,
          gradient: "normal",
          isTouchingSeek: false,
          miniMoveStep: 5,
          miniYPer: 5,
          scopeL: 0.25,
          scopeR: 0.25,
          scopeM: 0.9,
          pressRate: 2,
          darkness: true,
          maxDarkness: 0.8,
          disableActive: false,
          disableTimeProgress: false,
          hideControlsActive: false,
          hideControlsEnd: false,
          moveDuration: 360000,
          closedbClick: false,
          disablePress: true,
          disableSeekIcon: false,
          focusVideoClick: false
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    MobileGesturePlugin: function () {
      return y;
    }
  });
}