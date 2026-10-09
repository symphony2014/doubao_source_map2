// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gv' to 'defineHighlighter'
// - Renamed export 'QR' to 'createHighlighter'
// - Renamed export 'Vp' to 'SyntaxTag'
// - Renamed export 'bW' to 'highlightCode'
// - Renamed export 'pJ' to 'defaultTags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 852622
         */
module.exports = function (module, exports, require) {
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  let s = 0;
  class r {
    constructor(t, e, i, n) {
      this.name = t;
      this.set = e;
      this.base = i;
      this.modified = n;
      this.id = s++;
    }
    toString() {
      let {
        name: t
      } = this;
      for (let e of this.modified) {
        if (e.name) {
          t = `${e.name}(${t})`;
        }
      }
      return t;
    }
    static define(t, e) {
      if (t instanceof r) {
        e = t;
      }
      if (e == null ? undefined : e.base) {
        throw Error("Can not derive from a modified tag");
      }
      let i = new r(typeof t == "string" ? t : "?", [], null, []);
      i.set.push(i);
      if (e) {
        for (let t of e.set) {
          i.set.push(t);
        }
      }
      return i;
    }
    static defineModifier(t) {
      let e = new l(t);
      return t => t.modified.indexOf(e) > -1 ? t : l.get(t.base || t, t.modified.concat(e).sort((t, e) => t.id - e.id));
    }
  }
  let o = 0;
  class l {
    constructor(t) {
      this.name = t;
      this.instances = [];
      this.id = o++;
    }
    static get(t, e) {
      if (!e.length) {
        return t;
      }
      let i = e[0].instances.find(i => {
        var n;
        var s;
        return i.base == t && (n = e, s = i.modified, n.length == s.length && n.every((t, e) => t == s[e]));
      });
      if (i) {
        return i;
      }
      let n = [];
      let s = new r(t.name, n, t, e);
      for (let t of e) {
        t.instances.push(s);
      }
      let o = function (t) {
        let e = [[]];
        for (let i = 0; i < t.length; i++) {
          for (let n = 0, s = e.length; n < s; n++) {
            e.push(e[n].concat(t[i]));
          }
        }
        return e.sort((t, e) => e.length - t.length);
      }(e);
      for (let e of t.set) {
        if (!e.modified.length) {
          for (let t of o) {
            n.push(l.get(e, t));
          }
        }
      }
      return s;
    }
  }
  function a(t) {
    let e = Object.create(null);
    for (let i in t) {
      let n = t[i];
      if (!Array.isArray(n)) {
        n = [n];
      }
      for (let t of i.split(" ")) {
        if (t) {
          let i = [];
          let s = 2;
          let r = t;
          for (let e = 0;;) {
            if (r == "..." && e > 0 && e + 3 == t.length) {
              s = 1;
              break;
            }
            let n = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(r);
            if (!n) {
              throw RangeError("Invalid path: " + t);
            }
            i.push(n[0] == "*" ? "" : n[0][0] == "\"" ? JSON.parse(n[0]) : n[0]);
            if ((e += n[0].length) == t.length) {
              break;
            }
            let o = t[e++];
            if (e == t.length && o == "!") {
              s = 0;
              break;
            }
            if (o != "/") {
              throw RangeError("Invalid path: " + t);
            }
            r = t.slice(e);
          }
          let o = i.length - 1;
          let l = i[o];
          if (!l) {
            throw RangeError("Invalid path: " + t);
          }
          let a = new c(n, s, o > 0 ? i.slice(0, o) : null);
          e[l] = a.sort(e[l]);
        }
      }
    }
    return h.add(e);
  }
  let h = new syntaxTreeCore.NodeTypeProp();
  class c {
    constructor(t, e, i, n) {
      this.tags = t;
      this.mode = e;
      this.context = i;
      this.next = n;
    }
    get opaque() {
      return this.mode == 0;
    }
    get inherit() {
      return this.mode == 1;
    }
    sort(t) {
      if (!t || t.depth < this.depth) {
        this.next = t;
        return this;
      } else {
        t.next = this.sort(t.next);
        return t;
      }
    }
    get depth() {
      if (this.context) {
        return this.context.length;
      } else {
        return 0;
      }
    }
  }
  function u(t, e) {
    let i = Object.create(null);
    for (let e of t) {
      if (Array.isArray(e.tag)) {
        for (let t of e.tag) {
          i[t.id] = e.class;
        }
      } else {
        i[e.tag.id] = e.class;
      }
    }
    let {
      scope: n,
      all: s = null
    } = e || {};
    return {
      style: t => {
        let e = s;
        for (let n of t) {
          for (let t of n.set) {
            let n = i[t.id];
            if (n) {
              e = e ? e + " " + n : n;
              break;
            }
          }
        }
        return e;
      },
      scope: n
    };
  }
  function f(t, e, i, n = 0, s = t.length) {
    let r = new d(n, Array.isArray(e) ? e : [e], i);
    r.highlightRange(t.cursor(), n, s, "", r.highlighters);
    r.flush(s);
  }
  c.empty = new c([], 2, null);
  class d {
    constructor(t, e, i) {
      this.at = t;
      this.highlighters = e;
      this.span = i;
      this.class = "";
    }
    startSpan(t, e) {
      if (e != this.class) {
        this.flush(t);
        if (t > this.at) {
          this.at = t;
        }
        this.class = e;
      }
    }
    flush(t) {
      if (t > this.at && this.class) {
        this.span(this.at, t, this.class);
      }
    }
    highlightRange(t, e, i, s, r) {
      let {
        type: o,
        from: l,
        to: a
      } = t;
      if (l >= i || a <= e) {
        return;
      }
      if (o.isTop) {
        r = this.highlighters.filter(t => !t.scope || t.scope(o));
      }
      let u = s;
      let f = function (t) {
        let e = t.type.prop(h);
        while (e && e.context && !t.matchContext(e.context)) {
          e = e.next;
        }
        return e || null;
      }(t) || c.empty;
      let d = function (t, e) {
        let i = null;
        for (let n of t) {
          let t = n.style(e);
          if (t) {
            i = i ? i + " " + t : t;
          }
        }
        return i;
      }(r, f.tags);
      if (d) {
        if (u) {
          u += " ";
        }
        u += d;
        if (f.mode == 1) {
          s += (s ? " " : "") + d;
        }
      }
      this.startSpan(Math.max(e, l), u);
      if (f.opaque) {
        return;
      }
      let p = t.tree && t.tree.prop(syntaxTreeCore.NodeTypeProp.mounted);
      if (p && p.overlay) {
        let n = t.node.enter(p.overlay[0].from + l, 1);
        let o = this.highlighters.filter(t => !t.scope || t.scope(p.tree.type));
        let h = t.firstChild();
        for (let c = 0, f = l;; c++) {
          let d = c < p.overlay.length ? p.overlay[c] : null;
          let m = d ? d.from + l : a;
          let g = Math.max(e, f);
          let v = Math.min(i, m);
          if (g < v && h) {
            while (t.from < v && (this.highlightRange(t, g, v, s, r), this.startSpan(Math.min(v, t.to), u), !(t.to >= m) && t.nextSibling()));
          }
          if (!d || m > i) {
            break;
          }
          if ((f = d.to + l) > e) {
            this.highlightRange(n.cursor(), Math.max(e, d.from + l), Math.min(i, f), "", o);
            this.startSpan(Math.min(i, f), u);
          }
        }
        if (h) {
          t.parent();
        }
      } else if (t.firstChild()) {
        if (p) {
          s = "";
        }
        do {
          if (t.to <= e) {
            continue;
          }
          if (t.from >= i) {
            break;
          }
          this.highlightRange(t, e, i, s, r);
          this.startSpan(Math.min(i, t.to), u);
        } while (t.nextSibling());
        t.parent();
      }
    }
  }
  let p = r.define;
  let m = p();
  let g = p();
  let v = p(g);
  let b = p(g);
  let w = p();
  let y = p(w);
  let x = p(w);
  let k = p();
  let S = p(k);
  let C = p();
  let M = p();
  let A = p();
  let T = p(A);
  let O = p();
  let D = {
    comment: m,
    lineComment: p(m),
    blockComment: p(m),
    docComment: p(m),
    name: g,
    variableName: p(g),
    typeName: v,
    tagName: p(v),
    propertyName: b,
    attributeName: p(b),
    className: p(g),
    labelName: p(g),
    namespace: p(g),
    macroName: p(g),
    literal: w,
    string: y,
    docString: p(y),
    character: p(y),
    attributeValue: p(y),
    number: x,
    integer: p(x),
    float: p(x),
    bool: p(w),
    regexp: p(w),
    escape: p(w),
    color: p(w),
    url: p(w),
    keyword: C,
    self: p(C),
    null: p(C),
    atom: p(C),
    unit: p(C),
    modifier: p(C),
    operatorKeyword: p(C),
    controlKeyword: p(C),
    definitionKeyword: p(C),
    moduleKeyword: p(C),
    operator: M,
    derefOperator: p(M),
    arithmeticOperator: p(M),
    logicOperator: p(M),
    bitwiseOperator: p(M),
    compareOperator: p(M),
    updateOperator: p(M),
    definitionOperator: p(M),
    typeOperator: p(M),
    controlOperator: p(M),
    punctuation: A,
    separator: p(A),
    bracket: T,
    angleBracket: p(T),
    squareBracket: p(T),
    paren: p(T),
    brace: p(T),
    content: k,
    heading: S,
    heading1: p(S),
    heading2: p(S),
    heading3: p(S),
    heading4: p(S),
    heading5: p(S),
    heading6: p(S),
    contentSeparator: p(k),
    list: p(k),
    quote: p(k),
    emphasis: p(k),
    strong: p(k),
    link: p(k),
    monospace: p(k),
    strikethrough: p(k),
    inserted: p(),
    deleted: p(),
    changed: p(),
    invalid: p(),
    meta: O,
    documentMeta: p(O),
    annotation: p(O),
    processingInstruction: p(O),
    definition: r.defineModifier("definition"),
    constant: r.defineModifier("constant"),
    function: r.defineModifier("function"),
    standard: r.defineModifier("standard"),
    local: r.defineModifier("local"),
    special: r.defineModifier("special")
  };
  for (let t in D) {
    let e = D[t];
    if (e instanceof r) {
      e.name = t;
    }
  }
  u([{
    tag: D.link,
    class: "tok-link"
  }, {
    tag: D.heading,
    class: "tok-heading"
  }, {
    tag: D.emphasis,
    class: "tok-emphasis"
  }, {
    tag: D.strong,
    class: "tok-strong"
  }, {
    tag: D.keyword,
    class: "tok-keyword"
  }, {
    tag: D.atom,
    class: "tok-atom"
  }, {
    tag: D.bool,
    class: "tok-bool"
  }, {
    tag: D.url,
    class: "tok-url"
  }, {
    tag: D.labelName,
    class: "tok-labelName"
  }, {
    tag: D.inserted,
    class: "tok-inserted"
  }, {
    tag: D.deleted,
    class: "tok-deleted"
  }, {
    tag: D.literal,
    class: "tok-literal"
  }, {
    tag: D.string,
    class: "tok-string"
  }, {
    tag: D.number,
    class: "tok-number"
  }, {
    tag: [D.regexp, D.escape, D.special(D.string)],
    class: "tok-string2"
  }, {
    tag: D.variableName,
    class: "tok-variableName"
  }, {
    tag: D.local(D.variableName),
    class: "tok-variableName tok-local"
  }, {
    tag: D.definition(D.variableName),
    class: "tok-variableName tok-definition"
  }, {
    tag: D.special(D.variableName),
    class: "tok-variableName2"
  }, {
    tag: D.definition(D.propertyName),
    class: "tok-propertyName tok-definition"
  }, {
    tag: D.typeName,
    class: "tok-typeName"
  }, {
    tag: D.namespace,
    class: "tok-namespace"
  }, {
    tag: D.className,
    class: "tok-className"
  }, {
    tag: D.macroName,
    class: "tok-macroName"
  }, {
    tag: D.propertyName,
    class: "tok-propertyName"
  }, {
    tag: D.operator,
    class: "tok-operator"
  }, {
    tag: D.comment,
    class: "tok-comment"
  }, {
    tag: D.meta,
    class: "tok-meta"
  }, {
    tag: D.invalid,
    class: "tok-invalid"
  }, {
    tag: D.punctuation,
    class: "tok-punctuation"
  }]);
  require.d(exports, {
    defineHighlighter: function () {
      return a;
    },
    createHighlighter: function () {
      return u;
    },
    SyntaxTag: function () {
      return r;
    },
    highlightCode: function () {
      return f;
    },
    defaultTags: function () {
      return D;
    }
  });
}