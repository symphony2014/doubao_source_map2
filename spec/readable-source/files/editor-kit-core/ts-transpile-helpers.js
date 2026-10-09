// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'spreadArray'
// - Renamed export 'a' to 'objectAssign'
// - Renamed export 'b' to 'createIterator'
// - Renamed export 'c' to 'extendClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 502250
         */
module.exports = function (module, exports, require) {
  function n(t, e) {
    return (n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          t[r] = e[r];
        }
      }
    })(t, e);
  }
  function o(t, e) {
    function r() {
      this.constructor = t;
    }
    n(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  }
  function i() {
    return (i = Object.assign || function (t) {
      var e;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var o in e = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function u(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var r = e && t[e];
    var n = 0;
    if (r) {
      return r.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && n >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[n++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function a(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) {
      return t;
    }
    var n;
    var o;
    var i = r.call(t);
    var u = [];
    try {
      while ((e === undefined || e-- > 0) && !(n = i.next()).done) {
        u.push(n.value);
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return u;
  }
  require.d(exports, {
    spreadArray: function () {
      return a;
    },
    objectAssign: function () {
      return i;
    },
    createIterator: function () {
      return u;
    },
    extendClass: function () {
      return o;
    }
  });
}