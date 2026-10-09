// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'base64EncodeDecode'
// - Resolved require(673582) to 'base64-encode-decode'
// - Renamed variable 'i' to 'ieee754FloatBufferUtils'
// - Resolved require(903754) to 'ieee754-float-buffer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 989572
         */
module.exports = function (module, exports, require) {
  var base64EncodeDecode = require("base64-encode-decode") /*id: 673582*/;
  var ieee754FloatBufferUtils = require("ieee754-float-buffer-utils") /*id: 903754*/;
  var o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  function a(e) {
    if (e > 2147483647) {
      throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
    }
    var t = new Uint8Array(e);
    Object.setPrototypeOf(t, s.prototype);
    return t;
  }
  function s(e, t, n) {
    if (typeof e == "number") {
      if (typeof t == "string") {
        throw TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return l(e);
    }
    return u(e, t, n);
  }
  function u(e, t, n) {
    if (typeof e == "string") {
      return function (e, t) {
        if (typeof t != "string" || t === "") {
          t = "utf8";
        }
        if (!s.isEncoding(t)) {
          throw TypeError("Unknown encoding: " + t);
        }
        var n = p(e, t) | 0;
        var r = a(n);
        var i = r.write(e, t);
        if (i !== n) {
          r = r.slice(0, i);
        }
        return r;
      }(e, t);
    }
    if (ArrayBuffer.isView(e)) {
      return function (e) {
        if (R(e, Uint8Array)) {
          var t = new Uint8Array(e);
          return h(t.buffer, t.byteOffset, t.byteLength);
        }
        return f(e);
      }(e);
    }
    if (e == null) {
      throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    if (R(e, ArrayBuffer) || e && R(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer != "undefined" && (R(e, SharedArrayBuffer) || e && R(e.buffer, SharedArrayBuffer))) {
      return h(e, t, n);
    }
    if (typeof e == "number") {
      throw TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var r = e.valueOf && e.valueOf();
    if (r != null && r !== e) {
      return s.from(r, t, n);
    }
    var i = function (e) {
      if (s.isBuffer(e)) {
        var t = d(e.length) | 0;
        var n = a(t);
        if (n.length !== 0) {
          e.copy(n, 0, 0, t);
        }
        return n;
      }
      if (e.length !== undefined) {
        if (typeof e.length != "number" || function (e) {
          return e != e;
        }(e.length)) {
          return a(0);
        } else {
          return f(e);
        }
      } else if (e.type === "Buffer" && Array.isArray(e.data)) {
        return f(e.data);
      } else {
        return undefined;
      }
    }(e);
    if (i) {
      return i;
    }
    if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") {
      return s.from(e[Symbol.toPrimitive]("string"), t, n);
    }
    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
  }
  function c(e) {
    if (typeof e != "number") {
      throw TypeError("\"size\" argument must be of type number");
    }
    if (e < 0) {
      throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
    }
  }
  function l(e) {
    c(e);
    return a(e < 0 ? 0 : d(e) | 0);
  }
  function f(e) {
    var t = e.length < 0 ? 0 : d(e.length) | 0;
    var n = a(t);
    var r = 0;
    for (; r < t; r += 1) {
      n[r] = e[r] & 255;
    }
    return n;
  }
  function h(e, t, n) {
    var r;
    if (t < 0 || e.byteLength < t) {
      throw RangeError("\"offset\" is outside of buffer bounds");
    }
    if (e.byteLength < t + (n || 0)) {
      throw RangeError("\"length\" is outside of buffer bounds");
    }
    Object.setPrototypeOf(r = t === undefined && n === undefined ? new Uint8Array(e) : n === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, n), s.prototype);
    return r;
  }
  function d(e) {
    if (e >= 2147483647) {
      throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    }
    return e | 0;
  }
  function p(e, t) {
    if (s.isBuffer(e)) {
      return e.length;
    }
    if (ArrayBuffer.isView(e) || R(e, ArrayBuffer)) {
      return e.byteLength;
    }
    if (typeof e != "string") {
      throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
    }
    var n = e.length;
    var r = arguments.length > 2 && arguments[2] === true;
    if (!r && n === 0) {
      return 0;
    }
    var i = false;
    for (;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return O(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return A(e).length;
        default:
          if (i) {
            if (r) {
              return -1;
            } else {
              return O(e).length;
            }
          }
          t = ("" + t).toLowerCase();
          i = true;
      }
    }
  }
  function g(e, t, n) {
    var i;
    var o;
    var a;
    var s = false;
    if (t === undefined || t < 0) {
      t = 0;
    }
    if (t > this.length || ((n === undefined || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) {
      return "";
    }
    for (e ||= "utf8";;) {
      switch (e) {
        case "hex":
          return function (e, t, n) {
            var r = e.length;
            if (!t || t < 0) {
              t = 0;
            }
            if (!n || n < 0 || n > r) {
              n = r;
            }
            var i = "";
            var o = t;
            for (; o < n; ++o) {
              i += C[e[o]];
            }
            return i;
          }(this, t, n);
        case "utf8":
        case "utf-8":
          return b(this, t, n);
        case "ascii":
          return function (e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) {
              r += String.fromCharCode(e[i] & 127);
            }
            return r;
          }(this, t, n);
        case "latin1":
        case "binary":
          return function (e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) {
              r += String.fromCharCode(e[i]);
            }
            return r;
          }(this, t, n);
        case "base64":
          i = this;
          o = t;
          a = n;
          if (o === 0 && a === i.length) {
            return base64EncodeDecode.fromByteArray(i);
          } else {
            return base64EncodeDecode.fromByteArray(i.slice(o, a));
          }
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return function (e, t, n) {
            var r = e.slice(t, n);
            var i = "";
            var o = 0;
            for (; o < r.length - 1; o += 2) {
              i += String.fromCharCode(r[o] + r[o + 1] * 256);
            }
            return i;
          }(this, t, n);
        default:
          if (s) {
            throw TypeError("Unknown encoding: " + e);
          }
          e = (e + "").toLowerCase();
          s = true;
      }
    }
  }
  function v(e, t, n) {
    var r = e[t];
    e[t] = e[n];
    e[n] = r;
  }
  function m(e, t, n, r, i) {
    var o;
    if (e.length === 0) {
      return -1;
    }
    if (typeof n == "string") {
      r = n;
      n = 0;
    } else if (n > 2147483647) {
      n = 2147483647;
    } else if (n < -2147483648) {
      n = -2147483648;
    }
    if ((o = n *= 1) != o) {
      n = i ? 0 : e.length - 1;
    }
    if (n < 0) {
      n = e.length + n;
    }
    if (n >= e.length) {
      if (i) {
        return -1;
      }
      n = e.length - 1;
    } else if (n < 0) {
      if (!i) {
        return -1;
      }
      n = 0;
    }
    if (typeof t == "string") {
      t = s.from(t, r);
    }
    if (s.isBuffer(t)) {
      if (t.length === 0) {
        return -1;
      } else {
        return y(e, t, n, r, i);
      }
    }
    if (typeof t == "number") {
      t &= 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (i) {
          return Uint8Array.prototype.indexOf.call(e, t, n);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(e, t, n);
        }
      } else {
        return y(e, [t], n, r, i);
      }
    }
    throw TypeError("val must be string, number or Buffer");
  }
  function y(e, t, n, r, i) {
    var o;
    var a = 1;
    var s = e.length;
    var u = t.length;
    if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
      if (e.length < 2 || t.length < 2) {
        return -1;
      }
      a = 2;
      s /= 2;
      u /= 2;
      n /= 2;
    }
    function c(e, t) {
      if (a === 1) {
        return e[t];
      } else {
        return e.readUInt16BE(t * a);
      }
    }
    if (i) {
      var l = -1;
      for (o = n; o < s; o++) {
        if (c(e, o) === c(t, l === -1 ? 0 : o - l)) {
          if (l === -1) {
            l = o;
          }
          if (o - l + 1 === u) {
            return l * a;
          }
        } else {
          if (l !== -1) {
            o -= o - l;
          }
          l = -1;
        }
      }
    } else {
      if (n + u > s) {
        n = s - u;
      }
      o = n;
      for (; o >= 0; o--) {
        var f = true;
        var h = 0;
        for (; h < u; h++) {
          if (c(e, o + h) !== c(t, h)) {
            f = false;
            break;
          }
        }
        if (f) {
          return o;
        }
      }
    }
    return -1;
  }
  function b(e, t, n) {
    n = Math.min(e.length, n);
    var r = [];
    var i = t;
    while (i < n) {
      var o;
      var a;
      var s;
      var u;
      var c = e[i];
      var l = null;
      var f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (i + f <= n) {
        switch (f) {
          case 1:
            if (c < 128) {
              l = c;
            }
            break;
          case 2:
            if (((o = e[i + 1]) & 192) == 128 && (u = (c & 31) << 6 | o & 63) > 127) {
              l = u;
            }
            break;
          case 3:
            o = e[i + 1];
            a = e[i + 2];
            if ((o & 192) == 128 && (a & 192) == 128 && (u = (c & 15) << 12 | (o & 63) << 6 | a & 63) > 2047 && (u < 55296 || u > 57343)) {
              l = u;
            }
            break;
          case 4:
            o = e[i + 1];
            a = e[i + 2];
            s = e[i + 3];
            if ((o & 192) == 128 && (a & 192) == 128 && (s & 192) == 128 && (u = (c & 15) << 18 | (o & 63) << 12 | (a & 63) << 6 | s & 63) > 65535 && u < 1114112) {
              l = u;
            }
        }
      }
      if (l === null) {
        l = 65533;
        f = 1;
      } else if (l > 65535) {
        l -= 65536;
        r.push(l >>> 10 & 1023 | 55296);
        l = l & 1023 | 56320;
      }
      r.push(l);
      i += f;
    }
    return function (e) {
      var t = e.length;
      if (t <= 4096) {
        return String.fromCharCode.apply(String, e);
      }
      var n = "";
      var r = 0;
      while (r < t) {
        n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
      }
      return n;
    }(r);
  }
  function _(e, t, n) {
    if (e % 1 != 0 || e < 0) {
      throw RangeError("offset is not uint");
    }
    if (e + t > n) {
      throw RangeError("Trying to access beyond buffer length");
    }
  }
  function w(e, t, n, r, i, o) {
    if (!s.isBuffer(e)) {
      throw TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (t > i || t < o) {
      throw RangeError("\"value\" argument is out of bounds");
    }
    if (n + r > e.length) {
      throw RangeError("Index out of range");
    }
  }
  function E(e, t, n, r, i, o) {
    if (n + r > e.length || n < 0) {
      throw RangeError("Index out of range");
    }
  }
  function S(e, t, n, r, o) {
    t *= 1;
    n >>>= 0;
    if (!o) {
      E(e, t, n, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754FloatBufferUtils.write(e, t, n, r, 23, 4);
    return n + 4;
  }
  function x(e, t, n, r, o) {
    t *= 1;
    n >>>= 0;
    if (!o) {
      E(e, t, n, 8, 1.7976931348623157e+308, -1.7976931348623157e+308);
    }
    ieee754FloatBufferUtils.write(e, t, n, r, 52, 8);
    return n + 8;
  }
  exports.Buffer = s;
  exports.INSPECT_MAX_BYTES = 50;
  s.TYPED_ARRAY_SUPPORT = function () {
    try {
      var e = new Uint8Array(1);
      var t = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(t, Uint8Array.prototype);
      Object.setPrototypeOf(e, t);
      return e.foo() === 42;
    } catch (e) {
      return false;
    }
  }();
  s.TYPED_ARRAY_SUPPORT;
  Object.defineProperty(s.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (s.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(s.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (s.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  s.poolSize = 8192;
  s.from = function (e, t, n) {
    return u(e, t, n);
  };
  Object.setPrototypeOf(s.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(s, Uint8Array);
  s.alloc = function (e, t, n) {
    c(e);
    if (e <= 0) {
      return a(e);
    } else if (t !== undefined) {
      if (typeof n == "string") {
        return a(e).fill(t, n);
      } else {
        return a(e).fill(t);
      }
    } else {
      return a(e);
    }
  };
  s.allocUnsafe = function (e) {
    return l(e);
  };
  s.allocUnsafeSlow = function (e) {
    return l(e);
  };
  s.isBuffer = function (e) {
    return e != null && e._isBuffer === true && e !== s.prototype;
  };
  s.compare = function (e, t) {
    if (R(e, Uint8Array)) {
      e = s.from(e, e.offset, e.byteLength);
    }
    if (R(t, Uint8Array)) {
      t = s.from(t, t.offset, t.byteLength);
    }
    if (!s.isBuffer(e) || !s.isBuffer(t)) {
      throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (e === t) {
      return 0;
    }
    var n = e.length;
    var r = t.length;
    var i = 0;
    var o = Math.min(n, r);
    for (; i < o; ++i) {
      if (e[i] !== t[i]) {
        n = e[i];
        r = t[i];
        break;
      }
    }
    if (n < r) {
      return -1;
    } else {
      return +(r < n);
    }
  };
  s.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
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
  s.concat = function (e, t) {
    if (!Array.isArray(e)) {
      throw TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (e.length === 0) {
      return s.alloc(0);
    }
    if (t === undefined) {
      n = 0;
      t = 0;
      for (; n < e.length; ++n) {
        t += e[n].length;
      }
    }
    var n;
    var r = s.allocUnsafe(t);
    var i = 0;
    for (n = 0; n < e.length; ++n) {
      var o = e[n];
      if (R(o, Uint8Array)) {
        if (i + o.length > r.length) {
          s.from(o).copy(r, i);
        } else {
          Uint8Array.prototype.set.call(r, o, i);
        }
      } else if (s.isBuffer(o)) {
        o.copy(r, i);
      } else {
        throw TypeError("\"list\" argument must be an Array of Buffers");
      }
      i += o.length;
    }
    return r;
  };
  s.byteLength = p;
  s.prototype._isBuffer = true;
  s.prototype.swap16 = function () {
    var e = this.length;
    if (e % 2 != 0) {
      throw RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var t = 0; t < e; t += 2) {
      v(this, t, t + 1);
    }
    return this;
  };
  s.prototype.swap32 = function () {
    var e = this.length;
    if (e % 4 != 0) {
      throw RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var t = 0; t < e; t += 4) {
      v(this, t, t + 3);
      v(this, t + 1, t + 2);
    }
    return this;
  };
  s.prototype.swap64 = function () {
    var e = this.length;
    if (e % 8 != 0) {
      throw RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var t = 0; t < e; t += 8) {
      v(this, t, t + 7);
      v(this, t + 1, t + 6);
      v(this, t + 2, t + 5);
      v(this, t + 3, t + 4);
    }
    return this;
  };
  s.prototype.toString = function () {
    var e = this.length;
    if (e === 0) {
      return "";
    } else if (arguments.length == 0) {
      return b(this, 0, e);
    } else {
      return g.apply(this, arguments);
    }
  };
  s.prototype.toLocaleString = s.prototype.toString;
  s.prototype.equals = function (e) {
    if (!s.isBuffer(e)) {
      throw TypeError("Argument must be a Buffer");
    }
    return this === e || s.compare(this, e) === 0;
  };
  s.prototype.inspect = function () {
    var e = "";
    var n = exports.INSPECT_MAX_BYTES;
    e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > n) {
      e += " ... ";
    }
    return "<Buffer " + e + ">";
  };
  if (o) {
    s.prototype[o] = s.prototype.inspect;
  }
  s.prototype.compare = function (e, t, n, r, i) {
    if (R(e, Uint8Array)) {
      e = s.from(e, e.offset, e.byteLength);
    }
    if (!s.isBuffer(e)) {
      throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
    }
    if (t === undefined) {
      t = 0;
    }
    if (n === undefined) {
      n = e ? e.length : 0;
    }
    if (r === undefined) {
      r = 0;
    }
    if (i === undefined) {
      i = this.length;
    }
    if (t < 0 || n > e.length || r < 0 || i > this.length) {
      throw RangeError("out of range index");
    }
    if (r >= i && t >= n) {
      return 0;
    }
    if (r >= i) {
      return -1;
    }
    if (t >= n) {
      return 1;
    }
    t >>>= 0;
    n >>>= 0;
    r >>>= 0;
    i >>>= 0;
    if (this === e) {
      return 0;
    }
    var o = i - r;
    var a = n - t;
    var u = Math.min(o, a);
    var c = this.slice(r, i);
    var l = e.slice(t, n);
    var f = 0;
    for (; f < u; ++f) {
      if (c[f] !== l[f]) {
        o = c[f];
        a = l[f];
        break;
      }
    }
    if (o < a) {
      return -1;
    } else {
      return +(a < o);
    }
  };
  s.prototype.includes = function (e, t, n) {
    return this.indexOf(e, t, n) !== -1;
  };
  s.prototype.indexOf = function (e, t, n) {
    return m(this, e, t, n, true);
  };
  s.prototype.lastIndexOf = function (e, t, n) {
    return m(this, e, t, n, false);
  };
  s.prototype.write = function (e, t, n, r) {
    if (t === undefined) {
      r = "utf8";
      n = this.length;
      t = 0;
    } else if (n === undefined && typeof t == "string") {
      r = t;
      n = this.length;
      t = 0;
    } else if (isFinite(t)) {
      t >>>= 0;
      if (isFinite(n)) {
        n >>>= 0;
        if (r === undefined) {
          r = "utf8";
        }
      } else {
        r = n;
        n = undefined;
      }
    } else {
      throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    var i;
    var o;
    var a;
    var s;
    var u;
    var c;
    var l;
    var f;
    var h = this.length - t;
    if (n === undefined || n > h) {
      n = h;
    }
    if (e.length > 0 && (n < 0 || t < 0) || t > this.length) {
      throw RangeError("Attempt to write outside buffer bounds");
    }
    r ||= "utf8";
    var d = false;
    for (;;) {
      switch (r) {
        case "hex":
          return function (e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            if (r) {
              if ((r = Number(r)) > i) {
                r = i;
              }
            } else {
              r = i;
            }
            var o = t.length;
            if (r > o / 2) {
              r = o / 2;
            }
            for (var a = 0; a < r; ++a) {
              var s;
              var u = parseInt(t.substr(a * 2, 2), 16);
              if ((s = u) != s) {
                break;
              }
              e[n + a] = u;
            }
            return a;
          }(this, e, t, n);
        case "utf8":
        case "utf-8":
          i = t;
          o = n;
          return T(O(e, this.length - i), this, i, o);
        case "ascii":
        case "latin1":
        case "binary":
          a = t;
          s = n;
          return T(function (e) {
            var t = [];
            var n = 0;
            for (; n < e.length; ++n) {
              t.push(e.charCodeAt(n) & 255);
            }
            return t;
          }(e), this, a, s);
        case "base64":
          u = t;
          c = n;
          return T(A(e), this, u, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          l = t;
          f = n;
          return T(function (e, t) {
            var n;
            var r;
            var i = [];
            var o = 0;
            for (; o < e.length && !((t -= 2) < 0); ++o) {
              r = (n = e.charCodeAt(o)) >> 8;
              i.push(n % 256);
              i.push(r);
            }
            return i;
          }(e, this.length - l), this, l, f);
        default:
          if (d) {
            throw TypeError("Unknown encoding: " + r);
          }
          r = ("" + r).toLowerCase();
          d = true;
      }
    }
  };
  s.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  s.prototype.slice = function (e, t) {
    var n = this.length;
    e = ~~e;
    t = t === undefined ? n : ~~t;
    if (e < 0) {
      if ((e += n) < 0) {
        e = 0;
      }
    } else if (e > n) {
      e = n;
    }
    if (t < 0) {
      if ((t += n) < 0) {
        t = 0;
      }
    } else if (t > n) {
      t = n;
    }
    if (t < e) {
      t = e;
    }
    var r = this.subarray(e, t);
    Object.setPrototypeOf(r, s.prototype);
    return r;
  };
  s.prototype.readUintLE = s.prototype.readUIntLE = function (e, t, n) {
    e >>>= 0;
    t >>>= 0;
    if (!n) {
      _(e, t, this.length);
    }
    var r = this[e];
    var i = 1;
    var o = 0;
    while (++o < t && (i *= 256)) {
      r += this[e + o] * i;
    }
    return r;
  };
  s.prototype.readUintBE = s.prototype.readUIntBE = function (e, t, n) {
    e >>>= 0;
    t >>>= 0;
    if (!n) {
      _(e, t, this.length);
    }
    var r = this[e + --t];
    var i = 1;
    while (t > 0 && (i *= 256)) {
      r += this[e + --t] * i;
    }
    return r;
  };
  s.prototype.readUint8 = s.prototype.readUInt8 = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 1, this.length);
    }
    return this[e];
  };
  s.prototype.readUint16LE = s.prototype.readUInt16LE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 2, this.length);
    }
    return this[e] | this[e + 1] << 8;
  };
  s.prototype.readUint16BE = s.prototype.readUInt16BE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 2, this.length);
    }
    return this[e] << 8 | this[e + 1];
  };
  s.prototype.readUint32LE = s.prototype.readUInt32LE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  };
  s.prototype.readUint32BE = s.prototype.readUInt32BE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  };
  s.prototype.readIntLE = function (e, t, n) {
    e >>>= 0;
    t >>>= 0;
    if (!n) {
      _(e, t, this.length);
    }
    var r = this[e];
    var i = 1;
    var o = 0;
    while (++o < t && (i *= 256)) {
      r += this[e + o] * i;
    }
    if (r >= (i *= 128)) {
      r -= Math.pow(2, t * 8);
    }
    return r;
  };
  s.prototype.readIntBE = function (e, t, n) {
    e >>>= 0;
    t >>>= 0;
    if (!n) {
      _(e, t, this.length);
    }
    var r = t;
    var i = 1;
    var o = this[e + --r];
    while (r > 0 && (i *= 256)) {
      o += this[e + --r] * i;
    }
    if (o >= (i *= 128)) {
      o -= Math.pow(2, t * 8);
    }
    return o;
  };
  s.prototype.readInt8 = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 1, this.length);
    }
    if (this[e] & 128) {
      return -((255 - this[e] + 1) * 1);
    } else {
      return this[e];
    }
  };
  s.prototype.readInt16LE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 2, this.length);
    }
    var n = this[e] | this[e + 1] << 8;
    if (n & 32768) {
      return n | -65536;
    } else {
      return n;
    }
  };
  s.prototype.readInt16BE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 2, this.length);
    }
    var n = this[e + 1] | this[e] << 8;
    if (n & 32768) {
      return n | -65536;
    } else {
      return n;
    }
  };
  s.prototype.readInt32LE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  };
  s.prototype.readInt32BE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  };
  s.prototype.readFloatLE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return ieee754FloatBufferUtils.read(this, e, true, 23, 4);
  };
  s.prototype.readFloatBE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 4, this.length);
    }
    return ieee754FloatBufferUtils.read(this, e, false, 23, 4);
  };
  s.prototype.readDoubleLE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 8, this.length);
    }
    return ieee754FloatBufferUtils.read(this, e, true, 52, 8);
  };
  s.prototype.readDoubleBE = function (e, t) {
    e >>>= 0;
    if (!t) {
      _(e, 8, this.length);
    }
    return ieee754FloatBufferUtils.read(this, e, false, 52, 8);
  };
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function (e, t, n, r) {
    e *= 1;
    t >>>= 0;
    n >>>= 0;
    if (!r) {
      var i = Math.pow(2, n * 8) - 1;
      w(this, e, t, n, i, 0);
    }
    var o = 1;
    var a = 0;
    for (this[t] = e & 255; ++a < n && (o *= 256);) {
      this[t + a] = e / o & 255;
    }
    return t + n;
  };
  s.prototype.writeUintBE = s.prototype.writeUIntBE = function (e, t, n, r) {
    e *= 1;
    t >>>= 0;
    n >>>= 0;
    if (!r) {
      var i = Math.pow(2, n * 8) - 1;
      w(this, e, t, n, i, 0);
    }
    var o = n - 1;
    var a = 1;
    for (this[t + o] = e & 255; --o >= 0 && (a *= 256);) {
      this[t + o] = e / a & 255;
    }
    return t + n;
  };
  s.prototype.writeUint8 = s.prototype.writeUInt8 = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 1, 255, 0);
    }
    this[t] = e & 255;
    return t + 1;
  };
  s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 2, 65535, 0);
    }
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
    return t + 2;
  };
  s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 2, 65535, 0);
    }
    this[t] = e >>> 8;
    this[t + 1] = e & 255;
    return t + 2;
  };
  s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 4, 4294967295, 0);
    }
    this[t + 3] = e >>> 24;
    this[t + 2] = e >>> 16;
    this[t + 1] = e >>> 8;
    this[t] = e & 255;
    return t + 4;
  };
  s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 4, 4294967295, 0);
    }
    this[t] = e >>> 24;
    this[t + 1] = e >>> 16;
    this[t + 2] = e >>> 8;
    this[t + 3] = e & 255;
    return t + 4;
  };
  s.prototype.writeIntLE = function (e, t, n, r) {
    e *= 1;
    t >>>= 0;
    if (!r) {
      var i = Math.pow(2, n * 8 - 1);
      w(this, e, t, n, i - 1, -i);
    }
    var o = 0;
    var a = 1;
    var s = 0;
    for (this[t] = e & 255; ++o < n && (a *= 256);) {
      if (e < 0 && s === 0 && this[t + o - 1] !== 0) {
        s = 1;
      }
      this[t + o] = (e / a >> 0) - s & 255;
    }
    return t + n;
  };
  s.prototype.writeIntBE = function (e, t, n, r) {
    e *= 1;
    t >>>= 0;
    if (!r) {
      var i = Math.pow(2, n * 8 - 1);
      w(this, e, t, n, i - 1, -i);
    }
    var o = n - 1;
    var a = 1;
    var s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (a *= 256);) {
      if (e < 0 && s === 0 && this[t + o + 1] !== 0) {
        s = 1;
      }
      this[t + o] = (e / a >> 0) - s & 255;
    }
    return t + n;
  };
  s.prototype.writeInt8 = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 1, 127, -128);
    }
    if (e < 0) {
      e = 255 + e + 1;
    }
    this[t] = e & 255;
    return t + 1;
  };
  s.prototype.writeInt16LE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 2, 32767, -32768);
    }
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
    return t + 2;
  };
  s.prototype.writeInt16BE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 2, 32767, -32768);
    }
    this[t] = e >>> 8;
    this[t + 1] = e & 255;
    return t + 2;
  };
  s.prototype.writeInt32LE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 4, 2147483647, -2147483648);
    }
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
    this[t + 2] = e >>> 16;
    this[t + 3] = e >>> 24;
    return t + 4;
  };
  s.prototype.writeInt32BE = function (e, t, n) {
    e *= 1;
    t >>>= 0;
    if (!n) {
      w(this, e, t, 4, 2147483647, -2147483648);
    }
    if (e < 0) {
      e = 4294967295 + e + 1;
    }
    this[t] = e >>> 24;
    this[t + 1] = e >>> 16;
    this[t + 2] = e >>> 8;
    this[t + 3] = e & 255;
    return t + 4;
  };
  s.prototype.writeFloatLE = function (e, t, n) {
    return S(this, e, t, true, n);
  };
  s.prototype.writeFloatBE = function (e, t, n) {
    return S(this, e, t, false, n);
  };
  s.prototype.writeDoubleLE = function (e, t, n) {
    return x(this, e, t, true, n);
  };
  s.prototype.writeDoubleBE = function (e, t, n) {
    return x(this, e, t, false, n);
  };
  s.prototype.copy = function (e, t, n, r) {
    if (!s.isBuffer(e)) {
      throw TypeError("argument should be a Buffer");
    }
    n ||= 0;
    if (!r && r !== 0) {
      r = this.length;
    }
    if (t >= e.length) {
      t = e.length;
    }
    t ||= 0;
    if (r > 0 && r < n) {
      r = n;
    }
    if (r === n || e.length === 0 || this.length === 0) {
      return 0;
    }
    if (t < 0) {
      throw RangeError("targetStart out of bounds");
    }
    if (n < 0 || n >= this.length) {
      throw RangeError("Index out of range");
    }
    if (r < 0) {
      throw RangeError("sourceEnd out of bounds");
    }
    if (r > this.length) {
      r = this.length;
    }
    if (e.length - t < r - n) {
      r = e.length - t + n;
    }
    var i = r - n;
    if (this === e && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(t, n, r);
    } else {
      Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
    }
    return i;
  };
  s.prototype.fill = function (e, t, n, r) {
    if (typeof e == "string") {
      if (typeof t == "string") {
        r = t;
        t = 0;
        n = this.length;
      } else if (typeof n == "string") {
        r = n;
        n = this.length;
      }
      if (r !== undefined && typeof r != "string") {
        throw TypeError("encoding must be a string");
      }
      if (typeof r == "string" && !s.isEncoding(r)) {
        throw TypeError("Unknown encoding: " + r);
      }
      if (e.length === 1) {
        var i;
        var o = e.charCodeAt(0);
        if (r === "utf8" && o < 128 || r === "latin1") {
          e = o;
        }
      }
    } else if (typeof e == "number") {
      e &= 255;
    } else if (typeof e == "boolean") {
      e = Number(e);
    }
    if (t < 0 || this.length < t || this.length < n) {
      throw RangeError("Out of range index");
    }
    if (n <= t) {
      return this;
    }
    t >>>= 0;
    n = n === undefined ? this.length : n >>> 0;
    e ||= 0;
    if (typeof e == "number") {
      for (i = t; i < n; ++i) {
        this[i] = e;
      }
    } else {
      var a = s.isBuffer(e) ? e : s.from(e, r);
      var u = a.length;
      if (u === 0) {
        throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
      }
      for (i = 0; i < n - t; ++i) {
        this[i + t] = a[i % u];
      }
    }
    return this;
  };
  var k = /[^+/0-9A-Za-z-_]/g;
  function O(e, t) {
    t = t || Infinity;
    var n;
    var r = e.length;
    var i = null;
    var o = [];
    var a = 0;
    for (; a < r; ++a) {
      if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
        if (!i) {
          if (n > 56319 || a + 1 === r) {
            if ((t -= 3) > -1) {
              o.push(239, 191, 189);
            }
            continue;
          }
          i = n;
          continue;
        }
        if (n < 56320) {
          if ((t -= 3) > -1) {
            o.push(239, 191, 189);
          }
          i = n;
          continue;
        }
        n = (i - 55296 << 10 | n - 56320) + 65536;
      } else if (i && (t -= 3) > -1) {
        o.push(239, 191, 189);
      }
      i = null;
      if (n < 128) {
        if ((t -= 1) < 0) {
          break;
        }
        o.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0) {
          break;
        }
        o.push(n >> 6 | 192, n & 63 | 128);
      } else if (n < 65536) {
        if ((t -= 3) < 0) {
          break;
        }
        o.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
      } else if (n < 1114112) {
        if ((t -= 4) < 0) {
          break;
        }
        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
      } else {
        throw Error("Invalid code point");
      }
    }
    return o;
  }
  function A(e) {
    return base64EncodeDecode.toByteArray(function (e) {
      if ((e = (e = e.split("=")[0]).trim().replace(k, "")).length < 2) {
        return "";
      }
      while (e.length % 4 != 0) {
        e += "=";
      }
      return e;
    }(e));
  }
  function T(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) {
      t[i + n] = e[i];
    }
    return i;
  }
  function R(e, t) {
    return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
  }
  var C = function () {
    var e = "0123456789abcdef";
    var t = Array(256);
    var n = 0;
    for (; n < 16; ++n) {
      var r = n * 16;
      var i = 0;
      for (; i < 16; ++i) {
        t[r + i] = e[n] + e[i];
      }
    }
    return t;
  }();
}