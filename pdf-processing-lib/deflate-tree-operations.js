// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 315178
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var o;
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var a = 4;
  var l = 0;
  var h = 1;
  var c = 2;
  function u(t) {
    for (var e = t.length; --e >= 0;) {
      t[e] = 0;
    }
  }
  var d = 0;
  var f = 1;
  var p = 2;
  var g = 3;
  var m = 258;
  var v = 29;
  var y = 256;
  var b = 286;
  var A = 30;
  var S = 19;
  var x = 573;
  var w = 15;
  var C = 16;
  var T = 7;
  var E = 256;
  var F = 16;
  var k = 17;
  var P = 18;
  var R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var M = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var D = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var I = 512;
  var L = Array(576);
  u(L);
  var N = Array(A * 2);
  u(N);
  var B = Array(I);
  u(B);
  var j = Array(m - g + 1);
  u(j);
  var _ = Array(v);
  u(_);
  var U = Array(A);
  function z(t, e, r, i, n) {
    this.static_tree = t;
    this.extra_bits = e;
    this.extra_base = r;
    this.elems = i;
    this.max_length = n;
    this.has_stree = t && t.length;
  }
  function V(t, e) {
    this.dyn_tree = t;
    this.max_code = 0;
    this.stat_desc = e;
  }
  function W(t) {
    if (t < 256) {
      return B[t];
    } else {
      return B[256 + (t >>> 7)];
    }
  }
  function G(t, e) {
    t.pending_buf[t.pending++] = e & 255;
    t.pending_buf[t.pending++] = e >>> 8 & 255;
  }
  function q(t, e, r) {
    if (t.bi_valid > C - r) {
      t.bi_buf |= e << t.bi_valid & 65535;
      G(t, t.bi_buf);
      t.bi_buf = e >> C - t.bi_valid;
      t.bi_valid += r - C;
    } else {
      t.bi_buf |= e << t.bi_valid & 65535;
      t.bi_valid += r;
    }
  }
  function H(t, e, r) {
    q(t, r[e * 2], r[e * 2 + 1]);
  }
  function K(t, e) {
    var r = 0;
    do {
      r |= t & 1;
      t >>>= 1;
      r <<= 1;
    } while (--e > 0);
    return r >>> 1;
  }
  function X(t) {
    if (t.bi_valid === 16) {
      G(t, t.bi_buf);
      t.bi_buf = 0;
      t.bi_valid = 0;
    } else if (t.bi_valid >= 8) {
      t.pending_buf[t.pending++] = t.bi_buf & 255;
      t.bi_buf >>= 8;
      t.bi_valid -= 8;
    }
  }
  function Z(t, e) {
    var r;
    var i;
    var n;
    var o;
    var s;
    var a;
    var l = e.dyn_tree;
    var h = e.max_code;
    var c = e.stat_desc.static_tree;
    var u = e.stat_desc.has_stree;
    var d = e.stat_desc.extra_bits;
    var f = e.stat_desc.extra_base;
    var p = e.stat_desc.max_length;
    var g = 0;
    for (o = 0; o <= w; o++) {
      t.bl_count[o] = 0;
    }
    l[t.heap[t.heap_max] * 2 + 1] = 0;
    r = t.heap_max + 1;
    for (; r < x; r++) {
      if ((o = l[l[(i = t.heap[r]) * 2 + 1] * 2 + 1] + 1) > p) {
        o = p;
        g++;
      }
      l[i * 2 + 1] = o;
      if (!(i > h)) {
        t.bl_count[o]++;
        s = 0;
        if (i >= f) {
          s = d[i - f];
        }
        a = l[i * 2];
        t.opt_len += a * (o + s);
        if (u) {
          t.static_len += a * (c[i * 2 + 1] + s);
        }
      }
    }
    if (g !== 0) {
      do {
        for (o = p - 1; t.bl_count[o] === 0;) {
          o--;
        }
        t.bl_count[o]--;
        t.bl_count[o + 1] += 2;
        t.bl_count[p]--;
        g -= 2;
      } while (g > 0);
      for (o = p; o !== 0; o--) {
        for (i = t.bl_count[o]; i !== 0;) {
          if (!((n = t.heap[--r]) > h)) {
            if (l[n * 2 + 1] !== o) {
              t.opt_len += (o - l[n * 2 + 1]) * l[n * 2];
              l[n * 2 + 1] = o;
            }
            i--;
          }
        }
      }
    }
  }
  function Y(t, e, r) {
    var i;
    var n;
    var o = Array(w + 1);
    var s = 0;
    for (i = 1; i <= w; i++) {
      o[i] = s = s + r[i - 1] << 1;
    }
    for (n = 0; n <= e; n++) {
      var a = t[n * 2 + 1];
      if (a !== 0) {
        t[n * 2] = K(o[a]++, a);
      }
    }
  }
  function J() {
    var t;
    var e;
    var r;
    var s;
    var a;
    var l = Array(w + 1);
    s = 0;
    r = 0;
    for (; s < v - 1; s++) {
      t = 0;
      _[s] = r;
      for (; t < 1 << R[s]; t++) {
        j[r++] = s;
      }
    }
    j[r - 1] = s;
    a = 0;
    s = 0;
    for (; s < 16; s++) {
      t = 0;
      U[s] = a;
      for (; t < 1 << M[s]; t++) {
        B[a++] = s;
      }
    }
    for (a >>= 7; s < A; s++) {
      t = 0;
      U[s] = a << 7;
      for (; t < 1 << M[s] - 7; t++) {
        B[256 + a++] = s;
      }
    }
    for (e = 0; e <= w; e++) {
      l[e] = 0;
    }
    for (t = 0; t <= 143;) {
      L[t * 2 + 1] = 8;
      t++;
      l[8]++;
    }
    while (t <= 255) {
      L[t * 2 + 1] = 9;
      t++;
      l[9]++;
    }
    while (t <= 279) {
      L[t * 2 + 1] = 7;
      t++;
      l[7]++;
    }
    while (t <= 287) {
      L[t * 2 + 1] = 8;
      t++;
      l[8]++;
    }
    Y(L, b + 1, l);
    t = 0;
    for (; t < A; t++) {
      N[t * 2 + 1] = 5;
      N[t * 2] = K(t, 5);
    }
    i = new z(L, R, y + 1, b, w);
    n = new z(N, M, 0, A, w);
    o = new z([], O, 0, S, T);
  }
  function Q(t) {
    var e;
    for (e = 0; e < b; e++) {
      t.dyn_ltree[e * 2] = 0;
    }
    for (e = 0; e < A; e++) {
      t.dyn_dtree[e * 2] = 0;
    }
    for (e = 0; e < S; e++) {
      t.bl_tree[e * 2] = 0;
    }
    t.dyn_ltree[E * 2] = 1;
    t.opt_len = t.static_len = 0;
    t.last_lit = t.matches = 0;
  }
  function $(t) {
    if (t.bi_valid > 8) {
      G(t, t.bi_buf);
    } else if (t.bi_valid > 0) {
      t.pending_buf[t.pending++] = t.bi_buf;
    }
    t.bi_buf = 0;
    t.bi_valid = 0;
  }
  function tt(t, e, r, i) {
    $(t);
    if (i) {
      G(t, r);
      G(t, ~r);
    }
    commonBufferUtils.arraySet(t.pending_buf, t.window, e, r, t.pending);
    t.pending += r;
  }
  function te(t, e, r, i) {
    var n = e * 2;
    var o = r * 2;
    return t[n] < t[o] || t[n] === t[o] && i[e] <= i[r];
  }
  function tr(t, e, r) {
    var i = t.heap[r];
    var n = r << 1;
    while (n <= t.heap_len && (n < t.heap_len && te(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !te(e, i, t.heap[n], t.depth))) {
      t.heap[r] = t.heap[n];
      r = n;
      n <<= 1;
    }
    t.heap[r] = i;
  }
  function ti(t, e, r) {
    var i;
    var n;
    var o;
    var s;
    var a = 0;
    if (t.last_lit !== 0) {
      do {
        i = t.pending_buf[t.d_buf + a * 2] << 8 | t.pending_buf[t.d_buf + a * 2 + 1];
        n = t.pending_buf[t.l_buf + a];
        a++;
        if (i === 0) {
          H(t, n, e);
        } else {
          H(t, (o = j[n]) + y + 1, e);
          if ((s = R[o]) !== 0) {
            q(t, n -= _[o], s);
          }
          H(t, o = W(--i), r);
          if ((s = M[o]) !== 0) {
            q(t, i -= U[o], s);
          }
        }
      } while (a < t.last_lit);
    }
    H(t, E, e);
  }
  function tn(t, e) {
    var r;
    var i;
    var n;
    var o = e.dyn_tree;
    var s = e.stat_desc.static_tree;
    var a = e.stat_desc.has_stree;
    var l = e.stat_desc.elems;
    var h = -1;
    r = 0;
    t.heap_len = 0;
    t.heap_max = x;
    for (; r < l; r++) {
      if (o[r * 2] !== 0) {
        t.heap[++t.heap_len] = h = r;
        t.depth[r] = 0;
      } else {
        o[r * 2 + 1] = 0;
      }
    }
    while (t.heap_len < 2) {
      o[(n = t.heap[++t.heap_len] = h < 2 ? ++h : 0) * 2] = 1;
      t.depth[n] = 0;
      t.opt_len--;
      if (a) {
        t.static_len -= s[n * 2 + 1];
      }
    }
    e.max_code = h;
    r = t.heap_len >> 1;
    for (; r >= 1; r--) {
      tr(t, o, r);
    }
    n = l;
    do {
      r = t.heap[1];
      t.heap[1] = t.heap[t.heap_len--];
      tr(t, o, 1);
      i = t.heap[1];
      t.heap[--t.heap_max] = r;
      t.heap[--t.heap_max] = i;
      o[n * 2] = o[r * 2] + o[i * 2];
      t.depth[n] = (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1;
      o[r * 2 + 1] = o[i * 2 + 1] = n;
      t.heap[1] = n++;
      tr(t, o, 1);
    } while (t.heap_len >= 2);
    t.heap[--t.heap_max] = t.heap[1];
    Z(t, e);
    Y(o, h, t.bl_count);
  }
  function to(t, e, r) {
    var i;
    var n;
    var o = -1;
    var s = e[1];
    var a = 0;
    var l = 7;
    var h = 4;
    if (s === 0) {
      l = 138;
      h = 3;
    }
    e[(r + 1) * 2 + 1] = 65535;
    i = 0;
    for (; i <= r; i++) {
      n = s;
      s = e[(i + 1) * 2 + 1];
      if (!(++a < l) || n !== s) {
        if (a < h) {
          t.bl_tree[n * 2] += a;
        } else if (n !== 0) {
          if (n !== o) {
            t.bl_tree[n * 2]++;
          }
          t.bl_tree[F * 2]++;
        } else if (a <= 10) {
          t.bl_tree[k * 2]++;
        } else {
          t.bl_tree[P * 2]++;
        }
        a = 0;
        o = n;
        if (s === 0) {
          l = 138;
          h = 3;
        } else if (n === s) {
          l = 6;
          h = 3;
        } else {
          l = 7;
          h = 4;
        }
      }
    }
  }
  function ts(t, e, r) {
    var i;
    var n;
    var o = -1;
    var s = e[1];
    var a = 0;
    var l = 7;
    var h = 4;
    if (s === 0) {
      l = 138;
      h = 3;
    }
    i = 0;
    for (; i <= r; i++) {
      n = s;
      s = e[(i + 1) * 2 + 1];
      if (!(++a < l) || n !== s) {
        if (a < h) {
          do {
            H(t, n, t.bl_tree);
          } while (--a != 0);
        } else if (n !== 0) {
          if (n !== o) {
            H(t, n, t.bl_tree);
            a--;
          }
          H(t, F, t.bl_tree);
          q(t, a - 3, 2);
        } else if (a <= 10) {
          H(t, k, t.bl_tree);
          q(t, a - 3, 3);
        } else {
          H(t, P, t.bl_tree);
          q(t, a - 11, 7);
        }
        a = 0;
        o = n;
        if (s === 0) {
          l = 138;
          h = 3;
        } else if (n === s) {
          l = 6;
          h = 3;
        } else {
          l = 7;
          h = 4;
        }
      }
    }
  }
  function ta(t) {
    var e;
    to(t, t.dyn_ltree, t.l_desc.max_code);
    to(t, t.dyn_dtree, t.d_desc.max_code);
    tn(t, t.bl_desc);
    e = S - 1;
    for (; e >= 3 && t.bl_tree[D[e] * 2 + 1] === 0; e--);
    t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
    return e;
  }
  function tl(t, e, r, i) {
    var n;
    q(t, e - 257, 5);
    q(t, r - 1, 5);
    q(t, i - 4, 4);
    n = 0;
    for (; n < i; n++) {
      q(t, t.bl_tree[D[n] * 2 + 1], 3);
    }
    ts(t, t.dyn_ltree, e - 1);
    ts(t, t.dyn_dtree, r - 1);
  }
  function th(t) {
    var e;
    var r = 4093624447;
    for (e = 0; e <= 31; e++, r >>>= 1) {
      if (r & 1 && t.dyn_ltree[e * 2] !== 0) {
        return l;
      }
    }
    if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
      return h;
    }
    for (e = 32; e < y; e++) {
      if (t.dyn_ltree[e * 2] !== 0) {
        return h;
      }
    }
    return l;
  }
  u(U);
  var tc = false;
  function tu(t) {
    if (!tc) {
      J();
      tc = true;
    }
    t.l_desc = new V(t.dyn_ltree, i);
    t.d_desc = new V(t.dyn_dtree, n);
    t.bl_desc = new V(t.bl_tree, o);
    t.bi_buf = 0;
    t.bi_valid = 0;
    Q(t);
  }
  function td(t, e, r, i) {
    q(t, (d << 1) + +!!i, 3);
    tt(t, e, r, true);
  }
  function tf(t) {
    q(t, f << 1, 3);
    H(t, E, L);
    X(t);
  }
  function tp(t, e, r, i) {
    var n;
    var o;
    var s = 0;
    if (t.level > 0) {
      if (t.strm.data_type === c) {
        t.strm.data_type = th(t);
      }
      tn(t, t.l_desc);
      tn(t, t.d_desc);
      s = ta(t);
      n = t.opt_len + 3 + 7 >>> 3;
      if ((o = t.static_len + 3 + 7 >>> 3) <= n) {
        n = o;
      }
    } else {
      n = o = r + 5;
    }
    if (r + 4 <= n && e !== -1) {
      td(t, e, r, i);
    } else if (t.strategy === a || o === n) {
      q(t, (f << 1) + +!!i, 3);
      ti(t, L, N);
    } else {
      q(t, (p << 1) + +!!i, 3);
      tl(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1);
      ti(t, t.dyn_ltree, t.dyn_dtree);
    }
    Q(t);
    if (i) {
      $(t);
    }
  }
  function tg(t, e, r) {
    t.pending_buf[t.d_buf + t.last_lit * 2] = e >>> 8 & 255;
    t.pending_buf[t.d_buf + t.last_lit * 2 + 1] = e & 255;
    t.pending_buf[t.l_buf + t.last_lit] = r & 255;
    t.last_lit++;
    if (e === 0) {
      t.dyn_ltree[r * 2]++;
    } else {
      t.matches++;
      e--;
      t.dyn_ltree[(j[r] + y + 1) * 2]++;
      t.dyn_dtree[W(e) * 2]++;
    }
    return t.last_lit === t.lit_bufsize - 1;
  }
  exports._tr_init = tu;
  exports._tr_stored_block = td;
  exports._tr_flush_block = tp;
  exports._tr_tally = tg;
  exports._tr_align = tf;
}