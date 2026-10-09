// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 524625
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return getComputedStyle(e);
  }
  function r(e, t) {
    for (var n in t) {
      var i = t[n];
      if (typeof i == "number") {
        i += "px";
      }
      e.style[n] = i;
    }
    return e;
  }
  function o(e) {
    var t = document.createElement("div");
    t.className = e;
    return t;
  }
  var s = typeof Element != "undefined" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
  function a(e, t) {
    if (!s) {
      throw Error("No element matching method supported");
    }
    return s.call(e, t);
  }
  function l(e) {
    if (e.remove) {
      e.remove();
    } else if (e.parentNode) {
      e.parentNode.removeChild(e);
    }
  }
  function u(e, t) {
    return Array.prototype.filter.call(e.children, function (e) {
      return a(e, t);
    });
  }
  var h = {
    main: "ps",
    rtl: "ps__rtl",
    element: {
      thumb: function (e) {
        return "ps__thumb-" + e;
      },
      rail: function (e) {
        return "ps__rail-" + e;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      clicking: "ps--clicking",
      active: function (e) {
        return "ps--active-" + e;
      },
      scrolling: function (e) {
        return "ps--scrolling-" + e;
      }
    }
  };
  var c = {
    x: null,
    y: null
  };
  function d(e, t) {
    var n = e.element.classList;
    var i = h.state.scrolling(t);
    if (n.contains(i)) {
      clearTimeout(c[t]);
    } else {
      n.add(i);
    }
  }
  function f(e, t) {
    c[t] = setTimeout(function () {
      return e.isAlive && e.element.classList.remove(h.state.scrolling(t));
    }, e.settings.scrollingThreshold);
  }
  function v(e) {
    this.element = e;
    this.handlers = {};
  }
  var g = {
    isEmpty: {
      configurable: true
    }
  };
  v.prototype.bind = function (e, t) {
    if (this.handlers[e] === undefined) {
      this.handlers[e] = [];
    }
    this.handlers[e].push(t);
    this.element.addEventListener(e, t, false);
  };
  v.prototype.unbind = function (e, t) {
    var n = this;
    this.handlers[e] = this.handlers[e].filter(function (i) {
      return !!t && i !== t || (n.element.removeEventListener(e, i, false), false);
    });
  };
  v.prototype.unbindAll = function () {
    for (var e in this.handlers) {
      this.unbind(e);
    }
  };
  g.isEmpty.get = function () {
    var e = this;
    return Object.keys(this.handlers).every(function (t) {
      return e.handlers[t].length === 0;
    });
  };
  Object.defineProperties(v.prototype, g);
  function p() {
    this.eventElements = [];
  }
  function y(e) {
    if (typeof window.CustomEvent == "function") {
      return new CustomEvent(e);
    }
    var t = document.createEvent("CustomEvent");
    t.initCustomEvent(e, false, false, undefined);
    return t;
  }
  function L(e, t, n, i, r) {
    var o;
    if (i === undefined) {
      i = true;
    }
    if (r === undefined) {
      r = false;
    }
    if (t === "top") {
      o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
    } else if (t === "left") {
      o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    } else {
      throw Error("A proper axis should be provided");
    }
    (function (e, t, n, i, r) {
      var o = n[0];
      var s = n[1];
      var a = n[2];
      var l = n[3];
      var u = n[4];
      var h = n[5];
      if (i === undefined) {
        i = true;
      }
      if (r === undefined) {
        r = false;
      }
      var c = e.element;
      e.reach[l] = null;
      if (c[a] < 1) {
        e.reach[l] = "start";
      }
      if (c[a] > e[o] - e[s] - 1) {
        e.reach[l] = "end";
      }
      if (t && (c.dispatchEvent(y("ps-scroll-" + l)), t < 0 ? c.dispatchEvent(y("ps-scroll-" + u)) : t > 0 && c.dispatchEvent(y("ps-scroll-" + h)), i)) {
        d(e, l);
        f(e, l);
      }
      if (e.reach[l] && (t || r)) {
        c.dispatchEvent(y("ps-" + l + "-reach-" + e.reach[l]));
      }
    })(e, n, o, i, r);
  }
  function m(e) {
    return parseInt(e, 10) || 0;
  }
  p.prototype.eventElement = function (e) {
    var t = this.eventElements.filter(function (t) {
      return t.element === e;
    })[0];
    if (!t) {
      t = new v(e);
      this.eventElements.push(t);
    }
    return t;
  };
  p.prototype.bind = function (e, t, n) {
    this.eventElement(e).bind(t, n);
  };
  p.prototype.unbind = function (e, t, n) {
    var i = this.eventElement(e);
    i.unbind(t, n);
    if (i.isEmpty) {
      this.eventElements.splice(this.eventElements.indexOf(i), 1);
    }
  };
  p.prototype.unbindAll = function () {
    this.eventElements.forEach(function (e) {
      return e.unbindAll();
    });
    this.eventElements = [];
  };
  p.prototype.once = function (e, t, n) {
    var i = this.eventElement(e);
    function r(e) {
      i.unbind(t, r);
      n(e);
    }
    i.bind(t, r);
  };
  var b = {
    isWebKit: typeof document != "undefined" && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: typeof window != "undefined" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: typeof navigator != "undefined" && navigator.msMaxTouchPoints,
    isChrome: typeof navigator != "undefined" && /Chrome/i.test(navigator && navigator.userAgent)
  };
  function w(e) {
    var t;
    var n;
    var i;
    var o;
    var s;
    var a = e.element;
    var c = Math.floor(a.scrollTop);
    var d = a.getBoundingClientRect();
    e.containerWidth = Math.round(d.width);
    e.containerHeight = Math.round(d.height);
    e.contentWidth = a.scrollWidth;
    e.contentHeight = a.scrollHeight;
    if (!a.contains(e.scrollbarXRail)) {
      u(a, h.element.rail("x")).forEach(function (e) {
        return l(e);
      });
      a.appendChild(e.scrollbarXRail);
    }
    if (!a.contains(e.scrollbarYRail)) {
      u(a, h.element.rail("y")).forEach(function (e) {
        return l(e);
      });
      a.appendChild(e.scrollbarYRail);
    }
    if (!e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth) {
      e.scrollbarXActive = true;
      e.railXWidth = e.containerWidth - e.railXMarginWidth;
      e.railXRatio = e.containerWidth / e.railXWidth;
      e.scrollbarXWidth = R(e, m(e.railXWidth * e.containerWidth / e.contentWidth));
      e.scrollbarXLeft = m((e.negativeScrollAdjustment + a.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth));
    } else {
      e.scrollbarXActive = false;
    }
    if (!e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight) {
      e.scrollbarYActive = true;
      e.railYHeight = e.containerHeight - e.railYMarginHeight;
      e.railYRatio = e.containerHeight / e.railYHeight;
      e.scrollbarYHeight = R(e, m(e.railYHeight * e.containerHeight / e.contentHeight));
      e.scrollbarYTop = m(c * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight));
    } else {
      e.scrollbarYActive = false;
    }
    if (e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth) {
      e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth;
    }
    if (e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight) {
      e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight;
    }
    t = a;
    i = {
      width: (n = e).railXWidth
    };
    o = Math.floor(t.scrollTop);
    if (n.isRtl) {
      i.left = n.negativeScrollAdjustment + t.scrollLeft + n.containerWidth - n.contentWidth;
    } else {
      i.left = t.scrollLeft;
    }
    if (n.isScrollbarXUsingBottom) {
      i.bottom = n.scrollbarXBottom - o;
    } else {
      i.top = n.scrollbarXTop + o;
    }
    r(n.scrollbarXRail, i);
    s = {
      top: o,
      height: n.railYHeight
    };
    if (n.isScrollbarYUsingRight) {
      if (n.isRtl) {
        s.right = n.contentWidth - (n.negativeScrollAdjustment + t.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9;
      } else {
        s.right = n.scrollbarYRight - t.scrollLeft;
      }
    } else if (n.isRtl) {
      s.left = n.negativeScrollAdjustment + t.scrollLeft + n.containerWidth * 2 - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth;
    } else {
      s.left = n.scrollbarYLeft + t.scrollLeft;
    }
    r(n.scrollbarYRail, s);
    r(n.scrollbarX, {
      left: n.scrollbarXLeft,
      width: n.scrollbarXWidth - n.railBorderXWidth
    });
    r(n.scrollbarY, {
      top: n.scrollbarYTop,
      height: n.scrollbarYHeight - n.railBorderYWidth
    });
    if (e.scrollbarXActive) {
      a.classList.add(h.state.active("x"));
    } else {
      a.classList.remove(h.state.active("x"));
      e.scrollbarXWidth = 0;
      e.scrollbarXLeft = 0;
      a.scrollLeft = e.isRtl === true ? e.contentWidth : 0;
    }
    if (e.scrollbarYActive) {
      a.classList.add(h.state.active("y"));
    } else {
      a.classList.remove(h.state.active("y"));
      e.scrollbarYHeight = 0;
      e.scrollbarYTop = 0;
      a.scrollTop = 0;
    }
  }
  function R(e, t) {
    if (e.settings.minScrollbarLength) {
      t = Math.max(t, e.settings.minScrollbarLength);
    }
    if (e.settings.maxScrollbarLength) {
      t = Math.min(t, e.settings.maxScrollbarLength);
    }
    return t;
  }
  function x(e, t) {
    var n = t[0];
    var i = t[1];
    var r = t[2];
    var o = t[3];
    var s = t[4];
    var a = t[5];
    var l = t[6];
    var u = t[7];
    var c = t[8];
    var v = e.element;
    var g = null;
    var p = null;
    var y = null;
    function L(t) {
      if (t.touches && t.touches[0]) {
        t[r] = t.touches[0].pageY;
      }
      v[l] = g + y * (t[r] - p);
      d(e, u);
      w(e);
      t.stopPropagation();
      if (t.type.startsWith("touch") && t.changedTouches.length > 1) {
        t.preventDefault();
      }
    }
    function m() {
      f(e, u);
      e[c].classList.remove(h.state.clicking);
      e.event.unbind(e.ownerDocument, "mousemove", L);
    }
    function b(t, s) {
      g = v[l];
      if (s && t.touches) {
        t[r] = t.touches[0].pageY;
      }
      p = t[r];
      y = (e[i] - e[n]) / (e[o] - e[a]);
      if (s) {
        e.event.bind(e.ownerDocument, "touchmove", L);
      } else {
        e.event.bind(e.ownerDocument, "mousemove", L);
        e.event.once(e.ownerDocument, "mouseup", m);
        t.preventDefault();
      }
      e[c].classList.add(h.state.clicking);
      t.stopPropagation();
    }
    e.event.bind(e[s], "mousedown", function (e) {
      b(e);
    });
    e.event.bind(e[s], "touchstart", function (e) {
      b(e, true);
    });
  }
  var S = {
    "click-rail": function (e) {
      e.element;
      e.event.bind(e.scrollbarY, "mousedown", function (e) {
        return e.stopPropagation();
      });
      e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
        var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
        e.element.scrollTop += n * e.containerHeight;
        w(e);
        t.stopPropagation();
      });
      e.event.bind(e.scrollbarX, "mousedown", function (e) {
        return e.stopPropagation();
      });
      e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
        var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
        e.element.scrollLeft += n * e.containerWidth;
        w(e);
        t.stopPropagation();
      });
    },
    "drag-thumb": function (e) {
      x(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]);
      x(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
    },
    keyboard: function (e) {
      var t = e.element;
      e.event.bind(e.ownerDocument, "keydown", function (n) {
        if ((!n.isDefaultPrevented || !n.isDefaultPrevented()) && !n.defaultPrevented && (a(t, ":hover") || a(e.scrollbarX, ":focus") || a(e.scrollbarY, ":focus"))) {
          var i;
          var r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
          if (r) {
            if (r.tagName === "IFRAME") {
              r = r.contentDocument.activeElement;
            } else {
              while (r.shadowRoot) {
                r = r.shadowRoot.activeElement;
              }
            }
            if (a(i = r, "input,[contenteditable]") || a(i, "select,[contenteditable]") || a(i, "textarea,[contenteditable]") || a(i, "button,[contenteditable]")) {
              return;
            }
          }
          var o = 0;
          var s = 0;
          switch (n.which) {
            case 37:
              o = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
              break;
            case 38:
              s = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
              break;
            case 39:
              o = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
              break;
            case 40:
              s = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
              break;
            case 32:
              s = n.shiftKey ? e.containerHeight : -e.containerHeight;
              break;
            case 33:
              s = e.containerHeight;
              break;
            case 34:
              s = -e.containerHeight;
              break;
            case 36:
              s = e.contentHeight;
              break;
            case 35:
              s = -e.contentHeight;
              break;
            default:
              return;
          }
          if ((!e.settings.suppressScrollX || o === 0) && (!e.settings.suppressScrollY || s === 0)) {
            t.scrollTop -= s;
            t.scrollLeft += o;
            w(e);
            if (function (n, i) {
              var r = Math.floor(t.scrollTop);
              if (n === 0) {
                if (!e.scrollbarYActive) {
                  return false;
                }
                if (r === 0 && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) {
                  return !e.settings.wheelPropagation;
                }
              }
              var o = t.scrollLeft;
              if (i === 0) {
                if (!e.scrollbarXActive) {
                  return false;
                }
                if (o === 0 && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) {
                  return !e.settings.wheelPropagation;
                }
              }
              return true;
            }(o, s)) {
              n.preventDefault();
            }
          }
        }
      });
    },
    wheel: function (e) {
      var t = e.element;
      function n(n) {
        var r;
        var o;
        var s;
        var a;
        var l;
        var u;
        var c;
        var d;
        r = n.deltaX;
        o = n.deltaY * -1;
        var f = ((r === undefined || o === undefined) && (r = n.wheelDeltaX * -1 / 6, o = n.wheelDeltaY / 6), n.deltaMode && n.deltaMode === 1 && (r *= 10, o *= 10), r != r && o != o && (r = 0, o = n.wheelDelta), n.shiftKey) ? [-o, -r] : [r, o];
        var v = f[0];
        var g = f[1];
        if (!function (e, n, r) {
          if (!b.isWebKit && t.querySelector("select:focus")) {
            return true;
          }
          if (!t.contains(e)) {
            return false;
          }
          for (var o = e; o && o !== t;) {
            if (o.classList.contains(h.element.consuming)) {
              return true;
            }
            var s = i(o);
            if (r && s.overflowY.match(/(scroll|auto)/)) {
              var a = o.scrollHeight - o.clientHeight;
              if (a > 0 && (o.scrollTop > 0 && r < 0 || o.scrollTop < a && r > 0)) {
                return true;
              }
            }
            if (n && s.overflowX.match(/(scroll|auto)/)) {
              var l = o.scrollWidth - o.clientWidth;
              if (l > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < l && n > 0)) {
                return true;
              }
            }
            o = o.parentNode;
          }
          return false;
        }(n.target, v, g)) {
          var p = false;
          if (e.settings.useBothWheelAxes) {
            if (e.scrollbarYActive && !e.scrollbarXActive) {
              if (g) {
                t.scrollTop -= g * e.settings.wheelSpeed;
              } else {
                t.scrollTop += v * e.settings.wheelSpeed;
              }
              p = true;
            } else if (e.scrollbarXActive && !e.scrollbarYActive) {
              if (v) {
                t.scrollLeft += v * e.settings.wheelSpeed;
              } else {
                t.scrollLeft -= g * e.settings.wheelSpeed;
              }
              p = true;
            }
          } else {
            t.scrollTop -= g * e.settings.wheelSpeed;
            t.scrollLeft += v * e.settings.wheelSpeed;
          }
          w(e);
          if ((p = p || (a = Math.floor(t.scrollTop), l = t.scrollTop === 0, u = a + t.offsetHeight === t.scrollHeight, c = t.scrollLeft === 0, d = t.scrollLeft + t.offsetWidth === t.scrollWidth, !(Math.abs(g) > Math.abs(v) ? l || u : c || d) || !e.settings.wheelPropagation)) && !n.ctrlKey) {
            n.stopPropagation();
            n.preventDefault();
          }
        }
      }
      if (window.onwheel !== undefined) {
        e.event.bind(t, "wheel", n);
      } else if (window.onmousewheel !== undefined) {
        e.event.bind(t, "mousewheel", n);
      }
    },
    touch: function (e) {
      if (b.supportsTouch || b.supportsIePointer) {
        var t = e.element;
        var n = {};
        var r = 0;
        var o = {};
        var s = null;
        if (b.supportsTouch) {
          e.event.bind(t, "touchstart", c);
          e.event.bind(t, "touchmove", d);
          e.event.bind(t, "touchend", f);
        } else if (b.supportsIePointer) {
          if (window.PointerEvent) {
            e.event.bind(t, "pointerdown", c);
            e.event.bind(t, "pointermove", d);
            e.event.bind(t, "pointerup", f);
          } else if (window.MSPointerEvent) {
            e.event.bind(t, "MSPointerDown", c);
            e.event.bind(t, "MSPointerMove", d);
            e.event.bind(t, "MSPointerUp", f);
          }
        }
      }
      function a(n, i) {
        t.scrollTop -= i;
        t.scrollLeft -= n;
        w(e);
      }
      function l(e) {
        if (e.targetTouches) {
          return e.targetTouches[0];
        } else {
          return e;
        }
      }
      function u(e) {
        return (!e.pointerType || e.pointerType !== "pen" || e.buttons !== 0) && (!!e.targetTouches && e.targetTouches.length === 1 || !!e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE);
      }
      function c(e) {
        if (u(e)) {
          var t = l(e);
          n.pageX = t.pageX;
          n.pageY = t.pageY;
          r = new Date().getTime();
          if (s !== null) {
            clearInterval(s);
          }
        }
      }
      function d(s) {
        if (u(s)) {
          var c = l(s);
          var d = {
            pageX: c.pageX,
            pageY: c.pageY
          };
          var f = d.pageX - n.pageX;
          var v = d.pageY - n.pageY;
          if (!function (e, n, r) {
            if (!t.contains(e)) {
              return false;
            }
            for (var o = e; o && o !== t;) {
              if (o.classList.contains(h.element.consuming)) {
                return true;
              }
              var s = i(o);
              if (r && s.overflowY.match(/(scroll|auto)/)) {
                var a = o.scrollHeight - o.clientHeight;
                if (a > 0 && (o.scrollTop > 0 && r < 0 || o.scrollTop < a && r > 0)) {
                  return true;
                }
              }
              if (n && s.overflowX.match(/(scroll|auto)/)) {
                var l = o.scrollWidth - o.clientWidth;
                if (l > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < l && n > 0)) {
                  return true;
                }
              }
              o = o.parentNode;
            }
            return false;
          }(s.target, f, v)) {
            a(f, v);
            n = d;
            var g = new Date().getTime();
            var p = g - r;
            if (p > 0) {
              o.x = f / p;
              o.y = v / p;
              r = g;
            }
            if (function (n, i) {
              var r = Math.floor(t.scrollTop);
              var o = t.scrollLeft;
              var s = Math.abs(n);
              var a = Math.abs(i);
              if (a > s) {
                if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && r === 0) {
                  return window.scrollY === 0 && i > 0 && b.isChrome;
                }
              } else if (s > a && n < 0) {
                e.contentWidth;
                e.containerWidth;
              }
              return true;
            }(f, v)) {
              s.preventDefault();
            }
          }
        }
      }
      function f() {
        if (e.settings.swipeEasing) {
          clearInterval(s);
          s = setInterval(function () {
            if (e.isInitialized || !o.x && !o.y || Math.abs(o.x) < 0.01 && Math.abs(o.y) < 0.01 || !e.element) {
              clearInterval(s);
              return;
            }
            a(o.x * 30, o.y * 30);
            o.x *= 0.8;
            o.y *= 0.8;
          }, 10);
        }
      }
    }
  };
  function E(e, t) {
    var n;
    var s;
    var a;
    var l = this;
    if (t === undefined) {
      t = {};
    }
    if (typeof e == "string") {
      e = document.querySelector(e);
    }
    if (!e || !e.nodeName) {
      throw Error("no element is specified to initialize PerfectScrollbar");
    }
    this.element = e;
    e.classList.add(h.main);
    this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1000,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: false,
      suppressScrollY: false,
      swipeEasing: true,
      useBothWheelAxes: false,
      wheelPropagation: true,
      wheelSpeed: 1
    };
    for (var u in t) {
      this.settings[u] = t[u];
    }
    this.containerWidth = null;
    this.containerHeight = null;
    this.contentWidth = null;
    this.contentHeight = null;
    function c() {
      return e.classList.add(h.state.focus);
    }
    function d() {
      return e.classList.remove(h.state.focus);
    }
    this.isRtl = i(e).direction === "rtl";
    if (this.isRtl === true) {
      e.classList.add(h.rtl);
    }
    this.isNegativeScroll = (n = e.scrollLeft, s = null, e.scrollLeft = -1, s = e.scrollLeft < 0, e.scrollLeft = n, s);
    this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0;
    this.event = new p();
    this.ownerDocument = e.ownerDocument || document;
    this.scrollbarXRail = o(h.element.rail("x"));
    e.appendChild(this.scrollbarXRail);
    this.scrollbarX = o(h.element.thumb("x"));
    this.scrollbarXRail.appendChild(this.scrollbarX);
    this.scrollbarX.setAttribute("tabindex", 0);
    this.event.bind(this.scrollbarX, "focus", c);
    this.event.bind(this.scrollbarX, "blur", d);
    this.scrollbarXActive = null;
    this.scrollbarXWidth = null;
    this.scrollbarXLeft = null;
    var f = i(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(f.bottom, 10);
    if (isNaN(this.scrollbarXBottom)) {
      this.isScrollbarXUsingBottom = false;
      this.scrollbarXTop = m(f.top);
    } else {
      this.isScrollbarXUsingBottom = true;
    }
    this.railBorderXWidth = m(f.borderLeftWidth) + m(f.borderRightWidth);
    r(this.scrollbarXRail, {
      display: "block"
    });
    this.railXMarginWidth = m(f.marginLeft) + m(f.marginRight);
    r(this.scrollbarXRail, {
      display: ""
    });
    this.railXWidth = null;
    this.railXRatio = null;
    this.scrollbarYRail = o(h.element.rail("y"));
    e.appendChild(this.scrollbarYRail);
    this.scrollbarY = o(h.element.thumb("y"));
    this.scrollbarYRail.appendChild(this.scrollbarY);
    this.scrollbarY.setAttribute("tabindex", 0);
    this.event.bind(this.scrollbarY, "focus", c);
    this.event.bind(this.scrollbarY, "blur", d);
    this.scrollbarYActive = null;
    this.scrollbarYHeight = null;
    this.scrollbarYTop = null;
    var v = i(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(v.right, 10);
    if (isNaN(this.scrollbarYRight)) {
      this.isScrollbarYUsingRight = false;
      this.scrollbarYLeft = m(v.left);
    } else {
      this.isScrollbarYUsingRight = true;
    }
    this.scrollbarYOuterWidth = this.isRtl ? m((a = i(this.scrollbarY)).width) + m(a.paddingLeft) + m(a.paddingRight) + m(a.borderLeftWidth) + m(a.borderRightWidth) : null;
    this.railBorderYWidth = m(v.borderTopWidth) + m(v.borderBottomWidth);
    r(this.scrollbarYRail, {
      display: "block"
    });
    this.railYMarginHeight = m(v.marginTop) + m(v.marginBottom);
    r(this.scrollbarYRail, {
      display: ""
    });
    this.railYHeight = null;
    this.railYRatio = null;
    this.reach = {
      x: e.scrollLeft <= 0 ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: e.scrollTop <= 0 ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    };
    this.isAlive = true;
    this.settings.handlers.forEach(function (e) {
      return S[e](l);
    });
    this.lastScrollTop = Math.floor(e.scrollTop);
    this.lastScrollLeft = e.scrollLeft;
    this.event.bind(this.element, "scroll", function (e) {
      return l.onScroll(e);
    });
    w(this);
  }
  E.prototype.update = function () {
    if (this.isAlive) {
      this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0;
      r(this.scrollbarXRail, {
        display: "block"
      });
      r(this.scrollbarYRail, {
        display: "block"
      });
      this.railXMarginWidth = m(i(this.scrollbarXRail).marginLeft) + m(i(this.scrollbarXRail).marginRight);
      this.railYMarginHeight = m(i(this.scrollbarYRail).marginTop) + m(i(this.scrollbarYRail).marginBottom);
      r(this.scrollbarXRail, {
        display: "none"
      });
      r(this.scrollbarYRail, {
        display: "none"
      });
      w(this);
      L(this, "top", 0, false, true);
      L(this, "left", 0, false, true);
      r(this.scrollbarXRail, {
        display: ""
      });
      r(this.scrollbarYRail, {
        display: ""
      });
    }
  };
  E.prototype.onScroll = function (e) {
    if (this.isAlive) {
      w(this);
      L(this, "top", this.element.scrollTop - this.lastScrollTop);
      L(this, "left", this.element.scrollLeft - this.lastScrollLeft);
      this.lastScrollTop = Math.floor(this.element.scrollTop);
      this.lastScrollLeft = this.element.scrollLeft;
    }
  };
  E.prototype.destroy = function () {
    if (this.isAlive) {
      this.event.unbindAll();
      l(this.scrollbarX);
      l(this.scrollbarY);
      l(this.scrollbarXRail);
      l(this.scrollbarYRail);
      this.removePsClasses();
      this.element = null;
      this.scrollbarX = null;
      this.scrollbarY = null;
      this.scrollbarXRail = null;
      this.scrollbarYRail = null;
      this.isAlive = false;
    }
  };
  E.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (e) {
      return !e.match(/^ps([-_].+|)$/);
    }).join(" ");
  };
  exports.default = E;
  require.r(exports);
}