// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'base64EncodeDecode'
// - Resolved require(673582) to 'base64-encode-decode'
// - Renamed variable 'o' to 'ieee754FloatBufferUtils'
// - Resolved require(903754) to 'ieee754-float-buffer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 659459
         */
module.exports = function (module, exports, require) {
  let base64EncodeDecode = require("base64-encode-decode") /*id: 673582*/;
  let ieee754FloatBufferUtils = require("ieee754-float-buffer-utils") /*id: 903754*/;
  let a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  function i(t) {
    if (t > 2147483647) {
      throw RangeError("The value \"" + t + "\" is invalid for option \"size\"");
    }
    let e = new Uint8Array(t);
    Object.setPrototypeOf(e, c.prototype);
    return e;
  }
  function c(t, e, r) {
    if (typeof t == "number") {
      if (typeof e == "string") {
        throw TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return s(t);
    }
    return u(t, e, r);
  }
  function u(t, e, r) {
    if (typeof t == "string") {
      return function (t, e) {
        if (typeof e != "string" || e === "") {
          e = "utf8";
        }
        if (!c.isEncoding(e)) {
          throw TypeError("Unknown encoding: " + e);
        }
        let r = b(t, e) | 0;
        let n = i(r);
        let o = n.write(t, e);
        if (o !== r) {
          n = n.slice(0, o);
        }
        return n;
      }(t, e);
    }
    if (ArrayBuffer.isView(t)) {
      return function (t) {
        if (P(t, Uint8Array)) {
          let e = new Uint8Array(t);
          return d(e.buffer, e.byteOffset, e.byteLength);
        }
        return f(t);
      }(t);
    }
    if (t == null) {
      throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    }
    if (P(t, ArrayBuffer) || t && P(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer != "undefined" && (P(t, SharedArrayBuffer) || t && P(t.buffer, SharedArrayBuffer))) {
      return d(t, e, r);
    }
    if (typeof t == "number") {
      throw TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    let n = t.valueOf && t.valueOf();
    if (n != null && n !== t) {
      return c.from(n, e, r);
    }
    let o = function (t) {
      if (c.isBuffer(t)) {
        let e = g(t.length) | 0;
        let r = i(e);
        if (r.length !== 0) {
          t.copy(r, 0, 0, e);
        }
        return r;
      }
      if (t.length !== undefined) {
        if (typeof t.length != "number" || function (t) {
          return t != t;
        }(t.length)) {
          return i(0);
        } else {
          return f(t);
        }
      } else if (t.type === "Buffer" && Array.isArray(t.data)) {
        return f(t.data);
      } else {
        return undefined;
      }
    }(t);
    if (o) {
      return o;
    }
    if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function") {
      return c.from(t[Symbol.toPrimitive]("string"), e, r);
    }
    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  }
  function l(t) {
    if (typeof t != "number") {
      throw TypeError("\"size\" argument must be of type number");
    }
    if (t < 0) {
      throw RangeError("The value \"" + t + "\" is invalid for option \"size\"");
    }
  }
  function s(t) {
    l(t);
    return i(t < 0 ? 0 : g(t) | 0);
  }
  function f(t) {
    let e = t.length < 0 ? 0 : g(t.length) | 0;
    let r = i(e);
    for (let n = 0; n < e; n += 1) {
      r[n] = t[n] & 255;
    }
    return r;
  }
  function d(t, e, r) {
    let n;
    if (e < 0 || t.byteLength < e) {
      throw RangeError("\"offset\" is outside of buffer bounds");
    }
    if (t.byteLength < e + (r || 0)) {
      throw RangeError("\"length\" is outside of buffer bounds");
    }
    Object.setPrototypeOf(n = e === undefined && r === undefined ? new Uint8Array(t) : r === undefined ? new Uint8Array(t, e) : new Uint8Array(t, e, r), c.prototype);
    return n;
  }
  function g(t) {
    if (t >= 2147483647) {
      throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    }
    return t | 0;
  }
  function b(t, e) {
    if (c.isBuffer(t)) {
      return t.length;
    }
    if (ArrayBuffer.isView(t) || P(t, ArrayBuffer)) {
      return t.byteLength;
    }
    if (typeof t != "string") {
      throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof t);
    }
    let r = t.length;
    let n = arguments.length > 2 && arguments[2] === true;
    if (!n && r === 0) {
      return 0;
    }
    let o = false;
    while (true) {
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return G(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return C(t).length;
        default:
          if (o) {
            if (n) {
              return -1;
            } else {
              return G(t).length;
            }
          }
          e = ("" + e).toLowerCase();
          o = true;
      }
    }
  }
  function h(t, e, r) {
    let o = false;
    if (e === undefined || e < 0) {
      e = 0;
    }
    if (e > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) {
      return "";
    }
    for (t ||= "utf8";;) {
      switch (t) {
        case "hex":
          return function (t, e, r) {
            let n = t.length;
            if (!e || e < 0) {
              e = 0;
            }
            if (!r || r < 0 || r > n) {
              r = n;
            }
            let o = "";
            for (let n = e; n < r; ++n) {
              o += F[t[n]];
            }
            return o;
          }(this, e, r);
        case "utf8":
        case "utf-8":
          return E(this, e, r);
        case "ascii":
          return function (t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let o = e; o < r; ++o) {
              n += String.fromCharCode(t[o] & 127);
            }
            return n;
          }(this, e, r);
        case "latin1":
        case "binary":
          return function (t, e, r) {
            let n = "";
            r = Math.min(t.length, r);
            for (let o = e; o < r; ++o) {
              n += String.fromCharCode(t[o]);
            }
            return n;
          }(this, e, r);
        case "base64":
          var a;
          var i;
          var c;
          a = this;
          i = e;
          c = r;
          if (i === 0 && c === a.length) {
            return base64EncodeDecode.fromByteArray(a);
          } else {
            return base64EncodeDecode.fromByteArray(a.slice(i, c));
          }
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return function (t, e, r) {
            let n = t.slice(e, r);
            let o = "";
            for (let t = 0; t < n.length - 1; t += 2) {
              o += String.fromCharCode(n[t] + n[t + 1] * 256);
            }
            return o;
          }(this, e, r);
        default:
          if (o) {
            throw TypeError("Unknown encoding: " + t);
          }
          t = (t + "").toLowerCase();
          o = true;
      }
    }
  }
  function p(t, e, r) {
    let n = t[e];
    t[e] = t[r];
    t[r] = n;
  }
  function w(t, e, r, n, o) {
    var a;
    if (t.length === 0) {
      return -1;
    }
    if (typeof r == "string") {
      n = r;
      r = 0;
    } else if (r > 2147483647) {
      r = 2147483647;
    } else if (r < -2147483648) {
      r = -2147483648;
    }
    if ((a = r *= 1) != a) {
      r = o ? 0 : t.length - 1;
    }
    if (r < 0) {
      r = t.length + r;
    }
    if (r >= t.length) {
      if (o) {
        return -1;
      }
      r = t.length - 1;
    } else if (r < 0) {
      if (!o) {
        return -1;
      }
      r = 0;
    }
    if (typeof e == "string") {
      e = c.from(e, n);
    }
    if (c.isBuffer(e)) {
      if (e.length === 0) {
        return -1;
      } else {
        return _(t, e, r, n, o);
      }
    }
    if (typeof e == "number") {
      e &= 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (o) {
          return Uint8Array.prototype.indexOf.call(t, e, r);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(t, e, r);
        }
      } else {
        return _(t, [e], r, n, o);
      }
    }
    throw TypeError("val must be string, number or Buffer");
  }
  function _(t, e, r, n, o) {
    let a;
    let i = 1;
    let c = t.length;
    let u = e.length;
    if (n !== undefined && ((n = String(n).toLowerCase()) === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (t.length < 2 || e.length < 2) {
        return -1;
      }
      i = 2;
      c /= 2;
      u /= 2;
      r /= 2;
    }
    function l(t, e) {
      if (i === 1) {
        return t[e];
      } else {
        return t.readUInt16BE(e * i);
      }
    }
    if (o) {
      let n = -1;
      for (a = r; a < c; a++) {
        if (l(t, a) === l(e, n === -1 ? 0 : a - n)) {
          if (n === -1) {
            n = a;
          }
          if (a - n + 1 === u) {
            return n * i;
          }
        } else {
          if (n !== -1) {
            a -= a - n;
          }
          n = -1;
        }
      }
    } else {
      if (r + u > c) {
        r = c - u;
      }
      a = r;
      for (; a >= 0; a--) {
        let r = true;
        for (let n = 0; n < u; n++) {
          if (l(t, a + n) !== l(e, n)) {
            r = false;
            break;
          }
        }
        if (r) {
          return a;
        }
      }
    }
    return -1;
  }
  function E(t, e, r) {
    r = Math.min(t.length, r);
    let n = [];
    let o = e;
    while (o < r) {
      let e = t[o];
      let a = null;
      let i = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
      if (o + i <= r) {
        let r;
        let n;
        let c;
        let u;
        switch (i) {
          case 1:
            if (e < 128) {
              a = e;
            }
            break;
          case 2:
            if (((r = t[o + 1]) & 192) == 128 && (u = (e & 31) << 6 | r & 63) > 127) {
              a = u;
            }
            break;
          case 3:
            r = t[o + 1];
            n = t[o + 2];
            if ((r & 192) == 128 && (n & 192) == 128 && (u = (e & 15) << 12 | (r & 63) << 6 | n & 63) > 2047 && (u < 55296 || u > 57343)) {
              a = u;
            }
            break;
          case 4:
            r = t[o + 1];
            n = t[o + 2];
            c = t[o + 3];
            if ((r & 192) == 128 && (n & 192) == 128 && (c & 192) == 128 && (u = (e & 15) << 18 | (r & 63) << 12 | (n & 63) << 6 | c & 63) > 65535 && u < 1114112) {
              a = u;
            }
        }
      }
      if (a === null) {
        a = 65533;
        i = 1;
      } else if (a > 65535) {
        a -= 65536;
        n.push(a >>> 10 & 1023 | 55296);
        a = a & 1023 | 56320;
      }
      n.push(a);
      o += i;
    }
    return function (t) {
      let e = t.length;
      if (e <= 4096) {
        return String.fromCharCode.apply(String, t);
      }
      let r = "";
      let n = 0;
      while (n < e) {
        r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
      }
      return r;
    }(n);
  }
  function m(t, e, r) {
    if (t % 1 != 0 || t < 0) {
      throw RangeError("offset is not uint");
    }
    if (t + e > r) {
      throw RangeError("Trying to access beyond buffer length");
    }
  }
  function T(t, e, r, n, o, a) {
    if (!c.isBuffer(t)) {
      throw TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (e > o || e < a) {
      throw RangeError("\"value\" argument is out of bounds");
    }
    if (r + n > t.length) {
      throw RangeError("Index out of range");
    }
  }
  function k(t, e, r, n, o) {
    y(e, n, o, t, r, 7);
    let a = Number(e & BigInt(4294967295));
    t[r++] = a;
    a >>= 8;
    t[r++] = a;
    a >>= 8;
    t[r++] = a;
    a >>= 8;
    t[r++] = a;
    let i = Number(e >> BigInt(32) & BigInt(4294967295));
    t[r++] = i;
    i >>= 8;
    t[r++] = i;
    i >>= 8;
    t[r++] = i;
    i >>= 8;
    t[r++] = i;
    return r;
  }
  function x(t, e, r, n, o) {
    y(e, n, o, t, r, 7);
    let a = Number(e & BigInt(4294967295));
    t[r + 7] = a;
    a >>= 8;
    t[r + 6] = a;
    a >>= 8;
    t[r + 5] = a;
    a >>= 8;
    t[r + 4] = a;
    let i = Number(e >> BigInt(32) & BigInt(4294967295));
    t[r + 3] = i;
    i >>= 8;
    t[r + 2] = i;
    i >>= 8;
    t[r + 1] = i;
    i >>= 8;
    t[r] = i;
    return r + 8;
  }
  function I(t, e, r, n, o, a) {
    if (r + n > t.length || r < 0) {
      throw RangeError("Index out of range");
    }
  }
  function O(t, e, r, n, a) {
    e *= 1;
    r >>>= 0;
    if (!a) {
      I(t, e, r, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754FloatBufferUtils.write(t, e, r, n, 23, 4);
    return r + 4;
  }
  function A(t, e, r, n, a) {
    e *= 1;
    r >>>= 0;
    if (!a) {
      I(t, e, r, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
    }
    ieee754FloatBufferUtils.write(t, e, r, n, 52, 8);
    return r + 8;
  }
  exports.Buffer = c;
  exports.INSPECT_MAX_BYTES = 50;
  c.TYPED_ARRAY_SUPPORT = function () {
    try {
      let t = new Uint8Array(1);
      let e = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(e, Uint8Array.prototype);
      Object.setPrototypeOf(t, e);
      return t.foo() === 42;
    } catch (t) {
      return false;
    }
  }();
  c.TYPED_ARRAY_SUPPORT;
  Object.defineProperty(c.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (c.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(c.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (c.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  c.poolSize = 8192;
  c.from = function (t, e, r) {
    return u(t, e, r);
  };
  Object.setPrototypeOf(c.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(c, Uint8Array);
  c.alloc = function (t, e, r) {
    l(t);
    if (t <= 0) {
      return i(t);
    } else if (e !== undefined) {
      if (typeof r == "string") {
        return i(t).fill(e, r);
      } else {
        return i(t).fill(e);
      }
    } else {
      return i(t);
    }
  };
  c.allocUnsafe = function (t) {
    return s(t);
  };
  c.allocUnsafeSlow = function (t) {
    return s(t);
  };
  c.isBuffer = function (t) {
    return t != null && t._isBuffer === true && t !== c.prototype;
  };
  c.compare = function (t, e) {
    if (P(t, Uint8Array)) {
      t = c.from(t, t.offset, t.byteLength);
    }
    if (P(e, Uint8Array)) {
      e = c.from(e, e.offset, e.byteLength);
    }
    if (!c.isBuffer(t) || !c.isBuffer(e)) {
      throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (t === e) {
      return 0;
    }
    let r = t.length;
    let n = e.length;
    for (let o = 0, a = Math.min(r, n); o < a; ++o) {
      if (t[o] !== e[o]) {
        r = t[o];
        n = e[o];
        break;
      }
    }
    if (r < n) {
      return -1;
    } else {
      return +(n < r);
    }
  };
  c.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  c.concat = function (t, e) {
    let r;
    if (!Array.isArray(t)) {
      throw TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (t.length === 0) {
      return c.alloc(0);
    }
    if (e === undefined) {
      r = 0;
      e = 0;
      for (; r < t.length; ++r) {
        e += t[r].length;
      }
    }
    let n = c.allocUnsafe(e);
    let o = 0;
    for (r = 0; r < t.length; ++r) {
      let e = t[r];
      if (P(e, Uint8Array)) {
        if (o + e.length > n.length) {
          if (!c.isBuffer(e)) {
            e = c.from(e);
          }
          e.copy(n, o);
        } else {
          Uint8Array.prototype.set.call(n, e, o);
        }
      } else if (c.isBuffer(e)) {
        e.copy(n, o);
      } else {
        throw TypeError("\"list\" argument must be an Array of Buffers");
      }
      o += e.length;
    }
    return n;
  };
  c.byteLength = b;
  c.prototype._isBuffer = true;
  c.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 != 0) {
      throw RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let e = 0; e < t; e += 2) {
      p(this, e, e + 1);
    }
    return this;
  };
  c.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 != 0) {
      throw RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let e = 0; e < t; e += 4) {
      p(this, e, e + 3);
      p(this, e + 1, e + 2);
    }
    return this;
  };
  c.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 != 0) {
      throw RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let e = 0; e < t; e += 8) {
      p(this, e, e + 7);
      p(this, e + 1, e + 6);
      p(this, e + 2, e + 5);
      p(this, e + 3, e + 4);
    }
    return this;
  };
  c.prototype.toString = function () {
    let t = this.length;
    if (t === 0) {
      return "";
    } else if (arguments.length == 0) {
      return E(this, 0, t);
    } else {
      return h.apply(this, arguments);
    }
  };
  c.prototype.toLocaleString = c.prototype.toString;
  c.prototype.equals = function (t) {
    if (!c.isBuffer(t)) {
      throw TypeError("Argument must be a Buffer");
    }
    return this === t || c.compare(this, t) === 0;
  };
  c.prototype.inspect = function () {
    let t = "";
    let r = exports.INSPECT_MAX_BYTES;
    t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > r) {
      t += " ... ";
    }
    return "<Buffer " + t + ">";
  };
  if (a) {
    c.prototype[a] = c.prototype.inspect;
  }
  c.prototype.compare = function (t, e, r, n, o) {
    if (P(t, Uint8Array)) {
      t = c.from(t, t.offset, t.byteLength);
    }
    if (!c.isBuffer(t)) {
      throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof t);
    }
    if (e === undefined) {
      e = 0;
    }
    if (r === undefined) {
      r = t ? t.length : 0;
    }
    if (n === undefined) {
      n = 0;
    }
    if (o === undefined) {
      o = this.length;
    }
    if (e < 0 || r > t.length || n < 0 || o > this.length) {
      throw RangeError("out of range index");
    }
    if (n >= o && e >= r) {
      return 0;
    }
    if (n >= o) {
      return -1;
    }
    if (e >= r) {
      return 1;
    }
    e >>>= 0;
    r >>>= 0;
    n >>>= 0;
    o >>>= 0;
    if (this === t) {
      return 0;
    }
    let a = o - n;
    let i = r - e;
    let u = Math.min(a, i);
    let l = this.slice(n, o);
    let s = t.slice(e, r);
    for (let t = 0; t < u; ++t) {
      if (l[t] !== s[t]) {
        a = l[t];
        i = s[t];
        break;
      }
    }
    if (a < i) {
      return -1;
    } else {
      return +(i < a);
    }
  };
  c.prototype.includes = function (t, e, r) {
    return this.indexOf(t, e, r) !== -1;
  };
  c.prototype.indexOf = function (t, e, r) {
    return w(this, t, e, r, true);
  };
  c.prototype.lastIndexOf = function (t, e, r) {
    return w(this, t, e, r, false);
  };
  c.prototype.write = function (t, e, r, n) {
    var o;
    var a;
    var i;
    var c;
    var u;
    var l;
    var s;
    var f;
    if (e === undefined) {
      n = "utf8";
      r = this.length;
      e = 0;
    } else if (r === undefined && typeof e == "string") {
      n = e;
      r = this.length;
      e = 0;
    } else if (isFinite(e)) {
      e >>>= 0;
      if (isFinite(r)) {
        r >>>= 0;
        if (n === undefined) {
          n = "utf8";
        }
      } else {
        n = r;
        r = undefined;
      }
    } else {
      throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    let d = this.length - e;
    if (r === undefined || r > d) {
      r = d;
    }
    if (t.length > 0 && (r < 0 || e < 0) || e > this.length) {
      throw RangeError("Attempt to write outside buffer bounds");
    }
    n ||= "utf8";
    let g = false;
    while (true) {
      switch (n) {
        case "hex":
          return function (t, e, r, n) {
            let o;
            r = Number(r) || 0;
            let a = t.length - r;
            if (n) {
              if ((n = Number(n)) > a) {
                n = a;
              }
            } else {
              n = a;
            }
            let i = e.length;
            if (n > i / 2) {
              n = i / 2;
            }
            o = 0;
            for (; o < n; ++o) {
              var c;
              let n = parseInt(e.substr(o * 2, 2), 16);
              if ((c = n) != c) {
                break;
              }
              t[r + o] = n;
            }
            return o;
          }(this, t, e, r);
        case "utf8":
        case "utf-8":
          o = e;
          a = r;
          return v(G(t, this.length - o), this, o, a);
        case "ascii":
        case "latin1":
        case "binary":
          i = e;
          c = r;
          return v(function (t) {
            let e = [];
            for (let r = 0; r < t.length; ++r) {
              e.push(t.charCodeAt(r) & 255);
            }
            return e;
          }(t), this, i, c);
        case "base64":
          u = e;
          l = r;
          return v(C(t), this, u, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          s = e;
          f = r;
          return v(function (t, e) {
            let r;
            let n;
            let o = [];
            for (let a = 0; a < t.length && !((e -= 2) < 0); ++a) {
              n = (r = t.charCodeAt(a)) >> 8;
              o.push(r % 256);
              o.push(n);
            }
            return o;
          }(t, this.length - s), this, s, f);
        default:
          if (g) {
            throw TypeError("Unknown encoding: " + n);
          }
          n = ("" + n).toLowerCase();
          g = true;
      }
    }
  };
  c.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  c.prototype.slice = function (t, e) {
    let r = this.length;
    t = ~~t;
    e = e === undefined ? r : ~~e;
    if (t < 0) {
      if ((t += r) < 0) {
        t = 0;
      }
    } else if (t > r) {
      t = r;
    }
    if (e < 0) {
      if ((e += r) < 0) {
        e = 0;
      }
    } else if (e > r) {
      e = r;
    }
    if (e < t) {
      e = t;
    }
    let n = this.subarray(t, e);
    Object.setPrototypeOf(n, c.prototype);
    return n;
  };
  c.prototype.readUintLE = c.prototype.readUIntLE = function (t, e, r) {
    t >>>= 0;
    e >>>= 0;
    if (!r) {
      m(t, e, this.length);
    }
    let n = this[t];
    let o = 1;
    let a = 0;
    while (++a < e && (o *= 256)) {
      n += this[t + a] * o;
    }
    return n;
  };
  c.prototype.readUintBE = c.prototype.readUIntBE = function (t, e, r) {
    t >>>= 0;
    e >>>= 0;
    if (!r) {
      m(t, e, this.length);
    }
    let n = this[t + --e];
    let o = 1;
    while (e > 0 && (o *= 256)) {
      n += this[t + --e] * o;
    }
    return n;
  };
  c.prototype.readUint8 = c.prototype.readUInt8 = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 1, this.length);
    }
    return this[t];
  };
  c.prototype.readUint16LE = c.prototype.readUInt16LE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 2, this.length);
    }
    return this[t] | this[t + 1] << 8;
  };
  c.prototype.readUint16BE = c.prototype.readUInt16BE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 2, this.length);
    }
    return this[t] << 8 | this[t + 1];
  };
  c.prototype.readUint32LE = c.prototype.readUInt32LE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  };
  c.prototype.readUint32BE = c.prototype.readUInt32BE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  };
  c.prototype.readBigUInt64LE = M(function (t) {
    B(t >>>= 0, "offset");
    let e = this[t];
    let r = this[t + 7];
    if (e === undefined || r === undefined) {
      D(t, this.length - 8);
    }
    let n = e + this[++t] * 256 + this[++t] * 65536 + this[++t] * 16777216;
    let o = this[++t] + this[++t] * 256 + this[++t] * 65536 + r * 16777216;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  c.prototype.readBigUInt64BE = M(function (t) {
    B(t >>>= 0, "offset");
    let e = this[t];
    let r = this[t + 7];
    if (e === undefined || r === undefined) {
      D(t, this.length - 8);
    }
    let n = e * 16777216 + this[++t] * 65536 + this[++t] * 256 + this[++t];
    let o = this[++t] * 16777216 + this[++t] * 65536 + this[++t] * 256 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  c.prototype.readIntLE = function (t, e, r) {
    t >>>= 0;
    e >>>= 0;
    if (!r) {
      m(t, e, this.length);
    }
    let n = this[t];
    let o = 1;
    let a = 0;
    while (++a < e && (o *= 256)) {
      n += this[t + a] * o;
    }
    if (n >= (o *= 128)) {
      n -= Math.pow(2, e * 8);
    }
    return n;
  };
  c.prototype.readIntBE = function (t, e, r) {
    t >>>= 0;
    e >>>= 0;
    if (!r) {
      m(t, e, this.length);
    }
    let n = e;
    let o = 1;
    let a = this[t + --n];
    while (n > 0 && (o *= 256)) {
      a += this[t + --n] * o;
    }
    if (a >= (o *= 128)) {
      a -= Math.pow(2, e * 8);
    }
    return a;
  };
  c.prototype.readInt8 = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 1, this.length);
    }
    if (this[t] & 128) {
      return -((255 - this[t] + 1) * 1);
    } else {
      return this[t];
    }
  };
  c.prototype.readInt16LE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 2, this.length);
    }
    let r = this[t] | this[t + 1] << 8;
    if (r & 32768) {
      return r | -65536;
    } else {
      return r;
    }
  };
  c.prototype.readInt16BE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 2, this.length);
    }
    let r = this[t + 1] | this[t] << 8;
    if (r & 32768) {
      return r | -65536;
    } else {
      return r;
    }
  };
  c.prototype.readInt32LE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  };
  c.prototype.readInt32BE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  };
  c.prototype.readBigInt64LE = M(function (t) {
    B(t >>>= 0, "offset");
    let e = this[t];
    let r = this[t + 7];
    if (e === undefined || r === undefined) {
      D(t, this.length - 8);
    }
    return (BigInt(this[t + 4] + this[t + 5] * 256 + this[t + 6] * 65536 + (r << 24)) << BigInt(32)) + BigInt(e + this[++t] * 256 + this[++t] * 65536 + this[++t] * 16777216);
  });
  c.prototype.readBigInt64BE = M(function (t) {
    B(t >>>= 0, "offset");
    let e = this[t];
    let r = this[t + 7];
    if (e === undefined || r === undefined) {
      D(t, this.length - 8);
    }
    return (BigInt((e << 24) + this[++t] * 65536 + this[++t] * 256 + this[++t]) << BigInt(32)) + BigInt(this[++t] * 16777216 + this[++t] * 65536 + this[++t] * 256 + r);
  });
  c.prototype.readFloatLE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return ieee754FloatBufferUtils.read(this, t, true, 23, 4);
  };
  c.prototype.readFloatBE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 4, this.length);
    }
    return ieee754FloatBufferUtils.read(this, t, false, 23, 4);
  };
  c.prototype.readDoubleLE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 8, this.length);
    }
    return ieee754FloatBufferUtils.read(this, t, true, 52, 8);
  };
  c.prototype.readDoubleBE = function (t, e) {
    t >>>= 0;
    if (!e) {
      m(t, 8, this.length);
    }
    return ieee754FloatBufferUtils.read(this, t, false, 52, 8);
  };
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function (t, e, r, n) {
    t *= 1;
    e >>>= 0;
    r >>>= 0;
    if (!n) {
      let n = Math.pow(2, r * 8) - 1;
      T(this, t, e, r, n, 0);
    }
    let o = 1;
    let a = 0;
    for (this[e] = t & 255; ++a < r && (o *= 256);) {
      this[e + a] = t / o & 255;
    }
    return e + r;
  };
  c.prototype.writeUintBE = c.prototype.writeUIntBE = function (t, e, r, n) {
    t *= 1;
    e >>>= 0;
    r >>>= 0;
    if (!n) {
      let n = Math.pow(2, r * 8) - 1;
      T(this, t, e, r, n, 0);
    }
    let o = r - 1;
    let a = 1;
    for (this[e + o] = t & 255; --o >= 0 && (a *= 256);) {
      this[e + o] = t / a & 255;
    }
    return e + r;
  };
  c.prototype.writeUint8 = c.prototype.writeUInt8 = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 1, 255, 0);
    }
    this[e] = t & 255;
    return e + 1;
  };
  c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 2, 65535, 0);
    }
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
    return e + 2;
  };
  c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 2, 65535, 0);
    }
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
    return e + 2;
  };
  c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 4, 4294967295, 0);
    }
    this[e + 3] = t >>> 24;
    this[e + 2] = t >>> 16;
    this[e + 1] = t >>> 8;
    this[e] = t & 255;
    return e + 4;
  };
  c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 4, 4294967295, 0);
    }
    this[e] = t >>> 24;
    this[e + 1] = t >>> 16;
    this[e + 2] = t >>> 8;
    this[e + 3] = t & 255;
    return e + 4;
  };
  c.prototype.writeBigUInt64LE = M(function (t, e = 0) {
    return k(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  c.prototype.writeBigUInt64BE = M(function (t, e = 0) {
    return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  c.prototype.writeIntLE = function (t, e, r, n) {
    t *= 1;
    e >>>= 0;
    if (!n) {
      let n = Math.pow(2, r * 8 - 1);
      T(this, t, e, r, n - 1, -n);
    }
    let o = 0;
    let a = 1;
    let i = 0;
    for (this[e] = t & 255; ++o < r && (a *= 256);) {
      if (t < 0 && i === 0 && this[e + o - 1] !== 0) {
        i = 1;
      }
      this[e + o] = (t / a >> 0) - i & 255;
    }
    return e + r;
  };
  c.prototype.writeIntBE = function (t, e, r, n) {
    t *= 1;
    e >>>= 0;
    if (!n) {
      let n = Math.pow(2, r * 8 - 1);
      T(this, t, e, r, n - 1, -n);
    }
    let o = r - 1;
    let a = 1;
    let i = 0;
    for (this[e + o] = t & 255; --o >= 0 && (a *= 256);) {
      if (t < 0 && i === 0 && this[e + o + 1] !== 0) {
        i = 1;
      }
      this[e + o] = (t / a >> 0) - i & 255;
    }
    return e + r;
  };
  c.prototype.writeInt8 = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 1, 127, -128);
    }
    if (t < 0) {
      t = 255 + t + 1;
    }
    this[e] = t & 255;
    return e + 1;
  };
  c.prototype.writeInt16LE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 2, 32767, -32768);
    }
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
    return e + 2;
  };
  c.prototype.writeInt16BE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 2, 32767, -32768);
    }
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
    return e + 2;
  };
  c.prototype.writeInt32LE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 4, 2147483647, -2147483648);
    }
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
    this[e + 2] = t >>> 16;
    this[e + 3] = t >>> 24;
    return e + 4;
  };
  c.prototype.writeInt32BE = function (t, e, r) {
    t *= 1;
    e >>>= 0;
    if (!r) {
      T(this, t, e, 4, 2147483647, -2147483648);
    }
    if (t < 0) {
      t = 4294967295 + t + 1;
    }
    this[e] = t >>> 24;
    this[e + 1] = t >>> 16;
    this[e + 2] = t >>> 8;
    this[e + 3] = t & 255;
    return e + 4;
  };
  c.prototype.writeBigInt64LE = M(function (t, e = 0) {
    return k(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  c.prototype.writeBigInt64BE = M(function (t, e = 0) {
    return x(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  c.prototype.writeFloatLE = function (t, e, r) {
    return O(this, t, e, true, r);
  };
  c.prototype.writeFloatBE = function (t, e, r) {
    return O(this, t, e, false, r);
  };
  c.prototype.writeDoubleLE = function (t, e, r) {
    return A(this, t, e, true, r);
  };
  c.prototype.writeDoubleBE = function (t, e, r) {
    return A(this, t, e, false, r);
  };
  c.prototype.copy = function (t, e, r, n) {
    if (!c.isBuffer(t)) {
      throw TypeError("argument should be a Buffer");
    }
    r ||= 0;
    if (!n && n !== 0) {
      n = this.length;
    }
    if (e >= t.length) {
      e = t.length;
    }
    e ||= 0;
    if (n > 0 && n < r) {
      n = r;
    }
    if (n === r || t.length === 0 || this.length === 0) {
      return 0;
    }
    if (e < 0) {
      throw RangeError("targetStart out of bounds");
    }
    if (r < 0 || r >= this.length) {
      throw RangeError("Index out of range");
    }
    if (n < 0) {
      throw RangeError("sourceEnd out of bounds");
    }
    if (n > this.length) {
      n = this.length;
    }
    if (t.length - e < n - r) {
      n = t.length - e + r;
    }
    let o = n - r;
    if (this === t && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(e, r, n);
    } else {
      Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
    }
    return o;
  };
  c.prototype.fill = function (t, e, r, n) {
    let o;
    if (typeof t == "string") {
      if (typeof e == "string") {
        n = e;
        e = 0;
        r = this.length;
      } else if (typeof r == "string") {
        n = r;
        r = this.length;
      }
      if (n !== undefined && typeof n != "string") {
        throw TypeError("encoding must be a string");
      }
      if (typeof n == "string" && !c.isEncoding(n)) {
        throw TypeError("Unknown encoding: " + n);
      }
      if (t.length === 1) {
        let e = t.charCodeAt(0);
        if (n === "utf8" && e < 128 || n === "latin1") {
          t = e;
        }
      }
    } else if (typeof t == "number") {
      t &= 255;
    } else if (typeof t == "boolean") {
      t = Number(t);
    }
    if (e < 0 || this.length < e || this.length < r) {
      throw RangeError("Out of range index");
    }
    if (r <= e) {
      return this;
    }
    e >>>= 0;
    r = r === undefined ? this.length : r >>> 0;
    t ||= 0;
    if (typeof t == "number") {
      for (o = e; o < r; ++o) {
        this[o] = t;
      }
    } else {
      let a = c.isBuffer(t) ? t : c.from(t, n);
      let i = a.length;
      if (i === 0) {
        throw TypeError("The value \"" + t + "\" is invalid for argument \"value\"");
      }
      for (o = 0; o < r - e; ++o) {
        this[o + e] = a[o % i];
      }
    }
    return this;
  };
  let R = {};
  function S(t, e, r) {
    R[t] = class extends r {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${t}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return t;
      }
      set code(t) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value: t,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${t}]: ${this.message}`;
      }
    };
  }
  function N(t) {
    let e = "";
    let r = t.length;
    let n = +(t[0] === "-");
    for (; r >= n + 4; r -= 3) {
      e = `_${t.slice(r - 3, r)}${e}`;
    }
    return `${t.slice(0, r)}${e}`;
  }
  function y(t, e, r, n, o, a) {
    if (t > r || t < e) {
      let n;
      let o = typeof e == "bigint" ? "n" : "";
      n = a > 3 ? e === 0 || e === BigInt(0) ? `>= 0${o} and < 2${o} ** ${(a + 1) * 8}${o}` : `>= -(2${o} ** ${(a + 1) * 8 - 1}${o}) and < 2 ** ${(a + 1) * 8 - 1}${o}` : `>= ${e}${o} and <= ${r}${o}`;
      throw new R.ERR_OUT_OF_RANGE("value", n, t);
    }
    B(o, "offset");
    if (n[o] === undefined || n[o + a] === undefined) {
      D(o, n.length - (a + 1));
    }
  }
  function B(t, e) {
    if (typeof t != "number") {
      throw new R.ERR_INVALID_ARG_TYPE(e, "number", t);
    }
  }
  function D(t, e, r) {
    if (Math.floor(t) !== t) {
      B(t, r);
      throw new R.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
    }
    if (e < 0) {
      throw new R.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new R.ERR_OUT_OF_RANGE(r || "offset", `>= ${+!!r} and <= ${e}`, t);
  }
  S("ERR_BUFFER_OUT_OF_BOUNDS", function (t) {
    if (t) {
      return `${t} is outside of buffer bounds`;
    } else {
      return "Attempt to access memory outside buffer bounds";
    }
  }, RangeError);
  S("ERR_INVALID_ARG_TYPE", function (t, e) {
    return `The "${t}" argument must be of type number. Received type ${typeof e}`;
  }, TypeError);
  S("ERR_OUT_OF_RANGE", function (t, e, r) {
    let n = `The value of "${t}" is out of range.`;
    let o = r;
    if (Number.isInteger(r) && Math.abs(r) > 4294967296) {
      o = N(String(r));
    } else if (typeof r == "bigint") {
      o = String(r);
      if (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) {
        o = N(o);
      }
      o += "n";
    }
    return n += ` It must be ${e}. Received ${o}`;
  }, RangeError);
  let L = /[^+/0-9A-Za-z-_]/g;
  function G(t, e) {
    let r;
    e = e || Infinity;
    let n = t.length;
    let o = null;
    let a = [];
    for (let i = 0; i < n; ++i) {
      if ((r = t.charCodeAt(i)) > 55295 && r < 57344) {
        if (!o) {
          if (r > 56319 || i + 1 === n) {
            if ((e -= 3) > -1) {
              a.push(239, 191, 189);
            }
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          if ((e -= 3) > -1) {
            a.push(239, 191, 189);
          }
          o = r;
          continue;
        }
        r = (o - 55296 << 10 | r - 56320) + 65536;
      } else if (o && (e -= 3) > -1) {
        a.push(239, 191, 189);
      }
      o = null;
      if (r < 128) {
        if ((e -= 1) < 0) {
          break;
        }
        a.push(r);
      } else if (r < 2048) {
        if ((e -= 2) < 0) {
          break;
        }
        a.push(r >> 6 | 192, r & 63 | 128);
      } else if (r < 65536) {
        if ((e -= 3) < 0) {
          break;
        }
        a.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
      } else if (r < 1114112) {
        if ((e -= 4) < 0) {
          break;
        }
        a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
      } else {
        throw Error("Invalid code point");
      }
    }
    return a;
  }
  function C(t) {
    return base64EncodeDecode.toByteArray(function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(L, "")).length < 2) {
        return "";
      }
      while (t.length % 4 != 0) {
        t += "=";
      }
      return t;
    }(t));
  }
  function v(t, e, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= e.length) && !(o >= t.length); ++o) {
      e[o + r] = t[o];
    }
    return o;
  }
  function P(t, e) {
    return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
  }
  let F = function () {
    let t = "0123456789abcdef";
    let e = Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) {
        e[n + o] = t[r] + t[o];
      }
    }
    return e;
  }();
  function M(t) {
    if (typeof BigInt == "undefined") {
      return U;
    } else {
      return t;
    }
  }
  function U() {
    throw Error("BigInt not supported");
  }
}