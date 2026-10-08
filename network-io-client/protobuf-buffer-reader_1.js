// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 871389
         */
module.exports = function (module, exports, require) {
  module.exports = c;
  var n;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  var s = protobufUtilityModule_2.LongBits;
  var o = protobufUtilityModule_2.utf8;
  function a(e, t) {
    return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
  }
  function c(e) {
    this.buf = e;
    this.pos = 0;
    this.len = e.length;
  }
  var l = typeof Uint8Array != "undefined" ? function (e) {
    if (e instanceof Uint8Array || Array.isArray(e)) {
      return new c(e);
    }
    throw Error("illegal buffer");
  } : function (e) {
    if (Array.isArray(e)) {
      return new c(e);
    }
    throw Error("illegal buffer");
  };
  function h() {
    var e = new s(0, 0);
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
          throw a(this);
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
          throw a(this);
        }
        e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
    }
    throw Error("invalid varint encoding");
  }
  function u(e, t) {
    return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
  }
  function f() {
    if (this.pos + 8 > this.len) {
      throw a(this, 8);
    }
    return new s(u(this.buf, this.pos += 4), u(this.buf, this.pos += 4));
  }
  c.create = protobufUtilityModule_2.Buffer ? function (e) {
    return (c.create = function (e) {
      if (protobufUtilityModule_2.Buffer.isBuffer(e)) {
        return new n(e);
      } else {
        return l(e);
      }
    })(e);
  } : l;
  c.prototype._slice = protobufUtilityModule_2.Array.prototype.subarray || protobufUtilityModule_2.Array.prototype.slice;
  c.prototype.uint32 = function () {
    var e = 4294967295;
    return function () {
      e = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) {
        return e;
      }
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw a(this, 10);
      }
      return e;
    };
  }();
  c.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  c.prototype.sint32 = function () {
    var e = this.uint32();
    return e >>> 1 ^ -(e & 1) | 0;
  };
  c.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  c.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw a(this, 4);
    }
    return u(this.buf, this.pos += 4);
  };
  c.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw a(this, 4);
    }
    return u(this.buf, this.pos += 4) | 0;
  };
  c.prototype.float = function () {
    if (this.pos + 4 > this.len) {
      throw a(this, 4);
    }
    var e = protobufUtilityModule_2.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return e;
  };
  c.prototype.double = function () {
    if (this.pos + 8 > this.len) {
      throw a(this, 4);
    }
    var e = protobufUtilityModule_2.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return e;
  };
  c.prototype.bytes = function () {
    var e = this.uint32();
    var t = this.pos;
    var r = this.pos + e;
    if (r > this.len) {
      throw a(this, e);
    }
    this.pos += e;
    if (Array.isArray(this.buf)) {
      return this.buf.slice(t, r);
    } else if (t === r) {
      return new this.buf.constructor(0);
    } else {
      return this._slice.call(this.buf, t, r);
    }
  };
  c.prototype.string = function () {
    var e = this.bytes();
    return o.read(e, 0, e.length);
  };
  c.prototype.skip = function (e) {
    if (typeof e == "number") {
      if (this.pos + e > this.len) {
        throw a(this, e);
      }
      this.pos += e;
    } else {
      do {
        if (this.pos >= this.len) {
          throw a(this);
        }
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  c.prototype.skipType = function (e) {
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
  c._configure = function (e) {
    n = e;
    var t = protobufUtilityModule_2.Long ? "toLong" : "toNumber";
    protobufUtilityModule_2.merge(c.prototype, {
      int64: function () {
        return h.call(this)[t](false);
      },
      uint64: function () {
        return h.call(this)[t](true);
      },
      sint64: function () {
        return h.call(this).zzDecode()[t](false);
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