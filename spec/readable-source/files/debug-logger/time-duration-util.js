// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 222924
         */
module.exports = function (module, exports, require) {
  function t(e, t, n, i) {
    return Math.round(e / n) + " " + i + (t >= n * 1.5 ? "s" : "");
  }
  module.exports = function (e, n) {
    n = n || {};
    var i;
    var r;
    var o;
    var s;
    var a = typeof e;
    if (a === "string" && e.length > 0) {
      return function (e) {
        if (!((e = String(e)).length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var n = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * 31557600000;
              case "weeks":
              case "week":
              case "w":
                return n * 604800000;
              case "days":
              case "day":
              case "d":
                return n * 86400000;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * 3600000;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * 60000;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * 1000;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;
              default:
                return;
            }
          }
        }
      }(e);
    }
    if (a === "number" && isFinite(e)) {
      if (n.long) {
        if ((r = Math.abs(i = e)) >= 86400000) {
          return t(i, r, 86400000, "day");
        } else if (r >= 3600000) {
          return t(i, r, 3600000, "hour");
        } else if (r >= 60000) {
          return t(i, r, 60000, "minute");
        } else if (r >= 1000) {
          return t(i, r, 1000, "second");
        } else {
          return i + " ms";
        }
      } else if ((s = Math.abs(o = e)) >= 86400000) {
        return Math.round(o / 86400000) + "d";
      } else if (s >= 3600000) {
        return Math.round(o / 3600000) + "h";
      } else if (s >= 60000) {
        return Math.round(o / 60000) + "m";
      } else if (s >= 1000) {
        return Math.round(o / 1000) + "s";
      } else {
        return o + "ms";
      }
    }
    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
}