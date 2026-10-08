// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 804609
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t) {
    var r;
    var i;
    var o;
    var s;
    var l = function (e) {
      if (!a[e]) {
        var t = new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: "America/New_York",
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z"));
        a[e] = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00" ? new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      }
      return a[e];
    }(t);
    if (l.formatToParts) {
      return function (e, t) {
        try {
          var a = e.formatToParts(t);
          var r = [];
          var i = 0;
          for (; i < a.length; i++) {
            var o = n[a[i].type];
            if (o >= 0) {
              r[o] = parseInt(a[i].value, 10);
            }
          }
          return r;
        } catch (e) {
          if (e instanceof RangeError) {
            return [NaN];
          }
          throw e;
        }
      }(l, e);
    } else {
      r = l;
      i = e;
      o = r.format(i).replace(/\u200E/g, "");
      return [(s = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(o))[3], s[1], s[2], s[4], s[5], s[6]];
    }
  };
  var n = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  var a = {};
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}