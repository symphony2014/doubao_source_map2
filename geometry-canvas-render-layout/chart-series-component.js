// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChartSeriesComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 33459
         */
module.exports = function (module, exports, require) {
  var i;
  var nativeSetExport = require("native-set-export") /*id: 390156*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var arrayChunk = require("array-chunk") /*id: 554639*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var colorScaleUtils = require("color-scale-utils") /*id: 571006*/;
  var deepMergeArrayTruncate = require("deep-merge-array-truncate") /*id: 351514*/;
  var dataSourceHelper = require("data-source-helper") /*id: 11810*/;
  var chartDataEncoder = require("chart-data-encoder") /*id: 102147*/;
  var coordinateSystemTypes = require("coordinate-system-types") /*id: 406155*/;
  var chartComponentBaseClass = require("chart-component-base-class") /*id: 94957*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  var patternSymbolGenerator = require("pattern-symbol-generator") /*id: 399361*/;
  var ensureArrayUtil_1 = require("ensure-array-util_1") /*id: 155564*/;
  var functionMemoizer = require("function-memoizer") /*id: 851843*/;
  var richTextTemplateRenderer = require("rich-text-template-renderer") /*id: 177827*/;
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
  function M(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function P() {
    return (P = Object.assign || function (t) {
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
  var O = function (t) {
    function e(e, n, i, o) {
      var a = t.call(this) || this;
      a.stackable = false;
      a.invisibleItems = new nativeSetExport.Set();
      a.selectedItems = new nativeSetExport.Set();
      a._patternCache = [];
      a.type = e;
      a.chart = i;
      a.seriesIndex = o;
      a._initOption(n);
      a.state = a.getInitialState();
      return a;
    }
    M(e, t);
    e.prototype.getDefaultOption = function (t) {
      return {
        chunkLimit: 3000,
        chunkMode: "mod",
        chunkSize: 500,
        hoverBrightness: 0.1
      };
    };
    e.prototype.getInitialState = function () {
      return {
        points: [],
        needAnimation: this.needAnimation()
      };
    };
    e.prototype.getState = function () {
      return this.state;
    };
    e.prototype.changeData = function (t) {
      this.option.data = t;
      this._dataset = new dataSourceHelper.DataSourceHelper(t);
    };
    e.prototype.update = function (t, e, n) {
      this._patternCache.length = 0;
      this._seriesPattern = undefined;
      this.invisibleItems.clear();
      this.selectedItems.clear();
      this.seriesIndex = e;
      this.state.hoverPointIndex = null;
      this._initOption(t, n);
    };
    e.prototype.getDependentComponents = function () {
      return this.constructor.dependencies;
    };
    e.prototype.visible = function () {
      return this.option.visible;
    };
    e.prototype.toggleVisible = function (t) {
      this.option.visible = t;
    };
    e.prototype.getHoverColor = function (t) {
      return colorScaleUtils.lightenColor(t, this.option.hoverBrightness ?? 0.1);
    };
    e.prototype.handleSeriesUIEvent = function (t) {
      var e = this.seriesIndex;
      var n = this.option.name;
      this.handleUIEvent(t, "series", {
        seriesIndex: e,
        seriesName: n
      });
    };
    e.prototype.getStackOnSeries = function () {
      var t = this;
      var e = [];
      var n = this;
      this.chart.eachSeriesModel(function (i) {
        if ((n.option.stack || t.option.stacking === "percent") && i.visible() && i.type === t.type && i.seriesIndex < t.seriesIndex && i.getOption().stack === n.option.stack) {
          e.push(i);
        }
      });
      return e;
    };
    e.prototype.getAllPercentStackDatakey = function () {
      var t = this;
      var e = [];
      this.chart.eachSeriesModel(function (n) {
        if (n.type === t.type && n.visible() && n.getOption().stack === t.option.stack && n.getOption().stacking === t.option.stacking) {
          e.push(n.getValueField());
        }
      });
      return e;
    };
    e.prototype.getStackOnDatakey = function () {
      var t = [];
      this.getStackOnSeries().map(function (e) {
        t = t.concat(e.getValueField());
      });
      return t;
    };
    e.prototype.toggleHighlightPoint = function (t, e, n = false) {
      this.state.hoverPointIndex = e ? t : null;
    };
    e.prototype.toggleHighlightSeries = function (t) {
      var e = this;
      if (!(this._dataset.count() > this.chart.getOption().animateLimit)) {
        this.state.points.forEach(function (n, i) {
          return e.toggleHighlightPoint(i, t, true);
        });
      }
    };
    e.prototype.toggleBlurSeries = function (t) {
      var e = this;
      this.state.blur = t;
      this.state.points.forEach(function (n) {
        return e.toggleBlurPoint(n, t);
      });
    };
    e.prototype.toggleBlurPoint = function (t, e) {
      t.blur = e;
      var r;
      var s;
      var h = t.encode?.opacity;
      h = isNumberUtil.isNumber(h) ? h : 1;
      if ((r = t.shapeRef?.current) !== null && r !== undefined) {
        r.setAttr({
          opacity: e ? h * 0.4 : h
        });
      }
      if ((s = t.labelRef?.current) !== null && s !== undefined) {
        s.setAttr({
          opacity: e ? h * 0.4 : h
        });
      }
    };
    e.prototype.highlightPoint = function (t) {
      if (this.state.points[t]) {
        this.state.hoverPointIndex = t;
        this.toggleHighlightPoint(t, true);
      }
    };
    e.prototype.unhighlightPoint = function (t) {
      if (this.state.points[t]) {
        this.state.hoverPointIndex = null;
        this.toggleHighlightPoint(t, false);
      }
    };
    e.prototype.togglePointVisible = function (t, e) {
      var n = e;
      if (!isBooleanUtil.isBoolean(e)) {
        n = this.invisibleItems.has(t);
      }
      if (n) {
        this.invisibleItems.delete(t);
      } else {
        this.invisibleItems.add(t);
      }
      this.chart.refresh();
    };
    e.prototype.toggleSelectPoint = function (t, e) {
      this.state.points[t].selected = e;
      var n = this.state.points[t].data || this._dataset.getRecord(t);
      if (e) {
        this.selectedItems.add(n);
      } else {
        this.selectedItems.delete(n);
      }
    };
    e.prototype.getSelectedPointIndex = function (t) {
      return this._dataset.getData().indexOf(t);
    };
    e.prototype.getSeriesColor = function (t = false) {
      if (!this.chart.getOption()) {
        return null;
      }
      var n = this.option.encode?.color;
      if (n && isStringTypeCheck.isString(n)) {
        return n;
      }
      var i = this.chart.getOption().colors;
      var r = i[this.seriesIndex % i.length];
      var o = this.option.pattern;
      if (typeof o == "function") {
        o = o([], r);
      }
      if (o && t) {
        if (this._seriesPattern) {
          return this._seriesPattern;
        }
        var a = patternSymbolGenerator.createPatternSymbol(this.getPatternWithColor(o, r));
        this._seriesPattern = a;
        return a;
      }
      return r;
    };
    e.prototype.getTextStyle = function (e) {
      var n = t.prototype.getTextStyle.call(this, e);
      if (this._dataset.count() > 2000 || this.chart.getOption().transition === false) {
        n.transitionProperty = "none";
      }
      return n;
    };
    e.prototype.getLineStyle = function (e) {
      var n = t.prototype.getLineStyle.call(this, e);
      if (this._dataset.count() > 300 || this.chart.getOption().transition === false) {
        n.transitionProperty = "none";
      }
      return n;
    };
    e.prototype.getShapeStyle = function (e) {
      var n = t.prototype.getShapeStyle.call(this, e);
      if (this._dataset.count() > 300 || this.chart.getOption().transition === false) {
        n.transitionProperty = "none";
      }
      return n;
    };
    e.prototype.getAnimateOption = function () {
      var t = this.option.animate;
      if (t && typeof t == "object") {
        return t;
      } else {
        return {};
      }
    };
    e.prototype.getTransitionProperty = function () {
      var t = 0;
      var e = this.chart.getOption().transition !== false;
      this.chart.getAllSeries().forEach(function (e) {
        if (e.visible()) {
          t += e.getDataset().count();
        }
      });
      if (t > 2000 || !e) {
        return "none";
      } else {
        return "all";
      }
    };
    e.prototype.getChunks = function (t) {
      var e = this.option;
      var n = e.chunkSize;
      var i = e.chunkMode;
      if (i === "sequential") {
        return arrayChunk.arrayChunk(t, n);
      }
      if (i === "mod") {
        var r = [];
        var o = Math.ceil(t.length / n);
        var a = 0;
        for (; a < t.length; a++) {
          var s = a % o;
          r[s] ||= [];
          r[s].push(t[a]);
        }
        return r;
      }
      return [t];
    };
    e.prototype.needAnimation = function () {
      return !(this._dataset.count() > this.chart.getOption().animateLimit) && (isBooleanUtil.isBoolean(this.option.animate) ? this.option.animate : this.chart.getOption().animate);
    };
    e.prototype.isLargeData = function () {
      return this._dataset.count() > this.chart.getOption().animateLimit;
    };
    e.prototype.getWrappedPoint = function (t, e) {
      return P({
        seriesType: this.option.type,
        seriesIndex: this.seriesIndex,
        seriesName: this.option.name,
        seriesColor: this.getSeriesColor(),
        dataIndex: t,
        data: e || this._dataset.getRecord(t)
      }, this.state.points[t]);
    };
    e.prototype.wrapPoint = function (t, e) {
      var n = this.state.points.indexOf(t);
      return this.getWrappedPoint(n, e);
    };
    e.prototype.getDataLabel = function (t, e) {
      var n = this.getWrappedPoint(t);
      var i = (e || this.option.label).formatter;
      if (isFunctionUtil_1.isFunction(i)) {
        return i(n);
      }
      if (isStringTypeCheck.isString(i) || richTextRendererUtils.isRichType(i)) {
        return this.formatItem(i, n);
      }
      var r = n.value;
      if (isNullCheck.isNull(r) || isUndefinedCheck.isUndefined(r)) {
        return "";
      } else {
        return n.value.toString();
      }
    };
    e.prototype.getEdgePosition = function (t, e, n) {
      var i = this.chart.getWidth();
      var r = this.chart.getHeight();
      if (t === "left") {
        return e + n.width;
      } else if (t === "right") {
        return i - n.width - e;
      } else if (t === "top") {
        return e + n.height;
      } else if (t === "bottom") {
        return r - n.height - e;
      } else {
        return undefined;
      }
    };
    e.prototype.isLabelInside = function (t) {
      var e = (t || this.option.label).position;
      return e === "center" || e.indexOf("inside") !== -1;
    };
    e.prototype.formatItem = function (t, e) {
      if (isFunctionUtil_1.isFunction(t)) {
        return t(e);
      } else if (isStringTypeCheck.isString(t) || richTextRendererUtils.isRichType(t)) {
        return richTextTemplateRenderer.renderRichTemplate(t, e);
      } else {
        return t;
      }
    };
    e.prototype.getPointFillWithPattern = function (t, e) {
      var n = this.option.pattern;
      if (!n) {
        return t.color;
      }
      if (this._patternCache[e]) {
        return this._patternCache[e];
      }
      var i = this._dataset.getRecord(e);
      var r = typeof n == "function" ? n(i, t.color) : n;
      var o = patternSymbolGenerator.createPatternSymbol(this.getPatternWithColor(r, t.color));
      this._patternCache[e] = o;
      return o;
    };
    e.prototype.getValueField = function () {
      var t = this.chart.getOption();
      var e = this.option;
      var n = e.coord;
      var i = e.xAxis;
      var r = e.yAxis;
      var o = e.polar;
      if (n === coordinateSystemTypes.coordinateTypes.CARTESIAN2D) {
        if (t.yAxis[r].type !== "category") {
          return this._encode.getAxisField("yAxis");
        }
        if (t.xAxis[i].type !== "category") {
          return this._encode.getAxisField("xAxis");
        }
      } else if (n === coordinateSystemTypes.coordinateTypes.POLAR) {
        var a = t.angleAxis.filter(function (t) {
          return t.polar === o;
        })[0];
        if (t.radiusAxis.filter(function (t) {
          return t.polar === o;
        })[0].type !== "category") {
          return this._encode.getAxisField("radiusAxis");
        }
        if (a.type !== "category") {
          return this._encode.getAxisField("angleAxis");
        }
      }
      return "";
    };
    e.prototype.getAxisOption = function (t) {
      var e = this.chart.getOption();
      var n = this.option;
      var i = this.option;
      var r = i.coord;
      var o = i.polar;
      if (r === coordinateSystemTypes.coordinateTypes.CARTESIAN2D) {
        return this.chart.getOption()[t][n[t]];
      }
      if (r === coordinateSystemTypes.coordinateTypes.POLAR) {
        var a = e.angleAxis.filter(function (t) {
          return t.polar === o;
        })[0];
        var s = e.radiusAxis.filter(function (t) {
          return t.polar === o;
        })[0];
        if (t === "angleAxis") {
          return a;
        }
        if (t === "radiusAxis") {
          return s;
        }
      }
    };
    e.prototype.destroy = function () {
      this._patternCache.length = 0;
      t.prototype.destroy.call(this);
    };
    e.prototype.getCategories = function (t) {
      if (this.type === "heatmap" || this.type === "scatter") {
        return this._dataset.uniq(t);
      }
      if (this.type === "waterfall") {
        var e = this.option;
        if (e.total) {
          var n = this._dataset.getFieldData(t);
          n.push(e.total.label);
          return n;
        }
      }
      return this._dataset.getFieldData(t);
    };
    e.prototype.getExtreme = function (t, e = dataSourceHelper.defaultPredicate) {
      var n = this.getDataset();
      var i = ensureArrayUtil_1.ensureArray(t);
      return [findMaxByUtilValue.findMaxByUtilValue(i.map(function (t) {
        return n.min(t, e);
      })), arrayMaxByUtilWrapper.getMaxBy(i.map(function (t) {
        return n.max(t, e);
      }))];
    };
    e.prototype.getCoord = function () {
      return this.chart.getComponentModel("coord").getCoordinate(this.option);
    };
    e.prototype.getStackedExtreme = function (t, e, n) {
      var i;
      var r;
      var o;
      var a = this;
      if (n === undefined) {
        n = false;
      }
      var s = ensureArrayUtil_1.ensureArray(t)[0];
      if (e === "xAxis") {
        r = this.getAxisOption("yAxis");
        o = this.getAxisOption("xAxis");
        i = this.option.encode.y;
      } else if (e === "yAxis") {
        r = this.getAxisOption("xAxis");
        o = this.getAxisOption("yAxis");
        i = this.option.encode.x;
      } else if (e === "angleAxis") {
        r = this.getAxisOption("radiusAxis");
        o = this.getAxisOption("angleAxis");
        i = this.option.encode.radius;
      } else if (e === "radiusAxis") {
        r = this.getAxisOption("angleAxis");
        o = this.getAxisOption("radiusAxis");
        i = this.option.encode.angle;
      }
      var h = r.min;
      var l = r.max;
      var y = r.type === "category";
      var v = n ? dataSourceHelper.defaultPredicate : this._getFieldFilter(i, y, h, l, o.autoRange);
      var x = this.getStackOnDatakey();
      if (this.option.stacking === "percent") {
        return [0, 100];
      }
      if (this.type === "waterfall") {
        var _ = this.option.isSum;
        var b = safeArrayFlattenUtil.safeFlattenArray(this.getDataset().intervalStack(s, function (t, e) {
          return !a.invisibleItems.has(e) && (!_ || !_(t));
        }));
        return [findMaxByUtilValue.findMaxByUtilValue(b), arrayMaxByUtilWrapper.getMaxBy(b)];
      }
      if (this.type === "streamgraph") {
        var w = this.option.encode.y.filter(function (t) {
          return !a.hideLegendItems.has(t);
        });
        var S = this._dataset.sumFields(w);
        return [findMaxByUtilValue.findMaxByUtilValue(S), arrayMaxByUtilWrapper.getMaxBy(S)];
      }
      if (arrayIsArrayUtil.isArray(t) || !this.stackable || isNullCheck.isNull(this.option.stack) || isUndefinedCheck.isUndefined(this.option.stack)) {
        return this.getExtreme(t, v);
      } else {
        return this.getDataset().getStackedExtreme(t, x, v);
      }
    };
    e.prototype.getDataset = function () {
      return this._dataset;
    };
    e.prototype.getEncoder = function () {
      return this._encode;
    };
    e.prototype.getFacetBBox = function () {
      return this.chart.getFacetContentBox(this.option.facet);
    };
    e.prototype.handleDefaultEvent = function (t, e, n) {
      var i;
      var r = this;
      var o = this.chart;
      if (t.type === "mouseover" && (e === "point" || e === "label")) {
        this.highlightPoint(n.point.dataIndex);
      }
      if (t.type === "mouseout" && (e === "point" || e === "label")) {
        if (n.hasAxis && ((i = o.getComponentModel("tooltip")) === null || i === undefined ? undefined : i.getOption().trigger) === "axis") {
          return;
        }
        this.unhighlightPoint(n.point.dataIndex);
      }
      if (t.type === "click" && e === "point") {
        var a = this.selectedItems.has(n.point.data);
        var s = this.getOption().selectedMode;
        if (!s) {
          return;
        }
        if (s === "single") {
          this.selectedItems.forEach(function (t) {
            var e = r.getSelectedPointIndex(t);
            if (e !== n.point.dataIndex) {
              r.toggleSelectPoint(e, false);
            }
          });
          if (a) {
            if (this.type === "pie" && !this.option.selectedRotate) {
              this.toggleSelectPoint(n.point.dataIndex, false);
              var h = "point:unselected";
              o.dispatchAction(P(P({}, n), {
                type: h
              }));
            }
          } else {
            this.toggleSelectPoint(n.point.dataIndex, true);
            var h = "point:selected";
            o.dispatchAction(P(P({}, n), {
              type: h
            }));
          }
        }
        if (s === "multiple") {
          this.toggleSelectPoint(n.point.dataIndex, !a);
          var h = a ? "point:unselected" : "point:selected";
          o.dispatchAction(P(P({}, n), {
            type: h
          }));
        }
        var l = [];
        this.selectedItems.forEach(function (t) {
          return l.push(t);
        });
        this.chart.dispatchAction({
          type: "selectchanged",
          seriesIndex: this.seriesIndex,
          selected: l
        });
      }
    };
    e.prototype.handleUIEvent = function (e, n, i) {
      this.handleDefaultEvent(e, n, i);
      t.prototype.handleUIEvent.call(this, e, n, i);
    };
    e.prototype._getFieldFilter = function (t, e, n, i, r) {
      return function (a, s) {
        var h = true;
        var l = true;
        if (isNumberUtil.isNumber(n) && r) {
          h = e ? s >= (e ? Math.round(n) : n) : a[t] >= n;
        }
        if (isNumberUtil.isNumber(i) && r) {
          l = e ? s <= (e ? Math.round(i) : i) : a[t] <= i;
        }
        return h && l;
      };
    };
    e.prototype._initOption = function (t, e = false) {
      var n = e ? this.option : this.getDefaultOption(t);
      this.option = deepMergeArrayTruncate.mergeDeepTruncate(n, this.getThemeOption(), t);
      this.type = this.option.type;
      this._dataset = new dataSourceHelper.DataSourceHelper(this.option.data || this.chart.getDataSource());
      this._encode = new chartDataEncoder.DataVisualEncoder(this.option.encode || {}, this);
      this._getFieldFilter = functionMemoizer.memoizeFunction(this._getFieldFilter.bind(this), 10);
      this.chart.getOption().series[this.seriesIndex] = this.option;
      this._initDefaultState();
    };
    e.prototype.getStateTestData = function () {
      return this._dataset.getData();
    };
    e.prototype._initDefaultState = function () {
      var t = this;
      var e = this.option.defaultState;
      if (e) {
        this.getStateTestData().forEach(function (n, i) {
          if (e.selected && e.selected(n, i)) {
            t.selectedItems.add(n);
          }
          if (e.visible && !e.visible(n, i)) {
            t.invisibleItems.add(i);
          }
        });
      }
    };
    e.prototype.getPatternWithColor = function (t, e) {
      var n = "rgba(255, 255, 255, .5)";
      return deepMergeArrayTruncate.mergeDeepTruncate({
        backgroundColor: e,
        style: {
          fill: n,
          stroke: n
        }
      }, t);
    };
    e.dependencies = [];
    return e;
  }(chartComponentBaseClass.ChartComponentBase);
  exports.ChartSeriesComponent = O;
}