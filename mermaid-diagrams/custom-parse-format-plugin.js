// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20443.e36932c3.js
         * chunkId: 20443
         * moduleId: 825043
         */
module.exports = function (module, exports, require) {
  var e;
  e = function () {
    "use strict";

    var t = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    var e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
    var i = /\d\d/;
    var r = /\d\d?/;
    var n = /\d*[^-_:/,()\s\d]+/;
    var s = {};
    function a(t) {
      return (t *= 1) + (t > 68 ? 1900 : 2000);
    }
    function o(t) {
      return function (e) {
        this[t] = +e;
      };
    }
    var l = [/[+-]\d\d:?(\d\d)?|Z/, function (t) {
      (this.zone ||= {}).offset = function (t) {
        if (!t || t === "Z") {
          return 0;
        }
        var e = t.match(/([+-]|\d\d)/g);
        var i = e[1] * 60 + (+e[2] || 0);
        if (i === 0) {
          return 0;
        } else if (e[0] === "+") {
          return -i;
        } else {
          return i;
        }
      }(t);
    }];
    function c(t) {
      var e = s[t];
      return e && (e.indexOf ? e : e.s.concat(e.f));
    }
    function d(t, e) {
      var i;
      var r = s.meridiem;
      if (r) {
        for (var n = 1; n <= 24; n += 1) {
          if (t.indexOf(r(n, 0, e)) > -1) {
            i = n > 12;
            break;
          }
        }
      } else {
        i = t === (e ? "pm" : "PM");
      }
      return i;
    }
    var u = {
      A: [n, function (t) {
        this.afternoon = d(t, false);
      }],
      a: [n, function (t) {
        this.afternoon = d(t, true);
      }],
      S: [/\d/, function (t) {
        this.milliseconds = +t * 100;
      }],
      SS: [i, function (t) {
        this.milliseconds = +t * 10;
      }],
      SSS: [/\d{3}/, function (t) {
        this.milliseconds = +t;
      }],
      s: [r, o("seconds")],
      ss: [r, o("seconds")],
      m: [r, o("minutes")],
      mm: [r, o("minutes")],
      H: [r, o("hours")],
      h: [r, o("hours")],
      HH: [r, o("hours")],
      hh: [r, o("hours")],
      D: [r, o("day")],
      DD: [i, o("day")],
      Do: [n, function (t) {
        var e = s.ordinal;
        var i = t.match(/\d+/);
        this.day = i[0];
        if (e) {
          for (var r = 1; r <= 31; r += 1) {
            if (e(r).replace(/\[|\]/g, "") === t) {
              this.day = r;
            }
          }
        }
      }],
      M: [r, o("month")],
      MM: [i, o("month")],
      MMM: [n, function (t) {
        var e = c("months");
        var i = (c("monthsShort") || e.map(function (t) {
          return t.slice(0, 3);
        })).indexOf(t) + 1;
        if (i < 1) {
          throw Error();
        }
        this.month = i % 12 || i;
      }],
      MMMM: [n, function (t) {
        var e = c("months").indexOf(t) + 1;
        if (e < 1) {
          throw Error();
        }
        this.month = e % 12 || e;
      }],
      Y: [/[+-]?\d+/, o("year")],
      YY: [i, function (t) {
        this.year = a(t);
      }],
      YYYY: [/\d{4}/, o("year")],
      Z: l,
      ZZ: l
    };
    return function (i, r, n) {
      n.p.customParseFormat = true;
      if (i && i.parseTwoDigitYear) {
        a = i.parseTwoDigitYear;
      }
      var o = r.prototype;
      var l = o.parse;
      o.parse = function (i) {
        var r = i.date;
        var a = i.utc;
        var o = i.args;
        this.$u = a;
        var c = o[1];
        if (typeof c == "string") {
          var d = o[2] === true;
          var h = o[3] === true;
          var f = o[2];
          if (h) {
            f = o[2];
          }
          s = this.$locale();
          if (!d && f) {
            s = n.Ls[f];
          }
          this.$d = function (i, r, n) {
            try {
              if (["x", "X"].indexOf(r) > -1) {
                return new Date((r === "X" ? 1000 : 1) * i);
              }
              var a = function (i) {
                var r;
                var n;
                r = i;
                n = s && s.formats;
                var a = (i = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, i, r) {
                  var s = r && r.toUpperCase();
                  return i || n[r] || t[r] || n[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, i) {
                    return e || i.slice(1);
                  });
                })).match(e);
                var o = a.length;
                var l = 0;
                for (; l < o; l += 1) {
                  var c = a[l];
                  var d = u[c];
                  var h = d && d[0];
                  var f = d && d[1];
                  a[l] = f ? {
                    regex: h,
                    parser: f
                  } : c.replace(/^\[|\]$/g, "");
                }
                return function (t) {
                  var e = {};
                  var i = 0;
                  var r = 0;
                  for (; i < o; i += 1) {
                    var n = a[i];
                    if (typeof n == "string") {
                      r += n.length;
                    } else {
                      var s = n.regex;
                      var l = n.parser;
                      var c = t.slice(r);
                      var d = s.exec(c)[0];
                      l.call(e, d);
                      t = t.replace(d, "");
                    }
                  }
                  (function (t) {
                    var e = t.afternoon;
                    if (e !== undefined) {
                      var i = t.hours;
                      if (e) {
                        if (i < 12) {
                          t.hours += 12;
                        }
                      } else if (i === 12) {
                        t.hours = 0;
                      }
                      delete t.afternoon;
                    }
                  })(e);
                  return e;
                };
              }(r)(i);
              var o = a.year;
              var l = a.month;
              var c = a.day;
              var d = a.hours;
              var h = a.minutes;
              var f = a.seconds;
              var m = a.milliseconds;
              var k = a.zone;
              var y = new Date();
              var p = c || (o || l ? 1 : y.getDate());
              var g = o || y.getFullYear();
              var b = 0;
              if (!o || !!l) {
                b = l > 0 ? l - 1 : y.getMonth();
              }
              var T = d || 0;
              var $ = h || 0;
              var x = f || 0;
              var v = m || 0;
              if (k) {
                return new Date(Date.UTC(g, b, p, T, $, x, v + k.offset * 60 * 1000));
              } else if (n) {
                return new Date(Date.UTC(g, b, p, T, $, x, v));
              } else {
                return new Date(g, b, p, T, $, x, v);
              }
            } catch (t) {
              return new Date("");
            }
          }(r, c, a);
          this.init();
          if (f && f !== true) {
            this.$L = this.locale(f).$L;
          }
          if ((d || h) && r != this.format(c)) {
            this.$d = new Date("");
          }
          s = {};
        } else if (c instanceof Array) {
          var m = c.length;
          var k = 1;
          for (; k <= m; k += 1) {
            o[1] = c[k - 1];
            var y = n.apply(this, o);
            if (y.isValid()) {
              this.$d = y.$d;
              this.$L = y.$L;
              this.init();
              break;
            }
            if (k === m) {
              this.$d = new Date("");
            }
          }
        } else {
          l.call(this, i);
        }
      };
    };
  };
  module.exports = e();
}