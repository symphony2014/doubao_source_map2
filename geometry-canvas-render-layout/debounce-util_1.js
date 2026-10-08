// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P2' to 'debounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 562079
         */
module.exports = function (module, exports, require) {
  function i(t, e) {
    return function (t, e, n, i) {
      var r;
      var o = false;
      var a = 0;
      function s() {
        if (r) {
          clearTimeout(r);
        }
      }
      function h() {
        var h = arguments.length;
        var l = Array(h);
        var u = 0;
        for (; u < h; u++) {
          l[u] = arguments[u];
        }
        var c = this;
        var p = Date.now() - a;
        function d() {
          a = Date.now();
          n.apply(c, l);
        }
        if (!o) {
          if (i && !r) {
            d();
          }
          s();
          if (i === undefined && p > t) {
            d();
          } else if (e !== true) {
            r = setTimeout(i ? function () {
              r = undefined;
            } : d, i === undefined ? t - p : t);
          }
        }
      }
      if (typeof e != "boolean") {
        i = n;
        n = e;
        e = undefined;
      }
      h.cancel = function () {
        s();
        o = true;
      };
      return h;
    }(e, false, t);
  }
  require.d(exports, {
    debounce: function () {
      return i;
    }
  });
}