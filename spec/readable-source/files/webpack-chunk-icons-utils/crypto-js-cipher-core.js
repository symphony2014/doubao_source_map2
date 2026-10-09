// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(420793) to 'crypto-js-evp-kdf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 698370
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    var o;
    var a;
    var s;
    var c;
    var u;
    var f;
    var l;
    var d;
    var h;
    var g;
    var x;
    var M;
    var p;
    if (!e.lib.Cipher) {
      r = (t = e.lib).Base;
      n = t.WordArray;
      i = t.BufferedBlockAlgorithm;
      (o = e.enc).Utf8;
      a = o.Base64;
      s = e.algo.EvpKDF;
      c = t.Cipher = i.extend({
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
          i.reset.call(this);
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
              return p;
            } else {
              return x;
            }
          }
          return function (t) {
            return {
              encrypt: function (r, n, i) {
                return e(n).encrypt(t, r, n, i);
              },
              decrypt: function (r, n, i) {
                return e(n).decrypt(t, r, n, i);
              }
            };
          };
        }()
      });
      t.StreamCipher = c.extend({
        _doFinalize: function () {
          return this._process(true);
        },
        blockSize: 1
      });
      u = e.mode = {};
      f = t.BlockCipherMode = r.extend({
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
      l = u.CBC = function () {
        var e = f.extend();
        function t(e, t, r) {
          var n;
          var i = this._iv;
          if (i) {
            n = i;
            this._iv = undefined;
          } else {
            n = this._prevBlock;
          }
          for (var o = 0; o < r; o++) {
            e[t + o] ^= n[o];
          }
        }
        e.Encryptor = e.extend({
          processBlock: function (e, r) {
            var n = this._cipher;
            var i = n.blockSize;
            t.call(this, e, r, i);
            n.encryptBlock(e, r);
            this._prevBlock = e.slice(r, r + i);
          }
        });
        e.Decryptor = e.extend({
          processBlock: function (e, r) {
            var n = this._cipher;
            var i = n.blockSize;
            var o = e.slice(r, r + i);
            n.decryptBlock(e, r);
            t.call(this, e, r, i);
            this._prevBlock = o;
          }
        });
        return e;
      }();
      d = (e.pad = {}).Pkcs7 = {
        pad: function (e, t) {
          var r = t * 4;
          var i = r - e.sigBytes % r;
          var o = i << 24 | i << 16 | i << 8 | i;
          var a = [];
          var s = 0;
          for (; s < i; s += 4) {
            a.push(o);
          }
          var c = n.create(a, i);
          e.concat(c);
        },
        unpad: function (e) {
          var t = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= t;
        }
      };
      t.BlockCipher = c.extend({
        cfg: c.cfg.extend({
          mode: l,
          padding: d
        }),
        reset: function () {
          c.reset.call(this);
          var e;
          var t = this.cfg;
          var r = t.iv;
          var n = t.mode;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            e = n.createEncryptor;
          } else {
            e = n.createDecryptor;
            this._minBufferSize = 1;
          }
          if (this._mode && this._mode.__creator == e) {
            this._mode.init(this, r && r.words);
          } else {
            this._mode = e.call(n, this, r && r.words);
            this._mode.__creator = e;
          }
        },
        _doProcessBlock: function (e, t) {
          this._mode.processBlock(e, t);
        },
        _doFinalize: function () {
          var e;
          var t = this.cfg.padding;
          if (this._xformMode == this._ENC_XFORM_MODE) {
            t.pad(this._data, this.blockSize);
            e = this._process(true);
          } else {
            e = this._process(true);
            t.unpad(e);
          }
          return e;
        },
        blockSize: 4
      });
      h = t.CipherParams = r.extend({
        init: function (e) {
          this.mixIn(e);
        },
        toString: function (e) {
          return (e || this.formatter).stringify(this);
        }
      });
      g = (e.format = {}).OpenSSL = {
        stringify: function (e) {
          var t;
          var r = e.ciphertext;
          var i = e.salt;
          return (i ? n.create([1398893684, 1701076831]).concat(i).concat(r) : r).toString(a);
        },
        parse: function (e) {
          var t;
          var r = a.parse(e);
          var i = r.words;
          if (i[0] == 1398893684 && i[1] == 1701076831) {
            t = n.create(i.slice(2, 4));
            i.splice(0, 4);
            r.sigBytes -= 16;
          }
          return h.create({
            ciphertext: r,
            salt: t
          });
        }
      };
      x = t.SerializableCipher = r.extend({
        cfg: r.extend({
          format: g
        }),
        encrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          var i = e.createEncryptor(r, n);
          var o = i.finalize(t);
          var a = i.cfg;
          return h.create({
            ciphertext: o,
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
      M = (e.kdf = {}).OpenSSL = {
        execute: function (e, t, r, i) {
          i ||= n.random(8);
          var o = s.create({
            keySize: t + r
          }).compute(e, i);
          var a = n.create(o.words.slice(t), r * 4);
          o.sigBytes = t * 4;
          return h.create({
            key: o,
            iv: a,
            salt: i
          });
        }
      };
      p = t.PasswordBasedCipher = x.extend({
        cfg: x.cfg.extend({
          kdf: M
        }),
        encrypt: function (e, t, r, n) {
          var i = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize);
          n.iv = i.iv;
          var o = x.encrypt.call(this, e, t, i.key, n);
          o.mixIn(i);
          return o;
        },
        decrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          t = this._parse(t, n.format);
          var i = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
          n.iv = i.iv;
          return x.decrypt.call(this, e, t, i.key, n);
        }
      });
    }
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-evp-kdf") /*id: 420793*/);
}