// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 62847.d24ceef0.js
         * chunkId: 62847
         * moduleId: 177216
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  (function (e) {
    "use strict";

    var t;
    let s;
    let r;
    let o;
    function a(e, t, i, n) {
      return new (i ||= Promise)(function (s, r) {
        function o(e) {
          try {
            c(n.next(e));
          } catch (e) {
            r(e);
          }
        }
        function a(e) {
          try {
            c(n.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function c(e) {
          var t;
          if (e.done) {
            s(e.value);
          } else {
            ((t = e.value) instanceof i ? t : new i(function (e) {
              e(t);
            })).then(o, a);
          }
        }
        c((n = n.apply(e, t || [])).next());
      });
    }
    let c = "";
    function l() {
      return Date.now() * 10000 + Math.floor(Math.random() * 10000);
    }
    function h(e) {
      return ("000" + parseInt(e, 2).toString(16)).slice(-4);
    }
    function d(e, t) {
      switch (t) {
        case 0:
          while (b(e) & 128);
          break;
        case 2:
          p(e, C(e));
          break;
        case 5:
          p(e, 4);
          break;
        case 1:
          p(e, 8);
          break;
        default:
          throw Error("Unimplemented type: " + t);
      }
    }
    function u(e) {
      return {
        low: e |= 0,
        high: e >> 31,
        unsigned: e >= 0
      };
    }
    let _ = [];
    function f() {
      let e = _.pop();
      if (e) {
        e.offset = e.limit = 0;
        return e;
      } else {
        return {
          bytes: new Uint8Array(64),
          offset: 0,
          limit: 0
        };
      }
    }
    function p(e, t) {
      if (e.offset + t > e.limit) {
        throw Error("Skip past limit");
      }
      e.offset += t;
    }
    function g(e) {
      return e.offset >= e.limit;
    }
    function v(e, t) {
      let i = e.bytes;
      let n = e.offset;
      let s = e.limit;
      let r = n + t;
      if (r > i.length) {
        let t = new Uint8Array(r * 2);
        t.set(i);
        e.bytes = t;
      }
      e.offset = r;
      if (r > s) {
        e.limit = r;
      }
      return n;
    }
    function m(e, t) {
      let i = e.offset;
      if (i + t > e.limit) {
        throw Error("Read past limit");
      }
      e.offset += t;
      return i;
    }
    function y(e, t) {
      let i = m(e, t);
      let n = String.fromCharCode;
      let s = e.bytes;
      let r = "";
      for (let e = 0; e < t; e++) {
        let o;
        let a;
        let c;
        let l;
        let h = s[e + i];
        if ((h & 128) == 0) {
          r += n(h);
        } else if ((h & 224) == 192) {
          if (e + 1 >= t) {
            r += "�";
          } else if (((o = s[e + i + 1]) & 192) != 128) {
            r += "�";
          } else if ((l = (h & 31) << 6 | o & 63) < 128) {
            r += "�";
          } else {
            r += n(l);
            e++;
          }
        } else if ((h & 240) == 224) {
          if (e + 2 >= t) {
            r += "�";
          } else if ((((o = s[e + i + 1]) | (a = s[e + i + 2]) << 8) & 49344) != 32896) {
            r += "�";
          } else if ((l = (h & 15) << 12 | (o & 63) << 6 | a & 63) < 2048 || l >= 55296 && l <= 57343) {
            r += "�";
          } else {
            r += n(l);
            e += 2;
          }
        } else if ((h & 248) == 240) {
          if (e + 3 >= t) {
            r += "�";
          } else {
            o = s[e + i + 1];
            if (((o | (a = s[e + i + 2]) << 8 | (c = s[e + i + 3]) << 16) & 12632256) != 8421504) {
              r += "�";
            } else if ((l = (h & 7) << 18 | (o & 63) << 12 | (a & 63) << 6 | c & 63) < 65536 || l > 1114111) {
              r += "�";
            } else {
              l -= 65536;
              r += n((l >> 10) + 55296, (l & 1023) + 56320);
              e += 3;
            }
          }
        } else {
          r += "�";
        }
      }
      return r;
    }
    function w(e, t) {
      let i = t.length;
      let n = 0;
      for (let e = 0; e < i; e++) {
        let s = t.charCodeAt(e);
        if (s >= 55296 && s <= 56319 && e + 1 < i) {
          s = (s << 10) + t.charCodeAt(++e) - 56613888;
        }
        n += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
      }
      S(e, n);
      let s = v(e, n);
      let r = e.bytes;
      for (let e = 0; e < i; e++) {
        let n = t.charCodeAt(e);
        if (n >= 55296 && n <= 56319 && e + 1 < i) {
          n = (n << 10) + t.charCodeAt(++e) - 56613888;
        }
        if (n < 128) {
          r[s++] = n;
        } else {
          if (n < 2048) {
            r[s++] = n >> 6 & 31 | 192;
          } else {
            if (n < 65536) {
              r[s++] = n >> 12 & 15 | 224;
            } else {
              r[s++] = n >> 18 & 7 | 240;
              r[s++] = n >> 12 & 63 | 128;
            }
            r[s++] = n >> 6 & 63 | 128;
          }
          r[s++] = n & 63 | 128;
        }
      }
    }
    function b(e) {
      return e.bytes[m(e, 1)];
    }
    function E(e, t) {
      let i = v(e, 1);
      e.bytes[i] = t;
    }
    function C(e) {
      let t;
      let i = 0;
      let n = 0;
      do {
        t = b(e);
        if (i < 32) {
          n |= (t & 127) << i;
        }
        i += 7;
      } while (t & 128);
      return n;
    }
    function S(e, t) {
      for (t >>>= 0; t >= 128;) {
        E(e, t & 127 | 128);
        t >>>= 7;
      }
      E(e, t);
    }
    function T(e, t) {
      let i;
      let n = 0;
      let s = 0;
      let r = 0;
      n = (i = b(e)) & 127;
      if (i & 128) {
        n |= ((i = b(e)) & 127) << 7;
        if (i & 128) {
          n |= ((i = b(e)) & 127) << 14;
          if (i & 128) {
            n |= ((i = b(e)) & 127) << 21;
            if (i & 128) {
              s = (i = b(e)) & 127;
              if (i & 128) {
                s |= ((i = b(e)) & 127) << 7;
                if (i & 128) {
                  s |= ((i = b(e)) & 127) << 14;
                  if (i & 128) {
                    s |= ((i = b(e)) & 127) << 21;
                    if (i & 128) {
                      r = (i = b(e)) & 127;
                      if (i & 128) {
                        r |= ((i = b(e)) & 127) << 7;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return {
        low: n | s << 28,
        high: s >>> 4 | r << 24,
        unsigned: t
      };
    }
    function k(e, t) {
      let i = t.low >>> 0;
      let n = (t.low >>> 28 | t.high << 4) >>> 0;
      let s = t.high >>> 24;
      let r = s === 0 ? n === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : s < 128 ? 9 : 10;
      let o = v(e, r);
      let a = e.bytes;
      switch (r) {
        case 10:
          a[o + 9] = s >>> 7 & 1;
        case 9:
          a[o + 8] = r !== 9 ? s | 128 : s & 127;
        case 8:
          a[o + 7] = r !== 8 ? n >>> 21 | 128 : n >>> 21 & 127;
        case 7:
          a[o + 6] = r !== 7 ? n >>> 14 | 128 : n >>> 14 & 127;
        case 6:
          a[o + 5] = r !== 6 ? n >>> 7 | 128 : n >>> 7 & 127;
        case 5:
          a[o + 4] = r !== 5 ? n | 128 : n & 127;
        case 4:
          a[o + 3] = r !== 4 ? i >>> 21 | 128 : i >>> 21 & 127;
        case 3:
          a[o + 2] = r !== 3 ? i >>> 14 | 128 : i >>> 14 & 127;
        case 2:
          a[o + 1] = r !== 2 ? i >>> 7 | 128 : i >>> 7 & 127;
        case 1:
          a[o] = r !== 1 ? i | 128 : i & 127;
      }
    }
    function O(e) {
      var t;
      return function (e) {
        let t = {};
        e: while (!g(e)) {
          let i = C(e);
          switch (i >>> 3) {
            case 0:
              break e;
            case 1:
              t.SeqID = T(e, true);
              break;
            case 2:
              t.LogID = T(e, true);
              break;
            case 3:
              t.service = C(e);
              break;
            case 4:
              t.method = C(e);
              break;
            case 5:
              {
                let i = function (e) {
                  let t = C(e);
                  let i = e.limit;
                  e.limit = e.offset + t;
                  return i;
                }(e);
                (t.headers ||= []).push(function (e) {
                  let t = {};
                  e: while (!g(e)) {
                    let i = C(e);
                    switch (i >>> 3) {
                      case 0:
                        break e;
                      case 1:
                        t.key = y(e, C(e));
                        break;
                      case 2:
                        t.value = y(e, C(e));
                        break;
                      default:
                        d(e, i & 7);
                    }
                  }
                  if (t.key === undefined) {
                    throw Error("Missing required field: key");
                  }
                  if (t.value === undefined) {
                    throw Error("Missing required field: value");
                  }
                  return t;
                }(e));
                e.limit = i;
                break;
              }
            case 6:
              t.payloadEncoding = y(e, C(e));
              break;
            case 7:
              t.payloadType = y(e, C(e));
              break;
            case 8:
              t.payload = function (e, t) {
                let i = m(e, t);
                return e.bytes.subarray(i, i + t);
              }(e, C(e));
              break;
            case 9:
              t.LogIDNew = y(e, C(e));
              break;
            default:
              d(e, i & 7);
          }
        }
        if (t.SeqID === undefined) {
          throw Error("Missing required field: SeqID");
        }
        if (t.LogID === undefined) {
          throw Error("Missing required field: LogID");
        }
        if (t.service === undefined) {
          throw Error("Missing required field: service");
        }
        if (t.method === undefined) {
          throw Error("Missing required field: method");
        }
        return t;
      }({
        bytes: t = e,
        offset: 0,
        limit: t.length
      });
    }
    function I(e) {
      return function (e) {
        let t = f();
        (function (e, t) {
          let i = e.SeqID;
          if (i !== undefined) {
            S(t, 8);
            k(t, i);
          }
          let n = e.LogID;
          if (n !== undefined) {
            S(t, 16);
            k(t, n);
          }
          let s = e.service;
          if (s !== undefined) {
            S(t, 24);
            k(t, u(s));
          }
          let r = e.method;
          if (r !== undefined) {
            S(t, 32);
            k(t, u(r));
          }
          let o = e.headers;
          if (o !== undefined) {
            for (let e of o) {
              var a;
              S(t, 42);
              let i = f();
              (function (e, t) {
                let i = e.key;
                if (i !== undefined) {
                  S(t, 10);
                  w(t, i);
                }
                let n = e.value;
                if (n !== undefined) {
                  S(t, 18);
                  w(t, n);
                }
              })(e, i);
              S(t, i.limit);
              (function (e, t) {
                let i = v(e, t.limit);
                let n = e.bytes;
                let s = t.bytes;
                for (let e = 0, r = t.limit; e < r; e++) {
                  n[e + i] = s[e];
                }
              })(t, i);
              a = i;
              _.push(a);
            }
          }
          let c = e.payloadEncoding;
          if (c !== undefined) {
            S(t, 50);
            w(t, c);
          }
          let l = e.payloadType;
          if (l !== undefined) {
            S(t, 58);
            w(t, l);
          }
          let h = e.payload;
          if (h !== undefined) {
            S(t, 66);
            S(t, h.length);
            (function (e, t) {
              let i = v(e, t.length);
              e.bytes.set(t, i);
            })(t, h);
          }
          let d = e.LogIDNew;
          if (d !== undefined) {
            S(t, 74);
            w(t, d);
          }
        })(e, t);
        return function (e) {
          let t = e.bytes;
          let i = e.limit;
          if (t.length === i) {
            return t;
          } else {
            return t.subarray(0, i);
          }
        }(t);
      }(e);
    }
    let L = String.prototype.charCodeAt;
    class P {
      constructor(e, t, i) {
        this.isLong = true;
        this.low = e | 0;
        this.high = t | 0;
        this.unsigned = !!i;
      }
      static isLong(e) {
        return e && e.isLong === true;
      }
      static fromBits(e, t, i) {
        return new P(e, t, i);
      }
      static fromBytes(e, t, i) {
        if (i) {
          return P.fromBytesLE(e, t);
        } else {
          return P.fromBytesBE(e, t);
        }
      }
      static fromBytesLE(e, t) {
        return new P(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
      }
      static fromBytesBE(e, t) {
        return new P(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
      }
      static fromHash(e) {
        if (e === "\0\0\0\0\0\0\0\0") {
          return R;
        } else {
          return new P((L.call(e, 0) | L.call(e, 1) << 8 | L.call(e, 2) << 16 | L.call(e, 3) << 24) >>> 0, (L.call(e, 4) | L.call(e, 5) << 8 | L.call(e, 6) << 16 | L.call(e, 7) << 24) >>> 0, true);
        }
      }
      toHash() {
        return String.fromCharCode(this.low & 255, this.low >>> 8 & 255, this.low >>> 16 & 255, this.low >>> 24, this.high & 255, this.high >>> 8 & 255, this.high >>> 16 & 255, this.high >>> 24);
      }
      static fromNumber(e, t = true) {
        if (isNaN(e)) {
          if (t) {
            return D;
          } else {
            return R;
          }
        }
        if (t) {
          if (e >= 18446744073709552000) {
            return N;
          }
        } else {
          if (e <= -9223372036854776000) {
            return x;
          }
          if (e + 1 >= 9223372036854776000) {
            return M;
          }
        }
        return P.fromBits(e % 4294967296 | 0, e / 4294967296 | 0, t);
      }
      toNumber() {
        if (this.unsigned) {
          return (this.high >>> 0) * 4294967296 + (this.low >>> 0);
        } else {
          return this.high * 4294967296 + (this.low >>> 0);
        }
      }
      isZero() {
        return this.high === 0 && this.low === 0;
      }
      add(e) {
        if (!P.isLong(e)) {
          e = P.fromNumber(e);
        }
        let t = this.high >>> 16;
        let i = this.high & 65535;
        let n = this.low >>> 16;
        let s = this.low & 65535;
        let r = e.high >>> 16;
        let o = e.high & 65535;
        let a = e.low >>> 16;
        let c = e.low & 65535;
        let l = 0;
        let h = 0;
        let d;
        let u;
        d = 0 + ((u = 0 + (s + c)) >>> 16);
        u &= 65535;
        d += n + a;
        h += d >>> 16;
        d &= 65535;
        h += i + o;
        l += h >>> 16;
        h &= 65535;
        l += t + r;
        l &= 65535;
        return P.fromBits(d << 16 | u, l << 16 | h, this.unsigned);
      }
      equals(e) {
        if (!P.isLong(e)) {
          e = P.fromNumber(e);
        }
        return (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low;
      }
      addOne() {
        if (this.low === -1 && this.high === -1) {
          return P.fromBits(0, 0, this.unsigned);
        } else if (this.low === -1) {
          return P.fromBits(0, this.high + 1, this.unsigned);
        } else {
          return P.fromBits(this.low + 1, this.high, this.unsigned);
        }
      }
      toBytes(e) {
        if (e) {
          return this.toBytesLE();
        } else {
          return this.toBytesBE();
        }
      }
      toBytesLE() {
        let e = this.high;
        let t = this.low;
        return [t & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, e & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24];
      }
      toBytesBE() {
        let e = this.high;
        let t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, e & 255, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, t & 255];
      }
    }
    let R = new P(0, 0, false);
    let D = new P(0, 0, true);
    let M = P.fromBits(-1, 2147483647, false);
    let N = P.fromBits(-1, -1, true);
    let x = P.fromBits(0, -2147483648, false);
    e.ErrorCode = undefined;
    (t = e.ErrorCode ||= {})[t.NATIVE_ERROR = 5001] = "NATIVE_ERROR";
    t[t.CONNECTING_ERROR = 5002] = "CONNECTING_ERROR";
    t[t.MAX_RETRIES_ERROR = 5003] = "MAX_RETRIES_ERROR";
    t[t.MESSAGE_ERROR = 5004] = "MESSAGE_ERROR";
    t[t.OPEN_ERROR = 5005] = "OPEN_ERROR";
    class B {
      constructor(e) {
        this.type = e;
        this.target = null;
      }
    }
    class A extends B {
      constructor(e, t) {
        super(e);
        this.message = t && t.message || null;
      }
    }
    class q extends B {
      constructor(t, i) {
        super(t);
        this.error = i && i.error || null;
        this.colno = i && i.colno || 0;
        this.filename = i && i.filename || "";
        this.lineno = i && i.lineno || 0;
        this.message = i && i.message || "";
        this.code = i && i.code || e.ErrorCode.NATIVE_ERROR;
      }
    }
    class j extends B {
      constructor(e, t) {
        super(e);
        this.code = t && t.code || 0;
        this.reason = t && t.reason || "";
        this.wasClean = t && t.wasClean || false;
        this.willReconnect = t && t.willReconnect || false;
      }
    }
    class F extends B {
      constructor(e, t) {
        super(e);
        this.data = t && t.data || null;
      }
    }
    class W extends F {
      constructor(e, t) {
        super(e);
        this.data = t && t.data || null;
        this.message = t && t.message || null;
      }
    }
    class $ extends B {
      constructor(e, t) {
        super(e);
        this.data = t && t.data || null;
      }
    }
    function U(e, {
      message: t,
      code: i
    }) {
      return new q(e, {
        message: t,
        code: i
      });
    }
    function G(e, {
      code: t,
      reason: i,
      wasClean: n,
      willReconnect: s
    }) {
      return new j(e, {
        code: t,
        reason: i,
        wasClean: n,
        willReconnect: s
      });
    }
    function H(e, {
      data: t,
      message: i
    }) {
      return new W(e, {
        data: t,
        message: i
      });
    }
    function J(e, {
      data: t
    }) {
      return new $(e, {
        data: t
      });
    }
    function Q(e, {
      message: t
    }) {
      return new A(e, {
        message: t
      });
    }
    class K {
      constructor(e, t) {
        this.endpoints = e;
        this.maxRetries = t;
        this.currentIndex = 0;
        this.currentEndpointTriesCount = 0;
      }
      resetEndpointConfig() {
        this.currentIndex = 0;
        this.currentEndpointTriesCount = 0;
      }
      resetTries() {
        this.currentEndpointTriesCount = 0;
      }
      getCurrentEndpoint() {
        return this.endpoints[this.currentIndex];
      }
      getCurrentEndpointTriesCount() {
        return this.currentEndpointTriesCount;
      }
      checkReachMaxTries() {
        return this.currentIndex >= this.endpoints.length || this.currentIndex === this.endpoints.length - 1 && this.currentEndpointTriesCount === this.maxRetries;
      }
      checkCurrentEndpointReachedMaxRetries() {
        return this.currentIndex == this.endpoints.length || this.currentEndpointTriesCount > this.maxRetries;
      }
      replaceBackupEndpointAndUpdateCount() {
        this.currentEndpointTriesCount = 1;
        this.currentIndex++;
        return this.endpoints[this.currentIndex];
      }
      getCurrentEndpointAndUpdateCount() {
        this.currentEndpointTriesCount++;
        return this.getCurrentEndpoint();
      }
    }
    let X = (typeof globalThis != "undefined" && globalThis.constructor.name === "Window" || typeof window != "undefined" && window.constructor.name === "Window") && typeof document != "undefined";
    let V = typeof globalThis != "undefined" && (globalThis.constructor.name === "Object" || globalThis.constructor.name === "DedicatedWorkerGlobalScope") && typeof tt != "undefined";
    let Z = (typeof globalThis != "undefined" && globalThis.constructor.name === "Object" || typeof globalThis == "undefined" || typeof globalThis != "undefined" && !!globalThis.WeixinJSBridge) && typeof wx != "undefined";
    let z = typeof globalThis != "undefined" && (globalThis.constructor.name === "DedicatedWorkerGlobalScope" || globalThis.constructor.name === "SharedWorkerGlobalScope" || globalThis.constructor.name === "ServiceWorkerGlobalScope") && typeof self != "undefined";
    let Y = typeof globalThis != "undefined" && globalThis.constructor.name === "Object" && require.g.constructor.name === "Object" && processBrowserShim !== undefined && processBrowserShim.version;
    class ee {
      constructor() {
        this._listeners = {};
      }
      emit(e, ...t) {
        let i = this._listeners[e];
        if (i) {
          i.slice().forEach(e => e.fn.apply(e.ctx, t));
        } else if (e === "error" && !this.onerror) {
          let e = t.length && t[0];
          if (e instanceof Error) {
            throw e;
          }
          Error("Unhandled error." + (e ? " (" + e.message + ")" : "")).context = e;
          throw e;
        }
        return this;
      }
      off(e, t) {
        if (e === undefined) {
          this._listeners = {};
        } else if (t === undefined) {
          this._listeners[e] = null;
        } else {
          let i = this._listeners[e];
          if (i) {
            for (let e = 0; e < i.length;) {
              if (i[e].fn === t) {
                i.splice(e, 1);
              } else {
                ++e;
              }
            }
          }
        }
        return this;
      }
      on(e, t, i) {
        (this._listeners[e] ||= []).push({
          fn: t,
          ctx: i || this
        });
        return this;
      }
    }
    class et extends ee {
      constructor(e, t, i) {
        super();
        this._socket = null;
        if (Z && wx.connectSocket) {
          this._socket = wx.connectSocket({
            url: e,
            protocols: t,
            header: i,
            fail: this._createSocketFailHandler.bind(this),
            success: this._createSocketSuccessHandler.bind(this)
          });
        }
        if (V && tt.connectSocket) {
          this._socket = tt.connectSocket({
            url: e,
            protocols: t,
            header: i,
            fail: this._createSocketFailHandler.bind(this),
            success: this._createSocketSuccessHandler.bind(this)
          });
        }
      }
      _createSocketSuccessHandler() {
        Promise.resolve().then(() => {
          this._addWsListeners();
        });
      }
      _createSocketFailHandler(e) {
        Promise.resolve().then(() => {
          let t = U("error", {
            message: e.errMsg || e.errNo ? `message: ${e.errMsg}` || `code: ${e.errNo}` || "" : JSON.stringify(e)
          });
          this.emit("error", t);
          let i = G("close", {
            reason: e.errMsg || e.errNo ? `message: ${e.errMsg}` || `code: ${e.errNo}` || "" : JSON.stringify(e)
          });
          this.emit("close", i);
        });
      }
      _addWsListeners() {
        this._socket.onOpen(e => {
          this.emit("open", J("open", Object.assign(Object.assign({}, e), {
            data: e.errMsg || ""
          })));
        });
        this._socket.onClose(e => {
          this.emit("close", G("close", Object.assign({}, e)));
        });
        this._socket.onMessage(e => {
          this.emit("message", H("message", Object.assign({}, e)));
        });
        this._socket.onError(e => {
          this.emit("error", U("error", Object.assign(Object.assign({}, e), {
            message: e.errMsg || ""
          })));
        });
      }
      send(e) {
        if (e instanceof Uint8Array) {
          let t = e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
          if (this._socket) {
            this._socket.send({
              data: t,
              fail: e => {
                this.emit("error", U("error", {
                  message: e.errMsg || e.errNo ? `message: ${e.errMsg}` || `code: ${e.errNo}` || "" : JSON.stringify(e)
                }));
              }
            });
          }
        } else if (this._socket) {
          this._socket.send({
            data: e,
            fail: e => {
              this.emit("error", U("error", {
                message: e.errMsg || e.errNo ? `message: ${e.errMsg}` || `code: ${e.errNo}` || "" : JSON.stringify(e)
              }));
            }
          });
        }
      }
      close(e, t) {
        if (this._socket) {
          this._socket.close({
            code: e,
            reason: t
          });
        }
      }
      addEventListener(e, t) {
        this.on(e, t);
      }
      removeEventListener(e, t) {
        this.off(e, t);
      }
      get readyState() {
        return this._socket.readyState;
      }
      get binaryType() {
        return this._socket.binaryType;
      }
      set binaryType(e) {}
      get url() {
        return this._socket.url;
      }
      get protocol() {
        return this._socket.protocol;
      }
      get extensions() {
        return this._socket.extensions;
      }
      get bufferedAmount() {
        return 0;
      }
    }
    function ei(e, t, i) {
      return !!(e == null ? undefined : e.find(e => e.key === t && e.value === i));
    }
    function en(e, t) {
      return (e == null ? undefined : e.find(e => e.key === t))?.value;
    }
    function es(e) {
      return a(this, undefined, undefined, function* () {
        let {
          enableAutoAck: t
        } = this._options;
        let i = ei(e.message.headers, "need_ack", "1");
        let n = ei(e.message.headers, "is_ack", "1");
        let s = ei(e.message.headers, "x_frontier_qos_ack", "1");
        if (t && i) {
          let {
            SeqID: t,
            LogID: i,
            service: n,
            LogIDNew: s,
            method: r
          } = e.message;
          this._sendAck({
            SeqID: t,
            LogID: i,
            LogIDNew: s,
            service: n,
            method: r,
            headers: [{
              key: "is_ack",
              value: "1"
            }, {
              key: "ack_id",
              value: s || ""
            }, {
              key: "ack_code",
              value: "0"
            }]
          });
        }
        if (n && !s) {
          this._dispatchAckMessageEvent(e);
        }
      });
    }
    function er(e) {
      return a(this, undefined, undefined, function* () {
        if (typeof e == "string") {
          let t = new Uint8Array(function (e) {
            let t = 0;
            let i = 0;
            for (let n = 0; n < e.length; ++n) {
              if ((i = e.charCodeAt(n)) < 128) {
                t += 1;
              } else if (i < 2048) {
                t += 2;
              } else if ((i & 64512) == 55296 && (e.charCodeAt(n + 1) & 64512) == 56320) {
                ++n;
                t += 4;
              } else {
                t += 3;
              }
            }
            return t;
          }(e));
          (function (e, t, i) {
            let n;
            let s;
            for (let r = 0; r < e.length; ++r) {
              if ((n = e.charCodeAt(r)) < 128) {
                t[i++] = n;
              } else {
                if (n < 2048) {
                  t[i++] = n >> 6 | 192;
                } else {
                  if ((n & 64512) == 55296 && ((s = e.charCodeAt(r + 1)) & 64512) == 56320) {
                    n = 65536 + ((n & 1023) << 10) + (s & 1023);
                    ++r;
                    t[i++] = n >> 18 | 240;
                    t[i++] = n >> 12 & 63 | 128;
                  } else {
                    t[i++] = n >> 12 | 224;
                  }
                  t[i++] = n >> 6 & 63 | 128;
                }
                t[i++] = n & 63 | 128;
              }
            }
          })(e, t, 0);
          return t;
        }
        if (e instanceof ArrayBuffer) {
          return new Uint8Array(e);
        } else {
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
      });
    }
    function eo(e) {
      return a(this, undefined, undefined, function* () {
        let t = O(yield er(e.data));
        try {
          if (t.payload instanceof Uint8Array) {
            let e = this._options.payloadEncoding instanceof Object ? {
              force: !!this._options.payloadEncoding.force,
              encoding: this._options.payloadEncoding.encoding ? this._options.payloadEncoding.encoding.replace(/\s/g, "").toLowerCase() : ""
            } : {
              force: false,
              encoding: this._options.payloadEncoding ? this._options.payloadEncoding.replace(/\s/g, "").toLowerCase() : ""
            };
            let i = t.payloadEncoding ? t.payloadEncoding.replace(/\s/g, "").toLowerCase() : "";
            let n = this._options.payloadType instanceof Object ? {
              force: !!this._options.payloadType.force,
              type: this._options.payloadType.type ? this._options.payloadType.type.replace(/\s/g, "").toLowerCase() : ""
            } : {
              force: false,
              type: this._options.payloadType ? this._options.payloadType.replace(/\s/g, "").toLowerCase() : ""
            };
            let s = t.payloadType ? t.payloadType.replace(/\s/g, "").toLowerCase() : "";
            let r = n.force ? n.type : s || n.type;
            let o = e.force ? e.encoding : i || e.encoding;
            if (this._options.enableTransformTextPayload && ["text/plain;charset=utf-8", "application/json", "application/json;charset=utf-8", "string"].includes(r) && (!o || ["none_none", "binary"].includes(o))) {
              t.textPayload = function (e, t, i) {
                if (i - 0 < 1) {
                  return "";
                }
                let n = "";
                for (let t = 0; t < i;) {
                  let i = e[t++];
                  if (i <= 127) {
                    n += String.fromCharCode(i);
                  } else if (i >= 192 && i < 224) {
                    n += String.fromCharCode((i & 31) << 6 | e[t++] & 63);
                  } else if (i >= 224 && i < 240) {
                    n += String.fromCharCode((i & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63);
                  } else if (i >= 240) {
                    let s = ((i & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536;
                    n += String.fromCharCode(55296 + (s >> 10));
                    n += String.fromCharCode(56320 + (s & 1023));
                  }
                }
                return n;
              }(t.payload, 0, t.payload.byteLength);
            } else {
              t.textPayload = "";
            }
          } else {
            t.textPayload = "";
          }
        } catch (e) {
          t.textPayload = "";
        }
        e.message = t;
      });
    }
    function ea(e, t, i) {
      let n = -1;
      return function t(s) {
        if (++n < i.length) {
          return i[n].bind(e)(s).then(() => t(s));
        } else {
          return Promise.resolve();
        }
      }(t);
    }
    let ec = (e, t) => t.some(t => e instanceof t);
    let el = new WeakMap();
    let eh = new WeakMap();
    let ed = new WeakMap();
    let eu = new WeakMap();
    let e_ = new WeakMap();
    let ef = {
      get(e, t, i) {
        if (e instanceof IDBTransaction) {
          if (t === "done") {
            return eh.get(e);
          }
          if (t === "objectStoreNames") {
            return e.objectStoreNames || ed.get(e);
          }
          if (t === "store") {
            if (i.objectStoreNames[1]) {
              return undefined;
            } else {
              return i.objectStore(i.objectStoreNames[0]);
            }
          }
        }
        return ep(e[t]);
      },
      set: (e, t, i) => {
        e[t] = i;
        return true;
      },
      has: (e, t) => e instanceof IDBTransaction && (t === "done" || t === "store") || t in e
    };
    function ep(e) {
      if (e instanceof IDBRequest) {
        return function (e) {
          let t = new Promise((t, i) => {
            let n = () => {
              e.removeEventListener("success", s);
              e.removeEventListener("error", r);
            };
            let s = () => {
              t(ep(e.result));
              n();
            };
            let r = () => {
              i(e.error);
              n();
            };
            e.addEventListener("success", s);
            e.addEventListener("error", r);
          });
          t.then(t => {
            if (t instanceof IDBCursor) {
              el.set(t, e);
            }
          }).catch(() => {});
          e_.set(t, e);
          return t;
        }(e);
      }
      if (eu.has(e)) {
        return eu.get(e);
      }
      let t = function (e) {
        if (typeof e == "function") {
          if (e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype) {
            if ((r ||= [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey]).includes(e)) {
              return function (...t) {
                e.apply(eg(this), t);
                return ep(el.get(this));
              };
            } else {
              return function (...t) {
                return ep(e.apply(eg(this), t));
              };
            }
          } else {
            return function (t, ...i) {
              let n = e.call(eg(this), t, ...i);
              ed.set(n, t.sort ? t.sort() : [t]);
              return ep(n);
            };
          }
        }
        if (e instanceof IDBTransaction) {
          (function (e) {
            if (eh.has(e)) {
              return;
            }
            let t = new Promise((t, i) => {
              let n = () => {
                e.removeEventListener("complete", s);
                e.removeEventListener("error", r);
                e.removeEventListener("abort", r);
              };
              let s = () => {
                t();
                n();
              };
              let r = () => {
                i(e.error || new DOMException("AbortError", "AbortError"));
                n();
              };
              e.addEventListener("complete", s);
              e.addEventListener("error", r);
              e.addEventListener("abort", r);
            });
            eh.set(e, t);
          })(e);
        }
        if (ec(e, s ||= [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) {
          return new Proxy(e, ef);
        } else {
          return e;
        }
      }(e);
      if (t !== e) {
        eu.set(e, t);
        e_.set(t, e);
      }
      return t;
    }
    let eg = e => e_.get(e);
    let ev = ["get", "getKey", "getAll", "getAllKeys", "count"];
    let em = ["put", "add", "delete", "clear"];
    let ey = new Map();
    function ew(e, t) {
      if (!(e instanceof IDBDatabase) || !!(t in e) || typeof t != "string") {
        return;
      }
      if (ey.get(t)) {
        return ey.get(t);
      }
      let i = t.replace(/FromIndex$/, "");
      let n = t !== i;
      let s = em.includes(i);
      if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !s && !ev.includes(i)) {
        return;
      }
      let r = async function (e, ...t) {
        let r = this.transaction(e, s ? "readwrite" : "readonly");
        let o = r.store;
        if (n) {
          o = o.index(t.shift());
        }
        return (await Promise.all([o[i](...t), s && r.done]))[0];
      };
      ey.set(t, r);
      return r;
    }
    ef = {
      ...(o = ef),
      get: (e, t, i) => ew(e, t) || o.get(e, t, i),
      has: (e, t) => !!ew(e, t) || o.has(e, t)
    };
    class eb extends ee {
      constructor() {
        super();
        this._qosDB = undefined;
        this._intervalTimeoutId = null;
        this._interval = 3600000;
        this._init();
      }
      openDB() {
        return a(this, undefined, undefined, function* () {
          yield this._init();
        });
      }
      _init() {
        return a(this, undefined, undefined, function* () {
          return new Promise(e => {
            if (this._qosDB) {
              e(this);
            } else {
              (function (e, t, {
                blocked: i,
                upgrade: n,
                blocking: s,
                terminated: r
              } = {}) {
                let o = indexedDB.open(e, 1);
                let a = ep(o);
                if (n) {
                  o.addEventListener("upgradeneeded", e => {
                    n(ep(o.result), e.oldVersion, e.newVersion, ep(o.transaction));
                  });
                }
                if (i) {
                  o.addEventListener("blocked", () => i());
                }
                a.then(e => {
                  if (r) {
                    e.addEventListener("close", () => r());
                  }
                  if (s) {
                    e.addEventListener("versionchange", () => s());
                  }
                }).catch(() => {});
                return a;
              })("frontier", 0, {
                upgrade(e, t, i, n) {
                  e.createObjectStore("qos", {
                    keyPath: "message_id"
                  });
                }
              }).then(e => {
                this._qosDB = e;
                this._intervalFlush();
                this.emit("ready");
              });
              this.on("ready", () => {
                e(this);
                this.off();
              });
            }
          });
        });
      }
      _intervalFlush() {
        return a(this, undefined, undefined, function* () {
          clearInterval(this._intervalTimeoutId);
          this._intervalTimeoutId = setInterval(() => {
            this.flushExpired();
          }, this._interval);
        });
      }
      get(e) {
        var t;
        return a(this, undefined, undefined, function* () {
          return yield (t = this._qosDB) === null || t === undefined ? undefined : t.get("qos", e);
        });
      }
      set(e, t) {
        var i;
        return a(this, undefined, undefined, function* () {
          return yield (i = this._qosDB) === null || i === undefined ? undefined : i.put("qos", {
            message_id: e,
            timestamp: t
          });
        });
      }
      del(e) {
        var t;
        return a(this, undefined, undefined, function* () {
          return yield (t = this._qosDB) === null || t === undefined ? undefined : t.delete("qos", e);
        });
      }
      clear() {
        var e;
        return a(this, undefined, undefined, function* () {
          return yield (e = this._qosDB) === null || e === undefined ? undefined : e.clear("qos");
        });
      }
      keys() {
        var e;
        return a(this, undefined, undefined, function* () {
          return yield (e = this._qosDB) === null || e === undefined ? undefined : e.getAllKeys("qos");
        });
      }
      getAll() {
        var e;
        return a(this, undefined, undefined, function* () {
          return yield (e = this._qosDB) === null || e === undefined ? undefined : e.getAll("qos");
        });
      }
      flushExpired() {
        var e;
        return a(this, undefined, undefined, function* () {
          ((yield (e = this._qosDB) === null || e === undefined ? undefined : e.getAll("qos")) || []).filter(({
            timestamp: e
          }) => e < Date.now()).forEach(e => {
            var t;
            if ((t = this._qosDB) !== null && t !== undefined) {
              t.delete("qos", e.message_id);
            }
          });
        });
      }
      closeDB() {
        var e;
        return a(this, undefined, undefined, function* () {
          clearInterval(this._intervalTimeoutId);
          if ((e = this._qosDB) !== null && e !== undefined) {
            e.close();
          }
          this._qosDB = undefined;
        });
      }
      get isReady() {
        return this._qosDB;
      }
    }
    class eE {
      constructor() {
        this._qosDB = localStorage;
        this._intervalTimeoutId = null;
        this._interval = 3600000;
        this._intervalFlush();
      }
      openDB() {
        return a(this, undefined, undefined, function* () {
          if (!this._intervalTimeoutId) {
            this._intervalFlush();
            return this;
          }
        });
      }
      _intervalFlush() {
        return a(this, undefined, undefined, function* () {
          clearInterval(this._intervalTimeoutId);
          this._intervalTimeoutId = setInterval(() => {
            this.flushExpired();
          }, this._interval);
        });
      }
      _add_prefix(e) {
        return `${this._prefix}${e}`;
      }
      get _prefix() {
        return "frontier_qos_msg_id_";
      }
      get(e) {
        return a(this, undefined, undefined, function* () {
          return JSON.parse(this._qosDB.getItem(this._add_prefix(e)) || "{}");
        });
      }
      set(e, t) {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.setItem(this._add_prefix(e), JSON.stringify({
            message_id: e,
            timestamp: t
          }));
        });
      }
      del(e) {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.removeItem(this._add_prefix(e));
        });
      }
      clear() {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.clear();
        });
      }
      keys() {
        return a(this, undefined, undefined, function* () {
          let e = [];
          for (let t = 0; t < this._qosDB.length; t++) {
            e.push(this._qosDB.key(t));
          }
          return e.filter(e => e == null ? undefined : e.startsWith(this._prefix));
        });
      }
      getAll() {
        return a(this, undefined, undefined, function* () {
          let e = [];
          let t = yield this.keys();
          for (let i in t) {
            let t = this._qosDB.getItem(i);
            e.push(JSON.parse(t || "{}"));
          }
          return e;
        });
      }
      flushExpired() {
        return a(this, undefined, undefined, function* () {
          ((yield this.getAll()) || []).filter(({
            timestamp: e
          }) => e < Date.now()).forEach(e => {
            this.del(e.message_id);
          });
        });
      }
      closeDB() {
        clearInterval(this._intervalTimeoutId);
      }
      get isReady() {
        return this._qosDB;
      }
    }
    class eC {
      constructor() {
        this._qosDB = V ? tt : Z ? wx : null;
        this._intervalTimeoutId = null;
        this._interval = 3600000;
        this._intervalFlush();
      }
      openDB() {
        return a(this, undefined, undefined, function* () {
          if (!this._intervalTimeoutId) {
            this._intervalFlush();
            return this;
          }
        });
      }
      _intervalFlush() {
        return a(this, undefined, undefined, function* () {
          clearInterval(this._intervalTimeoutId);
          this._intervalTimeoutId = setInterval(() => {
            this.flushExpired();
          }, this._interval);
        });
      }
      _add_prefix(e) {
        return `${this._prefix}${e}`;
      }
      get _prefix() {
        return "frontier_qos_msg_id_";
      }
      get(e) {
        return a(this, undefined, undefined, function* () {
          return JSON.parse(this._qosDB.getStorageSync(this._add_prefix(e)) || "{}");
        });
      }
      set(e, t) {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.setStorageSync(this._add_prefix(e), JSON.stringify({
            message_id: e,
            timestamp: t
          }));
        });
      }
      del(e) {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.removeStorageSync(this._add_prefix(e));
        });
      }
      clear() {
        return a(this, undefined, undefined, function* () {
          return this._qosDB.clearStorageSync();
        });
      }
      keys() {
        return a(this, undefined, undefined, function* () {
          let {
            keys: e
          } = this._qosDB.getStorageInfoSync();
          return e.filter(e => e == null ? undefined : e.startsWith(this._prefix));
        });
      }
      getAll() {
        return a(this, undefined, undefined, function* () {
          let e = [];
          for (let t of yield this.keys()) {
            let i = yield this.get(t);
            e.push(i);
          }
          return e;
        });
      }
      flushExpired() {
        return a(this, undefined, undefined, function* () {
          ((yield this.getAll()) || []).filter(({
            timestamp: e
          }) => e < Date.now()).forEach(e => {
            this.del(e.message_id);
          });
        });
      }
      closeDB() {
        clearInterval(this._intervalTimeoutId);
      }
      get isReady() {
        return this._qosDB;
      }
    }
    function eS() {
      if (V || V) {
        return new eC();
      } else if (X || z) {
        return new eb();
      } else if (X || z) {
        return new eE();
      } else {
        return null;
      }
    }
    function eT(e) {
      var t;
      var i;
      var n;
      var s;
      return a(this, undefined, undefined, function* () {
        let r = ei(e.message.headers, "code", "-1");
        let o = ei(e.message.headers, "is_ack", "1");
        let a = en(e.message.headers, "x_frontier_msgid");
        let c = Number(en(e.message.headers, "x_frontier_ttl")) || 0;
        let l = ei(e.message.headers, "x_frontier_qos", "2");
        if (!ei(e.message.headers, "x_frontier_qos_ack", "1") || !l) {
          if (l && !this._qosDB) {
            this._qosDB = eS();
            if (this._qosDB) {
              yield this._qosDB.openDB();
            }
          }
          if (l && !this._qosDB.isReady) {
            yield this._qosDB.openDB();
          }
          if (e.message.service > 0 && o && !r) {
            if (a && l) {
              if (!(yield (t = this._qosDB) === null || t === undefined ? undefined : t.get(a))) {
                this._dispatchMessageEvent(e);
                yield (i = this._qosDB) === null || i === undefined ? undefined : i.set(a, Date.now() + c);
              }
            } else {
              this._dispatchMessageEvent(e);
            }
            return;
          }
          if (e.message.service > 0) {
            if (a && l) {
              if (!(yield (n = this._qosDB) === null || n === undefined ? undefined : n.get(a))) {
                this._dispatchMessageEvent(e);
                yield (s = this._qosDB) === null || s === undefined ? undefined : s.set(a, Date.now() + c);
              }
            } else {
              this._dispatchMessageEvent(e);
            }
            return;
          }
        }
      });
    }
    function ek(e) {
      return a(this, undefined, undefined, function* () {
        this._uptimeTimeoutId = setTimeout((() => eO.bind(this)(e)).bind(this), this._options.uptimeInterval);
      });
    }
    function eO(e) {
      var t;
      var i;
      return a(this, undefined, undefined, function* () {
        if (!this._ws || this._ws.readyState !== this.OPEN) {
          return;
        }
        let {
          pingInterval: n
        } = this._options;
        if ((t = this._endpointManager) !== null && t !== undefined) {
          t.resetEndpointConfig();
        }
        for (let e = 0; e < this._messageQueue.length; e++) {
          let t = this._messageQueue[e];
          if (this._ws.readyState === this.OPEN && t !== null) {
            if (this._ws) {
              this._ws.send(t);
            }
            this._messageQueue[e] = null;
          } else {
            break;
          }
        }
        this._messageQueue = this._messageQueue.filter(e => !!e);
        this._pingPongTimeoutId = setTimeout(() => this._ping(), n);
        this._dispatchOpenEvent(e);
        if (this._isBrowser && this._ws) {
          this._ws.binaryType = this._binaryType;
        }
        let s = (i = this._endpointManager) === null || i === undefined ? undefined : i.getCurrentEndpoint();
        this._debug(`open ${s} success`);
      });
    }
    function eI() {
      return a(this, undefined, undefined, function* () {
        this._isInit = false;
        clearTimeout(this._connectionTimeoutId);
      });
    }
    function eL(e) {
      var t;
      var i;
      return a(this, undefined, undefined, function* () {
        let n = ei(e.message.headers, "x_frontier_qos", "2");
        let s = ei(e.message.headers, "x_frontier_is_ack", "1");
        let r = (t = en(e.message.headers, "x_frontier_ack_msgid")) === null || t === undefined ? undefined : t.split(",");
        if (n && !this._qosDB) {
          this._qosDB = eS();
          if (this._qosDB) {
            yield this._qosDB.openDB();
          }
        }
        if (n && !this._qosDB.isReady) {
          yield this._qosDB.openDB();
        }
        if (n && s && r && r.length) {
          for (let e of r) {
            yield (i = this._qosDB) === null || i === undefined ? undefined : i.del(e);
          }
        }
      });
    }
    let eP = (e, t) => {
      switch (e) {
        case "boe":
        case "ppe":
          return {
            [`x-use-${e}`]: 1,
            "x-tt-env": t
          };
        default:
          return {};
      }
    };
    class eR {
      constructor(e) {
        this.maxLossCount = e;
        this.count = 0;
      }
      addCount() {
        this.count++;
      }
      checkReachMaxCount() {
        return this.count >= this.maxLossCount;
      }
      resetCounter(e = 0) {
        this.maxLossCount = e;
        this.count = 0;
      }
    }
    e.CustomCloseEvent = j;
    e.CustomErrorEvent = q;
    e.Event = B;
    e.FWS = class extends ee {
      constructor(t) {
        super();
        this._miniNavigatorOnline = true;
        this._isBrowser = X;
        this._isNode = Y;
        this._isMiniTT = V;
        this._isMiniWX = Z;
        this._isWorker = z;
        this._messageQueue = [];
        this._endpointManager = null;
        this._readyClosed = false;
        this._binaryType = "arraybuffer";
        this._connectLock = false;
        this._connectionTimeoutId = null;
        this._uptimeTimeoutId = null;
        this._reconnectTimeoutId = null;
        this._pingPongTimeoutId = null;
        this._seqId = 0;
        this._isInit = false;
        this._url = "";
        this._qosDB = null;
        this._pingLossCounter = null;
        this._protocols = "pbbp2";
        this.CLOSED = 3;
        this.CONNECTING = 0;
        this.OPEN = 1;
        this.CLOSING = 2;
        this._onOpen = t => {
          ea(this, t, [eI, ek]).then(() => {
            var e;
            let t = (e = this._endpointManager) === null || e === undefined ? undefined : e.getCurrentEndpoint();
            this._debug(`open ${t}`);
          }).catch(t => {
            let i = U("error", {
              message: t.message,
              code: e.ErrorCode.OPEN_ERROR
            });
            this._dispatchErrorEvent(i);
          });
        };
        this._onMessage = t => a(this, undefined, undefined, function* () {
          let {
            pingInterval: i,
            pingFrequency: n
          } = this._options;
          if (t.data === "hi" && n === "always" || n === "auto") {
            this._clearPingTimer();
            this.emit("ping_once_success", "success");
            this._pingPongTimeoutId = setTimeout(() => this._ping(), i);
          }
          if (t.data !== "hi") {
            ea(this, t, [eo, es, eL, eT]).then(() => {
              this._debug("received", t.message);
            }).catch(t => {
              let i = U("error", {
                message: t.message,
                code: e.ErrorCode.MESSAGE_ERROR
              });
              this._dispatchErrorEvent(i);
            });
          }
        });
        this._onError = t => {
          var i;
          var n;
          let s = (i = this._endpointManager) === null || i === undefined ? undefined : i.checkReachMaxTries();
          let r = (n = this._endpointManager) === null || n === undefined ? undefined : n.getCurrentEndpoint();
          if (s && !t.message) {
            let t = `connect ${r} fail, max retries reached`;
            this._dispatchErrorEvent(U("error", {
              message: t,
              code: e.ErrorCode.MAX_RETRIES_ERROR
            }));
            return;
          }
          if (this._ws && this._ws.readyState === this.OPEN) {
            this._disconnect();
          }
          this._dispatchErrorEvent(U("error", {
            message: t.message,
            code: e.ErrorCode.NATIVE_ERROR
          }));
        };
        this._onClose = t => a(this, undefined, undefined, function* () {
          var i;
          var n;
          var s;
          var r;
          var o;
          var c;
          var l;
          var h;
          var d;
          var u;
          var _;
          var f;
          this._clearTimer();
          this._clearPingTimer();
          this._removeWsListeners();
          this._ws = null;
          this._connectLock = false;
          let p = (i = this._endpointManager) === null || i === undefined ? undefined : i.checkReachMaxTries();
          if (!p && this._navigatorOnline() && !this._readyClosed) {
            let e = (n = this._endpointManager) === null || n === undefined ? undefined : n.getCurrentEndpoint();
            let i = this._options.reconnectInterceptor(t.code, t.reason);
            this._dispatchCloseEvent(G("close", {
              code: 1006,
              reason: t.reason || `connecting failed, unknown reason, hostname: ${e}`,
              willReconnect: i
            }));
            if (i) {
              this._connect();
            }
            return;
          }
          if (t.code !== 1000 && this._readyClosed) {
            this._dispatchCloseEvent(G("close", {
              code: 1000,
              reason: "bye"
            }));
            if ((s = this._endpointManager) !== null && s !== undefined) {
              s.resetEndpointConfig();
            }
            if ((r = this._pingLossCounter) !== null && r !== undefined) {
              r.resetCounter();
            }
            return;
          }
          if (t.code !== 1000 && p) {
            let i = (o = this._endpointManager) === null || o === undefined ? undefined : o.getCurrentEndpoint();
            let n = t.reason;
            n ||= yield function (e) {
              return a(this, undefined, undefined, function* () {
                return new Promise(t => {
                  if (!X) {
                    return t("unknown reason");
                  }
                  try {
                    let i = document.createElement("script");
                    window.frontierJSONP = e => {
                      document.body.removeChild(i);
                      window.frontierJSONP = undefined;
                      t(e && e.msg || "unknown reason");
                    };
                    i.type = "text/javascript";
                    i.src = e.replace(/^ws/, "http") + "&jscallback=frontierJSONP";
                    try {
                      document.body.appendChild(i);
                    } catch (e) {
                      document.body.removeChild(i);
                    }
                  } catch (e) {
                    window.frontierJSONP = undefined;
                    t("unknown reason");
                  }
                });
              });
            }(this._url);
            n = `connecting failed, ${n}, hostname: ${i}, max retries reached`;
            this._dispatchCloseEvent(G("close", {
              code: t.code,
              reason: n
            }));
            let s = `connect ${i} fail, max retries reached`;
            this._dispatchErrorEvent(U("error", {
              message: s,
              code: e.ErrorCode.MAX_RETRIES_ERROR
            }));
            if ((c = this._endpointManager) !== null && c !== undefined) {
              c.resetEndpointConfig();
            }
            if ((l = this._pingLossCounter) !== null && l !== undefined) {
              l.resetCounter();
            }
            return;
          }
          if (t.code !== 1000 && !t.reason) {
            let e = (h = this._endpointManager) === null || h === undefined ? undefined : h.getCurrentEndpoint();
            this._dispatchCloseEvent(G("close", {
              code: t.code,
              reason: `connecting failed, unknown reason, hostname: ${e}`
            }));
            if ((d = this._endpointManager) !== null && d !== undefined) {
              d.resetEndpointConfig();
            }
            if ((u = this._pingLossCounter) !== null && u !== undefined) {
              u.resetCounter();
            }
            return;
          }
          this._dispatchCloseEvent(t);
          if ((_ = this._endpointManager) !== null && _ !== undefined) {
            _.resetEndpointConfig();
          }
          if ((f = this._pingLossCounter) !== null && f !== undefined) {
            f.resetCounter();
          }
        });
        this.onclose = null;
        this.onerror = null;
        this.onmessage = null;
        this.onopen = null;
        this.onStartReconnect = null;
        this.onReceiveAck = null;
        this.onStopImmediatelyReconnect = null;
        this._options = {
          url: "",
          automaticOpen: true,
          initReconnectInterval: 1000,
          maxReconnectInterval: 10000,
          reconnectIntervalGrowFactor: 2,
          timeoutInterval: 5000,
          uptimeInterval: 1000,
          maxRetries: 5,
          debug: false,
          maxMessageQueueLength: Infinity,
          service: 0,
          logIDGenerator: l,
          headers: undefined,
          payloadEncoding: "",
          payloadType: "",
          fpID: "",
          deviceID: "",
          accessKey: "",
          ttwID: "",
          bddID: "",
          aID: "",
          disableAutoReconnect: false,
          customParams: {},
          pingInterval: 15000,
          pingTimeoutInterval: 4000,
          pingFrequency: "auto",
          pingLossCount: 2,
          enableTransformTextPayload: false,
          logIDNewConfig: {
            enableAutoGenerateLogIDNew: false,
            userIp: ""
          },
          miniProgramParams: {
            customHttpHeader: {}
          },
          enableAutoAck: false,
          reconnectInterceptor: () => true,
          enableQoS: false,
          env: {
            xTTEnv: "",
            xUseEnv: ""
          },
          listenNetworkChanged: true
        };
        let {
          url: i,
          ws: n
        } = t;
        let s = Array.isArray(i) ? i : typeof i == "string" ? [i] : [];
        if (!s || s.length === 0) {
          throw Error("please provide valid url");
        }
        if (!n && (!Z || !wx.connectSocket) && (!V || !tt.connectSocket) && (!X && !z || typeof WebSocket == "undefined" || !WebSocket)) {
          throw Error("please provide ws params, WebSocket constructor is undefined");
        }
        Object.assign(this._options, t);
        this._endpointManager = new K(s, this._options.maxRetries);
        this._pingLossCounter = new eR(this._options.pingLossCount);
        if (this._options.automaticOpen) {
          this._isInit = true;
          this._connect();
        }
        if (this._options.listenNetworkChanged) {
          if (this._isMiniTT || this._isMiniWX) {
            this._onPageNetWorkChange();
          } else if (this._isBrowser) {
            this._initGlobalEventListener();
          }
        }
      }
      _handleOnLine() {
        if (!this._options.disableAutoReconnect && !this._readyClosed) {
          this._handleReconnect();
        }
      }
      _handleOffLine() {
        this._destroyWebSocket();
        let e = Q("reconnect", {
          message: "stop immediately reconnect"
        });
        if (this.onStopImmediatelyReconnect) {
          this.onStopImmediatelyReconnect(e);
        }
      }
      _initGlobalEventListener() {
        if (this._isBrowser) {
          window.addEventListener("online", this._handleOnLine.bind(this));
        }
        if (this._isBrowser) {
          window.addEventListener("offline", this._handleOffLine.bind(this));
        }
        if (this._isBrowser) {
          window.addEventListener("pagehide", this._handlePageHide.bind(this));
        }
        if (this._isBrowser) {
          window.addEventListener("pageshow", this._handlePageShow.bind(this));
        }
      }
      _dropGlobalEventListener() {
        if (this._isBrowser) {
          window.removeEventListener("online", this._handleOnLine);
        }
        if (this._isBrowser) {
          window.removeEventListener("offline", this._handleOffLine);
        }
        if (this._isBrowser) {
          window.removeEventListener("pagehide", this._handlePageHide);
        }
        if (this._isBrowser) {
          window.removeEventListener("pageshow", this._handlePageShow);
        }
      }
      _handlePageHide(e) {
        if (!e.persisted) {
          if (this._isBrowser) {
            window.removeEventListener("pagehide", this._handlePageHide);
          }
          if (this._isBrowser) {
            window.removeEventListener("pageshow", this._handlePageShow);
          }
          this.close();
        }
        if (this._isBrowser) {
          window.removeEventListener("online", this._handleOnLine);
        }
        if (this._isBrowser) {
          window.removeEventListener("offline", this._handleOffLine);
        }
      }
      _handlePageShow(e) {
        if (e.persisted) {
          if (this._navigatorOnline() && (!this._ws || this._ws.readyState !== this.OPEN || this._ws.readyState !== this.CONNECTING)) {
            this._handleOnLine();
          }
          if (this._isBrowser) {
            window.addEventListener("online", this._handleOnLine.bind(this));
          }
          if (this._isBrowser) {
            window.addEventListener("offline", this._handleOffLine.bind(this));
          }
        }
      }
      _generateUrl(e) {
        return a(this, undefined, undefined, function* () {
          let t;
          let i;
          let n;
          let {
            fpID: s,
            deviceID: r,
            bddID: o,
            ttwID: a,
            accessKey: c,
            aID: l,
            customParams: h = {},
            enableAutoAck: d,
            enableQoS: u,
            env: _
          } = this._options;
          if (this._isBrowser || this._isMiniWX || this._isMiniTT) {
            t = location && location.protocol == "https:" ? "wss://" : "ws://";
            i = e.replace(/((^ws)|(^http))((?:[s]*:\/\/))/, "");
            n = /^wss(.*:\/\/)/.test(e) ? e : `${t}${i}`;
          } else {
            t = "wss://";
            i = e.replace(/(^http)((?:[s]*:\/\/))/, "");
            n = /(^ws)((?:[s]*:\/\/))/.test(i) ? i : `${t}${i}`;
          }
          let f = o ? "bd_did" : a ? "ttwid" : "device_id";
          let p = o || a || r;
          if (!p || !f) {
            throw Error("please provide bddID, deviceID or ttwID");
          }
          let g = typeof h == "function" ? yield h() : h;
          let v = Object.assign(Object.assign({
            device_platform: "web",
            version_code: "fws_1.0.0",
            access_key: c,
            fpid: s,
            aid: l,
            [f]: p,
            xsack: +!!d,
            xaack: +!!d,
            xsqos: +!!u
          }, _ ? eP(_.xUseEnv, _.xTTEnv) : {}), g);
          let m = Object.keys(v).reduce((e, t) => `${e}${e ? "&" : "?"}${t}=${v[t]}`, "");
          return `${n}/ws/v2${m}`;
        });
      }
      _connect() {
        var t;
        var i;
        var n;
        var s;
        var r;
        var o;
        var c;
        return a(this, undefined, undefined, function* () {
          if (!this._connectLock && !this._readyClosed) {
            this._connectLock = true;
            try {
              var a;
              var l;
              let h = (t = this._endpointManager) === null || t === undefined ? undefined : t.checkCurrentEndpointReachedMaxRetries();
              let {
                timeoutInterval: d
              } = this._options;
              if (h) {
                let t = (i = this._endpointManager) === null || i === undefined ? undefined : i.getCurrentEndpoint();
                let r = (n = this._endpointManager) === null || n === undefined ? undefined : n.replaceBackupEndpointAndUpdateCount();
                let o = (s = this._endpointManager) === null || s === undefined ? undefined : s.getCurrentEndpointTriesCount();
                if (r) {
                  let i = `connect ${t} timeout, max retries reached, will use backup endpoint ${r} to retry`;
                  let n = U("error", {
                    message: i,
                    code: e.ErrorCode.MAX_RETRIES_ERROR
                  });
                  this._debug(i);
                  this._dispatchErrorEvent(n);
                  this._url = yield this._generateUrl(r);
                  this._debug(`connect ${r} ${o} times`);
                  this._removeWsListeners();
                } else {
                  let i = `connect ${t} timeout, max retries reached`;
                  this._debug(i);
                  this._dispatchErrorEvent(U("error", {
                    message: i,
                    code: e.ErrorCode.MAX_RETRIES_ERROR
                  }));
                  return;
                }
              } else {
                let e = (r = this._endpointManager) === null || r === undefined ? undefined : r.getCurrentEndpointAndUpdateCount();
                let t = (o = this._endpointManager) === null || o === undefined ? undefined : o.getCurrentEndpointTriesCount();
                this._url = yield this._generateUrl(e || "");
                this._debug(`connect ${e} ${t} times`);
                this._removeWsListeners();
              }
              if (this._isInit) {
                this._isInit = false;
              } else {
                let e = Q("reconnect", {
                  message: "start"
                });
                if (this.onStartReconnect) {
                  this.onStartReconnect(e);
                }
              }
              let u = ((c = this._endpointManager) === null || c === undefined ? undefined : c.getCurrentEndpointTriesCount()) || 0;
              if (u > 1) {
                yield this._wait(u - 1);
              }
              this._debug(`connecting url: ${this._url} protocols: ${this._protocols}`);
              this._ws = (a = {
                url: this._url,
                protocols: [this._protocols],
                headers: this._options.miniProgramParams.customHttpHeader
              }, (l = this._options.ws) ? new l(a.url, a.protocol) : Z || V ? new et(a.url, a.protocol, a.headers) : (X || z) && typeof WebSocket != "undefined" && WebSocket ? new WebSocket(a.url, a.protocols) : undefined);
              if ((this._isBrowser || this._isWorker) && this._ws) {
                this._ws.binaryType = this._binaryType;
              }
              this._addWsListeners();
              this._connectionTimeoutId = setTimeout(() => this._onTimeout(), d);
            } catch (e) {
              this._connectLock = false;
              throw e;
            }
          }
        });
      }
      _clearTimer() {
        clearTimeout(this._connectionTimeoutId);
        clearTimeout(this._uptimeTimeoutId);
        this._connectionTimeoutId = null;
        this._uptimeTimeoutId = null;
      }
      _clearPingTimer() {
        clearTimeout(this._pingPongTimeoutId);
        clearTimeout(this._reconnectTimeoutId);
        this._pingPongTimeoutId = null;
        this._reconnectTimeoutId = null;
      }
      _debug(...e) {
        this._options.debug;
      }
      _getIntervalValue(e) {
        let {
          initReconnectInterval: t,
          maxReconnectInterval: i,
          reconnectIntervalGrowFactor: n
        } = this._options;
        let s = t * Math.pow(n, e - 1);
        if (s > i) {
          return i;
        } else {
          return s;
        }
      }
      _ping() {
        if (this._ws && this._ws.readyState === this.CONNECTING) {
          this._pingPongTimeoutId = setTimeout(() => this._ping(), this._options.pingInterval);
          return;
        }
        if (!this._ws || this._ws.readyState !== this.OPEN) {
          this._handleReconnect();
          return;
        }
        if (this._ws) {
          this._ws.send("hi");
        }
        this._reconnectTimeoutId = setTimeout(() => {
          var e;
          var t;
          if ((e = this._pingLossCounter) !== null && e !== undefined) {
            e.addCount();
          }
          this.emit("ping_once_timeout", "timeout");
          if ((t = this._pingLossCounter) === null || t === undefined ? undefined : t.checkReachMaxCount()) {
            this._handleReconnect();
          } else {
            this._ping();
          }
        }, this._options.pingTimeoutInterval);
      }
      _navigatorOnline() {
        if (this._isMiniTT || this._isMiniWX) {
          return this._miniNavigatorOnline;
        } else {
          return !this._isBrowser && !this._isWorker || !this._options.listenNetworkChanged || navigator.onLine;
        }
      }
      _handleReconnect() {
        var e;
        var t;
        if (this._navigatorOnline() && !this._readyClosed) {
          if ((e = this._endpointManager) !== null && e !== undefined) {
            e.resetEndpointConfig();
          }
          if ((t = this._pingLossCounter) !== null && t !== undefined) {
            t.resetCounter();
          }
          if (this._ws) {
            this._disconnect(1001, "going away, try reconnecting server", true);
          } else {
            this._connect();
          }
        }
      }
      _onPageNetWorkChange() {
        if (this._isMiniTT) {
          tt.onNetworkStatusChange(({
            isConnected: e
          }) => {
            this._miniNavigatorOnline = e;
            if (e) {
              this._handleOnLine();
            } else {
              this._handleOffLine();
            }
          });
        } else if (this._isMiniWX) {
          wx.onNetworkStatusChange(({
            isConnected: e
          }) => {
            this._miniNavigatorOnline = e;
            if (e) {
              this._handleOnLine();
            } else {
              this._handleOffLine();
            }
          });
        }
      }
      _wait(e) {
        return new Promise(t => {
          setTimeout(t, this._getIntervalValue(e));
        });
      }
      _disconnect(e = 1000, t = "", i = false) {
        if (this._ws) {
          this._destroyWebSocket(e, t, i);
        }
      }
      _onTimeout() {
        var e;
        let t = (e = this._endpointManager) === null || e === undefined ? undefined : e.getCurrentEndpoint();
        this._debug(`connect ${t} timeout`);
        this._disconnect(1001, "timeout, try reconnecting", true);
      }
      _sendAck(e) {
        let t = I(e);
        if (this._ws && this._ws.readyState === this.OPEN) {
          if (this._ws) {
            this._ws.send(t);
          }
          this._debug("send_ack", e);
        }
      }
      _removeWsListeners() {
        if (this._ws) {
          this._ws.removeEventListener("open", this._onOpen);
          this._ws.removeEventListener("close", this._onClose);
          this._ws.removeEventListener("message", this._onMessage);
          this._ws.removeEventListener("error", this._onError);
        }
      }
      _addWsListeners() {
        if (this._ws) {
          this._ws.addEventListener("open", this._onOpen);
          this._ws.addEventListener("close", this._onClose);
          this._ws.addEventListener("message", this._onMessage);
          this._ws.addEventListener("error", this._onError);
        }
      }
      _wsInstanceClose(e = 1000, t = "") {
        try {
          if (this._ws) {
            this._ws.close(e, t);
          }
        } catch (e) {}
      }
      _destroyWebSocket(e = 1000, t = "", i = false) {
        var n;
        var s;
        var r;
        var o;
        this._clearPingTimer();
        this._clearTimer();
        this._removeWsListeners();
        this._wsInstanceClose(1000, t);
        this._connectLock = false;
        if (i && this._navigatorOnline() && !this._readyClosed) {
          if ((n = this._endpointManager) === null || n === undefined ? undefined : n.checkReachMaxTries()) {
            let e = (s = this._endpointManager) === null || s === undefined ? undefined : s.getCurrentEndpoint();
            this._dispatchCloseEvent(G("close", {
              code: 1006,
              reason: `connect ${e} timeout, max retries reached`,
              wasClean: true
            }));
          } else {
            let i = this._options.reconnectInterceptor(e, t);
            this._dispatchCloseEvent(G("close", {
              code: e,
              reason: t,
              wasClean: true,
              willReconnect: i
            }));
            if (i) {
              this._connect();
            }
          }
          return;
        }
        if (this._navigatorOnline() || this._readyClosed) {
          this._dispatchCloseEvent(G("close", {
            code: e,
            reason: "bye"
          }));
        } else {
          this._dispatchCloseEvent(G("close", {
            code: 1006,
            reason: "going away, network offline"
          }));
        }
        this._ws = null;
        if ((r = this._endpointManager) !== null && r !== undefined) {
          r.resetEndpointConfig();
        }
        if ((o = this._pingLossCounter) !== null && o !== undefined) {
          o.resetCounter();
        }
      }
      _dispatchOpenEvent(e) {
        this.emit("open", e);
        if (this.onopen) {
          this.onopen(e);
        }
      }
      _dispatchMessageEvent(e) {
        this.emit("message", e);
        if (this.onmessage) {
          this.onmessage(e);
        }
      }
      _dispatchAckMessageEvent(e) {
        this.emit("ack", e);
        if (this.onReceiveAck) {
          this.onReceiveAck(e);
        }
      }
      _dispatchErrorEvent(e) {
        this.emit("error", e);
        if (this.onerror) {
          this.onerror(e);
        }
      }
      _dispatchCloseEvent(e) {
        this.emit("close", e);
        if (this.onclose) {
          this.onclose(e);
        }
      }
      get binaryType() {
        if (this._ws) {
          return this._ws.binaryType;
        } else {
          return this._binaryType;
        }
      }
      set binaryType(e) {
        this._binaryType = e;
        if (this._ws) {
          this._ws.binaryType = e;
        }
      }
      get retryCount() {
        var e;
        return ((e = this._endpointManager) === null || e === undefined ? undefined : e.getCurrentEndpointTriesCount()) || 0;
      }
      get bufferedAmount() {
        return this._messageQueue.reduce((e, t) => e += t && t.byteLength || 0, 0) + (this._ws ? this._ws.bufferedAmount : 0);
      }
      get extensions() {
        if (this._ws) {
          return this._ws.extensions;
        } else {
          return "";
        }
      }
      get protocol() {
        if (this._ws) {
          return this._ws.protocol;
        } else {
          return "";
        }
      }
      get readyState() {
        if (this._ws) {
          return this._ws.readyState;
        } else if (this._options.automaticOpen) {
          return this.CONNECTING;
        } else {
          return this.CLOSED;
        }
      }
      get url() {
        if (this._ws) {
          return this._ws.url;
        } else {
          return this._url;
        }
      }
      close(e = 1000, t) {
        var i;
        this._readyClosed = true;
        this._clearTimer();
        this._clearPingTimer();
        if ((i = this._qosDB) !== null && i !== undefined) {
          i.closeDB();
        }
        this._dropGlobalEventListener();
        if (!this._ws) {
          this._debug("close, ws instance not initialized");
          return;
        }
        if (this._ws.readyState === this.CLOSED || this._ws.readyState === this.CLOSING) {
          this._debug("close, ws already closed");
          return;
        }
        this._destroyWebSocket(e, t);
      }
      send(e, t) {
        return a(this, undefined, undefined, function* () {
          if (e == null) {
            throw Error("please provide a valid data, data must be a string or an arraybuffer");
          }
          if (typeof e == "number") {
            e = JSON.stringify(e);
          }
          if (typeof e != "string" && !(e instanceof ArrayBuffer) && (!e.buffer || !(e.buffer instanceof ArrayBuffer))) {
            e = JSON.stringify(e);
          }
          let i = yield er(e);
          let n = function (e) {
            try {
              if (typeof e != "string" && (e instanceof ArrayBuffer || e.buffer && e.buffer instanceof ArrayBuffer)) {
                return "";
              }
              if (typeof e == "string") {
                JSON.parse(e);
                return "application/json";
              }
              return "";
            } catch (t) {
              if (typeof e == "string") {
                return "text/plain;charset=utf-8";
              }
              return "";
            }
          }(e);
          let {
            method: s = 0,
            service: r = this._options.service,
            logID: o = this._options.logIDGenerator(),
            headers: a = this._options.headers,
            payloadEncoding: l = this._options.payloadEncoding,
            payloadType: d = this._options.payloadType,
            logIDNew: u = this._options.logIDNewConfig.enableAutoGenerateLogIDNew ? function (e = "") {
              let t = `${Date.now()}`;
              return "02" + t + (c ||= function (e) {
                let t = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/.test(e);
                let i = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e);
                if (t) {
                  return function (e) {
                    let t = e.split(/\./).map(e => (Array(8).join("0") + parseInt(e, 10).toString(2)).slice(-8));
                    let i = [];
                    i[0] = h(t[0] + t[1]);
                    i[1] = h(t[2] + t[3]);
                    return ["0000", "0000", "0000", "0000", "0000", "ffff", i[0], i[1]].join("");
                  }(e);
                } else if (i) {
                  return function (e) {
                    let t = "";
                    let i = [];
                    let n = 0;
                    let s = 0;
                    let r = true;
                    let o = "0000";
                    if (e.indexOf("::") > -1) {
                      let a = e.split("::");
                      for (let e = 0; e < a.length; e++) {
                        let t = a[e];
                        if (t.indexOf(":") > 0) {
                          let e = t.split(":");
                          if (r) {
                            n = e.length;
                          }
                          s += e.length;
                          for (let t = 0; t < e.length; t++) {
                            if (e[t].length !== 4) {
                              let n = o.substring(0, 4 - e[t].length).concat(e[t]);
                              i.push(n);
                            } else {
                              i.push(e[t]);
                            }
                          }
                          r = false;
                        } else {
                          if (t.length !== 4) {
                            let e = o.substring(0, 4 - t.length).concat(t);
                            i.push(e);
                          } else {
                            i.push(t);
                          }
                          if (r) {
                            n += 1;
                          }
                          s += 1;
                          r = false;
                        }
                      }
                      let c = "";
                      for (let e = 0; e < 8 - s; e++) {
                        c = c.concat(o);
                      }
                      for (let e = 0; e < i.length; e++) {
                        t = e === n ? (t = t.concat(c)).concat(i[e]) : t.concat(i[e]);
                      }
                      return t;
                    }
                    {
                      let i = e.split(":");
                      for (let e = 0; e < i.length; e++) {
                        let n = i[e];
                        if (i[e].length !== 4) {
                          let s = o.substring(0, 4 - i[e].length).concat(n);
                          t = t.concat(s);
                        } else {
                          t = t.concat(n);
                        }
                      }
                      return t;
                    }
                  }(e);
                } else {
                  return "00000000000000000000000000000000";
                }
              }(e)) + Math.random().toString(16).slice(-6);
            }(this._options.logIDNewConfig.userIp) : ""
          } = t || {};
          if (!r) {
            throw Error("please provide a valid service");
          }
          let _ = {
            SeqID: P.fromNumber(this._seqId++),
            LogID: P.fromNumber(o),
            service: r,
            method: s,
            headers: a,
            payloadEncoding: l instanceof Object ? l.encoding ? l.encoding : "" : l,
            payloadType: d instanceof Object ? d.type ? d.type : n : d || n,
            payload: i,
            LogIDNew: u
          };
          let f = I(_);
          if (this._ws && this._ws.readyState === this.OPEN) {
            if (this._ws) {
              this._ws.send(f);
            }
            this._debug("sent", _);
          } else if (this._messageQueue.length < this._options.maxMessageQueueLength) {
            this._messageQueue.push(f);
            this._debug("enqueue", _);
          } else {
            this._messageQueue.shift();
            this._messageQueue.push(f);
          }
          return this._seqId;
        });
      }
      reconnect(e) {
        var t;
        var i;
        return a(this, undefined, undefined, function* () {
          let {
            url: n
          } = e || {};
          let s = Array.isArray(n) ? n : typeof n == "string" ? [n] : [];
          if (e) {
            Object.assign(this._options, e);
          }
          if (s && s.length) {
            this._endpointManager = new K(s, this._options.maxRetries);
          } else if ((t = this._endpointManager) !== null && t !== undefined) {
            t.resetEndpointConfig();
          }
          if ((i = this._pingLossCounter) !== null && i !== undefined) {
            i.resetCounter(this._options.pingLossCount);
          }
          this._readyClosed = false;
          if (this._ws && this._ws.readyState !== this.CLOSED) {
            this._disconnect(1000, "manual reconnecting", true);
          } else {
            this._isInit = true;
            this._connect();
          }
        });
      }
      connect() {
        var e;
        var t;
        return a(this, undefined, undefined, function* () {
          if (!this._connectLock) {
            if ((e = this._endpointManager) !== null && e !== undefined) {
              e.resetEndpointConfig();
            }
            if ((t = this._pingLossCounter) !== null && t !== undefined) {
              t.resetCounter();
            }
            this._readyClosed = false;
            this._isInit = true;
            this._connect();
          }
        });
      }
      addEventListener(e, t) {
        this.on(e, t);
      }
      dispatchEvent(e) {
        let {
          type: t
        } = e;
        this.emit(t, e);
      }
      removeEventListener(e, t) {
        this.off(e, t);
      }
      pingOnce() {
        return new Promise((e, t) => {
          this._clearPingTimer();
          this._pingPongTimeoutId = setTimeout(() => this._ping(), this._options.pingInterval);
          let i = () => {
            e("success");
            this.off("ping_once_success", i);
            this.off("ping_once_timeout", n);
          };
          let n = () => {
            t("timeout");
            this.off("ping_once_success", i);
            this.off("ping_once_timeout", n);
          };
          this.on("ping_once_success", i);
          this.on("ping_once_timeout", n);
          this._ping();
        });
      }
    };
    e.FrontierMessageEvent = W;
    e.MessageEvent = F;
    e.OpenEvent = $;
    e.ReconnectEvent = A;
    e.createCloseEvent = G;
    e.createErrorEvent = U;
    e.createMessageEvent = H;
    e.createOpenEvent = J;
    e.createReconnectEvent = Q;
    e.decodedFrame = O;
    e.encodeFrame = I;
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  })(exports);
}