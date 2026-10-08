// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'numberFormatter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 97822
         */
module.exports = function (module, exports, require) {
  var i;
  var numberExponentExtractor = require("number-exponent-extractor") /*id: 597434*/;
  var formatSpecifier = require("format-specifier") /*id: 227229*/;
  var numberFormatUtils_1 = require("number-format-utils_1") /*id: 167595*/;
  function a(t, n) {
    var e = numberFormatUtils_1.parseExponential(t, n);
    if (!e) {
      return t + "";
    }
    var i = e[0];
    var r = e[1];
    if (r < 0) {
      return "0." + Array(-r).join("0") + i;
    } else if (i.length > r + 1) {
      return i.slice(0, r + 1) + "." + i.slice(r + 1);
    } else {
      return i + Array(r - i.length + 2).join("0");
    }
  }
  var s = {
    "%": (t, n) => (t * 100).toFixed(n),
    b: t => Math.round(t).toString(2),
    c: t => t + "",
    d: numberFormatUtils_1.formatNumber,
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: t => Math.round(t).toString(8),
    p: (t, n) => a(t * 100, n),
    r: a,
    s: function (t, n) {
      var e = numberFormatUtils_1.parseExponential(t, n);
      if (!e) {
        return t + "";
      }
      var r = e[0];
      var o = e[1];
      var a = o - (i = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1;
      var s = r.length;
      if (a === s) {
        return r;
      } else if (a > s) {
        return r + Array(a - s + 1).join("0");
      } else if (a > 0) {
        return r.slice(0, a) + "." + r.slice(a);
      } else {
        return "0." + Array(1 - a).join("0") + numberFormatUtils_1.parseExponential(t, Math.max(0, n + a - 1))[0];
      }
    },
    X: t => Math.round(t).toString(16).toUpperCase(),
    x: t => Math.round(t).toString(16)
  };
  function c(t) {
    return t;
  }
  var h = Array.prototype.map;
  var f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function l(t) {
    var n;
    var e;
    var u;
    var a = t.grouping === undefined || t.thousands === undefined ? c : (n = h.call(t.grouping, Number), e = t.thousands + "", function (t, i) {
      var r = t.length;
      var o = [];
      var u = 0;
      var a = n[0];
      var s = 0;
      while (r > 0 && a > 0 && (s + a + 1 > i && (a = Math.max(1, i - s)), o.push(t.substring(r -= a, r + a)), !((s += a + 1) > i))) {
        a = n[u = (u + 1) % n.length];
      }
      return o.reverse().join(e);
    });
    var l = t.currency === undefined ? "" : t.currency[0] + "";
    var _ = t.currency === undefined ? "" : t.currency[1] + "";
    var p = t.decimal === undefined ? "." : t.decimal + "";
    var y = t.numerals === undefined ? c : (u = h.call(t.numerals, String), function (t) {
      return t.replace(/[0-9]/g, function (t) {
        return u[+t];
      });
    });
    var d = t.percent === undefined ? "%" : t.percent + "";
    var x = t.minus === undefined ? "−" : t.minus + "";
    var g = t.nan === undefined ? "NaN" : t.nan + "";
    function v(t) {
      var n = (t = formatSpecifier.FormatSpecifier(t)).fill;
      var e = t.align;
      var r = t.sign;
      var u = t.symbol;
      var c = t.zero;
      var h = t.width;
      var v = t.comma;
      var m = t.precision;
      var b = t.trim;
      var M = t.type;
      if (M === "n") {
        v = true;
        M = "g";
      } else if (!s[M]) {
        if (m === undefined) {
          m = 12;
        }
        b = true;
        M = "g";
      }
      if (c || n === "0" && e === "=") {
        c = true;
        n = "0";
        e = "=";
      }
      var w = u === "$" ? l : u === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "";
      var Z = u === "$" ? _ : /[%p]/.test(M) ? d : "";
      var T = s[M];
      var N = /[defgprs%]/.test(M);
      function k(t) {
        var o;
        var u;
        var s;
        var l = w;
        var _ = Z;
        if (M === "c") {
          _ = T(t) + _;
          t = "";
        } else {
          var d = (t *= 1) < 0 || 1 / t < 0;
          t = isNaN(t) ? g : T(Math.abs(t), m);
          if (b) {
            t = function (t) {
              var n;
              var e = t.length;
              var i = 1;
              var r = -1;
              t: for (; i < e; ++i) {
                switch (t[i]) {
                  case ".":
                    r = n = i;
                    break;
                  case "0":
                    if (r === 0) {
                      r = i;
                    }
                    n = i;
                    break;
                  default:
                    if (!+t[i]) {
                      break t;
                    }
                    if (r > 0) {
                      r = 0;
                    }
                }
              }
              if (r > 0) {
                return t.slice(0, r) + t.slice(n + 1);
              } else {
                return t;
              }
            }(t);
          }
          if (d && +t == 0 && r !== "+") {
            d = false;
          }
          l = (d ? r === "(" ? r : x : r === "-" || r === "(" ? "" : r) + l;
          _ = (M === "s" ? f[8 + i / 3] : "") + _ + (d && r === "(" ? ")" : "");
          if (N) {
            o = -1;
            u = t.length;
            while (++o < u) {
              if ((s = t.charCodeAt(o)) < 48 || s > 57) {
                _ = (s === 46 ? p + t.slice(o + 1) : t.slice(o)) + _;
                t = t.slice(0, o);
                break;
              }
            }
          }
        }
        if (v && !c) {
          t = a(t, Infinity);
        }
        var k = l.length + t.length + _.length;
        var $ = k < h ? Array(h - k + 1).join(n) : "";
        if (v && c) {
          t = a($ + t, $.length ? h - _.length : Infinity);
          $ = "";
        }
        switch (e) {
          case "<":
            t = l + t + _ + $;
            break;
          case "=":
            t = l + $ + t + _;
            break;
          case "^":
            t = $.slice(0, k = $.length >> 1) + l + t + _ + $.slice(k);
            break;
          default:
            t = $ + l + t + _;
        }
        return y(t);
      }
      m = m === undefined ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m));
      k.toString = function () {
        return t + "";
      };
      return k;
    }
    return {
      format: v,
      formatPrefix: function (t, n) {
        var e = v(((t = formatSpecifier.FormatSpecifier(t)).type = "f", t));
        var i = Math.max(-8, Math.min(8, Math.floor(numberExponentExtractor.getNumberExponent(n) / 3))) * 3;
        var u = Math.pow(10, -i);
        var a = f[8 + i / 3];
        return function (t) {
          return e(u * t) + a;
        };
      }
    };
  }
  require.d(exports, {
    numberFormatter: function () {
      return l;
    }
  });
}