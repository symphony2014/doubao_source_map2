// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getDataFieldValue'
// - Renamed export 'Z' to 'DataVisualEncoder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 102147
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var legendTypes = require("legend-types") /*id: 197*/;
  var ensureArrayUtil_1 = require("ensure-array-util_1") /*id: 155564*/;
  var linearGradientRenderer = require("linear-gradient-renderer") /*id: 8690*/;
  var radialGradientRenderer = require("radial-gradient-renderer") /*id: 240031*/;
  var canvasPatternRenderer = require("canvas-pattern-renderer") /*id: 263643*/;
  var colorScaleInterpolator = require("color-scale-interpolator") /*id: 339662*/;
  var linearScaleFormatter = require("linear-scale-formatter") /*id: 639533*/;
  function m(t, e, n) {
    if (n === "$index") {
      return e;
    } else {
      return t[n];
    }
  }
  var x = function () {
    function t(t, e) {
      this._uniqColorValues = [];
      this._option = t;
      this._seriesModel = e;
      this._initEncodeFunctions();
    }
    t.prototype.setOption = function (t) {
      this._option = t;
      this._initEncodeFunctions();
    };
    t.prototype.setDataset = function (t) {
      this._dataset = t;
    };
    t.prototype.setCodeMap = function (t, e) {
      if (t === "color") {
        this._initColor(e);
      } else {
        this._initValueField(t, e);
      }
    };
    t.prototype.getDataset = function () {
      return this._dataset || this._seriesModel.getDataset();
    };
    t.prototype.getAxisField = function (t) {
      return this._option[{
        xAxis: "x",
        yAxis: "y",
        angleAxis: "angle",
        radiusAxis: "radius"
      }[t]];
    };
    t.prototype.getEncodeData = function (t, e) {
      var n = this;
      var h = this._seriesModel;
      var l = this._option;
      var u = l.name;
      var c = l.value;
      var d = l.source;
      var f = l.target;
      var g = l.color;
      var y = l.size;
      var v = l.opacity;
      var x = l.shape;
      var _ = {};
      ["x", "y", "angle", "radius", "lng", "lat", "date"].forEach(function (a) {
        var s = n._option[a];
        if (isStringTypeCheck.isString(s)) {
          _[a] = m(t, e, s);
        } else if (isNumberUtil.isNumber(s)) {
          _[a] = s;
        } else if (arrayIsArrayUtil.isArray(s)) {
          if (a === "lng" || a === "lat") {
            var h = m(t, e, s[0]);
            var l = s[1];
            _[a] = l(h, e, n._seriesModel);
          } else {
            _[a] = s.map(function (n) {
              return m(t, e, n);
            });
          }
        }
      });
      if (u) {
        _.name = t[u];
      }
      if (c) {
        _.value = t[c];
      }
      if (d) {
        _.source = t[d];
      }
      if (f) {
        _.target = t[f];
      }
      _.color = this.color(m(t, e, ensureArrayUtil_1.ensureArray(g)[0]), e, h);
      if (!isNullCheck.isNull(y) && !isUndefinedCheck.isUndefined(y)) {
        _.size = this.size(m(t, e, y[0]), e, h);
      }
      if (v) {
        _.opacity = this.opacity(m(t, e, v[0]), e, h);
      }
      if (x) {
        _.shape = this.shape(m(t, e, ensureArrayUtil_1.ensureArray(x)[0]), e, h);
      }
      return _;
    };
    t.prototype._initEncodeFunctions = function () {
      var t = this._option;
      var e = t.color;
      var n = t.size;
      var i = t.opacity;
      var o = t.shape;
      this._initColor(e);
      if (n || isNumberUtil.isNumber(n)) {
        this._initValueField("size", n);
      }
      if (i || isNumberUtil.isNumber(i)) {
        this._initValueField("opacity", i);
      }
      this._initShape(o);
    };
    t.prototype._defaultColorEncoder = function (t, e, n) {
      var i = n.chart.getOption().colors;
      if (n.legendType === legendTypes.legendTypes.DATUM_LEGEND) {
        return i[e % i.length];
      } else {
        return n.getSeriesColor();
      }
    };
    t.prototype._initColor = function (t) {
      var e = this;
      if (t) {
        if (isStringTypeCheck.isString(t) || [linearGradientRenderer.LinearGradient, radialGradientRenderer.RadialGradient, canvasPatternRenderer.CanvasPattern].some(function (e) {
          return t instanceof e;
        })) {
          this.color = function () {
            return t;
          };
        } else if (arrayIsArrayUtil.isArray(t)) {
          var n = t[0];
          var r = t[1];
          var a = t[2];
          if (arrayIsArrayUtil.isArray(r)) {
            this.color = function (t) {
              e._uniqColorValues = dataProcessor.processData(e._uniqColorValues.concat(t));
              return r[e._uniqColorValues.indexOf(t) % r.length];
            };
          } else if (isFunctionUtil_1.isFunction(r)) {
            this.color = function (t, n, i) {
              var o = r(t, n, i);
              return o || e._defaultColorEncoder(t, n, i);
            };
          } else if (isStringTypeCheck.isString(r)) {
            var s = r.split("-");
            var u = new colorScaleInterpolator.ColorScale();
            var c = this.getDataset().min(n);
            var p = this.getDataset().max(n);
            var v = this._getScaleExtreme(c, "min", a);
            var m = this._getScaleExtreme(p, "max", a);
            u.colors(s);
            u.domain([v, m]);
            this.color = u.scale.bind(u);
          }
        }
      } else {
        this.color = this._defaultColorEncoder;
      }
    };
    t.prototype._getScaleExtreme = function (t, e, n) {
      if (n && isNumberUtil.isNumber(n[e])) {
        return n[e];
      } else {
        return t;
      }
    };
    t.prototype._initShape = function (t) {
      if (t) {
        if (typeof t == "string" || typeof t == "function") {
          this.shape = function () {
            return t;
          };
          return;
        }
        if (Array.isArray(t) && t.length === 2) {
          if (typeof t[1] == "function") {
            this.shape = function (e, n, i) {
              return t[1](e, n, i);
            };
            return;
          }
          if (Array.isArray(t[1]) && t[1].length > 0) {
            this.shape = function (e, n) {
              return t[1][n % t[1].length];
            };
            return;
          }
        }
        this.shape = function () {
          return null;
        };
      }
    };
    t.prototype._initValueField = function (t, e) {
      var n;
      var i;
      var a;
      if (isNumberUtil.isNumber(e)) {
        safePropertyAssignUtil.safePropertyAssign(this, ((n = {})[t.toString()] = function () {
          return e;
        }, n));
      } else if (arrayIsArrayUtil.isArray(e)) {
        var s = e[0];
        var h = e[1];
        var c = e[2];
        if (isFunctionUtil_1.isFunction(h)) {
          safePropertyAssignUtil.safePropertyAssign(this, ((i = {})[t.toString()] = h, i));
        } else if (arrayIsArrayUtil.isArray(h)) {
          var p = h[0];
          var d = h[1];
          var f = this.getDataset().max(s);
          var g = this.getDataset().min(s);
          var y = this._getScaleExtreme(g, "min", c);
          var m = this._getScaleExtreme(f, "max", c);
          var x = new linearScaleFormatter.LinearScaleFormatter(y, m, p, d);
          safePropertyAssignUtil.safePropertyAssign(this, ((a = {})[t.toString()] = function (t) {
            return x.scale(t);
          }, a));
        }
      }
    };
    return t;
  }();
  exports.DataVisualEncoder = x;
  require.d(exports, {
    getDataFieldValue: function () {
      return m;
    }
  });
}