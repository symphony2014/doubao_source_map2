// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LinearScaleFormatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 639533
         */
module.exports = function (module, exports, require) {
  var i;
  var classRegistryCore = require("class-registry-core") /*id: 187930*/;
  var axisTickCalculator = require("axis-tick-calculator") /*id: 127535*/;
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  var richTextTemplateRenderer = require("rich-text-template-renderer") /*id: 177827*/;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
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
  function f(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var g = function (t) {
    function e(e, n, i, r) {
      var o = t.call(this) || this;
      o.type = "linear";
      o.ticks = [];
      o._hasBreaks = false;
      o.min = e;
      o.max = n;
      o.start = i;
      o.end = r;
      o.ticks = [e, n];
      return o;
    }
    f(e, t);
    e.prototype.setBreaks = function (t) {
      var n = [this.min, this.max];
      var i = t.filter(function (t) {
        var e = t.range;
        return mathCalcUtils.isValueInRange(e[0], n) && mathCalcUtils.isValueInRange(e[1], n);
      });
      this._hasBreaks = i.length > 0;
      this.ticks = this.ticks.filter(function (t) {
        return !i.some(function (e) {
          var n = e.range;
          return t > n[0] && t < n[1];
        });
      });
      var r = arraySumHelper.sumArray(i.map(function (t) {
        return t.range[1] - t.range[0];
      }));
      var o = arraySumHelper.sumArray(i.map(function (t) {
        return t.breakSize || 0;
      }));
      var s = (this.end - this.start) / (this.max - this.min - r + o);
      var l = [];
      var u = [];
      var c = 0;
      for (; c <= i.length; c++) {
        var p = i[c];
        var d = i[c - 1];
        var f = l[c - 1];
        var g = c === 0 ? this.min : d.range[1] - d.breakSize;
        var y = c === i.length ? this.max : p.range[0];
        var v = c === 0 ? this.start : f.end;
        var m = v + (y - g) * s;
        l.push(new e(g, y, v, m));
        if (c < i.length) {
          var x = p.range;
          var _ = p.breakSize;
          u.push({
            range: x,
            position: m,
            breakSize: _
          });
        }
      }
      this._brokenScales = l;
      this._breakPositions = u;
    };
    e.prototype.getBreaks = function () {
      return this._breakPositions || [];
    };
    e.prototype.getBrokenScales = function () {
      return this._brokenScales;
    };
    e.prototype.clone = function () {
      return new e(this.min, this.max, this.start, this.end);
    };
    e.prototype.niceTicks = function (t, e = {}) {
      var n = axisTickCalculator.tickCalculator(this.min, this.max, t, e);
      this._forceInterval = e.interval;
      this.ticks = n;
      this.min = n[0];
      this.max = n[n.length - 1];
    };
    e.prototype.scale = function (t) {
      if (this.min === this.max) {
        return (this.start + this.end) / 2;
      }
      var e = toNumberUtil_1.toNumber(t);
      if (this._hasBreaks) {
        for (var n = 0; n < this._brokenScales.length; n++) {
          var i = this._brokenScales[n];
          var r = i.min;
          var o = i.max;
          if (e >= r && e <= o) {
            return this._brokenScales[n].scale(t);
          }
        }
        for (var n = 0; n < this._breakPositions.length; n++) {
          var a = this._breakPositions[n];
          var s = a.range;
          var r = s[0];
          var o = s[1];
          var h = a.position;
          if (e > r && e < o) {
            return h;
          }
        }
      }
      return this.start + (this.end - this.start) * (e - this.min) / (this.max - this.min);
    };
    e.prototype.invert = function (t) {
      return this.min + (this.max - this.min) * (t - this.start) / (this.end - this.start);
    };
    e.prototype.getTicks = function () {
      return this.ticks;
    };
    e.prototype.getLabel = function (t) {
      var e;
      var n = this.ticks;
      var i = n.indexOf(t);
      var r = i === 0;
      var o = i === n.length - 1;
      var h = (n[n.length - 1] - n[0]) / (n.length - 1);
      var l = Math.floor(mathCalcUtils.calcLog10(Math.abs(h)));
      if (isNaN(l) || isNumberUtil.isNumber(this._forceInterval)) {
        e = t.toString();
      } else if ((e = l >= 0 ? t.toFixed(2) : t.toFixed(-((l - 2) * 1))).indexOf(".") !== -1) {
        e = e.replace(/0+$/, "").replace(/\.$/, "");
      }
      var f = {
        value: parseFloat(e),
        index: i,
        isFirst: r,
        isLast: o
      };
      if (isStringTypeCheck.isString(this.formatter) || richTextRendererUtils.isRichType(this.formatter)) {
        return richTextTemplateRenderer.renderRichTemplate(this.formatter, f);
      } else if (isFunctionUtil_1.isFunction(this.formatter)) {
        return this.formatter(parseFloat(e), i, {
          isFirst: r,
          isLast: o,
          ticks: n
        });
      } else {
        return e;
      }
    };
    e.prototype.getValueDomain = function () {
      return [this.max, this.min];
    };
    e.prototype.getPositionRange = function () {
      return [this.end, this.start];
    };
    return e;
  }(classRegistryCore.FormatterBase);
  exports.LinearScaleFormatter = g;
}