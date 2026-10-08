// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'scheduleDelayed'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 967206
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return +setTimeout(e, 16);
  }
  function o(e) {
    return clearTimeout(e);
  }
  if (typeof window != "undefined" && "requestAnimationFrame" in window) {
    r = function (e) {
      return window.requestAnimationFrame(e);
    };
    o = function (e) {
      return window.cancelAnimationFrame(e);
    };
  }
  var i = 0;
  var u = new Map();
  function a(e, t = 1) {
    var n = i += 1;
    (function t(o) {
      if (o === 0) {
        u.delete(n);
        e();
      } else {
        var i = r(function () {
          t(o - 1);
        });
        u.set(n, i);
      }
    })(t);
    return n;
  }
  a.cancel = function (e) {
    var t = u.get(e);
    u.delete(t);
    return o(t);
  };
  require.d(exports, {
    scheduleDelayed: function () {
      return a;
    }
  });
}