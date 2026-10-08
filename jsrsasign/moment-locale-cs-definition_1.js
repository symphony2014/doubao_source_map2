// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(989572) to 'buffer-polyfill-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: jsrsasign.5e1d8cf7.js
         * chunkId: 80443
         * moduleId: 181683
         */
module.exports = function (module, exports, require) {
  var i;
  var s;
  var n;
  var a;
  var o;
  var h;
  var u;
  var c;
  var l;
  var f;
  var d;
  var p;
  var g = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  var v = {
    userAgent: false
  };
  var x = {};
  var m = m || (M = Math, z = (G = (U = {}).lib = {}).Base = function () {
    function t() {}
    return {
      extend: function (e) {
        t.prototype = this;
        var r = new t();
        if (e) {
          r.mixIn(e);
        }
        if (!r.hasOwnProperty("init")) {
          r.init = function () {
            r.$super.init.apply(this, arguments);
          };
        }
        r.init.prototype = r;
        r.$super = this;
        return r;
      },
      create: function () {
        var t = this.extend();
        t.init.apply(t, arguments);
        return t;
      },
      init: function () {},
      mixIn: function (t) {
        for (var e in t) {
          if (t.hasOwnProperty(e)) {
            this[e] = t[e];
          }
        }
        if (t.hasOwnProperty("toString")) {
          this.toString = t.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
  }(), W = G.WordArray = z.extend({
    init: function (t, e) {
      t = this.words = t || [];
      if (e != _) {
        this.sigBytes = e;
      } else {
        this.sigBytes = t.length * 4;
      }
    },
    toString: function (t) {
      return (t || X).stringify(this);
    },
    concat: function (t) {
      var e = this.words;
      var r = t.words;
      var i = this.sigBytes;
      var s = t.sigBytes;
      this.clamp();
      if (i % 4) {
        for (var n = 0; n < s; n++) {
          var a = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
          e[i + n >>> 2] |= a << 24 - (i + n) % 4 * 8;
        }
      } else {
        for (var n = 0; n < s; n += 4) {
          e[i + n >>> 2] = r[n >>> 2];
        }
      }
      this.sigBytes += s;
      return this;
    },
    clamp: function () {
      var t = this.words;
      var e = this.sigBytes;
      t[e >>> 2] &= -1 << 32 - e % 4 * 8;
      t.length = M.ceil(e / 4);
    },
    clone: function () {
      var t = z.clone.call(this);
      t.words = this.words.slice(0);
      return t;
    },
    random: function (t) {
      var e = [];
      var r = 0;
      for (; r < t; r += 4) {
        e.push(M.random() * 4294967296 | 0);
      }
      return new W.init(e, t);
    }
  }), X = (J = U.enc = {}).Hex = {
    stringify: function (t) {
      var e = t.words;
      var r = t.sigBytes;
      var i = [];
      var s = 0;
      for (; s < r; s++) {
        var n = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
        i.push((n >>> 4).toString(16));
        i.push((n & 15).toString(16));
      }
      return i.join("");
    },
    parse: function (t) {
      var e = t.length;
      var r = [];
      var i = 0;
      for (; i < e; i += 2) {
        r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
      }
      return new W.init(r, e / 2);
    }
  }, $ = J.Latin1 = {
    stringify: function (t) {
      var e = t.words;
      var r = t.sigBytes;
      var i = [];
      var s = 0;
      for (; s < r; s++) {
        var n = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
        i.push(String.fromCharCode(n));
      }
      return i.join("");
    },
    parse: function (t) {
      var e = t.length;
      var r = [];
      var i = 0;
      for (; i < e; i++) {
        r[i >>> 2] |= (t.charCodeAt(i) & 255) << 24 - i % 4 * 8;
      }
      return new W.init(r, e);
    }
  }, Y = J.Utf8 = {
    stringify: function (t) {
      try {
        return decodeURIComponent(escape($.stringify(t)));
      } catch (t) {
        throw Error("Malformed UTF-8 data");
      }
    },
    parse: function (t) {
      return $.parse(unescape(encodeURIComponent(t)));
    }
  }, Z = G.BufferedBlockAlgorithm = z.extend({
    reset: function () {
      this._data = new W.init();
      this._nDataBytes = 0;
    },
    _append: function (t) {
      if (typeof t == "string") {
        t = Y.parse(t);
      }
      this._data.concat(t);
      this._nDataBytes += t.sigBytes;
    },
    _process: function (t) {
      var e = this._data;
      var r = e.words;
      var i = e.sigBytes;
      var s = this.blockSize;
      var n = i / (s * 4);
      var a = (n = t ? M.ceil(n) : M.max((n | 0) - this._minBufferSize, 0)) * s;
      var o = M.min(a * 4, i);
      if (a) {
        for (var h = 0; h < a; h += s) {
          this._doProcessBlock(r, h);
        }
        var u = r.splice(0, a);
        e.sigBytes -= o;
      }
      return new W.init(u, o);
    },
    clone: function () {
      var t = z.clone.call(this);
      t._data = this._data.clone();
      return t;
    },
    _minBufferSize: 0
  }), G.Hasher = Z.extend({
    cfg: z.extend(),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
      this.reset();
    },
    reset: function () {
      Z.reset.call(this);
      this._doReset();
    },
    update: function (t) {
      this._append(t);
      this._process();
      return this;
    },
    finalize: function (t) {
      if (t) {
        this._append(t);
      }
      return this._doFinalize();
    },
    blockSize: 16,
    _createHelper: function (t) {
      return function (e, r) {
        return new t.init(r).finalize(e);
      };
    },
    _createHmacHelper: function (t) {
      return function (e, r) {
        return new Q.HMAC.init(t, r).finalize(e);
      };
    }
  }), Q = U.algo = {}, U);
  te = (tt = (ti = m).lib).Base;
  tr = tt.WordArray;
  (ti = ti.x64 = {}).Word = te.extend({
    init: function (t, e) {
      this.high = t;
      this.low = e;
    }
  });
  ti.WordArray = te.extend({
    init: function (t, e) {
      t = this.words = t || [];
      this.sigBytes = e != undefined ? e : t.length * 8;
    },
    toX32: function () {
      var t = this.words;
      var e = t.length;
      var r = [];
      var i = 0;
      for (; i < e; i++) {
        var s = t[i];
        r.push(s.high);
        r.push(s.low);
      }
      return tr.create(r, this.sigBytes);
    },
    clone: function () {
      var t = te.clone.call(this);
      var e = t.words = this.words.slice(0);
      var r = e.length;
      var i = 0;
      for (; i < r; i++) {
        e[i] = e[i].clone();
      }
      return t;
    }
  });
  if (!m.lib.Cipher) {
    tn = (ts = (tv = m).lib).Base;
    ta = ts.WordArray;
    to = ts.BufferedBlockAlgorithm;
    th = tv.enc.Base64;
    tu = tv.algo.EvpKDF;
    tc = ts.Cipher = to.extend({
      cfg: tn.extend(),
      createEncryptor: function (t, e) {
        return this.create(this._ENC_XFORM_MODE, t, e);
      },
      createDecryptor: function (t, e) {
        return this.create(this._DEC_XFORM_MODE, t, e);
      },
      init: function (t, e, r) {
        this.cfg = this.cfg.extend(r);
        this._xformMode = t;
        this._key = e;
        this.reset();
      },
      reset: function () {
        to.reset.call(this);
        this._doReset();
      },
      process: function (t) {
        this._append(t);
        return this._process();
      },
      finalize: function (t) {
        if (t) {
          this._append(t);
        }
        return this._doFinalize();
      },
      keySize: 4,
      ivSize: 4,
      _ENC_XFORM_MODE: 1,
      _DEC_XFORM_MODE: 2,
      _createHelper: function (t) {
        return {
          encrypt: function (e, r, i) {
            return (typeof r == "string" ? tx : tg).encrypt(t, e, r, i);
          },
          decrypt: function (e, r, i) {
            return (typeof r == "string" ? tx : tg).decrypt(t, e, r, i);
          }
        };
      }
    });
    ts.StreamCipher = tc.extend({
      _doFinalize: function () {
        return this._process(true);
      },
      blockSize: 1
    });
    tp = tv.mode = {};
    tl = function (t, e, r) {
      var i = this._iv;
      if (i) {
        this._iv = undefined;
      } else {
        i = this._prevBlock;
      }
      for (var s = 0; s < r; s++) {
        t[e + s] ^= i[s];
      }
    };
    (tf = (ts.BlockCipherMode = tn.extend({
      createEncryptor: function (t, e) {
        return this.Encryptor.create(t, e);
      },
      createDecryptor: function (t, e) {
        return this.Decryptor.create(t, e);
      },
      init: function (t, e) {
        this._cipher = t;
        this._iv = e;
      }
    })).extend()).Encryptor = tf.extend({
      processBlock: function (t, e) {
        var r = this._cipher;
        var i = r.blockSize;
        tl.call(this, t, e, i);
        r.encryptBlock(t, e);
        this._prevBlock = t.slice(e, e + i);
      }
    });
    tf.Decryptor = tf.extend({
      processBlock: function (t, e) {
        var r = this._cipher;
        var i = r.blockSize;
        var s = t.slice(e, e + i);
        r.decryptBlock(t, e);
        tl.call(this, t, e, i);
        this._prevBlock = s;
      }
    });
    tp = tp.CBC = tf;
    tf = (tv.pad = {}).Pkcs7 = {
      pad: function (t, e) {
        var r = e * 4;
        var r = r - t.sigBytes % r;
        var i = r << 24 | r << 16 | r << 8 | r;
        var s = [];
        var n = 0;
        for (; n < r; n += 4) {
          s.push(i);
        }
        r = ta.create(s, r);
        t.concat(r);
      },
      unpad: function (t) {
        t.sigBytes -= t.words[t.sigBytes - 1 >>> 2] & 255;
      }
    };
    ts.BlockCipher = tc.extend({
      cfg: tc.cfg.extend({
        mode: tp,
        padding: tf
      }),
      reset: function () {
        tc.reset.call(this);
        var t = this.cfg;
        var e = t.iv;
        var t = t.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          var r = t.createEncryptor;
        } else {
          r = t.createDecryptor;
          this._minBufferSize = 1;
        }
        this._mode = r.call(t, this, e && e.words);
      },
      _doProcessBlock: function (t, e) {
        this._mode.processBlock(t, e);
      },
      _doFinalize: function () {
        var t = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          t.pad(this._data, this.blockSize);
          var e = this._process(true);
        } else {
          e = this._process(true);
          t.unpad(e);
        }
        return e;
      },
      blockSize: 4
    });
    td = ts.CipherParams = tn.extend({
      init: function (t) {
        this.mixIn(t);
      },
      toString: function (t) {
        return (t || this.formatter).stringify(this);
      }
    });
    tp = (tv.format = {}).OpenSSL = {
      stringify: function (t) {
        var e = t.ciphertext;
        return ((t = t.salt) ? ta.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(th);
      },
      parse: function (t) {
        var e = (t = th.parse(t)).words;
        if (e[0] == 1398893684 && e[1] == 1701076831) {
          var r = ta.create(e.slice(2, 4));
          e.splice(0, 4);
          t.sigBytes -= 16;
        }
        return td.create({
          ciphertext: t,
          salt: r
        });
      }
    };
    tg = ts.SerializableCipher = tn.extend({
      cfg: tn.extend({
        format: tp
      }),
      encrypt: function (t, e, r, i) {
        i = this.cfg.extend(i);
        var s = t.createEncryptor(r, i);
        e = s.finalize(e);
        s = s.cfg;
        return td.create({
          ciphertext: e,
          key: r,
          iv: s.iv,
          algorithm: t,
          mode: s.mode,
          padding: s.padding,
          blockSize: t.blockSize,
          formatter: i.format
        });
      },
      decrypt: function (t, e, r, i) {
        i = this.cfg.extend(i);
        e = this._parse(e, i.format);
        return t.createDecryptor(r, i).finalize(e.ciphertext);
      },
      _parse: function (t, e) {
        if (typeof t == "string") {
          return e.parse(t, this);
        } else {
          return t;
        }
      }
    });
    tv = (tv.kdf = {}).OpenSSL = {
      execute: function (t, e, r, i) {
        i ||= ta.random(8);
        t = tu.create({
          keySize: e + r
        }).compute(t, i);
        r = ta.create(t.words.slice(e), r * 4);
        t.sigBytes = e * 4;
        return td.create({
          key: t,
          iv: r,
          salt: i
        });
      }
    };
    tx = ts.PasswordBasedCipher = tg.extend({
      cfg: tg.cfg.extend({
        kdf: tv
      }),
      encrypt: function (t, e, r, i) {
        r = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize);
        i.iv = r.iv;
        (t = tg.encrypt.call(this, t, e, r.key, i)).mixIn(r);
        return t;
      },
      decrypt: function (t, e, r, i) {
        i = this.cfg.extend(i);
        e = this._parse(e, i.format);
        r = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);
        i.iv = r.iv;
        return tg.decrypt.call(this, t, e, r.key, i);
      }
    });
  }
  (function () {
    var t = m.lib.BlockCipher;
    var e = m.algo;
    var r = [];
    var i = [];
    var s = [];
    var n = [];
    var a = [];
    var o = [];
    var h = [];
    var u = [];
    var c = [];
    var l = [];
    var f = [];
    var d = 0;
    for (; d < 256; d++) {
      f[d] = d < 128 ? d << 1 : d << 1 ^ 283;
    }
    var p = 0;
    var g = 0;
    var d = 0;
    for (; d < 256; d++) {
      var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
      var v = v >>> 8 ^ v & 255 ^ 99;
      r[p] = v;
      i[v] = p;
      var x = f[p];
      var y = f[x];
      var S = f[y];
      var E = f[v] * 257 ^ v * 16843008;
      s[p] = E << 24 | E >>> 8;
      n[p] = E << 16 | E >>> 16;
      a[p] = E << 8 | E >>> 24;
      o[p] = E;
      E = S * 16843009 ^ y * 65537 ^ x * 257 ^ p * 16843008;
      h[v] = E << 24 | E >>> 8;
      u[v] = E << 16 | E >>> 16;
      c[v] = E << 8 | E >>> 24;
      l[v] = E;
      if (p) {
        p = x ^ f[f[f[S ^ x]]];
        g ^= f[f[g]];
      } else {
        p = g = 1;
      }
    }
    var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var e = e.AES = t.extend({
      _doReset: function () {
        var t = this._key;
        var e = t.words;
        var i = t.sigBytes / 4;
        var t = ((this._nRounds = i + 6) + 1) * 4;
        var s = this._keySchedule = [];
        var n = 0;
        for (; n < t; n++) {
          if (n < i) {
            s[n] = e[n];
          } else {
            var a = s[n - 1];
            if (n % i) {
              if (i > 6 && n % i == 4) {
                a = r[a >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[a & 255];
              }
            } else {
              a = (r[(a = a << 8 | a >>> 24) >>> 24] << 24 | r[a >>> 16 & 255] << 16 | r[a >>> 8 & 255] << 8 | r[a & 255]) ^ b[n / i | 0] << 24;
            }
            s[n] = s[n - i] ^ a;
          }
        }
        i = 0;
        e = this._invKeySchedule = [];
        for (; i < t; i++) {
          n = t - i;
          a = i % 4 ? s[n] : s[n - 4];
          e[i] = i < 4 || n <= 4 ? a : h[r[a >>> 24]] ^ u[r[a >>> 16 & 255]] ^ c[r[a >>> 8 & 255]] ^ l[r[a & 255]];
        }
      },
      encryptBlock: function (t, e) {
        this._doCryptBlock(t, e, this._keySchedule, s, n, a, o, r);
      },
      decryptBlock: function (t, e) {
        var r = t[e + 1];
        t[e + 1] = t[e + 3];
        t[e + 3] = r;
        this._doCryptBlock(t, e, this._invKeySchedule, h, u, c, l, i);
        r = t[e + 1];
        t[e + 1] = t[e + 3];
        t[e + 3] = r;
      },
      _doCryptBlock: function (t, e, r, i, s, n, a, o) {
        var h = this._nRounds;
        var u = t[e] ^ r[0];
        var c = t[e + 1] ^ r[1];
        var l = t[e + 2] ^ r[2];
        var f = t[e + 3] ^ r[3];
        var d = 4;
        var p = 1;
        for (; p < h; p++) {
          var g = i[u >>> 24] ^ s[c >>> 16 & 255] ^ n[l >>> 8 & 255] ^ a[f & 255] ^ r[d++];
          var v = i[c >>> 24] ^ s[l >>> 16 & 255] ^ n[f >>> 8 & 255] ^ a[u & 255] ^ r[d++];
          var x = i[l >>> 24] ^ s[f >>> 16 & 255] ^ n[u >>> 8 & 255] ^ a[c & 255] ^ r[d++];
          var f = i[f >>> 24] ^ s[u >>> 16 & 255] ^ n[c >>> 8 & 255] ^ a[l & 255] ^ r[d++];
          var u = g;
          var c = v;
          var l = x;
        }
        g = (o[u >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[f & 255]) ^ r[d++];
        v = (o[c >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[u & 255]) ^ r[d++];
        x = (o[l >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[c & 255]) ^ r[d++];
        f = (o[f >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[l & 255]) ^ r[d++];
        t[e] = g;
        t[e + 1] = v;
        t[e + 2] = x;
        t[e + 3] = f;
      },
      keySize: 8
    });
    m.AES = t._createHelper(e);
  })();
  (function () {
    function t(t, e) {
      var r = (this._lBlock >>> t ^ this._rBlock) & e;
      this._rBlock ^= r;
      this._lBlock ^= r << t;
    }
    function e(t, e) {
      var r = (this._rBlock >>> t ^ this._lBlock) & e;
      this._lBlock ^= r;
      this._rBlock ^= r << t;
    }
    var r = m.lib;
    var i = r.WordArray;
    var r = r.BlockCipher;
    var s = m.algo;
    var n = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
    var a = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
    var o = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
    var h = [{
      0: 8421888,
      268435456: 32768,
      536870912: 8421378,
      805306368: 2,
      1073741824: 512,
      1342177280: 8421890,
      1610612736: 8389122,
      1879048192: 8388608,
      2147483648: 514,
      2415919104: 8389120,
      2684354560: 33280,
      2952790016: 8421376,
      3221225472: 32770,
      3489660928: 8388610,
      3758096384: 0,
      4026531840: 33282,
      134217728: 0,
      402653184: 8421890,
      671088640: 33282,
      939524096: 32768,
      1207959552: 8421888,
      1476395008: 512,
      1744830464: 8421378,
      2013265920: 2,
      2281701376: 8389120,
      2550136832: 33280,
      2818572288: 8421376,
      3087007744: 8389122,
      3355443200: 8388610,
      3623878656: 32770,
      3892314112: 514,
      4160749568: 8388608,
      1: 32768,
      268435457: 2,
      536870913: 8421888,
      805306369: 8388608,
      1073741825: 8421378,
      1342177281: 33280,
      1610612737: 512,
      1879048193: 8389122,
      2147483649: 8421890,
      2415919105: 8421376,
      2684354561: 8388610,
      2952790017: 33282,
      3221225473: 514,
      3489660929: 8389120,
      3758096385: 32770,
      4026531841: 0,
      134217729: 8421890,
      402653185: 8421376,
      671088641: 8388608,
      939524097: 512,
      1207959553: 32768,
      1476395009: 8388610,
      1744830465: 2,
      2013265921: 33282,
      2281701377: 32770,
      2550136833: 8389122,
      2818572289: 514,
      3087007745: 8421888,
      3355443201: 8389120,
      3623878657: 0,
      3892314113: 33280,
      4160749569: 8421378
    }, {
      0: 1074282512,
      16777216: 16384,
      33554432: 524288,
      50331648: 1074266128,
      67108864: 1073741840,
      83886080: 1074282496,
      100663296: 1073758208,
      117440512: 16,
      134217728: 540672,
      150994944: 1073758224,
      167772160: 1073741824,
      184549376: 540688,
      201326592: 524304,
      218103808: 0,
      234881024: 16400,
      251658240: 1074266112,
      8388608: 1073758208,
      25165824: 540688,
      41943040: 16,
      58720256: 1073758224,
      75497472: 1074282512,
      92274688: 1073741824,
      109051904: 524288,
      125829120: 1074266128,
      142606336: 524304,
      159383552: 0,
      176160768: 16384,
      192937984: 1074266112,
      209715200: 1073741840,
      226492416: 540672,
      243269632: 1074282496,
      260046848: 16400,
      268435456: 0,
      285212672: 1074266128,
      301989888: 1073758224,
      318767104: 1074282496,
      335544320: 1074266112,
      352321536: 16,
      369098752: 540688,
      385875968: 16384,
      402653184: 16400,
      419430400: 524288,
      436207616: 524304,
      452984832: 1073741840,
      469762048: 540672,
      486539264: 1073758208,
      503316480: 1073741824,
      520093696: 1074282512,
      276824064: 540688,
      293601280: 524288,
      310378496: 1074266112,
      327155712: 16384,
      343932928: 1073758208,
      360710144: 1074282512,
      377487360: 16,
      394264576: 1073741824,
      411041792: 1074282496,
      427819008: 1073741840,
      444596224: 1073758224,
      461373440: 524304,
      478150656: 0,
      494927872: 16400,
      511705088: 1074266128,
      528482304: 540672
    }, {
      0: 260,
      1048576: 0,
      2097152: 67109120,
      3145728: 65796,
      4194304: 65540,
      5242880: 67108868,
      6291456: 67174660,
      7340032: 67174400,
      8388608: 67108864,
      9437184: 67174656,
      10485760: 65792,
      11534336: 67174404,
      12582912: 67109124,
      13631488: 65536,
      14680064: 4,
      15728640: 256,
      524288: 67174656,
      1572864: 67174404,
      2621440: 0,
      3670016: 67109120,
      4718592: 67108868,
      5767168: 65536,
      6815744: 65540,
      7864320: 260,
      8912896: 4,
      9961472: 256,
      11010048: 67174400,
      12058624: 65796,
      13107200: 65792,
      14155776: 67109124,
      15204352: 67174660,
      16252928: 67108864,
      16777216: 67174656,
      17825792: 65540,
      18874368: 65536,
      19922944: 67109120,
      20971520: 256,
      22020096: 67174660,
      23068672: 67108868,
      24117248: 0,
      25165824: 67109124,
      26214400: 67108864,
      27262976: 4,
      28311552: 65792,
      29360128: 67174400,
      30408704: 260,
      31457280: 65796,
      32505856: 67174404,
      17301504: 67108864,
      18350080: 260,
      19398656: 67174656,
      20447232: 0,
      21495808: 65540,
      22544384: 67109120,
      23592960: 256,
      24641536: 67174404,
      25690112: 65536,
      26738688: 67174660,
      27787264: 65796,
      28835840: 67108868,
      29884416: 67109124,
      30932992: 67174400,
      31981568: 4,
      33030144: 65792
    }, {
      0: 2151682048,
      65536: 2147487808,
      131072: 4198464,
      196608: 2151677952,
      262144: 0,
      327680: 4198400,
      393216: 2147483712,
      458752: 4194368,
      524288: 2147483648,
      589824: 4194304,
      655360: 64,
      720896: 2147487744,
      786432: 2151678016,
      851968: 4160,
      917504: 4096,
      983040: 2151682112,
      32768: 2147487808,
      98304: 64,
      163840: 2151678016,
      229376: 2147487744,
      294912: 4198400,
      360448: 2151682112,
      425984: 0,
      491520: 2151677952,
      557056: 4096,
      622592: 2151682048,
      688128: 4194304,
      753664: 4160,
      819200: 2147483648,
      884736: 4194368,
      950272: 4198464,
      1015808: 2147483712,
      1048576: 4194368,
      1114112: 4198400,
      1179648: 2147483712,
      1245184: 0,
      1310720: 4160,
      1376256: 2151678016,
      1441792: 2151682048,
      1507328: 2147487808,
      1572864: 2151682112,
      1638400: 2147483648,
      1703936: 2151677952,
      1769472: 4198464,
      1835008: 2147487744,
      1900544: 4194304,
      1966080: 64,
      2031616: 4096,
      1081344: 2151677952,
      1146880: 2151682112,
      1212416: 0,
      1277952: 4198400,
      1343488: 4194368,
      1409024: 2147483648,
      1474560: 2147487808,
      1540096: 64,
      1605632: 2147483712,
      1671168: 4096,
      1736704: 2147487744,
      1802240: 2151678016,
      1867776: 4160,
      1933312: 2151682048,
      1998848: 4194304,
      2064384: 4198464
    }, {
      0: 128,
      4096: 17039360,
      8192: 262144,
      12288: 536870912,
      16384: 537133184,
      20480: 16777344,
      24576: 553648256,
      28672: 262272,
      32768: 16777216,
      36864: 537133056,
      40960: 536871040,
      45056: 553910400,
      49152: 553910272,
      53248: 0,
      57344: 17039488,
      61440: 553648128,
      2048: 17039488,
      6144: 553648256,
      10240: 128,
      14336: 17039360,
      18432: 262144,
      22528: 537133184,
      26624: 553910272,
      30720: 536870912,
      34816: 537133056,
      38912: 0,
      43008: 553910400,
      47104: 16777344,
      51200: 536871040,
      55296: 553648128,
      59392: 16777216,
      63488: 262272,
      65536: 262144,
      69632: 128,
      73728: 536870912,
      77824: 553648256,
      81920: 16777344,
      86016: 553910272,
      90112: 537133184,
      94208: 16777216,
      98304: 553910400,
      102400: 553648128,
      106496: 17039360,
      110592: 537133056,
      114688: 262272,
      118784: 536871040,
      122880: 0,
      126976: 17039488,
      67584: 553648256,
      71680: 16777216,
      75776: 17039360,
      79872: 537133184,
      83968: 536870912,
      88064: 17039488,
      92160: 128,
      96256: 553910272,
      100352: 262272,
      104448: 553910400,
      108544: 0,
      112640: 553648128,
      116736: 16777344,
      120832: 262144,
      124928: 537133056,
      129024: 536871040
    }, {
      0: 268435464,
      256: 8192,
      512: 270532608,
      768: 270540808,
      1024: 268443648,
      1280: 2097152,
      1536: 2097160,
      1792: 268435456,
      2048: 0,
      2304: 268443656,
      2560: 2105344,
      2816: 8,
      3072: 270532616,
      3328: 2105352,
      3584: 8200,
      3840: 270540800,
      128: 270532608,
      384: 270540808,
      640: 8,
      896: 2097152,
      1152: 2105352,
      1408: 268435464,
      1664: 268443648,
      1920: 8200,
      2176: 2097160,
      2432: 8192,
      2688: 268443656,
      2944: 270532616,
      3200: 0,
      3456: 270540800,
      3712: 2105344,
      3968: 268435456,
      4096: 268443648,
      4352: 270532616,
      4608: 270540808,
      4864: 8200,
      5120: 2097152,
      5376: 268435456,
      5632: 268435464,
      5888: 2105344,
      6144: 2105352,
      6400: 0,
      6656: 8,
      6912: 270532608,
      7168: 8192,
      7424: 268443656,
      7680: 270540800,
      7936: 2097160,
      4224: 8,
      4480: 2105344,
      4736: 2097152,
      4992: 268435464,
      5248: 268443648,
      5504: 8200,
      5760: 270540808,
      6016: 270532608,
      6272: 270540800,
      6528: 270532616,
      6784: 8192,
      7040: 2105352,
      7296: 2097160,
      7552: 0,
      7808: 268435456,
      8064: 268443656
    }, {
      0: 1048576,
      16: 33555457,
      32: 1024,
      48: 1049601,
      64: 34604033,
      80: 0,
      96: 1,
      112: 34603009,
      128: 33555456,
      144: 1048577,
      160: 33554433,
      176: 34604032,
      192: 34603008,
      208: 1025,
      224: 1049600,
      240: 33554432,
      8: 34603009,
      24: 0,
      40: 33555457,
      56: 34604032,
      72: 1048576,
      88: 33554433,
      104: 33554432,
      120: 1025,
      136: 1049601,
      152: 33555456,
      168: 34603008,
      184: 1048577,
      200: 1024,
      216: 34604033,
      232: 1,
      248: 1049600,
      256: 33554432,
      272: 1048576,
      288: 33555457,
      304: 34603009,
      320: 1048577,
      336: 33555456,
      352: 34604032,
      368: 1049601,
      384: 1025,
      400: 34604033,
      416: 1049600,
      432: 1,
      448: 0,
      464: 34603008,
      480: 33554433,
      496: 1024,
      264: 1049600,
      280: 33555457,
      296: 34603009,
      312: 1,
      328: 33554432,
      344: 1048576,
      360: 1025,
      376: 34604032,
      392: 33554433,
      408: 34603008,
      424: 0,
      440: 34604033,
      456: 1049601,
      472: 1024,
      488: 33555456,
      504: 1048577
    }, {
      0: 134219808,
      1: 131072,
      2: 134217728,
      3: 32,
      4: 131104,
      5: 134350880,
      6: 134350848,
      7: 2048,
      8: 134348800,
      9: 134219776,
      10: 133120,
      11: 134348832,
      12: 2080,
      13: 0,
      14: 134217760,
      15: 133152,
      2147483648: 2048,
      2147483649: 134350880,
      2147483650: 134219808,
      2147483651: 134217728,
      2147483652: 134348800,
      2147483653: 133120,
      2147483654: 133152,
      2147483655: 32,
      2147483656: 134217760,
      2147483657: 2080,
      2147483658: 131104,
      2147483659: 134350848,
      2147483660: 0,
      2147483661: 134348832,
      2147483662: 134219776,
      2147483663: 131072,
      16: 133152,
      17: 134350848,
      18: 32,
      19: 2048,
      20: 134219776,
      21: 134217760,
      22: 134348832,
      23: 131072,
      24: 0,
      25: 131104,
      26: 134348800,
      27: 134219808,
      28: 134350880,
      29: 133120,
      30: 2080,
      31: 134217728,
      2147483664: 131072,
      2147483665: 2048,
      2147483666: 134348832,
      2147483667: 133152,
      2147483668: 32,
      2147483669: 134348800,
      2147483670: 134217728,
      2147483671: 134219808,
      2147483672: 134350880,
      2147483673: 134217760,
      2147483674: 134219776,
      2147483675: 0,
      2147483676: 133120,
      2147483677: 2080,
      2147483678: 131104,
      2147483679: 134350848
    }];
    var u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
    var c = s.DES = r.extend({
      _doReset: function () {
        var t = this._key.words;
        var e = [];
        var r = 0;
        for (; r < 56; r++) {
          var i = n[r] - 1;
          e[r] = t[i >>> 5] >>> 31 - i % 32 & 1;
        }
        i = 0;
        t = this._subKeys = [];
        for (; i < 16; i++) {
          var s = t[i] = [];
          var h = o[i];
          var r = 0;
          for (; r < 24; r++) {
            s[r / 6 | 0] |= e[(a[r] - 1 + h) % 28] << 31 - r % 6;
            s[4 + (r / 6 | 0)] |= e[28 + (a[r + 24] - 1 + h) % 28] << 31 - r % 6;
          }
          r = 1;
          s[0] = s[0] << 1 | s[0] >>> 31;
          for (; r < 7; r++) {
            s[r] >>>= (r - 1) * 4 + 3;
          }
          s[7] = s[7] << 5 | s[7] >>> 27;
        }
        r = 0;
        e = this._invSubKeys = [];
        for (; r < 16; r++) {
          e[r] = t[15 - r];
        }
      },
      encryptBlock: function (t, e) {
        this._doCryptBlock(t, e, this._subKeys);
      },
      decryptBlock: function (t, e) {
        this._doCryptBlock(t, e, this._invSubKeys);
      },
      _doCryptBlock: function (r, i, s) {
        this._lBlock = r[i];
        this._rBlock = r[i + 1];
        t.call(this, 4, 252645135);
        t.call(this, 16, 65535);
        e.call(this, 2, 858993459);
        e.call(this, 8, 16711935);
        t.call(this, 1, 1431655765);
        for (var n = 0; n < 16; n++) {
          var a = s[n];
          var o = this._lBlock;
          var c = this._rBlock;
          var l = 0;
          var f = 0;
          for (; f < 8; f++) {
            l |= h[f][((c ^ a[f]) & u[f]) >>> 0];
          }
          this._lBlock = c;
          this._rBlock = o ^ l;
        }
        s = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = s;
        t.call(this, 1, 1431655765);
        e.call(this, 8, 16711935);
        e.call(this, 2, 858993459);
        t.call(this, 16, 65535);
        t.call(this, 4, 252645135);
        r[i] = this._lBlock;
        r[i + 1] = this._rBlock;
      },
      keySize: 2,
      ivSize: 2,
      blockSize: 2
    });
    m.DES = r._createHelper(c);
    s = s.TripleDES = r.extend({
      _doReset: function () {
        var t = this._key.words;
        this._des1 = c.createEncryptor(i.create(t.slice(0, 2)));
        this._des2 = c.createEncryptor(i.create(t.slice(2, 4)));
        this._des3 = c.createEncryptor(i.create(t.slice(4, 6)));
      },
      encryptBlock: function (t, e) {
        this._des1.encryptBlock(t, e);
        this._des2.decryptBlock(t, e);
        this._des3.encryptBlock(t, e);
      },
      decryptBlock: function (t, e) {
        this._des3.decryptBlock(t, e);
        this._des2.encryptBlock(t, e);
        this._des1.decryptBlock(t, e);
      },
      keySize: 6,
      ivSize: 2,
      blockSize: 2
    });
    m.TripleDES = r._createHelper(s);
  })();
  tm = m.lib.WordArray;
  m.enc.Base64 = {
    stringify: function (t) {
      var e = t.words;
      var r = t.sigBytes;
      var i = this._map;
      t.clamp();
      t = [];
      for (var s = 0; s < r; s += 3) {
        var n = (e[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (e[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | e[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255;
        var a = 0;
        for (; a < 4 && s + a * 0.75 < r; a++) {
          t.push(i.charAt(n >>> (3 - a) * 6 & 63));
        }
      }
      if (e = i.charAt(64)) {
        while (t.length % 4) {
          t.push(e);
        }
      }
      return t.join("");
    },
    parse: function (t) {
      var e = t.length;
      var r = this._map;
      var i = r.charAt(64);
      if (i && (i = t.indexOf(i)) != -1) {
        e = i;
      }
      var i = [];
      var s = 0;
      var n = 0;
      for (; n < e; n++) {
        if (n % 4) {
          var a = r.indexOf(t.charAt(n - 1)) << n % 4 * 2;
          var o = r.indexOf(t.charAt(n)) >>> 6 - n % 4 * 2;
          i[s >>> 2] |= (a | o) << 24 - s % 4 * 8;
          s++;
        }
      }
      return tm.create(i, s);
    },
    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  (function (t) {
    function e(t, e, r, i, s, n, a) {
      return ((t = t + (e & r | ~e & i) + s + a) << n | t >>> 32 - n) + e;
    }
    function r(t, e, r, i, s, n, a) {
      return ((t = t + (e & i | r & ~i) + s + a) << n | t >>> 32 - n) + e;
    }
    function i(t, e, r, i, s, n, a) {
      return ((t = t + (e ^ r ^ i) + s + a) << n | t >>> 32 - n) + e;
    }
    function s(t, e, r, i, s, n, a) {
      return ((t = t + (r ^ (e | ~i)) + s + a) << n | t >>> 32 - n) + e;
    }
    var n = m.lib;
    var a = n.WordArray;
    var o = n.Hasher;
    var n = m.algo;
    var h = [];
    var u = 0;
    for (; u < 64; u++) {
      h[u] = t.abs(t.sin(u + 1)) * 4294967296 | 0;
    }
    n = n.MD5 = o.extend({
      _doReset: function () {
        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878]);
      },
      _doProcessBlock: function (t, n) {
        for (var a = 0; a < 16; a++) {
          var o = n + a;
          var u = t[o];
          t[o] = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & -16711936;
        }
        var a = this._hash.words;
        var o = t[n + 0];
        var u = t[n + 1];
        var c = t[n + 2];
        var l = t[n + 3];
        var f = t[n + 4];
        var d = t[n + 5];
        var p = t[n + 6];
        var g = t[n + 7];
        var v = t[n + 8];
        var x = t[n + 9];
        var m = t[n + 10];
        var y = t[n + 11];
        var S = t[n + 12];
        var E = t[n + 13];
        var b = t[n + 14];
        var F = t[n + 15];
        var w = a[0];
        var A = a[1];
        var D = a[2];
        var P = a[3];
        var w = e(w, A, D, P, o, 7, h[0]);
        var P = e(P, w, A, D, u, 12, h[1]);
        var D = e(D, P, w, A, c, 17, h[2]);
        var A = e(A, D, P, w, l, 22, h[3]);
        var w = e(w, A, D, P, f, 7, h[4]);
        var P = e(P, w, A, D, d, 12, h[5]);
        var D = e(D, P, w, A, p, 17, h[6]);
        var A = e(A, D, P, w, g, 22, h[7]);
        var w = e(w, A, D, P, v, 7, h[8]);
        var P = e(P, w, A, D, x, 12, h[9]);
        var D = e(D, P, w, A, m, 17, h[10]);
        var A = e(A, D, P, w, y, 22, h[11]);
        var w = e(w, A, D, P, S, 7, h[12]);
        var P = e(P, w, A, D, E, 12, h[13]);
        var D = e(D, P, w, A, b, 17, h[14]);
        var A = e(A, D, P, w, F, 22, h[15]);
        var w = r(w, A, D, P, u, 5, h[16]);
        var P = r(P, w, A, D, p, 9, h[17]);
        var D = r(D, P, w, A, y, 14, h[18]);
        var A = r(A, D, P, w, o, 20, h[19]);
        var w = r(w, A, D, P, d, 5, h[20]);
        var P = r(P, w, A, D, m, 9, h[21]);
        var D = r(D, P, w, A, F, 14, h[22]);
        var A = r(A, D, P, w, f, 20, h[23]);
        var w = r(w, A, D, P, x, 5, h[24]);
        var P = r(P, w, A, D, b, 9, h[25]);
        var D = r(D, P, w, A, l, 14, h[26]);
        var A = r(A, D, P, w, v, 20, h[27]);
        var w = r(w, A, D, P, E, 5, h[28]);
        var P = r(P, w, A, D, c, 9, h[29]);
        var D = r(D, P, w, A, g, 14, h[30]);
        var A = r(A, D, P, w, S, 20, h[31]);
        var w = i(w, A, D, P, d, 4, h[32]);
        var P = i(P, w, A, D, v, 11, h[33]);
        var D = i(D, P, w, A, y, 16, h[34]);
        var A = i(A, D, P, w, b, 23, h[35]);
        var w = i(w, A, D, P, u, 4, h[36]);
        var P = i(P, w, A, D, f, 11, h[37]);
        var D = i(D, P, w, A, g, 16, h[38]);
        var A = i(A, D, P, w, m, 23, h[39]);
        var w = i(w, A, D, P, E, 4, h[40]);
        var P = i(P, w, A, D, o, 11, h[41]);
        var D = i(D, P, w, A, l, 16, h[42]);
        var A = i(A, D, P, w, p, 23, h[43]);
        var w = i(w, A, D, P, x, 4, h[44]);
        var P = i(P, w, A, D, S, 11, h[45]);
        var D = i(D, P, w, A, F, 16, h[46]);
        var A = i(A, D, P, w, c, 23, h[47]);
        var w = s(w, A, D, P, o, 6, h[48]);
        var P = s(P, w, A, D, g, 10, h[49]);
        var D = s(D, P, w, A, b, 15, h[50]);
        var A = s(A, D, P, w, d, 21, h[51]);
        var w = s(w, A, D, P, S, 6, h[52]);
        var P = s(P, w, A, D, l, 10, h[53]);
        var D = s(D, P, w, A, m, 15, h[54]);
        var A = s(A, D, P, w, u, 21, h[55]);
        var w = s(w, A, D, P, v, 6, h[56]);
        var P = s(P, w, A, D, F, 10, h[57]);
        var D = s(D, P, w, A, p, 15, h[58]);
        var A = s(A, D, P, w, E, 21, h[59]);
        var w = s(w, A, D, P, f, 6, h[60]);
        var P = s(P, w, A, D, y, 10, h[61]);
        var D = s(D, P, w, A, c, 15, h[62]);
        var A = s(A, D, P, w, x, 21, h[63]);
        a[0] = a[0] + w | 0;
        a[1] = a[1] + A | 0;
        a[2] = a[2] + D | 0;
        a[3] = a[3] + P | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        var i = this._nDataBytes * 8;
        var s = e.sigBytes * 8;
        r[s >>> 5] |= 128 << 24 - s % 32;
        var n = t.floor(i / 4294967296);
        r[(s + 64 >>> 9 << 4) + 15] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & -16711936;
        r[(s + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
        e.sigBytes = (r.length + 1) * 4;
        this._process();
        r = (e = this._hash).words;
        i = 0;
        for (; i < 4; i++) {
          s = r[i];
          r[i] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
        }
        return e;
      },
      clone: function () {
        var t = o.clone.call(this);
        t._hash = this._hash.clone();
        return t;
      }
    });
    m.MD5 = o._createHelper(n);
    m.HmacMD5 = o._createHmacHelper(n);
  })(Math);
  ty = (tb = m.lib).WordArray;
  tS = tb.Hasher;
  tE = [];
  tb = m.algo.SHA1 = tS.extend({
    _doReset: function () {
      this._hash = new ty.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (t, e) {
      var r = this._hash.words;
      var i = r[0];
      var s = r[1];
      var n = r[2];
      var a = r[3];
      var o = r[4];
      var h = 0;
      for (; h < 80; h++) {
        if (h < 16) {
          tE[h] = t[e + h] | 0;
        } else {
          var u = tE[h - 3] ^ tE[h - 8] ^ tE[h - 14] ^ tE[h - 16];
          tE[h] = u << 1 | u >>> 31;
        }
        u = (i << 5 | i >>> 27) + o + tE[h];
        u = h < 20 ? u + ((s & n | ~s & a) + 1518500249) : h < 40 ? u + ((s ^ n ^ a) + 1859775393) : h < 60 ? u + ((s & n | s & a | n & a) - 1894007588) : u + ((s ^ n ^ a) - 899497514);
        o = a;
        a = n;
        n = s << 30 | s >>> 2;
        s = i;
        i = u;
      }
      r[0] = r[0] + i | 0;
      r[1] = r[1] + s | 0;
      r[2] = r[2] + n | 0;
      r[3] = r[3] + a | 0;
      r[4] = r[4] + o | 0;
    },
    _doFinalize: function () {
      var t = this._data;
      var e = t.words;
      var r = this._nDataBytes * 8;
      var i = t.sigBytes * 8;
      e[i >>> 5] |= 128 << 24 - i % 32;
      e[(i + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296);
      e[(i + 64 >>> 9 << 4) + 15] = r;
      t.sigBytes = e.length * 4;
      this._process();
      return this._hash;
    },
    clone: function () {
      var t = tS.clone.call(this);
      t._hash = this._hash.clone();
      return t;
    }
  });
  m.SHA1 = tS._createHelper(tb);
  m.HmacSHA1 = tS._createHmacHelper(tb);
  (function (t) {
    var e;
    var r = m.lib;
    var i = r.WordArray;
    var s = r.Hasher;
    var r = m.algo;
    var n = [];
    var a = [];
    function o(t) {
      return (t - (t | 0)) * 4294967296 | 0;
    }
    var h = 2;
    var u = 0;
    while (u < 64) {
      t: {
        e = h;
        var c = t.sqrt(e);
        var l = 2;
        for (; l <= c; l++) {
          if (!(e % l)) {
            e = false;
            break t;
          }
        }
        e = true;
      }
      if (e) {
        if (u < 8) {
          n[u] = o(t.pow(h, 0.5));
        }
        a[u] = o(t.pow(h, 1 / 3));
        u++;
      }
      h++;
    }
    var f = [];
    var r = r.SHA256 = s.extend({
      _doReset: function () {
        this._hash = new i.init(n.slice(0));
      },
      _doProcessBlock: function (t, e) {
        var r = this._hash.words;
        var i = r[0];
        var s = r[1];
        var n = r[2];
        var o = r[3];
        var h = r[4];
        var u = r[5];
        var c = r[6];
        var l = r[7];
        var d = 0;
        for (; d < 64; d++) {
          if (d < 16) {
            f[d] = t[e + d] | 0;
          } else {
            var p = f[d - 15];
            var g = f[d - 2];
            f[d] = ((p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + f[d - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + f[d - 16];
          }
          p = l + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & u ^ ~h & c) + a[d] + f[d];
          g = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & s ^ i & n ^ s & n);
          l = c;
          c = u;
          u = h;
          h = o + p | 0;
          o = n;
          n = s;
          s = i;
          i = p + g | 0;
        }
        r[0] = r[0] + i | 0;
        r[1] = r[1] + s | 0;
        r[2] = r[2] + n | 0;
        r[3] = r[3] + o | 0;
        r[4] = r[4] + h | 0;
        r[5] = r[5] + u | 0;
        r[6] = r[6] + c | 0;
        r[7] = r[7] + l | 0;
      },
      _doFinalize: function () {
        var e = this._data;
        var r = e.words;
        var i = this._nDataBytes * 8;
        var s = e.sigBytes * 8;
        r[s >>> 5] |= 128 << 24 - s % 32;
        r[(s + 64 >>> 9 << 4) + 14] = t.floor(i / 4294967296);
        r[(s + 64 >>> 9 << 4) + 15] = i;
        e.sigBytes = r.length * 4;
        this._process();
        return this._hash;
      },
      clone: function () {
        var t = s.clone.call(this);
        t._hash = this._hash.clone();
        return t;
      }
    });
    m.SHA256 = s._createHelper(r);
    m.HmacSHA256 = s._createHmacHelper(r);
  })(Math);
  tF = m.lib.WordArray;
  tw = (tA = m.algo).SHA256;
  tA = tA.SHA224 = tw.extend({
    _doReset: function () {
      this._hash = new tF.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    },
    _doFinalize: function () {
      var t = tw._doFinalize.call(this);
      t.sigBytes -= 4;
      return t;
    }
  });
  m.SHA224 = tw._createHelper(tA);
  m.HmacSHA224 = tw._createHmacHelper(tA);
  (function () {
    function t() {
      return i.create.apply(i, arguments);
    }
    var e = m.lib.Hasher;
    var r = m.x64;
    var i = r.Word;
    var s = r.WordArray;
    var r = m.algo;
    var n = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)];
    var a = [];
    var o = 0;
    for (; o < 80; o++) {
      a[o] = t();
    }
    r = r.SHA512 = e.extend({
      _doReset: function () {
        this._hash = new s.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)]);
      },
      _doProcessBlock: function (t, e) {
        var r = this._hash.words;
        var i = r[0];
        var s = r[1];
        var o = r[2];
        var h = r[3];
        var u = r[4];
        var c = r[5];
        var l = r[6];
        var r = r[7];
        var f = i.high;
        var d = i.low;
        var p = s.high;
        var g = s.low;
        var v = o.high;
        var x = o.low;
        var m = h.high;
        var y = h.low;
        var S = u.high;
        var E = u.low;
        var b = c.high;
        var F = c.low;
        var w = l.high;
        var A = l.low;
        var D = r.high;
        var P = r.low;
        var I = f;
        var C = d;
        var R = p;
        var T = g;
        var B = v;
        var N = x;
        var H = m;
        var O = y;
        var j = S;
        var V = E;
        var K = b;
        var L = F;
        var k = w;
        var q = A;
        var M = D;
        var _ = P;
        var U = 0;
        for (; U < 80; U++) {
          var G = a[U];
          if (U < 16) {
            var z = G.high = t[e + U * 2] | 0;
            var W = G.low = t[e + U * 2 + 1] | 0;
          } else {
            var z = a[U - 15];
            var W = z.high;
            var J = z.low;
            var z = (W >>> 1 | J << 31) ^ (W >>> 8 | J << 24) ^ W >>> 7;
            var J = (J >>> 1 | W << 31) ^ (J >>> 8 | W << 24) ^ (J >>> 7 | W << 25);
            var X = a[U - 2];
            var W = X.high;
            var $ = X.low;
            var X = (W >>> 19 | $ << 13) ^ (W << 3 | $ >>> 29) ^ W >>> 6;
            var $ = ($ >>> 19 | W << 13) ^ ($ << 3 | W >>> 29) ^ ($ >>> 6 | W << 26);
            var W = a[U - 7];
            var Y = W.high;
            var Z = a[U - 16];
            var Q = Z.high;
            var Z = Z.low;
            var W = J + W.low;
            var z = z + Y + +(W >>> 0 < J >>> 0);
            var W = W + $;
            var z = z + X + +(W >>> 0 < $ >>> 0);
            var W = W + Z;
            var z = z + Q + +(W >>> 0 < Z >>> 0);
            G.high = z;
            G.low = W;
          }
          var Y = j & K ^ ~j & k;
          var Z = V & L ^ ~V & q;
          var G = I & R ^ I & B ^ R & B;
          var tt = C & T ^ C & N ^ T & N;
          var J = (I >>> 28 | C << 4) ^ (I << 30 | C >>> 2) ^ (I << 25 | C >>> 7);
          var X = (C >>> 28 | I << 4) ^ (C << 30 | I >>> 2) ^ (C << 25 | I >>> 7);
          var $ = n[U];
          var te = $.high;
          var tr = $.low;
          var $ = _ + ((V >>> 14 | j << 18) ^ (V >>> 18 | j << 14) ^ (V << 23 | j >>> 9));
          var Q = M + ((j >>> 14 | V << 18) ^ (j >>> 18 | V << 14) ^ (j << 23 | V >>> 9)) + +($ >>> 0 < _ >>> 0);
          var $ = $ + Z;
          var Q = Q + Y + +($ >>> 0 < Z >>> 0);
          var $ = $ + tr;
          var Q = Q + te + +($ >>> 0 < tr >>> 0);
          var $ = $ + W;
          var Q = Q + z + +($ >>> 0 < W >>> 0);
          var W = X + tt;
          var G = J + G + +(W >>> 0 < X >>> 0);
          var M = k;
          var _ = q;
          var k = K;
          var q = L;
          var K = j;
          var L = V;
          var V = O + $ | 0;
          var j = H + Q + +(V >>> 0 < O >>> 0) | 0;
          var H = B;
          var O = N;
          var B = R;
          var N = T;
          var R = I;
          var T = C;
          var C = $ + W | 0;
          var I = Q + G + +(C >>> 0 < $ >>> 0) | 0;
        }
        d = i.low = d + C;
        i.high = f + I + +(d >>> 0 < C >>> 0);
        g = s.low = g + T;
        s.high = p + R + +(g >>> 0 < T >>> 0);
        x = o.low = x + N;
        o.high = v + B + +(x >>> 0 < N >>> 0);
        y = h.low = y + O;
        h.high = m + H + +(y >>> 0 < O >>> 0);
        E = u.low = E + V;
        u.high = S + j + +(E >>> 0 < V >>> 0);
        F = c.low = F + L;
        c.high = b + K + +(F >>> 0 < L >>> 0);
        A = l.low = A + q;
        l.high = w + k + +(A >>> 0 < q >>> 0);
        P = r.low = P + _;
        r.high = D + M + +(P >>> 0 < _ >>> 0);
      },
      _doFinalize: function () {
        var t = this._data;
        var e = t.words;
        var r = this._nDataBytes * 8;
        var i = t.sigBytes * 8;
        e[i >>> 5] |= 128 << 24 - i % 32;
        e[(i + 128 >>> 10 << 5) + 30] = Math.floor(r / 4294967296);
        e[(i + 128 >>> 10 << 5) + 31] = r;
        t.sigBytes = e.length * 4;
        this._process();
        return this._hash.toX32();
      },
      clone: function () {
        var t = e.clone.call(this);
        t._hash = this._hash.clone();
        return t;
      },
      blockSize: 32
    });
    m.SHA512 = e._createHelper(r);
    m.HmacSHA512 = e._createHmacHelper(r);
  })();
  tD = (tC = m.x64).Word;
  tP = tC.WordArray;
  tI = (tC = m.algo).SHA512;
  tC = tC.SHA384 = tI.extend({
    _doReset: function () {
      this._hash = new tP.init([new tD.init(3418070365, 3238371032), new tD.init(1654270250, 914150663), new tD.init(2438529370, 812702999), new tD.init(355462360, 4144912697), new tD.init(1731405415, 4290775857), new tD.init(2394180231, 1750603025), new tD.init(3675008525, 1694076839), new tD.init(1203062813, 3204075428)]);
    },
    _doFinalize: function () {
      var t = tI._doFinalize.call(this);
      t.sigBytes -= 16;
      return t;
    }
  });
  m.SHA384 = tI._createHelper(tC);
  m.HmacSHA384 = tI._createHmacHelper(tC);
  tR = (tK = m.lib).WordArray;
  tT = tK.Hasher;
  tK = m.algo;
  tB = tR.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  tN = tR.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  tH = tR.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  tO = tR.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  tj = tR.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  tV = tR.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  tK = tK.RIPEMD160 = tT.extend({
    _doReset: function () {
      this._hash = tR.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    },
    _doProcessBlock: function (t, e) {
      for (var r = 0; r < 16; r++) {
        var i = e + r;
        var s = t[i];
        t[i] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & -16711936;
      }
      var n;
      var a;
      var o;
      var h;
      var u;
      var c;
      var l;
      var f;
      var d;
      var p;
      var i = this._hash.words;
      var s = tj.words;
      var g = tV.words;
      var v = tB.words;
      var x = tN.words;
      var m = tH.words;
      var y = tO.words;
      c = n = i[0];
      l = a = i[1];
      f = o = i[2];
      d = h = i[3];
      p = u = i[4];
      var S;
      var r = 0;
      for (; r < 80; r += 1) {
        S = n + t[e + v[r]] | 0;
        S = (S = (S = (r < 16 ? S + ((a ^ o ^ h) + s[0]) : r < 32 ? S + ((a & o | ~a & h) + s[1]) : r < 48 ? S + (((a | ~o) ^ h) + s[2]) : r < 64 ? S + ((a & h | o & ~h) + s[3]) : S + ((a ^ (o | ~h)) + s[4])) | 0) << m[r] | S >>> 32 - m[r]) + u | 0;
        n = u;
        u = h;
        h = o << 10 | o >>> 22;
        o = a;
        a = S;
        S = c + t[e + x[r]] | 0;
        S = (S = (S = (r < 16 ? S + ((l ^ (f | ~d)) + g[0]) : r < 32 ? S + ((l & d | f & ~d) + g[1]) : r < 48 ? S + (((l | ~f) ^ d) + g[2]) : r < 64 ? S + ((l & f | ~l & d) + g[3]) : S + ((l ^ f ^ d) + g[4])) | 0) << y[r] | S >>> 32 - y[r]) + p | 0;
        c = p;
        p = d;
        d = f << 10 | f >>> 22;
        f = l;
        l = S;
      }
      S = i[1] + o + d | 0;
      i[1] = i[2] + h + p | 0;
      i[2] = i[3] + u + c | 0;
      i[3] = i[4] + n + l | 0;
      i[4] = i[0] + a + f | 0;
      i[0] = S;
    },
    _doFinalize: function () {
      var t = this._data;
      var e = t.words;
      var r = this._nDataBytes * 8;
      var i = t.sigBytes * 8;
      e[i >>> 5] |= 128 << 24 - i % 32;
      e[(i + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & -16711936;
      t.sigBytes = (e.length + 1) * 4;
      this._process();
      e = (t = this._hash).words;
      r = 0;
      for (; r < 5; r++) {
        i = e[r];
        e[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & -16711936;
      }
      return t;
    },
    clone: function () {
      var t = tT.clone.call(this);
      t._hash = this._hash.clone();
      return t;
    }
  });
  m.RIPEMD160 = tT._createHelper(tK);
  m.HmacRIPEMD160 = tT._createHmacHelper(tK);
  tL = m.enc.Utf8;
  m.algo.HMAC = m.lib.Base.extend({
    init: function (t, e) {
      t = this._hasher = new t.init();
      if (typeof e == "string") {
        e = tL.parse(e);
      }
      var r = t.blockSize;
      var i = r * 4;
      if (e.sigBytes > i) {
        e = t.finalize(e);
      }
      e.clamp();
      var s = this._oKey = e.clone();
      var n = this._iKey = e.clone();
      var a = s.words;
      var o = n.words;
      var h = 0;
      for (; h < r; h++) {
        a[h] ^= 1549556828;
        o[h] ^= 909522486;
      }
      s.sigBytes = n.sigBytes = i;
      this.reset();
    },
    reset: function () {
      var t = this._hasher;
      t.reset();
      t.update(this._iKey);
    },
    update: function (t) {
      this._hasher.update(t);
      return this;
    },
    finalize: function (t) {
      var e = this._hasher;
      t = e.finalize(t);
      e.reset();
      return e.finalize(this._oKey.clone().concat(t));
    }
  });
  tk = (tM = m.lib).Base;
  tq = tM.WordArray;
  t_ = (tM = m.algo).HMAC;
  tU = tM.PBKDF2 = tk.extend({
    cfg: tk.extend({
      keySize: 4,
      hasher: tM.SHA1,
      iterations: 1
    }),
    init: function (t) {
      this.cfg = this.cfg.extend(t);
    },
    compute: function (t, e) {
      var r = this.cfg;
      var i = t_.create(r.hasher, t);
      var s = tq.create();
      var n = tq.create([1]);
      var a = s.words;
      var o = n.words;
      var h = r.keySize;
      var r = r.iterations;
      while (a.length < h) {
        var u = i.update(e).finalize(n);
        i.reset();
        var c = u.words;
        var l = c.length;
        var f = u;
        var d = 1;
        for (; d < r; d++) {
          f = i.finalize(f);
          i.reset();
          var p = f.words;
          var g = 0;
          for (; g < l; g++) {
            c[g] ^= p[g];
          }
        }
        s.concat(u);
        o[0]++;
      }
      s.sigBytes = h * 4;
      return s;
    }
  });
  m.PBKDF2 = function (t, e, r) {
    return tU.create(r).compute(t, e);
  };
  var y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function S(t) {
    var e;
    var r;
    var i = "";
    for (e = 0; e + 3 <= t.length; e += 3) {
      r = parseInt(t.substring(e, e + 3), 16);
      i += y.charAt(r >> 6) + y.charAt(r & 63);
    }
    for (e + 1 == t.length ? (r = parseInt(t.substring(e, e + 1), 16), i += y.charAt(r << 2)) : e + 2 == t.length && (r = parseInt(t.substring(e, e + 2), 16), i += y.charAt(r >> 2) + y.charAt((r & 3) << 4)); (i.length & 3) > 0;) {
      i += "=";
    }
    return i;
  }
  function E(t) {
    var e;
    var r;
    var i;
    var s = "";
    var n = 0;
    for (e = 0; e < t.length && t.charAt(e) != "="; ++e) {
      if (!((i = y.indexOf(t.charAt(e))) < 0)) {
        if (n == 0) {
          s += A(i >> 2);
          r = i & 3;
          n = 1;
        } else if (n == 1) {
          s += A(r << 2 | i >> 4);
          r = i & 15;
          n = 2;
        } else if (n == 2) {
          s += A(r);
          s += A(i >> 2);
          r = i & 3;
          n = 3;
        } else {
          s += A(r << 2 | i >> 4);
          s += A(i & 15);
          n = 0;
        }
      }
    }
    if (n == 1) {
      s += A(r << 2);
    }
    return s;
  }
  function b(t, e, r) {
    if (t != null) {
      if (typeof t == "number") {
        this.fromNumber(t, e, r);
      } else if (e == null && typeof t != "string") {
        this.fromString(t, 256);
      } else {
        this.fromString(t, e);
      }
    }
  }
  function F() {
    return new b(null);
  }
  if (v.appName == "Microsoft Internet Explorer") {
    b.prototype.am = function (t, e, r, i, s, n) {
      var a = e & 32767;
      var o = e >> 15;
      while (--n >= 0) {
        var h = this[t] & 32767;
        var u = this[t++] >> 15;
        var c = o * h + u * a;
        s = ((h = a * h + ((c & 32767) << 15) + r[i] + (s & 1073741823)) >>> 30) + (c >>> 15) + o * u + (s >>> 30);
        r[i++] = h & 1073741823;
      }
      return s;
    };
    tG = 30;
  } else if (v.appName != "Netscape") {
    b.prototype.am = function (t, e, r, i, s, n) {
      while (--n >= 0) {
        var a = e * this[t++] + r[i] + s;
        s = Math.floor(a / 67108864);
        r[i++] = a & 67108863;
      }
      return s;
    };
    tG = 26;
  } else {
    b.prototype.am = function (t, e, r, i, s, n) {
      var a = e & 16383;
      var o = e >> 14;
      while (--n >= 0) {
        var h = this[t] & 16383;
        var u = this[t++] >> 14;
        var c = o * h + u * a;
        s = ((h = a * h + ((c & 16383) << 14) + r[i] + s) >> 28) + (c >> 14) + o * u;
        r[i++] = h & 268435455;
      }
      return s;
    };
    tG = 28;
  }
  b.prototype.DB = tG;
  b.prototype.DM = (1 << tG) - 1;
  b.prototype.DV = 1 << tG;
  b.prototype.FV = 4503599627370496;
  b.prototype.F1 = 52 - tG;
  b.prototype.F2 = tG * 2 - 52;
  var w = [];
  tW = 0;
  tz = 48;
  for (; tW <= 9; ++tW) {
    w[tz++] = tW;
  }
  tW = 10;
  tz = 97;
  for (; tW < 36; ++tW) {
    w[tz++] = tW;
  }
  tW = 10;
  tz = 65;
  for (; tW < 36; ++tW) {
    w[tz++] = tW;
  }
  function A(t) {
    return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
  }
  function D(t, e) {
    var r = w[t.charCodeAt(e)];
    if (r == null) {
      return -1;
    } else {
      return r;
    }
  }
  function P(t) {
    var e = F();
    e.fromInt(t);
    return e;
  }
  function I(t) {
    var e;
    var r = 1;
    if ((e = t >>> 16) != 0) {
      t = e;
      r += 16;
    }
    if ((e = t >> 8) != 0) {
      t = e;
      r += 8;
    }
    if ((e = t >> 4) != 0) {
      t = e;
      r += 4;
    }
    if ((e = t >> 2) != 0) {
      t = e;
      r += 2;
    }
    if ((e = t >> 1) != 0) {
      t = e;
      r += 1;
    }
    return r;
  }
  function C(t) {
    this.m = t;
  }
  function R(t) {
    this.m = t;
    this.mp = t.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << t.DB - 15) - 1;
    this.mt2 = t.t * 2;
  }
  function T(t, e) {
    return t & e;
  }
  function B(t, e) {
    return t | e;
  }
  function N(t, e) {
    return t ^ e;
  }
  function H(t, e) {
    return t & ~e;
  }
  function O() {}
  function j(t) {
    return t;
  }
  function V(t) {
    this.r2 = F();
    this.q3 = F();
    b.ONE.dlShiftTo(t.t * 2, this.r2);
    this.mu = this.r2.divide(t);
    this.m = t;
  }
  C.prototype.convert = function (t) {
    if (t.s < 0 || t.compareTo(this.m) >= 0) {
      return t.mod(this.m);
    } else {
      return t;
    }
  };
  C.prototype.revert = function (t) {
    return t;
  };
  C.prototype.reduce = function (t) {
    t.divRemTo(this.m, null, t);
  };
  C.prototype.mulTo = function (t, e, r) {
    t.multiplyTo(e, r);
    this.reduce(r);
  };
  C.prototype.sqrTo = function (t, e) {
    t.squareTo(e);
    this.reduce(e);
  };
  R.prototype.convert = function (t) {
    var e = F();
    t.abs().dlShiftTo(this.m.t, e);
    e.divRemTo(this.m, null, e);
    if (t.s < 0 && e.compareTo(b.ZERO) > 0) {
      this.m.subTo(e, e);
    }
    return e;
  };
  R.prototype.revert = function (t) {
    var e = F();
    t.copyTo(e);
    this.reduce(e);
    return e;
  };
  R.prototype.reduce = function (t) {
    while (t.t <= this.mt2) {
      t[t.t++] = 0;
    }
    for (var e = 0; e < this.m.t; ++e) {
      var r = t[e] & 32767;
      var i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
      r = e + this.m.t;
      t[r] += this.m.am(0, i, t, e, 0, this.m.t);
      while (t[r] >= t.DV) {
        t[r] -= t.DV;
        t[++r]++;
      }
    }
    t.clamp();
    t.drShiftTo(this.m.t, t);
    if (t.compareTo(this.m) >= 0) {
      t.subTo(this.m, t);
    }
  };
  R.prototype.mulTo = function (t, e, r) {
    t.multiplyTo(e, r);
    this.reduce(r);
  };
  R.prototype.sqrTo = function (t, e) {
    t.squareTo(e);
    this.reduce(e);
  };
  b.prototype.copyTo = function (t) {
    for (var e = this.t - 1; e >= 0; --e) {
      t[e] = this[e];
    }
    t.t = this.t;
    t.s = this.s;
  };
  b.prototype.fromInt = function (t) {
    this.t = 1;
    this.s = t < 0 ? -1 : 0;
    if (t > 0) {
      this[0] = t;
    } else if (t < -1) {
      this[0] = t + this.DV;
    } else {
      this.t = 0;
    }
  };
  b.prototype.fromString = function (t, e) {
    if (e == 16) {
      r = 4;
    } else if (e == 8) {
      r = 3;
    } else if (e == 256) {
      r = 8;
    } else if (e == 2) {
      r = 1;
    } else if (e == 32) {
      r = 5;
    } else if (e == 4) {
      r = 2;
    } else {
      this.fromRadix(t, e);
      return;
    }
    this.t = 0;
    this.s = 0;
    var r;
    var i = t.length;
    var s = false;
    var n = 0;
    while (--i >= 0) {
      var a = r == 8 ? t[i] & 255 : D(t, i);
      if (a < 0) {
        if (t.charAt(i) == "-") {
          s = true;
        }
        continue;
      }
      s = false;
      if (n == 0) {
        this[this.t++] = a;
      } else if (n + r > this.DB) {
        this[this.t - 1] |= (a & (1 << this.DB - n) - 1) << n;
        this[this.t++] = a >> this.DB - n;
      } else {
        this[this.t - 1] |= a << n;
      }
      if ((n += r) >= this.DB) {
        n -= this.DB;
      }
    }
    if (r == 8 && (t[0] & 128) != 0) {
      this.s = -1;
      if (n > 0) {
        this[this.t - 1] |= (1 << this.DB - n) - 1 << n;
      }
    }
    this.clamp();
    if (s) {
      b.ZERO.subTo(this, this);
    }
  };
  b.prototype.clamp = function () {
    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) {
      --this.t;
    }
  };
  b.prototype.dlShiftTo = function (t, e) {
    var r;
    for (r = this.t - 1; r >= 0; --r) {
      e[r + t] = this[r];
    }
    for (r = t - 1; r >= 0; --r) {
      e[r] = 0;
    }
    e.t = this.t + t;
    e.s = this.s;
  };
  b.prototype.drShiftTo = function (t, e) {
    for (var r = t; r < this.t; ++r) {
      e[r - t] = this[r];
    }
    e.t = Math.max(this.t - t, 0);
    e.s = this.s;
  };
  b.prototype.lShiftTo = function (t, e) {
    var r;
    var i = t % this.DB;
    var s = this.DB - i;
    var n = (1 << s) - 1;
    var a = Math.floor(t / this.DB);
    var o = this.s << i & this.DM;
    for (r = this.t - 1; r >= 0; --r) {
      e[r + a + 1] = this[r] >> s | o;
      o = (this[r] & n) << i;
    }
    for (r = a - 1; r >= 0; --r) {
      e[r] = 0;
    }
    e[a] = o;
    e.t = this.t + a + 1;
    e.s = this.s;
    e.clamp();
  };
  b.prototype.rShiftTo = function (t, e) {
    e.s = this.s;
    var r = Math.floor(t / this.DB);
    if (r >= this.t) {
      e.t = 0;
      return;
    }
    var i = t % this.DB;
    var s = this.DB - i;
    var n = (1 << i) - 1;
    e[0] = this[r] >> i;
    for (var a = r + 1; a < this.t; ++a) {
      e[a - r - 1] |= (this[a] & n) << s;
      e[a - r] = this[a] >> i;
    }
    if (i > 0) {
      e[this.t - r - 1] |= (this.s & n) << s;
    }
    e.t = this.t - r;
    e.clamp();
  };
  b.prototype.subTo = function (t, e) {
    var r = 0;
    var i = 0;
    var s = Math.min(t.t, this.t);
    while (r < s) {
      i += this[r] - t[r];
      e[r++] = i & this.DM;
      i >>= this.DB;
    }
    if (t.t < this.t) {
      for (i -= t.s; r < this.t;) {
        i += this[r];
        e[r++] = i & this.DM;
        i >>= this.DB;
      }
      i += this.s;
    } else {
      for (i += this.s; r < t.t;) {
        i -= t[r];
        e[r++] = i & this.DM;
        i >>= this.DB;
      }
      i -= t.s;
    }
    e.s = i < 0 ? -1 : 0;
    if (i < -1) {
      e[r++] = this.DV + i;
    } else if (i > 0) {
      e[r++] = i;
    }
    e.t = r;
    e.clamp();
  };
  b.prototype.multiplyTo = function (t, e) {
    var r = this.abs();
    var i = t.abs();
    var s = r.t;
    for (e.t = s + i.t; --s >= 0;) {
      e[s] = 0;
    }
    for (s = 0; s < i.t; ++s) {
      e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
    }
    e.s = 0;
    e.clamp();
    if (this.s != t.s) {
      b.ZERO.subTo(e, e);
    }
  };
  b.prototype.squareTo = function (t) {
    var e = this.abs();
    var r = t.t = e.t * 2;
    while (--r >= 0) {
      t[r] = 0;
    }
    for (r = 0; r < e.t - 1; ++r) {
      var i = e.am(r, e[r], t, r * 2, 0, 1);
      if ((t[r + e.t] += e.am(r + 1, e[r] * 2, t, r * 2 + 1, i, e.t - r - 1)) >= e.DV) {
        t[r + e.t] -= e.DV;
        t[r + e.t + 1] = 1;
      }
    }
    if (t.t > 0) {
      t[t.t - 1] += e.am(r, e[r], t, r * 2, 0, 1);
    }
    t.s = 0;
    t.clamp();
  };
  b.prototype.divRemTo = function (t, e, r) {
    var i = t.abs();
    if (!(i.t <= 0)) {
      var s = this.abs();
      if (s.t < i.t) {
        if (e != null) {
          e.fromInt(0);
        }
        if (r != null) {
          this.copyTo(r);
        }
        return;
      }
      if (r == null) {
        r = F();
      }
      var n = F();
      var a = this.s;
      var o = t.s;
      var h = this.DB - I(i[i.t - 1]);
      if (h > 0) {
        i.lShiftTo(h, n);
        s.lShiftTo(h, r);
      } else {
        i.copyTo(n);
        s.copyTo(r);
      }
      var u = n.t;
      var c = n[u - 1];
      if (c != 0) {
        var l = c * (1 << this.F1) + (u > 1 ? n[u - 2] >> this.F2 : 0);
        var f = this.FV / l;
        var d = (1 << this.F1) / l;
        var p = 1 << this.F2;
        var g = r.t;
        var v = g - u;
        var x = e == null ? F() : e;
        n.dlShiftTo(v, x);
        if (r.compareTo(x) >= 0) {
          r[r.t++] = 1;
          r.subTo(x, r);
        }
        b.ONE.dlShiftTo(u, x);
        x.subTo(n, n);
        while (n.t < u) {
          n[n.t++] = 0;
        }
        while (--v >= 0) {
          var m = r[--g] == c ? this.DM : Math.floor(r[g] * f + (r[g - 1] + p) * d);
          if ((r[g] += n.am(0, m, r, v, 0, u)) < m) {
            n.dlShiftTo(v, x);
            r.subTo(x, r);
            while (r[g] < --m) {
              r.subTo(x, r);
            }
          }
        }
        if (e != null) {
          r.drShiftTo(u, e);
          if (a != o) {
            b.ZERO.subTo(e, e);
          }
        }
        r.t = u;
        r.clamp();
        if (h > 0) {
          r.rShiftTo(h, r);
        }
        if (a < 0) {
          b.ZERO.subTo(r, r);
        }
      }
    }
  };
  b.prototype.invDigit = function () {
    if (this.t < 1) {
      return 0;
    }
    var t = this[0];
    if ((t & 1) == 0) {
      return 0;
    }
    var e = t & 3;
    if ((e = (e = (e = (e = e * (2 - (t & 15) * e) & 15) * (2 - (t & 255) * e) & 255) * (2 - ((t & 65535) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0) {
      return this.DV - e;
    } else {
      return -e;
    }
  };
  b.prototype.isEven = function () {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  };
  b.prototype.exp = function (t, e) {
    if (t > 4294967295 || t < 1) {
      return b.ONE;
    }
    var r = F();
    var i = F();
    var s = e.convert(this);
    var n = I(t) - 1;
    for (s.copyTo(r); --n >= 0;) {
      e.sqrTo(r, i);
      if ((t & 1 << n) > 0) {
        e.mulTo(i, s, r);
      } else {
        var a = r;
        r = i;
        i = a;
      }
    }
    return e.revert(r);
  };
  b.prototype.toString = function (t) {
    if (this.s < 0) {
      return "-" + this.negate().toString(t);
    }
    if (t == 16) {
      e = 4;
    } else if (t == 8) {
      e = 3;
    } else if (t == 2) {
      e = 1;
    } else if (t == 32) {
      e = 5;
    } else {
      if (t != 4) {
        return this.toRadix(t);
      }
      e = 2;
    }
    var e;
    var r;
    var i = (1 << e) - 1;
    var s = false;
    var n = "";
    var a = this.t;
    var o = this.DB - a * this.DB % e;
    if (a-- > 0) {
      for (o < this.DB && (r = this[a] >> o) > 0 && (s = true, n = A(r)); a >= 0;) {
        if (o < e) {
          r = (this[a] & (1 << o) - 1) << e - o | this[--a] >> (o += this.DB - e);
        } else {
          r = this[a] >> (o -= e) & i;
          if (o <= 0) {
            o += this.DB;
            --a;
          }
        }
        if (r > 0) {
          s = true;
        }
        if (s) {
          n += A(r);
        }
      }
    }
    if (s) {
      return n;
    } else {
      return "0";
    }
  };
  b.prototype.negate = function () {
    var t = F();
    b.ZERO.subTo(this, t);
    return t;
  };
  b.prototype.abs = function () {
    if (this.s < 0) {
      return this.negate();
    } else {
      return this;
    }
  };
  b.prototype.compareTo = function (t) {
    var e = this.s - t.s;
    if (e != 0) {
      return e;
    }
    var r = this.t;
    if ((e = r - t.t) != 0) {
      if (this.s < 0) {
        return -e;
      } else {
        return e;
      }
    }
    while (--r >= 0) {
      if ((e = this[r] - t[r]) != 0) {
        return e;
      }
    }
    return 0;
  };
  b.prototype.bitLength = function () {
    if (this.t <= 0) {
      return 0;
    } else {
      return this.DB * (this.t - 1) + I(this[this.t - 1] ^ this.s & this.DM);
    }
  };
  b.prototype.mod = function (t) {
    var e = F();
    this.abs().divRemTo(t, null, e);
    if (this.s < 0 && e.compareTo(b.ZERO) > 0) {
      t.subTo(e, e);
    }
    return e;
  };
  b.prototype.modPowInt = function (t, e) {
    var r;
    r = t < 256 || e.isEven() ? new C(e) : new R(e);
    return this.exp(t, r);
  };
  b.ZERO = P(0);
  b.ONE = P(1);
  O.prototype.convert = j;
  O.prototype.revert = j;
  O.prototype.mulTo = function (t, e, r) {
    t.multiplyTo(e, r);
  };
  O.prototype.sqrTo = function (t, e) {
    t.squareTo(e);
  };
  V.prototype.convert = function (t) {
    if (t.s < 0 || t.t > this.m.t * 2) {
      return t.mod(this.m);
    }
    if (t.compareTo(this.m) < 0) {
      return t;
    }
    var e = F();
    t.copyTo(e);
    this.reduce(e);
    return e;
  };
  V.prototype.revert = function (t) {
    return t;
  };
  V.prototype.reduce = function (t) {
    t.drShiftTo(this.m.t - 1, this.r2);
    if (t.t > this.m.t + 1) {
      t.t = this.m.t + 1;
      t.clamp();
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    while (t.compareTo(this.r2) < 0) {
      t.dAddOffset(1, this.m.t + 1);
    }
    for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) {
      t.subTo(this.m, t);
    }
  };
  V.prototype.mulTo = function (t, e, r) {
    t.multiplyTo(e, r);
    this.reduce(r);
  };
  V.prototype.sqrTo = function (t, e) {
    t.squareTo(e);
    this.reduce(e);
  };
  var K = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  var L = 67108864 / K[K.length - 1];
  function k() {
    this.i = 0;
    this.j = 0;
    this.S = [];
  }
  function q() {
    var t;
    t = new Date().getTime();
    tX[t$++] ^= t & 255;
    tX[t$++] ^= t >> 8 & 255;
    tX[t$++] ^= t >> 16 & 255;
    tX[t$++] ^= t >> 24 & 255;
    if (t$ >= 256) {
      t$ -= 256;
    }
  }
  b.prototype.chunkSize = function (t) {
    return Math.floor(Math.LN2 * this.DB / Math.log(t));
  };
  b.prototype.toRadix = function (t) {
    if (t == null) {
      t = 10;
    }
    if (this.signum() == 0 || t < 2 || t > 36) {
      return "0";
    }
    var e = this.chunkSize(t);
    var r = Math.pow(t, e);
    var i = P(r);
    var s = F();
    var n = F();
    var a = "";
    for (this.divRemTo(i, s, n); s.signum() > 0;) {
      a = (r + n.intValue()).toString(t).substr(1) + a;
      s.divRemTo(i, s, n);
    }
    return n.intValue().toString(t) + a;
  };
  b.prototype.fromRadix = function (t, e) {
    this.fromInt(0);
    if (e == null) {
      e = 10;
    }
    var r = this.chunkSize(e);
    var i = Math.pow(e, r);
    var s = false;
    var n = 0;
    var a = 0;
    var o = 0;
    for (; o < t.length; ++o) {
      var h = D(t, o);
      if (h < 0) {
        if (t.charAt(o) == "-" && this.signum() == 0) {
          s = true;
        }
        continue;
      }
      a = e * a + h;
      if (++n >= r) {
        this.dMultiply(i);
        this.dAddOffset(a, 0);
        n = 0;
        a = 0;
      }
    }
    if (n > 0) {
      this.dMultiply(Math.pow(e, n));
      this.dAddOffset(a, 0);
    }
    if (s) {
      b.ZERO.subTo(this, this);
    }
  };
  b.prototype.fromNumber = function (t, e, r) {
    if (typeof e == "number") {
      if (t < 2) {
        this.fromInt(1);
      } else {
        this.fromNumber(t, r);
        if (!this.testBit(t - 1)) {
          this.bitwiseTo(b.ONE.shiftLeft(t - 1), B, this);
        }
        if (this.isEven()) {
          this.dAddOffset(1, 0);
        }
        while (!this.isProbablePrime(e)) {
          this.dAddOffset(2, 0);
          if (this.bitLength() > t) {
            this.subTo(b.ONE.shiftLeft(t - 1), this);
          }
        }
      }
    } else {
      var i = [];
      var s = t & 7;
      i.length = (t >> 3) + 1;
      e.nextBytes(i);
      if (s > 0) {
        i[0] &= (1 << s) - 1;
      } else {
        i[0] = 0;
      }
      this.fromString(i, 256);
    }
  };
  b.prototype.bitwiseTo = function (t, e, r) {
    var i;
    var s;
    var n = Math.min(t.t, this.t);
    for (i = 0; i < n; ++i) {
      r[i] = e(this[i], t[i]);
    }
    if (t.t < this.t) {
      s = t.s & this.DM;
      i = n;
      for (; i < this.t; ++i) {
        r[i] = e(this[i], s);
      }
      r.t = this.t;
    } else {
      s = this.s & this.DM;
      i = n;
      for (; i < t.t; ++i) {
        r[i] = e(s, t[i]);
      }
      r.t = t.t;
    }
    r.s = e(this.s, t.s);
    r.clamp();
  };
  b.prototype.changeBit = function (t, e) {
    var r = b.ONE.shiftLeft(t);
    this.bitwiseTo(r, e, r);
    return r;
  };
  b.prototype.addTo = function (t, e) {
    var r = 0;
    var i = 0;
    var s = Math.min(t.t, this.t);
    while (r < s) {
      i += this[r] + t[r];
      e[r++] = i & this.DM;
      i >>= this.DB;
    }
    if (t.t < this.t) {
      for (i += t.s; r < this.t;) {
        i += this[r];
        e[r++] = i & this.DM;
        i >>= this.DB;
      }
      i += this.s;
    } else {
      for (i += this.s; r < t.t;) {
        i += t[r];
        e[r++] = i & this.DM;
        i >>= this.DB;
      }
      i += t.s;
    }
    e.s = i < 0 ? -1 : 0;
    if (i > 0) {
      e[r++] = i;
    } else if (i < -1) {
      e[r++] = this.DV + i;
    }
    e.t = r;
    e.clamp();
  };
  b.prototype.dMultiply = function (t) {
    this[this.t] = this.am(0, t - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  };
  b.prototype.dAddOffset = function (t, e) {
    if (t != 0) {
      while (this.t <= e) {
        this[this.t++] = 0;
      }
      for (this[e] += t; this[e] >= this.DV;) {
        this[e] -= this.DV;
        if (++e >= this.t) {
          this[this.t++] = 0;
        }
        ++this[e];
      }
    }
  };
  b.prototype.multiplyLowerTo = function (t, e, r) {
    var i;
    var s = Math.min(this.t + t.t, e);
    r.s = 0;
    r.t = s;
    while (s > 0) {
      r[--s] = 0;
    }
    for (i = r.t - this.t; s < i; ++s) {
      r[s + this.t] = this.am(0, t[s], r, s, 0, this.t);
    }
    for (i = Math.min(t.t, e); s < i; ++s) {
      this.am(0, t[s], r, s, 0, e - s);
    }
    r.clamp();
  };
  b.prototype.multiplyUpperTo = function (t, e, r) {
    --e;
    var i = r.t = this.t + t.t - e;
    for (r.s = 0; --i >= 0;) {
      r[i] = 0;
    }
    for (i = Math.max(e - this.t, 0); i < t.t; ++i) {
      r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
    }
    r.clamp();
    r.drShiftTo(1, r);
  };
  b.prototype.modInt = function (t) {
    if (t <= 0) {
      return 0;
    }
    var e = this.DV % t;
    var r = this.s < 0 ? t - 1 : 0;
    if (this.t > 0) {
      if (e == 0) {
        r = this[0] % t;
      } else {
        for (var i = this.t - 1; i >= 0; --i) {
          r = (e * r + this[i]) % t;
        }
      }
    }
    return r;
  };
  b.prototype.millerRabin = function (t) {
    var e = this.subtract(b.ONE);
    var r = e.getLowestSetBit();
    if (r <= 0) {
      return false;
    }
    var i = e.shiftRight(r);
    if ((t = t + 1 >> 1) > K.length) {
      t = K.length;
    }
    var s = F();
    var n = 0;
    for (; n < t; ++n) {
      s.fromInt(K[Math.floor(Math.random() * K.length)]);
      var a = s.modPow(i, this);
      if (a.compareTo(b.ONE) != 0 && a.compareTo(e) != 0) {
        for (var o = 1; o++ < r && a.compareTo(e) != 0;) {
          if ((a = a.modPowInt(2, this)).compareTo(b.ONE) == 0) {
            return false;
          }
        }
        if (a.compareTo(e) != 0) {
          return false;
        }
      }
    }
    return true;
  };
  b.prototype.clone = function () {
    var t = F();
    this.copyTo(t);
    return t;
  };
  b.prototype.intValue = function () {
    if (this.s < 0) {
      if (this.t == 1) {
        return this[0] - this.DV;
      }
      if (this.t == 0) {
        return -1;
      }
    } else {
      if (this.t == 1) {
        return this[0];
      }
      if (this.t == 0) {
        return 0;
      }
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
  };
  b.prototype.byteValue = function () {
    if (this.t == 0) {
      return this.s;
    } else {
      return this[0] << 24 >> 24;
    }
  };
  b.prototype.shortValue = function () {
    if (this.t == 0) {
      return this.s;
    } else {
      return this[0] << 16 >> 16;
    }
  };
  b.prototype.signum = function () {
    if (this.s < 0) {
      return -1;
    } else if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
      return 0;
    } else {
      return 1;
    }
  };
  b.prototype.toByteArray = function () {
    var t = this.t;
    var e = [];
    e[0] = this.s;
    var r;
    var i = this.DB - t * this.DB % 8;
    var s = 0;
    if (t-- > 0) {
      for (i < this.DB && (r = this[t] >> i) != (this.s & this.DM) >> i && (e[s++] = r | this.s << this.DB - i); t >= 0;) {
        if (i < 8) {
          r = (this[t] & (1 << i) - 1) << 8 - i | this[--t] >> (i += this.DB - 8);
        } else {
          r = this[t] >> (i -= 8) & 255;
          if (i <= 0) {
            i += this.DB;
            --t;
          }
        }
        if ((r & 128) != 0) {
          r |= -256;
        }
        if (s == 0 && (this.s & 128) != (r & 128)) {
          ++s;
        }
        if (s > 0 || r != this.s) {
          e[s++] = r;
        }
      }
    }
    return e;
  };
  b.prototype.equals = function (t) {
    return this.compareTo(t) == 0;
  };
  b.prototype.min = function (t) {
    if (this.compareTo(t) < 0) {
      return this;
    } else {
      return t;
    }
  };
  b.prototype.max = function (t) {
    if (this.compareTo(t) > 0) {
      return this;
    } else {
      return t;
    }
  };
  b.prototype.and = function (t) {
    var e = F();
    this.bitwiseTo(t, T, e);
    return e;
  };
  b.prototype.or = function (t) {
    var e = F();
    this.bitwiseTo(t, B, e);
    return e;
  };
  b.prototype.xor = function (t) {
    var e = F();
    this.bitwiseTo(t, N, e);
    return e;
  };
  b.prototype.andNot = function (t) {
    var e = F();
    this.bitwiseTo(t, H, e);
    return e;
  };
  b.prototype.not = function () {
    var t = F();
    var e = 0;
    for (; e < this.t; ++e) {
      t[e] = this.DM & ~this[e];
    }
    t.t = this.t;
    t.s = ~this.s;
    return t;
  };
  b.prototype.shiftLeft = function (t) {
    var e = F();
    if (t < 0) {
      this.rShiftTo(-t, e);
    } else {
      this.lShiftTo(t, e);
    }
    return e;
  };
  b.prototype.shiftRight = function (t) {
    var e = F();
    if (t < 0) {
      this.lShiftTo(-t, e);
    } else {
      this.rShiftTo(t, e);
    }
    return e;
  };
  b.prototype.getLowestSetBit = function () {
    for (var t = 0; t < this.t; ++t) {
      if (this[t] != 0) {
        return t * this.DB + function (t) {
          if (t == 0) {
            return -1;
          }
          var e = 0;
          if ((t & 65535) == 0) {
            t >>= 16;
            e += 16;
          }
          if ((t & 255) == 0) {
            t >>= 8;
            e += 8;
          }
          if ((t & 15) == 0) {
            t >>= 4;
            e += 4;
          }
          if ((t & 3) == 0) {
            t >>= 2;
            e += 2;
          }
          if ((t & 1) == 0) {
            ++e;
          }
          return e;
        }(this[t]);
      }
    }
    if (this.s < 0) {
      return this.t * this.DB;
    } else {
      return -1;
    }
  };
  b.prototype.bitCount = function () {
    var t = 0;
    var e = this.s & this.DM;
    var r = 0;
    for (; r < this.t; ++r) {
      t += function (t) {
        var e = 0;
        for (; t != 0;) {
          t &= t - 1;
          ++e;
        }
        return e;
      }(this[r] ^ e);
    }
    return t;
  };
  b.prototype.testBit = function (t) {
    var e = Math.floor(t / this.DB);
    if (e >= this.t) {
      return this.s != 0;
    } else {
      return (this[e] & 1 << t % this.DB) != 0;
    }
  };
  b.prototype.setBit = function (t) {
    return this.changeBit(t, B);
  };
  b.prototype.clearBit = function (t) {
    return this.changeBit(t, H);
  };
  b.prototype.flipBit = function (t) {
    return this.changeBit(t, N);
  };
  b.prototype.add = function (t) {
    var e = F();
    this.addTo(t, e);
    return e;
  };
  b.prototype.subtract = function (t) {
    var e = F();
    this.subTo(t, e);
    return e;
  };
  b.prototype.multiply = function (t) {
    var e = F();
    this.multiplyTo(t, e);
    return e;
  };
  b.prototype.divide = function (t) {
    var e = F();
    this.divRemTo(t, e, null);
    return e;
  };
  b.prototype.remainder = function (t) {
    var e = F();
    this.divRemTo(t, null, e);
    return e;
  };
  b.prototype.divideAndRemainder = function (t) {
    var e = F();
    var r = F();
    this.divRemTo(t, e, r);
    return [e, r];
  };
  b.prototype.modPow = function (t, e) {
    var r;
    var i;
    var s = t.bitLength();
    var n = P(1);
    if (s <= 0) {
      return n;
    }
    r = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6;
    i = s < 8 ? new C(e) : e.isEven() ? new V(e) : new R(e);
    var a = [];
    var o = 3;
    var h = r - 1;
    var u = (1 << r) - 1;
    a[1] = i.convert(this);
    if (r > 1) {
      var c = F();
      for (i.sqrTo(a[1], c); o <= u;) {
        a[o] = F();
        i.mulTo(c, a[o - 2], a[o]);
        o += 2;
      }
    }
    var l;
    var f;
    var d = t.t - 1;
    var p = true;
    var g = F();
    for (s = I(t[d]) - 1; d >= 0;) {
      if (s >= h) {
        l = t[d] >> s - h & u;
      } else {
        l = (t[d] & (1 << s + 1) - 1) << h - s;
        if (d > 0) {
          l |= t[d - 1] >> this.DB + s - h;
        }
      }
      o = r;
      while ((l & 1) == 0) {
        l >>= 1;
        --o;
      }
      if ((s -= o) < 0) {
        s += this.DB;
        --d;
      }
      if (p) {
        a[l].copyTo(n);
        p = false;
      } else {
        while (o > 1) {
          i.sqrTo(n, g);
          i.sqrTo(g, n);
          o -= 2;
        }
        if (o > 0) {
          i.sqrTo(n, g);
        } else {
          f = n;
          n = g;
          g = f;
        }
        i.mulTo(g, a[l], n);
      }
      while (d >= 0 && (t[d] & 1 << s) == 0) {
        i.sqrTo(n, g);
        f = n;
        n = g;
        g = f;
        if (--s < 0) {
          s = this.DB - 1;
          --d;
        }
      }
    }
    return i.revert(n);
  };
  b.prototype.modInverse = function (t) {
    var e = t.isEven();
    if (this.isEven() && e || t.signum() == 0) {
      return b.ZERO;
    }
    var r = t.clone();
    var i = this.clone();
    var s = P(1);
    var n = P(0);
    var a = P(0);
    var o = P(1);
    while (r.signum() != 0) {
      while (r.isEven()) {
        r.rShiftTo(1, r);
        if (e) {
          if (!s.isEven() || !n.isEven()) {
            s.addTo(this, s);
            n.subTo(t, n);
          }
          s.rShiftTo(1, s);
        } else if (!n.isEven()) {
          n.subTo(t, n);
        }
        n.rShiftTo(1, n);
      }
      while (i.isEven()) {
        i.rShiftTo(1, i);
        if (e) {
          if (!a.isEven() || !o.isEven()) {
            a.addTo(this, a);
            o.subTo(t, o);
          }
          a.rShiftTo(1, a);
        } else if (!o.isEven()) {
          o.subTo(t, o);
        }
        o.rShiftTo(1, o);
      }
      if (r.compareTo(i) >= 0) {
        r.subTo(i, r);
        if (e) {
          s.subTo(a, s);
        }
        n.subTo(o, n);
      } else {
        i.subTo(r, i);
        if (e) {
          a.subTo(s, a);
        }
        o.subTo(n, o);
      }
    }
    if (i.compareTo(b.ONE) != 0) {
      return b.ZERO;
    } else if (o.compareTo(t) >= 0) {
      return o.subtract(t);
    } else if (o.signum() < 0 && (o.addTo(t, o), o.signum() < 0)) {
      return o.add(t);
    } else {
      return o;
    }
  };
  b.prototype.pow = function (t) {
    return this.exp(t, new O());
  };
  b.prototype.gcd = function (t) {
    var e = this.s < 0 ? this.negate() : this.clone();
    var r = t.s < 0 ? t.negate() : t.clone();
    if (e.compareTo(r) < 0) {
      var i = e;
      e = r;
      r = i;
    }
    var s = e.getLowestSetBit();
    var n = r.getLowestSetBit();
    if (n < 0) {
      return e;
    }
    if (s < n) {
      n = s;
    }
    if (n > 0) {
      e.rShiftTo(n, e);
      r.rShiftTo(n, r);
    }
    while (e.signum() > 0) {
      if ((s = e.getLowestSetBit()) > 0) {
        e.rShiftTo(s, e);
      }
      if ((s = r.getLowestSetBit()) > 0) {
        r.rShiftTo(s, r);
      }
      if (e.compareTo(r) >= 0) {
        e.subTo(r, e);
        e.rShiftTo(1, e);
      } else {
        r.subTo(e, r);
        r.rShiftTo(1, r);
      }
    }
    if (n > 0) {
      r.lShiftTo(n, r);
    }
    return r;
  };
  b.prototype.isProbablePrime = function (t) {
    var e;
    var r = this.abs();
    if (r.t == 1 && r[0] <= K[K.length - 1]) {
      for (e = 0; e < K.length; ++e) {
        if (r[0] == K[e]) {
          return true;
        }
      }
      return false;
    }
    if (r.isEven()) {
      return false;
    }
    for (e = 1; e < K.length;) {
      var i = K[e];
      var s = e + 1;
      while (s < K.length && i < L) {
        i *= K[s++];
      }
      for (i = r.modInt(i); e < s;) {
        if (i % K[e++] == 0) {
          return false;
        }
      }
    }
    return r.millerRabin(t);
  };
  b.prototype.square = function () {
    var t = F();
    this.squareTo(t);
    return t;
  };
  k.prototype.init = function (t) {
    var e;
    var r;
    var i;
    for (e = 0; e < 256; ++e) {
      this.S[e] = e;
    }
    e = 0;
    r = 0;
    for (; e < 256; ++e) {
      r = r + this.S[e] + t[e % t.length] & 255;
      i = this.S[e];
      this.S[e] = this.S[r];
      this.S[r] = i;
    }
    this.i = 0;
    this.j = 0;
  };
  k.prototype.next = function () {
    var t;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[t + this.S[this.i] & 255];
  };
  if (tX == null) {
    tX = [];
    t$ = 0;
    if (x !== undefined && (x.crypto !== undefined || x.msCrypto !== undefined)) {
      var M;
      var _;
      var U;
      var G;
      var z;
      var W;
      var J;
      var X;
      var $;
      var Y;
      var Z;
      var Q;
      var tt;
      var te;
      var tr;
      var ti;
      var ts;
      var tn;
      var ta;
      var to;
      var th;
      var tu;
      var tc;
      var tl;
      var tf;
      var td;
      var tp;
      var tg;
      var tv;
      var tx;
      var tm;
      var ty;
      var tS;
      var tE;
      var tb;
      var tF;
      var tw;
      var tA;
      var tD;
      var tP;
      var tI;
      var tC;
      var tR;
      var tT;
      var tB;
      var tN;
      var tH;
      var tO;
      var tj;
      var tV;
      var tK;
      var tL;
      var tk;
      var tq;
      var tM;
      var t_;
      var tU;
      var tG;
      var tz;
      var tW;
      var tJ;
      var tX;
      var t$;
      var tY;
      var tZ = x.crypto || x.msCrypto;
      if (tZ.getRandomValues) {
        var tQ = new Uint8Array(32);
        tZ.getRandomValues(tQ);
        tY = 0;
        for (; tY < 32; ++tY) {
          tX[t$++] = tQ[tY];
        }
      } else if (v.appName == "Netscape" && v.appVersion < "5") {
        var t0 = x.crypto.random(32);
        for (tY = 0; tY < t0.length; ++tY) {
          tX[t$++] = t0.charCodeAt(tY) & 255;
        }
      }
    }
    while (t$ < 256) {
      tY = Math.floor(Math.random() * 65536);
      tX[t$++] = tY >>> 8;
      tX[t$++] = tY & 255;
    }
    t$ = 0;
    q();
  }
  function t1() {}
  function t2(t, e) {
    return new b(t, e);
  }
  function t5() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
  }
  function t4(t, e) {
    this.x = e;
    this.q = t;
  }
  function t8(t, e, r, i) {
    this.curve = t;
    this.x = e;
    this.y = r;
    if (i == null) {
      this.z = b.ONE;
    } else {
      this.z = i;
    }
    this.zinv = null;
  }
  function t3(t, e, r) {
    this.q = t;
    this.a = this.fromBigInteger(e);
    this.b = this.fromBigInteger(r);
    this.infinity = new t8(this, null, null);
  }
  t1.prototype.nextBytes = function (t) {
    var e;
    for (e = 0; e < t.length; ++e) {
      t[e] = function () {
        if (tJ == null) {
          q();
          (tJ = new k()).init(tX);
          t$ = 0;
          for (; t$ < tX.length; ++t$) {
            tX[t$] = 0;
          }
          t$ = 0;
        }
        return tJ.next();
      }();
    }
  };
  t5.prototype.doPublic = function (t) {
    return t.modPowInt(this.e, this.n);
  };
  t5.prototype.setPublic = function (t, e) {
    this.isPublic = true;
    this.isPrivate = false;
    if (typeof t != "string") {
      this.n = t;
      this.e = e;
    } else if (t != null && e != null && t.length > 0 && e.length > 0) {
      this.n = t2(t, 16);
      this.e = parseInt(e, 16);
    } else {
      throw "Invalid RSA public key";
    }
  };
  t5.prototype.type = "RSA";
  t5.prototype.doPrivate = function (t) {
    if (this.p == null || this.q == null) {
      return t.modPow(this.d, this.n);
    }
    var e = t.mod(this.p).modPow(this.dmp1, this.p);
    var r = t.mod(this.q).modPow(this.dmq1, this.q);
    while (e.compareTo(r) < 0) {
      e = e.add(this.p);
    }
    return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
  };
  t5.prototype.setPrivate = function (t, e, r) {
    this.isPrivate = true;
    if (typeof t != "string") {
      this.n = t;
      this.e = e;
      this.d = r;
    } else if (t != null && e != null && t.length > 0 && e.length > 0) {
      this.n = t2(t, 16);
      this.e = parseInt(e, 16);
      this.d = t2(r, 16);
    } else {
      throw "Invalid RSA private key";
    }
  };
  t5.prototype.setPrivateEx = function (t, e, r, i, s, n, a, o) {
    this.isPrivate = true;
    this.isPublic = false;
    if (t == null) {
      throw "RSASetPrivateEx N == null";
    }
    if (e == null) {
      throw "RSASetPrivateEx E == null";
    }
    if (t.length == 0) {
      throw "RSASetPrivateEx N.length == 0";
    }
    if (e.length == 0) {
      throw "RSASetPrivateEx E.length == 0";
    }
    if (t != null && e != null && t.length > 0 && e.length > 0) {
      this.n = t2(t, 16);
      this.e = parseInt(e, 16);
      this.d = t2(r, 16);
      this.p = t2(i, 16);
      this.q = t2(s, 16);
      this.dmp1 = t2(n, 16);
      this.dmq1 = t2(a, 16);
      this.coeff = t2(o, 16);
    } else {
      throw "Invalid RSA private key in RSASetPrivateEx";
    }
  };
  t5.prototype.generate = function (t, e) {
    var r = new t1();
    var i = t >> 1;
    this.e = parseInt(e, 16);
    var s = new b(e, 16);
    var n = t / 2 - 100;
    var a = b.ONE.shiftLeft(n);
    while (true) {
      while (this.p = new b(t - i, 1, r), this.p.subtract(b.ONE).gcd(s).compareTo(b.ONE) != 0 || !this.p.isProbablePrime(10));
      while (this.q = new b(i, 1, r), this.q.subtract(b.ONE).gcd(s).compareTo(b.ONE) != 0 || !this.q.isProbablePrime(10));
      if (this.p.compareTo(this.q) <= 0) {
        var o = this.p;
        this.p = this.q;
        this.q = o;
      }
      var h = this.q.subtract(this.p).abs();
      if (!(h.bitLength() < n) && !(h.compareTo(a) <= 0)) {
        var u = this.p.subtract(b.ONE);
        var c = this.q.subtract(b.ONE);
        var l = u.multiply(c);
        if (l.gcd(s).compareTo(b.ONE) == 0 && (this.n = this.p.multiply(this.q), this.n.bitLength() == t)) {
          this.d = s.modInverse(l);
          this.dmp1 = this.d.mod(u);
          this.dmq1 = this.d.mod(c);
          this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }
    this.isPrivate = true;
  };
  t4.prototype.equals = function (t) {
    return t == this || this.q.equals(t.q) && this.x.equals(t.x);
  };
  t4.prototype.toBigInteger = function () {
    return this.x;
  };
  t4.prototype.negate = function () {
    return new t4(this.q, this.x.negate().mod(this.q));
  };
  t4.prototype.add = function (t) {
    return new t4(this.q, this.x.add(t.toBigInteger()).mod(this.q));
  };
  t4.prototype.subtract = function (t) {
    return new t4(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
  };
  t4.prototype.multiply = function (t) {
    return new t4(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
  };
  t4.prototype.square = function () {
    return new t4(this.q, this.x.square().mod(this.q));
  };
  t4.prototype.divide = function (t) {
    return new t4(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
  };
  t4.prototype.sqrt = function () {
    return new t4(this.q, this.x.sqrt().mod(this.q));
  };
  t8.prototype.getX = function () {
    if (this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  };
  t8.prototype.getY = function () {
    if (this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  };
  t8.prototype.equals = function (t) {
    return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(b.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(b.ZERO));
  };
  t8.prototype.isInfinity = function () {
    return this.x == null && this.y == null || this.z.equals(b.ZERO) && !this.y.toBigInteger().equals(b.ZERO);
  };
  t8.prototype.negate = function () {
    return new t8(this.curve, this.x, this.y.negate(), this.z);
  };
  t8.prototype.add = function (t) {
    if (this.isInfinity()) {
      return t;
    }
    if (t.isInfinity()) {
      return this;
    }
    var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q);
    var r = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
    if (b.ZERO.equals(r)) {
      if (b.ZERO.equals(e)) {
        return this.twice();
      } else {
        return this.curve.getInfinity();
      }
    }
    var i = new b("3");
    var s = this.x.toBigInteger();
    var n = this.y.toBigInteger();
    t.x.toBigInteger();
    t.y.toBigInteger();
    var a = r.square();
    var o = a.multiply(r);
    var h = s.multiply(a);
    var u = e.square().multiply(this.z);
    var c = u.subtract(h.shiftLeft(1)).multiply(t.z).subtract(o).multiply(r).mod(this.curve.q);
    var l = h.multiply(i).multiply(e).subtract(n.multiply(o)).subtract(u.multiply(e)).multiply(t.z).add(e.multiply(o)).mod(this.curve.q);
    var f = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
    return new t8(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(l), f);
  };
  t8.prototype.twice = function () {
    if (this.isInfinity()) {
      return this;
    }
    if (this.y.toBigInteger().signum() == 0) {
      return this.curve.getInfinity();
    }
    var t = new b("3");
    var e = this.x.toBigInteger();
    var r = this.y.toBigInteger();
    var i = r.multiply(this.z);
    var s = i.multiply(r).mod(this.curve.q);
    var n = this.curve.a.toBigInteger();
    var a = e.square().multiply(t);
    if (!b.ZERO.equals(n)) {
      a = a.add(this.z.square().multiply(n));
    }
    var o = (a = a.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(s)).shiftLeft(1).multiply(i).mod(this.curve.q);
    var h = a.multiply(t).multiply(e).subtract(s.shiftLeft(1)).shiftLeft(2).multiply(s).subtract(a.square().multiply(a)).mod(this.curve.q);
    var u = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
    return new t8(this.curve, this.curve.fromBigInteger(o), this.curve.fromBigInteger(h), u);
  };
  t8.prototype.multiply = function (t) {
    if (this.isInfinity()) {
      return this;
    }
    if (t.signum() == 0) {
      return this.curve.getInfinity();
    }
    var e;
    var r = t.multiply(new b("3"));
    var i = this.negate();
    var s = this;
    var n = this.curve.q.subtract(t);
    var a = n.multiply(new b("3"));
    var o = new t8(this.curve, this.x, this.y);
    var h = o.negate();
    for (e = r.bitLength() - 2; e > 0; --e) {
      s = s.twice();
      var u = r.testBit(e);
      if (u != t.testBit(e)) {
        s = s.add(u ? this : i);
      }
    }
    for (e = a.bitLength() - 2; e > 0; --e) {
      o = o.twice();
      var c = a.testBit(e);
      if (c != n.testBit(e)) {
        o = o.add(c ? o : h);
      }
    }
    return s;
  };
  t8.prototype.multiplyTwo = function (t, e, r) {
    i = t.bitLength() > r.bitLength() ? t.bitLength() - 1 : r.bitLength() - 1;
    var i;
    var s = this.curve.getInfinity();
    var n = this.add(e);
    while (i >= 0) {
      s = s.twice();
      if (t.testBit(i)) {
        s = r.testBit(i) ? s.add(n) : s.add(this);
      } else if (r.testBit(i)) {
        s = s.add(e);
      }
      --i;
    }
    return s;
  };
  t3.prototype.getQ = function () {
    return this.q;
  };
  t3.prototype.getA = function () {
    return this.a;
  };
  t3.prototype.getB = function () {
    return this.b;
  };
  t3.prototype.equals = function (t) {
    return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
  };
  t3.prototype.getInfinity = function () {
    return this.infinity;
  };
  t3.prototype.fromBigInteger = function (t) {
    return new t4(this.q, t);
  };
  t3.prototype.decodePointHex = function (t) {
    switch (parseInt(t.substr(0, 2), 16)) {
      case 0:
        return this.infinity;
      case 2:
      case 3:
        var e = t.substr(0, 2);
        t.substr(2);
        var r = this.fromBigInteger(new b(o, 16));
        var i = this.getA();
        var s = this.getB();
        var n = r.square().add(i).multiply(r).add(s).sqrt();
        if (e == "03") {
          n = n.negate();
        }
        return new t8(this, r, n);
      case 4:
      case 6:
      case 7:
        var a = (t.length - 2) / 2;
        var o = t.substr(2, a);
        var h = t.substr(a + 2, a);
        return new t8(this, this.fromBigInteger(new b(o, 16)), this.fromBigInteger(new b(h, 16)));
      default:
        return null;
    }
  };
  t4.prototype.getByteLength = function () {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
  };
  t8.prototype.getEncoded = function (t) {
    function e(t, e) {
      var r = t.toByteArrayUnsigned();
      if (e < r.length) {
        r = r.slice(r.length - e);
      } else {
        while (e > r.length) {
          r.unshift(0);
        }
      }
      return r;
    }
    var r = this.getX().toBigInteger();
    var i = this.getY().toBigInteger();
    var s = e(r, 32);
    if (t) {
      if (i.isEven()) {
        s.unshift(2);
      } else {
        s.unshift(3);
      }
    } else {
      s.unshift(4);
      s = s.concat(e(i, 32));
    }
    return s;
  };
  t8.decodeFrom = function (t, e) {
    e[0];
    var r = e.length - 1;
    var i = e.slice(1, 1 + r / 2);
    var s = e.slice(1 + r / 2, 1 + r);
    i.unshift(0);
    s.unshift(0);
    var n = new b(i);
    var a = new b(s);
    return new t8(t, t.fromBigInteger(n), t.fromBigInteger(a));
  };
  t8.decodeFromHex = function (t, e) {
    e.substr(0, 2);
    var r = e.length - 2;
    var i = e.substr(2, r / 2);
    var s = e.substr(2 + r / 2, r / 2);
    var n = new b(i, 16);
    var a = new b(s, 16);
    return new t8(t, t.fromBigInteger(n), t.fromBigInteger(a));
  };
  t8.prototype.add2D = function (t) {
    if (this.isInfinity()) {
      return t;
    }
    if (t.isInfinity()) {
      return this;
    }
    if (this.x.equals(t.x)) {
      if (this.y.equals(t.y)) {
        return this.twice();
      } else {
        return this.curve.getInfinity();
      }
    }
    var e = t.x.subtract(this.x);
    var r = t.y.subtract(this.y).divide(e);
    var i = r.square().subtract(this.x).subtract(t.x);
    var s = r.multiply(this.x.subtract(i)).subtract(this.y);
    return new t8(this.curve, i, s);
  };
  t8.prototype.twice2D = function () {
    if (this.isInfinity()) {
      return this;
    }
    if (this.y.toBigInteger().signum() == 0) {
      return this.curve.getInfinity();
    }
    var t = this.curve.fromBigInteger(b.valueOf(2));
    var e = this.curve.fromBigInteger(b.valueOf(3));
    var r = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t));
    var i = r.square().subtract(this.x.multiply(t));
    var s = r.multiply(this.x.subtract(i)).subtract(this.y);
    return new t8(this.curve, i, s);
  };
  t8.prototype.multiply2D = function (t) {
    if (this.isInfinity()) {
      return this;
    }
    if (t.signum() == 0) {
      return this.curve.getInfinity();
    }
    var e;
    var r = t.multiply(new b("3"));
    var i = this.negate();
    var s = this;
    for (e = r.bitLength() - 2; e > 0; --e) {
      s = s.twice();
      var n = r.testBit(e);
      if (n != t.testBit(e)) {
        s = s.add2D(n ? this : i);
      }
    }
    return s;
  };
  t8.prototype.isOnCurve = function () {
    var t = this.getX().toBigInteger();
    var e = this.getY().toBigInteger();
    var r = this.curve.getA().toBigInteger();
    var i = this.curve.getB().toBigInteger();
    var s = this.curve.getQ();
    var n = e.multiply(e).mod(s);
    var a = t.multiply(t).multiply(t).add(r.multiply(t)).add(i).mod(s);
    return n.equals(a);
  };
  t8.prototype.toString = function () {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
  };
  t8.prototype.validate = function () {
    var t = this.curve.getQ();
    if (this.isInfinity()) {
      throw Error("Point is at infinity.");
    }
    var e = this.getX().toBigInteger();
    var r = this.getY().toBigInteger();
    if (e.compareTo(b.ONE) < 0 || e.compareTo(t.subtract(b.ONE)) > 0) {
      throw Error("x coordinate out of bounds");
    }
    if (r.compareTo(b.ONE) < 0 || r.compareTo(t.subtract(b.ONE)) > 0) {
      throw Error("y coordinate out of bounds");
    }
    if (!this.isOnCurve()) {
      throw Error("Point is not on the curve.");
    }
    if (this.multiply(t).isInfinity()) {
      throw Error("Point is not a scalar multiple of G.");
    }
    return true;
  };
  var t6 = function () {
    var t = RegExp("(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:\"(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*\"))", "g");
    var e = RegExp("\\\\(?:([^u])|u(.{4}))", "g");
    var r = {
      "\"": "\"",
      "/": "/",
      "\\": "\\",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t"
    };
    function i(t, e, i) {
      if (e) {
        return r[e];
      } else {
        return String.fromCharCode(parseInt(i, 16));
      }
    }
    var s = new String("");
    var n = Object.hasOwnProperty;
    return function (r, a) {
      var o;
      var h;
      var u;
      var c = r.match(t);
      var l = c[0];
      var f = false;
      if (l === "{") {
        o = {};
      } else if (l === "[") {
        o = [];
      } else {
        o = [];
        f = true;
      }
      var d = [o];
      var p = 1 - f;
      var g = c.length;
      for (; p < g; ++p) {
        switch ((l = c[p]).charCodeAt(0)) {
          default:
            (u = d[0])[h || u.length] = +l;
            h = undefined;
            break;
          case 34:
            if ((l = l.substring(1, l.length - 1)).indexOf("\\") !== -1) {
              l = l.replace(e, i);
            }
            u = d[0];
            if (!h) {
              if (u instanceof Array) {
                h = u.length;
              } else {
                h = l || s;
                break;
              }
            }
            u[h] = l;
            h = undefined;
            break;
          case 91:
            u = d[0];
            d.unshift(u[h || u.length] = []);
            h = undefined;
            break;
          case 93:
          case 125:
            d.shift();
            break;
          case 102:
            (u = d[0])[h || u.length] = false;
            h = undefined;
            break;
          case 110:
            (u = d[0])[h || u.length] = null;
            h = undefined;
            break;
          case 116:
            (u = d[0])[h || u.length] = true;
            h = undefined;
            break;
          case 123:
            u = d[0];
            d.unshift(u[h || u.length] = {});
            h = undefined;
        }
      }
      if (f) {
        if (d.length !== 1) {
          throw Error();
        }
        o = o[0];
      } else if (d.length) {
        throw Error();
      }
      if (a) {
        function v(t, e) {
          var r = t[e];
          if (r && typeof r == "object") {
            var i = null;
            for (var s in r) {
              if (n.call(r, s) && r !== t) {
                var o = v(r, s);
                if (o !== undefined) {
                  r[s] = o;
                } else {
                  i ||= [];
                  i.push(s);
                }
              }
            }
            if (i) {
              for (var h = i.length; --h >= 0;) {
                delete r[i[h]];
              }
            }
          }
          return a.call(t, e, r);
        }
        o = v({
          "": o
        }, "");
      }
      return o;
    };
  }();
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  f.asn1.ASN1Util = new function () {
    this.integerToByteHex = function (t) {
      var e = t.toString(16);
      if (e.length % 2 == 1) {
        e = "0" + e;
      }
      return e;
    };
    this.bigIntToMinTwosComplementsHex = function (t) {
      return eA(t);
    };
    this.getPEMStringFromHex = function (t, e) {
      return ec(t, e);
    };
    this.newObject = function (t) {
      var e = f.asn1;
      var r = e.ASN1Object;
      var i = e.DERBoolean;
      var s = e.DERInteger;
      var n = e.DERBitString;
      var a = e.DEROctetString;
      var o = e.DERNull;
      var h = e.DERObjectIdentifier;
      var u = e.DEREnumerated;
      var c = e.DERUTF8String;
      var l = e.DERNumericString;
      var d = e.DERPrintableString;
      var p = e.DERTeletexString;
      var g = e.DERIA5String;
      var v = e.DERUTCTime;
      var x = e.DERGeneralizedTime;
      var m = e.DERVisibleString;
      var y = e.DERBMPString;
      var S = e.DERSequence;
      var E = e.DERSet;
      var b = e.DERTaggedObject;
      var F = e.ASN1Util.newObject;
      if (t instanceof e.ASN1Object) {
        return t;
      }
      var w = Object.keys(t);
      if (w.length != 1) {
        throw Error("key of param shall be only one.");
      }
      var A = w[0];
      if (":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(":" + A + ":") == -1) {
        throw Error("undefined key: " + A);
      }
      if (A == "bool") {
        return new i(t[A]);
      }
      if (A == "int") {
        return new s(t[A]);
      }
      if (A == "bitstr") {
        return new n(t[A]);
      }
      if (A == "octstr") {
        return new a(t[A]);
      }
      if (A == "null") {
        return new o(t[A]);
      }
      if (A == "oid") {
        return new h(t[A]);
      }
      if (A == "enum") {
        return new u(t[A]);
      }
      if (A == "utf8str") {
        return new c(t[A]);
      }
      if (A == "numstr") {
        return new l(t[A]);
      }
      if (A == "prnstr") {
        return new d(t[A]);
      }
      if (A == "telstr") {
        return new p(t[A]);
      }
      if (A == "ia5str") {
        return new g(t[A]);
      }
      if (A == "utctime") {
        return new v(t[A]);
      }
      if (A == "gentime") {
        return new x(t[A]);
      }
      if (A == "visstr") {
        return new m(t[A]);
      }
      if (A == "bmpstr") {
        return new y(t[A]);
      }
      if (A == "asn1") {
        return new r(t[A]);
      }
      if (A == "seq") {
        var D = t[A];
        var P = [];
        var I = 0;
        for (; I < D.length; I++) {
          var C = F(D[I]);
          P.push(C);
        }
        return new S({
          array: P
        });
      }
      if (A == "set") {
        var D = t[A];
        var P = [];
        var I = 0;
        for (; I < D.length; I++) {
          var C = F(D[I]);
          P.push(C);
        }
        return new E({
          array: P
        });
      }
      if (A == "tag") {
        var R = t[A];
        if (Object.prototype.toString.call(R) !== "[object Array]" || R.length != 3) {
          return new b(R);
        }
        var T = F(R[2]);
        return new b({
          tag: R[0],
          explicit: R[1],
          obj: T
        });
      }
    };
    this.jsonToASN1HEX = function (t) {
      return this.newObject(t).tohex();
    };
  }();
  f.asn1.ASN1Util.oidHexToInt = function (t) {
    var e = "";
    var r = parseInt(t.substr(0, 2), 16);
    var i = Math.floor(r / 40);
    var e = i + "." + r % 40;
    var s = "";
    var n = 2;
    for (; n < t.length; n += 2) {
      var a = ("00000000" + parseInt(t.substr(n, 2), 16).toString(2)).slice(-8);
      s += a.substr(1, 7);
      if (a.substr(0, 1) == "0") {
        e = e + "." + new b(s, 2).toString(10);
        s = "";
      }
    }
    return e;
  };
  f.asn1.ASN1Util.oidIntToHex = function (t) {
    function e(t) {
      var e = t.toString(16);
      if (e.length == 1) {
        e = "0" + e;
      }
      return e;
    }
    if (!t.match(/^[0-9.]+$/)) {
      throw "malformed oid string: " + t;
    }
    var r = "";
    var i = t.split(".");
    r += e(parseInt(i[0]) * 40 + parseInt(i[1]));
    i.splice(0, 2);
    for (var s = 0; s < i.length; s++) {
      r += function (t) {
        var r = "";
        var i = new b(t, 10).toString(2);
        var s = 7 - i.length % 7;
        if (s == 7) {
          s = 0;
        }
        var n = "";
        var a = 0;
        for (; a < s; a++) {
          n += "0";
        }
        i = n + i;
        for (var a = 0; a < i.length - 1; a += 7) {
          var o = i.substr(a, 7);
          if (a != i.length - 7) {
            o = "1" + o;
          }
          r += e(parseInt(o, 2));
        }
        return r;
      }(i[s]);
    }
    return r;
  };
  f.asn1.ASN1Object = function (t) {
    this.params = null;
    this.getLengthHexFromValue = function () {
      if (this.hV === undefined || this.hV == null) {
        throw Error("this.hV is null or undefined");
      }
      if (this.hV.length % 2 == 1) {
        throw Error("value hex must be even length: n=0,v=" + this.hV);
      }
      var t = this.hV.length / 2;
      var e = t.toString(16);
      if (e.length % 2 == 1) {
        e = "0" + e;
      }
      if (t < 128) {
        return e;
      }
      var r = e.length / 2;
      if (r > 15) {
        throw Error("ASN.1 length too long to represent by 8x: n = " + t.toString(16));
      }
      return (128 + r).toString(16) + e;
    };
    this.tohex = function () {
      if (this.hTLV == null || this.isModified) {
        this.hV = this.getFreshValueHex();
        this.hL = this.getLengthHexFromValue();
        this.hTLV = this.hT + this.hL + this.hV;
        this.isModified = false;
      }
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.getValueHex = function () {
      this.tohex();
      return this.hV;
    };
    this.getFreshValueHex = function () {
      return "";
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined && t.tlv != undefined) {
      this.hTLV = t.tlv;
      this.isModified = false;
    }
  };
  f.asn1.DERAbstractString = function (t) {
    f.asn1.DERAbstractString.superclass.constructor.call(this);
    this.getString = function () {
      return this.s;
    };
    this.setString = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.s = t;
      this.hV = ea(this.s).toLowerCase();
    };
    this.setStringHex = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = t;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (t !== undefined) {
      if (typeof t == "string") {
        this.setString(t);
      } else if (t.str !== undefined) {
        this.setString(t.str);
      } else if (t.hex !== undefined) {
        this.setStringHex(t.hex);
      }
    }
  };
  eC(f.asn1.DERAbstractString, f.asn1.ASN1Object);
  f.asn1.DERAbstractTime = function (t) {
    f.asn1.DERAbstractTime.superclass.constructor.call(this);
    this.localDateToUTC = function (t) {
      return new Date(t.getTime() + t.getTimezoneOffset() * 60000);
    };
    this.formatDate = function (t, e, r) {
      var i = this.zeroPadding;
      var s = this.localDateToUTC(t);
      var n = String(s.getFullYear());
      if (e == "utc") {
        n = n.substr(2, 2);
      }
      var a = n + i(String(s.getMonth() + 1), 2) + i(String(s.getDate()), 2) + i(String(s.getHours()), 2) + i(String(s.getMinutes()), 2) + i(String(s.getSeconds()), 2);
      if (r === true) {
        var o = s.getMilliseconds();
        if (o != 0) {
          var h = i(String(o), 3);
          a = a + "." + (h = h.replace(/[0]+$/, ""));
        }
      }
      return a + "Z";
    };
    this.zeroPadding = function (t, e) {
      if (t.length >= e) {
        return t;
      } else {
        return Array(e - t.length + 1).join("0") + t;
      }
    };
    this.setByParam = function (t) {
      this.hV = null;
      this.hTLV = null;
      this.params = t;
    };
    this.getString = function () {};
    this.setString = function (t) {
      this.hTLV = null;
      this.isModified = true;
      if (this.params == undefined) {
        this.params = {};
      }
      this.params.str = t;
    };
    this.setByDate = function (t) {
      this.hTLV = null;
      this.isModified = true;
      if (this.params == undefined) {
        this.params = {};
      }
      this.params.date = t;
    };
    this.setByDateValue = function (t, e, r, i, s, n) {
      var a = new Date(Date.UTC(t, e - 1, r, i, s, n, 0));
      this.setByDate(a);
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
  };
  eC(f.asn1.DERAbstractTime, f.asn1.ASN1Object);
  f.asn1.DERAbstractStructured = function (t) {
    f.asn1.DERAbstractString.superclass.constructor.call(this);
    this.setByASN1ObjectArray = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array = t;
    };
    this.appendASN1Object = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array.push(t);
    };
    this.asn1Array = [];
    if (t !== undefined && t.array !== undefined) {
      this.asn1Array = t.array;
    }
  };
  eC(f.asn1.DERAbstractStructured, f.asn1.ASN1Object);
  f.asn1.DERBoolean = function (t) {
    f.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    if (t == false) {
      this.hTLV = "010100";
    } else {
      this.hTLV = "0101ff";
    }
  };
  eC(f.asn1.DERBoolean, f.asn1.ASN1Object);
  f.asn1.DERInteger = function (t) {
    f.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";
    this.params = null;
    this.setByBigInteger = function (t) {
      this.isModified = true;
      this.params = {
        bigint: t
      };
    };
    this.setByInteger = function (t) {
      this.isModified = true;
      this.params = t;
    };
    this.setValueHex = function (t) {
      this.isModified = true;
      this.params = {
        hex: t
      };
    };
    this.getFreshValueHex = function () {
      var t = this.params;
      var e = null;
      if (t == null) {
        throw Error("value not set");
      }
      if (typeof t == "object" && t.hex != undefined) {
        this.hV = t.hex;
        return this.hV;
      }
      if (typeof t == "number") {
        e = new b(String(t), 10);
      } else if (t.int != undefined) {
        e = new b(String(t.int), 10);
      } else if (t.bigint != undefined) {
        e = t.bigint;
      } else {
        throw Error("wrong parameter");
      }
      this.hV = eA(e);
      return this.hV;
    };
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.DERInteger, f.asn1.ASN1Object);
  f.asn1.DERBitString = function (t) {
    if (t !== undefined && t.obj !== undefined) {
      var e = f.asn1.ASN1Util.newObject(t.obj);
      t.hex = "00" + e.tohex();
    }
    f.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";
    this.setHexValueIncludingUnusedBits = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = t;
    };
    this.setUnusedBitsAndHexValue = function (t, e) {
      if (t < 0 || t > 7) {
        throw "unused bits shall be from 0 to 7: u = " + t;
      }
      this.hTLV = null;
      this.isModified = true;
      this.hV = "0" + t + e;
    };
    this.setByBinaryString = function (t) {
      var e = 8 - (t = t.replace(/0+$/, "")).length % 8;
      if (e == 8) {
        e = 0;
      }
      t += "0000000".substr(0, e);
      var r = "";
      var i = 0;
      for (; i < t.length - 1; i += 8) {
        var s = parseInt(t.substr(i, 8), 2).toString(16);
        if (s.length == 1) {
          s = "0" + s;
        }
        r += s;
      }
      this.hTLV = null;
      this.isModified = true;
      this.hV = "0" + e + r;
    };
    this.setByBooleanArray = function (t) {
      var e = "";
      var r = 0;
      for (; r < t.length; r++) {
        if (t[r] == true) {
          e += "1";
        } else {
          e += "0";
        }
      }
      this.setByBinaryString(e);
    };
    this.newFalseArray = function (t) {
      var e = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = false;
      }
      return e;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (t !== undefined) {
      if (typeof t == "string" && t.toLowerCase().match(/^[0-9a-f]+$/)) {
        this.setHexValueIncludingUnusedBits(t);
      } else if (t.hex !== undefined) {
        this.setHexValueIncludingUnusedBits(t.hex);
      } else if (t.bin !== undefined) {
        this.setByBinaryString(t.bin);
      } else if (t.array !== undefined) {
        this.setByBooleanArray(t.array);
      }
    }
  };
  eC(f.asn1.DERBitString, f.asn1.ASN1Object);
  f.asn1.DEROctetString = function (t) {
    if (t !== undefined && t.obj !== undefined) {
      var e = f.asn1.ASN1Util.newObject(t.obj);
      t.hex = e.tohex();
    }
    f.asn1.DEROctetString.superclass.constructor.call(this, t);
    this.hT = "04";
  };
  eC(f.asn1.DEROctetString, f.asn1.DERAbstractString);
  f.asn1.DERNull = function () {
    f.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
  };
  eC(f.asn1.DERNull, f.asn1.ASN1Object);
  f.asn1.DERObjectIdentifier = function (t) {
    f.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";
    this.setValueHex = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = t;
    };
    this.setValueOidString = function (t) {
      var e = function (t) {
        function e(t) {
          var e = t.toString(16);
          if (e.length == 1) {
            e = "0" + e;
          }
          return e;
        }
        try {
          if (!t.match(/^[0-9.]+$/)) {
            return null;
          }
          var r = "";
          var i = t.split(".");
          var s = parseInt(i[0], 10) * 40 + parseInt(i[1], 10);
          r += e(s);
          i.splice(0, 2);
          for (var n = 0; n < i.length; n++) {
            r += function (t) {
              var r = "";
              var i = parseInt(t, 10).toString(2);
              var s = 7 - i.length % 7;
              if (s == 7) {
                s = 0;
              }
              var n = "";
              var a = 0;
              for (; a < s; a++) {
                n += "0";
              }
              i = n + i;
              for (var a = 0; a < i.length - 1; a += 7) {
                var o = i.substr(a, 7);
                if (a != i.length - 7) {
                  o = "1" + o;
                }
                r += e(parseInt(o, 2));
              }
              return r;
            }(i[n]);
          }
          return r;
        } catch (t) {
          return null;
        }
      }(t);
      if (e == null) {
        throw Error("malformed oid string: " + t);
      }
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = e;
    };
    this.setValueName = function (t) {
      var e = f.asn1.x509.OID.name2oid(t);
      if (e !== "") {
        this.setValueOidString(e);
      } else {
        throw Error("DERObjectIdentifier oidName undefined: " + t);
      }
    };
    this.setValueNameOrOid = function (t) {
      if (t.match(/^[0-2].[0-9.]+$/)) {
        this.setValueOidString(t);
      } else {
        this.setValueName(t);
      }
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    this.setByParam = function (t) {
      if (typeof t == "string") {
        this.setValueNameOrOid(t);
      } else if (t.oid !== undefined) {
        this.setValueNameOrOid(t.oid);
      } else if (t.name !== undefined) {
        this.setValueNameOrOid(t.name);
      } else if (t.hex !== undefined) {
        this.setValueHex(t.hex);
      }
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.DERObjectIdentifier, f.asn1.ASN1Object);
  f.asn1.DEREnumerated = function (t) {
    f.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";
    this.setByBigInteger = function (t) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = eA(t);
    };
    this.setByInteger = function (t) {
      var e = new b(String(t), 10);
      this.setByBigInteger(e);
    };
    this.setValueHex = function (t) {
      this.hV = t;
    };
    this.getFreshValueHex = function () {
      return this.hV;
    };
    if (t !== undefined) {
      if (t.int !== undefined) {
        this.setByInteger(t.int);
      } else if (typeof t == "number") {
        this.setByInteger(t);
      } else if (t.hex !== undefined) {
        this.setValueHex(t.hex);
      }
    }
  };
  eC(f.asn1.DEREnumerated, f.asn1.ASN1Object);
  f.asn1.DERUTF8String = function (t) {
    f.asn1.DERUTF8String.superclass.constructor.call(this, t);
    this.hT = "0c";
  };
  eC(f.asn1.DERUTF8String, f.asn1.DERAbstractString);
  f.asn1.DERNumericString = function (t) {
    f.asn1.DERNumericString.superclass.constructor.call(this, t);
    this.hT = "12";
  };
  eC(f.asn1.DERNumericString, f.asn1.DERAbstractString);
  f.asn1.DERPrintableString = function (t) {
    f.asn1.DERPrintableString.superclass.constructor.call(this, t);
    this.hT = "13";
  };
  eC(f.asn1.DERPrintableString, f.asn1.DERAbstractString);
  f.asn1.DERTeletexString = function (t) {
    f.asn1.DERTeletexString.superclass.constructor.call(this, t);
    this.hT = "14";
  };
  eC(f.asn1.DERTeletexString, f.asn1.DERAbstractString);
  f.asn1.DERIA5String = function (t) {
    f.asn1.DERIA5String.superclass.constructor.call(this, t);
    this.hT = "16";
  };
  eC(f.asn1.DERIA5String, f.asn1.DERAbstractString);
  f.asn1.DERVisibleString = function (t) {
    f.asn1.DERIA5String.superclass.constructor.call(this, t);
    this.hT = "1a";
  };
  eC(f.asn1.DERVisibleString, f.asn1.DERAbstractString);
  f.asn1.DERBMPString = function (t) {
    f.asn1.DERBMPString.superclass.constructor.call(this, t);
    this.hT = "1e";
  };
  eC(f.asn1.DERBMPString, f.asn1.DERAbstractString);
  f.asn1.DERUTCTime = function (t) {
    f.asn1.DERUTCTime.superclass.constructor.call(this, t);
    this.hT = "17";
    this.params = undefined;
    this.getFreshValueHex = function () {
      var t = this.params;
      if (this.params == undefined) {
        t = {
          date: new Date()
        };
      }
      if (typeof t == "string") {
        if (t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}\.[0-9]+Z$/)) {
          this.hV = ee(t);
        } else {
          throw Error("malformed string for UTCTime: " + t);
        }
      } else if (t.str != undefined) {
        this.hV = ee(t.str);
      } else if (t.date == undefined && t.millis == true) {
        var e = new Date();
        this.hV = ee(this.formatDate(e, "utc", true));
      } else if (t.date != undefined && t.date instanceof Date) {
        var r = t.millis === true;
        this.hV = ee(this.formatDate(t.date, "utc", r));
      } else if (t instanceof Date) {
        this.hV = ee(this.formatDate(t, "utc"));
      }
      if (this.hV == undefined) {
        throw Error("parameter not specified properly for UTCTime");
      }
      return this.hV;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.DERUTCTime, f.asn1.DERAbstractTime);
  f.asn1.DERGeneralizedTime = function (t) {
    f.asn1.DERGeneralizedTime.superclass.constructor.call(this, t);
    this.hT = "18";
    this.params = t;
    this.getFreshValueHex = function () {
      var t = this.params;
      if (this.params == undefined) {
        t = {
          date: new Date()
        };
      }
      if (typeof t == "string") {
        if (t.match(/^[0-9]{14}Z$/) || t.match(/^[0-9]{14}\.[0-9]+Z$/)) {
          this.hV = ee(t);
        } else {
          throw Error("malformed string for GeneralizedTime: " + t);
        }
      } else if (t.str != undefined) {
        this.hV = ee(t.str);
      } else if (t.date == undefined && t.millis == true) {
        var e = new Date();
        this.hV = ee(this.formatDate(e, "gen", true));
      } else if (t.date != undefined && t.date instanceof Date) {
        var r = t.millis === true;
        this.hV = ee(this.formatDate(t.date, "gen", r));
      } else if (t instanceof Date) {
        this.hV = ee(this.formatDate(t, "gen"));
      }
      if (this.hV == undefined) {
        throw Error("parameter not specified properly for GeneralizedTime");
      }
      return this.hV;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.DERGeneralizedTime, f.asn1.DERAbstractTime);
  f.asn1.DERSequence = function (t) {
    f.asn1.DERSequence.superclass.constructor.call(this, t);
    this.hT = "30";
    this.getFreshValueHex = function () {
      var t = "";
      var e = 0;
      for (; e < this.asn1Array.length; e++) {
        t += this.asn1Array[e].tohex();
      }
      this.hV = t;
      return this.hV;
    };
  };
  eC(f.asn1.DERSequence, f.asn1.DERAbstractStructured);
  f.asn1.DERSet = function (t) {
    f.asn1.DERSet.superclass.constructor.call(this, t);
    this.hT = "31";
    this.sortFlag = true;
    this.getFreshValueHex = function () {
      var t = [];
      var e = 0;
      for (; e < this.asn1Array.length; e++) {
        var r = this.asn1Array[e];
        t.push(r.tohex());
      }
      if (this.sortFlag == true) {
        t.sort();
      }
      this.hV = t.join("");
      return this.hV;
    };
    if (t !== undefined && t.sortflag !== undefined && t.sortflag == false) {
      this.sortFlag = false;
    }
  };
  eC(f.asn1.DERSet, f.asn1.DERAbstractStructured);
  f.asn1.DERTaggedObject = function (t) {
    f.asn1.DERTaggedObject.superclass.constructor.call(this);
    var e = f.asn1;
    var r = t9.getV;
    t9.isASN1HEX;
    var i = e.ASN1Util.newObject;
    this.hT = "a0";
    this.hV = "";
    this.isExplicit = true;
    this.asn1Object = null;
    this.params = {
      tag: "a0",
      explicit: true
    };
    this.setASN1Object = function (t, e, r) {
      this.params = {
        tag: e,
        explicit: t,
        obj: r
      };
    };
    this.getFreshValueHex = function () {
      var t;
      var s = this.params;
      if (s.explicit == undefined) {
        s.explicit = true;
      }
      if (s.tage != undefined) {
        s.tag = s.tage;
        s.explicit = true;
      }
      if (s.tagi != undefined) {
        s.tag = s.tagi;
        s.explicit = false;
      }
      if (s.str != undefined) {
        this.hV = ea(s.str);
      } else if (s.hex != undefined) {
        this.hV = s.hex;
      } else if (s.obj != undefined) {
        if (s.obj instanceof e.ASN1Object) {
          t = s.obj.tohex();
        } else if (typeof s.obj == "object") {
          t = i(s.obj).tohex();
        }
        if (s.explicit) {
          this.hV = t;
        } else {
          this.hV = r(t, 0);
        }
      } else {
        throw Error("str, hex nor obj not specified");
      }
      if (s.tag == undefined) {
        s.tag = "a0";
      }
      this.hT = s.tag;
      this.hTLV = null;
      this.isModified = true;
      return this.hV;
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.DERTaggedObject, f.asn1.ASN1Object);
  var t9 = new function () {}();
  function t7(t) {
    var e = [];
    var r = 0;
    for (; r < t.length; r++) {
      e[r] = t.charCodeAt(r);
    }
    return e;
  }
  function et(t) {
    var e = "";
    var r = 0;
    for (; r < t.length; r++) {
      var i = t[r].toString(16);
      if (i.length == 1) {
        i = "0" + i;
      }
      e += i;
    }
    return e;
  }
  function ee(t) {
    return et(t7(t));
  }
  function er(t) {
    return t = (t = (t = t.replace(/\=/g, "")).replace(/\+/g, "-")).replace(/\//g, "_");
  }
  function ei(t) {
    if (t.length % 4 == 2) {
      t += "==";
    } else if (t.length % 4 == 3) {
      t += "=";
    }
    return t = (t = t.replace(/-/g, "+")).replace(/_/g, "/");
  }
  function es(t) {
    if (t.length % 2 == 1) {
      t = "0" + t;
    }
    return er(S(t));
  }
  function en(t) {
    return E(ei(t));
  }
  function ea(t) {
    return ef(eS(t)).toLowerCase();
  }
  function eo(t) {
    try {
      return decodeURIComponent(ed(t));
    } catch (t) {
      return null;
    }
  }
  t9.getLblen = function (t, e) {
    if (t.substr(e + 2, 1) != "8") {
      return 1;
    }
    var r = parseInt(t.substr(e + 3, 1));
    if (r == 0) {
      return -1;
    } else if (r > 0 && r < 10) {
      return r + 1;
    } else {
      return -2;
    }
  };
  t9.getL = function (t, e) {
    var r = t9.getLblen(t, e);
    if (r < 1) {
      return "";
    } else {
      return t.substr(e + 2, r * 2);
    }
  };
  t9.getVblen = function (t, e) {
    var r;
    var i;
    if ((r = t9.getL(t, e)) == "") {
      return -1;
    } else {
      return (r.substr(0, 1) === "8" ? new b(r.substr(2), 16) : new b(r, 16)).intValue();
    }
  };
  t9.getVidx = function (t, e) {
    var r = t9.getLblen(t, e);
    if (r < 0) {
      return r;
    } else {
      return e + (r + 1) * 2;
    }
  };
  t9.getV = function (t, e) {
    var r = t9.getVidx(t, e);
    var i = t9.getVblen(t, e);
    return t.substr(r, i * 2);
  };
  t9.getTLV = function (t, e) {
    return t.substr(e, 2) + t9.getL(t, e) + t9.getV(t, e);
  };
  t9.getTLVblen = function (t, e) {
    return 2 + t9.getLblen(t, e) * 2 + t9.getVblen(t, e) * 2;
  };
  t9.getNextSiblingIdx = function (t, e) {
    return t9.getVidx(t, e) + t9.getVblen(t, e) * 2;
  };
  t9.getChildIdx = function (t, e) {
    var r;
    var i;
    var s;
    var n = [];
    r = t9.getVidx(t, e);
    i = t9.getVblen(t, e) * 2;
    if (t.substr(e, 2) == "03") {
      r += 2;
      i -= 2;
    }
    s = 0;
    var a = r;
    for (; s <= i;) {
      var o = t9.getTLVblen(t, a);
      if ((s += o) <= i) {
        n.push(a);
      }
      a += o;
      if (s >= i) {
        break;
      }
    }
    return n;
  };
  t9.getNthChildIdx = function (t, e, r) {
    return t9.getChildIdx(t, e)[r];
  };
  t9.getIdxbyList = function (t, e, r, i) {
    var s;
    var n;
    if (r.length == 0) {
      if (i !== undefined && t.substr(e, 2) !== i) {
        return -1;
      } else {
        return e;
      }
    } else if ((s = r.shift()) >= (n = t9.getChildIdx(t, e)).length) {
      return -1;
    } else {
      return t9.getIdxbyList(t, n[s], r, i);
    }
  };
  t9.getIdxbyListEx = function (t, e, r, i) {
    if (r.length == 0) {
      if (i !== undefined && t.substr(e, 2) !== i) {
        return -1;
      } else {
        return e;
      }
    }
    s = r.shift();
    n = t9.getChildIdx(t, e);
    var s;
    var n;
    var a = 0;
    var o = 0;
    for (; o < n.length; o++) {
      var h = t.substr(n[o], 2);
      if (typeof s == "number" && !t9.isContextTag(h) && a == s || typeof s == "string" && t9.isContextTag(h, s)) {
        return t9.getIdxbyListEx(t, n[o], r, i);
      }
      if (!t9.isContextTag(h)) {
        a++;
      }
    }
    return -1;
  };
  t9.getTLVbyList = function (t, e, r, i) {
    var s = t9.getIdxbyList(t, e, r, i);
    if (s == -1 || s >= t.length) {
      return null;
    } else {
      return t9.getTLV(t, s);
    }
  };
  t9.getTLVbyListEx = function (t, e, r, i) {
    var s = t9.getIdxbyListEx(t, e, r, i);
    if (s == -1) {
      return null;
    } else {
      return t9.getTLV(t, s);
    }
  };
  t9.getVbyList = function (t, e, r, i, s) {
    var n;
    var a;
    if ((n = t9.getIdxbyList(t, e, r, i)) == -1 || n >= t.length) {
      return null;
    } else {
      a = t9.getV(t, n);
      if (s === true) {
        a = a.substr(2);
      }
      return a;
    }
  };
  t9.getVbyListEx = function (t, e, r, i, s) {
    var n;
    var a;
    if ((n = t9.getIdxbyListEx(t, e, r, i)) == -1) {
      return null;
    } else {
      a = t9.getV(t, n);
      if (t.substr(n, 2) == "03" && s !== false) {
        a = a.substr(2);
      }
      return a;
    }
  };
  t9.getInt = function (t, e, r) {
    if (r == undefined) {
      r = -1;
    }
    try {
      var i = t.substr(e, 2);
      if (i != "02" && i != "03") {
        return r;
      }
      var s = t9.getV(t, e);
      if (i == "02") {
        return parseInt(s, 16);
      }
      return function (t) {
        if (t.length % 2 != 0 || (t = t.toLowerCase()).match(/^[0-9a-f]+$/) == null) {
          return -1;
        }
        try {
          var e = t.substr(0, 2);
          if (e == "00") {
            return parseInt(t.substr(2), 16);
          }
          var r = parseInt(e, 16);
          if (r > 7) {
            return -1;
          }
          var i = t.substr(2);
          var s = parseInt(i, 16).toString(2);
          if (s == "0") {
            s = "00000000";
          }
          s = s.slice(0, 0 - r);
          var n = parseInt(s, 2);
          if (n == NaN) {
            return -1;
          }
          return n;
        } catch (t) {
          return -1;
        }
      }(s);
    } catch (t) {
      return r;
    }
  };
  t9.getOID = function (t, e, r) {
    if (r == undefined) {
      r = null;
    }
    try {
      if (t.substr(e, 2) != "06") {
        return r;
      }
      var i = t9.getV(t, e);
      return ew(i);
    } catch (t) {
      return r;
    }
  };
  t9.getOIDName = function (t, e, r) {
    if (r == undefined) {
      r = null;
    }
    try {
      var i = t9.getOID(t, e, r);
      if (i == r) {
        return r;
      }
      var s = f.asn1.x509.OID.oid2name(i);
      if (s == "") {
        return i;
      }
      return s;
    } catch (t) {
      return r;
    }
  };
  t9.getString = function (t, e, r) {
    if (r == undefined) {
      r = null;
    }
    try {
      var i = t9.getV(t, e);
      return eh(i);
    } catch (t) {
      return r;
    }
  };
  t9.hextooidstr = function (t) {
    function e(t, e) {
      if (t.length >= e) {
        return t;
      } else {
        return Array(e - t.length + 1).join("0") + t;
      }
    }
    var r = [];
    var i = parseInt(t.substr(0, 2), 16);
    r[0] = new String(Math.floor(i / 40));
    r[1] = new String(i % 40);
    var s = t.substr(2);
    var n = [];
    var a = 0;
    for (; a < s.length / 2; a++) {
      n.push(parseInt(s.substr(a * 2, 2), 16));
    }
    var o = [];
    var h = "";
    var a = 0;
    for (; a < n.length; a++) {
      if (n[a] & 128) {
        h += e((n[a] & 127).toString(2), 7);
      } else {
        o.push(new String(parseInt(h += e((n[a] & 127).toString(2), 7), 2)));
        h = "";
      }
    }
    var u = r.join(".");
    if (o.length > 0) {
      u = u + "." + o.join(".");
    }
    return u;
  };
  t9.dump = function (t, e, r, i) {
    var s = t9.getV;
    var n = t9.dump;
    var a = t9.getChildIdx;
    var o = t;
    if (t instanceof f.asn1.ASN1Object) {
      o = t.tohex();
    }
    function h(t, e) {
      if (t.length <= e * 2) {
        return t;
      } else {
        return t.substr(0, e) + "..(total " + t.length / 2 + "bytes).." + t.substr(t.length - e, e);
      }
    }
    if (e === undefined) {
      e = {
        ommit_long_octet: 32
      };
    }
    if (r === undefined) {
      r = 0;
    }
    if (i === undefined) {
      i = "";
    }
    var u = e.ommit_long_octet;
    var c = o.substr(r, 2);
    if (c == "01") {
      var l = s(o, r);
      if (l == "00") {
        return i + "BOOLEAN FALSE\n";
      } else {
        return i + "BOOLEAN TRUE\n";
      }
    }
    if (c == "02") {
      var l = s(o, r);
      return i + "INTEGER " + h(l, u) + "\n";
    }
    if (c == "03") {
      var l = s(o, r);
      if (!t9.isASN1HEX(l.substr(2))) {
        return i + "BITSTRING " + h(l, u) + "\n";
      }
      var d = i + "BITSTRING, encapsulates\n";
      return d + n(l.substr(2), e, 0, i + "  ");
    }
    if (c == "04") {
      var l = s(o, r);
      if (!t9.isASN1HEX(l)) {
        return i + "OCTETSTRING " + h(l, u) + "\n";
      }
      var d = i + "OCTETSTRING, encapsulates\n";
      return d + n(l, e, 0, i + "  ");
    }
    if (c == "05") {
      return i + "NULL\n";
    }
    if (c == "06") {
      var p = s(o, r);
      var g = f.asn1.ASN1Util.oidHexToInt(p);
      var v = f.asn1.x509.OID.oid2name(g);
      var x = g.replace(/\./g, " ");
      if (v != "") {
        return i + "ObjectIdentifier " + v + " (" + x + ")\n";
      } else {
        return i + "ObjectIdentifier (" + x + ")\n";
      }
    }
    if (c == "0a") {
      return i + "ENUMERATED " + parseInt(s(o, r)) + "\n";
    }
    if (c == "0c") {
      return i + "UTF8String '" + eo(s(o, r)) + "'\n";
    }
    if (c == "13") {
      return i + "PrintableString '" + eo(s(o, r)) + "'\n";
    }
    if (c == "14") {
      return i + "TeletexString '" + eo(s(o, r)) + "'\n";
    }
    if (c == "16") {
      return i + "IA5String '" + eo(s(o, r)) + "'\n";
    }
    if (c == "17") {
      return i + "UTCTime " + eo(s(o, r)) + "\n";
    }
    if (c == "18") {
      return i + "GeneralizedTime " + eo(s(o, r)) + "\n";
    }
    if (c == "1a") {
      return i + "VisualString '" + eo(s(o, r)) + "'\n";
    }
    if (c == "1e") {
      return i + "BMPString '" + ey(s(o, r)) + "'\n";
    }
    if (c == "30") {
      if (o.substr(r, 4) == "3000") {
        return i + "SEQUENCE {}\n";
      }
      var d = i + "SEQUENCE\n";
      var m = a(o, r);
      var y = e;
      if ((m.length == 2 || m.length == 3) && o.substr(m[0], 2) == "06" && o.substr(m[m.length - 1], 2) == "04") {
        var v = t9.oidname(s(o, m[0]));
        var S = JSON.parse(JSON.stringify(e));
        S.x509ExtName = v;
        y = S;
      }
      for (var E = 0; E < m.length; E++) {
        d += n(o, y, m[E], i + "  ");
      }
      return d;
    }
    if (c == "31") {
      var d = i + "SET\n";
      var m = a(o, r);
      var E = 0;
      for (; E < m.length; E++) {
        d += n(o, e, m[E], i + "  ");
      }
      return d;
    }
    var c = parseInt(c, 16);
    if ((c & 128) != 0) {
      var b = c & 31;
      if ((c & 32) != 0) {
        var d = i + "[" + b + "]\n";
        var m = a(o, r);
        var E = 0;
        for (; E < m.length; E++) {
          d += n(o, e, m[E], i + "  ");
        }
        return d;
      }
      var l = s(o, r);
      if (t9.isASN1HEX(l)) {
        var d = i + "[" + b + "]\n";
        return d + n(l, e, 0, i + "  ");
      }
      if (l.substr(0, 8) == "68747470") {
        l = eo(l);
      } else if (e.x509ExtName === "subjectAltName" && b == 2) {
        l = eo(l);
      }
      var d = i + "[" + b + "] " + l + "\n";
      return d;
    }
    return i + "UNKNOWN(" + c + ") " + s(o, r) + "\n";
  };
  t9.parse = function (t) {
    var e = t9.parse;
    var r = t9.isASN1HEX;
    var i = t9.getV;
    var s = t9.getTLV;
    var n = t9.getChildIdx;
    var a = f.asn1;
    var o = a.ASN1Util.oidHexToInt;
    var h = a.x509.OID.oid2name;
    var u = eo;
    var c = {
      "0c": "utf8str",
      12: "numstr",
      13: "prnstr",
      14: "telstr",
      16: "ia5str",
      17: "utctime",
      18: "gentime",
      "1a": "visstr",
      "1e": "bmpstr",
      30: "seq",
      31: "set"
    };
    var l = t.substr(0, 2);
    var d = {};
    var p = i(t, 0);
    if (l == "01") {
      if (t == "0101ff") {
        return {
          bool: true
        };
      } else {
        return {
          bool: false
        };
      }
    }
    if (l == "02") {
      return {
        int: {
          hex: p
        }
      };
    }
    if (l == "03") {
      try {
        if (p.substr(0, 2) != "00") {
          throw "not encap";
        }
        var g = p.substr(2);
        if (!r(g)) {
          throw "not encap";
        }
        return {
          bitstr: {
            obj: e(g)
          }
        };
      } catch (t) {
        var v = null;
        if (p.length <= 10) {
          v = function (t) {
            if (typeof t != "string" || t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/)) {
              return null;
            }
            try {
              var e = parseInt(t.substr(0, 2), 16);
              if (e < 0 || e > 7) {
                return null;
              }
              var r = t.substr(2);
              var i = "";
              var s = 0;
              for (; s < r.length; s += 2) {
                var n = r.substr(s, 2);
                var a = parseInt(n, 16).toString(2);
                a = ("0000000" + a).slice(-8);
                i += a;
              }
              return i.substr(0, i.length - e);
            } catch (t) {
              return null;
            }
          }(p);
        }
        if (v == null) {
          return {
            bitstr: {
              hex: p
            }
          };
        }
        return {
          bitstr: {
            bin: v
          }
        };
      }
    } else if (l == "04") {
      try {
        if (!r(p)) {
          throw "not encap";
        }
        return {
          octstr: {
            obj: e(p)
          }
        };
      } catch (t) {
        return {
          octstr: {
            hex: p
          }
        };
      }
    } else {
      if (l == "05") {
        return {
          null: ""
        };
      }
      if (l == "06") {
        var x = o(p);
        var m = h(x);
        if (m == "") {
          return {
            oid: x
          };
        } else {
          return {
            oid: m
          };
        }
      }
      if (l == "0a") {
        if (p.length > 4) {
          return {
            enum: {
              hex: p
            }
          };
        } else {
          return {
            enum: parseInt(p, 16)
          };
        }
      }
      if (l == "30" || l == "31") {
        d[c[l]] = function (t) {
          var r = [];
          var i = n(t, 0);
          var a = 0;
          for (; a < i.length; a++) {
            var o = e(s(t, i[a]));
            r.push(o);
          }
          return r;
        }(t);
        return d;
      }
      if (l == "14") {
        var y = function (t) {
          return eo(function (t) {
            var e = t.match(/.{1,2}/g);
            var r = [];
            var i = 0;
            for (; i < e.length; i++) {
              var s = parseInt(e[i], 16);
              if (s >= 161 && s <= 191) {
                r.push("c2");
                r.push(e[i]);
              } else if (s >= 192 && s <= 255) {
                r.push("c3");
                r.push((s - 64).toString(16));
              } else {
                r.push(e[i]);
              }
            }
            return r.join("");
          }(t));
        }(p);
        d[c[l]] = {
          str: y
        };
        return d;
      }
      if (l == "1e") {
        var y = ey(p);
        d[c[l]] = {
          str: y
        };
        return d;
      }
      if (":0c:12:13:16:17:18:1a:".indexOf(l) != -1) {
        var y = u(p);
        d[c[l]] = {
          str: y
        };
        return d;
      }
      if (l.match(/^8[0-9]$/)) {
        var y = u(p);
        if (y == null | y == "") {
          return {
            tag: {
              tag: l,
              explicit: false,
              hex: p
            }
          };
        } else if (y.match(/[\x00-\x1F\x7F-\x9F]/) != null || y.match(/[\u0000-\u001F\u0080–\u009F]/) != null) {
          return {
            tag: {
              tag: l,
              explicit: false,
              hex: p
            }
          };
        } else {
          return {
            tag: {
              tag: l,
              explicit: false,
              str: y
            }
          };
        }
      }
      if (l.match(/^a[0-9]$/)) {
        try {
          if (!r(p)) {
            throw Error("not encap");
          }
          return {
            tag: {
              tag: l,
              explicit: true,
              obj: e(p)
            }
          };
        } catch (t) {
          return {
            tag: {
              tag: l,
              explicit: true,
              hex: p
            }
          };
        }
      } else {
        var S = new f.asn1.ASN1Object();
        S.hV = p;
        return {
          asn1: {
            tlv: l + S.getLengthHexFromValue() + p
          }
        };
      }
    }
  };
  t9.isContextTag = function (t, e) {
    t = t.toLowerCase();
    try {
      r = parseInt(t, 16);
    } catch (t) {
      return -1;
    }
    if (e === undefined) {
      return (r & 192) == 128;
    }
    try {
      var r;
      var i;
      var s = e.match(/^\[[0-9]+\]$/);
      if (s == null || (i = parseInt(e.substr(1, e.length - 1), 10)) > 31) {
        return false;
      }
      if ((r & 192) == 128 && (r & 31) == i) {
        return true;
      }
      return false;
    } catch (t) {
      return false;
    }
  };
  t9.isASN1HEX = function (t) {
    if (t.length % 2 == 1) {
      return false;
    }
    var e = t9.getVblen(t, 0);
    var r = t.substr(0, 2);
    var i = t9.getL(t, 0);
    return t.length - r.length - i.length == e * 2;
  };
  t9.checkStrictDER = function (t, e, r, i, s) {
    if (r === undefined) {
      if (typeof t != "string" || (t = t.toLowerCase(), !f.lang.String.isHex(t))) {
        throw Error("not hex string");
      }
      r = t.length;
      s = (i = t.length / 2) < 128 ? 1 : Math.ceil(i.toString(16)) + 1;
    }
    if (t9.getL(t, e).length > s * 2) {
      throw Error("L of TLV too long: idx=" + e);
    }
    var n = t9.getVblen(t, e);
    if (n > i) {
      throw Error("value of L too long than hex: idx=" + e);
    }
    var a = t9.getTLV(t, e);
    var o = a.length - 2 - t9.getL(t, e).length;
    if (o !== n * 2) {
      throw Error("V string length and L's value not the same:" + o + "/" + n * 2);
    }
    if (e === 0 && t.length != a.length) {
      throw Error("total length and TLV length unmatch:" + t.length + "!=" + a.length);
    }
    var h = t.substr(e, 2);
    if (h === "02") {
      var u = t9.getVidx(t, e);
      if (t.substr(u, 2) == "00" && t.charCodeAt(u + 2) < 56) {
        throw Error("not least zeros for DER INTEGER");
      }
    }
    if (parseInt(h, 16) & 32) {
      var c = t9.getVblen(t, e);
      var l = 0;
      var d = t9.getChildIdx(t, e);
      var p = 0;
      for (; p < d.length; p++) {
        l += t9.getTLV(t, d[p]).length;
        t9.checkStrictDER(t, d[p], r, i, s);
      }
      if (c * 2 != l) {
        throw Error("sum of children's TLV length and L unmatch: " + c * 2 + "!=" + l);
      }
    }
  };
  t9.oidname = function (t) {
    var e = f.asn1;
    if (f.lang.String.isHex(t)) {
      t = e.ASN1Util.oidHexToInt(t);
    }
    var r = e.x509.OID.oid2name(t);
    if (r === "") {
      r = t;
    }
    return r;
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  if (f.asn1.x509 === undefined || !f.asn1.x509) {
    f.asn1.x509 = {};
  }
  f.asn1.x509.Certificate = function (t) {
    f.asn1.x509.Certificate.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERBitString;
    var i = e.DERSequence;
    var s = e.x509;
    var n = s.TBSCertificate;
    var a = s.AlgorithmIdentifier;
    this.params = undefined;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.sign = function () {
      var t = this.params;
      var e = t.sigalg;
      if (t.sigalg.name != undefined) {
        e = t.sigalg.name;
      }
      var r = t.tbsobj.tohex();
      var i = new f.crypto.Signature({
        alg: e
      });
      i.init(t.cakey);
      i.updateHex(r);
      t.sighex = i.sign();
    };
    this.getPEM = function () {
      return ec(this.tohex(), "CERTIFICATE");
    };
    this.tohex = function () {
      var t = this.params;
      if (t.tbsobj == undefined || t.tbsobj == null) {
        t.tbsobj = new n(t);
      }
      if (t.sighex == undefined && t.cakey != undefined) {
        this.sign();
      }
      if (t.sighex == undefined) {
        throw Error("sighex or cakey parameter not defined");
      }
      var e = [];
      e.push(t.tbsobj);
      e.push(new a({
        name: t.sigalg
      }));
      e.push(new r({
        hex: "00" + t.sighex
      }));
      return new i({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.Certificate, f.asn1.ASN1Object);
  f.asn1.x509.TBSCertificate = function (t) {
    f.asn1.x509.TBSCertificate.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.x509;
    var i = e.DERTaggedObject;
    var s = e.DERInteger;
    var n = e.DERSequence;
    var a = r.AlgorithmIdentifier;
    var o = r.Time;
    var h = r.X500Name;
    var u = r.Extensions;
    var c = r.SubjectPublicKeyInfo;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = [];
      var e = this.params;
      if (e.version != undefined || e.version != 1) {
        var r = 2;
        if (e.version != undefined) {
          r = e.version - 1;
        }
        var l = new i({
          obj: new s({
            int: r
          })
        });
        t.push(l);
      }
      t.push(new s(e.serial));
      t.push(new a({
        name: e.sigalg
      }));
      t.push(new h(e.issuer));
      t.push(new n({
        array: [new o(e.notbefore), new o(e.notafter)]
      }));
      t.push(new h(e.subject));
      t.push(new c(eR.getKey(e.sbjpubkey)));
      if (e.ext !== undefined && e.ext.length > 0) {
        t.push(new i({
          tag: "a3",
          obj: new u(e.ext)
        }));
      }
      return new f.asn1.DERSequence({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.TBSCertificate, f.asn1.ASN1Object);
  f.asn1.x509.Extensions = function (t) {
    f.asn1.x509.Extensions.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.x509;
    this.aParam = [];
    this.setByParam = function (t) {
      this.aParam = t;
    };
    this.tohex = function () {
      var t = [];
      var e = 0;
      for (; e < this.aParam.length; e++) {
        var s = this.aParam[e];
        var n = s.extname;
        var a = null;
        if (s.extn != undefined) {
          a = new i.PrivateExtension(s);
        } else if (n == "subjectKeyIdentifier") {
          a = new i.SubjectKeyIdentifier(s);
        } else if (n == "keyUsage") {
          a = new i.KeyUsage(s);
        } else if (n == "subjectAltName") {
          a = new i.SubjectAltName(s);
        } else if (n == "issuerAltName") {
          a = new i.IssuerAltName(s);
        } else if (n == "basicConstraints") {
          a = new i.BasicConstraints(s);
        } else if (n == "nameConstraints") {
          a = new i.NameConstraints(s);
        } else if (n == "cRLDistributionPoints") {
          a = new i.CRLDistributionPoints(s);
        } else if (n == "certificatePolicies") {
          a = new i.CertificatePolicies(s);
        } else if (n == "policyMappings") {
          a = new i.PolicyMappings(s);
        } else if (n == "policyConstraints") {
          a = new i.PolicyConstraints(s);
        } else if (n == "inhibitAnyPolicy") {
          a = new i.InhibitAnyPolicy(s);
        } else if (n == "authorityKeyIdentifier") {
          a = new i.AuthorityKeyIdentifier(s);
        } else if (n == "extKeyUsage") {
          a = new i.ExtKeyUsage(s);
        } else if (n == "authorityInfoAccess") {
          a = new i.AuthorityInfoAccess(s);
        } else if (n == "cRLNumber") {
          a = new i.CRLNumber(s);
        } else if (n == "cRLReason") {
          a = new i.CRLReason(s);
        } else if (n == "ocspNonce") {
          a = new i.OCSPNonce(s);
        } else if (n == "ocspNoCheck") {
          a = new i.OCSPNoCheck(s);
        } else if (n == "adobeTimeStamp") {
          a = new i.AdobeTimeStamp(s);
        } else if (n == "subjectDirectoryAttributes") {
          a = new i.SubjectDirectoryAttributes(s);
        } else {
          throw Error("extension not supported:" + JSON.stringify(s));
        }
        if (a != null) {
          t.push(a);
        }
      }
      return new r({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.Extensions, f.asn1.ASN1Object);
  f.asn1.x509.Extension = function (t) {
    f.asn1.x509.Extension.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERObjectIdentifier;
    var i = e.DEROctetString;
    e.DERBitString;
    var s = e.DERBoolean;
    var n = e.DERSequence;
    this.tohex = function () {
      var t = new r({
        oid: this.oid
      });
      var e = new i({
        hex: this.getExtnValueHex()
      });
      var a = [];
      a.push(t);
      if (this.critical) {
        a.push(new s());
      }
      a.push(e);
      return new n({
        array: a
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.critical = false;
    if (t !== undefined && t.critical !== undefined) {
      this.critical = t.critical;
    }
  };
  eC(f.asn1.x509.Extension, f.asn1.ASN1Object);
  f.asn1.x509.KeyUsage = function (t) {
    f.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
    var e = Error;
    var r = {
      digitalSignature: 0,
      nonRepudiation: 1,
      keyEncipherment: 2,
      dataEncipherment: 3,
      keyAgreement: 4,
      keyCertSign: 5,
      cRLSign: 6,
      encipherOnly: 7,
      decipherOnly: 8
    };
    this.getExtnValueHex = function () {
      var t = this.getBinValue();
      this.asn1ExtnValue = new f.asn1.DERBitString({
        bin: t
      });
      return this.asn1ExtnValue.tohex();
    };
    this.getBinValue = function () {
      var t = this.params;
      if (typeof t != "object" || typeof t.names != "object" && typeof t.bin != "string") {
        throw new e("parameter not yet set");
      }
      if (t.names != undefined) {
        return eP(t.names, r);
      }
      if (t.bin != undefined) {
        return t.bin;
      }
      throw new e("parameter not set properly");
    };
    this.oid = "2.5.29.15";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.KeyUsage, f.asn1.x509.Extension);
  f.asn1.x509.BasicConstraints = function (t) {
    f.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.DERBoolean;
    var i = e.DERInteger;
    var s = e.DERSequence;
    this.getExtnValueHex = function () {
      var t = [];
      if (this.cA) {
        t.push(new r());
      }
      if (this.pathLen > -1) {
        t.push(new i({
          int: this.pathLen
        }));
      }
      var e = new s({
        array: t
      });
      this.asn1ExtnValue = e;
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.19";
    this.cA = false;
    this.pathLen = -1;
    if (t !== undefined) {
      if (t.cA !== undefined) {
        this.cA = t.cA;
      }
      if (t.pathLen !== undefined) {
        this.pathLen = t.pathLen;
      }
    }
  };
  eC(f.asn1.x509.BasicConstraints, f.asn1.x509.Extension);
  f.asn1.x509.CRLDistributionPoints = function (t) {
    f.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.x509;
    this.getExtnValueHex = function () {
      return this.asn1ExtnValue.tohex();
    };
    this.setByDPArray = function (t) {
      var i = [];
      var s = 0;
      for (; s < t.length; s++) {
        if (t[s] instanceof f.asn1.ASN1Object) {
          i.push(t[s]);
        } else {
          var n = new r.DistributionPoint(t[s]);
          i.push(n);
        }
      }
      this.asn1ExtnValue = new e.DERSequence({
        array: i
      });
    };
    this.setByOneURI = function (t) {
      var e = new r.DistributionPoint({
        fulluri: t
      });
      this.setByDPArray([e]);
    };
    this.oid = "2.5.29.31";
    if (t !== undefined) {
      if (t.array !== undefined) {
        this.setByDPArray(t.array);
      } else if (t.uri !== undefined) {
        this.setByOneURI(t.uri);
      }
    }
  };
  eC(f.asn1.x509.CRLDistributionPoints, f.asn1.x509.Extension);
  f.asn1.x509.DistributionPoint = function (t) {
    f.asn1.x509.DistributionPoint.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.x509.DistributionPointName;
    this.tohex = function () {
      var t = new e.DERSequence();
      if (this.asn1DP != null) {
        var r = new e.DERTaggedObject({
          explicit: true,
          tag: "a0",
          obj: this.asn1DP
        });
        t.appendASN1Object(r);
      }
      this.hTLV = t.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      if (t.dpobj !== undefined) {
        this.asn1DP = t.dpobj;
      } else if (t.dpname !== undefined) {
        this.asn1DP = new r(t.dpname);
      } else if (t.fulluri !== undefined) {
        this.asn1DP = new r({
          full: [{
            uri: t.fulluri
          }]
        });
      }
    }
  };
  eC(f.asn1.x509.DistributionPoint, f.asn1.ASN1Object);
  f.asn1.x509.DistributionPointName = function (t) {
    f.asn1.x509.DistributionPointName.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERTaggedObject;
    this.tohex = function () {
      if (this.type != "full") {
        throw Error("currently type shall be 'full': " + this.type);
      }
      this.asn1Obj = new r({
        explicit: false,
        tag: this.tag,
        obj: this.asn1V
      });
      this.hTLV = this.asn1Obj.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      if (e.x509.GeneralNames.prototype.isPrototypeOf(t)) {
        this.type = "full";
        this.tag = "a0";
        this.asn1V = t;
      } else if (t.full !== undefined) {
        this.type = "full";
        this.tag = "a0";
        this.asn1V = new e.x509.GeneralNames(t.full);
      } else {
        throw Error("This class supports GeneralNames only as argument");
      }
    }
  };
  eC(f.asn1.x509.DistributionPointName, f.asn1.ASN1Object);
  f.asn1.x509.CertificatePolicies = function (t) {
    f.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.x509;
    var i = e.DERSequence;
    var s = r.PolicyInformation;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = [];
      var e = 0;
      for (; e < this.params.array.length; e++) {
        t.push(new s(this.params.array[e]));
      }
      var r = new i({
        array: t
      });
      this.asn1ExtnValue = r;
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.32";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.CertificatePolicies, f.asn1.x509.Extension);
  f.asn1.x509.PolicyInformation = function (t) {
    f.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERObjectIdentifier;
    var s = e.x509.PolicyQualifierInfo;
    this.params = null;
    this.tohex = function () {
      if (this.params.policyoid === undefined && this.params.array === undefined) {
        throw Error("parameter oid and array missing");
      }
      var t = [new i(this.params.policyoid)];
      if (this.params.array !== undefined) {
        var e = [];
        var n = 0;
        for (; n < this.params.array.length; n++) {
          e.push(new s(this.params.array[n]));
        }
        if (e.length > 0) {
          t.push(new r({
            array: e
          }));
        }
      }
      return new r({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.PolicyInformation, f.asn1.ASN1Object);
  f.asn1.x509.PolicyQualifierInfo = function (t) {
    f.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERIA5String;
    var s = e.DERObjectIdentifier;
    var n = e.x509.UserNotice;
    this.params = null;
    this.tohex = function () {
      if (this.params.cps !== undefined) {
        var t = new r({
          array: [new s({
            oid: "1.3.6.1.5.5.7.2.1"
          }), new i({
            str: this.params.cps
          })]
        });
        return t.tohex();
      }
      if (this.params.unotice != undefined) {
        var t = new r({
          array: [new s({
            oid: "1.3.6.1.5.5.7.2.2"
          }), new n(this.params.unotice)]
        });
        return t.tohex();
      }
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.PolicyQualifierInfo, f.asn1.ASN1Object);
  f.asn1.x509.UserNotice = function (t) {
    f.asn1.x509.UserNotice.superclass.constructor.call(this, t);
    var e = f.asn1.DERSequence;
    f.asn1.DERInteger;
    var r = f.asn1.x509.DisplayText;
    var i = f.asn1.x509.NoticeReference;
    this.params = null;
    this.tohex = function () {
      var t = [];
      if (this.params.noticeref !== undefined) {
        t.push(new i(this.params.noticeref));
      }
      if (this.params.exptext !== undefined) {
        t.push(new r(this.params.exptext));
      }
      return new e({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.UserNotice, f.asn1.ASN1Object);
  f.asn1.x509.NoticeReference = function (t) {
    f.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
    var e = f.asn1.DERSequence;
    var r = f.asn1.DERInteger;
    var i = f.asn1.x509.DisplayText;
    this.params = null;
    this.tohex = function () {
      var t = [];
      if (this.params.org !== undefined) {
        t.push(new i(this.params.org));
      }
      if (this.params.noticenum !== undefined) {
        var s = [];
        var n = this.params.noticenum;
        var a = 0;
        for (; a < n.length; a++) {
          s.push(new r(n[a]));
        }
        t.push(new e({
          array: s
        }));
      }
      if (t.length == 0) {
        throw Error("parameter is empty");
      }
      return new e({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.NoticeReference, f.asn1.ASN1Object);
  f.asn1.x509.DisplayText = function (t) {
    f.asn1.x509.DisplayText.superclass.constructor.call(this, t);
    this.hT = "0c";
    if (t !== undefined) {
      if (t.type === "ia5") {
        this.hT = "16";
      } else if (t.type === "vis") {
        this.hT = "1a";
      } else if (t.type === "bmp") {
        this.hT = "1e";
      }
    }
  };
  eC(f.asn1.x509.DisplayText, f.asn1.DERAbstractString);
  f.asn1.x509.PolicyMappings = function (t) {
    f.asn1.x509.PolicyMappings.superclass.constructor.call(this, t);
    var e = f.asn1;
    e.x509;
    var r = e.ASN1Util.newObject;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = this.params;
      var e = [];
      var i = 0;
      for (; i < t.array.length; i++) {
        var s = t.array[i];
        e.push({
          seq: [{
            oid: s[0]
          }, {
            oid: s[1]
          }]
        });
      }
      this.asn1ExtnValue = r({
        seq: e
      });
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.33";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.PolicyMappings, f.asn1.x509.Extension);
  f.asn1.x509.PolicyConstraints = function (t) {
    f.asn1.x509.PolicyConstraints.superclass.constructor.call(this, t);
    var e = f.asn1;
    e.x509;
    var r = e.ASN1Util.newObject;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = this.params;
      var e = [];
      if (t.reqexp != undefined) {
        e.push({
          tag: {
            tagi: "80",
            obj: {
              int: t.reqexp
            }
          }
        });
      }
      if (t.inhibit != undefined) {
        e.push({
          tag: {
            tagi: "81",
            obj: {
              int: t.inhibit
            }
          }
        });
      }
      this.asn1ExtnValue = r({
        seq: e
      });
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.36";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.PolicyConstraints, f.asn1.x509.Extension);
  f.asn1.x509.InhibitAnyPolicy = function (t) {
    f.asn1.x509.InhibitAnyPolicy.superclass.constructor.call(this, t);
    var e = f.asn1;
    e.x509;
    var r = e.ASN1Util.newObject;
    this.params = null;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = r({
        int: this.params.skip
      });
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.54";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.InhibitAnyPolicy, f.asn1.x509.Extension);
  f.asn1.x509.NameConstraints = function (t) {
    f.asn1.x509.NameConstraints.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.x509;
    var i = e.ASN1Util.newObject;
    var s = r.GeneralSubtree;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = this.params;
      var e = [];
      if (t.permit != undefined && t.permit.length != undefined) {
        var r = [];
        var n = 0;
        for (; n < t.permit.length; n++) {
          r.push(new s(t.permit[n]));
        }
        e.push({
          tag: {
            tagi: "a0",
            obj: {
              seq: r
            }
          }
        });
      }
      if (t.exclude != undefined && t.exclude.length != undefined) {
        var a = [];
        var n = 0;
        for (; n < t.exclude.length; n++) {
          a.push(new s(t.exclude[n]));
        }
        e.push({
          tag: {
            tagi: "a1",
            obj: {
              seq: a
            }
          }
        });
      }
      this.asn1ExtnValue = i({
        seq: e
      });
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.30";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.NameConstraints, f.asn1.x509.Extension);
  f.asn1.x509.GeneralSubtree = function (t) {
    f.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.x509.GeneralName;
    var i = e.ASN1Util.newObject;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      var e = [new r(t)];
      if (t.min != undefined) {
        e.push({
          tag: {
            tagi: "80",
            obj: {
              int: t.min
            }
          }
        });
      }
      if (t.max != undefined) {
        e.push({
          tag: {
            tagi: "81",
            obj: {
              int: t.max
            }
          }
        });
      }
      return i({
        seq: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.GeneralSubtree, f.asn1.ASN1Object);
  f.asn1.x509.ExtKeyUsage = function (t) {
    f.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
    var e = f.asn1;
    this.setPurposeArray = function (t) {
      this.asn1ExtnValue = new e.DERSequence();
      for (var r = 0; r < t.length; r++) {
        var i = new e.DERObjectIdentifier(t[r]);
        this.asn1ExtnValue.appendASN1Object(i);
      }
    };
    this.getExtnValueHex = function () {
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.37";
    if (t !== undefined && t.array !== undefined) {
      this.setPurposeArray(t.array);
    }
  };
  eC(f.asn1.x509.ExtKeyUsage, f.asn1.x509.Extension);
  f.asn1.x509.AuthorityKeyIdentifier = function (t) {
    f.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t);
    var e = f;
    var r = e.asn1;
    var i = r.DERTaggedObject;
    var s = r.x509.GeneralNames;
    e.crypto.Util.isKey;
    this.asn1KID = null;
    this.asn1CertIssuer = null;
    this.asn1CertSN = null;
    this.getExtnValueHex = function () {
      var t = [];
      if (this.asn1KID) {
        t.push(new i({
          explicit: false,
          tag: "80",
          obj: this.asn1KID
        }));
      }
      if (this.asn1CertIssuer) {
        t.push(new i({
          explicit: false,
          tag: "a1",
          obj: new s([{
            dn: this.asn1CertIssuer
          }])
        }));
      }
      if (this.asn1CertSN) {
        t.push(new i({
          explicit: false,
          tag: "82",
          obj: this.asn1CertSN
        }));
      }
      var e = new r.DERSequence({
        array: t
      });
      this.asn1ExtnValue = e;
      return this.asn1ExtnValue.tohex();
    };
    this.setKIDByParam = function (t) {
      if (t.str !== undefined || t.hex !== undefined) {
        this.asn1KID = new f.asn1.DEROctetString(t);
      } else if (typeof t == "object" && f.crypto.Util.isKey(t) || typeof t == "string" && t.indexOf("BEGIN ") != -1) {
        var e = t;
        if (typeof t == "string") {
          e = eR.getKey(t);
        }
        var r = eR.getKeyID(e);
        this.asn1KID = new f.asn1.DEROctetString({
          hex: r
        });
      }
    };
    this.setCertIssuerByParam = function (t) {
      if (t.str !== undefined || t.ldapstr !== undefined || t.hex !== undefined || t.certsubject !== undefined || t.certissuer !== undefined) {
        this.asn1CertIssuer = new f.asn1.x509.X500Name(t);
      } else if (typeof t == "string" && t.indexOf("BEGIN ") != -1 && t.indexOf("CERTIFICATE") != -1) {
        this.asn1CertIssuer = new f.asn1.x509.X500Name({
          certissuer: t
        });
      }
    };
    this.setCertSNByParam = function (t) {
      if (t.str !== undefined || t.bigint !== undefined || t.hex !== undefined) {
        this.asn1CertSN = new f.asn1.DERInteger(t);
      } else if (typeof t == "string" && t.indexOf("BEGIN ") != -1 && t.indexOf("CERTIFICATE")) {
        var e = new eH();
        e.readCertPEM(t);
        var r = e.getSerialNumberHex();
        this.asn1CertSN = new f.asn1.DERInteger({
          hex: r
        });
      }
    };
    this.oid = "2.5.29.35";
    if (t !== undefined) {
      if (t.kid !== undefined) {
        this.setKIDByParam(t.kid);
      }
      if (t.issuer !== undefined) {
        this.setCertIssuerByParam(t.issuer);
      }
      if (t.sn !== undefined) {
        this.setCertSNByParam(t.sn);
      }
      if (t.issuersn !== undefined && typeof t.issuersn == "string" && t.issuersn.indexOf("BEGIN ") != -1 && t.issuersn.indexOf("CERTIFICATE")) {
        this.setCertSNByParam(t.issuersn);
        this.setCertIssuerByParam(t.issuersn);
      }
    }
  };
  eC(f.asn1.x509.AuthorityKeyIdentifier, f.asn1.x509.Extension);
  f.asn1.x509.SubjectKeyIdentifier = function (t) {
    f.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
    var e = f.asn1.DEROctetString;
    this.asn1KID = null;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = this.asn1KID;
      return this.asn1ExtnValue.tohex();
    };
    this.setKIDByParam = function (t) {
      if (t.str !== undefined || t.hex !== undefined) {
        this.asn1KID = new e(t);
      } else if (typeof t == "object" && f.crypto.Util.isKey(t) || typeof t == "string" && t.indexOf("BEGIN") != -1) {
        var r = t;
        if (typeof t == "string") {
          r = eR.getKey(t);
        }
        var i = eR.getKeyID(r);
        this.asn1KID = new f.asn1.DEROctetString({
          hex: i
        });
      }
    };
    this.oid = "2.5.29.14";
    if (t !== undefined && t.kid !== undefined) {
      this.setKIDByParam(t.kid);
    }
  };
  eC(f.asn1.x509.SubjectKeyIdentifier, f.asn1.x509.Extension);
  f.asn1.x509.AuthorityInfoAccess = function (t) {
    f.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t);
    this.setAccessDescriptionArray = function (t) {
      var e = [];
      var r = f.asn1;
      var i = r.DERSequence;
      var s = r.DERObjectIdentifier;
      var n = r.x509.GeneralName;
      var a = 0;
      for (; a < t.length; a++) {
        var o;
        var h = t[a];
        if (h.ocsp !== undefined) {
          o = new i({
            array: [new s({
              oid: "1.3.6.1.5.5.7.48.1"
            }), new n({
              uri: h.ocsp
            })]
          });
        } else if (h.caissuer !== undefined) {
          o = new i({
            array: [new s({
              oid: "1.3.6.1.5.5.7.48.2"
            }), new n({
              uri: h.caissuer
            })]
          });
        } else {
          throw Error("unknown AccessMethod parameter: " + JSON.stringify(h));
        }
        e.push(o);
      }
      this.asn1ExtnValue = new i({
        array: e
      });
    };
    this.getExtnValueHex = function () {
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "1.3.6.1.5.5.7.1.1";
    if (t !== undefined && t.array !== undefined) {
      this.setAccessDescriptionArray(t.array);
    }
  };
  eC(f.asn1.x509.AuthorityInfoAccess, f.asn1.x509.Extension);
  f.asn1.x509.SubjectAltName = function (t) {
    f.asn1.x509.SubjectAltName.superclass.constructor.call(this, t);
    this.setNameArray = function (t) {
      this.asn1ExtnValue = new f.asn1.x509.GeneralNames(t);
    };
    this.getExtnValueHex = function () {
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.17";
    if (t !== undefined && t.array !== undefined) {
      this.setNameArray(t.array);
    }
  };
  eC(f.asn1.x509.SubjectAltName, f.asn1.x509.Extension);
  f.asn1.x509.IssuerAltName = function (t) {
    f.asn1.x509.IssuerAltName.superclass.constructor.call(this, t);
    this.setNameArray = function (t) {
      this.asn1ExtnValue = new f.asn1.x509.GeneralNames(t);
    };
    this.getExtnValueHex = function () {
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.18";
    if (t !== undefined && t.array !== undefined) {
      this.setNameArray(t.array);
    }
  };
  eC(f.asn1.x509.IssuerAltName, f.asn1.x509.Extension);
  f.asn1.x509.SubjectDirectoryAttributes = function (t) {
    f.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.ASN1Util.newObject;
    var s = e.x509.OID.name2oid;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = [];
      var e = 0;
      for (; e < this.params.array.length; e++) {
        var n = this.params.array[e];
        if (n.attr != undefined && n.array != undefined) {
          var a = {
            seq: [{
              oid: n.attr
            }, {
              set: n.array
            }]
          };
          t.push(i(a));
          continue;
        }
        var o = {
          seq: [{
            oid: "1.2.3.4"
          }, {
            set: [{
              utf8str: "DE"
            }]
          }]
        };
        if (n.attr == "dateOfBirth") {
          o.seq[0].oid = s(n.attr);
          o.seq[1].set[0] = {
            gentime: n.str
          };
        } else if (n.attr == "placeOfBirth") {
          o.seq[0].oid = s(n.attr);
          o.seq[1].set[0] = {
            utf8str: n.str
          };
        } else if (n.attr == "gender") {
          o.seq[0].oid = s(n.attr);
          o.seq[1].set[0] = {
            prnstr: n.str
          };
        } else if (n.attr == "countryOfCitizenship") {
          o.seq[0].oid = s(n.attr);
          o.seq[1].set[0] = {
            prnstr: n.str
          };
        } else if (n.attr == "countryOfResidence") {
          o.seq[0].oid = s(n.attr);
          o.seq[1].set[0] = {
            prnstr: n.str
          };
        } else {
          throw Error("unsupported attribute: " + n.attr);
        }
        t.push(new i(o));
      }
      var h = new r({
        array: t
      });
      this.asn1ExtnValue = h;
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.9";
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.SubjectDirectoryAttributes, f.asn1.x509.Extension);
  f.asn1.x509.PrivateExtension = function (t) {
    f.asn1.x509.PrivateExtension.superclass.constructor.call(this, t);
    var e = f;
    var r = e.lang.String.isHex;
    var i = e.asn1;
    var s = i.x509.OID.name2oid;
    var n = i.ASN1Util.newObject;
    this.params = null;
    this.setByParam = function (t) {
      this.oid = s(t.extname);
      this.params = t;
    };
    this.getExtnValueHex = function () {
      if (this.params.extname == undefined || this.params.extn == undefined) {
        throw Error("extname or extnhex not specified");
      }
      var t = this.params.extn;
      if (typeof t == "string" && r(t)) {
        return t;
      }
      if (typeof t == "object") {
        try {
          return n(t).tohex();
        } catch (t) {}
      }
      throw Error("unsupported extn value");
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.PrivateExtension, f.asn1.x509.Extension);
  f.asn1.x509.CRL = function (t) {
    f.asn1.x509.CRL.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERBitString;
    var s = e.x509;
    var n = s.AlgorithmIdentifier;
    var a = s.TBSCertList;
    this.params = undefined;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.sign = function () {
      var t = new a(this.params).tohex();
      var e = new f.crypto.Signature({
        alg: this.params.sigalg
      });
      e.init(this.params.cakey);
      e.updateHex(t);
      var r = e.sign();
      this.params.sighex = r;
    };
    this.getPEM = function () {
      return ec(this.tohex(), "X509 CRL");
    };
    this.tohex = function () {
      var t = this.params;
      if (t.tbsobj == undefined) {
        t.tbsobj = new a(t);
      }
      if (t.sighex == undefined && t.cakey != undefined) {
        this.sign();
      }
      if (t.sighex == undefined) {
        throw Error("sighex or cakey parameter not defined");
      }
      var e = [];
      e.push(t.tbsobj);
      e.push(new n({
        name: t.sigalg
      }));
      e.push(new i({
        hex: "00" + t.sighex
      }));
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.CRL, f.asn1.ASN1Object);
  f.asn1.x509.TBSCertList = function (t) {
    f.asn1.x509.TBSCertList.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERInteger;
    var i = e.DERSequence;
    var s = e.DERTaggedObject;
    e.DERObjectIdentifier;
    var n = e.x509;
    var a = n.AlgorithmIdentifier;
    var o = n.Time;
    var h = n.Extensions;
    var u = n.X500Name;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.getRevCertSequence = function () {
      var t = [];
      var e = this.params.revcert;
      var s = 0;
      for (; s < e.length; s++) {
        var n = [new r(e[s].sn), new o(e[s].date)];
        if (e[s].ext != undefined) {
          n.push(new h(e[s].ext));
        }
        t.push(new i({
          array: n
        }));
      }
      return new i({
        array: t
      });
    };
    this.tohex = function () {
      var t = [];
      var e = this.params;
      if (e.version != undefined) {
        var n = new r({
          int: e.version - 1
        });
        t.push(n);
      }
      t.push(new a({
        name: e.sigalg
      }));
      t.push(new u(e.issuer));
      t.push(new o(e.thisupdate));
      if (e.nextupdate != undefined) {
        t.push(new o(e.nextupdate));
      }
      if (e.revcert != undefined) {
        t.push(this.getRevCertSequence());
      }
      if (e.ext != undefined) {
        var c = new h(e.ext);
        t.push(new s({
          tag: "a0",
          explicit: true,
          obj: c
        }));
      }
      return new i({
        array: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.TBSCertList, f.asn1.ASN1Object);
  f.asn1.x509.CRLEntry = function (t) {
    f.asn1.x509.CRLEntry.superclass.constructor.call(this);
    var e = f.asn1;
    this.setCertSerial = function (t) {
      this.sn = new e.DERInteger(t);
    };
    this.setRevocationDate = function (t) {
      this.time = new e.x509.Time(t);
    };
    this.tohex = function () {
      var t = new e.DERSequence({
        array: [this.sn, this.time]
      });
      this.TLV = t.tohex();
      return this.TLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      if (t.time !== undefined) {
        this.setRevocationDate(t.time);
      }
      if (t.sn !== undefined) {
        this.setCertSerial(t.sn);
      }
    }
  };
  eC(f.asn1.x509.CRLEntry, f.asn1.ASN1Object);
  f.asn1.x509.CRLNumber = function (t) {
    f.asn1.x509.CRLNumber.superclass.constructor.call(this, t);
    this.params = undefined;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = new f.asn1.DERInteger(this.params.num);
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.20";
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.CRLNumber, f.asn1.x509.Extension);
  f.asn1.x509.CRLReason = function (t) {
    f.asn1.x509.CRLReason.superclass.constructor.call(this, t);
    this.params = undefined;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = new f.asn1.DEREnumerated(this.params.code);
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "2.5.29.21";
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.CRLReason, f.asn1.x509.Extension);
  f.asn1.x509.OCSPNonce = function (t) {
    f.asn1.x509.OCSPNonce.superclass.constructor.call(this, t);
    this.params = undefined;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = new f.asn1.DEROctetString(this.params);
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "1.3.6.1.5.5.7.48.1.2";
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.OCSPNonce, f.asn1.x509.Extension);
  f.asn1.x509.OCSPNoCheck = function (t) {
    f.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, t);
    this.params = undefined;
    this.getExtnValueHex = function () {
      this.asn1ExtnValue = new f.asn1.DERNull();
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "1.3.6.1.5.5.7.48.1.5";
    if (t != undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.x509.OCSPNoCheck, f.asn1.x509.Extension);
  f.asn1.x509.AdobeTimeStamp = function (t) {
    f.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, t);
    var e = f.asn1;
    var r = e.DERInteger;
    var i = e.DERBoolean;
    var s = e.DERSequence;
    var n = e.x509.GeneralName;
    this.params = null;
    this.getExtnValueHex = function () {
      var t = this.params;
      var e = [new r(1)];
      e.push(new n({
        uri: t.uri
      }));
      if (t.reqauth != undefined) {
        e.push(new i(t.reqauth));
      }
      this.asn1ExtnValue = new s({
        array: e
      });
      return this.asn1ExtnValue.tohex();
    };
    this.oid = "1.2.840.113583.1.1.9.1";
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.AdobeTimeStamp, f.asn1.x509.Extension);
  f.asn1.x509.X500Name = function (t) {
    f.asn1.x509.X500Name.superclass.constructor.call(this);
    this.asn1Array = [];
    this.paramArray = [];
    this.sRule = "utf8";
    var e = f.asn1;
    var r = e.x509;
    var i = r.RDN;
    this.setByString = function (t, e) {
      if (e !== undefined) {
        this.sRule = e;
      }
      var r = t.split("/");
      r.shift();
      var s = [];
      var n = 0;
      for (; n < r.length; n++) {
        if (r[n].match(/^[^=]+=.+$/)) {
          s.push(r[n]);
        } else {
          var a = s.length - 1;
          s[a] = s[a] + "/" + r[n];
        }
      }
      for (var n = 0; n < s.length; n++) {
        this.asn1Array.push(new i({
          str: s[n],
          rule: this.sRule
        }));
      }
    };
    this.setByLdapString = function (t, e) {
      if (e !== undefined) {
        this.sRule = e;
      }
      var i = r.X500Name.ldapToCompat(t);
      this.setByString(i, e);
    };
    this.setByObject = function (t, e) {
      if (e !== undefined) {
        this.sRule = e;
      }
      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          var s = new i({
            str: r + "=" + t[r],
            rule: this.sRule
          });
          if (this.asn1Array) {
            this.asn1Array.push(s);
          } else {
            this.asn1Array = [s];
          }
        }
      }
    };
    this.setByParam = function (t) {
      if (t.rule !== undefined) {
        this.sRule = t.rule;
      }
      if (t.array !== undefined) {
        this.paramArray = t.array;
      } else if (t.str !== undefined) {
        this.setByString(t.str);
      } else if (t.ldapstr !== undefined) {
        this.setByLdapString(t.ldapstr);
      } else if (t.hex !== undefined) {
        this.hTLV = t.hex;
      } else if (t.certissuer !== undefined) {
        var e = new eH();
        e.readCertPEM(t.certissuer);
        this.hTLV = e.getIssuerHex();
      } else if (t.certsubject !== undefined) {
        var e = new eH();
        e.readCertPEM(t.certsubject);
        this.hTLV = e.getSubjectHex();
      } else if (typeof t == "object" && t.certsubject === undefined && t.certissuer === undefined) {
        this.setByObject(t);
      }
    };
    this.tohex = function () {
      if (typeof this.hTLV == "string") {
        return this.hTLV;
      }
      if (this.asn1Array.length == 0 && this.paramArray.length > 0) {
        for (var t = 0; t < this.paramArray.length; t++) {
          var r = {
            array: this.paramArray[t]
          };
          if (this.sRule != "utf8") {
            r.rule = this.sRule;
          }
          var s = new i(r);
          this.asn1Array.push(s);
        }
      }
      var n = new e.DERSequence({
        array: this.asn1Array
      });
      this.hTLV = n.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.X500Name, f.asn1.ASN1Object);
  f.asn1.x509.X500Name.compatToLDAP = function (t) {
    if (t.substr(0, 1) !== "/") {
      throw "malformed input";
    }
    var e = (t = t.substr(1)).split("/");
    e.reverse();
    return (e = e.map(function (t) {
      return t.replace(/,/, "\\,");
    })).join(",");
  };
  f.asn1.x509.X500Name.onelineToLDAP = function (t) {
    return f.asn1.x509.X500Name.compatToLDAP(t);
  };
  f.asn1.x509.X500Name.ldapToCompat = function (t) {
    var e = t.split(",");
    var r = false;
    var i = [];
    var s = 0;
    for (; e.length > 0; s++) {
      var n = e.shift();
      if (r === true) {
        var a = (i.pop() + "," + n).replace(/\\,/g, ",");
        i.push(a);
        r = false;
      } else {
        i.push(n);
      }
      if (n.substr(-1, 1) === "\\") {
        r = true;
      }
    }
    (i = i.map(function (t) {
      return t.replace("/", "\\/");
    })).reverse();
    return "/" + i.join("/");
  };
  f.asn1.x509.X500Name.ldapToOneline = function (t) {
    return f.asn1.x509.X500Name.ldapToCompat(t);
  };
  f.asn1.x509.RDN = function (t) {
    f.asn1.x509.RDN.superclass.constructor.call(this);
    this.asn1Array = [];
    this.paramArray = [];
    this.sRule = "utf8";
    var e = f.asn1.x509.AttributeTypeAndValue;
    this.setByParam = function (t) {
      if (t.rule !== undefined) {
        this.sRule = t.rule;
      }
      if (t.str !== undefined) {
        this.addByMultiValuedString(t.str);
      }
      if (t.array !== undefined) {
        this.paramArray = t.array;
      }
    };
    this.addByString = function (t) {
      this.asn1Array.push(new f.asn1.x509.AttributeTypeAndValue({
        str: t,
        rule: this.sRule
      }));
    };
    this.addByMultiValuedString = function (t) {
      var e = f.asn1.x509.RDN.parseString(t);
      var r = 0;
      for (; r < e.length; r++) {
        this.addByString(e[r]);
      }
    };
    this.tohex = function () {
      if (this.asn1Array.length == 0 && this.paramArray.length > 0) {
        for (var t = 0; t < this.paramArray.length; t++) {
          var r = this.paramArray[t];
          if (r.rule !== undefined && this.sRule != "utf8") {
            r.rule = this.sRule;
          }
          var i = new e(r);
          this.asn1Array.push(i);
        }
      }
      var s = new f.asn1.DERSet({
        array: this.asn1Array
      });
      this.TLV = s.tohex();
      return this.TLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.RDN, f.asn1.ASN1Object);
  f.asn1.x509.RDN.parseString = function (t) {
    var e = t.split(/\+/);
    var r = false;
    var i = [];
    var s = 0;
    for (; e.length > 0; s++) {
      var n = e.shift();
      if (r === true) {
        var a = (i.pop() + "+" + n).replace(/\\\+/g, "+");
        i.push(a);
        r = false;
      } else {
        i.push(n);
      }
      if (n.substr(-1, 1) === "\\") {
        r = true;
      }
    }
    var o = false;
    var h = [];
    var s = 0;
    for (; i.length > 0; s++) {
      var n = i.shift();
      if (o === true) {
        var u = h.pop();
        if (n.match(/"$/)) {
          var a = (u + "+" + n).replace(/^([^=]+)="(.*)"$/, "$1=$2");
          h.push(a);
          o = false;
        } else {
          h.push(u + "+" + n);
        }
      } else {
        h.push(n);
      }
      if (n.match(/^[^=]+="/)) {
        o = true;
      }
    }
    return h;
  };
  f.asn1.x509.AttributeTypeAndValue = function (t) {
    f.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
    this.sRule = "utf8";
    this.sType = null;
    this.sValue = null;
    this.dsType = null;
    var e = f;
    var r = e.asn1;
    var i = r.DERSequence;
    var s = r.DERUTF8String;
    var n = r.DERPrintableString;
    var a = r.DERTeletexString;
    var o = r.DERIA5String;
    var h = r.DERVisibleString;
    var u = r.DERBMPString;
    var c = e.lang.String.isMail;
    var l = e.lang.String.isPrintable;
    this.setByParam = function (t) {
      if (t.rule !== undefined) {
        this.sRule = t.rule;
      }
      if (t.ds !== undefined) {
        this.dsType = t.ds;
      }
      if (t.value === undefined && t.str !== undefined) {
        var e = t.str.match(/^([^=]+)=(.+)$/);
        if (e) {
          this.sType = e[1];
          this.sValue = e[2];
        } else {
          throw Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
        }
      } else {
        this.sType = t.type;
        this.sValue = t.value;
      }
    };
    this.setByString = function (t, e) {
      if (e !== undefined) {
        this.sRule = e;
      }
      var r = t.match(/^([^=]+)=(.+)$/);
      if (r) {
        this.setByAttrTypeAndValueStr(r[1], r[2]);
      } else {
        throw Error("malformed attrTypeAndValueStr: " + attrTypeAndValueStr);
      }
    };
    this._getDsType = function () {
      var t = this.sType;
      var e = this.sValue;
      var r = this.sRule;
      if (r === "prn") {
        if (t == "CN" && c(e)) {
          return "ia5";
        }
        if (l(e)) {
          return "prn";
        }
      } else if (r === "utf8") {
        if (t == "CN" && c(e)) {
          return "ia5";
        }
        if (t == "C") {
          return "prn";
        }
      }
      return "utf8";
    };
    this.setByAttrTypeAndValueStr = function (t, e, r) {
      if (r !== undefined) {
        this.sRule = r;
      }
      this.sType = t;
      this.sValue = e;
    };
    this.getValueObj = function (t, e) {
      if (t == "utf8") {
        return new s({
          str: e
        });
      }
      if (t == "prn") {
        return new n({
          str: e
        });
      }
      if (t == "tel") {
        return new a({
          str: e
        });
      }
      if (t == "ia5") {
        return new o({
          str: e
        });
      }
      if (t == "vis") {
        return new h({
          str: e
        });
      }
      if (t == "bmp") {
        return new u({
          str: e
        });
      }
      throw Error("unsupported directory string type: type=" + t + " value=" + e);
    };
    this.tohex = function () {
      if (this.dsType == null) {
        this.dsType = this._getDsType();
      }
      var t = new i({
        array: [f.asn1.x509.OID.atype2obj(this.sType), this.getValueObj(this.dsType, this.sValue)]
      });
      this.TLV = t.tohex();
      return this.TLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.AttributeTypeAndValue, f.asn1.ASN1Object);
  f.asn1.x509.SubjectPublicKeyInfo = function (t) {
    f.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
    var e = f;
    var r = e.asn1;
    var i = r.DERInteger;
    var s = r.DERBitString;
    var n = r.DERObjectIdentifier;
    var a = r.DERSequence;
    var o = r.ASN1Util.newObject;
    var h = r.x509.AlgorithmIdentifier;
    var u = e.crypto;
    u.ECDSA;
    u.DSA;
    this.getASN1Object = function () {
      if (this.asn1AlgId == null || this.asn1SubjPKey == null) {
        throw "algId and/or subjPubKey not set";
      }
      return new a({
        array: [this.asn1AlgId, this.asn1SubjPKey]
      });
    };
    this.tohex = function () {
      var t = this.getASN1Object();
      this.hTLV = t.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setPubKey = function (t) {
      try {
        if (t instanceof t5) {
          var e = o({
            seq: [{
              int: {
                bigint: t.n
              }
            }, {
              int: {
                int: t.e
              }
            }]
          }).tohex();
          this.asn1AlgId = new h({
            name: "rsaEncryption"
          });
          this.asn1SubjPKey = new s({
            hex: "00" + e
          });
        }
      } catch (t) {}
      try {
        if (t instanceof f.crypto.ECDSA) {
          var r = new n({
            name: t.curveName
          });
          this.asn1AlgId = new h({
            name: "ecPublicKey",
            asn1params: r
          });
          this.asn1SubjPKey = new s({
            hex: "00" + t.pubKeyHex
          });
        }
      } catch (t) {}
      try {
        if (t instanceof f.crypto.DSA) {
          var r = new o({
            seq: [{
              int: {
                bigint: t.p
              }
            }, {
              int: {
                bigint: t.q
              }
            }, {
              int: {
                bigint: t.g
              }
            }]
          });
          this.asn1AlgId = new h({
            name: "dsa",
            asn1params: r
          });
          var a = new i({
            bigint: t.y
          });
          this.asn1SubjPKey = new s({
            hex: "00" + a.tohex()
          });
        }
      } catch (t) {}
    };
    if (t !== undefined) {
      this.setPubKey(t);
    }
  };
  eC(f.asn1.x509.SubjectPublicKeyInfo, f.asn1.ASN1Object);
  f.asn1.x509.Time = function (t) {
    f.asn1.x509.Time.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERUTCTime;
    var i = e.DERGeneralizedTime;
    this.params = null;
    this.type = null;
    this.setTimeParams = function (t) {
      this.timeParams = t;
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    this.getType = function (t) {
      if (t.match(/^[0-9]{12}Z$/)) {
        return "utc";
      } else if (t.match(/^[0-9]{14}Z$/)) {
        return "gen";
      } else if (t.match(/^[0-9]{12}\.[0-9]+Z$/)) {
        return "utc";
      } else if (t.match(/^[0-9]{14}\.[0-9]+Z$/)) {
        return "gen";
      } else {
        return null;
      }
    };
    this.tohex = function () {
      var t = this.params;
      var e = null;
      if (typeof t == "string") {
        t = {
          str: t
        };
      }
      if (t != null && t.str && (t.type == null || t.type == undefined)) {
        t.type = this.getType(t.str);
      }
      if (t != null && t.str) {
        if (t.type == "utc") {
          e = new r(t.str);
        }
        if (t.type == "gen") {
          e = new i(t.str);
        }
      } else {
        e = this.type == "gen" ? new i() : new r();
      }
      if (e == null) {
        throw Error("wrong setting for Time");
      }
      this.TLV = e.tohex();
      return this.TLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  f.asn1.x509.Time_bak = function (t) {
    f.asn1.x509.Time_bak.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERUTCTime;
    var i = e.DERGeneralizedTime;
    this.setTimeParams = function (t) {
      this.timeParams = t;
    };
    this.tohex = function () {
      var t = null;
      t = this.timeParams != null ? this.type == "utc" ? new r(this.timeParams) : new i(this.timeParams) : this.type == "utc" ? new r() : new i();
      this.TLV = t.tohex();
      return this.TLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.type = "utc";
    if (t !== undefined) {
      if (t.type !== undefined) {
        this.type = t.type;
      } else if (t.str !== undefined) {
        if (t.str.match(/^[0-9]{12}Z$/)) {
          this.type = "utc";
        }
        if (t.str.match(/^[0-9]{14}Z$/)) {
          this.type = "gen";
        }
      }
      this.timeParams = t;
    }
  };
  eC(f.asn1.x509.Time, f.asn1.ASN1Object);
  f.asn1.x509.AlgorithmIdentifier = function (t) {
    f.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);
    this.nameAlg = null;
    this.asn1Alg = null;
    this.asn1Params = null;
    this.paramEmpty = false;
    var e = f.asn1;
    var r = e.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
    this.tohex = function () {
      if (this.nameAlg === null && this.asn1Alg === null) {
        throw Error("algorithm not specified");
      }
      if (this.nameAlg !== null) {
        var t = null;
        for (var i in r) {
          if (i === this.nameAlg) {
            t = r[i];
          }
        }
        if (t !== null) {
          this.hTLV = t;
          return this.hTLV;
        }
      }
      if (this.nameAlg !== null && this.asn1Alg === null) {
        this.asn1Alg = e.x509.OID.name2obj(this.nameAlg);
      }
      var s = [this.asn1Alg];
      if (this.asn1Params !== null) {
        s.push(this.asn1Params);
      }
      var n = new e.DERSequence({
        array: s
      });
      this.hTLV = n.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      if (t.name !== undefined) {
        this.nameAlg = t.name;
      }
      if (t.asn1params !== undefined) {
        this.asn1Params = t.asn1params;
      }
      if (t.paramempty !== undefined) {
        this.paramEmpty = t.paramempty;
      }
    }
    if (this.asn1Params === null && this.paramEmpty === false && this.nameAlg !== null) {
      if (this.nameAlg.name !== undefined) {
        this.nameAlg = this.nameAlg.name;
      }
      var i = this.nameAlg.toLowerCase();
      if (i.substr(-7, 7) !== "withdsa" && i.substr(-9, 9) !== "withecdsa") {
        this.asn1Params = new e.DERNull();
      }
    }
  };
  eC(f.asn1.x509.AlgorithmIdentifier, f.asn1.ASN1Object);
  f.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
    SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000",
    SHA256withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120",
    SHA384withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130",
    SHA512withRSAandMGF1: "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140"
  };
  f.asn1.x509.GeneralName = function (t) {
    f.asn1.x509.GeneralName.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.x509;
    var i = r.X500Name;
    var s = r.OtherName;
    var n = e.DERIA5String;
    e.DERPrintableString;
    var a = e.DEROctetString;
    var o = e.DERTaggedObject;
    var h = e.ASN1Object;
    var u = Error;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      var e = false;
      if (t.other !== undefined) {
        r = "a0";
        c = new s(t.other);
      } else if (t.rfc822 !== undefined) {
        r = "81";
        c = new n({
          str: t.rfc822
        });
      } else if (t.dns !== undefined) {
        r = "82";
        c = new n({
          str: t.dns
        });
      } else if (t.dn !== undefined) {
        r = "a4";
        e = true;
        c = typeof t.dn == "string" ? new i({
          str: t.dn
        }) : t.dn instanceof f.asn1.x509.X500Name ? t.dn : new i(t.dn);
      } else if (t.ldapdn !== undefined) {
        r = "a4";
        e = true;
        c = new i({
          ldapstr: t.ldapdn
        });
      } else if (t.certissuer !== undefined || t.certsubj !== undefined) {
        r = "a4";
        e = true;
        var r;
        var e;
        var c;
        var l;
        var d;
        var p;
        var g = null;
        if (t.certsubj !== undefined) {
          l = false;
          d = t.certsubj;
        } else {
          l = true;
          d = t.certissuer;
        }
        d.match(/^[0-9A-Fa-f]+$/);
        if (d.indexOf("-----BEGIN ") != -1) {
          g = el(d);
        }
        if (g == null) {
          throw Error("certsubj/certissuer not cert");
        }
        var v = new eH();
        v.hex = g;
        p = l ? v.getIssuerHex() : v.getSubjectHex();
        (c = new h()).hTLV = p;
      } else if (t.uri !== undefined) {
        r = "86";
        c = new n({
          str: t.uri
        });
      } else if (t.ip !== undefined) {
        r = "87";
        var x;
        var m = t.ip;
        try {
          if (m.match(/^[0-9a-f]+$/)) {
            var y = m.length;
            if (y == 8 || y == 16 || y == 32 || y == 64) {
              x = m;
            } else {
              throw "err";
            }
          } else {
            x = function t(e) {
              var r = Error("malformed IP address");
              if (!(e = e.toLowerCase(e)).match(/^[0-9a-f.:/]+$/)) {
                throw r;
              }
              if (e.match(/^[0-9.]+$/)) {
                var i = e.split(".");
                if (i.length !== 4) {
                  throw r;
                }
                var s = "";
                try {
                  for (var n = 0; n < 4; n++) {
                    var a = parseInt(i[n]);
                    s += ("0" + a.toString(16)).slice(-2);
                  }
                  return s;
                } catch (t) {
                  throw r;
                }
              } else {
                if (e.match(/^[0-9.]+\/[0-9]+$/)) {
                  var o = e.split("/");
                  return t(o[0]) + em(parseInt(o[1]), 32);
                }
                if (e.match(/^[0-9a-f:]+$/) && e.indexOf(":") !== -1) {
                  return ep(e);
                }
                if (e.match(/^[0-9a-f:]+\/[0-9]+$/) && e.indexOf(":") !== -1) {
                  var o = e.split("/");
                  return ep(o[0]) + em(parseInt(o[1]), 128);
                }
                throw r;
              }
            }(m);
          }
        } catch (e) {
          throw new u("malformed IP address: " + t.ip + ":" + e.message);
        }
        c = new a({
          hex: x
        });
      } else {
        throw new u("improper params");
      }
      return new o({
        tag: r,
        explicit: e,
        obj: c
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.GeneralName, f.asn1.ASN1Object);
  f.asn1.x509.GeneralNames = function (t) {
    f.asn1.x509.GeneralNames.superclass.constructor.call(this);
    var e = f.asn1;
    this.setByParamArray = function (t) {
      for (var r = 0; r < t.length; r++) {
        var i = new e.x509.GeneralName(t[r]);
        this.asn1Array.push(i);
      }
    };
    this.tohex = function () {
      return new e.DERSequence({
        array: this.asn1Array
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.asn1Array = [];
    if (t !== undefined) {
      this.setByParamArray(t);
    }
  };
  eC(f.asn1.x509.GeneralNames, f.asn1.ASN1Object);
  f.asn1.x509.OtherName = function (t) {
    f.asn1.x509.OtherName.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERObjectIdentifier;
    var i = e.DERSequence;
    var s = e.ASN1Util.newObject;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      if (t.oid == undefined || t.value == undefined) {
        throw Error("oid or value not specified");
      }
      return new i({
        array: [new r({
          oid: t.oid
        }), s({
          tag: {
            tag: "a0",
            explicit: true,
            obj: t.value
          }
        })]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.x509.OtherName, f.asn1.ASN1Object);
  f.asn1.x509.OID = new function () {
    var t = f.asn1.DERObjectIdentifier;
    this.name2oidList = {
      "aes128-CBC": "2.16.840.1.101.3.4.1.2",
      "aes256-CBC": "2.16.840.1.101.3.4.1.42",
      sha1: "1.3.14.3.2.26",
      sha256: "2.16.840.1.101.3.4.2.1",
      sha384: "2.16.840.1.101.3.4.2.2",
      sha512: "2.16.840.1.101.3.4.2.3",
      sha224: "2.16.840.1.101.3.4.2.4",
      md5: "1.2.840.113549.2.5",
      md2: "1.3.14.7.2.2.1",
      ripemd160: "1.3.36.3.2.1",
      hmacWithSHA1: "1.2.840.113549.2.7",
      hmacWithSHA224: "1.2.840.113549.2.8",
      hmacWithSHA256: "1.2.840.113549.2.9",
      hmacWithSHA384: "1.2.840.113549.2.10",
      hmacWithSHA512: "1.2.840.113549.2.11",
      MD2withRSA: "1.2.840.113549.1.1.2",
      MD4withRSA: "1.2.840.113549.1.1.3",
      MD5withRSA: "1.2.840.113549.1.1.4",
      SHA1withRSA: "1.2.840.113549.1.1.5",
      "pkcs1-MGF": "1.2.840.113549.1.1.8",
      rsaPSS: "1.2.840.113549.1.1.10",
      SHA224withRSA: "1.2.840.113549.1.1.14",
      SHA256withRSA: "1.2.840.113549.1.1.11",
      SHA384withRSA: "1.2.840.113549.1.1.12",
      SHA512withRSA: "1.2.840.113549.1.1.13",
      SHA1withECDSA: "1.2.840.10045.4.1",
      SHA224withECDSA: "1.2.840.10045.4.3.1",
      SHA256withECDSA: "1.2.840.10045.4.3.2",
      SHA384withECDSA: "1.2.840.10045.4.3.3",
      SHA512withECDSA: "1.2.840.10045.4.3.4",
      dsa: "1.2.840.10040.4.1",
      SHA1withDSA: "1.2.840.10040.4.3",
      SHA224withDSA: "2.16.840.1.101.3.4.3.1",
      SHA256withDSA: "2.16.840.1.101.3.4.3.2",
      rsaEncryption: "1.2.840.113549.1.1.1",
      commonName: "2.5.4.3",
      countryName: "2.5.4.6",
      localityName: "2.5.4.7",
      stateOrProvinceName: "2.5.4.8",
      streetAddress: "2.5.4.9",
      organizationName: "2.5.4.10",
      organizationalUnitName: "2.5.4.11",
      domainComponent: "0.9.2342.19200300.100.1.25",
      userId: "0.9.2342.19200300.100.1.1",
      surname: "2.5.4.4",
      givenName: "2.5.4.42",
      title: "2.5.4.12",
      distinguishedName: "2.5.4.49",
      emailAddress: "1.2.840.113549.1.9.1",
      description: "2.5.4.13",
      businessCategory: "2.5.4.15",
      postalCode: "2.5.4.17",
      uniqueIdentifier: "2.5.4.45",
      organizationIdentifier: "2.5.4.97",
      jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
      jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
      jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
      subjectDirectoryAttributes: "2.5.29.9",
      subjectKeyIdentifier: "2.5.29.14",
      keyUsage: "2.5.29.15",
      subjectAltName: "2.5.29.17",
      issuerAltName: "2.5.29.18",
      basicConstraints: "2.5.29.19",
      cRLNumber: "2.5.29.20",
      cRLReason: "2.5.29.21",
      nameConstraints: "2.5.29.30",
      cRLDistributionPoints: "2.5.29.31",
      certificatePolicies: "2.5.29.32",
      anyPolicy: "2.5.29.32.0",
      policyMappings: "2.5.29.33",
      authorityKeyIdentifier: "2.5.29.35",
      policyConstraints: "2.5.29.36",
      extKeyUsage: "2.5.29.37",
      inhibitAnyPolicy: "2.5.29.54",
      authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
      ocsp: "1.3.6.1.5.5.7.48.1",
      ocspBasic: "1.3.6.1.5.5.7.48.1.1",
      ocspNonce: "1.3.6.1.5.5.7.48.1.2",
      ocspNoCheck: "1.3.6.1.5.5.7.48.1.5",
      caIssuers: "1.3.6.1.5.5.7.48.2",
      anyExtendedKeyUsage: "2.5.29.37.0",
      serverAuth: "1.3.6.1.5.5.7.3.1",
      clientAuth: "1.3.6.1.5.5.7.3.2",
      codeSigning: "1.3.6.1.5.5.7.3.3",
      emailProtection: "1.3.6.1.5.5.7.3.4",
      timeStamping: "1.3.6.1.5.5.7.3.8",
      ocspSigning: "1.3.6.1.5.5.7.3.9",
      smtpUTF8Mailbox: "1.3.6.1.5.5.7.8.9",
      dateOfBirth: "1.3.6.1.5.5.7.9.1",
      placeOfBirth: "1.3.6.1.5.5.7.9.2",
      gender: "1.3.6.1.5.5.7.9.3",
      countryOfCitizenship: "1.3.6.1.5.5.7.9.4",
      countryOfResidence: "1.3.6.1.5.5.7.9.5",
      ecPublicKey: "1.2.840.10045.2.1",
      "P-256": "1.2.840.10045.3.1.7",
      secp256r1: "1.2.840.10045.3.1.7",
      secp256k1: "1.3.132.0.10",
      secp384r1: "1.3.132.0.34",
      secp521r1: "1.3.132.0.35",
      pkcs5PBES2: "1.2.840.113549.1.5.13",
      pkcs5PBKDF2: "1.2.840.113549.1.5.12",
      "des-EDE3-CBC": "1.2.840.113549.3.7",
      data: "1.2.840.113549.1.7.1",
      "signed-data": "1.2.840.113549.1.7.2",
      "enveloped-data": "1.2.840.113549.1.7.3",
      "digested-data": "1.2.840.113549.1.7.5",
      "encrypted-data": "1.2.840.113549.1.7.6",
      "authenticated-data": "1.2.840.113549.1.9.16.1.2",
      tstinfo: "1.2.840.113549.1.9.16.1.4",
      signingCertificate: "1.2.840.113549.1.9.16.2.12",
      timeStampToken: "1.2.840.113549.1.9.16.2.14",
      signaturePolicyIdentifier: "1.2.840.113549.1.9.16.2.15",
      etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27",
      signingCertificateV2: "1.2.840.113549.1.9.16.2.47",
      etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48",
      extensionRequest: "1.2.840.113549.1.9.14",
      contentType: "1.2.840.113549.1.9.3",
      messageDigest: "1.2.840.113549.1.9.4",
      signingTime: "1.2.840.113549.1.9.5",
      counterSignature: "1.2.840.113549.1.9.6",
      archiveTimeStampV3: "0.4.0.1733.2.4",
      pdfRevocationInfoArchival: "1.2.840.113583.1.1.8",
      adobeTimeStamp: "1.2.840.113583.1.1.9.1",
      smimeMailboxLegacy: "2.23.140.1.5.1.1",
      smimeMailboxMulti: "2.23.140.1.5.1.2",
      smimeMailboxStrict: "2.23.140.1.5.1.3",
      smimeOrganizationLegacy: "2.23.140.1.5.2.1",
      smimeOrganizationMulti: "2.23.140.1.5.2.2",
      smimeOrganizationStrict: "2.23.140.1.5.2.3",
      smimeSponsorLegacy: "2.23.140.1.5.3.1",
      smimeSponsorMulti: "2.23.140.1.5.3.2",
      smimeSponsorStrict: "2.23.140.1.5.3.3",
      smimeIndividualLegacy: "2.23.140.1.5.4.1",
      smimeIndividualMulti: "2.23.140.1.5.4.2",
      smimeIndividualStrict: "2.23.140.1.5.4.3"
    };
    this.atype2oidList = {
      CN: "2.5.4.3",
      L: "2.5.4.7",
      ST: "2.5.4.8",
      O: "2.5.4.10",
      OU: "2.5.4.11",
      C: "2.5.4.6",
      STREET: "2.5.4.9",
      DC: "0.9.2342.19200300.100.1.25",
      UID: "0.9.2342.19200300.100.1.1",
      SN: "2.5.4.4",
      T: "2.5.4.12",
      GN: "2.5.4.42",
      DN: "2.5.4.49",
      E: "1.2.840.113549.1.9.1",
      description: "2.5.4.13",
      businessCategory: "2.5.4.15",
      postalCode: "2.5.4.17",
      serialNumber: "2.5.4.5",
      uniqueIdentifier: "2.5.4.45",
      organizationIdentifier: "2.5.4.97",
      jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
      jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
      jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3"
    };
    this.objCache = {};
    this.name2obj = function (e) {
      if (this.objCache[e] !== undefined) {
        return this.objCache[e];
      }
      if (this.name2oidList[e] === undefined) {
        throw "Name of ObjectIdentifier not defined: " + e;
      }
      var r = new t({
        oid: this.name2oidList[e]
      });
      this.objCache[e] = r;
      return r;
    };
    this.atype2obj = function (e) {
      if (this.objCache[e] !== undefined) {
        return this.objCache[e];
      }
      if (e.match(/^\d+\.\d+\.[0-9.]+$/)) {
        r = e;
      } else if (this.atype2oidList[e] !== undefined) {
        r = this.atype2oidList[e];
      } else if (this.name2oidList[e] !== undefined) {
        r = this.name2oidList[e];
      } else {
        throw Error("AttributeType name undefined: " + e);
      }
      var r;
      var i = new t({
        oid: r
      });
      this.objCache[e] = i;
      return i;
    };
    this.registerOIDs = function (t) {
      if (this.checkOIDs(t)) {
        for (var e in t) {
          this.name2oidList[e] = t[e];
        }
      }
    };
    this.checkOIDs = function (t) {
      try {
        var e = Object.keys(t);
        if (e.length == 0) {
          return false;
        }
        e.map(function (t, e, r) {
          if (!this[t].match(/^[0-2]\.[0-9.]+$/)) {
            throw Error("value is not OID");
          }
        }, t);
        return true;
      } catch (t) {
        return false;
      }
    };
  }();
  f.asn1.x509.OID.oid2name = function (t) {
    var e = f.asn1.x509.OID.name2oidList;
    for (var r in e) {
      if (e[r] == t) {
        return r;
      }
    }
    return "";
  };
  f.asn1.x509.OID.oid2atype = function (t) {
    var e = f.asn1.x509.OID.atype2oidList;
    for (var r in e) {
      if (e[r] == t) {
        return r;
      }
    }
    return t;
  };
  f.asn1.x509.OID.name2oid = function (t) {
    if (t.match(/^[0-9.]+$/)) {
      return t;
    }
    var e = f.asn1.x509.OID.name2oidList;
    if (e[t] === undefined) {
      return "";
    } else {
      return e[t];
    }
  };
  f.asn1.x509.X509Util = {};
  f.asn1.x509.X509Util.newCertPEM = function (t) {
    var e = f.asn1.x509;
    return new (e.TBSCertificate, e.Certificate)(t).getPEM();
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  if (f.asn1.cms === undefined || !f.asn1.cms) {
    f.asn1.cms = {};
  }
  f.asn1.cms.Attribute = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.DERSet;
    var n = r.DERObjectIdentifier;
    this.params = null;
    this.typeOid = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.getValueArray = function () {
      throw new e("not yet implemented abstract");
    };
    this.tohex = function () {
      return new i({
        array: [new n({
          oid: this.typeOid
        }), new s({
          array: this.getValueArray()
        })]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
  };
  eC(f.asn1.cms.Attribute, f.asn1.ASN1Object);
  f.asn1.cms.ContentType = function (t) {
    var e = f.asn1;
    e.cms.ContentType.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.3";
    this.getValueArray = function () {
      return [new e.DERObjectIdentifier(this.params.type)];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.ContentType, f.asn1.cms.Attribute);
  f.asn1.cms.MessageDigest = function (t) {
    var e = f.asn1;
    var r = e.DEROctetString;
    e.cms.MessageDigest.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.4";
    this.getValueArray = function () {
      return [new r(this.params)];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.MessageDigest, f.asn1.cms.Attribute);
  f.asn1.cms.SigningTime = function (t) {
    var e = f.asn1;
    e.cms.SigningTime.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.5";
    this.getValueArray = function () {
      return [new e.x509.Time(this.params)];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SigningTime, f.asn1.cms.Attribute);
  f.asn1.cms.SigningCertificate = function (t) {
    var e = Error;
    var r = f;
    var i = r.asn1;
    var s = i.DERSequence;
    var n = i.cms;
    var a = n.ESSCertID;
    r.crypto;
    n.SigningCertificate.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.16.2.12";
    this.getValueArray = function () {
      if (this.params == null || this.params == undefined || this.params.array == undefined) {
        throw new e("parameter 'array' not specified");
      }
      var r = this.params.array;
      var i = [];
      var n = 0;
      for (; n < r.length; n++) {
        var o = r[n];
        if (t.hasis == false && typeof o == "string" && (o.indexOf("-----BEGIN") != -1 || t9.isASN1HEX(o))) {
          o = {
            cert: o
          };
        }
        if (o.hasis != false && t.hasis == false) {
          o.hasis = false;
        }
        i.push(new a(o));
      }
      var h = new s({
        array: i
      });
      return [new s({
        array: [h]
      })];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SigningCertificate, f.asn1.cms.Attribute);
  f.asn1.cms.ESSCertID = function (t) {
    f.asn1.cms.ESSCertID.superclass.constructor.call(this);
    var e = Error;
    var r = f;
    var i = r.asn1;
    var s = i.DEROctetString;
    var n = i.DERSequence;
    var a = i.cms.IssuerSerial;
    this.params = null;
    this.getCertHash = function (t, i) {
      var s;
      var n;
      var a;
      if (t.hash != undefined) {
        return t.hash;
      }
      if (typeof t == "string" && t.indexOf("-----BEGIN") == -1 && !t9.isASN1HEX(t)) {
        return t;
      }
      if (typeof t == "string") {
        s = t;
      } else if (t.cert != undefined) {
        s = t.cert;
      } else {
        throw new e("hash nor cert unspecified");
      }
      n = s.indexOf("-----BEGIN") != -1 ? el(s) : s;
      if (typeof t == "string") {
        if (t.indexOf("-----BEGIN") != -1) {
          n = el(t);
        } else if (t9.isASN1HEX(t)) {
          n = t;
        }
      }
      if (t.alg != undefined) {
        a = t.alg;
      } else if (i != undefined) {
        a = i;
      } else {
        throw new e("hash alg unspecified");
      }
      return r.crypto.Util.hashHex(n, a);
    };
    this.tohex = function () {
      var t = this.params;
      var e = this.getCertHash(t, "sha1");
      var r = [];
      r.push(new s({
        hex: e
      }));
      if (typeof t == "string" && t.indexOf("-----BEGIN") != -1 || t.cert != undefined && t.hasis != false || t.issuer != undefined && t.serial != undefined) {
        r.push(new a(t));
      }
      return new n({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.ESSCertID, f.asn1.ASN1Object);
  f.asn1.cms.SigningCertificateV2 = function (t) {
    var e = Error;
    var r = f;
    var i = r.asn1;
    var s = i.DERSequence;
    i.x509;
    var n = i.cms;
    var a = n.ESSCertIDv2;
    r.crypto;
    n.SigningCertificateV2.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.16.2.47";
    this.getValueArray = function () {
      if (this.params == null || this.params == undefined || this.params.array == undefined) {
        throw new e("parameter 'array' not specified");
      }
      var r = this.params.array;
      var i = [];
      var n = 0;
      for (; n < r.length; n++) {
        var o = r[n];
        if ((t.alg != undefined || t.hasis == false) && typeof o == "string" && (o.indexOf("-----BEGIN") != -1 || t9.isASN1HEX(o))) {
          o = {
            cert: o
          };
        }
        if (o.alg == undefined && t.alg != undefined) {
          o.alg = t.alg;
        }
        if (o.hasis != false && t.hasis == false) {
          o.hasis = false;
        }
        i.push(new a(o));
      }
      var h = new s({
        array: i
      });
      return [new s({
        array: [h]
      })];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SigningCertificateV2, f.asn1.cms.Attribute);
  f.asn1.cms.ESSCertIDv2 = function (t) {
    f.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DEROctetString;
    var i = e.DERSequence;
    var s = e.cms.IssuerSerial;
    var n = e.x509.AlgorithmIdentifier;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = this.getCertHash(t, "sha256");
      var a = [];
      if (t.alg != undefined && t.alg != "sha256") {
        a.push(new n({
          name: t.alg
        }));
      }
      a.push(new r({
        hex: e
      }));
      if (typeof t == "string" && t.indexOf("-----BEGIN") != -1 || t.cert != undefined && t.hasis != false || t.issuer != undefined && t.serial != undefined) {
        a.push(new s(t));
      }
      return new i({
        array: a
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.ESSCertIDv2, f.asn1.cms.ESSCertID);
  f.asn1.cms.IssuerSerial = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERInteger;
    var s = r.DERSequence;
    var n = r.cms;
    var a = r.x509.GeneralNames;
    n.IssuerSerial.superclass.constructor.call(this);
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      if (typeof t == "string" && t.indexOf("-----BEGIN") != -1 || t.cert != undefined) {
        o = t.cert != undefined ? t.cert : t;
        var r;
        var n;
        var o;
        var h = new eH();
        h.readCertPEM(o);
        r = h.getIssuer();
        n = {
          hex: h.getSerialNumberHex()
        };
      } else if (t.issuer != undefined && t.serial) {
        r = t.issuer;
        n = t.serial;
      } else {
        throw new e("cert or issuer and serial parameter not specified");
      }
      return new s({
        array: [new a([{
          dn: r
        }]), new i(n)]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.IssuerSerial, f.asn1.ASN1Object);
  f.asn1.cms.SignerIdentifier = function (t) {
    var e = f.asn1;
    e.DERInteger;
    e.DERSequence;
    var r = e.cms;
    var i = r.IssuerAndSerialNumber;
    var s = r.SubjectKeyIdentifier;
    e.x509.X500Name;
    r.SignerIdentifier.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.type == "isssn") {
        return new i(t).tohex();
      }
      if (t.type == "skid") {
        return new s(t).tohex();
      }
      throw Error("wrong property for isssn or skid");
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SignerIdentifier, f.asn1.ASN1Object);
  f.asn1.cms.IssuerAndSerialNumber = function (t) {
    var e = f.asn1;
    var r = e.DERInteger;
    var i = e.DERSequence;
    var s = e.cms;
    var n = e.x509.X500Name;
    var a = Error;
    s.IssuerAndSerialNumber.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (typeof t == "string" && t.indexOf("-----BEGIN") != -1 || t.cert != undefined) {
        o = t.cert != undefined ? t.cert : t;
        var e;
        var s;
        var o;
        var h = new eH();
        h.readCertPEM(o);
        e = h.getIssuer();
        s = {
          hex: h.getSerialNumberHex()
        };
      } else if (t.issuer != undefined && t.serial) {
        e = t.issuer;
        s = t.serial;
      } else {
        throw new a("cert or issuer and serial parameter not specified");
      }
      return new i({
        array: [new n(e), new r(s)]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.IssuerAndSerialNumber, f.asn1.ASN1Object);
  f.asn1.cms.SubjectKeyIdentifier = function (t) {
    var e = f.asn1;
    e.DERInteger;
    e.DERSequence;
    var r = e.ASN1Util.newObject;
    var i = e.cms;
    (i.IssuerAndSerialName, i.SubjectKeyIdentifier, e.x509).X500Name;
    var s = Error;
    i.SubjectKeyIdentifier.superclass.constructor.call(this);
    this.tohex = function () {
      var t;
      var e = this.params;
      if (e.cert == undefined && e.skid == undefined) {
        throw new s("property cert nor skid undefined");
      }
      if (e.cert != undefined) {
        t = new eH(e.cert).getExtSubjectKeyIdentifier().kid.hex;
      } else if (e.skid != undefined) {
        t = e.skid;
      }
      return r({
        tag: {
          tage: "a0",
          obj: {
            octstr: {
              hex: t
            }
          }
        }
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SubjectKeyIdentifier, f.asn1.ASN1Object);
  f.asn1.cms.AttributeList = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSet;
    var s = r.cms;
    s.AttributeList.superclass.constructor.call(this);
    this.params = null;
    this.hTLV = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      if (this.hTLV != null) {
        return this.hTLV;
      }
      var r = true;
      if (t.sortflag != undefined) {
        r = t.sortflag;
      }
      var n = t.array;
      var a = [];
      var o = 0;
      for (; o < n.length; o++) {
        var h = n[o];
        var u = h.attr;
        if (u == "contentType") {
          a.push(new s.ContentType(h));
        } else if (u == "messageDigest") {
          a.push(new s.MessageDigest(h));
        } else if (u == "signingTime") {
          a.push(new s.SigningTime(h));
        } else if (u == "signingCertificate") {
          a.push(new s.SigningCertificate(h));
        } else if (u == "signingCertificateV2") {
          a.push(new s.SigningCertificateV2(h));
        } else if (u == "signaturePolicyIdentifier") {
          a.push(new f.asn1.cades.SignaturePolicyIdentifier(h));
        } else if (u == "signatureTimeStamp" || u == "timeStampToken") {
          a.push(new f.asn1.cades.SignatureTimeStamp(h));
        } else {
          throw new e("unknown attr: " + u);
        }
      }
      var c = new i({
        array: a,
        sortflag: r
      });
      this.hTLV = c.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.AttributeList, f.asn1.ASN1Object);
  f.asn1.cms.SignerInfo = function (t) {
    var e = Error;
    var r = f;
    var i = r.asn1;
    var s = i.DERInteger;
    var n = i.DEROctetString;
    var a = i.DERSequence;
    var o = i.DERTaggedObject;
    var h = i.cms;
    var u = h.SignerIdentifier;
    var c = h.AttributeList;
    var l = (h.ContentType, h.EncapsulatedContentInfo, h.MessageDigest, h.SignedData, i.x509).AlgorithmIdentifier;
    var d = r.crypto;
    h.SignerInfo.superclass.constructor.call(this);
    this.params = null;
    this.sign = function () {
      var t = this.params;
      var e = t.sigalg;
      var r = new c(t.sattrs).tohex();
      var i = eR.getKey(t.signkey);
      var s = new d.Signature({
        alg: e
      });
      s.init(i);
      s.updateHex(r);
      var n = s.sign();
      t.sighex = n;
    };
    this.tohex = function () {
      var t = this.params;
      var r = [];
      r.push(new s({
        int: t.version
      }));
      r.push(new u(t.id));
      r.push(new l({
        name: t.hashalg
      }));
      if (t.sattrs != undefined) {
        var i = new c(t.sattrs);
        try {
          r.push(new o({
            tag: "a0",
            explicit: false,
            obj: i
          }));
        } catch (t) {
          throw new e("si sattr error: " + t);
        }
      }
      if (t.sigalgfield != undefined) {
        r.push(new l({
          name: t.sigalgfield
        }));
      } else {
        r.push(new l({
          name: t.sigalg
        }));
      }
      if (t.sighex == undefined && t.signkey != undefined) {
        this.sign();
      }
      r.push(new n({
        hex: t.sighex
      }));
      if (t.uattrs != undefined) {
        var i = new c(t.uattrs);
        try {
          r.push(new o({
            tag: "a1",
            explicit: false,
            obj: i
          }));
        } catch (t) {
          throw new e("si uattr error: " + t);
        }
      }
      return new a({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SignerInfo, f.asn1.ASN1Object);
  f.asn1.cms.EncapsulatedContentInfo = function (t) {
    var e = f.asn1;
    var r = e.DERTaggedObject;
    var i = e.DERSequence;
    var s = e.DERObjectIdentifier;
    var n = e.DEROctetString;
    e.cms.EncapsulatedContentInfo.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = [];
      e.push(new s(t.type));
      if (t.content != undefined && (t.content.hex != undefined || t.content.str != undefined) && t.isDetached != true) {
        var a = new r({
          tag: "a0",
          explicit: true,
          obj: new n(t.content)
        });
        e.push(a);
      }
      return new i({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.EncapsulatedContentInfo, f.asn1.ASN1Object);
  f.asn1.cms.ContentInfo = function (t) {
    var e = f.asn1;
    var r = e.DERTaggedObject;
    var i = e.DERSequence;
    var s = e.DERObjectIdentifier;
    e.x509.OID.name2obj;
    f.asn1.cms.ContentInfo.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = [];
      e.push(new s(t.type));
      var n = new r({
        tag: "a0",
        explicit: true,
        obj: t.obj
      });
      e.push(n);
      return new i({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.ContentInfo, f.asn1.ASN1Object);
  f.asn1.cms.SignedData = function (t) {
    var e = f.asn1;
    e.ASN1Object;
    var r = e.DERInteger;
    var i = e.DERSet;
    var s = e.DERSequence;
    e.DERTaggedObject;
    var n = e.cms;
    var a = n.EncapsulatedContentInfo;
    var o = n.SignerInfo;
    var h = n.ContentInfo;
    var u = n.CertificateSet;
    var c = n.RevocationInfoChoices;
    var l = e.x509.AlgorithmIdentifier;
    f.asn1.cms.SignedData.superclass.constructor.call(this);
    this.params = null;
    this.checkAndFixParam = function () {
      var t = this.params;
      this._setDigestAlgs(t);
      this._setContentTypeByEContent(t);
      this._setMessageDigestByEContent(t);
      this._setSignerInfoVersion(t);
      this._setSignedDataVersion(t);
    };
    this._setDigestAlgs = function (t) {
      var e = {};
      var r = t.sinfos;
      var i = 0;
      for (; i < r.length; i++) {
        e[r[i].hashalg] = 1;
      }
      t.hashalgs = Object.keys(e).sort();
    };
    this._setContentTypeByEContent = function (t) {
      var e = t.econtent.type;
      var r = t.sinfos;
      var i = 0;
      for (; i < r.length; i++) {
        var s = r[i];
        this._getAttrParamByName(s, "contentType").type = e;
      }
    };
    this._setMessageDigestByEContent = function (t) {
      var e = t.econtent;
      t.econtent.type;
      var r = e.content.hex;
      if (r == undefined && e.type == "data" && e.content.str != undefined) {
        r = eu(e.content.str);
      }
      var i = t.sinfos;
      var s = 0;
      for (; s < i.length; s++) {
        var n = i[s];
        var a = n.hashalg;
        var o = this._getAttrParamByName(n, "messageDigest");
        var h = f.crypto.Util.hashHex(r, a);
        o.hex = h;
      }
    };
    this._getAttrParamByName = function (t, e) {
      var r = t.sattrs.array;
      var i = 0;
      for (; i < r.length; i++) {
        if (r[i].attr == e) {
          return r[i];
        }
      }
    };
    this._setSignerInfoVersion = function (t) {
      var e = t.sinfos;
      var r = 0;
      for (; r < e.length; r++) {
        var i = e[r];
        var s = 1;
        if (i.id.type == "skid") {
          s = 3;
        }
        i.version = s;
      }
    };
    this._setSignedDataVersion = function (t) {
      var e = this._getSignedDataVersion(t);
      t.version = e;
    };
    this._getSignedDataVersion = function (t) {
      if (t.revinfos != undefined) {
        var e = t.revinfos;
        var r = 0;
        for (; r < e.length; r++) {
          if (e[r].ocsp != undefined) {
            return 5;
          }
        }
      }
      var i = t.sinfos;
      var r = 0;
      for (; r < i.length; r++) {
        if (t.sinfos[r].version == 3) {
          return 3;
        }
      }
      if (t.econtent.type != "data") {
        return 3;
      } else {
        return 1;
      }
    };
    this.tohex = function () {
      var t = this.params;
      if (this.getEncodedHexPrepare != undefined) {
        this.getEncodedHexPrepare();
      }
      if (t.fixed != true) {
        this.checkAndFixParam();
      }
      var e = [];
      e.push(new r({
        int: t.version
      }));
      var n = [];
      var h = 0;
      for (; h < t.hashalgs.length; h++) {
        var f = t.hashalgs[h];
        n.push(new l({
          name: f
        }));
      }
      e.push(new i({
        array: n
      }));
      e.push(new a(t.econtent));
      if (t.certs != undefined) {
        e.push(new u(t.certs));
      }
      if (t.revinfos != undefined) {
        e.push(new c(t.revinfos));
      }
      var d = [];
      var h = 0;
      for (; h < t.sinfos.length; h++) {
        var p = t.sinfos[h];
        d.push(new o(p));
      }
      e.push(new i({
        array: d
      }));
      return new s({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.getContentInfo = function () {
      return new h({
        type: "signed-data",
        obj: this
      });
    };
    this.getContentInfoEncodedHex = function () {
      return this.getContentInfo().tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.SignedData, f.asn1.ASN1Object);
  f.asn1.cms.CertificateSet = function (t) {
    f.asn1.cms.CertificateSet.superclass.constructor.call(this);
    var e = Error;
    var r = f.asn1;
    var i = r.DERTaggedObject;
    var s = r.DERSet;
    var n = r.ASN1Object;
    this.params = null;
    this.tohex = function () {
      var t;
      var r = this.params;
      var a = [];
      if (r instanceof Array) {
        t = r;
      } else if (r.array != undefined) {
        t = r.array;
      } else {
        throw new e("cert array not specified");
      }
      for (var o = 0; o < t.length; o++) {
        var h = el(t[o]);
        var u = new n();
        u.hTLV = h;
        a.push(u);
      }
      var c = {
        array: a
      };
      if (r.sortflag == false) {
        c.sortflag = false;
      }
      return new i({
        tag: "a0",
        explicit: false,
        obj: new s(c)
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.CertificateSet, f.asn1.ASN1Object);
  f.asn1.cms.RevocationInfoChoices = function (t) {
    f.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (!t instanceof Array) {
        throw Error("params is not array");
      }
      var e = [];
      var r = 0;
      for (; r < t.length; r++) {
        e.push(new f.asn1.cms.RevocationInfoChoice(t[r]));
      }
      return f.asn1.ASN1Util.newObject({
        tag: {
          tagi: "a1",
          obj: {
            set: e
          }
        }
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.RevocationInfoChoices, f.asn1.ASN1Object);
  f.asn1.cms.RevocationInfoChoice = function (t) {
    f.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.crl != undefined && typeof t.crl == "string") {
        var e = t.crl;
        if (t.crl.indexOf("-----BEGIN") != -1) {
          e = el(t.crl);
        }
        return e;
      }
      if (t.ocsp != undefined) {
        return f.asn1.ASN1Util.newObject({
          tag: {
            tagi: "a1",
            obj: new f.asn1.cms.OtherRevocationFormat(t)
          }
        }).tohex();
      }
      throw Error("property crl or ocsp undefined");
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.RevocationInfoChoice, f.asn1.ASN1Object);
  f.asn1.cms.OtherRevocationFormat = function (t) {
    f.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
    var e = Error;
    var r = f;
    var i = r.asn1.ASN1Util.newObject;
    var s = r.lang.String.isHex;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.ocsp == undefined) {
        throw new e("property ocsp not specified");
      }
      if (!s(t.ocsp) || !t9.isASN1HEX(t.ocsp)) {
        throw new e("ocsp value not ASN.1 hex string");
      }
      return i({
        seq: [{
          oid: "1.3.6.1.5.5.7.16.2"
        }, {
          asn1: {
            tlv: t.ocsp
          }
        }]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cms.OtherRevocationFormat, f.asn1.ASN1Object);
  f.asn1.cms.CMSUtil = new function () {}();
  f.asn1.cms.CMSUtil.newSignedData = function (t) {
    return new f.asn1.cms.SignedData(t);
  };
  f.asn1.cms.CMSUtil.verifySignedData = function (t) {
    var e = f;
    var r = e.asn1;
    var i = r.cms;
    (i.SignerInfo, i.SignedData, i.SigningTime, i.SigningCertificate, i.SigningCertificateV2, r.cades).SignaturePolicyIdentifier;
    var s = e.lang.String.isHex;
    var n = t9.getVbyList;
    var a = t9.getTLVbyList;
    var o = t9.getIdxbyList;
    var h = t9.getChildIdx;
    var u = t9.getTLV;
    var c = t9.oidname;
    var l = e.crypto.Util.hashHex;
    if (t.cms === undefined) {
      s(t.cms);
    }
    var d = t.cms;
    function p(t, e) {
      var r;
      var i = 3;
      for (; i < 6; i++) {
        if ((r = o(t, 0, [1, 0, i])) !== undefined) {
          var s = t.substr(r, 2);
          if (s === "a0") {
            e.certsIdx = r;
          }
          if (s === "a1") {
            e.revinfosIdx = r;
          }
          if (s === "31") {
            e.signerinfosIdx = r;
          }
        }
      }
    }
    function g(t, e) {
      var r = e.signerinfosIdx;
      if (r !== undefined) {
        var i = h(t, r);
        e.signerInfoIdxList = i;
        for (var s = 0; s < i.length; s++) {
          var n = {
            idx: i[s]
          };
          v(t, n);
          e.signerInfos.push(n);
        }
      }
    }
    function v(t, e) {
      var r = e.idx;
      e.signerid_issuer1 = a(t, r, [1, 0], "30");
      e.signerid_serial1 = n(t, r, [1, 1], "02");
      e.hashalg = c(n(t, r, [2, 0], "06"));
      var i = o(t, r, [3], "a0");
      e.idxSignedAttrs = i;
      x(t, e, i);
      var s = h(t, r).length;
      if (s < 6) {
        throw "malformed SignerInfo";
      }
      e.sigalg = c(n(t, r, [s - 2, 0], "06"));
      e.sigval = n(t, r, [s - 1], "04");
    }
    function x(t, e, r) {
      var i = h(t, r);
      e.signedAttrIdxList = i;
      for (var s = 0; s < i.length; s++) {
        var a;
        var o = i[s];
        var u = n(t, o, [0], "06");
        if (u === "2a864886f70d010905") {
          a = eo(n(t, o, [1, 0]));
          e.saSigningTime = a;
        } else if (u === "2a864886f70d010904") {
          a = n(t, o, [1, 0], "04");
          e.saMessageDigest = a;
        }
      }
    }
    function m(t, e, r, i) {
      var s;
      var n = e.parse.certsIdx;
      if (e.certs === undefined) {
        s = [];
        e.certkeys = [];
        var a = h(t, n);
        var o = 0;
        for (; o < a.length; o++) {
          var c = u(t, a[o]);
          var l = new eH();
          l.readCertHex(c);
          s[o] = l;
          e.certkeys[o] = l.getPublicKey();
        }
        e.certs = s;
      } else {
        s = e.certs;
      }
      e.cccc = s.length;
      e.cccci = a.length;
      for (var o = 0; o < s.length; o++) {
        var f = l.getIssuerHex();
        var d = l.getSerialNumberHex();
        if (r.signerid_issuer1 === f && r.signerid_serial1 === d) {
          r.certkey_idx = o;
        }
      }
    }
    function y(t, e, r, i) {
      r.verifyDetail = {};
      var s = r.verifyDetail;
      var n = e.parse.econtent;
      var a = r.hashalg;
      var o = r.saMessageDigest;
      s.validMessageDigest = false;
      if (l(n, a) === o) {
        s.validMessageDigest = true;
      }
      m(t, e, r, i);
      s.validSignatureValue = false;
      var h = r.sigalg;
      var c = "31" + u(t, r.idxSignedAttrs).substr(2);
      r.signedattrshex = c;
      var d = e.certs[r.certkey_idx].getPublicKey();
      var p = new f.crypto.Signature({
        alg: h
      });
      p.init(d);
      p.updateHex(c);
      var g = p.verify(r.sigval);
      s.validSignatureValue_isValid = g;
      if (g === true) {
        s.validSignatureValue = true;
      }
      r.isValid = false;
      if (s.validMessageDigest && s.validSignatureValue) {
        r.isValid = true;
      }
    }
    var S = {
      isValid: false,
      parse: {}
    };
    (function (t, e) {
      if (n(t, 0, [0], "06") === "2a864886f70d010702") {
        e.cmsType = "signedData";
        e.econtent = n(t, 0, [1, 0, 2, 1, 0]);
        p(t, e);
        e.signerInfos = [];
        g(t, e);
      }
    })(d, S.parse);
    (function (t, e) {
      var r = e.parse.signerInfos;
      var i = r.length;
      var s = true;
      var n = 0;
      for (; n < i; n++) {
        var a = r[n];
        y(t, e, a, n);
        if (!a.isValid) {
          s = false;
        }
      }
      e.isValid = s;
    })(d, S);
    return S;
  };
  f.asn1.cms.CMSParser = function () {
    var t = Error;
    var e = new eH();
    var r = t9.getV;
    var i = t9.getTLV;
    t9.getIdxbyList;
    var s = t9.getTLVbyList;
    var n = t9.getTLVbyListEx;
    var a = t9.getVbyList;
    var o = t9.getVbyListEx;
    var h = t9.getChildIdx;
    this.getCMSSignedData = function (t) {
      var e = s(t, 0, [1, 0]);
      return this.getSignedData(e);
    };
    this.getSignedData = function (t) {
      var e = h(t, 0);
      var s = {};
      var a = parseInt(r(t, e[0]), 16);
      s.version = a;
      var o = i(t, e[1]);
      s.hashalgs = this.getHashAlgArray(o);
      var u = i(t, e[2]);
      s.econtent = this.getEContent(u);
      var c = n(t, 0, ["[0]"]);
      if (c != null) {
        s.certs = this.getCertificateSet(c);
      }
      n(t, 0, ["[1]"]);
      var l = n(t, 0, [3]);
      s.sinfos = this.getSignerInfos(l);
      return s;
    };
    this.getHashAlgArray = function (t) {
      var e = h(t, 0);
      var r = new eH();
      var s = [];
      var n = 0;
      for (; n < e.length; n++) {
        var a = i(t, e[n]);
        var o = r.getAlgorithmIdentifierName(a);
        s.push(o);
      }
      return s;
    };
    this.getEContent = function (t) {
      var e = {};
      var r = a(t, 0, [0]);
      var i = a(t, 0, [1, 0]);
      e.type = f.asn1.x509.OID.oid2name(t9.hextooidstr(r));
      e.content = {
        hex: i
      };
      return e;
    };
    this.getSignerInfos = function (t) {
      var e = [];
      var r = h(t, 0);
      var s = 0;
      for (; s < r.length; s++) {
        var n = i(t, r[s]);
        var a = this.getSignerInfo(n);
        e.push(a);
      }
      return e;
    };
    this.getSignerInfo = function (t) {
      var r = {};
      var s = h(t, 0);
      var a = t9.getInt(t, s[0], -1);
      if (a != -1) {
        r.version = a;
      }
      var u = i(t, s[1]);
      var c = this.getIssuerAndSerialNumber(u);
      r.id = c;
      var l = i(t, s[2]);
      var f = e.getAlgorithmIdentifierName(l);
      r.hashalg = f;
      var d = n(t, 0, ["[0]"]);
      if (d != null) {
        var p = this.getAttributeList(d);
        r.sattrs = p;
      }
      var g = n(t, 0, [3]);
      var v = e.getAlgorithmIdentifierName(g);
      r.sigalg = v;
      var x = o(t, 0, [4]);
      r.sighex = x;
      var m = n(t, 0, ["[1]"]);
      if (m != null) {
        var y = this.getAttributeList(m);
        r.uattrs = y;
      }
      return r;
    };
    this.getSignerIdentifier = function (t) {
      if (t.substr(0, 2) == "30") {
        return this.getIssuerAndSerialNumber(t);
      }
      throw Error("SKID of signerIdentifier not supported");
    };
    this.getIssuerAndSerialNumber = function (t) {
      var s = {
        type: "isssn"
      };
      var n = h(t, 0);
      var a = i(t, n[0]);
      s.issuer = e.getX500Name(a);
      var o = r(t, n[1]);
      s.serial = {
        hex: o
      };
      return s;
    };
    this.getAttributeList = function (t) {
      var e = [];
      var r = h(t, 0);
      var s = 0;
      for (; s < r.length; s++) {
        var n = i(t, r[s]);
        var a = this.getAttribute(n);
        e.push(a);
      }
      return {
        array: e
      };
    };
    this.getAttribute = function (t) {
      var e = {};
      var r = h(t, 0);
      var s = t9.getOID(t, r[0]);
      var n = f.asn1.x509.OID.oid2name(s);
      e.attr = n;
      var a = i(t, r[1]);
      var o = h(a, 0);
      if (o.length == 1) {
        e.valhex = i(a, o[0]);
      } else {
        var u = [];
        var c = 0;
        for (; c < o.length; c++) {
          u.push(i(a, o[c]));
        }
        e.valhex = u;
      }
      if (n == "contentType") {
        this.setContentType(e);
      } else if (n == "messageDigest") {
        this.setMessageDigest(e);
      } else if (n == "signingTime") {
        this.setSigningTime(e);
      } else if (n == "signingCertificate") {
        this.setSigningCertificate(e);
      } else if (n == "signingCertificateV2") {
        this.setSigningCertificateV2(e);
      } else if (n == "signaturePolicyIdentifier") {
        this.setSignaturePolicyIdentifier(e);
      }
      return e;
    };
    this.setContentType = function (t) {
      var e = t9.getOIDName(t.valhex, 0, null);
      if (e != null) {
        t.type = e;
        delete t.valhex;
      }
    };
    this.setSigningTime = function (t) {
      var e = eo(r(t.valhex, 0));
      t.str = e;
      delete t.valhex;
    };
    this.setMessageDigest = function (t) {
      var e = r(t.valhex, 0);
      t.hex = e;
      delete t.valhex;
    };
    this.setSigningCertificate = function (t) {
      var e = h(t.valhex, 0);
      if (e.length > 0) {
        var r = i(t.valhex, e[0]);
        var s = h(r, 0);
        var n = [];
        var a = 0;
        for (; a < s.length; a++) {
          var o = i(r, s[a]);
          var u = this.getESSCertID(o);
          n.push(u);
        }
        t.array = n;
      }
      if (e.length > 1) {
        var c = i(t.valhex, e[1]);
        t.polhex = c;
      }
      delete t.valhex;
    };
    this.setSignaturePolicyIdentifier = function (t) {
      var e = h(t.valhex, 0);
      if (e.length > 0) {
        var s = t9.getOID(t.valhex, e[0]);
        t.oid = s;
      }
      if (e.length > 1) {
        var n = new eH();
        var a = h(t.valhex, e[1]);
        var o = i(t.valhex, a[0]);
        var u = n.getAlgorithmIdentifierName(o);
        t.alg = u;
        var c = r(t.valhex, a[1]);
        t.hash = c;
      }
      delete t.valhex;
    };
    this.setSigningCertificateV2 = function (t) {
      var e = h(t.valhex, 0);
      if (e.length > 0) {
        var r = i(t.valhex, e[0]);
        var s = h(r, 0);
        var n = [];
        var a = 0;
        for (; a < s.length; a++) {
          var o = i(r, s[a]);
          var u = this.getESSCertIDv2(o);
          n.push(u);
        }
        t.array = n;
      }
      if (e.length > 1) {
        var c = i(t.valhex, e[1]);
        t.polhex = c;
      }
      delete t.valhex;
    };
    this.getESSCertID = function (t) {
      var e = {};
      var s = h(t, 0);
      if (s.length > 0) {
        var n = r(t, s[0]);
        e.hash = n;
      }
      if (s.length > 1) {
        var a = i(t, s[1]);
        var o = this.getIssuerSerial(a);
        if (o.serial != undefined) {
          e.serial = o.serial;
        }
        if (o.issuer != undefined) {
          e.issuer = o.issuer;
        }
      }
      return e;
    };
    this.getESSCertIDv2 = function (s) {
      var n = {};
      var a = h(s, 0);
      if (a.length < 1 || a.length > 3) {
        throw new t("wrong number of elements");
      }
      var o = 0;
      if (s.substr(a[0], 2) == "30") {
        var u = i(s, a[0]);
        n.alg = e.getAlgorithmIdentifierName(u);
        o++;
      } else {
        n.alg = "sha256";
      }
      var c = r(s, a[o]);
      n.hash = c;
      if (a.length > o + 1) {
        var l = i(s, a[o + 1]);
        var f = this.getIssuerSerial(l);
        n.issuer = f.issuer;
        n.serial = f.serial;
      }
      return n;
    };
    this.getIssuerSerial = function (t) {
      var s = {};
      var n = h(t, 0);
      var a = i(t, n[0]);
      var o = e.getGeneralNames(a)[0].dn;
      s.issuer = o;
      var u = r(t, n[1]);
      s.serial = {
        hex: u
      };
      return s;
    };
    this.getCertificateSet = function (t) {
      var e = h(t, 0);
      var r = [];
      var s = 0;
      for (; s < e.length; s++) {
        var n = i(t, e[s]);
        if (n.substr(0, 2) == "30") {
          var a = ec(n, "CERTIFICATE");
          r.push(a);
        }
      }
      return {
        array: r,
        sortflag: false
      };
    };
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  if (f.asn1.tsp === undefined || !f.asn1.tsp) {
    f.asn1.tsp = {};
  }
  f.asn1.tsp.TimeStampToken = function (t) {
    var e = f.asn1.tsp;
    e.TimeStampToken.superclass.constructor.call(this);
    this.params = null;
    this.getEncodedHexPrepare = function () {
      var t = new e.TSTInfo(this.params.econtent.content);
      this.params.econtent.content.hex = t.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.TimeStampToken, f.asn1.cms.SignedData);
  f.asn1.tsp.TSTInfo = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERInteger;
    var s = e.DERBoolean;
    var n = e.DERGeneralizedTime;
    var a = e.DERObjectIdentifier;
    var o = e.DERTaggedObject;
    var h = e.tsp;
    var u = h.MessageImprint;
    var c = h.Accuracy;
    e.x509.X500Name;
    var l = e.x509.GeneralName;
    h.TSTInfo.superclass.constructor.call(this);
    this.dVersion = new i({
      int: 1
    });
    this.dPolicy = null;
    this.dMessageImprint = null;
    this.dSerial = null;
    this.dGenTime = null;
    this.dAccuracy = null;
    this.dOrdering = null;
    this.dNonce = null;
    this.dTsa = null;
    this.tohex = function () {
      var t = [this.dVersion];
      if (this.dPolicy == null) {
        throw Error("policy shall be specified.");
      }
      t.push(this.dPolicy);
      if (this.dMessageImprint == null) {
        throw Error("messageImprint shall be specified.");
      }
      t.push(this.dMessageImprint);
      if (this.dSerial == null) {
        throw Error("serialNumber shall be specified.");
      }
      t.push(this.dSerial);
      if (this.dGenTime == null) {
        throw Error("genTime shall be specified.");
      }
      t.push(this.dGenTime);
      if (this.dAccuracy != null) {
        t.push(this.dAccuracy);
      }
      if (this.dOrdering != null) {
        t.push(this.dOrdering);
      }
      if (this.dNonce != null) {
        t.push(this.dNonce);
      }
      if (this.dTsa != null) {
        t.push(this.dTsa);
      }
      var e = new r({
        array: t
      });
      this.hTLV = e.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      if (typeof t.policy == "string") {
        if (!t.policy.match(/^[0-9.]+$/)) {
          throw "policy shall be oid like 0.1.4.134";
        }
        this.dPolicy = new a({
          oid: t.policy
        });
      }
      if (t.messageImprint !== undefined) {
        this.dMessageImprint = new u(t.messageImprint);
      }
      if (t.serial !== undefined) {
        this.dSerial = new i(t.serial);
      }
      if (t.genTime !== undefined) {
        this.dGenTime = new n(t.genTime);
      }
      if (t.accuracy !== undefined) {
        this.dAccuracy = new c(t.accuracy);
      }
      if (t.ordering !== undefined && t.ordering == true) {
        this.dOrdering = new s();
      }
      if (t.nonce !== undefined) {
        this.dNonce = new i(t.nonce);
      }
      if (t.tsa !== undefined) {
        this.dTsa = new o({
          tag: "a0",
          explicit: true,
          obj: new l({
            dn: t.tsa
          })
        });
      }
    }
  };
  eC(f.asn1.tsp.TSTInfo, f.asn1.ASN1Object);
  f.asn1.tsp.Accuracy = function (t) {
    var e = f.asn1;
    var r = e.ASN1Util.newObject;
    e.tsp.Accuracy.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = [];
      if (t.seconds != undefined && typeof t.seconds == "number") {
        e.push({
          int: t.seconds
        });
      }
      if (t.millis != undefined && typeof t.millis == "number") {
        e.push({
          tag: {
            tagi: "80",
            obj: {
              int: t.millis
            }
          }
        });
      }
      if (t.micros != undefined && typeof t.micros == "number") {
        e.push({
          tag: {
            tagi: "81",
            obj: {
              int: t.micros
            }
          }
        });
      }
      return r({
        seq: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.Accuracy, f.asn1.ASN1Object);
  f.asn1.tsp.MessageImprint = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DEROctetString;
    var s = e.x509.AlgorithmIdentifier;
    e.tsp.MessageImprint.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      return new r({
        array: [new s({
          name: t.alg
        }), new i({
          hex: t.hash
        })]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.MessageImprint, f.asn1.ASN1Object);
  f.asn1.tsp.TimeStampReq = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERInteger;
    var s = e.DERBoolean;
    e.ASN1Object;
    var n = e.DERObjectIdentifier;
    var a = e.tsp;
    var o = a.MessageImprint;
    a.TimeStampReq.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = [];
      e.push(new i({
        int: 1
      }));
      if (t.messageImprint instanceof f.asn1.ASN1Object) {
        e.push(t.messageImprint);
      } else {
        e.push(new o(t.messageImprint));
      }
      if (t.policy != undefined) {
        e.push(new n(t.policy));
      }
      if (t.nonce != undefined) {
        e.push(new i(t.nonce));
      }
      if (t.certreq == true) {
        e.push(new s());
      }
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.TimeStampReq, f.asn1.ASN1Object);
  f.asn1.tsp.TimeStampResp = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    e.ASN1Object;
    var i = e.tsp;
    var s = i.PKIStatusInfo;
    i.TimeStampResp.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var n = [];
      if (t.econtent != undefined || t.tst != undefined) {
        if (t.statusinfo != undefined) {
          n.push(new s(t.statusinfo));
        } else {
          n.push(new s("granted"));
        }
        if (t.econtent != undefined) {
          n.push(new i.TimeStampToken(t).getContentInfo());
        } else if (t.tst instanceof e.ASN1Object) {
          n.push(t.tst);
        } else {
          throw Error("improper member tst value");
        }
      } else if (t.statusinfo != undefined) {
        n.push(new s(t.statusinfo));
      } else {
        throw Error("parameter for token nor statusinfo not specified");
      }
      return new r({
        array: n
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.TimeStampResp, f.asn1.ASN1Object);
  f.asn1.tsp.PKIStatusInfo = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.tsp;
    var n = s.PKIStatus;
    var a = s.PKIFreeText;
    var o = s.PKIFailureInfo;
    s.PKIStatusInfo.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var r = [];
      if (typeof t == "string") {
        r.push(new n(t));
      } else {
        if (t.status == undefined) {
          throw new e("property 'status' unspecified");
        }
        r.push(new n(t.status));
        if (t.statusstr != undefined) {
          r.push(new a(t.statusstr));
        }
        if (t.failinfo != undefined) {
          r.push(new o(t.failinfo));
        }
      }
      return new i({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.PKIStatusInfo, f.asn1.ASN1Object);
  f.asn1.tsp.PKIStatus = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERInteger;
    r.tsp.PKIStatus.superclass.constructor.call(this);
    var s = {
      granted: 0,
      grantedWithMods: 1,
      rejection: 2,
      waiting: 3,
      revocationWarning: 4,
      revocationNotification: 5
    };
    this.params = null;
    this.tohex = function () {
      var t;
      var r = this.params;
      if (typeof r == "string") {
        try {
          t = s[r];
        } catch (t) {
          throw new e("undefined name: " + r);
        }
      } else if (typeof r == "number") {
        t = r;
      } else {
        throw new e("unsupported params");
      }
      return new i({
        int: t
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.PKIStatus, f.asn1.ASN1Object);
  f.asn1.tsp.PKIFreeText = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.DERUTF8String;
    r.tsp.PKIFreeText.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (!t instanceof Array) {
        throw new e("wrong params: not array");
      }
      var r = [];
      var n = 0;
      for (; n < t.length; n++) {
        r.push(new s({
          str: t[n]
        }));
      }
      return new i({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.PKIFreeText, f.asn1.ASN1Object);
  f.asn1.tsp.PKIFailureInfo = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERBitString;
    var s = r.tsp.PKIFailureInfo;
    var n = {
      badAlg: 0,
      badRequest: 2,
      badDataFormat: 5,
      timeNotAvailable: 14,
      unacceptedPolicy: 15,
      unacceptedExtension: 16,
      addInfoNotAvailable: 17,
      systemFailure: 25
    };
    s.superclass.constructor.call(this);
    this.params = null;
    this.getBinValue = function () {
      var t = this.params;
      var r = 0;
      if (typeof t == "number" && t >= 0 && t <= 25) {
        var i = (r |= 1 << t).toString(2);
        var s = "";
        var a = i.length - 1;
        for (; a >= 0; a--) {
          s += i[a];
        }
        return s;
      }
      if (typeof t == "string" && n[t] != undefined) {
        return eP([t], n);
      }
      if (typeof t == "object" && t.length != undefined) {
        return eP(t, n);
      }
      throw new e("wrong params");
    };
    this.tohex = function () {
      this.params;
      return new i({
        bin: this.getBinValue()
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.tsp.PKIFailureInfo, f.asn1.ASN1Object);
  f.asn1.tsp.AbstractTSAAdapter = function (t) {
    this.getTSTHex = function (t, e) {
      throw "not implemented yet";
    };
  };
  f.asn1.tsp.SimpleTSAAdapter = function (t) {
    var e = f;
    var r = e.asn1.tsp;
    var i = e.crypto.Util.hashHex;
    r.SimpleTSAAdapter.superclass.constructor.call(this);
    this.params = null;
    this.serial = 0;
    this.getTSTHex = function (t, e) {
      var s = i(t, e);
      this.params.econtent.content.messageImprint = {
        alg: e,
        hash: s
      };
      this.params.econtent.content.serial = {
        int: this.serial++
      };
      var n = Math.floor(Math.random() * 1000000000);
      this.params.econtent.content.nonce = {
        int: n
      };
      return new r.TimeStampToken(this.params).getContentInfoEncodedHex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.tsp.SimpleTSAAdapter, f.asn1.tsp.AbstractTSAAdapter);
  f.asn1.tsp.FixedTSAAdapter = function (t) {
    var e = f;
    var r = e.asn1.tsp;
    var i = e.crypto.Util.hashHex;
    r.FixedTSAAdapter.superclass.constructor.call(this);
    this.params = null;
    this.getTSTHex = function (t, e) {
      var s = i(t, e);
      this.params.econtent.content.messageImprint = {
        alg: e,
        hash: s
      };
      return new r.TimeStampToken(this.params).getContentInfoEncodedHex();
    };
    if (t !== undefined) {
      this.params = t;
    }
  };
  eC(f.asn1.tsp.FixedTSAAdapter, f.asn1.tsp.AbstractTSAAdapter);
  f.asn1.tsp.TSPUtil = new function () {}();
  f.asn1.tsp.TSPUtil.newTimeStampToken = function (t) {
    return new f.asn1.tsp.TimeStampToken(t);
  };
  f.asn1.tsp.TSPUtil.parseTimeStampReq = function (t) {
    return new f.asn1.tsp.TSPParser().getTimeStampReq(t);
  };
  f.asn1.tsp.TSPUtil.parseMessageImprint = function (t) {
    return new f.asn1.tsp.TSPParser().getMessageImprint(t);
  };
  f.asn1.tsp.TSPParser = function () {
    var t = new eH();
    var e = t9.getV;
    var r = t9.getTLV;
    var i = t9.getIdxbyList;
    t9.getTLVbyListEx;
    var s = t9.getChildIdx;
    var n = ["granted", "grantedWithMods", "rejection", "waiting", "revocationWarning", "revocationNotification"];
    var a = {
      0: "badAlg",
      2: "badRequest",
      5: "badDataFormat",
      14: "timeNotAvailable",
      15: "unacceptedPolicy",
      16: "unacceptedExtension",
      17: "addInfoNotAvailable",
      25: "systemFailure"
    };
    this.getResponse = function (t) {
      var e = s(t, 0);
      if (e.length == 1) {
        return this.getPKIStatusInfo(r(t, e[0]));
      }
      if (e.length > 1) {
        var i = this.getPKIStatusInfo(r(t, e[0]));
        var n = r(t, e[1]);
        var a = this.getToken(n);
        a.statusinfo = i;
        return a;
      }
    };
    this.getToken = function (t) {
      var e = new f.asn1.cms.CMSParser().getCMSSignedData(t);
      this.setTSTInfo(e);
      return e;
    };
    this.setTSTInfo = function (t) {
      var e = t.econtent;
      if (e.type == "tstinfo") {
        var r = e.content.hex;
        var i = this.getTSTInfo(r);
        e.content = i;
      }
    };
    this.getTSTInfo = function (i) {
      var n = {};
      var a = s(i, 0);
      var o = e(i, a[1]);
      n.policy = ew(o);
      var h = r(i, a[2]);
      n.messageImprint = this.getMessageImprint(h);
      var u = e(i, a[3]);
      n.serial = {
        hex: u
      };
      var c = e(i, a[4]);
      n.genTime = {
        str: eo(c)
      };
      var l = 0;
      if (a.length > 5 && i.substr(a[5], 2) == "30") {
        var f = r(i, a[5]);
        n.accuracy = this.getAccuracy(f);
        l++;
      }
      if (a.length > 5 + l && i.substr(a[5 + l], 2) == "01") {
        if (e(i, a[5 + l]) == "ff") {
          n.ordering = true;
        }
        l++;
      }
      if (a.length > 5 + l && i.substr(a[5 + l], 2) == "02") {
        var d = e(i, a[5 + l]);
        n.nonce = {
          hex: d
        };
        l++;
      }
      if (a.length > 5 + l && i.substr(a[5 + l], 2) == "a0") {
        var p = r(i, a[5 + l]);
        p = "30" + p.substr(2);
        var g = (pGeneralNames = t.getGeneralNames(p))[0].dn;
        n.tsa = g;
        l++;
      }
      if (a.length > 5 + l && i.substr(a[5 + l], 2) == "a1") {
        var v = r(i, a[5 + l]);
        v = "30" + v.substr(2);
        var x = t.getExtParamArray(v);
        n.ext = x;
        l++;
      }
      return n;
    };
    this.getAccuracy = function (t) {
      var r = {};
      var i = s(t, 0);
      var n = 0;
      for (; n < i.length; n++) {
        var a = t.substr(i[n], 2);
        var o = parseInt(e(t, i[n]), 16);
        if (a == "02") {
          r.seconds = o;
        } else if (a == "80") {
          r.millis = o;
        } else if (a == "81") {
          r.micros = o;
        }
      }
      return r;
    };
    this.getMessageImprint = function (t) {
      if (t.substr(0, 2) != "30") {
        throw Error("head of messageImprint hex shall be x30");
      }
      var r = {};
      s(t, 0);
      var n = i(t, 0, [0, 0]);
      var a = e(t, n);
      var o = t9.hextooidstr(a);
      var h = f.asn1.x509.OID.oid2name(o);
      if (h == "") {
        throw Error("hashAlg name undefined: " + o);
      }
      var u = i(t, 0, [1]);
      r.alg = h;
      r.hash = e(t, u);
      return r;
    };
    this.getPKIStatusInfo = function (t) {
      var i = {};
      var a = s(t, 0);
      var o = 0;
      try {
        var h = e(t, a[0]);
        var u = parseInt(h, 16);
        i.status = n[u];
      } catch (t) {}
      if (a.length > 1 && t.substr(a[1], 2) == "30") {
        var c = r(t, a[1]);
        i.statusstr = this.getPKIFreeText(c);
        o++;
      }
      if (a.length > o && t.substr(a[1 + o], 2) == "03") {
        var l = r(t, a[1 + o]);
        i.failinfo = this.getPKIFailureInfo(l);
      }
      return i;
    };
    this.getPKIFreeText = function (t) {
      var e = [];
      var r = s(t, 0);
      var i = 0;
      for (; i < r.length; i++) {
        e.push(t9.getString(t, r[i]));
      }
      return e;
    };
    this.getPKIFailureInfo = function (t) {
      var e = t9.getInt(t, 0);
      if (a[e] != undefined) {
        return a[e];
      } else {
        return e;
      }
    };
    this.getTimeStampReq = function (t) {
      var i = {
        certreq: false
      };
      var n = s(t, 0);
      if (n.length < 2) {
        throw Error("TimeStampReq must have at least 2 items");
      }
      var a = r(t, n[1]);
      i.messageImprint = f.asn1.tsp.TSPUtil.parseMessageImprint(a);
      for (var o = 2; o < n.length; o++) {
        var h = n[o];
        var u = t.substr(h, 2);
        if (u == "06") {
          var c = e(t, h);
          i.policy = t9.hextooidstr(c);
        }
        if (u == "02") {
          i.nonce = e(t, h);
        }
        if (u == "01") {
          i.certreq = true;
        }
      }
      return i;
    };
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  if (f.asn1.cades === undefined || !f.asn1.cades) {
    f.asn1.cades = {};
  }
  f.asn1.cades.SignaturePolicyIdentifier = function (t) {
    var e = f.asn1.cades;
    var r = e.SignaturePolicyId;
    e.SignaturePolicyIdentifier.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.16.2.15";
    this.params = null;
    this.getValueArray = function () {
      return [new r(this.params)];
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.SignaturePolicyIdentifier, f.asn1.cms.Attribute);
  f.asn1.cades.SignaturePolicyId = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERObjectIdentifier;
    e.x509.AlgorithmIdentifier;
    var s = e.cades;
    var n = s.SignaturePolicyId;
    var a = s.OtherHashAlgAndValue;
    n.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var e = [];
      e.push(new i(t.oid));
      e.push(new a(t));
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.SignaturePolicyId, f.asn1.ASN1Object);
  f.asn1.cades.OtherHashAlgAndValue = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.DEROctetString;
    var n = r.x509.AlgorithmIdentifier;
    r.cades.OtherHashAlgAndValue.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.alg == undefined) {
        throw new e("property 'alg' not specified");
      }
      if (t.hash == undefined && t.cert == undefined) {
        throw new e("property 'hash' nor 'cert' not specified");
      }
      var r = null;
      if (t.hash != undefined) {
        r = t.hash;
      } else if (t.cert != undefined) {
        if (typeof t.cert != "string") {
          throw new e("cert not string");
        }
        var a = t.cert;
        if (t.cert.indexOf("-----BEGIN") != -1) {
          a = el(t.cert);
        }
        r = f.crypto.Util.hashHex(a, t.alg);
      }
      var o = [];
      o.push(new n({
        name: t.alg
      }));
      o.push(new s({
        hex: r
      }));
      return new i({
        array: o
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.OtherHashAlgAndValue, f.asn1.ASN1Object);
  f.asn1.cades.OtherHashValue = function (t) {
    f.asn1.cades.OtherHashValue.superclass.constructor.call(this);
    var e = Error;
    var r = f;
    var i = (r.lang.String.isHex, r.asn1).DEROctetString;
    r.crypto.Util.hashHex;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.hash == undefined && t.cert == undefined) {
        throw new e("hash or cert not specified");
      }
      var r = null;
      if (t.hash != undefined) {
        r = t.hash;
      } else if (t.cert != undefined) {
        if (typeof t.cert != "string") {
          throw new e("cert not string");
        }
        var s = t.cert;
        if (t.cert.indexOf("-----BEGIN") != -1) {
          s = el(t.cert);
        }
        r = f.crypto.Util.hashHex(s, "sha1");
      }
      return new i({
        hex: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.OtherHashValue, f.asn1.ASN1Object);
  f.asn1.cades.SignatureTimeStamp = function (t) {
    var e = Error;
    var r = f;
    var i = r.lang.String.isHex;
    var s = r.asn1;
    var n = s.ASN1Object;
    (s.x509, s.cades).SignatureTimeStamp.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.16.2.14";
    this.params = null;
    this.getValueArray = function () {
      var t = this.params;
      if (t.tst != undefined) {
        if (i(t.tst)) {
          var r = new n();
          r.hTLV = t.tst;
          return [r];
        }
        if (t.tst instanceof n) {
          return [t.tst];
        }
        throw new e("params.tst has wrong value");
      }
      if (t.res != undefined) {
        var s = t.res;
        if (s instanceof n) {
          s = s.tohex();
        }
        if (typeof s != "string" || !i(s)) {
          throw new e("params.res has wrong value");
        }
        t9.getTLVbyList(s, 0, [1]);
        var r = new n();
        r.hTLV = t.tst;
        return [r];
      }
    };
    if (t != null) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.SignatureTimeStamp, f.asn1.cms.Attribute);
  f.asn1.cades.CompleteCertificateRefs = function (t) {
    var e = Error;
    var r = f;
    var i = r.asn1;
    var s = i.DERSequence;
    var n = i.cades;
    var a = n.OtherCertID;
    var o = r.lang.String.isHex;
    n.CompleteCertificateRefs.superclass.constructor.call(this);
    this.typeOid = "1.2.840.113549.1.9.16.2.21";
    this.params = null;
    this.getValueArray = function () {
      var t = this.params;
      var r = [];
      var i = 0;
      for (; i < t.array.length; i++) {
        var n = t.array[i];
        if (typeof n == "string") {
          if (n.indexOf("-----BEGIN") != -1) {
            n = {
              cert: n
            };
          } else if (o(n)) {
            n = {
              hash: n
            };
          } else {
            throw new e("unsupported value: " + n);
          }
        }
        if (t.alg != undefined && n.alg == undefined) {
          n.alg = t.alg;
        }
        if (t.hasis != undefined && n.hasis == undefined) {
          n.hasis = t.hasis;
        }
        var h = new a(n);
        r.push(h);
      }
      return [new s({
        array: r
      })];
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.CompleteCertificateRefs, f.asn1.cms.Attribute);
  f.asn1.cades.OtherCertID = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.cms.IssuerSerial;
    var s = e.cades;
    var n = s.OtherHashValue;
    var a = s.OtherHashAlgAndValue;
    s.OtherCertID.superclass.constructor.call(this);
    this.params = t;
    this.tohex = function () {
      var t = this.params;
      if (typeof t == "string") {
        if (t.indexOf("-----BEGIN") != -1) {
          t = {
            cert: t
          };
        } else if (_isHex(t)) {
          t = {
            hash: t
          };
        }
      }
      var e = [];
      var s = null;
      s = t.alg != undefined ? new a(t) : new n(t);
      e.push(s);
      if (t.cert != undefined && t.hasis == true || t.issuer != undefined && t.serial != undefined) {
        var o = new i(t);
        e.push(o);
      }
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.OtherCertID, f.asn1.ASN1Object);
  f.asn1.cades.OtherHash = function (t) {
    var e = f;
    var r = e.asn1;
    r.cms;
    var i = r.cades;
    var s = i.OtherHashAlgAndValue;
    var n = i.OtherHashValue;
    e.crypto.Util.hashHex;
    var a = e.lang.String.isHex;
    i.OtherHash.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (typeof t == "string") {
        if (t.indexOf("-----BEGIN") != -1) {
          t = {
            cert: t
          };
        } else if (a(t)) {
          t = {
            hash: t
          };
        }
      }
      var e = null;
      return (t.alg != undefined ? new s(t) : new n(t)).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.cades.OtherHash, f.asn1.ASN1Object);
  f.asn1.cades.CAdESUtil = new function () {}();
  f.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function (t) {
    return new f.asn1.cms.CMSParser().getCMSSignedData(t);
  };
  f.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function (t, e, r) {
    var i = t9.getChildIdx;
    var s = t9.getTLV;
    var n = t9.getV;
    var a = f.asn1;
    var o = a.ASN1Object;
    var h = a.cms;
    var u = h.AttributeList;
    var c = h.SignerInfo;
    var l = {};
    var d = i(t, e);
    if (d.length != 6) {
      throw "not supported items for SignerInfo (!=6)";
    }
    var p = d.shift();
    l.version = s(t, p);
    var g = d.shift();
    l.si = s(t, g);
    var v = d.shift();
    l.digalg = s(t, v);
    var x = d.shift();
    l.sattrs = s(t, x);
    var m = d.shift();
    l.sigalg = s(t, m);
    var y = d.shift();
    l.sig = s(t, y);
    l.sigval = n(t, y);
    var S = null;
    l.obj = new c();
    (S = new o()).hTLV = l.version;
    l.obj.dCMSVersion = S;
    (S = new o()).hTLV = l.si;
    l.obj.dSignerIdentifier = S;
    (S = new o()).hTLV = l.digalg;
    l.obj.dDigestAlgorithm = S;
    (S = new o()).hTLV = l.sattrs;
    l.obj.dSignedAttrs = S;
    (S = new o()).hTLV = l.sigalg;
    l.obj.dSigAlg = S;
    (S = new o()).hTLV = l.sig;
    l.obj.dSig = S;
    l.obj.dUnsignedAttrs = new u();
    return l;
  };
  if (f.asn1.csr === undefined || !f.asn1.csr) {
    f.asn1.csr = {};
  }
  f.asn1.csr.CertificationRequest = function (t) {
    var e = f.asn1;
    var r = e.DERBitString;
    var i = e.DERSequence;
    var s = e.csr;
    e.x509;
    var n = s.CertificationRequestInfo;
    s.CertificationRequest.superclass.constructor.call(this);
    this.setByParam = function (t) {
      this.params = t;
    };
    this.sign = function () {
      var t = new n(this.params).tohex();
      var e = new f.crypto.Signature({
        alg: this.params.sigalg
      });
      e.init(this.params.sbjprvkey);
      e.updateHex(t);
      var r = e.sign();
      this.params.sighex = r;
    };
    this.getPEM = function () {
      return ec(this.tohex(), "CERTIFICATE REQUEST");
    };
    this.tohex = function () {
      var t = this.params;
      var e = new f.asn1.csr.CertificationRequestInfo(this.params);
      var s = new f.asn1.x509.AlgorithmIdentifier({
        name: t.sigalg
      });
      if (t.sighex == undefined && t.sbjprvkey != undefined) {
        this.sign();
      }
      if (t.sighex == undefined) {
        throw Error("sighex or sbjprvkey parameter not defined");
      }
      return new i({
        array: [e, s, new r({
          hex: "00" + t.sighex
        })]
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.csr.CertificationRequest, f.asn1.ASN1Object);
  f.asn1.csr.CertificationRequestInfo = function (t) {
    var e = f.asn1;
    e.DERBitString;
    var r = e.DERSequence;
    var i = e.DERInteger;
    var s = e.DERUTF8String;
    var n = e.DERTaggedObject;
    var a = e.ASN1Util.newObject;
    var o = e.csr;
    var h = e.x509;
    var u = h.X500Name;
    var c = h.Extensions;
    var l = h.SubjectPublicKeyInfo;
    o.AttributeList;
    o.CertificationRequestInfo.superclass.constructor.call(this);
    this.params = null;
    this.setByParam = function (t) {
      if (t != undefined) {
        this.params = t;
      }
    };
    this.tohex = function () {
      var t = this.params;
      var e = [];
      e.push(new i({
        int: 0
      }));
      e.push(new u(t.subject));
      e.push(new l(eR.getKey(t.sbjpubkey)));
      if (t.attrs != undefined) {
        var o = a({
          tag: {
            tage: "a0",
            obj: function (t) {
              var e = Error;
              var r = f.asn1.x509.Extensions;
              var i = [];
              var s = 0;
              for (; s < t.length; s++) {
                var n = t[s];
                var a = n.attr;
                if (a == "extensionRequest") {
                  var o = {
                    seq: [{
                      oid: "1.2.840.113549.1.9.14"
                    }, {
                      set: [new r(n.ext)]
                    }]
                  };
                  i.push(o);
                } else if (a == "unstructuredName") {
                  var o = {
                    seq: [{
                      oid: "1.2.840.113549.1.9.2"
                    }, {
                      set: n.names
                    }]
                  };
                  i.push(o);
                } else if (a == "challengePassword") {
                  var o = {
                    seq: [{
                      oid: "1.2.840.113549.1.9.7"
                    }, {
                      set: [{
                        utf8str: n.password
                      }]
                    }]
                  };
                  i.push(o);
                } else {
                  throw new e("unknown CSR attribute");
                }
              }
              return {
                set: i
              };
            }(t.attrs)
          }
        });
        e.push(o);
      } else if (t.extreq != undefined) {
        var o = a({
          tag: {
            tage: "a0",
            obj: {
              seq: [{
                oid: "1.2.840.113549.1.9.14"
              }, {
                set: [new c(t.extreq)]
              }]
            }
          }
        });
        e.push(o);
      } else {
        e.push(new n({
          tag: "a0",
          explicit: false,
          obj: new s({
            str: ""
          })
        }));
      }
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t != undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.csr.CertificationRequestInfo, f.asn1.ASN1Object);
  f.asn1.csr.AttributeList = function (t) {};
  eC(f.asn1.csr.AttributeList, f.asn1.ASN1Object);
  f.asn1.csr.CSRUtil = new function () {}();
  f.asn1.csr.CSRUtil.newCSRPEM = function (t) {
    return new f.asn1.csr.CertificationRequest(t).getPEM();
  };
  f.asn1.csr.CSRUtil.getParam = function (t, e) {
    var r;
    var i = t9.getV;
    var s = t9.getIdxbyList;
    var n = t9.getTLVbyList;
    var a = t9.getTLVbyListEx;
    var o = t9.getVbyListEx;
    var h = {};
    if (t.indexOf("-----BEGIN CERTIFICATE REQUEST") == -1) {
      throw Error("argument is not PEM file");
    }
    var u = el(t, "CERTIFICATE REQUEST");
    if (e) {
      h.tbs = n(u, 0, [0]);
    }
    try {
      var c = a(u, 0, [0, 1]);
      if (c == "3000") {
        h.subject = {};
      } else {
        var l = new eH();
        h.subject = l.getX500Name(c);
      }
    } catch (t) {}
    var f = a(u, 0, [0, 2]);
    var d = eR.getKey(f, null, "pkcs8pub");
    h.sbjpubkey = eR.getPEM(d, "PKCS8PUB");
    r = s(u, 0, [0, 3, 0, 0], "06");
    var p = i(u, r) != "2a864886f70d01090e" ? null : n(u, 0, [0, 3, 0, 1, 0], "30");
    var l = new eH();
    if (p != null) {
      h.extreq = l.getExtParamArray(p);
    }
    try {
      var g = a(u, 0, [1], "30");
      var l = new eH();
      h.sigalg = l.getAlgorithmIdentifierName(g);
    } catch (t) {}
    try {
      var v = o(u, 0, [2]);
      h.sighex = v;
    } catch (t) {}
    return h;
  };
  f.asn1.csr.CSRUtil.verifySignature = function (t) {
    try {
      var e = null;
      if (typeof t == "string" && t.indexOf("-----BEGIN CERTIFICATE REQUEST") != -1) {
        e = f.asn1.csr.CSRUtil.getParam(t, true);
      } else if (typeof t == "object" && t.sbjpubkey != undefined && t.sigalg != undefined && t.sighex != undefined && t.tbs != undefined) {
        e = t;
      }
      if (e == null) {
        return false;
      }
      var r = new f.crypto.Signature({
        alg: e.sigalg
      });
      r.init(e.sbjpubkey);
      r.updateHex(e.tbs);
      return r.verify(e.sighex);
    } catch (t) {
      alert(t);
      return false;
    }
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.asn1 === undefined || !f.asn1) {
    f.asn1 = {};
  }
  if (f.asn1.ocsp === undefined || !f.asn1.ocsp) {
    f.asn1.ocsp = {};
  }
  f.asn1.ocsp.DEFAULT_HASH = "sha1";
  f.asn1.ocsp.OCSPResponse = function (t) {
    f.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
    f.asn1.DEREnumerated;
    var e = f.asn1.ASN1Util.newObject;
    var r = f.asn1.ocsp.ResponseBytes;
    var i = ["successful", "malformedRequest", "internalError", "tryLater", "_not_used_", "sigRequired", "unauthorized"];
    this.params = null;
    this._getStatusCode = function () {
      var t = this.params.resstatus;
      if (typeof t == "number") {
        return t;
      } else if (typeof t != "string") {
        return -1;
      } else {
        return i.indexOf(t);
      }
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      var i = this._getStatusCode();
      if (i == -1) {
        throw Error("responseStatus not supported: " + t.resstatus);
      }
      if (i != 0) {
        return e({
          seq: [{
            enum: {
              int: i
            }
          }]
        }).tohex();
      } else {
        return e({
          seq: [{
            enum: {
              int: 0
            }
          }, {
            tag: {
              tag: "a0",
              explicit: true,
              obj: new r(t)
            }
          }]
        }).tohex();
      }
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.OCSPResponse, f.asn1.ASN1Object);
  f.asn1.ocsp.ResponseBytes = function (t) {
    f.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.DERObjectIdentifier;
    var s = e.DEROctetString;
    var n = e.ocsp.BasicOCSPResponse;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.tohex = function () {
      var t = this.params;
      if (t.restype != "ocspBasic") {
        throw Error("not supported responseType: " + t.restype);
      }
      var e = new n(t);
      var a = [];
      a.push(new i({
        name: "ocspBasic"
      }));
      a.push(new s({
        hex: e.tohex()
      }));
      return new r({
        array: a
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.ResponseBytes, f.asn1.ASN1Object);
  f.asn1.ocsp.BasicOCSPResponse = function (t) {
    f.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
    var e = Error;
    var r = f.asn1;
    var i = r.ASN1Object;
    var s = r.DERSequence;
    r.DERGeneralizedTime;
    var n = r.DERTaggedObject;
    var a = r.DERBitString;
    r.x509.Extensions;
    var o = r.x509.AlgorithmIdentifier;
    var h = r.ocsp;
    h.ResponderID;
    _SingleResponseList = h.SingleResponseList;
    _ResponseData = h.ResponseData;
    this.params = null;
    this.setByParam = function (t) {
      this.params = t;
    };
    this.sign = function () {
      var t = this.params;
      var e = t.tbsresp.tohex();
      var r = new f.crypto.Signature({
        alg: t.sigalg
      });
      r.init(t.reskey);
      r.updateHex(e);
      t.sighex = r.sign();
    };
    this.tohex = function () {
      var t = this.params;
      if (t.tbsresp == undefined) {
        t.tbsresp = new _ResponseData(t);
      }
      if (t.sighex == undefined && t.reskey != undefined) {
        this.sign();
      }
      var r = [];
      r.push(t.tbsresp);
      r.push(new o({
        name: t.sigalg
      }));
      r.push(new a({
        hex: "00" + t.sighex
      }));
      if (t.certs != undefined && t.certs.length != undefined) {
        var h = [];
        var u = 0;
        for (; u < t.certs.length; u++) {
          var c = t.certs[u];
          var l = null;
          if (t9.isASN1HEX(c)) {
            l = c;
          } else if (c.match(/-----BEGIN/)) {
            l = el(c);
          } else {
            throw new e("certs[" + u + "] not hex or PEM");
          }
          h.push(new i({
            tlv: l
          }));
        }
        var f = new s({
          array: h
        });
        r.push(new n({
          tag: "a0",
          explicit: true,
          obj: f
        }));
      }
      return new s({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.BasicOCSPResponse, f.asn1.ASN1Object);
  f.asn1.ocsp.ResponseData = function (t) {
    f.asn1.ocsp.ResponseData.superclass.constructor.call(this);
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.DERGeneralizedTime;
    var n = r.DERTaggedObject;
    var a = r.x509.Extensions;
    var o = r.ocsp;
    var h = o.ResponderID;
    _SingleResponseList = o.SingleResponseList;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.respid != undefined) {
        new e("respid not specified");
      }
      if (t.prodat != undefined) {
        new e("prodat not specified");
      }
      if (t.array != undefined) {
        new e("array not specified");
      }
      var r = [];
      r.push(new h(t.respid));
      r.push(new s(t.prodat));
      r.push(new _SingleResponseList(t.array));
      if (t.ext != undefined) {
        var o = new a(t.ext);
        r.push(new n({
          tag: "a1",
          explicit: true,
          obj: o
        }));
      }
      return new i({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.ResponseData, f.asn1.ASN1Object);
  f.asn1.ocsp.ResponderID = function (t) {
    f.asn1.ocsp.ResponderID.superclass.constructor.call(this);
    var e = f;
    var r = e.asn1;
    var i = r.ASN1Util.newObject;
    var s = r.x509.X500Name;
    var n = e.lang.String.isHex;
    var a = Error;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.key != undefined) {
        var e = null;
        if (typeof t.key == "string") {
          if (n(t.key)) {
            e = t.key;
          }
          if (t.key.match(/-----BEGIN CERTIFICATE/)) {
            var r = new eH(t.key);
            var o = r.getExtSubjectKeyIdentifier();
            if (o != null) {
              e = o.kid.hex;
            }
          }
        } else if (t.key instanceof eH) {
          var o = t.key.getExtSubjectKeyIdentifier();
          if (o != null) {
            e = o.kid.hex;
          }
        }
        if (e == null) {
          throw new a("wrong key member value");
        }
        var h = i({
          tag: {
            tag: "a2",
            explicit: true,
            obj: {
              octstr: {
                hex: e
              }
            }
          }
        });
        return h.tohex();
      }
      if (t.name != undefined) {
        var u = null;
        if (typeof t.name == "string" && t.name.match(/-----BEGIN CERTIFICATE/)) {
          var r = new eH(t.name);
          u = r.getSubject();
        } else if (t.name instanceof eH) {
          u = t.name.getSubject();
        } else if (typeof t.name == "object" && (t.name.array != undefined || t.name.str != undefined)) {
          u = t.name;
        }
        if (u == null) {
          throw new a("wrong name member value");
        }
        var h = i({
          tag: {
            tag: "a1",
            explicit: true,
            obj: new s(u)
          }
        });
        return h.tohex();
      }
      throw new a("key or name not specified");
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.ResponderID, f.asn1.ASN1Object);
  f.asn1.ocsp.SingleResponseList = function (t) {
    f.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.ocsp.SingleResponse;
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (typeof t != "object" || t.length == undefined) {
        throw Error("params not specified properly");
      }
      var e = [];
      var s = 0;
      for (; s < t.length; s++) {
        e.push(new i(t[s]));
      }
      return new r({
        array: e
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.SingleResponseList, f.asn1.ASN1Object);
  f.asn1.ocsp.SingleResponse = function (t) {
    var e = Error;
    var r = f.asn1;
    var i = r.DERSequence;
    var s = r.DERGeneralizedTime;
    var n = r.DERTaggedObject;
    var a = r.ocsp;
    var o = a.CertID;
    var h = a.CertStatus;
    var u = r.x509.Extensions;
    a.SingleResponse.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      var r = [];
      if (t.certid == undefined) {
        throw new e("certid unspecified");
      }
      if (t.status == undefined) {
        throw new e("status unspecified");
      }
      if (t.thisupdate == undefined) {
        throw new e("thisupdate unspecified");
      }
      r.push(new o(t.certid));
      r.push(new h(t.status));
      r.push(new s(t.thisupdate));
      if (t.nextupdate != undefined) {
        var a = new s(t.nextupdate);
        r.push(new n({
          tag: "a0",
          explicit: true,
          obj: a
        }));
      }
      if (t.ext != undefined) {
        var c = new u(t.ext);
        r.push(new n({
          tag: "a1",
          explicit: true,
          obj: c
        }));
      }
      return new i({
        array: r
      }).tohex();
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.SingleResponse, f.asn1.ASN1Object);
  f.asn1.ocsp.CertID = function (t) {
    var e = f;
    var r = e.asn1;
    var i = r.DEROctetString;
    var s = r.DERInteger;
    var n = r.DERSequence;
    var a = r.x509.AlgorithmIdentifier;
    var o = r.ocsp;
    var h = (o.DEFAULT_HASH, e.crypto).Util.hashHex;
    var u = t9.getVbyList;
    o.CertID.superclass.constructor.call(this);
    this.DEFAULT_HASH = "sha1";
    this.params = null;
    this.setByValue = function (t, e, r, i) {
      if (i == undefined) {
        i = this.DEFAULT_HASH;
      }
      this.params = {
        alg: i,
        issname: t,
        isskey: e,
        sbjsn: r
      };
    };
    this.setByCert = function (t, e, r) {
      if (r == undefined) {
        r = this.DEFAULT_HASH;
      }
      this.params = {
        alg: r,
        issuerCert: t,
        subjectCert: e
      };
    };
    this.getParamByCerts = function (t, e, r) {
      if (r == undefined) {
        r = this.DEFAULT_HASH;
      }
      var i = new eH(t);
      var s = new eH(e);
      var n = h(i.getSubjectHex(), r);
      var a = h(u(i.getPublicKeyHex(), 0, [1], "03", true), r);
      return {
        alg: r,
        issname: n,
        isskey: a,
        sbjsn: s.getSerialNumberHex()
      };
    };
    this.tohex = function () {
      if (typeof this.params != "object") {
        throw Error("params not set");
      }
      var t;
      var e;
      var r;
      var o;
      var h = this.params;
      o = h.alg == undefined ? this.DEFAULT_HASH : h.alg;
      if (h.issuerCert != undefined && h.subjectCert != undefined) {
        var u = this.getParamByCerts(h.issuerCert, h.subjectCert, o);
        t = u.issname;
        e = u.isskey;
        r = u.sbjsn;
      } else if (h.issname != undefined && h.isskey != undefined && h.sbjsn != undefined) {
        t = h.issname;
        e = h.isskey;
        r = h.sbjsn;
      } else {
        throw Error("required param members not defined");
      }
      var c = new n({
        array: [new a({
          name: o
        }), new i({
          hex: t
        }), new i({
          hex: e
        }), new s({
          hex: r
        })]
      });
      this.hTLV = c.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.CertID, f.asn1.ASN1Object);
  f.asn1.ocsp.CertStatus = function (t) {
    f.asn1.ocsp.CertStatus.superclass.constructor.call(this);
    this.params = null;
    this.tohex = function () {
      var t = this.params;
      if (t.status == "good") {
        return "8000";
      }
      if (t.status == "unknown") {
        return "8200";
      }
      if (t.status == "revoked") {
        var e = [{
          gentime: {
            str: t.time
          }
        }];
        if (t.reason != undefined) {
          e.push({
            tag: {
              tag: "a0",
              explicit: true,
              obj: {
                enum: {
                  int: t.reason
                }
              }
            }
          });
        }
        return f.asn1.ASN1Util.newObject({
          tag: {
            tag: "a1",
            explicit: false,
            obj: {
              seq: e
            }
          }
        }).tohex();
      }
      throw Error("bad status");
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    this.setByParam = function (t) {
      this.params = t;
    };
    if (t !== undefined) {
      this.setByParam(t);
    }
  };
  eC(f.asn1.ocsp.CertStatus, f.asn1.ASN1Object);
  f.asn1.ocsp.Request = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.ocsp;
    i.Request.superclass.constructor.call(this);
    this.dReqCert = null;
    this.dExt = null;
    this.tohex = function () {
      var t = [];
      if (this.dReqCert === null) {
        throw "reqCert not set";
      }
      t.push(this.dReqCert);
      var e = new r({
        array: t
      });
      this.hTLV = e.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined) {
      var s = new i.CertID(t);
      this.dReqCert = s;
    }
  };
  eC(f.asn1.ocsp.Request, f.asn1.ASN1Object);
  f.asn1.ocsp.TBSRequest = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.ocsp;
    i.TBSRequest.superclass.constructor.call(this);
    this.version = 0;
    this.dRequestorName = null;
    this.dRequestList = [];
    this.dRequestExt = null;
    this.setRequestListByParam = function (t) {
      var e = [];
      var r = 0;
      for (; r < t.length; r++) {
        var s = new i.Request(t[0]);
        e.push(s);
      }
      this.dRequestList = e;
    };
    this.tohex = function () {
      var t = [];
      if (this.version !== 0) {
        throw "not supported version: " + this.version;
      }
      if (this.dRequestorName !== null) {
        throw "requestorName not supported";
      }
      var e = new r({
        array: this.dRequestList
      });
      t.push(e);
      if (this.dRequestExt !== null) {
        throw "requestExtensions not supported";
      }
      var i = new r({
        array: t
      });
      this.hTLV = i.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined && t.reqList !== undefined) {
      this.setRequestListByParam(t.reqList);
    }
  };
  eC(f.asn1.ocsp.TBSRequest, f.asn1.ASN1Object);
  f.asn1.ocsp.OCSPRequest = function (t) {
    var e = f.asn1;
    var r = e.DERSequence;
    var i = e.ocsp;
    i.OCSPRequest.superclass.constructor.call(this);
    this.dTbsRequest = null;
    this.dOptionalSignature = null;
    this.tohex = function () {
      var t = [];
      if (this.dTbsRequest !== null) {
        t.push(this.dTbsRequest);
      } else {
        throw "tbsRequest not set";
      }
      if (this.dOptionalSignature !== null) {
        throw "optionalSignature not supported";
      }
      var e = new r({
        array: t
      });
      this.hTLV = e.tohex();
      return this.hTLV;
    };
    this.getEncodedHex = function () {
      return this.tohex();
    };
    if (t !== undefined && t.reqList !== undefined) {
      var s = new i.TBSRequest(t);
      this.dTbsRequest = s;
    }
  };
  eC(f.asn1.ocsp.OCSPRequest, f.asn1.ASN1Object);
  f.asn1.ocsp.OCSPUtil = {};
  f.asn1.ocsp.OCSPUtil.getRequestHex = function (t, e, r) {
    var i = f.asn1.ocsp;
    if (r === undefined) {
      r = i.DEFAULT_HASH;
    }
    var s = {
      alg: r,
      issuerCert: t,
      subjectCert: e
    };
    return new i.OCSPRequest({
      reqList: [s]
    }).tohex();
  };
  f.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function (t) {
    var e = t9.getVbyList;
    var r = t9.getVbyListEx;
    var i = t9.getIdxbyList;
    t9.getIdxbyListEx;
    var s = t9.getV;
    var n = {};
    try {
      var a = r(t, 0, [0], "0a");
      n.responseStatus = parseInt(a, 16);
    } catch (t) {}
    if (n.responseStatus !== 0) {
      return n;
    }
    try {
      var o = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
      if (t.substr(o, 2) === "80") {
        n.certStatus = "good";
      } else if (t.substr(o, 2) === "a1") {
        n.certStatus = "revoked";
        n.revocationTime = eo(e(t, o, [0]));
      } else if (t.substr(o, 2) === "82") {
        n.certStatus = "unknown";
      }
    } catch (t) {}
    try {
      var h = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
      n.thisUpdate = eo(s(t, h));
    } catch (t) {}
    try {
      var u = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
      if (t.substr(u, 2) === "a0") {
        n.nextUpdate = eo(e(t, u, [0]));
      }
    } catch (t) {}
    return n;
  };
  f.asn1.ocsp.OCSPParser = function () {
    var t = Error;
    var e = new eH();
    var r = t9.getV;
    var i = t9.getTLV;
    var s = t9.getIdxbyList;
    var n = t9.getVbyList;
    var a = t9.getTLVbyList;
    var o = t9.getVbyListEx;
    var h = t9.getTLVbyListEx;
    var u = t9.getChildIdx;
    this.getOCSPRequest = function (e) {
      var r = u(e, 0);
      if (r.length != 1 && r.length != 2) {
        throw new t("wrong number elements: " + r.length);
      }
      return this.getTBSRequest(i(e, r[0]));
    };
    this.getTBSRequest = function (t) {
      var r = {};
      var i = h(t, 0, [0], "30");
      r.array = this.getRequestList(i);
      var s = h(t, 0, ["[2]", 0], "30");
      if (s != null) {
        r.ext = e.getExtParamArray(s);
      }
      return r;
    };
    this.getRequestList = function (t) {
      var e = [];
      var r = u(t, 0);
      var s = 0;
      for (; s < r.length; s++) {
        var t = i(t, r[s]);
        e.push(this.getRequest(t));
      }
      return e;
    };
    this.getRequest = function (r) {
      var n = u(r, 0);
      if (n.length != 1 && n.length != 2) {
        throw new t("wrong number elements: " + n.length);
      }
      var a = this.getCertID(i(r, n[0]));
      if (n.length == 2) {
        var o = s(r, 0, [1, 0]);
        a.ext = e.getExtParamArray(i(r, o));
      }
      return a;
    };
    this.getCertID = function (e) {
      var s = u(e, 0);
      if (s.length != 4) {
        throw new t("wrong number elements: " + s.length);
      }
      var n = new eH();
      var a = {};
      a.alg = n.getAlgorithmIdentifierName(i(e, s[0]));
      a.issname = r(e, s[1]);
      a.isskey = r(e, s[2]);
      a.sbjsn = r(e, s[3]);
      return a;
    };
    this.getOCSPResponse = function (t) {
      var e;
      var i = u(t, 0);
      var s = parseInt(r(t, i[0]));
      if (i.length == 1) {
        return {
          resstatus: s
        };
      }
      var n = a(t, 0, [1, 0]);
      (e = this.getResponseBytes(n)).resstatus = s;
      return e;
    };
    this.getResponseBytes = function (t) {
      var e;
      var i = u(t, 0);
      var s = a(t, 0, [1, 0]);
      e = this.getBasicOCSPResponse(s);
      var n = r(t, i[0]);
      e.restype = f.asn1.x509.OID.oid2name(ew(n));
      return e;
    };
    this.getBasicOCSPResponse = function (t) {
      var e;
      var s = u(t, 0);
      e = this.getResponseData(i(t, s[0]));
      var n = new eH();
      e.alg = n.getAlgorithmIdentifierName(i(t, s[1]));
      var a = r(t, s[2]);
      e.sighex = a.substr(2);
      var h = o(t, 0, ["[0]"]);
      if (h != null) {
        var c = u(h, 0);
        var l = [];
        var f = 0;
        for (; f < c.length; f++) {
          var d = i(h, c[f]);
          l.push(d);
        }
        e.certs = l;
      }
      return e;
    };
    this.getResponseData = function (t) {
      var e = u(t, 0);
      var s = e.length;
      var n = {};
      var o = 0;
      if (t.substr(e[0], 2) == "a0") {
        o++;
      }
      n.respid = this.getResponderID(i(t, e[o++]));
      var h = r(t, e[o++]);
      n.prodat = eo(h);
      n.array = this.getSingleResponseList(i(t, e[o++]));
      if (t.substr(e[s - 1], 2) == "a1") {
        var c = a(t, e[s - 1], [0]);
        var l = new eH();
        n.ext = l.getExtParamArray(c);
      }
      return n;
    };
    this.getResponderID = function (t) {
      var e = {};
      if (t.substr(0, 2) == "a2") {
        var r = n(t, 0, [0]);
        e.key = r;
      }
      if (t.substr(0, 2) == "a1") {
        var i = a(t, 0, [0]);
        var s = new eH();
        e.name = s.getX500Name(i);
      }
      return e;
    };
    this.getSingleResponseList = function (t) {
      var e = u(t, 0);
      var r = [];
      var s = 0;
      for (; s < e.length; s++) {
        var n = this.getSingleResponse(i(t, e[s]));
        r.push(n);
      }
      return r;
    };
    this.getSingleResponse = function (t) {
      var e = u(t, 0);
      var s = {};
      var o = this.getCertID(i(t, e[0]));
      s.certid = o;
      var h = this.getCertStatus(i(t, e[1]));
      s.status = h;
      if (t.substr(e[2], 2) == "18") {
        var c = r(t, e[2]);
        s.thisupdate = eo(c);
      }
      for (var l = 3; l < e.length; l++) {
        if (t.substr(e[l], 2) == "a0") {
          var f = n(t, e[l], [0], "18");
          s.nextupdate = eo(f);
        }
        if (t.substr(e[l], 2) == "a1") {
          var d = new eH();
          var p = a(t, 0, [l, 0]);
          s.ext = d.getExtParamArray(p);
        }
      }
      return s;
    };
    this.getCertStatus = function (t) {
      var e = {};
      if (t == "8000") {
        return {
          status: "good"
        };
      }
      if (t == "8200") {
        return {
          status: "unknown"
        };
      }
      if (t.substr(0, 2) == "a1") {
        e.status = "revoked";
        var r = eo(n(t, 0, [0]));
        e.time = r;
      }
      return e;
    };
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.lang === undefined || !f.lang) {
    f.lang = {};
  }
  f.lang.String = function () {};
  if (typeof g == "function") {
    d = function (t) {
      return er(g.from(t, "utf8").toString("base64"));
    };
    p = function (t) {
      return g.from(ei(t), "base64").toString("utf8");
    };
  } else {
    d = function (t) {
      return es(ef(eS(t)));
    };
    p = function (t) {
      return decodeURIComponent(ed(en(t)));
    };
  }
  function eh(t) {
    var e = "";
    var r = 0;
    for (; r < t.length - 1; r += 2) {
      e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
    }
    return e;
  }
  function eu(t) {
    var e = "";
    var r = 0;
    for (; r < t.length; r++) {
      e += ("0" + t.charCodeAt(r).toString(16)).slice(-2);
    }
    return e;
  }
  function ec(t, e) {
    var r;
    return "-----BEGIN " + e + "-----\r\n" + (r = (r = (r = S(t)).replace(RegExp("(.{64})", "g"), "$1\r\n")).replace(/\s+$/, "")) + "\r\n-----END " + e + "-----\r\n";
  }
  function el(t, e) {
    if (t.indexOf("-----BEGIN ") == -1) {
      throw Error("can't find PEM header");
    }
    return E((t = e !== undefined ? (t = t.replace(RegExp("^[^]*-----BEGIN " + e + "-----"), "")).replace(RegExp("-----END " + e + "-----[^]*$"), "") : (t = t.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(/-----END [^-]+-----[^]*$/, "")).replace(/[^0-9A-Za-z\/+=]*/g, ""));
  }
  function ef(t) {
    return t.replace(/%/g, "");
  }
  function ed(t) {
    return t.replace(/(..)/g, "%$1");
  }
  function ep(t) {
    var e = "malformed IPv6 address";
    if (!t.match(/^[0-9A-Fa-f:]+$/)) {
      throw e;
    }
    var r = (t = t.toLowerCase()).split(":").length - 1;
    if (r < 2) {
      throw e;
    }
    var i = ":".repeat(7 - r + 2);
    var s = (t = t.replace("::", i)).split(":");
    if (s.length != 8) {
      throw e;
    }
    for (var n = 0; n < 8; n++) {
      s[n] = ("0000" + s[n]).slice(-4);
    }
    return s.join("");
  }
  function eg(t) {
    if (!t.match(/^[0-9A-Fa-f]{32}$/)) {
      throw Error("malformed IPv6 address: " + t);
    }
    var e = (t = t.toLowerCase()).match(/.{1,4}/g);
    var r = (t = ":" + (e = (e = e.map(function (t) {
      return t.replace(/^0+/, "");
    })).map(function (t) {
      if (t == "") {
        return "0";
      } else {
        return t;
      }
    })).join(":") + ":").match(/:(0:){2,}/g);
    if (r == null) {
      return t.slice(1, -1);
    }
    var i = r.sort().slice(-1)[0];
    if ((t = t.replace(i.substr(0, i.length - 1), ":")).substr(0, 2) != "::") {
      t = t.substr(1);
    }
    if (t.substr(-2, 2) != "::") {
      t = t.substr(0, t.length - 1);
    }
    return t;
  }
  function ev(t) {
    var e = Error("malformed hex value");
    if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) {
      throw e;
    }
    if (t.length == 8) {
      try {
        return parseInt(t.substr(0, 2), 16) + "." + parseInt(t.substr(2, 2), 16) + "." + parseInt(t.substr(4, 2), 16) + "." + parseInt(t.substr(6, 2), 16);
      } catch (t) {
        throw e;
      }
    } else if (t.length == 16) {
      try {
        return ev(t.substr(0, 8)) + "/" + ex(t.substr(8));
      } catch (t) {
        throw e;
      }
    } else {
      if (t.length == 32) {
        return eg(t);
      }
      if (t.length != 64) {
        return t;
      }
      try {
        return eg(t.substr(0, 32)) + "/" + ex(t.substr(32));
      } catch (t) {
        throw e;
      }
      return;
    }
  }
  function ex(t) {
    var e;
    var r = Error("malformed mask");
    try {
      e = new b(t, 16).toString(2);
    } catch (t) {
      throw r;
    }
    if (!e.match(/^1*0*$/)) {
      throw r;
    }
    return e.replace(/0+$/, "").length;
  }
  function em(t, e) {
    if (e == 32 && t == 0) {
      return "00000000";
    } else if (e == 128 && t == 0) {
      return "00000000000000000000000000000000";
    } else {
      return new b(Array(t + 1).join("1") + Array(e - t + 1).join("0"), 2).toString(16);
    }
  }
  function ey(t) {
    return t.match(/.{4}/g).map(function (t) {
      var e = parseInt(t.substr(0, 2), 16);
      var r = parseInt(t.substr(2), 16);
      if (e == 0 & r < 128) {
        return String.fromCharCode(r);
      }
      if (e < 8) {
        var i = (e & 7) << 3 | 192 | (r & 192) >> 6;
        var s = r & 63 | 128;
        return eo(i.toString(16) + s.toString(16));
      }
      var i = (e & 240) >> 4 | 224;
      var s = (e & 15) << 2 | 128 | (r & 192) >> 6;
      return eo(i.toString(16) + s.toString(16) + (r & 63 | 128).toString(16));
    }).join("");
  }
  function eS(t) {
    var e = encodeURIComponent(t);
    var r = "";
    var i = 0;
    for (; i < e.length; i++) {
      if (e[i] == "%") {
        r += e.substr(i, 3);
        i += 2;
      } else {
        r = r + "%" + ee(e[i]);
      }
    }
    return r;
  }
  function eE(t) {
    return t.length % 2 == 0 && (!!t.match(/^[0-9a-f]+$/) || !!t.match(/^[0-9A-F]+$/));
  }
  function eb(t) {
    return !!t.match(/^[0-9A-Za-z-_.]+$/);
  }
  function eF(t) {
    if (t.length % 2 == 1) {
      return "0" + t;
    } else if (t.substr(0, 1) > "7") {
      return "00" + t;
    } else {
      return t;
    }
  }
  f.lang.String.isInteger = function (t) {
    return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
  };
  f.lang.String.isHex = function (t) {
    return eE(t);
  };
  f.lang.String.isBase64 = function (t) {
    return !!(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) && t.length % 4 == 0;
  };
  f.lang.String.isBase64URL = function (t) {
    return !t.match(/[+/=]/) && (t = ei(t), f.lang.String.isBase64(t));
  };
  f.lang.String.isIntegerArray = function (t) {
    return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/);
  };
  f.lang.String.isPrintable = function (t) {
    return t.match(/^[0-9A-Za-z '()+,-./:=?]*$/) !== null;
  };
  f.lang.String.isIA5 = function (t) {
    return t.match(/^[\x20-\x21\x23-\x7f]*$/) !== null;
  };
  f.lang.String.isMail = function (t) {
    return t.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) !== null;
  };
  function ew(t) {
    if (!eE(t)) {
      return null;
    }
    try {
      var e = [];
      var r = t.substr(0, 2);
      var i = parseInt(r, 16);
      e[0] = new String(Math.floor(i / 40));
      e[1] = new String(i % 40);
      var s = t.substr(2);
      var n = [];
      var a = 0;
      for (; a < s.length / 2; a++) {
        n.push(parseInt(s.substr(a * 2, 2), 16));
      }
      var o = [];
      var h = "";
      var a = 0;
      for (; a < n.length; a++) {
        if (n[a] & 128) {
          h += eD((n[a] & 127).toString(2), 7);
        } else {
          h += eD((n[a] & 127).toString(2), 7);
          o.push(new String(parseInt(h, 2)));
          h = "";
        }
      }
      var u = e.join(".");
      if (o.length > 0) {
        u = u + "." + o.join(".");
      }
      return u;
    } catch (t) {
      return null;
    }
  }
  function eA(t) {
    var e = t.toString(16);
    if (e.substr(0, 1) != "-") {
      if (e.length % 2 == 1) {
        e = "0" + e;
      } else if (!e.match(/^[0-7]/)) {
        e = "00" + e;
      }
      return e;
    }
    var r = e.substr(1).length;
    if (r % 2 == 1) {
      r += 1;
    } else if (!e.match(/^[0-7]/)) {
      r += 2;
    }
    var i = "";
    var s = 0;
    for (; s < r; s++) {
      i += "f";
    }
    return new b(i, 16).xor(t).add(b.ONE).toString(16).replace(/^-/, "");
  }
  function eD(t, e, r) {
    if (r == undefined) {
      r = "0";
    }
    if (t.length >= e) {
      return t;
    } else {
      return Array(e - t.length + 1).join(r) + t;
    }
  }
  function eP(t, e) {
    var r = 0;
    var i = 0;
    for (; i < t.length; i++) {
      r |= 1 << e[t[i]];
    }
    var s = r.toString(2);
    var n = "";
    var i = s.length - 1;
    for (; i >= 0; i--) {
      n += s[i];
    }
    return n;
  }
  function eI(t, e, r) {
    if (typeof t == "object") {
      var e = String(e).split(".");
      var i = 0;
      for (; i < e.length && t; i++) {
        var s = e[i];
        if (s.match(/^[0-9]+$/)) {
          s = parseInt(s);
        }
        t = t[s];
      }
      if (t || t === false) {
        return t;
      } else {
        return r;
      }
    }
  }
  function eC(t, e) {
    function r() {}
    r.prototype = e.prototype;
    t.prototype = new r();
    t.prototype.constructor = t;
    t.superclass = e.prototype;
    if (e.prototype.constructor == Object.prototype.constructor) {
      e.prototype.constructor = e;
    }
  }
  if (f === undefined || !f) {
    f = {};
  }
  if (f.crypto === undefined || !f.crypto) {
    f.crypto = {};
  }
  f.crypto.Util = new function () {
    this.DIGESTINFOHEAD = {
      sha1: "3021300906052b0e03021a05000414",
      sha224: "302d300d06096086480165030402040500041c",
      sha256: "3031300d060960864801650304020105000420",
      sha384: "3041300d060960864801650304020205000430",
      sha512: "3051300d060960864801650304020305000440",
      md2: "3020300c06082a864886f70d020205000410",
      md5: "3020300c06082a864886f70d020505000410",
      ripemd160: "3021300906052b2403020105000414"
    };
    this.DEFAULTPROVIDER = {
      md5: "cryptojs",
      sha1: "cryptojs",
      sha224: "cryptojs",
      sha256: "cryptojs",
      sha384: "cryptojs",
      sha512: "cryptojs",
      ripemd160: "cryptojs",
      hmacmd5: "cryptojs",
      hmacsha1: "cryptojs",
      hmacsha224: "cryptojs",
      hmacsha256: "cryptojs",
      hmacsha384: "cryptojs",
      hmacsha512: "cryptojs",
      hmacripemd160: "cryptojs",
      MD5withRSA: "cryptojs/jsrsa",
      SHA1withRSA: "cryptojs/jsrsa",
      SHA224withRSA: "cryptojs/jsrsa",
      SHA256withRSA: "cryptojs/jsrsa",
      SHA384withRSA: "cryptojs/jsrsa",
      SHA512withRSA: "cryptojs/jsrsa",
      RIPEMD160withRSA: "cryptojs/jsrsa",
      MD5withECDSA: "cryptojs/jsrsa",
      SHA1withECDSA: "cryptojs/jsrsa",
      SHA224withECDSA: "cryptojs/jsrsa",
      SHA256withECDSA: "cryptojs/jsrsa",
      SHA384withECDSA: "cryptojs/jsrsa",
      SHA512withECDSA: "cryptojs/jsrsa",
      RIPEMD160withECDSA: "cryptojs/jsrsa",
      SHA1withDSA: "cryptojs/jsrsa",
      SHA224withDSA: "cryptojs/jsrsa",
      SHA256withDSA: "cryptojs/jsrsa",
      MD5withRSAandMGF1: "cryptojs/jsrsa",
      SHAwithRSAandMGF1: "cryptojs/jsrsa",
      SHA1withRSAandMGF1: "cryptojs/jsrsa",
      SHA224withRSAandMGF1: "cryptojs/jsrsa",
      SHA256withRSAandMGF1: "cryptojs/jsrsa",
      SHA384withRSAandMGF1: "cryptojs/jsrsa",
      SHA512withRSAandMGF1: "cryptojs/jsrsa",
      RIPEMD160withRSAandMGF1: "cryptojs/jsrsa"
    };
    this.CRYPTOJSMESSAGEDIGESTNAME = {
      md5: m.algo.MD5,
      sha1: m.algo.SHA1,
      sha224: m.algo.SHA224,
      sha256: m.algo.SHA256,
      sha384: m.algo.SHA384,
      sha512: m.algo.SHA512,
      ripemd160: m.algo.RIPEMD160
    };
    this.getDigestInfoHex = function (t, e) {
      if (this.DIGESTINFOHEAD[e] === undefined) {
        throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
      }
      return this.DIGESTINFOHEAD[e] + t;
    };
    this.getPaddedDigestInfoHex = function (t, e, r) {
      var i = this.getDigestInfoHex(t, e);
      var s = r / 4;
      if (i.length + 22 > s) {
        throw "key is too short for SigAlg: keylen=" + r + "," + e;
      }
      var n = "0001";
      var a = "00" + i;
      var o = "";
      var h = s - n.length - a.length;
      var u = 0;
      for (; u < h; u += 2) {
        o += "ff";
      }
      return n + o + a;
    };
    this.hashString = function (t, e) {
      return new f.crypto.MessageDigest({
        alg: e
      }).digestString(t);
    };
    this.hashHex = function (t, e) {
      return new f.crypto.MessageDigest({
        alg: e
      }).digestHex(t);
    };
    this.sha1 = function (t) {
      return this.hashString(t, "sha1");
    };
    this.sha256 = function (t) {
      return this.hashString(t, "sha256");
    };
    this.sha256Hex = function (t) {
      return this.hashHex(t, "sha256");
    };
    this.sha512 = function (t) {
      return this.hashString(t, "sha512");
    };
    this.sha512Hex = function (t) {
      return this.hashHex(t, "sha512");
    };
    this.isKey = function (t) {
      return t instanceof t5 || t instanceof f.crypto.DSA || t instanceof f.crypto.ECDSA;
    };
  }();
  f.crypto.Util.md5 = function (t) {
    return new f.crypto.MessageDigest({
      alg: "md5",
      prov: "cryptojs"
    }).digestString(t);
  };
  f.crypto.Util.ripemd160 = function (t) {
    return new f.crypto.MessageDigest({
      alg: "ripemd160",
      prov: "cryptojs"
    }).digestString(t);
  };
  f.crypto.Util.SECURERANDOMGEN = new t1();
  f.crypto.Util.getRandomHexOfNbytes = function (t) {
    var e = Array(t);
    f.crypto.Util.SECURERANDOMGEN.nextBytes(e);
    return et(e);
  };
  f.crypto.Util.getRandomBigIntegerOfNbytes = function (t) {
    return new b(f.crypto.Util.getRandomHexOfNbytes(t), 16);
  };
  f.crypto.Util.getRandomHexOfNbits = function (t) {
    var e = t % 8;
    var r = Array((t - e) / 8 + 1);
    f.crypto.Util.SECURERANDOMGEN.nextBytes(r);
    r[0] = (255 << e & 255 ^ 255) & r[0];
    return et(r);
  };
  f.crypto.Util.getRandomBigIntegerOfNbits = function (t) {
    return new b(f.crypto.Util.getRandomHexOfNbits(t), 16);
  };
  f.crypto.Util.getRandomBigIntegerZeroToMax = function (t) {
    var e = t.bitLength();
    for (;;) {
      var r = f.crypto.Util.getRandomBigIntegerOfNbits(e);
      if (t.compareTo(r) != -1) {
        return r;
      }
    }
  };
  f.crypto.Util.getRandomBigIntegerMinToMax = function (t, e) {
    var r = t.compareTo(e);
    if (r == 1) {
      throw "biMin is greater than biMax";
    }
    if (r == 0) {
      return t;
    }
    var i = e.subtract(t);
    return f.crypto.Util.getRandomBigIntegerZeroToMax(i).add(t);
  };
  f.crypto.MessageDigest = function (t) {
    this.setAlgAndProvider = function (t, e) {
      if ((t = f.crypto.MessageDigest.getCanonicalAlgName(t)) !== null && e === undefined) {
        e = f.crypto.Util.DEFAULTPROVIDER[t];
      }
      if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) != -1 && e == "cryptojs") {
        try {
          this.md = f.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
        } catch (e) {
          throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
        }
        this.updateString = function (t) {
          this.md.update(t);
        };
        this.updateHex = function (t) {
          var e = m.enc.Hex.parse(t);
          this.md.update(e);
        };
        this.digest = function () {
          return this.md.finalize().toString(m.enc.Hex);
        };
        this.digestString = function (t) {
          this.updateString(t);
          return this.digest();
        };
        this.digestHex = function (t) {
          this.updateHex(t);
          return this.digest();
        };
      }
      if (":sha256:".indexOf(t) != -1 && e == "sjcl") {
        try {
          this.md = new sjcl.hash.sha256();
        } catch (e) {
          throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + e;
        }
        this.updateString = function (t) {
          this.md.update(t);
        };
        this.updateHex = function (t) {
          var e = sjcl.codec.hex.toBits(t);
          this.md.update(e);
        };
        this.digest = function () {
          var t = this.md.finalize();
          return sjcl.codec.hex.fromBits(t);
        };
        this.digestString = function (t) {
          this.updateString(t);
          return this.digest();
        };
        this.digestHex = function (t) {
          this.updateHex(t);
          return this.digest();
        };
      }
    };
    this.updateString = function (t) {
      throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };
    this.updateHex = function (t) {
      throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };
    this.digest = function () {
      throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };
    this.digestString = function (t) {
      throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };
    this.digestHex = function (t) {
      throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };
    if (t !== undefined && t.alg !== undefined) {
      this.algName = t.alg;
      if (t.prov === undefined) {
        this.provName = f.crypto.Util.DEFAULTPROVIDER[this.algName];
      }
      this.setAlgAndProvider(this.algName, this.provName);
    }
  };
  f.crypto.MessageDigest.getCanonicalAlgName = function (t) {
    if (typeof t == "string") {
      t = (t = t.toLowerCase()).replace(/-/, "");
    }
    return t;
  };
  f.crypto.MessageDigest.getHashLength = function (t) {
    var e = f.crypto.MessageDigest;
    var r = e.getCanonicalAlgName(t);
    if (e.HASHLENGTH[r] === undefined) {
      throw "not supported algorithm: " + t;
    }
    return e.HASHLENGTH[r];
  };
  f.crypto.MessageDigest.HASHLENGTH = {
    md5: 16,
    sha1: 20,
    sha224: 28,
    sha256: 32,
    sha384: 48,
    sha512: 64,
    ripemd160: 20
  };
  f.crypto.Mac = function (t) {
    this.setAlgAndProvider = function (t, e) {
      if ((t = t.toLowerCase()) == null) {
        t = "hmacsha1";
      }
      if ((t = t.toLowerCase()).substr(0, 4) != "hmac") {
        throw "setAlgAndProvider unsupported HMAC alg: " + t;
      }
      if (e === undefined) {
        e = f.crypto.Util.DEFAULTPROVIDER[t];
      }
      this.algProv = t + "/" + e;
      var r = t.substr(4);
      if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r) != -1 && e == "cryptojs") {
        try {
          var i = f.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
          this.mac = m.algo.HMAC.create(i, this.pass);
        } catch (t) {
          throw "setAlgAndProvider hash alg set fail hashAlg=" + r + "/" + t;
        }
        this.updateString = function (t) {
          this.mac.update(t);
        };
        this.updateHex = function (t) {
          var e = m.enc.Hex.parse(t);
          this.mac.update(e);
        };
        this.doFinal = function () {
          return this.mac.finalize().toString(m.enc.Hex);
        };
        this.doFinalString = function (t) {
          this.updateString(t);
          return this.doFinal();
        };
        this.doFinalHex = function (t) {
          this.updateHex(t);
          return this.doFinal();
        };
      }
    };
    this.updateString = function (t) {
      throw "updateString(str) not supported for this alg/prov: " + this.algProv;
    };
    this.updateHex = function (t) {
      throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
    };
    this.doFinal = function () {
      throw "digest() not supported for this alg/prov: " + this.algProv;
    };
    this.doFinalString = function (t) {
      throw "digestString(str) not supported for this alg/prov: " + this.algProv;
    };
    this.doFinalHex = function (t) {
      throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
    };
    this.setPassword = function (t) {
      if (typeof t == "string") {
        var e = t;
        if (t.length % 2 == 1 || !t.match(/^[0-9A-Fa-f]+$/)) {
          e = eu(t);
        }
        this.pass = m.enc.Hex.parse(e);
        return;
      }
      if (typeof t != "object") {
        throw "KJUR.crypto.Mac unsupported password type: " + t;
      }
      var e = null;
      if (t.hex !== undefined) {
        if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/)) {
          throw "Mac: wrong hex password: " + t.hex;
        }
        e = t.hex;
      }
      if (t.utf8 !== undefined) {
        e = ea(t.utf8);
      }
      if (t.rstr !== undefined) {
        e = eu(t.rstr);
      }
      if (t.b64 !== undefined) {
        e = E(t.b64);
      }
      if (t.b64u !== undefined) {
        e = en(t.b64u);
      }
      if (e == null) {
        throw "KJUR.crypto.Mac unsupported password type: " + t;
      }
      this.pass = m.enc.Hex.parse(e);
    };
    if (t !== undefined) {
      if (t.pass !== undefined) {
        this.setPassword(t.pass);
      }
      if (t.alg !== undefined) {
        this.algName = t.alg;
        if (t.prov === undefined) {
          this.provName = f.crypto.Util.DEFAULTPROVIDER[this.algName];
        }
        this.setAlgAndProvider(this.algName, this.provName);
      }
    }
  };
  f.crypto.Signature = function (t) {
    var e = null;
    this._setAlgNames = function () {
      var t = this.algName.match(/^(.+)with(.+)$/);
      if (t) {
        this.mdAlgName = t[1].toLowerCase();
        this.pubkeyAlgName = t[2].toLowerCase();
        if (this.pubkeyAlgName == "rsaandmgf1" && this.mdAlgName == "sha") {
          this.mdAlgName = "sha1";
        }
      }
    };
    this._zeroPaddingOfSignature = function (t, e) {
      var r = "";
      var i = e / 4 - t.length;
      var s = 0;
      for (; s < i; s++) {
        r += "0";
      }
      return r + t;
    };
    this.setAlgAndProvider = function (t, e) {
      this._setAlgNames();
      if (e != "cryptojs/jsrsa") {
        throw Error("provider not supported: " + e);
      }
      if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
        try {
          this.md = new f.crypto.MessageDigest({
            alg: this.mdAlgName
          });
        } catch (t) {
          throw Error("setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + t);
        }
        this.init = function (t, e) {
          var r = null;
          try {
            r = e === undefined ? eR.getKey(t) : eR.getKey(t, e);
          } catch (t) {
            throw "init failed:" + t;
          }
          if (r.isPrivate === true) {
            this.prvKey = r;
            this.state = "SIGN";
          } else if (r.isPublic === true) {
            this.pubKey = r;
            this.state = "VERIFY";
          } else {
            throw "init failed.:" + r;
          }
        };
        this.updateString = function (t) {
          this.md.updateString(t);
        };
        this.updateHex = function (t) {
          this.md.updateHex(t);
        };
        this.sign = function () {
          this.sHashHex = this.md.digest();
          if (this.prvKey === undefined && this.ecprvhex !== undefined && this.eccurvename !== undefined && f.crypto.ECDSA !== undefined) {
            this.prvKey = new f.crypto.ECDSA({
              curve: this.eccurvename,
              prv: this.ecprvhex
            });
          }
          if (this.prvKey instanceof t5 && this.pubkeyAlgName === "rsaandmgf1") {
            this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
          } else if (this.prvKey instanceof t5 && this.pubkeyAlgName === "rsa") {
            this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
          } else if (this.prvKey instanceof f.crypto.ECDSA) {
            this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
          } else if (this.prvKey instanceof f.crypto.DSA) {
            this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
          } else {
            throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
          }
          return this.hSign;
        };
        this.signString = function (t) {
          this.updateString(t);
          return this.sign();
        };
        this.signHex = function (t) {
          this.updateHex(t);
          return this.sign();
        };
        this.verify = function (t) {
          this.sHashHex = this.md.digest();
          if (this.pubKey === undefined && this.ecpubhex !== undefined && this.eccurvename !== undefined && f.crypto.ECDSA !== undefined) {
            this.pubKey = new f.crypto.ECDSA({
              curve: this.eccurvename,
              pub: this.ecpubhex
            });
          }
          if (this.pubKey instanceof t5 && this.pubkeyAlgName === "rsaandmgf1") {
            return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
          }
          if (this.pubKey instanceof t5 && this.pubkeyAlgName === "rsa" || f.crypto.ECDSA !== undefined && this.pubKey instanceof f.crypto.ECDSA || f.crypto.DSA !== undefined && this.pubKey instanceof f.crypto.DSA) {
            return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
          }
          throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
        };
      }
    };
    this.init = function (t, e) {
      throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
    };
    this.updateString = function (t) {
      throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
    };
    this.updateHex = function (t) {
      throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
    };
    this.sign = function () {
      throw "sign() not supported for this alg:prov=" + this.algProvName;
    };
    this.signString = function (t) {
      throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
    };
    this.signHex = function (t) {
      throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
    };
    this.verify = function (t) {
      throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
    };
    this.initParams = t;
    if (t !== undefined && (t.alg !== undefined && (this.algName = t.alg, t.prov === undefined ? this.provName = f.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov, this.algProvName = this.algName + ":" + this.provName, this.setAlgAndProvider(this.algName, this.provName), this._setAlgNames()), t.psssaltlen !== undefined && (this.pssSaltLen = t.psssaltlen), t.prvkeypem !== undefined)) {
      if (t.prvkeypas !== undefined) {
        throw "both prvkeypem and prvkeypas parameters not supported";
      }
      try {
        var e = eR.getKey(t.prvkeypem);
        this.init(e);
      } catch (t) {
        throw "fatal error to load pem private key: " + t;
      }
    }
  };
  f.crypto.Cipher = function (t) {};
  f.crypto.Cipher.encrypt = function (t, e, r, i) {
    if (eI(i, "enclag") != undefined) {
      r = i.encalg;
    }
    if (typeof r == "string" && r.substr(-4) == "-CBC") {
      var s;
      var n = e;
      if (eI(i, "key") != undefined) {
        n = i.key;
      }
      if (eI(i, "enc") != undefined) {
        hEnc = i.enc;
      }
      var a = m.enc.Hex.parse(n);
      var o = m.enc.Hex.parse(t);
      var h = m.enc.Hex.parse(i.iv);
      if (r == "des-EDE3-CBC") {
        s = m.TripleDES.encrypt(o, a, {
          iv: h
        });
      } else if (r == "aes128-CBC" || r == "aes256-CBC") {
        s = m.AES.encrypt(o, a, {
          iv: h
        });
      } else {
        throw Error("unsupported algorithm: " + r);
      }
      return s + "";
    }
    throw Error("Cipher.encrypt: unsupported key or algorithm");
  };
  f.crypto.Cipher.decrypt = function (t, e, r, i) {
    if (eI(i, "enclag") != undefined) {
      r = i.encalg;
    }
    if (typeof r == "string" && r.substr(-4) == "-CBC") {
      var s;
      var n = e;
      var a = t;
      if (eI(i, "key") != undefined) {
        n = i.key;
      }
      if (eI(i, "enc") != undefined) {
        a = i.enc;
      }
      var o = m.enc.Hex.parse(n);
      var h = m.enc.Hex.parse(a);
      var u = m.enc.Hex.parse(i.iv);
      if (r == "des-EDE3-CBC") {
        s = m.TripleDES.decrypt({
          ciphertext: h
        }, o, {
          iv: u
        });
      } else if (r == "aes128-CBC" || r == "aes256-CBC") {
        s = m.AES.decrypt({
          ciphertext: h
        }, o, {
          iv: u
        });
      } else {
        throw Error("unsupported algorithm: " + r);
      }
      return m.enc.Hex.stringify(s);
    }
    throw Error("Cipher.decrypt: unsupported key or algorithm");
  };
  f.crypto.OID = new function () {
    this.oidhex2name = {
      "2a864886f70d010101": "rsaEncryption",
      "2a8648ce3d0201": "ecPublicKey",
      "2a8648ce380401": "dsa",
      "2a8648ce3d030107": "secp256r1",
      "2b8104001f": "secp192k1",
      "2b81040021": "secp224r1",
      "2b8104000a": "secp256k1",
      "2b81040022": "secp384r1",
      "2b81040023": "secp521r1",
      "2a8648ce380403": "SHA1withDSA",
      "608648016503040301": "SHA224withDSA",
      "608648016503040302": "SHA256withDSA"
    };
  }();
  if (f === undefined || !f) {
    f = {};
  }
  if (f.crypto === undefined || !f.crypto) {
    f.crypto = {};
  }
  f.crypto.ECDSA = function (t) {
    var e = Error;
    var r = f.crypto.ECDSA;
    var i = f.crypto.ECParameterDB;
    var s = r.getName;
    var n = t9.getVbyListEx;
    var a = t9.isASN1HEX;
    var o = new t1();
    this.type = "EC";
    this.isPrivate = false;
    this.isPublic = false;
    this.getBigRandom = function (t) {
      return new b(t.bitLength(), o).mod(t.subtract(b.ONE)).add(b.ONE);
    };
    this.setNamedCurve = function (t) {
      this.ecparams = i.getByName(t);
      this.prvKeyHex = null;
      this.pubKeyHex = null;
      this.curveName = t;
    };
    this.setPrivateKeyHex = function (t) {
      this.isPrivate = true;
      this.prvKeyHex = t;
    };
    this.setPublicKeyHex = function (t) {
      this.isPublic = true;
      this.pubKeyHex = t;
    };
    this.getPublicKeyXYHex = function () {
      var t = this.pubKeyHex;
      if (t.substr(0, 2) !== "04") {
        throw "this method supports uncompressed format(04) only";
      }
      var e = this.ecparams.keycharlen;
      if (t.length !== 2 + e * 2) {
        throw "malformed public key hex length";
      }
      var r = {};
      r.x = t.substr(2, e);
      r.y = t.substr(2 + e);
      return r;
    };
    this.getShortNISTPCurveName = function () {
      var t = this.curveName;
      if (t === "secp256r1" || t === "NIST P-256" || t === "P-256" || t === "prime256v1") {
        return "P-256";
      } else if (t === "secp384r1" || t === "NIST P-384" || t === "P-384") {
        return "P-384";
      } else if (t === "secp521r1" || t === "NIST P-521" || t === "P-521") {
        return "P-521";
      } else {
        return null;
      }
    };
    this.generateKeyPairHex = function () {
      var t = this.ecparams.n;
      var e = this.getBigRandom(t);
      var r = this.ecparams.keycharlen;
      var i = ("0000000000" + e.toString(16)).slice(-r);
      this.setPrivateKeyHex(i);
      return {
        ecprvhex: i,
        ecpubhex: this.generatePublicKeyHex()
      };
    };
    this.generatePublicKeyHex = function () {
      var t = new b(this.prvKeyHex, 16);
      var e = this.ecparams.G.multiply(t);
      var r = e.getX().toBigInteger();
      var i = e.getY().toBigInteger();
      var s = this.ecparams.keycharlen;
      var n = "04" + ("0000000000" + r.toString(16)).slice(-s) + ("0000000000" + i.toString(16)).slice(-s);
      this.setPublicKeyHex(n);
      return n;
    };
    this.signWithMessageHash = function (t) {
      return this.signHex(t, this.prvKeyHex);
    };
    this.signHex = function (t, e) {
      var i = new b(e, 16);
      var s = this.ecparams.n;
      var n = new b(t.substring(0, this.ecparams.keycharlen), 16);
      do {
        var a = this.getBigRandom(s);
        var o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(s);
      } while (o.compareTo(b.ZERO) <= 0);
      var h = a.modInverse(s).multiply(n.add(i.multiply(o))).mod(s);
      return r.biRSSigToASN1Sig(o, h);
    };
    this.sign = function (t, e) {
      var r = this.ecparams.n;
      var i = b.fromByteArrayUnsigned(t);
      do {
        var s = this.getBigRandom(r);
        var n = this.ecparams.G.multiply(s).getX().toBigInteger().mod(r);
      } while (n.compareTo(b.ZERO) <= 0);
      var a = s.modInverse(r).multiply(i.add(e.multiply(n))).mod(r);
      return this.serializeSig(n, a);
    };
    this.verifyWithMessageHash = function (t, e) {
      return this.verifyHex(t, e, this.pubKeyHex);
    };
    this.verifyHex = function (t, e, i) {
      try {
        var s;
        var n;
        var a = r.parseSigHex(e);
        s = a.r;
        n = a.s;
        var o = t8.decodeFromHex(this.ecparams.curve, i);
        var h = new b(t.substring(0, this.ecparams.keycharlen), 16);
        return this.verifyRaw(h, s, n, o);
      } catch (t) {
        return false;
      }
    };
    this.verify = function (t, e, r) {
      if (Bitcoin.Util.isArray(e)) {
        var i;
        var s;
        var n;
        var a = this.parseSig(e);
        i = a.r;
        s = a.s;
      } else if (typeof e == "object" && e.r && e.s) {
        i = e.r;
        s = e.s;
      } else {
        throw "Invalid value for signature";
      }
      if (r instanceof t8) {
        n = r;
      } else if (Bitcoin.Util.isArray(r)) {
        n = t8.decodeFrom(this.ecparams.curve, r);
      } else {
        throw "Invalid format for pubkey value, must be byte array or ECPointFp";
      }
      var o = b.fromByteArrayUnsigned(t);
      return this.verifyRaw(o, i, s, n);
    };
    this.verifyRaw = function (t, e, r, i) {
      var s = this.ecparams.n;
      var n = this.ecparams.G;
      if (e.compareTo(b.ONE) < 0 || e.compareTo(s) >= 0 || r.compareTo(b.ONE) < 0 || r.compareTo(s) >= 0) {
        return false;
      }
      var a = r.modInverse(s);
      var o = t.multiply(a).mod(s);
      var h = e.multiply(a).mod(s);
      return n.multiply(o).add(i.multiply(h)).getX().toBigInteger().mod(s).equals(e);
    };
    this.serializeSig = function (t, e) {
      var r = t.toByteArraySigned();
      var i = e.toByteArraySigned();
      var s = [];
      s.push(2);
      s.push(r.length);
      (s = s.concat(r)).push(2);
      s.push(i.length);
      (s = s.concat(i)).unshift(s.length);
      s.unshift(48);
      return s;
    };
    this.parseSig = function (t) {
      if (t[0] != 48) {
        throw Error("Signature not a valid DERSequence");
      }
      if (t[e = 2] != 2) {
        throw Error("First element in signature must be a DERInteger");
      }
      var e;
      var r = t.slice(e + 2, e + 2 + t[e + 1]);
      e += 2 + t[e + 1];
      if (t[e] != 2) {
        throw Error("Second element in signature must be a DERInteger");
      }
      var i = t.slice(e + 2, e + 2 + t[e + 1]);
      e += 2 + t[e + 1];
      return {
        r: b.fromByteArrayUnsigned(r),
        s: b.fromByteArrayUnsigned(i)
      };
    };
    this.parseSigCompact = function (t) {
      if (t.length !== 65) {
        throw "Signature has the wrong length";
      }
      var e = t[0] - 27;
      if (e < 0 || e > 7) {
        throw "Invalid signature type";
      }
      var r = this.ecparams.n;
      return {
        r: b.fromByteArrayUnsigned(t.slice(1, 33)).mod(r),
        s: b.fromByteArrayUnsigned(t.slice(33, 65)).mod(r),
        i: e
      };
    };
    this.readPKCS5PrvKeyHex = function (t) {
      var e;
      var r;
      var i;
      if (a(t) === false) {
        throw Error("not ASN.1 hex string");
      }
      try {
        e = n(t, 0, ["[0]", 0], "06");
        r = n(t, 0, [1], "04");
        try {
          i = n(t, 0, ["[1]", 0], "03");
        } catch (t) {}
      } catch (t) {
        throw Error("malformed PKCS#1/5 plain ECC private key");
      }
      this.curveName = s(e);
      if (this.curveName === undefined) {
        throw "unsupported curve name";
      }
      this.setNamedCurve(this.curveName);
      this.setPublicKeyHex(i);
      this.setPrivateKeyHex(r);
      this.isPublic = false;
    };
    this.readPKCS8PrvKeyHex = function (t) {
      var r;
      var i;
      var o;
      if (a(t) === false) {
        throw new e("not ASN.1 hex string");
      }
      try {
        n(t, 0, [1, 0], "06");
        r = n(t, 0, [1, 1], "06");
        i = n(t, 0, [2, 0, 1], "04");
        try {
          o = n(t, 0, [2, 0, "[1]", 0], "03");
        } catch (t) {}
      } catch (t) {
        throw new e("malformed PKCS#8 plain ECC private key");
      }
      this.curveName = s(r);
      if (this.curveName === undefined) {
        throw new e("unsupported curve name");
      }
      this.setNamedCurve(this.curveName);
      this.setPublicKeyHex(o);
      this.setPrivateKeyHex(i);
      this.isPublic = false;
    };
    this.readPKCS8PubKeyHex = function (t) {
      var r;
      var i;
      if (a(t) === false) {
        throw new e("not ASN.1 hex string");
      }
      try {
        n(t, 0, [0, 0], "06");
        r = n(t, 0, [0, 1], "06");
        i = n(t, 0, [1], "03");
      } catch (t) {
        throw new e("malformed PKCS#8 ECC public key");
      }
      this.curveName = s(r);
      if (this.curveName === null) {
        throw new e("unsupported curve name");
      }
      this.setNamedCurve(this.curveName);
      this.setPublicKeyHex(i);
    };
    this.readCertPubKeyHex = function (t, r) {
      var i;
      var o;
      if (a(t) === false) {
        throw new e("not ASN.1 hex string");
      }
      try {
        i = n(t, 0, [0, 5, 0, 1], "06");
        o = n(t, 0, [0, 5, 1], "03");
      } catch (t) {
        throw new e("malformed X.509 certificate ECC public key");
      }
      this.curveName = s(i);
      if (this.curveName === null) {
        throw new e("unsupported curve name");
      }
      this.setNamedCurve(this.curveName);
      this.setPublicKeyHex(o);
    };
    if (t !== undefined && t.curve !== undefined) {
      this.curveName = t.curve;
    }
    if (this.curveName === undefined) {
      this.curveName = "secp256r1";
    }
    this.setNamedCurve(this.curveName);
    if (t !== undefined) {
      if (t.prv !== undefined) {
        this.setPrivateKeyHex(t.prv);
      }
      if (t.pub !== undefined) {
        this.setPublicKeyHex(t.pub);
      }
    }
  };
  f.crypto.ECDSA.parseSigHex = function (t) {
    var e = f.crypto.ECDSA.parseSigHexInHexRS(t);
    return {
      r: new b(e.r, 16),
      s: new b(e.s, 16)
    };
  };
  f.crypto.ECDSA.parseSigHexInHexRS = function (t) {
    var e = t9.getChildIdx;
    var r = t9.getV;
    t9.checkStrictDER(t, 0);
    if (t.substr(0, 2) != "30") {
      throw Error("signature is not a ASN.1 sequence");
    }
    var i = e(t, 0);
    if (i.length != 2) {
      throw Error("signature shall have two elements");
    }
    var s = i[0];
    var n = i[1];
    if (t.substr(s, 2) != "02") {
      throw Error("1st item not ASN.1 integer");
    }
    if (t.substr(n, 2) != "02") {
      throw Error("2nd item not ASN.1 integer");
    }
    return {
      r: r(t, s),
      s: r(t, n)
    };
  };
  f.crypto.ECDSA.asn1SigToConcatSig = function (t) {
    var e = f.crypto.ECDSA.parseSigHexInHexRS(t);
    var r = e.r;
    var i = e.s;
    if (r.length >= 130 && r.length <= 134) {
      if (r.length % 2 != 0) {
        throw Error("unknown ECDSA sig r length error");
      }
      if (i.length % 2 != 0) {
        throw Error("unknown ECDSA sig s length error");
      }
      if (r.substr(0, 2) == "00") {
        r = r.substr(2);
      }
      if (i.substr(0, 2) == "00") {
        i = i.substr(2);
      }
      var s = Math.max(r.length, i.length);
      return (r = ("000000" + r).slice(-s)) + (i = ("000000" + i).slice(-s));
    }
    if (r.substr(0, 2) == "00" && r.length % 32 == 2) {
      r = r.substr(2);
    }
    if (i.substr(0, 2) == "00" && i.length % 32 == 2) {
      i = i.substr(2);
    }
    if (r.length % 32 == 30) {
      r = "00" + r;
    }
    if (i.length % 32 == 30) {
      i = "00" + i;
    }
    if (r.length % 32 != 0) {
      throw Error("unknown ECDSA sig r length error");
    }
    if (i.length % 32 != 0) {
      throw Error("unknown ECDSA sig s length error");
    }
    return r + i;
  };
  f.crypto.ECDSA.concatSigToASN1Sig = function (t) {
    if (t.length % 4 != 0) {
      throw Error("unknown ECDSA concatinated r-s sig length error");
    }
    var e = t.substr(0, t.length / 2);
    var r = t.substr(t.length / 2);
    return f.crypto.ECDSA.hexRSSigToASN1Sig(e, r);
  };
  f.crypto.ECDSA.hexRSSigToASN1Sig = function (t, e) {
    var r = new b(t, 16);
    var i = new b(e, 16);
    return f.crypto.ECDSA.biRSSigToASN1Sig(r, i);
  };
  f.crypto.ECDSA.biRSSigToASN1Sig = function (t, e) {
    var r = f.asn1;
    var i = new r.DERInteger({
      bigint: t
    });
    var s = new r.DERInteger({
      bigint: e
    });
    return new r.DERSequence({
      array: [i, s]
    }).tohex();
  };
  f.crypto.ECDSA.getName = function (t) {
    if (t === "2b8104001f") {
      return "secp192k1";
    } else if (t === "2a8648ce3d030107") {
      return "secp256r1";
    } else if (t === "2b8104000a") {
      return "secp256k1";
    } else if (t === "2b81040021") {
      return "secp224r1";
    } else if (t === "2b81040022") {
      return "secp384r1";
    } else if (t === "2b81040023") {
      return "secp521r1";
    } else if ("|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t) !== -1) {
      return "secp256r1";
    } else if ("|secp256k1|".indexOf(t) !== -1) {
      return "secp256k1";
    } else if ("|secp224r1|NIST P-224|P-224|".indexOf(t) !== -1) {
      return "secp224r1";
    } else if ("|secp384r1|NIST P-384|P-384|".indexOf(t) !== -1) {
      return "secp384r1";
    } else if ("|secp521r1|NIST P-521|P-521|".indexOf(t) !== -1) {
      return "secp521r1";
    } else {
      return null;
    }
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.crypto === undefined || !f.crypto) {
    f.crypto = {};
  }
  f.crypto.ECParameterDB = new function () {
    var t = {};
    var e = {};
    function r(t) {
      return new b(t, 16);
    }
    this.getByName = function (r) {
      var i = r;
      if (e[i] !== undefined) {
        i = e[r];
      }
      if (t[i] !== undefined) {
        return t[i];
      }
      throw "unregistered EC curve name: " + i;
    };
    this.regist = function (i, s, n, a, o, h, u, c, l, f, d, p) {
      t[i] = {};
      var g = r(n);
      var v = r(a);
      var x = r(o);
      var m = r(h);
      var y = r(u);
      var S = new t3(g, v, x);
      var E = S.decodePointHex("04" + c + l);
      t[i].name = i;
      t[i].keylen = s;
      t[i].keycharlen = Math.ceil(s / 8) * 2;
      t[i].curve = S;
      t[i].G = E;
      t[i].n = m;
      t[i].h = y;
      t[i].oid = d;
      t[i].info = p;
      for (var b = 0; b < f.length; b++) {
        e[f[b]] = i;
      }
    };
  }();
  f.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field");
  f.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field");
  f.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field");
  f.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []);
  f.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []);
  f.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []);
  f.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []);
  f.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]);
  f.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]);
  f.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);
  if (f === undefined || !f) {
    f = {};
  }
  if (f.crypto === undefined || !f.crypto) {
    f.crypto = {};
  }
  f.crypto.DSA = function () {
    t9.getVbyList;
    var t = t9.getVbyListEx;
    var e = t9.isASN1HEX;
    this.p = null;
    this.q = null;
    this.g = null;
    this.y = null;
    this.x = null;
    this.type = "DSA";
    this.isPrivate = false;
    this.isPublic = false;
    this.setPrivate = function (t, e, r, i, s) {
      this.isPrivate = true;
      this.p = t;
      this.q = e;
      this.g = r;
      this.y = i;
      this.x = s;
    };
    this.setPrivateHex = function (t, e, r, i, s) {
      var n;
      var a;
      var o;
      var h;
      var u;
      n = new b(t, 16);
      a = new b(e, 16);
      o = new b(r, 16);
      h = typeof i == "string" && i.length > 1 ? new b(i, 16) : null;
      u = new b(s, 16);
      this.setPrivate(n, a, o, h, u);
    };
    this.setPublic = function (t, e, r, i) {
      this.isPublic = true;
      this.p = t;
      this.q = e;
      this.g = r;
      this.y = i;
      this.x = null;
    };
    this.setPublicHex = function (t, e, r, i) {
      var s;
      var n;
      var a;
      var o;
      s = new b(t, 16);
      n = new b(e, 16);
      a = new b(r, 16);
      o = new b(i, 16);
      this.setPublic(s, n, a, o);
    };
    this.signWithMessageHash = function (t) {
      var e = this.p;
      var r = this.q;
      var i = this.g;
      this.y;
      var s = this.x;
      var n = f.crypto.Util.getRandomBigIntegerMinToMax(b.ONE.add(b.ONE), r.subtract(b.ONE));
      var a = new b(t.substr(0, r.bitLength() / 4), 16);
      var o = i.modPow(n, e).mod(r);
      var h = n.modInverse(r).multiply(a.add(s.multiply(o))).mod(r);
      return f.asn1.ASN1Util.jsonToASN1HEX({
        seq: [{
          int: {
            bigint: o
          }
        }, {
          int: {
            bigint: h
          }
        }]
      });
    };
    this.verifyWithMessageHash = function (t, e) {
      var r = this.p;
      var i = this.q;
      var s = this.g;
      var n = this.y;
      var a = this.parseASN1Signature(e);
      var o = a[0];
      var h = a[1];
      var u = new b(t.substr(0, i.bitLength() / 4), 16);
      if (b.ZERO.compareTo(o) > 0 || o.compareTo(i) > 0 || b.ZERO.compareTo(h) >= 0 || h.compareTo(i) > 0) {
        throw "invalid DSA signature";
      }
      var c = h.modInverse(i);
      var l = u.multiply(c).mod(i);
      var f = o.multiply(c).mod(i);
      return s.modPow(l, r).multiply(n.modPow(f, r)).mod(r).mod(i).compareTo(o) == 0;
    };
    this.parseASN1Signature = function (e) {
      try {
        var r = new b(t(e, 0, [0], "02"), 16);
        var i = new b(t(e, 0, [1], "02"), 16);
        return [r, i];
      } catch (t) {
        throw Error("malformed ASN.1 DSA signature");
      }
    };
    this.readPKCS5PrvKeyHex = function (r) {
      var i;
      var s;
      var n;
      var a;
      var o;
      if (e(r) === false) {
        throw Error("not ASN.1 hex string");
      }
      try {
        i = t(r, 0, [1], "02");
        s = t(r, 0, [2], "02");
        n = t(r, 0, [3], "02");
        a = t(r, 0, [4], "02");
        o = t(r, 0, [5], "02");
      } catch (t) {
        throw Error("malformed PKCS#1/5 plain DSA private key");
      }
      this.setPrivateHex(i, s, n, a, o);
    };
    this.readPKCS8PrvKeyHex = function (r) {
      var i;
      var s;
      var n;
      var a;
      if (e(r) === false) {
        throw Error("not ASN.1 hex string");
      }
      try {
        i = t(r, 0, [1, 1, 0], "02");
        s = t(r, 0, [1, 1, 1], "02");
        n = t(r, 0, [1, 1, 2], "02");
        a = t(r, 0, [2, 0], "02");
      } catch (t) {
        throw Error("malformed PKCS#8 plain DSA private key");
      }
      this.setPrivateHex(i, s, n, null, a);
    };
    this.readPKCS8PubKeyHex = function (r) {
      var i;
      var s;
      var n;
      var a;
      if (e(r) === false) {
        throw Error("not ASN.1 hex string");
      }
      try {
        i = t(r, 0, [0, 1, 0], "02");
        s = t(r, 0, [0, 1, 1], "02");
        n = t(r, 0, [0, 1, 2], "02");
        a = t(r, 0, [1, 0], "02");
      } catch (t) {
        throw Error("malformed PKCS#8 DSA public key");
      }
      this.setPublicHex(i, s, n, a);
    };
    this.readCertPubKeyHex = function (r, i) {
      var s;
      var n;
      var a;
      var o;
      if (e(r) === false) {
        throw Error("not ASN.1 hex string");
      }
      try {
        s = t(r, 0, [0, 5, 0, 1, 0], "02");
        n = t(r, 0, [0, 5, 0, 1, 1], "02");
        a = t(r, 0, [0, 5, 0, 1, 2], "02");
        o = t(r, 0, [0, 5, 1, 0], "02");
      } catch (t) {
        throw Error("malformed X.509 certificate DSA public key");
      }
      this.setPublicHex(s, n, a, o);
    };
  };
  i = function (t, e, r) {
    return s(m.AES, t, e, r);
  };
  s = function (t, e, r, i) {
    var s = m.enc.Hex.parse(e);
    var n = m.enc.Hex.parse(r);
    var a = m.enc.Hex.parse(i);
    var o = {
      key: n,
      iv: a,
      ciphertext: s
    };
    var h = t.decrypt(o, n, {
      iv: a
    });
    return m.enc.Hex.stringify(h);
  };
  n = function (t, e, r) {
    return a(m.AES, t, e, r);
  };
  a = function (t, e, r, i) {
    var s = m.enc.Hex.parse(e);
    var n = m.enc.Hex.parse(r);
    var a = m.enc.Hex.parse(i);
    var o = t.encrypt(s, n, {
      iv: a
    });
    var h = m.enc.Hex.parse(o.toString());
    return m.enc.Base64.stringify(h);
  };
  o = {
    "AES-256-CBC": {
      proc: i,
      eproc: n,
      keylen: 32,
      ivlen: 16
    },
    "AES-192-CBC": {
      proc: i,
      eproc: n,
      keylen: 24,
      ivlen: 16
    },
    "AES-128-CBC": {
      proc: i,
      eproc: n,
      keylen: 16,
      ivlen: 16
    },
    "DES-EDE3-CBC": {
      proc: function (t, e, r) {
        return s(m.TripleDES, t, e, r);
      },
      eproc: function (t, e, r) {
        return a(m.TripleDES, t, e, r);
      },
      keylen: 24,
      ivlen: 8
    },
    "DES-CBC": {
      proc: function (t, e, r) {
        return s(m.DES, t, e, r);
      },
      eproc: function (t, e, r) {
        return a(m.DES, t, e, r);
      },
      keylen: 8,
      ivlen: 8
    }
  };
  h = function (t) {
    var e = m.lib.WordArray.random(t);
    return m.enc.Hex.stringify(e);
  };
  u = function (t) {
    var e = {};
    var r = t.match(RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
    if (r) {
      e.cipher = r[1];
      e.ivsalt = r[2];
    }
    var i = t.match(RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
    if (i) {
      e.type = i[1];
    }
    var s = -1;
    var n = 0;
    if (t.indexOf("\r\n\r\n") != -1) {
      s = t.indexOf("\r\n\r\n");
      n = 2;
    }
    if (t.indexOf("\n\n") != -1) {
      s = t.indexOf("\n\n");
      n = 1;
    }
    var a = t.indexOf("-----END");
    if (s != -1 && a != -1) {
      var o = t.substring(s + n * 2, a - n);
      o = o.replace(/\s+/g, "");
      e.data = o;
    }
    return e;
  };
  c = function (t, e, r) {
    var i = r.substring(0, 16);
    var s = m.enc.Hex.parse(i);
    var n = m.enc.Utf8.parse(e);
    var a = o[t].keylen + o[t].ivlen;
    var h = "";
    var u = null;
    while (true) {
      var c = m.algo.MD5.create();
      if (u != null) {
        c.update(u);
      }
      c.update(n);
      c.update(s);
      u = c.finalize();
      if ((h += m.enc.Hex.stringify(u)).length >= a * 2) {
        break;
      }
    }
    var l = {};
    l.keyhex = h.substr(0, o[t].keylen * 2);
    l.ivhex = h.substr(o[t].keylen * 2, o[t].ivlen * 2);
    return l;
  };
  l = function (t, e, r, i) {
    var s = m.enc.Base64.parse(t);
    var n = m.enc.Hex.stringify(s);
    return o[e].proc(n, r, i);
  };
  var eR = {
    version: "1.0.0",
    parsePKCS5PEM: function (t) {
      return u(t);
    },
    getKeyAndUnusedIvByPasscodeAndIvsalt: function (t, e, r) {
      return c(t, e, r);
    },
    decryptKeyB64: function (t, e, r, i) {
      return l(t, e, r, i);
    },
    getDecryptedKeyHex: function (t, e) {
      var r = u(t);
      r.type;
      var i = r.cipher;
      var s = r.ivsalt;
      var n = r.data;
      var a = c(i, e, s).keyhex;
      return l(n, i, a, s);
    },
    getEncryptedPKCS5PEMFromPrvKeyHex: function (t, e, r, i, s) {
      var n;
      var a;
      var u = "";
      if (i === undefined || i == null) {
        i = "AES-256-CBC";
      }
      if (o[i] === undefined) {
        throw Error("KEYUTIL unsupported algorithm: " + i);
      }
      if (s === undefined || s == null) {
        s = h(o[i].ivlen).toUpperCase();
      }
      var l = c(i, r, s).keyhex;
      var f = (n = i, a = s, o[n].eproc(e, l, a)).replace(/(.{64})/g, "$1\r\n");
      var u = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
      u += "Proc-Type: 4,ENCRYPTED\r\n";
      u += "DEK-Info: " + i + "," + s + "\r\n";
      u += "\r\n";
      u += f;
      return u += "\r\n-----END " + t + " PRIVATE KEY-----\r\n";
    },
    getEncryptedPKCS8PEM: function (t, e, r) {
      return ec(this.getEncryptedPKCS8Hex(t, e, r), "ENCRYPTED PRIVATE KEY");
    },
    getEncryptedPKCS8Hex: function (t, e, r) {
      (i = r == undefined || r == null ? {} : JSON.parse(JSON.stringify(r))).plain = t;
      this.initPBES2Param(i);
      this.encryptPBES2Param(i, e);
      var i;
      var s = this.generatePBES2ASN1Param(i);
      return f.asn1.ASN1Util.newObject(s).tohex();
    },
    initPBES2Param: function (t) {
      if (eI(t, "encalg") == undefined) {
        t.encalg = "aes256-CBC";
      }
      if (eI(t, "iter") == undefined) {
        t.iter = 2048;
      }
      if (eI(t, "prf") == undefined) {
        t.prf = "hmacWithSHA256";
      }
      if (eI(t, "salt") == undefined) {
        t.salt = m.enc.Hex.stringify(m.lib.WordArray.random(8));
      }
      if (eI(t, "enciv") == undefined) {
        var e;
        if (t.encalg == "des-EDE3-CBC") {
          e = 8;
        }
        if (t.encalg == "aes128-CBC") {
          e = 16;
        }
        if (t.encalg == "aes256-CBC") {
          e = 16;
        }
        t.enciv = m.enc.Hex.stringify(m.lib.WordArray.random(e));
      }
    },
    encryptPBES2Param: function (t, e) {
      var r = eR.getDKFromPBES2Param(t, e);
      try {
        var i = f.crypto.Cipher.encrypt(t.plain, r, t.encalg, {
          iv: t.enciv
        });
      } catch (e) {
        throw Error("encrypt error: " + t.plain + " " + r + " " + t.encalg + " " + t.enciv);
      }
      t.enc = i;
    },
    generatePBES2ASN1Param: function (t) {
      var e = {
        seq: [{
          seq: [{
            oid: "pkcs5PBES2"
          }, {
            seq: [{
              seq: [{
                oid: "pkcs5PBKDF2"
              }, {
                seq: [{
                  octstr: {
                    hex: t.salt
                  }
                }, {
                  int: {
                    hex: eA(new b(String(t.iter), 10))
                  }
                }]
              }]
            }, {
              seq: [{
                oid: t.encalg
              }, {
                octstr: {
                  hex: t.enciv
                }
              }]
            }]
          }]
        }, {
          octstr: {
            hex: t.enc
          }
        }]
      };
      if (t.prf != "hmacWithSHA1") {
        e.seq[0].seq[1].seq[0].seq[1].seq.push({
          seq: [{
            oid: t.prf
          }, {
            null: ""
          }]
        });
      }
      return e;
    },
    parseHexOfEncryptedPKCS8: function (t) {
      var e = t9.getChildIdx;
      var r = t9.getV;
      var i = {};
      var s = e(t, 0);
      if (s.length != 2) {
        throw Error("malformed format: SEQUENCE(0).items != 2: " + s.length);
      }
      i.ciphertext = r(t, s[1]);
      var n = e(t, s[0]);
      if (n.length != 2) {
        throw Error("malformed format: SEQUENCE(0.0).items != 2: " + n.length);
      }
      if (r(t, n[0]) != "2a864886f70d01050d") {
        throw Error("this only supports pkcs5PBES2");
      }
      var a = e(t, n[1]);
      if (n.length != 2) {
        throw Error("malformed format: SEQUENCE(0.0.1).items != 2: " + a.length);
      }
      var o = e(t, a[1]);
      if (o.length != 2) {
        throw Error("malformed format: SEQUENCE(0.0.1.1).items != 2: " + o.length);
      }
      if (r(t, o[0]) != "2a864886f70d0307") {
        throw "this only supports TripleDES";
      }
      i.encryptionSchemeAlg = "TripleDES";
      i.encryptionSchemeIV = r(t, o[1]);
      var h = e(t, a[0]);
      if (h.length != 2) {
        throw Error("malformed format: SEQUENCE(0.0.1.0).items != 2: " + h.length);
      }
      if (r(t, h[0]) != "2a864886f70d01050c") {
        throw Error("this only supports pkcs5PBKDF2");
      }
      var u = e(t, h[1]);
      if (u.length < 2) {
        throw Error("malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + u.length);
      }
      i.pbkdf2Salt = r(t, u[0]);
      var c = r(t, u[1]);
      try {
        i.pbkdf2Iter = parseInt(c, 16);
      } catch (t) {
        throw Error("malformed format pbkdf2Iter: " + c);
      }
      return i;
    },
    getPBKDF2KeyHexFromParam: function (t, e) {
      var r = m.enc.Hex.parse(t.pbkdf2Salt);
      var i = t.pbkdf2Iter;
      var s = m.PBKDF2(e, r, {
        keySize: 6,
        iterations: i
      });
      return m.enc.Hex.stringify(s);
    },
    _getPlainPKCS8HexFromEncryptedPKCS8PEM: function (t, e) {
      var r = el(t, "ENCRYPTED PRIVATE KEY");
      var i = this.parseHexOfEncryptedPKCS8(r);
      var s = eR.getPBKDF2KeyHexFromParam(i, e);
      var n = {};
      n.ciphertext = m.enc.Hex.parse(i.ciphertext);
      var a = m.enc.Hex.parse(s);
      var o = m.enc.Hex.parse(i.encryptionSchemeIV);
      var h = m.TripleDES.decrypt(n, a, {
        iv: o
      });
      return m.enc.Hex.stringify(h);
    },
    parsePBES2: function (t) {
      var e = t9.parse(t);
      if (eI(e, "seq.0.seq.0.oid") != "pkcs5PBES2" || eI(e, "seq.0.seq.1.seq.0.seq.0.oid") != "pkcs5PBKDF2") {
        throw Error("not pkcs5PBES2 and pkcs5PBKDF2 used");
      }
      var r = eI(e, "seq.0.seq.1.seq.0.seq.1.seq");
      if (r == undefined) {
        throw Error("PBKDF2 parameter not found");
      }
      var i = eI(r, "0.octstr.hex");
      var s = eI(r, "1.int.hex");
      var n = eI(r, "2.seq.0.oid", "hmacWithSHA1");
      var a = -1;
      try {
        a = parseInt(s, 16);
      } catch (t) {
        throw Error("iter not proper value");
      }
      var o = eI(e, "seq.0.seq.1.seq.1.seq.0.oid");
      var h = eI(e, "seq.0.seq.1.seq.1.seq.1.octstr.hex");
      var u = eI(e, "seq.1.octstr.hex");
      if (o == undefined || h == undefined || u == undefined) {
        throw Error("encalg, enciv or enc is undefined");
      }
      return {
        salt: i,
        iter: a,
        prf: n,
        encalg: o,
        enciv: h,
        enc: u
      };
    },
    getDKFromPBES2Param: function (t, e) {
      var r = {
        hmacWithSHA1: m.algo.SHA1,
        hmacWithSHA224: m.algo.SHA224,
        hmacWithSHA256: m.algo.SHA256,
        hmacWithSHA384: m.algo.SHA384,
        hmacWithSHA512: m.algo.SHA512
      }[t.prf];
      if (r == undefined) {
        throw Error("unsupported prf");
      }
      var i = {
        "des-EDE3-CBC": 6,
        "aes128-CBC": 4,
        "aes256-CBC": 8
      }[t.encalg];
      if (i == undefined) {
        throw Error("unsupported encalg");
      }
      var s = m.enc.Hex.parse(t.salt);
      var n = t.iter;
      try {
        var a = m.PBKDF2(e, s, {
          keySize: i,
          iterations: n,
          hasher: r
        });
        return m.enc.Hex.stringify(a);
      } catch (r) {
        throw Error("PBKDF2 error: " + r + " " + JSON.stringify(t) + " " + e);
      }
    },
    getPlainHexFromEncryptedPKCS8PEM: function (t, e) {
      if (t.indexOf("BEGIN ENCRYPTED PRIVATE KEY") == -1) {
        throw Error("not Encrypted PKCS#8 PEM string");
      }
      var r;
      var i = el(t);
      try {
        r = eR.parsePBES2(i);
      } catch (t) {
        throw Error("malformed PBES2 format: " + t.message);
      }
      var s = eR.getDKFromPBES2Param(r, e);
      return f.crypto.Cipher.decrypt(r.enc, s, r.encalg, {
        iv: r.enciv
      });
    },
    getKeyFromEncryptedPKCS8PEM: function (t, e) {
      var r = this.getPlainHexFromEncryptedPKCS8PEM(t, e);
      return this.getKeyFromPlainPrivatePKCS8Hex(r);
    },
    parsePlainPrivatePKCS8Hex: function (t) {
      var e = t9.getChildIdx;
      var r = t9.getV;
      var i = {
        algparam: null
      };
      if (t.substr(0, 2) != "30") {
        throw Error("malformed plain PKCS8 private key(code:001)");
      }
      var s = e(t, 0);
      if (s.length < 3) {
        throw Error("malformed plain PKCS8 private key(code:002)");
      }
      if (t.substr(s[1], 2) != "30") {
        throw Error("malformed PKCS8 private key(code:003)");
      }
      var n = e(t, s[1]);
      if (n.length != 2) {
        throw Error("malformed PKCS8 private key(code:004)");
      }
      if (t.substr(n[0], 2) != "06") {
        throw Error("malformed PKCS8 private key(code:005)");
      }
      i.algoid = r(t, n[0]);
      if (t.substr(n[1], 2) == "06") {
        i.algparam = r(t, n[1]);
      }
      if (t.substr(s[2], 2) != "04") {
        throw Error("malformed PKCS8 private key(code:006)");
      }
      i.keyidx = t9.getVidx(t, s[2]);
      return i;
    },
    getKeyFromPlainPrivatePKCS8PEM: function (t) {
      var e = el(t, "PRIVATE KEY");
      return this.getKeyFromPlainPrivatePKCS8Hex(e);
    },
    getKeyFromPlainPrivatePKCS8Hex: function (t) {
      var e;
      var r = this.parsePlainPrivatePKCS8Hex(t);
      if (r.algoid == "2a864886f70d010101") {
        e = new t5();
      } else if (r.algoid == "2a8648ce380401") {
        e = new f.crypto.DSA();
      } else if (r.algoid == "2a8648ce3d0201") {
        e = new f.crypto.ECDSA();
      } else {
        throw Error("unsupported private key algorithm");
      }
      e.readPKCS8PrvKeyHex(t);
      return e;
    },
    _getKeyFromPublicPKCS8Hex: function (t) {
      var e;
      var r = t9.getVbyList(t, 0, [0, 0], "06");
      if (r === "2a864886f70d010101") {
        e = new t5();
      } else if (r === "2a8648ce380401") {
        e = new f.crypto.DSA();
      } else if (r === "2a8648ce3d0201") {
        e = new f.crypto.ECDSA();
      } else {
        throw Error("unsupported PKCS#8 public key hex");
      }
      e.readPKCS8PubKeyHex(t);
      return e;
    },
    parsePublicRawRSAKeyHex: function (t) {
      var e = t9.getChildIdx;
      var r = t9.getV;
      var i = {};
      if (t.substr(0, 2) != "30") {
        throw Error("malformed RSA key(code:001)");
      }
      var s = e(t, 0);
      if (s.length != 2) {
        throw Error("malformed RSA key(code:002)");
      }
      if (t.substr(s[0], 2) != "02") {
        throw Error("malformed RSA key(code:003)");
      }
      i.n = r(t, s[0]);
      if (t.substr(s[1], 2) != "02") {
        throw Error("malformed RSA key(code:004)");
      }
      i.e = r(t, s[1]);
      return i;
    },
    parsePublicPKCS8Hex: function (t) {
      var e = t9.getChildIdx;
      var r = t9.getV;
      var i = {
        algparam: null
      };
      var s = e(t, 0);
      if (s.length != 2) {
        throw Error("outer DERSequence shall have 2 elements: " + s.length);
      }
      var n = s[0];
      if (t.substr(n, 2) != "30") {
        throw Error("malformed PKCS8 public key(code:001)");
      }
      var a = e(t, n);
      if (a.length != 2) {
        throw Error("malformed PKCS8 public key(code:002)");
      }
      if (t.substr(a[0], 2) != "06") {
        throw Error("malformed PKCS8 public key(code:003)");
      }
      i.algoid = r(t, a[0]);
      if (t.substr(a[1], 2) == "06") {
        i.algparam = r(t, a[1]);
      } else if (t.substr(a[1], 2) == "30") {
        i.algparam = {};
        i.algparam.p = t9.getVbyList(t, a[1], [0], "02");
        i.algparam.q = t9.getVbyList(t, a[1], [1], "02");
        i.algparam.g = t9.getVbyList(t, a[1], [2], "02");
      }
      if (t.substr(s[1], 2) != "03") {
        throw Error("malformed PKCS8 public key(code:004)");
      }
      i.key = r(t, s[1]).substr(2);
      return i;
    }
  };
  function eT(t, e) {
    var r = "";
    var i = e / 4 - t.length;
    var s = 0;
    for (; s < i; s++) {
      r += "0";
    }
    return r + t;
  }
  function eB(t, e, r) {
    var i = "";
    var s = 0;
    while (i.length < e) {
      i += eh(r(eu(t + String.fromCharCode.apply(String, [(s & -16777216) >> 24, (s & 16711680) >> 16, (s & 65280) >> 8, s & 255]))));
      s += 1;
    }
    return i;
  }
  function eN(t) {
    for (var e in f.crypto.Util.DIGESTINFOHEAD) {
      var r = f.crypto.Util.DIGESTINFOHEAD[e];
      var i = r.length;
      if (t.substring(0, i) == r) {
        return [e, t.substring(i)];
      }
    }
    return [];
  }
  function eH(t) {
    var e;
    var r = t9.getChildIdx;
    var i = t9.getV;
    t9.dump;
    var s = t9.parse;
    var n = t9.getTLV;
    var a = t9.getVbyList;
    var o = t9.getVbyListEx;
    var h = t9.getTLVbyList;
    var u = t9.getTLVbyListEx;
    var c = t9.getIdxbyList;
    var l = t9.getIdxbyListEx;
    var d = t9.getVidx;
    var p = t9.getInt;
    var g = t9.oidname;
    var v = t9.hextooidstr;
    var x = Error;
    try {
      e = f.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
    } catch (t) {}
    this.HEX2STAG = {
      "0c": "utf8",
      13: "prn",
      16: "ia5",
      "1a": "vis",
      "1e": "bmp"
    };
    this.hex = null;
    this.version = 0;
    this.foffset = 0;
    this.aExtInfo = null;
    this.getVersion = function () {
      if (this.hex === null || this.version !== 0) {
        return this.version;
      }
      var t = h(this.hex, 0, [0, 0]);
      if (t.substr(0, 2) != "a0") {
        this.version = 1;
        this.foffset = -1;
        return 1;
      }
      var e = p(h(t, 0, [0]), 0);
      if (e < 0 || e > 2) {
        throw Error("malformed version field");
      }
      this.version = e + 1;
      return this.version;
    };
    this.getSerialNumberHex = function () {
      return o(this.hex, 0, [0, 0], "02");
    };
    this.getSignatureAlgorithmField = function () {
      var t = u(this.hex, 0, [0, 1]);
      return this.getAlgorithmIdentifierName(t);
    };
    this.getAlgorithmIdentifierName = function (t) {
      for (var r in e) {
        if (t === e[r]) {
          return r;
        }
      }
      return g(o(t, 0, [0], "06"));
    };
    this.getIssuer = function (t, e) {
      return this.getX500Name(this.getIssuerHex(), t, e);
    };
    this.getIssuerHex = function () {
      return h(this.hex, 0, [0, 3 + this.foffset], "30");
    };
    this.getIssuerString = function () {
      return this.getIssuer().str;
    };
    this.getSubject = function (t, e) {
      return this.getX500Name(this.getSubjectHex(), t, e);
    };
    this.getSubjectHex = function () {
      return h(this.hex, 0, [0, 5 + this.foffset], "30");
    };
    this.getSubjectString = function () {
      return this.getSubject().str;
    };
    this.getNotBefore = function () {
      var t = a(this.hex, 0, [0, 4 + this.foffset, 0]);
      return decodeURIComponent(t = t.replace(/(..)/g, "%$1"));
    };
    this.getNotAfter = function () {
      var t = a(this.hex, 0, [0, 4 + this.foffset, 1]);
      return decodeURIComponent(t = t.replace(/(..)/g, "%$1"));
    };
    this.getPublicKeyHex = function () {
      return this.getSPKI();
    };
    this.getSPKI = function () {
      return h(this.hex, 0, [0, 6 + this.foffset], "30");
    };
    this.getSPKIValue = function () {
      var t = this.getSPKI();
      if (t == null) {
        return null;
      } else {
        return a(t, 0, [1], "03", true);
      }
    };
    this.getPublicKeyIdx = function () {
      return c(this.hex, 0, [0, 6 + this.foffset], "30");
    };
    this.getPublicKeyContentIdx = function () {
      var t = this.getPublicKeyIdx();
      return c(this.hex, t, [1, 0], "30");
    };
    this.getPublicKey = function () {
      return eR.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
    };
    this.getSignatureAlgorithmName = function () {
      var t = h(this.hex, 0, [1], "30");
      return this.getAlgorithmIdentifierName(t);
    };
    this.getSignatureValueHex = function () {
      return a(this.hex, 0, [2], "03", true);
    };
    this.verifySignature = function (t) {
      var e = this.getSignatureAlgorithmField();
      var r = this.getSignatureValueHex();
      var i = h(this.hex, 0, [0], "30");
      var s = new f.crypto.Signature({
        alg: e
      });
      s.init(t);
      s.updateHex(i);
      return s.verify(r);
    };
    this.parseExt = function (t) {
      var e;
      var s;
      var n;
      if (t === undefined) {
        n = this.hex;
        if (this.version !== 3) {
          return -1;
        }
        e = c(n, 0, [0, 7, 0], "30");
        s = r(n, e);
      } else {
        var o = c(n = el(t), 0, [0, 3, 0, 0], "06");
        if (i(n, o) != "2a864886f70d01090e") {
          this.aExtInfo = [];
          return;
        }
        e = c(n, 0, [0, 3, 0, 1, 0], "30");
        s = r(n, e);
        this.hex = n;
      }
      this.aExtInfo = [];
      for (var h = 0; h < s.length; h++) {
        var u = {
          critical: false
        };
        var l = r(n, s[h]);
        var f = 0;
        if (l.length === 3) {
          u.critical = true;
          f = 1;
        }
        u.oid = t9.hextooidstr(a(n, s[h], [0], "06"));
        var p = c(n, s[h], [1 + f]);
        u.vidx = d(n, p);
        this.aExtInfo.push(u);
      }
    };
    this.getExtInfo = function (t) {
      var e = this.aExtInfo;
      var r = t;
      if (!t.match(/^[0-9.]+$/)) {
        r = f.asn1.x509.OID.name2oid(t);
      }
      if (r !== "") {
        for (var i = 0; i < e.length; i++) {
          if (e[i].oid === r) {
            return e[i];
          }
        }
      }
    };
    this.getCriticalExtV = function (t, e, r) {
      if (e != undefined) {
        return [e, r];
      }
      var i = this.getExtInfo(t);
      if (i == undefined) {
        return [null, null];
      } else {
        return [n(this.hex, i.vidx), i.critical];
      }
    };
    this.getExtBasicConstraints = function (t, e) {
      if (t === undefined && e === undefined) {
        var r = this.getExtInfo("basicConstraints");
        if (r === undefined) {
          return;
        }
        t = n(this.hex, r.vidx);
        e = r.critical;
      }
      var s = {
        extname: "basicConstraints"
      };
      if (e) {
        s.critical = true;
      }
      if (t === "3000") {
        return s;
      }
      if (t === "30030101ff") {
        s.cA = true;
        return s;
      }
      if (t.substr(0, 12) === "30060101ff02") {
        var a = parseInt(i(t, 10), 16);
        s.cA = true;
        s.pathLen = a;
        return s;
      }
      throw Error("hExtV parse error: " + t);
    };
    this.getExtNameConstraints = function (t, e) {
      var i = this.getCriticalExtV("nameConstraints", t, e);
      t = i[0];
      e = i[1];
      if (t != null) {
        var s = {
          extname: "nameConstraints"
        };
        if (e) {
          s.critical = true;
        }
        var a = r(t, 0);
        var o = 0;
        for (; o < a.length; o++) {
          var h = [];
          var u = r(t, a[o]);
          var c = 0;
          for (; c < u.length; c++) {
            var l = n(t, u[c]);
            var f = this.getGeneralSubtree(l);
            h.push(f);
          }
          var d = t.substr(a[o], 2);
          if (d == "a0") {
            s.permit = h;
          } else if (d == "a1") {
            s.exclude = h;
          }
        }
        return s;
      }
    };
    this.getGeneralSubtree = function (t) {
      var e = r(t, 0);
      var s = e.length;
      if (s < 1 || s > 2) {
        throw Error("wrong num elements");
      }
      var a = this.getGeneralName(n(t, e[0]));
      var o = 1;
      for (; o < s; o++) {
        var h = t.substr(e[o], 2);
        var u = parseInt(i(t, e[o]), 16);
        if (h == "80") {
          a.min = u;
        }
        if (h == "81") {
          a.max = u;
        }
      }
      return a;
    };
    this.getExtKeyUsage = function (t, e) {
      var r = this.getCriticalExtV("keyUsage", t, e);
      t = r[0];
      e = r[1];
      if (t != null) {
        var i = {
          extname: "keyUsage"
        };
        if (e) {
          i.critical = true;
        }
        i.names = this.getExtKeyUsageString(t).split(",");
        return i;
      }
    };
    this.getExtKeyUsageBin = function (t) {
      if (t === undefined) {
        var e = this.getExtInfo("keyUsage");
        if (e === undefined) {
          return "";
        }
        t = n(this.hex, e.vidx);
      }
      if (t.length != 8 && t.length != 10) {
        throw Error("malformed key usage value: " + t);
      }
      var r = "000000000000000" + parseInt(t.substr(6), 16).toString(2);
      if (t.length == 8) {
        r = r.slice(-8);
      }
      if (t.length == 10) {
        r = r.slice(-16);
      }
      if ((r = r.replace(/0+$/, "")) == "") {
        r = "0";
      }
      return r;
    };
    this.getExtKeyUsageString = function (t) {
      var e = this.getExtKeyUsageBin(t);
      var r = [];
      var i = 0;
      for (; i < e.length; i++) {
        if (e.substr(i, 1) == "1") {
          r.push(eH.KEYUSAGE_NAME[i]);
        }
      }
      return r.join(",");
    };
    this.getExtSubjectKeyIdentifier = function (t, e) {
      if (t === undefined && e === undefined) {
        var r = this.getExtInfo("subjectKeyIdentifier");
        if (r === undefined) {
          return;
        }
        t = n(this.hex, r.vidx);
        e = r.critical;
      }
      var s = {
        extname: "subjectKeyIdentifier"
      };
      if (e) {
        s.critical = true;
      }
      var a = i(t, 0);
      s.kid = {
        hex: a
      };
      return s;
    };
    this.getExtAuthorityKeyIdentifier = function (t, e) {
      if (t === undefined && e === undefined) {
        var s = this.getExtInfo("authorityKeyIdentifier");
        if (s === undefined) {
          return;
        }
        t = n(this.hex, s.vidx);
        e = s.critical;
      }
      var a = {
        extname: "authorityKeyIdentifier"
      };
      if (e) {
        a.critical = true;
      }
      var o = r(t, 0);
      var h = 0;
      for (; h < o.length; h++) {
        var u = t.substr(o[h], 2);
        if (u === "80") {
          a.kid = {
            hex: i(t, o[h])
          };
        }
        if (u === "a1") {
          var c = n(t, o[h]);
          var l = this.getGeneralNames(c);
          a.issuer = l[0].dn;
        }
        if (u === "82") {
          a.sn = {
            hex: i(t, o[h])
          };
        }
      }
      return a;
    };
    this.getExtExtKeyUsage = function (t, e) {
      if (t === undefined && e === undefined) {
        var s = this.getExtInfo("extKeyUsage");
        if (s === undefined) {
          return;
        }
        t = n(this.hex, s.vidx);
        e = s.critical;
      }
      var a = {
        extname: "extKeyUsage",
        array: []
      };
      if (e) {
        a.critical = true;
      }
      var o = r(t, 0);
      var h = 0;
      for (; h < o.length; h++) {
        a.array.push(g(i(t, o[h])));
      }
      return a;
    };
    this.getExtExtKeyUsageName = function () {
      var t = this.getExtInfo("extKeyUsage");
      if (t === undefined) {
        return t;
      }
      var e = [];
      var s = n(this.hex, t.vidx);
      if (s === "") {
        return e;
      }
      var a = r(s, 0);
      var o = 0;
      for (; o < a.length; o++) {
        e.push(g(i(s, a[o])));
      }
      return e;
    };
    this.getExtSubjectAltName = function (t, e) {
      if (t === undefined && e === undefined) {
        var r = this.getExtInfo("subjectAltName");
        if (r === undefined) {
          return;
        }
        t = n(this.hex, r.vidx);
        e = r.critical;
      }
      var i = {
        extname: "subjectAltName",
        array: []
      };
      if (e) {
        i.critical = true;
      }
      i.array = this.getGeneralNames(t);
      return i;
    };
    this.getExtIssuerAltName = function (t, e) {
      if (t === undefined && e === undefined) {
        var r = this.getExtInfo("issuerAltName");
        if (r === undefined) {
          return;
        }
        t = n(this.hex, r.vidx);
        e = r.critical;
      }
      var i = {
        extname: "issuerAltName",
        array: []
      };
      if (e) {
        i.critical = true;
      }
      i.array = this.getGeneralNames(t);
      return i;
    };
    this.getGeneralNames = function (t) {
      var e = r(t, 0);
      var i = [];
      var s = 0;
      for (; s < e.length; s++) {
        var a = this.getGeneralName(n(t, e[s]));
        if (a !== undefined) {
          i.push(a);
        }
      }
      return i;
    };
    this.getGeneralName = function (t) {
      var e = t.substr(0, 2);
      var r = i(t, 0);
      var s = eh(r);
      if (e == "81") {
        return {
          rfc822: s
        };
      } else if (e == "82") {
        return {
          dns: s
        };
      } else if (e == "86") {
        return {
          uri: s
        };
      } else if (e == "87") {
        return {
          ip: ev(r)
        };
      } else if (e == "a4") {
        return {
          dn: this.getX500Name(r)
        };
      } else if (e == "a0") {
        return {
          other: this.getOtherName(t)
        };
      } else {
        return undefined;
      }
    };
    this.getExtSubjectAltName2 = function () {
      var t;
      var e;
      var s;
      var a = this.getExtInfo("subjectAltName");
      if (a === undefined) {
        return a;
      }
      var o = [];
      var h = n(this.hex, a.vidx);
      var u = r(h, 0);
      var c = 0;
      for (; c < u.length; c++) {
        s = h.substr(u[c], 2);
        t = i(h, u[c]);
        if (s === "81") {
          o.push(["MAIL", e = eo(t)]);
        }
        if (s === "82") {
          o.push(["DNS", e = eo(t)]);
        }
        if (s === "84") {
          o.push(["DN", e = eH.hex2dn(t, 0)]);
        }
        if (s === "86") {
          o.push(["URI", e = eo(t)]);
        }
        if (s === "87") {
          o.push(["IP", e = ev(t)]);
        }
      }
      return o;
    };
    this.getExtCRLDistributionPoints = function (t, e) {
      if (t === undefined && e === undefined) {
        var i = this.getExtInfo("cRLDistributionPoints");
        if (i === undefined) {
          return;
        }
        t = n(this.hex, i.vidx);
        e = i.critical;
      }
      var s = {
        extname: "cRLDistributionPoints",
        array: []
      };
      if (e) {
        s.critical = true;
      }
      var a = r(t, 0);
      var o = 0;
      for (; o < a.length; o++) {
        var h = n(t, a[o]);
        s.array.push(this.getDistributionPoint(h));
      }
      return s;
    };
    this.getDistributionPoint = function (t) {
      var e = {};
      var i = r(t, 0);
      var s = 0;
      for (; s < i.length; s++) {
        var a = t.substr(i[s], 2);
        var o = n(t, i[s]);
        if (a == "a0") {
          e.dpname = this.getDistributionPointName(o);
        }
      }
      return e;
    };
    this.getDistributionPointName = function (t) {
      var e = {};
      var i = r(t, 0);
      var s = 0;
      for (; s < i.length; s++) {
        var a = t.substr(i[s], 2);
        var o = n(t, i[s]);
        if (a == "a0") {
          e.full = this.getGeneralNames(o);
        }
      }
      return e;
    };
    this.getExtCRLDistributionPointsURI = function () {
      var t = this.getExtCRLDistributionPoints();
      if (t == undefined) {
        return t;
      }
      var e = t.array;
      var r = [];
      var i = 0;
      for (; i < e.length; i++) {
        try {
          if (e[i].dpname.full[0].uri != undefined) {
            r.push(e[i].dpname.full[0].uri);
          }
        } catch (t) {}
      }
      return r;
    };
    this.getExtAIAInfo = function () {
      var t = this.getExtInfo("authorityInfoAccess");
      if (t === undefined) {
        return t;
      }
      var e = {
        ocsp: [],
        caissuer: []
      };
      var i = r(this.hex, t.vidx);
      var s = 0;
      for (; s < i.length; s++) {
        var n = a(this.hex, i[s], [0], "06");
        var o = a(this.hex, i[s], [1], "86");
        if (n === "2b06010505073001") {
          e.ocsp.push(eo(o));
        }
        if (n === "2b06010505073002") {
          e.caissuer.push(eo(o));
        }
      }
      return e;
    };
    this.getExtAuthorityInfoAccess = function (t, e) {
      if (t === undefined && e === undefined) {
        var i = this.getExtInfo("authorityInfoAccess");
        if (i === undefined) {
          return;
        }
        t = n(this.hex, i.vidx);
        e = i.critical;
      }
      var s = {
        extname: "authorityInfoAccess",
        array: []
      };
      if (e) {
        s.critical = true;
      }
      var h = r(t, 0);
      var u = 0;
      for (; u < h.length; u++) {
        var c = o(t, h[u], [0], "06");
        var l = eo(a(t, h[u], [1], "86"));
        if (c == "2b06010505073001") {
          s.array.push({
            ocsp: l
          });
        } else if (c == "2b06010505073002") {
          s.array.push({
            caissuer: l
          });
        } else {
          throw Error("unknown method: " + c);
        }
      }
      return s;
    };
    this.getExtCertificatePolicies = function (t, e) {
      if (t === undefined && e === undefined) {
        var i = this.getExtInfo("certificatePolicies");
        if (i === undefined) {
          return;
        }
        t = n(this.hex, i.vidx);
        e = i.critical;
      }
      var s = {
        extname: "certificatePolicies",
        array: []
      };
      if (e) {
        s.critical = true;
      }
      var a = r(t, 0);
      var o = 0;
      for (; o < a.length; o++) {
        var h = n(t, a[o]);
        var u = this.getPolicyInformation(h);
        s.array.push(u);
      }
      return s;
    };
    this.getPolicyInformation = function (t) {
      var e = {};
      var i = a(t, 0, [0], "06");
      e.policyoid = g(i);
      var s = l(t, 0, [1], "30");
      if (s != -1) {
        e.array = [];
        var o = r(t, s);
        var h = 0;
        for (; h < o.length; h++) {
          var u = n(t, o[h]);
          var c = this.getPolicyQualifierInfo(u);
          e.array.push(c);
        }
      }
      return e;
    };
    this.getOtherName = function (t) {
      var e = {};
      var i = r(t, 0);
      var n = a(t, i[0], [], "06");
      var o = a(t, i[1], []);
      e.oid = g(n);
      e.value = s(o);
      return e;
    };
    this.getPolicyQualifierInfo = function (t) {
      var e = {};
      var r = a(t, 0, [0], "06");
      if (r === "2b06010505070201") {
        var i = o(t, 0, [1], "16");
        e.cps = eh(i);
      } else if (r === "2b06010505070202") {
        var s = h(t, 0, [1], "30");
        e.unotice = this.getUserNotice(s);
      }
      return e;
    };
    this.getUserNotice = function (t) {
      var e = null;
      try {
        e = t9.parse(t);
        return this._asn1ToUnotice(e);
      } catch (t) {
        return;
      }
    };
    this._asn1ToUnotice = function (t) {
      try {
        var e = {};
        var r = eI(t, "seq");
        var i = 0;
        for (; i < r.length; i++) {
          var s = this._asn1ToNoticeRef(r[i]);
          if (s != undefined) {
            e.noticeref = s;
          }
          var n = this.asn1ToDisplayText(r[i]);
          if (n != undefined) {
            e.exptext = n;
          }
        }
        if (Object.keys(e).length > 0) {
          return e;
        }
        return;
      } catch (t) {
        return;
      }
    };
    this._asn1ToNoticeRef = function (t) {
      try {
        var e = {};
        var r = eI(t, "seq");
        var i = 0;
        for (; i < r.length; i++) {
          var s = this._asn1ToNoticeNum(r[i]);
          if (s != undefined) {
            e.noticenum = s;
          }
          var n = this.asn1ToDisplayText(r[i]);
          if (n != undefined) {
            e.org = n;
          }
        }
        if (Object.keys(e).length > 0) {
          return e;
        }
        return;
      } catch (t) {
        return;
      }
    };
    this._asn1ToNoticeNum = function (t) {
      try {
        var e = eI(t, "seq");
        var r = [];
        var i = 0;
        for (; i < e.length; i++) {
          var s = e[i];
          r.push(parseInt(eI(s, "int.hex"), 16));
        }
        return r;
      } catch (t) {
        return;
      }
    };
    this.getDisplayText = function (t) {
      var e = {};
      e.type = {
        "0c": "utf8",
        16: "ia5",
        "1a": "vis",
        "1e": "bmp"
      }[t.substr(0, 2)];
      e.str = eh(i(t, 0));
      return e;
    };
    this.asn1ToDisplayText = function (t) {
      if (t.utf8str != undefined) {
        return {
          type: "utf8",
          str: t.utf8str.str
        };
      } else if (t.ia5str != undefined) {
        return {
          type: "ia5",
          str: t.ia5str.str
        };
      } else if (t.visstr != undefined) {
        return {
          type: "vis",
          str: t.visstr.str
        };
      } else if (t.bmpstr != undefined) {
        return {
          type: "bmp",
          str: t.bmpstr.str
        };
      } else if (t.prnstr != undefined) {
        return {
          type: "prn",
          str: t.prnstr.str
        };
      } else {
        return undefined;
      }
    };
    this.getExtPolicyMappings = function (t, e) {
      var r = this.getCriticalExtV("policyMappings", t, e);
      t = r[0];
      e = r[1];
      if (t != null) {
        var i = {
          extname: "policyMappings"
        };
        if (e) {
          i.critical = true;
        }
        try {
          var n = s(t).seq;
          var a = [];
          var o = 0;
          for (; o < n.length; o++) {
            var h = n[o].seq;
            a.push([h[0].oid, h[1].oid]);
          }
          i.array = a;
        } catch (t) {
          throw new x("malformed policyMappings");
        }
        return i;
      }
    };
    this.getExtPolicyConstraints = function (t, e) {
      var r = this.getCriticalExtV("policyConstraints", t, e);
      t = r[0];
      e = r[1];
      if (t != null) {
        var i = {
          extname: "policyConstraints"
        };
        if (e) {
          i.critical = true;
        }
        var n = s(t);
        try {
          var a = n.seq;
          var o = 0;
          for (; o < a.length; o++) {
            var h = a[o].tag;
            if (h.explicit == false) {
              if (h.tag == "80") {
                i.reqexp = parseInt(h.hex, 16);
              }
              if (h.tag == "81") {
                i.inhibit = parseInt(h.hex, 16);
              }
            }
          }
        } catch (t) {
          return new x("malformed policyConstraints value");
        }
        return i;
      }
    };
    this.getExtInhibitAnyPolicy = function (t, e) {
      var r = this.getCriticalExtV("inhibitAnyPolicy", t, e);
      t = r[0];
      e = r[1];
      if (t != null) {
        var i = {
          extname: "inhibitAnyPolicy"
        };
        if (e) {
          i.critical = true;
        }
        var s = p(t, 0);
        if (s == -1) {
          return new x("wrong value");
        } else {
          i.skip = s;
          return i;
        }
      }
    };
    this.getExtCRLNumber = function (t, e) {
      var r = {
        extname: "cRLNumber"
      };
      if (e) {
        r.critical = true;
      }
      if (t.substr(0, 2) == "02") {
        r.num = {
          hex: i(t, 0)
        };
        return r;
      }
      throw new x("hExtV parse error: " + t);
    };
    this.getExtCRLReason = function (t, e) {
      var r = {
        extname: "cRLReason"
      };
      if (e) {
        r.critical = true;
      }
      if (t.substr(0, 2) == "0a") {
        r.code = parseInt(i(t, 0), 16);
        return r;
      }
      throw Error("hExtV parse error: " + t);
    };
    this.getExtOcspNonce = function (t, e) {
      var r = {
        extname: "ocspNonce"
      };
      if (e) {
        r.critical = true;
      }
      var s = i(t, 0);
      r.hex = s;
      return r;
    };
    this.getExtOcspNoCheck = function (t, e) {
      var r = {
        extname: "ocspNoCheck"
      };
      if (e) {
        r.critical = true;
      }
      return r;
    };
    this.getExtAdobeTimeStamp = function (t, e) {
      if (t === undefined && e === undefined) {
        var i = this.getExtInfo("adobeTimeStamp");
        if (i === undefined) {
          return;
        }
        t = n(this.hex, i.vidx);
        e = i.critical;
      }
      var s = {
        extname: "adobeTimeStamp"
      };
      if (e) {
        s.critical = true;
      }
      var a = r(t, 0);
      if (a.length > 1) {
        var o = n(t, a[1]);
        var h = this.getGeneralName(o);
        if (h.uri != undefined) {
          s.uri = h.uri;
        }
      }
      if (a.length > 2) {
        var u = n(t, a[2]);
        if (u == "0101ff") {
          s.reqauth = true;
        }
        if (u == "010100") {
          s.reqauth = false;
        }
      }
      return s;
    };
    this.getExtSubjectDirectoryAttributes = function (t, e) {
      if (t === undefined && e === undefined) {
        var r = this.getExtInfo("subjectDirectoryAttributes");
        if (r === undefined) {
          return;
        }
        t = n(this.hex, r.vidx);
        e = r.critical;
      }
      var i = {
        extname: "subjectDirectoryAttributes"
      };
      if (e) {
        i.critical = true;
      }
      try {
        var a = s(t);
        var o = [];
        var h = 0;
        for (; h < a.seq.length; h++) {
          var u = a.seq[h];
          var c = eI(u, "seq.0.oid");
          var l = eI(u, "seq.1.set");
          if (c == undefined || l == undefined) {
            throw "error";
          }
          o.push({
            attr: c,
            array: l
          });
        }
        i.array = o;
        return i;
      } catch (t) {
        throw Error("malformed subjectDirectoryAttributes extension value");
      }
    };
    function m(t) {
      var e = {};
      try {
        var r = t.seq[0].oid;
        var i = f.asn1.x509.OID.name2oid(r);
        e.type = f.asn1.x509.OID.oid2atype(i);
        var s = t.seq[1];
        if (s.utf8str != undefined) {
          e.ds = "utf8";
          e.value = s.utf8str.str;
        } else if (s.numstr != undefined) {
          e.ds = "num";
          e.value = s.numstr.str;
        } else if (s.telstr != undefined) {
          e.ds = "tel";
          e.value = s.telstr.str;
        } else if (s.prnstr != undefined) {
          e.ds = "prn";
          e.value = s.prnstr.str;
        } else if (s.ia5str != undefined) {
          e.ds = "ia5";
          e.value = s.ia5str.str;
        } else if (s.visstr != undefined) {
          e.ds = "vis";
          e.value = s.visstr.str;
        } else if (s.bmpstr != undefined) {
          e.ds = "bmp";
          e.value = s.bmpstr.str;
        } else {
          throw "error";
        }
        return e;
      } catch (t) {
        throw new Erorr("improper ASN.1 parsed AttrTypeAndValue");
      }
    }
    function y(t) {
      try {
        return t.set.map(function (t) {
          return m(t);
        });
      } catch (t) {
        throw Error("improper ASN.1 parsed RDN: " + t);
      }
    }
    function S(t) {
      try {
        return t.seq.map(function (t) {
          return y(t);
        });
      } catch (t) {
        throw Error("improper ASN.1 parsed X500Name: " + t);
      }
    }
    this.getX500NameRule = function (t) {
      var e = null;
      var r = [];
      var i = 0;
      for (; i < t.length; i++) {
        var s = t[i];
        var n = 0;
        for (; n < s.length; n++) {
          r.push(s[n]);
        }
      }
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        var o = a.ds;
        var h = a.value;
        var u = a.type;
        if (o != "prn" && o != "utf8" && o != "ia5") {
          return "mixed";
        }
        if (o == "ia5") {
          if (u != "CN" || !f.lang.String.isMail(h)) {
            return "mixed";
          }
          continue;
        }
        if (u == "C") {
          if (o == "prn") {
            continue;
          }
          return "mixed";
        }
        if (e == null) {
          e = o;
        } else if (e !== o) {
          return "mixed";
        }
      }
      if (e == null) {
        return "prn";
      } else {
        return e;
      }
    };
    this.getAttrTypeAndValue = function (t) {
      return m(s(t));
    };
    this.getRDN = function (t) {
      return y(s(t));
    };
    this.getX500NameArray = function (t) {
      return S(s(t));
    };
    this.getX500Name = function (t, e, r) {
      var i = this.getX500NameArray(t);
      var s = {
        str: this.dnarraytostr(i)
      };
      s.array = i;
      if (r == true) {
        s.hex = t;
      }
      if (e == true) {
        s.canon = this.c14nRDNArray(i);
      }
      return s;
    };
    this.readCertPEM = function (t) {
      this.readCertHex(el(t));
    };
    this.readCertHex = function (t) {
      this.hex = t;
      this.getVersion();
      try {
        c(this.hex, 0, [0, 7], "a3");
        this.parseExt();
      } catch (t) {}
    };
    this.getParam = function (t) {
      var e = {};
      if (t == undefined) {
        t = {};
      }
      e.version = this.getVersion();
      e.serial = {
        hex: this.getSerialNumberHex()
      };
      e.sigalg = this.getSignatureAlgorithmField();
      e.issuer = this.getIssuer(t.dncanon, t.dnhex);
      e.notbefore = this.getNotBefore();
      e.notafter = this.getNotAfter();
      e.subject = this.getSubject(t.dncanon, t.dnhex);
      e.sbjpubkey = ec(this.getPublicKeyHex(), "PUBLIC KEY");
      if (this.aExtInfo != undefined && this.aExtInfo.length > 0) {
        e.ext = this.getExtParamArray();
      }
      e.sighex = this.getSignatureValueHex();
      if (t.tbshex == true) {
        e.tbshex = h(this.hex, 0, [0]);
      }
      if (t.nodnarray == true) {
        delete e.issuer.array;
        delete e.subject.array;
      }
      return e;
    };
    this.getExtParamArray = function (t) {
      if (t == undefined && l(this.hex, 0, [0, "[3]"]) != -1) {
        t = u(this.hex, 0, [0, "[3]", 0], "30");
      }
      var e = [];
      var i = r(t, 0);
      var s = 0;
      for (; s < i.length; s++) {
        var a = n(t, i[s]);
        var o = this.getExtParam(a);
        if (o != null) {
          e.push(o);
        }
      }
      return e;
    };
    this.getExtParam = function (t) {
      var e = r(t, 0).length;
      if (e != 2 && e != 3) {
        throw Error("wrong number elements in Extension: " + e + " " + t);
      }
      var i = v(a(t, 0, [0], "06"));
      var n = false;
      if (e == 3 && h(t, 0, [1]) == "0101ff") {
        n = true;
      }
      var o = h(t, 0, [e - 1, 0]);
      var u = undefined;
      if (i == "2.5.29.14") {
        u = this.getExtSubjectKeyIdentifier(o, n);
      } else if (i == "2.5.29.15") {
        u = this.getExtKeyUsage(o, n);
      } else if (i == "2.5.29.17") {
        u = this.getExtSubjectAltName(o, n);
      } else if (i == "2.5.29.18") {
        u = this.getExtIssuerAltName(o, n);
      } else if (i == "2.5.29.19") {
        u = this.getExtBasicConstraints(o, n);
      } else if (i == "2.5.29.30") {
        u = this.getExtNameConstraints(o, n);
      } else if (i == "2.5.29.31") {
        u = this.getExtCRLDistributionPoints(o, n);
      } else if (i == "2.5.29.32") {
        u = this.getExtCertificatePolicies(o, n);
      } else if (i == "2.5.29.33") {
        u = this.getExtPolicyMappings(o, n);
      } else if (i == "2.5.29.35") {
        u = this.getExtAuthorityKeyIdentifier(o, n);
      } else if (i == "2.5.29.36") {
        u = this.getExtPolicyConstraints(o, n);
      } else if (i == "2.5.29.37") {
        u = this.getExtExtKeyUsage(o, n);
      } else if (i == "2.5.29.54") {
        u = this.getExtInhibitAnyPolicy(o, n);
      } else if (i == "1.3.6.1.5.5.7.1.1") {
        u = this.getExtAuthorityInfoAccess(o, n);
      } else if (i == "2.5.29.20") {
        u = this.getExtCRLNumber(o, n);
      } else if (i == "2.5.29.21") {
        u = this.getExtCRLReason(o, n);
      } else if (i == "2.5.29.9") {
        u = this.getExtSubjectDirectoryAttributes(o, n);
      } else if (i == "1.3.6.1.5.5.7.48.1.2") {
        u = this.getExtOcspNonce(o, n);
      } else if (i == "1.3.6.1.5.5.7.48.1.5") {
        u = this.getExtOcspNoCheck(o, n);
      } else if (i == "1.2.840.113583.1.1.9.1") {
        u = this.getExtAdobeTimeStamp(o, n);
      } else if (eH.EXT_PARSER[i] != undefined) {
        u = eH.EXT_PARSER[i](i, n, o);
      }
      if (u != undefined) {
        return u;
      }
      var c = {
        extname: i,
        extn: o
      };
      try {
        c.extn = s(o);
      } catch (t) {}
      if (n) {
        c.critical = true;
      }
      return c;
    };
    this.findExt = function (t, e) {
      for (var r = 0; r < t.length; r++) {
        if (t[r].extname == e) {
          return t[r];
        }
      }
      return null;
    };
    this.updateExtCDPFullURI = function (t, e) {
      var r = this.findExt(t, "cRLDistributionPoints");
      if (r != null && r.array != undefined) {
        var i = r.array;
        var s = 0;
        for (; s < i.length; s++) {
          if (i[s].dpname != undefined && i[s].dpname.full != undefined) {
            var n = i[s].dpname.full;
            var a = 0;
            for (; a < n.length; a++) {
              var o = n[s];
              if (o.uri != undefined) {
                o.uri = e;
              }
            }
          }
        }
      }
    };
    this.updateExtAIAOCSP = function (t, e) {
      var r = this.findExt(t, "authorityInfoAccess");
      if (r != null && r.array != undefined) {
        var i = r.array;
        var s = 0;
        for (; s < i.length; s++) {
          if (i[s].ocsp != undefined) {
            i[s].ocsp = e;
          }
        }
      }
    };
    this.updateExtAIACAIssuer = function (t, e) {
      var r = this.findExt(t, "authorityInfoAccess");
      if (r != null && r.array != undefined) {
        var i = r.array;
        var s = 0;
        for (; s < i.length; s++) {
          if (i[s].caissuer != undefined) {
            i[s].caissuer = e;
          }
        }
      }
    };
    this.dnarraytostr = function (t) {
      return "/" + t.map(function (t) {
        return t.map(function (t) {
          var e;
          return ((e = t).type + "=" + e.value).replace(/\+/, "\\+");
        }).join("+").replace(/\//, "\\/");
      }).join("/");
    };
    this.setCanonicalizedDN = function (t) {
      var e;
      if (t.str != undefined && t.array == undefined) {
        var r = new f.asn1.x509.X500Name({
          str: t.str
        }).tohex();
        e = this.getX500NameArray(r);
      } else {
        e = t.array;
      }
      if (t.canon == undefined) {
        t.canon = this.c14nRDNArray(e);
      }
    };
    this.c14nRDNArray = function (t) {
      var e = [];
      var r = 0;
      for (; r < t.length; r++) {
        var i = t[r];
        var s = [];
        var n = 0;
        for (; n < i.length; n++) {
          var a = i[n];
          var o = a.value;
          o = (o = (o = (o = o.replace(/^\s*/, "")).replace(/\s*$/, "")).replace(/\s+/g, " ")).toLowerCase();
          s.push(a.type.toLowerCase() + "=" + o);
        }
        e.push(s.join("+"));
      }
      return "/" + e.join("/");
    };
    this.getInfo = function () {
      var t;
      var e;
      var r;
      t = "Basic Fields\n  serial number: " + this.getSerialNumberHex() + "\n" + ("  signature algorithm: " + this.getSignatureAlgorithmField()) + "\n" + ("  issuer: " + this.getIssuerString()) + "\n" + ("  notBefore: " + this.getNotBefore()) + "\n" + ("  notAfter: " + this.getNotAfter()) + "\n" + ("  subject: " + this.getSubjectString()) + "\n  subject public key info: \n" + ("    key algorithm: " + (e = this.getPublicKey()).type + "\n");
      if (e.type === "RSA") {
        t += "    n=" + eF(e.n.toString(16)).substr(0, 16) + "...\n";
        t += "    e=" + eF(e.e.toString(16)) + "\n";
      }
      if ((r = this.aExtInfo) != null) {
        t += "X509v3 Extensions:\n";
        for (var i = 0; i < r.length; i++) {
          var s = r[i];
          var n = f.asn1.x509.OID.oid2name(s.oid);
          if (n === "") {
            n = s.oid;
          }
          var a = "";
          if (s.critical === true) {
            a = "CRITICAL";
          }
          t += "  " + n + " " + a + ":\n";
          if (n === "basicConstraints") {
            var o = this.getExtBasicConstraints();
            if (o.cA === undefined) {
              t += "    {}\n";
            } else {
              t += "    cA=true";
              if (o.pathLen !== undefined) {
                t += ", pathLen=" + o.pathLen;
              }
              t += "\n";
            }
          } else if (n == "policyMappings") {
            t += "    " + this.getExtPolicyMappings().array.map(function (t) {
              return t[0] + ":" + t[1];
            }).join(", ") + "\n";
          } else if (n == "policyConstraints") {
            var h = this.getExtPolicyConstraints();
            t += "    ";
            if (h.reqexp != undefined) {
              t += " reqexp=" + h.reqexp;
            }
            if (h.inhibit != undefined) {
              t += " inhibit=" + h.inhibit;
            }
            t += "\n";
          } else if (n == "inhibitAnyPolicy") {
            var h = this.getExtInhibitAnyPolicy();
            t += "    skip=" + h.skip + "\n";
          } else if (n == "keyUsage") {
            t += "    " + this.getExtKeyUsageString() + "\n";
          } else if (n == "subjectKeyIdentifier") {
            t += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
          } else if (n == "authorityKeyIdentifier") {
            var u = this.getExtAuthorityKeyIdentifier();
            if (u.kid !== undefined) {
              t += "    kid=" + u.kid.hex + "\n";
            }
          } else if (n == "extKeyUsage") {
            t += "    " + this.getExtExtKeyUsage().array.join(", ") + "\n";
          } else if (n == "subjectAltName") {
            t += function (t) {
              var e = "";
              var r = "    ";
              var i = t.array;
              var s = 0;
              for (; s < i.length; s++) {
                var n = i[s];
                if (n.dn != undefined) {
                  e += r + "dn: " + n.dn.str + "\n";
                }
                if (n.ip != undefined) {
                  e += r + "ip: " + n.ip + "\n";
                }
                if (n.rfc822 != undefined) {
                  e += r + "rfc822: " + n.rfc822 + "\n";
                }
                if (n.dns != undefined) {
                  e += r + "dns: " + n.dns + "\n";
                }
                if (n.uri != undefined) {
                  e += r + "uri: " + n.uri + "\n";
                }
                if (n.other != undefined) {
                  e += r + "other: " + n.other.oid + "=" + JSON.stringify(n.other.value).replace(/\"/g, "") + "\n";
                }
              }
              return e.replace(/\n$/, "");
            }(this.getExtSubjectAltName()) + "\n";
          } else if (n == "cRLDistributionPoints") {
            t += function (t) {
              var e = "";
              var r = t.array;
              var i = 0;
              for (; i < r.length; i++) {
                var s = r[i];
                try {
                  if (s.dpname.full[0].uri !== undefined) {
                    e += "    " + s.dpname.full[0].uri + "\n";
                  }
                } catch (t) {}
                try {
                  if (s.dname.full[0].dn.hex !== undefined) {
                    e += "    " + eH.hex2dn(s.dpname.full[0].dn.hex) + "\n";
                  }
                } catch (t) {}
              }
              return e;
            }(this.getExtCRLDistributionPoints());
          } else if (n == "authorityInfoAccess") {
            t += function (t) {
              var e = "";
              var r = t.array;
              var i = 0;
              for (; i < r.length; i++) {
                var s = r[i];
                if (s.caissuer !== undefined) {
                  e += "    caissuer: " + s.caissuer + "\n";
                }
                if (s.ocsp !== undefined) {
                  e += "    ocsp: " + s.ocsp + "\n";
                }
              }
              return e;
            }(this.getExtAuthorityInfoAccess());
          } else if (n == "certificatePolicies") {
            t += function (t) {
              var e = "";
              var r = t.array;
              var i = 0;
              for (; i < r.length; i++) {
                var s = r[i];
                e += "    policy oid: " + s.policyoid + "\n";
                if (s.array !== undefined) {
                  for (var n = 0; n < s.array.length; n++) {
                    var a = s.array[n];
                    if (a.cps !== undefined) {
                      e += "    cps: " + a.cps + "\n";
                    }
                  }
                }
              }
              return e;
            }(this.getExtCertificatePolicies());
          }
        }
      }
      t += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n";
      return t += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n";
    };
    if (typeof t == "string") {
      if (t.indexOf("-----BEGIN") != -1) {
        this.readCertPEM(t);
      } else if (f.lang.String.isHex(t)) {
        this.readCertHex(t);
      }
    }
  }
  eR.getKey = function (t, e, r) {
    var i = t9;
    var s = i.getChildIdx;
    i.getV;
    var n = i.getVbyList;
    var a = f.crypto;
    var o = a.ECDSA;
    var h = a.DSA;
    var u = el;
    if (t instanceof t5 || o !== undefined && t instanceof o || h !== undefined && t instanceof h) {
      return t;
    }
    if (t.curve !== undefined && t.xy !== undefined && t.d === undefined) {
      return new o({
        pub: t.xy,
        curve: t.curve
      });
    }
    if (t.curve !== undefined && t.d !== undefined) {
      return new o({
        prv: t.d,
        curve: t.curve
      });
    }
    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d === undefined) {
      var c = new t5();
      c.setPublic(t.n, t.e);
      return c;
    }
    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p !== undefined && t.q !== undefined && t.dp !== undefined && t.dq !== undefined && t.co !== undefined && t.qi === undefined) {
      var c = new t5();
      c.setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co);
      return c;
    }
    if (t.kty === undefined && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p === undefined) {
      var c = new t5();
      c.setPrivate(t.n, t.e, t.d);
      return c;
    }
    if (t.p !== undefined && t.q !== undefined && t.g !== undefined && t.y !== undefined && t.x === undefined) {
      var c = new h();
      c.setPublic(t.p, t.q, t.g, t.y);
      return c;
    }
    if (t.p !== undefined && t.q !== undefined && t.g !== undefined && t.y !== undefined && t.x !== undefined) {
      var c = new h();
      c.setPrivate(t.p, t.q, t.g, t.y, t.x);
      return c;
    }
    if (t.kty === "RSA" && t.n !== undefined && t.e !== undefined && t.d === undefined) {
      var c = new t5();
      c.setPublic(en(t.n), en(t.e));
      return c;
    }
    if (t.kty === "RSA" && t.n !== undefined && t.e !== undefined && t.d !== undefined && t.p !== undefined && t.q !== undefined && t.dp !== undefined && t.dq !== undefined && t.qi !== undefined) {
      var c = new t5();
      c.setPrivateEx(en(t.n), en(t.e), en(t.d), en(t.p), en(t.q), en(t.dp), en(t.dq), en(t.qi));
      return c;
    }
    if (t.kty === "RSA" && t.n !== undefined && t.e !== undefined && t.d !== undefined) {
      var c = new t5();
      c.setPrivate(en(t.n), en(t.e), en(t.d));
      return c;
    }
    if (t.kty === "EC" && t.crv !== undefined && t.x !== undefined && t.y !== undefined && t.d === undefined) {
      var l = new o({
        curve: t.crv
      });
      var d = l.ecparams.keycharlen;
      var p = ("0000000000" + en(t.x)).slice(-d);
      var g = ("0000000000" + en(t.y)).slice(-d);
      var v = "04" + p + g;
      l.setPublicKeyHex(v);
      return l;
    }
    if (t.kty === "EC" && t.crv !== undefined && t.x !== undefined && t.y !== undefined && t.d !== undefined) {
      var l = new o({
        curve: t.crv
      });
      var d = l.ecparams.keycharlen;
      var p = ("0000000000" + en(t.x)).slice(-d);
      var g = ("0000000000" + en(t.y)).slice(-d);
      var v = "04" + p + g;
      var x = ("0000000000" + en(t.d)).slice(-d);
      l.setPublicKeyHex(v);
      l.setPrivateKeyHex(x);
      return l;
    }
    if (r === "pkcs5prv") {
      var m;
      var c;
      var i = t9;
      if ((m = s(t, 0)).length === 9) {
        (c = new t5()).readPKCS5PrvKeyHex(t);
      } else if (m.length === 6) {
        (c = new h()).readPKCS5PrvKeyHex(t);
      } else if (m.length > 2 && t.substr(m[1], 2) === "04") {
        (c = new o()).readPKCS5PrvKeyHex(t);
      } else {
        throw Error("unsupported PKCS#1/5 hexadecimal key");
      }
      return c;
    }
    if (r === "pkcs8prv") {
      var c = eR.getKeyFromPlainPrivatePKCS8Hex(t);
      return c;
    }
    if (r === "pkcs8pub") {
      return eR._getKeyFromPublicPKCS8Hex(t);
    }
    if (r === "x509pub") {
      return eH.getPublicKeyFromCertHex(t);
    }
    if (t.indexOf("-END CERTIFICATE-", 0) != -1 || t.indexOf("-END X509 CERTIFICATE-", 0) != -1 || t.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1) {
      return eH.getPublicKeyFromCertPEM(t);
    }
    if (t.indexOf("-END PUBLIC KEY-") != -1) {
      var y = el(t, "PUBLIC KEY");
      return eR._getKeyFromPublicPKCS8Hex(y);
    }
    if (t.indexOf("-END RSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") == -1) {
      var S = u(t, "RSA PRIVATE KEY");
      return eR.getKey(S, null, "pkcs5prv");
    }
    if (t.indexOf("-END DSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") == -1) {
      var E = u(t, "DSA PRIVATE KEY");
      var F = n(E, 0, [1], "02");
      var w = n(E, 0, [2], "02");
      var A = n(E, 0, [3], "02");
      var D = n(E, 0, [4], "02");
      var P = n(E, 0, [5], "02");
      var c = new h();
      c.setPrivate(new b(F, 16), new b(w, 16), new b(A, 16), new b(D, 16), new b(P, 16));
      return c;
    }
    if (t.indexOf("-END EC PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") == -1) {
      var S = u(t, "EC PRIVATE KEY");
      return eR.getKey(S, null, "pkcs5prv");
    }
    if (t.indexOf("-END PRIVATE KEY-") != -1) {
      return eR.getKeyFromPlainPrivatePKCS8PEM(t);
    }
    if (t.indexOf("-END RSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) {
      var I = eR.getDecryptedKeyHex(t, e);
      var C = new t5();
      C.readPKCS5PrvKeyHex(I);
      return C;
    }
    if (t.indexOf("-END EC PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) {
      var E = eR.getDecryptedKeyHex(t, e);
      var c = n(E, 0, [1], "04");
      var R = n(E, 0, [2, 0], "06");
      var T = n(E, 0, [3, 0], "03").substr(2);
      var B = "";
      if (f.crypto.OID.oidhex2name[R] !== undefined) {
        B = f.crypto.OID.oidhex2name[R];
      } else {
        throw Error("undefined OID(hex) in KJUR.crypto.OID: " + R);
      }
      var l = new o({
        curve: B
      });
      l.setPublicKeyHex(T);
      l.setPrivateKeyHex(c);
      l.isPublic = false;
      return l;
    }
    if (t.indexOf("-END DSA PRIVATE KEY-") != -1 && t.indexOf("4,ENCRYPTED") != -1) {
      var E = eR.getDecryptedKeyHex(t, e);
      var F = n(E, 0, [1], "02");
      var w = n(E, 0, [2], "02");
      var A = n(E, 0, [3], "02");
      var D = n(E, 0, [4], "02");
      var P = n(E, 0, [5], "02");
      var c = new h();
      c.setPrivate(new b(F, 16), new b(w, 16), new b(A, 16), new b(D, 16), new b(P, 16));
      return c;
    }
    if (t.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1) {
      return eR.getKeyFromEncryptedPKCS8PEM(t, e);
    }
    throw Error("not supported argument");
  };
  eR.generateKeypair = function (t, e) {
    if (t == "RSA") {
      var r = new t5();
      r.generate(e, "10001");
      r.isPrivate = true;
      r.isPublic = true;
      var i = new t5();
      var s = r.n.toString(16);
      var n = r.e.toString(16);
      i.setPublic(s, n);
      i.isPrivate = false;
      i.isPublic = true;
      var a = {
        prvKeyObj: r,
        pubKeyObj: i
      };
      return a;
    }
    if (t == "EC") {
      var o = new f.crypto.ECDSA({
        curve: e
      }).generateKeyPairHex();
      var r = new f.crypto.ECDSA({
        curve: e
      });
      r.setPublicKeyHex(o.ecpubhex);
      r.setPrivateKeyHex(o.ecprvhex);
      r.isPrivate = true;
      r.isPublic = false;
      var i = new f.crypto.ECDSA({
        curve: e
      });
      i.setPublicKeyHex(o.ecpubhex);
      i.isPrivate = false;
      i.isPublic = true;
      var a = {
        prvKeyObj: r,
        pubKeyObj: i
      };
      return a;
    }
    throw Error("unknown algorithm: " + t);
  };
  eR.getPEM = function (t, e, r, i, s, n) {
    var a = f;
    var o = a.asn1;
    var h = o.DERObjectIdentifier;
    var u = o.DERInteger;
    var c = o.ASN1Util.newObject;
    var l = o.x509.SubjectPublicKeyInfo;
    var d = a.crypto;
    var p = d.DSA;
    var g = d.ECDSA;
    function v(t) {
      return c({
        seq: [{
          int: 0
        }, {
          int: {
            bigint: t.n
          }
        }, {
          int: t.e
        }, {
          int: {
            bigint: t.d
          }
        }, {
          int: {
            bigint: t.p
          }
        }, {
          int: {
            bigint: t.q
          }
        }, {
          int: {
            bigint: t.dmp1
          }
        }, {
          int: {
            bigint: t.dmq1
          }
        }, {
          int: {
            bigint: t.coeff
          }
        }]
      });
    }
    function x(t) {
      return c({
        seq: [{
          int: 1
        }, {
          octstr: {
            hex: t.prvKeyHex
          }
        }, {
          tag: ["a0", true, {
            oid: {
              name: t.curveName
            }
          }]
        }, {
          tag: ["a1", true, {
            bitstr: {
              hex: "00" + t.pubKeyHex
            }
          }]
        }]
      });
    }
    function m(t) {
      return c({
        seq: [{
          int: 0
        }, {
          int: {
            bigint: t.p
          }
        }, {
          int: {
            bigint: t.q
          }
        }, {
          int: {
            bigint: t.g
          }
        }, {
          int: {
            bigint: t.y
          }
        }, {
          int: {
            bigint: t.x
          }
        }]
      });
    }
    if ((t5 !== undefined && t instanceof t5 || p !== undefined && t instanceof p || g !== undefined && t instanceof g) && t.isPublic == true && (e === undefined || e == "PKCS8PUB")) {
      var y = new l(t);
      var S = y.tohex();
      return ec(S, "PUBLIC KEY");
    }
    if (e == "PKCS1PRV" && t5 !== undefined && t instanceof t5 && (r === undefined || r == null) && t.isPrivate == true) {
      var y = v(t);
      var S = y.tohex();
      return ec(S, "RSA PRIVATE KEY");
    }
    if (e == "PKCS1PRV" && g !== undefined && t instanceof g && (r === undefined || r == null) && t.isPrivate == true) {
      var E = new h({
        name: t.curveName
      }).tohex();
      var b = x(t).tohex();
      var F = "";
      F += ec(E, "EC PARAMETERS");
      return F += ec(b, "EC PRIVATE KEY");
    }
    if (e == "PKCS1PRV" && p !== undefined && t instanceof p && (r === undefined || r == null) && t.isPrivate == true) {
      var y = m(t);
      var S = y.tohex();
      return ec(S, "DSA PRIVATE KEY");
    }
    if (e == "PKCS5PRV" && t5 !== undefined && t instanceof t5 && r !== undefined && r != null && t.isPrivate == true) {
      var y = v(t);
      var S = y.tohex();
      if (i === undefined) {
        i = "DES-EDE3-CBC";
      }
      return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", S, r, i, n);
    }
    if (e == "PKCS5PRV" && g !== undefined && t instanceof g && r !== undefined && r != null && t.isPrivate == true) {
      var y = x(t);
      var S = y.tohex();
      if (i === undefined) {
        i = "DES-EDE3-CBC";
      }
      return this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", S, r, i, n);
    }
    if (e == "PKCS5PRV" && p !== undefined && t instanceof p && r !== undefined && r != null && t.isPrivate == true) {
      var y = m(t);
      var S = y.tohex();
      if (i === undefined) {
        i = "DES-EDE3-CBC";
      }
      return this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", S, r, i, n);
    }
    function w(t, e) {
      if (typeof e == "string") {
        return eR.getEncryptedPKCS8PEM(t, e);
      }
      if (typeof e == "object" && eI(e, "passcode") != undefined) {
        var r = JSON.parse(JSON.stringify(e));
        var i = r.passcode;
        delete r.passcode;
        return eR.getEncryptedPKCS8PEM(t, i, r);
      }
    }
    if (e == "PKCS8PRV" && t5 != undefined && t instanceof t5 && t.isPrivate == true) {
      var A = v(t);
      var D = A.tohex();
      var y = c({
        seq: [{
          int: 0
        }, {
          seq: [{
            oid: {
              name: "rsaEncryption"
            }
          }, {
            null: true
          }]
        }, {
          octstr: {
            hex: D
          }
        }]
      });
      var S = y.tohex();
      if (r === undefined || r == null) {
        return ec(S, "PRIVATE KEY");
      } else {
        return w(S, r);
      }
    }
    if (e == "PKCS8PRV" && g !== undefined && t instanceof g && t.isPrivate == true) {
      var P = {
        seq: [{
          int: 1
        }, {
          octstr: {
            hex: t.prvKeyHex
          }
        }]
      };
      if (typeof t.pubKeyHex == "string") {
        P.seq.push({
          tag: ["a1", true, {
            bitstr: {
              hex: "00" + t.pubKeyHex
            }
          }]
        });
      }
      var A = new c(P);
      var D = A.tohex();
      var y = c({
        seq: [{
          int: 0
        }, {
          seq: [{
            oid: {
              name: "ecPublicKey"
            }
          }, {
            oid: {
              name: t.curveName
            }
          }]
        }, {
          octstr: {
            hex: D
          }
        }]
      });
      var S = y.tohex();
      if (r === undefined || r == null) {
        return ec(S, "PRIVATE KEY");
      } else {
        return w(S, r);
      }
    }
    if (e == "PKCS8PRV" && p !== undefined && t instanceof p && t.isPrivate == true) {
      var A = new u({
        bigint: t.x
      });
      var D = A.tohex();
      var y = c({
        seq: [{
          int: 0
        }, {
          seq: [{
            oid: {
              name: "dsa"
            }
          }, {
            seq: [{
              int: {
                bigint: t.p
              }
            }, {
              int: {
                bigint: t.q
              }
            }, {
              int: {
                bigint: t.g
              }
            }]
          }]
        }, {
          octstr: {
            hex: D
          }
        }]
      });
      var S = y.tohex();
      if (r === undefined || r == null) {
        return ec(S, "PRIVATE KEY");
      } else {
        return w(S, r);
      }
    }
    throw Error("unsupported object nor format");
  };
  eR.getKeyFromCSRPEM = function (t) {
    var e = el(t, "CERTIFICATE REQUEST");
    return eR.getKeyFromCSRHex(e);
  };
  eR.getKeyFromCSRHex = function (t) {
    var e = eR.parseCSRHex(t);
    return eR.getKey(e.p8pubkeyhex, null, "pkcs8pub");
  };
  eR.parseCSRHex = function (t) {
    var e = t9.getChildIdx;
    var r = t9.getTLV;
    var i = {};
    if (t.substr(0, 2) != "30") {
      throw Error("malformed CSR(code:001)");
    }
    var s = e(t, 0);
    if (s.length < 1) {
      throw Error("malformed CSR(code:002)");
    }
    if (t.substr(s[0], 2) != "30") {
      throw Error("malformed CSR(code:003)");
    }
    var n = e(t, s[0]);
    if (n.length < 3) {
      throw Error("malformed CSR(code:004)");
    }
    i.p8pubkeyhex = r(t, n[2]);
    return i;
  };
  eR.getKeyID = function (t) {
    if (typeof t == "string" && t.indexOf("BEGIN ") != -1) {
      t = eR.getKey(t);
    }
    var e = el(eR.getPEM(t));
    var r = t9.getIdxbyList(e, 0, [1]);
    var i = t9.getV(e, r).substring(2);
    return f.crypto.Util.hashHex(i, "sha1");
  };
  eR.getJWK = function (t, e, r, i, s) {
    var n;
    var a;
    var o = {};
    var h = f.crypto.Util.hashHex;
    if (typeof t == "string") {
      n = eR.getKey(t);
      if (t.indexOf("CERTIFICATE") != -1) {
        a = el(t);
      }
    } else if (typeof t == "object") {
      if (t instanceof eH) {
        n = t.getPublicKey();
        a = t.hex;
      } else {
        n = t;
      }
    } else {
      throw Error("unsupported keyinfo type");
    }
    if (n instanceof t5 && n.isPrivate) {
      o.kty = "RSA";
      o.n = es(n.n.toString(16));
      o.e = es(n.e.toString(16));
      o.d = es(n.d.toString(16));
      o.p = es(n.p.toString(16));
      o.q = es(n.q.toString(16));
      o.dp = es(n.dmp1.toString(16));
      o.dq = es(n.dmq1.toString(16));
      o.qi = es(n.coeff.toString(16));
    } else if (n instanceof t5 && n.isPublic) {
      o.kty = "RSA";
      o.n = es(n.n.toString(16));
      o.e = es(n.e.toString(16));
    } else if (n instanceof f.crypto.ECDSA && n.isPrivate) {
      var u = n.getShortNISTPCurveName();
      if (u !== "P-256" && u !== "P-384" && u !== "P-521") {
        throw Error("unsupported curve name for JWT: " + u);
      }
      var c = n.getPublicKeyXYHex();
      o.kty = "EC";
      o.crv = u;
      o.x = es(c.x);
      o.y = es(c.y);
      o.d = es(n.prvKeyHex);
    } else if (n instanceof f.crypto.ECDSA && n.isPublic) {
      var u = n.getShortNISTPCurveName();
      if (u !== "P-256" && u !== "P-384" && u !== "P-521") {
        throw Error("unsupported curve name for JWT: " + u);
      }
      var c = n.getPublicKeyXYHex();
      o.kty = "EC";
      o.crv = u;
      o.x = es(c.x);
      o.y = es(c.y);
    }
    if (o.kty == undefined) {
      throw Error("unsupported keyinfo");
    }
    if (!n.isPrivate && e != true) {
      o.kid = f.jws.JWS.getJWKthumbprint(o);
    }
    if (a != undefined && r != true) {
      o.x5c = [S(a)];
    }
    if (a != undefined && i != true) {
      o.x5t = er(S(h(a, "sha1")));
    }
    if (a != undefined && s != true) {
      o["x5t#S256"] = er(S(h(a, "sha256")));
    }
    return o;
  };
  eR.getJWKFromKey = function (t) {
    return eR.getJWK(t, true, true, true, true);
  };
  t5.getPosArrayOfChildrenFromHex = function (t) {
    return t9.getChildIdx(t, 0);
  };
  t5.getHexValueArrayOfChildrenFromHex = function (t) {
    var e = t9.getV;
    var r = t5.getPosArrayOfChildrenFromHex(t);
    var i = e(t, r[0]);
    var s = e(t, r[1]);
    var n = e(t, r[2]);
    var a = e(t, r[3]);
    var o = e(t, r[4]);
    var h = e(t, r[5]);
    var u = e(t, r[6]);
    var c = e(t, r[7]);
    var l = e(t, r[8]);
    var r = [];
    r.push(i, s, n, a, o, h, u, c, l);
    return r;
  };
  t5.prototype.readPrivateKeyFromPEMString = function (t) {
    var e = el(t);
    var r = t5.getHexValueArrayOfChildrenFromHex(e);
    this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
  };
  t5.prototype.readPKCS5PrvKeyHex = function (t) {
    var e = t5.getHexValueArrayOfChildrenFromHex(t);
    this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
  };
  t5.prototype.readPKCS8PrvKeyHex = function (t) {
    var e;
    var r;
    var i;
    var s;
    var n;
    var a;
    var o;
    var h;
    var u = t9.getVbyListEx;
    if (t9.isASN1HEX(t) === false) {
      throw Error("not ASN.1 hex string");
    }
    try {
      e = u(t, 0, [2, 0, 1], "02");
      r = u(t, 0, [2, 0, 2], "02");
      i = u(t, 0, [2, 0, 3], "02");
      s = u(t, 0, [2, 0, 4], "02");
      n = u(t, 0, [2, 0, 5], "02");
      a = u(t, 0, [2, 0, 6], "02");
      o = u(t, 0, [2, 0, 7], "02");
      h = u(t, 0, [2, 0, 8], "02");
    } catch (t) {
      throw Error("malformed PKCS#8 plain RSA private key");
    }
    this.setPrivateEx(e, r, i, s, n, a, o, h);
  };
  t5.prototype.readPKCS5PubKeyHex = function (t) {
    var e = t9.getV;
    if (t9.isASN1HEX(t) === false) {
      throw Error("keyHex is not ASN.1 hex string");
    }
    var r = t9.getChildIdx(t, 0);
    if (r.length !== 2 || t.substr(r[0], 2) !== "02" || t.substr(r[1], 2) !== "02") {
      throw Error("wrong hex for PKCS#5 public key");
    }
    var i = e(t, r[0]);
    var s = e(t, r[1]);
    this.setPublic(i, s);
  };
  t5.prototype.readPKCS8PubKeyHex = function (t) {
    if (t9.isASN1HEX(t) === false) {
      throw Error("not ASN.1 hex string");
    }
    if (t9.getTLVbyListEx(t, 0, [0, 0]) !== "06092a864886f70d010101") {
      throw Error("not PKCS8 RSA public key");
    }
    var e = t9.getTLVbyListEx(t, 0, [1, 0]);
    this.readPKCS5PubKeyHex(e);
  };
  t5.prototype.readCertPubKeyHex = function (t, e) {
    var r;
    var i;
    (r = new eH()).readCertHex(t);
    i = r.getPublicKeyHex();
    this.readPKCS8PubKeyHex(i);
  };
  RegExp("[^0-9a-f]", "gi");
  t5.prototype.sign = function (t, e) {
    var r = f.crypto.Util.hashString(t, e);
    return this.signWithMessageHash(r, e);
  };
  t5.prototype.signWithMessageHash = function (t, e) {
    var r = t2(f.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
    return eT(this.doPrivate(r).toString(16), this.n.bitLength());
  };
  t5.prototype.signPSS = function (t, e, r) {
    var i;
    i = eu(t);
    var s = f.crypto.Util.hashHex(i, e);
    if (r === undefined) {
      r = -1;
    }
    return this.signWithMessageHashPSS(s, e, r);
  };
  t5.prototype.signWithMessageHashPSS = function (t, e, r) {
    var i;
    var s = eh(t);
    var n = s.length;
    var a = this.n.bitLength() - 1;
    var o = Math.ceil(a / 8);
    function h(t) {
      return f.crypto.Util.hashHex(t, e);
    }
    if (r === -1 || r === undefined) {
      r = n;
    } else if (r === -2) {
      r = o - n - 2;
    } else if (r < -2) {
      throw Error("invalid salt length");
    }
    if (o < n + r + 2) {
      throw Error("data too long");
    }
    var u = "";
    if (r > 0) {
      u = Array(r);
      new t1().nextBytes(u);
      u = String.fromCharCode.apply(String, u);
    }
    var c = eh(h(eu("\0\0\0\0\0\0\0\0" + s + u)));
    var l = [];
    for (i = 0; i < o - r - n - 2; i += 1) {
      l[i] = 0;
    }
    var d = String.fromCharCode.apply(String, l) + "" + u;
    var p = eB(c, d.length, h);
    var g = [];
    for (i = 0; i < d.length; i += 1) {
      g[i] = d.charCodeAt(i) ^ p.charCodeAt(i);
    }
    g[0] &= ~(65280 >> o * 8 - a & 255);
    i = 0;
    for (; i < n; i++) {
      g.push(c.charCodeAt(i));
    }
    g.push(188);
    return eT(this.doPrivate(new b(g)).toString(16), this.n.bitLength());
  };
  t5.prototype.verify = function (t, e) {
    if ((e = e.toLowerCase()).match(/^[0-9a-f]+$/) == null) {
      return false;
    }
    var r = t2(e, 16);
    var i = this.n.bitLength();
    if (r.bitLength() > i) {
      return false;
    }
    var s = this.doPublic(r).toString(16);
    if (s.length + 3 != i / 4) {
      return false;
    }
    var n = eN(s.replace(/^1f+00/, ""));
    if (n.length == 0) {
      return false;
    }
    var a = n[0];
    return n[1] == f.crypto.Util.hashString(t, a);
  };
  t5.prototype.verifyWithMessageHash = function (t, e) {
    if (e.length != Math.ceil(this.n.bitLength() / 4)) {
      return false;
    }
    var r = t2(e, 16);
    if (r.bitLength() > this.n.bitLength()) {
      return 0;
    }
    var i = eN(this.doPublic(r).toString(16).replace(/^1f+00/, ""));
    return i.length != 0 && (i[0], i[1] == t);
  };
  t5.prototype.verifyPSS = function (t, e, r, i) {
    var s;
    s = eu(t);
    var n = f.crypto.Util.hashHex(s, r);
    if (i === undefined) {
      i = -1;
    }
    return this.verifyWithMessageHashPSS(n, e, r, i);
  };
  t5.prototype.verifyWithMessageHashPSS = function (t, e, r, i) {
    if (e.length != Math.ceil(this.n.bitLength() / 4)) {
      return false;
    }
    var s;
    var n = new b(e, 16);
    function a(t) {
      return f.crypto.Util.hashHex(t, r);
    }
    var o = eh(t);
    var h = o.length;
    var u = this.n.bitLength() - 1;
    var c = Math.ceil(u / 8);
    if (i === -1 || i === undefined) {
      i = h;
    } else if (i === -2) {
      i = c - h - 2;
    } else if (i < -2) {
      throw Error("invalid salt length");
    }
    if (c < h + i + 2) {
      throw Error("data too long");
    }
    var l = this.doPublic(n).toByteArray();
    for (s = 0; s < l.length; s += 1) {
      l[s] &= 255;
    }
    while (l.length < c) {
      l.unshift(0);
    }
    if (l[c - 1] !== 188) {
      throw Error("encoded message does not end in 0xbc");
    }
    var d = (l = String.fromCharCode.apply(String, l)).substr(0, c - h - 1);
    var p = l.substr(d.length, h);
    var g = 65280 >> c * 8 - u & 255;
    if ((d.charCodeAt(0) & g) != 0) {
      throw Error("bits beyond keysize not zero");
    }
    var v = eB(p, d.length, a);
    var x = [];
    for (s = 0; s < d.length; s += 1) {
      x[s] = d.charCodeAt(s) ^ v.charCodeAt(s);
    }
    x[0] &= ~g;
    var m = c - h - i - 2;
    for (s = 0; s < m; s += 1) {
      if (x[s] !== 0) {
        throw Error("leftmost octets not zero");
      }
    }
    if (x[m] !== 1) {
      throw Error("0x01 marker not found");
    }
    return p === eh(a(eu("\0\0\0\0\0\0\0\0" + o + String.fromCharCode.apply(String, x.slice(-i)))));
  };
  t5.SALT_LEN_HLEN = -1;
  t5.SALT_LEN_MAX = -2;
  t5.SALT_LEN_RECOVER = -2;
  eH.EXT_PARSER = {};
  eH.registExtParser = function (t, e) {
    eH.EXT_PARSER[t] = e;
  };
  eH.hex2dn = function (t, e = 0) {
    var r = new eH();
    t9.getTLV(t, e);
    return r.getX500Name(t).str;
  };
  eH.hex2rdn = function (t, e = 0) {
    if (t.substr(e, 2) !== "31") {
      throw Error("malformed RDN");
    }
    var r = [];
    var i = t9.getChildIdx(t, e);
    var s = 0;
    for (; s < i.length; s++) {
      r.push(eH.hex2attrTypeValue(t, i[s]));
    }
    return (r = r.map(function (t) {
      return t.replace("+", "\\+");
    })).join("+");
  };
  eH.hex2attrTypeValue = function (t, e) {
    var r = t9.getV;
    if (e === undefined) {
      e = 0;
    }
    if (t.substr(e, 2) !== "30") {
      throw Error("malformed attribute type and value");
    }
    var i = t9.getChildIdx(t, e);
    if (i.length === 2) {
      t.substr(i[0], 2);
    }
    var s = r(t, i[0]);
    var n = f.asn1.ASN1Util.oidHexToInt(s);
    return f.asn1.x509.OID.oid2atype(n) + "=" + eh(r(t, i[1]));
  };
  eH.getPublicKeyFromCertHex = function (t) {
    var e = new eH();
    e.readCertHex(t);
    return e.getPublicKey();
  };
  eH.getPublicKeyFromCertPEM = function (t) {
    var e = new eH();
    e.readCertPEM(t);
    return e.getPublicKey();
  };
  eH.getPublicKeyInfoPropOfCertPEM = function (t) {
    var e;
    var r;
    var i = t9.getVbyList;
    var s = {
      algparam: null
    };
    (e = new eH()).readCertPEM(t);
    r = e.getPublicKeyHex();
    s.keyhex = i(r, 0, [1], "03").substr(2);
    s.algoid = i(r, 0, [0, 0], "06");
    if (s.algoid === "2a8648ce3d0201") {
      s.algparam = i(r, 0, [0, 1], "06");
    }
    return s;
  };
  eH.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];
  if (f === undefined || !f) {
    f = {};
  }
  if (f.jws === undefined || !f.jws) {
    f.jws = {};
  }
  f.jws.JWS = function () {
    var t = f.jws.JWS.isSafeJSONString;
    this.parseJWS = function (e, r) {
      if (this.parsedJWS === undefined || !r && this.parsedJWS.sigvalH === undefined) {
        var i = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
        if (i == null) {
          throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
        }
        var s = i[1];
        var n = i[2];
        var a = i[3];
        var o = s + "." + n;
        this.parsedJWS = {};
        this.parsedJWS.headB64U = s;
        this.parsedJWS.payloadB64U = n;
        this.parsedJWS.sigvalB64U = a;
        this.parsedJWS.si = o;
        if (!r) {
          var h = en(a);
          var u = t2(h, 16);
          this.parsedJWS.sigvalH = h;
          this.parsedJWS.sigvalBI = u;
        }
        var c = p(s);
        var l = p(n);
        this.parsedJWS.headS = c;
        this.parsedJWS.payloadS = l;
        if (!t(c, this.parsedJWS, "headP")) {
          throw "malformed JSON string for JWS Head: " + c;
        }
      }
    };
  };
  f.jws.JWS.sign = function (t, e, r, i, s) {
    var n;
    var a;
    var o;
    var h = f;
    var u = h.jws.JWS;
    var c = u.readSafeJSONString;
    var l = u.isSafeJSONString;
    var p = h.crypto;
    p.ECDSA;
    var g = p.Mac;
    var v = p.Signature;
    var x = JSON;
    if (typeof e != "string" && typeof e != "object") {
      throw "spHeader must be JSON string or object: " + e;
    }
    if (typeof e == "object") {
      a = e;
      n = x.stringify(a);
    }
    if (typeof e == "string") {
      if (!l(n = e)) {
        throw "JWS Head is not safe JSON string: " + n;
      }
      a = c(n);
    }
    o = r;
    if (typeof r == "object") {
      o = x.stringify(r);
    }
    if ((t == "" || t == null) && a.alg !== undefined) {
      t = a.alg;
    }
    if (t != "" && t != null && a.alg === undefined) {
      a.alg = t;
      n = x.stringify(a);
    }
    if (t !== a.alg) {
      throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
    }
    var m = null;
    if (u.jwsalg2sigalg[t] === undefined) {
      throw "unsupported alg name: " + t;
    }
    m = u.jwsalg2sigalg[t];
    var y = d(n) + "." + d(o);
    var S = "";
    if (m.substr(0, 4) == "Hmac") {
      if (i === undefined) {
        throw "mac key shall be specified for HS* alg";
      }
      var E = new g({
        alg: m,
        prov: "cryptojs",
        pass: i
      });
      E.updateString(y);
      S = E.doFinal();
    } else if (m.indexOf("withECDSA") != -1) {
      var b = new v({
        alg: m
      });
      b.init(i, s);
      b.updateString(y);
      var F = b.sign();
      S = f.crypto.ECDSA.asn1SigToConcatSig(F);
    } else if (m != "none") {
      var b = new v({
        alg: m
      });
      b.init(i, s);
      b.updateString(y);
      S = b.sign();
    }
    return y + "." + es(S);
  };
  f.jws.JWS.verify = function (t, e, r) {
    var i = f;
    var s = i.jws.JWS;
    var n = s.readSafeJSONString;
    var a = i.crypto;
    var o = a.ECDSA;
    var h = a.Mac;
    var u = a.Signature;
    if (!eb(t)) {
      return false;
    }
    var c = t.split(".");
    if (c.length !== 3) {
      return false;
    }
    var l = c[0] + "." + c[1];
    var d = en(c[2]);
    var g = n(p(c[0]));
    var v = null;
    var x = null;
    if (g.alg === undefined) {
      throw "algorithm not specified in header";
    }
    x = (v = g.alg).substr(0, 2);
    if (r != null && Object.prototype.toString.call(r) === "[object Array]" && r.length > 0 && (":" + r.join(":") + ":").indexOf(":" + v + ":") == -1) {
      throw "algorithm '" + v + "' not accepted in the list";
    }
    if (v != "none" && e === null) {
      throw "key shall be specified to verify.";
    }
    if (typeof e == "string" && e.indexOf("-----BEGIN ") != -1) {
      e = eR.getKey(e);
    }
    if ((x == "RS" || x == "PS") && !(e instanceof t5)) {
      throw "key shall be a RSAKey obj for RS* and PS* algs";
    }
    if (x == "ES" && !(e instanceof o)) {
      throw "key shall be a ECDSA obj for ES* algs";
    }
    var m = null;
    if (s.jwsalg2sigalg[g.alg] === undefined) {
      throw "unsupported alg name: " + v;
    }
    if ((m = s.jwsalg2sigalg[v]) == "none") {
      throw "not supported";
    }
    if (m.substr(0, 4) == "Hmac") {
      var y = null;
      if (e === undefined) {
        throw "hexadecimal key shall be specified for HMAC";
      }
      var S = new h({
        alg: m,
        pass: e
      });
      S.updateString(l);
      return d == S.doFinal();
    }
    if (m.indexOf("withECDSA") != -1) {
      var E = null;
      try {
        E = o.concatSigToASN1Sig(d);
      } catch (t) {
        return false;
      }
      var b = new u({
        alg: m
      });
      b.init(e);
      b.updateString(l);
      return b.verify(E);
    }
    var b = new u({
      alg: m
    });
    b.init(e);
    b.updateString(l);
    return b.verify(d);
  };
  f.jws.JWS.parse = function (t) {
    var e;
    var r;
    var i;
    var s = t.split(".");
    var n = {};
    if (s.length != 2 && s.length != 3) {
      throw "malformed sJWS: wrong number of '.' splitted elements";
    }
    e = s[0];
    r = s[1];
    if (s.length == 3) {
      i = s[2];
    }
    n.headerObj = f.jws.JWS.readSafeJSONString(p(e));
    n.payloadObj = f.jws.JWS.readSafeJSONString(p(r));
    n.headerPP = JSON.stringify(n.headerObj, null, "  ");
    if (n.payloadObj == null) {
      n.payloadPP = p(r);
    } else {
      n.payloadPP = JSON.stringify(n.payloadObj, null, "  ");
    }
    if (i !== undefined) {
      n.sigHex = en(i);
    }
    return n;
  };
  f.jws.JWS.verifyJWT = function (t, e, r) {
    var i = f.jws;
    var s = i.JWS;
    var n = s.readSafeJSONString;
    var a = s.inArray;
    var o = s.includedArray;
    if (!eb(t)) {
      return false;
    }
    var h = t.split(".");
    if (h.length != 3) {
      return false;
    }
    var u = h[0];
    var c = h[1];
    en(h[2]);
    var l = n(p(u));
    var d = n(p(c));
    if (l.alg === undefined) {
      return false;
    }
    if (r.alg === undefined) {
      throw "acceptField.alg shall be specified";
    }
    if (!a(l.alg, r.alg) || d.iss !== undefined && typeof r.iss == "object" && !a(d.iss, r.iss) || d.sub !== undefined && typeof r.sub == "object" && !a(d.sub, r.sub)) {
      return false;
    }
    if (d.aud !== undefined && typeof r.aud == "object") {
      if (typeof d.aud == "string") {
        if (!a(d.aud, r.aud)) {
          return false;
        }
      } else if (typeof d.aud == "object" && !o(d.aud, r.aud)) {
        return false;
      }
    }
    var g = i.IntDate.getNow();
    if (r.verifyAt !== undefined && typeof r.verifyAt == "number") {
      g = r.verifyAt;
    }
    if (r.gracePeriod === undefined || typeof r.gracePeriod != "number") {
      r.gracePeriod = 0;
    }
    return (d.exp === undefined || typeof d.exp != "number" || !(d.exp + r.gracePeriod < g)) && (d.nbf === undefined || typeof d.nbf != "number" || !(g < d.nbf - r.gracePeriod)) && (d.iat === undefined || typeof d.iat != "number" || !(g < d.iat - r.gracePeriod)) && (d.jti === undefined || r.jti === undefined || d.jti === r.jti) && !!s.verify(t, e, r.alg) && true;
  };
  f.jws.JWS.includedArray = function (t, e) {
    var r = f.jws.JWS.inArray;
    if (t === null || typeof t != "object" || typeof t.length != "number") {
      return false;
    }
    for (var i = 0; i < t.length; i++) {
      if (!r(t[i], e)) {
        return false;
      }
    }
    return true;
  };
  f.jws.JWS.inArray = function (t, e) {
    if (e === null || typeof e != "object" || typeof e.length != "number") {
      return false;
    }
    for (var r = 0; r < e.length; r++) {
      if (e[r] == t) {
        return true;
      }
    }
    return false;
  };
  f.jws.JWS.jwsalg2sigalg = {
    HS256: "HmacSHA256",
    HS384: "HmacSHA384",
    HS512: "HmacSHA512",
    RS256: "SHA256withRSA",
    RS384: "SHA384withRSA",
    RS512: "SHA512withRSA",
    ES256: "SHA256withECDSA",
    ES384: "SHA384withECDSA",
    ES512: "SHA512withECDSA",
    PS256: "SHA256withRSAandMGF1",
    PS384: "SHA384withRSAandMGF1",
    PS512: "SHA512withRSAandMGF1",
    none: "none"
  };
  f.jws.JWS.isSafeJSONString = function (t, e, r) {
    var i = null;
    try {
      i = t6(t);
      if (typeof i != "object" || i.constructor === Array) {
        return 0;
      }
      if (e) {
        e[r] = i;
      }
      return 1;
    } catch (t) {
      return 0;
    }
  };
  f.jws.JWS.readSafeJSONString = function (t) {
    var e = null;
    try {
      e = t6(t);
      if (typeof e != "object" || e.constructor === Array) {
        return null;
      }
      return e;
    } catch (t) {
      return null;
    }
  };
  f.jws.JWS.getEncodedSignatureValueFromJWS = function (t) {
    var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
    if (e == null) {
      throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    }
    return e[1];
  };
  f.jws.JWS.getJWKthumbprint = function (t) {
    if (t.kty !== "RSA" && t.kty !== "EC" && t.kty !== "oct") {
      throw "unsupported algorithm for JWK Thumprint";
    }
    var e = "{";
    if (t.kty === "RSA") {
      if (typeof t.n != "string" || typeof t.e != "string") {
        throw "wrong n and e value for RSA key";
      }
      e += "\"e\":\"" + t.e + "\"," + ("\"kty\":\"" + t.kty) + "\"," + ("\"n\":\"" + t.n) + "\"}";
    } else if (t.kty === "EC") {
      if (typeof t.crv != "string" || typeof t.x != "string" || typeof t.y != "string") {
        throw "wrong crv, x and y value for EC key";
      }
      e += "\"crv\":\"" + t.crv + "\"," + ("\"kty\":\"" + t.kty) + "\"," + ("\"x\":\"" + t.x) + "\"," + ("\"y\":\"" + t.y) + "\"}";
    } else if (t.kty === "oct") {
      if (typeof t.k != "string") {
        throw "wrong k value for oct(symmetric) key";
      }
      e += "\"kty\":\"" + t.kty + "\"," + ("\"k\":\"" + t.k) + "\"}";
    }
    var r = eu(e);
    return es(f.crypto.Util.hashHex(r, "sha256"));
  };
  f.jws.IntDate = {};
  f.jws.IntDate.get = function (t) {
    var e = f.jws.IntDate;
    var r = e.getNow;
    var i = e.getZulu;
    if (t == "now") {
      return r();
    }
    if (t == "now + 1hour") {
      return r() + 3600;
    }
    if (t == "now + 1day") {
      return r() + 86400;
    }
    if (t == "now + 1month") {
      return r() + 2592000;
    }
    if (t == "now + 1year") {
      return r() + 31536000;
    }
    if (t.match(/Z$/)) {
      return i(t);
    }
    if (t.match(/^[0-9]+$/)) {
      return parseInt(t);
    }
    throw "unsupported format: " + t;
  };
  f.jws.IntDate.getZulu = function (t) {
    return Math.round(function (t) {
      var e;
      var r;
      var i;
      var s;
      var n;
      var a;
      var o;
      var h;
      var u;
      if (u = (t = function (t) {
        if (t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}[.][0-9]*Z$/)) {
          if (t.match(/^[0-4]/)) {
            return "20" + t;
          } else {
            return "19" + t;
          }
        } else {
          return t;
        }
      }(t)).match(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)) {
        e = parseInt(u[1]);
        r = parseInt(u[2]) - 1;
        i = parseInt(u[3]);
        s = parseInt(u[4]);
        n = parseInt(u[5]);
        a = parseInt(u[6]);
        o = 0;
        if ((h = u[7]) !== "") {
          o = parseInt((h.substr(1) + "00").substr(0, 3));
        }
        return Date.UTC(e, r, i, s, n, a, o);
      }
      throw Error("unsupported zulu format: " + t);
    }(t) / 1000);
  };
  f.jws.IntDate.getNow = function () {
    return ~~(new Date() / 1000);
  };
  f.jws.IntDate.intDate2UTCString = function (t) {
    return new Date(t * 1000).toUTCString();
  };
  f.jws.IntDate.intDate2Zulu = function (t) {
    var e = new Date(t * 1000);
    return ("0000" + e.getUTCFullYear()).slice(-4) + ("00" + (e.getUTCMonth() + 1)).slice(-2) + ("00" + e.getUTCDate()).slice(-2) + ("00" + e.getUTCHours()).slice(-2) + ("00" + e.getUTCMinutes()).slice(-2) + ("00" + e.getUTCSeconds()).slice(-2) + "Z";
  };
  if (f === undefined || !f) {
    f = {};
  }
  if (f.jws === undefined || !f.jws) {
    f.jws = {};
  }
  f.jws.JWSJS = function () {
    var t = f.jws.JWS;
    var e = t.readSafeJSONString;
    this.aHeader = [];
    this.sPayload = "";
    this.aSignature = [];
    this.init = function () {
      this.aHeader = [];
      this.sPayload = undefined;
      this.aSignature = [];
    };
    this.initWithJWS = function (t) {
      this.init();
      var e = t.split(".");
      if (e.length != 3) {
        throw "malformed input JWS";
      }
      this.aHeader.push(e[0]);
      this.sPayload = e[1];
      this.aSignature.push(e[2]);
    };
    this.addSignature = function (t, e, r, i) {
      if (this.sPayload === undefined || this.sPayload === null) {
        throw "there's no JSON-JS signature to add.";
      }
      var s = this.aHeader.length;
      if (this.aHeader.length != this.aSignature.length) {
        throw "aHeader.length != aSignature.length";
      }
      try {
        var n = f.jws.JWS.sign(t, e, this.sPayload, r, i).split(".");
        n[0];
        n[2];
        this.aHeader.push(n[0]);
        this.aSignature.push(n[2]);
      } catch (t) {
        if (this.aHeader.length > s) {
          this.aHeader.pop();
        }
        if (this.aSignature.length > s) {
          this.aSignature.pop();
        }
        throw "addSignature failed: " + t;
      }
    };
    this.verifyAll = function (t) {
      if (this.aHeader.length !== t.length || this.aSignature.length !== t.length) {
        return false;
      }
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        if (r.length !== 2 || this.verifyNth(e, r[0], r[1]) === false) {
          return false;
        }
      }
      return true;
    };
    this.verifyNth = function (e, r, i) {
      if (this.aHeader.length <= e || this.aSignature.length <= e) {
        return false;
      }
      var s = this.aHeader[e];
      var n = this.aSignature[e];
      var a = s + "." + this.sPayload + "." + n;
      var o = false;
      try {
        o = t.verify(a, r, i);
      } catch (t) {
        return false;
      }
      return o;
    };
    this.readJWSJS = function (t) {
      if (typeof t == "string") {
        var r = e(t);
        if (r == null) {
          throw "argument is not safe JSON object string";
        }
        this.aHeader = r.headers;
        this.sPayload = r.payload;
        this.aSignature = r.signatures;
      } else {
        try {
          if (t.headers.length > 0) {
            this.aHeader = t.headers;
          } else {
            throw "malformed header";
          }
          if (typeof t.payload == "string") {
            this.sPayload = t.payload;
          } else {
            throw "malformed signatures";
          }
          if (t.signatures.length > 0) {
            this.aSignature = t.signatures;
          } else {
            throw "malformed signatures";
          }
        } catch (t) {
          throw "malformed JWS-JS JSON object: " + t;
        }
      }
    };
    this.getJSON = function () {
      return {
        headers: this.aHeader,
        payload: this.sPayload,
        signatures: this.aSignature
      };
    };
    this.isEmpty = function () {
      return +(this.aHeader.length == 0);
    };
  };
  f.crypto.ECDSA;
  f.crypto.DSA;
  f.crypto.Signature;
  f.crypto.MessageDigest;
  f.crypto.Mac;
  exports.stoBA = t7;
  exports.BAtos = function (t) {
    var e = "";
    var r = 0;
    for (; r < t.length; r++) {
      e += String.fromCharCode(t[r]);
    }
    return e;
  };
  exports.stob64 = function (t) {
    return S(ee(t));
  };
  f.crypto;
  f.asn1;
  f.jws;
  f.lang;
}