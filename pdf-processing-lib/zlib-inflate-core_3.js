// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'commonBufferUtils'
// - Resolved require(408040) to 'common-buffer-utils'
// - Renamed variable 's' to 'adler32Checksum'
// - Resolved require(727832) to 'adler32-checksum'
// - Renamed variable 'a' to 'crc32ChecksumUtil_1'
// - Resolved require(153289) to 'crc32-checksum-util_1'
// - Renamed variable 'l' to 'zlibInflateCore'
// - Resolved require(756369) to 'zlib-inflate-core'
// - Renamed variable 'h' to 'inflateTableBuilder'
// - Resolved require(860616) to 'inflate-table-builder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 180838
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var commonBufferUtils = require("common-buffer-utils") /*id: 408040*/;
  var adler32Checksum = require("adler32-checksum") /*id: 727832*/;
  var crc32ChecksumUtil_1 = require("crc32-checksum-util_1") /*id: 153289*/;
  var zlibInflateCore = require("zlib-inflate-core") /*id: 756369*/;
  var inflateTableBuilder = require("inflate-table-builder") /*id: 860616*/;
  var c = 0;
  var u = 1;
  var d = 2;
  var f = 4;
  var p = 5;
  var g = 6;
  var m = 0;
  var v = 1;
  var y = 2;
  var b = -2;
  var A = -3;
  var S = -4;
  var x = -5;
  var w = 8;
  var C = 1;
  var T = 2;
  var E = 3;
  var F = 4;
  var k = 5;
  var P = 6;
  var R = 7;
  var M = 8;
  var O = 9;
  var D = 10;
  var I = 11;
  var L = 12;
  var N = 13;
  var B = 14;
  var j = 15;
  var _ = 16;
  var U = 17;
  var z = 18;
  var V = 19;
  var W = 20;
  var G = 21;
  var q = 22;
  var H = 23;
  var K = 24;
  var X = 25;
  var Z = 26;
  var Y = 27;
  var J = 28;
  var Q = 29;
  var $ = 30;
  var tt = 31;
  var te = 852;
  var tr = 592;
  var ti = 15;
  function tn(t) {
    return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
  }
  function to() {
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
    this.lens = new commonBufferUtils.Buf16(320);
    this.work = new commonBufferUtils.Buf16(288);
    this.lendyn = null;
    this.distdyn = null;
    this.sane = 0;
    this.back = 0;
    this.was = 0;
  }
  function ts(t) {
    var e;
    if (t && t.state) {
      e = t.state;
      t.total_in = t.total_out = e.total = 0;
      t.msg = "";
      if (e.wrap) {
        t.adler = e.wrap & 1;
      }
      e.mode = C;
      e.last = 0;
      e.havedict = 0;
      e.dmax = 32768;
      e.head = null;
      e.hold = 0;
      e.bits = 0;
      e.lencode = e.lendyn = new commonBufferUtils.Buf32(te);
      e.distcode = e.distdyn = new commonBufferUtils.Buf32(tr);
      e.sane = 1;
      e.back = -1;
      return m;
    } else {
      return b;
    }
  }
  function ta(t) {
    var e;
    if (t && t.state) {
      (e = t.state).wsize = 0;
      e.whave = 0;
      e.wnext = 0;
      return ts(t);
    } else {
      return b;
    }
  }
  function tl(t, e) {
    var r;
    var i;
    if (t && t.state) {
      i = t.state;
      if (e < 0) {
        r = 0;
        e = -e;
      } else {
        r = (e >> 4) + 1;
        if (e < 48) {
          e &= 15;
        }
      }
      if (e && (e < 8 || e > 15)) {
        return b;
      } else {
        if (i.window !== null && i.wbits !== e) {
          i.window = null;
        }
        i.wrap = r;
        i.wbits = e;
        return ta(t);
      }
    } else {
      return b;
    }
  }
  function th(t, e) {
    var r;
    var i;
    if (t) {
      i = new to();
      t.state = i;
      i.window = null;
      if ((r = tl(t, e)) !== m) {
        t.state = null;
      }
      return r;
    } else {
      return b;
    }
  }
  function tc(t) {
    return th(t, ti);
  }
  var tu = true;
  function td(t) {
    if (tu) {
      var e;
      i = new commonBufferUtils.Buf32(512);
      n = new commonBufferUtils.Buf32(32);
      e = 0;
      while (e < 144) {
        t.lens[e++] = 8;
      }
      while (e < 256) {
        t.lens[e++] = 9;
      }
      while (e < 280) {
        t.lens[e++] = 7;
      }
      while (e < 288) {
        t.lens[e++] = 8;
      }
      inflateTableBuilder(u, t.lens, 0, 288, i, 0, t.work, {
        bits: 9
      });
      e = 0;
      while (e < 32) {
        t.lens[e++] = 5;
      }
      inflateTableBuilder(d, t.lens, 0, 32, n, 0, t.work, {
        bits: 5
      });
      tu = false;
    }
    t.lencode = i;
    t.lenbits = 9;
    t.distcode = n;
    t.distbits = 5;
  }
  function tf(t, e, r, i) {
    var n;
    var s = t.state;
    if (s.window === null) {
      s.wsize = 1 << s.wbits;
      s.wnext = 0;
      s.whave = 0;
      s.window = new commonBufferUtils.Buf8(s.wsize);
    }
    if (i >= s.wsize) {
      commonBufferUtils.arraySet(s.window, e, r - s.wsize, s.wsize, 0);
      s.wnext = 0;
      s.whave = s.wsize;
    } else {
      if ((n = s.wsize - s.wnext) > i) {
        n = i;
      }
      commonBufferUtils.arraySet(s.window, e, r - i, n, s.wnext);
      if (i -= n) {
        commonBufferUtils.arraySet(s.window, e, r - i, i, 0);
        s.wnext = i;
        s.whave = s.wsize;
      } else {
        s.wnext += n;
        if (s.wnext === s.wsize) {
          s.wnext = 0;
        }
        if (s.whave < s.wsize) {
          s.whave += n;
        }
      }
    }
    return 0;
  }
  function tp(t, e) {
    var r;
    var i;
    var n;
    var te;
    var tr;
    var ti;
    var to;
    var ts;
    var ta;
    var tl;
    var th;
    var tc;
    var tu;
    var tp;
    var tg;
    var tm;
    var tv;
    var ty;
    var tb;
    var tA;
    var tS;
    var tx;
    var tw;
    var tC;
    var tT = 0;
    var tE = new commonBufferUtils.Buf8(4);
    var tF = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!t || !t.state || !t.output || !t.input && t.avail_in !== 0) {
      return b;
    }
    if ((r = t.state).mode === L) {
      r.mode = N;
    }
    tr = t.next_out;
    n = t.output;
    to = t.avail_out;
    te = t.next_in;
    i = t.input;
    ti = t.avail_in;
    ts = r.hold;
    ta = r.bits;
    tl = ti;
    th = to;
    tx = m;
    e: while (true) {
      switch (r.mode) {
        case C:
          if (r.wrap === 0) {
            r.mode = N;
            break;
          }
          while (ta < 16) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if (r.wrap & 2 && ts === 35615) {
            r.check = 0;
            tE[0] = ts & 255;
            tE[1] = ts >>> 8 & 255;
            r.check = crc32ChecksumUtil_1(r.check, tE, 2, 0);
            ts = 0;
            ta = 0;
            r.mode = T;
            break;
          }
          r.flags = 0;
          if (r.head) {
            r.head.done = false;
          }
          if (!(r.wrap & 1) || (((ts & 255) << 8) + (ts >> 8)) % 31) {
            t.msg = "incorrect header check";
            r.mode = $;
            break;
          }
          if ((ts & 15) !== w) {
            t.msg = "unknown compression method";
            r.mode = $;
            break;
          }
          ts >>>= 4;
          ta -= 4;
          tS = (ts & 15) + 8;
          if (r.wbits === 0) {
            r.wbits = tS;
          } else if (tS > r.wbits) {
            t.msg = "invalid window size";
            r.mode = $;
            break;
          }
          r.dmax = 1 << tS;
          t.adler = r.check = 1;
          r.mode = ts & 512 ? D : L;
          ts = 0;
          ta = 0;
          break;
        case T:
          while (ta < 16) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          r.flags = ts;
          if ((r.flags & 255) !== w) {
            t.msg = "unknown compression method";
            r.mode = $;
            break;
          }
          if (r.flags & 57344) {
            t.msg = "unknown header flags set";
            r.mode = $;
            break;
          }
          if (r.head) {
            r.head.text = ts >> 8 & 1;
          }
          if (r.flags & 512) {
            tE[0] = ts & 255;
            tE[1] = ts >>> 8 & 255;
            r.check = crc32ChecksumUtil_1(r.check, tE, 2, 0);
          }
          ts = 0;
          ta = 0;
          r.mode = E;
        case E:
          while (ta < 32) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if (r.head) {
            r.head.time = ts;
          }
          if (r.flags & 512) {
            tE[0] = ts & 255;
            tE[1] = ts >>> 8 & 255;
            tE[2] = ts >>> 16 & 255;
            tE[3] = ts >>> 24 & 255;
            r.check = crc32ChecksumUtil_1(r.check, tE, 4, 0);
          }
          ts = 0;
          ta = 0;
          r.mode = F;
        case F:
          while (ta < 16) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if (r.head) {
            r.head.xflags = ts & 255;
            r.head.os = ts >> 8;
          }
          if (r.flags & 512) {
            tE[0] = ts & 255;
            tE[1] = ts >>> 8 & 255;
            r.check = crc32ChecksumUtil_1(r.check, tE, 2, 0);
          }
          ts = 0;
          ta = 0;
          r.mode = k;
        case k:
          if (r.flags & 1024) {
            while (ta < 16) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            r.length = ts;
            if (r.head) {
              r.head.extra_len = ts;
            }
            if (r.flags & 512) {
              tE[0] = ts & 255;
              tE[1] = ts >>> 8 & 255;
              r.check = crc32ChecksumUtil_1(r.check, tE, 2, 0);
            }
            ts = 0;
            ta = 0;
          } else if (r.head) {
            r.head.extra = null;
          }
          r.mode = P;
        case P:
          if (r.flags & 1024 && ((tc = r.length) > ti && (tc = ti), tc && (r.head && (tS = r.head.extra_len - r.length, r.head.extra ||= Array(r.head.extra_len), commonBufferUtils.arraySet(r.head.extra, i, te, tc, tS)), r.flags & 512 && (r.check = crc32ChecksumUtil_1(r.check, i, tc, te)), ti -= tc, te += tc, r.length -= tc), r.length)) {
            break e;
          }
          r.length = 0;
          r.mode = R;
        case R:
          if (r.flags & 2048) {
            if (ti === 0) {
              break e;
            }
            tc = 0;
            do {
              tS = i[te + tc++];
              if (r.head && tS && r.length < 65536) {
                r.head.name += String.fromCharCode(tS);
              }
            } while (tS && tc < ti);
            if (r.flags & 512) {
              r.check = crc32ChecksumUtil_1(r.check, i, tc, te);
            }
            ti -= tc;
            te += tc;
            if (tS) {
              break e;
            }
          } else if (r.head) {
            r.head.name = null;
          }
          r.length = 0;
          r.mode = M;
        case M:
          if (r.flags & 4096) {
            if (ti === 0) {
              break e;
            }
            tc = 0;
            do {
              tS = i[te + tc++];
              if (r.head && tS && r.length < 65536) {
                r.head.comment += String.fromCharCode(tS);
              }
            } while (tS && tc < ti);
            if (r.flags & 512) {
              r.check = crc32ChecksumUtil_1(r.check, i, tc, te);
            }
            ti -= tc;
            te += tc;
            if (tS) {
              break e;
            }
          } else if (r.head) {
            r.head.comment = null;
          }
          r.mode = O;
        case O:
          if (r.flags & 512) {
            while (ta < 16) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            if (ts !== (r.check & 65535)) {
              t.msg = "header crc mismatch";
              r.mode = $;
              break;
            }
            ts = 0;
            ta = 0;
          }
          if (r.head) {
            r.head.hcrc = r.flags >> 9 & 1;
            r.head.done = true;
          }
          t.adler = r.check = 0;
          r.mode = L;
          break;
        case D:
          while (ta < 32) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          t.adler = r.check = tn(ts);
          ts = 0;
          ta = 0;
          r.mode = I;
        case I:
          if (r.havedict === 0) {
            t.next_out = tr;
            t.avail_out = to;
            t.next_in = te;
            t.avail_in = ti;
            r.hold = ts;
            r.bits = ta;
            return y;
          }
          t.adler = r.check = 1;
          r.mode = L;
        case L:
          if (e === p || e === g) {
            break e;
          }
        case N:
          if (r.last) {
            ts >>>= ta & 7;
            ta -= ta & 7;
            r.mode = Y;
            break;
          }
          while (ta < 3) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          r.last = ts & 1;
          ta -= 1;
          switch ((ts >>>= 1) & 3) {
            case 0:
              r.mode = B;
              break;
            case 1:
              td(r);
              r.mode = W;
              if (e === g) {
                ts >>>= 2;
                ta -= 2;
                break e;
              }
              break;
            case 2:
              r.mode = U;
              break;
            case 3:
              t.msg = "invalid block type";
              r.mode = $;
          }
          ts >>>= 2;
          ta -= 2;
          break;
        case B:
          ts >>>= ta & 7;
          ta -= ta & 7;
          while (ta < 32) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if ((ts & 65535) != (ts >>> 16 ^ 65535)) {
            t.msg = "invalid stored block lengths";
            r.mode = $;
            break;
          }
          r.length = ts & 65535;
          ts = 0;
          ta = 0;
          r.mode = j;
          if (e === g) {
            break e;
          }
        case j:
          r.mode = _;
        case _:
          if (tc = r.length) {
            if (tc > ti) {
              tc = ti;
            }
            if (tc > to) {
              tc = to;
            }
            if (tc === 0) {
              break e;
            }
            commonBufferUtils.arraySet(n, i, te, tc, tr);
            ti -= tc;
            te += tc;
            to -= tc;
            tr += tc;
            r.length -= tc;
            break;
          }
          r.mode = L;
          break;
        case U:
          while (ta < 14) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          r.nlen = (ts & 31) + 257;
          ts >>>= 5;
          ta -= 5;
          r.ndist = (ts & 31) + 1;
          ts >>>= 5;
          ta -= 5;
          r.ncode = (ts & 15) + 4;
          ts >>>= 4;
          ta -= 4;
          if (r.nlen > 286 || r.ndist > 30) {
            t.msg = "too many length or distance symbols";
            r.mode = $;
            break;
          }
          r.have = 0;
          r.mode = z;
        case z:
          while (r.have < r.ncode) {
            while (ta < 3) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            r.lens[tF[r.have++]] = ts & 7;
            ts >>>= 3;
            ta -= 3;
          }
          while (r.have < 19) {
            r.lens[tF[r.have++]] = 0;
          }
          r.lencode = r.lendyn;
          r.lenbits = 7;
          tw = {
            bits: r.lenbits
          };
          tx = inflateTableBuilder(c, r.lens, 0, 19, r.lencode, 0, r.work, tw);
          r.lenbits = tw.bits;
          if (tx) {
            t.msg = "invalid code lengths set";
            r.mode = $;
            break;
          }
          r.have = 0;
          r.mode = V;
        case V:
          while (r.have < r.nlen + r.ndist) {
            while (tg = (tT = r.lencode[ts & (1 << r.lenbits) - 1]) >>> 24, tm = tT >>> 16 & 255, tv = tT & 65535, !(tg <= ta)) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            if (tv < 16) {
              ts >>>= tg;
              ta -= tg;
              r.lens[r.have++] = tv;
            } else {
              if (tv === 16) {
                for (tC = tg + 2; ta < tC;) {
                  if (ti === 0) {
                    break e;
                  }
                  ti--;
                  ts += i[te++] << ta;
                  ta += 8;
                }
                ts >>>= tg;
                ta -= tg;
                if (r.have === 0) {
                  t.msg = "invalid bit length repeat";
                  r.mode = $;
                  break;
                }
                tS = r.lens[r.have - 1];
                tc = 3 + (ts & 3);
                ts >>>= 2;
                ta -= 2;
              } else if (tv === 17) {
                for (tC = tg + 3; ta < tC;) {
                  if (ti === 0) {
                    break e;
                  }
                  ti--;
                  ts += i[te++] << ta;
                  ta += 8;
                }
                ts >>>= tg;
                ta -= tg;
                tS = 0;
                tc = 3 + (ts & 7);
                ts >>>= 3;
                ta -= 3;
              } else {
                for (tC = tg + 7; ta < tC;) {
                  if (ti === 0) {
                    break e;
                  }
                  ti--;
                  ts += i[te++] << ta;
                  ta += 8;
                }
                ts >>>= tg;
                ta -= tg;
                tS = 0;
                tc = 11 + (ts & 127);
                ts >>>= 7;
                ta -= 7;
              }
              if (r.have + tc > r.nlen + r.ndist) {
                t.msg = "invalid bit length repeat";
                r.mode = $;
                break;
              }
              while (tc--) {
                r.lens[r.have++] = tS;
              }
            }
          }
          if (r.mode === $) {
            break;
          }
          if (r.lens[256] === 0) {
            t.msg = "invalid code -- missing end-of-block";
            r.mode = $;
            break;
          }
          r.lenbits = 9;
          tw = {
            bits: r.lenbits
          };
          tx = inflateTableBuilder(u, r.lens, 0, r.nlen, r.lencode, 0, r.work, tw);
          r.lenbits = tw.bits;
          if (tx) {
            t.msg = "invalid literal/lengths set";
            r.mode = $;
            break;
          }
          r.distbits = 6;
          r.distcode = r.distdyn;
          tw = {
            bits: r.distbits
          };
          tx = inflateTableBuilder(d, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, tw);
          r.distbits = tw.bits;
          if (tx) {
            t.msg = "invalid distances set";
            r.mode = $;
            break;
          }
          r.mode = W;
          if (e === g) {
            break e;
          }
        case W:
          r.mode = G;
        case G:
          if (ti >= 6 && to >= 258) {
            t.next_out = tr;
            t.avail_out = to;
            t.next_in = te;
            t.avail_in = ti;
            r.hold = ts;
            r.bits = ta;
            zlibInflateCore(t, th);
            tr = t.next_out;
            n = t.output;
            to = t.avail_out;
            te = t.next_in;
            i = t.input;
            ti = t.avail_in;
            ts = r.hold;
            ta = r.bits;
            if (r.mode === L) {
              r.back = -1;
            }
            break;
          }
          for (r.back = 0; tg = (tT = r.lencode[ts & (1 << r.lenbits) - 1]) >>> 24, tm = tT >>> 16 & 255, tv = tT & 65535, !(tg <= ta);) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if (tm && (tm & 240) == 0) {
            ty = tg;
            tb = tm;
            tA = tv;
            while (tg = (tT = r.lencode[tA + ((ts & (1 << ty + tb) - 1) >> ty)]) >>> 24, tm = tT >>> 16 & 255, tv = tT & 65535, !(ty + tg <= ta)) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            ts >>>= ty;
            ta -= ty;
            r.back += ty;
          }
          ts >>>= tg;
          ta -= tg;
          r.back += tg;
          r.length = tv;
          if (tm === 0) {
            r.mode = Z;
            break;
          }
          if (tm & 32) {
            r.back = -1;
            r.mode = L;
            break;
          }
          if (tm & 64) {
            t.msg = "invalid literal/length code";
            r.mode = $;
            break;
          }
          r.extra = tm & 15;
          r.mode = q;
        case q:
          if (r.extra) {
            for (tC = r.extra; ta < tC;) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            r.length += ts & (1 << r.extra) - 1;
            ts >>>= r.extra;
            ta -= r.extra;
            r.back += r.extra;
          }
          r.was = r.length;
          r.mode = H;
        case H:
          while (tg = (tT = r.distcode[ts & (1 << r.distbits) - 1]) >>> 24, tm = tT >>> 16 & 255, tv = tT & 65535, !(tg <= ta)) {
            if (ti === 0) {
              break e;
            }
            ti--;
            ts += i[te++] << ta;
            ta += 8;
          }
          if ((tm & 240) == 0) {
            ty = tg;
            tb = tm;
            tA = tv;
            while (tg = (tT = r.distcode[tA + ((ts & (1 << ty + tb) - 1) >> ty)]) >>> 24, tm = tT >>> 16 & 255, tv = tT & 65535, !(ty + tg <= ta)) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            ts >>>= ty;
            ta -= ty;
            r.back += ty;
          }
          ts >>>= tg;
          ta -= tg;
          r.back += tg;
          if (tm & 64) {
            t.msg = "invalid distance code";
            r.mode = $;
            break;
          }
          r.offset = tv;
          r.extra = tm & 15;
          r.mode = K;
        case K:
          if (r.extra) {
            for (tC = r.extra; ta < tC;) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            r.offset += ts & (1 << r.extra) - 1;
            ts >>>= r.extra;
            ta -= r.extra;
            r.back += r.extra;
          }
          if (r.offset > r.dmax) {
            t.msg = "invalid distance too far back";
            r.mode = $;
            break;
          }
          r.mode = X;
        case X:
          if (to === 0) {
            break e;
          }
          tc = th - to;
          if (r.offset > tc) {
            if ((tc = r.offset - tc) > r.whave && r.sane) {
              t.msg = "invalid distance too far back";
              r.mode = $;
              break;
            }
            if (tc > r.wnext) {
              tc -= r.wnext;
              tu = r.wsize - tc;
            } else {
              tu = r.wnext - tc;
            }
            if (tc > r.length) {
              tc = r.length;
            }
            tp = r.window;
          } else {
            tp = n;
            tu = tr - r.offset;
            tc = r.length;
          }
          if (tc > to) {
            tc = to;
          }
          to -= tc;
          r.length -= tc;
          do {
            n[tr++] = tp[tu++];
          } while (--tc);
          if (r.length === 0) {
            r.mode = G;
          }
          break;
        case Z:
          if (to === 0) {
            break e;
          }
          n[tr++] = r.length;
          to--;
          r.mode = G;
          break;
        case Y:
          if (r.wrap) {
            while (ta < 32) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts |= i[te++] << ta;
              ta += 8;
            }
            th -= to;
            t.total_out += th;
            r.total += th;
            if (th) {
              t.adler = r.check = r.flags ? crc32ChecksumUtil_1(r.check, n, th, tr - th) : adler32Checksum(r.check, n, th, tr - th);
            }
            th = to;
            if ((r.flags ? ts : tn(ts)) !== r.check) {
              t.msg = "incorrect data check";
              r.mode = $;
              break;
            }
            ts = 0;
            ta = 0;
          }
          r.mode = J;
        case J:
          if (r.wrap && r.flags) {
            while (ta < 32) {
              if (ti === 0) {
                break e;
              }
              ti--;
              ts += i[te++] << ta;
              ta += 8;
            }
            if (ts !== (r.total & -1)) {
              t.msg = "incorrect length check";
              r.mode = $;
              break;
            }
            ts = 0;
            ta = 0;
          }
          r.mode = Q;
        case Q:
          tx = v;
          break e;
        case $:
          tx = A;
          break e;
        case tt:
          return S;
        default:
          return b;
      }
    }
    t.next_out = tr;
    t.avail_out = to;
    t.next_in = te;
    t.avail_in = ti;
    r.hold = ts;
    r.bits = ta;
    if ((r.wsize || th !== t.avail_out && r.mode < $ && (r.mode < Y || e !== f)) && tf(t, t.output, t.next_out, th - t.avail_out)) {
      r.mode = tt;
      return S;
    } else {
      tl -= t.avail_in;
      th -= t.avail_out;
      t.total_in += tl;
      t.total_out += th;
      r.total += th;
      if (r.wrap && th) {
        t.adler = r.check = r.flags ? crc32ChecksumUtil_1(r.check, n, th, t.next_out - th) : adler32Checksum(r.check, n, th, t.next_out - th);
      }
      t.data_type = r.bits + !!r.last * 64 + (r.mode === L) * 128 + (r.mode === W || r.mode === j) * 256;
      if ((tl === 0 && th === 0 || e === f) && tx === m) {
        tx = x;
      }
      return tx;
    }
  }
  function tg(t) {
    if (!t || !t.state) {
      return b;
    }
    var e = t.state;
    e.window &&= null;
    t.state = null;
    return m;
  }
  function tm(t, e) {
    var r;
    if (t && t.state && ((r = t.state).wrap & 2) != 0) {
      r.head = e;
      e.done = false;
      return m;
    } else {
      return b;
    }
  }
  function tv(t, e) {
    var r;
    var i;
    var n = e.length;
    if (t && t.state && ((r = t.state).wrap === 0 || r.mode === I)) {
      if (r.mode === I && (i = adler32Checksum(i = 1, e, n, 0)) !== r.check) {
        return A;
      } else if (tf(t, e, n, n)) {
        r.mode = tt;
        return S;
      } else {
        r.havedict = 1;
        return m;
      }
    } else {
      return b;
    }
  }
  exports.inflateReset = ta;
  exports.inflateReset2 = tl;
  exports.inflateResetKeep = ts;
  exports.inflateInit = tc;
  exports.inflateInit2 = th;
  exports.inflate = tp;
  exports.inflateEnd = tg;
  exports.inflateGetHeader = tm;
  exports.inflateSetDictionary = tv;
  exports.inflateInfo = "pako inflate (from Nodeca project)";
}