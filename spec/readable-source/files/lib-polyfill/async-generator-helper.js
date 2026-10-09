// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'asyncWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 198527
         */
module.exports = function (module, exports, require) {
  function n(t, r, e, n, o, i, a) {
    try {
      var u = t[i](a);
      var c = u.value;
    } catch (t) {
      e(t);
      return;
    }
    if (u.done) {
      r(c);
    } else {
      Promise.resolve(c).then(n, o);
    }
  }
  function o(t) {
    return function () {
      var r = this;
      var e = arguments;
      return new Promise(function (o, i) {
        var a = t.apply(r, e);
        function u(t) {
          n(a, o, i, u, c, "next", t);
        }
        function c(t) {
          n(a, o, i, u, c, "throw", t);
        }
        u(undefined);
      });
    };
  }
  require.d(exports, {
    asyncWrapper: function () {
      return o;
    }
  });
}