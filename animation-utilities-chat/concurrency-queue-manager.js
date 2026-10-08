// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ConcurrencyQueue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 631781
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var s;
  var a;
  var o;
  var l;
  var u;
  var c;
  var d;
  var f;
  var h;
  var p;
  var m;
  var g;
  var _;
  var v;
  var y;
  var S;
  var b;
  var E;
  var w;
  var T;
  var k;
  var O;
  var M;
  var I;
  var N;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  class A extends Error {
    constructor(e) {
      super(e);
      this.name = "TimeoutError";
    }
  }
  class x extends Error {
    constructor(e) {
      super();
      this.name = "AbortError";
      this.message = e;
    }
  }
  let L = e => globalThis.DOMException === undefined ? new x(e) : new DOMException(e);
  let P = e => {
    let t = e.reason === undefined ? L("This operation was aborted.") : e.reason;
    if (t instanceof Error) {
      return t;
    } else {
      return L(t);
    }
  };
  function D(e, t, n, i) {
    if (n === "a" && !i) {
      throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) {
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (n === "m") {
      return i;
    } else if (n === "a") {
      return i.call(e);
    } else if (i) {
      return i.value;
    } else {
      return t.get(e);
    }
  }
  class R {
    constructor() {
      i.set(this, []);
    }
    enqueue(e, t) {
      let n = {
        priority: (t = {
          priority: 0,
          ...t
        }).priority,
        run: e
      };
      if (this.size && D(this, i, "f")[this.size - 1].priority >= t.priority) {
        D(this, i, "f").push(n);
        return;
      }
      let r = function (e, t, n) {
        let i = 0;
        let r = e.length;
        while (r > 0) {
          let s = Math.trunc(r / 2);
          let a = i + s;
          if (n(e[a], t) <= 0) {
            i = ++a;
            r -= s + 1;
          } else {
            r = s;
          }
        }
        return i;
      }(D(this, i, "f"), n, (e, t) => t.priority - e.priority);
      D(this, i, "f").splice(r, 0, n);
    }
    dequeue() {
      let e = D(this, i, "f").shift();
      if (e == null) {
        return undefined;
      } else {
        return e.run;
      }
    }
    filter(e) {
      return D(this, i, "f").filter(t => t.priority === e.priority).map(e => e.run);
    }
    get size() {
      return D(this, i, "f").length;
    }
  }
  i = new WeakMap();
  function $(e, t, n, i, r) {
    if (i === "m") {
      throw TypeError("Private method is not writable");
    }
    if (i === "a" && !r) {
      throw TypeError("Private accessor was defined without a setter");
    }
    if (typeof t == "function" ? e !== t || !r : !t.has(e)) {
      throw TypeError("Cannot write private member to an object whose class did not declare it");
    }
    if (i === "a") {
      r.call(e, n);
    } else if (r) {
      r.value = n;
    } else {
      t.set(e, n);
    }
    return n;
  }
  function j(e, t, n, i) {
    if (n === "a" && !i) {
      throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) {
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (n === "m") {
      return i;
    } else if (n === "a") {
      return i.call(e);
    } else if (i) {
      return i.value;
    } else {
      return t.get(e);
    }
  }
  class Z extends Error {}
  class F extends eventEmitterWrapper_1.eventEmitter {
    constructor(e) {
      var t;
      var i;
      super();
      r.add(this);
      s.set(this, undefined);
      a.set(this, undefined);
      o.set(this, 0);
      l.set(this, undefined);
      u.set(this, undefined);
      c.set(this, 0);
      d.set(this, undefined);
      f.set(this, undefined);
      h.set(this, undefined);
      p.set(this, undefined);
      m.set(this, 0);
      g.set(this, undefined);
      _.set(this, undefined);
      v.set(this, undefined);
      Object.defineProperty(this, "timeout", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      if (typeof (e = {
        carryoverConcurrencyCount: false,
        intervalCap: Number.POSITIVE_INFINITY,
        interval: 0,
        concurrency: Number.POSITIVE_INFINITY,
        autoStart: true,
        queueClass: R,
        ...e
      }).intervalCap != "number" || !(e.intervalCap >= 1)) {
        throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${((t = e.intervalCap) === null || t === undefined ? undefined : t.toString()) ?? ""}\` (${typeof e.intervalCap})`);
      }
      if (e.interval === undefined || !Number.isFinite(e.interval) || !(e.interval >= 0)) {
        throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${((i = e.interval) === null || i === undefined ? undefined : i.toString()) ?? ""}\` (${typeof e.interval})`);
      }
      $(this, s, e.carryoverConcurrencyCount, "f");
      $(this, a, e.intervalCap === Number.POSITIVE_INFINITY || e.interval === 0, "f");
      $(this, l, e.intervalCap, "f");
      $(this, u, e.interval, "f");
      $(this, h, new e.queueClass(), "f");
      $(this, p, e.queueClass, "f");
      this.concurrency = e.concurrency;
      this.timeout = e.timeout;
      $(this, v, e.throwOnTimeout === true, "f");
      $(this, _, e.autoStart === false, "f");
    }
    get concurrency() {
      return j(this, g, "f");
    }
    set concurrency(e) {
      if (typeof e != "number" || !(e >= 1)) {
        throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
      }
      $(this, g, e, "f");
      j(this, r, "m", M).call(this);
    }
    async add(e, t = {}) {
      t = {
        timeout: this.timeout,
        throwOnTimeout: j(this, v, "f"),
        ...t
      };
      return new Promise((n, i) => {
        j(this, h, "f").enqueue(async () => {
          var a;
          var l;
          $(this, m, (a = j(this, m, "f"), ++a), "f");
          $(this, o, (l = j(this, o, "f"), ++l), "f");
          try {
            if (t.signal?.aborted) {
              throw new Z("The task was aborted.");
            }
            let i = e({
              signal: t.signal
            });
            if (t.timeout) {
              i = function (e, t, n, i) {
                let r;
                let s = new Promise((s, a) => {
                  if (typeof t != "number" || Math.sign(t) !== 1) {
                    throw TypeError(`Expected \`milliseconds\` to be a positive number, got \`${t}\``);
                  }
                  if (t === Number.POSITIVE_INFINITY) {
                    s(e);
                    return;
                  }
                  if ((i = {
                    customTimers: {
                      setTimeout,
                      clearTimeout
                    },
                    ...i
                  }).signal) {
                    let {
                      signal: e
                    } = i;
                    if (e.aborted) {
                      a(P(e));
                    }
                    e.addEventListener("abort", () => {
                      a(P(e));
                    });
                  }
                  r = i.customTimers.setTimeout.call(undefined, () => {
                    let i = `Promise timed out after ${t} milliseconds`;
                    let r = n instanceof Error ? n : new A(i);
                    if (typeof e.cancel == "function") {
                      e.cancel();
                    }
                    a(r);
                  }, t);
                  (async () => {
                    try {
                      s(await e);
                    } catch (e) {
                      a(e);
                    } finally {
                      i.customTimers.clearTimeout.call(undefined, r);
                    }
                  })();
                });
                s.clear = () => {
                  clearTimeout(r);
                  r = undefined;
                };
                return s;
              }(Promise.resolve(i), t.timeout);
            }
            if (t.signal) {
              i = Promise.race([i, j(this, r, "m", I).call(this, t.signal)]);
            }
            let a = await i;
            n(a);
            this.emit("completed", a);
          } catch (e) {
            if (e instanceof A && !t.throwOnTimeout) {
              n();
              return;
            }
            i(e);
            this.emit("error", e);
          } finally {
            j(this, r, "m", b).call(this);
          }
        }, t);
        this.emit("add");
        j(this, r, "m", T).call(this);
      });
    }
    async addAll(e, t) {
      return Promise.all(e.map(async e => this.add(e, t)));
    }
    start() {
      if (j(this, _, "f")) {
        $(this, _, false, "f");
        j(this, r, "m", M).call(this);
      }
      return this;
    }
    pause() {
      $(this, _, true, "f");
    }
    clear() {
      $(this, h, new (j(this, p, "f"))(), "f");
    }
    async onEmpty() {
      if (j(this, h, "f").size !== 0) {
        await j(this, r, "m", N).call(this, "empty");
      }
    }
    async onSizeLessThan(e) {
      if (!(j(this, h, "f").size < e)) {
        await j(this, r, "m", N).call(this, "next", () => j(this, h, "f").size < e);
      }
    }
    async onIdle() {
      if (j(this, m, "f") !== 0 || j(this, h, "f").size !== 0) {
        await j(this, r, "m", N).call(this, "idle");
      }
    }
    get size() {
      return j(this, h, "f").size;
    }
    sizeBy(e) {
      return j(this, h, "f").filter(e).length;
    }
    get pending() {
      return j(this, m, "f");
    }
    get isPaused() {
      return j(this, _, "f");
    }
  }
  s = new WeakMap();
  a = new WeakMap();
  o = new WeakMap();
  l = new WeakMap();
  u = new WeakMap();
  c = new WeakMap();
  d = new WeakMap();
  f = new WeakMap();
  h = new WeakMap();
  p = new WeakMap();
  m = new WeakMap();
  g = new WeakMap();
  _ = new WeakMap();
  v = new WeakMap();
  r = new WeakSet();
  y = function () {
    return j(this, a, "f") || j(this, o, "f") < j(this, l, "f");
  };
  S = function () {
    return j(this, m, "f") < j(this, g, "f");
  };
  b = function () {
    var e;
    $(this, m, (e = j(this, m, "f"), --e), "f");
    j(this, r, "m", T).call(this);
    this.emit("next");
  };
  E = function () {
    j(this, r, "m", O).call(this);
    j(this, r, "m", k).call(this);
    $(this, f, undefined, "f");
  };
  w = function () {
    let e = Date.now();
    if (j(this, d, "f") === undefined) {
      let t = j(this, c, "f") - e;
      if (!(t < 0)) {
        if (j(this, f, "f") === undefined) {
          $(this, f, setTimeout(() => {
            j(this, r, "m", E).call(this);
          }, t), "f");
        }
        return true;
      }
      $(this, o, j(this, s, "f") ? j(this, m, "f") : 0, "f");
    }
    return false;
  };
  T = function () {
    if (j(this, h, "f").size === 0) {
      if (j(this, d, "f")) {
        clearInterval(j(this, d, "f"));
      }
      $(this, d, undefined, "f");
      this.emit("empty");
      if (j(this, m, "f") === 0) {
        this.emit("idle");
      }
      return false;
    }
    if (!j(this, _, "f")) {
      let e = !j(this, r, "a", w);
      if (j(this, r, "a", y) && j(this, r, "a", S)) {
        let t = j(this, h, "f").dequeue();
        return !!t && (this.emit("active"), t(), e && j(this, r, "m", k).call(this), true);
      }
    }
    return false;
  };
  k = function () {
    if (!j(this, a, "f") && j(this, d, "f") === undefined) {
      $(this, d, setInterval(() => {
        j(this, r, "m", O).call(this);
      }, j(this, u, "f")), "f");
      $(this, c, Date.now() + j(this, u, "f"), "f");
    }
  };
  O = function () {
    if (j(this, o, "f") === 0 && j(this, m, "f") === 0 && j(this, d, "f")) {
      clearInterval(j(this, d, "f"));
      $(this, d, undefined, "f");
    }
    $(this, o, j(this, s, "f") ? j(this, m, "f") : 0, "f");
    j(this, r, "m", M).call(this);
  };
  M = function () {
    while (j(this, r, "m", T).call(this));
  };
  I = async function (e) {
    return new Promise((t, n) => {
      e.addEventListener("abort", () => {
        n(new Z("The task was aborted."));
      }, {
        once: true
      });
    });
  };
  N = async function (e, t) {
    return new Promise(n => {
      let i = () => {
        if (!t || t()) {
          this.off(e, i);
          n();
        }
      };
      this.on(e, i);
    });
  };
  require.d(exports, {
    ConcurrencyQueue: function () {
      return F;
    }
  });
}