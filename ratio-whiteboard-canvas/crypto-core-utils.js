// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(234274) to 'async-business-layout-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 805012
         */
module.exports = function (module, exports, require) {
  var i;
  i = function () {
    var e = e || function (e, t) {
      if (typeof window != "undefined" && window.crypto) {
        i = window.crypto;
      }
      if (typeof self != "undefined" && self.crypto) {
        i = self.crypto;
      }
      if (typeof globalThis != "undefined" && globalThis.crypto) {
        i = globalThis.crypto;
      }
      if (!i && typeof window != "undefined" && window.msCrypto) {
        i = window.msCrypto;
      }
      if (!i && require.g !== undefined && require.g.crypto) {
        i = require.g.crypto;
      }
      if (!i) {
        try {
          i = require("async-business-layout-module") /*id: 234274*/;
        } catch (e) {}
      }
      var i;
      function r() {
        if (i) {
          if (typeof i.getRandomValues == "function") {
            try {
              return i.getRandomValues(new Uint32Array(1))[0];
            } catch (e) {}
          }
          if (typeof i.randomBytes == "function") {
            try {
              return i.randomBytes(4).readInt32LE();
            } catch (e) {}
          }
        }
        throw Error("Native crypto module could not be used to get secure random number.");
      }
      var o = Object.create || function () {
        function e() {}
        return function (t) {
          var n;
          e.prototype = t;
          n = new e();
          e.prototype = null;
          return n;
        };
      }();
      var a = {};
      var s = a.lib = {};
      var l = s.Base = {
        extend: function (e) {
          var t = o(this);
          if (e) {
            t.mixIn(e);
          }
          if (!t.hasOwnProperty("init") || this.init === t.init) {
            t.init = function () {
              t.$super.init.apply(this, arguments);
            };
          }
          t.init.prototype = t;
          t.$super = this;
          return t;
        },
        create: function () {
          var e = this.extend();
          e.init.apply(e, arguments);
          return e;
        },
        init: function () {},
        mixIn: function (e) {
          for (var t in e) {
            if (e.hasOwnProperty(t)) {
              this[t] = e[t];
            }
          }
          if (e.hasOwnProperty("toString")) {
            this.toString = e.toString;
          }
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      };
      var c = s.WordArray = l.extend({
        init: function (e, n) {
          e = this.words = e || [];
          if (t != n) {
            this.sigBytes = n;
          } else {
            this.sigBytes = e.length * 4;
          }
        },
        toString: function (e) {
          return (e || u).stringify(this);
        },
        concat: function (e) {
          var t = this.words;
          var n = e.words;
          var i = this.sigBytes;
          var r = e.sigBytes;
          this.clamp();
          if (i % 4) {
            for (var o = 0; o < r; o++) {
              var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
              t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8;
            }
          } else {
            for (var s = 0; s < r; s += 4) {
              t[i + s >>> 2] = n[s >>> 2];
            }
          }
          this.sigBytes += r;
          return this;
        },
        clamp: function () {
          var t = this.words;
          var n = this.sigBytes;
          t[n >>> 2] &= -1 << 32 - n % 4 * 8;
          t.length = e.ceil(n / 4);
        },
        clone: function () {
          var e = l.clone.call(this);
          e.words = this.words.slice(0);
          return e;
        },
        random: function (e) {
          var t = [];
          var n = 0;
          for (; n < e; n += 4) {
            t.push(r());
          }
          return new c.init(t, e);
        }
      });
      var d = a.enc = {};
      var u = d.Hex = {
        stringify: function (e) {
          var t = e.words;
          var n = e.sigBytes;
          var i = [];
          var r = 0;
          for (; r < n; r++) {
            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            i.push((o >>> 4).toString(16));
            i.push((o & 15).toString(16));
          }
          return i.join("");
        },
        parse: function (e) {
          var t = e.length;
          var n = [];
          var i = 0;
          for (; i < t; i += 2) {
            n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
          }
          return new c.init(n, t / 2);
        }
      };
      var h = d.Latin1 = {
        stringify: function (e) {
          var t = e.words;
          var n = e.sigBytes;
          var i = [];
          var r = 0;
          for (; r < n; r++) {
            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
            i.push(String.fromCharCode(o));
          }
          return i.join("");
        },
        parse: function (e) {
          var t = e.length;
          var n = [];
          var i = 0;
          for (; i < t; i++) {
            n[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - i % 4 * 8;
          }
          return new c.init(n, t);
        }
      };
      var f = d.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(h.stringify(e)));
          } catch (e) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (e) {
          return h.parse(unescape(encodeURIComponent(e)));
        }
      };
      var p = s.BufferedBlockAlgorithm = l.extend({
        reset: function () {
          this._data = new c.init();
          this._nDataBytes = 0;
        },
        _append: function (e) {
          if (typeof e == "string") {
            e = f.parse(e);
          }
          this._data.concat(e);
          this._nDataBytes += e.sigBytes;
        },
        _process: function (t) {
          var n;
          var i = this._data;
          var r = i.words;
          var o = i.sigBytes;
          var a = this.blockSize;
          var s = o / (a * 4);
          var l = (s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0)) * a;
          var d = e.min(l * 4, o);
          if (l) {
            for (var u = 0; u < l; u += a) {
              this._doProcessBlock(r, u);
            }
            n = r.splice(0, l);
            i.sigBytes -= d;
          }
          return new c.init(n, d);
        },
        clone: function () {
          var e = l.clone.call(this);
          e._data = this._data.clone();
          return e;
        },
        _minBufferSize: 0
      });
      s.Hasher = p.extend({
        cfg: l.extend(),
        init: function (e) {
          this.cfg = this.cfg.extend(e);
          this.reset();
        },
        reset: function () {
          p.reset.call(this);
          this._doReset();
        },
        update: function (e) {
          this._append(e);
          this._process();
          return this;
        },
        finalize: function (e) {
          if (e) {
            this._append(e);
          }
          return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function (e) {
          return function (t, n) {
            return new m.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var m = a.algo = {};
      return a;
    }(Math);
    return e;
  };
  module.exports = i();
}