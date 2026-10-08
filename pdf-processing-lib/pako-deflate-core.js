// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// - Renamed variable 'o' to 'deflateTreeOperations'
// - Resolved require(315178) to 'deflate-tree-operations'
// - Renamed variable 's' to 'adler32Checksum'
// - Resolved require(727832) to 'adler32-checksum'
// - Renamed variable 'a' to 'crc32ChecksumUtil_1'
// - Resolved require(153289) to 'crc32-checksum-util_1'
// - Renamed variable 'l' to 'zlibErrorCodes'
// - Resolved require(235904) to 'zlib-error-codes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 34488
         */
module.exports = function (module, exports, require) {
  var i;
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var deflateTreeOperations = require("deflate-tree-operations") /*id: 315178*/;
  var adler32Checksum = require("adler32-checksum") /*id: 727832*/;
  var crc32ChecksumUtil_1 = require("crc32-checksum-util_1") /*id: 153289*/;
  var zlibErrorCodes = require("zlib-error-codes") /*id: 235904*/;
  var h = 0;
  var c = 1;
  var u = 3;
  var d = 4;
  var f = 5;
  var p = 0;
  var g = 1;
  var m = -2;
  var v = -3;
  var y = -5;
  var b = -1;
  var A = 1;
  var S = 2;
  var x = 3;
  var w = 4;
  var C = 0;
  var T = 2;
  var E = 8;
  var F = 9;
  var k = 15;
  var P = 8;
  var R = 286;
  var M = 30;
  var O = 19;
  var D = 573;
  var I = 15;
  var L = 3;
  var N = 258;
  var B = 262;
  var j = 32;
  var _ = 42;
  var U = 69;
  var z = 73;
  var V = 91;
  var W = 103;
  var G = 113;
  var q = 666;
  var H = 1;
  var K = 2;
  var X = 3;
  var Z = 4;
  var Y = 3;
  function J(t, e) {
    t.msg = zlibErrorCodes[e];
    return e;
  }
  function Q(t) {
    return (t << 1) - (t > 4) * 9;
  }
  function $(t) {
    for (var e = t.length; --e >= 0;) {
      t[e] = 0;
    }
  }
  function tt(t) {
    var e = t.state;
    var r = e.pending;
    if (r > t.avail_out) {
      r = t.avail_out;
    }
    if (r !== 0) {
      commonBufferUtils.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out);
      t.next_out += r;
      e.pending_out += r;
      t.total_out += r;
      t.avail_out -= r;
      e.pending -= r;
      if (e.pending === 0) {
        e.pending_out = 0;
      }
    }
  }
  function te(t, e) {
    deflateTreeOperations._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
    t.block_start = t.strstart;
    tt(t.strm);
  }
  function tr(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function ti(t, e) {
    t.pending_buf[t.pending++] = e >>> 8 & 255;
    t.pending_buf[t.pending++] = e & 255;
  }
  function tn(t, e, r, i) {
    var o = t.avail_in;
    if (o > i) {
      o = i;
    }
    if (o === 0) {
      return 0;
    } else {
      t.avail_in -= o;
      commonBufferUtils.arraySet(e, t.input, t.next_in, o, r);
      if (t.state.wrap === 1) {
        t.adler = adler32Checksum(t.adler, e, o, r);
      } else if (t.state.wrap === 2) {
        t.adler = crc32ChecksumUtil_1(t.adler, e, o, r);
      }
      t.next_in += o;
      t.total_in += o;
      return o;
    }
  }
  function to(t, e) {
    var r;
    var i;
    var n = t.max_chain_length;
    var o = t.strstart;
    var s = t.prev_length;
    var a = t.nice_match;
    var l = t.strstart > t.w_size - B ? t.strstart - (t.w_size - B) : 0;
    var h = t.window;
    var c = t.w_mask;
    var u = t.prev;
    var d = t.strstart + N;
    var f = h[o + s - 1];
    var p = h[o + s];
    if (t.prev_length >= t.good_match) {
      n >>= 2;
    }
    if (a > t.lookahead) {
      a = t.lookahead;
    }
    do {
      if (h[(r = e) + s] !== p || h[r + s - 1] !== f || h[r] !== h[o] || h[++r] !== h[o + 1]) {
        continue;
      }
      o += 2;
      r++;
      do ; while (h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && h[++o] === h[++r] && o < d);
      i = N - (d - o);
      o = d - N;
      if (i > s) {
        t.match_start = e;
        s = i;
        if (i >= a) {
          break;
        }
        f = h[o + s - 1];
        p = h[o + s];
      }
    } while ((e = u[e & c]) > l && --n != 0);
    if (s <= t.lookahead) {
      return s;
    } else {
      return t.lookahead;
    }
  }
  function ts(t) {
    var e;
    var r;
    var i;
    var o;
    var s;
    var a = t.w_size;
    do {
      o = t.window_size - t.lookahead - t.strstart;
      if (t.strstart >= a + (a - B)) {
        commonBufferUtils.arraySet(t.window, t.window, a, a, 0);
        t.match_start -= a;
        t.strstart -= a;
        t.block_start -= a;
        e = r = t.hash_size;
        do {
          i = t.head[--e];
          t.head[e] = i >= a ? i - a : 0;
        } while (--r);
        e = r = a;
        do {
          i = t.prev[--e];
          t.prev[e] = i >= a ? i - a : 0;
        } while (--r);
        o += a;
      }
      if (t.strm.avail_in === 0) {
        break;
      }
      r = tn(t.strm, t.window, t.strstart + t.lookahead, o);
      t.lookahead += r;
      if (t.lookahead + t.insert >= L) {
        s = t.strstart - t.insert;
        t.ins_h = t.window[s];
        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + 1]) & t.hash_mask;
        while (t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + L - 1]) & t.hash_mask, t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < L)));
      }
    } while (t.lookahead < B && t.strm.avail_in !== 0);
  }
  function ta(t, e) {
    var r;
    var i;
    while (true) {
      if (t.lookahead < B) {
        ts(t);
        if (t.lookahead < B && e === h) {
          return H;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (t.lookahead >= L) {
        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask;
        r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      if (r !== 0 && t.strstart - r <= t.w_size - B) {
        t.match_length = to(t, r);
      }
      if (t.match_length >= L) {
        i = deflateTreeOperations._tr_tally(t, t.strstart - t.match_start, t.match_length - L);
        t.lookahead -= t.match_length;
        if (t.match_length <= t.max_lazy_match && t.lookahead >= L) {
          t.match_length--;
          do {
            t.strstart++;
            t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask;
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          } while (--t.match_length != 0);
          t.strstart++;
        } else {
          t.strstart += t.match_length;
          t.match_length = 0;
          t.ins_h = t.window[t.strstart];
          t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
        }
      } else {
        i = deflateTreeOperations._tr_tally(t, 0, t.window[t.strstart]);
        t.lookahead--;
        t.strstart++;
      }
      if (i && (te(t, false), t.strm.avail_out === 0)) {
        return H;
      }
    }
    t.insert = t.strstart < L - 1 ? t.strstart : L - 1;
    if (e === d) {
      te(t, true);
      if (t.strm.avail_out === 0) {
        return X;
      } else {
        return Z;
      }
    } else if (t.last_lit && (te(t, false), t.strm.avail_out === 0)) {
      return H;
    } else {
      return K;
    }
  }
  function tl(t, e) {
    var r;
    var i;
    var n;
    while (true) {
      if (t.lookahead < B) {
        ts(t);
        if (t.lookahead < B && e === h) {
          return H;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (t.lookahead >= L) {
        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask;
        r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
        t.head[t.ins_h] = t.strstart;
      }
      t.prev_length = t.match_length;
      t.prev_match = t.match_start;
      t.match_length = L - 1;
      if (r !== 0 && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - B) {
        t.match_length = to(t, r);
        if (t.match_length <= 5 && (t.strategy === A || t.match_length === L && t.strstart - t.match_start > 4096)) {
          t.match_length = L - 1;
        }
      }
      if (t.prev_length >= L && t.match_length <= t.prev_length) {
        n = t.strstart + t.lookahead - L;
        i = deflateTreeOperations._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - L);
        t.lookahead -= t.prev_length - 1;
        t.prev_length -= 2;
        do {
          if (++t.strstart <= n) {
            t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + L - 1]) & t.hash_mask;
            r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
            t.head[t.ins_h] = t.strstart;
          }
        } while (--t.prev_length != 0);
        t.match_available = 0;
        t.match_length = L - 1;
        t.strstart++;
        if (i && (te(t, false), t.strm.avail_out === 0)) {
          return H;
        }
      } else if (t.match_available) {
        if (i = deflateTreeOperations._tr_tally(t, 0, t.window[t.strstart - 1])) {
          te(t, false);
        }
        t.strstart++;
        t.lookahead--;
        if (t.strm.avail_out === 0) {
          return H;
        }
      } else {
        t.match_available = 1;
        t.strstart++;
        t.lookahead--;
      }
    }
    if (t.match_available) {
      i = deflateTreeOperations._tr_tally(t, 0, t.window[t.strstart - 1]);
      t.match_available = 0;
    }
    t.insert = t.strstart < L - 1 ? t.strstart : L - 1;
    if (e === d) {
      te(t, true);
      if (t.strm.avail_out === 0) {
        return X;
      } else {
        return Z;
      }
    } else if (t.last_lit && (te(t, false), t.strm.avail_out === 0)) {
      return H;
    } else {
      return K;
    }
  }
  function th(t, e) {
    var r;
    var i;
    var n;
    var s;
    var a = t.window;
    while (true) {
      if (t.lookahead <= N) {
        ts(t);
        if (t.lookahead <= N && e === h) {
          return H;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      t.match_length = 0;
      if (t.lookahead >= L && t.strstart > 0 && (i = a[n = t.strstart - 1]) === a[++n] && i === a[++n] && i === a[++n]) {
        s = t.strstart + N;
        do ; while (i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && n < s);
        t.match_length = N - (s - n);
        if (t.match_length > t.lookahead) {
          t.match_length = t.lookahead;
        }
      }
      if (t.match_length >= L) {
        r = deflateTreeOperations._tr_tally(t, 1, t.match_length - L);
        t.lookahead -= t.match_length;
        t.strstart += t.match_length;
        t.match_length = 0;
      } else {
        r = deflateTreeOperations._tr_tally(t, 0, t.window[t.strstart]);
        t.lookahead--;
        t.strstart++;
      }
      if (r && (te(t, false), t.strm.avail_out === 0)) {
        return H;
      }
    }
    t.insert = 0;
    if (e === d) {
      te(t, true);
      if (t.strm.avail_out === 0) {
        return X;
      } else {
        return Z;
      }
    } else if (t.last_lit && (te(t, false), t.strm.avail_out === 0)) {
      return H;
    } else {
      return K;
    }
  }
  function tc(t, e) {
    var r;
    for (;;) {
      if (t.lookahead === 0 && (ts(t), t.lookahead === 0)) {
        if (e === h) {
          return H;
        }
        break;
      }
      t.match_length = 0;
      r = deflateTreeOperations._tr_tally(t, 0, t.window[t.strstart]);
      t.lookahead--;
      t.strstart++;
      if (r && (te(t, false), t.strm.avail_out === 0)) {
        return H;
      }
    }
    t.insert = 0;
    if (e === d) {
      te(t, true);
      if (t.strm.avail_out === 0) {
        return X;
      } else {
        return Z;
      }
    } else if (t.last_lit && (te(t, false), t.strm.avail_out === 0)) {
      return H;
    } else {
      return K;
    }
  }
  function tu(t, e, r, i, n) {
    this.good_length = t;
    this.max_lazy = e;
    this.nice_length = r;
    this.max_chain = i;
    this.func = n;
  }
  function td(t) {
    t.window_size = t.w_size * 2;
    $(t.head);
    t.max_lazy_match = i[t.level].max_lazy;
    t.good_match = i[t.level].good_length;
    t.nice_match = i[t.level].nice_length;
    t.max_chain_length = i[t.level].max_chain;
    t.strstart = 0;
    t.block_start = 0;
    t.lookahead = 0;
    t.insert = 0;
    t.match_length = t.prev_length = L - 1;
    t.match_available = 0;
    t.ins_h = 0;
  }
  function tf() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = E;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new commonBufferUtils.Buf16(D * 2);
    this.dyn_dtree = new commonBufferUtils.Buf16((M * 2 + 1) * 2);
    this.bl_tree = new commonBufferUtils.Buf16((O * 2 + 1) * 2);
    $(this.dyn_ltree);
    $(this.dyn_dtree);
    $(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new commonBufferUtils.Buf16(I + 1);
    this.heap = new commonBufferUtils.Buf16(R * 2 + 1);
    $(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new commonBufferUtils.Buf16(R * 2 + 1);
    $(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  function tp(t) {
    var e;
    if (t && t.state) {
      t.total_in = t.total_out = 0;
      t.data_type = T;
      (e = t.state).pending = 0;
      e.pending_out = 0;
      if (e.wrap < 0) {
        e.wrap = -e.wrap;
      }
      e.status = e.wrap ? _ : G;
      t.adler = +(e.wrap !== 2);
      e.last_flush = h;
      deflateTreeOperations._tr_init(e);
      return p;
    } else {
      return J(t, m);
    }
  }
  function tg(t) {
    var e = tp(t);
    if (e === p) {
      td(t.state);
    }
    return e;
  }
  function tm(t, e) {
    if (t && t.state && t.state.wrap === 2) {
      t.state.gzhead = e;
      return p;
    } else {
      return m;
    }
  }
  function tv(t, e, r, i, o, s) {
    if (!t) {
      return m;
    }
    var a = 1;
    if (e === b) {
      e = 6;
    }
    if (i < 0) {
      a = 0;
      i = -i;
    } else if (i > 15) {
      a = 2;
      i -= 16;
    }
    if (o < 1 || o > F || r !== E || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > w) {
      return J(t, m);
    }
    if (i === 8) {
      i = 9;
    }
    var l = new tf();
    t.state = l;
    l.strm = t;
    l.wrap = a;
    l.gzhead = null;
    l.w_bits = i;
    l.w_size = 1 << l.w_bits;
    l.w_mask = l.w_size - 1;
    l.hash_bits = o + 7;
    l.hash_size = 1 << l.hash_bits;
    l.hash_mask = l.hash_size - 1;
    l.hash_shift = ~~((l.hash_bits + L - 1) / L);
    l.window = new commonBufferUtils.Buf8(l.w_size * 2);
    l.head = new commonBufferUtils.Buf16(l.hash_size);
    l.prev = new commonBufferUtils.Buf16(l.w_size);
    l.lit_bufsize = 1 << o + 6;
    l.pending_buf_size = l.lit_bufsize * 4;
    l.pending_buf = new commonBufferUtils.Buf8(l.pending_buf_size);
    l.d_buf = +l.lit_bufsize;
    l.l_buf = l.lit_bufsize * 3;
    l.level = e;
    l.strategy = s;
    l.method = r;
    return tg(t);
  }
  function ty(t, e) {
    return tv(t, e, E, k, P, C);
  }
  function tb(t, e) {
    if (!t || !t.state || e > f || e < 0) {
      if (t) {
        return J(t, m);
      } else {
        return m;
      }
    }
    n = t.state;
    if (!t.output || !t.input && t.avail_in !== 0 || n.status === q && e !== d) {
      return J(t, t.avail_out === 0 ? y : m);
    }
    n.strm = t;
    r = n.last_flush;
    n.last_flush = e;
    if (n.status === _) {
      if (n.wrap === 2) {
        t.adler = 0;
        tr(n, 31);
        tr(n, 139);
        tr(n, 8);
        if (n.gzhead) {
          tr(n, +!!n.gzhead.text + !!n.gzhead.hcrc * 2 + !!n.gzhead.extra * 4 + !!n.gzhead.name * 8 + !!n.gzhead.comment * 16);
          tr(n, n.gzhead.time & 255);
          tr(n, n.gzhead.time >> 8 & 255);
          tr(n, n.gzhead.time >> 16 & 255);
          tr(n, n.gzhead.time >> 24 & 255);
          tr(n, n.level === 9 ? 2 : (n.strategy >= S || n.level < 2) * 4);
          tr(n, n.gzhead.os & 255);
          if (n.gzhead.extra && n.gzhead.extra.length) {
            tr(n, n.gzhead.extra.length & 255);
            tr(n, n.gzhead.extra.length >> 8 & 255);
          }
          if (n.gzhead.hcrc) {
            t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending, 0);
          }
          n.gzindex = 0;
          n.status = U;
        } else {
          tr(n, 0);
          tr(n, 0);
          tr(n, 0);
          tr(n, 0);
          tr(n, 0);
          tr(n, n.level === 9 ? 2 : (n.strategy >= S || n.level < 2) * 4);
          tr(n, Y);
          n.status = G;
        }
      } else {
        var r;
        var n;
        var s;
        var l;
        var v = E + (n.w_bits - 8 << 4) << 8;
        var b = -1;
        v |= (b = n.strategy >= S || n.level < 2 ? 0 : n.level < 6 ? 1 : n.level === 6 ? 2 : 3) << 6;
        if (n.strstart !== 0) {
          v |= j;
        }
        v += 31 - v % 31;
        n.status = G;
        ti(n, v);
        if (n.strstart !== 0) {
          ti(n, t.adler >>> 16);
          ti(n, t.adler & 65535);
        }
        t.adler = 1;
      }
    }
    if (n.status === U) {
      if (n.gzhead.extra) {
        for (s = n.pending; n.gzindex < (n.gzhead.extra.length & 65535) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > s && (t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s)), tt(t), s = n.pending, n.pending !== n.pending_buf_size));) {
          tr(n, n.gzhead.extra[n.gzindex] & 255);
          n.gzindex++;
        }
        if (n.gzhead.hcrc && n.pending > s) {
          t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s);
        }
        if (n.gzindex === n.gzhead.extra.length) {
          n.gzindex = 0;
          n.status = z;
        }
      } else {
        n.status = z;
      }
    }
    if (n.status === z) {
      if (n.gzhead.name) {
        s = n.pending;
        do {
          if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > s && (t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s)), tt(t), s = n.pending, n.pending === n.pending_buf_size)) {
            l = 1;
            break;
          }
          l = n.gzindex < n.gzhead.name.length ? n.gzhead.name.charCodeAt(n.gzindex++) & 255 : 0;
          tr(n, l);
        } while (l !== 0);
        if (n.gzhead.hcrc && n.pending > s) {
          t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s);
        }
        if (l === 0) {
          n.gzindex = 0;
          n.status = V;
        }
      } else {
        n.status = V;
      }
    }
    if (n.status === V) {
      if (n.gzhead.comment) {
        s = n.pending;
        do {
          if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > s && (t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s)), tt(t), s = n.pending, n.pending === n.pending_buf_size)) {
            l = 1;
            break;
          }
          l = n.gzindex < n.gzhead.comment.length ? n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : 0;
          tr(n, l);
        } while (l !== 0);
        if (n.gzhead.hcrc && n.pending > s) {
          t.adler = crc32ChecksumUtil_1(t.adler, n.pending_buf, n.pending - s, s);
        }
        if (l === 0) {
          n.status = W;
        }
      } else {
        n.status = W;
      }
    }
    if (n.status === W) {
      if (n.gzhead.hcrc) {
        if (n.pending + 2 > n.pending_buf_size) {
          tt(t);
        }
        if (n.pending + 2 <= n.pending_buf_size) {
          tr(n, t.adler & 255);
          tr(n, t.adler >> 8 & 255);
          t.adler = 0;
          n.status = G;
        }
      } else {
        n.status = G;
      }
    }
    if (n.pending !== 0) {
      tt(t);
      if (t.avail_out === 0) {
        n.last_flush = -1;
        return p;
      }
    } else if (t.avail_in === 0 && Q(e) <= Q(r) && e !== d) {
      return J(t, y);
    }
    if (n.status === q && t.avail_in !== 0) {
      return J(t, y);
    }
    if (t.avail_in !== 0 || n.lookahead !== 0 || e !== h && n.status !== q) {
      var A = n.strategy === S ? tc(n, e) : n.strategy === x ? th(n, e) : i[n.level].func(n, e);
      if (A === X || A === Z) {
        n.status = q;
      }
      if (A === H || A === X) {
        if (t.avail_out === 0) {
          n.last_flush = -1;
        }
        return p;
      }
      if (A === K && (e === c ? deflateTreeOperations._tr_align(n) : e !== f && (deflateTreeOperations._tr_stored_block(n, 0, 0, false), e === u && ($(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), tt(t), t.avail_out === 0)) {
        n.last_flush = -1;
        return p;
      }
    }
    if (e !== d) {
      return p;
    } else if (n.wrap <= 0) {
      return g;
    } else {
      if (n.wrap === 2) {
        tr(n, t.adler & 255);
        tr(n, t.adler >> 8 & 255);
        tr(n, t.adler >> 16 & 255);
        tr(n, t.adler >> 24 & 255);
        tr(n, t.total_in & 255);
        tr(n, t.total_in >> 8 & 255);
        tr(n, t.total_in >> 16 & 255);
        tr(n, t.total_in >> 24 & 255);
      } else {
        ti(n, t.adler >>> 16);
        ti(n, t.adler & 65535);
      }
      tt(t);
      if (n.wrap > 0) {
        n.wrap = -n.wrap;
      }
      if (n.pending !== 0) {
        return p;
      } else {
        return g;
      }
    }
  }
  function tA(t) {
    var e;
    if (t && t.state) {
      if ((e = t.state.status) !== _ && e !== U && e !== z && e !== V && e !== W && e !== G && e !== q) {
        return J(t, m);
      } else {
        t.state = null;
        if (e === G) {
          return J(t, v);
        } else {
          return p;
        }
      }
    } else {
      return m;
    }
  }
  function tS(t, e) {
    var r;
    var i;
    var o;
    var a;
    var l;
    var h;
    var c;
    var u;
    var d = e.length;
    if (!t || !t.state || (a = (r = t.state).wrap) === 2 || a === 1 && r.status !== _ || r.lookahead) {
      return m;
    }
    if (a === 1) {
      t.adler = adler32Checksum(t.adler, e, d, 0);
    }
    r.wrap = 0;
    if (d >= r.w_size) {
      if (a === 0) {
        $(r.head);
        r.strstart = 0;
        r.block_start = 0;
        r.insert = 0;
      }
      u = new commonBufferUtils.Buf8(r.w_size);
      commonBufferUtils.arraySet(u, e, d - r.w_size, r.w_size, 0);
      e = u;
      d = r.w_size;
    }
    l = t.avail_in;
    h = t.next_in;
    c = t.input;
    t.avail_in = d;
    t.next_in = 0;
    t.input = e;
    ts(r);
    while (r.lookahead >= L) {
      i = r.strstart;
      o = r.lookahead - (L - 1);
      do {
        r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + L - 1]) & r.hash_mask;
        r.prev[i & r.w_mask] = r.head[r.ins_h];
        r.head[r.ins_h] = i;
        i++;
      } while (--o);
      r.strstart = i;
      r.lookahead = L - 1;
      ts(r);
    }
    r.strstart += r.lookahead;
    r.block_start = r.strstart;
    r.insert = r.lookahead;
    r.lookahead = 0;
    r.match_length = r.prev_length = L - 1;
    r.match_available = 0;
    t.next_in = h;
    t.input = c;
    t.avail_in = l;
    r.wrap = a;
    return p;
  }
  i = [new tu(0, 0, 0, 0, function (t, e) {
    var r = 65535;
    for (t.pending_buf_size - 5 < 65535 && (r = t.pending_buf_size - 5);;) {
      if (t.lookahead <= 1) {
        ts(t);
        if (t.lookahead === 0 && e === h) {
          return H;
        }
        if (t.lookahead === 0) {
          break;
        }
      }
      t.strstart += t.lookahead;
      t.lookahead = 0;
      var i = t.block_start + r;
      if ((t.strstart === 0 || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, te(t, false), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - B && (te(t, false), t.strm.avail_out === 0)) {
        return H;
      }
    }
    t.insert = 0;
    if (e === d) {
      te(t, true);
      if (t.strm.avail_out === 0) {
        return X;
      } else {
        return Z;
      }
    } else {
      if (t.strstart > t.block_start) {
        te(t, false);
        t.strm.avail_out;
      }
      return H;
    }
  }), new tu(4, 4, 8, 4, ta), new tu(4, 5, 16, 8, ta), new tu(4, 6, 32, 32, ta), new tu(4, 4, 16, 16, tl), new tu(8, 16, 32, 32, tl), new tu(8, 16, 128, 128, tl), new tu(8, 32, 128, 256, tl), new tu(32, 128, 258, 1024, tl), new tu(32, 258, 258, 4096, tl)];
  exports.deflateInit = ty;
  exports.deflateInit2 = tv;
  exports.deflateReset = tg;
  exports.deflateResetKeep = tp;
  exports.deflateSetHeader = tm;
  exports.deflate = tb;
  exports.deflateEnd = tA;
  exports.deflateSetDictionary = tS;
  exports.deflateInfo = "pako deflate (from Nodeca project)";
}