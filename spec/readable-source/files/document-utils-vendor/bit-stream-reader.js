// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 167498
         */
module.exports = function (module, exports, require) {
  var t = new Uint32Array([0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215]);
  function r(e) {
    this.buf_ = new Uint8Array(8224);
    this.input_ = e;
    this.reset();
  }
  r.READ_SIZE = 4096;
  r.IBUF_MASK = 8191;
  r.prototype.reset = function () {
    this.buf_ptr_ = 0;
    this.val_ = 0;
    this.pos_ = 0;
    this.bit_pos_ = 0;
    this.bit_end_pos_ = 0;
    this.eos_ = 0;
    this.readMoreInput();
    for (var e = 0; e < 4; e++) {
      this.val_ |= this.buf_[this.pos_] << e * 8;
      ++this.pos_;
    }
    return this.bit_end_pos_ > 0;
  };
  r.prototype.readMoreInput = function () {
    if (!(this.bit_end_pos_ > 256)) {
      if (this.eos_) {
        if (this.bit_pos_ > this.bit_end_pos_) {
          throw Error("Unexpected end of input " + this.bit_pos_ + " " + this.bit_end_pos_);
        }
      } else {
        var e = this.buf_ptr_;
        var t = this.input_.read(this.buf_, e, 4096);
        if (t < 0) {
          throw Error("Unexpected end of input");
        }
        if (t < 4096) {
          this.eos_ = 1;
          for (var r = 0; r < 32; r++) {
            this.buf_[e + t + r] = 0;
          }
        }
        if (e === 0) {
          for (var r = 0; r < 32; r++) {
            this.buf_[8192 + r] = this.buf_[r];
          }
          this.buf_ptr_ = 4096;
        } else {
          this.buf_ptr_ = 0;
        }
        this.bit_end_pos_ += t << 3;
      }
    }
  };
  r.prototype.fillBitWindow = function () {
    while (this.bit_pos_ >= 8) {
      this.val_ >>>= 8;
      this.val_ |= this.buf_[this.pos_ & 8191] << 24;
      ++this.pos_;
      this.bit_pos_ = this.bit_pos_ - 8 >>> 0;
      this.bit_end_pos_ = this.bit_end_pos_ - 8 >>> 0;
    }
  };
  r.prototype.readBits = function (e) {
    if (32 - this.bit_pos_ < e) {
      this.fillBitWindow();
    }
    var r = this.val_ >>> this.bit_pos_ & t[e];
    this.bit_pos_ += e;
    return r;
  };
  module.exports = r;
}