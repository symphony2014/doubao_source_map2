// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ol' to 'createAsyncExecutor'
// - Renamed export 'rG' to 'createCollector'
// - Renamed export 'y2' to 'createSyncExecutor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 29916
         */
module.exports = function (module, exports, require) {
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var polyfillArraySpread = require("polyfill-array-spread") /*id: 415168*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function a() {
    var e;
    var t = [];
    return {
      tap: function (e) {
        t.push(e);
      },
      call: (e = asyncGeneratorHelper.asyncWrapper(function () {
        var e;
        var n;
        var r;
        var a;
        var s;
        var u;
        var c;
        var l;
        var f;
        var h;
        var d;
        var p;
        var g;
        var v;
        var m = arguments;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              n = Array(e = m.length);
              r = 0;
              for (; r < e; r++) {
                n[r] = m[r];
              }
              a = false;
              u = function (e) {
                a = true;
                s = e;
              };
              c = true;
              l = false;
              f = undefined;
              o.label = 1;
            case 1:
              o.trys.push([1, 6, 7, 8]);
              h = t[Symbol.iterator]();
              o.label = 2;
            case 2:
              if ((c = (d = h.next()).done) || (p = d.value, a)) {
                return [3, 5];
              }
              return [4, p.apply(undefined, polyfillArraySpread.toArray(n).concat([u]))];
            case 3:
              if ((g = o.sent()) !== undefined) {
                n[0] = g;
              }
              o.label = 4;
            case 4:
              c = true;
              return [3, 2];
            case 5:
              return [3, 8];
            case 6:
              v = o.sent();
              l = true;
              f = v;
              return [3, 8];
            case 7:
              try {
                if (!c && h.return != null) {
                  h.return();
                }
              } finally {
                if (l) {
                  throw f;
                }
              }
              return [7];
            case 8:
              return [2, a ? s : n[0] || []];
          }
        });
      }), function () {
        return e.apply(this, arguments);
      })
    };
  }
  function s() {
    var e = [];
    return {
      tap: function (t) {
        e.push(t);
      },
      call: function () {
        var t = arguments.length;
        var n = Array(t);
        var r = 0;
        for (; r < t; r++) {
          n[r] = arguments[r];
        }
        var o = true;
        var a = false;
        var s = undefined;
        try {
          var u;
          var c = e[Symbol.iterator]();
          for (; !(o = (u = c.next()).done); o = true) {
            var l = u.value.apply(undefined, polyfillArraySpread.toArray(n));
            if (l !== undefined) {
              n[0] = l;
            }
          }
        } catch (e) {
          a = true;
          s = e;
        } finally {
          try {
            if (!o && c.return != null) {
              c.return();
            }
          } finally {
            if (a) {
              throw s;
            }
          }
        }
        return n[0];
      }
    };
  }
  function u() {
    var e = [];
    return {
      tap: function (t) {
        e.push(t);
      },
      call: function () {
        var t = arguments.length;
        var n = Array(t);
        var r = 0;
        for (; r < t; r++) {
          n[r] = arguments[r];
        }
        var i = [];
        var o = true;
        var a = false;
        var s = undefined;
        try {
          var u;
          var c = e[Symbol.iterator]();
          for (; !(o = (u = c.next()).done); o = true) {
            var l = u.value(n);
            if (l !== undefined) {
              i.push(l);
            }
          }
        } catch (e) {
          a = true;
          s = e;
        } finally {
          try {
            if (!o && c.return != null) {
              c.return();
            }
          } finally {
            if (a) {
              throw s;
            }
          }
        }
        return i;
      }
    };
  }
  require.d(exports, {
    createAsyncExecutor: function () {
      return a;
    },
    createCollector: function () {
      return u;
    },
    createSyncExecutor: function () {
      return s;
    }
  });
}