// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 180899
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    "use strict";

    var t;
    var e;
    var i = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    var r = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    var a = {
      years: 31536000000,
      months: 2628000000,
      days: 86400000,
      hours: 3600000,
      minutes: 60000,
      seconds: 1000,
      milliseconds: 1,
      weeks: 604800000
    };
    function n(t) {
      return t instanceof c;
    }
    function s(t, e, i) {
      return new c(t, i, e.$l);
    }
    function o(t) {
      return e.p(t) + "s";
    }
    function h(t) {
      return t < 0;
    }
    function l(t) {
      if (h(t)) {
        return Math.ceil(t);
      } else {
        return Math.floor(t);
      }
    }
    function d(t, e) {
      if (t) {
        if (h(t)) {
          return {
            negative: true,
            format: "" + Math.abs(t) + e
          };
        } else {
          return {
            negative: false,
            format: "" + t + e
          };
        }
      } else {
        return {
          negative: false,
          format: ""
        };
      }
    }
    var c = function () {
      function h(t, e, i) {
        var n = this;
        this.$d = {};
        this.$l = i;
        if (t === undefined) {
          this.$ms = 0;
          this.parseFromMilliseconds();
        }
        if (e) {
          return s(t * a[o(e)], this);
        }
        if (typeof t == "number") {
          this.$ms = t;
          this.parseFromMilliseconds();
          return this;
        }
        if (typeof t == "object") {
          Object.keys(t).forEach(function (e) {
            n.$d[o(e)] = t[e];
          });
          this.calMilliseconds();
          return this;
        }
        if (typeof t == "string") {
          var h = t.match(r);
          if (h) {
            var l = h.slice(2).map(function (t) {
              if (t != null) {
                return Number(t);
              } else {
                return 0;
              }
            });
            this.$d.years = l[0];
            this.$d.months = l[1];
            this.$d.weeks = l[2];
            this.$d.days = l[3];
            this.$d.hours = l[4];
            this.$d.minutes = l[5];
            this.$d.seconds = l[6];
            this.calMilliseconds();
            return this;
          }
        }
        return this;
      }
      var c = h.prototype;
      c.calMilliseconds = function () {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function (e, i) {
          return e + (t.$d[i] || 0) * a[i];
        }, 0);
      };
      c.parseFromMilliseconds = function () {
        var t = this.$ms;
        this.$d.years = l(t / 31536000000);
        t %= 31536000000;
        this.$d.months = l(t / 2628000000);
        t %= 2628000000;
        this.$d.days = l(t / 86400000);
        t %= 86400000;
        this.$d.hours = l(t / 3600000);
        t %= 3600000;
        this.$d.minutes = l(t / 60000);
        t %= 60000;
        this.$d.seconds = l(t / 1000);
        t %= 1000;
        this.$d.milliseconds = t;
      };
      c.toISOString = function () {
        var t = d(this.$d.years, "Y");
        var e = d(this.$d.months, "M");
        var i = +this.$d.days || 0;
        if (this.$d.weeks) {
          i += this.$d.weeks * 7;
        }
        var r = d(i, "D");
        var a = d(this.$d.hours, "H");
        var n = d(this.$d.minutes, "M");
        var s = this.$d.seconds || 0;
        if (this.$d.milliseconds) {
          s += this.$d.milliseconds / 1000;
          s = Math.round(s * 1000) / 1000;
        }
        var o = d(s, "S");
        var h = t.negative || e.negative || r.negative || a.negative || n.negative || o.negative;
        var l = a.format || n.format || o.format ? "T" : "";
        var c = (h ? "-" : "") + "P" + t.format + e.format + r.format + l + a.format + n.format + o.format;
        if (c === "P" || c === "-P") {
          return "P0D";
        } else {
          return c;
        }
      };
      c.toJSON = function () {
        return this.toISOString();
      };
      c.format = function (t) {
        var r = {
          Y: this.$d.years,
          YY: e.s(this.$d.years, 2, "0"),
          YYYY: e.s(this.$d.years, 4, "0"),
          M: this.$d.months,
          MM: e.s(this.$d.months, 2, "0"),
          D: this.$d.days,
          DD: e.s(this.$d.days, 2, "0"),
          H: this.$d.hours,
          HH: e.s(this.$d.hours, 2, "0"),
          m: this.$d.minutes,
          mm: e.s(this.$d.minutes, 2, "0"),
          s: this.$d.seconds,
          ss: e.s(this.$d.seconds, 2, "0"),
          SSS: e.s(this.$d.milliseconds, 3, "0")
        };
        return (t || "YYYY-MM-DDTHH:mm:ss").replace(i, function (t, e) {
          return e || String(r[t]);
        });
      };
      c.as = function (t) {
        return this.$ms / a[o(t)];
      };
      c.get = function (t) {
        var e = this.$ms;
        var i = o(t);
        if (i === "milliseconds") {
          e %= 1000;
        } else {
          e = i === "weeks" ? l(e / a[i]) : this.$d[i];
        }
        return e || 0;
      };
      c.add = function (t, e, i) {
        var r;
        r = e ? t * a[o(e)] : n(t) ? t.$ms : s(t, this).$ms;
        return s(this.$ms + r * (i ? -1 : 1), this);
      };
      c.subtract = function (t, e) {
        return this.add(t, e, true);
      };
      c.locale = function (t) {
        var e = this.clone();
        e.$l = t;
        return e;
      };
      c.clone = function () {
        return s(this.$ms, this);
      };
      c.humanize = function (e) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
      };
      c.valueOf = function () {
        return this.asMilliseconds();
      };
      c.milliseconds = function () {
        return this.get("milliseconds");
      };
      c.asMilliseconds = function () {
        return this.as("milliseconds");
      };
      c.seconds = function () {
        return this.get("seconds");
      };
      c.asSeconds = function () {
        return this.as("seconds");
      };
      c.minutes = function () {
        return this.get("minutes");
      };
      c.asMinutes = function () {
        return this.as("minutes");
      };
      c.hours = function () {
        return this.get("hours");
      };
      c.asHours = function () {
        return this.as("hours");
      };
      c.days = function () {
        return this.get("days");
      };
      c.asDays = function () {
        return this.as("days");
      };
      c.weeks = function () {
        return this.get("weeks");
      };
      c.asWeeks = function () {
        return this.as("weeks");
      };
      c.months = function () {
        return this.get("months");
      };
      c.asMonths = function () {
        return this.as("months");
      };
      c.years = function () {
        return this.get("years");
      };
      c.asYears = function () {
        return this.as("years");
      };
      return h;
    }();
    function u(t, e, i) {
      return t.add(e.years() * i, "y").add(e.months() * i, "M").add(e.days() * i, "d").add(e.hours() * i, "h").add(e.minutes() * i, "m").add(e.seconds() * i, "s").add(e.milliseconds() * i, "ms");
    }
    return function (i, r, a) {
      t = a;
      e = a().$utils();
      a.duration = function (t, e) {
        return s(t, {
          $l: a.locale()
        }, e);
      };
      a.isDuration = n;
      var o = r.prototype.add;
      var h = r.prototype.subtract;
      r.prototype.add = function (t, e) {
        if (n(t)) {
          return u(this, t, 1);
        } else {
          return o.bind(this)(t, e);
        }
      };
      r.prototype.subtract = function (t, e) {
        if (n(t)) {
          return u(this, t, -1);
        } else {
          return h.bind(this)(t, e);
        }
      };
    };
  };
  module.exports = e();
}