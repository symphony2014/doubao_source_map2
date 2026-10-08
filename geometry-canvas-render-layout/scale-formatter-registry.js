// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qe' to 'ColorScale'
// - Renamed export 'YO' to 'LogScaleFormatter'
// - Renamed export 'f$' to 'LinearScaleFormatter'
// - Renamed export 'j0' to 'classRegistry'
// - Renamed export 'JG' to 'OrdinalScaleFormatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 235177
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var classRegistryCore = require("class-registry-core") /*id: 187930*/;
  var linearScaleFormatter = require("linear-scale-formatter") /*id: 639533*/;
  var richTextTemplateRenderer = require("rich-text-template-renderer") /*id: 177827*/;
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
  function c(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var p = function (t) {
    function e(e, n, i, r, o) {
      var a = t.call(this, n, i, r, o) || this;
      a.type = "ordinal";
      a.categories = e;
      return a;
    }
    c(e, t);
    e.prototype.setCategoryies = function (t) {
      this.categories = t;
    };
    e.prototype.scale = function (e, n) {
      if (!n) {
        return t.prototype.scale.call(this, e);
      }
      var i = this.categories.indexOf(e);
      return t.prototype.scale.call(this, i);
    };
    e.prototype.getLabel = function (t) {
      var e = Math.round(t);
      var n = this.categories[e];
      var i = e === 0;
      var r = Math.abs(this.end - this.start) / (this.max - this.min);
      var o = e === this.categories.length - 1;
      if (isStringTypeCheck.isString(this.formatter) || richTextRendererUtils.isRichType(this.formatter)) {
        return richTextTemplateRenderer.renderRichTemplate(this.formatter, {
          value: n,
          index: e,
          isFirst: i,
          isLast: o,
          intervalWidth: r
        });
      } else if (isFunctionUtil_1.isFunction(this.formatter)) {
        return this.formatter(n, e, {
          isFirst: i,
          isLast: o,
          intervalWidth: r
        });
      } else {
        return n;
      }
    };
    e.prototype.niceTicks = function () {};
    e.prototype.getTicks = function () {
      var t = [];
      var e = Math.round(this.min);
      var n = Math.round(this.max - 0.5);
      var i = e;
      for (; i <= n; i++) {
        t.push(i);
      }
      return t;
    };
    return e;
  }(linearScaleFormatter.LinearScaleFormatter);
  var axisTickCalculator = require("axis-tick-calculator") /*id: 127535*/;
  var mathCalcUtils = require("math-calc-utils") /*id: 51318*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
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
  function y(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var v = function (t) {
    function e(e, n, i, r, o = 10) {
      var a = t.call(this) || this;
      a.type = "log";
      a.ticks = [];
      a.logBase = 10;
      a.min = e;
      a.max = n;
      a.start = i;
      a.end = r;
      a.ticks = [e, n];
      a.logBase = o;
      a.minLog = mathCalcUtils.calcLogBase(e, o);
      a.maxLog = mathCalcUtils.calcLogBase(n, o);
      return a;
    }
    y(e, t);
    e.prototype.clone = function () {
      return new e(this.min, this.max, this.start, this.end, this.logBase);
    };
    e.prototype.scale = function (t) {
      if (this.min === this.max) {
        return (this.start + this.end) / 2;
      } else {
        return this.start + (this.end - this.start) * (mathCalcUtils.calcLogBase(toNumberUtil_1.toNumber(t), this.logBase) - this.minLog) / (this.maxLog - this.minLog);
      }
    };
    e.prototype.invert = function (t) {
      return Math.pow(this.logBase, this.minLog + (this.maxLog - this.minLog) * (t - this.start) * (this.start - this.end));
    };
    e.prototype.niceTicks = function (t, e) {
      var n = this;
      if (e === undefined) {
        e = {};
      }
      var i = axisTickCalculator.tickCalculator(Math.floor(this.minLog), Math.ceil(this.maxLog), t, {
        minInterval: 1,
        interval: e.interval ? mathCalcUtils.calcLogBase(e.interval, this.logBase) : e.interval,
        maxInterval: null
      });
      this.minLog = i[0];
      this.maxLog = i[i.length - 1];
      this.min = Math.pow(this.logBase, this.minLog);
      this.max = Math.pow(this.logBase, this.maxLog);
      this.ticks = i.map(function (t) {
        return Math.pow(n.logBase, t);
      });
    };
    e.prototype.getTicks = function () {
      return this.ticks;
    };
    e.prototype.getLabel = function (t) {
      var e = this.getTicks().indexOf(t);
      var n = e === 0;
      var i = e === this.getTicks().length - 1;
      if (isStringTypeCheck.isString(this.formatter)) {
        return richTextTemplateRenderer.templateRenderer(this.formatter, {
          value: t,
          index: e,
          isFirst: n,
          isLast: i
        });
      } else if (isFunctionUtil_1.isFunction(this.formatter)) {
        return this.formatter(t, e, {
          isFirst: n,
          isLast: i
        });
      } else {
        return t.toString();
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
  var colorScaleInterpolator = require("color-scale-interpolator") /*id: 339662*/;
  require.d(exports, {
    ColorScale: function () {
      return colorScaleInterpolator.ColorScale;
    },
    LogScaleFormatter: function () {
      return v;
    },
    LinearScaleFormatter: function () {
      return linearScaleFormatter.LinearScaleFormatter;
    },
    classRegistry: function () {
      return classRegistryCore.classRegistry;
    },
    OrdinalScaleFormatter: function () {
      return p;
    }
  });
}