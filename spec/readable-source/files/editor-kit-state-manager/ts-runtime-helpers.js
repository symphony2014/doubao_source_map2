// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'restHelper'
// - Renamed export 'a' to 'createIterator'
// - Renamed export 'b' to 'spreadArray'
// - Renamed export 'c' to 'inherits'
// - Renamed export 'd' to 'spreadArgs'
// - Renamed export 'e' to 'objectAssign'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 287285
         */
module.exports = function (module, exports, require) {
  function r(t, e) {
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
  }
  function i(t, e) {
    function n() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function o() {
    return (o = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function a(t, e) {
    var n = {};
    for (var r in t) {
      if (Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0) {
        n[r] = t[r];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(t);
      for (; i < r.length; i++) {
        if (e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i])) {
          n[r[i]] = t[r[i]];
        }
      }
    }
    return n;
  }
  function s(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function l(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var a = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        a.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a;
  }
  function u() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t = t.concat(l(arguments[e]));
    }
    return t;
  }
  require.d(exports, {
    restHelper: function () {
      return a;
    },
    createIterator: function () {
      return s;
    },
    spreadArray: function () {
      return l;
    },
    inherits: function () {
      return i;
    },
    spreadArgs: function () {
      return u;
    },
    objectAssign: function () {
      return o;
    }
  });
}