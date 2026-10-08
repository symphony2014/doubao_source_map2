// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 413114
         */
module.exports = function (module, exports, require) {
  module.exports = u;
  var r;
  var n;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  var o = protobufUtilityModule.LongBits;
  var a = protobufUtilityModule.utf8;
  function l(e, t) {
    return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
  }
  function u(e) {
    this.buf = e;
    this.pos = 0;
    this.len = e.length;
  }
  var d = typeof Uint8Array != "undefined" ? function (e) {
    if (e instanceof Uint8Array || Array.isArray(e)) {
      return new u(e);
    }
    throw Error("illegal buffer");
  } : function (e) {
    if (Array.isArray(e)) {
      return new u(e);
    }
    throw Error("illegal buffer");
  };
  function c() {
    if (protobufUtilityModule.Buffer) {
      return function (e) {
        return (u.create = function (e) {
          if (protobufUtilityModule.Buffer.isBuffer(e)) {
            return new n(e);
          } else {
            return d(e);
          }
        })(e);
      };
    } else {
      return d;
    }
  }
  function p() {
    var e = new o(0, 0);
    var t = 0;
    if (this.len - this.pos > 4) {
      for (; t < 4; ++t) {
        e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
      e.lo = (e.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      e.hi = (e.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
      t = 0;
    } else {
      for (; t < 3; ++t) {
        if (this.pos >= this.len) {
          throw l(this);
        }
        e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
      e.lo = (e.lo | (this.buf[this.pos++] & 127) << t * 7) >>> 0;
      return e;
    }
    if (this.len - this.pos > 4) {
      for (; t < 5; ++t) {
        e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
    } else {
      for (; t < 5; ++t) {
        if (this.pos >= this.len) {
          throw l(this);
        }
        e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
    }
    throw Error("invalid varint encoding");
  }
  function h(e, t) {
    return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
  }
  function f() {
    if (this.pos + 8 > this.len) {
      throw l(this, 8);
    }
    return new o(h(this.buf, this.pos += 4), h(this.buf, this.pos += 4));
  }
  u.create = c();
  u.prototype._slice = protobufUtilityModule.Array.prototype.subarray || protobufUtilityModule.Array.prototype.slice;
  u.prototype.uint32 = (r = 4294967295, function () {
    r = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128 || (r = (r | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (r = (r | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) {
      return r;
    }
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw l(this, 10);
    }
    return r;
  });
  u.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  u.prototype.sint32 = function () {
    var e = this.uint32();
    return e >>> 1 ^ -(e & 1) | 0;
  };
  u.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  u.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw l(this, 4);
    }
    return h(this.buf, this.pos += 4);
  };
  u.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw l(this, 4);
    }
    return h(this.buf, this.pos += 4) | 0;
  };
  u.prototype.float = function () {
    if (this.pos + 4 > this.len) {
      throw l(this, 4);
    }
    var e = protobufUtilityModule.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return e;
  };
  u.prototype.double = function () {
    if (this.pos + 8 > this.len) {
      throw l(this, 4);
    }
    var e = protobufUtilityModule.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return e;
  };
  u.prototype.bytes = function () {
    var e = this.uint32();
    var t = this.pos;
    var i = this.pos + e;
    if (i > this.len) {
      throw l(this, e);
    }
    this.pos += e;
    if (Array.isArray(this.buf)) {
      return this.buf.slice(t, i);
    } else if (t === i) {
      return new this.buf.constructor(0);
    } else {
      return this._slice.call(this.buf, t, i);
    }
  };
  u.prototype.string = function () {
    var e = this.bytes();
    return a.read(e, 0, e.length);
  };
  u.prototype.skip = function (e) {
    if (typeof e == "number") {
      if (this.pos + e > this.len) {
        throw l(this, e);
      }
      this.pos += e;
    } else {
      do {
        if (this.pos >= this.len) {
          throw l(this);
        }
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  u.prototype.skipType = function (e) {
    switch (e) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((e = this.uint32() & 7) != 4) {
          this.skipType(e);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + e + " at offset " + this.pos);
    }
    return this;
  };
  u._configure = function (e) {
    n = e;
    u.create = c();
    n._configure();
    var t = protobufUtilityModule.Long ? "toLong" : "toNumber";
    protobufUtilityModule.merge(u.prototype, {
      int64: function () {
        return p.call(this)[t](false);
      },
      uint64: function () {
        return p.call(this)[t](true);
      },
      sint64: function () {
        return p.call(this).zzDecode()[t](false);
      },
      fixed64: function () {
        return f.call(this)[t](true);
      },
      sfixed64: function () {
        return f.call(this)[t](false);
      }
    });
  };
}