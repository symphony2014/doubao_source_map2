// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$J' to 'createEnabledLogger'
// - Renamed export 'MY' to 'createDebugLogger'
// - Renamed export 'jl' to 'createLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 102743
         */
module.exports = function (module, exports, require) {
  let o;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  function c() {
    let e = Date.now();
    o = o || e;
    return `${e - o}`.padStart(5, "0");
  }
  function u(e) {
    var n = arguments.length;
    var r = Array(n > 1 ? n - 1 : 0);
    var o = 1;
    for (; o < n; o++) {
      r[o - 1] = arguments[o];
    }
    if (typeof e == "string") {
      l.log(`%c%s%c ${e}`, "color:green", c(), "color:unset", ...r);
    } else {
      l.log("%c%s%c", "color:green", c(), "color:unset", e, ...r);
    }
  }
  function a(e) {
    let n = l(e);
    n.log = u;
    let r = function (e, r) {
      var o = arguments.length;
      var i = Array(o > 2 ? o - 2 : 0);
      var l = 2;
      for (; l < o; l++) {
        i[l - 2] = arguments[l];
      }
      if (n.enabled) {
        n(`%s ${r}`, e, ...i);
      }
    };
    Object.defineProperty(r, "enabled", {
      get: () => n.enabled
    });
    return r;
  }
  function s(e) {
    let n = l(e);
    n.log = u;
    return n;
  }
  function d(e) {
    var n = arguments.length;
    var r = Array(n > 1 ? n - 1 : 0);
    var o = 1;
    for (; o < n; o++) {
      r[o - 1] = arguments[o];
    }
    if (typeof e == "string") {
      l.log(`%c%s%c ${e}`, "color:green", c(), "color:unset", ...r);
    } else {
      l.log("%c%s%c", "color:green", c(), "color:unset", e, ...r);
    }
  }
  function f(e) {
    let n = l(e);
    n.log = d;
    return n;
  }
  require.d(exports, {
    createEnabledLogger: function () {
      return a;
    },
    createDebugLogger: function () {
      return f;
    },
    createLogger: function () {
      return s;
    }
  });
}