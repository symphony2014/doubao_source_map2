// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35613.d234a88b.js
         * chunkId: 35613
         * moduleId: 64150
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  if (typeof self != "undefined") {
    self;
  }
  r = function () {
    return (e => {
      var t = {};
      function r(i) {
        var n;
        return (t[i] || (n = t[i] = {
          i: i,
          l: false,
          exports: {}
        }, e[i].call(n.exports, n, n.exports, r), n.l = true, n)).exports;
      }
      r.m = e;
      r.c = t;
      r.d = function (e, t, i) {
        if (!r.o(e, t)) {
          Object.defineProperty(e, t, {
            enumerable: true,
            get: i
          });
        }
      };
      r.r = function (e) {
        if (typeof Symbol != "undefined" && Symbol.toStringTag) {
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          });
        }
        Object.defineProperty(e, "__esModule", {
          value: true
        });
      };
      r.t = function (e, t) {
        if (t & 1) {
          e = r(e);
        }
        if (t & 8 || t & 4 && typeof e == "object" && e && e.__esModule) {
          return e;
        }
        var i = Object.create(null);
        r.r(i);
        Object.defineProperty(i, "default", {
          enumerable: true,
          value: e
        });
        if (t & 2 && typeof e != "string") {
          for (var n in e) {
            r.d(i, n, function (t) {
              return e[t];
            }.bind(null, n));
          }
        }
        return i;
      };
      r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        r.d(t, "a", t);
        return t;
      };
      r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      r.p = "";
      return r(r.s = 11);
    })([function (e, t, r) {
      var i = typeof Reflect == "object" ? Reflect : null;
      var n = i && typeof i.apply == "function" ? i.apply : function (e, t, r) {
        return Function.prototype.apply.call(e, t, r);
      };
      var o = i && typeof i.ownKeys == "function" ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
      } : function (e) {
        return Object.getOwnPropertyNames(e);
      };
      var s = Number.isNaN || function (e) {
        return e != e;
      };
      function a() {
        a.init.call(this);
      }
      e.exports = a;
      e.exports.once = function (e, t) {
        return new Promise(function (r, i) {
          var n;
          function o(r) {
            e.removeListener(t, s);
            i(r);
          }
          function s() {
            if (typeof e.removeListener == "function") {
              e.removeListener("error", o);
            }
            r([].slice.call(arguments));
          }
          m(e, t, s, {
            once: true
          });
          if (t !== "error") {
            n = {
              once: true
            };
            if (typeof e.on == "function") {
              m(e, "error", o, n);
            }
          }
        });
      };
      (a.EventEmitter = a).prototype._events = undefined;
      a.prototype._eventsCount = 0;
      a.prototype._maxListeners = undefined;
      var c = 10;
      function u(e) {
        if (typeof e != "function") {
          throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
        }
      }
      function l(e) {
        if (e._maxListeners === undefined) {
          return a.defaultMaxListeners;
        } else {
          return e._maxListeners;
        }
      }
      function f(e, t, r, i) {
        var n;
        var o;
        u(r);
        if ((n = e._events) === undefined) {
          n = e._events = Object.create(null);
          e._eventsCount = 0;
        } else {
          if (n.newListener !== undefined) {
            e.emit("newListener", t, r.listener || r);
            n = e._events;
          }
          o = n[t];
        }
        if (o === undefined) {
          o = n[t] = r;
          ++e._eventsCount;
        } else {
          if (typeof o == "function") {
            o = n[t] = i ? [r, o] : [o, r];
          } else if (i) {
            o.unshift(r);
          } else {
            o.push(r);
          }
          if ((n = l(e)) > 0 && o.length > n && !o.warned) {
            o.warned = true;
            (i = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = "MaxListenersExceededWarning";
            i.emitter = e;
            i.type = t;
            i.count = o.length;
            console;
          }
        }
        return e;
      }
      function h(e, t, r) {
        (t = function () {
          if (!this.fired) {
            this.target.removeListener(this.type, this.wrapFn);
            this.fired = true;
            if (arguments.length == 0) {
              return this.listener.call(this.target);
            } else {
              return this.listener.apply(this.target, arguments);
            }
          }
        }.bind(e = {
          fired: false,
          wrapFn: undefined,
          target: e,
          type: t,
          listener: r
        })).listener = r;
        return e.wrapFn = t;
      }
      function d(e, t, r) {
        var e = e._events;
        if (e === undefined || (e = e[t]) === undefined) {
          return [];
        } else if (typeof e == "function") {
          if (r) {
            return [e.listener || e];
          } else {
            return [e];
          }
        } else if (r) {
          return function (e) {
            var t = Array(e.length);
            var r = 0;
            for (; r < t.length; ++r) {
              t[r] = e[r].listener || e[r];
            }
            return t;
          }(e);
        } else {
          return g(e, e.length);
        }
      }
      function p(e) {
        var t = this._events;
        if (t !== undefined) {
          if (typeof (t = t[e]) == "function") {
            return 1;
          }
          if (t !== undefined) {
            return t.length;
          }
        }
        return 0;
      }
      function g(e, t) {
        var r = Array(t);
        var i = 0;
        for (; i < t; ++i) {
          r[i] = e[i];
        }
        return r;
      }
      function m(e, t, r, i) {
        if (typeof e.on == "function") {
          if (i.once) {
            e.once(t, r);
          } else {
            e.on(t, r);
          }
        } else {
          if (typeof e.addEventListener != "function") {
            throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
          }
          e.addEventListener(t, function n(o) {
            if (i.once) {
              e.removeEventListener(t, n);
            }
            r(o);
          });
        }
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: true,
        get: function () {
          return c;
        },
        set: function (e) {
          if (typeof e != "number" || e < 0 || s(e)) {
            throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
          }
          c = e;
        }
      });
      a.init = function () {
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || undefined;
      };
      a.prototype.setMaxListeners = function (e) {
        if (typeof e != "number" || e < 0 || s(e)) {
          throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
        }
        this._maxListeners = e;
        return this;
      };
      a.prototype.getMaxListeners = function () {
        return l(this);
      };
      a.prototype.emit = function (e) {
        var t = [];
        var r = 1;
        for (; r < arguments.length; r++) {
          t.push(arguments[r]);
        }
        var i = e === "error";
        var o = this._events;
        if (o !== undefined) {
          i = i && o.error === undefined;
        } else if (!i) {
          return false;
        }
        if (i) {
          if ((s = t.length > 0 ? t[0] : s) instanceof Error) {
            throw s;
          }
          (i = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""))).context = s;
          throw i;
        }
        var s = o[e];
        if (s === undefined) {
          return false;
        }
        if (typeof s == "function") {
          n(s, this, t);
        } else {
          var a = s.length;
          var c = g(s, a);
          var r = 0;
          for (; r < a; ++r) {
            n(c[r], this, t);
          }
        }
        return true;
      };
      a.prototype.on = a.prototype.addListener = function (e, t) {
        return f(this, e, t, false);
      };
      a.prototype.prependListener = function (e, t) {
        return f(this, e, t, true);
      };
      a.prototype.once = function (e, t) {
        u(t);
        this.on(e, h(this, e, t));
        return this;
      };
      a.prototype.prependOnceListener = function (e, t) {
        u(t);
        this.prependListener(e, h(this, e, t));
        return this;
      };
      a.prototype.off = a.prototype.removeListener = function (e, t) {
        var r;
        var i;
        var n;
        var o;
        var s;
        u(t);
        if ((i = this._events) !== undefined && (r = i[e]) !== undefined) {
          if (r === t || r.listener === t) {
            if (--this._eventsCount == 0) {
              this._events = Object.create(null);
            } else {
              delete i[e];
              if (i.removeListener) {
                this.emit("removeListener", e, r.listener || t);
              }
            }
          } else if (typeof r != "function") {
            n = -1;
            o = r.length - 1;
            for (; o >= 0; o--) {
              if (r[o] === t || r[o].listener === t) {
                s = r[o].listener;
                n = o;
                break;
              }
            }
            if (n < 0) {
              return this;
            }
            if (n === 0) {
              r.shift();
            } else {
              (function (e, t) {
                for (; t + 1 < e.length; t++) {
                  e[t] = e[t + 1];
                }
                e.pop();
              })(r, n);
            }
            if (r.length === 1) {
              i[e] = r[0];
            }
            if (i.removeListener !== undefined) {
              this.emit("removeListener", e, s || t);
            }
          }
        }
        return this;
      };
      a.prototype.removeAllListeners = function (e) {
        var t;
        var r = this._events;
        if (r !== undefined) {
          if (r.removeListener === undefined) {
            if (arguments.length == 0) {
              this._events = Object.create(null);
              this._eventsCount = 0;
            } else if (r[e] !== undefined) {
              if (--this._eventsCount == 0) {
                this._events = Object.create(null);
              } else {
                delete r[e];
              }
            }
          } else if (arguments.length == 0) {
            var i;
            var n = Object.keys(r);
            var o = 0;
            for (; o < n.length; ++o) {
              if ((i = n[o]) !== "removeListener") {
                this.removeAllListeners(i);
              }
            }
            this.removeAllListeners("removeListener");
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (typeof (t = r[e]) == "function") {
            this.removeListener(e, t);
          } else if (t !== undefined) {
            for (o = t.length - 1; o >= 0; o--) {
              this.removeListener(e, t[o]);
            }
          }
        }
        return this;
      };
      a.prototype.listeners = function (e) {
        return d(this, e, true);
      };
      a.prototype.rawListeners = function (e) {
        return d(this, e, false);
      };
      a.listenerCount = function (e, t) {
        if (typeof e.listenerCount == "function") {
          return e.listenerCount(t);
        } else {
          return p.call(e, t);
        }
      };
      a.prototype.listenerCount = p;
      a.prototype.eventNames = function () {
        if (this._eventsCount > 0) {
          return o(this._events);
        } else {
          return [];
        }
      };
    }, function (e, t, r) {
      (function (t) {
        e.exports = (e => {
          var r = e && typeof e == "object" && "default" in e ? e : {
            default: e
          };
          var i = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : t !== undefined ? t : typeof self != "undefined" ? self : {};
          function n(e, t, r) {
            e(r = {
              path: t,
              exports: {},
              require: function (e, t) {
                return function () {
                  throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                }(t == null && r.path);
              }
            }, r.exports);
            return r.exports;
          }
          function o(e) {
            try {
              return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(/[*]/g, function (e) {
                return `%${e.charCodeAt(0).toString(16).toUpperCase()}`;
              });
            } catch (e) {
              return "";
            }
          }
          function s(e) {
            return Object.keys(e).sort().map(function (t) {
              var r = e[t];
              if (r != null && (t = o(t))) {
                if (Array.isArray(r)) {
                  return `${t}=${r.map(o).sort().join(`&${t}=`)}`;
                } else {
                  return `${t}=${o(r)}`;
                }
              }
            }).filter(function (e) {
              return e;
            }).join("&");
          }
          var a = n(function (e, t) {
            e.exports = (e => {
              if (typeof window != "undefined" && window.crypto) {
                t = window.crypto;
              }
              if (typeof self != "undefined" && self.crypto) {
                t = self.crypto;
              }
              if (!(t = (t = (t = typeof globalThis != "undefined" && globalThis.crypto ? globalThis.crypto : t) || typeof window == "undefined" || !window.msCrypto ? t : window.msCrypto) || i === undefined || !i.crypto ? t : i.crypto)) {
                try {
                  t = r.default;
                } catch (e) {}
              }
              var t;
              var n = Object.create || (() => {
                function e() {}
                return function (t) {
                  e.prototype = t;
                  t = new e();
                  e.prototype = null;
                  return t;
                };
              })();
              var o = {};
              var s = o.lib = {};
              var a = s.Base = {
                extend: function (e) {
                  var t = n(this);
                  if (e) {
                    t.mixIn(e);
                  }
                  if (!t.hasOwnProperty("init") || this.init === t.init) {
                    t.init = function () {
                      t.$super.init.apply(this, arguments);
                    };
                  }
                  (t.init.prototype = t).$super = this;
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
              var c = s.WordArray = a.extend({
                init: function (e, t) {
                  e = this.words = e || [];
                  this.sigBytes = t ?? e.length * 4;
                },
                toString: function (e) {
                  return (e || l).stringify(this);
                },
                concat: function (e) {
                  var t = this.words;
                  var r = e.words;
                  var i = this.sigBytes;
                  var n = e.sigBytes;
                  this.clamp();
                  if (i % 4) {
                    for (var o = 0; o < n; o++) {
                      var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                      t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
                    }
                  } else {
                    for (var a = 0; a < n; a += 4) {
                      t[i + a >>> 2] = r[a >>> 2];
                    }
                  }
                  this.sigBytes += n;
                  return this;
                },
                clamp: function () {
                  var t = this.words;
                  var r = this.sigBytes;
                  t[r >>> 2] &= -1 << 32 - r % 4 * 8;
                  t.length = e.ceil(r / 4);
                },
                clone: function () {
                  var e = a.clone.call(this);
                  e.words = this.words.slice(0);
                  return e;
                },
                random: function (e) {
                  var r = [];
                  var i = 0;
                  for (; i < e; i += 4) {
                    r.push((() => {
                      if (t) {
                        if (typeof t.getRandomValues == "function") {
                          try {
                            return t.getRandomValues(new Uint32Array(1))[0];
                          } catch (e) {}
                        }
                        if (typeof t.randomBytes == "function") {
                          try {
                            return t.randomBytes(4).readInt32LE();
                          } catch (e) {}
                        }
                      }
                      throw Error("Native crypto module could not be used to get secure random number.");
                    })());
                  }
                  return new c.init(r, e);
                }
              });
              var u = o.enc = {};
              var l = u.Hex = {
                stringify: function (e) {
                  var t = e.words;
                  var r = e.sigBytes;
                  var i = [];
                  var n = 0;
                  for (; n < r; n++) {
                    var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16));
                    i.push((o & 15).toString(16));
                  }
                  return i.join("");
                },
                parse: function (e) {
                  var t = e.length;
                  var r = [];
                  var i = 0;
                  for (; i < t; i += 2) {
                    r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                  }
                  return new c.init(r, t / 2);
                }
              };
              var f = u.Latin1 = {
                stringify: function (e) {
                  var t = e.words;
                  var r = e.sigBytes;
                  var i = [];
                  var n = 0;
                  for (; n < r; n++) {
                    var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push(String.fromCharCode(o));
                  }
                  return i.join("");
                },
                parse: function (e) {
                  var t = e.length;
                  var r = [];
                  var i = 0;
                  for (; i < t; i++) {
                    r[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - i % 4 * 8;
                  }
                  return new c.init(r, t);
                }
              };
              var h = u.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(f.stringify(e)));
                  } catch (e) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                parse: function (e) {
                  return f.parse(unescape(encodeURIComponent(e)));
                }
              };
              var d = s.BufferedBlockAlgorithm = a.extend({
                reset: function () {
                  this._data = new c.init();
                  this._nDataBytes = 0;
                },
                _append: function (e) {
                  if (typeof e == "string") {
                    e = h.parse(e);
                  }
                  this._data.concat(e);
                  this._nDataBytes += e.sigBytes;
                },
                _process: function (t) {
                  var r;
                  var i = this._data;
                  var n = i.words;
                  var o = i.sigBytes;
                  var s = this.blockSize;
                  var a = o / (s * 4);
                  var u = (t ? e.ceil(a) : e.max((a | 0) - this._minBufferSize, 0)) * s;
                  var t = e.min(u * 4, o);
                  if (u) {
                    for (var l = 0; l < u; l += s) {
                      this._doProcessBlock(n, l);
                    }
                    r = n.splice(0, u);
                    i.sigBytes -= t;
                  }
                  return new c.init(r, t);
                },
                clone: function () {
                  var e = a.clone.call(this);
                  e._data = this._data.clone();
                  return e;
                },
                _minBufferSize: 0
              });
              s.Hasher = d.extend({
                cfg: a.extend(),
                init: function (e) {
                  this.cfg = this.cfg.extend(e);
                  this.reset();
                },
                reset: function () {
                  d.reset.call(this);
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
                  return function (t, r) {
                    return new e.init(r).finalize(t);
                  };
                },
                _createHmacHelper: function (e) {
                  return function (t, r) {
                    return new p.HMAC.init(e, r).finalize(t);
                  };
                }
              });
              var p = o.algo = {};
              return o;
            })(Math);
          });
          var c = n(function (e, t) {
            var r;
            var i;
            var n;
            var o;
            var s;
            var c;
            var u;
            r = Math;
            i = (u = a.lib).WordArray;
            n = u.Hasher;
            u = a.algo;
            o = [];
            s = [];
            (() => {
              function e(e) {
                return (e - (e | 0)) * 4294967296 | 0;
              }
              var t = 2;
              var i = 0;
              while (i < 64) {
                if (function (e) {
                  var t = r.sqrt(e);
                  var i = 2;
                  for (; i <= t; i++) {
                    if (!(e % i)) {
                      return;
                    }
                  }
                  return 1;
                }(t)) {
                  if (i < 8) {
                    o[i] = e(r.pow(t, 0.5));
                  }
                  s[i] = e(r.pow(t, 1 / 3));
                  i++;
                }
                t++;
              }
            })();
            c = [];
            u = u.SHA256 = n.extend({
              _doReset: function () {
                this._hash = new i.init(o.slice(0));
              },
              _doProcessBlock: function (e, t) {
                var r = this._hash.words;
                var i = r[0];
                var n = r[1];
                var o = r[2];
                var a = r[3];
                var u = r[4];
                var l = r[5];
                var f = r[6];
                var h = r[7];
                var d = 0;
                for (; d < 64; d++) {
                  c[d] = d < 16 ? e[t + d] | 0 : (((p = c[d - 15]) << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + c[d - 7] + (((p = c[d - 2]) << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + c[d - 16];
                  var p = i & n ^ i & o ^ n & o;
                  var g = h + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & l ^ ~u & f) + s[d] + c[d];
                  var h = f;
                  var f = l;
                  var l = u;
                  var u = a + g | 0;
                  var a = o;
                  var o = n;
                  var n = i;
                  var i = g + (((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + p) | 0;
                }
                r[0] = r[0] + i | 0;
                r[1] = r[1] + n | 0;
                r[2] = r[2] + o | 0;
                r[3] = r[3] + a | 0;
                r[4] = r[4] + u | 0;
                r[5] = r[5] + l | 0;
                r[6] = r[6] + f | 0;
                r[7] = r[7] + h | 0;
              },
              _doFinalize: function () {
                var e = this._data;
                var t = e.words;
                var i = this._nDataBytes * 8;
                var n = e.sigBytes * 8;
                t[n >>> 5] |= 128 << 24 - n % 32;
                t[14 + (64 + n >>> 9 << 4)] = r.floor(i / 4294967296);
                t[15 + (64 + n >>> 9 << 4)] = i;
                e.sigBytes = t.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var e = n.clone.call(this);
                e._hash = this._hash.clone();
                return e;
              }
            });
            a.SHA256 = n._createHelper(u);
            a.HmacSHA256 = n._createHmacHelper(u);
            e.exports = a.SHA256;
          });
          n(function (e, t) {
            var r;
            e = a.lib.Base;
            r = a.enc.Utf8;
            e.exports = void (a.algo.HMAC = e.extend({
              init: function (e, t) {
                e = this._hasher = new e.init();
                if (typeof t == "string") {
                  t = r.parse(t);
                }
                var i = e.blockSize;
                var n = i * 4;
                (t = t.sigBytes > n ? e.finalize(t) : t).clamp();
                var e = this._oKey = t.clone();
                var t = this._iKey = t.clone();
                var o = e.words;
                var s = t.words;
                var a = 0;
                for (; a < i; a++) {
                  o[a] ^= 1549556828;
                  s[a] ^= 909522486;
                }
                e.sigBytes = t.sigBytes = n;
                this.reset();
              },
              reset: function () {
                var e = this._hasher;
                e.reset();
                e.update(this._iKey);
              },
              update: function (e) {
                this._hasher.update(e);
                return this;
              },
              finalize: function (e) {
                var t = this._hasher;
                var e = t.finalize(e);
                t.reset();
                return t.finalize(this._oKey.clone().concat(e));
              }
            }));
          });
          var u = n(function (e, t) {
            e.exports = a.HmacSHA256;
          });
          function l(e, t) {
            return u(t, e);
          }
          function f(e) {
            return c(e);
          }
          var h = ["authorization", "content-type", "content-length", "user-agent", "presigned-expires", "expect", "x-amzn-trace-id"];
          return (() => {
            function e(t, r, i) {
              (t => {
                if (!(t instanceof e)) {
                  throw TypeError("Cannot call a class as a function");
                }
              })(this);
              this.request = t;
              this.request.headers = t.headers || {};
              this.serviceName = r;
              this.signatureCache = typeof (i = i || {}).signatureCache != "boolean" || i.signatureCache;
              this.operation = i.operation;
              this.signatureVersion = i.signatureVersion;
              this.constant = i.isVolcengine ? {
                algorithm: "HMAC-SHA256",
                v4Identifier: "request",
                dateHeader: "X-Date",
                tokenHeader: "x-security-token",
                contentSha256Header: "X-Content-Sha256",
                kDatePrefix: ""
              } : {
                algorithm: "AWS4-HMAC-SHA256",
                v4Identifier: "aws4_request",
                dateHeader: "X-Amz-Date",
                tokenHeader: "x-amz-security-token",
                contentSha256Header: "X-Amz-Content-Sha256",
                kDatePrefix: "AWS4"
              };
              this.bodySha256 = i.bodySha256;
              this.shouldSerializeBody = typeof i.shouldSerializeBody != "boolean" || i.shouldSerializeBody;
            }
            (function (e, t) {
              var r;
              var i = 0;
              for (; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || false;
                n.configurable = true;
                if ("value" in n) {
                  n.writable = true;
                }
                Object.defineProperty(e, typeof (r = (e => {
                  if (typeof e != "object" || e === null) {
                    return e;
                  }
                  var t = e[Symbol.toPrimitive];
                  if (t === undefined) {
                    return String(e);
                  }
                  if (typeof (t = t.call(e, "string")) != "object") {
                    return t;
                  }
                  throw TypeError("@@toPrimitive must return a primitive value.");
                })(n.key)) == "symbol" ? r : String(r), n);
              }
            })(e.prototype, [{
              key: "addAuthorization",
              value: function (e, t) {
                t = this.iso8601(t).replace(/[:\-]|\.\d{3}/g, "");
                this.addHeaders(e, t);
                this.request.headers.Authorization = this.authorization(e, t);
              }
            }, {
              key: "addHeaders",
              value: function (e, t) {
                this.request.headers[this.constant.dateHeader] = t;
                if (e.sessionToken) {
                  this.request.headers[this.constant.tokenHeader] = e.sessionToken;
                }
                if (this.request.body) {
                  if (typeof (t = this.request.body) != "string" && this.shouldSerializeBody) {
                    t = t instanceof URLSearchParams ? t.toString() : JSON.stringify(t);
                  }
                  this.request.headers[this.constant.contentSha256Header] = this.bodySha256 || f(t).toString();
                }
              }
            }, {
              key: "authorization",
              value: function (e, t) {
                var r = [];
                var i = this.credentialString(t);
                r.push(`${this.constant.algorithm} Credential=${e.accessKeyId}/${i}`);
                r.push(`SignedHeaders=${this.signedHeaders()}`);
                r.push(`Signature=${this.signature(e, t)}`);
                return r.join(", ");
              }
            }, {
              key: "signature",
              value: function (e, t) {
                return l(e = this.getSigningKey(e, t.substr(0, 8), this.request.region, this.serviceName, this.signatureCache), this.stringToSign(t), "hex");
              }
            }, {
              key: "stringToSign",
              value: function (e) {
                var t = [];
                t.push(this.constant.algorithm);
                t.push(e);
                t.push(this.credentialString(e));
                t.push(this.hexEncodedHash(this.canonicalString()));
                return t.join("\n");
              }
            }, {
              key: "canonicalString",
              value: function () {
                var e = [];
                var t = this.request.pathname || "/";
                e.push(this.request.method.toUpperCase());
                e.push(t);
                e.push(s(this.request.params) || "");
                e.push(`${this.canonicalHeaders()}
`);
                e.push(this.signedHeaders());
                e.push(this.hexEncodedBodyHash());
                return e.join("\n");
              }
            }, {
              key: "canonicalHeaders",
              value: function () {
                var e = this;
                var t = [];
                Object.keys(this.request.headers).forEach(function (r) {
                  t.push([r, e.request.headers[r]]);
                });
                t.sort(function (e, t) {
                  if (e[0].toLowerCase() < t[0].toLowerCase()) {
                    return -1;
                  } else {
                    return 1;
                  }
                });
                var r = [];
                t.forEach(function (t) {
                  var i = t[0].toLowerCase();
                  if (e.isSignableHeader(i)) {
                    if ((t = t[1]) == null || typeof t.toString != "function") {
                      throw Error(`Header ${i} contains invalid value`);
                    }
                    r.push(`${i}:${e.canonicalHeaderValues(t.toString())}`);
                  }
                });
                return r.join("\n");
              }
            }, {
              key: "canonicalHeaderValues",
              value: function (e) {
                return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
              }
            }, {
              key: "signedHeaders",
              value: function () {
                var e = this;
                var t = [];
                Object.keys(this.request.headers).forEach(function (r) {
                  r = r.toLowerCase();
                  if (e.isSignableHeader(r)) {
                    t.push(r);
                  }
                });
                return t.sort().join(";");
              }
            }, {
              key: "credentialString",
              value: function (e) {
                return this.createScope(e.substr(0, 8), this.request.region, this.serviceName);
              }
            }, {
              key: "hexEncodedHash",
              value: function (e) {
                return f(e);
              }
            }, {
              key: "hexEncodedBodyHash",
              value: function () {
                return this.request.headers[this.constant.contentSha256Header] || (this.request.body ? this.hexEncodedHash(s(this.request.body)) : this.hexEncodedHash(""));
              }
            }, {
              key: "isSignableHeader",
              value: function (e) {
                return e.toLowerCase().indexOf("x-amz-") === 0 || h.indexOf(e) < 0;
              }
            }, {
              key: "iso8601",
              value: function (e) {
                return (e = e === undefined ? new Date() : e).toISOString().replace(/\.\d{3}Z$/, "Z");
              }
            }, {
              key: "getSigningKey",
              value: function (e, t, r, i) {
                e = l(`${this.constant.kDatePrefix}${e.secretAccessKey}`, t);
                t = l(e, r);
                e = l(t, i);
                return l(e, this.constant.v4Identifier);
              }
            }, {
              key: "createScope",
              value: function (e, t, r) {
                return [e.substr(0, 8), t, r, this.constant.v4Identifier].join("/");
              }
            }]);
            Object.defineProperty(e, "prototype", {
              writable: false
            });
            return e;
          })();
        })(r(9));
      }).call(this, r(5));
    }, function (e, t, r) {
      e.exports = function () {
        return r(10)("(r=>{var n={};function __webpack_require__(e){var t;return(n[e]||(t=n[e]={i:e,l:!1,exports:{}},r[e].call(t.exports,t,t.exports,__webpack_require__),t.l=!0,t)).exports}__webpack_require__.m=r,__webpack_require__.c=n,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var n in t)__webpack_require__.d(r,n,function(e){return t[e]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,\"a\",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p=\"\",__webpack_require__(__webpack_require__.s=9)})([function(e,t,l){!function(d){e.exports=(()=>(f=>{var n;if(\"undefined\"!=typeof window&&window.crypto&&(n=window.crypto),\"undefined\"!=typeof self&&self.crypto&&(n=self.crypto),!(n=!(n=!(n=\"undefined\"!=typeof globalThis&&globalThis.crypto?globalThis.crypto:n)&&\"undefined\"!=typeof window&&window.msCrypto?window.msCrypto:n)&&void 0!==d&&d.crypto?d.crypto:n))try{n=l(11)}catch(e){}var r=Object.create||(()=>{function F(){}return function(e){return F.prototype=e,e=new F,F.prototype=null,e}})(),e={},t=e.lib={},i=t.Base={extend:function(e){var t=r(this);return e&&t.mixIn(e),t.hasOwnProperty(\"init\")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),(t.init.prototype=t).$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty(\"toString\")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=t.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||s).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes,i=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;t[n+o>>>2]|=s<<24-(n+o)%4*8}else for(var c=0;c<i;c+=4)t[n+c>>>2]=r[c>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-t%4*8,e.length=f.ceil(t/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push((()=>{if(n){if(\"function\"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(e){}if(\"function\"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(e){}}throw new Error(\"Native crypto module could not be used to get secure random number.\")})());return new u.init(t,e)}}),o=e.enc={},s=o.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join(\"\")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new u.init(r,t/2)}},c=o.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=[],i=0;i<r;i++){var o=t[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join(\"\")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new u.init(r,t)}},a=o.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error(\"Malformed UTF-8 data\")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=t.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){\"string\"==typeof e&&(e=a.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var t,r=this._data,n=r.words,i=r.sigBytes,o=this.blockSize,s=i/(4*o),c=(s=e?f.ceil(s):f.max((0|s)-this._minBufferSize,0))*o,e=f.min(4*c,i);if(c){for(var a=0;a<c;a+=o)this._doProcessBlock(n,a);t=n.splice(0,c),r.sigBytes-=e}return new u.init(t,e)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),p=(t.Hasher=h.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(e,t){return new r.init(t).finalize(e)}},_createHmacHelper:function(r){return function(e,t){return new p.HMAC.init(r,t).finalize(e)}}}),e.algo={});return e})(Math))()}.call(this,l(10))},function(e,t,r){e.exports=(l=>{l.lib.Cipher||(()=>{var e=l,t=e.lib,r=t.Base,s=t.WordArray,n=t.BufferedBlockAlgorithm,i=((a=e.enc).Utf8,a.Base64),o=e.algo.EvpKDF,c=t.Cipher=n.extend({cfg:r.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){n.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:(()=>{function selectCipherStrategy(e){return\"string\"==typeof e?d:p}return function(n){return{encrypt:function(e,t,r){return selectCipherStrategy(t).encrypt(n,e,t,r)},decrypt:function(e,t,r){return selectCipherStrategy(t).decrypt(n,e,t,r)}}}})()}),a=(t.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),f=t.BlockCipherMode=r.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),a=a.CBC=(()=>{var e=f.extend();function xorBlock(e,t,r){var n,i=this._iv;i?(n=i,this._iv=void 0):n=this._prevBlock;for(var o=0;o<r;o++)e[t+o]^=n[o]}return e.Encryptor=e.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize;xorBlock.call(this,e,t,n),r.encryptBlock(e,t),this._prevBlock=e.slice(t,t+n)}}),e.Decryptor=e.extend({processBlock:function(e,t){var r=this._cipher,n=r.blockSize,i=e.slice(t,t+n);r.decryptBlock(e,t),xorBlock.call(this,e,t,n),this._prevBlock=i}}),e})(),u=(e.pad={}).Pkcs7={pad:function(e,t){for(var t=4*t,r=t-e.sigBytes%t,n=r<<24|r<<16|r<<8|r,i=[],o=0;o<r;o+=4)i.push(n);t=s.create(i,r);e.concat(t)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},h=(t.BlockCipher=c.extend({cfg:c.cfg.extend({mode:a,padding:u}),reset:function(){c.reset.call(this);var e,t=this.cfg,r=t.iv,t=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=t.createEncryptor:(e=t.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,r&&r.words):(this._mode=e.call(t,this,r&&r.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4}),t.CipherParams=r.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),a=(e.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,e=e.salt,e=e?s.create([1398893684,1701076831]).concat(e).concat(t):t;return e.toString(i)},parse:function(e){var t,e=i.parse(e),r=e.words;return 1398893684==r[0]&&1701076831==r[1]&&(t=s.create(r.slice(2,4)),r.splice(0,4),e.sigBytes-=16),h.create({ciphertext:e,salt:t})}},p=t.SerializableCipher=r.extend({cfg:r.extend({format:a}),encrypt:function(e,t,r,n){n=this.cfg.extend(n);var i=e.createEncryptor(r,n),t=i.finalize(t),i=i.cfg;return h.create({ciphertext:t,key:r,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:n.format})},decrypt:function(e,t,r,n){return n=this.cfg.extend(n),t=this._parse(t,n.format),e.createDecryptor(r,n).finalize(t.ciphertext)},_parse:function(e,t){return\"string\"==typeof e?t.parse(e,this):e}}),u=(e.kdf={}).OpenSSL={execute:function(e,t,r,n,i){n=n||s.random(8),i=(i?o.create({keySize:t+r,hasher:i}):o.create({keySize:t+r})).compute(e,n);e=s.create(i.words.slice(t),4*r);return i.sigBytes=4*t,h.create({key:i,iv:e,salt:n})}},d=t.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:u}),encrypt:function(e,t,r,n){r=(n=this.cfg.extend(n)).kdf.execute(r,e.keySize,e.ivSize,n.salt,n.hasher),n.iv=r.iv,e=p.encrypt.call(this,e,t,r.key,n);return e.mixIn(r),e},decrypt:function(e,t,r,n){n=this.cfg.extend(n),t=this._parse(t,n.format);r=n.kdf.execute(r,e.keySize,e.ivSize,t.salt,n.hasher);return n.iv=r.iv,p.decrypt.call(this,e,t,r.key,n)}})})()})(r(0),r(5))},function(e,t,r){e.exports=(n=>((()=>{var e=n,t=e.lib.BlockCipher,r=e.algo,f=[],u=[],h=[],p=[],d=[],l=[],_=[],y=[],g=[],v=[],w=((()=>{for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=0,n=0,t=0;t<256;t++){var i=n^n<<1^n<<2^n<<3^n<<4,o=e[u[f[r]=i=i>>>8^255&i^99]=r],s=e[o],c=e[s],a=257*e[i]^16843008*i;h[r]=a<<24|a>>>8,p[r]=a<<16|a>>>16,d[r]=a<<8|a>>>24,l[r]=a,_[i]=(a=16843009*c^65537*s^257*o^16843008*r)<<24|a>>>8,y[i]=a<<16|a>>>16,g[i]=a<<8|a>>>24,v[i]=a,r?(r=o^e[e[e[c^o]]],n^=e[e[n]]):r=n=1}})(),[0,1,2,4,8,16,32,64,128,27,54]),r=r.AES=t.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,n=4*(1+(this._nRounds=6+r)),i=this._keySchedule=[],o=0;o<n;o++)o<r?i[o]=t[o]:(a=i[o-1],o%r?6<r&&o%r==4&&(a=f[a>>>24]<<24|f[a>>>16&255]<<16|f[a>>>8&255]<<8|f[255&a]):(a=f[(a=a<<8|a>>>24)>>>24]<<24|f[a>>>16&255]<<16|f[a>>>8&255]<<8|f[255&a],a^=w[o/r|0]<<24),i[o]=i[o-r]^a);for(var s=this._invKeySchedule=[],c=0;c<n;c++){var a,o=n-c;a=c%4?i[o]:i[o-4],s[c]=c<4||o<=4?a:_[f[a>>>24]]^y[f[a>>>16&255]]^g[f[a>>>8&255]]^v[f[255&a]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,h,p,d,l,f)},decryptBlock:function(e,t){var r=e[t+1],r=(e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,_,y,g,v,u),e[t+1]);e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,n,i,o,s,c){for(var a=this._nRounds,f=e[t]^r[0],u=e[t+1]^r[1],h=e[t+2]^r[2],p=e[t+3]^r[3],d=4,l=1;l<a;l++)var _=n[f>>>24]^i[u>>>16&255]^o[h>>>8&255]^s[255&p]^r[d++],y=n[u>>>24]^i[h>>>16&255]^o[p>>>8&255]^s[255&f]^r[d++],g=n[h>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&u]^r[d++],v=n[p>>>24]^i[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[d++],f=_,u=y,h=g,p=v;_=(c[f>>>24]<<24|c[u>>>16&255]<<16|c[h>>>8&255]<<8|c[255&p])^r[d++],y=(c[u>>>24]<<24|c[h>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],g=(c[h>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&u])^r[d++],v=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[u>>>8&255]<<8|c[255&h])^r[d++];e[t]=_,e[t+1]=y,e[t+2]=g,e[t+3]=v},keySize:8});e.AES=t._createHelper(r)})(),n.AES))(r(0),(r(12),r(13),r(5),r(1)))},function(e,t,r){e.exports=(t=>(t.mode.ECB=(()=>{var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),e})(),t.mode.ECB))(r(0),r(1))},function(e,t,r){e.exports=(e=>e.enc.Utf8)(r(0))},function(e,t,r){e.exports=(o=>((()=>{var e=o,t=e.lib,r=t.Base,u=t.WordArray,n=(t=e.algo).MD5,i=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:n,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,n=this.cfg,i=n.hasher.create(),o=u.create(),s=o.words,c=n.keySize,a=n.iterations;s.length<c;){r&&i.update(r),r=i.update(e).finalize(t),i.reset();for(var f=1;f<a;f++)r=i.finalize(r),i.reset();o.concat(r)}return o.sigBytes=4*c,o}});e.EvpKDF=function(e,t,r){return i.create(r).compute(e,t)}})(),o.EvpKDF))(r(0),(r(14),r(15)))},function(e,t,r){e.exports=(e=>e.pad.Pkcs7)(r(0),r(1))},function(e,t,r){e.exports=(e=>(e.pad.NoPadding={pad:function(){},unpad:function(){}},e.pad.NoPadding))(r(0),r(1))},function(e,t,r){e.exports=(t=>((()=>{var e,i;\"function\"==typeof ArrayBuffer&&(e=t.lib.WordArray,i=e.init,(e.init=function(e){if((e=(e=e instanceof ArrayBuffer?new Uint8Array(e):e)instanceof Int8Array||\"undefined\"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e)instanceof Uint8Array){for(var t=e.byteLength,r=[],n=0;n<t;n++)r[n>>>2]|=e[n]<<24-n%4*8;i.call(this,r,t)}else i.apply(this,arguments)}).prototype=e)})(),t.lib.WordArray))(r(0))},function(e,t,r){r.r(t);var t=r(2),s=r.n(t),t=r(3),c=r.n(t),t=r(6),a=r.n(t),t=r(7),f=r.n(t),t=r(8),u=r.n(t),t=r(4),h=r.n(t);function crc32(e,t){for(var r=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],n=(\"undefined\"!=typeof Int32Array&&(r=new Int32Array(r)),-1^~~t),i=(e=new Uint8Array(e)).length,o=0;o<i;o++)n=r[255&(n^e[o])]^n>>>8;return(-1^n)>>>0}function dec2hex(e){if(void 0!==e)return function toEight(e){return e.length<8?toEight(e=\"0\".concat(e)):e}(Number(e).toString(16))}self.onmessage=function(e){var e=e.data,t=e[0],r=e[1],n=e[2],i=e[4],o=e[5];e[3]?(e=u.a.create(t),e=crc32(o=function wordArrayToUint8Array(e){for(var t=e.sigBytes,r=e.words,n=new Uint8Array(t),i=0,o=0;i!==t;){var s=r[o++];if(n[i++]=(4278190080&s)>>>24,i===t)break;if(n[i++]=(16711680&s)>>>16,i===t)break;if(n[i++]=(65280&s)>>>8,i===t)break;n[i++]=255&s}return n}((o&&t.byteLength%16!=0?s.a.encrypt(e,h.a.parse(i),{mode:c.a,padding:a.a}):s.a.encrypt(e,h.a.parse(i),{mode:c.a,padding:f.a})).ciphertext),0),postMessage([o.buffer,dec2hex(e),r,n],[o.buffer])):(i=crc32(t,0),postMessage([t,dec2hex(i),r,n],[t]))}},function(e,t){var r=function(){return this}();try{r=r||new Function(\"return this\")()}catch(e){\"object\"==typeof window&&(r=window)}e.exports=r},function(e,t){},function(e,t,r){e.exports=(e=>((()=>{var a=e.lib.WordArray;e.enc.Base64={stringify:function(e){for(var t=e.words,r=e.sigBytes,n=this._map,i=(e.clamp(),[]),o=0;o<r;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)i.push(n.charAt(s>>>6*(3-c)&63));var a=n.charAt(64);if(a)for(;i.length%4;)i.push(a);return i.join(\"\")},parse:function(e){var t=e.length,r=this._map;if(!(n=this._reverseMap))for(var n=this._reverseMap=[],i=0;i<r.length;i++)n[r.charCodeAt(i)]=i;var o=r.charAt(64);return o&&-1!==(o=e.indexOf(o))&&(t=o),function parseLoop(e,t,r){for(var n=[],i=0,o=0;o<t;o++){var s,c;o%4&&(s=r[e.charCodeAt(o-1)]<<o%4*2,c=r[e.charCodeAt(o)]>>>6-o%4*2,n[i>>>2]|=(s|c)<<24-i%4*8,i++)}return a.create(n,i)}(e,t,n)},_map:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\"}})(),e.enc.Base64))(r(0))},function(e,t,r){e.exports=(i=>((a=>{var e=i,t=(n=e.lib).WordArray,r=n.Hasher,n=e.algo,F=[],n=((()=>{for(var e=0;e<64;e++)F[e]=4294967296*a.abs(a.sin(e+1))|0})(),n.MD5=r.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var n=t+r,i=e[n];e[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,s=e[t+0],c=e[t+1],a=e[t+2],f=e[t+3],u=e[t+4],h=e[t+5],p=e[t+6],d=e[t+7],l=e[t+8],_=e[t+9],y=e[t+10],g=e[t+11],v=e[t+12],w=e[t+13],k=e[t+14],x=e[t+15],B=FF(o[0],S=o[1],b=o[2],m=o[3],s,7,F[0]),m=FF(m,B,S,b,c,12,F[1]),b=FF(b,m,B,S,a,17,F[2]),S=FF(S,b,m,B,f,22,F[3]);B=FF(B,S,b,m,u,7,F[4]),m=FF(m,B,S,b,h,12,F[5]),b=FF(b,m,B,S,p,17,F[6]),S=FF(S,b,m,B,d,22,F[7]),B=FF(B,S,b,m,l,7,F[8]),m=FF(m,B,S,b,_,12,F[9]),b=FF(b,m,B,S,y,17,F[10]),S=FF(S,b,m,B,g,22,F[11]),B=FF(B,S,b,m,v,7,F[12]),m=FF(m,B,S,b,w,12,F[13]),b=FF(b,m,B,S,k,17,F[14]),B=GG(B,S=FF(S,b,m,B,x,22,F[15]),b,m,c,5,F[16]),m=GG(m,B,S,b,p,9,F[17]),b=GG(b,m,B,S,g,14,F[18]),S=GG(S,b,m,B,s,20,F[19]),B=GG(B,S,b,m,h,5,F[20]),m=GG(m,B,S,b,y,9,F[21]),b=GG(b,m,B,S,x,14,F[22]),S=GG(S,b,m,B,u,20,F[23]),B=GG(B,S,b,m,_,5,F[24]),m=GG(m,B,S,b,k,9,F[25]),b=GG(b,m,B,S,f,14,F[26]),S=GG(S,b,m,B,l,20,F[27]),B=GG(B,S,b,m,w,5,F[28]),m=GG(m,B,S,b,a,9,F[29]),b=GG(b,m,B,S,d,14,F[30]),B=HH(B,S=GG(S,b,m,B,v,20,F[31]),b,m,h,4,F[32]),m=HH(m,B,S,b,l,11,F[33]),b=HH(b,m,B,S,g,16,F[34]),S=HH(S,b,m,B,k,23,F[35]),B=HH(B,S,b,m,c,4,F[36]),m=HH(m,B,S,b,u,11,F[37]),b=HH(b,m,B,S,d,16,F[38]),S=HH(S,b,m,B,y,23,F[39]),B=HH(B,S,b,m,w,4,F[40]),m=HH(m,B,S,b,s,11,F[41]),b=HH(b,m,B,S,f,16,F[42]),S=HH(S,b,m,B,p,23,F[43]),B=HH(B,S,b,m,_,4,F[44]),m=HH(m,B,S,b,v,11,F[45]),b=HH(b,m,B,S,x,16,F[46]),B=II(B,S=HH(S,b,m,B,a,23,F[47]),b,m,s,6,F[48]),m=II(m,B,S,b,d,10,F[49]),b=II(b,m,B,S,k,15,F[50]),S=II(S,b,m,B,h,21,F[51]),B=II(B,S,b,m,v,6,F[52]),m=II(m,B,S,b,f,10,F[53]),b=II(b,m,B,S,y,15,F[54]),S=II(S,b,m,B,c,21,F[55]),B=II(B,S,b,m,l,6,F[56]),m=II(m,B,S,b,x,10,F[57]),b=II(b,m,B,S,p,15,F[58]),S=II(S,b,m,B,w,21,F[59]),B=II(B,S,b,m,u,6,F[60]),m=II(m,B,S,b,g,10,F[61]),b=II(b,m,B,S,a,15,F[62]),S=II(S,b,m,B,_,21,F[63]),o[0]=o[0]+B|0,o[1]=o[1]+S|0,o[2]=o[2]+b|0,o[3]=o[3]+m|0},_doFinalize:function(){for(var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes,i=(t[n>>>5]|=128<<24-n%32,a.floor(r/4294967296)),i=(t[15+(64+n>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t[14+(64+n>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(t.length+1),this._process(),this._hash),o=i.words,s=0;s<4;s++){var c=o[s];o[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return i},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}}));function FF(e,t,r,n,i,o,s){e=e+(t&r|~t&n)+i+s;return(e<<o|e>>>32-o)+t}function GG(e,t,r,n,i,o,s){e=e+(t&n|r&~n)+i+s;return(e<<o|e>>>32-o)+t}function HH(e,t,r,n,i,o,s){e=e+(t^r^n)+i+s;return(e<<o|e>>>32-o)+t}function II(e,t,r,n,i,o,s){e=e+(r^(t|~n))+i+s;return(e<<o|e>>>32-o)+t}e.MD5=r._createHelper(n),e.HmacMD5=r._createHmacHelper(n)})(Math),i.MD5))(r(0))},function(e,t,r){e.exports=(i=>((()=>{var e=i,t=(n=e.lib).WordArray,r=n.Hasher,u=[],n=e.algo.SHA1=r.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],s=r[3],c=r[4],a=0;a<80;a++){u[a]=a<16?0|e[t+a]:(f=u[a-3]^u[a-8]^u[a-14]^u[a-16])<<1|f>>>31;var f=(n<<5|n>>>27)+c+u[a];f+=a<20?1518500249+(i&o|~i&s):a<40?1859775393+(i^o^s):a<60?(i&o|i&s|o&s)-1894007588:(i^o^s)-899497514,c=s,s=o,o=i<<30|i>>>2,i=n,n=f}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(64+n>>>9<<4)]=Math.floor(r/4294967296),t[15+(64+n>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});e.SHA1=r._createHelper(n),e.HmacSHA1=r._createHmacHelper(n)})(),i.SHA1))(r(0))},function(e,t,r){e.exports=(t=>{(()=>{var e=t.lib.Base,c=t.enc.Utf8;t.algo.HMAC=e.extend({init:function(e,t){e=this._hasher=new e.init,\"string\"==typeof t&&(t=c.parse(t));for(var r=e.blockSize,n=4*r,e=((t=t.sigBytes>n?e.finalize(t):t).clamp(),this._oKey=t.clone()),t=this._iKey=t.clone(),i=e.words,o=t.words,s=0;s<r;s++)i[s]^=1549556828,o[s]^=909522486;e.sigBytes=t.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,e=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(e))}})})()})(r(0))}]);", null);
      };
    }, function (e, t, r) {
      (function (t) {
        e.exports = (e => {
          if (typeof window != "undefined" && window.crypto) {
            i = window.crypto;
          }
          if (typeof self != "undefined" && self.crypto) {
            i = self.crypto;
          }
          if (!(i = (i = (i = typeof globalThis != "undefined" && globalThis.crypto ? globalThis.crypto : i) || typeof window == "undefined" || !window.msCrypto ? i : window.msCrypto) || t === undefined || !t.crypto ? i : t.crypto)) {
            try {
              i = r(7);
            } catch (e) {}
          }
          var i;
          var n = Object.create || (() => {
            function e() {}
            return function (t) {
              e.prototype = t;
              t = new e();
              e.prototype = null;
              return t;
            };
          })();
          var o = {};
          var s = o.lib = {};
          var a = s.Base = {
            extend: function (e) {
              var t = n(this);
              if (e) {
                t.mixIn(e);
              }
              if (!t.hasOwnProperty("init") || this.init === t.init) {
                t.init = function () {
                  t.$super.init.apply(this, arguments);
                };
              }
              (t.init.prototype = t).$super = this;
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
          var c = s.WordArray = a.extend({
            init: function (e, t) {
              e = this.words = e || [];
              this.sigBytes = t ?? e.length * 4;
            },
            toString: function (e) {
              return (e || l).stringify(this);
            },
            concat: function (e) {
              var t = this.words;
              var r = e.words;
              var i = this.sigBytes;
              var n = e.sigBytes;
              this.clamp();
              if (i % 4) {
                for (var o = 0; o < n; o++) {
                  var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                  t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
                }
              } else {
                for (var a = 0; a < n; a += 4) {
                  t[i + a >>> 2] = r[a >>> 2];
                }
              }
              this.sigBytes += n;
              return this;
            },
            clamp: function () {
              var t = this.words;
              var r = this.sigBytes;
              t[r >>> 2] &= -1 << 32 - r % 4 * 8;
              t.length = e.ceil(r / 4);
            },
            clone: function () {
              var e = a.clone.call(this);
              e.words = this.words.slice(0);
              return e;
            },
            random: function (e) {
              var t = [];
              var r = 0;
              for (; r < e; r += 4) {
                t.push((() => {
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
                })());
              }
              return new c.init(t, e);
            }
          });
          var u = o.enc = {};
          var l = u.Hex = {
            stringify: function (e) {
              var t = e.words;
              var r = e.sigBytes;
              var i = [];
              var n = 0;
              for (; n < r; n++) {
                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                i.push((o >>> 4).toString(16));
                i.push((o & 15).toString(16));
              }
              return i.join("");
            },
            parse: function (e) {
              var t = e.length;
              var r = [];
              var i = 0;
              for (; i < t; i += 2) {
                r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
              }
              return new c.init(r, t / 2);
            }
          };
          var f = u.Latin1 = {
            stringify: function (e) {
              var t = e.words;
              var r = e.sigBytes;
              var i = [];
              var n = 0;
              for (; n < r; n++) {
                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                i.push(String.fromCharCode(o));
              }
              return i.join("");
            },
            parse: function (e) {
              var t = e.length;
              var r = [];
              var i = 0;
              for (; i < t; i++) {
                r[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - i % 4 * 8;
              }
              return new c.init(r, t);
            }
          };
          var h = u.Utf8 = {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(f.stringify(e)));
              } catch (e) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return f.parse(unescape(encodeURIComponent(e)));
            }
          };
          var d = s.BufferedBlockAlgorithm = a.extend({
            reset: function () {
              this._data = new c.init();
              this._nDataBytes = 0;
            },
            _append: function (e) {
              if (typeof e == "string") {
                e = h.parse(e);
              }
              this._data.concat(e);
              this._nDataBytes += e.sigBytes;
            },
            _process: function (t) {
              var r;
              var i = this._data;
              var n = i.words;
              var o = i.sigBytes;
              var s = this.blockSize;
              var a = o / (s * 4);
              var u = (a = t ? e.ceil(a) : e.max((a | 0) - this._minBufferSize, 0)) * s;
              var t = e.min(u * 4, o);
              if (u) {
                for (var l = 0; l < u; l += s) {
                  this._doProcessBlock(n, l);
                }
                r = n.splice(0, u);
                i.sigBytes -= t;
              }
              return new c.init(r, t);
            },
            clone: function () {
              var e = a.clone.call(this);
              e._data = this._data.clone();
              return e;
            },
            _minBufferSize: 0
          });
          s.Hasher = d.extend({
            cfg: a.extend(),
            init: function (e) {
              this.cfg = this.cfg.extend(e);
              this.reset();
            },
            reset: function () {
              d.reset.call(this);
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
              return function (t, r) {
                return new e.init(r).finalize(t);
              };
            },
            _createHmacHelper: function (e) {
              return function (t, r) {
                return new p.HMAC.init(e, r).finalize(t);
              };
            }
          });
          var p = o.algo = {};
          return o;
        })(Math);
      }).call(this, r(5));
    }, function (e, t, r) {
      var i;
      var n;
      var o;
      var s;
      var a;
      var c;
      var u;
      var l;
      i = r(3);
      n = Math;
      o = (l = i.lib).WordArray;
      s = l.Hasher;
      l = i.algo;
      a = [];
      c = [];
      (() => {
        function e(e) {
          return (e - (e | 0)) * 4294967296 | 0;
        }
        var t = 2;
        var r = 0;
        while (r < 64) {
          if (function (e) {
            var t = n.sqrt(e);
            var r = 2;
            for (; r <= t; r++) {
              if (!(e % r)) {
                return;
              }
            }
            return 1;
          }(t)) {
            if (r < 8) {
              a[r] = e(n.pow(t, 0.5));
            }
            c[r] = e(n.pow(t, 1 / 3));
            r++;
          }
          t++;
        }
      })();
      u = [];
      l = l.SHA256 = s.extend({
        _doReset: function () {
          this._hash = new o.init(a.slice(0));
        },
        _doProcessBlock: function (e, t) {
          var r = this._hash.words;
          var i = r[0];
          var n = r[1];
          var o = r[2];
          var s = r[3];
          var a = r[4];
          var l = r[5];
          var f = r[6];
          var h = r[7];
          var d = 0;
          for (; d < 64; d++) {
            u[d] = d < 16 ? e[t + d] | 0 : (((p = u[d - 15]) << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + u[d - 7] + (((p = u[d - 2]) << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + u[d - 16];
            var p = i & n ^ i & o ^ n & o;
            var g = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & f) + c[d] + u[d];
            var h = f;
            var f = l;
            var l = a;
            var a = s + g | 0;
            var s = o;
            var o = n;
            var n = i;
            var i = g + (((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + p) | 0;
          }
          r[0] = r[0] + i | 0;
          r[1] = r[1] + n | 0;
          r[2] = r[2] + o | 0;
          r[3] = r[3] + s | 0;
          r[4] = r[4] + a | 0;
          r[5] = r[5] + l | 0;
          r[6] = r[6] + f | 0;
          r[7] = r[7] + h | 0;
        },
        _doFinalize: function () {
          var e = this._data;
          var t = e.words;
          var r = this._nDataBytes * 8;
          var i = e.sigBytes * 8;
          t[i >>> 5] |= 128 << 24 - i % 32;
          t[14 + (64 + i >>> 9 << 4)] = n.floor(r / 4294967296);
          t[15 + (64 + i >>> 9 << 4)] = r;
          e.sigBytes = t.length * 4;
          this._process();
          return this._hash;
        },
        clone: function () {
          var e = s.clone.call(this);
          e._hash = this._hash.clone();
          return e;
        }
      });
      i.SHA256 = s._createHelper(l);
      i.HmacSHA256 = s._createHmacHelper(l);
      e.exports = i.SHA256;
    }, function (e, t) {
      var r = function () {
        return this;
      }();
      try {
        r = r || Function("return this")();
      } catch (e) {
        if (typeof window == "object") {
          r = window;
        }
      }
      e.exports = r;
    }, function (e, t, r) {
      let i;
      i = r(3);
      r(4);
      r(8);
      e.exports = i.HmacSHA256;
    }, function (e, t) {}, function (e, t, r) {
      var i;
      var n;
      var o;
      e.exports = void (n = (i = r(3)).lib.Base, o = i.enc.Utf8, i.algo.HMAC = n.extend({
        init: function (e, t) {
          e = this._hasher = new e.init();
          if (typeof t == "string") {
            t = o.parse(t);
          }
          var r = e.blockSize;
          var i = r * 4;
          (t = t.sigBytes > i ? e.finalize(t) : t).clamp();
          var e = this._oKey = t.clone();
          var t = this._iKey = t.clone();
          var n = e.words;
          var s = t.words;
          var a = 0;
          for (; a < r; a++) {
            n[a] ^= 1549556828;
            s[a] ^= 909522486;
          }
          e.sigBytes = t.sigBytes = i;
          this.reset();
        },
        reset: function () {
          var e = this._hasher;
          e.reset();
          e.update(this._iKey);
        },
        update: function (e) {
          this._hasher.update(e);
          return this;
        },
        finalize: function (e) {
          var t = this._hasher;
          var e = t.finalize(e);
          t.reset();
          return t.finalize(this._oKey.clone().concat(e));
        }
      }));
    }, function (e, t) {}, function (e, t, r) {
      var i = window.URL || window.webkitURL;
      e.exports = function (e, t) {
        try {
          try {
            var r;
            try {
              (r = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)()).append(e);
              r = r.getBlob();
            } catch (t) {
              r = new Blob([e]);
            }
            return new Worker(i.createObjectURL(r));
          } catch (t) {
            return new Worker("data:application/javascript," + encodeURIComponent(e));
          }
        } catch (e) {
          if (t) {
            return new Worker(t);
          }
          throw Error("Inline worker is not supported");
        }
      };
    }, function (e, t, r) {
      r.r(t);
      r.d(t, "default", function () {
        return nz;
      });
      var i;
      var n;
      var o;
      var s;
      var a;
      var c;
      var t = r(0);
      var u = r.n(t);
      var l = "{tosDomain}/upload/v1/{oid}?uploadid={uploadId}&part_number={part_number}&phase=transfer";
      var f = "{tosDomain}/upload/v1/{oid}";
      var h = {
        debug: false,
        region: "cn-north-1",
        external: {},
        getSliceFunc: null,
        uploadSliceCount: 3,
        retryUploadTime: 2,
        retryProcess: true,
        retryProcessTime: 3,
        retryTaskTime: 2,
        progressMonitorTime: 10000,
        progressMonitorSpeed: 50,
        schema: "https",
        enableDiskBreakpoint: true,
        gatewayTimeout: 30000,
        uploadTimeout: 1800000,
        realtimeSpeedInterval: 1000,
        replace: {},
        headers: {},
        useGcmEncryptionMode: false,
        useServerEncryption: false
      };
      function d() {
        return (d = Object.assign || function (e) {
          var t;
          var r = 1;
          var i = arguments.length;
          for (; r < i; r++) {
            for (var n in t = arguments[r]) {
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                e[n] = t[n];
              }
            }
          }
          return e;
        }).apply(this, arguments);
      }
      function p() {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e = e.concat(function (e, t) {
            var r = typeof Symbol == "function" && e[Symbol.iterator];
            if (!r) {
              return e;
            }
            var i;
            var n;
            var o = r.call(e);
            var s = [];
            try {
              while ((t === undefined || t-- > 0) && !(i = o.next()).done) {
                s.push(i.value);
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (i && !i.done && (r = o.return)) {
                  r.call(o);
                }
              } finally {
                if (n) {
                  throw n.error;
                }
              }
            }
            return s;
          }(arguments[t]));
        }
        return e;
      }
      function g(e) {
        return e != null && Object.prototype.toString.call(e) == "[object Object]";
      }
      function m(e) {
        return (e => {
          if (typeof e == "string") {
            var t = [];
            var r = e.split("z");
            var i = 0;
            for (; i < r.length; i++) {
              var n = +parseInt(r[i], 25) ^ 64;
              var n = String.fromCharCode(n);
              t.push(n);
            }
            return t.join("");
          }
        })(e);
      }
      function y() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
      function _(e) {
        var t = document.createElement("a");
        t.href = e;
        return t;
      }
      function b(e) {
        var t = {};
        try {
          var r = _(e).search;
          if (!r) {
            return t;
          }
          (r = r.slice(1)).split("&").forEach(function (e) {
            var r;
            var i;
            var n = e.split("=");
            if (n.length) {
              r = n[0];
              i = n[1];
            }
            try {
              t[r] = decodeURIComponent(i === undefined ? "" : i);
            } catch (e) {
              t[r] = i;
            }
          });
        } catch (e) {}
        return t;
      }
      function v(e) {
        var t = 0;
        var r = 0;
        var i = (e += "").length;
        var n = 0;
        for (; n < i; n++) {
          if ((t = t * 31 + e.charCodeAt(r++)) > 140737488355327 || t < -140737488355328) {
            t &= 281474976710655;
          }
        }
        if (t < 0) {
          t += 2251799813685247;
        }
        return t;
      }
      function z(e, t) {
        try {
          if (e) {
            return C.get(e);
          } else {
            return C.get();
          }
        } catch (e) {
          return "";
        }
      }
      function S(e, t, r, i) {
        try {
          var n = i || document.domain;
          var o = +new Date() + (r || 604800000);
          C.set(e, t, {
            expires: new Date(o),
            path: "/",
            domain: n
          });
        } catch (e) {}
      }
      function w() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = Math.random() * 16 | 0;
          return (e === "x" ? t : t & 3 | 8).toString(16);
        });
      }
      function k() {
        return function e(t) {
          if (t) {
            return (t ^ Math.random() * 16 >> t / 4).toString(10);
          } else {
            return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e);
          }
        }().replace(/-/g, "").slice(0, 19);
      }
      var x;
      var E;
      var O;
      var D;
      var T = (() => {
        function e() {
          this._hooks = {};
          this._cache = [];
          this._hooksCache = {};
        }
        e.prototype.on = function (e, t) {
          if (e && t && typeof t == "function") {
            this._hooks[e] ||= [];
            this._hooks[e].push(t);
          }
        };
        e.prototype.once = function (e, t) {
          var r = this;
          if (e && t && typeof t == "function") {
            this.on(e, function i(n) {
              t(n);
              r.off(e, i);
            });
          }
        };
        e.prototype.off = function (e, t) {
          if (e && this._hooks[e] && this._hooks[e].length) {
            if (t) {
              if ((t = this._hooks[e].indexOf(t)) !== -1) {
                this._hooks[e].splice(t, 1);
              }
            } else {
              this._hooks[e] = [];
            }
          }
        };
        e.prototype.emit = function (e, t, r) {
          if (r) {
            if (e) {
              if (this._cache.indexOf(r) !== -1) {
                this._emit(e, t);
              } else {
                if (!this._hooksCache.hasOwnProperty(r)) {
                  this._hooksCache[r] = {};
                }
                if (!this._hooksCache[r].hasOwnProperty(e)) {
                  this._hooksCache[r][e] = [];
                }
                this._hooksCache[r][e].push(t);
              }
            }
          } else {
            this._emit(e, t);
          }
        };
        e.prototype._emit = function (e, t) {
          if (e && this._hooks[e] && this._hooks[e].length) {
            p(this._hooks[e]).forEach(function (e) {
              try {
                e(t);
              } catch (e) {}
            });
          }
        };
        e.prototype.set = function (e) {
          if (e && this._cache.indexOf(e) === -1) {
            this._cache.push(e);
          }
        };
        return e;
      })();
      O = +Date.now() + Number(("" + Math.random()).slice(2, 8));
      (t = {
        exports: {}
      }).exports = function () {
        function e() {
          var e = 0;
          var t = {};
          for (; e < arguments.length; e++) {
            var r;
            var i = arguments[e];
            for (r in i) {
              t[r] = i[r];
            }
          }
          return t;
        }
        function t(e) {
          return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return function r(i) {
          function n() {}
          function o(t, r, o) {
            if (typeof document != "undefined") {
              if (typeof (o = e({
                path: "/"
              }, n.defaults, o)).expires == "number") {
                o.expires = new Date(+new Date() + o.expires * 86400000);
              }
              o.expires = o.expires ? o.expires.toUTCString() : "";
              try {
                var s = JSON.stringify(r);
                if (/^[\{\[]/.test(s)) {
                  r = s;
                }
              } catch (e) {}
              r = i.write ? i.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
              t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
              var a;
              var c = "";
              for (a in o) {
                if (o[a] && (c += "; " + a, o[a] !== true)) {
                  c += "=" + o[a].split(";")[0];
                }
              }
              return document.cookie = t + "=" + r + c;
            }
          }
          function s(e, r) {
            if (typeof document != "undefined") {
              var n = {};
              var o = document.cookie ? document.cookie.split("; ") : [];
              var s = 0;
              for (; s < o.length; s++) {
                var a = o[s].split("=");
                var c = a.slice(1).join("=");
                if (!r && c.charAt(0) === "\"") {
                  c = c.slice(1, -1);
                }
                try {
                  var u = t(a[0]);
                  var c = (i.read || i)(c, u) || t(c);
                  if (r) {
                    try {
                      c = JSON.parse(c);
                    } catch (e) {}
                  }
                  n[u] = c;
                  if (e === u) {
                    break;
                  }
                } catch (e) {}
              }
              if (e) {
                return n[e];
              } else {
                return n;
              }
            }
          }
          n.set = o;
          n.get = function (e) {
            return s(e, false);
          };
          n.getJSON = function (e) {
            return s(e, true);
          };
          n.remove = function (t, r) {
            o(t, "", e(r, {
              expires: -1
            }));
          };
          n.defaults = {};
          n.withConverter = r;
          return n;
        }(function () {});
      }();
      var C = t.exports;
      var A = (() => {
        function e() {
          this.cache = {};
        }
        e.prototype.setItem = function (e, t) {
          this.cache[e] = t;
        };
        e.prototype.getItem = function (e) {
          return this.cache[e];
        };
        e.prototype.removeItem = function (e) {
          this.cache[e] = undefined;
        };
        e.prototype.getCookie = function (e, t) {
          return z(e);
        };
        e.prototype.setCookie = function (e, t, r, i) {
          S(e, t, r, i);
        };
        return e;
      })();
      var I = {
        getItem: function (e) {
          try {
            var t = localStorage.getItem(e);
            var r = t;
            try {
              if (t && typeof t == "string") {
                r = JSON.parse(t);
              }
            } catch (e) {}
            return r || {};
          } catch (e) {}
          return {};
        },
        setItem: function (e, t) {
          try {
            var r = typeof t == "string" ? t : JSON.stringify(t);
            localStorage.setItem(e, r);
          } catch (e) {}
        },
        removeItem: function (e) {
          try {
            localStorage.removeItem(e);
          } catch (e) {}
        },
        getCookie: function (e, t) {
          return z(e);
        },
        setCookie: function (e, t, r, i) {
          S(e, t, r, i);
        },
        isSupportLS: (() => {
          try {
            localStorage.setItem("_ranger-test-key", "hi");
            localStorage.getItem("_ranger-test-key");
            localStorage.removeItem("_ranger-test-key");
            return true;
          } catch (e) {
            return false;
          }
        })()
      };
      var j = {
        getItem: function (e) {
          try {
            var t = sessionStorage.getItem(e);
            var r = t;
            try {
              if (t && typeof t == "string") {
                r = JSON.parse(t);
              }
            } catch (e) {}
            return r || {};
          } catch (e) {}
          return {};
        },
        setItem: function (e, t) {
          try {
            var r = typeof t == "string" ? t : JSON.stringify(t);
            sessionStorage.setItem(e, r);
          } catch (e) {}
        },
        removeItem: function (e) {
          try {
            sessionStorage.removeItem(e);
          } catch (e) {}
        },
        getCookie: function (e, t) {
          return z(e);
        },
        setCookie: function (e, t, r, i) {
          S(e, t, r, i);
        },
        isSupportSession: (() => {
          try {
            sessionStorage.setItem("_ranger-test-key", "hi");
            sessionStorage.getItem("_ranger-test-key");
            sessionStorage.removeItem("_ranger-test-key");
            return true;
          } catch (e) {
            return false;
          }
        })()
      };
      var B = (() => {
        function e(e, t) {
          this._storage = t && t === "session" ? j : !e && I.isSupportLS ? I : new A();
        }
        e.prototype.getItem = function (e) {
          return this._storage.getItem(e);
        };
        e.prototype.setItem = function (e, t) {
          this._storage.setItem(e, t);
        };
        e.prototype.getCookie = function (e, t) {
          return this._storage.getCookie(e, t);
        };
        e.prototype.setCookie = function (e, t, r, i) {
          this._storage.setCookie(e, t, r, i);
        };
        e.prototype.removeItem = function (e) {
          this._storage.removeItem(e);
        };
        return e;
      })();
      var R = (() => {
        function e(e, t, r) {
          this.appid = e;
          this.domain = t;
          this.userAgent = window.navigator.userAgent;
          this.appVersion = window.navigator.appVersion;
          this.cookie_expire = r;
        }
        e.prototype.init = function () {
          var e = window.navigator.userAgent;
          var t = window.navigator.language;
          var r = document.referrer;
          var i = r ? _(r).hostname : "";
          var n = b(window.location.href);
          var o = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(this.appVersion) ? "wap" : "web";
          var s = ((s = window.navigator.connection) == null ? undefined : s.effectiveType) || "";
          this.utm = ((e, t, r, i) => {
            var n = new B(false);
            var o = new B(false, "session");
            var s = e ? "_tea_utm_cache_" + e : "_tea_utm_cache";
            var a = e ? "_$utm_from_url_" + e : "_$utm_from_url";
            var c = {};
            var u = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"];
            var l = {
              ad_id: Number(t.ad_id) || undefined,
              campaign_id: Number(t.campaign_id) || undefined,
              creative_id: Number(t.creative_id) || undefined,
              utm_source: t.utm_source,
              utm_medium: t.utm_medium,
              utm_campaign: t.utm_campaign,
              utm_term: t.utm_term,
              utm_content: t.utm_content,
              tr_shareuser: t.tr_shareuser,
              tr_admaster: t.tr_admaster,
              tr_param1: t.tr_param1,
              tr_param2: t.tr_param2,
              tr_param3: t.tr_param3,
              tr_param4: t.tr_param4
            };
            try {
              var f;
              var h;
              var d = false;
              for (f in l) {
                if (l[f]) {
                  if (u.indexOf(f) !== -1) {
                    if (!c.hasOwnProperty("tracer_data")) {
                      c.tracer_data = {};
                    }
                    c.tracer_data[f] = l[f];
                  } else {
                    c[f] = l[f];
                  }
                  d = true;
                }
              }
              if (d) {
                o.setItem(a, "1");
                n.setCookie(s, JSON.stringify(c), i, r);
              } else if (h = n.getCookie(s, r)) {
                c = JSON.parse(h);
              }
              if (o.getItem(a)) {
                if (!c.hasOwnProperty("tracer_data")) {
                  c.tracer_data = {};
                }
                c.tracer_data.$utm_from_url = 1;
              }
            } catch (e) {
              return l;
            }
            return c;
          })(this.appid, n, this.domain, this.cookie_expire);
          var n = this.browser();
          var a = this.os();
          return {
            browser: n.browser,
            browser_version: n.browser_version,
            platform: o,
            os_name: a.os_name,
            os_version: a.os_version,
            userAgent: e,
            screen_width: window.screen && window.screen.width,
            screen_height: window.screen && window.screen.height,
            device_model: this.getDeviceModel(a.os_name),
            language: t,
            referrer: r,
            referrer_host: i,
            network_type: s,
            utm: this.utm,
            latest_data: this.last(r, i)
          };
        };
        e.prototype.last = function (e, t) {
          var r = "";
          var i = "";
          var n = "";
          var o = location.hostname;
          var s = false;
          if (e && t && o !== t && (i = t, s = true, (o = b(r = e)).keyword)) {
            n = o.keyword;
          }
          return {
            $latest_referrer: r,
            $latest_referrer_host: i,
            $latest_search_keyword: n,
            isLast: s
          };
        };
        e.prototype.browser = function () {
          var e;
          var t = "";
          var r = "" + parseFloat(this.appVersion);
          var i = this.userAgent;
          if (i.indexOf("Edge") !== -1 || i.indexOf("Edg") !== -1) {
            t = "Microsoft Edge";
            r = i.indexOf("Edge") !== -1 ? (e = i.indexOf("Edge"), i.substring(e + 5)) : (e = i.indexOf("Edg"), i.substring(e + 4));
          } else if ((e = i.indexOf("MSIE")) !== -1) {
            t = "Microsoft Internet Explorer";
            r = i.substring(e + 5);
          } else if ((e = i.indexOf("MetaSr")) !== -1) {
            t = "sougoubrowser";
            r = i.substring(e + 7, e + 10);
          } else if (i.indexOf("MQQBrowser") !== -1 || i.indexOf("QQBrowser") !== -1) {
            t = "qqbrowser";
            if (i.indexOf("MQQBrowser") !== -1) {
              e = i.indexOf("MQQBrowser");
              r = i.substring(e + 11, e + 15);
            } else if (i.indexOf("QQBrowser") !== -1) {
              e = i.indexOf("QQBrowser");
              r = i.substring(e + 10, e + 25);
            }
          } else if (i.indexOf("Chrome") !== -1) {
            if ((e = i.indexOf("MicroMessenger")) !== -1) {
              t = "weixin";
              r = i.substring(e + 15, e + 20);
            } else if ((e = i.indexOf("360")) !== -1) {
              t = "360browser";
              r = i.substring(i.indexOf("Chrome") + 7);
            } else if (i.indexOf("baidubrowser") !== -1 || i.indexOf("BIDUBrowser") !== -1) {
              if (i.indexOf("baidubrowser") !== -1) {
                e = i.indexOf("baidubrowser");
                r = i.substring(e + 13, e + 16);
              } else if (i.indexOf("BIDUBrowser") !== -1) {
                e = i.indexOf("BIDUBrowser");
                r = i.substring(e + 12, e + 15);
              }
              t = "baidubrowser";
            } else if ((e = i.indexOf("xiaomi")) !== -1) {
              r = i.indexOf("openlanguagexiaomi") !== -1 ? (t = "openlanguage xiaomi", i.substring(e + 7, e + 13)) : (t = "xiaomi", i.substring(e - 7, e - 1));
            } else if ((e = i.indexOf("TTWebView")) !== -1) {
              t = "TTWebView";
              r = i.substring(e + 10, e + 23);
            } else if ((e = i.indexOf("Chrome")) !== -1 || (e = i.indexOf("Chrome")) !== -1) {
              t = "Chrome";
              r = i.substring(e + 7);
            }
          } else if (i.indexOf("Safari") !== -1) {
            if ((e = i.indexOf("QQ")) !== -1) {
              t = "qqbrowser";
              r = i.substring(e + 10, e + 16);
            } else if ((e = i.indexOf("Safari")) !== -1 && (t = "Safari", r = i.substring(e + 7), (e = i.indexOf("Version")) !== -1)) {
              r = i.substring(e + 8);
            }
          } else if ((e = i.indexOf("Firefox")) !== -1) {
            t = "Firefox";
            r = i.substring(e + 8);
          } else if ((e = i.indexOf("MicroMessenger")) !== -1) {
            t = "weixin";
            r = i.substring(e + 15, e + 20);
          } else if ((e = i.indexOf("QQ")) !== -1) {
            t = "qqbrowser";
            r = i.substring(e + 3, e + 8);
          }
          return {
            browser: t,
            browser_version: r = (i = (r = (i = (r = (i = r.indexOf(";")) !== -1 ? r.substring(0, i) : r).indexOf(" ")) !== -1 ? r.substring(0, i) : r).indexOf(")")) !== -1 ? r.substring(0, i) : r
          };
        };
        e.prototype.os = function () {
          var e = "";
          var t = "";
          var r = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
          }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
          }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
          }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
          }, {
            s: "Windows",
            r: /(Windows|Windows NT)/
          }, {
            s: "Android",
            r: /Android/
          }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
          }, {
            s: "Mac OS X",
            r: /Mac OS X/
          }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
          }, {
            s: "chromeOS",
            r: /CrOS/
          }, {
            s: "OpenHarmony",
            r: /Harmony/
          }, {
            s: "Linux",
            r: /(Linux|X11)/
          }, {
            s: "Sun OS",
            r: /SunOS/
          }];
          var i = 0;
          for (; i < r.length; i++) {
            var n = r[i];
            if (n.r.test(this.userAgent)) {
              if ((e = n.s) === "Mac OS X" && this.isNewIpad()) {
                e = "iOS";
              }
              break;
            }
          }
          function o(e, t) {
            if ((e = e.exec(t)) && e[1]) {
              return e[1];
            } else {
              return "";
            }
          }
          function s(e, t) {
            if (e = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + e + ")", "i").exec(t)) {
              return e.slice(1)[0];
            } else {
              return "";
            }
          }
          if (/Windows/.test(e)) {
            t = o(/Windows (.*)/, e);
            e = "windows";
          }
          switch (e) {
            case "Mac OS X":
              t = s("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent);
              e = "mac";
              break;
            case "Android":
              t = o(/Android ([\.\_\d]+)/, a = this.userAgent) || o(/Android\/([\.\_\d]+)/, a);
              e = "android";
              break;
            case "iOS":
              t = this.isNewIpad() ? s("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent) : (t = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion)) ? t[1] + "." + t[2] + "." + (t[3] | 0) : "";
              e = "ios";
              break;
            case "chromeOS":
              var a = this.userAgent.indexOf("x86_64");
              var t = this.userAgent.substring(a + 7, a + 16);
              break;
            case "OpenHarmony":
              let c;
              t = o(/OpenHarmony\s*([\d\.]+)/, c = this.userAgent) || o(/OpenHarmony\s*([\d\.]+)/, c);
              e = "OpenHarmony";
          }
          return {
            os_name: e,
            os_version: t
          };
        };
        e.prototype.getDeviceModel = function (e) {
          var t;
          var r;
          var i = "";
          try {
            if (e === "android") {
              navigator.userAgent.split(";").forEach(function (e) {
                if (e.indexOf("Build/") > -1) {
                  i = e.slice(0, e.indexOf("Build/"));
                }
              });
            } else if (e === "ios" || e === "mac" || e === "windows") {
              i = this.isNewIpad() ? "iPad" : (r = (t = navigator.userAgent.replace("Mozilla/5.0 (", "")).indexOf(";")) === -1 ? "" : t.slice(0, r);
            }
          } catch (e) {}
          return i.trim();
        };
        e.prototype.isNewIpad = function () {
          return this.userAgent !== undefined && navigator.platform === "MacIntel" && typeof navigator.maxTouchPoints == "number" && navigator.maxTouchPoints > 1;
        };
        return e;
      })();
      var P = {
        cn: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
        va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
        sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
      };
      var U = {
        cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az28z1gz1hz1gz1cz18z1nz1gz4az1az1mz1k",
        sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
        va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
        my: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z19z1bz49z1kz27z4az1jz18z20z1iz1mz1dz1dz1gz1az1cz4az1az1mz1k"
      };
      var M = "5.3.2";
      m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z1cz1bz1gz22z1mz20z49z20z18z1lz1ez1cz20z21z4az1hz21");
      m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z18z19z49z1az1mz20z1cz4az1hz21");
      m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z18z19z49z1jz1mz18z1bz1cz20z4az1hz21");
      m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz1fz1cz18z22z1kz18z1nz49z1az1mz20z1c");
      m("1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz22z1cz21z22z1cz20z49z1cz24z1cz1lz22z49z1gz1lz21z1nz1cz1az22z1mz20");
      ["1fz22z22z1nz21z4mz4bz4bz1bz18z22z18z4az19z27z22z1cz1bz18z1lz1az1cz4az1lz1cz22", "1fz22z22z1nz21z4mz4bz4bz22z1cz18z49z24z18z4az22z1gz1iz22z1mz1iz49z20z1mz25z4az1lz1cz22", "1fz22z22z1nz21z4mz4bz4bz22z1cz18z4az22z1gz1iz22z1mz1iz49z1cz23z4az1lz1cz22", "1fz22z22z1nz21z4mz4bz4bz22z1cz18z4az22z1gz1iz22z1mz1iz49z23z21z22z21z4az1lz1cz22", "1fz22z22z1nz21z4mz4bz4bz1gz1mz49z21z1ez4az22z1gz1iz22z1mz1iz49z20z1mz25z4az1lz1cz22", "1fz22z22z1nz21z4mz4bz4bz1gz1mz49z24z18z4az22z1gz1iz22z1mz1iz49z20z1mz25z4az1lz1cz22"].map(function (e) {
        return m(e);
      });
      var G = (() => {
        function e(e, t) {
          this.collector = e;
          this.config = t;
          this.eventNameWhiteList = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "__bav_slide"];
          this.paramsNameWhiteList = ["$inactive", "$inline", "$target_uuid_list", "$source_uuid", "$is_spider", "$source_id", "$is_first_time", "_staging_flag"];
          this.regStr = RegExp("^[a-zA-Z0-9][a-z0-9A-Z_.-]{1,255}$");
        }
        e.prototype.checkVerify = function (e) {
          var t;
          var r;
          var i;
          var n = this;
          return !!e && !!e.length && !!(e = e[0]) && !!(t = e.events, r = e.header, t) && !!t.length && (i = true, t.forEach(function (e) {
            if (e) {
              if (!n.checkEventName(e.event)) {
                i = false;
                e.checkEvent = "事件名不能以 $ or __开头";
              }
              if (!n.checkEventParams(e.params)) {
                i = false;
                e.checkParams = "属性名不能以 $ or __开头";
              }
            } else {
              i = false;
              e.checkEvent = "事件异常";
            }
          }), i = !!this.checkEventParams(r) && i);
        };
        e.prototype.checkEventName = function (e) {
          return !!e && this.calculate(e, "event");
        };
        e.prototype.checkEventParams = function (e) {
          var t = e;
          if (typeof e == "string") {
            t = JSON.parse(t);
          }
          if (Object.keys(t).length) {
            for (var r in t) {
              return !!this.calculate(r, "params") && (typeof t[r] != "string" || !(t[r].length > 1024));
            }
          }
          return true;
        };
        e.prototype.calculate = function (e, t) {
          return (t === "event" ? this.eventNameWhiteList : this.paramsNameWhiteList).indexOf(e) !== -1 || !RegExp("^\\$").test(e) && !RegExp("^__").test(e);
        };
        return e;
      })();
      (x = eG = eG || {}).Init = "init";
      x.Config = "config";
      x.Start = "start";
      x.Ready = "ready";
      x.UnReady = "un-ready";
      x.TokenComplete = "token-complete";
      x.TokenStorage = "token-storage";
      x.TokenFetch = "token-fetch";
      x.TokenError = "token-error";
      x.ConfigUuid = "config-uuid";
      x.ConfigWebId = "config-webid";
      x.ConfigDiD = "config-device-id";
      x.ConfigDomain = "config-domain";
      x.CustomWebId = "custom-webid";
      x.TokenChange = "token-change";
      x.TokenReset = "token-reset";
      x.ConfigTransform = "config-transform";
      x.EnvTransform = "env-transform";
      x.SessionReset = "session-reset";
      x.SessionResetTime = "session-reset-time";
      x.SetSessionId = "set-session-id";
      x.Event = "event";
      x.Events = "events";
      x.EventNow = "event-now";
      x.CleanEvents = "clean-events";
      x.BeconEvent = "becon-event";
      x.SubmitBefore = "submit-before";
      x.SubmitScuess = "submit-scuess";
      x.SubmitAfter = "submit-after";
      x.SubmitError = "submit-error";
      x.SubmitVerify = "submit-verify";
      x.CustomHeader = "custom-request-header";
      x.SDKInnerError = "sdk-inner-error";
      x.SDKRunTimeError = "sdk-run-time-error";
      x.LogSetting = "log-setting";
      x.LogSettingReady = "log-setting-ready";
      x.Stay = "stay";
      x.ResetStay = "reset-stay";
      x.StayReady = "stay-ready";
      x.SetStay = "set-stay";
      x.RouteChange = "route-change";
      x.RouteReady = "route-ready";
      x.Ab = "ab";
      x.AbVar = "ab-var";
      x.AbAllVars = "ab-all-vars";
      x.AbConfig = "ab-config";
      x.AbExternalVersion = "ab-external-version";
      x.AbVersionChangeOn = "ab-version-change-on";
      x.AbVersionChangeOff = "ab-version-change-off";
      x.AbOpenLayer = "ab-open-layer";
      x.AbCloseLayer = "ab-close-layer";
      x.AbReady = "ab-ready";
      x.AbComplete = "ab-complete";
      x.AbTimeout = "ab-timeout";
      x.Profile = "profile";
      x.ProfileSet = "profile-set";
      x.ProfileSetOnce = "profile-set-once";
      x.ProfileUnset = "profile-unset";
      x.ProfileIncrement = "profile-increment";
      x.ProfileAppend = "profile-append";
      x.ProfileClear = "profile-clear";
      x.Autotrack = "autotrack";
      x.AutotrackReady = "autotrack-ready";
      x.CepReady = "cep-ready";
      x.TracerReady = "tracer-ready";
      x.sessionRecord = "session-record";
      x.SessionRecordStart = "session-record-start";
      x.SessionRecordPause = "session-record-pause";
      x.SessionRecordEnd = "session-record-end";
      x.SessionRecordReport = "session-record-report";
      x.DestoryInstance = "destory-instance";
      x.VisualCollectReady = "visual-collect-ready";
      x.VisualApiReady = "visual-api-ready";
      x.VisualApiUpdate = "visual-api-update";
      (E = D = D || {}).DEBUGGER_MESSAGE = "debugger-message";
      E.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk";
      E.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch";
      E.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result";
      E.DEBUGGER_MESSAGE_EVENT = "debugger-message-event";
      E.DEVTOOL_WEB_READY = "devtool-web-ready";
      var F = eG;
      var N = undefined;
      var t = new Date().getTimezoneOffset();
      var H = parseInt("" + -t / 60, 10);
      var L = t * 60;
      var K = (() => {
        function e(e, t) {
          var r = this;
          this.is_first_time = true;
          this.configPersist = false;
          this.initConfig = t;
          this.collect = e;
          var i = new R(t.app_id, t.cookie_domain || "", t.cookie_expire || 7776000000).init();
          this.eventCheck = new G(e, t);
          var e = "__tea_cache_first_" + t.app_id;
          this.configKey = "__tea_cache_config_" + t.app_id;
          this.sessionStorage = new B(false, "session");
          this.localStorage = new B(false, "local");
          if (t.configPersist) {
            this.configPersist = true;
            this.storage = t.configPersist === 1 ? this.sessionStorage : this.localStorage;
          }
          var t = this.localStorage.getItem(e);
          if (t && t == 1) {
            this.is_first_time = false;
          } else {
            this.is_first_time = true;
            this.localStorage.setItem(e, "1");
          }
          this.envInfo = {
            user: {
              user_unique_id: N,
              user_type: N,
              user_id: N,
              user_is_auth: N,
              user_is_login: N,
              device_id: N,
              web_id: N,
              ip_addr_id: N,
              user_unique_id_type: N
            },
            header: {
              app_id: N,
              app_name: N,
              app_install_id: N,
              install_id: N,
              app_package: N,
              app_channel: N,
              app_version: N,
              ab_version: N,
              os_name: i.os_name,
              os_version: i.os_version,
              device_model: i.device_model,
              ab_client: N,
              traffic_type: N,
              client_ip: N,
              device_brand: N,
              os_api: N,
              access: N,
              language: i.language,
              region: N,
              app_language: N,
              app_region: N,
              creative_id: i.utm.creative_id,
              ad_id: i.utm.ad_id,
              campaign_id: i.utm.campaign_id,
              log_type: N,
              rnd: N,
              platform: i.platform,
              sdk_version: M,
              sdk_lib: "js",
              province: N,
              city: N,
              timezone: H,
              tz_offset: L,
              tz_name: N,
              sim_region: N,
              carrier: N,
              resolution: i.screen_width + "x" + i.screen_height,
              browser: i.browser,
              browser_version: i.browser_version,
              referrer: i.referrer,
              referrer_host: i.referrer_host,
              width: i.screen_width,
              height: i.screen_height,
              screen_width: i.screen_width,
              screen_height: i.screen_height,
              utm_term: i.utm.utm_term,
              utm_content: i.utm.utm_content,
              utm_source: i.utm.utm_source,
              utm_medium: i.utm.utm_medium,
              utm_campaign: i.utm.utm_campaign,
              tracer_data: JSON.stringify(i.utm.tracer_data),
              custom: i.network_type ? {
                network_type: i.network_type
              } : {},
              wechat_unionid: N,
              wechat_openid: N
            }
          };
          this.ab_version = "";
          this.evtParams = {};
          this.reportErrorCallback = function () {};
          this.isLast = false;
          this.setCustom(i);
          this.initDomain();
          this.initABData();
          this.collect.on("route-change", function (e) {
            r.changeReferInfo(e.config);
          });
        }
        e.prototype.initDomain = function () {
          var e = this.initConfig.channel_domain;
          if (e) {
            this.domain = e;
          } else {
            e = this.initConfig.channel;
            this.domain = m(U[e]);
          }
        };
        e.prototype.setDomain = function (e) {
          this.domain = e;
        };
        e.prototype.getDomain = function () {
          return this.domain;
        };
        e.prototype.initABData = function () {
          var e;
          var t = "__tea_sdk_ab_version_" + this.initConfig.app_id;
          var r = null;
          r = this.initConfig.ab_cross ? (e = this.localStorage.getCookie(t, this.initConfig.ab_cookie_domain)) ? JSON.parse(e) : null : this.localStorage.getItem(t);
          this.setAbCache(r);
        };
        e.prototype.setAbCache = function (e) {
          this.ab_cache = e;
        };
        e.prototype.getAbCache = function () {
          return this.ab_cache;
        };
        e.prototype.setAbVersion = function (e) {
          this.ab_version = e;
        };
        e.prototype.getAbVersion = function () {
          return this.ab_version;
        };
        e.prototype.clearAbCache = function () {
          this.ab_version = "";
          this.ab_cache = {};
        };
        e.prototype.getUrl = function (e) {
          var t = "";
          switch (e) {
            case "event":
              t = "/list";
              break;
            case "webid":
              t = "/webid";
              break;
            case "tobid":
              t = "/tobid";
          }
          e = "";
          if (this.initConfig.caller) {
            e = "?sdk_version=5.3.2&sdk_name=web&app_id=" + this.initConfig.app_id + "&caller=" + this.initConfig.caller;
          }
          return "" + this.getDomain() + t + e;
        };
        e.prototype.setCustom = function (e) {
          if (e && e.latest_data && e.latest_data.isLast) {
            delete e.latest_data.isLast;
            this.isLast = true;
            for (var t in e.latest_data) {
              this.envInfo.header.custom[t] = e.latest_data[t];
            }
          }
        };
        e.prototype.changeReferInfo = function (e) {
          this.envInfo.header.referrer = e.referrer;
          var t = "";
          try {
            t = new URL(e.referrer).host;
          } catch (e) {}
          this.envInfo.header.referrer_host = t || this.envInfo.header.referrer_host;
        };
        e.prototype.set = function (e) {
          var t = this;
          Object.keys(e).forEach(function (r) {
            var i;
            var n;
            var o;
            if (e[r] == null) {
              t.delete(r);
            }
            try {
              t.eventCheck.calculate(r, "config");
            } catch (e) {}
            if (r === "traffic_type" && t.isLast) {
              t.envInfo.header.custom.$latest_traffic_source_type = e[r];
            }
            if (r === "evtParams") {
              t.evtParams = d(d({}, t.evtParams || {}), e.evtParams || {});
            } else if (r === "_staging_flag") {
              t.evtParams = d(d({}, t.evtParams || {}), {
                _staging_flag: e._staging_flag
              });
            } else if (r === "reportErrorCallback" && typeof e[r] == "function") {
              t.reportErrorCallback = e[r];
            } else {
              o = n = "";
              if (r.indexOf(".") > -1) {
                n = (i = r.split("."))[0];
                o = i[1];
              }
              if (n) {
                if (n === "user" || n === "header") {
                  t.envInfo[n][o] = e[r];
                } else {
                  t.envInfo.header.custom[o] = e[r];
                  t.collect.emit(D.DEBUGGER_MESSAGE, {
                    type: D.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 添加了Custom",
                    level: "info",
                    time: Date.now(),
                    infoType: "sdk",
                    secType: "HEADER",
                    common: "custom"
                  });
                }
              } else if (Object.hasOwnProperty.call(t.envInfo.user, r)) {
                if (["user_type", "ip_addr_id"].indexOf(r) > -1) {
                  t.envInfo.user[r] = e[r] && Number(e[r]);
                } else if (["user_id", "web_id", "user_unique_id", "user_unique_id_type"].indexOf(r) > -1) {
                  t.envInfo.user[r] = e[r] && String(e[r]);
                } else if (["user_is_auth", "user_is_login"].indexOf(r) > -1) {
                  t.envInfo.user[r] = !!e[r];
                } else if (r === "device_id") {
                  t.envInfo.user[r] = e[r];
                }
                t.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK 修改了公共参数",
                  level: "info",
                  time: Date.now(),
                  infoType: "sdk",
                  secType: "USER",
                  common: r
                });
              } else if (Object.hasOwnProperty.call(t.envInfo.header, r)) {
                t.envInfo.header[r] = e[r];
                t.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK 修改了公共参数",
                  level: "info",
                  time: Date.now(),
                  infoType: "sdk",
                  secType: "HEADER",
                  common: r
                });
              } else {
                t.envInfo.header.custom[r] = e[r];
                t.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK 添加了Custom",
                  level: "info",
                  time: Date.now(),
                  infoType: "sdk",
                  secType: "HEADER",
                  common: "custom"
                });
              }
            }
          });
        };
        e.prototype.get = function (e) {
          try {
            if (e) {
              if (e === "evtParams") {
                return this.evtParams;
              } else if (e === "reportErrorCallback") {
                return this[e];
              } else if (Object.hasOwnProperty.call(this.envInfo.user, e)) {
                return this.envInfo.user[e];
              } else if (Object.hasOwnProperty.call(this.envInfo.header, e)) {
                return this.envInfo.header[e];
              } else {
                return JSON.parse(JSON.stringify(this.envInfo[e]));
              }
            } else {
              return JSON.parse(JSON.stringify(this.envInfo));
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.setStore = function (e) {
          try {
            var t;
            var r;
            if (this.configPersist && (t = this.storage.getItem(this.configKey) || {}) && Object.keys(e).length) {
              r = Object.assign(e, t);
              this.storage.setItem(this.configKey, r);
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.getStore = function () {
          try {
            var e;
            if (this.configPersist && (e = this.storage.getItem(this.configKey) || {}, Object.keys(e).length)) {
              return e;
            } else {
              return null;
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
            return null;
          }
        };
        e.prototype.delete = function (e) {
          try {
            var t;
            if (this.configPersist && (t = this.storage.getItem(this.configKey) || {}) && Object.hasOwnProperty.call(t, e)) {
              delete t[e];
              this.storage.setItem(this.configKey, t);
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        return e;
      })();
      var q = (() => {
        function e(e, t) {
          this.isLog = t || false;
          this.name = e || "";
        }
        e.prototype.info = function (e) {
          this.isLog;
        };
        e.prototype.warn = function (e) {
          this.isLog;
        };
        e.prototype.error = function (e) {
          this.isLog;
        };
        e.prototype.throw = function (e) {
          this.error(this.name);
          throw Error(e);
        };
        return e;
      })();
      var W = (() => {
        function e() {
          this.spiderBot = ["Baiduspider", "googlebot", "360Spider", "haosouspider", "YoudaoBot", "Sogou News Spider", "Yisouspider", "Googlebot", "Headless", "Applebot", "Bingbot", "PetalBot"];
        }
        e.prototype.checkSpider = function (e) {
          var t;
          var r;
          return !!e.enable_spider && (!(t = window.navigator.userAgent) || (r = false, this.spiderBot.forEach(function (e) {
            if (t.indexOf(e) !== -1) {
              r = true;
            }
          }), r));
        };
        return e;
      })();
      var V = (() => {
        function e(e, t) {
          this.collect = e;
          this.native = t;
        }
        var t = e.prototype;
        t.bridgeInject = function () {
          try {
            return !!this.native && !!AppLogBridge;
          } catch (e) {
            return false;
          }
        };
        t.bridgeReady = function () {
          var e = this;
          return new Promise(function (t, r) {
            try {
              if (e.bridgeInject()) {
                AppLogBridge.hasStarted(function (e) {
                  if (e) {
                    t(true);
                  } else {
                    r(false);
                  }
                });
              } else {
                r(false);
              }
            } catch (e) {
              r(false);
            }
          });
        };
        t.setNativeAppId = function (e) {
          try {
            AppLogBridge.setNativeAppId(JSON.stringify(e));
          } catch (e) {}
        };
        t.setConfig = function (e) {
          var t = this;
          try {
            Object.keys(e).forEach(function (r) {
              if (r === "user_unique_id") {
                t.setUserUniqueId(e[r]);
              } else if (e[r]) {
                t.addHeaderInfo(r, e[r]);
              } else {
                t.removeHeaderInfo(r);
              }
            });
          } catch (e) {}
        };
        t.setUserUniqueId = function (e) {
          try {
            AppLogBridge.setUserUniqueId(e);
          } catch (e) {}
        };
        t.addHeaderInfo = function (e, t) {
          try {
            AppLogBridge.addHeaderInfo(e, t);
          } catch (e) {}
        };
        t.setHeaderInfo = function (e) {
          try {
            AppLogBridge.setHeaderInfo(JSON.stringify(e));
          } catch (e) {}
        };
        t.removeHeaderInfo = function (e) {
          try {
            AppLogBridge.removeHeaderInfo(e);
          } catch (e) {}
        };
        t.reportPv = function (e) {
          this.onEventV3("predefine_pageview", e);
        };
        t.onEventV3 = function (e, t) {
          try {
            AppLogBridge.onEventV3(e, t);
            this.collect.emit(DebuggerMesssge.DEBUGGER_MESSAGE, {
              type: DebuggerMesssge.DEBUGGER_MESSAGE_EVENT,
              info: "bridge埋点上报",
              time: Date.now(),
              data: [{
                events: [{
                  event: e,
                  params: t
                }]
              }],
              code: 200,
              status: "success"
            });
          } catch (e) {}
        };
        t.profileSet = function (e) {
          try {
            AppLogBridge.profileSet(e);
          } catch (e) {}
        };
        t.profileSetOnce = function (e) {
          try {
            AppLogBridge.profileSetOnce(e);
          } catch (e) {}
        };
        t.profileIncrement = function (e) {
          try {
            AppLogBridge.profileIncrement(e);
          } catch (e) {}
        };
        t.profileUnset = function (e) {
          try {
            AppLogBridge.profileUnset(e);
          } catch (e) {}
        };
        t.profileAppend = function (e) {
          try {
            AppLogBridge.profileAppend(e);
          } catch (e) {}
        };
        return e;
      })();
      var J = (() => {
        function e() {}
        e.prototype.apply = function (e, t) {
          var r = this;
          this.collect = e;
          this.storage = new B(false, "session");
          this.sessionKey = "__tea_session_id_" + t.app_id;
          this.expireTime = t.expireTime || 1800000;
          this.disableSession = t.disable_session;
          this.disableSessionTimeCheck = t.disable_session_check;
          if (!this.disableSession) {
            this.setSessionId();
            this.collect.on(F.SessionReset, function (e) {
              r.resetSessionId(e);
            });
            this.collect.on(F.SessionResetTime, function () {
              r.updateSessionIdTime();
            });
          }
        };
        e.prototype.updateSessionIdTime = function () {
          var e;
          var t = this.storage.getItem(this.sessionKey);
          if (t && t.sessionId) {
            e = t.timestamp;
            if (Date.now() - e > this.expireTime) {
              t = {
                sessionId: w(),
                timestamp: Date.now()
              };
            } else {
              t.timestamp = Date.now();
            }
            this.storage.setItem(this.sessionKey, t);
            this.resetExpTime();
          }
        };
        e.prototype.setSessionId = function () {
          var e = this;
          var t = this.storage.getItem(this.sessionKey);
          if (t && t.sessionId) {
            t.timestamp = Date.now();
          } else {
            t = {
              sessionId: w(),
              timestamp: Date.now()
            };
          }
          this.storage.setItem(this.sessionKey, t);
          if (!this.disableSessionTimeCheck) {
            this.sessionExp = setInterval(function () {
              e.checkEXp();
            }, this.expireTime);
          }
        };
        e.prototype.getSessionId = function () {
          var e = this.storage.getItem(this.sessionKey);
          if (!this.disableSession && e && e.sessionId) {
            return e.sessionId;
          } else {
            return "";
          }
        };
        e.prototype.resetExpTime = function () {
          var e = this;
          if (this.sessionExp) {
            clearInterval(this.sessionExp);
            this.sessionExp = setInterval(function () {
              e.checkEXp();
            }, this.expireTime);
          }
        };
        e.prototype.resetSessionId = function (e) {
          e = {
            sessionId: e || w(),
            timestamp: Date.now()
          };
          this.storage.setItem(this.sessionKey, e);
        };
        e.prototype.checkEXp = function () {
          var e = this.storage.getItem(this.sessionKey);
          if (e && e.sessionId && Date.now() - e.timestamp + 30 >= this.expireTime) {
            e = {
              sessionId: w(),
              timestamp: Date.now()
            };
            this.storage.setItem(this.sessionKey, e);
          }
        };
        return e;
      })();
      var Z = (() => {
        function e() {
          this.eventLimit = 50;
          this.enable_ttwebid = false;
          this.eventCache = [];
          this.beconEventCache = [];
        }
        e.prototype.apply = function (e, t) {
          var r = this;
          this.collect = e;
          this.config = t;
          this.configManager = e.configManager;
          this.eventCheck = new G(e, t);
          this.cacheStorgae = new B(true);
          this.localStorage = new B(false);
          this.maxReport = t.max_report || 10;
          this.reportTime = t.reportTime || t.report_time || 30;
          this.timeout = t.timeout || 100000;
          this.enable_ttwebid = t.enable_ttwebid;
          this.reportUrl = t.report_url || this.configManager.getUrl("event");
          this.eventKey = "__tea_cache_events_" + this.configManager.get("app_id");
          this.beconKey = "__tea_cache_events_becon_" + this.configManager.get("app_id");
          this.abKey = "__tea_sdk_ab_version_" + this.configManager.get("app_id");
          this.refer_key = "__tea_cache_refer_" + this.configManager.get("app_id");
          this.pageId = w();
          this.collect.on(F.Ready, function () {
            r.reportAll(false);
          });
          this.collect.on(F.ConfigDomain, function () {
            r.reportUrl = r.configManager.getUrl("event");
          });
          this.collect.on(F.Event, function (e) {
            r.event(e);
          });
          this.collect.on(F.BeconEvent, function (e) {
            r.beconEvent(e);
          });
          this.collect.on(F.CleanEvents, function () {
            r.reportAll(false);
          });
          var i = this.linster();
          this.collect.on(F.DestoryInstance, function () {
            if (i) {
              i();
            }
          });
        };
        e.prototype.linster = function () {
          function e() {
            r.reportAll(true);
          }
          function t() {
            if (document.visibilityState === "hidden") {
              r.reportAll(true);
            }
          }
          var r = this;
          window.addEventListener("unload", e, false);
          if (y()) {
            window.addEventListener("pagehide", e, false);
          } else {
            window.addEventListener("beforeunload", e, false);
          }
          document.addEventListener("visibilitychange", t, false);
          return function () {
            window.removeEventListener("unload", e);
            window.removeEventListener("pagehide", e, false);
            window.removeEventListener("beforeunload", e, false);
            document.removeEventListener("visibilitychange", t, false);
          };
        };
        e.prototype.reportAll = function (e) {
          this.report(e);
          this.reportBecon();
        };
        e.prototype.event = function (e) {
          var t;
          var r;
          var i;
          var n;
          var o = this;
          try {
            if (!this.collect.destroy && !this.collect.sdkStop) {
              if (this.config.enable_ios_sendbeacon && y()) {
                this.beconEvent(e);
              } else {
                t = this.cacheStorgae.getItem(this.eventKey) || [];
                r = e;
                i = p(r = this.config.batch_event ? this.batchEvent(e) : r, t);
                this.cacheStorgae.setItem(this.eventKey, i);
                if (this.reportTimeout) {
                  clearTimeout(this.reportTimeout);
                }
                if (i.length >= this.maxReport) {
                  this.report(false);
                } else {
                  n = this.reportTime;
                  this.reportTimeout = setTimeout(function () {
                    o.report(false);
                    o.reportTimeout = null;
                  }, n);
                }
              }
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message,
              infoType: "sdk"
            });
          }
        };
        e.prototype.beconEvent = function (e) {
          if (!this.collect.destroy && !this.collect.sdkStop) {
            e = p(e, this.cacheStorgae.getItem(this.beconKey) || []);
            this.cacheStorgae.setItem(this.beconKey, e);
            if (this.collect.tokenManager.getReady() && this.collect.sdkReady) {
              this.cacheStorgae.removeItem(this.beconKey);
              this.send(this.split(this.merge(e)), true);
            }
          }
        };
        e.prototype.reportBecon = function () {
          var e;
          if (!this.collect.destroy && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady && (e = this.cacheStorgae.getItem(this.beconKey) || []) && e.length) {
            this.cacheStorgae.removeItem(this.beconKey);
            this.send(this.split(this.merge(e)), true);
          }
        };
        e.prototype.report = function (e) {
          var t;
          if (!this.collect.destroy && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady && (t = this.cacheStorgae.getItem(this.eventKey) || []).length) {
            this.cacheStorgae.removeItem(this.eventKey);
            if (this.config.batch_event) {
              this.send([t], e);
            } else {
              this.sliceEvent(t, e);
            }
          }
        };
        e.prototype.batchEvent = function (e) {
          var t = [];
          if (e.length > this.eventLimit) {
            for (var r = 0; r < e.length; r += this.eventLimit) {
              var i = e.slice(r, r + this.eventLimit);
              var n = this.merge(i);
              t.push(n);
            }
          } else {
            t = n = this.merge(e);
          }
          return t;
        };
        e.prototype.sliceEvent = function (e, t) {
          if (e.length > this.eventLimit) {
            for (var r = 0; r < e.length; r += this.eventLimit) {
              var i = e.slice(r, r + this.eventLimit);
              var n = this.split(this.merge(i));
              this.send(n, t);
            }
          } else {
            n = this.split(this.merge(e));
            this.send(n, t);
          }
        };
        e.prototype.handleRefer = function () {
          var e;
          var t = "";
          try {
            t = (this.config.spa || this.config.autotrack) && (e = this.localStorage.getItem(this.refer_key) || {}).routeChange ? e.refer_key : this.configManager.get("referrer");
          } catch (e) {
            t = document.referrer;
          }
          return t;
        };
        e.prototype.merge = function (e, t) {
          var r = this;
          var i = this.configManager.get();
          var n = i.header;
          var o = i.user;
          if (this.config.enable_pageid) {
            n.custom.page_id = this.pageId;
          }
          n.custom = JSON.stringify(n.custom);
          var s = this.configManager.get("evtParams");
          var a = this.configManager.get("user_unique_id_type");
          var i = [];
          try {
            var c = e.filter(function (e) {
              try {
                if (Object.keys(s).length && !t) {
                  e.params = d(d({}, s), e.params);
                }
                if (a) {
                  e.params.$user_unique_id_type = a;
                }
                var i = r.configManager.getAbCache();
                var n = o[r.config.ab_user_mode] || o.user_unique_id;
                if (i && i.uuid && i.uuid === n && r.configManager.getAbVersion()) {
                  e.ab_sdk_version = r.configManager.getAbVersion();
                }
                e.session_id = r.collect.sessionManager.getSessionId();
                e.params = JSON.stringify(e.params);
                return e;
              } catch (e) {
                r.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK 处理Event数据异常",
                  level: "error",
                  time: Date.now(),
                  data: e.message,
                  infoType: "sdk"
                });
                return false;
              }
            });
            var u = JSON.parse(JSON.stringify({
              events: c,
              user: o,
              header: n
            }));
            u.local_time = Math.floor(Date.now() / 1000);
            u.user_unique_type = this.config.enable_ttwebid ? this.config.user_unique_type : undefined;
            u.verbose = 1;
            i.push(u);
          } catch (e) {}
          return i;
        };
        e.prototype.split = function (e) {
          return e.map(function (e) {
            var t = [];
            t.push(e);
            return t;
          });
        };
        e.prototype.blockEvent = function (e) {
          try {
            var t;
            var r;
            var i = this.blockList;
            if (this.config.enable_logsetting) {
              t = this.blockList;
              r = this.logSetting.getSettingData("blocklist_events").block_event;
              i = t.concat(r.filter(function (e) {
                return t.indexOf(e) === -1;
              }));
            }
            return !i || !i.length || !i.includes(e);
          } catch (e) {
            return true;
          }
        };
        e.prototype.whiteEvent = function (e) {
          var t;
          try {
            return (t = this.whiteList) == null || !t.length || !!this.whiteList.includes(e);
          } catch (e) {
            return true;
          }
        };
        e.prototype.customAllowFilter = function (e, t) {
          try {
            if (t || !this.config.enable_logsetting || !this.config.enable_logsetting_header_custom) {
              return JSON.stringify(e);
            }
            var r = this.logSetting.getSettingData().header_custom_allow;
            var i = {};
            if (r && r.length && Object.keys(e).length) {
              var n;
              var o = new Set(r);
              for (n in e) {
                if (o.has(n)) {
                  i[n] = e[n];
                }
              }
            }
            return JSON.stringify(i);
          } catch (t) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行customAllowFilter发生了异常",
              level: "error",
              time: Date.now(),
              data: t.message,
              infoType: "sdk"
            });
            return JSON.stringify(e);
          }
        };
        e.prototype.paramsAllowFilter = function (e, t) {
          try {
            if (!t && this.config.enable_logsetting && this.config.enable_logsetting_params) {
              var r = this.logSetting.getSettingData().params_block;
              var i = e.event;
              var n = e.params;
              var o = {};
              if (r && r[i] && r[i].length) {
                var s;
                var a = new Set(r[i]);
                for (s in n) {
                  if (!!this.logSetting.getPredefineParamsList().has(s) || !a.has(s)) {
                    o[s] = n[s];
                  }
                }
                return JSON.stringify(o);
              }
            }
            return JSON.stringify(e.params);
          } catch (t) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行paramsAllowFilter发生了异常",
              level: "error",
              time: Date.now(),
              data: t.message,
              infoType: "sdk"
            });
            return JSON.stringify(e.params);
          }
        };
        e.prototype.send = function (e, t) {
          var r = this;
          if (e.length && !this.config.disable_track_event) {
            e.forEach(function (e) {
              try {
                var i;
                var n = JSON.parse(JSON.stringify(e));
                if (r.config.filter) {
                  n = r.config.filter(n);
                }
                if (r.collect.eventFilter && n) {
                  n = r.collect.eventFilter(n);
                }
                var o = n || e;
                var s = JSON.parse(JSON.stringify(o));
                r.eventCheck.checkVerify(s);
                if (o.length) {
                  i = true;
                  o.forEach(function (e) {
                    if (!e.events.length) {
                      i = false;
                    }
                  });
                  if (i) {
                    r.collect.emit(F.SubmitBefore, o);
                    r.collect.requestManager.useRequest({
                      url: r.reportUrl,
                      data: o,
                      success: function (e, t) {
                        if (e && e.e !== 0) {
                          r.collect.emit(F.SubmitError, {
                            type: "f_data",
                            eventData: t,
                            errorCode: e.e,
                            response: e
                          });
                          r.collect.emit(D.DEBUGGER_MESSAGE, {
                            type: D.DEBUGGER_MESSAGE_EVENT,
                            info: "埋点上报失败",
                            time: Date.now(),
                            data: s,
                            code: e.e,
                            msg: e.m || "",
                            failType: "数据异常失败",
                            status: "fail"
                          });
                        } else {
                          r.collect.emit(F.SubmitScuess, {
                            eventData: t,
                            res: e
                          });
                          r.collect.emit(D.DEBUGGER_MESSAGE, {
                            type: D.DEBUGGER_MESSAGE_EVENT,
                            info: "埋点上报成功",
                            time: Date.now(),
                            data: s,
                            code: 200,
                            status: "success"
                          });
                        }
                      },
                      fail: function (e, t) {
                        r.configManager.get("reportErrorCallback")(e, t);
                        r.collect.emit(F.SubmitError, {
                          type: "f_net",
                          eventData: e,
                          errorCode: t
                        });
                        r.collect.emit(D.DEBUGGER_MESSAGE, {
                          type: D.DEBUGGER_MESSAGE_EVENT,
                          info: "埋点上报网络异常",
                          time: Date.now(),
                          data: s,
                          code: t,
                          failType: "网络异常失败",
                          status: "fail"
                        });
                      },
                      timeout: r.timeout,
                      useBeacon: t,
                      withCredentials: r.enable_ttwebid,
                      zip: true
                    });
                    r.collect.emit(F.SubmitAfter, o);
                  }
                }
              } catch (e) {
                r.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK发送埋点发生了异常",
                  level: "error",
                  time: Date.now(),
                  data: e.message,
                  infoType: "sdk"
                });
              }
            });
          }
        };
        return e;
      })();
      var X = (() => {
        function e() {
          this.cacheToken = {};
          this.enableCookie = false;
          this.enable_ttwebid = false;
          this.enableCustomWebid = false;
        }
        e.prototype.apply = function (e, t) {
          var r = this;
          this.collect = e;
          this.config = t;
          this.configManager = this.collect.configManager;
          this.storage = new B(false);
          this.tokenKey = "__tea_cache_tokens_" + t.app_id;
          this.enable_ttwebid = t.enable_ttwebid;
          this.enableCustomWebid = t.enable_custom_webid;
          this.collect.on(F.ConfigUuid, function (e) {
            r.setUuid(e);
          });
          this.collect.on(F.ConfigWebId, function (e) {
            r.setWebId(e);
          });
          this.collect.on(F.ConfigDiD, function (e) {
            r.setDeviceId(e);
          });
          this.enableCookie = t.cross_subdomain;
          this.expiresTime = t.cookie_expire || 604800000;
          this.cookieDomain = t.cookie_domain || "";
          this.checkStorage();
        };
        e.prototype.checkStorage = function () {
          var e;
          var t = this;
          if (this.enableCookie) {
            e = this.storage.getCookie(this.tokenKey, this.cookieDomain);
            this.cacheToken = e && typeof e == "string" ? JSON.parse(e) : {};
          } else {
            this.cacheToken = this.storage.getItem(this.tokenKey) || {};
          }
          this.tokenType = this.cacheToken && this.cacheToken._type_ ? this.cacheToken._type_ : "default";
          if (this.tokenType !== "custom" || this.enableCustomWebid) {
            if (this.enableCustomWebid) {
              this.collect.on(F.CustomWebId, function () {
                t.tokenReady = true;
                t.collect.emit(F.TokenComplete);
              });
            } else if (!this.checkEnv()) {
              if (this.enable_ttwebid) {
                this.completeTtWid(this.cacheToken);
              } else {
                this.check();
              }
            }
          } else {
            this.remoteWebid();
          }
        };
        e.prototype.check = function () {
          if (this.cacheToken && this.cacheToken.web_id) {
            this.complete(this.cacheToken);
          } else if (this.config.disable_webid) {
            this.complete({
              web_id: k(),
              user_unique_id: this.configManager.get("user_unique_id") || k()
            });
          } else {
            this.remoteWebid();
          }
        };
        e.prototype.checkEnv = function () {
          var e = window.navigator.userAgent;
          return (e.indexOf("miniProgram") !== -1 || e.indexOf("MiniProgram") !== -1) && !!(e = b(window.location.href)) && !!e.Web_ID && !(this.complete({
            web_id: "" + e.Web_ID,
            user_unique_id: this.configManager.get("user_unique_id") || "" + e.Web_ID
          }), 0);
        };
        e.prototype.remoteWebid = function () {
          var e = this;
          var t = this.configManager.getUrl("webid");
          var r = {
            app_key: this.config.app_key,
            app_id: this.config.app_id,
            url: location.href,
            user_agent: window.navigator.userAgent,
            referer: document.referrer,
            user_unique_id: ""
          };
          this.collect.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 发起WebID请求",
            logType: "fetch",
            level: "info",
            time: Date.now(),
            data: r,
            infoType: "sdk"
          });
          this.collect.requestManager.useRequest({
            url: t,
            data: r,
            success: function (t) {
              var r;
              var i;
              if (t && t.e === 0) {
                i = t.web_id;
                e.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "WebID请求成功",
                  logType: "fetch",
                  level: "info",
                  time: Date.now(),
                  data: t,
                  infoType: "sdk"
                });
              } else {
                r = k();
                e.collect.configManager.set({
                  localWebId: i = r
                });
                e.collect.emit(F.TokenError);
                e.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "WebID请求返回值异常，采用本地生成",
                  logType: "fetch",
                  level: "warn",
                  time: Date.now(),
                  data: t,
                  infoType: "sdk"
                });
                e.collect.logger.warn("appid: " + e.config.app_id + " get webid error, use local webid~");
              }
              e.complete({
                web_id: e.configManager.get("web_id") || i,
                user_unique_id: e.configManager.get("user_unique_id") || i
              });
            },
            fail: function () {
              var t = k();
              e.complete({
                web_id: e.configManager.get("web_id") || t,
                user_unique_id: e.configManager.get("user_unique_id") || t
              });
              e.collect.configManager.set({
                localWebId: t
              });
              e.collect.emit(F.TokenError);
              e.collect.emit(D.DEBUGGER_MESSAGE, {
                type: D.DEBUGGER_MESSAGE_SDK,
                info: "WebID请求网络异常，采用本地生成",
                logType: "fetch",
                level: "error",
                time: Date.now(),
                data: {
                  localWebId: t
                },
                infoType: "sdk"
              });
              e.collect.logger.warn("appid: " + e.config.app_id + ", get webid error, use local webid~");
            },
            timeout: 300000
          });
        };
        e.prototype.complete = function (e) {
          var t = e.web_id;
          var r = e.user_unique_id;
          var i = e.device_id;
          e.timestamp = Date.now();
          this.collect.configManager.set({
            web_id: t,
            user_unique_id: r
          });
          if (this.config.enable_device_id) {
            i = this.configManager.get("device_id") || i || t;
            this.collect.configManager.set({
              device_id: i
            });
            e = d(d({}, e), {
              device_id: i
            });
          } else if (e != null && e.device_id) {
            delete e.device_id;
          }
          this.setStorage(e);
          this.tokenReady = true;
          this.collect.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 完成用户信息设置",
            logType: "info",
            level: "info",
            time: Date.now(),
            data: {
              web_id: t,
              user_unique_id: r
            },
            infoType: "sdk"
          });
          this.collect.emit(F.TokenComplete);
        };
        e.prototype.completeTtWid = function (e) {
          var t = e.user_unique_id || "";
          var r = this.configManager.get("user_unique_id");
          if (r || t) {
            this.configManager.set({
              user_unique_id: r || t
            });
          }
          this.setStorage(e);
          this.tokenReady = true;
          this.collect.emit(F.TokenComplete);
        };
        e.prototype.setUuid = function (e) {
          var t;
          var r;
          if (e && ["null", "undefined", "Null", "None"].indexOf(e) === -1) {
            e = String(e);
            t = this.configManager.get("user_unique_id");
            r = this.cacheToken && this.cacheToken.user_unique_id;
            if (e !== t || e !== r) {
              this.configManager.set({
                user_unique_id: e
              });
              this.cacheToken ||= {};
              this.cacheToken.user_unique_id = e;
              this.cacheToken.timestamp = Date.now();
              this.setStorage(this.cacheToken);
              this.collect.emit(F.TokenChange, "uuid");
              this.collect.emit(F.SessionReset);
            }
          } else {
            this.clearUuid();
          }
        };
        e.prototype.clearUuid = function () {
          if (!this.config.enable_ttwebid) {
            if (this.configManager.get("web_id") && this.configManager.get("user_unique_id") !== this.configManager.get("web_id")) {
              this.configManager.set({
                user_unique_id: this.configManager.get("web_id")
              });
              if (this.cacheToken && this.cacheToken.web_id) {
                this.cacheToken.user_unique_id = this.cacheToken.web_id;
                this.cacheToken.timestamp = Date.now();
                this.setStorage(this.cacheToken);
              }
              this.collect.emit(F.TokenReset, "uuid");
            }
          }
        };
        e.prototype.setWebId = function (e) {
          var t;
          var r;
          if (e && !this.config.enable_ttwebid) {
            if (this.cacheToken && this.cacheToken.web_id) {
              if (this.cacheToken.web_id !== e) {
                this.cacheToken.user_unique_id = this.cacheToken.web_id === this.cacheToken.user_unique_id ? e : this.cacheToken.user_unique_id;
                this.cacheToken.web_id = e;
              }
            } else {
              this.cacheToken = {};
              this.cacheToken.web_id = e;
              this.cacheToken.user_unique_id = e;
            }
            this.cacheToken.timestamp = Date.now();
            t = this.configManager.get("web_id");
            if (!(r = this.configManager.get("user_unique_id")) || r === t) {
              this.configManager.set({
                user_unique_id: e
              });
              this.collect.emit(F.TokenChange, "uuid");
            }
            if (t !== e) {
              this.configManager.set({
                web_id: e
              });
              this.collect.emit(F.TokenChange, "webid");
            }
            this.setStorage(this.cacheToken);
          }
        };
        e.prototype.setDeviceId = function (e) {
          this.configManager.set({
            device_id: e
          });
          if (this.config.enable_device_id && this.cacheToken) {
            this.cacheToken.device_id = e;
            this.cacheToken.timestamp = Date.now();
            this.setStorage(this.cacheToken);
          }
        };
        e.prototype.setStorage = function (e) {
          e._type_ = this.enableCustomWebid ? "custom" : "default";
          delete e["diss".split("").reverse().join("")];
          if (this.enableCookie || this.enable_ttwebid) {
            this.storage.setCookie(this.tokenKey, e, this.expiresTime, this.cookieDomain);
            if (this.enable_ttwebid) {
              delete e.web_id;
              this.storage.setItem(this.tokenKey, e);
            }
          } else {
            this.storage.setItem(this.tokenKey, e);
          }
          this.cacheToken = e;
        };
        e.prototype.getReady = function () {
          return this.tokenReady;
        };
        e.prototype.getTobId = function () {
          var e = this;
          return new Promise(function (t) {
            var r = {
              app_id: e.config.app_id,
              user_unique_id: e.configManager.get("user_unique_id"),
              web_id: e.configManager.get("web_id"),
              user_unique_id_type: e.configManager.get("user_unique_id_type")
            };
            e.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 发起GetToken请求",
              logType: "fetch",
              level: "info",
              time: Date.now(),
              data: r,
              infoType: "sdk"
            });
            e.collect.requestManager.useRequest({
              url: e.configManager.getUrl("tobid"),
              data: r,
              success: function (r) {
                if (r && r.e === 0) {
                  t(r.tobid);
                  e.collect.emit(D.DEBUGGER_MESSAGE, {
                    type: D.DEBUGGER_MESSAGE_SDK,
                    info: "GetToken请求成功",
                    logType: "fetch",
                    level: "info",
                    time: Date.now(),
                    data: r,
                    infoType: "sdk"
                  });
                } else {
                  t("");
                  e.collect.emit(D.DEBUGGER_MESSAGE, {
                    type: D.DEBUGGER_MESSAGE_SDK,
                    info: "GetToken请求失败",
                    logType: "fetch",
                    level: "error",
                    time: Date.now(),
                    data: r,
                    infoType: "sdk"
                  });
                }
              },
              fail: function () {
                t("");
                e.collect.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "GetToken请求失败",
                  logType: "fetch",
                  level: "error",
                  time: Date.now(),
                  infoType: "sdk"
                });
              },
              time: 30000,
              withCredentials: e.enable_ttwebid
            });
          });
        };
        return e;
      })();
      function Q(e) {
        for (var t = e.length; --t >= 0;) {
          e[t] = 0;
        }
      }
      var $ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
      var Y = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
      var ee = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
      var et = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      var er = Array(576);
      Q(er);
      var ei = Array(60);
      Q(ei);
      var en = Array(512);
      Q(en);
      var eo = Array(256);
      Q(eo);
      var es = Array(29);
      Q(es);
      var ea;
      var ec;
      var eu;
      var el = Array(30);
      function ef(e, t, r, i, n) {
        this.static_tree = e;
        this.extra_bits = t;
        this.extra_base = r;
        this.elems = i;
        this.max_length = n;
        this.has_stree = e && e.length;
      }
      function eh(e, t) {
        this.dyn_tree = e;
        this.max_code = 0;
        this.stat_desc = t;
      }
      function ed(e) {
        if (e < 256) {
          return en[e];
        } else {
          return en[256 + (e >>> 7)];
        }
      }
      function ep(e, t, r) {
        eP(e, r[t * 2], r[t * 2 + 1]);
      }
      function eg(e, t) {
        for (var r = 0; r |= e & 1, e >>>= 1, r <<= 1, --t > 0;);
        return r >>> 1;
      }
      function em(e, t, r) {
        var i;
        var n = Array(16);
        var o = 0;
        var s = 1;
        for (; s <= 15; s++) {
          o = o + r[s - 1] << 1;
          n[s] = o;
        }
        for (i = 0; i <= t; i++) {
          var a = e[i * 2 + 1];
          if (a !== 0) {
            e[i * 2] = eg(n[a]++, a);
          }
        }
      }
      function ey(e) {
        for (var t = 0; t < 286; t++) {
          e.dyn_ltree[t * 2] = 0;
        }
        for (t = 0; t < 30; t++) {
          e.dyn_dtree[t * 2] = 0;
        }
        for (t = 0; t < 19; t++) {
          e.bl_tree[t * 2] = 0;
        }
        e.dyn_ltree[512] = 1;
        e.opt_len = e.static_len = 0;
        e.sym_next = e.matches = 0;
      }
      function e_(e) {
        if (e.bi_valid > 8) {
          eR(e, e.bi_buf);
        } else if (e.bi_valid > 0) {
          e.pending_buf[e.pending++] = e.bi_buf;
        }
        e.bi_buf = 0;
        e.bi_valid = 0;
      }
      function eb(e, t, r) {
        var i = e.heap[r];
        var n = r << 1;
        while (n <= e.heap_len && (n < e.heap_len && eU(t, e.heap[n + 1], e.heap[n], e.depth) && n++, !eU(t, i, e.heap[n], e.depth))) {
          e.heap[r] = e.heap[n];
          r = n;
          n <<= 1;
        }
        e.heap[r] = i;
      }
      function ev(e, t, r) {
        var i;
        var n;
        var o;
        var s;
        var a = 0;
        if (e.sym_next !== 0) {
          while (i = (e.pending_buf[e.sym_buf + a++] & 255) + ((e.pending_buf[e.sym_buf + a++] & 255) << 8), n = e.pending_buf[e.sym_buf + a++], i == 0 ? ep(e, n, t) : (ep(e, (o = eo[n]) + 256 + 1, t), (s = $[o]) !== 0 && eP(e, n -= es[o], s), ep(e, o = ed(--i), r), (s = Y[o]) !== 0 && eP(e, i -= el[o], s)), a < e.sym_next);
        }
        ep(e, 256, t);
      }
      function ez(e, t) {
        var r;
        var i;
        var n;
        var o = t.dyn_tree;
        var s = t.stat_desc.static_tree;
        var a = t.stat_desc.has_stree;
        var c = t.stat_desc.elems;
        var u = -1;
        e.heap_len = 0;
        e.heap_max = 573;
        r = 0;
        for (; r < c; r++) {
          if (o[r * 2] !== 0) {
            e.heap[++e.heap_len] = u = r;
            e.depth[r] = 0;
          } else {
            o[r * 2 + 1] = 0;
          }
        }
        while (e.heap_len < 2) {
          o[(n = e.heap[++e.heap_len] = u < 2 ? ++u : 0) * 2] = 1;
          e.depth[n] = 0;
          e.opt_len--;
          if (a) {
            e.static_len -= s[n * 2 + 1];
          }
        }
        t.max_code = u;
        r = e.heap_len >> 1;
        for (; r >= 1; r--) {
          eb(e, o, r);
        }
        for (n = c; r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], eb(e, o, 1), i = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = i, o[n * 2] = o[r * 2] + o[i * 2], e.depth[n] = (e.depth[r] >= e.depth[i] ? e.depth[r] : e.depth[i]) + 1, o[r * 2 + 1] = o[i * 2 + 1] = n, e.heap[1] = n++, eb(e, o, 1), e.heap_len >= 2;);
        e.heap[--e.heap_max] = e.heap[1];
        (e => {
          var r;
          var i;
          var n;
          var o;
          var s;
          var a = t.dyn_tree;
          var c = t.max_code;
          var u = t.stat_desc.static_tree;
          var l = t.stat_desc.has_stree;
          var f = t.stat_desc.extra_bits;
          var h = t.stat_desc.extra_base;
          var d = t.stat_desc.max_length;
          var p = 0;
          var g = 0;
          for (; g <= 15; g++) {
            e.bl_count[g] = 0;
          }
          a[e.heap[e.heap_max] * 2 + 1] = 0;
          r = e.heap_max + 1;
          for (; r < 573; r++) {
            if ((g = a[a[(i = e.heap[r]) * 2 + 1] * 2 + 1] + 1) > d) {
              g = d;
              p++;
            }
            a[i * 2 + 1] = g;
            if (!(c < i)) {
              e.bl_count[g]++;
              o = 0;
              if (h <= i) {
                o = f[i - h];
              }
              s = a[i * 2];
              e.opt_len += s * (g + o);
              if (l) {
                e.static_len += s * (u[i * 2 + 1] + o);
              }
            }
          }
          if (p !== 0) {
            do {
              for (g = d - 1; e.bl_count[g] === 0;) {
                g--;
              }
            } while (e.bl_count[g]--, e.bl_count[g + 1] += 2, e.bl_count[d]--, (p -= 2) > 0);
            for (g = d; g !== 0; g--) {
              for (i = e.bl_count[g]; i !== 0;) {
                if (!((n = e.heap[--r]) > c)) {
                  if (a[n * 2 + 1] !== g) {
                    e.opt_len += (g - a[n * 2 + 1]) * a[n * 2];
                    a[n * 2 + 1] = g;
                  }
                  i--;
                }
              }
            }
          }
        })(e);
        em(o, u, e.bl_count);
      }
      function eS(e, t, r) {
        var i;
        var n;
        var o = -1;
        var s = t[1];
        var a = 0;
        var c = 7;
        var u = 4;
        if (s === 0) {
          c = 138;
          u = 3;
        }
        t[(r + 1) * 2 + 1] = 65535;
        i = 0;
        for (; i <= r; i++) {
          n = s;
          s = t[(i + 1) * 2 + 1];
          if (!(++a < c) || n !== s) {
            if (a < u) {
              e.bl_tree[n * 2] += a;
            } else if (n !== 0) {
              if (n !== o) {
                e.bl_tree[n * 2]++;
              }
              e.bl_tree[32]++;
            } else if (a <= 10) {
              e.bl_tree[34]++;
            } else {
              e.bl_tree[36]++;
            }
            o = n;
            u = (a = 0) === s ? (c = 138, 3) : n === s ? (c = 6, 3) : (c = 7, 4);
          }
        }
      }
      function ew(e, t, r) {
        var i;
        var n;
        var o = -1;
        var s = t[1];
        var a = 0;
        var c = 7;
        var u = 4;
        if (s === 0) {
          c = 138;
          u = 3;
        }
        i = 0;
        for (; i <= r; i++) {
          n = s;
          s = t[(i + 1) * 2 + 1];
          if (!(++a < c) || n !== s) {
            if (a < u) {
              while (ep(e, n, e.bl_tree), --a != 0);
            } else if (n !== 0) {
              if (n !== o) {
                ep(e, n, e.bl_tree);
                a--;
              }
              ep(e, 16, e.bl_tree);
              eP(e, a - 3, 2);
            } else if (a <= 10) {
              ep(e, 17, e.bl_tree);
              eP(e, a - 3, 3);
            } else {
              ep(e, 18, e.bl_tree);
              eP(e, a - 11, 7);
            }
            o = n;
            u = (a = 0) === s ? (c = 138, 3) : n === s ? (c = 6, 3) : (c = 7, 4);
          }
        }
      }
      function ek(e, t, r, i) {
        eP(e, 0 + +!!i, 3);
        e_(e);
        eR(e, r);
        eR(e, ~r);
        if (r) {
          e.pending_buf.set(e.window.subarray(t, t + r), e.pending);
        }
        e.pending += r;
      }
      function ex(e, t) {
        e.msg = eW[t];
        return t;
      }
      function eE(e) {
        return e * 2 - (e > 4) * 9;
      }
      function eO(e, t) {
        eX(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
        e.block_start = e.strstart;
        tu(e.strm);
      }
      function eD(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function eT(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255;
        e.pending_buf[e.pending++] = t & 255;
      }
      function eC(e, t) {
        var r;
        var i;
        var n = e.max_chain_length;
        var o = e.strstart;
        var s = e.prev_length;
        var a = e.nice_match;
        var c = e.w_size - 262 < e.strstart ? e.strstart - (e.w_size - 262) : 0;
        var u = e.window;
        var l = e.w_mask;
        var f = e.prev;
        var h = e.strstart + 258;
        var d = u[o + s - 1];
        var p = u[o + s];
        if (e.good_match <= e.prev_length) {
          n >>= 2;
        }
        if (e.lookahead < a) {
          a = e.lookahead;
        }
        do {
          if (u[(r = t) + s] === p && u[r + s - 1] === d && u[r] === u[o] && u[++r] === u[o + 1]) {
            o += 2;
            r++;
            while (u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && o < h);
            i = 258 - (h - o);
            o = h - 258;
            if (s < i) {
              e.match_start = t;
              if (a <= (s = i)) {
                break;
              }
              d = u[o + s - 1];
              p = u[o + s];
            }
          }
        } while ((t = f[t & l]) > c && --n != 0);
        if (s <= e.lookahead) {
          return s;
        } else {
          return e.lookahead;
        }
      }
      function eA(e) {
        var t;
        var r;
        var i = e.w_size;
        do {
          t = e.window_size - e.lookahead - e.strstart;
          if (i + (i - 262) <= e.strstart) {
            e.window.set(e.window.subarray(i, i + i - t), 0);
            e.match_start -= i;
            e.strstart -= i;
            e.block_start -= i;
            if (e.strstart < e.insert) {
              e.insert = e.strstart;
            }
            ta(e);
            t += i;
          }
          if (e.strm.avail_in === 0) {
            break;
          }
          t = tl(e.strm, e.window, e.strstart + e.lookahead, t);
          e.lookahead += t;
          if (e.lookahead + e.insert >= 3) {
            r = e.strstart - e.insert;
            e.ins_h = e.window[r];
            e.ins_h = tc(e, e.ins_h, e.window[r + 1]);
            while (e.insert && (e.ins_h = tc(e, e.ins_h, e.window[r + 3 - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < 3)));
          }
        } while (e.lookahead < 262 && e.strm.avail_in !== 0);
      }
      function eI(e, t) {
        var r;
        var i;
        var n;
        var o = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
        var s = 0;
        var a = e.strm.avail_in;
        while (r = 65535, n = e.bi_valid + 42 >> 3, !(e.strm.avail_out < n) && (!((r = (n = e.strm.avail_out - n) < (r = r > (i = e.strstart - e.block_start) + e.strm.avail_in ? i + e.strm.avail_in : r) ? n : r) < o) || (r !== 0 || t === e2) && t !== eY && r === i + e.strm.avail_in) && !(s = +(t === e2 && r === i + e.strm.avail_in), eZ(e, 0, 0, s), e.pending_buf[e.pending - 4] = r, e.pending_buf[e.pending - 3] = r >> 8, e.pending_buf[e.pending - 2] = ~r, e.pending_buf[e.pending - 1] = ~r >> 8, tu(e.strm), i && (r < i && (i = r), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + i), e.strm.next_out), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i, e.block_start += i, r -= i), r && (tl(e.strm, e.strm.output, e.strm.next_out, r), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r), s !== 0));
        if (a -= e.strm.avail_in) {
          if (a >= e.w_size) {
            e.matches = 2;
            e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
            e.strstart = e.w_size;
            e.insert = e.strstart;
          } else {
            if (e.window_size - e.strstart <= a && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.strstart < e.insert)) {
              e.insert = e.strstart;
            }
            e.window.set(e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in), e.strstart);
            e.strstart += a;
            e.insert += e.w_size - e.insert < a ? e.w_size - e.insert : a;
          }
          e.block_start = e.strstart;
        }
        if (e.high_water < e.strstart) {
          e.high_water = e.strstart;
        }
        if (s) {
          return 4;
        } else if (t !== eY && t !== e2 && e.strm.avail_in === 0 && e.strstart === e.block_start) {
          return 2;
        } else {
          n = e.window_size - e.strstart;
          if (e.strm.avail_in > n && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, n += e.w_size, e.strstart < e.insert)) {
            e.insert = e.strstart;
          }
          if (n = n > e.strm.avail_in ? e.strm.avail_in : n) {
            tl(e.strm, e.window, e.strstart, n);
            e.strstart += n;
            e.insert += e.w_size - e.insert < n ? e.w_size - e.insert : n;
          }
          if (e.high_water < e.strstart) {
            e.high_water = e.strstart;
          }
          o = (n = e.pending_buf_size - (n = e.bi_valid + 42 >> 3) > 65535 ? 65535 : e.pending_buf_size - n) > e.w_size ? e.w_size : n;
          if ((i = e.strstart - e.block_start) >= o || (i || t === e2) && t !== eY && e.strm.avail_in === 0 && i <= n) {
            r = n < i ? n : i;
            s = +(t === e2 && e.strm.avail_in === 0 && r === i);
            eZ(e, e.block_start, r, s);
            e.block_start += r;
            tu(e.strm);
          }
          if (s) {
            return 3;
          } else {
            return 1;
          }
        }
      }
      function ej(e, t) {
        var r;
        var i;
        while (true) {
          if (e.lookahead < 262) {
            eA(e);
            if (e.lookahead < 262 && t === eY) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          r = 0;
          if (e.lookahead >= 3) {
            e.ins_h = tc(e, e.ins_h, e.window[e.strstart + 3 - 1]);
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
          if (r !== 0 && e.strstart - r <= e.w_size - 262) {
            e.match_length = eC(e, r);
          }
          if (e.match_length >= 3) {
            i = eQ(e, e.strstart - e.match_start, e.match_length - 3);
            e.lookahead -= e.match_length;
            if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
              for (e.match_length--; e.strstart++, e.ins_h = tc(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
              e.strstart++;
            } else {
              e.strstart += e.match_length;
              e.match_length = 0;
              e.ins_h = e.window[e.strstart];
              e.ins_h = tc(e, e.ins_h, e.window[e.strstart + 1]);
            }
          } else {
            i = eQ(e, 0, e.window[e.strstart]);
            e.lookahead--;
            e.strstart++;
          }
          if (i && (eO(e, false), e.strm.avail_out === 0)) {
            return 1;
          }
        }
        e.insert = e.strstart < 2 ? e.strstart : 2;
        if (t === e2) {
          eO(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.sym_next && (eO(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      }
      function eB(e, t) {
        var r;
        var i;
        var n;
        while (true) {
          if (e.lookahead < 262) {
            eA(e);
            if (e.lookahead < 262 && t === eY) {
              return 1;
            }
            if (e.lookahead === 0) {
              break;
            }
          }
          r = 0;
          if (e.lookahead >= 3) {
            e.ins_h = tc(e, e.ins_h, e.window[e.strstart + 3 - 1]);
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
          e.prev_length = e.match_length;
          e.prev_match = e.match_start;
          e.match_length = 2;
          if (r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - 262 && (e.match_length = eC(e, r), e.match_length <= 5) && (e.strategy === te || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
            e.match_length = 2;
          }
          if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
            n = e.strstart + e.lookahead - 3;
            i = eQ(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
            e.lookahead -= e.prev_length - 1;
            e.prev_length -= 2;
            while (++e.strstart <= n && (e.ins_h = tc(e, e.ins_h, e.window[e.strstart + 3 - 1]), r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0);
            e.match_available = 0;
            e.match_length = 2;
            e.strstart++;
            if (i && (eO(e, false), e.strm.avail_out === 0)) {
              return 1;
            }
          } else if (e.match_available) {
            if (i = eQ(e, 0, e.window[e.strstart - 1])) {
              eO(e, false);
            }
            e.strstart++;
            e.lookahead--;
            if (e.strm.avail_out === 0) {
              return 1;
            }
          } else {
            e.match_available = 1;
            e.strstart++;
            e.lookahead--;
          }
        }
        if (e.match_available) {
          i = eQ(e, 0, e.window[e.strstart - 1]);
          e.match_available = 0;
        }
        e.insert = e.strstart < 2 ? e.strstart : 2;
        if (t === e2) {
          eO(e, true);
          if (e.strm.avail_out === 0) {
            return 3;
          } else {
            return 4;
          }
        } else if (e.sym_next && (eO(e, false), e.strm.avail_out === 0)) {
          return 1;
        } else {
          return 2;
        }
      }
      Q(el);
      function eR(e, t) {
        e.pending_buf[e.pending++] = t & 255;
        e.pending_buf[e.pending++] = t >>> 8 & 255;
      }
      function eP(e, t, r) {
        if (e.bi_valid > 16 - r) {
          e.bi_buf |= t << e.bi_valid & 65535;
          eR(e, e.bi_buf);
          e.bi_buf = t >> 16 - e.bi_valid;
          e.bi_valid += r - 16;
        } else {
          e.bi_buf |= t << e.bi_valid & 65535;
          e.bi_valid += r;
        }
      }
      function eU(e, t, r, i) {
        var n = t * 2;
        var o = r * 2;
        return e[n] < e[o] || e[n] === e[o] && i[t] <= i[r];
      }
      var eM = false;
      function eG(e) {
        if (!eM) {
          (() => {
            var e;
            var t;
            var r;
            var i = Array(16);
            var n = 0;
            var o = 0;
            for (; o < 28; o++) {
              es[o] = n;
              e = 0;
              for (; e < 1 << $[o]; e++) {
                eo[n++] = o;
              }
            }
            eo[n - 1] = o;
            o = r = 0;
            for (; o < 16; o++) {
              el[o] = r;
              e = 0;
              for (; e < 1 << Y[o]; e++) {
                en[r++] = o;
              }
            }
            for (r >>= 7; o < 30; o++) {
              el[o] = r << 7;
              e = 0;
              for (; e < 1 << Y[o] - 7; e++) {
                en[256 + r++] = o;
              }
            }
            for (t = 0; t <= 15; t++) {
              i[t] = 0;
            }
            for (e = 0; e <= 143;) {
              er[e * 2 + 1] = 8;
              e++;
              i[8]++;
            }
            while (e <= 255) {
              er[e * 2 + 1] = 9;
              e++;
              i[9]++;
            }
            while (e <= 279) {
              er[e * 2 + 1] = 7;
              e++;
              i[7]++;
            }
            while (e <= 287) {
              er[e * 2 + 1] = 8;
              e++;
              i[8]++;
            }
            em(er, 287, i);
            e = 0;
            for (; e < 30; e++) {
              ei[e * 2 + 1] = 5;
              ei[e * 2] = eg(e, 5);
            }
            ea = new ef(er, $, 257, 286, 15);
            ec = new ef(ei, Y, 0, 30, 15);
            eu = new ef([], ee, 0, 19, 7);
          })();
          eM = true;
        }
        e.l_desc = new eh(e.dyn_ltree, ea);
        e.d_desc = new eh(e.dyn_dtree, ec);
        e.bl_desc = new eh(e.bl_tree, eu);
        e.bi_buf = 0;
        e.bi_valid = 0;
        ey(e);
      }
      var t = ek;
      function eF(e, t, r, i) {
        var n;
        var o;
        var s = 0;
        if (e.level > 0) {
          if (e.strm.data_type === 2) {
            e.strm.data_type = (e => {
              var t = 4093624447;
              var r = 0;
              for (; r <= 31; r++, t >>>= 1) {
                if (t & 1 && e.dyn_ltree[r * 2] !== 0) {
                  return 0;
                }
              }
              if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
                return 1;
              }
              for (r = 32; r < 256; r++) {
                if (e.dyn_ltree[r * 2] !== 0) {
                  return 1;
                }
              }
              return 0;
            })(e);
          }
          ez(e, e.l_desc);
          ez(e, e.d_desc);
          s = (e => {
            var t;
            eS(e, e.dyn_ltree, e.l_desc.max_code);
            eS(e, e.dyn_dtree, e.d_desc.max_code);
            ez(e, e.bl_desc);
            t = 18;
            for (; t >= 3 && e.bl_tree[et[t] * 2 + 1] === 0; t--);
            e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
            return t;
          })(e);
          if ((o = e.static_len + 3 + 7 >>> 3) <= (n = e.opt_len + 3 + 7 >>> 3)) {
            n = o;
          }
        } else {
          n = o = r + 5;
        }
        if (r + 4 <= n && t !== -1) {
          ek(e, t, r, i);
        } else if (e.strategy === 4 || o === n) {
          eP(e, 2 + +!!i, 3);
          ev(e, er, ei);
        } else {
          eP(e, 4 + +!!i, 3);
          ((e, t, r, i) => {
            var n;
            eP(e, t - 257, 5);
            eP(e, r - 1, 5);
            eP(e, i - 4, 4);
            n = 0;
            for (; n < i; n++) {
              eP(e, e.bl_tree[et[n] * 2 + 1], 3);
            }
            ew(e, e.dyn_ltree, t - 1);
            ew(e, e.dyn_dtree, r - 1);
          })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1);
          ev(e, e.dyn_ltree, e.dyn_dtree);
        }
        ey(e);
        if (i) {
          e_(e);
        }
      }
      function eN(e, t, r) {
        e.pending_buf[e.sym_buf + e.sym_next++] = t;
        e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8;
        e.pending_buf[e.sym_buf + e.sym_next++] = r;
        if (t === 0) {
          e.dyn_ltree[r * 2]++;
        } else {
          e.matches++;
          t--;
          e.dyn_ltree[(eo[r] + 256 + 1) * 2]++;
          e.dyn_dtree[ed(t) * 2]++;
        }
        return e.sym_next === e.sym_end;
      }
      function eH(e) {
        eP(e, 2, 3);
        ep(e, 256, er);
        if (e.bi_valid === 16) {
          eR(e, e.bi_buf);
          e.bi_buf = 0;
          e.bi_valid = 0;
        } else if (e.bi_valid >= 8) {
          e.pending_buf[e.pending++] = e.bi_buf & 255;
          e.bi_buf >>= 8;
          e.bi_valid -= 8;
        }
      }
      function eL(e, t, r, i) {
        var n = e & 65535 | 0;
        var o = e >>> 16 & 65535 | 0;
        var s = 0;
        while (r !== 0) {
          for (r -= s = r > 2000 ? 2000 : r; o = o + (n = n + t[i++] | 0) | 0, --s;);
          n %= 65521;
          o %= 65521;
        }
        return n | o << 16 | 0;
      }
      var eK = new Uint32Array((() => {
        var e = [];
        var t = 0;
        for (; t < 256; t++) {
          var r = t;
          var i = 0;
          for (; i < 8; i++) {
            r = r & 1 ? r >>> 1 ^ -306674912 : r >>> 1;
          }
          e[t] = r;
        }
        return e;
      })());
      function eq(e, t, r, i) {
        var n = i + r;
        e ^= -1;
        for (var o = i; o < n; o++) {
          e = e >>> 8 ^ eK[(e ^ t[o]) & 255];
        }
        return e ^ -1;
      }
      var eW = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
      var eV = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
      var eJ = eG;
      var eZ = t;
      var eX = eF;
      var eQ = eN;
      var e$ = eH;
      var eY = eV.Z_NO_FLUSH;
      var e1 = eV.Z_PARTIAL_FLUSH;
      var e0 = eV.Z_FULL_FLUSH;
      var e2 = eV.Z_FINISH;
      var e4 = eV.Z_BLOCK;
      var e3 = eV.Z_OK;
      var e5 = eV.Z_STREAM_END;
      var e6 = eV.Z_STREAM_ERROR;
      var e8 = eV.Z_DATA_ERROR;
      var e9 = eV.Z_BUF_ERROR;
      var e7 = eV.Z_DEFAULT_COMPRESSION;
      var te = eV.Z_FILTERED;
      var tt = eV.Z_HUFFMAN_ONLY;
      var tr = eV.Z_RLE;
      var ti = eV.Z_FIXED;
      var tn = eV.Z_UNKNOWN;
      var to = eV.Z_DEFLATED;
      function ts(e) {
        for (var t = e.length; --t >= 0;) {
          e[t] = 0;
        }
      }
      function ta(e) {
        var t;
        var r;
        var i = e.w_size;
        var n = t = e.hash_size;
        while (r = e.head[--n], e.head[n] = i <= r ? r - i : 0, --t);
        for (n = t = i; r = e.prev[--n], e.prev[n] = i <= r ? r - i : 0, --t;);
      }
      function tc(e, t, r) {
        return (t << e.hash_shift ^ r) & e.hash_mask;
      }
      function tu(e) {
        var t = e.state;
        var r = t.pending;
        if ((r = e.avail_out < r ? e.avail_out : r) !== 0 && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + r), e.next_out), e.next_out += r, t.pending_out += r, e.total_out += r, e.avail_out -= r, t.pending -= r, t.pending === 0)) {
          t.pending_out = 0;
        }
      }
      function tl(e, t, r, i) {
        var n = e.avail_in;
        if ((n = i < n ? i : n) === 0) {
          return 0;
        } else {
          e.avail_in -= n;
          t.set(e.input.subarray(e.next_in, e.next_in + n), r);
          if (e.state.wrap === 1) {
            e.adler = eL(e.adler, t, n, r);
          } else if (e.state.wrap === 2) {
            e.adler = eq(e.adler, t, n, r);
          }
          e.next_in += n;
          e.total_in += n;
          return n;
        }
      }
      function tf(e, t, r, i, n) {
        this.good_length = e;
        this.max_lazy = t;
        this.nice_length = r;
        this.max_chain = i;
        this.func = n;
      }
      var th = [new tf(0, 0, 0, 0, eI), new tf(4, 4, 8, 4, ej), new tf(4, 5, 16, 8, ej), new tf(4, 6, 32, 32, ej), new tf(4, 4, 16, 16, eB), new tf(8, 16, 32, 32, eB), new tf(8, 16, 128, 128, eB), new tf(8, 32, 128, 256, eB), new tf(32, 128, 258, 1024, eB), new tf(32, 258, 258, 4096, eB)];
      function td() {
        this.strm = null;
        this.status = 0;
        this.pending_buf = null;
        this.pending_buf_size = 0;
        this.pending_out = 0;
        this.pending = 0;
        this.wrap = 0;
        this.gzhead = null;
        this.gzindex = 0;
        this.method = to;
        this.last_flush = -1;
        this.w_size = 0;
        this.w_bits = 0;
        this.w_mask = 0;
        this.window = null;
        this.window_size = 0;
        this.prev = null;
        this.head = null;
        this.ins_h = 0;
        this.hash_size = 0;
        this.hash_bits = 0;
        this.hash_mask = 0;
        this.hash_shift = 0;
        this.block_start = 0;
        this.match_length = 0;
        this.prev_match = 0;
        this.match_available = 0;
        this.strstart = 0;
        this.match_start = 0;
        this.lookahead = 0;
        this.prev_length = 0;
        this.max_chain_length = 0;
        this.max_lazy_match = 0;
        this.level = 0;
        this.strategy = 0;
        this.good_match = 0;
        this.nice_match = 0;
        this.dyn_ltree = new Uint16Array(1146);
        this.dyn_dtree = new Uint16Array(122);
        this.bl_tree = new Uint16Array(78);
        ts(this.dyn_ltree);
        ts(this.dyn_dtree);
        ts(this.bl_tree);
        this.l_desc = null;
        this.d_desc = null;
        this.bl_desc = null;
        this.bl_count = new Uint16Array(16);
        this.heap = new Uint16Array(573);
        ts(this.heap);
        this.heap_len = 0;
        this.heap_max = 0;
        this.depth = new Uint16Array(573);
        ts(this.depth);
        this.sym_buf = 0;
        this.lit_bufsize = 0;
        this.sym_next = 0;
        this.sym_end = 0;
        this.opt_len = 0;
        this.static_len = 0;
        this.matches = 0;
        this.insert = 0;
        this.bi_buf = 0;
        this.bi_valid = 0;
      }
      function tp(e) {
        var t;
        if (e && (t = e.state) && t.strm === e && (t.status === 42 || t.status === 57 || t.status === 69 || t.status === 73 || t.status === 91 || t.status === 103 || t.status === 113 || t.status === 666)) {
          return 0;
        } else {
          return 1;
        }
      }
      function tg(e) {
        if (tp(e)) {
          return ex(e, e6);
        }
        e.total_in = e.total_out = 0;
        e.data_type = tn;
        var t = e.state;
        t.pending = 0;
        t.pending_out = 0;
        if (t.wrap < 0) {
          t.wrap = -t.wrap;
        }
        t.status = t.wrap === 2 ? 57 : t.wrap ? 42 : 113;
        e.adler = +(t.wrap !== 2);
        t.last_flush = -2;
        eJ(t);
        return e3;
      }
      function tm(e, t, r, i, n, o) {
        if (!e) {
          return e6;
        }
        var s;
        var a;
        var c = 1;
        if (t === e7) {
          t = 6;
        }
        if (i < 0) {
          c = 0;
          i = -i;
        } else if (i > 15) {
          c = 2;
          i -= 16;
        }
        if (n < 1 || n > 9 || r !== to || i < 8 || i > 15 || t < 0 || t > 9 || o < 0 || ti < o || i === 8 && c !== 1) {
          return ex(e, e6);
        }
        if (i === 8) {
          i = 9;
        }
        var u = new td();
        (e.state = u).strm = e;
        u.status = 42;
        u.wrap = c;
        u.gzhead = null;
        u.w_bits = i;
        u.w_size = 1 << u.w_bits;
        u.w_mask = u.w_size - 1;
        u.hash_bits = n + 7;
        u.hash_size = 1 << u.hash_bits;
        u.hash_mask = u.hash_size - 1;
        u.hash_shift = ~~((u.hash_bits + 3 - 1) / 3);
        u.window = new Uint8Array(u.w_size * 2);
        u.head = new Uint16Array(u.hash_size);
        u.prev = new Uint16Array(u.w_size);
        u.lit_bufsize = 1 << n + 6;
        u.pending_buf_size = u.lit_bufsize * 4;
        u.pending_buf = new Uint8Array(u.pending_buf_size);
        u.sym_buf = u.lit_bufsize;
        u.sym_end = (u.lit_bufsize - 1) * 3;
        u.level = t;
        u.strategy = o;
        u.method = r;
        if ((a = tg(s = e)) === e3) {
          (s = s.state).window_size = s.w_size * 2;
          ts(s.head);
          s.max_lazy_match = th[s.level].max_lazy;
          s.good_match = th[s.level].good_length;
          s.nice_match = th[s.level].nice_length;
          s.max_chain_length = th[s.level].max_chain;
          s.strstart = 0;
          s.block_start = 0;
          s.lookahead = 0;
          s.insert = 0;
          s.match_length = s.prev_length = 2;
          s.match_available = 0;
          s.ins_h = 0;
        }
        return a;
      }
      function ty(e, t) {
        if (tp(e) || e4 < t || t < 0) {
          if (e) {
            return ex(e, e6);
          } else {
            return e6;
          }
        }
        var r = e.state;
        if (!e.output || e.avail_in !== 0 && !e.input || r.status === 666 && t !== e2) {
          return ex(e, e.avail_out === 0 ? e9 : e6);
        }
        var i = r.last_flush;
        r.last_flush = t;
        if (r.pending !== 0) {
          tu(e);
          if (e.avail_out === 0) {
            r.last_flush = -1;
            return e3;
          }
        } else if (e.avail_in === 0 && eE(t) <= eE(i) && t !== e2) {
          return ex(e, e9);
        }
        if (r.status === 666 && e.avail_in !== 0) {
          return ex(e, e9);
        }
        if (r.status === 42 && r.wrap === 0) {
          r.status = 113;
        }
        if (r.status === 42 && (i = to + (r.w_bits - 8 << 4) << 8 | (r.strategy >= tt || r.level < 2 ? 0 : r.level < 6 ? 1 : r.level === 6 ? 2 : 3) << 6, r.strstart !== 0 && (i |= 32), eT(r, i += 31 - i % 31), r.strstart !== 0 && (eT(r, e.adler >>> 16), eT(r, e.adler & 65535)), e.adler = 1, r.status = 113, tu(e), r.pending !== 0)) {
          r.last_flush = -1;
          return e3;
        }
        if (r.status === 57) {
          e.adler = 0;
          eD(r, 31);
          eD(r, 139);
          eD(r, 8);
          if (r.gzhead) {
            eD(r, +!!r.gzhead.text + !!r.gzhead.hcrc * 2 + !!r.gzhead.extra * 4 + !!r.gzhead.name * 8 + !!r.gzhead.comment * 16);
            eD(r, r.gzhead.time & 255);
            eD(r, r.gzhead.time >> 8 & 255);
            eD(r, r.gzhead.time >> 16 & 255);
            eD(r, r.gzhead.time >> 24 & 255);
            eD(r, r.level === 9 ? 2 : (r.strategy >= tt || r.level < 2) * 4);
            eD(r, r.gzhead.os & 255);
            if (r.gzhead.extra && r.gzhead.extra.length) {
              eD(r, r.gzhead.extra.length & 255);
              eD(r, r.gzhead.extra.length >> 8 & 255);
            }
            if (r.gzhead.hcrc) {
              e.adler = eq(e.adler, r.pending_buf, r.pending, 0);
            }
            r.gzindex = 0;
            r.status = 69;
          } else {
            eD(r, 0);
            eD(r, 0);
            eD(r, 0);
            eD(r, 0);
            eD(r, 0);
            eD(r, r.level === 9 ? 2 : (r.strategy >= tt || r.level < 2) * 4);
            eD(r, 3);
            r.status = 113;
            tu(e);
            if (r.pending !== 0) {
              r.last_flush = -1;
              return e3;
            }
          }
        }
        if (r.status === 69) {
          if (r.gzhead.extra) {
            var n = r.pending;
            var o = (r.gzhead.extra.length & 65535) - r.gzindex;
            while (r.pending + o > r.pending_buf_size) {
              var s = r.pending_buf_size - r.pending;
              r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + s), r.pending);
              r.pending = r.pending_buf_size;
              if (r.gzhead.hcrc && r.pending > n) {
                e.adler = eq(e.adler, r.pending_buf, r.pending - n, n);
              }
              r.gzindex += s;
              tu(e);
              if (r.pending !== 0) {
                r.last_flush = -1;
                return e3;
              }
              n = 0;
              o -= s;
            }
            i = new Uint8Array(r.gzhead.extra);
            r.pending_buf.set(i.subarray(r.gzindex, r.gzindex + o), r.pending);
            r.pending += o;
            if (r.gzhead.hcrc && r.pending > n) {
              e.adler = eq(e.adler, r.pending_buf, r.pending - n, n);
            }
            r.gzindex = 0;
          }
          r.status = 73;
        }
        if (r.status === 73) {
          if (r.gzhead.name) {
            var a;
            var c = r.pending;
            do {
              if (r.pending === r.pending_buf_size) {
                if (r.gzhead.hcrc && r.pending > c) {
                  e.adler = eq(e.adler, r.pending_buf, r.pending - c, c);
                }
                tu(e);
                if (r.pending !== 0) {
                  r.last_flush = -1;
                  return e3;
                }
                c = 0;
              }
            } while (a = r.gzindex < r.gzhead.name.length ? r.gzhead.name.charCodeAt(r.gzindex++) & 255 : 0, eD(r, a), a != 0);
            if (r.gzhead.hcrc && r.pending > c) {
              e.adler = eq(e.adler, r.pending_buf, r.pending - c, c);
            }
            r.gzindex = 0;
          }
          r.status = 91;
        }
        if (r.status === 91) {
          if (r.gzhead.comment) {
            var u;
            var l = r.pending;
            do {
              if (r.pending === r.pending_buf_size) {
                if (r.gzhead.hcrc && r.pending > l) {
                  e.adler = eq(e.adler, r.pending_buf, r.pending - l, l);
                }
                tu(e);
                if (r.pending !== 0) {
                  r.last_flush = -1;
                  return e3;
                }
                l = 0;
              }
            } while (u = r.gzindex < r.gzhead.comment.length ? r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : 0, eD(r, u), u != 0);
            if (r.gzhead.hcrc && r.pending > l) {
              e.adler = eq(e.adler, r.pending_buf, r.pending - l, l);
            }
          }
          r.status = 103;
        }
        if (r.status === 103) {
          if (r.gzhead.hcrc) {
            if (r.pending + 2 > r.pending_buf_size && (tu(e), r.pending !== 0)) {
              r.last_flush = -1;
              return e3;
            }
            eD(r, e.adler & 255);
            eD(r, e.adler >> 8 & 255);
            e.adler = 0;
          }
          r.status = 113;
          tu(e);
          if (r.pending !== 0) {
            r.last_flush = -1;
            return e3;
          }
        }
        if (e.avail_in !== 0 || r.lookahead !== 0 || t !== eY && r.status !== 666) {
          if ((i = r.level === 0 ? eI(r, t) : r.strategy === tt ? ((e, t) => {
            var r;
            while (true) {
              if (e.lookahead === 0 && (eA(e), e.lookahead === 0)) {
                if (t === eY) {
                  return 1;
                }
                break;
              }
              e.match_length = 0;
              r = eQ(e, 0, e.window[e.strstart]);
              e.lookahead--;
              e.strstart++;
              if (r && (eO(e, false), e.strm.avail_out === 0)) {
                return 1;
              }
            }
            e.insert = 0;
            if (t === e2) {
              eO(e, true);
              if (e.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (e.sym_next && (eO(e, false), e.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(r, t) : r.strategy === tr ? ((e, t) => {
            var r;
            var i;
            var n;
            var o;
            var s = e.window;
            while (true) {
              if (e.lookahead <= 258) {
                eA(e);
                if (e.lookahead <= 258 && t === eY) {
                  return 1;
                }
                if (e.lookahead === 0) {
                  break;
                }
              }
              e.match_length = 0;
              if (e.lookahead >= 3 && e.strstart > 0 && (i = s[n = e.strstart - 1]) === s[++n] && i === s[++n] && i === s[++n]) {
                for (o = e.strstart + 258; i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < o;);
                e.match_length = 258 - (o - n);
                if (e.lookahead < e.match_length) {
                  e.match_length = e.lookahead;
                }
              }
              if (e.match_length >= 3) {
                r = eQ(e, 1, e.match_length - 3);
                e.lookahead -= e.match_length;
                e.strstart += e.match_length;
                e.match_length = 0;
              } else {
                r = eQ(e, 0, e.window[e.strstart]);
                e.lookahead--;
                e.strstart++;
              }
              if (r && (eO(e, false), e.strm.avail_out === 0)) {
                return 1;
              }
            }
            e.insert = 0;
            if (t === e2) {
              eO(e, true);
              if (e.strm.avail_out === 0) {
                return 3;
              } else {
                return 4;
              }
            } else if (e.sym_next && (eO(e, false), e.strm.avail_out === 0)) {
              return 1;
            } else {
              return 2;
            }
          })(r, t) : th[r.level].func(r, t)) === 3 || i === 4) {
            r.status = 666;
          }
          if (i === 1 || i === 3) {
            if (e.avail_out === 0) {
              r.last_flush = -1;
            }
            return e3;
          }
          if (i === 2 && (t === e1 ? e$(r) : t !== e4 && (eZ(r, 0, 0, false), t === e0) && (ts(r.head), r.lookahead === 0) && (r.strstart = 0, r.block_start = 0, r.insert = 0), tu(e), e.avail_out === 0)) {
            r.last_flush = -1;
            return e3;
          }
        }
        if (t === e2 && (r.wrap <= 0 || (r.wrap === 2 ? (eD(r, e.adler & 255), eD(r, e.adler >> 8 & 255), eD(r, e.adler >> 16 & 255), eD(r, e.adler >> 24 & 255), eD(r, e.total_in & 255), eD(r, e.total_in >> 8 & 255), eD(r, e.total_in >> 16 & 255), eD(r, e.total_in >> 24 & 255)) : (eT(r, e.adler >>> 16), eT(r, e.adler & 65535)), tu(e), r.wrap > 0 && (r.wrap = -r.wrap), r.pending === 0))) {
          return e5;
        } else {
          return e3;
        }
      }
      function t_(e) {
        var t;
        if (tp(e)) {
          return e6;
        } else {
          t = e.state.status;
          e.state = null;
          if (t === 113) {
            return ex(e, e8);
          } else {
            return e3;
          }
        }
      }
      function tb(e, t) {
        var r = t.length;
        if (tp(e)) {
          return e6;
        }
        var i = e.state;
        var n = i.wrap;
        if (n === 2 || n === 1 && i.status !== 42 || i.lookahead) {
          return e6;
        }
        if (n === 1) {
          e.adler = eL(e.adler, t, r, 0);
        }
        i.wrap = 0;
        if (i.w_size <= r) {
          if (n === 0) {
            ts(i.head);
            i.strstart = 0;
            i.block_start = 0;
            i.insert = 0;
          }
          (o = new Uint8Array(i.w_size)).set(t.subarray(r - i.w_size, r), 0);
          t = o;
          r = i.w_size;
        }
        var o = e.avail_in;
        var s = e.next_in;
        var a = e.input;
        e.avail_in = r;
        e.next_in = 0;
        e.input = t;
        eA(i);
        while (i.lookahead >= 3) {
          var c = i.strstart;
          var u = i.lookahead - 2;
          while (i.ins_h = tc(i, i.ins_h, i.window[c + 3 - 1]), i.prev[c & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = c, c++, --u);
          i.strstart = c;
          i.lookahead = 2;
          eA(i);
        }
        i.strstart += i.lookahead;
        i.block_start = i.strstart;
        i.insert = i.lookahead;
        i.lookahead = 0;
        i.match_length = i.prev_length = 2;
        i.match_available = 0;
        e.next_in = s;
        e.input = a;
        e.avail_in = o;
        i.wrap = n;
        return e3;
      }
      function tv(e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if (typeof r != "object") {
              throw TypeError(r + "must be non-object");
            }
            for (var i in r) {
              if (Object.prototype.hasOwnProperty.call(r, i)) {
                e[i] = r[i];
              }
            }
          }
        }
        return e;
      }
      function tz(e) {
        var t = 0;
        var r = 0;
        var i = e.length;
        for (; r < i; r++) {
          t += e[r].length;
        }
        var n = new Uint8Array(t);
        var o = 0;
        var s = 0;
        var a = e.length;
        for (; o < a; o++) {
          var c = e[o];
          n.set(c, s);
          s += c.length;
        }
        return n;
      }
      var tS = true;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        tS = false;
      }
      var tw = new Uint8Array(256);
      var tk = 0;
      for (; tk < 256; tk++) {
        tw[tk] = tk >= 252 ? 6 : tk >= 248 ? 5 : tk >= 240 ? 4 : tk >= 224 ? 3 : tk >= 192 ? 2 : 1;
      }
      function tx() {
        this.input = null;
        this.next_in = 0;
        this.avail_in = 0;
        this.total_in = 0;
        this.output = null;
        this.next_out = 0;
        this.avail_out = 0;
        this.total_out = 0;
        this.msg = "";
        this.state = null;
        this.data_type = 2;
        this.adler = 0;
      }
      tw[254] = tw[254] = 1;
      function tE(e) {
        if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
          return new TextEncoder().encode(e);
        }
        var t;
        var r;
        var i;
        var n;
        var o = e.length;
        var s = 0;
        var a = 0;
        for (; a < o; a++) {
          if (((r = e.charCodeAt(a)) & 64512) == 55296 && a + 1 < o && ((i = e.charCodeAt(a + 1)) & 64512) == 56320) {
            r = 65536 + (r - 55296 << 10) + (i - 56320);
            a++;
          }
          s += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
        }
        t = new Uint8Array(s);
        a = n = 0;
        for (; n < s; a++) {
          if (((r = e.charCodeAt(a)) & 64512) == 55296 && a + 1 < o && ((i = e.charCodeAt(a + 1)) & 64512) == 56320) {
            r = 65536 + (r - 55296 << 10) + (i - 56320);
            a++;
          }
          if (r < 128) {
            t[n++] = r;
          } else {
            if (r < 2048) {
              t[n++] = r >>> 6 | 192;
            } else {
              if (r < 65536) {
                t[n++] = r >>> 12 | 224;
              } else {
                t[n++] = r >>> 18 | 240;
                t[n++] = r >>> 12 & 63 | 128;
              }
              t[n++] = r >>> 6 & 63 | 128;
            }
            t[n++] = r & 63 | 128;
          }
        }
        return t;
      }
      function tO(e, t) {
        var r = t || e.length;
        if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
          return new TextDecoder().decode(e.subarray(0, t));
        }
        var i = Array(r * 2);
        var n = 0;
        var o = 0;
        while (o < r) {
          var s = e[o++];
          if (s < 128) {
            i[n++] = s;
          } else {
            var a = tw[s];
            if (a > 4) {
              i[n++] = 65533;
              o += a - 1;
            } else {
              for (s &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && o < r;) {
                s = s << 6 | e[o++] & 63;
                a--;
              }
              if (a > 1) {
                i[n++] = 65533;
              } else if (s < 65536) {
                i[n++] = s;
              } else {
                s -= 65536;
                i[n++] = s >> 10 & 1023 | 55296;
                i[n++] = s & 1023 | 56320;
              }
            }
          }
        }
        return ((e, t) => {
          if (t < 65534 && e.subarray && tS) {
            return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
          }
          var r = "";
          var i = 0;
          for (; i < t; i++) {
            r += String.fromCharCode(e[i]);
          }
          return r;
        })(i, n);
      }
      function tD(e, t) {
        for (var r = (t = (t = t || e.length) > e.length ? e.length : t) - 1; r >= 0 && (e[r] & 192) == 128;) {
          r--;
        }
        if (!(r < 0) && r !== 0 && r + tw[e[r]] > t) {
          return r;
        } else {
          return t;
        }
      }
      var tT = Object.prototype.toString;
      var tC = eV.Z_NO_FLUSH;
      var tA = eV.Z_SYNC_FLUSH;
      var tI = eV.Z_FULL_FLUSH;
      var tj = eV.Z_FINISH;
      var tB = eV.Z_OK;
      var tR = eV.Z_STREAM_END;
      var tP = eV.Z_DEFAULT_COMPRESSION;
      var tU = eV.Z_DEFAULT_STRATEGY;
      var tM = eV.Z_DEFLATED;
      function tG(e) {
        this.options = tv({
          level: tP,
          method: tM,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: tU
        }, e || {});
        var t;
        var r;
        var e = this.options;
        if (e.raw && e.windowBits > 0) {
          e.windowBits = -e.windowBits;
        } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
          e.windowBits += 16;
        }
        this.err = 0;
        this.msg = "";
        this.ended = false;
        this.chunks = [];
        this.strm = new tx();
        this.strm.avail_out = 0;
        var i = tm(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (i !== tB) {
          throw Error(eW[i]);
        }
        if (e.header) {
          t = this.strm;
          r = e.header;
          if (!tp(t) && t.state.wrap === 2) {
            t.state.gzhead = r;
          }
        }
        if (e.dictionary) {
          e = typeof e.dictionary == "string" ? tE(e.dictionary) : tT.call(e.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e.dictionary) : e.dictionary;
          if ((i = tb(this.strm, e)) !== tB) {
            throw Error(eW[i]);
          }
          this._dict_set = true;
        }
      }
      function tF(e, t) {
        (t = new tG(t)).push(e, true);
        if (t.err) {
          throw t.msg || eW[t.err];
        }
        return t.result;
      }
      function tN(e, t, r, i, n, o, s, a) {
        var c;
        var u;
        var l;
        var f;
        var h;
        var d;
        var p;
        var g;
        var m;
        var y = a.bits;
        var _ = 0;
        var b = 0;
        var v = 0;
        var z = 0;
        var S = 0;
        var w = 0;
        var k = 0;
        var x = 0;
        var E = 0;
        var O = 0;
        var D = null;
        var T = new Uint16Array(16);
        var C = new Uint16Array(16);
        var A = null;
        var _ = 0;
        for (; _ <= 15; _++) {
          T[_] = 0;
        }
        for (b = 0; b < i; b++) {
          T[t[r + b]]++;
        }
        S = y;
        z = 15;
        for (; z >= 1 && T[z] === 0; z--);
        if (z < S) {
          S = z;
        }
        if (z === 0) {
          n[o++] = 20971520;
          n[o++] = 20971520;
          a.bits = 1;
        } else {
          for (v = 1; v < z && T[v] === 0; v++);
          if (S < v) {
            S = v;
          }
          _ = x = 1;
          for (; _ <= 15; _++) {
            if ((x = (x << 1) - T[_]) < 0) {
              return -1;
            }
          }
          if (x > 0 && (e === 0 || z !== 1)) {
            return -1;
          }
          C[1] = 0;
          _ = 1;
          for (; _ < 15; _++) {
            C[_ + 1] = C[_] + T[_];
          }
          for (b = 0; b < i; b++) {
            if (t[r + b] !== 0) {
              s[C[t[r + b]]++] = b;
            }
          }
          d = e === 0 ? (D = A = s, 20) : e === 1 ? (D = tL, A = tK, 257) : (D = tq, A = tW, 0);
          _ = v;
          h = o;
          k = b = O = 0;
          l = -1;
          f = (E = 1 << (w = S)) - 1;
          if (e === 1 && E > 852 || e === 2 && E > 592) {
            return 1;
          }
          while (true) {
            m = s[b] + 1 < d ? (g = 0, s[b]) : s[b] >= d ? (g = A[s[b] - d], D[s[b] - d]) : (g = 96, 0);
            c = 1 << (p = _ - k);
            v = u = 1 << w;
            while (n[h + (O >> k) + (u -= c)] = p << 24 | g << 16 | m | 0, u !== 0);
            for (c = 1 << _ - 1; O & c;) {
              c >>= 1;
            }
            O = c !== 0 ? (O & c - 1) + c : 0;
            b++;
            if (--T[_] == 0) {
              if (_ === z) {
                break;
              }
              _ = t[r + s[b]];
            }
            if (S < _ && (O & f) !== l) {
              h += v;
              x = 1 << (w = _ - (k = k === 0 ? S : k));
              while (w + k < z && !((x -= T[w + k]) <= 0)) {
                w++;
                x <<= 1;
              }
              E += 1 << w;
              if (e === 1 && E > 852 || e === 2 && E > 592) {
                return 1;
              }
              n[l = O & f] = S << 24 | w << 16 | h - o | 0;
            }
          }
          if (O !== 0) {
            n[h + O] = _ - k << 24 | 4194304;
          }
          a.bits = S;
        }
        return 0;
      }
      function tH(e) {
        return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
      }
      tG.prototype.push = function (e, t) {
        var r;
        var i;
        var n = this.strm;
        var o = this.options.chunkSize;
        if (this.ended) {
          return false;
        }
        i = t === ~~t ? t : t === true ? tj : tC;
        if (typeof e == "string") {
          n.input = tE(e);
        } else if (tT.call(e) === "[object ArrayBuffer]") {
          n.input = new Uint8Array(e);
        } else {
          n.input = e;
        }
        n.next_in = 0;
        n.avail_in = n.input.length;
        while (true) {
          if (n.avail_out === 0) {
            n.output = new Uint8Array(o);
            n.next_out = 0;
            n.avail_out = o;
          }
          if ((i === tA || i === tI) && n.avail_out <= 6) {
            this.onData(n.output.subarray(0, n.next_out));
            n.avail_out = 0;
          } else {
            if (ty(n, i) === tR) {
              if (n.next_out > 0) {
                this.onData(n.output.subarray(0, n.next_out));
              }
              r = t_(this.strm);
              this.onEnd(r);
              this.ended = true;
              return r === tB;
            }
            if (n.avail_out !== 0) {
              if (i > 0 && n.next_out > 0) {
                this.onData(n.output.subarray(0, n.next_out));
                n.avail_out = 0;
              } else if (n.avail_in === 0) {
                break;
              }
            } else {
              this.onData(n.output);
            }
          }
        }
        return true;
      };
      tG.prototype.onData = function (e) {
        this.chunks.push(e);
      };
      tG.prototype.onEnd = function (e) {
        if (e === tB) {
          this.result = tz(this.chunks);
        }
        this.chunks = [];
        this.err = e;
        this.msg = this.strm.msg;
      };
      var eG = {
        Deflate: tG,
        deflate: tF,
        deflateRaw: function (e, t) {
          (t = t || {}).raw = true;
          return tF(e, t);
        },
        gzip: function (e, t) {
          (t = t || {}).gzip = true;
          return tF(e, t);
        },
        constants: eV
      };
      var tL = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
      var tK = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
      var tq = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
      var tW = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
      var tV = eV.Z_FINISH;
      var tJ = eV.Z_BLOCK;
      var tZ = eV.Z_TREES;
      var tX = eV.Z_OK;
      var tQ = eV.Z_STREAM_END;
      var t$ = eV.Z_NEED_DICT;
      var tY = eV.Z_STREAM_ERROR;
      var t1 = eV.Z_DATA_ERROR;
      var t0 = eV.Z_MEM_ERROR;
      var t2 = eV.Z_BUF_ERROR;
      var t4 = eV.Z_DEFLATED;
      function t3() {
        this.strm = null;
        this.mode = 0;
        this.last = false;
        this.wrap = 0;
        this.havedict = false;
        this.flags = 0;
        this.dmax = 0;
        this.check = 0;
        this.total = 0;
        this.head = null;
        this.wbits = 0;
        this.wsize = 0;
        this.whave = 0;
        this.wnext = 0;
        this.window = null;
        this.hold = 0;
        this.bits = 0;
        this.length = 0;
        this.offset = 0;
        this.extra = 0;
        this.lencode = null;
        this.distcode = null;
        this.lenbits = 0;
        this.distbits = 0;
        this.ncode = 0;
        this.nlen = 0;
        this.ndist = 0;
        this.have = 0;
        this.next = null;
        this.lens = new Uint16Array(320);
        this.work = new Uint16Array(288);
        this.lendyn = null;
        this.distdyn = null;
        this.sane = 0;
        this.back = 0;
        this.was = 0;
      }
      function t5(e) {
        var t;
        var r;
        if (re(e)) {
          return tY;
        } else {
          (t = e.state).wsize = 0;
          t.whave = 0;
          t.wnext = 0;
          if (re(e)) {
            return tY;
          } else {
            r = e.state;
            e.total_in = e.total_out = r.total = 0;
            e.msg = "";
            if (r.wrap) {
              e.adler = r.wrap & 1;
            }
            r.mode = 16180;
            r.last = 0;
            r.havedict = 0;
            r.flags = -1;
            r.dmax = 32768;
            r.head = null;
            r.hold = 0;
            r.bits = 0;
            r.lencode = r.lendyn = new Int32Array(852);
            r.distcode = r.distdyn = new Int32Array(592);
            r.sane = 1;
            r.back = -1;
            return tX;
          }
        }
      }
      function t6(e, t, r, i) {
        var n;
        if ((e = e.state).window === null) {
          e.wsize = 1 << e.wbits;
          e.wnext = 0;
          e.whave = 0;
          e.window = new Uint8Array(e.wsize);
        }
        if (e.wsize <= i) {
          e.window.set(t.subarray(r - e.wsize, r), 0);
          e.wnext = 0;
          e.whave = e.wsize;
        } else {
          if ((n = e.wsize - e.wnext) > i) {
            n = i;
          }
          e.window.set(t.subarray(r - i, r - i + n), e.wnext);
          if (i -= n) {
            e.window.set(t.subarray(r - i, r), 0);
            e.wnext = i;
            e.whave = e.wsize;
          } else {
            e.wnext += n;
            if (e.wnext === e.wsize) {
              e.wnext = 0;
            }
            if (e.whave < e.wsize) {
              e.whave += n;
            }
          }
        }
        return 0;
      }
      function t8() {
        this.text = 0;
        this.time = 0;
        this.xflags = 0;
        this.os = 0;
        this.extra = null;
        this.extra_len = 0;
        this.name = "";
        this.comment = "";
        this.hcrc = 0;
        this.done = false;
      }
      var t9;
      var t7;
      function re(e) {
        var t;
        if (e && (t = e.state) && t.strm === e && !(t.mode < 16180) && !(t.mode > 16211)) {
          return 0;
        } else {
          return 1;
        }
      }
      var rt = true;
      function rr(e, t) {
        var r;
        var i;
        var n;
        var o;
        if (e) {
          r = new t3();
          (e.state = r).strm = e;
          r.window = null;
          r.mode = 16180;
          i = t;
          if ((r = re(e) || (o = e.state, i < 0 ? (n = 0, i = -i) : (n = 5 + (i >> 4), i < 48 && (i &= 15)), i && (i < 8 || i > 15)) ? tY : (o.window !== null && o.wbits !== i && (o.window = null), o.wrap = n, o.wbits = i, t5(e))) !== tX) {
            e.state = null;
          }
          return r;
        } else {
          return tY;
        }
      }
      function ri(e, t) {
        var r;
        var i;
        var n;
        var o;
        var s;
        var a;
        var c;
        var u;
        var l;
        var f;
        var h;
        var d;
        var p;
        var g;
        var m;
        var y;
        var _;
        var b;
        var v;
        var z;
        var S;
        var w;
        var k;
        var x;
        var E = 0;
        var O = new Uint8Array(4);
        var D = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (re(e) || !e.output || !e.input && e.avail_in !== 0) {
          return tY;
        }
        if ((r = e.state).mode === 16191) {
          r.mode = 16192;
        }
        s = e.next_out;
        n = e.output;
        o = e.next_in;
        i = e.input;
        u = r.hold;
        l = r.bits;
        f = a = e.avail_in;
        h = c = e.avail_out;
        w = tX;
        e: while (true) {
          switch (r.mode) {
            case 16180:
              if (r.wrap === 0) {
                r.mode = 16192;
              } else {
                while (l < 16) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                if (r.wrap & 2 && u === 35615) {
                  if (r.wbits === 0) {
                    r.wbits = 15;
                  }
                  O[r.check = 0] = u & 255;
                  O[1] = u >>> 8 & 255;
                  r.check = eq(r.check, O, 2, 0);
                  l = u = 0;
                  r.mode = 16181;
                } else {
                  if (r.head) {
                    r.head.done = false;
                  }
                  if (!(r.wrap & 1) || (((u & 255) << 8) + (u >> 8)) % 31) {
                    e.msg = "incorrect header check";
                    r.mode = 16209;
                  } else if ((u & 15) !== t4) {
                    e.msg = "unknown compression method";
                    r.mode = 16209;
                  } else {
                    l -= 4;
                    S = 8 + ((u >>>= 4) & 15);
                    if (r.wbits === 0) {
                      r.wbits = S;
                    }
                    if (S > 15 || S > r.wbits) {
                      e.msg = "invalid window size";
                      r.mode = 16209;
                    } else {
                      r.dmax = 1 << r.wbits;
                      r.flags = 0;
                      e.adler = r.check = 1;
                      r.mode = u & 512 ? 16189 : 16191;
                      l = u = 0;
                    }
                  }
                }
              }
              break;
            case 16181:
              while (l < 16) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              r.flags = u;
              if ((r.flags & 255) !== t4) {
                e.msg = "unknown compression method";
                r.mode = 16209;
                break;
              }
              if (r.flags & 57344) {
                e.msg = "unknown header flags set";
                r.mode = 16209;
                break;
              }
              if (r.head) {
                r.head.text = u >> 8 & 1;
              }
              if (r.flags & 512 && r.wrap & 4) {
                O[0] = u & 255;
                O[1] = u >>> 8 & 255;
                r.check = eq(r.check, O, 2, 0);
              }
              l = u = 0;
              r.mode = 16182;
            case 16182:
              while (l < 32) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              if (r.head) {
                r.head.time = u;
              }
              if (r.flags & 512 && r.wrap & 4) {
                O[0] = u & 255;
                O[1] = u >>> 8 & 255;
                O[2] = u >>> 16 & 255;
                O[3] = u >>> 24 & 255;
                r.check = eq(r.check, O, 4, 0);
              }
              l = u = 0;
              r.mode = 16183;
            case 16183:
              while (l < 16) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              if (r.head) {
                r.head.xflags = u & 255;
                r.head.os = u >> 8;
              }
              if (r.flags & 512 && r.wrap & 4) {
                O[0] = u & 255;
                O[1] = u >>> 8 & 255;
                r.check = eq(r.check, O, 2, 0);
              }
              l = u = 0;
              r.mode = 16184;
            case 16184:
              if (r.flags & 1024) {
                while (l < 16) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                r.length = u;
                if (r.head) {
                  r.head.extra_len = u;
                }
                if (r.flags & 512 && r.wrap & 4) {
                  O[0] = u & 255;
                  O[1] = u >>> 8 & 255;
                  r.check = eq(r.check, O, 2, 0);
                }
                l = u = 0;
              } else if (r.head) {
                r.head.extra = null;
              }
              r.mode = 16185;
            case 16185:
              if (r.flags & 1024 && ((d = (d = r.length) > a ? a : d) && (r.head && (S = r.head.extra_len - r.length, r.head.extra ||= new Uint8Array(r.head.extra_len), r.head.extra.set(i.subarray(o, o + d), S)), r.flags & 512 && r.wrap & 4 && (r.check = eq(r.check, i, d, o)), a -= d, o += d, r.length -= d), r.length)) {
                break e;
              }
              r.length = 0;
              r.mode = 16186;
            case 16186:
              if (r.flags & 2048) {
                if (a === 0) {
                  break e;
                }
                for (d = 0; S = i[o + d++], r.head && S && r.length < 65536 && (r.head.name += String.fromCharCode(S)), S && d < a;);
                if (r.flags & 512 && r.wrap & 4) {
                  r.check = eq(r.check, i, d, o);
                }
                a -= d;
                o += d;
                if (S) {
                  break e;
                }
              } else if (r.head) {
                r.head.name = null;
              }
              r.length = 0;
              r.mode = 16187;
            case 16187:
              if (r.flags & 4096) {
                if (a === 0) {
                  break e;
                }
                for (d = 0; S = i[o + d++], r.head && S && r.length < 65536 && (r.head.comment += String.fromCharCode(S)), S && d < a;);
                if (r.flags & 512 && r.wrap & 4) {
                  r.check = eq(r.check, i, d, o);
                }
                a -= d;
                o += d;
                if (S) {
                  break e;
                }
              } else if (r.head) {
                r.head.comment = null;
              }
              r.mode = 16188;
            case 16188:
              if (r.flags & 512) {
                while (l < 16) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                if (r.wrap & 4 && u !== (r.check & 65535)) {
                  e.msg = "header crc mismatch";
                  r.mode = 16209;
                  break;
                }
                l = u = 0;
              }
              if (r.head) {
                r.head.hcrc = r.flags >> 9 & 1;
                r.head.done = true;
              }
              e.adler = r.check = 0;
              r.mode = 16191;
              break;
            case 16189:
              while (l < 32) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              e.adler = r.check = tH(u);
              l = u = 0;
              r.mode = 16190;
            case 16190:
              if (r.havedict === 0) {
                e.next_out = s;
                e.avail_out = c;
                e.next_in = o;
                e.avail_in = a;
                r.hold = u;
                r.bits = l;
                return t$;
              }
              e.adler = r.check = 1;
              r.mode = 16191;
            case 16191:
              if (t === tJ || t === tZ) {
                break e;
              }
            case 16192:
              if (r.last) {
                u >>>= l & 7;
                l -= l & 7;
                r.mode = 16206;
              } else {
                while (l < 3) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                r.last = u & 1;
                --l;
                switch ((u >>>= 1) & 3) {
                  case 0:
                    r.mode = 16193;
                    break;
                  case 1:
                    (e => {
                      if (rt) {
                        t9 = new Int32Array(512);
                        t7 = new Int32Array(32);
                        for (var t = 0; t < 144;) {
                          e.lens[t++] = 8;
                        }
                        while (t < 256) {
                          e.lens[t++] = 9;
                        }
                        while (t < 280) {
                          e.lens[t++] = 7;
                        }
                        while (t < 288) {
                          e.lens[t++] = 8;
                        }
                        tN(1, e.lens, 0, 288, t9, 0, e.work, {
                          bits: 9
                        });
                        t = 0;
                        while (t < 32) {
                          e.lens[t++] = 5;
                        }
                        tN(2, e.lens, 0, 32, t7, 0, e.work, {
                          bits: 5
                        });
                        rt = false;
                      }
                      e.lencode = t9;
                      e.lenbits = 9;
                      e.distcode = t7;
                      e.distbits = 5;
                    })(r);
                    r.mode = 16199;
                    if (t !== tZ) {
                      break;
                    }
                    u >>>= 2;
                    l -= 2;
                    break e;
                  case 2:
                    r.mode = 16196;
                    break;
                  case 3:
                    e.msg = "invalid block type";
                    r.mode = 16209;
                }
                u >>>= 2;
                l -= 2;
              }
              break;
            case 16193:
              u >>>= l & 7;
              l -= l & 7;
              while (l < 32) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              if ((u & 65535) != (u >>> 16 ^ 65535)) {
                e.msg = "invalid stored block lengths";
                r.mode = 16209;
                break;
              }
              r.length = u & 65535;
              l = u = 0;
              r.mode = 16194;
              if (t === tZ) {
                break e;
              }
            case 16194:
              r.mode = 16195;
            case 16195:
              if (d = r.length) {
                if ((d = c < (d = a < d ? a : d) ? c : d) === 0) {
                  break e;
                }
                n.set(i.subarray(o, o + d), s);
                a -= d;
                o += d;
                c -= d;
                s += d;
                r.length -= d;
              } else {
                r.mode = 16191;
              }
              break;
            case 16196:
              while (l < 14) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              r.nlen = 257 + (u & 31);
              u >>>= 5;
              l -= 5;
              r.ndist = 1 + (u & 31);
              u >>>= 5;
              l -= 5;
              r.ncode = 4 + (u & 15);
              u >>>= 4;
              l -= 4;
              if (r.nlen > 286 || r.ndist > 30) {
                e.msg = "too many length or distance symbols";
                r.mode = 16209;
                break;
              }
              r.have = 0;
              r.mode = 16197;
            case 16197:
              while (r.have < r.ncode) {
                while (l < 3) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                r.lens[D[r.have++]] = u & 7;
                u >>>= 3;
                l -= 3;
              }
              while (r.have < 19) {
                r.lens[D[r.have++]] = 0;
              }
              r.lencode = r.lendyn;
              r.lenbits = 7;
              k = {
                bits: r.lenbits
              };
              w = tN(0, r.lens, 0, 19, r.lencode, 0, r.work, k);
              r.lenbits = k.bits;
              if (w) {
                e.msg = "invalid code lengths set";
                r.mode = 16209;
                break;
              }
              r.have = 0;
              r.mode = 16198;
            case 16198:
              while (r.have < r.nlen + r.ndist) {
                while (y = (E = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, _ = E & 65535, !((m = E >>> 24) <= l)) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                if (_ < 16) {
                  u >>>= m;
                  l -= m;
                  r.lens[r.have++] = _;
                } else {
                  if (_ === 16) {
                    for (x = m + 2; l < x;) {
                      if (a === 0) {
                        break e;
                      }
                      a--;
                      u += i[o++] << l;
                      l += 8;
                    }
                    u >>>= m;
                    l -= m;
                    if (r.have === 0) {
                      e.msg = "invalid bit length repeat";
                      r.mode = 16209;
                      break;
                    }
                    S = r.lens[r.have - 1];
                    d = 3 + (u & 3);
                    u >>>= 2;
                    l -= 2;
                  } else if (_ === 17) {
                    for (x = m + 3; l < x;) {
                      if (a === 0) {
                        break e;
                      }
                      a--;
                      u += i[o++] << l;
                      l += 8;
                    }
                    S = 0;
                    d = 3 + ((u >>>= m) & 7);
                    u >>>= 3;
                    l = l - m - 3;
                  } else {
                    for (x = m + 7; l < x;) {
                      if (a === 0) {
                        break e;
                      }
                      a--;
                      u += i[o++] << l;
                      l += 8;
                    }
                    S = 0;
                    d = 11 + ((u >>>= m) & 127);
                    u >>>= 7;
                    l = l - m - 7;
                  }
                  if (r.have + d > r.nlen + r.ndist) {
                    e.msg = "invalid bit length repeat";
                    r.mode = 16209;
                    break;
                  }
                  while (d--) {
                    r.lens[r.have++] = S;
                  }
                }
              }
              if (r.mode === 16209) {
                break;
              }
              if (r.lens[256] === 0) {
                e.msg = "invalid code -- missing end-of-block";
                r.mode = 16209;
                break;
              }
              r.lenbits = 9;
              k = {
                bits: r.lenbits
              };
              w = tN(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, k);
              r.lenbits = k.bits;
              if (w) {
                e.msg = "invalid literal/lengths set";
                r.mode = 16209;
                break;
              }
              r.distbits = 6;
              r.distcode = r.distdyn;
              k = {
                bits: r.distbits
              };
              w = tN(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, k);
              r.distbits = k.bits;
              if (w) {
                e.msg = "invalid distances set";
                r.mode = 16209;
                break;
              }
              r.mode = 16199;
              if (t === tZ) {
                break e;
              }
            case 16199:
              r.mode = 16200;
            case 16200:
              if (a >= 6 && c >= 258) {
                e.next_out = s;
                e.avail_out = c;
                e.next_in = o;
                e.avail_in = a;
                r.hold = u;
                r.bits = l;
                ((e, t) => {
                  var r;
                  var i;
                  var n;
                  var o;
                  var s;
                  var a;
                  var c = e.state;
                  var u = e.next_in;
                  var l = e.input;
                  var f = u + (e.avail_in - 5);
                  var h = e.next_out;
                  var d = e.output;
                  var p = h - (t - e.avail_out);
                  var g = h + (e.avail_out - 257);
                  var m = c.dmax;
                  var y = c.wsize;
                  var _ = c.whave;
                  var b = c.wnext;
                  var v = c.window;
                  var z = c.hold;
                  var S = c.bits;
                  var w = c.lencode;
                  var k = c.distcode;
                  var x = (1 << c.lenbits) - 1;
                  var E = (1 << c.distbits) - 1;
                  t: do {
                    if (S < 15) {
                      z += l[u++] << S;
                      S += 8;
                      z += l[u++] << S;
                      S += 8;
                    }
                    r = w[z & x];
                    while (true) {
                      z >>>= i = r >>> 24;
                      S -= i;
                      if ((i = r >>> 16 & 255) == 0) {
                        d[h++] = r & 65535;
                      } else {
                        if (!(i & 16)) {
                          if ((i & 64) == 0) {
                            r = w[(r & 65535) + (z & (1 << i) - 1)];
                            continue;
                          }
                          if (i & 32) {
                            c.mode = 16191;
                            break t;
                          }
                          e.msg = "invalid literal/length code";
                          c.mode = 16209;
                          break t;
                        }
                        n = r & 65535;
                        if (i &= 15) {
                          if (S < i) {
                            z += l[u++] << S;
                            S += 8;
                          }
                          n += z & (1 << i) - 1;
                          z >>>= i;
                          S -= i;
                        }
                        if (S < 15) {
                          z += l[u++] << S;
                          S += 8;
                          z += l[u++] << S;
                          S += 8;
                        }
                        r = k[z & E];
                        while (true) {
                          z >>>= i = r >>> 24;
                          S -= i;
                          if (!((i = r >>> 16 & 255) & 16)) {
                            if ((i & 64) == 0) {
                              r = k[(r & 65535) + (z & (1 << i) - 1)];
                              continue;
                            }
                            e.msg = "invalid distance code";
                            c.mode = 16209;
                            break t;
                          }
                          o = r & 65535;
                          if (S < (i &= 15) && (z += l[u++] << S, (S += 8) < i)) {
                            z += l[u++] << S;
                            S += 8;
                          }
                          if ((o += z & (1 << i) - 1) > m) {
                            e.msg = "invalid distance too far back";
                            c.mode = 16209;
                            break t;
                          }
                          z >>>= i;
                          S -= i;
                          if (o > (i = h - p)) {
                            if ((i = o - i) > _ && c.sane) {
                              e.msg = "invalid distance too far back";
                              c.mode = 16209;
                              break t;
                            }
                            a = v;
                            if ((s = 0) === b) {
                              s += y - i;
                              if (i < n) {
                                for (n -= i; d[h++] = v[s++], --i;);
                                s = h - o;
                                a = d;
                              }
                            } else if (b < i) {
                              s += y + b - i;
                              if ((i -= b) < n) {
                                for (n -= i; d[h++] = v[s++], --i;);
                                s = 0;
                                if (b < n) {
                                  for (n -= i = b; d[h++] = v[s++], --i;);
                                  s = h - o;
                                  a = d;
                                }
                              }
                            } else {
                              s += b - i;
                              if (i < n) {
                                for (n -= i; d[h++] = v[s++], --i;);
                                s = h - o;
                                a = d;
                              }
                            }
                            while (n > 2) {
                              d[h++] = a[s++];
                              d[h++] = a[s++];
                              d[h++] = a[s++];
                              n -= 3;
                            }
                            if (n && (d[h++] = a[s++], n > 1)) {
                              d[h++] = a[s++];
                            }
                          } else {
                            for (s = h - o; d[h++] = d[s++], d[h++] = d[s++], d[h++] = d[s++], (n -= 3) > 2;);
                            if (n && (d[h++] = d[s++], n > 1)) {
                              d[h++] = d[s++];
                            }
                          }
                          break;
                        }
                      }
                      break;
                    }
                  } while (u < f && h < g);
                  u -= n = S >> 3;
                  z &= (1 << (S -= n << 3)) - 1;
                  e.next_in = u;
                  e.next_out = h;
                  e.avail_in = u < f ? f - u + 5 : 5 - (u - f);
                  e.avail_out = h < g ? g - h + 257 : 257 - (h - g);
                  c.hold = z;
                  c.bits = S;
                })(e, h);
                s = e.next_out;
                n = e.output;
                c = e.avail_out;
                o = e.next_in;
                i = e.input;
                a = e.avail_in;
                u = r.hold;
                l = r.bits;
                if (r.mode === 16191) {
                  r.back = -1;
                }
                break;
              }
              for (r.back = 0; y = (E = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, _ = E & 65535, !((m = E >>> 24) <= l);) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              if (y && (y & 240) == 0) {
                b = m;
                v = y;
                z = _;
                while (y = (E = r.lencode[z + ((u & (1 << b + v) - 1) >> b)]) >>> 16 & 255, _ = E & 65535, !(b + (m = E >>> 24) <= l)) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                u >>>= b;
                l -= b;
                r.back += b;
              }
              u >>>= m;
              l -= m;
              r.back += m;
              r.length = _;
              if (y === 0) {
                r.mode = 16205;
                break;
              }
              if (y & 32) {
                r.back = -1;
                r.mode = 16191;
                break;
              }
              if (y & 64) {
                e.msg = "invalid literal/length code";
                r.mode = 16209;
                break;
              }
              r.extra = y & 15;
              r.mode = 16201;
            case 16201:
              if (r.extra) {
                for (x = r.extra; l < x;) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                r.length += u & (1 << r.extra) - 1;
                u >>>= r.extra;
                l -= r.extra;
                r.back += r.extra;
              }
              r.was = r.length;
              r.mode = 16202;
            case 16202:
              while (y = (E = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, _ = E & 65535, !((m = E >>> 24) <= l)) {
                if (a === 0) {
                  break e;
                }
                a--;
                u += i[o++] << l;
                l += 8;
              }
              if ((y & 240) == 0) {
                b = m;
                v = y;
                z = _;
                while (y = (E = r.distcode[z + ((u & (1 << b + v) - 1) >> b)]) >>> 16 & 255, _ = E & 65535, !(b + (m = E >>> 24) <= l)) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                u >>>= b;
                l -= b;
                r.back += b;
              }
              u >>>= m;
              l -= m;
              r.back += m;
              if (y & 64) {
                e.msg = "invalid distance code";
                r.mode = 16209;
                break;
              }
              r.offset = _;
              r.extra = y & 15;
              r.mode = 16203;
            case 16203:
              if (r.extra) {
                for (x = r.extra; l < x;) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                r.offset += u & (1 << r.extra) - 1;
                u >>>= r.extra;
                l -= r.extra;
                r.back += r.extra;
              }
              if (r.offset > r.dmax) {
                e.msg = "invalid distance too far back";
                r.mode = 16209;
                break;
              }
              r.mode = 16204;
            case 16204:
              if (c === 0) {
                break e;
              }
              if (r.offset > (d = h - c)) {
                if ((d = r.offset - d) > r.whave && r.sane) {
                  e.msg = "invalid distance too far back";
                  r.mode = 16209;
                  break;
                }
                p = d > r.wnext ? (d -= r.wnext, r.wsize - d) : r.wnext - d;
                if (d > r.length) {
                  d = r.length;
                }
                g = r.window;
              } else {
                g = n;
                p = s - r.offset;
                d = r.length;
              }
              c -= d = c < d ? c : d;
              r.length -= d;
              while (n[s++] = g[p++], --d);
              if (r.length === 0) {
                r.mode = 16200;
              }
              break;
            case 16205:
              if (c === 0) {
                break e;
              }
              n[s++] = r.length;
              c--;
              r.mode = 16200;
              break;
            case 16206:
              if (r.wrap) {
                while (l < 32) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u |= i[o++] << l;
                  l += 8;
                }
                h -= c;
                e.total_out += h;
                r.total += h;
                if (r.wrap & 4 && h) {
                  e.adler = r.check = (r.flags ? eq : eL)(r.check, n, h, s - h);
                }
                h = c;
                if (r.wrap & 4 && (r.flags ? u : tH(u)) !== r.check) {
                  e.msg = "incorrect data check";
                  r.mode = 16209;
                  break;
                }
                l = u = 0;
              }
              r.mode = 16207;
            case 16207:
              if (r.wrap && r.flags) {
                while (l < 32) {
                  if (a === 0) {
                    break e;
                  }
                  a--;
                  u += i[o++] << l;
                  l += 8;
                }
                if (r.wrap & 4 && u !== (r.total & -1)) {
                  e.msg = "incorrect length check";
                  r.mode = 16209;
                  break;
                }
                l = u = 0;
              }
              r.mode = 16208;
            case 16208:
              w = tQ;
              break e;
            case 16209:
              w = t1;
              break e;
            case 16210:
              return t0;
            default:
              return tY;
          }
        }
        e.next_out = s;
        e.avail_out = c;
        e.next_in = o;
        e.avail_in = a;
        r.hold = u;
        r.bits = l;
        if (r.wsize || h !== e.avail_out && r.mode < 16209 && (r.mode < 16206 || t !== tV)) {
          t6(e, e.output, e.next_out, h - e.avail_out);
        }
        h -= e.avail_out;
        e.total_in += f -= e.avail_in;
        e.total_out += h;
        r.total += h;
        if (r.wrap & 4 && h) {
          e.adler = r.check = (r.flags ? eq : eL)(r.check, n, h, e.next_out - h);
        }
        e.data_type = r.bits + !!r.last * 64 + (r.mode === 16191) * 128 + (r.mode === 16199 || r.mode === 16194) * 256;
        return w = (f == 0 && h === 0 || t === tV) && w === tX ? t2 : w;
      }
      function rn(e) {
        if (re(e)) {
          return tY;
        } else {
          e.state.window &&= null;
          e.state = null;
          return tX;
        }
      }
      function ro(e, t) {
        var r;
        var i = t.length;
        if (re(e) || (r = e.state).wrap !== 0 && r.mode !== 16190) {
          return tY;
        } else if (r.mode === 16190 && eL(1, t, i, 0) !== r.check) {
          return t1;
        } else if (t6(e, t, i, i)) {
          r.mode = 16210;
          return t0;
        } else {
          r.havedict = 1;
          return tX;
        }
      }
      var rs = Object.prototype.toString;
      var ra = eV.Z_NO_FLUSH;
      var rc = eV.Z_FINISH;
      var ru = eV.Z_OK;
      var rl = eV.Z_STREAM_END;
      var rf = eV.Z_NEED_DICT;
      var rh = eV.Z_STREAM_ERROR;
      var rd = eV.Z_DATA_ERROR;
      var rp = eV.Z_MEM_ERROR;
      function rg(e) {
        this.options = tv({
          chunkSize: 65536,
          windowBits: 15,
          to: ""
        }, e || {});
        var t;
        var r;
        var i = this.options;
        if (i.raw && i.windowBits >= 0 && i.windowBits < 16 && (i.windowBits = -i.windowBits, i.windowBits === 0)) {
          i.windowBits = -15;
        }
        if (!!(i.windowBits >= 0) && !!(i.windowBits < 16) && (!e || !e.windowBits)) {
          i.windowBits += 32;
        }
        if (i.windowBits > 15 && i.windowBits < 48 && (i.windowBits & 15) == 0) {
          i.windowBits |= 15;
        }
        this.err = 0;
        this.msg = "";
        this.ended = false;
        this.chunks = [];
        this.strm = new tx();
        this.strm.avail_out = 0;
        var e = rr(this.strm, i.windowBits);
        if (e !== ru || (this.header = new t8(), t = this.strm, r = this.header, re(t) || ((t = t.state).wrap & 2) == 0 || ((t.head = r).done = false), i.dictionary && (typeof i.dictionary == "string" ? i.dictionary = tE(i.dictionary) : rs.call(i.dictionary) === "[object ArrayBuffer]" && (i.dictionary = new Uint8Array(i.dictionary)), i.raw) && (e = ro(this.strm, i.dictionary)) !== ru)) {
          throw Error(eW[e]);
        }
      }
      function rm(e, t) {
        (t = new rg(t)).push(e);
        if (t.err) {
          throw t.msg || eW[t.err];
        }
        return t.result;
      }
      rg.prototype.push = function (e, t) {
        var r;
        var i;
        var n = this.strm;
        var o = this.options.chunkSize;
        var s = this.options.dictionary;
        if (this.ended) {
          return false;
        }
        i = t === ~~t ? t : t === true ? rc : ra;
        if (rs.call(e) === "[object ArrayBuffer]") {
          n.input = new Uint8Array(e);
        } else {
          n.input = e;
        }
        n.next_in = 0;
        n.avail_in = n.input.length;
        while (true) {
          if (n.avail_out === 0) {
            n.output = new Uint8Array(o);
            n.next_out = 0;
            n.avail_out = o;
          }
          if ((r = ri(n, i)) === rf && s) {
            if ((r = ro(n, s)) === ru) {
              r = ri(n, i);
            } else if (r === rd) {
              r = rf;
            }
          }
          while (n.avail_in > 0 && r === rl && n.state.wrap > 0 && e[n.next_in] !== 0) {
            t5(n);
            r = ri(n, i);
          }
          switch (r) {
            case rh:
            case rd:
            case rf:
            case rp:
              this.onEnd(r);
              this.ended = true;
              return false;
          }
          var a;
          var c;
          var u;
          var l = n.avail_out;
          if (n.next_out && (n.avail_out === 0 || r === rl)) {
            if (this.options.to === "string") {
              a = tD(n.output, n.next_out);
              c = n.next_out - a;
              u = tO(n.output, a);
              n.next_out = c;
              n.avail_out = o - c;
              if (c) {
                n.output.set(n.output.subarray(a, a + c), 0);
              }
              this.onData(u);
            } else {
              this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
            }
          }
          if (r !== ru || l !== 0) {
            if (r === rl) {
              r = rn(this.strm);
              this.onEnd(r);
              return this.ended = true;
            }
            if (n.avail_in === 0) {
              break;
            }
          }
        }
        return true;
      };
      rg.prototype.onData = function (e) {
        this.chunks.push(e);
      };
      rg.prototype.onEnd = function (e) {
        if (e === ru) {
          if (this.options.to === "string") {
            this.result = this.chunks.join("");
          } else {
            this.result = tz(this.chunks);
          }
        }
        this.chunks = [];
        this.err = e;
        this.msg = this.strm.msg;
      };
      var t = {
        Inflate: rg,
        inflate: rm,
        inflateRaw: function (e, t) {
          (t = t || {}).raw = true;
          return rm(e, t);
        },
        ungzip: rm,
        constants: eV
      };
      var ry = {
        Deflate: eG.Deflate,
        deflate: eG.deflate,
        deflateRaw: eG.deflateRaw,
        gzip: eG.gzip,
        Inflate: t.Inflate,
        inflate: t.inflate,
        inflateRaw: t.inflateRaw,
        ungzip: t.ungzip,
        constants: eV
      };
      var r_ = (() => {
        function e(e, t) {
          var r = this;
          this.collector = e;
          this.config = t;
          this.requestType = t.request_type || "xhr";
          this.supportBeacon = !!window.navigator && !!window.navigator.sendBeacon;
          this.errorCode = {
            NO_URL: 4001,
            IMG_ON: 4000,
            IMG_CATCH: 4002,
            BEACON_FALSE: 4003,
            XHR_ON: 500,
            RESPONSE: 5001,
            TIMEOUT: 5005
          };
          this.customHeader = t.custom_request_header || {};
          this.collector.on("custom-request-header", function (e) {
            r.setRequestHeader(e);
          });
        }
        e.prototype.setRequestHeader = function (e) {
          this.customHeader = Object.assign(this.customHeader, e);
        };
        e.prototype.useFetch = function (e) {
          var t = e.url;
          var r = e.data;
          var i = e.method;
          var n = e.success;
          var o = e.fail;
          var s = {
            "Content-Type": "application/json; charset=utf-8"
          };
          if (Object.keys(this.customHeader).length) {
            for (var a in this.customHeader) {
              s[a] = this.customHeader[a];
            }
          }
          if (window.fetch) {
            fetch(t, {
              method: i || "POST",
              headers: s,
              body: JSON.stringify(r)
            }).then(function (e) {
              return e.json();
            }).then(function (e) {
              if (n) {
                n(e);
              }
            }).catch(function (e) {
              if (o) {
                o(r, e);
              }
            });
          } else {
            this.requestType = "xhr";
            this.useRequest({
              url: t,
              data: r,
              method: i,
              success: n,
              fail: o
            });
          }
        };
        e.prototype.useBeacon = function (e) {
          var t = e.url;
          var r = e.data;
          var i = e.success;
          var e = e.fail;
          if (window.navigator.sendBeacon(t, JSON.stringify(r))) {
            if (i) {
              i();
            }
          } else if (e) {
            e(r, this.errorCode.BEACON_FALSE);
          }
        };
        e.prototype.useRequest = function (e) {
          var t = this;
          var r = e.url;
          var i = e.data;
          var n = e.method;
          var o = e.success;
          var s = e.fail;
          var a = e.timeout;
          var c = e.withCredentials;
          var u = e.app_key;
          var l = e.forceXhr;
          var f = e.zip;
          if (e.useBeacon && this.supportBeacon) {
            this.useBeacon({
              url: r,
              data: i,
              method: n,
              success: o,
              fail: s
            });
          } else if (this.requestType !== "fetch" || l) {
            try {
              var h = new XMLHttpRequest();
              var d = n || "POST";
              h.open(d, "" + r, true);
              h.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              if (u) {
                h.setRequestHeader("X-MCS-AppKey", "" + u);
              }
              if (Object.keys(this.customHeader).length) {
                for (var p in this.customHeader) {
                  h.setRequestHeader(p, this.customHeader[p]);
                }
              }
              if (c) {
                h.withCredentials = true;
              }
              if (a) {
                h.timeout = a;
                h.ontimeout = function () {
                  if (s) {
                    s(i, t.errorCode.TIMEOUT);
                  }
                };
              }
              h.onload = function () {
                if (o) {
                  var e = null;
                  if (h.responseText) {
                    try {
                      e = JSON.parse(h.responseText);
                    } catch (t) {
                      e = {};
                    }
                    o(e, i);
                  }
                }
              };
              h.onerror = function () {
                h.abort();
                if (s) {
                  s(i, t.errorCode.XHR_ON);
                }
              };
              try {
                var g;
                var m;
                var y = JSON.stringify(i);
                if (this.config.need_zip && f) {
                  g = new TextEncoder().encode(y);
                  m = ry.gzip(g);
                  h.setRequestHeader("Content-Encoding", "gzip");
                  h.send(m);
                } else {
                  h.send(y);
                }
              } catch (e) {
                this.collector.emit("sdk-inner-error", {
                  type: "sdk_error_send",
                  eventData: i,
                  errorCode: 1000,
                  msg: e.message || e.stack || "sdk_error_send"
                });
              }
            } catch (e) {
              this.collector.emit("sdk-inner-error", {
                type: "sdk_error_request",
                eventData: i,
                errorCode: 1001,
                msg: e.message || e.stack || "sdk_error_request"
              });
            }
          } else {
            this.useFetch({
              url: r,
              data: i,
              method: n,
              success: o,
              fail: s
            });
          }
        };
        return e;
      })();
      var rb = (() => {
        function e(e, t) {
          this.devToolReady = false;
          this.devToolOrigin = "*";
          this.sendAlready = false;
          if (!t.disable_debug && e.configManager.get("browser") !== "Microsoft Internet Explorer") {
            this.collect = e;
            this.config = t;
            this.app_id = t.app_id;
            e = e.adapters.storage;
            this.cacheStorgae = new e(false);
            this.loadUrl = t.devtool_url || m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz1bz1cz24z22z1mz1mz1jz4bz1bz1cz19z23z1ez49z25z1cz19z4az24z4ez4az4cz4az4cz4az1hz21");
            this.filterEvent = new Set(["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "bav2b_click", "bav2b_page_exposure", "_be_active", "predefine_pageview", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append", "predefine_page_alive", "predefine_page_close", "abtest_exposure"]);
            this.load();
          }
        }
        e.prototype.loadScript = function (e) {
          try {
            var t = document.createElement("script");
            t.src = e;
            t.onerror = function () {};
            t.onload = function () {};
            document.getElementsByTagName("body")[0].appendChild(t);
          } catch (e) {}
        };
        e.prototype.parseUrl = function () {
          var e = {};
          try {
            var t = window.location.href.split("?")[1].split("&");
            if (t.length) {
              t.forEach(function (t) {
                t = t.split("=");
                e[decodeURIComponent(t[0])] = decodeURIComponent(t[1]);
              });
            }
          } catch (e) {}
          return e;
        };
        e.prototype.load = function () {
          try {
            var e = this.parseUrl();
            if (e.open_devtool_web && e.app_id) {
              if (parseInt(e.app_id) !== this.app_id) {
                return;
              }
            } else if (!this.getStorage()) {
              return;
            }
            this.loadBaseInfo();
            this.loadHook();
            this.setStorage();
            this.addLintener();
            this.loadDebuggerModule();
            this.loadDevTool();
          } catch (e) {}
        };
        e.prototype.getStorage = function () {
          var e = this.cacheStorgae.getItem("__applog_open_devtool_web");
          return e && parseInt(e) === this.app_id;
        };
        e.prototype.setStorage = function () {
          this.cacheStorgae.setItem("__applog_open_devtool_web", this.app_id);
        };
        e.prototype.loadDevTool = function () {
          this.loadScript(this.loadUrl);
        };
        e.prototype.loadBaseInfo = function () {
          var e;
          var t;
          this.log = [];
          this.event = [];
          this.info = [{
            title: "基本信息",
            key: "base",
            type: 1,
            content: [{
              name: "app_id",
              desc: "APP_ID",
              value: this.config.app_id
            }, {
              name: "channel",
              desc: "CHANNEL",
              value: this.config.channel
            }, {
              name: "domain",
              desc: "上报域名",
              value: this.collect.configManager.getDomain()
            }, {
              name: "sdk_version",
              desc: "SDK版本",
              value: M
            }, {
              name: "sdk_type",
              desc: "SDK引入方式",
              value: "npm"
            }]
          }, {
            title: "用户信息",
            key: "user",
            type: 2,
            content: [{
              name: "uuid",
              desc: "UUID",
              value: this.collect.configManager.get("user").user_unique_id || ""
            }, {
              name: "web_id",
              desc: "WEB_ID",
              value: this.collect.configManager.get("user").web_id || ""
            }]
          }, {
            title: "公共参数信息",
            type: 2,
            key: "common",
            content: [{
              name: "browser",
              desc: "浏览器",
              value: this.collect.configManager.get("browser")
            }, {
              name: "browser_version",
              desc: "浏览器版本",
              value: this.collect.configManager.get("browser_version")
            }, {
              name: "platform",
              desc: "平台",
              value: this.collect.configManager.get("platform")
            }, {
              name: "device_model",
              desc: "设备型号",
              value: this.collect.configManager.get("device_model")
            }, {
              name: "os_name",
              desc: "操作系统",
              value: this.collect.configManager.get("os_name")
            }, {
              name: "os_version",
              desc: "操作系统版本",
              value: this.collect.configManager.get("os_version")
            }, {
              name: "resolution",
              desc: "屏幕分辨率",
              value: this.collect.configManager.get("resolution")
            }, {
              name: "referrer",
              desc: "来源",
              value: this.collect.configManager.get("referrer")
            }, {
              name: "custom",
              desc: "自定义信息",
              value: JSON.stringify(this.collect.configManager.get("custom"))
            }]
          }, {
            title: "配置信息",
            key: "config",
            type: 3,
            content: [{
              name: "autotrack",
              desc: "全埋点",
              value: !!this.config.autotrack
            }, {
              name: "stay",
              desc: "停留时长",
              value: !!this.config.enable_stay_duration
            }]
          }, {
            title: "A/B配置信息",
            key: "ab",
            type: 4,
            content: [{
              name: "ab",
              desc: "A/B实验",
              value: !!this.config.enable_ab_test
            }]
          }];
          if (this.config.enable_ab_test) {
            t = this.getInfo("ab");
            e = [{
              name: "ab",
              desc: "A/B实验",
              value: !!this.config.enable_ab_test
            }, {
              name: "vid",
              desc: "已曝光VID",
              value: this.collect.configManager.getAbVersion()
            }, {
              name: "ab_domain",
              desc: "A/B域名",
              value: this.config.ab_channel_domain || m(P[this.config.channel])
            }, {
              name: "all_values",
              desc: "全部配置",
              value: this.collect.configManager.getAbCache()
            }];
            t.content = e;
            this.setInfo("ab", t);
          }
          if (this.config.enable_native || this.config.Native) {
            e = {
              title: "客户端信息",
              type: 3,
              content: [{
                name: "native",
                desc: "是否打通",
                value: !!this.collect.bridgeReport
              }]
            };
            this.setInfo("native", e);
          }
          if (M.includes("tob")) {
            (t = this.getInfo("user")).content.push({
              name: "sid",
              desc: "DISS".split("").reverse().join(""),
              value: "点击获取"
            });
            this.setInfo("user", t);
          }
        };
        e.prototype.getInfo = function (e) {
          var t = null;
          this.info.forEach(function (r) {
            if (r.key === e) {
              t = r;
            }
          });
          return t;
        };
        e.prototype.setInfo = function (e, t) {
          var r = false;
          this.info.forEach(function (t) {
            if (t.key === e) {
              r = true;
            }
          });
          if (!r) {
            this.info.push(t);
          }
        };
        e.prototype.getSecondInfo = function (e, t) {
          var e = this.getInfo(e);
          var r = null;
          e.content.forEach(function (e) {
            if (e.name === t) {
              r = e;
            }
          });
          return r;
        };
        e.prototype.setSecondInfo = function (e, t, r) {
          var i;
          var n = this.getInfo(e);
          var o = false;
          n.content.forEach(function (e) {
            if (e.name === t) {
              e.value = r;
              o = true;
            }
          });
          if (!o) {
            i = {
              name: t,
              value: r,
              desc: t.toLocaleUpperCase()
            };
            n.content.push(i);
          }
          this.setInfo(e, n);
        };
        e.prototype.loadHook = function () {
          var e = this;
          this.collect.on(D.DEBUGGER_MESSAGE, function (t) {
            switch (t.type) {
              case D.DEBUGGER_MESSAGE_SDK:
                var r = {
                  time: t.time,
                  type: t.logType || "sdk",
                  infoType: t.infoType || "sdk",
                  level: t.level,
                  name: t.info,
                  show: true,
                  levelShow: true,
                  needDesc: !!t.data
                };
                if (t.data) {
                  r.desc = {
                    content: JSON.stringify(t.data)
                  };
                }
                e.updateLog(r);
                if (t.secType && t.secType === "AB") {
                  e.setSecondInfo("ab", "vid", e.collect.configManager.getAbVersion());
                  e.setSecondInfo("ab", "all_values", e.collect.configManager.getAbCache());
                } else if (t.secType === "USER") {
                  e.setSecondInfo("user", t.common === "user_unique_id" ? "uuid" : t.common, e.collect.configManager.get(t.common));
                } else if (t.secType === "HEADER") {
                  r = e.collect.configManager.get(t.common);
                  e.setSecondInfo("common", t.common, t.common === "custom" ? JSON.stringify(r) : r);
                }
                e.updateInfo();
                return;
              case D.DEBUGGER_MESSAGE_EVENT:
                if (t.data && t.data.length) {
                  var r = t.data[0];
                  var i = r.events;
                  if (!i.length) {
                    return;
                  }
                  i.forEach(function (r) {
                    r.checkShow = true;
                    r.searchShow = true;
                    r.focusShow = true;
                    r.status = t.status;
                    r.type = e.filterEvent.has(r.event) ? "sdk" : "cus";
                    r.verifyType = t.verifyType ? "verify" : "no";
                    r.info = "";
                    if (t.status === "fail") {
                      r.info = {
                        message: "code: " + t.code + "， msg: " + (t.msg || t.failType)
                      };
                    }
                  });
                  e.updateEvent(r);
                }
                return;
            }
          });
        };
        e.prototype.addLintener = function () {
          var e = this;
          window.addEventListener("message", function (t) {
            if (t && t.data && t.data.type === "devtool:web:ready") {
              e.devToolOrigin = t.origin;
              e.devToolReady = true;
              if (e.sendAlready) {
                return;
              }
              e.sendData("devtool:web:init", {
                info: e.info,
                log: e.log,
                event: e.event,
                sdk_type: M.includes("tob") ? "tob" : "inner",
                appId: e.app_id
              });
              e.sendAlready = true;
            }
            if (t && t.data && t.data.type === "devtool:web:ssid") {
              e.collect.getToken(function (t) {
                e.setSecondInfo("user", "sid", t.tobid);
                e.updateInfo();
              });
            }
          });
        };
        e.prototype.sendData = function (e, t) {
          try {
            if (window) {
              window.postMessage({
                type: e,
                payload: t
              }, this.devToolOrigin);
            }
          } catch (e) {}
        };
        e.prototype.updateInfo = function () {
          if (this.devToolReady) {
            this.sendData("devtool:web:info", this.info);
          }
        };
        e.prototype.updateLog = function (e) {
          if (this.devToolReady) {
            this.sendData("devtool:web:log", e);
          } else {
            this.log.push(e);
          }
        };
        e.prototype.updateEvent = function (e) {
          if (this.devToolReady) {
            this.sendData("devtool:web:event", e);
          } else {
            this.event.push(e);
          }
        };
        e.prototype.loadDebuggerModule = function () {
          var e = "#debugger-applog-web {\n      position: fixed;\n      width: 45px;\n      height: 45px;\n      background-image: url(" + m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z1az1bz1lz49z22z1mz21z4az19z27z22z1cz21z1az1kz4az1az1mz1kz4bz1mz19z1hz4bz21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz1bz1cz24z22z1mz1mz1jz4bz18z1nz1nz1jz1mz1ez4az1nz1lz1e") + ");\n      bottom: 5%;\n      right: 10%;\n      cursor: pointer;\n      z-index:100;\n      background-size: 45px;\n    }";
          var t = document.head || document.getElementsByTagName("head")[0];
          var r = document.createElement("style");
          r.appendChild(document.createTextNode(e));
          t.appendChild(r);
          var e = document.createElement("div");
          e.innerHTML = "<div id=\"debugger-applog-web\" class=\"debugger-applog-web\"></div>";
          var t = document.createElement("div");
          t.innerHTML = "<div id=\"debugger-container\" class=\"debugger-container\"></div>";
          document.getElementsByTagName("body")[0].appendChild(e);
          document.getElementsByTagName("body")[0].appendChild(t);
          var r = document.getElementById("debugger-applog-web");
          if (r) {
            r.addEventListener("click", function () {
              if (window) {
                window.postMessage({
                  type: "devtool:web:open-draw"
                }, location.origin);
              }
            });
          }
        };
        return e;
      })();
      var rv = {
        autotrack: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz18z23z22z1mz22z20z18z1az1iz4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/autotrack.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/autotrack.js"
          },
          object: "LogAutoTrack"
        },
        ab: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz18z19z4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/ab.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/ab.js"
          },
          object: "LogAb"
        },
        stay: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz21z22z18z27z4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/stay.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/stay.js"
          },
          object: "LogStay"
        },
        route: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz20z1mz23z22z1cz4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/route.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/route.js"
          },
          object: "LogRoute"
        },
        tracer: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz22z20z18z1az1cz20z4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/tracer.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/tracer.js"
          },
          object: "LogTracer"
        },
        retry: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz20z1cz22z20z27z4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/retry.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/retry.js"
          },
          object: "LogRetry"
        },
        visual: {
          src: {
            cn: m("1fz22z22z1nz21z4mz4bz4bz1jz1dz49z21z22z18z22z1gz1az4az18z1nz1nz1jz1mz1ez1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz18z1nz1nz1jz1mz1ez49z21z1bz1iz49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz4hz4bz1nz1jz23z1ez1gz1lz4bz24z1gz21z23z18z1jz4az1hz21"),
            sg: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-sg/log-sdk/collect/5/plugin/visual.js",
            va: "https://lf-global-static.iapplogcdn.com/obj/applog-sdk-static-us/log-sdk/collect/5/plugin/visual.js"
          },
          object: "LogVisual"
        }
      };
      var rz = ["et", "profile", "heartbeat", "monitor"];
      var eF = (() => {
        function e(e) {
          this.disableAutoPageView = false;
          this.bridgeReport = false;
          this.staging = false;
          this.pluginInstances = [];
          this.sended = false;
          this.started = false;
          this.destroy = false;
          this.sdkReady = false;
          this.adapters = {};
          this.loadType = "base";
          this.sdkStop = false;
          this.name = e;
          this.hook = new T();
          this.remotePlugin = new Map();
          this.Types = F;
          this.adapters.storage = B;
        }
        e.usePlugin = function (t, r, i) {
          if (r) {
            var n = false;
            var o = 0;
            var s = e.plugins.length;
            for (; o < s; o++) {
              if (e.plugins[o].name === r) {
                e.plugins[o].plugin = t;
                e.plugins[o].options = i || {};
                n = true;
                break;
              }
            }
            if (!n) {
              e.plugins.push({
                name: r,
                plugin: t,
                options: i
              });
            }
          } else {
            e.plugins.push({
              plugin: t
            });
          }
        };
        e.prototype.usePlugin = function (e, t, r) {
          if (e) {
            if (this.loadType !== "full" || !rz.includes(e)) {
              if (t) {
                if (typeof t == "string") {
                  if (!this.remotePlugin.get(e)) {
                    this.remotePlugin.set(e, {
                      src: t,
                      call: r
                    });
                  }
                } else if (!this.remotePlugin.get(e)) {
                  this.remotePlugin.set(e, {
                    instance: t
                  });
                }
              } else if (!this.remotePlugin.get(e)) {
                this.remotePlugin.set(e, "sdk");
              }
            }
          }
        };
        e.prototype.init = function (t) {
          var r;
          var i = this;
          this.logger = new q(this.name, t.log);
          if (this.inited) {
            this.logger.warn("[instance: " + this.name + "], every instance's api: init,  can be call only one time!");
          } else if (t && g(t)) {
            if (t.app_id && typeof (r = t.app_id) == "number" && !isNaN(r)) {
              if (t.app_key && typeof t.app_key != "string") {
                this.logger.warn("app_key param is error, must be string, please check!");
              } else {
                if (!t.channel_domain && ["cn", "sg", "va", "my"].indexOf(t.channel) === -1) {
                  this.logger.warn("channel must be `cn`, `sg`,`va`, `my` !");
                  t.channel = "cn";
                }
                this.spider = new W();
                if (this.spider.checkSpider(t)) {
                  this.logger.warn("your env may be a spider, can not report!");
                } else {
                  this.appBridge = new V(this, t.enable_native);
                  this.requestManager = new r_(this, t);
                  this.bridgeReport = this.appBridge.bridgeInject();
                  this.configManager = new K(this, t);
                  this.debugger = new rb(this, t);
                  this.initConfig = t;
                  this.emit(F.Init);
                  this.emit(D.DEBUGGER_MESSAGE, {
                    type: D.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 执行Init",
                    data: t,
                    level: "info",
                    time: Date.now(),
                    infoType: "cus"
                  });
                  this.destroy = false;
                  if (t.disable_auto_pv) {
                    this.disableAutoPageView = true;
                  }
                  if (!this.bridgeReport) {
                    this.configManager.set({
                      app_id: t.app_id
                    });
                    this.eventManager = new Z();
                    this.tokenManager = new X();
                    this.sessionManager = new J();
                    Promise.all([new Promise(function (e) {
                      i.once(F.TokenComplete, function () {
                        e(true);
                      });
                    }), new Promise(function (e) {
                      i.once(F.Start, function () {
                        e(true);
                      });
                    })]).then(function () {
                      try {
                        e.plugins.reduce(function (e, t) {
                          var r = t.plugin;
                          var n = Object.assign(i.initConfig, t.options);
                          var r = new r();
                          r.apply(i, n);
                          e.push(r);
                          i.emit(D.DEBUGGER_MESSAGE, {
                            type: D.DEBUGGER_MESSAGE_SDK,
                            info: "SDK加载" + t.name + "插件",
                            level: "info",
                            time: Date.now(),
                            infoType: "sdk"
                          });
                          return e;
                        }, i.pluginInstances);
                      } catch (e) {
                        i.emit(D.DEBUGGER_MESSAGE, {
                          type: D.DEBUGGER_MESSAGE_SDK,
                          info: "SDK加载插件发生了异常",
                          level: "error",
                          time: Date.now(),
                          data: e.message,
                          infoType: "sdk"
                        });
                      }
                      i.sdkReady = true;
                      i.emit(F.Ready);
                      i.emit(D.DEBUGGER_MESSAGE, {
                        type: D.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 用户信息初始化完成",
                        time: Date.now(),
                        secType: "USER",
                        level: "info",
                        data: i.configManager.get("user"),
                        infoType: "sdk"
                      });
                      i.emit(D.DEBUGGER_MESSAGE, {
                        type: D.DEBUGGER_MESSAGE_SDK,
                        info: "SDK 初始化完成",
                        time: Date.now(),
                        level: "info",
                        data: i.configManager.get("user"),
                        infoType: "sdk"
                      });
                      i.logger.info("appid: " + t.app_id + ", userInfo:" + JSON.stringify(i.configManager.get("user")));
                      i.logger.info("appid: " + t.app_id + ", sdk is ready, version type is " + i.loadType + ", version is " + M + ", you can report now !!!");
                      if (t.disable_auto_pv) {
                        i.disableAutoPageView = true;
                      }
                      try {
                        if (i.loadType === "full" && (t.enable_ab_test || t.autotrack)) {
                          (window.opener || window.parent).postMessage("[tea-sdk]ready", "*");
                        }
                      } catch (e) {
                        i.emit(D.DEBUGGER_MESSAGE, {
                          type: D.DEBUGGER_MESSAGE_SDK,
                          info: "SDK发生了异常",
                          level: "error",
                          time: Date.now(),
                          data: e.message,
                          infoType: "sdk"
                        });
                      }
                      i.pageView();
                      i.on(F.TokenChange, function (e) {
                        if (e === "webid") {
                          i.pageView();
                        }
                        i.logger.info("appid: " + t.app_id + " token change, new userInfo:" + JSON.stringify(i.configManager.get("user")));
                        i.emit(D.DEBUGGER_MESSAGE, {
                          type: D.DEBUGGER_MESSAGE_SDK,
                          info: "SDK 设置了用户信息",
                          time: Date.now(),
                          secType: "USER",
                          level: "info",
                          data: i.configManager.get("user"),
                          infoType: "sdk"
                        });
                      });
                      i.on(F.TokenReset, function () {
                        i.logger.info("appid: " + t.app_id + " token reset, new userInfo:" + JSON.stringify(i.configManager.get("user")));
                        i.emit(D.DEBUGGER_MESSAGE, {
                          type: D.DEBUGGER_MESSAGE_SDK,
                          info: "SDK 重置了用户信息",
                          time: Date.now(),
                          secType: "USER",
                          level: "info",
                          data: i.configManager.get("user"),
                          infoType: "sdk"
                        });
                      });
                      i.on(F.RouteChange, function (e) {
                        if (!e.init && !t.disable_route_report) {
                          i.pageView();
                        }
                      });
                    });
                    this.tokenManager.apply(this, t);
                    this.eventManager.apply(this, t);
                    this.sessionManager.apply(this, t);
                  }
                  this.inited = true;
                }
              }
            } else {
              this.logger.warn("app_id param is error, must be number, please check!");
            }
          } else {
            this.logger.warn("init params error,please check!");
          }
        };
        e.prototype.config = function (e) {
          var t;
          var r;
          if (this.inited) {
            if (e && g(e)) {
              if (this.bridgeReport) {
                this.appBridge.setConfig(e);
              } else {
                if (e._staging_flag && e._staging_flag === 1) {
                  this.staging = true;
                }
                if (e.disable_auto_pv) {
                  this.disableAutoPageView = true;
                  delete e.disable_auto_pv;
                }
                t = d({}, e);
                r = this.initConfig.configPersist || this.initConfig.config_persist || false;
                if (this.initConfig && r) {
                  if (r = this.configManager.getStore()) {
                    t = Object.assign(r, e);
                  }
                  this.configManager.setStore(e);
                }
                t.web_id;
                t.user_unique_id;
                r = ((e, t) => {
                  var r = {};
                  for (n in e) {
                    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
                      r[n] = e[n];
                    }
                  }
                  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
                    var i = 0;
                    var n = Object.getOwnPropertySymbols(e);
                    for (; i < n.length; i++) {
                      if (t.indexOf(n[i]) < 0) {
                        r[n[i]] = e[n[i]];
                      }
                    }
                  }
                  return r;
                })(t, ["web_id", "user_unique_id"]);
                this.configManager.set(r);
                if (t.hasOwnProperty("web_id")) {
                  this.emit(F.ConfigWebId, t.web_id);
                }
                if (t.hasOwnProperty("user_unique_id")) {
                  this.emit(F.ConfigUuid, t.user_unique_id);
                }
                this.emit(D.DEBUGGER_MESSAGE, {
                  type: D.DEBUGGER_MESSAGE_SDK,
                  info: "SDK 执行Config",
                  level: "info",
                  time: Date.now(),
                  data: t,
                  infoType: "cus"
                });
              }
            } else {
              this.emit(D.DEBUGGER_MESSAGE, {
                type: D.DEBUGGER_MESSAGE_SDK,
                info: "SDK执行Config发生了异常",
                level: "error",
                time: Date.now(),
                data: "config params is error, please check",
                infoType: "sdk"
              });
            }
          } else {
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK执行Config发生了异常",
              level: "error",
              time: Date.now(),
              data: "config must be use after function init",
              infoType: "sdk"
            });
          }
        };
        e.prototype.setUserUniqueID = function (e) {
          this.config({
            user_unique_id: e
          });
        };
        e.prototype.setHeaderInfo = function (e, t) {
          var r = {
            [e]: t
          };
          this.config(r);
        };
        e.prototype.removeHeaderInfo = function (e) {
          var t = {
            [e]: undefined
          };
          this.config(t);
        };
        e.prototype.setDomain = function (e) {
          if (this.configManager) {
            this.configManager.setDomain(e);
          }
          this.emit(F.ConfigDomain);
        };
        e.prototype.getConfig = function (e) {
          var t;
          if ((t = this.configManager) == null) {
            return undefined;
          } else {
            return t.get(e);
          }
        };
        e.prototype.send = function () {
          this.start();
        };
        e.prototype.start = function () {
          if (this.inited && !this.sended && (this.sended = true, this.started = true, this.emit(F.Start), this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行Start",
            level: "info",
            time: Date.now(),
            infoType: "cus"
          }), this.bridgeReport)) {
            this.pageView();
            this.emit(F.Ready);
          }
        };
        e.prototype.event = function (e, t) {
          var r = this;
          try {
            var i = [];
            if (Array.isArray(e)) {
              e.forEach(function (e) {
                if (e = r.processEvent(e[0], e[1] || {})) {
                  i.push(e);
                }
              });
            } else {
              var n = this.processEvent(e, t);
              if (!n) {
                return;
              }
              i.push(n);
            }
            if (this.bridgeReport) {
              i.forEach(function (e) {
                var t = e.event;
                r.appBridge.onEventV3(t, JSON.stringify(e.params));
              });
            } else if (i.length) {
              this.emit(F.Event, i);
              this.emit(F.SessionResetTime);
            }
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行Event",
              level: "info",
              time: Date.now(),
              data: e,
              infoType: "cus"
            });
          } catch (e) {
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行Event发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message,
              infoType: "sdk"
            });
          }
        };
        e.prototype.beconEvent = function (e, t) {
          var r;
          if (!Array.isArray(e)) {
            r = [];
            if (t = this.processEvent(e, t || {})) {
              r.push(t);
              if (r.length) {
                this.emit(F.BeconEvent, r);
                this.emit(F.SessionResetTime);
              }
              this.emit(D.DEBUGGER_MESSAGE, {
                type: D.DEBUGGER_MESSAGE_SDK,
                info: "SDK 执行Beacon Event",
                level: "info",
                time: Date.now(),
                data: e,
                infoType: "sdk"
              });
            }
          }
        };
        e.prototype.beaconEvent = function (e, t) {
          this.beconEvent(e, t);
        };
        e.prototype.processEvent = function (e, t = {}) {
          try {
            var r;
            var i;
            var n;
            if (e) {
              if (/^event\./.test(r = e)) {
                r = e.slice(6);
              }
              n = void ((i = typeof (i = t) != "object" ? {} : i).profile ? delete i.profile : i.event_index = O += 1);
              if (i.local_ms) {
                n = i.local_ms;
                delete i.local_ms;
              } else {
                n = +new Date();
              }
              return {
                event: r,
                params: i,
                local_time_ms: n,
                is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0
              };
            } else {
              return null;
            }
          } catch (r) {
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK发生了异常",
              level: "error",
              time: Date.now(),
              data: r.message,
              infoType: "sdk"
            });
            return {
              event: e,
              params: t
            };
          }
        };
        e.prototype.filterEvent = function (e) {
          this.eventFilter = e;
        };
        e.prototype.on = function (e, t) {
          this.hook.on(e, t);
        };
        e.prototype.once = function (e, t) {
          this.hook.once(e, t);
        };
        e.prototype.off = function (e, t) {
          this.hook.off(e, t);
        };
        e.prototype.emit = function (e, t, r) {
          this.hook.emit(e, t, r);
        };
        e.prototype.set = function (e) {
          this.hook.set(e);
        };
        e.prototype.stop = function () {
          this.sdkStop = true;
        };
        e.prototype.reStart = function () {
          this.sdkStop = false;
        };
        e.prototype.pageView = function () {
          if (!this.disableAutoPageView) {
            this.predefinePageView();
          }
        };
        e.prototype.predefinePageView = function (e) {
          var t;
          if (e === undefined) {
            e = {};
          }
          if (this.inited) {
            t = {
              title: document.title || location.pathname,
              url: location.href,
              url_path: this.handlePath(),
              time: Date.now(),
              referrer: window.document.referrer,
              $is_first_time: "" + (this.configManager && this.configManager.is_first_time || false)
            };
            t = d(d({}, t), e);
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 上报PV",
              level: "info",
              time: Date.now(),
              infoType: "sdk"
            });
            this.event("predefine_pageview", t);
          }
        };
        e.prototype.handlePath = function () {
          var e;
          var t = location.pathname;
          try {
            if (this.initConfig.allow_hash) {
              if ((e = new URL(location.href).hash.match(/#\/([^?#]+)/i)) && e.length) {
                return e[1];
              } else {
                return location.pathname;
              }
            }
          } catch (e) {
            t = location.pathname;
          }
          return t;
        };
        e.prototype.clearEventCache = function () {
          this.emit(F.CleanEvents);
        };
        e.prototype.setWebIDviaUnionID = function (e) {
          var t;
          if (e) {
            t = v(e);
            this.config({
              web_id: "" + t,
              wechat_unionid: e
            });
            this.emit(F.CustomWebId);
          }
        };
        e.prototype.setWebId = function (e) {
          this.config({
            web_id: "" + e
          });
        };
        e.prototype.setWebIDviaOpenID = function (e) {
          var t;
          if (e) {
            t = v(e);
            this.config({
              web_id: "" + t,
              wechat_openid: e
            });
            this.emit(F.CustomWebId);
          }
        };
        e.prototype.setNativeAppId = function (e) {
          if (this.bridgeReport) {
            this.appBridge.setNativeAppId(e);
          }
        };
        e.prototype.setRequestHeaders = function (e) {
          this.emit(F.CustomHeader, e);
        };
        e.prototype.getSessionId = w;
        e.prototype.setSessionId = function (e) {
          this.emit(F.SessionReset, e);
        };
        e.prototype.resetStayDuration = function (e, t, r) {
          this.emit(F.ResetStay, {
            url_path: e,
            title: t,
            url: r
          }, F.Stay);
        };
        e.prototype.resetStayParams = function (e, t, r) {
          this.emit(F.SetStay, {
            url_path: e = e === undefined ? "" : e,
            title: t = t === undefined ? "" : t,
            url: r = r === undefined ? "" : r
          }, F.Stay);
        };
        e.prototype.getToken = function (e, t) {
          var r;
          var i;
          var n;
          var o = this;
          if (this.inited) {
            r = false;
            i = function (t) {
              var i;
              if (!r) {
                r = true;
                i = o.configManager.get().user;
                if (t) {
                  i.tobid = t;
                  i["diss".split("").reverse().join("")] = t;
                }
                return e(d({}, i));
              }
            };
            n = function () {
              o.tokenManager.getTobId().then(function (e) {
                i(e);
              });
            };
            this.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行GetToken",
              level: "info",
              time: Date.now(),
              infoType: "cus"
            });
            if (this.sdkReady) {
              n();
            } else {
              if (t) {
                setTimeout(function () {
                  i();
                }, t);
              }
              this.on(F.Ready, function () {
                n();
              });
            }
          }
        };
        e.prototype.profileSet = function (e) {
          if (this.bridgeReport) {
            this.appBridge.profileSet(JSON.stringify(e));
          } else {
            this.emit(F.ProfileSet, e, F.Profile);
          }
          this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行profileSet",
            level: "info",
            time: Date.now(),
            data: e,
            infoType: "cus"
          });
        };
        e.prototype.profileSetOnce = function (e) {
          if (this.bridgeReport) {
            this.appBridge.profileSetOnce(JSON.stringify(e));
          } else {
            this.emit(F.ProfileSetOnce, e, F.Profile);
          }
          this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行profileSetOnce",
            level: "info",
            time: Date.now(),
            data: e,
            infoType: "cus"
          });
        };
        e.prototype.profileIncrement = function (e) {
          if (this.bridgeReport) {
            this.appBridge.profileIncrement(JSON.stringify(e));
          } else {
            this.emit(F.ProfileIncrement, e, F.Profile);
          }
          this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行profileIncrement",
            level: "info",
            time: Date.now(),
            data: e,
            infoType: "cus"
          });
        };
        e.prototype.profileUnset = function (e) {
          if (this.bridgeReport) {
            this.appBridge.profileUnset(e);
          } else {
            this.emit(F.ProfileUnset, e, F.Profile);
          }
          this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行profileUnset",
            level: "info",
            time: Date.now(),
            data: e,
            infoType: "cus"
          });
        };
        e.prototype.profileAppend = function (e) {
          if (this.bridgeReport) {
            this.appBridge.profileAppend(JSON.stringify(e));
          } else {
            this.emit(F.ProfileAppend, e, F.Profile);
          }
          this.emit(D.DEBUGGER_MESSAGE, {
            type: D.DEBUGGER_MESSAGE_SDK,
            info: "SDK 执行profileAppend",
            level: "info",
            time: Date.now(),
            data: e,
            infoType: "cus"
          });
        };
        e.prototype.setExternalAbVersion = function (e) {
          this.emit(F.AbExternalVersion, typeof e == "string" && e ? ("" + e).trim() : null, F.Ab);
        };
        e.prototype.getVar = function (e, t, r) {
          this.emit(F.AbVar, {
            name: e,
            defaultValue: t,
            callback: r
          }, F.Ab);
        };
        e.prototype.getABconfig = function (e, t) {
          this.emit(F.AbConfig, {
            params: e,
            callback: t
          }, F.Ab);
        };
        e.prototype.getAbSdkVersion = function () {
          return this.configManager.getAbVersion();
        };
        e.prototype.onAbSdkVersionChange = function (e) {
          var t = this;
          this.emit(F.AbVersionChangeOn, e, F.Ab);
          return function () {
            t.emit(F.AbVersionChangeOff, e, F.Ab);
          };
        };
        e.prototype.offAbSdkVersionChange = function (e) {
          this.emit(F.AbVersionChangeOff, e, F.Ab);
        };
        e.prototype.openOverlayer = function () {
          this.emit(F.AbOpenLayer, "", F.Ab);
        };
        e.prototype.closeOverlayer = function () {
          this.emit(F.AbCloseLayer, "", F.Ab);
        };
        e.prototype.getAllVars = function (e) {
          this.emit(F.AbAllVars, e, F.Ab);
        };
        e.prototype.destoryInstace = function () {
          if (!this.destroy) {
            this.destroy = true;
            this.off(F.TokenComplete);
            this.emit(F.DestoryInstance);
          }
        };
        e.prototype.destroyInstance = function () {
          if (!this.destroy) {
            this.destroy = true;
            this.off(F.TokenComplete);
            this.emit(F.DestoryInstance);
          }
        };
        e.plugins = [];
        return e;
      })();
      var eN = (() => {
        function e() {}
        e.prototype.apply = function (e, t) {
          var r = this;
          if (t.event_verify_url && typeof t.event_verify_url == "string") {
            this.url = t.event_verify_url + "/v1/list_test";
            e.on(e.Types.SubmitBefore, function (t) {
              e.requestManager.useBeacon({
                url: r.url,
                data: t
              });
              e.emit(D.DEBUGGER_MESSAGE, {
                type: D.DEBUGGER_MESSAGE_EVENT,
                info: "SDK Report ByteIo Verify Request",
                time: Date.now(),
                data: t,
                code: 200,
                status: "success",
                verifyType: true
              });
            });
          }
        };
        return e;
      })();
      var eH = (() => {
        function e() {}
        e.prototype.apply = function (e, t) {
          var r = this;
          this.collect = e;
          this.config = t;
          this.duration = 60000;
          this.reportUrl = e.configManager.getDomain() + "/profile/list";
          var i = e.Types;
          this.eventCheck = new G(e, t);
          this.cache = {};
          this.collect.on(i.ProfileSet, function (e) {
            r.setProfile(e);
          });
          this.collect.on(i.ProfileSetOnce, function (e) {
            r.setOnceProfile(e);
          });
          this.collect.on(i.ProfileUnset, function (e) {
            r.unsetProfile(e);
          });
          this.collect.on(i.ProfileIncrement, function (e) {
            r.incrementProfile(e);
          });
          this.collect.on(i.ProfileAppend, function (e) {
            r.appendProfile(e);
          });
          this.collect.on(i.ProfileClear, function () {
            r.cache = {};
          });
          this.ready(i.Profile);
        };
        e.prototype.ready = function (e) {
          var t = this;
          this.collect.set(e);
          if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
            var r = this.collect.hook._hooksCache[e];
            if (Object.keys(r).length) {
              for (var i in r) {
                (e => {
                  if (r[e].length) {
                    r[e].forEach(function (r) {
                      t.collect.hook.emit(e, r);
                    });
                  }
                })(i);
              }
            }
          }
        };
        e.prototype.report = function (e, t = {}) {
          try {
            var r;
            var i;
            if (!this.config.disable_track_event) {
              (r = []).push(this.collect.processEvent(e, t));
              i = this.collect.eventManager.merge(r);
              this.collect.requestManager.useRequest({
                url: this.reportUrl,
                data: i
              });
              this.collect.emit(D.DEBUGGER_MESSAGE, {
                type: D.DEBUGGER_MESSAGE_EVENT,
                info: "埋点上报成功",
                time: Date.now(),
                data: i,
                code: 200,
                status: "success"
              });
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.setProfile = function (e) {
          if ((e = this.formatParams(e)) && Object.keys(e).length) {
            this.pushCache(e);
            this.report("__profile_set", d(d({}, e), {
              profile: true
            }));
          }
        };
        e.prototype.setOnceProfile = function (e) {
          if ((e = this.formatParams(e, true)) && Object.keys(e).length) {
            this.pushCache(e);
            this.report("__profile_set_once", d(d({}, e), {
              profile: true
            }));
          }
        };
        e.prototype.incrementProfile = function (e) {
          if (e) {
            this.report("__profile_increment", d(d({}, e), {
              profile: true
            }));
          }
        };
        e.prototype.unsetProfile = function (e) {
          var t;
          if (e) {
            (t = {})[e] = "1";
            this.report("__profile_unset", d(d({}, t), {
              profile: true
            }));
          }
        };
        e.prototype.appendProfile = function (e) {
          if (e) {
            var t;
            var r = {};
            for (t in e) {
              if (typeof e[t] == "string" || Object.prototype.toString.call(e[t]).slice(8, -1) === "Array") {
                r[t] = e[t];
              }
            }
            if (Object.keys(r).length) {
              this.report("__profile_append", d(d({}, r), {
                profile: true
              }));
            }
          }
        };
        e.prototype.pushCache = function (e) {
          var t = this;
          Object.keys(e).forEach(function (r) {
            t.cache[r] = {
              val: t.clone(e[r]),
              timestamp: Date.now()
            };
          });
        };
        e.prototype.formatParams = function (e, t) {
          var r = this;
          if (t === undefined) {
            t = false;
          }
          try {
            if (e && Object.prototype.toString.call(e) === "[object Object]") {
              var i;
              var n = {};
              for (i in e) {
                if (typeof e[i] == "string" || typeof e[i] == "number" || Object.prototype.toString.call(e[i]).slice(8, -1) === "Array") {
                  n[i] = e[i];
                }
              }
              var o;
              var s = Object.keys(n);
              if (s.length && this.eventCheck.checkEventParams(n)) {
                o = Date.now();
                return s.filter(function (i) {
                  var n = r.cache[i];
                  if (t) {
                    return !n;
                  } else {
                    return !n || !r.compare(n.val, e[i]) || !(o - n.timestamp < r.duration);
                  }
                }).reduce(function (e, t) {
                  e[t] = n[t];
                  return e;
                }, {});
              }
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.compare = function (e, t) {
          try {
            return JSON.stringify(e) === JSON.stringify(t);
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
            return false;
          }
        };
        e.prototype.clone = function (e) {
          try {
            return JSON.parse(JSON.stringify(e));
          } catch (t) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: t.message
            });
            return e;
          }
        };
        e.prototype.unReady = function () {};
        return e;
      })();
      var eG = (() => {
        function e() {
          var e = this;
          this.setInterval = function () {
            var t;
            var r;
            var i;
            var n;
            t = function () {
              if (e.isSessionhasEvent) {
                e.endCurrentSession();
              }
            };
            r = e.sessionInterval;
            if (t === undefined) {
              t = function () {};
            }
            if (r === undefined) {
              r = 1000;
            }
            i = Date.now() + r;
            n = window.setTimeout(function e() {
              var o = Date.now() - i;
              t();
              i += r;
              n = window.setTimeout(e, Math.max(0, r - o));
            }, r);
            e.clearIntervalFunc = function () {
              window.clearTimeout(n);
            };
          };
          this.clearInterval = function () {
            if (e.clearIntervalFunc) {
              e.clearIntervalFunc();
            }
          };
        }
        e.prototype.apply = function (e, t) {
          var r = this;
          this.collect = e;
          if (!t.disable_heartbeat) {
            this.sessionInterval = 60000;
            this.startTime = 0;
            this.lastTime = 0;
            this.setInterval();
            e = this.collect.Types;
            this.collect.on(e.SessionResetTime, function () {
              r.process();
            });
          }
        };
        e.prototype.endCurrentSession = function () {
          this.collect.event("_be_active", {
            start_time: this.startTime,
            end_time: this.lastTime,
            url: window.location.href,
            referrer: window.document.referrer,
            title: document.title || location.pathname
          });
          this.isSessionhasEvent = false;
          this.startTime = 0;
        };
        e.prototype.process = function () {
          if (!this.isSessionhasEvent) {
            this.isSessionhasEvent = true;
            this.startTime = +new Date();
          }
          var e = this.lastTime || +new Date();
          this.lastTime = +new Date();
          if (this.lastTime - e > this.sessionInterval) {
            this.clearInterval();
            this.endCurrentSession();
            this.setInterval();
          }
        };
        return e;
      })();
      var t = (() => {
        function e() {}
        e.prototype.apply = function (e, t) {
          var r = this;
          if (!t.channel_domain && !t.disable_track_event && !t.disable_sdk_monitor) {
            this.collect = e;
            this.config = t;
            this.url = e.configManager.getUrl("event");
            this.collect.on(e.Types.Ready, function () {
              r.sdkOnload();
            });
            this.collect.on(e.Types.SubmitError, function (e) {
              if (e.type === "f_data") {
                r.sdkError(e.eventData, e.errorCode, e.response);
              }
            });
            this.collect.on(e.Types.SDKInnerError, function (e) {
              var t = e.type;
              r.sdkInnerError(t, e.eventData, e.errorCode, e.msg);
            });
          }
        };
        e.prototype.sdkOnload = function () {
          var e = this;
          try {
            var t = this.collect.configManager.get();
            var r = t.header;
            var i = t.user;
            var n = r.app_id;
            var o = r.app_name;
            var s = r.sdk_version;
            var a = i.web_id;
            var c = {
              events: [{
                event: "onload",
                params: JSON.stringify({
                  app_id: n,
                  app_name: o || "",
                  sdk_version: s,
                  sdk_type: "npm",
                  sdk_config: this.config,
                  sdk_desc: "TOC",
                  url: location.href
                }),
                local_time_ms: Date.now()
              }],
              user: {
                user_unique_id: a
              },
              header: {}
            };
            setTimeout(function () {
              e.collect.requestManager.useRequest({
                url: e.url,
                data: [c],
                timeout: 30000,
                app_key: "566f58151b0ed37e",
                forceXhr: true
              });
            }, 16);
          } catch (e) {}
        };
        e.prototype.sdkError = function (e, t, r) {
          var i = this;
          try {
            var n = e[0];
            var o = n.user;
            var s = n.header;
            var a = [];
            e.forEach(function (e) {
              e.events.forEach(function (e) {
                a.push(e);
              });
            });
            var c = {
              events: a.map(function (e) {
                return {
                  event: "on_error",
                  params: JSON.stringify({
                    type: "sdk_event_error",
                    error_code: t,
                    app_id: s.app_id,
                    app_name: s.app_name || "",
                    error_event: e.event,
                    sdk_version: s.sdk_version,
                    local_time_ms: e.local_time_ms,
                    tea_event_index: Date.now(),
                    params: e.params,
                    header: s,
                    user: o,
                    err_msg: r.m || ""
                  }),
                  local_time_ms: Date.now()
                };
              }),
              user: {
                user_unique_id: o.user_unique_id
              },
              header: {}
            };
            setTimeout(function () {
              i.collect.requestManager.useRequest({
                url: i.url,
                data: [c],
                timeout: 30000,
                app_key: "566f58151b0ed37e",
                forceXhr: true
              });
            }, 16);
          } catch (e) {}
        };
        e.prototype.sdkInnerError = function (e, t, r, i) {
          var n = this;
          try {
            var o = t[0];
            var s = o.user;
            var a = o.header;
            var c = [];
            t.forEach(function (e) {
              e.events.forEach(function (e) {
                c.push(e);
              });
            });
            var u = {
              events: c.map(function (t) {
                return {
                  event: "on_error",
                  params: JSON.stringify({
                    type: e,
                    error_code: r,
                    app_id: a.app_id,
                    app_name: a.app_name || "",
                    error_event: t.event,
                    sdk_version: a.sdk_version,
                    local_time_ms: t.local_time_ms,
                    tea_event_index: Date.now(),
                    params: t.params,
                    header: a,
                    user: s,
                    ua: window.navigator.userAgent,
                    err_msg: i
                  }),
                  local_time_ms: Date.now()
                };
              }),
              user: s,
              header: {}
            };
            setTimeout(function () {
              n.collect.requestManager.useRequest({
                url: n.url,
                data: [u],
                timeout: 30000,
                app_key: "566f58151b0ed37e",
                forceXhr: true
              });
            }, 16);
          } catch (e) {}
        };
        return e;
      })();
      var rS = typeof window != "undefined" ? (window.LogPluginObject ||= {}, window.LogPluginObject) : null;
      var eV = (() => {
        function e() {}
        e.prototype.apply = function (e, t) {
          this._plugin = {};
          this.config = t;
          this.collect = e;
          this.channel = t.channel || "cn";
          this.loadExtend();
        };
        e.prototype.loadExtend = function () {
          var e = this;
          try {
            this.collect.remotePlugin.forEach(function (t, r) {
              var i;
              var n;
              if (t === "sdk") {
                if (rv.hasOwnProperty(r)) {
                  i = rv[r].object;
                  n = rv[r].src[e.channel] + "?query=" + Date.now();
                  e.exist(r, i, n);
                }
              } else if (typeof t == "object") {
                if (t.src) {
                  e.exist(r, t.call, t.src);
                } else {
                  e.process(r, t.instance, "INSTANCE");
                }
              }
            });
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.exist = function (e, t, r) {
          var i = this;
          if (rS[t]) {
            this.process(e, rS[t]);
          } else {
            this.loadPlugin(e, r, function () {
              i.process(e, rS[t]);
            }, function () {});
          }
        };
        e.prototype.process = function (e, t, r) {
          try {
            var i;
            if (r) {
              if ((i = new t()).apply) {
                i.apply(this.collect, this.config);
              }
            } else if (t) {
              t(this.collect, this.config);
            }
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        e.prototype.loadPlugin = function (e, t, r, i) {
          var n = this;
          try {
            var o = document.createElement("script");
            o.src = t;
            this._plugin[e] ||= [];
            this._plugin[e].push(r);
            o.onerror = function () {
              i(t);
            };
            o.onload = function () {
              n._plugin[e].forEach(function (e) {
                e();
              });
            };
            document.getElementsByTagName("head")[0].appendChild(o);
          } catch (e) {
            this.collect.emit(D.DEBUGGER_MESSAGE, {
              type: D.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: e.message
            });
          }
        };
        return e;
      })();
      eF.usePlugin(eV, "extend");
      eF.usePlugin(eN, "et");
      eF.usePlugin(eH, "profile");
      eF.usePlugin(eG, "heartbeat");
      eF.usePlugin(t, "monitor");
      var eV = new eF("default");
      var rw = eV;
      var rk = {
        selectRoute: 900,
        browserError: 1000,
        crc32: 1000,
        preUpload: 1001,
        initUploadID: 1002,
        process: 1003,
        fileMerge: 1004,
        complete: 1005
      };
      var rx = "video";
      var rE = "image";
      var rO = "object";
      var rD = {
        video: "video_upload",
        image: "image_upload",
        object: "object_upload"
      };
      var rT = "imagex";
      var rC = {
        TRANS: [rk.initUploadID, rk.process, rk.fileMerge]
      };
      var rA = ["x-storage-mode", "X-Storage-Mode", "x-upload-storage-mode", "X-Upload-Storage-Mode"];
      function rI(e) {
        return (rI = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function rj() {
        return (rj = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      i = function e(t, r) {
        (function (e, t) {
          if (!(e instanceof t)) {
            throw TypeError("Cannot call a class as a function");
          }
        })(this, e);
        this.options = t;
        this.context = r;
        this.teaLog = rw;
        this.tea_app_id = 2562;
        this.tea_channel = "cn";
        switch (this.options.region) {
          case "us-east-1":
          case "us-east-red":
          case "gcp":
          case "US-TTP":
            this.tea_app_id = 2643;
            this.tea_channel = "va";
            break;
          case "boei18n":
          case "ap-singapore-1":
            this.tea_app_id = 2643;
            this.tea_channel = "sg";
            break;
          default:
            this.tea_app_id = 2562;
            this.tea_channel = "cn";
        }
        this.teaLog.init({
          app_id: this.tea_app_id,
          channel: this.tea_channel,
          log: false,
          disable_sdk_monitor: true,
          disable_auto_pv: true
        });
        this.teaLog.config({
          evtParams: {
            sdk_version: "2.1.3",
            line_app_id: this.options.appId
          },
          user_unique_id: this.options.userId
        });
        this.teaLog.start();
      };
      n = [{
        key: "send",
        value: function (e) {
          var t = this.context;
          var r = e.key;
          var t = t.tasks[r];
          var i = rk[e.stage] || 999;
          var t = e.fileType || t && t.fileType;
          var r = {
            log_type: rD[t],
            stage: i,
            fk: r,
            fs: e.fileSize || 0,
            req: e.req,
            res: e.res,
            ts: Math.round(Date.now() / 1000),
            sst: e.stageStartTime,
            set: e.stageEndTime,
            dur: e.duration,
            tdur: e.totalDuration,
            durs: e.duration / 1000,
            tdurs: e.totalDuration / 1000,
            eslr: e.enableSelectRoute,
            ucsrr: e.useClientSelectRouteResult,
            skipCommit: !!e.skipCommit
          };
          var n = e.type;
          var t = `${t === "image" ? "image" : "video"}_${n === "error" || n === "retry" ? n : i}`;
          if (n === "success") {
            this.sendSuccessLog(t, e, r, i);
          } else {
            this.teaLog.event(t, rj({}, r, {
              type: e.type,
              oid: e.oid,
              upload_host: e.tosDomain,
              errc: e.extra && e.extra.errorCode,
              ex: JSON.stringify({
                errc: e.extra && e.extra.errorCode,
                msg: e.extra && e.extra.message
              })
            }));
          }
        }
      }, {
        key: "sendSuccessLog",
        value: function (e, t, r, i) {
          r.type = t.type;
          switch (i) {
            case rk.selectRoute:
              this.teaLog.event(e, rj({}, r, {
                race_info: t.raceInfo,
                client_ip: t.lastClientIp,
                uc: t.useCache,
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message
                })
              }));
              break;
            case rk.crc32:
              this.teaLog.event(e, rj({}, r, {
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message,
                  crc32Array: t.crc32Array,
                  isDirect: t.isDirect
                })
              }));
              break;
            case rk.preUpload:
              this.teaLog.event(e, rj({}, r, {
                oid: t.oid,
                upload_host: t.tosDomain,
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message,
                  sig: t.signature,
                  stk: t.proxyStsToken
                })
              }));
              break;
            case rk.initUploadID:
              this.teaLog.event(e, rj({}, r, {
                oid: t.oid,
                upload_host: t.tosDomain,
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message,
                  upid: t.UploadID
                })
              }));
              break;
            case rk.process:
              if (!t.isAllFinish && !t.isDirect) {
                delete r.sst;
                delete r.set;
                delete r.dur;
              }
              this.teaLog.event(e, rj({}, r, {
                oid: t.oid,
                upload_host: t.tosDomain,
                af: t.isAllFinish,
                cst: t.crc32StartTime,
                cet: t.crc32EndTime,
                cdur: t.crc32Duration,
                slst: t.sliceStartTime,
                slet: t.sliceEndTime,
                sldurs: t.sliceDuration && t.sliceDuration / 1000,
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message,
                  si: t.sliceIndex,
                  af: t.isAllFinish
                })
              }));
              break;
            case rk.fileMerge:
              this.teaLog.event(e, rj({}, r, {
                oid: t.oid,
                upload_host: t.tosDomain,
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message
                })
              }));
              break;
            case rk.complete:
              this.teaLog.event(e, rj({}, r, {
                oid: t.oid,
                upload_host: t.tosDomain,
                speed: Math.round(t.fileSize / (t.totalDuration / 1000) / 1024),
                ex: JSON.stringify({
                  msg: t.extra && t.extra.message,
                  vid: t.uploadResult && t.uploadResult.Vid
                })
              }));
          }
        }
      }, {
        key: "console",
        value: (e => {
          function t(t) {
            return e.apply(this, arguments);
          }
          t.toString = function () {
            return e.toString();
          };
          return t;
        })(function (e) {
          this.options.debug;
        })
      }];
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var i;
          var n = t[r];
          n.enumerable = n.enumerable || false;
          n.configurable = true;
          if ("value" in n) {
            n.writable = true;
          }
          Object.defineProperty(e, (i = function (e, t) {
            if (rI(e) != "object" || !e) {
              return e;
            }
            var r = e[Symbol.toPrimitive];
            if (r === undefined) {
              return (t === "string" ? String : Number)(e);
            }
            r = r.call(e, t || "default");
            if (rI(r) != "object") {
              return r;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }(i = n.key, "string"), rI(i) == "symbol" ? i : i + ""), n);
        }
      })(i.prototype, n);
      Object.defineProperty(i, "prototype", {
        writable: false
      });
      var rB = i;
      var eN = r(6);
      var rR = r.n(eN);
      var eH = r(4);
      var rP = r.n(eH);
      function rU() {
        return (rU = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function rM(e, t) {
        var r;
        if (e) {
          if (typeof e == "string") {
            return rG(e, t);
          } else if ((r = (r = {}.toString.call(e).slice(8, -1)) === "Object" && e.constructor ? e.constructor.name : r) === "Map" || r === "Set") {
            return Array.from(e);
          } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
            return rG(e, t);
          } else {
            return undefined;
          }
        }
      }
      function rG(e, t) {
        if (t == null || t > e.length) {
          t = e.length;
        }
        var r = 0;
        var i = Array(t);
        for (; r < t; r++) {
          i[r] = e[r];
        }
        return i;
      }
      var rF = {
        urlTemplate: function (e, t) {
          var r;
          Object.keys(t = t || {}).forEach(function (i) {
            r = RegExp(`{${i}}`, "g");
            e = e.replace(r, t[i]);
          });
          return e;
        },
        toQueryString: function (e = {}) {
          var t = [];
          Object.entries(e).forEach(function (r) {
            var i;
            var n;
            var r = function (e) {
              if (Array.isArray(e)) {
                return e;
              }
            }(i = r) || function (e, t) {
              var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (r != null) {
                var i;
                var n;
                var o;
                var s;
                var a = [];
                var c = true;
                var u = false;
                try {
                  o = (r = r.call(e)).next;
                  for (; !(c = (i = o.call(r)).done) && (a.push(i.value), a.length !== t); c = true);
                } catch (e) {
                  u = true;
                  n = e;
                } finally {
                  try {
                    if (!c && r.return != null && (s = r.return(), Object(s) !== s)) {
                      return;
                    }
                  } finally {
                    if (u) {
                      throw n;
                    }
                  }
                }
                return a;
              }
            }(i, 2) || rM(i, 2) || function () {
              throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
            var o = r[0];
            var r = r[1];
            if (Array.isArray(r)) {
              t.push.apply(t, function (e) {
                if (Array.isArray(e)) {
                  return rG(e);
                }
              }(n = r.map(function (e) {
                return `${o}=${encodeURIComponent(e)}`;
              })) || function (e) {
                if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
                  return Array.from(e);
                }
              }(n) || rM(n) || function () {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }());
            } else {
              t.push(`${o}=${encodeURIComponent(e[o])}`);
            }
          });
          return t.join("&");
        },
        supportChunked: function () {
          var e = window.Blob || window.WebKitBlob;
          try {
            var t = e.prototype;
            return !!FormData && (!!t.slice || !!t.webkitSlice || !!t.mozSlice);
          } catch (e) {
            return false;
          }
        },
        supportXhr: function () {
          return !!window.FormData || window.ProgressEvent && window.FileReader;
        },
        supportCrc32: function () {
          var e = window.FileReader && window.FileReader.prototype.readAsBinaryString;
          return typeof Int32Array != "undefined" && e && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
        },
        storage: function (e) {
          var t = e;
          var e = {
            removeItem: function (e) {
              delete t.cache[e];
            },
            setItem: function (e, r) {
              t.cache[e] = r;
            },
            getItem: function (e) {
              return t.cache[e];
            },
            clear: function () {
              delete t.cache;
              t.cache = {};
            }
          };
          if (!(arguments.length > 1) || arguments[1] === undefined || arguments[1]) {
            try {
              if (window.localStorage) {
                window.localStorage.setItem("", "");
                return window.localStorage;
              }
            } catch (e) {}
          }
          return e;
        },
        noop: function () {},
        getUnique: function (e) {
          return `${e}_${new Date().getTime()}_${parseInt(Math.random() * 1000000)}`;
        },
        getFileSliceLength: function (e, t) {
          var r = e.size;
          if (t && typeof t == "function") {
            if (t(r) < 2097152) {
              return 2097152;
            } else {
              return t(r) || r;
            }
          } else if (r > 209715200) {
            return 10485760;
          } else if (r <= 209715200 && r >= 2097152) {
            return 5242880;
          } else {
            return e.size;
          }
        },
        getFileSuffix: function (e) {
          if (e && Object.prototype.toString.call(e) === "[object String]") {
            var t = e.lastIndexOf(".");
            if (t > 0 && (e = `.${e.substring(t + 1)}`).length <= 8) {
              return e;
            } else {
              return "";
            }
          }
        },
        fileSlice: function (e, t, r) {
          return (e.slice || e.webkitSlice || e.mozSlice).call(e, t, r);
        },
        getPathByURL: function (e) {
          return /^(?:(https?:)\/\/)?(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/.exec(e)[5] || "/";
        },
        crypto: {
          hmac: function (e, t) {
            return rR()(t, e);
          },
          sha256: function (e) {
            return rP()(e);
          }
        },
        date: {
          iso8601: function (e) {
            return (e = e === undefined ? rF.date.getDate() : e).toISOString().replace(/\.\d{3}Z$/, "Z");
          }
        },
        Buffer: Uint8Array,
        generateKey: function (e) {
          var t = "";
          var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var i = r.length;
          var n = 0;
          for (; n < e; n++) {
            t += r.charAt(Math.floor(Math.random() * i));
          }
          return t;
        },
        getHeaderFromHeaders: function (e, t) {
          var r = null;
          if (e) {
            Object.keys(e).forEach(function (i) {
              if ((i == null ? undefined : i.toLowerCase()) === t.toLowerCase()) {
                r = e[i];
              }
            });
          }
          return r;
        },
        getDYAddHeader: function (e) {
          var t = {};
          var r = rF.getHeaderFromHeaders(e, "X-Vod-Upload-PSM");
          if (r) {
            t["X-Vod-Upload-PSM"] = r;
          }
          var r = rF.getHeaderFromHeaders(e, "X-Vod-Upload-UserID");
          if (r) {
            t["X-Vod-Upload-UserID"] = r;
          }
          return t;
        },
        pushEncrypyHeader: function (e, t, r) {
          if (t.useGcmEncryptionMode && t.gcmEncryptionMode && r !== rx) {
            e["X-Upload-Server-Gcm-Encryption-Mode"] = t.gcmEncryptionMode;
            e["X-Upload-Server-Gcm-Encryption-Key"] = t.encryptionKey;
          } else if (t.encryptionMode) {
            e["X-Upload-Server-Encryption-Mode"] = t.encryptionMode;
            e["X-Upload-Server-Encryption-Key"] = t.encryptionKey;
          }
        },
        minSliceSize: function (e, t) {
          if (!e && t) {
            return 5242880;
          } else {
            return 0;
          }
        },
        resolveHeader: function (e, t = false) {
          var r = {};
          if (Array.isArray(e)) {
            e.forEach(function (e) {
              var t = (t = e.Key) == null ? undefined : t.toLowerCase();
              if (e.Key && e.Value) {
                r[t] = e.Value;
              }
            });
          }
          if (Object.prototype.toString.call(e) === "[object Object]") {
            rU(r, e);
          }
          if (t) {
            if (e = rA.find(function (e) {
              return r.hasOwnProperty(e);
            })) {
              r[e] = "gateway";
            } else {
              r["x-storage-mode"] = "gateway";
            }
          }
          return r;
        }
      };
      function rN(e) {
        return (rN = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function rH() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (rH = function () {
          return !!e;
        })();
      }
      function rL(e) {
        return (rL = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function rK(e, t) {
        return (rK = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var rq = (() => {
        var e;
        function t() {
          var e;
          var r;
          var i;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (r = rL(r = t), e = function (e, t) {
            if (t && (rN(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, rH() ? Reflect.construct(r, [], rL(this).constructor) : r.apply(this, i))).xhr = new XMLHttpRequest();
          e._data = null;
          return e;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            rK(e, t);
          }
        })(t, u.a);
        e = [{
          key: "_ajax",
          value: function (e) {
            var t = this;
            var r = this.xhr;
            r.upload.onprogress = function (e) {
              t.emit("progress", e);
            };
            r.onreadystatechange = function () {
              if (r.readyState === 4) {
                r.upload.onprogress = rF.noop;
                r.onreadystatechange = rF.noop;
                r.params = e;
                if (t._data && t._data.url) {
                  r.currentUrl = t._data.url;
                }
                if (r.status >= 200 && r.status < 300 || r.status === 304) {
                  t.emit("complete", r);
                } else if (r.status >= 400) {
                  t.emit("error", r);
                }
              }
            };
            r.onerror = function () {
              r.errText = "unknow net error";
              t.emit("error", r);
            };
            r.ontimeout = function () {
              r.errText = "timeout";
              t.emit("error", r);
            };
            r.onabort = function () {
              r.errText = "abort";
              t.emit("error", r);
            };
            r.send(e);
          }
        }, {
          key: "send",
          value: function (e) {
            var t = this;
            this._data = e;
            this.xhr.open(e.method || "POST", e.url || "", true);
            if (e.headers) {
              Object.keys(e.headers).forEach(function (r) {
                t.xhr.setRequestHeader(r, e.headers[r]);
              });
            }
            this.xhr.timeout = e.timeout || 0;
            if (e.ontimeout) {
              this.xhr.ontimeout = e.ontimeout;
            }
            if (e.binary) {
              return this.sendAsBinary(e);
            } else if (e.custom) {
              if (rN(e.custom) === "object") {
                return this.sendAsCustom(JSON.stringify(e.custom));
              } else if (e.custom === "none") {
                delete e.custom;
                return this.sendAsCustom();
              } else {
                return this.sendAsCustom(e.custom);
              }
            } else {
              return this.sendAsFormData(e);
            }
          }
        }, {
          key: "sendAsBinary",
          value: function (e) {
            this.xhr.setRequestHeader("Content-Type", "application/octet-stream");
            this.xhr.setRequestHeader("Content-Disposition", `attachment; filename="${encodeURI(e.filename)}"`);
            return this._ajax(e.file);
          }
        }, {
          key: "sendAsFormData",
          value: function (e) {
            t = (t = e.formData ? typeof e.formData == "function" ? e.formData() : e.formData : t) || [];
            var t;
            var r = new FormData();
            var i = 0;
            var n = t.length;
            for (; i < n; i++) {
              var o = r[i];
              r.append(o.name, o.value);
            }
            if (e.file) {
              r.append(e.field, e.file, e.name);
            }
            return this._ajax(r);
          }
        }, {
          key: "sendAsCustom",
          value: function (e) {
            return this._ajax(e);
          }
        }, {
          key: "abort",
          value: function () {
            this.xhr.onreadystatechange = rF.noop;
            this.xhr.abort();
          }
        }, {
          key: "getResponse",
          value: function () {
            return this.xhr.response;
          }
        }, {
          key: "getText",
          value: function () {
            return this.xhr.responseText;
          }
        }, {
          key: "getJson",
          value: function () {
            return JSON.parse(this.xhr.responseText);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (rN(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (rN(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), rN(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      var eG = r(1);
      var rW = r.n(eG);
      function rV(e) {
        return (rV = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function rJ(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function rZ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] ?? {};
          if (t % 2) {
            rJ(Object(r), true).forEach(function (t) {
              var i;
              var n;
              i = t;
              n = r[t];
              if ((i = rQ(i)) in e) {
                Object.defineProperty(e, i, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[i] = n;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
          } else {
            rJ(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
        }
        return e;
      }
      function rX() {
        return (rX = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function rQ(e) {
        e = function (e, t) {
          if (rV(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (rV(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (rV(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function r$() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (r$ = function () {
          return !!e;
        })();
      }
      function rY(e) {
        return (rY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function r1(e, t) {
        return (r1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var r0 = (() => {
        var e;
        function t(e, r) {
          var i;
          var n;
          var o;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (n = rY(n = t), i = function (e, t) {
            if (t && (rV(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, r$() ? Reflect.construct(n, [], rY(this).constructor) : n.apply(this, o))).options = e;
          i.config = r;
          i.uploaderCtx = e.context;
          i.file = e.file;
          i.cacheKey = "__bd_uploader_cache";
          return i;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            r1(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e, t) {
            this._st = Date.now();
            this.uploaderCtx._broadcast("startSelectRoute", null, true);
            this.clientIp = e.clientIp;
            this.selectRouteTimeout = e.selectRouteTimeout || 5000;
            this.selectRouteCacheTime = e.selectRouteCacheTime || 3600000;
            this.selectRouteFileSize = e.selectRouteFileSize || 2147483648;
            this.completeCallback = t;
            if (e = this.checkSelect({
              clientIp: this.clientIp
            })) {
              this.success(e, null, true);
            } else {
              this.startSelectRoute();
            }
          }
        }, {
          key: "checkSelect",
          value: function (e) {
            var e = e.clientIp;
            var t = null;
            try {
              t = JSON.parse(this.uploaderCtx.storage.getItem(this.cacheKey));
            } catch (e) {
              return null;
            }
            if (t) {
              var r = t.lastClientIp;
              var i = t.lastSelectRouteTime;
              if (e && e !== r) {
                return null;
              }
              if (new Date().getTime() - i < this.selectRouteCacheTime) {
                return t;
              }
            }
            return null;
          }
        }, {
          key: "startSelectRoute",
          value: function () {
            var e = this;
            var t = this.config.region;
            var r = new rq();
            r.on("complete", function (t) {
              if (t.response) {
                try {
                  var r;
                  var i = JSON.parse(t.response);
                  if (i.ResponseMetadata.Error) {
                    e.fail({
                      xhr: t,
                      errorCode: i.ResponseMetadata.Error.CodeN,
                      error: i.ResponseMetadata.Error.Code,
                      message: i.ResponseMetadata.Error.Message
                    });
                  } else {
                    r = i.Result.Domains;
                    e.race(r, t);
                  }
                } catch (r) {
                  e.fail({
                    error: `catch error: ${r.toString()}`,
                    xhr: t
                  });
                }
              } else {
                e.fail({
                  error: `request fail: ${t.statusText || t.errText || "UNKNOWN"}`,
                  xhr: t
                });
              }
            });
            r.on("error", function (t) {
              var r = {
                error: `request fail: ${t.statusText || t.errText || "UNKNOWN"}`,
                xhr: t
              };
              if (t.response && (t = JSON.parse(t.response)).ResponseMetadata && t.ResponseMetadata.Error) {
                r.errorCode = t.ResponseMetadata.Error.CodeN;
                r.error = t.ResponseMetadata.Error.Code;
                r.message = t.ResponseMetadata.Error.Message;
              }
              e.fail(r);
            });
            var i = this.config.videoHost;
            var n = this.config.videoConfig && this.config.videoConfig.spaceName;
            var o = {
              Action: "GetUploadCandidates",
              Version: "2020-11-19",
              SpaceName: n = this.options.type === rO && (o = this.config.objectConfig) != null && o.spaceName ? (o = this.config.objectConfig) == null ? undefined : o.spaceName : n
            };
            var n = this.options.stsToken;
            var s = rF.toQueryString(o);
            var a = n.AccessKeyID;
            var c = n.AccessKeyId;
            var u = n.SecretAccessKey;
            var l = n.SessionToken;
            var n = n.CurrentTime;
            var i = {
              method: "GET",
              url: `${i}?${s}`,
              timeout: this.config.gatewayTimeout,
              region: t,
              params: o
            };
            var s = new rW.a(i, "vod");
            if (this.config.useServerCurrentTime && Math.abs(new Date(n) - new Date()) > 60000) {
              this.systemTimeGap = new Date(n) - new Date();
            }
            var t = this.systemTimeGap ? new Date(new Date().getTime() + this.systemTimeGap) : new Date();
            s.addAuthorization({
              accessKeyId: c || a,
              secretAccessKey: u,
              sessionToken: l
            }, t);
            r.send(i);
          }
        }, {
          key: "race",
          value: function (e, t) {
            var r = this;
            var i = this.file;
            var n = (i.slice || i.webkitSlice || i.mozSlice).call(i, 0, Math.min(this.selectRouteFileSize, i.size));
            var o = e.map(function (e) {
              return {
                domainName: e.Name,
                domainInfo: e,
                percent: 0,
                startTime: new Date().getTime(),
                endTime: new Date().getTime(),
                complete: false
              };
            });
            var s = 0;
            var a = o.length;
            o.forEach(function (e, i) {
              var n = new rq();
              n.on("complete", function () {
                o[i].endTime = new Date().getTime();
                o[i].complete = true;
                o.forEach(function (e, t) {
                  if (i !== t && e.transport) {
                    e.transport.abort();
                  }
                });
                r.formatRaceInfo(o, t);
              });
              n.on("error", function (e) {
                o[i].endTime = new Date().getTime();
                o[i].complete = true;
                o[i].error = e.errText;
                if (a <= ++s) {
                  r.formatRaceInfo(o, t);
                }
              });
              n.on("progress", function (e) {
                e = e.loaded / e.total;
                o[i].percent = e;
              });
              o[i].transport = n;
            });
            o.forEach(function (e) {
              var t = e.domainInfo;
              var i = {
                oid: t.StoreID,
                tosDomain: `${r.config.schema}://${t.Name}`
              };
              var i = `${rF.urlTemplate(f, i)}?speedtest`;
              var t = t.Sign;
              e.transport.send({
                method: "post",
                url: i,
                headers: {
                  Authorization: t,
                  "Content-CRC32": "ignore"
                },
                file: n,
                binary: 1,
                timeout: r.selectRouteTimeout
              });
            });
          }
        }, {
          key: "formatRaceInfo",
          value: function (e, t) {
            e.sort(function (e, t) {
              if (e.percent < t.percent) {
                return 1;
              } else if (t.percent < e.percent) {
                return -1;
              } else if (e.error) {
                return 1;
              } else if (t.error) {
                return -1;
              } else {
                return 0;
              }
            });
            e.forEach(function (e) {
              delete e.transport;
            });
            e = {
              lastClientIp: this.clientIp,
              lastSelectRouteTime: new Date().getTime(),
              raceInfo: e,
              type: "success"
            };
            this.uploaderCtx.storage.setItem(this.cacheKey, JSON.stringify(e));
            this.success(e, t);
          }
        }, {
          key: "success",
          value: function (e, t, r = false) {
            var t = t && this.formatXhr(t);
            this.uploaderCtx.logger.send(rX(rZ(rZ({
              stage: "selectRoute",
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              fileSize: this.file && this.file.size
            }, t), {}, {
              useCache: r
            }), e));
            this.uploaderCtx._broadcast("completeSelectRoute", rZ(rZ({}, e), {}, {
              useCache: r
            }), true);
            this.completeCallback({
              selectRouteResult: e.raceInfo
            });
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = {
              error: e.error,
              errorCode: e.errorCode,
              message: e.message
            };
            this.uploaderCtx.logger.send(rX(rZ({
              stage: "selectRoute",
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              fileSize: this.file && this.file.size,
              extra: t,
              type: "warn"
            }, this.formatXhr(e.xhr))));
            this.uploaderCtx._broadcast("completeSelectRoute", rZ({
              type: "warn"
            }, t), true);
            this.completeCallback();
          }
        }, {
          key: "formatXhr",
          value: function (e) {
            return {
              req: {
                url: e.currentUrl,
                param: e.params
              },
              res: {
                status: e.status,
                header: e.getAllResponseHeaders(),
                body: e.responseText
              }
            };
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, rQ(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      var r2 = {
        crc32: function (e, t) {
          var r = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
          if (typeof Int32Array != "undefined") {
            r = new Int32Array(r);
          }
          var i = ~~t ^ -1;
          var n = (e = new Uint8Array(e)).length;
          var o = 0;
          for (; o < n; o++) {
            i = r[(i ^ e[o]) & 255] ^ i >>> 8;
          }
          return (i ^ -1) >>> 0;
        },
        dec2hex: function (e) {
          if (e !== undefined) {
            return function e(t) {
              if (t.length < 8) {
                return e(t = `0${t}`);
              } else {
                return t;
              }
            }(Number(e).toString(16));
          }
        }
      };
      function r4(e) {
        return (r4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      o = function e(t, r, i, n) {
        (function (e, t) {
          if (!(e instanceof t)) {
            throw TypeError("Cannot call a class as a function");
          }
        })(this, e);
        this.file = t;
        this.successProcess = i;
        this.failProcess = n;
        this.sliceLength = r;
        this.retryTime = 0;
        this.fileSize = t.size;
        this.crc32Array = [];
      };
      s = [{
        key: "start",
        value: function () {
          this.readFileCrc32(this.file);
        }
      }, {
        key: "readFileCrc32",
        value: function (e) {
          var t = this;
          var r = this.sliceLength;
          var i = e.slice || e.webkitSlice || e.mozSlice;
          var n = new FileReader();
          var o = 0;
          var s = 0;
          var a = 0;
          var c = Math.max(r, 5242880);
          function u() {
            if (s < e.size && (s = Math.min(o + r, e.size), e.size - s <= c)) {
              s = e.size;
            }
            n.readAsArrayBuffer(i.call(e, o, s));
            n.onload = function (r) {
              r = r.target.result;
              a = r2.crc32(r, 0);
              t.crc32Array.push({
                start: o,
                end: s,
                crc32: r2.dec2hex(a),
                buffer: r
              });
              if ((o = s) < e.size) {
                u();
              } else {
                t.success(t.crc32Array);
              }
            };
          }
          u();
        }
      }, {
        key: "success",
        value: function (e) {
          this.successProcess(e);
        }
      }, {
        key: "fail",
        value: function (e, t, r, i) {
          if (this.retryTime >= 3) {
            this.failProcess();
          } else {
            this.readFileCrc32(e, t, r, i);
            this.retryTime++;
          }
        }
      }];
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var i;
          var n = t[r];
          n.enumerable = n.enumerable || false;
          n.configurable = true;
          if ("value" in n) {
            n.writable = true;
          }
          Object.defineProperty(e, (i = function (e, t) {
            if (r4(e) != "object" || !e) {
              return e;
            }
            var r = e[Symbol.toPrimitive];
            if (r === undefined) {
              return (t === "string" ? String : Number)(e);
            }
            r = r.call(e, t || "default");
            if (r4(r) != "object") {
              return r;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }(i = n.key, "string"), r4(i) == "symbol" ? i : i + ""), n);
        }
      })(o.prototype, s);
      Object.defineProperty(o, "prototype", {
        writable: false
      });
      var r3 = o;
      var r5 = "The format of stsToken is incorrect.";
      function r6(e) {
        return (r6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function r8() {
        return (r8 = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function r9(e, t) {
        if (t == null || t > e.length) {
          t = e.length;
        }
        var r = 0;
        var i = Array(t);
        for (; r < t; r++) {
          i[r] = e[r];
        }
        return i;
      }
      a = function e(t) {
        var r;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (function (e, t) {
          if (!(e instanceof t)) {
            throw TypeError("Cannot call a class as a function");
          }
        })(this, e);
        this.context = t.context;
        this.key = t.key;
        this.isDirect = t.isDirect;
        this.isImageBatchUpload = t.isImageBatchUpload;
        this.file = t.file;
        this.type = (this.isImageBatchUpload ? (r = this.file[0]) == null ? undefined : r.type : (r = this.file) == null ? undefined : r.type) || "";
        this.sliceLength = t.sliceSize;
        this.config = i;
      };
      c = [{
        key: "start",
        value: function (e, t, r) {
          this.successProcess = t;
          this.failProcess = r;
          this._st = Date.now();
          this.crc32(this.file, this.sliceLength);
        }
      }, {
        key: "crc32",
        value: function (e, t) {
          var r = this;
          if (this.isImageBatchUpload) {
            var i = e.length;
            var n = [];
            function o(t) {
              new r3(e[t], e[t].size, function (e) {
                n[t] = e[0];
                if (n.filter(function (e) {
                  return !!e;
                }).length === i) {
                  r.success(n);
                }
              }, function (e) {
                r.fail(e);
              }).start();
            }
            var s = 0;
            for (; s < i; s++) {
              o(s);
            }
          } else if (e && e.size && !(e.size <= 0)) {
            if (this.isDirect) {
              new r3(e, e.size, function (e) {
                r.success(e);
              }, function (e) {
                r.fail({
                  errorCode: 1000003,
                  message: `get crc32 error: ${e && e.message}`
                });
              }).start();
            } else {
              this.sliceFile(e, t, function (e) {
                r.success(e);
              }, function (e) {
                r.fail(e);
              });
            }
          } else {
            this.fail({
              errorCode: 1000003,
              message: "There is a problem with the input file or fileSize."
            });
          }
        }
      }, {
        key: "sliceFile",
        value: function (e, t, r, i) {
          var n = [];
          var o = e.size;
          var s = e.slice || e.webkitSlice || e.mozSlice;
          var a = 0;
          var c = 0;
          var u = 0;
          var l = Math.max(5242880, t);
          while (c < o) {
            c = Math.min(a + t, o);
            n.push({
              start: a,
              end: c = o - c <= l ? o : c,
              crc32: 0
            });
            a = c;
          }
          try {
            (function t(a) {
              var c = new FileReader();
              var l = n[a].start;
              var f = n[a].end;
              c.readAsArrayBuffer(s.call(e, l, f));
              c.onload = function (e) {
                e = e.target.result;
                u = r2.dec2hex(r2.crc32(e, 0));
                n[a].crc32 = u;
                if (f === o) {
                  r(n);
                } else {
                  t(n.length - 1);
                }
              };
              c.onerror = function (e) {
                var t = e.target.error.name;
                var e = e.target.error.message;
                i({
                  crc32Array: n,
                  errorCode: 1000003,
                  message: `${t}: ${e}`
                });
              };
            })(0);
          } catch (e) {
            i({
              message: e && e.toString()
            });
          }
        }
      }, {
        key: "getCrc32Key",
        value: function (e, t) {
          var r;
          (t = Object.prototype.toString.call(t) === "[object Array]" ? function (e) {
            if (Array.isArray(e)) {
              return r9(e);
            }
          }(r = t) || function (e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
              return Array.from(e);
            }
          }(r) || function (e, t) {
            var r;
            if (e) {
              if (typeof e == "string") {
                return r9(e, undefined);
              } else if ((r = (r = {}.toString.call(e).slice(8, -1)) === "Object" && e.constructor ? e.constructor.name : r) === "Map" || r === "Set") {
                return Array.from(e);
              } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
                return r9(e, undefined);
              } else {
                return undefined;
              }
            }
          }(r) || function () {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }() : [t]).push(e[0].crc32, e[e.length - 1].crc32);
          if (this.config.instanceId) {
            t.push(this.config.instanceId);
          }
          return t.join("_");
        }
      }, {
        key: "success",
        value: function (e) {
          var t = this.context;
          var r = this.key;
          var i = [];
          var n = [];
          if (this.isImageBatchUpload) {
            for (var o = 0; o < this.file.length; o++) {
              i.push(this.file[o].size);
              n.push(this.file[o].name);
            }
          } else {
            i = this.file.size;
            n = this.file.name;
          }
          var s = this.getCrc32Key(e, i);
          var t = t.tasks[r];
          if (t) {
            this.successProcess(r8(t, {
              key: r,
              crc32Array: e,
              crc32Key: s,
              sdkVersion: "2.1.3",
              sliceLength: this.sliceLength,
              extra: {
                message: "get crc32 success"
              },
              stage: "crc32",
              type: "success",
              fileSize: i,
              fileName: n,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st,
              isDirect: this.isDirect,
              isImageBatchUpload: this.isImageBatchUpload
            }));
          }
        }
      }, {
        key: "fail",
        value: function (e) {
          var t = this.context;
          var r = this.key;
          var i = e && e.message ? e.message : "get crc32 error";
          var n = e && e.errorCode;
          var e = e && e.crc32Array;
          var t = r8(t.tasks[r], {
            crc32Array: e,
            extra: {
              message: i,
              errorCode: n
            },
            type: "error",
            stage: "crc32",
            stageStartTime: this._st,
            stageEndTime: Date.now(),
            duration: Date.now() - this._st,
            totalDuration: Date.now() - this._st
          });
          this.failProcess(t);
        }
      }];
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var i;
          var n = t[r];
          n.enumerable = n.enumerable || false;
          n.configurable = true;
          if ("value" in n) {
            n.writable = true;
          }
          Object.defineProperty(e, (i = function (e, t) {
            if (r6(e) != "object" || !e) {
              return e;
            }
            var r = e[Symbol.toPrimitive];
            if (r === undefined) {
              return (t === "string" ? String : Number)(e);
            }
            r = r.call(e, t || "default");
            if (r6(r) != "object") {
              return r;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }(i = n.key, "string"), r6(i) == "symbol" ? i : i + ""), n);
        }
      })(a.prototype, c);
      Object.defineProperty(a, "prototype", {
        writable: false
      });
      var r7 = a;
      var ie = {
        checkStsToken: function (e) {
          return !e || e.SessionToken && e.SecretAccessKey && (e.AccessKeyId || e.AccessKeyID);
        },
        checkIfGateway: function (e) {
          return !!e && !!rA.find(function (t) {
            return e.hasOwnProperty(t);
          });
        },
        checkServiceName: function (e, t, r) {
          if (r === "vod" || r === rT) {
            return r;
          }
          if (e !== rx) {
            if (e === rE) {
              return rT;
            }
            if (e === rO) {
              if (t.objectConfig && t.objectConfig.spaceName) {
                return "vod";
              }
              if (t.objectConfig && t.objectConfig.serviceId) {
                return rT;
              }
              if (t.videoConfig && t.videoConfig.spaceName) {
                return "vod";
              }
              if (t.imageConfig && t.imageConfig.serviceId) {
                return rT;
              }
            }
          }
          return "vod";
        }
      };
      function it(e) {
        return (it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function ir(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function ii() {
        return (ii = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function io(e) {
        e = function (e, t) {
          if (it(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (it(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (it(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function is() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (is = function () {
          return !!e;
        })();
      }
      function ia(e) {
        return (ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function ic(e, t) {
        return (ic = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var iu = (() => {
        var e;
        function t(e, r) {
          var i;
          var n;
          var o;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (n = ia(n = t), i = function (e, t) {
            if (t && (it(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, is() ? Reflect.construct(n, [], ia(this).constructor) : n.apply(this, o))).options = e;
          i.config = r;
          i.uploaderCtx = e.context;
          i.currFileCtx = e.context.tasks[e.key];
          i.systemTimeGap = 0;
          i.retryTime = r.retryTaskTime;
          i.hasRetryTime = 0;
          i.isImageBatchUpload = !!i.options.isImageBatchUpload;
          i.isDirect = i.options.isDirect;
          i.serviceName = ie.checkServiceName(i.options.type, i.config, i.options.serviceType);
          return i;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            ic(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e, t, r) {
            this.startOptions = e;
            this.failProcess = r;
            this.successProcess = t;
            this._st = Date.now();
            r = (e = this.uploaderCtx._getCache(this.currFileCtx.crc32Key)) ? JSON.parse(e) : {};
            if (!this.isDirect && r.oid && r.UploadID) {
              this.resumeFromCache(r);
            } else {
              this.startPreUpload();
            }
          }
        }, {
          key: "startPreUpload",
          value: function () {
            var e = this;
            var t = this.config.region;
            var r = new rq();
            r.on("complete", function (t) {
              e.success(t);
            });
            r.on("error", function (t) {
              e.handleError(t);
            });
            var i = "";
            var n = {};
            var o = this.uploaderCtx.useBackupDomain;
            var s = ie.checkServiceName(this.options.type, this.config, this.options.serviceType);
            var n = s === rT ? (i = o ? this.config.imageFallbackHost : this.config.imageHost, this.createImageXParams()) : (i = o ? this.config.videoFallbackHost : this.config.videoHost, this.createVodParams());
            if (this.currFileCtx.fileSize && !this.currFileCtx.isImageBatchUpload) {
              n.FileSize = this.currFileCtx.fileSize;
            }
            if (this.config.useFileExtension && this.currFileCtx.fileName && (this.options.type === rO || this.options.type === rE) && (o = this.currFileCtx.fileName, o = rF.getFileSuffix(o))) {
              n.FileExtension = o;
            }
            if (this.options.fileExtension) {
              n.FileExtension = this.options.fileExtension;
            }
            if (this.config.accountId) {
              n["X-Account-Id"] = this.config.accountId;
            }
            if (this.currFileCtx.useGcmEncryptionMode) {
              n.OpenGcmEnc = true;
            }
            if (this.options.type !== rx && this.config.bizType) {
              n.BizType = this.config.bizType;
              n.AppID = this.config.appId;
              n.UserID = this.config.userId;
            }
            if (this.config.openExperiment) {
              n.app_id = this.config.appId;
              n.user_id = this.config.userId;
            }
            n.s = Math.random().toString(36).substring(2);
            if (this.options.fileSize) {
              n.FileSize = this.options.fileSize;
            }
            var o = this.currFileCtx.proxyStsToken || this.config.stsToken;
            var a = rF.toQueryString(n);
            var c = o.AccessKeyID;
            var u = o.AccessKeyId;
            var l = o.SecretAccessKey;
            var f = o.SessionToken;
            var o = o.CurrentTime;
            var h = rF.getDYAddHeader(this.currFileCtx.headers || this.config.headers);
            var a = {
              method: "GET",
              url: `${i}?${a}`,
              timeout: this.config.gatewayTimeout || 0,
              headers: h,
              region: t,
              params: n,
              pathname: rF.getPathByURL(i)
            };
            var h = new rW.a(a, s);
            if (this.config.useServerCurrentTime && Math.abs(new Date(o) - new Date()) > 60000) {
              this.systemTimeGap = new Date(o) - new Date();
            }
            var t = this.systemTimeGap ? new Date(new Date().getTime() + this.systemTimeGap) : new Date();
            h.addAuthorization({
              accessKeyId: u || c,
              secretAccessKey: l,
              sessionToken: f
            }, t);
            r.send(a);
          }
        }, {
          key: "createImageXParams",
          value: function () {
            var e;
            var t = {
              Action: "ApplyImageUpload",
              Version: "2018-08-01"
            };
            if (this.options.type === rE) {
              if (this.currFileCtx.serviceId || this.config.imageConfig && this.config.imageConfig.serviceId) {
                t.ServiceId = this.currFileCtx.serviceId || this.config.imageConfig.serviceId;
              } else {
                t.SpaceName = this.config.videoConfig && this.config.videoConfig.spaceName;
              }
            }
            if (this.options.type === rO) {
              t.ServiceId = this.currFileCtx.serviceId || this.config.objectConfig && this.config.objectConfig.serviceId || this.config.imageConfig && this.config.imageConfig.serviceId;
            }
            if (this.currFileCtx.fileSize && this.currFileCtx.fileSize.length > 1) {
              t.UploadNum = this.currFileCtx.fileSize.length;
            }
            if (this.options.storeKey) {
              e = this.options.storeKey;
              if (Object.prototype.toString.call(e) === "[object Array]") {
                t.StoreKeys = e;
              } else if (Object.prototype.toString.call(e) === "[object String]") {
                t.StoreKeys = [e];
              }
            }
            t.NeedFallback = true;
            return t;
          }
        }, {
          key: "createVodParams",
          value: function () {
            var e = this.config.videoConfig && this.config.videoConfig.spaceName;
            var t = {
              Action: "ApplyUploadInner",
              Version: "2020-11-19",
              SpaceName: e = this.options.type === rO && (t = this.config.objectConfig) != null && t.spaceName ? (t = this.config.objectConfig) == null ? undefined : t.spaceName : e,
              FileType: this.options.type,
              IsInner: 1
            };
            if (this.config.enOID) {
              t.EnOID = 1;
            }
            if (this.options.testHost || this.config.testHost) {
              t.TestHost = this.options.testHost || this.config.testHost;
            }
            if (this.startOptions && this.startOptions.selectRouteResult) {
              e = this.startOptions.selectRouteResult;
              t.ClientBestHosts = e.map(function (e) {
                return e.domainName;
              }).join(",");
            }
            t.NeedFallback = true;
            return t;
          }
        }, {
          key: "resumeFromCache",
          value: function (e) {
            var t = this;
            var r = this.options.key;
            var i = new rq();
            i.on("complete", function (i) {
              var n = null;
              try {
                var o = JSON.parse(i.response);
                if (o.code !== 2000 || !(o.data.partlist.length > 0)) {
                  return t.startPreUpload();
                }
                var s = t.confirmCache(o.data.partlist);
                var a = e.hasMerge ? 5 : s.isAllFinished ? 4 : 3;
                var n = ii(t.currFileCtx, e, {
                  key: r,
                  xhr: i,
                  extra: {
                    message: "prepare upload from cache success"
                  },
                  stage: "preUpload",
                  type: "success",
                  percent: 0,
                  cacheTask: a,
                  proxyStsToken: t.options.stsToken,
                  currentTask: 1,
                  status: 1,
                  isBreak: 1,
                  crc32Array: s.crc32Array,
                  stageStartTime: t._st,
                  stageEndTime: Date.now(),
                  duration: Date.now() - t._st,
                  totalDuration: Date.now() - t._st + t.currFileCtx.totalDuration
                });
              } catch (e) {
                return t.startPreUpload();
              }
              t.successProcess(n);
            });
            i.on("error", function (e) {
              if (e.status >= 400) {
                t.startPreUpload();
              } else {
                t.fail({
                  error: "request error",
                  xhr: e
                });
              }
            });
            var n = this.config.userId;
            i.send({
              method: "get",
              url: rF.urlTemplate("{tosDomain}/upload/v1/{oid}?uploadid={uploadId}&action=part_list", {
                tosDomain: e.tosDomain,
                oid: e.oid,
                uploadId: e.UploadID
              }),
              headers: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t] ?? {};
                  if (t % 2) {
                    ir(Object(r), true).forEach(function (t) {
                      var i;
                      var n;
                      i = t;
                      n = r[t];
                      if ((i = io(i)) in e) {
                        Object.defineProperty(e, i, {
                          value: n,
                          enumerable: true,
                          configurable: true,
                          writable: true
                        });
                      } else {
                        e[i] = n;
                      }
                    });
                  } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                  } else {
                    ir(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                  }
                }
                return e;
              }({
                Authorization: e.signature,
                "X-Storage-U": encodeURIComponent(n)
              }, e.UploadHeader),
              timeout: 30000
            });
          }
        }, {
          key: "confirmCache",
          value: function (e) {
            var t = this.currFileCtx.crc32Array;
            var r = {};
            e.forEach(function (e) {
              if (r[e.num - 1] === undefined) {
                r[e.num - 1] = {
                  tag: true,
                  crc32: e.crc32
                };
              }
            });
            var i = true;
            var e = t.map(function (e, t) {
              if (r[t] && r[t].tag && r[t].crc32) {
                e.crc32 = r[t].crc32;
                e.finished = true;
                e.loaded = e.end - e.start;
              } else {
                i = false;
              }
              return e;
            });
            return {
              isAllFinished: i,
              crc32Array: e
            };
          }
        }, {
          key: "handleError",
          value: function (e) {
            if ((this.options.type === rE && this.config.imageFallbackHost || this.options.type === rx && this.config.videoFallbackHost) && !this.uploaderCtx.useBackupDomain) {
              if (this.hasRetryTime < this.retryTime - 1) {
                this.hasRetryTime++;
              } else {
                this.uploaderCtx.useBackupDomain = true;
              }
              this.startPreUpload();
            } else {
              var t = {
                error: `request fail: ${e.statusText || e.errText || "UNKNOWN"}`,
                xhr: e
              };
              if (e.response) {
                try {
                  var r = JSON.parse(e.response);
                  if (r.ResponseMetadata && r.ResponseMetadata.Error) {
                    t.errorCode = r.ResponseMetadata.Error.CodeN;
                    t.error = r.ResponseMetadata.Error.Code;
                    t.message = r.ResponseMetadata.Error.Message;
                  }
                } catch (r) {
                  t.error = e.response.toString();
                  t.message = e.response.toString();
                }
              }
              this.fail(t);
            }
          }
        }, {
          key: "success",
          value: function (e) {
            if (e.response) {
              var t = null;
              try {
                var r = JSON.parse(e.response);
                if (r.ResponseMetadata.Error) {
                  return this.fail({
                    xhr: e,
                    errorCode: r.ResponseMetadata.Error.CodeN,
                    error: r.ResponseMetadata.Error.Code,
                    message: r.ResponseMetadata.Error.Message
                  });
                }
                var i;
                var n;
                var o;
                var s;
                var a;
                var c;
                var u;
                var l;
                var f;
                var h;
                var d = this.serviceName;
                var p = r.Result;
                var g = d === rT ? p.UploadAddress : p.InnerUploadAddress.UploadNodes[0];
                var m = g.StoreInfos;
                var y = g.SessionKey;
                var _ = g.UploadHeader;
                var b = _ === undefined ? {} : _;
                var v = d === rT ? g.UploadHosts[0] : g.UploadHost;
                var z = (i = m[0]) == null ? undefined : i.UploadID;
                var S = p == null || (n = p.SDKParam) == null ? undefined : n.server_encryption_mode;
                var w = p == null || (o = p.SDKParam) == null ? undefined : o.server_gcm_encryption_mode;
                var k = p == null || (s = p.InnerUploadAddress) == null || (s = s.AdvanceOption) == null ? undefined : s.EncryptionKey;
                var x = [];
                var E = [];
                if (this.isImageBatchUpload && m.length > 1) {
                  m.forEach(function (e) {
                    x.push(e.Auth);
                    E.push(e.StoreUri);
                  });
                } else {
                  x = m[0].Auth;
                  E = m[0].StoreUri;
                }
                if (d === "vod" && (c = p.InnerUploadAddress.UploadNodes).length && c.length > 1) {
                  a = c.slice(1).map(function (e) {
                    return {
                      Cloud: e.Cloud,
                      SessionKey: e.SessionKey,
                      UploadHeader: e.UploadHeader,
                      StoreInfo: e.StoreInfos[0],
                      UploadHost: e.UploadHost
                    };
                  });
                }
                if (this.startOptions && this.startOptions.enableSelectRoute && (f = true, this.startOptions.selectRouteResult)) {
                  l = ((u = this.startOptions.selectRouteResult)[0] && u[0].domainName) === v;
                }
                this.currFileCtx.sliceSize;
                var O = ie.checkIfGateway(b) || this.currFileCtx.gatewayUpload;
                if (!this.isDirect) {
                  if ((h = rF.minSliceSize(false, O)) > this.currFileCtx.sliceSize) {
                    this.currFileCtx.sliceSize = Math.max(h);
                  }
                }
                t = ii(this.currFileCtx, {
                  key: this.options.key,
                  useBackupDomain: this.uploaderCtx.useBackupDomain,
                  signature: x,
                  type: "success",
                  extra: {
                    message: "prepare upload success"
                  },
                  stage: "preUpload",
                  oid: E,
                  systemTimeGap: this.systemTimeGap,
                  tosDomain: `${this.config.schema}://${v}`,
                  xhr: e,
                  UploadHeader: rF.resolveHeader(b, this.currFileCtx.gatewayUpload),
                  SessionKey: y,
                  UploadID: z,
                  fallbackStoreInfoList: a,
                  stageStartTime: this._st,
                  stageEndTime: Date.now(),
                  duration: Date.now() - this._st,
                  totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration,
                  useClientSelectRouteResult: l,
                  enableSelectRoute: f,
                  encryptionMode: S,
                  encryptionKey: k,
                  gcmEncryptionMode: w
                });
              } catch (t) {
                return this.fail({
                  error: `catch error: ${t.message || t.toString()}`,
                  xhr: e
                });
              }
              return this.successProcess(t);
            }
            return this.fail({
              error: `request fail: ${e.statusText || e.errText || "UNKNOWN"}`,
              xhr: e
            });
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = this;
            var r = e.xhr;
            var i = e.errorCode || 1001000;
            var n = "prepare upload error: UNKNOWN";
            if (r) {
              n = r.status === 0 ? "prepare upload error: NETERROR" : e.message || `prepare upload error: ${r.status}`;
            }
            var n = ii(this.currFileCtx, {
              extra: {
                message: n,
                error: e.error,
                errorCode: i
              },
              type: "error",
              stage: "preUpload",
              xhr: r,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration
            });
            if (this.isImageBatchUpload) {
              n.successItems = [];
              n.failItems = (e = this.currFileCtx) == null ? undefined : e.crc32Array.map(function (e, r) {
                return {
                  crc32: e.crc32,
                  fileSize: (e = t.currFileCtx) == null ? undefined : e.fileSize[r],
                  fileName: (e = t.currFileCtx) == null ? undefined : e.fileName[r],
                  finishSize: 0,
                  success: false
                };
              });
            }
            this.uploaderCtx._removeTaskCache(this.options.key);
            this.failProcess(n);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, io(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function il(e) {
        return (il = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function ih() {
        return (ih = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function id(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function ip(e) {
        e = function (e, t) {
          if (il(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (il(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (il(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function ig() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (ig = function () {
          return !!e;
        })();
      }
      function im(e) {
        return (im = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function iy(e, t) {
        return (iy = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var i_ = (() => {
        var e;
        function t(e, r) {
          var i;
          var n;
          var o;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (n = im(n = t), i = function (e, t) {
            if (t && (il(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, ig() ? Reflect.construct(n, [], im(this).constructor) : n.apply(this, o))).options = e;
          i.config = r;
          i.transport = new rq();
          i.uploaderCtx = e.context;
          i.currFileCtx = e.context.tasks[e.key];
          i.eventInit();
          return i;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            iy(e, t);
          }
        })(t, u.a);
        e = [{
          key: "initUpload",
          value: function () {
            var e = {
              oid: this.currFileCtx.oid,
              tosDomain: this.currFileCtx.tosDomain
            };
            var e = rF.urlTemplate("{tosDomain}/upload/v1/{oid}?uploadmode=part&phase=init", e);
            var t = this.config.userId;
            var t = function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] ?? {};
                if (t % 2) {
                  id(Object(r), true).forEach(function (t) {
                    var i;
                    var n;
                    i = t;
                    n = r[t];
                    if ((i = ip(i)) in e) {
                      Object.defineProperty(e, i, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      });
                    } else {
                      e[i] = n;
                    }
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                } else {
                  id(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
                }
              }
              return e;
            }({
              Authorization: this.currFileCtx.signature,
              "X-Storage-U": encodeURIComponent(t)
            }, this.currFileCtx.UploadHeader);
            var r = this.currFileCtx.headers || this.config.headers;
            var r = rF.getHeaderFromHeaders(r, "Content-Type");
            if (r) {
              t["Specified-Content-Type"] = r;
            }
            this.transport.send({
              method: "post",
              url: e,
              headers: t,
              timeout: this.config.gatewayTimeout
            });
          }
        }, {
          key: "resolveUploadHeader",
          value: function (e) {
            delete (e = e || {})["X-Storage-Mode"];
            delete e["x-storage-mode"];
            return ih({}, e);
          }
        }, {
          key: "start",
          value: function (e, t, r) {
            this.successProcess = t;
            this.failProcess = r;
            this._st = Date.now();
            this.initUpload(e && e.changeNodeRetry);
          }
        }, {
          key: "eventInit",
          value: function () {
            var e = this;
            this.transport.on("complete", function (t) {
              var r = null;
              try {
                var i;
                var n = JSON.parse(t.response);
                var o = (i = n.data) == null ? undefined : i.uploadid;
                if (n.code !== 2000 || !o) {
                  return e.fail({
                    error: `fail! response.code: ${n.code}, fail message: ${n.message}`,
                    xhr: t,
                    errorCode: n == null ? undefined : n.code
                  });
                }
                r = ih(e.currFileCtx, {
                  UploadID: o,
                  percent: 0,
                  type: "success",
                  extra: {
                    message: "init upload id success"
                  },
                  stage: "initUploadID",
                  xhr: t,
                  stageStartTime: e._st,
                  stageEndTime: Date.now(),
                  duration: Date.now() - e._st,
                  totalDuration: Date.now() - e._st + e.currFileCtx.totalDuration
                });
              } catch (r) {
                return e.fail({
                  error: `catch error: ${r.message || JSON.stringify(r)}`,
                  xhr: t
                });
              }
              return e.successProcess(r);
            });
            this.transport.on("error", function (t) {
              e.fail({
                error: `request fail: ${t.statusText || t.errText || "UNKNOWN"}`,
                xhr: t
              });
            });
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = this.options.context;
            var r = this.options.key;
            var t = ih(t.tasks[r], {
              extra: {
                message: `init upload id error, ${e.error}`,
                errorCode: e.errorCode || 1002000
              },
              type: "error",
              stage: "initUploadID",
              xhr: e.xhr,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration
            });
            this.uploaderCtx._removeTaskCache(this.options.key);
            this.failProcess(t);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, ip(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function ib(e) {
        return (ib = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function iv(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function iz(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] ?? {};
          if (t % 2) {
            iv(Object(r), true).forEach(function (t) {
              var i;
              var n;
              i = t;
              n = r[t];
              if ((i = iS(i)) in e) {
                Object.defineProperty(e, i, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[i] = n;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
          } else {
            iv(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
        }
        return e;
      }
      function iS(e) {
        e = function (e, t) {
          if (ib(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (ib(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (ib(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function iw() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (iw = function () {
          return !!e;
        })();
      }
      function ik(e) {
        return (ik = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function ix(e, t) {
        return (ix = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var iE = (() => {
        var e;
        function t(e) {
          var r;
          var i;
          var n;
          var o = e.sliceItem;
          var s = e.crc32;
          var a = e.url;
          var c = e.signature;
          var u = e.uploadHeader;
          var l = e.userId;
          var f = e.retryTime;
          var h = e.timeout;
          var e = e.method;
          var e = e === undefined ? "POST" : e;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (r = ik(r = t), n = function (e, t) {
            if (t && (ib(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, iw() ? Reflect.construct(r, [], ik(this).constructor) : r.apply(this, i))).fileSlice = o;
          n.crc32 = s;
          n.uploadUrl = a;
          n.uploadHeader = u;
          n.signature = c;
          n.userId = l;
          n.retryTime = f || 0;
          n.method = e;
          n.retryCount = 0;
          n.timeout = h;
          n.ready = false;
          n.cancel = false;
          n.transport = new rq();
          n.eventInit();
          return n;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            ix(e, t);
          }
        })(t, u.a);
        e = [{
          key: "upload",
          value: function () {
            if (this.isParamsValid() && (this._st = Date.now(), this.transport)) {
              this.transport.send({
                method: this.method,
                url: this.uploadUrl,
                headers: iz({
                  Authorization: this.signature,
                  "Content-CRC32": this.crc32,
                  "X-Storage-U": encodeURIComponent(this.userId)
                }, this.uploadHeader),
                file: this.fileSlice,
                binary: 1,
                timeout: this.timeout
              });
            }
          }
        }, {
          key: "isParamsValid",
          value: function () {
            if (this.fileSlice && (this.fileSlice.size || this.fileSlice.byteLength)) {
              if (this.crc32) {
                return !!this.uploadUrl || (this.emit("error", {
                  message: "slice upload failed: NOURL",
                  crc32: this.crc32,
                  size: this.fileSlice.size || this.fileSlice.byteLength
                }), false);
              } else {
                this.emit("error", {
                  message: "slice upload failed: NOCRC32",
                  crc32: this.crc32,
                  size: this.fileSlice.size || this.fileSlice.byteLength
                });
                return false;
              }
            } else {
              this.emit("error", {
                message: "slice upload failed: NOCONTENT",
                crc32: this.crc32
              });
              return false;
            }
          }
        }, {
          key: "eventInit",
          value: function () {
            var e = this;
            this.transport.on("complete", function (t) {
              try {
                var r = JSON.parse(t.response);
                if (r.code === 2000) {
                  e.success(t);
                } else {
                  e.fail(t, r);
                }
              } catch (r) {
                e.fail(t);
              }
            });
            this.transport.on("error", function (t) {
              e.fail(t);
            });
            this.transport.on("progress", function (t) {
              e.process(t);
            });
          }
        }, {
          key: "success",
          value: function (e) {
            this.ready = true;
            var t = Date.now() - this._st;
            var r = this.fileSlice.size || this.fileSlice.byteLength;
            this.emit("complete", {
              crc32: this.crc32,
              size: r,
              speed: r / t,
              xhr: e,
              sliceStartTime: this._st,
              sliceEndTime: Date.now(),
              sliceDuration: Date.now() - this._st
            });
          }
        }, {
          key: "fail",
          value: function (e) {
            var t;
            var r;
            var i = this;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!this.cancel) {
              t = {
                crc32: this.crc32,
                size: this.fileSlice.size || this.fileSlice.byteLength,
                xhr: e,
                sliceStartTime: this._st,
                sliceEndTime: Date.now(),
                sliceDuration: Date.now() - this._st
              };
              if (e && e.status === 401) {
                this.emit("error", iz({
                  message: "slice upload failed: UNAUTHORIZED"
                }, t));
              } else {
                r = "slice upload failed: UNKNOWN";
                if (e) {
                  r = e.status ? `slice upload failed: ${(n == null ? undefined : n.message) || e.status}` : "slice upload failed: NETERROR";
                }
                if (this.retryCount < this.retryTime) {
                  setTimeout(function () {
                    i.emit("retry", iz(iz({}, t), {}, {
                      retryCount: i.retryCount
                    }));
                    i.upload(true, iz({
                      message: r
                    }, t));
                  }, 1000);
                  this.retryCount++;
                } else {
                  this.emit("error", iz({
                    message: r,
                    errorCode: n == null ? undefined : n.code
                  }, t));
                }
              }
            }
          }
        }, {
          key: "process",
          value: function (e) {
            if (!this.cancel) {
              this.emit("progress", {
                crc32: this.crc32,
                loaded: e.loaded || 0,
                total: e.total || 0
              });
            }
          }
        }, {
          key: "abort",
          value: function () {
            if (this.transport) {
              this.cancel = true;
              this.transport.abort();
            }
          }
        }, {
          key: "destroy",
          value: function () {
            this.transport = null;
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, iS(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      var t = r(2);
      var iO = r.n(t);
      function iD(e) {
        return (iD = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function iT() {
        return (iT = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function iC(e, t) {
        if (t == null || t > e.length) {
          t = e.length;
        }
        var r = 0;
        var i = Array(t);
        for (; r < t; r++) {
          i[r] = e[r];
        }
        return i;
      }
      function iA() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (iA = function () {
          return !!e;
        })();
      }
      function iI(e) {
        return (iI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function ij(e, t) {
        return (ij = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var iB = (() => {
        var e;
        function t(e) {
          var r;
          var i;
          var n;
          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (r = iI(r = t), n = function (e, t) {
            if (t && (iD(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, iA() ? Reflect.construct(r, [], iI(this).constructor) : r.apply(this, i))).file = e.file;
          n.context = e.context;
          n.key = e.key;
          n.config = o;
          n.finishArr = [];
          n.errorLength = 0;
          n.finishSize = 0;
          n.retryUploadTime = Number(o.retryUploadTime);
          n.progressMonitorTime = Number(o.progressMonitorTime);
          n.progressMonitorSpeed = Number(o.progressMonitorSpeed);
          n.uploadSliceCount = Number(o.uploadSliceCount);
          n.realtimeSpeedInterval = Number(o.realtimeSpeedInterval);
          n.processRetry = 0;
          n.lastFinishSize = -1;
          n.lastProcessPercent = -1;
          n.lastIntervalSize = -1;
          n.lastCalculateSpeedTime = -1;
          n.lastCalculateSpeedSize = 0;
          n.uploadHandlers = {};
          return n;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            ij(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e, t, r) {
            this.failProcess = r;
            this.successProcess = t;
            this.errorLength = 0;
            this.currentCtx = this.context.tasks[this.key];
            this.crc32Array = this.context.tasks[this.key].crc32Array;
            this.uploadSliceCount = this.uploadSliceCount > this.crc32Array.length ? this.crc32Array.length : this.uploadSliceCount;
            this.lastIndex = 0;
            this.uploading = [];
            if (this.currentCtx.useFallback) {
              this.crc32Array.forEach(function (e) {
                e.finished = false;
                e.loaded = 0;
                e.speed = 0;
              });
              this.finishArr = [];
              this.finishSize = 0;
            }
            this._uploadSize = this.crc32Array.reduce(function (e, t) {
              return e + (t.finished ? 0 : t.end - t.start);
            }, 0);
            this._st = Date.now();
            this._lastSaveTime = Date.now();
            this.lastCalculateSpeedTime = this._st;
            this.initWorker();
            this.setProgressMonitor();
            this.threadUpload();
          }
        }, {
          key: "initWorker",
          value: function () {
            var e;
            var t = this;
            if (!this.worker) {
              e = this.crc32Array;
              this.worker = new iO.a();
              this.worker.onmessage = function (r) {
                var i;
                var r = function (e) {
                  if (Array.isArray(e)) {
                    return e;
                  }
                }(i = r.data) || function (e, t) {
                  var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                  if (r != null) {
                    var i;
                    var n;
                    var o;
                    var s;
                    var a = [];
                    var c = true;
                    var u = false;
                    try {
                      o = (r = r.call(e)).next;
                      for (; !(c = (i = o.call(r)).done) && (a.push(i.value), a.length !== t); c = true);
                    } catch (e) {
                      u = true;
                      n = e;
                    } finally {
                      try {
                        if (!c && r.return != null && (s = r.return(), Object(s) !== s)) {
                          return;
                        }
                      } finally {
                        if (u) {
                          throw n;
                        }
                      }
                    }
                    return a;
                  }
                }(i, 4) || function (e, t) {
                  var r;
                  if (e) {
                    if (typeof e == "string") {
                      return iC(e, 4);
                    } else if ((r = (r = {}.toString.call(e).slice(8, -1)) === "Object" && e.constructor ? e.constructor.name : r) === "Map" || r === "Set") {
                      return Array.from(e);
                    } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
                      return iC(e, t);
                    } else {
                      return undefined;
                    }
                  }
                }(i, 4) || function () {
                  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
                var n = r[0];
                var o = r[1];
                var s = r[2];
                var r = r[3];
                var a = new Date().getTime();
                var c = e[s];
                c.crc32 = o;
                c.crc32StartTime = r;
                c.crc32EndTime = a;
                c.crc32Duration = a - r;
                t.upload(c, n, s);
              };
            }
          }
        }, {
          key: "read",
          value: function (e, t) {
            var r = this;
            var i = this.file;
            var n = i.slice || i.webkitSlice || i.mozSlice;
            var o = new FileReader();
            o.onload = function (e) {
              var i = new Date().getTime();
              r.worker.postMessage([e.target.result, t, i, !!r.config.clientEncrypt, r.currentCtx.clientEncryptKey, r.crc32Array.length - 1 === t], [e.target.result]);
            };
            o.onerror = function () {
              r.stop();
              r.fail({
                extra: {
                  message: "An error occurred reading the file",
                  errorCode: 1003003
                }
              });
            };
            o.readAsArrayBuffer(n.call(i, e.start, e.end));
          }
        }, {
          key: "threadUpload",
          value: function () {
            if (this.uploading.length < this.uploadSliceCount) {
              var e = this.lastIndex;
              var t = this.crc32Array[e];
              if (t) {
                if (t.finished) {
                  if (this.finishArr.indexOf(t.start) === -1 && (this.finishArr.push(t.start), this.finishArr.length >= this.crc32Array.length)) {
                    this.stop();
                    this.success();
                    return;
                  }
                } else {
                  t.loaded = 0;
                  this.uploading.push(e);
                  this.read(t, e);
                }
                this.lastIndex++;
                this.threadUpload();
              }
            }
          }
        }, {
          key: "stop",
          value: function () {
            var e = this;
            Object.keys(this.uploadHandlers).forEach(function (t) {
              e.uploadHandlers[t].abort();
              e.uploadHandlers[t].destroy();
            });
            this.uploadHandlers = {};
            if (this.worker) {
              this.worker.terminate();
            }
            this.worker = null;
            this.clearMonitor();
          }
        }, {
          key: "setProgressMonitor",
          value: function () {
            var e = this;
            this.progressMonitorInterval = setInterval(function () {
              var t;
              var r = e.finishSize;
              if (r - e.lastIntervalSize < e.progressMonitorTime / 1000 * e.progressMonitorSpeed * 1024) {
                t = iT(e.currentCtx, {
                  stage: "process",
                  type: "warn",
                  extra: {
                    message: `percent are not updated in ${e.progressMonitorTime} seconds`
                  }
                });
                e.context.logger.send(t);
                e.context._broadcast("slowProgress", t);
                e.clearMonitor();
              } else {
                e.lastIntervalSize = r;
              }
            }, this.progressMonitorTime);
          }
        }, {
          key: "clearMonitor",
          value: function () {
            if (this.progressMonitorInterval) {
              clearInterval(this.progressMonitorInterval);
            }
          }
        }, {
          key: "upload",
          value: function (e, t, r) {
            var i = this;
            var n = e.crc32;
            var o = {
              part_number: r + 1,
              uploadId: this.currentCtx.UploadID,
              oid: this.currentCtx.oid,
              tosDomain: this.currentCtx.tosDomain
            };
            var o = rF.urlTemplate(l, o);
            var s = this.config.userId;
            if (!this.config.clientEncrypt && !this.config.useSliceBuffer) {
              t = rF.fileSlice(this.file, e.start, e.end);
            }
            var a = this.currentCtx.UploadHeader || {};
            var c = this.currentCtx.headers || this.config.headers;
            var c = rF.getHeaderFromHeaders(c, "Content-Type");
            if (c) {
              a["Specified-Content-Type"] = c;
            }
            var c = new iE({
              sliceItem: t,
              crc32: n,
              url: o,
              signature: this.currentCtx.signature,
              uploadHeader: a,
              userId: s,
              method: "POST",
              retryTime: this.retryUploadTime,
              timeout: this.config.uploadTimeout
            });
            c.on("complete", function (t) {
              if (i.currentCtx.status === 1) {
                t.start = e.start;
                t.crc32StartTime = e.crc32StartTime;
                t.crc32EndTime = e.crc32EndTime;
                t.crc32Duration = e.crc32Duration;
                t.index = r;
                i.fileSliceSuccess(t);
              }
            });
            c.on("error", function (t) {
              if (i.currentCtx.status === 1) {
                t.start = e.start;
                t.crc32StartTime = e.crc32StartTime;
                t.crc32EndTime = e.crc32EndTime;
                t.crc32Duration = e.crc32Duration;
                t.index = r;
                i.fail(t);
              }
            });
            c.on("progress", function (t) {
              if (i.currentCtx.status === 1) {
                t.start = e.start;
                t.index = r;
                i.process(t);
              }
            });
            c.on("retry", function (t) {
              if (i.currentCtx.status === 1) {
                t.start = e.start;
                t.index = r;
                i.retry(t);
              }
            });
            c.upload();
            this.uploadHandlers[r] = c;
          }
        }, {
          key: "success",
          value: function (e) {
            this.finishArr = [];
            var t = Date.now() - this._st;
            var t = this._uploadSize / t;
            var t = iT(this.currentCtx, {
              type: "success",
              stage: "process",
              percent: 100,
              extra: {
                message: "upload all success"
              },
              speed: t,
              xhr: e,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._lastSaveTime + this.currentCtx.totalDuration,
              isAllFinish: true
            });
            if (this.worker) {
              this.worker.terminate();
            }
            this.successProcess(t);
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = this.errorFormat(e);
            t.type = "error";
            if (e.statusCode !== undefined) {
              iT(this.currentCtx, {
                statusCode: e.statusCode
              });
            }
            if (!this.errorLength) {
              this.context.logger.send(iT({}, t));
              this.stop();
              this.context._broadcast("error", t);
              this.errorLength++;
            }
            this.failProcess(t);
          }
        }, {
          key: "retry",
          value: function (e) {
            e = this.errorFormat(e);
            this.context.logger.send(iT({}, e, {
              type: "retry"
            }));
          }
        }, {
          key: "fileSliceSuccess",
          value: function (e) {
            var t;
            var r = e.index;
            var i = Date.now();
            if (this.finishArr.indexOf(e.start) === -1) {
              this.finishArr.push(e.start);
            }
            this.crc32Array[r].finished = true;
            this.crc32Array[r].speed = e.speed;
            var n = {
              message: "slice upload success"
            };
            if (e.xhr) {
              t = e.xhr;
              n.currentUrl = t.currentUrl || "";
              iT(this.currentCtx, {
                req: {
                  url: t.currentUrl,
                  param: t.params
                },
                res: {
                  status: t.status,
                  body: t.responseText,
                  header: t.getAllResponseHeaders()
                }
              });
              delete e.xhr;
            }
            this.context.logger.send(iT(this.currentCtx, {
              stage: "process",
              type: "success",
              sliceIndex: r,
              extra: n,
              totalDuration: i - this._lastSaveTime + this.currentCtx.totalDuration,
              sliceStartTime: e.sliceStartTime,
              sliceEndTime: e.sliceEndTime,
              sliceDuration: e.sliceDuration,
              crc32StartTime: e.crc32StartTime,
              crc32EndTime: e.crc32EndTime,
              crc32Duration: e.crc32Duration
            }));
            this._lastSaveTime = i;
            this.uploading.splice(this.uploading.indexOf(r), 1);
            if (this.uploadHandlers[r]) {
              delete this.uploadHandlers[r];
            }
            if (this.finishArr.length >= this.crc32Array.length) {
              this.stop();
              this.success(e.xhr);
            } else {
              this.threadUpload();
            }
          }
        }, {
          key: "getFinishSize",
          value: function (e, t) {
            var r = t.crc32;
            var i = 0;
            e.forEach(function (e) {
              if (e.crc32 === r) {
                e.loaded = t.loaded;
                i += t.loaded;
              } else {
                e.loaded ||= 0;
                i += e.loaded;
              }
            });
            return i;
          }
        }, {
          key: "process",
          value: function (e) {
            var t = this.currentCtx.realtimeSpeed || 0;
            var r = this.currentCtx.fileSize;
            this.finishSize = this.getFinishSize(this.crc32Array, e);
            if (this.finishSize > this.lastFinishSize) {
              if ((e = new Date()).getTime() - this.lastCalculateSpeedTime > this.realtimeSpeedInterval || !t) {
                n = e.getTime() - this.lastCalculateSpeedTime;
                t = Math.floor((i = this.finishSize - this.lastCalculateSpeedSize) / n);
                this.lastCalculateSpeedTime = e.getTime();
                this.lastCalculateSpeedSize = this.finishSize;
              }
              this.lastFinishSize = this.finishSize;
            }
            var i = Math.floor(this.finishSize / r * 100) || 0;
            var n = iT(this.currentCtx, {
              stage: "process",
              percent: i,
              realtimeSpeed: t
            });
            if (i > this.lastProcessPercent && i !== 100) {
              this.lastProcessPercent = i;
              this.context._broadcast("progress", n);
            }
          }
        }, {
          key: "errorFormat",
          value: function (e) {
            var t = this.currentCtx.totalDuration;
            var r = Date.now() - this._st;
            var i = e.index;
            var n = e.crc32 ? {
              message: e.message,
              data: e.crc32,
              size: e.size
            } : e.extra;
            n.errorCode = ((o = e.extra) == null ? undefined : o.errorCode) || e.errorCode || 1003000;
            var o = iT(this.currentCtx, {
              extra: n,
              sliceIndex: i,
              stage: "process",
              req: {},
              res: {},
              totalDuration: r + t,
              sliceStartTime: e.sliceStartTime,
              sliceEndTime: e.sliceEndTime,
              sliceDuration: e.sliceDuration,
              crc32StartTime: e.crc32StartTime,
              crc32EndTime: e.crc32EndTime,
              crc32Duration: e.crc32Duration
            });
            if (e.xhr) {
              n = e.xhr;
              o.req = {
                url: e.xhr.currentUrl
              };
              o.res = {
                status: n.status,
                body: n.responseText,
                header: n.getAllResponseHeaders()
              };
              delete e.xhr;
            }
            return o;
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (iD(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (iD(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), iD(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function iR(e) {
        return (iR = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function iP() {
        return (iP = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function iU(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function iM(e) {
        e = function (e, t) {
          if (iR(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (iR(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (iR(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function iG() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (iG = function () {
          return !!e;
        })();
      }
      function iF(e) {
        return (iF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function iN(e, t) {
        return (iN = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var iH = (() => {
        var e;
        function t(e, r) {
          var i;
          var n;
          var o;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (n = iF(n = t), i = function (e, t) {
            if (t && (iR(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, iG() ? Reflect.construct(n, [], iF(this).constructor) : n.apply(this, o))).options = e;
          i.config = r;
          i.transport = new rq();
          i.eventInit();
          i.errorCount = 0;
          i.uploaderCtx = e.context;
          i.currFileCtx = e.context.tasks[e.key];
          return i;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            iN(e, t);
          }
        })(t, u.a);
        e = [{
          key: "mergeFile",
          value: function () {
            var e = {
              oid: this.currFileCtx.oid,
              uploadId: this.currFileCtx.UploadID,
              tosDomain: this.currFileCtx.tosDomain
            };
            var t = this.currFileCtx.crc32Array;
            var r = "";
            var i = 0;
            for (; i < t.length; i++) {
              r = (r ? `${r},` : "").concat(i + 1, ":").concat(t[i].crc32);
            }
            var e = rF.urlTemplate("{tosDomain}/upload/v1/{oid}?uploadmode=part&phase=finish&uploadid={uploadId}", e);
            var n = this.config.userId;
            var n = function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] ?? {};
                if (t % 2) {
                  iU(Object(r), true).forEach(function (t) {
                    var i;
                    var n;
                    i = t;
                    n = r[t];
                    if ((i = iM(i)) in e) {
                      Object.defineProperty(e, i, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      });
                    } else {
                      e[i] = n;
                    }
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
                } else {
                  iU(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
                }
              }
              return e;
            }({
              Authorization: this.currFileCtx.signature,
              "X-Storage-U": encodeURIComponent(n)
            }, this.currFileCtx.UploadHeader);
            if (this.config.clientEncrypt) {
              n["x-upload-encryption-mode"] = 2;
              n["x-upload-encryption-key"] = btoa(this.currFileCtx.clientEncryptKey);
            }
            var o = this.currFileCtx.headers || this.config.headers;
            var o = rF.getHeaderFromHeaders(o, "Content-Type");
            if (o) {
              n["Specified-Content-Type"] = o;
            }
            if ((o = this.options) != null && o.useServerEncryption || (o = this.currFileCtx) != null && o.useGcmEncryptionMode) {
              rF.pushEncrypyHeader(n, this.currFileCtx, this.options.type);
            }
            this.transport.send({
              method: "post",
              url: e,
              headers: n,
              custom: r
            });
          }
        }, {
          key: "start",
          value: function (e, t, r) {
            this.successProcess = t;
            this.failProcess = r;
            this._st = Date.now();
            this.mergeFile();
          }
        }, {
          key: "eventInit",
          value: function () {
            var e = this;
            var t = this.options.stage;
            this.transport.on("complete", function (r) {
              var i = null;
              try {
                var n;
                var o = JSON.parse(r.response);
                if (o.code !== 2000 || (n = o.data) == null || !n.key) {
                  return e.fail({
                    error: `fail! response.code: ${o.code}, fail message: ${o.message}`,
                    xhr: r,
                    errorCode: o.code
                  });
                }
                i = iP(e.currFileCtx, {
                  stage: t,
                  type: "success",
                  hasMerge: true,
                  extra: {
                    message: "merge file success"
                  },
                  xhr: r,
                  stageStartTime: e._st,
                  stageEndTime: Date.now(),
                  duration: Date.now() - e._st,
                  totalDuration: Date.now() - e._st + e.currFileCtx.totalDuration
                });
              } catch (t) {
                return e.fail({
                  error: `response parse error: ${t.message || JSON.stringify(t)}`,
                  xhr: r
                });
              }
              return e.successProcess(i);
            });
            this.transport.on("error", function (t) {
              e.fail({
                error: `request fail: ${t.statusText || t.errText}`,
                xhr: t
              });
            });
          }
        }, {
          key: "getProcessIndex",
          value: function (e) {
            var t = 0;
            e.forEach(function (e, r) {
              if (e.stage === "process") {
                t = r;
              }
            });
            return t;
          }
        }, {
          key: "fail",
          value: function (e) {
            e = iP(this.currFileCtx, {
              extra: {
                message: `merge file error, ${e.error}`,
                errorCode: e.errorCode || 1004000
              },
              type: "error",
              stage: this.options.stage,
              xhr: e.xhr,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration
            });
            this.failProcess(e);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, iM(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function iL(e) {
        return (iL = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function iK() {
        return (iK = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function iq() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (iq = function () {
          return !!e;
        })();
      }
      function iW(e) {
        return (iW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function iV(e, t) {
        return (iV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var iJ = (() => {
        var e;
        function t(e) {
          var r;
          var i;
          var n;
          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (r = iW(r = t), n = function (e, t) {
            if (t && (iL(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, iq() ? Reflect.construct(r, [], iW(this).constructor) : r.apply(this, i))).options = e;
          n.file = e.file;
          n.context = e.context;
          n.key = e.key;
          n.isImageBatchUpload = e.isImageBatchUpload;
          n.config = o;
          n.finishArr = [];
          n.errorLength = 0;
          n.finishSize = 0;
          n.retryUploadTime = n.config.retryUploadTime || 0;
          n.processRetry = 0;
          n.lastFinishSize = -1;
          n.lastProcessPercent = -1;
          n.lastIntervalSize = -1;
          n.uploader = {};
          n._uploadProcessMap = {};
          return n;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            iV(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e, t, r) {
            this.failProcess = r;
            this.successProcess = t;
            this.currentCtx = this.context.tasks[this.key];
            this.crc32Array = this.context.tasks[this.key].crc32Array;
            this._uploadSize = this.isImageBatchUpload ? this.currentCtx.fileSize.reduce(function (e, t) {
              return e + t;
            }) : this.file.size;
            this._st = Date.now();
            this.upload();
          }
        }, {
          key: "stop",
          value: function () {
            var e = this;
            if (this.uploader) {
              Object.keys(this.uploader).forEach(function (t) {
                if (e.uploader[t]) {
                  e.uploader[t].abort();
                  e.uploader[t].destroy();
                }
              });
            }
          }
        }, {
          key: "upload",
          value: function () {
            var e = this;
            var t = this.crc32Array.length;
            var r = 0;
            var i = 0;
            var n = 0;
            for (; n < t; n++) {
              var o = this.crc32Array[n];
              var s = o.buffer;
              var o = o.crc32;
              var a = this.currentCtx.signature;
              var a = Object.prototype.toString.call(a) === "[object Array]" ? a[n] : a;
              var c = this.currentCtx.oid;
              var c = Object.prototype.toString.call(c) === "[object Array]" ? c[n] : c;
              var u = {
                oid: c,
                tosDomain: this.currentCtx.tosDomain
              };
              var u = rF.urlTemplate(f, u);
              var l = this.config.userId;
              var h = undefined;
              var d = this.isImageBatchUpload ? (h = this.currentCtx.fileSize[n], this.currentCtx.fileName[n]) : (h = this.file.size, this.file.name);
              if (this._uploadProcessMap[o] && this._uploadProcessMap[o].success) {
                r += 1;
              } else {
                this._uploadProcessMap[o] = {
                  crc32: o,
                  fileSize: h,
                  fileName: d,
                  oid: c,
                  finishSize: 0,
                  success: false
                };
                h = this.currentCtx.UploadHeader || {};
                d = this.currentCtx.headers || this.config.headers;
                if (c = rF.getHeaderFromHeaders(d, "Content-Type")) {
                  h["Specified-Content-Type"] = c;
                }
                if ((d = this.options) != null && d.useServerEncryption || (c = this.currentCtx) != null && c.useGcmEncryptionMode) {
                  rF.pushEncrypyHeader(h, this.currentCtx, this.options.type);
                }
                (d = new iE({
                  sliceItem: s,
                  crc32: o,
                  url: u,
                  signature: a,
                  uploadHeader: h,
                  userId: l,
                  retryTime: this.retryUploadTime,
                  method: "POST",
                  timeout: this.config.uploadTimeout
                })).on("complete", function (n) {
                  r++;
                  e._uploadProcessMap[n.crc32].finishSize = n.size;
                  e._uploadProcessMap[n.crc32].success = true;
                  if (i + r === t) {
                    e.success(n.xhr);
                  }
                });
                d.on("error", function (n) {
                  if (++i + r === t) {
                    if (r > 0) {
                      e.success(n.xhr);
                    } else {
                      e.fail(n);
                    }
                  }
                });
                d.on("progress", function (t) {
                  e.process(t);
                });
                this.lastCalculateSpeedTime = new Date().getTime();
                d.upload();
                this.uploader[o] = d;
              }
            }
          }
        }, {
          key: "success",
          value: function (e) {
            this.finishArr = [];
            var t = Date.now() - this._st;
            var t = this._uploadSize / t;
            var r = iK(this.currentCtx, {
              type: "success",
              stage: "process",
              percent: 99,
              extra: {
                message: "direct upload success"
              },
              speed: t,
              xhr: e,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currentCtx.totalDuration
            });
            if (this.isImageBatchUpload) {
              r.successItems = [];
              r.failItems = [];
              Object.values(this._uploadProcessMap).forEach(function (e) {
                (e.success ? r.successItems : r.failItems).push(e);
              });
            }
            this.uploader = null;
            this._uploadProcessMap = null;
            this.successProcess(r);
          }
        }, {
          key: "fail",
          value: function (e) {
            e = iK(this.currentCtx, {
              extra: {
                message: `direct upload error: ${e.message || e.xhr.errText}`,
                errorCode: e.errorCode || 1003000
              },
              type: "error",
              stage: "process",
              xhr: e.xhr,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currentCtx.totalDuration
            });
            if (this.isImageBatchUpload) {
              e.failItems = Object.values(this._uploadProcessMap);
            }
            this.uploader = {};
            this._uploadProcessMap = {};
            this.failProcess(e);
          }
        }, {
          key: "process",
          value: function (e) {
            var t = this._uploadSize;
            this._uploadProcessMap[e.crc32].finishSize = Math.max(this._uploadProcessMap[e.crc32].finishSize, e.loaded);
            var e = this.currentCtx.realtimeSpeed || 0;
            this.finishSize = Object.values(this._uploadProcessMap).reduce(function (e, t) {
              return e + t.finishSize;
            }, 0);
            if (this.finishSize > this.lastFinishSize) {
              e = Math.floor((r = this.finishSize - this.lastFinishSize) / (i = new Date().getTime() - this.lastCalculateSpeedTime));
              this.lastFinishSize = this.finishSize;
              this.lastCalculateSpeedTime = new Date().getTime();
            }
            var r = Math.floor(this.finishSize / t * 100) || 0;
            var i = iK(this.currentCtx, {
              stage: "process",
              percent: r,
              realtimeSpeed: e
            });
            if (r > this.lastProcessPercent && r !== 100) {
              this.lastProcessPercent = r;
              this.context._broadcast("progress", i);
            }
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (iL(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (iL(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), iL(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function iZ(e) {
        return (iZ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function iX() {
        return (iX = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function iQ() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (iQ = function () {
          return !!e;
        })();
      }
      function i$(e) {
        return (i$ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function iY(e, t) {
        return (iY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var i1 = (() => {
        var e;
        function t(e) {
          var r;
          var i;
          var n;
          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (r = i$(r = t), n = function (e, t) {
            if (t && (iZ(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, iQ() ? Reflect.construct(r, [], i$(this).constructor) : r.apply(this, i))).options = e;
          n.file = e.file;
          n.context = e.context;
          n.key = e.key;
          n.config = o;
          n.errorLength = 0;
          n.retryUploadTime = Number(o.retryUploadTime);
          n.maxUploadSliceCount = Number(o.uploadSliceCount);
          n.uploadQueue = [];
          n.crc32Array = [];
          n.uploadSliceCount = 0;
          n.isCalcCrc32 = false;
          n.isFileReading = false;
          n.hasStarted = false;
          n.hasCompleteUpload = false;
          n.uploadingSliceList = [];
          return n;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            iY(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e, t, r) {
            this.failProcess = r;
            this.successProcess = t;
            this.currentCtx = this.context.tasks[this.key];
            this.hasStarted = true;
            this._st = Date.now();
            this.initWorker();
          }
        }, {
          key: "initWorker",
          value: function () {
            var e = this;
            if (!this.worker) {
              this.worker = new iO.a();
              this.worker.onmessage = function (t) {
                e.isCalcCrc32 = false;
                var r = t.data[0];
                var i = t.data[2];
                var n = t.data[1];
                e.uploadQueue.forEach(function (t, o) {
                  if (t.index === i) {
                    e.uploadQueue[o].crc32 = n;
                    e.uploadQueue[o].fileSliceBuffer = r;
                    e.crc32Array[i] = {
                      crc32: n
                    };
                  }
                });
                e.startUploadQueue();
              };
              this.startUploadQueue();
            }
          }
        }, {
          key: "addStreamSlice",
          value: function (e) {
            var t = this;
            var r = e.fileSlice;
            var i = e.index;
            this.isFileReading = true;
            var e = new FileReader();
            e.readAsArrayBuffer(r);
            e.onload = function (e) {
              t.isFileReading = false;
              e = e.target.result;
              t.uploadQueue.push({
                fileSliceBuffer: e,
                index: i
              });
              if (t.hasStarted) {
                t.startUploadQueue();
              }
            };
          }
        }, {
          key: "completeStreamUpload",
          value: function () {
            this.hasCompleteUpload = true;
            if (this.uploadQueue.length === 0 && !this.isFileReading && this.uploadingSliceList.length === 0) {
              this.success();
            }
          }
        }, {
          key: "startUploadQueue",
          value: function () {
            var e;
            if (this.uploadSliceCount <= this.maxUploadSliceCount && this.uploadQueue.length > 0 && this.uploadQueue[0].crc32) {
              e = this.uploadQueue.shift();
              this.uploadSliceCount++;
              this.upload({
                sliceItem: e.fileSliceBuffer,
                index: e.index,
                crc32: e.crc32
              });
            } else if (this.uploadQueue.length > 0 && !this.uploadQueue[0].crc32) {
              this.startCrc32Queue();
            }
          }
        }, {
          key: "startCrc32Queue",
          value: function () {
            if (!this.isCalcCrc32) {
              for (var e = 0; e < this.uploadQueue.length; e++) {
                var t = this.uploadQueue[e];
                if (!t.crc32) {
                  this.isCalcCrc32 = true;
                  this.worker.postMessage([t.fileSliceBuffer, t.index], [t.fileSliceBuffer]);
                  break;
                }
              }
            }
          }
        }, {
          key: "upload",
          value: function (e) {
            var t = this;
            var r = e.sliceItem;
            var i = e.crc32;
            var n = this.currentCtx.signature;
            var o = {
              part_number: e.index + 1,
              uploadId: this.currentCtx.UploadID,
              oid: this.currentCtx.oid,
              tosDomain: this.currentCtx.tosDomain
            };
            var e = rF.urlTemplate(l, o);
            var s = this.config.userId;
            var r = new iE({
              sliceItem: r,
              crc32: i,
              url: e,
              signature: n,
              uploadHeader: this.currentCtx.UploadHeader,
              userId: s,
              retryTime: this.retryUploadTime,
              method: "POST",
              timeout: this.config.uploadTimeout
            });
            r.on("complete", function (e) {
              if (t.currentCtx.status === 1) {
                e.index = o.part_number;
                t.fileSliceSuccess(e);
              }
            });
            r.on("error", function (e) {
              if (t.currentCtx.status === 1) {
                e.index = o.part_number;
                t.fail(e);
              }
            });
            if (this.uploadingSliceList.indexOf(o.part_number) < 0) {
              this.uploadingSliceList.push(o.part_number);
            }
            r.upload();
          }
        }, {
          key: "fileSliceSuccess",
          value: function (e) {
            var t = e.index;
            var r = Date.now();
            var i = {
              message: "stream slice upload success"
            };
            if (e.xhr) {
              n = e.xhr;
              i.currentUrl = n.currentUrl || "";
              iX(this.currentCtx, {
                req: {
                  url: n.currentUrl,
                  param: n.params
                },
                res: {
                  status: n.status,
                  body: n.responseText,
                  header: n.getAllResponseHeaders()
                }
              });
              delete e.xhr;
            }
            this.context.logger.send(iX(this.currentCtx, {
              stage: "process",
              type: "success",
              sliceIndex: t,
              extra: i,
              totalDuration: r - this._lastSaveTime + this.currentCtx.totalDuration
            }));
            var n = iX(this.currentCtx, {
              uploadQueueLength: this.uploadQueue.length,
              sliceIndex: t
            });
            this.context._broadcast("stream-progress", n);
            this.uploadSliceCount--;
            var i = this.uploadingSliceList.indexOf(t);
            if (i >= 0) {
              this.uploadingSliceList.splice(i, 1);
            }
            if (this.hasCompleteUpload && this.uploadQueue.length === 0 && ((r = this.uploadingSliceList) == null ? undefined : r.length) === 0) {
              this.success(e.xhr);
            } else {
              this.startUploadQueue();
            }
          }
        }, {
          key: "success",
          value: function (e) {
            if (!this.isAllSuccess) {
              e = iX(this.currentCtx, {
                type: "success",
                stage: "process",
                percent: 100,
                extra: {
                  message: "all slice upload success"
                },
                crc32Array: this.crc32Array,
                xhr: e,
                stageStartTime: this._st,
                stageEndTime: Date.now(),
                duration: Date.now() - this._st,
                totalDuration: Date.now() - this._st + this.currentCtx.totalDuration
              });
              this.successProcess(e);
            }
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = e.index;
            var e = iX(this.currentCtx, {
              extra: {
                message: "stream slice upload error"
              },
              type: "error",
              stage: "process",
              xhr: e.xhr,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currentCtx.totalDuration,
              sliceIndex: t
            });
            this.context.logger.send(iX({}, e));
            this.context._broadcast("error", e);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (iZ(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (iZ(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), iZ(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function i0(e) {
        return (i0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function i2(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function i4(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] ?? {};
          if (t % 2) {
            i2(Object(r), true).forEach(function (t) {
              var i;
              var n;
              i = t;
              n = r[t];
              if ((i = i8(i)) in e) {
                Object.defineProperty(e, i, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[i] = n;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
          } else {
            i2(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
        }
        return e;
      }
      function i3() {
        return (i3 = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function i5(e, t) {
        return function (e) {
          if (Array.isArray(e)) {
            return e;
          }
        }(e) || function (e, t) {
          var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
          if (r != null) {
            var i;
            var n;
            var o;
            var s;
            var a = [];
            var c = true;
            var u = false;
            try {
              o = (r = r.call(e)).next;
              if (t === 0) {
                if (Object(r) !== r) {
                  return;
                }
                c = false;
              } else {
                for (; !(c = (i = o.call(r)).done) && (a.push(i.value), a.length !== t); c = true);
              }
            } catch (e) {
              u = true;
              n = e;
            } finally {
              try {
                if (!c && r.return != null && (s = r.return(), Object(s) !== s)) {
                  return;
                }
              } finally {
                if (u) {
                  throw n;
                }
              }
            }
            return a;
          }
        }(e, t) || function (e, t) {
          var r;
          if (e) {
            if (typeof e == "string") {
              return i6(e, t);
            } else if ((r = (r = {}.toString.call(e).slice(8, -1)) === "Object" && e.constructor ? e.constructor.name : r) === "Map" || r === "Set") {
              return Array.from(e);
            } else if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
              return i6(e, t);
            } else {
              return undefined;
            }
          }
        }(e, t) || function () {
          throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function i6(e, t) {
        if (t == null || t > e.length) {
          t = e.length;
        }
        var r = 0;
        var i = Array(t);
        for (; r < t; r++) {
          i[r] = e[r];
        }
        return i;
      }
      function i8(e) {
        e = function (e, t) {
          if (i0(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (i0(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (i0(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function i9() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (i9 = function () {
          return !!e;
        })();
      }
      function i7(e) {
        return (i7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function ne(e, t) {
        return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var nt = (() => {
        var e;
        function t(e, r) {
          var i;
          var n;
          var o;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (n = i7(n = t), i = function (e, t) {
            if (t && (i0(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, i9() ? Reflect.construct(n, [], i7(this).constructor) : n.apply(this, o))).options = e;
          i.config = r;
          i.uploaderCtx = e.context;
          i.currFileCtx = e.context.tasks[e.key];
          i.isImageBatchUpload = !!i.options.isImageBatchUpload;
          i.skipCommit = e.skipCommit;
          i.transport = new rq();
          i.eventInit();
          return i;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            ne(e, t);
          }
        })(t, u.a);
        e = [{
          key: "appendEncryptInfo",
          value: function (e) {
            var t;
            var r;
            var i;
            var n;
            if (((t = this.options) != null && t.useServerEncryption || (t = this.currFileCtx) != null && t.useGcmEncryptionMode) && (r = (t = this.currFileCtx).encryptionMode, i = t.gcmEncryptionMode, n = t.encryptionKey, r || i)) {
              e.EncryptionMode = (t.useGcmEncryptionMode && i && this.options.type !== rx ? i : r).toString();
              e.EncryptionKey = n;
            }
          }
        }, {
          key: "commitUpload",
          value: function () {
            var e;
            var t;
            var r = this.config.region;
            var i = "";
            var n = {};
            var o = this.uploaderCtx.useBackupDomain;
            var s = ie.checkServiceName(this.options.type, this.config, this.options.serviceType);
            if (s === rT) {
              i = o ? this.config.imageFallbackHost : this.config.imageHost;
              n = (t = i5(this.createImageXParams(), 3))[0];
              e = t[1];
              t = t[2];
            }
            if (s === "vod") {
              i = o ? this.config.videoFallbackHost : this.config.videoHost;
              n = (o = i5(this.createVodParams(), 3))[0];
              e = o[1];
              t = o[2];
            }
            if (this.config.accountId) {
              n["X-Account-Id"] = this.config.accountId;
            }
            if (this.config.IsWriteMedia) {
              n.IsWriteMedia = !!this.config.IsWriteMedia;
            }
            if (this.options.IsWriteMedia === true || this.options.IsWriteMedia === false) {
              n.IsWriteMedia = this.options.IsWriteMedia;
            }
            if (this.config.openExperiment) {
              n.app_id = this.config.appId;
              n.user_id = this.config.userId;
            }
            var o = rF.toQueryString(n);
            var a = this.currFileCtx.proxyStsToken || this.config.stsToken;
            var c = a.AccessKeyID;
            var u = a.AccessKeyId;
            var l = a.SecretAccessKey;
            var a = a.SessionToken;
            var f = rF.getDYAddHeader(this.currFileCtx.headers || this.config.headers);
            var o = {
              method: "POST",
              url: `${i}?${o}`,
              timeout: this.config.gatewayTimeout,
              region: r,
              params: n,
              headers: f,
              pathname: rF.getPathByURL(i)
            };
            o.custom = t;
            o.body = e;
            if (s === rT) {
              o.headers["Content-Type"] = "application/json";
            }
            var r = new rW.a(o, s);
            var n = this.currFileCtx.systemTimeGap;
            var f = n ? new Date(new Date().getTime() + n) : new Date();
            r.addAuthorization({
              accessKeyId: u || c,
              secretAccessKey: l,
              sessionToken: a
            }, f);
            this.transport.send(o);
          }
        }, {
          key: "createImageXParams",
          value: function () {
            var e = {
              Action: "CommitImageUpload",
              Version: "2018-08-01"
            };
            var t = {
              SessionKey: this.currFileCtx.SessionKey
            };
            if (this.options.type === rE && (this.currFileCtx.serviceId || this.config.imageConfig && this.config.imageConfig.serviceId ? e.ServiceId = this.currFileCtx.serviceId || this.config.imageConfig.serviceId : e.SpaceName = this.config.videoConfig && this.config.videoConfig.spaceName, Array.isArray(r = this.config.imageConfig && this.config.imageConfig.processAction) && r.length > 0 && (t.Functions = r), this.config.skipMeta)) {
              e.SkipMeta = true;
            }
            if (this.options.type === rO) {
              e.ServiceId = this.currFileCtx.serviceId || this.config.objectConfig && this.config.objectConfig.serviceId || this.config.imageConfig && this.config.imageConfig.serviceId;
            }
            this.appendEncryptInfo(t);
            var r = JSON.stringify(t);
            return [e, t, r];
          }
        }, {
          key: "createVodParams",
          value: function () {
            var e = (e = this.config.videoConfig) == null ? undefined : e.spaceName;
            var t = {
              Action: "CommitUploadInner",
              Version: "2020-11-19",
              SpaceName: e = this.options.type === rO && (t = this.config.objectConfig) != null && t.spaceName ? (t = this.config.objectConfig) == null ? undefined : t.spaceName : e
            };
            var e = {
              SessionKey: this.currFileCtx.SessionKey,
              Functions: []
            };
            var r = this.config.videoConfig && this.config.videoConfig.processAction;
            if (this.options.type === rO && (i = this.config.objectConfig) != null && i.processAction) {
              r = (i = this.config.objectConfig) == null ? undefined : i.processAction;
            }
            if (Array.isArray(r) && r.length > 0) {
              e.Functions = r;
            }
            if (this.config.videoConfig && this.config.videoConfig.callbackArgs || this.options.callbackArgs) {
              e.CallbackArgs = this.options.callbackArgs || this.config.videoConfig.callbackArgs;
            }
            if (this.options.type === rx && this.config.skipDownload) {
              t.SkipDownload = true;
            }
            if (this.options.type === rO && this.options.objectSync) {
              e.ObjectSync = this.options.objectSync;
            }
            if (this.options.type === rx && this.options.needExactFormat) {
              e.needExactFormat = this.options.needExactFormat;
            }
            this.appendEncryptInfo(e);
            var i = JSON.stringify(e);
            return [t, e, i];
          }
        }, {
          key: "start",
          value: function (e, t, r) {
            this.successProcess = t;
            this.failProcess = r;
            this._st = Date.now();
            if (this.skipCommit) {
              return this.successProcess(i3(this.currFileCtx, {
                stage: "complete",
                type: "success",
                percent: 100,
                extra: {
                  message: "upload successful, skip commit"
                },
                stageStartTime: this._st,
                stageEndTime: Date.now(),
                duration: Date.now() - this._st,
                totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration,
                skipCommit: this.skipCommit
              }));
            }
            try {
              this.commitUpload();
            } catch (e) {
              this.fail({
                error: `catch error: ${e.toString()}`
              });
            }
          }
        }, {
          key: "eventInit",
          value: function () {
            var e = this;
            this.transport.on("complete", function (t) {
              var r = null;
              try {
                var i = JSON.parse(t.response);
                if (i.ResponseMetadata.Error) {
                  return e.fail({
                    xhr: t,
                    errorCode: i.ResponseMetadata.Error.CodeN,
                    error: i.ResponseMetadata.Error.Code,
                    message: i.ResponseMetadata.Error.Message
                  });
                }
                var n;
                var o;
                var s;
                var a = ie.checkServiceName(e.options.type, e.config, e.options.serviceType);
                var c = i.Result;
                var u = {};
                if (a === rT) {
                  if (e.isImageBatchUpload) {
                    n = c.Results;
                    o = c.PluginResult || [];
                    s = e.currFileCtx.successItems;
                    n.forEach(function (e, t) {
                      var r;
                      n[t] = i4(i4({}, n[t]), o[t]);
                      if (((r = n[t]) == null ? undefined : r.UriStatus) === 2000 && s.find(function (e) {
                        return (e == null ? undefined : e.oid) === ((e = n[t]) == null ? undefined : e.Uri);
                      })) {
                        n[t].UploadSuccess = true;
                      } else {
                        n[t].UploadSuccess = false;
                      }
                    });
                    u = n;
                  } else {
                    i3(u = c.Results[0], c.PluginResult && c.PluginResult[0]);
                  }
                } else {
                  u = c.Results[0];
                }
                r = i3(e.currFileCtx, {
                  stage: "complete",
                  type: "success",
                  percent: 100,
                  extra: {
                    message: "upload successful"
                  },
                  uploadResult: u,
                  xhr: t,
                  stageStartTime: e._st,
                  stageEndTime: Date.now(),
                  duration: Date.now() - e._st,
                  totalDuration: Date.now() - e._st + e.currFileCtx.totalDuration,
                  skipCommit: e.skipCommit
                });
              } catch (r) {
                return e.fail({
                  error: `catch error: ${r.message || r.toString()}`,
                  xhr: t
                });
              }
              return e.successProcess(r);
            });
            this.transport.on("error", function (t) {
              var r = {
                error: `request fail: ${t.statusText || t.errText || "UNKNOWN"}`,
                xhr: t
              };
              if (t.response) {
                try {
                  var i = JSON.parse(t.response);
                  if (i.ResponseMetadata && i.ResponseMetadata.Error) {
                    r.errorCode = i.ResponseMetadata.Error.CodeN;
                    r.error = i.ResponseMetadata.Error.Code;
                    r.message = i.ResponseMetadata.Error.Message;
                  }
                } catch (e) {
                  r.error = t.response.toString();
                  r.message = t.response.toString();
                }
              }
              e.fail(r);
            });
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = e.xhr;
            var r = e.errorCode || 1005000;
            var i = "commit upload error: UNKNOWN";
            if (t) {
              i = t.status === 0 ? "commit upload error: NETERROR" : e.message || `commit upload error: ${t.status}`;
            }
            var i = i3(this.currFileCtx, {
              extra: {
                message: i,
                error: e.error,
                errorCode: r
              },
              type: "error",
              stage: "complete",
              xhr: t,
              stageStartTime: this._st,
              stageEndTime: Date.now(),
              duration: Date.now() - this._st,
              totalDuration: Date.now() - this._st + this.currFileCtx.totalDuration,
              skipCommit: this.skipCommit
            });
            this.failProcess(i);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, i8(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function nr(e) {
        return (nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function ni() {
        return (ni = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function nn() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (nn = function () {
          return !!e;
        })();
      }
      function no(e) {
        return (no = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function ns(e, t) {
        return (ns = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var na = (() => {
        var e;
        function t(e, r, i, n) {
          var o;
          var s;
          var a;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (s = t, a = [e], s = no(s), o = function (e, t) {
            if (t && (nr(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, nn() ? Reflect.construct(s, a || [], no(this).constructor) : s.apply(this, a))).tasks = e;
          o.config = r;
          o.key = n;
          o.uploaderCtx = i;
          o.current = 0;
          o.length = o.tasks.length;
          o.taskError = {};
          o.uploadList = [];
          o.retryTaskTime = r.retryTaskTime;
          return o;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            ns(e, t);
          }
        })(t, u.a);
        e = [{
          key: "start",
          value: function (e) {
            var t = this.tasks.shift();
            if (t) {
              this.current = t.index;
              try {
                this.execTask(t, e);
              } catch (e) {
                e.key = t.key;
                this.fail(e);
              }
            }
          }
        }, {
          key: "execTask",
          value: function (e, t) {
            var r;
            var i;
            var n = this;
            var o = e.key;
            var s = this.uploaderCtx;
            var a = s.tasks[o];
            if (a) {
              r = a.cacheTask;
              i = s.taskList[o].length;
              if (!a.useFallback && r && e.index > 0 && e.index < r) {
                this.start();
              } else {
                a.currentTask = e.index;
                if (a.status === 1 && (e.index !== 1 && e.stage !== "initUploadID" || (e.arg = ni(e.arg, t)), e)) {
                  e.func.call(e.context, e.arg, function (r) {
                    var c;
                    if (s.taskList[o]) {
                      if ((c = s.taskList[o][e.index + 1]) && e.index !== 0 && !a.isDirect && n.config.enableDiskBreakpoint) {
                        s._saveTask(o, {
                          currentTask: c.index,
                          stage: c.stage
                        });
                      } else if (e.index === i - 1) {
                        s._removeTaskCache(o);
                      }
                      n.success(r);
                      if (n.tasks.length > 0) {
                        n.start(t);
                      } else {
                        s._queueSuccess(o);
                      }
                    }
                  }, function (r) {
                    a.useFallback = false;
                    if (rC.TRANS.includes(rk[a.stage]) && (a == null || (i = a.fallbackStoreInfoList) == null ? undefined : i.length) > 0 && !a.stream) {
                      var i = a.fallbackStoreInfoList.shift();
                      a.tosDomain = `${n.config.schema}://${i.UploadHost}`;
                      a.uploadHeader = i.UploadHeader;
                      a.oid = i.StoreInfo.StoreUri;
                      a.signature = i.StoreInfo.Auth;
                      a.SessionKey = i.SessionKey;
                      a.UploadID = i.StoreInfo.UploadID;
                      a.useFallback = true;
                      var i = n.uploaderCtx.taskList[o].findIndex(function (e) {
                        return rk[e.stage] === rk.preUpload;
                      });
                      n.tasks = n.uploaderCtx.taskList[o].slice(i + 1);
                      n.uploaderCtx.logger.send(a, {
                        type: "retryUseFallback",
                        ex: "retry start from fallbackNodes."
                      });
                      n.start();
                    } else if (r.xhr && r.xhr.status >= 400) {
                      n.fail(r);
                    } else if (e.index === 3 && r.isDirect) {
                      n.fail(r);
                    } else if (!n.taskError[o] || n.taskError[o] < n.retryTaskTime) {
                      if (n.taskError[o]) {
                        n.taskError[o]++;
                      } else {
                        n.taskError[o] = 1;
                      }
                      i = n.errorFormat(r, true);
                      n.uploaderCtx.logger.send(i);
                      try {
                        n.execTask(e, t);
                      } catch (e) {
                        e.key = o;
                        n.fail(e);
                      }
                    } else {
                      r.key = o;
                      n.fail(r);
                    }
                  });
                }
              }
            }
          }
        }, {
          key: "addTask",
          value: function (e) {
            this.tasks.push(e);
          }
        }, {
          key: "success",
          value: function (e) {
            var t;
            if (e.xhr) {
              t = e.xhr;
              e.req = {
                url: t.currentUrl,
                param: t.params
              };
              e.res = {
                status: t.status,
                header: t.getAllResponseHeaders(),
                body: t.responseText
              };
              delete e.xhr;
            }
            ni(e, {
              type: "success"
            });
            try {
              this.uploaderCtx._broadcast(e.stage, e);
            } catch (e) {}
            this.uploaderCtx.logger.send(e);
          }
        }, {
          key: "fail",
          value: function (e) {
            var t = this.uploaderCtx;
            var r = e.key;
            var e = this.errorFormat(e);
            t._broadcast("error", e);
            if (t.tasks[r].isBreak) {
              t._cancel(r);
            } else {
              t._pause(r);
            }
            t.logger.send(e);
          }
        }, {
          key: "cancel",
          value: function (e) {
            var t;
            var r = this.key;
            var i = this.uploaderCtx.tasks[r].currentTask;
            this.uploaderCtx.taskList[r].forEach(function (e) {
              if (i === e.index) {
                t = e;
              }
            });
            if (e) {
              if (i === 3 && this.uploaderCtx.tasks[r].isDirect && t && (e = t) != null && (e = e.context) != null) {
                e.stop();
              }
            } else {
              this.tasks = [];
              if (t && t.index === 3) {
                t.context.stop();
              }
              this.uploaderCtx._removeTaskCache(r);
            }
          }
        }, {
          key: "restart",
          value: function () {
            this.uploadList.forEach(function (e) {
              e.cancel = false;
            });
            this.start();
          }
        }, {
          key: "errorFormat",
          value: function (e, t) {
            var r;
            var t = {
              type: t ? "retry" : "error"
            };
            if (e.xhr) {
              r = e.xhr;
              e.req = {
                url: r.currentUrl,
                param: r.params
              };
              e.res = {
                status: r.status,
                header: r.getAllResponseHeaders(),
                body: r.responseText
              };
              if (e.extra) {
                e.extra.req = e.req;
                e.extra.res = e.res;
              }
              delete e.xhr;
            }
            return ni(e, t);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (nr(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (nr(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), nr(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function nc(e) {
        return (nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function nu() {
        return (nu = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r;
            var i = arguments[t];
            for (r in i) {
              if ({}.hasOwnProperty.call(i, r)) {
                e[r] = i[r];
              }
            }
          }
          return e;
        }).apply(null, arguments);
      }
      function nl() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (nl = function () {
          return !!e;
        })();
      }
      function nf(e) {
        return (nf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function nh(e, t) {
        return (nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var nd = (() => {
        var e;
        function t(e) {
          var r;
          var i;
          var n;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          (i = t, n = [e], i = nf(i), r = function (e, t) {
            if (t && (nc(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, nl() ? Reflect.construct(i, n || [], nf(this).constructor) : i.apply(this, n))).config = nu({}, h);
          r._mergeOptions(r.config, e);
          r.tasks = {};
          r.taskList = {};
          r.cache = {};
          r.storage = rF.storage(r, r.config.enableDiskBreakpoint);
          r.logger = r.config.noLog ? {
            send: function () {
              return true;
            }
          } : new rB(r.config, r);
          return r;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            nh(e, t);
          }
        })(t, u.a);
        e = [{
          key: "_mergeOptions",
          value: function (e, t) {
            if (t && nc(t) === "object") {
              nu(e, t);
              Object.keys(t).forEach(function (r) {
                if (r === "vodDomain") {
                  e.replace[r] = t[r];
                }
              });
            }
          }
        }, {
          key: "_setCache",
          value: function (e, t) {
            this.storage.setItem(e, t);
          }
        }, {
          key: "_getCache",
          value: function (e) {
            return this.storage.getItem(e);
          }
        }, {
          key: "_removeCache",
          value: function (e) {
            if (e) {
              this.storage.removeItem(e);
            } else {
              this.storage.clear();
            }
          }
        }, {
          key: "_addTask",
          value: function (e, t) {
            var r = this.tasks;
            var i = this.taskList;
            if (r[e] && r[e].task) {
              i[e].push(t);
            } else {
              i[e] = [];
              i[e].push(t);
              r[e] = r[e] || {};
              r[e].task = new na([], this.config, this, e);
            }
            r[e].task.addTask(t);
          }
        }, {
          key: "_broadcast",
          value: function (e, t, r) {
            if (r || (r = this.tasks[t.key].status) === 1 || r === 0) {
              this.emit(e, t);
            }
          }
        }, {
          key: "_addCrc32ProcessTask",
          value: function (e, t, r = {}) {
            var i = r.isDirect;
            var n = r.isImageBatchUpload;
            var e = new r7({
              file: e.file,
              context: this,
              key: t,
              isDirect: i,
              isImageBatchUpload: n !== undefined && n,
              sliceSize: r.sliceSize
            }, this.config);
            var i = {
              context: e,
              func: e.start,
              arg: {},
              key: t,
              index: 0,
              stage: "crc32"
            };
            this._addTask(t, i);
          }
        }, {
          key: "_addPreUploadTask",
          value: function (e, t, r = {}) {
            var i = r.isDirect;
            var r = r.isImageBatchUpload;
            var i = {
              file: e.file,
              stsToken: e.stsToken,
              context: this,
              type: e.type || rx,
              preUploadUriParams: e.preUploadUriParams || {},
              storeKey: e.storeKey,
              testHost: e.testHost,
              key: t,
              isDirect: i,
              isImageBatchUpload: r !== undefined && r,
              fileSize: e.fileSize,
              serviceType: e.serviceType || null,
              fileExtension: e.fileExtension
            };
            var r = new iu(i, this.config);
            var e = {
              context: r,
              func: r.start,
              arg: {},
              key: t,
              index: 1,
              stage: "preUpload"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_addDirectUploadTask",
          value: function (e, t) {
            var r = (arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}).isImageBatchUpload;
            var r = new iJ({
              type: e.type,
              file: e.file,
              context: this,
              key: t,
              isImageBatchUpload: r !== undefined && r,
              useServerEncryption: e.useServerEncryption
            }, this.config);
            var e = {
              context: r,
              func: r.start,
              arg: {},
              key: t,
              index: 3,
              stage: "process"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_addInitUploadIDTask",
          value: function (e, t) {
            e = {
              context: e = new i_({
                file: e.file,
                context: this,
                key: t
              }, this.config),
              func: e.start,
              arg: {},
              key: t,
              index: 2,
              stage: "initUploadID"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_addUploadProcessTask",
          value: function (e, t) {
            e = {
              context: e = new iB({
                file: e.file,
                context: this,
                key: t
              }, this.config),
              func: e.start,
              arg: {},
              key: t,
              index: 3,
              stage: "process"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_addStreamUploadTask",
          value: function (e, t) {
            this.streamUploadTask = new i1({
              context: this,
              key: t
            }, this.config);
            var r = {
              context: this.streamUploadTask,
              func: this.streamUploadTask.start,
              arg: {},
              key: t,
              index: 3,
              stage: "process"
            };
            this._addTask(t, r);
          }
        }, {
          key: "_mergeFileTask",
          value: function (e, t) {
            e = {
              context: e = new iH({
                type: e.type,
                file: e.file,
                context: this,
                stage: "fileMerge",
                key: t,
                useServerEncryption: e.useServerEncryption
              }, this.config),
              func: e.start,
              arg: {},
              key: t,
              index: 4,
              stage: "fileMerge"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_getMetaInfoTask",
          value: function (e, t, r = {}) {
            var i = r.isImageBatchUpload;
            var r = r.skipCommit;
            var i = {
              file: e.file,
              context: this,
              data: e.data,
              type: e.type || rx,
              callbackArgs: e.callbackArgs,
              objectSync: e.objectSync,
              needExactFormat: e.needExactFormat,
              key: t,
              isImageBatchUpload: i !== undefined && i,
              skipCommit: r !== undefined && r,
              serviceType: e.serviceType || null,
              IsWriteMedia: e.IsWriteMedia,
              useServerEncryption: e.useServerEncryption
            };
            var r = new nt(i, this.config);
            var e = {
              context: r,
              func: r.start,
              arg: {},
              key: t,
              index: 5,
              stage: "complete"
            };
            this._addTask(t, e);
          }
        }, {
          key: "_addAllUploadProcess",
          value: function (e, t) {
            var r = e.type === rE && Object.prototype.toString.call(e.file) === "[object Array]";
            this.tasks[t] = this.tasks[t] || {};
            this.tasks[t].fileType = e.type || rx;
            this.tasks[t].fileSize = e.file && e.file.size;
            this.tasks[t].proxyStsToken = e.stsToken;
            this.tasks[t].headers = e.headers;
            this.tasks[t].serviceId = e.serviceId;
            this.tasks[t].useGcmEncryptionMode = e.useGcmEncryptionMode;
            this.lastStsToken = e.stsToken;
            this.lastFile = e.file;
            var i = rF.getFileSliceLength(e.file, this.config.getSliceFunc);
            var n = e.file.size <= i || r;
            if (e.useDirectUpload) {
              n = true;
            }
            if (e.gatewayUpload) {
              if (this.tasks[t].fileSize < 5242880) {
                e.gatewayUpload = false;
              } else {
                this.tasks[t].gatewayUpload = !!e.gatewayUpload;
                i = Math.max(5242880, i);
              }
            }
            this._addCrc32ProcessTask(e, t, {
              isDirect: n,
              sliceSize: i,
              isImageBatchUpload: r
            });
            this._addPreUploadTask(e, t, {
              isDirect: n,
              isImageBatchUpload: r
            });
            if (n) {
              this._addDirectUploadTask(e, t, {
                isImageBatchUpload: r
              });
            } else {
              this._addInitUploadIDTask(e, t);
              this._addUploadProcessTask(e, t);
              this._mergeFileTask(e, t);
            }
            var i = !!this.config.skipCommit && ie.checkServiceName(e.type, this.config) === rT;
            this._getMetaInfoTask(e, t, {
              isImageBatchUpload: r,
              skipCommit: i
            });
          }
        }, {
          key: "_addAllUploadProcessClientEncrypt",
          value: function (e) {
            var t;
            var r = this;
            if (e.type === rE && Array.isArray(e.file)) {
              t = [];
              e.file.forEach(function (i) {
                t.push(r._createClientEncryptTask({
                  stsToken: e.stsToken,
                  type: e.type,
                  file: i
                }));
              });
              return t;
            } else {
              return this._createClientEncryptTask(e);
            }
          }
        }, {
          key: "_createClientEncryptTask",
          value: function (e) {
            var t = rF.getUnique("file");
            this.tasks[t] = this.tasks[t] || {};
            this.tasks[t].fileType = e.type || rx;
            this.tasks[t].fileSize = e.file && e.file.size;
            this.tasks[t].proxyStsToken = e.stsToken;
            this.tasks[t].serviceId = e.serviceId;
            this.tasks[t].headers = e.headers;
            this.tasks[t].clientEncryptKey = rF.generateKey(16);
            this._addCrc32ProcessTask(e, t, {
              isDirect: false,
              isImageBatchUpload: false
            });
            this._addPreUploadTask(e, t, {
              isDirect: false,
              isImageBatchUpload: false
            });
            this._addInitUploadIDTask(e, t);
            this._addUploadProcessTask(e, t);
            this._mergeFileTask(e, t);
            var r = !!this.config.skipCommit && ie.checkServiceName(e.type, this.config) === rT;
            this._getMetaInfoTask(e, t, {
              isImageBatchUpload: false,
              skipCommit: r
            });
            return t;
          }
        }, {
          key: "_addAllStreamUploadProcess",
          value: function (e, t) {
            this.tasks[t] = this.tasks[t] || {};
            this.tasks[t].fileType = e.type || rx;
            this.tasks[t].proxyStsToken = e.stsToken;
            this.tasks[t].stream = true;
            this._addPreUploadTask(e, t);
            this._addInitUploadIDTask(e, t);
            this._addStreamUploadTask(e, t);
            this._mergeFileTask(e, t);
            this._getMetaInfoTask(e, t);
          }
        }, {
          key: "_addStreamSlice",
          value: function (e) {
            var t = e.fileSlice;
            this.streamUploadTask.addStreamSlice({
              fileSlice: t,
              index: e.index
            });
          }
        }, {
          key: "_completeStreamUpload",
          value: function () {
            this.streamUploadTask.completeStreamUpload();
          }
        }, {
          key: "_run",
          value: function (e, t) {
            var r = this.tasks;
            var i = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/);
            if (i && i[1] && Number(i[1]) <= 9) {
              this._broadcast("error", nu(r[e], {
                key: e,
                status: 0,
                stage: "browserError",
                extra: {
                  message: "cannot support the browser below ie10"
                },
                type: "error"
              }));
              this.logger.send(r[e]);
              this._cancel(e);
            } else if (r[e]) {
              if (r[e].status === 3) {
                this._restart(e);
              } else {
                r[e].startTime = new Date().getTime();
                if (r[e].task && r[e].status !== 1 && r[e].task.tasks.length) {
                  r[e].status = 1;
                  this.logger.send(nu({}, r[e], {
                    extra: {
                      message: "start upload"
                    },
                    type: "start",
                    key: e
                  }));
                  r[e].task.start(t);
                }
              }
            }
          }
        }, {
          key: "_selectRoute",
          value: function (e, t) {
            new r0({
              stsToken: this.lastStsToken,
              context: this,
              type: rx,
              file: this.lastFile
            }, this.config).start(e, t);
          }
        }, {
          key: "_restart",
          value: function (e) {
            var t;
            var r;
            var i = this;
            var n = this.tasks;
            if (n[e]) {
              t = n[e].task;
              r = n[e].currentTask || 0;
              this.taskList[e].forEach(function (n, o) {
                if (n.index === r) {
                  t.tasks = i.taskList[e].slice(o);
                }
              });
              if (t && n[e].status !== 1 && t.tasks.length) {
                n[e].status = 1;
                t.restart();
              }
            }
          }
        }, {
          key: "_cancel",
          value: function (e) {
            var t = this.tasks;
            if (t[e]) {
              t[e].status = 2;
              t[e].task.cancel();
              delete this.taskList[e];
              delete this.tasks[e];
            }
          }
        }, {
          key: "_pause",
          value: function (e) {
            var t = this.tasks;
            if (t[e]) {
              t[e].status = 3;
              t[e].task.cancel(true);
              if (!t[e].isDirect) {
                this._saveTask(e);
              }
            }
          }
        }, {
          key: "_removeTaskCache",
          value: function (e) {
            var t = this.tasks;
            if (t[e] && (t = t[e].crc32Key)) {
              this._removeCache(t);
            }
          }
        }, {
          key: "_saveTask",
          value: function (e, t) {
            t = (e = nu({}, this.tasks[e], t || {})).crc32Key;
            try {
              if (t) {
                this._setCache(t, this.serializeCacheInfo(e));
              }
            } catch (e) {}
          }
        }, {
          key: "serializeCacheInfo",
          value: function (e) {
            var t = "";
            delete e.task;
            delete e.xhr;
            delete e.crc32Array;
            try {
              t = JSON.stringify(e);
            } catch (i) {
              var r = {};
              Object.keys(e).forEach(function (t) {
                if (t !== "task" && t !== "xhr" && t !== "crc32Array") {
                  r[t] = e[t];
                }
              });
              t = JSON.stringify(r);
            }
            return t;
          }
        }, {
          key: "_queueSuccess",
          value: function (e) {
            var t;
            var r = this.tasks;
            if (r[e]) {
              t = new Date();
              r[e].endTime = t.getTime();
              r[e].time = r[e].endTime - r[e].startTime;
              r[e].status = 0;
              delete this.taskList[e];
              delete r[e];
            }
          }
        }, {
          key: "_removeFile",
          value: function (e) {
            delete this.tasks[e];
          }
        }, {
          key: "_batchAction",
          value: function (e, t) {
            Object.keys(this.tasks).forEach(function (r) {
              if (e) {
                e(r, t);
              }
            });
          }
        }, {
          key: "_refreshSTSToken",
          value: function (e) {
            var t = this;
            var r = this.tasks;
            Object.keys(r).forEach(function (i) {
              var i = r[i];
              var n = nu({}, i, {
                proxyStsToken: e
              });
              i.proxyStsToken = e;
              var o = n.crc32Key;
              if (o) {
                i.proxyStsToken = e;
                t._setCache(o, t.serializeCacheInfo(n));
              }
            });
          }
        }, {
          key: "_setOption",
          value: function (e) {
            this._mergeOptions(this.config, e);
          }
        }, {
          key: "_getOption",
          value: function (e) {
            var t = nu({}, this.config);
            Object.keys(t).forEach(function (e) {
              if (e.indexOf("Url") > -1 || e === "replace" || e === "log") {
                delete t[e];
              }
            });
            if (e) {
              return t[e];
            } else {
              return t;
            }
          }
        }, {
          key: "_userCancel",
          value: function (e) {
            var t = this;
            var r = this.tasks;
            if (e) {
              this._cancel(e);
              this.logger.send(nu({}, r[e], {
                type: "cancel"
              }));
              delete this.tasks[e];
            } else {
              Object.keys(r).forEach(function (e) {
                t._cancel(e);
                t.logger.send(nu({}, r[e], {
                  type: "cancel"
                }));
                delete t.tasks[e];
              });
            }
          }
        }, {
          key: "_userPause",
          value: function (e) {
            var t = this;
            var r = this.tasks;
            if (e) {
              this._pause(e);
              this.logger.send(nu({}, r[e], {
                type: "pause"
              }));
            } else {
              Object.keys(r).forEach(function (e) {
                t._pause(e);
                t.logger.send(nu({}, r[e], {
                  type: "pause"
                }));
              });
            }
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i;
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) {
              n.writable = true;
            }
            Object.defineProperty(e, (i = function (e, t) {
              if (nc(e) != "object" || !e) {
                return e;
              }
              var r = e[Symbol.toPrimitive];
              if (r === undefined) {
                return (t === "string" ? String : Number)(e);
              }
              r = r.call(e, t || "default");
              if (nc(r) != "object") {
                return r;
              }
              throw TypeError("@@toPrimitive must return a primitive value.");
            }(i = n.key, "string"), nc(i) == "symbol" ? i : i + ""), n);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
      function np(e) {
        return (np = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
          return typeof e;
        } : function (e) {
          if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof e;
          }
        })(e);
      }
      function ng(e, t) {
        var r;
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          r = Object.getOwnPropertySymbols(e);
          if (t) {
            r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          }
          i.push.apply(i, r);
        }
        return i;
      }
      function nm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t] ?? {};
          if (t % 2) {
            ng(Object(r), true).forEach(function (t) {
              var i;
              var n;
              i = t;
              n = r[t];
              if ((i = ny(i)) in e) {
                Object.defineProperty(e, i, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[i] = n;
              }
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
          } else {
            ng(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
          }
        }
        return e;
      }
      function ny(e) {
        e = function (e, t) {
          if (np(e) != "object" || !e) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r === undefined) {
            return (t === "string" ? String : Number)(e);
          }
          r = r.call(e, t || "default");
          if (np(r) != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }(e, "string");
        if (np(e) == "symbol") {
          return e;
        } else {
          return e + "";
        }
      }
      function n_() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (n_ = function () {
          return !!e;
        })();
      }
      function nb(e) {
        return (nb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      function nv(e, t) {
        return (nv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
          e.__proto__ = t;
          return e;
        })(e, t);
      }
      var nz = (() => {
        var e;
        function t() {
          var e;
          var r;
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, t);
          e = t;
          r = arguments;
          e = nb(e);
          return function (e, t) {
            if (t && (np(t) == "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return function (e) {
              if (e === undefined) {
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }(e);
          }(this, n_() ? Reflect.construct(e, r || [], nb(this).constructor) : e.apply(this, r));
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(e, "prototype", {
            writable: false
          });
          if (t) {
            nv(e, t);
          }
        })(t, nd);
        e = [{
          key: "start",
          value: function (e) {
            var t = this;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.abort = false;
            if (r.selectRoute) {
              this._selectRoute(r, function (r) {
                r = nm(nm({}, r), {}, {
                  enableSelectRoute: true
                });
                if (e) {
                  t._run(e, r);
                } else {
                  t._batchAction(t._run.bind(t), r);
                }
              });
            } else if (e) {
              this._run(e);
            } else {
              this._batchAction(this._run.bind(this));
            }
          }
        }, {
          key: "addFile",
          value: function (e) {
            var t;
            if (e && ie.checkStsToken(e.stsToken)) {
              if (e.file && this.config.clientEncrypt) {
                return this._addAllUploadProcessClientEncrypt(e);
              } else if (e.file) {
                t = rF.getUnique("file");
                this._addAllUploadProcess(e, t);
                return t;
              } else {
                return null;
              }
            } else {
              this.emit("error", {
                extra: {
                  message: r5,
                  errorCode: 1000002
                }
              });
              return null;
            }
          }
        }, {
          key: "addImageFile",
          value: function (e) {
            var t;
            if (e && ie.checkStsToken(e.stsToken)) {
              if (e.file) {
                e.type = e.type || rE;
                t = rF.getUnique("file");
                this._addAllUploadProcess(e, t);
                return t;
              } else {
                return null;
              }
            } else {
              this.emit("error", {
                extra: {
                  message: r5,
                  errorCode: 1000002
                }
              });
              return null;
            }
          }
        }, {
          key: "addStreamUploadTask",
          value: function (e) {
            var t;
            if (e && ie.checkStsToken(e.stsToken)) {
              t = rF.getUnique("file");
              this._addAllStreamUploadProcess(e, t);
              return t;
            } else {
              this.emit("error", {
                extra: {
                  message: r5,
                  errorCode: 1000002
                }
              });
              return null;
            }
          }
        }, {
          key: "addStreamSlice",
          value: function (e) {
            var t = e.fileSlice;
            this._addStreamSlice({
              fileSlice: t,
              index: e.index
            });
          }
        }, {
          key: "completeStreamUpload",
          value: function () {
            this._completeStreamUpload();
          }
        }, {
          key: "removeFile",
          value: function (e) {
            if (e) {
              this._removeFile(e);
            }
          }
        }, {
          key: "cancel",
          value: function (e) {
            if (e) {
              this._userCancel(e);
            } else {
              this._batchAction(this._userCancel.bind(this));
            }
          }
        }, {
          key: "pause",
          value: function (e) {
            this._userPause(e);
          }
        }, {
          key: "restart",
          value: function (e) {
            if (e) {
              this._restart(e);
            } else {
              this._batchAction(this._restart.bind(this));
            }
          }
        }, {
          key: "refreshSTSToken",
          value: function (e) {
            this._refreshSTSToken(e);
          }
        }, {
          key: "setOption",
          value: function (e) {
            this._setOption(e);
          }
        }, {
          key: "getOption",
          value: function (e) {
            return this._getOption(e);
          }
        }];
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || false;
            i.configurable = true;
            if ("value" in i) {
              i.writable = true;
            }
            Object.defineProperty(e, ny(i.key), i);
          }
        })(t.prototype, e);
        Object.defineProperty(t, "prototype", {
          writable: false
        });
        return t;
      })();
    }]).default;
  };
  module.exports = r();
}