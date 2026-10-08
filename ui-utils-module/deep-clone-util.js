// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'deepClone'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 539809
         */
module.exports = function (module, exports, require) {
  var r = Function.prototype.toString;
  var a = Object.create;
  var o = Object.prototype.toString;
  var l = function () {
    function e() {
      this._keys = [];
      this._values = [];
    }
    e.prototype.has = function (e) {
      return !!~this._keys.indexOf(e);
    };
    e.prototype.get = function (e) {
      return this._values[this._keys.indexOf(e)];
    };
    e.prototype.set = function (e, t) {
      this._keys.push(e);
      this._values.push(t);
    };
    return e;
  }();
  var i = typeof WeakMap != "undefined" ? function () {
    return new WeakMap();
  } : function () {
    return new l();
  };
  function c(e) {
    if (!e) {
      return a(null);
    }
    var t = e.constructor;
    if (t === Object) {
      if (e === Object.prototype) {
        return {};
      } else {
        return a(e);
      }
    }
    if (t && ~r.call(t).indexOf("[native code]")) {
      try {
        return new t();
      } catch (e) {}
    }
    return a(e);
  }
  var s = /test/g.flags === "g" ? function (e) {
    return e.flags;
  } : function (e) {
    var t = "";
    if (e.global) {
      t += "g";
    }
    if (e.ignoreCase) {
      t += "i";
    }
    if (e.multiline) {
      t += "m";
    }
    if (e.unicode) {
      t += "u";
    }
    if (e.sticky) {
      t += "y";
    }
    return t;
  };
  function u(e) {
    var t = o.call(e);
    return t.substring(8, t.length - 1);
  }
  var d = typeof Symbol != "undefined" ? function (e) {
    return e[Symbol.toStringTag] || u(e);
  } : u;
  var m = Object.defineProperty;
  var p = Object.getOwnPropertyDescriptor;
  var f = Object.getOwnPropertyNames;
  var h = Object.getOwnPropertySymbols;
  var g = Object.prototype;
  var w = g.hasOwnProperty;
  var y = g.propertyIsEnumerable;
  var _ = typeof h == "function";
  var v = _ ? function (e) {
    return f(e).concat(h(e));
  } : f;
  function b(e, t, n) {
    var r = v(e);
    var a = 0;
    var o = r.length;
    var l = undefined;
    var i = undefined;
    for (; a < o; ++a) {
      if ((l = r[a]) !== "callee" && l !== "caller") {
        if (!(i = p(e, l))) {
          t[l] = n.copier(e[l], n);
          continue;
        }
        if (!i.get && !i.set) {
          i.value = n.copier(i.value, n);
        }
        try {
          m(t, l, i);
        } catch (e) {
          t[l] = i.value;
        }
      }
    }
    return t;
  }
  function x(e, t) {
    return e.slice(0);
  }
  function $(e, t) {
    var n = new t.Constructor();
    t.cache.set(e, n);
    e.forEach(function (e, r) {
      n.set(r, t.copier(e, t));
    });
    return n;
  }
  function R(e, t) {
    return new t.Constructor(e.valueOf());
  }
  function C(e, t) {
    return e;
  }
  function S(e, t) {
    var n = new t.Constructor();
    t.cache.set(e, n);
    e.forEach(function (e) {
      n.add(t.copier(e, t));
    });
    return n;
  }
  var E = Array.isArray;
  var T = Object.assign;
  var k = Object.getPrototypeOf || function (e) {
    return e.__proto__;
  };
  var N = {
    array: function (e, t) {
      var n = new t.Constructor();
      t.cache.set(e, n);
      var r = 0;
      var a = e.length;
      for (; r < a; ++r) {
        n[r] = t.copier(e[r], t);
      }
      return n;
    },
    arrayBuffer: x,
    blob: function (e, t) {
      return e.slice(0, e.size, e.type);
    },
    dataView: function (e, t) {
      return new t.Constructor(x(e.buffer));
    },
    date: function (e, t) {
      return new t.Constructor(e.getTime());
    },
    error: C,
    map: $,
    object: _ ? function (e, t) {
      var n = c(t.prototype);
      t.cache.set(e, n);
      for (var r in e) {
        if (w.call(e, r)) {
          n[r] = t.copier(e[r], t);
        }
      }
      var a = h(e);
      var o = 0;
      var l = a.length;
      var i = undefined;
      for (; o < l; ++o) {
        i = a[o];
        if (y.call(e, i)) {
          n[i] = t.copier(e[i], t);
        }
      }
      return n;
    } : function (e, t) {
      var n = c(t.prototype);
      t.cache.set(e, n);
      for (var r in e) {
        if (w.call(e, r)) {
          n[r] = t.copier(e[r], t);
        }
      }
      return n;
    },
    regExp: function (e, t) {
      var n = new t.Constructor(e.source, s(e));
      n.lastIndex = e.lastIndex;
      return n;
    },
    set: S
  };
  var j = T({}, N, {
    array: function (e, t) {
      var n = new t.Constructor();
      t.cache.set(e, n);
      return b(e, n, t);
    },
    map: function (e, t) {
      return b(e, $(e, t), t);
    },
    object: function (e, t) {
      var n = c(t.prototype);
      t.cache.set(e, n);
      return b(e, n, t);
    },
    set: function (e, t) {
      return b(e, S(e, t), t);
    }
  });
  function F(e) {
    var t;
    var n = {
      Arguments: (t = T({}, N, e)).object,
      Array: t.array,
      ArrayBuffer: t.arrayBuffer,
      Blob: t.blob,
      Boolean: R,
      DataView: t.dataView,
      Date: t.date,
      Error: t.error,
      Float32Array: t.arrayBuffer,
      Float64Array: t.arrayBuffer,
      Int8Array: t.arrayBuffer,
      Int16Array: t.arrayBuffer,
      Int32Array: t.arrayBuffer,
      Map: t.map,
      Number: R,
      Object: t.object,
      Promise: C,
      RegExp: t.regExp,
      Set: t.set,
      String: R,
      WeakMap: C,
      WeakSet: C,
      Uint8Array: t.arrayBuffer,
      Uint8ClampedArray: t.arrayBuffer,
      Uint16Array: t.arrayBuffer,
      Uint32Array: t.arrayBuffer,
      Uint64Array: t.arrayBuffer
    };
    var r = n.Array;
    var a = n.Object;
    function o(e, t) {
      t.prototype = t.Constructor = undefined;
      if (!e || typeof e != "object") {
        return e;
      }
      if (t.cache.has(e)) {
        return t.cache.get(e);
      }
      t.prototype = k(e);
      t.Constructor = t.prototype && t.prototype.constructor;
      if (!t.Constructor || t.Constructor === Object) {
        return a(e, t);
      }
      if (E(e)) {
        return r(e, t);
      }
      var o = n[d(e)];
      if (o) {
        return o(e, t);
      } else if (typeof e.then == "function") {
        return e;
      } else {
        return a(e, t);
      }
    }
    return function (e) {
      return o(e, {
        Constructor: undefined,
        cache: i(),
        copier: o,
        prototype: undefined
      });
    };
  }
  F(T({}, j, {}));
  var M = F({});
  require.d(exports, {
    deepClone: function () {
      return M;
    }
  });
}