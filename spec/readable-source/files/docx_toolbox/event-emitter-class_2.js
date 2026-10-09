// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 114194
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var o = function () {
    function e() {
      this.y = {};
      this.A = {};
    }
    var t = e.prototype;
    t.on = function (e, t, n) {
      this.x(e, t, false, n);
    };
    t.once = function (e, t, n) {
      this.x(e, t, true, n);
    };
    t.off = function (e, t) {
      this.Y(e, t);
    };
    t.removeEventListener = function (e, t) {
      this.Y(e, t);
    };
    t.trigger = function (e, t) {
      this.J(e, t);
    };
    t.reset = function () {
      this.y = {};
      this.A = {};
    };
    t.removeListener = function (e, t) {
      this.Y(e, t);
    };
    t.getListeners = function (e) {
      var t = this.y[e];
      if (!t) {
        return [];
      }
      var n = [];
      Object.keys(t).sort(function (e, t) {
        return +e - +t;
      }).forEach(function (e) {
        n = n.concat(t[e]);
      });
      return n;
    };
    t.x = function (e, t, n, i) {
      var o;
      if (n === undefined) {
        n = false;
      }
      if (i === undefined) {
        i = 1000;
      }
      if (!this.y[e]) {
        this.y[e] = {};
        this.A[e] = new Set();
      }
      if (!this.A[e].has(t)) {
        o = {
          listener: t,
          isOnce: n,
          priority: i
        };
        if ((n = this.y[e])[i]) {
          n[i].push(o);
        } else {
          n[i] = [o];
        }
        this.A[e].add(t);
      }
    };
    t.Y = function (e, t) {
      var n;
      var o;
      if (this.y[e]) {
        try {
          var r = typescriptRuntimeHelpers_1.values(Object.keys(this.y[e]));
          var s = r.next();
          for (; !s.done; s = r.next()) {
            var l = s.value;
            var a = this.y[e][l];
            var u = a.findIndex(function (e) {
              return e.listener === t;
            });
            if (u !== -1) {
              a.splice(u, 1);
              if (!a.length) {
                delete this.y[e][l];
              }
              this.A[e].delete(t);
              break;
            }
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    };
    t.J = function (e, t) {
      var n = this;
      if (t === undefined) {
        t = [];
      }
      this.getListeners(e).forEach(function (i) {
        var o = i.listener;
        if (i.isOnce) {
          n.Y(e, o);
        }
        o.apply(o, t);
      });
    };
    return e;
  }();
  exports.EventEmitter = o;
}