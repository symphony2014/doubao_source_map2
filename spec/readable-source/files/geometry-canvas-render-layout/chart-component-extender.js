// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ChartComponentExtender'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 729892
         */
module.exports = function (module, exports, require) {
  var i;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var deepMergeArrayTruncate = require("deep-merge-array-truncate") /*id: 351514*/;
  var chartComponentBaseClass = require("chart-component-base-class") /*id: 94957*/;
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
  function s(t, e) {
    function n() {
      this.constructor = t;
    }
    i(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  var h = function (t) {
    function e(e, n, i, r, o) {
      var a = t.call(this) || this;
      a.renderAfterSeires = false;
      a.zindex = 0;
      a.type = e;
      a.chart = i;
      a.extraInfo = r;
      a.parentModel = o;
      a._initOption(n, false);
      a.state = a.getInitialState();
      return a;
    }
    s(e, t);
    e.prototype.getDefaultOption = function (t, e) {};
    e.prototype.update = function (t, e) {
      this._initOption(t, e);
    };
    e.prototype.getDependentSeries = function () {
      return this.chart.getSeriesByDependency(this.type);
    };
    e.prototype.getSideAreaSize = function () {
      return {
        side: "left",
        size: 0
      };
    };
    e.prototype._initOption = function (t, e) {
      var n = e ? this.option : this.getDefaultOption(t, this.extraInfo);
      this.option = deepMergeArrayTruncate.mergeDeepTruncate(n, this.getThemeOption(t), t);
      var i = this.constructor;
      var a = i.type;
      var s = i.multiple;
      if (!this.parentModel && this.option && a) {
        if (s) {
          safeObjectSetWrapper.safeObjectSet(this.chart.getOption(), [a, this.extraInfo.index], this.option);
        } else {
          safeObjectSetWrapper.safeObjectSet(this.chart.getOption(), a, this.option);
        }
      }
    };
    e.dependencies = [];
    e.multiple = false;
    return e;
  }(chartComponentBaseClass.ChartComponentBase);
  exports.ChartComponentExtender = h;
}