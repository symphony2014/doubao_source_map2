// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'categorizeAxes'
// - Renamed export 'u' to 'findDataPoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 426771
         */
module.exports = function (module, exports, require) {
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var arrayMinByMatcher = require("array-min-by-matcher") /*id: 65435*/;
  function o() {
    return (o = Object.assign || function (t) {
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
  function a(t) {
    if (t.type === "grid") {
      var e;
      var n;
      e = t.xAxis.concat(t.yAxis).filter(function (t) {
        return t.isCategroy();
      });
      n = t.xAxis.concat(t.yAxis).filter(function (t) {
        return !t.isCategroy();
      });
    } else if (t.type === "polar") {
      e = [t.angleAxis, t.radiusAxis].filter(function (t) {
        return t.isCategroy();
      });
      n = [t.angleAxis, t.radiusAxis].filter(function (t) {
        return !t.isCategroy();
      });
    }
    return {
      categoryAxis: e,
      valueAxis: n
    };
  }
  function s(t, e, n) {
    var s;
    var h = a(t) || {};
    var l = h.categoryAxis;
    var u = l === undefined ? [] : l;
    var c = h.valueAxis;
    var p = "";
    var d = [];
    u.forEach(function (t) {
      var i = Math.round(t.invertPoint(e, n));
      var r = t.scale.categories[i];
      s = i;
      p = r;
      t.getAxisSeries().forEach(function (t) {
        var e = t.getState().points[i];
        if (e) {
          if (e.items) {
            e.items.forEach(function (e) {
              return e.visible && d.push(o({
                seriesIndex: t.seriesIndex,
                encode: {
                  name: e.name
                },
                dataIndex: s
              }, e));
            });
            return;
          }
          if (!isNaN(parseFloat(e.value))) {
            d.push(t.getWrappedPoint(i));
          }
        }
      });
    });
    if (!u.length) {
      var f = c.filter(function (t) {
        return t.type === "xAxis";
      })[0];
      if (((f == null ? undefined : f.getAxisSeries()) || []).some(function (t) {
        return t.type !== "scatter";
      }) && (f.getAxisSeries().filter(function (t) {
        return t.type !== "scatter";
      }).map(function (t) {
        var n = t.getState().points;
        var i = arrayMinByMatcher.findMinByMatcher(n, function (t) {
          return Math.abs(e - t.plotX);
        });
        var o = n.indexOf(i);
        return t.getWrappedPoint(o);
      }).forEach(function (t) {
        return d.push(t);
      }), p = d[0].name, f.getOption().type === "time")) {
        var g = dayjsDateLibrary(p);
        var y = g.hour();
        var v = g.minute();
        var m = g.second();
        p = m ? g.format("YYYY-MM-DD HH:mm:ss") : !m && (y || v) ? g.format("YYYY-MM-DD HH:mm") : g.format("YYYY-MM-DD");
      }
    }
    return {
      points: d,
      dataIndex: s,
      category: p
    };
  }
  require.d(exports, {
    categorizeAxes: function () {
      return a;
    },
    findDataPoints: function () {
      return s;
    }
  });
}