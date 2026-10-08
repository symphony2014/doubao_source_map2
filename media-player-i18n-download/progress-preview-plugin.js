// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ProgressPreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64826.239d1d5e.js
         * chunkId: 64826
         * moduleId: 405182
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var playerUtilityHelpers = require("player-utility-helpers") /*id: 823968*/;
  var environmentDetectorUtil = require("environment-detector-util") /*id: 257644*/;
  var videoPlayerEventConstants = require("video-player-event-constants") /*id: 846243*/;
  var playerUiPluginBase = require("player-ui-plugin-base") /*id: 240976*/;
  require("event-delegation-helper") /*id: 359139*/;
  var l = {
    time: 0,
    text: "",
    id: 1,
    duration: 1,
    color: "#fff",
    style: {},
    width: 6,
    height: 6
  };
  function c(t) {
    Object.keys(l).map(function (e) {
      if (t[e] === undefined) {
        t[e] = l[e];
      }
    });
  }
  var u = {
    _updateDotDom: function (t, e) {
      if (e) {
        var i = this.calcuPosition(t.time, t.duration);
        var n = t.style || {};
        n.left = `${i.left}%`;
        n.width = `${i.width}%`;
        e.setAttribute("data-text", t.text);
        e.setAttribute("data-time", t.time);
        if (i.isMini) {
          playerUtilityHelpers.domUtils.addClass(e, "mini");
        } else {
          playerUtilityHelpers.domUtils.removeClass(e, "mini");
        }
        Object.keys(n).map(function (t) {
          e.style[t] = n[t];
        });
      }
    },
    initDots: function () {
      var t = this;
      this._ispots.map(function (e) {
        t.createDot(e, false);
      });
      this.ispotsInit = true;
    },
    createDot: function (t) {
      var e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      var i = this.player.plugins.progress;
      if (i) {
        if (e) {
          c(t);
          this._ispots.push(t);
        }
        if (this.ispotsInit || !e) {
          var n = this.calcuPosition(t.time, t.duration);
          var s = t.style || {};
          s.left = `${n.left}%`;
          s.width = `${n.width}%`;
          var a = `xgspot_${t.id} xgplayer-spot`;
          if (n.isMini) {
            a += " mini";
          }
          var r = playerUtilityHelpers.domUtils.createDom("xg-spot", t.template || "", {
            "data-text": t.text,
            "data-time": t.time,
            "data-id": t.id
          }, a);
          Object.keys(s).map(function (t) {
            r.style[t] = s[t];
          });
          if (i.outer) {
            i.outer.appendChild(r);
          }
        }
      }
    },
    findDot: function (t) {
      if (this.player.plugins.progress) {
        var e = this._ispots.filter(function (e, i) {
          return e.id === t;
        });
        if (e.length > 0) {
          return e[0];
        } else {
          return null;
        }
      }
    },
    updateDot: function (t, e = false) {
      var i = this.player.plugins.progress;
      if (i) {
        var n = this.findDot(t.id);
        if (n) {
          Object.keys(t).map(function (e) {
            n[e] = t[e];
          });
        }
        if (this.ispotsInit) {
          var o = i.find(`xg-spot[data-id="${t.id}"]`);
          if (o) {
            this._updateDotDom(t, o);
            if (e) {
              this.showDot(t.id);
            }
          }
        }
      }
    },
    deleteDot: function (t) {
      var e = this._ispots;
      var i = this.player.plugins.progress;
      if (i) {
        var n = [];
        var o = 0;
        for (; o < e.length; o++) {
          if (e[o].id === t) {
            n.push(o);
          }
        }
        var s = n.length;
        var a = s - 1;
        for (; a >= 0; a--) {
          e.splice(n[a], 1);
          if (this.ispotsInit) {
            var r = i.find(`xg-spot[data-id="${t}"]`);
            if (r) {
              r.parentElement.removeChild(r);
            }
          }
        }
      }
    },
    deleteAllDots: function () {
      var t = this.player.plugins.progress;
      if (t) {
        if (!this.ispotsInit) {
          this._ispots = [];
          return;
        }
        var e = t.root.getElementsByTagName("xg-spot");
        var i = e.length - 1;
        for (; i >= 0; i--) {
          t.outer.removeChild(e[i]);
        }
        this._ispots = [];
      }
    },
    updateAllDots: function () {
      var t = this;
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var i = this.player.plugins.progress;
      if (i) {
        if (!this.ispotsInit) {
          this._ispots = e;
          return;
        }
        this._ispots = [];
        var n = i.root.getElementsByTagName("xg-spot");
        var o = n.length;
        if (o > e.length) {
          for (var s = o - 1; s > e.length - 1; s--) {
            i.outer.removeChild(n[s]);
          }
        }
        e.forEach(function (e, i) {
          if (i < o) {
            n[i].setAttribute("data-id", `${e.id}`);
            t._ispots.push(e);
            t.updateDot(e);
          } else {
            t.createDot(e);
          }
        });
      }
    },
    updateDuration: function () {
      var t = this;
      var e = this.player.plugins.progress;
      if (e) {
        this._ispots.forEach(function (i) {
          var n = e.find(`xg-spot[data-id="${i.id}"]`);
          t._updateDotDom(i, n);
        });
      }
    },
    getAllDotsDom: function () {
      var t = this.player.plugins.progress;
      if (t) {
        return t.root.getElementsByTagName("xg-spot");
      } else {
        return [];
      }
    },
    getDotDom: function (t) {
      var e = this.player.plugins.progress;
      if (e) {
        return e.find(`xg-spot[data-id="${t}"]`);
      }
    }
  };
  var h = {
    dragmove: "onProgressMove",
    dragstart: "onProgressDragStart",
    dragend: "onProgressDragEnd",
    click: "onProgressClick",
    mouseover: "onProgressMouseOver",
    mouseenter: "onProgressMove"
  };
  var d = function (t) {
    babelRuntimeHelpers_1.inherits(i, t);
    var e = babelRuntimeHelpers_1.constructHelper(i);
    function i(t) {
      var s;
      babelRuntimeHelpers_1.classCallCheck(this, i);
      s = e.call(this, t);
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onMousemove", function (t) {
        if (!s.config.disable) {
          if (playerUtilityHelpers.domUtils.hasClass(t.target, "xg-spot-content") && s.config.isHideThumbnailHover) {
            s.player.plugins.progress.onMouseLeave(t);
            return;
          }
          if (s._state.f || playerUtilityHelpers.domUtils.hasClass(t.target, "xg-spot-content")) {
            playerUtilityHelpers.domUtils.event(t);
            t.stopPropagation();
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onMousedown", function (t) {
        if (!s.config.disable && (s._state.f || playerUtilityHelpers.domUtils.hasClass(t.target, "xg-spot-content"))) {
          playerUtilityHelpers.domUtils.event(t);
          t.stopPropagation();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onMouseup", function (t) {
        if (s.isDrag) {
          var e = s.player.plugins.progress;
          if (e && e.pos) {
            e.onMouseUp(t);
            if (!e.pos.isEnter) {
              e.onMouseLeave(t);
            }
          }
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onDotMouseLeave", function (t) {
        if (!s.config.disable) {
          s._curDot.removeEventListener("mouseleave", s.onDotMouseLeave);
          s.blurDot(t.target);
          s._curDot = null;
          var e = s.player.plugins.progress;
          if (e) {
            e.enableBlur();
          }
          s.show();
        }
      });
      babelRuntimeHelpers_1.defineProperty(babelRuntimeHelpers_1.assertThisInit(s), "onProgressMouseOver", function (t, e) {
        if (!s.config.disable && playerUtilityHelpers.domUtils.hasClass(e.target, "xgplayer-spot") && !s._curDot) {
          s._curDot = e.target;
          s.focusDot(e.target);
          if (s._curDot.children.length > 0) {
            s.hide();
          }
          var i = s.player.plugins.progress;
          if (i) {
            i.disableBlur();
          }
          s._curDot.addEventListener("mouseleave", s.onDotMouseLeave);
        }
      });
      s._ispots = [];
      s.videoPreview = null;
      s.videothumbnail = null;
      s.thumbnail = null;
      s.timeStr = "";
      s._state = {
        now: 0,
        f: false
      };
      return s;
    }
    babelRuntimeHelpers_1.createClass(i, [{
      key: "beforeCreate",
      value: function (t) {
        var e = t.player.plugins.progress;
        if (e) {
          t.root = e.root;
        }
      }
    }, {
      key: "afterCreate",
      value: function () {
        var t;
        var e;
        var i;
        var n;
        var s = this;
        this._curDot = null;
        this.handlerSpotClick = this.hook("spotClick", function (t, e) {
          if (e.currentTime) {
            s.player.seek(e.currentTime);
          }
        });
        this.transformTimeHook = this.hook("transformTime", function (t) {
          s.setTimeContent(playerUtilityHelpers.domUtils.format(t));
        });
        t = this;
        e = t.config;
        i = t.player;
        Object.keys(u).map(function (e) {
          t[e] = u[e].bind(t);
        });
        n = i.config.progressDot || e.ispots || [];
        t._ispots = n.map(function (t) {
          c(t);
          return t;
        });
        t.ispotsInit = false;
        t.on(videoPlayerEventConstants.DURATION_CHANGE, function () {
          if (t.ispotsInit) {
            t.updateDuration();
          } else {
            t.initDots();
          }
        });
        this.on(videoPlayerEventConstants.DURATION_CHANGE, function () {
          s.show();
        });
        if (this.config.disable) {
          this.disable();
        }
        this.extTextRoot = this.find(".xg-spot-ext-text");
      }
    }, {
      key: "setConfig",
      value: function (t) {
        var e = this;
        if (t) {
          Object.keys(t).map(function (i) {
            e.config[i] = t[i];
          });
        }
      }
    }, {
      key: "onPluginsReady",
      value: function () {
        if (this.player.plugins.progress) {
          this.previewLine = this.find(".xg-spot-line");
          this.timePoint = this.find(".xgplayer-progress-point");
          this.timeText = this.find(".xg-spot-time");
          this.tipText = this.find(".spot-inner-text");
          this._hasThumnail = false;
          this.registerThumbnail();
          this.bindEvents();
        }
      }
    }, {
      key: "bindEvents",
      value: function () {
        var t = this;
        var e = this.player.plugins.progress;
        if (e && (Object.keys(h).map(function (i) {
          t[h[i]] = t[h[i]].bind(t);
          e.addCallBack(i, t[h[i]]);
        }), environmentDetectorUtil.environmentUtils.device !== "mobile")) {
          this.bind(".xg-spot-info", "mousemove", this.onMousemove);
          this.bind(".xg-spot-info", "mousedown", this.onMousedown);
          this.bind(".xg-spot-info", "mouseup", this.onMouseup);
          var i = this.hook("previewClick", function () {});
          this.handlerPreviewClick = function (e) {
            e.stopPropagation();
            i(parseInt(t._state.now * 1000, 10) / 1000, e);
          };
          this.bind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
        }
      }
    }, {
      key: "onProgressMove",
      value: function (t, e) {
        if (!this.config.disable && this.player.duration) {
          this.updatePosition(t.offset, t.width, t.currentTime, t.e);
        }
      }
    }, {
      key: "onProgressDragStart",
      value: function (t) {
        if (!this.config.disable && this.player.duration) {
          this.isDrag = true;
          if (this.videoPreview) {
            playerUtilityHelpers.domUtils.addClass(this.videoPreview, "show");
          }
        }
      }
    }, {
      key: "onProgressDragEnd",
      value: function (t) {
        if (!this.config.disable && this.player.duration) {
          this.isDrag = false;
          if (this.videoPreview) {
            playerUtilityHelpers.domUtils.removeClass(this.videoPreview, "show");
          }
        }
      }
    }, {
      key: "onProgressClick",
      value: function (t, e) {
        if (!this.config.disable && playerUtilityHelpers.domUtils.hasClass(e.target, "xgplayer-spot")) {
          e.stopPropagation();
          e.preventDefault();
          ["time", "id", "text"].map(function (i) {
            t[i] = e.target.getAttribute(`data-${i}`);
          });
          t.time &&= Number(t.time);
          this.handlerSpotClick(e, t);
        }
      }
    }, {
      key: "updateLinePos",
      value: function (t, e) {
        var i;
        var n = this.root;
        var o = this.previewLine;
        var s = this.player;
        var a = this.config;
        var r = s.controls.mode === "flex";
        var l = n.getBoundingClientRect().width;
        if (l) {
          var c = t - (l = this._hasThumnail && l < a.width ? a.width : l) / 2;
          if (c < 0 && !r) {
            c = 0;
            i = t - l / 2;
          } else if (c > e - l && !r) {
            i = c - (e - l);
            c = e - l;
          } else {
            i = 0;
          }
          if (i !== undefined) {
            o.style.transform = `translateX(${i.toFixed(2)}px)`;
          }
          n.style.transform = `translateX(${c.toFixed(2)}px) translateZ(0)`;
        }
      }
    }, {
      key: "updateTimeText",
      value: function (t) {
        var e = this.timeText;
        var i = this.timePoint;
        e.innerHTML = t;
        if (!this.thumbnail) {
          i.innerHTML = t;
        }
      }
    }, {
      key: "updatePosition",
      value: function (t, e, i, n) {
        var s = this.root;
        var a = this.config;
        var r = this._state;
        if (s) {
          r.now = i;
          this.transformTimeHook(i);
          var l = this.timeStr;
          if (n && n.target && playerUtilityHelpers.domUtils.hasClass(n.target, "xgplayer-spot")) {
            this.showTips(n.target.getAttribute("data-text"), false, l);
            this.focusDot(n.target);
            r.f = true;
            if (a.isFocusDots && r.f) {
              r.now = parseInt(n.target.getAttribute("data-time"), 10);
            }
          } else if (a.defaultText) {
            r.f = false;
            this.showTips(a.defaultText, true, l);
          } else {
            r.f = false;
            this.hideTips("");
          }
          this.updateTimeText(l);
          this.updateThumbnails(r.now);
          this.updateLinePos(t, e);
        }
      }
    }, {
      key: "setTimeContent",
      value: function (t) {
        this.timeStr = t;
      }
    }, {
      key: "updateThumbnails",
      value: function (t) {
        var e = this.player;
        var i = this.videoPreview;
        var n = this.config;
        var o = e.plugins.thumbnail;
        if (o && o.usable) {
          if (this.thumbnail) {
            o.update(this.thumbnail, t, n.width, n.height);
          }
          var s = i && i.getBoundingClientRect();
          if (this.videothumbnail) {
            o.update(this.videothumbnail, t, s.width, s.height);
          }
        }
      }
    }, {
      key: "registerThumbnail",
      value: function (t = {}) {
        if (environmentDetectorUtil.environmentUtils.device !== "mobile") {
          var e = this.player;
          var i = this.config;
          var n = e.getPlugin("thumbnail");
          if (n) {
            n.setConfig(t);
          }
          if (n && n.usable && i.isShowThumbnail) {
            playerUtilityHelpers.domUtils.removeClass(this.root, "short-line no-thumbnail");
          } else {
            playerUtilityHelpers.domUtils.addClass(this.root, "short-line no-thumbnail");
            return;
          }
          if (i.mode === "short") {
            playerUtilityHelpers.domUtils.addClass(this.root, "short-line");
          }
          this._hasThumnail = true;
          var a = this.find(".xg-spot-thumbnail");
          this.thumbnail = n.createThumbnail(a, "progress-thumbnail");
          if (i.isShowCoverPreview) {
            this.videoPreview = playerUtilityHelpers.domUtils.createDom("xg-video-preview", "", {}, "xgvideo-preview");
            e.root.appendChild(this.videoPreview);
            this.videothumbnail = n.createThumbnail(this.videoPreview, "xgvideo-thumbnail");
          }
          this.updateThumbnails(0);
        }
      }
    }, {
      key: "calcuPosition",
      value: function (t, e) {
        var i = this.player.plugins.progress;
        var n = this.player;
        var o = i.root.getBoundingClientRect().width;
        var s = n.duration / o * 6;
        if (t + e > n.duration) {
          e = n.duration - t;
        }
        n.duration;
        n.duration;
        return {
          left: t / n.duration * 100,
          width: e / n.duration * 100,
          isMini: e < s
        };
      }
    }, {
      key: "showDot",
      value: function (t) {
        var e = this.findDot(t);
        if (e) {
          var i = this.root.getBoundingClientRect().width;
          var n = e.time / this.player.duration * i;
          this.updatePosition(n, i, e.time);
        }
      }
    }, {
      key: "focusDot",
      value: function (t, e) {
        if (t) {
          e ||= t.getAttribute("data-id");
          playerUtilityHelpers.domUtils.addClass(t, "active");
          this._activeDotId = e;
        }
      }
    }, {
      key: "blurDot",
      value: function (t) {
        if (!t) {
          var e = this._activeDotId;
          t = this.getDotDom(e);
        }
        if (t) {
          playerUtilityHelpers.domUtils.removeClass(t, "active");
          this._activeDotId = null;
        }
      }
    }, {
      key: "showTips",
      value: function (t, e, i = "") {
        playerUtilityHelpers.domUtils.addClass(this.root, "no-timepoint");
        if (t) {
          playerUtilityHelpers.domUtils.addClass(this.find(".xg-spot-content"), "show-text");
          if (e && this.config.mode === "production") {
            playerUtilityHelpers.domUtils.addClass(this.root, "product");
            this.tipText.textContent = t;
          } else {
            playerUtilityHelpers.domUtils.removeClass(this.root, "product");
            this.tipText.textContent = this._hasThumnail ? t : `${i} ${t}`;
          }
        }
      }
    }, {
      key: "hideTips",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "no-timepoint");
        this.tipText.textContent = "";
        playerUtilityHelpers.domUtils.removeClass(this.find(".xg-spot-content"), "show-text");
        playerUtilityHelpers.domUtils.removeClass(this.root, "product");
      }
    }, {
      key: "hide",
      value: function () {
        playerUtilityHelpers.domUtils.addClass(this.root, "hide");
      }
    }, {
      key: "show",
      value: function () {
        playerUtilityHelpers.domUtils.removeClass(this.root, "hide");
      }
    }, {
      key: "enable",
      value: function () {
        var t = this.config;
        var e = this.playerConfig;
        this.config.disable = false;
        this.show();
        if (!this.thumbnail && t.isShowThumbnail) {
          this.registerThumbnail(e.thumbnail || {});
        }
      }
    }, {
      key: "disable",
      value: function () {
        this.config.disable = true;
        this.hide();
      }
    }, {
      key: "destroy",
      value: function () {
        var t = this;
        var e = this.player.plugins.progress;
        if (e) {
          Object.keys(h).map(function (i) {
            e.removeCallBack(i, t[h[i]]);
          });
        }
        this.videothumbnail = null;
        this.thumbnail = null;
        if (this.videoPreview) {
          this.player.root.removeChild(this.videoPreview);
        }
        this.unbind(".xg-spot-info", "mousemove", this.onMousemove);
        this.unbind(".xg-spot-info", "mousedown", this.onMousedown);
        this.unbind(".xg-spot-info", "mouseup", this.onMouseup);
        this.unbind(".xg-spot-content", "mouseup", this.handlerPreviewClick);
      }
    }, {
      key: "render",
      value: function () {
        if (environmentDetectorUtil.environmentUtils.device === "mobile" || this.playerConfig.isMobileSimulateMode === "mobile") {
          return "";
        } else {
          return `<div class="xg-spot-info hide ${this.config.mode === "short" ? "short-line" : ""}">
      <div class="xg-spot-content">
        <div class="xg-spot-thumbnail">
          <span class="xg-spot-time"></span>
        </div>
        <div class="xg-spot-text"><span class="spot-inner-text"></span></div>
      </div>
      <div class="xgplayer-progress-point">00:00</div>
      <div class="xg-spot-ext-text"></div>
      <div class="xg-spot-line"></div>
    </div>`;
        }
      }
    }], [{
      key: "pluginName",
      get: function () {
        return "progresspreview";
      }
    }, {
      key: "defaultConfig",
      get: function () {
        return {
          index: 1,
          miniWidth: 6,
          ispots: [],
          defaultText: "",
          isFocusDots: true,
          isHideThumbnailHover: true,
          isShowThumbnail: true,
          isShowCoverPreview: false,
          mode: "",
          disable: false,
          width: 160,
          height: 90
        };
      }
    }]);
    return i;
  }(playerUiPluginBase.PlayerUiPlugin);
  require.d(exports, {
    ProgressPreview: function () {
      return d;
    }
  });
}