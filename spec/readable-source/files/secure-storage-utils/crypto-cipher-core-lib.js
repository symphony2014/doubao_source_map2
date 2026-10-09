// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(805012) to 'crypto-core-utils'
// - Resolved require(321536) to 'crypto-evpkdf-implementation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 57315
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
          var n;
          var o = this._iv;
          if (o) {
            n = o;
            this._iv = undefined;
          } else {
            n = this._prevBlock;
          }
          for (var i = 0; i < r; i++) {
            e[t + i] ^= n[i];
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
          var t;
          var r = e.ciphertext;
          var o = e.salt;
          return (o ? n.create([1398893684, 1701076831]).concat(o).concat(r) : r).toString(a);
        },
        parse: function (e) {
          var t;
          var r = a.parse(e);
          var o = r.words;
          if (o[0] == 1398893684 && o[1] == 1701076831) {
            t = n.create(o.slice(2, 4));
            o.splice(0, 4);
            r.sigBytes -= 16;
          }
          return d.create({
            ciphertext: r,
            salt: t
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
        execute: function (e, t, r, o, i) {
          o ||= n.random(8);
          if (i) {
            var a = c.create({
              keySize: t + r,
              hasher: i
            }).compute(e, o);
          } else {
            var a = c.create({
              keySize: t + r
            }).compute(e, o);
          }
          var f = n.create(a.words.slice(t), r * 4);
          a.sigBytes = t * 4;
          return d.create({
            key: a,
            iv: f,
            salt: o
          });
        }
      };
      y = t.PasswordBasedCipher = v.extend({
        cfg: v.cfg.extend({
          kdf: p
        }),
        encrypt: function (e, t, r, n) {
          var o = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize, n.salt, n.hasher);
          n.iv = o.iv;
          var i = v.encrypt.call(this, e, t, o.key, n);
          i.mixIn(o);
          return i;
        },
        decrypt: function (e, t, r, n) {
          n = this.cfg.extend(n);
          t = this._parse(t, n.format);
          var o = n.kdf.execute(r, e.keySize, e.ivSize, t.salt, n.hasher);
          n.iv = o.iv;
          return v.decrypt.call(this, e, t, o.key, n);
        }
      });
    }
  };
  module.exports = n(require("crypto-core-utils") /*id: 805012*/, require("crypto-evpkdf-implementation") /*id: 321536*/);
}