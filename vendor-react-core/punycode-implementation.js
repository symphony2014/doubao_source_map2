// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 944717
         */
module.exports = function (module, exports, require) {
  let n = /^xn--/;
  let i = /[^\0-\x7E]/;
  let o = /[\x2E\u3002\uFF0E\uFF61]/g;
  let s = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  let a = Math.floor;
  let c = String.fromCharCode;
  function l(t) {
    throw RangeError(s[t]);
  }
  function u(t, e) {
    let r = t.split("@");
    let n = "";
    if (r.length > 1) {
      n = r[0] + "@";
      t = r[1];
    }
    return n + function (t, e) {
      let r = [];
      let n = t.length;
      while (n--) {
        r[n] = e(t[n]);
      }
      return r;
    }((t = t.replace(o, ".")).split("."), e).join(".");
  }
  function h(t) {
    let e = [];
    let r = 0;
    let n = t.length;
    while (r < n) {
      let i = t.charCodeAt(r++);
      if (i >= 55296 && i <= 56319 && r < n) {
        let n = t.charCodeAt(r++);
        if ((n & 64512) == 56320) {
          e.push(((i & 1023) << 10) + (n & 1023) + 65536);
        } else {
          e.push(i);
          r--;
        }
      } else {
        e.push(i);
      }
    }
    return e;
  }
  let p = t => String.fromCodePoint(...t);
  let f = function (t, e) {
    return t + 22 + (t < 26) * 75 - ((e != 0) << 5);
  };
  let d = function (t, e, r) {
    let n = 0;
    t = r ? a(t / 700) : t >> 1;
    t += a(t / e);
    for (; t > 455; n += 36) {
      t = a(t / 35);
    }
    return a(n + t * 36 / (t + 38));
  };
  let g = function (t) {
    let e = [];
    let r = t.length;
    let n = 0;
    let i = 128;
    let o = 72;
    let s = t.lastIndexOf("-");
    if (s < 0) {
      s = 0;
    }
    for (let r = 0; r < s; ++r) {
      if (t.charCodeAt(r) >= 128) {
        l("not-basic");
      }
      e.push(t.charCodeAt(r));
    }
    for (let u = s > 0 ? s + 1 : 0; u < r;) {
      let s = n;
      let e = 1;
      for (let i = 36;; i += 36) {
        var c;
        if (u >= r) {
          l("invalid-input");
        }
        let s = (c = t.charCodeAt(u++)) - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : 36;
        if (s >= 36 || s > a((2147483647 - n) / e)) {
          l("overflow");
        }
        n += s * e;
        let h = i <= o ? 1 : i >= o + 26 ? 26 : i - o;
        if (s < h) {
          break;
        }
        let p = 36 - h;
        if (e > a(2147483647 / p)) {
          l("overflow");
        }
        e *= p;
      }
      let h = e.length + 1;
      o = d(n - s, h, s == 0);
      if (a(n / h) > 2147483647 - i) {
        l("overflow");
      }
      i += a(n / h);
      n %= h;
      e.splice(n++, 0, i);
    }
    return String.fromCodePoint(...e);
  };
  let m = function (t) {
    let e = [];
    let r = (t = h(t)).length;
    let n = 128;
    let i = 0;
    let o = 72;
    for (let r of t) {
      if (r < 128) {
        e.push(c(r));
      }
    }
    let s = e.length;
    let u = s;
    for (s && e.push("-"); u < r;) {
      let r = 2147483647;
      for (let e of t) {
        if (e >= n && e < r) {
          r = e;
        }
      }
      let h = u + 1;
      if (r - n > a((2147483647 - i) / h)) {
        l("overflow");
      }
      i += (r - n) * h;
      n = r;
      for (let p of t) {
        if (p < n && ++i > 2147483647) {
          l("overflow");
        }
        if (p == n) {
          let t = i;
          for (let r = 36;; r += 36) {
            let n = r <= o ? 1 : r >= o + 26 ? 26 : r - o;
            if (t < n) {
              break;
            }
            let i = t - n;
            let s = 36 - n;
            e.push(c(f(n + i % s, 0)));
            t = a(i / s);
          }
          e.push(c(f(t, 0)));
          o = d(i, h, u == s);
          i = 0;
          ++u;
        }
      }
      ++i;
      ++n;
    }
    return e.join("");
  };
  let _ = function (t) {
    return u(t, function (t) {
      if (n.test(t)) {
        return g(t.slice(4).toLowerCase());
      } else {
        return t;
      }
    });
  };
  let v = function (t) {
    return u(t, function (t) {
      if (i.test(t)) {
        return "xn--" + m(t);
      } else {
        return t;
      }
    });
  };
  exports.default = {
    version: "2.1.0",
    ucs2: {
      decode: h,
      encode: p
    },
    decode: g,
    encode: m,
    toASCII: v,
    toUnicode: _
  };
  require.r(exports);
  require.d(exports, {
    decode: function () {
      return g;
    },
    encode: function () {
      return m;
    },
    toASCII: function () {
      return v;
    },
    toUnicode: function () {
      return _;
    },
    ucs2decode: function () {
      return h;
    },
    ucs2encode: function () {
      return p;
    }
  });
}