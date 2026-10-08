// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'frameDelay'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 28337
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return +setTimeout(e, 16);
  }
  function i(e) {
    return clearTimeout(e);
  }
  if (typeof window != "undefined" && "requestAnimationFrame" in window) {
    n = function (e) {
      return window.requestAnimationFrame(e);
    };
    i = function (e) {
      return window.cancelAnimationFrame(e);
    };
  }
  var r = 0;
  var o = new Map();
  function s(e, t = 1) {
    var i = r += 1;
    (function t(r) {
      if (r === 0) {
        o.delete(i);
        e();
      } else {
        var s = n(function () {
          t(r - 1);
        });
        o.set(i, s);
      }
    })(t);
    return i;
  }
  s.cancel = function (e) {
    var t = o.get(e);
    o.delete(e);
    return i(t);
  };
  exports.frameDelay = s;
}