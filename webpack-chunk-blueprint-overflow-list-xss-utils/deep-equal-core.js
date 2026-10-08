// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 489806
         */
module.exports = function (module, exports, require) {
  var mapCacheImplementation_1 = require("map-cache-implementation_1") /*id: 215370*/;
  var setCacheImplementation = require("set-cache-implementation") /*id: 776133*/;
  var arraySomeUtil = require("array-some-util") /*id: 312664*/;
  var hasCheckUtility = require("has-check-utility") /*id: 958985*/;
  function s(e, t, n, r, s, u) {
    var c = n & 1;
    var l = e.length;
    var f = t.length;
    if (l != f && (!c || !(f > l))) {
      return false;
    }
    var h = u.get(e);
    var d = u.get(t);
    if (h && d) {
      return h == t && d == e;
    }
    var p = -1;
    var g = true;
    var v = n & 2 ? new setCacheImplementation.SetCache() : undefined;
    u.set(e, t);
    u.set(t, e);
    while (++p < l) {
      var m = e[p];
      var y = t[p];
      if (r) {
        var b = c ? r(y, m, p, t, e, u) : r(m, y, p, e, t, u);
      }
      if (b !== undefined) {
        if (b) {
          continue;
        }
        g = false;
        break;
      }
      if (v) {
        if (!arraySomeUtil.arraySome(t, function (e, t) {
          if (!hasCheckUtility.has(v, t) && (m === e || s(m, e, n, r, u))) {
            return v.push(t);
          }
        })) {
          g = false;
          break;
        }
      } else if (m !== y && !s(m, y, n, r, u)) {
        g = false;
        break;
      }
    }
    u.delete(e);
    u.delete(t);
    return g;
  }
  var globalSymbolExport = require("global-symbol-export") /*id: 378602*/;
  var globalUint8Array = require("global-uint8-array") /*id: 688406*/;
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  var mapToEntriesArray = require("map-to-entries-array") /*id: 414664*/;
  var collectionToArray = require("collection-to-array") /*id: 164287*/;
  var d = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.prototype : undefined;
  var p = d ? d.valueOf : undefined;
  function g(e, t, n, r, i, o, a) {
    switch (n) {
      case "[object DataView]":
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
          break;
        }
        e = e.buffer;
        t = t.buffer;
      case "[object ArrayBuffer]":
        if (e.byteLength != t.byteLength || !o(new globalUint8Array.GlobalUint8Array(e), new globalUint8Array.GlobalUint8Array(t))) {
          break;
        }
        return true;
      case "[object Boolean]":
      case "[object Date]":
      case "[object Number]":
        return isEqualUtil.isEqual(+e, +t);
      case "[object Error]":
        return e.name == t.name && e.message == t.message;
      case "[object RegExp]":
      case "[object String]":
        return e == t + "";
      case "[object Map]":
        var u = mapToEntriesArray.mapToEntries;
      case "[object Set]":
        var d = r & 1;
        u ||= collectionToArray.toArray;
        if (e.size != t.size && !d) {
          break;
        }
        var g = a.get(e);
        if (g) {
          return g == t;
        }
        r |= 2;
        a.set(e, t);
        var v = s(u(e), u(t), r, i, o, a);
        a.delete(e);
        return v;
      case "[object Symbol]":
        if (p) {
          return p.call(e) == p.call(t);
        }
    }
    return false;
  }
  var normalizeArrayData = require("normalize-array-data") /*id: 833159*/;
  var m = Object.prototype.hasOwnProperty;
  function y(e, t, n, r, i, o) {
    var a = n & 1;
    var s = normalizeArrayData.normalizeArrayData(e);
    var u = s.length;
    if (u != normalizeArrayData.normalizeArrayData(t).length && !a) {
      return false;
    }
    for (var c = u; c--;) {
      var l = s[c];
      if (!(a ? l in t : m.call(t, l))) {
        return false;
      }
    }
    var f = o.get(e);
    var h = o.get(t);
    if (f && h) {
      return f == t && h == e;
    }
    var d = true;
    o.set(e, t);
    o.set(t, e);
    var p = a;
    for (; ++c < u;) {
      var g = e[l = s[c]];
      var y = t[l];
      if (r) {
        var b = a ? r(y, g, l, t, e, o) : r(g, y, l, e, t, o);
      }
      if (!(b === undefined ? g === y || i(g, y, n, r, o) : b)) {
        d = false;
        break;
      }
      p ||= l == "constructor";
    }
    if (d && !p) {
      var _ = e.constructor;
      var w = t.constructor;
      if (_ != w && "constructor" in e && "constructor" in t && (typeof _ != "function" || !(_ instanceof _) || typeof w != "function" || !(w instanceof w))) {
        d = false;
      }
    }
    o.delete(e);
    o.delete(t);
    return d;
  }
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var isTypedArrayUtil = require("is-typed-array-util") /*id: 557455*/;
  var S = "[object Arguments]";
  var x = "[object Array]";
  var k = "[object Object]";
  var O = Object.prototype.hasOwnProperty;
  function A(e, t, n, i, o, a) {
    var u = arrayIsArrayUtil.isArray(e);
    var c = arrayIsArrayUtil.isArray(t);
    var l = u ? x : nativeBaseGetTagFix.getBaseGetTag(e);
    var f = c ? x : nativeBaseGetTagFix.getBaseGetTag(t);
    l = l == S ? k : l;
    f = f == S ? k : f;
    var h = l == k;
    var d = f == k;
    var p = l == f;
    if (p && bufferIsBufferUtil.isBufferCheck(e)) {
      if (!bufferIsBufferUtil.isBufferCheck(t)) {
        return false;
      }
      u = true;
      h = false;
    }
    if (p && !h) {
      a ||= new mapCacheImplementation_1.MapCache();
      if (u || isTypedArrayUtil.isTypedArray(e)) {
        return s(e, t, n, i, o, a);
      } else {
        return g(e, t, l, n, i, o, a);
      }
    }
    if (!(n & 1)) {
      var v = h && O.call(e, "__wrapped__");
      var m = d && O.call(t, "__wrapped__");
      if (v || m) {
        var A = v ? e.value() : e;
        var T = m ? t.value() : t;
        a ||= new mapCacheImplementation_1.MapCache();
        return o(A, T, n, i, a);
      }
    }
    return !!p && (a ||= new mapCacheImplementation_1.MapCache(), y(e, t, n, i, o, a));
  }
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var R = function e(t, n, r, i, o) {
    return t === n || (t != null && n != null && (objectTypeCheck.isNonNullObject(t) || objectTypeCheck.isNonNullObject(n)) ? A(t, n, r, i, e, o) : t != t && n != n);
  };
  require.d(exports, {
    isEqual: function () {
      return R;
    }
  });
}