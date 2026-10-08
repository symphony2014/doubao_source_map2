// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'R' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 'tB' to 'zlibCompressionUtils'
// - Resolved require(393206) to 'zlib-compression-utils'
// - Updated imported property 'ZT' to 'classExtends' (module 4100)
// - Updated imported property 'pr' to 'concatArrays' (module 4100)
// - Updated imported property 'pi' to 'objectAssign' (module 4100)
// - Updated imported property 'mG' to 'awaiter' (module 4100)
// - Updated imported property 'Jh' to 'generator' (module 4100)
// - Updated imported property '_T' to 'objectRest' (module 4100)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 973937
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var o;
  var s;
  var a;
  var l;
  var h;
  var c;
  var u;
  var d;
  var f;
  var p;
  var g;
  var m;
  var v;
  var y;
  var b;
  var A;
  var S;
  var x;
  var w;
  var C;
  var T;
  var E;
  var F;
  var k;
  var P;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var O = new Uint8Array(256);
  var D = 0;
  for (; D < M.length; D++) {
    O[M.charCodeAt(D)] = D;
  }
  function I(t) {
    var e = "";
    var r = t.length;
    var i = 0;
    for (; i < r; i += 3) {
      e += M[t[i] >> 2];
      e += M[(t[i] & 3) << 4 | t[i + 1] >> 4];
      e += M[(t[i + 1] & 15) << 2 | t[i + 2] >> 6];
      e += M[t[i + 2] & 63];
    }
    if (r % 3 == 2) {
      e = e.substring(0, e.length - 1) + "=";
    } else if (r % 3 == 1) {
      e = e.substring(0, e.length - 2) + "==";
    }
    return e;
  }
  function L(t) {
    var e;
    var r;
    var i;
    var n;
    var o;
    var s = t.length * 0.75;
    var a = t.length;
    var l = 0;
    if (t[t.length - 1] === "=") {
      s--;
      if (t[t.length - 2] === "=") {
        s--;
      }
    }
    var h = new Uint8Array(s);
    for (e = 0; e < a; e += 4) {
      r = O[t.charCodeAt(e)];
      i = O[t.charCodeAt(e + 1)];
      n = O[t.charCodeAt(e + 2)];
      o = O[t.charCodeAt(e + 3)];
      h[l++] = r << 2 | i >> 4;
      h[l++] = (i & 15) << 4 | n >> 2;
      h[l++] = (n & 3) << 6 | o & 63;
    }
    return h;
  }
  var N = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i;
  function B(t) {
    var e = t.trim();
    var r = e.substring(0, 100).match(N);
    if (!r) {
      return L(e);
    }
    var i = r[0];
    return L(e.substring(i.length));
  }
  function j(t) {
    return t.charCodeAt(0);
  }
  function _(t) {
    return t.codePointAt(0);
  }
  function U(t, e) {
    return G(t.toString(16), e, "0").toUpperCase();
  }
  function z(t) {
    return U(t, 2);
  }
  function V(t) {
    return String.fromCharCode(t);
  }
  function W(t) {
    return V(parseInt(t, 16));
  }
  function G(t, e, r) {
    var i = "";
    var n = 0;
    var o = e - t.length;
    for (; n < o; n++) {
      i += r;
    }
    return i + t;
  }
  function q(t, e, r) {
    var i = t.length;
    var n = 0;
    for (; n < i; n++) {
      e[r++] = t.charCodeAt(n);
    }
    return i;
  }
  function H(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function K(t) {
    return t.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
  }
  var X = ["\\n", "\\f", "\\r", "\\u000B"];
  function Z(t) {
    return /^[\n\f\r\u000B]$/.test(t);
  }
  function Y(t) {
    return t.split(/[\n\f\r\u000B]/);
  }
  function J(t) {
    return t.replace(/[\n\f\r\u000B]/g, " ");
  }
  function Q(t, e) {
    var r;
    var i = t.charCodeAt(e);
    var n = e + 1;
    var o = 1;
    if (i >= 55296 && i <= 56319 && t.length > n && (r = t.charCodeAt(n)) >= 56320 && r <= 57343) {
      o = 2;
    }
    return [t.slice(e, e + o), o];
  }
  function $(t) {
    var e = [];
    var r = 0;
    var i = t.length;
    while (r < i) {
      var n = Q(t, r);
      var o = n[0];
      var s = n[1];
      e.push(o);
      r += s;
    }
    return e;
  }
  function tt(t) {
    var e = X.join("|");
    var r = ["$"];
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      var o = t[i];
      if (Z(o)) {
        throw TypeError("`wordBreak` must not include " + e);
      }
      r.push(o === "" ? "." : H(o));
    }
    return RegExp("(" + e + ")|((.*?)(" + r.join("|") + "))", "gm");
  }
  function te(t, e, r, i) {
    var n = tt(e);
    var o = K(t).match(n);
    var s = "";
    var a = 0;
    var l = [];
    function h() {
      if (s !== "") {
        l.push(s);
      }
      s = "";
      a = 0;
    }
    var c = 0;
    var u = o.length;
    for (; c < u; c++) {
      var d = o[c];
      if (Z(d)) {
        h();
      } else {
        var f = i(d);
        if (a + f > r) {
          h();
        }
        s += d;
        a += f;
      }
    }
    h();
    return l;
  }
  var tr = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/;
  function ti(t) {
    var e = t.match(tr);
    if (e) {
      var r = e[1];
      var i = e[2];
      var n = i === undefined ? "01" : i;
      var o = e[3];
      var s = o === undefined ? "01" : o;
      var a = e[4];
      var l = a === undefined ? "00" : a;
      var h = e[5];
      var c = h === undefined ? "00" : h;
      var u = e[6];
      var d = u === undefined ? "00" : u;
      var f = e[7];
      var p = f === undefined ? "Z" : f;
      var g = e[8];
      var m = g === undefined ? "00" : g;
      var v = e[9];
      var y = v === undefined ? "00" : v;
      var b = p === "Z" ? "Z" : "" + p + m + ":" + y;
      var A = new Date(r + "-" + n + "-" + s + "T" + l + ":" + c + ":" + d + b);
      return A;
    }
  }
  function tn(t, e) {
    var i;
    var n = 0;
    while (n < t.length) {
      var o = t.substring(n).match(e);
      if (!o) {
        break;
      }
      i = o;
      n += (o.index ?? 0) + o[0].length;
    }
    return {
      match: i,
      pos: n
    };
  }
  function to(t) {
    return t[t.length - 1];
  }
  function ts(t) {
    if (t instanceof Uint8Array) {
      return t;
    }
    var e = t.length;
    var r = new Uint8Array(e);
    var i = 0;
    for (; i < e; i++) {
      r[i] = t.charCodeAt(i);
    }
    return r;
  }
  function ta() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    var r = t.length;
    var i = [];
    var n = 0;
    for (; n < r; n++) {
      var o = t[n];
      i[n] = o instanceof Uint8Array ? o : ts(o);
    }
    var s = 0;
    var n = 0;
    for (; n < r; n++) {
      s += t[n].length;
    }
    var a = new Uint8Array(s);
    var l = 0;
    var h = 0;
    for (; h < r; h++) {
      var c = i[h];
      var u = 0;
      var d = c.length;
      for (; u < d; u++) {
        a[l++] = c[u];
      }
    }
    return a;
  }
  function tl(t) {
    var e = 0;
    var r = 0;
    var i = t.length;
    for (; r < i; r++) {
      e += t[r].length;
    }
    var n = new Uint8Array(e);
    var o = 0;
    var r = 0;
    var i = t.length;
    for (; r < i; r++) {
      var s = t[r];
      n.set(s, o);
      o += s.length;
    }
    return n;
  }
  function th(t) {
    var e = "";
    var r = 0;
    var i = t.length;
    for (; r < i; r++) {
      e += V(t[r]);
    }
    return e;
  }
  function tc(t, e) {
    return t.id - e.id;
  }
  function tu(t, e) {
    var r = [];
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      var o = t[i];
      var s = t[i - 1];
      if (i === 0 || e(o) !== e(s)) {
        r.push(o);
      }
    }
    return r;
  }
  function td(t) {
    var e = t.length;
    var r = 0;
    var i = Math.floor(e / 2);
    for (; r < i; r++) {
      var n = r;
      var o = e - r - 1;
      var s = t[r];
      t[n] = t[o];
      t[o] = s;
    }
    return t;
  }
  function tf(t) {
    var e = 0;
    var r = 0;
    var i = t.length;
    for (; r < i; r++) {
      e += t[r];
    }
    return e;
  }
  function tp(t, e) {
    var r = Array(e - t);
    var i = 0;
    var n = r.length;
    for (; i < n; i++) {
      r[i] = t + i;
    }
    return r;
  }
  function tg(t, e) {
    var r = Array(e.length);
    var i = 0;
    var n = e.length;
    for (; i < n; i++) {
      r[i] = t[e[i]];
    }
    return r;
  }
  function tm(t) {
    return t instanceof Uint8Array || t instanceof ArrayBuffer || typeof t == "string";
  }
  function tv(t) {
    if (typeof t == "string") {
      return B(t);
    }
    if (t instanceof ArrayBuffer) {
      return new Uint8Array(t);
    }
    if (t instanceof Uint8Array) {
      return t;
    }
    throw TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`");
  }
  function ty() {
    return new Promise(function (t) {
      setTimeout(function () {
        return t();
      }, 0);
    });
  }
  function tb(t, e = true) {
    var r = [];
    if (e) {
      r.push(65279);
    }
    var i = 0;
    var n = t.length;
    while (i < n) {
      var o = t.codePointAt(i);
      if (o < 65536) {
        r.push(o);
        i += 1;
      } else if (o < 1114112) {
        r.push(tx(o), tw(o));
        i += 2;
      } else {
        throw Error("Invalid code point: 0x" + z(o));
      }
    }
    return new Uint16Array(r);
  }
  function tA(t) {
    return t >= 0 && t <= 65535;
  }
  function tS(t) {
    return t >= 65536 && t <= 1114111;
  }
  function tx(t) {
    return Math.floor((t - 65536) / 1024) + 55296;
  }
  function tw(t) {
    return (t - 65536) % 1024 + 56320;
  }
  (function (t) {
    t.BigEndian = "BigEndian";
    t.LittleEndian = "LittleEndian";
  })(i ||= {});
  var tC = 65533;
  function tT(t, e = true) {
    if (t.length <= 1) {
      return String.fromCodePoint(tC);
    }
    var r = e ? tP(t) : i.BigEndian;
    var n = !!e * 2;
    var o = [];
    while (t.length - n >= 2) {
      var s = tk(t[n++], t[n++], r);
      if (tE(s)) {
        if (t.length - n < 2) {
          o.push(tC);
        } else {
          var a = tk(t[n++], t[n++], r);
          if (tF(a)) {
            o.push(s, a);
          } else {
            o.push(tC);
          }
        }
      } else if (tF(s)) {
        n += 2;
        o.push(tC);
      } else {
        o.push(s);
      }
    }
    if (n < t.length) {
      o.push(tC);
    }
    return String.fromCodePoint.apply(String, o);
  }
  function tE(t) {
    return t >= 55296 && t <= 56319;
  }
  function tF(t) {
    return t >= 56320 && t <= 57343;
  }
  function tk(t, e, r) {
    if (r === i.LittleEndian) {
      return e << 8 | t;
    }
    if (r === i.BigEndian) {
      return t << 8 | e;
    }
    throw Error("Invalid byteOrder: " + r);
  }
  function tP(t) {
    if (tR(t)) {
      return i.BigEndian;
    } else if (tM(t)) {
      return i.LittleEndian;
    } else {
      return i.BigEndian;
    }
  }
  function tR(t) {
    return t[0] === 254 && t[1] === 255;
  }
  function tM(t) {
    return t[0] === 255 && t[1] === 254;
  }
  function tO(t) {
    return tR(t) || tM(t);
  }
  function tD(t) {
    var e = String(t);
    if (Math.abs(t) < 1) {
      var r = parseInt(t.toString().split("e-")[1]);
      if (r) {
        var i = t < 0;
        if (i) {
          t *= -1;
        }
        t *= Math.pow(10, r - 1);
        e = "0." + Array(r).join("0") + t.toString().substring(2);
        if (i) {
          e = "-" + e;
        }
      }
    } else {
      var r = parseInt(t.toString().split("+")[1]);
      if (r > 20) {
        r -= 20;
        t /= Math.pow(10, r);
        e = t.toString() + Array(r + 1).join("0");
      }
    }
    return e;
  }
  function tI(t) {
    return Math.ceil(t.toString(2).length / 8);
  }
  function tL(t) {
    var e = new Uint8Array(tI(t));
    var r = 1;
    for (; r <= e.length; r++) {
      e[r - 1] = t >> (e.length - r) * 8;
    }
    return e;
  }
  function tN(t) {
    throw Error(t);
  }
  var zlibCompressionUtils = require("zlib-compression-utils") /*id: 393206*/;
  var tj = zlibCompressionUtils;
  var t_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var tU = new Uint8Array(256);
  var tz = 0;
  for (; tz < t_.length; tz++) {
    tU[t_.charCodeAt(tz)] = tz;
  }
  function tV(t) {
    var e;
    var r;
    var i;
    var n;
    var o;
    var s = t.length * 0.75;
    var a = t.length;
    var l = 0;
    if (t[t.length - 1] === "=") {
      s--;
      if (t[t.length - 2] === "=") {
        s--;
      }
    }
    var h = new Uint8Array(s);
    for (e = 0; e < a; e += 4) {
      r = tU[t.charCodeAt(e)];
      i = tU[t.charCodeAt(e + 1)];
      n = tU[t.charCodeAt(e + 2)];
      o = tU[t.charCodeAt(e + 3)];
      h[l++] = r << 2 | i >> 4;
      h[l++] = (i & 15) << 4 | n >> 2;
      h[l++] = (n & 3) << 6 | o & 63;
    }
    return h;
  }
  function tW(t) {
    var e = "";
    var r = 0;
    for (; r < t.length; r++) {
      e += String.fromCharCode(t[r]);
    }
    return e;
  }
  function tG(t) {
    return tW(tj.inflate(tV(t)));
  }
  function tq(t, e, r) {
    var i = "";
    var n = 0;
    var o = e - t.length;
    for (; n < o; n++) {
      i += r;
    }
    return i + t;
  }
  var tH = {
    Courier: "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",
    "Courier-Bold": "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",
    "Courier-Oblique": "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",
    "Courier-BoldOblique": "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",
    Helvetica: "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",
    "Helvetica-Bold": "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",
    "Helvetica-Oblique": "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",
    "Helvetica-BoldOblique": "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",
    "Times-Roman": "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",
    "Times-Bold": "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",
    "Times-Italic": "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",
    "Times-BoldItalic": "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",
    Symbol: "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",
    ZapfDingbats: "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w=="
  };
  (function (t) {
    t.Courier = "Courier";
    t.CourierBold = "Courier-Bold";
    t.CourierOblique = "Courier-Oblique";
    t.CourierBoldOblique = "Courier-BoldOblique";
    t.Helvetica = "Helvetica";
    t.HelveticaBold = "Helvetica-Bold";
    t.HelveticaOblique = "Helvetica-Oblique";
    t.HelveticaBoldOblique = "Helvetica-BoldOblique";
    t.TimesRoman = "Times-Roman";
    t.TimesRomanBold = "Times-Bold";
    t.TimesRomanItalic = "Times-Italic";
    t.TimesRomanBoldItalic = "Times-BoldItalic";
    t.Symbol = "Symbol";
    t.ZapfDingbats = "ZapfDingbats";
  })(n ||= {});
  var tK = {};
  var tX = function () {
    function t() {
      var t = this;
      this.getWidthOfGlyph = function (e) {
        return t.CharWidths[e];
      };
      this.getXAxisKerningForPair = function (e, r) {
        return (t.KernPairXAmounts[e] || {})[r];
      };
    }
    t.load = function (e) {
      var r = tK[e];
      if (r) {
        return r;
      }
      var i = tG(tH[e]);
      var n = Object.assign(new t(), JSON.parse(i));
      n.CharWidths = n.CharMetrics.reduce(function (t, e) {
        t[e.N] = e.WX;
        return t;
      }, {});
      n.KernPairXAmounts = n.KernPairs.reduce(function (t, e) {
        var r = e[0];
        var i = e[1];
        var n = e[2];
        t[r] ||= {};
        t[r][i] = n;
        return t;
      }, {});
      tK[e] = n;
      return n;
    };
    return t;
  }();
  var tZ = JSON.parse(tG("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"));
  var tY = function () {
    return function (t, e) {
      var r = this;
      this.canEncodeUnicodeCodePoint = function (t) {
        return t in r.unicodeMappings;
      };
      this.encodeUnicodeCodePoint = function (t) {
        var e = r.unicodeMappings[t];
        if (!e) {
          var i = String.fromCharCode(t);
          var n = "0x" + tq(t.toString(16), 4, "0");
          throw Error(r.name + " cannot encode \"" + i + "\" (" + n + ")");
        }
        return {
          code: e[0],
          name: e[1]
        };
      };
      this.name = t;
      this.supportedCodePoints = Object.keys(e).map(Number).sort(function (t, e) {
        return t - e;
      });
      this.unicodeMappings = e;
    };
  }();
  var tJ = {
    Symbol: new tY("Symbol", tZ.symbol),
    ZapfDingbats: new tY("ZapfDingbats", tZ.zapfdingbats),
    WinAnsi: new tY("WinAnsi", tZ.win1252)
  };
  function tQ(t) {
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  }
  var t$ = tQ(n);
  function t0(t) {
    return t$.includes(t);
  }
  function t1(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  function t2(t) {
    return "`" + t + "`";
  }
  function t5(t) {
    return "'" + t + "'";
  }
  function t3(t) {
    var e = typeof t;
    if (e === "string") {
      return t5(t);
    } else if (e === "undefined") {
      return t2(t);
    } else {
      return t;
    }
  }
  function t4(t, e, r) {
    var i = Array(r.length);
    var n = 0;
    var o = r.length;
    for (; n < o; n++) {
      var s = r[n];
      i[n] = t3(s);
    }
    var a = i.join(" or ");
    return t2(e) + " must be one of " + a + ", but was actually " + t3(t);
  }
  function t6(t, e, r) {
    if (!Array.isArray(r)) {
      r = tQ(r);
    }
    var i = 0;
    var n = r.length;
    for (; i < n; i++) {
      if (t === r[i]) {
        return;
      }
    }
    throw TypeError(t4(t, e, r));
  }
  function t8(t, e, r) {
    if (!Array.isArray(r)) {
      r = tQ(r);
    }
    t6(t, e, r.concat(undefined));
  }
  function t9(t, e, r) {
    if (!Array.isArray(r)) {
      r = tQ(r);
    }
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      t6(t[i], e, r);
    }
  }
  function t7(t) {
    if (t === null) {
      return "null";
    } else if (t === undefined) {
      return "undefined";
    } else if (typeof t == "string") {
      return "string";
    } else if (isNaN(t)) {
      return "NaN";
    } else if (typeof t == "number") {
      return "number";
    } else if (typeof t == "boolean") {
      return "boolean";
    } else if (typeof t == "symbol") {
      return "symbol";
    } else if (typeof t == "bigint") {
      return "bigint";
    } else if (t.constructor && t.constructor.name) {
      return t.constructor.name;
    } else if (t.name) {
      return t.name;
    } else if (t.constructor) {
      return String(t.constructor);
    } else {
      return String(t);
    }
  }
  function et(t, e) {
    if (e === "null") {
      return t === null;
    } else if (e === "undefined") {
      return t === undefined;
    } else if (e === "string") {
      return typeof t == "string";
    } else if (e === "number") {
      return typeof t == "number" && !isNaN(t);
    } else if (e === "boolean") {
      return typeof t == "boolean";
    } else if (e === "symbol") {
      return typeof t == "symbol";
    } else if (e === "bigint") {
      return typeof t == "bigint";
    } else if (e === Date) {
      return t instanceof Date;
    } else if (e === Array) {
      return t instanceof Array;
    } else if (e === Uint8Array) {
      return t instanceof Uint8Array;
    } else if (e === ArrayBuffer) {
      return t instanceof ArrayBuffer;
    } else if (e === Function) {
      return t instanceof Function;
    } else {
      return t instanceof e[0];
    }
  }
  function ee(t, e, r) {
    var i = Array(r.length);
    var n = 0;
    var o = r.length;
    for (; n < o; n++) {
      var s = r[n];
      if (s === "null") {
        i[n] = t2("null");
      }
      if (s === "undefined") {
        i[n] = t2("undefined");
      }
      if (s === "string") {
        i[n] = t2("string");
      } else if (s === "number") {
        i[n] = t2("number");
      } else if (s === "boolean") {
        i[n] = t2("boolean");
      } else if (s === "symbol") {
        i[n] = t2("symbol");
      } else if (s === "bigint") {
        i[n] = t2("bigint");
      } else if (s === Array) {
        i[n] = t2("Array");
      } else if (s === Uint8Array) {
        i[n] = t2("Uint8Array");
      } else if (s === ArrayBuffer) {
        i[n] = t2("ArrayBuffer");
      } else {
        i[n] = t2(s[1]);
      }
    }
    var a = i.join(" or ");
    return t2(e) + " must be of type " + a + ", but was actually of type " + t2(t7(t));
  }
  function er(t, e, r) {
    var i = 0;
    var n = r.length;
    for (; i < n; i++) {
      if (et(t, r[i])) {
        return;
      }
    }
    throw TypeError(ee(t, e, r));
  }
  function ei(t, e, r) {
    er(t, e, r.concat("undefined"));
  }
  function en(t, e, r) {
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      er(t[i], e, r);
    }
  }
  function eo(t, e, r, i) {
    er(t, e, ["number"]);
    er(r, "min", ["number"]);
    er(i, "max", ["number"]);
    i = Math.max(r, i);
    if (t < r || t > i) {
      throw Error(t2(e) + " must be at least " + r + " and at most " + i + ", but was actually " + t);
    }
  }
  function es(t, e, r, i) {
    er(t, e, ["number", "undefined"]);
    if (typeof t == "number") {
      eo(t, e, r, i);
    }
  }
  function ea(t, e, r) {
    er(t, e, ["number"]);
    if (t % r != 0) {
      throw Error(t2(e) + " must be a multiple of " + r + ", but was actually " + t);
    }
  }
  function el(t, e) {
    if (!Number.isInteger(t)) {
      throw Error(t2(e) + " must be an integer, but was actually " + t);
    }
  }
  function eh(t, e) {
    if (![1, 0].includes(Math.sign(t))) {
      throw Error(t2(e) + " must be a positive number or 0, but was actually " + t);
    }
  }
  var ec = new Uint16Array(256);
  var eu = 0;
  for (; eu < 256; eu++) {
    ec[eu] = eu;
  }
  ec[22] = j("");
  ec[24] = j("˘");
  ec[25] = j("ˇ");
  ec[26] = j("ˆ");
  ec[27] = j("˙");
  ec[28] = j("˝");
  ec[29] = j("˛");
  ec[30] = j("˚");
  ec[31] = j("˜");
  ec[127] = j("�");
  ec[128] = j("•");
  ec[129] = j("†");
  ec[130] = j("‡");
  ec[131] = j("…");
  ec[132] = j("—");
  ec[133] = j("–");
  ec[134] = j("ƒ");
  ec[135] = j("⁄");
  ec[136] = j("‹");
  ec[137] = j("›");
  ec[138] = j("−");
  ec[139] = j("‰");
  ec[140] = j("„");
  ec[141] = j("“");
  ec[142] = j("”");
  ec[143] = j("‘");
  ec[144] = j("’");
  ec[145] = j("‚");
  ec[146] = j("™");
  ec[147] = j("ﬁ");
  ec[148] = j("ﬂ");
  ec[149] = j("Ł");
  ec[150] = j("Œ");
  ec[151] = j("Š");
  ec[152] = j("Ÿ");
  ec[153] = j("Ž");
  ec[154] = j("ı");
  ec[155] = j("ł");
  ec[156] = j("œ");
  ec[157] = j("š");
  ec[158] = j("ž");
  ec[159] = j("�");
  ec[160] = j("€");
  ec[173] = j("�");
  function ed(t) {
    var e = Array(t.length);
    var r = 0;
    var i = t.length;
    for (; r < i; r++) {
      e[r] = ec[t[r]];
    }
    return String.fromCodePoint.apply(String, e);
  }
  var ef = function () {
    function t(t) {
      this.populate = t;
      this.value = undefined;
    }
    t.prototype.getValue = function () {
      return this.value;
    };
    t.prototype.access = function () {
      this.value ||= this.populate();
      return this.value;
    };
    t.prototype.invalidate = function () {
      this.value = undefined;
    };
    t.populatedBy = function (e) {
      return new t(e);
    };
    return t;
  }();
  var ep = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Method " + e + "." + r + "() not implemented";
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eg = function (t) {
    function e(e) {
      var r = this;
      var i = "Cannot construct " + e + " - it has a private constructor";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var em = function (t) {
    function e(e, r) {
      var i = this;
      function n(t) {
        return (t == null ? undefined : t.name) ?? (t == null ? undefined : t.constructor)?.name;
      }
      var o = "Expected instance of " + (Array.isArray(e) ? e.map(n) : [n(e)]).join(" or ") + ", but got instance of " + (r ? n(r) : r);
      return t.call(this, o) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ev = function (t) {
    function e(e) {
      var r = this;
      var i = e + " stream encoding not supported";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ey = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Cannot call " + e + "." + r + "() more than once";
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  (function (t) {
    function e(e) {
      var r = this;
      var i = "Missing catalog (ref=" + e + ")";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
  })(Error);
  var eb = function (t) {
    function e() {
      var e = this;
      var r = "Can't embed page with missing Contents";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eA = function (t) {
    function e(e) {
      var o = this;
      var s = "Unrecognized stream type: " + ((e == null ? undefined : e.contructor)?.name ?? (e == null ? undefined : e.name) ?? e);
      return t.call(this, s) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eS = function (t) {
    function e() {
      var e = this;
      var r = "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ex = function (t) {
    function e(e) {
      var r = this;
      var i = "Attempted to convert PDFArray with " + e + " elements to rectangle, but must have exactly 4 elements.";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ew = function (t) {
    function e(e) {
      var r = this;
      var i = "Attempted to convert \"" + e + "\" to a date, but it does not match the PDF date string format.";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eC = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Invalid targetIndex specified: targetIndex=" + e + " must be less than Count=" + r;
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eT = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Failed to " + r + " at targetIndex=" + e + " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eE = function (t) {
    function e(e, r, i) {
      var n = this;
      var o = "index should be at least " + r + " and at most " + i + ", but was actually " + e;
      return t.call(this, o) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eF = function (t) {
    function e() {
      var e = this;
      var r = "Attempted to set invalid field value";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ek = function (t) {
    function e() {
      var e = this;
      var r = "Attempted to select multiple values for single-select field";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eP = function (t) {
    function e(e) {
      var r = this;
      var i = "No /DA (default appearance) entry found for field: " + e;
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eR = function (t) {
    function e(e) {
      var r = this;
      var i = "No Tf operator found for DA of field: " + e;
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eM = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Failed to parse number " + ("(line:" + e.line + " col:" + e.column + " offset=" + e.offset + "): \"") + r + "\"";
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eO = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Failed to parse PDF document " + ("(line:" + e.line + " col:" + e.column + " offset=" + e.offset) + "): " + r;
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var eD = function (t) {
    function e(e, r, i) {
      var n = this;
      var o = "Expected next byte to be " + r + " but it was actually " + i;
      return t.call(this, e, o) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var eI = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Failed to parse PDF object starting with the following byte: " + r;
      return t.call(this, e, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var eL = function (t) {
    function e(e) {
      var r = this;
      var i = "Failed to parse invalid PDF object";
      return t.call(this, e, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var eN = function (t) {
    function e(e) {
      var r = this;
      var i = "Failed to parse PDF stream";
      return t.call(this, e, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var eB = function (t) {
    function e(e) {
      var r = this;
      var i = "Failed to parse PDF literal string due to unbalanced parenthesis";
      return t.call(this, e, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var ej = function (t) {
    function e(e) {
      var r = this;
      var i = "Parser stalled";
      return t.call(this, e, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var e_ = function (t) {
    function e(e) {
      var r = this;
      var i = "No PDF header found";
      return t.call(this, e, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  var eU = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Did not find expected keyword '" + th(r) + "'";
      return t.call(this, e, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(eO);
  (function (t) {
    t[t.Null = 0] = "Null";
    t[t.Backspace = 8] = "Backspace";
    t[t.Tab = 9] = "Tab";
    t[t.Newline = 10] = "Newline";
    t[t.FormFeed = 12] = "FormFeed";
    t[t.CarriageReturn = 13] = "CarriageReturn";
    t[t.Space = 32] = "Space";
    t[t.ExclamationPoint = 33] = "ExclamationPoint";
    t[t.Hash = 35] = "Hash";
    t[t.Percent = 37] = "Percent";
    t[t.LeftParen = 40] = "LeftParen";
    t[t.RightParen = 41] = "RightParen";
    t[t.Plus = 43] = "Plus";
    t[t.Minus = 45] = "Minus";
    t[t.Dash = 45] = "Dash";
    t[t.Period = 46] = "Period";
    t[t.ForwardSlash = 47] = "ForwardSlash";
    t[t.Zero = 48] = "Zero";
    t[t.One = 49] = "One";
    t[t.Two = 50] = "Two";
    t[t.Three = 51] = "Three";
    t[t.Four = 52] = "Four";
    t[t.Five = 53] = "Five";
    t[t.Six = 54] = "Six";
    t[t.Seven = 55] = "Seven";
    t[t.Eight = 56] = "Eight";
    t[t.Nine = 57] = "Nine";
    t[t.LessThan = 60] = "LessThan";
    t[t.GreaterThan = 62] = "GreaterThan";
    t[t.A = 65] = "A";
    t[t.D = 68] = "D";
    t[t.E = 69] = "E";
    t[t.F = 70] = "F";
    t[t.O = 79] = "O";
    t[t.P = 80] = "P";
    t[t.R = 82] = "R";
    t[t.LeftSquareBracket = 91] = "LeftSquareBracket";
    t[t.BackSlash = 92] = "BackSlash";
    t[t.RightSquareBracket = 93] = "RightSquareBracket";
    t[t.a = 97] = "a";
    t[t.b = 98] = "b";
    t[t.d = 100] = "d";
    t[t.e = 101] = "e";
    t[t.f = 102] = "f";
    t[t.i = 105] = "i";
    t[t.j = 106] = "j";
    t[t.l = 108] = "l";
    t[t.m = 109] = "m";
    t[t.n = 110] = "n";
    t[t.o = 111] = "o";
    t[t.r = 114] = "r";
    t[t.s = 115] = "s";
    t[t.t = 116] = "t";
    t[t.u = 117] = "u";
    t[t.x = 120] = "x";
    t[t.LeftCurly = 123] = "LeftCurly";
    t[t.RightCurly = 125] = "RightCurly";
    t[t.Tilde = 126] = "Tilde";
  })(o ||= {});
  var ez = o;
  var eV = function () {
    function t(t, e) {
      this.major = String(t);
      this.minor = String(e);
    }
    t.prototype.toString = function () {
      var t = V(129);
      return "%PDF-" + this.major + "." + this.minor + "\n%" + t + t + t + t;
    };
    t.prototype.sizeInBytes = function () {
      return 12 + this.major.length + this.minor.length;
    };
    t.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.Percent;
      t[e++] = ez.P;
      t[e++] = ez.D;
      t[e++] = ez.F;
      t[e++] = ez.Dash;
      e += q(this.major, t, e);
      t[e++] = ez.Period;
      e += q(this.minor, t, e);
      t[e++] = ez.Newline;
      t[e++] = ez.Percent;
      t[e++] = 129;
      t[e++] = 129;
      t[e++] = 129;
      t[e++] = 129;
      return e - r;
    };
    t.forVersion = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  var eW = function () {
    function t() {}
    t.prototype.clone = function (t) {
      throw new ep(this.constructor.name, "clone");
    };
    t.prototype.toString = function () {
      throw new ep(this.constructor.name, "toString");
    };
    t.prototype.sizeInBytes = function () {
      throw new ep(this.constructor.name, "sizeInBytes");
    };
    t.prototype.copyBytesInto = function (t, e) {
      throw new ep(this.constructor.name, "copyBytesInto");
    };
    return t;
  }();
  var eG = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.numberValue = e;
      r.stringValue = tD(e);
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asNumber = function () {
      return this.numberValue;
    };
    e.prototype.value = function () {
      return this.numberValue;
    };
    e.prototype.clone = function () {
      return e.of(this.numberValue);
    };
    e.prototype.toString = function () {
      return this.stringValue;
    };
    e.prototype.sizeInBytes = function () {
      return this.stringValue.length;
    };
    e.prototype.copyBytesInto = function (t, e) {
      e += q(this.stringValue, t, e);
      return this.stringValue.length;
    };
    e.of = function (t) {
      return new e(t);
    };
    return e;
  }(eW);
  var eq = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.array = [];
      r.context = e;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.size = function () {
      return this.array.length;
    };
    e.prototype.push = function (t) {
      this.array.push(t);
    };
    e.prototype.insert = function (t, e) {
      this.array.splice(t, 0, e);
    };
    e.prototype.indexOf = function (t) {
      var e = this.array.indexOf(t);
      if (e === -1) {
        return undefined;
      } else {
        return e;
      }
    };
    e.prototype.remove = function (t) {
      this.array.splice(t, 1);
    };
    e.prototype.set = function (t, e) {
      this.array[t] = e;
    };
    e.prototype.get = function (t) {
      return this.array[t];
    };
    e.prototype.lookupMaybe = function (t) {
      var e;
      var r = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        r[i - 1] = arguments[i];
      }
      return (e = this.context).lookupMaybe.apply(e, typescriptRuntimeHelpers.concatArrays([this.get(t)], r));
    };
    e.prototype.lookup = function (t) {
      var e;
      var r = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        r[i - 1] = arguments[i];
      }
      return (e = this.context).lookup.apply(e, typescriptRuntimeHelpers.concatArrays([this.get(t)], r));
    };
    e.prototype.asRectangle = function () {
      if (this.size() !== 4) {
        throw new ex(this.size());
      }
      var t = this.lookup(0, eG).asNumber();
      var e = this.lookup(1, eG).asNumber();
      return {
        x: t,
        y: e,
        width: this.lookup(2, eG).asNumber() - t,
        height: this.lookup(3, eG).asNumber() - e
      };
    };
    e.prototype.asArray = function () {
      return this.array.slice();
    };
    e.prototype.clone = function (t) {
      var r = e.withContext(t || this.context);
      var i = 0;
      var n = this.size();
      for (; i < n; i++) {
        r.push(this.array[i]);
      }
      return r;
    };
    e.prototype.toString = function () {
      var t = "[ ";
      var e = 0;
      var r = this.size();
      for (; e < r; e++) {
        t += this.get(e).toString();
        t += " ";
      }
      return t + "]";
    };
    e.prototype.sizeInBytes = function () {
      var t = 3;
      var e = 0;
      var r = this.size();
      for (; e < r; e++) {
        t += this.get(e).sizeInBytes() + 1;
      }
      return t;
    };
    e.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.LeftSquareBracket;
      t[e++] = ez.Space;
      var i = 0;
      var n = this.size();
      for (; i < n; i++) {
        e += this.get(i).copyBytesInto(t, e);
        t[e++] = ez.Space;
      }
      t[e++] = ez.RightSquareBracket;
      return e - r;
    };
    e.prototype.scalePDFNumbers = function (t, e) {
      var r = 0;
      var i = this.size();
      for (; r < i; r++) {
        var n = this.lookup(r);
        if (n instanceof eG) {
          var o = r % 2 == 0 ? t : e;
          this.set(r, eG.of(n.asNumber() * o));
        }
      }
    };
    e.withContext = function (t) {
      return new e(t);
    };
    return e;
  }(eW);
  var eH = {};
  var eK = function (t) {
    function e(e, r) {
      var i = this;
      if (e !== eH) {
        throw new eg("PDFBool");
      }
      (i = t.call(this) || this).value = r;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asBoolean = function () {
      return this.value;
    };
    e.prototype.clone = function () {
      return this;
    };
    e.prototype.toString = function () {
      return String(this.value);
    };
    e.prototype.sizeInBytes = function () {
      if (this.value) {
        return 4;
      } else {
        return 5;
      }
    };
    e.prototype.copyBytesInto = function (t, e) {
      if (this.value) {
        t[e++] = ez.t;
        t[e++] = ez.r;
        t[e++] = ez.u;
        t[e++] = ez.e;
        return 4;
      } else {
        t[e++] = ez.f;
        t[e++] = ez.a;
        t[e++] = ez.l;
        t[e++] = ez.s;
        t[e++] = ez.e;
        return 5;
      }
    };
    e.True = new e(eH, true);
    e.False = new e(eH, false);
    return e;
  }(eW);
  var eX = new Uint8Array(256);
  eX[ez.LeftParen] = 1;
  eX[ez.RightParen] = 1;
  eX[ez.LessThan] = 1;
  eX[ez.GreaterThan] = 1;
  eX[ez.LeftSquareBracket] = 1;
  eX[ez.RightSquareBracket] = 1;
  eX[ez.LeftCurly] = 1;
  eX[ez.RightCurly] = 1;
  eX[ez.ForwardSlash] = 1;
  eX[ez.Percent] = 1;
  var eZ = new Uint8Array(256);
  eZ[ez.Null] = 1;
  eZ[ez.Tab] = 1;
  eZ[ez.Newline] = 1;
  eZ[ez.FormFeed] = 1;
  eZ[ez.CarriageReturn] = 1;
  eZ[ez.Space] = 1;
  var eY = new Uint8Array(256);
  var eJ = 0;
  var eQ = 256;
  for (; eJ < eQ; eJ++) {
    eY[eJ] = eZ[eJ] || eX[eJ] ? 1 : 0;
  }
  eY[ez.Hash] = 1;
  function e$(t) {
    return t.replace(/#([\dABCDEF]{2})/g, function (t, e) {
      return W(e);
    });
  }
  function e0(t) {
    return t >= ez.ExclamationPoint && t <= ez.Tilde && !eY[t];
  }
  var e1 = {};
  var e2 = new Map();
  var e5 = function (t) {
    function e(e, r) {
      var i = this;
      if (e !== e1) {
        throw new eg("PDFName");
      }
      i = t.call(this) || this;
      var n = "/";
      var o = 0;
      var s = r.length;
      for (; o < s; o++) {
        var a = r[o];
        var l = j(a);
        n += e0(l) ? a : "#" + z(l);
      }
      i.encodedName = n;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asBytes = function () {
      var t = [];
      var e = "";
      var r = false;
      function i(e) {
        if (e !== undefined) {
          t.push(e);
        }
        r = false;
      }
      var n = 1;
      var o = this.encodedName.length;
      for (; n < o; n++) {
        var s = this.encodedName[n];
        var a = j(s);
        var l = this.encodedName[n + 1];
        if (r) {
          if (a >= ez.Zero && a <= ez.Nine || a >= ez.a && a <= ez.f || a >= ez.A && a <= ez.F) {
            if ((e += s).length === 2 || (!(l >= "0") || !(l <= "9")) && (!(l >= "a") || !(l <= "f")) && (!(l >= "A") || !(l <= "F"))) {
              i(parseInt(e, 16));
              e = "";
            }
          } else {
            i(a);
          }
        } else if (a === ez.Hash) {
          r = true;
        } else {
          i(a);
        }
      }
      return new Uint8Array(t);
    };
    e.prototype.decodeText = function () {
      var t = this.asBytes();
      return String.fromCharCode.apply(String, Array.from(t));
    };
    e.prototype.asString = function () {
      return this.encodedName;
    };
    e.prototype.value = function () {
      return this.encodedName;
    };
    e.prototype.clone = function () {
      return this;
    };
    e.prototype.toString = function () {
      return this.encodedName;
    };
    e.prototype.sizeInBytes = function () {
      return this.encodedName.length;
    };
    e.prototype.copyBytesInto = function (t, e) {
      e += q(this.encodedName, t, e);
      return this.encodedName.length;
    };
    e.of = function (t) {
      var r = e$(t);
      var i = e2.get(r);
      if (!i) {
        i = new e(e1, r);
        e2.set(r, i);
      }
      return i;
    };
    e.Length = e.of("Length");
    e.FlateDecode = e.of("FlateDecode");
    e.Resources = e.of("Resources");
    e.Font = e.of("Font");
    e.XObject = e.of("XObject");
    e.ExtGState = e.of("ExtGState");
    e.Contents = e.of("Contents");
    e.Type = e.of("Type");
    e.Parent = e.of("Parent");
    e.MediaBox = e.of("MediaBox");
    e.Page = e.of("Page");
    e.Annots = e.of("Annots");
    e.TrimBox = e.of("TrimBox");
    e.ArtBox = e.of("ArtBox");
    e.BleedBox = e.of("BleedBox");
    e.CropBox = e.of("CropBox");
    e.Rotate = e.of("Rotate");
    e.Title = e.of("Title");
    e.Author = e.of("Author");
    e.Subject = e.of("Subject");
    e.Creator = e.of("Creator");
    e.Keywords = e.of("Keywords");
    e.Producer = e.of("Producer");
    e.CreationDate = e.of("CreationDate");
    e.ModDate = e.of("ModDate");
    return e;
  }(eW);
  var e3 = new (function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asNull = function () {
      return null;
    };
    e.prototype.clone = function () {
      return this;
    };
    e.prototype.toString = function () {
      return "null";
    };
    e.prototype.sizeInBytes = function () {
      return 4;
    };
    e.prototype.copyBytesInto = function (t, e) {
      t[e++] = ez.n;
      t[e++] = ez.u;
      t[e++] = ez.l;
      t[e++] = ez.l;
      return 4;
    };
    return e;
  }(eW))();
  var e4 = function (t) {
    function e(e, r) {
      var i = t.call(this) || this;
      i.dict = e;
      i.context = r;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.keys = function () {
      return Array.from(this.dict.keys());
    };
    e.prototype.values = function () {
      return Array.from(this.dict.values());
    };
    e.prototype.entries = function () {
      return Array.from(this.dict.entries());
    };
    e.prototype.set = function (t, e) {
      this.dict.set(t, e);
    };
    e.prototype.get = function (t, e = false) {
      var r = this.dict.get(t);
      if (r !== e3 || e) {
        return r;
      }
    };
    e.prototype.has = function (t) {
      var e = this.dict.get(t);
      return e !== undefined && e !== e3;
    };
    e.prototype.lookupMaybe = function (t) {
      var e;
      var r = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        r[i - 1] = arguments[i];
      }
      var n = r.includes(e3);
      var o = (e = this.context).lookupMaybe.apply(e, typescriptRuntimeHelpers.concatArrays([this.get(t, n)], r));
      if (o !== e3 || n) {
        return o;
      }
    };
    e.prototype.lookup = function (t) {
      var e;
      var r = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        r[i - 1] = arguments[i];
      }
      var n = r.includes(e3);
      var o = (e = this.context).lookup.apply(e, typescriptRuntimeHelpers.concatArrays([this.get(t, n)], r));
      if (o !== e3 || n) {
        return o;
      }
    };
    e.prototype.delete = function (t) {
      return this.dict.delete(t);
    };
    e.prototype.asMap = function () {
      return new Map(this.dict);
    };
    e.prototype.uniqueKey = function (t = "") {
      var e = this.keys();
      var r = e5.of(this.context.addRandomSuffix(t, 10));
      while (e.includes(r)) {
        r = e5.of(this.context.addRandomSuffix(t, 10));
      }
      return r;
    };
    e.prototype.clone = function (t) {
      var r = e.withContext(t || this.context);
      var i = this.entries();
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        var s = i[n];
        var a = s[0];
        var l = s[1];
        r.set(a, l);
      }
      return r;
    };
    e.prototype.toString = function () {
      var t = "<<\n";
      var e = this.entries();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n[0];
        var s = n[1];
        t += o.toString() + " " + s.toString() + "\n";
      }
      return t + ">>";
    };
    e.prototype.sizeInBytes = function () {
      var t = 5;
      var e = this.entries();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n[0];
        var s = n[1];
        t += o.sizeInBytes() + s.sizeInBytes() + 2;
      }
      return t;
    };
    e.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.LessThan;
      t[e++] = ez.LessThan;
      t[e++] = ez.Newline;
      var i = this.entries();
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        var s = i[n];
        var a = s[0];
        var l = s[1];
        e += a.copyBytesInto(t, e);
        t[e++] = ez.Space;
        e += l.copyBytesInto(t, e);
        t[e++] = ez.Newline;
      }
      t[e++] = ez.GreaterThan;
      t[e++] = ez.GreaterThan;
      return e - r;
    };
    e.withContext = function (t) {
      return new e(new Map(), t);
    };
    e.fromMapWithContext = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(eW);
  var e6 = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.dict = e;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.clone = function (t) {
      throw new ep(this.constructor.name, "clone");
    };
    e.prototype.getContentsString = function () {
      throw new ep(this.constructor.name, "getContentsString");
    };
    e.prototype.getContents = function () {
      throw new ep(this.constructor.name, "getContents");
    };
    e.prototype.getContentsSize = function () {
      throw new ep(this.constructor.name, "getContentsSize");
    };
    e.prototype.updateDict = function () {
      var t = this.getContentsSize();
      this.dict.set(e5.Length, eG.of(t));
    };
    e.prototype.sizeInBytes = function () {
      this.updateDict();
      return this.dict.sizeInBytes() + this.getContentsSize() + 18;
    };
    e.prototype.toString = function () {
      this.updateDict();
      var t = this.dict.toString();
      t += "\nstream\n";
      t += this.getContentsString();
      return t += "\nendstream";
    };
    e.prototype.copyBytesInto = function (t, e) {
      this.updateDict();
      var r = e;
      e += this.dict.copyBytesInto(t, e);
      t[e++] = ez.Newline;
      t[e++] = ez.s;
      t[e++] = ez.t;
      t[e++] = ez.r;
      t[e++] = ez.e;
      t[e++] = ez.a;
      t[e++] = ez.m;
      t[e++] = ez.Newline;
      var i = this.getContents();
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        t[e++] = i[n];
      }
      t[e++] = ez.Newline;
      t[e++] = ez.e;
      t[e++] = ez.n;
      t[e++] = ez.d;
      t[e++] = ez.s;
      t[e++] = ez.t;
      t[e++] = ez.r;
      t[e++] = ez.e;
      t[e++] = ez.a;
      t[e++] = ez.m;
      return e - r;
    };
    return e;
  }(eW);
  var e8 = function (t) {
    function e(e, r) {
      var i = t.call(this, e) || this;
      i.contents = r;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asUint8Array = function () {
      return this.contents.slice();
    };
    e.prototype.clone = function (t) {
      return e.of(this.dict.clone(t), this.contents.slice());
    };
    e.prototype.getContentsString = function () {
      return th(this.contents);
    };
    e.prototype.getContents = function () {
      return this.contents;
    };
    e.prototype.getContentsSize = function () {
      return this.contents.length;
    };
    e.of = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(e6);
  var e9 = {};
  var e7 = new Map();
  var rt = function (t) {
    function e(e, r, i) {
      var n = this;
      if (e !== e9) {
        throw new eg("PDFRef");
      }
      (n = t.call(this) || this).objectNumber = r;
      n.generationNumber = i;
      n.tag = r + " " + i + " R";
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.clone = function () {
      return this;
    };
    e.prototype.toString = function () {
      return this.tag;
    };
    e.prototype.sizeInBytes = function () {
      return this.tag.length;
    };
    e.prototype.copyBytesInto = function (t, e) {
      e += q(this.tag, t, e);
      return this.tag.length;
    };
    e.of = function (t, r = 0) {
      var i = t + " " + r + " R";
      var n = e7.get(i);
      if (!n) {
        n = new e(e9, t, r);
        e7.set(i, n);
      }
      return n;
    };
    return e;
  }(eW);
  var re = function () {
    function t(t, e) {
      this.name = t;
      this.args = e || [];
    }
    t.prototype.clone = function (e) {
      var r = Array(this.args.length);
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = this.args[i];
        r[i] = o instanceof eW ? o.clone(e) : o;
      }
      return t.of(this.name, r);
    };
    t.prototype.toString = function () {
      var t = "";
      var e = 0;
      var r = this.args.length;
      for (; e < r; e++) {
        t += String(this.args[e]) + " ";
      }
      return t + this.name;
    };
    t.prototype.sizeInBytes = function () {
      var t = 0;
      var e = 0;
      var r = this.args.length;
      for (; e < r; e++) {
        var i = this.args[e];
        t += (i instanceof eW ? i.sizeInBytes() : i.length) + 1;
      }
      return t + this.name.length;
    };
    t.prototype.copyBytesInto = function (t, e) {
      var r = e;
      var i = 0;
      var n = this.args.length;
      for (; i < n; i++) {
        var o = this.args[i];
        if (o instanceof eW) {
          e += o.copyBytesInto(t, e);
        } else {
          e += q(o, t, e);
        }
        t[e++] = ez.Space;
      }
      return (e += q(this.name, t, e)) - r;
    };
    t.of = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  (function (t) {
    t.NonStrokingColor = "sc";
    t.NonStrokingColorN = "scn";
    t.NonStrokingColorRgb = "rg";
    t.NonStrokingColorGray = "g";
    t.NonStrokingColorCmyk = "k";
    t.NonStrokingColorspace = "cs";
    t.StrokingColor = "SC";
    t.StrokingColorN = "SCN";
    t.StrokingColorRgb = "RG";
    t.StrokingColorGray = "G";
    t.StrokingColorCmyk = "K";
    t.StrokingColorspace = "CS";
    t.BeginMarkedContentSequence = "BDC";
    t.BeginMarkedContent = "BMC";
    t.EndMarkedContent = "EMC";
    t.MarkedContentPointWithProps = "DP";
    t.MarkedContentPoint = "MP";
    t.DrawObject = "Do";
    t.ConcatTransformationMatrix = "cm";
    t.PopGraphicsState = "Q";
    t.PushGraphicsState = "q";
    t.SetFlatness = "i";
    t.SetGraphicsStateParams = "gs";
    t.SetLineCapStyle = "J";
    t.SetLineDashPattern = "d";
    t.SetLineJoinStyle = "j";
    t.SetLineMiterLimit = "M";
    t.SetLineWidth = "w";
    t.SetTextMatrix = "Tm";
    t.SetRenderingIntent = "ri";
    t.AppendRectangle = "re";
    t.BeginInlineImage = "BI";
    t.BeginInlineImageData = "ID";
    t.EndInlineImage = "EI";
    t.ClipEvenOdd = "W*";
    t.ClipNonZero = "W";
    t.CloseAndStroke = "s";
    t.CloseFillEvenOddAndStroke = "b*";
    t.CloseFillNonZeroAndStroke = "b";
    t.ClosePath = "h";
    t.AppendBezierCurve = "c";
    t.CurveToReplicateFinalPoint = "y";
    t.CurveToReplicateInitialPoint = "v";
    t.EndPath = "n";
    t.FillEvenOddAndStroke = "B*";
    t.FillEvenOdd = "f*";
    t.FillNonZeroAndStroke = "B";
    t.FillNonZero = "f";
    t.LegacyFillNonZero = "F";
    t.LineTo = "l";
    t.MoveTo = "m";
    t.ShadingFill = "sh";
    t.StrokePath = "S";
    t.BeginText = "BT";
    t.EndText = "ET";
    t.MoveText = "Td";
    t.MoveTextSetLeading = "TD";
    t.NextLine = "T*";
    t.SetCharacterSpacing = "Tc";
    t.SetFontAndSize = "Tf";
    t.SetTextHorizontalScaling = "Tz";
    t.SetTextLineHeight = "TL";
    t.SetTextRenderingMode = "Tr";
    t.SetTextRise = "Ts";
    t.SetWordSpacing = "Tw";
    t.ShowText = "Tj";
    t.ShowTextAdjusted = "TJ";
    t.ShowTextLine = "'";
    t.ShowTextLineAndSpace = "\"";
    t.Type3D0 = "d0";
    t.Type3D1 = "d1";
    t.BeginCompatibilitySection = "BX";
    t.EndCompatibilitySection = "EX";
  })(s ||= {});
  var rr = s;
  var ri = function (t) {
    function e(e, r) {
      var i = t.call(this, e) || this;
      i.computeContents = function () {
        var t = i.getUnencodedContents();
        if (i.encode) {
          return tj.deflate(t);
        } else {
          return t;
        }
      };
      i.encode = r;
      if (r) {
        e.set(e5.of("Filter"), e5.of("FlateDecode"));
      }
      i.contentsCache = ef.populatedBy(i.computeContents);
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getContents = function () {
      return this.contentsCache.access();
    };
    e.prototype.getContentsSize = function () {
      return this.contentsCache.access().length;
    };
    e.prototype.getUnencodedContents = function () {
      throw new ep(this.constructor.name, "getUnencodedContents");
    };
    return e;
  }(e6);
  var rn = function (t) {
    function e(e, r, i = true) {
      var n = t.call(this, e, i) || this;
      n.operators = r;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.push = function () {
      var t;
      var e = [];
      var r = 0;
      for (; r < arguments.length; r++) {
        e[r] = arguments[r];
      }
      (t = this.operators).push.apply(t, e);
    };
    e.prototype.clone = function (t) {
      var r = Array(this.operators.length);
      var i = 0;
      var n = this.operators.length;
      for (; i < n; i++) {
        r[i] = this.operators[i].clone(t);
      }
      var o = this;
      var s = o.dict;
      var a = o.encode;
      return e.of(s.clone(t), r, a);
    };
    e.prototype.getContentsString = function () {
      var t = "";
      var e = 0;
      var r = this.operators.length;
      for (; e < r; e++) {
        t += this.operators[e] + "\n";
      }
      return t;
    };
    e.prototype.getUnencodedContents = function () {
      var t = new Uint8Array(this.getUnencodedContentsSize());
      var e = 0;
      var r = 0;
      var i = this.operators.length;
      for (; r < i; r++) {
        e += this.operators[r].copyBytesInto(t, e);
        t[e++] = ez.Newline;
      }
      return t;
    };
    e.prototype.getUnencodedContentsSize = function () {
      var t = 0;
      var e = 0;
      var r = this.operators.length;
      for (; e < r; e++) {
        t += this.operators[e].sizeInBytes() + 1;
      }
      return t;
    };
    e.of = function (t, r, i = true) {
      return new e(t, r, i);
    };
    return e;
  }(ri);
  var ro = function () {
    function t(t) {
      this.seed = t;
    }
    t.prototype.nextInt = function () {
      var t = Math.sin(this.seed++) * 10000;
      return t - Math.floor(t);
    };
    t.withSeed = function (e) {
      return new t(e);
    };
    return t;
  }();
  function rs(t, e) {
    var r = t[0];
    var i = e[0];
    return r.objectNumber - i.objectNumber;
  }
  var ra = function () {
    function t() {
      this.largestObjectNumber = 0;
      this.header = eV.forVersion(1, 7);
      this.trailerInfo = {};
      this.indirectObjects = new Map();
      this.rng = ro.withSeed(1);
    }
    t.prototype.assign = function (t, e) {
      this.indirectObjects.set(t, e);
      if (t.objectNumber > this.largestObjectNumber) {
        this.largestObjectNumber = t.objectNumber;
      }
    };
    t.prototype.nextRef = function () {
      this.largestObjectNumber += 1;
      return rt.of(this.largestObjectNumber);
    };
    t.prototype.register = function (t) {
      var e = this.nextRef();
      this.assign(e, t);
      return e;
    };
    t.prototype.delete = function (t) {
      return this.indirectObjects.delete(t);
    };
    t.prototype.lookupMaybe = function (t) {
      var e = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }
      var i = e.includes(e3);
      var n = t instanceof rt ? this.indirectObjects.get(t) : t;
      if (n && (n !== e3 || i)) {
        var o = 0;
        var s = e.length;
        for (; o < s; o++) {
          var a = e[o];
          if (a === e3) {
            if (n === e3) {
              return n;
            }
          } else if (n instanceof a) {
            return n;
          }
        }
        throw new em(e, n);
      }
    };
    t.prototype.lookup = function (t) {
      var e = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        e[r - 1] = arguments[r];
      }
      var i = t instanceof rt ? this.indirectObjects.get(t) : t;
      if (e.length === 0) {
        return i;
      }
      var n = 0;
      var o = e.length;
      for (; n < o; n++) {
        var s = e[n];
        if (s === e3) {
          if (i === e3) {
            return i;
          }
        } else if (i instanceof s) {
          return i;
        }
      }
      throw new em(e, i);
    };
    t.prototype.getObjectRef = function (t) {
      var e = Array.from(this.indirectObjects.entries());
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n[0];
        if (n[1] === t) {
          return o;
        }
      }
    };
    t.prototype.enumerateIndirectObjects = function () {
      return Array.from(this.indirectObjects.entries()).sort(rs);
    };
    t.prototype.obj = function (t) {
      if (t instanceof eW) {
        return t;
      }
      if (t == null) {
        return e3;
      }
      if (typeof t == "string") {
        return e5.of(t);
      }
      if (typeof t == "number") {
        return eG.of(t);
      }
      if (typeof t == "boolean") {
        if (t) {
          return eK.True;
        } else {
          return eK.False;
        }
      } else if (Array.isArray(t)) {
        var e = eq.withContext(this);
        var r = 0;
        var i = t.length;
        for (; r < i; r++) {
          e.push(this.obj(t[r]));
        }
        return e;
      } else {
        var n = e4.withContext(this);
        var o = Object.keys(t);
        var r = 0;
        var i = o.length;
        for (; r < i; r++) {
          var s = o[r];
          var a = t[s];
          if (a !== undefined) {
            n.set(e5.of(s), this.obj(a));
          }
        }
        return n;
      }
    };
    t.prototype.stream = function (t, e = {}) {
      return e8.of(this.obj(e), ts(t));
    };
    t.prototype.flateStream = function (t, e = {}) {
      return this.stream(tj.deflate(ts(t)), typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, e), {
        Filter: "FlateDecode"
      }));
    };
    t.prototype.contentStream = function (t, e = {}) {
      return rn.of(this.obj(e), t);
    };
    t.prototype.formXObject = function (t, e = {}) {
      return this.contentStream(t, typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({
        BBox: this.obj([0, 0, 0, 0]),
        Matrix: this.obj([1, 0, 0, 1, 0, 0])
      }, e), {
        Type: "XObject",
        Subtype: "Form"
      }));
    };
    t.prototype.getPushGraphicsStateContentStream = function () {
      if (this.pushGraphicsStateContentStreamRef) {
        return this.pushGraphicsStateContentStreamRef;
      }
      var t = this.obj({});
      var e = re.of(rr.PushGraphicsState);
      var r = rn.of(t, [e]);
      this.pushGraphicsStateContentStreamRef = this.register(r);
      return this.pushGraphicsStateContentStreamRef;
    };
    t.prototype.getPopGraphicsStateContentStream = function () {
      if (this.popGraphicsStateContentStreamRef) {
        return this.popGraphicsStateContentStreamRef;
      }
      var t = this.obj({});
      var e = re.of(rr.PopGraphicsState);
      var r = rn.of(t, [e]);
      this.popGraphicsStateContentStreamRef = this.register(r);
      return this.popGraphicsStateContentStreamRef;
    };
    t.prototype.addRandomSuffix = function (t, e = 4) {
      return t + "-" + Math.floor(this.rng.nextInt() * Math.pow(10, e));
    };
    t.create = function () {
      return new t();
    };
    return t;
  }();
  var rl = function (t) {
    function e(e, r, i = true) {
      var n = t.call(this, e, r) || this;
      n.normalized = false;
      n.autoNormalizeCTM = i;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.clone = function (t) {
      var r = e.fromMapWithContext(new Map(), t || this.context, this.autoNormalizeCTM);
      var i = this.entries();
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        var s = i[n];
        var a = s[0];
        var l = s[1];
        r.set(a, l);
      }
      return r;
    };
    e.prototype.Parent = function () {
      return this.lookupMaybe(e5.Parent, e4);
    };
    e.prototype.Contents = function () {
      return this.lookup(e5.of("Contents"));
    };
    e.prototype.Annots = function () {
      return this.lookupMaybe(e5.Annots, eq);
    };
    e.prototype.BleedBox = function () {
      return this.lookupMaybe(e5.BleedBox, eq);
    };
    e.prototype.TrimBox = function () {
      return this.lookupMaybe(e5.TrimBox, eq);
    };
    e.prototype.ArtBox = function () {
      return this.lookupMaybe(e5.ArtBox, eq);
    };
    e.prototype.Resources = function () {
      var t = this.getInheritableAttribute(e5.Resources);
      return this.context.lookupMaybe(t, e4);
    };
    e.prototype.MediaBox = function () {
      var t = this.getInheritableAttribute(e5.MediaBox);
      return this.context.lookup(t, eq);
    };
    e.prototype.CropBox = function () {
      var t = this.getInheritableAttribute(e5.CropBox);
      return this.context.lookupMaybe(t, eq);
    };
    e.prototype.Rotate = function () {
      var t = this.getInheritableAttribute(e5.Rotate);
      return this.context.lookupMaybe(t, eG);
    };
    e.prototype.getInheritableAttribute = function (t) {
      var e;
      this.ascend(function (r) {
        e ||= r.get(t);
      });
      return e;
    };
    e.prototype.setParent = function (t) {
      this.set(e5.Parent, t);
    };
    e.prototype.addContentStream = function (t) {
      var e = this.normalizedEntries().Contents || this.context.obj([]);
      this.set(e5.Contents, e);
      e.push(t);
    };
    e.prototype.wrapContentStreams = function (t, e) {
      var r = this.Contents();
      return r instanceof eq && (r.insert(0, t), r.push(e), true);
    };
    e.prototype.addAnnot = function (t) {
      this.normalizedEntries().Annots.push(t);
    };
    e.prototype.removeAnnot = function (t) {
      var e = this.normalizedEntries().Annots;
      var r = e.indexOf(t);
      if (r !== undefined) {
        e.remove(r);
      }
    };
    e.prototype.setFontDictionary = function (t, e) {
      this.normalizedEntries().Font.set(t, e);
    };
    e.prototype.newFontDictionaryKey = function (t) {
      return this.normalizedEntries().Font.uniqueKey(t);
    };
    e.prototype.newFontDictionary = function (t, e) {
      var r = this.newFontDictionaryKey(t);
      this.setFontDictionary(r, e);
      return r;
    };
    e.prototype.setXObject = function (t, e) {
      this.normalizedEntries().XObject.set(t, e);
    };
    e.prototype.newXObjectKey = function (t) {
      return this.normalizedEntries().XObject.uniqueKey(t);
    };
    e.prototype.newXObject = function (t, e) {
      var r = this.newXObjectKey(t);
      this.setXObject(r, e);
      return r;
    };
    e.prototype.setExtGState = function (t, e) {
      this.normalizedEntries().ExtGState.set(t, e);
    };
    e.prototype.newExtGStateKey = function (t) {
      return this.normalizedEntries().ExtGState.uniqueKey(t);
    };
    e.prototype.newExtGState = function (t, e) {
      var r = this.newExtGStateKey(t);
      this.setExtGState(r, e);
      return r;
    };
    e.prototype.ascend = function (t) {
      t(this);
      var e = this.Parent();
      if (e) {
        e.ascend(t);
      }
    };
    e.prototype.normalize = function () {
      if (!this.normalized) {
        var t = this.context;
        var e = this.get(e5.Contents);
        var r = this.context.lookup(e);
        if (r instanceof e6) {
          this.set(e5.Contents, t.obj([e]));
        }
        if (this.autoNormalizeCTM) {
          this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
        }
        var i = this.getInheritableAttribute(e5.Resources);
        var n = t.lookupMaybe(i, e4) || t.obj({});
        this.set(e5.Resources, n);
        var o = n.lookupMaybe(e5.Font, e4) || t.obj({});
        n.set(e5.Font, o);
        var s = n.lookupMaybe(e5.XObject, e4) || t.obj({});
        n.set(e5.XObject, s);
        var a = n.lookupMaybe(e5.ExtGState, e4) || t.obj({});
        n.set(e5.ExtGState, a);
        var l = this.Annots() || t.obj([]);
        this.set(e5.Annots, l);
        this.normalized = true;
      }
    };
    e.prototype.normalizedEntries = function () {
      this.normalize();
      var t = this.Annots();
      var e = this.Resources();
      return {
        Annots: t,
        Resources: e,
        Contents: this.Contents(),
        Font: e.lookup(e5.Font, e4),
        XObject: e.lookup(e5.XObject, e4),
        ExtGState: e.lookup(e5.ExtGState, e4)
      };
    };
    e.InheritableEntries = ["Resources", "MediaBox", "CropBox", "Rotate"];
    e.withContextAndParent = function (t, r) {
      var i = new Map();
      i.set(e5.Type, e5.Page);
      i.set(e5.Parent, r);
      i.set(e5.Resources, t.obj({}));
      i.set(e5.MediaBox, t.obj([0, 0, 612, 792]));
      return new e(i, t, false);
    };
    e.fromMapWithContext = function (t, r, i = true) {
      return new e(t, r, i);
    };
    return e;
  }(e4);
  var rh = function () {
    function t(t, e) {
      var r = this;
      this.traversedObjects = new Map();
      this.copy = function (t) {
        if (t instanceof rl) {
          return r.copyPDFPage(t);
        } else if (t instanceof e4) {
          return r.copyPDFDict(t);
        } else if (t instanceof eq) {
          return r.copyPDFArray(t);
        } else if (t instanceof e6) {
          return r.copyPDFStream(t);
        } else if (t instanceof rt) {
          return r.copyPDFIndirectObject(t);
        } else {
          return t.clone();
        }
      };
      this.copyPDFPage = function (t) {
        var e = t.clone();
        var i = rl.InheritableEntries;
        var n = 0;
        var o = i.length;
        for (; n < o; n++) {
          var s = e5.of(i[n]);
          var a = e.getInheritableAttribute(s);
          if (!e.get(s) && a) {
            e.set(s, a);
          }
        }
        e.delete(e5.of("Parent"));
        return r.copyPDFDict(e);
      };
      this.copyPDFDict = function (t) {
        if (r.traversedObjects.has(t)) {
          return r.traversedObjects.get(t);
        }
        var e = t.clone(r.dest);
        r.traversedObjects.set(t, e);
        var i = t.entries();
        var n = 0;
        var o = i.length;
        for (; n < o; n++) {
          var s = i[n];
          var a = s[0];
          var l = s[1];
          e.set(a, r.copy(l));
        }
        return e;
      };
      this.copyPDFArray = function (t) {
        if (r.traversedObjects.has(t)) {
          return r.traversedObjects.get(t);
        }
        var e = t.clone(r.dest);
        r.traversedObjects.set(t, e);
        var i = 0;
        var n = t.size();
        for (; i < n; i++) {
          var o = t.get(i);
          e.set(i, r.copy(o));
        }
        return e;
      };
      this.copyPDFStream = function (t) {
        if (r.traversedObjects.has(t)) {
          return r.traversedObjects.get(t);
        }
        var e = t.clone(r.dest);
        r.traversedObjects.set(t, e);
        var i = t.dict.entries();
        var n = 0;
        var o = i.length;
        for (; n < o; n++) {
          var s = i[n];
          var a = s[0];
          var l = s[1];
          e.dict.set(a, r.copy(l));
        }
        return e;
      };
      this.copyPDFIndirectObject = function (t) {
        if (!r.traversedObjects.has(t)) {
          var e = r.dest.nextRef();
          r.traversedObjects.set(t, e);
          var i = r.src.lookup(t);
          if (i) {
            var n = r.copy(i);
            r.dest.assign(e, n);
          }
        }
        return r.traversedObjects.get(t);
      };
      this.src = t;
      this.dest = e;
    }
    t.for = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  var rc = function () {
    function t(t) {
      this.subsections = t ? [[t]] : [];
      this.chunkIdx = 0;
      this.chunkLength = +!!t;
    }
    t.prototype.addEntry = function (t, e) {
      this.append({
        ref: t,
        offset: e,
        deleted: false
      });
    };
    t.prototype.addDeletedEntry = function (t, e) {
      this.append({
        ref: t,
        offset: e,
        deleted: true
      });
    };
    t.prototype.toString = function () {
      var t = "xref\n";
      var e = 0;
      var r = this.subsections.length;
      for (; e < r; e++) {
        var i = this.subsections[e];
        t += i[0].ref.objectNumber + " " + i.length + "\n";
        var n = 0;
        var o = i.length;
        for (; n < o; n++) {
          var s = i[n];
          t += G(String(s.offset), 10, "0");
          t += " ";
          t += G(String(s.ref.generationNumber), 5, "0");
          t += " ";
          t += s.deleted ? "f" : "n";
          t += " \n";
        }
      }
      return t;
    };
    t.prototype.sizeInBytes = function () {
      var t = 5;
      var e = 0;
      var r = this.subsections.length;
      for (; e < r; e++) {
        var i = this.subsections[e];
        var n = i.length;
        t += 2;
        t += String(i[0].ref.objectNumber).length;
        t += String(n).length;
        t += n * 20;
      }
      return t;
    };
    t.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.x;
      t[e++] = ez.r;
      t[e++] = ez.e;
      t[e++] = ez.f;
      t[e++] = ez.Newline;
      return (e += this.copySubsectionsIntoBuffer(this.subsections, t, e)) - r;
    };
    t.prototype.copySubsectionsIntoBuffer = function (t, e, r) {
      var i = r;
      var n = t.length;
      var o = 0;
      for (; o < n; o++) {
        var s = this.subsections[o];
        var a = String(s[0].ref.objectNumber);
        r += q(a, e, r);
        e[r++] = ez.Space;
        var l = String(s.length);
        r += q(l, e, r);
        e[r++] = ez.Newline;
        r += this.copyEntriesIntoBuffer(s, e, r);
      }
      return r - i;
    };
    t.prototype.copyEntriesIntoBuffer = function (t, e, r) {
      var i = t.length;
      var n = 0;
      for (; n < i; n++) {
        var o = t[n];
        var s = G(String(o.offset), 10, "0");
        r += q(s, e, r);
        e[r++] = ez.Space;
        var a = G(String(o.ref.generationNumber), 5, "0");
        r += q(a, e, r);
        e[r++] = ez.Space;
        e[r++] = o.deleted ? ez.f : ez.n;
        e[r++] = ez.Space;
        e[r++] = ez.Newline;
      }
      return i * 20;
    };
    t.prototype.append = function (t) {
      if (this.chunkLength === 0) {
        this.subsections.push([t]);
        this.chunkIdx = 0;
        this.chunkLength = 1;
        return;
      }
      var e = this.subsections[this.chunkIdx];
      var r = e[this.chunkLength - 1];
      if (t.ref.objectNumber - r.ref.objectNumber > 1) {
        this.subsections.push([t]);
        this.chunkIdx += 1;
        this.chunkLength = 1;
      } else {
        e.push(t);
        this.chunkLength += 1;
      }
    };
    t.create = function () {
      return new t({
        ref: rt.of(0, 65535),
        offset: 0,
        deleted: true
      });
    };
    t.createEmpty = function () {
      return new t();
    };
    return t;
  }();
  var ru = function () {
    function t(t) {
      this.lastXRefOffset = String(t);
    }
    t.prototype.toString = function () {
      return "startxref\n" + this.lastXRefOffset + "\n%%EOF";
    };
    t.prototype.sizeInBytes = function () {
      return 16 + this.lastXRefOffset.length;
    };
    t.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.s;
      t[e++] = ez.t;
      t[e++] = ez.a;
      t[e++] = ez.r;
      t[e++] = ez.t;
      t[e++] = ez.x;
      t[e++] = ez.r;
      t[e++] = ez.e;
      t[e++] = ez.f;
      t[e++] = ez.Newline;
      e += q(this.lastXRefOffset, t, e);
      t[e++] = ez.Newline;
      t[e++] = ez.Percent;
      t[e++] = ez.Percent;
      t[e++] = ez.E;
      t[e++] = ez.O;
      t[e++] = ez.F;
      return e - r;
    };
    t.forLastCrossRefSectionOffset = function (e) {
      return new t(e);
    };
    return t;
  }();
  var rd = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.toString = function () {
      return "trailer\n" + this.dict.toString();
    };
    t.prototype.sizeInBytes = function () {
      return 8 + this.dict.sizeInBytes();
    };
    t.prototype.copyBytesInto = function (t, e) {
      var r = e;
      t[e++] = ez.t;
      t[e++] = ez.r;
      t[e++] = ez.a;
      t[e++] = ez.i;
      t[e++] = ez.l;
      t[e++] = ez.e;
      t[e++] = ez.r;
      t[e++] = ez.Newline;
      return (e += this.dict.copyBytesInto(t, e)) - r;
    };
    t.of = function (e) {
      return new t(e);
    };
    return t;
  }();
  var rf = function (t) {
    function e(e, r, i = true) {
      var n = t.call(this, e.obj({}), i) || this;
      n.objects = r;
      n.offsets = n.computeObjectOffsets();
      n.offsetsString = n.computeOffsetsString();
      n.dict.set(e5.of("Type"), e5.of("ObjStm"));
      n.dict.set(e5.of("N"), eG.of(n.objects.length));
      n.dict.set(e5.of("First"), eG.of(n.offsetsString.length));
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getObjectsCount = function () {
      return this.objects.length;
    };
    e.prototype.clone = function (t) {
      return e.withContextAndObjects(t || this.dict.context, this.objects.slice(), this.encode);
    };
    e.prototype.getContentsString = function () {
      var t = this.offsetsString;
      var e = 0;
      var r = this.objects.length;
      for (; e < r; e++) {
        t += this.objects[e][1] + "\n";
      }
      return t;
    };
    e.prototype.getUnencodedContents = function () {
      var t = new Uint8Array(this.getUnencodedContentsSize());
      var e = q(this.offsetsString, t, 0);
      var r = 0;
      var i = this.objects.length;
      for (; r < i; r++) {
        var n = this.objects[r][1];
        e += n.copyBytesInto(t, e);
        t[e++] = ez.Newline;
      }
      return t;
    };
    e.prototype.getUnencodedContentsSize = function () {
      return this.offsetsString.length + to(this.offsets)[1] + to(this.objects)[1].sizeInBytes() + 1;
    };
    e.prototype.computeOffsetsString = function () {
      var t = "";
      var e = 0;
      var r = this.offsets.length;
      for (; e < r; e++) {
        var i = this.offsets[e];
        t += i[0] + " " + i[1] + " ";
      }
      return t;
    };
    e.prototype.computeObjectOffsets = function () {
      var t = 0;
      var e = Array(this.objects.length);
      var r = 0;
      var i = this.objects.length;
      for (; r < i; r++) {
        var n = this.objects[r];
        var o = n[0];
        var s = n[1];
        e[r] = [o.objectNumber, t];
        t += s.sizeInBytes() + 1;
      }
      return e;
    };
    e.withContextAndObjects = function (t, r, i = true) {
      return new e(t, r, i);
    };
    return e;
  }(ri);
  var rp = function () {
    function t(t, e) {
      var r = this;
      this.parsedObjects = 0;
      this.shouldWaitForTick = function (t) {
        r.parsedObjects += t;
        return r.parsedObjects % r.objectsPerTick == 0;
      };
      this.context = t;
      this.objectsPerTick = e;
    }
    t.prototype.serializeToBuffer = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        var d;
        var f;
        var p;
        var g;
        var m;
        return typescriptRuntimeHelpers.generator(this, function (v) {
          switch (v.label) {
            case 0:
              return [4, this.computeBufferSize()];
            case 1:
              e = (t = v.sent()).size;
              r = t.header;
              i = t.indirectObjects;
              n = t.xref;
              o = t.trailerDict;
              s = t.trailer;
              a = 0;
              l = new Uint8Array(e);
              a += r.copyBytesInto(l, a);
              l[a++] = ez.Newline;
              l[a++] = ez.Newline;
              h = 0;
              c = i.length;
              v.label = 2;
            case 2:
              if (!(h < c)) {
                return [3, 5];
              }
              d = (u = i[h])[0];
              f = u[1];
              p = String(d.objectNumber);
              a += q(p, l, a);
              l[a++] = ez.Space;
              g = String(d.generationNumber);
              a += q(g, l, a);
              l[a++] = ez.Space;
              l[a++] = ez.o;
              l[a++] = ez.b;
              l[a++] = ez.j;
              l[a++] = ez.Newline;
              a += f.copyBytesInto(l, a);
              l[a++] = ez.Newline;
              l[a++] = ez.e;
              l[a++] = ez.n;
              l[a++] = ez.d;
              l[a++] = ez.o;
              l[a++] = ez.b;
              l[a++] = ez.j;
              l[a++] = ez.Newline;
              l[a++] = ez.Newline;
              m = f instanceof rf ? f.getObjectsCount() : 1;
              if (!this.shouldWaitForTick(m)) {
                return [3, 4];
              }
              return [4, ty()];
            case 3:
              v.sent();
              v.label = 4;
            case 4:
              h++;
              return [3, 2];
            case 5:
              if (n) {
                a += n.copyBytesInto(l, a);
                l[a++] = ez.Newline;
              }
              if (o) {
                a += o.copyBytesInto(l, a);
                l[a++] = ez.Newline;
                l[a++] = ez.Newline;
              }
              a += s.copyBytesInto(l, a);
              return [2, l];
          }
        });
      });
    };
    t.prototype.computeIndirectObjectSize = function (t) {
      var e = t[0];
      var r = t[1];
      return e.sizeInBytes() + 3 + (r.sizeInBytes() + 9);
    };
    t.prototype.createTrailerDict = function () {
      return this.context.obj({
        Size: this.context.largestObjectNumber + 1,
        Root: this.context.trailerInfo.Root,
        Encrypt: this.context.trailerInfo.Encrypt,
        Info: this.context.trailerInfo.Info,
        ID: this.context.trailerInfo.ID
      });
    };
    t.prototype.computeBufferSize = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        return typescriptRuntimeHelpers.generator(this, function (u) {
          switch (u.label) {
            case 0:
              e = (t = eV.forVersion(1, 7)).sizeInBytes() + 2;
              r = rc.create();
              i = this.context.enumerateIndirectObjects();
              n = 0;
              o = i.length;
              u.label = 1;
            case 1:
              if (!(n < o)) {
                return [3, 4];
              }
              a = (s = i[n])[0];
              r.addEntry(a, e);
              e += this.computeIndirectObjectSize(s);
              if (!this.shouldWaitForTick(1)) {
                return [3, 3];
              }
              return [4, ty()];
            case 2:
              u.sent();
              u.label = 3;
            case 3:
              n++;
              return [3, 1];
            case 4:
              l = e;
              e += r.sizeInBytes() + 1;
              h = rd.of(this.createTrailerDict());
              e += h.sizeInBytes() + 2;
              c = ru.forLastCrossRefSectionOffset(l);
              return [2, {
                size: e += c.sizeInBytes(),
                header: t,
                indirectObjects: i,
                xref: r,
                trailerDict: h,
                trailer: c
              }];
          }
        });
      });
    };
    t.forContext = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  var rg = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.data = e;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.clone = function () {
      return e.of(this.data.slice());
    };
    e.prototype.toString = function () {
      return "PDFInvalidObject(" + this.data.length + " bytes)";
    };
    e.prototype.sizeInBytes = function () {
      return this.data.length;
    };
    e.prototype.copyBytesInto = function (t, e) {
      var r = this.data.length;
      var i = 0;
      for (; i < r; i++) {
        t[e++] = this.data[i];
      }
      return r;
    };
    e.of = function (t) {
      return new e(t);
    };
    return e;
  }(eW);
  (function (t) {
    t[t.Deleted = 0] = "Deleted";
    t[t.Uncompressed = 1] = "Uncompressed";
    t[t.Compressed = 2] = "Compressed";
  })(a ||= {});
  var rm = function (t) {
    function e(e, r, i = true) {
      var n = t.call(this, e, i) || this;
      n.computeIndex = function () {
        var t = [];
        var e = 0;
        var r = 0;
        var i = n.entries.length;
        for (; r < i; r++) {
          var o = n.entries[r];
          var s = n.entries[r - 1];
          if (r === 0) {
            t.push(o.ref.objectNumber);
          } else if (o.ref.objectNumber - s.ref.objectNumber > 1) {
            t.push(e);
            t.push(o.ref.objectNumber);
            e = 0;
          }
          e += 1;
        }
        t.push(e);
        return t;
      };
      n.computeEntryTuples = function () {
        var t = Array(n.entries.length);
        var e = 0;
        var r = n.entries.length;
        for (; e < r; e++) {
          var i = n.entries[e];
          if (i.type === a.Deleted) {
            var o = i.type;
            var s = i.nextFreeObjectNumber;
            var l = i.ref;
            t[e] = [o, s, l.generationNumber];
          }
          if (i.type === a.Uncompressed) {
            var o = i.type;
            var h = i.offset;
            var l = i.ref;
            t[e] = [o, h, l.generationNumber];
          }
          if (i.type === a.Compressed) {
            var o = i.type;
            var c = i.objectStreamRef;
            var u = i.index;
            t[e] = [o, c.objectNumber, u];
          }
        }
        return t;
      };
      n.computeMaxEntryByteWidths = function () {
        var t = n.entryTuplesCache.access();
        var e = [0, 0, 0];
        var r = 0;
        var i = t.length;
        for (; r < i; r++) {
          var o = t[r];
          var s = o[0];
          var a = o[1];
          var l = o[2];
          var h = tI(s);
          var c = tI(a);
          var u = tI(l);
          if (h > e[0]) {
            e[0] = h;
          }
          if (c > e[1]) {
            e[1] = c;
          }
          if (u > e[2]) {
            e[2] = u;
          }
        }
        return e;
      };
      n.entries = r || [];
      n.entryTuplesCache = ef.populatedBy(n.computeEntryTuples);
      n.maxByteWidthsCache = ef.populatedBy(n.computeMaxEntryByteWidths);
      n.indexCache = ef.populatedBy(n.computeIndex);
      e.set(e5.of("Type"), e5.of("XRef"));
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.addDeletedEntry = function (t, e) {
      var r = a.Deleted;
      this.entries.push({
        type: r,
        ref: t,
        nextFreeObjectNumber: e
      });
      this.entryTuplesCache.invalidate();
      this.maxByteWidthsCache.invalidate();
      this.indexCache.invalidate();
      this.contentsCache.invalidate();
    };
    e.prototype.addUncompressedEntry = function (t, e) {
      var r = a.Uncompressed;
      this.entries.push({
        type: r,
        ref: t,
        offset: e
      });
      this.entryTuplesCache.invalidate();
      this.maxByteWidthsCache.invalidate();
      this.indexCache.invalidate();
      this.contentsCache.invalidate();
    };
    e.prototype.addCompressedEntry = function (t, e, r) {
      var i = a.Compressed;
      this.entries.push({
        type: i,
        ref: t,
        objectStreamRef: e,
        index: r
      });
      this.entryTuplesCache.invalidate();
      this.maxByteWidthsCache.invalidate();
      this.indexCache.invalidate();
      this.contentsCache.invalidate();
    };
    e.prototype.clone = function (t) {
      var r = this;
      var i = r.dict;
      var n = r.entries;
      var o = r.encode;
      return e.of(i.clone(t), n.slice(), o);
    };
    e.prototype.getContentsString = function () {
      var t = this.entryTuplesCache.access();
      var e = this.maxByteWidthsCache.access();
      var r = "";
      var i = 0;
      var n = t.length;
      for (; i < n; i++) {
        var o = t[i];
        var s = o[0];
        var a = o[1];
        var l = o[2];
        var h = td(tL(s));
        var c = td(tL(a));
        var u = td(tL(l));
        var d = e[0] - 1;
        for (; d >= 0; d--) {
          r += (h[d] || 0).toString(2);
        }
        for (var d = e[1] - 1; d >= 0; d--) {
          r += (c[d] || 0).toString(2);
        }
        for (var d = e[2] - 1; d >= 0; d--) {
          r += (u[d] || 0).toString(2);
        }
      }
      return r;
    };
    e.prototype.getUnencodedContents = function () {
      var t = this.entryTuplesCache.access();
      var e = this.maxByteWidthsCache.access();
      var r = new Uint8Array(this.getUnencodedContentsSize());
      var i = 0;
      var n = 0;
      var o = t.length;
      for (; n < o; n++) {
        var s = t[n];
        var a = s[0];
        var l = s[1];
        var h = s[2];
        var c = td(tL(a));
        var u = td(tL(l));
        var d = td(tL(h));
        var f = e[0] - 1;
        for (; f >= 0; f--) {
          r[i++] = c[f] || 0;
        }
        for (var f = e[1] - 1; f >= 0; f--) {
          r[i++] = u[f] || 0;
        }
        for (var f = e[2] - 1; f >= 0; f--) {
          r[i++] = d[f] || 0;
        }
      }
      return r;
    };
    e.prototype.getUnencodedContentsSize = function () {
      return tf(this.maxByteWidthsCache.access()) * this.entries.length;
    };
    e.prototype.updateDict = function () {
      t.prototype.updateDict.call(this);
      var e = this.maxByteWidthsCache.access();
      var r = this.indexCache.access();
      var i = this.dict.context;
      this.dict.set(e5.of("W"), i.obj(e));
      this.dict.set(e5.of("Index"), i.obj(r));
    };
    e.create = function (t, r = true) {
      var i = new e(t, [], r);
      i.addDeletedEntry(rt.of(0, 65535), 0);
      return i;
    };
    e.of = function (t, r, i = true) {
      return new e(t, r, i);
    };
    return e;
  }(ri);
  var rv = function (t) {
    function e(e, r, i, n) {
      var o = t.call(this, e, r) || this;
      o.encodeStreams = i;
      o.objectsPerStream = n;
      return o;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.computeBufferSize = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        var d;
        var f;
        var p;
        var g;
        var m;
        var v;
        var y;
        return typescriptRuntimeHelpers.generator(this, function (b) {
          switch (b.label) {
            case 0:
              t = this.context.largestObjectNumber + 1;
              r = (e = eV.forVersion(1, 7)).sizeInBytes() + 2;
              i = rm.create(this.createTrailerDict(), this.encodeStreams);
              n = [];
              o = [];
              s = [];
              a = this.context.enumerateIndirectObjects();
              l = 0;
              h = a.length;
              b.label = 1;
            case 1:
              if (!(l < h)) {
                return [3, 6];
              }
              u = (c = a[l])[0];
              d = c[1];
              if (u !== this.context.trailerInfo.Encrypt && !(d instanceof e6) && !(d instanceof rg) && u.generationNumber === 0) {
                return [3, 4];
              }
              n.push(c);
              i.addUncompressedEntry(u, r);
              r += this.computeIndirectObjectSize(c);
              if (!this.shouldWaitForTick(1)) {
                return [3, 3];
              }
              return [4, ty()];
            case 2:
              b.sent();
              b.label = 3;
            case 3:
              return [3, 5];
            case 4:
              f = to(o);
              p = to(s);
              if (!f || f.length % this.objectsPerStream == 0) {
                f = [];
                o.push(f);
                p = rt.of(t++);
                s.push(p);
              }
              i.addCompressedEntry(u, p, f.length);
              f.push(c);
              b.label = 5;
            case 5:
              l++;
              return [3, 1];
            case 6:
              l = 0;
              h = o.length;
              b.label = 7;
            case 7:
              if (!(l < h)) {
                return [3, 10];
              }
              f = o[l];
              u = s[l];
              g = rf.withContextAndObjects(this.context, f, this.encodeStreams);
              i.addUncompressedEntry(u, r);
              r += this.computeIndirectObjectSize([u, g]);
              n.push([u, g]);
              if (!this.shouldWaitForTick(f.length)) {
                return [3, 9];
              }
              return [4, ty()];
            case 8:
              b.sent();
              b.label = 9;
            case 9:
              l++;
              return [3, 7];
            case 10:
              m = rt.of(t++);
              i.dict.set(e5.of("Size"), eG.of(t));
              i.addUncompressedEntry(m, r);
              v = r;
              r += this.computeIndirectObjectSize([m, i]);
              n.push([m, i]);
              y = ru.forLastCrossRefSectionOffset(v);
              return [2, {
                size: r += y.sizeInBytes(),
                header: e,
                indirectObjects: n,
                trailer: y
              }];
          }
        });
      });
    };
    e.forContext = function (t, r, i = true, n = 50) {
      return new e(t, r, i, n);
    };
    return e;
  }(rp);
  var ry = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.value = e;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asBytes = function () {
      var t = this.value + (this.value.length % 2 == 1 ? "0" : "");
      var e = t.length;
      var r = new Uint8Array(t.length / 2);
      var i = 0;
      var n = 0;
      while (i < e) {
        var o = parseInt(t.substring(i, i + 2), 16);
        r[n] = o;
        i += 2;
        n += 1;
      }
      return r;
    };
    e.prototype.decodeText = function () {
      var t = this.asBytes();
      if (tO(t)) {
        return tT(t);
      } else {
        return ed(t);
      }
    };
    e.prototype.decodeDate = function () {
      var t = this.decodeText();
      var e = ti(t);
      if (!e) {
        throw new ew(t);
      }
      return e;
    };
    e.prototype.asString = function () {
      return this.value;
    };
    e.prototype.clone = function () {
      return e.of(this.value);
    };
    e.prototype.toString = function () {
      return "<" + this.value + ">";
    };
    e.prototype.sizeInBytes = function () {
      return this.value.length + 2;
    };
    e.prototype.copyBytesInto = function (t, e) {
      t[e++] = ez.LessThan;
      e += q(this.value, t, e);
      t[e++] = ez.GreaterThan;
      return this.value.length + 2;
    };
    e.of = function (t) {
      return new e(t);
    };
    e.fromText = function (t) {
      var r = tb(t);
      var i = "";
      var n = 0;
      var o = r.length;
      for (; n < o; n++) {
        i += U(r[n], 4);
      }
      return new e(i);
    };
    return e;
  }(eW);
  var rb = function () {
    function t(t, e) {
      this.encoding = t === n.ZapfDingbats ? tJ.ZapfDingbats : t === n.Symbol ? tJ.Symbol : tJ.WinAnsi;
      this.font = tX.load(t);
      this.fontName = this.font.FontName;
      this.customName = e;
    }
    t.prototype.encodeText = function (t) {
      var e = this.encodeTextAsGlyphs(t);
      var r = Array(e.length);
      var i = 0;
      var n = e.length;
      for (; i < n; i++) {
        r[i] = z(e[i].code);
      }
      return ry.of(r.join(""));
    };
    t.prototype.widthOfTextAtSize = function (t, e) {
      var r = this.encodeTextAsGlyphs(t);
      var i = 0;
      var n = 0;
      var o = r.length;
      for (; n < o; n++) {
        var s = r[n].name;
        var a = (r[n + 1] || {}).name;
        var l = this.font.getXAxisKerningForPair(s, a) || 0;
        i += this.widthOfGlyph(s) + l;
      }
      return e / 1000 * i;
    };
    t.prototype.heightOfFontAtSize = function (t, e = {}) {
      var r = e.descender;
      var i = r === undefined || r;
      var n = this.font;
      var o = n.Ascender;
      var s = n.Descender;
      var a = n.FontBBox;
      var l = (o || a[3]) - (s || a[1]);
      if (!i) {
        l += s || 0;
      }
      return l / 1000 * t;
    };
    t.prototype.sizeOfFontAtHeight = function (t) {
      var e = this.font;
      var r = e.Ascender;
      var i = e.Descender;
      var n = e.FontBBox;
      return t * 1000 / ((r || n[3]) - (i || n[1]));
    };
    t.prototype.embedIntoContext = function (t, e) {
      var r = t.obj({
        Type: "Font",
        Subtype: "Type1",
        BaseFont: this.customName || this.fontName,
        Encoding: this.encoding === tJ.WinAnsi ? "WinAnsiEncoding" : undefined
      });
      if (e) {
        t.assign(e, r);
        return e;
      } else {
        return t.register(r);
      }
    };
    t.prototype.widthOfGlyph = function (t) {
      return this.font.getWidthOfGlyph(t) || 250;
    };
    t.prototype.encodeTextAsGlyphs = function (t) {
      var e = Array.from(t);
      var r = Array(e.length);
      var i = 0;
      var n = e.length;
      for (; i < n; i++) {
        var o = _(e[i]);
        r[i] = this.encoding.encodeUnicodeCodePoint(o);
      }
      return r;
    };
    t.for = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  function rA(t, e) {
    var r = Array(t.length);
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      var o = t[i];
      var s = rx(rw(e(o)));
      var a = rx.apply(undefined, o.codePoints.map(rC));
      r[i] = [s, a];
    }
    return rS(r);
  }
  function rS(t) {
    return "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n" + t.length + " beginbfchar\n" + t.map(function (t) {
      return t[0] + " " + t[1];
    }).join("\n") + "\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
  }
  function rx() {
    var t = [];
    var e = 0;
    for (; e < arguments.length; e++) {
      t[e] = arguments[e];
    }
    return "<" + t.join("") + ">";
  }
  function rw(t) {
    return U(t, 4);
  }
  function rC(t) {
    if (tA(t)) {
      return rw(t);
    }
    if (tS(t)) {
      var e = tx(t);
      var r = tw(t);
      return "" + rw(e) + rw(r);
    }
    throw Error("0x" + z(t) + " is not a valid UTF-8 or UTF-16 codepoint.");
  }
  function rT(t) {
    var e = 0;
    function r(t) {
      e |= 1 << t - 1;
    }
    if (t.fixedPitch) {
      r(1);
    }
    if (t.serif) {
      r(2);
    }
    if (t.symbolic) {
      r(3);
    }
    if (t.script) {
      r(4);
    }
    if (t.nonsymbolic) {
      r(6);
    }
    if (t.italic) {
      r(7);
    }
    if (t.allCap) {
      r(17);
    }
    if (t.smallCap) {
      r(18);
    }
    if (t.forceBold) {
      r(19);
    }
    return e;
  }
  function rE(t) {
    var e = t["OS/2"] ? t["OS/2"].sFamilyClass : 0;
    return rT({
      fixedPitch: t.post.isFixedPitch,
      serif: e >= 1 && e <= 7,
      symbolic: true,
      script: e === 10,
      italic: t.head.macStyle.italic
    });
  }
  var rF = function (t) {
    function e(e) {
      var r = t.call(this) || this;
      r.value = e;
      return r;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.asBytes = function () {
      var t = [];
      var e = "";
      var r = false;
      function i(e) {
        if (e !== undefined) {
          t.push(e);
        }
        r = false;
      }
      var n = 0;
      var o = this.value.length;
      for (; n < o; n++) {
        var s = this.value[n];
        var a = j(s);
        var l = this.value[n + 1];
        if (r) {
          if (a === ez.Newline) {
            i();
          } else if (a === ez.CarriageReturn) {
            i();
          } else if (a === ez.n) {
            i(ez.Newline);
          } else if (a === ez.r) {
            i(ez.CarriageReturn);
          } else if (a === ez.t) {
            i(ez.Tab);
          } else if (a === ez.b) {
            i(ez.Backspace);
          } else if (a === ez.f) {
            i(ez.FormFeed);
          } else if (a === ez.LeftParen) {
            i(ez.LeftParen);
          } else if (a === ez.RightParen) {
            i(ez.RightParen);
          } else if (a === ez.Backspace) {
            i(ez.BackSlash);
          } else if (a >= ez.Zero && a <= ez.Seven) {
            if ((e += s).length === 3 || !(l >= "0") || !(l <= "7")) {
              i(parseInt(e, 8));
              e = "";
            }
          } else {
            i(a);
          }
        } else if (a === ez.BackSlash) {
          r = true;
        } else {
          i(a);
        }
      }
      return new Uint8Array(t);
    };
    e.prototype.decodeText = function () {
      var t = this.asBytes();
      if (tO(t)) {
        return tT(t);
      } else {
        return ed(t);
      }
    };
    e.prototype.decodeDate = function () {
      var t = this.decodeText();
      var e = ti(t);
      if (!e) {
        throw new ew(t);
      }
      return e;
    };
    e.prototype.asString = function () {
      return this.value;
    };
    e.prototype.clone = function () {
      return e.of(this.value);
    };
    e.prototype.toString = function () {
      return "(" + this.value + ")";
    };
    e.prototype.sizeInBytes = function () {
      return this.value.length + 2;
    };
    e.prototype.copyBytesInto = function (t, e) {
      t[e++] = ez.LeftParen;
      e += q(this.value, t, e);
      t[e++] = ez.RightParen;
      return this.value.length + 2;
    };
    e.of = function (t) {
      return new e(t);
    };
    e.fromDate = function (t) {
      return new e("D:" + G(String(t.getUTCFullYear()), 4, "0") + G(String(t.getUTCMonth() + 1), 2, "0") + G(String(t.getUTCDate()), 2, "0") + G(String(t.getUTCHours()), 2, "0") + G(String(t.getUTCMinutes()), 2, "0") + G(String(t.getUTCSeconds()), 2, "0") + "Z");
    };
    return e;
  }(eW);
  var rk = function () {
    function t(t, e, r, i) {
      var n = this;
      this.allGlyphsInFontSortedById = function () {
        var t = Array(n.font.characterSet.length);
        var e = 0;
        var r = t.length;
        for (; e < r; e++) {
          var i = n.font.characterSet[e];
          t[e] = n.font.glyphForCodePoint(i);
        }
        return tu(t.sort(tc), function (t) {
          return t.id;
        });
      };
      this.font = t;
      this.scale = 1000 / this.font.unitsPerEm;
      this.fontData = e;
      this.fontName = this.font.postscriptName || "Font";
      this.customName = r;
      this.fontFeatures = i;
      this.baseFontName = "";
      this.glyphCache = ef.populatedBy(this.allGlyphsInFontSortedById);
    }
    t.for = function (e, r, i, n) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, e.create(r)];
            case 1:
              return [2, new t(o.sent(), r, i, n)];
          }
        });
      });
    };
    t.prototype.encodeText = function (t) {
      var e = this.font.layout(t, this.fontFeatures).glyphs;
      var r = Array(e.length);
      var i = 0;
      var n = e.length;
      for (; i < n; i++) {
        r[i] = U(e[i].id, 4);
      }
      return ry.of(r.join(""));
    };
    t.prototype.widthOfTextAtSize = function (t, e) {
      var r = this.font.layout(t, this.fontFeatures).glyphs;
      var i = 0;
      var n = 0;
      var o = r.length;
      for (; n < o; n++) {
        i += r[n].advanceWidth * this.scale;
      }
      return e / 1000 * i;
    };
    t.prototype.heightOfFontAtSize = function (t, e = {}) {
      var r = e.descender;
      var i = r === undefined || r;
      var n = this.font;
      var o = n.ascent;
      var s = n.descent;
      var a = n.bbox;
      var l = (o || a.maxY) * this.scale - (s || a.minY) * this.scale;
      if (!i) {
        l -= Math.abs(s) || 0;
      }
      return l / 1000 * t;
    };
    t.prototype.sizeOfFontAtHeight = function (t) {
      var e = this.font;
      var r = e.ascent;
      var i = e.descent;
      var n = e.bbox;
      return t * 1000 / ((r || n.maxY) * this.scale - (i || n.minY) * this.scale);
    };
    t.prototype.embedIntoContext = function (t, e) {
      this.baseFontName = this.customName || t.addRandomSuffix(this.fontName);
      return this.embedFontDict(t, e);
    };
    t.prototype.embedFontDict = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, this.embedCIDFontDict(t)];
            case 1:
              r = o.sent();
              i = this.embedUnicodeCmap(t);
              n = t.obj({
                Type: "Font",
                Subtype: "Type0",
                BaseFont: this.baseFontName,
                Encoding: "Identity-H",
                DescendantFonts: [r],
                ToUnicode: i
              });
              if (e) {
                t.assign(e, n);
                return [2, e];
              }
              return [2, t.register(n)];
          }
        });
      });
    };
    t.prototype.isCFF = function () {
      return this.font.cff;
    };
    t.prototype.embedCIDFontDict = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, this.embedFontDescriptor(t)];
            case 1:
              e = i.sent();
              r = t.obj({
                Type: "Font",
                Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                CIDToGIDMap: "Identity",
                BaseFont: this.baseFontName,
                CIDSystemInfo: {
                  Registry: rF.of("Adobe"),
                  Ordering: rF.of("Identity"),
                  Supplement: 0
                },
                FontDescriptor: e,
                W: this.computeWidths()
              });
              return [2, t.register(r)];
          }
        });
      });
    };
    t.prototype.embedFontDescriptor = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        var d;
        var f;
        var p;
        var g;
        return typescriptRuntimeHelpers.generator(this, function (m) {
          switch (m.label) {
            case 0:
              return [4, this.embedFontStream(t)];
            case 1:
              e = m.sent();
              r = this.scale;
              n = (i = this.font).italicAngle;
              o = i.ascent;
              s = i.descent;
              a = i.capHeight;
              l = i.xHeight;
              c = (h = this.font.bbox).minX;
              u = h.minY;
              d = h.maxX;
              f = h.maxY;
              p = t.obj(((g = {
                Type: "FontDescriptor",
                FontName: this.baseFontName,
                Flags: rE(this.font),
                FontBBox: [c * r, u * r, d * r, f * r],
                ItalicAngle: n,
                Ascent: o * r,
                Descent: s * r,
                CapHeight: (a || o) * r,
                XHeight: (l || 0) * r,
                StemV: 0
              })[this.isCFF() ? "FontFile3" : "FontFile2"] = e, g));
              return [2, t.register(p)];
          }
        });
      });
    };
    t.prototype.serializeFont = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (t) {
          return [2, this.fontData];
        });
      });
    };
    t.prototype.embedFontStream = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        return typescriptRuntimeHelpers.generator(this, function (n) {
          switch (n.label) {
            case 0:
              i = (r = t).flateStream;
              return [4, this.serializeFont()];
            case 1:
              e = i.apply(r, [n.sent(), {
                Subtype: this.isCFF() ? "CIDFontType0C" : undefined
              }]);
              return [2, t.register(e)];
          }
        });
      });
    };
    t.prototype.embedUnicodeCmap = function (t) {
      var e = rA(this.glyphCache.access(), this.glyphId.bind(this));
      var r = t.flateStream(e);
      return t.register(r);
    };
    t.prototype.glyphId = function (t) {
      if (t) {
        return t.id;
      } else {
        return -1;
      }
    };
    t.prototype.computeWidths = function () {
      var t = this.glyphCache.access();
      var e = [];
      var r = [];
      var i = 0;
      var n = t.length;
      for (; i < n; i++) {
        var o = t[i];
        var s = t[i - 1];
        var a = this.glyphId(o);
        var l = this.glyphId(s);
        if (i === 0) {
          e.push(a);
        } else if (a - l != 1) {
          e.push(r);
          e.push(a);
          r = [];
        }
        r.push(o.advanceWidth * this.scale);
      }
      e.push(r);
      return e;
    };
    return t;
  }();
  var rP = function (t) {
    function e(e, r, i, n) {
      var o = t.call(this, e, r, i, n) || this;
      o.subset = o.font.createSubset();
      o.glyphs = [];
      o.glyphCache = ef.populatedBy(function () {
        return o.glyphs;
      });
      o.glyphIdMap = new Map();
      return o;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.for = function (t, r, i, n) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, t.create(r)];
            case 1:
              return [2, new e(o.sent(), r, i, n)];
          }
        });
      });
    };
    e.prototype.encodeText = function (t) {
      var e = this.font.layout(t, this.fontFeatures).glyphs;
      var r = Array(e.length);
      var i = 0;
      var n = e.length;
      for (; i < n; i++) {
        var o = e[i];
        var s = this.subset.includeGlyph(o);
        this.glyphs[s - 1] = o;
        this.glyphIdMap.set(o.id, s);
        r[i] = U(s, 4);
      }
      this.glyphCache.invalidate();
      return ry.of(r.join(""));
    };
    e.prototype.isCFF = function () {
      return this.subset.cff;
    };
    e.prototype.glyphId = function (t) {
      if (t) {
        return this.glyphIdMap.get(t.id);
      } else {
        return -1;
      }
    };
    e.prototype.serializeFont = function () {
      var t = this;
      return new Promise(function (e, r) {
        var i = [];
        t.subset.encodeStream().on("data", function (t) {
          return i.push(t);
        }).on("end", function () {
          return e(tl(i));
        }).on("error", function (t) {
          return r(t);
        });
      });
    };
    return e;
  }(rk);
  (function (t) {
    t.Source = "Source";
    t.Data = "Data";
    t.Alternative = "Alternative";
    t.Supplement = "Supplement";
    t.EncryptedPayload = "EncryptedPayload";
    t.FormData = "EncryptedPayload";
    t.Schema = "Schema";
    t.Unspecified = "Unspecified";
  })(l ||= {});
  var rR = function () {
    function t(t, e, r = {}) {
      this.fileData = t;
      this.fileName = e;
      this.options = r;
    }
    t.for = function (e, r, i = {}) {
      return new t(e, r, i);
    };
    t.prototype.embedIntoContext = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        return typescriptRuntimeHelpers.generator(this, function (u) {
          i = (r = this.options).mimeType;
          n = r.description;
          o = r.creationDate;
          s = r.modificationDate;
          a = r.afRelationship;
          l = t.flateStream(this.fileData, {
            Type: "EmbeddedFile",
            Subtype: i ?? undefined,
            Params: {
              Size: this.fileData.length,
              CreationDate: o ? rF.fromDate(o) : undefined,
              ModDate: s ? rF.fromDate(s) : undefined
            }
          });
          h = t.register(l);
          c = t.obj({
            Type: "Filespec",
            F: rF.of(this.fileName),
            UF: ry.fromText(this.fileName),
            EF: {
              F: h
            },
            Desc: n ? ry.fromText(n) : undefined,
            AFRelationship: a ?? undefined
          });
          if (e) {
            t.assign(e, c);
            return [2, e];
          } else {
            return [2, t.register(c)];
          }
        });
      });
    };
    return t;
  }();
  var rM = [65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483, 65484, 65485, 65486, 65487];
  (function (t) {
    t.DeviceGray = "DeviceGray";
    t.DeviceRGB = "DeviceRGB";
    t.DeviceCMYK = "DeviceCMYK";
  })(h ||= {});
  var rO = {
    1: h.DeviceGray,
    3: h.DeviceRGB,
    4: h.DeviceCMYK
  };
  var rD = function () {
    function t(t, e, r, i, n) {
      this.imageData = t;
      this.bitsPerComponent = e;
      this.width = r;
      this.height = i;
      this.colorSpace = n;
    }
    t.for = function (e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        return typescriptRuntimeHelpers.generator(this, function (h) {
          if ((r = new DataView(e.buffer)).getUint16(0) !== 65496) {
            throw Error("SOI not found in JPEG");
          }
          for (i = 2; i < r.byteLength && (n = r.getUint16(i), i += 2, !rM.includes(n));) {
            i += r.getUint16(i);
          }
          if (!rM.includes(n)) {
            throw Error("Invalid JPEG");
          }
          i += 2;
          o = r.getUint8(i++);
          s = r.getUint16(i);
          i += 2;
          a = r.getUint16(i);
          i += 2;
          if (!(l = rO[r.getUint8(i++)])) {
            throw Error("Unknown JPEG channel.");
          }
          return [2, new t(e, o, a, s, l)];
        });
      });
    };
    t.prototype.embedIntoContext = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          r = t.stream(this.imageData, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.bitsPerComponent,
            Width: this.width,
            Height: this.height,
            ColorSpace: this.colorSpace,
            Filter: "DCTDecode",
            Decode: this.colorSpace === h.DeviceCMYK ? [1, 0, 1, 0, 1, 0, 1, 0] : undefined
          });
          if (e) {
            t.assign(e, r);
            return [2, e];
          } else {
            return [2, t.register(r)];
          }
        });
      });
    };
    return t;
  }();
  var rI = {};
  rI.toRGBA8 = function (t) {
    var e = t.width;
    var r = t.height;
    if (t.tabs.acTL == null) {
      return [rI.toRGBA8.decodeImage(t.data, e, r, t).buffer];
    }
    var i = [];
    if (t.frames[0].data == null) {
      t.frames[0].data = t.data;
    }
    var n = e * r * 4;
    var o = new Uint8Array(n);
    var s = new Uint8Array(n);
    var a = new Uint8Array(n);
    var l = 0;
    for (; l < t.frames.length; l++) {
      var h = t.frames[l];
      var c = h.rect.x;
      var u = h.rect.y;
      var d = h.rect.width;
      var f = h.rect.height;
      var p = rI.toRGBA8.decodeImage(h.data, d, f, t);
      if (l != 0) {
        for (var g = 0; g < n; g++) {
          a[g] = o[g];
        }
      }
      if (h.blend == 0) {
        rI._copyTile(p, d, f, o, e, r, c, u, 0);
      } else if (h.blend == 1) {
        rI._copyTile(p, d, f, o, e, r, c, u, 1);
      }
      i.push(o.buffer.slice(0));
      if (h.dispose == 0) ;else if (h.dispose == 1) {
        rI._copyTile(s, d, f, o, e, r, c, u, 0);
      } else if (h.dispose == 2) {
        for (var g = 0; g < n; g++) {
          o[g] = a[g];
        }
      }
    }
    return i;
  };
  rI.toRGBA8.decodeImage = function (t, e, r, i) {
    var n = e * r;
    var o = Math.ceil(e * rI.decode._getBPP(i) / 8);
    var s = new Uint8Array(n * 4);
    var a = new Uint32Array(s.buffer);
    var l = i.ctype;
    var h = i.depth;
    var c = rI._bin.readUshort;
    Date.now();
    if (l == 6) {
      var u = n << 2;
      if (h == 8) {
        for (var d = 0; d < u; d += 4) {
          s[d] = t[d];
          s[d + 1] = t[d + 1];
          s[d + 2] = t[d + 2];
          s[d + 3] = t[d + 3];
        }
      }
      if (h == 16) {
        for (var d = 0; d < u; d++) {
          s[d] = t[d << 1];
        }
      }
    } else if (l == 2) {
      var f = i.tabs.tRNS;
      if (f == null) {
        if (h == 8) {
          for (var d = 0; d < n; d++) {
            var p = d * 3;
            a[d] = t[p + 2] << 16 | -16777216 | t[p + 1] << 8 | t[p];
          }
        }
        if (h == 16) {
          for (var d = 0; d < n; d++) {
            var p = d * 6;
            a[d] = t[p + 4] << 16 | -16777216 | t[p + 2] << 8 | t[p];
          }
        }
      } else {
        var g = f[0];
        var m = f[1];
        var v = f[2];
        if (h == 8) {
          for (var d = 0; d < n; d++) {
            var y = d << 2;
            var p = d * 3;
            a[d] = t[p + 2] << 16 | -16777216 | t[p + 1] << 8 | t[p];
            if (t[p] == g && t[p + 1] == m && t[p + 2] == v) {
              s[y + 3] = 0;
            }
          }
        }
        if (h == 16) {
          for (var d = 0; d < n; d++) {
            var y = d << 2;
            var p = d * 6;
            a[d] = t[p + 4] << 16 | -16777216 | t[p + 2] << 8 | t[p];
            if (c(t, p) == g && c(t, p + 2) == m && c(t, p + 4) == v) {
              s[y + 3] = 0;
            }
          }
        }
      }
    } else if (l == 3) {
      var b = i.tabs.PLTE;
      var A = i.tabs.tRNS;
      var S = A ? A.length : 0;
      if (h == 1) {
        for (var x = 0; x < r; x++) {
          var w = x * o;
          var C = x * e;
          var d = 0;
          for (; d < e; d++) {
            var y = C + d << 2;
            var T = t[w + (d >> 3)] >> 7 - ((d & 7) << 0) & 1;
            var E = T * 3;
            s[y] = b[E];
            s[y + 1] = b[E + 1];
            s[y + 2] = b[E + 2];
            s[y + 3] = T < S ? A[T] : 255;
          }
        }
      }
      if (h == 2) {
        for (var x = 0; x < r; x++) {
          var w = x * o;
          var C = x * e;
          var d = 0;
          for (; d < e; d++) {
            var y = C + d << 2;
            var T = t[w + (d >> 2)] >> 6 - ((d & 3) << 1) & 3;
            var E = T * 3;
            s[y] = b[E];
            s[y + 1] = b[E + 1];
            s[y + 2] = b[E + 2];
            s[y + 3] = T < S ? A[T] : 255;
          }
        }
      }
      if (h == 4) {
        for (var x = 0; x < r; x++) {
          var w = x * o;
          var C = x * e;
          var d = 0;
          for (; d < e; d++) {
            var y = C + d << 2;
            var T = t[w + (d >> 1)] >> 4 - ((d & 1) << 2) & 15;
            var E = T * 3;
            s[y] = b[E];
            s[y + 1] = b[E + 1];
            s[y + 2] = b[E + 2];
            s[y + 3] = T < S ? A[T] : 255;
          }
        }
      }
      if (h == 8) {
        for (var d = 0; d < n; d++) {
          var y = d << 2;
          var T = t[d];
          var E = T * 3;
          s[y] = b[E];
          s[y + 1] = b[E + 1];
          s[y + 2] = b[E + 2];
          s[y + 3] = T < S ? A[T] : 255;
        }
      }
    } else if (l == 4) {
      if (h == 8) {
        for (var d = 0; d < n; d++) {
          var y = d << 2;
          var F = d << 1;
          var k = t[F];
          s[y] = k;
          s[y + 1] = k;
          s[y + 2] = k;
          s[y + 3] = t[F + 1];
        }
      }
      if (h == 16) {
        for (var d = 0; d < n; d++) {
          var y = d << 2;
          var F = d << 2;
          var k = t[F];
          s[y] = k;
          s[y + 1] = k;
          s[y + 2] = k;
          s[y + 3] = t[F + 2];
        }
      }
    } else if (l == 0) {
      var g = i.tabs.tRNS ? i.tabs.tRNS : -1;
      var x = 0;
      for (; x < r; x++) {
        var P = x * o;
        var R = x * e;
        if (h == 1) {
          for (var M = 0; M < e; M++) {
            var k = (t[P + (M >>> 3)] >>> 7 - (M & 7) & 1) * 255;
            var O = (k != g * 255) * 255;
            a[R + M] = O << 24 | k << 16 | k << 8 | k;
          }
        } else if (h == 2) {
          for (var M = 0; M < e; M++) {
            var k = (t[P + (M >>> 2)] >>> 6 - ((M & 3) << 1) & 3) * 85;
            var O = (k != g * 85) * 255;
            a[R + M] = O << 24 | k << 16 | k << 8 | k;
          }
        } else if (h == 4) {
          for (var M = 0; M < e; M++) {
            var k = (t[P + (M >>> 1)] >>> 4 - ((M & 1) << 2) & 15) * 17;
            var O = (k != g * 17) * 255;
            a[R + M] = O << 24 | k << 16 | k << 8 | k;
          }
        } else if (h == 8) {
          for (var M = 0; M < e; M++) {
            var k = t[P + M];
            var O = (k != g) * 255;
            a[R + M] = O << 24 | k << 16 | k << 8 | k;
          }
        } else if (h == 16) {
          for (var M = 0; M < e; M++) {
            var k = t[P + (M << 1)];
            var O = (c(t, P + (M << d)) != g) * 255;
            a[R + M] = O << 24 | k << 16 | k << 8 | k;
          }
        }
      }
    }
    return s;
  };
  rI.decode = function (t) {
    var e;
    var r = new Uint8Array(t);
    var i = 8;
    var n = rI._bin;
    var o = n.readUshort;
    var s = n.readUint;
    var a = {
      tabs: {},
      frames: []
    };
    var l = new Uint8Array(r.length);
    var h = 0;
    var c = 0;
    var u = [137, 80, 78, 71, 13, 10, 26, 10];
    var d = 0;
    for (; d < 8; d++) {
      if (r[d] != u[d]) {
        throw "The input is not a PNG file!";
      }
    }
    while (i < r.length) {
      var f = n.readUint(r, i);
      i += 4;
      var p = n.readASCII(r, i, 4);
      i += 4;
      if (p == "IHDR") {
        rI.decode._IHDR(r, i, a);
      } else if (p == "IDAT") {
        for (var d = 0; d < f; d++) {
          l[h + d] = r[i + d];
        }
        h += f;
      } else if (p == "acTL") {
        a.tabs[p] = {
          num_frames: s(r, i),
          num_plays: s(r, i + 4)
        };
        e = new Uint8Array(r.length);
      } else if (p == "fcTL") {
        if (c != 0) {
          var g = a.frames[a.frames.length - 1];
          g.data = rI.decode._decompress(a, e.slice(0, c), g.rect.width, g.rect.height);
          c = 0;
        }
        var m = {
          x: s(r, i + 12),
          y: s(r, i + 16),
          width: s(r, i + 4),
          height: s(r, i + 8)
        };
        var v = o(r, i + 22);
        var y = {
          rect: m,
          delay: Math.round((v = o(r, i + 20) / (v == 0 ? 100 : v)) * 1000),
          dispose: r[i + 24],
          blend: r[i + 25]
        };
        a.frames.push(y);
      } else if (p == "fdAT") {
        for (var d = 0; d < f - 4; d++) {
          e[c + d] = r[i + d + 4];
        }
        c += f - 4;
      } else if (p == "pHYs") {
        a.tabs[p] = [n.readUint(r, i), n.readUint(r, i + 4), r[i + 8]];
      } else if (p == "cHRM") {
        a.tabs[p] = [];
        for (var d = 0; d < 8; d++) {
          a.tabs[p].push(n.readUint(r, i + d * 4));
        }
      } else if (p == "tEXt") {
        if (a.tabs[p] == null) {
          a.tabs[p] = {};
        }
        var b = n.nextZero(r, i);
        var A = n.readASCII(r, i, b - i);
        var S = n.readASCII(r, b + 1, i + f - b - 1);
        a.tabs[p][A] = S;
      } else if (p == "iTXt") {
        if (a.tabs[p] == null) {
          a.tabs[p] = {};
        }
        var b = 0;
        var x = i;
        b = n.nextZero(r, x);
        var A = n.readASCII(r, x, b - x);
        r[x = b + 1];
        r[x + 1];
        x += 2;
        b = n.nextZero(r, x);
        n.readASCII(r, x, b - x);
        x = b + 1;
        b = n.nextZero(r, x);
        n.readUTF8(r, x, b - x);
        x = b + 1;
        var S = n.readUTF8(r, x, f - (x - i));
        a.tabs[p][A] = S;
      } else if (p == "PLTE") {
        a.tabs[p] = n.readBytes(r, i, f);
      } else if (p == "hIST") {
        var w = a.tabs.PLTE.length / 3;
        a.tabs[p] = [];
        for (var d = 0; d < w; d++) {
          a.tabs[p].push(o(r, i + d * 2));
        }
      } else if (p == "tRNS") {
        if (a.ctype == 3) {
          a.tabs[p] = n.readBytes(r, i, f);
        } else if (a.ctype == 0) {
          a.tabs[p] = o(r, i);
        } else if (a.ctype == 2) {
          a.tabs[p] = [o(r, i), o(r, i + 2), o(r, i + 4)];
        }
      } else if (p == "gAMA") {
        a.tabs[p] = n.readUint(r, i) / 100000;
      } else if (p == "sRGB") {
        a.tabs[p] = r[i];
      } else if (p == "bKGD") {
        if (a.ctype == 0 || a.ctype == 4) {
          a.tabs[p] = [o(r, i)];
        } else if (a.ctype == 2 || a.ctype == 6) {
          a.tabs[p] = [o(r, i), o(r, i + 2), o(r, i + 4)];
        } else if (a.ctype == 3) {
          a.tabs[p] = r[i];
        }
      } else if (p == "IEND") {
        break;
      }
      i += f;
      n.readUint(r, i);
      i += 4;
    }
    if (c != 0) {
      var g = a.frames[a.frames.length - 1];
      g.data = rI.decode._decompress(a, e.slice(0, c), g.rect.width, g.rect.height);
      c = 0;
    }
    a.data = rI.decode._decompress(a, l, a.width, a.height);
    delete a.compress;
    delete a.interlace;
    delete a.filter;
    return a;
  };
  rI.decode._decompress = function (t, e, r, i) {
    Date.now();
    var n = new Uint8Array((Math.ceil(r * rI.decode._getBPP(t) / 8) + 1 + t.interlace) * i);
    e = rI.decode._inflate(e, n);
    Date.now();
    if (t.interlace == 0) {
      e = rI.decode._filterZero(e, t, 0, r, i);
    } else if (t.interlace == 1) {
      e = rI.decode._readInterlace(e, t);
    }
    return e;
  };
  rI.decode._inflate = function (t, e) {
    return rI.inflateRaw(new Uint8Array(t.buffer, 2, t.length - 6), e);
  };
  rI.inflateRaw = function () {
    var t = {
      H: {}
    };
    t.H.N = function (e, r) {
      var i;
      var n;
      var o = Uint8Array;
      var s = 0;
      var a = 0;
      var l = 0;
      var h = 0;
      var c = 0;
      var u = 0;
      var d = 0;
      var f = 0;
      var p = 0;
      if (e[0] == 3 && e[1] == 0) {
        return r || new o(0);
      }
      var g = t.H;
      var m = g.b;
      var v = g.e;
      var y = g.R;
      var b = g.n;
      var A = g.A;
      var S = g.Z;
      var x = g.m;
      var w = r == null;
      for (w && (r = new o(e.length >>> 2 << 3)); s == 0;) {
        s = m(e, p, 1);
        a = m(e, p + 1, 2);
        p += 3;
        if (a == 0) {
          if ((p & 7) != 0) {
            p += 8 - (p & 7);
          }
          var C = (p >>> 3) + 4;
          var T = e[C - 4] | e[C - 3] << 8;
          if (w) {
            r = t.H.W(r, f + T);
          }
          r.set(new o(e.buffer, e.byteOffset + C, T), f);
          p = C + T << 3;
          f += T;
          continue;
        }
        if (w) {
          r = t.H.W(r, f + 131072);
        }
        if (a == 1) {
          i = x.J;
          n = x.h;
          u = 511;
          d = 31;
        }
        if (a == 2) {
          l = v(e, p, 5) + 257;
          h = v(e, p + 5, 5) + 1;
          c = v(e, p + 10, 4) + 4;
          p += 14;
          var E = 1;
          var F = 0;
          for (; F < 38; F += 2) {
            x.Q[F] = 0;
            x.Q[F + 1] = 0;
          }
          for (var F = 0; F < c; F++) {
            var k = v(e, p + F * 3, 3);
            x.Q[(x.X[F] << 1) + 1] = k;
            if (k > E) {
              E = k;
            }
          }
          p += c * 3;
          b(x.Q, E);
          A(x.Q, E, x.u);
          i = x.w;
          n = x.d;
          p = y(x.u, (1 << E) - 1, l + h, e, p, x.v);
          var P = g.V(x.v, 0, l, x.C);
          u = (1 << P) - 1;
          var R = g.V(x.v, l, h, x.D);
          d = (1 << R) - 1;
          b(x.C, P);
          A(x.C, P, i);
          b(x.D, R);
          A(x.D, R, n);
        }
        while (true) {
          var M = i[S(e, p) & u];
          p += M & 15;
          var O = M >>> 4;
          if (O >>> 8 == 0) {
            r[f++] = O;
          } else if (O == 256) {
            break;
          } else {
            var D = f + O - 254;
            if (O > 264) {
              var I = x.q[O - 257];
              D = f + (I >>> 3) + v(e, p, I & 7);
              p += I & 7;
            }
            var L = n[S(e, p) & d];
            p += L & 15;
            var N = L >>> 4;
            var B = x.c[N];
            var j = (B >>> 4) + m(e, p, B & 15);
            for (p += B & 15; f < D;) {
              r[f] = r[f++ - j];
              r[f] = r[f++ - j];
              r[f] = r[f++ - j];
              r[f] = r[f++ - j];
            }
            f = D;
          }
        }
      }
      if (r.length == f) {
        return r;
      } else {
        return r.slice(0, f);
      }
    };
    t.H.W = function (t, e) {
      var r = t.length;
      if (e <= r) {
        return t;
      }
      var i = new Uint8Array(r << 1);
      i.set(t, 0);
      return i;
    };
    t.H.R = function (e, r, i, n, o, s) {
      var a = t.H.e;
      var l = t.H.Z;
      var h = 0;
      while (h < i) {
        var c = e[l(n, o) & r];
        o += c & 15;
        var u = c >>> 4;
        if (u <= 15) {
          s[h] = u;
          h++;
        } else {
          var d = 0;
          var f = 0;
          if (u == 16) {
            f = 3 + a(n, o, 2);
            o += 2;
            d = s[h - 1];
          } else if (u == 17) {
            f = 3 + a(n, o, 3);
            o += 3;
          } else if (u == 18) {
            f = 11 + a(n, o, 7);
            o += 7;
          }
          for (var p = h + f; h < p;) {
            s[h] = d;
            h++;
          }
        }
      }
      return o;
    };
    t.H.V = function (t, e, r, i) {
      var n = 0;
      var o = 0;
      var s = i.length >>> 1;
      while (o < r) {
        var a = t[o + e];
        i[o << 1] = 0;
        i[(o << 1) + 1] = a;
        if (a > n) {
          n = a;
        }
        o++;
      }
      while (o < s) {
        i[o << 1] = 0;
        i[(o << 1) + 1] = 0;
        o++;
      }
      return n;
    };
    t.H.n = function (e, r) {
      var i;
      var n;
      var o;
      var s;
      var a;
      var l = t.H.m;
      var h = e.length;
      var c = l.j;
      var s = 0;
      for (; s <= r; s++) {
        c[s] = 0;
      }
      for (s = 1; s < h; s += 2) {
        c[e[s]]++;
      }
      var u = l.K;
      n = 1;
      i = 0;
      c[0] = 0;
      for (; n <= r; n++) {
        i = i + c[n - 1] << 1;
        u[n] = i;
      }
      for (o = 0; o < h; o += 2) {
        if ((a = e[o + 1]) != 0) {
          e[o] = u[a];
          u[a]++;
        }
      }
    };
    t.H.A = function (e, r, i) {
      var n = e.length;
      var o = t.H.m.r;
      var s = 0;
      for (; s < n; s += 2) {
        if (e[s + 1] != 0) {
          var a = s >> 1;
          var l = e[s + 1];
          var h = a << 4 | l;
          var c = r - l;
          var u = e[s] << c;
          var d = u + (1 << c);
          while (u != d) {
            i[o[u] >>> 15 - r] = h;
            u++;
          }
        }
      }
    };
    t.H.l = function (e, r) {
      var i = t.H.m.r;
      var n = 15 - r;
      var o = 0;
      for (; o < e.length; o += 2) {
        var s = e[o] << r - e[o + 1];
        e[o] = i[s] >>> n;
      }
    };
    t.H.M = function (t, e, r) {
      r <<= e & 7;
      var i = e >>> 3;
      t[i] |= r;
      t[i + 1] |= r >>> 8;
    };
    t.H.I = function (t, e, r) {
      r <<= e & 7;
      var i = e >>> 3;
      t[i] |= r;
      t[i + 1] |= r >>> 8;
      t[i + 2] |= r >>> 16;
    };
    t.H.e = function (t, e, r) {
      return (t[e >>> 3] | t[(e >>> 3) + 1] << 8) >>> (e & 7) & (1 << r) - 1;
    };
    t.H.b = function (t, e, r) {
      return (t[e >>> 3] | t[(e >>> 3) + 1] << 8 | t[(e >>> 3) + 2] << 16) >>> (e & 7) & (1 << r) - 1;
    };
    t.H.Z = function (t, e) {
      return (t[e >>> 3] | t[(e >>> 3) + 1] << 8 | t[(e >>> 3) + 2] << 16) >>> (e & 7);
    };
    t.H.i = function (t, e) {
      return (t[e >>> 3] | t[(e >>> 3) + 1] << 8 | t[(e >>> 3) + 2] << 16 | t[(e >>> 3) + 3] << 24) >>> (e & 7);
    };
    t.H.m = function () {
      var t = Uint16Array;
      var e = Uint32Array;
      return {
        K: new t(16),
        j: new t(16),
        X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
        T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
        q: new t(32),
        p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
        z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
        c: new e(32),
        J: new t(512),
        _: [],
        h: new t(32),
        $: [],
        w: new t(32768),
        C: [],
        v: [],
        d: new t(32768),
        D: [],
        u: new t(512),
        Q: [],
        r: new t(32768),
        s: new e(286),
        Y: new e(30),
        a: new e(19),
        t: new e(15000),
        k: new t(65536),
        g: new t(32768)
      };
    }();
    (function () {
      var e = t.H.m;
      var r = 32768;
      var i = 0;
      for (; i < r; i++) {
        var n = i;
        n = ((n = ((n = ((n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1) & -858993460) >>> 2 | (n & 858993459) << 2) & -252645136) >>> 4 | (n & 252645135) << 4) & -16711936) >>> 8 | (n & 16711935) << 8;
        e.r[i] = (n >>> 16 | n << 16) >>> 17;
      }
      function o(t, e, r) {
        while (e-- != 0) {
          t.push(0, r);
        }
      }
      for (var i = 0; i < 32; i++) {
        e.q[i] = e.S[i] << 3 | e.T[i];
        e.c[i] = e.p[i] << 4 | e.z[i];
      }
      o(e._, 144, 8);
      o(e._, 112, 9);
      o(e._, 24, 7);
      o(e._, 8, 8);
      t.H.n(e._, 9);
      t.H.A(e._, 9, e.J);
      t.H.l(e._, 9);
      o(e.$, 32, 5);
      t.H.n(e.$, 5);
      t.H.A(e.$, 5, e.h);
      t.H.l(e.$, 5);
      o(e.Q, 19, 0);
      o(e.C, 286, 0);
      o(e.D, 30, 0);
      o(e.v, 320, 0);
    })();
    return t.H.N;
  }();
  rI.decode._readInterlace = function (t, e) {
    var r = e.width;
    var i = e.height;
    var n = rI.decode._getBPP(e);
    var o = n >> 3;
    var s = Math.ceil(r * n / 8);
    var a = new Uint8Array(i * s);
    var l = 0;
    var h = [0, 0, 4, 0, 2, 0, 1];
    var c = [0, 4, 0, 2, 0, 1, 0];
    var u = [8, 8, 8, 4, 4, 2, 2];
    var d = [8, 8, 4, 4, 2, 2, 1];
    var f = 0;
    while (f < 7) {
      var p = u[f];
      var g = d[f];
      var m = 0;
      var v = 0;
      var y = h[f];
      while (y < i) {
        y += p;
        v++;
      }
      for (var b = c[f]; b < r;) {
        b += g;
        m++;
      }
      var A = Math.ceil(m * n / 8);
      rI.decode._filterZero(t, e, l, m, v);
      var S = 0;
      var x = h[f];
      while (x < i) {
        var w = c[f];
        var C = l + S * A << 3;
        while (w < r) {
          if (n == 1) {
            var T = t[C >> 3];
            T = T >> 7 - (C & 7) & 1;
            a[x * s + (w >> 3)] |= T << 7 - ((w & 7) << 0);
          }
          if (n == 2) {
            var T = t[C >> 3];
            T = T >> 6 - (C & 7) & 3;
            a[x * s + (w >> 2)] |= T << 6 - ((w & 3) << 1);
          }
          if (n == 4) {
            var T = t[C >> 3];
            T = T >> 4 - (C & 7) & 15;
            a[x * s + (w >> 1)] |= T << 4 - ((w & 1) << 2);
          }
          if (n >= 8) {
            var E = x * s + w * o;
            var F = 0;
            for (; F < o; F++) {
              a[E + F] = t[(C >> 3) + F];
            }
          }
          C += n;
          w += g;
        }
        S++;
        x += p;
      }
      if (m * v != 0) {
        l += v * (1 + A);
      }
      f += 1;
    }
    return a;
  };
  rI.decode._getBPP = function (t) {
    return [1, null, 3, 1, 2, null, 4][t.ctype] * t.depth;
  };
  rI.decode._filterZero = function (t, e, r, i, n) {
    var o = rI.decode._getBPP(e);
    var s = Math.ceil(i * o / 8);
    var a = rI.decode._paeth;
    o = Math.ceil(o / 8);
    var l = 0;
    var h = 1;
    var c = t[r];
    var u = 0;
    if (c > 1) {
      t[r] = [0, 0, 1][c - 2];
    }
    if (c == 3) {
      for (u = o; u < s; u++) {
        t[u + 1] = t[u + 1] + (t[u + 1 - o] >>> 1) & 255;
      }
    }
    for (var d = 0; d < n; d++) {
      c = t[(h = (l = r + d * s) + d + 1) - 1];
      u = 0;
      if (c == 0) {
        for (; u < s; u++) {
          t[l + u] = t[h + u];
        }
      } else if (c == 1) {
        for (; u < o; u++) {
          t[l + u] = t[h + u];
        }
        for (; u < s; u++) {
          t[l + u] = t[h + u] + t[l + u - o];
        }
      } else if (c == 2) {
        for (; u < s; u++) {
          t[l + u] = t[h + u] + t[l + u - s];
        }
      } else if (c == 3) {
        for (; u < o; u++) {
          t[l + u] = t[h + u] + (t[l + u - s] >>> 1);
        }
        for (; u < s; u++) {
          t[l + u] = t[h + u] + (t[l + u - s] + t[l + u - o] >>> 1);
        }
      } else {
        for (; u < o; u++) {
          t[l + u] = t[h + u] + a(0, t[l + u - s], 0);
        }
        for (; u < s; u++) {
          t[l + u] = t[h + u] + a(t[l + u - o], t[l + u - s], t[l + u - o - s]);
        }
      }
    }
    return t;
  };
  rI.decode._paeth = function (t, e, r) {
    var i = t + e - r;
    var n = i - t;
    var o = i - e;
    var s = i - r;
    if (n * n <= o * o && n * n <= s * s) {
      return t;
    } else if (o * o <= s * s) {
      return e;
    } else {
      return r;
    }
  };
  rI.decode._IHDR = function (t, e, r) {
    var i = rI._bin;
    r.width = i.readUint(t, e);
    e += 4;
    r.height = i.readUint(t, e);
    e += 4;
    r.depth = t[e];
    e++;
    r.ctype = t[e];
    e++;
    r.compress = t[e];
    e++;
    r.filter = t[e];
    e++;
    r.interlace = t[e];
    e++;
  };
  rI._bin = {
    nextZero: function (t, e) {
      while (t[e] != 0) {
        e++;
      }
      return e;
    },
    readUshort: function (t, e) {
      return t[e] << 8 | t[e + 1];
    },
    writeUshort: function (t, e, r) {
      t[e] = r >> 8 & 255;
      t[e + 1] = r & 255;
    },
    readUint: function (t, e) {
      return t[e] * 16777216 + (t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]);
    },
    writeUint: function (t, e, r) {
      t[e] = r >> 24 & 255;
      t[e + 1] = r >> 16 & 255;
      t[e + 2] = r >> 8 & 255;
      t[e + 3] = r & 255;
    },
    readASCII: function (t, e, r) {
      var i = "";
      var n = 0;
      for (; n < r; n++) {
        i += String.fromCharCode(t[e + n]);
      }
      return i;
    },
    writeASCII: function (t, e, r) {
      for (var i = 0; i < r.length; i++) {
        t[e + i] = r.charCodeAt(i);
      }
    },
    readBytes: function (t, e, r) {
      var i = [];
      var n = 0;
      for (; n < r; n++) {
        i.push(t[e + n]);
      }
      return i;
    },
    pad: function (t) {
      if (t.length < 2) {
        return "0" + t;
      } else {
        return t;
      }
    },
    readUTF8: function (t, e, r) {
      var i;
      var n = "";
      var o = 0;
      for (; o < r; o++) {
        n += "%" + rI._bin.pad(t[e + o].toString(16));
      }
      try {
        i = decodeURIComponent(n);
      } catch (i) {
        return rI._bin.readASCII(t, e, r);
      }
      return i;
    }
  };
  rI._copyTile = function (t, e, r, i, n, o, s, a, l) {
    var h = Math.min(e, n);
    var c = Math.min(r, o);
    var u = 0;
    var d = 0;
    var f = 0;
    for (; f < c; f++) {
      for (var p = 0; p < h; p++) {
        if (s >= 0 && a >= 0) {
          u = f * e + p << 2;
          d = (a + f) * n + s + p << 2;
        } else {
          u = (-a + f) * e - s + p << 2;
          d = f * n + p << 2;
        }
        if (l == 0) {
          i[d] = t[u];
          i[d + 1] = t[u + 1];
          i[d + 2] = t[u + 2];
          i[d + 3] = t[u + 3];
        } else if (l == 1) {
          var g = t[u + 3] * (1 / 255);
          var m = t[u] * g;
          var v = t[u + 1] * g;
          var y = t[u + 2] * g;
          var b = i[d + 3] * (1 / 255);
          var A = i[d] * b;
          var S = i[d + 1] * b;
          var x = i[d + 2] * b;
          var w = 1 - g;
          var C = g + b * w;
          var T = C == 0 ? 0 : 1 / C;
          i[d + 3] = C * 255;
          i[d + 0] = (m + A * w) * T;
          i[d + 1] = (v + S * w) * T;
          i[d + 2] = (y + x * w) * T;
        } else if (l == 2) {
          var g = t[u + 3];
          var m = t[u];
          var v = t[u + 1];
          var y = t[u + 2];
          var b = i[d + 3];
          var A = i[d];
          var S = i[d + 1];
          var x = i[d + 2];
          if (g == b && m == A && v == S && y == x) {
            i[d] = 0;
            i[d + 1] = 0;
            i[d + 2] = 0;
            i[d + 3] = 0;
          } else {
            i[d] = m;
            i[d + 1] = v;
            i[d + 2] = y;
            i[d + 3] = g;
          }
        } else if (l == 3) {
          var g = t[u + 3];
          var m = t[u];
          var v = t[u + 1];
          var y = t[u + 2];
          var b = i[d + 3];
          var A = i[d];
          var S = i[d + 1];
          var x = i[d + 2];
          if (g == b && m == A && v == S && y == x) {
            continue;
          }
          if (g < 220 && b > 20) {
            return false;
          }
        }
      }
    }
    return true;
  };
  rI.encode = function (t, e, r, i, n, o, s) {
    if (i == null) {
      i = 0;
    }
    if (s == null) {
      s = false;
    }
    var a = rI.encode.compress(t, e, r, i, [false, false, false, 0, s]);
    rI.encode.compressPNG(a, -1);
    return rI.encode._main(a, e, r, n, o);
  };
  rI.encodeLL = function (t, e, r, i, n, o, s, a) {
    var l = {
      ctype: 0 + (i != 1) * 2 + (n != 0) * 4,
      depth: o,
      frames: []
    };
    Date.now();
    var h = (i + n) * o;
    var c = h * e;
    var u = 0;
    for (; u < t.length; u++) {
      l.frames.push({
        rect: {
          x: 0,
          y: 0,
          width: e,
          height: r
        },
        img: new Uint8Array(t[u]),
        blend: 0,
        dispose: 1,
        bpp: Math.ceil(h / 8),
        bpl: Math.ceil(c / 8)
      });
    }
    rI.encode.compressPNG(l, 0, true);
    return rI.encode._main(l, e, r, s, a);
  };
  rI.encode._main = function (t, e, r, i, n) {
    if (n == null) {
      n = {};
    }
    var o = rI.crc.crc;
    var s = rI._bin.writeUint;
    var a = rI._bin.writeUshort;
    var l = rI._bin.writeASCII;
    var h = 8;
    var c = t.frames.length > 1;
    var u = false;
    var d = 33 + !!c * 20;
    if (n.sRGB != null) {
      d += 13;
    }
    if (n.pHYs != null) {
      d += 21;
    }
    if (t.ctype == 3) {
      var f = t.plte.length;
      var p = 0;
      for (; p < f; p++) {
        if (t.plte[p] >>> 24 != 255) {
          u = true;
        }
      }
      d += 8 + f * 3 + 4 + (u ? 8 + +f + 4 : 0);
    }
    for (var g = 0; g < t.frames.length; g++) {
      var m = t.frames[g];
      if (c) {
        d += 38;
      }
      d += m.cimg.length + 12;
      if (g != 0) {
        d += 4;
      }
    }
    var v = new Uint8Array(d += 12);
    var y = [137, 80, 78, 71, 13, 10, 26, 10];
    var p = 0;
    for (; p < 8; p++) {
      v[p] = y[p];
    }
    s(v, h, 13);
    l(v, h += 4, "IHDR");
    s(v, h += 4, e);
    s(v, h += 4, r);
    v[h += 4] = t.depth;
    v[++h] = t.ctype;
    v[++h] = 0;
    v[++h] = 0;
    v[++h] = 0;
    s(v, ++h, o(v, h - 17, 17));
    h += 4;
    if (n.sRGB != null) {
      s(v, h, 1);
      l(v, h += 4, "sRGB");
      v[h += 4] = n.sRGB;
      s(v, ++h, o(v, h - 5, 5));
      h += 4;
    }
    if (n.pHYs != null) {
      s(v, h, 9);
      l(v, h += 4, "pHYs");
      s(v, h += 4, n.pHYs[0]);
      s(v, h += 4, n.pHYs[1]);
      v[h += 4] = n.pHYs[2];
      s(v, ++h, o(v, h - 13, 13));
      h += 4;
    }
    if (c) {
      s(v, h, 8);
      l(v, h += 4, "acTL");
      s(v, h += 4, t.frames.length);
      s(v, h += 4, n.loop ?? 0);
      s(v, h += 4, o(v, h - 12, 12));
      h += 4;
    }
    if (t.ctype == 3) {
      var f = t.plte.length;
      s(v, h, f * 3);
      l(v, h += 4, "PLTE");
      h += 4;
      for (var p = 0; p < f; p++) {
        var b = p * 3;
        var A = t.plte[p];
        var S = A & 255;
        var x = A >>> 8 & 255;
        var w = A >>> 16 & 255;
        v[h + b + 0] = S;
        v[h + b + 1] = x;
        v[h + b + 2] = w;
      }
      s(v, h += f * 3, o(v, h - f * 3 - 4, f * 3 + 4));
      h += 4;
      if (u) {
        s(v, h, f);
        l(v, h += 4, "tRNS");
        h += 4;
        for (var p = 0; p < f; p++) {
          v[h + p] = t.plte[p] >>> 24 & 255;
        }
        s(v, h += f, o(v, h - f - 4, f + 4));
        h += 4;
      }
    }
    var C = 0;
    var g = 0;
    for (; g < t.frames.length; g++) {
      var m = t.frames[g];
      if (c) {
        s(v, h, 26);
        l(v, h += 4, "fcTL");
        s(v, h += 4, C++);
        s(v, h += 4, m.rect.width);
        s(v, h += 4, m.rect.height);
        s(v, h += 4, m.rect.x);
        s(v, h += 4, m.rect.y);
        a(v, h += 4, i[g]);
        a(v, h += 2, 1000);
        v[h += 2] = m.dispose;
        v[++h] = m.blend;
        s(v, ++h, o(v, h - 30, 30));
        h += 4;
      }
      var T = m.cimg;
      var f = T.length;
      s(v, h, f + (g != 0) * 4);
      var E = h += 4;
      l(v, h, g == 0 ? "IDAT" : "fdAT");
      h += 4;
      if (g != 0) {
        s(v, h, C++);
        h += 4;
      }
      v.set(T, h);
      s(v, h += f, o(v, E, h - E));
      h += 4;
    }
    s(v, h, 0);
    l(v, h += 4, "IEND");
    s(v, h += 4, o(v, h - 4, 4));
    h += 4;
    return v.buffer;
  };
  rI.encode.compressPNG = function (t, e, r) {
    for (var i = 0; i < t.frames.length; i++) {
      var n = t.frames[i];
      n.rect.width;
      var o = n.rect.height;
      var s = new Uint8Array(o * n.bpl + o);
      n.cimg = rI.encode._filterZero(n.img, o, n.bpp, n.bpl, s, e, r);
    }
  };
  rI.encode.compress = function (t, e, r, i, n) {
    var o = n[0];
    var s = n[1];
    var a = n[2];
    var l = n[3];
    var h = n[4];
    var c = 6;
    var u = 8;
    var d = 255;
    var f = 0;
    for (; f < t.length; f++) {
      var p = new Uint8Array(t[f]);
      var g = p.length;
      var m = 0;
      for (; m < g; m += 4) {
        d &= p[m + 3];
      }
    }
    var v = d != 255;
    var y = rI.encode.framize(t, e, r, o, s, a);
    var b = {};
    var A = [];
    var S = [];
    if (i != 0) {
      var x = [];
      var m = 0;
      for (; m < y.length; m++) {
        x.push(y[m].img.buffer);
      }
      var w = rI.encode.concatRGBA(x);
      var C = rI.quantize(w, i);
      var T = 0;
      var E = new Uint8Array(C.abuf);
      var m = 0;
      for (; m < y.length; m++) {
        var F = y[m].img;
        var k = F.length;
        S.push(new Uint8Array(C.inds.buffer, T >> 2, k >> 2));
        for (var f = 0; f < k; f += 4) {
          F[f] = E[T + f];
          F[f + 1] = E[T + f + 1];
          F[f + 2] = E[T + f + 2];
          F[f + 3] = E[T + f + 3];
        }
        T += k;
      }
      for (var m = 0; m < C.plte.length; m++) {
        A.push(C.plte[m].est.rgba);
      }
    } else {
      for (var f = 0; f < y.length; f++) {
        var P = y[f];
        var R = new Uint32Array(P.img.buffer);
        var M = P.rect.width;
        var g = R.length;
        var O = new Uint8Array(g);
        S.push(O);
        for (var m = 0; m < g; m++) {
          var D = R[m];
          if (m != 0 && D == R[m - 1]) {
            O[m] = O[m - 1];
          } else if (m > M && D == R[m - M]) {
            O[m] = O[m - M];
          } else {
            var I = b[D];
            if (I == null && (b[D] = I = A.length, A.push(D), A.length >= 300)) {
              break;
            }
            O[m] = I;
          }
        }
      }
    }
    var L = A.length;
    if (L <= 256 && h == false) {
      u = Math.max(u = L <= 2 ? 1 : L <= 4 ? 2 : L <= 16 ? 4 : 8, l);
    }
    for (var f = 0; f < y.length; f++) {
      var P = y[f];
      P.rect.x;
      P.rect.y;
      var M = P.rect.width;
      var N = P.rect.height;
      var B = P.img;
      new Uint32Array(B.buffer);
      var j = M * 4;
      var _ = 4;
      if (L <= 256 && h == false) {
        var U = new Uint8Array((j = Math.ceil(u * M / 8)) * N);
        var z = S[f];
        var V = 0;
        for (; V < N; V++) {
          var m = V * j;
          var W = V * M;
          if (u == 8) {
            for (var G = 0; G < M; G++) {
              U[m + G] = z[W + G];
            }
          } else if (u == 4) {
            for (var G = 0; G < M; G++) {
              U[m + (G >> 1)] |= z[W + G] << 4 - (G & 1) * 4;
            }
          } else if (u == 2) {
            for (var G = 0; G < M; G++) {
              U[m + (G >> 2)] |= z[W + G] << 6 - (G & 3) * 2;
            }
          } else if (u == 1) {
            for (var G = 0; G < M; G++) {
              U[m + (G >> 3)] |= z[W + G] << 7 - (G & 7) * 1;
            }
          }
        }
        B = U;
        c = 3;
        _ = 1;
      } else if (v == false && y.length == 1) {
        var U = new Uint8Array(M * N * 3);
        var q = M * N;
        var m = 0;
        for (; m < q; m++) {
          var F = m * 3;
          var H = m * 4;
          U[F] = B[H];
          U[F + 1] = B[H + 1];
          U[F + 2] = B[H + 2];
        }
        B = U;
        c = 2;
        _ = 3;
        j = M * 3;
      }
      P.img = B;
      P.bpl = j;
      P.bpp = _;
    }
    return {
      ctype: c,
      depth: u,
      plte: A,
      frames: y
    };
  };
  rI.encode.framize = function (t, e, r, i, n, o) {
    var s = [];
    var a = 0;
    for (; a < t.length; a++) {
      var l;
      var h = new Uint8Array(t[a]);
      var c = new Uint32Array(h.buffer);
      var u = 0;
      var d = 0;
      var f = e;
      var p = r;
      var g = +!!i;
      if (a != 0) {
        var m = o || i || a == 1 || s[a - 2].dispose != 0 ? 1 : 2;
        var v = 0;
        var y = 1000000000;
        var b = 0;
        for (; b < m; b++) {
          var A = new Uint8Array(t[a - 1 - b]);
          var S = new Uint32Array(t[a - 1 - b]);
          var x = e;
          var w = r;
          var C = -1;
          var T = -1;
          var E = 0;
          for (; E < r; E++) {
            for (var F = 0; F < e; F++) {
              var k = E * e + F;
              if (c[k] != S[k]) {
                if (F < x) {
                  x = F;
                }
                if (F > C) {
                  C = F;
                }
                if (E < w) {
                  w = E;
                }
                if (E > T) {
                  T = E;
                }
              }
            }
          }
          if (C == -1) {
            x = w = C = T = 0;
          }
          if (n) {
            if ((x & 1) == 1) {
              x--;
            }
            if ((w & 1) == 1) {
              w--;
            }
          }
          var P = (C - x + 1) * (T - w + 1);
          if (P < y) {
            y = P;
            v = b;
            u = x;
            d = w;
            f = C - x + 1;
            p = T - w + 1;
          }
        }
        var A = new Uint8Array(t[a - 1 - v]);
        if (v == 1) {
          s[a - 1].dispose = 2;
        }
        l = new Uint8Array(f * p * 4);
        rI._copyTile(A, e, r, l, f, p, -u, -d, 0);
        if ((g = +!!rI._copyTile(h, e, r, l, f, p, -u, -d, 3)) == 1) {
          rI.encode._prepareDiff(h, e, r, l, {
            x: u,
            y: d,
            width: f,
            height: p
          });
        } else {
          rI._copyTile(h, e, r, l, f, p, -u, -d, 0);
        }
      } else {
        l = h.slice(0);
      }
      s.push({
        rect: {
          x: u,
          y: d,
          width: f,
          height: p
        },
        img: l,
        blend: g,
        dispose: 0
      });
    }
    if (i) {
      for (var a = 0; a < s.length; a++) {
        var R = s[a];
        if (R.blend != 1) {
          var M = R.rect;
          var O = s[a - 1].rect;
          var D = Math.min(M.x, O.x);
          var I = Math.min(M.y, O.y);
          var L = Math.max(M.x + M.width, O.x + O.width);
          var N = Math.max(M.y + M.height, O.y + O.height);
          var B = {
            x: D,
            y: I,
            width: L - D,
            height: N - I
          };
          s[a - 1].dispose = 1;
          if (a - 1 != 0) {
            rI.encode._updateFrame(t, e, r, s, a - 1, B, n);
          }
          rI.encode._updateFrame(t, e, r, s, a, B, n);
        }
      }
    }
    var j = 0;
    if (t.length != 1) {
      for (var k = 0; k < s.length; k++) {
        var R = s[k];
        j += R.rect.width * R.rect.height;
      }
    }
    return s;
  };
  rI.encode._updateFrame = function (t, e, r, i, n, o, s) {
    var a = Uint8Array;
    var l = Uint32Array;
    var h = new a(t[n - 1]);
    var c = new l(t[n - 1]);
    var u = n + 1 < t.length ? new a(t[n + 1]) : null;
    var d = new a(t[n]);
    var f = new l(d.buffer);
    var p = e;
    var g = r;
    var m = -1;
    var v = -1;
    var y = 0;
    for (; y < o.height; y++) {
      for (var b = 0; b < o.width; b++) {
        var A = o.x + b;
        var S = o.y + y;
        var x = S * e + A;
        var w = f[x];
        if (w != 0 && (i[n - 1].dispose != 0 || c[x] != w || u != null && u[x * 4 + 3] == 0)) {
          if (A < p) {
            p = A;
          }
          if (A > m) {
            m = A;
          }
          if (S < g) {
            g = S;
          }
          if (S > v) {
            v = S;
          }
        }
      }
    }
    if (m == -1) {
      p = g = m = v = 0;
    }
    if (s) {
      if ((p & 1) == 1) {
        p--;
      }
      if ((g & 1) == 1) {
        g--;
      }
    }
    o = {
      x: p,
      y: g,
      width: m - p + 1,
      height: v - g + 1
    };
    var C = i[n];
    C.rect = o;
    C.blend = 1;
    C.img = new Uint8Array(o.width * o.height * 4);
    if (i[n - 1].dispose == 0) {
      rI._copyTile(h, e, r, C.img, o.width, o.height, -o.x, -o.y, 0);
      rI.encode._prepareDiff(d, e, r, C.img, o);
    } else {
      rI._copyTile(d, e, r, C.img, o.width, o.height, -o.x, -o.y, 0);
    }
  };
  rI.encode._prepareDiff = function (t, e, r, i, n) {
    rI._copyTile(t, e, r, i, n.width, n.height, -n.x, -n.y, 2);
  };
  rI.encode._filterZero = function (t, e, r, i, n, o, s) {
    var a = [];
    var l = [0, 1, 2, 3, 4];
    if (o != -1) {
      l = [o];
    } else if (e * i > 500000 || r == 1) {
      l = [0];
    }
    if (s) {
      d = {
        level: 0
      };
    }
    var h = s && UZIP != null ? UZIP : tj;
    var c = 0;
    for (; c < l.length; c++) {
      for (var u = 0; u < e; u++) {
        rI.encode._filterLine(n, t, u, i, r, l[c]);
      }
      a.push(h.deflate(n, d));
    }
    var d;
    var f;
    var p = 1000000000;
    var c = 0;
    for (; c < a.length; c++) {
      if (a[c].length < p) {
        f = c;
        p = a[c].length;
      }
    }
    return a[f];
  };
  rI.encode._filterLine = function (t, e, r, i, n, o) {
    var s = r * i;
    var a = s + r;
    var l = rI.decode._paeth;
    t[a] = o;
    a++;
    if (o == 0) {
      if (i < 500) {
        for (var h = 0; h < i; h++) {
          t[a + h] = e[s + h];
        }
      } else {
        t.set(new Uint8Array(e.buffer, s, i), a);
      }
    } else if (o == 1) {
      for (var h = 0; h < n; h++) {
        t[a + h] = e[s + h];
      }
      for (var h = n; h < i; h++) {
        t[a + h] = e[s + h] - e[s + h - n] + 256 & 255;
      }
    } else if (r == 0) {
      for (var h = 0; h < n; h++) {
        t[a + h] = e[s + h];
      }
      if (o == 2) {
        for (var h = n; h < i; h++) {
          t[a + h] = e[s + h];
        }
      }
      if (o == 3) {
        for (var h = n; h < i; h++) {
          t[a + h] = e[s + h] - (e[s + h - n] >> 1) + 256 & 255;
        }
      }
      if (o == 4) {
        for (var h = n; h < i; h++) {
          t[a + h] = e[s + h] - l(e[s + h - n], 0, 0) + 256 & 255;
        }
      }
    } else {
      if (o == 2) {
        for (var h = 0; h < i; h++) {
          t[a + h] = e[s + h] + 256 - e[s + h - i] & 255;
        }
      }
      if (o == 3) {
        for (var h = 0; h < n; h++) {
          t[a + h] = e[s + h] + 256 - (e[s + h - i] >> 1) & 255;
        }
        for (var h = n; h < i; h++) {
          t[a + h] = e[s + h] + 256 - (e[s + h - i] + e[s + h - n] >> 1) & 255;
        }
      }
      if (o == 4) {
        for (var h = 0; h < n; h++) {
          t[a + h] = e[s + h] + 256 - l(0, e[s + h - i], 0) & 255;
        }
        for (var h = n; h < i; h++) {
          t[a + h] = e[s + h] + 256 - l(e[s + h - n], e[s + h - i], e[s + h - n - i]) & 255;
        }
      }
    }
  };
  rI.crc = {
    table: function () {
      var t = new Uint32Array(256);
      var e = 0;
      for (; e < 256; e++) {
        var r = e;
        var i = 0;
        for (; i < 8; i++) {
          if (r & 1) {
            r = r >>> 1 ^ -306674912;
          } else {
            r >>>= 1;
          }
        }
        t[e] = r;
      }
      return t;
    }(),
    update: function (t, e, r, i) {
      for (var n = 0; n < i; n++) {
        t = rI.crc.table[(t ^ e[r + n]) & 255] ^ t >>> 8;
      }
      return t;
    },
    crc: function (t, e, r) {
      return rI.crc.update(4294967295, t, e, r) ^ -1;
    }
  };
  rI.quantize = function (t, e) {
    var r = new Uint8Array(t);
    var i = r.slice(0);
    var n = new Uint32Array(i.buffer);
    var o = rI.quantize.getKDtree(i, e);
    var s = o[0];
    var a = o[1];
    rI.quantize.planeDst;
    var l = r;
    var h = n;
    var c = l.length;
    var u = new Uint8Array(r.length >> 2);
    var d = 0;
    for (; d < c; d += 4) {
      var f = l[d] * (1 / 255);
      var p = l[d + 1] * (1 / 255);
      var g = l[d + 2] * (1 / 255);
      var m = l[d + 3] * (1 / 255);
      var v = rI.quantize.getNearest(s, f, p, g, m);
      u[d >> 2] = v.ind;
      h[d >> 2] = v.est.rgba;
    }
    return {
      abuf: i.buffer,
      inds: u,
      plte: a
    };
  };
  rI.quantize.getKDtree = function (t, e, r) {
    if (r == null) {
      r = 0.0001;
    }
    var i = new Uint32Array(t.buffer);
    var n = {
      i0: 0,
      i1: t.length,
      bst: null,
      est: null,
      tdst: 0,
      left: null,
      right: null
    };
    n.bst = rI.quantize.stats(t, n.i0, n.i1);
    n.est = rI.quantize.estats(n.bst);
    for (var o = [n]; o.length < e;) {
      var s = 0;
      var a = 0;
      var l = 0;
      for (; l < o.length; l++) {
        if (o[l].est.L > s) {
          s = o[l].est.L;
          a = l;
        }
      }
      if (s < r) {
        break;
      }
      var h = o[a];
      var c = rI.quantize.splitPixels(t, i, h.i0, h.i1, h.est.e, h.est.eMq255);
      if (h.i0 >= c || h.i1 <= c) {
        h.est.L = 0;
        continue;
      }
      var u = {
        i0: h.i0,
        i1: c,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      u.bst = rI.quantize.stats(t, u.i0, u.i1);
      u.est = rI.quantize.estats(u.bst);
      var d = {
        i0: c,
        i1: h.i1,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      d.bst = {
        R: [],
        m: [],
        N: h.bst.N - u.bst.N
      };
      for (var l = 0; l < 16; l++) {
        d.bst.R[l] = h.bst.R[l] - u.bst.R[l];
      }
      for (var l = 0; l < 4; l++) {
        d.bst.m[l] = h.bst.m[l] - u.bst.m[l];
      }
      d.est = rI.quantize.estats(d.bst);
      h.left = u;
      h.right = d;
      o[a] = u;
      o.push(d);
    }
    o.sort(function (t, e) {
      return e.bst.N - t.bst.N;
    });
    for (var l = 0; l < o.length; l++) {
      o[l].ind = l;
    }
    return [n, o];
  };
  rI.quantize.getNearest = function (t, e, r, i, n) {
    if (t.left == null) {
      t.tdst = rI.quantize.dist(t.est.q, e, r, i, n);
      return t;
    }
    var o = rI.quantize.planeDst(t.est, e, r, i, n);
    var s = t.left;
    var a = t.right;
    if (o > 0) {
      s = t.right;
      a = t.left;
    }
    var l = rI.quantize.getNearest(s, e, r, i, n);
    if (l.tdst <= o * o) {
      return l;
    }
    var h = rI.quantize.getNearest(a, e, r, i, n);
    if (h.tdst < l.tdst) {
      return h;
    } else {
      return l;
    }
  };
  rI.quantize.planeDst = function (t, e, r, i, n) {
    var o = t.e;
    return o[0] * e + o[1] * r + o[2] * i + o[3] * n - t.eMq;
  };
  rI.quantize.dist = function (t, e, r, i, n) {
    var o = e - t[0];
    var s = r - t[1];
    var a = i - t[2];
    var l = n - t[3];
    return o * o + s * s + a * a + l * l;
  };
  rI.quantize.splitPixels = function (t, e, r, i, n, o) {
    var s = rI.quantize.vecDot;
    for (i -= 4; r < i;) {
      while (s(t, r, n) <= o) {
        r += 4;
      }
      while (s(t, i, n) > o) {
        i -= 4;
      }
      if (r >= i) {
        break;
      }
      var a = e[r >> 2];
      e[r >> 2] = e[i >> 2];
      e[i >> 2] = a;
      r += 4;
      i -= 4;
    }
    while (s(t, r, n) > o) {
      r -= 4;
    }
    return r + 4;
  };
  rI.quantize.vecDot = function (t, e, r) {
    return t[e] * r[0] + t[e + 1] * r[1] + t[e + 2] * r[2] + t[e + 3] * r[3];
  };
  rI.quantize.stats = function (t, e, r) {
    var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var n = [0, 0, 0, 0];
    var o = r - e >> 2;
    var s = e;
    for (; s < r; s += 4) {
      var a = t[s] * (1 / 255);
      var l = t[s + 1] * (1 / 255);
      var h = t[s + 2] * (1 / 255);
      var c = t[s + 3] * (1 / 255);
      n[0] += a;
      n[1] += l;
      n[2] += h;
      n[3] += c;
      i[0] += a * a;
      i[1] += a * l;
      i[2] += a * h;
      i[3] += a * c;
      i[5] += l * l;
      i[6] += l * h;
      i[7] += l * c;
      i[10] += h * h;
      i[11] += h * c;
      i[15] += c * c;
    }
    i[4] = i[1];
    i[8] = i[2];
    i[9] = i[6];
    i[12] = i[3];
    i[13] = i[7];
    i[14] = i[11];
    return {
      R: i,
      m: n,
      N: o
    };
  };
  rI.quantize.estats = function (t) {
    var e = t.R;
    var r = t.m;
    var i = t.N;
    var n = r[0];
    var o = r[1];
    var s = r[2];
    var a = r[3];
    var l = i == 0 ? 0 : 1 / i;
    var h = [e[0] - n * n * l, e[1] - n * o * l, e[2] - n * s * l, e[3] - n * a * l, e[4] - o * n * l, e[5] - o * o * l, e[6] - o * s * l, e[7] - o * a * l, e[8] - s * n * l, e[9] - s * o * l, e[10] - s * s * l, e[11] - s * a * l, e[12] - a * n * l, e[13] - a * o * l, e[14] - a * s * l, e[15] - a * a * l];
    var c = h;
    var u = rI.M4;
    var d = [0.5, 0.5, 0.5, 0.5];
    var f = 0;
    var p = 0;
    if (i != 0) {
      for (var g = 0; g < 10 && (d = u.multVec(c, d), p = Math.sqrt(u.dot(d, d)), d = u.sml(1 / p, d), !(Math.abs(p - f) < 1e-9)); g++) {
        f = p;
      }
    }
    var m = [n * l, o * l, s * l, a * l];
    var v = u.dot(u.sml(255, m), d);
    return {
      Cov: h,
      q: m,
      e: d,
      L: f,
      eMq255: v,
      eMq: u.dot(d, m),
      rgba: (Math.round(m[3] * 255) << 24 | Math.round(m[2] * 255) << 16 | Math.round(m[1] * 255) << 8 | Math.round(m[0] * 255) << 0) >>> 0
    };
  };
  rI.M4 = {
    multVec: function (t, e) {
      return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3], t[4] * e[0] + t[5] * e[1] + t[6] * e[2] + t[7] * e[3], t[8] * e[0] + t[9] * e[1] + t[10] * e[2] + t[11] * e[3], t[12] * e[0] + t[13] * e[1] + t[14] * e[2] + t[15] * e[3]];
    },
    dot: function (t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
    },
    sml: function (t, e) {
      return [t * e[0], t * e[1], t * e[2], t * e[3]];
    }
  };
  rI.encode.concatRGBA = function (t) {
    var e = 0;
    var r = 0;
    for (; r < t.length; r++) {
      e += t[r].byteLength;
    }
    var i = new Uint8Array(e);
    var n = 0;
    var r = 0;
    for (; r < t.length; r++) {
      var o = new Uint8Array(t[r]);
      var s = o.length;
      var a = 0;
      for (; a < s; a += 4) {
        var l = o[a];
        var h = o[a + 1];
        var c = o[a + 2];
        var u = o[a + 3];
        if (u == 0) {
          l = h = c = 0;
        }
        i[n + a] = l;
        i[n + a + 1] = h;
        i[n + a + 2] = c;
        i[n + a + 3] = u;
      }
      n += s;
    }
    return i.buffer;
  };
  var rL = rI;
  function rN(t) {
    if (t === 0) {
      return c.Greyscale;
    }
    if (t === 2) {
      return c.Truecolour;
    }
    if (t === 3) {
      return c.IndexedColour;
    }
    if (t === 4) {
      return c.GreyscaleWithAlpha;
    }
    if (t === 6) {
      return c.TruecolourWithAlpha;
    }
    throw Error("Unknown color type: " + t);
  }
  function rB(t) {
    var e = Math.floor(t.length / 4);
    var r = new Uint8Array(e * 3);
    var i = new Uint8Array(+e);
    var n = 0;
    var o = 0;
    var s = 0;
    while (n < t.length) {
      r[o++] = t[n++];
      r[o++] = t[n++];
      r[o++] = t[n++];
      i[s++] = t[n++];
    }
    return {
      rgbChannel: r,
      alphaChannel: i
    };
  }
  (function (t) {
    t.Greyscale = "Greyscale";
    t.Truecolour = "Truecolour";
    t.IndexedColour = "IndexedColour";
    t.GreyscaleWithAlpha = "GreyscaleWithAlpha";
    t.TruecolourWithAlpha = "TruecolourWithAlpha";
  })(c ||= {});
  var rj = function () {
    function t(t) {
      var e = rL.decode(t);
      var r = rL.toRGBA8(e);
      if (r.length > 1) {
        throw Error("Animated PNGs are not supported");
      }
      var i = rB(new Uint8Array(r[0]));
      var n = i.rgbChannel;
      var o = i.alphaChannel;
      this.rgbChannel = n;
      if (o.some(function (t) {
        return t < 255;
      })) {
        this.alphaChannel = o;
      }
      this.type = rN(e.ctype);
      this.width = e.width;
      this.height = e.height;
      this.bitsPerComponent = 8;
    }
    t.load = function (e) {
      return new t(e);
    };
    return t;
  }();
  var r_ = function () {
    function t(t) {
      this.image = t;
      this.bitsPerComponent = t.bitsPerComponent;
      this.width = t.width;
      this.height = t.height;
      this.colorSpace = "DeviceRGB";
    }
    t.for = function (e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (r) {
          return [2, new t(rj.load(e))];
        });
      });
    };
    t.prototype.embedIntoContext = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        return typescriptRuntimeHelpers.generator(this, function (n) {
          r = this.embedAlphaChannel(t);
          i = t.flateStream(this.image.rgbChannel, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.image.bitsPerComponent,
            Width: this.image.width,
            Height: this.image.height,
            ColorSpace: this.colorSpace,
            SMask: r
          });
          if (e) {
            t.assign(e, i);
            return [2, e];
          } else {
            return [2, t.register(i)];
          }
        });
      });
    };
    t.prototype.embedAlphaChannel = function (t) {
      if (this.image.alphaChannel) {
        var e = t.flateStream(this.image.alphaChannel, {
          Type: "XObject",
          Subtype: "Image",
          Height: this.image.height,
          Width: this.image.width,
          BitsPerComponent: this.image.bitsPerComponent,
          ColorSpace: "DeviceGray",
          Decode: [0, 1]
        });
        return t.register(e);
      }
    };
    return t;
  }();
  var rU = function () {
    function t(t, e, r) {
      this.bytes = t;
      this.start = e || 0;
      this.pos = this.start;
      this.end = e && r ? e + r : this.bytes.length;
    }
    Object.defineProperty(t.prototype, "length", {
      get: function () {
        return this.end - this.start;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "isEmpty", {
      get: function () {
        return this.length === 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getByte = function () {
      if (this.pos >= this.end) {
        return -1;
      } else {
        return this.bytes[this.pos++];
      }
    };
    t.prototype.getUint16 = function () {
      var t = this.getByte();
      var e = this.getByte();
      if (t === -1 || e === -1) {
        return -1;
      } else {
        return (t << 8) + e;
      }
    };
    t.prototype.getInt32 = function () {
      return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
    };
    t.prototype.getBytes = function (t, e = false) {
      var r = this.bytes;
      var i = this.pos;
      var n = this.end;
      if (t) {
        var o = i + t;
        if (o > n) {
          o = n;
        }
        this.pos = o;
        var s = r.subarray(i, o);
        if (e) {
          return new Uint8ClampedArray(s);
        } else {
          return s;
        }
      }
      var s = r.subarray(i, n);
      if (e) {
        return new Uint8ClampedArray(s);
      } else {
        return s;
      }
    };
    t.prototype.peekByte = function () {
      var t = this.getByte();
      this.pos--;
      return t;
    };
    t.prototype.peekBytes = function (t, e = false) {
      var r = this.getBytes(t, e);
      this.pos -= r.length;
      return r;
    };
    t.prototype.skip = function (t) {
      t ||= 1;
      this.pos += t;
    };
    t.prototype.reset = function () {
      this.pos = this.start;
    };
    t.prototype.moveStart = function () {
      this.start = this.pos;
    };
    t.prototype.makeSubStream = function (e, r) {
      return new t(this.bytes, e, r);
    };
    t.prototype.decode = function () {
      return this.bytes;
    };
    return t;
  }();
  var rz = new Uint8Array(0);
  var rV = function () {
    function t(t) {
      this.pos = 0;
      this.bufferLength = 0;
      this.eof = false;
      this.buffer = rz;
      this.minBufferLength = 512;
      if (t) {
        while (this.minBufferLength < t) {
          this.minBufferLength *= 2;
        }
      }
    }
    Object.defineProperty(t.prototype, "isEmpty", {
      get: function () {
        while (!this.eof && this.bufferLength === 0) {
          this.readBlock();
        }
        return this.bufferLength === 0;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getByte = function () {
      for (var t = this.pos; this.bufferLength <= t;) {
        if (this.eof) {
          return -1;
        }
        this.readBlock();
      }
      return this.buffer[this.pos++];
    };
    t.prototype.getUint16 = function () {
      var t = this.getByte();
      var e = this.getByte();
      if (t === -1 || e === -1) {
        return -1;
      } else {
        return (t << 8) + e;
      }
    };
    t.prototype.getInt32 = function () {
      return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
    };
    t.prototype.getBytes = function (t, e = false) {
      var r;
      var i = this.pos;
      if (t) {
        this.ensureBuffer(i + t);
        r = i + t;
        while (!this.eof && this.bufferLength < r) {
          this.readBlock();
        }
        var n = this.bufferLength;
        if (r > n) {
          r = n;
        }
      } else {
        while (!this.eof) {
          this.readBlock();
        }
        r = this.bufferLength;
      }
      this.pos = r;
      var o = this.buffer.subarray(i, r);
      if (!e || o instanceof Uint8ClampedArray) {
        return o;
      } else {
        return new Uint8ClampedArray(o);
      }
    };
    t.prototype.peekByte = function () {
      var t = this.getByte();
      this.pos--;
      return t;
    };
    t.prototype.peekBytes = function (t, e = false) {
      var r = this.getBytes(t, e);
      this.pos -= r.length;
      return r;
    };
    t.prototype.skip = function (t) {
      t ||= 1;
      this.pos += t;
    };
    t.prototype.reset = function () {
      this.pos = 0;
    };
    t.prototype.makeSubStream = function (t, e) {
      for (var r = t + e; this.bufferLength <= r && !this.eof;) {
        this.readBlock();
      }
      return new rU(this.buffer, t, e);
    };
    t.prototype.decode = function () {
      while (!this.eof) {
        this.readBlock();
      }
      return this.buffer.subarray(0, this.bufferLength);
    };
    t.prototype.readBlock = function () {
      throw new ep(this.constructor.name, "readBlock");
    };
    t.prototype.ensureBuffer = function (t) {
      var e = this.buffer;
      if (t <= e.byteLength) {
        return e;
      }
      for (var r = this.minBufferLength; r < t;) {
        r *= 2;
      }
      var i = new Uint8Array(r);
      i.set(e);
      return this.buffer = i;
    };
    return t;
  }();
  function rW(t) {
    return t === 32 || t === 9 || t === 13 || t === 10;
  }
  var rG = function (t) {
    function e(e, r) {
      var i = t.call(this, r) || this;
      i.stream = e;
      i.input = new Uint8Array(5);
      if (r) {
        r *= 0.8;
      }
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.readBlock = function () {
      var t;
      var e;
      var r = 126;
      var i = 122;
      var n = -1;
      var o = this.stream;
      var s = o.getByte();
      while (rW(s)) {
        s = o.getByte();
      }
      if (s === n || s === r) {
        this.eof = true;
        return;
      }
      var a = this.bufferLength;
      if (s === i) {
        e = 0;
        t = this.ensureBuffer(a + 4);
        for (; e < 4; ++e) {
          t[a + e] = 0;
        }
        this.bufferLength += 4;
      } else {
        var l = this.input;
        e = 1;
        l[0] = s;
        for (; e < 5; ++e) {
          for (s = o.getByte(); rW(s);) {
            s = o.getByte();
          }
          l[e] = s;
          if (s === n || s === r) {
            break;
          }
        }
        t = this.ensureBuffer(a + e - 1);
        this.bufferLength += e - 1;
        if (e < 5) {
          for (; e < 5; ++e) {
            l[e] = 117;
          }
          this.eof = true;
        }
        var h = 0;
        for (e = 0; e < 5; ++e) {
          h = h * 85 + (l[e] - 33);
        }
        for (e = 3; e >= 0; --e) {
          t[a + e] = h & 255;
          h >>= 8;
        }
      }
    };
    return e;
  }(rV);
  var rq = function (t) {
    function e(e, r) {
      var i = t.call(this, r) || this;
      i.stream = e;
      i.firstDigit = -1;
      if (r) {
        r *= 0.5;
      }
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.readBlock = function () {
      var t = 8000;
      var e = this.stream.getBytes(t);
      if (!e.length) {
        this.eof = true;
        return;
      }
      var r = e.length + 1 >> 1;
      var i = this.ensureBuffer(this.bufferLength + r);
      var n = this.bufferLength;
      var o = this.firstDigit;
      var s = 0;
      var a = e.length;
      for (; s < a; s++) {
        var l = e[s];
        var h = undefined;
        if (l >= 48 && l <= 57) {
          h = l & 15;
        } else if (l >= 65 && l <= 70 || l >= 97 && l <= 102) {
          h = (l & 15) + 9;
        } else {
          if (l !== 62) {
            continue;
          }
          this.eof = true;
          break;
        }
        if (o < 0) {
          o = h;
        } else {
          i[n++] = o << 4 | h;
          o = -1;
        }
      }
      if (o >= 0 && this.eof) {
        i[n++] = o << 4;
        o = -1;
      }
      this.firstDigit = o;
      this.bufferLength = n;
    };
    return e;
  }(rV);
  var rH = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var rK = new Int32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]);
  var rX = new Int32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]);
  var rZ = [new Int32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 590000, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9];
  var rY = [new Int32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
  var rJ = function (t) {
    function e(e, r) {
      var i = t.call(this, r) || this;
      i.stream = e;
      var n = e.getByte();
      var o = e.getByte();
      if (n === -1 || o === -1) {
        throw Error("Invalid header in flate stream: " + n + ", " + o);
      }
      if ((n & 15) != 8) {
        throw Error("Unknown compression method in flate stream: " + n + ", " + o);
      }
      if (((n << 8) + o) % 31 != 0) {
        throw Error("Bad FCHECK in flate stream: " + n + ", " + o);
      }
      if (o & 32) {
        throw Error("FDICT bit set in flate stream: " + n + ", " + o);
      }
      i.codeSize = 0;
      i.codeBuf = 0;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.readBlock = function () {
      var t;
      var e;
      var r;
      var i;
      var n = this.stream;
      var o = this.getBits(3);
      if (o & 1) {
        this.eof = true;
      }
      if ((o >>= 1) == 0) {
        var s = undefined;
        if ((s = n.getByte()) === -1) {
          throw Error("Bad block header in flate stream");
        }
        var a = s;
        if ((s = n.getByte()) === -1 || (a |= s << 8, (s = n.getByte()) === -1)) {
          throw Error("Bad block header in flate stream");
        }
        var l = s;
        if ((s = n.getByte()) === -1) {
          throw Error("Bad block header in flate stream");
        }
        if ((l |= s << 8) != (~a & 65535) && (a !== 0 || l !== 0)) {
          throw Error("Bad uncompressed block length in flate stream");
        }
        this.codeBuf = 0;
        this.codeSize = 0;
        var h = this.bufferLength;
        t = this.ensureBuffer(h + a);
        var c = h + a;
        this.bufferLength = c;
        if (a === 0) {
          if (n.peekByte() === -1) {
            this.eof = true;
          }
        } else {
          for (var u = h; u < c; ++u) {
            if ((s = n.getByte()) === -1) {
              this.eof = true;
              break;
            }
            t[u] = s;
          }
        }
        return;
      }
      if (o === 1) {
        r = rZ;
        i = rY;
      } else if (o === 2) {
        var d = this.getBits(5) + 257;
        var f = this.getBits(5) + 1;
        var p = this.getBits(4) + 4;
        var g = new Uint8Array(rH.length);
        var m = undefined;
        for (m = 0; m < p; ++m) {
          g[rH[m]] = this.getBits(3);
        }
        var v = this.generateHuffmanTable(g);
        e = 0;
        m = 0;
        var y = d + f;
        var b = new Uint8Array(y);
        var A = undefined;
        var S = undefined;
        var x = undefined;
        while (m < y) {
          var w = this.getCode(v);
          if (w === 16) {
            A = 2;
            S = 3;
            x = e;
          } else if (w === 17) {
            A = 3;
            S = 3;
            x = e = 0;
          } else if (w === 18) {
            A = 7;
            S = 11;
            x = e = 0;
          } else {
            b[m++] = e = w;
            continue;
          }
          for (var C = this.getBits(A) + S; C-- > 0;) {
            b[m++] = x;
          }
        }
        r = this.generateHuffmanTable(b.subarray(0, d));
        i = this.generateHuffmanTable(b.subarray(d, y));
      } else {
        throw Error("Unknown block type in flate stream");
      }
      var T = (t = this.buffer) ? t.length : 0;
      var E = this.bufferLength;
      while (true) {
        var F = this.getCode(r);
        if (F < 256) {
          if (E + 1 >= T) {
            T = (t = this.ensureBuffer(E + 1)).length;
          }
          t[E++] = F;
          continue;
        }
        if (F === 256) {
          this.bufferLength = E;
          return;
        }
        F -= 257;
        var k = (F = rK[F]) >> 16;
        if (k > 0) {
          k = this.getBits(k);
        }
        e = (F & 65535) + k;
        if ((k = (F = rX[F = this.getCode(i)]) >> 16) > 0) {
          k = this.getBits(k);
        }
        var P = (F & 65535) + k;
        if (E + e >= T) {
          T = (t = this.ensureBuffer(E + e)).length;
        }
        for (var R = 0; R < e; ++R, ++E) {
          t[E] = t[E - P];
        }
      }
    };
    e.prototype.getBits = function (t) {
      var e;
      var r = this.stream;
      var i = this.codeSize;
      var n = this.codeBuf;
      while (i < t) {
        if ((e = r.getByte()) === -1) {
          throw Error("Bad encoding in flate stream");
        }
        n |= e << i;
        i += 8;
      }
      e = n & (1 << t) - 1;
      this.codeBuf = n >> t;
      this.codeSize = i -= t;
      return e;
    };
    e.prototype.getCode = function (t) {
      var e;
      var r = this.stream;
      var i = t[0];
      var n = t[1];
      var o = this.codeSize;
      var s = this.codeBuf;
      while (o < n && (e = r.getByte()) !== -1) {
        s |= e << o;
        o += 8;
      }
      var a = i[s & (1 << n) - 1];
      var l = a >> 16;
      var h = a & 65535;
      if (l < 1 || o < l) {
        throw Error("Bad encoding in flate stream");
      }
      this.codeBuf = s >> l;
      this.codeSize = o - l;
      return h;
    };
    e.prototype.generateHuffmanTable = function (t) {
      var e;
      var r = t.length;
      var i = 0;
      for (e = 0; e < r; ++e) {
        if (t[e] > i) {
          i = t[e];
        }
      }
      var n = 1 << i;
      var o = new Int32Array(n);
      var s = 1;
      var a = 0;
      var l = 2;
      for (; s <= i; ++s, a <<= 1, l <<= 1) {
        for (var h = 0; h < r; ++h) {
          if (t[h] === s) {
            var c = 0;
            var u = a;
            for (e = 0; e < s; ++e) {
              c = c << 1 | u & 1;
              u >>= 1;
            }
            for (e = c; e < n; e += l) {
              o[e] = s << 16 | h;
            }
            ++a;
          }
        }
      }
      return [o, i];
    };
    return e;
  }(rV);
  var rQ = function (t) {
    function e(e, r, i) {
      var n = t.call(this, r) || this;
      n.stream = e;
      n.cachedData = 0;
      n.bitsCached = 0;
      var o = 4096;
      var s = {
        earlyChange: i,
        codeLength: 9,
        nextCode: 258,
        dictionaryValues: new Uint8Array(4096),
        dictionaryLengths: new Uint16Array(o),
        dictionaryPrevCodes: new Uint16Array(o),
        currentSequence: new Uint8Array(o),
        currentSequenceLength: 0
      };
      var a = 0;
      for (; a < 256; ++a) {
        s.dictionaryValues[a] = a;
        s.dictionaryLengths[a] = 1;
      }
      n.lzwState = s;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.readBlock = function () {
      var t;
      var e;
      var r;
      var i = 512;
      var n = 1024;
      var o = 512;
      var s = this.lzwState;
      if (s) {
        var a = s.earlyChange;
        var l = s.nextCode;
        var h = s.dictionaryValues;
        var c = s.dictionaryLengths;
        var u = s.dictionaryPrevCodes;
        var d = s.codeLength;
        var f = s.prevCode;
        var p = s.currentSequence;
        var g = s.currentSequenceLength;
        var m = 0;
        var v = this.bufferLength;
        var y = this.ensureBuffer(this.bufferLength + n);
        for (t = 0; t < i; t++) {
          var b = this.readBits(d);
          var A = g > 0;
          if (!b || b < 256) {
            p[0] = b;
            g = 1;
          } else if (b >= 258) {
            if (b < l) {
              e = (g = c[b]) - 1;
              r = b;
              for (; e >= 0; e--) {
                p[e] = h[r];
                r = u[r];
              }
            } else {
              p[g++] = p[0];
            }
          } else if (b === 256) {
            d = 9;
            l = 258;
            g = 0;
            continue;
          } else {
            this.eof = true;
            delete this.lzwState;
            break;
          }
          if (A) {
            u[l] = f;
            c[l] = c[f] + 1;
            h[l] = p[0];
            d = ++l + a & l + a - 1 ? d : Math.min(Math.log(l + a) / 0.6931471805599453 + 1, 12) | 0;
          }
          f = b;
          if (n < (m += g)) {
            do {
              n += o;
            } while (n < m);
            y = this.ensureBuffer(this.bufferLength + n);
          }
          for (e = 0; e < g; e++) {
            y[v++] = p[e];
          }
        }
        s.nextCode = l;
        s.codeLength = d;
        s.prevCode = f;
        s.currentSequenceLength = g;
        this.bufferLength = v;
      }
    };
    e.prototype.readBits = function (t) {
      var e = this.bitsCached;
      var r = this.cachedData;
      while (e < t) {
        var i = this.stream.getByte();
        if (i === -1) {
          this.eof = true;
          return null;
        }
        r = r << 8 | i;
        e += 8;
      }
      this.bitsCached = e -= t;
      this.cachedData = r;
      return r >>> e & (1 << t) - 1;
    };
    return e;
  }(rV);
  var r$ = function (t) {
    function e(e, r) {
      var i = t.call(this, r) || this;
      i.stream = e;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.readBlock = function () {
      var t;
      var e = this.stream.getBytes(2);
      if (!e || e.length < 2 || e[0] === 128) {
        this.eof = true;
        return;
      }
      var r = this.bufferLength;
      var i = e[0];
      if (i < 128) {
        (t = this.ensureBuffer(r + i + 1))[r++] = e[1];
        if (i > 0) {
          var n = this.stream.getBytes(i);
          t.set(n, r);
          r += i;
        }
      } else {
        i = 257 - i;
        var o = e[1];
        t = this.ensureBuffer(r + i + 1);
        for (var s = 0; s < i; s++) {
          t[r++] = o;
        }
      }
      this.bufferLength = r;
    };
    return e;
  }(rV);
  function r0(t, e, r) {
    if (e === e5.of("FlateDecode")) {
      return new rJ(t);
    }
    if (e === e5.of("LZWDecode")) {
      var i = 1;
      if (r instanceof e4) {
        var n = r.lookup(e5.of("EarlyChange"));
        if (n instanceof eG) {
          i = n.asNumber();
        }
      }
      return new rQ(t, undefined, i);
    }
    if (e === e5.of("ASCII85Decode")) {
      return new rG(t);
    }
    if (e === e5.of("ASCIIHexDecode")) {
      return new rq(t);
    }
    if (e === e5.of("RunLengthDecode")) {
      return new r$(t);
    }
    throw new ev(e.asString());
  }
  function r1(t) {
    var e = t.dict;
    var r = new rU(t.contents);
    var i = e.lookup(e5.of("Filter"));
    var n = e.lookup(e5.of("DecodeParms"));
    if (i instanceof e5) {
      r = r0(r, i, n);
    } else if (i instanceof eq) {
      var o = 0;
      var s = i.size();
      for (; o < s; o++) {
        r = r0(r, i.lookup(o, e5), n && n.lookupMaybe(o, e4));
      }
    } else if (i) {
      throw new em([e5, eq], i);
    }
    return r;
  }
  function r2(t) {
    var e = t.MediaBox();
    return {
      left: 0,
      bottom: 0,
      right: e.lookup(2, eG).asNumber() - e.lookup(0, eG).asNumber(),
      top: e.lookup(3, eG).asNumber() - e.lookup(1, eG).asNumber()
    };
  }
  function r5(t) {
    return [1, 0, 0, 1, -t.left, -t.bottom];
  }
  var r3 = function () {
    function t(t, e, r) {
      this.page = t;
      var i = e ?? r2(t);
      this.width = i.right - i.left;
      this.height = i.top - i.bottom;
      this.boundingBox = i;
      this.transformationMatrix = r ?? r5(i);
    }
    t.for = function (e, r, i) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (n) {
          return [2, new t(e, r, i)];
        });
      });
    };
    t.prototype.embedIntoContext = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        return typescriptRuntimeHelpers.generator(this, function (d) {
          i = (r = this.page.normalizedEntries()).Contents;
          n = r.Resources;
          if (!i) {
            throw new eb();
          }
          o = this.decodeContents(i);
          a = (s = this.boundingBox).left;
          l = s.bottom;
          h = s.right;
          c = s.top;
          u = t.flateStream(o, {
            Type: "XObject",
            Subtype: "Form",
            FormType: 1,
            BBox: [a, l, h, c],
            Matrix: this.transformationMatrix,
            Resources: n
          });
          if (e) {
            t.assign(e, u);
            return [2, e];
          } else {
            return [2, t.register(u)];
          }
        });
      });
    };
    t.prototype.decodeContents = function (t) {
      var e = Uint8Array.of(ez.Newline);
      var r = [];
      var i = 0;
      var n = t.size();
      for (; i < n; i++) {
        var o = t.lookup(i, e6);
        var s = undefined;
        if (o instanceof e8) {
          s = r1(o).decode();
        } else if (o instanceof rn) {
          s = o.getUnencodedContents();
        } else {
          throw new eA(o);
        }
        r.push(s, e);
      }
      return ta.apply(undefined, r);
    };
    return t;
  }();
  function r4(t, e) {
    if (t !== undefined) {
      return e[t];
    }
  }
  (function (t) {
    t.UseNone = "UseNone";
    t.UseOutlines = "UseOutlines";
    t.UseThumbs = "UseThumbs";
    t.UseOC = "UseOC";
  })(u ||= {});
  (function (t) {
    t.L2R = "L2R";
    t.R2L = "R2L";
  })(d ||= {});
  (function (t) {
    t.None = "None";
    t.AppDefault = "AppDefault";
  })(f ||= {});
  (function (t) {
    t.Simplex = "Simplex";
    t.DuplexFlipShortEdge = "DuplexFlipShortEdge";
    t.DuplexFlipLongEdge = "DuplexFlipLongEdge";
  })(p ||= {});
  var r6 = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.lookupBool = function (t) {
      var e = this.dict.lookup(e5.of(t));
      if (e instanceof eK) {
        return e;
      }
    };
    t.prototype.lookupName = function (t) {
      var e = this.dict.lookup(e5.of(t));
      if (e instanceof e5) {
        return e;
      }
    };
    t.prototype.HideToolbar = function () {
      return this.lookupBool("HideToolbar");
    };
    t.prototype.HideMenubar = function () {
      return this.lookupBool("HideMenubar");
    };
    t.prototype.HideWindowUI = function () {
      return this.lookupBool("HideWindowUI");
    };
    t.prototype.FitWindow = function () {
      return this.lookupBool("FitWindow");
    };
    t.prototype.CenterWindow = function () {
      return this.lookupBool("CenterWindow");
    };
    t.prototype.DisplayDocTitle = function () {
      return this.lookupBool("DisplayDocTitle");
    };
    t.prototype.NonFullScreenPageMode = function () {
      return this.lookupName("NonFullScreenPageMode");
    };
    t.prototype.Direction = function () {
      return this.lookupName("Direction");
    };
    t.prototype.PrintScaling = function () {
      return this.lookupName("PrintScaling");
    };
    t.prototype.Duplex = function () {
      return this.lookupName("Duplex");
    };
    t.prototype.PickTrayByPDFSize = function () {
      return this.lookupBool("PickTrayByPDFSize");
    };
    t.prototype.PrintPageRange = function () {
      var t = this.dict.lookup(e5.of("PrintPageRange"));
      if (t instanceof eq) {
        return t;
      }
    };
    t.prototype.NumCopies = function () {
      var t = this.dict.lookup(e5.of("NumCopies"));
      if (t instanceof eG) {
        return t;
      }
    };
    t.prototype.getHideToolbar = function () {
      var t;
      var e;
      return (e = (t = this.HideToolbar()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getHideMenubar = function () {
      var t;
      var e;
      return (e = (t = this.HideMenubar()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getHideWindowUI = function () {
      var t;
      var e;
      return (e = (t = this.HideWindowUI()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getFitWindow = function () {
      var t;
      var e;
      return (e = (t = this.FitWindow()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getCenterWindow = function () {
      var t;
      var e;
      return (e = (t = this.CenterWindow()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getDisplayDocTitle = function () {
      var t;
      var e;
      return (e = (t = this.DisplayDocTitle()) === null || t === undefined ? undefined : t.asBoolean()) !== null && e !== undefined && e;
    };
    t.prototype.getNonFullScreenPageMode = function () {
      var t;
      return r4((t = this.NonFullScreenPageMode()) === null || t === undefined ? undefined : t.decodeText(), u) ?? u.UseNone;
    };
    t.prototype.getReadingDirection = function () {
      var t;
      return r4((t = this.Direction()) === null || t === undefined ? undefined : t.decodeText(), d) ?? d.L2R;
    };
    t.prototype.getPrintScaling = function () {
      var t;
      return r4((t = this.PrintScaling()) === null || t === undefined ? undefined : t.decodeText(), f) ?? f.AppDefault;
    };
    t.prototype.getDuplex = function () {
      var t;
      return r4((t = this.Duplex()) === null || t === undefined ? undefined : t.decodeText(), p);
    };
    t.prototype.getPickTrayByPDFSize = function () {
      var t;
      if ((t = this.PickTrayByPDFSize()) === null || t === undefined) {
        return undefined;
      } else {
        return t.asBoolean();
      }
    };
    t.prototype.getPrintPageRange = function () {
      var t = this.PrintPageRange();
      if (!t) {
        return [];
      }
      var e = [];
      var r = 0;
      for (; r < t.size(); r += 2) {
        var i = t.lookup(r, eG).asNumber();
        var n = t.lookup(r + 1, eG).asNumber();
        e.push({
          start: i,
          end: n
        });
      }
      return e;
    };
    t.prototype.getNumCopies = function () {
      var t;
      return ((t = this.NumCopies()) === null || t === undefined ? undefined : t.asNumber()) ?? 1;
    };
    t.prototype.setHideToolbar = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("HideToolbar"), e);
    };
    t.prototype.setHideMenubar = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("HideMenubar"), e);
    };
    t.prototype.setHideWindowUI = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("HideWindowUI"), e);
    };
    t.prototype.setFitWindow = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("FitWindow"), e);
    };
    t.prototype.setCenterWindow = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("CenterWindow"), e);
    };
    t.prototype.setDisplayDocTitle = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("DisplayDocTitle"), e);
    };
    t.prototype.setNonFullScreenPageMode = function (t) {
      t6(t, "nonFullScreenPageMode", u);
      var e = e5.of(t);
      this.dict.set(e5.of("NonFullScreenPageMode"), e);
    };
    t.prototype.setReadingDirection = function (t) {
      t6(t, "readingDirection", d);
      var e = e5.of(t);
      this.dict.set(e5.of("Direction"), e);
    };
    t.prototype.setPrintScaling = function (t) {
      t6(t, "printScaling", f);
      var e = e5.of(t);
      this.dict.set(e5.of("PrintScaling"), e);
    };
    t.prototype.setDuplex = function (t) {
      t6(t, "duplex", p);
      var e = e5.of(t);
      this.dict.set(e5.of("Duplex"), e);
    };
    t.prototype.setPickTrayByPDFSize = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("PickTrayByPDFSize"), e);
    };
    t.prototype.setPrintPageRange = function (t) {
      if (!Array.isArray(t)) {
        t = [t];
      }
      var e = [];
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        e.push(t[r].start);
        e.push(t[r].end);
      }
      en(e, "printPageRange", ["number"]);
      var n = this.dict.context.obj(e);
      this.dict.set(e5.of("PrintPageRange"), n);
    };
    t.prototype.setNumCopies = function (t) {
      eo(t, "numCopies", 1, Number.MAX_VALUE);
      el(t, "numCopies");
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("NumCopies"), e);
    };
    t.fromDict = function (e) {
      return new t(e);
    };
    t.create = function (e) {
      return new t(e.obj({}));
    };
    return t;
  }();
  var r8 = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/;
  var r9 = function () {
    function t(t, e) {
      this.dict = t;
      this.ref = e;
    }
    t.prototype.T = function () {
      return this.dict.lookupMaybe(e5.of("T"), rF, ry);
    };
    t.prototype.Ff = function () {
      var t = this.getInheritableAttribute(e5.of("Ff"));
      return this.dict.context.lookupMaybe(t, eG);
    };
    t.prototype.V = function () {
      var t = this.getInheritableAttribute(e5.of("V"));
      return this.dict.context.lookup(t);
    };
    t.prototype.Kids = function () {
      return this.dict.lookupMaybe(e5.of("Kids"), eq);
    };
    t.prototype.DA = function () {
      var t = this.dict.lookup(e5.of("DA"));
      if (t instanceof rF || t instanceof ry) {
        return t;
      }
    };
    t.prototype.setKids = function (t) {
      this.dict.set(e5.of("Kids"), this.dict.context.obj(t));
    };
    t.prototype.getParent = function () {
      var e = this.dict.get(e5.of("Parent"));
      if (e instanceof rt) {
        return new t(this.dict.lookup(e5.of("Parent"), e4), e);
      }
    };
    t.prototype.setParent = function (t) {
      if (t) {
        this.dict.set(e5.of("Parent"), t);
      } else {
        this.dict.delete(e5.of("Parent"));
      }
    };
    t.prototype.getFullyQualifiedName = function () {
      var t = this.getParent();
      if (t) {
        return t.getFullyQualifiedName() + "." + this.getPartialName();
      } else {
        return this.getPartialName();
      }
    };
    t.prototype.getPartialName = function () {
      var t;
      if ((t = this.T()) === null || t === undefined) {
        return undefined;
      } else {
        return t.decodeText();
      }
    };
    t.prototype.setPartialName = function (t) {
      if (t) {
        this.dict.set(e5.of("T"), ry.fromText(t));
      } else {
        this.dict.delete(e5.of("T"));
      }
    };
    t.prototype.setDefaultAppearance = function (t) {
      this.dict.set(e5.of("DA"), rF.of(t));
    };
    t.prototype.getDefaultAppearance = function () {
      var t = this.DA();
      if (t instanceof ry) {
        return t.decodeText();
      } else if (t == null) {
        return undefined;
      } else {
        return t.asString();
      }
    };
    t.prototype.setFontSize = function (t) {
      var r = this.getFullyQualifiedName() ?? "";
      var i = this.getDefaultAppearance();
      if (!i) {
        throw new eP(r);
      }
      var n = tn(i, r8);
      if (!n.match) {
        throw new eR(r);
      }
      var o = i.slice(0, n.pos - n.match[0].length);
      var s = n.pos <= i.length ? i.slice(n.pos) : "";
      var a = o + " /" + n.match[1] + " " + t + " Tf " + s;
      this.setDefaultAppearance(a);
    };
    t.prototype.getFlags = function () {
      var t;
      return ((t = this.Ff()) === null || t === undefined ? undefined : t.asNumber()) ?? 0;
    };
    t.prototype.setFlags = function (t) {
      this.dict.set(e5.of("Ff"), eG.of(t));
    };
    t.prototype.hasFlag = function (t) {
      return (this.getFlags() & t) != 0;
    };
    t.prototype.setFlag = function (t) {
      var e = this.getFlags();
      this.setFlags(e | t);
    };
    t.prototype.clearFlag = function (t) {
      var e = this.getFlags();
      this.setFlags(e & ~t);
    };
    t.prototype.setFlagTo = function (t, e) {
      if (e) {
        this.setFlag(t);
      } else {
        this.clearFlag(t);
      }
    };
    t.prototype.getInheritableAttribute = function (t) {
      var e;
      this.ascend(function (r) {
        e ||= r.dict.get(t);
      });
      return e;
    };
    t.prototype.ascend = function (t) {
      t(this);
      var e = this.getParent();
      if (e) {
        e.ascend(t);
      }
    };
    return t;
  }();
  var r7 = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.W = function () {
      var t = this.dict.lookup(e5.of("W"));
      if (t instanceof eG) {
        return t;
      }
    };
    t.prototype.getWidth = function () {
      var t;
      return ((t = this.W()) === null || t === undefined ? undefined : t.asNumber()) ?? 1;
    };
    t.prototype.setWidth = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("W"), e);
    };
    t.fromDict = function (e) {
      return new t(e);
    };
    return t;
  }();
  var it = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.Rect = function () {
      return this.dict.lookup(e5.of("Rect"), eq);
    };
    t.prototype.AP = function () {
      return this.dict.lookupMaybe(e5.of("AP"), e4);
    };
    t.prototype.F = function () {
      var t = this.dict.lookup(e5.of("F"));
      return this.dict.context.lookupMaybe(t, eG);
    };
    t.prototype.getRectangle = function () {
      var e = this.Rect();
      return (e == null ? undefined : e.asRectangle()) ?? {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    };
    t.prototype.setRectangle = function (t) {
      var e = t.x;
      var r = t.y;
      var i = t.width;
      var n = t.height;
      var o = this.dict.context.obj([e, r, e + i, r + n]);
      this.dict.set(e5.of("Rect"), o);
    };
    t.prototype.getAppearanceState = function () {
      var t = this.dict.lookup(e5.of("AS"));
      if (t instanceof e5) {
        return t;
      }
    };
    t.prototype.setAppearanceState = function (t) {
      this.dict.set(e5.of("AS"), t);
    };
    t.prototype.setAppearances = function (t) {
      this.dict.set(e5.of("AP"), t);
    };
    t.prototype.ensureAP = function () {
      var t = this.AP();
      if (!t) {
        t = this.dict.context.obj({});
        this.dict.set(e5.of("AP"), t);
      }
      return t;
    };
    t.prototype.getNormalAppearance = function () {
      var t = this.ensureAP().get(e5.of("N"));
      if (t instanceof rt || t instanceof e4) {
        return t;
      }
      throw Error("Unexpected N type: " + (t == null ? undefined : t.constructor.name));
    };
    t.prototype.setNormalAppearance = function (t) {
      this.ensureAP().set(e5.of("N"), t);
    };
    t.prototype.setRolloverAppearance = function (t) {
      this.ensureAP().set(e5.of("R"), t);
    };
    t.prototype.setDownAppearance = function (t) {
      this.ensureAP().set(e5.of("D"), t);
    };
    t.prototype.removeRolloverAppearance = function () {
      var t = this.AP();
      if (t != null) {
        t.delete(e5.of("R"));
      }
    };
    t.prototype.removeDownAppearance = function () {
      var t = this.AP();
      if (t != null) {
        t.delete(e5.of("D"));
      }
    };
    t.prototype.getAppearances = function () {
      var t = this.AP();
      if (t) {
        var e = t.lookup(e5.of("N"), e4, e6);
        var r = t.lookupMaybe(e5.of("R"), e4, e6);
        var i = t.lookupMaybe(e5.of("D"), e4, e6);
        return {
          normal: e,
          rollover: r,
          down: i
        };
      }
    };
    t.prototype.getFlags = function () {
      var t;
      return ((t = this.F()) === null || t === undefined ? undefined : t.asNumber()) ?? 0;
    };
    t.prototype.setFlags = function (t) {
      this.dict.set(e5.of("F"), eG.of(t));
    };
    t.prototype.hasFlag = function (t) {
      return (this.getFlags() & t) != 0;
    };
    t.prototype.setFlag = function (t) {
      var e = this.getFlags();
      this.setFlags(e | t);
    };
    t.prototype.clearFlag = function (t) {
      var e = this.getFlags();
      this.setFlags(e & ~t);
    };
    t.prototype.setFlagTo = function (t, e) {
      if (e) {
        this.setFlag(t);
      } else {
        this.clearFlag(t);
      }
    };
    t.fromDict = function (e) {
      return new t(e);
    };
    return t;
  }();
  var ie = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.R = function () {
      var t = this.dict.lookup(e5.of("R"));
      if (t instanceof eG) {
        return t;
      }
    };
    t.prototype.BC = function () {
      var t = this.dict.lookup(e5.of("BC"));
      if (t instanceof eq) {
        return t;
      }
    };
    t.prototype.BG = function () {
      var t = this.dict.lookup(e5.of("BG"));
      if (t instanceof eq) {
        return t;
      }
    };
    t.prototype.CA = function () {
      var t = this.dict.lookup(e5.of("CA"));
      if (t instanceof ry || t instanceof rF) {
        return t;
      }
    };
    t.prototype.RC = function () {
      var t = this.dict.lookup(e5.of("RC"));
      if (t instanceof ry || t instanceof rF) {
        return t;
      }
    };
    t.prototype.AC = function () {
      var t = this.dict.lookup(e5.of("AC"));
      if (t instanceof ry || t instanceof rF) {
        return t;
      }
    };
    t.prototype.getRotation = function () {
      var t;
      if ((t = this.R()) === null || t === undefined) {
        return undefined;
      } else {
        return t.asNumber();
      }
    };
    t.prototype.getBorderColor = function () {
      var t = this.BC();
      if (t) {
        var e = [];
        var r = 0;
        var i = t == null ? undefined : t.size();
        for (; r < i; r++) {
          var n = t.get(r);
          if (n instanceof eG) {
            e.push(n.asNumber());
          }
        }
        return e;
      }
    };
    t.prototype.getBackgroundColor = function () {
      var t = this.BG();
      if (t) {
        var e = [];
        var r = 0;
        var i = t == null ? undefined : t.size();
        for (; r < i; r++) {
          var n = t.get(r);
          if (n instanceof eG) {
            e.push(n.asNumber());
          }
        }
        return e;
      }
    };
    t.prototype.getCaptions = function () {
      var t = this.CA();
      var e = this.RC();
      var r = this.AC();
      return {
        normal: t == null ? undefined : t.decodeText(),
        rollover: e == null ? undefined : e.decodeText(),
        down: r == null ? undefined : r.decodeText()
      };
    };
    t.prototype.setRotation = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("R"), e);
    };
    t.prototype.setBorderColor = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("BC"), e);
    };
    t.prototype.setBackgroundColor = function (t) {
      var e = this.dict.context.obj(t);
      this.dict.set(e5.of("BG"), e);
    };
    t.prototype.setCaptions = function (t) {
      var e = ry.fromText(t.normal);
      this.dict.set(e5.of("CA"), e);
      if (t.rollover) {
        var r = ry.fromText(t.rollover);
        this.dict.set(e5.of("RC"), r);
      } else {
        this.dict.delete(e5.of("RC"));
      }
      if (t.down) {
        var i = ry.fromText(t.down);
        this.dict.set(e5.of("AC"), i);
      } else {
        this.dict.delete(e5.of("AC"));
      }
    };
    t.fromDict = function (e) {
      return new t(e);
    };
    return t;
  }();
  var ir = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.MK = function () {
      var t = this.dict.lookup(e5.of("MK"));
      if (t instanceof e4) {
        return t;
      }
    };
    e.prototype.BS = function () {
      var t = this.dict.lookup(e5.of("BS"));
      if (t instanceof e4) {
        return t;
      }
    };
    e.prototype.DA = function () {
      var t = this.dict.lookup(e5.of("DA"));
      if (t instanceof rF || t instanceof ry) {
        return t;
      }
    };
    e.prototype.P = function () {
      var t = this.dict.get(e5.of("P"));
      if (t instanceof rt) {
        return t;
      }
    };
    e.prototype.setP = function (t) {
      this.dict.set(e5.of("P"), t);
    };
    e.prototype.setDefaultAppearance = function (t) {
      this.dict.set(e5.of("DA"), rF.of(t));
    };
    e.prototype.getDefaultAppearance = function () {
      var t = this.DA();
      if (t instanceof ry) {
        return t.decodeText();
      } else if (t == null) {
        return undefined;
      } else {
        return t.asString();
      }
    };
    e.prototype.getAppearanceCharacteristics = function () {
      var t = this.MK();
      if (t) {
        return ie.fromDict(t);
      }
    };
    e.prototype.getOrCreateAppearanceCharacteristics = function () {
      var t = this.MK();
      if (t) {
        return ie.fromDict(t);
      }
      var e = ie.fromDict(this.dict.context.obj({}));
      this.dict.set(e5.of("MK"), e.dict);
      return e;
    };
    e.prototype.getBorderStyle = function () {
      var t = this.BS();
      if (t) {
        return r7.fromDict(t);
      }
    };
    e.prototype.getOrCreateBorderStyle = function () {
      var t = this.BS();
      if (t) {
        return r7.fromDict(t);
      }
      var e = r7.fromDict(this.dict.context.obj({}));
      this.dict.set(e5.of("BS"), e.dict);
      return e;
    };
    e.prototype.getOnValue = function () {
      var e = this.getAppearances()?.normal;
      if (e instanceof e4) {
        var r = e.keys();
        var i = 0;
        var n = r.length;
        for (; i < n; i++) {
          var o = r[i];
          if (o !== e5.of("Off")) {
            return o;
          }
        }
      }
    };
    e.fromDict = function (t) {
      return new e(t);
    };
    e.create = function (t, r) {
      return new e(t.obj({
        Type: "Annot",
        Subtype: "Widget",
        Rect: [0, 0, 0, 0],
        Parent: r
      }));
    };
    return e;
  }(it);
  var ii = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.FT = function () {
      var t = this.getInheritableAttribute(e5.of("FT"));
      return this.dict.context.lookup(t, e5);
    };
    e.prototype.getWidgets = function () {
      var t = this.Kids();
      if (!t) {
        return [ir.fromDict(this.dict)];
      }
      var e = Array(t.size());
      var r = 0;
      var i = t.size();
      for (; r < i; r++) {
        var n = t.lookup(r, e4);
        e[r] = ir.fromDict(n);
      }
      return e;
    };
    e.prototype.addWidget = function (t) {
      this.normalizedEntries().Kids.push(t);
    };
    e.prototype.removeWidget = function (t) {
      var e = this.Kids();
      if (e) {
        if (t < 0 || t > e.size()) {
          throw new eE(t, 0, e.size());
        }
        e.remove(t);
      } else {
        if (t !== 0) {
          throw new eE(t, 0, 0);
        }
        this.setKids([]);
      }
    };
    e.prototype.normalizedEntries = function () {
      var t = this.Kids();
      if (!t) {
        t = this.dict.context.obj([this.ref]);
        this.dict.set(e5.of("Kids"), t);
      }
      return {
        Kids: t
      };
    };
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(r9);
  var io = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.Opt = function () {
      return this.dict.lookupMaybe(e5.of("Opt"), rF, ry, eq);
    };
    e.prototype.setOpt = function (t) {
      this.dict.set(e5.of("Opt"), this.dict.context.obj(t));
    };
    e.prototype.getExportValues = function () {
      var t = this.Opt();
      if (t) {
        if (t instanceof rF || t instanceof ry) {
          return [t];
        }
        var e = [];
        var r = 0;
        var i = t.size();
        for (; r < i; r++) {
          var n = t.lookup(r);
          if (n instanceof rF || n instanceof ry) {
            e.push(n);
          }
        }
        return e;
      }
    };
    e.prototype.removeExportValue = function (t) {
      var e = this.Opt();
      if (e) {
        if (e instanceof rF || e instanceof ry) {
          if (t !== 0) {
            throw new eE(t, 0, 0);
          }
          this.setOpt([]);
        } else {
          if (t < 0 || t > e.size()) {
            throw new eE(t, 0, e.size());
          }
          e.remove(t);
        }
      }
    };
    e.prototype.normalizeExportValues = function () {
      var r;
      var n = this.getExportValues() ?? [];
      var o = [];
      var s = this.getWidgets();
      var a = 0;
      var l = s.length;
      for (; a < l; a++) {
        var h = s[a];
        var c = n[a] ?? ry.fromText(((r = h.getOnValue()) === null || r === undefined ? undefined : r.decodeText()) ?? "");
        o.push(c);
      }
      this.setOpt(o);
    };
    e.prototype.addOpt = function (t, e) {
      this.normalizeExportValues();
      var i;
      var n = t.decodeText();
      if (e) {
        var o = this.getExportValues() ?? [];
        var s = 0;
        var a = o.length;
        for (; s < a; s++) {
          if (o[s].decodeText() === n) {
            i = s;
          }
        }
      }
      var l = this.Opt();
      l.push(t);
      return i ?? l.size() - 1;
    };
    e.prototype.addWidgetWithOpt = function (t, e, r) {
      var i = this.addOpt(e, r);
      var n = e5.of(String(i));
      this.addWidget(t);
      return n;
    };
    return e;
  }(ii);
  var is = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.setValue = function (t) {
      if (t !== (this.getOnValue() ?? e5.of("Yes")) && t !== e5.of("Off")) {
        throw new eF();
      }
      this.dict.set(e5.of("V"), t);
      var r = this.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        var s = o.getOnValue() === t ? t : e5.of("Off");
        o.setAppearanceState(s);
      }
    };
    e.prototype.getValue = function () {
      var t = this.V();
      if (t instanceof e5) {
        return t;
      } else {
        return e5.of("Off");
      }
    };
    e.prototype.getOnValue = function () {
      var t = this.getWidgets()[0];
      if (t == null) {
        return undefined;
      } else {
        return t.getOnValue();
      }
    };
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Btn",
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(io);
  function ia(t) {
    return 1 << t;
  }
  (function (t) {
    t[t.ReadOnly = ia(0)] = "ReadOnly";
    t[t.Required = ia(1)] = "Required";
    t[t.NoExport = ia(2)] = "NoExport";
  })(g ||= {});
  (function (t) {
    t[t.NoToggleToOff = ia(14)] = "NoToggleToOff";
    t[t.Radio = ia(15)] = "Radio";
    t[t.PushButton = ia(16)] = "PushButton";
    t[t.RadiosInUnison = ia(25)] = "RadiosInUnison";
  })(m ||= {});
  (function (t) {
    t[t.Multiline = ia(12)] = "Multiline";
    t[t.Password = ia(13)] = "Password";
    t[t.FileSelect = ia(20)] = "FileSelect";
    t[t.DoNotSpellCheck = ia(22)] = "DoNotSpellCheck";
    t[t.DoNotScroll = ia(23)] = "DoNotScroll";
    t[t.Comb = ia(24)] = "Comb";
    t[t.RichText = ia(25)] = "RichText";
  })(v ||= {});
  (function (t) {
    t[t.Combo = ia(17)] = "Combo";
    t[t.Edit = ia(18)] = "Edit";
    t[t.Sort = ia(19)] = "Sort";
    t[t.MultiSelect = ia(21)] = "MultiSelect";
    t[t.DoNotSpellCheck = ia(22)] = "DoNotSpellCheck";
    t[t.CommitOnSelChange = ia(26)] = "CommitOnSelChange";
  })(y ||= {});
  var il = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.setValues = function (t) {
      if (this.hasFlag(y.Combo) && !this.hasFlag(y.Edit) && !this.valuesAreValid(t)) {
        throw new eF();
      }
      if (t.length === 0) {
        this.dict.delete(e5.of("V"));
      }
      if (t.length === 1) {
        this.dict.set(e5.of("V"), t[0]);
      }
      if (t.length > 1) {
        if (!this.hasFlag(y.MultiSelect)) {
          throw new ek();
        }
        this.dict.set(e5.of("V"), this.dict.context.obj(t));
      }
      this.updateSelectedIndices(t);
    };
    e.prototype.valuesAreValid = function (t) {
      var e = this.getOptions();
      function r(r, i) {
        var n = t[r].decodeText();
        if (!e.find(function (t) {
          return n === (t.display || t.value).decodeText();
        })) {
          return {
            value: false
          };
        }
      }
      var i = 0;
      var n = t.length;
      for (; i < n; i++) {
        var o = r(i, n);
        if (typeof o == "object") {
          return o.value;
        }
      }
      return true;
    };
    e.prototype.updateSelectedIndices = function (t) {
      if (t.length > 1) {
        var e = Array(t.length);
        var r = this.getOptions();
        function i(i, n) {
          var o = t[i].decodeText();
          e[i] = r.findIndex(function (t) {
            return o === (t.display || t.value).decodeText();
          });
        }
        var n = 0;
        var o = t.length;
        for (; n < o; n++) {
          i(n, o);
        }
        this.dict.set(e5.of("I"), this.dict.context.obj(e.sort()));
      } else {
        this.dict.delete(e5.of("I"));
      }
    };
    e.prototype.getValues = function () {
      var t = this.V();
      if (t instanceof rF || t instanceof ry) {
        return [t];
      }
      if (t instanceof eq) {
        var e = [];
        var r = 0;
        var i = t.size();
        for (; r < i; r++) {
          var n = t.lookup(r);
          if (n instanceof rF || n instanceof ry) {
            e.push(n);
          }
        }
        return e;
      }
      return [];
    };
    e.prototype.Opt = function () {
      return this.dict.lookupMaybe(e5.of("Opt"), rF, ry, eq);
    };
    e.prototype.setOptions = function (t) {
      var e = Array(t.length);
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        var n = t[r];
        var o = n.value;
        var s = n.display;
        e[r] = this.dict.context.obj([o, s || o]);
      }
      this.dict.set(e5.of("Opt"), this.dict.context.obj(e));
    };
    e.prototype.getOptions = function () {
      var t = this.Opt();
      if (t instanceof rF || t instanceof ry) {
        return [{
          value: t,
          display: t
        }];
      }
      if (t instanceof eq) {
        var e = [];
        var r = 0;
        var i = t.size();
        for (; r < i; r++) {
          var n = t.lookup(r);
          if (n instanceof rF || n instanceof ry) {
            e.push({
              value: n,
              display: n
            });
          }
          if (n instanceof eq && n.size() > 0) {
            var o = n.lookup(0, rF, ry);
            var s = n.lookupMaybe(1, rF, ry);
            e.push({
              value: o,
              display: s || o
            });
          }
        }
        return e;
      }
      return [];
    };
    return e;
  }(ii);
  var ih = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Ch",
        Ff: y.Combo,
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(il);
  var ic = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.addField = function (t) {
      var e = this.normalizedEntries().Kids;
      if (e != null) {
        e.push(t);
      }
    };
    e.prototype.normalizedEntries = function () {
      var t = this.Kids();
      if (!t) {
        t = this.dict.context.obj([]);
        this.dict.set(e5.of("Kids"), t);
      }
      return {
        Kids: t
      };
    };
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({});
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(r9);
  var iu = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(ii);
  var id = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.MaxLen = function () {
      var t = this.dict.lookup(e5.of("MaxLen"));
      if (t instanceof eG) {
        return t;
      }
    };
    e.prototype.Q = function () {
      var t = this.dict.lookup(e5.of("Q"));
      if (t instanceof eG) {
        return t;
      }
    };
    e.prototype.setMaxLength = function (t) {
      this.dict.set(e5.of("MaxLen"), eG.of(t));
    };
    e.prototype.removeMaxLength = function () {
      this.dict.delete(e5.of("MaxLen"));
    };
    e.prototype.getMaxLength = function () {
      var t;
      if ((t = this.MaxLen()) === null || t === undefined) {
        return undefined;
      } else {
        return t.asNumber();
      }
    };
    e.prototype.setQuadding = function (t) {
      this.dict.set(e5.of("Q"), eG.of(t));
    };
    e.prototype.getQuadding = function () {
      var t;
      if ((t = this.Q()) === null || t === undefined) {
        return undefined;
      } else {
        return t.asNumber();
      }
    };
    e.prototype.setValue = function (t) {
      this.dict.set(e5.of("V"), t);
    };
    e.prototype.removeValue = function () {
      this.dict.delete(e5.of("V"));
    };
    e.prototype.getValue = function () {
      var t = this.V();
      if (t instanceof rF || t instanceof ry) {
        return t;
      }
    };
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Tx",
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(ii);
  var ip = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Btn",
        Ff: m.PushButton,
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(io);
  var ig = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.setValue = function (t) {
      if (!this.getOnValues().includes(t) && t !== e5.of("Off")) {
        throw new eF();
      }
      this.dict.set(e5.of("V"), t);
      var e = this.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.getOnValue() === t ? t : e5.of("Off");
        n.setAppearanceState(o);
      }
    };
    e.prototype.getValue = function () {
      var t = this.V();
      if (t instanceof e5) {
        return t;
      } else {
        return e5.of("Off");
      }
    };
    e.prototype.getOnValues = function () {
      var t = this.getWidgets();
      var e = [];
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        var n = t[r].getOnValue();
        if (n) {
          e.push(n);
        }
      }
      return e;
    };
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Btn",
        Ff: m.Radio,
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(io);
  var im = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.fromDict = function (t, r) {
      return new e(t, r);
    };
    e.create = function (t) {
      var r = t.obj({
        FT: "Ch",
        Kids: []
      });
      var i = t.register(r);
      return new e(r, i);
    };
    return e;
  }(il);
  function iv(t) {
    if (!t) {
      return [];
    }
    var e = [];
    var r = 0;
    var i = t.size();
    for (; r < i; r++) {
      var n = t.get(r);
      var o = t.lookup(r);
      if (n instanceof rt && o instanceof e4) {
        e.push([iy(o, n), n]);
      }
    }
    return e;
  }
  function iy(t, e) {
    if (ib(t)) {
      return ic.fromDict(t, e);
    } else {
      return iA(t, e);
    }
  }
  function ib(t) {
    var e = t.lookup(e5.of("Kids"));
    if (e instanceof eq) {
      var r = 0;
      var i = e.size();
      for (; r < i; r++) {
        var n = e.lookup(r);
        if (n instanceof e4 && n.has(e5.of("T"))) {
          return true;
        }
      }
    }
    return false;
  }
  function iA(t, e) {
    var r = iC(t, e5.of("FT"));
    var i = t.context.lookup(r, e5);
    if (i === e5.of("Btn")) {
      return iS(t, e);
    } else if (i === e5.of("Ch")) {
      return ix(t, e);
    } else if (i === e5.of("Tx")) {
      return id.fromDict(t, e);
    } else if (i === e5.of("Sig")) {
      return iu.fromDict(t, e);
    } else {
      return ii.fromDict(t, e);
    }
  }
  function iS(t, e) {
    var i = iC(t, e5.of("Ff"));
    var n = t.context.lookupMaybe(i, eG);
    var o = (n == null ? undefined : n.asNumber()) ?? 0;
    if (iw(o, m.PushButton)) {
      return ip.fromDict(t, e);
    } else if (iw(o, m.Radio)) {
      return ig.fromDict(t, e);
    } else {
      return is.fromDict(t, e);
    }
  }
  function ix(t, e) {
    var i = iC(t, e5.of("Ff"));
    var n = t.context.lookupMaybe(i, eG);
    if (iw((n == null ? undefined : n.asNumber()) ?? 0, y.Combo)) {
      return ih.fromDict(t, e);
    } else {
      return im.fromDict(t, e);
    }
  }
  function iw(t, e) {
    return (t & e) != 0;
  }
  function iC(t, e) {
    var r;
    iT(t, function (t) {
      r ||= t.get(e);
    });
    return r;
  }
  function iT(t, e) {
    e(t);
    var r = t.lookupMaybe(e5.of("Parent"), e4);
    if (r) {
      iT(r, e);
    }
  }
  var iE = function () {
    function t(t) {
      this.dict = t;
    }
    t.prototype.Fields = function () {
      var t = this.dict.lookup(e5.of("Fields"));
      if (t instanceof eq) {
        return t;
      }
    };
    t.prototype.getFields = function () {
      var t = this.normalizedEntries().Fields;
      var e = Array(t.size());
      var r = 0;
      var i = t.size();
      for (; r < i; r++) {
        var n = t.get(r);
        var o = t.lookup(r, e4);
        e[r] = [iy(o, n), n];
      }
      return e;
    };
    t.prototype.getAllFields = function () {
      var t = [];
      function e(r) {
        if (r) {
          var i = 0;
          var n = r.length;
          for (; i < n; i++) {
            var o = r[i];
            t.push(o);
            var s = o[0];
            if (s instanceof ic) {
              e(iv(s.Kids()));
            }
          }
        }
      }
      e(this.getFields());
      return t;
    };
    t.prototype.addField = function (t) {
      var e = this.normalizedEntries().Fields;
      if (e != null) {
        e.push(t);
      }
    };
    t.prototype.removeField = function (t) {
      var e = t.getParent();
      var r = e === undefined ? this.normalizedEntries().Fields : e.Kids();
      var i = r == null ? undefined : r.indexOf(t.ref);
      if (r === undefined || i === undefined) {
        throw Error("Tried to remove inexistent field " + t.getFullyQualifiedName());
      }
      r.remove(i);
      if (e !== undefined && r.size() === 0) {
        this.removeField(e);
      }
    };
    t.prototype.normalizedEntries = function () {
      var t = this.Fields();
      if (!t) {
        t = this.dict.context.obj([]);
        this.dict.set(e5.of("Fields"), t);
      }
      return {
        Fields: t
      };
    };
    t.fromDict = function (e) {
      return new t(e);
    };
    t.create = function (e) {
      return new t(e.obj({
        Fields: []
      }));
    };
    return t;
  }();
  var iF = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.Pages = function () {
      return this.lookup(e5.of("Pages"), e4);
    };
    e.prototype.AcroForm = function () {
      return this.lookupMaybe(e5.of("AcroForm"), e4);
    };
    e.prototype.getAcroForm = function () {
      var t = this.AcroForm();
      if (t) {
        return iE.fromDict(t);
      }
    };
    e.prototype.getOrCreateAcroForm = function () {
      var t = this.getAcroForm();
      if (!t) {
        t = iE.create(this.context);
        var e = this.context.register(t.dict);
        this.set(e5.of("AcroForm"), e);
      }
      return t;
    };
    e.prototype.ViewerPreferences = function () {
      return this.lookupMaybe(e5.of("ViewerPreferences"), e4);
    };
    e.prototype.getViewerPreferences = function () {
      var t = this.ViewerPreferences();
      if (t) {
        return r6.fromDict(t);
      }
    };
    e.prototype.getOrCreateViewerPreferences = function () {
      var t = this.getViewerPreferences();
      if (!t) {
        t = r6.create(this.context);
        var e = this.context.register(t.dict);
        this.set(e5.of("ViewerPreferences"), e);
      }
      return t;
    };
    e.prototype.insertLeafNode = function (t, e) {
      var r = this.get(e5.of("Pages"));
      return this.Pages().insertLeafNode(t, e) || r;
    };
    e.prototype.removeLeafNode = function (t) {
      this.Pages().removeLeafNode(t);
    };
    e.withContextAndPages = function (t, r) {
      var i = new Map();
      i.set(e5.of("Type"), e5.of("Catalog"));
      i.set(e5.of("Pages"), r);
      return new e(i, t);
    };
    e.fromMapWithContext = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(e4);
  var ik = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.Parent = function () {
      return this.lookup(e5.of("Parent"));
    };
    e.prototype.Kids = function () {
      return this.lookup(e5.of("Kids"), eq);
    };
    e.prototype.Count = function () {
      return this.lookup(e5.of("Count"), eG);
    };
    e.prototype.pushTreeNode = function (t) {
      this.Kids().push(t);
    };
    e.prototype.pushLeafNode = function (t) {
      var e = this.Kids();
      this.insertLeafKid(e.size(), t);
    };
    e.prototype.insertLeafNode = function (t, r) {
      var i = this.Kids();
      var n = this.Count().asNumber();
      if (r > n) {
        throw new eC(r, n);
      }
      var o = r;
      var s = 0;
      var a = i.size();
      for (; s < a; s++) {
        if (o === 0) {
          this.insertLeafKid(s, t);
          return;
        }
        var l = i.get(s);
        var h = this.context.lookup(l);
        if (h instanceof e) {
          if (h.Count().asNumber() > o) {
            return h.insertLeafNode(t, o) || l;
          }
          o -= h.Count().asNumber();
        }
        if (h instanceof rl) {
          o -= 1;
        }
      }
      if (o === 0) {
        this.insertLeafKid(i.size(), t);
        return;
      }
      throw new eT(r, "insertLeafNode");
    };
    e.prototype.removeLeafNode = function (t, r = true) {
      var i = this.Kids();
      var n = this.Count().asNumber();
      if (t >= n) {
        throw new eC(t, n);
      }
      var o = t;
      var s = 0;
      var a = i.size();
      for (; s < a; s++) {
        var l = i.get(s);
        var h = this.context.lookup(l);
        if (h instanceof e) {
          if (h.Count().asNumber() > o) {
            h.removeLeafNode(o, r);
            if (r && h.Kids().size() === 0) {
              i.remove(s);
            }
            return;
          }
          o -= h.Count().asNumber();
        }
        if (h instanceof rl) {
          if (o === 0) {
            this.removeKid(s);
            return;
          }
          o -= 1;
        }
      }
      throw new eT(t, "removeLeafNode");
    };
    e.prototype.ascend = function (t) {
      t(this);
      var e = this.Parent();
      if (e) {
        e.ascend(t);
      }
    };
    e.prototype.traverse = function (t) {
      var r = this.Kids();
      var i = 0;
      var n = r.size();
      for (; i < n; i++) {
        var o = r.get(i);
        var s = this.context.lookup(o);
        if (s instanceof e) {
          s.traverse(t);
        }
        t(s, o);
      }
    };
    e.prototype.insertLeafKid = function (t, e) {
      var r = this.Kids();
      this.ascend(function (t) {
        var e = t.Count().asNumber() + 1;
        t.set(e5.of("Count"), eG.of(e));
      });
      r.insert(t, e);
    };
    e.prototype.removeKid = function (t) {
      var e = this.Kids();
      if (e.lookup(t) instanceof rl) {
        this.ascend(function (t) {
          var e = t.Count().asNumber() - 1;
          t.set(e5.of("Count"), eG.of(e));
        });
      }
      e.remove(t);
    };
    e.withContext = function (t, r) {
      var i = new Map();
      i.set(e5.of("Type"), e5.of("Pages"));
      i.set(e5.of("Kids"), t.obj([]));
      i.set(e5.of("Count"), t.obj(0));
      if (r) {
        i.set(e5.of("Parent"), r);
      }
      return new e(i, t);
    };
    e.fromMapWithContext = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(e4);
  var iP = new Uint8Array(256);
  iP[ez.Zero] = 1;
  iP[ez.One] = 1;
  iP[ez.Two] = 1;
  iP[ez.Three] = 1;
  iP[ez.Four] = 1;
  iP[ez.Five] = 1;
  iP[ez.Six] = 1;
  iP[ez.Seven] = 1;
  iP[ez.Eight] = 1;
  iP[ez.Nine] = 1;
  var iR = new Uint8Array(256);
  iR[ez.Period] = 1;
  iR[ez.Plus] = 1;
  iR[ez.Minus] = 1;
  var iM = new Uint8Array(256);
  var iO = 0;
  var iD = 256;
  for (; iO < iD; iO++) {
    iM[iO] = iP[iO] || iR[iO] ? 1 : 0;
  }
  var iI = ez.Newline;
  var iL = ez.CarriageReturn;
  var iN = function () {
    function t(t, e = false) {
      this.bytes = t;
      this.capNumbers = e;
    }
    t.prototype.parseRawInt = function () {
      var t = "";
      for (; !this.bytes.done() && iP[this.bytes.peek()];) {
        t += V(this.bytes.next());
      }
      var e = Number(t);
      if (!t || !isFinite(e)) {
        throw new eM(this.bytes.position(), t);
      }
      return e;
    };
    t.prototype.parseRawNumber = function () {
      var t = "";
      for (; !this.bytes.done();) {
        var e = this.bytes.peek();
        if (!iM[e] || (t += V(this.bytes.next()), e === ez.Period)) {
          break;
        }
      }
      while (!this.bytes.done()) {
        var e = this.bytes.peek();
        if (!iP[e]) {
          break;
        }
        t += V(this.bytes.next());
      }
      var r = Number(t);
      if (!t || !isFinite(r)) {
        throw new eM(this.bytes.position(), t);
      }
      if (r > Number.MAX_SAFE_INTEGER && this.capNumbers) {
        return Number.MAX_SAFE_INTEGER;
      } else {
        return r;
      }
    };
    t.prototype.skipWhitespace = function () {
      while (!this.bytes.done() && eZ[this.bytes.peek()]) {
        this.bytes.next();
      }
    };
    t.prototype.skipLine = function () {
      while (!this.bytes.done()) {
        var t = this.bytes.peek();
        if (t === iI || t === iL) {
          return;
        }
        this.bytes.next();
      }
    };
    t.prototype.skipComment = function () {
      if (this.bytes.peek() !== ez.Percent) {
        return false;
      }
      while (!this.bytes.done()) {
        var t = this.bytes.peek();
        if (t === iI || t === iL) {
          break;
        }
        this.bytes.next();
      }
      return true;
    };
    t.prototype.skipWhitespaceAndComments = function () {
      for (this.skipWhitespace(); this.skipComment();) {
        this.skipWhitespace();
      }
    };
    t.prototype.matchKeyword = function (t) {
      var e = this.bytes.offset();
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        if (this.bytes.done() || this.bytes.next() !== t[r]) {
          this.bytes.moveTo(e);
          return false;
        }
      }
      return true;
    };
    return t;
  }();
  var iB = function () {
    function t(t) {
      this.idx = 0;
      this.line = 0;
      this.column = 0;
      this.bytes = t;
      this.length = this.bytes.length;
    }
    t.prototype.moveTo = function (t) {
      this.idx = t;
    };
    t.prototype.next = function () {
      var t = this.bytes[this.idx++];
      if (t === ez.Newline) {
        this.line += 1;
        this.column = 0;
      } else {
        this.column += 1;
      }
      return t;
    };
    t.prototype.assertNext = function (t) {
      if (this.peek() !== t) {
        throw new eD(this.position(), t, this.peek());
      }
      return this.next();
    };
    t.prototype.peek = function () {
      return this.bytes[this.idx];
    };
    t.prototype.peekAhead = function (t) {
      return this.bytes[this.idx + t];
    };
    t.prototype.peekAt = function (t) {
      return this.bytes[t];
    };
    t.prototype.done = function () {
      return this.idx >= this.length;
    };
    t.prototype.offset = function () {
      return this.idx;
    };
    t.prototype.slice = function (t, e) {
      return this.bytes.slice(t, e);
    };
    t.prototype.position = function () {
      return {
        line: this.line,
        column: this.column,
        offset: this.idx
      };
    };
    t.of = function (e) {
      return new t(e);
    };
    t.fromPDFRawStream = function (e) {
      return t.of(r1(e).decode());
    };
    return t;
  }();
  var ij = ez.Space;
  var i_ = ez.CarriageReturn;
  var iU = ez.Newline;
  var iz = [ez.s, ez.t, ez.r, ez.e, ez.a, ez.m];
  var iV = [ez.e, ez.n, ez.d, ez.s, ez.t, ez.r, ez.e, ez.a, ez.m];
  var iW = {
    header: [ez.Percent, ez.P, ez.D, ez.F, ez.Dash],
    eof: [ez.Percent, ez.Percent, ez.E, ez.O, ez.F],
    obj: [ez.o, ez.b, ez.j],
    endobj: [ez.e, ez.n, ez.d, ez.o, ez.b, ez.j],
    xref: [ez.x, ez.r, ez.e, ez.f],
    trailer: [ez.t, ez.r, ez.a, ez.i, ez.l, ez.e, ez.r],
    startxref: [ez.s, ez.t, ez.a, ez.r, ez.t, ez.x, ez.r, ez.e, ez.f],
    true: [ez.t, ez.r, ez.u, ez.e],
    false: [ez.f, ez.a, ez.l, ez.s, ez.e],
    null: [ez.n, ez.u, ez.l, ez.l],
    stream: iz,
    streamEOF1: typescriptRuntimeHelpers.concatArrays(iz, [ij, i_, iU]),
    streamEOF2: typescriptRuntimeHelpers.concatArrays(iz, [i_, iU]),
    streamEOF3: typescriptRuntimeHelpers.concatArrays(iz, [i_]),
    streamEOF4: typescriptRuntimeHelpers.concatArrays(iz, [iU]),
    endstream: iV,
    EOF1endstream: typescriptRuntimeHelpers.concatArrays([i_, iU], iV),
    EOF2endstream: typescriptRuntimeHelpers.concatArrays([i_], iV),
    EOF3endstream: typescriptRuntimeHelpers.concatArrays([iU], iV)
  };
  var iG = function (t) {
    function e(e, r, i = false) {
      var n = t.call(this, e, i) || this;
      n.context = r;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.parseObject = function () {
      this.skipWhitespaceAndComments();
      if (this.matchKeyword(iW.true)) {
        return eK.True;
      }
      if (this.matchKeyword(iW.false)) {
        return eK.False;
      }
      if (this.matchKeyword(iW.null)) {
        return e3;
      }
      var t = this.bytes.peek();
      if (t === ez.LessThan && this.bytes.peekAhead(1) === ez.LessThan) {
        return this.parseDictOrStream();
      }
      if (t === ez.LessThan) {
        return this.parseHexString();
      }
      if (t === ez.LeftParen) {
        return this.parseString();
      }
      if (t === ez.ForwardSlash) {
        return this.parseName();
      }
      if (t === ez.LeftSquareBracket) {
        return this.parseArray();
      }
      if (iM[t]) {
        return this.parseNumberOrRef();
      }
      throw new eI(this.bytes.position(), t);
    };
    e.prototype.parseNumberOrRef = function () {
      var t = this.parseRawNumber();
      this.skipWhitespaceAndComments();
      var e = this.bytes.offset();
      if (iP[this.bytes.peek()]) {
        var r = this.parseRawNumber();
        this.skipWhitespaceAndComments();
        if (this.bytes.peek() === ez.R) {
          this.bytes.assertNext(ez.R);
          return rt.of(t, r);
        }
      }
      this.bytes.moveTo(e);
      return eG.of(t);
    };
    e.prototype.parseHexString = function () {
      var t = "";
      for (this.bytes.assertNext(ez.LessThan); !this.bytes.done() && this.bytes.peek() !== ez.GreaterThan;) {
        t += V(this.bytes.next());
      }
      this.bytes.assertNext(ez.GreaterThan);
      return ry.of(t);
    };
    e.prototype.parseString = function () {
      var t = 0;
      var e = false;
      var r = "";
      while (!this.bytes.done()) {
        var i = this.bytes.next();
        r += V(i);
        if (!e) {
          if (i === ez.LeftParen) {
            t += 1;
          }
          if (i === ez.RightParen) {
            t -= 1;
          }
        }
        if (i === ez.BackSlash) {
          e = !e;
        } else {
          e &&= false;
        }
        if (t === 0) {
          return rF.of(r.substring(1, r.length - 1));
        }
      }
      throw new eB(this.bytes.position());
    };
    e.prototype.parseName = function () {
      this.bytes.assertNext(ez.ForwardSlash);
      var t = "";
      for (; !this.bytes.done();) {
        var e = this.bytes.peek();
        if (eZ[e] || eX[e]) {
          break;
        }
        t += V(e);
        this.bytes.next();
      }
      return e5.of(t);
    };
    e.prototype.parseArray = function () {
      this.bytes.assertNext(ez.LeftSquareBracket);
      this.skipWhitespaceAndComments();
      var t = eq.withContext(this.context);
      for (; this.bytes.peek() !== ez.RightSquareBracket;) {
        var e = this.parseObject();
        t.push(e);
        this.skipWhitespaceAndComments();
      }
      this.bytes.assertNext(ez.RightSquareBracket);
      return t;
    };
    e.prototype.parseDict = function () {
      this.bytes.assertNext(ez.LessThan);
      this.bytes.assertNext(ez.LessThan);
      this.skipWhitespaceAndComments();
      var t = new Map();
      for (; !this.bytes.done() && this.bytes.peek() !== ez.GreaterThan && this.bytes.peekAhead(1) !== ez.GreaterThan;) {
        var e = this.parseName();
        var r = this.parseObject();
        t.set(e, r);
        this.skipWhitespaceAndComments();
      }
      this.skipWhitespaceAndComments();
      this.bytes.assertNext(ez.GreaterThan);
      this.bytes.assertNext(ez.GreaterThan);
      var i = t.get(e5.of("Type"));
      if (i === e5.of("Catalog")) {
        return iF.fromMapWithContext(t, this.context);
      } else if (i === e5.of("Pages")) {
        return ik.fromMapWithContext(t, this.context);
      } else if (i === e5.of("Page")) {
        return rl.fromMapWithContext(t, this.context);
      } else {
        return e4.fromMapWithContext(t, this.context);
      }
    };
    e.prototype.parseDictOrStream = function () {
      var t;
      var e = this.bytes.position();
      var r = this.parseDict();
      this.skipWhitespaceAndComments();
      if (!this.matchKeyword(iW.streamEOF1) && !this.matchKeyword(iW.streamEOF2) && !this.matchKeyword(iW.streamEOF3) && !this.matchKeyword(iW.streamEOF4) && !this.matchKeyword(iW.stream)) {
        return r;
      }
      var i = this.bytes.offset();
      var n = r.get(e5.of("Length"));
      if (n instanceof eG) {
        t = i + n.asNumber();
        this.bytes.moveTo(t);
        this.skipWhitespaceAndComments();
        if (!this.matchKeyword(iW.endstream)) {
          this.bytes.moveTo(i);
          t = this.findEndOfStreamFallback(e);
        }
      } else {
        t = this.findEndOfStreamFallback(e);
      }
      var o = this.bytes.slice(i, t);
      return e8.of(r, o);
    };
    e.prototype.findEndOfStreamFallback = function (t) {
      var e = 1;
      var r = this.bytes.offset();
      while (!this.bytes.done() && (r = this.bytes.offset(), this.matchKeyword(iW.stream) ? e += 1 : this.matchKeyword(iW.EOF1endstream) || this.matchKeyword(iW.EOF2endstream) || this.matchKeyword(iW.EOF3endstream) || this.matchKeyword(iW.endstream) ? e -= 1 : this.bytes.next(), e !== 0));
      if (e !== 0) {
        throw new eN(t);
      }
      return r;
    };
    e.forBytes = function (t, r, i) {
      return new e(iB.of(t), r, i);
    };
    e.forByteStream = function (t, r, i = false) {
      return new e(t, r, i);
    };
    return e;
  }(iN);
  var iq = function (t) {
    function e(e, r) {
      var i = t.call(this, iB.fromPDFRawStream(e), e.dict.context) || this;
      var n = e.dict;
      i.alreadyParsed = false;
      i.shouldWaitForTick = r || function () {
        return false;
      };
      i.firstOffset = n.lookup(e5.of("First"), eG).asNumber();
      i.objectCount = n.lookup(e5.of("N"), eG).asNumber();
      return i;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.parseIntoContext = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        return typescriptRuntimeHelpers.generator(this, function (l) {
          switch (l.label) {
            case 0:
              if (this.alreadyParsed) {
                throw new ey("PDFObjectStreamParser", "parseIntoContext");
              }
              this.alreadyParsed = true;
              t = this.parseOffsetsAndObjectNumbers();
              e = 0;
              r = t.length;
              l.label = 1;
            case 1:
              if (!(e < r)) {
                return [3, 4];
              }
              n = (i = t[e]).objectNumber;
              o = i.offset;
              this.bytes.moveTo(this.firstOffset + o);
              s = this.parseObject();
              a = rt.of(n, 0);
              this.context.assign(a, s);
              if (!this.shouldWaitForTick()) {
                return [3, 3];
              }
              return [4, ty()];
            case 2:
              l.sent();
              l.label = 3;
            case 3:
              e++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    e.prototype.parseOffsetsAndObjectNumbers = function () {
      var t = [];
      var e = 0;
      var r = this.objectCount;
      for (; e < r; e++) {
        this.skipWhitespaceAndComments();
        var i = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var n = this.parseRawInt();
        t.push({
          objectNumber: i,
          offset: n
        });
      }
      return t;
    };
    e.forStream = function (t, r) {
      return new e(t, r);
    };
    return e;
  }(iG);
  var iH = function () {
    function t(t) {
      this.alreadyParsed = false;
      this.dict = t.dict;
      this.bytes = iB.fromPDFRawStream(t);
      this.context = this.dict.context;
      var e = this.dict.lookup(e5.of("Size"), eG);
      var r = this.dict.lookup(e5.of("Index"));
      if (r instanceof eq) {
        this.subsections = [];
        var i = 0;
        var n = r.size();
        for (; i < n; i += 2) {
          var o = r.lookup(i + 0, eG).asNumber();
          var s = r.lookup(i + 1, eG).asNumber();
          this.subsections.push({
            firstObjectNumber: o,
            length: s
          });
        }
      } else {
        this.subsections = [{
          firstObjectNumber: 0,
          length: e.asNumber()
        }];
      }
      var a = this.dict.lookup(e5.of("W"), eq);
      this.byteWidths = [-1, -1, -1];
      var i = 0;
      var n = a.size();
      for (; i < n; i++) {
        this.byteWidths[i] = a.lookup(i, eG).asNumber();
      }
    }
    t.prototype.parseIntoContext = function () {
      if (this.alreadyParsed) {
        throw new ey("PDFXRefStreamParser", "parseIntoContext");
      }
      this.alreadyParsed = true;
      this.context.trailerInfo = {
        Root: this.dict.get(e5.of("Root")),
        Encrypt: this.dict.get(e5.of("Encrypt")),
        Info: this.dict.get(e5.of("Info")),
        ID: this.dict.get(e5.of("ID"))
      };
      return this.parseEntries();
    };
    t.prototype.parseEntries = function () {
      var t = [];
      var e = this.byteWidths;
      var r = e[0];
      var i = e[1];
      var n = e[2];
      var o = 0;
      var s = this.subsections.length;
      for (; o < s; o++) {
        var a = this.subsections[o];
        var l = a.firstObjectNumber;
        var h = a.length;
        var c = 0;
        for (; c < h; c++) {
          var u = 0;
          var d = 0;
          var f = r;
          for (; d < f; d++) {
            u = u << 8 | this.bytes.next();
          }
          var p = 0;
          var d = 0;
          var f = i;
          for (; d < f; d++) {
            p = p << 8 | this.bytes.next();
          }
          var g = 0;
          var d = 0;
          var f = n;
          for (; d < f; d++) {
            g = g << 8 | this.bytes.next();
          }
          if (r === 0) {
            u = 1;
          }
          var m = l + c;
          var v = {
            ref: rt.of(m, g),
            offset: p,
            deleted: u === 0,
            inObjectStream: u === 2
          };
          t.push(v);
        }
      }
      return t;
    };
    t.forStream = function (e) {
      return new t(e);
    };
    return t;
  }();
  var iK = function (t) {
    function e(e, r = Infinity, i = false, n = false) {
      var o = t.call(this, iB.of(e), ra.create(), n) || this;
      o.alreadyParsed = false;
      o.parsedObjects = 0;
      o.shouldWaitForTick = function () {
        o.parsedObjects += 1;
        return o.parsedObjects % o.objectsPerTick == 0;
      };
      o.objectsPerTick = r;
      o.throwOnInvalidObject = i;
      return o;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.parseDocument = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        return typescriptRuntimeHelpers.generator(this, function (r) {
          switch (r.label) {
            case 0:
              if (this.alreadyParsed) {
                throw new ey("PDFParser", "parseDocument");
              }
              this.alreadyParsed = true;
              this.context.header = this.parseHeader();
              r.label = 1;
            case 1:
              if (this.bytes.done()) {
                return [3, 3];
              }
              return [4, this.parseDocumentSection()];
            case 2:
              r.sent();
              if ((e = this.bytes.offset()) === t) {
                throw new ej(this.bytes.position());
              }
              t = e;
              return [3, 1];
            case 3:
              this.maybeRecoverRoot();
              if (this.context.lookup(rt.of(0))) {
                this.context.delete(rt.of(0));
              }
              return [2, this.context];
          }
        });
      });
    };
    e.prototype.maybeRecoverRoot = function () {
      function t(t) {
        return t instanceof e4 && t.lookup(e5.of("Type")) === e5.of("Catalog");
      }
      if (!t(this.context.lookup(this.context.trailerInfo.Root))) {
        var e = this.context.enumerateIndirectObjects();
        var r = 0;
        var i = e.length;
        for (; r < i; r++) {
          var n = e[r];
          var o = n[0];
          if (t(n[1])) {
            this.context.trailerInfo.Root = o;
          }
        }
      }
    };
    e.prototype.parseHeader = function () {
      while (!this.bytes.done()) {
        if (this.matchKeyword(iW.header)) {
          var t = this.parseRawInt();
          this.bytes.assertNext(ez.Period);
          var e = this.parseRawInt();
          var r = eV.forVersion(t, e);
          this.skipBinaryHeaderComment();
          return r;
        }
        this.bytes.next();
      }
      throw new e_(this.bytes.position());
    };
    e.prototype.parseIndirectObjectHeader = function () {
      this.skipWhitespaceAndComments();
      var t = this.parseRawInt();
      this.skipWhitespaceAndComments();
      var e = this.parseRawInt();
      this.skipWhitespaceAndComments();
      if (!this.matchKeyword(iW.obj)) {
        throw new eU(this.bytes.position(), iW.obj);
      }
      return rt.of(t, e);
    };
    e.prototype.matchIndirectObjectHeader = function () {
      var t = this.bytes.offset();
      try {
        this.parseIndirectObjectHeader();
        return true;
      } catch (e) {
        this.bytes.moveTo(t);
        return false;
      }
    };
    e.prototype.parseIndirectObject = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        return typescriptRuntimeHelpers.generator(this, function (r) {
          switch (r.label) {
            case 0:
              t = this.parseIndirectObjectHeader();
              this.skipWhitespaceAndComments();
              e = this.parseObject();
              this.skipWhitespaceAndComments();
              this.matchKeyword(iW.endobj);
              if (!(e instanceof e8) || e.dict.lookup(e5.of("Type")) !== e5.of("ObjStm")) {
                return [3, 2];
              }
              return [4, iq.forStream(e, this.shouldWaitForTick).parseIntoContext()];
            case 1:
              r.sent();
              return [3, 3];
            case 2:
              if (e instanceof e8 && e.dict.lookup(e5.of("Type")) === e5.of("XRef")) {
                iH.forStream(e).parseIntoContext();
              } else {
                this.context.assign(t, e);
              }
              r.label = 3;
            case 3:
              return [2, t];
          }
        });
      });
    };
    e.prototype.tryToParseInvalidIndirectObject = function () {
      var t = this.bytes.position();
      var e = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
      if (this.throwOnInvalidObject) {
        throw Error(e);
      }
      var r = this.parseIndirectObjectHeader();
      this.skipWhitespaceAndComments();
      var i = this.bytes.offset();
      var n = true;
      while (!this.bytes.done() && (this.matchKeyword(iW.endobj) && (n = false), n)) {
        this.bytes.next();
      }
      if (n) {
        throw new eL(t);
      }
      var o = this.bytes.offset() - iW.endobj.length;
      var s = rg.of(this.bytes.slice(i, o));
      this.context.assign(r, s);
      return r;
    };
    e.prototype.parseIndirectObjects = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        return typescriptRuntimeHelpers.generator(this, function (r) {
          switch (r.label) {
            case 0:
              this.skipWhitespaceAndComments();
              r.label = 1;
            case 1:
              if (!!this.bytes.done() || !iP[this.bytes.peek()]) {
                return [3, 8];
              }
              t = this.bytes.offset();
              r.label = 2;
            case 2:
              r.trys.push([2, 4,, 5]);
              return [4, this.parseIndirectObject()];
            case 3:
              r.sent();
              return [3, 5];
            case 4:
              e = r.sent();
              this.bytes.moveTo(t);
              this.tryToParseInvalidIndirectObject();
              return [3, 5];
            case 5:
              this.skipWhitespaceAndComments();
              this.skipJibberish();
              if (!this.shouldWaitForTick()) {
                return [3, 7];
              }
              return [4, ty()];
            case 6:
              r.sent();
              r.label = 7;
            case 7:
              return [3, 1];
            case 8:
              return [2];
          }
        });
      });
    };
    e.prototype.maybeParseCrossRefSection = function () {
      this.skipWhitespaceAndComments();
      if (this.matchKeyword(iW.xref)) {
        this.skipWhitespaceAndComments();
        var t = -1;
        var e = rc.createEmpty();
        while (!this.bytes.done() && iP[this.bytes.peek()]) {
          var r = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var i = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var n = this.bytes.peek();
          if (n === ez.n || n === ez.f) {
            var o = rt.of(t, i);
            if (this.bytes.next() === ez.n) {
              e.addEntry(o, r);
            } else {
              e.addDeletedEntry(o, r);
            }
            t += 1;
          } else {
            t = r;
          }
          this.skipWhitespaceAndComments();
        }
        return e;
      }
    };
    e.prototype.maybeParseTrailerDict = function () {
      this.skipWhitespaceAndComments();
      if (this.matchKeyword(iW.trailer)) {
        this.skipWhitespaceAndComments();
        var t = this.parseDict();
        var e = this.context;
        e.trailerInfo = {
          Root: t.get(e5.of("Root")) || e.trailerInfo.Root,
          Encrypt: t.get(e5.of("Encrypt")) || e.trailerInfo.Encrypt,
          Info: t.get(e5.of("Info")) || e.trailerInfo.Info,
          ID: t.get(e5.of("ID")) || e.trailerInfo.ID
        };
      }
    };
    e.prototype.maybeParseTrailer = function () {
      this.skipWhitespaceAndComments();
      if (this.matchKeyword(iW.startxref)) {
        this.skipWhitespaceAndComments();
        var t = this.parseRawInt();
        this.skipWhitespace();
        this.matchKeyword(iW.eof);
        this.skipWhitespaceAndComments();
        this.matchKeyword(iW.eof);
        this.skipWhitespaceAndComments();
        return ru.forLastCrossRefSectionOffset(t);
      }
    };
    e.prototype.parseDocumentSection = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.parseIndirectObjects()];
            case 1:
              t.sent();
              this.maybeParseCrossRefSection();
              this.maybeParseTrailerDict();
              this.maybeParseTrailer();
              this.skipJibberish();
              return [2];
          }
        });
      });
    };
    e.prototype.skipJibberish = function () {
      for (this.skipWhitespaceAndComments(); !this.bytes.done();) {
        var t = this.bytes.offset();
        var e = this.bytes.peek();
        if (e >= ez.Space && e <= ez.Tilde && (this.matchKeyword(iW.xref) || this.matchKeyword(iW.trailer) || this.matchKeyword(iW.startxref) || this.matchIndirectObjectHeader())) {
          this.bytes.moveTo(t);
          break;
        }
        this.bytes.next();
      }
    };
    e.prototype.skipBinaryHeaderComment = function () {
      this.skipWhitespaceAndComments();
      try {
        var t = this.bytes.offset();
        this.parseIndirectObjectHeader();
        this.bytes.moveTo(t);
      } catch (t) {
        this.bytes.next();
        this.skipWhitespaceAndComments();
      }
    };
    e.forBytesWithOptions = function (t, r, i, n) {
      return new e(t, r, i, n);
    };
    return e;
  }(iG);
  function iX(t) {
    return 1 << t;
  }
  (function (t) {
    t[t.Invisible = iX(0)] = "Invisible";
    t[t.Hidden = iX(1)] = "Hidden";
    t[t.Print = iX(2)] = "Print";
    t[t.NoZoom = iX(3)] = "NoZoom";
    t[t.NoRotate = iX(4)] = "NoRotate";
    t[t.NoView = iX(5)] = "NoView";
    t[t.ReadOnly = iX(6)] = "ReadOnly";
    t[t.Locked = iX(7)] = "Locked";
    t[t.ToggleNoView = iX(8)] = "ToggleNoView";
    t[t.LockedContents = iX(9)] = "LockedContents";
  })(b ||= {});
  function iZ(t) {
    if (t instanceof e5) {
      return t;
    } else {
      return e5.of(t);
    }
  }
  function iY(t) {
    if (t instanceof eG) {
      return t;
    } else {
      return eG.of(t);
    }
  }
  function iJ(t) {
    if (t instanceof eG) {
      return t.asNumber();
    } else {
      return t;
    }
  }
  (function (t) {
    t.Degrees = "degrees";
    t.Radians = "radians";
  })(A ||= {});
  function iQ(t) {
    er(t, "degreeAngle", ["number"]);
    return {
      type: A.Degrees,
      angle: t
    };
  }
  var i$ = A.Radians;
  var i0 = A.Degrees;
  function i1(t) {
    return t * Math.PI / 180;
  }
  function i2(t) {
    return t * 180 / Math.PI;
  }
  function i5(t) {
    if (t.type === i$) {
      return t.angle;
    } else if (t.type === i0) {
      return i1(t.angle);
    } else {
      return tN("Invalid rotation: " + JSON.stringify(t));
    }
  }
  function i3(t) {
    if (t.type === i$) {
      return i2(t.angle);
    } else if (t.type === i0) {
      return t.angle;
    } else {
      return tN("Invalid rotation: " + JSON.stringify(t));
    }
  }
  function i4(t = 0) {
    var e = t / 90 % 4;
    if (e === 0) {
      return 0;
    } else if (e === 1) {
      return 90;
    } else if (e === 2) {
      return 180;
    } else {
      return (e === 3) * 270;
    }
  }
  function i6(t, e = 0) {
    var r = i4(e);
    if (r === 90 || r === 270) {
      return {
        width: t.height,
        height: t.width
      };
    } else {
      return {
        width: t.width,
        height: t.height
      };
    }
  }
  function i8(t, e = 0, r = 0) {
    var i = t.x;
    var n = t.y;
    var o = t.width;
    var s = t.height;
    var a = i4(r);
    var l = e / 2;
    if (a === 0) {
      return {
        x: i - l,
        y: n - l,
        width: o,
        height: s
      };
    } else if (a === 90) {
      return {
        x: i - s + l,
        y: n - l,
        width: s,
        height: o
      };
    } else if (a === 180) {
      return {
        x: i - o + l,
        y: n - s + l,
        width: o,
        height: s
      };
    } else if (a === 270) {
      return {
        x: i - l,
        y: n - o + l,
        width: s,
        height: o
      };
    } else {
      return {
        x: i - l,
        y: n - l,
        width: o,
        height: s
      };
    }
  }
  function i9() {
    return re.of(rr.ClipNonZero);
  }
  var i7 = Math.cos;
  var nt = Math.sin;
  var ne = Math.tan;
  function nr(t, e, r, i, n, o) {
    return re.of(rr.ConcatTransformationMatrix, [iY(t), iY(e), iY(r), iY(i), iY(n), iY(o)]);
  }
  function ni(t, e) {
    return nr(1, 0, 0, 1, t, e);
  }
  function nn(t, e) {
    return nr(t, 0, 0, e, 0, 0);
  }
  function no(t) {
    return nr(i7(iJ(t)), nt(iJ(t)), -nt(iJ(t)), i7(iJ(t)), 0, 0);
  }
  function ns(t) {
    return no(i1(iJ(t)));
  }
  function na(t, e) {
    return nr(1, ne(iJ(t)), ne(iJ(e)), 1, 0, 0);
  }
  function nl(t, e) {
    return re.of(rr.SetLineDashPattern, ["[" + t.map(iY).join(" ") + "]", iY(e)]);
  }
  (function (t) {
    t[t.Butt = 0] = "Butt";
    t[t.Round = 1] = "Round";
    t[t.Projecting = 2] = "Projecting";
  })(S ||= {});
  function nh(t) {
    return re.of(rr.SetLineCapStyle, [iY(t)]);
  }
  (function (t) {
    t[t.Miter = 0] = "Miter";
    t[t.Round = 1] = "Round";
    t[t.Bevel = 2] = "Bevel";
  })(x ||= {});
  function nc(t) {
    return re.of(rr.SetGraphicsStateParams, [iZ(t)]);
  }
  function nu() {
    return re.of(rr.PushGraphicsState);
  }
  function nd() {
    return re.of(rr.PopGraphicsState);
  }
  function nf(t) {
    return re.of(rr.SetLineWidth, [iY(t)]);
  }
  function np(t, e, r, i, n, o) {
    return re.of(rr.AppendBezierCurve, [iY(t), iY(e), iY(r), iY(i), iY(n), iY(o)]);
  }
  function ng(t, e, r, i) {
    return re.of(rr.CurveToReplicateInitialPoint, [iY(t), iY(e), iY(r), iY(i)]);
  }
  function nm() {
    return re.of(rr.ClosePath);
  }
  function nv(t, e) {
    return re.of(rr.MoveTo, [iY(t), iY(e)]);
  }
  function ny(t, e) {
    return re.of(rr.LineTo, [iY(t), iY(e)]);
  }
  function nb() {
    return re.of(rr.StrokePath);
  }
  function nA() {
    return re.of(rr.FillNonZero);
  }
  function nS() {
    return re.of(rr.FillNonZeroAndStroke);
  }
  function nx() {
    return re.of(rr.EndPath);
  }
  function nw() {
    return re.of(rr.NextLine);
  }
  function nC(t) {
    return re.of(rr.ShowText, [t]);
  }
  function nT() {
    return re.of(rr.BeginText);
  }
  function nE() {
    return re.of(rr.EndText);
  }
  function nF(t, e) {
    return re.of(rr.SetFontAndSize, [iZ(t), iY(e)]);
  }
  function nk(t) {
    return re.of(rr.SetTextLineHeight, [iY(t)]);
  }
  (function (t) {
    t[t.Fill = 0] = "Fill";
    t[t.Outline = 1] = "Outline";
    t[t.FillAndOutline = 2] = "FillAndOutline";
    t[t.Invisible = 3] = "Invisible";
    t[t.FillAndClip = 4] = "FillAndClip";
    t[t.OutlineAndClip = 5] = "OutlineAndClip";
    t[t.FillAndOutlineAndClip = 6] = "FillAndOutlineAndClip";
    t[t.Clip = 7] = "Clip";
  })(w ||= {});
  function nP(t, e, r, i, n, o) {
    return re.of(rr.SetTextMatrix, [iY(t), iY(e), iY(r), iY(i), iY(n), iY(o)]);
  }
  function nR(t, e, r, i, n) {
    return nP(i7(iJ(t)), nt(iJ(t)) + ne(iJ(e)), -nt(iJ(t)) + ne(iJ(r)), i7(iJ(t)), i, n);
  }
  function nM(t) {
    return re.of(rr.DrawObject, [iZ(t)]);
  }
  function nO(t) {
    return re.of(rr.NonStrokingColorGray, [iY(t)]);
  }
  function nD(t) {
    return re.of(rr.StrokingColorGray, [iY(t)]);
  }
  function nI(t, e, r) {
    return re.of(rr.NonStrokingColorRgb, [iY(t), iY(e), iY(r)]);
  }
  function nL(t, e, r) {
    return re.of(rr.StrokingColorRgb, [iY(t), iY(e), iY(r)]);
  }
  function nN(t, e, r, i) {
    return re.of(rr.NonStrokingColorCmyk, [iY(t), iY(e), iY(r), iY(i)]);
  }
  function nB(t, e, r, i) {
    return re.of(rr.StrokingColorCmyk, [iY(t), iY(e), iY(r), iY(i)]);
  }
  function nj(t) {
    return re.of(rr.BeginMarkedContent, [iZ(t)]);
  }
  function n_() {
    return re.of(rr.EndMarkedContent);
  }
  (function (t) {
    t.Grayscale = "Grayscale";
    t.RGB = "RGB";
    t.CMYK = "CMYK";
  })(C ||= {});
  function nU(t) {
    eo(t, "gray", 0, 1);
    return {
      type: C.Grayscale,
      gray: t
    };
  }
  function nz(t, e, r) {
    eo(t, "red", 0, 1);
    eo(e, "green", 0, 1);
    eo(r, "blue", 0, 1);
    return {
      type: C.RGB,
      red: t,
      green: e,
      blue: r
    };
  }
  function nV(t, e, r, i) {
    eo(t, "cyan", 0, 1);
    eo(e, "magenta", 0, 1);
    eo(r, "yellow", 0, 1);
    eo(i, "key", 0, 1);
    return {
      type: C.CMYK,
      cyan: t,
      magenta: e,
      yellow: r,
      key: i
    };
  }
  var nW = C.Grayscale;
  var nG = C.RGB;
  var nq = C.CMYK;
  function nH(t) {
    if (t.type === nW) {
      return nO(t.gray);
    } else if (t.type === nG) {
      return nI(t.red, t.green, t.blue);
    } else if (t.type === nq) {
      return nN(t.cyan, t.magenta, t.yellow, t.key);
    } else {
      return tN("Invalid color: " + JSON.stringify(t));
    }
  }
  function nK(t) {
    if (t.type === nW) {
      return nD(t.gray);
    } else if (t.type === nG) {
      return nL(t.red, t.green, t.blue);
    } else if (t.type === nq) {
      return nB(t.cyan, t.magenta, t.yellow, t.key);
    } else {
      return tN("Invalid color: " + JSON.stringify(t));
    }
  }
  function nX(t, e = 1) {
    if ((t == null ? undefined : t.length) === 1) {
      return nU(t[0] * e);
    } else if ((t == null ? undefined : t.length) === 3) {
      return nz(t[0] * e, t[1] * e, t[2] * e);
    } else if ((t == null ? undefined : t.length) === 4) {
      return nV(t[0] * e, t[1] * e, t[2] * e, t[3] * e);
    } else {
      return undefined;
    }
  }
  function nZ(t) {
    if (t.type === nW) {
      return [t.gray];
    } else if (t.type === nG) {
      return [t.red, t.green, t.blue];
    } else if (t.type === nq) {
      return [t.cyan, t.magenta, t.yellow, t.key];
    } else {
      return tN("Invalid color: " + JSON.stringify(t));
    }
  }
  var nY = 0;
  var nJ = 0;
  var nQ = 0;
  var n$ = 0;
  var n0 = 0;
  var n1 = 0;
  var n2 = new Map([["A", 7], ["a", 7], ["C", 6], ["c", 6], ["H", 1], ["h", 1], ["L", 2], ["l", 2], ["M", 2], ["m", 2], ["Q", 4], ["q", 4], ["S", 4], ["s", 4], ["T", 2], ["t", 2], ["V", 1], ["v", 1], ["Z", 0], ["z", 0]]);
  function n5(t) {
    var e;
    var r = [];
    var i = [];
    var n = "";
    var o = false;
    var s = 0;
    var a = 0;
    var l = t;
    for (; a < l.length; a++) {
      var h = l[a];
      if (n2.has(h)) {
        s = n2.get(h);
        if (e) {
          if (n.length > 0) {
            i[i.length] = +n;
          }
          r[r.length] = {
            cmd: e,
            args: i
          };
          i = [];
          n = "";
          o = false;
        }
        e = h;
      } else if ([" ", ","].includes(h) || h === "-" && n.length > 0 && n[n.length - 1] !== "e" || h === "." && o) {
        if (n.length === 0) {
          continue;
        }
        if (i.length === s) {
          r[r.length] = {
            cmd: e,
            args: i
          };
          i = [+n];
          if (e === "M") {
            e = "L";
          }
          if (e === "m") {
            e = "l";
          }
        } else {
          i[i.length] = +n;
        }
        o = h === ".";
        n = ["-", "."].includes(h) ? h : "";
      } else {
        n += h;
        if (h === ".") {
          o = true;
        }
      }
    }
    if (n.length > 0) {
      if (i.length === s) {
        r[r.length] = {
          cmd: e,
          args: i
        };
        i = [+n];
        if (e === "M") {
          e = "L";
        }
        if (e === "m") {
          e = "l";
        }
      } else {
        i[i.length] = +n;
      }
    }
    r[r.length] = {
      cmd: e,
      args: i
    };
    return r;
  }
  function n3(t) {
    nY = nJ = nQ = n$ = n0 = n1 = 0;
    var e = [];
    var r = 0;
    for (; r < t.length; r++) {
      var i = t[r];
      if (i.cmd && typeof n4[i.cmd] == "function") {
        var n = n4[i.cmd](i.args);
        if (Array.isArray(n)) {
          e = e.concat(n);
        } else {
          e.push(n);
        }
      }
    }
    return e;
  }
  var n4 = {
    M: function (t) {
      nY = t[0];
      nJ = t[1];
      nQ = n$ = null;
      n0 = nY;
      n1 = nJ;
      return nv(nY, nJ);
    },
    m: function (t) {
      nY += t[0];
      nJ += t[1];
      nQ = n$ = null;
      n0 = nY;
      n1 = nJ;
      return nv(nY, nJ);
    },
    C: function (t) {
      nY = t[4];
      nJ = t[5];
      nQ = t[2];
      n$ = t[3];
      return np(t[0], t[1], t[2], t[3], t[4], t[5]);
    },
    c: function (t) {
      var e = np(t[0] + nY, t[1] + nJ, t[2] + nY, t[3] + nJ, t[4] + nY, t[5] + nJ);
      nQ = nY + t[2];
      n$ = nJ + t[3];
      nY += t[4];
      nJ += t[5];
      return e;
    },
    S: function (t) {
      if (nQ === null || n$ === null) {
        nQ = nY;
        n$ = nJ;
      }
      var e = np(nY - (nQ - nY), nJ - (n$ - nJ), t[0], t[1], t[2], t[3]);
      nQ = t[0];
      n$ = t[1];
      nY = t[2];
      nJ = t[3];
      return e;
    },
    s: function (t) {
      if (nQ === null || n$ === null) {
        nQ = nY;
        n$ = nJ;
      }
      var e = np(nY - (nQ - nY), nJ - (n$ - nJ), nY + t[0], nJ + t[1], nY + t[2], nJ + t[3]);
      nQ = nY + t[0];
      n$ = nJ + t[1];
      nY += t[2];
      nJ += t[3];
      return e;
    },
    Q: function (t) {
      nQ = t[0];
      n$ = t[1];
      nY = t[2];
      nJ = t[3];
      return ng(t[0], t[1], nY, nJ);
    },
    q: function (t) {
      var e = ng(t[0] + nY, t[1] + nJ, t[2] + nY, t[3] + nJ);
      nQ = nY + t[0];
      n$ = nJ + t[1];
      nY += t[2];
      nJ += t[3];
      return e;
    },
    T: function (t) {
      if (nQ === null || n$ === null) {
        nQ = nY;
        n$ = nJ;
      } else {
        nQ = nY - (nQ - nY);
        n$ = nJ - (n$ - nJ);
      }
      var e = ng(nQ, n$, t[0], t[1]);
      nQ = nY - (nQ - nY);
      n$ = nJ - (n$ - nJ);
      nY = t[0];
      nJ = t[1];
      return e;
    },
    t: function (t) {
      if (nQ === null || n$ === null) {
        nQ = nY;
        n$ = nJ;
      } else {
        nQ = nY - (nQ - nY);
        n$ = nJ - (n$ - nJ);
      }
      var e = ng(nQ, n$, nY + t[0], nJ + t[1]);
      nY += t[0];
      nJ += t[1];
      return e;
    },
    A: function (t) {
      var e = n6(nY, nJ, t);
      nY = t[5];
      nJ = t[6];
      return e;
    },
    a: function (t) {
      t[5] += nY;
      t[6] += nJ;
      var e = n6(nY, nJ, t);
      nY = t[5];
      nJ = t[6];
      return e;
    },
    L: function (t) {
      nY = t[0];
      nJ = t[1];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    l: function (t) {
      nY += t[0];
      nJ += t[1];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    H: function (t) {
      nY = t[0];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    h: function (t) {
      nY += t[0];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    V: function (t) {
      nJ = t[0];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    v: function (t) {
      nJ += t[0];
      nQ = n$ = null;
      return ny(nY, nJ);
    },
    Z: function () {
      var t = nm();
      nY = n0;
      nJ = n1;
      return t;
    },
    z: function () {
      var t = nm();
      nY = n0;
      nJ = n1;
      return t;
    }
  };
  function n6(t, e, r) {
    var i = r[0];
    var n = r[1];
    var o = r[2];
    var s = r[3];
    var a = r[4];
    var l = n8(r[5], r[6], i, n, s, a, o, t, e);
    var h = [];
    var c = 0;
    var u = l;
    for (; c < u.length; c++) {
      var d = n9.apply(undefined, u[c]);
      h.push(np.apply(undefined, d));
    }
    return h;
  }
  function n8(t, e, r, i, n, o, s, a, l) {
    var h = Math.PI / 180 * s;
    var c = Math.sin(h);
    var u = Math.cos(h);
    r = Math.abs(r);
    i = Math.abs(i);
    var d = (nQ = u * (a - t) * 0.5 + c * (l - e) * 0.5) * nQ / (r * r) + (n$ = u * (l - e) * 0.5 - c * (a - t) * 0.5) * n$ / (i * i);
    if (d > 1) {
      r *= d = Math.sqrt(d);
      i *= d;
    }
    var f = u / r;
    var p = c / r;
    var g = -c / i;
    var m = u / i;
    var v = f * a + p * l;
    var y = g * a + m * l;
    var b = f * t + p * e;
    var A = g * t + m * e;
    var S = 1 / ((b - v) * (b - v) + (A - y) * (A - y)) - 0.25;
    if (S < 0) {
      S = 0;
    }
    var x = Math.sqrt(S);
    if (o === n) {
      x = -x;
    }
    var w = (v + b) * 0.5 - x * (A - y);
    var C = (y + A) * 0.5 + x * (b - v);
    var T = Math.atan2(y - C, v - w);
    var E = Math.atan2(A - C, b - w) - T;
    if (E < 0 && o === 1) {
      E += Math.PI * 2;
    } else if (E > 0 && o === 0) {
      E -= Math.PI * 2;
    }
    var F = Math.ceil(Math.abs(E / (Math.PI * 0.5 + 0.001)));
    var k = [];
    var P = 0;
    for (; P < F; P++) {
      var R = T + P * E / F;
      var M = T + (P + 1) * E / F;
      k[P] = [w, C, R, M, r, i, c, u];
    }
    return k;
  }
  function n9(t, e, r, i, n, o, s, a) {
    var l = a * n;
    var h = -s * o;
    var c = s * n;
    var u = a * o;
    var d = (i - r) * 0.5;
    var f = 8 / 3 * Math.sin(d * 0.5) * Math.sin(d * 0.5) / Math.sin(d);
    var p = t + Math.cos(r) - f * Math.sin(r);
    var g = e + Math.sin(r) + f * Math.cos(r);
    var m = t + Math.cos(i);
    var v = e + Math.sin(i);
    var y = m + f * Math.sin(i);
    var b = v - f * Math.cos(i);
    return [l * p + h * g, c * p + u * g, l * y + h * b, c * y + u * b, l * m + h * v, c * m + u * v];
  }
  function n7(t) {
    return n3(n5(t));
  }
  function ot(t, e) {
    var r = [nu(), e.graphicsState && nc(e.graphicsState), nT(), nH(e.color), nF(e.font, e.size), nk(e.lineHeight), nR(i5(e.rotate), i5(e.xSkew), i5(e.ySkew), e.x, e.y)].filter(Boolean);
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      r.push(nC(t[i]), nw());
    }
    r.push(nE(), nd());
    return r;
  }
  function oe(t, e) {
    return [nu(), e.graphicsState && nc(e.graphicsState), ni(e.x, e.y), no(i5(e.rotate)), nn(e.width, e.height), na(i5(e.xSkew), i5(e.ySkew)), nM(t), nd()].filter(Boolean);
  }
  function or(t, e) {
    return [nu(), e.graphicsState && nc(e.graphicsState), ni(e.x, e.y), no(i5(e.rotate)), nn(e.xScale, e.yScale), na(i5(e.xSkew), i5(e.ySkew)), nM(t), nd()].filter(Boolean);
  }
  function oi(t) {
    return [nu(), t.graphicsState && nc(t.graphicsState), t.color && nK(t.color), nf(t.thickness), nl(t.dashArray ?? [], t.dashPhase ?? 0), nv(t.start.x, t.start.y), t.lineCap && nh(t.lineCap), nv(t.start.x, t.start.y), ny(t.end.x, t.end.y), nb(), nd()].filter(Boolean);
  }
  function on(t) {
    return [nu(), t.graphicsState && nc(t.graphicsState), t.color && nH(t.color), t.borderColor && nK(t.borderColor), nf(t.borderWidth), t.borderLineCap && nh(t.borderLineCap), nl(t.borderDashArray ?? [], t.borderDashPhase ?? 0), ni(t.x, t.y), no(i5(t.rotate)), na(i5(t.xSkew), i5(t.ySkew)), nv(0, 0), ny(0, t.height), ny(t.width, t.height), ny(t.width, 0), nm(), t.color && t.borderWidth ? nS() : t.color ? nA() : t.borderColor ? nb() : nm(), nd()].filter(Boolean);
  }
  var oo = (Math.sqrt(2) - 1) / 3 * 4;
  function os(t) {
    var e = iJ(t.x);
    var r = iJ(t.y);
    var i = iJ(t.xScale);
    var n = iJ(t.yScale);
    e -= i;
    r -= n;
    var o = i * oo;
    var s = n * oo;
    var a = e + i * 2;
    var l = r + n * 2;
    var h = e + i;
    var c = r + n;
    return [nu(), nv(e, c), np(e, c - s, h - o, r, h, r), np(h + o, r, a, c - s, a, c), np(a, c + s, h + o, l, h, l), np(h - o, l, e, c + s, e, c), nd()];
  }
  function oa(t) {
    var e = iJ(t.x);
    var r = iJ(t.y);
    var i = iJ(t.xScale);
    var n = iJ(t.yScale);
    var o = -i;
    var s = -n;
    var a = i * oo;
    var l = n * oo;
    var h = o + i * 2;
    var c = s + n * 2;
    var u = o + i;
    var d = s + n;
    return [ni(e, r), no(i5(t.rotate)), nv(o, d), np(o, d - l, u - a, s, u, s), np(u + a, s, h, d - l, h, d), np(h, d + l, u + a, c, u, c), np(u - a, c, o, d + l, o, d)];
  }
  function ol(t) {
    return typescriptRuntimeHelpers.concatArrays([nu(), t.graphicsState && nc(t.graphicsState), t.color && nH(t.color), t.borderColor && nK(t.borderColor), nf(t.borderWidth), t.borderLineCap && nh(t.borderLineCap), nl(t.borderDashArray ?? [], t.borderDashPhase ?? 0)], t.rotate === undefined ? os({
      x: t.x,
      y: t.y,
      xScale: t.xScale,
      yScale: t.yScale
    }) : oa({
      x: t.x,
      y: t.y,
      xScale: t.xScale,
      yScale: t.yScale,
      rotate: t.rotate ?? iQ(0)
    }), [t.color && t.borderWidth ? nS() : t.color ? nA() : t.borderColor ? nb() : nm(), nd()]).filter(Boolean);
  }
  function oh(t, e) {
    return typescriptRuntimeHelpers.concatArrays([nu(), e.graphicsState && nc(e.graphicsState), ni(e.x, e.y), no(i5(e.rotate ?? iQ(0))), e.scale ? nn(e.scale, -e.scale) : nn(1, -1), e.color && nH(e.color), e.borderColor && nK(e.borderColor), e.borderWidth && nf(e.borderWidth), e.borderLineCap && nh(e.borderLineCap), nl(e.borderDashArray ?? [], e.borderDashPhase ?? 0)], n7(t), [e.color && e.borderWidth ? nS() : e.color ? nA() : e.borderColor ? nb() : nm(), nd()]).filter(Boolean);
  }
  function oc(t) {
    var e = iJ(t.size);
    var r = -0.25;
    var i = -0.49;
    var n = 0.475;
    var o = 0.69;
    var s = -0.675;
    var a = -0.07601036269430045;
    return [nu(), t.color && nK(t.color), nf(t.thickness), ni(t.x, t.y), nv(s * e, a * e), ny(r * e, i * e), ny(o * e, n * e), nb(), nd()].filter(Boolean);
  }
  function ou(t) {
    if (t.rotation === 0) {
      return [ni(0, 0), ns(0)];
    } else if (t.rotation === 90) {
      return [ni(t.width, 0), ns(90)];
    } else if (t.rotation === 180) {
      return [ni(t.width, t.height), ns(180)];
    } else if (t.rotation === 270) {
      return [ni(0, t.height), ns(270)];
    } else {
      return [];
    }
  }
  function od(t) {
    var e = on({
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      borderWidth: t.borderWidth,
      color: t.color,
      borderColor: t.borderColor,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    if (!t.filled) {
      return e;
    }
    var r = iJ(t.width);
    var i = iJ(t.height);
    var n = Math.min(r, i) / 2;
    var o = oc({
      x: r / 2,
      y: i / 2,
      size: n,
      thickness: t.thickness,
      color: t.markColor
    });
    return typescriptRuntimeHelpers.concatArrays([nu()], e, o, [nd()]);
  }
  function of(t) {
    var e = Math.min(iJ(t.width), iJ(t.height)) / 2;
    var r = ol({
      x: t.x,
      y: t.y,
      xScale: e,
      yScale: e,
      color: t.color,
      borderColor: t.borderColor,
      borderWidth: t.borderWidth
    });
    if (!t.filled) {
      return r;
    }
    var i = ol({
      x: t.x,
      y: t.y,
      xScale: e * 0.45,
      yScale: e * 0.45,
      color: t.dotColor,
      borderColor: undefined,
      borderWidth: 0
    });
    return typescriptRuntimeHelpers.concatArrays([nu()], r, i, [nd()]);
  }
  function op(t) {
    var e = on({
      x: iJ(t.x),
      y: iJ(t.y),
      width: iJ(t.width),
      height: iJ(t.height),
      borderWidth: t.borderWidth,
      color: t.color,
      borderColor: t.borderColor,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    var r = og(t.textLines, {
      color: t.textColor,
      font: t.font,
      size: t.fontSize,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    return typescriptRuntimeHelpers.concatArrays([nu()], e, r, [nd()]);
  }
  function og(t, e) {
    var r = [nT(), nH(e.color), nF(e.font, e.size)];
    var i = 0;
    var n = t.length;
    for (; i < n; i++) {
      var o = t[i];
      var s = o.encoded;
      var a = o.x;
      var l = o.y;
      r.push(nR(i5(e.rotate), i5(e.xSkew), i5(e.ySkew), a, l), nC(s));
    }
    r.push(nE());
    return r;
  }
  function om(t) {
    var e = iJ(t.x);
    var r = iJ(t.y);
    var i = iJ(t.width);
    var n = iJ(t.height);
    var o = iJ(t.borderWidth);
    var s = iJ(t.padding);
    var a = e + o / 2 + s;
    var l = r + o / 2 + s;
    var h = i - (o / 2 + s) * 2;
    var c = n - (o / 2 + s) * 2;
    var u = [nv(a, l), ny(a, l + c), ny(a + h, l + c), ny(a + h, l), nm(), i9(), nx()];
    var d = on({
      x: e,
      y: r,
      width: i,
      height: n,
      borderWidth: t.borderWidth,
      color: t.color,
      borderColor: t.borderColor,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    var f = og(t.textLines, {
      color: t.textColor,
      font: t.font,
      size: t.fontSize,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    var p = typescriptRuntimeHelpers.concatArrays([nj("Tx"), nu()], f, [nd(), n_()]);
    return typescriptRuntimeHelpers.concatArrays([nu()], d, u, p, [nd()]);
  }
  function ov(t) {
    var e = iJ(t.x);
    var r = iJ(t.y);
    var i = iJ(t.width);
    var n = iJ(t.height);
    var o = iJ(t.lineHeight);
    var s = iJ(t.borderWidth);
    var a = iJ(t.padding);
    var l = e + s / 2 + a;
    var h = r + s / 2 + a;
    var c = i - (s / 2 + a) * 2;
    var u = n - (s / 2 + a) * 2;
    var d = [nv(l, h), ny(l, h + u), ny(l + c, h + u), ny(l + c, h), nm(), i9(), nx()];
    var f = on({
      x: e,
      y: r,
      width: i,
      height: n,
      borderWidth: t.borderWidth,
      color: t.color,
      borderColor: t.borderColor,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    var p = [];
    var g = 0;
    var m = t.selectedLines.length;
    for (; g < m; g++) {
      var v = t.textLines[t.selectedLines[g]];
      p.push.apply(p, on({
        x: v.x - a,
        y: v.y - (o - v.height) / 2,
        width: i - s,
        height: v.height + (o - v.height) / 2,
        borderWidth: 0,
        color: t.selectedColor,
        borderColor: undefined,
        rotate: iQ(0),
        xSkew: iQ(0),
        ySkew: iQ(0)
      }));
    }
    var y = og(t.textLines, {
      color: t.textColor,
      font: t.font,
      size: t.fontSize,
      rotate: iQ(0),
      xSkew: iQ(0),
      ySkew: iQ(0)
    });
    var b = typescriptRuntimeHelpers.concatArrays([nj("Tx"), nu()], y, [nd(), n_()]);
    return typescriptRuntimeHelpers.concatArrays([nu()], f, p, d, b, [nd()]);
  }
  var oy = function (t) {
    function e() {
      var e = this;
      var r = "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ob = function (t) {
    function e() {
      var e = this;
      var r = "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var oA = function (t) {
    function e() {
      var e = this;
      var r = "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var oS = function (t) {
    function e() {
      var e = this;
      var r = "PDFDocument has no pages so `PDFDocument.removePage` cannot be called";
      return t.call(this, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ox = function (t) {
    function e(e) {
      var r = this;
      var i = "PDFDocument has no form field with the name \"" + e + "\"";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ow = function (t) {
    function e(e, r, i) {
      var s = this;
      var a = "Expected field \"" + e + "\" to be of type " + (r == null ? undefined : r.name) + ", but it is actually of type " + ((i == null ? undefined : i.constructor)?.name ?? i);
      return t.call(this, a) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  (function (t) {
    function e(e) {
      var r = this;
      var i = "Failed to select check box due to missing onValue: \"" + e + "\"";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
  })(Error);
  var oC = function (t) {
    function e(e) {
      var r = this;
      var i = "A field already exists with the specified name: \"" + e + "\"";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var oT = function (t) {
    function e(e) {
      var r = this;
      var i = "Field name contains invalid component: \"" + e + "\"";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  (function (t) {
    function e(e) {
      var r = this;
      var i = "A non-terminal field already exists with the specified name: \"" + e + "\"";
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
  })(Error);
  var oE = function (t) {
    function e(e) {
      var r = this;
      var i = "Reading rich text fields is not supported: Attempted to read rich text field: " + e;
      return t.call(this, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var oF = function (t) {
    function e(e, r) {
      var i = this;
      var n = "Failed to layout combed text as lineLength=" + e + " is greater than cellCount=" + r;
      return t.call(this, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var ok = function (t) {
    function e(e, r, i) {
      var n = this;
      var o = "Attempted to set text with length=" + e + " for TextField with maxLength=" + r + " and name=" + i;
      return t.call(this, o) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  var oP = function (t) {
    function e(e, r, i) {
      var n = this;
      var o = "Attempted to set maxLength=" + r + ", which is less than " + e + ", the length of this field's current value (name=" + i + ")";
      return t.call(this, o) || this;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    return e;
  }(Error);
  (function (t) {
    t[t.Left = 0] = "Left";
    t[t.Center = 1] = "Center";
    t[t.Right = 2] = "Right";
  })(T ||= {});
  var oR = 4;
  var oM = 500;
  function oO(t, e, r, i = false) {
    for (var n = oR; n < oM;) {
      var o = 0;
      var s = 0;
      var a = t.length;
      for (; s < a; s++) {
        o += 1;
        var l = t[s].split(" ");
        var h = r.width;
        var c = 0;
        var u = l.length;
        for (; c < u; c++) {
          var d = c === u - 1 ? l[c] : l[c] + " ";
          var f = e.widthOfTextAtSize(d, n);
          if ((h -= f) <= 0) {
            o += 1;
            h = r.width - f;
          }
        }
      }
      if (!i && o > t.length) {
        return n - 1;
      }
      var p = e.heightAtSize(n);
      if ((p + p * 0.2) * o > Math.abs(r.height)) {
        return n - 1;
      }
      n += 1;
    }
    return n;
  }
  function oD(t, e, r, i) {
    var n = r.width / i;
    var o = r.height;
    var s = oR;
    var a = $(t);
    while (s < oM) {
      var l = 0;
      var h = a.length;
      for (; l < h; l++) {
        var c = a[l];
        if (e.widthOfTextAtSize(c, s) > n * 0.75) {
          return s - 1;
        }
      }
      if (e.heightAtSize(s, {
        descender: false
      }) > o) {
        return s - 1;
      }
      s += 1;
    }
    return s;
  }
  function oI(t) {
    for (var e = t.length; e > 0; e--) {
      if (/\s/.test(t[e])) {
        return e;
      }
    }
  }
  function oL(t, e, r, i) {
    var o = t.length;
    while (o > 0) {
      var s = t.substring(0, o);
      var a = r.encodeText(s);
      var l = r.widthOfTextAtSize(s, i);
      if (l < e) {
        return {
          line: s,
          encoded: a,
          width: l,
          remainder: t.substring(o) || undefined
        };
      }
      o = oI(s) ?? 0;
    }
    return {
      line: t,
      encoded: r.encodeText(t),
      width: r.widthOfTextAtSize(t, i),
      remainder: undefined
    };
  }
  function oN(t, e) {
    var r = e.alignment;
    var i = e.fontSize;
    var n = e.font;
    var o = e.bounds;
    var s = Y(K(t));
    if (i === undefined || i === 0) {
      i = oO(s, n, o, true);
    }
    var a = n.heightAtSize(i);
    var l = a + a * 0.2;
    var h = [];
    var c = o.x;
    var u = o.y;
    var d = o.x + o.width;
    var f = o.y + o.height;
    var p = o.y + o.height;
    var g = 0;
    var m = s.length;
    for (; g < m; g++) {
      for (var v = s[g]; v !== undefined;) {
        var y = oL(v, o.width, n, i);
        var b = y.line;
        var A = y.encoded;
        var S = y.width;
        var x = y.remainder;
        var w = r === T.Left ? o.x : r === T.Center ? o.x + o.width / 2 - S / 2 : r === T.Right ? o.x + o.width - S : o.x;
        p -= l;
        if (w < c) {
          c = w;
        }
        if (p < u) {
          u = p;
        }
        if (w + S > d) {
          d = w + S;
        }
        if (p + a > f) {
          f = p + a;
        }
        h.push({
          text: b,
          encoded: A,
          width: S,
          height: a,
          x: w,
          y: p
        });
        v = x == null ? undefined : x.trim();
      }
    }
    return {
      fontSize: i,
      lineHeight: l,
      lines: h,
      bounds: {
        x: c,
        y: u,
        width: d - c,
        height: f - u
      }
    };
  }
  function oB(t, e) {
    var r = e.fontSize;
    var i = e.font;
    var n = e.bounds;
    var o = e.cellCount;
    var s = J(K(t));
    if (s.length > o) {
      throw new oF(s.length, o);
    }
    if (r === undefined || r === 0) {
      r = oD(s, i, n, o);
    }
    var a = n.width / o;
    var l = i.heightAtSize(r, {
      descender: false
    });
    var h = n.y + (n.height / 2 - l / 2);
    var c = [];
    var u = n.x;
    var d = n.y;
    var f = n.x + n.width;
    var p = n.y + n.height;
    var g = 0;
    var m = 0;
    while (g < o) {
      var v = Q(s, m);
      var y = v[0];
      var b = v[1];
      var A = i.encodeText(y);
      var S = i.widthOfTextAtSize(y, r);
      var x = n.x + (a * g + a / 2) - S / 2;
      if (x < u) {
        u = x;
      }
      if (h < d) {
        d = h;
      }
      if (x + S > f) {
        f = x + S;
      }
      if (h + l > p) {
        p = h + l;
      }
      c.push({
        text: s,
        encoded: A,
        width: S,
        height: l,
        x: x,
        y: h
      });
      g += 1;
      m += b;
    }
    return {
      fontSize: r,
      cells: c,
      bounds: {
        x: u,
        y: d,
        width: f - u,
        height: p - d
      }
    };
  }
  function oj(t, e) {
    var r = e.alignment;
    var i = e.fontSize;
    var n = e.font;
    var o = e.bounds;
    var s = J(K(t));
    if (i === undefined || i === 0) {
      i = oO([s], n, o);
    }
    var a = n.encodeText(s);
    var l = n.widthOfTextAtSize(s, i);
    var h = n.heightAtSize(i, {
      descender: false
    });
    var c = r === T.Left ? o.x : r === T.Center ? o.x + o.width / 2 - l / 2 : r === T.Right ? o.x + o.width - l : o.x;
    var u = o.y + (o.height / 2 - h / 2);
    return {
      fontSize: i,
      line: {
        text: s,
        encoded: a,
        width: l,
        height: h,
        x: c,
        y: u
      },
      bounds: {
        x: c,
        y: u,
        width: l,
        height: h
      }
    };
  }
  function o_(t) {
    if ("normal" in t) {
      return t;
    } else {
      return {
        normal: t
      };
    }
  }
  var oU = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/;
  function oz(t) {
    var i = Number((tn(t.getDefaultAppearance() ?? "", oU).match ?? [])[2]);
    if (isFinite(i)) {
      return i;
    } else {
      return undefined;
    }
  }
  var oV = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/;
  function oW(t) {
    var r = tn(t.getDefaultAppearance() ?? "", oV).match;
    var i = r ?? [];
    var n = i[1];
    var o = i[2];
    var s = i[3];
    var a = i[4];
    var l = i[5];
    if (l === "g" && n) {
      return nU(Number(n));
    } else if (l === "rg" && n && o && s) {
      return nz(Number(n), Number(o), Number(s));
    } else if (l === "k" && n && o && s && a) {
      return nV(Number(n), Number(o), Number(s), Number(a));
    } else {
      return undefined;
    }
  }
  function oG(t, e, r, i = 0) {
    var o = [nH(e).toString(), nF((r == null ? undefined : r.name) ?? "dummy__noop", i).toString()].join("\n");
    t.setDefaultAppearance(o);
  }
  function oq(t, e) {
    var o = oW(e);
    var s = oW(t.acroField);
    var a = e.getRectangle();
    var l = e.getAppearanceCharacteristics();
    var h = e.getBorderStyle();
    var c = (h == null ? undefined : h.getWidth()) ?? 0;
    var u = i4(l == null ? undefined : l.getRotation());
    var d = i6(a, u);
    var f = d.width;
    var p = d.height;
    var g = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, a), {
      rotation: u
    }));
    var m = nz(0, 0, 0);
    var v = nX(l == null ? undefined : l.getBorderColor()) ?? m;
    var y = nX(l == null ? undefined : l.getBackgroundColor());
    var b = nX(l == null ? undefined : l.getBackgroundColor(), 0.8);
    var A = o ?? s ?? m;
    if (o) {
      oG(e, A);
    } else {
      oG(t.acroField, A);
    }
    var S = {
      x: 0 + c / 2,
      y: 0 + c / 2,
      width: f - c,
      height: p - c,
      thickness: 1.5,
      borderWidth: c,
      borderColor: v,
      markColor: A
    };
    return {
      normal: {
        on: typescriptRuntimeHelpers.concatArrays(g, od(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: y,
          filled: true
        }))),
        off: typescriptRuntimeHelpers.concatArrays(g, od(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: y,
          filled: false
        })))
      },
      down: {
        on: typescriptRuntimeHelpers.concatArrays(g, od(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: b,
          filled: true
        }))),
        off: typescriptRuntimeHelpers.concatArrays(g, od(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: b,
          filled: false
        })))
      }
    };
  }
  function oH(t, e) {
    var o = oW(e);
    var s = oW(t.acroField);
    var a = e.getRectangle();
    var l = e.getAppearanceCharacteristics();
    var h = e.getBorderStyle();
    var c = (h == null ? undefined : h.getWidth()) ?? 0;
    var u = i4(l == null ? undefined : l.getRotation());
    var d = i6(a, u);
    var f = d.width;
    var p = d.height;
    var g = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, a), {
      rotation: u
    }));
    var m = nz(0, 0, 0);
    var v = nX(l == null ? undefined : l.getBorderColor()) ?? m;
    var y = nX(l == null ? undefined : l.getBackgroundColor());
    var b = nX(l == null ? undefined : l.getBackgroundColor(), 0.8);
    var A = o ?? s ?? m;
    if (o) {
      oG(e, A);
    } else {
      oG(t.acroField, A);
    }
    var S = {
      x: f / 2,
      y: p / 2,
      width: f - c,
      height: p - c,
      borderWidth: c,
      borderColor: v,
      dotColor: A
    };
    return {
      normal: {
        on: typescriptRuntimeHelpers.concatArrays(g, of(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: y,
          filled: true
        }))),
        off: typescriptRuntimeHelpers.concatArrays(g, of(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: y,
          filled: false
        })))
      },
      down: {
        on: typescriptRuntimeHelpers.concatArrays(g, of(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: b,
          filled: true
        }))),
        off: typescriptRuntimeHelpers.concatArrays(g, of(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, S), {
          color: b,
          filled: false
        })))
      }
    };
  }
  function oK(t, e, r) {
    var l = oW(e);
    var h = oW(t.acroField);
    var c = oz(e);
    var u = oz(t.acroField);
    var d = e.getRectangle();
    var f = e.getAppearanceCharacteristics();
    var p = e.getBorderStyle();
    var g = f == null ? undefined : f.getCaptions();
    var m = (g == null ? undefined : g.normal) ?? "";
    var v = (g == null ? undefined : g.down) ?? m ?? "";
    var y = (p == null ? undefined : p.getWidth()) ?? 0;
    var b = i4(f == null ? undefined : f.getRotation());
    var A = i6(d, b);
    var S = A.width;
    var x = A.height;
    var w = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, d), {
      rotation: b
    }));
    var C = nz(0, 0, 0);
    var E = nX(f == null ? undefined : f.getBorderColor());
    var F = nX(f == null ? undefined : f.getBackgroundColor());
    var k = nX(f == null ? undefined : f.getBackgroundColor(), 0.8);
    var P = {
      x: y,
      y: y,
      width: S - y * 2,
      height: x - y * 2
    };
    var M = oj(m, {
      alignment: T.Center,
      fontSize: c ?? u,
      font: r,
      bounds: P
    });
    var O = oj(v, {
      alignment: T.Center,
      fontSize: c ?? u,
      font: r,
      bounds: P
    });
    var D = Math.min(M.fontSize, O.fontSize);
    var I = l ?? h ?? C;
    if (l || c !== undefined) {
      oG(e, I, r, D);
    } else {
      oG(t.acroField, I, r, D);
    }
    var L = {
      x: 0 + y / 2,
      y: 0 + y / 2,
      width: S - y,
      height: x - y,
      borderWidth: y,
      borderColor: E,
      textColor: I,
      font: r.name,
      fontSize: D
    };
    return {
      normal: typescriptRuntimeHelpers.concatArrays(w, op(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, L), {
        color: F,
        textLines: [M.line]
      }))),
      down: typescriptRuntimeHelpers.concatArrays(w, op(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, L), {
        color: k,
        textLines: [O.line]
      })))
    };
  }
  function oX(t, e, r) {
    var a;
    var l;
    var h = oW(e);
    var c = oW(t.acroField);
    var u = oz(e);
    var d = oz(t.acroField);
    var f = e.getRectangle();
    var p = e.getAppearanceCharacteristics();
    var g = e.getBorderStyle();
    var m = t.getText() ?? "";
    var v = (g == null ? undefined : g.getWidth()) ?? 0;
    var y = i4(p == null ? undefined : p.getRotation());
    var b = i6(f, y);
    var A = b.width;
    var S = b.height;
    var x = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, f), {
      rotation: y
    }));
    var w = nz(0, 0, 0);
    var C = nX(p == null ? undefined : p.getBorderColor());
    var T = nX(p == null ? undefined : p.getBackgroundColor());
    var E = +!t.isCombed();
    var F = {
      x: v + E,
      y: v + E,
      width: A - (v + E) * 2,
      height: S - (v + E) * 2
    };
    if (t.isMultiline()) {
      var k = oN(m, {
        alignment: t.getAlignment(),
        fontSize: u ?? d,
        font: r,
        bounds: F
      });
      a = k.lines;
      l = k.fontSize;
    } else if (t.isCombed()) {
      var k = oB(m, {
        fontSize: u ?? d,
        font: r,
        bounds: F,
        cellCount: t.getMaxLength() ?? 0
      });
      a = k.cells;
      l = k.fontSize;
    } else {
      var k = oj(m, {
        alignment: t.getAlignment(),
        fontSize: u ?? d,
        font: r,
        bounds: F
      });
      a = [k.line];
      l = k.fontSize;
    }
    var P = h ?? c ?? w;
    if (h || u !== undefined) {
      oG(e, P, r, l);
    } else {
      oG(t.acroField, P, r, l);
    }
    var M = {
      x: 0 + v / 2,
      y: 0 + v / 2,
      width: A - v,
      height: S - v,
      borderWidth: v ?? 0,
      borderColor: C,
      textColor: P,
      font: r.name,
      fontSize: l,
      color: T,
      textLines: a,
      padding: E
    };
    return typescriptRuntimeHelpers.concatArrays(x, om(M));
  }
  function oZ(t, e, r) {
    var s = oW(e);
    var a = oW(t.acroField);
    var l = oz(e);
    var h = oz(t.acroField);
    var c = e.getRectangle();
    var u = e.getAppearanceCharacteristics();
    var d = e.getBorderStyle();
    var f = t.getSelected()[0] ?? "";
    var p = (d == null ? undefined : d.getWidth()) ?? 0;
    var g = i4(u == null ? undefined : u.getRotation());
    var m = i6(c, g);
    var v = m.width;
    var y = m.height;
    var b = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, c), {
      rotation: g
    }));
    var A = nz(0, 0, 0);
    var S = nX(u == null ? undefined : u.getBorderColor());
    var x = nX(u == null ? undefined : u.getBackgroundColor());
    var w = 1;
    var C = {
      x: p + 1,
      y: p + 1,
      width: v - (p + 1) * 2,
      height: y - (p + 1) * 2
    };
    var E = oj(f, {
      alignment: T.Left,
      fontSize: l ?? h,
      font: r,
      bounds: C
    });
    var F = E.line;
    var k = E.fontSize;
    var P = s ?? a ?? A;
    if (s || l !== undefined) {
      oG(e, P, r, k);
    } else {
      oG(t.acroField, P, r, k);
    }
    var M = {
      x: 0 + p / 2,
      y: 0 + p / 2,
      width: v - p,
      height: y - p,
      borderWidth: p ?? 0,
      borderColor: S,
      textColor: P,
      font: r.name,
      fontSize: k,
      color: x,
      textLines: [F],
      padding: w
    };
    return typescriptRuntimeHelpers.concatArrays(b, om(M));
  }
  function oY(t, e, r) {
    var o = oW(e);
    var s = oW(t.acroField);
    var a = oz(e);
    var l = oz(t.acroField);
    var h = e.getRectangle();
    var c = e.getAppearanceCharacteristics();
    var u = e.getBorderStyle();
    var d = (u == null ? undefined : u.getWidth()) ?? 0;
    var f = i4(c == null ? undefined : c.getRotation());
    var p = i6(h, f);
    var g = p.width;
    var m = p.height;
    var v = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, h), {
      rotation: f
    }));
    var y = nz(0, 0, 0);
    var b = nX(c == null ? undefined : c.getBorderColor());
    var A = nX(c == null ? undefined : c.getBackgroundColor());
    var S = t.getOptions();
    var x = t.getSelected();
    if (t.isSorted()) {
      S.sort();
    }
    var w = "";
    var C = 0;
    var E = S.length;
    for (; C < E; C++) {
      w += S[C];
      if (C < E - 1) {
        w += "\n";
      }
    }
    var F = 1;
    var k = {
      x: d + 1,
      y: d + 1,
      width: g - (d + 1) * 2,
      height: m - (d + 1) * 2
    };
    var P = oN(w, {
      alignment: T.Left,
      fontSize: a ?? l,
      font: r,
      bounds: k
    });
    var M = P.lines;
    var O = P.fontSize;
    var D = P.lineHeight;
    var I = [];
    var C = 0;
    var E = M.length;
    for (; C < E; C++) {
      var L = M[C];
      if (x.includes(L.text)) {
        I.push(C);
      }
    }
    var N = nz(0.6, 193 / 255, 218 / 255);
    var B = o ?? s ?? y;
    if (o || a !== undefined) {
      oG(e, B, r, O);
    } else {
      oG(t.acroField, B, r, O);
    }
    return typescriptRuntimeHelpers.concatArrays(v, ov({
      x: 0 + d / 2,
      y: 0 + d / 2,
      width: g - d,
      height: m - d,
      borderWidth: d ?? 0,
      borderColor: b,
      textColor: B,
      font: r.name,
      fontSize: O,
      color: A,
      textLines: M,
      lineHeight: D,
      selectedColor: N,
      selectedLines: I,
      padding: F
    }));
  }
  var oJ = function () {
    function t(t, e, r) {
      this.alreadyEmbedded = false;
      er(t, "ref", [[rt, "PDFRef"]]);
      er(e, "doc", [[ss, "PDFDocument"]]);
      er(r, "embedder", [[r3, "PDFPageEmbedder"]]);
      this.ref = t;
      this.doc = e;
      this.width = r.width;
      this.height = r.height;
      this.embedder = r;
    }
    t.prototype.scale = function (t) {
      er(t, "factor", ["number"]);
      return {
        width: this.width * t,
        height: this.height * t
      };
    };
    t.prototype.size = function () {
      return this.scale(1);
    };
    t.prototype.embed = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (t) {
          switch (t.label) {
            case 0:
              if (this.alreadyEmbedded) {
                return [3, 2];
              }
              return [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              t.sent();
              this.alreadyEmbedded = true;
              t.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    return t;
  }();
  var oQ = function () {
    function t(t, e, r) {
      this.modified = true;
      er(t, "ref", [[rt, "PDFRef"]]);
      er(e, "doc", [[ss, "PDFDocument"]]);
      er(r, "embedder", [[rk, "CustomFontEmbedder"], [rb, "StandardFontEmbedder"]]);
      this.ref = t;
      this.doc = e;
      this.name = r.fontName;
      this.embedder = r;
    }
    t.prototype.encodeText = function (t) {
      er(t, "text", ["string"]);
      this.modified = true;
      return this.embedder.encodeText(t);
    };
    t.prototype.widthOfTextAtSize = function (t, e) {
      er(t, "text", ["string"]);
      er(e, "size", ["number"]);
      return this.embedder.widthOfTextAtSize(t, e);
    };
    t.prototype.heightAtSize = function (t, e) {
      var r;
      er(t, "size", ["number"]);
      ei(e == null ? undefined : e.descender, "options.descender", ["boolean"]);
      return this.embedder.heightOfFontAtSize(t, {
        descender: (r = e == null ? undefined : e.descender) === null || r === undefined || r
      });
    };
    t.prototype.sizeAtHeight = function (t) {
      er(t, "height", ["number"]);
      return this.embedder.sizeOfFontAtHeight(t);
    };
    t.prototype.getCharacterSet = function () {
      if (this.embedder instanceof rb) {
        return this.embedder.encoding.supportedCodePoints;
      } else {
        return this.embedder.font.characterSet;
      }
    };
    t.prototype.embed = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (t) {
          switch (t.label) {
            case 0:
              if (!this.modified) {
                return [3, 2];
              }
              return [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              t.sent();
              this.modified = false;
              t.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    return t;
  }();
  var o$ = function () {
    function t(t, e, r) {
      er(t, "ref", [[rt, "PDFRef"]]);
      er(e, "doc", [[ss, "PDFDocument"]]);
      er(r, "embedder", [[rD, "JpegEmbedder"], [r_, "PngEmbedder"]]);
      this.ref = t;
      this.doc = e;
      this.width = r.width;
      this.height = r.height;
      this.embedder = r;
    }
    t.prototype.scale = function (t) {
      er(t, "factor", ["number"]);
      return {
        width: this.width * t,
        height: this.height * t
      };
    };
    t.prototype.scaleToFit = function (t, e) {
      er(t, "width", ["number"]);
      er(e, "height", ["number"]);
      var r = Math.min(t / this.width, e / this.height);
      return this.scale(r);
    };
    t.prototype.size = function () {
      return this.scale(1);
    };
    t.prototype.embed = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          switch (i.label) {
            case 0:
              if (!this.embedder) {
                return [2];
              }
              if (!this.embedTask) {
                t = this;
                e = t.doc;
                r = t.ref;
                this.embedTask = this.embedder.embedIntoContext(e.context, r);
              }
              return [4, this.embedTask];
            case 1:
              i.sent();
              this.embedder = undefined;
              return [2];
          }
        });
      });
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    return t;
  }();
  (function (t) {
    t[t.Left = 0] = "Left";
    t[t.Center = 1] = "Center";
    t[t.Right = 2] = "Right";
  })(E ||= {});
  function o0(t) {
    ei(t == null ? undefined : t.x, "options.x", ["number"]);
    ei(t == null ? undefined : t.y, "options.y", ["number"]);
    ei(t == null ? undefined : t.width, "options.width", ["number"]);
    ei(t == null ? undefined : t.height, "options.height", ["number"]);
    ei(t == null ? undefined : t.textColor, "options.textColor", [[Object, "Color"]]);
    ei(t == null ? undefined : t.backgroundColor, "options.backgroundColor", [[Object, "Color"]]);
    ei(t == null ? undefined : t.borderColor, "options.borderColor", [[Object, "Color"]]);
    ei(t == null ? undefined : t.borderWidth, "options.borderWidth", ["number"]);
    ei(t == null ? undefined : t.rotate, "options.rotate", [[Object, "Rotation"]]);
  }
  var o1 = function () {
    function t(t, e, r) {
      er(t, "acroField", [[ii, "PDFAcroTerminal"]]);
      er(e, "ref", [[rt, "PDFRef"]]);
      er(r, "doc", [[ss, "PDFDocument"]]);
      this.acroField = t;
      this.ref = e;
      this.doc = r;
    }
    t.prototype.getName = function () {
      return this.acroField.getFullyQualifiedName() ?? "";
    };
    t.prototype.isReadOnly = function () {
      return this.acroField.hasFlag(g.ReadOnly);
    };
    t.prototype.enableReadOnly = function () {
      this.acroField.setFlagTo(g.ReadOnly, true);
    };
    t.prototype.disableReadOnly = function () {
      this.acroField.setFlagTo(g.ReadOnly, false);
    };
    t.prototype.isRequired = function () {
      return this.acroField.hasFlag(g.Required);
    };
    t.prototype.enableRequired = function () {
      this.acroField.setFlagTo(g.Required, true);
    };
    t.prototype.disableRequired = function () {
      this.acroField.setFlagTo(g.Required, false);
    };
    t.prototype.isExported = function () {
      return !this.acroField.hasFlag(g.NoExport);
    };
    t.prototype.enableExporting = function () {
      this.acroField.setFlagTo(g.NoExport, false);
    };
    t.prototype.disableExporting = function () {
      this.acroField.setFlagTo(g.NoExport, true);
    };
    t.prototype.needsAppearancesUpdate = function () {
      throw new ep(this.constructor.name, "needsAppearancesUpdate");
    };
    t.prototype.defaultUpdateAppearances = function (t) {
      throw new ep(this.constructor.name, "defaultUpdateAppearances");
    };
    t.prototype.markAsDirty = function () {
      this.doc.getForm().markFieldAsDirty(this.ref);
    };
    t.prototype.markAsClean = function () {
      this.doc.getForm().markFieldAsClean(this.ref);
    };
    t.prototype.isDirty = function () {
      return this.doc.getForm().fieldIsDirty(this.ref);
    };
    t.prototype.createWidget = function (t) {
      var r = t.textColor;
      var i = t.backgroundColor;
      var n = t.borderColor;
      var o = t.borderWidth;
      var s = i3(t.rotate);
      var a = t.caption;
      var l = t.x;
      var h = t.y;
      var c = t.width + o;
      var u = t.height + o;
      var d = !!t.hidden;
      var f = t.page;
      ea(s, "degreesAngle", 90);
      var p = ir.create(this.doc.context, this.ref);
      var g = i8({
        x: l,
        y: h,
        width: c,
        height: u
      }, o, s);
      p.setRectangle(g);
      if (f) {
        p.setP(f);
      }
      var m = p.getOrCreateAppearanceCharacteristics();
      if (i) {
        m.setBackgroundColor(nZ(i));
      }
      m.setRotation(s);
      if (a) {
        m.setCaptions({
          normal: a
        });
      }
      if (n) {
        m.setBorderColor(nZ(n));
      }
      var v = p.getOrCreateBorderStyle();
      if (o !== undefined) {
        v.setWidth(o);
      }
      p.setFlagTo(b.Print, true);
      p.setFlagTo(b.Hidden, d);
      p.setFlagTo(b.Invisible, false);
      if (r) {
        var y = (this.acroField.getDefaultAppearance() ?? "") + "\n" + nH(r).toString();
        this.acroField.setDefaultAppearance(y);
      }
      return p;
    };
    t.prototype.updateWidgetAppearanceWithFont = function (t, e, r) {
      var i = r.normal;
      var n = r.rollover;
      var o = r.down;
      this.updateWidgetAppearances(t, {
        normal: this.createAppearanceStream(t, i, e),
        rollover: n && this.createAppearanceStream(t, n, e),
        down: o && this.createAppearanceStream(t, o, e)
      });
    };
    t.prototype.updateOnOffWidgetAppearance = function (t, e, r) {
      var i = r.normal;
      var n = r.rollover;
      var o = r.down;
      this.updateWidgetAppearances(t, {
        normal: this.createAppearanceDict(t, i, e),
        rollover: n && this.createAppearanceDict(t, n, e),
        down: o && this.createAppearanceDict(t, o, e)
      });
    };
    t.prototype.updateWidgetAppearances = function (t, e) {
      var r = e.normal;
      var i = e.rollover;
      var n = e.down;
      t.setNormalAppearance(r);
      if (i) {
        t.setRolloverAppearance(i);
      } else {
        t.removeRolloverAppearance();
      }
      if (n) {
        t.setDownAppearance(n);
      } else {
        t.removeDownAppearance();
      }
    };
    t.prototype.createAppearanceStream = function (t, e, r) {
      var i;
      var n = this.acroField.dict.context;
      var o = t.getRectangle();
      var s = o.width;
      var a = o.height;
      var l = r && {
        Font: ((i = {})[r.name] = r.ref, i)
      };
      var h = n.formXObject(e, {
        Resources: l,
        BBox: n.obj([0, 0, s, a]),
        Matrix: n.obj([1, 0, 0, 1, 0, 0])
      });
      return n.register(h);
    };
    t.prototype.createImageAppearanceStream = function (t, e, r) {
      var i;
      var o = this.acroField.dict.context;
      var s = t.getRectangle();
      var a = t.getAppearanceCharacteristics();
      var l = t.getBorderStyle();
      var h = (l == null ? undefined : l.getWidth()) ?? 0;
      var c = i4(a == null ? undefined : a.getRotation());
      var u = ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, s), {
        rotation: c
      }));
      var d = i6(s, c);
      var f = e.scaleToFit(d.width - h * 2, d.height - h * 2);
      var p = {
        x: h,
        y: h,
        width: f.width,
        height: f.height,
        rotate: iQ(0),
        xSkew: iQ(0),
        ySkew: iQ(0)
      };
      if (r === E.Center) {
        p.x += (d.width - h * 2) / 2 - f.width / 2;
        p.y += (d.height - h * 2) / 2 - f.height / 2;
      } else if (r === E.Right) {
        p.x = d.width - h - f.width;
        p.y = d.height - h - f.height;
      }
      var g = this.doc.context.addRandomSuffix("Image", 10);
      var m = typescriptRuntimeHelpers.concatArrays(u, oe(g, p));
      var v = {
        XObject: ((i = {})[g] = e.ref, i)
      };
      var y = o.formXObject(m, {
        Resources: v,
        BBox: o.obj([0, 0, s.width, s.height]),
        Matrix: o.obj([1, 0, 0, 1, 0, 0])
      });
      return o.register(y);
    };
    t.prototype.createAppearanceDict = function (t, e, r) {
      var i = this.acroField.dict.context;
      var n = this.createAppearanceStream(t, e.on);
      var o = this.createAppearanceStream(t, e.off);
      var s = i.obj({});
      s.set(r, n);
      s.set(e5.of("Off"), o);
      return s;
    };
    return t;
  }();
  var o2 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroCheckBox", [[is, "PDFAcroCheckBox"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.check = function () {
      var e = this.acroField.getOnValue() ?? e5.of("Yes");
      this.markAsDirty();
      this.acroField.setValue(e);
    };
    e.prototype.uncheck = function () {
      this.markAsDirty();
      this.acroField.setValue(e5.of("Off"));
    };
    e.prototype.isChecked = function () {
      var t = this.acroField.getOnValue();
      return !!t && t === this.acroField.getValue();
    };
    e.prototype.addToPage = function (t, e) {
      er(t, "page", [[sl, "PDFPage"]]);
      o0(e);
      e ||= {};
      if (!("textColor" in e)) {
        e.textColor = nz(0, 0, 0);
      }
      if (!("backgroundColor" in e)) {
        e.backgroundColor = nz(1, 1, 1);
      }
      if (!("borderColor" in e)) {
        e.borderColor = nz(0, 0, 0);
      }
      if (!("borderWidth" in e)) {
        e.borderWidth = 1;
      }
      var l = this.createWidget({
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: e.width ?? 50,
        height: e.height ?? 50,
        textColor: e.textColor,
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth ?? 0,
        rotate: e.rotate ?? iQ(0),
        hidden: e.hidden,
        page: t.ref
      });
      var h = this.doc.context.register(l.dict);
      this.acroField.addWidget(h);
      l.setAppearanceState(e5.of("Off"));
      this.updateWidgetAppearance(l, e5.of("Yes"));
      t.node.addAnnot(h);
    };
    e.prototype.needsAppearancesUpdate = function () {
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.getAppearanceState();
        var s = n.getAppearances()?.normal;
        if (!(s instanceof e4) || o && !s.has(o)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function () {
      this.updateAppearances();
    };
    e.prototype.updateAppearances = function (t) {
      ei(t, "provider", [Function]);
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        var s = o.getOnValue() ?? e5.of("Yes");
        if (s) {
          this.updateWidgetAppearance(o, s, t);
        }
      }
      this.markAsClean();
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oq)(this, t));
      this.updateOnOffWidgetAppearance(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  var o5 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroComboBox", [[ih, "PDFAcroComboBox"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getOptions = function () {
      var t = this.acroField.getOptions();
      var e = Array(t.length);
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = t[r];
        var o = n.display;
        var s = n.value;
        e[r] = (o ?? s).decodeText();
      }
      return e;
    };
    e.prototype.getSelected = function () {
      var t = this.acroField.getValues();
      var e = Array(t.length);
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        e[r] = t[r].decodeText();
      }
      return e;
    };
    e.prototype.setOptions = function (t) {
      er(t, "options", [Array]);
      var e = Array(t.length);
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        e[r] = {
          value: ry.fromText(t[r])
        };
      }
      this.acroField.setOptions(e);
    };
    e.prototype.addOptions = function (t) {
      er(t, "options", ["string", Array]);
      var e = Array.isArray(t) ? t : [t];
      var r = this.acroField.getOptions();
      var i = Array(e.length);
      var n = 0;
      var o = e.length;
      for (; n < o; n++) {
        i[n] = {
          value: ry.fromText(e[n])
        };
      }
      this.acroField.setOptions(r.concat(i));
    };
    e.prototype.select = function (t, e = false) {
      er(t, "options", ["string", Array]);
      er(e, "merge", ["boolean"]);
      var r = Array.isArray(t) ? t : [t];
      var i = this.getOptions();
      if (r.find(function (t) {
        return !i.includes(t);
      })) {
        this.enableEditing();
      }
      this.markAsDirty();
      if (r.length > 1 || r.length === 1 && e) {
        this.enableMultiselect();
      }
      var n = Array(r.length);
      var o = 0;
      var s = r.length;
      for (; o < s; o++) {
        n[o] = ry.fromText(r[o]);
      }
      if (e) {
        var a = this.acroField.getValues();
        this.acroField.setValues(a.concat(n));
      } else {
        this.acroField.setValues(n);
      }
    };
    e.prototype.clear = function () {
      this.markAsDirty();
      this.acroField.setValues([]);
    };
    e.prototype.setFontSize = function (t) {
      eh(t, "fontSize");
      this.acroField.setFontSize(t);
      this.markAsDirty();
    };
    e.prototype.isEditable = function () {
      return this.acroField.hasFlag(y.Edit);
    };
    e.prototype.enableEditing = function () {
      this.acroField.setFlagTo(y.Edit, true);
    };
    e.prototype.disableEditing = function () {
      this.acroField.setFlagTo(y.Edit, false);
    };
    e.prototype.isSorted = function () {
      return this.acroField.hasFlag(y.Sort);
    };
    e.prototype.enableSorting = function () {
      this.acroField.setFlagTo(y.Sort, true);
    };
    e.prototype.disableSorting = function () {
      this.acroField.setFlagTo(y.Sort, false);
    };
    e.prototype.isMultiselect = function () {
      return this.acroField.hasFlag(y.MultiSelect);
    };
    e.prototype.enableMultiselect = function () {
      this.acroField.setFlagTo(y.MultiSelect, true);
    };
    e.prototype.disableMultiselect = function () {
      this.acroField.setFlagTo(y.MultiSelect, false);
    };
    e.prototype.isSpellChecked = function () {
      return !this.acroField.hasFlag(y.DoNotSpellCheck);
    };
    e.prototype.enableSpellChecking = function () {
      this.acroField.setFlagTo(y.DoNotSpellCheck, false);
    };
    e.prototype.disableSpellChecking = function () {
      this.acroField.setFlagTo(y.DoNotSpellCheck, true);
    };
    e.prototype.isSelectOnClick = function () {
      return this.acroField.hasFlag(y.CommitOnSelChange);
    };
    e.prototype.enableSelectOnClick = function () {
      this.acroField.setFlagTo(y.CommitOnSelChange, true);
    };
    e.prototype.disableSelectOnClick = function () {
      this.acroField.setFlagTo(y.CommitOnSelChange, false);
    };
    e.prototype.addToPage = function (t, e) {
      er(t, "page", [[sl, "PDFPage"]]);
      o0(e);
      e ||= {};
      if (!("textColor" in e)) {
        e.textColor = nz(0, 0, 0);
      }
      if (!("backgroundColor" in e)) {
        e.backgroundColor = nz(1, 1, 1);
      }
      if (!("borderColor" in e)) {
        e.borderColor = nz(0, 0, 0);
      }
      if (!("borderWidth" in e)) {
        e.borderWidth = 1;
      }
      var h = this.createWidget({
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: e.width ?? 200,
        height: e.height ?? 50,
        textColor: e.textColor,
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth ?? 0,
        rotate: e.rotate ?? iQ(0),
        hidden: e.hidden,
        page: t.ref
      });
      var c = this.doc.context.register(h.dict);
      this.acroField.addWidget(c);
      var u = e.font ?? this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, u);
      t.node.addAnnot(c);
    };
    e.prototype.needsAppearancesUpdate = function () {
      if (this.isDirty()) {
        return true;
      }
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        if (!(e[r].getAppearances()?.normal instanceof e6)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function (t) {
      er(t, "font", [[oQ, "PDFFont"]]);
      this.updateAppearances(t);
    };
    e.prototype.updateAppearances = function (t, e) {
      er(t, "font", [[oQ, "PDFFont"]]);
      ei(e, "provider", [Function]);
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        this.updateWidgetAppearance(o, t, e);
      }
      this.markAsClean();
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oZ)(this, t, e));
      this.updateWidgetAppearanceWithFont(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  var o3 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroListBox", [[im, "PDFAcroListBox"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getOptions = function () {
      var t = this.acroField.getOptions();
      var e = Array(t.length);
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = t[r];
        var o = n.display;
        var s = n.value;
        e[r] = (o ?? s).decodeText();
      }
      return e;
    };
    e.prototype.getSelected = function () {
      var t = this.acroField.getValues();
      var e = Array(t.length);
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        e[r] = t[r].decodeText();
      }
      return e;
    };
    e.prototype.setOptions = function (t) {
      er(t, "options", [Array]);
      this.markAsDirty();
      var e = Array(t.length);
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        e[r] = {
          value: ry.fromText(t[r])
        };
      }
      this.acroField.setOptions(e);
    };
    e.prototype.addOptions = function (t) {
      er(t, "options", ["string", Array]);
      this.markAsDirty();
      var e = Array.isArray(t) ? t : [t];
      var r = this.acroField.getOptions();
      var i = Array(e.length);
      var n = 0;
      var o = e.length;
      for (; n < o; n++) {
        i[n] = {
          value: ry.fromText(e[n])
        };
      }
      this.acroField.setOptions(r.concat(i));
    };
    e.prototype.select = function (t, e = false) {
      er(t, "options", ["string", Array]);
      er(e, "merge", ["boolean"]);
      var r = Array.isArray(t) ? t : [t];
      t9(r, "option", this.getOptions());
      this.markAsDirty();
      if (r.length > 1 || r.length === 1 && e) {
        this.enableMultiselect();
      }
      var i = Array(r.length);
      var n = 0;
      var o = r.length;
      for (; n < o; n++) {
        i[n] = ry.fromText(r[n]);
      }
      if (e) {
        var s = this.acroField.getValues();
        this.acroField.setValues(s.concat(i));
      } else {
        this.acroField.setValues(i);
      }
    };
    e.prototype.clear = function () {
      this.markAsDirty();
      this.acroField.setValues([]);
    };
    e.prototype.setFontSize = function (t) {
      eh(t, "fontSize");
      this.acroField.setFontSize(t);
      this.markAsDirty();
    };
    e.prototype.isSorted = function () {
      return this.acroField.hasFlag(y.Sort);
    };
    e.prototype.enableSorting = function () {
      this.acroField.setFlagTo(y.Sort, true);
    };
    e.prototype.disableSorting = function () {
      this.acroField.setFlagTo(y.Sort, false);
    };
    e.prototype.isMultiselect = function () {
      return this.acroField.hasFlag(y.MultiSelect);
    };
    e.prototype.enableMultiselect = function () {
      this.acroField.setFlagTo(y.MultiSelect, true);
    };
    e.prototype.disableMultiselect = function () {
      this.acroField.setFlagTo(y.MultiSelect, false);
    };
    e.prototype.isSelectOnClick = function () {
      return this.acroField.hasFlag(y.CommitOnSelChange);
    };
    e.prototype.enableSelectOnClick = function () {
      this.acroField.setFlagTo(y.CommitOnSelChange, true);
    };
    e.prototype.disableSelectOnClick = function () {
      this.acroField.setFlagTo(y.CommitOnSelChange, false);
    };
    e.prototype.addToPage = function (t, e) {
      er(t, "page", [[sl, "PDFPage"]]);
      o0(e);
      e ||= {};
      if (!("textColor" in e)) {
        e.textColor = nz(0, 0, 0);
      }
      if (!("backgroundColor" in e)) {
        e.backgroundColor = nz(1, 1, 1);
      }
      if (!("borderColor" in e)) {
        e.borderColor = nz(0, 0, 0);
      }
      if (!("borderWidth" in e)) {
        e.borderWidth = 1;
      }
      var h = this.createWidget({
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: e.width ?? 200,
        height: e.height ?? 100,
        textColor: e.textColor,
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth ?? 0,
        rotate: e.rotate ?? iQ(0),
        hidden: e.hidden,
        page: t.ref
      });
      var c = this.doc.context.register(h.dict);
      this.acroField.addWidget(c);
      var u = e.font ?? this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, u);
      t.node.addAnnot(c);
    };
    e.prototype.needsAppearancesUpdate = function () {
      if (this.isDirty()) {
        return true;
      }
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        if (!(e[r].getAppearances()?.normal instanceof e6)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function (t) {
      er(t, "font", [[oQ, "PDFFont"]]);
      this.updateAppearances(t);
    };
    e.prototype.updateAppearances = function (t, e) {
      er(t, "font", [[oQ, "PDFFont"]]);
      ei(e, "provider", [Function]);
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        this.updateWidgetAppearance(o, t, e);
      }
      this.markAsClean();
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oY)(this, t, e));
      this.updateWidgetAppearanceWithFont(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  var o4 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroRadioButton", [[ig, "PDFAcroRadioButton"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getOptions = function () {
      var t = this.acroField.getExportValues();
      if (t) {
        var e = Array(t.length);
        var r = 0;
        var i = t.length;
        for (; r < i; r++) {
          e[r] = t[r].decodeText();
        }
        return e;
      }
      var n = this.acroField.getOnValues();
      var o = Array(n.length);
      var r = 0;
      var i = o.length;
      for (; r < i; r++) {
        o[r] = n[r].decodeText();
      }
      return o;
    };
    e.prototype.getSelected = function () {
      var t = this.acroField.getValue();
      if (t !== e5.of("Off")) {
        var e = this.acroField.getExportValues();
        if (e) {
          var r = this.acroField.getOnValues();
          var i = 0;
          var n = r.length;
          for (; i < n; i++) {
            if (r[i] === t) {
              return e[i].decodeText();
            }
          }
        }
        return t.decodeText();
      }
    };
    e.prototype.select = function (t) {
      er(t, "option", ["string"]);
      t6(t, "option", this.getOptions());
      this.markAsDirty();
      var e = this.acroField.getOnValues();
      var r = this.acroField.getExportValues();
      if (r) {
        var i = 0;
        var n = r.length;
        for (; i < n; i++) {
          if (r[i].decodeText() === t) {
            this.acroField.setValue(e[i]);
          }
        }
      } else {
        var i = 0;
        var n = e.length;
        for (; i < n; i++) {
          var o = e[i];
          if (o.decodeText() === t) {
            this.acroField.setValue(o);
          }
        }
      }
    };
    e.prototype.clear = function () {
      this.markAsDirty();
      this.acroField.setValue(e5.of("Off"));
    };
    e.prototype.isOffToggleable = function () {
      return !this.acroField.hasFlag(m.NoToggleToOff);
    };
    e.prototype.enableOffToggling = function () {
      this.acroField.setFlagTo(m.NoToggleToOff, false);
    };
    e.prototype.disableOffToggling = function () {
      this.acroField.setFlagTo(m.NoToggleToOff, true);
    };
    e.prototype.isMutuallyExclusive = function () {
      return !this.acroField.hasFlag(m.RadiosInUnison);
    };
    e.prototype.enableMutualExclusion = function () {
      this.acroField.setFlagTo(m.RadiosInUnison, false);
    };
    e.prototype.disableMutualExclusion = function () {
      this.acroField.setFlagTo(m.RadiosInUnison, true);
    };
    e.prototype.addOptionToPage = function (t, e, r) {
      er(t, "option", ["string"]);
      er(e, "page", [[sl, "PDFPage"]]);
      o0(r);
      var d = this.createWidget({
        x: (r == null ? undefined : r.x) ?? 0,
        y: (r == null ? undefined : r.y) ?? 0,
        width: (r == null ? undefined : r.width) ?? 50,
        height: (r == null ? undefined : r.height) ?? 50,
        textColor: (r == null ? undefined : r.textColor) ?? nz(0, 0, 0),
        backgroundColor: (r == null ? undefined : r.backgroundColor) ?? nz(1, 1, 1),
        borderColor: (r == null ? undefined : r.borderColor) ?? nz(0, 0, 0),
        borderWidth: (r == null ? undefined : r.borderWidth) ?? 1,
        rotate: (r == null ? undefined : r.rotate) ?? iQ(0),
        hidden: r == null ? undefined : r.hidden,
        page: e.ref
      });
      var f = this.doc.context.register(d.dict);
      var p = this.acroField.addWidgetWithOpt(f, ry.fromText(t), !this.isMutuallyExclusive());
      d.setAppearanceState(e5.of("Off"));
      this.updateWidgetAppearance(d, p);
      e.node.addAnnot(f);
    };
    e.prototype.needsAppearancesUpdate = function () {
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.getAppearanceState();
        var s = n.getAppearances()?.normal;
        if (!(s instanceof e4) || o && !s.has(o)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function () {
      this.updateAppearances();
    };
    e.prototype.updateAppearances = function (t) {
      ei(t, "provider", [Function]);
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.getOnValue();
        if (o) {
          this.updateWidgetAppearance(n, o, t);
        }
      }
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oH)(this, t));
      this.updateOnOffWidgetAppearance(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  var o6 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroSignature", [[iu, "PDFAcroSignature"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.needsAppearancesUpdate = function () {
      return false;
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  var o8 = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroText", [[id, "PDFAcroText"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.getText = function () {
      var t = this.acroField.getValue();
      if (!t && this.isRichFormatted()) {
        throw new oE(this.getName());
      }
      if (t == null) {
        return undefined;
      } else {
        return t.decodeText();
      }
    };
    e.prototype.setText = function (t) {
      ei(t, "text", ["string"]);
      var e = this.getMaxLength();
      if (e !== undefined && t && t.length > e) {
        throw new ok(t.length, e, this.getName());
      }
      this.markAsDirty();
      this.disableRichFormatting();
      if (t) {
        this.acroField.setValue(ry.fromText(t));
      } else {
        this.acroField.removeValue();
      }
    };
    e.prototype.getAlignment = function () {
      var t = this.acroField.getQuadding();
      if (t === 0) {
        return T.Left;
      } else if (t === 1) {
        return T.Center;
      } else if (t === 2) {
        return T.Right;
      } else {
        return T.Left;
      }
    };
    e.prototype.setAlignment = function (t) {
      t6(t, "alignment", T);
      this.markAsDirty();
      this.acroField.setQuadding(t);
    };
    e.prototype.getMaxLength = function () {
      return this.acroField.getMaxLength();
    };
    e.prototype.setMaxLength = function (t) {
      es(t, "maxLength", 0, Number.MAX_SAFE_INTEGER);
      this.markAsDirty();
      if (t === undefined) {
        this.acroField.removeMaxLength();
      } else {
        var e = this.getText();
        if (e && e.length > t) {
          throw new oP(e.length, t, this.getName());
        }
        this.acroField.setMaxLength(t);
      }
    };
    e.prototype.removeMaxLength = function () {
      this.markAsDirty();
      this.acroField.removeMaxLength();
    };
    e.prototype.setImage = function (t) {
      var e = this.getAlignment();
      var r = e === T.Center ? E.Center : e === T.Right ? E.Right : E.Left;
      var i = this.acroField.getWidgets();
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        var s = i[n];
        var a = this.createImageAppearanceStream(s, t, r);
        this.updateWidgetAppearances(s, {
          normal: a
        });
      }
      this.markAsClean();
    };
    e.prototype.setFontSize = function (t) {
      eh(t, "fontSize");
      this.acroField.setFontSize(t);
      this.markAsDirty();
    };
    e.prototype.isMultiline = function () {
      return this.acroField.hasFlag(v.Multiline);
    };
    e.prototype.enableMultiline = function () {
      this.markAsDirty();
      this.acroField.setFlagTo(v.Multiline, true);
    };
    e.prototype.disableMultiline = function () {
      this.markAsDirty();
      this.acroField.setFlagTo(v.Multiline, false);
    };
    e.prototype.isPassword = function () {
      return this.acroField.hasFlag(v.Password);
    };
    e.prototype.enablePassword = function () {
      this.acroField.setFlagTo(v.Password, true);
    };
    e.prototype.disablePassword = function () {
      this.acroField.setFlagTo(v.Password, false);
    };
    e.prototype.isFileSelector = function () {
      return this.acroField.hasFlag(v.FileSelect);
    };
    e.prototype.enableFileSelection = function () {
      this.acroField.setFlagTo(v.FileSelect, true);
    };
    e.prototype.disableFileSelection = function () {
      this.acroField.setFlagTo(v.FileSelect, false);
    };
    e.prototype.isSpellChecked = function () {
      return !this.acroField.hasFlag(v.DoNotSpellCheck);
    };
    e.prototype.enableSpellChecking = function () {
      this.acroField.setFlagTo(v.DoNotSpellCheck, false);
    };
    e.prototype.disableSpellChecking = function () {
      this.acroField.setFlagTo(v.DoNotSpellCheck, true);
    };
    e.prototype.isScrollable = function () {
      return !this.acroField.hasFlag(v.DoNotScroll);
    };
    e.prototype.enableScrolling = function () {
      this.acroField.setFlagTo(v.DoNotScroll, false);
    };
    e.prototype.disableScrolling = function () {
      this.acroField.setFlagTo(v.DoNotScroll, true);
    };
    e.prototype.isCombed = function () {
      return this.acroField.hasFlag(v.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== undefined;
    };
    e.prototype.enableCombing = function () {
      this.getMaxLength();
      this.markAsDirty();
      this.disableMultiline();
      this.disablePassword();
      this.disableFileSelection();
      this.acroField.setFlagTo(v.Comb, true);
    };
    e.prototype.disableCombing = function () {
      this.markAsDirty();
      this.acroField.setFlagTo(v.Comb, false);
    };
    e.prototype.isRichFormatted = function () {
      return this.acroField.hasFlag(v.RichText);
    };
    e.prototype.enableRichFormatting = function () {
      this.acroField.setFlagTo(v.RichText, true);
    };
    e.prototype.disableRichFormatting = function () {
      this.acroField.setFlagTo(v.RichText, false);
    };
    e.prototype.addToPage = function (t, e) {
      er(t, "page", [[sl, "PDFPage"]]);
      o0(e);
      e ||= {};
      if (!("textColor" in e)) {
        e.textColor = nz(0, 0, 0);
      }
      if (!("backgroundColor" in e)) {
        e.backgroundColor = nz(1, 1, 1);
      }
      if (!("borderColor" in e)) {
        e.borderColor = nz(0, 0, 0);
      }
      if (!("borderWidth" in e)) {
        e.borderWidth = 1;
      }
      var h = this.createWidget({
        x: e.x ?? 0,
        y: e.y ?? 0,
        width: e.width ?? 200,
        height: e.height ?? 50,
        textColor: e.textColor,
        backgroundColor: e.backgroundColor,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth ?? 0,
        rotate: e.rotate ?? iQ(0),
        hidden: e.hidden,
        page: t.ref
      });
      var c = this.doc.context.register(h.dict);
      this.acroField.addWidget(c);
      var u = e.font ?? this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, u);
      t.node.addAnnot(c);
    };
    e.prototype.needsAppearancesUpdate = function () {
      if (this.isDirty()) {
        return true;
      }
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        if (!(e[r].getAppearances()?.normal instanceof e6)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function (t) {
      er(t, "font", [[oQ, "PDFFont"]]);
      this.updateAppearances(t);
    };
    e.prototype.updateAppearances = function (t, e) {
      er(t, "font", [[oQ, "PDFFont"]]);
      ei(e, "provider", [Function]);
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        this.updateWidgetAppearance(o, t, e);
      }
      this.markAsClean();
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oX)(this, t, e));
      this.updateWidgetAppearanceWithFont(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  (function (t) {
    t.Courier = "Courier";
    t.CourierBold = "Courier-Bold";
    t.CourierOblique = "Courier-Oblique";
    t.CourierBoldOblique = "Courier-BoldOblique";
    t.Helvetica = "Helvetica";
    t.HelveticaBold = "Helvetica-Bold";
    t.HelveticaOblique = "Helvetica-Oblique";
    t.HelveticaBoldOblique = "Helvetica-BoldOblique";
    t.TimesRoman = "Times-Roman";
    t.TimesRomanBold = "Times-Bold";
    t.TimesRomanItalic = "Times-Italic";
    t.TimesRomanBoldItalic = "Times-BoldItalic";
    t.Symbol = "Symbol";
    t.ZapfDingbats = "ZapfDingbats";
  })(F ||= {});
  var o9 = function () {
    function t(t, e) {
      var r = this;
      this.embedDefaultFont = function () {
        return r.doc.embedStandardFont(F.Helvetica);
      };
      er(t, "acroForm", [[iE, "PDFAcroForm"]]);
      er(e, "doc", [[ss, "PDFDocument"]]);
      this.acroForm = t;
      this.doc = e;
      this.dirtyFields = new Set();
      this.defaultFontCache = ef.populatedBy(this.embedDefaultFont);
    }
    t.prototype.hasXFA = function () {
      return this.acroForm.dict.has(e5.of("XFA"));
    };
    t.prototype.deleteXFA = function () {
      this.acroForm.dict.delete(e5.of("XFA"));
    };
    t.prototype.getFields = function () {
      var t = this.acroForm.getAllFields();
      var e = [];
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        var n = t[r];
        var o = o7(n[0], n[1], this.doc);
        if (o) {
          e.push(o);
        }
      }
      return e;
    };
    t.prototype.getFieldMaybe = function (t) {
      er(t, "name", ["string"]);
      var e = this.getFields();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        if (n.getName() === t) {
          return n;
        }
      }
    };
    t.prototype.getField = function (t) {
      er(t, "name", ["string"]);
      var e = this.getFieldMaybe(t);
      if (e) {
        return e;
      }
      throw new ox(t);
    };
    t.prototype.getButton = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof sh) {
        return e;
      }
      throw new ow(t, sh, e);
    };
    t.prototype.getCheckBox = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o2) {
        return e;
      }
      throw new ow(t, o2, e);
    };
    t.prototype.getDropdown = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o5) {
        return e;
      }
      throw new ow(t, o5, e);
    };
    t.prototype.getOptionList = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o3) {
        return e;
      }
      throw new ow(t, o3, e);
    };
    t.prototype.getRadioGroup = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o4) {
        return e;
      }
      throw new ow(t, o4, e);
    };
    t.prototype.getSignature = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o6) {
        return e;
      }
      throw new ow(t, o6, e);
    };
    t.prototype.getTextField = function (t) {
      er(t, "name", ["string"]);
      var e = this.getField(t);
      if (e instanceof o8) {
        return e;
      }
      throw new ow(t, o8, e);
    };
    t.prototype.createButton = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = ip.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return sh.of(i, i.ref, this.doc);
    };
    t.prototype.createCheckBox = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = is.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return o2.of(i, i.ref, this.doc);
    };
    t.prototype.createDropdown = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = ih.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return o5.of(i, i.ref, this.doc);
    };
    t.prototype.createOptionList = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = im.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return o3.of(i, i.ref, this.doc);
    };
    t.prototype.createRadioGroup = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = ig.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return o4.of(i, i.ref, this.doc);
    };
    t.prototype.createTextField = function (t) {
      er(t, "name", ["string"]);
      var e = st(t);
      var r = this.findOrCreateNonTerminals(e.nonTerminal);
      var i = id.create(this.doc.context);
      i.setPartialName(e.terminal);
      se(r, [i, i.ref], e.terminal);
      return o8.of(i, i.ref, this.doc);
    };
    t.prototype.flatten = function (t = {
      updateFieldAppearances: true
    }) {
      if (t.updateFieldAppearances) {
        this.updateFieldAppearances();
      }
      var e = this.getFields();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.acroField.getWidgets();
        var s = 0;
        var a = o.length;
        for (; s < a; s++) {
          var l = o[s];
          var h = this.findWidgetPage(l);
          var c = this.findWidgetAppearanceRef(n, l);
          var u = h.node.newXObject("FlatWidget", c);
          var d = l.getRectangle();
          var f = typescriptRuntimeHelpers.concatArrays([nu(), ni(d.x, d.y)], ou(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, d), {
            rotation: 0
          })), [nM(u), nd()]).filter(Boolean);
          h.pushOperators.apply(h, f);
        }
        this.removeField(n);
      }
    };
    t.prototype.removeField = function (t) {
      var e = t.acroField.getWidgets();
      var r = new Set();
      var i = 0;
      var n = e.length;
      for (; i < n; i++) {
        var o = e[i];
        var s = this.findWidgetAppearanceRef(t, o);
        var a = this.findWidgetPage(o);
        r.add(a);
        a.node.removeAnnot(s);
      }
      r.forEach(function (e) {
        return e.node.removeAnnot(t.ref);
      });
      this.acroForm.removeField(t.acroField);
      var l = t.acroField.normalizedEntries().Kids;
      var h = l.size();
      var c = 0;
      for (; c < h; c++) {
        var u = l.get(c);
        if (u instanceof rt) {
          this.doc.context.delete(u);
        }
      }
      this.doc.context.delete(t.ref);
    };
    t.prototype.updateFieldAppearances = function (t) {
      ei(t, "font", [[oQ, "PDFFont"]]);
      t = t ?? this.getDefaultFont();
      var e = this.getFields();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        if (n.needsAppearancesUpdate()) {
          n.defaultUpdateAppearances(t);
        }
      }
    };
    t.prototype.markFieldAsDirty = function (t) {
      ei(t, "fieldRef", [[rt, "PDFRef"]]);
      this.dirtyFields.add(t);
    };
    t.prototype.markFieldAsClean = function (t) {
      ei(t, "fieldRef", [[rt, "PDFRef"]]);
      this.dirtyFields.delete(t);
    };
    t.prototype.fieldIsDirty = function (t) {
      ei(t, "fieldRef", [[rt, "PDFRef"]]);
      return this.dirtyFields.has(t);
    };
    t.prototype.getDefaultFont = function () {
      return this.defaultFontCache.access();
    };
    t.prototype.findWidgetPage = function (t) {
      var e = t.P();
      var r = this.doc.getPages().find(function (t) {
        return t.ref === e;
      });
      if (r === undefined) {
        var i = this.doc.context.getObjectRef(t.dict);
        if (i === undefined) {
          throw Error("Could not find PDFRef for PDFObject");
        }
        if ((r = this.doc.findPageForAnnotationRef(i)) === undefined) {
          throw Error("Could not find page for PDFRef " + i);
        }
      }
      return r;
    };
    t.prototype.findWidgetAppearanceRef = function (t, e) {
      var i = e.getNormalAppearance();
      if (i instanceof e4 && (t instanceof o2 || t instanceof o4)) {
        var n = t.acroField.getValue();
        var o = i.get(n) ?? i.get(e5.of("Off"));
        if (o instanceof rt) {
          i = o;
        }
      }
      if (!(i instanceof rt)) {
        throw Error("Failed to extract appearance ref for: " + t.getName());
      }
      return i;
    };
    t.prototype.findOrCreateNonTerminals = function (t) {
      var e = [this.acroForm];
      var r = 0;
      var i = t.length;
      for (; r < i; r++) {
        var n = t[r];
        if (!n) {
          throw new oT(n);
        }
        var o = e[0];
        var s = e[1];
        var a = this.findNonTerminal(n, o);
        if (a) {
          e = a;
        } else {
          var l = ic.create(this.doc.context);
          l.setPartialName(n);
          l.setParent(s);
          var h = this.doc.context.register(l.dict);
          o.addField(h);
          e = [l, h];
        }
      }
      return e;
    };
    t.prototype.findNonTerminal = function (t, e) {
      var r = e instanceof iE ? this.acroForm.getFields() : iv(e.Kids());
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        var s = o[0];
        var a = o[1];
        if (s.getPartialName() === t) {
          if (s instanceof ic) {
            return [s, a];
          }
          throw new oC(t);
        }
      }
    };
    t.of = function (e, r) {
      return new t(e, r);
    };
    return t;
  }();
  function o7(t, e, r) {
    if (t instanceof ip) {
      return sh.of(t, e, r);
    } else if (t instanceof is) {
      return o2.of(t, e, r);
    } else if (t instanceof ih) {
      return o5.of(t, e, r);
    } else if (t instanceof im) {
      return o3.of(t, e, r);
    } else if (t instanceof id) {
      return o8.of(t, e, r);
    } else if (t instanceof ig) {
      return o4.of(t, e, r);
    } else if (t instanceof iu) {
      return o6.of(t, e, r);
    } else {
      return undefined;
    }
  }
  function st(t) {
    if (t.length === 0) {
      throw Error("PDF field names must not be empty strings");
    }
    var e = t.split(".");
    var r = 0;
    var i = e.length;
    for (; r < i; r++) {
      if (e[r] === "") {
        throw Error("Periods in PDF field names must be separated by at least one character: \"" + t + "\"");
      }
    }
    if (e.length === 1) {
      return {
        nonTerminal: [],
        terminal: e[0]
      };
    } else {
      return {
        nonTerminal: e.slice(0, e.length - 1),
        terminal: e[e.length - 1]
      };
    }
  }
  function se(t, e, r) {
    var i = t[0];
    var n = t[1];
    var o = e[0];
    var s = e[1];
    var a = i.normalizedEntries();
    var l = iv("Kids" in a ? a.Kids : a.Fields);
    var h = 0;
    var c = l.length;
    for (; h < c; h++) {
      if (l[h][0].getPartialName() === r) {
        throw new oC(r);
      }
    }
    i.addField(s);
    o.setParent(n);
  }
  var sr = {
    A4: [595.28, 841.89]
  };
  (function (t) {
    t[t.Fastest = Infinity] = "Fastest";
    t[t.Fast = 1500] = "Fast";
    t[t.Medium = 500] = "Medium";
    t[t.Slow = 100] = "Slow";
  })(k ||= {});
  var si = function () {
    function t(t, e, r) {
      this.alreadyEmbedded = false;
      this.ref = t;
      this.doc = e;
      this.embedder = r;
    }
    t.prototype.embed = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        return typescriptRuntimeHelpers.generator(this, function (n) {
          switch (n.label) {
            case 0:
              if (this.alreadyEmbedded) {
                return [3, 2];
              }
              return [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              t = n.sent();
              if (!this.doc.catalog.has(e5.of("Names"))) {
                this.doc.catalog.set(e5.of("Names"), this.doc.context.obj({}));
              }
              if (!(e = this.doc.catalog.lookup(e5.of("Names"), e4)).has(e5.of("EmbeddedFiles"))) {
                e.set(e5.of("EmbeddedFiles"), this.doc.context.obj({}));
              }
              if (!(r = e.lookup(e5.of("EmbeddedFiles"), e4)).has(e5.of("Names"))) {
                r.set(e5.of("Names"), this.doc.context.obj([]));
              }
              (i = r.lookup(e5.of("Names"), eq)).push(ry.fromText(this.embedder.fileName));
              i.push(t);
              if (!this.doc.catalog.has(e5.of("AF"))) {
                this.doc.catalog.set(e5.of("AF"), this.doc.context.obj([]));
              }
              this.doc.catalog.lookup(e5.of("AF"), eq).push(t);
              this.alreadyEmbedded = true;
              n.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    return t;
  }();
  var sn = function () {
    function t(t, e, r) {
      this.alreadyEmbedded = false;
      this.ref = t;
      this.doc = e;
      this.embedder = r;
    }
    t.prototype.embed = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var t;
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        return typescriptRuntimeHelpers.generator(this, function (a) {
          switch (a.label) {
            case 0:
              if (this.alreadyEmbedded) {
                return [3, 2];
              }
              e = (t = this.doc).catalog;
              r = t.context;
              return [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              i = a.sent();
              if (!e.has(e5.of("Names"))) {
                e.set(e5.of("Names"), r.obj({}));
              }
              if (!(n = e.lookup(e5.of("Names"), e4)).has(e5.of("JavaScript"))) {
                n.set(e5.of("JavaScript"), r.obj({}));
              }
              if (!(o = n.lookup(e5.of("JavaScript"), e4)).has(e5.of("Names"))) {
                o.set(e5.of("Names"), r.obj([]));
              }
              (s = o.lookup(e5.of("Names"), eq)).push(ry.fromText(this.embedder.scriptName));
              s.push(i);
              this.alreadyEmbedded = true;
              a.label = 2;
            case 2:
              return [2];
          }
        });
      });
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    return t;
  }();
  var so = function () {
    function t(t, e) {
      this.script = t;
      this.scriptName = e;
    }
    t.for = function (e, r) {
      return new t(e, r);
    };
    t.prototype.embedIntoContext = function (t, e) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          r = t.obj({
            Type: "Action",
            S: "JavaScript",
            JS: ry.fromText(this.script)
          });
          if (e) {
            t.assign(e, r);
            return [2, e];
          } else {
            return [2, t.register(r)];
          }
        });
      });
    };
    return t;
  }();
  var ss = function () {
    function t(t, e, r) {
      var i = this;
      this.defaultWordBreaks = [" "];
      this.computePages = function () {
        var t = [];
        i.catalog.Pages().traverse(function (e, r) {
          if (e instanceof rl) {
            var n = i.pageMap.get(e);
            if (!n) {
              n = sl.of(e, r, i);
              i.pageMap.set(e, n);
            }
            t.push(n);
          }
        });
        return t;
      };
      this.getOrCreateForm = function () {
        var t = i.catalog.getOrCreateAcroForm();
        return o9.of(t, i);
      };
      er(t, "context", [[ra, "PDFContext"]]);
      er(e, "ignoreEncryption", ["boolean"]);
      this.context = t;
      this.catalog = t.lookup(t.trailerInfo.Root);
      this.isEncrypted = !!t.lookup(t.trailerInfo.Encrypt);
      this.pageCache = ef.populatedBy(this.computePages);
      this.pageMap = new Map();
      this.formCache = ef.populatedBy(this.getOrCreateForm);
      this.fonts = [];
      this.images = [];
      this.embeddedPages = [];
      this.embeddedFiles = [];
      this.javaScripts = [];
      if (!e && this.isEncrypted) {
        throw new oy();
      }
      if (r) {
        this.updateInfoDict();
      }
    }
    t.load = function (e, r = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        var d;
        var f;
        return typescriptRuntimeHelpers.generator(this, function (p) {
          switch (p.label) {
            case 0:
              n = (i = r.ignoreEncryption) !== undefined && i;
              s = (o = r.parseSpeed) === undefined ? k.Slow : o;
              l = (a = r.throwOnInvalidObject) !== undefined && a;
              c = (h = r.updateMetadata) === undefined || h;
              d = (u = r.capNumbers) !== undefined && u;
              er(e, "pdf", ["string", Uint8Array, ArrayBuffer]);
              er(n, "ignoreEncryption", ["boolean"]);
              er(s, "parseSpeed", ["number"]);
              er(l, "throwOnInvalidObject", ["boolean"]);
              f = tv(e);
              return [4, iK.forBytesWithOptions(f, s, l, d).parseDocument()];
            case 1:
              return [2, new t(p.sent(), n, c)];
          }
        });
      });
    };
    t.create = function (e = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        return typescriptRuntimeHelpers.generator(this, function (l) {
          i = (r = e.updateMetadata) === undefined || r;
          n = ra.create();
          o = ik.withContext(n);
          s = n.register(o);
          a = iF.withContextAndPages(n, s);
          n.trailerInfo.Root = n.register(a);
          return [2, new t(n, false, i)];
        });
      });
    };
    t.prototype.registerFontkit = function (t) {
      this.fontkit = t;
    };
    t.prototype.getForm = function () {
      var t = this.formCache.access();
      if (t.hasXFA()) {
        t.deleteXFA();
      }
      return t;
    };
    t.prototype.getTitle = function () {
      var t = this.getInfoDict().lookup(e5.Title);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getAuthor = function () {
      var t = this.getInfoDict().lookup(e5.Author);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getSubject = function () {
      var t = this.getInfoDict().lookup(e5.Subject);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getKeywords = function () {
      var t = this.getInfoDict().lookup(e5.Keywords);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getCreator = function () {
      var t = this.getInfoDict().lookup(e5.Creator);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getProducer = function () {
      var t = this.getInfoDict().lookup(e5.Producer);
      if (t) {
        sa(t);
        return t.decodeText();
      }
    };
    t.prototype.getCreationDate = function () {
      var t = this.getInfoDict().lookup(e5.CreationDate);
      if (t) {
        sa(t);
        return t.decodeDate();
      }
    };
    t.prototype.getModificationDate = function () {
      var t = this.getInfoDict().lookup(e5.ModDate);
      if (t) {
        sa(t);
        return t.decodeDate();
      }
    };
    t.prototype.setTitle = function (t, e) {
      er(t, "title", ["string"]);
      var r = e5.of("Title");
      this.getInfoDict().set(r, ry.fromText(t));
      if (e == null ? undefined : e.showInWindowTitleBar) {
        this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(true);
      }
    };
    t.prototype.setAuthor = function (t) {
      er(t, "author", ["string"]);
      var e = e5.of("Author");
      this.getInfoDict().set(e, ry.fromText(t));
    };
    t.prototype.setSubject = function (t) {
      er(t, "author", ["string"]);
      var e = e5.of("Subject");
      this.getInfoDict().set(e, ry.fromText(t));
    };
    t.prototype.setKeywords = function (t) {
      er(t, "keywords", [Array]);
      var e = e5.of("Keywords");
      this.getInfoDict().set(e, ry.fromText(t.join(" ")));
    };
    t.prototype.setCreator = function (t) {
      er(t, "creator", ["string"]);
      var e = e5.of("Creator");
      this.getInfoDict().set(e, ry.fromText(t));
    };
    t.prototype.setProducer = function (t) {
      er(t, "creator", ["string"]);
      var e = e5.of("Producer");
      this.getInfoDict().set(e, ry.fromText(t));
    };
    t.prototype.setLanguage = function (t) {
      er(t, "language", ["string"]);
      var e = e5.of("Lang");
      this.catalog.set(e, rF.of(t));
    };
    t.prototype.setCreationDate = function (t) {
      er(t, "creationDate", [[Date, "Date"]]);
      var e = e5.of("CreationDate");
      this.getInfoDict().set(e, rF.fromDate(t));
    };
    t.prototype.setModificationDate = function (t) {
      er(t, "modificationDate", [[Date, "Date"]]);
      var e = e5.of("ModDate");
      this.getInfoDict().set(e, rF.fromDate(t));
    };
    t.prototype.getPageCount = function () {
      if (this.pageCount === undefined) {
        this.pageCount = this.getPages().length;
      }
      return this.pageCount;
    };
    t.prototype.getPages = function () {
      return this.pageCache.access();
    };
    t.prototype.getPage = function (t) {
      var e = this.getPages();
      eo(t, "index", 0, e.length - 1);
      return e[t];
    };
    t.prototype.getPageIndices = function () {
      return tp(0, this.getPageCount());
    };
    t.prototype.removePage = function (t) {
      var e = this.getPageCount();
      if (this.pageCount === 0) {
        throw new oS();
      }
      eo(t, "index", 0, e - 1);
      this.catalog.removeLeafNode(t);
      this.pageCount = e - 1;
    };
    t.prototype.addPage = function (t) {
      er(t, "page", ["undefined", [sl, "PDFPage"], Array]);
      return this.insertPage(this.getPageCount(), t);
    };
    t.prototype.insertPage = function (t, e) {
      var r = this.getPageCount();
      eo(t, "index", 0, r);
      er(e, "page", ["undefined", [sl, "PDFPage"], Array]);
      if (!e || Array.isArray(e)) {
        var i = Array.isArray(e) ? e : sr.A4;
        (e = sl.create(this)).setSize.apply(e, i);
      } else if (e.doc !== this) {
        throw new oA();
      }
      var n = this.catalog.insertLeafNode(e.ref, t);
      e.node.setParent(n);
      this.pageMap.set(e.node, e);
      this.pageCache.invalidate();
      this.pageCount = r + 1;
      return e;
    };
    t.prototype.copyPages = function (e, r) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        return typescriptRuntimeHelpers.generator(this, function (u) {
          switch (u.label) {
            case 0:
              er(e, "srcDoc", [[t, "PDFDocument"]]);
              er(r, "indices", [Array]);
              return [4, e.flush()];
            case 1:
              u.sent();
              i = rh.for(e.context, this.context);
              n = e.getPages();
              o = Array(r.length);
              s = 0;
              a = r.length;
              for (; s < a; s++) {
                l = n[r[s]];
                h = i.copy(l.node);
                c = this.context.register(h);
                o[s] = sl.of(h, c, this);
              }
              return [2, o];
          }
        });
      });
    };
    t.prototype.copy = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              return [4, t.create()];
            case 1:
              return [4, (e = o.sent()).copyPages(this, this.getPageIndices())];
            case 2:
              i = 0;
              n = (r = o.sent()).length;
              for (; i < n; i++) {
                e.addPage(r[i]);
              }
              if (this.getAuthor() !== undefined) {
                e.setAuthor(this.getAuthor());
              }
              if (this.getCreationDate() !== undefined) {
                e.setCreationDate(this.getCreationDate());
              }
              if (this.getCreator() !== undefined) {
                e.setCreator(this.getCreator());
              }
              if (this.getModificationDate() !== undefined) {
                e.setModificationDate(this.getModificationDate());
              }
              if (this.getProducer() !== undefined) {
                e.setProducer(this.getProducer());
              }
              if (this.getSubject() !== undefined) {
                e.setSubject(this.getSubject());
              }
              if (this.getTitle() !== undefined) {
                e.setTitle(this.getTitle());
              }
              e.defaultWordBreaks = this.defaultWordBreaks;
              return [2, e];
          }
        });
      });
    };
    t.prototype.addJavaScript = function (t, e) {
      er(t, "name", ["string"]);
      er(e, "script", ["string"]);
      var r = so.for(e, t);
      var i = this.context.nextRef();
      var n = sn.of(i, this, r);
      this.javaScripts.push(n);
    };
    t.prototype.attach = function (t, e, r = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var s;
        return typescriptRuntimeHelpers.generator(this, function (a) {
          er(t, "attachment", ["string", Uint8Array, ArrayBuffer]);
          er(e, "name", ["string"]);
          ei(r.mimeType, "mimeType", ["string"]);
          ei(r.description, "description", ["string"]);
          ei(r.creationDate, "options.creationDate", [Date]);
          ei(r.modificationDate, "options.modificationDate", [Date]);
          t8(r.afRelationship, "options.afRelationship", l);
          i = tv(t);
          n = rR.for(i, e, r);
          o = this.context.nextRef();
          s = si.of(o, this, n);
          this.embeddedFiles.push(s);
          return [2];
        });
      });
    };
    t.prototype.embedFont = function (t, e = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        return typescriptRuntimeHelpers.generator(this, function (d) {
          switch (d.label) {
            case 0:
              i = (r = e.subset) !== undefined && r;
              n = e.customName;
              o = e.features;
              er(t, "font", ["string", Uint8Array, ArrayBuffer]);
              er(i, "subset", ["boolean"]);
              if (!t0(t)) {
                return [3, 1];
              }
              s = rb.for(t, n);
              return [3, 7];
            case 1:
              if (!tm(t)) {
                return [3, 6];
              }
              a = tv(t);
              l = this.assertFontkit();
              if (!i) {
                return [3, 3];
              }
              return [4, rP.for(l, a, n, o)];
            case 2:
              h = d.sent();
              return [3, 5];
            case 3:
              return [4, rk.for(l, a, n, o)];
            case 4:
              h = d.sent();
              d.label = 5;
            case 5:
              s = h;
              return [3, 7];
            case 6:
              throw TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");
            case 7:
              c = this.context.nextRef();
              u = oQ.of(c, this, s);
              this.fonts.push(u);
              return [2, u];
          }
        });
      });
    };
    t.prototype.embedStandardFont = function (t, e) {
      er(t, "font", ["string"]);
      if (!t0(t)) {
        throw TypeError("`font` must be one of type `StandardFonts`");
      }
      var r = rb.for(t, e);
      var i = this.context.nextRef();
      var n = oQ.of(i, this, r);
      this.fonts.push(n);
      return n;
    };
    t.prototype.embedJpg = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              er(t, "jpg", ["string", Uint8Array, ArrayBuffer]);
              e = tv(t);
              return [4, rD.for(e)];
            case 1:
              r = o.sent();
              i = this.context.nextRef();
              n = o$.of(i, this, r);
              this.images.push(n);
              return [2, n];
          }
        });
      });
    };
    t.prototype.embedPng = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              er(t, "png", ["string", Uint8Array, ArrayBuffer]);
              e = tv(t);
              return [4, r_.for(e)];
            case 1:
              r = o.sent();
              i = this.context.nextRef();
              n = o$.of(i, this, r);
              this.images.push(n);
              return [2, n];
          }
        });
      });
    };
    t.prototype.embedPdf = function (e, r = [0]) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              er(e, "pdf", ["string", Uint8Array, ArrayBuffer, [t, "PDFDocument"]]);
              er(r, "indices", [Array]);
              if (!(e instanceof t)) {
                return [3, 1];
              }
              i = e;
              return [3, 3];
            case 1:
              return [4, t.load(e)];
            case 2:
              i = o.sent();
              o.label = 3;
            case 3:
              n = tg(i.getPages(), r);
              return [2, this.embedPages(n)];
          }
        });
      });
    };
    t.prototype.embedPage = function (t, e, r) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (i) {
          switch (i.label) {
            case 0:
              er(t, "page", [[sl, "PDFPage"]]);
              return [4, this.embedPages([t], [e], [r])];
            case 1:
              return [2, i.sent()[0]];
          }
        });
      });
    };
    t.prototype.embedPages = function (t, e = [], r = []) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        var c;
        var u;
        var d;
        var f;
        var p;
        var g;
        return typescriptRuntimeHelpers.generator(this, function (m) {
          switch (m.label) {
            case 0:
              if (t.length === 0) {
                return [2, []];
              }
              i = 0;
              n = t.length - 1;
              for (; i < n; i++) {
                o = t[i];
                s = t[i + 1];
                if (o.node.context !== s.node.context) {
                  throw new eS();
                }
              }
              l = (a = t[0].node.context) === this.context ? function (t) {
                return t;
              } : rh.for(a, this.context).copy;
              h = Array(t.length);
              i = 0;
              n = t.length;
              m.label = 1;
            case 1:
              if (!(i < n)) {
                return [3, 4];
              }
              c = l(t[i].node);
              u = e[i];
              d = r[i];
              return [4, r3.for(c, u, d)];
            case 2:
              f = m.sent();
              p = this.context.nextRef();
              h[i] = oJ.of(p, this, f);
              m.label = 3;
            case 3:
              i++;
              return [3, 1];
            case 4:
              (g = this.embeddedPages).push.apply(g, h);
              return [2, h];
          }
        });
      });
    };
    t.prototype.flush = function () {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        return typescriptRuntimeHelpers.generator(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, this.embedAll(this.fonts)];
            case 1:
              t.sent();
              return [4, this.embedAll(this.images)];
            case 2:
              t.sent();
              return [4, this.embedAll(this.embeddedPages)];
            case 3:
              t.sent();
              return [4, this.embedAll(this.embeddedFiles)];
            case 4:
              t.sent();
              return [4, this.embedAll(this.javaScripts)];
            case 5:
              t.sent();
              return [2];
          }
        });
      });
    };
    t.prototype.save = function (t = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var l;
        var h;
        return typescriptRuntimeHelpers.generator(this, function (c) {
          switch (c.label) {
            case 0:
              r = (e = t.useObjectStreams) === undefined || e;
              n = (i = t.addDefaultPage) === undefined || i;
              s = (o = t.objectsPerTick) === undefined ? 50 : o;
              l = (a = t.updateFieldAppearances) === undefined || a;
              er(r, "useObjectStreams", ["boolean"]);
              er(n, "addDefaultPage", ["boolean"]);
              er(s, "objectsPerTick", ["number"]);
              er(l, "updateFieldAppearances", ["boolean"]);
              if (n && this.getPageCount() === 0) {
                this.addPage();
              }
              if (l && (h = this.formCache.getValue())) {
                h.updateFieldAppearances();
              }
              return [4, this.flush()];
            case 1:
              c.sent();
              return [2, (r ? rv : rp).forContext(this.context, s).serializeToBuffer()];
          }
        });
      });
    };
    t.prototype.saveAsBase64 = function (t = {}) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        var i;
        var n;
        return typescriptRuntimeHelpers.generator(this, function (o) {
          switch (o.label) {
            case 0:
              r = (e = t.dataUri) !== undefined && e;
              i = typescriptRuntimeHelpers.objectRest(t, ["dataUri"]);
              er(r, "dataUri", ["boolean"]);
              return [4, this.save(i)];
            case 1:
              n = I(o.sent());
              return [2, r ? "data:application/pdf;base64," + n : n];
          }
        });
      });
    };
    t.prototype.findPageForAnnotationRef = function (t) {
      var e = this.getPages();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        var n = e[r];
        var o = n.node.Annots();
        if ((o == null ? undefined : o.indexOf(t)) !== undefined) {
          return n;
        }
      }
    };
    t.prototype.embedAll = function (t) {
      return typescriptRuntimeHelpers.awaiter(this, undefined, undefined, function () {
        var e;
        var r;
        return typescriptRuntimeHelpers.generator(this, function (i) {
          switch (i.label) {
            case 0:
              e = 0;
              r = t.length;
              i.label = 1;
            case 1:
              if (!(e < r)) {
                return [3, 4];
              }
              return [4, t[e].embed()];
            case 2:
              i.sent();
              i.label = 3;
            case 3:
              e++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
    };
    t.prototype.updateInfoDict = function () {
      var t = "pdf-lib (https://github.com/Hopding/pdf-lib)";
      var e = new Date();
      var r = this.getInfoDict();
      this.setProducer(t);
      this.setModificationDate(e);
      if (!r.get(e5.of("Creator"))) {
        this.setCreator(t);
      }
      if (!r.get(e5.of("CreationDate"))) {
        this.setCreationDate(e);
      }
    };
    t.prototype.getInfoDict = function () {
      var t = this.context.lookup(this.context.trailerInfo.Info);
      if (t instanceof e4) {
        return t;
      }
      var e = this.context.obj({});
      this.context.trailerInfo.Info = this.context.register(e);
      return e;
    };
    t.prototype.assertFontkit = function () {
      if (!this.fontkit) {
        throw new ob();
      }
      return this.fontkit;
    };
    return t;
  }();
  function sa(t) {
    if (!(t instanceof ry) && !(t instanceof rF)) {
      throw new em([ry, rF], t);
    }
  }
  (function (t) {
    t.Normal = "Normal";
    t.Multiply = "Multiply";
    t.Screen = "Screen";
    t.Overlay = "Overlay";
    t.Darken = "Darken";
    t.Lighten = "Lighten";
    t.ColorDodge = "ColorDodge";
    t.ColorBurn = "ColorBurn";
    t.HardLight = "HardLight";
    t.SoftLight = "SoftLight";
    t.Difference = "Difference";
    t.Exclusion = "Exclusion";
  })(P ||= {});
  var sl = function () {
    function t(t, e, r) {
      this.fontSize = 24;
      this.fontColor = nz(0, 0, 0);
      this.lineHeight = 24;
      this.x = 0;
      this.y = 0;
      er(t, "leafNode", [[rl, "PDFPageLeaf"]]);
      er(e, "ref", [[rt, "PDFRef"]]);
      er(r, "doc", [[ss, "PDFDocument"]]);
      this.node = t;
      this.ref = e;
      this.doc = r;
    }
    t.prototype.setRotation = function (t) {
      var e = i3(t);
      ea(e, "degreesAngle", 90);
      this.node.set(e5.of("Rotate"), this.doc.context.obj(e));
    };
    t.prototype.getRotation = function () {
      var t = this.node.Rotate();
      return iQ(t ? t.asNumber() : 0);
    };
    t.prototype.setSize = function (t, e) {
      er(t, "width", ["number"]);
      er(e, "height", ["number"]);
      var r = this.getMediaBox();
      this.setMediaBox(r.x, r.y, t, e);
      var i = this.getCropBox();
      var n = this.getBleedBox();
      var o = this.getTrimBox();
      var s = this.getArtBox();
      var a = this.node.CropBox();
      var l = this.node.BleedBox();
      var h = this.node.TrimBox();
      var c = this.node.ArtBox();
      if (a && t1(i, r)) {
        this.setCropBox(r.x, r.y, t, e);
      }
      if (l && t1(n, r)) {
        this.setBleedBox(r.x, r.y, t, e);
      }
      if (h && t1(o, r)) {
        this.setTrimBox(r.x, r.y, t, e);
      }
      if (c && t1(s, r)) {
        this.setArtBox(r.x, r.y, t, e);
      }
    };
    t.prototype.setWidth = function (t) {
      er(t, "width", ["number"]);
      this.setSize(t, this.getSize().height);
    };
    t.prototype.setHeight = function (t) {
      er(t, "height", ["number"]);
      this.setSize(this.getSize().width, t);
    };
    t.prototype.setMediaBox = function (t, e, r, i) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      er(r, "width", ["number"]);
      er(i, "height", ["number"]);
      var n = this.doc.context.obj([t, e, t + r, e + i]);
      this.node.set(e5.MediaBox, n);
    };
    t.prototype.setCropBox = function (t, e, r, i) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      er(r, "width", ["number"]);
      er(i, "height", ["number"]);
      var n = this.doc.context.obj([t, e, t + r, e + i]);
      this.node.set(e5.CropBox, n);
    };
    t.prototype.setBleedBox = function (t, e, r, i) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      er(r, "width", ["number"]);
      er(i, "height", ["number"]);
      var n = this.doc.context.obj([t, e, t + r, e + i]);
      this.node.set(e5.BleedBox, n);
    };
    t.prototype.setTrimBox = function (t, e, r, i) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      er(r, "width", ["number"]);
      er(i, "height", ["number"]);
      var n = this.doc.context.obj([t, e, t + r, e + i]);
      this.node.set(e5.TrimBox, n);
    };
    t.prototype.setArtBox = function (t, e, r, i) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      er(r, "width", ["number"]);
      er(i, "height", ["number"]);
      var n = this.doc.context.obj([t, e, t + r, e + i]);
      this.node.set(e5.ArtBox, n);
    };
    t.prototype.getSize = function () {
      var t = this.getMediaBox();
      return {
        width: t.width,
        height: t.height
      };
    };
    t.prototype.getWidth = function () {
      return this.getSize().width;
    };
    t.prototype.getHeight = function () {
      return this.getSize().height;
    };
    t.prototype.getMediaBox = function () {
      return this.node.MediaBox().asRectangle();
    };
    t.prototype.getCropBox = function () {
      var e = this.node.CropBox();
      return (e == null ? undefined : e.asRectangle()) ?? this.getMediaBox();
    };
    t.prototype.getBleedBox = function () {
      var e = this.node.BleedBox();
      return (e == null ? undefined : e.asRectangle()) ?? this.getCropBox();
    };
    t.prototype.getTrimBox = function () {
      var e = this.node.TrimBox();
      return (e == null ? undefined : e.asRectangle()) ?? this.getCropBox();
    };
    t.prototype.getArtBox = function () {
      var e = this.node.ArtBox();
      return (e == null ? undefined : e.asRectangle()) ?? this.getCropBox();
    };
    t.prototype.translateContent = function (t, e) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      this.node.normalize();
      this.getContentStream();
      var r = this.createContentStream(nu(), ni(t, e));
      var i = this.doc.context.register(r);
      var n = this.createContentStream(nd());
      var o = this.doc.context.register(n);
      this.node.wrapContentStreams(i, o);
    };
    t.prototype.scale = function (t, e) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      this.setSize(this.getWidth() * t, this.getHeight() * e);
      this.scaleContent(t, e);
      this.scaleAnnotations(t, e);
    };
    t.prototype.scaleContent = function (t, e) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      this.node.normalize();
      this.getContentStream();
      var r = this.createContentStream(nu(), nn(t, e));
      var i = this.doc.context.register(r);
      var n = this.createContentStream(nd());
      var o = this.doc.context.register(n);
      this.node.wrapContentStreams(i, o);
    };
    t.prototype.scaleAnnotations = function (t, e) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      var r = this.node.Annots();
      if (r) {
        for (var i = 0; i < r.size(); i++) {
          var n = r.lookup(i);
          if (n instanceof e4) {
            this.scaleAnnot(n, t, e);
          }
        }
      }
    };
    t.prototype.resetPosition = function () {
      this.getContentStream(false);
      this.x = 0;
      this.y = 0;
    };
    t.prototype.setFont = function (t) {
      er(t, "font", [[oQ, "PDFFont"]]);
      this.font = t;
      this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref);
    };
    t.prototype.setFontSize = function (t) {
      er(t, "fontSize", ["number"]);
      this.fontSize = t;
    };
    t.prototype.setFontColor = function (t) {
      er(t, "fontColor", [[Object, "Color"]]);
      this.fontColor = t;
    };
    t.prototype.setLineHeight = function (t) {
      er(t, "lineHeight", ["number"]);
      this.lineHeight = t;
    };
    t.prototype.getPosition = function () {
      return {
        x: this.x,
        y: this.y
      };
    };
    t.prototype.getX = function () {
      return this.x;
    };
    t.prototype.getY = function () {
      return this.y;
    };
    t.prototype.moveTo = function (t, e) {
      er(t, "x", ["number"]);
      er(e, "y", ["number"]);
      this.x = t;
      this.y = e;
    };
    t.prototype.moveDown = function (t) {
      er(t, "yDecrease", ["number"]);
      this.y -= t;
    };
    t.prototype.moveUp = function (t) {
      er(t, "yIncrease", ["number"]);
      this.y += t;
    };
    t.prototype.moveLeft = function (t) {
      er(t, "xDecrease", ["number"]);
      this.x -= t;
    };
    t.prototype.moveRight = function (t) {
      er(t, "xIncrease", ["number"]);
      this.x += t;
    };
    t.prototype.pushOperators = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      en(t, "operator", [[re, "PDFOperator"]]);
      var r = this.getContentStream();
      r.push.apply(r, t);
    };
    t.prototype.drawText = function (t, e = {}) {
      er(t, "text", ["string"]);
      ei(e.color, "options.color", [[Object, "Color"]]);
      es(e.opacity, "opacity.opacity", 0, 1);
      ei(e.font, "options.font", [[oQ, "PDFFont"]]);
      ei(e.size, "options.size", ["number"]);
      ei(e.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(e.xSkew, "options.xSkew", [[Object, "Rotation"]]);
      ei(e.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      ei(e.x, "options.x", ["number"]);
      ei(e.y, "options.y", ["number"]);
      ei(e.lineHeight, "options.lineHeight", ["number"]);
      ei(e.maxWidth, "options.maxWidth", ["number"]);
      ei(e.wordBreaks, "options.wordBreaks", [Array]);
      t8(e.blendMode, "options.blendMode", P);
      var h = this.setOrEmbedFont(e.font);
      var c = h.oldFont;
      var u = h.newFont;
      var d = h.newFontKey;
      var f = e.size || this.fontSize;
      var p = e.wordBreaks || this.doc.defaultWordBreaks;
      function g(t) {
        return u.widthOfTextAtSize(t, f);
      }
      var m = e.maxWidth === undefined ? Y(K(t)) : te(t, p, e.maxWidth, g);
      var v = Array(m.length);
      var y = 0;
      var b = m.length;
      for (; y < b; y++) {
        v[y] = u.encodeText(m[y]);
      }
      var A = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        blendMode: e.blendMode
      });
      var S = this.getContentStream();
      S.push.apply(S, ot(v, {
        color: e.color ?? this.fontColor,
        font: d,
        size: f,
        rotate: e.rotate ?? iQ(0),
        xSkew: e.xSkew ?? iQ(0),
        ySkew: e.ySkew ?? iQ(0),
        x: e.x ?? this.x,
        y: e.y ?? this.y,
        lineHeight: e.lineHeight ?? this.lineHeight,
        graphicsState: A
      }));
      if (e.font) {
        if (c) {
          this.setFont(c);
        } else {
          this.resetFont();
        }
      }
    };
    t.prototype.drawImage = function (t, e = {}) {
      er(t, "image", [[o$, "PDFImage"]]);
      ei(e.x, "options.x", ["number"]);
      ei(e.y, "options.y", ["number"]);
      ei(e.width, "options.width", ["number"]);
      ei(e.height, "options.height", ["number"]);
      ei(e.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(e.xSkew, "options.xSkew", [[Object, "Rotation"]]);
      ei(e.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      es(e.opacity, "opacity.opacity", 0, 1);
      t8(e.blendMode, "options.blendMode", P);
      var h = this.node.newXObject("Image", t.ref);
      var c = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        blendMode: e.blendMode
      });
      var u = this.getContentStream();
      u.push.apply(u, oe(h, {
        x: e.x ?? this.x,
        y: e.y ?? this.y,
        width: e.width ?? t.size().width,
        height: e.height ?? t.size().height,
        rotate: e.rotate ?? iQ(0),
        xSkew: e.xSkew ?? iQ(0),
        ySkew: e.ySkew ?? iQ(0),
        graphicsState: c
      }));
    };
    t.prototype.drawPage = function (t, e = {}) {
      er(t, "embeddedPage", [[oJ, "PDFEmbeddedPage"]]);
      ei(e.x, "options.x", ["number"]);
      ei(e.y, "options.y", ["number"]);
      ei(e.xScale, "options.xScale", ["number"]);
      ei(e.yScale, "options.yScale", ["number"]);
      ei(e.width, "options.width", ["number"]);
      ei(e.height, "options.height", ["number"]);
      ei(e.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(e.xSkew, "options.xSkew", [[Object, "Rotation"]]);
      ei(e.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      es(e.opacity, "opacity.opacity", 0, 1);
      t8(e.blendMode, "options.blendMode", P);
      var a = this.node.newXObject("EmbeddedPdfPage", t.ref);
      var l = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        blendMode: e.blendMode
      });
      var h = e.width !== undefined ? e.width / t.width : e.xScale !== undefined ? e.xScale : 1;
      var c = e.height !== undefined ? e.height / t.height : e.yScale !== undefined ? e.yScale : 1;
      var u = this.getContentStream();
      u.push.apply(u, or(a, {
        x: e.x ?? this.x,
        y: e.y ?? this.y,
        xScale: h,
        yScale: c,
        rotate: e.rotate ?? iQ(0),
        xSkew: e.xSkew ?? iQ(0),
        ySkew: e.ySkew ?? iQ(0),
        graphicsState: l
      }));
    };
    t.prototype.drawSvgPath = function (t, e = {}) {
      er(t, "path", ["string"]);
      ei(e.x, "options.x", ["number"]);
      ei(e.y, "options.y", ["number"]);
      ei(e.scale, "options.scale", ["number"]);
      ei(e.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(e.borderWidth, "options.borderWidth", ["number"]);
      ei(e.color, "options.color", [[Object, "Color"]]);
      es(e.opacity, "opacity.opacity", 0, 1);
      ei(e.borderColor, "options.borderColor", [[Object, "Color"]]);
      ei(e.borderDashArray, "options.borderDashArray", [Array]);
      ei(e.borderDashPhase, "options.borderDashPhase", ["number"]);
      t8(e.borderLineCap, "options.borderLineCap", S);
      es(e.borderOpacity, "options.borderOpacity", 0, 1);
      t8(e.blendMode, "options.blendMode", P);
      var u = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        borderOpacity: e.borderOpacity,
        blendMode: e.blendMode
      });
      if (!("color" in e) && !("borderColor" in e)) {
        e.borderColor = nz(0, 0, 0);
      }
      var d = this.getContentStream();
      d.push.apply(d, oh(t, {
        x: e.x ?? this.x,
        y: e.y ?? this.y,
        scale: e.scale,
        rotate: e.rotate ?? iQ(0),
        color: e.color ?? undefined,
        borderColor: e.borderColor ?? undefined,
        borderWidth: e.borderWidth ?? 0,
        borderDashArray: e.borderDashArray ?? undefined,
        borderDashPhase: e.borderDashPhase ?? undefined,
        borderLineCap: e.borderLineCap ?? undefined,
        graphicsState: u
      }));
    };
    t.prototype.drawLine = function (t) {
      er(t.start, "options.start", [[Object, "{ x: number, y: number }"]]);
      er(t.end, "options.end", [[Object, "{ x: number, y: number }"]]);
      er(t.start.x, "options.start.x", ["number"]);
      er(t.start.y, "options.start.y", ["number"]);
      er(t.end.x, "options.end.x", ["number"]);
      er(t.end.y, "options.end.y", ["number"]);
      ei(t.thickness, "options.thickness", ["number"]);
      ei(t.color, "options.color", [[Object, "Color"]]);
      ei(t.dashArray, "options.dashArray", [Array]);
      ei(t.dashPhase, "options.dashPhase", ["number"]);
      t8(t.lineCap, "options.lineCap", S);
      es(t.opacity, "opacity.opacity", 0, 1);
      t8(t.blendMode, "options.blendMode", P);
      var s = this.maybeEmbedGraphicsState({
        borderOpacity: t.opacity,
        blendMode: t.blendMode
      });
      if (!("color" in t)) {
        t.color = nz(0, 0, 0);
      }
      var a = this.getContentStream();
      a.push.apply(a, oi({
        start: t.start,
        end: t.end,
        thickness: t.thickness ?? 1,
        color: t.color ?? undefined,
        dashArray: t.dashArray ?? undefined,
        dashPhase: t.dashPhase ?? undefined,
        lineCap: t.lineCap ?? undefined,
        graphicsState: s
      }));
    };
    t.prototype.drawRectangle = function (t = {}) {
      ei(t.x, "options.x", ["number"]);
      ei(t.y, "options.y", ["number"]);
      ei(t.width, "options.width", ["number"]);
      ei(t.height, "options.height", ["number"]);
      ei(t.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(t.xSkew, "options.xSkew", [[Object, "Rotation"]]);
      ei(t.ySkew, "options.ySkew", [[Object, "Rotation"]]);
      ei(t.borderWidth, "options.borderWidth", ["number"]);
      ei(t.color, "options.color", [[Object, "Color"]]);
      es(t.opacity, "opacity.opacity", 0, 1);
      ei(t.borderColor, "options.borderColor", [[Object, "Color"]]);
      ei(t.borderDashArray, "options.borderDashArray", [Array]);
      ei(t.borderDashPhase, "options.borderDashPhase", ["number"]);
      t8(t.borderLineCap, "options.borderLineCap", S);
      es(t.borderOpacity, "options.borderOpacity", 0, 1);
      t8(t.blendMode, "options.blendMode", P);
      var p = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        borderOpacity: t.borderOpacity,
        blendMode: t.blendMode
      });
      if (!("color" in t) && !("borderColor" in t)) {
        t.color = nz(0, 0, 0);
      }
      var g = this.getContentStream();
      g.push.apply(g, on({
        x: t.x ?? this.x,
        y: t.y ?? this.y,
        width: t.width ?? 150,
        height: t.height ?? 100,
        rotate: t.rotate ?? iQ(0),
        xSkew: t.xSkew ?? iQ(0),
        ySkew: t.ySkew ?? iQ(0),
        borderWidth: t.borderWidth ?? 0,
        color: t.color ?? undefined,
        borderColor: t.borderColor ?? undefined,
        borderDashArray: t.borderDashArray ?? undefined,
        borderDashPhase: t.borderDashPhase ?? undefined,
        graphicsState: p,
        borderLineCap: t.borderLineCap ?? undefined
      }));
    };
    t.prototype.drawSquare = function (t = {}) {
      var e = t.size;
      ei(e, "size", ["number"]);
      this.drawRectangle(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
        width: e,
        height: e
      }));
    };
    t.prototype.drawEllipse = function (t = {}) {
      ei(t.x, "options.x", ["number"]);
      ei(t.y, "options.y", ["number"]);
      ei(t.xScale, "options.xScale", ["number"]);
      ei(t.yScale, "options.yScale", ["number"]);
      ei(t.rotate, "options.rotate", [[Object, "Rotation"]]);
      ei(t.color, "options.color", [[Object, "Color"]]);
      es(t.opacity, "opacity.opacity", 0, 1);
      ei(t.borderColor, "options.borderColor", [[Object, "Color"]]);
      es(t.borderOpacity, "options.borderOpacity", 0, 1);
      ei(t.borderWidth, "options.borderWidth", ["number"]);
      ei(t.borderDashArray, "options.borderDashArray", [Array]);
      ei(t.borderDashPhase, "options.borderDashPhase", ["number"]);
      t8(t.borderLineCap, "options.borderLineCap", S);
      t8(t.blendMode, "options.blendMode", P);
      var d = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        borderOpacity: t.borderOpacity,
        blendMode: t.blendMode
      });
      if (!("color" in t) && !("borderColor" in t)) {
        t.color = nz(0, 0, 0);
      }
      var f = this.getContentStream();
      f.push.apply(f, ol({
        x: t.x ?? this.x,
        y: t.y ?? this.y,
        xScale: t.xScale ?? 100,
        yScale: t.yScale ?? 100,
        rotate: t.rotate ?? undefined,
        color: t.color ?? undefined,
        borderColor: t.borderColor ?? undefined,
        borderWidth: t.borderWidth ?? 0,
        borderDashArray: t.borderDashArray ?? undefined,
        borderDashPhase: t.borderDashPhase ?? undefined,
        borderLineCap: t.borderLineCap ?? undefined,
        graphicsState: d
      }));
    };
    t.prototype.drawCircle = function (t = {}) {
      var e = t.size;
      var r = e === undefined ? 100 : e;
      ei(r, "size", ["number"]);
      this.drawEllipse(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
        xScale: r,
        yScale: r
      }));
    };
    t.prototype.setOrEmbedFont = function (t) {
      var e = this.font;
      var r = this.fontKey;
      if (t) {
        this.setFont(t);
      } else {
        this.getFont();
      }
      return {
        oldFont: e,
        oldFontKey: r,
        newFont: this.font,
        newFontKey: this.fontKey
      };
    };
    t.prototype.getFont = function () {
      if (!this.font || !this.fontKey) {
        var t = this.doc.embedStandardFont(F.Helvetica);
        this.setFont(t);
      }
      return [this.font, this.fontKey];
    };
    t.prototype.resetFont = function () {
      this.font = undefined;
      this.fontKey = undefined;
    };
    t.prototype.getContentStream = function (t = true) {
      if (!t || !this.contentStream) {
        this.contentStream = this.createContentStream();
        this.contentStreamRef = this.doc.context.register(this.contentStream);
        this.node.addContentStream(this.contentStreamRef);
      }
      return this.contentStream;
    };
    t.prototype.createContentStream = function () {
      var t = [];
      var e = 0;
      for (; e < arguments.length; e++) {
        t[e] = arguments[e];
      }
      var r = this.doc.context.obj({});
      return rn.of(r, t);
    };
    t.prototype.maybeEmbedGraphicsState = function (t) {
      var e = t.opacity;
      var r = t.borderOpacity;
      var i = t.blendMode;
      if (e !== undefined || r !== undefined || i !== undefined) {
        var n = this.doc.context.obj({
          Type: "ExtGState",
          ca: e,
          CA: r,
          BM: i
        });
        return this.node.newExtGState("GS", n);
      }
    };
    t.prototype.scaleAnnot = function (t, e, r) {
      var i = ["RD", "CL", "Vertices", "QuadPoints", "L", "Rect"];
      var n = 0;
      var o = i.length;
      for (; n < o; n++) {
        var s = t.lookup(e5.of(i[n]));
        if (s instanceof eq) {
          s.scalePDFNumbers(e, r);
        }
      }
      var a = t.lookup(e5.of("InkList"));
      if (a instanceof eq) {
        var n = 0;
        var o = a.size();
        for (; n < o; n++) {
          var l = a.lookup(n);
          if (l instanceof eq) {
            l.scalePDFNumbers(e, r);
          }
        }
      }
    };
    t.of = function (e, r, i) {
      return new t(e, r, i);
    };
    t.create = function (e) {
      er(e, "doc", [[ss, "PDFDocument"]]);
      var r = rt.of(-1);
      var i = rl.withContextAndParent(e.context, r);
      var n = e.context.register(i);
      return new t(i, n, e);
    };
    return t;
  }();
  var sh = function (t) {
    function e(e, r, i) {
      var n = t.call(this, e, r, i) || this;
      er(e, "acroButton", [[ip, "PDFAcroPushButton"]]);
      n.acroField = e;
      return n;
    }
    typescriptRuntimeHelpers.classExtends(e, t);
    e.prototype.setImage = function (t, e = E.Center) {
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        var s = this.createImageAppearanceStream(o, t, e);
        this.updateWidgetAppearances(o, {
          normal: s
        });
      }
      this.markAsClean();
    };
    e.prototype.setFontSize = function (t) {
      eh(t, "fontSize");
      this.acroField.setFontSize(t);
      this.markAsDirty();
    };
    e.prototype.addToPage = function (t, e, r) {
      ei(t, "text", ["string"]);
      ei(e, "page", [[sl, "PDFPage"]]);
      o0(r);
      var p = this.createWidget({
        x: ((r == null ? undefined : r.x) ?? 0) - ((r == null ? undefined : r.borderWidth) ?? 0) / 2,
        y: ((r == null ? undefined : r.y) ?? 0) - ((r == null ? undefined : r.borderWidth) ?? 0) / 2,
        width: (r == null ? undefined : r.width) ?? 100,
        height: (r == null ? undefined : r.height) ?? 50,
        textColor: (r == null ? undefined : r.textColor) ?? nz(0, 0, 0),
        backgroundColor: (r == null ? undefined : r.backgroundColor) ?? nz(0.75, 0.75, 0.75),
        borderColor: r == null ? undefined : r.borderColor,
        borderWidth: (r == null ? undefined : r.borderWidth) ?? 0,
        rotate: (r == null ? undefined : r.rotate) ?? iQ(0),
        caption: t,
        hidden: r == null ? undefined : r.hidden,
        page: e.ref
      });
      var g = this.doc.context.register(p.dict);
      this.acroField.addWidget(g);
      var m = (r == null ? undefined : r.font) ?? this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(p, m);
      e.node.addAnnot(g);
    };
    e.prototype.needsAppearancesUpdate = function () {
      if (this.isDirty()) {
        return true;
      }
      var e = this.acroField.getWidgets();
      var r = 0;
      var i = e.length;
      for (; r < i; r++) {
        if (!(e[r].getAppearances()?.normal instanceof e6)) {
          return true;
        }
      }
      return false;
    };
    e.prototype.defaultUpdateAppearances = function (t) {
      er(t, "font", [[oQ, "PDFFont"]]);
      this.updateAppearances(t);
    };
    e.prototype.updateAppearances = function (t, e) {
      er(t, "font", [[oQ, "PDFFont"]]);
      ei(e, "provider", [Function]);
      var r = this.acroField.getWidgets();
      var i = 0;
      var n = r.length;
      for (; i < n; i++) {
        var o = r[i];
        this.updateWidgetAppearance(o, t, e);
      }
    };
    e.prototype.updateWidgetAppearance = function (t, e, r) {
      var i = o_((r ?? oK)(this, t, e));
      this.updateWidgetAppearanceWithFont(t, e, i);
    };
    e.of = function (t, r, i) {
      return new e(t, r, i);
    };
    return e;
  }(o1);
  require.d(exports, {
    PDFDocument: function () {
      return ss;
    }
  });
}