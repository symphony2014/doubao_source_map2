// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 33725
         */
module.exports = function (module, exports, require) {
  module.exports = n;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  function n(e, t) {
    this.lo = e >>> 0;
    this.hi = t >>> 0;
  }
  var s = n.zero = new n(0, 0);
  s.toNumber = function () {
    return 0;
  };
  s.zzEncode = s.zzDecode = function () {
    return this;
  };
  s.length = function () {
    return 1;
  };
  var o = n.zeroHash = "\0\0\0\0\0\0\0\0";
  n.fromNumber = function (e) {
    if (e === 0) {
      return s;
    }
    var t = e < 0;
    if (t) {
      e = -e;
    }
    var i = e >>> 0;
    var r = (e - i) / 4294967296 >>> 0;
    if (t) {
      r = ~r >>> 0;
      i = ~i >>> 0;
      if (++i > 4294967295) {
        i = 0;
        if (++r > 4294967295) {
          r = 0;
        }
      }
    }
    return new n(i, r);
  };
  n.from = function (e) {
    if (typeof e == "number") {
      return n.fromNumber(e);
    }
    if (protobufUtilityModule.isString(e)) {
      if (!protobufUtilityModule.Long) {
        return n.fromNumber(parseInt(e, 10));
      }
      e = protobufUtilityModule.Long.fromString(e);
    }
    if (e.low || e.high) {
      return new n(e.low >>> 0, e.high >>> 0);
    } else {
      return s;
    }
  };
  n.prototype.toNumber = function (e) {
    if (!e && this.hi >>> 31) {
      var t = ~this.lo + 1 >>> 0;
      var i = ~this.hi >>> 0;
      if (!t) {
        i = i + 1 >>> 0;
      }
      return -(t + i * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  n.prototype.toLong = function (e) {
    if (protobufUtilityModule.Long) {
      return new protobufUtilityModule.Long(this.lo | 0, this.hi | 0, !!e);
    } else {
      return {
        low: this.lo | 0,
        high: this.hi | 0,
        unsigned: !!e
      };
    }
  };
  var a = String.prototype.charCodeAt;
  n.fromHash = function (e) {
    if (e === o) {
      return s;
    } else {
      return new n((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0);
    }
  };
  n.prototype.toHash = function () {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  n.prototype.zzEncode = function () {
    var e = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
    this.lo = (this.lo << 1 ^ e) >>> 0;
    return this;
  };
  n.prototype.zzDecode = function () {
    var e = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
    this.hi = (this.hi >>> 1 ^ e) >>> 0;
    return this;
  };
  n.prototype.length = function () {
    var e = this.lo;
    var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
    var i = this.hi >>> 24;
    if (i === 0) {
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
    } else if (i < 128) {
      return 9;
    } else {
      return 10;
    }
  };
}