// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'awaiter'
// - Renamed export 'a' to 'readIterator'
// - Renamed export 'b' to 'generator'
// - Renamed export 'c' to 'getValues'
// - Renamed export 'd' to 'inherits'
// - Renamed export 'e' to 'decorate'
// - Renamed export 'f' to 'spreadArray'
// - Renamed export 'g' to 'assign'
// - Renamed export 'h' to 'restObject'
// - Renamed export 'i' to 'template'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: highlightjs.855d37dd.js
         * chunkId: 23471
         * moduleId: 729889
         */
module.exports = function (module, exports, require) {
  function a(e, n) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, n) {
      e.__proto__ = n;
    } || function (e, n) {
      for (var t in n) {
        if (n.hasOwnProperty(t)) {
          e[t] = n[t];
        }
      }
    })(e, n);
  }
  function r(e, n) {
    function t() {
      this.constructor = e;
    }
    a(e, n);
    e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  }
  function i() {
    return (i = Object.assign || function (e) {
      var n;
      var t = 1;
      var a = arguments.length;
      for (; t < a; t++) {
        for (var r in n = arguments[t]) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function s(e, n) {
    var t = {};
    for (var a in e) {
      if (Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0) {
        t[a] = e[a];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var a = Object.getOwnPropertySymbols(e);
      for (; r < a.length; r++) {
        if (n.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r])) {
          t[a[r]] = e[a[r]];
        }
      }
    }
    return t;
  }
  function o(e, n, t, a) {
    var r;
    var i = arguments.length;
    var s = i < 3 ? n : a === null ? a = Object.getOwnPropertyDescriptor(n, t) : a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      s = Reflect.decorate(e, n, t, a);
    } else {
      for (var o = e.length - 1; o >= 0; o--) {
        if (r = e[o]) {
          s = (i < 3 ? r(s) : i > 3 ? r(n, t, s) : r(n, t)) || s;
        }
      }
    }
    if (i > 3 && s) {
      Object.defineProperty(n, t, s);
    }
    return s;
  }
  function l(e, n, t, a) {
    return new (t ||= Promise)(function (r, i) {
      function s(e) {
        try {
          l(a.next(e));
        } catch (e) {
          i(e);
        }
      }
      function o(e) {
        try {
          l(a.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        var n;
        if (e.done) {
          r(e.value);
        } else {
          ((n = e.value) instanceof t ? n : new t(function (e) {
            e(n);
          })).then(s, o);
        }
      }
      l((a = a.apply(e, n || [])).next());
    });
  }
  function c(e, n) {
    var t;
    var a;
    var r;
    var i;
    var s = {
      label: 0,
      sent: function () {
        if (r[0] & 1) {
          throw r[1];
        }
        return r[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: o(0),
      throw: o(1),
      return: o(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function o(i) {
      return function (o) {
        return function (i) {
          if (t) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              t = 1;
              if (a && (r = i[0] & 2 ? a.return : i[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1])).done) {
                return r;
              }
              a = 0;
              if (r) {
                i = [i[0] & 2, r.value];
              }
              switch (i[0]) {
                case 0:
                case 1:
                  r = i;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: i[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  a = i[1];
                  i = [0];
                  continue;
                case 7:
                  i = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (i[0] === 3 && (!r || i[1] > r[0] && i[1] < r[3])) {
                    s.label = i[1];
                    break;
                  }
                  if (i[0] === 6 && s.label < r[1]) {
                    s.label = r[1];
                    r = i;
                    break;
                  }
                  if (r && s.label < r[2]) {
                    s.label = r[2];
                    s.ops.push(i);
                    break;
                  }
                  if (r[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              i = n.call(e, s);
            } catch (e) {
              i = [6, e];
              a = 0;
            } finally {
              t = r = 0;
            }
          }
          if (i[0] & 5) {
            throw i[1];
          }
          return {
            value: i[0] ? i[1] : undefined,
            done: true
          };
        }([i, o]);
      };
    }
  }
  function d(e) {
    var n = typeof Symbol == "function" && Symbol.iterator;
    var t = n && e[n];
    var a = 0;
    if (t) {
      return t.call(e);
    }
    if (e && typeof e.length == "number") {
      return {
        next: function () {
          if (e && a >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[a++],
            done: !e
          };
        }
      };
    }
    throw TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function u(e, n) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    if (!t) {
      return e;
    }
    var a;
    var r;
    var i = t.call(e);
    var s = [];
    try {
      while ((n === undefined || n-- > 0) && !(a = i.next()).done) {
        s.push(a.value);
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        if (a && !a.done && (t = i.return)) {
          t.call(i);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return s;
  }
  function g() {
    var e = [];
    var n = 0;
    for (; n < arguments.length; n++) {
      e = e.concat(u(arguments[n]));
    }
    return e;
  }
  function m(e, n) {
    if (Object.defineProperty) {
      Object.defineProperty(e, "raw", {
        value: n
      });
    } else {
      e.raw = n;
    }
    return e;
  }
  require.d(exports, {
    awaiter: function () {
      return l;
    },
    readIterator: function () {
      return u;
    },
    generator: function () {
      return c;
    },
    getValues: function () {
      return d;
    },
    inherits: function () {
      return r;
    },
    decorate: function () {
      return o;
    },
    spreadArray: function () {
      return g;
    },
    assign: function () {
      return i;
    },
    restObject: function () {
      return s;
    },
    template: function () {
      return m;
    }
  });
}