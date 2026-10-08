// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'pakoDeflateCore'
// - Resolved require(34488) to 'pako-deflate-core'
// - Renamed variable 'n' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// - Renamed variable 'o' to 'utf8BufferUtils'
// - Resolved require(796383) to 'utf8-buffer-utils'
// - Renamed variable 's' to 'zlibErrorCodes'
// - Resolved require(235904) to 'zlib-error-codes'
// - Renamed variable 'a' to 'zlibStreamState_1'
// - Resolved require(386780) to 'zlib-stream-state_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 448577
         */
module.exports = function (module, exports, require) {
  var pakoDeflateCore = require("pako-deflate-core") /*id: 34488*/;
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var utf8BufferUtils = require("utf8-buffer-utils") /*id: 796383*/;
  var zlibErrorCodes = require("zlib-error-codes") /*id: 235904*/;
  var zlibStreamState_1 = require("zlib-stream-state_1") /*id: 386780*/;
  var l = Object.prototype.toString;
  var h = 0;
  var c = 4;
  var u = 0;
  var d = 1;
  var f = 2;
  var p = -1;
  var g = 0;
  var m = 8;
  function v(t) {
    if (!(this instanceof v)) {
      return new v(t);
    }
    this.options = commonBufferUtils.assign({
      level: p,
      method: m,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: g,
      to: ""
    }, t || {});
    var e;
    var r = this.options;
    if (r.raw && r.windowBits > 0) {
      r.windowBits = -r.windowBits;
    } else if (r.gzip && r.windowBits > 0 && r.windowBits < 16) {
      r.windowBits += 16;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new zlibStreamState_1();
    this.strm.avail_out = 0;
    var h = pakoDeflateCore.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
    if (h !== u) {
      throw Error(zlibErrorCodes[h]);
    }
    if (r.header) {
      pakoDeflateCore.deflateSetHeader(this.strm, r.header);
    }
    if (r.dictionary) {
      e = typeof r.dictionary == "string" ? utf8BufferUtils.string2buf(r.dictionary) : l.call(r.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(r.dictionary) : r.dictionary;
      if ((h = pakoDeflateCore.deflateSetDictionary(this.strm, e)) !== u) {
        throw Error(zlibErrorCodes[h]);
      }
      this._dict_set = true;
    }
  }
  function y(t, e) {
    var r = new v(e);
    r.push(t, true);
    if (r.err) {
      throw r.msg || zlibErrorCodes[r.err];
    }
    return r.result;
  }
  function b(t, e) {
    (e = e || {}).raw = true;
    return y(t, e);
  }
  function A(t, e) {
    (e = e || {}).gzip = true;
    return y(t, e);
  }
  v.prototype.push = function (t, e) {
    var r;
    var s;
    var a = this.strm;
    var p = this.options.chunkSize;
    if (this.ended) {
      return false;
    }
    s = e === ~~e ? e : e === true ? c : h;
    if (typeof t == "string") {
      a.input = utf8BufferUtils.string2buf(t);
    } else if (l.call(t) === "[object ArrayBuffer]") {
      a.input = new Uint8Array(t);
    } else {
      a.input = t;
    }
    a.next_in = 0;
    a.avail_in = a.input.length;
    do {
      if (a.avail_out === 0) {
        a.output = new commonBufferUtils.Buf8(p);
        a.next_out = 0;
        a.avail_out = p;
      }
      if ((r = pakoDeflateCore.deflate(a, s)) !== d && r !== u) {
        this.onEnd(r);
        this.ended = true;
        return false;
      }
      if (a.avail_out === 0 || a.avail_in === 0 && (s === c || s === f)) {
        if (this.options.to === "string") {
          this.onData(utf8BufferUtils.buf2binstring(commonBufferUtils.shrinkBuf(a.output, a.next_out)));
        } else {
          this.onData(commonBufferUtils.shrinkBuf(a.output, a.next_out));
        }
      }
    } while ((a.avail_in > 0 || a.avail_out === 0) && r !== d);
    if (s === c) {
      r = pakoDeflateCore.deflateEnd(this.strm);
      this.onEnd(r);
      this.ended = true;
      return r === u;
    } else {
      if (s === f) {
        this.onEnd(u);
        a.avail_out = 0;
      }
      return true;
    }
  };
  v.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  v.prototype.onEnd = function (t) {
    if (t === u) {
      if (this.options.to === "string") {
        this.result = this.chunks.join("");
      } else {
        this.result = commonBufferUtils.flattenChunks(this.chunks);
      }
    }
    this.chunks = [];
    this.err = t;
    this.msg = this.strm.msg;
  };
  exports.Deflate = v;
  exports.deflate = y;
  exports.deflateRaw = b;
  exports.gzip = A;
}