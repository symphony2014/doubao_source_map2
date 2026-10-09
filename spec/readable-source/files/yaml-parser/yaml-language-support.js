// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'syntaxTreeCore'
// - Resolved require(655745) to 'syntax-tree-core'
// - Renamed variable 'r' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'y' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'J' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Resolved require(556971) to 'lr-parser-definition'
// - Updated imported property 'vj' to 'IterMode' (module 655745)
// - Updated imported property 'mp' to 'Tree' (module 655745)
// - Updated imported property 'md' to 'NodeTypeProp' (module 655745)
// - Updated imported property '_b' to 'Parser' (module 655745)
// - Updated imported property 'Lj' to 'NodeTypeSet' (module 655745)
// - Updated imported property 'Jq' to 'NodeType' (module 655745)
// - Updated imported property 'L3' to 'maxBufferLength' (module 655745)
// - Updated imported property 'FE' to 'createNestedParse' (module 655745)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'vw' to 'continuedIndent' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'Dv' to 'getFoldRange' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 88603.5fc0abeb.js
         * chunkId: 88603
         * moduleId: 441120
         */
module.exports = function (module, exports, require) {
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  class n {
    constructor(t, e, s, i, r, n, h, o, a, l = 0, c) {
      this.p = t;
      this.stack = e;
      this.state = s;
      this.reducePos = i;
      this.pos = r;
      this.score = n;
      this.buffer = h;
      this.bufferBase = o;
      this.curContext = a;
      this.lookAhead = l;
      this.parent = c;
    }
    toString() {
      return `[${this.stack.filter((t, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    static start(t, e, s = 0) {
      let i = t.parser.context;
      return new n(t, [], e, s, s, 0, [], 0, i ? new h(i, i.start) : null, 0, null);
    }
    get context() {
      if (this.curContext) {
        return this.curContext.context;
      } else {
        return null;
      }
    }
    pushState(t, e) {
      this.stack.push(this.state, e, this.bufferBase + this.buffer.length);
      this.state = t;
    }
    reduce(t) {
      let s = t >> 19;
      let i = t & 65535;
      let {
        parser: r
      } = this.p;
      let n = this.reducePos < this.pos - 25;
      if (n) {
        this.setLookAhead(this.pos);
      }
      let h = r.dynamicPrecedence(i);
      if (h) {
        this.score += h;
      }
      if (s == 0) {
        this.pushState(r.getGoto(this.state, i, true), this.reducePos);
        if (i < r.minRepeatTerm) {
          this.storeNode(i, this.reducePos, this.reducePos, n ? 8 : 4, true);
        }
        this.reduceContext(i, this.reducePos);
        return;
      }
      let o = this.stack.length - (s - 1) * 3 - (t & 262144 ? 6 : 0);
      let a = o ? this.stack[o - 2] : this.p.ranges[0].from;
      let l = this.reducePos - a;
      if (l >= 2000 && !this.p.parser.nodeSet.types[i]?.isAnonymous) {
        if (a == this.p.lastBigReductionStart) {
          this.p.bigReductionCount++;
          this.p.lastBigReductionSize = l;
        } else if (this.p.lastBigReductionSize < l) {
          this.p.bigReductionCount = 1;
          this.p.lastBigReductionStart = a;
          this.p.lastBigReductionSize = l;
        }
      }
      let c = o ? this.stack[o - 1] : 0;
      let u = this.bufferBase + this.buffer.length - c;
      if (i < r.minRepeatTerm || t & 131072) {
        let t = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
        this.storeNode(i, a, t, u + 4, true);
      }
      if (t & 262144) {
        this.state = this.stack[o];
      } else {
        let t = this.stack[o - 3];
        this.state = r.getGoto(t, i, true);
      }
      while (this.stack.length > o) {
        this.stack.pop();
      }
      this.reduceContext(i, a);
    }
    storeNode(t, e, s, i = 4, r = false) {
      if (t == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
        let t = this;
        let i = this.buffer.length;
        if (i == 0 && t.parent) {
          i = t.bufferBase - t.parent.bufferBase;
          t = t.parent;
        }
        if (i > 0 && t.buffer[i - 4] == 0 && t.buffer[i - 1] > -1) {
          if (e == s) {
            return;
          }
          if (t.buffer[i - 2] >= e) {
            t.buffer[i - 2] = s;
            return;
          }
        }
      }
      if (r && this.pos != s) {
        let r = this.buffer.length;
        if (r > 0 && this.buffer[r - 4] != 0) {
          let t = false;
          for (let e = r; e > 0 && this.buffer[e - 2] > s; e -= 4) {
            if (this.buffer[e - 1] >= 0) {
              t = true;
              break;
            }
          }
          if (t) {
            while (r > 0 && this.buffer[r - 2] > s) {
              this.buffer[r] = this.buffer[r - 4];
              this.buffer[r + 1] = this.buffer[r - 3];
              this.buffer[r + 2] = this.buffer[r - 2];
              this.buffer[r + 3] = this.buffer[r - 1];
              r -= 4;
              if (i > 4) {
                i -= 4;
              }
            }
          }
        }
        this.buffer[r] = t;
        this.buffer[r + 1] = e;
        this.buffer[r + 2] = s;
        this.buffer[r + 3] = i;
      } else {
        this.buffer.push(t, e, s, i);
      }
    }
    shift(t, e, s, i) {
      if (t & 131072) {
        this.pushState(t & 65535, this.pos);
      } else if ((t & 262144) == 0) {
        let {
          parser: r
        } = this.p;
        if (i > this.pos || e <= r.maxNode) {
          this.pos = i;
          if (!r.stateFlag(t, 1)) {
            this.reducePos = i;
          }
        }
        this.pushState(t, s);
        this.shiftContext(e, s);
        if (e <= r.maxNode) {
          this.buffer.push(e, s, i, 4);
        }
      } else {
        this.pos = i;
        this.shiftContext(e, s);
        if (e <= this.p.parser.maxNode) {
          this.buffer.push(e, s, i, 4);
        }
      }
    }
    apply(t, e, s, i) {
      if (t & 65536) {
        this.reduce(t);
      } else {
        this.shift(t, e, s, i);
      }
    }
    useNode(t, e) {
      let s = this.p.reused.length - 1;
      if (s < 0 || this.p.reused[s] != t) {
        this.p.reused.push(t);
        s++;
      }
      let i = this.pos;
      this.reducePos = this.pos = i + t.length;
      this.pushState(e, i);
      this.buffer.push(s, i, this.reducePos, -1);
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)));
      }
    }
    split() {
      let t = this;
      let e = t.buffer.length;
      while (e > 0 && t.buffer[e - 2] > t.reducePos) {
        e -= 4;
      }
      let s = t.buffer.slice(e);
      let i = t.bufferBase + e;
      while (t && i == t.bufferBase) {
        t = t.parent;
      }
      return new n(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, s, i, this.curContext, this.lookAhead, t);
    }
    recoverByDelete(t, e) {
      let s = t <= this.p.parser.maxNode;
      if (s) {
        this.storeNode(t, this.pos, e, 4);
      }
      this.storeNode(0, this.pos, e, s ? 8 : 4);
      this.pos = this.reducePos = e;
      this.score -= 190;
    }
    canShift(t) {
      let e = new o(this);
      for (;;) {
        let s = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
        if (s == 0) {
          return false;
        }
        if ((s & 65536) == 0) {
          return true;
        }
        e.reduce(s);
      }
    }
    recoverByInsert(t) {
      if (this.stack.length >= 300) {
        return [];
      }
      let e = this.p.parser.nextStates(this.state);
      if (e.length > 8 || this.stack.length >= 120) {
        let s = [];
        for (let i = 0, r; i < e.length; i += 2) {
          if ((r = e[i + 1]) != this.state && this.p.parser.hasAction(r, t)) {
            s.push(e[i], r);
          }
        }
        if (this.stack.length < 120) {
          for (let t = 0; s.length < 8 && t < e.length; t += 2) {
            let i = e[t + 1];
            if (!s.some((t, e) => e & 1 && t == i)) {
              s.push(e[t], i);
            }
          }
        }
        e = s;
      }
      let s = [];
      for (let t = 0; t < e.length && s.length < 4; t += 2) {
        let i = e[t + 1];
        if (i == this.state) {
          continue;
        }
        let r = this.split();
        r.pushState(i, this.pos);
        r.storeNode(0, r.pos, r.pos, 4, true);
        r.shiftContext(e[t], this.pos);
        r.reducePos = this.pos;
        r.score -= 200;
        s.push(r);
      }
      return s;
    }
    forceReduce() {
      let {
        parser: t
      } = this.p;
      let e = t.stateSlot(this.state, 5);
      if ((e & 65536) == 0) {
        return false;
      }
      if (!t.validAction(this.state, e)) {
        let s = e >> 19;
        let i = e & 65535;
        let r = this.stack.length - s * 3;
        if (r < 0 || t.getGoto(this.stack[r], i, false) < 0) {
          let t = this.findForcedReduction();
          if (t == null) {
            return false;
          }
          e = t;
        }
        this.storeNode(0, this.pos, this.pos, 4, true);
        this.score -= 100;
      }
      this.reducePos = this.pos;
      this.reduce(e);
      return true;
    }
    findForcedReduction() {
      let {
        parser: t
      } = this.p;
      let e = [];
      let s = (i, r) => {
        if (!e.includes(i)) {
          e.push(i);
          return t.allActions(i, e => {
            if (e & 393216) ;else if (e & 65536) {
              let s = (e >> 19) - r;
              if (s > 1) {
                let i = e & 65535;
                let r = this.stack.length - s * 3;
                if (r >= 0 && t.getGoto(this.stack[r], i, false) >= 0) {
                  return s << 19 | 65536 | i;
                }
              }
            } else {
              let t = s(e, r + 1);
              if (t != null) {
                return t;
              }
            }
          });
        }
      };
      return s(this.state, 0);
    }
    forceAll() {
      while (!this.p.parser.stateFlag(this.state, 2)) {
        if (!this.forceReduce()) {
          this.storeNode(0, this.pos, this.pos, 4, true);
          break;
        }
      }
      return this;
    }
    get deadEnd() {
      if (this.stack.length != 3) {
        return false;
      }
      let {
        parser: t
      } = this.p;
      return t.data[t.stateSlot(this.state, 1)] == 65535 && !t.stateSlot(this.state, 4);
    }
    restart() {
      this.storeNode(0, this.pos, this.pos, 4, true);
      this.state = this.stack[0];
      this.stack.length = 0;
    }
    sameState(t) {
      if (this.state != t.state || this.stack.length != t.stack.length) {
        return false;
      }
      for (let e = 0; e < this.stack.length; e += 3) {
        if (this.stack[e] != t.stack[e]) {
          return false;
        }
      }
      return true;
    }
    get parser() {
      return this.p.parser;
    }
    dialectEnabled(t) {
      return this.p.parser.dialect.flags[t];
    }
    shiftContext(t, e) {
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)));
      }
    }
    reduceContext(t, e) {
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)));
      }
    }
    emitContext() {
      let t = this.buffer.length - 1;
      if (t < 0 || this.buffer[t] != -3) {
        this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
      }
    }
    emitLookAhead() {
      let t = this.buffer.length - 1;
      if (t < 0 || this.buffer[t] != -4) {
        this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
      }
    }
    updateContext(t) {
      if (t != this.curContext.context) {
        let e = new h(this.curContext.tracker, t);
        if (e.hash != this.curContext.hash) {
          this.emitContext();
        }
        this.curContext = e;
      }
    }
    setLookAhead(t) {
      if (t > this.lookAhead) {
        this.emitLookAhead();
        this.lookAhead = t;
      }
    }
    close() {
      if (this.curContext && this.curContext.tracker.strict) {
        this.emitContext();
      }
      if (this.lookAhead > 0) {
        this.emitLookAhead();
      }
    }
  }
  class h {
    constructor(t, e) {
      this.tracker = t;
      this.context = e;
      this.hash = t.strict ? t.hash(e) : 0;
    }
  }
  class o {
    constructor(t) {
      this.start = t;
      this.state = t.state;
      this.stack = t.stack;
      this.base = this.stack.length;
    }
    reduce(t) {
      let e = t >> 19;
      if (e == 0) {
        if (this.stack == this.start.stack) {
          this.stack = this.stack.slice();
        }
        this.stack.push(this.state, 0, 0);
        this.base += 3;
      } else {
        this.base -= (e - 1) * 3;
      }
      let s = this.start.p.parser.getGoto(this.stack[this.base - 3], t & 65535, true);
      this.state = s;
    }
  }
  class a {
    constructor(t, e, s) {
      this.stack = t;
      this.pos = e;
      this.index = s;
      this.buffer = t.buffer;
      if (this.index == 0) {
        this.maybeNext();
      }
    }
    static create(t, e = t.bufferBase + t.buffer.length) {
      return new a(t, e, e - t.bufferBase);
    }
    maybeNext() {
      let t = this.stack.parent;
      if (t != null) {
        this.index = this.stack.bufferBase - t.bufferBase;
        this.stack = t;
        this.buffer = t.buffer;
      }
    }
    get id() {
      return this.buffer[this.index - 4];
    }
    get start() {
      return this.buffer[this.index - 3];
    }
    get end() {
      return this.buffer[this.index - 2];
    }
    get size() {
      return this.buffer[this.index - 1];
    }
    next() {
      this.index -= 4;
      this.pos -= 4;
      if (this.index == 0) {
        this.maybeNext();
      }
    }
    fork() {
      return new a(this.stack, this.pos, this.index);
    }
  }
  function l(t, e = Uint16Array) {
    if (typeof t != "string") {
      return t;
    }
    let s = null;
    for (let i = 0, r = 0; i < t.length;) {
      let n = 0;
      while (true) {
        let e = t.charCodeAt(i++);
        let s = false;
        if (e == 126) {
          n = 65535;
          break;
        }
        if (e >= 92) {
          e--;
        }
        if (e >= 34) {
          e--;
        }
        let r = e - 32;
        if (r >= 46) {
          r -= 46;
          s = true;
        }
        n += r;
        if (s) {
          break;
        }
        n *= 46;
      }
      if (s) {
        s[r++] = n;
      } else {
        s = new e(n);
      }
    }
    return s;
  }
  class c {
    constructor() {
      this.start = -1;
      this.value = -1;
      this.end = -1;
      this.extended = -1;
      this.lookAhead = 0;
      this.mask = 0;
      this.context = 0;
    }
  }
  let u = new c();
  class f {
    constructor(t, e) {
      this.input = t;
      this.ranges = e;
      this.chunk = "";
      this.chunkOff = 0;
      this.chunk2 = "";
      this.chunk2Pos = 0;
      this.next = -1;
      this.token = u;
      this.rangeIndex = 0;
      this.pos = this.chunkPos = e[0].from;
      this.range = e[0];
      this.end = e[e.length - 1].to;
      this.readNext();
    }
    resolveOffset(t, e) {
      let s = this.range;
      let i = this.rangeIndex;
      let r = this.pos + t;
      while (r < s.from) {
        if (!i) {
          return null;
        }
        let t = this.ranges[--i];
        r -= s.from - t.to;
        s = t;
      }
      while (e < 0 ? r > s.to : r >= s.to) {
        if (i == this.ranges.length - 1) {
          return null;
        }
        let t = this.ranges[++i];
        r += t.from - s.to;
        s = t;
      }
      return r;
    }
    clipPos(t) {
      if (t >= this.range.from && t < this.range.to) {
        return t;
      }
      for (let e of this.ranges) {
        if (e.to > t) {
          return Math.max(t, e.from);
        }
      }
      return this.end;
    }
    peek(t) {
      let e = this.chunkOff + t;
      let s;
      let i;
      if (e >= 0 && e < this.chunk.length) {
        s = this.pos + t;
        i = this.chunk.charCodeAt(e);
      } else {
        let e = this.resolveOffset(t, 1);
        if (e == null) {
          return -1;
        }
        if ((s = e) >= this.chunk2Pos && s < this.chunk2Pos + this.chunk2.length) {
          i = this.chunk2.charCodeAt(s - this.chunk2Pos);
        } else {
          let t = this.rangeIndex;
          let e = this.range;
          while (e.to <= s) {
            e = this.ranges[++t];
          }
          this.chunk2 = this.input.chunk(this.chunk2Pos = s);
          if (s + this.chunk2.length > e.to) {
            this.chunk2 = this.chunk2.slice(0, e.to - s);
          }
          i = this.chunk2.charCodeAt(0);
        }
      }
      if (s >= this.token.lookAhead) {
        this.token.lookAhead = s + 1;
      }
      return i;
    }
    acceptToken(t, e = 0) {
      let s = e ? this.resolveOffset(e, -1) : this.pos;
      if (s == null || s < this.token.start) {
        throw RangeError("Token end out of bounds");
      }
      this.token.value = t;
      this.token.end = s;
    }
    acceptTokenTo(t, e) {
      this.token.value = t;
      this.token.end = e;
    }
    getChunk() {
      if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
        let {
          chunk: t,
          chunkPos: e
        } = this;
        this.chunk = this.chunk2;
        this.chunkPos = this.chunk2Pos;
        this.chunk2 = t;
        this.chunk2Pos = e;
        this.chunkOff = this.pos - this.chunkPos;
      } else {
        this.chunk2 = this.chunk;
        this.chunk2Pos = this.chunkPos;
        let t = this.input.chunk(this.pos);
        let e = this.pos + t.length;
        this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t;
        this.chunkPos = this.pos;
        this.chunkOff = 0;
      }
    }
    readNext() {
      if (this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length)) {
        return this.next = -1;
      } else {
        return this.next = this.chunk.charCodeAt(this.chunkOff);
      }
    }
    advance(t = 1) {
      for (this.chunkOff += t; this.pos + t >= this.range.to;) {
        if (this.rangeIndex == this.ranges.length - 1) {
          return this.setDone();
        }
        t -= this.range.to - this.pos;
        this.range = this.ranges[++this.rangeIndex];
        this.pos = this.range.from;
      }
      this.pos += t;
      if (this.pos >= this.token.lookAhead) {
        this.token.lookAhead = this.pos + 1;
      }
      return this.readNext();
    }
    setDone() {
      this.pos = this.chunkPos = this.end;
      this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
      this.chunk = "";
      return this.next = -1;
    }
    reset(t, e) {
      if (e) {
        this.token = e;
        e.start = t;
        e.lookAhead = t + 1;
        e.value = e.extended = -1;
      } else {
        this.token = u;
      }
      if (this.pos != t) {
        this.pos = t;
        if (t == this.end) {
          this.setDone();
          return this;
        }
        while (t < this.range.from) {
          this.range = this.ranges[--this.rangeIndex];
        }
        while (t >= this.range.to) {
          this.range = this.ranges[++this.rangeIndex];
        }
        if (t >= this.chunkPos && t < this.chunkPos + this.chunk.length) {
          this.chunkOff = t - this.chunkPos;
        } else {
          this.chunk = "";
          this.chunkOff = 0;
        }
        this.readNext();
      }
      return this;
    }
    read(t, e) {
      if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length) {
        return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
      }
      if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length) {
        return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
      }
      if (t >= this.range.from && e <= this.range.to) {
        return this.input.read(t, e);
      }
      let s = "";
      for (let i of this.ranges) {
        if (i.from >= e) {
          break;
        }
        if (i.to > t) {
          s += this.input.read(Math.max(i.from, t), Math.min(i.to, e));
        }
      }
      return s;
    }
  }
  class p {
    constructor(t, e) {
      this.data = t;
      this.id = e;
    }
    token(t, e) {
      let {
        parser: s
      } = e.p;
      d(this.data, t, e, this.id, s.data, s.tokenPrecTable);
    }
  }
  p.prototype.contextual = p.prototype.fallback = p.prototype.extend = false;
  (class {
    constructor(t, e, s) {
      this.precTable = e;
      this.elseToken = s;
      this.data = typeof t == "string" ? l(t) : t;
    }
    token(t, e) {
      let s = t.pos;
      let i = 0;
      while (true) {
        let s = t.next < 0;
        let r = t.resolveOffset(1, 1);
        d(this.data, t, e, 0, this.data, this.precTable);
        if (t.token.value > -1) {
          break;
        }
        if (this.elseToken == null) {
          return;
        }
        if (!s) {
          i++;
        }
        if (r == null) {
          break;
        }
        t.reset(r, t.token);
      }
      if (i) {
        t.reset(s, t.token);
        t.acceptToken(this.elseToken, i);
      }
    }
  }).prototype.contextual = p.prototype.fallback = p.prototype.extend = false;
  class O {
    constructor(t, e = {}) {
      this.token = t;
      this.contextual = !!e.contextual;
      this.fallback = !!e.fallback;
      this.extend = !!e.extend;
    }
  }
  function d(t, e, s, i, r, n) {
    let h = 0;
    let o = 1 << i;
    let {
      dialect: a
    } = s.p.parser;
    t: while ((o & t[h]) != 0) {
      let s = t[h + 1];
      for (let i = h + 3; i < s; i += 2) {
        if ((t[i + 1] & o) > 0) {
          let s = t[i];
          if (a.allows(s) && (e.token.value == -1 || e.token.value == s || function (t, e, s, i) {
            let r = k(s, i, e);
            return r < 0 || k(s, i, t) < r;
          }(s, e.token.value, r, n))) {
            e.acceptToken(s);
            break;
          }
        }
      }
      let i = e.next;
      let l = 0;
      let c = t[h + 2];
      if (e.next < 0 && c > l && t[s + c * 3 - 3] == 65535) {
        h = t[s + c * 3 - 1];
        continue;
      }
      while (l < c) {
        let r = l + c >> 1;
        let n = s + r + (r << 1);
        let o = t[n];
        let a = t[n + 1] || 65536;
        if (i < o) {
          c = r;
        } else if (i >= a) {
          l = r + 1;
        } else {
          h = t[n + 2];
          e.advance();
          continue t;
        }
      }
      break;
    }
  }
  function k(t, e, s) {
    for (let i = e, r; (r = t[i]) != 65535; i++) {
      if (r == s) {
        return i - e;
      }
    }
    return -1;
  }
  let g = processBrowserShim !== undefined && processBrowserShim.env && /\bparse\b/.test(processBrowserShim.env.LOG);
  let m = null;
  function x(t, e, s) {
    let r = t.cursor(syntaxTreeCore.IterMode.IncludeAnonymous);
    for (r.moveTo(e);;) {
      if (!(s < 0 ? r.childBefore(e) : r.childAfter(e))) {
        while (true) {
          if ((s < 0 ? r.to < e : r.from > e) && !r.type.isError) {
            if (s < 0) {
              return Math.max(0, Math.min(r.to - 1, e - 25));
            } else {
              return Math.min(t.length, Math.max(r.from + 1, e + 25));
            }
          }
          if (s < 0 ? r.prevSibling() : r.nextSibling()) {
            break;
          }
          if (!r.parent()) {
            if (s < 0) {
              return 0;
            } else {
              return t.length;
            }
          }
        }
      }
    }
  }
  class P {
    constructor(t, e) {
      this.fragments = t;
      this.nodeSet = e;
      this.i = 0;
      this.fragment = null;
      this.safeFrom = -1;
      this.safeTo = -1;
      this.trees = [];
      this.start = [];
      this.index = [];
      this.nextFragment();
    }
    nextFragment() {
      let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
      if (t) {
        this.safeFrom = t.openStart ? x(t.tree, t.from + t.offset, 1) - t.offset : t.from;
        this.safeTo = t.openEnd ? x(t.tree, t.to + t.offset, -1) - t.offset : t.to;
        while (this.trees.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
        }
        this.trees.push(t.tree);
        this.start.push(-t.offset);
        this.index.push(0);
        this.nextStart = this.safeFrom;
      } else {
        this.nextStart = 1000000000;
      }
    }
    nodeAt(t) {
      if (t < this.nextStart) {
        return null;
      }
      while (this.fragment && this.safeTo <= t) {
        this.nextFragment();
      }
      if (!this.fragment) {
        return null;
      }
      while (true) {
        let e = this.trees.length - 1;
        if (e < 0) {
          this.nextFragment();
          return null;
        }
        let s = this.trees[e];
        let r = this.index[e];
        if (r == s.children.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
          continue;
        }
        let n = s.children[r];
        let h = this.start[e] + s.positions[r];
        if (h > t) {
          this.nextStart = h;
          return null;
        }
        if (n instanceof syntaxTreeCore.Tree) {
          if (h == t) {
            if (h < this.safeFrom) {
              return null;
            }
            let t = h + n.length;
            if (t <= this.safeTo) {
              let e = n.prop(syntaxTreeCore.NodeTypeProp.lookAhead);
              if (!e || t + e < this.fragment.to) {
                return n;
              }
            }
          }
          this.index[e]++;
          if (h + n.length >= Math.max(this.safeFrom, t)) {
            this.trees.push(n);
            this.start.push(h);
            this.index.push(0);
          }
        } else {
          this.index[e]++;
          this.nextStart = h + n.length;
        }
      }
    }
  }
  class b {
    constructor(t, e) {
      this.stream = e;
      this.tokens = [];
      this.mainToken = null;
      this.actions = [];
      this.tokens = t.tokenizers.map(t => new c());
    }
    getActions(t) {
      let e = 0;
      let s = null;
      let {
        parser: i
      } = t.p;
      let {
        tokenizers: r
      } = i;
      let n = i.stateSlot(t.state, 3);
      let h = t.curContext ? t.curContext.hash : 0;
      let o = 0;
      for (let i = 0; i < r.length; i++) {
        if ((1 << i & n) == 0) {
          continue;
        }
        let a = r[i];
        let l = this.tokens[i];
        if ((!s || a.fallback) && ((a.contextual || l.start != t.pos || l.mask != n || l.context != h) && (this.updateCachedToken(l, a, t), l.mask = n, l.context = h), l.lookAhead > l.end + 25 && (o = Math.max(l.lookAhead, o)), l.value != 0)) {
          let i = e;
          if (l.extended > -1) {
            e = this.addActions(t, l.extended, l.end, e);
          }
          e = this.addActions(t, l.value, l.end, e);
          if (!a.extend && (s = l, e > i)) {
            break;
          }
        }
      }
      while (this.actions.length > e) {
        this.actions.pop();
      }
      if (o) {
        t.setLookAhead(o);
      }
      if (!s && t.pos == this.stream.end) {
        (s = new c()).value = t.p.parser.eofTerm;
        s.start = s.end = t.pos;
        e = this.addActions(t, s.value, s.end, e);
      }
      this.mainToken = s;
      return this.actions;
    }
    getMainToken(t) {
      if (this.mainToken) {
        return this.mainToken;
      }
      let e = new c();
      let {
        pos: s,
        p: i
      } = t;
      e.start = s;
      e.end = Math.min(s + 1, i.stream.end);
      e.value = s == i.stream.end ? i.parser.eofTerm : 0;
      return e;
    }
    updateCachedToken(t, e, s) {
      let i = this.stream.clipPos(s.pos);
      e.token(this.stream.reset(i, t), s);
      if (t.value > -1) {
        let {
          parser: e
        } = s.p;
        for (let i = 0; i < e.specialized.length; i++) {
          if (e.specialized[i] == t.value) {
            let r = e.specializers[i](this.stream.read(t.start, t.end), s);
            if (r >= 0 && s.p.parser.dialect.allows(r >> 1)) {
              if ((r & 1) == 0) {
                t.value = r >> 1;
              } else {
                t.extended = r >> 1;
              }
              break;
            }
          }
        }
      } else {
        t.value = 0;
        t.end = this.stream.clipPos(i + 1);
      }
    }
    putAction(t, e, s, i) {
      for (let e = 0; e < i; e += 3) {
        if (this.actions[e] == t) {
          return i;
        }
      }
      this.actions[i++] = t;
      this.actions[i++] = e;
      this.actions[i++] = s;
      return i;
    }
    addActions(t, e, s, i) {
      let {
        state: r
      } = t;
      let {
        parser: n
      } = t.p;
      let {
        data: h
      } = n;
      for (let t = 0; t < 2; t++) {
        for (let o = n.stateSlot(r, t ? 2 : 1);; o += 3) {
          if (h[o] == 65535) {
            if (h[o + 1] == 1) {
              o = T(h, o + 2);
            } else {
              if (i == 0 && h[o + 1] == 2) {
                i = this.putAction(T(h, o + 2), e, s, i);
              }
              break;
            }
          }
          if (h[o] == e) {
            i = this.putAction(T(h, o + 1), e, s, i);
          }
        }
      }
      return i;
    }
  }
  class S {
    constructor(t, e, s, i) {
      this.parser = t;
      this.input = e;
      this.ranges = i;
      this.recovering = 0;
      this.nextStackID = 9812;
      this.minStackPos = 0;
      this.reused = [];
      this.stoppedAt = null;
      this.lastBigReductionStart = -1;
      this.lastBigReductionSize = 0;
      this.bigReductionCount = 0;
      this.stream = new f(e, i);
      this.tokens = new b(t, this.stream);
      this.topTerm = t.top[1];
      let {
        from: r
      } = i[0];
      this.stacks = [n.start(this, t.top[0], r)];
      this.fragments = s.length && this.stream.end - r > t.bufferLength * 4 ? new P(s, t.nodeSet) : null;
    }
    get parsedPos() {
      return this.minStackPos;
    }
    advance() {
      let t;
      let e;
      let s = this.stacks;
      let i = this.minStackPos;
      let r = this.stacks = [];
      if (this.bigReductionCount > 300 && s.length == 1) {
        let [t] = s;
        while (t.forceReduce() && t.stack.length && t.stack[t.stack.length - 2] >= this.lastBigReductionStart);
        this.bigReductionCount = this.lastBigReductionSize = 0;
      }
      for (let n = 0; n < s.length; n++) {
        let h = s[n];
        while (true) {
          this.tokens.mainToken = null;
          if (h.pos > i) {
            r.push(h);
          } else {
            if (this.advanceStack(h, r, s)) {
              continue;
            }
            if (!t) {
              t = [];
              e = [];
            }
            t.push(h);
            let i = this.tokens.getMainToken(h);
            e.push(i.value, i.end);
          }
          break;
        }
      }
      if (!r.length) {
        let e = t && function (t) {
          let e = null;
          for (let s of t) {
            let t = s.p.stoppedAt;
            if ((s.pos == s.p.stream.end || t != null && s.pos > t) && s.p.parser.stateFlag(s.state, 2) && (!e || e.score < s.score)) {
              e = s;
            }
          }
          return e;
        }(t);
        if (e) {
          return this.stackToTree(e);
        }
        if (this.parser.strict) {
          throw SyntaxError("No parse at " + i);
        }
        this.recovering ||= 5;
      }
      if (this.recovering && t) {
        let s = this.stoppedAt != null && t[0].pos > this.stoppedAt ? t[0] : this.runRecovery(t, e, r);
        if (s) {
          return this.stackToTree(s.forceAll());
        }
      }
      if (this.recovering) {
        let t = this.recovering == 1 ? 1 : this.recovering * 3;
        if (r.length > t) {
          for (r.sort((t, e) => e.score - t.score); r.length > t;) {
            r.pop();
          }
        }
        if (r.some(t => t.reducePos > i)) {
          this.recovering--;
        }
      } else if (r.length > 1) {
        e: for (let t = 0; t < r.length - 1; t++) {
          let e = r[t];
          for (let s = t + 1; s < r.length; s++) {
            let i = r[s];
            if (e.sameState(i) || e.buffer.length > 500 && i.buffer.length > 500) {
              if ((e.score - i.score || e.buffer.length - i.buffer.length) > 0) {
                r.splice(s--, 1);
              } else {
                r.splice(t--, 1);
                continue e;
              }
            }
          }
        }
        if (r.length > 12) {
          r.splice(12, r.length - 12);
        }
      }
      this.minStackPos = r[0].pos;
      for (let t = 1; t < r.length; t++) {
        if (r[t].pos < this.minStackPos) {
          this.minStackPos = r[t].pos;
        }
      }
      return null;
    }
    stopAt(t) {
      if (this.stoppedAt != null && this.stoppedAt < t) {
        throw RangeError("Can't move stoppedAt forward");
      }
      this.stoppedAt = t;
    }
    advanceStack(t, e, s) {
      let r = t.pos;
      let {
        parser: n
      } = this;
      if (g) {
        this.stackID(t);
      }
      if (this.stoppedAt != null && r > this.stoppedAt) {
        if (t.forceReduce()) {
          return t;
        } else {
          return null;
        }
      }
      if (this.fragments) {
        let e = t.curContext && t.curContext.tracker.strict;
        let s = e ? t.curContext.hash : 0;
        for (let h = this.fragments.nodeAt(r); h;) {
          let r = this.parser.nodeSet.types[h.type.id] == h.type ? n.getGoto(t.state, h.type.id) : -1;
          if (r > -1 && h.length && (!e || (h.prop(syntaxTreeCore.NodeTypeProp.contextHash) || 0) == s)) {
            t.useNode(h, r);
            return true;
          }
          if (!(h instanceof syntaxTreeCore.Tree) || h.children.length == 0 || h.positions[0] > 0) {
            break;
          }
          let o = h.children[0];
          if (o instanceof syntaxTreeCore.Tree && h.positions[0] == 0) {
            h = o;
          } else {
            break;
          }
        }
      }
      let h = n.stateSlot(t.state, 4);
      if (h > 0) {
        t.reduce(h);
        return true;
      }
      if (t.stack.length >= 8400) {
        while (t.stack.length > 6000 && t.forceReduce());
      }
      let o = this.tokens.getActions(t);
      for (let i = 0; i < o.length;) {
        let n = o[i++];
        let h = o[i++];
        let a = o[i++];
        let l = i == o.length || !s;
        let c = l ? t : t.split();
        let u = this.tokens.mainToken;
        c.apply(n, h, u ? u.start : c.pos, a);
        if (l) {
          return true;
        }
        if (c.pos > r) {
          e.push(c);
        } else {
          s.push(c);
        }
      }
      return false;
    }
    advanceFully(t, e) {
      let s = t.pos;
      while (true) {
        if (!this.advanceStack(t, null, null)) {
          return false;
        }
        if (t.pos > s) {
          Q(t, e);
          return true;
        }
      }
    }
    runRecovery(t, e, s) {
      let i = null;
      let r = false;
      for (let n = 0; n < t.length; n++) {
        let h = t[n];
        let o = e[n << 1];
        let a = e[(n << 1) + 1];
        let l = g ? this.stackID(h) + " -> " : "";
        if (h.deadEnd && (r || (r = true, h.restart(), this.advanceFully(h, s)))) {
          continue;
        }
        let c = h.split();
        for (let t = 0; c.forceReduce() && t < 10 && !this.advanceFully(c, s); t++) {
          if (g) {
            this.stackID(c);
          }
        }
        for (let t of h.recoverByInsert(o)) {
          this.advanceFully(t, s);
        }
        if (this.stream.end > h.pos) {
          if (a == h.pos) {
            a++;
            o = 0;
          }
          h.recoverByDelete(o, a);
          Q(h, s);
        } else if (!i || i.score < h.score) {
          i = h;
        }
      }
      return i;
    }
    stackToTree(t) {
      t.close();
      return syntaxTreeCore.Tree.build({
        buffer: a.create(t),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: t.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm
      });
    }
    stackID(t) {
      let e = (m ||= new WeakMap()).get(t);
      if (!e) {
        m.set(t, e = String.fromCodePoint(this.nextStackID++));
      }
      return e + t;
    }
  }
  function Q(t, e) {
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (i.pos == t.pos && i.sameState(t)) {
        if (e[s].score < t.score) {
          e[s] = t;
        }
        return;
      }
    }
    e.push(t);
  }
  class R {
    constructor(t, e, s) {
      this.source = t;
      this.flags = e;
      this.disabled = s;
    }
    allows(t) {
      return !this.disabled || this.disabled[t] == 0;
    }
  }
  let v = t => t;
  class X extends syntaxTreeCore.Parser {
    constructor(t) {
      super();
      this.wrappers = [];
      if (t.version != 14) {
        throw RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);
      }
      let e = t.nodeNames.split(" ");
      this.minRepeatTerm = e.length;
      for (let s = 0; s < t.repeatNodeCount; s++) {
        e.push("");
      }
      let s = Object.keys(t.topRules).map(e => t.topRules[e][1]);
      let r = [];
      for (let t = 0; t < e.length; t++) {
        r.push([]);
      }
      function n(t, e, s) {
        r[t].push([e, e.deserialize(String(s))]);
      }
      if (t.nodeProps) {
        for (let e of t.nodeProps) {
          let t = e[0];
          if (typeof t == "string") {
            t = syntaxTreeCore.NodeTypeProp[t];
          }
          for (let s = 1; s < e.length;) {
            let i = e[s++];
            if (i >= 0) {
              n(i, t, e[s++]);
            } else {
              let r = e[s + -i];
              for (let h = -i; h > 0; h--) {
                n(e[s++], t, r);
              }
              s++;
            }
          }
        }
      }
      this.nodeSet = new syntaxTreeCore.NodeTypeSet(e.map((e, n) => syntaxTreeCore.NodeType.define({
        name: n >= this.minRepeatTerm ? undefined : e,
        id: n,
        props: r[n],
        top: s.indexOf(n) > -1,
        error: n == 0,
        skipped: t.skippedNodes && t.skippedNodes.indexOf(n) > -1
      })));
      if (t.propSources) {
        this.nodeSet = this.nodeSet.extend(...t.propSources);
      }
      this.strict = false;
      this.bufferLength = syntaxTreeCore.maxBufferLength;
      let h = l(t.tokenData);
      this.context = t.context;
      this.specializerSpecs = t.specialized || [];
      this.specialized = new Uint16Array(this.specializerSpecs.length);
      for (let t = 0; t < this.specializerSpecs.length; t++) {
        this.specialized[t] = this.specializerSpecs[t].term;
      }
      this.specializers = this.specializerSpecs.map(C);
      this.states = l(t.states, Uint32Array);
      this.data = l(t.stateData);
      this.goto = l(t.goto);
      this.maxTerm = t.maxTerm;
      this.tokenizers = t.tokenizers.map(t => typeof t == "number" ? new p(h, t) : t);
      this.topRules = t.topRules;
      this.dialects = t.dialects || {};
      this.dynamicPrecedences = t.dynamicPrecedences || null;
      this.tokenPrecTable = t.tokenPrec;
      this.termNames = t.termNames || null;
      this.maxNode = this.nodeSet.types.length - 1;
      this.dialect = this.parseDialect();
      this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(t, e, s) {
      let i = new S(this, t, e, s);
      for (let r of this.wrappers) {
        i = r(i, t, e, s);
      }
      return i;
    }
    getGoto(t, e, s = false) {
      let i = this.goto;
      if (e >= i[0]) {
        return -1;
      }
      let r = i[e + 1];
      for (;;) {
        let e = i[r++];
        let n = e & 1;
        let h = i[r++];
        if (n && s) {
          return h;
        }
        for (let s = r + (e >> 1); r < s; r++) {
          if (i[r] == t) {
            return h;
          }
        }
        if (n) {
          return -1;
        }
      }
    }
    hasAction(t, e) {
      let s = this.data;
      for (let i = 0; i < 2; i++) {
        for (let r = this.stateSlot(t, i ? 2 : 1), n;; r += 3) {
          if ((n = s[r]) == 65535) {
            if (s[r + 1] == 1) {
              n = s[r = T(s, r + 2)];
            } else if (s[r + 1] == 2) {
              return T(s, r + 2);
            } else {
              break;
            }
          }
          if (n == e || n == 0) {
            return T(s, r + 1);
          }
        }
      }
      return 0;
    }
    stateSlot(t, e) {
      return this.states[t * 6 + e];
    }
    stateFlag(t, e) {
      return (this.stateSlot(t, 0) & e) > 0;
    }
    validAction(t, e) {
      return !!this.allActions(t, t => t == e || null);
    }
    allActions(t, e) {
      let s = this.stateSlot(t, 4);
      let i = s ? e(s) : undefined;
      for (let s = this.stateSlot(t, 1); i == null; s += 3) {
        if (this.data[s] == 65535) {
          if (this.data[s + 1] == 1) {
            s = T(this.data, s + 2);
          } else {
            break;
          }
        }
        i = e(T(this.data, s + 1));
      }
      return i;
    }
    nextStates(t) {
      let e = [];
      for (let s = this.stateSlot(t, 1);; s += 3) {
        if (this.data[s] == 65535) {
          if (this.data[s + 1] == 1) {
            s = T(this.data, s + 2);
          } else {
            break;
          }
        }
        if ((this.data[s + 2] & 1) == 0) {
          let t = this.data[s + 1];
          if (!e.some((e, s) => s & 1 && e == t)) {
            e.push(this.data[s], t);
          }
        }
      }
      return e;
    }
    configure(t) {
      let e = Object.assign(Object.create(X.prototype), this);
      if (t.props) {
        e.nodeSet = this.nodeSet.extend(...t.props);
      }
      if (t.top) {
        let s = this.topRules[t.top];
        if (!s) {
          throw RangeError(`Invalid top rule name ${t.top}`);
        }
        e.top = s;
      }
      if (t.tokenizers) {
        e.tokenizers = this.tokenizers.map(e => {
          let s = t.tokenizers.find(t => t.from == e);
          if (s) {
            return s.to;
          } else {
            return e;
          }
        });
      }
      if (t.specializers) {
        e.specializers = this.specializers.slice();
        e.specializerSpecs = this.specializerSpecs.map((s, i) => {
          let r = t.specializers.find(t => t.from == s.external);
          if (!r) {
            return s;
          }
          let n = Object.assign(Object.assign({}, s), {
            external: r.to
          });
          e.specializers[i] = C(n);
          return n;
        });
      }
      if (t.contextTracker) {
        e.context = t.contextTracker;
      }
      if (t.dialect) {
        e.dialect = this.parseDialect(t.dialect);
      }
      if (t.strict != null) {
        e.strict = t.strict;
      }
      if (t.wrap) {
        e.wrappers = e.wrappers.concat(t.wrap);
      }
      if (t.bufferLength != null) {
        e.bufferLength = t.bufferLength;
      }
      return e;
    }
    hasWrappers() {
      return this.wrappers.length > 0;
    }
    getName(t) {
      if (this.termNames) {
        return this.termNames[t];
      } else {
        return String(t <= this.maxNode && this.nodeSet.types[t].name || t);
      }
    }
    get eofTerm() {
      return this.maxNode + 1;
    }
    get topNode() {
      return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(t) {
      let e = this.dynamicPrecedences;
      if (e == null) {
        return 0;
      } else {
        return e[t] || 0;
      }
    }
    parseDialect(t) {
      let e = Object.keys(this.dialects);
      let s = e.map(() => false);
      if (t) {
        for (let i of t.split(" ")) {
          let t = e.indexOf(i);
          if (t >= 0) {
            s[t] = true;
          }
        }
      }
      let i = null;
      for (let t = 0; t < e.length; t++) {
        if (!s[t]) {
          for (let s = this.dialects[e[t]], r; (r = this.data[s++]) != 65535;) {
            (i ||= new Uint8Array(this.maxTerm + 1))[r] = 1;
          }
        }
      }
      return new R(t, s, i);
    }
    static deserialize(t) {
      return new X(t);
    }
  }
  function T(t, e) {
    return t[e] | t[e + 1] << 16;
  }
  function C(t) {
    if (t.external) {
      let e = +!!t.extend;
      return (s, i) => t.external(s, i) << 1 | e;
    }
    return t.get;
  }
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  class A {
    constructor(t, e, s) {
      this.parent = t;
      this.depth = e;
      this.type = s;
      this.hash = (t ? t.hash + t.hash << 8 : 0) + e + (e << 4) + s;
    }
  }
  function w(t, e) {
    for (let s = 0, i = e - t.pos - 1;; i--, s++) {
      let e = t.peek(i);
      if (D(e) || e == -1) {
        return s;
      }
    }
  }
  function z(t) {
    return t == 32 || t == 9;
  }
  function D(t) {
    return t == 10 || t == 13;
  }
  function $(t) {
    var e;
    return t < 0 || z(e = t) || D(e);
  }
  A.top = new A(null, -1, 0);
  let N = new class {
    constructor(t) {
      this.start = t.start;
      this.shift = t.shift || v;
      this.reduce = t.reduce || v;
      this.reuse = t.reuse || v;
      this.hash = t.hash || (() => 0);
      this.strict = t.strict !== false;
    }
  }({
    start: A.top,
    reduce: (t, e) => t.type == 3 && (e == 20 || e == 34) ? t.parent : t,
    shift(t, e, s, i) {
      if (e == 3) {
        return new A(t, w(i, i.pos), 1);
      }
      if (e == 65 || e == 5) {
        return new A(t, w(i, i.pos), 2);
      }
      if (e == 63) {
        return t.parent;
      }
      if (e == 19 || e == 33) {
        return new A(t, 0, 3);
      }
      if (e == 13 && t.type == 4) {
        return t.parent;
      }
      if (e == 47) {
        let e = /[1-9]/.exec(i.read(i.pos, s.pos));
        if (e) {
          return new A(t, t.depth + +e[0], 4);
        }
      }
      return t;
    },
    hash: t => t.hash
  });
  function B(t, e, s = 0) {
    return t.peek(s) == e && t.peek(s + 1) == e && t.peek(s + 2) == e && $(t.peek(s + 3));
  }
  let U = new O((t, e) => {
    if (t.next == -1 && e.canShift(64)) {
      return t.acceptToken(64);
    }
    let s = t.peek(-1);
    if ((D(s) || s < 0) && e.context.type != 3) {
      if (B(t, 45)) {
        if (!e.canShift(63)) {
          return t.acceptToken(1, 3);
        }
        t.acceptToken(63);
      }
      if (B(t, 46)) {
        if (!e.canShift(63)) {
          return t.acceptToken(2, 3);
        }
        t.acceptToken(63);
      }
      let s = 0;
      while (t.next == 32) {
        s++;
        t.advance();
      }
      if ((!!(s < e.context.depth) || s == e.context.depth && e.context.type == 1 && (t.next != 45 || !$(t.peek(1)))) && t.next != -1 && !D(t.next) && t.next != 35) {
        t.acceptToken(63, -s);
      }
    }
  }, {
    contextual: true
  });
  let W = new O((t, e) => {
    if (e.context.type == 3) {
      if (t.next == 63) {
        t.advance();
        if ($(t.next)) {
          t.acceptToken(7);
        }
      }
      return;
    }
    if (t.next == 45) {
      t.advance();
      if ($(t.next)) {
        t.acceptToken(e.context.type == 1 && e.context.depth == w(t, t.pos - 1) ? 4 : 3);
      }
    } else if (t.next == 63) {
      t.advance();
      if ($(t.next)) {
        t.acceptToken(e.context.type == 2 && e.context.depth == w(t, t.pos - 1) ? 6 : 5);
      }
    } else {
      let s = t.pos;
      while (true) {
        if (z(t.next)) {
          if (t.pos == s) {
            return;
          }
          t.advance();
        } else if (t.next == 33) {
          G(t);
        } else if (t.next == 38) {
          L(t);
        } else if (t.next == 42) {
          L(t);
          break;
        } else if (t.next == 39 || t.next == 34) {
          if (F(t, true)) {
            break;
          }
          return;
        } else if (t.next == 91 || t.next == 123) {
          if (!function (t) {
            let e = [];
            let s = t.pos + 1024;
            while (true) {
              if (t.next == 91 || t.next == 123) {
                e.push(t.next);
                t.advance();
              } else if (t.next == 39 || t.next == 34) {
                if (!F(t, true)) {
                  return false;
                }
              } else if (t.next == 93 || t.next == 125) {
                if (e[e.length - 1] != t.next - 2) {
                  return false;
                }
                e.pop();
                t.advance();
                if (!e.length) {
                  return true;
                }
              } else {
                if (t.next < 0 || t.pos > s || D(t.next)) {
                  return false;
                }
                t.advance();
              }
            }
          }(t)) {
            return;
          }
          break;
        } else {
          I(t, true, false, 0);
          break;
        }
      }
      while (z(t.next)) {
        t.advance();
      }
      if (t.next == 58) {
        if (t.pos == s && e.canShift(29)) {
          return;
        }
        if ($(t.peek(1))) {
          t.acceptTokenTo(e.context.type == 2 && e.context.depth == w(t, s) ? 66 : 65, s);
        }
      }
    }
  }, {
    contextual: true
  });
  function q(t) {
    return t >= 48 && t <= 57 || t >= 97 && t <= 102 || t >= 65 && t <= 70;
  }
  function Y(t, e) {
    var s;
    if (t.next == 37) {
      t.advance();
      if (q(t.next)) {
        t.advance();
      }
      if (q(t.next)) {
        t.advance();
      }
      return true;
    } else {
      return (!!((s = t.next) > 32) && !!(s < 127) && s != 34 && s != 37 && s != 44 && s != 60 && s != 62 && s != 92 && s != 94 && s != 96 && s != 123 && s != 124 && s != 125 || !!e && t.next == 44) && (t.advance(), true);
    }
  }
  function G(t) {
    t.advance();
    if (t.next == 60) {
      for (t.advance();;) {
        if (!Y(t, true)) {
          if (t.next == 62) {
            t.advance();
          }
          break;
        }
      }
    } else {
      while (Y(t, false));
    }
  }
  function L(t) {
    for (t.advance(); !$(t.next) && _(t.tag) != "f";) {
      t.advance();
    }
  }
  function F(t, e) {
    let s = t.next;
    let i = false;
    let r = t.pos;
    for (t.advance();;) {
      let n = t.next;
      if (n < 0) {
        break;
      }
      t.advance();
      if (n == s) {
        if (n == 39) {
          if (t.next == 39) {
            t.advance();
          } else {
            break;
          }
        } else {
          break;
        }
      } else if (n == 92 && s == 34) {
        if (t.next >= 0) {
          t.advance();
        }
      } else if (D(n)) {
        if (e) {
          return false;
        }
        i = true;
      } else if (e && t.pos >= r + 1024) {
        return false;
      }
    }
    return !i;
  }
  function _(t) {
    if (t < 33) {
      return "u";
    } else if (t > 125) {
      return "s";
    } else {
      return "iiisiiissisfissssssssssssisssiiissssssssssssssssssssssssssfsfssissssssssssssssssssssssssssfif"[t - 33];
    }
  }
  function Z(t, e) {
    let s = _(t);
    return s != "u" && (!e || s != "f");
  }
  function I(t, e, s, i) {
    if (_(t.next) != "s" && (t.next != 63 && t.next != 58 && t.next != 45 || !Z(t.peek(1), s))) {
      return false;
    }
    t.advance();
    let r = t.pos;
    while (true) {
      var n;
      let h = t.next;
      let o = 0;
      let a = i + 1;
      while (z(n = h) || D(n)) {
        if (D(h)) {
          if (e) {
            return false;
          }
          a = 0;
        } else {
          a++;
        }
        h = t.peek(++o);
      }
      if (!(h >= 0) || !(h == 58 ? Z(t.peek(o + 1), s) : h == 35 ? t.peek(o - 1) != 32 : Z(h, s)) || !s && a <= i || a == 0 && !s && (B(t, 45, o) || B(t, 46, o))) {
        break;
      }
      if (e && _(h) == "f") {
        return false;
      }
      for (let e = o; e >= 0; e--) {
        t.advance();
      }
      if (e && t.pos > r + 1024) {
        return false;
      }
    }
    return true;
  }
  let E = new O((t, e) => {
    if (t.next == 33) {
      G(t);
      t.acceptToken(12);
    } else if (t.next == 38 || t.next == 42) {
      let e = t.next == 38 ? 10 : 11;
      L(t);
      t.acceptToken(e);
    } else if (t.next == 39 || t.next == 34) {
      F(t, false);
      t.acceptToken(9);
    } else if (I(t, false, e.context.type == 3, e.context.depth)) {
      t.acceptToken(8);
    }
  });
  let V = new O((t, e) => {
    let s = e.context.type == 4 ? e.context.depth : -1;
    let i = t.pos;
    t: while (true) {
      let r = 0;
      let n = t.next;
      while (n == 32) {
        n = t.peek(++r);
      }
      if (!r && (B(t, 45, r) || B(t, 46, r)) || !D(n) && (s < 0 && (s = Math.max(e.context.depth + 1, r)), r < s)) {
        break;
      }
      while (true) {
        if (t.next < 0) {
          break t;
        }
        let e = D(t.next);
        t.advance();
        if (e) {
          continue t;
        }
        i = t.pos;
      }
    }
    t.acceptTokenTo(13, i);
  });
  let M = syntaxHighlightTags.defineHighlighter({
    DirectiveName: syntaxHighlightTags.defaultTags.keyword,
    DirectiveContent: syntaxHighlightTags.defaultTags.attributeValue,
    "DirectiveEnd DocEnd": syntaxHighlightTags.defaultTags.meta,
    QuotedLiteral: syntaxHighlightTags.defaultTags.string,
    BlockLiteralHeader: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.string),
    BlockLiteralContent: syntaxHighlightTags.defaultTags.content,
    Literal: syntaxHighlightTags.defaultTags.content,
    "Key/Literal Key/QuotedLiteral": syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.propertyName),
    "Anchor Alias": syntaxHighlightTags.defaultTags.labelName,
    Tag: syntaxHighlightTags.defaultTags.typeName,
    Comment: syntaxHighlightTags.defaultTags.lineComment,
    ": , -": syntaxHighlightTags.defaultTags.separator,
    "?": syntaxHighlightTags.defaultTags.punctuation,
    "[ ]": syntaxHighlightTags.defaultTags.squareBracket,
    "{ }": syntaxHighlightTags.defaultTags.brace
  });
  let j = X.deserialize({
    version: 14,
    states: "5lQ!ZQgOOO#PQfO'#CpO#uQfO'#DOOOQR'#Dv'#DvO$qQgO'#DRO%gQdO'#DUO%nQgO'#DUO&ROaO'#D[OOQR'#Du'#DuO&{QgO'#D^O'rQgO'#D`OOQR'#Dt'#DtO(iOqO'#DbOOQP'#Dj'#DjO(zQaO'#CmO)YQgO'#CmOOQP'#Cm'#CmQ)jQaOOQ)uQgOOQ]QgOOO*PQdO'#CrO*nQdO'#CtOOQO'#Dw'#DwO+]Q`O'#CxO+hQdO'#CwO+rQ`O'#CwOOQO'#Cv'#CvO+wQdO'#CvOOQO'#Cq'#CqO,UQ`O,59[O,^QfO,59[OOQR,59[,59[OOQO'#Cx'#CxO,eQ`O'#DPO,pQdO'#DPOOQO'#Dx'#DxO,zQdO'#DxO-XQ`O,59jO-aQfO,59jOOQR,59j,59jOOQR'#DS'#DSO-hQcO,59mO-sQgO'#DVO.TQ`O'#DVO.YQcO,59pOOQR'#DX'#DXO#|QfO'#DWO.hQcO'#DWOOQR,59v,59vO.yOWO,59vO/OOaO,59vO/WOaO,59vO/cQgO'#D_OOQR,59x,59xO0VQgO'#DaOOQR,59z,59zOOQP,59|,59|O0yOaO,59|O1ROaO,59|O1aOqO,59|OOQP-E7h-E7hO1oQgO,59XOOQP,59X,59XO2PQaO'#DeO2_QgO'#DeO2oQgO'#DkOOQP'#Dk'#DkQ)jQaOOO3PQdO'#CsOOQO,59^,59^O3kQdO'#CuOOQO,59`,59`OOQO,59c,59cO4VQdO,59cO4aQdO'#CzO4kQ`O'#CzOOQO,59b,59bOOQU,5:Q,5:QOOQR1G.v1G.vO4pQ`O1G.vOOQU-E7d-E7dO4xQdO,59kOOQO,59k,59kO5SQdO'#DQO5^Q`O'#DQOOQO,5:d,5:dOOQU,5:R,5:ROOQR1G/U1G/UO5cQ`O1G/UOOQU-E7e-E7eO5kQgO'#DhO5xQcO1G/XOOQR1G/X1G/XOOQR,59q,59qO6TQgO,59qO6eQdO'#DiO6lQgO'#DiO7PQcO1G/[OOQR1G/[1G/[OOQR,59r,59rO#|QfO,59rOOQR1G/b1G/bO7_OWO1G/bO7dOaO1G/bOOQR,59y,59yOOQR,59{,59{OOQP1G/h1G/hO7lOaO1G/hO7tOaO1G/hO8POaO1G/hOOQP1G.s1G.sO8_QgO,5:POOQP,5:P,5:POOQP,5:V,5:VOOQP-E7i-E7iOOQO,59_,59_OOQO,59a,59aOOQO1G.}1G.}OOQO,59f,59fO8oQdO,59fOOQR7+$b7+$bP,XQ`O'#DfOOQO1G/V1G/VOOQO,59l,59lO8yQdO,59lOOQR7+$p7+$pP9TQ`O'#DgOOQR'#DT'#DTOOQR,5:S,5:SOOQR-E7f-E7fOOQR7+$s7+$sOOQR1G/]1G/]O9YQgO'#DYO9jQ`O'#DYOOQR,5:T,5:TO#|QfO'#DZO9oQcO'#DZOOQR-E7g-E7gOOQR7+$v7+$vOOQR1G/^1G/^OOQR7+$|7+$|O:QOWO7+$|OOQP7+%S7+%SO:VOaO7+%SO:_OaO7+%SOOQP1G/k1G/kOOQO1G/Q1G/QOOQO1G/W1G/WOOQR,59t,59tO:jQgO,59tOOQR,59u,59uO#|QfO,59uOOQR<<Hh<<HhOOQP<<Hn<<HnO:zOaO<<HnOOQR1G/`1G/`OOQR1G/a1G/aOOQPAN>YAN>Y",
    stateData: ";S~O!fOS!gOS^OS~OP_OQbORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!V[O!cTO~O`cO~P]OVkOWROXROYeOZfO[dOcPOmhOqQO~OboO~P!bOVtOWROXROYeOZfO[dOcPOmrOqQO~OpwO~P#WORSOTUOWROXROYYOZZO[XOcPOqQO!PVO!cTO~OSvP!avP!bvP~P#|OWROXROYeOZfO[dOcPOqQO~OmzO~P%OOm!OOUzP!azP!bzP!dzP~P#|O^!SO!b!QO!f!TO!g!RO~ORSOTUOWROXROcPOqQO!PVO!cTO~OY!UOP!QXQ!QX!V!QX!`!QXS!QX!a!QX!b!QXU!QXm!QX!d!QX~P&aO[!WOP!SXQ!SX!V!SX!`!SXS!SX!a!SX!b!SXU!SXm!SX!d!SX~P&aO^!ZO!W![O!b!YO!f!]O!g!YO~OP!_O!V[OQaX!`aX~OPaXQaX!VaX!`aX~P#|OP!bOQ!cO!V[O~OP_O!V[O~P#|OWROXROY!fOcPOqQObfXmfXofXpfX~OWROXRO[!hOcPOqQObhXmhXohXphX~ObeXmlXoeX~ObkXokX~P%OOm!kO~Om!lObnPonP~P%OOb!pOo!oO~Ob!pO~P!bOm!sOosXpsX~OosXpsX~P%OOm!uOotPptP~P%OOo!xOp!yO~Op!yO~P#WOS!|O!a#OO!b#OO~OUyX!ayX!byX!dyX~P#|Om#QO~OU#SO!a#UO!b#UO!d#RO~Om#WOUzX!azX!bzX!dzX~O]#XO~O!b#XO!g#YO~O^#ZO!b#XO!g#YO~OP!RXQ!RX!V!RX!`!RXS!RX!a!RX!b!RXU!RXm!RX!d!RX~P&aOP!TXQ!TX!V!TX!`!TXS!TX!a!TX!b!TXU!TXm!TX!d!TX~P&aO!b#^O!g#^O~O^#_O!b#^O!f#`O!g#^O~O^#_O!W#aO!b#^O!g#^O~OPaaQaa!Vaa!`aa~P#|OP#cO!V[OQ!XX!`!XX~OP!XXQ!XX!V!XX!`!XX~P#|OP_O!V[OQ!_X!`!_X~P#|OWROXROcPOqQObgXmgXogXpgX~OWROXROcPOqQObiXmiXoiXpiX~Obkaoka~P%OObnXonX~P%OOm#kO~Ob#lOo!oO~Oosapsa~P%OOotXptX~P%OOm#pO~Oo!xOp#qO~OSwP!awP!bwP~P#|OS!|O!a#vO!b#vO~OUya!aya!bya!dya~P#|Om#xO~P%OOm#{OU}P!a}P!b}P!d}P~P#|OU#SO!a$OO!b$OO!d#RO~O]$QO~O!b$QO!g$RO~O!b$SO!g$SO~O^$TO!b$SO!g$SO~O^$TO!b$SO!f$UO!g$SO~OP!XaQ!Xa!V!Xa!`!Xa~P#|Obnaona~P%OOotapta~P%OOo!xO~OU|X!a|X!b|X!d|X~P#|Om$ZO~Om$]OU}X!a}X!b}X!d}X~O]$^O~O!b$_O!g$_O~O^$`O!b$_O!g$_O~OU|a!a|a!b|a!d|a~P#|O!b$cO!g$cO~O",
    goto: ",]!mPPPPPPPPPPPPPPPPP!nPP!v#v#|$`#|$c$f$j$nP%VPPP!v%Y%^%a%{&O%a&R&U&X&_&b%aP&e&{&e'O'RPP']'a'g'm's'y(XPPPPPPPP(_)e*X+c,VUaObcR#e!c!{ROPQSTUXY_bcdehknrtvz!O!U!W!_!b!c!f!h!k!l!s!u!|#Q#R#S#W#c#k#p#x#{$Z$]QmPR!qnqfPQThknrtv!k!l!s!u#R#k#pR!gdR!ieTlPnTjPnSiPnSqQvQ{TQ!mkQ!trQ!vtR#y#RR!nkTsQvR!wt!RWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]RySR#t!|R|TR|UQ!PUR#|#SR#z#RR#z#SyZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]R!VXR!XYa]O^abc!a!c!eT!da!eQnPR!rnQvQR!{vQ!}yR#u!}Q#T|R#}#TW^Obc!cS!^^!aT!aa!eQ!eaR#f!eW`Obc!cQxSS}U#SQ!`_Q#PzQ#V!OQ#b!_Q#d!bQ#s!|Q#w#QQ$P#WQ$V#cQ$Y#xQ$[#{Q$a$ZR$b$]xZOSU_bcz!O!_!b!c!|#Q#S#W#c#x#{$Z$]Q!VXQ!XYQ#[!UR#]!W!QWOSUXY_bcz!O!U!W!_!b!c!|#Q#S#W#c#x#{$Z$]pfPQThknrtv!k!l!s!u#R#k#pQ!gdQ!ieQ#g!fR#h!hSgPn^pQTkrtv#RQ!jhQ#i!kQ#j!lQ#n!sQ#o!uQ$W#kR$X#pQuQR!zv",
    nodeNames: "⚠ DirectiveEnd DocEnd - - ? ? ? Literal QuotedLiteral Anchor Alias Tag BlockLiteralContent Comment Stream BOM Document ] [ FlowSequence Item Tagged Anchored Anchored Tagged FlowMapping Pair Key : Pair , } { FlowMapping Pair Pair BlockSequence Item Item BlockMapping Pair Pair Key Pair Pair BlockLiteral BlockLiteralHeader Tagged Anchored Anchored Tagged Directive DirectiveName DirectiveContent Document",
    maxTerm: 74,
    context: N,
    nodeProps: [["isolate", -3, 8, 9, 14, ""], ["openedBy", 18, "[", 32, "{"], ["closedBy", 19, "]", 33, "}"]],
    propSources: [M],
    skippedNodes: [0],
    repeatNodeCount: 6,
    tokenData: "-Y~RnOX#PXY$QYZ$]Z]#P]^$]^p#Ppq$Qqs#Pst$btu#Puv$yv|#P|}&e}![#P![!]'O!]!`#P!`!a'i!a!}#P!}#O*g#O#P#P#P#Q+Q#Q#o#P#o#p+k#p#q'i#q#r,U#r;'S#P;'S;=`#z<%l?HT#P?HT?HU,o?HUO#PQ#UU!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PQ#kTOY#PZs#Pt;'S#P;'S;=`#z<%lO#PQ#}P;=`<%l#P~$VQ!f~XY$Qpq$Q~$bO!g~~$gS^~OY$bZ;'S$b;'S;=`$s<%lO$b~$vP;=`<%l$bR%OX!WQOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR%rX!WQ!VPOX%kXY#PZ]%k]^#P^p%kpq#hq;'S%k;'S;=`&_<%lO%kR&bP;=`<%l%kR&lUoP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'VUmP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR'p[!PP!WQOY#PZp#Ppq#hq{#P{|(f|}#P}!O(f!O!R#P!R![)p![;'S#P;'S;=`#z<%lO#PR(mW!PP!WQOY#PZp#Ppq#hq!R#P!R![)V![;'S#P;'S;=`#z<%lO#PR)^U!PP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR)wY!PP!WQOY#PZp#Ppq#hq{#P{|)V|}#P}!O)V!O;'S#P;'S;=`#z<%lO#PR*nUcP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+XUbP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR+rUqP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,]UpP!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#PR,vU`P!WQOY#PZp#Ppq#hq;'S#P;'S;=`#z<%lO#P",
    tokenizers: [U, W, E, V, 0, 1],
    topRules: {
      Stream: [0, 15]
    },
    tokenPrec: 0
  });
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  let H = require("lr-parser-definition") /*id: 556971*/.LrParser.deserialize({
    version: 14,
    states: "!vOQOPOOO]OPO'#C_OhOPO'#C^OOOO'#Cc'#CcOpOPO'#CaQOOOOOO{OPOOOOOO'#Cb'#CbO!WOPO'#C`O!`OPO,58xOOOO-E6a-E6aOOOO-E6`-E6`OOOO'#C_'#C_OOOO1G.d1G.d",
    stateData: "!h~OXPOYROWTP~OWVXXRXYRX~OYVOXSP~OXROYROWTX~OXROYROWTP~OYVOXSX~OX[O~OXY~",
    goto: "vWPPX[beioRUOQQOR]XRXQTTOUQWQRZWSSOURYS",
    nodeNames: "⚠ Document Frontmatter DashLine FrontmatterContent Body",
    maxTerm: 10,
    skippedNodes: [0],
    repeatNodeCount: 2,
    tokenData: "$z~RXOYnYZ!^Z]n]^!^^}n}!O!i!O;'Sn;'S;=`!c<%lOn~qXOYnYZ!^Z]n]^!^^;'Sn;'S;=`!c<%l~n~On~~!^~!cOY~~!fP;=`<%ln~!lZOYnYZ!^Z]n]^!^^}n}!O#_!O;'Sn;'S;=`!c<%l~n~On~~!^~#bZOYnYZ!^Z]n]^!^^}n}!O$T!O;'Sn;'S;=`!c<%l~n~On~~!^~$WXOYnYZ$sZ]n]^$s^;'Sn;'S;=`!c<%l~n~On~~$s~$zOX~Y~",
    tokenizers: [0],
    topRules: {
      Document: [0, 1]
    },
    tokenPrec: 67
  });
  let K = codemirrorLanguageSupport.Parser.define({
    name: "yaml",
    parser: j.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        Stream: t => {
          for (let e = t.node.resolve(t.pos, -1); e && e.to >= t.pos; e = e.parent) {
            if (e.name == "BlockLiteralContent" && e.from < e.to) {
              return t.baseIndentFor(e);
            }
            if (e.name == "BlockLiteral") {
              return t.baseIndentFor(e) + t.unit;
            }
            if (e.name == "BlockSequence" || e.name == "BlockMapping") {
              return t.column(e.from, 1);
            }
            if (e.name == "QuotedLiteral") {
              break;
            }
            if (e.name == "Literal") {
              let s = t.column(e.from, 1);
              if (s == t.lineIndent(e.from, 1)) {
                return s;
              }
              if (e.to > t.pos) {
                break;
              }
            }
          }
          return null;
        },
        FlowMapping: codemirrorLanguageSupport.continuedIndent({
          closing: "}"
        }),
        FlowSequence: codemirrorLanguageSupport.continuedIndent({
          closing: "]"
        })
      }), codemirrorLanguageSupport.foldState.add({
        "FlowMapping FlowSequence": codemirrorLanguageSupport.getFoldRange,
        "Item Pair BlockLiteral": (t, e) => ({
          from: e.doc.lineAt(t.from).to,
          to: t.to
        })
      })]
    }),
    languageData: {
      commentTokens: {
        line: "#"
      },
      indentOnInput: /^\s*[\]\}]$/
    }
  });
  function tt() {
    return new codemirrorLanguageSupport.Language(K);
  }
  let te = codemirrorLanguageSupport.Parser.define({
    name: "yaml-frontmatter",
    parser: H.configure({
      props: [syntaxHighlightTags.defineHighlighter({
        DashLine: syntaxHighlightTags.defaultTags.meta
      })]
    })
  });
  function ts(t) {
    let {
      language: e,
      support: s
    } = t.content instanceof codemirrorLanguageSupport.Language ? t.content : {
      language: t.content,
      support: []
    };
    return new codemirrorLanguageSupport.Language(te.configure({
      wrap: syntaxTreeCore.createNestedParse(t => t.name == "FrontmatterContent" ? {
        parser: K.parser
      } : t.name == "Body" ? {
        parser: e.parser
      } : null)
    }), s);
  }
  require.r(exports);
  require.d(exports, {
    yamlFrontmatter: function () {
      return ts;
    },
    yaml: function () {
      return tt;
    },
    yamlLanguage: function () {
      return K;
    }
  });
}