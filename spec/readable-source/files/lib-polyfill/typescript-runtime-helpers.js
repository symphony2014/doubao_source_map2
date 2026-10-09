// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CR' to 'spreadArray'
// - Renamed export 'FC' to 'asyncGenerator'
// - Renamed export 'Jh' to 'generator'
// - Renamed export 'KL' to 'asyncDelegator'
// - Renamed export 'XA' to 'iteratorValues'
// - Renamed export 'ZT' to 'classExtends'
// - Renamed export '_T' to 'objectRest'
// - Renamed export 'ev' to 'arraySpread'
// - Renamed export 'fM' to 'decorate'
// - Renamed export 'gn' to 'metadata'
// - Renamed export 'mG' to 'awaiter'
// - Renamed export 'pi' to 'objectAssign'
// - Renamed export 'pr' to 'concatArrays'
// - Renamed export 'qq' to 'templateObject'
// - Renamed export 'w6' to 'reflectMetadata'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 4100
         */
module.exports = function (module, exports, require) {
  function n(t, r) {
    return (n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, r) {
      t.__proto__ = r;
    } || function (t, r) {
      for (var e in r) {
        if (Object.prototype.hasOwnProperty.call(r, e)) {
          t[e] = r[e];
        }
      }
    })(t, r);
  }
  function o(t, r) {
    if (typeof r != "function" && r !== null) {
      throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
    }
    function e() {
      this.constructor = t;
    }
    n(t, r);
    t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
  }
  function i() {
    return (i = Object.assign || function (t) {
      var r;
      var e = 1;
      var n = arguments.length;
      for (; e < n; e++) {
        for (var o in r = arguments[e]) {
          if (Object.prototype.hasOwnProperty.call(r, o)) {
            t[o] = r[o];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function a(t, r) {
    var e = {};
    for (var n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0) {
        e[n] = t[n];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var o = 0;
      var n = Object.getOwnPropertySymbols(t);
      for (; o < n.length; o++) {
        if (r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o])) {
          e[n[o]] = t[n[o]];
        }
      }
    }
    return e;
  }
  function u(t, r, e, n) {
    var o;
    var i = arguments.length;
    var a = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      a = Reflect.decorate(t, r, e, n);
    } else {
      for (var u = t.length - 1; u >= 0; u--) {
        if (o = t[u]) {
          a = (i < 3 ? o(a) : i > 3 ? o(r, e, a) : o(r, e)) || a;
        }
      }
    }
    if (i > 3 && a) {
      Object.defineProperty(r, e, a);
    }
    return a;
  }
  function c(t, r) {
    return function (e, n) {
      r(e, n, t);
    };
  }
  function f(t, r) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
      return Reflect.metadata(t, r);
    }
  }
  function s(t, r, e, n) {
    return new (e ||= Promise)(function (o, i) {
      function a(t) {
        try {
          c(n.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(n.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var r;
        if (t.done) {
          o(t.value);
        } else {
          ((r = t.value) instanceof e ? r : new e(function (t) {
            t(r);
          })).then(a, u);
        }
      }
      c((n = n.apply(t, r || [])).next());
    });
  }
  function l(t, r) {
    var e;
    var n;
    var o;
    var i;
    var a = {
      label: 0,
      sent: function () {
        if (o[0] & 1) {
          throw o[1];
        }
        return o[1];
      },
      trys: [],
      ops: []
    };
    i = {
      next: u(0),
      throw: u(1),
      return: u(2)
    };
    if (typeof Symbol == "function") {
      i[Symbol.iterator] = function () {
        return this;
      };
    }
    return i;
    function u(u) {
      return function (c) {
        return function (u) {
          if (e) {
            throw TypeError("Generator is already executing.");
          }
          while (i && (i = 0, u[0] && (a = 0)), a) {
            try {
              e = 1;
              if (n && (o = u[0] & 2 ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) {
                return o;
              }
              n = 0;
              if (o) {
                u = [u[0] & 2, o.value];
              }
              switch (u[0]) {
                case 0:
                case 1:
                  o = u;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: u[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  n = u[1];
                  u = [0];
                  continue;
                case 7:
                  u = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                    a.label = u[1];
                    break;
                  }
                  if (u[0] === 6 && a.label < o[1]) {
                    a.label = o[1];
                    o = u;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2];
                    a.ops.push(u);
                    break;
                  }
                  if (o[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              u = r.call(t, a);
            } catch (t) {
              u = [6, t];
              n = 0;
            } finally {
              e = o = 0;
            }
          }
          if (u[0] & 5) {
            throw u[1];
          }
          return {
            value: u[0] ? u[1] : undefined,
            done: true
          };
        }([u, c]);
      };
    }
  }
  function v(t) {
    var r = typeof Symbol == "function" && Symbol.iterator;
    var e = r && t[r];
    var n = 0;
    if (e) {
      return e.call(t);
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
    throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function p(t, r) {
    var e = typeof Symbol == "function" && t[Symbol.iterator];
    if (!e) {
      return t;
    }
    var n;
    var o;
    var i = e.call(t);
    var a = [];
    try {
      while ((r === undefined || r-- > 0) && !(n = i.next()).done) {
        a.push(n.value);
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (e = i.return)) {
          e.call(i);
        }
      } finally {
        if (o) {
          throw o.error;
        }
      }
    }
    return a;
  }
  function h() {
    var t = 0;
    var r = 0;
    var e = arguments.length;
    for (; r < e; r++) {
      t += arguments[r].length;
    }
    var n = Array(t);
    var o = 0;
    var r = 0;
    for (; r < e; r++) {
      var i = arguments[r];
      var a = 0;
      var u = i.length;
      for (; a < u; a++, o++) {
        n[o] = i[a];
      }
    }
    return n;
  }
  function d(t, r, e) {
    if (e || arguments.length == 2) {
      var n;
      var o = 0;
      var i = r.length;
      for (; o < i; o++) {
        if (!!n || !(o in r)) {
          n ||= Array.prototype.slice.call(r, 0, o);
          n[o] = r[o];
        }
      }
    }
    return t.concat(n || Array.prototype.slice.call(r));
  }
  function y(t) {
    if (this instanceof y) {
      this.v = t;
      return this;
    } else {
      return new y(t);
    }
  }
  function g(t, r, e) {
    if (!Symbol.asyncIterator) {
      throw TypeError("Symbol.asyncIterator is not defined.");
    }
    var n;
    var o = e.apply(t, r || []);
    var i = [];
    n = {};
    a("next");
    a("throw");
    a("return");
    n[Symbol.asyncIterator] = function () {
      return this;
    };
    return n;
    function a(t) {
      if (o[t]) {
        n[t] = function (r) {
          return new Promise(function (e, n) {
            if (!(i.push([t, r, e, n]) > 1)) {
              u(t, r);
            }
          });
        };
      }
    }
    function u(t, r) {
      try {
        var e;
        if ((e = o[t](r)).value instanceof y) {
          Promise.resolve(e.value.v).then(c, f);
        } else {
          s(i[0][2], e);
        }
      } catch (t) {
        s(i[0][3], t);
      }
    }
    function c(t) {
      u("next", t);
    }
    function f(t) {
      u("throw", t);
    }
    function s(t, r) {
      t(r);
      i.shift();
      if (i.length) {
        u(i[0][0], i[0][1]);
      }
    }
  }
  function b(t) {
    if (!Symbol.asyncIterator) {
      throw TypeError("Symbol.asyncIterator is not defined.");
    }
    var r;
    var e = t[Symbol.asyncIterator];
    if (e) {
      return e.call(t);
    } else {
      t = v(t);
      r = {};
      n("next");
      n("throw");
      n("return");
      r[Symbol.asyncIterator] = function () {
        return this;
      };
      return r;
    }
    function n(e) {
      r[e] = t[e] && function (r) {
        return new Promise(function (n, o) {
          (function (t, r, e, n) {
            Promise.resolve(n).then(function (r) {
              t({
                value: r,
                done: e
              });
            }, r);
          })(n, o, (r = t[e](r)).done, r.value);
        });
      };
    }
  }
  require.d(exports, {
    spreadArray: function () {
      return p;
    },
    asyncGenerator: function () {
      return g;
    },
    generator: function () {
      return l;
    },
    asyncDelegator: function () {
      return b;
    },
    iteratorValues: function () {
      return v;
    },
    classExtends: function () {
      return o;
    },
    objectRest: function () {
      return a;
    },
    arraySpread: function () {
      return d;
    },
    decorate: function () {
      return c;
    },
    metadata: function () {
      return u;
    },
    awaiter: function () {
      return s;
    },
    objectAssign: function () {
      return i;
    },
    concatArrays: function () {
      return h;
    },
    templateObject: function () {
      return y;
    },
    reflectMetadata: function () {
      return f;
    }
  });
}