// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'performanceNowPolyfill'
// - Resolved require(824816) to 'performance-now-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 580334
         */
module.exports = function (module, exports, require) {
  var performanceNowPolyfill = require("performance-now-polyfill") /*id: 824816*/;
  var o = typeof window == "undefined" ? require.g : window;
  var r = ["moz", "webkit"];
  var a = "AnimationFrame";
  var l = o["request" + a];
  var s = o["cancel" + a] || o["cancelRequest" + a];
  var u = 0;
  for (; !l && u < r.length; u++) {
    l = o[r[u] + "Request" + a];
    s = o[r[u] + "Cancel" + a] || o[r[u] + "CancelRequest" + a];
  }
  if (!l || !s) {
    var d = 0;
    var c = 0;
    var h = [];
    var f = 1000 / 60;
    l = function (e) {
      if (h.length === 0) {
        var t = performanceNowPolyfill();
        var n = Math.max(0, f - (t - d));
        d = n + t;
        setTimeout(function () {
          var e = h.slice(0);
          h.length = 0;
          for (var t = 0; t < e.length; t++) {
            if (!e[t].cancelled) {
              try {
                e[t].callback(d);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 0);
              }
            }
          }
        }, Math.round(n));
      }
      h.push({
        handle: ++c,
        callback: e,
        cancelled: false
      });
      return c;
    };
    s = function (e) {
      for (var t = 0; t < h.length; t++) {
        if (h[t].handle === e) {
          h[t].cancelled = true;
        }
      }
    };
  }
  module.exports = function (e) {
    return l.call(o, e);
  };
  module.exports.cancel = function () {
    s.apply(o, arguments);
  };
  module.exports.polyfill = function (e) {
    e ||= o;
    e.requestAnimationFrame = l;
    e.cancelAnimationFrame = s;
  };
}