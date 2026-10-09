// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 301602
         */
module.exports = function (module, exports, require) {
  module.exports = r;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  function r(e, t) {
    this.lo = e >>> 0;
    this.hi = t >>> 0;
  }
  var i = r.zero = new r(0, 0);
  i.toNumber = function () {
    return 0;
  };
  i.zzEncode = i.zzDecode = function () {
    return this;
  };
  i.length = function () {
    return 1;
  };
  var a = r.zeroHash = "\0\0\0\0\0\0\0\0";
  r.fromNumber = function (e) {
    if (e === 0) {
      return i;
    }
    var t = e < 0;
    if (t) {
      e = -e;
    }
    var o = e >>> 0;
    var n = (e - o) / 4294967296 >>> 0;
    if (t) {
      n = ~n >>> 0;
      o = ~o >>> 0;
      if (++o > 4294967295) {
        o = 0;
        if (++n > 4294967295) {
          n = 0;
        }
      }
    }
    return new r(o, n);
  };
  r.from = function (e) {
    if (typeof e == "number") {
      return r.fromNumber(e);
    }
    if (protobufUtilityModule_3.isString(e)) {
      if (!protobufUtilityModule_3.Long) {
        return r.fromNumber(parseInt(e, 10));
      }
      e = protobufUtilityModule_3.Long.fromString(e);
    }
    if (e.low || e.high) {
      return new r(e.low >>> 0, e.high >>> 0);
    } else {
      return i;
    }
  };
  r.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var t = ~this.lo + 1 >>> 0;
      var o = ~this.hi >>> 0;
      if (!t) {
        o = o + 1 >>> 0;
      }
      return -(t + o * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  r.prototype.toLong = function (e) {
    if (protobufUtilityModule_3.Long) {
      return new protobufUtilityModule_3.Long(this.lo | 0, this.hi | 0, !!e);
    } else {
      return {
        low: this.lo | 0,
        high: this.hi | 0,
        unsigned: !!e
      };
    }
  };
  var s = String.prototype.charCodeAt;
  r.fromHash = function (e) {
    if (e === a) {
      return i;
    } else {
      return new r((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0);
    }
  };
  r.prototype.toHash = function () {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  r.prototype.zzEncode = function () {
    var e = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
    this.lo = (this.lo << 1 ^ e) >>> 0;
    return this;
  };
  r.prototype.zzDecode = function () {
    var e = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
    this.hi = (this.hi >>> 1 ^ e) >>> 0;
    return this;
  };
  r.prototype.length = function () {
    var e = this.lo;
    var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
    var o = this.hi >>> 24;
    if (o === 0) {
      if (t === 0) {
        if (e < 16384) {
          if (e < 128) {
            return 1;
          } else {
            return 2;
          }
        } else if (e < 2097152) {
          return 3;
        } else {
          return 4;
        }
      } else if (t < 16384) {
        if (t < 128) {
          return 5;
        } else {
          return 6;
        }
      } else if (t < 2097152) {
        return 7;
      } else {
        return 8;
      }
    } else if (o < 128) {
      return 9;
    } else {
      return 10;
    }
  };
}