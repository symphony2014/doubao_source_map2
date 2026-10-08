// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'registerCoordSystem'
// - Renamed export 'I' to 'getCoordSystem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 10132
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var a;
  var s;
  var h;
  var l;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var axisComponentBaseClass = require("axis-component-base-class") /*id: 572075*/;
  var svgPathHandler = require("svg-path-handler") /*id: 993453*/;
  var coordinateSnapUtil = require("coordinate-snap-util") /*id: 574355*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  var numberRangeCheckUtil = require("number-range-check-util") /*id: 341356*/;
  var geometryLineElement = require("geometry-line-element") /*id: 301566*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var svgPathCanvasRenderer = require("svg-path-canvas-renderer") /*id: 254381*/;
  var refValueWrapper = require("ref-value-wrapper") /*id: 368437*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  var scaleFormatterRegistry = require("scale-formatter-registry") /*id: 235177*/;
  var logConstants_1 = require("log-constants_1") /*id: 223212*/;
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  var ensureArrayUtil_1 = require("ensure-array-util_1") /*id: 155564*/;
  var chartConstants = require("chart-constants") /*id: 552922*/;
  var textMeasurementCacheUtility = require("text-measurement-cache-utility") /*id: 90268*/;
  var svgSymbolRenderer = require("svg-symbol-renderer") /*id: 330448*/;
  var markAreaRenderer = require("mark-area-renderer") /*id: 926134*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
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
  function T(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function I() {
    return (I = Object.assign || function (t) {
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
  var Z = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "xAxis";
      e.shortType = "x";
      e.crossLine = new geometryLineElement.LineElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      e.crossShadow = new svgRectElement.SvgRectElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      return e;
    }
    T(e, t);
    e.prototype.getInitialState = function () {
      return {
        min: 0,
        max: 0,
        left: 0,
        right: 0,
        crossAt: 0,
        labelSizeList: []
      };
    };
    e.prototype.beforeRender = function () {
      var t = this.parentModel.getState();
      var e = t.left;
      var n = t.right;
      var i = this.getCrossPosition();
      this.setState({
        left: e,
        right: n,
        crossAt: i
      });
      this.initScale();
    };
    e.prototype.initScale = function () {
      var t = this.getExtreme();
      var e = t[0];
      var n = t[1];
      this.setState({
        min: e,
        max: n
      });
      var i = this.option;
      var r = i.type;
      var o = i.nice;
      var a = i.logBase;
      var s = i.ticks;
      var h = i.inverse;
      var l = i.tickCount;
      var u = i.exactTickCount;
      var c = i.interval;
      var p = i.minInterval;
      var d = i.maxInterval;
      var f = i.padding;
      var g = i.allowDecimals;
      var y = i.breaks;
      var v = this.parentModel.getState();
      var m = v.left;
      var x = v.right;
      var _ = h ? x : m;
      var b = h ? m : x;
      var A = r === logConstants_1.logConstants.TIME;
      if (r === logConstants_1.logConstants.VALUE || A) {
        var E = scaleFormatterRegistry.classRegistry.getClass("time");
        var k = A ? new E(e, n, _, b) : new scaleFormatterRegistry.LinearScaleFormatter(e, n, _, b);
        if (o) {
          k.niceTicks(l, {
            interval: c,
            ticks: s,
            minInterval: p,
            maxInterval: d,
            exactTickCount: u,
            allowDecimals: g
          });
        }
        if (y && y.length) {
          k.setBreaks(y);
        }
        this.scale = k;
      } else if (r === logConstants_1.logConstants.CATEGORY) {
        var M = this.getCategories();
        var P = (f === true) * 0.5;
        var k = new scaleFormatterRegistry.OrdinalScaleFormatter(M, e - P, n + P, _, b);
        this.scale = k;
      } else if (r === logConstants_1.logConstants.LOG) {
        var k = new scaleFormatterRegistry.LogScaleFormatter(e, n, _, b, a);
        if (o) {
          k.niceTicks(l, {
            interval: c,
            ticks: s,
            minInterval: p,
            maxInterval: d,
            exactTickCount: u,
            allowDecimals: g
          });
        }
        this.scale = k;
      }
      this.scale.setFormatter(this.option.axisLabel.formatter);
    };
    e.prototype.invertPoint = function (t) {
      return this.scale.invert(t);
    };
    e.prototype.getCrossPosition = function () {
      var t = this.parentModel.getState();
      var e = t.top;
      var n = t.bottom;
      if (this.option.opposite) {
        return e;
      } else {
        return n;
      }
    };
    e.prototype.getLabelAreaSize = function () {
      var t = this;
      var e = this.parentModel.state;
      var n = e.left;
      var i = e.right;
      var r = this.option.axisLabel;
      var o = r.show;
      var a = r.inside;
      var s = r.margin;
      var h = this.option.opposite ? "top" : "bottom";
      var l = this.scale.getTicks();
      this.scale.start = n;
      this.scale.end = i;
      var u = 0;
      var c = 0;
      var p = !this.option.show || !o || a || l.length === 0;
      var d = this.option.title.show && this.option.title.text && this.option.title.align === "middle";
      if (!p) {
        var g = this.pickTicks(l).map(function (e) {
          return t.scale.getLabel(e);
        }).map(function (e) {
          return textMeasurementCacheUtility.measureTextWithCache(e, t.getTextStyle(t.option.axisLabel));
        });
        this.setState({
          labelSizeList: g
        });
        var y = this.getAutoRotate();
        u = arrayMaxByUtilWrapper.getMaxBy(g.map(function (t) {
          var e = Math.abs(mathCalcUtils.degToRad(y));
          return t.width * Math.sin(e) + t.height * Math.cos(e) + s;
        }));
      }
      if (d) {
        c = this.option.title.margin + this.option.title.textStyle.fontSize;
      }
      return {
        side: h,
        size: u + c
      };
    };
    e.prototype.showCrosshair = function (t, e, n) {
      var i = this.parentModel.getState();
      var r = i.top;
      var o = i.bottom;
      var a = this.state.crossAt;
      var s = this.shoudUseShadowPointer() && n !== "line" || n === "shadow";
      if (this.isCategroy()) {
        var h = Math.round(this.scale.invert(t));
        var l = Math.floor(this.scale.scale(h)) + 0.5;
        var u = this.scale.scale(h - 0.5);
        var c = this.scale.scale(h + 0.5);
        var p = this.option.markLines.some(function (t) {
          return t.value === h;
        });
        this.crossLine.setAttr(I({
          display: !s && !p,
          x1: l,
          x2: l,
          y1: r,
          y2: o
        }, this.getCrossLineStyle()));
        this.crossShadow.setAttr(I({
          display: s,
          x: Math.floor(Math.min(u, c)) + 0.5,
          y: r,
          width: Math.max(Math.abs(c - u), 1),
          height: o - r
        }, this.getCrossShadowStyle()));
        this.showCrossLabel(this.scale.scale(h), a, this.getCategories()[h]);
      } else {
        this.crossShadow.setAttr({
          display: false
        });
        var d = Math.floor(t) + 0.5;
        this.crossLine.setAttr(I({
          display: !s,
          x1: d,
          x2: d,
          y1: r,
          y2: o
        }, this.getCrossLineStyle()));
        this.showCrossLabel(t, a, this.scale.invert(t));
      }
    };
    e.prototype.renderAxisLine = function () {
      var t = this;
      var e = this.state;
      var n = e.left;
      var i = e.right;
      var r = e.crossAt;
      var o = this.option.offset;
      var a = Math.floor(r) + 0.5;
      return new geometryLineElement.LineElement(I(I({
        x1: n,
        y1: a + o,
        x2: i,
        y2: a + o
      }, this.getLineStyle(this.option.axisLine)), {
        onEvent: function (e) {
          return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LINE, {});
        }
      }));
    };
    e.prototype.renderBrokenAxisLine = function () {
      var t = this.scale.getBrokenScales();
      var e = new svgPathCanvasRenderer.PathRenderer(I(I({}, this.getLineStyle(this.option.axisLine)), {
        pointerEvents: "none"
      }));
      var n = new svgPathHandler.Path();
      var i = coordinateSnapUtil.snapValue(this.state.crossAt);
      var r = this.option.inverse ? -10 : 10;
      var o = 0;
      for (; o < t.length; o++) {
        var a = t[o];
        var s = a.start;
        var h = a.end;
        n.moveTo(o === 0 ? s : s + r / 2, i);
        n.lineTo(o === t.length - 1 ? h : h - r / 2, i);
      }
      e.setAttr("pathData", n);
      return e;
    };
    e.prototype.renderAlternateColor = function () {
      var t = this.getIntervalTicks();
      var e = "rgba(0, 0, 0, 0)";
      var n = ensureArrayUtil_1.ensureArray(this.option.alternateColor);
      if (n.length === 1) {
        n.unshift(e);
      }
      var i = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-alternateColor")
      });
      var r = this.parentModel.getState();
      var o = r.top;
      var a = r.bottom;
      if (t.length <= 1 || this.getAxisSeries().length === 0) {
        return i;
      }
      for (var s = 0; s < (this.isCategroy() ? t.length : t.length - 1); s++) {
        var h = n[s % n.length];
        if (h !== e) {
          var l = s === t.length - 1;
          var c = t[s];
          var p = t[s + 1];
          var d = this.isCategroy() ? this.scale.scale(c - 0.5) : this.scale.scale(c);
          var f = this.isCategroy() ? l ? this.scale.end : this.scale.scale(p - 0.5) : this.scale.scale(p);
          var y = Math.floor(Math.min(d, f)) + 0.5;
          var v = Math.abs(d - f);
          i.add(new svgRectElement.SvgRectElement({
            x: numberClampUtil.clampNumber(y, this.state.left, this.state.right),
            y: o,
            width: v,
            height: a - o,
            fill: h
          }));
        }
      }
      return i;
    };
    e.prototype.renderBreaks = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("breaks")
      });
      var n = this.parentModel.getState();
      var i = n.top;
      var r = n.bottom;
      var o = this.state.crossAt;
      this.scale.getBreaks().forEach(function (n) {
        var a = n.position;
        e.add(new geometryLineElement.LineElement({
          x1: a,
          x2: a,
          y1: i,
          y2: r,
          lineWidth: 10,
          stroke: "#fff",
          pointerEvents: "none"
        }));
        e.add(new svgPathCanvasRenderer.PathRenderer(I(I({}, t.getLineStyle(t.option.axisLine)), {
          brush: function (t) {
            t.moveTo(a + 10, o - 5);
            t.lineTo(a, o + 5);
            t.moveTo(a, o - 5);
            t.lineTo(a - 10, o + 5);
          },
          pointerEvents: "none"
        })));
      });
      return e;
    };
    e.prototype.renderTickLines = function () {
      var t = this;
      var e = this.state.crossAt;
      var n = this.option;
      var i = n.tickLine;
      var r = n.opposite;
      var o = n.offset;
      var a = new svgGroupElement.SvgGroupElement(I({
        key: this.getKey("axis-tick")
      }, this.getLineStyle(this.option.tickLine)));
      var s = this.getIntervalTicks();
      var h = i.inside;
      var l = i.length;
      s.forEach(function (n) {
        var i = t.scale.scale(n);
        a.add(new geometryLineElement.LineElement({
          x1: i,
          y1: e + o,
          x2: i,
          y2: (r ? h ? e + l : e - l : h ? e - l : e + l) + o,
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_TICKS, {});
          }
        }));
      });
      return a;
    };
    e.prototype.renderGridLines = function () {
      var t = this;
      var e = this.parentModel.getState();
      var n = e.top;
      var i = e.bottom;
      var r = e.left;
      var o = e.right;
      var a = this.option;
      var s = a.padding;
      var h = a.gridLine;
      var l = new svgGroupElement.SvgGroupElement(I({
        key: this.getKey("axis-gridline")
      }, this.getLineStyle(h)));
      var c = this.isCategroy();
      var p = this.getIntervalTicks();
      if (this.isCategroy() && p.length > 0) {
        p.unshift(this.scale.min - 0.5);
        p.push(this.scale.max + 0.5);
      }
      p.forEach(function (e) {
        var a = c && s ? t.scale.scale(e + 0.5) : t.scale.scale(e);
        if (!t.parentModel.yAxis.some(function (t) {
          return t.getCrossPosition() === a && t.option.axisLine.show;
        }) && numberRangeCheckUtil.isInRange(a, r - 0.5, o + 0.5)) {
          l.add(new geometryLineElement.LineElement({
            x1: a,
            y1: n,
            x2: a,
            y2: i,
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_GRID, {});
            }
          }));
        }
      });
      return l;
    };
    e.prototype.renderLabels = function () {
      var t;
      var e = this;
      this.labelRef = {};
      var n = this.state.crossAt;
      var i = this.option;
      var r = i.opposite;
      var o = i.axisLabel;
      var a = i.offset;
      var s = i.inverse;
      var h = o.inside;
      var l = o.margin;
      var c = o.offsetX;
      var p = o.offsetY;
      var d = o.alignToAxis;
      var f = this.autoRotate;
      var g = "center";
      t = r === h ? "top" : "bottom";
      if (f > 0) {
        g = "left";
      } else if (f < 0) {
        g = "right";
      }
      if (f === 90) {
        g = "left";
        t = "middle";
      }
      var y = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-label")
      });
      var v = this.getIntervalTicks();
      v.forEach(function (i, o) {
        var u;
        var m = refValueWrapper.refWrapper();
        e.labelRef[i] = m;
        var x = e.scale.getLabel(i);
        var w = e.scale.scale(i);
        var S = g;
        u = r === h ? n + l : n - l;
        if (d) {
          if (o === 0) {
            S = s ? "right" : "left";
          } else if (o === v.length - 1) {
            S = s ? "left" : "right";
          }
        }
        y.add(richTextRendererUtils.createRichNode(I(I({
          ref: m
        }, e.getTextStyle(e.option.axisLabel)), {
          textAlign: S,
          textBaseline: t,
          x: w,
          y: u + a,
          text: x,
          position: [c, p],
          rotation: mathCalcUtils.degToRad(r ? -f : f),
          origin: [w, u + a],
          onEvent: function (t) {
            return e.handleUIEvent(t, chartConstants.elementTypes.AXIS_LABEL, {});
          }
        })));
      });
      return y;
    };
    e.prototype.renderTitle = function () {
      var t;
      var e;
      var n;
      var i;
      var r = this;
      var o = this.state.crossAt;
      var a = this.option;
      var s = a.opposite;
      var h = a.title;
      var l = h.text;
      var u = h.margin;
      var c = h.align;
      var p = h.textStyle;
      var d = h.offsetX;
      var f = h.offsetY;
      var g = a.offset;
      if (c === "start") {
        t = this.scale.start + (this.option.inverse ? 1 : -1) * u;
        e = o;
        i = "middle";
        n = this.option.inverse ? "left" : "right";
      } else if (c === "middle") {
        var y = this.chart.getFacetContentBox(this.parentModel.option.facet);
        t = (this.scale.start + this.scale.end) / 2;
        e = s ? y.top : y.bottom;
        i = this.option.opposite ? "top" : "bottom";
        n = "center";
      } else if (c === "end") {
        t = this.scale.end + (this.option.inverse ? -1 : 1) * u;
        e = o;
        i = "middle";
        n = this.option.inverse ? "right" : "left";
      }
      if (p.textAlign) {
        n = p.textAlign;
      }
      if (p.textBaseline) {
        i = p.textBaseline;
      }
      return richTextRendererUtils.createRichNode(I(I({}, this.getTextStyle(this.option.title.textStyle)), {
        x: t + d,
        y: e + g + f,
        text: l,
        textAlign: n,
        textBaseline: i,
        onEvent: function (t) {
          return r.handleUIEvent(t, chartConstants.elementTypes.AXIS_TITLE, {});
        }
      }));
    };
    e.prototype.renderMarkLine = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("markline-x")
      });
      this.option.markLines.forEach(function (n, i) {
        var r;
        var o;
        var a;
        var s = n.value;
        var h = n.label;
        var l = n.lineStyle;
        var c = n.icon;
        var p = n.range;
        var d = t.parentModel.getState();
        var f = d.left;
        var y = d.right;
        var x = d.top;
        var w = d.bottom;
        var S = h.offsetY;
        var E = h.offsetX;
        var M = t.parentModel.yAxis[0].scale;
        var O = t.scale.scale(s);
        var T = x;
        var Z = w;
        if (mathCalcUtils.isValueInRange(O, [f, y])) {
          if (arrayIsArrayUtil.isArray(p) && p.length > 0) {
            T = numberClampUtil.clampNumber(M.scale(p[1]), x, w);
            if (p[1]) {
              Z = numberClampUtil.clampNumber(M.scale(p[0]), x, w);
            }
          }
          var L = {
            axis: "x",
            markLine: n,
            index: i,
            elments: {
              label: refValueWrapper.refWrapper(),
              icon: refValueWrapper.refWrapper(),
              line: refValueWrapper.refWrapper()
            }
          };
          function R(e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE, L);
          }
          var D = O;
          if (h.position === "start") {
            r = Z + h.distance;
            a = "top";
            o = "center";
          } else if (h.position === "middle") {
            r = (T + Z) / 2;
            D = O + h.distance;
            a = "middle";
            o = "left";
          } else if (h.position === "end") {
            r = T - h.distance;
            a = "bottom";
            o = "center";
          }
          var B = new geometryLineElement.LineElement(I({
            ref: L.elments.line,
            x1: O,
            y1: Z,
            x2: O,
            y2: T
          }, t.getLineStyle(l)));
          if (t.isCategroy() && n.trigger === "axis") {
            var j = new svgGroupElement.SvgGroupElement({
              onEvent: R
            });
            j.add(B);
            var z = Math.abs(1 / t.getPixelValue());
            j.add(new svgRectElement.SvgRectElement({
              x: O - z / 2,
              y: T,
              width: z,
              height: Z - T,
              fill: "rgba(0, 0, 0, 0)",
              cursor: "pointer"
            }));
            e.add(j);
          } else {
            B.setAttr({
              onEvent: R
            });
            e.add(B);
          }
          var N = svgSymbolRenderer.getSecondElement(O, T, c.size);
          if (c.symbol) {
            var F = svgSymbolRenderer.detectSymbolType(c, N, I(I({
              ref: L.elments.icon,
              display: c.show
            }, t.getShapeStyle(c)), {
              onEvent: function (e) {
                return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE_ICON, L);
              }
            }));
            e.add(F);
          }
          var W = richTextRendererUtils.createRichNode(I(I({
            ref: L.elments.label,
            display: h.show,
            text: h.text,
            x: D + E,
            y: r + S,
            textAlign: o,
            textBaseline: a
          }, t.getTextStyle(h)), {
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE_LABEL, L);
            }
          }));
          e.add(W);
        }
      });
      return e;
    };
    e.prototype.render = function () {
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-group")
      });
      var n = this.option.breaks?.length;
      if (this.option.show) {
        if (this.option.alternateColor) {
          e.add(this.renderAlternateColor());
        }
        if (this.option.axisLine.show) {
          e.add(n ? this.renderBrokenAxisLine() : this.renderAxisLine());
        }
        if (this.getAxisSeries().length > 0 && this.option.gridLine.show) {
          e.add(this.renderGridLines());
        }
        if (this.option.tickLine.show) {
          e.add(this.renderTickLines());
        }
        if (this.option.axisLabel.show) {
          e.add(this.renderLabels());
        }
        if (this.option.title.show) {
          e.add(this.renderTitle());
        }
        e.add(this.renderCrossLabel());
        if (n) {
          this.chart.addToTopLevel(this.renderBreaks());
        }
      }
      if (this.getAxisSeries().length > 0) {
        this.parentModel.addToGridTop(markAreaRenderer.renderMarkAreas(this));
        this.chart.addToTopLevel(this.renderMarkLine());
      }
      this.chart.addToTopLevel(this.crossLine);
      if (this.getCrosshairsOption().onTopLevel) {
        this.chart.addToTopLevel(this.crossShadow);
      } else {
        this.parentModel.addToGridTop(this.crossShadow);
      }
      return e;
    };
    return e;
  }(axisComponentBaseClass.AxisComponentBase);
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  r = function (t, e) {
    return (r = Object.setPrototypeOf || {
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
  function R(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function D() {
    return (D = Object.assign || function (t) {
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
  var B = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "yAxis";
      e.shortType = "y";
      e.crossLine = new geometryLineElement.LineElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      e.crossShadow = new svgRectElement.SvgRectElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      return e;
    }
    R(e, t);
    e.prototype.getInitialState = function () {
      return {
        min: 0,
        max: 0,
        top: 0,
        bottom: 0,
        crossAt: 0,
        labelSizeList: []
      };
    };
    e.prototype.beforeRender = function () {
      var t = this.parentModel.getState();
      var e = t.top;
      var n = t.bottom;
      var i = this.getCrossPosition();
      this.setState({
        top: e,
        bottom: n,
        crossAt: i
      });
      this.initScale();
    };
    e.prototype.initScale = function () {
      var t = this.getExtreme();
      var e = t[0];
      var n = t[1];
      this.setState({
        min: e,
        max: n
      });
      var i = this.option;
      var r = i.type;
      var o = i.nice;
      var a = i.logBase;
      var s = i.ticks;
      var h = i.inverse;
      var l = i.tickCount;
      var u = i.exactTickCount;
      var c = i.interval;
      var p = i.minInterval;
      var d = i.maxInterval;
      var f = i.padding;
      var g = i.allowDecimals;
      var y = i.breaks;
      var v = this.parentModel.getState();
      var m = v.top;
      var x = v.bottom;
      var _ = h ? m : x;
      var b = h ? x : m;
      if (r === logConstants_1.logConstants.VALUE) {
        var A = new scaleFormatterRegistry.LinearScaleFormatter(e, n, _, b);
        if (o) {
          A.niceTicks(l, {
            interval: c,
            ticks: s,
            minInterval: p,
            maxInterval: d,
            exactTickCount: u,
            allowDecimals: g
          });
        }
        if (y && y.length) {
          A.setBreaks(y);
        }
        this.scale = A;
      } else if (r === logConstants_1.logConstants.CATEGORY) {
        var E = this.getCategories();
        var k = (f === true) * 0.5;
        var A = new scaleFormatterRegistry.OrdinalScaleFormatter(E, e - k, n + k, _, b);
        this.scale = A;
      } else if (r === logConstants_1.logConstants.LOG) {
        var A = new scaleFormatterRegistry.LogScaleFormatter(e, n, _, b, a);
        if (o) {
          A.niceTicks(l, {
            interval: c,
            ticks: s,
            minInterval: p,
            maxInterval: d,
            exactTickCount: u,
            allowDecimals: g
          });
        }
        this.scale = A;
      }
      this.scale.setFormatter(this.option.axisLabel.formatter);
    };
    e.prototype.invertPoint = function (t, e) {
      return this.scale.invert(e);
    };
    e.prototype.getCrossPosition = function () {
      var t = this.parentModel.getState();
      var e = t.left;
      var n = t.right;
      if (this.option.opposite) {
        return n;
      } else {
        return e;
      }
    };
    e.prototype.getLabelAreaSize = function () {
      var t = this;
      var e = this.option.axisLabel;
      var n = e.show;
      var i = e.inside;
      var r = e.margin;
      var o = e.rotate;
      var a = this.option.opposite ? "right" : "left";
      var s = this.scale.getTicks();
      var h = 0;
      var l = 0;
      var u = !this.option.show || !n || i || s.length === 0;
      var c = this.option.title.show && this.option.title.text && this.option.title.align === "middle";
      if (!u) {
        var p = this.pickTicks(s).map(function (e) {
          return t.scale.getLabel(e);
        }).map(function (e) {
          return textMeasurementCacheUtility.measureTextWithCache(e, t.option.axisLabel);
        });
        h = arrayMaxByUtilWrapper.getMaxBy(p.map(function (t) {
          var e = mathCalcUtils.degToRad(o);
          return t.width * Math.cos(e) + t.height * Math.sin(e) + r;
        }));
        this.setState({
          labelSizeList: p
        });
      }
      if (c) {
        l = this.option.title.margin + this.option.title.textStyle.fontSize;
      }
      return {
        side: a,
        size: h + l
      };
    };
    e.prototype.showCrosshair = function (t, e, n) {
      var i = this.parentModel.getState();
      var r = i.left;
      var o = i.right;
      var a = this.state.crossAt;
      var s = this.shoudUseShadowPointer() && n !== "line" || n === "shadow";
      if (this.isCategroy()) {
        var h = Math.round(this.scale.invert(e));
        var l = this.scale.scale(h - 0.5);
        var u = this.scale.scale(h + 0.5);
        var c = Math.floor(this.scale.scale(h)) + 0.5;
        var p = this.option.markLines.some(function (t) {
          return t.value === h;
        });
        this.showCrossLabel(a, this.scale.scale(h), this.getCategories()[h]);
        if (n === "label") {
          return;
        }
        this.crossLine.setAttr(D({
          display: !s && !p,
          x1: r,
          x2: o,
          y1: c,
          y2: c
        }, this.getCrossLineStyle()));
        this.crossShadow.setAttr(D({
          display: s,
          x: Math.floor(r) + 0.5,
          y: Math.min(l, u),
          width: o - r,
          height: Math.abs(l - u)
        }, this.getCrossShadowStyle()));
      } else {
        if (!isNaN(this.scale.invert(e))) {
          this.showCrossLabel(a, e, this.scale.invert(e));
        }
        if (n === "label") {
          return;
        }
        this.crossShadow.setAttr({
          display: false
        });
        var d = Math.floor(e) + 0.5;
        if (s) {
          this.crossLine.hide();
        } else {
          this.crossLine.setAttr(D({
            display: true,
            x1: r,
            x2: o,
            y1: d,
            y2: d
          }, this.getCrossLineStyle()));
        }
      }
    };
    e.prototype.renderAxisLine = function () {
      var t = this;
      var e = this.state;
      var n = e.top;
      var i = e.bottom;
      var r = e.crossAt;
      var o = this.option.offset;
      var a = Math.floor(r) + 0.5;
      return new geometryLineElement.LineElement(D(D({
        x1: a + o,
        y1: n,
        x2: a + o,
        y2: i
      }, this.getLineStyle(this.option.axisLine)), {
        onEvent: function (e) {
          return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LINE, {});
        }
      }));
    };
    e.prototype.renderBrokenAxisLine = function () {
      var t = this.scale.getBrokenScales();
      var e = new svgPathCanvasRenderer.PathRenderer(D(D({}, this.getLineStyle(this.option.axisLine)), {
        pointerEvents: "none"
      }));
      var n = new svgPathHandler.Path();
      var i = coordinateSnapUtil.snapValue(this.state.crossAt);
      var r = this.option.inverse ? -10 : 10;
      var o = 0;
      for (; o < t.length; o++) {
        var a = t[o];
        var s = a.start;
        var h = a.end;
        n.moveTo(i, o === 0 ? s : s - r / 2);
        n.lineTo(i, o === t.length - 1 ? h : h + r / 2);
      }
      e.setAttr("pathData", n);
      return e;
    };
    e.prototype.renderAlternateColor = function () {
      var t = this.getIntervalTicks();
      var e = "rgba(0, 0, 0, 0)";
      var n = ensureArrayUtil_1.ensureArray(this.option.alternateColor);
      if (n.length === 1) {
        n.unshift(e);
      }
      var i = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-alternateColor")
      });
      var r = this.parentModel.getState();
      var o = r.left;
      var a = r.right;
      if (t.length <= 1 || this.getAxisSeries().length === 0) {
        return i;
      }
      for (var s = 0; s < (this.isCategroy() ? t.length : t.length - 1); s++) {
        var h = n[s % n.length];
        if (h !== e) {
          var l = s === t.length - 1;
          var c = t[s];
          var p = t[s + 1];
          var d = this.isCategroy() ? this.scale.scale(c - 0.5) : this.scale.scale(c);
          var f = this.isCategroy() ? l ? this.scale.end : this.scale.scale(p - 0.5) : this.scale.scale(p);
          var y = Math.floor(Math.min(d, f)) + 0.5;
          var v = Math.abs(d - f);
          i.add(new svgRectElement.SvgRectElement({
            x: o,
            y: numberClampUtil.clampNumber(y, this.state.top, this.state.bottom),
            width: a - o,
            height: v,
            fill: h
          }));
        }
      }
      return i;
    };
    e.prototype.renderTickLines = function () {
      var t = this;
      var e = this.state.crossAt;
      var n = this.option;
      var i = n.tickLine;
      var r = n.opposite;
      var o = n.offset;
      var a = new svgGroupElement.SvgGroupElement(D({
        key: this.getKey("axis-tick")
      }, this.getLineStyle(this.option.tickLine)));
      var s = this.getIntervalTicks();
      var h = i.inside;
      var l = i.length;
      s.forEach(function (n) {
        var i = t.scale.scale(n);
        var s = Math.floor(e) + 0.5;
        a.add(new geometryLineElement.LineElement({
          x1: s + o,
          y1: i,
          x2: (r ? h ? s - l : s + l : h ? s + l : s - l) + o,
          y2: i,
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_TICKS, {});
          }
        }));
      });
      return a;
    };
    e.prototype.renderGridLines = function () {
      var t = this;
      var e = this.parentModel.getState();
      var n = e.top;
      var i = e.bottom;
      var r = e.left;
      var o = e.right;
      var a = this.option;
      var s = a.padding;
      var h = a.gridLine;
      var l = new svgGroupElement.SvgGroupElement(D({
        key: this.getKey("axis-gridline")
      }, this.getLineStyle(h)));
      var c = this.isCategroy();
      var p = this.getIntervalTicks();
      if (this.isCategroy() && p.length > 0) {
        p.unshift(this.scale.min - 0.5);
        p.push(this.scale.max + 0.5);
      }
      p.forEach(function (e) {
        var a = c && s ? t.scale.scale(e + 0.5) : t.scale.scale(e);
        if (!t.parentModel.xAxis.some(function (t) {
          return t.getCrossPosition() === a && t.option.axisLine.show;
        }) && numberRangeCheckUtil.isInRange(a, n - 0.5, i + 0.5)) {
          l.add(new geometryLineElement.LineElement({
            x1: r,
            y1: a,
            y2: a,
            x2: o,
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_GRID, {});
            }
          }));
        }
      });
      return l;
    };
    e.prototype.renderLabels = function () {
      var t = this;
      this.labelRef = {};
      var e = this.state.crossAt;
      var n = this.parentModel.getState().outerRect;
      var i = n.left;
      var r = n.right;
      var o = this.option;
      var a = o.opposite;
      var s = o.axisLabel;
      var h = o.offset;
      var l = s.inside;
      var c = s.margin;
      var p = s.rotate;
      var d = s.offsetX;
      var f = s.offsetY;
      var g = s.textAlign;
      var y = a ? r : i;
      var v = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-label")
      });
      var m = this.getIntervalTicks();
      var x = (!a && g === "left" || a && g === "right") && !l;
      var w = x ? y : e;
      var S = x ? g : a === l ? "right" : "left";
      m.forEach(function (e, n) {
        var i;
        var r = refValueWrapper.refWrapper();
        t.labelRef[e] = r;
        var o = t.scale.getLabel(e);
        var s = t.scale.scale(e);
        i = a === l ? w - c : w + c;
        if (x) {
          i = y;
        }
        i += h;
        v.add(richTextRendererUtils.createRichNode(D(D({
          ref: r
        }, t.getTextStyle(t.option.axisLabel)), {
          textAlign: S,
          textBaseline: "middle",
          x: i,
          y: s,
          text: o,
          position: [d, f],
          origin: [i, s],
          rotation: mathCalcUtils.degToRad(-p),
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LABEL, {});
          }
        })));
        if (m.length < 8 && n === m.length - 1) {
          for (var u = 0; u < 8 - m.length; u++) {
            v.add(richTextRendererUtils.createRichNode({
              opacity: 0,
              fill: t.option.axisLabel.color,
              x: i + h,
              y: s - (t.option.inverse ? -80 : 80)
            }));
          }
        }
      });
      return v;
    };
    e.prototype.renderTitle = function () {
      var t;
      var e;
      var n;
      var i;
      var r = this;
      var o = this.state;
      var a = o.top;
      var s = o.bottom;
      var h = o.crossAt;
      var l = this.option;
      var u = l.opposite;
      var c = l.title;
      var p = c.textStyle.fontSize;
      var d = c.rotate;
      var f = this.option;
      var g = f.title;
      var y = g.text;
      var v = g.margin;
      var m = g.align;
      var x = g.textStyle;
      var _ = g.offsetX;
      var w = g.offsetY;
      var S = f.offset;
      if (m === "start") {
        t = h;
        e = this.scale.start + (this.option.inverse ? -1 : 1) * v;
        i = this.option.inverse ? "bottom" : "top";
        n = "center";
      } else if (m === "middle") {
        t = h + (u ? 1 : -1) * (this.getLabelAreaSize().size - p / 2);
        e = (a + s) / 2;
        i = "middle";
        n = "center";
      } else if (m === "end") {
        t = h;
        e = this.scale.end + (this.option.inverse ? 1 : -1) * v;
        i = this.option.inverse ? "top" : "bottom";
        n = "center";
      }
      if (x.textAlign) {
        n = x.textAlign;
      }
      if (x.textBaseline) {
        i = x.textBaseline;
      }
      t = t + S + _;
      e += w;
      var E = isNumberUtil.isNumber(d) ? mathCalcUtils.degToRad(d) : m === "middle" ? mathCalcUtils.degToRad(-90) : 0;
      return richTextRendererUtils.createRichNode(D(D({
        key: this.getKey("title"),
        x: t,
        y: e,
        text: y,
        textAlign: n,
        textBaseline: i,
        origin: [t, e],
        rotation: E
      }, this.getTextStyle(this.option.title.textStyle)), {
        onEvent: function (t) {
          return r.handleUIEvent(t, chartConstants.elementTypes.AXIS_TITLE, {});
        }
      }));
    };
    e.prototype.renderMarkLine = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("markline-y")
      });
      this.option.markLines.forEach(function (n, i) {
        var r;
        var o;
        var a;
        var s = n.value;
        var h = n.label;
        var l = n.lineStyle;
        var u = n.icon;
        var c = n.range;
        var p = t.parentModel.getState();
        var d = p.top;
        var f = p.bottom;
        var y = p.left;
        var m = p.right;
        var x = h.offsetY;
        var w = h.offsetX;
        var S = t.parentModel.xAxis[0].scale;
        var E = t.scale.scale(s);
        var M = y;
        var O = m;
        if (mathCalcUtils.isValueInRange(E, [d, f])) {
          if (arrayIsArrayUtil.isArray(c) && c.length > 0) {
            M = numberClampUtil.clampNumber(S.scale(c[0]), y, m);
            if (c[1]) {
              O = numberClampUtil.clampNumber(S.scale(c[1]), y, m);
            }
          }
          var T = {
            axis: "y",
            markLine: n,
            index: i,
            elments: {
              label: refValueWrapper.refWrapper(),
              icon: refValueWrapper.refWrapper(),
              line: refValueWrapper.refWrapper()
            }
          };
          var I = E;
          if (h.position === "start") {
            r = M - h.distance;
            a = "middle";
            o = "right";
          } else if (h.position === "middle") {
            r = (M + O) / 2;
            I = E - h.distance;
            a = "bottom";
            o = "center";
          } else if (h.position === "end") {
            r = O + h.distance;
            a = "middle";
            o = "left";
          }
          var Z = new geometryLineElement.LineElement(D(D({
            ref: T.elments.line,
            x1: M,
            y1: E,
            x2: O,
            y2: E
          }, t.getLineStyle(l)), {
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE, T);
            }
          }));
          e.add(Z);
          if (u.symbol) {
            var L = svgSymbolRenderer.getSecondElement(O, E, u.size);
            if (u.symbol) {
              var R = svgSymbolRenderer.detectSymbolType(u, L, D(D({
                ref: T.elments.icon,
                display: u.show
              }, t.getShapeStyle(u)), {
                onEvent: function (e) {
                  return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE_ICON, T);
                }
              }));
              e.add(R);
            }
          }
          var B = richTextRendererUtils.createRichNode(D(D({
            ref: T.elments.label,
            display: h.show,
            text: h.text,
            x: r + w,
            y: I + x,
            textBaseline: a,
            textAlign: o
          }, t.getTextStyle(h)), {
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.MARKLINE_LABEL, T);
            }
          }));
          e.add(B);
        }
      });
      return e;
    };
    e.prototype.renderBreaks = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("breaks")
      });
      var n = this.parentModel.getState();
      var i = n.left;
      var r = n.right;
      var o = this.state.crossAt;
      this.scale.getBreaks().forEach(function (n) {
        var a = n.position;
        e.add(new geometryLineElement.LineElement({
          x1: i,
          x2: r,
          y1: a,
          y2: a,
          lineWidth: 10,
          stroke: "#fff",
          pointerEvents: "none"
        }));
        e.add(new svgPathCanvasRenderer.PathRenderer(D(D({}, t.getLineStyle(t.option.axisLine)), {
          brush: function (t) {
            t.moveTo(o - 5, a + 10);
            t.lineTo(o + 5, a);
            t.moveTo(o - 5, a);
            t.lineTo(o + 5, a - 10);
          },
          pointerEvents: "none"
        })));
      });
      return e;
    };
    e.prototype.render = function () {
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-group")
      });
      var n = this.option.breaks?.length;
      if (this.option.show) {
        if (this.option.alternateColor) {
          e.add(this.renderAlternateColor());
        }
        if (this.option.axisLine.show) {
          e.add(n ? this.renderBrokenAxisLine() : this.renderAxisLine());
        }
        if (this.getAxisSeries().length > 0 && this.option.gridLine.show) {
          e.add(this.renderGridLines());
        }
        if (this.option.tickLine.show) {
          e.add(this.renderTickLines());
        }
        if (this.option.axisLabel.show) {
          e.add(this.renderLabels());
        }
        if (this.option.title.show && this.option.title.text) {
          e.add(this.renderTitle());
        }
        e.add(this.renderCrossLabel());
        if (n) {
          this.chart.addToTopLevel(this.renderBreaks());
        }
      }
      if (this.getAxisSeries().length > 0) {
        this.parentModel.addToGridTop(markAreaRenderer.renderMarkAreas(this));
        this.chart.addToTopLevel(this.renderMarkLine());
      }
      this.chart.addToTopLevel(this.crossLine);
      if (this.getCrosshairsOption().onTopLevel) {
        this.chart.addToTopLevel(this.crossShadow);
      } else {
        this.parentModel.addToGridTop(this.crossShadow);
      }
      return e;
    };
    return e;
  }(axisComponentBaseClass.AxisComponentBase);
  var svgSectorPathElement = require("svg-sector-path-element") /*id: 6333*/;
  var svgArcElement = require("svg-arc-element") /*id: 36835*/;
  var svgPolygonShape = require("svg-polygon-shape") /*id: 89278*/;
  var labelPositionUtils = require("label-position-utils") /*id: 230732*/;
  o = function (t, e) {
    return (o = Object.setPrototypeOf || {
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
  function W(t, e) {
    function n() {
      this.constructor = t;
    }
    o(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function G() {
    return (G = Object.assign || function (t) {
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
  var H = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "angleAxis";
      e.shortType = "angle";
      e.crossLine = new geometryLineElement.LineElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      e.crossShadow = new svgSectorPathElement.SvgSectorPathElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      return e;
    }
    W(e, t);
    e.prototype.getInitialState = function () {
      return {
        min: 0,
        max: 0,
        cx: 0,
        cy: 0,
        startAngle: 0,
        endAngle: 0,
        radius: 0,
        innerRadius: 0,
        crossAt: 0
      };
    };
    e.prototype.beforeRender = function () {
      var t = this.parentModel.getState();
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      var r = t.innerRadius;
      var o = t.startAngle;
      var a = t.endAngle;
      this.setState({
        cx: e,
        cy: n,
        startAngle: o,
        endAngle: a,
        radius: i,
        innerRadius: r
      });
      this.crossShadow.setAttr({
        clip: this.parentModel.getClipPath()
      });
      this.initScale();
    };
    e.prototype.initScale = function () {
      var t = this.getExtreme();
      var e = t[0];
      var n = t[1];
      this.setState({
        min: e,
        max: n
      });
      var i = this.option;
      var r = i.type;
      var o = i.nice;
      var a = i.ticks;
      var s = i.tickCount;
      var h = i.exactTickCount;
      var l = i.interval;
      var u = i.minInterval;
      var c = i.maxInterval;
      var p = i.padding;
      var d = i.allowDecimals;
      var f = this.parentModel.getState();
      var g = f.startAngle;
      var y = f.endAngle;
      var v = Math.abs(y - g) >= 360;
      var m = this.parentModel.getOption().shape === "polygon";
      if (r === logConstants_1.logConstants.VALUE || r === logConstants_1.logConstants.LOG) {
        var x = r === logConstants_1.logConstants.VALUE ? new scaleFormatterRegistry.LinearScaleFormatter(e, n, g, y) : new scaleFormatterRegistry.LogScaleFormatter(e, n, g, y);
        if (o) {
          x.niceTicks(s, {
            interval: l,
            ticks: a,
            minInterval: u,
            maxInterval: c,
            exactTickCount: h,
            allowDecimals: d
          });
        }
        this.scale = x;
      } else if (r === logConstants_1.logConstants.CATEGORY) {
        var _ = this.getCategories();
        var x = undefined;
        if (m) {
          if (v) {
            var b = (y - g) / (n - e + 1) / 2;
            x = new scaleFormatterRegistry.OrdinalScaleFormatter(_, e - 0.5, n + 0.5, g - b, y - b);
          } else {
            x = new scaleFormatterRegistry.OrdinalScaleFormatter(_, e, n, g, y);
          }
        } else {
          var b = v && !p ? (y - g) / (n - e + 1) / 2 : 0;
          x = new scaleFormatterRegistry.OrdinalScaleFormatter(_, e - 0.5, n + 0.5, g - b, y - b);
        }
        this.scale = x;
      }
      this.scale.setFormatter(this.option.axisLabel.formatter);
    };
    e.prototype.invertPoint = function (t, e) {
      return this.parentModel.getCoordinate().pointToData(t, e).angle;
    };
    e.prototype.pointToCoord = function (t, e) {
      return this.parentModel.getCoordinate().pointToCoord(t, e).angle;
    };
    e.prototype.getCrossPosition = function () {
      return this.parentModel.getState().startAngle;
    };
    e.prototype.showCrosshair = function (t, e, n) {
      var i = this.state;
      var r = i.cx;
      var o = i.cy;
      var a = i.innerRadius;
      var s = i.radius;
      var h = this.parentModel.getCoordinate();
      var l = this.shoudUseShadowPointer() && n !== "line" || n === "shadow";
      if (this.isCategroy()) {
        var u = Math.round(this.invertPoint(t, e));
        var c = this.scale.scale(u - 0.5);
        var p = this.scale.scale(u + 0.5);
        var d = this.scale.scale(u);
        var f = h.coordToPoint({
          angle: d,
          radius: a
        });
        var g = h.coordToPoint({
          angle: d,
          radius: s
        });
        this.crossLine.setAttr(G({
          display: !l,
          x1: f.x,
          y1: f.y,
          x2: g.x,
          y2: g.y
        }, this.getCrossLineStyle()));
        this.crossShadow.setAttr(G({
          display: l,
          cx: r,
          cy: o,
          radius: s,
          radiusI: a,
          start: mathCalcUtils.degToRad(c),
          end: mathCalcUtils.degToRad(p)
        }, this.getCrossShadowStyle()));
      } else {
        var d = h.pointToCoord(t, e).angle;
        var f = h.coordToPoint({
          angle: d,
          radius: a
        });
        var g = h.coordToPoint({
          angle: d,
          radius: s
        });
        this.crossShadow.setAttr({
          display: false
        });
        this.crossLine.setAttr(G({
          display: !l,
          x1: f.x,
          y1: f.y,
          x2: g.x,
          y2: g.y
        }, this.getCrossLineStyle()));
      }
    };
    e.prototype.renderPolarArc = function () {
      var t = this;
      var e = this.parentModel.getState();
      var n = e.cx;
      var i = e.cy;
      var r = e.radius;
      var o = e.startAngle;
      var a = e.endAngle;
      if (this.parentModel.getOption().shape !== "polygon") {
        return new svgArcElement.SvgArcElement(G(G({
          cx: n,
          cy: i,
          radius: r,
          start: mathCalcUtils.degToRad(o),
          end: mathCalcUtils.degToRad(a)
        }, this.getLineStyle(this.option.axisLine)), {
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LINE, {});
          }
        }));
      }
      var s = this.scale.getTicks().map(function (e) {
        return t.parentModel.getCoordinate().coordToPoint({
          angle: t.scale.scale(e),
          radius: r
        });
      });
      return new svgPolygonShape.SvgPolygonShape(G(G({
        pointList: s
      }, this.getLineStyle(this.option.axisLine)), {
        onEvent: function (e) {
          return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LINE, {});
        }
      }));
    };
    e.prototype.renderAlternateColor = function () {
      var t = this.getIntervalTicks();
      var e = "rgba(0, 0, 0, 0)";
      var n = ensureArrayUtil_1.ensureArray(this.option.alternateColor);
      if (n.length === 1) {
        n.unshift(e);
      }
      var i = this.parentModel.getState();
      var r = i.cx;
      var o = i.cy;
      var a = i.radius;
      var s = i.innerRadius;
      var h = this.parentModel.getOption().shape === "polygon";
      var l = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-alternateColor"),
        clip: h ? new svgPolygonShape.SvgPolygonShape({
          pointList: this.parentModel.radiusAxis.getPolygonPointsOnRadius(a)
        }) : null
      });
      if (t.length <= 1 || this.getAxisSeries().length === 0) {
        return l;
      }
      for (var c = 0; c < (this.isCategroy() ? t.length : t.length - 1); c++) {
        var p = n[c % n.length];
        if (p !== e) {
          var d = c === t.length - 1;
          var f = t[c];
          var g = t[c + 1];
          var y = this.isCategroy() ? this.scale.scale(f - 0.5) : this.scale.scale(f);
          var v = this.isCategroy() ? d ? this.scale.end : this.scale.scale(g - 0.5) : this.scale.scale(g);
          l.add(new svgSectorPathElement.SvgSectorPathElement({
            cx: r,
            cy: o,
            radius: a,
            radiusI: s,
            start: mathCalcUtils.degToRad(y),
            end: mathCalcUtils.degToRad(v),
            fill: p
          }));
        }
      }
      return l;
    };
    e.prototype.renderTickLines = function () {
      var t = this;
      var e = this.state;
      var n = e.startAngle;
      var i = e.endAngle;
      var r = e.radius;
      var o = this.option.tickLine;
      var a = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-tick")
      });
      var s = o.inside;
      var h = o.length;
      var l = Math.abs(i - n) >= 360;
      var c = this.getIntervalTicks();
      if (l && !this.isCategroy()) {
        c = c.slice(0, -1);
      }
      c.forEach(function (e) {
        var n = t.scale.scale(e);
        var i = t.parentModel.getCoordinate().coordToPoint({
          angle: n,
          radius: r
        });
        var o = t.parentModel.getCoordinate().coordToPoint({
          angle: n,
          radius: s ? r - h : r + h
        });
        a.add(new geometryLineElement.LineElement(G(G({
          x1: i.x,
          y1: i.y,
          x2: o.x,
          y2: o.y
        }, t.getLineStyle(t.option.tickLine)), {
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_TICKS, {});
          }
        })));
      });
      return a;
    };
    e.prototype.renderGridLines = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-gridline")
      });
      var n = this.state;
      var i = n.startAngle;
      var r = n.radius;
      var o = n.innerRadius;
      this.getIntervalTicks().forEach(function (n) {
        var a = t.scale.scale(n);
        if ((a - i) % 360 != 0) {
          var s = t.parentModel.getCoordinate().coordToPoint({
            angle: a,
            radius: o
          });
          var h = t.parentModel.getCoordinate().coordToPoint({
            angle: a,
            radius: r
          });
          var l = new geometryLineElement.LineElement(G(G({
            x1: s.x,
            y1: s.y,
            x2: h.x,
            y2: h.y
          }, t.getLineStyle(t.option.gridLine)), {
            onEvent: function (e) {
              return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_GRID, {});
            }
          }));
          e.add(l);
        }
      });
      return e;
    };
    e.prototype.renderLabels = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-label")
      });
      var n = this.state;
      var i = n.radius;
      var r = n.startAngle;
      var o = n.endAngle;
      var a = this.option.axisLabel;
      var s = a.inside;
      var h = a.margin;
      var l = Math.abs(o - r) >= 360;
      var c = this.getIntervalTicks();
      if (l && !this.isCategroy()) {
        c = c.slice(0, -1);
      }
      c.forEach(function (n) {
        var r = t.scale.getLabel(n);
        var o = t.scale.scale(n);
        var a = t.parentModel.getCoordinate().coordToPoint({
          angle: o,
          radius: i + h * (s ? -1 : 1)
        });
        var l = a.x;
        var u = a.y;
        var c = labelPositionUtils.calcAngleTextAlign(o, s);
        var p = c.textAlign;
        var d = c.textBaseline;
        e.add(richTextRendererUtils.createRichNode(G(G({
          x: l,
          y: u,
          text: r,
          textAlign: p,
          textBaseline: d
        }, t.getTextStyle(t.option.axisLabel)), {
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LABEL, {});
          }
        })));
      });
      return e;
    };
    e.prototype.render = function () {
      var t = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-group")
      });
      if (this.option.show) {
        if (this.option.alternateColor) {
          t.add(this.renderAlternateColor());
        }
        if (this.option.axisLine.show) {
          t.add(this.renderPolarArc());
        }
        if (this.option.gridLine.show) {
          t.add(this.renderGridLines());
        }
        if (this.option.tickLine.show) {
          t.add(this.renderTickLines());
        }
        if (this.option.axisLabel.show) {
          t.add(this.renderLabels());
        }
      }
      this.chart.addToTopLevel(this.crossLine);
      this.chart.addToTopLevel(this.crossShadow);
      return t;
    };
    return e;
  }(axisComponentBaseClass.AxisComponentBase);
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var compoundPathSvgElement = require("compound-path-svg-element") /*id: 903374*/;
  var svgPolyShapeElement = require("svg-poly-shape-element") /*id: 881678*/;
  a = function (t, e) {
    return (a = Object.setPrototypeOf || {
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
  function K(t, e) {
    function n() {
      this.constructor = t;
    }
    a(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function $() {
    return ($ = Object.assign || function (t) {
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
  var q = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "radiusAxis";
      e.shortType = "radius";
      e.crossShadow = new svgSectorPathElement.SvgSectorPathElement({
        key: Math.random(),
        display: false,
        pointerEvents: "none"
      });
      return e;
    }
    K(e, t);
    e.prototype.getInitialState = function () {
      return {
        min: 0,
        max: 0,
        cx: 0,
        cy: 0,
        radius: 0,
        innerRadius: 0,
        angle: 0
      };
    };
    e.prototype.beforeRender = function () {
      var t = this.parentModel.getState();
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      var r = t.innerRadius;
      var o = t.startAngle;
      this.setState({
        cx: e,
        cy: n,
        radius: i,
        innerRadius: r,
        angle: o
      });
      this.initScale();
      if (this.parentModel.getOption().shape === "polygon") {
        this.crossLine = new svgPolygonShape.SvgPolygonShape({
          key: this.getKey("crossline-polygon"),
          display: false,
          pointerEvents: "none"
        });
      } else {
        this.crossLine = new svgArcElement.SvgArcElement({
          key: this.getKey("crossline-arc"),
          display: false,
          pointerEvents: "none"
        });
      }
    };
    e.prototype.initScale = function () {
      var t = this.getExtreme();
      var e = t[0];
      var n = t[1];
      this.setState({
        min: e,
        max: n
      });
      var i = this.option;
      var r = i.type;
      var o = i.nice;
      var a = i.ticks;
      var s = i.tickCount;
      var h = i.exactTickCount;
      var l = i.interval;
      var u = i.minInterval;
      var c = i.maxInterval;
      var p = i.padding;
      var d = i.allowDecimals;
      var f = this.parentModel.getState();
      var g = f.radius;
      var y = f.innerRadius;
      if (r === logConstants_1.logConstants.VALUE || r === logConstants_1.logConstants.LOG) {
        var v = r === logConstants_1.logConstants.VALUE ? new scaleFormatterRegistry.LinearScaleFormatter(e, n, y, g) : new scaleFormatterRegistry.LogScaleFormatter(e, n, y, g);
        if (o) {
          v.niceTicks(s, {
            interval: l,
            ticks: a,
            minInterval: u,
            maxInterval: c,
            exactTickCount: h,
            allowDecimals: d
          });
        }
        this.scale = v;
      } else if (r === logConstants_1.logConstants.CATEGORY) {
        var m = this.getCategories();
        var x = (p === true) * 0.5;
        var v = new scaleFormatterRegistry.OrdinalScaleFormatter(m, e - x, n + x, y, g);
        this.scale = v;
      }
      this.scale.setFormatter(this.option.axisLabel.formatter);
    };
    e.prototype.invertPoint = function (t, e) {
      return this.parentModel.getCoordinate().pointToData(t, e).radius;
    };
    e.prototype.pointToCoord = function (t, e) {
      return this.parentModel.getCoordinate().pointToCoord(t, e).radius;
    };
    e.prototype.getCrossPosition = function () {
      return this.parentModel.getState().startAngle;
    };
    e.prototype.getPolygonPointsOnRadius = function (t) {
      var e = this.parentModel.getCoordinate();
      var n = this.parentModel.angleAxis;
      return n.scale.getTicks().map(function (i) {
        return e.coordToPoint({
          angle: n.scale.scale(i),
          radius: t
        });
      });
    };
    e.prototype.showCrosshair = function (t, e, n) {
      var i = this.state;
      var r = i.cx;
      var o = i.cy;
      var a = this.parentModel.getState();
      var s = a.startAngle;
      var h = a.endAngle;
      var l = this.shoudUseShadowPointer() && n !== "line" || n === "shadow";
      var u = this.parentModel.getOption().shape === "polygon";
      if (this.isCategroy()) {
        var c = Math.round(this.invertPoint(t, e));
        var p = this.scale.scale(c - 0.5);
        var d = this.scale.scale(c + 0.5);
        var f = this.scale.scale(c);
        if (u) {
          this.crossLine.setAttr($({
            display: !l,
            pointList: this.getPolygonPointsOnRadius(f)
          }, this.getCrossLineStyle()));
        } else {
          this.crossLine.setAttr($({
            display: !l,
            cx: r,
            cy: o,
            start: mathCalcUtils.degToRad(s),
            end: mathCalcUtils.degToRad(h),
            radius: f
          }, this.getCrossLineStyle()));
        }
        this.crossShadow.setAttr($({
          display: l,
          cx: r,
          cy: o,
          start: mathCalcUtils.degToRad(s),
          end: mathCalcUtils.degToRad(h),
          radius: p,
          radiusI: d
        }, this.getCrossShadowStyle()));
      } else {
        this.crossShadow.setAttr({
          display: false
        });
        var g = this.pointToCoord(t, e);
        if (u) {
          this.crossLine.setAttr($({
            display: !l,
            pointList: this.getPolygonPointsOnRadius(g)
          }, this.getCrossLineStyle()));
        } else {
          this.crossLine.setAttr($({
            display: !l,
            cx: r,
            cy: o,
            start: mathCalcUtils.degToRad(s),
            end: mathCalcUtils.degToRad(h),
            radius: g
          }, this.getCrossLineStyle()));
        }
      }
    };
    e.prototype.renderRadiusLine = function () {
      var t = this;
      var e = this.state;
      var n = e.cx;
      var i = e.cy;
      var r = e.radius;
      var o = e.innerRadius;
      var a = e.angle;
      var s = n + o * Math.cos(mathCalcUtils.degToRad(a));
      var h = i + o * Math.sin(mathCalcUtils.degToRad(a));
      var l = n + r * Math.cos(mathCalcUtils.degToRad(a));
      var u = i + r * Math.sin(mathCalcUtils.degToRad(a));
      return new geometryLineElement.LineElement($($({
        x1: s === l ? Math.floor(s) + 0.5 : s,
        x2: s === l ? Math.floor(l) + 0.5 : l,
        y1: h === u ? Math.floor(h) + 0.5 : h,
        y2: h === u ? Math.floor(u) + 0.5 : u
      }, this.getLineStyle(this.option.axisLine)), {
        onEvent: function (e) {
          return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LINE, {});
        }
      }));
    };
    e.prototype.renderAlternateColor = function () {
      var t = this.getIntervalTicks();
      var e = "rgba(0, 0, 0, 0)";
      var n = ensureArrayUtil_1.ensureArray(this.option.alternateColor);
      if (n.length === 1) {
        n.unshift(e);
      }
      var i = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-alternateColor")
      });
      var r = this.parentModel.getState();
      var o = r.cx;
      var a = r.cy;
      var s = r.startAngle;
      var h = r.endAngle;
      var l = this.parentModel.getOption().shape === "polygon";
      if (t.length <= 1) {
        return i;
      }
      for (var c = 0; c < (this.isCategroy() ? t.length : t.length - 1); c++) {
        var p = n[c % n.length];
        if (p !== e) {
          var d = c === t.length - 1;
          var f = t[c];
          var g = t[c + 1];
          var y = this.isCategroy() ? this.scale.scale(f - 0.5) : this.scale.scale(f);
          var m = this.isCategroy() ? d ? this.scale.end : this.scale.scale(g - 0.5) : this.scale.scale(g);
          if (l) {
            var x = this.getPolygonPointsOnRadius(Math.max(y, m)).reverse();
            x.push(arrayFirstElement.getFirstElement(x));
            var _ = this.getPolygonPointsOnRadius(Math.min(y, m));
            _.push(_[0]);
            var b = new compoundPathSvgElement.CompoundPathSvgElement({
              shapes: [new svgPolyShapeElement.SvgPolyShapeElement({
                pointList: _
              }), new geometryLineElement.LineElement({
                x1: lastElementHelper.getLastElement(_).x,
                y1: lastElementHelper.getLastElement(_).y,
                x2: arrayFirstElement.getFirstElement(x).x,
                y2: arrayFirstElement.getFirstElement(x).y
              }), new svgPolyShapeElement.SvgPolyShapeElement({
                pointList: x
              })]
            });
            b.setAttr({
              fill: p
            });
            i.add(b);
          } else {
            i.add(new svgSectorPathElement.SvgSectorPathElement({
              cx: o,
              cy: a,
              start: mathCalcUtils.degToRad(s),
              end: mathCalcUtils.degToRad(h),
              radius: y,
              radiusI: m,
              fill: p
            }));
          }
        }
      }
      return i;
    };
    e.prototype.renderTickLines = function () {
      var t = this;
      var e = this.state;
      var n = e.cx;
      var i = e.cy;
      var r = e.angle;
      var o = this.option.tickLine;
      var a = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-tick")
      });
      var s = o.inside;
      var h = o.length;
      this.getIntervalTicks().forEach(function (e) {
        var o = t.scale.scale(e);
        var l = n + o * Math.cos(mathCalcUtils.degToRad(r));
        var u = i + o * Math.sin(mathCalcUtils.degToRad(r));
        var c = s ? -90 : 90;
        var p = l + h * Math.cos(mathCalcUtils.degToRad(r - c));
        var d = u + h * Math.sin(mathCalcUtils.degToRad(r - c));
        a.add(new geometryLineElement.LineElement($($({
          x1: l,
          y1: u,
          x2: p,
          y2: d
        }, t.getLineStyle(t.option.tickLine)), {
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_TICKS, {});
          }
        })));
      });
      return a;
    };
    e.prototype.renderGridLines = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-grid")
      });
      var n = this.state;
      var i = n.cx;
      var r = n.cy;
      var o = n.radius;
      var a = this.parentModel.getState();
      var s = a.startAngle;
      var h = a.endAngle;
      var l = this.isCategroy();
      var c = this.parentModel.getOption().shape === "polygon";
      function p(e) {
        return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_GRID, {});
      }
      this.getIntervalTicks().forEach(function (n) {
        var a = l ? t.scale.scale(n + 0.5) : t.scale.scale(n);
        if (a !== o) {
          if (c) {
            var u = t.getPolygonPointsOnRadius(a);
            e.add(new svgPolygonShape.SvgPolygonShape($($({
              pointList: u
            }, t.getLineStyle(t.option.gridLine)), {
              onEvent: p
            })));
          } else {
            var d = new svgArcElement.SvgArcElement($($({
              cx: i,
              cy: r,
              radius: a,
              start: mathCalcUtils.degToRad(s),
              end: mathCalcUtils.degToRad(h)
            }, t.getLineStyle(t.option.gridLine)), {
              onEvent: p
            }));
            e.add(d);
          }
        }
      });
      return e;
    };
    e.prototype.renderLabels = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-label")
      });
      var n = this.state.angle;
      var i = this.option.axisLabel;
      var r = i.inside;
      var o = i.margin;
      var a = labelPositionUtils.calcAngleTextBase(n, r);
      var s = a.textAlign;
      var h = a.textBaseline;
      this.getIntervalTicks().forEach(function (i) {
        var a = t.scale.getLabel(i);
        var l = t.scale.scale(i);
        var u = t.parentModel.getCoordinate().coordToPoint({
          angle: n,
          radius: l
        });
        var c = r ? -90 : 90;
        var p = u.x + o * Math.cos(mathCalcUtils.degToRad(n - c));
        var d = u.y + o * Math.sin(mathCalcUtils.degToRad(n - c));
        e.add(richTextRendererUtils.createRichNode($($({
          x: p,
          y: d,
          text: a,
          textAlign: s,
          textBaseline: h
        }, t.getTextStyle(t.option.axisLabel)), {
          onEvent: function (e) {
            return t.handleUIEvent(e, chartConstants.elementTypes.AXIS_LABEL, {});
          }
        })));
      });
      return e;
    };
    e.prototype.renderMarkLine = function () {
      var t = this;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("markline-radius-axis")
      });
      var n = this.parentModel.getState();
      var i = n.cx;
      var r = n.cy;
      var o = n.startAngle;
      var a = n.endAngle;
      this.option.markLines.forEach(function (n) {
        var s = n.value;
        var h = t.scale.scale(s);
        e.add(new svgArcElement.SvgArcElement($({
          cx: i,
          cy: r,
          radius: h,
          start: mathCalcUtils.degToRad(o),
          end: mathCalcUtils.degToRad(a)
        }, n.lineStyle)));
      });
      return e;
    };
    e.prototype.render = function () {
      var t = new svgGroupElement.SvgGroupElement({
        key: this.getKey("axis-group")
      });
      if (this.option.show) {
        if (this.option.alternateColor) {
          t.add(this.renderAlternateColor());
        }
        if (this.option.axisLine.show) {
          t.add(this.renderRadiusLine());
        }
        if (this.option.gridLine.show) {
          t.add(this.renderGridLines());
        }
        if (this.option.tickLine.show) {
          t.add(this.renderTickLines());
        }
        if (this.option.axisLabel.show) {
          this.parentModel.addToPolarTop(this.renderLabels());
        }
      }
      if (this.getAxisSeries().length > 0) {
        this.chart.addToTopLevel(this.renderMarkLine());
      }
      this.chart.addToTopLevel(this.crossLine);
      this.chart.addToTopLevel(this.crossShadow);
      return t;
    };
    return e;
  }(axisComponentBaseClass.AxisComponentBase);
  var coordinateSystemTypes = require("coordinate-system-types") /*id: 406155*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  function tn() {
    return (tn = Object.assign || function (t) {
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
  var ti = function () {
    function t(t, e) {
      this.coordinateSystem = "cartesian2d";
      this.dimensions = ["x", "y"];
      this._xAxis = t;
      this._yAxis = e;
    }
    t.prototype.dataToCoord = function (t, e) {
      var n = this._xAxis.scale;
      var i = this._yAxis.scale;
      var r = n.type === "ordinal" && e;
      var o = i.type === "ordinal" && e;
      var a = r ? n.categories.indexOf(t.x) : t.x;
      var s = o ? i.categories.indexOf(t.y) : t.y;
      return {
        x: n.scale(a),
        y: i.scale(s)
      };
    };
    t.prototype.coordToPoint = function (t) {
      var e = [this._xAxis.scale.start, this._xAxis.scale.end];
      var n = e[0];
      var i = e[1];
      var r = [this._yAxis.scale.start, this._yAxis.scale.end];
      var o = r[0];
      var a = r[1];
      return tn(tn({}, t), {
        outside: !mathCalcUtils.isValueInRange(t.x, [n, i]) || !mathCalcUtils.isValueInRange(t.y, [o, a])
      });
    };
    t.prototype.dataToPoint = function (t, e = false) {
      return this.coordToPoint(this.dataToCoord(t, e));
    };
    t.prototype.pointToCoord = function (t, e) {
      return {
        x: t,
        y: e
      };
    };
    t.prototype.coordToData = function (t) {
      return {
        x: this._xAxis.scale.invert(t.x),
        y: this._yAxis.scale.invert(t.y)
      };
    };
    t.prototype.getXScale = function () {
      return this._xAxis.scale;
    };
    t.prototype.getYScale = function () {
      return this._yAxis.scale;
    };
    t.prototype.recordToCoord = function (t, e, n) {
      return this.dataToCoord({
        x: this._xAxis.isCategroy() ? e : n.x,
        y: this._yAxis.isCategroy() ? e : n.y
      });
    };
    t.prototype.recordToPoint = function (t, e, n) {
      return this.coordToPoint(this.recordToCoord(t, e, n));
    };
    t.prototype.getCategoryAxis = function () {
      var t = this._xAxis.isCategroy();
      var e = this._yAxis.isCategroy();
      if (t) {
        return this._xAxis;
      } else if (!t && e) {
        return this._yAxis;
      } else {
        return this._xAxis;
      }
    };
    t.prototype.getValueAxis = function () {
      var t = this._xAxis.isCategroy();
      var e = this._yAxis.isCategroy();
      if (e && !t && e) {
        return this._xAxis;
      } else {
        return this._yAxis;
      }
    };
    t.prototype.getXAxis = function () {
      return this._xAxis;
    };
    t.prototype.getYAxis = function () {
      return this._yAxis;
    };
    t.prototype.valueToCoord = function (t, e) {
      if (this.getCategoryAxis().type === "xAxis") {
        return this.dataToCoord({
          x: e,
          y: t
        });
      } else {
        return this.dataToCoord({
          x: t,
          y: e
        });
      }
    };
    return t;
  }();
  var refRenderProcessor = require("ref-render-processor") /*id: 869089*/;
  var chartComponentExtender = require("chart-component-extender") /*id: 729892*/;
  var chartAxisDataUtils = require("chart-axis-data-utils") /*id: 426771*/;
  s = function (t, e) {
    return (s = Object.setPrototypeOf || {
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
  function ts(t, e) {
    function n() {
      this.constructor = t;
    }
    s(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function th() {
    return (th = Object.assign || function (t) {
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
  var tl = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "grid";
      return e;
    }
    ts(e, t);
    e.prevProcessOption = function (t) {
      t.grid = ensureArrayUtil_1.ensureArray(t.grid || {});
      t.series = t.series.map(function (t) {
        return safePropertyAssignUtil.safePropertyAssign({
          xAxis: 0,
          yAxis: 0
        }, t);
      });
    };
    e.prototype.getDefaultOption = function (t) {
      return {
        background: "none",
        adjustAxisPosition: true,
        facet: 0,
        quadrant: (t == null ? undefined : t.quadrant) && {
          labels: {},
          areaFillColors: {},
          textStyle: {
            color: "#999999",
            fontSize: 12
          },
          crosshairs: {
            lineStyle: {
              stroke: "#6E748E",
              lineWidth: 1
            }
          }
        }
      };
    };
    e.prototype.getInitialState = function () {
      return {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        outerRect: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }
      };
    };
    e.prototype.init = function () {
      var t = this;
      this.initAxisModels();
      this._clipPath = new svgRectElement.SvgRectElement({
        draggable: true,
        fill: "#ffffff",
        getDragOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        onEvent: function (e) {
          var n = e.x;
          var i = e.y;
          var r = chartAxisDataUtils.findDataPoints(t, n, i);
          var o = r.points;
          var a = r.dataIndex;
          t.handleUIEvent(e, "plot", {
            target: t,
            points: o,
            dataIndex: a
          });
        }
      });
      this.chart.getRenderInstance().addEventElement(this._clipPath);
    };
    e.prototype.initAxisModels = function () {
      var t = this;
      var e = this.chart.getOption();
      var n = e.xAxis;
      var i = e.yAxis;
      this.xAxis = [];
      this.yAxis = [];
      n.forEach(function (n, i) {
        if (n.grid === t.extraInfo.gridIndex) {
          var r = new Z("xAxis", n, t.chart, {
            axis: "xAxis",
            index: i
          }, t);
          t.xAxis.push(r);
          e.xAxis[i] = r.getOption();
        }
      });
      i.forEach(function (n, i) {
        if (n.grid === t.extraInfo.gridIndex) {
          var r = new B("yAxis", n, t.chart, {
            axis: "yAxis",
            index: i
          }, t);
          t.yAxis.push(r);
          e.yAxis[i] = r.getOption();
        }
      });
      this.xAxis.forEach(function (t) {
        return t.init();
      });
      this.yAxis.forEach(function (t) {
        return t.init();
      });
    };
    e.prototype.getAllAxis = function () {
      return [].concat(this.xAxis, this.yAxis);
    };
    e.prototype.getCoordinate = function (t) {
      var e = t.xAxis;
      var n = t.yAxis;
      return new ti(this.xAxis.filter(function (t) {
        return t.extraInfo.index === e;
      })[0], this.yAxis.filter(function (t) {
        return t.extraInfo.index === n;
      })[0]);
    };
    e.prototype.getDependentSeries = function () {
      return this.chart.getSeriesByDependency("coord").filter(function (t) {
        return t.option.coord === "cartesian2d";
      });
    };
    e.prototype.beforeRender = function () {
      var t = this.chart.getFacetContentBox(this.option.facet);
      var e = t.top;
      var n = t.left;
      var i = t.right;
      var r = t.bottom;
      var o = t.width;
      var a = t.height;
      this.setState({
        top: e,
        left: n,
        right: i,
        bottom: r
      });
      var s = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      var h = this.getDependentSeries().length > 0;
      this._clipPath.setAttr({
        display: h
      });
      if (this.option.adjustAxisPosition) {
        [].concat(this.xAxis, this.yAxis).forEach(function (t) {
          t.initScale();
          var e = t.getLabelAreaSize();
          var n = e.side;
          var i = e.size;
          if (isNumberUtil.isNumber(i)) {
            s[n] += i;
          }
        });
      }
      this.setState({
        top: e + s.top,
        left: n + s.left,
        right: i - s.right,
        bottom: r - s.bottom,
        width: o - s.left - s.right,
        height: a - s.top - s.bottom,
        outerRect: {
          top: e,
          left: n,
          right: i,
          bottom: r
        }
      });
      this._clipPath.setAttr({
        x: this.state.left + 0.5,
        y: this.state.top + 0.5,
        width: this.state.width - 1,
        height: this.state.height - 0.5
      });
      this._topLevelElements = [];
      this.xAxis.forEach(function (t) {
        return t.beforeRender();
      });
      this.yAxis.forEach(function (t) {
        return t.beforeRender();
      });
    };
    e.prototype.afterRender = function () {
      this.xAxis.forEach(function (t) {
        return t.afterRender();
      });
      this.yAxis.forEach(function (t) {
        return t.afterRender();
      });
      this._topLevelElements = [];
    };
    e.prototype.getEventPlotArea = function () {
      return this._clipPath;
    };
    e.prototype.getClipPath = function (t = 0) {
      return new svgRectElement.SvgRectElement({
        x: this.state.left - t,
        y: this.state.top - t,
        width: this.state.width + t * 2,
        height: this.state.height + t * 2,
        lineWidth: 0
      });
    };
    e.prototype.addToGridTop = function (t) {
      this._topLevelElements.push(t);
    };
    e.prototype.renderQuadrant = function () {
      var t = this.option.quadrant;
      var e = t.labels;
      var n = t.crosshairs;
      var i = t.areaFillColors;
      var r = this.state;
      var o = r.top;
      var a = r.left;
      var s = r.right;
      var h = r.bottom;
      var l = r.width;
      var c = r.height;
      var p = this.getTextStyle(this.option.quadrant.textStyle);
      var d = (a + s) / 2;
      var f = (o + h) / 2;
      var g = new svgGroupElement.SvgGroupElement({
        key: this.getKey("quadrant"),
        pointerEvents: "none"
      });
      var y = new svgGroupElement.SvgGroupElement({
        key: this.getKey("quadrant-labels")
      });
      var x = new svgGroupElement.SvgGroupElement({
        key: this.getKey("quadrant-rects")
      });
      var _ = {
        top: o + 8,
        left: a + 8,
        right: s - 8,
        bottom: h - 8
      };
      var w = {
        topLeft: ["left", "top"],
        topRight: ["right", "top"],
        bottomLeft: ["left", "bottom"],
        bottomRight: ["right", "bottom"]
      };
      var S = {
        topLeft: {
          x: a,
          y: o
        },
        topRight: {
          x: d,
          y: o
        },
        bottomLeft: {
          x: a,
          y: f
        },
        bottomRight: {
          x: d,
          y: f
        }
      };
      ["topLeft", "topRight", "bottomLeft", "bottomRight"].forEach(function (t) {
        var n = e[t];
        var r = i[t];
        var o = w[t];
        var a = o[0];
        var s = o[1];
        var h = _[a];
        var u = _[s];
        if (!isNullCheck.isNull(n) || isUndefinedCheck.isUndefined(n)) {
          y.add(richTextRendererUtils.createRichNode(th(th({
            key: t,
            text: n,
            x: h,
            y: u
          }, p), {
            textAlign: a === "left" ? "left" : "right",
            textBaseline: s === "top" ? "top" : "bottom"
          })));
        }
        if (r) {
          x.add(new svgRectElement.SvgRectElement(th(th({}, S[t]), {
            width: l / 2,
            height: c / 2,
            fill: r
          })));
        }
      });
      g.add(x);
      g.add(y);
      if (n) {
        var A = new svgGroupElement.SvgGroupElement(th({
          key: this.getKey("crosshairs")
        }, n.lineStyle));
        A.add(new geometryLineElement.LineElement({
          x1: d,
          x2: d,
          y1: o,
          y2: h
        }));
        A.add(new geometryLineElement.LineElement({
          x1: a,
          x2: s,
          y1: f,
          y2: f
        }));
        g.add(A);
      }
      return g;
    };
    e.prototype.render = function () {
      var t = this.option;
      var e = t.background;
      var n = t.quadrant;
      var i = new svgGroupElement.SvgGroupElement({
        key: this.getKey("grid")
      });
      if (this.getDependentSeries().length === 0) {
        return i;
      }
      var r = this.state;
      var o = r.top;
      var a = r.left;
      var s = r.width;
      var h = r.height;
      var l = new svgRectElement.SvgRectElement({
        key: this.getKey("bg"),
        x: a,
        y: o,
        width: s,
        height: h,
        fill: e,
        pointerEvents: "none"
      });
      i.add(l);
      this.xAxis.forEach(function (t) {
        return i.add(refRenderProcessor.getRefHandler(t));
      });
      this.yAxis.forEach(function (t) {
        return i.add(refRenderProcessor.getRefHandler(t));
      });
      this._topLevelElements.forEach(function (t) {
        return i.add(t);
      });
      if (n) {
        i.add(this.renderQuadrant());
      }
      return i;
    };
    e.prototype.beforeDestroy = function () {
      this.chart.getRenderInstance().removeEventElement(this._clipPath);
      if (this.xAxis) {
        this.xAxis.forEach(function (t) {
          return t.destroy();
        });
      }
      if (this.yAxis) {
        this.yAxis.forEach(function (t) {
          return t.destroy();
        });
      }
    };
    return e;
  }(chartComponentExtender.ChartComponentExtender);
  var _2dVectorMathUtils = require("2d-vector-math-utils") /*id: 843052*/;
  var tc = function () {
    function t(t, e, n, i, r, o) {
      this.coordinateSystem = "polar";
      this.dimensions = ["angle", "radius"];
      var a = t.scale.start;
      var s = t.scale.end;
      this._angleAxis = t;
      this._radiusAxis = e;
      this._cx = n;
      this._cy = i;
      this._radius = r;
      this._innerRadius = o;
      this._startAngle = a;
      this._endAngle = s;
      if (Math.abs(s - a) >= 360) {
        this._endAngle = s > a ? a + 360 : a - 360;
      }
    }
    t.prototype.getCenter = function () {
      return [this._cx, this._cy];
    };
    t.prototype.dataToCoord = function (t) {
      return {
        angle: this._angleAxis.scale.scale(t.angle),
        radius: this._radiusAxis.scale.scale(t.radius)
      };
    };
    t.prototype.coordToPoint = function (t) {
      return {
        x: this._cx + t.radius * Math.cos(t.angle * Math.PI / 180),
        y: this._cy + t.radius * Math.sin(t.angle * Math.PI / 180),
        outside: !mathCalcUtils.isValueInRange(t.angle, [this._startAngle, this._endAngle]) || !mathCalcUtils.isValueInRange(t.radius, [this._radius, this._innerRadius])
      };
    };
    t.prototype.dataToPoint = function (t) {
      return this.coordToPoint(this.dataToCoord(t));
    };
    t.prototype.pointToData = function (t, e) {
      return this.coordToData(this.pointToCoord(t, e));
    };
    t.prototype.pointToCoord = function (t, e) {
      var n = t - this._cx;
      var i = e - this._cy;
      var r = Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2));
      var o = (this._startAngle + this._endAngle) / 2;
      var a = Math.cos(mathCalcUtils.degToRad(o));
      var s = Math.sin(mathCalcUtils.degToRad(o));
      var h = mathCalcUtils.radToDeg(_2dVectorMathUtils.getAngleBetween([n, i], [a, s]));
      return {
        radius: r,
        angle: o + (_2dVectorMathUtils.crossProduct2D([n, i], [a, s]) < 0 ? h : -h)
      };
    };
    t.prototype.coordToData = function (t) {
      return {
        angle: this._angleAxis.scale.invert(t.angle),
        radius: this._radiusAxis.scale.invert(t.radius)
      };
    };
    t.prototype.recordToCoord = function (t, e, n) {
      return this.dataToCoord({
        angle: this._angleAxis.isCategroy() ? e : n.angle,
        radius: this._radiusAxis.isCategroy() ? e : n.radius
      });
    };
    t.prototype.recordToPoint = function (t, e, n) {
      return this.coordToPoint(this.recordToCoord(t, e, n));
    };
    t.prototype.getCategoryAxis = function () {
      if (this._angleAxis.isCategroy()) {
        return this._angleAxis;
      } else if (this._radiusAxis.isCategroy()) {
        return this._radiusAxis;
      } else {
        return this._angleAxis;
      }
    };
    t.prototype.getValueAxis = function () {
      if (this._angleAxis.isCategroy()) {
        return this._radiusAxis;
      } else if (this._radiusAxis.isCategroy()) {
        return this._angleAxis;
      } else {
        return this._radiusAxis;
      }
    };
    t.prototype.valueToCoord = function (t, e) {
      if (this.getCategoryAxis().extraInfo.axis === "angleAxis") {
        return this.dataToCoord({
          angle: e,
          radius: t
        });
      } else {
        return this.dataToCoord({
          angle: t,
          radius: e
        });
      }
    };
    return t;
  }();
  h = function (t, e) {
    return (h = Object.setPrototypeOf || {
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
  function tp(t, e) {
    function n() {
      this.constructor = t;
    }
    h(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var td = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = "polar";
      e._sectorClip = new svgSectorPathElement.SvgSectorPathElement({
        fill: "#ffffff"
      });
      e._polygonClip = new svgPolygonShape.SvgPolygonShape({
        fill: "#ffffff"
      });
      e._topLevelElements = [];
      return e;
    }
    tp(e, t);
    e.prevProcessOption = function (t) {
      t.polar = ensureArrayUtil_1.ensureArray(t.polar || {});
      t.series = t.series.map(function (t) {
        return safePropertyAssignUtil.safePropertyAssign({
          polar: 0
        }, t);
      });
    };
    e.prototype.getDefaultOption = function () {
      return {
        center: ["50%", "50%"],
        size: "75%",
        innerSize: 0,
        startAngle: -90,
        endAngle: null,
        shape: "auto",
        background: "none",
        facet: 0
      };
    };
    e.prototype.getInitialState = function () {
      return {
        cx: 0,
        cy: 0,
        radius: 0,
        innerRadius: 0,
        startAngle: 0,
        endAngle: 0
      };
    };
    e.prototype.init = function () {
      var t = this;
      this.initAxisModels();
      function e(e) {
        return t.handleUIEvent(e, "plot", {
          target: t
        });
      }
      this._sectorClip.setAttr({
        onEvent: e
      });
      this._polygonClip.setAttr({
        onEvent: e
      });
      var n = this.chart.getRenderInstance();
      n.addEventElement(this._sectorClip);
      n.addEventElement(this._polygonClip);
    };
    e.prototype.initAxisModels = function () {
      var t = this;
      var e = this.chart.getOption();
      var n = e.angleAxis;
      var i = e.radiusAxis;
      var r = n.filter(function (e) {
        return (e.polar || 0) === t.extraInfo.polarIndex;
      })[0];
      var o = i.filter(function (e) {
        return (e.polar || 0) === t.extraInfo.polarIndex;
      })[0];
      this.angleAxis = new H("angleAxis", r, this.chart, {
        axis: "angleAxis",
        index: n.indexOf(r)
      }, this);
      this.radiusAxis = new q("radiusAxis", o, this.chart, {
        axis: "radiusAxis",
        index: i.indexOf(o)
      }, this);
      e.angleAxis[this.angleAxis.extraInfo.index] = this.angleAxis.getOption();
      e.radiusAxis[this.radiusAxis.extraInfo.index] = this.radiusAxis.getOption();
      this.angleAxis.init();
      this.radiusAxis.init();
    };
    e.prototype.getCoordinate = function () {
      var t = this.state;
      var e = t.cx;
      var n = t.cy;
      var i = t.radius;
      var r = t.innerRadius;
      return new tc(this.angleAxis, this.radiusAxis, e, n, i, r);
    };
    e.prototype.getAllAxis = function () {
      return [this.angleAxis, this.radiusAxis];
    };
    e.prototype.getDependentSeries = function () {
      var t = this;
      return this.chart.getSeriesByDependency("coord").filter(function (e) {
        return e.option.coord === "polar" && e.option.polar === t.extraInfo.polarIndex;
      });
    };
    e.prototype.beforeRender = function () {
      var t = this.option.center;
      var e = this.chart.getFacetContentBox(this.option.facet);
      var n = e.top;
      var i = e.left;
      var r = e.width;
      var o = e.height;
      var a = mathCalcUtils.parsePercentValue(this.option.size, Math.min(r, o)) / 2;
      var s = mathCalcUtils.parsePercentValue(this.option.innerSize, a * 2) / 2;
      var h = this.option.startAngle;
      var l = this.getDependentSeries().length > 0;
      var u = isNumberUtil.isNumber(this.option.endAngle) ? this.option.endAngle : this.option.startAngle + 360;
      if (Math.abs(u - h) >= 360) {
        u = u > h ? h + 360 : h - 360;
      }
      var c = mathCalcUtils.isPercentString(t[0]) ? i + mathCalcUtils.parsePercentValue(t[0], r) : t[0];
      var p = mathCalcUtils.isPercentString(t[1]) ? n + mathCalcUtils.parsePercentValue(t[1], o) : t[1];
      this.setState({
        cx: c,
        cy: p,
        radius: a,
        innerRadius: s,
        startAngle: h,
        endAngle: u
      });
      var d = this.option.shape === "polygon";
      this._sectorClip.setAttr({
        display: !d && l
      });
      this._polygonClip.setAttr({
        display: d && l
      });
      if (!d) {
        this._sectorClip.setAttr({
          cx: c,
          cy: p,
          radius: a,
          radiusI: s,
          start: mathCalcUtils.degToRad(h),
          end: mathCalcUtils.degToRad(u),
          lineWidth: 0
        });
      }
      this.angleAxis.beforeRender();
      this.radiusAxis.beforeRender();
      if (d) {
        var f = this.radiusAxis.getPolygonPointsOnRadius(a);
        this._polygonClip.setAttr({
          pointList: f
        });
      }
    };
    e.prototype.afterRender = function () {
      this.angleAxis.afterRender();
      this.radiusAxis.afterRender();
      this._topLevelElements.length = 0;
    };
    e.prototype.getClipPath = function () {
      if (this.option.shape === "polygon") {
        return this._polygonClip;
      } else {
        return this._sectorClip;
      }
    };
    e.prototype.addToPolarTop = function (t) {
      this._topLevelElements.push(t);
    };
    e.prototype.render = function () {
      var t = new svgGroupElement.SvgGroupElement({
        key: this.getKey("polar")
      });
      if (this.getDependentSeries().length !== 0) {
        var e = this.state;
        var n = e.cx;
        var i = e.cy;
        var r = e.radius;
        var o = e.innerRadius;
        var a = e.startAngle;
        var s = e.endAngle;
        var h = this.option.background;
        var l = new svgSectorPathElement.SvgSectorPathElement({
          key: this.getKey("polar-background"),
          cx: n,
          cy: i,
          radius: r,
          radiusI: o,
          start: mathCalcUtils.degToRad(a),
          end: mathCalcUtils.degToRad(s),
          fill: h,
          stroke: null,
          pointerEvents: "none"
        });
        t.add(l);
        t.add(refRenderProcessor.getRefHandler(this.radiusAxis));
        t.add(refRenderProcessor.getRefHandler(this.angleAxis));
        this._topLevelElements.forEach(function (e) {
          return t.add(e);
        });
        return t;
      }
    };
    e.prototype.beforeDestroy = function () {
      var t = this.chart.getRenderInstance();
      t.removeEventElement(this._sectorClip);
      t.removeEventElement(this._polygonClip);
      if (this.angleAxis && this.radiusAxis) {
        this.angleAxis.destroy();
        this.radiusAxis.destroy();
      }
    };
    return e;
  }(chartComponentExtender.ChartComponentExtender);
  var geoMapCoordinateSystem = require("geo-map-coordinate-system") /*id: 766252*/;
  l = function (t, e) {
    return (l = Object.setPrototypeOf || {
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
  function tg(t, e) {
    function n() {
      this.constructor = t;
    }
    l(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var ty = {
    coord: function (t) {
      function e() {
        var e = t !== null && t.apply(this, arguments) || this;
        e.type = "coord";
        e.polars = [];
        e.geo = null;
        e.grids = [];
        e._coordinateSystems = {};
        return e;
      }
      tg(e, t);
      Object.defineProperty(e.prototype, "grid", {
        get: function () {
          return this.grids[0];
        },
        enumerable: true,
        configurable: true
      });
      e.prototype.getCordinateSystem = function (t) {
        return this._coordinateSystems[t];
      };
      e.prevProcessOption = function (t) {
        axisComponentBaseClass.AxisComponentBase.prevProcessOption(t);
        tl.prevProcessOption(t);
        td.prevProcessOption(t);
      };
      e.prototype.getDefaultOption = function () {};
      e.prototype.init = function () {
        var t = this;
        var e = this.chart.getOption();
        var n = this.chart.getOption();
        var i = n.grid;
        var r = n.polar;
        this.grids = i.map(function (e, n) {
          return new tl("grid", e, t.chart, {
            gridIndex: n
          }, t);
        });
        this.polars = r.map(function (e, n) {
          return new td("polar", e, t.chart, {
            polarIndex: n
          }, t);
        });
        e.polar = this.polars.map(function (t) {
          return t.getOption();
        });
        e.grid = this.grids.map(function (t) {
          return t.getOption();
        });
        this.polars.forEach(function (t) {
          return t.init();
        });
        this.grids.forEach(function (t) {
          return t.init();
        });
        if (this.hasCordinateSeries("geo")) {
          this.geo = new geoMapCoordinateSystem.GeoMapCoordinateSystem("geo", e.geo, this.chart, null, this);
          e.geo = this.geo.getOption();
          this.geo.init();
        }
        if (this.hasCordinateSeries(coordinateSystemTypes.coordinateTypes.CALENDAR)) {
          var o = ty[coordinateSystemTypes.coordinateTypes.CALENDAR];
          this._coordinateSystems[coordinateSystemTypes.coordinateTypes.CALENDAR] = new o(coordinateSystemTypes.coordinateTypes.CALENDAR, e.calendar, this.chart, null, this);
        }
        if (this.hasCordinateSeries(coordinateSystemTypes.coordinateTypes.AMAP)) {
          var o = ty[coordinateSystemTypes.coordinateTypes.AMAP];
          var a = new o(coordinateSystemTypes.coordinateTypes.AMAP, e.amap, this.chart, null, this);
          this._coordinateSystems[coordinateSystemTypes.coordinateTypes.AMAP] = a;
          e.amap = a.getOption();
        }
        this._eachRegisteredCoord(function (t) {
          return t.init();
        });
      };
      e.prototype.hasCordinateSeries = function (t) {
        return this.chart.getOption().series.some(function (e) {
          return e.coord === t || t === "geo" && e.type === "map" && e.coord !== "amap";
        });
      };
      e.prototype.getAxis = function (t, e) {
        var n;
        this.grids.forEach(function (i) {
          var r = t === "x" ? i.xAxis : i.yAxis;
          var o = 0;
          for (; o < r.length; o++) {
            if (r[o].extraInfo.index === e) {
              n = r[o];
            }
          }
        });
        return n;
      };
      e.prototype.getCoordinate = function (t) {
        var e = t.coord;
        var n = t.polar;
        var i = t.xAxis;
        if (e === "cartesian2d") {
          var r = this.chart.getOption().xAxis[i].grid;
          return this.grids[r].getCoordinate(t);
        }
        if (e === "polar") {
          return this.polars[n].getCoordinate();
        } else if (e === "geo") {
          return this.geo.getCoordinate();
        } else {
          return this._coordinateSystems[e].getCoordinate();
        }
      };
      e.prototype.getCoordClipPath = function (t, e = 0) {
        var n = t.coord;
        var i = t.polar;
        var r = t.xAxis;
        if (n === "cartesian2d") {
          var o = this.chart.getOption().xAxis[r].grid;
          return this.grids[o].getClipPath(e);
        }
        if (n === "polar") {
          return this.polars[i].getClipPath();
        }
      };
      e.prototype.updated = function () {
        this._destroyCoords();
        this.init();
      };
      e.prototype.beforeRender = function () {
        this.polars.forEach(function (t) {
          return t.beforeRender();
        });
        this.grids.forEach(function (t) {
          return t.beforeRender();
        });
        if (this.geo) {
          this.geo.beforeRender();
        }
        this._eachRegisteredCoord(function (t) {
          t.beforeRender();
        });
      };
      e.prototype.afterRender = function () {
        this.polars.forEach(function (t) {
          return t.afterRender();
        });
        this.grids.forEach(function (t) {
          return t.afterRender();
        });
        if (this.geo) {
          this.geo.afterRender();
        }
        this._eachRegisteredCoord(function (t) {
          t.afterRender();
        });
      };
      e.prototype.render = function () {
        var t = new svgGroupElement.SvgGroupElement({
          key: this.getKey("coord")
        });
        this.grids.forEach(function (e) {
          return t.add(refRenderProcessor.getRefHandler(e));
        });
        this.polars.forEach(function (e) {
          return t.add(refRenderProcessor.getRefHandler(e));
        });
        if (this.geo) {
          t.add(refRenderProcessor.getRefHandler(this.geo));
        }
        this._eachRegisteredCoord(function (e) {
          t.add(refRenderProcessor.getRefHandler(e));
        });
        return t;
      };
      e.prototype.beforeDestroy = function () {
        this._destroyCoords();
      };
      e.prototype._destroyCoords = function () {
        var t = this;
        this.grids.forEach(function (t) {
          return t.destroy();
        });
        this.polars.forEach(function (t) {
          return t.destroy();
        });
        if (this.geo) {
          this.geo.destroy();
        }
        if (this._coordinateSystems[coordinateSystemTypes.coordinateTypes.CALENDAR]) {
          this._coordinateSystems[coordinateSystemTypes.coordinateTypes.CALENDAR].destroy();
        }
        this.geo = null;
        this._eachRegisteredCoord(function (e, n) {
          e.destroy();
          delete t._coordinateSystems[n];
        });
      };
      e.prototype._eachRegisteredCoord = function (t) {
        for (var e in this._coordinateSystems) {
          t(this._coordinateSystems[e], e);
        }
      };
      e.dependencies = ["slider"];
      return e;
    }(chartComponentExtender.ChartComponentExtender)
  };
  function tv(t, e) {
    ty[t] = e;
    e.type = t;
  }
  function tm(t) {
    return ty[t];
  }
  require.d(exports, {
    registerCoordSystem: function () {
      return tv;
    },
    getCoordSystem: function () {
      return tm;
    }
  });
}