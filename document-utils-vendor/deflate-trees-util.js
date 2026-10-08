// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 119122
         */
module.exports = function (module, exports, require) {
  let t;
  let r;
  let n;
  function i(e) {
    let t = e.length;
    while (--t >= 0) {
      e[t] = 0;
    }
  }
  let o = 573;
  let a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
  let s = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  let l = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
  let u = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  let c = Array(576);
  i(c);
  let h = Array(60);
  i(h);
  let d = Array(512);
  i(d);
  let f = Array(256);
  i(f);
  let A = Array(29);
  i(A);
  let g = Array(30);
  function p(e, t, r, n, i) {
    this.static_tree = e;
    this.extra_bits = t;
    this.extra_base = r;
    this.elems = n;
    this.max_length = i;
    this.has_stree = e && e.length;
  }
  function m(e, t) {
    this.dyn_tree = e;
    this.max_code = 0;
    this.stat_desc = t;
  }
  i(g);
  let y = e => e < 256 ? d[e] : d[256 + (e >>> 7)];
  let v = (e, t) => {
    e.pending_buf[e.pending++] = t & 255;
    e.pending_buf[e.pending++] = t >>> 8 & 255;
  };
  let b = (e, t, r) => {
    if (e.bi_valid > 16 - r) {
      e.bi_buf |= t << e.bi_valid & 65535;
      v(e, e.bi_buf);
      e.bi_buf = t >> 16 - e.bi_valid;
      e.bi_valid += r - 16;
    } else {
      e.bi_buf |= t << e.bi_valid & 65535;
      e.bi_valid += r;
    }
  };
  let w = (e, t, r) => {
    b(e, r[t * 2], r[t * 2 + 1]);
  };
  let C = (e, t) => {
    let r = 0;
    do {
      r |= e & 1;
      e >>>= 1;
      r <<= 1;
    } while (--t > 0);
    return r >>> 1;
  };
  let E = e => {
    if (e.bi_valid === 16) {
      v(e, e.bi_buf);
      e.bi_buf = 0;
      e.bi_valid = 0;
    } else if (e.bi_valid >= 8) {
      e.pending_buf[e.pending++] = e.bi_buf & 255;
      e.bi_buf >>= 8;
      e.bi_valid -= 8;
    }
  };
  let I = (e, t) => {
    let r;
    let n;
    let i;
    let a;
    let s;
    let l;
    let u = t.dyn_tree;
    let c = t.max_code;
    let h = t.stat_desc.static_tree;
    let d = t.stat_desc.has_stree;
    let f = t.stat_desc.extra_bits;
    let A = t.stat_desc.extra_base;
    let g = t.stat_desc.max_length;
    let p = 0;
    for (a = 0; a <= 15; a++) {
      e.bl_count[a] = 0;
    }
    u[e.heap[e.heap_max] * 2 + 1] = 0;
    r = e.heap_max + 1;
    for (; r < o; r++) {
      if ((a = u[u[(n = e.heap[r]) * 2 + 1] * 2 + 1] + 1) > g) {
        a = g;
        p++;
      }
      u[n * 2 + 1] = a;
      if (!(n > c)) {
        e.bl_count[a]++;
        s = 0;
        if (n >= A) {
          s = f[n - A];
        }
        l = u[n * 2];
        e.opt_len += l * (a + s);
        if (d) {
          e.static_len += l * (h[n * 2 + 1] + s);
        }
      }
    }
    if (p !== 0) {
      do {
        for (a = g - 1; e.bl_count[a] === 0;) {
          a--;
        }
        e.bl_count[a]--;
        e.bl_count[a + 1] += 2;
        e.bl_count[g]--;
        p -= 2;
      } while (p > 0);
      for (a = g; a !== 0; a--) {
        for (n = e.bl_count[a]; n !== 0;) {
          if (!((i = e.heap[--r]) > c)) {
            if (u[i * 2 + 1] !== a) {
              e.opt_len += (a - u[i * 2 + 1]) * u[i * 2];
              u[i * 2 + 1] = a;
            }
            n--;
          }
        }
      }
    }
  };
  let B = (e, t, r) => {
    let n;
    let i;
    let o = Array(16);
    let a = 0;
    for (n = 1; n <= 15; n++) {
      a = a + r[n - 1] << 1;
      o[n] = a;
    }
    for (i = 0; i <= t; i++) {
      let t = e[i * 2 + 1];
      if (t !== 0) {
        e[i * 2] = C(o[t]++, t);
      }
    }
  };
  let x = () => {
    let e;
    let i;
    let o;
    let u;
    let m;
    let y = Array(16);
    u = 0;
    o = 0;
    for (; u < 28; u++) {
      e = 0;
      A[u] = o;
      for (; e < 1 << a[u]; e++) {
        f[o++] = u;
      }
    }
    f[o - 1] = u;
    m = 0;
    u = 0;
    for (; u < 16; u++) {
      e = 0;
      g[u] = m;
      for (; e < 1 << s[u]; e++) {
        d[m++] = u;
      }
    }
    for (m >>= 7; u < 30; u++) {
      e = 0;
      g[u] = m << 7;
      for (; e < 1 << s[u] - 7; e++) {
        d[256 + m++] = u;
      }
    }
    for (i = 0; i <= 15; i++) {
      y[i] = 0;
    }
    for (e = 0; e <= 143;) {
      c[e * 2 + 1] = 8;
      e++;
      y[8]++;
    }
    while (e <= 255) {
      c[e * 2 + 1] = 9;
      e++;
      y[9]++;
    }
    while (e <= 279) {
      c[e * 2 + 1] = 7;
      e++;
      y[7]++;
    }
    while (e <= 287) {
      c[e * 2 + 1] = 8;
      e++;
      y[8]++;
    }
    B(c, 287, y);
    e = 0;
    for (; e < 30; e++) {
      h[e * 2 + 1] = 5;
      h[e * 2] = C(e, 5);
    }
    t = new p(c, a, 257, 286, 15);
    r = new p(h, s, 0, 30, 15);
    n = new p([], l, 0, 19, 7);
  };
  let D = e => {
    let t;
    for (t = 0; t < 286; t++) {
      e.dyn_ltree[t * 2] = 0;
    }
    for (t = 0; t < 30; t++) {
      e.dyn_dtree[t * 2] = 0;
    }
    for (t = 0; t < 19; t++) {
      e.bl_tree[t * 2] = 0;
    }
    e.dyn_ltree[512] = 1;
    e.opt_len = e.static_len = 0;
    e.sym_next = e.matches = 0;
  };
  let S = e => {
    if (e.bi_valid > 8) {
      v(e, e.bi_buf);
    } else if (e.bi_valid > 0) {
      e.pending_buf[e.pending++] = e.bi_buf;
    }
    e.bi_buf = 0;
    e.bi_valid = 0;
  };
  let k = (e, t, r, n) => {
    let i = t * 2;
    let o = r * 2;
    return e[i] < e[o] || e[i] === e[o] && n[t] <= n[r];
  };
  let _ = (e, t, r) => {
    let n = e.heap[r];
    let i = r << 1;
    while (i <= e.heap_len && (i < e.heap_len && k(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !k(t, n, e.heap[i], e.depth))) {
      e.heap[r] = e.heap[i];
      r = i;
      i <<= 1;
    }
    e.heap[r] = n;
  };
  let T = (e, t, r) => {
    let n;
    let i;
    let o;
    let l;
    let u = 0;
    if (e.sym_next !== 0) {
      do {
        n = (e.pending_buf[e.sym_buf + u++] & 255) + ((e.pending_buf[e.sym_buf + u++] & 255) << 8);
        i = e.pending_buf[e.sym_buf + u++];
        if (n === 0) {
          w(e, i, t);
        } else {
          w(e, (o = f[i]) + 256 + 1, t);
          if ((l = a[o]) !== 0) {
            b(e, i -= A[o], l);
          }
          w(e, o = y(--n), r);
          if ((l = s[o]) !== 0) {
            b(e, n -= g[o], l);
          }
        }
      } while (u < e.sym_next);
    }
    w(e, 256, t);
  };
  let Q = (e, t) => {
    let r;
    let n;
    let i;
    let a = t.dyn_tree;
    let s = t.stat_desc.static_tree;
    let l = t.stat_desc.has_stree;
    let u = t.stat_desc.elems;
    let c = -1;
    r = 0;
    e.heap_len = 0;
    e.heap_max = o;
    for (; r < u; r++) {
      if (a[r * 2] !== 0) {
        e.heap[++e.heap_len] = c = r;
        e.depth[r] = 0;
      } else {
        a[r * 2 + 1] = 0;
      }
    }
    while (e.heap_len < 2) {
      a[(i = e.heap[++e.heap_len] = c < 2 ? ++c : 0) * 2] = 1;
      e.depth[i] = 0;
      e.opt_len--;
      if (l) {
        e.static_len -= s[i * 2 + 1];
      }
    }
    t.max_code = c;
    r = e.heap_len >> 1;
    for (; r >= 1; r--) {
      _(e, a, r);
    }
    i = u;
    do {
      r = e.heap[1];
      e.heap[1] = e.heap[e.heap_len--];
      _(e, a, 1);
      n = e.heap[1];
      e.heap[--e.heap_max] = r;
      e.heap[--e.heap_max] = n;
      a[i * 2] = a[r * 2] + a[n * 2];
      e.depth[i] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1;
      a[r * 2 + 1] = a[n * 2 + 1] = i;
      e.heap[1] = i++;
      _(e, a, 1);
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1];
    I(e, t);
    B(a, c, e.bl_count);
  };
  let R = (e, t, r) => {
    let n;
    let i;
    let o = -1;
    let a = t[1];
    let s = 0;
    let l = 7;
    let u = 4;
    if (a === 0) {
      l = 138;
      u = 3;
    }
    t[(r + 1) * 2 + 1] = 65535;
    n = 0;
    for (; n <= r; n++) {
      i = a;
      a = t[(n + 1) * 2 + 1];
      if (!(++s < l) || i !== a) {
        if (s < u) {
          e.bl_tree[i * 2] += s;
        } else if (i !== 0) {
          if (i !== o) {
            e.bl_tree[i * 2]++;
          }
          e.bl_tree[32]++;
        } else if (s <= 10) {
          e.bl_tree[34]++;
        } else {
          e.bl_tree[36]++;
        }
        s = 0;
        o = i;
        if (a === 0) {
          l = 138;
          u = 3;
        } else if (i === a) {
          l = 6;
          u = 3;
        } else {
          l = 7;
          u = 4;
        }
      }
    }
  };
  let F = (e, t, r) => {
    let n;
    let i;
    let o = -1;
    let a = t[1];
    let s = 0;
    let l = 7;
    let u = 4;
    if (a === 0) {
      l = 138;
      u = 3;
    }
    n = 0;
    for (; n <= r; n++) {
      i = a;
      a = t[(n + 1) * 2 + 1];
      if (!(++s < l) || i !== a) {
        if (s < u) {
          do {
            w(e, i, e.bl_tree);
          } while (--s != 0);
        } else if (i !== 0) {
          if (i !== o) {
            w(e, i, e.bl_tree);
            s--;
          }
          w(e, 16, e.bl_tree);
          b(e, s - 3, 2);
        } else if (s <= 10) {
          w(e, 17, e.bl_tree);
          b(e, s - 3, 3);
        } else {
          w(e, 18, e.bl_tree);
          b(e, s - 11, 7);
        }
        s = 0;
        o = i;
        if (a === 0) {
          l = 138;
          u = 3;
        } else if (i === a) {
          l = 6;
          u = 3;
        } else {
          l = 7;
          u = 4;
        }
      }
    }
  };
  let L = e => {
    let t;
    R(e, e.dyn_ltree, e.l_desc.max_code);
    R(e, e.dyn_dtree, e.d_desc.max_code);
    Q(e, e.bl_desc);
    t = 18;
    for (; t >= 3 && e.bl_tree[u[t] * 2 + 1] === 0; t--);
    e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
    return t;
  };
  let O = (e, t, r, n) => {
    let i;
    b(e, t - 257, 5);
    b(e, r - 1, 5);
    b(e, n - 4, 4);
    i = 0;
    for (; i < n; i++) {
      b(e, e.bl_tree[u[i] * 2 + 1], 3);
    }
    F(e, e.dyn_ltree, t - 1);
    F(e, e.dyn_dtree, r - 1);
  };
  let N = e => {
    let t;
    let r = 4093624447;
    for (t = 0; t <= 31; t++, r >>>= 1) {
      if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
        return 0;
      }
    }
    if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
      return 1;
    }
    for (t = 32; t < 256; t++) {
      if (e.dyn_ltree[t * 2] !== 0) {
        return 1;
      }
    }
    return 0;
  };
  let M = false;
  let P = (e, t, r, n) => {
    b(e, 0 + +!!n, 3);
    S(e);
    v(e, r);
    v(e, ~r);
    if (r) {
      e.pending_buf.set(e.window.subarray(t, t + r), e.pending);
    }
    e.pending += r;
  };
  module.exports._tr_init = e => {
    if (!M) {
      x();
      M = true;
    }
    e.l_desc = new m(e.dyn_ltree, t);
    e.d_desc = new m(e.dyn_dtree, r);
    e.bl_desc = new m(e.bl_tree, n);
    e.bi_buf = 0;
    e.bi_valid = 0;
    D(e);
  };
  module.exports._tr_stored_block = P;
  module.exports._tr_flush_block = (e, t, r, n) => {
    let i;
    let o;
    let a = 0;
    if (e.level > 0) {
      if (e.strm.data_type === 2) {
        e.strm.data_type = N(e);
      }
      Q(e, e.l_desc);
      Q(e, e.d_desc);
      a = L(e);
      i = e.opt_len + 3 + 7 >>> 3;
      if ((o = e.static_len + 3 + 7 >>> 3) <= i) {
        i = o;
      }
    } else {
      i = o = r + 5;
    }
    if (r + 4 <= i && t !== -1) {
      P(e, t, r, n);
    } else if (e.strategy === 4 || o === i) {
      b(e, 2 + +!!n, 3);
      T(e, c, h);
    } else {
      b(e, 4 + +!!n, 3);
      O(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1);
      T(e, e.dyn_ltree, e.dyn_dtree);
    }
    D(e);
    if (n) {
      S(e);
    }
  };
  module.exports._tr_tally = (e, t, r) => {
    e.pending_buf[e.sym_buf + e.sym_next++] = t;
    e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8;
    e.pending_buf[e.sym_buf + e.sym_next++] = r;
    if (t === 0) {
      e.dyn_ltree[r * 2]++;
    } else {
      e.matches++;
      t--;
      e.dyn_ltree[(f[r] + 256 + 1) * 2]++;
      e.dyn_dtree[y(t) * 2]++;
    }
    return e.sym_next === e.sym_end;
  };
  module.exports._tr_align = e => {
    b(e, 2, 3);
    w(e, 256, c);
    E(e);
  };
}