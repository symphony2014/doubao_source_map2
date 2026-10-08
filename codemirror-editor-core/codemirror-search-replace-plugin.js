// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FH' to 'SearchIterator'
// - Renamed export 'Jb' to 'SearchQuery'
// - Renamed export 'K9' to 'replaceNextMatch'
// - Renamed export 'Lp' to 'searchKeyBindings'
// - Renamed export 'N$' to 'closeSearch'
// - Renamed export 'a7' to 'selectPrevMatch'
// - Renamed export 'g' to 'selectNextMatch'
// - Renamed export 'nx' to 'openSearch'
// - Renamed export 'ql' to 'searchEffectType'
// - Renamed export 'sW' to 'getSearchConfig'
// - Renamed export 'uP' to 'getQuery'
// - Renamed export 'yC' to 'searchPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 862867
         */
module.exports = function (module, exports, require) {
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var domElementCreator = require("dom-element-creator") /*id: 476723*/;
  let o = typeof String.prototype.normalize == "function" ? t => t.normalize("NFKD") : t => t;
  class l {
    constructor(t, e, i = 0, n = t.length, s, r) {
      this.test = r;
      this.value = {
        from: 0,
        to: 0
      };
      this.done = false;
      this.matches = [];
      this.buffer = "";
      this.bufferPos = 0;
      this.iter = t.iterRange(i, n);
      this.bufferStart = i;
      this.normalize = s ? t => s(o(t)) : o;
      this.query = this.normalize(e);
    }
    peek() {
      if (this.bufferPos == this.buffer.length) {
        this.bufferStart += this.buffer.length;
        this.iter.next();
        if (this.iter.done) {
          return -1;
        }
        this.bufferPos = 0;
        this.buffer = this.iter.value;
      }
      return codemirrorStateCore.charCodeAt(this.buffer, this.bufferPos);
    }
    next() {
      while (this.matches.length) {
        this.matches.pop();
      }
      return this.nextOverlapping();
    }
    nextOverlapping() {
      while (true) {
        let t = this.peek();
        if (t < 0) {
          this.done = true;
          return this;
        }
        let e = codemirrorStateCore.fromCharCode(t);
        let i = this.bufferStart + this.bufferPos;
        this.bufferPos += codemirrorStateCore.charLength(t);
        let n = this.normalize(e);
        if (n.length) {
          for (let t = 0, s = i;; t++) {
            let r = n.charCodeAt(t);
            let o = this.match(r, s, this.bufferPos + this.bufferStart);
            if (t == n.length - 1) {
              if (o) {
                this.value = o;
                return this;
              }
              break;
            }
            if (s == i && t < e.length && e.charCodeAt(t) == r) {
              s++;
            }
          }
        }
      }
    }
    match(t, e, i) {
      let n = null;
      for (let e = 0; e < this.matches.length; e += 2) {
        let s = this.matches[e];
        let r = false;
        if (this.query.charCodeAt(s) == t) {
          if (s == this.query.length - 1) {
            n = {
              from: this.matches[e + 1],
              to: i
            };
          } else {
            this.matches[e]++;
            r = true;
          }
        }
        if (!r) {
          this.matches.splice(e, 2);
          e -= 2;
        }
      }
      if (this.query.charCodeAt(0) == t) {
        if (this.query.length == 1) {
          n = {
            from: e,
            to: i
          };
        } else {
          this.matches.push(1, e);
        }
      }
      if (n && this.test && !this.test(n.from, n.to, this.buffer, this.bufferStart)) {
        n = null;
      }
      return n;
    }
  }
  if (typeof Symbol != "undefined") {
    l.prototype[Symbol.iterator] = function () {
      return this;
    };
  }
  let a = {
    from: -1,
    to: -1,
    match: /.*/.exec("")
  };
  let h = "gm" + (/x/.unicode == null ? "" : "u");
  class c {
    constructor(t, e, i, n = 0, s = t.length) {
      this.text = t;
      this.to = s;
      this.curLine = "";
      this.done = false;
      this.value = a;
      if (/\\[sWDnr]|\n|\r|\[\^/.test(e)) {
        return new d(t, e, i, n, s);
      }
      this.re = new RegExp(e, h + ((i == null ? undefined : i.ignoreCase) ? "i" : ""));
      this.test = i == null ? undefined : i.test;
      this.iter = t.iter();
      let r = t.lineAt(n);
      this.curLineStart = r.from;
      this.matchPos = p(t, n);
      this.getLine(this.curLineStart);
    }
    getLine(t) {
      this.iter.next(t);
      if (this.iter.lineBreak) {
        this.curLine = "";
      } else {
        this.curLine = this.iter.value;
        if (this.curLineStart + this.curLine.length > this.to) {
          this.curLine = this.curLine.slice(0, this.to - this.curLineStart);
        }
        this.iter.next();
      }
    }
    nextLine() {
      this.curLineStart = this.curLineStart + this.curLine.length + 1;
      if (this.curLineStart > this.to) {
        this.curLine = "";
      } else {
        this.getLine(0);
      }
    }
    next() {
      for (let t = this.matchPos - this.curLineStart;;) {
        this.re.lastIndex = t;
        let e = this.matchPos <= this.to && this.re.exec(this.curLine);
        if (e) {
          let i = this.curLineStart + e.index;
          let n = i + e[0].length;
          this.matchPos = p(this.text, n + +(i == n));
          if (i == this.curLineStart + this.curLine.length) {
            this.nextLine();
          }
          if ((i < n || i > this.value.to) && (!this.test || this.test(i, n, e))) {
            this.value = {
              from: i,
              to: n,
              match: e
            };
            return this;
          }
          t = this.matchPos - this.curLineStart;
        } else {
          if (!(this.curLineStart + this.curLine.length < this.to)) {
            this.done = true;
            return this;
          }
          this.nextLine();
          t = 0;
        }
      }
    }
  }
  let u = new WeakMap();
  class f {
    constructor(t, e) {
      this.from = t;
      this.text = e;
    }
    get to() {
      return this.from + this.text.length;
    }
    static get(t, e, i) {
      let n = u.get(t);
      if (!n || n.from >= i || n.to <= e) {
        let n = new f(e, t.sliceString(e, i));
        u.set(t, n);
        return n;
      }
      if (n.from == e && n.to == i) {
        return n;
      }
      let {
        text: s,
        from: r
      } = n;
      if (r > e) {
        s = t.sliceString(e, r) + s;
        r = e;
      }
      if (n.to < i) {
        s += t.sliceString(n.to, i);
      }
      u.set(t, new f(r, s));
      return new f(e, s.slice(e - r, i - r));
    }
  }
  class d {
    constructor(t, e, i, n, s) {
      this.text = t;
      this.to = s;
      this.done = false;
      this.value = a;
      this.matchPos = p(t, n);
      this.re = new RegExp(e, h + ((i == null ? undefined : i.ignoreCase) ? "i" : ""));
      this.test = i == null ? undefined : i.test;
      this.flat = f.get(t, n, this.chunkEnd(n + 5000));
    }
    chunkEnd(t) {
      if (t >= this.to) {
        return this.to;
      } else {
        return this.text.lineAt(t).to;
      }
    }
    next() {
      while (true) {
        let t = this.re.lastIndex = this.matchPos - this.flat.from;
        let e = this.re.exec(this.flat.text);
        if (e && !e[0] && e.index == t) {
          this.re.lastIndex = t + 1;
          e = this.re.exec(this.flat.text);
        }
        if (e) {
          let t = this.flat.from + e.index;
          let i = t + e[0].length;
          if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(t, i, e))) {
            this.value = {
              from: t,
              to: i,
              match: e
            };
            this.matchPos = p(this.text, i + +(t == i));
            return this;
          }
        }
        if (this.flat.to == this.to) {
          this.done = true;
          return this;
        }
        this.flat = f.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
      }
    }
  }
  function p(t, e) {
    if (e >= t.length) {
      return e;
    }
    let i = t.lineAt(e);
    let n;
    while (e < i.to && (n = i.text.charCodeAt(e - i.from)) >= 56320 && n < 57344) {
      e++;
    }
    return e;
  }
  function m(t) {
    let e = String(t.state.doc.lineAt(t.state.selection.main.head).number);
    let i = domElementCreator.createDomElement("input", {
      class: "cm-textfield",
      name: "line",
      value: e
    });
    function o() {
      let e = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(i.value);
      if (!e) {
        return;
      }
      let {
        state: r
      } = t;
      let o = r.doc.lineAt(r.selection.main.head);
      let [, l, a, h, c] = e;
      let u = h ? +h.slice(1) : 0;
      let f = a ? +a : o.number;
      if (a && c) {
        let t = f / 100;
        if (l) {
          t = t * (l == "-" ? -1 : 1) + o.number / r.doc.lines;
        }
        f = Math.round(r.doc.lines * t);
      } else if (a && l) {
        f = f * (l == "-" ? -1 : 1) + o.number;
      }
      let d = r.doc.line(Math.max(1, Math.min(r.doc.lines, f)));
      let p = codemirrorStateCore.EditorSelection.cursor(d.from + Math.max(0, Math.min(u, d.length)));
      t.dispatch({
        effects: [g.of(false), codemirrorEditorViewCore.EditorView.scrollIntoView(p.from, {
          y: "center"
        })],
        selection: p
      });
      t.focus();
    }
    return {
      dom: domElementCreator.createDomElement("form", {
        class: "cm-gotoLine",
        onkeydown: e => {
          if (e.keyCode == 27) {
            e.preventDefault();
            t.dispatch({
              effects: g.of(false)
            });
            t.focus();
          } else if (e.keyCode == 13) {
            e.preventDefault();
            o();
          }
        },
        onsubmit: t => {
          t.preventDefault();
          o();
        }
      }, domElementCreator.createDomElement("label", t.state.phrase("Go to line"), ": ", i), " ", domElementCreator.createDomElement("button", {
        class: "cm-button",
        type: "submit"
      }, t.state.phrase("go")), domElementCreator.createDomElement("button", {
        name: "close",
        onclick: () => {
          t.dispatch({
            effects: g.of(false)
          });
          t.focus();
        },
        "aria-label": t.state.phrase("close"),
        type: "button"
      }, ["×"]))
    };
  }
  if (typeof Symbol != "undefined") {
    c.prototype[Symbol.iterator] = d.prototype[Symbol.iterator] = function () {
      return this;
    };
  }
  let g = codemirrorStateCore.EffectType.define();
  let v = codemirrorStateCore.PrecLevels.define({
    create: () => true,
    update(t, e) {
      for (let i of e.effects) {
        if (i.is(g)) {
          t = i.value;
        }
      }
      return t;
    },
    provide: t => codemirrorEditorViewCore.panelsFacet.from(t, t => t ? m : null)
  });
  let b = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-panel.cm-gotoLine": {
      padding: "2px 6px 4px",
      position: "relative",
      "& label": {
        fontSize: "80%"
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: "0"
      }
    }
  });
  let w = {
    highlightWordAroundCursor: false,
    minSelectionLength: 1,
    maxMatches: 100,
    wholeWords: false
  };
  let y = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, w, {
      highlightWordAroundCursor: (t, e) => t || e,
      minSelectionLength: Math.min,
      maxMatches: Math.min
    })
  });
  function x(t) {
    let e = [A, M];
    if (t) {
      e.push(y.of(t));
    }
    return e;
  }
  let k = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-selectionMatch"
  });
  let S = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-selectionMatch cm-selectionMatch-main"
  });
  function C(t, e, i, n) {
    return (i == 0 || t(e.sliceDoc(i - 1, i)) != codemirrorStateCore.CharType.Word) && (n == e.doc.length || t(e.sliceDoc(n, n + 1)) != codemirrorStateCore.CharType.Word);
  }
  let M = codemirrorEditorViewCore.Plugin.fromClass(class {
    constructor(t) {
      this.decorations = this.getDeco(t);
    }
    update(t) {
      if (t.selectionSet || t.docChanged || t.viewportChanged) {
        this.decorations = this.getDeco(t.view);
      }
    }
    getDeco(t) {
      let e = t.state.facet(y);
      let {
        state: i
      } = t;
      let r = i.selection;
      if (r.ranges.length > 1) {
        return codemirrorEditorViewCore.decorationClass.none;
      }
      let o = r.main;
      let a;
      let h = null;
      if (o.empty) {
        if (!e.highlightWordAroundCursor) {
          return codemirrorEditorViewCore.decorationClass.none;
        }
        let t = i.wordAt(o.head);
        if (!t) {
          return codemirrorEditorViewCore.decorationClass.none;
        }
        h = i.charCategorizer(o.head);
        a = i.sliceDoc(t.from, t.to);
      } else {
        let t = o.to - o.from;
        if (t < e.minSelectionLength || t > 200) {
          return codemirrorEditorViewCore.decorationClass.none;
        }
        if (e.wholeWords) {
          var c;
          var u;
          var f;
          a = i.sliceDoc(o.from, o.to);
          if (!C(h = i.charCategorizer(o.head), i, o.from, o.to) || !(c = h, u = o.from, f = o.to, c(i.sliceDoc(u, u + 1)) == codemirrorStateCore.CharType.Word && c(i.sliceDoc(f - 1, f)) == codemirrorStateCore.CharType.Word)) {
            return codemirrorEditorViewCore.decorationClass.none;
          }
        } else if (!(a = i.sliceDoc(o.from, o.to))) {
          return codemirrorEditorViewCore.decorationClass.none;
        }
      }
      let d = [];
      for (let s of t.visibleRanges) {
        let t = new l(i.doc, a, s.from, s.to);
        while (!t.next().done) {
          let {
            from: s,
            to: r
          } = t.value;
          if ((!h || C(h, i, s, r)) && (o.empty && s <= o.from && r >= o.to ? d.push(S.range(s, r)) : (s >= o.to || r <= o.from) && d.push(k.range(s, r)), d.length > e.maxMatches)) {
            return codemirrorEditorViewCore.decorationClass.none;
          }
        }
      }
      return codemirrorEditorViewCore.decorationClass.set(d);
    }
  }, {
    decorations: t => t.decorations
  });
  let A = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-selectionMatch": {
      backgroundColor: "#99ff7780"
    },
    ".cm-searchMatch .cm-selectionMatch": {
      backgroundColor: "transparent"
    }
  });
  let T = ({
    state: t,
    dispatch: e
  }) => {
    let {
      selection: i
    } = t;
    let n = codemirrorStateCore.EditorSelection.create(i.ranges.map(e => t.wordAt(e.head) || codemirrorStateCore.EditorSelection.cursor(e.head)), i.mainIndex);
    return !n.eq(i) && (e(t.update({
      selection: n
    })), true);
  };
  let O = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      top: false,
      caseSensitive: false,
      literal: false,
      regexp: false,
      wholeWord: false,
      createPanel: t => new tr(t),
      scrollToMatch: t => codemirrorEditorViewCore.EditorView.scrollIntoView(t)
    })
  });
  function D(t) {
    if (t) {
      return [O.of(t), tc];
    } else {
      return tc;
    }
  }
  class P {
    constructor(t) {
      this.search = t.search;
      this.caseSensitive = !!t.caseSensitive;
      this.literal = !!t.literal;
      this.regexp = !!t.regexp;
      this.replace = t.replace || "";
      this.valid = !!this.search && (!this.regexp || function (t) {
        try {
          new RegExp(t, h);
          return true;
        } catch (t) {
          return false;
        }
      }(this.search));
      this.unquoted = this.unquote(this.search);
      this.wholeWord = !!t.wholeWord;
    }
    unquote(t) {
      if (this.literal) {
        return t;
      } else {
        return t.replace(/\\([nrt\\])/g, (t, e) => e == "n" ? "\n" : e == "r" ? "\r" : e == "t" ? "\t" : "\\");
      }
    }
    eq(t) {
      return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
    }
    create() {
      if (this.regexp) {
        return new V(this);
      } else {
        return new L(this);
      }
    }
    getCursor(t, e = 0, i) {
      let n = t.doc ? t : codemirrorStateCore.EditorState.create({
        doc: t
      });
      if (i == null) {
        i = n.doc.length;
      }
      if (this.regexp) {
        return B(this, n, e, i);
      } else {
        return R(this, n, e, i);
      }
    }
  }
  class E {
    constructor(t) {
      this.spec = t;
    }
  }
  function R(t, e, i, n) {
    var r;
    var o;
    return new l(e.doc, t.unquoted, i, n, t.caseSensitive ? undefined : t => t.toLowerCase(), t.wholeWord ? (r = e.doc, o = e.charCategorizer(e.selection.main.head), (t, e, i, n) => {
      if (n > t || n + i.length < e) {
        n = Math.max(0, t - 2);
        i = r.sliceString(n, Math.min(r.length, e + 2));
      }
      return (o(I(i, t - n)) != codemirrorStateCore.CharType.Word || o(N(i, t - n)) != codemirrorStateCore.CharType.Word) && (o(N(i, e - n)) != codemirrorStateCore.CharType.Word || o(I(i, e - n)) != codemirrorStateCore.CharType.Word);
    }) : undefined);
  }
  class L extends E {
    constructor(t) {
      super(t);
    }
    nextMatch(t, e, i) {
      let n = R(this.spec, t, i, t.doc.length).nextOverlapping();
      if (n.done) {
        let i = Math.min(t.doc.length, e + this.spec.unquoted.length);
        n = R(this.spec, t, 0, i).nextOverlapping();
      }
      if (n.done || n.value.from == e && n.value.to == i) {
        return null;
      } else {
        return n.value;
      }
    }
    prevMatchInRange(t, e, i) {
      for (let n = i;;) {
        let i = Math.max(e, n - 10000 - this.spec.unquoted.length);
        let s = R(this.spec, t, i, n);
        let r = null;
        while (!s.nextOverlapping().done) {
          r = s.value;
        }
        if (r) {
          return r;
        }
        if (i == e) {
          return null;
        }
        n -= 10000;
      }
    }
    prevMatch(t, e, i) {
      let n = this.prevMatchInRange(t, 0, e);
      n ||= this.prevMatchInRange(t, Math.max(0, i - this.spec.unquoted.length), t.doc.length);
      if (n && (n.from != e || n.to != i)) {
        return n;
      } else {
        return null;
      }
    }
    getReplacement(t) {
      return this.spec.unquote(this.spec.replace);
    }
    matchAll(t, e) {
      let i = R(this.spec, t, 0, t.doc.length);
      let n = [];
      while (!i.next().done) {
        if (n.length >= e) {
          return null;
        }
        n.push(i.value);
      }
      return n;
    }
    highlight(t, e, i, n) {
      let s = R(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
      while (!s.next().done) {
        n(s.value.from, s.value.to);
      }
    }
  }
  function B(t, e, i, n) {
    var r;
    return new c(e.doc, t.search, {
      ignoreCase: !t.caseSensitive,
      test: t.wholeWord ? (r = e.charCategorizer(e.selection.main.head), (t, e, i) => !i[0].length || (r(I(i.input, i.index)) != codemirrorStateCore.CharType.Word || r(N(i.input, i.index)) != codemirrorStateCore.CharType.Word) && (r(N(i.input, i.index + i[0].length)) != codemirrorStateCore.CharType.Word || r(I(i.input, i.index + i[0].length)) != codemirrorStateCore.CharType.Word)) : undefined
    }, i, n);
  }
  function I(t, e) {
    return t.slice(codemirrorStateCore.graphemeBoundary(t, e, false), e);
  }
  function N(t, e) {
    return t.slice(e, codemirrorStateCore.graphemeBoundary(t, e));
  }
  class V extends E {
    nextMatch(t, e, i) {
      let n = B(this.spec, t, i, t.doc.length).next();
      if (n.done) {
        n = B(this.spec, t, 0, e).next();
      }
      if (n.done) {
        return null;
      } else {
        return n.value;
      }
    }
    prevMatchInRange(t, e, i) {
      for (let n = 1;; n++) {
        let s = Math.max(e, i - n * 10000);
        let r = B(this.spec, t, s, i);
        let o = null;
        while (!r.next().done) {
          o = r.value;
        }
        if (o && (s == e || o.from > s + 10)) {
          return o;
        }
        if (s == e) {
          return null;
        }
      }
    }
    prevMatch(t, e, i) {
      return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.doc.length);
    }
    getReplacement(t) {
      return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, i) => {
        if (i == "&") {
          return t.match[0];
        }
        if (i == "$") {
          return "$";
        }
        for (let e = i.length; e > 0; e--) {
          let n = +i.slice(0, e);
          if (n > 0 && n < t.match.length) {
            return t.match[n] + i.slice(e);
          }
        }
        return e;
      });
    }
    matchAll(t, e) {
      let i = B(this.spec, t, 0, t.doc.length);
      let n = [];
      while (!i.next().done) {
        if (n.length >= e) {
          return null;
        }
        n.push(i.value);
      }
      return n;
    }
    highlight(t, e, i, n) {
      let s = B(this.spec, t, Math.max(0, e - 250), Math.min(i + 250, t.doc.length));
      while (!s.next().done) {
        n(s.value.from, s.value.to);
      }
    }
  }
  let F = codemirrorStateCore.EffectType.define();
  let j = codemirrorStateCore.EffectType.define();
  let H = codemirrorStateCore.PrecLevels.define({
    create: t => new z(Z(t).create(), null),
    update(t, e) {
      for (let i of e.effects) {
        if (i.is(F)) {
          t = new z(i.value.create(), t.panel);
        } else if (i.is(j)) {
          t = new z(t.query, i.value ? Y : null);
        }
      }
      return t;
    },
    provide: t => codemirrorEditorViewCore.panelsFacet.from(t, t => t.panel)
  });
  function W(t) {
    let e = t.field(H, false);
    if (e) {
      return e.query.spec;
    } else {
      return Z(t);
    }
  }
  class z {
    constructor(t, e) {
      this.query = t;
      this.panel = e;
    }
  }
  let q = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-searchMatch"
  });
  let $ = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-searchMatch cm-searchMatch-selected"
  });
  let J = codemirrorEditorViewCore.Plugin.fromClass(class {
    constructor(t) {
      this.view = t;
      this.decorations = this.highlight(t.state.field(H));
    }
    update(t) {
      let e = t.state.field(H);
      if (e != t.startState.field(H) || t.docChanged || t.selectionSet || t.viewportChanged) {
        this.decorations = this.highlight(e);
      }
    }
    highlight({
      query: t,
      panel: e
    }) {
      if (!e || !t.spec.valid) {
        return codemirrorEditorViewCore.decorationClass.none;
      }
      let {
        view: i
      } = this;
      let r = new codemirrorStateCore.RangeSetBuilder();
      for (let e = 0, n = i.visibleRanges, s = n.length; e < s; e++) {
        let {
          from: o,
          to: l
        } = n[e];
        while (e < s - 1 && l > n[e + 1].from - 500) {
          l = n[++e].to;
        }
        t.highlight(i.state, o, l, (t, e) => {
          let n = i.state.selection.ranges.some(i => i.from == t && i.to == e);
          r.add(t, e, n ? $ : q);
        });
      }
      return r.finish();
    }
  }, {
    decorations: t => t.decorations
  });
  function _(t) {
    return e => {
      let i = e.state.field(H, false);
      if (i && i.query.spec.valid) {
        return t(e, i);
      } else {
        return ti(e);
      }
    };
  }
  let K = _((t, {
    query: e
  }) => {
    let {
      to: i
    } = t.state.selection.main;
    let n = e.nextMatch(t.state, i, i);
    if (!n) {
      return false;
    }
    let r = codemirrorStateCore.EditorSelection.single(n.from, n.to);
    let o = t.state.facet(O);
    t.dispatch({
      selection: r,
      effects: [ta(t, n), o.scrollToMatch(r.main, t)],
      userEvent: "select.search"
    });
    te(t);
    return true;
  });
  let U = _((t, {
    query: e
  }) => {
    let {
      state: i
    } = t;
    let {
      from: n
    } = i.selection.main;
    let r = e.prevMatch(i, n, n);
    if (!r) {
      return false;
    }
    let o = codemirrorStateCore.EditorSelection.single(r.from, r.to);
    let l = t.state.facet(O);
    t.dispatch({
      selection: o,
      effects: [ta(t, r), l.scrollToMatch(o.main, t)],
      userEvent: "select.search"
    });
    te(t);
    return true;
  });
  let G = _((t, {
    query: e
  }) => {
    let i = e.matchAll(t.state, 1000);
    return !!i && !!i.length && (t.dispatch({
      selection: codemirrorStateCore.EditorSelection.create(i.map(t => codemirrorStateCore.EditorSelection.range(t.from, t.to))),
      userEvent: "select.search.matches"
    }), true);
  });
  let Q = _((t, {
    query: e
  }) => {
    let {
      state: i
    } = t;
    let {
      from: r,
      to: o
    } = i.selection.main;
    if (i.readOnly) {
      return false;
    }
    let l = e.nextMatch(i, r, r);
    if (!l) {
      return false;
    }
    let a = l;
    let h = [];
    let c;
    let u;
    let f = [];
    if (a.from == r && a.to == o) {
      u = i.toText(e.getReplacement(a));
      h.push({
        from: a.from,
        to: a.to,
        insert: u
      });
      a = e.nextMatch(i, a.from, a.to);
      f.push(codemirrorEditorViewCore.EditorView.announce.of(i.phrase("replaced match on line $", i.doc.lineAt(r).number) + "."));
    }
    let d = t.state.changes(h);
    if (a) {
      c = codemirrorStateCore.EditorSelection.single(a.from, a.to).map(d);
      f.push(ta(t, a));
      f.push(i.facet(O).scrollToMatch(c.main, t));
    }
    t.dispatch({
      changes: d,
      selection: c,
      effects: f,
      userEvent: "input.replace"
    });
    return true;
  });
  let X = _((t, {
    query: e
  }) => {
    if (t.state.readOnly) {
      return false;
    }
    let i = e.matchAll(t.state, 1000000000).map(t => {
      let {
        from: i,
        to: n
      } = t;
      return {
        from: i,
        to: n,
        insert: e.getReplacement(t)
      };
    });
    if (!i.length) {
      return false;
    }
    let s = t.state.phrase("replaced $ matches", i.length) + ".";
    t.dispatch({
      changes: i,
      effects: codemirrorEditorViewCore.EditorView.announce.of(s),
      userEvent: "input.replace.all"
    });
    return true;
  });
  function Y(t) {
    return t.state.facet(O).createPanel(t);
  }
  function Z(t, e) {
    let l = t.selection.main;
    let a = l.empty || l.to > l.from + 100 ? "" : t.sliceDoc(l.from, l.to);
    if (e && !a) {
      return e;
    }
    let h = t.facet(O);
    return new P({
      search: (e == null ? undefined : e.literal) ?? h.literal ? a : a.replace(/\n/g, "\\n"),
      caseSensitive: (e == null ? undefined : e.caseSensitive) ?? h.caseSensitive,
      literal: (e == null ? undefined : e.literal) ?? h.literal,
      regexp: (e == null ? undefined : e.regexp) ?? h.regexp,
      wholeWord: (e == null ? undefined : e.wholeWord) ?? h.wholeWord
    });
  }
  function tt(t) {
    let e = codemirrorEditorViewCore.activeLineGutter(t, Y);
    return e && e.dom.querySelector("[main-field]");
  }
  function te(t) {
    let e = tt(t);
    if (e && e == t.root.activeElement) {
      e.select();
    }
  }
  let ti = t => {
    let e = t.state.field(H, false);
    if (e && e.panel) {
      let i = tt(t);
      if (i && i != t.root.activeElement) {
        let n = Z(t.state, e.query.spec);
        if (n.valid) {
          t.dispatch({
            effects: F.of(n)
          });
        }
        i.focus();
        i.select();
      }
    } else {
      t.dispatch({
        effects: [j.of(true), e ? F.of(Z(t.state, e.query.spec)) : codemirrorStateCore.EffectType.appendConfig.of(tc)]
      });
    }
    return true;
  };
  let tn = t => {
    let e = t.state.field(H, false);
    if (!e || !e.panel) {
      return false;
    }
    let i = codemirrorEditorViewCore.activeLineGutter(t, Y);
    if (i && i.dom.contains(t.root.activeElement)) {
      t.focus();
    }
    t.dispatch({
      effects: j.of(false)
    });
    return true;
  };
  let ts = [{
    key: "Mod-f",
    run: ti,
    scope: "editor search-panel"
  }, {
    key: "F3",
    run: K,
    shift: U,
    scope: "editor search-panel",
    preventDefault: true
  }, {
    key: "Mod-g",
    run: K,
    shift: U,
    scope: "editor search-panel",
    preventDefault: true
  }, {
    key: "Escape",
    run: tn,
    scope: "editor search-panel"
  }, {
    key: "Mod-Shift-l",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let i = t.selection;
      if (i.ranges.length > 1 || i.main.empty) {
        return false;
      }
      let {
        from: n,
        to: r
      } = i.main;
      let o = [];
      let a = 0;
      for (let e = new l(t.doc, t.sliceDoc(n, r)); !e.next().done;) {
        if (o.length > 1000) {
          return false;
        }
        if (e.value.from == n) {
          a = o.length;
        }
        o.push(codemirrorStateCore.EditorSelection.range(e.value.from, e.value.to));
      }
      e(t.update({
        selection: codemirrorStateCore.EditorSelection.create(o, a),
        userEvent: "select.search.matches"
      }));
      return true;
    }
  }, {
    key: "Mod-Alt-g",
    run: t => {
      let e = codemirrorEditorViewCore.activeLineGutter(t, m);
      if (!e) {
        let i = [g.of(true)];
        if (t.state.field(v, false) == null) {
          i.push(codemirrorStateCore.EffectType.appendConfig.of([v, b]));
        }
        t.dispatch({
          effects: i
        });
        e = codemirrorEditorViewCore.activeLineGutter(t, m);
      }
      if (e) {
        e.dom.querySelector("input").select();
      }
      return true;
    }
  }, {
    key: "Mod-d",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let {
        ranges: i
      } = t.selection;
      if (i.some(t => t.from === t.to)) {
        return T({
          state: t,
          dispatch: e
        });
      }
      let r = t.sliceDoc(i[0].from, i[0].to);
      if (t.selection.ranges.some(e => t.sliceDoc(e.from, e.to) != r)) {
        return false;
      }
      let o = function (t, e) {
        let {
          main: i,
          ranges: n
        } = t.selection;
        let s = t.wordAt(i.head);
        let r = s && s.from == i.from && s.to == i.to;
        for (let i = false, s = new l(t.doc, e, n[n.length - 1].to);;) {
          s.next();
          if (s.done) {
            if (i) {
              return null;
            }
            s = new l(t.doc, e, 0, Math.max(0, n[n.length - 1].from - 1));
            i = true;
          } else {
            if (i && n.some(t => t.from == s.value.from)) {
              continue;
            }
            if (r) {
              let e = t.wordAt(s.value.from);
              if (!e || e.from != s.value.from || e.to != s.value.to) {
                continue;
              }
            }
            return s.value;
          }
        }
      }(t, r);
      return !!o && (e(t.update({
        selection: t.selection.addRange(codemirrorStateCore.EditorSelection.range(o.from, o.to), false),
        effects: codemirrorEditorViewCore.EditorView.scrollIntoView(o.to)
      })), true);
    },
    preventDefault: true
  }];
  class tr {
    constructor(t) {
      this.view = t;
      let e = this.query = t.state.field(H).query.spec;
      function i(t, e, i) {
        return domElementCreator.createDomElement("button", {
          class: "cm-button",
          name: t,
          onclick: e,
          type: "button"
        }, i);
      }
      this.commit = this.commit.bind(this);
      this.searchField = domElementCreator.createDomElement("input", {
        value: e.search,
        placeholder: to(t, "Find"),
        "aria-label": to(t, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit
      });
      this.replaceField = domElementCreator.createDomElement("input", {
        value: e.replace,
        placeholder: to(t, "Replace"),
        "aria-label": to(t, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit
      });
      this.caseField = domElementCreator.createDomElement("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: e.caseSensitive,
        onchange: this.commit
      });
      this.reField = domElementCreator.createDomElement("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: e.regexp,
        onchange: this.commit
      });
      this.wordField = domElementCreator.createDomElement("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: e.wholeWord,
        onchange: this.commit
      });
      this.dom = domElementCreator.createDomElement("div", {
        onkeydown: t => this.keydown(t),
        class: "cm-search"
      }, [this.searchField, i("next", () => K(t), [to(t, "next")]), i("prev", () => U(t), [to(t, "previous")]), i("select", () => G(t), [to(t, "all")]), domElementCreator.createDomElement("label", null, [this.caseField, to(t, "match case")]), domElementCreator.createDomElement("label", null, [this.reField, to(t, "regexp")]), domElementCreator.createDomElement("label", null, [this.wordField, to(t, "by word")]), ...(t.state.readOnly ? [] : [domElementCreator.createDomElement("br"), this.replaceField, i("replace", () => Q(t), [to(t, "replace")]), i("replaceAll", () => X(t), [to(t, "replace all")])]), domElementCreator.createDomElement("button", {
        name: "close",
        onclick: () => tn(t),
        "aria-label": to(t, "close"),
        type: "button"
      }, ["×"])]);
    }
    commit() {
      let t = new P({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      if (!t.eq(this.query)) {
        this.query = t;
        this.view.dispatch({
          effects: F.of(t)
        });
      }
    }
    keydown(t) {
      if (codemirrorEditorViewCore.keyBindingHandler(this.view, t, "search-panel")) {
        t.preventDefault();
      } else if (t.keyCode == 13 && t.target == this.searchField) {
        t.preventDefault();
        (t.shiftKey ? U : K)(this.view);
      } else if (t.keyCode == 13 && t.target == this.replaceField) {
        t.preventDefault();
        Q(this.view);
      }
    }
    update(t) {
      for (let e of t.transactions) {
        for (let t of e.effects) {
          if (t.is(F) && !t.value.eq(this.query)) {
            this.setQuery(t.value);
          }
        }
      }
    }
    setQuery(t) {
      this.query = t;
      this.searchField.value = t.search;
      this.replaceField.value = t.replace;
      this.caseField.checked = t.caseSensitive;
      this.reField.checked = t.regexp;
      this.wordField.checked = t.wholeWord;
    }
    mount() {
      this.searchField.select();
    }
    get pos() {
      return 80;
    }
    get top() {
      return this.view.state.facet(O).top;
    }
  }
  function to(t, e) {
    return t.state.phrase(e);
  }
  let tl = /[\s\.,:;?!]/;
  function ta(t, {
    from: e,
    to: i
  }) {
    let s = t.state.doc.lineAt(e);
    let r = t.state.doc.lineAt(i).to;
    let o = Math.max(s.from, e - 30);
    let l = Math.min(r, i + 30);
    let a = t.state.sliceDoc(o, l);
    if (o != s.from) {
      for (let t = 0; t < 30; t++) {
        if (!tl.test(a[t + 1]) && tl.test(a[t])) {
          a = a.slice(t);
          break;
        }
      }
    }
    if (l != r) {
      for (let t = a.length - 1; t > a.length - 30; t--) {
        if (!tl.test(a[t - 1]) && tl.test(a[t])) {
          a = a.slice(0, t);
          break;
        }
      }
    }
    return codemirrorEditorViewCore.EditorView.announce.of(`${t.state.phrase("current match")}. ${a} ${t.state.phrase("on line")} ${s.number}.`);
  }
  let th = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-panel.cm-search": {
      padding: "2px 6px 4px",
      position: "relative",
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      },
      "& input, & button, & label": {
        margin: ".2em .6em .2em 0"
      },
      "& input[type=checkbox]": {
        marginRight: ".2em"
      },
      "& label": {
        fontSize: "80%",
        whiteSpace: "pre"
      }
    },
    "&light .cm-searchMatch": {
      backgroundColor: "#ffff0054"
    },
    "&dark .cm-searchMatch": {
      backgroundColor: "#00ffff8a"
    },
    "&light .cm-searchMatch-selected": {
      backgroundColor: "#ff6a0054"
    },
    "&dark .cm-searchMatch-selected": {
      backgroundColor: "#ff00ff8a"
    }
  });
  let tc = [H, codemirrorStateCore.StateField.low(J), th];
  require.d(exports, {
    SearchIterator: function () {
      return l;
    },
    SearchQuery: function () {
      return P;
    },
    replaceNextMatch: function () {
      return Q;
    },
    searchKeyBindings: function () {
      return ts;
    },
    closeSearch: function () {
      return tn;
    },
    selectPrevMatch: function () {
      return U;
    },
    selectNextMatch: function () {
      return K;
    },
    openSearch: function () {
      return ti;
    },
    searchEffectType: function () {
      return F;
    },
    getSearchConfig: function () {
      return x;
    },
    getQuery: function () {
      return W;
    },
    searchPanel: function () {
      return D;
    }
  });
}