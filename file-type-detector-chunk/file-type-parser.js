// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(903754) to 'ieee754-float-buffer-utils'
// - Renamed variable 'K' to 'debugBrowserConfig'
// - Resolved require(471456) to 'debug-browser-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75162.eaf20657.js
         * chunkId: 75162
         * moduleId: 806907
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return new DataView(e.buffer, e.byteOffset);
  }
  require("ieee754-float-buffer-utils") /*id: 903754*/;
  let n = {
    len: 1,
    get: (e, t) => r(e).getUint8(t),
    put: (e, t, i) => {
      r(e).setUint8(t, i);
      return t + 1;
    }
  };
  let a = {
    len: 2,
    get: (e, t) => r(e).getUint16(t, true),
    put: (e, t, i) => {
      r(e).setUint16(t, i, true);
      return t + 2;
    }
  };
  let o = {
    len: 2,
    get: (e, t) => r(e).getUint16(t),
    put: (e, t, i) => {
      r(e).setUint16(t, i);
      return t + 2;
    }
  };
  let s = {
    len: 4,
    get: (e, t) => r(e).getUint32(t, true),
    put: (e, t, i) => {
      r(e).setUint32(t, i, true);
      return t + 4;
    }
  };
  let c = {
    len: 4,
    get: (e, t) => r(e).getUint32(t),
    put: (e, t, i) => {
      r(e).setUint32(t, i);
      return t + 4;
    }
  };
  let m = {
    len: 4,
    get: (e, t) => r(e).getInt32(t),
    put: (e, t, i) => {
      r(e).setInt32(t, i);
      return t + 4;
    }
  };
  let f = {
    len: 8,
    get: (e, t) => r(e).getBigUint64(t, true),
    put: (e, t, i) => {
      r(e).setBigUint64(t, i, true);
      return t + 8;
    }
  };
  class p {
    constructor(e, t) {
      this.len = e;
      this.encoding = t;
      this.textDecoder = new TextDecoder(t);
    }
    get(e, t) {
      return this.textDecoder.decode(e.subarray(t, t + this.len));
    }
  }
  class l extends Error {
    constructor() {
      super("End-Of-Stream");
      this.name = "EndOfStreamError";
    }
  }
  class u extends Error {
    constructor(e = "The operation was aborted") {
      super(e);
      this.name = "AbortError";
    }
  }
  class h {
    constructor() {
      this.endOfStream = false;
      this.interrupted = false;
      this.peekQueue = [];
    }
    async peek(e, t = false) {
      let i = await this.read(e, t);
      this.peekQueue.push(e.subarray(0, i));
      return i;
    }
    async read(e, t = false) {
      if (e.length === 0) {
        return 0;
      }
      let i = this.readFromPeekBuffer(e);
      if (!this.endOfStream) {
        i += await this.readRemainderFromStream(e.subarray(i), t);
      }
      if (i === 0) {
        throw new l();
      }
      return i;
    }
    readFromPeekBuffer(e) {
      let t = e.length;
      let i = 0;
      while (this.peekQueue.length > 0 && t > 0) {
        let r = this.peekQueue.pop();
        if (!r) {
          throw Error("peekData should be defined");
        }
        let n = Math.min(r.length, t);
        e.set(r.subarray(0, n), i);
        i += n;
        t -= n;
        if (n < r.length) {
          this.peekQueue.push(r.subarray(n));
        }
      }
      return i;
    }
    async readRemainderFromStream(e, t) {
      let i = 0;
      while (i < e.length && !this.endOfStream) {
        if (this.interrupted) {
          throw new u();
        }
        let r = await this.readFromStream(e.subarray(i), t);
        if (r === 0) {
          break;
        }
        i += r;
      }
      if (!t && i < e.length) {
        throw new l();
      }
      return i;
    }
  }
  class d extends h {
    constructor(e) {
      super();
      this.reader = e;
    }
    async abort() {
      return this.close();
    }
    async close() {
      this.reader.releaseLock();
    }
  }
  class g extends d {
    async readFromStream(e, t) {
      if (e.length === 0) {
        return 0;
      }
      let i = await this.reader.read(new Uint8Array(e.length), {
        min: t ? undefined : e.length
      });
      if (i.done) {
        this.endOfStream = i.done;
      }
      if (i.value) {
        e.set(i.value);
        return i.value.length;
      } else {
        return 0;
      }
    }
  }
  class x extends h {
    constructor(e) {
      super();
      this.reader = e;
      this.buffer = null;
    }
    writeChunk(e, t) {
      let i = Math.min(t.length, e.length);
      e.set(t.subarray(0, i));
      if (i < t.length) {
        this.buffer = t.subarray(i);
      } else {
        this.buffer = null;
      }
      return i;
    }
    async readFromStream(e, t) {
      if (e.length === 0) {
        return 0;
      }
      let i = 0;
      for (this.buffer && (i += this.writeChunk(e, this.buffer)); i < e.length && !this.endOfStream;) {
        let t = await this.reader.read();
        if (t.done) {
          this.endOfStream = true;
          break;
        }
        if (t.value) {
          i += this.writeChunk(e.subarray(i), t.value);
        }
      }
      if (i === 0 && this.endOfStream) {
        throw new l();
      }
      return i;
    }
    abort() {
      this.interrupted = true;
      return this.reader.cancel();
    }
    async close() {
      await this.abort();
      this.reader.releaseLock();
    }
  }
  class k {
    async readToken(e, t = this.position) {
      let i = new Uint8Array(e.len);
      if ((await this.readBuffer(i, {
        position: t
      })) < e.len) {
        throw new l();
      }
      return e.get(i, 0);
    }
    async peekToken(e, t = this.position) {
      let i = new Uint8Array(e.len);
      if ((await this.peekBuffer(i, {
        position: t
      })) < e.len) {
        throw new l();
      }
      return e.get(i, 0);
    }
    async readNumber(e) {
      if ((await this.readBuffer(this.numBuffer, {
        length: e.len
      })) < e.len) {
        throw new l();
      }
      return e.get(this.numBuffer, 0);
    }
    async peekNumber(e) {
      if ((await this.peekBuffer(this.numBuffer, {
        length: e.len
      })) < e.len) {
        throw new l();
      }
      return e.get(this.numBuffer, 0);
    }
    async ignore(e) {
      if (this.fileInfo.size !== undefined) {
        let t = this.fileInfo.size - this.position;
        if (e > t) {
          this.position += t;
          return t;
        }
      }
      this.position += e;
      return e;
    }
    async close() {
      var e;
      await this.abort();
      await ((e = this.onClose) === null || e === undefined ? undefined : e.call(this));
    }
    normalizeOptions(e, t) {
      if (!this.supportsRandomAccess() && t && t.position !== undefined && t.position < this.position) {
        throw Error("`options.position` must be equal or greater than `tokenizer.position`");
      }
      return {
        mayBeLess: false,
        offset: 0,
        length: e.length,
        position: this.position,
        ...t
      };
    }
    abort() {
      return Promise.resolve();
    }
    constructor(e) {
      this.numBuffer = new Uint8Array(8);
      this.position = 0;
      this.onClose = e == null ? undefined : e.onClose;
      if (e == null ? undefined : e.abortSignal) {
        e.abortSignal.addEventListener("abort", () => {
          this.abort();
        });
      }
    }
  }
  class v extends k {
    async readBuffer(e, t) {
      let i = this.normalizeOptions(e, t);
      let r = i.position - this.position;
      if (r > 0) {
        await this.ignore(r);
        return this.readBuffer(e, t);
      }
      if (r < 0) {
        throw Error("`options.position` must be equal or greater than `tokenizer.position`");
      }
      if (i.length === 0) {
        return 0;
      }
      let n = await this.streamReader.read(e.subarray(0, i.length), i.mayBeLess);
      this.position += n;
      if ((!t || !t.mayBeLess) && n < i.length) {
        throw new l();
      }
      return n;
    }
    async peekBuffer(e, t) {
      let i = this.normalizeOptions(e, t);
      let r = 0;
      if (i.position) {
        let t = i.position - this.position;
        if (t > 0) {
          let n = new Uint8Array(i.length + t);
          r = await this.peekBuffer(n, {
            mayBeLess: i.mayBeLess
          });
          e.set(n.subarray(t));
          return r - t;
        }
        if (t < 0) {
          throw Error("Cannot peek from a negative offset in a stream");
        }
      }
      if (i.length > 0) {
        try {
          r = await this.streamReader.peek(e.subarray(0, i.length), i.mayBeLess);
        } catch (e) {
          if ((t == null ? undefined : t.mayBeLess) && e instanceof l) {
            return 0;
          }
          throw e;
        }
        if (!i.mayBeLess && r < i.length) {
          throw new l();
        }
      }
      return r;
    }
    async ignore(e) {
      let t = Math.min(256000, e);
      let i = new Uint8Array(t);
      let r = 0;
      while (r < e) {
        let n = e - r;
        let a = await this.readBuffer(i, {
          length: Math.min(t, n)
        });
        if (a < 0) {
          return a;
        }
        r += a;
      }
      return r;
    }
    abort() {
      return this.streamReader.abort();
    }
    async close() {
      return this.streamReader.close();
    }
    supportsRandomAccess() {
      return false;
    }
    constructor(e, t) {
      super(t);
      this.streamReader = e;
      this.fileInfo = (t == null ? undefined : t.fileInfo) ?? {};
    }
  }
  class w extends k {
    async readBuffer(e, t) {
      if (t == null ? undefined : t.position) {
        this.position = t.position;
      }
      let i = await this.peekBuffer(e, t);
      this.position += i;
      return i;
    }
    async peekBuffer(e, t) {
      let i = this.normalizeOptions(e, t);
      let r = Math.min(this.uint8Array.length - i.position, i.length);
      if (!i.mayBeLess && r < i.length) {
        throw new l();
      }
      e.set(this.uint8Array.subarray(i.position, i.position + r));
      return r;
    }
    close() {
      return super.close();
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(e) {
      this.position = e;
    }
    constructor(e, t) {
      super(t);
      this.uint8Array = e;
      this.fileInfo = {
        ...((t == null ? undefined : t.fileInfo) ?? {}),
        size: e.length
      };
    }
  }
  var b = Uint8Array;
  var y = Uint16Array;
  var C = Int32Array;
  var S = new b([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var z = new b([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var F = new b([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  function T(e, t) {
    var i = new y(31);
    var r = 0;
    for (; r < 31; ++r) {
      i[r] = t += 1 << e[r - 1];
    }
    var n = new C(i[30]);
    var r = 1;
    for (; r < 30; ++r) {
      for (var a = i[r]; a < i[r + 1]; ++a) {
        n[a] = a - i[r] << 5 | r;
      }
    }
    return {
      b: i,
      r: n
    };
  }
  var E = T(S, 2);
  var B = E.b;
  var A = E.r;
  B[28] = 258;
  A[258] = 28;
  var O = T(z, 0);
  var j = O.b;
  O.r;
  var D = new y(32768);
  var L = 0;
  for (; L < 32768; ++L) {
    var M = (L & 43690) >> 1 | (L & 21845) << 1;
    M = ((M = (M & 52428) >> 2 | (M & 13107) << 2) & 61680) >> 4 | (M & 3855) << 4;
    D[L] = ((M & 65280) >> 8 | (M & 255) << 8) >> 1;
  }
  function U(e, t, i) {
    var r;
    var n = e.length;
    var a = 0;
    var o = new y(t);
    for (; a < n; ++a) {
      if (e[a]) {
        ++o[e[a] - 1];
      }
    }
    var s = new y(t);
    for (a = 1; a < t; ++a) {
      s[a] = s[a - 1] + o[a - 1] << 1;
    }
    if (i) {
      r = new y(1 << t);
      var c = 15 - t;
      for (a = 0; a < n; ++a) {
        if (e[a]) {
          var m = a << 4 | e[a];
          var f = t - e[a];
          var p = s[e[a] - 1]++ << f;
          var l = p | (1 << f) - 1;
          for (; p <= l; ++p) {
            r[D[p] >> c] = m;
          }
        }
      }
    } else {
      a = 0;
      r = new y(n);
      for (; a < n; ++a) {
        if (e[a]) {
          r[a] = D[s[e[a] - 1]++] >> 15 - e[a];
        }
      }
    }
    return r;
  }
  var I = new b(288);
  var L = 0;
  for (; L < 144; ++L) {
    I[L] = 8;
  }
  for (var L = 144; L < 256; ++L) {
    I[L] = 9;
  }
  for (var L = 256; L < 280; ++L) {
    I[L] = 7;
  }
  for (var L = 280; L < 288; ++L) {
    I[L] = 8;
  }
  var P = new b(32);
  var L = 0;
  for (; L < 32; ++L) {
    P[L] = 5;
  }
  var R = U(I, 9, 1);
  var q = U(P, 5, 1);
  function N(e) {
    var t = e[0];
    var i = 1;
    for (; i < e.length; ++i) {
      if (e[i] > t) {
        t = e[i];
      }
    }
    return t;
  }
  function H(e, t, i) {
    var r = t / 8 | 0;
    return (e[r] | e[r + 1] << 8) >> (t & 7) & i;
  }
  function _(e, t) {
    var i = t / 8 | 0;
    return (e[i] | e[i + 1] << 8 | e[i + 2] << 16) >> (t & 7);
  }
  var $ = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler",, "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
  function V(e, t, i) {
    var r = Error(t || $[e]);
    r.code = e;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(r, V);
    }
    if (!i) {
      throw r;
    }
    return r;
  }
  function G(e, t, i, r) {
    var n;
    var a;
    var o;
    var s = e.length;
    var c = r ? r.length : 0;
    if (!s || t.f && !t.l) {
      return i || new b(0);
    }
    var m = !i;
    var f = m || t.i != 2;
    var p = t.i;
    if (m) {
      i = new b(s * 3);
    }
    function l(e) {
      var t = i.length;
      if (e > t) {
        var r = new b(Math.max(t * 2, e));
        r.set(i);
        i = r;
      }
    }
    var u = t.f || 0;
    var h = t.p || 0;
    var d = t.b || 0;
    var g = t.l;
    var x = t.d;
    var k = t.m;
    var v = t.n;
    var w = s * 8;
    do {
      if (!g) {
        u = H(e, h, 1);
        var y = H(e, h + 1, 3);
        h += 3;
        if (y) {
          if (y == 1) {
            g = R;
            x = q;
            k = 9;
            v = 5;
          } else if (y == 2) {
            var C = H(e, h, 31) + 257;
            var T = H(e, h + 10, 15) + 4;
            var E = C + H(e, h + 5, 31) + 1;
            h += 14;
            var A = new b(E);
            var O = new b(19);
            var D = 0;
            for (; D < T; ++D) {
              O[F[D]] = H(e, h + D * 3, 7);
            }
            h += T * 3;
            var L = N(O);
            var M = (1 << L) - 1;
            var I = U(O, L, 1);
            var D = 0;
            while (D < E) {
              var P = I[H(e, h, M)];
              h += P & 15;
              var $ = P >> 4;
              if ($ < 16) {
                A[D++] = $;
              } else {
                var G = 0;
                var W = 0;
                for ($ == 16 ? (W = 3 + H(e, h, 3), h += 2, G = A[D - 1]) : $ == 17 ? (W = 3 + H(e, h, 7), h += 3) : $ == 18 && (W = 11 + H(e, h, 127), h += 7); W--;) {
                  A[D++] = G;
                }
              }
            }
            var Z = A.subarray(0, C);
            var Q = A.subarray(C);
            k = N(Z);
            v = N(Q);
            g = U(Z, k, 1);
            x = U(Q, v, 1);
          } else {
            V(1);
          }
        } else {
          var $ = ((h + 7) / 8 | 0) + 4;
          var J = e[$ - 4] | e[$ - 3] << 8;
          var K = $ + J;
          if (K > s) {
            if (p) {
              V(0);
            }
            break;
          }
          if (f) {
            l(d + J);
          }
          i.set(e.subarray($, K), d);
          t.b = d += J;
          t.p = h = K * 8;
          t.f = u;
          continue;
        }
        if (h > w) {
          if (p) {
            V(0);
          }
          break;
        }
      }
      if (f) {
        l(d + 131072);
      }
      var X = (1 << k) - 1;
      var Y = (1 << v) - 1;
      var ee = h;
      for (;; ee = h) {
        var G = g[_(e, h) & X];
        var et = G >> 4;
        if ((h += G & 15) > w) {
          if (p) {
            V(0);
          }
          break;
        }
        if (!G) {
          V(2);
        }
        if (et < 256) {
          i[d++] = et;
        } else if (et == 256) {
          ee = h;
          g = null;
          break;
        } else {
          var ei = et - 254;
          if (et > 264) {
            var D = et - 257;
            var er = S[D];
            ei = H(e, h, (1 << er) - 1) + B[D];
            h += er;
          }
          var en = x[_(e, h) & Y];
          var ea = en >> 4;
          if (!en) {
            V(3);
          }
          h += en & 15;
          var Q = j[ea];
          if (ea > 3) {
            var er = z[ea];
            Q += _(e, h) & (1 << er) - 1;
            h += er;
          }
          if (h > w) {
            if (p) {
              V(0);
            }
            break;
          }
          if (f) {
            l(d + 131072);
          }
          var eo = d + ei;
          if (d < Q) {
            var es = c - Q;
            var ec = Math.min(Q, eo);
            for (es + d < 0 && V(3); d < ec; ++d) {
              i[d] = r[es + d];
            }
          }
          for (; d < eo; ++d) {
            i[d] = i[d - Q];
          }
        }
      }
      t.l = g;
      t.p = ee;
      t.b = d;
      t.f = u;
      if (g) {
        u = 1;
        t.m = k;
        t.d = x;
        t.n = v;
      }
    } while (!u);
    if (d != i.length && m) {
      n = i;
      if ((a = 0) < 0) {
        a = 0;
      }
      if ((o = d) == null || o > n.length) {
        o = n.length;
      }
      return new b(n.subarray(a, o));
    } else {
      return i.subarray(0, d);
    }
  }
  var W = new b(0);
  function Z(e) {
    if (e[0] != 31 || e[1] != 139 || e[2] != 8) {
      V(6, "invalid gzip data");
    }
    var t = e[3];
    var i = 10;
    if (t & 4) {
      i += (e[10] | e[11] << 8) + 2;
    }
    for (var r = (t >> 3 & 1) + (t >> 4 & 1); r > 0; r -= !e[i++]);
    return i + (t & 2);
  }
  function Q(e) {
    var t = e.length;
    return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
  }
  var J = typeof TextDecoder != "undefined" && new TextDecoder();
  try {
    J.decode(W, {
      stream: true
    });
  } catch (e) {}
  if (typeof queueMicrotask == "function") {
    queueMicrotask;
  } else if (typeof setTimeout == "function") {
    setTimeout;
  }
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  let X = {
    LocalFileHeader: 67324752,
    DataDescriptor: 134695760,
    CentralFileHeader: 33639248,
    EndOfCentralDirectory: 101010256
  };
  let Y = {
    get: e => {
      a.get(e, 6);
      return {
        signature: s.get(e, 0),
        compressedSize: s.get(e, 8),
        uncompressedSize: s.get(e, 12)
      };
    },
    len: 16
  };
  let ee = {
    get(e) {
      let t = a.get(e, 6);
      return {
        signature: s.get(e, 0),
        minVersion: a.get(e, 4),
        dataDescriptor: !!(t & 8),
        compressedMethod: a.get(e, 8),
        compressedSize: s.get(e, 18),
        uncompressedSize: s.get(e, 22),
        filenameLength: a.get(e, 26),
        extraFieldLength: a.get(e, 28),
        filename: null
      };
    },
    len: 30
  };
  let et = {
    get: e => ({
      signature: s.get(e, 0),
      nrOfThisDisk: a.get(e, 4),
      nrOfThisDiskWithTheStart: a.get(e, 6),
      nrOfEntriesOnThisDisk: a.get(e, 8),
      nrOfEntriesOfSize: a.get(e, 10),
      sizeOfCd: s.get(e, 12),
      offsetOfStartOfCd: s.get(e, 16),
      zipFileCommentLength: a.get(e, 20)
    }),
    len: 22
  };
  let ei = {
    get(e) {
      let t = a.get(e, 8);
      return {
        signature: s.get(e, 0),
        minVersion: a.get(e, 6),
        dataDescriptor: !!(t & 8),
        compressedMethod: a.get(e, 10),
        compressedSize: s.get(e, 20),
        uncompressedSize: s.get(e, 24),
        filenameLength: a.get(e, 28),
        extraFieldLength: a.get(e, 30),
        fileCommentLength: a.get(e, 32),
        relativeOffsetOfLocalHeader: s.get(e, 42),
        filename: null
      };
    },
    len: 46
  };
  function er(e) {
    let t = new Uint8Array(s.len);
    s.put(t, 0, e);
    return t;
  }
  let en = debugBrowserConfig("tokenizer:inflate");
  let ea = er(X.DataDescriptor);
  let eo = er(X.EndOfCentralDirectory);
  class es {
    constructor(e) {
      this.tokenizer = e;
      this.syncBuffer = new Uint8Array(262144);
    }
    async isZip() {
      return (await this.peekSignature()) === X.LocalFileHeader;
    }
    peekSignature() {
      return this.tokenizer.peekToken(s);
    }
    async findEndOfCentralDirectoryLocator() {
      let e = this.tokenizer;
      let t = Math.min(16384, e.fileInfo.size);
      let i = this.syncBuffer.subarray(0, t);
      await this.tokenizer.readBuffer(i, {
        position: e.fileInfo.size - t
      });
      for (let r = i.length - 4; r >= 0; r--) {
        if (i[r] === eo[0] && i[r + 1] === eo[1] && i[r + 2] === eo[2] && i[r + 3] === eo[3]) {
          return e.fileInfo.size - t + r;
        }
      }
      return -1;
    }
    async readCentralDirectory() {
      if (!this.tokenizer.supportsRandomAccess()) {
        en("Cannot reading central-directory without random-read support");
        return;
      }
      en("Reading central-directory...");
      let e = this.tokenizer.position;
      let t = await this.findEndOfCentralDirectoryLocator();
      if (t > 0) {
        en("Central-directory 32-bit signature found");
        let i = await this.tokenizer.readToken(et, t);
        let r = [];
        this.tokenizer.setPosition(i.offsetOfStartOfCd);
        for (let e = 0; e < i.nrOfEntriesOfSize; ++e) {
          let t = await this.tokenizer.readToken(ei);
          if (t.signature !== X.CentralFileHeader) {
            throw Error("Expected Central-File-Header signature");
          }
          t.filename = await this.tokenizer.readToken(new p(t.filenameLength, "utf-8"));
          await this.tokenizer.ignore(t.extraFieldLength);
          await this.tokenizer.ignore(t.fileCommentLength);
          r.push(t);
          en(`Add central-directory file-entry: n=${e + 1}/${r.length}: filename=${r[e].filename}`);
        }
        this.tokenizer.setPosition(e);
        return r;
      }
      this.tokenizer.setPosition(e);
    }
    async unzip(e) {
      let t = await this.readCentralDirectory();
      if (t) {
        return this.iterateOverCentralDirectory(t, e);
      }
      let i = false;
      do {
        let t;
        let r = await this.readLocalFileHeader();
        if (!r) {
          break;
        }
        let n = e(r);
        i = !!n.stop;
        await this.tokenizer.ignore(r.extraFieldLength);
        if (r.dataDescriptor && r.compressedSize === 0) {
          let e = [];
          let t = 262144;
          en("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
          let i = -1;
          while (i < 0 && t === 262144) {
            t = await this.tokenizer.peekBuffer(this.syncBuffer, {
              mayBeLess: true
            });
            let r = (i = function (e, t) {
              let i = e.length;
              let r = t.length;
              if (r > i) {
                return -1;
              }
              for (let n = 0; n <= i - r; n++) {
                let i = true;
                for (let a = 0; a < r; a++) {
                  if (e[n + a] !== t[a]) {
                    i = false;
                    break;
                  }
                }
                if (i) {
                  return n;
                }
              }
              return -1;
            }(this.syncBuffer.subarray(0, t), ea)) >= 0 ? i : t;
            if (n.handler) {
              let t = new Uint8Array(r);
              await this.tokenizer.readBuffer(t);
              e.push(t);
            } else {
              await this.tokenizer.ignore(r);
            }
          }
          en(`Found data-descriptor-signature at pos=${this.tokenizer.position}`);
          if (n.handler) {
            await this.inflate(r, function (e) {
              let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
              let i = 0;
              for (let r of e) {
                t.set(r, i);
                i += r.length;
              }
              return t;
            }(e), n.handler);
          }
        } else if (n.handler) {
          en(`Reading compressed-file-data: ${r.compressedSize} bytes`);
          t = new Uint8Array(r.compressedSize);
          await this.tokenizer.readBuffer(t);
          await this.inflate(r, t, n.handler);
        } else {
          en(`Ignoring compressed-file-data: ${r.compressedSize} bytes`);
          await this.tokenizer.ignore(r.compressedSize);
        }
        en(`Reading data-descriptor at pos=${this.tokenizer.position}`);
        if (r.dataDescriptor && (await this.tokenizer.readToken(Y)).signature !== 134695760) {
          throw Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - Y.len}`);
        }
      } while (!i);
    }
    async iterateOverCentralDirectory(e, t) {
      for (let i of e) {
        let e = t(i);
        if (e.handler) {
          this.tokenizer.setPosition(i.relativeOffsetOfLocalHeader);
          let t = await this.readLocalFileHeader();
          if (t) {
            await this.tokenizer.ignore(t.extraFieldLength);
            let r = new Uint8Array(i.compressedSize);
            await this.tokenizer.readBuffer(r);
            await this.inflate(t, r, e.handler);
          }
        }
        if (e.stop) {
          break;
        }
      }
    }
    inflate(e, t, i) {
      var r;
      var n;
      var a;
      var o;
      if (e.compressedMethod === 0) {
        return i(t);
      } else {
        en(`Decompress filename=${e.filename}, compressed-size=${t.length}`);
        return i(t[0] == 31 && t[1] == 139 && t[2] == 8 ? (n = undefined, (a = Z(t)) + 8 > t.length && V(6, "invalid gzip data"), G(t.subarray(a, -8), {
          i: 2
        }, n && n.out || new b(Q(t)), n && n.dictionary)) : (t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31 ? G(t, {
          i: 2
        }, r && r.out, r && r.dictionary) : G(t.subarray((o = r && r.dictionary, ((t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31) && V(6, "invalid zlib data"), (t[1] >> 5 & 1) == +!o && V(6, "invalid zlib data: " + (t[1] & 32 ? "need" : "unexpected") + " dictionary"), (t[1] >> 3 & 4) + 2), -4), {
          i: 2
        }, r && r.out, r && r.dictionary));
      }
    }
    async readLocalFileHeader() {
      let e = await this.tokenizer.peekToken(s);
      if (e === X.LocalFileHeader) {
        let e = await this.tokenizer.readToken(ee);
        e.filename = await this.tokenizer.readToken(new p(e.filenameLength, "utf-8"));
        return e;
      }
      if (e === X.CentralFileHeader) {
        return false;
      }
      if (e === 3759263696) {
        throw Error("Encrypted ZIP");
      }
      throw Error("Unexpected signature");
    }
  }
  function ec(e) {
    let {
      byteLength: t
    } = e;
    if (t === 6) {
      return e.getUint16(0) * 4294967296 + e.getUint32(2);
    } else if (t === 5) {
      return e.getUint8(0) * 4294967296 + e.getUint32(1);
    } else if (t === 4) {
      return e.getUint32(0);
    } else if (t === 3) {
      return e.getUint8(0) * 65536 + e.getUint16(1);
    } else if (t === 2) {
      return e.getUint16(0);
    } else if (t === 1) {
      return e.getUint8(0);
    } else {
      return undefined;
    }
  }
  Object.prototype.toString;
  new globalThis.TextDecoder("utf8");
  new globalThis.TextEncoder();
  Array.from({
    length: 256
  }, (e, t) => t.toString(16).padStart(2, "0"));
  let em = {
    get: (e, t) => e[t + 3] & 127 | e[t + 2] << 7 | e[t + 1] << 14 | e[t] << 21,
    len: 4
  };
  function ef(e, t, i) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  let ep = 4100;
  async function el(e) {
    return new ev().fromStream(e);
  }
  async function eu(e) {
    return new ev().fromBuffer(e);
  }
  async function eh(e) {
    return new ev().fromBlob(e);
  }
  function ed(e) {
    switch (e) {
      case "application/epub+zip":
        return {
          ext: "epub",
          mime: "application/epub+zip"
        };
      case "application/vnd.oasis.opendocument.text":
        return {
          ext: "odt",
          mime: "application/vnd.oasis.opendocument.text"
        };
      case "application/vnd.oasis.opendocument.text-template":
        return {
          ext: "ott",
          mime: "application/vnd.oasis.opendocument.text-template"
        };
      case "application/vnd.oasis.opendocument.spreadsheet":
        return {
          ext: "ods",
          mime: "application/vnd.oasis.opendocument.spreadsheet"
        };
      case "application/vnd.oasis.opendocument.spreadsheet-template":
        return {
          ext: "ots",
          mime: "application/vnd.oasis.opendocument.spreadsheet-template"
        };
      case "application/vnd.oasis.opendocument.presentation":
        return {
          ext: "odp",
          mime: "application/vnd.oasis.opendocument.presentation"
        };
      case "application/vnd.oasis.opendocument.presentation-template":
        return {
          ext: "otp",
          mime: "application/vnd.oasis.opendocument.presentation-template"
        };
      case "application/vnd.oasis.opendocument.graphics":
        return {
          ext: "odg",
          mime: "application/vnd.oasis.opendocument.graphics"
        };
      case "application/vnd.oasis.opendocument.graphics-template":
        return {
          ext: "otg",
          mime: "application/vnd.oasis.opendocument.graphics-template"
        };
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return {
          ext: "xlsx",
          mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        };
      case "application/vnd.ms-excel.sheet.macroEnabled":
        return {
          ext: "xlsm",
          mime: "application/vnd.ms-excel.sheet.macroEnabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
        return {
          ext: "xltx",
          mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
        };
      case "application/vnd.ms-excel.template.macroEnabled":
        return {
          ext: "xltm",
          mime: "application/vnd.ms-excel.template.macroenabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return {
          ext: "docx",
          mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        };
      case "application/vnd.ms-word.document.macroEnabled":
        return {
          ext: "docm",
          mime: "application/vnd.ms-word.document.macroEnabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
        return {
          ext: "dotx",
          mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
        };
      case "application/vnd.ms-word.template.macroEnabledTemplate":
        return {
          ext: "dotm",
          mime: "application/vnd.ms-word.template.macroEnabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.presentationml.template":
        return {
          ext: "potx",
          mime: "application/vnd.openxmlformats-officedocument.presentationml.template"
        };
      case "application/vnd.ms-powerpoint.template.macroEnabled":
        return {
          ext: "potm",
          mime: "application/vnd.ms-powerpoint.template.macroEnabled.12"
        };
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return {
          ext: "pptx",
          mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        };
      case "application/vnd.ms-powerpoint.presentation.macroEnabled":
        return {
          ext: "pptm",
          mime: "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
        };
      case "application/vnd.ms-visio.drawing":
        return {
          ext: "vsdx",
          mime: "application/vnd.visio"
        };
      case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
        return {
          ext: "3mf",
          mime: "model/3mf"
        };
    }
  }
  function eg(e, t, i) {
    i = {
      offset: 0,
      ...i
    };
    for (let [r, n] of t.entries()) {
      if (i.mask) {
        if (n !== (i.mask[r] & e[r + i.offset])) {
          return false;
        }
      } else if (n !== e[r + i.offset]) {
        return false;
      }
    }
    return true;
  }
  async function ex(e) {
    return new ev().fromTokenizer(e);
  }
  async function ek(e, t) {
    return new ev(t).toDetectionStream(e, t);
  }
  class ev {
    async fromTokenizer(e) {
      let t = e.position;
      for (let i of this.detectors) {
        let r = await i.detect(e);
        if (r) {
          return r;
        }
        if (t !== e.position) {
          return;
        }
      }
    }
    async fromBuffer(e) {
      if (!(e instanceof Uint8Array) && !(e instanceof ArrayBuffer)) {
        throw TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof e}\``);
      }
      let t = e instanceof Uint8Array ? e : new Uint8Array(e);
      if ((t == null ? undefined : t.length) > 1) {
        return this.fromTokenizer(new w(t, this.tokenizerOptions));
      }
    }
    async fromBlob(e) {
      return this.fromStream(e.stream());
    }
    async fromStream(e) {
      let t = await function (e, t) {
        let i = function (e) {
          try {
            let t = e.getReader({
              mode: "byob"
            });
            if (t instanceof ReadableStreamDefaultReader) {
              return new x(t);
            }
            return new g(t);
          } catch (t) {
            if (t instanceof TypeError) {
              return new x(e.getReader());
            }
            throw t;
          }
        }(e);
        let r = t ?? {};
        let n = r.onClose;
        r.onClose = async () => {
          await i.close();
          if (n) {
            return n();
          }
        };
        return new v(i, r);
      }(e, this.tokenizerOptions);
      try {
        return await this.fromTokenizer(t);
      } finally {
        await t.close();
      }
    }
    async toDetectionStream(e, t) {
      let i;
      let r;
      let {
        sampleSize: n = ep
      } = t;
      let a = e.getReader({
        mode: "byob"
      });
      try {
        let {
          value: e,
          done: t
        } = await a.read(new Uint8Array(n));
        r = e;
        if (!t && e) {
          try {
            i = await this.fromBuffer(e.slice(0, n));
          } catch (e) {
            if (!(e instanceof l)) {
              throw e;
            }
            i = undefined;
          }
        }
        r = e;
      } finally {
        a.releaseLock();
      }
      let o = new TransformStream({
        async start(e) {
          e.enqueue(r);
        },
        transform(e, t) {
          t.enqueue(e);
        }
      });
      let s = e.pipeThrough(o);
      s.fileType = i;
      return s;
    }
    check(e, t) {
      return eg(this.buffer, e, t);
    }
    checkString(e, t) {
      return this.check([...e].map(e => e.charCodeAt(0)), t);
    }
    async readTiffTag(e) {
      let t = await this.tokenizer.readToken(e ? o : a);
      this.tokenizer.ignore(10);
      switch (t) {
        case 50341:
          return {
            ext: "arw",
            mime: "image/x-sony-arw"
          };
        case 50706:
          return {
            ext: "dng",
            mime: "image/x-adobe-dng"
          };
      }
    }
    async readTiffIFD(e) {
      let t = await this.tokenizer.readToken(e ? o : a);
      for (let i = 0; i < t; ++i) {
        let t = await this.readTiffTag(e);
        if (t) {
          return t;
        }
      }
    }
    async readTiffHeader(e) {
      let t = (e ? o : a).get(this.buffer, 2);
      let i = (e ? c : s).get(this.buffer, 4);
      if (t === 42) {
        if (i >= 6) {
          if (this.checkString("CR", {
            offset: 8
          })) {
            return {
              ext: "cr2",
              mime: "image/x-canon-cr2"
            };
          }
          if (i >= 8) {
            let t = (e ? o : a).get(this.buffer, 8);
            let i = (e ? o : a).get(this.buffer, 10);
            if (t === 28 && i === 254 || t === 31 && i === 11) {
              return {
                ext: "nef",
                mime: "image/x-nikon-nef"
              };
            }
          }
        }
        await this.tokenizer.ignore(i);
        let t = await this.readTiffIFD(e);
        return t ?? {
          ext: "tif",
          mime: "image/tiff"
        };
      }
      if (t === 43) {
        return {
          ext: "tif",
          mime: "image/tiff"
        };
      }
    }
    constructor(e) {
      ef(this, "detectConfident", async e => {
        this.buffer = new Uint8Array(ep);
        if (e.fileInfo.size === undefined) {
          e.fileInfo.size = Number.MAX_SAFE_INTEGER;
        }
        this.tokenizer = e;
        await e.peekBuffer(this.buffer, {
          length: 12,
          mayBeLess: true
        });
        if (this.check([66, 77])) {
          return {
            ext: "bmp",
            mime: "image/bmp"
          };
        }
        if (this.check([11, 119])) {
          return {
            ext: "ac3",
            mime: "audio/vnd.dolby.dd-raw"
          };
        }
        if (this.check([120, 1])) {
          return {
            ext: "dmg",
            mime: "application/x-apple-diskimage"
          };
        }
        if (this.check([77, 90])) {
          return {
            ext: "exe",
            mime: "application/x-msdownload"
          };
        }
        if (this.check([37, 33])) {
          await e.peekBuffer(this.buffer, {
            length: 24,
            mayBeLess: true
          });
          if (this.checkString("PS-Adobe-", {
            offset: 2
          }) && this.checkString(" EPSF-", {
            offset: 14
          })) {
            return {
              ext: "eps",
              mime: "application/eps"
            };
          } else {
            return {
              ext: "ps",
              mime: "application/postscript"
            };
          }
        }
        if (this.check([31, 160]) || this.check([31, 157])) {
          return {
            ext: "Z",
            mime: "application/x-compress"
          };
        }
        if (this.check([199, 113])) {
          return {
            ext: "cpio",
            mime: "application/x-cpio"
          };
        }
        if (this.check([96, 234])) {
          return {
            ext: "arj",
            mime: "application/x-arj"
          };
        }
        if (this.check([239, 187, 191])) {
          this.tokenizer.ignore(3);
          return this.detectConfident(e);
        }
        if (this.check([71, 73, 70])) {
          return {
            ext: "gif",
            mime: "image/gif"
          };
        }
        if (this.check([73, 73, 188])) {
          return {
            ext: "jxr",
            mime: "image/vnd.ms-photo"
          };
        }
        if (this.check([31, 139, 8])) {
          return {
            ext: "gz",
            mime: "application/gzip"
          };
        }
        if (this.check([66, 90, 104])) {
          return {
            ext: "bz2",
            mime: "application/x-bzip2"
          };
        }
        if (this.checkString("ID3")) {
          await e.ignore(6);
          let t = await e.readToken(em);
          if (e.position + t > e.fileInfo.size) {
            return {
              ext: "mp3",
              mime: "audio/mpeg"
            };
          } else {
            await e.ignore(t);
            return this.fromTokenizer(e);
          }
        }
        if (this.checkString("MP+")) {
          return {
            ext: "mpc",
            mime: "audio/x-musepack"
          };
        }
        if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], {
          offset: 1
        })) {
          return {
            ext: "swf",
            mime: "application/x-shockwave-flash"
          };
        }
        if (this.check([255, 216, 255])) {
          if (this.check([247], {
            offset: 3
          })) {
            return {
              ext: "jls",
              mime: "image/jls"
            };
          } else {
            return {
              ext: "jpg",
              mime: "image/jpeg"
            };
          }
        }
        if (this.check([79, 98, 106, 1])) {
          return {
            ext: "avro",
            mime: "application/avro"
          };
        }
        if (this.checkString("FLIF")) {
          return {
            ext: "flif",
            mime: "image/flif"
          };
        }
        if (this.checkString("8BPS")) {
          return {
            ext: "psd",
            mime: "image/vnd.adobe.photoshop"
          };
        }
        if (this.checkString("MPCK")) {
          return {
            ext: "mpc",
            mime: "audio/x-musepack"
          };
        }
        if (this.checkString("FORM")) {
          return {
            ext: "aif",
            mime: "audio/aiff"
          };
        }
        if (this.checkString("icns", {
          offset: 0
        })) {
          return {
            ext: "icns",
            mime: "image/icns"
          };
        }
        if (this.check([80, 75, 3, 4])) {
          let t;
          await new es(e).unzip(e => {
            switch (e.filename) {
              case "META-INF/mozilla.rsa":
                t = {
                  ext: "xpi",
                  mime: "application/x-xpinstall"
                };
                return {
                  stop: true
                };
              case "META-INF/MANIFEST.MF":
                t = {
                  ext: "jar",
                  mime: "application/java-archive"
                };
                return {
                  stop: true
                };
              case "mimetype":
                return {
                  async handler(e) {
                    t = ed(new TextDecoder("utf-8").decode(e).trim());
                  },
                  stop: true
                };
              case "[Content_Types].xml":
                return {
                  async handler(e) {
                    let i = new TextDecoder("utf-8").decode(e);
                    let r = i.indexOf(".main+xml\"");
                    if (r === -1) {
                      let e = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
                      if (i.includes(`ContentType="${e}"`)) {
                        t = ed(e);
                      }
                    } else {
                      let e = (i = i.slice(0, Math.max(0, r))).lastIndexOf("\"");
                      t = ed(i.slice(Math.max(0, e + 1)));
                    }
                  },
                  stop: true
                };
              default:
                if (/classes\d*\.dex/.test(e.filename)) {
                  t = {
                    ext: "apk",
                    mime: "application/vnd.android.package-archive"
                  };
                  return {
                    stop: true
                  };
                }
                return {};
            }
          });
          return t ?? {
            ext: "zip",
            mime: "application/zip"
          };
        }
        if (this.checkString("OggS")) {
          await e.ignore(28);
          let t = new Uint8Array(8);
          await e.readBuffer(t);
          if (eg(t, [79, 112, 117, 115, 72, 101, 97, 100])) {
            return {
              ext: "opus",
              mime: "audio/ogg; codecs=opus"
            };
          } else if (eg(t, [128, 116, 104, 101, 111, 114, 97])) {
            return {
              ext: "ogv",
              mime: "video/ogg"
            };
          } else if (eg(t, [1, 118, 105, 100, 101, 111, 0])) {
            return {
              ext: "ogm",
              mime: "video/ogg"
            };
          } else if (eg(t, [127, 70, 76, 65, 67])) {
            return {
              ext: "oga",
              mime: "audio/ogg"
            };
          } else if (eg(t, [83, 112, 101, 101, 120, 32, 32])) {
            return {
              ext: "spx",
              mime: "audio/ogg"
            };
          } else if (eg(t, [1, 118, 111, 114, 98, 105, 115])) {
            return {
              ext: "ogg",
              mime: "audio/ogg"
            };
          } else {
            return {
              ext: "ogx",
              mime: "application/ogg"
            };
          }
        }
        if (this.check([80, 75]) && (this.buffer[2] === 3 || this.buffer[2] === 5 || this.buffer[2] === 7) && (this.buffer[3] === 4 || this.buffer[3] === 6 || this.buffer[3] === 8)) {
          return {
            ext: "zip",
            mime: "application/zip"
          };
        }
        if (this.checkString("MThd")) {
          return {
            ext: "mid",
            mime: "audio/midi"
          };
        }
        if (this.checkString("wOFF") && (this.check([0, 1, 0, 0], {
          offset: 4
        }) || this.checkString("OTTO", {
          offset: 4
        }))) {
          return {
            ext: "woff",
            mime: "font/woff"
          };
        }
        if (this.checkString("wOF2") && (this.check([0, 1, 0, 0], {
          offset: 4
        }) || this.checkString("OTTO", {
          offset: 4
        }))) {
          return {
            ext: "woff2",
            mime: "font/woff2"
          };
        }
        if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212])) {
          return {
            ext: "pcap",
            mime: "application/vnd.tcpdump.pcap"
          };
        }
        if (this.checkString("DSD ")) {
          return {
            ext: "dsf",
            mime: "audio/x-dsf"
          };
        }
        if (this.checkString("LZIP")) {
          return {
            ext: "lz",
            mime: "application/x-lzip"
          };
        }
        if (this.checkString("fLaC")) {
          return {
            ext: "flac",
            mime: "audio/x-flac"
          };
        }
        if (this.check([66, 80, 71, 251])) {
          return {
            ext: "bpg",
            mime: "image/bpg"
          };
        }
        if (this.checkString("wvpk")) {
          return {
            ext: "wv",
            mime: "audio/wavpack"
          };
        }
        if (this.checkString("%PDF")) {
          try {
            if ((await e.ignore(1350)) === 1350) {
              var t;
              let i = new Uint8Array(Math.min(10485760, e.fileInfo.size - 1350));
              await e.readBuffer(i, {
                mayBeLess: true
              });
              t = new TextEncoder().encode("AIPrivateData");
              if (function (e, t) {
                let i = e.length;
                let r = t.length;
                if (r === 0 || r > i) {
                  return -1;
                }
                let n = i - r;
                for (let i = 0; i <= n; i++) {
                  let n = true;
                  for (let a = 0; a < r; a++) {
                    if (e[i + a] !== t[a]) {
                      n = false;
                      break;
                    }
                  }
                  if (n) {
                    return i;
                  }
                }
                return -1;
              }(i, t) !== -1) {
                return {
                  ext: "ai",
                  mime: "application/postscript"
                };
              }
            }
          } catch (e) {
            if (!(e instanceof l)) {
              throw e;
            }
          }
          return {
            ext: "pdf",
            mime: "application/pdf"
          };
        }
        if (this.check([0, 97, 115, 109])) {
          return {
            ext: "wasm",
            mime: "application/wasm"
          };
        }
        if (this.check([73, 73])) {
          let e = await this.readTiffHeader(false);
          if (e) {
            return e;
          }
        }
        if (this.check([77, 77])) {
          let e = await this.readTiffHeader(true);
          if (e) {
            return e;
          }
        }
        if (this.checkString("MAC ")) {
          return {
            ext: "ape",
            mime: "audio/ape"
          };
        }
        if (this.check([26, 69, 223, 163])) {
          async function i() {
            let t = await e.peekNumber(n);
            let i = 128;
            let r = 0;
            while ((t & i) == 0 && i !== 0) {
              ++r;
              i >>= 1;
            }
            let a = new Uint8Array(r + 1);
            await e.readBuffer(a);
            return a;
          }
          async function r() {
            let e = await i();
            let t = await i();
            t[0] ^= 128 >> t.length - 1;
            let r = Math.min(6, t.length);
            let n = new DataView(e.buffer);
            let a = new DataView(t.buffer, t.length - r, r);
            return {
              id: ec(n),
              len: ec(a)
            };
          }
          async function a(t) {
            while (t > 0) {
              let i = await r();
              if (i.id === 17026) {
                return (await e.readToken(new p(i.len))).replaceAll(/\00.*$/g, "");
              }
              await e.ignore(i.len);
              --t;
            }
          }
          let t = await r();
          switch (await a(t.len)) {
            case "webm":
              return {
                ext: "webm",
                mime: "video/webm"
              };
            case "matroska":
              return {
                ext: "mkv",
                mime: "video/x-matroska"
              };
            default:
              return;
          }
        }
        if (this.checkString("SQLi")) {
          return {
            ext: "sqlite",
            mime: "application/x-sqlite3"
          };
        }
        if (this.check([78, 69, 83, 26])) {
          return {
            ext: "nes",
            mime: "application/x-nintendo-nes-rom"
          };
        }
        if (this.checkString("Cr24")) {
          return {
            ext: "crx",
            mime: "application/x-google-chrome-extension"
          };
        }
        if (this.checkString("MSCF") || this.checkString("ISc(")) {
          return {
            ext: "cab",
            mime: "application/vnd.ms-cab-compressed"
          };
        }
        if (this.check([237, 171, 238, 219])) {
          return {
            ext: "rpm",
            mime: "application/x-rpm"
          };
        }
        if (this.check([197, 208, 211, 198])) {
          return {
            ext: "eps",
            mime: "application/eps"
          };
        }
        if (this.check([40, 181, 47, 253])) {
          return {
            ext: "zst",
            mime: "application/zstd"
          };
        }
        if (this.check([127, 69, 76, 70])) {
          return {
            ext: "elf",
            mime: "application/x-elf"
          };
        }
        if (this.check([33, 66, 68, 78])) {
          return {
            ext: "pst",
            mime: "application/vnd.ms-outlook"
          };
        }
        if (this.checkString("PAR1")) {
          return {
            ext: "parquet",
            mime: "application/x-parquet"
          };
        }
        if (this.checkString("ttcf")) {
          return {
            ext: "ttc",
            mime: "font/collection"
          };
        }
        if (this.check([207, 250, 237, 254])) {
          return {
            ext: "macho",
            mime: "application/x-mach-binary"
          };
        }
        if (this.check([4, 34, 77, 24])) {
          return {
            ext: "lz4",
            mime: "application/x-lz4"
          };
        }
        if (this.check([79, 84, 84, 79, 0])) {
          return {
            ext: "otf",
            mime: "font/otf"
          };
        }
        if (this.checkString("#!AMR")) {
          return {
            ext: "amr",
            mime: "audio/amr"
          };
        }
        if (this.checkString("{\\rtf")) {
          return {
            ext: "rtf",
            mime: "application/rtf"
          };
        }
        if (this.check([70, 76, 86, 1])) {
          return {
            ext: "flv",
            mime: "video/x-flv"
          };
        }
        if (this.checkString("IMPM")) {
          return {
            ext: "it",
            mime: "audio/x-it"
          };
        }
        if (this.checkString("-lh0-", {
          offset: 2
        }) || this.checkString("-lh1-", {
          offset: 2
        }) || this.checkString("-lh2-", {
          offset: 2
        }) || this.checkString("-lh3-", {
          offset: 2
        }) || this.checkString("-lh4-", {
          offset: 2
        }) || this.checkString("-lh5-", {
          offset: 2
        }) || this.checkString("-lh6-", {
          offset: 2
        }) || this.checkString("-lh7-", {
          offset: 2
        }) || this.checkString("-lzs-", {
          offset: 2
        }) || this.checkString("-lz4-", {
          offset: 2
        }) || this.checkString("-lz5-", {
          offset: 2
        }) || this.checkString("-lhd-", {
          offset: 2
        })) {
          return {
            ext: "lzh",
            mime: "application/x-lzh-compressed"
          };
        }
        if (this.check([0, 0, 1, 186])) {
          if (this.check([33], {
            offset: 4,
            mask: [241]
          })) {
            return {
              ext: "mpg",
              mime: "video/MP1S"
            };
          }
          if (this.check([68], {
            offset: 4,
            mask: [196]
          })) {
            return {
              ext: "mpg",
              mime: "video/MP2P"
            };
          }
        }
        if (this.checkString("ITSF")) {
          return {
            ext: "chm",
            mime: "application/vnd.ms-htmlhelp"
          };
        }
        if (this.check([202, 254, 186, 190])) {
          return {
            ext: "class",
            mime: "application/java-vm"
          };
        }
        if (this.checkString(".RMF")) {
          return {
            ext: "rm",
            mime: "application/vnd.rn-realmedia"
          };
        }
        if (this.checkString("DRACO")) {
          return {
            ext: "drc",
            mime: "application/vnd.google.draco"
          };
        }
        if (this.check([253, 55, 122, 88, 90, 0])) {
          return {
            ext: "xz",
            mime: "application/x-xz"
          };
        }
        if (this.checkString("<?xml ")) {
          return {
            ext: "xml",
            mime: "application/xml"
          };
        }
        if (this.check([55, 122, 188, 175, 39, 28])) {
          return {
            ext: "7z",
            mime: "application/x-7z-compressed"
          };
        }
        if (this.check([82, 97, 114, 33, 26, 7]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) {
          return {
            ext: "rar",
            mime: "application/x-rar-compressed"
          };
        }
        if (this.checkString("solid ")) {
          return {
            ext: "stl",
            mime: "model/stl"
          };
        }
        if (this.checkString("AC")) {
          let e = new p(4, "latin1").get(this.buffer, 2);
          if (e.match("^d*") && e >= 1000 && e <= 1050) {
            return {
              ext: "dwg",
              mime: "image/vnd.dwg"
            };
          }
        }
        if (this.checkString("070707")) {
          return {
            ext: "cpio",
            mime: "application/x-cpio"
          };
        }
        if (this.checkString("BLENDER")) {
          return {
            ext: "blend",
            mime: "application/x-blender"
          };
        }
        if (this.checkString("!<arch>")) {
          await e.ignore(8);
          if ((await e.readToken(new p(13, "ascii"))) === "debian-binary") {
            return {
              ext: "deb",
              mime: "application/x-deb"
            };
          } else {
            return {
              ext: "ar",
              mime: "application/x-unix-archive"
            };
          }
        }
        if (this.checkString("WEBVTT") && ["\n", "\r", "\t", " ", "\0"].some(e => this.checkString(e, {
          offset: 6
        }))) {
          return {
            ext: "vtt",
            mime: "text/vtt"
          };
        }
        if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
          async function o() {
            return {
              length: await e.readToken(m),
              type: await e.readToken(new p(4, "latin1"))
            };
          }
          await e.ignore(8);
          do {
            let t = await o();
            if (t.length < 0) {
              return;
            }
            switch (t.type) {
              case "IDAT":
                return {
                  ext: "png",
                  mime: "image/png"
                };
              case "acTL":
                return {
                  ext: "apng",
                  mime: "image/apng"
                };
              default:
                await e.ignore(t.length + 4);
            }
          } while (e.position + 8 < e.fileInfo.size);
          return {
            ext: "png",
            mime: "image/png"
          };
        }
        if (this.check([65, 82, 82, 79, 87, 49, 0, 0])) {
          return {
            ext: "arrow",
            mime: "application/x-apache-arrow"
          };
        }
        if (this.check([103, 108, 84, 70, 2, 0, 0, 0])) {
          return {
            ext: "glb",
            mime: "model/gltf-binary"
          };
        }
        if (this.check([102, 114, 101, 101], {
          offset: 4
        }) || this.check([109, 100, 97, 116], {
          offset: 4
        }) || this.check([109, 111, 111, 118], {
          offset: 4
        }) || this.check([119, 105, 100, 101], {
          offset: 4
        })) {
          return {
            ext: "mov",
            mime: "video/quicktime"
          };
        }
        if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24])) {
          return {
            ext: "orf",
            mime: "image/x-olympus-orf"
          };
        }
        if (this.checkString("gimp xcf ")) {
          return {
            ext: "xcf",
            mime: "image/x-xcf"
          };
        }
        if (this.checkString("ftyp", {
          offset: 4
        }) && (this.buffer[8] & 96) != 0) {
          let e = new p(4, "latin1").get(this.buffer, 8).replace("\0", " ").trim();
          switch (e) {
            case "avif":
            case "avis":
              return {
                ext: "avif",
                mime: "image/avif"
              };
            case "mif1":
              return {
                ext: "heic",
                mime: "image/heif"
              };
            case "msf1":
              return {
                ext: "heic",
                mime: "image/heif-sequence"
              };
            case "heic":
            case "heix":
              return {
                ext: "heic",
                mime: "image/heic"
              };
            case "hevc":
            case "hevx":
              return {
                ext: "heic",
                mime: "image/heic-sequence"
              };
            case "qt":
              return {
                ext: "mov",
                mime: "video/quicktime"
              };
            case "M4V":
            case "M4VH":
            case "M4VP":
              return {
                ext: "m4v",
                mime: "video/x-m4v"
              };
            case "M4P":
              return {
                ext: "m4p",
                mime: "video/mp4"
              };
            case "M4B":
              return {
                ext: "m4b",
                mime: "audio/mp4"
              };
            case "M4A":
              return {
                ext: "m4a",
                mime: "audio/x-m4a"
              };
            case "F4V":
              return {
                ext: "f4v",
                mime: "video/mp4"
              };
            case "F4P":
              return {
                ext: "f4p",
                mime: "video/mp4"
              };
            case "F4A":
              return {
                ext: "f4a",
                mime: "audio/mp4"
              };
            case "F4B":
              return {
                ext: "f4b",
                mime: "audio/mp4"
              };
            case "crx":
              return {
                ext: "cr3",
                mime: "image/x-canon-cr3"
              };
            default:
              if (e.startsWith("3g")) {
                if (e.startsWith("3g2")) {
                  return {
                    ext: "3g2",
                    mime: "video/3gpp2"
                  };
                }
                return {
                  ext: "3gp",
                  mime: "video/3gpp"
                };
              }
              return {
                ext: "mp4",
                mime: "video/mp4"
              };
          }
        }
        if (this.check([82, 73, 70, 70])) {
          if (this.checkString("WEBP", {
            offset: 8
          })) {
            return {
              ext: "webp",
              mime: "image/webp"
            };
          }
          if (this.check([65, 86, 73], {
            offset: 8
          })) {
            return {
              ext: "avi",
              mime: "video/vnd.avi"
            };
          }
          if (this.check([87, 65, 86, 69], {
            offset: 8
          })) {
            return {
              ext: "wav",
              mime: "audio/wav"
            };
          }
          if (this.check([81, 76, 67, 77], {
            offset: 8
          })) {
            return {
              ext: "qcp",
              mime: "audio/qcelp"
            };
          }
        }
        if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) {
          return {
            ext: "rw2",
            mime: "image/x-panasonic-rw2"
          };
        }
        if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
          async function s() {
            let t = new Uint8Array(16);
            await e.readBuffer(t);
            return {
              id: t,
              size: Number(await e.readToken(f))
            };
          }
          for (await e.ignore(30); e.position + 24 < e.fileInfo.size;) {
            let t = await s();
            let i = t.size - 24;
            if (eg(t.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
              let t = new Uint8Array(16);
              i -= await e.readBuffer(t);
              if (eg(t, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
                return {
                  ext: "asf",
                  mime: "audio/x-ms-asf"
                };
              }
              if (eg(t, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
                return {
                  ext: "asf",
                  mime: "video/x-ms-asf"
                };
              }
              break;
            }
            await e.ignore(i);
          }
          return {
            ext: "asf",
            mime: "application/vnd.ms-asf"
          };
        }
        if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) {
          return {
            ext: "ktx",
            mime: "image/ktx"
          };
        }
        if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], {
          offset: 4
        })) {
          return {
            ext: "mie",
            mime: "application/x-mie"
          };
        }
        if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], {
          offset: 2
        })) {
          return {
            ext: "shp",
            mime: "application/x-esri-shape"
          };
        }
        if (this.check([255, 79, 255, 81])) {
          return {
            ext: "j2c",
            mime: "image/j2c"
          };
        }
        if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
          await e.ignore(20);
          switch (await e.readToken(new p(4, "ascii"))) {
            case "jp2 ":
              return {
                ext: "jp2",
                mime: "image/jp2"
              };
            case "jpx ":
              return {
                ext: "jpx",
                mime: "image/jpx"
              };
            case "jpm ":
              return {
                ext: "jpm",
                mime: "image/jpm"
              };
            case "mjp2":
              return {
                ext: "mj2",
                mime: "image/mj2"
              };
            default:
              return;
          }
        }
        if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) {
          return {
            ext: "jxl",
            mime: "image/jxl"
          };
        }
        if (this.check([254, 255])) {
          if (this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], {
            offset: 2
          })) {
            return {
              ext: "xml",
              mime: "application/xml"
            };
          } else {
            return undefined;
          }
        }
        if (this.check([208, 207, 17, 224, 161, 177, 26, 225])) {
          return {
            ext: "cfb",
            mime: "application/x-cfb"
          };
        }
        await e.peekBuffer(this.buffer, {
          length: Math.min(256, e.fileInfo.size),
          mayBeLess: true
        });
        if (this.check([97, 99, 115, 112], {
          offset: 36
        })) {
          return {
            ext: "icc",
            mime: "application/vnd.iccprofile"
          };
        }
        if (this.checkString("**ACE", {
          offset: 7
        }) && this.checkString("**", {
          offset: 12
        })) {
          return {
            ext: "ace",
            mime: "application/x-ace-compressed"
          };
        }
        if (this.checkString("BEGIN:")) {
          if (this.checkString("VCARD", {
            offset: 6
          })) {
            return {
              ext: "vcf",
              mime: "text/vcard"
            };
          }
          if (this.checkString("VCALENDAR", {
            offset: 6
          })) {
            return {
              ext: "ics",
              mime: "text/calendar"
            };
          }
        }
        if (this.checkString("FUJIFILMCCD-RAW")) {
          return {
            ext: "raf",
            mime: "image/x-fujifilm-raf"
          };
        }
        if (this.checkString("Extended Module:")) {
          return {
            ext: "xm",
            mime: "audio/x-xm"
          };
        }
        if (this.checkString("Creative Voice File")) {
          return {
            ext: "voc",
            mime: "audio/x-voc"
          };
        }
        if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
          let e = new DataView(this.buffer.buffer).getUint32(12, true);
          if (e > 12 && this.buffer.length >= e + 16) {
            try {
              let t = new TextDecoder().decode(this.buffer.slice(16, e + 16));
              if (JSON.parse(t).files) {
                return {
                  ext: "asar",
                  mime: "application/x-asar"
                };
              }
            } catch {}
          }
        }
        if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) {
          return {
            ext: "mxf",
            mime: "application/mxf"
          };
        } else if (this.checkString("SCRM", {
          offset: 44
        })) {
          return {
            ext: "s3m",
            mime: "audio/x-s3m"
          };
        } else if (this.check([71]) && this.check([71], {
          offset: 188
        }) || this.check([71], {
          offset: 4
        }) && this.check([71], {
          offset: 196
        })) {
          return {
            ext: "mts",
            mime: "video/mp2t"
          };
        } else if (this.check([66, 79, 79, 75, 77, 79, 66, 73], {
          offset: 60
        })) {
          return {
            ext: "mobi",
            mime: "application/x-mobipocket-ebook"
          };
        } else if (this.check([68, 73, 67, 77], {
          offset: 128
        })) {
          return {
            ext: "dcm",
            mime: "application/dicom"
          };
        } else if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) {
          return {
            ext: "lnk",
            mime: "application/x.ms.shortcut"
          };
        } else if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) {
          return {
            ext: "alias",
            mime: "application/x.apple.alias"
          };
        } else if (this.checkString("Kaydara FBX Binary  \0")) {
          return {
            ext: "fbx",
            mime: "application/x.autodesk.fbx"
          };
        } else if (this.check([76, 80], {
          offset: 34
        }) && (this.check([0, 0, 1], {
          offset: 8
        }) || this.check([1, 0, 2], {
          offset: 8
        }) || this.check([2, 0, 2], {
          offset: 8
        }))) {
          return {
            ext: "eot",
            mime: "application/vnd.ms-fontobject"
          };
        } else if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) {
          return {
            ext: "indd",
            mime: "application/x-indesign"
          };
        } else {
          await e.peekBuffer(this.buffer, {
            length: Math.min(512, e.fileInfo.size),
            mayBeLess: true
          });
          if (function (e, t = 0) {
            let i = Number.parseInt(new p(6).get(e, 148).replace(/\0.*$/, "").trim(), 8);
            if (Number.isNaN(i)) {
              return false;
            }
            let r = 256;
            for (let i = t; i < t + 148; i++) {
              r += e[i];
            }
            for (let i = t + 156; i < t + 512; i++) {
              r += e[i];
            }
            return i === r;
          }(this.buffer)) {
            return {
              ext: "tar",
              mime: "application/x-tar"
            };
          } else if (this.check([255, 254])) {
            if (this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], {
              offset: 2
            })) {
              return {
                ext: "xml",
                mime: "application/xml"
              };
            } else if (this.check([255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0], {
              offset: 2
            })) {
              return {
                ext: "skp",
                mime: "application/vnd.sketchup.skp"
              };
            } else {
              return undefined;
            }
          } else if (this.checkString("-----BEGIN PGP MESSAGE-----")) {
            return {
              ext: "pgp",
              mime: "application/pgp-encrypted"
            };
          } else {
            return undefined;
          }
        }
      });
      ef(this, "detectImprecise", async e => {
        this.buffer = new Uint8Array(ep);
        await e.peekBuffer(this.buffer, {
          length: Math.min(8, e.fileInfo.size),
          mayBeLess: true
        });
        if (this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179])) {
          return {
            ext: "mpg",
            mime: "video/mpeg"
          };
        }
        if (this.check([0, 1, 0, 0, 0])) {
          return {
            ext: "ttf",
            mime: "font/ttf"
          };
        }
        if (this.check([0, 0, 1, 0])) {
          return {
            ext: "ico",
            mime: "image/x-icon"
          };
        }
        if (this.check([0, 0, 2, 0])) {
          return {
            ext: "cur",
            mime: "image/x-icon"
          };
        }
        if (this.buffer.length >= 2 && this.check([255, 224], {
          offset: 0,
          mask: [255, 224]
        })) {
          if (this.check([16], {
            offset: 1,
            mask: [22]
          })) {
            this.check([8], {
              offset: 1,
              mask: [8]
            });
            return {
              ext: "aac",
              mime: "audio/aac"
            };
          }
          if (this.check([2], {
            offset: 1,
            mask: [6]
          })) {
            return {
              ext: "mp3",
              mime: "audio/mpeg"
            };
          }
          if (this.check([4], {
            offset: 1,
            mask: [6]
          })) {
            return {
              ext: "mp2",
              mime: "audio/mpeg"
            };
          }
          if (this.check([6], {
            offset: 1,
            mask: [6]
          })) {
            return {
              ext: "mp1",
              mime: "audio/mpeg"
            };
          }
        }
      });
      this.detectors = [...((e == null ? undefined : e.customDetectors) ?? []), {
        id: "core",
        detect: this.detectConfident
      }, {
        id: "core.imprecise",
        detect: this.detectImprecise
      }];
      this.tokenizerOptions = {
        abortSignal: e == null ? undefined : e.signal
      };
    }
  }
  let ew = new Set(["jpg", "png", "apng", "gif", "webp", "flif", "xcf", "cr2", "cr3", "orf", "arw", "dng", "nef", "rw2", "raf", "tif", "bmp", "icns", "jxr", "psd", "indd", "zip", "tar", "rar", "gz", "bz2", "7z", "dmg", "mp4", "mid", "mkv", "webm", "mov", "avi", "mpg", "mp2", "mp3", "m4a", "oga", "ogg", "ogv", "opus", "flac", "wav", "spx", "amr", "pdf", "epub", "elf", "macho", "exe", "swf", "rtf", "wasm", "woff", "woff2", "eot", "ttf", "otf", "ttc", "ico", "flv", "ps", "xz", "sqlite", "nes", "crx", "xpi", "cab", "deb", "ar", "rpm", "Z", "lz", "cfb", "mxf", "mts", "blend", "bpg", "docx", "pptx", "xlsx", "3gp", "3g2", "j2c", "jp2", "jpm", "jpx", "mj2", "aif", "qcp", "odt", "ods", "odp", "xml", "mobi", "heic", "cur", "ktx", "ape", "wv", "dcm", "ics", "glb", "pcap", "dsf", "lnk", "alias", "voc", "ac3", "m4v", "m4p", "m4b", "f4v", "f4p", "f4b", "f4a", "mie", "asf", "ogm", "ogx", "mpc", "arrow", "shp", "aac", "mp1", "it", "s3m", "xm", "ai", "skp", "avif", "eps", "lzh", "pgp", "asar", "stl", "chm", "3mf", "zst", "jxl", "vcf", "jls", "pst", "dwg", "parquet", "class", "arj", "cpio", "ace", "avro", "icc", "fbx", "vsdx", "vtt", "apk", "drc", "lz4", "potx", "xltx", "dotx", "xltm", "ott", "ots", "otp", "odg", "otg", "xlsm", "docm", "dotm", "potm", "pptm", "jar", "rm"]);
  let eb = new Set(["image/jpeg", "image/png", "image/gif", "image/webp", "image/flif", "image/x-xcf", "image/x-canon-cr2", "image/x-canon-cr3", "image/tiff", "image/bmp", "image/vnd.ms-photo", "image/vnd.adobe.photoshop", "application/x-indesign", "application/epub+zip", "application/x-xpinstall", "application/vnd.oasis.opendocument.text", "application/vnd.oasis.opendocument.spreadsheet", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/zip", "application/x-tar", "application/x-rar-compressed", "application/gzip", "application/x-bzip2", "application/x-7z-compressed", "application/x-apple-diskimage", "application/x-apache-arrow", "video/mp4", "audio/midi", "video/x-matroska", "video/webm", "video/quicktime", "video/vnd.avi", "audio/wav", "audio/qcelp", "audio/x-ms-asf", "video/x-ms-asf", "application/vnd.ms-asf", "video/mpeg", "video/3gpp", "audio/mpeg", "audio/mp4", "video/ogg", "audio/ogg", "audio/ogg; codecs=opus", "application/ogg", "audio/x-flac", "audio/ape", "audio/wavpack", "audio/amr", "application/pdf", "application/x-elf", "application/x-mach-binary", "application/x-msdownload", "application/x-shockwave-flash", "application/rtf", "application/wasm", "font/woff", "font/woff2", "application/vnd.ms-fontobject", "font/ttf", "font/otf", "font/collection", "image/x-icon", "video/x-flv", "application/postscript", "application/eps", "application/x-xz", "application/x-sqlite3", "application/x-nintendo-nes-rom", "application/x-google-chrome-extension", "application/vnd.ms-cab-compressed", "application/x-deb", "application/x-unix-archive", "application/x-rpm", "application/x-compress", "application/x-lzip", "application/x-cfb", "application/x-mie", "application/mxf", "video/mp2t", "application/x-blender", "image/bpg", "image/j2c", "image/jp2", "image/jpx", "image/jpm", "image/mj2", "audio/aiff", "application/xml", "application/x-mobipocket-ebook", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/icns", "image/ktx", "application/dicom", "audio/x-musepack", "text/calendar", "text/vcard", "text/vtt", "model/gltf-binary", "application/vnd.tcpdump.pcap", "audio/x-dsf", "application/x.ms.shortcut", "application/x.apple.alias", "audio/x-voc", "audio/vnd.dolby.dd-raw", "audio/x-m4a", "image/apng", "image/x-olympus-orf", "image/x-sony-arw", "image/x-adobe-dng", "image/x-nikon-nef", "image/x-panasonic-rw2", "image/x-fujifilm-raf", "video/x-m4v", "video/3gpp2", "application/x-esri-shape", "audio/aac", "audio/x-it", "audio/x-s3m", "audio/x-xm", "video/MP1S", "video/MP2P", "application/vnd.sketchup.skp", "image/avif", "application/x-lzh-compressed", "application/pgp-encrypted", "application/x-asar", "model/stl", "application/vnd.ms-htmlhelp", "model/3mf", "image/jxl", "application/zstd", "image/jls", "application/vnd.ms-outlook", "image/vnd.dwg", "application/x-parquet", "application/java-vm", "application/x-arj", "application/x-cpio", "application/x-ace-compressed", "application/avro", "application/vnd.iccprofile", "application/x.autodesk.fbx", "application/vnd.visio", "application/vnd.android.package-archive", "application/vnd.google.draco", "application/x-lz4", "application/vnd.openxmlformats-officedocument.presentationml.template", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-excel.template.macroenabled.12", "application/vnd.oasis.opendocument.text-template", "application/vnd.oasis.opendocument.spreadsheet-template", "application/vnd.oasis.opendocument.presentation-template", "application/vnd.oasis.opendocument.graphics", "application/vnd.oasis.opendocument.graphics-template", "application/vnd.ms-excel.sheet.macroEnabled.12", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.template.macroEnabled.12", "application/vnd.ms-powerpoint.template.macroEnabled.12", "application/vnd.ms-powerpoint.presentation.macroEnabled.12", "application/java-archive", "application/vnd.rn-realmedia"]);
  require.r(exports);
  require.d(exports, {
    fileTypeFromTokenizer: function () {
      return ex;
    },
    reasonableDetectionSizeInBytes: function () {
      return ep;
    },
    fileTypeFromBuffer: function () {
      return eu;
    },
    supportedExtensions: function () {
      return ew;
    },
    fileTypeFromBlob: function () {
      return eh;
    },
    fileTypeStream: function () {
      return ek;
    },
    supportedMimeTypes: function () {
      return eb;
    },
    fileTypeFromStream: function () {
      return el;
    },
    FileTypeParser: function () {
      return ev;
    }
  });
}