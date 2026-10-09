// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'zlibInflateCore_3'
// - Resolved require(180838) to 'zlib-inflate-core_3'
// - Renamed variable 'n' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// - Renamed variable 'o' to 'utf8BufferUtils'
// - Resolved require(796383) to 'utf8-buffer-utils'
// - Renamed variable 's' to 'zlibCompressionConstants'
// - Resolved require(356035) to 'zlib-compression-constants'
// - Renamed variable 'a' to 'zlibErrorCodes'
// - Resolved require(235904) to 'zlib-error-codes'
// - Renamed variable 'l' to 'zlibStreamState_1'
// - Resolved require(386780) to 'zlib-stream-state_1'
// - Renamed variable 'h' to 'zipEntryHeader'
// - Resolved require(776173) to 'zip-entry-header'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 835477
         */
module.exports = function (module, exports, require) {
  var zlibInflateCore_3 = require("zlib-inflate-core_3") /*id: 180838*/;
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var utf8BufferUtils = require("utf8-buffer-utils") /*id: 796383*/;
  var zlibCompressionConstants = require("zlib-compression-constants") /*id: 356035*/;
  var zlibErrorCodes = require("zlib-error-codes") /*id: 235904*/;
  var zlibStreamState_1 = require("zlib-stream-state_1") /*id: 386780*/;
  var zipEntryHeader = require("zip-entry-header") /*id: 776173*/;
  var c = Object.prototype.toString;
  function u(t) {
    if (!(this instanceof u)) {
      return new u(t);
    }
    this.options = commonBufferUtils.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, t || {});
    var e = this.options;
    if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
      e.windowBits = -e.windowBits;
      if (e.windowBits === 0) {
        e.windowBits = -15;
      }
    }
    if (e.windowBits >= 0 && e.windowBits < 16 && (!t || !t.windowBits)) {
      e.windowBits += 32;
    }
    if (e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15) == 0) {
      e.windowBits |= 15;
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new zlibStreamState_1();
    this.strm.avail_out = 0;
    var r = zlibInflateCore_3.inflateInit2(this.strm, e.windowBits);
    if (r !== zlibCompressionConstants.Z_OK || (this.header = new zipEntryHeader(), zlibInflateCore_3.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = utf8BufferUtils.string2buf(e.dictionary) : c.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (r = zlibInflateCore_3.inflateSetDictionary(this.strm, e.dictionary)) !== zlibCompressionConstants.Z_OK))) {
      throw Error(zlibErrorCodes[r]);
    }
  }
  function d(t, e) {
    var r = new u(e);
    r.push(t, true);
    if (r.err) {
      throw r.msg || zlibErrorCodes[r.err];
    }
    return r.result;
  }
  function f(t, e) {
    (e = e || {}).raw = true;
    return d(t, e);
  }
  u.prototype.push = function (t, e) {
    var r;
    var a;
    var l;
    var h;
    var u;
    var d = this.strm;
    var f = this.options.chunkSize;
    var p = this.options.dictionary;
    var g = false;
    if (this.ended) {
      return false;
    }
    a = e === ~~e ? e : e === true ? zlibCompressionConstants.Z_FINISH : zlibCompressionConstants.Z_NO_FLUSH;
    if (typeof t == "string") {
      d.input = utf8BufferUtils.binstring2buf(t);
    } else if (c.call(t) === "[object ArrayBuffer]") {
      d.input = new Uint8Array(t);
    } else {
      d.input = t;
    }
    d.next_in = 0;
    d.avail_in = d.input.length;
    do {
      if (d.avail_out === 0) {
        d.output = new commonBufferUtils.Buf8(f);
        d.next_out = 0;
        d.avail_out = f;
      }
      if ((r = zlibInflateCore_3.inflate(d, zlibCompressionConstants.Z_NO_FLUSH)) === zlibCompressionConstants.Z_NEED_DICT && p) {
        r = zlibInflateCore_3.inflateSetDictionary(this.strm, p);
      }
      if (r === zlibCompressionConstants.Z_BUF_ERROR && g === true) {
        r = zlibCompressionConstants.Z_OK;
        g = false;
      }
      if (r !== zlibCompressionConstants.Z_STREAM_END && r !== zlibCompressionConstants.Z_OK) {
        this.onEnd(r);
        this.ended = true;
        return false;
      }
      if (d.next_out && (d.avail_out === 0 || r === zlibCompressionConstants.Z_STREAM_END || d.avail_in === 0 && (a === zlibCompressionConstants.Z_FINISH || a === zlibCompressionConstants.Z_SYNC_FLUSH))) {
        if (this.options.to === "string") {
          l = utf8BufferUtils.utf8border(d.output, d.next_out);
          h = d.next_out - l;
          u = utf8BufferUtils.buf2string(d.output, l);
          d.next_out = h;
          d.avail_out = f - h;
          if (h) {
            commonBufferUtils.arraySet(d.output, d.output, l, h, 0);
          }
          this.onData(u);
        } else {
          this.onData(commonBufferUtils.shrinkBuf(d.output, d.next_out));
        }
      }
      if (d.avail_in === 0 && d.avail_out === 0) {
        g = true;
      }
    } while ((d.avail_in > 0 || d.avail_out === 0) && r !== zlibCompressionConstants.Z_STREAM_END);
    if (r === zlibCompressionConstants.Z_STREAM_END) {
      a = zlibCompressionConstants.Z_FINISH;
    }
    if (a === zlibCompressionConstants.Z_FINISH) {
      r = zlibInflateCore_3.inflateEnd(this.strm);
      this.onEnd(r);
      this.ended = true;
      return r === zlibCompressionConstants.Z_OK;
    } else {
      if (a === zlibCompressionConstants.Z_SYNC_FLUSH) {
        this.onEnd(zlibCompressionConstants.Z_OK);
        d.avail_out = 0;
      }
      return true;
    }
  };
  u.prototype.onData = function (t) {
    this.chunks.push(t);
  };
  u.prototype.onEnd = function (t) {
    if (t === zlibCompressionConstants.Z_OK) {
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
  exports.Inflate = u;
  exports.inflate = d;
  exports.inflateRaw = f;
  exports.ungzip = d;
}