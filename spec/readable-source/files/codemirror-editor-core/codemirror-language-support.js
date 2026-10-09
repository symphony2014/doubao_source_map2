// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Be' to 'ParseContext'
// - Renamed export 'Dv' to 'getFoldRange'
// - Renamed export 'Gn' to 'IndentContext'
// - Renamed export 'Hl' to 'getFoldExtension'
// - Renamed export 'K0' to 'getIndent'
// - Renamed export 'KC' to 'languageTypeProp'
// - Renamed export 'QN' to 'getHighlightClass'
// - Renamed export 'Qf' to 'HighlightStyle'
// - Renamed export 'R_' to 'defaultHighlightStyle'
// - Renamed export 'SQ' to 'LanguageSupport'
// - Renamed export 'SS' to 'createIndentString'
// - Renamed export 'SW' to 'foldEffect'
// - Renamed export 'Um' to 'findMatchingBracket'
// - Renamed export 'a0' to 'foldNodeProp'
// - Renamed export 'c' to 'indentUnitFacet'
// - Renamed export 'c6' to 'LanguageDescription'
// - Renamed export 'dK' to 'languageDataFacet'
// - Renamed export 'e7' to 'foldKeymap'
// - Renamed export 'il' to 'StreamLanguage'
// - Renamed export 'kU' to 'languageSupportFacet'
// - Renamed export 'mi' to 'foldGutter'
// - Renamed export 'n$' to 'bracketMatching'
// - Renamed export 'nF' to 'highlightTheme'
// - Renamed export 'nY' to 'indentOnInput'
// - Renamed export 'pp' to 'languageTypeProp_1'
// - Renamed export 'qp' to 'Parser'
// - Renamed export 'qz' to 'getTree'
// - Renamed export 'ri' to 'Language'
// - Renamed export 'rs' to 'foldConfigFacet'
// - Renamed export 'tC' to 'renderMatch'
// - Renamed export 'uj' to 'indentNodeProp'
// - Renamed export 'vw' to 'continuedIndent'
// - Renamed export 'x0' to 'foldState'
// - Renamed export 'xP' to 'unfoldEffect'
// - Renamed export 'y1' to 'getIndentUnit'
// - Renamed export 'ze' to 'baseIndent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 976653
         */
module.exports = function (module, exports, require) {
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  var cssStyleManager = require("css-style-manager") /*id: 140542*/;
  let h = new syntaxTreeCore.NodeTypeProp();
  function c(t) {
    return codemirrorStateCore.Facet.define({
      combine: t ? e => e.concat(t) : undefined
    });
  }
  let u = new syntaxTreeCore.NodeTypeProp();
  class f {
    constructor(t, e, i = [], n = "") {
      this.data = t;
      this.name = n;
      if (!codemirrorStateCore.EditorState.prototype.hasOwnProperty("tree")) {
        Object.defineProperty(codemirrorStateCore.EditorState.prototype, "tree", {
          get() {
            return m(this);
          }
        });
      }
      this.parser = e;
      this.extension = [C.of(this), codemirrorStateCore.EditorState.languageData.of((t, e, i) => {
        let n = d(t, e, i);
        let s = n.type.prop(h);
        if (!s) {
          return [];
        }
        let r = t.facet(s);
        let o = n.type.prop(u);
        if (o) {
          let s = n.resolve(e - n.from, i);
          for (let e of o) {
            if (e.test(s, t)) {
              let i = t.facet(e.facet);
              if (e.type == "replace") {
                return i;
              } else {
                return i.concat(r);
              }
            }
          }
        }
        return r;
      })].concat(i);
    }
    isActiveAt(t, e, i = -1) {
      return d(t, e, i).type.prop(h) == this.data;
    }
    findRegions(t) {
      let e = t.facet(C);
      if ((e == null ? undefined : e.data) == this.data) {
        return [{
          from: 0,
          to: t.doc.length
        }];
      }
      if (!e || !e.allowsNesting) {
        return [];
      }
      let i = [];
      let n = (t, e) => {
        if (t.prop(h) == this.data) {
          i.push({
            from: e,
            to: e + t.length
          });
          return;
        }
        let r = t.prop(syntaxTreeCore.NodeTypeProp.mounted);
        if (r) {
          if (r.tree.prop(h) == this.data) {
            if (r.overlay) {
              for (let t of r.overlay) {
                i.push({
                  from: t.from + e,
                  to: t.to + e
                });
              }
            } else {
              i.push({
                from: e,
                to: e + t.length
              });
            }
            return;
          }
          if (r.overlay) {
            let t = i.length;
            n(r.tree, r.overlay[0].from + e);
            if (i.length > t) {
              return;
            }
          }
        }
        for (let i = 0; i < t.children.length; i++) {
          let r = t.children[i];
          if (r instanceof syntaxTreeCore.Tree) {
            n(r, t.positions[i] + e);
          }
        }
      };
      n(m(t), 0);
      return i;
    }
    get allowsNesting() {
      return true;
    }
  }
  function d(t, e, i) {
    let n = t.facet(C);
    let r = m(t).topNode;
    if (!n || n.allowsNesting) {
      for (let t = r; t; t = t.enter(e, i, syntaxTreeCore.IterMode.ExcludeBuffers)) {
        if (t.type.isTop) {
          r = t;
        }
      }
    }
    return r;
  }
  f.setState = codemirrorStateCore.EffectType.define();
  class p extends f {
    constructor(t, e, i) {
      super(t, e, [], i);
      this.parser = e;
    }
    static define(t) {
      let e = c(t.languageData);
      return new p(e, t.parser.configure({
        props: [h.add(t => t.isTop ? e : undefined)]
      }), t.name);
    }
    configure(t, e) {
      return new p(this.data, this.parser.configure(t), e || this.name);
    }
    get allowsNesting() {
      return this.parser.hasWrappers();
    }
  }
  function m(t) {
    let e = t.field(f.state, false);
    if (e) {
      return e.tree;
    } else {
      return syntaxTreeCore.Tree.empty;
    }
  }
  class g {
    constructor(t) {
      this.doc = t;
      this.cursorPos = 0;
      this.string = "";
      this.cursor = t.iter();
    }
    get length() {
      return this.doc.length;
    }
    syncTo(t) {
      this.string = this.cursor.next(t - this.cursorPos).value;
      this.cursorPos = t + this.string.length;
      return this.cursorPos - this.string.length;
    }
    chunk(t) {
      this.syncTo(t);
      return this.string;
    }
    get lineChunks() {
      return true;
    }
    read(t, e) {
      let i = this.cursorPos - this.string.length;
      if (t < i || e >= this.cursorPos) {
        return this.doc.sliceString(t, e);
      } else {
        return this.string.slice(t - i, e - i);
      }
    }
  }
  let v = null;
  class b {
    constructor(t, e, i = [], n, s, r, o, l) {
      this.parser = t;
      this.state = e;
      this.fragments = i;
      this.tree = n;
      this.treeLen = s;
      this.viewport = r;
      this.skipped = o;
      this.scheduleOn = l;
      this.parse = null;
      this.tempSkipped = [];
    }
    static create(t, e, i) {
      return new b(t, e, [], syntaxTreeCore.Tree.empty, 0, i, [], null);
    }
    startParse() {
      return this.parser.startParse(new g(this.state.doc), this.fragments);
    }
    work(t, e) {
      if (e != null && e >= this.state.doc.length) {
        e = undefined;
      }
      if (this.tree != syntaxTreeCore.Tree.empty && this.isDone(e ?? this.state.doc.length)) {
        this.takeTree();
        return true;
      } else {
        return this.withContext(() => {
          if (typeof t == "number") {
            let e = Date.now() + t;
            t = () => Date.now() > e;
          }
          this.parse ||= this.startParse();
          if (e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length) {
            this.parse.stopAt(e);
          }
          while (true) {
            let n = this.parse.advance();
            if (n) {
              this.fragments = this.withoutTempSkipped(syntaxTreeCore.ParseRange.addTree(n, this.fragments, this.parse.stoppedAt != null));
              this.treeLen = this.parse.stoppedAt ?? this.state.doc.length;
              this.tree = n;
              this.parse = null;
              if (!(this.treeLen < (e ?? this.state.doc.length))) {
                return true;
              }
              this.parse = this.startParse();
            }
            if (t()) {
              return false;
            }
          }
        });
      }
    }
    takeTree() {
      let t;
      let e;
      if (this.parse && (t = this.parse.parsedPos) >= this.treeLen) {
        if (this.parse.stoppedAt == null || this.parse.stoppedAt > t) {
          this.parse.stopAt(t);
        }
        this.withContext(() => {
          while (!(e = this.parse.advance()));
        });
        this.treeLen = t;
        this.tree = e;
        this.fragments = this.withoutTempSkipped(syntaxTreeCore.ParseRange.addTree(this.tree, this.fragments, true));
        this.parse = null;
      }
    }
    withContext(t) {
      let e = v;
      v = this;
      try {
        return t();
      } finally {
        v = e;
      }
    }
    withoutTempSkipped(t) {
      for (let e; e = this.tempSkipped.pop();) {
        t = w(t, e.from, e.to);
      }
      return t;
    }
    changes(t, e) {
      let {
        fragments: i,
        tree: n,
        treeLen: r,
        viewport: o,
        skipped: l
      } = this;
      this.takeTree();
      if (!t.empty) {
        let e = [];
        t.iterChangedRanges((t, i, n, s) => e.push({
          fromA: t,
          toA: i,
          fromB: n,
          toB: s
        }));
        i = syntaxTreeCore.ParseRange.applyChanges(i, e);
        n = syntaxTreeCore.Tree.empty;
        r = 0;
        o = {
          from: t.mapPos(o.from, -1),
          to: t.mapPos(o.to, 1)
        };
        if (this.skipped.length) {
          l = [];
          for (let e of this.skipped) {
            let i = t.mapPos(e.from, 1);
            let n = t.mapPos(e.to, -1);
            if (i < n) {
              l.push({
                from: i,
                to: n
              });
            }
          }
        }
      }
      return new b(this.parser, e, i, n, r, o, l, this.scheduleOn);
    }
    updateViewport(t) {
      if (this.viewport.from == t.from && this.viewport.to == t.to) {
        return false;
      }
      this.viewport = t;
      let e = this.skipped.length;
      for (let e = 0; e < this.skipped.length; e++) {
        let {
          from: i,
          to: n
        } = this.skipped[e];
        if (i < t.to && n > t.from) {
          this.fragments = w(this.fragments, i, n);
          this.skipped.splice(e--, 1);
        }
      }
      return !(this.skipped.length >= e) && (this.reset(), true);
    }
    reset() {
      if (this.parse) {
        this.takeTree();
        this.parse = null;
      }
    }
    skipUntilInView(t, e) {
      this.skipped.push({
        from: t,
        to: e
      });
    }
    static getSkippingParser(t) {
      return new class extends syntaxTreeCore.Parser {
        createParse(e, i, n) {
          let r = n[0].from;
          let o = n[n.length - 1].to;
          return {
            parsedPos: r,
            advance() {
              let e = v;
              if (e) {
                for (let t of n) {
                  e.tempSkipped.push(t);
                }
                if (t) {
                  e.scheduleOn = e.scheduleOn ? Promise.all([e.scheduleOn, t]) : t;
                }
              }
              this.parsedPos = o;
              return new syntaxTreeCore.Tree(syntaxTreeCore.NodeType.none, [], [], o - r);
            },
            stoppedAt: null,
            stopAt() {}
          };
        }
      }();
    }
    isDone(t) {
      t = Math.min(t, this.state.doc.length);
      let e = this.fragments;
      return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
    }
    static get() {
      return v;
    }
  }
  function w(t, e, i) {
    return syntaxTreeCore.ParseRange.applyChanges(t, [{
      fromA: e,
      toA: i,
      fromB: e,
      toB: i
    }]);
  }
  class y {
    constructor(t) {
      this.context = t;
      this.tree = t.tree;
    }
    apply(t) {
      if (!t.docChanged && this.tree == this.context.tree) {
        return this;
      }
      let e = this.context.changes(t.changes, t.state);
      let i = this.context.treeLen == t.startState.doc.length ? undefined : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
      if (!e.work(20, i)) {
        e.takeTree();
      }
      return new y(e);
    }
    static init(t) {
      let e = Math.min(3000, t.doc.length);
      let i = b.create(t.facet(C).parser, t, {
        from: 0,
        to: e
      });
      if (!i.work(20, e)) {
        i.takeTree();
      }
      return new y(i);
    }
  }
  f.state = codemirrorStateCore.PrecLevels.define({
    create: y.init,
    update(t, e) {
      for (let t of e.effects) {
        if (t.is(f.setState)) {
          return t.value;
        }
      }
      if (e.startState.facet(C) != e.state.facet(C)) {
        return y.init(e.state);
      } else {
        return t.apply(e);
      }
    }
  });
  let x = t => {
    let e = setTimeout(() => t(), 500);
    return () => clearTimeout(e);
  };
  if (typeof requestIdleCallback != "undefined") {
    x = t => {
      let e = -1;
      let i = setTimeout(() => {
        e = requestIdleCallback(t, {
          timeout: 400
        });
      }, 100);
      return () => e < 0 ? clearTimeout(i) : cancelIdleCallback(e);
    };
  }
  let k = typeof navigator != "undefined" && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null;
  let S = codemirrorEditorViewCore.Plugin.fromClass(class {
    constructor(t) {
      this.view = t;
      this.working = null;
      this.workScheduled = 0;
      this.chunkEnd = -1;
      this.chunkBudget = -1;
      this.work = this.work.bind(this);
      this.scheduleWork();
    }
    update(t) {
      let e = this.view.state.field(f.state).context;
      if (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) {
        this.scheduleWork();
      }
      if (t.docChanged || t.selectionSet) {
        if (this.view.hasFocus) {
          this.chunkBudget += 50;
        }
        this.scheduleWork();
      }
      this.checkAsyncSchedule(e);
    }
    scheduleWork() {
      if (this.working) {
        return;
      }
      let {
        state: t
      } = this.view;
      let e = t.field(f.state);
      if (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) {
        this.working = x(this.work);
      }
    }
    work(t) {
      this.working = null;
      let e = Date.now();
      if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus)) {
        this.chunkEnd = e + 30000;
        this.chunkBudget = 3000;
      }
      if (this.chunkBudget <= 0) {
        return;
      }
      let {
        state: i,
        viewport: {
          to: n
        }
      } = this.view;
      let s = i.field(f.state);
      if (s.tree == s.context.tree && s.context.isDone(n + 100000)) {
        return;
      }
      let r = Date.now() + Math.min(this.chunkBudget, 100, t && !k ? Math.max(25, t.timeRemaining() - 5) : 1000000000);
      let o = s.context.treeLen < n && i.doc.length > n + 1000;
      let l = s.context.work(() => k && k() || Date.now() > r, n + !o * 100000);
      this.chunkBudget -= Date.now() - e;
      if (l || this.chunkBudget <= 0) {
        s.context.takeTree();
        this.view.dispatch({
          effects: f.setState.of(new y(s.context))
        });
      }
      if (this.chunkBudget > 0 && (!l || !!o)) {
        this.scheduleWork();
      }
      this.checkAsyncSchedule(s.context);
    }
    checkAsyncSchedule(t) {
      if (t.scheduleOn) {
        this.workScheduled++;
        t.scheduleOn.then(() => this.scheduleWork()).catch(t => codemirrorEditorViewCore.DecorationType(this.view.state, t)).then(() => this.workScheduled--);
        t.scheduleOn = null;
      }
    }
    destroy() {
      if (this.working) {
        this.working();
      }
    }
    isWorking() {
      return !!this.working || !!(this.workScheduled > 0);
    }
  }, {
    eventHandlers: {
      focus() {
        this.scheduleWork();
      }
    }
  });
  let C = codemirrorStateCore.Facet.define({
    combine: t => t.length ? t[0] : null,
    enables: t => [f.state, S, codemirrorEditorViewCore.EditorView.contentAttributes.compute([t], e => {
      let i = e.facet(t);
      if (i && i.name) {
        return {
          "data-language": i.name
        };
      } else {
        return {};
      }
    })]
  });
  class M {
    constructor(t, e = []) {
      this.language = t;
      this.support = e;
      this.extension = [t, e];
    }
  }
  class A {
    constructor(t, e, i, n, s, r) {
      this.name = t;
      this.alias = e;
      this.extensions = i;
      this.filename = n;
      this.loadFunc = s;
      this.support = r;
      this.loading = null;
    }
    load() {
      return this.loading ||= this.loadFunc().then(t => this.support = t, t => {
        this.loading = null;
        throw t;
      });
    }
    static of(t) {
      let {
        load: e,
        support: i
      } = t;
      if (!e) {
        if (!i) {
          throw RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");
        }
        e = () => Promise.resolve(i);
      }
      return new A(t.name, (t.alias || []).concat(t.name).map(t => t.toLowerCase()), t.extensions || [], t.filename, e, i);
    }
    static matchFilename(t, e) {
      for (let i of t) {
        if (i.filename && i.filename.test(e)) {
          return i;
        }
      }
      let i = /\.([^.]+)$/.exec(e);
      if (i) {
        for (let e of t) {
          if (e.extensions.indexOf(i[1]) > -1) {
            return e;
          }
        }
      }
      return null;
    }
    static matchLanguageName(t, e, i = true) {
      e = e.toLowerCase();
      for (let i of t) {
        if (i.alias.some(t => t == e)) {
          return i;
        }
      }
      if (i) {
        for (let i of t) {
          for (let t of i.alias) {
            let n = e.indexOf(t);
            if (n > -1 && (t.length > 2 || !/\w/.test(e[n - 1]) && !/\w/.test(e[n + t.length]))) {
              return i;
            }
          }
        }
      }
      return null;
    }
  }
  let T = codemirrorStateCore.Facet.define();
  let O = codemirrorStateCore.Facet.define({
    combine: t => {
      if (!t.length) {
        return "  ";
      }
      let e = t[0];
      if (!e || /\S/.test(e) || Array.from(e).some(t => t != e[0])) {
        throw Error("Invalid indent unit: " + JSON.stringify(t[0]));
      }
      return e;
    }
  });
  function D(t) {
    let e = t.facet(O);
    if (e.charCodeAt(0) == 9) {
      return t.tabSize * e.length;
    } else {
      return e.length;
    }
  }
  function P(t, e) {
    let i = "";
    let n = t.tabSize;
    let s = t.facet(O)[0];
    if (s == "\t") {
      while (e >= n) {
        i += "\t";
        e -= n;
      }
      s = " ";
    }
    for (let t = 0; t < e; t++) {
      i += s;
    }
    return i;
  }
  function E(t, e) {
    if (t instanceof codemirrorStateCore.EditorState) {
      t = new R(t);
    }
    for (let i of t.state.facet(T)) {
      let n = i(t, e);
      if (n !== undefined) {
        return n;
      }
    }
    let i = m(t.state);
    if (i.length >= e) {
      return function (t, e, i) {
        let n = e.resolveStack(i);
        let s = n.node.enterUnfinishedNodesBefore(i);
        if (s != n.node) {
          let t = [];
          for (let e = s; e != n.node; e = e.parent) {
            t.push(e);
          }
          for (let e = t.length - 1; e >= 0; e--) {
            n = {
              node: t[e],
              next: n
            };
          }
        }
        return B(n, t, i);
      }(t, i, e);
    } else {
      return null;
    }
  }
  class R {
    constructor(t, e = {}) {
      this.state = t;
      this.options = e;
      this.unit = D(t);
    }
    lineAt(t, e = 1) {
      let i = this.state.doc.lineAt(t);
      let {
        simulateBreak: n,
        simulateDoubleBreak: s
      } = this.options;
      if (n != null && n >= i.from && n <= i.to) {
        if (s && n == t) {
          return {
            text: "",
            from: t
          };
        } else if (e < 0 ? n < t : n <= t) {
          return {
            text: i.text.slice(n - i.from),
            from: n
          };
        } else {
          return {
            text: i.text.slice(0, n - i.from),
            from: i.from
          };
        }
      } else {
        return i;
      }
    }
    textAfterPos(t, e = 1) {
      if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) {
        return "";
      }
      let {
        text: i,
        from: n
      } = this.lineAt(t, e);
      return i.slice(t - n, Math.min(i.length, t + 100 - n));
    }
    column(t, e = 1) {
      let {
        text: i,
        from: n
      } = this.lineAt(t, e);
      let s = this.countColumn(i, t - n);
      let r = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
      if (r > -1) {
        s += r - this.countColumn(i, i.search(/\S|$/));
      }
      return s;
    }
    countColumn(t, e = t.length) {
      return codemirrorStateCore.countColumn(t, this.state.tabSize, e);
    }
    lineIndent(t, e = 1) {
      let {
        text: i,
        from: n
      } = this.lineAt(t, e);
      let s = this.options.overrideIndentation;
      if (s) {
        let t = s(n);
        if (t > -1) {
          return t;
        }
      }
      return this.countColumn(i, i.search(/\S|$/));
    }
    get simulatedBreak() {
      return this.options.simulateBreak || null;
    }
  }
  let L = new syntaxTreeCore.NodeTypeProp();
  function B(t, e, i) {
    for (let n = t; n; n = n.next) {
      let t = function (t) {
        let e = t.type.prop(L);
        if (e) {
          return e;
        }
        let i = t.firstChild;
        let n;
        if (i && (n = i.type.prop(syntaxTreeCore.NodeTypeProp.closedBy))) {
          let e = t.lastChild;
          let i = e && n.indexOf(e.name) > -1;
          return t => F(t, true, 1, undefined, i && (t.pos != t.options.simulateBreak || !t.options.simulateDoubleBreak) ? e.from : undefined);
        }
        if (t.parent == null) {
          return I;
        } else {
          return null;
        }
      }(n.node);
      if (t) {
        return t(N.create(e, i, n));
      }
    }
    return 0;
  }
  function I() {
    return 0;
  }
  class N extends R {
    constructor(t, e, i) {
      super(t.state, t.options);
      this.base = t;
      this.pos = e;
      this.context = i;
    }
    get node() {
      return this.context.node;
    }
    static create(t, e, i) {
      return new N(t, e, i);
    }
    get textAfter() {
      return this.textAfterPos(this.pos);
    }
    get baseIndent() {
      return this.baseIndentFor(this.node);
    }
    baseIndentFor(t) {
      let e = this.state.doc.lineAt(t.from);
      while (true) {
        let i = t.resolve(e.from);
        while (i.parent && i.parent.from == i.from) {
          i = i.parent;
        }
        if (function (t, e) {
          for (let i = e; i; i = i.parent) {
            if (t == i) {
              return true;
            }
          }
          return false;
        }(i, t)) {
          break;
        }
        e = this.state.doc.lineAt(i.from);
      }
      return this.lineIndent(e.from);
    }
    continue() {
      return B(this.context.next, this.base, this.pos);
    }
  }
  function V({
    closing: t,
    align: e = true,
    units: i = 1
  }) {
    return n => F(n, e, i, t);
  }
  function F(t, e, i, n, s) {
    let r = t.textAfter;
    let o = r.match(/^\s*/)[0].length;
    let l = n && r.slice(o, o + n.length) == n || s == t.pos + o;
    let a = e ? function (t) {
      let e = t.node;
      let i = e.childAfter(e.from);
      let n = e.lastChild;
      if (!i) {
        return null;
      }
      let s = t.options.simulateBreak;
      let r = t.state.doc.lineAt(i.from);
      let o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
      for (let t = i.to;;) {
        let s = e.childAfter(t);
        if (!s || s == n) {
          return null;
        }
        if (!s.type.isSkipped) {
          if (s.from >= o) {
            return null;
          }
          let t = /^ */.exec(r.text.slice(i.to - r.from))[0].length;
          return {
            from: i.from,
            to: i.to + t
          };
        }
        t = s.to;
      }
    }(t) : null;
    if (a) {
      if (l) {
        return t.column(a.from);
      } else {
        return t.column(a.to);
      }
    } else {
      return t.baseIndent + (l ? 0 : t.unit * i);
    }
  }
  let j = t => t.baseIndent;
  function H({
    except: t,
    units: e = 1
  } = {}) {
    return i => {
      let n = t && t.test(i.textAfter);
      return i.baseIndent + (n ? 0 : e * i.unit);
    };
  }
  function W() {
    return codemirrorStateCore.EditorState.transactionFilter.of(t => {
      if (!t.docChanged || !t.isUserEvent("input.type") && !t.isUserEvent("input.complete")) {
        return t;
      }
      let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
      if (!e.length) {
        return t;
      }
      let i = t.newDoc;
      let {
        head: n
      } = t.newSelection.main;
      let s = i.lineAt(n);
      if (n > s.from + 200) {
        return t;
      }
      let r = i.sliceString(s.from, n);
      if (!e.some(t => t.test(r))) {
        return t;
      }
      let {
        state: o
      } = t;
      let l = -1;
      let a = [];
      for (let {
        head: t
      } of o.selection.ranges) {
        let e = o.doc.lineAt(t);
        if (e.from == l) {
          continue;
        }
        l = e.from;
        let i = E(o, e.from);
        if (i == null) {
          continue;
        }
        let n = /^\s*/.exec(e.text)[0];
        let s = P(o, i);
        if (n != s) {
          a.push({
            from: e.from,
            to: e.from + n.length,
            insert: s
          });
        }
      }
      if (a.length) {
        return [t, {
          changes: a,
          sequential: true
        }];
      } else {
        return t;
      }
    });
  }
  let z = codemirrorStateCore.Facet.define();
  let q = new syntaxTreeCore.NodeTypeProp();
  function $(t) {
    let e = t.firstChild;
    let i = t.lastChild;
    if (e && e.to < i.from) {
      return {
        from: e.to,
        to: i.type.isError ? t.to : i.from
      };
    } else {
      return null;
    }
  }
  function J(t, e, i) {
    for (let n of t.facet(z)) {
      let s = n(t, e, i);
      if (s) {
        return s;
      }
    }
    return function (t, e, i) {
      let n = m(t);
      if (n.length < i) {
        return null;
      }
      let s = n.resolveStack(i, 1);
      let r = null;
      for (let o = s; o; o = o.next) {
        let s = o.node;
        if (s.to <= i || s.from > i) {
          continue;
        }
        if (r && s.from < e) {
          break;
        }
        let l = s.type.prop(q);
        if (l && (s.to < n.length - 50 || n.length == t.doc.length || !function (t) {
          let e = t.lastChild;
          return e && e.to == t.to && e.type.isError;
        }(s))) {
          let n = l(s, t);
          if (n && n.from <= i && n.from >= e && n.to > i) {
            r = n;
          }
        }
      }
      return r;
    }(t, e, i);
  }
  function _(t, e) {
    let i = e.mapPos(t.from, 1);
    let n = e.mapPos(t.to, -1);
    if (i >= n) {
      return undefined;
    } else {
      return {
        from: i,
        to: n
      };
    }
  }
  let K = codemirrorStateCore.EffectType.define({
    map: _
  });
  let U = codemirrorStateCore.EffectType.define({
    map: _
  });
  function G(t) {
    let e = [];
    for (let {
      head: i
    } of t.state.selection.ranges) {
      if (!e.some(t => t.from <= i && t.to >= i)) {
        e.push(t.lineBlockAt(i));
      }
    }
    return e;
  }
  let Q = codemirrorStateCore.PrecLevels.define({
    create: () => codemirrorEditorViewCore.decorationClass.none,
    update(t, e) {
      t = t.map(e.changes);
      for (let i of e.effects) {
        if (i.is(K) && !function (t, e, i) {
          let n = false;
          t.between(e, e, (t, s) => {
            if (t == e && s == i) {
              n = true;
            }
          });
          return n;
        }(t, i.value.from, i.value.to)) {
          let {
            preparePlaceholder: n
          } = e.state.facet(ti);
          let s = n ? codemirrorEditorViewCore.decorationClass.replace({
            widget: new to(n(e.state, i.value))
          }) : tr;
          t = t.update({
            add: [s.range(i.value.from, i.value.to)]
          });
        } else if (i.is(U)) {
          t = t.update({
            filter: (t, e) => i.value.from != t || i.value.to != e,
            filterFrom: i.value.from,
            filterTo: i.value.to
          });
        }
      }
      if (e.selection) {
        let i = false;
        let {
          head: n
        } = e.selection.main;
        t.between(n, n, (t, e) => {
          if (t < n && e > n) {
            i = true;
          }
        });
        if (i) {
          t = t.update({
            filterFrom: n,
            filterTo: n,
            filter: (t, e) => e <= n || t >= n
          });
        }
      }
      return t;
    },
    provide: t => codemirrorEditorViewCore.EditorView.decorations.from(t),
    toJSON(t, e) {
      let i = [];
      t.between(0, e.doc.length, (t, e) => {
        i.push(t, e);
      });
      return i;
    },
    fromJSON(t) {
      if (!Array.isArray(t) || t.length % 2) {
        throw RangeError("Invalid JSON for fold state");
      }
      let e = [];
      for (let i = 0; i < t.length;) {
        let n = t[i++];
        let s = t[i++];
        if (typeof n != "number" || typeof s != "number") {
          throw RangeError("Invalid JSON for fold state");
        }
        e.push(tr.range(n, s));
      }
      return codemirrorEditorViewCore.decorationClass.set(e, true);
    }
  });
  function X(t, e, i) {
    var n;
    let s = null;
    if ((n = t.field(Q, false)) !== null && n !== undefined) {
      n.between(e, i, (t, e) => {
        if (!s || s.from > t) {
          s = {
            from: t,
            to: e
          };
        }
      });
    }
    return s;
  }
  function Y(t, e) {
    if (t.field(Q, false)) {
      return e;
    } else {
      return e.concat(codemirrorStateCore.EffectType.appendConfig.of(tn()));
    }
  }
  function Z(t, e, i = true) {
    let n = t.state.doc.lineAt(e.from).number;
    let s = t.state.doc.lineAt(e.to).number;
    return codemirrorEditorViewCore.EditorView.announce.of(`${t.state.phrase(i ? "Folded lines" : "Unfolded lines")} ${n} ${t.state.phrase("to")} ${s}.`);
  }
  let tt = [{
    key: "Ctrl-Shift-[",
    mac: "Cmd-Alt-[",
    run: t => {
      for (let e of G(t)) {
        let i = J(t.state, e.from, e.to);
        if (i) {
          t.dispatch({
            effects: Y(t.state, [K.of(i), Z(t, i)])
          });
          return true;
        }
      }
      return false;
    }
  }, {
    key: "Ctrl-Shift-]",
    mac: "Cmd-Alt-]",
    run: t => {
      if (!t.state.field(Q, false)) {
        return false;
      }
      let e = [];
      for (let i of G(t)) {
        let n = X(t.state, i.from, i.to);
        if (n) {
          e.push(U.of(n), Z(t, n, false));
        }
      }
      if (e.length) {
        t.dispatch({
          effects: e
        });
      }
      return e.length > 0;
    }
  }, {
    key: "Ctrl-Alt-[",
    run: t => {
      let {
        state: e
      } = t;
      let i = [];
      for (let n = 0; n < e.doc.length;) {
        let s = t.lineBlockAt(n);
        let r = J(e, s.from, s.to);
        if (r) {
          i.push(K.of(r));
        }
        n = (r ? t.lineBlockAt(r.to) : s).to + 1;
      }
      if (i.length) {
        t.dispatch({
          effects: Y(t.state, i)
        });
      }
      return !!i.length;
    }
  }, {
    key: "Ctrl-Alt-]",
    run: t => {
      let e = t.state.field(Q, false);
      if (!e || !e.size) {
        return false;
      }
      let i = [];
      e.between(0, t.state.doc.length, (t, e) => {
        i.push(U.of({
          from: t,
          to: e
        }));
      });
      t.dispatch({
        effects: i
      });
      return true;
    }
  }];
  let te = {
    placeholderDOM: null,
    preparePlaceholder: null,
    placeholderText: "…"
  };
  let ti = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, te)
  });
  function tn(t) {
    let e = [Q, tc];
    if (t) {
      e.push(ti.of(t));
    }
    return e;
  }
  function ts(t, e) {
    let {
      state: i
    } = t;
    let n = i.facet(ti);
    let s = e => {
      let i = t.lineBlockAt(t.posAtDOM(e.target));
      let n = X(t.state, i.from, i.to);
      if (n) {
        t.dispatch({
          effects: U.of(n)
        });
      }
      e.preventDefault();
    };
    if (n.placeholderDOM) {
      return n.placeholderDOM(t, s, e);
    }
    let r = document.createElement("span");
    r.textContent = n.placeholderText;
    r.setAttribute("aria-label", i.phrase("folded code"));
    r.title = i.phrase("unfold");
    r.className = "cm-foldPlaceholder";
    r.onclick = s;
    return r;
  }
  let tr = codemirrorEditorViewCore.decorationClass.replace({
    widget: new class extends codemirrorEditorViewCore.Decoration {
      toDOM(t) {
        return ts(t, null);
      }
    }()
  });
  class to extends codemirrorEditorViewCore.Decoration {
    constructor(t) {
      super();
      this.value = t;
    }
    eq(t) {
      return this.value == t.value;
    }
    toDOM(t) {
      return ts(t, this.value);
    }
  }
  let tl = {
    openText: "⌄",
    closedText: "›",
    markerDOM: null,
    domEventHandlers: {},
    foldingChanged: () => false
  };
  class ta extends codemirrorEditorViewCore.RangeValue {
    constructor(t, e) {
      super();
      this.config = t;
      this.open = e;
    }
    eq(t) {
      return this.config == t.config && this.open == t.open;
    }
    toDOM(t) {
      if (this.config.markerDOM) {
        return this.config.markerDOM(this.open);
      }
      let e = document.createElement("span");
      e.textContent = this.open ? this.config.openText : this.config.closedText;
      e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line");
      return e;
    }
  }
  function th(t = {}) {
    let e = Object.assign(Object.assign({}, tl), t);
    let i = new ta(e, true);
    let n = new ta(e, false);
    let s = codemirrorEditorViewCore.Plugin.fromClass(class {
      constructor(t) {
        this.from = t.viewport.from;
        this.markers = this.buildMarkers(t);
      }
      update(t) {
        if (t.docChanged || t.viewportChanged || t.startState.facet(C) != t.state.facet(C) || t.startState.field(Q, false) != t.state.field(Q, false) || m(t.startState) != m(t.state) || e.foldingChanged(t)) {
          this.markers = this.buildMarkers(t.view);
        }
      }
      buildMarkers(t) {
        let e = new codemirrorStateCore.RangeSetBuilder();
        for (let s of t.viewportLineBlocks) {
          let r = X(t.state, s.from, s.to) ? n : J(t.state, s.from, s.to) ? i : null;
          if (r) {
            e.add(s.from, s.from, r);
          }
        }
        return e.finish();
      }
    });
    let {
      domEventHandlers: l
    } = e;
    return [s, codemirrorEditorViewCore.gutterConfig({
      class: "cm-foldGutter",
      markers(t) {
        return t.plugin(s)?.markers || codemirrorStateCore.RangeSet.empty;
      },
      initialSpacer: () => new ta(e, false),
      domEventHandlers: Object.assign(Object.assign({}, l), {
        click: (t, e, i) => {
          if (l.click && l.click(t, e, i)) {
            return true;
          }
          let n = X(t.state, e.from, e.to);
          if (n) {
            t.dispatch({
              effects: U.of(n)
            });
            return true;
          }
          let s = J(t.state, e.from, e.to);
          return !!s && (t.dispatch({
            effects: K.of(s)
          }), true);
        }
      })
    }), tn()];
  }
  let tc = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-foldPlaceholder": {
      backgroundColor: "#eee",
      border: "1px solid #ddd",
      color: "#888",
      borderRadius: ".2em",
      margin: "0 1px",
      padding: "0 1px",
      cursor: "pointer"
    },
    ".cm-foldGutter span": {
      padding: "0 1px",
      cursor: "pointer"
    }
  });
  class tu {
    constructor(t, e) {
      let i;
      function n(t) {
        let e = cssStyleManager.StyleManager.newName();
        (i ||= Object.create(null))["." + e] = t;
        return e;
      }
      this.specs = t;
      let s = typeof e.all == "string" ? e.all : e.all ? n(e.all) : undefined;
      let r = e.scope;
      this.scope = r instanceof f ? t => t.prop(h) == r.data : r ? t => t == r : undefined;
      this.style = syntaxHighlightTags.createHighlighter(t.map(t => ({
        tag: t.tag,
        class: t.class || n(Object.assign({}, t, {
          tag: null
        }))
      })), {
        all: s
      }).style;
      this.module = i ? new cssStyleManager.StyleManager(i) : null;
      this.themeType = e.themeType;
    }
    static define(t, e) {
      return new tu(t, e || {});
    }
  }
  let tf = codemirrorStateCore.Facet.define();
  let td = codemirrorStateCore.Facet.define({
    combine: t => t.length ? [t[0]] : null
  });
  function tp(t) {
    let e = t.facet(tf);
    if (e.length) {
      return e;
    } else {
      return t.facet(td);
    }
  }
  function tm(t, e) {
    let i = [tv];
    let n;
    if (t instanceof tu) {
      if (t.module) {
        i.push(codemirrorEditorViewCore.EditorView.styleModule.of(t.module));
      }
      n = t.themeType;
    }
    if (e == null ? undefined : e.fallback) {
      i.push(td.of(t));
    } else if (n) {
      i.push(tf.computeN([codemirrorEditorViewCore.EditorView.darkTheme], e => e.facet(codemirrorEditorViewCore.EditorView.darkTheme) == (n == "dark") ? [t] : []));
    } else {
      i.push(tf.of(t));
    }
    return i;
  }
  function tg(t, e, i) {
    let n = tp(t);
    let s = null;
    if (n) {
      for (let t of n) {
        if (!t.scope || i && t.scope(i)) {
          let i = t.style(e);
          if (i) {
            s = s ? s + " " + i : i;
          }
        }
      }
    }
    return s;
  }
  let tv = codemirrorStateCore.StateField.high(codemirrorEditorViewCore.Plugin.fromClass(class {
    constructor(t) {
      this.markCache = Object.create(null);
      this.tree = m(t.state);
      this.decorations = this.buildDeco(t, tp(t.state));
      this.decoratedTo = t.viewport.to;
    }
    update(t) {
      let e = m(t.state);
      let i = tp(t.state);
      let n = i != tp(t.startState);
      let {
        viewport: s
      } = t.view;
      let r = t.changes.mapPos(this.decoratedTo, 1);
      if (e.length < s.to && !n && e.type == this.tree.type && r >= s.to) {
        this.decorations = this.decorations.map(t.changes);
        this.decoratedTo = r;
      } else if (e != this.tree || t.viewportChanged || n) {
        this.tree = e;
        this.decorations = this.buildDeco(t.view, i);
        this.decoratedTo = s.to;
      }
    }
    buildDeco(t, e) {
      if (!e || !this.tree.length) {
        return codemirrorEditorViewCore.decorationClass.none;
      }
      let i = new codemirrorStateCore.RangeSetBuilder();
      for (let {
        from: n,
        to: s
      } of t.visibleRanges) {
        syntaxHighlightTags.highlightCode(this.tree, e, (t, e, n) => {
          i.add(t, e, this.markCache[n] ||= codemirrorEditorViewCore.decorationClass.mark({
            class: n
          }));
        }, n, s);
      }
      return i.finish();
    }
  }, {
    decorations: t => t.decorations
  }));
  let tb = tu.define([{
    tag: syntaxHighlightTags.defaultTags.meta,
    color: "#404740"
  }, {
    tag: syntaxHighlightTags.defaultTags.link,
    textDecoration: "underline"
  }, {
    tag: syntaxHighlightTags.defaultTags.heading,
    textDecoration: "underline",
    fontWeight: "bold"
  }, {
    tag: syntaxHighlightTags.defaultTags.emphasis,
    fontStyle: "italic"
  }, {
    tag: syntaxHighlightTags.defaultTags.strong,
    fontWeight: "bold"
  }, {
    tag: syntaxHighlightTags.defaultTags.strikethrough,
    textDecoration: "line-through"
  }, {
    tag: syntaxHighlightTags.defaultTags.keyword,
    color: "#708"
  }, {
    tag: [syntaxHighlightTags.defaultTags.atom, syntaxHighlightTags.defaultTags.bool, syntaxHighlightTags.defaultTags.url, syntaxHighlightTags.defaultTags.contentSeparator, syntaxHighlightTags.defaultTags.labelName],
    color: "#219"
  }, {
    tag: [syntaxHighlightTags.defaultTags.literal, syntaxHighlightTags.defaultTags.inserted],
    color: "#164"
  }, {
    tag: [syntaxHighlightTags.defaultTags.string, syntaxHighlightTags.defaultTags.deleted],
    color: "#a11"
  }, {
    tag: [syntaxHighlightTags.defaultTags.regexp, syntaxHighlightTags.defaultTags.escape, syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.string)],
    color: "#e40"
  }, {
    tag: syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.variableName),
    color: "#00f"
  }, {
    tag: syntaxHighlightTags.defaultTags.local(syntaxHighlightTags.defaultTags.variableName),
    color: "#30a"
  }, {
    tag: [syntaxHighlightTags.defaultTags.typeName, syntaxHighlightTags.defaultTags.namespace],
    color: "#085"
  }, {
    tag: syntaxHighlightTags.defaultTags.className,
    color: "#167"
  }, {
    tag: [syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.variableName), syntaxHighlightTags.defaultTags.macroName],
    color: "#256"
  }, {
    tag: syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.propertyName),
    color: "#00c"
  }, {
    tag: syntaxHighlightTags.defaultTags.comment,
    color: "#940"
  }, {
    tag: syntaxHighlightTags.defaultTags.invalid,
    color: "#f00"
  }]);
  let tw = codemirrorEditorViewCore.EditorView.baseTheme({
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: "#328c8252"
    },
    "&.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bb555544"
    }
  });
  let ty = "()[]{}";
  let tx = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      afterCursor: true,
      brackets: ty,
      maxScanDistance: 10000,
      renderMatch: tC
    })
  });
  let tk = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-matchingBracket"
  });
  let tS = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-nonmatchingBracket"
  });
  function tC(t) {
    let e = [];
    let i = t.matched ? tk : tS;
    e.push(i.range(t.start.from, t.start.to));
    if (t.end) {
      e.push(i.range(t.end.from, t.end.to));
    }
    return e;
  }
  let tM = [codemirrorStateCore.PrecLevels.define({
    create: () => codemirrorEditorViewCore.decorationClass.none,
    update(t, e) {
      if (!e.docChanged && !e.selection) {
        return t;
      }
      let i = [];
      let n = e.state.facet(tx);
      for (let t of e.state.selection.ranges) {
        if (!t.empty) {
          continue;
        }
        let s = tP(e.state, t.head, -1, n) || t.head > 0 && tP(e.state, t.head - 1, 1, n) || n.afterCursor && (tP(e.state, t.head, 1, n) || t.head < e.state.doc.length && tP(e.state, t.head + 1, -1, n));
        if (s) {
          i = i.concat(n.renderMatch(s, e.state));
        }
      }
      return codemirrorEditorViewCore.decorationClass.set(i, true);
    },
    provide: t => codemirrorEditorViewCore.EditorView.decorations.from(t)
  }), tw];
  function tA(t = {}) {
    return [tx.of(t), tM];
  }
  let tT = new syntaxTreeCore.NodeTypeProp();
  function tO(t, e, i) {
    let n = t.prop(e < 0 ? syntaxTreeCore.NodeTypeProp.openedBy : syntaxTreeCore.NodeTypeProp.closedBy);
    if (n) {
      return n;
    }
    if (t.name.length == 1) {
      let n = i.indexOf(t.name);
      if (n > -1 && n % 2 == +(e < 0)) {
        return [i[n + e]];
      }
    }
    return null;
  }
  function tD(t) {
    let e = t.type.prop(tT);
    if (e) {
      return e(t.node);
    } else {
      return t;
    }
  }
  function tP(t, e, i, n = {}) {
    let s = n.maxScanDistance || 10000;
    let r = n.brackets || ty;
    let o = m(t);
    let l = o.resolveInner(e, i);
    for (let t = l; t; t = t.parent) {
      let n = tO(t.type, i, r);
      if (n && t.from < t.to) {
        let s = tD(t);
        if (s && (i > 0 ? e >= s.from && e < s.to : e > s.from && e <= s.to)) {
          return function (t, e, i, n, s, r, o) {
            let l = n.parent;
            let a = {
              from: s.from,
              to: s.to
            };
            let h = 0;
            let c = l == null ? undefined : l.cursor();
            if (c && (i < 0 ? c.childBefore(n.from) : c.childAfter(n.to))) {
              do {
                if (i < 0 ? c.to <= n.from : c.from >= n.to) {
                  if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
                    let t = tD(c);
                    return {
                      start: a,
                      end: t ? {
                        from: t.from,
                        to: t.to
                      } : undefined,
                      matched: true
                    };
                  }
                  if (tO(c.type, i, o)) {
                    h++;
                  } else if (tO(c.type, -i, o)) {
                    if (h == 0) {
                      let t = tD(c);
                      return {
                        start: a,
                        end: t && t.from < t.to ? {
                          from: t.from,
                          to: t.to
                        } : undefined,
                        matched: false
                      };
                    }
                    h--;
                  }
                }
              } while (i < 0 ? c.prevSibling() : c.nextSibling());
            }
            return {
              start: a,
              matched: false
            };
          }(0, 0, i, t, s, n, r);
        }
      }
    }
    return function (t, e, i, n, s, r, o) {
      let l = i < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1);
      let a = o.indexOf(l);
      if (a < 0 || a % 2 == 0 != i > 0) {
        return null;
      }
      let h = {
        from: i < 0 ? e - 1 : e,
        to: i > 0 ? e + 1 : e
      };
      let c = t.doc.iterRange(e, i > 0 ? t.doc.length : 0);
      let u = 0;
      for (let t = 0; !c.next().done && t <= r;) {
        let r = c.value;
        if (i < 0) {
          t += r.length;
        }
        let l = e + t * i;
        for (let t = i > 0 ? 0 : r.length - 1, e = i > 0 ? r.length : -1; t != e; t += i) {
          let e = o.indexOf(r[t]);
          if (!(e < 0) && n.resolveInner(l + t, 1).type == s) {
            if (e % 2 == 0 == i > 0) {
              u++;
            } else {
              if (u == 1) {
                return {
                  start: h,
                  end: {
                    from: l + t,
                    to: l + t + 1
                  },
                  matched: e >> 1 == a >> 1
                };
              }
              u--;
            }
          }
        }
        if (i > 0) {
          t += r.length;
        }
      }
      if (c.done) {
        return {
          start: h,
          matched: false
        };
      } else {
        return null;
      }
    }(t, e, i, o, l.type, s, r);
  }
  function tE(t, e, i, n = 0, s = 0) {
    if (e == null && (e = t.search(/[^\s\u00a0]/)) == -1) {
      e = t.length;
    }
    let r = s;
    for (let s = n; s < e; s++) {
      if (t.charCodeAt(s) == 9) {
        r += i - r % i;
      } else {
        r++;
      }
    }
    return r;
  }
  class tR {
    constructor(t, e, i, n) {
      this.string = t;
      this.tabSize = e;
      this.indentUnit = i;
      this.overrideIndent = n;
      this.pos = 0;
      this.start = 0;
      this.lastColumnPos = 0;
      this.lastColumnValue = 0;
    }
    eol() {
      return this.pos >= this.string.length;
    }
    sol() {
      return this.pos == 0;
    }
    peek() {
      return this.string.charAt(this.pos) || undefined;
    }
    next() {
      if (this.pos < this.string.length) {
        return this.string.charAt(this.pos++);
      }
    }
    eat(t) {
      let e;
      let i = this.string.charAt(this.pos);
      if (typeof t == "string" ? i == t : i && (t instanceof RegExp ? t.test(i) : t(i))) {
        ++this.pos;
        return i;
      }
    }
    eatWhile(t) {
      let e = this.pos;
      while (this.eat(t));
      return this.pos > e;
    }
    eatSpace() {
      let t = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) {
        ++this.pos;
      }
      return this.pos > t;
    }
    skipToEnd() {
      this.pos = this.string.length;
    }
    skipTo(t) {
      let e = this.string.indexOf(t, this.pos);
      if (e > -1) {
        this.pos = e;
        return true;
      }
    }
    backUp(t) {
      this.pos -= t;
    }
    column() {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = tE(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue;
    }
    indentation() {
      return this.overrideIndent ?? tE(this.string, null, this.tabSize);
    }
    match(t, e, i) {
      if (typeof t == "string") {
        let n = t => i ? t.toLowerCase() : t;
        if (n(this.string.substr(this.pos, t.length)) == n(t)) {
          if (e !== false) {
            this.pos += t.length;
          }
          return true;
        } else {
          return null;
        }
      }
      {
        let i = this.string.slice(this.pos).match(t);
        if (i && i.index > 0) {
          return null;
        } else {
          if (i && e !== false) {
            this.pos += i[0].length;
          }
          return i;
        }
      }
    }
    current() {
      return this.string.slice(this.start, this.pos);
    }
  }
  function tL(t) {
    if (typeof t != "object") {
      return t;
    }
    let e = {};
    for (let i in t) {
      let n = t[i];
      e[i] = n instanceof Array ? n.slice() : n;
    }
    return e;
  }
  let tB = new WeakMap();
  class tI extends f {
    constructor(t) {
      var e;
      let i;
      let n = c(t.languageData);
      let r = {
        name: t.name || "",
        token: t.token,
        blankLine: t.blankLine || (() => {}),
        startState: t.startState || (() => true),
        copyState: t.copyState || tL,
        indent: t.indent || (() => null),
        languageData: t.languageData || {},
        tokenTable: t.tokenTable || tj
      };
      let o;
      super(n, new class extends syntaxTreeCore.Parser {
        createParse(t, e, i) {
          return new tV(o, t, e, i);
        }
      }(), [T.of((t, e) => this.getIndent(t, e))], t.name);
      this.topNode = (e = n, i = syntaxTreeCore.NodeType.define({
        id: tH.length,
        name: "Document",
        props: [h.add(() => e)],
        top: true
      }), tH.push(i), i);
      o = this;
      this.streamParser = r;
      this.stateAfter = new syntaxTreeCore.NodeTypeProp({
        perNode: true
      });
      this.tokenTable = t.tokenTable ? new tJ(r.tokenTable) : t_;
    }
    static define(t) {
      return new tI(t);
    }
    getIndent(t, e) {
      let i;
      let n = m(t.state);
      let s = n.resolve(e);
      while (s && s.type != this.topNode) {
        s = s.parent;
      }
      if (!s) {
        return null;
      }
      let {
        overrideIndentation: r
      } = t.options;
      if (r && (i = tB.get(t.state)) != null && i < e - 10000) {
        i = undefined;
      }
      let o = tN(this, n, 0, s.from, i ?? e);
      let l;
      let a;
      if (o) {
        a = o.state;
        l = o.pos + 1;
      } else {
        a = this.streamParser.startState(t.unit);
        l = 0;
      }
      if (e - l > 10000) {
        return null;
      }
      while (l < e) {
        let i = t.state.doc.lineAt(l);
        let n = Math.min(e, i.to);
        if (i.length) {
          let e = r ? r(i.from) : -1;
          let s = new tR(i.text, t.state.tabSize, t.unit, e < 0 ? undefined : e);
          while (s.pos < n - i.from) {
            tF(this.streamParser.token, s, a);
          }
        } else {
          this.streamParser.blankLine(a, t.unit);
        }
        if (n == e) {
          break;
        }
        l = i.to + 1;
      }
      let h = t.lineAt(e);
      if (r && i == null) {
        tB.set(t.state, h.from);
      }
      return this.streamParser.indent(a, /^\s*(.*)/.exec(h.text)[1], t);
    }
    get allowsNesting() {
      return false;
    }
  }
  function tN(t, e, i, n, r) {
    let o = i >= n && i + e.length <= r && e.prop(t.stateAfter);
    if (o) {
      return {
        state: t.streamParser.copyState(o),
        pos: i + e.length
      };
    }
    for (let o = e.children.length - 1; o >= 0; o--) {
      let l = e.children[o];
      let a = i + e.positions[o];
      let h = l instanceof syntaxTreeCore.Tree && a < r && tN(t, l, a, n, r);
      if (h) {
        return h;
      }
    }
    return null;
  }
  class tV {
    constructor(t, e, i, n) {
      this.lang = t;
      this.input = e;
      this.fragments = i;
      this.ranges = n;
      this.stoppedAt = null;
      this.chunks = [];
      this.chunkPos = [];
      this.chunk = [];
      this.chunkReused = undefined;
      this.rangeIndex = 0;
      this.to = n[n.length - 1].to;
      let r = b.get();
      let o = n[0].from;
      let {
        state: l,
        tree: a
      } = function (t, e, i, n) {
        for (let n of e) {
          let e = n.from + !!n.openStart * 25;
          let r = n.to - !!n.openEnd * 25;
          let o = e <= i && r > i && tN(t, n.tree, 0 - n.offset, i, r);
          let l;
          if (o && (l = function t(e, i, n, r, o) {
            if (o && n <= 0 && r >= i.length) {
              return i;
            }
            if (!o && i.type == e.topNode) {
              o = true;
            }
            for (let l = i.children.length - 1; l >= 0; l--) {
              let a = i.positions[l];
              let h = i.children[l];
              let c;
              if (a < r && h instanceof syntaxTreeCore.Tree) {
                if (!(c = t(e, h, n - a, r - a, o))) {
                  break;
                }
                if (o) {
                  return new syntaxTreeCore.Tree(i.type, i.children.slice(0, l).concat(c), i.positions.slice(0, l + 1), a + c.length);
                } else {
                  return c;
                }
              }
            }
            return null;
          }(t, n.tree, i + n.offset, o.pos + n.offset, false))) {
            return {
              state: o.state,
              tree: l
            };
          }
        }
        return {
          state: t.streamParser.startState(n ? D(n) : 4),
          tree: syntaxTreeCore.Tree.empty
        };
      }(t, i, o, r == null ? undefined : r.state);
      this.state = l;
      this.parsedPos = this.chunkStart = o + a.length;
      for (let t = 0; t < a.children.length; t++) {
        this.chunks.push(a.children[t]);
        this.chunkPos.push(a.positions[t]);
      }
      if (r && this.parsedPos < r.viewport.from - 100000) {
        this.state = this.lang.streamParser.startState(D(r.state));
        r.skipUntilInView(this.parsedPos, r.viewport.from);
        this.parsedPos = r.viewport.from;
      }
      this.moveRangeIndex();
    }
    advance() {
      let t = b.get();
      let e = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt);
      let i = Math.min(e, this.chunkStart + 2048);
      for (t && (i = Math.min(i, t.viewport.to)); this.parsedPos < i;) {
        this.parseLine(t);
      }
      if (this.chunkStart < this.parsedPos) {
        this.finishChunk();
      }
      if (this.parsedPos >= e) {
        return this.finish();
      } else if (t && this.parsedPos >= t.viewport.to) {
        t.skipUntilInView(this.parsedPos, e);
        return this.finish();
      } else {
        return null;
      }
    }
    stopAt(t) {
      this.stoppedAt = t;
    }
    lineAfter(t) {
      let e = this.input.chunk(t);
      if (this.input.lineChunks) {
        if (e == "\n") {
          e = "";
        }
      } else {
        let t = e.indexOf("\n");
        if (t > -1) {
          e = e.slice(0, t);
        }
      }
      if (t + e.length <= this.to) {
        return e;
      } else {
        return e.slice(0, this.to - t);
      }
    }
    nextLine() {
      let t = this.parsedPos;
      let e = this.lineAfter(t);
      let i = t + e.length;
      for (let t = this.rangeIndex;;) {
        let n = this.ranges[t].to;
        if (n >= i || (e = e.slice(0, n - (i - e.length)), ++t == this.ranges.length)) {
          break;
        }
        let s = this.ranges[t].from;
        let r = this.lineAfter(s);
        e += r;
        i = s + r.length;
      }
      return {
        line: e,
        end: i
      };
    }
    skipGapsTo(t, e, i) {
      while (true) {
        let n = this.ranges[this.rangeIndex].to;
        let s = t + e;
        if (i > 0 ? n > s : n >= s) {
          break;
        }
        let r = this.ranges[++this.rangeIndex].from;
        e += r - n;
      }
      return e;
    }
    moveRangeIndex() {
      while (this.ranges[this.rangeIndex].to < this.parsedPos) {
        this.rangeIndex++;
      }
    }
    emitToken(t, e, i, n, s) {
      if (this.ranges.length > 1) {
        s = this.skipGapsTo(e, s, 1);
        e += s;
        let t = this.chunk.length;
        s = this.skipGapsTo(i, s, -1);
        i += s;
        n += this.chunk.length - t;
      }
      this.chunk.push(t, e, i, n);
      return s;
    }
    parseLine(t) {
      let {
        line: e,
        end: i
      } = this.nextLine();
      let n = 0;
      let {
        streamParser: s
      } = this.lang;
      let r = new tR(e, t ? t.state.tabSize : 4, t ? D(t.state) : 2);
      if (r.eol()) {
        s.blankLine(this.state, r.indentUnit);
      } else {
        while (!r.eol()) {
          let t = tF(s.token, r, this.state);
          if (t) {
            n = this.emitToken(this.lang.tokenTable.resolve(t), this.parsedPos + r.start, this.parsedPos + r.pos, 4, n);
          }
          if (r.start > 10000) {
            break;
          }
        }
      }
      this.parsedPos = i;
      this.moveRangeIndex();
      if (this.parsedPos < this.to) {
        this.parsedPos++;
      }
    }
    finishChunk() {
      let t = syntaxTreeCore.Tree.build({
        buffer: this.chunk,
        start: this.chunkStart,
        length: this.parsedPos - this.chunkStart,
        nodeSet: tW,
        topID: 0,
        maxBufferLength: 2048,
        reused: this.chunkReused
      });
      t = new syntaxTreeCore.Tree(t.type, t.children, t.positions, t.length, [[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]]);
      this.chunks.push(t);
      this.chunkPos.push(this.chunkStart - this.ranges[0].from);
      this.chunk = [];
      this.chunkReused = undefined;
      this.chunkStart = this.parsedPos;
    }
    finish() {
      return new syntaxTreeCore.Tree(this.lang.topNode, this.chunks, this.chunkPos, this.parsedPos - this.ranges[0].from).balance();
    }
  }
  function tF(t, e, i) {
    e.start = e.pos;
    for (let n = 0; n < 10; n++) {
      let n = t(e, i);
      if (e.pos > e.start) {
        return n;
      }
    }
    throw Error("Stream parser failed to advance stream.");
  }
  let tj = Object.create(null);
  let tH = [syntaxTreeCore.NodeType.none];
  let tW = new syntaxTreeCore.NodeTypeSet(tH);
  let tz = [];
  let tq = Object.create(null);
  let t$ = Object.create(null);
  for (let [t, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]]) {
    t$[t] = tU(tj, e);
  }
  class tJ {
    constructor(t) {
      this.extra = t;
      this.table = Object.assign(Object.create(null), t$);
    }
    resolve(t) {
      if (t) {
        return this.table[t] ||= tU(this.extra, t);
      } else {
        return 0;
      }
    }
  }
  let t_ = new tJ(tj);
  function tK(t, e) {
    if (!(tz.indexOf(t) > -1)) {
      tz.push(t);
    }
  }
  function tU(t, e) {
    let i = [];
    for (let n of e.split(" ")) {
      let e = [];
      for (let i of n.split(".")) {
        let n = t[i] || syntaxHighlightTags.defaultTags[i];
        if (n) {
          if (typeof n == "function") {
            if (e.length) {
              e = e.map(n);
            } else {
              tK(i, `Modifier ${i} used at start of tag`);
            }
          } else if (e.length) {
            tK(i, `Tag ${i} used as modifier`);
          } else {
            e = Array.isArray(n) ? n : [n];
          }
        } else {
          tK(i, `Unknown highlighting tag ${i}`);
        }
      }
      for (let t of e) {
        i.push(t);
      }
    }
    if (!i.length) {
      return 0;
    }
    let n = e.replace(/ /g, "_");
    let r = n + " " + i.map(t => t.id);
    let o = tq[r];
    if (o) {
      return o.id;
    }
    let a = tq[r] = syntaxTreeCore.NodeType.define({
      id: tH.length,
      name: n,
      props: [syntaxHighlightTags.defineHighlighter({
        [n]: i
      })]
    });
    tH.push(a);
    return a.id;
  }
  codemirrorEditorViewCore.directionConstants.RTL;
  codemirrorEditorViewCore.directionConstants.LTR;
  require.d(exports, {
    ParseContext: function () {
      return b;
    },
    getFoldRange: function () {
      return $;
    },
    IndentContext: function () {
      return R;
    },
    getFoldExtension: function () {
      return tn;
    },
    getIndent: function () {
      return E;
    },
    languageTypeProp: function () {
      return u;
    },
    getHighlightClass: function () {
      return tg;
    },
    HighlightStyle: function () {
      return tu;
    },
    defaultHighlightStyle: function () {
      return tb;
    },
    LanguageSupport: function () {
      return f;
    },
    createIndentString: function () {
      return P;
    },
    foldEffect: function () {
      return K;
    },
    findMatchingBracket: function () {
      return tP;
    },
    foldNodeProp: function () {
      return tT;
    },
    indentUnitFacet: function () {
      return O;
    },
    LanguageDescription: function () {
      return A;
    },
    languageDataFacet: function () {
      return C;
    },
    foldKeymap: function () {
      return tt;
    },
    StreamLanguage: function () {
      return tI;
    },
    languageSupportFacet: function () {
      return c;
    },
    foldGutter: function () {
      return th;
    },
    bracketMatching: function () {
      return tA;
    },
    highlightTheme: function () {
      return tm;
    },
    indentOnInput: function () {
      return W;
    },
    languageTypeProp_1: function () {
      return h;
    },
    Parser: function () {
      return p;
    },
    getTree: function () {
      return m;
    },
    Language: function () {
      return M;
    },
    foldConfigFacet: function () {
      return z;
    },
    renderMatch: function () {
      return H;
    },
    indentNodeProp: function () {
      return L;
    },
    continuedIndent: function () {
      return V;
    },
    foldState: function () {
      return q;
    },
    unfoldEffect: function () {
      return U;
    },
    getIndentUnit: function () {
      return D;
    },
    baseIndent: function () {
      return j;
    }
  });
}