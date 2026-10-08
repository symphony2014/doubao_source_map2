// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38149.8ce71c62.js
         * chunkId: 38149
         * moduleId: 994176
         */
module.exports = function (module, exports, require) {
  var t;
  t = function () {
    return function (e, t, n) {
      e = e || {};
      var r = t.prototype;
      var i = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function o(e, t, n, i) {
        return r.fromToBase(e, t, n, i);
      }
      n.en.relativeTime = i;
      r.fromToBase = function (t, r, o, a, s) {
        var l;
        var u;
        var c;
        var d = o.$locale().relativeTime || i;
        var f = e.thresholds || [{
          l: "s",
          r: 44,
          d: "second"
        }, {
          l: "m",
          r: 89
        }, {
          l: "mm",
          r: 44,
          d: "minute"
        }, {
          l: "h",
          r: 89
        }, {
          l: "hh",
          r: 21,
          d: "hour"
        }, {
          l: "d",
          r: 35
        }, {
          l: "dd",
          r: 25,
          d: "day"
        }, {
          l: "M",
          r: 45
        }, {
          l: "MM",
          r: 10,
          d: "month"
        }, {
          l: "y",
          r: 17
        }, {
          l: "yy",
          d: "year"
        }];
        var h = f.length;
        var p = 0;
        for (; p < h; p += 1) {
          var v = f[p];
          if (v.d) {
            l = a ? n(t).diff(o, v.d, true) : o.diff(t, v.d, true);
          }
          var m = (e.rounding || Math.round)(Math.abs(l));
          c = l > 0;
          if (m <= v.r || !v.r) {
            if (m <= 1 && p > 0) {
              v = f[p - 1];
            }
            var g = d[v.l];
            if (s) {
              m = s("" + m);
            }
            u = typeof g == "string" ? g.replace("%d", m) : g(m, r, v.l, c);
            break;
          }
        }
        if (r) {
          return u;
        }
        var b = c ? d.future : d.past;
        if (typeof b == "function") {
          return b(u);
        } else {
          return b.replace("%s", u);
        }
      };
      r.to = function (e, t) {
        return o(e, t, this, true);
      };
      r.from = function (e, t) {
        return o(e, t, this);
      };
      function a(e) {
        if (e.$u) {
          return n.utc();
        } else {
          return n();
        }
      }
      r.toNow = function (e) {
        return this.to(a(this), e);
      };
      r.fromNow = function (e) {
        return this.from(a(this), e);
      };
    };
  };
  module.exports = t();
}