// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(23942) to 'brotli-io-buffer'
// - Resolved require(23942) to 'brotli-io-buffer'
// - Renamed variable 'o' to 'bitStreamReader'
// - Resolved require(167498) to 'bit-stream-reader'
// - Renamed variable 'a' to 'brotliDictionaryConfig'
// - Resolved require(132684) to 'brotli-dictionary-config'
// - Resolved require(379768) to 'brotli-huffman-table'
// - Resolved require(379768) to 'brotli-huffman-table'
// - Renamed variable 'u' to 'encodingLookupTable'
// - Resolved require(316881) to 'encoding-lookup-table'
// - Renamed variable 'c' to 'compressionPrefixCodes'
// - Resolved require(378409) to 'compression-prefix-codes'
// - Renamed variable 'h' to 'brotliDictionaryTransformer'
// - Resolved require(888410) to 'brotli-dictionary-transformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 364892
         */
module.exports = function (module, exports, require) {
  var n = require("brotli-io-buffer") /*id: 23942*/.BrotliInput;
  var i = require("brotli-io-buffer") /*id: 23942*/.BrotliOutput;
  var bitStreamReader = require("bit-stream-reader") /*id: 167498*/;
  var brotliDictionaryConfig = require("brotli-dictionary-config") /*id: 132684*/;
  var s = require("brotli-huffman-table") /*id: 379768*/.HuffmanCode;
  var l = require("brotli-huffman-table") /*id: 379768*/.BrotliBuildHuffmanTable;
  var encodingLookupTable = require("encoding-lookup-table") /*id: 316881*/;
  var compressionPrefixCodes = require("compression-prefix-codes") /*id: 378409*/;
  var brotliDictionaryTransformer = require("brotli-dictionary-transformer") /*id: 888410*/;
  var d = new Uint8Array([1, 2, 3, 4, 0, 5, 17, 6, 16, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  var f = new Uint8Array([3, 2, 1, 0, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2]);
  var A = new Int8Array([0, 0, 0, 0, -1, 1, -2, 2, -3, 3, -1, 1, -2, 2, -3, 3]);
  var g = new Uint16Array([256, 402, 436, 468, 500, 534, 566, 598, 630, 662, 694, 726, 758, 790, 822, 854, 886, 920, 952, 984, 1016, 1048, 1080]);
  function p(e) {
    var t;
    if (e.readBits(1) === 0) {
      return 16;
    } else if ((t = e.readBits(3)) > 0) {
      return 17 + t;
    } else if ((t = e.readBits(3)) > 0) {
      return 8 + t;
    } else {
      return 17;
    }
  }
  function m(e) {
    if (e.readBits(1)) {
      var t = e.readBits(3);
      if (t === 0) {
        return 1;
      } else {
        return e.readBits(t) + (1 << t);
      }
    }
    return 0;
  }
  function y() {
    this.meta_block_length = 0;
    this.input_end = 0;
    this.is_uncompressed = 0;
    this.is_metadata = false;
  }
  function v(e) {
    var t;
    var r;
    var n;
    var i = new y();
    i.input_end = e.readBits(1);
    if (i.input_end && e.readBits(1)) {
      return i;
    }
    if ((t = e.readBits(2) + 4) === 7) {
      i.is_metadata = true;
      if (e.readBits(1) !== 0) {
        throw Error("Invalid reserved bit");
      }
      if ((r = e.readBits(2)) === 0) {
        return i;
      }
      for (n = 0; n < r; n++) {
        var o = e.readBits(8);
        if (n + 1 === r && r > 1 && o === 0) {
          throw Error("Invalid size byte");
        }
        i.meta_block_length |= o << n * 8;
      }
    } else {
      for (n = 0; n < t; ++n) {
        var a = e.readBits(4);
        if (n + 1 === t && t > 4 && a === 0) {
          throw Error("Invalid size nibble");
        }
        i.meta_block_length |= a << n * 4;
      }
    }
    ++i.meta_block_length;
    if (!i.input_end && !i.is_metadata) {
      i.is_uncompressed = e.readBits(1);
    }
    return i;
  }
  function b(e, t, r) {
    var n;
    r.fillBitWindow();
    t += r.val_ >>> r.bit_pos_ & 255;
    if ((n = e[t].bits - 8) > 0) {
      r.bit_pos_ += 8;
      t += e[t].value;
      t += r.val_ >>> r.bit_pos_ & (1 << n) - 1;
    }
    r.bit_pos_ += e[t].bits;
    return e[t].value;
  }
  function w(e, t, r, n) {
    var i = 0;
    var o = new Uint8Array(e);
    n.readMoreInput();
    if ((a = n.readBits(2)) === 1) {
      var a;
      var u;
      var c = e - 1;
      var h = 0;
      var f = new Int32Array(4);
      var A = n.readBits(2) + 1;
      while (c) {
        c >>= 1;
        ++h;
      }
      for (u = 0; u < A; ++u) {
        f[u] = n.readBits(h) % e;
        o[f[u]] = 2;
      }
      o[f[0]] = 1;
      switch (A) {
        case 1:
          break;
        case 3:
          if (f[0] === f[1] || f[0] === f[2] || f[1] === f[2]) {
            throw Error("[ReadHuffmanCode] invalid symbols");
          }
          break;
        case 2:
          if (f[0] === f[1]) {
            throw Error("[ReadHuffmanCode] invalid symbols");
          }
          o[f[1]] = 1;
          break;
        case 4:
          if (f[0] === f[1] || f[0] === f[2] || f[0] === f[3] || f[1] === f[2] || f[1] === f[3] || f[2] === f[3]) {
            throw Error("[ReadHuffmanCode] invalid symbols");
          }
          if (n.readBits(1)) {
            o[f[2]] = 3;
            o[f[3]] = 3;
          } else {
            o[f[0]] = 2;
          }
      }
    } else {
      var g = new Uint8Array(18);
      var p = 32;
      var m = 0;
      var y = [new s(2, 0), new s(2, 4), new s(2, 3), new s(3, 2), new s(2, 0), new s(2, 4), new s(2, 3), new s(4, 1), new s(2, 0), new s(2, 4), new s(2, 3), new s(3, 2), new s(2, 0), new s(2, 4), new s(2, 3), new s(4, 5)];
      for (u = a; u < 18 && p > 0; ++u) {
        var u;
        var v;
        var b = d[u];
        var w = 0;
        n.fillBitWindow();
        w += n.val_ >>> n.bit_pos_ & 15;
        n.bit_pos_ += y[w].bits;
        v = y[w].value;
        g[b] = v;
        if (v !== 0) {
          p -= 32 >> v;
          ++m;
        }
      }
      if (m !== 1 && p !== 0) {
        throw Error("[ReadHuffmanCode] invalid num_codes or space");
      }
      (function (e, t, r, n) {
        var i = 0;
        var o = 8;
        var a = 0;
        var u = 0;
        var c = 32768;
        var h = [];
        var d = 0;
        for (; d < 32; d++) {
          h.push(new s(0, 0));
        }
        for (l(h, 0, 5, e, 18); i < t && c > 0;) {
          var f = 0;
          n.readMoreInput();
          n.fillBitWindow();
          f += n.val_ >>> n.bit_pos_ & 31;
          n.bit_pos_ += h[f].bits;
          if ((A = h[f].value & 255) < 16) {
            a = 0;
            r[i++] = A;
            if (A !== 0) {
              o = A;
              c -= 32768 >> A;
            }
          } else {
            var A;
            var g;
            var p;
            var m = A - 14;
            var y = 0;
            if (A === 16) {
              y = o;
            }
            if (u !== y) {
              a = 0;
              u = y;
            }
            g = a;
            if (a > 0) {
              a -= 2;
              a <<= m;
            }
            a += n.readBits(m) + 3;
            if (i + (p = a - g) > t) {
              throw Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");
            }
            for (var v = 0; v < p; v++) {
              r[i + v] = u;
            }
            i += p;
            if (u !== 0) {
              c -= p << 15 - u;
            }
          }
        }
        if (c !== 0) {
          throw Error("[ReadHuffmanCodeLengths] space = " + c);
        }
        for (; i < t; i++) {
          r[i] = 0;
        }
      })(g, e, o, n);
    }
    if ((i = l(t, r, 8, o, e)) === 0) {
      throw Error("[ReadHuffmanCode] BuildHuffmanTable failed: ");
    }
    return i;
  }
  function C(e, t, r) {
    var n;
    var i;
    n = b(e, t, r);
    i = compressionPrefixCodes.kBlockLengthPrefixCode[n].nbits;
    return compressionPrefixCodes.kBlockLengthPrefixCode[n].offset + r.readBits(i);
  }
  function E(e, t) {
    this.alphabet_size = e;
    this.num_htrees = t;
    this.codes = Array(t + t * g[e + 31 >>> 5]);
    this.htrees = new Uint32Array(t);
  }
  function I(e, t) {
    var r;
    var n;
    var i;
    var o = {
      num_htrees: null,
      context_map: null
    };
    var a = 0;
    t.readMoreInput();
    var l = o.num_htrees = m(t) + 1;
    var u = o.context_map = new Uint8Array(e);
    if (l <= 1) {
      return o;
    }
    if (t.readBits(1)) {
      a = t.readBits(4) + 1;
    }
    r = [];
    n = 0;
    for (; n < 1080; n++) {
      r[n] = new s(0, 0);
    }
    w(l + a, r, 0, t);
    n = 0;
    while (n < e) {
      t.readMoreInput();
      if ((i = b(r, 0, t)) === 0) {
        u[n] = 0;
        ++n;
      } else if (i <= a) {
        for (var c = 1 + (1 << i) + t.readBits(i); --c;) {
          if (n >= e) {
            throw Error("[DecodeContextMap] i >= context_map_size");
          }
          u[n] = 0;
          ++n;
        }
      } else {
        u[n] = i - a;
        ++n;
      }
    }
    if (t.readBits(1)) {
      (function (e, t) {
        var r;
        var n = new Uint8Array(256);
        for (r = 0; r < 256; ++r) {
          n[r] = r;
        }
        for (r = 0; r < t; ++r) {
          var i = e[r];
          e[r] = n[i];
          if (i) {
            (function (e, t) {
              var r = e[t];
              var n = t;
              for (; n; --n) {
                e[n] = e[n - 1];
              }
              e[0] = r;
            })(n, i);
          }
        }
      })(u, e);
    }
    return o;
  }
  function B(e, t, r, n, i, o, a) {
    var s;
    var l = r * 2;
    var u = b(t, r * 1080, a);
    if ((s = u === 0 ? i[l + (o[r] & 1)] : u === 1 ? i[l + (o[r] - 1 & 1)] + 1 : u - 2) >= e) {
      s -= e;
    }
    n[r] = s;
    i[l + (o[r] & 1)] = s;
    ++o[r];
  }
  E.prototype.decode = function (e) {
    var t;
    var r;
    var n = 0;
    for (t = 0; t < this.num_htrees; ++t) {
      this.htrees[t] = n;
      r = w(this.alphabet_size, this.codes, n, e);
      n += r;
    }
  };
  exports.BrotliDecompressBuffer = function (e, t) {
    var r;
    var l = new n(e);
    if (t == null) {
      p(r = new bitStreamReader(new n(e)));
      t = v(r).meta_block_length;
    }
    var d = new i(new Uint8Array(t));
    (function (e, t) {
      var r = 0;
      var n = 0;
      var i = 0;
      var l = 0;
      var d = [16, 15, 11, 4];
      var g = 0;
      var y = 0;
      var x = 0;
      var D = [new E(0, 0), new E(0, 0), new E(0, 0)];
      var S = 128 + bitStreamReader.READ_SIZE;
      X = (1 << (i = p(ei = new bitStreamReader(e)))) - 16;
      ee = ($ = 1 << i) - 1;
      et = new Uint8Array($ + S + brotliDictionaryConfig.maxDictionaryWordLength);
      er = [];
      en = [];
      for (var k = 0; k < 3240; k++) {
        er[k] = new s(0, 0);
        en[k] = new s(0, 0);
      }
      while (!n) {
        var _ = 0;
        var T = [268435456, 268435456, 268435456];
        var Q = [0];
        var R = [1, 1, 1];
        var F = [0, 1, 0, 1, 0, 1];
        var L = [0];
        var O = null;
        var N = null;
        var M = null;
        var P = 0;
        var U = null;
        var z = 0;
        var H = 0;
        var G = null;
        var Z = 0;
        var W = 0;
        var j = 0;
        for (J = 0; J < 3; ++J) {
          D[J].codes = null;
          D[J].htrees = null;
        }
        ei.readMoreInput();
        var Y = v(ei);
        if (r + (_ = Y.meta_block_length) > t.buffer.length) {
          var K = new Uint8Array(r + _);
          K.set(t.buffer);
          t.buffer = K;
        }
        n = Y.input_end;
        eo = Y.is_uncompressed;
        if (Y.is_metadata) {
          for (!function (e) {
            var t = e.bit_pos_ + 7 & -8;
            e.readBits(t - e.bit_pos_);
          }(ei); _ > 0; --_) {
            ei.readMoreInput();
            ei.readBits(8);
          }
          continue;
        }
        if (_ !== 0) {
          if (eo) {
            ei.bit_pos_ = ei.bit_pos_ + 7 & -8;
            (function (e, t, r, n, i, a) {
              var s;
              var l = i + 1;
              var u = r & i;
              var c = a.pos_ & bitStreamReader.IBUF_MASK;
              if (t < 8 || a.bit_pos_ + (t << 3) < a.bit_end_pos_) {
                while (t-- > 0) {
                  a.readMoreInput();
                  n[u++] = a.readBits(8);
                  if (u === l) {
                    e.write(n, l);
                    u = 0;
                  }
                }
                return;
              }
              if (a.bit_end_pos_ < 32) {
                throw Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32");
              }
              while (a.bit_pos_ < 32) {
                n[u] = a.val_ >>> a.bit_pos_;
                a.bit_pos_ += 8;
                ++u;
                --t;
              }
              if (c + (s = a.bit_end_pos_ - a.bit_pos_ >> 3) > bitStreamReader.IBUF_MASK) {
                var h = bitStreamReader.IBUF_MASK + 1 - c;
                var d = 0;
                for (; d < h; d++) {
                  n[u + d] = a.buf_[c + d];
                }
                s -= h;
                u += h;
                t -= h;
                c = 0;
              }
              for (var d = 0; d < s; d++) {
                n[u + d] = a.buf_[c + d];
              }
              u += s;
              t -= s;
              if (u >= l) {
                e.write(n, l);
                u -= l;
                for (var d = 0; d < u; d++) {
                  n[d] = n[l + d];
                }
              }
              while (u + t >= l) {
                s = l - u;
                if (a.input_.read(n, u, s) < s) {
                  throw Error("[CopyUncompressedBlockToOutput] not enough bytes");
                }
                e.write(n, l);
                t -= s;
                u = 0;
              }
              if (a.input_.read(n, u, t) < t) {
                throw Error("[CopyUncompressedBlockToOutput] not enough bytes");
              }
              a.reset();
            })(t, _, r, et, ee, ei);
            r += _;
            continue;
          }
          for (J = 0; J < 3; ++J) {
            R[J] = m(ei) + 1;
            if (R[J] >= 2) {
              w(R[J] + 2, er, J * 1080, ei);
              w(26, en, J * 1080, ei);
              T[J] = C(en, J * 1080, ei);
              L[J] = 1;
            }
          }
          ei.readMoreInput();
          ea = ei.readBits(2);
          es = 16 + (ei.readBits(4) << ea);
          el = (1 << ea) - 1;
          eu = es + (48 << ea);
          N = new Uint8Array(R[0]);
          J = 0;
          for (; J < R[0]; ++J) {
            ei.readMoreInput();
            N[J] = ei.readBits(2) << 1;
          }
          var q = I(R[0] << 6, ei);
          ec = q.num_htrees;
          O = q.context_map;
          var V = I(R[2] << 2, ei);
          J = 0;
          eh = V.num_htrees;
          M = V.context_map;
          D[0] = new E(256, ec);
          D[1] = new E(704, R[1]);
          D[2] = new E(eu, eh);
          for (; J < 3; ++J) {
            D[J].decode(ei);
          }
          U = 0;
          G = 0;
          ed = N[Q[0]];
          W = encodingLookupTable.lookupOffsets[ed];
          j = encodingLookupTable.lookupOffsets[ed + 1];
          ef = D[1].htrees[0];
          while (_ > 0) {
            ei.readMoreInput();
            if (T[1] === 0) {
              B(R[1], er, 1, Q, F, L, ei);
              T[1] = C(en, 1080, ei);
              ef = D[1].htrees[Q[1]];
            }
            --T[1];
            if ((eg = (eA = b(D[1].codes, ef, ei)) >> 6) >= 2) {
              eg -= 2;
              eb = -1;
            } else {
              eb = 0;
            }
            ep = compressionPrefixCodes.kInsertRangeLut[eg] + (eA >> 3 & 7);
            em = compressionPrefixCodes.kCopyRangeLut[eg] + (eA & 7);
            ey = compressionPrefixCodes.kInsertLengthPrefixCode[ep].offset + ei.readBits(compressionPrefixCodes.kInsertLengthPrefixCode[ep].nbits);
            ev = compressionPrefixCodes.kCopyLengthPrefixCode[em].offset + ei.readBits(compressionPrefixCodes.kCopyLengthPrefixCode[em].nbits);
            y = et[r - 1 & ee];
            x = et[r - 2 & ee];
            eC = 0;
            for (; eC < ey; ++eC) {
              ei.readMoreInput();
              if (T[0] === 0) {
                B(R[0], er, 0, Q, F, L, ei);
                T[0] = C(en, 0, ei);
                U = Q[0] << 6;
                ed = N[Q[0]];
                W = encodingLookupTable.lookupOffsets[ed];
                j = encodingLookupTable.lookupOffsets[ed + 1];
              }
              z = O[U + (encodingLookupTable.lookup[W + y] | encodingLookupTable.lookup[j + x])];
              --T[0];
              x = y;
              y = b(D[0].codes, D[0].htrees[z], ei);
              et[r & ee] = y;
              if ((r & ee) === ee) {
                t.write(et, $);
              }
              ++r;
            }
            if ((_ -= ey) <= 0) {
              break;
            }
            if (eb < 0) {
              ei.readMoreInput();
              if (T[2] === 0) {
                B(R[2], er, 2, Q, F, L, ei);
                T[2] = C(en, 2160, ei);
                G = Q[2] << 2;
              }
              --T[2];
              Z = M[G + ((ev > 4 ? 3 : ev - 2) & 255)];
              if ((eb = b(D[2].codes, D[2].htrees[Z], ei)) >= es) {
                eb -= es;
                ex = eb & el;
                eb >>= ea;
                eB = (eb >> 1) + 1;
                eb = es + ((eD = (2 + (eb & 1) << eB) - 4) + ei.readBits(eB) << ea) + ex;
              }
            }
            if ((ew = function (e, t, r) {
              var n;
              if (e < 16) {
                r += f[e];
                r &= 3;
                n = t[r] + A[e];
              } else {
                n = e - 16 + 1;
              }
              return n;
            }(eb, d, g)) < 0) {
              throw Error("[BrotliDecompress] invalid distance");
            }
            l = r < X && l !== X ? r : X;
            eE = r & ee;
            if (ew > l) {
              if (ev >= brotliDictionaryConfig.minDictionaryWordLength && ev <= brotliDictionaryConfig.maxDictionaryWordLength) {
                var J;
                var X;
                var $;
                var ee;
                var et;
                var er;
                var en;
                var ei;
                var eo;
                var ea;
                var es;
                var el;
                var eu;
                var ec;
                var eh;
                var ed;
                var ef;
                var eA;
                var eg;
                var ep;
                var em;
                var ey;
                var ev;
                var eb;
                var ew;
                var eC;
                var eE;
                var eI;
                var eB;
                var ex;
                var eD = brotliDictionaryConfig.offsetsByLength[ev];
                var eS = ew - l - 1;
                var ek = brotliDictionaryConfig.sizeBitsByLength[ev];
                var e_ = eS & (1 << ek) - 1;
                var eT = eS >> ek;
                eD += e_ * ev;
                if (eT < brotliDictionaryTransformer.kNumTransforms) {
                  var eQ = brotliDictionaryTransformer.transformDictionaryWord(et, eE, eD, ev, eT);
                  eE += eQ;
                  r += eQ;
                  _ -= eQ;
                  if (eE >= $) {
                    t.write(et, $);
                    for (var eR = 0; eR < eE - $; eR++) {
                      et[eR] = et[$ + eR];
                    }
                  }
                } else {
                  throw Error("Invalid backward reference. pos: " + r + " distance: " + ew + " len: " + ev + " bytes left: " + _);
                }
              } else {
                throw Error("Invalid backward reference. pos: " + r + " distance: " + ew + " len: " + ev + " bytes left: " + _);
              }
            } else {
              if (eb > 0) {
                d[g & 3] = ew;
                ++g;
              }
              if (ev > _) {
                throw Error("Invalid backward reference. pos: " + r + " distance: " + ew + " len: " + ev + " bytes left: " + _);
              }
              for (eC = 0; eC < ev; ++eC) {
                et[r & ee] = et[r - ew & ee];
                if ((r & ee) === ee) {
                  t.write(et, $);
                }
                ++r;
                --_;
              }
            }
            y = et[r - 1 & ee];
            x = et[r - 2 & ee];
          }
          r &= 1073741823;
        }
      }
      t.write(et, r & ee);
    })(l, d);
    if (d.pos < d.buffer.length) {
      d.buffer = d.buffer.subarray(0, d.pos);
    }
    return d.buffer;
  };
  brotliDictionaryConfig.init();
}