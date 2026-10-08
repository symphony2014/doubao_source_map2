// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'asyncToGenerator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 409129
         */
module.exports = function (module, exports, require) {
  function r(e, t, n, r, o, i, u) {
    try {
      var a = e[i](u);
      var c = a.value;
    } catch (e) {
      n(e);
      return;
    }
    if (a.done) {
      t(c);
    } else {
      Promise.resolve(c).then(r, o);
    }
  }
  function o(e) {
    return function () {
      var t = this;
      var n = arguments;
      return new Promise(function (o, i) {
        var u = e.apply(t, n);
        function a(e) {
          r(u, o, i, a, c, "next", e);
        }
        function c(e) {
          r(u, o, i, a, c, "throw", e);
        }
        a(undefined);
      });
    };
  }
  require.d(exports, {
    asyncToGenerator: function () {
      return o;
    }
  });
}