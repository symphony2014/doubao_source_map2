// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P2' to 'debounce'
// - Renamed export 'ZP' to 'domUtils'
// - Renamed export 'VQ' to 'getLanguage'
// - Renamed export 'F7' to 'isMediaElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 823968
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers_1 = require("babel-runtime-helpers_1") /*id: 538722*/;
  var xgplayerLogger = require("xgplayer-logger") /*id: 587555*/;
  var i = function () {
    function e(t) {
      babelRuntimeHelpers_1.classCallCheck(this, e);
      this.bufferedList = t;
    }
    babelRuntimeHelpers_1.createClass(e, [{
      key: "start",
      value: function (e) {
        return this.bufferedList[e].start;
      }
    }, {
      key: "end",
      value: function (e) {
        return this.bufferedList[e].end;
      }
    }, {
      key: "length",
      get: function () {
        return this.bufferedList.length;
      }
    }]);
    return e;
  }();
  var a = {};
  function u(e) {
    var t = babelRuntimeHelpers_1.typeOfHelper(e);
    return e !== null && (t === "object" || t === "function");
  }
  function c(e, t, n) {
    var r = true;
    var o = true;
    if (typeof e != "function") {
      throw TypeError("Expected a function");
    }
    if (u(n)) {
      r = "leading" in n ? !!n.leading : r;
      o = "trailing" in n ? !!n.trailing : o;
    }
    return function (e, t, n) {
      var r;
      var o;
      var i;
      var a;
      var c;
      var l;
      var s = 0;
      var d = false;
      var f = false;
      var p = true;
      var h = !t && t !== 0 && typeof window.requestAnimationFrame == "function";
      if (typeof e != "function") {
        throw TypeError("Expected a function");
      }
      function v(t) {
        var n = r;
        var i = o;
        r = o = undefined;
        s = t;
        return a = e.apply(i, n);
      }
      function m(e, t) {
        if (h) {
          window.cancelAnimationFrame(c);
          return window.requestAnimationFrame(e);
        } else {
          return setTimeout(e, t);
        }
      }
      function g(e) {
        var n = e - l;
        var r = e - s;
        return l === undefined || n >= t || n < 0 || f && r >= i;
      }
      function y() {
        var e;
        var n;
        var r;
        var o = Date.now();
        if (g(o)) {
          return x(o);
        }
        c = m(y, (e = o - l, n = o - s, r = t - e, f ? Math.min(r, i - n) : r));
      }
      function x(e) {
        c = undefined;
        if (p && r) {
          return v(e);
        } else {
          r = o = undefined;
          return a;
        }
      }
      function b() {
        var e;
        var n = Date.now();
        var i = g(n);
        var u = arguments.length;
        var p = Array(u);
        var h = 0;
        for (; h < u; h++) {
          p[h] = arguments[h];
        }
        r = p;
        o = this;
        l = n;
        if (i) {
          if (c === undefined) {
            s = e = l;
            c = m(y, t);
            if (d) {
              return v(e);
            } else {
              return a;
            }
          }
          if (f) {
            c = m(y, t);
            return v(l);
          }
        }
        if (c === undefined) {
          c = m(y, t);
        }
        return a;
      }
      t = +t || 0;
      if (u(n)) {
        d = !!n.leading;
        i = (f = "maxWait" in n) ? Math.max(+n.maxWait || 0, t) : i;
        p = "trailing" in n ? !!n.trailing : p;
      }
      b.cancel = function () {
        if (c !== undefined) {
          (function (e) {
            if (h) {
              return window.cancelAnimationFrame(e);
            }
            clearTimeout(e);
          })(c);
        }
        s = 0;
        r = l = o = c = undefined;
      };
      b.flush = function () {
        if (c === undefined) {
          return a;
        } else {
          return x(Date.now());
        }
      };
      b.pending = function () {
        return c !== undefined;
      };
      return b;
    }(e, t, {
      leading: r,
      trailing: o,
      maxWait: t
    });
  }
  function l() {
    var e = (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase();
    if (e === "zh-cn") {
      e = "zh";
    }
    return e;
  }
  function s(e, t, n) {
    if (e) {
      var r = e.getAttribute(n);
      return !!r && r === t && (e.tagName === "VIDEO" || e.tagName === "AUDIO");
    }
  }
  a.createDom = function (e = "div", t = "", n = {}, r = "") {
    var o = document.createElement(e);
    o.className = r;
    o.innerHTML = t;
    Object.keys(n).forEach(function (t) {
      var r = n[t];
      if (e === "video" || e === "audio" || e === "live-video") {
        if (r) {
          o.setAttribute(t, r);
        }
      } else {
        o.setAttribute(t, r);
      }
    });
    return o;
  };
  a.createDomFromHtml = function (e, t = {}, n = "") {
    try {
      var r = document.createElement("div");
      r.innerHTML = e;
      var i = r.children;
      r = null;
      if (i.length > 0) {
        i = i[0];
        if (n) {
          a.addClass(i, n);
        }
        if (t) {
          Object.keys(t).forEach(function (e) {
            i.setAttribute(e, t[e]);
          });
        }
        return i;
      }
      return null;
    } catch (e) {
      xgplayerLogger.logger.logError("util.createDomFromHtml", e);
      return null;
    }
  };
  a.hasClass = function (e, t) {
    if (!e || !t) {
      return false;
    }
    try {
      return Array.prototype.some.call(e.classList, function (e) {
        return e === t;
      });
    } catch (o) {
      var n = e.className && babelRuntimeHelpers_1.typeOfHelper(e.className) === "object" ? e.getAttribute("class") : e.className;
      return n && !!n.match(RegExp("(\\s|^)" + t + "(\\s|$)"));
    }
  };
  a.addClass = function (e, t) {
    if (e && t) {
      try {
        t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
          if (t) {
            e.classList.add(t);
          }
        });
      } catch (n) {
        if (!a.hasClass(e, t)) {
          if (e.className && babelRuntimeHelpers_1.typeOfHelper(e.className) === "object") {
            e.setAttribute("class", e.getAttribute("class") + " " + t);
          } else {
            e.className += " " + t;
          }
        }
      }
    }
  };
  a.removeClass = function (e, t) {
    if (e && t) {
      try {
        t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (t) {
          if (t) {
            e.classList.remove(t);
          }
        });
      } catch (n) {
        if (a.hasClass(e, t)) {
          t.split(/\s+/g).forEach(function (t) {
            var n = RegExp("(\\s|^)" + t + "(\\s|$)");
            if (e.className && babelRuntimeHelpers_1.typeOfHelper(e.className) === "object") {
              e.setAttribute("class", e.getAttribute("class").replace(n, " "));
            } else {
              e.className = e.className.replace(n, " ");
            }
          });
        }
      }
    }
  };
  a.toggleClass = function (e, t) {
    if (e) {
      t.split(/\s+/g).forEach(function (t) {
        if (a.hasClass(e, t)) {
          a.removeClass(e, t);
        } else {
          a.addClass(e, t);
        }
      });
    }
  };
  a.classNames = function () {
    var e = arguments;
    var t = [];
    function n(n) {
      if (a.typeOf(e[n]) === "String") {
        t.push(e[n]);
      } else if (a.typeOf(e[n]) === "Object") {
        Object.keys(e[n]).map(function (r) {
          if (e[n][r]) {
            t.push(r);
          }
        });
      }
    }
    var r = 0;
    for (; r < arguments.length; r++) {
      n(r);
    }
    return t.join(" ");
  };
  a.findDom = function () {
    var e;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var n = arguments.length > 1 ? arguments[1] : undefined;
    try {
      e = t.querySelector(n);
    } catch (r) {
      xgplayerLogger.logger.logError("util.findDom", r);
      if (n.indexOf("#") === 0) {
        e = t.getElementById(n.slice(1));
      }
    }
    return e;
  };
  a.getCss = function (e, t) {
    if (e.currentStyle) {
      return e.currentStyle[t];
    } else {
      return document.defaultView.getComputedStyle(e, false)[t];
    }
  };
  a.padStart = function (e, t, n) {
    var r = String(n);
    var o = t >> 0;
    var i = Math.ceil(o / r.length);
    var a = [];
    var u = String(e);
    while (i--) {
      a.push(r);
    }
    return a.join("").substring(0, o - u.length) + u;
  };
  a.format = function (e) {
    if (window.isNaN(e)) {
      return "";
    }
    e = Math.round(e);
    var t = a.padStart(Math.floor(e / 3600), 2, 0);
    var n = a.padStart(Math.floor((e - t * 3600) / 60), 2, 0);
    var r = a.padStart(Math.floor(e - t * 3600 - n * 60), 2, 0);
    return (t === "00" ? [n, r] : [t, n, r]).join(":");
  };
  a.event = function (e) {
    if (e.touches) {
      var t = e.touches[0] || e.changedTouches[0];
      e.clientX = t.clientX || 0;
      e.clientY = t.clientY || 0;
      e.offsetX = t.pageX - t.target.offsetLeft;
      e.offsetY = t.pageY - t.target.offsetTop;
    }
    e._target = e.target || e.srcElement;
  };
  a.typeOf = function (e) {
    return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0];
  };
  a.deepCopy = function (e, t) {
    if (a.typeOf(t) === "Object" && a.typeOf(e) === "Object") {
      Object.keys(t).forEach(function (n) {
        if (a.typeOf(t[n]) !== "Object" || t[n] instanceof Node) {
          if (a.typeOf(t[n]) === "Array") {
            e[n] = a.typeOf(e[n]) === "Array" ? e[n].concat(t[n]) : t[n];
          } else {
            e[n] = t[n];
          }
        } else if (e[n] === undefined || e[n] === undefined) {
          e[n] = t[n];
        } else {
          a.deepCopy(e[n], t[n]);
        }
      });
      return e;
    }
  };
  a.deepMerge = function (e, t) {
    Object.keys(t).map(function (n) {
      if (a.typeOf(t[n]) === "Array" && a.typeOf(e[n]) === "Array") {
        if (a.typeOf(e[n]) === "Array") {
          var o;
          (o = e[n]).push.apply(o, babelRuntimeHelpers_1.toArray(t[n]));
        }
      } else if (a.typeOf(e[n]) !== a.typeOf(t[n]) || e[n] === null || a.typeOf(e[n]) !== "Object" || t[n] instanceof window.Node) {
        if (t[n] !== null) {
          e[n] = t[n];
        }
      } else {
        a.deepMerge(e[n], t[n]);
      }
    });
    return e;
  };
  a.getBgImage = function (e) {
    var t = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage;
    if (!t || t === "none") {
      return "";
    }
    var n = document.createElement("a");
    n.href = t.replace(/url\("|"\)/g, "");
    return n.href;
  };
  a.copyDom = function (e) {
    if (!e || e.nodeType !== 1) {
      return "";
    }
    var t = document.createElement(e.tagName);
    Array.prototype.forEach.call(e.attributes, function (e) {
      t.setAttribute(e.name, e.value);
    });
    if (e.innerHTML) {
      t.innerHTML = e.innerHTML;
    }
    return t;
  };
  a.setInterval = function (e, t, n, r) {
    e._interval[t] ||= window.setInterval(n.bind(e), r);
  };
  a.clearInterval = function (e, t) {
    clearInterval(e._interval[t]);
    e._interval[t] = null;
  };
  a.setTimeout = function (e, t, n) {
    e._timers ||= [];
    var r = setTimeout(function () {
      t();
      a.clearTimeout(e, r);
    }, n);
    e._timers.push(r);
    return r;
  };
  a.clearTimeout = function (e, t) {
    var n = e._timers;
    if (a.typeOf(n) === "Array") {
      for (var r = 0; r < n.length; r++) {
        if (n[r] === t) {
          n.splice(r, 1);
          clearTimeout(t);
          break;
        }
      }
    } else {
      clearTimeout(t);
    }
  };
  a.clearAllTimers = function (e) {
    var t = e._timers;
    if (a.typeOf(t) === "Array") {
      t.map(function (e) {
        clearTimeout(e);
      });
      e._timerIds = [];
    }
  };
  a.createImgBtn = function (e, t, n, r) {
    var o;
    var i;
    var u;
    var c = a.createDom(`xg-${e}`, "", {}, `xgplayer-${e}-img`);
    c.style.backgroundImage = `url("${t}")`;
    if (n && r) {
      ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function (e) {
        return !(n.indexOf(e) > -1) || !(r.indexOf(e) > -1) || (o = parseFloat(n.slice(0, n.indexOf(e)).trim()), i = parseFloat(r.slice(0, r.indexOf(e)).trim()), u = e, false);
      });
      c.style.width = `${o}${u}`;
      c.style.height = `${i}${u}`;
      c.style.backgroundSize = `${o}${u} ${i}${u}`;
      if (e === "start") {
        c.style.margin = `-${i / 2}${u} auto auto -${o / 2}${u}`;
      } else {
        c.style.margin = "auto 5px auto 5px";
      }
    }
    return c;
  };
  a.Hex2RGBA = function (e, t) {
    var n = [];
    if (/^\#[0-9A-F]{3}$/i.test(e)) {
      var r = "#";
      e.replace(/[0-9A-F]/ig, function (e) {
        r += e + e;
      });
      e = r;
    }
    if (/^#[0-9A-F]{6}$/i.test(e)) {
      e.replace(/[0-9A-F]{2}/ig, function (e) {
        n.push(parseInt(e, 16));
      });
      return `rgba(${n.join(",")}, ${t})`;
    } else {
      return "rgba(255, 255, 255, 0.1)";
    }
  };
  a.getFullScreenEl = function () {
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  };
  a.checkIsFunction = function (e) {
    return e && typeof e == "function";
  };
  a.checkIsObject = function (e) {
    return e !== null && babelRuntimeHelpers_1.typeOfHelper(e) === "object";
  };
  a.hide = function (e) {
    e.style.display = "none";
  };
  a.show = function (e, t) {
    e.style.display = t || "block";
  };
  a.isUndefined = function (e) {
    if (e == null) {
      return true;
    }
  };
  a.isNotNull = function (e) {
    return e != null;
  };
  a.setStyleFromCsstext = function (e, t) {
    if (t) {
      if (a.typeOf(t) === "String") {
        t.replace(/\s+/g, "").split(";").map(function (t) {
          if (t) {
            var n = t.split(":");
            if (n.length > 1) {
              e.style[n[0]] = n[1];
            }
          }
        });
      } else {
        Object.keys(t).map(function (n) {
          e.style[n] = t[n];
        });
      }
    }
  };
  a.filterStyleFromText = function (e, t = ["width", "height", "top", "left", "bottom", "right", "position", "z-index", "padding", "margin", "transform"]) {
    var n = e.style.cssText;
    if (!n) {
      return {};
    }
    var r = n.replace(/\s+/g, "").split(";");
    var o = {};
    var i = {};
    r.map(function (e) {
      if (e) {
        var n = e.split(":");
        if (n.length > 1) {
          if (function (e, t) {
            var n = 0;
            var r = t.length;
            for (; n < r; n++) {
              if (e.indexOf(t[n]) > -1) {
                return true;
              }
            }
            return false;
          }(n[0], t)) {
            o[n[0]] = n[1];
          } else {
            i[n[0]] = n[1];
          }
        }
      }
    });
    e.setAttribute("style", "");
    Object.keys(i).map(function (t) {
      e.style[t] = i[t];
    });
    return o;
  };
  a.getStyleFromCsstext = function (e) {
    var t = e.style.cssText;
    if (!t) {
      return {};
    }
    var n = t.replace(/\s+/g, "").split(";");
    var r = {};
    n.map(function (e) {
      if (e) {
        var t = e.split(":");
        if (t.length > 1) {
          r[t[0]] = t[1];
        }
      }
    });
    return r;
  };
  a.preloadImg = function (e, t = function () {}, n = function () {}) {
    if (e) {
      var r = new window.Image();
      r.onload = function (e) {
        r = null;
        if (t) {
          t(e);
        }
      };
      r.onerror = function (e) {
        r = null;
        if (n) {
          n(e);
        }
      };
      r.src = e;
    }
  };
  a.stopPropagation = function (e) {
    if (e) {
      e.stopPropagation();
    }
  };
  a.scrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  };
  a.scrollLeft = function () {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  };
  a.checkTouchSupport = function () {
    return "ontouchstart" in window;
  };
  a.getBuffered2 = function (e, t = 0.5) {
    var n = [];
    var r = 0;
    for (; r < e.length; r++) {
      n.push({
        start: e.start(r) < 0.5 ? 0 : e.start(r),
        end: e.end(r)
      });
    }
    n.sort(function (e, t) {
      var n = e.start - t.start;
      return n || t.end - e.end;
    });
    var o = [];
    if (t) {
      for (var a = 0; a < n.length; a++) {
        var u = o.length;
        if (u) {
          var c = o[u - 1].end;
          if (n[a].start - c < t) {
            if (n[a].end > c) {
              o[u - 1].end = n[a].end;
            }
          } else {
            o.push(n[a]);
          }
        } else {
          o.push(n[a]);
        }
      }
    } else {
      o = n;
    }
    return new i(o);
  };
  a.getEventPos = function (e, t = 1) {
    if (e.touches && e.touches.length > 0) {
      e = e.touches[0];
    }
    return {
      x: e.x / t,
      y: e.y / t,
      clientX: e.clientX / t,
      clientY: e.clientY / t,
      offsetX: e.offsetX / t,
      offsetY: e.offsetY / t,
      pageX: e.pageX / t,
      pageY: e.pageY / t
    };
  };
  a.requestAnimationFrame = function (e) {
    var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    if (t) {
      return t(e);
    }
  };
  a.getHostFromUrl = function (e) {
    if (a.typeOf(e) !== "String") {
      return "";
    }
    var t = e.split("/");
    var n = "";
    if (t.length > 3 && t[2]) {
      n = t[2];
    }
    return n;
  };
  a.cancelAnimationFrame = function (e) {
    var t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.cancelRequestAnimationFrame;
    if (t) {
      t(e);
    }
  };
  a.isMSE = function (e) {
    return !!e && !!(e instanceof HTMLMediaElement) && (/^blob/.test(e.currentSrc) || /^blob/.test(e.src));
  };
  a.generateSessionId = function (e = 0) {
    var t = new Date().getTime();
    try {
      e = parseInt(e);
    } catch (t) {
      e = 0;
    }
    t += e;
    if (window.performance && typeof window.performance.now == "function") {
      t += parseInt(window.performance.now());
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var n = (t + Math.random() * 16) % 16 | 0;
      t = Math.floor(t / 16);
      return (e === "x" ? n : n & 3 | 8).toString(16);
    });
  };
  a.createEvent = function (e) {
    var t;
    if (typeof window.Event == "function") {
      t = new Event(e);
    } else {
      (t = document.createEvent("Event")).initEvent(e, true, true);
    }
    return t;
  };
  a.adjustTimeByDuration = function (e, t, n) {
    if (t && e && (e > t || n && e < t)) {
      return t;
    } else {
      return e;
    }
  };
  a.createPositionBar = function (e, t) {
    var n = a.createDom("xg-bar", "", {
      "data-index": -1
    }, e);
    t.appendChild(n);
    return n;
  };
  a.getTransformStyle = function (e = {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0
  }) {
    return `scale(${e.scale || 1}) translate(${e.x || 0}%, ${e.y || 0}%) rotate(${e.rotate || 0}deg)`;
  };
  a.convertDeg = function (e) {
    if (Math.abs(e) <= 1) {
      return e * 360;
    } else {
      return e % 360;
    }
  };
  require.d(exports, {
    debounce: function () {
      return c;
    },
    domUtils: function () {
      return a;
    },
    getLanguage: function () {
      return l;
    },
    isMediaElement: function () {
      return s;
    }
  });
}