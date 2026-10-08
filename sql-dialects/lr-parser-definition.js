// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IK' to 'ContextTracker'
// - Renamed export 'Jq' to 'TokenType'
// - Renamed export 'RA' to 'ExternalTokenizer'
// - Renamed export 'WQ' to 'LrParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20660.29dd31be.js
         * chunkId: 20660
         * moduleId: 556971
         */
module.exports = function (module, exports, require) {
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  class s {
    constructor(O, e, t, i, Q, s, n, r, a, P = 0, $) {
      this.p = O;
      this.stack = e;
      this.state = t;
      this.reducePos = i;
      this.pos = Q;
      this.score = s;
      this.buffer = n;
      this.bufferBase = r;
      this.curContext = a;
      this.lookAhead = P;
      this.parent = $;
    }
    toString() {
      return `[${this.stack.filter((O, e) => e % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    static start(O, e, t = 0) {
      let i = O.parser.context;
      return new s(O, [], e, t, t, 0, [], 0, i ? new n(i, i.start) : null, 0, null);
    }
    get context() {
      if (this.curContext) {
        return this.curContext.context;
      } else {
        return null;
      }
    }
    pushState(O, e) {
      this.stack.push(this.state, e, this.bufferBase + this.buffer.length);
      this.state = O;
    }
    reduce(O) {
      let t = O >> 19;
      let i = O & 65535;
      let {
        parser: Q
      } = this.p;
      let s = Q.dynamicPrecedence(i);
      if (s) {
        this.score += s;
      }
      if (t == 0) {
        this.pushState(Q.getGoto(this.state, i, true), this.reducePos);
        if (i < Q.minRepeatTerm) {
          this.storeNode(i, this.reducePos, this.reducePos, 4, true);
        }
        this.reduceContext(i, this.reducePos);
        return;
      }
      let n = this.stack.length - (t - 1) * 3 - (O & 262144 ? 6 : 0);
      let r = n ? this.stack[n - 2] : this.p.ranges[0].from;
      let a = this.reducePos - r;
      if (a >= 2000 && !this.p.parser.nodeSet.types[i]?.isAnonymous) {
        if (r == this.p.lastBigReductionStart) {
          this.p.bigReductionCount++;
          this.p.lastBigReductionSize = a;
        } else if (this.p.lastBigReductionSize < a) {
          this.p.bigReductionCount = 1;
          this.p.lastBigReductionStart = r;
          this.p.lastBigReductionSize = a;
        }
      }
      let P = n ? this.stack[n - 1] : 0;
      let $ = this.bufferBase + this.buffer.length - P;
      if (i < Q.minRepeatTerm || O & 131072) {
        let O = Q.stateFlag(this.state, 1) ? this.pos : this.reducePos;
        this.storeNode(i, r, O, $ + 4, true);
      }
      if (O & 262144) {
        this.state = this.stack[n];
      } else {
        let O = this.stack[n - 3];
        this.state = Q.getGoto(O, i, true);
      }
      while (this.stack.length > n) {
        this.stack.pop();
      }
      this.reduceContext(i, r);
    }
    storeNode(O, e, t, i = 4, Q = false) {
      if (O == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
        let O = this;
        let i = this.buffer.length;
        if (i == 0 && O.parent) {
          i = O.bufferBase - O.parent.bufferBase;
          O = O.parent;
        }
        if (i > 0 && O.buffer[i - 4] == 0 && O.buffer[i - 1] > -1) {
          if (e == t) {
            return;
          }
          if (O.buffer[i - 2] >= e) {
            O.buffer[i - 2] = t;
            return;
          }
        }
      }
      if (Q && this.pos != t) {
        let Q = this.buffer.length;
        if (Q > 0 && this.buffer[Q - 4] != 0) {
          while (Q > 0 && this.buffer[Q - 2] > t) {
            this.buffer[Q] = this.buffer[Q - 4];
            this.buffer[Q + 1] = this.buffer[Q - 3];
            this.buffer[Q + 2] = this.buffer[Q - 2];
            this.buffer[Q + 3] = this.buffer[Q - 1];
            Q -= 4;
            if (i > 4) {
              i -= 4;
            }
          }
        }
        this.buffer[Q] = O;
        this.buffer[Q + 1] = e;
        this.buffer[Q + 2] = t;
        this.buffer[Q + 3] = i;
      } else {
        this.buffer.push(O, e, t, i);
      }
    }
    shift(O, e, t, i) {
      if (O & 131072) {
        this.pushState(O & 65535, this.pos);
      } else if ((O & 262144) == 0) {
        let {
          parser: Q
        } = this.p;
        if (i > this.pos || e <= Q.maxNode) {
          this.pos = i;
          if (!Q.stateFlag(O, 1)) {
            this.reducePos = i;
          }
        }
        this.pushState(O, t);
        this.shiftContext(e, t);
        if (e <= Q.maxNode) {
          this.buffer.push(e, t, i, 4);
        }
      } else {
        this.pos = i;
        this.shiftContext(e, t);
        if (e <= this.p.parser.maxNode) {
          this.buffer.push(e, t, i, 4);
        }
      }
    }
    apply(O, e, t, i) {
      if (O & 65536) {
        this.reduce(O);
      } else {
        this.shift(O, e, t, i);
      }
    }
    useNode(O, e) {
      let t = this.p.reused.length - 1;
      if (t < 0 || this.p.reused[t] != O) {
        this.p.reused.push(O);
        t++;
      }
      let i = this.pos;
      this.reducePos = this.pos = i + O.length;
      this.pushState(e, i);
      this.buffer.push(t, i, this.reducePos, -1);
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.reuse(this.curContext.context, O, this, this.p.stream.reset(this.pos - O.length)));
      }
    }
    split() {
      let O = this;
      let e = O.buffer.length;
      while (e > 0 && O.buffer[e - 2] > O.reducePos) {
        e -= 4;
      }
      let t = O.buffer.slice(e);
      let i = O.bufferBase + e;
      while (O && i == O.bufferBase) {
        O = O.parent;
      }
      return new s(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, t, i, this.curContext, this.lookAhead, O);
    }
    recoverByDelete(O, e) {
      let t = O <= this.p.parser.maxNode;
      if (t) {
        this.storeNode(O, this.pos, e, 4);
      }
      this.storeNode(0, this.pos, e, t ? 8 : 4);
      this.pos = this.reducePos = e;
      this.score -= 190;
    }
    canShift(O) {
      let e = new r(this);
      for (;;) {
        let t = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, O);
        if (t == 0) {
          return false;
        }
        if ((t & 65536) == 0) {
          return true;
        }
        e.reduce(t);
      }
    }
    recoverByInsert(O) {
      if (this.stack.length >= 300) {
        return [];
      }
      let e = this.p.parser.nextStates(this.state);
      if (e.length > 8 || this.stack.length >= 120) {
        let t = [];
        for (let i = 0, Q; i < e.length; i += 2) {
          if ((Q = e[i + 1]) != this.state && this.p.parser.hasAction(Q, O)) {
            t.push(e[i], Q);
          }
        }
        if (this.stack.length < 120) {
          for (let O = 0; t.length < 8 && O < e.length; O += 2) {
            let i = e[O + 1];
            if (!t.some((O, e) => e & 1 && O == i)) {
              t.push(e[O], i);
            }
          }
        }
        e = t;
      }
      let t = [];
      for (let O = 0; O < e.length && t.length < 4; O += 2) {
        let i = e[O + 1];
        if (i == this.state) {
          continue;
        }
        let Q = this.split();
        Q.pushState(i, this.pos);
        Q.storeNode(0, Q.pos, Q.pos, 4, true);
        Q.shiftContext(e[O], this.pos);
        Q.reducePos = this.pos;
        Q.score -= 200;
        t.push(Q);
      }
      return t;
    }
    forceReduce() {
      let {
        parser: O
      } = this.p;
      let e = O.stateSlot(this.state, 5);
      if ((e & 65536) == 0) {
        return false;
      }
      if (!O.validAction(this.state, e)) {
        let t = e >> 19;
        let i = e & 65535;
        let Q = this.stack.length - t * 3;
        if (Q < 0 || O.getGoto(this.stack[Q], i, false) < 0) {
          let O = this.findForcedReduction();
          if (O == null) {
            return false;
          }
          e = O;
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
        parser: O
      } = this.p;
      let e = [];
      let t = (i, Q) => {
        if (!e.includes(i)) {
          e.push(i);
          return O.allActions(i, e => {
            if (e & 393216) ;else if (e & 65536) {
              let t = (e >> 19) - Q;
              if (t > 1) {
                let i = e & 65535;
                let Q = this.stack.length - t * 3;
                if (Q >= 0 && O.getGoto(this.stack[Q], i, false) >= 0) {
                  return t << 19 | 65536 | i;
                }
              }
            } else {
              let O = t(e, Q + 1);
              if (O != null) {
                return O;
              }
            }
          });
        }
      };
      return t(this.state, 0);
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
        parser: O
      } = this.p;
      return O.data[O.stateSlot(this.state, 1)] == 65535 && !O.stateSlot(this.state, 4);
    }
    restart() {
      this.storeNode(0, this.pos, this.pos, 4, true);
      this.state = this.stack[0];
      this.stack.length = 0;
    }
    sameState(O) {
      if (this.state != O.state || this.stack.length != O.stack.length) {
        return false;
      }
      for (let e = 0; e < this.stack.length; e += 3) {
        if (this.stack[e] != O.stack[e]) {
          return false;
        }
      }
      return true;
    }
    get parser() {
      return this.p.parser;
    }
    dialectEnabled(O) {
      return this.p.parser.dialect.flags[O];
    }
    shiftContext(O, e) {
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.shift(this.curContext.context, O, this, this.p.stream.reset(e)));
      }
    }
    reduceContext(O, e) {
      if (this.curContext) {
        this.updateContext(this.curContext.tracker.reduce(this.curContext.context, O, this, this.p.stream.reset(e)));
      }
    }
    emitContext() {
      let O = this.buffer.length - 1;
      if (O < 0 || this.buffer[O] != -3) {
        this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
      }
    }
    emitLookAhead() {
      let O = this.buffer.length - 1;
      if (O < 0 || this.buffer[O] != -4) {
        this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
      }
    }
    updateContext(O) {
      if (O != this.curContext.context) {
        let e = new n(this.curContext.tracker, O);
        if (e.hash != this.curContext.hash) {
          this.emitContext();
        }
        this.curContext = e;
      }
    }
    setLookAhead(O) {
      if (O > this.lookAhead) {
        this.emitLookAhead();
        this.lookAhead = O;
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
  class n {
    constructor(O, e) {
      this.tracker = O;
      this.context = e;
      this.hash = O.strict ? O.hash(e) : 0;
    }
  }
  class r {
    constructor(O) {
      this.start = O;
      this.state = O.state;
      this.stack = O.stack;
      this.base = this.stack.length;
    }
    reduce(O) {
      let e = O >> 19;
      if (e == 0) {
        if (this.stack == this.start.stack) {
          this.stack = this.stack.slice();
        }
        this.stack.push(this.state, 0, 0);
        this.base += 3;
      } else {
        this.base -= (e - 1) * 3;
      }
      let t = this.start.p.parser.getGoto(this.stack[this.base - 3], O & 65535, true);
      this.state = t;
    }
  }
  class a {
    constructor(O, e, t) {
      this.stack = O;
      this.pos = e;
      this.index = t;
      this.buffer = O.buffer;
      if (this.index == 0) {
        this.maybeNext();
      }
    }
    static create(O, e = O.bufferBase + O.buffer.length) {
      return new a(O, e, e - O.bufferBase);
    }
    maybeNext() {
      let O = this.stack.parent;
      if (O != null) {
        this.index = this.stack.bufferBase - O.bufferBase;
        this.stack = O;
        this.buffer = O.buffer;
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
  function P(O, e = Uint16Array) {
    if (typeof O != "string") {
      return O;
    }
    let t = null;
    for (let i = 0, Q = 0; i < O.length;) {
      let s = 0;
      while (true) {
        let e = O.charCodeAt(i++);
        let t = false;
        if (e == 126) {
          s = 65535;
          break;
        }
        if (e >= 92) {
          e--;
        }
        if (e >= 34) {
          e--;
        }
        let Q = e - 32;
        if (Q >= 46) {
          Q -= 46;
          t = true;
        }
        s += Q;
        if (t) {
          break;
        }
        s *= 46;
      }
      if (t) {
        t[Q++] = s;
      } else {
        t = new e(s);
      }
    }
    return t;
  }
  class $ {
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
  let X = new $();
  class o {
    constructor(O, e) {
      this.input = O;
      this.ranges = e;
      this.chunk = "";
      this.chunkOff = 0;
      this.chunk2 = "";
      this.chunk2Pos = 0;
      this.next = -1;
      this.token = X;
      this.rangeIndex = 0;
      this.pos = this.chunkPos = e[0].from;
      this.range = e[0];
      this.end = e[e.length - 1].to;
      this.readNext();
    }
    resolveOffset(O, e) {
      let t = this.range;
      let i = this.rangeIndex;
      let Q = this.pos + O;
      while (Q < t.from) {
        if (!i) {
          return null;
        }
        let O = this.ranges[--i];
        Q -= t.from - O.to;
        t = O;
      }
      while (e < 0 ? Q > t.to : Q >= t.to) {
        if (i == this.ranges.length - 1) {
          return null;
        }
        let O = this.ranges[++i];
        Q += O.from - t.to;
        t = O;
      }
      return Q;
    }
    clipPos(O) {
      if (O >= this.range.from && O < this.range.to) {
        return O;
      }
      for (let e of this.ranges) {
        if (e.to > O) {
          return Math.max(O, e.from);
        }
      }
      return this.end;
    }
    peek(O) {
      let e = this.chunkOff + O;
      let t;
      let i;
      if (e >= 0 && e < this.chunk.length) {
        t = this.pos + O;
        i = this.chunk.charCodeAt(e);
      } else {
        let e = this.resolveOffset(O, 1);
        if (e == null) {
          return -1;
        }
        if ((t = e) >= this.chunk2Pos && t < this.chunk2Pos + this.chunk2.length) {
          i = this.chunk2.charCodeAt(t - this.chunk2Pos);
        } else {
          let O = this.rangeIndex;
          let e = this.range;
          while (e.to <= t) {
            e = this.ranges[++O];
          }
          this.chunk2 = this.input.chunk(this.chunk2Pos = t);
          if (t + this.chunk2.length > e.to) {
            this.chunk2 = this.chunk2.slice(0, e.to - t);
          }
          i = this.chunk2.charCodeAt(0);
        }
      }
      if (t >= this.token.lookAhead) {
        this.token.lookAhead = t + 1;
      }
      return i;
    }
    acceptToken(O, e = 0) {
      let t = e ? this.resolveOffset(e, -1) : this.pos;
      if (t == null || t < this.token.start) {
        throw RangeError("Token end out of bounds");
      }
      this.token.value = O;
      this.token.end = t;
    }
    getChunk() {
      if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
        let {
          chunk: O,
          chunkPos: e
        } = this;
        this.chunk = this.chunk2;
        this.chunkPos = this.chunk2Pos;
        this.chunk2 = O;
        this.chunk2Pos = e;
        this.chunkOff = this.pos - this.chunkPos;
      } else {
        this.chunk2 = this.chunk;
        this.chunk2Pos = this.chunkPos;
        let O = this.input.chunk(this.pos);
        let e = this.pos + O.length;
        this.chunk = e > this.range.to ? O.slice(0, this.range.to - this.pos) : O;
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
    advance(O = 1) {
      for (this.chunkOff += O; this.pos + O >= this.range.to;) {
        if (this.rangeIndex == this.ranges.length - 1) {
          return this.setDone();
        }
        O -= this.range.to - this.pos;
        this.range = this.ranges[++this.rangeIndex];
        this.pos = this.range.from;
      }
      this.pos += O;
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
    reset(O, e) {
      if (e) {
        this.token = e;
        e.start = O;
        e.lookAhead = O + 1;
        e.value = e.extended = -1;
      } else {
        this.token = X;
      }
      if (this.pos != O) {
        this.pos = O;
        if (O == this.end) {
          this.setDone();
          return this;
        }
        while (O < this.range.from) {
          this.range = this.ranges[--this.rangeIndex];
        }
        while (O >= this.range.to) {
          this.range = this.ranges[++this.rangeIndex];
        }
        if (O >= this.chunkPos && O < this.chunkPos + this.chunk.length) {
          this.chunkOff = O - this.chunkPos;
        } else {
          this.chunk = "";
          this.chunkOff = 0;
        }
        this.readNext();
      }
      return this;
    }
    read(O, e) {
      if (O >= this.chunkPos && e <= this.chunkPos + this.chunk.length) {
        return this.chunk.slice(O - this.chunkPos, e - this.chunkPos);
      }
      if (O >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length) {
        return this.chunk2.slice(O - this.chunk2Pos, e - this.chunk2Pos);
      }
      if (O >= this.range.from && e <= this.range.to) {
        return this.input.read(O, e);
      }
      let t = "";
      for (let i of this.ranges) {
        if (i.from >= e) {
          break;
        }
        if (i.to > O) {
          t += this.input.read(Math.max(i.from, O), Math.min(i.to, e));
        }
      }
      return t;
    }
  }
  class h {
    constructor(O, e) {
      this.data = O;
      this.id = e;
    }
    token(O, e) {
      let {
        parser: t
      } = e.p;
      c(this.data, O, e, this.id, t.data, t.tokenPrecTable);
    }
  }
  h.prototype.contextual = h.prototype.fallback = h.prototype.extend = false;
  class l {
    constructor(O, e, t) {
      this.precTable = e;
      this.elseToken = t;
      this.data = typeof O == "string" ? P(O) : O;
    }
    token(O, e) {
      let t = O.pos;
      let i = 0;
      while (true) {
        let t = O.next < 0;
        let Q = O.resolveOffset(1, 1);
        c(this.data, O, e, 0, this.data, this.precTable);
        if (O.token.value > -1) {
          break;
        }
        if (this.elseToken == null) {
          return;
        }
        if (!t) {
          i++;
        }
        if (Q == null) {
          break;
        }
        O.reset(Q, O.token);
      }
      if (i) {
        O.reset(t, O.token);
        O.acceptToken(this.elseToken, i);
      }
    }
  }
  l.prototype.contextual = h.prototype.fallback = h.prototype.extend = false;
  class S {
    constructor(O, e = {}) {
      this.token = O;
      this.contextual = !!e.contextual;
      this.fallback = !!e.fallback;
      this.extend = !!e.extend;
    }
  }
  function c(O, e, t, i, Q, s) {
    let n = 0;
    let r = 1 << i;
    let {
      dialect: a
    } = t.p.parser;
    e: while ((r & O[n]) != 0) {
      let t = O[n + 1];
      for (let i = n + 3; i < t; i += 2) {
        if ((O[i + 1] & r) > 0) {
          let t = O[i];
          if (a.allows(t) && (e.token.value == -1 || e.token.value == t || function (O, e, t, i) {
            let Q = p(t, i, e);
            return Q < 0 || p(t, i, O) < Q;
          }(t, e.token.value, Q, s))) {
            e.acceptToken(t);
            break;
          }
        }
      }
      let i = e.next;
      let P = 0;
      let $ = O[n + 2];
      if (e.next < 0 && $ > P && O[t + $ * 3 - 3] == 65535) {
        n = O[t + $ * 3 - 1];
        continue;
      }
      while (P < $) {
        let Q = P + $ >> 1;
        let s = t + Q + (Q << 1);
        let r = O[s];
        let a = O[s + 1] || 65536;
        if (i < r) {
          $ = Q;
        } else if (i >= a) {
          P = Q + 1;
        } else {
          n = O[s + 2];
          e.advance();
          continue e;
        }
      }
      break;
    }
  }
  function p(O, e, t) {
    for (let i = e, Q; (Q = O[i]) != 65535; i++) {
      if (Q == t) {
        return i - e;
      }
    }
    return -1;
  }
  let f = processBrowserShim !== undefined && processBrowserShim.env && /\bparse\b/.test(processBrowserShim.env.LOG);
  let u = null;
  function W(O, e, t) {
    let Q = O.cursor(syntaxTreeCore.IterMode.IncludeAnonymous);
    for (Q.moveTo(e);;) {
      if (!(t < 0 ? Q.childBefore(e) : Q.childAfter(e))) {
        while (true) {
          if ((t < 0 ? Q.to < e : Q.from > e) && !Q.type.isError) {
            if (t < 0) {
              return Math.max(0, Math.min(Q.to - 1, e - 25));
            } else {
              return Math.min(O.length, Math.max(Q.from + 1, e + 25));
            }
          }
          if (t < 0 ? Q.prevSibling() : Q.nextSibling()) {
            break;
          }
          if (!Q.parent()) {
            if (t < 0) {
              return 0;
            } else {
              return O.length;
            }
          }
        }
      }
    }
  }
  class d {
    constructor(O, e) {
      this.fragments = O;
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
      let O = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
      if (O) {
        this.safeFrom = O.openStart ? W(O.tree, O.from + O.offset, 1) - O.offset : O.from;
        this.safeTo = O.openEnd ? W(O.tree, O.to + O.offset, -1) - O.offset : O.to;
        while (this.trees.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
        }
        this.trees.push(O.tree);
        this.start.push(-O.offset);
        this.index.push(0);
        this.nextStart = this.safeFrom;
      } else {
        this.nextStart = 1000000000;
      }
    }
    nodeAt(O) {
      if (O < this.nextStart) {
        return null;
      }
      while (this.fragment && this.safeTo <= O) {
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
        let t = this.trees[e];
        let Q = this.index[e];
        if (Q == t.children.length) {
          this.trees.pop();
          this.start.pop();
          this.index.pop();
          continue;
        }
        let s = t.children[Q];
        let n = this.start[e] + t.positions[Q];
        if (n > O) {
          this.nextStart = n;
          return null;
        }
        if (s instanceof syntaxTreeCore.Tree) {
          if (n == O) {
            if (n < this.safeFrom) {
              return null;
            }
            let O = n + s.length;
            if (O <= this.safeTo) {
              let e = s.prop(syntaxTreeCore.NodeTypeProp.lookAhead);
              if (!e || O + e < this.fragment.to) {
                return s;
              }
            }
          }
          this.index[e]++;
          if (n + s.length >= Math.max(this.safeFrom, O)) {
            this.trees.push(s);
            this.start.push(n);
            this.index.push(0);
          }
        } else {
          this.index[e]++;
          this.nextStart = n + s.length;
        }
      }
    }
  }
  class g {
    constructor(O, e) {
      this.stream = e;
      this.tokens = [];
      this.mainToken = null;
      this.actions = [];
      this.tokens = O.tokenizers.map(O => new $());
    }
    getActions(O) {
      let e = 0;
      let t = null;
      let {
        parser: i
      } = O.p;
      let {
        tokenizers: Q
      } = i;
      let s = i.stateSlot(O.state, 3);
      let n = O.curContext ? O.curContext.hash : 0;
      let r = 0;
      for (let i = 0; i < Q.length; i++) {
        if ((1 << i & s) == 0) {
          continue;
        }
        let a = Q[i];
        let P = this.tokens[i];
        if ((!t || a.fallback) && ((a.contextual || P.start != O.pos || P.mask != s || P.context != n) && (this.updateCachedToken(P, a, O), P.mask = s, P.context = n), P.lookAhead > P.end + 25 && (r = Math.max(P.lookAhead, r)), P.value != 0)) {
          let i = e;
          if (P.extended > -1) {
            e = this.addActions(O, P.extended, P.end, e);
          }
          e = this.addActions(O, P.value, P.end, e);
          if (!a.extend && (t = P, e > i)) {
            break;
          }
        }
      }
      while (this.actions.length > e) {
        this.actions.pop();
      }
      if (r) {
        O.setLookAhead(r);
      }
      if (!t && O.pos == this.stream.end) {
        (t = new $()).value = O.p.parser.eofTerm;
        t.start = t.end = O.pos;
        e = this.addActions(O, t.value, t.end, e);
      }
      this.mainToken = t;
      return this.actions;
    }
    getMainToken(O) {
      if (this.mainToken) {
        return this.mainToken;
      }
      let e = new $();
      let {
        pos: t,
        p: i
      } = O;
      e.start = t;
      e.end = Math.min(t + 1, i.stream.end);
      e.value = t == i.stream.end ? i.parser.eofTerm : 0;
      return e;
    }
    updateCachedToken(O, e, t) {
      let i = this.stream.clipPos(t.pos);
      e.token(this.stream.reset(i, O), t);
      if (O.value > -1) {
        let {
          parser: e
        } = t.p;
        for (let i = 0; i < e.specialized.length; i++) {
          if (e.specialized[i] == O.value) {
            let Q = e.specializers[i](this.stream.read(O.start, O.end), t);
            if (Q >= 0 && t.p.parser.dialect.allows(Q >> 1)) {
              if ((Q & 1) == 0) {
                O.value = Q >> 1;
              } else {
                O.extended = Q >> 1;
              }
              break;
            }
          }
        }
      } else {
        O.value = 0;
        O.end = this.stream.clipPos(i + 1);
      }
    }
    putAction(O, e, t, i) {
      for (let e = 0; e < i; e += 3) {
        if (this.actions[e] == O) {
          return i;
        }
      }
      this.actions[i++] = O;
      this.actions[i++] = e;
      this.actions[i++] = t;
      return i;
    }
    addActions(O, e, t, i) {
      let {
        state: Q
      } = O;
      let {
        parser: s
      } = O.p;
      let {
        data: n
      } = s;
      for (let O = 0; O < 2; O++) {
        for (let r = s.stateSlot(Q, O ? 2 : 1);; r += 3) {
          if (n[r] == 65535) {
            if (n[r + 1] == 1) {
              r = w(n, r + 2);
            } else {
              if (i == 0 && n[r + 1] == 2) {
                i = this.putAction(w(n, r + 2), e, t, i);
              }
              break;
            }
          }
          if (n[r] == e) {
            i = this.putAction(w(n, r + 1), e, t, i);
          }
        }
      }
      return i;
    }
  }
  class Y {
    constructor(O, e, t, i) {
      this.parser = O;
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
      this.stream = new o(e, i);
      this.tokens = new g(O, this.stream);
      this.topTerm = O.top[1];
      let {
        from: Q
      } = i[0];
      this.stacks = [s.start(this, O.top[0], Q)];
      this.fragments = t.length && this.stream.end - Q > O.bufferLength * 4 ? new d(t, O.nodeSet) : null;
    }
    get parsedPos() {
      return this.minStackPos;
    }
    advance() {
      let O;
      let e;
      let t = this.stacks;
      let i = this.minStackPos;
      let Q = this.stacks = [];
      if (this.bigReductionCount > 300 && t.length == 1) {
        let [O] = t;
        while (O.forceReduce() && O.stack.length && O.stack[O.stack.length - 2] >= this.lastBigReductionStart);
        this.bigReductionCount = this.lastBigReductionSize = 0;
      }
      for (let s = 0; s < t.length; s++) {
        let n = t[s];
        while (true) {
          this.tokens.mainToken = null;
          if (n.pos > i) {
            Q.push(n);
          } else {
            if (this.advanceStack(n, Q, t)) {
              continue;
            }
            if (!O) {
              O = [];
              e = [];
            }
            O.push(n);
            let i = this.tokens.getMainToken(n);
            e.push(i.value, i.end);
          }
          break;
        }
      }
      if (!Q.length) {
        let e = O && function (O) {
          let e = null;
          for (let t of O) {
            let O = t.p.stoppedAt;
            if ((t.pos == t.p.stream.end || O != null && t.pos > O) && t.p.parser.stateFlag(t.state, 2) && (!e || e.score < t.score)) {
              e = t;
            }
          }
          return e;
        }(O);
        if (e) {
          return this.stackToTree(e);
        }
        if (this.parser.strict) {
          throw SyntaxError("No parse at " + i);
        }
        this.recovering ||= 5;
      }
      if (this.recovering && O) {
        let t = this.stoppedAt != null && O[0].pos > this.stoppedAt ? O[0] : this.runRecovery(O, e, Q);
        if (t) {
          return this.stackToTree(t.forceAll());
        }
      }
      if (this.recovering) {
        let O = this.recovering == 1 ? 1 : this.recovering * 3;
        if (Q.length > O) {
          for (Q.sort((O, e) => e.score - O.score); Q.length > O;) {
            Q.pop();
          }
        }
        if (Q.some(O => O.reducePos > i)) {
          this.recovering--;
        }
      } else if (Q.length > 1) {
        t: for (let O = 0; O < Q.length - 1; O++) {
          let e = Q[O];
          for (let t = O + 1; t < Q.length; t++) {
            let i = Q[t];
            if (e.sameState(i) || e.buffer.length > 500 && i.buffer.length > 500) {
              if ((e.score - i.score || e.buffer.length - i.buffer.length) > 0) {
                Q.splice(t--, 1);
              } else {
                Q.splice(O--, 1);
                continue t;
              }
            }
          }
        }
        if (Q.length > 12) {
          Q.splice(12, Q.length - 12);
        }
      }
      this.minStackPos = Q[0].pos;
      for (let O = 1; O < Q.length; O++) {
        if (Q[O].pos < this.minStackPos) {
          this.minStackPos = Q[O].pos;
        }
      }
      return null;
    }
    stopAt(O) {
      if (this.stoppedAt != null && this.stoppedAt < O) {
        throw RangeError("Can't move stoppedAt forward");
      }
      this.stoppedAt = O;
    }
    advanceStack(O, e, t) {
      let Q = O.pos;
      let {
        parser: s
      } = this;
      if (f) {
        this.stackID(O);
      }
      if (this.stoppedAt != null && Q > this.stoppedAt) {
        if (O.forceReduce()) {
          return O;
        } else {
          return null;
        }
      }
      if (this.fragments) {
        let e = O.curContext && O.curContext.tracker.strict;
        let t = e ? O.curContext.hash : 0;
        for (let n = this.fragments.nodeAt(Q); n;) {
          let Q = this.parser.nodeSet.types[n.type.id] == n.type ? s.getGoto(O.state, n.type.id) : -1;
          if (Q > -1 && n.length && (!e || (n.prop(syntaxTreeCore.NodeTypeProp.contextHash) || 0) == t)) {
            O.useNode(n, Q);
            return true;
          }
          if (!(n instanceof syntaxTreeCore.Tree) || n.children.length == 0 || n.positions[0] > 0) {
            break;
          }
          let r = n.children[0];
          if (r instanceof syntaxTreeCore.Tree && n.positions[0] == 0) {
            n = r;
          } else {
            break;
          }
        }
      }
      let n = s.stateSlot(O.state, 4);
      if (n > 0) {
        O.reduce(n);
        return true;
      }
      if (O.stack.length >= 8400) {
        while (O.stack.length > 6000 && O.forceReduce());
      }
      let r = this.tokens.getActions(O);
      for (let i = 0; i < r.length;) {
        let s = r[i++];
        let n = r[i++];
        let a = r[i++];
        let P = i == r.length || !t;
        let $ = P ? O : O.split();
        let X = this.tokens.mainToken;
        $.apply(s, n, X ? X.start : $.pos, a);
        if (P) {
          return true;
        }
        if ($.pos > Q) {
          e.push($);
        } else {
          t.push($);
        }
      }
      return false;
    }
    advanceFully(O, e) {
      let t = O.pos;
      while (true) {
        if (!this.advanceStack(O, null, null)) {
          return false;
        }
        if (O.pos > t) {
          z(O, e);
          return true;
        }
      }
    }
    runRecovery(O, e, t) {
      let i = null;
      let Q = false;
      for (let s = 0; s < O.length; s++) {
        let n = O[s];
        let r = e[s << 1];
        let a = e[(s << 1) + 1];
        let P = f ? this.stackID(n) + " -> " : "";
        if (n.deadEnd && (Q || (Q = true, n.restart(), this.advanceFully(n, t)))) {
          continue;
        }
        let $ = n.split();
        for (let O = 0; $.forceReduce() && O < 10 && !this.advanceFully($, t); O++) {
          if (f) {
            this.stackID($);
          }
        }
        for (let O of n.recoverByInsert(r)) {
          this.advanceFully(O, t);
        }
        if (this.stream.end > n.pos) {
          if (a == n.pos) {
            a++;
            r = 0;
          }
          n.recoverByDelete(r, a);
          z(n, t);
        } else if (!i || i.score < n.score) {
          i = n;
        }
      }
      return i;
    }
    stackToTree(O) {
      O.close();
      return syntaxTreeCore.Tree.build({
        buffer: a.create(O),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: O.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm
      });
    }
    stackID(O) {
      let e = (u ||= new WeakMap()).get(O);
      if (!e) {
        u.set(O, e = String.fromCodePoint(this.nextStackID++));
      }
      return e + O;
    }
  }
  function z(O, e) {
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i.pos == O.pos && i.sameState(O)) {
        if (e[t].score < O.score) {
          e[t] = O;
        }
        return;
      }
    }
    e.push(O);
  }
  class b {
    constructor(O, e, t) {
      this.source = O;
      this.flags = e;
      this.disabled = t;
    }
    allows(O) {
      return !this.disabled || this.disabled[O] == 0;
    }
  }
  let Z = O => O;
  class _ {
    constructor(O) {
      this.start = O.start;
      this.shift = O.shift || Z;
      this.reduce = O.reduce || Z;
      this.reuse = O.reuse || Z;
      this.hash = O.hash || (() => 0);
      this.strict = O.strict !== false;
    }
  }
  class q extends syntaxTreeCore.Parser {
    constructor(O) {
      super();
      this.wrappers = [];
      if (O.version != 14) {
        throw RangeError(`Parser version (${O.version}) doesn't match runtime version (14)`);
      }
      let e = O.nodeNames.split(" ");
      this.minRepeatTerm = e.length;
      for (let t = 0; t < O.repeatNodeCount; t++) {
        e.push("");
      }
      let t = Object.keys(O.topRules).map(e => O.topRules[e][1]);
      let Q = [];
      for (let O = 0; O < e.length; O++) {
        Q.push([]);
      }
      function s(O, e, t) {
        Q[O].push([e, e.deserialize(String(t))]);
      }
      if (O.nodeProps) {
        for (let e of O.nodeProps) {
          let O = e[0];
          if (typeof O == "string") {
            O = syntaxTreeCore.NodeTypeProp[O];
          }
          for (let t = 1; t < e.length;) {
            let i = e[t++];
            if (i >= 0) {
              s(i, O, e[t++]);
            } else {
              let Q = e[t + -i];
              for (let n = -i; n > 0; n--) {
                s(e[t++], O, Q);
              }
              t++;
            }
          }
        }
      }
      this.nodeSet = new syntaxTreeCore.NodeTypeSet(e.map((e, s) => syntaxTreeCore.NodeType.define({
        name: s >= this.minRepeatTerm ? undefined : e,
        id: s,
        props: Q[s],
        top: t.indexOf(s) > -1,
        error: s == 0,
        skipped: O.skippedNodes && O.skippedNodes.indexOf(s) > -1
      })));
      if (O.propSources) {
        this.nodeSet = this.nodeSet.extend(...O.propSources);
      }
      this.strict = false;
      this.bufferLength = syntaxTreeCore.maxBufferLength;
      let n = P(O.tokenData);
      this.context = O.context;
      this.specializerSpecs = O.specialized || [];
      this.specialized = new Uint16Array(this.specializerSpecs.length);
      for (let O = 0; O < this.specializerSpecs.length; O++) {
        this.specialized[O] = this.specializerSpecs[O].term;
      }
      this.specializers = this.specializerSpecs.map(R);
      this.states = P(O.states, Uint32Array);
      this.data = P(O.stateData);
      this.goto = P(O.goto);
      this.maxTerm = O.maxTerm;
      this.tokenizers = O.tokenizers.map(O => typeof O == "number" ? new h(n, O) : O);
      this.topRules = O.topRules;
      this.dialects = O.dialects || {};
      this.dynamicPrecedences = O.dynamicPrecedences || null;
      this.tokenPrecTable = O.tokenPrec;
      this.termNames = O.termNames || null;
      this.maxNode = this.nodeSet.types.length - 1;
      this.dialect = this.parseDialect();
      this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(O, e, t) {
      let i = new Y(this, O, e, t);
      for (let Q of this.wrappers) {
        i = Q(i, O, e, t);
      }
      return i;
    }
    getGoto(O, e, t = false) {
      let i = this.goto;
      if (e >= i[0]) {
        return -1;
      }
      let Q = i[e + 1];
      for (;;) {
        let e = i[Q++];
        let s = e & 1;
        let n = i[Q++];
        if (s && t) {
          return n;
        }
        for (let t = Q + (e >> 1); Q < t; Q++) {
          if (i[Q] == O) {
            return n;
          }
        }
        if (s) {
          return -1;
        }
      }
    }
    hasAction(O, e) {
      let t = this.data;
      for (let i = 0; i < 2; i++) {
        for (let Q = this.stateSlot(O, i ? 2 : 1), s;; Q += 3) {
          if ((s = t[Q]) == 65535) {
            if (t[Q + 1] == 1) {
              s = t[Q = w(t, Q + 2)];
            } else if (t[Q + 1] == 2) {
              return w(t, Q + 2);
            } else {
              break;
            }
          }
          if (s == e || s == 0) {
            return w(t, Q + 1);
          }
        }
      }
      return 0;
    }
    stateSlot(O, e) {
      return this.states[O * 6 + e];
    }
    stateFlag(O, e) {
      return (this.stateSlot(O, 0) & e) > 0;
    }
    validAction(O, e) {
      return !!this.allActions(O, O => O == e || null);
    }
    allActions(O, e) {
      let t = this.stateSlot(O, 4);
      let i = t ? e(t) : undefined;
      for (let t = this.stateSlot(O, 1); i == null; t += 3) {
        if (this.data[t] == 65535) {
          if (this.data[t + 1] == 1) {
            t = w(this.data, t + 2);
          } else {
            break;
          }
        }
        i = e(w(this.data, t + 1));
      }
      return i;
    }
    nextStates(O) {
      let e = [];
      for (let t = this.stateSlot(O, 1);; t += 3) {
        if (this.data[t] == 65535) {
          if (this.data[t + 1] == 1) {
            t = w(this.data, t + 2);
          } else {
            break;
          }
        }
        if ((this.data[t + 2] & 1) == 0) {
          let O = this.data[t + 1];
          if (!e.some((e, t) => t & 1 && e == O)) {
            e.push(this.data[t], O);
          }
        }
      }
      return e;
    }
    configure(O) {
      let e = Object.assign(Object.create(q.prototype), this);
      if (O.props) {
        e.nodeSet = this.nodeSet.extend(...O.props);
      }
      if (O.top) {
        let t = this.topRules[O.top];
        if (!t) {
          throw RangeError(`Invalid top rule name ${O.top}`);
        }
        e.top = t;
      }
      if (O.tokenizers) {
        e.tokenizers = this.tokenizers.map(e => {
          let t = O.tokenizers.find(O => O.from == e);
          if (t) {
            return t.to;
          } else {
            return e;
          }
        });
      }
      if (O.specializers) {
        e.specializers = this.specializers.slice();
        e.specializerSpecs = this.specializerSpecs.map((t, i) => {
          let Q = O.specializers.find(O => O.from == t.external);
          if (!Q) {
            return t;
          }
          let s = Object.assign(Object.assign({}, t), {
            external: Q.to
          });
          e.specializers[i] = R(s);
          return s;
        });
      }
      if (O.contextTracker) {
        e.context = O.contextTracker;
      }
      if (O.dialect) {
        e.dialect = this.parseDialect(O.dialect);
      }
      if (O.strict != null) {
        e.strict = O.strict;
      }
      if (O.wrap) {
        e.wrappers = e.wrappers.concat(O.wrap);
      }
      if (O.bufferLength != null) {
        e.bufferLength = O.bufferLength;
      }
      return e;
    }
    hasWrappers() {
      return this.wrappers.length > 0;
    }
    getName(O) {
      if (this.termNames) {
        return this.termNames[O];
      } else {
        return String(O <= this.maxNode && this.nodeSet.types[O].name || O);
      }
    }
    get eofTerm() {
      return this.maxNode + 1;
    }
    get topNode() {
      return this.nodeSet.types[this.top[1]];
    }
    dynamicPrecedence(O) {
      let e = this.dynamicPrecedences;
      if (e == null) {
        return 0;
      } else {
        return e[O] || 0;
      }
    }
    parseDialect(O) {
      let e = Object.keys(this.dialects);
      let t = e.map(() => false);
      if (O) {
        for (let i of O.split(" ")) {
          let O = e.indexOf(i);
          if (O >= 0) {
            t[O] = true;
          }
        }
      }
      let i = null;
      for (let O = 0; O < e.length; O++) {
        if (!t[O]) {
          for (let t = this.dialects[e[O]], Q; (Q = this.data[t++]) != 65535;) {
            (i ||= new Uint8Array(this.maxTerm + 1))[Q] = 1;
          }
        }
      }
      return new b(O, t, i);
    }
    static deserialize(O) {
      return new q(O);
    }
  }
  function w(O, e) {
    return O[e] | O[e + 1] << 16;
  }
  function R(O) {
    if (O.external) {
      let e = +!!O.extend;
      return (t, i) => O.external(t, i) << 1 | e;
    }
    return O.get;
  }
  require.d(exports, {
    ContextTracker: function () {
      return _;
    },
    TokenType: function () {
      return S;
    },
    ExternalTokenizer: function () {
      return l;
    },
    LrParser: function () {
      return q;
    }
  });
}