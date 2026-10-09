// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IH' to 'collectionUtils'
// - Renamed export 'Ry' to 'iterationSentinel'
// - Renamed export 'Vw' to 'createSequence'
// - Renamed export 'i' to 'Sequence'
// - Renamed export 'i8' to 'RecursiveSequence'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 734269
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  class a {
    constructor(e, t) {
      this.startFn = e;
      this.nextFn = t;
    }
    iterator() {
      let e = {
        state: this.startFn(),
        next: () => this.nextFn(e.state),
        [Symbol.iterator]: () => e
      };
      return e;
    }
    [Symbol.iterator]() {
      return this.iterator();
    }
    isEmpty() {
      return !!this.iterator().next().done;
    }
    count() {
      let e = this.iterator();
      let t = 0;
      let r = e.next();
      while (!r.done) {
        t++;
        r = e.next();
      }
      return t;
    }
    toArray() {
      let e;
      let t = [];
      let r = this.iterator();
      do {
        if ((e = r.next()).value !== undefined) {
          t.push(e.value);
        }
      } while (!e.done);
      return t;
    }
    toSet() {
      return new Set(this);
    }
    toMap(e, t) {
      return new Map(this.map(r => [e ? e(r) : r, t ? t(r) : r]));
    }
    toString() {
      return this.join();
    }
    concat(e) {
      return new a(() => ({
        first: this.startFn(),
        firstDone: false,
        iterator: e[Symbol.iterator]()
      }), e => {
        let t;
        if (!e.firstDone) {
          do {
            if (!(t = this.nextFn(e.first)).done) {
              return t;
            }
          } while (!t.done);
          e.firstDone = true;
        }
        do {
          if (!(t = e.iterator.next()).done) {
            return t;
          }
        } while (!t.done);
        return l;
      });
    }
    join(e = ",") {
      let t;
      let r = this.iterator();
      let n = "";
      let i = false;
      do {
        var a;
        if (!(t = r.next()).done) {
          if (i) {
            n += e;
          }
          n += typeof (a = t.value) == "string" ? a : a === undefined ? "undefined" : typeof a.toString == "function" ? a.toString() : Object.prototype.toString.call(a);
        }
        i = true;
      } while (!t.done);
      return n;
    }
    indexOf(e, t = 0) {
      let r = this.iterator();
      let n = 0;
      let i = r.next();
      while (!i.done) {
        if (n >= t && i.value === e) {
          return n;
        }
        i = r.next();
        n++;
      }
      return -1;
    }
    every(e) {
      let t = this.iterator();
      let r = t.next();
      while (!r.done) {
        if (!e(r.value)) {
          return false;
        }
        r = t.next();
      }
      return true;
    }
    some(e) {
      let t = this.iterator();
      let r = t.next();
      while (!r.done) {
        if (e(r.value)) {
          return true;
        }
        r = t.next();
      }
      return false;
    }
    forEach(e) {
      let t = this.iterator();
      let r = 0;
      let n = t.next();
      while (!n.done) {
        e(n.value, r);
        n = t.next();
        r++;
      }
    }
    map(e) {
      return new a(this.startFn, t => {
        let {
          done: r,
          value: n
        } = this.nextFn(t);
        if (r) {
          return l;
        } else {
          return {
            done: false,
            value: e(n)
          };
        }
      });
    }
    filter(e) {
      return new a(this.startFn, t => {
        let r;
        do {
          if (!(r = this.nextFn(t)).done && e(r.value)) {
            return r;
          }
        } while (!r.done);
        return l;
      });
    }
    nonNullable() {
      return this.filter(e => e != null);
    }
    reduce(e, t) {
      let r = this.iterator();
      let n = t;
      let i = r.next();
      while (!i.done) {
        n = n === undefined ? i.value : e(n, i.value);
        i = r.next();
      }
      return n;
    }
    reduceRight(e, t) {
      return this.recursiveReduce(this.iterator(), e, t);
    }
    recursiveReduce(e, t, r) {
      let n = e.next();
      if (n.done) {
        return r;
      }
      let i = this.recursiveReduce(e, t, r);
      if (i === undefined) {
        return n.value;
      } else {
        return t(i, n.value);
      }
    }
    find(e) {
      let t = this.iterator();
      let r = t.next();
      while (!r.done) {
        if (e(r.value)) {
          return r.value;
        }
        r = t.next();
      }
    }
    findIndex(e) {
      let t = this.iterator();
      let r = 0;
      let n = t.next();
      while (!n.done) {
        if (e(n.value)) {
          return r;
        }
        n = t.next();
        r++;
      }
      return -1;
    }
    includes(e) {
      let t = this.iterator();
      let r = t.next();
      while (!r.done) {
        if (r.value === e) {
          return true;
        }
        r = t.next();
      }
      return false;
    }
    flatMap(e) {
      return new a(() => ({
        this: this.startFn()
      }), t => {
        do {
          if (t.iterator) {
            let e = t.iterator.next();
            if (!e.done) {
              return e;
            }
            t.iterator = undefined;
          }
          let {
            done: r,
            value: n
          } = this.nextFn(t.this);
          if (!r) {
            let r = e(n);
            if (!s(r)) {
              return {
                done: false,
                value: r
              };
            }
            t.iterator = r[Symbol.iterator]();
          }
        } while (t.iterator);
        return l;
      });
    }
    flat(e = 1) {
      if (e <= 0) {
        return this;
      }
      let t = e > 1 ? this.flat(e - 1) : this;
      return new a(() => ({
        this: t.startFn()
      }), e => {
        do {
          if (e.iterator) {
            let t = e.iterator.next();
            if (!t.done) {
              return t;
            }
            e.iterator = undefined;
          }
          let {
            done: r,
            value: n
          } = t.nextFn(e.this);
          if (!r) {
            if (!s(n)) {
              return {
                done: false,
                value: n
              };
            }
            e.iterator = n[Symbol.iterator]();
          }
        } while (e.iterator);
        return l;
      });
    }
    head() {
      let e = this.iterator().next();
      if (!e.done) {
        return e.value;
      }
    }
    tail(e = 1) {
      return new a(() => {
        let t = this.startFn();
        for (let r = 0; r < e && !this.nextFn(t).done; r++);
        return t;
      }, this.nextFn);
    }
    limit(e) {
      return new a(() => ({
        size: 0,
        state: this.startFn()
      }), t => (t.size++, t.size > e) ? l : this.nextFn(t.state));
    }
    distinct(e) {
      return new a(() => ({
        set: new Set(),
        internalState: this.startFn()
      }), t => {
        let r;
        do {
          if (!(r = this.nextFn(t.internalState)).done) {
            let n = e ? e(r.value) : r.value;
            if (!t.set.has(n)) {
              t.set.add(n);
              return r;
            }
          }
        } while (!r.done);
        return l;
      });
    }
    exclude(e, t) {
      let r = new Set();
      for (let n of e) {
        let e = t ? t(n) : n;
        r.add(e);
      }
      return this.filter(e => {
        let n = t ? t(e) : e;
        return !r.has(n);
      });
    }
  }
  function s(e) {
    return !!e && typeof e[Symbol.iterator] == "function";
  }
  let o = new a(() => undefined, () => l);
  let l = Object.freeze({
    done: true,
    value: undefined
  });
  function u(...e) {
    if (e.length === 1) {
      let t = e[0];
      if (t instanceof a) {
        return t;
      }
      if (s(t)) {
        return new a(() => t[Symbol.iterator](), e => e.next());
      }
      if (typeof t.length == "number") {
        return new a(() => ({
          index: 0
        }), e => e.index < t.length ? {
          done: false,
          value: t[e.index++]
        } : l);
      }
    }
    if (e.length > 1) {
      return new a(() => ({
        collIndex: 0,
        arrIndex: 0
      }), t => {
        do {
          if (t.iterator) {
            let e = t.iterator.next();
            if (!e.done) {
              return e;
            }
            t.iterator = undefined;
          }
          if (t.array) {
            if (t.arrIndex < t.array.length) {
              return {
                done: false,
                value: t.array[t.arrIndex++]
              };
            }
            t.array = undefined;
            t.arrIndex = 0;
          }
          if (t.collIndex < e.length) {
            let r = e[t.collIndex++];
            if (s(r)) {
              t.iterator = r[Symbol.iterator]();
            } else if (r && typeof r.length == "number") {
              t.array = r;
            }
          }
        } while (t.iterator || t.array || t.collIndex < e.length);
        return l;
      });
    } else {
      return o;
    }
  }
  class c extends a {
    constructor(e, t, r) {
      super(() => ({
        iterators: (r == null ? undefined : r.includeRoot) ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
        pruned: false
      }), e => {
        for (e.pruned && (e.iterators.pop(), e.pruned = false); e.iterators.length > 0;) {
          let r = e.iterators[e.iterators.length - 1].next();
          if (!r.done) {
            e.iterators.push(t(r.value)[Symbol.iterator]());
            return r;
          }
          e.iterators.pop();
        }
        return l;
      });
    }
    iterator() {
      let e = {
        state: this.startFn(),
        next: () => this.nextFn(e.state),
        prune: () => {
          e.state.pruned = true;
        },
        [Symbol.iterator]: () => e
      };
      return e;
    }
  }
  (i = n ||= {}).sum = function (e) {
    return e.reduce((e, t) => e + t, 0);
  };
  i.product = function (e) {
    return e.reduce((e, t) => e * t, 0);
  };
  i.min = function (e) {
    return e.reduce((e, t) => Math.min(e, t));
  };
  i.max = function (e) {
    return e.reduce((e, t) => Math.max(e, t));
  };
  require.d(exports, {
    collectionUtils: function () {
      return n;
    },
    iterationSentinel: function () {
      return l;
    },
    createSequence: function () {
      return u;
    },
    Sequence: function () {
      return a;
    },
    RecursiveSequence: function () {
      return c;
    }
  });
}