// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 68776
         */
module.exports = function (module, exports, require) {
  module.exports = i;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  function i(e, t) {
    this.lo = e >>> 0;
    this.hi = t >>> 0;
  }
  var s = i.zero = new i(0, 0);
  s.toNumber = function () {
    return 0;
  };
  s.zzEncode = s.zzDecode = function () {
    return this;
  };
  s.length = function () {
    return 1;
  };
  var o = i.zeroHash = "\0\0\0\0\0\0\0\0";
  i.fromNumber = function (e) {
    if (e === 0) {
      return s;
    }
    var t = e < 0;
    if (t) {
      e = -e;
    }
    var r = e >>> 0;
    var n = (e - r) / 4294967296 >>> 0;
    if (t) {
      n = ~n >>> 0;
      r = ~r >>> 0;
      if (++r > 4294967295) {
        r = 0;
        if (++n > 4294967295) {
          n = 0;
        }
      }
    }
    return new i(r, n);
  };
  i.from = function (e) {
    if (typeof e == "number") {
      return i.fromNumber(e);
    }
    if (protobufUtilityModule_2.isString(e)) {
      if (!protobufUtilityModule_2.Long) {
        return i.fromNumber(parseInt(e, 10));
      }
      e = protobufUtilityModule_2.Long.fromString(e);
    }
    if (e.low || e.high) {
      return new i(e.low >>> 0, e.high >>> 0);
    } else {
      return s;
    }
  };
  i.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var t = ~this.lo + 1 >>> 0;
      var r = ~this.hi >>> 0;
      if (!t) {
        r = r + 1 >>> 0;
      }
      return -(t + r * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  i.prototype.toLong = function (e) {
    if (protobufUtilityModule_2.Long) {
      return new protobufUtilityModule_2.Long(this.lo | 0, this.hi | 0, !!e);
    } else {
      return {
        low: this.lo | 0,
        high: this.hi | 0,
        unsigned: !!e
      };
    }
  };
  var a = String.prototype.charCodeAt;
  i.fromHash = function (e) {
    if (e === o) {
      return s;
    } else {
      return new i((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0);
    }
  };
  i.prototype.toHash = function () {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  i.prototype.zzEncode = function () {
    var e = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
    this.lo = (this.lo << 1 ^ e) >>> 0;
    return this;
  };
  i.prototype.zzDecode = function () {
    var e = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
    this.hi = (this.hi >>> 1 ^ e) >>> 0;
    return this;
  };
  i.prototype.length = function () {
    var e = this.lo;
    var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
    var r = this.hi >>> 24;
    if (r === 0) {
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
    } else if (r < 128) {
      return 9;
    } else {
      return 10;
    }
  };
}