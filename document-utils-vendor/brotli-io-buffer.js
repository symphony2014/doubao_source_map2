// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 23942
         */
module.exports = function (module, exports, require) {
  function r(e) {
    this.buffer = e;
    this.pos = 0;
  }
  function n(e) {
    this.buffer = e;
    this.pos = 0;
  }
  r.prototype.read = function (e, t, r) {
    if (this.pos + r > this.buffer.length) {
      r = this.buffer.length - this.pos;
    }
    for (var n = 0; n < r; n++) {
      e[t + n] = this.buffer[this.pos + n];
    }
    this.pos += r;
    return r;
  };
  exports.BrotliInput = r;
  n.prototype.write = function (e, t) {
    if (this.pos + t > this.buffer.length) {
      throw Error("Output buffer is not large enough");
    }
    this.buffer.set(e.subarray(0, t), this.pos);
    this.pos += t;
    return t;
  };
  exports.BrotliOutput = n;
}