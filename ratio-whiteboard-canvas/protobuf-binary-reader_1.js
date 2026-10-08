// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 842116
         */
module.exports = function (module, exports, require) {
  module.exports = l;
  var n;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  var i = protobufUtilityModule_3.LongBits;
  var a = protobufUtilityModule_3.utf8;
  function s(e, t) {
    return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
  }
  function l(e) {
    this.buf = e;
    this.pos = 0;
    this.len = e.length;
  }
  var c = typeof Uint8Array != "undefined" ? function (e) {
    if (e instanceof Uint8Array || Array.isArray(e)) {
      return new l(e);
    }
    throw Error("illegal buffer");
  } : function (e) {
    if (Array.isArray(e)) {
      return new l(e);
    }
    throw Error("illegal buffer");
  };
  function u() {
    if (protobufUtilityModule_3.Buffer) {
      return function (e) {
        return (l.create = function (e) {
          if (protobufUtilityModule_3.Buffer.isBuffer(e)) {
            return new n(e);
          } else {
            return c(e);
          }
        })(e);
      };
    } else {
      return c;
    }
  }
  function p() {
    var e = new i(0, 0);
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
          throw s(this);
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
          throw s(this);
        }
        e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128) {
          return e;
        }
      }
    }
    throw Error("invalid varint encoding");
  }
  function d(e, t) {
    return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
  }
  function f() {
    if (this.pos + 8 > this.len) {
      throw s(this, 8);
    }
    return new i(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
  }
  l.create = u();
  l.prototype._slice = protobufUtilityModule_3.Array.prototype.subarray || protobufUtilityModule_3.Array.prototype.slice;
  l.prototype.uint32 = function () {
    var e = 4294967295;
    return function () {
      e = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) {
        return e;
      }
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw s(this, 10);
      }
      return e;
    };
  }();
  l.prototype.int32 = function () {
    return this.uint32() | 0;
  };
  l.prototype.sint32 = function () {
    var e = this.uint32();
    return e >>> 1 ^ -(e & 1) | 0;
  };
  l.prototype.bool = function () {
    return this.uint32() !== 0;
  };
  l.prototype.fixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw s(this, 4);
    }
    return d(this.buf, this.pos += 4);
  };
  l.prototype.sfixed32 = function () {
    if (this.pos + 4 > this.len) {
      throw s(this, 4);
    }
    return d(this.buf, this.pos += 4) | 0;
  };
  l.prototype.float = function () {
    if (this.pos + 4 > this.len) {
      throw s(this, 4);
    }
    var e = protobufUtilityModule_3.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return e;
  };
  l.prototype.double = function () {
    if (this.pos + 8 > this.len) {
      throw s(this, 4);
    }
    var e = protobufUtilityModule_3.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return e;
  };
  l.prototype.bytes = function () {
    var e = this.uint32();
    var t = this.pos;
    var o = this.pos + e;
    if (o > this.len) {
      throw s(this, e);
    }
    this.pos += e;
    if (Array.isArray(this.buf)) {
      return this.buf.slice(t, o);
    } else if (t === o) {
      return new this.buf.constructor(0);
    } else {
      return this._slice.call(this.buf, t, o);
    }
  };
  l.prototype.string = function () {
    var e = this.bytes();
    return a.read(e, 0, e.length);
  };
  l.prototype.skip = function (e) {
    if (typeof e == "number") {
      if (this.pos + e > this.len) {
        throw s(this, e);
      }
      this.pos += e;
    } else {
      do {
        if (this.pos >= this.len) {
          throw s(this);
        }
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  l.prototype.skipType = function (e) {
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
  l._configure = function (e) {
    n = e;
    l.create = u();
    n._configure();
    var t = protobufUtilityModule_3.Long ? "toLong" : "toNumber";
    protobufUtilityModule_3.merge(l.prototype, {
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