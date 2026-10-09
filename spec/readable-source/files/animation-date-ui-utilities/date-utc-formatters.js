// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(872797) to 'zero-pad-number-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 965377
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = undefined;
  var r = a(require("zero-pad-number-util") /*id: 872797*/);
  exports.default = {
    y: function (e, t) {
      var n = e.getUTCFullYear();
      var a = n > 0 ? n : 1 - n;
      return r.default(t === "yy" ? a % 100 : a, t.length);
    },
    M: function (e, t) {
      var n = e.getUTCMonth();
      if (t === "M") {
        return String(n + 1);
      } else {
        return r.default(n + 1, 2);
      }
    },
    d: function (e, t) {
      return r.default(e.getUTCDate(), t.length);
    },
    a: function (e, t) {
      var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        default:
          if (n === "am") {
            return "a.m.";
          } else {
            return "p.m.";
          }
      }
    },
    h: function (e, t) {
      return r.default(e.getUTCHours() % 12 || 12, t.length);
    },
    H: function (e, t) {
      return r.default(e.getUTCHours(), t.length);
    },
    m: function (e, t) {
      return r.default(e.getUTCMinutes(), t.length);
    },
    s: function (e, t) {
      return r.default(e.getUTCSeconds(), t.length);
    },
    S: function (e, t) {
      var n = t.length;
      var a = Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3));
      return r.default(a, t.length);
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}