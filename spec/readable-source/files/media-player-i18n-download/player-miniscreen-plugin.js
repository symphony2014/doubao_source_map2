// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'MiniscreenPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 351955
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  var i18nTipRenderer = require("i18n-tip-renderer") /*id: 438742*/;
  var playButtonSvgIcon = require("play-button-svg-icon") /*id: 689622*/;
  var pauseIconSvgFactory = require("pause-icon-svg-factory") /*id: 382284*/;
  var u = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i() {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      return e.apply(this, arguments);
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "afterCreate",
      value: function () {
        this.getMini = this.getMini.bind(this);
        this.exitMini = this.exitMini.bind(this);
        this.bind("click", this.getMini);
      }
    }, {
      key: "getMini",
      value: function () {
        if (this.config.onClick) {
          this.config.onClick();
        }
      }
    }, {
      key: "exitMini",
      value: function () {
        if (this.config.onClick) {
          this.config.onClick();
        }
      }
    }, {
      key: "destroy",
      value: function () {
        this.unbind(["click", "touchend"], this.getMini);
      }
    }, {
      key: "render",
      value: function () {
        var t = "MINISCREEN";
        return `
      <xg-icon class="xgplayer-miniicon">
      <div class="xgplayer-icon btn-text"><span class="icon-text" lang-key="${this.i18nKeys[t]}">${this.i18n[t]}</span></div>
      </xg-icon>`;
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "miniscreenIcon";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          position: playerUiPluginBase.playerPositions.CONTROLS_RIGHT,
          index: 10
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  function d(t) {
    var e = parseFloat(t);
    return t.indexOf("%") === -1 && !Number.isNaN(e) && e;
  }
  var f = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  var p = f.length;
  function g(t) {
    if (typeof t == "string") {
      t = document.querySelector(t);
    }
    if (t && babelRuntimeHelpers_1.typeOfHelper(t) === "object" && t.nodeType) {
      var e;
      e = t;
      var i = window.getComputedStyle(e);
      if (i.display === "none") {
        return function () {
          var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          };
          var e = 0;
          for (; e < p; e++) {
            t[f[e]] = 0;
          }
          return t;
        }();
      }
      var o = {
        width: t.offsetWidth,
        height: t.offsetHeight
      };
      var s = o.isBorderBox = i.boxSizing === "border-box";
      var a = 0;
      for (; a < p; a++) {
        var r = f[a];
        var l = parseFloat(i[r]);
        o[r] = Number.isNaN(l) ? 0 : l;
      }
      var c = o.paddingLeft + o.paddingRight;
      var u = o.paddingTop + o.paddingBottom;
      var h = o.marginLeft + o.marginRight;
      var g = o.marginTop + o.marginBottom;
      var v = o.borderLeftWidth + o.borderRightWidth;
      var m = o.borderTopWidth + o.borderBottomWidth;
      var y = d(i.width);
      if (y !== false) {
        o.width = y + (s ? 0 : c + v);
      }
      var k = d(i.height);
      if (k !== false) {
        o.height = k + (s ? 0 : u + m);
      }
      o.innerWidth = o.width - (c + v);
      o.innerHeight = o.height - (u + m);
      o.outerWidth = o.width + h;
      o.outerHeight = o.height + g;
      return o;
    }
  }
  function v(t, e) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      if (n.identifier === e) {
        return n;
      }
    }
  }
  var m = {
    START: "dragStart",
    MOVE: "dragMove",
    ENDED: "dragEnded"
  };
  var y = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"]
  };
  var k = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var o;
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      babelRuntimeHelpers_1.classCallCheck(this, i);
      (o = e.call(this)).isEnabled = true;
      o.isDragging = false;
      o.isDown = false;
      o.position = {};
      o.downPoint = {};
      o.dragPoint = {
        x: 0,
        y: 0
      };
      o.startPos = {
        x: 0,
        y: 0
      };
      o._root = t instanceof Element ? t : document.querySelector(t);
      o._handlerDom = s.handle instanceof Element ? s.handle : document.querySelector(s.handle);
      if (o._root && o._handlerDom) {
        o._bindStartEvent();
        return o;
      } else {
        return babelRuntimeHelpers_1.constructorReturn(o);
      }
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "_bindStartEvent",
      value: function () {
        var t = this;
        if ("ontouchstart" in window) {
          this._startKey = "touchstart";
        } else {
          this._startKey = "mousedown";
        }
        this[`on${this._startKey}`] = this[`on${this._startKey}`].bind(this);
        this._handlerDom.addEventListener(this._startKey, this[`on${this._startKey}`]);
        y[this._startKey].map(function (e) {
          t[`on${e}`] = t[`on${e}`].bind(t);
        });
      }
    }, {
      key: "_unbindStartEvent",
      value: function () {
        this._handlerDom.removeEventListener(this._startKey, this[`on${this._startKey}`]);
      }
    }, {
      key: "_bindPostStartEvents",
      value: function (t) {
        var e = this;
        if (t) {
          var i = y[this._startKey];
          i.map(function (t) {
            window.addEventListener(t, e[`on${t}`]);
          });
          this._boundPointerEvents = i;
        }
      }
    }, {
      key: "_unbindPostStartEvents",
      value: function () {
        var t = this;
        if (this._boundPointerEvents) {
          this._boundPointerEvents.map(function (e) {
            window.removeEventListener(e, t[`on${e}`]);
          });
          delete this._boundPointerEvents;
        }
      }
    }, {
      key: "enable",
      value: function () {
        this.isEnabled = true;
      }
    }, {
      key: "disable",
      value: function () {
        this.isEnabled = false;
        if (this.isDragging) {
          this.onUp();
        }
      }
    }, {
      key: "onDocUp",
      value: function (t) {
        this.onUp();
      }
    }, {
      key: "animate",
      value: function () {
        var t = this;
        if (this.isDragging) {
          this.positionDrag();
          window.requestAnimationFrame(function () {
            t.animate();
          });
        }
      }
    }, {
      key: "positionDrag",
      value: function () {
        var t = `translate3d(${this.dragPoint.x}px, ${this.dragPoint.y}px, 0)`;
        this._root.style.transform = t;
        this._root.style.webKitTransform = t;
      }
    }, {
      key: "setLeftTop",
      value: function () {
        this._root.style.left = this.position.x + "px";
        this._root.style.top = this.position.y + "px";
      }
    }, {
      key: "onmousedown",
      value: function (t) {
        this.dragStart(t, t);
      }
    }, {
      key: "onmousemove",
      value: function (t) {
        this.dragMove(t, t);
      }
    }, {
      key: "onmouseup",
      value: function (t) {
        this.dragEnd(t, t);
      }
    }, {
      key: "ontouchstart",
      value: function (t) {
        var e = t.changedTouches[0];
        this.dragStart(t, e);
        this.touchIdentifier = e.pointerId !== undefined ? e.pointerId : e.identifier;
        t.preventDefault();
      }
    }, {
      key: "ontouchmove",
      value: function (t) {
        var e = v(t.changedTouches, this.touchIdentifier);
        if (e) {
          this.dragMove(t, e);
        }
      }
    }, {
      key: "ontouchend",
      value: function (t) {
        var e = v(t.changedTouches, this.touchIdentifier);
        if (e) {
          this.dragEnd(t, e);
        }
        t.preventDefault();
      }
    }, {
      key: "ontouchcancel",
      value: function (t) {
        var e = v(t.changedTouches, this.touchIdentifier);
        if (e) {
          this.dragCancel(t, e);
        }
      }
    }, {
      key: "dragStart",
      value: function (t, e) {
        if (this._root && !this.isDown && this.isEnabled) {
          this.downPoint = e;
          this.dragPoint.x = 0;
          this.dragPoint.y = 0;
          this._getPosition();
          var i = g(this._root);
          this.startPos.x = this.position.x;
          this.startPos.y = this.position.y;
          this.startPos.maxY = window.innerHeight - i.height;
          this.startPos.maxX = window.innerWidth - i.width;
          this.setLeftTop();
          this.isDown = true;
          this._bindPostStartEvents(t);
        }
      }
    }, {
      key: "dragRealStart",
      value: function (t, e) {
        this.isDragging = true;
        this.animate();
        this.emit(m.START, this.startPos);
      }
    }, {
      key: "dragEnd",
      value: function (t, e) {
        if (this._root) {
          this._unbindPostStartEvents();
          if (this.isDragging) {
            this._root.style.transform = "";
            this.setLeftTop();
            this.emit(m.ENDED);
          }
          this.presetInfo();
        }
      }
    }, {
      key: "_dragPointerMove",
      value: function (t, e) {
        var i = {
          x: e.pageX - this.downPoint.pageX,
          y: e.pageY - this.downPoint.pageY
        };
        if (!this.isDragging && this.hasDragStarted(i)) {
          this.dragRealStart(t, e);
        }
        return i;
      }
    }, {
      key: "dragMove",
      value: function (t, e) {
        t = t || window.event;
        if (this.isDown) {
          var i = this.startPos;
          var n = i.x;
          var o = i.y;
          var s = this._dragPointerMove(t, e);
          var a = s.x;
          var r = s.y;
          a = this.checkContain("x", a, n);
          r = this.checkContain("y", r, o);
          this.position.x = n + a;
          this.position.y = o + r;
          this.dragPoint.x = a;
          this.dragPoint.y = r;
          this.emit(m.MOVE, this.position);
        }
      }
    }, {
      key: "dragCancel",
      value: function (t, e) {
        this.dragEnd(t, e);
      }
    }, {
      key: "presetInfo",
      value: function () {
        this.isDragging = false;
        this.startPos = {
          x: 0,
          y: 0
        };
        this.dragPoint = {
          x: 0,
          y: 0
        };
        this.isDown = false;
      }
    }, {
      key: "destroy",
      value: function () {
        this._unbindStartEvent();
        this._unbindPostStartEvents();
        if (this.isDragging) {
          this.dragEnd();
        }
        this.removeAllListeners();
        this._handlerDom = null;
      }
    }, {
      key: "hasDragStarted",
      value: function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }
    }, {
      key: "checkContain",
      value: function (t, e, i) {
        if (e + i < 0) {
          return 0 - i;
        } else if (t === "x" && e + i > this.startPos.maxX) {
          return this.startPos.maxX - i;
        } else if (t === "y" && e + i > this.startPos.maxY) {
          return this.startPos.maxY - i;
        } else {
          return e;
        }
      }
    }, {
      key: "_getPosition",
      value: function () {
        var t = window.getComputedStyle(this._root);
        var e = this._getPositionCoord(t.left, "width");
        var i = this._getPositionCoord(t.top, "height");
        this.position.x = Number.isNaN(e) ? 0 : e;
        this.position.y = Number.isNaN(i) ? 0 : i;
        this._addTransformPosition(t);
      }
    }, {
      key: "_addTransformPosition",
      value: function (t) {
        var e = t.transform;
        if (e.indexOf("matrix") === 0) {
          var i = e.split(",");
          var n = e.indexOf("matrix3d") === 0 ? 12 : 4;
          var o = parseInt(i[n], 10);
          var s = parseInt(i[n + 1], 10);
          this.position.x += o;
          this.position.y += s;
        }
      }
    }, {
      key: "_getPositionCoord",
      value: function (t, e) {
        if (t.indexOf("%") !== -1) {
          var i = g(this._root.parentNode);
          if (i) {
            return parseFloat(t) / 100 * i[e];
          } else {
            return 0;
          }
        }
        return parseInt(t, 10);
      }
    }]);
    return i;
  }(eventEmitterWrapper_1.eventEmitter);
  var C = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      babelRuntimeHelpers_1.classCallCheck(this, i);
      s = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onCancelClick", function (t) {
        s.exitMini();
        s.isClose = true;
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onCenterClick", function (t) {
        var e = babelRuntimeHelpers_1.assertThisInit(s).player;
        if (e.paused) {
          e.play();
        } else {
          e.pause();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onScroll", function (t) {
        if ((!!window.scrollY || window.scrollY === 0) && !(Math.abs(window.scrollY - s.pos.scrollY) < 50)) {
          var e = parseInt(playerUtilityHelpers.domUtils.getCss(s.player.root, "height"));
          e += s.config.scrollTop;
          s.pos.scrollY = window.scrollY;
          if (window.scrollY > e + 5) {
            if (!s.isMini && !s.isClose) {
              s.getMini();
            }
          } else if (window.scrollY <= e) {
            if (s.isMini) {
              s.exitMini();
            }
            s.isClose = false;
          }
        }
      });
      s.isMini = false;
      s.isClose = false;
      var s;
      var a = babelRuntimeHelpers_1.assertThisInit(s).config;
      s.pos = {
        left: a.left < 0 ? window.innerWidth - a.width - 20 : a.left,
        top: a.top < 0 ? window.innerHeight - a.height - 20 : a.top,
        height: s.config.height,
        width: s.config.width,
        scrollY: window.scrollY || 0
      };
      s.lastStyle = null;
      return s;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        if (typeof t.player.config.mini == "boolean") {
          t.config.isShowIcon = t.player.config.mini;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t = this;
        this.initIcons();
        this.on(videoPlayerEventConstants.PAUSE, function () {
          t.setAttr("data-state", "pause");
        });
        this.on(videoPlayerEventConstants.PLAY, function () {
          t.setAttr("data-state", "play");
        });
      }
    }, {
      key: "onPluginsReady",
      value: function () {
        var t = this;
        var e = this.player;
        if (!this.config.disable) {
          if (this.config.isShowIcon) {
            e.controls.registerPlugin(u, {
              config: {
                onClick: function () {
                  t.getMini();
                }
              }
            }, u.pluginName);
          }
          var i = playerUtilityHelpers.domUtils.checkTouchSupport() ? "touchend" : "click";
          this.bind(".mini-cancel-btn", i, this.onCancelClick);
          this.bind(".play-icon", i, this.onCenterClick);
          if (!this.config.disableDrag) {
            this._draggabilly = new k(this.player.root, {
              handle: this.root
            });
          }
          if (this.config.isScrollSwitch) {
            window.addEventListener("scroll", this.onScroll);
          }
        }
      }
    }, {
      key: "registerIcons",
      value: function () {
        return {
          play: {
            icon: playButtonSvgIcon.createPlayButton,
            class: "xg-icon-play"
          },
          pause: {
            icon: pauseIconSvgFactory.createPauseIcon,
            class: "xg-icon-pause"
          }
        };
      }
    }, {
      key: "initIcons",
      value: function () {
        var t = this.icons;
        this.appendChild(".play-icon", t.play);
        this.appendChild(".play-icon", t.pause);
      }
    }, {
      key: "getMini",
      value: function () {
        var t = this;
        if (!this.isMini) {
          var e = this.player;
          var i = this.playerConfig;
          var n = this.config.target || this.player.root;
          this.lastStyle = {};
          playerUtilityHelpers.domUtils.addClass(e.root, "xgplayer-mini");
          ["width", "height", "top", "left"].map(function (e) {
            t.lastStyle[e] = n.style[e];
            n.style[e] = `${t.pos[e]}px`;
          });
          if (i.fluid) {
            n.style["padding-top"] = "";
          }
          this.emit(videoPlayerEventConstants.MINI_STATE_CHANGE, true);
          e.isMini = this.isMini = true;
        }
      }
    }, {
      key: "exitMini",
      value: function () {
        var t = this;
        if (!this.isMini) {
          return false;
        }
        var e = this.player;
        var i = this.playerConfig;
        var n = this.config.target || this.player.root;
        playerUtilityHelpers.domUtils.removeClass(e.root, "xgplayer-mini");
        if (this.lastStyle) {
          Object.keys(this.lastStyle).map(function (e) {
            n.style[e] = t.lastStyle[e];
          });
        }
        this.lastStyle = null;
        if (i.fluid) {
          e.root.style.width = "100%";
          e.root.style.height = "0";
          e.root.style["padding-top"] = `${i.height * 100 / i.width}%`;
        }
        this.emit(videoPlayerEventConstants.MINI_STATE_CHANGE, false);
        this.isMini = e.isMini = false;
      }
    }, {
      key: "destroy",
      value: function () {
        window.removeEventListener("scroll", this.onScroll);
        var t = playerUtilityHelpers.domUtils.checkTouchSupport() ? "touchend" : "click";
        this.unbind(".mini-cancel-btn", t, this.onCancelClick);
        this.unbind(".play-icon", t, this.onCenterClick);
        if (this._draggabilly) {
          this._draggabilly.destroy();
        }
        this._draggabilly = null;
        this.exitMini();
      }
    }, {
      key: "render",
      value: function () {
        if (!this.config.disable) {
          return `
      <xg-mini-layer class="xg-mini-layer">
      <xg-mini-header class="xgplayer-mini-header">
      ${i18nTipRenderer.renderTip(this, "MINI_DRAG", this.playerConfig.isHideTips)}
      </xg-mini-header>
      <div class="mini-cancel-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <path fill="#fff" fill-rule="evenodd" d="M3.99 3.49a1 1 0 0 1 1.414 0L10 8.085l4.596-4.595a1 1 0 1 1 1.414 1.414L11.414 9.5l4.596 4.596a1 1 0 0 1 .084 1.32l-.084.094a1 1 0 0 1-1.414 0L10 10.914 5.404 15.51a1 1 0 0 1-1.414-1.414L8.585 9.5 3.99 4.904a1 1 0 0 1-.084-1.32z"></path>
        </svg>
      </div>
      <div class="play-icon">
      </div>
      </xg-mini-layer>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "miniscreen";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          index: 10,
          disable: false,
          width: 320,
          height: 180,
          left: -1,
          top: -1,
          isShowIcon: false,
          isScrollSwitch: false,
          scrollTop: 0,
          disableDrag: false
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    MiniscreenPlugin: function () {
      return C;
    }
  });
}