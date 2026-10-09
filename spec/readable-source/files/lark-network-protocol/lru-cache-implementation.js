// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'doublyLinkedListUtil'
// - Resolved require(336411) to 'doubly-linked-list-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 317510
         */
module.exports = function (module, exports, require) {
  let doublyLinkedListUtil = require("doubly-linked-list-util") /*id: 336411*/;
  let n = Symbol("max");
  let s = Symbol("length");
  let o = Symbol("lengthCalculator");
  let a = Symbol("allowStale");
  let l = Symbol("maxAge");
  let u = Symbol("dispose");
  let d = Symbol("noDisposeOnSet");
  let c = Symbol("lruList");
  let p = Symbol("cache");
  let h = Symbol("updateAgeOnGet");
  let f = () => 1;
  let y = (e, t, i) => {
    let r = e[p].get(t);
    if (r) {
      let t = r.value;
      if (g(e, t)) {
        m(e, r);
        if (!e[a]) {
          return;
        }
      } else if (i) {
        if (e[h]) {
          r.value.now = Date.now();
        }
        e[c].unshiftNode(r);
      }
      return t.value;
    }
  };
  let g = (e, t) => {
    if (!t || !t.maxAge && !e[l]) {
      return false;
    }
    let i = Date.now() - t.now;
    if (t.maxAge) {
      return i > t.maxAge;
    } else {
      return e[l] && i > e[l];
    }
  };
  let v = e => {
    if (e[s] > e[n]) {
      for (let t = e[c].tail; e[s] > e[n] && t !== null;) {
        let i = t.prev;
        m(e, t);
        t = i;
      }
    }
  };
  let m = (e, t) => {
    if (t) {
      let i = t.value;
      if (e[u]) {
        e[u](i.key, i.value);
      }
      e[s] -= i.length;
      e[p].delete(i.key);
      e[c].removeNode(t);
    }
  };
  class b {
    constructor(e, t, i, r, n) {
      this.key = e;
      this.value = t;
      this.length = i;
      this.now = r;
      this.maxAge = n || 0;
    }
  }
  let E = (e, t, i, r) => {
    let n = i.value;
    if (g(e, n)) {
      m(e, i);
      if (!e[a]) {
        n = undefined;
      }
    }
    if (n) {
      t.call(r, n.value, n.key, e);
    }
  };
  module.exports = class {
    constructor(e) {
      if (typeof e == "number") {
        e = {
          max: e
        };
      }
      e ||= {};
      if (e.max && (typeof e.max != "number" || e.max < 0)) {
        throw TypeError("max must be a non-negative number");
      }
      this[n] = e.max || Infinity;
      let t = e.length || f;
      this[o] = typeof t != "function" ? f : t;
      this[a] = e.stale || false;
      if (e.maxAge && typeof e.maxAge != "number") {
        throw TypeError("maxAge must be a number");
      }
      this[l] = e.maxAge || 0;
      this[u] = e.dispose;
      this[d] = e.noDisposeOnSet || false;
      this[h] = e.updateAgeOnGet || false;
      this.reset();
    }
    set max(e) {
      if (typeof e != "number" || e < 0) {
        throw TypeError("max must be a non-negative number");
      }
      this[n] = e || Infinity;
      v(this);
    }
    get max() {
      return this[n];
    }
    set allowStale(e) {
      this[a] = !!e;
    }
    get allowStale() {
      return this[a];
    }
    set maxAge(e) {
      if (typeof e != "number") {
        throw TypeError("maxAge must be a non-negative number");
      }
      this[l] = e;
      v(this);
    }
    get maxAge() {
      return this[l];
    }
    set lengthCalculator(e) {
      if (typeof e != "function") {
        e = f;
      }
      if (e !== this[o]) {
        this[o] = e;
        this[s] = 0;
        this[c].forEach(e => {
          e.length = this[o](e.value, e.key);
          this[s] += e.length;
        });
      }
      v(this);
    }
    get lengthCalculator() {
      return this[o];
    }
    get length() {
      return this[s];
    }
    get itemCount() {
      return this[c].length;
    }
    rforEach(e, t) {
      t = t || this;
      for (let i = this[c].tail; i !== null;) {
        let r = i.prev;
        E(this, e, i, t);
        i = r;
      }
    }
    forEach(e, t) {
      t = t || this;
      for (let i = this[c].head; i !== null;) {
        let r = i.next;
        E(this, e, i, t);
        i = r;
      }
    }
    keys() {
      return this[c].toArray().map(e => e.key);
    }
    values() {
      return this[c].toArray().map(e => e.value);
    }
    reset() {
      if (this[u] && this[c] && this[c].length) {
        this[c].forEach(e => this[u](e.key, e.value));
      }
      this[p] = new Map();
      this[c] = new doublyLinkedListUtil();
      this[s] = 0;
    }
    dump() {
      return this[c].map(e => !g(this, e) && {
        k: e.key,
        v: e.value,
        e: e.now + (e.maxAge || 0)
      }).toArray().filter(e => e);
    }
    dumpLru() {
      return this[c];
    }
    set(e, t, i) {
      if ((i = i || this[l]) && typeof i != "number") {
        throw TypeError("maxAge must be a number");
      }
      let r = i ? Date.now() : 0;
      let a = this[o](t, e);
      if (this[p].has(e)) {
        if (a > this[n]) {
          m(this, this[p].get(e));
          return false;
        }
        let o = this[p].get(e).value;
        if (this[u] && !this[d]) {
          this[u](e, o.value);
        }
        o.now = r;
        o.maxAge = i;
        o.value = t;
        this[s] += a - o.length;
        o.length = a;
        this.get(e);
        v(this);
        return true;
      }
      let h = new b(e, t, a, r, i);
      if (h.length > this[n]) {
        if (this[u]) {
          this[u](e, t);
        }
        return false;
      } else {
        this[s] += h.length;
        this[c].unshift(h);
        this[p].set(e, this[c].head);
        v(this);
        return true;
      }
    }
    has(e) {
      return !!this[p].has(e) && !g(this, this[p].get(e).value);
    }
    get(e) {
      return y(this, e, true);
    }
    peek(e) {
      return y(this, e, false);
    }
    pop() {
      let e = this[c].tail;
      if (e) {
        m(this, e);
        return e.value;
      } else {
        return null;
      }
    }
    del(e) {
      m(this, this[p].get(e));
    }
    load(e) {
      this.reset();
      let t = Date.now();
      for (let i = e.length - 1; i >= 0; i--) {
        let r = e[i];
        let n = r.e || 0;
        if (n === 0) {
          this.set(r.k, r.v);
        } else {
          let e = n - t;
          if (e > 0) {
            this.set(r.k, r.v, e);
          }
        }
      }
    }
    prune() {
      this[p].forEach((e, t) => y(this, t, false));
    }
  };
}