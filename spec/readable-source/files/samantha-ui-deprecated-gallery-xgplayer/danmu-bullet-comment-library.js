// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: samantha-ui-deprecated-gallery-xgplayer.821db6b8.js
         * chunkId: 65498
         * moduleId: 97997
         */
module.exports = function (module, exports, require) {
  var e;
  var n;
  window;
  n = function () {
    return function (t) {
      var e = {};
      function n(i) {
        if (e[i]) {
          return e[i].exports;
        }
        var r = e[i] = {
          i: i,
          l: false,
          exports: {}
        };
        t[i].call(r.exports, r, r.exports, n);
        r.l = true;
        return r.exports;
      }
      n.m = t;
      n.c = e;
      n.d = function (t, e, i) {
        if (!n.o(t, e)) {
          Object.defineProperty(t, e, {
            enumerable: true,
            get: i
          });
        }
      };
      n.r = function (t) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
      };
      n.t = function (t, e) {
        if (e & 1) {
          t = n(t);
        }
        if (e & 8 || e & 4 && typeof t == "object" && t && t.__esModule) {
          return t;
        }
        var i = Object.create(null);
        n.r(i);
        Object.defineProperty(i, "default", {
          enumerable: true,
          value: t
        });
        if (e & 2 && typeof t != "string") {
          for (var r in t) {
            n.d(i, r, function (e) {
              return t[e];
            }.bind(null, r));
          }
        }
        return i;
      };
      n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        n.d(e, "a", e);
        return e;
      };
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
      n.p = "";
      return n(n.s = 5);
    }([function (t, e, n) {
      "use strict";

      function i(t, e) {
        if (t.classList) {
          return Array.prototype.some.call(t.classList, function (t) {
            return t === e;
          });
        } else {
          return !!t.className.match(RegExp("(\\s|^)" + e + "(\\s|$)"));
        }
      }
      function r(t, e) {
        if (t.classList) {
          e.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (e) {
            if (e) {
              t.classList.add(e);
            }
          });
        } else if (!i(t, e)) {
          t.className += " " + e;
        }
      }
      function o(t, e) {
        if (t.classList) {
          e.split(/\s+/g).forEach(function (e) {
            t.classList.remove(e);
          });
        } else if (i(t, e)) {
          e.split(/\s+/g).forEach(function (e) {
            var n = RegExp("(\\s|^)" + e + "(\\s|$)");
            t.className = t.className.replace(n, " ");
          });
        }
      }
      function s(t) {
        return Object.prototype.toString.call(t).match(/([^\s.*]+)(?=]$)/g)[0];
      }
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.createDom = function (t = "div", e = "", n = {}, i = "") {
        var r = document.createElement(t);
        r.className = i;
        r.innerHTML = e;
        Object.keys(n).forEach(function (e) {
          var i = n[e];
          if (t === "video" || t === "audio") {
            if (i) {
              r.setAttribute(e, i);
            }
          } else {
            r.setAttribute(e, i);
          }
        });
        return r;
      };
      e.hasClass = i;
      e.addClass = r;
      e.removeClass = o;
      e.toggleClass = function (t, e) {
        e.split(/\s+/g).forEach(function (e) {
          if (i(t, e)) {
            o(t, e);
          } else {
            r(t, e);
          }
        });
      };
      e.findDom = function (t = document) {
        var e = arguments[1];
        var n = undefined;
        try {
          n = t.querySelector(e);
        } catch (i) {
          if (e.startsWith("#")) {
            n = t.getElementById(e.slice(1));
          }
        }
        return n;
      };
      e.deepCopy = function t(e, n) {
        if (s(n) === "Object" && s(e) === "Object") {
          Object.keys(n).forEach(function (i) {
            if (s(n[i]) !== "Object" || n[i] instanceof Node) {
              if (s(n[i]) === "Array") {
                e[i] = s(e[i]) === "Array" ? e[i].concat(n[i]) : n[i];
              } else {
                e[i] = n[i];
              }
            } else if (e[i]) {
              t(e[i], n[i]);
            } else {
              e[i] = n[i];
            }
          });
          return e;
        }
      };
      e.typeOf = s;
      e.copyDom = function (t) {
        if (t && t.nodeType === 1) {
          var e = document.createElement(t.tagName);
          Array.prototype.forEach.call(t.attributes, function (t) {
            e.setAttribute(t.name, t.value);
          });
          if (t.innerHTML) {
            e.innerHTML = t.innerHTML;
          }
          return e;
        }
        return "";
      };
      e.attachEventListener = function (t, e, n, i) {
        if (i) {
          t.on(e, n);
          (function (t, e, n, i) {
            t.once(i, function r() {
              t.off(e, n);
              t.off(i, r);
            });
          })(t, e, n, i);
        } else {
          t.on(e, function i(r) {
            n(r);
            t.off(e, i);
          });
        }
      };
      e.styleUtil = function (t, e, n) {
        var i = t.style;
        try {
          i[e] = n;
        } catch (t) {
          i.setProperty(e, n);
        }
      };
      e.styleCSSText = function (t, e) {
        var n = t.style;
        try {
          n.cssText = e;
        } catch (t) {}
      };
      e.isNumber = function (t) {
        return typeof t == "number" && !Number.isNaN(t);
      };
      e.isFunction = function (t) {
        return typeof t == "function";
      };
      e.throttle = function (t, e) {
        var n = this;
        var i = 0;
        return function () {
          var r = arguments.length;
          var o = Array(r);
          var s = 0;
          for (; s < r; s++) {
            o[s] = arguments[s];
          }
          clearTimeout(i);
          i = setTimeout(function () {
            return t.apply(n, o);
          }, e);
        };
      };
      e.hasOwnProperty = Object.prototype.hasOwnProperty;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = n(4);
      var o = r && r.__esModule ? r : {
        default: r
      };
      var s = function () {
        function t() {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
        }
        i(t, [{
          key: "setLogger",
          value: function (t) {
            this.logger = t instanceof o.default ? t : new o.default((t || "") + ".js");
          }
        }]);
        return t;
      }();
      e.default = s;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      var i = n(19)();
      t.exports = function (t) {
        return t !== i && t !== null;
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = function (t) {
        return t != null;
      };
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = typeof window != "undefined" && window.location.href.indexOf("danmu-debug") > -1;
      var o = function () {
        function t(e) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          this.constructorName = e || "";
        }
        i(t, [{
          key: "info",
          value: function (t) {
            var e;
            var n = arguments.length;
            var i = Array(n > 1 ? n - 1 : 0);
            var o = 1;
            for (; o < n; o++) {
              i[o - 1] = arguments[o];
            }
            if (r) {
              (e = console).log.apply(e, ["[Danmu Log][" + this.constructorName + "]", t].concat(i));
            }
          }
        }]);
        return t;
      }();
      e.default = o;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = n(6);
      var r = i && i.__esModule ? i : {
        default: i
      };
      n(34);
      e.default = r.default;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.DanmuJs = undefined;
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = h(n(7));
      var o = n(26);
      var s = h(n(1));
      var a = h(n(27));
      var l = h(n(32));
      var u = n(33);
      var c = n(0);
      function h(t) {
        if (t && t.__esModule) {
          return t;
        } else {
          return {
            default: t
          };
        }
      }
      function f(t, e) {
        if (!t) {
          throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        if (e && (typeof e == "object" || typeof e == "function")) {
          return e;
        } else {
          return t;
        }
      }
      var d = e.DanmuJs = function (t) {
        function e(t) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          var n = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          n.setLogger("danmu");
          if (n.logger) {
            n.logger.info("danmu.js version: " + o.version);
          }
          var i = n.config = {
            overlap: false,
            area: {
              start: 0,
              end: 1,
              lines: undefined
            },
            hooks: undefined,
            live: false,
            comments: [],
            direction: "r2l",
            needResizeObserver: false,
            dropStaleComments: false,
            channelSize: undefined,
            maxCommentsLength: undefined,
            bulletOffset: undefined,
            interval: 2000,
            highScorePriority: true,
            chaseEffect: true
          };
          c.deepCopy(i, t);
          r.default(n);
          n.globalHooks = {};
          if (i.hooks) {
            n.hooks(i.hooks);
          }
          n.hideArr = [];
          n.recycler = new l.default();
          n.freezeId = null;
          i.comments.forEach(function (t) {
            t.duration = t.duration ? t.duration : 5000;
            t.mode ||= "scroll";
          });
          n.container = i.container && i.container.nodeType === 1 ? i.container : null;
          if (!n.container) {
            n.emit("error", "container id can't be empty");
            return f(n, false);
          }
          if (i.containerStyle) {
            var s = i.containerStyle;
            Object.keys(s).forEach(function (t) {
              n.container.style[t] = s[t];
            });
          }
          c.addClass(n.container, "danmu");
          n.live = i.live;
          n.player = i.player;
          n.direction = i.direction;
          n.bulletBtn = new a.default(n);
          n.main = n.bulletBtn.main;
          n.isReady = true;
          n.emit("ready");
          if (n.logger) {
            n.logger.info("ready");
          }
          n.addResizeObserver();
          return n;
        }
        (function (t, e) {
          if (typeof e != "function" && e !== null) {
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
          }
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (e) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(t, e);
            } else {
              t.__proto__ = e;
            }
          }
        })(e, t);
        i(e, [{
          key: "hooks",
          value: function (t) {
            c.deepCopy(this.globalHooks, t);
          }
        }, {
          key: "addResizeObserver",
          value: function () {
            var t = this;
            if (this.config.needResizeObserver && this.container) {
              u.addObserver(this.container, function () {
                if (t.logger) {
                  t.logger.info("needResizeObserver");
                }
                t.resize();
              });
            }
          }
        }, {
          key: "start",
          value: function () {
            if (this.logger) {
              this.logger.info("start");
            }
            if (this.main) {
              this.main.start();
            }
          }
        }, {
          key: "pause",
          value: function () {
            if (this.logger) {
              this.logger.info("pause");
            }
            if (this.main) {
              this.main.pause();
            }
          }
        }, {
          key: "play",
          value: function () {
            if (this.logger) {
              this.logger.info("play");
            }
            if (this.main) {
              this.main.play();
            }
          }
        }, {
          key: "stop",
          value: function () {
            if (this.logger) {
              this.logger.info("stop");
            }
            if (this.main) {
              this.main.stop();
            }
          }
        }, {
          key: "clear",
          value: function () {
            if (this.logger) {
              this.logger.info("clear");
            }
            if (this.main) {
              this.main.clear();
            }
          }
        }, {
          key: "destroy",
          value: function () {
            u.unObserver(this.container);
            if (this.logger) {
              this.logger.info("destroy");
            }
            this.stop();
            if (this.bulletBtn) {
              this.bulletBtn.destroy();
            }
            if (this.recycler) {
              this.recycler.destroy();
            }
            for (var t in this) {
              delete this[t];
            }
            this.emit("destroy");
          }
        }, {
          key: "sendComment",
          value: function (t) {
            var e = this.main;
            var n = this.logger;
            if (n) {
              n.info("sendComment: " + (t.txt || "[DOM Element]"));
            }
            if (e) {
              t.duration ||= 15000;
              if (t && t.id && t.duration && (t.el || t.elLazyInit || t.txt)) {
                t.duration = t.duration ? t.duration : 5000;
                t.style ||= {
                  opacity: undefined,
                  fontSize: undefined
                };
                if (t.style) {
                  if (this.opacity && this.opacity !== t.style.opacity) {
                    t.style.opacity = this.opacity;
                  }
                  if (this.fontSize && this.fontSize !== t.style.fontSize) {
                    t.style.fontSize = this.fontSize;
                  }
                }
                if (t.prior || t.realTime) {
                  e.data.unshift(t);
                  if (t.realTime) {
                    e.readData();
                    e.dataHandle();
                  }
                } else {
                  e.data.push(t);
                }
                e.sortData();
                e.keepPoolWatermark();
              }
            }
          }
        }, {
          key: "setCommentID",
          value: function (t, e) {
            var n = this;
            if (this.logger) {
              this.logger.info("setCommentID: oldID " + t + " newID " + e);
            }
            if (t && e) {
              this.main.data.some(function (n) {
                return n.id === t && (n.id = e, true);
              });
              this.main.queue.some(function (i) {
                return i.id === t && (i.id = e, i.pauseMove(), n.main.status !== "paused" && i.startMove(), true);
              });
            }
          }
        }, {
          key: "setCommentDuration",
          value: function (t, e) {
            var n = this;
            if (this.logger) {
              this.logger.info("setCommentDuration: id " + t + " duration " + e);
            }
            if (t && e) {
              e = e || 5000;
              this.main.data.some(function (n) {
                return n.id === t && (n.duration = e, true);
              });
              this.main.queue.some(function (i) {
                return i.id === t && (i.duration = e, i.pauseMove(), n.main.status !== "paused" && i.startMove(), true);
              });
            }
          }
        }, {
          key: "setCommentLike",
          value: function (t, e) {
            if (this.logger) {
              this.logger.info("setCommentLike: id " + t + " like " + e);
            }
            if (t && e) {
              this.main.data.some(function (n) {
                return n.id === t && (n.like = e, true);
              });
              this.main.queue.some(function (n) {
                return n.id === t && (n.pauseMove(), n.setLikeDom(e.el, e.style), n.danmu.main.status !== "paused" && n.startMove(), true);
              });
            }
          }
        }, {
          key: "restartComment",
          value: function (t) {
            if (this.logger) {
              this.logger.info("restartComment: id " + t);
            }
            if (t) {
              var e = this.main;
              this._releaseCtrl(t);
              if (e.status !== "closed") {
                e.queue.some(function (n) {
                  return n.id === t && (e.status !== "paused" ? n.startMove(true) : n.status = "paused", true);
                });
              }
            }
          }
        }, {
          key: "_releaseCtrl",
          value: function (t) {
            if (this.freezeId && t === this.freezeId) {
              this.mouseControl = false;
              this.freezeId = null;
            }
          }
        }, {
          key: "_freezeCtrl",
          value: function (t) {
            this.mouseControl = true;
            this.freezeId = t;
          }
        }, {
          key: "freezeComment",
          value: function (t) {
            if (this.logger) {
              this.logger.info("freezeComment: id " + t);
            }
            if (t) {
              this._freezeCtrl(t);
              this.main.queue.some(function (e) {
                return e.id === t && (e.status = "forcedPause", e.pauseMove(), e.el && e.el.style && c.styleUtil(e.el, "zIndex", 10), true);
              });
            }
          }
        }, {
          key: "removeComment",
          value: function (t) {
            if (this.logger) {
              this.logger.info("removeComment: id " + t);
            }
            if (t) {
              var e = this.main;
              this._releaseCtrl(t);
              e.queue = e.queue.filter(function (e) {
                return e.id !== t || (e.remove(), false);
              });
              e.data = e.data.filter(function (e) {
                return e.id !== t;
              });
            }
          }
        }, {
          key: "updateComments",
          value: function (t) {
            var e = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            if (this.logger) {
              this.logger.info("updateComments: " + t.length + ", isClear " + e);
            }
            var n = this.main;
            if (typeof e == "boolean" && e) {
              n.data = [];
            }
            n.data = n.data.concat(t);
            n.sortData();
            n.keepPoolWatermark();
          }
        }, {
          key: "setAllDuration",
          value: function (t = "scroll") {
            var e = this;
            var n = arguments[1];
            var i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
            if (this.logger) {
              this.logger.info("setAllDuration: mode " + t + " duration " + n + " force " + i);
            }
            if (n) {
              n = n || 5000;
              if (i) {
                this.main.forceDuration = n;
              }
              this.main.data.forEach(function (e) {
                if (t === e.mode) {
                  e.duration = n;
                }
              });
              this.main.queue.forEach(function (i) {
                if (t === i.mode) {
                  i.duration = n;
                  i.pauseMove();
                  if (e.main.status !== "paused") {
                    i.startMove();
                  }
                }
              });
            }
          }
        }, {
          key: "setPlayRate",
          value: function () {
            var t = this;
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "scroll";
            var n = arguments[1];
            if (this.logger) {
              this.logger.info("setPlayRate: " + n);
            }
            if (c.isNumber(n) && n > 0) {
              this.main.playRate = n;
              this.main.queue.forEach(function (n) {
                if (e === n.mode) {
                  n.pauseMove();
                  if (t.main.status !== "paused") {
                    n.startMove();
                  }
                }
              });
            }
          }
        }, {
          key: "setOpacity",
          value: function (t) {
            if (this.logger) {
              this.logger.info("setOpacity: opacity " + t);
            }
            if (this.container) {
              this.container.style.opacity = t;
            }
          }
        }, {
          key: "setFontSize",
          value: function (t, e) {
            var n = this;
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
              reflow: true
            };
            if (this.logger) {
              this.logger.info("setFontSize: size " + t + " channelSize " + e);
            }
            this.fontSize = t + "px";
            if (t) {
              this.main.data.forEach(function (t) {
                if (t.style) {
                  t.style.fontSize = n.fontSize;
                }
              });
              this.main.queue.forEach(function (t) {
                t.options.style ||= {};
                t.options.style.fontSize = n.fontSize;
                t.setFontSize(n.fontSize);
                if (e) {
                  t.top = t.channel_id[0] * e;
                  t.topInit();
                }
              });
            }
            if (e) {
              this.config.channelSize = e;
              if (i.reflow) {
                this.main.channel.resizeSync();
              }
            }
          }
        }, {
          key: "setArea",
          value: function (t) {
            if (this.logger) {
              this.logger.info("setArea: area " + t);
            }
            this.config.area = t;
            if (t.reflow !== false) {
              this.main.channel.resizeSync();
            }
          }
        }, {
          key: "hide",
          value: function (t = "scroll") {
            if (this.logger) {
              this.logger.info("hide: mode " + t);
            }
            if (this.hideArr.indexOf(t) < 0) {
              this.hideArr.push(t);
            }
            this.main.queue.filter(function (e) {
              return t === e.mode || t === "color" && e.color;
            }).forEach(function (t) {
              return t.remove();
            });
          }
        }, {
          key: "show",
          value: function (t = "scroll") {
            if (this.logger) {
              this.logger.info("show: mode " + t);
            }
            var e = this.hideArr.indexOf(t);
            if (e > -1) {
              this.hideArr.splice(e, 1);
            }
          }
        }, {
          key: "setDirection",
          value: function (t = "r2l") {
            if (this.logger) {
              this.logger.info("setDirection: direction " + t);
            }
            this.direction = t;
            this.emit("changeDirection", t);
          }
        }, {
          key: "resize",
          value: function () {
            if (this.logger) {
              this.logger.info("resize");
            }
            this.emit("channel_resize");
          }
        }, {
          key: "status",
          get: function () {
            return this.main.status;
          }
        }, {
          key: "state",
          get: function () {
            var t = this.main;
            return {
              status: t.status,
              comments: t.data,
              bullets: t.queue,
              displayArea: t.channel.getRealOccupyArea()
            };
          }
        }, {
          key: "containerPos",
          get: function () {
            return this.main.channel.containerPos;
          }
        }]);
        return e;
      }(s.default);
      e.default = d;
    }, function (t, e, n) {
      "use strict";

      var i;
      var r;
      var o;
      var s;
      var a;
      var l;
      var u;
      var c = n(8);
      var h = n(25);
      var f = Function.prototype.apply;
      var d = Function.prototype.call;
      var p = Object.create;
      var g = Object.defineProperty;
      var v = Object.defineProperties;
      var m = Object.prototype.hasOwnProperty;
      var y = {
        configurable: true,
        enumerable: false,
        writable: true
      };
      r = function (t, e) {
        var n;
        var r;
        h(e);
        r = this;
        i.call(this, t, n = function () {
          o.call(r, t, n);
          f.call(e, this, arguments);
        });
        n.__eeOnceListener__ = e;
        return this;
      };
      a = {
        on: i = function (t, e) {
          var n;
          h(e);
          if (m.call(this, "__ee__")) {
            n = this.__ee__;
          } else {
            n = y.value = p(null);
            g(this, "__ee__", y);
            y.value = null;
          }
          if (n[t]) {
            if (typeof n[t] == "object") {
              n[t].push(e);
            } else {
              n[t] = [n[t], e];
            }
          } else {
            n[t] = e;
          }
          return this;
        },
        once: r,
        off: o = function (t, e) {
          var n;
          var i;
          var r;
          var o;
          h(e);
          if (!m.call(this, "__ee__") || !(n = this.__ee__)[t]) {
            return this;
          }
          if (typeof (i = n[t]) == "object") {
            for (o = 0; r = i[o]; ++o) {
              if (r === e || r.__eeOnceListener__ === e) {
                if (i.length === 2) {
                  n[t] = i[+!o];
                } else {
                  i.splice(o, 1);
                }
              }
            }
          } else if (i === e || i.__eeOnceListener__ === e) {
            delete n[t];
          }
          return this;
        },
        emit: s = function (t) {
          var e;
          var n;
          var i;
          var r;
          var o;
          if (m.call(this, "__ee__") && (r = this.__ee__[t])) {
            if (typeof r == "object") {
              n = arguments.length;
              o = Array(n - 1);
              e = 1;
              for (; e < n; ++e) {
                o[e - 1] = arguments[e];
              }
              r = r.slice();
              e = 0;
              for (; i = r[e]; ++e) {
                f.call(i, this, o);
              }
            } else {
              switch (arguments.length) {
                case 1:
                  d.call(r, this);
                  break;
                case 2:
                  d.call(r, this, arguments[1]);
                  break;
                case 3:
                  d.call(r, this, arguments[1], arguments[2]);
                  break;
                default:
                  n = arguments.length;
                  o = Array(n - 1);
                  e = 1;
                  for (; e < n; ++e) {
                    o[e - 1] = arguments[e];
                  }
                  f.call(r, this, o);
              }
            }
          }
        }
      };
      u = v({}, l = {
        on: c(i),
        once: c(r),
        off: c(o),
        emit: c(s)
      });
      t.exports = e = function (t) {
        if (t == null) {
          return p(u);
        } else {
          return v(Object(t), l);
        }
      };
      e.methods = a;
    }, function (t, e, n) {
      "use strict";

      var i = n(3);
      var r = n(9);
      var o = n(13);
      var s = n(21);
      var a = n(22);
      (t.exports = function (t, e) {
        var n;
        var r;
        var l;
        var u;
        var c;
        if (arguments.length < 2 || typeof t != "string") {
          u = e;
          e = t;
          t = null;
        } else {
          u = arguments[2];
        }
        if (i(t)) {
          n = a.call(t, "c");
          r = a.call(t, "e");
          l = a.call(t, "w");
        } else {
          n = l = true;
          r = false;
        }
        c = {
          value: e,
          configurable: n,
          enumerable: r,
          writable: l
        };
        if (u) {
          return o(s(u), c);
        } else {
          return c;
        }
      }).gs = function (t, e, n) {
        var l;
        var u;
        var c;
        var h;
        if (typeof t != "string") {
          c = n;
          n = e;
          e = t;
          t = null;
        } else {
          c = arguments[3];
        }
        if (i(e)) {
          if (r(e)) {
            if (i(n)) {
              if (!r(n)) {
                c = n;
                n = undefined;
              }
            } else {
              n = undefined;
            }
          } else {
            c = e;
            e = n = undefined;
          }
        } else {
          e = undefined;
        }
        if (i(t)) {
          l = a.call(t, "c");
          u = a.call(t, "e");
        } else {
          l = true;
          u = false;
        }
        h = {
          get: e,
          set: n,
          configurable: l,
          enumerable: u
        };
        if (c) {
          return o(s(c), h);
        } else {
          return h;
        }
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(10);
      var r = /^\s*class[\s{/}]/;
      var o = Function.prototype.toString;
      t.exports = function (t) {
        return !!i(t) && !r.test(o.call(t));
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(11);
      t.exports = function (t) {
        if (typeof t != "function" || !hasOwnProperty.call(t, "length")) {
          return false;
        }
        try {
          if (typeof t.length != "number" || typeof t.call != "function" || typeof t.apply != "function") {
            return false;
          }
        } catch (t) {
          return false;
        }
        return !i(t);
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(12);
      t.exports = function (t) {
        if (!i(t)) {
          return false;
        }
        try {
          return !!t.constructor && t.constructor.prototype === t;
        } catch (t) {
          return false;
        }
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(3);
      var r = {
        object: true,
        function: true,
        undefined: true
      };
      t.exports = function (t) {
        return !!i(t) && hasOwnProperty.call(r, typeof t);
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = n(14)() ? Object.assign : n(15);
    }, function (t, e, n) {
      "use strict";

      t.exports = function () {
        var t;
        var e = Object.assign;
        return typeof e == "function" && (e(t = {
          foo: "raz"
        }, {
          bar: "dwa"
        }, {
          trzy: "trzy"
        }), t.foo + t.bar + t.trzy === "razdwatrzy");
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(16);
      var r = n(20);
      var o = Math.max;
      t.exports = function (t, e) {
        var n;
        var s;
        var a;
        var l = o(arguments.length, 2);
        t = Object(r(t));
        a = function (i) {
          try {
            t[i] = e[i];
          } catch (t) {
            n ||= t;
          }
        };
        s = 1;
        for (; s < l; ++s) {
          i(e = arguments[s]).forEach(a);
        }
        if (n !== undefined) {
          throw n;
        }
        return t;
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = n(17)() ? Object.keys : n(18);
    }, function (t, e, n) {
      "use strict";

      t.exports = function () {
        try {
          Object.keys("primitive");
          return true;
        } catch (t) {
          return false;
        }
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(2);
      var r = Object.keys;
      t.exports = function (t) {
        return r(i(t) ? Object(t) : t);
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = function () {};
    }, function (t, e, n) {
      "use strict";

      var i = n(2);
      t.exports = function (t) {
        if (!i(t)) {
          throw TypeError("Cannot use null or undefined");
        }
        return t;
      };
    }, function (t, e, n) {
      "use strict";

      var i = n(2);
      var r = Array.prototype.forEach;
      var o = Object.create;
      function s(t, e) {
        var n;
        for (n in t) {
          e[n] = t[n];
        }
      }
      t.exports = function (t) {
        var e = o(null);
        r.call(arguments, function (t) {
          if (i(t)) {
            s(Object(t), e);
          }
        });
        return e;
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = n(23)() ? String.prototype.contains : n(24);
    }, function (t, e, n) {
      "use strict";

      var i = "razdwatrzy";
      t.exports = function () {
        return typeof i.contains == "function" && i.contains("dwa") === true && i.contains("foo") === false;
      };
    }, function (t, e, n) {
      "use strict";

      var i = String.prototype.indexOf;
      t.exports = function (t) {
        return i.call(this, t, arguments[1]) > -1;
      };
    }, function (t, e, n) {
      "use strict";

      t.exports = function (t) {
        if (typeof t != "function") {
          throw TypeError(t + " is not a function");
        }
        return t;
      };
    }, function (t) {
      t.exports = {
        version: "1.1.13"
      };
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = a(n(1));
      var o = a(n(28));
      var s = n(0);
      function a(t) {
        if (t && t.__esModule) {
          return t;
        } else {
          return {
            default: t
          };
        }
      }
      var l = function (t) {
        function e(t) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          var n = function (t, e) {
            if (!t) {
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (e && (typeof e == "object" || typeof e == "function")) {
              return e;
            } else {
              return t;
            }
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          n.setLogger("control");
          n.danmu = t;
          n.main = new o.default(t);
          if (!t.config.defaultOff) {
            n.main.start();
          }
          return n;
        }
        (function (t, e) {
          if (typeof e != "function" && e !== null) {
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
          }
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (e) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(t, e);
            } else {
              t.__proto__ = e;
            }
          }
        })(e, t);
        i(e, [{
          key: "createSwitch",
          value: function () {
            var t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
            if (this.logger) {
              this.logger.info("createSwitch");
            }
            this.switchBtn = s.createDom("dk-switch", "<span class=\"txt\">弹</span>", {}, "danmu-switch " + (t ? "danmu-switch-active" : ""));
            return this.switchBtn;
          }
        }, {
          key: "destroy",
          value: function () {
            if (this.logger) {
              this.logger.info("destroy");
            }
            this.main.destroy();
            for (var t in this) {
              if (s.hasOwnProperty.call(this, t)) {
                delete this[t];
              }
            }
          }
        }]);
        return e;
      }(r.default);
      e.default = l;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = l(n(1));
      var o = l(n(29));
      var s = l(n(30));
      var a = n(0);
      function l(t) {
        if (t && t.__esModule) {
          return t;
        } else {
          return {
            default: t
          };
        }
      }
      var u = function (t) {
        function e(t) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          var n = function (t, e) {
            if (!t) {
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (e && (typeof e == "object" || typeof e == "function")) {
              return e;
            } else {
              return t;
            }
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          n.setLogger("main");
          n.danmu = t;
          n.container = t.container;
          n.channel = new s.default(t);
          n.data = [].concat(t.config.comments);
          n.playedData = [];
          n.queue = [];
          n.timer = null;
          n.playRate = 1;
          n.retryStatus = "normal";
          n.interval = t.config.interval;
          n._status = "idle";
          n._events = [];
          n._bindEvents();
          return n;
        }
        (function (t, e) {
          if (typeof e != "function" && e !== null) {
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
          }
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (e) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(t, e);
            } else {
              t.__proto__ = e;
            }
          }
        })(e, t);
        i(e, [{
          key: "destroy",
          value: function () {
            if (this.logger) {
              this.logger.info("destroy");
            }
            this._unbindEvents();
            this._cancelTick();
            if (this.channel) {
              this.channel.destroy();
            }
            this.data = [];
            for (var t in this) {
              delete this[t];
            }
          }
        }, {
          key: "_bindEvents",
          value: function () {
            var t = this;
            var e = this.danmu;
            var n = this.container;
            this._unbindEvents();
            this._events.push([e, "bullet_remove", function (e) {
              var n = e.bullet;
              var i = t.data;
              var r = t.queue;
              r.some(function (t, e) {
                return t.id === n.id && (r.splice(e, 1), true);
              });
              i.some(function (t) {
                return t.id === n.id && (t.attached_ = false, true);
              });
            }]);
            this._events.push([n, "transitionend", function (e) {
              var n = t._getBulletByEvt(e);
              if (n) {
                n.status = "end";
                n.remove(false);
              }
            }]);
            if (e.config.mouseControl || e.config.mouseEnterControl) {
              this._events.push([n, "mouseover", function (e) {
                var n;
                var i = t.danmu;
                if (!!i && (!i.mouseControl || !i.config.mouseControlPause)) {
                  if ((n = t._getBulletByEvt(e)) && n.status !== "waiting" && n.status !== "end") {
                    i.emit("bullet_hover", {
                      bullet: n,
                      event: e
                    });
                  }
                }
              }]);
            }
            this._events.forEach(function (t) {
              if (t[0].addEventListener) {
                t[0].addEventListener(t[1], t[2], false);
              } else if (t[0].on) {
                t[0].on(t[1], t[2]);
              }
            });
          }
        }, {
          key: "_unbindEvents",
          value: function () {
            if (this._events.length) {
              this._events.forEach(function (t) {
                if (t[0].removeEventListener) {
                  t[0].removeEventListener(t[1], t[2], false);
                } else if (t[0].off) {
                  t[0].off(t[1], t[2]);
                }
              });
              this._events = [];
            }
          }
        }, {
          key: "_cancelTick",
          value: function () {
            if (this.handleTimer) {
              clearTimeout(this.handleTimer);
              this.handleTimer = null;
            }
          }
        }, {
          key: "_startTick",
          value: function () {
            var t = this;
            t.retryStatus = "normal";
            t._cancelTick();
            t.sortData();
            (function e() {
              if (t._status !== "closed" || t.retryStatus !== "stop") {
                if (t._status === "playing") {
                  t.readData();
                  t.dataHandle();
                }
                if (t.retryStatus !== "stop" || t._status === "paused") {
                  t.handleTimer = setTimeout(e, 250);
                }
              } else {
                t._cancelTick();
              }
            })();
          }
        }, {
          key: "start",
          value: function () {
            if (this.logger) {
              this.logger.info("start");
            }
            if (this._status !== "playing") {
              this._status = "playing";
              this.queue = [];
              this.container.innerHTML = "";
              this.channel.reset();
              this._startTick();
            }
          }
        }, {
          key: "stop",
          value: function () {
            if (this.logger) {
              this.logger.info("stop");
            }
            if (this._status !== "closed") {
              this._status = "closed";
              this.retryStatus = "stop";
              this.queue = [];
              if (this.container) {
                this.container.innerHTML = "";
              }
              if (this.channel) {
                this.channel.reset();
              }
              this._cancelTick();
            }
          }
        }, {
          key: "clear",
          value: function () {
            if (this.logger) {
              this.logger.info("clear");
            }
            if (this.channel) {
              this.channel.reset();
            }
            this.data = [];
            this.queue = [];
            if (this.container) {
              this.container.innerHTML = "";
            }
          }
        }, {
          key: "play",
          value: function () {
            var t = this;
            if (this._status !== "closed") {
              if (this.logger) {
                this.logger.info("play");
              }
              this._status = "playing";
              var e = this.channel.channels;
              if (e && e.length > 0) {
                ["scroll", "top", "bottom"].forEach(function (n) {
                  t.queue.forEach(function (t) {
                    t.startMove();
                    t.resized = true;
                  });
                  for (var i = 0; i < e.length; i++) {
                    e[i].queue[n].forEach(function (t) {
                      t.resized = false;
                    });
                  }
                });
              }
              this._startTick();
            } else if (this.logger) {
              this.logger.info("play ignored");
            }
          }
        }, {
          key: "pause",
          value: function () {
            if (this._status !== "closed") {
              if (this.logger) {
                this.logger.info("pause");
              }
              this._status = "paused";
              this._cancelTick();
              var t = this.channel.channels;
              if (t && t.length > 0) {
                this.queue.forEach(function (t) {
                  t.pauseMove();
                });
              }
            } else if (this.logger) {
              this.logger.info("pause ignored");
            }
          }
        }, {
          key: "dataHandle",
          value: function () {
            if (this._status !== "paused" && this._status !== "closed" && this.queue.length) {
              this.queue.forEach(function (t) {
                if (t.status === "waiting") {
                  t.startMove();
                }
              });
            }
          }
        }, {
          key: "readData",
          value: function () {
            var t = this.danmu;
            var e = this.interval;
            var n = this.channel;
            var i = t.player;
            var r = undefined;
            var s = undefined;
            if (t.isReady && t.main) {
              if (i) {
                var l = i.currentTime ? Math.floor(i.currentTime * 1000) : 0;
                s = this.data.filter(function (n) {
                  if (!n.start && t.hideArr.indexOf(n.mode) < 0 && (!n.color || t.hideArr.indexOf("color") < 0)) {
                    n.start = l;
                  }
                  return !n.attached_ && t.hideArr.indexOf(n.mode) < 0 && (!n.color || t.hideArr.indexOf("color") < 0) && n.start - e <= l && l <= n.start + e;
                });
                if (t.config.highScorePriority) {
                  s.sort(function (t, e) {
                    return e.prior && !t.prior || (e.score || -1) - (t.score || -1);
                  });
                }
                if (t.live) {
                  this.data = [];
                }
              } else if ((s = this.data.splice(0, 1)).length === 0) {
                s = this.playedData.splice(0, 1);
              }
              if (s.length > 0 && n.checkAvailableTrack(s[0].mode)) {
                n.updatePos();
                var u;
                var c = 0;
                var h = 0;
                for (; h < s.length; h++) {
                  u = s[h];
                  if (this.forceDuration && this.forceDuration !== u.duration) {
                    u.duration = this.forceDuration;
                  }
                  if ((r = new o.default(t, u)).bulletCreateFail) {
                    if (c === 0) {
                      break;
                    }
                    c--;
                  } else {
                    r.attach();
                    u.attached_ = true;
                    if (n.addBullet(r).result) {
                      this.queue.push(r);
                      r.topInit();
                      c = 0;
                    } else {
                      r.detach();
                      for (var f in r) {
                        if (a.hasOwnProperty.call(r, f)) {
                          delete r[f];
                        }
                      }
                      r = null;
                      u.attached_ = false;
                      if (u.noDiscard) {
                        if (u.prior) {
                          this.data.unshift(u);
                        } else {
                          this.data.push(u);
                        }
                      }
                      if (c === 0) {
                        break;
                      }
                      c--;
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "sortData",
          value: function () {
            this.data.sort(function (t, e) {
              return (t.start || -1) - (e.start || -1);
            });
          }
        }, {
          key: "keepPoolWatermark",
          value: function () {
            var t = this.danmu;
            var e = t.config;
            var n = t.player;
            var i = this.data;
            var r = [];
            var o = 0;
            if (typeof e.maxCommentsLength == "number" && i.length > e.maxCommentsLength) {
              o = i.length - e.maxCommentsLength;
              var s;
              var a = 0;
              for (; a < o; a++) {
                if ((s = i[a]).prior && !s.attached_) {
                  r.push(i[a]);
                }
              }
            } else if (e.dropStaleComments && n && n.currentTime) {
              var l = Math.floor(n.currentTime * 1000) - e.interval;
              if (l > 0) {
                var u;
                var c = 0;
                for (; c < i.length; c++) {
                  if ((u = i[c]).prior && !u.attached_) {
                    r.push(i[c]);
                  }
                  if (u.start > l) {
                    o = c;
                    break;
                  }
                }
              }
            }
            if (o > 0) {
              i.splice(0, o);
              this.data = r.concat(i);
            }
          }
        }, {
          key: "_getBulletByEvt",
          value: function (t) {
            var e;
            var n = t.target || t.srcElement;
            var i = this.queue;
            var r = undefined;
            var o = 0;
            for (; o < i.length; o++) {
              if ((e = i[o]) && e.el && (e.el === n || e.el.contains(n))) {
                r = e;
                break;
              }
            }
            return r;
          }
        }, {
          key: "status",
          get: function () {
            return this._status;
          }
        }]);
        return e;
      }(r.default);
      e.default = u;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.Bullet = undefined;
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = a(n(1));
      var o = a(n(4));
      var s = n(0);
      function a(t) {
        if (t && t.__esModule) {
          return t;
        } else {
          return {
            default: t
          };
        }
      }
      var l = new o.default("bullet");
      var u = e.Bullet = function (t) {
        function e(t, n = {}) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          var i = function (t, e) {
            if (!t) {
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (e && (typeof e == "object" || typeof e == "function")) {
              return e;
            } else {
              return t;
            }
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          var r = t.container;
          var o = t.recycler;
          var s = t.config;
          i.setLogger(l);
          i.danmu = t;
          i.options = n;
          i.duration = n.duration;
          i.id = n.id;
          i.container = r;
          i.mode = n.mode === "top" || n.mode === "bottom" ? n.mode : "scroll";
          i.start = n.start;
          i.prior = n.prior;
          i.realTime = n.realTime;
          i.color = n.color;
          i.bookChannelId = n.bookChannelId;
          i.reuseDOM = true;
          i.noCopyEl = !!s.disableCopyDOM || !!n.disableCopyDOM;
          i.recycler = o;
          i._fullySlideInScreenDuration = undefined;
          i._lastMoveTime = undefined;
          i.status = "waiting";
          if (!n.elLazyInit) {
            i.bulletCreateFail = !i._makeEl();
          }
          return i;
        }
        (function (t, e) {
          if (typeof e != "function" && e !== null) {
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
          }
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (e) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(t, e);
            } else {
              t.__proto__ = e;
            }
          }
        })(e, t);
        i(e, [{
          key: "_makeEl",
          value: function () {
            var t = this.danmu;
            var e = this.options;
            var n = t.config;
            var i = t.globalHooks;
            var r = undefined;
            var o = "";
            var a = e.style || {};
            a.perspective = "500em";
            if (e.el || e.elLazyInit) {
              if (this.noCopyEl) {
                this.reuseDOM = false;
              }
              if (e.elLazyInit) {
                if (s.isFunction(i.bulletCreateEl)) {
                  try {
                    var l = i.bulletCreateEl(e);
                    r = l instanceof HTMLElement ? l : l.el;
                  } catch (t) {}
                }
              } else if (e.el.nodeType === 1 && !e.el.parentNode) {
                if (this.reuseDOM) {
                  var u = s.copyDom(e.el);
                  if (e.eventListeners && e.eventListeners.length > 0) {
                    e.eventListeners.forEach(function (t) {
                      u.addEventListener(t.event, t.listener, t.useCapture || false);
                    });
                  }
                  if ((r = this.recycler.use()).childNodes.length > 0) {
                    r.innerHTML = "";
                  }
                  r.textContent &&= "";
                  r.appendChild(u);
                } else {
                  r = e.el;
                }
              }
            } else if (typeof e.txt == "string") {
              (r = this.recycler.use()).textContent = e.txt;
            }
            if (!r || !t.main) {
              return false;
            }
            var c = undefined;
            if (s.isNumber(n.bulletOffset) && n.bulletOffset >= 0) {
              c = n.bulletOffset;
            } else {
              var h = t.containerPos;
              c = h.width / 10 > 100 ? 100 : h.width / 10;
            }
            var f = e.realTime ? 0 : Math.floor(Math.random() * c);
            var d = this.updateOffset(f, true);
            a.left = d;
            Object.keys(a).forEach(function (t) {
              var e = t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase();
              });
              o += e + ":" + a[t] + ";";
            });
            s.styleCSSText(r, o);
            this.el = r;
            if (e.like && e.like.el) {
              this.setLikeDom(e.like.el, e.like.style);
            }
            return true;
          }
        }, {
          key: "updateOffset",
          value: function (t, e = false) {
            this.random = t;
            var n = this.danmu.containerPos.width + t + "px";
            if (!e) {
              s.styleUtil(this.el, "left", this.danmu.containerPos.width + t + "px");
            }
            return n;
          }
        }, {
          key: "attach",
          value: function () {
            if (this.options.elLazyInit && !this.el) {
              this._makeEl();
            }
            if (this.danmu && this.danmu.main) {
              var t = this.danmu;
              var e = this.options;
              var n = this.el;
              var i = t.globalHooks;
              if (i.bulletAttaching) {
                i.bulletAttaching(e);
              }
              if (!this.container.contains(n)) {
                this.container.appendChild(n);
              }
              this.elPos = n.getBoundingClientRect();
              if (this.direction === "b2t") {
                this.width = this.elPos.height;
                this.height = this.elPos.width;
              } else {
                this.width = this.elPos.width;
                this.height = this.elPos.height;
              }
              if (this.moveV) {
                this.duration = (this.danmu.containerPos.width + this.random + this.width) / this.moveV * 1000;
              }
              if (i.bulletAttached) {
                i.bulletAttached(e, n);
              }
            }
          }
        }, {
          key: "detach",
          value: function () {
            var t = this.el;
            var e = this.danmu;
            var n = this.options;
            var i = e.globalHooks;
            if (t) {
              if (i.bulletDetaching) {
                i.bulletDetaching(n);
              }
              if (this.reuseDOM) {
                this.recycler.unused(t);
              } else if (t.parentNode) {
                t.parentNode.removeChild(t);
              }
              if (i.bulletDetached) {
                i.bulletDetached(n, t);
              }
              this.el = null;
            }
            this.elPos = undefined;
          }
        }, {
          key: "topInit",
          value: function () {
            if (this.logger) {
              this.logger.info("topInit #" + (this.options.txt || "[DOM Element]") + "#");
            }
            if (this.direction === "b2t") {
              s.styleUtil(this.el, "transformOrigin", "left top");
              s.styleUtil(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + this.danmu.containerPos.height + "px) translateZ(0px) rotate(90deg)");
              s.styleUtil(this.el, "transition", "transform 0s linear 0s");
            } else {
              s.styleUtil(this.el, "top", this.top + "px");
            }
          }
        }, {
          key: "pauseMove",
          value: function (t = false) {
            if (this.status !== "paused" && (this.status !== "forcedPause" && (this.status = "paused"), this._moveV = undefined, this.el)) {
              if (this.mode === "scroll") {
                var e = this.danmu.containerPos;
                if (t) {
                  var n = (new Date().getTime() - this._lastMoveTime) / 1000 * this.moveV;
                  var i = 0;
                  i = this.moveMoreS - n >= 0 ? this.direction === "b2t" ? (this.moveMoreS - n) / this.moveContainerHeight * e.height : (this.moveMoreS - n) / this.moveContainerWidth * e.width : this.moveMoreS - n;
                  if (this.direction === "b2t") {
                    s.styleUtil(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + i + "px) translateZ(0px) rotate(90deg)");
                  } else {
                    s.styleUtil(this.el, "left", i + "px");
                  }
                } else if (this.direction === "b2t") {
                  s.styleUtil(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - e.top) + "px) translateZ(0px) rotate(90deg)");
                } else {
                  s.styleUtil(this.el, "left", this.el.getBoundingClientRect().left - e.left + "px");
                }
                if (this.direction !== "b2t") {
                  s.styleUtil(this.el, "transform", "translateX(0px) translateY(0px) translateZ(0px)");
                }
                s.styleUtil(this.el, "transition", "transform 0s linear 0s");
              } else if (this.pastDuration && this.startTime) {
                this.pastDuration = this.pastDuration + new Date().getTime() - this.startTime;
              } else {
                this.pastDuration = 1;
              }
            }
          }
        }, {
          key: "startMove",
          value: function (t) {
            if (!this.hasMove) {
              this.danmu.emit("bullet_start", this);
              this.hasMove = true;
            }
            if ((this.status !== "forcedPause" || t) && this.el && this.status !== "start") {
              this.status = "start";
              if (this.mode === "scroll") {
                var e = this.danmu.containerPos;
                if (this.el) {
                  var n = this.el.getBoundingClientRect();
                  var i = undefined;
                  if (this.direction === "b2t") {
                    i = n.bottom - e.bottom;
                    var r = (n.bottom - e.top) / this.moveV;
                    s.styleUtil(this.el, "transition", "transform " + r + "s linear 0s");
                    s.styleUtil(this.el, "transform", "translateX(-" + this.top + "px) translateY(-" + this.height + "px) translateZ(0px) rotate(90deg)");
                    this._lastMoveTime = new Date().getTime();
                    this.moveMoreS = n.top - e.top;
                    this.moveContainerHeight = e.height;
                  } else {
                    i = n.right - e.right;
                    var o = n.right - e.left;
                    var a = o / this.moveV;
                    if (n.right > e.left) {
                      s.styleUtil(this.el, "transition", "transform " + a + "s linear 0s");
                      s.styleUtil(this.el, "transform", "translateX(-" + o + "px) translateY(0px) translateZ(0px)");
                      this._lastMoveTime = new Date().getTime();
                      this.moveMoreS = n.left - e.left;
                      this.moveContainerWidth = e.width;
                    } else {
                      this.status = "end";
                      this.remove();
                    }
                  }
                  this._fullySlideInScreenDuration = i / this.moveV;
                }
              } else {
                var l = new Date().getTime();
                var u = (this.startTime && l - this.startTime > this.duration ? l - this.startTime : this.duration) / 1000;
                s.styleUtil(this.el, "left", "50%");
                s.styleUtil(this.el, "margin", "0 0 0 -" + this.width / 2 + "px");
                s.styleUtil(this.el, "visibility", "hidden");
                s.styleUtil(this.el, "transition", "visibility " + u + "s 0s");
                this.pastDuration ||= 1;
                this.startTime = l;
              }
            }
          }
        }, {
          key: "remove",
          value: function () {
            var t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
            if (this.logger) {
              this.logger.info("remove #" + (this.options.txt || "[DOM Element]") + "#");
            }
            if (t) {
              this.pauseMove();
            }
            if (this.el && this.el.parentNode) {
              this.detach();
              if (this.options.el && this.options.el.nodeType === 1 && this.noCopyEl) {
                s.styleUtil(this.options.el, "transform", "none");
              }
              this.danmu.emit("bullet_remove", {
                bullet: this
              });
            }
          }
        }, {
          key: "setFontSize",
          value: function (t) {
            if (this.el) {
              this.el.style.fontSize = t;
            }
          }
        }, {
          key: "setLikeDom",
          value: function (t, e) {
            if (t && (Object.keys(e).forEach(function (n) {
              t.style[n] = e[n];
            }), t.className = "danmu-like", this.el)) {
              var n = this.el.querySelector(".danmu-like");
              if (n) {
                this.el.removeChild(n);
              }
              this.el.innerHTML = "" + this.el.innerHTML + t.outerHTML;
            }
            return t;
          }
        }, {
          key: "moveV",
          get: function () {
            var t = this.danmu;
            var e = this.options;
            var n = this._moveV;
            if (!n) {
              if (e.moveV) {
                n = e.moveV;
              } else if (this.elPos) {
                var i = t.containerPos;
                n = (this.direction === "b2t" ? i.height + (t.config.chaseEffect ? this.height : 0) : i.width + (t.config.chaseEffect ? this.width : 0)) / this.duration * 1000;
              }
              if (n) {
                n *= t.main.playRate;
                this._moveV = n;
              }
            }
            return n;
          }
        }, {
          key: "direction",
          get: function () {
            return this.danmu.direction;
          }
        }, {
          key: "fullySlideIntoScreen",
          get: function () {
            var t = true;
            if (this.mode === "scroll" && this._lastMoveTime && this._fullySlideInScreenDuration > 0) {
              t = (new Date().getTime() - this._lastMoveTime) / 1000 >= this._fullySlideInScreenDuration;
            }
            return t;
          }
        }]);
        return e;
      }(r.default);
      e.default = u;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = n(1);
      var o = r && r.__esModule ? r : {
        default: r
      };
      var s = n(0);
      var a = n(31);
      var l = function (t) {
        function e(t) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, e);
          var n = function (t, e) {
            if (!t) {
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (e && (typeof e == "object" || typeof e == "function")) {
              return e;
            } else {
              return t;
            }
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          n.setLogger("channel");
          n.danmu = t;
          n.width = 0;
          n.height = 0;
          n.reset(true);
          n.channels = [];
          n.updatePos();
          s.attachEventListener(n.danmu, "bullet_remove", function (t) {
            n.removeBullet(t.bullet);
          }, "destroy");
          s.attachEventListener(n.danmu, "channel_resize", function () {
            n.resize();
          }, "destroy");
          return n;
        }
        (function (t, e) {
          if (typeof e != "function" && e !== null) {
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
          }
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          if (e) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(t, e);
            } else {
              t.__proto__ = e;
            }
          }
        })(e, t);
        i(e, [{
          key: "checkAvailableTrack",
          value: function (t = "scroll") {
            var e = this.channels;
            var n = false;
            if (t === "scroll") {
              var i;
              var r = 0;
              for (; r < e.length; r++) {
                n = true;
                if ((i = e[r]).operating[t]) {
                  n = false;
                } else {
                  var o = i.queue[t][0];
                  if (!o || o.fullySlideIntoScreen) {
                    if (n) {
                      break;
                    }
                  } else {
                    n = false;
                  }
                }
              }
            } else {
              n = true;
            }
            return n;
          }
        }, {
          key: "destroy",
          value: function () {
            if (this.logger) {
              this.logger.info("destroy");
            }
            this.channels.splice(0, this.channels.length);
            this._cancelResizeTimer();
            for (var t in this) {
              if (s.hasOwnProperty.call(this, t)) {
                delete this[t];
              }
            }
          }
        }, {
          key: "reset",
          value: function (t = false) {
            if (this.logger) {
              this.logger.info("reset");
            }
            var e = this;
            var n = e.danmu;
            var i = n.container;
            var r = n.bulletBtn;
            function o() {
              if (e.danmu && e.danmu.container) {
                var t = e.danmu.container.getBoundingClientRect();
                e.width = t.width;
                e.height = t.height;
                if (e.resetId) {
                  cancelAnimationFrame(e.resetId);
                  e.resetId = null;
                }
                var n = e._initChannels();
                var i = n.channelSize;
                var r = n.channelCount;
                var o = n.channels;
                e.channelCount = r;
                e.channels = o;
                if (e.direction === "b2t") {
                  e.channelWidth = i;
                } else {
                  e.channelHeight = i;
                }
              }
            }
            e.container = i;
            if (r && r.main) {
              r.main.queue.forEach(function (t) {
                t.remove();
              });
            }
            if (e.channels && e.channels.length > 0) {
              ["scroll", "top", "bottom"].forEach(function (t) {
                for (var n = 0; n < e.channels.length; n++) {
                  e.channels[n].queue[t].forEach(function (t) {
                    t.remove();
                  });
                }
              });
            }
            if (r && r.main && r.main.data) {
              r.main.data.forEach(function (t) {
                t.attached_ = false;
              });
            }
            if (t) {
              this.resetId = requestAnimationFrame(o);
            } else {
              o();
            }
          }
        }, {
          key: "getRealOccupyArea",
          value: function () {
            return {
              width: this.width,
              height: this.height
            };
          }
        }, {
          key: "updatePos",
          value: function () {
            var t = this.container.getBoundingClientRect();
            this.containerPos = t;
            this.containerWidth = t.width;
            this.containerHeight = t.height;
            this.containerTop = t.top;
            this.containerBottom = t.bottom;
            this.containerLeft = t.left;
            this.containerRight = t.right;
          }
        }, {
          key: "addBullet",
          value: function (t) {
            var e = this;
            var n = this.danmu;
            var i = this.channels;
            var r = undefined;
            var o = undefined;
            var s = undefined;
            if (e.direction === "b2t") {
              o = this.channelWidth;
              s = Math.ceil(t.width / o);
            } else {
              r = this.channelHeight;
              s = Math.ceil(t.height / r);
            }
            if (s > i.length) {
              return {
                result: false,
                message: "exceed channels.length, occupy=" + s + ",channelsSize=" + i.length
              };
            }
            var a = true;
            var l = undefined;
            var u = -1;
            var c = 0;
            var h = i.length;
            for (; c < h; c++) {
              if (i[c].queue[t.mode].some(function (e) {
                return e.id === t.id;
              })) {
                return {
                  result: false,
                  message: "exited, channelOrder=" + c + ",danmu_id=" + t.id
                };
              }
            }
            if (t.mode === "scroll") {
              var f = 0;
              var d = i.length - s;
              for (; f <= d; f += s) {
                a = true;
                for (var p = f; p < f + s; p++) {
                  if ((l = i[p]).operating.scroll || l.bookId.scroll && l.bookId.scroll !== t.id) {
                    a = false;
                    break;
                  }
                  l.operating.scroll = true;
                  var g = l.queue.scroll[0];
                  if (g) {
                    var v = g.el.getBoundingClientRect();
                    if (e.direction === "b2t") {
                      if (v.bottom >= e.containerPos.bottom) {
                        a = false;
                        l.operating.scroll = false;
                        break;
                      }
                    } else if (v.right >= e.containerPos.right) {
                      a = false;
                      l.operating.scroll = false;
                      break;
                    }
                    var m = undefined;
                    var y = g.moveV;
                    var b = undefined;
                    var _ = t.moveV;
                    var x = undefined;
                    if (e.direction === "b2t") {
                      b = (m = v.bottom - e.containerTop) / y;
                      x = e.containerHeight + t.random - m;
                    } else {
                      b = (m = v.right - e.containerLeft) / y;
                      x = e.containerWidth + t.random - m;
                    }
                    if (_ > y) {
                      var k = x / (_ - y);
                      n.config.bOffset ||= 0;
                      if (b + n.config.bOffset >= k) {
                        var T = b * _ - e.containerPos.width;
                        if (T > 0) {
                          t.updateOffset(T + (1 + Math.ceil(Math.random() * 5)));
                        }
                      }
                    }
                  }
                  l.operating.scroll = false;
                }
                if (a) {
                  u = f;
                  break;
                }
              }
            } else if (t.mode === "top") {
              var O = 0;
              var w = i.length - s;
              for (; O <= w; O++) {
                a = true;
                for (var E = O; E < O + s; E++) {
                  if (E > Math.floor(i.length / 2) || (l = i[E]).operating[t.mode] || (l.bookId[t.mode] || t.prior) && l.bookId[t.mode] !== t.id) {
                    a = false;
                    break;
                  }
                  l.operating[t.mode] = true;
                  if (l.queue[t.mode].length > 0) {
                    a = false;
                    l.operating[t.mode] = false;
                    break;
                  }
                  l.operating[t.mode] = false;
                }
                if (a) {
                  u = O;
                  break;
                }
              }
            } else if (t.mode === "bottom") {
              for (var S = i.length - s; S >= 0; S--) {
                a = true;
                for (var C = S; C < S + s; C++) {
                  if (C <= Math.floor(i.length / 2) || (l = i[C]).operating[t.mode] || (l.bookId[t.mode] || t.prior) && l.bookId[t.mode] !== t.id) {
                    a = false;
                    break;
                  }
                  l.operating[t.mode] = true;
                  if (l.queue[t.mode].length > 0) {
                    a = false;
                    l.operating[t.mode] = false;
                    break;
                  }
                  l.operating[t.mode] = false;
                }
                if (a) {
                  u = S;
                  break;
                }
              }
            }
            if (u !== -1) {
              var P = u;
              var I = u + s;
              for (; P < I; P++) {
                (l = i[P]).operating[t.mode] = true;
                l.queue[t.mode].unshift(t);
                if (t.prior) {
                  delete l.bookId[t.mode];
                  if (e.logger) {
                    e.logger.info(P + "号轨道恢复正常使用");
                  }
                }
                l.operating[t.mode] = false;
              }
              if (t.prior) {
                if (e.logger) {
                  e.logger.info(t.id + "号优先弹幕运行完毕");
                }
                delete t.bookChannelId;
                if (n.player) {
                  n.bulletBtn.main.data.some(function (e) {
                    return e.id === t.id && (delete e.bookChannelId, true);
                  });
                }
              }
              t.channel_id = [u, s];
              t.el.setAttribute("data-line-index", u + 1);
              if (e.direction === "b2t") {
                t.top = u * o;
                if (e.danmu.config.area && e.danmu.config.area.start) {
                  t.top += e.containerWidth * e.danmu.config.area.start;
                }
              } else {
                t.top = u * r;
                if (e.danmu.config.area && e.danmu.config.area.start) {
                  t.top += e.containerHeight * e.danmu.config.area.start;
                }
              }
              return {
                result: t,
                message: "success"
              };
            }
            if (t.options.realTime) {
              var R = 0;
              var L = -1;
              var A = null;
              e.danmu.bulletBtn.main.queue.forEach(function (t, n) {
                if (!t.prior && !t.options.realTime && t.el && t.el.getBoundingClientRect().left > e.containerPos.right && t.start >= R) {
                  R = t.start;
                  L = n;
                  A = t;
                }
              });
              if (A) {
                A.remove();
                e.removeBullet(A);
                e.danmu.bulletBtn.main.queue.splice(L, 1);
                t.channel_id = A.channel_id;
                var j = A.channel_id[0];
                var D = A.channel_id[0] + A.channel_id[1];
                for (; j < D; j++) {
                  (l = i[j]).operating[t.mode] = true;
                  l.queue[t.mode].unshift(t);
                  if (t.prior) {
                    delete l.bookId[t.mode];
                  }
                  l.operating[t.mode] = false;
                }
                t.top = A.top;
                if (e.danmu.config.area && e.danmu.config.area.start) {
                  t.top += e.containerHeight * e.danmu.config.area.start;
                }
                return {
                  result: t,
                  message: "success"
                };
              }
            }
            if (t.prior) {
              if (t.bookChannelId || e.danmu.live) {
                if (n.player) {
                  n.bulletBtn.main.data.some(function (n) {
                    return n.id === t.id && (e.logger && e.logger.info(t.id + "号优先弹幕将于2秒后再次请求注册"), n.start += 2000, true);
                  });
                }
              } else {
                u = -1;
                var M = 0;
                var N = i.length - s;
                for (; M <= N; M++) {
                  a = true;
                  for (var Z = M; Z < M + s; Z++) {
                    if (i[Z].bookId[t.mode]) {
                      a = false;
                      break;
                    }
                  }
                  if (a) {
                    u = M;
                    break;
                  }
                }
                if (u !== -1) {
                  for (var z = u; z < u + s; z++) {
                    i[z].bookId[t.mode] = t.id;
                    if (e.logger) {
                      e.logger.info(z + "号轨道被" + t.id + "号优先弹幕预定");
                    }
                  }
                  if (n.player) {
                    n.bulletBtn.main.data.some(function (n) {
                      return n.id === t.id && (e.logger && e.logger.info(t.id + "号优先弹幕将于2秒后再次请求注册"), n.start += 2000, n.bookChannelId = [u, s], e.logger && e.logger.info(t.id + "号优先弹幕预定了" + u + "~" + (u + s - 1) + "号轨道"), true);
                    });
                  }
                }
              }
            }
            return {
              result: false,
              message: "no surplus will right"
            };
          }
        }, {
          key: "removeBullet",
          value: function (t) {
            if (this.logger) {
              this.logger.info("removeBullet " + (t.options.txt || "[DOM Element]"));
            }
            var e = this.channels;
            var n = t.channel_id;
            var i = undefined;
            var r = n[0];
            var o = n[0] + n[1];
            for (; r < o; r++) {
              if (i = e[r]) {
                i.operating[t.mode] = true;
                var s = -1;
                i.queue[t.mode].some(function (e, n) {
                  return e.id === t.id && (s = n, true);
                });
                if (s > -1) {
                  i.queue[t.mode].splice(s, 1);
                }
                i.operating[t.mode] = false;
              }
            }
            if (t.options.loop) {
              this.danmu.bulletBtn.main.playedData.push(t.options);
            }
          }
        }, {
          key: "resizeSync",
          value: function () {
            this.resize(true);
          }
        }, {
          key: "_initChannels",
          value: function () {
            if (this.danmu && this.danmu.config) {
              var t = this.danmu.config;
              var e = t.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
              var n = undefined;
              if (t.area) {
                var i = t.area;
                var r = i.lines;
                var o = i.start;
                var l = i.end;
                if (a.validAreaLineRule(r)) {
                  n = r;
                  if (this.direction === "b2t") {
                    this.width = n * e;
                  } else {
                    this.height = n * e;
                  }
                } else if (o >= 0 && l >= o) {
                  var u = l - o;
                  if (this.direction === "b2t") {
                    this.width = Math.floor(this.width * u);
                  } else {
                    this.height = Math.floor(this.height * u);
                  }
                }
              }
              if (!s.isNumber(n)) {
                n = this.direction === "b2t" ? Math.floor(this.width / e) : Math.floor(this.height / e);
              }
              var c = [];
              var h = 0;
              for (; h < n; h++) {
                c[h] = {
                  id: h,
                  queue: {
                    scroll: [],
                    top: [],
                    bottom: []
                  },
                  operating: {
                    scroll: false,
                    top: false,
                    bottom: false
                  },
                  bookId: {}
                };
              }
              return {
                channelSize: e,
                channelCount: n,
                channels: c
              };
            }
          }
        }, {
          key: "resize",
          value: function (t = false) {
            if (this.logger) {
              this.logger.info("resize");
            }
            var e = this;
            function n(t, e) {
              t[e] = {
                id: e,
                queue: {
                  scroll: [],
                  top: [],
                  bottom: []
                },
                operating: {
                  scroll: false,
                  top: false,
                  bottom: false
                },
                bookId: {}
              };
            }
            function i() {
              var t = e.danmu;
              var i = t.container;
              var r = t.bulletBtn;
              e.container = i;
              e.updatePos();
              e._cancelResizeTimer();
              if (r.main.data) {
                r.main.data.forEach(function (t) {
                  if (t.bookChannelId) {
                    delete t.bookChannelId;
                    if (e.logger) {
                      e.logger.info("resize导致" + t.id + "号优先弹幕预定取消");
                    }
                  }
                });
              }
              if (e.logger) {
                e.logger.info("resize导致所有轨道恢复正常使用");
              }
              e.width = e.containerWidth;
              e.height = e.containerHeight;
              var o = e._initChannels();
              var s = o.channelSize;
              var a = o.channels;
              if (e.channels) {
                if (e.channels.length <= a.length) {
                  (function (t, i) {
                    for (var r = 0; r < e.channels.length; r++) {
                      n(t, r);
                      (function (n) {
                        ["scroll", "top"].forEach(function (i) {
                          e.channels[n].queue[i].forEach(function (e) {
                            if (e.el) {
                              t[n].queue[i].push(e);
                            }
                          });
                        });
                      })(r);
                      (function (n) {
                        e.channels[n].queue.bottom.forEach(function (r) {
                          if (r.el && (t[n + t.length - e.channels.length].queue.bottom.push(r), r.channel_id[0] + r.channel_id[1] - 1 === n)) {
                            var o = [].concat(r.channel_id);
                            r.channel_id = [o[0] - e.channels.length + t.length, o[1]];
                            r.top = r.channel_id[0] * i;
                            if (e.danmu.config.area && e.danmu.config.area.start) {
                              r.top += e.containerHeight * e.danmu.config.area.start;
                            }
                            r.topInit();
                          }
                        });
                      })(r);
                    }
                    function o(e) {
                      ["scroll", "top", "bottom"].forEach(function (n) {
                        t[e].queue[n].forEach(function (t) {
                          t.resized = false;
                        });
                      });
                    }
                    var s = 0;
                    for (; s < t.length; s++) {
                      o(s);
                    }
                    e.channels = t;
                    if (e.direction === "b2t") {
                      e.channelWidth = i;
                    } else {
                      e.channelHeight = i;
                    }
                  })(a, s);
                } else {
                  (function (t, i) {
                    var r = ["scroll", "top", "bottom"];
                    function o(o) {
                      n(t, o);
                      r.forEach(function (n) {
                        if (n === "top" && o > Math.floor(t.length / 2)) ;else if (n === "bottom" && o <= Math.floor(t.length / 2)) ;else {
                          var r = n === "bottom" ? o - t.length + e.channels.length : o;
                          e.channels[r].queue[n].forEach(function (s, a) {
                            if (s.el) {
                              t[o].queue[n].push(s);
                              if (n === "bottom" && s.channel_id[0] + s.channel_id[1] - 1 === r) {
                                var l = [].concat(s.channel_id);
                                s.channel_id = [l[0] - e.channels.length + t.length, l[1]];
                                s.top = s.channel_id[0] * i;
                                if (e.danmu.config.area && e.danmu.config.area.start) {
                                  s.top += e.containerHeight * e.danmu.config.area.start;
                                }
                                s.topInit();
                              }
                              e.channels[r].queue[n].splice(a, 1);
                            }
                          });
                        }
                      });
                    }
                    var s = 0;
                    for (; s < t.length; s++) {
                      o(s);
                    }
                    function a(e) {
                      r.forEach(function (n) {
                        t[e].queue[n].forEach(function (t) {
                          t.resized = false;
                        });
                      });
                    }
                    for (s = 0; s < t.length; s++) {
                      a(s);
                    }
                    e.channels = t;
                    if (e.direction === "b2t") {
                      e.channelWidth = i;
                    } else {
                      e.channelHeight = i;
                    }
                  })(a, s);
                }
              }
              e.resizing = false;
            }
            if (!e.resizing) {
              e.resizing = true;
              if (t) {
                i();
              } else {
                this._cancelResizeTimer();
                this.resizeId = requestAnimationFrame(i);
              }
            }
          }
        }, {
          key: "_cancelResizeTimer",
          value: function () {
            if (this.resizeId) {
              cancelAnimationFrame(this.resizeId);
              this.resizeId = null;
            }
          }
        }, {
          key: "direction",
          get: function () {
            return this.danmu.direction;
          }
        }]);
        return e;
      }(o.default);
      e.default = l;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.validAreaLineRule = function (t) {
        return typeof t == "number" && t >= 0 && Number.isInteger(t);
      };
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = n(0);
      var o = function () {
        function t(e) {
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          e = {
            initDOM: function () {
              return document.createElement("div");
            },
            initSize: 10
          };
          this.init(e);
        }
        i(t, [{
          key: "init",
          value: function (t) {
            this.idleList = [];
            this.usingList = [];
            this._id = 0;
            this.options = t;
            this._expand(t.initSize);
          }
        }, {
          key: "use",
          value: function () {
            if (!this.idleList.length) {
              this._expand(1);
            }
            var t = this.idleList.shift();
            this.usingList.push(t);
            return t;
          }
        }, {
          key: "unused",
          value: function (t) {
            var e = this.usingList.indexOf(t);
            if (!(e < 0)) {
              this.usingList.splice(e, 1);
              t.style.opacity = 0;
              this.idleList.push(t);
            }
          }
        }, {
          key: "_expand",
          value: function (t) {
            for (var e = 0; e < t; e++) {
              this.idleList.push(this.options.initDOM(this._id++));
            }
          }
        }, {
          key: "destroy",
          value: function () {
            for (var t = 0; t < this.idleList.length; t++) {
              this.idleList[t].innerHTML = "";
              this.idleList[t].textcontent = "";
              this.clearElementStyle(this.idleList[t]);
            }
            for (var e = 0; e < this.usingList.length; e++) {
              this.usingList[e].innerHTML = "";
              this.usingList[e].textcontent = "";
              this.clearElementStyle(this.usingList[e]);
            }
            for (var n in this) {
              if (r.hasOwnProperty.call(this, n)) {
                delete this[n];
              }
            }
          }
        }, {
          key: "clearElementStyle",
          value: function (t) {
            var e = typeof window != "undefined" ? window.navigator.userAgent : null;
            if (e) {
              if (e.indexOf("MSIE ") > -1 || e.indexOf("Trident/") > -1) {
                r.styleUtil(t, "transform", "none");
              } else {
                t.setAttribute("style", "");
              }
            }
          }
        }]);
        return t;
      }();
      e.default = o;
      t.exports = e.default;
    }, function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: true
      });
      e.destroyObserver = e.unObserver = e.addObserver = undefined;
      var i = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          if (n) {
            t(e.prototype, n);
          }
          if (i) {
            t(e, i);
          }
          return e;
        };
      }();
      var r = n(0);
      var o = new (function () {
        function t() {
          var e = this;
          (function (t, e) {
            if (!(t instanceof e)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          this.__handlers = [];
          if (window.ResizeObserver) {
            try {
              this.observer = new window.ResizeObserver(r.throttle(function (t) {
                e.__trigger(t);
              }, 100));
            } catch (t) {}
          }
        }
        i(t, [{
          key: "addObserver",
          value: function (t, e) {
            if (this.observer && t) {
              if (this.observer) {
                this.observer.observe(t);
              }
              var n = this.__handlers;
              var i = -1;
              var r = 0;
              for (; r < n.length; r++) {
                if (n[r] && t === n[r].target) {
                  i = r;
                }
              }
              if (i > -1) {
                this.__handlers[i].handler.push(e);
              } else {
                this.__handlers.push({
                  target: t,
                  handler: [e]
                });
              }
            }
          }
        }, {
          key: "unObserver",
          value: function (t) {
            if (t) {
              var e = -1;
              this.__handlers.map(function (n, i) {
                if (t === n.target) {
                  e = i;
                }
              });
              if (this.observer) {
                this.observer.unobserve(t);
              }
              if (e > -1) {
                this.__handlers.splice(e, 1);
              }
            }
          }
        }, {
          key: "destroyObserver",
          value: function () {
            if (this.observer) {
              this.observer.disconnect();
            }
            this.observer = null;
            this.__handlers = null;
          }
        }, {
          key: "__runHandler",
          value: function (t) {
            var e = this.__handlers;
            var n = 0;
            for (; n < e.length; n++) {
              if (e[n] && t === e[n].target) {
                if (e[n].handler) {
                  e[n].handler.map(function (t) {
                    try {
                      t();
                    } catch (t) {}
                  });
                }
                break;
              }
            }
          }
        }, {
          key: "__trigger",
          value: function (t) {
            var e = this;
            t.map(function (t) {
              e.__runHandler(t.target);
            });
          }
        }]);
        return t;
      }())();
      e.addObserver = function (t, e) {
        o.addObserver(t, e);
      };
      e.unObserver = function (t, e) {
        o.unObserver(t, e);
      };
      e.destroyObserver = function (t, e) {
        o.destroyObserver(t, e);
      };
    }, function (t, e, n) {
      var i = n(35);
      if (typeof i == "string") {
        i = [[t.i, i, ""]];
      }
      n(37)(i, {
        hmr: true,
        transform: undefined,
        insertInto: undefined
      });
      if (i.locals) {
        t.exports = i.locals;
      }
    }, function (t, e, n) {
      (t.exports = n(36)(false)).push([t.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#fff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}", ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n = t[1] || "";
              var i = t[3];
              if (!i) {
                return n;
              }
              if (e && typeof btoa == "function") {
                var r = "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */";
                return [n].concat(i.sources.map(function (t) {
                  return "/*# sourceURL=" + i.sourceRoot + t + " */";
                })).concat([r]).join("\n");
              }
              return [n].join("\n");
            }(e, t);
            if (e[2]) {
              return "@media " + e[2] + "{" + n + "}";
            } else {
              return n;
            }
          }).join("");
        };
        e.i = function (t, n) {
          if (typeof t == "string") {
            t = [[null, t, ""]];
          }
          var i = {};
          var r = 0;
          for (; r < this.length; r++) {
            var o = this[r][0];
            if (typeof o == "number") {
              i[o] = true;
            }
          }
          for (r = 0; r < t.length; r++) {
            var s = t[r];
            if (typeof s[0] != "number" || !i[s[0]]) {
              if (n && !s[2]) {
                s[2] = n;
              } else if (n) {
                s[2] = "(" + s[2] + ") and (" + n + ")";
              }
              e.push(s);
            }
          }
        };
        return e;
      };
    }, function (t, e, n) {
      var i;
      var r;
      var o;
      var s = {};
      r = function () {
        return window && document && document.all && !window.atob;
      };
      function a() {
        if (o === undefined) {
          o = r.apply(this, arguments);
        }
        return o;
      }
      function l(t) {
        return document.querySelector(t);
      }
      i = {};
      function u(t) {
        if (typeof t == "function") {
          return t();
        }
        if (i[t] === undefined) {
          var e = l.call(this, t);
          if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
            try {
              e = e.contentDocument.head;
            } catch (t) {
              e = null;
            }
          }
          i[t] = e;
        }
        return i[t];
      }
      var c = null;
      var h = 0;
      var f = [];
      var d = n(38);
      function p(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          var r = s[i.id];
          if (r) {
            r.refs++;
            for (var o = 0; o < r.parts.length; o++) {
              r.parts[o](i.parts[o]);
            }
            for (; o < i.parts.length; o++) {
              r.parts.push(_(i.parts[o], e));
            }
          } else {
            var a = [];
            for (o = 0; o < i.parts.length; o++) {
              a.push(_(i.parts[o], e));
            }
            s[i.id] = {
              id: i.id,
              refs: 1,
              parts: a
            };
          }
        }
      }
      function g(t, e) {
        var n = [];
        var i = {};
        var r = 0;
        for (; r < t.length; r++) {
          var o = t[r];
          var s = e.base ? o[0] + e.base : o[0];
          var a = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
          if (i[s]) {
            i[s].parts.push(a);
          } else {
            n.push(i[s] = {
              id: s,
              parts: [a]
            });
          }
        }
        return n;
      }
      function v(t, e) {
        var n = u(t.insertInto);
        if (!n) {
          throw Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        }
        var i = f[f.length - 1];
        if (t.insertAt === "top") {
          if (i) {
            if (i.nextSibling) {
              n.insertBefore(e, i.nextSibling);
            } else {
              n.appendChild(e);
            }
          } else {
            n.insertBefore(e, n.firstChild);
          }
          f.push(e);
        } else if (t.insertAt === "bottom") {
          n.appendChild(e);
        } else {
          if (typeof t.insertAt != "object" || !t.insertAt.before) {
            throw Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          }
          var r = u(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, r);
        }
      }
      function m(t) {
        if (t.parentNode === null) {
          return false;
        }
        t.parentNode.removeChild(t);
        var e = f.indexOf(t);
        if (e >= 0) {
          f.splice(e, 1);
        }
      }
      function y(t) {
        var e = document.createElement("style");
        if (t.attrs.type === undefined) {
          t.attrs.type = "text/css";
        }
        b(e, t.attrs);
        v(t, e);
        return e;
      }
      function b(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }
      function _(t, e) {
        if (e.transform && t.css) {
          if (!(o = e.transform(t.css))) {
            return function () {};
          }
          t.css = o;
        }
        if (e.singleton) {
          var n;
          var i;
          var r;
          var o;
          var s;
          var a = h++;
          i = T.bind(null, n = c ||= y(e), a, false);
          r = T.bind(null, n, a, true);
        } else if (t.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function") {
          s = document.createElement("link");
          if (e.attrs.type === undefined) {
            e.attrs.type = "text/css";
          }
          e.attrs.rel = "stylesheet";
          b(s, e.attrs);
          v(e, s);
          i = w.bind(null, n = s, e);
          r = function () {
            m(n);
            if (n.href) {
              URL.revokeObjectURL(n.href);
            }
          };
        } else {
          i = O.bind(null, n = y(e));
          r = function () {
            m(n);
          };
        }
        i(t);
        return function (e) {
          if (e) {
            if (e.css !== t.css || e.media !== t.media || e.sourceMap !== t.sourceMap) {
              i(t = e);
            }
          } else {
            r();
          }
        };
      }
      t.exports = function (t, e) {
        if (typeof DEBUG != "undefined" && DEBUG && typeof document != "object") {
          throw Error("The style-loader cannot be used in a non-browser environment");
        }
        (e = e || {}).attrs = typeof e.attrs == "object" ? e.attrs : {};
        if (!e.singleton && typeof e.singleton != "boolean") {
          e.singleton = a();
        }
        e.insertInto ||= "head";
        e.insertAt ||= "bottom";
        var n = g(t, e);
        p(n, e);
        return function (t) {
          var i;
          var r = [];
          var o = 0;
          for (; o < n.length; o++) {
            var a = n[o];
            (i = s[a.id]).refs--;
            r.push(i);
          }
          if (t) {
            p(g(t, e), e);
          }
          o = 0;
          for (; o < r.length; o++) {
            if ((i = r[o]).refs === 0) {
              for (var l = 0; l < i.parts.length; l++) {
                i.parts[l]();
              }
              delete s[i.id];
            }
          }
        };
      };
      var x;
      x = [];
      function k(t, e) {
        x[t] = e;
        return x.filter(Boolean).join("\n");
      }
      function T(t, e, n, i) {
        var r = n ? "" : i.css;
        if (t.styleSheet) {
          t.styleSheet.cssText = k(e, r);
        } else {
          var o = document.createTextNode(r);
          var s = t.childNodes;
          if (s[e]) {
            t.removeChild(s[e]);
          }
          if (s.length) {
            t.insertBefore(o, s[e]);
          } else {
            t.appendChild(o);
          }
        }
      }
      function O(t, e) {
        var n = e.css;
        var i = e.media;
        if (i) {
          t.setAttribute("media", i);
        }
        if (t.styleSheet) {
          t.styleSheet.cssText = n;
        } else {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }
          t.appendChild(document.createTextNode(n));
        }
      }
      function w(t, e, n) {
        var i = n.css;
        var r = n.sourceMap;
        var o = e.convertToAbsoluteUrls === undefined && r;
        if (e.convertToAbsoluteUrls || o) {
          i = d(i);
        }
        if (r) {
          i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */";
        }
        var s = new Blob([i], {
          type: "text/css"
        });
        var a = t.href;
        t.href = URL.createObjectURL(s);
        if (a) {
          URL.revokeObjectURL(a);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = typeof window != "undefined" && window.location;
        if (!e) {
          throw Error("fixUrls requires window.location");
        }
        if (!t || typeof t != "string") {
          return t;
        }
        var n = e.protocol + "//" + e.host;
        var i = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)) {
            return t;
          } else {
            return "url(" + JSON.stringify(r.indexOf("//") === 0 ? r : r.indexOf("/") === 0 ? n + r : i + r.replace(/^\.\//, "")) + ")";
          }
        });
      };
    }]);
  };
  module.exports = n();
}