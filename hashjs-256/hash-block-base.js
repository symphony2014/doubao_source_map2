// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'hashjs256Utils'
// - Resolved require(281108) to 'hashjs-256-utils'
// - Renamed variable 'i' to 'assertUtil'
// - Resolved require(728410) to 'assert-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hashjs-256.6917a130.js
         * chunkId: 62121
         * moduleId: 553134
         */
module.exports = function (module, exports, require) {
  var hashjs256Utils = require("hashjs-256-utils") /*id: 281108*/;
  var assertUtil = require("assert-util") /*id: 728410*/;
  function h() {
    this.pending = null;
    this.pendingTotal = 0;
    this.blockSize = this.constructor.blockSize;
    this.outSize = this.constructor.outSize;
    this.hmacStrength = this.constructor.hmacStrength;
    this.padLength = this.constructor.padLength / 8;
    this.endian = "big";
    this._delta8 = this.blockSize / 8;
    this._delta32 = this.blockSize / 32;
  }
  exports.BlockHash = h;
  h.prototype.update = function (t, n) {
    t = hashjs256Utils.toArray(t, n);
    if (this.pending) {
      this.pending = this.pending.concat(t);
    } else {
      this.pending = t;
    }
    this.pendingTotal += t.length;
    if (this.pending.length >= this._delta8) {
      var e = (t = this.pending).length % this._delta8;
      this.pending = t.slice(t.length - e, t.length);
      if (this.pending.length === 0) {
        this.pending = null;
      }
      t = hashjs256Utils.join32(t, 0, t.length - e, this.endian);
      for (var i = 0; i < t.length; i += this._delta32) {
        this._update(t, i, i + this._delta32);
      }
    }
    return this;
  };
  h.prototype.digest = function (t) {
    this.update(this._pad());
    assertUtil(this.pending === null);
    return this._digest(t);
  };
  h.prototype._pad = function () {
    var t = this.pendingTotal;
    var n = this._delta8;
    var e = n - (t + this.padLength) % n;
    var r = Array(e + this.padLength);
    r[0] = 128;
    for (var i = 1; i < e; i++) {
      r[i] = 0;
    }
    t <<= 3;
    if (this.endian === "big") {
      for (var h = 8; h < this.padLength; h++) {
        r[i++] = 0;
      }
      r[i++] = 0;
      r[i++] = 0;
      r[i++] = 0;
      r[i++] = 0;
      r[i++] = t >>> 24 & 255;
      r[i++] = t >>> 16 & 255;
      r[i++] = t >>> 8 & 255;
      r[i++] = t & 255;
    } else {
      h = 8;
      r[i++] = t & 255;
      r[i++] = t >>> 8 & 255;
      r[i++] = t >>> 16 & 255;
      r[i++] = t >>> 24 & 255;
      r[i++] = 0;
      r[i++] = 0;
      r[i++] = 0;
      r[i++] = 0;
      for (; h < this.padLength; h++) {
        r[i++] = 0;
      }
    }
    return r;
  };
}