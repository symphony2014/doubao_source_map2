// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'adler32ChecksumUtil'
// - Resolved require(711194) to 'adler32-checksum-util'
// - Renamed variable 'a' to 'crc32ChecksumUtil'
// - Resolved require(750330) to 'crc32-checksum-util'
// - Renamed variable 's' to 'zlibInflateCore_1'
// - Resolved require(264571) to 'zlib-inflate-core_1'
// - Renamed variable 'l' to 'zlibInflateTableBuilder'
// - Resolved require(854896) to 'zlib-inflate-table-builder'
// - Resolved require(980282) to 'zlib-constants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 323282
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let adler32ChecksumUtil = require("adler32-checksum-util") /*id: 711194*/;
  let crc32ChecksumUtil = require("crc32-checksum-util") /*id: 750330*/;
  let zlibInflateCore_1 = require("zlib-inflate-core_1") /*id: 264571*/;
  let zlibInflateTableBuilder = require("zlib-inflate-table-builder") /*id: 854896*/;
  let {
    Z_FINISH: u,
    Z_BLOCK: c,
    Z_TREES: h,
    Z_OK: d,
    Z_STREAM_END: f,
    Z_NEED_DICT: A,
    Z_STREAM_ERROR: g,
    Z_DATA_ERROR: p,
    Z_MEM_ERROR: m,
    Z_BUF_ERROR: y,
    Z_DEFLATED: v
  } = require("zlib-constants") /*id: 980282*/;
  let b = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
  function w() {
    this.strm = null;
    this.mode = 0;
    this.last = false;
    this.wrap = 0;
    this.havedict = false;
    this.flags = 0;
    this.dmax = 0;
    this.check = 0;
    this.total = 0;
    this.head = null;
    this.wbits = 0;
    this.wsize = 0;
    this.whave = 0;
    this.wnext = 0;
    this.window = null;
    this.hold = 0;
    this.bits = 0;
    this.length = 0;
    this.offset = 0;
    this.extra = 0;
    this.lencode = null;
    this.distcode = null;
    this.lenbits = 0;
    this.distbits = 0;
    this.ncode = 0;
    this.nlen = 0;
    this.ndist = 0;
    this.have = 0;
    this.next = null;
    this.lens = new Uint16Array(320);
    this.work = new Uint16Array(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  let C = e => {
    if (!e) {
      return 1;
    }
    let t = e.state;
    return +(!t || t.strm !== e || t.mode < 16180 || t.mode > 16211);
  };
  let E = e => {
    if (C(e)) {
      return g;
    }
    let t = e.state;
    e.total_in = e.total_out = t.total = 0;
    e.msg = "";
    if (t.wrap) {
      e.adler = t.wrap & 1;
    }
    t.mode = 16180;
    t.last = 0;
    t.havedict = 0;
    t.flags = -1;
    t.dmax = 32768;
    t.head = null;
    t.hold = 0;
    t.bits = 0;
    t.lencode = t.lendyn = new Int32Array(852);
    t.distcode = t.distdyn = new Int32Array(592);
    t.sane = 1;
    t.back = -1;
    return d;
  };
  let I = e => {
    if (C(e)) {
      return g;
    }
    let t = e.state;
    t.wsize = 0;
    t.whave = 0;
    t.wnext = 0;
    return E(e);
  };
  let B = (e, t) => {
    let r;
    if (C(e)) {
      return g;
    }
    let n = e.state;
    if (t < 0) {
      r = 0;
      t = -t;
    } else {
      r = (t >> 4) + 5;
      if (t < 48) {
        t &= 15;
      }
    }
    if (t && (t < 8 || t > 15)) {
      return g;
    } else {
      if (n.window !== null && n.wbits !== t) {
        n.window = null;
      }
      n.wrap = r;
      n.wbits = t;
      return I(e);
    }
  };
  let x = (e, t) => {
    if (!e) {
      return g;
    }
    let r = new w();
    e.state = r;
    r.strm = e;
    r.window = null;
    r.mode = 16180;
    let n = B(e, t);
    if (n !== d) {
      e.state = null;
    }
    return n;
  };
  let D = true;
  let S = e => {
    if (D) {
      n = new Int32Array(512);
      i = new Int32Array(32);
      let t = 0;
      while (t < 144) {
        e.lens[t++] = 8;
      }
      while (t < 256) {
        e.lens[t++] = 9;
      }
      while (t < 280) {
        e.lens[t++] = 7;
      }
      while (t < 288) {
        e.lens[t++] = 8;
      }
      zlibInflateTableBuilder(1, e.lens, 0, 288, n, 0, e.work, {
        bits: 9
      });
      t = 0;
      while (t < 32) {
        e.lens[t++] = 5;
      }
      zlibInflateTableBuilder(2, e.lens, 0, 32, i, 0, e.work, {
        bits: 5
      });
      D = false;
    }
    e.lencode = n;
    e.lenbits = 9;
    e.distcode = i;
    e.distbits = 5;
  };
  let k = (e, t, r, n) => {
    let i;
    let o = e.state;
    if (o.window === null) {
      o.wsize = 1 << o.wbits;
      o.wnext = 0;
      o.whave = 0;
      o.window = new Uint8Array(o.wsize);
    }
    if (n >= o.wsize) {
      o.window.set(t.subarray(r - o.wsize, r), 0);
      o.wnext = 0;
      o.whave = o.wsize;
    } else {
      if ((i = o.wsize - o.wnext) > n) {
        i = n;
      }
      o.window.set(t.subarray(r - n, r - n + i), o.wnext);
      if (n -= i) {
        o.window.set(t.subarray(r - n, r), 0);
        o.wnext = n;
        o.whave = o.wsize;
      } else {
        o.wnext += i;
        if (o.wnext === o.wsize) {
          o.wnext = 0;
        }
        if (o.whave < o.wsize) {
          o.whave += i;
        }
      }
    }
    return 0;
  };
  module.exports.inflateReset = I;
  module.exports.inflateReset2 = B;
  module.exports.inflateResetKeep = E;
  module.exports.inflateInit = e => x(e, 15);
  module.exports.inflateInit2 = x;
  module.exports.inflate = (e, t) => {
    let r;
    let n;
    let i;
    let w;
    let E;
    let I;
    let B;
    let x;
    let D;
    let _;
    let T;
    let Q;
    let R;
    let F;
    let L;
    let O;
    let N;
    let M;
    let P;
    let U;
    let z;
    let H;
    let G;
    let Z;
    let W = 0;
    let j = new Uint8Array(4);
    let Y = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    if (C(e) || !e.output || !e.input && e.avail_in !== 0) {
      return g;
    }
    if ((r = e.state).mode === 16191) {
      r.mode = 16192;
    }
    E = e.next_out;
    i = e.output;
    B = e.avail_out;
    w = e.next_in;
    n = e.input;
    I = e.avail_in;
    x = r.hold;
    D = r.bits;
    _ = I;
    T = B;
    H = d;
    t: while (true) {
      switch (r.mode) {
        case 16180:
          if (r.wrap === 0) {
            r.mode = 16192;
            break;
          }
          while (D < 16) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if (r.wrap & 2 && x === 35615) {
            if (r.wbits === 0) {
              r.wbits = 15;
            }
            r.check = 0;
            j[0] = x & 255;
            j[1] = x >>> 8 & 255;
            r.check = crc32ChecksumUtil(r.check, j, 2, 0);
            x = 0;
            D = 0;
            r.mode = 16181;
            break;
          }
          if (r.head) {
            r.head.done = false;
          }
          if (!(r.wrap & 1) || (((x & 255) << 8) + (x >> 8)) % 31) {
            e.msg = "incorrect header check";
            r.mode = 16209;
            break;
          }
          if ((x & 15) !== v) {
            e.msg = "unknown compression method";
            r.mode = 16209;
            break;
          }
          x >>>= 4;
          D -= 4;
          z = (x & 15) + 8;
          if (r.wbits === 0) {
            r.wbits = z;
          }
          if (z > 15 || z > r.wbits) {
            e.msg = "invalid window size";
            r.mode = 16209;
            break;
          }
          r.dmax = 1 << r.wbits;
          r.flags = 0;
          e.adler = r.check = 1;
          r.mode = x & 512 ? 16189 : 16191;
          x = 0;
          D = 0;
          break;
        case 16181:
          while (D < 16) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          r.flags = x;
          if ((r.flags & 255) !== v) {
            e.msg = "unknown compression method";
            r.mode = 16209;
            break;
          }
          if (r.flags & 57344) {
            e.msg = "unknown header flags set";
            r.mode = 16209;
            break;
          }
          if (r.head) {
            r.head.text = x >> 8 & 1;
          }
          if (r.flags & 512 && r.wrap & 4) {
            j[0] = x & 255;
            j[1] = x >>> 8 & 255;
            r.check = crc32ChecksumUtil(r.check, j, 2, 0);
          }
          x = 0;
          D = 0;
          r.mode = 16182;
        case 16182:
          while (D < 32) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if (r.head) {
            r.head.time = x;
          }
          if (r.flags & 512 && r.wrap & 4) {
            j[0] = x & 255;
            j[1] = x >>> 8 & 255;
            j[2] = x >>> 16 & 255;
            j[3] = x >>> 24 & 255;
            r.check = crc32ChecksumUtil(r.check, j, 4, 0);
          }
          x = 0;
          D = 0;
          r.mode = 16183;
        case 16183:
          while (D < 16) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if (r.head) {
            r.head.xflags = x & 255;
            r.head.os = x >> 8;
          }
          if (r.flags & 512 && r.wrap & 4) {
            j[0] = x & 255;
            j[1] = x >>> 8 & 255;
            r.check = crc32ChecksumUtil(r.check, j, 2, 0);
          }
          x = 0;
          D = 0;
          r.mode = 16184;
        case 16184:
          if (r.flags & 1024) {
            while (D < 16) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            r.length = x;
            if (r.head) {
              r.head.extra_len = x;
            }
            if (r.flags & 512 && r.wrap & 4) {
              j[0] = x & 255;
              j[1] = x >>> 8 & 255;
              r.check = crc32ChecksumUtil(r.check, j, 2, 0);
            }
            x = 0;
            D = 0;
          } else if (r.head) {
            r.head.extra = null;
          }
          r.mode = 16185;
        case 16185:
          if (r.flags & 1024 && ((Q = r.length) > I && (Q = I), Q && (r.head && (z = r.head.extra_len - r.length, r.head.extra ||= new Uint8Array(r.head.extra_len), r.head.extra.set(n.subarray(w, w + Q), z)), r.flags & 512 && r.wrap & 4 && (r.check = crc32ChecksumUtil(r.check, n, Q, w)), I -= Q, w += Q, r.length -= Q), r.length)) {
            break t;
          }
          r.length = 0;
          r.mode = 16186;
        case 16186:
          if (r.flags & 2048) {
            if (I === 0) {
              break t;
            }
            Q = 0;
            do {
              z = n[w + Q++];
              if (r.head && z && r.length < 65536) {
                r.head.name += String.fromCharCode(z);
              }
            } while (z && Q < I);
            if (r.flags & 512 && r.wrap & 4) {
              r.check = crc32ChecksumUtil(r.check, n, Q, w);
            }
            I -= Q;
            w += Q;
            if (z) {
              break t;
            }
          } else if (r.head) {
            r.head.name = null;
          }
          r.length = 0;
          r.mode = 16187;
        case 16187:
          if (r.flags & 4096) {
            if (I === 0) {
              break t;
            }
            Q = 0;
            do {
              z = n[w + Q++];
              if (r.head && z && r.length < 65536) {
                r.head.comment += String.fromCharCode(z);
              }
            } while (z && Q < I);
            if (r.flags & 512 && r.wrap & 4) {
              r.check = crc32ChecksumUtil(r.check, n, Q, w);
            }
            I -= Q;
            w += Q;
            if (z) {
              break t;
            }
          } else if (r.head) {
            r.head.comment = null;
          }
          r.mode = 16188;
        case 16188:
          if (r.flags & 512) {
            while (D < 16) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            if (r.wrap & 4 && x !== (r.check & 65535)) {
              e.msg = "header crc mismatch";
              r.mode = 16209;
              break;
            }
            x = 0;
            D = 0;
          }
          if (r.head) {
            r.head.hcrc = r.flags >> 9 & 1;
            r.head.done = true;
          }
          e.adler = r.check = 0;
          r.mode = 16191;
          break;
        case 16189:
          while (D < 32) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          e.adler = r.check = b(x);
          x = 0;
          D = 0;
          r.mode = 16190;
        case 16190:
          if (r.havedict === 0) {
            e.next_out = E;
            e.avail_out = B;
            e.next_in = w;
            e.avail_in = I;
            r.hold = x;
            r.bits = D;
            return A;
          }
          e.adler = r.check = 1;
          r.mode = 16191;
        case 16191:
          if (t === c || t === h) {
            break t;
          }
        case 16192:
          if (r.last) {
            x >>>= D & 7;
            D -= D & 7;
            r.mode = 16206;
            break;
          }
          while (D < 3) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          r.last = x & 1;
          D -= 1;
          switch ((x >>>= 1) & 3) {
            case 0:
              r.mode = 16193;
              break;
            case 1:
              S(r);
              r.mode = 16199;
              if (t === h) {
                x >>>= 2;
                D -= 2;
                break t;
              }
              break;
            case 2:
              r.mode = 16196;
              break;
            case 3:
              e.msg = "invalid block type";
              r.mode = 16209;
          }
          x >>>= 2;
          D -= 2;
          break;
        case 16193:
          x >>>= D & 7;
          D -= D & 7;
          while (D < 32) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if ((x & 65535) != (x >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths";
            r.mode = 16209;
            break;
          }
          r.length = x & 65535;
          x = 0;
          D = 0;
          r.mode = 16194;
          if (t === h) {
            break t;
          }
        case 16194:
          r.mode = 16195;
        case 16195:
          if (Q = r.length) {
            if (Q > I) {
              Q = I;
            }
            if (Q > B) {
              Q = B;
            }
            if (Q === 0) {
              break t;
            }
            i.set(n.subarray(w, w + Q), E);
            I -= Q;
            w += Q;
            B -= Q;
            E += Q;
            r.length -= Q;
            break;
          }
          r.mode = 16191;
          break;
        case 16196:
          while (D < 14) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          r.nlen = (x & 31) + 257;
          x >>>= 5;
          D -= 5;
          r.ndist = (x & 31) + 1;
          x >>>= 5;
          D -= 5;
          r.ncode = (x & 15) + 4;
          x >>>= 4;
          D -= 4;
          if (r.nlen > 286 || r.ndist > 30) {
            e.msg = "too many length or distance symbols";
            r.mode = 16209;
            break;
          }
          r.have = 0;
          r.mode = 16197;
        case 16197:
          while (r.have < r.ncode) {
            while (D < 3) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            r.lens[Y[r.have++]] = x & 7;
            x >>>= 3;
            D -= 3;
          }
          while (r.have < 19) {
            r.lens[Y[r.have++]] = 0;
          }
          r.lencode = r.lendyn;
          r.lenbits = 7;
          G = {
            bits: r.lenbits
          };
          H = zlibInflateTableBuilder(0, r.lens, 0, 19, r.lencode, 0, r.work, G);
          r.lenbits = G.bits;
          if (H) {
            e.msg = "invalid code lengths set";
            r.mode = 16209;
            break;
          }
          r.have = 0;
          r.mode = 16198;
        case 16198:
          while (r.have < r.nlen + r.ndist) {
            while (L = (W = r.lencode[x & (1 << r.lenbits) - 1]) >>> 24, O = W >>> 16 & 255, N = W & 65535, !(L <= D)) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            if (N < 16) {
              x >>>= L;
              D -= L;
              r.lens[r.have++] = N;
            } else {
              if (N === 16) {
                for (Z = L + 2; D < Z;) {
                  if (I === 0) {
                    break t;
                  }
                  I--;
                  x += n[w++] << D;
                  D += 8;
                }
                x >>>= L;
                D -= L;
                if (r.have === 0) {
                  e.msg = "invalid bit length repeat";
                  r.mode = 16209;
                  break;
                }
                z = r.lens[r.have - 1];
                Q = 3 + (x & 3);
                x >>>= 2;
                D -= 2;
              } else if (N === 17) {
                for (Z = L + 3; D < Z;) {
                  if (I === 0) {
                    break t;
                  }
                  I--;
                  x += n[w++] << D;
                  D += 8;
                }
                x >>>= L;
                D -= L;
                z = 0;
                Q = 3 + (x & 7);
                x >>>= 3;
                D -= 3;
              } else {
                for (Z = L + 7; D < Z;) {
                  if (I === 0) {
                    break t;
                  }
                  I--;
                  x += n[w++] << D;
                  D += 8;
                }
                x >>>= L;
                D -= L;
                z = 0;
                Q = 11 + (x & 127);
                x >>>= 7;
                D -= 7;
              }
              if (r.have + Q > r.nlen + r.ndist) {
                e.msg = "invalid bit length repeat";
                r.mode = 16209;
                break;
              }
              while (Q--) {
                r.lens[r.have++] = z;
              }
            }
          }
          if (r.mode === 16209) {
            break;
          }
          if (r.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block";
            r.mode = 16209;
            break;
          }
          r.lenbits = 9;
          G = {
            bits: r.lenbits
          };
          H = zlibInflateTableBuilder(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, G);
          r.lenbits = G.bits;
          if (H) {
            e.msg = "invalid literal/lengths set";
            r.mode = 16209;
            break;
          }
          r.distbits = 6;
          r.distcode = r.distdyn;
          G = {
            bits: r.distbits
          };
          H = zlibInflateTableBuilder(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, G);
          r.distbits = G.bits;
          if (H) {
            e.msg = "invalid distances set";
            r.mode = 16209;
            break;
          }
          r.mode = 16199;
          if (t === h) {
            break t;
          }
        case 16199:
          r.mode = 16200;
        case 16200:
          if (I >= 6 && B >= 258) {
            e.next_out = E;
            e.avail_out = B;
            e.next_in = w;
            e.avail_in = I;
            r.hold = x;
            r.bits = D;
            zlibInflateCore_1(e, T);
            E = e.next_out;
            i = e.output;
            B = e.avail_out;
            w = e.next_in;
            n = e.input;
            I = e.avail_in;
            x = r.hold;
            D = r.bits;
            if (r.mode === 16191) {
              r.back = -1;
            }
            break;
          }
          for (r.back = 0; L = (W = r.lencode[x & (1 << r.lenbits) - 1]) >>> 24, O = W >>> 16 & 255, N = W & 65535, !(L <= D);) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if (O && (O & 240) == 0) {
            M = L;
            P = O;
            U = N;
            while (L = (W = r.lencode[U + ((x & (1 << M + P) - 1) >> M)]) >>> 24, O = W >>> 16 & 255, N = W & 65535, !(M + L <= D)) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            x >>>= M;
            D -= M;
            r.back += M;
          }
          x >>>= L;
          D -= L;
          r.back += L;
          r.length = N;
          if (O === 0) {
            r.mode = 16205;
            break;
          }
          if (O & 32) {
            r.back = -1;
            r.mode = 16191;
            break;
          }
          if (O & 64) {
            e.msg = "invalid literal/length code";
            r.mode = 16209;
            break;
          }
          r.extra = O & 15;
          r.mode = 16201;
        case 16201:
          if (r.extra) {
            for (Z = r.extra; D < Z;) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            r.length += x & (1 << r.extra) - 1;
            x >>>= r.extra;
            D -= r.extra;
            r.back += r.extra;
          }
          r.was = r.length;
          r.mode = 16202;
        case 16202:
          while (L = (W = r.distcode[x & (1 << r.distbits) - 1]) >>> 24, O = W >>> 16 & 255, N = W & 65535, !(L <= D)) {
            if (I === 0) {
              break t;
            }
            I--;
            x += n[w++] << D;
            D += 8;
          }
          if ((O & 240) == 0) {
            M = L;
            P = O;
            U = N;
            while (L = (W = r.distcode[U + ((x & (1 << M + P) - 1) >> M)]) >>> 24, O = W >>> 16 & 255, N = W & 65535, !(M + L <= D)) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            x >>>= M;
            D -= M;
            r.back += M;
          }
          x >>>= L;
          D -= L;
          r.back += L;
          if (O & 64) {
            e.msg = "invalid distance code";
            r.mode = 16209;
            break;
          }
          r.offset = N;
          r.extra = O & 15;
          r.mode = 16203;
        case 16203:
          if (r.extra) {
            for (Z = r.extra; D < Z;) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            r.offset += x & (1 << r.extra) - 1;
            x >>>= r.extra;
            D -= r.extra;
            r.back += r.extra;
          }
          if (r.offset > r.dmax) {
            e.msg = "invalid distance too far back";
            r.mode = 16209;
            break;
          }
          r.mode = 16204;
        case 16204:
          if (B === 0) {
            break t;
          }
          Q = T - B;
          if (r.offset > Q) {
            if ((Q = r.offset - Q) > r.whave && r.sane) {
              e.msg = "invalid distance too far back";
              r.mode = 16209;
              break;
            }
            if (Q > r.wnext) {
              Q -= r.wnext;
              R = r.wsize - Q;
            } else {
              R = r.wnext - Q;
            }
            if (Q > r.length) {
              Q = r.length;
            }
            F = r.window;
          } else {
            F = i;
            R = E - r.offset;
            Q = r.length;
          }
          if (Q > B) {
            Q = B;
          }
          B -= Q;
          r.length -= Q;
          do {
            i[E++] = F[R++];
          } while (--Q);
          if (r.length === 0) {
            r.mode = 16200;
          }
          break;
        case 16205:
          if (B === 0) {
            break t;
          }
          i[E++] = r.length;
          B--;
          r.mode = 16200;
          break;
        case 16206:
          if (r.wrap) {
            while (D < 32) {
              if (I === 0) {
                break t;
              }
              I--;
              x |= n[w++] << D;
              D += 8;
            }
            T -= B;
            e.total_out += T;
            r.total += T;
            if (r.wrap & 4 && T) {
              e.adler = r.check = r.flags ? crc32ChecksumUtil(r.check, i, T, E - T) : adler32ChecksumUtil(r.check, i, T, E - T);
            }
            T = B;
            if (r.wrap & 4 && (r.flags ? x : b(x)) !== r.check) {
              e.msg = "incorrect data check";
              r.mode = 16209;
              break;
            }
            x = 0;
            D = 0;
          }
          r.mode = 16207;
        case 16207:
          if (r.wrap && r.flags) {
            while (D < 32) {
              if (I === 0) {
                break t;
              }
              I--;
              x += n[w++] << D;
              D += 8;
            }
            if (r.wrap & 4 && x !== (r.total & -1)) {
              e.msg = "incorrect length check";
              r.mode = 16209;
              break;
            }
            x = 0;
            D = 0;
          }
          r.mode = 16208;
        case 16208:
          H = f;
          break t;
        case 16209:
          H = p;
          break t;
        case 16210:
          return m;
        default:
          return g;
      }
    }
    e.next_out = E;
    e.avail_out = B;
    e.next_in = w;
    e.avail_in = I;
    r.hold = x;
    r.bits = D;
    if ((r.wsize || T !== e.avail_out && r.mode < 16209 && (r.mode < 16206 || t !== u)) && k(e, e.output, e.next_out, T - e.avail_out)) {
      r.mode = 16210;
      return m;
    } else {
      _ -= e.avail_in;
      T -= e.avail_out;
      e.total_in += _;
      e.total_out += T;
      r.total += T;
      if (r.wrap & 4 && T) {
        e.adler = r.check = r.flags ? crc32ChecksumUtil(r.check, i, T, e.next_out - T) : adler32ChecksumUtil(r.check, i, T, e.next_out - T);
      }
      e.data_type = r.bits + !!r.last * 64 + (r.mode === 16191) * 128 + (r.mode === 16199 || r.mode === 16194) * 256;
      if ((_ === 0 && T === 0 || t === u) && H === d) {
        H = y;
      }
      return H;
    }
  };
  module.exports.inflateEnd = e => {
    if (C(e)) {
      return g;
    }
    let t = e.state;
    t.window &&= null;
    e.state = null;
    return d;
  };
  module.exports.inflateGetHeader = (e, t) => {
    if (C(e)) {
      return g;
    }
    let r = e.state;
    if ((r.wrap & 2) == 0) {
      return g;
    } else {
      r.head = t;
      t.done = false;
      return d;
    }
  };
  module.exports.inflateSetDictionary = (e, t) => {
    let r;
    let n;
    let i = t.length;
    if (C(e) || (r = e.state).wrap !== 0 && r.mode !== 16190) {
      return g;
    } else if (r.mode === 16190 && adler32ChecksumUtil(1, t, i, 0) !== r.check) {
      return p;
    } else if (k(e, t, i, i)) {
      r.mode = 16210;
      return m;
    } else {
      r.havedict = 1;
      return d;
    }
  };
  module.exports.inflateInfo = "pako inflate (from Nodeca project)";
}