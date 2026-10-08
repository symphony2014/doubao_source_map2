// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Py' to 'EffectType'
// - Renamed export 'q6' to 'AnnotationType'
// - Renamed export 'n0' to 'ChangeDesc'
// - Renamed export 'Xs' to 'RangeSet'
// - Renamed export 'xv' to 'Text'
// - Renamed export 'YW' to 'Transaction'
// - Renamed export 'as' to 'ChangeSet'
// - Renamed export 'F6' to 'Compartment'
// - Renamed export 'IS' to 'countColumn'
// - Renamed export 'gm' to 'charCodeAt'
// - Renamed export 'jT' to 'EditorSelection'
// - Renamed export 'gc' to 'MapMode'
// - Renamed export 'bg' to 'fromCharCode'
// - Renamed export 'uU' to 'RangeValue'
// - Renamed export 'f_' to 'RangeSetBuilder'
// - Renamed export 'yy' to 'EditorState'
// - Renamed export 'BO' to 'mergeConfig'
// - Renamed export 'QQ' to 'PrecLevels'
// - Renamed export 'r$' to 'Facet'
// - Renamed export 'D0' to 'CharType'
// - Renamed export 'nZ' to 'charLength'
// - Renamed export 'cp' to 'graphemeBoundary'
// - Renamed export 'Gz' to 'columnToPos'
// - Renamed export 'Wl' to 'StateField'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 980017
         */
module.exports = function (module, exports, require) {
  let n;
  let s = [];
  let r = [];
  function o(t) {
    return t >= 127462 && t <= 127487;
  }
  function l(t, e, i) {
    if (e == t.length) {
      return e;
    }
    if (e && h(t.charCodeAt(e)) && c(t.charCodeAt(e - 1))) {
      e--;
    }
    let n = a(t, e);
    for (e += u(n); e < t.length;) {
      let l = a(t, e);
      if (n == 8205 || l == 8205 || i && function (t) {
        if (t < 768) {
          return false;
        }
        for (let e = 0, i = s.length;;) {
          let n = e + i >> 1;
          if (t < s[n]) {
            i = n;
          } else {
            if (!(t >= r[n])) {
              return true;
            }
            e = n + 1;
          }
          if (e == i) {
            return false;
          }
        }
      }(l)) {
        e += u(l);
        n = l;
      } else if (o(l)) {
        let i = 0;
        let n = e - 2;
        while (n >= 0 && o(a(t, n))) {
          i++;
          n -= 2;
        }
        if (i % 2 == 0) {
          break;
        }
        e += 2;
      } else {
        break;
      }
    }
    return e;
  }
  function a(t, e) {
    let i = t.charCodeAt(e);
    if (!c(i) || e + 1 == t.length) {
      return i;
    }
    let n = t.charCodeAt(e + 1);
    if (h(n)) {
      return (i - 55296 << 10) + (n - 56320) + 65536;
    } else {
      return i;
    }
  }
  function h(t) {
    return t >= 56320 && t < 57344;
  }
  function c(t) {
    return t >= 55296 && t < 56320;
  }
  function u(t) {
    if (t < 65536) {
      return 1;
    } else {
      return 2;
    }
  }
  (() => {
    let t = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(t => t ? parseInt(t, 36) : 1);
    for (let e = 0, i = 0; e < t.length; e++) {
      (e % 2 ? r : s).push(i += t[e]);
    }
  })();
  class f {
    lineAt(t) {
      if (t < 0 || t > this.length) {
        throw RangeError(`Invalid position ${t} in document of length ${this.length}`);
      }
      return this.lineInner(t, false, 1, 0);
    }
    line(t) {
      if (t < 1 || t > this.lines) {
        throw RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
      }
      return this.lineInner(t, true, 1, 0);
    }
    replace(t, e, i) {
      [t, e] = y(this, t, e);
      let n = [];
      this.decompose(0, t, n, 2);
      if (i.length) {
        i.decompose(0, i.length, n, 3);
      }
      this.decompose(e, this.length, n, 1);
      return p.from(n, this.length - (e - t) + i.length);
    }
    append(t) {
      return this.replace(this.length, this.length, t);
    }
    slice(t, e = this.length) {
      [t, e] = y(this, t, e);
      let i = [];
      this.decompose(t, e, i, 0);
      return p.from(i, e - t);
    }
    eq(t) {
      if (t == this) {
        return true;
      }
      if (t.length != this.length || t.lines != this.lines) {
        return false;
      }
      let e = this.scanIdentical(t, 1);
      let i = this.length - this.scanIdentical(t, -1);
      let n = new g(this);
      let s = new g(t);
      for (let t = e, r = e;;) {
        n.next(t);
        s.next(t);
        t = 0;
        if (n.lineBreak != s.lineBreak || n.done != s.done || n.value != s.value) {
          return false;
        }
        r += n.value.length;
        if (n.done || r >= i) {
          return true;
        }
      }
    }
    iter(t = 1) {
      return new g(this, t);
    }
    iterRange(t, e = this.length) {
      return new v(this, t, e);
    }
    iterLines(t, e) {
      let i;
      if (t == null) {
        i = this.iter();
      } else {
        if (e == null) {
          e = this.lines + 1;
        }
        let n = this.line(t).from;
        i = this.iterRange(n, Math.max(n, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
      }
      return new b(i);
    }
    toString() {
      return this.sliceString(0);
    }
    toJSON() {
      let t = [];
      this.flatten(t);
      return t;
    }
    constructor() {}
    static of(t) {
      if (t.length == 0) {
        throw RangeError("A document must have at least one line");
      }
      if (t.length != 1 || t[0]) {
        if (t.length <= 32) {
          return new d(t);
        } else {
          return p.from(d.split(t, []));
        }
      } else {
        return f.empty;
      }
    }
  }
  class d extends f {
    constructor(t, e = function (t) {
      let e = -1;
      for (let i of t) {
        e += i.length + 1;
      }
      return e;
    }(t)) {
      super();
      this.text = t;
      this.length = e;
    }
    get lines() {
      return this.text.length;
    }
    get children() {
      return null;
    }
    lineInner(t, e, i, n) {
      for (let s = 0;; s++) {
        let r = this.text[s];
        let o = n + r.length;
        if ((e ? i : o) >= t) {
          return new w(n, o, i, r);
        }
        n = o + 1;
        i++;
      }
    }
    decompose(t, e, i, n) {
      var s;
      let r = t <= 0 && e >= this.length ? this : new d((s = this.text, m(s, [""], t, e)), Math.min(e, this.length) - Math.max(0, t));
      if (n & 1) {
        let t = i.pop();
        let e = m(r.text, t.text.slice(), 0, r.length);
        if (e.length <= 32) {
          i.push(new d(e, t.length + r.length));
        } else {
          let t = e.length >> 1;
          i.push(new d(e.slice(0, t)), new d(e.slice(t)));
        }
      } else {
        i.push(r);
      }
    }
    replace(t, e, i) {
      var n;
      var s;
      if (!(i instanceof d)) {
        return super.replace(t, e, i);
      }
      [t, e] = y(this, t, e);
      let r = m(this.text, m(i.text, (n = this.text, s = 0, m(n, [""], 0, t))), e);
      let o = this.length + i.length - (e - t);
      if (r.length <= 32) {
        return new d(r, o);
      } else {
        return p.from(d.split(r, []), o);
      }
    }
    sliceString(t, e = this.length, i = "\n") {
      [t, e] = y(this, t, e);
      let n = "";
      for (let s = 0, r = 0; s <= e && r < this.text.length; r++) {
        let o = this.text[r];
        let l = s + o.length;
        if (s > t && r) {
          n += i;
        }
        if (t < l && e > s) {
          n += o.slice(Math.max(0, t - s), e - s);
        }
        s = l + 1;
      }
      return n;
    }
    flatten(t) {
      for (let e of this.text) {
        t.push(e);
      }
    }
    scanIdentical() {
      return 0;
    }
    static split(t, e) {
      let i = [];
      let n = -1;
      for (let s of t) {
        i.push(s);
        n += s.length + 1;
        if (i.length == 32) {
          e.push(new d(i, n));
          i = [];
          n = -1;
        }
      }
      if (n > -1) {
        e.push(new d(i, n));
      }
      return e;
    }
  }
  class p extends f {
    constructor(t, e) {
      super();
      this.children = t;
      this.length = e;
      this.lines = 0;
      for (let i of t) {
        this.lines += i.lines;
      }
    }
    lineInner(t, e, i, n) {
      for (let s = 0;; s++) {
        let r = this.children[s];
        let o = n + r.length;
        let l = i + r.lines - 1;
        if ((e ? l : o) >= t) {
          return r.lineInner(t, e, i, n);
        }
        n = o + 1;
        i = l + 1;
      }
    }
    decompose(t, e, i, n) {
      for (let s = 0, r = 0; r <= e && s < this.children.length; s++) {
        let o = this.children[s];
        let l = r + o.length;
        if (t <= l && e >= r) {
          let s = n & (+(r <= t) | (l >= e) * 2);
          if (r >= t && l <= e && !s) {
            i.push(o);
          } else {
            o.decompose(t - r, e - r, i, s);
          }
        }
        r = l + 1;
      }
    }
    replace(t, e, i) {
      [t, e] = y(this, t, e);
      if (i.lines < this.lines) {
        for (let n = 0, s = 0; n < this.children.length; n++) {
          let r = this.children[n];
          let o = s + r.length;
          if (t >= s && e <= o) {
            let l = r.replace(t - s, e - s, i);
            let a = this.lines - r.lines + l.lines;
            if (l.lines < a >> 4 && l.lines > a >> 6) {
              let s = this.children.slice();
              s[n] = l;
              return new p(s, this.length - (e - t) + i.length);
            }
            return super.replace(s, o, l);
          }
          s = o + 1;
        }
      }
      return super.replace(t, e, i);
    }
    sliceString(t, e = this.length, i = "\n") {
      [t, e] = y(this, t, e);
      let n = "";
      for (let s = 0, r = 0; s < this.children.length && r <= e; s++) {
        let o = this.children[s];
        let l = r + o.length;
        if (r > t && s) {
          n += i;
        }
        if (t < l && e > r) {
          n += o.sliceString(t - r, e - r, i);
        }
        r = l + 1;
      }
      return n;
    }
    flatten(t) {
      for (let e of this.children) {
        e.flatten(t);
      }
    }
    scanIdentical(t, e) {
      if (!(t instanceof p)) {
        return 0;
      }
      let i = 0;
      let [n, s, r, o] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
      for (;; n += e, s += e) {
        if (n == r || s == o) {
          return i;
        }
        let l = this.children[n];
        let a = t.children[s];
        if (l != a) {
          return i + l.scanIdentical(a, e);
        }
        i += l.length + 1;
      }
    }
    static from(t, e = t.reduce((t, e) => t + e.length + 1, -1)) {
      let i = 0;
      for (let e of t) {
        i += e.lines;
      }
      if (i < 32) {
        let i = [];
        for (let e of t) {
          e.flatten(i);
        }
        return new d(i, e);
      }
      let n = Math.max(32, i >> 5);
      let s = n << 1;
      let r = n >> 1;
      let o = [];
      let l = 0;
      let a = -1;
      let h = [];
      function c() {
        if (l != 0) {
          o.push(h.length == 1 ? h[0] : p.from(h, a));
          a = -1;
          l = h.length = 0;
        }
      }
      for (let e of t) {
        (function t(e) {
          let i;
          if (e.lines > s && e instanceof p) {
            for (let i of e.children) {
              t(i);
            }
          } else if (e.lines > r && (l > r || !l)) {
            c();
            o.push(e);
          } else if (e instanceof d && l && (i = h[h.length - 1]) instanceof d && e.lines + i.lines <= 32) {
            l += e.lines;
            a += e.length + 1;
            h[h.length - 1] = new d(i.text.concat(e.text), i.length + 1 + e.length);
          } else {
            if (l + e.lines > n) {
              c();
            }
            l += e.lines;
            a += e.length + 1;
            h.push(e);
          }
        })(e);
      }
      c();
      if (o.length == 1) {
        return o[0];
      } else {
        return new p(o, e);
      }
    }
  }
  function m(t, e, i = 0, n = 1000000000) {
    for (let s = 0, r = 0, o = true; r < t.length && s <= n; r++) {
      let l = t[r];
      let a = s + l.length;
      if (a >= i) {
        if (a > n) {
          l = l.slice(0, n - s);
        }
        if (s < i) {
          l = l.slice(i - s);
        }
        if (o) {
          e[e.length - 1] += l;
          o = false;
        } else {
          e.push(l);
        }
      }
      s = a + 1;
    }
    return e;
  }
  f.empty = new d([""], 0);
  class g {
    constructor(t, e = 1) {
      this.dir = e;
      this.done = false;
      this.lineBreak = false;
      this.value = "";
      this.nodes = [t];
      this.offsets = [e > 0 ? 1 : (t instanceof d ? t.text.length : t.children.length) << 1];
    }
    nextInner(t, e) {
      for (this.done = this.lineBreak = false;;) {
        let i = this.nodes.length - 1;
        let n = this.nodes[i];
        let s = this.offsets[i];
        let r = s >> 1;
        let o = n instanceof d ? n.text.length : n.children.length;
        if (r == (e > 0 ? o : 0)) {
          if (i == 0) {
            this.done = true;
            this.value = "";
            return this;
          }
          if (e > 0) {
            this.offsets[i - 1]++;
          }
          this.nodes.pop();
          this.offsets.pop();
        } else if ((s & 1) == (e > 0 ? 0 : 1)) {
          this.offsets[i] += e;
          if (t == 0) {
            this.lineBreak = true;
            this.value = "\n";
            return this;
          }
          t--;
        } else if (n instanceof d) {
          let s = n.text[r + (e < 0 ? -1 : 0)];
          this.offsets[i] += e;
          if (s.length > Math.max(0, t)) {
            this.value = t == 0 ? s : e > 0 ? s.slice(t) : s.slice(0, s.length - t);
            return this;
          }
          t -= s.length;
        } else {
          let s = n.children[r + (e < 0 ? -1 : 0)];
          if (t > s.length) {
            t -= s.length;
            this.offsets[i] += e;
          } else {
            if (e < 0) {
              this.offsets[i]--;
            }
            this.nodes.push(s);
            this.offsets.push(e > 0 ? 1 : (s instanceof d ? s.text.length : s.children.length) << 1);
          }
        }
      }
    }
    next(t = 0) {
      if (t < 0) {
        this.nextInner(-t, -this.dir);
        t = this.value.length;
      }
      return this.nextInner(t, this.dir);
    }
  }
  class v {
    constructor(t, e, i) {
      this.value = "";
      this.done = false;
      this.cursor = new g(t, e > i ? -1 : 1);
      this.pos = e > i ? t.length : 0;
      this.from = Math.min(e, i);
      this.to = Math.max(e, i);
    }
    nextInner(t, e) {
      if (e < 0 ? this.pos <= this.from : this.pos >= this.to) {
        this.value = "";
        this.done = true;
        return this;
      }
      t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
      let i = e < 0 ? this.pos - this.from : this.to - this.pos;
      if (t > i) {
        t = i;
      }
      i -= t;
      let {
        value: n
      } = this.cursor.next(t);
      this.pos += (n.length + t) * e;
      this.value = n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i);
      this.done = !this.value;
      return this;
    }
    next(t = 0) {
      if (t < 0) {
        t = Math.max(t, this.from - this.pos);
      } else if (t > 0) {
        t = Math.min(t, this.to - this.pos);
      }
      return this.nextInner(t, this.cursor.dir);
    }
    get lineBreak() {
      return this.cursor.lineBreak && this.value != "";
    }
  }
  class b {
    constructor(t) {
      this.inner = t;
      this.afterBreak = true;
      this.value = "";
      this.done = false;
    }
    next(t = 0) {
      let {
        done: e,
        lineBreak: i,
        value: n
      } = this.inner.next(t);
      if (e && this.afterBreak) {
        this.value = "";
        this.afterBreak = false;
      } else if (e) {
        this.done = true;
        this.value = "";
      } else if (i) {
        if (this.afterBreak) {
          this.value = "";
        } else {
          this.afterBreak = true;
          this.next();
        }
      } else {
        this.value = n;
        this.afterBreak = false;
      }
      return this;
    }
    get lineBreak() {
      return false;
    }
  }
  if (typeof Symbol != "undefined") {
    f.prototype[Symbol.iterator] = function () {
      return this.iter();
    };
    g.prototype[Symbol.iterator] = v.prototype[Symbol.iterator] = b.prototype[Symbol.iterator] = function () {
      return this;
    };
  }
  class w {
    constructor(t, e, i, n) {
      this.from = t;
      this.to = e;
      this.number = i;
      this.text = n;
    }
    get length() {
      return this.to - this.from;
    }
  }
  function y(t, e, i) {
    return [e = Math.max(0, Math.min(t.length, e)), Math.max(e, Math.min(t.length, i))];
  }
  function x(t, e, i = true, n = true) {
    return function (t, e, i = true, n = true) {
      return (i ? l : function (t, e, i) {
        while (e > 0) {
          let n = l(t, e - 2, i);
          if (n < e) {
            return n;
          }
          e--;
        }
        return 0;
      })(t, e, n);
    }(t, e, i, n);
  }
  function k(t, e) {
    let i = t.charCodeAt(e);
    if (!(i >= 55296) || !(i < 56320) || e + 1 == t.length) {
      return i;
    }
    let n = t.charCodeAt(e + 1);
    if (n >= 56320 && n < 57344) {
      return (i - 55296 << 10) + (n - 56320) + 65536;
    } else {
      return i;
    }
  }
  function S(t) {
    if (t <= 65535) {
      return String.fromCharCode(t);
    } else {
      return String.fromCharCode(((t -= 65536) >> 10) + 55296, (t & 1023) + 56320);
    }
  }
  function C(t) {
    if (t < 65536) {
      return 1;
    } else {
      return 2;
    }
  }
  let M = /\r\n?|\n/;
  var A;
  var T;
  (A = O ||= {})[A.Simple = 0] = "Simple";
  A[A.TrackDel = 1] = "TrackDel";
  A[A.TrackBefore = 2] = "TrackBefore";
  A[A.TrackAfter = 3] = "TrackAfter";
  var O = A;
  class D {
    constructor(t) {
      this.sections = t;
    }
    get length() {
      let t = 0;
      for (let e = 0; e < this.sections.length; e += 2) {
        t += this.sections[e];
      }
      return t;
    }
    get newLength() {
      let t = 0;
      for (let e = 0; e < this.sections.length; e += 2) {
        let i = this.sections[e + 1];
        t += i < 0 ? this.sections[e] : i;
      }
      return t;
    }
    get empty() {
      return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
    }
    iterGaps(t) {
      for (let e = 0, i = 0, n = 0; e < this.sections.length;) {
        let s = this.sections[e++];
        let r = this.sections[e++];
        if (r < 0) {
          t(i, n, s);
          n += s;
        } else {
          n += r;
        }
        i += s;
      }
    }
    iterChangedRanges(t, e = false) {
      L(this, t, e);
    }
    get invertedDesc() {
      let t = [];
      for (let e = 0; e < this.sections.length;) {
        let i = this.sections[e++];
        let n = this.sections[e++];
        if (n < 0) {
          t.push(i, n);
        } else {
          t.push(n, i);
        }
      }
      return new D(t);
    }
    composeDesc(t) {
      if (this.empty) {
        return t;
      } else if (t.empty) {
        return this;
      } else {
        return I(this, t);
      }
    }
    mapDesc(t, e = false) {
      if (t.empty) {
        return this;
      } else {
        return B(this, t, e);
      }
    }
    mapPos(t, e = -1, i = O.Simple) {
      let n = 0;
      let s = 0;
      for (let r = 0; r < this.sections.length;) {
        let o = this.sections[r++];
        let l = this.sections[r++];
        let a = n + o;
        if (l < 0) {
          if (a > t) {
            return s + (t - n);
          }
          s += o;
        } else {
          if (i != O.Simple && a >= t && (i == O.TrackDel && n < t && a > t || i == O.TrackBefore && n < t || i == O.TrackAfter && a > t)) {
            return null;
          }
          if (a > t || a == t && e < 0 && !o) {
            if (t == n || e < 0) {
              return s;
            } else {
              return s + l;
            }
          }
          s += l;
        }
        n = a;
      }
      if (t > n) {
        throw RangeError(`Position ${t} is out of range for changeset of length ${n}`);
      }
      return s;
    }
    touchesRange(t, e = t) {
      for (let i = 0, n = 0; i < this.sections.length && n <= e;) {
        let s = this.sections[i++];
        let r = this.sections[i++];
        let o = n + s;
        if (r >= 0 && n <= e && o >= t) {
          return !(n < t) || !(o > e) || "cover";
        }
        n = o;
      }
      return false;
    }
    toString() {
      let t = "";
      for (let e = 0; e < this.sections.length;) {
        let i = this.sections[e++];
        let n = this.sections[e++];
        t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "");
      }
      return t;
    }
    toJSON() {
      return this.sections;
    }
    static fromJSON(t) {
      if (!Array.isArray(t) || t.length % 2 || t.some(t => typeof t != "number")) {
        throw RangeError("Invalid JSON representation of ChangeDesc");
      }
      return new D(t);
    }
    static create(t) {
      return new D(t);
    }
  }
  class P extends D {
    constructor(t, e) {
      super(t);
      this.inserted = e;
    }
    apply(t) {
      if (this.length != t.length) {
        throw RangeError("Applying change set to a document with the wrong length");
      }
      L(this, (e, i, n, s, r) => t = t.replace(n, n + (i - e), r), false);
      return t;
    }
    mapDesc(t, e = false) {
      return B(this, t, e, true);
    }
    invert(t) {
      let e = this.sections.slice();
      let i = [];
      for (let n = 0, s = 0; n < e.length; n += 2) {
        let r = e[n];
        let o = e[n + 1];
        if (o >= 0) {
          e[n] = o;
          e[n + 1] = r;
          let l = n >> 1;
          while (i.length < l) {
            i.push(f.empty);
          }
          i.push(r ? t.slice(s, s + r) : f.empty);
        }
        s += r;
      }
      return new P(e, i);
    }
    compose(t) {
      if (this.empty) {
        return t;
      } else if (t.empty) {
        return this;
      } else {
        return I(this, t, true);
      }
    }
    map(t, e = false) {
      if (t.empty) {
        return this;
      } else {
        return B(this, t, e, true);
      }
    }
    iterChanges(t, e = false) {
      L(this, t, e);
    }
    get desc() {
      return D.create(this.sections);
    }
    filter(t) {
      let e = [];
      let i = [];
      let n = [];
      let s = new N(this);
      e: for (let r = 0, o = 0;;) {
        let l = r == t.length ? 1000000000 : t[r++];
        while (o < l || o == l && s.len == 0) {
          if (s.done) {
            break e;
          }
          let t = Math.min(s.len, l - o);
          E(n, t, -1);
          let r = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
          E(e, t, r);
          if (r > 0) {
            R(i, e, s.text);
          }
          s.forward(t);
          o += t;
        }
        let a = t[r++];
        while (o < a) {
          if (s.done) {
            break e;
          }
          let t = Math.min(s.len, a - o);
          E(e, t, -1);
          E(n, t, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0);
          s.forward(t);
          o += t;
        }
      }
      return {
        changes: new P(e, i),
        filtered: D.create(n)
      };
    }
    toJSON() {
      let t = [];
      for (let e = 0; e < this.sections.length; e += 2) {
        let i = this.sections[e];
        let n = this.sections[e + 1];
        if (n < 0) {
          t.push(i);
        } else if (n == 0) {
          t.push([i]);
        } else {
          t.push([i].concat(this.inserted[e >> 1].toJSON()));
        }
      }
      return t;
    }
    static of(t, e, i) {
      let n = [];
      let s = [];
      let r = 0;
      let o = null;
      function l(t = false) {
        if (!t && !n.length) {
          return;
        }
        if (r < e) {
          E(n, e - r, -1);
        }
        let i = new P(n, s);
        o = o ? o.compose(i.map(o)) : i;
        n = [];
        s = [];
        r = 0;
      }
      (function t(a) {
        if (Array.isArray(a)) {
          for (let e of a) {
            t(e);
          }
        } else if (a instanceof P) {
          if (a.length != e) {
            throw RangeError(`Mismatched change set length (got ${a.length}, expected ${e})`);
          }
          l();
          o = o ? o.compose(a.map(o)) : a;
        } else {
          let {
            from: t,
            to: o = t,
            insert: h
          } = a;
          if (t > o || t < 0 || o > e) {
            throw RangeError(`Invalid change range ${t} to ${o} (in doc of length ${e})`);
          }
          let c = h ? typeof h == "string" ? f.of(h.split(i || M)) : h : f.empty;
          let u = c.length;
          if (t == o && u == 0) {
            return;
          }
          if (t < r) {
            l();
          }
          if (t > r) {
            E(n, t - r, -1);
          }
          E(n, o - t, u);
          R(s, n, c);
          r = o;
        }
      })(t);
      l(!o);
      return o;
    }
    static empty(t) {
      return new P(t ? [t, -1] : [], []);
    }
    static fromJSON(t) {
      if (!Array.isArray(t)) {
        throw RangeError("Invalid JSON representation of ChangeSet");
      }
      let e = [];
      let i = [];
      for (let n = 0; n < t.length; n++) {
        let s = t[n];
        if (typeof s == "number") {
          e.push(s, -1);
        } else if (!Array.isArray(s) || typeof s[0] != "number" || s.some((t, e) => e && typeof t != "string")) {
          throw RangeError("Invalid JSON representation of ChangeSet");
        } else if (s.length == 1) {
          e.push(s[0], 0);
        } else {
          while (i.length < n) {
            i.push(f.empty);
          }
          i[n] = f.of(s.slice(1));
          e.push(s[0], i[n].length);
        }
      }
      return new P(e, i);
    }
    static createSet(t, e) {
      return new P(t, e);
    }
  }
  function E(t, e, i, n = false) {
    if (e == 0 && i <= 0) {
      return;
    }
    let s = t.length - 2;
    if (s >= 0 && i <= 0 && i == t[s + 1]) {
      t[s] += e;
    } else if (s >= 0 && e == 0 && t[s] == 0) {
      t[s + 1] += i;
    } else if (n) {
      t[s] += e;
      t[s + 1] += i;
    } else {
      t.push(e, i);
    }
  }
  function R(t, e, i) {
    if (i.length == 0) {
      return;
    }
    let n = e.length - 2 >> 1;
    if (n < t.length) {
      t[t.length - 1] = t[t.length - 1].append(i);
    } else {
      while (t.length < n) {
        t.push(f.empty);
      }
      t.push(i);
    }
  }
  function L(t, e, i) {
    let n = t.inserted;
    for (let s = 0, r = 0, o = 0; o < t.sections.length;) {
      let l = t.sections[o++];
      let a = t.sections[o++];
      if (a < 0) {
        s += l;
        r += l;
      } else {
        let h = s;
        let c = r;
        let u = f.empty;
        while (h += l, c += a, a && n && (u = u.append(n[o - 2 >> 1])), !i && o != t.sections.length && !(t.sections[o + 1] < 0)) {
          l = t.sections[o++];
          a = t.sections[o++];
        }
        e(s, h, r, c, u);
        s = h;
        r = c;
      }
    }
  }
  function B(t, e, i, n = false) {
    let s = [];
    let r = n ? [] : null;
    let o = new N(t);
    let l = new N(e);
    for (let t = -1;;) {
      if (o.done && l.len || l.done && o.len) {
        throw Error("Mismatched change set lengths");
      }
      if (o.ins == -1 && l.ins == -1) {
        let t = Math.min(o.len, l.len);
        E(s, t, -1);
        o.forward(t);
        l.forward(t);
      } else if (l.ins >= 0 && (o.ins < 0 || t == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !i))) {
        let e = l.len;
        for (E(s, l.ins, -1); e;) {
          let i = Math.min(o.len, e);
          if (o.ins >= 0 && t < o.i && o.len <= i) {
            E(s, 0, o.ins);
            if (r) {
              R(r, s, o.text);
            }
            t = o.i;
          }
          o.forward(i);
          e -= i;
        }
        l.next();
      } else if (o.ins >= 0) {
        let e = 0;
        let i = o.len;
        while (i) {
          if (l.ins == -1) {
            let t = Math.min(i, l.len);
            e += t;
            i -= t;
            l.forward(t);
          } else if (l.ins == 0 && l.len < i) {
            i -= l.len;
            l.next();
          } else {
            break;
          }
        }
        E(s, e, t < o.i ? o.ins : 0);
        if (r && t < o.i) {
          R(r, s, o.text);
        }
        t = o.i;
        o.forward(o.len - i);
      } else if (o.done && l.done) {
        if (r) {
          return P.createSet(s, r);
        } else {
          return D.create(s);
        }
      } else {
        throw Error("Mismatched change set lengths");
      }
    }
  }
  function I(t, e, i = false) {
    let n = [];
    let s = i ? [] : null;
    let r = new N(t);
    let o = new N(e);
    for (let t = false;;) {
      if (r.done && o.done) {
        if (s) {
          return P.createSet(n, s);
        } else {
          return D.create(n);
        }
      }
      if (r.ins == 0) {
        E(n, r.len, 0, t);
        r.next();
      } else if (o.len != 0 || o.done) {
        if (r.done || o.done) {
          throw Error("Mismatched change set lengths");
        }
        {
          let e = Math.min(r.len2, o.len);
          let i = n.length;
          if (r.ins == -1) {
            let i = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
            E(n, e, i, t);
            if (s && i) {
              R(s, n, o.text);
            }
          } else if (o.ins == -1) {
            E(n, r.off ? 0 : r.len, e, t);
            if (s) {
              R(s, n, r.textBit(e));
            }
          } else {
            E(n, r.off ? 0 : r.len, o.off ? 0 : o.ins, t);
            if (s && !o.off) {
              R(s, n, o.text);
            }
          }
          t = (r.ins > e || o.ins >= 0 && o.len > e) && (t || n.length > i);
          r.forward2(e);
          o.forward(e);
        }
      } else {
        E(n, 0, o.ins, t);
        if (s) {
          R(s, n, o.text);
        }
        o.next();
      }
    }
  }
  class N {
    constructor(t) {
      this.set = t;
      this.i = 0;
      this.next();
    }
    next() {
      let {
        sections: t
      } = this.set;
      if (this.i < t.length) {
        this.len = t[this.i++];
        this.ins = t[this.i++];
      } else {
        this.len = 0;
        this.ins = -2;
      }
      this.off = 0;
    }
    get done() {
      return this.ins == -2;
    }
    get len2() {
      if (this.ins < 0) {
        return this.len;
      } else {
        return this.ins;
      }
    }
    get text() {
      let {
        inserted: t
      } = this.set;
      let e = this.i - 2 >> 1;
      if (e >= t.length) {
        return f.empty;
      } else {
        return t[e];
      }
    }
    textBit(t) {
      let {
        inserted: e
      } = this.set;
      let i = this.i - 2 >> 1;
      if (i >= e.length && !t) {
        return f.empty;
      } else {
        return e[i].slice(this.off, t == null ? undefined : this.off + t);
      }
    }
    forward(t) {
      if (t == this.len) {
        this.next();
      } else {
        this.len -= t;
        this.off += t;
      }
    }
    forward2(t) {
      if (this.ins == -1) {
        this.forward(t);
      } else if (t == this.ins) {
        this.next();
      } else {
        this.ins -= t;
        this.off += t;
      }
    }
  }
  class V {
    constructor(t, e, i) {
      this.from = t;
      this.to = e;
      this.flags = i;
    }
    get anchor() {
      if (this.flags & 32) {
        return this.to;
      } else {
        return this.from;
      }
    }
    get head() {
      if (this.flags & 32) {
        return this.from;
      } else {
        return this.to;
      }
    }
    get empty() {
      return this.from == this.to;
    }
    get assoc() {
      if (this.flags & 8) {
        return -1;
      } else if (this.flags & 16) {
        return 1;
      } else {
        return 0;
      }
    }
    get bidiLevel() {
      let t = this.flags & 7;
      if (t == 7) {
        return null;
      } else {
        return t;
      }
    }
    get goalColumn() {
      let t = this.flags >> 6;
      if (t == 16777215) {
        return undefined;
      } else {
        return t;
      }
    }
    map(t, e = -1) {
      let i;
      let n;
      if (this.empty) {
        i = n = t.mapPos(this.from, e);
      } else {
        i = t.mapPos(this.from, 1);
        n = t.mapPos(this.to, -1);
      }
      if (i == this.from && n == this.to) {
        return this;
      } else {
        return new V(i, n, this.flags);
      }
    }
    extend(t, e = t) {
      if (t <= this.anchor && e >= this.anchor) {
        return F.range(t, e);
      }
      let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
      return F.range(this.anchor, i);
    }
    eq(t, e = false) {
      return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
    }
    toJSON() {
      return {
        anchor: this.anchor,
        head: this.head
      };
    }
    static fromJSON(t) {
      if (!t || typeof t.anchor != "number" || typeof t.head != "number") {
        throw RangeError("Invalid JSON representation for SelectionRange");
      }
      return F.range(t.anchor, t.head);
    }
    static create(t, e, i) {
      return new V(t, e, i);
    }
  }
  class F {
    constructor(t, e) {
      this.ranges = t;
      this.mainIndex = e;
    }
    map(t, e = -1) {
      if (t.empty) {
        return this;
      } else {
        return F.create(this.ranges.map(i => i.map(t, e)), this.mainIndex);
      }
    }
    eq(t, e = false) {
      if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex) {
        return false;
      }
      for (let i = 0; i < this.ranges.length; i++) {
        if (!this.ranges[i].eq(t.ranges[i], e)) {
          return false;
        }
      }
      return true;
    }
    get main() {
      return this.ranges[this.mainIndex];
    }
    asSingle() {
      if (this.ranges.length == 1) {
        return this;
      } else {
        return new F([this.main], 0);
      }
    }
    addRange(t, e = true) {
      return F.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
    }
    replaceRange(t, e = this.mainIndex) {
      let i = this.ranges.slice();
      i[e] = t;
      return F.create(i, this.mainIndex);
    }
    toJSON() {
      return {
        ranges: this.ranges.map(t => t.toJSON()),
        main: this.mainIndex
      };
    }
    static fromJSON(t) {
      if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) {
        throw RangeError("Invalid JSON representation for EditorSelection");
      }
      return new F(t.ranges.map(t => V.fromJSON(t)), t.main);
    }
    static single(t, e = t) {
      return new F([F.range(t, e)], 0);
    }
    static create(t, e = 0) {
      if (t.length == 0) {
        throw RangeError("A selection needs at least one range");
      }
      for (let i = 0, n = 0; n < t.length; n++) {
        let s = t[n];
        if (s.empty ? s.from <= i : s.from < i) {
          return F.normalized(t.slice(), e);
        }
        i = s.to;
      }
      return new F(t, e);
    }
    static cursor(t, e = 0, i, n) {
      return V.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (n ?? 16777215) << 6);
    }
    static range(t, e, i, n) {
      let s = (i ?? 16777215) << 6 | (n == null ? 7 : Math.min(6, n));
      if (e < t) {
        return V.create(e, t, s | 48);
      } else {
        return V.create(t, e, (e > t) * 8 | s);
      }
    }
    static normalized(t, e = 0) {
      let i = t[e];
      t.sort((t, e) => t.from - e.from);
      e = t.indexOf(i);
      for (let i = 1; i < t.length; i++) {
        let n = t[i];
        let s = t[i - 1];
        if (n.empty ? n.from <= s.to : n.from < s.to) {
          let r = s.from;
          let o = Math.max(n.to, s.to);
          if (i <= e) {
            e--;
          }
          t.splice(--i, 2, n.anchor > n.head ? F.range(o, r) : F.range(r, o));
        }
      }
      return new F(t, e);
    }
  }
  function j(t, e) {
    for (let i of t.ranges) {
      if (i.to > e) {
        throw RangeError("Selection points outside of document");
      }
    }
  }
  let H = 0;
  class W {
    constructor(t, e, i, n, s) {
      this.combine = t;
      this.compareInput = e;
      this.compare = i;
      this.isStatic = n;
      this.id = H++;
      this.default = t([]);
      this.extensions = typeof s == "function" ? s(this) : s;
    }
    get reader() {
      return this;
    }
    static define(t = {}) {
      return new W(t.combine || (t => t), t.compareInput || ((t, e) => t === e), t.compare || (t.combine ? (t, e) => t === e : z), !!t.static, t.enables);
    }
    of(t) {
      return new q([], this, 0, t);
    }
    compute(t, e) {
      if (this.isStatic) {
        throw Error("Can't compute a static facet");
      }
      return new q(t, this, 1, e);
    }
    computeN(t, e) {
      if (this.isStatic) {
        throw Error("Can't compute a static facet");
      }
      return new q(t, this, 2, e);
    }
    from(t, e) {
      e ||= t => t;
      return this.compute([t], i => e(i.field(t)));
    }
  }
  function z(t, e) {
    return t == e || t.length == e.length && t.every((t, i) => t === e[i]);
  }
  class q {
    constructor(t, e, i, n) {
      this.dependencies = t;
      this.facet = e;
      this.type = i;
      this.value = n;
      this.id = H++;
    }
    dynamicSlot(t) {
      let i = this.value;
      let n = this.facet.compareInput;
      let s = this.id;
      let r = t[s] >> 1;
      let o = this.type == 2;
      let l = false;
      let a = false;
      let h = [];
      for (let i of this.dependencies) {
        if (i == "doc") {
          l = true;
        } else if (i == "selection") {
          a = true;
        } else if (((t[i.id] ?? 1) & 1) == 0) {
          h.push(t[i.id]);
        }
      }
      return {
        create: t => {
          t.values[r] = i(t);
          return 1;
        },
        update(t, e) {
          if (l && e.docChanged || a && (e.docChanged || e.selection) || J(t, h)) {
            let e = i(t);
            if (o ? !$(e, t.values[r], n) : !n(e, t.values[r])) {
              t.values[r] = e;
              return 1;
            }
          }
          return 0;
        },
        reconfigure: (t, e) => {
          let l;
          let a = e.config.address[s];
          if (a != null) {
            let s = ti(e, a);
            if (this.dependencies.every(i => i instanceof W ? e.facet(i) === t.facet(i) : !(i instanceof K) || e.field(i, false) == t.field(i, false)) || (o ? $(l = i(t), s, n) : n(l = i(t), s))) {
              t.values[r] = s;
              return 0;
            }
          } else {
            l = i(t);
          }
          t.values[r] = l;
          return 1;
        }
      };
    }
  }
  function $(t, e, i) {
    if (t.length != e.length) {
      return false;
    }
    for (let n = 0; n < t.length; n++) {
      if (!i(t[n], e[n])) {
        return false;
      }
    }
    return true;
  }
  function J(t, e) {
    let i = false;
    for (let n of e) {
      if (te(t, n) & 1) {
        i = true;
      }
    }
    return i;
  }
  let _ = W.define({
    static: true
  });
  class K {
    constructor(t, e, i, n, s) {
      this.id = t;
      this.createF = e;
      this.updateF = i;
      this.compareF = n;
      this.spec = s;
      this.provides = undefined;
    }
    static define(t) {
      let e = new K(H++, t.create, t.update, t.compare || ((t, e) => t === e), t);
      if (t.provide) {
        e.provides = t.provide(e);
      }
      return e;
    }
    create(t) {
      let e = t.facet(_).find(t => t.field == this);
      return ((e == null ? undefined : e.create) || this.createF)(t);
    }
    slot(t) {
      let e = t[this.id] >> 1;
      return {
        create: t => {
          t.values[e] = this.create(t);
          return 1;
        },
        update: (t, i) => {
          let n = t.values[e];
          let s = this.updateF(n, i);
          if (this.compareF(n, s)) {
            return 0;
          } else {
            t.values[e] = s;
            return 1;
          }
        },
        reconfigure: (t, i) => i.config.address[this.id] != null ? (t.values[e] = i.field(this), 0) : (t.values[e] = this.create(t), 1)
      };
    }
    init(t) {
      return [this, _.of({
        field: this,
        create: t
      })];
    }
    get extension() {
      return this;
    }
  }
  let U = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
  };
  function G(t) {
    return e => new X(e, t);
  }
  let Q = {
    highest: G(U.highest),
    high: G(U.high),
    default: G(U.default),
    low: G(U.low),
    lowest: G(U.lowest)
  };
  class X {
    constructor(t, e) {
      this.inner = t;
      this.prec = e;
    }
  }
  class Y {
    of(t) {
      return new Z(this, t);
    }
    reconfigure(t) {
      return Y.reconfigure.of({
        compartment: this,
        extension: t
      });
    }
    get(t) {
      return t.config.compartments.get(this);
    }
  }
  class Z {
    constructor(t, e) {
      this.compartment = t;
      this.inner = e;
    }
  }
  class tt {
    constructor(t, e, i, n, s, r) {
      this.base = t;
      this.compartments = e;
      this.dynamicSlots = i;
      this.address = n;
      this.staticValues = s;
      this.facets = r;
      this.statusTemplate = [];
      while (this.statusTemplate.length < i.length) {
        this.statusTemplate.push(0);
      }
    }
    staticFacet(t) {
      let e = this.address[t.id];
      if (e == null) {
        return t.default;
      } else {
        return this.staticValues[e >> 1];
      }
    }
    static resolve(t, e, i) {
      var n;
      var s;
      var r;
      let o;
      let l;
      let a = [];
      let h = Object.create(null);
      let c = new Map();
      n = t;
      s = e;
      r = c;
      o = [[], [], [], [], []];
      l = new Map();
      (function t(e, i) {
        let n = l.get(e);
        if (n != null) {
          if (n <= i) {
            return;
          }
          let t = o[n].indexOf(e);
          if (t > -1) {
            o[n].splice(t, 1);
          }
          if (e instanceof Z) {
            r.delete(e.compartment);
          }
        }
        l.set(e, i);
        if (Array.isArray(e)) {
          for (let n of e) {
            t(n, i);
          }
        } else if (e instanceof Z) {
          if (r.has(e.compartment)) {
            throw RangeError("Duplicate use of compartment in extensions");
          }
          let n = s.get(e.compartment) || e.inner;
          r.set(e.compartment, n);
          t(n, i);
        } else if (e instanceof X) {
          t(e.inner, e.prec);
        } else if (e instanceof K) {
          o[i].push(e);
          if (e.provides) {
            t(e.provides, i);
          }
        } else if (e instanceof q) {
          o[i].push(e);
          if (e.facet.extensions) {
            t(e.facet.extensions, U.default);
          }
        } else {
          let n = e.extension;
          if (!n) {
            throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
          }
          t(n, i);
        }
      })(n, U.default);
      for (let i of o.reduce((t, e) => t.concat(e))) {
        if (i instanceof K) {
          a.push(i);
        } else {
          (h[i.facet.id] ||= []).push(i);
        }
      }
      let u = Object.create(null);
      let f = [];
      let d = [];
      for (let t of a) {
        u[t.id] = d.length << 1;
        d.push(e => t.slot(e));
      }
      let p = i == null ? undefined : i.config.facets;
      for (let t in h) {
        let e = h[t];
        let n = e[0].facet;
        let s = p && p[t] || [];
        if (e.every(t => t.type == 0)) {
          u[n.id] = f.length << 1 | 1;
          if (z(s, e)) {
            f.push(i.facet(n));
          } else {
            let t = n.combine(e.map(t => t.value));
            f.push(i && n.compare(t, i.facet(n)) ? i.facet(n) : t);
          }
        } else {
          for (let t of e) {
            if (t.type == 0) {
              u[t.id] = f.length << 1 | 1;
              f.push(t.value);
            } else {
              u[t.id] = d.length << 1;
              d.push(e => t.dynamicSlot(e));
            }
          }
          u[n.id] = d.length << 1;
          d.push(t => function (t, e, i) {
            let n = i.map(e => t[e.id]);
            let s = i.map(t => t.type);
            let r = n.filter(t => !(t & 1));
            let o = t[e.id] >> 1;
            function l(t) {
              let i = [];
              for (let e = 0; e < n.length; e++) {
                let r = ti(t, n[e]);
                if (s[e] == 2) {
                  for (let t of r) {
                    i.push(t);
                  }
                } else {
                  i.push(r);
                }
              }
              return e.combine(i);
            }
            return {
              create(t) {
                for (let e of n) {
                  te(t, e);
                }
                t.values[o] = l(t);
                return 1;
              },
              update(t, i) {
                if (!J(t, r)) {
                  return 0;
                }
                let n = l(t);
                if (e.compare(n, t.values[o])) {
                  return 0;
                } else {
                  t.values[o] = n;
                  return 1;
                }
              },
              reconfigure(t, s) {
                let r = J(t, n);
                let a = s.config.facets[e.id];
                let h = s.facet(e);
                if (a && !r && z(i, a)) {
                  t.values[o] = h;
                  return 0;
                }
                let c = l(t);
                if (e.compare(c, h)) {
                  t.values[o] = h;
                  return 0;
                } else {
                  t.values[o] = c;
                  return 1;
                }
              }
            };
          }(t, n, e));
        }
      }
      return new tt(t, c, d.map(t => t(u)), u, f, h);
    }
  }
  function te(t, e) {
    if (e & 1) {
      return 2;
    }
    let i = e >> 1;
    let n = t.status[i];
    if (n == 4) {
      throw Error("Cyclic dependency between fields and/or facets");
    }
    if (n & 2) {
      return n;
    }
    t.status[i] = 4;
    let s = t.computeSlot(t, t.config.dynamicSlots[i]);
    return t.status[i] = s | 2;
  }
  function ti(t, e) {
    if (e & 1) {
      return t.config.staticValues[e >> 1];
    } else {
      return t.values[e >> 1];
    }
  }
  let tn = W.define();
  let ts = W.define({
    combine: t => t.some(t => t),
    static: true
  });
  let tr = W.define({
    combine: t => t.length ? t[0] : undefined,
    static: true
  });
  let to = W.define();
  let tl = W.define();
  let ta = W.define();
  let th = W.define({
    combine: t => !!t.length && t[0]
  });
  class tc {
    constructor(t, e) {
      this.type = t;
      this.value = e;
    }
    static define() {
      return new tu();
    }
  }
  class tu {
    of(t) {
      return new tc(this, t);
    }
  }
  class tf {
    constructor(t) {
      this.map = t;
    }
    of(t) {
      return new td(this, t);
    }
  }
  class td {
    constructor(t, e) {
      this.type = t;
      this.value = e;
    }
    map(t) {
      let e = this.type.map(this.value, t);
      if (e === undefined) {
        return undefined;
      } else if (e == this.value) {
        return this;
      } else {
        return new td(this.type, e);
      }
    }
    is(t) {
      return this.type == t;
    }
    static define(t = {}) {
      return new tf(t.map || (t => t));
    }
    static mapEffects(t, e) {
      if (!t.length) {
        return t;
      }
      let i = [];
      for (let n of t) {
        let t = n.map(e);
        if (t) {
          i.push(t);
        }
      }
      return i;
    }
  }
  td.reconfigure = td.define();
  td.appendConfig = td.define();
  class tp {
    constructor(t, e, i, n, s, r) {
      this.startState = t;
      this.changes = e;
      this.selection = i;
      this.effects = n;
      this.annotations = s;
      this.scrollIntoView = r;
      this._doc = null;
      this._state = null;
      if (i) {
        j(i, e.newLength);
      }
      if (!s.some(t => t.type == tp.time)) {
        this.annotations = s.concat(tp.time.of(Date.now()));
      }
    }
    static create(t, e, i, n, s, r) {
      return new tp(t, e, i, n, s, r);
    }
    get newDoc() {
      return this._doc ||= this.changes.apply(this.startState.doc);
    }
    get newSelection() {
      return this.selection || this.startState.selection.map(this.changes);
    }
    get state() {
      if (!this._state) {
        this.startState.applyTransaction(this);
      }
      return this._state;
    }
    annotation(t) {
      for (let e of this.annotations) {
        if (e.type == t) {
          return e.value;
        }
      }
    }
    get docChanged() {
      return !this.changes.empty;
    }
    get reconfigured() {
      return this.startState.config != this.state.config;
    }
    isUserEvent(t) {
      let e = this.annotation(tp.userEvent);
      return !!e && (e == t || !!(e.length > t.length) && e.slice(0, t.length) == t && e[t.length] == ".");
    }
  }
  function tm(t, e, i) {
    var n;
    let s;
    let r;
    let o;
    if (i) {
      s = e.changes;
      r = P.empty(e.changes.length);
      o = t.changes.compose(e.changes);
    } else {
      s = e.changes.map(t.changes);
      r = t.changes.mapDesc(e.changes, true);
      o = t.changes.compose(s);
    }
    return {
      changes: o,
      selection: e.selection ? e.selection.map(r) : (n = t.selection) === null || n === undefined ? undefined : n.map(s),
      effects: td.mapEffects(t.effects, s).concat(td.mapEffects(e.effects, r)),
      annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
      scrollIntoView: t.scrollIntoView || e.scrollIntoView
    };
  }
  function tg(t, e, i) {
    let n = e.selection;
    let s = tb(e.annotations);
    if (e.userEvent) {
      s = s.concat(tp.userEvent.of(e.userEvent));
    }
    return {
      changes: e.changes instanceof P ? e.changes : P.of(e.changes || [], i, t.facet(tr)),
      selection: n && (n instanceof F ? n : F.single(n.anchor, n.head)),
      effects: tb(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView
    };
  }
  tp.time = tc.define();
  tp.userEvent = tc.define();
  tp.addToHistory = tc.define();
  tp.remote = tc.define();
  let tv = [];
  function tb(t) {
    if (t == null) {
      return tv;
    } else if (Array.isArray(t)) {
      return t;
    } else {
      return [t];
    }
  }
  (T = tw ||= {})[T.Word = 0] = "Word";
  T[T.Space = 1] = "Space";
  T[T.Other = 2] = "Other";
  var tw = T;
  let ty = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  try {
    n = RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
  } catch (t) {}
  class tx {
    constructor(t, e, i, n, s, r) {
      this.config = t;
      this.doc = e;
      this.selection = i;
      this.values = n;
      this.status = t.statusTemplate.slice();
      this.computeSlot = s;
      if (r) {
        r._state = this;
      }
      for (let t = 0; t < this.config.dynamicSlots.length; t++) {
        te(this, t << 1);
      }
      this.computeSlot = null;
    }
    field(t, e = true) {
      let i = this.config.address[t.id];
      if (i == null) {
        if (e) {
          throw RangeError("Field is not present in this state");
        }
        return;
      }
      te(this, i);
      return ti(this, i);
    }
    update(...t) {
      return function t(e, i, n) {
        let s = tg(e, i.length ? i[0] : {}, e.doc.length);
        if (i.length && i[0].filter === false) {
          n = false;
        }
        for (let t = 1; t < i.length; t++) {
          if (i[t].filter === false) {
            n = false;
          }
          let r = !!i[t].sequential;
          s = tm(s, tg(e, i[t], r ? s.changes.newLength : e.doc.length), r);
        }
        let r = tp.create(e, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
        return function (t) {
          let e = t.startState;
          let i = e.facet(ta);
          let n = t;
          for (let s = i.length - 1; s >= 0; s--) {
            let r = i[s](t);
            if (r && Object.keys(r).length) {
              n = tm(n, tg(e, r, t.changes.newLength), true);
            }
          }
          if (n == t) {
            return t;
          } else {
            return tp.create(e, t.changes, t.selection, n.effects, n.annotations, n.scrollIntoView);
          }
        }(n ? function (e) {
          let i = e.startState;
          let n = true;
          for (let t of i.facet(to)) {
            let i = t(e);
            if (i === false) {
              n = false;
              break;
            }
            if (Array.isArray(i)) {
              n = n === true ? i : function (t, e) {
                let i = [];
                for (let n = 0, s = 0;;) {
                  let r;
                  let o;
                  if (n < t.length && (s == e.length || e[s] >= t[n])) {
                    r = t[n++];
                    o = t[n++];
                  } else {
                    if (!(s < e.length)) {
                      return i;
                    }
                    r = e[s++];
                    o = e[s++];
                  }
                  if (!i.length || i[i.length - 1] < r) {
                    i.push(r, o);
                  } else if (i[i.length - 1] < o) {
                    i[i.length - 1] = o;
                  }
                }
              }(n, i);
            }
          }
          if (n !== true) {
            let t;
            let s;
            if (n === false) {
              s = e.changes.invertedDesc;
              t = P.empty(i.doc.length);
            } else {
              let i = e.changes.filter(n);
              t = i.changes;
              s = i.filtered.mapDesc(i.changes).invertedDesc;
            }
            e = tp.create(i, t, e.selection && e.selection.map(s), td.mapEffects(e.effects, s), e.annotations, e.scrollIntoView);
          }
          let s = i.facet(tl);
          for (let n = s.length - 1; n >= 0; n--) {
            let r = s[n](e);
            e = r instanceof tp ? r : Array.isArray(r) && r.length == 1 && r[0] instanceof tp ? r[0] : t(i, tb(r), false);
          }
          return e;
        }(r) : r);
      }(this, t, true);
    }
    applyTransaction(t) {
      let e;
      let i = this.config;
      let {
        base: n,
        compartments: s
      } = i;
      for (let e of t.effects) {
        if (e.is(Y.reconfigure)) {
          if (i) {
            s = new Map();
            i.compartments.forEach((t, e) => s.set(e, t));
            i = null;
          }
          s.set(e.value.compartment, e.value.extension);
        } else if (e.is(td.reconfigure)) {
          i = null;
          n = e.value;
        } else if (e.is(td.appendConfig)) {
          i = null;
          n = tb(n).concat(e.value);
        }
      }
      e = i ? t.startState.values.slice() : new tx(i = tt.resolve(n, s, this), this.doc, this.selection, i.dynamicSlots.map(() => null), (t, e) => e.reconfigure(t, this), null).values;
      let r = t.startState.facet(ts) ? t.newSelection : t.newSelection.asSingle();
      new tx(i, t.newDoc, r, e, (e, i) => i.update(e, t), t);
    }
    replaceSelection(t) {
      if (typeof t == "string") {
        t = this.toText(t);
      }
      return this.changeByRange(e => ({
        changes: {
          from: e.from,
          to: e.to,
          insert: t
        },
        range: F.cursor(e.from + t.length)
      }));
    }
    changeByRange(t) {
      let e = this.selection;
      let i = t(e.ranges[0]);
      let n = this.changes(i.changes);
      let s = [i.range];
      let r = tb(i.effects);
      for (let i = 1; i < e.ranges.length; i++) {
        let o = t(e.ranges[i]);
        let l = this.changes(o.changes);
        let a = l.map(n);
        for (let t = 0; t < i; t++) {
          s[t] = s[t].map(a);
        }
        let h = n.mapDesc(l, true);
        s.push(o.range.map(h));
        n = n.compose(a);
        r = td.mapEffects(r, a).concat(td.mapEffects(tb(o.effects), h));
      }
      return {
        changes: n,
        selection: F.create(s, e.mainIndex),
        effects: r
      };
    }
    changes(t = []) {
      if (t instanceof P) {
        return t;
      } else {
        return P.of(t, this.doc.length, this.facet(tx.lineSeparator));
      }
    }
    toText(t) {
      return f.of(t.split(this.facet(tx.lineSeparator) || M));
    }
    sliceDoc(t = 0, e = this.doc.length) {
      return this.doc.sliceString(t, e, this.lineBreak);
    }
    facet(t) {
      let e = this.config.address[t.id];
      if (e == null) {
        return t.default;
      } else {
        te(this, e);
        return ti(this, e);
      }
    }
    toJSON(t) {
      let e = {
        doc: this.sliceDoc(),
        selection: this.selection.toJSON()
      };
      if (t) {
        for (let i in t) {
          let n = t[i];
          if (n instanceof K && this.config.address[n.id] != null) {
            e[i] = n.spec.toJSON(this.field(t[i]), this);
          }
        }
      }
      return e;
    }
    static fromJSON(t, e = {}, i) {
      if (!t || typeof t.doc != "string") {
        throw RangeError("Invalid JSON representation for EditorState");
      }
      let n = [];
      if (i) {
        for (let e in i) {
          if (Object.prototype.hasOwnProperty.call(t, e)) {
            let s = i[e];
            let r = t[e];
            n.push(s.init(t => s.spec.fromJSON(r, t)));
          }
        }
      }
      return tx.create({
        doc: t.doc,
        selection: F.fromJSON(t.selection),
        extensions: e.extensions ? n.concat([e.extensions]) : n
      });
    }
    static create(t = {}) {
      let e = tt.resolve(t.extensions || [], new Map());
      let i = t.doc instanceof f ? t.doc : f.of((t.doc || "").split(e.staticFacet(tx.lineSeparator) || M));
      let n = t.selection ? t.selection instanceof F ? t.selection : F.single(t.selection.anchor, t.selection.head) : F.single(0);
      j(n, i.length);
      if (!e.staticFacet(ts)) {
        n = n.asSingle();
      }
      return new tx(e, i, n, e.dynamicSlots.map(() => null), (t, e) => e.create(t), null);
    }
    get tabSize() {
      return this.facet(tx.tabSize);
    }
    get lineBreak() {
      return this.facet(tx.lineSeparator) || "\n";
    }
    get readOnly() {
      return this.facet(th);
    }
    phrase(t, ...e) {
      for (let e of this.facet(tx.phrases)) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          t = e[t];
          break;
        }
      }
      if (e.length) {
        t = t.replace(/\$(\$|\d*)/g, (t, i) => {
          if (i == "$") {
            return "$";
          }
          let n = +(i || 1);
          if (!n || n > e.length) {
            return t;
          } else {
            return e[n - 1];
          }
        });
      }
      return t;
    }
    languageDataAt(t, e, i = -1) {
      let n = [];
      for (let s of this.facet(tn)) {
        for (let r of s(this, e, i)) {
          if (Object.prototype.hasOwnProperty.call(r, t)) {
            n.push(r[t]);
          }
        }
      }
      return n;
    }
    charCategorizer(t) {
      var e;
      e = this.languageDataAt("wordChars", t).join("");
      return t => {
        if (!/\S/.test(t)) {
          return tw.Space;
        }
        if (function (t) {
          if (n) {
            return n.test(t);
          }
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            if (/\w/.test(i) || i > "" && (i.toUpperCase() != i.toLowerCase() || ty.test(i))) {
              return true;
            }
          }
          return false;
        }(t)) {
          return tw.Word;
        }
        for (let i = 0; i < e.length; i++) {
          if (t.indexOf(e[i]) > -1) {
            return tw.Word;
          }
        }
        return tw.Other;
      };
    }
    wordAt(t) {
      let {
        text: e,
        from: i,
        length: n
      } = this.doc.lineAt(t);
      let s = this.charCategorizer(t);
      let r = t - i;
      let o = t - i;
      while (r > 0) {
        let t = x(e, r, false);
        if (s(e.slice(t, r)) != tw.Word) {
          break;
        }
        r = t;
      }
      while (o < n) {
        let t = x(e, o);
        if (s(e.slice(o, t)) != tw.Word) {
          break;
        }
        o = t;
      }
      if (r == o) {
        return null;
      } else {
        return F.range(r + i, o + i);
      }
    }
  }
  function tk(t, e, i = {}) {
    let n = {};
    for (let e of t) {
      for (let t of Object.keys(e)) {
        let s = e[t];
        let r = n[t];
        if (r === undefined) {
          n[t] = s;
        } else if (r === s || s === undefined) ;else if (Object.hasOwnProperty.call(i, t)) {
          n[t] = i[t](r, s);
        } else {
          throw Error("Config merge conflict for field " + t);
        }
      }
    }
    for (let t in e) {
      if (n[t] === undefined) {
        n[t] = e[t];
      }
    }
    return n;
  }
  tx.allowMultipleSelections = ts;
  tx.tabSize = W.define({
    combine: t => t.length ? t[0] : 4
  });
  tx.lineSeparator = tr;
  tx.readOnly = th;
  tx.phrases = W.define({
    compare(t, e) {
      let i = Object.keys(t);
      let n = Object.keys(e);
      return i.length == n.length && i.every(i => t[i] == e[i]);
    }
  });
  tx.languageData = tn;
  tx.changeFilter = to;
  tx.transactionFilter = tl;
  tx.transactionExtender = ta;
  Y.reconfigure = td.define();
  class tS {
    eq(t) {
      return this == t;
    }
    range(t, e = t) {
      return tC.create(t, e, this);
    }
  }
  tS.prototype.startSide = tS.prototype.endSide = 0;
  tS.prototype.point = false;
  tS.prototype.mapMode = O.TrackDel;
  class tC {
    constructor(t, e, i) {
      this.from = t;
      this.to = e;
      this.value = i;
    }
    static create(t, e, i) {
      return new tC(t, e, i);
    }
  }
  function tM(t, e) {
    return t.from - e.from || t.value.startSide - e.value.startSide;
  }
  class tA {
    constructor(t, e, i, n) {
      this.from = t;
      this.to = e;
      this.value = i;
      this.maxPoint = n;
    }
    get length() {
      return this.to[this.to.length - 1];
    }
    findIndex(t, e, i, n = 0) {
      let s = i ? this.to : this.from;
      for (let r = n, o = s.length;;) {
        if (r == o) {
          return r;
        }
        let n = r + o >> 1;
        let l = s[n] - t || (i ? this.value[n].endSide : this.value[n].startSide) - e;
        if (n == r) {
          if (l >= 0) {
            return r;
          } else {
            return o;
          }
        }
        if (l >= 0) {
          o = n;
        } else {
          r = n + 1;
        }
      }
    }
    between(t, e, i, n) {
      for (let s = this.findIndex(e, -1000000000, true), r = this.findIndex(i, 1000000000, false, s); s < r; s++) {
        if (n(this.from[s] + t, this.to[s] + t, this.value[s]) === false) {
          return false;
        }
      }
    }
    map(t, e) {
      let i = [];
      let n = [];
      let s = [];
      let r = -1;
      let o = -1;
      for (let l = 0; l < this.value.length; l++) {
        let a = this.value[l];
        let h = this.from[l] + t;
        let c = this.to[l] + t;
        let u;
        let f;
        if (h == c) {
          let t = e.mapPos(h, a.startSide, a.mapMode);
          if (t == null || (u = f = t, a.startSide != a.endSide && (f = e.mapPos(h, a.endSide)) < u)) {
            continue;
          }
        } else if ((u = e.mapPos(h, a.startSide)) > (f = e.mapPos(c, a.endSide)) || u == f && a.startSide > 0 && a.endSide <= 0) {
          continue;
        }
        if (!((f - u || a.endSide - a.startSide) < 0)) {
          if (r < 0) {
            r = u;
          }
          if (a.point) {
            o = Math.max(o, f - u);
          }
          i.push(a);
          n.push(u - r);
          s.push(f - r);
        }
      }
      return {
        mapped: i.length ? new tA(n, s, i, o) : null,
        pos: r
      };
    }
  }
  class tT {
    constructor(t, e, i, n) {
      this.chunkPos = t;
      this.chunk = e;
      this.nextLayer = i;
      this.maxPoint = n;
    }
    static create(t, e, i, n) {
      return new tT(t, e, i, n);
    }
    get length() {
      let t = this.chunk.length - 1;
      if (t < 0) {
        return 0;
      } else {
        return Math.max(this.chunkEnd(t), this.nextLayer.length);
      }
    }
    get size() {
      if (this.isEmpty) {
        return 0;
      }
      let t = this.nextLayer.size;
      for (let e of this.chunk) {
        t += e.value.length;
      }
      return t;
    }
    chunkEnd(t) {
      return this.chunkPos[t] + this.chunk[t].length;
    }
    update(t) {
      let {
        add: e = [],
        sort: i = false,
        filterFrom: n = 0,
        filterTo: s = this.length
      } = t;
      let r = t.filter;
      if (e.length == 0 && !r) {
        return this;
      }
      if (i) {
        e = e.slice().sort(tM);
      }
      if (this.isEmpty) {
        if (e.length) {
          return tT.of(e);
        } else {
          return this;
        }
      }
      let o = new tP(this, null, -1).goto(0);
      let l = 0;
      let a = [];
      let h = new tO();
      while (o.value || l < e.length) {
        if (l < e.length && (o.from - e[l].from || o.startSide - e[l].value.startSide) >= 0) {
          let t = e[l++];
          if (!h.addInner(t.from, t.to, t.value)) {
            a.push(t);
          }
        } else if (o.rangeIndex == 1 && o.chunkIndex < this.chunk.length && (l == e.length || this.chunkEnd(o.chunkIndex) < e[l].from) && (!r || n > this.chunkEnd(o.chunkIndex) || s < this.chunkPos[o.chunkIndex]) && h.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex])) {
          o.nextChunk();
        } else {
          if ((!r || n > o.to || s < o.from || r(o.from, o.to, o.value)) && !h.addInner(o.from, o.to, o.value)) {
            a.push(tC.create(o.from, o.to, o.value));
          }
          o.next();
        }
      }
      return h.finishInner(this.nextLayer.isEmpty && !a.length ? tT.empty : this.nextLayer.update({
        add: a,
        filter: r,
        filterFrom: n,
        filterTo: s
      }));
    }
    map(t) {
      if (t.empty || this.isEmpty) {
        return this;
      }
      let e = [];
      let i = [];
      let n = -1;
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s];
        let o = this.chunk[s];
        let l = t.touchesRange(r, r + o.length);
        if (l === false) {
          n = Math.max(n, o.maxPoint);
          e.push(o);
          i.push(t.mapPos(r));
        } else if (l === true) {
          let {
            mapped: s,
            pos: l
          } = o.map(r, t);
          if (s) {
            n = Math.max(n, s.maxPoint);
            e.push(s);
            i.push(l);
          }
        }
      }
      let s = this.nextLayer.map(t);
      if (e.length == 0) {
        return s;
      } else {
        return new tT(i, e, s || tT.empty, n);
      }
    }
    between(t, e, i) {
      if (!this.isEmpty) {
        for (let n = 0; n < this.chunk.length; n++) {
          let s = this.chunkPos[n];
          let r = this.chunk[n];
          if (e >= s && t <= s + r.length && r.between(s, t - s, e - s, i) === false) {
            return;
          }
        }
        this.nextLayer.between(t, e, i);
      }
    }
    iter(t = 0) {
      return tE.from([this]).goto(t);
    }
    get isEmpty() {
      return this.nextLayer == this;
    }
    static iter(t, e = 0) {
      return tE.from(t).goto(e);
    }
    static compare(t, e, i, n, s = -1) {
      let r = t.filter(t => t.maxPoint > 0 || !t.isEmpty && t.maxPoint >= s);
      let o = e.filter(t => t.maxPoint > 0 || !t.isEmpty && t.maxPoint >= s);
      let l = tD(r, o, i);
      let a = new tL(r, l, s);
      let h = new tL(o, l, s);
      i.iterGaps((t, e, i) => tB(a, t, h, e, i, n));
      if (i.empty && i.length == 0) {
        tB(a, 0, h, 0, 0, n);
      }
    }
    static eq(t, e, i = 0, n) {
      if (n == null) {
        n = 999999999;
      }
      let s = t.filter(t => !t.isEmpty && e.indexOf(t) < 0);
      let r = e.filter(e => !e.isEmpty && t.indexOf(e) < 0);
      if (s.length != r.length) {
        return false;
      }
      if (!s.length) {
        return true;
      }
      let o = tD(s, r);
      let l = new tL(s, o, 0).goto(i);
      let a = new tL(r, o, 0).goto(i);
      while (true) {
        if (l.to != a.to || !tI(l.active, a.active) || l.point && (!a.point || !l.point.eq(a.point))) {
          return false;
        }
        if (l.to > n) {
          return true;
        }
        l.next();
        a.next();
      }
    }
    static spans(t, e, i, n, s = -1) {
      let r = new tL(t, null, s).goto(e);
      let o = e;
      let l = r.openStart;
      while (true) {
        let t = Math.min(r.to, i);
        if (r.point) {
          let i = r.activeForPoint(r.to);
          let s = r.pointFrom < e ? i.length + 1 : r.point.startSide < 0 ? i.length : Math.min(i.length, l);
          n.point(o, t, r.point, i, s, r.pointRank);
          l = Math.min(r.openEnd(t), i.length);
        } else if (t > o) {
          n.span(o, t, r.active, l);
          l = r.openEnd(t);
        }
        if (r.to > i) {
          return l + (r.point && r.to > i ? 1 : 0);
        }
        o = r.to;
        r.next();
      }
    }
    static of(t, e = false) {
      let i = new tO();
      for (let n of t instanceof tC ? [t] : e ? function (t) {
        if (t.length > 1) {
          for (let e = t[0], i = 1; i < t.length; i++) {
            let n = t[i];
            if (tM(e, n) > 0) {
              return t.slice().sort(tM);
            }
            e = n;
          }
        }
        return t;
      }(t) : t) {
        i.add(n.from, n.to, n.value);
      }
      return i.finish();
    }
    static join(t) {
      if (!t.length) {
        return tT.empty;
      }
      let e = t[t.length - 1];
      for (let i = t.length - 2; i >= 0; i--) {
        for (let n = t[i]; n != tT.empty; n = n.nextLayer) {
          e = new tT(n.chunkPos, n.chunk, e, Math.max(n.maxPoint, e.maxPoint));
        }
      }
      return e;
    }
  }
  tT.empty = new tT([], [], null, -1);
  tT.empty.nextLayer = tT.empty;
  class tO {
    finishChunk(t) {
      this.chunks.push(new tA(this.from, this.to, this.value, this.maxPoint));
      this.chunkPos.push(this.chunkStart);
      this.chunkStart = -1;
      this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
      this.maxPoint = -1;
      if (t) {
        this.from = [];
        this.to = [];
        this.value = [];
      }
    }
    constructor() {
      this.chunks = [];
      this.chunkPos = [];
      this.chunkStart = -1;
      this.last = null;
      this.lastFrom = -1000000000;
      this.lastTo = -1000000000;
      this.from = [];
      this.to = [];
      this.value = [];
      this.maxPoint = -1;
      this.setMaxPoint = -1;
      this.nextLayer = null;
    }
    add(t, e, i) {
      if (!this.addInner(t, e, i)) {
        (this.nextLayer ||= new tO()).add(t, e, i);
      }
    }
    addInner(t, e, i) {
      let n = t - this.lastTo || i.startSide - this.last.endSide;
      if (n <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0) {
        throw Error("Ranges must be added sorted by `from` position and `startSide`");
      }
      return !(n < 0) && (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), true);
    }
    addChunk(t, e) {
      if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0) {
        return false;
      }
      if (this.from.length) {
        this.finishChunk(true);
      }
      this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint);
      this.chunks.push(e);
      this.chunkPos.push(t);
      let i = e.value.length - 1;
      this.last = e.value[i];
      this.lastFrom = e.from[i] + t;
      this.lastTo = e.to[i] + t;
      return true;
    }
    finish() {
      return this.finishInner(tT.empty);
    }
    finishInner(t) {
      if (this.from.length) {
        this.finishChunk(false);
      }
      if (this.chunks.length == 0) {
        return t;
      }
      let e = tT.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
      this.from = null;
      return e;
    }
  }
  function tD(t, e, i) {
    let n = new Map();
    for (let e of t) {
      for (let t = 0; t < e.chunk.length; t++) {
        if (e.chunk[t].maxPoint <= 0) {
          n.set(e.chunk[t], e.chunkPos[t]);
        }
      }
    }
    let s = new Set();
    for (let t of e) {
      for (let e = 0; e < t.chunk.length; e++) {
        let r = n.get(t.chunk[e]);
        if (r != null && (i ? i.mapPos(r) : r) == t.chunkPos[e] && !(i == null ? undefined : i.touchesRange(r, r + t.chunk[e].length))) {
          s.add(t.chunk[e]);
        }
      }
    }
    return s;
  }
  class tP {
    constructor(t, e, i, n = 0) {
      this.layer = t;
      this.skip = e;
      this.minPoint = i;
      this.rank = n;
    }
    get startSide() {
      if (this.value) {
        return this.value.startSide;
      } else {
        return 0;
      }
    }
    get endSide() {
      if (this.value) {
        return this.value.endSide;
      } else {
        return 0;
      }
    }
    goto(t, e = -1000000000) {
      this.chunkIndex = this.rangeIndex = 0;
      this.gotoInner(t, e, false);
      return this;
    }
    gotoInner(t, e, i) {
      while (this.chunkIndex < this.layer.chunk.length) {
        let e = this.layer.chunk[this.chunkIndex];
        if ((!this.skip || !this.skip.has(e)) && !(this.layer.chunkEnd(this.chunkIndex) < t) && !(e.maxPoint < this.minPoint)) {
          break;
        }
        this.chunkIndex++;
        i = false;
      }
      if (this.chunkIndex < this.layer.chunk.length) {
        let n = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, true);
        if (!i || this.rangeIndex < n) {
          this.setRangeIndex(n);
        }
      }
      this.next();
    }
    forward(t, e) {
      if ((this.to - t || this.endSide - e) < 0) {
        this.gotoInner(t, e, true);
      }
    }
    next() {
      while (true) {
        if (this.chunkIndex == this.layer.chunk.length) {
          this.from = this.to = 1000000000;
          this.value = null;
          break;
        }
        {
          let t = this.layer.chunkPos[this.chunkIndex];
          let e = this.layer.chunk[this.chunkIndex];
          let i = t + e.from[this.rangeIndex];
          this.from = i;
          this.to = t + e.to[this.rangeIndex];
          this.value = e.value[this.rangeIndex];
          this.setRangeIndex(this.rangeIndex + 1);
          if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) {
            break;
          }
        }
      }
    }
    setRangeIndex(t) {
      if (t == this.layer.chunk[this.chunkIndex].value.length) {
        this.chunkIndex++;
        if (this.skip) {
          while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex])) {
            this.chunkIndex++;
          }
        }
        this.rangeIndex = 0;
      } else {
        this.rangeIndex = t;
      }
    }
    nextChunk() {
      this.chunkIndex++;
      this.rangeIndex = 0;
      this.next();
    }
    compare(t) {
      return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
    }
  }
  class tE {
    constructor(t) {
      this.heap = t;
    }
    static from(t, e = null, i = -1) {
      let n = [];
      for (let s = 0; s < t.length; s++) {
        for (let r = t[s]; !r.isEmpty; r = r.nextLayer) {
          if (r.maxPoint >= i) {
            n.push(new tP(r, e, i, s));
          }
        }
      }
      if (n.length == 1) {
        return n[0];
      } else {
        return new tE(n);
      }
    }
    get startSide() {
      if (this.value) {
        return this.value.startSide;
      } else {
        return 0;
      }
    }
    goto(t, e = -1000000000) {
      for (let i of this.heap) {
        i.goto(t, e);
      }
      for (let t = this.heap.length >> 1; t >= 0; t--) {
        tR(this.heap, t);
      }
      this.next();
      return this;
    }
    forward(t, e) {
      for (let i of this.heap) {
        i.forward(t, e);
      }
      for (let t = this.heap.length >> 1; t >= 0; t--) {
        tR(this.heap, t);
      }
      if ((this.to - t || this.value.endSide - e) < 0) {
        this.next();
      }
    }
    next() {
      if (this.heap.length == 0) {
        this.from = this.to = 1000000000;
        this.value = null;
        this.rank = -1;
      } else {
        let t = this.heap[0];
        this.from = t.from;
        this.to = t.to;
        this.value = t.value;
        this.rank = t.rank;
        if (t.value) {
          t.next();
        }
        tR(this.heap, 0);
      }
    }
  }
  function tR(t, e) {
    for (let i = t[e];;) {
      let n = (e << 1) + 1;
      if (n >= t.length) {
        break;
      }
      let s = t[n];
      if (n + 1 < t.length && s.compare(t[n + 1]) >= 0) {
        s = t[n + 1];
        n++;
      }
      if (i.compare(s) < 0) {
        break;
      }
      t[n] = i;
      t[e] = s;
      e = n;
    }
  }
  class tL {
    constructor(t, e, i) {
      this.minPoint = i;
      this.active = [];
      this.activeTo = [];
      this.activeRank = [];
      this.minActive = -1;
      this.point = null;
      this.pointFrom = 0;
      this.pointRank = 0;
      this.to = -1000000000;
      this.endSide = 0;
      this.openStart = -1;
      this.cursor = tE.from(t, e, i);
    }
    goto(t, e = -1000000000) {
      this.cursor.goto(t, e);
      this.active.length = this.activeTo.length = this.activeRank.length = 0;
      this.minActive = -1;
      this.to = t;
      this.endSide = e;
      this.openStart = -1;
      this.next();
      return this;
    }
    forward(t, e) {
      while (this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0) {
        this.removeActive(this.minActive);
      }
      this.cursor.forward(t, e);
    }
    removeActive(t) {
      tN(this.active, t);
      tN(this.activeTo, t);
      tN(this.activeRank, t);
      this.minActive = tF(this.active, this.activeTo);
    }
    addActive(t) {
      let e = 0;
      let {
        value: i,
        to: n,
        rank: s
      } = this.cursor;
      while (e < this.activeRank.length && (s - this.activeRank[e] || n - this.activeTo[e]) > 0) {
        e++;
      }
      tV(this.active, e, i);
      tV(this.activeTo, e, n);
      tV(this.activeRank, e, s);
      if (t) {
        tV(t, e, this.cursor.from);
      }
      this.minActive = tF(this.active, this.activeTo);
    }
    next() {
      let t = this.to;
      let e = this.point;
      this.point = null;
      let i = this.openStart < 0 ? [] : null;
      while (true) {
        let n = this.minActive;
        if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
          if (this.activeTo[n] > t) {
            this.to = this.activeTo[n];
            this.endSide = this.active[n].endSide;
            break;
          }
          this.removeActive(n);
          if (i) {
            tN(i, n);
          }
        } else if (this.cursor.value) {
          if (this.cursor.from > t) {
            this.to = this.cursor.from;
            this.endSide = this.cursor.startSide;
            break;
          }
          {
            let t = this.cursor.value;
            if (t.point) {
              if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
                this.cursor.next();
              } else {
                this.point = t;
                this.pointFrom = this.cursor.from;
                this.pointRank = this.cursor.rank;
                this.to = this.cursor.to;
                this.endSide = t.endSide;
                this.cursor.next();
                this.forward(this.to, this.endSide);
                break;
              }
            } else {
              this.addActive(i);
              this.cursor.next();
            }
          }
        } else {
          this.to = this.endSide = 1000000000;
          break;
        }
      }
      if (i) {
        this.openStart = 0;
        for (let e = i.length - 1; e >= 0 && i[e] < t; e--) {
          this.openStart++;
        }
      }
    }
    activeForPoint(t) {
      if (!this.active.length) {
        return this.active;
      }
      let e = [];
      for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--) {
        if (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) {
          e.push(this.active[i]);
        }
      }
      return e.reverse();
    }
    openEnd(t) {
      let e = 0;
      for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--) {
        e++;
      }
      return e;
    }
  }
  function tB(t, e, i, n, s, r) {
    t.goto(e);
    i.goto(n);
    let o = n + s;
    let l = n;
    let a = n - e;
    while (true) {
      let e = t.to + a - i.to;
      let n = e || t.endSide - i.endSide;
      let s = n < 0 ? t.to + a : i.to;
      let h = Math.min(s, o);
      if (t.point || i.point) {
        if (!t.point || !i.point || t.point != i.point && !t.point.eq(i.point) || !tI(t.activeForPoint(t.to), i.activeForPoint(i.to))) {
          r.comparePoint(l, h, t.point, i.point);
        }
      } else if (h > l && !tI(t.active, i.active)) {
        r.compareRange(l, h, t.active, i.active);
      }
      if (s > o) {
        break;
      }
      if ((e || t.openEnd != i.openEnd) && r.boundChange) {
        r.boundChange(s);
      }
      l = s;
      if (n <= 0) {
        t.next();
      }
      if (n >= 0) {
        i.next();
      }
    }
  }
  function tI(t, e) {
    if (t.length != e.length) {
      return false;
    }
    for (let i = 0; i < t.length; i++) {
      if (t[i] != e[i] && !t[i].eq(e[i])) {
        return false;
      }
    }
    return true;
  }
  function tN(t, e) {
    for (let i = e, n = t.length - 1; i < n; i++) {
      t[i] = t[i + 1];
    }
    t.pop();
  }
  function tV(t, e, i) {
    for (let i = t.length - 1; i >= e; i--) {
      t[i + 1] = t[i];
    }
    t[e] = i;
  }
  function tF(t, e) {
    let i = -1;
    let n = 1000000000;
    for (let s = 0; s < e.length; s++) {
      if ((e[s] - n || t[s].endSide - t[i].endSide) < 0) {
        i = s;
        n = e[s];
      }
    }
    return i;
  }
  function tj(t, e, i = t.length) {
    let n = 0;
    for (let s = 0; s < i;) {
      if (t.charCodeAt(s) == 9) {
        n += e - n % e;
        s++;
      } else {
        n++;
        s = x(t, s);
      }
    }
    return n;
  }
  function tH(t, e, i, n) {
    for (let n = 0, s = 0;;) {
      if (s >= e) {
        return n;
      }
      if (n == t.length) {
        break;
      }
      s += t.charCodeAt(n) == 9 ? i - s % i : 1;
      n = x(t, n);
    }
    if (n === true) {
      return -1;
    } else {
      return t.length;
    }
  }
  require.d(exports, {
    EffectType: function () {
      return td;
    },
    AnnotationType: function () {
      return tc;
    },
    ChangeDesc: function () {
      return D;
    },
    RangeSet: function () {
      return tT;
    },
    Text: function () {
      return f;
    },
    Transaction: function () {
      return tp;
    },
    ChangeSet: function () {
      return P;
    },
    Compartment: function () {
      return Y;
    },
    countColumn: function () {
      return tj;
    },
    charCodeAt: function () {
      return k;
    },
    EditorSelection: function () {
      return F;
    },
    MapMode: function () {
      return O;
    },
    fromCharCode: function () {
      return S;
    },
    RangeValue: function () {
      return tS;
    },
    RangeSetBuilder: function () {
      return tO;
    },
    EditorState: function () {
      return tx;
    },
    mergeConfig: function () {
      return tk;
    },
    PrecLevels: function () {
      return K;
    },
    Facet: function () {
      return W;
    },
    CharType: function () {
      return tw;
    },
    charLength: function () {
      return C;
    },
    graphemeBoundary: function () {
      return x;
    },
    columnToPos: function () {
      return tH;
    },
    StateField: function () {
      return Q;
    }
  });
}