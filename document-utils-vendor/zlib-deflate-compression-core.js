// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(119122) to 'deflate-trees-util'
// - Renamed variable 'l' to 'adler32ChecksumUtil'
// - Resolved require(711194) to 'adler32-checksum-util'
// - Renamed variable 'u' to 'crc32ChecksumUtil'
// - Resolved require(750330) to 'crc32-checksum-util'
// - Renamed variable 'c' to 'zlibErrorCodes_1'
// - Resolved require(339116) to 'zlib-error-codes_1'
// - Resolved require(980282) to 'zlib-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 880845
         */
module.exports = function (module, exports, require) {
  let {
    _tr_init: n,
    _tr_stored_block: i,
    _tr_flush_block: o,
    _tr_tally: a,
    _tr_align: s
  } = require("deflate-trees-util") /*id: 119122*/;
  let adler32ChecksumUtil = require("adler32-checksum-util") /*id: 711194*/;
  let crc32ChecksumUtil = require("crc32-checksum-util") /*id: 750330*/;
  let zlibErrorCodes_1 = require("zlib-error-codes_1") /*id: 339116*/;
  let {
    Z_NO_FLUSH: h,
    Z_PARTIAL_FLUSH: d,
    Z_FULL_FLUSH: f,
    Z_FINISH: A,
    Z_BLOCK: g,
    Z_OK: p,
    Z_STREAM_END: m,
    Z_STREAM_ERROR: y,
    Z_DATA_ERROR: v,
    Z_BUF_ERROR: b,
    Z_DEFAULT_COMPRESSION: w,
    Z_FILTERED: C,
    Z_HUFFMAN_ONLY: E,
    Z_RLE: I,
    Z_FIXED: B,
    Z_DEFAULT_STRATEGY: x,
    Z_UNKNOWN: D,
    Z_DEFLATED: S
  } = require("zlib-constants") /*id: 980282*/;
  let k = 573;
  let _ = (e, t) => {
    e.msg = zlibErrorCodes_1[t];
    return t;
  };
  let T = e => e * 2 - (e > 4) * 9;
  let Q = e => {
    let t = e.length;
    while (--t >= 0) {
      e[t] = 0;
    }
  };
  let R = e => {
    let t;
    let r;
    let n;
    let i = e.w_size;
    n = t = e.hash_size;
    do {
      r = e.head[--n];
      e.head[n] = r >= i ? r - i : 0;
    } while (--t);
    n = t = i;
    do {
      r = e.prev[--n];
      e.prev[n] = r >= i ? r - i : 0;
    } while (--t);
  };
  let F = (e, t, r) => (t << e.hash_shift ^ r) & e.hash_mask;
  let L = e => {
    let t = e.state;
    let r = t.pending;
    if (r > e.avail_out) {
      r = e.avail_out;
    }
    if (r !== 0) {
      e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + r), e.next_out);
      e.next_out += r;
      t.pending_out += r;
      e.total_out += r;
      e.avail_out -= r;
      t.pending -= r;
      if (t.pending === 0) {
        t.pending_out = 0;
      }
    }
  };
  let O = (e, t) => {
    o(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
    e.block_start = e.strstart;
    L(e.strm);
  };
  let N = (e, t) => {
    e.pending_buf[e.pending++] = t;
  };
  let M = (e, t) => {
    e.pending_buf[e.pending++] = t >>> 8 & 255;
    e.pending_buf[e.pending++] = t & 255;
  };
  let P = (e, t, r, n) => {
    let i = e.avail_in;
    if (i > n) {
      i = n;
    }
    if (i === 0) {
      return 0;
    } else {
      e.avail_in -= i;
      t.set(e.input.subarray(e.next_in, e.next_in + i), r);
      if (e.state.wrap === 1) {
        e.adler = adler32ChecksumUtil(e.adler, t, i, r);
      } else if (e.state.wrap === 2) {
        e.adler = crc32ChecksumUtil(e.adler, t, i, r);
      }
      e.next_in += i;
      e.total_in += i;
      return i;
    }
  };
  let U = (e, t) => {
    let r;
    let n;
    let i = e.max_chain_length;
    let o = e.strstart;
    let a = e.prev_length;
    let s = e.nice_match;
    let l = e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0;
    let u = e.window;
    let c = e.w_mask;
    let h = e.prev;
    let d = e.strstart + 258;
    let f = u[o + a - 1];
    let A = u[o + a];
    if (e.prev_length >= e.good_match) {
      i >>= 2;
    }
    if (s > e.lookahead) {
      s = e.lookahead;
    }
    do {
      if (u[(r = t) + a] !== A || u[r + a - 1] !== f || u[r] !== u[o] || u[++r] !== u[o + 1]) {
        continue;
      }
      o += 2;
      r++;
      do ; while (u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && u[++o] === u[++r] && o < d);
      n = 258 - (d - o);
      o = d - 258;
      if (n > a) {
        e.match_start = t;
        a = n;
        if (n >= s) {
          break;
        }
        f = u[o + a - 1];
        A = u[o + a];
      }
    } while ((t = h[t & c]) > l && --i != 0);
    if (a <= e.lookahead) {
      return a;
    } else {
      return e.lookahead;
    }
  };
  let z = e => {
    let t;
    let r;
    let n;
    let i = e.w_size;
    do {
      r = e.window_size - e.lookahead - e.strstart;
      if (e.strstart >= i + (i - 262)) {
        e.window.set(e.window.subarray(i, i + i - r), 0);
        e.match_start -= i;
        e.strstart -= i;
        e.block_start -= i;
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
        R(e);
        r += i;
      }
      if (e.strm.avail_in === 0) {
        break;
      }
      t = P(e.strm, e.window, e.strstart + e.lookahead, r);
      e.lookahead += t;
      if (e.lookahead + e.insert >= 3) {
        n = e.strstart - e.insert;
        e.ins_h = e.window[n];
        e.ins_h = F(e, e.ins_h, e.window[n + 1]);
        while (e.insert && (e.ins_h = F(e, e.ins_h, e.window[n + 3 - 1]), e.prev[n & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = n, n++, e.insert--, !(e.lookahead + e.insert < 3)));
      }
    } while (e.lookahead < 262 && e.strm.avail_in !== 0);
  };
  let H = (e, t) => {
    let r = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
    let n;
    let o;
    let a;
    let s = 0;
    let l = e.strm.avail_in;
    do {
      n = 65535;
      a = e.bi_valid + 42 >> 3;
      if (e.strm.avail_out < a || (a = e.strm.avail_out - a, n > (o = e.strstart - e.block_start) + e.strm.avail_in && (n = o + e.strm.avail_in), n > a && (n = a), n < r && (n === 0 && t !== A || t === h || n !== o + e.strm.avail_in))) {
        break;
      }
      s = +(t === A && n === o + e.strm.avail_in);
      i(e, 0, 0, s);
      e.pending_buf[e.pending - 4] = n;
      e.pending_buf[e.pending - 3] = n >> 8;
      e.pending_buf[e.pending - 2] = ~n;
      e.pending_buf[e.pending - 1] = ~n >> 8;
      L(e.strm);
      if (o) {
        if (o > n) {
          o = n;
        }
        e.strm.output.set(e.window.subarray(e.block_start, e.block_start + o), e.strm.next_out);
        e.strm.next_out += o;
        e.strm.avail_out -= o;
        e.strm.total_out += o;
        e.block_start += o;
        n -= o;
      }
      if (n) {
        P(e.strm, e.strm.output, e.strm.next_out, n);
        e.strm.next_out += n;
        e.strm.avail_out -= n;
        e.strm.total_out += n;
      }
    } while (s === 0);
    if (l -= e.strm.avail_in) {
      if (l >= e.w_size) {
        e.matches = 2;
        e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
        e.strstart = e.w_size;
        e.insert = e.strstart;
      } else {
        if (e.window_size - e.strstart <= l) {
          e.strstart -= e.w_size;
          e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
          if (e.matches < 2) {
            e.matches++;
          }
          if (e.insert > e.strstart) {
            e.insert = e.strstart;
          }
        }
        e.window.set(e.strm.input.subarray(e.strm.next_in - l, e.strm.next_in), e.strstart);
        e.strstart += l;
        e.insert += l > e.w_size - e.insert ? e.w_size - e.insert : l;
      }
      e.block_start = e.strstart;
    }
    if (e.high_water < e.strstart) {
      e.high_water = e.strstart;
    }
    if (s) {
      return 4;
    } else if (t !== h && t !== A && e.strm.avail_in === 0 && e.strstart === e.block_start) {
      return 2;
    } else {
      a = e.window_size - e.strstart;
      if (e.strm.avail_in > a && e.block_start >= e.w_size) {
        e.block_start -= e.w_size;
        e.strstart -= e.w_size;
        e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
        if (e.matches < 2) {
          e.matches++;
        }
        a += e.w_size;
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
      }
      if (a > e.strm.avail_in) {
        a = e.strm.avail_in;
      }
      if (a) {
        P(e.strm, e.window, e.strstart, a);
        e.strstart += a;
        e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a;
      }
      if (e.high_water < e.strstart) {
        e.high_water = e.strstart;
      }
      a = e.bi_valid + 42 >> 3;
      r = (a = e.pending_buf_size - a > 65535 ? 65535 : e.pending_buf_size - a) > e.w_size ? e.w_size : a;
      if ((o = e.strstart - e.block_start) >= r || (o || t === A) && t !== h && e.strm.avail_in === 0 && o <= a) {
        n = o > a ? a : o;
        s = +(t === A && e.strm.avail_in === 0 && n === o);
        i(e, e.block_start, n, s);
        e.block_start += n;
        L(e.strm);
      }
      if (s) {
        return 3;
      } else {
        return 1;
      }
    }
  };
  let G = (e, t) => {
    let r;
    let n;
    while (true) {
      if (e.lookahead < 262) {
        z(e);
        if (e.lookahead < 262 && t === h) {
          return 1;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (e.lookahead >= 3) {
        e.ins_h = F(e, e.ins_h, e.window[e.strstart + 3 - 1]);
        r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
        e.head[e.ins_h] = e.strstart;
      }
      if (r !== 0 && e.strstart - r <= e.w_size - 262) {
        e.match_length = U(e, r);
      }
      if (e.match_length >= 3) {
        n = a(e, e.strstart - e.match_start, e.match_length - 3);
        e.lookahead -= e.match_length;
        if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
          e.match_length--;
          do {
            e.strstart++;
            e.ins_h = F(e, e.ins_h, e.window[e.strstart + 3 - 1]);
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          } while (--e.match_length != 0);
          e.strstart++;
        } else {
          e.strstart += e.match_length;
          e.match_length = 0;
          e.ins_h = e.window[e.strstart];
          e.ins_h = F(e, e.ins_h, e.window[e.strstart + 1]);
        }
      } else {
        n = a(e, 0, e.window[e.strstart]);
        e.lookahead--;
        e.strstart++;
      }
      if (n && (O(e, false), e.strm.avail_out === 0)) {
        return 1;
      }
    }
    e.insert = e.strstart < 2 ? e.strstart : 2;
    if (t === A) {
      O(e, true);
      if (e.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (e.sym_next && (O(e, false), e.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let Z = (e, t) => {
    let r;
    let n;
    let i;
    while (true) {
      if (e.lookahead < 262) {
        z(e);
        if (e.lookahead < 262 && t === h) {
          return 1;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      r = 0;
      if (e.lookahead >= 3) {
        e.ins_h = F(e, e.ins_h, e.window[e.strstart + 3 - 1]);
        r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
        e.head[e.ins_h] = e.strstart;
      }
      e.prev_length = e.match_length;
      e.prev_match = e.match_start;
      e.match_length = 2;
      if (r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - 262) {
        e.match_length = U(e, r);
        if (e.match_length <= 5 && (e.strategy === C || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
          e.match_length = 2;
        }
      }
      if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
        i = e.strstart + e.lookahead - 3;
        n = a(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
        e.lookahead -= e.prev_length - 1;
        e.prev_length -= 2;
        do {
          if (++e.strstart <= i) {
            e.ins_h = F(e, e.ins_h, e.window[e.strstart + 3 - 1]);
            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
            e.head[e.ins_h] = e.strstart;
          }
        } while (--e.prev_length != 0);
        e.match_available = 0;
        e.match_length = 2;
        e.strstart++;
        if (n && (O(e, false), e.strm.avail_out === 0)) {
          return 1;
        }
      } else if (e.match_available) {
        if (n = a(e, 0, e.window[e.strstart - 1])) {
          O(e, false);
        }
        e.strstart++;
        e.lookahead--;
        if (e.strm.avail_out === 0) {
          return 1;
        }
      } else {
        e.match_available = 1;
        e.strstart++;
        e.lookahead--;
      }
    }
    if (e.match_available) {
      n = a(e, 0, e.window[e.strstart - 1]);
      e.match_available = 0;
    }
    e.insert = e.strstart < 2 ? e.strstart : 2;
    if (t === A) {
      O(e, true);
      if (e.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (e.sym_next && (O(e, false), e.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let W = (e, t) => {
    let r;
    let n;
    let i;
    let o;
    let s = e.window;
    while (true) {
      if (e.lookahead <= 258) {
        z(e);
        if (e.lookahead <= 258 && t === h) {
          return 1;
        }
        if (e.lookahead === 0) {
          break;
        }
      }
      e.match_length = 0;
      if (e.lookahead >= 3 && e.strstart > 0 && (n = s[i = e.strstart - 1]) === s[++i] && n === s[++i] && n === s[++i]) {
        o = e.strstart + 258;
        do ; while (n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && n === s[++i] && i < o);
        e.match_length = 258 - (o - i);
        if (e.match_length > e.lookahead) {
          e.match_length = e.lookahead;
        }
      }
      if (e.match_length >= 3) {
        r = a(e, 1, e.match_length - 3);
        e.lookahead -= e.match_length;
        e.strstart += e.match_length;
        e.match_length = 0;
      } else {
        r = a(e, 0, e.window[e.strstart]);
        e.lookahead--;
        e.strstart++;
      }
      if (r && (O(e, false), e.strm.avail_out === 0)) {
        return 1;
      }
    }
    e.insert = 0;
    if (t === A) {
      O(e, true);
      if (e.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (e.sym_next && (O(e, false), e.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  let j = (e, t) => {
    let r;
    while (true) {
      if (e.lookahead === 0 && (z(e), e.lookahead === 0)) {
        if (t === h) {
          return 1;
        }
        break;
      }
      e.match_length = 0;
      r = a(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
      if (r && (O(e, false), e.strm.avail_out === 0)) {
        return 1;
      }
    }
    e.insert = 0;
    if (t === A) {
      O(e, true);
      if (e.strm.avail_out === 0) {
        return 3;
      } else {
        return 4;
      }
    } else if (e.sym_next && (O(e, false), e.strm.avail_out === 0)) {
      return 1;
    } else {
      return 2;
    }
  };
  function Y(e, t, r, n, i) {
    this.good_length = e;
    this.max_lazy = t;
    this.nice_length = r;
    this.max_chain = n;
    this.func = i;
  }
  let K = [new Y(0, 0, 0, 0, H), new Y(4, 4, 8, 4, G), new Y(4, 5, 16, 8, G), new Y(4, 6, 32, 32, G), new Y(4, 4, 16, 16, Z), new Y(8, 16, 32, 32, Z), new Y(8, 16, 128, 128, Z), new Y(8, 32, 128, 256, Z), new Y(32, 128, 258, 1024, Z), new Y(32, 258, 258, 4096, Z)];
  let q = e => {
    e.window_size = e.w_size * 2;
    Q(e.head);
    e.max_lazy_match = K[e.level].max_lazy;
    e.good_match = K[e.level].good_length;
    e.nice_match = K[e.level].nice_length;
    e.max_chain_length = K[e.level].max_chain;
    e.strstart = 0;
    e.block_start = 0;
    e.lookahead = 0;
    e.insert = 0;
    e.match_length = e.prev_length = 2;
    e.match_available = 0;
    e.ins_h = 0;
  };
  function V() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = S;
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
    this.dyn_ltree = new Uint16Array(k * 2);
    this.dyn_dtree = new Uint16Array(122);
    this.bl_tree = new Uint16Array(78);
    Q(this.dyn_ltree);
    Q(this.dyn_dtree);
    Q(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new Uint16Array(16);
    this.heap = new Uint16Array(573);
    Q(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new Uint16Array(573);
    Q(this.depth);
    this.sym_buf = 0;
    this.lit_bufsize = 0;
    this.sym_next = 0;
    this.sym_end = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
  }
  let J = e => {
    if (!e) {
      return 1;
    }
    let t = e.state;
    if (t && t.strm === e && (t.status === 42 || t.status === 57 || t.status === 69 || t.status === 73 || t.status === 91 || t.status === 103 || t.status === 113 || t.status === 666)) {
      return 0;
    } else {
      return 1;
    }
  };
  let X = e => {
    if (J(e)) {
      return _(e, y);
    }
    e.total_in = e.total_out = 0;
    e.data_type = D;
    let t = e.state;
    t.pending = 0;
    t.pending_out = 0;
    if (t.wrap < 0) {
      t.wrap = -t.wrap;
    }
    t.status = t.wrap === 2 ? 57 : t.wrap ? 42 : 113;
    e.adler = +(t.wrap !== 2);
    t.last_flush = -2;
    n(t);
    return p;
  };
  let $ = e => {
    let t = X(e);
    if (t === p) {
      q(e.state);
    }
    return t;
  };
  let ee = (e, t, r, n, i, o) => {
    if (!e) {
      return y;
    }
    let a = 1;
    if (t === w) {
      t = 6;
    }
    if (n < 0) {
      a = 0;
      n = -n;
    } else if (n > 15) {
      a = 2;
      n -= 16;
    }
    if (i < 1 || i > 9 || r !== S || n < 8 || n > 15 || t < 0 || t > 9 || o < 0 || o > B || n === 8 && a !== 1) {
      return _(e, y);
    }
    if (n === 8) {
      n = 9;
    }
    let s = new V();
    e.state = s;
    s.strm = e;
    s.status = 42;
    s.wrap = a;
    s.gzhead = null;
    s.w_bits = n;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = i + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    s.lit_bufsize = 1 << i + 6;
    s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    s.sym_buf = s.lit_bufsize;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    s.level = t;
    s.strategy = o;
    s.method = r;
    return $(e);
  };
  module.exports.deflateInit = (e, t) => ee(e, t, S, 15, 8, x);
  module.exports.deflateInit2 = ee;
  module.exports.deflateReset = $;
  module.exports.deflateResetKeep = X;
  module.exports.deflateSetHeader = (e, t) => J(e) || e.state.wrap !== 2 ? y : (e.state.gzhead = t, p);
  module.exports.deflate = (e, t) => {
    if (J(e) || t > g || t < 0) {
      if (e) {
        return _(e, y);
      } else {
        return y;
      }
    }
    let r = e.state;
    if (!e.output || e.avail_in !== 0 && !e.input || r.status === 666 && t !== A) {
      return _(e, e.avail_out === 0 ? b : y);
    }
    let n = r.last_flush;
    r.last_flush = t;
    if (r.pending !== 0) {
      L(e);
      if (e.avail_out === 0) {
        r.last_flush = -1;
        return p;
      }
    } else if (e.avail_in === 0 && T(t) <= T(n) && t !== A) {
      return _(e, b);
    }
    if (r.status === 666 && e.avail_in !== 0) {
      return _(e, b);
    }
    if (r.status === 42 && r.wrap === 0) {
      r.status = 113;
    }
    if (r.status === 42) {
      let t = S + (r.w_bits - 8 << 4) << 8;
      let n = -1;
      t |= (r.strategy >= E || r.level < 2 ? 0 : r.level < 6 ? 1 : r.level === 6 ? 2 : 3) << 6;
      if (r.strstart !== 0) {
        t |= 32;
      }
      M(r, t += 31 - t % 31);
      if (r.strstart !== 0) {
        M(r, e.adler >>> 16);
        M(r, e.adler & 65535);
      }
      e.adler = 1;
      r.status = 113;
      L(e);
      if (r.pending !== 0) {
        r.last_flush = -1;
        return p;
      }
    }
    if (r.status === 57) {
      e.adler = 0;
      N(r, 31);
      N(r, 139);
      N(r, 8);
      if (r.gzhead) {
        N(r, +!!r.gzhead.text + !!r.gzhead.hcrc * 2 + !!r.gzhead.extra * 4 + !!r.gzhead.name * 8 + !!r.gzhead.comment * 16);
        N(r, r.gzhead.time & 255);
        N(r, r.gzhead.time >> 8 & 255);
        N(r, r.gzhead.time >> 16 & 255);
        N(r, r.gzhead.time >> 24 & 255);
        N(r, r.level === 9 ? 2 : (r.strategy >= E || r.level < 2) * 4);
        N(r, r.gzhead.os & 255);
        if (r.gzhead.extra && r.gzhead.extra.length) {
          N(r, r.gzhead.extra.length & 255);
          N(r, r.gzhead.extra.length >> 8 & 255);
        }
        if (r.gzhead.hcrc) {
          e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending, 0);
        }
        r.gzindex = 0;
        r.status = 69;
      } else {
        N(r, 0);
        N(r, 0);
        N(r, 0);
        N(r, 0);
        N(r, 0);
        N(r, r.level === 9 ? 2 : (r.strategy >= E || r.level < 2) * 4);
        N(r, 3);
        r.status = 113;
        L(e);
        if (r.pending !== 0) {
          r.last_flush = -1;
          return p;
        }
      }
    }
    if (r.status === 69) {
      if (r.gzhead.extra) {
        let t = r.pending;
        let n = (r.gzhead.extra.length & 65535) - r.gzindex;
        while (r.pending + n > r.pending_buf_size) {
          let i = r.pending_buf_size - r.pending;
          r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex, r.gzindex + i), r.pending);
          r.pending = r.pending_buf_size;
          if (r.gzhead.hcrc && r.pending > t) {
            e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - t, t);
          }
          r.gzindex += i;
          L(e);
          if (r.pending !== 0) {
            r.last_flush = -1;
            return p;
          }
          t = 0;
          n -= i;
        }
        let i = new Uint8Array(r.gzhead.extra);
        r.pending_buf.set(i.subarray(r.gzindex, r.gzindex + n), r.pending);
        r.pending += n;
        if (r.gzhead.hcrc && r.pending > t) {
          e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - t, t);
        }
        r.gzindex = 0;
      }
      r.status = 73;
    }
    if (r.status === 73) {
      if (r.gzhead.name) {
        let t;
        let n = r.pending;
        do {
          if (r.pending === r.pending_buf_size) {
            if (r.gzhead.hcrc && r.pending > n) {
              e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - n, n);
            }
            L(e);
            if (r.pending !== 0) {
              r.last_flush = -1;
              return p;
            }
            n = 0;
          }
          t = r.gzindex < r.gzhead.name.length ? r.gzhead.name.charCodeAt(r.gzindex++) & 255 : 0;
          N(r, t);
        } while (t !== 0);
        if (r.gzhead.hcrc && r.pending > n) {
          e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - n, n);
        }
        r.gzindex = 0;
      }
      r.status = 91;
    }
    if (r.status === 91) {
      if (r.gzhead.comment) {
        let t;
        let n = r.pending;
        do {
          if (r.pending === r.pending_buf_size) {
            if (r.gzhead.hcrc && r.pending > n) {
              e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - n, n);
            }
            L(e);
            if (r.pending !== 0) {
              r.last_flush = -1;
              return p;
            }
            n = 0;
          }
          t = r.gzindex < r.gzhead.comment.length ? r.gzhead.comment.charCodeAt(r.gzindex++) & 255 : 0;
          N(r, t);
        } while (t !== 0);
        if (r.gzhead.hcrc && r.pending > n) {
          e.adler = crc32ChecksumUtil(e.adler, r.pending_buf, r.pending - n, n);
        }
      }
      r.status = 103;
    }
    if (r.status === 103) {
      if (r.gzhead.hcrc) {
        if (r.pending + 2 > r.pending_buf_size && (L(e), r.pending !== 0)) {
          r.last_flush = -1;
          return p;
        }
        N(r, e.adler & 255);
        N(r, e.adler >> 8 & 255);
        e.adler = 0;
      }
      r.status = 113;
      L(e);
      if (r.pending !== 0) {
        r.last_flush = -1;
        return p;
      }
    }
    if (e.avail_in !== 0 || r.lookahead !== 0 || t !== h && r.status !== 666) {
      let n = r.level === 0 ? H(r, t) : r.strategy === E ? j(r, t) : r.strategy === I ? W(r, t) : K[r.level].func(r, t);
      if (n === 3 || n === 4) {
        r.status = 666;
      }
      if (n === 1 || n === 3) {
        if (e.avail_out === 0) {
          r.last_flush = -1;
        }
        return p;
      }
      if (n === 2 && (t === d ? s(r) : t !== g && (i(r, 0, 0, false), t === f && (Q(r.head), r.lookahead === 0 && (r.strstart = 0, r.block_start = 0, r.insert = 0))), L(e), e.avail_out === 0)) {
        r.last_flush = -1;
        return p;
      }
    }
    if (t !== A) {
      return p;
    } else if (r.wrap <= 0) {
      return m;
    } else {
      if (r.wrap === 2) {
        N(r, e.adler & 255);
        N(r, e.adler >> 8 & 255);
        N(r, e.adler >> 16 & 255);
        N(r, e.adler >> 24 & 255);
        N(r, e.total_in & 255);
        N(r, e.total_in >> 8 & 255);
        N(r, e.total_in >> 16 & 255);
        N(r, e.total_in >> 24 & 255);
      } else {
        M(r, e.adler >>> 16);
        M(r, e.adler & 65535);
      }
      L(e);
      if (r.wrap > 0) {
        r.wrap = -r.wrap;
      }
      if (r.pending !== 0) {
        return p;
      } else {
        return m;
      }
    }
  };
  module.exports.deflateEnd = e => {
    if (J(e)) {
      return y;
    }
    let t = e.state.status;
    e.state = null;
    if (t === 113) {
      return _(e, v);
    } else {
      return p;
    }
  };
  module.exports.deflateSetDictionary = (e, t) => {
    let r = t.length;
    if (J(e)) {
      return y;
    }
    let n = e.state;
    let i = n.wrap;
    if (i === 2 || i === 1 && n.status !== 42 || n.lookahead) {
      return y;
    }
    if (i === 1) {
      e.adler = adler32ChecksumUtil(e.adler, t, r, 0);
    }
    n.wrap = 0;
    if (r >= n.w_size) {
      if (i === 0) {
        Q(n.head);
        n.strstart = 0;
        n.block_start = 0;
        n.insert = 0;
      }
      let e = new Uint8Array(n.w_size);
      e.set(t.subarray(r - n.w_size, r), 0);
      t = e;
      r = n.w_size;
    }
    let o = e.avail_in;
    let a = e.next_in;
    let s = e.input;
    e.avail_in = r;
    e.next_in = 0;
    e.input = t;
    z(n);
    while (n.lookahead >= 3) {
      let e = n.strstart;
      let t = n.lookahead - 2;
      do {
        n.ins_h = F(n, n.ins_h, n.window[e + 3 - 1]);
        n.prev[e & n.w_mask] = n.head[n.ins_h];
        n.head[n.ins_h] = e;
        e++;
      } while (--t);
      n.strstart = e;
      n.lookahead = 2;
      z(n);
    }
    n.strstart += n.lookahead;
    n.block_start = n.strstart;
    n.insert = n.lookahead;
    n.lookahead = 0;
    n.match_length = n.prev_length = 2;
    n.match_available = 0;
    e.next_in = a;
    e.input = s;
    e.avail_in = o;
    n.wrap = i;
    return p;
  };
  module.exports.deflateInfo = "pako deflate (from Nodeca project)";
}