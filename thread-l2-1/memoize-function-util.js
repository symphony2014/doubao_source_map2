// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 825529
         */
module.exports = function (module, exports, require) {
  var n = Number.isNaN || function (t) {
    return typeof t == "number" && t != t;
  };
  function o(t, e) {
    if (t.length !== e.length) {
      return false;
    }
    var r;
    var o;
    var a = 0;
    for (; a < t.length; a++) {
      if ((r = t[a]) !== (o = e[a]) && (!n(r) || !n(o))) {
        return false;
      }
    }
    return true;
  }
  function a(t, e = o) {
    var r = null;
    function n() {
      var n = [];
      var o = 0;
      for (; o < arguments.length; o++) {
        n[o] = arguments[o];
      }
      if (r && r.lastThis === this && e(n, r.lastArgs)) {
        return r.lastResult;
      }
      var a = t.apply(this, n);
      r = {
        lastResult: a,
        lastArgs: n,
        lastThis: this
      };
      return a;
    }
    n.clear = function () {
      r = null;
    };
    return n;
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return a;
    }
  });
}