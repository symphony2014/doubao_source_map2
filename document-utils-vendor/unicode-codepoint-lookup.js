// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'deflateInflateCore'
// - Resolved require(376900) to 'deflate-inflate-core'
// - Resolved require(353410) to 'byte-swap-32le-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 256996
         */
module.exports = function (module, exports, require) {
  let deflateInflateCore = require("deflate-inflate-core") /*id: 376900*/;
  let {
    swap32LE: i
  } = require("byte-swap-32le-util") /*id: 353410*/;
  let o = 2112;
  module.exports = class {
    constructor(e) {
      let t = typeof e.readUInt32BE == "function" && typeof e.slice == "function";
      if (t || e instanceof Uint8Array) {
        let r;
        if (t) {
          this.highStart = e.readUInt32LE(0);
          this.errorValue = e.readUInt32LE(4);
          r = e.readUInt32LE(8);
          e = e.slice(12);
        } else {
          let t = new DataView(e.buffer);
          this.highStart = t.getUint32(0, true);
          this.errorValue = t.getUint32(4, true);
          r = t.getUint32(8, true);
          e = e.subarray(12);
        }
        e = deflateInflateCore(e, new Uint8Array(r));
        i(e = deflateInflateCore(e, new Uint8Array(r)));
        this.data = new Uint32Array(e.buffer);
      } else {
        ({
          data: this.data,
          highStart: this.highStart,
          errorValue: this.errorValue
        } = e);
      }
    }
    get(e) {
      let t;
      if (e < 0 || e > 1114111) {
        return this.errorValue;
      } else if (e < 55296 || e > 56319 && e <= 65535) {
        t = (this.data[e >> 5] << 2) + (e & 31);
        return this.data[t];
      } else if (e <= 65535) {
        t = (this.data[2048 + (e - 55296 >> 5)] << 2) + (e & 31);
        return this.data[t];
      } else if (e < this.highStart) {
        t = this.data[o - 32 + (e >> 11)];
        t = ((t = this.data[t + (e >> 5 & 63)]) << 2) + (e & 31);
        return this.data[t];
      } else {
        return this.data[this.data.length - 4];
      }
    }
  };
}