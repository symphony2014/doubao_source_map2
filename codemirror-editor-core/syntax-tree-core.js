// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FE' to 'createNestedParse'
// - Renamed export 'Jq' to 'NodeType'
// - Renamed export 'L3' to 'maxBufferLength'
// - Renamed export 'Lj' to 'NodeTypeSet'
// - Renamed export '_b' to 'Parser'
// - Renamed export 'hr' to 'BufferCache'
// - Renamed export 'i9' to 'ParseRange'
// - Renamed export 'md' to 'NodeTypeProp'
// - Renamed export 'mp' to 'Tree'
// - Renamed export 'vj' to 'IterMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 655745
         */
module.exports = function (module, exports, require) {
  var n;
  var s;
  let r = 1024;
  let o = 0;
  class l {
    constructor(t, e) {
      this.from = t;
      this.to = e;
    }
  }
  class a {
    constructor(t = {}) {
      this.id = o++;
      this.perNode = !!t.perNode;
      this.deserialize = t.deserialize || (() => {
        throw Error("This node type doesn't define a deserialize function");
      });
    }
    add(t) {
      if (this.perNode) {
        throw RangeError("Can't add per-node props to node types");
      }
      if (typeof t != "function") {
        t = u.match(t);
      }
      return e => {
        let i = t(e);
        if (i === undefined) {
          return null;
        } else {
          return [this, i];
        }
      };
    }
  }
  a.closedBy = new a({
    deserialize: t => t.split(" ")
  });
  a.openedBy = new a({
    deserialize: t => t.split(" ")
  });
  a.group = new a({
    deserialize: t => t.split(" ")
  });
  a.isolate = new a({
    deserialize: t => {
      if (t && t != "rtl" && t != "ltr" && t != "auto") {
        throw RangeError("Invalid value for isolate: " + t);
      }
      return t || "auto";
    }
  });
  a.contextHash = new a({
    perNode: true
  });
  a.lookAhead = new a({
    perNode: true
  });
  a.mounted = new a({
    perNode: true
  });
  class h {
    constructor(t, e, i) {
      this.tree = t;
      this.overlay = e;
      this.parser = i;
    }
    static get(t) {
      return t && t.props && t.props[a.mounted.id];
    }
  }
  let c = Object.create(null);
  class u {
    constructor(t, e, i, n = 0) {
      this.name = t;
      this.props = e;
      this.id = i;
      this.flags = n;
    }
    static define(t) {
      let e = t.props && t.props.length ? Object.create(null) : c;
      let i = +!!t.top | !!t.skipped * 2 | !!t.error * 4 | (t.name == null) * 8;
      let n = new u(t.name || "", e, t.id, i);
      if (t.props) {
        for (let i of t.props) {
          if (!Array.isArray(i)) {
            i = i(n);
          }
          if (i) {
            if (i[0].perNode) {
              throw RangeError("Can't store a per-node prop on a node type");
            }
            e[i[0].id] = i[1];
          }
        }
      }
      return n;
    }
    prop(t) {
      return this.props[t.id];
    }
    get isTop() {
      return (this.flags & 1) > 0;
    }
    get isSkipped() {
      return (this.flags & 2) > 0;
    }
    get isError() {
      return (this.flags & 4) > 0;
    }
    get isAnonymous() {
      return (this.flags & 8) > 0;
    }
    is(t) {
      if (typeof t == "string") {
        if (this.name == t) {
          return true;
        }
        let e = this.prop(a.group);
        return !!e && e.indexOf(t) > -1;
      }
      return this.id == t;
    }
    static match(t) {
      let e = Object.create(null);
      for (let i in t) {
        for (let n of i.split(" ")) {
          e[n] = t[i];
        }
      }
      return t => {
        for (let i = t.prop(a.group), n = -1; n < (i ? i.length : 0); n++) {
          let s = e[n < 0 ? t.name : i[n]];
          if (s) {
            return s;
          }
        }
      };
    }
  }
  u.none = new u("", Object.create(null), 0, 8);
  class f {
    constructor(t) {
      this.types = t;
      for (let e = 0; e < t.length; e++) {
        if (t[e].id != e) {
          throw RangeError("Node type ids should correspond to array positions when creating a node set");
        }
      }
    }
    extend(...t) {
      let e = [];
      for (let i of this.types) {
        let n = null;
        for (let e of t) {
          let t = e(i);
          if (t) {
            n ||= Object.assign({}, i.props);
            n[t[0].id] = t[1];
          }
        }
        e.push(n ? new u(i.name, n, i.id, i.flags) : i);
      }
      return new f(e);
    }
  }
  let d = new WeakMap();
  let p = new WeakMap();
  (s = n ||= {})[s.ExcludeBuffers = 1] = "ExcludeBuffers";
  s[s.IncludeAnonymous = 2] = "IncludeAnonymous";
  s[s.IgnoreMounts = 4] = "IgnoreMounts";
  s[s.IgnoreOverlays = 8] = "IgnoreOverlays";
  class m {
    constructor(t, e, i, n, s) {
      this.type = t;
      this.children = e;
      this.positions = i;
      this.length = n;
      this.props = null;
      if (s && s.length) {
        this.props = Object.create(null);
        for (let [t, e] of s) {
          this.props[typeof t == "number" ? t : t.id] = e;
        }
      }
    }
    toString() {
      let t = h.get(this);
      if (t && !t.overlay) {
        return t.tree.toString();
      }
      let e = "";
      for (let t of this.children) {
        let i = t.toString();
        if (i) {
          if (e) {
            e += ",";
          }
          e += i;
        }
      }
      if (this.type.name) {
        return (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "");
      } else {
        return e;
      }
    }
    cursor(t = 0) {
      return new O(this.topNode, t);
    }
    cursorAt(t, e = 0, i = 0) {
      let n = new O(d.get(this) || this.topNode);
      n.moveTo(t, e);
      d.set(this, n._tree);
      return n;
    }
    get topNode() {
      return new x(this, 0, 0, null);
    }
    resolve(t, e = 0) {
      let i = w(d.get(this) || this.topNode, t, e, false);
      d.set(this, i);
      return i;
    }
    resolveInner(t, e = 0) {
      let i = w(p.get(this) || this.topNode, t, e, true);
      p.set(this, i);
      return i;
    }
    resolveStack(t, e = 0) {
      return function (t, e, i) {
        let n = t.resolveInner(e, i);
        let s = null;
        for (let t = n instanceof x ? n : n.context.parent; t; t = t.parent) {
          if (t.index < 0) {
            let r = t.parent;
            (s ||= [n]).push(r.resolve(e, i));
            t = r;
          } else {
            let r = h.get(t.tree);
            if (r && r.overlay && r.overlay[0].from <= e && r.overlay[r.overlay.length - 1].to >= e) {
              let o = new x(r.tree, r.overlay[0].from + t.from, -1, t);
              (s ||= [n]).push(w(o, e, i, false));
            }
          }
        }
        if (s) {
          return A(s);
        } else {
          return n;
        }
      }(this, t, e);
    }
    iterate(t) {
      let {
        enter: e,
        leave: i,
        from: s = 0,
        to: r = this.length
      } = t;
      let o = t.mode || 0;
      let l = (o & n.IncludeAnonymous) > 0;
      for (let t = this.cursor(o | n.IncludeAnonymous);;) {
        let n = false;
        if (t.from <= r && t.to >= s && (!l && t.type.isAnonymous || e(t) !== false)) {
          if (t.firstChild()) {
            continue;
          }
          n = true;
        }
        while (n && i && (l || !t.type.isAnonymous) && i(t), !t.nextSibling()) {
          if (!t.parent()) {
            return;
          }
          n = true;
        }
      }
    }
    prop(t) {
      if (t.perNode) {
        if (this.props) {
          return this.props[t.id];
        } else {
          return undefined;
        }
      } else {
        return this.type.prop(t);
      }
    }
    get propValues() {
      let t = [];
      if (this.props) {
        for (let e in this.props) {
          t.push([+e, this.props[e]]);
        }
      }
      return t;
    }
    balance(t = {}) {
      if (this.children.length <= 8) {
        return this;
      } else {
        return R(u.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, e, i) => new m(this.type, t, e, i, this.propValues), t.makeTree || ((t, e, i) => new m(u.none, t, e, i)));
      }
    }
    static build(t) {
      return function (t) {
        let {
          buffer: i,
          nodeSet: n,
          maxBufferLength: s = r,
          reused: o = [],
          minRepeatType: l = n.types.length
        } = t;
        let h = Array.isArray(i) ? new g(i, i.length) : i;
        let c = n.types;
        let u = 0;
        let f = 0;
        function d(t, e, i, s, r, o, l, a) {
          let h = [];
          let c = [];
          while (t.length > s) {
            h.push(t.pop());
            c.push(e.pop() + i - r);
          }
          t.push(p(n.types[l], h, c, o - r, a - o));
          e.push(r - i);
        }
        function p(t, e, i, n, s = 0, r) {
          if (u) {
            let t = [a.contextHash, u];
            r = r ? [t].concat(r) : [t];
          }
          if (s > 25) {
            let t = [a.lookAhead, s];
            r = r ? [t].concat(r) : [t];
          }
          return new m(t, e, i, n, r);
        }
        let b = [];
        let w = [];
        while (h.pos > 0) {
          (function t(e, i, r, g, b, w) {
            let {
              id: y,
              start: x,
              end: k,
              size: S
            } = h;
            let C = f;
            while (S < 0) {
              h.next();
              if (S == -1) {
                let t = o[y];
                r.push(t);
                g.push(x - e);
                return;
              }
              if (S == -3) {
                u = y;
                return;
              }
              if (S == -4) {
                f = y;
                return;
              } else {
                throw RangeError(`Unrecognized record size: ${S}`);
              }
            }
            let M = c[y];
            let A;
            let T;
            let O = x - e;
            if (k - x <= s && (T = function (t, e) {
              let i = h.fork();
              let n = 0;
              let r = 0;
              let o = 0;
              let a = i.end - s;
              let c = {
                size: 0,
                start: 0,
                skip: 0
              };
              n: for (let s = i.pos - t; i.pos > s;) {
                let t = i.size;
                if (i.id == e && t >= 0) {
                  c.size = n;
                  c.start = r;
                  c.skip = o;
                  o += 4;
                  n += 4;
                  i.next();
                  continue;
                }
                let h = i.pos - t;
                if (t < 0 || h < s || i.start < a) {
                  break;
                }
                let u = (i.id >= l) * 4;
                let f = i.start;
                for (i.next(); i.pos > h;) {
                  if (i.size < 0) {
                    if (i.size == -3) {
                      u += 4;
                    } else {
                      break n;
                    }
                  } else if (i.id >= l) {
                    u += 4;
                  }
                  i.next();
                }
                r = f;
                n += t;
                o += u;
              }
              if (e < 0 || n == t) {
                c.size = n;
                c.start = r;
                c.skip = o;
              }
              if (c.size > 4) {
                return c;
              } else {
                return undefined;
              }
            }(h.pos - i, b))) {
              let t = new Uint16Array(T.size - T.skip);
              let i = h.pos - T.size;
              let s = t.length;
              while (h.pos > i) {
                s = function t(e, i, n) {
                  let {
                    id: s,
                    start: r,
                    end: o,
                    size: a
                  } = h;
                  h.next();
                  if (a >= 0 && s < l) {
                    let l = n;
                    if (a > 4) {
                      let s = h.pos - (a - 4);
                      while (h.pos > s) {
                        n = t(e, i, n);
                      }
                    }
                    i[--n] = l;
                    i[--n] = o - e;
                    i[--n] = r - e;
                    i[--n] = s;
                  } else if (a == -3) {
                    u = s;
                  } else if (a == -4) {
                    f = s;
                  }
                  return n;
                }(T.start, t, s);
              }
              A = new v(t, k - T.start, n);
              O = T.start - e;
            } else {
              let e = h.pos - S;
              h.next();
              let i = [];
              let r = [];
              let o = y >= l ? y : -1;
              let c = 0;
              let u = k;
              while (h.pos > e) {
                if (o >= 0 && h.id == o && h.size >= 0) {
                  if (h.end <= u - s) {
                    d(i, r, x, c, h.end, u, o, C);
                    c = i.length;
                    u = h.end;
                  }
                  h.next();
                } else if (w > 2500) {
                  (function (t, e, i, r) {
                    let o = [];
                    let l = 0;
                    let a = -1;
                    while (h.pos > e) {
                      let {
                        id: t,
                        start: e,
                        end: i,
                        size: n
                      } = h;
                      if (n > 4) {
                        h.next();
                      } else if (a > -1 && e < a) {
                        break;
                      } else {
                        if (a < 0) {
                          a = i - s;
                        }
                        o.push(t, e, i);
                        l++;
                        h.next();
                      }
                    }
                    if (l) {
                      let e = new Uint16Array(l * 4);
                      let s = o[o.length - 2];
                      for (let t = o.length - 3, i = 0; t >= 0; t -= 3) {
                        e[i++] = o[t];
                        e[i++] = o[t + 1] - s;
                        e[i++] = o[t + 2] - s;
                        e[i++] = i;
                      }
                      i.push(new v(e, o[2] - s, n));
                      r.push(s - t);
                    }
                  })(x, e, i, r);
                } else {
                  t(x, e, i, r, o, w + 1);
                }
              }
              if (o >= 0 && c > 0 && c < i.length) {
                d(i, r, x, c, x, u, o, C);
              }
              i.reverse();
              r.reverse();
              if (o > -1 && c > 0) {
                let t = function (t) {
                  return (e, i, n) => {
                    let s = 0;
                    let r = e.length - 1;
                    let o;
                    let l;
                    if (r >= 0 && (o = e[r]) instanceof m) {
                      if (!r && o.type == t && o.length == n) {
                        return o;
                      }
                      if (l = o.prop(a.lookAhead)) {
                        s = i[r] + o.length + l;
                      }
                    }
                    return p(t, e, i, n, s);
                  };
                }(M);
                A = R(M, i, r, 0, i.length, 0, k - x, t, t);
              } else {
                A = p(M, i, r, k - x, C - k);
              }
            }
            r.push(A);
            g.push(O);
          })(t.start || 0, t.bufferStart || 0, b, w, -1, 0);
        }
        let y = t.length ?? (b.length ? w[0] + b[0].length : 0);
        return new m(c[t.topID], b.reverse(), w.reverse(), y);
      }(t);
    }
  }
  m.empty = new m(u.none, [], [], 0);
  class g {
    constructor(t, e) {
      this.buffer = t;
      this.index = e;
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
    get pos() {
      return this.index;
    }
    next() {
      this.index -= 4;
    }
    fork() {
      return new g(this.buffer, this.index);
    }
  }
  class v {
    constructor(t, e, i) {
      this.buffer = t;
      this.length = e;
      this.set = i;
    }
    get type() {
      return u.none;
    }
    toString() {
      let t = [];
      for (let e = 0; e < this.buffer.length;) {
        t.push(this.childString(e));
        e = this.buffer[e + 3];
      }
      return t.join(",");
    }
    childString(t) {
      let e = this.buffer[t];
      let i = this.buffer[t + 3];
      let n = this.set.types[e];
      let s = n.name;
      if (/\W/.test(s) && !n.isError) {
        s = JSON.stringify(s);
      }
      if (i == (t += 4)) {
        return s;
      }
      let r = [];
      while (t < i) {
        r.push(this.childString(t));
        t = this.buffer[t + 3];
      }
      return s + "(" + r.join(",") + ")";
    }
    findChild(t, e, i, n, s) {
      let {
        buffer: r
      } = this;
      let o = -1;
      for (let l = t; l != e && (!b(s, n, r[l + 1], r[l + 2]) || (o = l, !(i > 0))); l = r[l + 3]);
      return o;
    }
    slice(t, e, i) {
      let n = this.buffer;
      let s = new Uint16Array(e - t);
      let r = 0;
      for (let o = t, l = 0; o < e;) {
        s[l++] = n[o++];
        s[l++] = n[o++] - i;
        let e = s[l++] = n[o++] - i;
        s[l++] = n[o++] - t;
        r = Math.max(r, e);
      }
      return new v(s, r, this.set);
    }
  }
  function b(t, e, i, n) {
    switch (t) {
      case -2:
        return i < e;
      case -1:
        return n >= e && i < e;
      case 0:
        return i < e && n > e;
      case 1:
        return i <= e && n > e;
      case 2:
        return n > e;
      case 4:
        return true;
    }
  }
  function w(t, e, i, s) {
    for (; t.from == t.to || (i < 1 ? t.from >= e : t.from > e) || (i > -1 ? t.to <= e : t.to < e);) {
      let e = !s && t instanceof x && t.index < 0 ? null : t.parent;
      if (!e) {
        return t;
      }
      t = e;
    }
    let o = s ? 0 : n.IgnoreOverlays;
    if (s) {
      for (let n = t, s = n.parent; s; s = (n = s).parent) {
        if (n instanceof x && n.index < 0 && s.enter(e, i, o)?.from != n.from) {
          t = s;
        }
      }
    }
    while (true) {
      let n = t.enter(e, i, o);
      if (!n) {
        return t;
      }
      t = n;
    }
  }
  class y {
    cursor(t = 0) {
      return new O(this, t);
    }
    getChild(t, e = null, i = null) {
      let n = k(this, t, e, i);
      if (n.length) {
        return n[0];
      } else {
        return null;
      }
    }
    getChildren(t, e = null, i = null) {
      return k(this, t, e, i);
    }
    resolve(t, e = 0) {
      return w(this, t, e, false);
    }
    resolveInner(t, e = 0) {
      return w(this, t, e, true);
    }
    matchContext(t) {
      return S(this, t);
    }
    enterUnfinishedNodesBefore(t) {
      let e = this.childBefore(t);
      let i = this;
      while (e) {
        let t = e.lastChild;
        if (!t || t.to != e.to) {
          break;
        }
        if (t.type.isError && t.from == t.to) {
          i = e;
          e = t.prevSibling;
        } else {
          e = t;
        }
      }
      return i;
    }
    get node() {
      return this;
    }
    get next() {
      return this.parent;
    }
  }
  class x extends y {
    constructor(t, e, i, n) {
      super();
      this._tree = t;
      this.from = e;
      this.index = i;
      this._parent = n;
    }
    get type() {
      return this._tree.type;
    }
    get name() {
      return this._tree.type.name;
    }
    get to() {
      return this.from + this._tree.length;
    }
    nextChild(t, e, i, s, r = 0) {
      for (let o = this;;) {
        for (let {
            children: l,
            positions: a
          } = o._tree, c = e > 0 ? l.length : -1; t != c; t += e) {
          let c = l[t];
          let u = a[t] + o.from;
          if (b(s, i, u, u + c.length)) {
            if (c instanceof v) {
              if (r & n.ExcludeBuffers) {
                continue;
              }
              let l = c.findChild(0, c.buffer.length, e, i - u, s);
              if (l > -1) {
                return new M(new C(o, c, t, u), null, l);
              }
            } else if (r & n.IncludeAnonymous || !c.type.isAnonymous || D(c)) {
              let l;
              if (!(r & n.IgnoreMounts) && (l = h.get(c)) && !l.overlay) {
                return new x(l.tree, u, t, o);
              }
              let a = new x(c, u, t, o);
              if (r & n.IncludeAnonymous || !a.type.isAnonymous) {
                return a;
              } else {
                return a.nextChild(e < 0 ? c.children.length - 1 : 0, e, i, s);
              }
            }
          }
        }
        if (r & n.IncludeAnonymous || !o.type.isAnonymous || (t = o.index >= 0 ? o.index + e : e < 0 ? -1 : o._parent._tree.children.length, !(o = o._parent))) {
          return null;
        }
      }
    }
    get firstChild() {
      return this.nextChild(0, 1, 0, 4);
    }
    get lastChild() {
      return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
    }
    childAfter(t) {
      return this.nextChild(0, 1, t, 2);
    }
    childBefore(t) {
      return this.nextChild(this._tree.children.length - 1, -1, t, -2);
    }
    enter(t, e, i = 0) {
      let s;
      if (!(i & n.IgnoreOverlays) && (s = h.get(this._tree)) && s.overlay) {
        let i = t - this.from;
        for (let {
          from: t,
          to: n
        } of s.overlay) {
          if ((e > 0 ? t <= i : t < i) && (e < 0 ? n >= i : n > i)) {
            return new x(s.tree, s.overlay[0].from + this.from, -1, this);
          }
        }
      }
      return this.nextChild(0, 1, t, e, i);
    }
    nextSignificantParent() {
      let t = this;
      while (t.type.isAnonymous && t._parent) {
        t = t._parent;
      }
      return t;
    }
    get parent() {
      if (this._parent) {
        return this._parent.nextSignificantParent();
      } else {
        return null;
      }
    }
    get nextSibling() {
      if (this._parent && this.index >= 0) {
        return this._parent.nextChild(this.index + 1, 1, 0, 4);
      } else {
        return null;
      }
    }
    get prevSibling() {
      if (this._parent && this.index >= 0) {
        return this._parent.nextChild(this.index - 1, -1, 0, 4);
      } else {
        return null;
      }
    }
    get tree() {
      return this._tree;
    }
    toTree() {
      return this._tree;
    }
    toString() {
      return this._tree.toString();
    }
  }
  function k(t, e, i, n) {
    let s = t.cursor();
    let r = [];
    if (!s.firstChild()) {
      return r;
    }
    if (i != null) {
      while (!s.type.is(i)) {
        if (!s.nextSibling()) {
          return r;
        }
      }
    }
    while (true) {
      if (n != null && s.type.is(n)) {
        return r;
      }
      if (s.type.is(e)) {
        r.push(s.node);
      }
      if (!s.nextSibling()) {
        if (n == null) {
          return r;
        } else {
          return [];
        }
      }
    }
  }
  function S(t, e, i = e.length - 1) {
    for (let n = t.parent; i >= 0; n = n.parent) {
      if (!n) {
        return false;
      }
      if (!n.type.isAnonymous) {
        if (e[i] && e[i] != n.name) {
          return false;
        }
        i--;
      }
    }
    return true;
  }
  class C {
    constructor(t, e, i, n) {
      this.parent = t;
      this.buffer = e;
      this.index = i;
      this.start = n;
    }
  }
  class M extends y {
    get name() {
      return this.type.name;
    }
    get from() {
      return this.context.start + this.context.buffer.buffer[this.index + 1];
    }
    get to() {
      return this.context.start + this.context.buffer.buffer[this.index + 2];
    }
    constructor(t, e, i) {
      super();
      this.context = t;
      this._parent = e;
      this.index = i;
      this.type = t.buffer.set.types[t.buffer.buffer[i]];
    }
    child(t, e, i) {
      let {
        buffer: n
      } = this.context;
      let s = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
      if (s < 0) {
        return null;
      } else {
        return new M(this.context, this, s);
      }
    }
    get firstChild() {
      return this.child(1, 0, 4);
    }
    get lastChild() {
      return this.child(-1, 0, 4);
    }
    childAfter(t) {
      return this.child(1, t, 2);
    }
    childBefore(t) {
      return this.child(-1, t, -2);
    }
    enter(t, e, i = 0) {
      if (i & n.ExcludeBuffers) {
        return null;
      }
      let {
        buffer: s
      } = this.context;
      let r = s.findChild(this.index + 4, s.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
      if (r < 0) {
        return null;
      } else {
        return new M(this.context, this, r);
      }
    }
    get parent() {
      return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(t) {
      if (this._parent) {
        return null;
      } else {
        return this.context.parent.nextChild(this.context.index + t, t, 0, 4);
      }
    }
    get nextSibling() {
      let {
        buffer: t
      } = this.context;
      let e = t.buffer[this.index + 3];
      if (e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length)) {
        return new M(this.context, this._parent, e);
      } else {
        return this.externalSibling(1);
      }
    }
    get prevSibling() {
      let {
        buffer: t
      } = this.context;
      let e = this._parent ? this._parent.index + 4 : 0;
      if (this.index == e) {
        return this.externalSibling(-1);
      } else {
        return new M(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4));
      }
    }
    get tree() {
      return null;
    }
    toTree() {
      let t = [];
      let e = [];
      let {
        buffer: i
      } = this.context;
      let n = this.index + 4;
      let s = i.buffer[this.index + 3];
      if (s > n) {
        let r = i.buffer[this.index + 1];
        t.push(i.slice(n, s, r));
        e.push(0);
      }
      return new m(this.type, t, e, this.to - this.from);
    }
    toString() {
      return this.context.buffer.childString(this.index);
    }
  }
  function A(t) {
    if (!t.length) {
      return null;
    }
    let e = 0;
    let i = t[0];
    for (let n = 1; n < t.length; n++) {
      let s = t[n];
      if (s.from > i.from || s.to < i.to) {
        i = s;
        e = n;
      }
    }
    let n = i instanceof x && i.index < 0 ? null : i.parent;
    let s = t.slice();
    if (n) {
      s[e] = n;
    } else {
      s.splice(e, 1);
    }
    return new T(s, i);
  }
  class T {
    constructor(t, e) {
      this.heads = t;
      this.node = e;
    }
    get next() {
      return A(this.heads);
    }
  }
  class O {
    get name() {
      return this.type.name;
    }
    constructor(t, e = 0) {
      this.mode = e;
      this.buffer = null;
      this.stack = [];
      this.index = 0;
      this.bufferNode = null;
      if (t instanceof x) {
        this.yieldNode(t);
      } else {
        this._tree = t.context.parent;
        this.buffer = t.context;
        for (let e = t._parent; e; e = e._parent) {
          this.stack.unshift(e.index);
        }
        this.bufferNode = t;
        this.yieldBuf(t.index);
      }
    }
    yieldNode(t) {
      return !!t && (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, true);
    }
    yieldBuf(t, e) {
      this.index = t;
      let {
        start: i,
        buffer: n
      } = this.buffer;
      this.type = e || n.set.types[n.buffer[t]];
      this.from = i + n.buffer[t + 1];
      this.to = i + n.buffer[t + 2];
      return true;
    }
    yield(t) {
      return !!t && (t instanceof x ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)));
    }
    toString() {
      if (this.buffer) {
        return this.buffer.buffer.childString(this.index);
      } else {
        return this._tree.toString();
      }
    }
    enterChild(t, e, i) {
      if (!this.buffer) {
        return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
      }
      let {
        buffer: n
      } = this.buffer;
      let s = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
      return !(s < 0) && (this.stack.push(this.index), this.yieldBuf(s));
    }
    firstChild() {
      return this.enterChild(1, 0, 4);
    }
    lastChild() {
      return this.enterChild(-1, 0, 4);
    }
    childAfter(t) {
      return this.enterChild(1, t, 2);
    }
    childBefore(t) {
      return this.enterChild(-1, t, -2);
    }
    enter(t, e, i = this.mode) {
      if (this.buffer) {
        return !(i & n.ExcludeBuffers) && this.enterChild(1, t, e);
      } else {
        return this.yield(this._tree.enter(t, e, i));
      }
    }
    parent() {
      if (!this.buffer) {
        return this.yieldNode(this.mode & n.IncludeAnonymous ? this._tree._parent : this._tree.parent);
      }
      if (this.stack.length) {
        return this.yieldBuf(this.stack.pop());
      }
      let t = this.mode & n.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
      this.buffer = null;
      return this.yieldNode(t);
    }
    sibling(t) {
      if (!this.buffer) {
        return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode));
      }
      let {
        buffer: e
      } = this.buffer;
      let i = this.stack.length - 1;
      if (t < 0) {
        let t = i < 0 ? 0 : this.stack[i] + 4;
        if (this.index != t) {
          return this.yieldBuf(e.findChild(t, this.index, -1, 0, 4));
        }
      } else {
        let t = e.buffer[this.index + 3];
        if (t < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3])) {
          return this.yieldBuf(t);
        }
      }
      return i < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode));
    }
    nextSibling() {
      return this.sibling(1);
    }
    prevSibling() {
      return this.sibling(-1);
    }
    atLastNode(t) {
      let e;
      let i;
      let {
        buffer: s
      } = this;
      if (s) {
        if (t > 0) {
          if (this.index < s.buffer.buffer.length) {
            return false;
          }
        } else {
          for (let t = 0; t < this.index; t++) {
            if (s.buffer.buffer[t + 3] < this.index) {
              return false;
            }
          }
        }
        ({
          index: e,
          parent: i
        } = s);
      } else {
        ({
          index: e,
          _parent: i
        } = this._tree);
      }
      for (; i; {
        index: e,
        _parent: i
      } = i) {
        if (e > -1) {
          for (let s = e + t, r = t < 0 ? -1 : i._tree.children.length; s != r; s += t) {
            let t = i._tree.children[s];
            if (this.mode & n.IncludeAnonymous || t instanceof v || !t.type.isAnonymous || D(t)) {
              return false;
            }
          }
        }
      }
      return true;
    }
    move(t, e) {
      if (e && this.enterChild(t, 0, 4)) {
        return true;
      }
      while (true) {
        if (this.sibling(t)) {
          return true;
        }
        if (this.atLastNode(t) || !this.parent()) {
          return false;
        }
      }
    }
    next(t = true) {
      return this.move(1, t);
    }
    prev(t = true) {
      return this.move(-1, t);
    }
    moveTo(t, e = 0) {
      while ((this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent());
      while (this.enterChild(1, t, e));
      return this;
    }
    get node() {
      if (!this.buffer) {
        return this._tree;
      }
      let t = this.bufferNode;
      let e = null;
      let i = 0;
      if (t && t.context == this.buffer) {
        n: for (let n = this.index, s = this.stack.length; s >= 0;) {
          for (let r = t; r; r = r._parent) {
            if (r.index == n) {
              if (n == this.index) {
                return r;
              }
              e = r;
              i = s + 1;
              break n;
            }
          }
          n = this.stack[--s];
        }
      }
      for (let t = i; t < this.stack.length; t++) {
        e = new M(this.buffer, e, this.stack[t]);
      }
      return this.bufferNode = new M(this.buffer, e, this.index);
    }
    get tree() {
      if (this.buffer) {
        return null;
      } else {
        return this._tree._tree;
      }
    }
    iterate(t, e) {
      for (let i = 0;;) {
        let n = false;
        if (this.type.isAnonymous || t(this) !== false) {
          if (this.firstChild()) {
            i++;
            continue;
          }
          if (!this.type.isAnonymous) {
            n = true;
          }
        }
        while (n && e && e(this), n = this.type.isAnonymous, !this.nextSibling()) {
          if (!i) {
            return;
          }
          this.parent();
          i--;
          n = true;
        }
      }
    }
    matchContext(t) {
      if (!this.buffer) {
        return S(this.node, t);
      }
      let {
        buffer: e
      } = this.buffer;
      let {
        types: i
      } = e.set;
      for (let n = t.length - 1, s = this.stack.length - 1; n >= 0; s--) {
        if (s < 0) {
          return S(this.node, t, n);
        }
        let r = i[e.buffer[this.stack[s]]];
        if (!r.isAnonymous) {
          if (t[n] && t[n] != r.name) {
            return false;
          }
          n--;
        }
      }
      return true;
    }
  }
  function D(t) {
    return t.children.some(t => t instanceof v || !t.type.isAnonymous || D(t));
  }
  let P = new WeakMap();
  function E(t, e) {
    if (!t.isAnonymous || e instanceof v || e.type != t) {
      return 1;
    }
    let i = P.get(e);
    if (i == null) {
      i = 1;
      for (let n of e.children) {
        if (n.type != t || !(n instanceof m)) {
          i = 1;
          break;
        }
        i += E(t, n);
      }
      P.set(e, i);
    }
    return i;
  }
  function R(t, e, i, n, s, r, o, l, a) {
    let h = 0;
    for (let i = n; i < s; i++) {
      h += E(t, e[i]);
    }
    let c = Math.ceil(h * 1.5 / 8);
    let u = [];
    let f = [];
    (function e(i, n, s, o, l) {
      for (let h = s; h < o;) {
        let s = h;
        let d = n[h];
        let p = E(t, i[h]);
        for (h++; h < o; h++) {
          let e = E(t, i[h]);
          if (p + e >= c) {
            break;
          }
          p += e;
        }
        if (h == s + 1) {
          if (p > c) {
            let t = i[s];
            e(t.children, t.positions, 0, t.children.length, n[s] + l);
            continue;
          }
          u.push(i[s]);
        } else {
          let e = n[h - 1] + i[h - 1].length - d;
          u.push(R(t, i, n, s, h, d, e, null, a));
        }
        f.push(d + l - r);
      }
    })(e, i, n, s, 0);
    return (l || a)(u, f, o);
  }
  class L {
    constructor() {
      this.map = new WeakMap();
    }
    setBuffer(t, e, i) {
      let n = this.map.get(t);
      if (!n) {
        this.map.set(t, n = new Map());
      }
      n.set(e, i);
    }
    getBuffer(t, e) {
      let i = this.map.get(t);
      return i && i.get(e);
    }
    set(t, e) {
      if (t instanceof M) {
        this.setBuffer(t.context.buffer, t.index, e);
      } else if (t instanceof x) {
        this.map.set(t.tree, e);
      }
    }
    get(t) {
      if (t instanceof M) {
        return this.getBuffer(t.context.buffer, t.index);
      } else if (t instanceof x) {
        return this.map.get(t.tree);
      } else {
        return undefined;
      }
    }
    cursorSet(t, e) {
      if (t.buffer) {
        this.setBuffer(t.buffer.buffer, t.index, e);
      } else {
        this.map.set(t.tree, e);
      }
    }
    cursorGet(t) {
      if (t.buffer) {
        return this.getBuffer(t.buffer.buffer, t.index);
      } else {
        return this.map.get(t.tree);
      }
    }
  }
  class B {
    constructor(t, e, i, n, s = false, r = false) {
      this.from = t;
      this.to = e;
      this.tree = i;
      this.offset = n;
      this.open = +!!s | !!r * 2;
    }
    get openStart() {
      return (this.open & 1) > 0;
    }
    get openEnd() {
      return (this.open & 2) > 0;
    }
    static addTree(t, e = [], i = false) {
      let n = [new B(0, t.length, t, 0, false, i)];
      for (let i of e) {
        if (i.to > t.length) {
          n.push(i);
        }
      }
      return n;
    }
    static applyChanges(t, e, i = 128) {
      if (!e.length) {
        return t;
      }
      let n = [];
      let s = 1;
      let r = t.length ? t[0] : null;
      for (let o = 0, l = 0, a = 0;; o++) {
        let h = o < e.length ? e[o] : null;
        let c = h ? h.fromA : 1000000000;
        if (c - l >= i) {
          while (r && r.from < c) {
            let e = r;
            if (l >= e.from || c <= e.to || a) {
              let t = Math.max(e.from, l) - a;
              let i = Math.min(e.to, c) - a;
              e = t >= i ? null : new B(t, i, e.tree, e.offset + a, o > 0, !!h);
            }
            if (e) {
              n.push(e);
            }
            if (r.to > c) {
              break;
            }
            r = s < t.length ? t[s++] : null;
          }
        }
        if (!h) {
          break;
        }
        l = h.toA;
        a = h.toA - h.toB;
      }
      return n;
    }
  }
  class I {
    startParse(t, e, i) {
      if (typeof t == "string") {
        t = new N(t);
      }
      i = i ? i.length ? i.map(t => new l(t.from, t.to)) : [new l(0, 0)] : [new l(0, t.length)];
      return this.createParse(t, e || [], i);
    }
    parse(t, e, i) {
      let n = this.startParse(t, e, i);
      while (true) {
        let t = n.advance();
        if (t) {
          return t;
        }
      }
    }
  }
  class N {
    constructor(t) {
      this.string = t;
    }
    get length() {
      return this.string.length;
    }
    chunk(t) {
      return this.string.slice(t);
    }
    get lineChunks() {
      return false;
    }
    read(t, e) {
      return this.string.slice(t, e);
    }
  }
  function V(t) {
    return (e, i, n, s) => new z(e, t, i, n, s);
  }
  class F {
    constructor(t, e, i, n, s) {
      this.parser = t;
      this.parse = e;
      this.overlay = i;
      this.target = n;
      this.from = s;
    }
  }
  function j(t) {
    if (!t.length || t.some(t => t.from >= t.to)) {
      throw RangeError("Invalid inner parse ranges given: " + JSON.stringify(t));
    }
  }
  class H {
    constructor(t, e, i, n, s, r, o) {
      this.parser = t;
      this.predicate = e;
      this.mounts = i;
      this.index = n;
      this.start = s;
      this.target = r;
      this.prev = o;
      this.depth = 0;
      this.ranges = [];
    }
  }
  let W = new a({
    perNode: true
  });
  class z {
    constructor(t, e, i, n, s) {
      this.nest = e;
      this.input = i;
      this.fragments = n;
      this.ranges = s;
      this.inner = [];
      this.innerDone = 0;
      this.baseTree = null;
      this.stoppedAt = null;
      this.baseParse = t;
    }
    advance() {
      if (this.baseParse) {
        let t = this.baseParse.advance();
        if (!t) {
          return null;
        }
        this.baseParse = null;
        this.baseTree = t;
        this.startInner();
        if (this.stoppedAt != null) {
          for (let t of this.inner) {
            t.parse.stopAt(this.stoppedAt);
          }
        }
      }
      if (this.innerDone == this.inner.length) {
        let t = this.baseTree;
        if (this.stoppedAt != null) {
          t = new m(t.type, t.children, t.positions, t.length, t.propValues.concat([[W, this.stoppedAt]]));
        }
        return t;
      }
      let t = this.inner[this.innerDone];
      let e = t.parse.advance();
      if (e) {
        this.innerDone++;
        let i = Object.assign(Object.create(null), t.target.props);
        i[a.mounted.id] = new h(e, t.overlay, t.parser);
        t.target.props = i;
      }
      return null;
    }
    get parsedPos() {
      if (this.baseParse) {
        return 0;
      }
      let t = this.input.length;
      for (let e = this.innerDone; e < this.inner.length; e++) {
        if (this.inner[e].from < t) {
          t = Math.min(t, this.inner[e].parse.parsedPos);
        }
      }
      return t;
    }
    stopAt(t) {
      this.stoppedAt = t;
      if (this.baseParse) {
        this.baseParse.stopAt(t);
      } else {
        for (let e = this.innerDone; e < this.inner.length; e++) {
          this.inner[e].parse.stopAt(t);
        }
      }
    }
    startInner() {
      let t = new J(this.fragments);
      let e = null;
      let i = null;
      let s = new O(new x(this.baseTree, this.ranges[0].from, 0, null), n.IncludeAnonymous | n.IgnoreMounts);
      n: for (let n, r;;) {
        let o = true;
        let a;
        if (this.stoppedAt != null && s.from >= this.stoppedAt) {
          o = false;
        } else if (t.hasNode(s)) {
          if (e) {
            let t = e.mounts.find(t => t.frag.from <= s.from && t.frag.to >= s.to && t.mount.overlay);
            if (t) {
              for (let i of t.mount.overlay) {
                let n = i.from + t.pos;
                let r = i.to + t.pos;
                if (n >= s.from && r <= s.to && !e.ranges.some(t => t.from < r && t.to > n)) {
                  e.ranges.push({
                    from: n,
                    to: r
                  });
                }
              }
            }
          }
          o = false;
        } else if (i && (r = function (t, e, i) {
          for (let n of t) {
            if (n.from >= i) {
              break;
            }
            if (n.to > e) {
              if (n.from <= e && n.to >= i) {
                return 2;
              } else {
                return 1;
              }
            }
          }
          return 0;
        }(i.ranges, s.from, s.to))) {
          o = r != 2;
        } else if (!s.type.isAnonymous && (n = this.nest(s, this.input)) && (s.from < s.to || !n.overlay)) {
          if (!s.tree) {
            (function (t) {
              let {
                node: e
              } = t;
              let i = [];
              let n = e.context.buffer;
              do {
                i.push(t.index);
                t.parent();
              } while (!t.tree);
              let s = t.tree;
              let r = s.children.indexOf(n);
              let o = s.children[r];
              let l = o.buffer;
              let a = [r];
              s.children[r] = function t(n, s, r, h, c, u) {
                let f = i[u];
                let d = [];
                let p = [];
                q(o, n, f, d, p, h);
                let g = l[f + 1];
                let v = l[f + 2];
                a.push(d.length);
                let b = u ? t(f + 4, l[f + 3], o.set.types[l[f]], g, v - g, u - 1) : e.toTree();
                d.push(b);
                p.push(g - h);
                q(o, l[f + 3], s, d, p, h);
                return new m(r, d, p, c);
              }(0, l.length, u.none, 0, o.length, i.length - 1);
              for (let n of a) {
                let e = t.tree.children[n];
                let i = t.tree.positions[n];
                t.yield(new x(e, i + t.from, n, t._tree));
              }
            })(s);
          }
          let r = t.findMounts(s.from, n.parser);
          if (typeof n.overlay == "function") {
            e = new H(n.parser, n.overlay, r, this.inner.length, s.from, s.tree, e);
          } else {
            let t = _(this.ranges, n.overlay || (s.from < s.to ? [new l(s.from, s.to)] : []));
            if (t.length) {
              j(t);
            }
            if (t.length || !n.overlay) {
              this.inner.push(new F(n.parser, t.length ? n.parser.startParse(this.input, K(r, t), t) : n.parser.startParse(""), n.overlay ? n.overlay.map(t => new l(t.from - s.from, t.to - s.from)) : null, s.tree, t.length ? t[0].from : s.from));
            }
            if (n.overlay) {
              if (t.length) {
                i = {
                  ranges: t,
                  depth: 0,
                  prev: i
                };
              }
            } else {
              o = false;
            }
          }
        } else if (e && (a = e.predicate(s))) {
          if (a === true) {
            a = new l(s.from, s.to);
          }
          if (a.from < a.to) {
            e.ranges.push(a);
          }
        }
        if (o && s.firstChild()) {
          if (e) {
            e.depth++;
          }
          if (i) {
            i.depth++;
          }
        } else {
          while (!s.nextSibling()) {
            if (!s.parent()) {
              break n;
            }
            if (e && ! --e.depth) {
              let t = _(this.ranges, e.ranges);
              if (t.length) {
                j(t);
                this.inner.splice(e.index, 0, new F(e.parser, e.parser.startParse(this.input, K(e.mounts, t), t), e.ranges.map(t => new l(t.from - e.start, t.to - e.start)), e.target, t[0].from));
              }
              e = e.prev;
            }
            if (!!i && ! --i.depth) {
              i = i.prev;
            }
          }
        }
      }
    }
  }
  function q(t, e, i, n, s, r) {
    if (e < i) {
      let o = t.buffer[e + 1];
      n.push(t.slice(e, i, o));
      s.push(o - r);
    }
  }
  class $ {
    constructor(t, e) {
      this.offset = e;
      this.done = false;
      this.cursor = t.cursor(n.IncludeAnonymous | n.IgnoreMounts);
    }
    moveTo(t) {
      let {
        cursor: e
      } = this;
      let i = t - this.offset;
      while (!this.done && e.from < i) {
        if ((!(e.to >= t) || !e.enter(i, 1, n.IgnoreOverlays | n.ExcludeBuffers)) && !e.next(false)) {
          this.done = true;
        }
      }
    }
    hasNode(t) {
      this.moveTo(t.from);
      if (!this.done && this.cursor.from + this.offset == t.from && this.cursor.tree) {
        for (let e = this.cursor.tree;;) {
          if (e == t.tree) {
            return true;
          }
          if (e.children.length && e.positions[0] == 0 && e.children[0] instanceof m) {
            e = e.children[0];
          } else {
            break;
          }
        }
      }
      return false;
    }
  }
  class J {
    constructor(t) {
      this.fragments = t;
      this.curTo = 0;
      this.fragI = 0;
      if (t.length) {
        let i = this.curFrag = t[0];
        this.curTo = i.tree.prop(W) ?? i.to;
        this.inner = new $(i.tree, -i.offset);
      } else {
        this.curFrag = this.inner = null;
      }
    }
    hasNode(t) {
      while (this.curFrag && t.from >= this.curTo) {
        this.nextFrag();
      }
      return this.curFrag && this.curFrag.from <= t.from && this.curTo >= t.to && this.inner.hasNode(t);
    }
    nextFrag() {
      this.fragI++;
      if (this.fragI == this.fragments.length) {
        this.curFrag = this.inner = null;
      } else {
        let e = this.curFrag = this.fragments[this.fragI];
        this.curTo = e.tree.prop(W) ?? e.to;
        this.inner = new $(e.tree, -e.offset);
      }
    }
    findMounts(t, e) {
      var i;
      let n = [];
      if (this.inner) {
        this.inner.cursor.moveTo(t, 1);
        for (let t = this.inner.cursor.node; t; t = t.parent) {
          let s = (i = t.tree) === null || i === undefined ? undefined : i.prop(a.mounted);
          if (s && s.parser == e) {
            for (let e = this.fragI; e < this.fragments.length; e++) {
              let i = this.fragments[e];
              if (i.from >= t.to) {
                break;
              }
              if (i.tree == this.curFrag.tree) {
                n.push({
                  frag: i,
                  pos: t.from - i.offset,
                  mount: s
                });
              }
            }
          }
        }
      }
      return n;
    }
  }
  function _(t, e) {
    let i = null;
    let n = e;
    for (let s = 1, r = 0; s < t.length; s++) {
      let o = t[s - 1].to;
      let a = t[s].from;
      for (; r < n.length; r++) {
        let t = n[r];
        if (t.from >= a) {
          break;
        }
        if (!(t.to <= o)) {
          if (!i) {
            n = i = e.slice();
          }
          if (t.from < o) {
            i[r] = new l(t.from, o);
            if (t.to > a) {
              i.splice(r + 1, 0, new l(a, t.to));
            }
          } else if (t.to > a) {
            i[r--] = new l(a, t.to);
          } else {
            i.splice(r--, 1);
          }
        }
      }
    }
    return n;
  }
  function K(t, e) {
    let i = [];
    for (let {
      pos: n,
      mount: s,
      frag: r
    } of t) {
      let t = n + (s.overlay ? s.overlay[0].from : 0);
      let o = t + s.tree.length;
      let a = Math.max(r.from, t);
      let h = Math.min(r.to, o);
      if (s.overlay) {
        let o = function (t, e, i, n) {
          let s = 0;
          let r = 0;
          let o = false;
          let a = false;
          let h = -1000000000;
          let c = [];
          while (true) {
            let u = s == t.length ? 1000000000 : o ? t[s].to : t[s].from;
            let f = r == e.length ? 1000000000 : a ? e[r].to : e[r].from;
            if (o != a) {
              let t = Math.max(h, i);
              let e = Math.min(u, f, n);
              if (t < e) {
                c.push(new l(t, e));
              }
            }
            if ((h = Math.min(u, f)) == 1000000000) {
              break;
            }
            if (u == h) {
              if (o) {
                o = false;
                s++;
              } else {
                o = true;
              }
            }
            if (f == h) {
              if (a) {
                a = false;
                r++;
              } else {
                a = true;
              }
            }
          }
          return c;
        }(e, s.overlay.map(t => new l(t.from + n, t.to + n)), a, h);
        for (let e = 0, n = a;; e++) {
          let l = e == o.length;
          let a = l ? h : o[e].from;
          if (a > n) {
            i.push(new B(n, a, s.tree, -t, r.from >= n || r.openStart, r.to <= a || r.openEnd));
          }
          if (l) {
            break;
          }
          n = o[e].to;
        }
      } else {
        i.push(new B(a, h, s.tree, -t, r.from >= t || r.openStart, r.to <= o || r.openEnd));
      }
    }
    return i;
  }
  require.d(exports, {
    createNestedParse: function () {
      return V;
    },
    NodeType: function () {
      return u;
    },
    maxBufferLength: function () {
      return r;
    },
    NodeTypeSet: function () {
      return f;
    },
    Parser: function () {
      return I;
    },
    BufferCache: function () {
      return L;
    },
    ParseRange: function () {
      return B;
    },
    NodeTypeProp: function () {
      return a;
    },
    Tree: function () {
      return m;
    },
    IterMode: function () {
      return n;
    }
  });
}