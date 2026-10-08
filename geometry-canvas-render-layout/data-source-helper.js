// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'defaultPredicate'
// - Renamed export 'Z' to 'DataSourceHelper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 11810
         */
module.exports = function (module, exports, require) {
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var arrayMaxByUtilWrapper = require("array-max-by-util-wrapper") /*id: 477121*/;
  var arraySumHelper = require("array-sum-helper") /*id: 218454*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var arrayFindIndexMatcher = require("array-find-index-matcher") /*id: 489247*/;
  var collectionOrderByUtil_1 = require("collection-order-by-util_1") /*id: 848677*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var functionMemoizer = require("function-memoizer") /*id: 851843*/;
  function y() {
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
  function v(t, e) {
    return true;
  }
  function m(t) {
    return !isNaN(parseFloat(t));
  }
  var x = function () {
    function t(t) {
      this._datasource = t;
      this.min = functionMemoizer.memoizeFunction(this.min.bind(this));
      this.max = functionMemoizer.memoizeFunction(this.max.bind(this));
      this.sum = functionMemoizer.memoizeFunction(this.sum.bind(this));
      this._stackExtreme = functionMemoizer.memoizeFunction(this._stackExtreme.bind(this));
    }
    t.prototype.count = function (t = v) {
      return this._datasource.filter(t).length;
    };
    t.prototype.getData = function () {
      return this._datasource.slice();
    };
    t.prototype.setData = function (t) {
      this._datasource = t;
    };
    t.prototype.getRecord = function (t) {
      return this._datasource[t];
    };
    t.prototype.getExtreme = function (t) {
      return [this.min(t), this.max(t)];
    };
    t.prototype.getStackedExtreme = function (t, e, n = v) {
      var i = y([t], e, [n]);
      return this._stackExtreme.apply(null, i);
    };
    t.prototype.mapData = function (t) {
      return collectionMapMatcher.mapWithMatcher(this._datasource, t);
    };
    t.prototype.eachData = function (t) {
      return this._datasource.forEach(t);
    };
    t.prototype.getFieldData = function (t, e, n, s) {
      var h = this;
      if (e === undefined) {
        e = false;
      }
      if (n === undefined) {
        n = v;
      }
      if (s === undefined) {
        s = false;
      }
      if (t === "$index") {
        return this._datasource.map(function (t, e) {
          return e;
        }).filter(function (t, e) {
          return n(h._datasource[e], e);
        });
      } else {
        return genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(this._datasource, function (n) {
          if (e) {
            return toNumberUtil_1.toNumber(n[t]);
          } else {
            return n[t];
          }
        }), function (e, i) {
          var r = h._datasource[i];
          var o = objectPathGetDefault.getObjectPathDefault(r, t);
          return n(h._datasource[i], i) && (!s || !!m(o));
        });
      }
    };
    t.prototype.avg = function (t) {
      return this.sum(t) / this._datasource.length;
    };
    t.prototype.min = function (t, e = v) {
      return findMaxByUtilValue.findMaxByUtilValue(this.getFieldData(t, true, e, true));
    };
    t.prototype.max = function (t, e = v) {
      return arrayMaxByUtilWrapper.getMaxBy(this.getFieldData(t, true, e, true));
    };
    t.prototype.sum = function (t, e = v) {
      return arraySumHelper.sumArray(this.getFieldData(t, true, e, false));
    };
    t.prototype.uniq = function (t) {
      return dataProcessor.processData(this.getFieldData(t));
    };
    t.prototype.findIndex = function (t) {
      return arrayFindIndexMatcher.findMatchingIndex(this._datasource, t);
    };
    t.prototype.stack = function (t, e, n = v, i = false, r = 0) {
      var o = 0;
      return this._datasource.filter(n).map(function (n) {
        var a = e.map(function (t) {
          return n[t];
        });
        var s = n[t];
        var h = null;
        a.forEach(function (t) {
          if (m(t) && t * s > 0 || s === 0 && t > 0) {
            h += parseFloat(t);
          }
        });
        if (!i && h === null) {
          h = 0;
          o = r;
        }
        if (m(s)) {
          return [h + o, h + parseFloat(s)];
        } else {
          return [h, h];
        }
      });
    };
    t.prototype.sumFields = function (t) {
      return this._datasource.map(function (e) {
        return arraySumHelper.sumArray(t.map(function (t) {
          var n = toNumberUtil_1.toNumber(objectPathGetDefault.getObjectPathDefault(e, t));
          if (isNaN(n)) {
            return 0;
          } else {
            return n;
          }
        }));
      });
    };
    t.prototype.intervalStack = function (t, e) {
      var n = this;
      if (e === undefined) {
        e = v;
      }
      var i = [];
      this.getFieldData(t, true).reduce(function (t, r, o) {
        var a = n._datasource[o];
        var s = isNaN(r) ? t : e(a, o) ? t + r : t + 0;
        i.push([t, s]);
        return s;
      }, 0);
      return i;
    };
    t.prototype.setSortData = function (t, e) {
      var n = collectionOrderByUtil_1.orderBy(this._datasource, [t], [e]);
      this._datasource = n;
    };
    t.prototype.sortData = function (t, e) {
      return collectionOrderByUtil_1.orderBy(this._datasource, [t], [e]);
    };
    t.prototype.intervalAvg = function (t) {
      if (t.length === 0) {
        return [];
      } else {
        return this.mapData(function (e) {
          return arraySumHelper.sumArray(t.map(function (t) {
            return e[t];
          })) / t.length;
        });
      }
    };
    t.prototype.pickFieldValues = function (t) {
      return this.mapData(function (e) {
        return t.map(function (t) {
          return e[t];
        });
      });
    };
    t.prototype.percent = function (t, e) {
      return [];
    };
    t.prototype._stackExtreme = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var n = t[0];
      var i = t.slice(1, -1);
      var r = lastElementHelper.getLastElement(t);
      var o = this.stack(n, i, r, true);
      var a = safeArrayFlattenUtil.safeFlattenArray(o).filter(function (t) {
        return t !== null;
      });
      return [findMaxByUtilValue.findMaxByUtilValue(a), arrayMaxByUtilWrapper.getMaxBy(a)];
    };
    return t;
  }();
  exports.DataSourceHelper = x;
  require.d(exports, {
    defaultPredicate: function () {
      return v;
    }
  });
}