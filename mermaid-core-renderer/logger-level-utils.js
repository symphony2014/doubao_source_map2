// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ub' to 'setLogLevel'
// - Renamed export 'cM' to 'logger'
// - Renamed export 'eW' to 'setFunctionName'
// - Renamed export 'r2' to 'defineProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 696754
         */
module.exports = function (module, exports, require) {
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var a = dayjsDateLibrary;
  var o = Object.defineProperty;
  var l = (t, e) => o(t, "name", {
    value: e,
    configurable: true
  });
  var n = (t, e) => {
    for (var r in e) {
      o(t, r, {
        get: e[r],
        enumerable: true
      });
    }
  };
  var s = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
  };
  var h = {
    trace: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "trace"),
    debug: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "debug"),
    info: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "info"),
    warn: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "warn"),
    error: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "error"),
    fatal: l(function () {
      var t = arguments.length;
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = arguments[r];
      }
    }, "fatal")
  };
  var c = l(function (t = "fatal") {
    let e = s.fatal;
    if (typeof t == "string") {
      if (t.toLowerCase() in s) {
        e = s[t];
      }
    } else if (typeof t == "number") {
      e = t;
    }
    h.trace = () => {};
    h.debug = () => {};
    h.info = () => {};
    h.warn = () => {};
    h.error = () => {};
    h.fatal = () => {};
    if (e <= s.fatal) {
      h.fatal = undefined;
    }
    if (e <= s.error) {
      h.error = undefined;
    }
    if (e <= s.warn) {
      h.warn = undefined;
    }
    if (e <= s.info) {
      h.info = undefined;
    }
    if (e <= s.debug) {
      h.debug = undefined;
    }
    if (e <= s.trace) {
      h.trace = undefined;
    }
  }, "setLogLevel");
  require.d(exports, {
    setLogLevel: function () {
      return c;
    },
    logger: function () {
      return h;
    },
    setFunctionName: function () {
      return l;
    },
    defineProperties: function () {
      return n;
    }
  });
}