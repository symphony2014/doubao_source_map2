// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'BufferRangeUtil'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36277.76769583.js
         * chunkId: 36277
         * moduleId: 252499
         */
module.exports = function (module, exports, require) {
  var babelRuntimeHelpers = require("babel-runtime-helpers") /*id: 339562*/;
  var i = function () {
    function e() {
      babelRuntimeHelpers.classCallCheck(this, e);
    }
    babelRuntimeHelpers.classProps(e, null, [{
      key: "start",
      value: function (e) {
        if (!e || !e.length || e.length === 1 && e.end(0) - e.start(0) < 0.000001 || e.length === 1 && e.start(0) < 0) {
          return 0;
        } else {
          return e.start(0);
        }
      }
    }, {
      key: "end",
      value: function (e) {
        if (!e || !e.length || e.length === 1 && e.end(0) - e.start(0) < 0.000001) {
          return 0;
        } else {
          return e.end(e.length - 1);
        }
      }
    }, {
      key: "get",
      value: function (e) {
        if (e) {
          try {
            return e.buffered;
          } catch (e) {}
        }
      }
    }, {
      key: "buffers",
      value: function (e, t) {
        if (!e || !e.length) {
          return [];
        }
        var n = [];
        var r = 0;
        var i = e.length;
        for (; r < i; r++) {
          var o = n.length;
          if (o && t) {
            var a = n[o - 1];
            var s = a[1];
            if (e.start(r) - s <= t) {
              var u = e.end(r);
              if (u > s) {
                a[1] = u;
              }
            } else {
              n.push([e.start(r), e.end(r)]);
            }
          } else {
            n.push([e.start(r), e.end(r)]);
          }
        }
        return n;
      }
    }, {
      key: "totalLength",
      value: function (e) {
        if (e && e.length) {
          return e.reduce(function (e, t) {
            return e + (t[1] - t[0]);
          }, 0);
        } else {
          return 0;
        }
      }
    }, {
      key: "info",
      value: function (t, n = 0, r = 0) {
        if (!t || !t.length) {
          return {
            start: 0,
            end: 0,
            buffers: []
          };
        }
        var i = 0;
        var o = 0;
        var a = 0;
        var s = 0;
        var u = 0;
        var c = 0;
        var l = 0;
        var f = e.buffers(t, r);
        var d = 0;
        var h = f.length;
        for (; d < h; d++) {
          var p = f[d];
          if (n + r >= p[0] && n <= p[1]) {
            i = p[0];
            o = p[1];
            a = d;
          } else if (n + r < p[0]) {
            s = p[0];
            u = p[1];
            break;
          } else if (n + r > p[1]) {
            c = p[0];
            l = p[1];
          }
        }
        return {
          start: i,
          end: o,
          index: a,
          buffers: f,
          nextStart: s,
          nextEnd: u,
          prevStart: c,
          prevEnd: l,
          currentTime: n,
          behind: n - i,
          remaining: o ? o - n : 0,
          length: e.totalLength && e.totalLength(f)
        };
      }
    }]);
    return e;
  }();
  require.d(exports, {
    BufferRangeUtil: function () {
      return i;
    }
  });
}