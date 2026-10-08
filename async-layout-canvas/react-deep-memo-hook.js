// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'useDeepMemo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 196129
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
    var r = e.length;
    if (r !== t.length) {
      return false;
    }
    while (r-- && n(e[r], t[r]));
    return r === -1;
  }
  function i(e, t, n) {
    if (e.size !== t.size) {
      return false;
    }
    var r;
    var i = e.entries();
    while (!(r = i.next()).done) {
      if (!t.has(r.value[0]) || !n(r.value[1], t.get(r.value[0]))) {
        return false;
      }
    }
    return true;
  }
  function a(e, t) {
    if (e.size !== t.size) {
      return false;
    }
    var n;
    var r = e.values();
    while (!(n = r.next()).done) {
      if (!t.has(n.value)) {
        return false;
      }
    }
    return true;
  }
  function o(e, t) {
    var n = e.byteLength;
    if (n !== t.byteLength) {
      return false;
    }
    while (n-- && e.getInt8(n) === t.getInt8(n));
    return n === -1;
  }
  function s(e, t) {
    var n = e.length;
    if (n !== t.length) {
      return false;
    }
    while (n-- && e[n] === t[n]);
    return n === -1;
  }
  var l = Object.prototype.hasOwnProperty;
  var u = Object.keys;
  function c(e, t, n) {
    var r;
    var i = 0;
    for (r in e) {
      if (l.call(e, r) && (i++, !l.call(t, r) || !n(e[r], t[r]))) {
        return false;
      }
    }
    return u(t).length === i;
  }
  var d = Object.prototype;
  var f = d.valueOf;
  var h = d.toString;
  function p(e, t) {
    if (e === t) {
      return true;
    }
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = e.constructor;
      return n === t.constructor && (n === Array ? r(e, t, p) : n === Date ? e.getTime() === t.getTime() : n === RegExp ? e.source === t.source && e.flags === t.flags : n === Map && e instanceof Map && t instanceof Map ? i(e, t, p) : n === Set && e instanceof Set && t instanceof Set ? a(e, t) : n === DataView ? o(e, t) : n === ArrayBuffer ? s(new Uint8Array(e), new Uint8Array(t)) : ArrayBuffer.isView(e) && ArrayBuffer.isView(t) ? s(e, t) : e.valueOf !== f ? e.valueOf() === t.valueOf() : e.toString !== h ? e.toString() === t.toString() : c(e, t, p));
    }
    return e != e && t != t;
  }
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let m = (e, t, n) => {
    let r = reactCoreLibraryReexport.useRef();
    if (r.current === undefined || !n(r.current, t)) {
      r.current = t;
    }
    return reactCoreLibraryReexport.useMemo(e, r.current);
  };
  function v(e, t) {
    return m(e, t, p);
  }
  require.d(exports, {
    useDeepMemo: function () {
      return v;
    }
  });
}