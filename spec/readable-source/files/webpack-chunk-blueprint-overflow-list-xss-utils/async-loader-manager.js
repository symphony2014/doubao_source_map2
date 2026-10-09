// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'asyncLoaderManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 661071
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var asyncGeneratorHelper = require("async-generator-helper") /*id: 198527*/;
  var instanceOfPolyfill = require("instance-of-polyfill") /*id: 404913*/;
  var arraySlicePolyfill_1_1 = require("array-slice-polyfill_1_1") /*id: 240168*/;
  var polyfillArraySpread = require("polyfill-array-spread") /*id: 415168*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var invariantErrorUtil = require("invariant-error-util") /*id: 827168*/;
  var f = invariantErrorUtil;
  function h() {
    var e = new Map();
    return function (t) {
      var n = e.get(t);
      if (n) {
        return n;
      }
      var r = JSON.stringify(t);
      f(r, "params should be not null value");
      e.set(t, r);
      return r;
    };
  }
  (r = i ||= {})[r.idle = 0] = "idle";
  r[r.loading = 1] = "loading";
  r[r.fulfilled = 2] = "fulfilled";
  r[r.rejected = 3] = "rejected";
  function d(e) {
    var t;
    var n;
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      loading: false,
      reloading: false,
      data: undefined,
      error: undefined
    };
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return Promise.resolve();
    };
    var s = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    var l = 0;
    var f = r.data;
    var h = r.error;
    var d = false;
    var p = new Set();
    t = asyncGeneratorHelper.asyncWrapper(function () {
      return typescriptRuntimeHelpers.generator(this, function (e) {
        if (s || l === 1) {
          return [2, n];
        } else {
          l = 1;
          m();
          return [2, n = i().then(function (e) {
            f = e;
            h = null;
            l = 2;
          }).catch(function (e) {
            h = e;
            f = null;
            l = 3;
          }).finally(function () {
            n = null;
            d = true;
            m();
          })];
        }
      });
    });
    function g() {
      return t.apply(this, arguments);
    }
    function v() {
      return {
        loading: !d && l === 1,
        reloading: d && l === 1,
        data: f,
        error: instanceOfPolyfill.instanceOfCheck(h, Error) ? `${h.message}` : h,
        _error: h
      };
    }
    function m() {
      polyfillArraySpread.toArray(p).forEach(function (e) {
        e(l, v());
      });
    }
    return {
      get result() {
        return v();
      },
      get promise() {
        return n;
      },
      onChange: function (e) {
        p.add(e);
        return function () {
          p.delete(e);
        };
      },
      load: g
    };
  }
  function p(e) {
    var t;
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var r = n.skipStatic;
    var i = r !== undefined && r;
    var u = n.skipNonStatic;
    var l = u !== undefined && u;
    var f = new Map();
    var p = h();
    return {
      hasPendingLoaders: function () {
        var e = true;
        var t = false;
        var n = undefined;
        try {
          var r;
          var i = f.values()[Symbol.iterator]();
          for (; !(e = (r = i.next()).done); e = true) {
            var o = r.value.promise;
            if (instanceOfPolyfill.instanceOfCheck(o, Promise)) {
              return true;
            }
          }
        } catch (e) {
          t = true;
          n = e;
        } finally {
          try {
            if (!e && i.return != null) {
              i.return();
            }
          } finally {
            if (t) {
              throw n;
            }
          }
        }
        return false;
      },
      awaitPendingLoaders: (t = asyncGeneratorHelper.asyncWrapper(function () {
        var e;
        var t;
        var n;
        var r;
        var i;
        var o;
        var u;
        var l;
        var h;
        var d;
        return typescriptRuntimeHelpers.generator(this, function (c) {
          switch (c.label) {
            case 0:
              e = [];
              t = true;
              n = false;
              r = undefined;
              try {
                for (i = f[Symbol.iterator](); !(t = (o = i.next()).done); t = true) {
                  l = (u = arraySlicePolyfill_1_1.slicedToArray(o.value, 2))[0];
                  d = (h = u[1]).promise;
                  if (instanceOfPolyfill.instanceOfCheck(d, Promise)) {
                    e.push([l, h]);
                  }
                }
              } catch (e) {
                n = true;
                r = e;
              } finally {
                try {
                  if (!t && i.return != null) {
                    i.return();
                  }
                } finally {
                  if (n) {
                    throw r;
                  }
                }
              }
              return [4, Promise.all(e.map(function (e) {
                return e[1].promise;
              }))];
            case 1:
              c.sent();
              return [2, e.reduce(function (e, t) {
                var n = arraySlicePolyfill_1_1.slicedToArray(t, 2);
                var r = n[0];
                var i = n[1];
                e[r] = i.result;
                return e;
              }, {})];
          }
        });
      }), function () {
        return t.apply(this, arguments);
      }),
      add: function (t, n) {
        var r = p(n.params);
        var o = f.get(r);
        var a = n._cache;
        if (!o || a === false) {
          var s = l && !n.static;
          var u = i && n.static;
          o = d(r, e[r] !== undefined ? e[r] : {
            data: n.initialData
          }, t, s || u);
          f.set(r, o);
        }
        return r;
      },
      get: function (e) {
        return f.get(e);
      }
    };
  }
  require.d(exports, {
    asyncLoaderManager: function () {
      return p;
    }
  });
}