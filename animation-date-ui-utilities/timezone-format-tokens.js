// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(101131) to 'format-timezone-name'
// - Resolved require(877320) to 'timezone-offset-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 96732
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  var a = i(require("format-timezone-name") /*id: 101131*/);
  var r = i(require("timezone-offset-util") /*id: 877320*/);
  function i(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  function o(e, t) {
    var n = e ? r.default(e, t, true) / 60000 : t.getTimezoneOffset();
    if (Number.isNaN(n)) {
      throw RangeError("Invalid time zone specified: " + e);
    }
    return n;
  }
  function s(e, t) {
    for (var n = Math.abs(e).toString(); n.length < t;) {
      n = "0" + n;
    }
    return (e < 0 ? "-" : "") + n;
  }
  function l(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + s(Math.floor(n / 60), 2) + (t || "") + s(Math.floor(n % 60), 2);
  }
  function u(e, t) {
    if (e % 60 == 0) {
      return (e > 0 ? "-" : "+") + s(Math.abs(e) / 60, 2);
    } else {
      return l(e, t);
    }
  }
  exports.default = {
    X: function (e, t, n, a) {
      var r = o(a.timeZone, a._originalDate || e);
      if (r === 0) {
        return "Z";
      }
      switch (t) {
        case "X":
          return u(r);
        case "XXXX":
        case "XX":
          return l(r);
        default:
          return l(r, ":");
      }
    },
    x: function (e, t, n, a) {
      var r = o(a.timeZone, a._originalDate || e);
      switch (t) {
        case "x":
          return u(r);
        case "xxxx":
        case "xx":
          return l(r);
        default:
          return l(r, ":");
      }
    },
    O: function (e, t, n, a) {
      var r;
      var i;
      var u;
      var d;
      var c;
      var h = o(a.timeZone, a._originalDate || e);
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + (i = (r = h) > 0 ? "-" : "+", d = Math.floor((u = Math.abs(r)) / 60), (c = u % 60) == 0 ? i + String(d) : i + String(d) + ":" + s(c, 2));
        default:
          return "GMT" + l(h, ":");
      }
    },
    z: function (e, t, n, r) {
      var i = r._originalDate || e;
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return a.default("short", i, r);
        default:
          return a.default("long", i, r);
      }
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}