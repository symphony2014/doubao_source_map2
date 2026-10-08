// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'getDefaultCrosshairsOption'
// - Renamed export 'Z' to 'AxisComponentBase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 572075
         */
module.exports = function (module, exports, require) {
  var i;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var arrayMinByMatcher = require("array-min-by-matcher") /*id: 65435*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var refValueWrapper = require("ref-value-wrapper") /*id: 368437*/;
  var svgGroupElement = require("svg-group-element") /*id: 249968*/;
  var svgRectElement = require("svg-rect-element") /*id: 345343*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  var logConstants_1 = require("log-constants_1") /*id: 223212*/;
  var chartComponentExtender = require("chart-component-extender") /*id: 729892*/;
  var ensureArrayUtil_1 = require("ensure-array-util_1") /*id: 155564*/;
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  var deepMergeArrayTruncate = require("deep-merge-array-truncate") /*id: 351514*/;
  var markAreaRenderer = require("mark-area-renderer") /*id: 926134*/;
  var boxLayoutUtils = require("box-layout-utils") /*id: 578400*/;
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
  function A(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function E() {
    return (E = Object.assign || function (t) {
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
  function k() {
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
  function M() {
    return {
      type: null,
      onTopLevel: false,
      lineStyle: {
        stroke: "#AFB5CC",
        lineWidth: 1
      },
      shadowStyle: {
        fill: "#E0E2EB",
        opacity: 0.3,
        lineWidth: 0,
        stroke: null
      },
      label: {
        show: false,
        formatter: null,
        padding: 4,
        backgroundStyle: {
          fill: "#878EA8",
          borderRadius: 2
        },
        textStyle: {
          color: "#ffffff",
          fontSize: 12
        }
      }
    };
  }
  var P = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.labelRef = {};
      e.crossLabelRef = refValueWrapper.refWrapper();
      e.autoRotate = 0;
      e.handleMarkLineMouseOver = function (t) {
        e.togglelHighlightMarkline(t, true);
      };
      e.handleMarkLineMouseOut = function (t) {
        e.togglelHighlightMarkline(t, false);
      };
      return e;
    }
    A(e, t);
    e.prevProcessOption = function (t) {
      t.xAxis = ensureArrayUtil_1.ensureArray(t.xAxis || [{
        type: "category"
      }]);
      t.yAxis = ensureArrayUtil_1.ensureArray(t.yAxis || [{
        type: "value"
      }]);
      t.angleAxis = ensureArrayUtil_1.ensureArray(t.angleAxis || [{
        type: "category"
      }]);
      t.radiusAxis = ensureArrayUtil_1.ensureArray(t.radiusAxis || [{
        type: "value"
      }]);
      k(t.xAxis, t.yAxis).forEach(function (t) {
        t.grid = t.grid || 0;
      });
      t.xAxis.concat(t.yAxis).forEach(function (t) {
        if (isBooleanUtil.isBoolean(t.oppsoite)) {
          t.opposite = t.oppsoite;
        }
      });
      t.yAxis.forEach(function (t) {
        t.type ||= "value";
      });
    };
    e.prototype.getDefaultOption = function (t, e) {
      var n = e.index;
      var i = this.chart.getOption()[this.type].slice(0, n);
      var r = {
        xAxis: "yAxis",
        yAxis: "xAxis",
        angleAxis: "radiusAxis",
        radiusAxis: "angleAxis"
      }[this.type];
      var a = this.chart.getOption()[r][0].type;
      var s = true;
      var h = t.type !== "category" && t.type !== "time";
      if (h && (a === "category" || a === "time") && (this.type === "xAxis" || this.type === "yAxis")) {
        s = false;
      }
      var l = {
        value: null,
        trigger: "line",
        label: {
          show: true,
          text: "",
          position: "end",
          distance: 4,
          color: "#EB5A44",
          fontSize: 12,
          offsetY: 0,
          offsetX: 0
        },
        lineStyle: {
          lineWidth: 1,
          lineDash: [4, 3],
          stroke: "#EB5A44",
          cursor: "pointer"
        },
        icon: {
          show: true,
          symbol: null,
          size: 16,
          fill: "#F65656",
          stroke: null,
          lineWidth: 0,
          cursor: "pointer"
        },
        hover: {
          icon: {
            show: true
          },
          label: {
            show: true,
            fontSize: null
          },
          lineStyle: {
            lineWidth: null,
            stroke: null
          }
        }
      };
      return {
        show: true,
        type: "value",
        nice: true,
        logBase: 10,
        polar: 0,
        grid: 0,
        autoRange: true,
        min: null,
        max: null,
        softMin: t.type === "value" ? 0 : null,
        softMax: t.type === "value" ? 0 : null,
        inverse: false,
        tickCount: 5,
        exactTickCount: false,
        interval: null,
        minInterval: null,
        maxInterval: null,
        offset: 0,
        ticks: null,
        allowDecimals: true,
        title: {
          text: "",
          align: "end",
          show: true,
          margin: 8,
          rotate: null,
          offsetX: 0,
          offsetY: 0,
          textStyle: {
            fontSize: 12,
            color: "#999999",
            textAlign: null,
            textBaseline: null
          }
        },
        opposite: n > 0 && i.some(function (e) {
          return e.grid === t.grid;
        }),
        alternateColor: null,
        padding: true,
        axisLine: {
          show: s,
          stroke: "#6E748E",
          lineWidth: 1,
          lineDash: null
        },
        axisLabel: {
          show: true,
          interval: "auto",
          inside: false,
          rotate: 0,
          margin: 12,
          offsetX: 0,
          offsetY: 0,
          formatter: null,
          fontSize: 12,
          color: "#6E748E",
          alignToAxis: false
        },
        tickLine: {
          show: s,
          interval: 0,
          inside: false,
          length: 4,
          stroke: "#6E748E",
          lineDash: null,
          lineWidth: 1,
          alignWithLabel: false
        },
        gridLine: {
          show: h && n === 0,
          stroke: "#E0E2EB",
          lineWidth: 1,
          shape: "auto"
        },
        markLines: (t.markLines || []).map(function (t) {
          return throttledDeepCloneUtil.throttledDeepClone({}, l, t);
        }),
        markAreas: (t.markAreas || []).map(function (t) {
          return throttledDeepCloneUtil.throttledDeepClone(markAreaRenderer.getMarkAreaConfig(), t);
        }),
        breaks: (t.breaks || []).map(function (t) {
          return E({
            breakSize: 0
          }, t);
        })
      };
    };
    e.prototype.getThemeOption = function (t) {
      var e = this.chart.getTheme();
      var n = t.type === "category" ? e.categoryAxis : e.valueAxis;
      return deepMergeArrayTruncate.mergeDeepTruncate({}, n, {
        gridLine: this.extraInfo.index === 1 ? {
          show: false
        } : {}
      });
    };
    e.prototype.init = function () {
      this.initScale();
      this.registerEvent("markLine:mouseover", this.handleMarkLineMouseOver);
      this.registerEvent("markLine:mouseout", this.handleMarkLineMouseOut);
    };
    e.prototype.getCategories = function () {
      var t = this.getAxisSeries(true).filter(function (t) {
        return t.getDataset().count() > 0;
      })[0];
      if (t) {
        var e = t.getEncoder().getAxisField(this.type);
        return t.getCategories(e);
      }
      return [];
    };
    e.prototype.getDatakey = function () {
      var t = "";
      var e = this.getAxisSeries(true);
      if (e.length > 0) {
        t = ensureArrayUtil_1.ensureArray(e[0].getEncoder().getAxisField(this.type))[0];
      }
      return t;
    };
    e.prototype.getSliderExtreme = function () {
      var t = this.getExtreme(true);
      return [isNumberUtil.isNumber(this.option.min) ? this.option.min : t[0], isNumberUtil.isNumber(this.option.max) ? this.option.max : t[1]];
    };
    e.prototype.getExtreme = function (t) {
      var e = this;
      if (t === undefined) {
        t = false;
      }
      var n = this.option;
      var i = n.type;
      var r = n.padding;
      var o = this.getAxisSeries(true).filter(function (t) {
        return t.visible();
      });
      var c = 0;
      var p = 1;
      if (i === logConstants_1.logConstants.CATEGORY) {
        var d = this.getCategories();
        c = 0;
        if (d.length > 0) {
          p = d.length - 1;
        }
        c = isNumberUtil.isNumber(this.option.min) && !t ? this.option.min : c;
        p = isNumberUtil.isNumber(this.option.max) && !t ? this.option.max : p;
        var f = d.map(function (t, e) {
          return e;
        });
        if (p > f.length - 1 || typeof p != "number") {
          p = f[f.length - 1];
        }
        c = (f = f.slice(Math.round(c), Math.round(c) + Math.round(p - c) + 1))[0];
        p = f[f.length - 1];
      } else {
        var g = safeArrayFlattenUtil.safeFlattenArray(o.map(function (n) {
          var i = n.getEncoder().getAxisField(e.type);
          return n.getStackedExtreme(i, e.type, t);
        }));
        var y = findMaxByUtilValue.findMaxByUtilValue(g);
        var m = arrayMaxByUtilWrapper.getMaxBy(g);
        var x = m - y;
        if (arrayIsArrayUtil.isArray(r)) {
          y -= mathCalcUtils.parsePercentValue(r[0], x);
          m += mathCalcUtils.parsePercentValue(r[1], x);
        }
        c = isNumberUtil.isNumber(this.option.min) && !t ? this.option.min : y;
        p = isNumberUtil.isNumber(this.option.max) && !t ? this.option.max : m;
        if (c === 0 && p === 0) {
          p = 1;
        }
        if (isNumberUtil.isNumber(this.option.softMin) && this.option.softMin < c && !isNumberUtil.isNumber(this.option.min)) {
          c = this.option.softMin;
        }
        if (isNumberUtil.isNumber(this.option.softMax) && this.option.softMax > p && !isNumberUtil.isNumber(this.option.max)) {
          p = this.option.softMax;
        }
      }
      return [c, p];
    };
    e.prototype.getLabelAreaSize = function () {
      return {
        side: "",
        size: 0
      };
    };
    e.prototype.getAutoRotate = function () {
      var t = this.option.axisLabel;
      var e = t.rotate;
      var n = t.fontSize;
      var i = t.autoRotate;
      this.autoRotate = e;
      if (this.type !== "xAxis" || !(i == null ? undefined : i.length)) {
        return e;
      }
      var r = this.state.labelSizeList;
      var o = r === undefined ? [] : r;
      var a = Math.abs(1 / this.getPixelValue());
      var s = arrayMaxByUtilWrapper.getMaxBy(o.map(function (t) {
        return t.width;
      }));
      if (s > a) {
        this.autoRotate = arrayMinByMatcher.findMinByMatcher(i, function (t) {
          var e = 0;
          if (t === 0) {
            for (var i = 0; i < o.length - 1; i++) {
              var r = o[i].width;
              e = Math.max(e, 4 + (o[i + 1].width + r) / 2);
            }
          } else {
            e = Math.min(s / Math.cos(mathCalcUtils.degToRad(t)), Math.abs(n / Math.sin(mathCalcUtils.degToRad(t))));
          }
          return Math.abs(Math.ceil(e / a)) - 1;
        });
      }
      return this.autoRotate;
    };
    e.prototype.getIntervalTicks = function () {
      var t = this;
      var e = this.scale.getTicks();
      var n = this.option.axisLabel;
      var i = n.rotate;
      var r = n.fontSize;
      var o = n.autoRotate;
      var s = this.state.labelSizeList;
      var h = s === undefined ? [] : s;
      var u = Math.abs(1 / this.getPixelValue());
      var c = u;
      var p = arrayMaxByUtilWrapper.getMaxBy(h.map(function (t) {
        return t.width;
      }));
      var d = arrayMaxByUtilWrapper.getMaxBy(h.map(function (t) {
        return t.height;
      })) || r;
      if (e.length === 1) {
        return e;
      }
      if (this.isCategroy()) {
        if (isNumberUtil.isNumber(this.option.interval)) {
          return e.filter(function (e, n) {
            return n % t.option.interval == 0;
          });
        }
        if (this.type === "xAxis") {
          if (i !== 0) {
            c = Math.min(p / Math.cos(mathCalcUtils.degToRad(i)), Math.abs(r / Math.sin(mathCalcUtils.degToRad(i))));
          } else {
            for (var f = 0; f < h.length - 1; f++) {
              var g = h[f].width;
              c = Math.max(c, 4 + (h[f + 1].width + g) / 2);
            }
          }
          var y = Math.ceil(c / u);
          if (y !== 1 && (o == null ? undefined : o.length)) {
            var v = this.autoRotate;
            y = Math.ceil(Math.min(p / Math.cos(mathCalcUtils.degToRad(v)), Math.abs(r / Math.sin(mathCalcUtils.degToRad(v)))) / u);
          }
          return e.filter(function (t, e) {
            return e % y == 0;
          });
        }
        if (this.type === "yAxis") {
          var m = Math.ceil((c = (d + 4) / Math.cos(mathCalcUtils.degToRad(i))) / u);
          return e.filter(function (t, e) {
            return e % m == 0;
          });
        }
      }
      return e;
    };
    e.prototype.getAxisSeries = function (t = false) {
      var e = this.extraInfo;
      var n = e.index;
      var i = e.axis;
      var r = this.option.polar;
      var o = this.parentModel.getDependentSeries();
      if (!t) {
        o = o.filter(function (t) {
          return t.visible();
        });
      }
      return o.filter(function (t) {
        var e = t.getOption();
        var o = e.coord;
        var a = e.xAxis;
        var s = e.yAxis;
        var h = e.polar;
        if (o === "cartesian2d") {
          if (i === "xAxis") {
            return a === n;
          }
          if (i === "yAxis") {
            return s === n;
          }
        } else if (o === "polar") {
          return h === r;
        }
      });
    };
    e.prototype.getDirection = function () {
      var t = this.option.inverse;
      if (this.type === "xAxis") {
        if (t) {
          return "left";
        } else {
          return "right";
        }
      } else if (this.type === "yAxis") {
        if (t) {
          return "bottom";
        } else {
          return "top";
        }
      } else if (this.type === "radiusAxis") {
        if (t) {
          return "innerRadius";
        } else {
          return "radius";
        }
      } else if (this.type === "angleAxis") {
        if (t) {
          return "startAngle";
        } else {
          return "endAngle";
        }
      } else {
        return undefined;
      }
    };
    e.prototype.getPixelValue = function () {
      var t = this.scale.getPositionRange();
      var e = t[0];
      var n = t[1];
      var i = this.scale.getValueDomain();
      var r = i[0];
      var o = i[1];
      if (this.parentModel.type === "grid") {
        return (o - r) / (n - e);
      }
      if (this.parentModel.type === "polar") {
        var a = this.parentModel.getState().radius;
        if (this.extraInfo.axis === "angleAxis") {
          return (o - r) / ((n - e) / 360 * Math.PI * a * 2);
        }
        if (this.extraInfo.axis === "radiusAxis") {
          return (o - r) / (n - e);
        }
      }
    };
    e.prototype.getCrosshairsOption = function () {
      var e = this.chart.getOption();
      if (e.tooltip && e.tooltip.crosshairs) {
        if (this.chart.getComponentModel("tooltip")) {
          return deepMergeArrayTruncate.mergeDeepTruncate({}, e.tooltip.crosshairs, this.option.crosshairs);
        } else {
          return deepMergeArrayTruncate.mergeDeepTruncate(M(), e.tooltip?.crosshairs, this.option.crosshairs);
        }
      } else {
        return deepMergeArrayTruncate.mergeDeepTruncate(M(), this.option.crosshairs);
      }
    };
    e.prototype.getCrossLineStyle = function () {
      var t = this.getCrosshairsOption();
      return this.getLineStyle(t.lineStyle);
    };
    e.prototype.getCrossShadowStyle = function () {
      var t = this.getCrosshairsOption().shadowStyle;
      return this.getShapeStyle(t);
    };
    e.prototype.isCategroy = function () {
      return this.option.type === logConstants_1.logConstants.CATEGORY;
    };
    e.prototype.shoudUseShadowPointer = function () {
      var t = ["line", "area", "streamgraph"];
      return this.parentModel.getDependentSeries().some(function (e) {
        return !collectionIncludesUtil.includes(t, e.type);
      }) && this.parentModel.getAllAxis().some(function (t) {
        return t.isCategroy();
      });
    };
    e.prototype.hideCrosshair = function () {
      var t;
      var e;
      var n;
      if ((t = this.crossLine) !== null && t !== undefined) {
        t.setAttr("display", false);
      }
      if ((e = this.crossShadow) !== null && e !== undefined) {
        e.setAttr("display", false);
      }
      if ((n = this.crossLabelRef.current) !== null && n !== undefined) {
        n.hide();
      }
    };
    e.prototype.afterRender = function () {
      if (this.getAxisSeries().filter(function (t) {
        return t.visible();
      }).length === 0) {
        this.hideCrosshair();
      }
    };
    e.prototype.getTickLabels = function () {
      return this.labelRef;
    };
    e.prototype.togglelHighlightMarkline = function (t, e) {
      var n;
      var i = t.markLine;
      var r = t.elments;
      var o = e ? i.hover : i;
      var a = o.icon;
      var s = o.label;
      var h = o.lineStyle;
      if ((n = r.icon.current) !== null && n !== undefined) {
        n.setAttr(E({
          display: a.show
        }, this.getShapeStyle(a)));
      }
      r.label.current.setAttr(E({
        display: s.show
      }, this.getTextStyle(s)));
      r.line.current.setAttr(E({}, this.getLineStyle(h)));
    };
    e.prototype.pickTicks = function (t) {
      var e = [];
      var n = Math.max(Math.ceil(t.length / 200), 1);
      var i = 0;
      for (; i < t.length; i += n) {
        e.push(t[i]);
      }
      return e;
    };
    e.prototype.renderCrossLabel = function () {
      var t = this.getCrosshairsOption().label;
      var e = new svgGroupElement.SvgGroupElement({
        key: this.getKey("cross-label"),
        ref: this.crossLabelRef,
        display: false,
        pointerEvents: "none"
      });
      e.add(new svgRectElement.SvgRectElement(E({}, t.backgroundStyle)));
      e.add(richTextRendererUtils.createRichNode(E({}, this.getTextStyle(t.textStyle))));
      return e;
    };
    e.prototype.showCrossLabel = function (t, e, n) {
      var i = this.option;
      var r = i.opposite;
      var o = i.axisLabel;
      var a = o.margin;
      var s = o.fontSize;
      var h = this.getCrosshairsOption().label;
      if (h.show) {
        var l = this.chart.getWidth();
        var u = this.crossLabelRef.current;
        var c = u.childAt(0);
        var p = u.childAt(1);
        var d = "center";
        var f = "middle";
        if (this.type === "xAxis") {
          e += r ? -a - s / 2 : a + s / 2;
        }
        if (this.type === "yAxis") {
          d = r ? "left" : "right";
          t += r ? a : -a;
        }
        var g = h.formatter ? h.formatter({
          value: n,
          dataIndex: null
        }) : this.formatCrossLabel(n);
        u.show();
        p.setAttr({
          x: t,
          y: e,
          text: g,
          textAlign: d,
          textBaseline: f
        });
        var y = p.getBBox();
        var v = boxLayoutUtils.normalizePadding(h.padding);
        var m = v.paddingLeft;
        var x = v.paddingRight;
        var _ = v.paddingTop;
        var b = v.paddingBottom;
        var w = y.x - m;
        var A = y.width + m + x;
        var E = y.height + _ + b;
        if (this.type === "xAxis") {
          if (w < 0) {
            t = y.width / 2 + m;
          } else if (w + A > l) {
            t = l - (y.width / 2 + x);
          }
        }
        if (this.type === "yAxis") {
          if (w < 0) {
            t = A - x;
          } else if (w + A > l) {
            t = l - (A - m);
          }
        }
        p.setAttr({
          x: t,
          y: e,
          text: g,
          textAlign: d,
          textBaseline: f
        });
        c.setAttr({
          x: p.getBBox().x - m,
          y: p.getBBox().y - _,
          width: A,
          height: E
        });
      }
    };
    e.prototype.formatCrossLabel = function (t) {
      if (this.isCategroy() || typeof t == "string") {
        return t;
      }
      var e;
      var n = this.scale.getTicks();
      var i = (n[n.length - 1] - n[0]) / (n.length - 1);
      var r = Math.floor(mathCalcUtils.calcLog10(Math.abs(i)));
      if (isNaN(r) || isNumberUtil.isNumber(this.option.interval)) {
        e = t.toString();
      } else if ((e = r >= 0 ? t.toFixed(2) : t.toFixed(-((r - 2) * 1))).indexOf(".") !== -1) {
        e = e.replace(/0+$/, "").replace(/\.$/, "");
      }
      return e;
    };
    return e;
  }(chartComponentExtender.ChartComponentExtender);
  exports.AxisComponentBase = P;
  require.d(exports, {
    getDefaultCrosshairsOption: function () {
      return M;
    }
  });
}