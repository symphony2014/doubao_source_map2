// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'deepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 961361
         */
module.exports = function (module, exports, require) {
  var i = Object.prototype.hasOwnProperty;
  function n(t, e, r) {
    for (r of t.keys()) {
      if (o(r, e)) {
        return r;
      }
    }
  }
  function o(t, e) {
    var r;
    var s;
    var a;
    if (t === e) {
      return true;
    }
    if (t && e && (r = t.constructor) === e.constructor) {
      if (r === Date) {
        return t.getTime() === e.getTime();
      }
      if (r === RegExp) {
        return t.toString() === e.toString();
      }
      if (r === Array) {
        if ((s = t.length) === e.length) {
          while (s-- && o(t[s], e[s]));
        }
        return s === -1;
      }
      if (r === Set) {
        if (t.size !== e.size) {
          return false;
        }
        for (s of t) {
          if ((a = s) && typeof a == "object" && !(a = n(e, a)) || !e.has(a)) {
            return false;
          }
        }
        return true;
      }
      if (r === Map) {
        if (t.size !== e.size) {
          return false;
        }
        for (s of t) {
          if ((a = s[0]) && typeof a == "object" && !(a = n(e, a)) || !o(s[1], e.get(a))) {
            return false;
          }
        }
        return true;
      }
      if (r === ArrayBuffer) {
        t = new Uint8Array(t);
        e = new Uint8Array(e);
      } else if (r === DataView) {
        if ((s = t.byteLength) === e.byteLength) {
          while (s-- && t.getInt8(s) === e.getInt8(s));
        }
        return s === -1;
      }
      if (ArrayBuffer.isView(t)) {
        if ((s = t.byteLength) === e.byteLength) {
          while (s-- && t[s] === e[s]);
        }
        return s === -1;
      }
      if (!r || typeof t == "object") {
        s = 0;
        for (r in t) {
          if (i.call(t, r) && ++s && !i.call(e, r) || !(r in e) || !o(t[r], e[r])) {
            return false;
          }
        }
        return Object.keys(e).length === s;
      }
    }
    return t != t && e != e;
  }
  require.d(exports, {
    deepEqual: function () {
      return o;
    }
  });
}