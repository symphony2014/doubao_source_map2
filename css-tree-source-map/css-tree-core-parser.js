// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_p' to 'walk'
// - Renamed export 'R_' to 'generate'
// - Renamed export 'aV' to 'lexer'
// - Renamed export 'Qc' to 'parse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 364414
         */
module.exports = function (module, exports, require) {
  var r;
  var i = {};
  var o = {};
  var a = {};
  var s = {};
  var l = {};
  var c = {};
  var u = {};
  var h = {};
  var p = {};
  var d = {};
  var m = {};
  var f = {};
  var g = {};
  var b = {};
  var y = {};
  var k = {};
  var x = {};
  var v = {};
  var w = {};
  var S = {};
  var C = {};
  var z = {};
  var A = {};
  var L = {};
  var T = {};
  var O = {};
  var D = {};
  var E = {};
  var P = {};
  var I = {};
  var N = {};
  var j = {};
  var F = {};
  var R = {};
  var _ = {};
  var M = {};
  var B = {};
  var W = {};
  var q = {};
  var U = {};
  var V = {};
  var K = {};
  var G = {};
  var H = {};
  var $ = {};
  var Q = {};
  var X = {};
  var Y = {};
  var Z = {};
  var J = {};
  var ee = {};
  var et = {};
  var en = {};
  var er = {};
  var ei = {};
  function eo(e) {
    return e >= 48 && e <= 57;
  }
  function ea(e) {
    return eo(e) || e >= 65 && e <= 70 || e >= 97 && e <= 102;
  }
  function es(e) {
    return e >= 65 && e <= 90;
  }
  function el(e) {
    return es(e) || e >= 97 && e <= 122 || e >= 128 || e === 95;
  }
  function ec(e) {
    return el(e) || eo(e) || e === 45;
  }
  function eu(e) {
    return e === 10 || e === 13 || e === 12;
  }
  function eh(e) {
    return eu(e) || e === 32 || e === 9;
  }
  function ep(e, t) {
    return e === 92 && !eu(t) && t !== 0;
  }
  function ed(e, t, n) {
    if (e === 45) {
      return el(t) || t === 45 || ep(t, n);
    } else {
      return !!el(e) || e === 92 && ep(e, t);
    }
  }
  function em(e, t, n) {
    if (e === 43 || e === 45) {
      if (eo(t)) {
        return 2;
      } else if (t === 46 && eo(n)) {
        return 3;
      } else {
        return 0;
      }
    } else if (e === 46) {
      return !!eo(t) * 2;
    } else {
      return +!!eo(e);
    }
  }
  function ef(e) {
    return +(e === 65279 || e === 65534);
  }
  let eg = Array(128);
  for (let e = 0; e < eg.length; e++) {
    eg[e] = eh(e) && 130 || eo(e) && 131 || el(e) && 132 || ((r = e) >= 0 && r <= 8 || r === 11 || r >= 14 && r <= 31 || r === 127) && 133 || e || 128;
  }
  function eb(e) {
    if (e < 128) {
      return eg[e];
    } else {
      return 132;
    }
  }
  function ey(e, t) {
    if (t < e.length) {
      return e.charCodeAt(t);
    } else {
      return 0;
    }
  }
  function ek(e, t, n) {
    if (n === 13 && ey(e, t + 1) === 10) {
      return 2;
    } else {
      return 1;
    }
  }
  function ex(e, t, n) {
    let r = e.charCodeAt(t);
    if (es(r)) {
      r |= 32;
    }
    return r === n;
  }
  function ev(e, t, n, r) {
    if (n - t !== r.length || t < 0 || n > e.length) {
      return false;
    }
    for (let i = t; i < n; i++) {
      let n = r.charCodeAt(i - t);
      let o = e.charCodeAt(i);
      if (es(o)) {
        o |= 32;
      }
      if (o !== n) {
        return false;
      }
    }
    return true;
  }
  function ew(e, t) {
    for (; t < e.length && eh(e.charCodeAt(t)); t++);
    return t;
  }
  function eS(e, t) {
    for (; t < e.length && eo(e.charCodeAt(t)); t++);
    return t;
  }
  function eC(e, t) {
    if (ea(ey(e, (t += 2) - 1))) {
      for (let n = Math.min(e.length, t + 5); t < n && ea(ey(e, t)); t++);
      let n = ey(e, t);
      if (eh(n)) {
        t += ek(e, t, n);
      }
    }
    return t;
  }
  function ez(e, t) {
    for (; t < e.length; t++) {
      let n = e.charCodeAt(t);
      if (!ec(n)) {
        if (ep(n, ey(e, t + 1))) {
          t = eC(e, t) - 1;
          continue;
        }
        break;
      }
    }
    return t;
  }
  function eA(e, t) {
    let n = e.charCodeAt(t);
    if (n === 43 || n === 45) {
      n = e.charCodeAt(t += 1);
    }
    if (eo(n)) {
      t = eS(e, t + 1);
      n = e.charCodeAt(t);
    }
    if (n === 46 && eo(e.charCodeAt(t + 1))) {
      t += 2;
      t = eS(e, t);
    }
    if (ex(e, t, 101)) {
      let r = 0;
      if ((n = e.charCodeAt(t + 1)) === 45 || n === 43) {
        r = 1;
        n = e.charCodeAt(t + 2);
      }
      if (eo(n)) {
        t = eS(e, t + 1 + r + 1);
      }
    }
    return t;
  }
  function eL(e, t) {
    for (; t < e.length; t++) {
      let n = e.charCodeAt(t);
      if (n === 41) {
        t++;
        break;
      }
      if (ep(n, ey(e, t + 1))) {
        t = eC(e, t);
      }
    }
    return t;
  }
  function eT(e) {
    if (e.length === 1 && !ea(e.charCodeAt(0))) {
      return e[0];
    }
    let t = parseInt(e, 16);
    if (t === 0 || t >= 55296 && t <= 57343 || t > 1114111) {
      t = 65533;
    }
    return String.fromCodePoint(t);
  }
  var eO = ["EOF-token", "ident-token", "function-token", "at-keyword-token", "hash-token", "string-token", "bad-string-token", "url-token", "bad-url-token", "delim-token", "number-token", "percentage-token", "dimension-token", "whitespace-token", "CDO-token", "CDC-token", "colon-token", "semicolon-token", "comma-token", "[-token", "]-token", "(-token", ")-token", "{-token", "}-token", "comment-token"];
  function eD(e = null, t) {
    if (e === null || e.length < t) {
      return new Uint32Array(Math.max(t + 1024, 16384));
    } else {
      return e;
    }
  }
  function eE(e) {
    let t = e.source;
    let n = t.length;
    let r = t.length > 0 ? ef(t.charCodeAt(0)) : 0;
    let i = eD(e.lines, n);
    let o = eD(e.columns, n);
    let a = e.startLine;
    let s = e.startColumn;
    for (let e = r; e < n; e++) {
      let r = t.charCodeAt(e);
      i[e] = a;
      o[e] = s++;
      if (r === 10 || r === 13 || r === 12) {
        if (r === 13 && e + 1 < n && t.charCodeAt(e + 1) === 10) {
          i[++e] = a;
          o[e] = s;
        }
        a++;
        s = 1;
      }
    }
    i[n] = a;
    o[n] = s;
    e.lines = i;
    e.columns = o;
    e.computed = true;
  }
  class eP {
    constructor(e, t, n, r) {
      this.setSource(e, t, n, r);
      this.lines = null;
      this.columns = null;
    }
    setSource(e = "", t = 0, n = 1, r = 1) {
      this.source = e;
      this.startOffset = t;
      this.startLine = n;
      this.startColumn = r;
      this.computed = false;
    }
    getLocation(e, t) {
      if (!this.computed) {
        eE(this);
      }
      return {
        source: t,
        offset: this.startOffset + e,
        line: this.lines[e],
        column: this.columns[e]
      };
    }
    getLocationRange(e, t, n) {
      if (!this.computed) {
        eE(this);
      }
      return {
        source: n,
        start: {
          offset: this.startOffset + e,
          line: this.lines[e],
          column: this.columns[e]
        },
        end: {
          offset: this.startOffset + t,
          line: this.lines[t],
          column: this.columns[t]
        }
      };
    }
  }
  let eI = new Uint8Array(32);
  eI[2] = 22;
  eI[21] = 22;
  eI[19] = 20;
  eI[23] = 24;
  class eN {
    constructor(e, t) {
      this.setSource(e, t);
    }
    reset() {
      this.eof = false;
      this.tokenIndex = -1;
      this.tokenType = 0;
      this.tokenStart = this.firstCharOffset;
      this.tokenEnd = this.firstCharOffset;
    }
    setSource(e = "", t = () => {}) {
      let n = (e = String(e || "")).length;
      let r = eD(this.offsetAndType, e.length + 1);
      let i = eD(this.balance, e.length + 1);
      let o = 0;
      let a = -1;
      let s = 0;
      let l = e.length;
      this.offsetAndType = null;
      this.balance = null;
      i.fill(0);
      t(e, (e, t, n) => {
        let c = o++;
        r[c] = e << 24 | n;
        if (a === -1) {
          a = t;
        }
        i[c] = l;
        if (e === s) {
          let e = i[l];
          i[l] = c;
          l = e;
          s = eI[r[e] >> 24];
        } else if (eI[e] !== 0) {
          l = c;
          s = eI[e];
        }
      });
      r[o] = n | 0;
      i[o] = o;
      for (let e = 0; e < o; e++) {
        let t = i[e];
        if (t <= e) {
          let n = i[t];
          if (n !== e) {
            i[e] = n;
          }
        } else if (t > o) {
          i[e] = o;
        }
      }
      this.source = e;
      this.firstCharOffset = a === -1 ? 0 : a;
      this.tokenCount = o;
      this.offsetAndType = r;
      this.balance = i;
      this.reset();
      this.next();
    }
    lookupType(e) {
      if ((e += this.tokenIndex) < this.tokenCount) {
        return this.offsetAndType[e] >> 24;
      } else {
        return 0;
      }
    }
    lookupTypeNonSC(e) {
      for (let t = this.tokenIndex; t < this.tokenCount; t++) {
        let n = this.offsetAndType[t] >> 24;
        if (n !== 13 && n !== 25 && e-- == 0) {
          return n;
        }
      }
      return 0;
    }
    lookupOffset(e) {
      if ((e += this.tokenIndex) < this.tokenCount) {
        return this.offsetAndType[e - 1] & 16777215;
      } else {
        return this.source.length;
      }
    }
    lookupOffsetNonSC(e) {
      for (let t = this.tokenIndex; t < this.tokenCount; t++) {
        let n = this.offsetAndType[t] >> 24;
        if (n !== 13 && n !== 25 && e-- == 0) {
          return t - this.tokenIndex;
        }
      }
      return 0;
    }
    lookupValue(e, t) {
      return (e += this.tokenIndex) < this.tokenCount && ev(this.source, this.offsetAndType[e - 1] & 16777215, this.offsetAndType[e] & 16777215, t);
    }
    getTokenStart(e) {
      if (e === this.tokenIndex) {
        return this.tokenStart;
      } else if (e > 0) {
        if (e < this.tokenCount) {
          return this.offsetAndType[e - 1] & 16777215;
        } else {
          return this.offsetAndType[this.tokenCount] & 16777215;
        }
      } else {
        return this.firstCharOffset;
      }
    }
    substrToCursor(e) {
      return this.source.substring(e, this.tokenStart);
    }
    isBalanceEdge(e) {
      return this.balance[this.tokenIndex] < e;
    }
    isDelim(e, t) {
      if (t) {
        return this.lookupType(t) === 9 && this.source.charCodeAt(this.lookupOffset(t)) === e;
      } else {
        return this.tokenType === 9 && this.source.charCodeAt(this.tokenStart) === e;
      }
    }
    skip(e) {
      let t = this.tokenIndex + e;
      if (t < this.tokenCount) {
        this.tokenIndex = t;
        this.tokenStart = this.offsetAndType[t - 1] & 16777215;
        t = this.offsetAndType[t];
        this.tokenType = t >> 24;
        this.tokenEnd = t & 16777215;
      } else {
        this.tokenIndex = this.tokenCount;
        this.next();
      }
    }
    next() {
      let e = this.tokenIndex + 1;
      if (e < this.tokenCount) {
        this.tokenIndex = e;
        this.tokenStart = this.tokenEnd;
        e = this.offsetAndType[e];
        this.tokenType = e >> 24;
        this.tokenEnd = e & 16777215;
      } else {
        this.eof = true;
        this.tokenIndex = this.tokenCount;
        this.tokenType = 0;
        this.tokenStart = this.tokenEnd = this.source.length;
      }
    }
    skipSC() {
      while (this.tokenType === 13 || this.tokenType === 25) {
        this.next();
      }
    }
    skipUntilBalanced(e, t) {
      let n = e;
      let r = 0;
      let i = 0;
      e: for (; n < this.tokenCount && !((r = this.balance[n]) < e); n++) {
        i = n > 0 ? this.offsetAndType[n - 1] & 16777215 : this.firstCharOffset;
        switch (t(this.source.charCodeAt(i))) {
          case 1:
            break e;
          case 2:
            n++;
            break e;
          default:
            if (eI[this.offsetAndType[n] >> 24] !== 0) {
              n = r;
            }
        }
      }
      this.skip(n - this.tokenIndex);
    }
    forEachToken(e) {
      for (let t = 0, n = this.firstCharOffset; t < this.tokenCount; t++) {
        let r = n;
        let i = this.offsetAndType[t];
        let o = i & 16777215;
        let a = i >> 24;
        n = o;
        e(a, r, o, t);
      }
    }
    dump() {
      let e = Array(this.tokenCount);
      this.forEachToken((t, n, r, i) => {
        e[i] = {
          idx: i,
          type: eO[t],
          chunk: this.source.substring(n, r),
          balance: this.balance[i]
        };
      });
      return e;
    }
  }
  function ej(e, t) {
    let n;
    function r(t) {
      if (t < a) {
        return e.charCodeAt(t);
      } else {
        return 0;
      }
    }
    function i() {
      if (ed(r(l = eA(e, l)), r(l + 1), r(l + 2))) {
        n = 12;
        l = ez(e, l);
        return;
      }
      if (r(l) === 37) {
        n = 11;
        l++;
        return;
      }
      n = 10;
    }
    function o() {
      let t = l;
      l = ez(e, l);
      if (ev(e, t, l, "url") && r(l) === 40) {
        if (r(l = ew(e, l + 1)) === 34 || r(l) === 39) {
          n = 2;
          l = t + 4;
          return;
        }
        (function () {
          n = 7;
          l = ew(e, l);
          for (; l < e.length; l++) {
            let t = e.charCodeAt(l);
            switch (eb(t)) {
              case 41:
                l++;
                return;
              case 130:
                if (r(l = ew(e, l)) === 41 || l >= e.length) {
                  if (l < e.length) {
                    l++;
                  }
                  return;
                }
                l = eL(e, l);
                n = 8;
                return;
              case 34:
              case 39:
              case 40:
              case 133:
                l = eL(e, l);
                n = 8;
                return;
              case 92:
                if (ep(t, r(l + 1))) {
                  l = eC(e, l) - 1;
                  break;
                }
                l = eL(e, l);
                n = 8;
                return;
            }
          }
        })();
        return;
      }
      if (r(l) === 40) {
        n = 2;
        l++;
        return;
      }
      n = 1;
    }
    let a = (e = String(e || "")).length;
    let s = ef(r(0));
    let l = s;
    while (l < a) {
      let a = e.charCodeAt(l);
      switch (eb(a)) {
        case 130:
          n = 13;
          l = ew(e, l + 1);
          break;
        case 34:
        case 39:
          (function (t) {
            t ||= r(l++);
            n = 5;
            for (; l < e.length; l++) {
              let i = e.charCodeAt(l);
              switch (eb(i)) {
                case t:
                  l++;
                  return;
                case 130:
                  if (eu(i)) {
                    l += ek(e, l, i);
                    n = 6;
                    return;
                  }
                  break;
                case 92:
                  if (l === e.length - 1) {
                    break;
                  }
                  let o = r(l + 1);
                  if (eu(o)) {
                    l += ek(e, l + 1, o);
                  } else if (ep(i, o)) {
                    l = eC(e, l) - 1;
                  }
              }
            }
          })();
          break;
        case 35:
          if (ec(r(l + 1)) || ep(r(l + 1), r(l + 2))) {
            n = 4;
            l = ez(e, l + 1);
          } else {
            n = 9;
            l++;
          }
          break;
        case 40:
          n = 21;
          l++;
          break;
        case 41:
          n = 22;
          l++;
          break;
        case 43:
        case 46:
          if (em(a, r(l + 1), r(l + 2))) {
            i();
          } else {
            n = 9;
            l++;
          }
          break;
        case 44:
          n = 18;
          l++;
          break;
        case 45:
          if (em(a, r(l + 1), r(l + 2))) {
            i();
          } else if (r(l + 1) === 45 && r(l + 2) === 62) {
            n = 15;
            l += 3;
          } else if (ed(a, r(l + 1), r(l + 2))) {
            o();
          } else {
            n = 9;
            l++;
          }
          break;
        case 47:
          if (r(l + 1) === 42) {
            n = 25;
            l = (l = e.indexOf("*/", l + 2)) === -1 ? e.length : l + 2;
          } else {
            n = 9;
            l++;
          }
          break;
        case 58:
          n = 16;
          l++;
          break;
        case 59:
          n = 17;
          l++;
          break;
        case 60:
          if (r(l + 1) === 33 && r(l + 2) === 45 && r(l + 3) === 45) {
            n = 14;
            l += 4;
          } else {
            n = 9;
            l++;
          }
          break;
        case 64:
          if (ed(r(l + 1), r(l + 2), r(l + 3))) {
            n = 3;
            l = ez(e, l + 1);
          } else {
            n = 9;
            l++;
          }
          break;
        case 91:
          n = 19;
          l++;
          break;
        case 92:
          if (ep(a, r(l + 1))) {
            o();
          } else {
            n = 9;
            l++;
          }
          break;
        case 93:
          n = 20;
          l++;
          break;
        case 123:
          n = 23;
          l++;
          break;
        case 125:
          n = 24;
          l++;
          break;
        case 131:
          i();
          break;
        case 132:
          o();
          break;
        default:
          n = 9;
          l++;
      }
      t(n, s, s = l);
    }
  }
  let eF = null;
  class eR {
    static createItem(e) {
      return {
        prev: null,
        next: null,
        data: e
      };
    }
    constructor() {
      this.head = null;
      this.tail = null;
      this.cursor = null;
    }
    createItem(e) {
      return eR.createItem(e);
    }
    allocateCursor(e, t) {
      let n;
      if (eF !== null) {
        n = eF;
        eF = eF.cursor;
        n.prev = e;
        n.next = t;
        n.cursor = this.cursor;
      } else {
        n = {
          prev: e,
          next: t,
          cursor: this.cursor
        };
      }
      this.cursor = n;
      return n;
    }
    releaseCursor() {
      let {
        cursor: e
      } = this;
      this.cursor = e.cursor;
      e.prev = null;
      e.next = null;
      e.cursor = eF;
      eF = e;
    }
    updateCursors(e, t, n, r) {
      let {
        cursor: i
      } = this;
      while (i !== null) {
        if (i.prev === e) {
          i.prev = t;
        }
        if (i.next === n) {
          i.next = r;
        }
        i = i.cursor;
      }
    }
    *[Symbol.iterator]() {
      for (let e = this.head; e !== null; e = e.next) {
        yield e.data;
      }
    }
    get size() {
      let e = 0;
      for (let t = this.head; t !== null; t = t.next) {
        e++;
      }
      return e;
    }
    get isEmpty() {
      return this.head === null;
    }
    get first() {
      return this.head && this.head.data;
    }
    get last() {
      return this.tail && this.tail.data;
    }
    fromArray(e) {
      let t = null;
      this.head = null;
      for (let n of e) {
        let e = eR.createItem(n);
        if (t !== null) {
          t.next = e;
        } else {
          this.head = e;
        }
        e.prev = t;
        t = e;
      }
      this.tail = t;
      return this;
    }
    toArray() {
      return [...this];
    }
    toJSON() {
      return [...this];
    }
    forEach(e, t = this) {
      let n = this.allocateCursor(null, this.head);
      while (n.next !== null) {
        let r = n.next;
        n.next = r.next;
        e.call(t, r.data, r, this);
      }
      this.releaseCursor();
    }
    forEachRight(e, t = this) {
      let n = this.allocateCursor(this.tail, null);
      while (n.prev !== null) {
        let r = n.prev;
        n.prev = r.prev;
        e.call(t, r.data, r, this);
      }
      this.releaseCursor();
    }
    reduce(e, t, n = this) {
      let r;
      let i = this.allocateCursor(null, this.head);
      let o = t;
      while (i.next !== null) {
        r = i.next;
        i.next = r.next;
        o = e.call(n, o, r.data, r, this);
      }
      this.releaseCursor();
      return o;
    }
    reduceRight(e, t, n = this) {
      let r;
      let i = this.allocateCursor(this.tail, null);
      let o = t;
      while (i.prev !== null) {
        r = i.prev;
        i.prev = r.prev;
        o = e.call(n, o, r.data, r, this);
      }
      this.releaseCursor();
      return o;
    }
    some(e, t = this) {
      for (let n = this.head; n !== null; n = n.next) {
        if (e.call(t, n.data, n, this)) {
          return true;
        }
      }
      return false;
    }
    map(e, t = this) {
      let n = new eR();
      for (let r = this.head; r !== null; r = r.next) {
        n.appendData(e.call(t, r.data, r, this));
      }
      return n;
    }
    filter(e, t = this) {
      let n = new eR();
      for (let r = this.head; r !== null; r = r.next) {
        if (e.call(t, r.data, r, this)) {
          n.appendData(r.data);
        }
      }
      return n;
    }
    nextUntil(e, t, n = this) {
      if (e === null) {
        return;
      }
      let r = this.allocateCursor(null, e);
      while (r.next !== null) {
        let e = r.next;
        r.next = e.next;
        if (t.call(n, e.data, e, this)) {
          break;
        }
      }
      this.releaseCursor();
    }
    prevUntil(e, t, n = this) {
      if (e === null) {
        return;
      }
      let r = this.allocateCursor(e, null);
      while (r.prev !== null) {
        let e = r.prev;
        r.prev = e.prev;
        if (t.call(n, e.data, e, this)) {
          break;
        }
      }
      this.releaseCursor();
    }
    clear() {
      this.head = null;
      this.tail = null;
    }
    copy() {
      let e = new eR();
      for (let t of this) {
        e.appendData(t);
      }
      return e;
    }
    prepend(e) {
      this.updateCursors(null, e, this.head, e);
      if (this.head !== null) {
        this.head.prev = e;
        e.next = this.head;
      } else {
        this.tail = e;
      }
      this.head = e;
      return this;
    }
    prependData(e) {
      return this.prepend(eR.createItem(e));
    }
    append(e) {
      return this.insert(e);
    }
    appendData(e) {
      return this.insert(eR.createItem(e));
    }
    insert(e, t = null) {
      if (t !== null) {
        this.updateCursors(t.prev, e, t, e);
        if (t.prev === null) {
          if (this.head !== t) {
            throw Error("before doesn't belong to list");
          }
          this.head = e;
          t.prev = e;
          e.next = t;
          this.updateCursors(null, e);
        } else {
          t.prev.next = e;
          e.prev = t.prev;
          t.prev = e;
          e.next = t;
        }
      } else {
        this.updateCursors(this.tail, e, null, e);
        if (this.tail !== null) {
          this.tail.next = e;
          e.prev = this.tail;
        } else {
          this.head = e;
        }
        this.tail = e;
      }
      return this;
    }
    insertData(e, t) {
      return this.insert(eR.createItem(e), t);
    }
    remove(e) {
      this.updateCursors(e, e.prev, e, e.next);
      if (e.prev !== null) {
        e.prev.next = e.next;
      } else {
        if (this.head !== e) {
          throw Error("item doesn't belong to list");
        }
        this.head = e.next;
      }
      if (e.next !== null) {
        e.next.prev = e.prev;
      } else {
        if (this.tail !== e) {
          throw Error("item doesn't belong to list");
        }
        this.tail = e.prev;
      }
      e.prev = null;
      e.next = null;
      return e;
    }
    push(e) {
      this.insert(eR.createItem(e));
    }
    pop() {
      if (this.tail !== null) {
        return this.remove(this.tail);
      } else {
        return null;
      }
    }
    unshift(e) {
      this.prepend(eR.createItem(e));
    }
    shift() {
      if (this.head !== null) {
        return this.remove(this.head);
      } else {
        return null;
      }
    }
    prependList(e) {
      return this.insertList(e, this.head);
    }
    appendList(e) {
      return this.insertList(e);
    }
    insertList(e, t) {
      if (e.head !== null) {
        if (t != null) {
          this.updateCursors(t.prev, e.tail, t, e.head);
          if (t.prev !== null) {
            t.prev.next = e.head;
            e.head.prev = t.prev;
          } else {
            this.head = e.head;
          }
          t.prev = e.tail;
          e.tail.next = t;
        } else {
          this.updateCursors(this.tail, e.tail, null, e.head);
          if (this.tail !== null) {
            this.tail.next = e.head;
            e.head.prev = this.tail;
          } else {
            this.head = e.head;
          }
          this.tail = e.tail;
        }
        e.head = null;
        e.tail = null;
      }
      return this;
    }
    replace(e, t) {
      if ("head" in t) {
        this.insertList(t, e);
      } else {
        this.insert(t, e);
      }
      this.remove(e);
    }
  }
  function e_(e, t) {
    let n = Object.create(SyntaxError.prototype);
    let r = Error();
    return Object.assign(n, {
      name: e,
      message: t,
      get stack() {
        return (r.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
      }
    });
  }
  let eM = "    ";
  function eB({
    source: e,
    line: t,
    column: n,
    baseLine: r,
    baseColumn: i
  }, o) {
    function a(e, t) {
      return s.slice(e, t).map((t, n) => String(e + n + 1).padStart(u) + " |" + t).join("\n");
    }
    let s = ("\n".repeat(Math.max(r - 1, 0)) + " ".repeat(Math.max(i - 1, 0)) + e).split(/\r\n?|\n|\f/);
    let l = Math.max(1, t - o) - 1;
    let c = Math.min(t + o, s.length + 1);
    let u = Math.max(4, String(c).length) + 1;
    let h = 0;
    if ((n += (eM.length - 1) * (s[t - 1].substr(0, n - 1).match(/\t/g) || []).length) > 100) {
      h = n - 60 + 3;
      n = 58;
    }
    for (let e = l; e <= c; e++) {
      if (e >= 0 && e < s.length) {
        s[e] = s[e].replace(/\t/g, eM);
        s[e] = (h > 0 && s[e].length > h ? "…" : "") + s[e].substr(h, 98) + (s[e].length > h + 100 - 1 ? "…" : "");
      }
    }
    return [a(l, t), Array(n + u + 2).join("-") + "^", a(t, c)].filter(Boolean).join("\n").replace(/^(\s+\d+\s+\|\n)+/, "").replace(/\n(\s+\d+\s+\|)+$/, "");
  }
  function eW(e, t, n, r, i, o = 1, a = 1) {
    return Object.assign(e_("SyntaxError", e), {
      source: t,
      offset: n,
      line: r,
      column: i,
      sourceFragment: e => eB({
        source: t,
        line: r,
        column: i,
        baseLine: o,
        baseColumn: a
      }, isNaN(e) ? 0 : e),
      get formattedMessage() {
        return `Parse error: ${e}
${eB({
          source: t,
          line: r,
          column: i,
          baseLine: o,
          baseColumn: a
        }, 2)}`;
      }
    });
  }
  function eq(e) {
    let t = this.createList();
    let n = false;
    let r = {
      recognizer: e
    };
    while (!this.eof) {
      switch (this.tokenType) {
        case 25:
          this.next();
          continue;
        case 13:
          n = true;
          this.next();
          continue;
      }
      let i = e.getNode.call(this, r);
      if (i === undefined) {
        break;
      }
      if (n) {
        if (e.onWhiteSpace) {
          e.onWhiteSpace.call(this, i, t, r);
        }
        n = false;
      }
      t.push(i);
    }
    if (n && e.onWhiteSpace) {
      e.onWhiteSpace.call(this, null, t, r);
    }
    return t;
  }
  let eU = () => {};
  function eV(e) {
    let t = Object.create(null);
    for (let n of Object.keys(e)) {
      let r = e[n];
      let i = r.parse || r;
      if (i) {
        t[n] = i;
      }
    }
    return t;
  }
  var sourceMapGenerator = require("source-map-generator") /*id: 622928*/;
  let eG = new Set(["Atrule", "Selector", "Declaration"]);
  let eH = (e, t) => {
    if (e === 9) {
      e = t;
    }
    if (typeof e == "string") {
      let t = e.charCodeAt(0);
      if (t > 127) {
        return 32768;
      } else {
        return t << 8;
      }
    }
    return e;
  };
  let e$ = [[1, 1], [1, 2], [1, 7], [1, 8], [1, "-"], [1, 10], [1, 11], [1, 12], [1, 15], [1, 21], [3, 1], [3, 2], [3, 7], [3, 8], [3, "-"], [3, 10], [3, 11], [3, 12], [3, 15], [4, 1], [4, 2], [4, 7], [4, 8], [4, "-"], [4, 10], [4, 11], [4, 12], [4, 15], [12, 1], [12, 2], [12, 7], [12, 8], [12, "-"], [12, 10], [12, 11], [12, 12], [12, 15], ["#", 1], ["#", 2], ["#", 7], ["#", 8], ["#", "-"], ["#", 10], ["#", 11], ["#", 12], ["#", 15], ["-", 1], ["-", 2], ["-", 7], ["-", 8], ["-", "-"], ["-", 10], ["-", 11], ["-", 12], ["-", 15], [10, 1], [10, 2], [10, 7], [10, 8], [10, 10], [10, 11], [10, 12], [10, "%"], [10, 15], ["@", 1], ["@", 2], ["@", 7], ["@", 8], ["@", "-"], ["@", 15], [".", 10], [".", 11], [".", 12], ["+", 10], ["+", 11], ["+", 12], ["/", "*"]];
  let eQ = e$.concat([[1, 4], [12, 4], [4, 4], [3, 21], [3, 5], [3, 16], [11, 11], [11, 12], [11, 2], [11, "-"], [22, 1], [22, 2], [22, 11], [22, 12], [22, 4], [22, "-"]]);
  function eX(e) {
    let t = new Set(e.map(([e, t]) => eH(e) << 16 | eH(t)));
    return function (e, n, r) {
      let i = eH(n, r);
      let o = r.charCodeAt(0);
      if (o === 45 && n !== 1 && n !== 2 && n !== 15 || o === 43 ? t.has(e << 16 | o << 8) : t.has(e << 16 | i)) {
        this.emit(" ", 13, true);
      }
      return i;
    };
  }
  let eY = eX(e$);
  let eZ = eX(eQ);
  function eJ(e, t) {
    if (typeof t == "function") {
      let n = null;
      e.children.forEach(e => {
        if (n !== null) {
          t.call(this, n);
        }
        this.node(e);
        n = e;
      });
      return;
    }
    e.children.forEach(this.node, this);
  }
  function e1(e) {
    ej(e, (t, n, r) => {
      this.token(t, e.slice(n, r));
    });
  }
  let {
    hasOwnProperty: e0
  } = Object.prototype;
  let e2 = function () {};
  function e3(e) {
    if (typeof e == "function") {
      return e;
    } else {
      return e2;
    }
  }
  function e4(e, t) {
    return function (n, r, i) {
      if (n.type === t) {
        e.call(this, n, r, i);
      }
    };
  }
  function e5(e, t) {
    let n = e.fields.slice();
    let r = e.context;
    let i = typeof r == "string";
    if (t) {
      n.reverse();
    }
    return function (e, o, a, s) {
      let l;
      if (i) {
        l = o[r];
        o[r] = e;
      }
      for (let c of n) {
        let n = e[c.name];
        if (!c.nullable || n) {
          if (c.type === "list") {
            if (t ? n.reduceRight(s, false) : n.reduce(s, false)) {
              return true;
            }
          } else if (a(n)) {
            return true;
          }
        }
      }
      if (i) {
        o[r] = l;
      }
    };
  }
  function e9({
    StyleSheet: e,
    Atrule: t,
    Rule: n,
    Block: r,
    DeclarationList: i
  }) {
    return {
      Atrule: {
        StyleSheet: e,
        Atrule: t,
        Rule: n,
        Block: r
      },
      Rule: {
        StyleSheet: e,
        Atrule: t,
        Rule: n,
        Block: r
      },
      Declaration: {
        StyleSheet: e,
        Atrule: t,
        Rule: n,
        Block: r,
        DeclarationList: i
      }
    };
  }
  function e6(e) {
    return e;
  }
  function e7(e, t) {
    let n = e6;
    let r = false;
    let i = false;
    if (typeof t == "function") {
      n = t;
    } else if (t) {
      r = !!t.forceBraces;
      i = !!t.compact;
      if (typeof t.decorate == "function") {
        n = t.decorate;
      }
    }
    return function e(t, n, r, i) {
      let o;
      switch (t.type) {
        case "Group":
          o = function (t, n, r, i) {
            let o = t.combinator === " " || i ? t.combinator : " " + t.combinator + " ";
            let a = t.terms.map(t => e(t, n, r, i)).join(o);
            if (t.explicit || r) {
              return (i || a[0] === "," ? "[" : "[ ") + a + (i ? "]" : " ]");
            } else {
              return a;
            }
          }(t, n, r, i) + (t.disallowEmpty ? "!" : "");
          break;
        case "Multiplier":
          return e(t.term, n, r, i) + n(function (e) {
            let {
              min: t,
              max: n,
              comma: r
            } = e;
            if (t === 0 && n === 0) {
              if (r) {
                return "#?";
              } else {
                return "*";
              }
            } else if (t === 0 && n === 1) {
              return "?";
            } else if (t === 1 && n === 0) {
              if (r) {
                return "#";
              } else {
                return "+";
              }
            } else if (t === 1 && n === 1) {
              return "";
            } else {
              return (r ? "#" : "") + (t === n ? "{" + t + "}" : "{" + t + "," + (n !== 0 ? n : "") + "}");
            }
          }(t), t);
        case "Boolean":
          o = "<boolean-expr[" + e(t.term, n, r, i) + "]>";
          break;
        case "Type":
          o = "<" + t.name + (t.opts ? n(function (e) {
            if (e.type === "Range") {
              return " [" + (e.min === null ? "-∞" : e.min) + "," + (e.max === null ? "∞" : e.max) + "]";
            }
            throw Error("Unknown node type `" + e.type + "`");
          }(t.opts), t.opts) : "") + ">";
          break;
        case "Property":
          o = "<'" + t.name + "'>";
          break;
        case "Keyword":
          o = t.name;
          break;
        case "AtKeyword":
          o = "@" + t.name;
          break;
        case "Function":
          o = t.name + "(";
          break;
        case "String":
        case "Token":
          o = t.value;
          break;
        case "Comma":
          o = ",";
          break;
        default:
          throw Error("Unknown node type `" + t.type + "`");
      }
      return n(o, t);
    }(e, n, r, i);
  }
  let e8 = {
    offset: 0,
    line: 1,
    column: 1
  };
  function te(e, t) {
    let n = e && e.loc && e.loc[t];
    if (n) {
      if ("line" in n) {
        return tt(n);
      } else {
        return n;
      }
    } else {
      return null;
    }
  }
  function tt({
    offset: e,
    line: t,
    column: n
  }, r) {
    let i = {
      offset: e,
      line: t,
      column: n
    };
    if (r) {
      let e = r.split(/\n|\r\n?|\f/);
      i.offset += r.length;
      i.line += e.length - 1;
      i.column = e.length === 1 ? i.column + r.length : e.pop().length + 1;
    }
    return i;
  }
  let tn = function (e, t) {
    let n = e_("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
    n.reference = t;
    return n;
  };
  let tr = function (e, t, n, r) {
    let i = e_("SyntaxMatchError", e);
    let {
      css: o,
      mismatchOffset: a,
      mismatchLength: s,
      start: l,
      end: c
    } = function (e, t) {
      let n;
      let r;
      let i = e.tokens;
      let o = e.longestMatch;
      let a = o < i.length && i[o].node || null;
      let s = a !== t ? a : null;
      let l = 0;
      let c = 0;
      let u = 0;
      let h = "";
      for (let e = 0; e < i.length; e++) {
        let t = i[e].value;
        if (e === o) {
          c = t.length;
          l = h.length;
        }
        if (s !== null && i[e].node === s) {
          if (e <= o) {
            u++;
          } else {
            u = 0;
          }
        }
        h += t;
      }
      if (o === i.length || u > 1) {
        n = te(s || t, "end") || tt(e8, h);
        r = tt(n);
      } else {
        n = te(s, "start") || tt(te(t, "start") || e8, h.slice(0, l));
        r = te(s, "end") || tt(n, h.substr(l, c));
      }
      return {
        css: h,
        mismatchOffset: l,
        mismatchLength: c,
        start: n,
        end: r
      };
    }(r, n);
    i.rawMessage = e;
    i.syntax = t ? e7(t) : "<generic>";
    i.css = o;
    i.mismatchOffset = a;
    i.mismatchLength = s;
    i.message = e + "\n  syntax: " + i.syntax + "\n   value: " + (o || "<empty string>") + "\n  --------" + Array(i.mismatchOffset + 1).join("-") + "^";
    Object.assign(i, l);
    i.loc = {
      source: n && n.loc && n.loc.source || "<unknown>",
      start: l,
      end: c
    };
    return i;
  };
  let ti = new Map();
  let to = new Map();
  let ta = function (e) {
    if (ti.has(e)) {
      return ti.get(e);
    }
    let t = e.toLowerCase();
    let n = ti.get(t);
    if (n === undefined) {
      let e = tl(t, 0);
      let r = e ? "" : tc(t, 0);
      n = Object.freeze({
        basename: t.substr(r.length),
        name: t,
        prefix: r,
        vendor: r,
        custom: e
      });
    }
    ti.set(e, n);
    return n;
  };
  let ts = function (e) {
    if (to.has(e)) {
      return to.get(e);
    }
    let t = e;
    let n = e[0];
    if (n === "/") {
      n = e[1] === "/" ? "//" : "/";
    } else if (n !== "_" && n !== "*" && n !== "$" && n !== "#" && n !== "+" && n !== "&") {
      n = "";
    }
    let r = tl(t, n.length);
    if (!r && (t = t.toLowerCase(), to.has(t))) {
      let n = to.get(t);
      to.set(e, n);
      return n;
    }
    let i = r ? "" : tc(t, n.length);
    let o = t.substr(0, n.length + i.length);
    let a = Object.freeze({
      basename: t.substr(o.length),
      name: t.substr(n.length),
      hack: n,
      vendor: i,
      prefix: o,
      custom: r
    });
    to.set(e, a);
    return a;
  };
  function tl(e, t) {
    t = t || 0;
    return e.length - t >= 2 && e.charCodeAt(t) === 45 && e.charCodeAt(t + 1) === 45;
  }
  function tc(e, t) {
    t = t || 0;
    if (e.length - t >= 3 && e.charCodeAt(t) === 45 && e.charCodeAt(t + 1) !== 45) {
      let n = e.indexOf("-", t + 2);
      if (n !== -1) {
        return e.substring(t, n + 1);
      }
    }
    return "";
  }
  let tu = ["initial", "inherit", "unset", "revert", "revert-layer"];
  function th(e, t) {
    return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
  }
  function tp(e, t, n) {
    while (e !== null && (e.type === 13 || e.type === 25)) {
      e = n(++t);
    }
    return t;
  }
  function td(e, t, n, r) {
    if (!e) {
      return 0;
    }
    let i = e.value.charCodeAt(t);
    if (i === 43 || i === 45) {
      if (n) {
        return 0;
      }
      t++;
    }
    for (; t < e.value.length; t++) {
      if (!eo(e.value.charCodeAt(t))) {
        return 0;
      }
    }
    return r + 1;
  }
  function tm(e, t, n) {
    let r = false;
    let i = tp(e, t, n);
    if ((e = n(i)) === null) {
      return t;
    }
    if (e.type !== 10) {
      if (!th(e, 43) && !th(e, 45)) {
        return t;
      }
      r = true;
      i = tp(n(++i), i, n);
      if ((e = n(i)) === null || e.type !== 10) {
        return 0;
      }
    }
    if (!r) {
      let t = e.value.charCodeAt(0);
      if (t !== 43 && t !== 45) {
        return 0;
      }
    }
    return td(e, +!r, r, i);
  }
  function tf(e, t) {
    return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
  }
  function tg(e, t, n) {
    let r = 0;
    for (let i = t; i < e.value.length; i++) {
      let o = e.value.charCodeAt(i);
      if (o === 45 && n && r !== 0) {
        tg(e, t + r + 1, false);
        return 6;
      }
      if (!ea(o) || ++r > 6) {
        return 0;
      }
    }
    return r;
  }
  function tb(e, t, n) {
    if (!e) {
      return 0;
    }
    while (tf(n(t), 63)) {
      if (++e > 6) {
        return 0;
      }
      t++;
    }
    return t;
  }
  let ty = ["calc(", "-moz-calc(", "-webkit-calc("];
  let tk = new Map([[2, 22], [21, 22], [19, 20], [23, 24]]);
  function tx(e, t) {
    if (t < e.length) {
      return e.charCodeAt(t);
    } else {
      return 0;
    }
  }
  function tv(e, t) {
    return ev(e, 0, e.length, t);
  }
  function tw(e, t) {
    for (let n = 0; n < t.length; n++) {
      if (tv(e, t[n])) {
        return true;
      }
    }
    return false;
  }
  function tS(e, t) {
    return t === e.length - 2 && tx(e, t) === 92 && eo(tx(e, t + 1));
  }
  function tC(e, t, n) {
    if (e && e.type === "Range") {
      let r = Number(n !== undefined && n !== t.length ? t.substr(0, n) : t);
      if (isNaN(r) || e.min !== null && r < e.min && typeof e.min != "string" || e.max !== null && r > e.max && typeof e.max != "string") {
        return true;
      }
    }
    return false;
  }
  function tz(e) {
    return function (t, n, r) {
      if (t === null) {
        return 0;
      } else if (t.type === 2 && tw(t.value, ty)) {
        return function (e, t) {
          let n = 0;
          let r = [];
          let i = 0;
          t: do {
            switch (e.type) {
              case 24:
              case 22:
              case 20:
                if (e.type !== n) {
                  break t;
                }
                n = r.pop();
                if (r.length === 0) {
                  i++;
                  break t;
                }
                break;
              case 2:
              case 21:
              case 19:
              case 23:
                r.push(n);
                n = tk.get(e.type);
            }
            i++;
          } while (e = t(i));
          return i;
        }(t, n);
      } else {
        return e(t, n, r);
      }
    };
  }
  function tA(e) {
    return function (t) {
      return +(t !== null && t.type === e);
    };
  }
  function tL(e) {
    return +(e !== null && e.type === 1 && tx(e.value, 0) === 45 && tx(e.value, 1) === 45);
  }
  function tT(e) {
    e &&= new Set(e);
    return function (t, n, r) {
      if (t === null || t.type !== 12) {
        return 0;
      }
      let i = eA(t.value, 0);
      if (e !== null) {
        let n = t.value.indexOf("\\", i);
        let r = n !== -1 && tS(t.value, n) ? t.value.substring(i, n) : t.value.substr(i);
        if (e.has(r.toLowerCase()) === false) {
          return 0;
        }
      }
      return +!tC(r, t.value, i);
    };
  }
  function tO(e) {
    if (typeof e != "function") {
      e = function () {
        return 0;
      };
    }
    return function (t, n, r) {
      if (t !== null && t.type === 10 && Number(t.value) === 0) {
        return 1;
      } else {
        return e(t, n, r);
      }
    };
  }
  let tD = {
    "ident-token": tA(1),
    "function-token": tA(2),
    "at-keyword-token": tA(3),
    "hash-token": tA(4),
    "string-token": tA(5),
    "bad-string-token": tA(6),
    "url-token": tA(7),
    "bad-url-token": tA(8),
    "delim-token": tA(9),
    "number-token": tA(10),
    "percentage-token": tA(11),
    "dimension-token": tA(12),
    "whitespace-token": tA(13),
    "CDO-token": tA(14),
    "CDC-token": tA(15),
    "colon-token": tA(16),
    "semicolon-token": tA(17),
    "comma-token": tA(18),
    "[-token": tA(19),
    "]-token": tA(20),
    "(-token": tA(21),
    ")-token": tA(22),
    "{-token": tA(23),
    "}-token": tA(24)
  };
  let tE = {
    string: tA(5),
    ident: tA(1),
    percentage: tz(function (e, t, n) {
      if (e === null || e.type !== 11 || tC(n, e.value, e.value.length - 1)) {
        return 0;
      } else {
        return 1;
      }
    }),
    zero: tO(),
    number: tz(function (e, t, n) {
      if (e === null) {
        return 0;
      }
      let r = eA(e.value, 0);
      if (r !== e.value.length && !tS(e.value, r) || tC(n, e.value, r)) {
        return 0;
      } else {
        return 1;
      }
    }),
    integer: tz(function (e, t, n) {
      if (e === null || e.type !== 10) {
        return 0;
      }
      let r = +(tx(e.value, 0) === 43 || tx(e.value, 0) === 45);
      for (; r < e.value.length; r++) {
        if (!eo(tx(e.value, r))) {
          return 0;
        }
      }
      return +!tC(n, e.value, r);
    }),
    "custom-ident": function (e) {
      if (e === null || e.type !== 1) {
        return 0;
      }
      let t = e.value.toLowerCase();
      if (tw(t, tu) || tv(t, "default")) {
        return 0;
      } else {
        return 1;
      }
    },
    "dashed-ident": tL,
    "custom-property-name": function (e) {
      if (tL(e) && e.value !== "--") {
        return 1;
      } else {
        return 0;
      }
    },
    "hex-color": function (e) {
      if (e === null || e.type !== 4) {
        return 0;
      }
      let t = e.value.length;
      if (t !== 4 && t !== 5 && t !== 7 && t !== 9) {
        return 0;
      }
      for (let n = 1; n < t; n++) {
        if (!ea(tx(e.value, n))) {
          return 0;
        }
      }
      return 1;
    },
    "id-selector": function (e) {
      if (e !== null && e.type === 4 && ed(tx(e.value, 1), tx(e.value, 2), tx(e.value, 3))) {
        return 1;
      } else {
        return 0;
      }
    },
    "an-plus-b": function (e, t) {
      let n = 0;
      if (!e) {
        return 0;
      }
      if (e.type === 10) {
        return td(e, 0, false, n);
      }
      if (e.type === 1 && e.value.charCodeAt(0) === 45) {
        if (!ex(e.value, 1, 110)) {
          return 0;
        }
        switch (e.value.length) {
          case 2:
            return tm(t(++n), n, t);
          case 3:
            if (e.value.charCodeAt(2) !== 45) {
              break;
            }
            n = tp(t(++n), n, t);
            return td(e = t(n), 0, true, n);
          default:
            if (e.value.charCodeAt(2) !== 45) {
              break;
            }
            return td(e, 3, true, n);
        }
      } else if (e.type === 1 || th(e, 43) && t(n + 1).type === 1) {
        if (e.type !== 1) {
          e = t(++n);
        }
        if (e === null || !ex(e.value, 0, 110)) {
          return 0;
        }
        switch (e.value.length) {
          case 1:
            return tm(t(++n), n, t);
          case 2:
            if (e.value.charCodeAt(1) !== 45) {
              break;
            }
            n = tp(t(++n), n, t);
            return td(e = t(n), 0, true, n);
          default:
            if (e.value.charCodeAt(1) !== 45) {
              break;
            }
            return td(e, 2, true, n);
        }
      } else if (e.type === 12) {
        let r = e.value.charCodeAt(0);
        let i = +(r === 43 || r === 45);
        let o = i;
        for (; o < e.value.length && eo(e.value.charCodeAt(o)); o++);
        if (o !== i && ex(e.value, o, 110)) {
          if (o + 1 === e.value.length) {
            return tm(t(++n), n, t);
          } else if (e.value.charCodeAt(o + 1) !== 45) {
            return 0;
          } else if (o + 2 === e.value.length) {
            n = tp(t(++n), n, t);
            return td(e = t(n), 0, true, n);
          } else {
            return td(e, o + 2, true, n);
          }
        } else {
          return 0;
        }
      }
      return 0;
    },
    urange: function (e, t) {
      let n = 0;
      if (e === null || e.type !== 1 || !ex(e.value, 0, 117) || (e = t(++n)) === null) {
        return 0;
      }
      if (tf(e, 43)) {
        if ((e = t(++n)) === null) {
          return 0;
        } else if (e.type === 1) {
          return tb(tg(e, 0, true), ++n, t);
        } else if (tf(e, 63)) {
          return tb(1, ++n, t);
        } else {
          return 0;
        }
      }
      if (e.type === 10) {
        let r = tg(e, 1, true);
        if (r === 0) {
          return 0;
        } else if ((e = t(++n)) === null) {
          return n;
        } else if (e.type === 12 || e.type === 10) {
          if (e.value.charCodeAt(0) === 45 && tg(e, 1, false)) {
            return n + 1;
          } else {
            return 0;
          }
        } else {
          return tb(r, n, t);
        }
      }
      if (e.type === 12) {
        return tb(tg(e, 1, true), ++n, t);
      } else {
        return 0;
      }
    },
    "declaration-value": function (e, t) {
      if (!e) {
        return 0;
      }
      let n = 0;
      let r = [];
      let i = 0;
      t: do {
        switch (e.type) {
          case 6:
          case 8:
            break t;
          case 24:
          case 22:
          case 20:
            if (e.type !== n) {
              break t;
            }
            n = r.pop();
            break;
          case 17:
            if (n === 0) {
              break t;
            }
            break;
          case 9:
            if (n === 0 && e.value === "!") {
              break t;
            }
            break;
          case 2:
          case 21:
          case 19:
          case 23:
            r.push(n);
            n = tk.get(e.type);
        }
        i++;
      } while (e = t(i));
      return i;
    },
    "any-value": function (e, t) {
      if (!e) {
        return 0;
      }
      let n = 0;
      let r = [];
      let i = 0;
      t: do {
        switch (e.type) {
          case 6:
          case 8:
            break t;
          case 24:
          case 22:
          case 20:
            if (e.type !== n) {
              break t;
            }
            n = r.pop();
            break;
          case 2:
          case 21:
          case 19:
          case 23:
            r.push(n);
            n = tk.get(e.type);
        }
        i++;
      } while (e = t(i));
      return i;
    }
  };
  let tP = ["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"];
  let tI = ["deg", "grad", "rad", "turn"];
  let tN = ["s", "ms"];
  let tj = ["hz", "khz"];
  let tF = ["dpi", "dpcm", "dppx", "x"];
  let tR = ["fr"];
  let t_ = ["db"];
  let tM = ["st"];
  function tB(e, t, n) {
    return Object.assign(e_("SyntaxError", e), {
      input: t,
      offset: n,
      rawMessage: e,
      message: e + "\n  " + t + "\n--" + Array((n || t.length) + 1).join("-") + "^"
    });
  }
  let tW = new Uint8Array(128).map((e, t) => +!!/[a-zA-Z0-9\-]/.test(String.fromCharCode(t)));
  class tq {
    constructor(e) {
      this.str = e;
      this.pos = 0;
    }
    charCodeAt(e) {
      if (e < this.str.length) {
        return this.str.charCodeAt(e);
      } else {
        return 0;
      }
    }
    charCode() {
      return this.charCodeAt(this.pos);
    }
    isNameCharCode(e = this.charCode()) {
      return e < 128 && tW[e] === 1;
    }
    nextCharCode() {
      return this.charCodeAt(this.pos + 1);
    }
    nextNonWsCode(e) {
      return this.charCodeAt(this.findWsEnd(e));
    }
    skipWs() {
      this.pos = this.findWsEnd(this.pos);
    }
    findWsEnd(e) {
      for (; e < this.str.length; e++) {
        let t = this.str.charCodeAt(e);
        if (t !== 13 && t !== 10 && t !== 12 && t !== 32 && t !== 9) {
          break;
        }
      }
      return e;
    }
    substringToPos(e) {
      return this.str.substring(this.pos, this.pos = e);
    }
    eat(e) {
      if (this.charCode() !== e) {
        this.error("Expect `" + String.fromCharCode(e) + "`");
      }
      this.pos++;
    }
    peek() {
      if (this.pos < this.str.length) {
        return this.str.charAt(this.pos++);
      } else {
        return "";
      }
    }
    error(e) {
      throw new tB(e, this.str, this.pos);
    }
    scanSpaces() {
      return this.substringToPos(this.findWsEnd(this.pos));
    }
    scanWord() {
      let e = this.pos;
      for (; e < this.str.length; e++) {
        let t = this.str.charCodeAt(e);
        if (t >= 128 || tW[t] === 0) {
          break;
        }
      }
      if (this.pos === e) {
        this.error("Expect a keyword");
      }
      return this.substringToPos(e);
    }
    scanNumber() {
      let e = this.pos;
      for (; e < this.str.length; e++) {
        let t = this.str.charCodeAt(e);
        if (t < 48 || t > 57) {
          break;
        }
      }
      if (this.pos === e) {
        this.error("Expect a number");
      }
      return this.substringToPos(e);
    }
    scanString() {
      let e = this.str.indexOf("'", this.pos + 1);
      if (e === -1) {
        this.pos = this.str.length;
        this.error("Expect an apostrophe");
      }
      return this.substringToPos(e + 1);
    }
  }
  let tU = {
    " ": 1,
    "&&": 2,
    "||": 3,
    "|": 4
  };
  function tV(e) {
    let t = null;
    let n = null;
    e.eat(123);
    e.skipWs();
    t = e.scanNumber(e);
    e.skipWs();
    if (e.charCode() === 44) {
      e.pos++;
      e.skipWs();
      if (e.charCode() !== 125) {
        n = e.scanNumber(e);
        e.skipWs();
      }
    } else {
      n = t;
    }
    e.eat(125);
    return {
      min: Number(t),
      max: n ? Number(n) : 0
    };
  }
  function tK(e, t) {
    let n = function (e) {
      let t = null;
      let n = false;
      switch (e.charCode()) {
        case 42:
          e.pos++;
          t = {
            min: 0,
            max: 0
          };
          break;
        case 43:
          e.pos++;
          t = {
            min: 1,
            max: 0
          };
          break;
        case 63:
          e.pos++;
          t = {
            min: 0,
            max: 1
          };
          break;
        case 35:
          e.pos++;
          n = true;
          if (e.charCode() === 123) {
            t = tV(e);
          } else if (e.charCode() === 63) {
            e.pos++;
            t = {
              min: 0,
              max: 0
            };
          } else {
            t = {
              min: 1,
              max: 0
            };
          }
          break;
        case 123:
          t = tV(e);
          break;
        default:
          return null;
      }
      return {
        type: "Multiplier",
        comma: n,
        min: t.min,
        max: t.max,
        term: null
      };
    }(e);
    if (n !== null) {
      n.term = t;
      if (e.charCode() === 35 && e.charCodeAt(e.pos - 1) === 43) {
        return tK(e, n);
      } else {
        return n;
      }
    } else {
      return t;
    }
  }
  function tG(e) {
    let t = e.peek();
    if (t === "") {
      return null;
    } else {
      return tK(e, {
        type: "Token",
        value: t
      });
    }
  }
  function tH(e) {
    let t = new tq(e);
    let n = function e(t, n) {
      let r;
      let i = Object.create(null);
      let o = [];
      let a = null;
      let s = t.pos;
      while (t.charCode() !== n && (r = function (t, n) {
        let r = t.charCode();
        switch (r) {
          case 93:
          case 42:
          case 43:
          case 63:
          case 35:
          case 33:
            break;
          case 91:
            let i;
            return tK(t, (t.eat(91), i = e(t, n), t.eat(93), i.explicit = true, t.charCode() === 33 && (t.pos++, i.disallowEmpty = true), i));
          case 60:
            let o;
            if (t.nextCharCode() === 39) {
              t.eat(60);
              t.eat(39);
              o = t.scanWord();
              t.eat(39);
              t.eat(62);
              return tK(t, {
                type: "Property",
                name: o
              });
            } else {
              return function (t) {
                let n;
                let r = null;
                t.eat(60);
                if ((n = t.scanWord()) === "boolean-expr") {
                  t.eat(91);
                  let n = e(t, 93);
                  t.eat(93);
                  t.eat(62);
                  return tK(t, {
                    type: "Boolean",
                    term: n.terms.length === 1 ? n.terms[0] : n
                  });
                }
                if (t.charCode() === 40 && t.nextCharCode() === 41) {
                  t.pos += 2;
                  n += "()";
                }
                if (t.charCodeAt(t.findWsEnd(t.pos)) === 91) {
                  let e;
                  let n;
                  let i;
                  t.skipWs();
                  e = null;
                  n = null;
                  i = 1;
                  t.eat(91);
                  if (t.charCode() === 45) {
                    t.peek();
                    i = -1;
                  }
                  if (i == -1 && t.charCode() === 8734) {
                    t.peek();
                  } else {
                    e = i * Number(t.scanNumber(t));
                    if (t.isNameCharCode()) {
                      e += t.scanWord();
                    }
                  }
                  t.skipWs();
                  t.eat(44);
                  t.skipWs();
                  if (t.charCode() === 8734) {
                    t.peek();
                  } else {
                    i = 1;
                    if (t.charCode() === 45) {
                      t.peek();
                      i = -1;
                    }
                    n = i * Number(t.scanNumber(t));
                    if (t.isNameCharCode()) {
                      n += t.scanWord();
                    }
                  }
                  t.eat(93);
                  r = {
                    type: "Range",
                    min: e,
                    max: n
                  };
                }
                t.eat(62);
                return tK(t, {
                  type: "Type",
                  name: n,
                  opts: r
                });
              }(t);
            }
          case 124:
            return {
              type: "Combinator",
              value: t.substringToPos(t.pos + (t.nextCharCode() === 124 ? 2 : 1))
            };
          case 38:
            t.pos++;
            t.eat(38);
            return {
              type: "Combinator",
              value: "&&"
            };
          case 44:
            t.pos++;
            return {
              type: "Comma"
            };
          case 39:
            return tK(t, {
              type: "String",
              value: t.scanString()
            });
          case 32:
          case 9:
          case 10:
          case 13:
          case 12:
            return {
              type: "Spaces",
              value: t.scanSpaces()
            };
          case 64:
            r = t.nextCharCode();
            if (t.isNameCharCode(r)) {
              t.pos++;
              return {
                type: "AtKeyword",
                name: t.scanWord()
              };
            }
            return tG(t);
          case 123:
            if ((r = t.nextCharCode()) < 48 || r > 57) {
              return tG(t);
            }
            break;
          default:
            if (t.isNameCharCode(r)) {
              return function (e) {
                let t = e.scanWord();
                if (e.charCode() === 40) {
                  e.pos++;
                  return {
                    type: "Function",
                    name: t
                  };
                } else {
                  return tK(e, {
                    type: "Keyword",
                    name: t
                  });
                }
              }(t);
            }
            return tG(t);
        }
      }(t, n))) {
        if (r.type !== "Spaces") {
          if (r.type === "Combinator") {
            if (a === null || a.type === "Combinator") {
              t.pos = s;
              t.error("Unexpected combinator");
            }
            i[r.value] = true;
          } else if (a !== null && a.type !== "Combinator") {
            i[" "] = true;
            o.push({
              type: "Combinator",
              value: " "
            });
          }
          o.push(r);
          a = r;
          s = t.pos;
        }
      }
      if (a !== null && a.type === "Combinator") {
        t.pos -= s;
        t.error("Unexpected combinator");
      }
      return {
        type: "Group",
        terms: o,
        combinator: function (e, t) {
          let n;
          function r(e, t) {
            return {
              type: "Group",
              terms: e,
              combinator: t,
              disallowEmpty: false,
              explicit: false
            };
          }
          for (t = Object.keys(t).sort((e, t) => tU[e] - tU[t]); t.length > 0;) {
            n = t.shift();
            let i = 0;
            let o = 0;
            for (; i < e.length; i++) {
              let t = e[i];
              if (t.type === "Combinator") {
                if (t.value === n) {
                  if (o === -1) {
                    o = i - 1;
                  }
                  e.splice(i, 1);
                  i--;
                } else {
                  if (o !== -1 && i - o > 1) {
                    e.splice(o, i - o, r(e.slice(o, i), n));
                    i = o + 1;
                  }
                  o = -1;
                }
              }
            }
            if (o !== -1 && t.length) {
              e.splice(o, i - o, r(e.slice(o, i), n));
            }
          }
          return n;
        }(o, i) || " ",
        disallowEmpty: false,
        explicit: false
      };
    }(t);
    if (t.pos !== e.length) {
      t.error("Unexpected input");
    }
    if (n.terms.length === 1 && n.terms[0].type === "Group") {
      return n.terms[0];
    } else {
      return n;
    }
  }
  let t$ = function () {};
  function tQ(e) {
    if (typeof e == "function") {
      return e;
    } else {
      return t$;
    }
  }
  let tX = {
    decorator(e) {
      let t = [];
      let n = null;
      return {
        ...e,
        node(t) {
          let r = n;
          n = t;
          e.node.call(this, t);
          n = r;
        },
        emit(e, r, i) {
          t.push({
            type: r,
            value: e,
            node: i ? null : n
          });
        },
        result: () => t
      };
    }
  };
  let tY = {
    type: "Match"
  };
  let tZ = {
    type: "Mismatch"
  };
  let tJ = {
    type: "DisallowEmpty"
  };
  function t1(e, t, n) {
    if (t === tY && n === tZ || e === tY && t === tY && n === tY) {
      return e;
    } else {
      if (e.type === "If" && e.else === tZ && t === tY) {
        t = e.then;
        e = e.match;
      }
      return {
        type: "If",
        match: e,
        then: t,
        else: n
      };
    }
  }
  function t0(e) {
    return e.length > 2 && e.charCodeAt(e.length - 2) === 40 && e.charCodeAt(e.length - 1) === 41;
  }
  function t2(e) {
    return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || e.type === "Type" && t0(e.name);
  }
  function t3(e, t = " ", n = false) {
    return {
      type: "Group",
      terms: e,
      combinator: t,
      disallowEmpty: false,
      explicit: n
    };
  }
  function t4(e, t, n = new Set()) {
    if (!n.has(e)) {
      n.add(e);
      switch (e.type) {
        case "If":
          e.match = t4(e.match, t, n);
          e.then = t4(e.then, t, n);
          e.else = t4(e.else, t, n);
          break;
        case "Type":
          return t[e.name] || e;
      }
    }
    return e;
  }
  function t5(e, t) {
    if (typeof e == "string") {
      e = tH(e);
    }
    return {
      type: "MatchGraph",
      match: function e(t) {
        if (typeof t == "function") {
          return {
            type: "Generic",
            fn: t
          };
        }
        switch (t.type) {
          case "Group":
            {
              let n = function e(t, n, r) {
                switch (t) {
                  case " ":
                    {
                      let e = tY;
                      for (let t = n.length - 1; t >= 0; t--) {
                        e = t1(n[t], e, tZ);
                      }
                      return e;
                    }
                  case "|":
                    {
                      let e = tZ;
                      let t = null;
                      for (let r = n.length - 1; r >= 0; r--) {
                        let i = n[r];
                        if (t2(i) && (t === null && r > 0 && t2(n[r - 1]) && (e = t1({
                          type: "Enum",
                          map: t = Object.create(null)
                        }, tY, e)), t !== null)) {
                          let e = (t0(i.name) ? i.name.slice(0, -1) : i.name).toLowerCase();
                          if (e in t == false) {
                            t[e] = i;
                            continue;
                          }
                        }
                        t = null;
                        e = t1(i, tY, e);
                      }
                      return e;
                    }
                  case "&&":
                    {
                      if (n.length > 5) {
                        return {
                          type: "MatchOnce",
                          terms: n,
                          all: true
                        };
                      }
                      let r = tZ;
                      for (let i = n.length - 1; i >= 0; i--) {
                        let o;
                        let a = n[i];
                        o = n.length > 1 ? e(t, n.filter(function (e) {
                          return e !== a;
                        }), false) : tY;
                        r = t1(a, o, r);
                      }
                      return r;
                    }
                  case "||":
                    {
                      if (n.length > 5) {
                        return {
                          type: "MatchOnce",
                          terms: n,
                          all: false
                        };
                      }
                      let i = r ? tY : tZ;
                      for (let r = n.length - 1; r >= 0; r--) {
                        let o;
                        let a = n[r];
                        o = n.length > 1 ? e(t, n.filter(function (e) {
                          return e !== a;
                        }), true) : tY;
                        i = t1(a, o, i);
                      }
                      return i;
                    }
                }
              }(t.combinator, t.terms.map(e), false);
              if (t.disallowEmpty) {
                n = t1(n, tJ, tZ);
              }
              return n;
            }
          case "Multiplier":
            return function (t) {
              let n = tY;
              let r = e(t.term);
              if (t.max === 0) {
                r = t1(r, tJ, tZ);
                (n = t1(r, null, tZ)).then = t1(tY, tY, n);
                if (t.comma) {
                  n.then.else = t1({
                    type: "Comma",
                    syntax: t
                  }, n, tZ);
                }
              } else {
                for (let e = t.min || 1; e <= t.max; e++) {
                  if (t.comma && n !== tY) {
                    n = t1({
                      type: "Comma",
                      syntax: t
                    }, n, tZ);
                  }
                  n = t1(r, t1(tY, tY, n), tZ);
                }
              }
              if (t.min === 0) {
                n = t1(tY, tY, n);
              } else {
                for (let e = 0; e < t.min - 1; e++) {
                  if (t.comma && n !== tY) {
                    n = t1({
                      type: "Comma",
                      syntax: t
                    }, n, tZ);
                  }
                  n = t1(r, n, tZ);
                }
              }
              return n;
            }(t);
          case "Boolean":
            {
              let n = e(t.term);
              let r = e(t3([t3([{
                type: "Keyword",
                name: "not"
              }, {
                type: "Type",
                name: "!boolean-group"
              }]), t3([{
                type: "Type",
                name: "!boolean-group"
              }, t3([{
                type: "Multiplier",
                comma: false,
                min: 0,
                max: 0,
                term: t3([{
                  type: "Keyword",
                  name: "and"
                }, {
                  type: "Type",
                  name: "!boolean-group"
                }])
              }, {
                type: "Multiplier",
                comma: false,
                min: 0,
                max: 0,
                term: t3([{
                  type: "Keyword",
                  name: "or"
                }, {
                  type: "Type",
                  name: "!boolean-group"
                }])
              }], "|")])], "|"));
              let i = e(t3([{
                type: "Type",
                name: "!term"
              }, t3([{
                type: "Token",
                value: "("
              }, {
                type: "Type",
                name: "!self"
              }, {
                type: "Token",
                value: ")"
              }]), {
                type: "Type",
                name: "general-enclosed"
              }], "|"));
              t4(i, {
                "!term": n,
                "!self": r
              });
              t4(r, {
                "!boolean-group": i
              });
              return r;
            }
          case "Type":
          case "Property":
            return {
              type: t.type,
              name: t.name,
              syntax: t
            };
          case "Keyword":
            return {
              type: t.type,
              name: t.name.toLowerCase(),
              syntax: t
            };
          case "AtKeyword":
            return {
              type: t.type,
              name: "@" + t.name.toLowerCase(),
              syntax: t
            };
          case "Function":
            return {
              type: t.type,
              name: t.name.toLowerCase() + "(",
              syntax: t
            };
          case "String":
            if (t.value.length === 3) {
              return {
                type: "Token",
                value: t.value.charAt(1),
                syntax: t
              };
            }
            return {
              type: t.type,
              value: t.value.substr(1, t.value.length - 2).replace(/\\'/g, "'"),
              syntax: t
            };
          case "Token":
            return {
              type: t.type,
              value: t.value,
              syntax: t
            };
          case "Comma":
            return {
              type: t.type,
              syntax: t
            };
          default:
            throw Error("Unknown node type:", t.type);
        }
      }(e),
      syntax: t || null,
      source: e
    };
  }
  let {
    hasOwnProperty: t9
  } = Object.prototype;
  let t6 = "Match";
  let t7 = 0;
  function t8(e, t) {
    if (e.length !== t.length) {
      return false;
    }
    for (let n = 0; n < e.length; n++) {
      let r = t.charCodeAt(n);
      let i = e.charCodeAt(n);
      if (i >= 65 && i <= 90) {
        i |= 32;
      }
      if (i !== r) {
        return false;
      }
    }
    return true;
  }
  function ne(e) {
    return e === null || e.type === 18 || e.type === 2 || e.type === 21 || e.type === 19 || e.type === 23 || e.type === 9 && e.value !== "?";
  }
  function nt(e) {
    return e === null || e.type === 22 || e.type === 20 || e.type === 24 || e.type === 9 && e.value === "/";
  }
  function nn(e, t, n) {
    let r = function (e, t, n) {
      function r() {
        do {
          f = ++g < e.length ? e[g] : null;
        } while (f !== null && (f.type === 13 || f.type === 25));
      }
      function i(t) {
        let n = g + t;
        if (n < e.length) {
          return e[n];
        } else {
          return null;
        }
      }
      function o(e, t) {
        return {
          nextState: e,
          matchStack: y,
          syntaxStack: c,
          thenStack: u,
          tokenIndex: g,
          prev: t
        };
      }
      function a(e) {
        u = {
          nextState: e,
          matchStack: y,
          syntaxStack: c,
          prev: u
        };
      }
      function s() {
        y = {
          type: 1,
          syntax: t.syntax,
          token: f,
          prev: y
        };
        r();
        p = null;
        if (g > b) {
          b = g;
        }
      }
      function l() {
        y = y.type === 2 ? y.prev : {
          type: 3,
          syntax: c.syntax,
          token: y.token,
          prev: y
        };
        c = c.prev;
      }
      let c = null;
      let u = null;
      let h = null;
      let p = null;
      let d = 0;
      let m = null;
      let f = null;
      let g = -1;
      let b = 0;
      let y = {
        type: 0,
        syntax: null,
        token: null,
        prev: null
      };
      for (r(); m === null && ++d < 15000;) {
        switch (t.type) {
          case "Match":
            if (u === null) {
              if (f !== null && (g !== e.length - 1 || f.value !== "\\0" && f.value !== "\\9")) {
                t = tZ;
                break;
              }
              m = t6;
              break;
            }
            if ((t = u.nextState) === tJ) {
              if (u.matchStack === y) {
                t = tZ;
                break;
              }
              t = tY;
            }
            while (u.syntaxStack !== c) {
              l();
            }
            u = u.prev;
            break;
          case "Mismatch":
            if (p !== null && p !== false) {
              if (h === null || g > h.tokenIndex) {
                h = p;
                p = false;
              }
            } else if (h === null) {
              m = "Mismatch";
              break;
            }
            t = h.nextState;
            u = h.thenStack;
            c = h.syntaxStack;
            y = h.matchStack;
            f = (g = h.tokenIndex) < e.length ? e[g] : null;
            h = h.prev;
            break;
          case "MatchGraph":
            t = t.match;
            break;
          case "If":
            if (t.else !== tZ) {
              h = o(t.else, h);
            }
            if (t.then !== tY) {
              a(t.then);
            }
            t = t.match;
            break;
          case "MatchOnce":
            t = {
              type: "MatchOnceBuffer",
              syntax: t,
              index: 0,
              mask: 0
            };
            break;
          case "MatchOnceBuffer":
            {
              let e = t.syntax.terms;
              if (t.index === e.length) {
                if (t.mask === 0 || t.syntax.all) {
                  t = tZ;
                  break;
                }
                t = tY;
                break;
              }
              if (t.mask === (1 << e.length) - 1) {
                t = tY;
                break;
              }
              for (; t.index < e.length; t.index++) {
                let n = 1 << t.index;
                if ((t.mask & n) == 0) {
                  h = o(t, h);
                  a({
                    type: "AddMatchOnce",
                    syntax: t.syntax,
                    mask: t.mask | n
                  });
                  t = e[t.index++];
                  break;
                }
              }
              break;
            }
          case "AddMatchOnce":
            t = {
              type: "MatchOnceBuffer",
              syntax: t.syntax,
              index: 0,
              mask: t.mask
            };
            break;
          case "Enum":
            if (f !== null) {
              let e = f.value.toLowerCase();
              if (e.indexOf("\\") !== -1) {
                e = e.replace(/\\[09].*$/, "");
              }
              if (t9.call(t.map, e)) {
                t = t.map[e];
                break;
              }
            }
            t = tZ;
            break;
          case "Generic":
            {
              let e = c !== null ? c.opts : null;
              let n = g + Math.floor(t.fn(f, i, e));
              if (!isNaN(n) && n > g) {
                while (g < n) {
                  s();
                }
                t = tY;
              } else {
                t = tZ;
              }
              break;
            }
          case "Type":
          case "Property":
            {
              let e = t.type === "Type" ? "types" : "properties";
              let r = t9.call(n, e) ? n[e][t.name] : null;
              if (!r || !r.match) {
                throw Error("Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>"));
              }
              if (p !== false && f !== null && t.type === "Type" && (t.name === "custom-ident" && f.type === 1 || t.name === "length" && f.value === "0")) {
                if (p === null) {
                  p = o(t, h);
                }
                t = tZ;
                break;
              }
              c = {
                syntax: t.syntax,
                opts: t.syntax.opts || c !== null && c.opts || null,
                prev: c
              };
              y = {
                type: 2,
                syntax: t.syntax,
                token: y.token,
                prev: y
              };
              t = r.matchRef || r.match;
              break;
            }
          case "Keyword":
            {
              let e = t.name;
              if (f !== null) {
                let n = f.value;
                if (n.indexOf("\\") !== -1) {
                  n = n.replace(/\\[09].*$/, "");
                }
                if (t8(n, e)) {
                  s();
                  t = tY;
                  break;
                }
              }
              t = tZ;
              break;
            }
          case "AtKeyword":
          case "Function":
            if (f !== null && t8(f.value, t.name)) {
              s();
              t = tY;
              break;
            }
            t = tZ;
            break;
          case "Token":
            if (f !== null && f.value === t.value) {
              s();
              t = tY;
              break;
            }
            t = tZ;
            break;
          case "Comma":
            if (f !== null && f.type === 18) {
              if (ne(y.token)) {
                t = tZ;
              } else {
                s();
                t = nt(f) ? tZ : tY;
              }
            } else {
              t = ne(y.token) || nt(f) ? tY : tZ;
            }
            break;
          case "String":
            let r = "";
            let d = g;
            for (; d < e.length && r.length < t.value.length; d++) {
              r += e[d].value;
            }
            if (t8(r, t.value)) {
              while (g < d) {
                s();
              }
              t = tY;
            } else {
              t = tZ;
            }
            break;
          default:
            throw Error("Unknown node type: " + t.type);
        }
      }
      t7 += d;
      switch (m) {
        case null:
          m = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)";
          y = null;
          break;
        case t6:
          while (c !== null) {
            l();
          }
          break;
        default:
          y = null;
      }
      return {
        tokens: e,
        reason: m,
        iterations: d,
        match: y,
        longestMatch: b
      };
    }(e, t, n || {});
    if (r.match === null) {
      return r;
    }
    let i = r.match;
    let o = r.match = {
      syntax: t.syntax || null,
      match: []
    };
    let a = [o];
    for (i = function (e) {
      let t = null;
      let n = null;
      let r = e;
      while (r !== null) {
        n = r.prev;
        r.prev = t;
        t = r;
        r = n;
      }
      return t;
    }(i).prev; i !== null;) {
      switch (i.type) {
        case 2:
          o.match.push(o = {
            syntax: i.syntax,
            match: []
          });
          a.push(o);
          break;
        case 3:
          a.pop();
          o = a[a.length - 1];
          break;
        default:
          o.match.push({
            syntax: i.syntax || null,
            token: i.token.value,
            node: i.token.node
          });
      }
      i = i.prev;
    }
    return r;
  }
  function nr(e) {
    function t(e) {
      return e !== null && (e.type === "Type" || e.type === "Property" || e.type === "Keyword");
    }
    let n = null;
    if (this.matched !== null) {
      (function r(i) {
        if (Array.isArray(i.match)) {
          for (let e = 0; e < i.match.length; e++) {
            if (r(i.match[e])) {
              if (t(i.syntax)) {
                n.unshift(i.syntax);
              }
              return true;
            }
          }
        } else if (i.node === e) {
          n = t(i.syntax) ? [i.syntax] : [];
          return true;
        }
        return false;
      })(this.matched);
    }
    return n;
  }
  function ni(e, t) {
    return ns(this, e, e => e.type === "Type" && e.name === t);
  }
  function no(e, t) {
    return ns(this, e, e => e.type === "Property" && e.name === t);
  }
  function na(e) {
    return ns(this, e, e => e.type === "Keyword");
  }
  function ns(e, t, n) {
    let r = nr.call(e, t);
    return r !== null && r.some(n);
  }
  function nl(e, t, n, r, i) {
    let o = [];
    if (n.matched !== null) {
      (function n(a) {
        if (a.syntax !== null && a.syntax.type === r && a.syntax.name === i) {
          let n = function e(t) {
            if ("node" in t) {
              return t.node;
            } else {
              return e(t.match[0]);
            }
          }(a);
          let r = function e(t) {
            if ("node" in t) {
              return t.node;
            } else {
              return e(t.match[t.match.length - 1]);
            }
          }(a);
          e.syntax.walk(t, function (e, t, i) {
            if (e === n) {
              let e = new eR();
              do {
                e.appendData(t.data);
                if (t.data === r) {
                  break;
                }
                t = t.next;
              } while (t !== null);
              o.push({
                parent: i,
                nodes: e
              });
            }
          });
        }
        if (Array.isArray(a.match)) {
          a.match.forEach(n);
        }
      })(n.matched);
    }
    return o;
  }
  let {
    hasOwnProperty: nc
  } = Object.prototype;
  function nu(e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
  }
  function nh(e) {
    return !!e && nu(e.offset) && nu(e.line) && nu(e.column);
  }
  function np(e, t, n) {
    let r = {};
    for (let i in e) {
      if (e[i].syntax) {
        r[i] = n ? e[i].syntax : e7(e[i].syntax, {
          compact: t
        });
      }
    }
    return r;
  }
  function nd(e, t, n) {
    return {
      matched: e,
      iterations: n,
      error: t,
      ...a
    };
  }
  function nm(e, t, n, r) {
    var i;
    let o;
    i = e.syntax;
    let a = typeof n == "string" ? function (e) {
      let t = [];
      ej(e, (n, r, i) => t.push({
        type: n,
        value: e.slice(r, i),
        node: null
      }));
      return t;
    }(n) : i.generate(n, tX);
    if (!function (e) {
      for (let t = 0; t < e.length; t++) {
        if (e[t].value.toLowerCase() === "var(") {
          return true;
        }
      }
      return false;
    }(a)) {
      if (r) {
        o = nn(a, e.cssWideKeywordsSyntax, e);
      }
      if (r && o.match || (o = nn(a, t.match, e)).match) {
        return nd(o.match, null, o.iterations);
      } else {
        return nd(null, new tr(o.reason, t.syntax, n, o), o.iterations);
      }
    } else {
      return nd(null, Error("Matching for a tree with var() is not supported"));
    }
  }
  class nf {
    constructor(e, t, n) {
      this.cssWideKeywords = tu;
      this.syntax = t;
      this.generic = false;
      this.units = {
        ...o
      };
      this.atrules = Object.create(null);
      this.properties = Object.create(null);
      this.types = Object.create(null);
      this.structure = n || function (e) {
        let t = {};
        if (e.node) {
          for (let n in e.node) {
            if (nc.call(e.node, n)) {
              let r = e.node[n];
              if (r.structure) {
                t[n] = function (e, t) {
                  let n = t.structure;
                  let r = {
                    type: String,
                    loc: true
                  };
                  let i = {
                    type: "\"" + e + "\""
                  };
                  for (let t in n) {
                    if (nc.call(n, t) === false) {
                      continue;
                    }
                    let o = r[t] = Array.isArray(n[t]) ? n[t].slice() : [n[t]];
                    i[t] = function e(t, n) {
                      let r = [];
                      for (let i = 0; i < t.length; i++) {
                        let o = t[i];
                        if (o === String || o === Boolean) {
                          r.push(o.name.toLowerCase());
                        } else if (o === null) {
                          r.push("null");
                        } else if (typeof o == "string") {
                          r.push(o);
                        } else if (Array.isArray(o)) {
                          r.push("List<" + (e(o, n) || "any") + ">");
                        } else {
                          throw Error("Wrong value `" + o + "` in `" + n + "` structure definition");
                        }
                      }
                      return r.join(" | ");
                    }(o, e + "." + t);
                  }
                  return {
                    docs: i,
                    check: function (t, n) {
                      if (!t || t.constructor !== Object) {
                        return n(t, "Type of node should be an Object");
                      }
                      for (let i in t) {
                        let o = true;
                        if (nc.call(t, i) !== false) {
                          if (i === "type") {
                            if (t.type !== e) {
                              n(t, "Wrong node type `" + t.type + "`, expected `" + e + "`");
                            }
                          } else if (i === "loc") {
                            if (t.loc === null) {
                              continue;
                            }
                            if (t.loc && t.loc.constructor === Object) {
                              if (typeof t.loc.source != "string") {
                                i += ".source";
                              } else if (nh(t.loc.start)) {
                                if (nh(t.loc.end)) {
                                  continue;
                                }
                                i += ".end";
                              } else {
                                i += ".start";
                              }
                            }
                            o = false;
                          } else if (r.hasOwnProperty(i)) {
                            o = false;
                            for (let e = 0; !o && e < r[i].length; e++) {
                              let n = r[i][e];
                              switch (n) {
                                case String:
                                  o = typeof t[i] == "string";
                                  break;
                                case Boolean:
                                  o = typeof t[i] == "boolean";
                                  break;
                                case null:
                                  o = t[i] === null;
                                  break;
                                default:
                                  if (typeof n == "string") {
                                    o = t[i] && t[i].type === n;
                                  } else if (Array.isArray(n)) {
                                    o = t[i] instanceof eR;
                                  }
                              }
                            }
                          } else {
                            n(t, "Unknown field `" + i + "` for " + e + " node type");
                          }
                          if (!o) {
                            n(t, "Bad value for `" + e + "." + i + "`");
                          }
                        }
                      }
                      for (let i in r) {
                        if (nc.call(r, i) && nc.call(t, i) === false) {
                          n(t, "Field `" + e + "." + i + "` is missed");
                        }
                      }
                    }
                  };
                }(n, r);
              } else {
                throw Error("Missed `structure` field in `" + n + "` node type definition");
              }
            }
          }
        }
        return t;
      }(e);
      if (e) {
        if (e.cssWideKeywords) {
          this.cssWideKeywords = e.cssWideKeywords;
        }
        if (e.units) {
          for (let t of Object.keys(o)) {
            if (Array.isArray(e.units[t])) {
              this.units[t] = e.units[t];
            }
          }
        }
        if (e.types) {
          for (let [t, n] of Object.entries(e.types)) {
            this.addType_(t, n);
          }
        }
        if (e.generic) {
          var r;
          this.generic = true;
          for (let [e, t] of Object.entries((r = this.units, {
            ...tD,
            ...tE,
            ...function (e) {
              let {
                angle: t,
                decibel: n,
                frequency: r,
                flex: i,
                length: o,
                resolution: a,
                semitones: s,
                time: l
              } = e || {};
              return {
                dimension: tz(tT(null)),
                angle: tz(tT(t)),
                decibel: tz(tT(n)),
                frequency: tz(tT(r)),
                flex: tz(tT(i)),
                length: tz(tO(tT(o))),
                resolution: tz(tT(a)),
                semitones: tz(tT(s)),
                time: tz(tT(l))
              };
            }(r)
          }))) {
            this.addType_(e, t);
          }
        }
        if (e.atrules) {
          for (let [t, n] of Object.entries(e.atrules)) {
            this.addAtrule_(t, n);
          }
        }
        if (e.properties) {
          for (let [t, n] of Object.entries(e.properties)) {
            this.addProperty_(t, n);
          }
        }
      }
      this.cssWideKeywordsSyntax = t5(this.cssWideKeywords.join(" |  "));
    }
    checkStructure(e) {
      function t(e, t) {
        r.push({
          node: e,
          message: t
        });
      }
      let n = this.structure;
      let r = [];
      this.syntax.walk(e, function (e) {
        if (n.hasOwnProperty(e.type)) {
          n[e.type].check(e, t);
        } else {
          t(e, "Unknown node type `" + e.type + "`");
        }
      });
      return !!r.length && r;
    }
    createDescriptor(e, t, n, r = null) {
      let i = {
        type: t,
        name: n
      };
      let o = {
        type: t,
        name: n,
        parent: r,
        serializable: typeof e == "string" || e && typeof e.type == "string",
        syntax: null,
        match: null,
        matchRef: null
      };
      if (typeof e == "function") {
        o.match = t5(e, i);
      } else {
        if (typeof e == "string") {
          Object.defineProperty(o, "syntax", {
            get: () => {
              Object.defineProperty(o, "syntax", {
                value: tH(e)
              });
              return o.syntax;
            }
          });
        } else {
          o.syntax = e;
        }
        Object.defineProperty(o, "match", {
          get: () => {
            Object.defineProperty(o, "match", {
              value: t5(o.syntax, i)
            });
            return o.match;
          }
        });
        if (t === "Property") {
          Object.defineProperty(o, "matchRef", {
            get() {
              let e = o.syntax;
              let t = !function (e) {
                let t = e.terms[0];
                return e.explicit === false && e.terms.length === 1 && t.type === "Multiplier" && t.comma === true;
              }(e) ? null : t5({
                ...e,
                terms: [e.terms[0].term]
              }, i);
              Object.defineProperty(o, "matchRef", {
                value: t
              });
              return t;
            }
          });
        }
      }
      return o;
    }
    addAtrule_(e, t) {
      if (t) {
        this.atrules[e] = {
          type: "Atrule",
          name: e,
          prelude: t.prelude ? this.createDescriptor(t.prelude, "AtrulePrelude", e) : null,
          descriptors: t.descriptors ? Object.keys(t.descriptors).reduce((n, r) => {
            n[r] = this.createDescriptor(t.descriptors[r], "AtruleDescriptor", r, e);
            return n;
          }, Object.create(null)) : null
        };
      }
    }
    addProperty_(e, t) {
      if (t) {
        this.properties[e] = this.createDescriptor(t, "Property", e);
      }
    }
    addType_(e, t) {
      if (t) {
        this.types[e] = this.createDescriptor(t, "Type", e);
      }
    }
    checkAtruleName(e) {
      if (!this.getAtrule(e)) {
        return new tn("Unknown at-rule", "@" + e);
      }
    }
    checkAtrulePrelude(e, t) {
      let n = this.checkAtruleName(e);
      if (n) {
        return n;
      }
      let r = this.getAtrule(e);
      if (!r.prelude && t) {
        return SyntaxError("At-rule `@" + e + "` should not contain a prelude");
      } else if (!r.prelude || t || nm(this, r.prelude, "", false).matched) {
        return undefined;
      } else {
        return SyntaxError("At-rule `@" + e + "` should contain a prelude");
      }
    }
    checkAtruleDescriptorName(e, t) {
      let n = this.checkAtruleName(e);
      if (n) {
        return n;
      }
      let r = this.getAtrule(e);
      let i = ta(t);
      if (r.descriptors) {
        if (r.descriptors[i.name] || r.descriptors[i.basename]) {
          return undefined;
        } else {
          return new tn("Unknown at-rule descriptor", t);
        }
      } else {
        return SyntaxError("At-rule `@" + e + "` has no known descriptors");
      }
    }
    checkPropertyName(e) {
      if (!this.getProperty(e)) {
        return new tn("Unknown property", e);
      }
    }
    matchAtrulePrelude(e, t) {
      let n = this.checkAtrulePrelude(e, t);
      if (n) {
        return nd(null, n);
      }
      let r = this.getAtrule(e);
      if (r.prelude) {
        return nm(this, r.prelude, t || "", false);
      } else {
        return nd(null, null);
      }
    }
    matchAtruleDescriptor(e, t, n) {
      let r = this.checkAtruleDescriptorName(e, t);
      if (r) {
        return nd(null, r);
      }
      let i = this.getAtrule(e);
      let o = ta(t);
      return nm(this, i.descriptors[o.name] || i.descriptors[o.basename], n, false);
    }
    matchDeclaration(e) {
      if (e.type !== "Declaration") {
        return nd(null, Error("Not a Declaration node"));
      } else {
        return this.matchProperty(e.property, e.value);
      }
    }
    matchProperty(e, t) {
      if (ts(e).custom) {
        return nd(null, Error("Lexer matching doesn't applicable for custom properties"));
      }
      let n = this.checkPropertyName(e);
      if (n) {
        return nd(null, n);
      } else {
        return nm(this, this.getProperty(e), t, true);
      }
    }
    matchType(e, t) {
      let n = this.getType(e);
      if (n) {
        return nm(this, n, t, false);
      } else {
        return nd(null, new tn("Unknown type", e));
      }
    }
    match(e, t) {
      if (typeof e == "string" || e && e.type) {
        if (typeof e == "string" || !e.match) {
          e = this.createDescriptor(e, "Type", "anonymous");
        }
        return nm(this, e, t, false);
      } else {
        return nd(null, new tn("Bad syntax"));
      }
    }
    findValueFragments(e, t, n, r) {
      return nl(this, t, this.matchProperty(e, t), n, r);
    }
    findDeclarationValueFragments(e, t, n) {
      return nl(this, e.value, this.matchDeclaration(e), t, n);
    }
    findAllFragments(e, t, n) {
      let r = [];
      this.syntax.walk(e, {
        visit: "Declaration",
        enter: e => {
          r.push.apply(r, this.findDeclarationValueFragments(e, t, n));
        }
      });
      return r;
    }
    getAtrule(e, t = true) {
      let n = ta(e);
      return (n.vendor && t ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null;
    }
    getAtrulePrelude(e, t = true) {
      let n = this.getAtrule(e, t);
      return n && n.prelude || null;
    }
    getAtruleDescriptor(e, t) {
      return this.atrules.hasOwnProperty(e) && this.atrules.declarators && this.atrules[e].declarators[t] || null;
    }
    getProperty(e, t = true) {
      let n = ts(e);
      return (n.vendor && t ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null;
    }
    getType(e) {
      if (hasOwnProperty.call(this.types, e)) {
        return this.types[e];
      } else {
        return null;
      }
    }
    validate() {
      function e(e, t) {
        if (t) {
          return `<${e}>`;
        } else {
          return `<'${e}'>`;
        }
      }
      function t(o, a, s, l) {
        if (s.has(a)) {
          return s.get(a);
        }
        s.set(a, false);
        if (l.syntax !== null) {
          (function (e, t, n) {
            let r = t$;
            let i = t$;
            if (typeof t == "function") {
              r = t;
            } else if (t) {
              r = tQ(t.enter);
              i = tQ(t.leave);
            }
            if (r === t$ && i === t$) {
              throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
            }
            (function e(t) {
              r.call(n, t);
              switch (t.type) {
                case "Group":
                  t.terms.forEach(e);
                  break;
                case "Multiplier":
                case "Boolean":
                  e(t.term);
                  break;
                case "Type":
                case "Property":
                case "Keyword":
                case "AtKeyword":
                case "Function":
                case "String":
                case "Token":
                case "Comma":
                  break;
                default:
                  throw Error("Unknown type: " + t.type);
              }
              i.call(n, t);
            })(e, n);
          })(l.syntax, function (l) {
            if (l.type !== "Type" && l.type !== "Property") {
              return;
            }
            let c = l.type === "Type" ? o.types : o.properties;
            let u = l.type === "Type" ? r : i;
            if (hasOwnProperty.call(c, l.name)) {
              if (t(o, l.name, u, c[l.name])) {
                n.push(`${e(a, s === r)} used broken syntax definition ${e(l.name, l.type === "Type")}`);
                s.set(a, true);
              }
            } else {
              n.push(`${e(a, s === r)} used missed syntax definition ${e(l.name, l.type === "Type")}`);
              s.set(a, true);
            }
          }, this);
        }
      }
      let n = [];
      let r = new Map();
      let i = new Map();
      for (let e in this.types) {
        t(this, e, r, this.types[e]);
      }
      for (let e in this.properties) {
        t(this, e, i, this.properties[e]);
      }
      let o = [...r.keys()].filter(e => r.get(e));
      let a = [...i.keys()].filter(e => i.get(e));
      if (o.length || a.length) {
        return {
          errors: n,
          types: o,
          properties: a
        };
      } else {
        return null;
      }
    }
    dump(e, t) {
      return {
        generic: this.generic,
        cssWideKeywords: this.cssWideKeywords,
        units: this.units,
        types: np(this.types, !t, e),
        properties: np(this.properties, !t, e),
        atrules: function (e, t, n) {
          let r = {};
          for (let [i, o] of Object.entries(e)) {
            r[i] = {
              prelude: o.prelude && (n ? o.prelude.syntax : e7(o.prelude.syntax, {
                compact: t
              })),
              descriptors: o.descriptors && np(o.descriptors, t, n)
            };
          }
          return r;
        }(this.atrules, !t, e)
      };
    }
    toString() {
      return JSON.stringify(this.dump());
    }
  }
  function ng(e, t) {
    if (typeof t == "string" && /^\s*\|/.test(t)) {
      if (typeof e == "string") {
        return e + t;
      } else {
        return t.replace(/^\s*\|\s*/, "");
      }
    } else {
      return t || null;
    }
  }
  function nb(e, t) {
    let n = Object.create(null);
    for (let [r, i] of Object.entries(e)) {
      if (i) {
        n[r] = {};
        for (let e of Object.keys(i)) {
          if (t.includes(e)) {
            n[r][e] = i[e];
          }
        }
      }
    }
    return n;
  }
  function ny(e, t) {
    let n = {
      ...e
    };
    for (let [r, i] of Object.entries(t)) {
      switch (r) {
        case "generic":
          n[r] = !!i;
          break;
        case "cssWideKeywords":
          n[r] = e[r] ? [...e[r], ...i] : i || [];
          break;
        case "units":
          n[r] = {
            ...e[r]
          };
          for (let [t, o] of Object.entries(i)) {
            n[r][t] = Array.isArray(o) ? o : [];
          }
          break;
        case "atrules":
          n[r] = {
            ...e[r]
          };
          for (let [t, o] of Object.entries(i)) {
            let e = n[r][t] || {};
            let i = n[r][t] = {
              prelude: e.prelude || null,
              descriptors: {
                ...e.descriptors
              }
            };
            if (o) {
              i.prelude = o.prelude ? ng(i.prelude, o.prelude) : i.prelude || null;
              for (let [e, t] of Object.entries(o.descriptors || {})) {
                i.descriptors[e] = t ? ng(i.descriptors[e], t) : null;
              }
              if (!Object.keys(i.descriptors).length) {
                i.descriptors = null;
              }
            }
          }
          break;
        case "types":
        case "properties":
          n[r] = {
            ...e[r]
          };
          for (let [t, o] of Object.entries(i)) {
            n[r][t] = ng(n[r][t], o);
          }
          break;
        case "scope":
        case "features":
          n[r] = {
            ...e[r]
          };
          for (let [t, o] of Object.entries(i)) {
            n[r][t] = {
              ...n[r][t],
              ...o
            };
          }
          break;
        case "parseContext":
          n[r] = {
            ...e[r],
            ...i
          };
          break;
        case "atrule":
        case "pseudo":
          n[r] = {
            ...e[r],
            ...nb(i, ["parse"])
          };
          break;
        case "node":
          n[r] = {
            ...e[r],
            ...nb(i, ["name", "structure", "parse", "generate", "walkContext"])
          };
      }
    }
    return n;
  }
  function nk(e, t) {
    let n = this.tokenStart + e;
    let r = this.charCodeAt(n);
    for ((r === 43 || r === 45) && (t && this.error("Number sign is not allowed"), n++); n < this.tokenEnd; n++) {
      if (!eo(this.charCodeAt(n))) {
        this.error("Integer is expected", n);
      }
    }
  }
  function nx(e) {
    return nk.call(this, 0, e);
  }
  function nv(e, t) {
    if (!this.cmpChar(this.tokenStart + e, t)) {
      let n = "";
      switch (t) {
        case 110:
          n = "N is expected";
          break;
        case 45:
          n = "HyphenMinus is expected";
      }
      this.error(n, this.tokenStart + e);
    }
  }
  function nw() {
    let e = 0;
    let t = 0;
    let n = this.tokenType;
    while (n === 13 || n === 25) {
      n = this.lookupType(++e);
    }
    if (n !== 10) {
      if (!this.isDelim(43, e) && !this.isDelim(45, e)) {
        return null;
      }
      t = this.isDelim(43, e) ? 43 : 45;
      do {
        n = this.lookupType(++e);
      } while (n === 13 || n === 25);
      if (n !== 10) {
        this.skip(e);
        nx.call(this, true);
      }
    }
    if (e > 0) {
      this.skip(e);
    }
    if (t === 0 && (n = this.charCodeAt(this.tokenStart)) !== 43 && n !== 45) {
      this.error("Number sign is expected");
    }
    nx.call(this, t !== 0);
    if (t === 45) {
      return "-" + this.consume(10);
    } else {
      return this.consume(10);
    }
  }
  let nS = "AnPlusB";
  let nC = {
    a: [String, null],
    b: [String, null]
  };
  function nz() {
    let e = this.tokenStart;
    let t = null;
    let n = null;
    if (this.tokenType === 10) {
      nx.call(this, false);
      n = this.consume(10);
    } else if (this.tokenType === 1 && this.cmpChar(this.tokenStart, 45)) {
      t = "-1";
      nv.call(this, 1, 110);
      switch (this.tokenEnd - this.tokenStart) {
        case 2:
          this.next();
          n = nw.call(this);
          break;
        case 3:
          nv.call(this, 2, 45);
          this.next();
          this.skipSC();
          nx.call(this, true);
          n = "-" + this.consume(10);
          break;
        default:
          nv.call(this, 2, 45);
          nk.call(this, 3, true);
          this.next();
          n = this.substrToCursor(e + 2);
      }
    } else if (this.tokenType === 1 || this.isDelim(43) && this.lookupType(1) === 1) {
      let r = 0;
      t = "1";
      if (this.isDelim(43)) {
        r = 1;
        this.next();
      }
      nv.call(this, 0, 110);
      switch (this.tokenEnd - this.tokenStart) {
        case 1:
          this.next();
          n = nw.call(this);
          break;
        case 2:
          nv.call(this, 1, 45);
          this.next();
          this.skipSC();
          nx.call(this, true);
          n = "-" + this.consume(10);
          break;
        default:
          nv.call(this, 1, 45);
          nk.call(this, 2, true);
          this.next();
          n = this.substrToCursor(e + r + 1);
      }
    } else if (this.tokenType === 12) {
      let r = this.charCodeAt(this.tokenStart);
      let i = r === 43 || r === 45;
      let o = this.tokenStart + i;
      for (; o < this.tokenEnd && eo(this.charCodeAt(o)); o++);
      if (o === this.tokenStart + i) {
        this.error("Integer is expected", this.tokenStart + i);
      }
      nv.call(this, o - this.tokenStart, 110);
      t = this.substring(e, o);
      if (o + 1 === this.tokenEnd) {
        this.next();
        n = nw.call(this);
      } else {
        nv.call(this, o - this.tokenStart + 1, 45);
        if (o + 2 === this.tokenEnd) {
          this.next();
          this.skipSC();
          nx.call(this, true);
          n = "-" + this.consume(10);
        } else {
          nk.call(this, o - this.tokenStart + 2, true);
          this.next();
          n = this.substrToCursor(o + 1);
        }
      }
    } else {
      this.error();
    }
    if (t !== null && t.charCodeAt(0) === 43) {
      t = t.substr(1);
    }
    if (n !== null && n.charCodeAt(0) === 43) {
      n = n.substr(1);
    }
    return {
      type: "AnPlusB",
      loc: this.getLocation(e, this.tokenStart),
      a: t,
      b: n
    };
  }
  function nA(e) {
    if (e.a) {
      let t = e.a === "+1" && "n" || e.a === "1" && "n" || e.a === "-1" && "-n" || e.a + "n";
      if (e.b) {
        let n = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
        this.tokenize(t + n);
      } else {
        this.tokenize(t);
      }
    } else {
      this.tokenize(e.b);
    }
  }
  function nL() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
  }
  function nT() {
    for (let e = 1, t; t = this.lookupType(e); e++) {
      if (t === 24) {
        return true;
      }
      if (t === 23 || t === 3) {
        break;
      }
    }
    return false;
  }
  let nO = "Atrule";
  let nD = "atrule";
  let nE = {
    name: String,
    prelude: ["AtrulePrelude", "Raw", null],
    block: ["Block", null]
  };
  function nP(e = false) {
    let t;
    let n;
    let r = this.tokenStart;
    let i = null;
    let o = null;
    this.eat(3);
    n = (t = this.substrToCursor(r + 1)).toLowerCase();
    this.skipSC();
    if (this.eof === false && this.tokenType !== 23 && this.tokenType !== 17) {
      i = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, t, e), nL) : nL.call(this, this.tokenIndex);
      this.skipSC();
    }
    switch (this.tokenType) {
      case 17:
        this.next();
        break;
      case 23:
        o = hasOwnProperty.call(this.atrule, n) && typeof this.atrule[n].block == "function" ? this.atrule[n].block.call(this, e) : this.Block(nT.call(this));
    }
    return {
      type: "Atrule",
      loc: this.getLocation(r, this.tokenStart),
      name: t,
      prelude: i,
      block: o
    };
  }
  function nI(e) {
    this.token(3, "@" + e.name);
    if (e.prelude !== null) {
      this.node(e.prelude);
    }
    if (e.block) {
      this.node(e.block);
    } else {
      this.token(17, ";");
    }
  }
  let nN = "AtrulePrelude";
  let nj = "atrulePrelude";
  let nF = {
    children: [[]]
  };
  function nR(e) {
    let t = null;
    if (e !== null) {
      e = e.toLowerCase();
    }
    this.skipSC();
    t = hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function" ? this.atrule[e].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude);
    this.skipSC();
    if (this.eof !== true && this.tokenType !== 23 && this.tokenType !== 17) {
      this.error("Semicolon or block is expected");
    }
    return {
      type: "AtrulePrelude",
      loc: this.getLocationFromList(t),
      children: t
    };
  }
  function n_(e) {
    this.children(e);
  }
  function nM() {
    if (this.eof) {
      this.error("Unexpected end of input");
    }
    let e = this.tokenStart;
    let t = false;
    if (this.isDelim(42)) {
      t = true;
      this.next();
    } else if (!this.isDelim(124)) {
      this.eat(1);
    }
    if (this.isDelim(124)) {
      if (this.charCodeAt(this.tokenStart + 1) !== 61) {
        this.next();
        this.eat(1);
      } else if (t) {
        this.error("Identifier is expected", this.tokenEnd);
      }
    } else if (t) {
      this.error("Vertical line is expected");
    }
    return {
      type: "Identifier",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e)
    };
  }
  function nB() {
    let e = this.tokenStart;
    let t = this.charCodeAt(e);
    if (t !== 61 && t !== 126 && t !== 94 && t !== 36 && t !== 42 && t !== 124) {
      this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected");
    }
    this.next();
    if (t !== 61) {
      if (!this.isDelim(61)) {
        this.error("Equal sign is expected");
      }
      this.next();
    }
    return this.substrToCursor(e);
  }
  let nW = "AttributeSelector";
  let nq = {
    name: "Identifier",
    matcher: [String, null],
    value: ["String", "Identifier", null],
    flags: [String, null]
  };
  function nU() {
    let e;
    let t = this.tokenStart;
    let n = null;
    let r = null;
    let i = null;
    this.eat(19);
    this.skipSC();
    e = nM.call(this);
    this.skipSC();
    if (this.tokenType !== 20) {
      if (this.tokenType !== 1) {
        n = nB.call(this);
        this.skipSC();
        r = this.tokenType === 5 ? this.String() : this.Identifier();
        this.skipSC();
      }
      if (this.tokenType === 1) {
        i = this.consume(1);
        this.skipSC();
      }
    }
    this.eat(20);
    return {
      type: "AttributeSelector",
      loc: this.getLocation(t, this.tokenStart),
      name: e,
      matcher: n,
      value: r,
      flags: i
    };
  }
  function nV(e) {
    this.token(9, "[");
    this.node(e.name);
    if (e.matcher !== null) {
      this.tokenize(e.matcher);
      this.node(e.value);
    }
    if (e.flags !== null) {
      this.token(1, e.flags);
    }
    this.token(9, "]");
  }
  function nK() {
    return this.Raw(null, true);
  }
  function nG() {
    return this.parseWithFallback(this.Rule, nK);
  }
  function nH() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
  }
  function n$() {
    if (this.tokenType === 17) {
      return nH.call(this, this.tokenIndex);
    }
    let e = this.parseWithFallback(this.Declaration, nH);
    if (this.tokenType === 17) {
      this.next();
    }
    return e;
  }
  let nQ = "Block";
  let nX = "block";
  let nY = {
    children: [["Atrule", "Rule", "Declaration"]]
  };
  function nZ(e) {
    let t = e ? n$ : nG;
    let n = this.tokenStart;
    let r = this.createList();
    this.eat(23);
    t: while (!this.eof) {
      switch (this.tokenType) {
        case 24:
          break t;
        case 13:
        case 25:
          this.next();
          break;
        case 3:
          r.push(this.parseWithFallback(this.Atrule.bind(this, e), nK));
          break;
        default:
          if (e && this.isDelim(38)) {
            r.push(nG.call(this));
          } else {
            r.push(t.call(this));
          }
      }
    }
    if (!this.eof) {
      this.eat(24);
    }
    return {
      type: "Block",
      loc: this.getLocation(n, this.tokenStart),
      children: r
    };
  }
  function nJ(e) {
    this.token(23, "{");
    this.children(e, e => {
      if (e.type === "Declaration") {
        this.token(17, ";");
      }
    });
    this.token(24, "}");
  }
  let n1 = "Brackets";
  let n0 = {
    children: [[]]
  };
  function n2(e, t) {
    let n = this.tokenStart;
    let r = null;
    this.eat(19);
    r = e.call(this, t);
    if (!this.eof) {
      this.eat(20);
    }
    return {
      type: "Brackets",
      loc: this.getLocation(n, this.tokenStart),
      children: r
    };
  }
  function n3(e) {
    this.token(9, "[");
    this.children(e);
    this.token(9, "]");
  }
  let n4 = "CDC";
  let n5 = [];
  function n9() {
    let e = this.tokenStart;
    this.eat(15);
    return {
      type: "CDC",
      loc: this.getLocation(e, this.tokenStart)
    };
  }
  function n6() {
    this.token(15, "-->");
  }
  let n7 = "CDO";
  let n8 = [];
  function re() {
    let e = this.tokenStart;
    this.eat(14);
    return {
      type: "CDO",
      loc: this.getLocation(e, this.tokenStart)
    };
  }
  function rt() {
    this.token(14, "<!--");
  }
  let rn = "ClassSelector";
  let rr = {
    name: String
  };
  function ri() {
    this.eatDelim(46);
    return {
      type: "ClassSelector",
      loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
      name: this.consume(1)
    };
  }
  function ro(e) {
    this.token(9, ".");
    this.token(1, e.name);
  }
  let ra = "Combinator";
  let rs = {
    name: String
  };
  function rl() {
    let e;
    let t = this.tokenStart;
    switch (this.tokenType) {
      case 13:
        e = " ";
        break;
      case 9:
        switch (this.charCodeAt(this.tokenStart)) {
          case 62:
          case 43:
          case 126:
            this.next();
            break;
          case 47:
            this.next();
            this.eatIdent("deep");
            this.eatDelim(47);
            break;
          default:
            this.error("Combinator is expected");
        }
        e = this.substrToCursor(t);
    }
    return {
      type: "Combinator",
      loc: this.getLocation(t, this.tokenStart),
      name: e
    };
  }
  function rc(e) {
    this.tokenize(e.name);
  }
  let ru = "Comment";
  let rh = {
    value: String
  };
  function rp() {
    let e = this.tokenStart;
    let t = this.tokenEnd;
    this.eat(25);
    if (t - e + 2 >= 2 && this.charCodeAt(t - 2) === 42 && this.charCodeAt(t - 1) === 47) {
      t -= 2;
    }
    return {
      type: "Comment",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substring(e + 2, t)
    };
  }
  function rd(e) {
    this.token(25, "/*" + e.value + "*/");
  }
  let rm = new Set([16, 22, 0]);
  let rf = "Condition";
  let rg = {
    kind: String,
    children: [["Identifier", "Feature", "FeatureFunction", "FeatureRange", "SupportsDeclaration"]]
  };
  function rb(e) {
    if (this.lookupTypeNonSC(1) === 1 && rm.has(this.lookupTypeNonSC(2))) {
      return this.Feature(e);
    } else {
      return this.FeatureRange(e);
    }
  }
  let ry = {
    media: rb,
    container: rb,
    supports() {
      return this.SupportsDeclaration();
    }
  };
  function rk(e = "media") {
    let t = this.createList();
    t: while (!this.eof) {
      switch (this.tokenType) {
        case 25:
        case 13:
          this.next();
          continue;
        case 1:
          t.push(this.Identifier());
          break;
        case 21:
          {
            let n = this.parseWithFallback(() => ry[e].call(this, e), () => null);
            n ||= this.parseWithFallback(() => {
              this.eat(21);
              let t = this.Condition(e);
              this.eat(22);
              return t;
            }, () => this.GeneralEnclosed(e));
            t.push(n);
            break;
          }
        case 2:
          {
            let n = this.parseWithFallback(() => this.FeatureFunction(e), () => null);
            n ||= this.GeneralEnclosed(e);
            t.push(n);
            break;
          }
        default:
          break t;
      }
    }
    if (t.isEmpty) {
      this.error("Condition is expected");
    }
    return {
      type: "Condition",
      loc: this.getLocationFromList(t),
      kind: e,
      children: t
    };
  }
  function rx(e) {
    e.children.forEach(e => {
      if (e.type === "Condition") {
        this.token(21, "(");
        this.node(e);
        this.token(22, ")");
      } else {
        this.node(e);
      }
    });
  }
  function rv() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
  }
  function rw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
  }
  function rS() {
    let e = this.tokenIndex;
    let t = this.Value();
    if (t.type !== "Raw" && this.eof === false && this.tokenType !== 17 && this.isDelim(33) === false && this.isBalanceEdge(e) === false) {
      this.error();
    }
    return t;
  }
  let rC = "Declaration";
  let rz = "declaration";
  let rA = {
    important: [Boolean, String],
    property: String,
    value: ["Value", "Raw"]
  };
  function rL() {
    let e;
    let t = this.tokenStart;
    let n = this.tokenIndex;
    let r = rO.call(this);
    let i = tl(r);
    let o = i ? this.parseCustomProperty : this.parseValue;
    let a = i ? rw : rv;
    let s = false;
    this.skipSC();
    this.eat(16);
    let l = this.tokenIndex;
    if (!i) {
      this.skipSC();
    }
    e = o ? this.parseWithFallback(rS, a) : a.call(this, this.tokenIndex);
    if (i && e.type === "Value" && e.children.isEmpty) {
      for (let t = l - this.tokenIndex; t <= 0; t++) {
        if (this.lookupType(t) === 13) {
          e.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
      }
    }
    if (this.isDelim(33)) {
      s = rD.call(this);
      this.skipSC();
    }
    if (this.eof === false && this.tokenType !== 17 && this.isBalanceEdge(n) === false) {
      this.error();
    }
    return {
      type: "Declaration",
      loc: this.getLocation(t, this.tokenStart),
      important: s,
      property: r,
      value: e
    };
  }
  function rT(e) {
    this.token(1, e.property);
    this.token(16, ":");
    this.node(e.value);
    if (e.important) {
      this.token(9, "!");
      this.token(1, e.important === true ? "important" : e.important);
    }
  }
  function rO() {
    let e = this.tokenStart;
    if (this.tokenType === 9) {
      switch (this.charCodeAt(this.tokenStart)) {
        case 42:
        case 36:
        case 43:
        case 35:
        case 38:
          this.next();
          break;
        case 47:
          this.next();
          if (this.isDelim(47)) {
            this.next();
          }
      }
    }
    if (this.tokenType === 4) {
      this.eat(4);
    } else {
      this.eat(1);
    }
    return this.substrToCursor(e);
  }
  function rD() {
    this.eat(9);
    this.skipSC();
    let e = this.consume(1);
    return e === "important" || e;
  }
  function rE() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
  }
  let rP = "DeclarationList";
  let rI = {
    children: [["Declaration", "Atrule", "Rule"]]
  };
  function rN() {
    let e = this.createList();
    while (!this.eof) {
      switch (this.tokenType) {
        case 13:
        case 25:
        case 17:
          this.next();
          break;
        case 3:
          e.push(this.parseWithFallback(this.Atrule.bind(this, true), rE));
          break;
        default:
          if (this.isDelim(38)) {
            e.push(this.parseWithFallback(this.Rule, rE));
          } else {
            e.push(this.parseWithFallback(this.Declaration, rE));
          }
      }
    }
    return {
      type: "DeclarationList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function rj(e) {
    this.children(e, e => {
      if (e.type === "Declaration") {
        this.token(17, ";");
      }
    });
  }
  let rF = "Dimension";
  let rR = {
    value: String,
    unit: String
  };
  function r_() {
    let e = this.tokenStart;
    let t = this.consumeNumber(12);
    return {
      type: "Dimension",
      loc: this.getLocation(e, this.tokenStart),
      value: t,
      unit: this.substring(e + t.length, this.tokenStart)
    };
  }
  function rM(e) {
    this.token(12, e.value + e.unit);
  }
  let rB = "Feature";
  let rW = {
    kind: String,
    name: String,
    value: ["Identifier", "Number", "Dimension", "Ratio", "Function", null]
  };
  function rq(e) {
    let t;
    let n = this.tokenStart;
    let r = null;
    this.eat(21);
    this.skipSC();
    t = this.consume(1);
    this.skipSC();
    if (this.tokenType !== 22) {
      this.eat(16);
      this.skipSC();
      switch (this.tokenType) {
        case 10:
          r = this.lookupNonWSType(1) === 9 ? this.Ratio() : this.Number();
          break;
        case 12:
          r = this.Dimension();
          break;
        case 1:
          r = this.Identifier();
          break;
        case 2:
          r = this.parseWithFallback(() => {
            let e = this.Function(this.readSequence, this.scope.Value);
            this.skipSC();
            if (this.isDelim(47)) {
              this.error();
            }
            return e;
          }, () => this.Ratio());
          break;
        default:
          this.error("Number, dimension, ratio or identifier is expected");
      }
      this.skipSC();
    }
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "Feature",
      loc: this.getLocation(n, this.tokenStart),
      kind: e,
      name: t,
      value: r
    };
  }
  function rU(e) {
    this.token(21, "(");
    this.token(1, e.name);
    if (e.value !== null) {
      this.token(16, ":");
      this.node(e.value);
    }
    this.token(22, ")");
  }
  let rV = "FeatureFunction";
  let rK = {
    kind: String,
    feature: String,
    value: ["Declaration", "Selector"]
  };
  function rG(e, t) {
    let n = (this.features[e] || {})[t];
    if (typeof n != "function") {
      this.error(`Unknown feature ${t}()`);
    }
    return n;
  }
  function rH(e = "unknown") {
    let t = this.tokenStart;
    let n = this.consumeFunctionName();
    let r = rG.call(this, e, n.toLowerCase());
    this.skipSC();
    let i = this.parseWithFallback(() => {
      let e = this.tokenIndex;
      let t = r.call(this);
      if (this.eof === false && this.isBalanceEdge(e) === false) {
        this.error();
      }
      return t;
    }, () => this.Raw(null, false));
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "FeatureFunction",
      loc: this.getLocation(t, this.tokenStart),
      kind: e,
      feature: n,
      value: i
    };
  }
  function r$(e) {
    this.token(2, e.feature + "(");
    this.node(e.value);
    this.token(22, ")");
  }
  let rQ = "FeatureRange";
  let rX = {
    kind: String,
    left: ["Identifier", "Number", "Dimension", "Ratio", "Function"],
    leftComparison: String,
    middle: ["Identifier", "Number", "Dimension", "Ratio", "Function"],
    rightComparison: [String, null],
    right: ["Identifier", "Number", "Dimension", "Ratio", "Function", null]
  };
  function rY() {
    this.skipSC();
    switch (this.tokenType) {
      case 10:
        if (this.isDelim(47, this.lookupOffsetNonSC(1))) {
          return this.Ratio();
        }
        return this.Number();
      case 12:
        return this.Dimension();
      case 1:
        return this.Identifier();
      case 2:
        return this.parseWithFallback(() => {
          let e = this.Function(this.readSequence, this.scope.Value);
          this.skipSC();
          if (this.isDelim(47)) {
            this.error();
          }
          return e;
        }, () => this.Ratio());
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
  }
  function rZ(e) {
    this.skipSC();
    if (this.isDelim(60) || this.isDelim(62)) {
      let e = this.source[this.tokenStart];
      this.next();
      if (this.isDelim(61)) {
        this.next();
        return e + "=";
      } else {
        return e;
      }
    }
    if (this.isDelim(61)) {
      return "=";
    }
    this.error(`Expected ${e ? "\":\", " : ""}"<", ">", "=" or ")"`);
  }
  function rJ(e = "unknown") {
    let t = this.tokenStart;
    this.skipSC();
    this.eat(21);
    let n = rY.call(this);
    let r = rZ.call(this, n.type === "Identifier");
    let i = rY.call(this);
    let o = null;
    let a = null;
    if (this.lookupNonWSType(0) !== 22) {
      o = rZ.call(this);
      a = rY.call(this);
    }
    this.skipSC();
    this.eat(22);
    return {
      type: "FeatureRange",
      loc: this.getLocation(t, this.tokenStart),
      kind: e,
      left: n,
      leftComparison: r,
      middle: i,
      rightComparison: o,
      right: a
    };
  }
  function r1(e) {
    this.token(21, "(");
    this.node(e.left);
    this.tokenize(e.leftComparison);
    this.node(e.middle);
    if (e.right) {
      this.tokenize(e.rightComparison);
      this.node(e.right);
    }
    this.token(22, ")");
  }
  let r0 = "Function";
  let r2 = "function";
  let r3 = {
    name: String,
    children: [[]]
  };
  function r4(e, t) {
    let n;
    let r = this.tokenStart;
    let i = this.consumeFunctionName();
    let o = i.toLowerCase();
    n = t.hasOwnProperty(o) ? t[o].call(this, t) : e.call(this, t);
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "Function",
      loc: this.getLocation(r, this.tokenStart),
      name: i,
      children: n
    };
  }
  function r5(e) {
    this.token(2, e.name + "(");
    this.children(e);
    this.token(22, ")");
  }
  let r9 = "GeneralEnclosed";
  let r6 = {
    kind: String,
    function: [String, null],
    children: [[]]
  };
  function r7(e) {
    let t = this.tokenStart;
    let n = null;
    if (this.tokenType === 2) {
      n = this.consumeFunctionName();
    } else {
      this.eat(21);
    }
    let r = this.parseWithFallback(() => {
      let e = this.tokenIndex;
      let t = this.readSequence(this.scope.Value);
      if (this.eof === false && this.isBalanceEdge(e) === false) {
        this.error();
      }
      return t;
    }, () => this.createSingleNodeList(this.Raw(null, false)));
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "GeneralEnclosed",
      loc: this.getLocation(t, this.tokenStart),
      kind: e,
      function: n,
      children: r
    };
  }
  function r8(e) {
    if (e.function) {
      this.token(2, e.function + "(");
    } else {
      this.token(21, "(");
    }
    this.children(e);
    this.token(22, ")");
  }
  let ie = "XXX";
  let it = "Hash";
  let ir = {
    value: String
  };
  function ii() {
    let e = this.tokenStart;
    this.eat(4);
    return {
      type: "Hash",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e + 1)
    };
  }
  function io(e) {
    this.token(4, "#" + e.value);
  }
  let ia = "Identifier";
  let is = {
    name: String
  };
  function il() {
    return {
      type: "Identifier",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      name: this.consume(1)
    };
  }
  function ic(e) {
    this.token(1, e.name);
  }
  let iu = "IdSelector";
  let ih = {
    name: String
  };
  function ip() {
    let e = this.tokenStart;
    this.eat(4);
    return {
      type: "IdSelector",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e + 1)
    };
  }
  function id(e) {
    this.token(9, "#" + e.name);
  }
  let im = "Layer";
  let ig = {
    name: String
  };
  function ib() {
    let e = this.tokenStart;
    let t = this.consume(1);
    while (this.isDelim(46)) {
      this.eat(9);
      t += "." + this.consume(1);
    }
    return {
      type: "Layer",
      loc: this.getLocation(e, this.tokenStart),
      name: t
    };
  }
  function iy(e) {
    this.tokenize(e.name);
  }
  let ik = "LayerList";
  let ix = {
    children: [["Layer"]]
  };
  function iv() {
    let e = this.createList();
    for (this.skipSC(); !this.eof && (e.push(this.Layer()), this.lookupTypeNonSC(0) === 18);) {
      this.skipSC();
      this.next();
      this.skipSC();
    }
    return {
      type: "LayerList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function iw(e) {
    this.children(e, () => this.token(18, ","));
  }
  let iS = "MediaQuery";
  let iC = {
    modifier: [String, null],
    mediaType: [String, null],
    condition: ["Condition", null]
  };
  function iz() {
    let e = this.tokenStart;
    let t = null;
    let n = null;
    let r = null;
    this.skipSC();
    if (this.tokenType === 1 && this.lookupTypeNonSC(1) !== 21) {
      let e = this.consume(1);
      let i = e.toLowerCase();
      if (i === "not" || i === "only") {
        this.skipSC();
        t = i;
        n = this.consume(1);
      } else {
        n = e;
      }
      switch (this.lookupTypeNonSC(0)) {
        case 1:
          this.skipSC();
          this.eatIdent("and");
          r = this.Condition("media");
          break;
        case 23:
        case 17:
        case 18:
        case 0:
          break;
        default:
          this.error("Identifier or parenthesis is expected");
      }
    } else {
      switch (this.tokenType) {
        case 1:
        case 21:
        case 2:
          r = this.Condition("media");
          break;
        case 23:
        case 17:
        case 0:
          break;
        default:
          this.error("Identifier or parenthesis is expected");
      }
    }
    return {
      type: "MediaQuery",
      loc: this.getLocation(e, this.tokenStart),
      modifier: t,
      mediaType: n,
      condition: r
    };
  }
  function iA(e) {
    if (e.mediaType) {
      if (e.modifier) {
        this.token(1, e.modifier);
      }
      this.token(1, e.mediaType);
      if (e.condition) {
        this.token(1, "and");
        this.node(e.condition);
      }
    } else if (e.condition) {
      this.node(e.condition);
    }
  }
  let iL = "MediaQueryList";
  let iT = {
    children: [["MediaQuery"]]
  };
  function iO() {
    let e = this.createList();
    for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === 18);) {
      this.next();
    }
    return {
      type: "MediaQueryList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function iD(e) {
    this.children(e, () => this.token(18, ","));
  }
  let iE = "NestingSelector";
  let iP = {};
  function iI() {
    let e = this.tokenStart;
    this.eatDelim(38);
    return {
      type: "NestingSelector",
      loc: this.getLocation(e, this.tokenStart)
    };
  }
  function iN() {
    this.token(9, "&");
  }
  let ij = "Nth";
  let iF = {
    nth: ["AnPlusB", "Identifier"],
    selector: ["SelectorList", null]
  };
  function iR() {
    let e;
    this.skipSC();
    let t = this.tokenStart;
    let n = t;
    let r = null;
    e = this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB();
    n = this.tokenStart;
    this.skipSC();
    if (this.lookupValue(0, "of")) {
      this.next();
      r = this.SelectorList();
      n = this.tokenStart;
    }
    return {
      type: "Nth",
      loc: this.getLocation(t, n),
      nth: e,
      selector: r
    };
  }
  function i_(e) {
    this.node(e.nth);
    if (e.selector !== null) {
      this.token(1, "of");
      this.node(e.selector);
    }
  }
  let iM = "Number";
  let iB = {
    value: String
  };
  function iW() {
    return {
      type: "Number",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consume(10)
    };
  }
  function iq(e) {
    this.token(10, e.value);
  }
  let iU = "Operator";
  let iV = {
    value: String
  };
  function iK() {
    let e = this.tokenStart;
    this.next();
    return {
      type: "Operator",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e)
    };
  }
  function iG(e) {
    this.tokenize(e.value);
  }
  let iH = "Parentheses";
  let i$ = {
    children: [[]]
  };
  function iQ(e, t) {
    let n = this.tokenStart;
    let r = null;
    this.eat(21);
    r = e.call(this, t);
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "Parentheses",
      loc: this.getLocation(n, this.tokenStart),
      children: r
    };
  }
  function iX(e) {
    this.token(21, "(");
    this.children(e);
    this.token(22, ")");
  }
  let iY = "Percentage";
  let iZ = {
    value: String
  };
  function iJ() {
    return {
      type: "Percentage",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: this.consumeNumber(11)
    };
  }
  function i1(e) {
    this.token(11, e.value + "%");
  }
  let i0 = "PseudoClassSelector";
  let i2 = "function";
  let i3 = {
    name: String,
    children: [["Raw"], null]
  };
  function i4() {
    let e;
    let t;
    let n = this.tokenStart;
    let r = null;
    this.eat(16);
    if (this.tokenType === 2) {
      t = (e = this.consumeFunctionName()).toLowerCase();
      if (this.lookupNonWSType(0) == 22) {
        r = this.createList();
      } else if (hasOwnProperty.call(this.pseudo, t)) {
        this.skipSC();
        r = this.pseudo[t].call(this);
        this.skipSC();
      } else {
        (r = this.createList()).push(this.Raw(null, false));
      }
      this.eat(22);
    } else {
      e = this.consume(1);
    }
    return {
      type: "PseudoClassSelector",
      loc: this.getLocation(n, this.tokenStart),
      name: e,
      children: r
    };
  }
  function i5(e) {
    this.token(16, ":");
    if (e.children === null) {
      this.token(1, e.name);
    } else {
      this.token(2, e.name + "(");
      this.children(e);
      this.token(22, ")");
    }
  }
  let i9 = "PseudoElementSelector";
  let i6 = "function";
  let i7 = {
    name: String,
    children: [["Raw"], null]
  };
  function i8() {
    let e;
    let t;
    let n = this.tokenStart;
    let r = null;
    this.eat(16);
    this.eat(16);
    if (this.tokenType === 2) {
      t = (e = this.consumeFunctionName()).toLowerCase();
      if (this.lookupNonWSType(0) == 22) {
        r = this.createList();
      } else if (hasOwnProperty.call(this.pseudo, t)) {
        this.skipSC();
        r = this.pseudo[t].call(this);
        this.skipSC();
      } else {
        (r = this.createList()).push(this.Raw(null, false));
      }
      this.eat(22);
    } else {
      e = this.consume(1);
    }
    return {
      type: "PseudoElementSelector",
      loc: this.getLocation(n, this.tokenStart),
      name: e,
      children: r
    };
  }
  function oe(e) {
    this.token(16, ":");
    this.token(16, ":");
    if (e.children === null) {
      this.token(1, e.name);
    } else {
      this.token(2, e.name + "(");
      this.children(e);
      this.token(22, ")");
    }
  }
  function ot() {
    this.skipSC();
    switch (this.tokenType) {
      case 10:
        return this.Number();
      case 2:
        return this.Function(this.readSequence, this.scope.Value);
      default:
        this.error("Number of function is expected");
    }
  }
  let on = "Ratio";
  let or = {
    left: ["Number", "Function"],
    right: ["Number", "Function", null]
  };
  function oi() {
    let e = this.tokenStart;
    let t = ot.call(this);
    let n = null;
    this.skipSC();
    if (this.isDelim(47)) {
      this.eatDelim(47);
      n = ot.call(this);
    }
    return {
      type: "Ratio",
      loc: this.getLocation(e, this.tokenStart),
      left: t,
      right: n
    };
  }
  function oo(e) {
    this.node(e.left);
    this.token(9, "/");
    if (e.right) {
      this.node(e.right);
    } else {
      this.node(10, 1);
    }
  }
  function oa() {
    if (this.tokenIndex > 0 && this.lookupType(-1) === 13) {
      if (this.tokenIndex > 1) {
        return this.getTokenStart(this.tokenIndex - 1);
      } else {
        return this.firstCharOffset;
      }
    } else {
      return this.tokenStart;
    }
  }
  let os = "Raw";
  let ol = {
    value: String
  };
  function oc(e, t) {
    let n;
    let r = this.getTokenStart(this.tokenIndex);
    this.skipUntilBalanced(this.tokenIndex, e || this.consumeUntilBalanceEnd);
    n = t && this.tokenStart > r ? oa.call(this) : this.tokenStart;
    return {
      type: "Raw",
      loc: this.getLocation(r, n),
      value: this.substring(r, n)
    };
  }
  function ou(e) {
    this.tokenize(e.value);
  }
  function oh() {
    return this.Raw(this.consumeUntilLeftCurlyBracket, true);
  }
  function op() {
    let e = this.SelectorList();
    if (e.type !== "Raw" && this.eof === false && this.tokenType !== 23) {
      this.error();
    }
    return e;
  }
  let od = "Rule";
  let om = "rule";
  let of = {
    prelude: ["SelectorList", "Raw"],
    block: ["Block"]
  };
  function og() {
    let e;
    let t;
    let n = this.tokenIndex;
    let r = this.tokenStart;
    e = this.parseRulePrelude ? this.parseWithFallback(op, oh) : oh.call(this, n);
    t = this.Block(true);
    return {
      type: "Rule",
      loc: this.getLocation(r, this.tokenStart),
      prelude: e,
      block: t
    };
  }
  function ob(e) {
    this.node(e.prelude);
    this.node(e.block);
  }
  let oy = "Scope";
  let ok = {
    root: ["SelectorList", "Raw", null],
    limit: ["SelectorList", "Raw", null]
  };
  function ox() {
    let e = null;
    let t = null;
    this.skipSC();
    let n = this.tokenStart;
    if (this.tokenType === 21) {
      this.next();
      this.skipSC();
      e = this.parseWithFallback(this.SelectorList, () => this.Raw(false, true));
      this.skipSC();
      this.eat(22);
    }
    if (this.lookupNonWSType(0) === 1) {
      this.skipSC();
      this.eatIdent("to");
      this.skipSC();
      this.eat(21);
      this.skipSC();
      t = this.parseWithFallback(this.SelectorList, () => this.Raw(false, true));
      this.skipSC();
      this.eat(22);
    }
    return {
      type: "Scope",
      loc: this.getLocation(n, this.tokenStart),
      root: e,
      limit: t
    };
  }
  function ov(e) {
    if (e.root) {
      this.token(21, "(");
      this.node(e.root);
      this.token(22, ")");
    }
    if (e.limit) {
      this.token(1, "to");
      this.token(21, "(");
      this.node(e.limit);
      this.token(22, ")");
    }
  }
  let ow = "Selector";
  let oS = {
    children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator"]]
  };
  function oC() {
    let e = this.readSequence(this.scope.Selector);
    if (this.getFirstListNode(e) === null) {
      this.error("Selector is expected");
    }
    return {
      type: "Selector",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function oz(e) {
    this.children(e);
  }
  let oA = "SelectorList";
  let oL = "selector";
  let oT = {
    children: [["Selector", "Raw"]]
  };
  function oO() {
    let e = this.createList();
    while (!this.eof) {
      e.push(this.Selector());
      if (this.tokenType === 18) {
        this.next();
        continue;
      }
      break;
    }
    return {
      type: "SelectorList",
      loc: this.getLocationFromList(e),
      children: e
    };
  }
  function oD(e) {
    this.children(e, () => this.token(18, ","));
  }
  function oE(e) {
    let t = e.length;
    let n = e.charCodeAt(0);
    let r = +(n === 34 || n === 39);
    let i = r === 1 && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1;
    let o = "";
    for (let n = r; n <= i; n++) {
      let r = e.charCodeAt(n);
      if (r === 92) {
        if (n === i) {
          if (n !== t - 1) {
            o = e.substr(n + 1);
          }
          break;
        }
        if (ep(92, r = e.charCodeAt(++n))) {
          let t = n - 1;
          let r = eC(e, t);
          n = r - 1;
          o += eT(e.substring(t + 1, r));
        } else if (r === 13 && e.charCodeAt(n + 1) === 10) {
          n++;
        }
      } else {
        o += e[n];
      }
    }
    return o;
  }
  let oP = "String";
  let oI = {
    value: String
  };
  function oN() {
    return {
      type: "String",
      loc: this.getLocation(this.tokenStart, this.tokenEnd),
      value: oE(this.consume(5))
    };
  }
  function oj(e) {
    this.token(5, function (e, t) {
      let n = 34;
      let r = "";
      let i = false;
      for (let t = 0; t < e.length; t++) {
        let o = e.charCodeAt(t);
        if (o === 0) {
          r += "�";
          continue;
        }
        if (o <= 31 || o === 127) {
          r += "\\" + o.toString(16);
          i = true;
          continue;
        }
        if (o === n || o === 92) {
          r += "\\" + e.charAt(t);
        } else {
          if (i && (ea(o) || eh(o))) {
            r += " ";
          }
          r += e.charAt(t);
        }
        i = false;
      }
      return "\"" + r + "\"";
    }(e.value));
  }
  function oF() {
    return this.Raw(null, false);
  }
  let oR = "StyleSheet";
  let o_ = "stylesheet";
  let oM = {
    children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]]
  };
  function oB() {
    let e;
    let t = this.tokenStart;
    let n = this.createList();
    while (!this.eof) {
      switch (this.tokenType) {
        case 13:
          this.next();
          continue;
        case 25:
          if (this.charCodeAt(this.tokenStart + 2) !== 33) {
            this.next();
            continue;
          }
          e = this.Comment();
          break;
        case 14:
          e = this.CDO();
          break;
        case 15:
          e = this.CDC();
          break;
        case 3:
          e = this.parseWithFallback(this.Atrule, oF);
          break;
        default:
          e = this.parseWithFallback(this.Rule, oF);
      }
      n.push(e);
    }
    return {
      type: "StyleSheet",
      loc: this.getLocation(t, this.tokenStart),
      children: n
    };
  }
  function oW(e) {
    this.children(e);
  }
  let oq = "SupportsDeclaration";
  let oU = {
    declaration: "Declaration"
  };
  function oV() {
    let e = this.tokenStart;
    this.eat(21);
    this.skipSC();
    let t = this.Declaration();
    if (!this.eof) {
      this.eat(22);
    }
    return {
      type: "SupportsDeclaration",
      loc: this.getLocation(e, this.tokenStart),
      declaration: t
    };
  }
  function oK(e) {
    this.token(21, "(");
    this.node(e.declaration);
    this.token(22, ")");
  }
  function oG() {
    if (this.tokenType !== 1 && this.isDelim(42) === false) {
      this.error("Identifier or asterisk is expected");
    }
    this.next();
  }
  let oH = "TypeSelector";
  let o$ = {
    name: String
  };
  function oQ() {
    let e = this.tokenStart;
    if (this.isDelim(124)) {
      this.next();
      oG.call(this);
    } else {
      oG.call(this);
      if (this.isDelim(124)) {
        this.next();
        oG.call(this);
      }
    }
    return {
      type: "TypeSelector",
      loc: this.getLocation(e, this.tokenStart),
      name: this.substrToCursor(e)
    };
  }
  function oX(e) {
    this.tokenize(e.name);
  }
  function oY(e, t) {
    let n = 0;
    for (let r = this.tokenStart + e; r < this.tokenEnd; r++) {
      let i = this.charCodeAt(r);
      if (i === 45 && t && n !== 0) {
        oY.call(this, e + n + 1, false);
        return -1;
      }
      if (!ea(i)) {
        this.error(t && n !== 0 ? "Hyphen minus" + (n < 6 ? " or hex digit" : "") + " is expected" : n < 6 ? "Hex digit is expected" : "Unexpected input", r);
      }
      if (++n > 6) {
        this.error("Too many hex digits", r);
      }
    }
    this.next();
    return n;
  }
  function oZ(e) {
    let t = 0;
    while (this.isDelim(63)) {
      if (++t > e) {
        this.error("Too many question marks");
      }
      this.next();
    }
  }
  function oJ(e) {
    if (this.charCodeAt(this.tokenStart) !== e) {
      this.error((e === 43 ? "Plus sign" : "Hyphen minus") + " is expected");
    }
  }
  function o1() {
    let e = 0;
    switch (this.tokenType) {
      case 10:
        e = oY.call(this, 1, true);
        if (this.isDelim(63)) {
          oZ.call(this, 6 - e);
          break;
        }
        if (this.tokenType === 12 || this.tokenType === 10) {
          oJ.call(this, 45);
          oY.call(this, 1, false);
        }
        break;
      case 12:
        if ((e = oY.call(this, 1, true)) > 0) {
          oZ.call(this, 6 - e);
        }
        break;
      default:
        this.eatDelim(43);
        if (this.tokenType === 1) {
          if ((e = oY.call(this, 0, true)) > 0) {
            oZ.call(this, 6 - e);
          }
          break;
        }
        if (this.isDelim(63)) {
          this.next();
          oZ.call(this, 5);
          break;
        }
        this.error("Hex digit or question mark is expected");
    }
  }
  let o0 = "UnicodeRange";
  let o2 = {
    value: String
  };
  function o3() {
    let e = this.tokenStart;
    this.eatIdent("u");
    o1.call(this);
    return {
      type: "UnicodeRange",
      loc: this.getLocation(e, this.tokenStart),
      value: this.substrToCursor(e)
    };
  }
  function o4(e) {
    this.tokenize(e.value);
  }
  let o5 = "Url";
  let o9 = {
    value: String
  };
  function o6() {
    let e;
    let t = this.tokenStart;
    switch (this.tokenType) {
      case 7:
        e = function (e) {
          let t = e.length;
          let n = 4;
          let r = e.charCodeAt(t - 1) === 41 ? t - 2 : t - 1;
          let i = "";
          while (n < r && eh(e.charCodeAt(n))) {
            n++;
          }
          while (n < r && eh(e.charCodeAt(r))) {
            r--;
          }
          for (let o = n; o <= r; o++) {
            let n = e.charCodeAt(o);
            if (n === 92) {
              if (o === r) {
                if (o !== t - 1) {
                  i = e.substr(o + 1);
                }
                break;
              }
              if (ep(92, n = e.charCodeAt(++o))) {
                let t = o - 1;
                let n = eC(e, t);
                o = n - 1;
                i += eT(e.substring(t + 1, n));
              } else if (n === 13 && e.charCodeAt(o + 1) === 10) {
                o++;
              }
            } else {
              i += e[o];
            }
          }
          return i;
        }(this.consume(7));
        break;
      case 2:
        if (!this.cmpStr(this.tokenStart, this.tokenEnd, "url(")) {
          this.error("Function name must be `url`");
        }
        this.eat(2);
        this.skipSC();
        e = oE(this.consume(5));
        this.skipSC();
        if (!this.eof) {
          this.eat(22);
        }
        break;
      default:
        this.error("Url or Function is expected");
    }
    return {
      type: "Url",
      loc: this.getLocation(t, this.tokenStart),
      value: e
    };
  }
  function o7(e) {
    this.token(7, function (e) {
      let t = "";
      let n = false;
      for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        if (i === 0) {
          t += "�";
          continue;
        }
        if (i <= 31 || i === 127) {
          t += "\\" + i.toString(16);
          n = true;
          continue;
        }
        if (i === 32 || i === 92 || i === 34 || i === 39 || i === 40 || i === 41) {
          t += "\\" + e.charAt(r);
        } else {
          if (n && ea(i)) {
            t += " ";
          }
          t += e.charAt(r);
        }
        n = false;
      }
      return "url(" + t + ")";
    }(e.value));
  }
  let o8 = "Value";
  let ae = {
    children: [[]]
  };
  function at() {
    let e = this.tokenStart;
    let t = this.readSequence(this.scope.Value);
    return {
      type: "Value",
      loc: this.getLocation(e, this.tokenStart),
      children: t
    };
  }
  function an(e) {
    this.children(e);
  }
  let ar = Object.freeze({
    type: "WhiteSpace",
    loc: null,
    value: " "
  });
  let ai = "WhiteSpace";
  let ao = {
    value: String
  };
  function aa() {
    this.eat(13);
    return ar;
  }
  function as(e) {
    this.token(13, e.value);
  }
  function al(e) {
    switch (this.tokenType) {
      case 4:
        return this.Hash();
      case 18:
        return this.Operator();
      case 21:
        return this.Parentheses(this.readSequence, e.recognizer);
      case 19:
        return this.Brackets(this.readSequence, e.recognizer);
      case 5:
        return this.String();
      case 12:
        return this.Dimension();
      case 11:
        return this.Percentage();
      case 10:
        return this.Number();
      case 2:
        if (this.cmpStr(this.tokenStart, this.tokenEnd, "url(")) {
          return this.Url();
        } else {
          return this.Function(this.readSequence, e.recognizer);
        }
      case 7:
        return this.Url();
      case 1:
        if (this.cmpChar(this.tokenStart, 117) && this.cmpChar(this.tokenStart + 1, 43)) {
          return this.UnicodeRange();
        }
        return this.Identifier();
      case 9:
        {
          let e = this.charCodeAt(this.tokenStart);
          if (e === 47 || e === 42 || e === 43 || e === 45) {
            return this.Operator();
          }
          if (e === 35) {
            this.error("Hex or identifier is expected", this.tokenStart + 1);
          }
        }
    }
  }
  var ac = {
    getNode: al
  };
  var au = {
    onWhiteSpace: function (e, t) {
      if (t.last !== null && t.last.type !== "Combinator" && e !== null && e.type !== "Combinator") {
        t.push({
          type: "Combinator",
          loc: null,
          name: " "
        });
      }
    },
    getNode: function () {
      switch (this.tokenType) {
        case 19:
          return this.AttributeSelector();
        case 4:
          return this.IdSelector();
        case 16:
          if (this.lookupType(1) === 16) {
            return this.PseudoElementSelector();
          }
          return this.PseudoClassSelector();
        case 1:
          return this.TypeSelector();
        case 10:
        case 11:
          return this.Percentage();
        case 12:
          if (this.charCodeAt(this.tokenStart) === 46) {
            this.error("Identifier is expected", this.tokenStart + 1);
          }
          break;
        case 9:
          switch (this.charCodeAt(this.tokenStart)) {
            case 43:
            case 62:
            case 126:
            case 47:
              return this.Combinator();
            case 46:
              return this.ClassSelector();
            case 42:
            case 124:
              return this.TypeSelector();
            case 35:
              return this.IdSelector();
            case 38:
              return this.NestingSelector();
          }
      }
    }
  };
  function ah(e) {
    return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
  }
  var ap = {
    getNode: al,
    onWhiteSpace(e, t) {
      if (ah(e)) {
        e.value = " " + e.value;
      }
      if (ah(t.last)) {
        t.last.value += " ";
      }
    },
    expression: function () {
      return this.createSingleNodeList(this.Raw(null, false));
    },
    var: function () {
      let e = this.createList();
      this.skipSC();
      e.push(this.Identifier());
      this.skipSC();
      if (this.tokenType === 18) {
        e.push(this.Operator());
        let t = this.tokenIndex;
        let n = this.parseCustomProperty ? this.Value(null) : this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
        if (n.type === "Value" && n.children.isEmpty) {
          for (let e = t - this.tokenIndex; e <= 0; e++) {
            if (this.lookupType(e) === 13) {
              n.children.appendData({
                type: "WhiteSpace",
                loc: null,
                value: " "
              });
              break;
            }
          }
        }
        e.push(n);
      }
      return e;
    }
  };
  let ad = new Set(["none", "and", "not", "or"]);
  function am(e, t) {
    return this.parseWithFallback(() => {
      try {
        return e.call(this);
      } finally {
        this.skipSC();
        if (this.lookupNonWSType(0) !== 22) {
          this.error();
        }
      }
    }, t || (() => this.Raw(null, true)));
  }
  let af = {
    layer() {
      this.skipSC();
      let e = this.createList();
      let t = am.call(this, this.Layer);
      if (t.type !== "Raw" || t.value !== "") {
        e.push(t);
      }
      return e;
    },
    supports() {
      this.skipSC();
      let e = this.createList();
      let t = am.call(this, this.Declaration, () => am.call(this, () => this.Condition("supports")));
      if (t.type !== "Raw" || t.value !== "") {
        e.push(t);
      }
      return e;
    }
  };
  let ag = {
    parse() {
      return this.createSingleNodeList(this.SelectorList());
    }
  };
  let ab = {
    parse() {
      return this.createSingleNodeList(this.Selector());
    }
  };
  let ay = {
    parse() {
      return this.createSingleNodeList(this.Nth());
    }
  };
  let {
    tokenize: ak,
    parse: ax,
    generate: av,
    lexer: aw,
    createLexer: aS,
    walk: aC,
    find: az,
    findLast: aA,
    findAll: aL,
    toPlainObject: aT,
    fromPlainObject: aO,
    fork: aD
  } = function e(t) {
    let n = function (e) {
      let t = "";
      let n = "<unknown>";
      let r = false;
      let i = eU;
      let o = false;
      let a = new eP();
      let s = Object.assign(new eN(), function (e) {
        let t = {
          context: Object.create(null),
          features: Object.assign(Object.create(null), e.features),
          scope: Object.assign(Object.create(null), e.scope),
          atrule: eV(e.atrule),
          pseudo: eV(e.pseudo),
          node: eV(e.node)
        };
        for (let [n, r] of Object.entries(e.parseContext)) {
          switch (typeof r) {
            case "function":
              t.context[n] = r;
              break;
            case "string":
              t.context[n] = function (e) {
                return function () {
                  return this[e]();
                };
              }(r);
          }
        }
        return {
          config: t,
          ...t,
          ...t.node
        };
      }(e || {}), {
        parseAtrulePrelude: true,
        parseRulePrelude: true,
        parseValue: true,
        parseCustomProperty: false,
        readSequence: eq,
        consumeUntilBalanceEnd: () => 0,
        consumeUntilLeftCurlyBracket: e => +(e === 123),
        consumeUntilLeftCurlyBracketOrSemicolon: e => +(e === 123 || e === 59),
        consumeUntilExclamationMarkOrSemicolon: e => +(e === 33 || e === 59),
        consumeUntilSemicolonIncluded: e => (e === 59) * 2,
        createList: () => new eR(),
        createSingleNodeList: e => new eR().appendData(e),
        getFirstListNode: e => e && e.first,
        getLastListNode: e => e && e.last,
        parseWithFallback(e, t) {
          let n = this.tokenIndex;
          try {
            return e.call(this);
          } catch (r) {
            if (o) {
              throw r;
            }
            this.skip(n - this.tokenIndex);
            let e = t.call(this);
            o = true;
            i(r, e);
            o = false;
            return e;
          }
        },
        lookupNonWSType(e) {
          let t;
          do {
            if ((t = this.lookupType(e++)) !== 13 && t !== 25) {
              return t;
            }
          } while (t !== 0);
          return 0;
        },
        charCodeAt: e => e >= 0 && e < t.length ? t.charCodeAt(e) : 0,
        substring: (e, n) => t.substring(e, n),
        substrToCursor(e) {
          return this.source.substring(e, this.tokenStart);
        },
        cmpChar: (e, n) => ex(t, e, n),
        cmpStr: (e, n, r) => ev(t, e, n, r),
        consume(e) {
          let t = this.tokenStart;
          this.eat(e);
          return this.substrToCursor(t);
        },
        consumeFunctionName() {
          let e = t.substring(this.tokenStart, this.tokenEnd - 1);
          this.eat(2);
          return e;
        },
        consumeNumber(e) {
          let n = t.substring(this.tokenStart, eA(t, this.tokenStart));
          this.eat(e);
          return n;
        },
        eat(e) {
          if (this.tokenType !== e) {
            let t = eO[e].slice(0, -6).replace(/-/g, " ").replace(/^./, e => e.toUpperCase());
            let n = `${/[[\](){}]/.test(t) ? `"${t}"` : t} is expected`;
            let r = this.tokenStart;
            switch (e) {
              case 1:
                if (this.tokenType === 2 || this.tokenType === 7) {
                  r = this.tokenEnd - 1;
                  n = "Identifier is expected but function found";
                } else {
                  n = "Identifier is expected";
                }
                break;
              case 4:
                if (this.isDelim(35)) {
                  this.next();
                  r++;
                  n = "Name is expected";
                }
                break;
              case 11:
                if (this.tokenType === 10) {
                  r = this.tokenEnd;
                  n = "Percent sign is expected";
                }
            }
            this.error(n, r);
          }
          this.next();
        },
        eatIdent(e) {
          if (this.tokenType !== 1 || this.lookupValue(0, e) === false) {
            this.error(`Identifier "${e}" is expected`);
          }
          this.next();
        },
        eatDelim(e) {
          if (!this.isDelim(e)) {
            this.error(`Delim "${String.fromCharCode(e)}" is expected`);
          }
          this.next();
        },
        getLocation: (e, t) => r ? a.getLocationRange(e, t, n) : null,
        getLocationFromList(e) {
          if (r) {
            let t = this.getFirstListNode(e);
            let r = this.getLastListNode(e);
            return a.getLocationRange(t !== null ? t.loc.start.offset - a.startOffset : this.tokenStart, r !== null ? r.loc.end.offset - a.startOffset : this.tokenStart, n);
          }
          return null;
        },
        error(e, n) {
          let r = n !== undefined && n < t.length ? a.getLocation(n) : this.eof ? a.getLocation(function (e, t) {
            for (; t >= 0 && eh(e.charCodeAt(t)); t--);
            return t + 1;
          }(t, t.length - 1)) : a.getLocation(this.tokenStart);
          throw new eW(e || "Unexpected input", t, r.offset, r.line, r.column, a.startLine, a.startColumn);
        }
      });
      return Object.assign(function (e, l) {
        t = e;
        l = l || {};
        s.setSource(t, ej);
        a.setSource(t, l.offset, l.line, l.column);
        n = l.filename || "<unknown>";
        r = !!l.positions;
        i = typeof l.onParseError == "function" ? l.onParseError : eU;
        o = false;
        s.parseAtrulePrelude = !("parseAtrulePrelude" in l) || !!l.parseAtrulePrelude;
        s.parseRulePrelude = !("parseRulePrelude" in l) || !!l.parseRulePrelude;
        s.parseValue = !("parseValue" in l) || !!l.parseValue;
        s.parseCustomProperty = "parseCustomProperty" in l && !!l.parseCustomProperty;
        let {
          context: c = "default",
          onComment: u
        } = l;
        if (c in s.context == false) {
          throw Error("Unknown context `" + c + "`");
        }
        if (typeof u == "function") {
          s.forEachToken((e, n, r) => {
            if (e === 25) {
              let e = s.getLocation(n, r);
              u(ev(t, r - 2, r, "*/") ? t.slice(n + 2, r - 2) : t.slice(n + 2, r), e);
            }
          });
        }
        let h = s.context[c].call(s, l);
        if (!s.eof) {
          s.error();
        }
        return h;
      }, {
        SyntaxError: eW,
        config: s.config
      });
    }(t);
    let r = function (e) {
      let t = function (e) {
        let t = {};
        for (let n in e.node) {
          if (e0.call(e.node, n)) {
            let r = e.node[n];
            if (!r.structure) {
              throw Error("Missed `structure` field in `" + n + "` node type definition");
            }
            t[n] = function (e, t) {
              let n = t.structure;
              let r = [];
              for (let e in n) {
                if (e0.call(n, e) === false) {
                  continue;
                }
                let t = n[e];
                let i = {
                  name: e,
                  type: false,
                  nullable: false
                };
                if (!Array.isArray(t)) {
                  t = [t];
                }
                for (let e of t) {
                  if (e === null) {
                    i.nullable = true;
                  } else if (typeof e == "string") {
                    i.type = "node";
                  } else if (Array.isArray(e)) {
                    i.type = "list";
                  }
                }
                if (i.type) {
                  r.push(i);
                }
              }
              if (r.length) {
                return {
                  context: t.walkContext,
                  fields: r
                };
              } else {
                return null;
              }
            }(0, r);
          }
        }
        return t;
      }(e);
      let n = {};
      let r = {};
      let i = Symbol("break-walk");
      let o = Symbol("skip-node");
      for (let e in t) {
        if (e0.call(t, e) && t[e] !== null) {
          n[e] = e5(t[e], false);
          r[e] = e5(t[e], true);
        }
      }
      let a = e9(n);
      let s = e9(r);
      let l = function (e, l) {
        function c(e, t, n) {
          let r = u.call(m, e, t, n);
          return r === i || r !== o && (!!p.hasOwnProperty(e.type) && !!p[e.type](e, m, c, d) || h.call(m, e, t, n) === i);
        }
        let u = e2;
        let h = e2;
        let p = n;
        let d = (e, t, n, r) => e || c(t, n, r);
        let m = {
          break: i,
          skip: o,
          root: e,
          stylesheet: null,
          atrule: null,
          atrulePrelude: null,
          rule: null,
          selector: null,
          block: null,
          declaration: null,
          function: null
        };
        if (typeof l == "function") {
          u = l;
        } else if (l && (u = e3(l.enter), h = e3(l.leave), l.reverse && (p = r), l.visit)) {
          if (a.hasOwnProperty(l.visit)) {
            p = l.reverse ? s[l.visit] : a[l.visit];
          } else if (!t.hasOwnProperty(l.visit)) {
            throw Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
          }
          u = e4(u, l.visit);
          h = e4(h, l.visit);
        }
        if (u === e2 && h === e2) {
          throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        }
        c(e);
      };
      l.break = i;
      l.skip = o;
      l.find = function (e, t) {
        let n = null;
        l(e, function (e, r, o) {
          if (t.call(this, e, r, o)) {
            n = e;
            return i;
          }
        });
        return n;
      };
      l.findLast = function (e, t) {
        let n = null;
        l(e, {
          reverse: true,
          enter(e, r, o) {
            if (t.call(this, e, r, o)) {
              n = e;
              return i;
            }
          }
        });
        return n;
      };
      l.findAll = function (e, t) {
        let n = [];
        l(e, function (e, r, i) {
          if (t.call(this, e, r, i)) {
            n.push(e);
          }
        });
        return n;
      };
      return l;
    }(t);
    let o = function (e) {
      let t = new Map();
      for (let [n, r] of Object.entries(e.node)) {
        if (typeof (r.generate || r) == "function") {
          t.set(n, r.generate || r);
        }
      }
      return function (e, n) {
        let r = "";
        let o = 0;
        let a = {
          node(e) {
            if (t.has(e.type)) {
              t.get(e.type).call(s, e);
            } else {
              throw Error("Unknown node type: " + e.type);
            }
          },
          tokenBefore: eZ,
          token(e, t) {
            o = this.tokenBefore(o, e, t);
            this.emit(t, e, false);
            if (e === 9 && t.charCodeAt(0) === 92) {
              this.emit("\n", 13, true);
            }
          },
          emit(e) {
            r += e;
          },
          result: () => r
        };
        if (n) {
          if (typeof n.decorator == "function") {
            a = n.decorator(a);
          }
          if (n.sourceMap) {
            a = function (e) {
              let t = new sourceMapGenerator.SourceMapGenerator();
              let n = {
                line: 1,
                column: 0
              };
              let r = {
                line: 0,
                column: 0
              };
              let i = {
                line: 1,
                column: 0
              };
              let o = {
                generated: i
              };
              let a = 1;
              let s = 0;
              let l = false;
              let c = e.node;
              e.node = function (e) {
                if (e.loc && e.loc.start && eG.has(e.type)) {
                  let c = e.loc.start.line;
                  let u = e.loc.start.column - 1;
                  if (r.line !== c || r.column !== u) {
                    r.line = c;
                    r.column = u;
                    n.line = a;
                    n.column = s;
                    if (l) {
                      l = false;
                      if (n.line !== i.line || n.column !== i.column) {
                        t.addMapping(o);
                      }
                    }
                    l = true;
                    t.addMapping({
                      source: e.loc.source,
                      original: r,
                      generated: n
                    });
                  }
                }
                c.call(this, e);
                if (l && eG.has(e.type)) {
                  i.line = a;
                  i.column = s;
                }
              };
              let u = e.emit;
              e.emit = function (e, t, n) {
                for (let t = 0; t < e.length; t++) {
                  if (e.charCodeAt(t) === 10) {
                    a++;
                    s = 0;
                  } else {
                    s++;
                  }
                }
                u(e, t, n);
              };
              let h = e.result;
              e.result = function () {
                if (l) {
                  t.addMapping(o);
                }
                return {
                  css: h(),
                  map: t
                };
              };
              return e;
            }(a);
          }
          if (n.mode in i) {
            a.tokenBefore = i[n.mode];
          }
        }
        let s = {
          node: e => a.node(e),
          children: eJ,
          token: (e, t) => a.token(e, t),
          tokenize: e1
        };
        a.node(e);
        return a.result();
      };
    }(t);
    let {
      fromPlainObject: a,
      toPlainObject: s
    } = {
      fromPlainObject: e => {
        r(e, {
          enter(e) {
            if (e.children && e.children instanceof eR == false) {
              e.children = new eR().fromArray(e.children);
            }
          }
        });
        return e;
      },
      toPlainObject: e => {
        r(e, {
          leave(e) {
            if (e.children && e.children instanceof eR) {
              e.children = e.children.toArray();
            }
          }
        });
        return e;
      }
    };
    let l = {
      lexer: null,
      createLexer: e => new nf(e, l, l.lexer.structure),
      tokenize: ej,
      parse: n,
      generate: o,
      walk: r,
      find: r.find,
      findLast: r.findLast,
      findAll: r.findAll,
      fromPlainObject: a,
      toPlainObject: s,
      fork(n) {
        let r = ny({}, t);
        return e(typeof n == "function" ? n(r) : ny(r, n));
      }
    };
    l.lexer = new nf({
      generic: t.generic,
      cssWideKeywords: t.cssWideKeywords,
      units: t.units,
      types: t.types,
      atrules: t.atrules,
      properties: t.properties,
      node: t.node
    }, l);
    return l;
  }(ny({}, {
    generic: true,
    cssWideKeywords: tu,
    generic: true,
    cssWideKeywords: ["initial", "inherit", "unset", "revert", "revert-layer"],
    units: {
      angle: ["deg", "grad", "rad", "turn"],
      decibel: ["db"],
      flex: ["fr"],
      frequency: ["hz", "khz"],
      length: ["cm", "mm", "q", "in", "pt", "pc", "px", "em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh", "vw", "svw", "lvw", "dvw", "vh", "svh", "lvh", "dvh", "vi", "svi", "lvi", "dvi", "vb", "svb", "lvb", "dvb", "vmin", "svmin", "lvmin", "dvmin", "vmax", "svmax", "lvmax", "dvmax", "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax"],
      resolution: ["dpi", "dpcm", "dppx", "x"],
      semitones: ["st"],
      time: ["s", "ms"]
    },
    types: {
      "abs()": "abs( <calc-sum> )",
      "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
      "acos()": "acos( <calc-sum> )",
      "alpha-value": "<number>|<percentage>",
      "angle-percentage": "<angle>|<percentage>",
      "angular-color-hint": "<angle-percentage>",
      "angular-color-stop": "<color>&&<color-stop-angle>?",
      "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
      "animateable-feature": "scroll-position|contents|<custom-ident>",
      "asin()": "asin( <calc-sum> )",
      "atan()": "atan( <calc-sum> )",
      "atan2()": "atan2( <calc-sum> , <calc-sum> )",
      attachment: "scroll|fixed|local",
      "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
      "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
      "attr-modifier": "i|s",
      "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
      "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
      "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
      axis: "block|inline|x|y",
      "baseline-position": "[first|last]? baseline",
      "basic-shape": "<inset()>|<xywh()>|<rect()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
      "bg-image": "none|<image>",
      "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
      "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
      "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
      "blur()": "blur( <length> )",
      "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
      box: "border-box|padding-box|content-box",
      "brightness()": "brightness( <number-percentage> )",
      "calc()": "calc( <calc-sum> )",
      "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
      "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
      "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
      "calc-constant": "e|pi|infinity|-infinity|NaN",
      "cf-final-image": "<image>|<color>",
      "cf-mixing-image": "<percentage>?&&<image>",
      "circle()": "circle( [<shape-radius>]? [at <position>]? )",
      "clamp()": "clamp( <calc-sum>#{3} )",
      "class-selector": "'.' <ident-token>",
      "clip-source": "<url>",
      color: "<color-base>|currentColor|<system-color>|<device-cmyk()>|<light-dark()>|<-non-standard-color>",
      "color-stop": "<color-stop-length>|<color-stop-angle>",
      "color-stop-angle": "<angle-percentage>{1,2}",
      "color-stop-length": "<length-percentage>{1,2}",
      "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
      "color-interpolation-method": "in [<rectangular-color-space>|<polar-color-space> <hue-interpolation-method>?|<custom-color-space>]",
      combinator: "'>'|'+'|'~'|['|' '|']",
      "common-lig-values": "[common-ligatures|no-common-ligatures]",
      "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
      "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
      "compositing-operator": "add|subtract|intersect|exclude",
      "compound-selector": "[<type-selector>? <subclass-selector>*]!",
      "compound-selector-list": "<compound-selector>#",
      "complex-selector": "<complex-selector-unit> [<combinator>? <complex-selector-unit>]*",
      "complex-selector-list": "<complex-selector>#",
      "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
      "contextual-alt-values": "[contextual|no-contextual]",
      "content-distribution": "space-between|space-around|space-evenly|stretch",
      "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
      "content-position": "center|start|end|flex-start|flex-end",
      "content-replacement": "<image>",
      "contrast()": "contrast( [<number-percentage>] )",
      "cos()": "cos( <calc-sum> )",
      counter: "<counter()>|<counters()>",
      "counter()": "counter( <counter-name> , <counter-style>? )",
      "counter-name": "<custom-ident>",
      "counter-style": "<counter-style-name>|symbols( )",
      "counter-style-name": "<custom-ident>",
      "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
      "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
      "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
      "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
      "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
      "display-box": "contents|none",
      "display-inside": "flow|flow-root|table|flex|grid|ruby",
      "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
      "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
      "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
      "display-outside": "block|inline|run-in",
      "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
      "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
      "east-asian-width-values": "[full-width|proportional-width]",
      "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
      "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
      "ending-shape": "circle|ellipse",
      "env()": "env( <custom-ident> , <declaration-value>? )",
      "exp()": "exp( <calc-sum> )",
      "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
      "family-name": "<string>|<custom-ident>+",
      "feature-tag-value": "<string> [<integer>|on|off]?",
      "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
      "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
      "feature-value-block-list": "<feature-value-block>+",
      "feature-value-declaration": "<custom-ident> : <integer>+ ;",
      "feature-value-declaration-list": "<feature-value-declaration>",
      "feature-value-name": "<custom-ident>",
      "fill-rule": "nonzero|evenodd",
      "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
      "filter-function-list": "[<filter-function>|<url>]+",
      "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
      "fixed-breadth": "<length-percentage>",
      "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
      "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
      "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
      "font-variant-css21": "[normal|small-caps]",
      "font-weight-absolute": "normal|bold|<number [1,1000]>",
      "frequency-percentage": "<frequency>|<percentage>",
      "general-enclosed": "[<function-token> <any-value>? )]|[( <any-value>? )]",
      "generic-family": "<generic-script-specific>|<generic-complete>|<generic-incomplete>|<-non-standard-generic-family>",
      "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
      "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
      gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
      "grayscale()": "grayscale( <number-percentage> )",
      "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
      "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
      "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
      "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
      hue: "<number>|<angle>",
      "hue-rotate()": "hue-rotate( <angle> )",
      "hue-interpolation-method": "[shorter|longer|increasing|decreasing] hue",
      "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
      "hypot()": "hypot( <calc-sum># )",
      image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
      "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
      "image-set()": "image-set( <image-set-option># )",
      "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
      "image-src": "<url>|<string>",
      "image-tags": "ltr|rtl",
      "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
      "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
      "invert()": "invert( <number-percentage> )",
      "keyframes-name": "<custom-ident>|<string>",
      "keyframe-block": "<keyframe-selector># { <declaration-list> }",
      "keyframe-block-list": "<keyframe-block>+",
      "keyframe-selector": "from|to|<percentage>|<timeline-range-name> <percentage>",
      "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
      "layer()": "layer( <layer-name> )",
      "layer-name": "<ident> ['.' <ident>]*",
      "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
      "leader()": "leader( <leader-type> )",
      "leader-type": "dotted|solid|space|<string>",
      "length-percentage": "<length>|<percentage>",
      "light-dark()": "light-dark( <color> , <color> )",
      "line-names": "'[' <custom-ident>* ']'",
      "line-name-list": "[<line-names>|<name-repeat>]+",
      "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
      "line-width": "<length>|thin|medium|thick",
      "linear-color-hint": "<length-percentage>",
      "linear-color-stop": "<color> <color-stop-length>?",
      "linear-gradient()": "linear-gradient( [[<angle>|to <side-or-corner>]||<color-interpolation-method>]? , <color-stop-list> )",
      "log()": "log( <calc-sum> , <calc-sum>? )",
      "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
      "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
      "mask-reference": "none|<image>|<mask-source>",
      "mask-source": "<url>",
      "masking-mode": "alpha|luminance|match-source",
      "matrix()": "matrix( <number>#{6} )",
      "matrix3d()": "matrix3d( <number>#{16} )",
      "max()": "max( <calc-sum># )",
      "media-and": "<media-in-parens> [and <media-in-parens>]+",
      "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
      "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
      "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
      "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
      "media-not": "not <media-in-parens>",
      "media-or": "<media-in-parens> [or <media-in-parens>]+",
      "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
      "media-query-list": "<media-query>#",
      "media-type": "<ident>",
      "mf-boolean": "<mf-name>",
      "mf-name": "<ident>",
      "mf-plain": "<mf-name> : <mf-value>",
      "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
      "mf-value": "<number>|<dimension>|<ident>|<ratio>",
      "min()": "min( <calc-sum># )",
      "minmax()": "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
      "mod()": "mod( <calc-sum> , <calc-sum> )",
      "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
      "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",
      "namespace-prefix": "<ident>",
      "ns-prefix": "[<ident-token>|'*']? '|'",
      "number-percentage": "<number>|<percentage>",
      "numeric-figure-values": "[lining-nums|oldstyle-nums]",
      "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
      "numeric-spacing-values": "[proportional-nums|tabular-nums]",
      nth: "<an-plus-b>|even|odd",
      "opacity()": "opacity( [<number-percentage>] )",
      "overflow-position": "unsafe|safe",
      "outline-radius": "<length>|<percentage>",
      "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
      "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
      "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
      "page-selector-list": "[<page-selector>#]?",
      "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
      "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
      "path()": "path( [<fill-rule> ,]? <string> )",
      "paint()": "paint( <ident> , <declaration-value>? )",
      "perspective()": "perspective( [<length [0,∞]>|none] )",
      "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
      "polar-color-space": "hsl|hwb|lch|oklch",
      position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
      "pow()": "pow( <calc-sum> , <calc-sum> )",
      "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
      "pseudo-element-selector": "':' <pseudo-class-selector>|<legacy-pseudo-element-selector>",
      "pseudo-page": ": [left|right|first|blank]",
      quote: "open-quote|close-quote|no-open-quote|no-close-quote",
      "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
      ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
      "ray()": "ray( <angle>&&<ray-size>?&&contain?&&[at <position>]? )",
      "ray-size": "closest-side|closest-corner|farthest-side|farthest-corner|sides",
      "rectangular-color-space": "srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|lab|oklab|xyz|xyz-d50|xyz-d65",
      "relative-selector": "<combinator>? <complex-selector>",
      "relative-selector-list": "<relative-selector>#",
      "relative-size": "larger|smaller",
      "rem()": "rem( <calc-sum> , <calc-sum> )",
      "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
      "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
      "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
      "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
      "reversed-counter-name": "reversed( <counter-name> )",
      "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
      "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
      "rotate()": "rotate( [<angle>|<zero>] )",
      "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
      "rotateX()": "rotateX( [<angle>|<zero>] )",
      "rotateY()": "rotateY( [<angle>|<zero>] )",
      "rotateZ()": "rotateZ( [<angle>|<zero>] )",
      "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
      "rounding-strategy": "nearest|up|down|to-zero",
      "saturate()": "saturate( <number-percentage> )",
      "scale()": "scale( [<number>|<percentage>]#{1,2} )",
      "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
      "scaleX()": "scaleX( [<number>|<percentage>] )",
      "scaleY()": "scaleY( [<number>|<percentage>] )",
      "scaleZ()": "scaleZ( [<number>|<percentage>] )",
      "scroll()": "scroll( [<axis>||<scroller>]? )",
      scroller: "root|nearest|self",
      "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
      "shape-radius": "<length-percentage>|closest-side|farthest-side",
      "sign()": "sign( <calc-sum> )",
      "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
      "skewX()": "skewX( [<angle>|<zero>] )",
      "skewY()": "skewY( [<angle>|<zero>] )",
      "sepia()": "sepia( <number-percentage> )",
      shadow: "inset?&&<length>{2,4}&&<color>?",
      "shadow-t": "[<length>{2,3}&&<color>?]",
      shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
      "shape-box": "<box>|margin-box",
      "side-or-corner": "[left|right]||[top|bottom]",
      "sin()": "sin( <calc-sum> )",
      "single-animation": "<'animation-duration'>||<easing-function>||<'animation-delay'>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]||<single-animation-timeline>",
      "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
      "single-animation-fill-mode": "none|forwards|backwards|both",
      "single-animation-iteration-count": "infinite|<number>",
      "single-animation-play-state": "running|paused",
      "single-animation-timeline": "auto|none|<dashed-ident>|<scroll()>|<view()>",
      "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>||<transition-behavior-value>",
      "single-transition-property": "all|<custom-ident>",
      size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
      "sqrt()": "sqrt( <calc-sum> )",
      "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
      "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
      "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
      "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
      "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
      "supports-feature": "<supports-decl>|<supports-selector-fn>",
      "supports-decl": "( <declaration> )",
      "supports-selector-fn": "selector( <complex-selector> )",
      symbol: "<string>|<image>|<custom-ident>",
      "system-color": "AccentColor|AccentColorText|ActiveText|ButtonBorder|ButtonFace|ButtonText|Canvas|CanvasText|Field|FieldText|GrayText|Highlight|HighlightText|LinkText|Mark|MarkText|SelectedItem|SelectedItemText|VisitedText",
      "tan()": "tan( <calc-sum> )",
      target: "<target-counter()>|<target-counters()>|<target-text()>",
      "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
      "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
      "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
      "time-percentage": "<time>|<percentage>",
      "timeline-range-name": "cover|contain|entry|exit|entry-crossing|exit-crossing",
      "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
      "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
      "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
      "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
      "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
      "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
      "transform-list": "<transform-function>+",
      "transition-behavior-value": "normal|allow-discrete",
      "translate()": "translate( <length-percentage> , <length-percentage>? )",
      "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
      "translateX()": "translateX( <length-percentage> )",
      "translateY()": "translateY( <length-percentage> )",
      "translateZ()": "translateZ( <length> )",
      "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
      "type-selector": "<wq-name>|<ns-prefix>? '*'",
      "var()": "var( <custom-property-name> , <declaration-value>? )",
      "view()": "view( [<axis>||<'view-timeline-inset'>]? )",
      "viewport-length": "auto|<length-percentage>",
      "visual-box": "content-box|padding-box|border-box",
      "wq-name": "<ns-prefix>? <ident-token>",
      "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
      "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
      "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
      "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
      "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
      "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
      "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
      "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
      "-legacy-radial-gradient-shape": "circle|ellipse",
      "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
      "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
      "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
      "-non-standard-overflow": "overlay|-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
      "-non-standard-size": "intrinsic|min-intrinsic|-webkit-fill-available|-webkit-fit-content|-webkit-min-content|-webkit-max-content|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content",
      "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
      "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
      "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
      "-webkit-gradient-radius": "<length>|<percentage>",
      "-webkit-gradient-type": "linear|radial",
      "-webkit-mask-box-repeat": "repeat|stretch|round",
      "-ms-filter-function-list": "<-ms-filter-function>+",
      "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
      "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
      "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
      "absolute-color-base": "<hex-color>|<absolute-color-function>|<named-color>|transparent",
      "absolute-color-function": "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>",
      age: "child|young|old",
      "anchor-name": "<dashed-ident>",
      "attr-name": "<wq-name>",
      "attr-fallback": "<any-value>",
      "bg-clip": "<box>|border|text",
      bottom: "<length>|auto",
      "container-name": "<custom-ident>",
      "container-condition": "not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]",
      "coord-box": "content-box|padding-box|border-box|fill-box|stroke-box|view-box",
      "generic-voice": "[<age>? <gender> <integer>?]",
      gender: "male|female|neutral",
      "generic-script-specific": "generic( kai )|generic( fangsong )|generic( nastaliq )",
      "generic-complete": "serif|sans-serif|system-ui|cursive|fantasy|math|monospace",
      "generic-incomplete": "ui-serif|ui-sans-serif|ui-monospace|ui-rounded",
      "-non-standard-generic-family": "-apple-system|BlinkMacSystemFont",
      left: "<length>|auto",
      "color-base": "<hex-color>|<color-function>|<named-color>|<color-mix()>|transparent",
      "color-function": "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>",
      "device-cmyk()": "<legacy-device-cmyk-syntax>|<modern-device-cmyk-syntax>",
      "legacy-device-cmyk-syntax": "device-cmyk( <number>#{4} )",
      "modern-device-cmyk-syntax": "device-cmyk( <cmyk-component>{4} [/ [<alpha-value>|none]]? )",
      "cmyk-component": "<number>|<percentage>|none",
      "color-mix()": "color-mix( <color-interpolation-method> , [<color>&&<percentage [0,100]>?]#{2} )",
      "color-space": "<rectangular-color-space>|<polar-color-space>|<custom-color-space>",
      "custom-color-space": "<dashed-ident>",
      paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
      "palette-identifier": "<dashed-ident>",
      right: "<length>|auto",
      "scope-start": "<forgiving-selector-list>",
      "scope-end": "<forgiving-selector-list>",
      "forgiving-selector-list": "<complex-real-selector-list>",
      "forgiving-relative-selector-list": "<relative-real-selector-list>",
      "selector-list": "<complex-selector-list>",
      "complex-real-selector-list": "<complex-real-selector>#",
      "simple-selector-list": "<simple-selector>#",
      "relative-real-selector-list": "<relative-real-selector>#",
      "complex-selector-unit": "[<compound-selector>? <pseudo-compound-selector>*]!",
      "complex-real-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
      "relative-real-selector": "<combinator>? <complex-real-selector>",
      "pseudo-compound-selector": "<pseudo-element-selector> <pseudo-class-selector>*",
      "simple-selector": "<type-selector>|<subclass-selector>",
      "legacy-pseudo-element-selector": "':' [before|after|first-line|first-letter]",
      "single-animation-composition": "replace|add|accumulate",
      "svg-length": "<percentage>|<length>|<number>",
      "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
      top: "<length>|auto",
      x: "<number>",
      y: "<number>",
      declaration: "<ident-token> : <declaration-value>? ['!' important]?",
      "declaration-list": "[<declaration>? ';']* <declaration>?",
      url: "url( <string> <url-modifier>* )|<url-token>",
      "url-modifier": "<ident>|<function-token> <any-value> )",
      "number-zero-one": "<number [0,1]>",
      "number-one-or-greater": "<number [1,∞]>",
      "color()": "color( <colorspace-params> [/ [<alpha-value>|none]]? )",
      "colorspace-params": "[<predefined-rgb-params>|<xyz-params>]",
      "predefined-rgb-params": "<predefined-rgb> [<number>|<percentage>|none]{3}",
      "predefined-rgb": "srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020",
      "xyz-params": "<xyz-space> [<number>|<percentage>|none]{3}",
      "xyz-space": "xyz|xyz-d50|xyz-d65",
      "oklab()": "oklab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
      "oklch()": "oklch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
      "offset-path": "<ray()>|<url>|<basic-shape>",
      "rect()": "rect( [<length-percentage>|auto]{4} [round <'border-radius'>]? )",
      "xywh()": "xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [round <'border-radius'>]? )",
      "query-in-parens": "( <container-condition> )|( <size-feature> )|style( <style-query> )|<general-enclosed>",
      "size-feature": "<mf-plain>|<mf-boolean>|<mf-range>",
      "style-feature": "<declaration>",
      "style-query": "<style-condition>|<style-feature>",
      "style-condition": "not <style-in-parens>|<style-in-parens> [[and <style-in-parens>]*|[or <style-in-parens>]*]",
      "style-in-parens": "( <style-condition> )|( <style-feature> )|<general-enclosed>",
      "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box",
      "inset-area": "[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]",
      "position-area": "[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|center|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|center|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]",
      "anchor()": "anchor( <anchor-element>?&&<anchor-side> , <length-percentage>? )",
      "anchor-side": "inside|outside|top|left|right|bottom|start|end|self-start|self-end|<percentage>|center",
      "anchor-size()": "anchor-size( [<anchor-element>||<anchor-size>]? , <length-percentage>? )",
      "anchor-size": "width|height|block|inline|self-block|self-inline",
      "anchor-element": "<dashed-ident>",
      "try-size": "most-width|most-height|most-block-size|most-inline-size",
      "try-tactic": "flip-block||flip-inline||flip-start",
      "font-variant-css2": "normal|small-caps",
      "font-width-css3": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
      "system-family-name": "caption|icon|menu|message-box|small-caption|status-bar"
    },
    properties: {
      "--*": "<declaration-value>",
      "-ms-accelerator": "false|true",
      "-ms-block-progression": "tb|rl|bt|lr",
      "-ms-content-zoom-chaining": "none|chained",
      "-ms-content-zooming": "none|zoom",
      "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
      "-ms-content-zoom-limit-max": "<percentage>",
      "-ms-content-zoom-limit-min": "<percentage>",
      "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
      "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
      "-ms-content-zoom-snap-type": "none|proximity|mandatory",
      "-ms-filter": "<string>",
      "-ms-flow-from": "[none|<custom-ident>]#",
      "-ms-flow-into": "[none|<custom-ident>]#",
      "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
      "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
      "-ms-high-contrast-adjust": "auto|none",
      "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
      "-ms-hyphenate-limit-lines": "no-limit|<integer>",
      "-ms-hyphenate-limit-zone": "<percentage>|<length>",
      "-ms-ime-align": "auto|after",
      "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
      "-ms-scrollbar-3dlight-color": "<color>",
      "-ms-scrollbar-arrow-color": "<color>",
      "-ms-scrollbar-base-color": "<color>",
      "-ms-scrollbar-darkshadow-color": "<color>",
      "-ms-scrollbar-face-color": "<color>",
      "-ms-scrollbar-highlight-color": "<color>",
      "-ms-scrollbar-shadow-color": "<color>",
      "-ms-scrollbar-track-color": "<color>",
      "-ms-scroll-chaining": "chained|none",
      "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
      "-ms-scroll-limit-x-max": "auto|<length>",
      "-ms-scroll-limit-x-min": "<length>",
      "-ms-scroll-limit-y-max": "auto|<length>",
      "-ms-scroll-limit-y-min": "<length>",
      "-ms-scroll-rails": "none|railed",
      "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
      "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
      "-ms-scroll-snap-type": "none|proximity|mandatory",
      "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
      "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
      "-ms-scroll-translation": "none|vertical-to-horizontal",
      "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
      "-ms-touch-select": "grippers|none",
      "-ms-user-select": "none|element|text",
      "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
      "-ms-wrap-margin": "<length>",
      "-ms-wrap-through": "wrap|none",
      "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
      "-moz-binding": "<url>|none",
      "-moz-border-bottom-colors": "<color>+|none",
      "-moz-border-left-colors": "<color>+|none",
      "-moz-border-right-colors": "<color>+|none",
      "-moz-border-top-colors": "<color>+|none",
      "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
      "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
      "-moz-force-broken-image-icon": "0|1",
      "-moz-image-region": "<shape>|auto",
      "-moz-orient": "inline|block|horizontal|vertical",
      "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
      "-moz-outline-radius-bottomleft": "<outline-radius>",
      "-moz-outline-radius-bottomright": "<outline-radius>",
      "-moz-outline-radius-topleft": "<outline-radius>",
      "-moz-outline-radius-topright": "<outline-radius>",
      "-moz-stack-sizing": "ignore|stretch-to-fit",
      "-moz-text-blink": "none|blink",
      "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
      "-moz-user-input": "auto|none|enabled|disabled",
      "-moz-user-modify": "read-only|read-write|write-only",
      "-moz-window-dragging": "drag|no-drag",
      "-moz-window-shadow": "default|menu|tooltip|sheet|none",
      "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
      "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
      "-webkit-border-before-color": "<color>",
      "-webkit-border-before-style": "<'border-style'>",
      "-webkit-border-before-width": "<'border-width'>",
      "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
      "-webkit-line-clamp": "none|<integer>",
      "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
      "-webkit-mask-attachment": "<attachment>#",
      "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
      "-webkit-mask-composite": "<composite-style>#",
      "-webkit-mask-image": "<mask-reference>#",
      "-webkit-mask-origin": "[<box>|border|padding|content]#",
      "-webkit-mask-position": "<position>#",
      "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
      "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
      "-webkit-mask-repeat": "<repeat-style>#",
      "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
      "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
      "-webkit-mask-size": "<bg-size>#",
      "-webkit-overflow-scrolling": "auto|touch",
      "-webkit-tap-highlight-color": "<color>",
      "-webkit-text-fill-color": "<color>",
      "-webkit-text-stroke": "<length>||<color>",
      "-webkit-text-stroke-color": "<color>",
      "-webkit-text-stroke-width": "<length>",
      "-webkit-touch-callout": "default|none",
      "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
      "accent-color": "auto|<color>",
      "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
      "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
      "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
      "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
      all: "initial|inherit|unset|revert|revert-layer",
      "anchor-name": "none|<dashed-ident>#",
      "anchor-scope": "none|all|<dashed-ident>#",
      animation: "<single-animation>#",
      "animation-composition": "<single-animation-composition>#",
      "animation-delay": "<time>#",
      "animation-direction": "<single-animation-direction>#",
      "animation-duration": "<time>#",
      "animation-fill-mode": "<single-animation-fill-mode>#",
      "animation-iteration-count": "<single-animation-iteration-count>#",
      "animation-name": "[none|<keyframes-name>]#",
      "animation-play-state": "<single-animation-play-state>#",
      "animation-range": "[<'animation-range-start'> <'animation-range-end'>?]#",
      "animation-range-end": "[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#",
      "animation-range-start": "[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#",
      "animation-timing-function": "<easing-function>#",
      "animation-timeline": "<single-animation-timeline>#",
      appearance: "none|auto|textfield|menulist-button|<compat-auto>",
      "aspect-ratio": "auto||<ratio>",
      azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
      "backdrop-filter": "none|<filter-function-list>",
      "backface-visibility": "visible|hidden",
      background: "[<bg-layer> ,]* <final-bg-layer>",
      "background-attachment": "<attachment>#",
      "background-blend-mode": "<blend-mode>#",
      "background-clip": "<bg-clip>#",
      "background-color": "<color>",
      "background-image": "<bg-image>#",
      "background-origin": "<box>#",
      "background-position": "<bg-position>#",
      "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
      "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
      "background-repeat": "<repeat-style>#",
      "background-size": "<bg-size>#",
      "block-size": "<'width'>",
      border: "<line-width>||<line-style>||<color>",
      "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-color": "<'border-top-color'>{1,2}",
      "border-block-style": "<'border-top-style'>",
      "border-block-width": "<'border-top-width'>",
      "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-end-color": "<'border-top-color'>",
      "border-block-end-style": "<'border-top-style'>",
      "border-block-end-width": "<'border-top-width'>",
      "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-block-start-color": "<'border-top-color'>",
      "border-block-start-style": "<'border-top-style'>",
      "border-block-start-width": "<'border-top-width'>",
      "border-bottom": "<line-width>||<line-style>||<color>",
      "border-bottom-color": "<'border-top-color'>",
      "border-bottom-left-radius": "<length-percentage>{1,2}",
      "border-bottom-right-radius": "<length-percentage>{1,2}",
      "border-bottom-style": "<line-style>",
      "border-bottom-width": "<line-width>",
      "border-collapse": "collapse|separate",
      "border-color": "<color>{1,4}",
      "border-end-end-radius": "<length-percentage>{1,2}",
      "border-end-start-radius": "<length-percentage>{1,2}",
      "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
      "border-image-outset": "[<length>|<number>]{1,4}",
      "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
      "border-image-slice": "<number-percentage>{1,4}&&fill?",
      "border-image-source": "none|<image>",
      "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
      "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-color": "<'border-top-color'>{1,2}",
      "border-inline-style": "<'border-top-style'>",
      "border-inline-width": "<'border-top-width'>",
      "border-inline-end-color": "<'border-top-color'>",
      "border-inline-end-style": "<'border-top-style'>",
      "border-inline-end-width": "<'border-top-width'>",
      "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
      "border-inline-start-color": "<'border-top-color'>",
      "border-inline-start-style": "<'border-top-style'>",
      "border-inline-start-width": "<'border-top-width'>",
      "border-left": "<line-width>||<line-style>||<color>",
      "border-left-color": "<color>",
      "border-left-style": "<line-style>",
      "border-left-width": "<line-width>",
      "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
      "border-right": "<line-width>||<line-style>||<color>",
      "border-right-color": "<color>",
      "border-right-style": "<line-style>",
      "border-right-width": "<line-width>",
      "border-spacing": "<length> <length>?",
      "border-start-end-radius": "<length-percentage>{1,2}",
      "border-start-start-radius": "<length-percentage>{1,2}",
      "border-style": "<line-style>{1,4}",
      "border-top": "<line-width>||<line-style>||<color>",
      "border-top-color": "<color>",
      "border-top-left-radius": "<length-percentage>{1,2}",
      "border-top-right-radius": "<length-percentage>{1,2}",
      "border-top-style": "<line-style>",
      "border-top-width": "<line-width>",
      "border-width": "<line-width>{1,4}",
      bottom: "<length>|<percentage>|auto",
      "box-align": "start|center|end|baseline|stretch",
      "box-decoration-break": "slice|clone",
      "box-direction": "normal|reverse|inherit",
      "box-flex": "<number>",
      "box-flex-group": "<integer>",
      "box-lines": "single|multiple",
      "box-ordinal-group": "<integer>",
      "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
      "box-pack": "start|center|end|justify",
      "box-shadow": "none|<shadow>#",
      "box-sizing": "content-box|border-box",
      "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
      "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
      "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
      "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
      caret: "<'caret-color'>||<'caret-shape'>",
      "caret-color": "auto|<color>",
      "caret-shape": "auto|bar|block|underscore",
      clear: "none|left|right|both|inline-start|inline-end",
      clip: "<shape>|auto",
      "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
      "clip-rule": "nonzero|evenodd",
      color: "<color>",
      "color-interpolation-filters": "auto|sRGB|linearRGB",
      "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
      "column-count": "<integer>|auto",
      "column-fill": "auto|balance",
      "column-gap": "normal|<length-percentage>",
      "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
      "column-rule-color": "<color>",
      "column-rule-style": "<'border-style'>",
      "column-rule-width": "<'border-width'>",
      "column-span": "none|all",
      "column-width": "<length>|auto",
      columns: "<'column-width'>||<'column-count'>",
      contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
      "contain-intrinsic-size": "[auto? [none|<length>]]{1,2}",
      "contain-intrinsic-block-size": "auto? [none|<length>]",
      "contain-intrinsic-height": "auto? [none|<length>]",
      "contain-intrinsic-inline-size": "auto? [none|<length>]",
      "contain-intrinsic-width": "auto? [none|<length>]",
      container: "<'container-name'> [/ <'container-type'>]?",
      "container-name": "none|<custom-ident>+",
      "container-type": "normal||[size|inline-size]",
      content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
      "content-visibility": "visible|auto|hidden",
      "counter-increment": "[<counter-name> <integer>?]+|none",
      "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
      "counter-set": "[<counter-name> <integer>?]+|none",
      cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
      d: "none|path( <string> )",
      cx: "<length>|<percentage>",
      cy: "<length>|<percentage>",
      direction: "ltr|rtl",
      display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
      "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
      "empty-cells": "show|hide",
      "field-sizing": "content|fixed",
      fill: "<paint>",
      "fill-opacity": "<number-zero-one>",
      "fill-rule": "nonzero|evenodd",
      filter: "none|<filter-function-list>|<-ms-filter-function-list>",
      flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
      "flex-basis": "content|<'width'>",
      "flex-direction": "row|row-reverse|column|column-reverse",
      "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
      "flex-grow": "<number>",
      "flex-shrink": "<number>",
      "flex-wrap": "nowrap|wrap|wrap-reverse",
      float: "left|right|none|inline-start|inline-end",
      font: "[[<'font-style'>||<font-variant-css2>||<'font-weight'>||<font-width-css3>]? <'font-size'> [/ <'line-height'>]? <'font-family'>#]|<system-family-name>|<-non-standard-font>",
      "font-family": "[<family-name>|<generic-family>]#",
      "font-feature-settings": "normal|<feature-tag-value>#",
      "font-kerning": "auto|normal|none",
      "font-language-override": "normal|<string>",
      "font-optical-sizing": "auto|none",
      "font-palette": "normal|light|dark|<palette-identifier>",
      "font-variation-settings": "normal|[<string> <number>]#",
      "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
      "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
      "font-smooth": "auto|never|always|<absolute-size>|<length>",
      "font-stretch": "<font-stretch-absolute>",
      "font-style": "normal|italic|oblique <angle>?",
      "font-synthesis": "none|[weight||style||small-caps||position]",
      "font-synthesis-position": "auto|none",
      "font-synthesis-small-caps": "auto|none",
      "font-synthesis-style": "auto|none",
      "font-synthesis-weight": "auto|none",
      "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
      "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
      "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
      "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
      "font-variant-emoji": "normal|text|emoji|unicode",
      "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
      "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
      "font-variant-position": "normal|sub|super",
      "font-weight": "<font-weight-absolute>|bolder|lighter",
      "forced-color-adjust": "auto|none|preserve-parent-color",
      gap: "<'row-gap'> <'column-gap'>?",
      grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
      "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
      "grid-auto-columns": "<track-size>+",
      "grid-auto-flow": "[row|column]||dense",
      "grid-auto-rows": "<track-size>+",
      "grid-column": "<grid-line> [/ <grid-line>]?",
      "grid-column-end": "<grid-line>",
      "grid-column-gap": "<length-percentage>",
      "grid-column-start": "<grid-line>",
      "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
      "grid-row": "<grid-line> [/ <grid-line>]?",
      "grid-row-end": "<grid-line>",
      "grid-row-gap": "<length-percentage>",
      "grid-row-start": "<grid-line>",
      "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
      "grid-template-areas": "none|<string>+",
      "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
      "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
      "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
      height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "hyphenate-character": "auto|<string>",
      "hyphenate-limit-chars": "[auto|<integer>]{1,3}",
      hyphens: "none|manual|auto",
      "image-orientation": "from-image|<angle>|[<angle>? flip]",
      "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
      "image-resolution": "[from-image||<resolution>]&&snap?",
      "ime-mode": "auto|normal|active|inactive|disabled",
      "initial-letter": "normal|[<number> <integer>?]",
      "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
      "inline-size": "<'width'>",
      "input-security": "auto|none",
      inset: "<'top'>{1,4}",
      "inset-block": "<'top'>{1,2}",
      "inset-block-end": "<'top'>",
      "inset-block-start": "<'top'>",
      "inset-inline": "<'top'>{1,2}",
      "inset-inline-end": "<'top'>",
      "inset-inline-start": "<'top'>",
      "interpolate-size": "numeric-only|allow-keywords",
      isolation: "auto|isolate",
      "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
      "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
      "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
      "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
      left: "<length>|<percentage>|auto",
      "letter-spacing": "normal|<length-percentage>",
      "line-break": "auto|loose|normal|strict|anywhere",
      "line-clamp": "none|<integer>",
      "line-height": "normal|<number>|<length>|<percentage>",
      "line-height-step": "<length>",
      "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
      "list-style-image": "<image>|none",
      "list-style-position": "inside|outside",
      "list-style-type": "<counter-style>|<string>|none",
      margin: "[<length>|<percentage>|auto]{1,4}",
      "margin-block": "<'margin-left'>{1,2}",
      "margin-block-end": "<'margin-left'>",
      "margin-block-start": "<'margin-left'>",
      "margin-bottom": "<length>|<percentage>|auto",
      "margin-inline": "<'margin-left'>{1,2}",
      "margin-inline-end": "<'margin-left'>",
      "margin-inline-start": "<'margin-left'>",
      "margin-left": "<length>|<percentage>|auto",
      "margin-right": "<length>|<percentage>|auto",
      "margin-top": "<length>|<percentage>|auto",
      "margin-trim": "none|in-flow|all",
      marker: "none|<url>",
      "marker-end": "none|<url>",
      "marker-mid": "none|<url>",
      "marker-start": "none|<url>",
      mask: "<mask-layer>#",
      "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
      "mask-border-mode": "luminance|alpha",
      "mask-border-outset": "[<length>|<number>]{1,4}",
      "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
      "mask-border-slice": "<number-percentage>{1,4} fill?",
      "mask-border-source": "none|<image>",
      "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
      "mask-clip": "[<geometry-box>|no-clip]#",
      "mask-composite": "<compositing-operator>#",
      "mask-image": "<mask-reference>#",
      "mask-mode": "<masking-mode>#",
      "mask-origin": "<geometry-box>#",
      "mask-position": "<position>#",
      "mask-repeat": "<repeat-style>#",
      "mask-size": "<bg-size>#",
      "mask-type": "luminance|alpha",
      "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
      "math-depth": "auto-add|add( <integer> )|<integer>",
      "math-shift": "normal|compact",
      "math-style": "normal|compact",
      "max-block-size": "<'max-width'>",
      "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "max-inline-size": "<'max-width'>",
      "max-lines": "none|<integer>",
      "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "min-block-size": "<'min-width'>",
      "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "min-inline-size": "<'min-width'>",
      "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "mix-blend-mode": "<blend-mode>|plus-lighter",
      "object-fit": "fill|contain|cover|none|scale-down",
      "object-position": "<position>",
      offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
      "offset-anchor": "auto|<position>",
      "offset-distance": "<length-percentage>",
      "offset-path": "none|<offset-path>||<coord-box>",
      "offset-position": "normal|auto|<position>",
      "offset-rotate": "[auto|reverse]||<angle>",
      opacity: "<alpha-value>",
      order: "<integer>",
      orphans: "<integer>",
      outline: "[<'outline-width'>||<'outline-style'>||<'outline-color'>]",
      "outline-color": "auto|<color>",
      "outline-offset": "<length>",
      "outline-style": "auto|<'border-style'>",
      "outline-width": "<line-width>",
      overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
      "overflow-anchor": "auto|none",
      "overflow-block": "visible|hidden|clip|scroll|auto",
      "overflow-clip-box": "padding-box|content-box",
      "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
      "overflow-inline": "visible|hidden|clip|scroll|auto",
      "overflow-wrap": "normal|break-word|anywhere",
      "overflow-x": "visible|hidden|clip|scroll|auto",
      "overflow-y": "visible|hidden|clip|scroll|auto",
      overlay: "none|auto",
      "overscroll-behavior": "[contain|none|auto]{1,2}",
      "overscroll-behavior-block": "contain|none|auto",
      "overscroll-behavior-inline": "contain|none|auto",
      "overscroll-behavior-x": "contain|none|auto",
      "overscroll-behavior-y": "contain|none|auto",
      padding: "[<length>|<percentage>]{1,4}",
      "padding-block": "<'padding-left'>{1,2}",
      "padding-block-end": "<'padding-left'>",
      "padding-block-start": "<'padding-left'>",
      "padding-bottom": "<length>|<percentage>",
      "padding-inline": "<'padding-left'>{1,2}",
      "padding-inline-end": "<'padding-left'>",
      "padding-inline-start": "<'padding-left'>",
      "padding-left": "<length>|<percentage>",
      "padding-right": "<length>|<percentage>",
      "padding-top": "<length>|<percentage>",
      page: "auto|<custom-ident>",
      "page-break-after": "auto|always|avoid|left|right|recto|verso",
      "page-break-before": "auto|always|avoid|left|right|recto|verso",
      "page-break-inside": "auto|avoid",
      "paint-order": "normal|[fill||stroke||markers]",
      perspective: "none|<length>",
      "perspective-origin": "<position>",
      "place-content": "<'align-content'> <'justify-content'>?",
      "place-items": "<'align-items'> <'justify-items'>?",
      "place-self": "<'align-self'> <'justify-self'>?",
      "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
      position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
      "position-anchor": "auto|<anchor-name>",
      "position-area": "none|<position-area>",
      "position-try": "<'position-try-order'>? <'position-try-fallbacks'>",
      "position-try-fallbacks": "none|[[<dashed-ident>||<try-tactic>]|<'position-area'>]#",
      "position-try-order": "normal|<try-size>",
      "position-visibility": "always|[anchors-valid||anchors-visible||no-overflow]",
      "print-color-adjust": "economy|exact",
      quotes: "none|auto|[<string> <string>]+",
      r: "<length>|<percentage>",
      resize: "none|both|horizontal|vertical|block|inline",
      right: "<length>|<percentage>|auto",
      rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
      "row-gap": "normal|<length-percentage>",
      "ruby-align": "start|center|space-between|space-around",
      "ruby-merge": "separate|collapse|auto",
      "ruby-position": "[alternate||[over|under]]|inter-character",
      rx: "<length>|<percentage>",
      ry: "<length>|<percentage>",
      scale: "none|[<number>|<percentage>]{1,3}",
      "scrollbar-color": "auto|<color>{2}",
      "scrollbar-gutter": "auto|stable&&both-edges?",
      "scrollbar-width": "auto|thin|none",
      "scroll-behavior": "auto|smooth",
      "scroll-margin": "<length>{1,4}",
      "scroll-margin-block": "<length>{1,2}",
      "scroll-margin-block-start": "<length>",
      "scroll-margin-block-end": "<length>",
      "scroll-margin-bottom": "<length>",
      "scroll-margin-inline": "<length>{1,2}",
      "scroll-margin-inline-start": "<length>",
      "scroll-margin-inline-end": "<length>",
      "scroll-margin-left": "<length>",
      "scroll-margin-right": "<length>",
      "scroll-margin-top": "<length>",
      "scroll-padding": "[auto|<length-percentage>]{1,4}",
      "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
      "scroll-padding-block-start": "auto|<length-percentage>",
      "scroll-padding-block-end": "auto|<length-percentage>",
      "scroll-padding-bottom": "auto|<length-percentage>",
      "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
      "scroll-padding-inline-start": "auto|<length-percentage>",
      "scroll-padding-inline-end": "auto|<length-percentage>",
      "scroll-padding-left": "auto|<length-percentage>",
      "scroll-padding-right": "auto|<length-percentage>",
      "scroll-padding-top": "auto|<length-percentage>",
      "scroll-snap-align": "[none|start|end|center]{1,2}",
      "scroll-snap-coordinate": "none|<position>#",
      "scroll-snap-destination": "<position>",
      "scroll-snap-points-x": "none|repeat( <length-percentage> )",
      "scroll-snap-points-y": "none|repeat( <length-percentage> )",
      "scroll-snap-stop": "normal|always",
      "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
      "scroll-snap-type-x": "none|mandatory|proximity",
      "scroll-snap-type-y": "none|mandatory|proximity",
      "scroll-timeline": "[<'scroll-timeline-name'>||<'scroll-timeline-axis'>]#",
      "scroll-timeline-axis": "[block|inline|x|y]#",
      "scroll-timeline-name": "[none|<dashed-ident>]#",
      "shape-image-threshold": "<alpha-value>",
      "shape-margin": "<length-percentage>",
      "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
      "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
      stroke: "<paint>",
      "stroke-dasharray": "none|[<svg-length>+]#",
      "stroke-dashoffset": "<svg-length>",
      "stroke-linecap": "butt|round|square",
      "stroke-linejoin": "miter|round|bevel",
      "stroke-miterlimit": "<number-one-or-greater>",
      "stroke-opacity": "<'opacity'>",
      "stroke-width": "<svg-length>",
      "tab-size": "<integer>|<length>",
      "table-layout": "auto|fixed",
      "text-align": "start|end|left|right|center|justify|match-parent",
      "text-align-last": "auto|start|end|left|right|center|justify",
      "text-anchor": "start|middle|end",
      "text-combine-upright": "none|all|[digits <integer>?]",
      "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
      "text-decoration-color": "<color>",
      "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
      "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
      "text-decoration-skip-ink": "auto|all|none",
      "text-decoration-style": "solid|double|dotted|dashed|wavy",
      "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
      "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
      "text-emphasis-color": "<color>",
      "text-emphasis-position": "auto|[over|under]&&[right|left]?",
      "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
      "text-indent": "<length-percentage>&&hanging?&&each-line?",
      "text-justify": "auto|inter-character|inter-word|none",
      "text-orientation": "mixed|upright|sideways",
      "text-overflow": "[clip|ellipsis|<string>]{1,2}",
      "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
      "text-shadow": "none|<shadow-t>#",
      "text-size-adjust": "none|auto|<percentage>",
      "text-spacing-trim": "space-all|normal|space-first|trim-start|trim-both|trim-all|auto",
      "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
      "text-underline-offset": "auto|<length>|<percentage>",
      "text-underline-position": "auto|from-font|[under||[left|right]]",
      "text-wrap": "<'text-wrap-mode'>||<'text-wrap-style'>",
      "text-wrap-mode": "auto|wrap|nowrap",
      "text-wrap-style": "auto|balance|stable|pretty",
      "timeline-scope": "none|<dashed-ident>#",
      top: "<length>|<percentage>|auto",
      "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
      transform: "none|<transform-list>",
      "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
      "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
      "transform-style": "flat|preserve-3d",
      transition: "<single-transition>#",
      "transition-behavior": "<transition-behavior-value>#",
      "transition-delay": "<time>#",
      "transition-duration": "<time>#",
      "transition-property": "none|<single-transition-property>#",
      "transition-timing-function": "<easing-function>#",
      translate: "none|<length-percentage> [<length-percentage> <length>?]?",
      "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
      "user-select": "auto|text|none|contain|all",
      "vector-effect": "none|non-scaling-stroke|non-scaling-size|non-rotation|fixed-position",
      "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
      "view-timeline": "[<'view-timeline-name'> <'view-timeline-axis'>?]#",
      "view-timeline-axis": "[block|inline|x|y]#",
      "view-timeline-inset": "[[auto|<length-percentage>]{1,2}]#",
      "view-timeline-name": "none|<dashed-ident>#",
      "view-transition-name": "none|<custom-ident>",
      visibility: "visible|hidden|collapse",
      "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces|[<'white-space-collapse'>||<'text-wrap'>||<'white-space-trim'>]",
      "white-space-collapse": "collapse|discard|preserve|preserve-breaks|preserve-spaces|break-spaces",
      widows: "<integer>",
      width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|stretch|<-non-standard-size>",
      "will-change": "auto|<animateable-feature>#",
      "word-break": "normal|break-all|keep-all|break-word|auto-phrase",
      "word-spacing": "normal|<length>",
      "word-wrap": "normal|break-word",
      "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
      x: "<length>|<percentage>",
      y: "<length>|<percentage>",
      "z-index": "auto|<integer>",
      zoom: "normal|reset|<number>|<percentage>",
      "-moz-background-clip": "padding|border",
      "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
      "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
      "-moz-border-radius-topleft": "<'border-top-left-radius'>",
      "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
      "-moz-control-character-visibility": "visible|hidden",
      "-moz-osx-font-smoothing": "auto|grayscale",
      "-moz-user-select": "none|text|all|-moz-none",
      "-ms-flex-align": "start|end|center|baseline|stretch",
      "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
      "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
      "-ms-flex-negative": "<'flex-shrink'>",
      "-ms-flex-pack": "start|end|center|justify|distribute",
      "-ms-flex-order": "<integer>",
      "-ms-flex-positive": "<'flex-grow'>",
      "-ms-flex-preferred-size": "<'flex-basis'>",
      "-ms-interpolation-mode": "nearest-neighbor|bicubic",
      "-ms-grid-column-align": "start|end|center|stretch",
      "-ms-grid-row-align": "start|end|center|stretch",
      "-ms-hyphenate-limit-last": "none|always|column|page|spread",
      "-webkit-background-clip": "[<box>|border|padding|content|text]#",
      "-webkit-column-break-after": "always|auto|avoid",
      "-webkit-column-break-before": "always|auto|avoid",
      "-webkit-column-break-inside": "always|auto|avoid",
      "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
      "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
      "-webkit-print-color-adjust": "economy|exact",
      "-webkit-text-security": "none|circle|disc|square",
      "-webkit-user-drag": "none|element|auto",
      "-webkit-user-select": "auto|none|text|all",
      "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
      "baseline-shift": "baseline|sub|super|<svg-length>",
      behavior: "<url>+",
      cue: "<'cue-before'> <'cue-after'>?",
      "cue-after": "<url> <decibel>?|none",
      "cue-before": "<url> <decibel>?|none",
      "glyph-orientation-horizontal": "<angle>",
      "glyph-orientation-vertical": "<angle>",
      kerning: "auto|<svg-length>",
      pause: "<'pause-before'> <'pause-after'>?",
      "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
      "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
      rest: "<'rest-before'> <'rest-after'>?",
      "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
      "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
      src: "[<url> [format( <string># )]?|local( <family-name> )]#",
      speak: "auto|never|always",
      "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
      "unicode-range": "<urange>#",
      "voice-balance": "<number>|left|center|right|leftwards|rightwards",
      "voice-duration": "auto|<time>",
      "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
      "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
      "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
      "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
      "voice-stress": "normal|strong|moderate|none|reduced",
      "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]",
      "white-space-trim": "none|discard-before||discard-after||discard-inner"
    },
    atrules: {
      charset: {
        prelude: "<string>",
        descriptors: null
      },
      "counter-style": {
        prelude: "<counter-style-name>",
        descriptors: {
          "additive-symbols": "[<integer>&&<symbol>]#",
          fallback: "<counter-style-name>",
          negative: "<symbol> <symbol>?",
          pad: "<integer>&&<symbol>",
          prefix: "<symbol>",
          range: "[[<integer>|infinite]{2}]#|auto",
          "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
          suffix: "<symbol>",
          symbols: "<symbol>+",
          system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
        }
      },
      document: {
        prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
        descriptors: null
      },
      "font-palette-values": {
        prelude: "<dashed-ident>",
        descriptors: {
          "base-palette": "light|dark|<integer [0,∞]>",
          "font-family": "<family-name>#",
          "override-colors": "[<integer [0,∞]> <absolute-color-base>]#"
        }
      },
      "font-face": {
        prelude: null,
        descriptors: {
          "ascent-override": "normal|<percentage>",
          "descent-override": "normal|<percentage>",
          "font-display": "[auto|block|swap|fallback|optional]",
          "font-family": "<family-name>",
          "font-feature-settings": "normal|<feature-tag-value>#",
          "font-variation-settings": "normal|[<string> <number>]#",
          "font-stretch": "<font-stretch-absolute>{1,2}",
          "font-style": "normal|italic|oblique <angle>{0,2}",
          "font-weight": "<font-weight-absolute>{1,2}",
          "line-gap-override": "normal|<percentage>",
          "size-adjust": "<percentage>",
          src: "[<url> [format( <string># )]?|local( <family-name> )]#",
          "unicode-range": "<urange>#"
        }
      },
      "font-feature-values": {
        prelude: "<family-name>#",
        descriptors: null
      },
      import: {
        prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
        descriptors: null
      },
      keyframes: {
        prelude: "<keyframes-name>",
        descriptors: null
      },
      layer: {
        prelude: "[<layer-name>#|<layer-name>?]",
        descriptors: null
      },
      media: {
        prelude: "<media-query-list>",
        descriptors: null
      },
      namespace: {
        prelude: "<namespace-prefix>? [<string>|<url>]",
        descriptors: null
      },
      page: {
        prelude: "<page-selector-list>",
        descriptors: {
          bleed: "auto|<length>",
          marks: "none|[crop||cross]",
          "page-orientation": "upright|rotate-left|rotate-right",
          size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
        }
      },
      "position-try": {
        prelude: "<dashed-ident>",
        descriptors: {
          top: "<'top'>",
          left: "<'left'>",
          bottom: "<'bottom'>",
          right: "<'right'>",
          "inset-block-start": "<'inset-block-start'>",
          "inset-block-end": "<'inset-block-end'>",
          "inset-inline-start": "<'inset-inline-start'>",
          "inset-inline-end": "<'inset-inline-end'>",
          "inset-block": "<'inset-block'>",
          "inset-inline": "<'inset-inline'>",
          inset: "<'inset'>",
          "margin-top": "<'margin-top'>",
          "margin-left": "<'margin-left'>",
          "margin-bottom": "<'margin-bottom'>",
          "margin-right": "<'margin-right'>",
          "margin-block-start": "<'margin-block-start'>",
          "margin-block-end": "<'margin-block-end'>",
          "margin-inline-start": "<'margin-inline-start'>",
          "margin-inline-end": "<'margin-inline-end'>",
          margin: "<'margin'>",
          "margin-block": "<'margin-block'>",
          "margin-inline": "<'margin-inline'>",
          width: "<'width'>",
          height: "<'height'>",
          "min-width": "<'min-width'>",
          "min-height": "<'min-height'>",
          "max-width": "<'max-width'>",
          "max-height": "<'max-height'>",
          "block-size": "<'block-size'>",
          "inline-size": "<'inline-size'>",
          "min-block-size": "<'min-block-size'>",
          "min-inline-size": "<'min-inline-size'>",
          "max-block-size": "<'max-block-size'>",
          "max-inline-size": "<'max-inline-size'>",
          "align-self": "<'align-self'>|anchor-center",
          "justify-self": "<'justify-self'>|anchor-center"
        }
      },
      property: {
        prelude: "<custom-property-name>",
        descriptors: {
          syntax: "<string>",
          inherits: "true|false",
          "initial-value": "<declaration-value>?"
        }
      },
      scope: {
        prelude: "[( <scope-start> )]? [to ( <scope-end> )]?",
        descriptors: null
      },
      "starting-style": {
        prelude: null,
        descriptors: null
      },
      supports: {
        prelude: "<supports-condition>",
        descriptors: null
      },
      container: {
        prelude: "[<container-name>]? <container-condition>",
        descriptors: null
      },
      nest: {
        prelude: "<complex-selector-list>",
        descriptors: null
      }
    },
    node: en,
    parseContext: {
      default: "StyleSheet",
      stylesheet: "StyleSheet",
      atrule: "Atrule",
      atrulePrelude(e) {
        return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
      },
      mediaQueryList: "MediaQueryList",
      mediaQuery: "MediaQuery",
      condition(e) {
        return this.Condition(e.kind);
      },
      rule: "Rule",
      selectorList: "SelectorList",
      selector: "Selector",
      block() {
        return this.Block(true);
      },
      declarationList: "DeclarationList",
      declaration: "Declaration",
      value: "Value"
    },
    features: {
      supports: {
        selector() {
          return this.Selector();
        }
      },
      container: {
        style() {
          return this.Declaration();
        }
      }
    },
    scope: er,
    atrule: {
      container: {
        parse: {
          prelude() {
            let e = this.createList();
            if (this.tokenType === 1) {
              let t = this.substring(this.tokenStart, this.tokenEnd);
              if (!ad.has(t.toLowerCase())) {
                e.push(this.Identifier());
              }
            }
            e.push(this.Condition("container"));
            return e;
          },
          block(e = false) {
            return this.Block(e);
          }
        }
      },
      "font-face": {
        parse: {
          prelude: null,
          block() {
            return this.Block(true);
          }
        }
      },
      import: {
        parse: {
          prelude() {
            let e = this.createList();
            switch (this.tokenType) {
              case 5:
                e.push(this.String());
                break;
              case 7:
              case 2:
                e.push(this.Url());
                break;
              default:
                this.error("String or url() is expected");
            }
            this.skipSC();
            if (this.tokenType === 1 && this.cmpStr(this.tokenStart, this.tokenEnd, "layer")) {
              e.push(this.Identifier());
            } else if (this.tokenType === 2 && this.cmpStr(this.tokenStart, this.tokenEnd, "layer(")) {
              e.push(this.Function(null, af));
            }
            this.skipSC();
            if (this.tokenType === 2 && this.cmpStr(this.tokenStart, this.tokenEnd, "supports(")) {
              e.push(this.Function(null, af));
            }
            if (this.lookupNonWSType(0) === 1 || this.lookupNonWSType(0) === 21) {
              e.push(this.MediaQueryList());
            }
            return e;
          },
          block: null
        }
      },
      layer: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.LayerList());
          },
          block() {
            return this.Block(false);
          }
        }
      },
      media: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.MediaQueryList());
          },
          block(e = false) {
            return this.Block(e);
          }
        }
      },
      nest: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.SelectorList());
          },
          block() {
            return this.Block(true);
          }
        }
      },
      page: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.SelectorList());
          },
          block() {
            return this.Block(true);
          }
        }
      },
      scope: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.Scope());
          },
          block(e = false) {
            return this.Block(e);
          }
        }
      },
      "starting-style": {
        parse: {
          prelude: null,
          block(e = false) {
            return this.Block(e);
          }
        }
      },
      supports: {
        parse: {
          prelude() {
            return this.createSingleNodeList(this.Condition("supports"));
          },
          block(e = false) {
            return this.Block(e);
          }
        }
      }
    },
    pseudo: {
      dir: {
        parse() {
          return this.createSingleNodeList(this.Identifier());
        }
      },
      has: ag,
      lang: {
        parse: function () {
          let e = this.createList();
          this.skipSC();
          e: while (!this.eof) {
            switch (this.tokenType) {
              case 1:
                e.push(this.Identifier());
                break;
              case 5:
                e.push(this.String());
                break;
              case 18:
                e.push(this.Operator());
                break;
              case 22:
                break e;
              default:
                this.error("Identifier, string or comma is expected");
            }
            this.skipSC();
          }
          return e;
        }
      },
      matches: ag,
      is: ag,
      "-moz-any": ag,
      "-webkit-any": ag,
      where: ag,
      not: ag,
      "nth-child": ay,
      "nth-last-child": ay,
      "nth-last-of-type": ay,
      "nth-of-type": ay,
      slotted: ab,
      host: ab,
      "host-context": ab
    },
    node: ei,
    node: en
  }));
  require.d(exports, {
    walk: function () {
      return aC;
    },
    generate: function () {
      return av;
    },
    lexer: function () {
      return eR;
    },
    parse: function () {
      return ax;
    }
  });
  require.r(i);
  require.d(i, {
    safe: function () {
      return eZ;
    },
    spec: function () {
      return eY;
    }
  });
  require.r(o);
  require.d(o, {
    angle: function () {
      return tI;
    },
    decibel: function () {
      return t_;
    },
    flex: function () {
      return tR;
    },
    frequency: function () {
      return tj;
    },
    length: function () {
      return tP;
    },
    resolution: function () {
      return tF;
    },
    semitones: function () {
      return tM;
    },
    time: function () {
      return tN;
    }
  });
  require.r(a);
  require.d(a, {
    getTrace: function () {
      return nr;
    },
    isKeyword: function () {
      return na;
    },
    isProperty: function () {
      return no;
    },
    isType: function () {
      return ni;
    }
  });
  require.r(s);
  require.d(s, {
    generate: function () {
      return nA;
    },
    name: function () {
      return nS;
    },
    parse: function () {
      return nz;
    },
    structure: function () {
      return nC;
    }
  });
  require.r(l);
  require.d(l, {
    generate: function () {
      return nI;
    },
    name: function () {
      return nO;
    },
    parse: function () {
      return nP;
    },
    structure: function () {
      return nE;
    },
    walkContext: function () {
      return nD;
    }
  });
  require.r(c);
  require.d(c, {
    generate: function () {
      return n_;
    },
    name: function () {
      return nN;
    },
    parse: function () {
      return nR;
    },
    structure: function () {
      return nF;
    },
    walkContext: function () {
      return nj;
    }
  });
  require.r(u);
  require.d(u, {
    generate: function () {
      return nV;
    },
    name: function () {
      return nW;
    },
    parse: function () {
      return nU;
    },
    structure: function () {
      return nq;
    }
  });
  require.r(h);
  require.d(h, {
    generate: function () {
      return nJ;
    },
    name: function () {
      return nQ;
    },
    parse: function () {
      return nZ;
    },
    structure: function () {
      return nY;
    },
    walkContext: function () {
      return nX;
    }
  });
  require.r(p);
  require.d(p, {
    generate: function () {
      return n3;
    },
    name: function () {
      return n1;
    },
    parse: function () {
      return n2;
    },
    structure: function () {
      return n0;
    }
  });
  require.r(d);
  require.d(d, {
    generate: function () {
      return n6;
    },
    name: function () {
      return n4;
    },
    parse: function () {
      return n9;
    },
    structure: function () {
      return n5;
    }
  });
  require.r(m);
  require.d(m, {
    generate: function () {
      return rt;
    },
    name: function () {
      return n7;
    },
    parse: function () {
      return re;
    },
    structure: function () {
      return n8;
    }
  });
  require.r(f);
  require.d(f, {
    generate: function () {
      return ro;
    },
    name: function () {
      return rn;
    },
    parse: function () {
      return ri;
    },
    structure: function () {
      return rr;
    }
  });
  require.r(g);
  require.d(g, {
    generate: function () {
      return rc;
    },
    name: function () {
      return ra;
    },
    parse: function () {
      return rl;
    },
    structure: function () {
      return rs;
    }
  });
  require.r(b);
  require.d(b, {
    generate: function () {
      return rd;
    },
    name: function () {
      return ru;
    },
    parse: function () {
      return rp;
    },
    structure: function () {
      return rh;
    }
  });
  require.r(y);
  require.d(y, {
    generate: function () {
      return rx;
    },
    name: function () {
      return rf;
    },
    parse: function () {
      return rk;
    },
    structure: function () {
      return rg;
    }
  });
  require.r(k);
  require.d(k, {
    generate: function () {
      return rT;
    },
    name: function () {
      return rC;
    },
    parse: function () {
      return rL;
    },
    structure: function () {
      return rA;
    },
    walkContext: function () {
      return rz;
    }
  });
  require.r(x);
  require.d(x, {
    generate: function () {
      return rj;
    },
    name: function () {
      return rP;
    },
    parse: function () {
      return rN;
    },
    structure: function () {
      return rI;
    }
  });
  require.r(v);
  require.d(v, {
    generate: function () {
      return rM;
    },
    name: function () {
      return rF;
    },
    parse: function () {
      return r_;
    },
    structure: function () {
      return rR;
    }
  });
  require.r(w);
  require.d(w, {
    generate: function () {
      return rU;
    },
    name: function () {
      return rB;
    },
    parse: function () {
      return rq;
    },
    structure: function () {
      return rW;
    }
  });
  require.r(S);
  require.d(S, {
    generate: function () {
      return r$;
    },
    name: function () {
      return rV;
    },
    parse: function () {
      return rH;
    },
    structure: function () {
      return rK;
    }
  });
  require.r(C);
  require.d(C, {
    generate: function () {
      return r1;
    },
    name: function () {
      return rQ;
    },
    parse: function () {
      return rJ;
    },
    structure: function () {
      return rX;
    }
  });
  require.r(z);
  require.d(z, {
    generate: function () {
      return r5;
    },
    name: function () {
      return r0;
    },
    parse: function () {
      return r4;
    },
    structure: function () {
      return r3;
    },
    walkContext: function () {
      return r2;
    }
  });
  require.r(A);
  require.d(A, {
    generate: function () {
      return r8;
    },
    name: function () {
      return r9;
    },
    parse: function () {
      return r7;
    },
    structure: function () {
      return r6;
    }
  });
  require.r(L);
  require.d(L, {
    generate: function () {
      return io;
    },
    name: function () {
      return it;
    },
    parse: function () {
      return ii;
    },
    structure: function () {
      return ir;
    },
    xxx: function () {
      return ie;
    }
  });
  require.r(T);
  require.d(T, {
    generate: function () {
      return ic;
    },
    name: function () {
      return ia;
    },
    parse: function () {
      return il;
    },
    structure: function () {
      return is;
    }
  });
  require.r(O);
  require.d(O, {
    generate: function () {
      return id;
    },
    name: function () {
      return iu;
    },
    parse: function () {
      return ip;
    },
    structure: function () {
      return ih;
    }
  });
  require.r(D);
  require.d(D, {
    generate: function () {
      return iy;
    },
    name: function () {
      return im;
    },
    parse: function () {
      return ib;
    },
    structure: function () {
      return ig;
    }
  });
  require.r(E);
  require.d(E, {
    generate: function () {
      return iw;
    },
    name: function () {
      return ik;
    },
    parse: function () {
      return iv;
    },
    structure: function () {
      return ix;
    }
  });
  require.r(P);
  require.d(P, {
    generate: function () {
      return iA;
    },
    name: function () {
      return iS;
    },
    parse: function () {
      return iz;
    },
    structure: function () {
      return iC;
    }
  });
  require.r(I);
  require.d(I, {
    generate: function () {
      return iD;
    },
    name: function () {
      return iL;
    },
    parse: function () {
      return iO;
    },
    structure: function () {
      return iT;
    }
  });
  require.r(N);
  require.d(N, {
    generate: function () {
      return iN;
    },
    name: function () {
      return iE;
    },
    parse: function () {
      return iI;
    },
    structure: function () {
      return iP;
    }
  });
  require.r(j);
  require.d(j, {
    generate: function () {
      return i_;
    },
    name: function () {
      return ij;
    },
    parse: function () {
      return iR;
    },
    structure: function () {
      return iF;
    }
  });
  require.r(F);
  require.d(F, {
    generate: function () {
      return iq;
    },
    name: function () {
      return iM;
    },
    parse: function () {
      return iW;
    },
    structure: function () {
      return iB;
    }
  });
  require.r(R);
  require.d(R, {
    generate: function () {
      return iG;
    },
    name: function () {
      return iU;
    },
    parse: function () {
      return iK;
    },
    structure: function () {
      return iV;
    }
  });
  require.r(_);
  require.d(_, {
    generate: function () {
      return iX;
    },
    name: function () {
      return iH;
    },
    parse: function () {
      return iQ;
    },
    structure: function () {
      return i$;
    }
  });
  require.r(M);
  require.d(M, {
    generate: function () {
      return i1;
    },
    name: function () {
      return iY;
    },
    parse: function () {
      return iJ;
    },
    structure: function () {
      return iZ;
    }
  });
  require.r(B);
  require.d(B, {
    generate: function () {
      return i5;
    },
    name: function () {
      return i0;
    },
    parse: function () {
      return i4;
    },
    structure: function () {
      return i3;
    },
    walkContext: function () {
      return i2;
    }
  });
  require.r(W);
  require.d(W, {
    generate: function () {
      return oe;
    },
    name: function () {
      return i9;
    },
    parse: function () {
      return i8;
    },
    structure: function () {
      return i7;
    },
    walkContext: function () {
      return i6;
    }
  });
  require.r(q);
  require.d(q, {
    generate: function () {
      return oo;
    },
    name: function () {
      return on;
    },
    parse: function () {
      return oi;
    },
    structure: function () {
      return or;
    }
  });
  require.r(U);
  require.d(U, {
    generate: function () {
      return ou;
    },
    name: function () {
      return os;
    },
    parse: function () {
      return oc;
    },
    structure: function () {
      return ol;
    }
  });
  require.r(V);
  require.d(V, {
    generate: function () {
      return ob;
    },
    name: function () {
      return od;
    },
    parse: function () {
      return og;
    },
    structure: function () {
      return of;
    },
    walkContext: function () {
      return om;
    }
  });
  require.r(K);
  require.d(K, {
    generate: function () {
      return ov;
    },
    name: function () {
      return oy;
    },
    parse: function () {
      return ox;
    },
    structure: function () {
      return ok;
    }
  });
  require.r(G);
  require.d(G, {
    generate: function () {
      return oz;
    },
    name: function () {
      return ow;
    },
    parse: function () {
      return oC;
    },
    structure: function () {
      return oS;
    }
  });
  require.r(H);
  require.d(H, {
    generate: function () {
      return oD;
    },
    name: function () {
      return oA;
    },
    parse: function () {
      return oO;
    },
    structure: function () {
      return oT;
    },
    walkContext: function () {
      return oL;
    }
  });
  require.r($);
  require.d($, {
    generate: function () {
      return oj;
    },
    name: function () {
      return oP;
    },
    parse: function () {
      return oN;
    },
    structure: function () {
      return oI;
    }
  });
  require.r(Q);
  require.d(Q, {
    generate: function () {
      return oW;
    },
    name: function () {
      return oR;
    },
    parse: function () {
      return oB;
    },
    structure: function () {
      return oM;
    },
    walkContext: function () {
      return o_;
    }
  });
  require.r(X);
  require.d(X, {
    generate: function () {
      return oK;
    },
    name: function () {
      return oq;
    },
    parse: function () {
      return oV;
    },
    structure: function () {
      return oU;
    }
  });
  require.r(Y);
  require.d(Y, {
    generate: function () {
      return oX;
    },
    name: function () {
      return oH;
    },
    parse: function () {
      return oQ;
    },
    structure: function () {
      return o$;
    }
  });
  require.r(Z);
  require.d(Z, {
    generate: function () {
      return o4;
    },
    name: function () {
      return o0;
    },
    parse: function () {
      return o3;
    },
    structure: function () {
      return o2;
    }
  });
  require.r(J);
  require.d(J, {
    generate: function () {
      return o7;
    },
    name: function () {
      return o5;
    },
    parse: function () {
      return o6;
    },
    structure: function () {
      return o9;
    }
  });
  require.r(ee);
  require.d(ee, {
    generate: function () {
      return an;
    },
    name: function () {
      return o8;
    },
    parse: function () {
      return at;
    },
    structure: function () {
      return ae;
    }
  });
  require.r(et);
  require.d(et, {
    generate: function () {
      return as;
    },
    name: function () {
      return ai;
    },
    parse: function () {
      return aa;
    },
    structure: function () {
      return ao;
    }
  });
  require.r(en);
  require.d(en, {
    AnPlusB: function () {
      return s;
    },
    Atrule: function () {
      return l;
    },
    AtrulePrelude: function () {
      return c;
    },
    AttributeSelector: function () {
      return u;
    },
    Block: function () {
      return h;
    },
    Brackets: function () {
      return p;
    },
    CDC: function () {
      return d;
    },
    CDO: function () {
      return m;
    },
    ClassSelector: function () {
      return f;
    },
    Combinator: function () {
      return g;
    },
    Comment: function () {
      return b;
    },
    Condition: function () {
      return y;
    },
    Declaration: function () {
      return k;
    },
    DeclarationList: function () {
      return x;
    },
    Dimension: function () {
      return v;
    },
    Feature: function () {
      return w;
    },
    FeatureFunction: function () {
      return S;
    },
    FeatureRange: function () {
      return C;
    },
    Function: function () {
      return z;
    },
    GeneralEnclosed: function () {
      return A;
    },
    Hash: function () {
      return L;
    },
    IdSelector: function () {
      return O;
    },
    Identifier: function () {
      return T;
    },
    Layer: function () {
      return D;
    },
    LayerList: function () {
      return E;
    },
    MediaQuery: function () {
      return P;
    },
    MediaQueryList: function () {
      return I;
    },
    NestingSelector: function () {
      return N;
    },
    Nth: function () {
      return j;
    },
    Number: function () {
      return F;
    },
    Operator: function () {
      return R;
    },
    Parentheses: function () {
      return _;
    },
    Percentage: function () {
      return M;
    },
    PseudoClassSelector: function () {
      return B;
    },
    PseudoElementSelector: function () {
      return W;
    },
    Ratio: function () {
      return q;
    },
    Raw: function () {
      return U;
    },
    Rule: function () {
      return V;
    },
    Scope: function () {
      return K;
    },
    Selector: function () {
      return G;
    },
    SelectorList: function () {
      return H;
    },
    String: function () {
      return $;
    },
    StyleSheet: function () {
      return Q;
    },
    SupportsDeclaration: function () {
      return X;
    },
    TypeSelector: function () {
      return Y;
    },
    UnicodeRange: function () {
      return Z;
    },
    Url: function () {
      return J;
    },
    Value: function () {
      return ee;
    },
    WhiteSpace: function () {
      return et;
    }
  });
  require.r(er);
  require.d(er, {
    AtrulePrelude: function () {
      return ac;
    },
    Selector: function () {
      return au;
    },
    Value: function () {
      return ap;
    }
  });
  require.r(ei);
  require.d(ei, {
    AnPlusB: function () {
      return nz;
    },
    Atrule: function () {
      return nP;
    },
    AtrulePrelude: function () {
      return nR;
    },
    AttributeSelector: function () {
      return nU;
    },
    Block: function () {
      return nZ;
    },
    Brackets: function () {
      return n2;
    },
    CDC: function () {
      return n9;
    },
    CDO: function () {
      return re;
    },
    ClassSelector: function () {
      return ri;
    },
    Combinator: function () {
      return rl;
    },
    Comment: function () {
      return rp;
    },
    Condition: function () {
      return rk;
    },
    Declaration: function () {
      return rL;
    },
    DeclarationList: function () {
      return rN;
    },
    Dimension: function () {
      return r_;
    },
    Feature: function () {
      return rq;
    },
    FeatureFunction: function () {
      return rH;
    },
    FeatureRange: function () {
      return rJ;
    },
    Function: function () {
      return r4;
    },
    GeneralEnclosed: function () {
      return r7;
    },
    Hash: function () {
      return ii;
    },
    IdSelector: function () {
      return ip;
    },
    Identifier: function () {
      return il;
    },
    Layer: function () {
      return ib;
    },
    LayerList: function () {
      return iv;
    },
    MediaQuery: function () {
      return iz;
    },
    MediaQueryList: function () {
      return iO;
    },
    NestingSelector: function () {
      return iI;
    },
    Nth: function () {
      return iR;
    },
    Number: function () {
      return iW;
    },
    Operator: function () {
      return iK;
    },
    Parentheses: function () {
      return iQ;
    },
    Percentage: function () {
      return iJ;
    },
    PseudoClassSelector: function () {
      return i4;
    },
    PseudoElementSelector: function () {
      return i8;
    },
    Ratio: function () {
      return oi;
    },
    Raw: function () {
      return oc;
    },
    Rule: function () {
      return og;
    },
    Scope: function () {
      return ox;
    },
    Selector: function () {
      return oC;
    },
    SelectorList: function () {
      return oO;
    },
    String: function () {
      return oN;
    },
    StyleSheet: function () {
      return oB;
    },
    SupportsDeclaration: function () {
      return oV;
    },
    TypeSelector: function () {
      return oQ;
    },
    UnicodeRange: function () {
      return o3;
    },
    Url: function () {
      return o6;
    },
    Value: function () {
      return at;
    },
    WhiteSpace: function () {
      return aa;
    }
  });
}