// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ProgressPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2348.d6dfac26.js
         * chunkId: 2348
         * moduleId: 888087
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  require("event-delegation-helper") /*id: 359139*/;
  var c = [{
    tag: "xg-cache",
    className: "xgplayer-progress-cache",
    styleKey: "cachedColor"
  }, {
    tag: "xg-played",
    className: "xgplayer-progress-played",
    styleKey: "playedColor"
  }];
  var u = function () {
    function e(t) {
      babelRuntimeHelpers_1.classCallCheck(this, e);
      this.fragments = t.fragments || [];
      if (this.fragments.length === 0) {
        this.fragments.push({
          percent: 1
        });
      }
      this._callBack = t.actionCallback;
      this.fragConfig = {
        fragFocusClass: t.fragFocusClass || "inner-focus-point",
        fragAutoFocus: !!t.fragAutoFocus,
        fragClass: t.fragClass || ""
      };
      this.style = t.style || {
        playedColor: "",
        cachedColor: "",
        progressColor: ""
      };
      this.duration = 0;
      this.cachedIndex = 0;
      this.playedIndex = 0;
      this.focusIndex = -1;
    }
    babelRuntimeHelpers_1.createClass(e, [{
      key: "updateDuration",
      value: function (e) {
        var t = this;
        this.duration = e;
        var n = 0;
        var r = this.fragments;
        this.fragments = r.map(function (e) {
          e.start = parseInt(n, 10);
          e.end = parseInt(n + e.percent * t.duration, 10);
          e.duration = parseInt(e.percent * t.duration, 10);
          n += e.percent * t.duration;
          return e;
        });
      }
    }, {
      key: "updateProgress",
      value: function (e = "played", t = {
        newIndex: 0,
        curIndex: 0,
        millisecond: 0
      }) {
        var n = this.progressList;
        var r = this.fragments;
        if (!(n.length < 1)) {
          var i = t.newIndex;
          var o = t.curIndex;
          var a = t.millisecond;
          if (i !== o) {
            n.map(function (t, n) {
              if (n < i) {
                t[e].style.width = "100%";
              } else if (n > i) {
                t[e].style.width = 0;
              }
            });
          }
          var s = r[i];
          var c = a === 0 ? 0 : (a - s.start) / s.duration;
          n[i][e].style.width = c < 0 ? 0 : `${c * 100}%`;
        }
      }
    }, {
      key: "updateFocus",
      value: function (e) {
        if (this.fragConfig.fragAutoFocus && !(this.fragments.length < 2)) {
          if (!e) {
            if (this.focusIndex > -1) {
              this.unHightLight(this.focusIndex);
              var t = {
                index: -1,
                preIndex: this.focusIndex,
                fragment: null
              };
              if (this._callBack) {
                this._callBack(t);
              }
              this.focusIndex = -1;
            }
            return;
          }
          var n = this.findIndex(e.currentTime * 1000, this.focusIndex);
          if (n >= 0 && n !== this.focusIndex) {
            if (this.focusIndex > -1) {
              this.unHightLight(this.focusIndex);
            }
            this.setHightLight(n);
            var r = {
              index: n,
              preIndex: this.focusIndex,
              fragment: this.fragments[this.focusIndex]
            };
            this.focusIndex = n;
            if (this._callBack) {
              this._callBack(r);
            }
          }
        }
      }
    }, {
      key: "update",
      value: function (e = {
        cached: 0,
        played: 0
      }, t) {
        if (!this.duration || parseInt(t * 1000, 10) !== this.duration) {
          if (!t && t !== 0) {
            return;
          }
          this.updateDuration(parseInt(t * 1000, 10));
        }
        var n = this.playedIndex;
        var r = this.cachedIndex;
        if (playerUtilityHelpers.domUtils.typeOf(e.played) !== "Undefined") {
          var o = this.findIndex(e.played * 1000, n);
          if (o < 0) {
            return;
          }
          this.updateProgress("played", {
            newIndex: o,
            curIndex: n,
            millisecond: parseInt(e.played * 1000, 10)
          });
          this.playedIndex = o;
        }
        if (playerUtilityHelpers.domUtils.typeOf(e.cached) !== "Undefined") {
          var a = this.findIndex(e.cached * 1000, r);
          if (a < 0) {
            return;
          }
          this.updateProgress("cached", {
            newIndex: a,
            curIndex: r,
            millisecond: parseInt(e.cached * 1000, 10)
          });
          this.cachedIndex = a;
        }
      }
    }, {
      key: "findIndex",
      value: function (e, t) {
        var n = this.fragments;
        if (!n || n.length === 0) {
          return -1;
        }
        if (n.length === 1) {
          return 0;
        }
        if (t > -1 && t < n.length && e > n[t].start && e < n[t].end) {
          return t;
        }
        if (e > n[n.length - 1].start) {
          return n.length - 1;
        }
        for (var r = 0; r < n.length; r++) {
          if (e > n[r].start && e <= n[r].end) {
            t = r;
            break;
          }
        }
        return t;
      }
    }, {
      key: "findHightLight",
      value: function () {
        var e = this.root.children;
        var t = 0;
        for (; t < e.length; t++) {
          if (playerUtilityHelpers.domUtils.hasClass(e[t], this.fragConfig.fragFocusClass)) {
            return {
              dom: e[t],
              pos: e[t].getBoundingClientRect()
            };
          }
        }
      }
    }, {
      key: "findFragment",
      value: function (e) {
        var t = this.root.children;
        if (e < 0 || e >= t.length) {
          return null;
        } else {
          return {
            dom: t[e],
            pos: t[e].getBoundingClientRect()
          };
        }
      }
    }, {
      key: "unHightLight",
      value: function () {
        var e = this.root.children;
        var t = 0;
        for (; t < e.length; t++) {
          playerUtilityHelpers.domUtils.removeClass(e[t], this.fragConfig.fragFocusClass);
        }
      }
    }, {
      key: "setHightLight",
      value: function (e) {
        var t = this.root.children;
        if (e < t.length) {
          playerUtilityHelpers.domUtils.addClass(t[e], this.fragConfig.fragFocusClass);
          return {
            dom: t[e],
            pos: t[e].getBoundingClientRect()
          };
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this.progressList = null;
        this.fragments = null;
        this.root.innerHTML = "";
      }
    }, {
      key: "reset",
      value: function (e) {
        var t = this;
        Object.keys(this.fragConfig).forEach(function (n) {
          if (e[n] !== undefined) {
            t.fragConfig[n] = e[n];
          }
        });
        if (e.fragments) {
          this.fragments = e.fragments.length === 0 ? [{
            percent: 1
          }] : e.fragments;
          this.updateDuration(this.duration);
          this.playedIndex = 0;
          this.cachedIndex = 0;
          if (this.root) {
            for (var n = this.root.children; n.length > 0;) {
              this.root.removeChild(n[0]);
            }
          }
          this.render();
        }
      }
    }, {
      key: "render",
      value: function () {
        var e = this;
        var t = this.style.progressColor;
        this.root ||= playerUtilityHelpers.domUtils.createDom("xg-inners", "", {}, "progress-list");
        if (this.fragments) {
          var n = this.fragConfig;
          var r = n.fragClass;
          var o = n.fragFocusClass;
          this.progressList = this.fragments.map(function (n) {
            var a = playerUtilityHelpers.domUtils.createDom("xg-inner", "", {
              style: t ? `background:${t}; flex: ${n.percent}` : `flex: ${n.percent}`
            }, `${n.isFocus ? o : ""} xgplayer-progress-inner ${r}`);
            e.root.appendChild(a);
            c.forEach(function (t) {
              a.appendChild(playerUtilityHelpers.domUtils.createDom(t.tag, "", {
                style: t.styleKey ? `background: ${e.style[t.styleKey]}; width:0;` : "width:0;"
              }, t.className));
            });
            return {
              cached: a.children[0],
              played: a.children[1]
            };
          });
        }
        return this.root;
      }
    }]);
    return e;
  }();
  var l = {
    POINT: "inner-focus-point",
    HIGHLIGHT: "inner-focus-highlight"
  };
  var f = function (e) {
    babelRuntimeHelpers_1.inherits(n, e);
    var t = babelRuntimeHelpers_1.constructHelper(n);
    function n(e) {
      var o;
      babelRuntimeHelpers_1.classCallCheck(this, n);
      o = t.call(this, e);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMoveOnly", function (e, t) {
        var n = babelRuntimeHelpers_1.assertThisInit(o);
        var a = n.pos;
        var s = n.config;
        var c = n.player;
        var u = t;
        if (e) {
          playerUtilityHelpers.domUtils.event(e);
          var l = playerUtilityHelpers.domUtils.getEventPos(e, c.zoom);
          var f = c.rotateDeg === 90 ? l.clientY : l.clientX;
          if (a.moving && Math.abs(a.x - f) < s.miniMoveStep) {
            return;
          }
          a.moving = true;
          a.x = f;
          u = o.computeTime(e, f);
        }
        o.triggerCallbacks("dragmove", u, e);
        o._updateInnerFocus(u);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onBodyClick", function (e) {
        if (o.pos.isLocked) {
          o.pos.isLocked = false;
          e.preventDefault();
          e.stopPropagation();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "_mouseDownHandler", function (e, t) {
        o._state.time = t.currentTime;
        o.updateWidth(t.currentTime, t.percent, 0);
        o._updateInnerFocus(t);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "_mouseUpHandler", function (e, t) {
        if (babelRuntimeHelpers_1.assertThisInit(o).pos.moving) {
          o.updateWidth(t.currentTime, t.percent, 2);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "_mouseMoveHandler", function (e, t) {
        var n = babelRuntimeHelpers_1.assertThisInit(o);
        var i = n._state;
        var a = n.pos;
        var s = n.config;
        var c = n.player;
        if (i.time < t.currentTime) {
          t.forward = true;
        } else {
          t.forward = false;
        }
        i.time = t.currentTime;
        if (a.isDown && !a.moving) {
          a.moving = true;
          if (s.isPauseMoving) {
            c.pause();
          }
          o.triggerCallbacks("dragstart", t, e);
          o.emitUserAction("drag", "dragstart", t);
        }
        o.updateWidth(t.currentTime, t.percent, 1);
        o.triggerCallbacks("dragmove", t, e);
        o._updateInnerFocus(t);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseDown", function (e) {
        var t = babelRuntimeHelpers_1.assertThisInit(o);
        var n = t._state;
        var a = t.player;
        var s = t.pos;
        var c = t.config;
        var u = t.playerConfig;
        var l = playerUtilityHelpers.domUtils.getEventPos(e, a.zoom);
        var f = a.rotateDeg === 90 ? l.clientY : l.clientX;
        if (!a.isMini && !c.closeMoveSeek && (u.allowSeekAfterEnded || !a.ended)) {
          if (!a.duration && !a.isPlaying) {
            a.play();
            return;
          }
          e.stopPropagation();
          o.focus();
          if (playerUtilityHelpers.domUtils.checkIsFunction(u.disableSwipeHandler)) {
            u.disableSwipeHandler();
          }
          if (playerUtilityHelpers.domUtils.checkIsFunction(c.onMoveStart)) {
            c.onMoveStart();
          }
          playerUtilityHelpers.domUtils.event(e);
          s.x = f;
          s.isDown = true;
          s.moving = false;
          n.prePlayTime = a.currentTime;
          a.focus({
            autoHide: false
          });
          o.isProgressMoving = true;
          playerUtilityHelpers.domUtils.addClass(o.progressBtn, "active");
          var h = o.computeTime(e, f);
          h.prePlayTime = n.prePlayTime;
          o._mouseDownHandlerHook(e, h);
          if (e.type === "touchstart") {
            o.root.addEventListener("touchmove", o.onMouseMove);
            o.root.addEventListener("touchend", o.onMouseUp);
          } else {
            o.unbind("mousemove", o.onMoveOnly);
            document.addEventListener("mousemove", o.onMouseMove, false);
            document.addEventListener("mouseup", o.onMouseUp, false);
          }
          return true;
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseUp", function (e) {
        var t = babelRuntimeHelpers_1.assertThisInit(o);
        var n = t.player;
        var a = t.config;
        var s = t.pos;
        var c = t.playerConfig;
        var u = t._state;
        e.stopPropagation();
        e.preventDefault();
        if (playerUtilityHelpers.domUtils.checkIsFunction(c.enableSwipeHandler)) {
          c.enableSwipeHandler();
        }
        if (playerUtilityHelpers.domUtils.checkIsFunction(a.onMoveEnd)) {
          a.onMoveEnd();
        }
        playerUtilityHelpers.domUtils.event(e);
        playerUtilityHelpers.domUtils.removeClass(o.progressBtn, "active");
        var l = o.computeTime(e, s.x);
        l.prePlayTime = u.prePlayTime;
        if (s.moving) {
          o.triggerCallbacks("dragend", l, e);
          o.emitUserAction("drag", "dragend", l);
        } else {
          o.triggerCallbacks("click", l, e);
          o.emitUserAction("click", "click", l);
        }
        o._mouseUpHandlerHook(e, l);
        s.moving = false;
        s.isDown = false;
        s.x = 0;
        s.y = 0;
        s.isLocked = true;
        u.prePlayTime = 0;
        u.time = 0;
        if (e.type === "touchend") {
          o.root.removeEventListener("touchmove", o.onMouseMove);
          o.root.removeEventListener("touchend", o.onMouseUp);
          o.blur();
        } else {
          document.removeEventListener("mousemove", o.onMouseMove, false);
          document.removeEventListener("mouseup", o.onMouseUp, false);
          if (s.isEnter) {
            if (c.isMobileSimulateMode !== "mobile") {
              o.bind("mousemove", o.onMoveOnly);
            }
          } else {
            o.onMouseLeave(e);
          }
        }
        playerUtilityHelpers.domUtils.setTimeout(babelRuntimeHelpers_1.assertThisInit(o), function () {
          o.resetSeekState();
        }, 10);
        n.focus();
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseMove", function (e) {
        var t = babelRuntimeHelpers_1.assertThisInit(o);
        var n = t._state;
        var a = t.pos;
        var s = t.player;
        var c = t.config;
        if (playerUtilityHelpers.domUtils.checkTouchSupport()) {
          e.preventDefault();
        }
        playerUtilityHelpers.domUtils.event(e);
        var u = playerUtilityHelpers.domUtils.getEventPos(e, s.zoom);
        var l = s.rotateDeg === 90 ? u.clientY : u.clientX;
        var f = Math.abs(a.x - l);
        if ((!a.moving || !(f < c.miniMoveStep)) && (a.moving || !(f < c.miniStartStep))) {
          a.x = l;
          var h = o.computeTime(e, l);
          h.prePlayTime = n.prePlayTime;
          o._mouseMoveHandlerHook(e, h);
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseOut", function (e) {
        o.triggerCallbacks("mouseout", null, e);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseOver", function (e) {
        o.triggerCallbacks("mouseover", null, e);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseEnter", function (e) {
        var t = babelRuntimeHelpers_1.assertThisInit(o);
        var n = t.player;
        var a = t.pos;
        if (!a.isDown && !a.isEnter && !n.isMini && (n.config.allowSeekAfterEnded || !n.ended)) {
          a.isEnter = true;
          o.bind("mousemove", o.onMoveOnly);
          o.bind("mouseleave", o.onMouseLeave);
          playerUtilityHelpers.domUtils.event(e);
          var s = playerUtilityHelpers.domUtils.getEventPos(e, n.zoom);
          var c = n.rotateDeg === 90 ? s.clientY : s.clientX;
          var u = o.computeTime(e, c);
          o.triggerCallbacks("mouseenter", u, e);
          o.focus();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onMouseLeave", function (e) {
        o.triggerCallbacks("mouseleave", null, e);
        o.unlock();
        o._updateInnerFocus(null);
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(o), "onVideoResize", function () {
        var e = o.pos;
        var t = e.x;
        var n = e.isDown;
        if (e.isEnter && !n) {
          var r = o.computeTime(null, t);
          o.onMoveOnly(null, r);
        }
      });
      o.useable = false;
      o.isProgressMoving = false;
      o.__dragCallBacks = [];
      o._state = {
        now: -1,
        direc: 0,
        time: 0,
        prePlayTime: -1
      };
      o._disableBlur = false;
      return o;
    }
    babelRuntimeHelpers_1.createClass(n, [{
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
      key: "changeState",
      value: function () {
        var e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
        this.useable = e;
      }
    }, {
      key: "show",
      value: function () {
        if (this.root) {
          this.root.style.display = "flex";
        }
      }
    }, {
      key: "_initInner",
      value: function () {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!t || t.length === 0) {
          t = [{
            percent: 1
          }];
        }
        var i = babelRuntimeHelpers_1.objectSpread(babelRuntimeHelpers_1.objectSpread({
          fragments: t
        }, n), {}, {
          actionCallback: function (t) {
            e.emitUserAction("fragment_focus", "fragment_focus", t);
          }
        });
        if (this.innerList) {
          this.innerList.reset(i);
        } else {
          this.innerList = new u(i);
          this.outer.insertBefore(this.innerList.render(), this.outer.children[0]);
          ["findHightLight", "unHightLight", "setHightLight", "findFragment"].map(function (t) {
            e[t] = e.innerList[t].bind(e.innerList);
          });
        }
      }
    }, {
      key: "_updateInnerFocus",
      value: function (e) {
        if (this.innerList) {
          this.innerList.updateFocus(e);
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var e = this;
        if (!this.config.disable && !this.playerConfig.isLive) {
          this.pos = {
            x: 0,
            y: 0,
            moving: false,
            isDown: false,
            isEnter: false,
            isLocked: false
          };
          this.outer = this.find("xg-outer");
          var t = this.config;
          var n = t.fragFocusClass;
          var r = t.fragAutoFocus;
          var i = t.fragClass;
          this._initInner(this.config.fragments, {
            fragFocusClass: n,
            fragAutoFocus: r,
            fragClass: i,
            style: this.playerConfig.commonStyle || {}
          });
          if (environmentDetectorUtil.environmentUtils.device === "mobile") {
            this.config.isDragingSeek = false;
            this.isMobile = true;
          }
          this.progressBtn = this.find(".xgplayer-progress-btn");
          this.on(videoPlayerEventConstants.DURATION_CHANGE, function () {
            e.onMouseLeave();
          });
          this.on(videoPlayerEventConstants.TIME_UPDATE, function () {
            e.onTimeupdate();
          });
          this.on(videoPlayerEventConstants.SEEKED, function () {
            e.onTimeupdate();
            e.onCacheUpdate();
          });
          this.on(videoPlayerEventConstants.PROGRESS, function () {
            e.onCacheUpdate();
          });
          this.on(videoPlayerEventConstants.ENDED, function () {
            e.onCacheUpdate(true);
            e.onTimeupdate(true);
            e._state.now = 0;
          });
          this.on(videoPlayerEventConstants.EMPTIED, function () {
            e.onReset();
          });
          this.on(videoPlayerEventConstants.VIDEO_RESIZE, function () {
            e.onVideoResize();
          });
          this.bindDomEvents();
          this.initCustomStyle();
        }
      }
    }, {
      key: "setConfig",
      value: function (e) {
        var t = this;
        var n = null;
        Object.keys(e).forEach(function (r) {
          t.config[r] = e[r];
          if (r === "fragments") {
            n = e[r];
          }
        });
        if (n) {
          this._initInner(n, e);
        }
      }
    }, {
      key: "initCustomStyle",
      value: function () {
        var e = (this.playerConfig || {}).commonStyle.sliderBtnStyle;
        var t = this.progressBtn;
        if (e) {
          if (typeof e == "string") {
            t.style.boxShadow = e;
          } else if (babelRuntimeHelpers_1.typeOfHelper(e) === "object") {
            Object.keys(e).map(function (n) {
              t.style[n] = e[n];
            });
          }
        }
      }
    }, {
      key: "triggerCallbacks",
      value: function (e, t, n) {
        if (this.__dragCallBacks.length > 0) {
          this.__dragCallBacks.map(function (r) {
            if (r && r.handler && r.type === e) {
              try {
                r.handler(t, n);
              } catch (e) {}
            }
          });
        }
      }
    }, {
      key: "addCallBack",
      value: function (e, t) {
        if (t && typeof t == "function") {
          this.__dragCallBacks.push({
            type: e,
            handler: t
          });
        }
      }
    }, {
      key: "removeCallBack",
      value: function (e, t) {
        var n = this.__dragCallBacks;
        var r = -1;
        n.map(function (n, i) {
          if (n && n.type === e && n.handler === t) {
            r = i;
          }
        });
        if (r > -1) {
          n.splice(r, 1);
        }
      }
    }, {
      key: "unlock",
      value: function () {
        var e = this.player;
        var t = this.pos;
        t.isEnter = false;
        if (!e.isMini) {
          this.unbind("mousemove", this.onMoveOnly);
          if (t.isDown) {
            this.unbind("mouseleave", this.onMouseLeave);
            return;
          }
          this.blur();
        }
      }
    }, {
      key: "bindDomEvents",
      value: function () {
        var e = this.player;
        var t = e.controls;
        var n = e.config;
        this._mouseDownHandlerHook = this.hook("dragstart", this._mouseDownHandler);
        this._mouseUpHandlerHook = this.hook("dragend", this._mouseUpHandler);
        this._mouseMoveHandlerHook = this.hook("drag", this._mouseMoveHandler);
        if (this.domEventType === "touch" || this.domEventType === "compatible") {
          this.root.addEventListener("touchstart", this.onMouseDown);
          if (t) {
            if (t.root) {
              t.root.addEventListener("touchmove", playerUtilityHelpers.domUtils.stopPropagation);
            }
            if (t.center) {
              t.center.addEventListener("touchend", playerUtilityHelpers.domUtils.stopPropagation);
            }
          }
        }
        if (this.domEventType === "mouse" || this.domEventType === "compatible") {
          this.bind("mousedown", this.onMouseDown);
          if (n.isMobileSimulateMode !== "mobile") {
            this.bind("mouseenter", this.onMouseEnter);
          }
          this.bind("mouseover", this.onMouseOver);
          this.bind("mouseout", this.onMouseOut);
          this.player.root.addEventListener("click", this.onBodyClick, true);
        }
      }
    }, {
      key: "focus",
      value: function () {
        this.player.controls.pauseAutoHide();
        playerUtilityHelpers.domUtils.addClass(this.root, "active");
      }
    }, {
      key: "blur",
      value: function () {
        if (!this._disableBlur) {
          this.player.controls.recoverAutoHide();
          playerUtilityHelpers.domUtils.removeClass(this.root, "active");
        }
      }
    }, {
      key: "disableBlur",
      value: function () {
        this._disableBlur = true;
      }
    }, {
      key: "enableBlur",
      value: function () {
        this._disableBlur = false;
      }
    }, {
      key: "updateWidth",
      value: function (e, t, n) {
        var r = this.config;
        var i = this.player;
        if (!r.isCloseClickSeek || n !== 0) {
          var o = e >= i.duration ? i.duration - r.endedDiff : Number(e).toFixed(1);
          this.updatePercent(t);
          this.updateTime(e);
          if (n !== 1 || r.isDragingSeek && i.config.mediaType !== "audio") {
            this._state.now = o;
            this._state.direc = o > i.currentTime ? 0 : 1;
            i.seek(o);
          }
        }
      }
    }, {
      key: "computeTime",
      value: function (e, t) {
        var n;
        var r;
        var i = this.player;
        var o = this.root.getBoundingClientRect();
        var a = o.width;
        var s = o.height;
        var c = o.top;
        var u = o.left;
        if (i.rotateDeg === 90) {
          n = s;
          r = c;
        } else {
          n = a;
          r = u;
        }
        var l = t - r;
        var f = (l = l > n ? n : l < 0 ? 0 : l) / n;
        var h = parseInt((f = f < 0 ? 0 : f > 1 ? 1 : f) * this.duration * 1000, 10) / 1000;
        return {
          percent: f,
          currentTime: h,
          offset: l,
          width: n,
          left: r,
          e
        };
      }
    }, {
      key: "updateTime",
      value: function (e) {
        var t = this.player;
        var n = this.duration;
        if (e > n) {
          e = n;
        } else if (e < 0) {
          e = 0;
        }
        var r = t.plugins.time;
        if (r) {
          r.updateTime(e);
        }
      }
    }, {
      key: "resetSeekState",
      value: function () {
        this.isProgressMoving = false;
        var e = this.player.plugins.time;
        if (e) {
          e.resetActive();
        }
      }
    }, {
      key: "updatePercent",
      value: function (e, t) {
        this.isProgressMoving = true;
        if (!this.config.disable) {
          e = e > 1 ? 1 : e < 0 ? 0 : e;
          this.progressBtn.style.left = `${e * 100}%`;
          this.innerList.update({
            played: e * this.duration
          }, this.duration);
          var n = this.player.plugins.miniprogress;
          if (n) {
            n.update({
              played: e * this.duration
            }, this.duration);
          }
        }
      }
    }, {
      key: "onTimeupdate",
      value: function (e) {
        var t = this.player;
        var n = this._state;
        var r = this.duration;
        if (!t.isSeeking && !this.isProgressMoving) {
          if (n.now > -1) {
            var o = parseInt(n.now * 1000, 10) - parseInt(t.currentTime * 1000, 10);
            if (n.direc === 0 && o > 300 || n.direc === 1 && o > -300) {
              n.now = -1;
              return;
            }
            n.now = -1;
          }
          var a = this.timeOffset + t.currentTime;
          a = playerUtilityHelpers.domUtils.adjustTimeByDuration(a, r, e);
          this.innerList.update({
            played: a
          }, r);
          this.progressBtn.style.left = `${a / r * 100}%`;
          var s = this.player.plugins.miniprogress;
          if (s) {
            s.update({
              played: a
            }, r);
          }
        }
      }
    }, {
      key: "onCacheUpdate",
      value: function (e) {
        var t = this.player;
        var n = this.duration;
        if (t) {
          var r = t.bufferedPoint.end;
          r = playerUtilityHelpers.domUtils.adjustTimeByDuration(r, n, e);
          this.innerList.update({
            cached: r
          }, n);
          var o = this.player.plugins.miniprogress;
          if (o) {
            o.update({
              cached: r
            }, n);
          }
        }
      }
    }, {
      key: "onReset",
      value: function () {
        this.innerList.update({
          played: 0,
          cached: 0
        }, 0);
        var e = this.player.plugins.miniprogress;
        if (e) {
          e.update({
            cached: 0,
            played: 0
          }, 0);
        }
      }
    }, {
      key: "destroy",
      value: function () {
        var e = this.player;
        var t = e.controls;
        this.thumbnailPlugin = null;
        this.innerList.destroy();
        this.innerList = null;
        var n = this.domEventType;
        if (n === "touch" || n === "compatible") {
          this.root.removeEventListener("touchstart", this.onMouseDown);
          this.root.removeEventListener("touchmove", this.onMouseMove);
          this.root.removeEventListener("touchend", this.onMouseUp);
          if (t) {
            if (t.root) {
              t.root.removeEventListener("touchmove", playerUtilityHelpers.domUtils.stopPropagation);
            }
            if (t.center) {
              t.center.removeEventListener("touchend", playerUtilityHelpers.domUtils.stopPropagation);
            }
          }
        }
        if (n === "mouse" || n === "compatible") {
          this.unbind("mousedown", this.onMouseDown);
          this.unbind("mouseenter", this.onMouseEnter);
          this.unbind("mousemove", this.onMoveOnly);
          this.unbind("mouseleave", this.onMouseLeave);
          document.removeEventListener("mousemove", this.onMouseMove, false);
          document.removeEventListener("mouseup", this.onMouseUp, false);
          e.root.removeEventListener("click", this.onBodyClick, true);
        }
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable && !this.playerConfig.isLive) {
          var e = this.player.controls ? this.player.controls.config.mode : "";
          return `
    <xg-progress class="xgplayer-progress ${e === "bottom" ? "xgplayer-progress-bottom" : ""}">
      <xg-outer class="xgplayer-progress-outer">
        <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>
      </xg-outer>
    </xg-progress>
    `;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "progress";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_CENTER,
          index: 0,
          disable: false,
          isDragingSeek: true,
          closeMoveSeek: false,
          isPauseMoving: false,
          isCloseClickSeek: false,
          fragments: [{
            percent: 1
          }],
          fragFocusClass: l.POINT,
          fragClass: "",
          fragAutoFocus: false,
          miniMoveStep: 5,
          miniStartStep: 2,
          onMoveStart: function () {},
          onMoveEnd: function () {},
          endedDiff: 0.2
        };
      }
    }, {
      key: "FRAGMENT_FOCUS_CLASS",
      get: function () {
        return l;
      }
    }]);
    return n;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    ProgressPlugin: function () {
      return f;
    }
  });
}