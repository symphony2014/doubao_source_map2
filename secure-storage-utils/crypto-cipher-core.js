// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(991453) to 'crypto-evp-kdf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 142493
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    var c;
    var f;
    var s;
    var u;
    var h;
    var l;
    var d;
    var x;
    var v;
    var p;
    var y;
    if (!e.lib.Cipher) {
      r = (t = e.lib).Base;
      n = t.WordArray;
      o = t.BufferedBlockAlgorithm;
      (i = e.enc).Utf8;
      a = i.Base64;
      c = e.algo.EvpKDF;
      f = t.Cipher = o.extend({
        cfg: r.extend(),
        createEncryptor: function (e, t) {
          return this.create(this._ENC_XFORM_MODE, e, t);
        },
        createDecryptor: function (e, t) {
          return this.create(this._DEC_XFORM_MODE, e, t);
        },
        init: function (e, t, r) {
          this.cfg = this.cfg.extend(r);
          this._xformMode = e;
          this._key = t;
          this.reset();
        },
        reset: function () {
          o.reset.call(this);
          this._doReset();
        },
        process: function (e) {
          this._append(e);
          return this._process();
        },
        finalize: function (e) {
          if (e) {
            this._append(e);
          }
          return this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function () {
          function e(e) {
            if (typeof e == "string") {
              return y;
            } else {
              return v;
            }
          }
          return function (t) {
            return {
              encrypt: function (r, n, o) {
                return e(n).encrypt(t, r, n, o);
              },
              decrypt: function (r, n, o) {
                return e(n).decrypt(t, r, n, o);
              }
            };
          };
        }()
      });
      t.StreamCipher = f.extend({
        _doFinalize: function () {
          return this._process(true);
        },
        blockSize: 1
      });
      s = e.mode = {};
      u = t.BlockCipherMode = r.extend({
        createEncryptor: function (e, t) {
          return this.Encryptor.create(e, t);
        },
        createDecryptor: function (e, t) {
          return this.Decryptor.create(e, t);
        },
        init: function (e, t) {
          this._cipher = e;
          this._iv = t;
        }
      });
      h = s.CBC = function () {
        var e = u.extend();
        function t(e, t, r) {
          var n = this._iv;
          if (n) {
            var o = n;
            this._iv = undefined;
          } else {
            var o = this._prevBlock;
          }
          for (var i = 0; i < r; i++) {
            e[t + i] ^= o[i];
          }
        }
        e.Encryptor = e.extend({
          processBlock: function (e, r) {
            var n = this._cipher;
            var o = n.blockSize;
            t.call(this, e, r, o);
            n.encryptBlock(e, r);
            this._prevBlock = e.slice(r, r + o);
          }
        });
        e.Decryptor = e.extend({
          processBlock: function (e, r) {
            var n = this._cipher;
            var o = n.blockSize;
            var i = e.slice(r, r + o);
            n.decryptBlock(e, r);
            t.call(this, e, r, o);
            this._prevBlock = i;
          }
        });
        return e;
      }();
      l = (e.pad = {}).Pkcs7 = {
        pad: function (e, t) {
          var r = t * 4;
          var o = r - e.sigBytes % r;
          var i = o << 24 | o << 16 | o << 8 | o;
          var a = [];
          var c = 0;
          for (; c < o; c += 4) {
            a.push(i);
          }
          var f = n.create(a, o);
          e.concat(f);
        },
        unpad: function (e) {
          var t = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= t;
        }
      };
      t.BlockCipher = f.extend({
        cfg: f.cfg.extend({
          mode: h,
          padding: l
        }),
        reset: function () {
          f.reset.call(this);
          var e = this.cfg;
          var t = e.iv;
          var r = e.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            var n = r.createEncryptor;
          } else {
            var n = r.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == n) {
            this._mode.init(this, t && t.words);
          } else {
            this._mode = n.call(r, this, t && t.words);
            this._mode.__creator = n;
          }
        },
        _doProcessBlock: function (e, t) {
          this._mode.processBlock(e, t);
        },
        _doFinalize: function () {
          var e = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            e.pad(this._data, this.blockSize);
            var t = this._process(true);
          } else {
            var t = this._process(true);
            e.unpad(t);
          }
          return t;
        },
        blockSize: 4
      });
      d = t.CipherParams = r.extend({
        init: function (e) {
          this.mixIn(e);
        },
        toString: function (e) {
          return (e || this.formatter).stringify(this);
        }
      });
      x = (e.format = {}).OpenSSL = {
        stringify: function (e) {
          var t = e.ciphertext;
          var r = e.salt;
          if (r) {
            var o = n.create([1398893684, 1701076831]).concat(r).concat(t);
          } else {
            var o = t;
          }
          return o.toString(a);
        },
        parse: function (e) {
          var t = a.parse(e);
          var r = t.words;
          if (r[0] == 1398893684 && r[1] == 1701076831) {
            var o = n.create(r.slice(2, 4));
            r.splice(0, 4);
            t.sigBytes -= 16;
          }
          return d.create({
            ciphertext: t,
            salt: o
          });
        }
      };
      v = t.SerializableCipher = r.extend({
        cfg: r.extend({
          format: x
        }),
        encrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          var o = e.createEncryptor(r, n);
          var i = o.finalize(t);
          var a = o.cfg;
          return d.create({
            ciphertext: i,
            key: r,
            iv: a.iv,
            algorithm: e,
            mode: a.mode,
            padding: a.padding,
            blockSize: e.blockSize,
            formatter: n.format
          });
        },
        decrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          t = this._parse(t, n.format);
          return e.createDecryptor(r, n).finalize(t.ciphertext);
        },
        _parse: function (e, t) {
          if (typeof e == "string") {
            return t.parse(e, this);
          } else {
            return e;
          }
        }
      });
      p = (e.kdf = {}).OpenSSL = {
        execute: function (e, t, r, o) {
          o ||= n.random(8);
          var i = c.create({
            keySize: t + r
          }).compute(e, o);
          var a = n.create(i.words.slice(t), r * 4);
          i.sigBytes = t * 4;
          return d.create({
            key: i,
            iv: a,
            salt: o
          });
        }
      };
      y = t.PasswordBasedCipher = v.extend({
        cfg: v.cfg.extend({
          kdf: p
        }),
        encrypt: function (e, t, r, n) {
          var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize);
          n.iv = o.iv;
          var i = v.encrypt.call(this, e, t, o.key, n);
          i.mixIn(o);
          return i;
        },
        decrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          t = this._parse(t, n.format);
          var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
          n.iv = o.iv;
          return v.decrypt.call(this, e, t, o.key, n);
        }
      });
    }
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-evp-kdf") /*id: 991453*/);
}