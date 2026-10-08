// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'textShapeKeys'
// - Renamed export 'Z' to 'TextElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 719723
         */
module.exports = function (module, exports, require) {
  var i;
  var svgPathElement = require("svg-path-element") /*id: 669730*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var geometryRectUtils = require("geometry-rect-utils") /*id: 404476*/;
  var canvasTextMeasurementCache = require("canvas-text-measurement-cache") /*id: 492371*/;
  i = function (t, e) {
    return (i = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  };
  function l(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function u() {
    return (u = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function c() {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var i = Array(t);
    var r = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var a = 0;
      var s = o.length;
      for (; a < s; a++, r++) {
        i[r] = o[a];
      }
    }
    return i;
  }
  var p = ["x", "y", "text", "fontSize", "fontFamily", "truncate", "textAlign", "textBaseline", "fontWeight"];
  var d = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "text";
      e.svgTagName = "text";
      e.shapeKeys = p;
      e._isOverflow = false;
      return e;
    }
    l(e, t);
    Object.defineProperty(e.prototype, "_isEmpty", {
      get: function () {
        var t = this.attr.text;
        return t == null || t === "";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isMutiLine", {
      get: function () {
        var t = this.attr;
        var e = t.text;
        var n = t.truncate;
        return (e + "").indexOf("\n") !== -1 || !!n;
      },
      enumerable: true,
      configurable: true
    });
    e.prototype.getDefaultAttr = function () {
      return u(u({}, t.prototype.getDefaultAttr.call(this)), {
        text: "",
        x: 0,
        y: 0
      });
    };
    e.prototype.isOverflow = function () {
      return this._isOverflow;
    };
    e.prototype.getAnimationKeys = function () {
      return c(t.prototype.getAnimationKeys.call(this), ["x", "y", "fontSize"]);
    };
    e.prototype.getSpanList = function () {
      var t = [];
      this.eachSpanList(function (e, n, i) {
        return t.push({
          x: n,
          y: i,
          text: e
        });
      });
      return t;
    };
    e.prototype.eachSpanList = function (t) {
      var e = this.attr;
      var n = e.x;
      var i = e.y;
      var r = this.getTextStyle();
      var o = r.fontSize;
      var a = r.lineHeight;
      var s = r.textBaseline;
      var h = this._getInlineTextList();
      var l = (a - o) / 2;
      h.forEach(function (e, r) {
        var o = i;
        if (s === "top") {
          o = i + r * a + l;
        } else if (s === "middle") {
          o = i + (r + 0.5 - h.length / 2) * a;
        } else if (s === "bottom") {
          o = i - (h.length - 1 - r) * a - l;
        }
        t(e, n, o);
      });
    };
    e.prototype.brush = function (t) {
      var e = this;
      var n = this.attr.text;
      if (!this._isEmpty) {
        var i = n + "";
        var r = this.needFill;
        var o = this.needStroke;
        if (!this.isMutiLine) {
          if (o && t.strokeText) {
            if (this.attr.maxWidth > 0) {
              t.strokeText(i, this.attr.x, this.attr.y, this.attr.maxWidth);
            } else {
              t.strokeText(i, this.attr.x, this.attr.y);
            }
          }
          if (r) {
            if (this.attr.maxWidth > 0) {
              t.fillText(i, this.attr.x, this.attr.y, this.attr.maxWidth);
            } else {
              t.fillText(i, this.attr.x, this.attr.y);
            }
          }
          return;
        }
        this.eachSpanList(function (n, i, a) {
          if (o && t.strokeText) {
            if (e.attr.maxWidth > 0) {
              t.strokeText(n, i, a, e.attr.maxWidth);
            } else {
              t.strokeText(n, i, a);
            }
          }
          if (r) {
            if (e.attr.maxWidth > 0) {
              t.fillText(n, i, a, e.attr.maxWidth);
            } else {
              t.fillText(n, i, a);
            }
          }
        });
      }
    };
    e.prototype.measureText = function () {
      var t = this.getTextStyle();
      var e = this._isEmpty ? "" : this.attr.text + "";
      return canvasTextMeasurementCache.measureText(e, t);
    };
    e.prototype.getTextStyle = function () {
      var t = this.getExtendAttr("fontSize");
      return {
        fontSize: t,
        fontFamily: this.getExtendAttr("fontFamily"),
        fontWeight: this.getExtendAttr("fontWeight"),
        textAlign: this.getExtendAttr("textAlign"),
        textBaseline: this.getExtendAttr("textBaseline"),
        lineHeight: this.attr.lineHeight || t
      };
    };
    e.prototype.computeBBox = function () {
      if (this._isEmpty) {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      var t;
      var e;
      var n = this.attr;
      var i = n.x;
      var r = n.y;
      var a = this.getTextStyle();
      var s = a.fontSize;
      var l = a.textAlign;
      var u = a.textBaseline;
      var c = a.lineHeight;
      if (this.isMutiLine) {
        var p = this._getInlineTextList();
        e = p.length * c;
        t = arrayMaxByUtilWrapper.getMaxBy(p.map(function (t) {
          return canvasTextMeasurementCache.measureText(t, a).width;
        })) || 0;
      } else {
        t = canvasTextMeasurementCache.measureText(this.attr.text + "", a).width;
        e = s;
      }
      if (this.attr.maxWidth > 0) {
        t = Math.min(t, this.attr.maxWidth);
      }
      var d = {
        x: i,
        y: r,
        width: t,
        height: e
      };
      if (l === "center") {
        d.x = i - t / 2;
      } else if (l === "right") {
        d.x = i - t;
      }
      if (u === "top") {
        d.y = r;
      } else if (u === "middle") {
        d.y = r - e / 2;
      } else {
        d.y = r - e;
      }
      return d;
    };
    e.prototype.isPointOnPath = function (t, e) {
      return geometryRectUtils.containsPoint(this.getBBox(), t, e);
    };
    e.prototype.onEvent = function (e) {
      var n = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }
      t.prototype.onEvent.apply(this, c([e], n));
      if (this._isOverflow && this.ownerRender.isBrowser()) {
        if (e === "mouseenter") {
          this.ownerRender.getDom().title = this.attr.text + "";
        }
        if (e === "mouseleave") {
          this.ownerRender.getDom().removeAttribute("title");
        }
      }
    };
    e.prototype.getSvgAttributes = function (e) {
      var n;
      var i = 0;
      var r = this.getTextStyle();
      if (r.textBaseline === "bottom") {
        i = -r.fontSize / 2 + r.fontSize / 10;
      } else if (r.textBaseline === "top") {
        i = r.fontSize / 2 + r.fontSize / 10;
      } else if (r.textBaseline === "middle") {
        i = +r.fontSize / 10 + (e ? r.fontSize / 5 + 1 : 0);
      }
      if (r.textAlign === "start" || r.textAlign === "left") {
        n = "start";
      }
      if (r.textAlign === "right" || r.textAlign === "end") {
        n = "end";
      }
      if (r.textAlign === "center") {
        n = "middle";
      }
      var o = u(u({}, t.prototype.getSvgAttributes.call(this)), {
        x: this.attr.x,
        y: this.attr.y,
        dy: i,
        "dominant-baseline": "middle",
        "text-anchor": n,
        "paint-order": "stroke"
      });
      if (this.attr.maxWidth > 0) {
        o.textLength = this.attr.maxWidth;
      }
      return o;
    };
    e.prototype._getInlineTextList = function () {
      this._isOverflow = false;
      var t = this.attr;
      var e = t.text;
      var n = t.truncate;
      var i = this.getTextStyle();
      var r = i.lineHeight;
      if (this._isEmpty) {
        return [];
      }
      var o = e + "";
      if (!n) {
        return o.split("\n");
      }
      var s = o.split("");
      var l = [];
      var u = n.outerWidth;
      var c = n.outerHeight;
      var p = n.ellipsis;
      var d = p === undefined ? "..." : p;
      var f = canvasTextMeasurementCache.measureText(d, i).width;
      if (isNumberUtil.isNumber(c) && c < r) {
        return [];
      }
      var g = 0;
      var y = r;
      var v = 0;
      var m = [];
      l.push("");
      for (var x = 0; x < s.length; x++) {
        var _ = s[x];
        if (_ !== "\r") {
          if (_ === "\n") {
            l.push("");
            v++;
            g = 0;
            y += r;
            m.length = 0;
            continue;
          }
          var b = canvasTextMeasurementCache.measureText(_, i).width;
          if (u && b + g <= u) {
            g += b;
            m.push(b);
            l[v] += _;
          } else if (c && y + r > c) {
            var w = 0;
            var S = "";
            var A = 0;
            for (; A < m.length; A++) {
              if (w + m[A] <= u - f) {
                S += l[v][A];
                w += m[A];
              } else {
                break;
              }
            }
            l[v] = S + d;
            this._isOverflow = true;
            break;
          } else {
            l.push(_);
            v++;
            g = b;
            y += r;
            m.length = 0;
            m.push(b);
          }
        }
      }
      return l;
    };
    return e;
  }(svgPathElement.SvgPathElement);
  exports.TextElement = d;
  require.d(exports, {
    textShapeKeys: function () {
      return p;
    }
  });
}