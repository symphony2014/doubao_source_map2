// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jT' to 'EditorSelection'
// - Renamed export 'xv' to 'Text'
// - Renamed export 'SJ' to 'RangeValue'
// - Renamed export 'Xs' to 'RangeSet'
// - Renamed export 'lg' to 'Plugin'
// - Renamed export 'tk' to 'EditorView'
// - Renamed export 'Xy' to 'createEditorExtensions'
// - Renamed export 'yy' to 'EditorState'
// - Renamed export 'hJ' to 'tooltipsFacet'
// - Renamed export 'QQ' to 'PrecLevels'
// - Renamed export 'ZP' to 'CodeMirror'
// - Renamed export '$1' to 'keyBindingHandler'
// - Renamed export 'v7' to 'gutterMarkers'
// - Renamed export 'Py' to 'EffectType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 479374
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  function c(t, e) {
    return ({
      state: i,
      dispatch: n
    }) => {
      if (i.readOnly) {
        return false;
      }
      let s = t(e, i);
      return !!s && (n(i.update(s)), true);
    };
  }
  let u = c(function (t, e, i = e.selection.ranges) {
    let n = [];
    let s = -1;
    for (let {
      from: t,
      to: r
    } of i) {
      let i = n.length;
      let o = 1000000000;
      let l = p(e, t).line;
      if (l) {
        for (let i = t; i <= r;) {
          let a = e.doc.lineAt(i);
          if (a.from > s && (t == r || r > a.from)) {
            s = a.from;
            let t = /^\s*/.exec(a.text)[0].length;
            let e = t == a.length;
            let i = a.text.slice(t, t + l.length) == l ? t : -1;
            if (t < a.text.length && t < o) {
              o = t;
            }
            n.push({
              line: a,
              comment: i,
              token: l,
              indent: t,
              empty: e,
              single: false
            });
          }
          i = a.to + 1;
        }
        if (o < 1000000000) {
          for (let t = i; t < n.length; t++) {
            if (n[t].indent < n[t].line.text.length) {
              n[t].indent = o;
            }
          }
        }
        if (n.length == i + 1) {
          n[i].single = true;
        }
      }
    }
    if (t != 2 && n.some(t => t.comment < 0 && (!t.empty || t.single))) {
      let t = [];
      for (let {
        line: e,
        token: i,
        indent: s,
        empty: r,
        single: o
      } of n) {
        if (o || !r) {
          t.push({
            from: e.from + s,
            insert: i + " "
          });
        }
      }
      let i = e.changes(t);
      return {
        changes: i,
        selection: e.selection.map(i, 1)
      };
    }
    if (t != 1 && n.some(t => t.comment >= 0)) {
      let t = [];
      for (let {
        line: e,
        comment: i,
        token: s
      } of n) {
        if (i >= 0) {
          let n = e.from + i;
          let r = n + s.length;
          if (e.text[r - e.from] == " ") {
            r++;
          }
          t.push({
            from: n,
            to: r
          });
        }
      }
      return {
        changes: t
      };
    }
    return null;
  }, 0);
  let f = c(m, 0);
  let d = c((t, e) => m(t, e, function (t) {
    let e = [];
    for (let i of t.selection.ranges) {
      let n = t.doc.lineAt(i.from);
      let s = i.to <= n.to ? n : t.doc.lineAt(i.to);
      if (s.from > n.from && s.from == i.to) {
        s = i.to == n.to + 1 ? n : t.doc.lineAt(i.to - 1);
      }
      let r = e.length - 1;
      if (r >= 0 && e[r].to > n.from) {
        e[r].to = s.to;
      } else {
        e.push({
          from: n.from + /^\s*/.exec(n.text)[0].length,
          to: s.to
        });
      }
    }
    return e;
  }(e)), 0);
  function p(t, e) {
    let i = t.languageDataAt("commentTokens", e);
    if (i.length) {
      return i[0];
    } else {
      return {};
    }
  }
  function m(t, e, i = e.selection.ranges) {
    let n = i.map(t => p(e, t.from).block);
    if (!n.every(t => t)) {
      return null;
    }
    let s = i.map((t, i) => function (t, {
      open: e,
      close: i
    }, n, s) {
      let r;
      let o;
      let l = t.sliceDoc(n - 50, n);
      let a = t.sliceDoc(s, s + 50);
      let h = /\s*$/.exec(l)[0].length;
      let c = /^\s*/.exec(a)[0].length;
      let u = l.length - h;
      if (l.slice(u - e.length, u) == e && a.slice(c, c + i.length) == i) {
        return {
          open: {
            pos: n - h,
            margin: h && 1
          },
          close: {
            pos: s + c,
            margin: c && 1
          }
        };
      }
      if (s - n <= 100) {
        r = o = t.sliceDoc(n, s);
      } else {
        r = t.sliceDoc(n, n + 50);
        o = t.sliceDoc(s - 50, s);
      }
      let f = /^\s*/.exec(r)[0].length;
      let d = /\s*$/.exec(o)[0].length;
      let p = o.length - d - i.length;
      if (r.slice(f, f + e.length) == e && o.slice(p, p + i.length) == i) {
        return {
          open: {
            pos: n + f + e.length,
            margin: +!!/\s/.test(r.charAt(f + e.length))
          },
          close: {
            pos: s - d - i.length,
            margin: +!!/\s/.test(o.charAt(p - 1))
          }
        };
      } else {
        return null;
      }
    }(e, n[i], t.from, t.to));
    if (t != 2 && !s.every(t => t)) {
      return {
        changes: e.changes(i.map((t, e) => s[e] ? [] : [{
          from: t.from,
          insert: n[e].open + " "
        }, {
          from: t.to,
          insert: " " + n[e].close
        }]))
      };
    }
    if (t != 1 && s.some(t => t)) {
      let t = [];
      for (let e = 0, i; e < s.length; e++) {
        if (i = s[e]) {
          let s = n[e];
          let {
            open: r,
            close: o
          } = i;
          t.push({
            from: r.pos - s.open.length,
            to: r.pos + r.margin
          }, {
            from: o.pos - o.margin,
            to: o.pos + s.close.length
          });
        }
      }
      return {
        changes: t
      };
    }
    return null;
  }
  let g = codemirrorStateCore.AnnotationType.define();
  let v = codemirrorStateCore.AnnotationType.define();
  let b = codemirrorStateCore.Facet.define();
  let w = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (t, e) => e
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (t, e) => (i, n) => t(i, n) || e(i, n)
    })
  });
  let y = codemirrorStateCore.PrecLevels.define({
    create: () => L.empty,
    update(t, e) {
      let i = e.state.facet(w);
      let n = e.annotation(g);
      if (n) {
        let s = A.fromTransaction(e, n.selection);
        let r = n.side;
        let o = r == 0 ? t.undone : t.done;
        o = s ? T(o, o.length, i.minDepth, s) : P(o, e.startState.selection);
        return new L(r == 0 ? n.rest : o, r == 0 ? o : n.rest);
      }
      let s = e.annotation(v);
      if (s == "full" || s == "before") {
        t = t.isolate();
      }
      if (e.annotation(codemirrorStateCore.Transaction.addToHistory) === false) {
        if (e.changes.empty) {
          return t;
        } else {
          return t.addMapping(e.changes.desc);
        }
      }
      let r = A.fromTransaction(e);
      let l = e.annotation(codemirrorStateCore.Transaction.time);
      let a = e.annotation(codemirrorStateCore.Transaction.userEvent);
      if (r) {
        t = t.addChanges(r, l, a, i, e);
      } else if (e.selection) {
        t = t.addSelection(e.startState.selection, l, a, i.newGroupDelay);
      }
      if (s == "full" || s == "after") {
        t = t.isolate();
      }
      return t;
    },
    toJSON: t => ({
      done: t.done.map(t => t.toJSON()),
      undone: t.undone.map(t => t.toJSON())
    }),
    fromJSON: t => new L(t.done.map(A.fromJSON), t.undone.map(A.fromJSON))
  });
  function x(t, e) {
    return function ({
      state: i,
      dispatch: n
    }) {
      if (!e && i.readOnly) {
        return false;
      }
      let s = i.field(y, false);
      if (!s) {
        return false;
      }
      let r = s.pop(t, i, e);
      return !!r && (n(r), true);
    };
  }
  let k = x(0, false);
  let S = x(1, false);
  let C = x(0, true);
  let M = x(1, true);
  class A {
    constructor(t, e, i, n, s) {
      this.changes = t;
      this.effects = e;
      this.mapped = i;
      this.startSelection = n;
      this.selectionsAfter = s;
    }
    setSelAfter(t) {
      return new A(this.changes, this.effects, this.mapped, this.startSelection, t);
    }
    toJSON() {
      var t;
      var e;
      var i;
      return {
        changes: (t = this.changes) === null || t === undefined ? undefined : t.toJSON(),
        mapped: (e = this.mapped) === null || e === undefined ? undefined : e.toJSON(),
        startSelection: (i = this.startSelection) === null || i === undefined ? undefined : i.toJSON(),
        selectionsAfter: this.selectionsAfter.map(t => t.toJSON())
      };
    }
    static fromJSON(t) {
      return new A(t.changes && codemirrorStateCore.ChangeSet.fromJSON(t.changes), [], t.mapped && codemirrorStateCore.ChangeDesc.fromJSON(t.mapped), t.startSelection && codemirrorStateCore.EditorSelection.fromJSON(t.startSelection), t.selectionsAfter.map(codemirrorStateCore.EditorSelection.fromJSON));
    }
    static fromTransaction(t, e) {
      let i = D;
      for (let e of t.startState.facet(b)) {
        let n = e(t);
        if (n.length) {
          i = i.concat(n);
        }
      }
      if (!i.length && t.changes.empty) {
        return null;
      } else {
        return new A(t.changes.invert(t.startState.doc), i, undefined, e || t.startState.selection, D);
      }
    }
    static selection(t) {
      return new A(undefined, D, undefined, undefined, t);
    }
  }
  function T(t, e, i, n) {
    let s = t.slice(e + 1 > i + 20 ? e - i - 1 : 0, e);
    s.push(n);
    return s;
  }
  function O(t, e) {
    if (t.length) {
      if (e.length) {
        return t.concat(e);
      } else {
        return t;
      }
    } else {
      return e;
    }
  }
  let D = [];
  function P(t, e) {
    if (!t.length) {
      return [A.selection([e])];
    }
    {
      let i = t[t.length - 1];
      let n = i.selectionsAfter.slice(Math.max(0, i.selectionsAfter.length - 200));
      if (n.length && n[n.length - 1].eq(e)) {
        return t;
      } else {
        n.push(e);
        return T(t, t.length - 1, 1000000000, i.setSelAfter(n));
      }
    }
  }
  function E(t, e) {
    if (!t.length) {
      return t;
    }
    let i = t.length;
    let n = D;
    while (i) {
      let s = function (t, e, i) {
        let n = O(t.selectionsAfter.length ? t.selectionsAfter.map(t => t.map(e)) : D, i);
        if (!t.changes) {
          return A.selection(n);
        }
        let s = t.changes.map(e);
        let r = e.mapDesc(t.changes, true);
        let l = t.mapped ? t.mapped.composeDesc(r) : r;
        return new A(s, codemirrorStateCore.EffectType.mapEffects(t.effects, e), l, t.startSelection.map(r), n);
      }(t[i - 1], e, n);
      if (s.changes && !s.changes.empty || s.effects.length) {
        let e = t.slice(0, i);
        e[i - 1] = s;
        return e;
      }
      e = s.mapped;
      i--;
      n = s.selectionsAfter;
    }
    if (n.length) {
      return [A.selection(n)];
    } else {
      return D;
    }
  }
  let R = /^(input\.type|delete)($|\.)/;
  class L {
    constructor(t, e, i = 0, n) {
      this.done = t;
      this.undone = e;
      this.prevTime = i;
      this.prevUserEvent = n;
    }
    isolate() {
      if (this.prevTime) {
        return new L(this.done, this.undone);
      } else {
        return this;
      }
    }
    addChanges(t, e, i, n, s) {
      var r;
      var l;
      let a;
      let h;
      let c = this.done;
      let u = c[c.length - 1];
      return new L(c = u && u.changes && !u.changes.empty && t.changes && (!i || R.test(i)) && (!u.selectionsAfter.length && e - this.prevTime < n.newGroupDelay && n.joinToEvent(s, (r = u.changes, l = t.changes, a = [], h = false, r.iterChangedRanges((t, e) => a.push(t, e)), l.iterChangedRanges((t, e, i, n) => {
        for (let t = 0; t < a.length;) {
          let e = a[t++];
          let s = a[t++];
          if (n >= e && i <= s) {
            h = true;
          }
        }
      }), h)) || i == "input.type.compose") ? T(c, c.length - 1, n.minDepth, new A(t.changes.compose(u.changes), O(codemirrorStateCore.EffectType.mapEffects(t.effects, u.changes), u.effects), u.mapped, u.startSelection, D)) : T(c, c.length, n.minDepth, t), D, e, i);
    }
    addSelection(t, e, i, n) {
      var s;
      let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : D;
      if (r.length > 0 && e - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && (s = r[r.length - 1]).ranges.length == t.ranges.length && s.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0) {
        return this;
      } else {
        return new L(P(this.done, t), this.undone, e, i);
      }
    }
    addMapping(t) {
      return new L(E(this.done, t), E(this.undone, t), this.prevTime, this.prevUserEvent);
    }
    pop(t, e, i) {
      let n = t == 0 ? this.done : this.undone;
      if (n.length == 0) {
        return null;
      }
      let s = n[n.length - 1];
      let r = s.selectionsAfter[0] || e.selection;
      if (i && s.selectionsAfter.length) {
        let i;
        let o;
        return e.update({
          selection: s.selectionsAfter[s.selectionsAfter.length - 1],
          annotations: g.of({
            side: t,
            rest: (i = n[n.length - 1], (o = n.slice())[n.length - 1] = i.setSelAfter(i.selectionsAfter.slice(0, i.selectionsAfter.length - 1)), o),
            selection: r
          }),
          userEvent: t == 0 ? "select.undo" : "select.redo",
          scrollIntoView: true
        });
      }
      if (!s.changes) {
        return null;
      }
      {
        let i = n.length == 1 ? D : n.slice(0, n.length - 1);
        if (s.mapped) {
          i = E(i, s.mapped);
        }
        return e.update({
          changes: s.changes,
          selection: s.startSelection,
          effects: s.effects,
          annotations: g.of({
            side: t,
            rest: i,
            selection: r
          }),
          filter: false,
          userEvent: t == 0 ? "undo" : "redo",
          scrollIntoView: true
        });
      }
    }
  }
  L.empty = new L(D, D);
  let B = [{
    key: "Mod-z",
    run: k,
    preventDefault: true
  }, {
    key: "Mod-y",
    mac: "Mod-Shift-z",
    run: S,
    preventDefault: true
  }, {
    linux: "Ctrl-Shift-z",
    run: S,
    preventDefault: true
  }, {
    key: "Mod-u",
    run: C,
    preventDefault: true
  }, {
    key: "Alt-u",
    mac: "Mod-Shift-u",
    run: M,
    preventDefault: true
  }];
  function I(t, e) {
    return codemirrorStateCore.EditorSelection.create(t.ranges.map(e), t.mainIndex);
  }
  function N(t, e) {
    return t.update({
      selection: e,
      scrollIntoView: true,
      userEvent: "select"
    });
  }
  function V({
    state: t,
    dispatch: e
  }, i) {
    let n = I(t.selection, i);
    return !n.eq(t.selection, true) && (e(N(t, n)), true);
  }
  function F(t, e) {
    return codemirrorStateCore.EditorSelection.cursor(e ? t.to : t.from);
  }
  function j(t, e) {
    return V(t, i => i.empty ? t.moveByChar(i, e) : F(i, e));
  }
  function H(t) {
    return t.textDirectionAt(t.state.selection.main.head) == codemirrorEditorViewCore.directionConstants.LTR;
  }
  let W = t => j(t, !H(t));
  let z = t => j(t, H(t));
  function q(t, e) {
    return V(t, i => i.empty ? t.moveByGroup(i, e) : F(i, e));
  }
  function $(t, e, i) {
    let n;
    let s;
    let r = codemirrorLanguageSupport.getTree(t).resolveInner(e.head);
    let l = i ? syntaxTreeCore.NodeTypeProp.closedBy : syntaxTreeCore.NodeTypeProp.openedBy;
    for (let n = e.head;;) {
      let e = i ? r.childAfter(n) : r.childBefore(n);
      if (!e) {
        break;
      }
      if (!function (t, e, i) {
        if (e.type.prop(i)) {
          return true;
        }
        let n = e.to - e.from;
        return n && (n > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
      }(t, e, l)) {
        n = i ? e.to : e.from;
      } else {
        r = e;
      }
    }
    s = r.type.prop(l) && (n = i ? codemirrorLanguageSupport.findMatchingBracket(t, r.from, 1) : codemirrorLanguageSupport.findMatchingBracket(t, r.to, -1)) && n.matched ? i ? n.end.to : n.end.from : i ? r.to : r.from;
    return codemirrorStateCore.EditorSelection.cursor(s, i ? -1 : 1);
  }
  function J(t, e) {
    return V(t, i => {
      if (!i.empty) {
        return F(i, e);
      }
      let n = t.moveVertically(i, e);
      if (n.head != i.head) {
        return n;
      } else {
        return t.moveToLineBoundary(i, e);
      }
    });
  }
  if (typeof Intl != "undefined") {
    Intl.Segmenter;
  }
  let _ = t => J(t, false);
  let K = t => J(t, true);
  function U(t) {
    let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2;
    let i = 0;
    let n = 0;
    let s;
    if (e) {
      for (let e of t.state.facet(codemirrorEditorViewCore.EditorView.scrollMargins)) {
        let s = e(t);
        if (s == null ? undefined : s.top) {
          i = Math.max(s == null ? undefined : s.top, i);
        }
        if (s == null ? undefined : s.bottom) {
          n = Math.max(s == null ? undefined : s.bottom, n);
        }
      }
      s = t.scrollDOM.clientHeight - i - n;
    } else {
      s = (t.dom.ownerDocument.defaultView || window).innerHeight;
    }
    return {
      marginTop: i,
      marginBottom: n,
      selfScroll: e,
      height: Math.max(t.defaultLineHeight, s - 5)
    };
  }
  function G(t, e) {
    let i;
    let n = U(t);
    let {
      state: s
    } = t;
    let r = I(s.selection, i => i.empty ? t.moveVertically(i, e, n.height) : F(i, e));
    if (r.eq(s.selection)) {
      return false;
    }
    if (n.selfScroll) {
      let e = t.coordsAtPos(s.selection.main.head);
      let o = t.scrollDOM.getBoundingClientRect();
      let a = o.top + n.marginTop;
      let h = o.bottom - n.marginBottom;
      if (e && e.top > a && e.bottom < h) {
        i = codemirrorEditorViewCore.EditorView.scrollIntoView(r.main.head, {
          y: "start",
          yMargin: e.top - a
        });
      }
    }
    t.dispatch(N(s, r), {
      effects: i
    });
    return true;
  }
  let Q = t => G(t, false);
  let X = t => G(t, true);
  function Y(t, e, i) {
    let n = t.lineBlockAt(e.head);
    let s = t.moveToLineBoundary(e, i);
    if (s.head == e.head && s.head != (i ? n.to : n.from)) {
      s = t.moveToLineBoundary(e, i, false);
    }
    if (!i && s.head == n.from && n.length) {
      let i = /^\s*/.exec(t.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
      if (i && e.head != n.from + i) {
        s = codemirrorStateCore.EditorSelection.cursor(n.from + i);
      }
    }
    return s;
  }
  function Z(t, e) {
    let i = I(t.state.selection, t => {
      let i = e(t);
      return codemirrorStateCore.EditorSelection.range(t.anchor, i.head, i.goalColumn, i.bidiLevel || undefined);
    });
    return !i.eq(t.state.selection) && (t.dispatch(N(t.state, i)), true);
  }
  function tt(t, e) {
    return Z(t, i => t.moveByChar(i, e));
  }
  let te = t => tt(t, !H(t));
  let ti = t => tt(t, H(t));
  function tn(t, e) {
    return Z(t, i => t.moveByGroup(i, e));
  }
  function ts(t, e) {
    return Z(t, i => t.moveVertically(i, e));
  }
  let tr = t => ts(t, false);
  let to = t => ts(t, true);
  function tl(t, e) {
    return Z(t, i => t.moveVertically(i, e, U(t).height));
  }
  let ta = t => tl(t, false);
  let th = t => tl(t, true);
  let tc = ({
    state: t,
    dispatch: e
  }) => {
    e(N(t, {
      anchor: 0
    }));
    return true;
  };
  let tu = ({
    state: t,
    dispatch: e
  }) => {
    e(N(t, {
      anchor: t.doc.length
    }));
    return true;
  };
  let tf = ({
    state: t,
    dispatch: e
  }) => {
    e(N(t, {
      anchor: t.selection.main.anchor,
      head: 0
    }));
    return true;
  };
  let td = ({
    state: t,
    dispatch: e
  }) => {
    e(N(t, {
      anchor: t.selection.main.anchor,
      head: t.doc.length
    }));
    return true;
  };
  function tp(t, e) {
    if (t.state.readOnly) {
      return false;
    }
    let i = "delete.selection";
    let {
      state: n
    } = t;
    let s = n.changeByRange(n => {
      let {
        from: s,
        to: r
      } = n;
      if (s == r) {
        let o = e(n);
        if (o < s) {
          i = "delete.backward";
          o = tm(t, o, false);
        } else if (o > s) {
          i = "delete.forward";
          o = tm(t, o, true);
        }
        s = Math.min(s, o);
        r = Math.max(r, o);
      } else {
        s = tm(t, s, false);
        r = tm(t, r, true);
      }
      if (s == r) {
        return {
          range: n
        };
      } else {
        return {
          changes: {
            from: s,
            to: r
          },
          range: codemirrorStateCore.EditorSelection.cursor(s, s < n.head ? -1 : 1)
        };
      }
    });
    return !s.changes.empty && (t.dispatch(n.update(s, {
      scrollIntoView: true,
      userEvent: i,
      effects: i == "delete.selection" ? codemirrorEditorViewCore.EditorView.announce.of(n.phrase("Selection deleted")) : undefined
    })), true);
  }
  function tm(t, e, i) {
    if (t instanceof codemirrorEditorViewCore.EditorView) {
      for (let n of t.state.facet(codemirrorEditorViewCore.EditorView.atomicRanges).map(e => e(t))) {
        n.between(e, e, (t, n) => {
          if (t < e && n > e) {
            e = i ? n : t;
          }
        });
      }
    }
    return e;
  }
  let tg = (t, e, i) => tp(t, n => {
    let s = n.from;
    let {
      state: r
    } = t;
    let l = r.doc.lineAt(s);
    let h;
    let c;
    if (i && !e && s > l.from && s < l.from + 200 && !/[^ \t]/.test(h = l.text.slice(0, s - l.from))) {
      if (h[h.length - 1] == "\t") {
        return s - 1;
      }
      let t = codemirrorStateCore.countColumn(h, r.tabSize) % codemirrorLanguageSupport.getIndentUnit(r) || codemirrorLanguageSupport.getIndentUnit(r);
      for (let e = 0; e < t && h[h.length - 1 - e] == " "; e++) {
        s--;
      }
      c = s;
    } else if ((c = codemirrorStateCore.graphemeBoundary(l.text, s - l.from, e, e) + l.from) == s && l.number != (e ? r.doc.lines : 1)) {
      c += e ? 1 : -1;
    } else if (!e && /[\ufe00-\ufe0f]/.test(l.text.slice(c - l.from, s - l.from))) {
      c = codemirrorStateCore.graphemeBoundary(l.text, c - l.from, false, false) + l.from;
    }
    return c;
  });
  let tv = t => tg(t, false, true);
  let tb = t => tg(t, true, false);
  let tw = (t, e) => tp(t, i => {
    let n = i.head;
    let {
      state: s
    } = t;
    let r = s.doc.lineAt(n);
    let l = s.charCategorizer(n);
    for (let t = null;;) {
      if (n == (e ? r.to : r.from)) {
        if (n == i.head && r.number != (e ? s.doc.lines : 1)) {
          n += e ? 1 : -1;
        }
        break;
      }
      let a = codemirrorStateCore.graphemeBoundary(r.text, n - r.from, e) + r.from;
      let h = r.text.slice(Math.min(n, a) - r.from, Math.max(n, a) - r.from);
      let c = l(h);
      if (t != null && c != t) {
        break;
      }
      if (h != " " || n != i.head) {
        t = c;
      }
      n = a;
    }
    return n;
  });
  let ty = t => tw(t, false);
  function tx(t) {
    let e = [];
    let i = -1;
    for (let n of t.selection.ranges) {
      let s = t.doc.lineAt(n.from);
      let r = t.doc.lineAt(n.to);
      if (!n.empty && n.to == r.from) {
        r = t.doc.lineAt(n.to - 1);
      }
      if (i >= s.number) {
        let t = e[e.length - 1];
        t.to = r.to;
        t.ranges.push(n);
      } else {
        e.push({
          from: s.from,
          to: r.to,
          ranges: [n]
        });
      }
      i = r.number + 1;
    }
    return e;
  }
  function tk(t, e, i) {
    if (t.readOnly) {
      return false;
    }
    let n = [];
    let s = [];
    for (let e of tx(t)) {
      if (i ? e.to == t.doc.length : e.from == 0) {
        continue;
      }
      let r = t.doc.lineAt(i ? e.to + 1 : e.from - 1);
      let l = r.length + 1;
      if (i) {
        n.push({
          from: e.to,
          to: r.to
        }, {
          from: e.from,
          insert: r.text + t.lineBreak
        });
        for (let i of e.ranges) {
          s.push(codemirrorStateCore.EditorSelection.range(Math.min(t.doc.length, i.anchor + l), Math.min(t.doc.length, i.head + l)));
        }
      } else {
        n.push({
          from: r.from,
          to: e.from
        }, {
          from: e.to,
          insert: t.lineBreak + r.text
        });
        for (let i of e.ranges) {
          s.push(codemirrorStateCore.EditorSelection.range(i.anchor - l, i.head - l));
        }
      }
    }
    return !!n.length && (e(t.update({
      changes: n,
      scrollIntoView: true,
      selection: codemirrorStateCore.EditorSelection.create(s, t.selection.mainIndex),
      userEvent: "move.line"
    })), true);
  }
  function tS(t, e, i) {
    if (t.readOnly) {
      return false;
    }
    let n = [];
    for (let e of tx(t)) {
      if (i) {
        n.push({
          from: e.from,
          insert: t.doc.slice(e.from, e.to) + t.lineBreak
        });
      } else {
        n.push({
          from: e.to,
          insert: t.lineBreak + t.doc.slice(e.from, e.to)
        });
      }
    }
    e(t.update({
      changes: n,
      scrollIntoView: true,
      userEvent: "input.copyline"
    }));
    return true;
  }
  let tC = tA(false);
  let tM = tA(true);
  function tA(t) {
    return ({
      state: e,
      dispatch: i
    }) => {
      if (e.readOnly) {
        return false;
      }
      let n = e.changeByRange(i => {
        let {
          from: n,
          to: s
        } = i;
        let r = e.doc.lineAt(n);
        let l = !t && n == s && function (t, e) {
          if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1))) {
            return {
              from: e,
              to: e
            };
          }
          let i = codemirrorLanguageSupport.getTree(t).resolveInner(e);
          let n = i.childBefore(e);
          let s = i.childAfter(e);
          let r;
          if (n && s && n.to <= e && s.from >= e && (r = n.type.prop(syntaxTreeCore.NodeTypeProp.closedBy)) && r.indexOf(s.name) > -1 && t.doc.lineAt(n.to).from == t.doc.lineAt(s.from).from && !/\S/.test(t.sliceDoc(n.to, s.from))) {
            return {
              from: n.to,
              to: s.from
            };
          } else {
            return null;
          }
        }(e, n);
        if (t) {
          n = s = (s <= r.to ? r : e.doc.lineAt(s)).to;
        }
        let c = new codemirrorLanguageSupport.IndentContext(e, {
          simulateBreak: n,
          simulateDoubleBreak: !!l
        });
        let u = codemirrorLanguageSupport.getIndent(c, n);
        for (u == null && (u = codemirrorStateCore.countColumn(/^\s*/.exec(e.doc.lineAt(n).text)[0], e.tabSize)); s < r.to && /\s/.test(r.text[s - r.from]);) {
          s++;
        }
        if (l) {
          ({
            from: n,
            to: s
          } = l);
        } else if (n > r.from && n < r.from + 100 && !/\S/.test(r.text.slice(0, n))) {
          n = r.from;
        }
        let f = ["", codemirrorLanguageSupport.createIndentString(e, u)];
        if (l) {
          f.push(codemirrorLanguageSupport.createIndentString(e, c.lineIndent(r.from, -1)));
        }
        return {
          changes: {
            from: n,
            to: s,
            insert: codemirrorStateCore.Text.of(f)
          },
          range: codemirrorStateCore.EditorSelection.cursor(n + 1 + f[1].length)
        };
      });
      i(e.update(n, {
        scrollIntoView: true,
        userEvent: "input"
      }));
      return true;
    };
  }
  function tT(t, e) {
    let i = -1;
    return t.changeByRange(n => {
      let s = [];
      for (let r = n.from; r <= n.to;) {
        let o = t.doc.lineAt(r);
        if (o.number > i && (n.empty || n.to > o.from)) {
          e(o, s, n);
          i = o.number;
        }
        r = o.to + 1;
      }
      let r = t.changes(s);
      return {
        changes: s,
        range: codemirrorStateCore.EditorSelection.range(r.mapPos(n.anchor, 1), r.mapPos(n.head, 1))
      };
    });
  }
  let tO = ({
    state: t,
    dispatch: e
  }) => !t.readOnly && (e(t.update(tT(t, (e, i) => {
    i.push({
      from: e.from,
      insert: t.facet(codemirrorLanguageSupport.indentUnitFacet)
    });
  }), {
    userEvent: "input.indent"
  })), true);
  let tD = ({
    state: t,
    dispatch: e
  }) => !t.readOnly && (e(t.update(tT(t, (e, i) => {
    let n = /^\s*/.exec(e.text)[0];
    if (!n) {
      return;
    }
    let s = codemirrorStateCore.countColumn(n, t.tabSize);
    let r = 0;
    let l = codemirrorLanguageSupport.createIndentString(t, Math.max(0, s - codemirrorLanguageSupport.getIndentUnit(t)));
    while (r < n.length && r < l.length && n.charCodeAt(r) == l.charCodeAt(r)) {
      r++;
    }
    i.push({
      from: e.from + r,
      to: e.from + n.length,
      insert: l.slice(r)
    });
  }), {
    userEvent: "delete.dedent"
  })), true);
  let tP = [{
    key: "Ctrl-b",
    run: W,
    shift: te,
    preventDefault: true
  }, {
    key: "Ctrl-f",
    run: z,
    shift: ti
  }, {
    key: "Ctrl-p",
    run: _,
    shift: tr
  }, {
    key: "Ctrl-n",
    run: K,
    shift: to
  }, {
    key: "Ctrl-a",
    run: t => V(t, e => codemirrorStateCore.EditorSelection.cursor(t.lineBlockAt(e.head).from, 1)),
    shift: t => Z(t, e => codemirrorStateCore.EditorSelection.cursor(t.lineBlockAt(e.head).from))
  }, {
    key: "Ctrl-e",
    run: t => V(t, e => codemirrorStateCore.EditorSelection.cursor(t.lineBlockAt(e.head).to, -1)),
    shift: t => Z(t, e => codemirrorStateCore.EditorSelection.cursor(t.lineBlockAt(e.head).to))
  }, {
    key: "Ctrl-d",
    run: tb
  }, {
    key: "Ctrl-h",
    run: tv
  }, {
    key: "Ctrl-k",
    run: t => tp(t, e => {
      let i = t.lineBlockAt(e.head).to;
      if (e.head < i) {
        return i;
      } else {
        return Math.min(t.state.doc.length, e.head + 1);
      }
    })
  }, {
    key: "Ctrl-Alt-h",
    run: ty
  }, {
    key: "Ctrl-o",
    run: ({
      state: t,
      dispatch: e
    }) => {
      if (t.readOnly) {
        return false;
      }
      let i = t.changeByRange(t => ({
        changes: {
          from: t.from,
          to: t.to,
          insert: codemirrorStateCore.Text.of(["", ""])
        },
        range: codemirrorStateCore.EditorSelection.cursor(t.from)
      }));
      e(t.update(i, {
        scrollIntoView: true,
        userEvent: "input"
      }));
      return true;
    }
  }, {
    key: "Ctrl-t",
    run: ({
      state: t,
      dispatch: e
    }) => {
      if (t.readOnly) {
        return false;
      }
      let i = t.changeByRange(e => {
        if (!e.empty || e.from == 0 || e.from == t.doc.length) {
          return {
            range: e
          };
        }
        let i = e.from;
        let n = t.doc.lineAt(i);
        let s = i == n.from ? i - 1 : codemirrorStateCore.graphemeBoundary(n.text, i - n.from, false) + n.from;
        let r = i == n.to ? i + 1 : codemirrorStateCore.graphemeBoundary(n.text, i - n.from, true) + n.from;
        return {
          changes: {
            from: s,
            to: r,
            insert: t.doc.slice(i, r).append(t.doc.slice(s, i))
          },
          range: codemirrorStateCore.EditorSelection.cursor(r)
        };
      });
      return !i.changes.empty && (e(t.update(i, {
        scrollIntoView: true,
        userEvent: "move.character"
      })), true);
    }
  }, {
    key: "Ctrl-v",
    run: X
  }];
  let tE = [{
    key: "Alt-ArrowLeft",
    mac: "Ctrl-ArrowLeft",
    run: t => V(t, e => $(t.state, e, !H(t))),
    shift: t => Z(t, e => $(t.state, e, !H(t)))
  }, {
    key: "Alt-ArrowRight",
    mac: "Ctrl-ArrowRight",
    run: t => V(t, e => $(t.state, e, H(t))),
    shift: t => Z(t, e => $(t.state, e, H(t)))
  }, {
    key: "Alt-ArrowUp",
    run: ({
      state: t,
      dispatch: e
    }) => tk(t, e, false)
  }, {
    key: "Shift-Alt-ArrowUp",
    run: ({
      state: t,
      dispatch: e
    }) => tS(t, e, false)
  }, {
    key: "Alt-ArrowDown",
    run: ({
      state: t,
      dispatch: e
    }) => tk(t, e, true)
  }, {
    key: "Shift-Alt-ArrowDown",
    run: ({
      state: t,
      dispatch: e
    }) => tS(t, e, true)
  }, {
    key: "Escape",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let i = t.selection;
      let n = null;
      if (i.ranges.length > 1) {
        n = codemirrorStateCore.EditorSelection.create([i.main]);
      } else if (!i.main.empty) {
        n = codemirrorStateCore.EditorSelection.create([codemirrorStateCore.EditorSelection.cursor(i.main.head)]);
      }
      return !!n && (e(N(t, n)), true);
    }
  }, {
    key: "Mod-Enter",
    run: tM
  }, {
    key: "Alt-l",
    mac: "Ctrl-l",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let i = tx(t).map(({
        from: e,
        to: i
      }) => codemirrorStateCore.EditorSelection.range(e, Math.min(i + 1, t.doc.length)));
      e(t.update({
        selection: codemirrorStateCore.EditorSelection.create(i),
        userEvent: "select"
      }));
      return true;
    }
  }, {
    key: "Mod-i",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let i = I(t.selection, e => {
        let i = codemirrorLanguageSupport.getTree(t);
        let n = i.resolveStack(e.from, 1);
        if (e.empty) {
          let t = i.resolveStack(e.from, -1);
          if (t.node.from >= n.node.from && t.node.to <= n.node.to) {
            n = t;
          }
        }
        for (let t = n; t; t = t.next) {
          let {
            node: i
          } = t;
          if ((i.from < e.from && i.to >= e.to || i.to > e.to && i.from <= e.from) && t.next) {
            return codemirrorStateCore.EditorSelection.range(i.to, i.from);
          }
        }
        return e;
      });
      return !i.eq(t.selection) && (e(N(t, i)), true);
    },
    preventDefault: true
  }, {
    key: "Mod-[",
    run: tD
  }, {
    key: "Mod-]",
    run: tO
  }, {
    key: "Mod-Alt-\\",
    run: ({
      state: t,
      dispatch: e
    }) => {
      if (t.readOnly) {
        return false;
      }
      let i = Object.create(null);
      let n = new codemirrorLanguageSupport.IndentContext(t, {
        overrideIndentation: t => {
          let e = i[t];
          if (e == null) {
            return -1;
          } else {
            return e;
          }
        }
      });
      let s = tT(t, (e, s, r) => {
        let o = codemirrorLanguageSupport.getIndent(n, e.from);
        if (o == null) {
          return;
        }
        if (!/\S/.test(e.text)) {
          o = 0;
        }
        let l = /^\s*/.exec(e.text)[0];
        let h = codemirrorLanguageSupport.createIndentString(t, o);
        if (l != h || r.from < e.from + l.length) {
          i[e.from] = o;
          s.push({
            from: e.from,
            to: e.from + l.length,
            insert: h
          });
        }
      });
      if (!s.changes.empty) {
        e(t.update(s, {
          userEvent: "indent"
        }));
      }
      return true;
    }
  }, {
    key: "Shift-Mod-k",
    run: t => {
      if (t.state.readOnly) {
        return false;
      }
      let {
        state: e
      } = t;
      let i = e.changes(tx(e).map(({
        from: t,
        to: i
      }) => {
        if (t > 0) {
          t--;
        } else if (i < e.doc.length) {
          i++;
        }
        return {
          from: t,
          to: i
        };
      }));
      let n = I(e.selection, e => {
        let i;
        if (t.lineWrapping) {
          let n = t.lineBlockAt(e.head);
          let s = t.coordsAtPos(e.head, e.assoc || 1);
          if (s) {
            i = n.bottom + t.documentTop - s.bottom + t.defaultLineHeight / 2;
          }
        }
        return t.moveVertically(e, true, i);
      }).map(i);
      t.dispatch({
        changes: i,
        selection: n,
        scrollIntoView: true,
        userEvent: "delete.line"
      });
      return true;
    }
  }, {
    key: "Shift-Mod-\\",
    run: ({
      state: t,
      dispatch: e
    }) => {
      let i;
      let n;
      i = false;
      n = I(t.selection, e => {
        let n = codemirrorLanguageSupport.findMatchingBracket(t, e.head, -1) || codemirrorLanguageSupport.findMatchingBracket(t, e.head, 1) || e.head > 0 && codemirrorLanguageSupport.findMatchingBracket(t, e.head - 1, 1) || e.head < t.doc.length && codemirrorLanguageSupport.findMatchingBracket(t, e.head + 1, -1);
        if (!n || !n.end) {
          return e;
        }
        i = true;
        let s = n.start.from == e.head ? n.end.to : n.end.from;
        return codemirrorStateCore.EditorSelection.cursor(s);
      });
      return !!i && (e(N(t, n)), true);
    }
  }, {
    key: "Mod-/",
    run: t => {
      let {
        state: e
      } = t;
      let i = e.doc.lineAt(e.selection.main.from);
      let n = p(t.state, i.from);
      if (n.line) {
        return u(t);
      } else {
        return !!n.block && d(t);
      }
    }
  }, {
    key: "Alt-A",
    run: f
  }, {
    key: "Ctrl-m",
    mac: "Shift-Alt-m",
    run: t => {
      t.setTabFocusMode();
      return true;
    }
  }].concat([{
    key: "ArrowLeft",
    run: W,
    shift: te,
    preventDefault: true
  }, {
    key: "Mod-ArrowLeft",
    mac: "Alt-ArrowLeft",
    run: t => q(t, !H(t)),
    shift: t => tn(t, !H(t)),
    preventDefault: true
  }, {
    mac: "Cmd-ArrowLeft",
    run: t => V(t, e => Y(t, e, !H(t))),
    shift: t => Z(t, e => Y(t, e, !H(t))),
    preventDefault: true
  }, {
    key: "ArrowRight",
    run: z,
    shift: ti,
    preventDefault: true
  }, {
    key: "Mod-ArrowRight",
    mac: "Alt-ArrowRight",
    run: t => q(t, H(t)),
    shift: t => tn(t, H(t)),
    preventDefault: true
  }, {
    mac: "Cmd-ArrowRight",
    run: t => V(t, e => Y(t, e, H(t))),
    shift: t => Z(t, e => Y(t, e, H(t))),
    preventDefault: true
  }, {
    key: "ArrowUp",
    run: _,
    shift: tr,
    preventDefault: true
  }, {
    mac: "Cmd-ArrowUp",
    run: tc,
    shift: tf
  }, {
    mac: "Ctrl-ArrowUp",
    run: Q,
    shift: ta
  }, {
    key: "ArrowDown",
    run: K,
    shift: to,
    preventDefault: true
  }, {
    mac: "Cmd-ArrowDown",
    run: tu,
    shift: td
  }, {
    mac: "Ctrl-ArrowDown",
    run: X,
    shift: th
  }, {
    key: "PageUp",
    run: Q,
    shift: ta
  }, {
    key: "PageDown",
    run: X,
    shift: th
  }, {
    key: "Home",
    run: t => V(t, e => Y(t, e, false)),
    shift: t => Z(t, e => Y(t, e, false)),
    preventDefault: true
  }, {
    key: "Mod-Home",
    run: tc,
    shift: tf
  }, {
    key: "End",
    run: t => V(t, e => Y(t, e, true)),
    shift: t => Z(t, e => Y(t, e, true)),
    preventDefault: true
  }, {
    key: "Mod-End",
    run: tu,
    shift: td
  }, {
    key: "Enter",
    run: tC,
    shift: tC
  }, {
    key: "Mod-a",
    run: ({
      state: t,
      dispatch: e
    }) => {
      e(t.update({
        selection: {
          anchor: 0,
          head: t.doc.length
        },
        userEvent: "select"
      }));
      return true;
    }
  }, {
    key: "Backspace",
    run: tv,
    shift: tv
  }, {
    key: "Delete",
    run: tb
  }, {
    key: "Mod-Backspace",
    mac: "Alt-Backspace",
    run: ty
  }, {
    key: "Mod-Delete",
    mac: "Alt-Delete",
    run: t => tw(t, true)
  }, {
    mac: "Mod-Backspace",
    run: t => tp(t, e => {
      let i = t.moveToLineBoundary(e, false).head;
      if (e.head > i) {
        return i;
      } else {
        return Math.max(0, e.head - 1);
      }
    })
  }, {
    mac: "Mod-Delete",
    run: t => tp(t, e => {
      let i = t.moveToLineBoundary(e, true).head;
      if (e.head < i) {
        return i;
      } else {
        return Math.min(t.state.doc.length, e.head + 1);
      }
    })
  }].concat(tP.map(t => ({
    mac: t.key,
    run: t.run,
    shift: t.shift
  }))));
  let tR = {
    key: "Tab",
    run: tO,
    shift: tD
  };
  var codemirrorSearchReplacePlugin = require("codemirror-search-replace-plugin") /*id: 862867*/;
  var codemirrorAutocompleteCore = require("codemirror-autocomplete-core") /*id: 122315*/;
  var domElementCreator = require("dom-element-creator") /*id: 476723*/;
  class tN {
    constructor(t, e, i) {
      this.from = t;
      this.to = e;
      this.diagnostic = i;
    }
  }
  class tV {
    constructor(t, e, i) {
      this.diagnostics = t;
      this.panel = e;
      this.selected = i;
    }
    static init(t, e, i) {
      let n = t;
      let s = i.facet(tK).markerFilter;
      if (s) {
        n = s(n, i);
      }
      let r = t.slice().sort((t, e) => t.from - e.from || t.to - e.to);
      let a = new codemirrorStateCore.RangeSetBuilder();
      let h = [];
      let c = 0;
      for (let t = 0;;) {
        let e;
        let n;
        let s = t == r.length ? null : r[t];
        if (!s && !h.length) {
          break;
        }
        for (h.length ? (e = c, n = h.reduce((t, e) => Math.min(t, e.to), s && s.from > e ? s.from : 100000000)) : (e = s.from, n = s.to, h.push(s), t++); t < r.length;) {
          let i = r[t];
          if (i.from == e && (i.to > i.from || i.to == e)) {
            h.push(i);
            t++;
            n = Math.min(i.to, n);
          } else {
            n = Math.min(i.from, n);
            break;
          }
        }
        let o = function (t) {
          let e = "hint";
          let i = 1;
          for (let s of t) {
            var n;
            let t = (n = s.severity) == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
            if (t > i) {
              i = t;
              e = s.severity;
            }
          }
          return e;
        }(h);
        if (h.some(t => t.from == t.to || t.from == t.to - 1 && i.doc.lineAt(t.from).to == t.from)) {
          a.add(e, e, codemirrorEditorViewCore.decorationClass.widget({
            widget: new tQ(o),
            diagnostics: h.slice()
          }));
        } else {
          let t = h.reduce((t, e) => e.markClass ? t + " " + e.markClass : t, "");
          a.add(e, n, codemirrorEditorViewCore.decorationClass.mark({
            class: "cm-lintRange cm-lintRange-" + o + t,
            diagnostics: h.slice(),
            inclusiveEnd: h.some(t => t.to > n)
          }));
        }
        c = n;
        for (let t = 0; t < h.length; t++) {
          if (h[t].to <= c) {
            h.splice(t--, 1);
          }
        }
      }
      let u = a.finish();
      return new tV(u, e, tF(u));
    }
  }
  function tF(t, e = null, i = 0) {
    let n = null;
    t.between(i, 1000000000, (t, i, {
      spec: s
    }) => {
      if (!e || !(s.diagnostics.indexOf(e) < 0)) {
        if (n) {
          if (s.diagnostics.indexOf(n.diagnostic) < 0) {
            return false;
          }
          n = new tN(n.from, i, n.diagnostic);
        } else {
          n = new tN(t, i, e || s.diagnostics[0]);
        }
      }
    });
    return n;
  }
  function tj(t, e) {
    let i = e.pos;
    let n = e.end || i;
    let s = t.state.facet(tK).hideOn(t, i, n);
    if (s != null) {
      return s;
    }
    let r = t.startState.doc.lineAt(e.pos);
    return !!t.effects.some(t => t.is(tH)) || !!t.changes.touchesRange(r.from, Math.max(r.to, n));
  }
  let tH = codemirrorStateCore.EffectType.define();
  let tW = codemirrorStateCore.EffectType.define();
  let tz = codemirrorStateCore.EffectType.define();
  let tq = codemirrorStateCore.PrecLevels.define({
    create: () => new tV(codemirrorEditorViewCore.decorationClass.none, null, null),
    update(t, e) {
      if (e.docChanged && t.diagnostics.size) {
        let i = t.diagnostics.map(e.changes);
        let n = null;
        let s = t.panel;
        if (t.selected) {
          let s = e.changes.mapPos(t.selected.from, 1);
          n = tF(i, t.selected.diagnostic, s) || tF(i, null, s);
        }
        if (!i.size && s && e.state.facet(tK).autoPanel) {
          s = null;
        }
        t = new tV(i, s, n);
      }
      for (let i of e.effects) {
        if (i.is(tH)) {
          let n = e.state.facet(tK).autoPanel ? i.value.length ? tY.open : null : t.panel;
          t = tV.init(i.value, n, e.state);
        } else if (i.is(tW)) {
          t = new tV(t.diagnostics, i.value ? tY.open : null, t.selected);
        } else if (i.is(tz)) {
          t = new tV(t.diagnostics, t.panel, i.value);
        }
      }
      return t;
    },
    provide: t => [codemirrorEditorViewCore.panelsFacet.from(t, t => t.panel), codemirrorEditorViewCore.EditorView.decorations.from(t, t => t.diagnostics)]
  });
  let t$ = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-lintRange cm-lintRange-active"
  });
  let tJ = t => {
    let e = t.state.field(tq, false);
    return !!e && !!e.panel && (t.dispatch({
      effects: tW.of(false)
    }), true);
  };
  let t_ = [{
    key: "Mod-Shift-m",
    run: t => {
      let e = t.state.field(tq, false);
      if (!e || !e.panel) {
        var i;
        var n;
        t.dispatch({
          effects: (i = t.state, n = [tW.of(true)], i.field(tq, false) ? n : n.concat(codemirrorStateCore.EffectType.appendConfig.of(t2)))
        });
      }
      let s = codemirrorEditorViewCore.activeLineGutter(t, tY.open);
      if (s) {
        s.dom.querySelector(".cm-panel-lint ul").focus();
      }
      return true;
    },
    preventDefault: true
  }, {
    key: "F8",
    run: t => {
      let e = t.state.field(tq, false);
      if (!e) {
        return false;
      }
      let i = t.state.selection.main;
      let n = e.diagnostics.iter(i.to + 1);
      return (!!n.value || !!(n = e.diagnostics.iter(0)).value && (n.from != i.from || n.to != i.to)) && (t.dispatch({
        selection: {
          anchor: n.from,
          head: n.to
        },
        scrollIntoView: true
      }), true);
    }
  }];
  let tK = codemirrorStateCore.Facet.define({
    combine: t => Object.assign({
      sources: t.map(t => t.source).filter(t => t != null)
    }, codemirrorStateCore.mergeConfig(t.map(t => t.config), {
      delay: 750,
      markerFilter: null,
      tooltipFilter: null,
      needsRefresh: null,
      hideOn: () => null
    }, {
      needsRefresh: (t, e) => t ? e ? i => t(i) || e(i) : t : e
    }))
  });
  function tU(t) {
    let e = [];
    if (t) {
      t: for (let {
        name: i
      } of t) {
        for (let t = 0; t < i.length; t++) {
          let n = i[t];
          if (/[a-zA-Z]/.test(n) && !e.some(t => t.toLowerCase() == n.toLowerCase())) {
            e.push(n);
            continue t;
          }
        }
        e.push("");
      }
    }
    return e;
  }
  function tG(t, e, i) {
    var n;
    let s = i ? tU(e.actions) : [];
    return domElementCreator.createDomElement("li", {
      class: "cm-diagnostic cm-diagnostic-" + e.severity
    }, domElementCreator.createDomElement("span", {
      class: "cm-diagnosticText"
    }, e.renderMessage ? e.renderMessage(t) : e.message), (n = e.actions) === null || n === undefined ? undefined : n.map((i, n) => {
      let r = false;
      let o = n => {
        n.preventDefault();
        if (r) {
          return;
        }
        r = true;
        let s = tF(t.state.field(tq).diagnostics, e);
        if (s) {
          i.apply(t, s.from, s.to);
        }
      };
      let {
        name: l
      } = i;
      let a = s[n] ? l.indexOf(s[n]) : -1;
      let h = a < 0 ? l : [l.slice(0, a), domElementCreator.createDomElement("u", l.slice(a, a + 1)), l.slice(a + 1)];
      return domElementCreator.createDomElement("button", {
        type: "button",
        class: "cm-diagnosticAction",
        onclick: o,
        onmousedown: o,
        "aria-label": ` Action: ${l}${a < 0 ? "" : ` (access key "${s[n]})"`}.`
      }, h);
    }), e.source && domElementCreator.createDomElement("div", {
      class: "cm-diagnosticSource"
    }, e.source));
  }
  class tQ extends codemirrorEditorViewCore.Decoration {
    constructor(t) {
      super();
      this.sev = t;
    }
    eq(t) {
      return t.sev == this.sev;
    }
    toDOM() {
      return domElementCreator.createDomElement("span", {
        class: "cm-lintPoint cm-lintPoint-" + this.sev
      });
    }
  }
  class tX {
    constructor(t, e) {
      this.diagnostic = e;
      this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16);
      this.dom = tG(t, e, true);
      this.dom.id = this.id;
      this.dom.setAttribute("role", "option");
    }
  }
  class tY {
    constructor(t) {
      this.view = t;
      this.items = [];
      this.list = domElementCreator.createDomElement("ul", {
        tabIndex: 0,
        role: "listbox",
        "aria-label": this.view.state.phrase("Diagnostics"),
        onkeydown: e => {
          if (e.keyCode == 27) {
            tJ(this.view);
            this.view.focus();
          } else if (e.keyCode == 38 || e.keyCode == 33) {
            this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
          } else if (e.keyCode == 40 || e.keyCode == 34) {
            this.moveSelection((this.selectedIndex + 1) % this.items.length);
          } else if (e.keyCode == 36) {
            this.moveSelection(0);
          } else if (e.keyCode == 35) {
            this.moveSelection(this.items.length - 1);
          } else if (e.keyCode == 13) {
            this.view.focus();
          } else {
            if (!(e.keyCode >= 65) || !(e.keyCode <= 90) || !(this.selectedIndex >= 0)) {
              return;
            }
            let {
              diagnostic: i
            } = this.items[this.selectedIndex];
            let n = tU(i.actions);
            for (let s = 0; s < n.length; s++) {
              if (n[s].toUpperCase().charCodeAt(0) == e.keyCode) {
                let e = tF(this.view.state.field(tq).diagnostics, i);
                if (e) {
                  i.actions[s].apply(t, e.from, e.to);
                }
              }
            }
          }
          e.preventDefault();
        },
        onclick: t => {
          for (let e = 0; e < this.items.length; e++) {
            if (this.items[e].dom.contains(t.target)) {
              this.moveSelection(e);
            }
          }
        }
      });
      this.dom = domElementCreator.createDomElement("div", {
        class: "cm-panel-lint"
      }, this.list, domElementCreator.createDomElement("button", {
        type: "button",
        name: "close",
        "aria-label": this.view.state.phrase("close"),
        onclick: () => tJ(this.view)
      }, "×"));
      this.update();
    }
    get selectedIndex() {
      let t = this.view.state.field(tq).selected;
      if (!t) {
        return -1;
      }
      for (let e = 0; e < this.items.length; e++) {
        if (this.items[e].diagnostic == t.diagnostic) {
          return e;
        }
      }
      return -1;
    }
    update() {
      let {
        diagnostics: t,
        selected: e
      } = this.view.state.field(tq);
      let i = 0;
      let n = false;
      let s = null;
      let r = new Set();
      for (t.between(0, this.view.state.doc.length, (t, o, {
        spec: l
      }) => {
        for (let t of l.diagnostics) {
          if (r.has(t)) {
            continue;
          }
          r.add(t);
          let o = -1;
          let l;
          for (let e = i; e < this.items.length; e++) {
            if (this.items[e].diagnostic == t) {
              o = e;
              break;
            }
          }
          if (o < 0) {
            l = new tX(this.view, t);
            this.items.splice(i, 0, l);
            n = true;
          } else {
            l = this.items[o];
            if (o > i) {
              this.items.splice(i, o - i);
              n = true;
            }
          }
          if (e && l.diagnostic == e.diagnostic) {
            if (!l.dom.hasAttribute("aria-selected")) {
              l.dom.setAttribute("aria-selected", "true");
              s = l;
            }
          } else if (l.dom.hasAttribute("aria-selected")) {
            l.dom.removeAttribute("aria-selected");
          }
          i++;
        }
      }); i < this.items.length && (this.items.length != 1 || !(this.items[0].diagnostic.from < 0));) {
        n = true;
        this.items.pop();
      }
      if (this.items.length == 0) {
        this.items.push(new tX(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        }));
        n = true;
      }
      if (s) {
        this.list.setAttribute("aria-activedescendant", s.id);
        this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: s.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: ({
            sel: t,
            panel: e
          }) => {
            let i = e.height / this.list.offsetHeight;
            if (t.top < e.top) {
              this.list.scrollTop -= (e.top - t.top) / i;
            } else if (t.bottom > e.bottom) {
              this.list.scrollTop += (t.bottom - e.bottom) / i;
            }
          }
        });
      } else if (this.selectedIndex < 0) {
        this.list.removeAttribute("aria-activedescendant");
      }
      if (n) {
        this.sync();
      }
    }
    sync() {
      let t = this.list.firstChild;
      function e() {
        let e = t;
        t = e.nextSibling;
        e.remove();
      }
      for (let i of this.items) {
        if (i.dom.parentNode == this.list) {
          while (t != i.dom) {
            e();
          }
          t = i.dom.nextSibling;
        } else {
          this.list.insertBefore(i.dom, t);
        }
      }
      while (t) {
        e();
      }
    }
    moveSelection(t) {
      if (this.selectedIndex < 0) {
        return;
      }
      let e = tF(this.view.state.field(tq).diagnostics, this.items[t].diagnostic);
      if (e) {
        this.view.dispatch({
          selection: {
            anchor: e.from,
            head: e.to
          },
          scrollIntoView: true,
          effects: tz.of(e)
        });
      }
    }
    static open(t) {
      return new tY(t);
    }
  }
  function tZ(t) {
    return function (t, e = "viewBox=\"0 0 40 40\"") {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`;
    }(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`, "width=\"6\" height=\"3\"");
  }
  let t0 = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-diagnostic": {
      padding: "3px 6px 3px 8px",
      marginLeft: "-1px",
      display: "block",
      whiteSpace: "pre-wrap"
    },
    ".cm-diagnostic-error": {
      borderLeft: "5px solid #d11"
    },
    ".cm-diagnostic-warning": {
      borderLeft: "5px solid orange"
    },
    ".cm-diagnostic-info": {
      borderLeft: "5px solid #999"
    },
    ".cm-diagnostic-hint": {
      borderLeft: "5px solid #66d"
    },
    ".cm-diagnosticAction": {
      font: "inherit",
      border: "none",
      padding: "2px 4px",
      backgroundColor: "#444",
      color: "white",
      borderRadius: "3px",
      marginLeft: "8px",
      cursor: "pointer"
    },
    ".cm-diagnosticSource": {
      fontSize: "70%",
      opacity: 0.7
    },
    ".cm-lintRange": {
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      paddingBottom: "0.7px"
    },
    ".cm-lintRange-error": {
      backgroundImage: tZ("#d11")
    },
    ".cm-lintRange-warning": {
      backgroundImage: tZ("orange")
    },
    ".cm-lintRange-info": {
      backgroundImage: tZ("#999")
    },
    ".cm-lintRange-hint": {
      backgroundImage: tZ("#66d")
    },
    ".cm-lintRange-active": {
      backgroundColor: "#ffdd9980"
    },
    ".cm-tooltip-lint": {
      padding: 0,
      margin: 0
    },
    ".cm-lintPoint": {
      position: "relative",
      "&:after": {
        content: "\"\"",
        position: "absolute",
        bottom: 0,
        left: "-2px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "4px solid #d11"
      }
    },
    ".cm-lintPoint-warning": {
      "&:after": {
        borderBottomColor: "orange"
      }
    },
    ".cm-lintPoint-info": {
      "&:after": {
        borderBottomColor: "#999"
      }
    },
    ".cm-lintPoint-hint": {
      "&:after": {
        borderBottomColor: "#66d"
      }
    },
    ".cm-panel.cm-panel-lint": {
      position: "relative",
      "& ul": {
        maxHeight: "100px",
        overflowY: "auto",
        "& [aria-selected]": {
          backgroundColor: "#ddd",
          "& u": {
            textDecoration: "underline"
          }
        },
        "&:focus [aria-selected]": {
          background_fallback: "#bdf",
          backgroundColor: "Highlight",
          color_fallback: "white",
          color: "HighlightText"
        },
        "& u": {
          textDecoration: "none"
        },
        padding: 0,
        margin: 0
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "2px",
        background: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0
      }
    }
  });
  codemirrorEditorViewCore.RangeValue;
  let t1 = codemirrorStateCore.EffectType.define();
  let t2 = [tq, codemirrorEditorViewCore.EditorView.decorations.compute([tq], t => {
    let {
      selected: e,
      panel: i
    } = t.field(tq);
    if (e && i && e.from != e.to) {
      return codemirrorEditorViewCore.decorationClass.set([t$.range(e.from, e.to)]);
    } else {
      return codemirrorEditorViewCore.decorationClass.none;
    }
  }), codemirrorEditorViewCore.crosshairCursor(function (t, e, i) {
    let {
      diagnostics: n
    } = t.state.field(tq);
    let s;
    let r = -1;
    let o = -1;
    n.between(e - +(i < 0), e + +(i > 0), (t, n, {
      spec: l
    }) => {
      if (e >= t && e <= n && (t == n || (e > t || i > 0) && (e < n || i < 0))) {
        s = l.diagnostics;
        r = t;
        o = n;
        return false;
      }
    });
    let l = t.state.facet(tK).tooltipFilter;
    if (s && l) {
      s = l(s, t.state);
    }
    if (s) {
      return {
        pos: r,
        end: o,
        above: t.state.doc.lineAt(r).to < o,
        create: () => {
          var e;
          var i;
          return {
            dom: (e = t, i = s, domElementCreator.createDomElement("ul", {
              class: "cm-tooltip-lint"
            }, i.map(t => tG(e, t, false))))
          };
        }
      };
    } else {
      return null;
    }
  }, {
    hideOn: tj
  }), t0];
  function t6(t = {}) {
    var {
      crosshairCursor: e = false
    } = t;
    var i = [];
    if (t.closeBracketsKeymap !== false) {
      i = i.concat(codemirrorAutocompleteCore.closeBracketsKeymap);
    }
    if (t.defaultKeymap !== false) {
      i = i.concat(tE);
    }
    if (t.searchKeymap !== false) {
      i = i.concat(codemirrorSearchReplacePlugin.searchKeyBindings);
    }
    if (t.historyKeymap !== false) {
      i = i.concat(B);
    }
    if (t.foldKeymap !== false) {
      i = i.concat(codemirrorLanguageSupport.foldKeymap);
    }
    if (t.completionKeymap !== false) {
      i = i.concat(codemirrorAutocompleteCore.completionKeymap);
    }
    if (t.lintKeymap !== false) {
      i = i.concat(t_);
    }
    var n = [];
    if (t.lineNumbers !== false) {
      n.push(codemirrorEditorViewCore.lineNumbers());
    }
    if (t.highlightActiveLineGutter !== false) {
      n.push(codemirrorEditorViewCore.activeLine());
    }
    if (t.highlightSpecialChars !== false) {
      n.push(codemirrorEditorViewCore.specialChars());
    }
    if (t.history !== false) {
      n.push(function (t = {}) {
        return [y, w.of(t), codemirrorEditorViewCore.EditorView.domEventHandlers({
          beforeinput(t, e) {
            let i = t.inputType == "historyUndo" ? k : t.inputType == "historyRedo" ? S : null;
            return !!i && (t.preventDefault(), i(e));
          }
        })];
      }());
    }
    if (t.foldGutter !== false) {
      n.push(codemirrorLanguageSupport.foldGutter());
    }
    if (t.drawSelection !== false) {
      n.push(codemirrorEditorViewCore.cursorConfig());
    }
    if (t.dropCursor !== false) {
      n.push(codemirrorEditorViewCore.dropCursor());
    }
    if (t.allowMultipleSelections !== false) {
      n.push(codemirrorStateCore.EditorState.allowMultipleSelections.of(true));
    }
    if (t.indentOnInput !== false) {
      n.push(codemirrorLanguageSupport.indentOnInput());
    }
    if (t.syntaxHighlighting !== false) {
      n.push(codemirrorLanguageSupport.highlightTheme(codemirrorLanguageSupport.defaultHighlightStyle, {
        fallback: true
      }));
    }
    if (t.bracketMatching !== false) {
      n.push(codemirrorLanguageSupport.bracketMatching());
    }
    if (t.closeBrackets !== false) {
      n.push(codemirrorAutocompleteCore.setupCloseBrackets());
    }
    if (t.autocompletion !== false) {
      n.push(codemirrorAutocompleteCore.autocompleteExtension());
    }
    if (t.rectangularSelection !== false) {
      n.push(codemirrorEditorViewCore.columnSelection());
    }
    if (e !== false) {
      n.push(codemirrorEditorViewCore.textDirection());
    }
    if (t.highlightActiveLine !== false) {
      n.push(codemirrorEditorViewCore.errorHandler());
    }
    if (t.highlightSelectionMatches !== false) {
      n.push(codemirrorSearchReplacePlugin.getSearchConfig());
    }
    if (t.tabSize && typeof t.tabSize == "number") {
      n.push(codemirrorLanguageSupport.indentUnitFacet.of(" ".repeat(t.tabSize)));
    }
    return n.concat([codemirrorEditorViewCore.keymapFacet.of(i.flat())]).filter(Boolean);
  }
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  let t5 = "#e06c75";
  let t8 = "#abb2bf";
  let t4 = "#7d8799";
  let t9 = "#d19a66";
  let t7 = "#2c313a";
  let et = "#282c34";
  let ee = "#353a42";
  let ei = "#528bff";
  let en = codemirrorEditorViewCore.EditorView.theme({
    "&": {
      color: t8,
      backgroundColor: et
    },
    ".cm-content": {
      caretColor: ei
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: ei
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
      backgroundColor: "#3E4451"
    },
    ".cm-panels": {
      backgroundColor: "#21252b",
      color: t8
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: "2px solid black"
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: "2px solid black"
    },
    ".cm-searchMatch": {
      backgroundColor: "#72a1ff59",
      outline: "1px solid #457dff"
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: "#6199ff2f"
    },
    ".cm-activeLine": {
      backgroundColor: "#6699ff0b"
    },
    ".cm-selectionMatch": {
      backgroundColor: "#aafe661a"
    },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: "#bad0f847"
    },
    ".cm-gutters": {
      backgroundColor: et,
      color: t4,
      border: "none"
    },
    ".cm-activeLineGutter": {
      backgroundColor: t7
    },
    ".cm-foldPlaceholder": {
      backgroundColor: "transparent",
      border: "none",
      color: "#ddd"
    },
    ".cm-tooltip": {
      border: "none",
      backgroundColor: ee
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: ee,
      borderBottomColor: ee
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: t7,
        color: t8
      }
    }
  }, {
    dark: true
  });
  let es = codemirrorLanguageSupport.HighlightStyle.define([{
    tag: syntaxHighlightTags.defaultTags.keyword,
    color: "#c678dd"
  }, {
    tag: [syntaxHighlightTags.defaultTags.name, syntaxHighlightTags.defaultTags.deleted, syntaxHighlightTags.defaultTags.character, syntaxHighlightTags.defaultTags.propertyName, syntaxHighlightTags.defaultTags.macroName],
    color: t5
  }, {
    tag: [syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.variableName), syntaxHighlightTags.defaultTags.labelName],
    color: "#61afef"
  }, {
    tag: [syntaxHighlightTags.defaultTags.color, syntaxHighlightTags.defaultTags.constant(syntaxHighlightTags.defaultTags.name), syntaxHighlightTags.defaultTags.standard(syntaxHighlightTags.defaultTags.name)],
    color: t9
  }, {
    tag: [syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.name), syntaxHighlightTags.defaultTags.separator],
    color: t8
  }, {
    tag: [syntaxHighlightTags.defaultTags.typeName, syntaxHighlightTags.defaultTags.className, syntaxHighlightTags.defaultTags.number, syntaxHighlightTags.defaultTags.changed, syntaxHighlightTags.defaultTags.annotation, syntaxHighlightTags.defaultTags.modifier, syntaxHighlightTags.defaultTags.self, syntaxHighlightTags.defaultTags.namespace],
    color: "#e5c07b"
  }, {
    tag: [syntaxHighlightTags.defaultTags.operator, syntaxHighlightTags.defaultTags.operatorKeyword, syntaxHighlightTags.defaultTags.url, syntaxHighlightTags.defaultTags.escape, syntaxHighlightTags.defaultTags.regexp, syntaxHighlightTags.defaultTags.link, syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.string)],
    color: "#56b6c2"
  }, {
    tag: [syntaxHighlightTags.defaultTags.meta, syntaxHighlightTags.defaultTags.comment],
    color: t4
  }, {
    tag: syntaxHighlightTags.defaultTags.strong,
    fontWeight: "bold"
  }, {
    tag: syntaxHighlightTags.defaultTags.emphasis,
    fontStyle: "italic"
  }, {
    tag: syntaxHighlightTags.defaultTags.strikethrough,
    textDecoration: "line-through"
  }, {
    tag: syntaxHighlightTags.defaultTags.link,
    color: t4,
    textDecoration: "underline"
  }, {
    tag: syntaxHighlightTags.defaultTags.heading,
    fontWeight: "bold",
    color: t5
  }, {
    tag: [syntaxHighlightTags.defaultTags.atom, syntaxHighlightTags.defaultTags.bool, syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.variableName)],
    color: t9
  }, {
    tag: [syntaxHighlightTags.defaultTags.processingInstruction, syntaxHighlightTags.defaultTags.string, syntaxHighlightTags.defaultTags.inserted],
    color: "#98c379"
  }, {
    tag: syntaxHighlightTags.defaultTags.invalid,
    color: "#ffffff"
  }]);
  let er = [en, codemirrorLanguageSupport.highlightTheme(es)];
  var eo = codemirrorEditorViewCore.EditorView.theme({
    "&": {
      backgroundColor: "#fff"
    }
  }, {
    dark: false
  });
  function el(t = {}) {
    var {
      indentWithTab: e = true,
      editable: i = true,
      readOnly: n = false,
      theme: s = "light",
      placeholder: r = "",
      basicSetup: a = true
    } = t;
    var h = [];
    if (e) {
      h.unshift(codemirrorEditorViewCore.keymapFacet.of([tR]));
    }
    if (a) {
      if (typeof a == "boolean") {
        h.unshift(t6());
      } else {
        h.unshift(t6(a));
      }
    }
    if (r) {
      h.unshift(codemirrorEditorViewCore.placeholder(r));
    }
    switch (s) {
      case "light":
        h.push(eo);
        break;
      case "dark":
        h.push(er);
        break;
      case "none":
        break;
      default:
        h.push(s);
    }
    if (i === false) {
      h.push(codemirrorEditorViewCore.EditorView.editable.of(false));
    }
    if (n) {
      h.push(codemirrorStateCore.EditorState.readOnly.of(true));
    }
    return [...h];
  }
  var ea = t => ({
    line: t.state.doc.lineAt(t.state.selection.main.from),
    lineCount: t.state.doc.lines,
    lineBreak: t.state.lineBreak,
    length: t.state.doc.length,
    readOnly: t.state.readOnly,
    tabSize: t.state.tabSize,
    selection: t.state.selection,
    selectionAsSingle: t.state.selection.asSingle().main,
    ranges: t.state.selection.ranges,
    selectionCode: t.state.sliceDoc(t.state.selection.main.from, t.state.selection.main.to),
    selections: t.state.selection.ranges.map(e => t.state.sliceDoc(e.from, e.to)),
    selectedText: t.state.selection.ranges.some(t => !t.empty)
  });
  var eh = codemirrorStateCore.AnnotationType.define();
  var ec = [];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var ef = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"];
  var ed = reactCoreLibraryReexport.forwardRef((t, e) => {
    var {
      className: i,
      value: a = "",
      selection: h,
      extensions: c = [],
      onChange: u,
      onStatistics: f,
      onCreateEditor: d,
      onUpdate: p,
      autoFocus: m,
      theme: g = "light",
      height: v,
      minHeight: b,
      maxHeight: w,
      width: y,
      minWidth: x,
      maxWidth: k,
      basicSetup: S,
      placeholder: C,
      indentWithTab: M,
      editable: A,
      readOnly: T,
      root: O,
      initialState: D
    } = t;
    var P = objectOmitUtil_3.omitKeys(t, ef);
    var E = reactCoreLibraryReexport.useRef(null);
    var {
      state: R,
      view: L,
      container: B
    } = function (t) {
      var {
        value: e,
        selection: i,
        onChange: n,
        onStatistics: s,
        onCreateEditor: a,
        onUpdate: h,
        extensions: c = ec,
        autoFocus: u,
        theme: f = "light",
        height: d = null,
        minHeight: p = null,
        maxHeight: m = null,
        width: g = null,
        minWidth: v = null,
        maxWidth: b = null,
        placeholder: w = "",
        editable: y = true,
        readOnly: x = false,
        indentWithTab: k = true,
        basicSetup: S = true,
        root: C,
        initialState: M
      } = t;
      var [A, T] = reactCoreLibraryReexport.useState();
      var [O, D] = reactCoreLibraryReexport.useState();
      var [P, E] = reactCoreLibraryReexport.useState();
      var R = codemirrorEditorViewCore.EditorView.theme({
        "&": {
          height: d,
          minHeight: p,
          maxHeight: m,
          width: g,
          minWidth: v,
          maxWidth: b
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      });
      var L = [codemirrorEditorViewCore.EditorView.updateListener.of(t => {
        if (t.docChanged && typeof n == "function" && !t.transactions.some(t => t.annotation(eh))) {
          n(t.state.doc.toString(), t);
        }
        if (s) {
          s(ea(t));
        }
      }), R, ...el({
        theme: f,
        editable: y,
        readOnly: x,
        placeholder: w,
        indentWithTab: k,
        basicSetup: S
      })];
      if (h && typeof h == "function") {
        L.push(codemirrorEditorViewCore.EditorView.updateListener.of(h));
      }
      L = L.concat(c);
      reactCoreLibraryReexport.useEffect(() => {
        if (A && !P) {
          var t = {
            doc: e,
            selection: i,
            extensions: L
          };
          var n = M ? codemirrorStateCore.EditorState.fromJSON(M.json, t, M.fields) : codemirrorStateCore.EditorState.create(t);
          E(n);
          if (!O) {
            var s = new codemirrorEditorViewCore.EditorView({
              state: n,
              parent: A,
              root: C
            });
            D(s);
            if (a) {
              a(s, n);
            }
          }
        }
        return () => {
          if (O) {
            E(undefined);
            D(undefined);
          }
        };
      }, [A, P]);
      reactCoreLibraryReexport.useEffect(() => T(t.container), [t.container]);
      reactCoreLibraryReexport.useEffect(() => () => {
        if (O) {
          O.destroy();
          D(undefined);
        }
      }, [O]);
      reactCoreLibraryReexport.useEffect(() => {
        if (u && O) {
          O.focus();
        }
      }, [u, O]);
      reactCoreLibraryReexport.useEffect(() => {
        if (O) {
          O.dispatch({
            effects: codemirrorStateCore.EffectType.reconfigure.of(L)
          });
        }
      }, [f, c, d, p, m, g, v, b, w, y, x, k, S, n, h]);
      reactCoreLibraryReexport.useEffect(() => {
        if (e !== undefined) {
          var t = O ? O.state.doc.toString() : "";
          if (O && e !== t) {
            O.dispatch({
              changes: {
                from: 0,
                to: t.length,
                insert: e || ""
              },
              annotations: [eh.of(true)]
            });
          }
        }
      }, [e, O]);
      return {
        state: P,
        setState: E,
        view: O,
        setView: D,
        container: A,
        setContainer: T
      };
    }({
      container: E.current,
      root: O,
      value: a,
      autoFocus: m,
      theme: g,
      height: v,
      minHeight: b,
      maxHeight: w,
      width: y,
      minWidth: x,
      maxWidth: k,
      basicSetup: S,
      placeholder: C,
      indentWithTab: M,
      editable: A,
      readOnly: T,
      selection: h,
      onChange: u,
      onStatistics: f,
      onCreateEditor: d,
      onUpdate: p,
      extensions: c,
      initialState: D
    });
    reactCoreLibraryReexport.useImperativeHandle(e, () => ({
      editor: E.current,
      state: R,
      view: L
    }), [E, B, R, L]);
    if (typeof a != "string") {
      throw Error("value must be typeof string but got " + typeof a);
    }
    var I = typeof g == "string" ? "cm-theme-" + g : "cm-theme";
    return reactJsxRuntimeCoreReexport.jsx("div", objectAssignUtil.objectAssign({
      ref: E,
      className: "" + I + (i ? " " + i : "")
    }, P));
  });
  ed.displayName = "CodeMirror";
  var ep = ed;
  require.d(exports, {
    EditorSelection: function () {
      return codemirrorStateCore.EditorSelection;
    },
    Text: function () {
      return codemirrorStateCore.Text;
    },
    RangeValue: function () {
      return codemirrorEditorViewCore.RangeValue;
    },
    RangeSet: function () {
      return codemirrorStateCore.RangeSet;
    },
    Plugin: function () {
      return codemirrorEditorViewCore.Plugin;
    },
    EditorView: function () {
      return codemirrorEditorViewCore.EditorView;
    },
    createEditorExtensions: function () {
      return t6;
    },
    EditorState: function () {
      return codemirrorStateCore.EditorState;
    },
    tooltipsFacet: function () {
      return codemirrorEditorViewCore.tooltipsFacet;
    },
    PrecLevels: function () {
      return codemirrorStateCore.PrecLevels;
    },
    CodeMirror: function () {
      return ep;
    },
    keyBindingHandler: function () {
      return codemirrorEditorViewCore.keyBindingHandler;
    },
    gutterMarkers: function () {
      return codemirrorEditorViewCore.gutterMarkers;
    },
    EffectType: function () {
      return codemirrorStateCore.EffectType;
    }
  });
}