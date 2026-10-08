// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B1' to 'completionKeymap'
// - Renamed export 'GA' to 'closeBracketsKeymap'
// - Renamed export 'Gn' to 'snippetTemplate'
// - Renamed export 'Mb' to 'createCompletionSource'
// - Renamed export 'eC' to 'contextFilter'
// - Renamed export 'vQ' to 'setupCloseBrackets'
// - Renamed export 'ys' to 'autocompleteExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 122315
         */
module.exports = function (module, exports, require) {
  var codemirrorStateCore = require("codemirror-state-core") /*id: 980017*/;
  var codemirrorEditorViewCore = require("codemirror-editor-view-core") /*id: 928053*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  class o {
    constructor(t, e, i, n) {
      this.state = t;
      this.pos = e;
      this.explicit = i;
      this.view = n;
      this.abortListeners = [];
      this.abortOnDocChange = false;
    }
    tokenBefore(t) {
      let e = codemirrorLanguageSupport.getTree(this.state).resolveInner(this.pos, -1);
      while (e && t.indexOf(e.name) < 0) {
        e = e.parent;
      }
      if (e) {
        return {
          from: e.from,
          to: this.pos,
          text: this.state.sliceDoc(e.from, this.pos),
          type: e.type
        };
      } else {
        return null;
      }
    }
    matchBefore(t) {
      let e = this.state.doc.lineAt(this.pos);
      let i = Math.max(e.from, this.pos - 250);
      let n = e.text.slice(i - e.from, this.pos - e.from);
      let s = n.search(f(t, false));
      if (s < 0) {
        return null;
      } else {
        return {
          from: i + s,
          to: this.pos,
          text: n.slice(s)
        };
      }
    }
    get aborted() {
      return this.abortListeners == null;
    }
    addEventListener(t, e, i) {
      if (t == "abort" && this.abortListeners) {
        this.abortListeners.push(e);
        if (i && i.onDocChange) {
          this.abortOnDocChange = true;
        }
      }
    }
  }
  function l(t) {
    let e = Object.keys(t).join("");
    let i = /\w/.test(e);
    if (i) {
      e = e.replace(/\w/g, "");
    }
    return `[${i ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
  }
  function a(t) {
    let e = t.map(t => typeof t == "string" ? {
      label: t
    } : t);
    let [i, n] = e.every(t => /^\w+$/.test(t.label)) ? [/\w*$/, /\w+$/] : function (t) {
      let e = Object.create(null);
      let i = Object.create(null);
      for (let {
        label: n
      } of t) {
        e[n[0]] = true;
        for (let t = 1; t < n.length; t++) {
          i[n[t]] = true;
        }
      }
      let n = l(e) + l(i) + "*$";
      return [RegExp("^" + n), new RegExp(n)];
    }(e);
    return t => {
      let s = t.matchBefore(n);
      if (s || t.explicit) {
        return {
          from: s ? s.from : t.pos,
          options: e,
          validFor: i
        };
      } else {
        return null;
      }
    };
  }
  function h(t, e) {
    return i => {
      for (let e = codemirrorLanguageSupport.getTree(i.state).resolveInner(i.pos, -1); e; e = e.parent) {
        if (t.indexOf(e.name) > -1) {
          return null;
        }
        if (e.type.isTop) {
          break;
        }
      }
      return e(i);
    };
  }
  class c {
    constructor(t, e, i, n) {
      this.completion = t;
      this.source = e;
      this.match = i;
      this.score = n;
    }
  }
  function u(t) {
    return t.selection.main.from;
  }
  function f(t, e) {
    let {
      source: n
    } = t;
    let s = e && n[0] != "^";
    let r = n[n.length - 1] != "$";
    if (s || r) {
      return RegExp(`${s ? "^" : ""}(?:${n})${r ? "$" : ""}`, t.flags ?? (t.ignoreCase ? "i" : ""));
    } else {
      return t;
    }
  }
  let d = codemirrorStateCore.AnnotationType.define();
  let p = new WeakMap();
  function m(t) {
    if (!Array.isArray(t)) {
      return t;
    }
    let e = p.get(t);
    if (!e) {
      p.set(t, e = a(t));
    }
    return e;
  }
  let g = codemirrorStateCore.EffectType.define();
  let v = codemirrorStateCore.EffectType.define();
  class b {
    constructor(t) {
      this.pattern = t;
      this.chars = [];
      this.folded = [];
      this.any = [];
      this.precise = [];
      this.byWord = [];
      this.score = 0;
      this.matched = [];
      for (let e = 0; e < t.length;) {
        let i = codemirrorStateCore.charCodeAt(t, e);
        let s = codemirrorStateCore.charLength(i);
        this.chars.push(i);
        let r = t.slice(e, e + s);
        let o = r.toUpperCase();
        this.folded.push(codemirrorStateCore.charCodeAt(o == r ? r.toLowerCase() : o, 0));
        e += s;
      }
      this.astral = t.length != this.chars.length;
    }
    ret(t, e) {
      this.score = t;
      this.matched = e;
      return this;
    }
    match(t) {
      if (this.pattern.length == 0) {
        return this.ret(-100, []);
      }
      if (t.length < this.pattern.length) {
        return null;
      }
      let {
        chars: e,
        folded: i,
        any: s,
        precise: r,
        byWord: o
      } = this;
      if (e.length == 1) {
        let s = codemirrorStateCore.charCodeAt(t, 0);
        let r = codemirrorStateCore.charLength(s);
        let o = r == t.length ? 0 : -100;
        if (s == e[0]) ;else {
          if (s != i[0]) {
            return null;
          }
          o += -200;
        }
        return this.ret(o, [0, r]);
      }
      let l = t.indexOf(this.pattern);
      if (l == 0) {
        return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
      }
      let a = e.length;
      let h = 0;
      if (l < 0) {
        for (let r = 0, o = Math.min(t.length, 200); r < o && h < a;) {
          let o = codemirrorStateCore.charCodeAt(t, r);
          if (o == e[h] || o == i[h]) {
            s[h++] = r;
          }
          r += codemirrorStateCore.charLength(o);
        }
        if (h < a) {
          return null;
        }
      }
      let c = 0;
      let u = 0;
      let f = false;
      let d = 0;
      let p = -1;
      let m = -1;
      let g = /[a-z]/.test(t);
      let v = true;
      for (let s = 0, h = Math.min(t.length, 200), b = 0; s < h && u < a;) {
        let h = codemirrorStateCore.charCodeAt(t, s);
        if (l < 0) {
          if (c < a && h == e[c]) {
            r[c++] = s;
          }
          if (d < a) {
            if (h == e[d] || h == i[d]) {
              if (d == 0) {
                p = s;
              }
              m = s + 1;
              d++;
            } else {
              d = 0;
            }
          }
        }
        let w;
        let y = h < 255 ? h >= 48 && h <= 57 || h >= 97 && h <= 122 ? 2 : +(h >= 65 && h <= 90) : (w = codemirrorStateCore.fromCharCode(h)) != w.toLowerCase() ? 1 : (w != w.toUpperCase()) * 2;
        if (!s || y == 1 && g || b == 0 && y != 0) {
          if (e[u] == h || i[u] == h && (f = true)) {
            o[u++] = s;
          } else if (o.length) {
            v = false;
          }
        }
        b = y;
        s += codemirrorStateCore.charLength(h);
      }
      if (u == a && o[0] == 0 && v) {
        return this.result(-100 + (f ? -200 : 0), o, t);
      } else if (d == a && p == 0) {
        return this.ret(-200 - t.length + (m == t.length ? 0 : -100), [0, m]);
      } else if (l > -1) {
        return this.ret(-700 - t.length, [l, l + this.pattern.length]);
      } else if (d == a) {
        return this.ret(-900 - t.length, [p, m]);
      } else if (u == a) {
        return this.result(-100 + (f ? -200 : 0) + -700 + (v ? 0 : -1100), o, t);
      } else if (e.length == 2) {
        return null;
      } else {
        return this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
      }
    }
    result(t, e, i) {
      let s = [];
      let r = 0;
      for (let t of e) {
        let e = t + (this.astral ? codemirrorStateCore.charLength(codemirrorStateCore.charCodeAt(i, t)) : 1);
        if (r && s[r - 1] == t) {
          s[r - 1] = e;
        } else {
          s[r++] = t;
          s[r++] = e;
        }
      }
      return this.ret(t - i.length, s);
    }
  }
  class w {
    constructor(t) {
      this.pattern = t;
      this.matched = [];
      this.score = 0;
      this.folded = t.toLowerCase();
    }
    match(t) {
      if (t.length < this.pattern.length) {
        return null;
      }
      let e = t.slice(0, this.pattern.length);
      let i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
      if (i == null) {
        return null;
      } else {
        this.matched = [0, e.length];
        this.score = i + (t.length == this.pattern.length ? 0 : -100);
        return this;
      }
    }
  }
  let y = codemirrorStateCore.Facet.define({
    combine: t => codemirrorStateCore.mergeConfig(t, {
      activateOnTyping: true,
      activateOnCompletion: () => false,
      activateOnTypingDelay: 100,
      selectOnOpen: true,
      override: null,
      closeOnBlur: true,
      maxRenderedOptions: 100,
      defaultKeymap: true,
      tooltipClass: () => "",
      optionClass: () => "",
      aboveCursor: false,
      icons: true,
      addToOptions: [],
      positionInfo: k,
      filterStrict: false,
      compareCompletions: (t, e) => t.label.localeCompare(e.label),
      interactionDelay: 75,
      updateSyncTime: 100
    }, {
      defaultKeymap: (t, e) => t && e,
      closeOnBlur: (t, e) => t && e,
      icons: (t, e) => t && e,
      tooltipClass: (t, e) => i => x(t(i), e(i)),
      optionClass: (t, e) => i => x(t(i), e(i)),
      addToOptions: (t, e) => t.concat(e),
      filterStrict: (t, e) => t || e
    })
  });
  function x(t, e) {
    if (t) {
      if (e) {
        return t + " " + e;
      } else {
        return t;
      }
    } else {
      return e;
    }
  }
  function k(t, e, i, n, r, o) {
    let l = t.textDirection == codemirrorEditorViewCore.directionConstants.RTL;
    let a = l;
    let h = false;
    let c = "top";
    let u;
    let f;
    let d = e.left - r.left;
    let p = r.right - e.right;
    let m = n.right - n.left;
    let g = n.bottom - n.top;
    if (a && d < Math.min(m, p)) {
      a = false;
    } else if (!a && p < Math.min(m, d)) {
      a = true;
    }
    if (m <= (a ? d : p)) {
      u = Math.max(r.top, Math.min(i.top, r.bottom - g)) - e.top;
      f = Math.min(400, a ? d : p);
    } else {
      h = true;
      f = Math.min(400, (l ? e.right : r.right - e.left) - 30);
      let t = r.bottom - e.bottom;
      if (t >= g || t > e.top) {
        u = i.bottom - e.top;
      } else {
        c = "bottom";
        u = e.bottom - i.top;
      }
    }
    let v = (e.bottom - e.top) / o.offsetHeight;
    let b = (e.right - e.left) / o.offsetWidth;
    return {
      style: `${c}: ${u / v}px; max-width: ${f / b}px`,
      class: "cm-completionInfo-" + (h ? l ? "left-narrow" : "right-narrow" : a ? "left" : "right")
    };
  }
  function S(t, e, i) {
    if (t <= i) {
      return {
        from: 0,
        to: t
      };
    }
    if (e < 0) {
      e = 0;
    }
    if (e <= t >> 1) {
      let t = Math.floor(e / i);
      return {
        from: t * i,
        to: (t + 1) * i
      };
    }
    let n = Math.floor((t - e) / i);
    return {
      from: t - (n + 1) * i,
      to: t - n * i
    };
  }
  class C {
    constructor(t, e, i) {
      let n;
      this.view = t;
      this.stateField = e;
      this.applyCompletion = i;
      this.info = null;
      this.infoDestroy = null;
      this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: t => this.placeInfo(t),
        key: this
      };
      this.space = null;
      this.currentClass = "";
      let s = t.state.field(e);
      let {
        options: r,
        selected: o
      } = s.open;
      let l = t.state.facet(y);
      this.optionContent = (n = l.addToOptions.slice(), l.icons && n.push({
        render(t) {
          let e = document.createElement("div");
          e.classList.add("cm-completionIcon");
          if (t.type) {
            e.classList.add(...t.type.split(/\s+/g).map(t => "cm-completionIcon-" + t));
          }
          e.setAttribute("aria-hidden", "true");
          return e;
        },
        position: 20
      }), n.push({
        render(t, e, i, n) {
          let s = document.createElement("span");
          s.className = "cm-completionLabel";
          let r = t.displayLabel || t.label;
          let o = 0;
          for (let t = 0; t < n.length;) {
            let e = n[t++];
            let i = n[t++];
            if (e > o) {
              s.appendChild(document.createTextNode(r.slice(o, e)));
            }
            let l = s.appendChild(document.createElement("span"));
            l.appendChild(document.createTextNode(r.slice(e, i)));
            l.className = "cm-completionMatchedText";
            o = i;
          }
          if (o < r.length) {
            s.appendChild(document.createTextNode(r.slice(o)));
          }
          return s;
        },
        position: 50
      }, {
        render(t) {
          if (!t.detail) {
            return null;
          }
          let e = document.createElement("span");
          e.className = "cm-completionDetail";
          e.textContent = t.detail;
          return e;
        },
        position: 80
      }), n.sort((t, e) => t.position - e.position).map(t => t.render));
      this.optionClass = l.optionClass;
      this.tooltipClass = l.tooltipClass;
      this.range = S(r.length, o, l.maxRenderedOptions);
      this.dom = document.createElement("div");
      this.dom.className = "cm-tooltip-autocomplete";
      this.updateTooltipClass(t.state);
      this.dom.addEventListener("mousedown", i => {
        let {
          options: n
        } = t.state.field(e).open;
        for (let e = i.target, s; e && e != this.dom; e = e.parentNode) {
          if (e.nodeName == "LI" && (s = /-(\d+)$/.exec(e.id)) && +s[1] < n.length) {
            this.applyCompletion(t, n[+s[1]]);
            i.preventDefault();
            return;
          }
        }
      });
      this.dom.addEventListener("focusout", e => {
        let i = t.state.field(this.stateField, false);
        if (i && i.tooltip && t.state.facet(y).closeOnBlur && e.relatedTarget != t.contentDOM) {
          t.dispatch({
            effects: v.of(null)
          });
        }
      });
      this.showOptions(r, s.id);
    }
    mount() {
      this.updateSel();
    }
    showOptions(t, e) {
      if (this.list) {
        this.list.remove();
      }
      this.list = this.dom.appendChild(this.createListBox(t, e, this.range));
      this.list.addEventListener("scroll", () => {
        if (this.info) {
          this.view.requestMeasure(this.placeInfoReq);
        }
      });
    }
    update(t) {
      let i = t.state.field(this.stateField);
      let n = t.startState.field(this.stateField);
      this.updateTooltipClass(t.state);
      if (i != n) {
        let {
          options: s,
          selected: r,
          disabled: o
        } = i.open;
        if (!n.open || n.open.options != s) {
          this.range = S(s.length, r, t.state.facet(y).maxRenderedOptions);
          this.showOptions(s, i.id);
        }
        this.updateSel();
        if (o != n.open?.disabled) {
          this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!o);
        }
      }
    }
    updateTooltipClass(t) {
      let e = this.tooltipClass(t);
      if (e != this.currentClass) {
        for (let t of this.currentClass.split(" ")) {
          if (t) {
            this.dom.classList.remove(t);
          }
        }
        for (let t of e.split(" ")) {
          if (t) {
            this.dom.classList.add(t);
          }
        }
        this.currentClass = e;
      }
    }
    positioned(t) {
      this.space = t;
      if (this.info) {
        this.view.requestMeasure(this.placeInfoReq);
      }
    }
    updateSel() {
      let t = this.view.state.field(this.stateField);
      let e = t.open;
      if (e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) {
        this.range = S(e.options.length, e.selected, this.view.state.facet(y).maxRenderedOptions);
        this.showOptions(e.options, t.id);
      }
      if (this.updateSelectedOption(e.selected)) {
        this.destroyInfo();
        let {
          completion: i
        } = e.options[e.selected];
        let {
          info: n
        } = i;
        if (!n) {
          return;
        }
        let r = typeof n == "string" ? document.createTextNode(n) : n(i);
        if (!r) {
          return;
        }
        if ("then" in r) {
          r.then(e => {
            if (e && this.view.state.field(this.stateField, false) == t) {
              this.addInfoPane(e, i);
            }
          }).catch(t => codemirrorEditorViewCore.DecorationType(this.view.state, t, "completion info"));
        } else {
          this.addInfoPane(r, i);
        }
      }
    }
    addInfoPane(t, e) {
      this.destroyInfo();
      let i = this.info = document.createElement("div");
      i.className = "cm-tooltip cm-completionInfo";
      if (t.nodeType != null) {
        i.appendChild(t);
        this.infoDestroy = null;
      } else {
        let {
          dom: e,
          destroy: n
        } = t;
        i.appendChild(e);
        this.infoDestroy = n || null;
      }
      this.dom.appendChild(i);
      this.view.requestMeasure(this.placeInfoReq);
    }
    updateSelectedOption(t) {
      var e;
      var i;
      let n;
      let s;
      let r;
      let o = null;
      for (let e = this.list.firstChild, i = this.range.from; e; e = e.nextSibling, i++) {
        if (e.nodeName == "LI" && e.id) {
          if (i == t) {
            if (!e.hasAttribute("aria-selected")) {
              e.setAttribute("aria-selected", "true");
              o = e;
            }
          } else if (e.hasAttribute("aria-selected")) {
            e.removeAttribute("aria-selected");
          }
        } else {
          i--;
        }
      }
      if (o) {
        e = this.list;
        i = o;
        n = e.getBoundingClientRect();
        s = i.getBoundingClientRect();
        r = n.height / e.offsetHeight;
        if (s.top < n.top) {
          e.scrollTop -= (n.top - s.top) / r;
        } else if (s.bottom > n.bottom) {
          e.scrollTop += (s.bottom - n.bottom) / r;
        }
      }
      return o;
    }
    measureInfo() {
      let t = this.dom.querySelector("[aria-selected]");
      if (!t || !this.info) {
        return null;
      }
      let e = this.dom.getBoundingClientRect();
      let i = this.info.getBoundingClientRect();
      let n = t.getBoundingClientRect();
      let s = this.space;
      if (!s) {
        let t = this.dom.ownerDocument.defaultView || window;
        s = {
          left: 0,
          top: 0,
          right: t.innerWidth,
          bottom: t.innerHeight
        };
      }
      if (n.top > Math.min(s.bottom, e.bottom) - 10 || n.bottom < Math.max(s.top, e.top) + 10) {
        return null;
      } else {
        return this.view.state.facet(y).positionInfo(this.view, e, n, i, s, this.dom);
      }
    }
    placeInfo(t) {
      if (this.info) {
        if (t) {
          if (t.style) {
            this.info.style.cssText = t.style;
          }
          this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "");
        } else {
          this.info.style.cssText = "top: -1e6px";
        }
      }
    }
    createListBox(t, e, i) {
      let n = document.createElement("ul");
      n.id = e;
      n.setAttribute("role", "listbox");
      n.setAttribute("aria-expanded", "true");
      n.setAttribute("aria-label", this.view.state.phrase("Completions"));
      let s = null;
      for (let r = i.from; r < i.to; r++) {
        let {
          completion: o,
          match: l
        } = t[r];
        let {
          section: a
        } = o;
        if (a) {
          let t = typeof a == "string" ? a : a.name;
          if (t != s && (r > i.from || i.from == 0)) {
            s = t;
            if (typeof a != "string" && a.header) {
              n.appendChild(a.header(a));
            } else {
              n.appendChild(document.createElement("completion-section")).textContent = t;
            }
          }
        }
        let h = n.appendChild(document.createElement("li"));
        h.id = e + "-" + r;
        h.setAttribute("role", "option");
        let c = this.optionClass(o);
        if (c) {
          h.className = c;
        }
        for (let t of this.optionContent) {
          let e = t(o, this.view.state, this.view, l);
          if (e) {
            h.appendChild(e);
          }
        }
      }
      if (i.from) {
        n.classList.add("cm-completionListIncompleteTop");
      }
      if (i.to < t.length) {
        n.classList.add("cm-completionListIncompleteBottom");
      }
      return n;
    }
    destroyInfo() {
      if (this.info) {
        if (this.infoDestroy) {
          this.infoDestroy();
        }
        this.info.remove();
        this.info = null;
      }
    }
    destroy() {
      this.destroyInfo();
    }
  }
  function M(t) {
    return (t.boost || 0) * 100 + !!t.apply * 10 + !!t.info * 5 + +!!t.type;
  }
  class A {
    constructor(t, e, i, n, s, r) {
      this.options = t;
      this.attrs = e;
      this.tooltip = i;
      this.timestamp = n;
      this.selected = s;
      this.disabled = r;
    }
    setSelected(t, e) {
      if (t == this.selected || t >= this.options.length) {
        return this;
      } else {
        return new A(this.options, P(e, t), this.tooltip, this.timestamp, t, this.disabled);
      }
    }
    static build(t, e, i, n, s, r) {
      if (n && !r && t.some(t => t.isPending)) {
        return n.setDisabled();
      }
      let o = function (t, e) {
        let i = [];
        let n = null;
        let s = t => {
          i.push(t);
          let {
            section: e
          } = t.completion;
          if (e) {
            n ||= [];
            let t = typeof e == "string" ? e : e.name;
            if (!n.some(e => e.name == t)) {
              n.push(typeof e == "string" ? {
                name: t
              } : e);
            }
          }
        };
        let r = e.facet(y);
        for (let n of t) {
          if (n.hasResult()) {
            let t = n.result.getMatch;
            if (n.result.filter === false) {
              for (let e of n.result.options) {
                s(new c(e, n.source, t ? t(e) : [], 1000000000 - i.length));
              }
            } else {
              let i = e.sliceDoc(n.from, n.to);
              let o;
              let l = r.filterStrict ? new w(i) : new b(i);
              for (let e of n.result.options) {
                if (o = l.match(e.label)) {
                  let i = e.displayLabel ? t ? t(e, o.matched) : [] : o.matched;
                  s(new c(e, n.source, i, o.score + (e.boost || 0)));
                }
              }
            }
          }
        }
        if (n) {
          let t = Object.create(null);
          let e = 0;
          for (let i of n.sort((t, e) => {
            return (t.rank ?? 1000000000) - (e.rank ?? 1000000000) || (t.name < e.name ? -1 : 1);
          })) {
            e -= 100000;
            t[i.name] = e;
          }
          for (let e of i) {
            let {
              section: i
            } = e.completion;
            if (i) {
              e.score += t[typeof i == "string" ? i : i.name];
            }
          }
        }
        let o = [];
        let l = null;
        let a = r.compareCompletions;
        for (let t of i.sort((t, e) => e.score - t.score || a(t.completion, e.completion))) {
          let e = t.completion;
          if (l && l.label == e.label && l.detail == e.detail && (l.type == null || e.type == null || l.type == e.type) && l.apply == e.apply && l.boost == e.boost) {
            if (M(t.completion) > M(l)) {
              o[o.length - 1] = t;
            }
          } else {
            o.push(t);
          }
          l = t.completion;
        }
        return o;
      }(t, e);
      if (!o.length) {
        if (n && t.some(t => t.isPending)) {
          return n.setDisabled();
        } else {
          return null;
        }
      }
      let l = e.facet(y).selectOnOpen ? 0 : -1;
      if (n && n.selected != l && n.selected != -1) {
        let t = n.options[n.selected].completion;
        for (let e = 0; e < o.length; e++) {
          if (o[e].completion == t) {
            l = e;
            break;
          }
        }
      }
      return new A(o, P(i, l), {
        pos: t.reduce((t, e) => e.hasResult() ? Math.min(t, e.from) : t, 100000000),
        create: j,
        above: s.aboveCursor
      }, n ? n.timestamp : Date.now(), l, false);
    }
    map(t) {
      return new A(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
        pos: t.mapPos(this.tooltip.pos)
      }), this.timestamp, this.selected, this.disabled);
    }
    setDisabled() {
      return new A(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
    }
  }
  class T {
    constructor(t, e, i) {
      this.active = t;
      this.id = e;
      this.open = i;
    }
    static start() {
      return new T(E, "cm-ac-" + Math.floor(Math.random() * 2000000).toString(36), null);
    }
    update(t) {
      let {
        state: e
      } = t;
      let i = e.facet(y);
      let n = (i.override || e.languageDataAt("autocomplete", u(e)).map(m)).map(e => (this.active.find(t => t.source == e) || new L(e, +!!this.active.some(t => t.state != 0))).update(t, i));
      if (n.length == this.active.length && n.every((t, e) => t == this.active[e])) {
        n = this.active;
      }
      let s = this.open;
      let r = t.effects.some(t => t.is(I));
      if (s && t.docChanged) {
        s = s.map(t.changes);
      }
      if (t.selection || n.some(e => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !function (t, e) {
        if (t == e) {
          return true;
        }
        for (let i = 0, n = 0;;) {
          while (i < t.length && !t[i].hasResult()) {
            i++;
          }
          while (n < e.length && !e[n].hasResult()) {
            n++;
          }
          let s = i == t.length;
          let r = n == e.length;
          if (s || r) {
            return s == r;
          }
          if (t[i++].result != e[n++].result) {
            return false;
          }
        }
      }(n, this.active) || r) {
        s = A.build(n, e, this.id, s, i, r);
      } else if (s && s.disabled && !n.some(t => t.isPending)) {
        s = null;
      }
      if (!s && n.every(t => !t.isPending) && n.some(t => t.hasResult())) {
        n = n.map(t => t.hasResult() ? new L(t.source, 0) : t);
      }
      for (let o of t.effects) {
        if (o.is(N)) {
          s = s && s.setSelected(o.value, this.id);
        }
      }
      if (n == this.active && s == this.open) {
        return this;
      } else {
        return new T(n, this.id, s);
      }
    }
    get tooltip() {
      if (this.open) {
        return this.open.tooltip;
      } else {
        return null;
      }
    }
    get attrs() {
      if (this.open) {
        return this.open.attrs;
      } else if (this.active.length) {
        return O;
      } else {
        return D;
      }
    }
  }
  let O = {
    "aria-autocomplete": "list"
  };
  let D = {};
  function P(t, e) {
    let i = {
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "aria-controls": t
    };
    if (e > -1) {
      i["aria-activedescendant"] = t + "-" + e;
    }
    return i;
  }
  let E = [];
  function R(t, e) {
    if (t.isUserEvent("input.complete")) {
      let i = t.annotation(d);
      if (i && e.activateOnCompletion(i)) {
        return 12;
      }
    }
    let i = t.isUserEvent("input.type");
    if (i && e.activateOnTyping) {
      return 5;
    } else if (i) {
      return 1;
    } else if (t.isUserEvent("delete.backward")) {
      return 2;
    } else if (t.selection) {
      return 8;
    } else {
      return !!t.docChanged * 16;
    }
  }
  class L {
    constructor(t, e, i = false) {
      this.source = t;
      this.state = e;
      this.explicit = i;
    }
    hasResult() {
      return false;
    }
    get isPending() {
      return this.state == 1;
    }
    update(t, e) {
      let i = R(t, e);
      let n = this;
      if (i & 8 || i & 16 && this.touches(t)) {
        n = new L(n.source, 0);
      }
      if (i & 4 && n.state == 0) {
        n = new L(this.source, 1);
      }
      n = n.updateFor(t, i);
      for (let e of t.effects) {
        if (e.is(g)) {
          n = new L(n.source, 1, e.value);
        } else if (e.is(v)) {
          n = new L(n.source, 0);
        } else if (e.is(I)) {
          for (let t of e.value) {
            if (t.source == n.source) {
              n = t;
            }
          }
        }
      }
      return n;
    }
    updateFor(t, e) {
      return this.map(t.changes);
    }
    map(t) {
      return this;
    }
    touches(t) {
      return t.changes.touchesRange(u(t.state));
    }
  }
  class B extends L {
    constructor(t, e, i, n, s, r) {
      super(t, 3, e);
      this.limit = i;
      this.result = n;
      this.from = s;
      this.to = r;
    }
    hasResult() {
      return true;
    }
    updateFor(t, e) {
      if (!(e & 3)) {
        return this.map(t.changes);
      }
      let n = this.result;
      if (n.map && !t.changes.empty) {
        n = n.map(n, t.changes);
      }
      let s = t.changes.mapPos(this.from);
      let r = t.changes.mapPos(this.to, 1);
      let l = u(t.state);
      if (l > r || !n || e & 2 && (u(t.startState) == this.from || l < this.limit)) {
        return new L(this.source, e & 4 ? 1 : 0);
      }
      let a = t.changes.mapPos(this.limit);
      if (!function (t, e, i, n) {
        if (!t) {
          return false;
        }
        let s = e.sliceDoc(i, n);
        if (typeof t == "function") {
          return t(s, i, n, e);
        } else {
          return f(t, true).test(s);
        }
      }(n.validFor, t.state, s, r)) {
        if (n.update && (n = n.update(n, s, r, new o(t.state, l, false)))) {
          return new B(this.source, this.explicit, a, n, n.from, n.to ?? u(t.state));
        } else {
          return new L(this.source, 1, this.explicit);
        }
      } else {
        return new B(this.source, this.explicit, a, n, s, r);
      }
    }
    map(t) {
      if (t.empty) {
        return this;
      } else if (this.result.map ? this.result.map(this.result, t) : this.result) {
        return new B(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1));
      } else {
        return new L(this.source, 0);
      }
    }
    touches(t) {
      return t.changes.touchesRange(this.from, this.to);
    }
  }
  let I = codemirrorStateCore.EffectType.define({
    map: (t, e) => t.map(t => t.map(e))
  });
  let N = codemirrorStateCore.EffectType.define();
  let V = codemirrorStateCore.PrecLevels.define({
    create: () => T.start(),
    update: (t, e) => t.update(e),
    provide: t => [codemirrorEditorViewCore.tooltipsFacet.from(t, t => t.tooltip), codemirrorEditorViewCore.EditorView.contentAttributes.from(t, t => t.attrs)]
  });
  function F(t, e) {
    let i = e.completion.apply || e.completion.label;
    let s = t.state.field(V).active.find(t => t.source == e.source);
    return s instanceof B && (typeof i == "string" ? t.dispatch(Object.assign(Object.assign({}, function (t, e, i, s) {
      let {
        main: r
      } = t.selection;
      let o = i - r.from;
      let l = s - r.from;
      return Object.assign(Object.assign({}, t.changeByRange(a => {
        if (a != r && i != s && t.sliceDoc(a.from + o, a.from + l) != t.sliceDoc(i, s)) {
          return {
            range: a
          };
        }
        let h = t.toText(e);
        return {
          changes: {
            from: a.from + o,
            to: s == r.from ? a.to : a.from + l,
            insert: h
          },
          range: codemirrorStateCore.EditorSelection.cursor(a.from + o + h.length)
        };
      })), {
        scrollIntoView: true,
        userEvent: "input.complete"
      });
    }(t.state, i, s.from, s.to)), {
      annotations: d.of(e.completion)
    })) : i(t, e.completion, s.from, s.to), true);
  }
  let j = t => new C(t, V, F);
  function H(t, e = "option") {
    return i => {
      let n = i.state.field(V, false);
      if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < i.state.facet(y).interactionDelay) {
        return false;
      }
      let r = 1;
      let o;
      if (e == "page" && (o = codemirrorEditorViewCore.tooltipLookup(i, n.open.tooltip))) {
        r = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1);
      }
      let {
        length: l
      } = n.open.options;
      let a = n.open.selected > -1 ? n.open.selected + r * (t ? 1 : -1) : t ? 0 : l - 1;
      if (a < 0) {
        a = e == "page" ? 0 : l - 1;
      } else if (a >= l) {
        a = e == "page" ? l - 1 : 0;
      }
      i.dispatch({
        effects: N.of(a)
      });
      return true;
    };
  }
  let W = t => !!t.state.field(V, false) && (t.dispatch({
    effects: g.of(true)
  }), true);
  class z {
    constructor(t, e) {
      this.active = t;
      this.context = e;
      this.time = Date.now();
      this.updates = [];
      this.done = undefined;
    }
  }
  let q = codemirrorEditorViewCore.Plugin.fromClass(class {
    constructor(t) {
      this.view = t;
      this.debounceUpdate = -1;
      this.running = [];
      this.debounceAccept = -1;
      this.pendingStart = false;
      this.composing = 0;
      for (let e of t.state.field(V).active) {
        if (e.isPending) {
          this.startQuery(e);
        }
      }
    }
    update(t) {
      let e = t.state.field(V);
      let i = t.state.facet(y);
      if (!t.selectionSet && !t.docChanged && t.startState.field(V) == e) {
        return;
      }
      let n = t.transactions.some(t => {
        let e = R(t, i);
        return e & 8 || (t.selection || t.docChanged) && !(e & 3);
      });
      for (let e = 0; e < this.running.length; e++) {
        let i = this.running[e];
        if (n || i.context.abortOnDocChange && t.docChanged || i.updates.length + t.transactions.length > 50 && Date.now() - i.time > 1000) {
          for (let t of i.context.abortListeners) {
            try {
              t();
            } catch (t) {
              codemirrorEditorViewCore.DecorationType(this.view.state, t);
            }
          }
          i.context.abortListeners = null;
          this.running.splice(e--, 1);
        } else {
          i.updates.push(...t.transactions);
        }
      }
      if (this.debounceUpdate > -1) {
        clearTimeout(this.debounceUpdate);
      }
      if (t.transactions.some(t => t.effects.some(t => t.is(g)))) {
        this.pendingStart = true;
      }
      let r = this.pendingStart ? 50 : i.activateOnTypingDelay;
      this.debounceUpdate = e.active.some(t => t.isPending && !this.running.some(e => e.active.source == t.source)) ? setTimeout(() => this.startUpdate(), r) : -1;
      if (this.composing != 0) {
        for (let e of t.transactions) {
          if (e.isUserEvent("input.type")) {
            this.composing = 2;
          } else if (this.composing == 2 && e.selection) {
            this.composing = 3;
          }
        }
      }
    }
    startUpdate() {
      this.debounceUpdate = -1;
      this.pendingStart = false;
      let {
        state: t
      } = this.view;
      let e = t.field(V);
      for (let t of e.active) {
        if (t.isPending && !this.running.some(e => e.active.source == t.source)) {
          this.startQuery(t);
        }
      }
      if (this.running.length && e.open && e.open.disabled) {
        this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(y).updateSyncTime);
      }
    }
    startQuery(t) {
      let {
        state: e
      } = this.view;
      let i = u(e);
      let n = new o(e, i, t.explicit, this.view);
      let r = new z(t, n);
      this.running.push(r);
      Promise.resolve(t.source(n)).then(t => {
        if (!r.context.aborted) {
          r.done = t || null;
          this.scheduleAccept();
        }
      }, t => {
        this.view.dispatch({
          effects: v.of(null)
        });
        codemirrorEditorViewCore.DecorationType(this.view.state, t);
      });
    }
    scheduleAccept() {
      if (this.running.every(t => t.done !== undefined)) {
        this.accept();
      } else if (this.debounceAccept < 0) {
        this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(y).updateSyncTime);
      }
    }
    accept() {
      if (this.debounceAccept > -1) {
        clearTimeout(this.debounceAccept);
      }
      this.debounceAccept = -1;
      let e = [];
      let i = this.view.state.facet(y);
      let n = this.view.state.field(V);
      for (let s = 0; s < this.running.length; s++) {
        let r = this.running[s];
        if (r.done === undefined) {
          continue;
        }
        this.running.splice(s--, 1);
        if (r.done) {
          let n = u(r.updates.length ? r.updates[0].startState : this.view.state);
          let s = Math.min(n, r.done.from + +!r.active.explicit);
          let o = new B(r.active.source, r.active.explicit, s, r.done, r.done.from, r.done.to ?? n);
          for (let t of r.updates) {
            o = o.update(t, i);
          }
          if (o.hasResult()) {
            e.push(o);
            continue;
          }
        }
        let o = n.active.find(t => t.source == r.active.source);
        if (o && o.isPending) {
          if (r.done == null) {
            let t = new L(r.active.source, 0);
            for (let e of r.updates) {
              t = t.update(e, i);
            }
            if (!t.isPending) {
              e.push(t);
            }
          } else {
            this.startQuery(o);
          }
        }
      }
      if (e.length || n.open && n.open.disabled) {
        this.view.dispatch({
          effects: I.of(e)
        });
      }
    }
  }, {
    eventHandlers: {
      blur(t) {
        let e = this.view.state.field(V, false);
        if (e && e.tooltip && this.view.state.facet(y).closeOnBlur) {
          let i = e.open && codemirrorEditorViewCore.tooltipLookup(this.view, e.open.tooltip);
          if (!i || !i.dom.contains(t.relatedTarget)) {
            setTimeout(() => this.view.dispatch({
              effects: v.of(null)
            }), 10);
          }
        }
      },
      compositionstart() {
        this.composing = 1;
      },
      compositionend() {
        if (this.composing == 3) {
          setTimeout(() => this.view.dispatch({
            effects: g.of(false)
          }), 20);
        }
        this.composing = 0;
      }
    }
  });
  let $ = typeof navigator == "object" && /Win/.test(navigator.platform);
  let J = codemirrorStateCore.StateField.highest(codemirrorEditorViewCore.EditorView.domEventHandlers({
    keydown(t, e) {
      let i = e.state.field(V, false);
      if (!i || !i.open || i.open.disabled || i.open.selected < 0 || t.key.length > 1 || t.ctrlKey && (!$ || !t.altKey) || t.metaKey) {
        return false;
      }
      let n = i.open.options[i.open.selected];
      let s = i.active.find(t => t.source == n.source);
      let r = n.completion.commitCharacters || s.result.commitCharacters;
      if (r && r.indexOf(t.key) > -1) {
        F(e, n);
      }
      return false;
    }
  }));
  let _ = codemirrorEditorViewCore.EditorView.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": {
          padding: "1px 3px",
          lineHeight: 1.2
        },
        "& > li": {
          overflowX: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer"
        },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7
        }
      }
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#17c",
      color: "white"
    },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#777"
    },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
      background: "#347",
      color: "white"
    },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
      background: "#444"
    },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: "\"···\"",
      opacity: 0.5,
      display: "block",
      textAlign: "center"
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
      whiteSpace: "pre-line"
    },
    ".cm-completionInfo.cm-completionInfo-left": {
      right: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-right": {
      left: "100%"
    },
    ".cm-completionInfo.cm-completionInfo-left-narrow": {
      right: "30px"
    },
    ".cm-completionInfo.cm-completionInfo-right-narrow": {
      left: "30px"
    },
    "&light .cm-snippetField": {
      backgroundColor: "#00000022"
    },
    "&dark .cm-snippetField": {
      backgroundColor: "#ffffff22"
    },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888"
    },
    ".cm-completionMatchedText": {
      textDecoration: "underline"
    },
    ".cm-completionDetail": {
      marginLeft: "0.5em",
      fontStyle: "italic"
    },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box"
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": {
      "&:after": {
        content: "'ƒ'"
      }
    },
    ".cm-completionIcon-class": {
      "&:after": {
        content: "'○'"
      }
    },
    ".cm-completionIcon-interface": {
      "&:after": {
        content: "'◌'"
      }
    },
    ".cm-completionIcon-variable": {
      "&:after": {
        content: "'𝑥'"
      }
    },
    ".cm-completionIcon-constant": {
      "&:after": {
        content: "'𝐶'"
      }
    },
    ".cm-completionIcon-type": {
      "&:after": {
        content: "'𝑡'"
      }
    },
    ".cm-completionIcon-enum": {
      "&:after": {
        content: "'∪'"
      }
    },
    ".cm-completionIcon-property": {
      "&:after": {
        content: "'□'"
      }
    },
    ".cm-completionIcon-keyword": {
      "&:after": {
        content: "'🔑︎'"
      }
    },
    ".cm-completionIcon-namespace": {
      "&:after": {
        content: "'▢'"
      }
    },
    ".cm-completionIcon-text": {
      "&:after": {
        content: "'abc'",
        fontSize: "50%",
        verticalAlign: "middle"
      }
    }
  });
  class K {
    constructor(t, e, i, n) {
      this.field = t;
      this.line = e;
      this.from = i;
      this.to = n;
    }
  }
  class U {
    constructor(t, e, i) {
      this.field = t;
      this.from = e;
      this.to = i;
    }
    map(t) {
      let e = t.mapPos(this.from, -1, codemirrorStateCore.MapMode.TrackDel);
      let i = t.mapPos(this.to, 1, codemirrorStateCore.MapMode.TrackDel);
      if (e == null || i == null) {
        return null;
      } else {
        return new U(this.field, e, i);
      }
    }
  }
  class G {
    constructor(t, e) {
      this.lines = t;
      this.fieldPositions = e;
    }
    instantiate(t, e) {
      let i = [];
      let n = [e];
      let s = t.doc.lineAt(e);
      let o = /^\s*/.exec(s.text)[0];
      for (let s of this.lines) {
        if (i.length) {
          let i = o;
          let l = /^\t*/.exec(s)[0].length;
          for (let e = 0; e < l; e++) {
            i += t.facet(codemirrorLanguageSupport.indentUnitFacet);
          }
          n.push(e + i.length - l);
          s = i + s.slice(l);
        }
        i.push(s);
        e += s.length + 1;
      }
      return {
        text: i,
        ranges: this.fieldPositions.map(t => new U(t.field, n[t.line] + t.from, n[t.line] + t.to))
      };
    }
    static parse(t) {
      let e = [];
      let i = [];
      let n = [];
      let s;
      for (let r of t.split(/\r\n?|\n/)) {
        while (s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(r)) {
          let t = s[1] ? +s[1] : null;
          let o = s[2] || s[3] || "";
          let l = -1;
          let a = o.replace(/\\[{}]/g, t => t[1]);
          for (let i = 0; i < e.length; i++) {
            if (!(t != null ? e[i].seq != t : !a || e[i].name != a)) {
              l = i;
            }
          }
          if (l < 0) {
            let i = 0;
            while (i < e.length && (t == null || e[i].seq != null && e[i].seq < t)) {
              i++;
            }
            e.splice(i, 0, {
              seq: t,
              name: a
            });
            l = i;
            for (let s of n) {
              if (s.field >= l) {
                s.field++;
              }
            }
          }
          n.push(new K(l, i.length, s.index, s.index + a.length));
          r = r.slice(0, s.index) + o + r.slice(s.index + s[0].length);
        }
        r = r.replace(/\\([{}])/g, (t, e, s) => {
          for (let t of n) {
            if (t.line == i.length && t.from > s) {
              t.from--;
              t.to--;
            }
          }
          return e;
        });
        i.push(r);
      }
      return new G(i, n);
    }
  }
  let Q = codemirrorEditorViewCore.decorationClass.widget({
    widget: new class extends codemirrorEditorViewCore.Decoration {
      toDOM() {
        let t = document.createElement("span");
        t.className = "cm-snippetFieldPosition";
        return t;
      }
      ignoreEvent() {
        return false;
      }
    }()
  });
  let X = codemirrorEditorViewCore.decorationClass.mark({
    class: "cm-snippetField"
  });
  class Y {
    constructor(t, e) {
      this.ranges = t;
      this.active = e;
      this.deco = codemirrorEditorViewCore.decorationClass.set(t.map(t => (t.from == t.to ? Q : X).range(t.from, t.to)));
    }
    map(t) {
      let e = [];
      for (let i of this.ranges) {
        let n = i.map(t);
        if (!n) {
          return null;
        }
        e.push(n);
      }
      return new Y(e, this.active);
    }
    selectionInsideField(t) {
      return t.ranges.every(t => this.ranges.some(e => e.field == this.active && e.from <= t.from && e.to >= t.to));
    }
  }
  let Z = codemirrorStateCore.EffectType.define({
    map: (t, e) => t && t.map(e)
  });
  let tt = codemirrorStateCore.EffectType.define();
  let te = codemirrorStateCore.PrecLevels.define({
    create: () => null,
    update(t, e) {
      for (let i of e.effects) {
        if (i.is(Z)) {
          return i.value;
        }
        if (i.is(tt) && t) {
          return new Y(t.ranges, i.value);
        }
      }
      if (t && e.docChanged) {
        t = t.map(e.changes);
      }
      if (t && e.selection && !t.selectionInsideField(e.selection)) {
        t = null;
      }
      return t;
    },
    provide: t => codemirrorEditorViewCore.EditorView.decorations.from(t, t => t ? t.deco : codemirrorEditorViewCore.decorationClass.none)
  });
  function ti(t, e) {
    return codemirrorStateCore.EditorSelection.create(t.filter(t => t.field == e).map(t => codemirrorStateCore.EditorSelection.range(t.from, t.to)));
  }
  function tn(t) {
    return ({
      state: e,
      dispatch: i
    }) => {
      let n = e.field(te, false);
      if (!n || t < 0 && n.active == 0) {
        return false;
      }
      let s = n.active + t;
      let r = t > 0 && !n.ranges.some(e => e.field == s + t);
      i(e.update({
        selection: ti(n.ranges, s),
        effects: Z.of(r ? null : new Y(n.ranges, s)),
        scrollIntoView: true
      }));
      return true;
    };
  }
  let ts = [{
    key: "Tab",
    run: tn(1),
    shift: tn(-1)
  }, {
    key: "Escape",
    run: ({
      state: t,
      dispatch: e
    }) => !!t.field(te, false) && (e(t.update({
      effects: Z.of(null)
    })), true)
  }];
  let tr = codemirrorStateCore.Facet.define({
    combine: t => t.length ? t[0] : ts
  });
  let to = codemirrorStateCore.StateField.highest(codemirrorEditorViewCore.keymapFacet.compute([tr], t => t.facet(tr)));
  function tl(t, e) {
    let i;
    return Object.assign(Object.assign({}, e), {
      apply: (i = G.parse(t), (t, e, s, r) => {
        let {
          text: o,
          ranges: l
        } = i.instantiate(t.state, s);
        let a = {
          changes: {
            from: s,
            to: r,
            insert: codemirrorStateCore.Text.of(o)
          },
          scrollIntoView: true,
          annotations: e ? [d.of(e), codemirrorStateCore.Transaction.userEvent.of("input.complete")] : undefined
        };
        if (l.length) {
          a.selection = ti(l, 0);
        }
        if (l.some(t => t.field > 0)) {
          let e = new Y(l, 0);
          let i = a.effects = [Z.of(e)];
          if (t.state.field(te, false) === undefined) {
            i.push(codemirrorStateCore.EffectType.appendConfig.of([te, to, ta, _]));
          }
        }
        t.dispatch(t.state.update(a));
      })
    });
  }
  let ta = codemirrorEditorViewCore.EditorView.domEventHandlers({
    mousedown(t, e) {
      let i = e.state.field(te, false);
      let n;
      if (!i || (n = e.posAtCoords({
        x: t.clientX,
        y: t.clientY
      })) == null) {
        return false;
      }
      let s = i.ranges.find(t => t.from <= n && t.to >= n);
      return !!s && s.field != i.active && (e.dispatch({
        selection: ti(i.ranges, s.field),
        effects: Z.of(i.ranges.some(t => t.field > s.field) ? new Y(i.ranges, s.field) : null),
        scrollIntoView: true
      }), true);
    }
  });
  let th = {
    brackets: ["(", "[", "{", "'", "\""],
    before: ")]}:;>",
    stringPrefixes: []
  };
  let tc = codemirrorStateCore.EffectType.define({
    map(t, e) {
      let i = e.mapPos(t, -1, codemirrorStateCore.MapMode.TrackAfter);
      if (i == null) {
        return undefined;
      } else {
        return i;
      }
    }
  });
  let tu = new class extends codemirrorStateCore.RangeValue {}();
  tu.startSide = 1;
  tu.endSide = -1;
  let tf = codemirrorStateCore.PrecLevels.define({
    create: () => codemirrorStateCore.RangeSet.empty,
    update(t, e) {
      t = t.map(e.changes);
      if (e.selection) {
        let i = e.state.doc.lineAt(e.selection.main.head);
        t = t.update({
          filter: t => t >= i.from && t <= i.to
        });
      }
      for (let i of e.effects) {
        if (i.is(tc)) {
          t = t.update({
            add: [tu.range(i.value, i.value + 1)]
          });
        }
      }
      return t;
    }
  });
  function td() {
    return [tb, tf];
  }
  let tp = "()[]{}<>";
  function tm(t) {
    for (let e = 0; e < tp.length; e += 2) {
      if (tp.charCodeAt(e) == t) {
        return tp.charAt(e + 1);
      }
    }
    return codemirrorStateCore.fromCharCode(t < 128 ? t : t + 1);
  }
  function tg(t, e) {
    return t.languageDataAt("closeBrackets", e)[0] || th;
  }
  let tv = typeof navigator == "object" && /Android\b/.test(navigator.userAgent);
  let tb = codemirrorEditorViewCore.EditorView.inputHandler.of((t, e, i, s) => {
    if ((tv ? t.composing : t.compositionStarted) || t.state.readOnly) {
      return false;
    }
    let o = t.state.selection.main;
    if (s.length > 2 || s.length == 2 && codemirrorStateCore.charLength(codemirrorStateCore.charCodeAt(s, 0)) == 1 || e != o.from || i != o.to) {
      return false;
    }
    let l = function (t, e) {
      let i = tg(t, t.selection.main.head);
      let s = i.brackets || th.brackets;
      for (let o of s) {
        let l = tm(codemirrorStateCore.charCodeAt(o, 0));
        if (e == o) {
          if (l == o) {
            return function (t, e, i, s) {
              let o = s.stringPrefixes || th.stringPrefixes;
              let l = null;
              let a = t.changeByRange(s => {
                if (!s.empty) {
                  return {
                    changes: [{
                      insert: e,
                      from: s.from
                    }, {
                      insert: e,
                      from: s.to
                    }],
                    effects: tc.of(s.to + e.length),
                    range: codemirrorStateCore.EditorSelection.range(s.anchor + e.length, s.head + e.length)
                  };
                }
                let a = s.head;
                let h = tx(t.doc, a);
                let c;
                if (h == e) {
                  if (tk(t, a)) {
                    return {
                      changes: {
                        insert: e + e,
                        from: a
                      },
                      effects: tc.of(a + e.length),
                      range: codemirrorStateCore.EditorSelection.cursor(a + e.length)
                    };
                  }
                  if (ty(t, a)) {
                    let s = i && t.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
                    return {
                      changes: {
                        from: a,
                        to: a + s.length,
                        insert: s
                      },
                      range: codemirrorStateCore.EditorSelection.cursor(a + s.length)
                    };
                  }
                } else if (i && t.sliceDoc(a - e.length * 2, a) == e + e && (c = tS(t, a - e.length * 2, o)) > -1 && tk(t, c)) {
                  return {
                    changes: {
                      insert: e + e + e + e,
                      from: a
                    },
                    effects: tc.of(a + e.length),
                    range: codemirrorStateCore.EditorSelection.cursor(a + e.length)
                  };
                } else if (t.charCategorizer(a)(h) != codemirrorStateCore.CharType.Word && tS(t, a, o) > -1 && !function (t, e, i, n) {
                  let s = codemirrorLanguageSupport.getTree(t).resolveInner(e, -1);
                  let o = n.reduce((t, e) => Math.max(t, e.length), 0);
                  for (let r = 0; r < 5; r++) {
                    let r = t.sliceDoc(s.from, Math.min(s.to, s.from + i.length + o));
                    let l = r.indexOf(i);
                    if (!l || l > -1 && n.indexOf(r.slice(0, l)) > -1) {
                      let e = s.firstChild;
                      while (e && e.from == s.from && e.to - e.from > i.length + l) {
                        if (t.sliceDoc(e.to - i.length, e.to) == i) {
                          return false;
                        }
                        e = e.firstChild;
                      }
                      return true;
                    }
                    let a = s.to == e && s.parent;
                    if (!a) {
                      break;
                    }
                    s = a;
                  }
                  return false;
                }(t, a, e, o)) {
                  return {
                    changes: {
                      insert: e + e,
                      from: a
                    },
                    effects: tc.of(a + e.length),
                    range: codemirrorStateCore.EditorSelection.cursor(a + e.length)
                  };
                }
                return {
                  range: l = s
                };
              });
              if (l) {
                return null;
              } else {
                return t.update(a, {
                  scrollIntoView: true,
                  userEvent: "input.type"
                });
              }
            }(t, o, s.indexOf(o + o + o) > -1, i);
          } else {
            return function (t, e, i, s) {
              let r = null;
              let o = t.changeByRange(o => {
                if (!o.empty) {
                  return {
                    changes: [{
                      insert: e,
                      from: o.from
                    }, {
                      insert: i,
                      from: o.to
                    }],
                    effects: tc.of(o.to + e.length),
                    range: codemirrorStateCore.EditorSelection.range(o.anchor + e.length, o.head + e.length)
                  };
                }
                let l = tx(t.doc, o.head);
                if (!l || /\s/.test(l) || s.indexOf(l) > -1) {
                  return {
                    changes: {
                      insert: e + i,
                      from: o.head
                    },
                    effects: tc.of(o.head + e.length),
                    range: codemirrorStateCore.EditorSelection.cursor(o.head + e.length)
                  };
                } else {
                  return {
                    range: r = o
                  };
                }
              });
              if (r) {
                return null;
              } else {
                return t.update(o, {
                  scrollIntoView: true,
                  userEvent: "input.type"
                });
              }
            }(t, o, l, i.before || th.before);
          }
        }
        if (e == l && ty(t, t.selection.main.from)) {
          return function (t, e, i) {
            let s = null;
            let r = t.changeByRange(e => e.empty && tx(t.doc, e.head) == i ? {
              changes: {
                from: e.head,
                to: e.head + i.length,
                insert: i
              },
              range: codemirrorStateCore.EditorSelection.cursor(e.head + i.length)
            } : s = {
              range: e
            });
            if (s) {
              return null;
            } else {
              return t.update(r, {
                scrollIntoView: true,
                userEvent: "input.type"
              });
            }
          }(t, 0, l);
        }
      }
      return null;
    }(t.state, s);
    return !!l && (t.dispatch(l), true);
  });
  let tw = [{
    key: "Backspace",
    run: ({
      state: t,
      dispatch: e
    }) => {
      if (t.readOnly) {
        return false;
      }
      let i = tg(t, t.selection.main.head).brackets || th.brackets;
      let s = null;
      let r = t.changeByRange(e => {
        if (e.empty) {
          var r;
          var o;
          let s;
          r = t.doc;
          o = e.head;
          s = r.sliceString(o - 2, o);
          let l = codemirrorStateCore.charLength(codemirrorStateCore.charCodeAt(s, 0)) == s.length ? s : s.slice(1);
          for (let s of i) {
            if (s == l && tx(t.doc, e.head) == tm(codemirrorStateCore.charCodeAt(s, 0))) {
              return {
                changes: {
                  from: e.head - s.length,
                  to: e.head + s.length
                },
                range: codemirrorStateCore.EditorSelection.cursor(e.head - s.length)
              };
            }
          }
        }
        return {
          range: s = e
        };
      });
      if (!s) {
        e(t.update(r, {
          scrollIntoView: true,
          userEvent: "delete.backward"
        }));
      }
      return !s;
    }
  }];
  function ty(t, e) {
    let i = false;
    t.field(tf).between(0, t.doc.length, t => {
      if (t == e) {
        i = true;
      }
    });
    return i;
  }
  function tx(t, e) {
    let i = t.sliceString(e, e + 2);
    return i.slice(0, codemirrorStateCore.charLength(codemirrorStateCore.charCodeAt(i, 0)));
  }
  function tk(t, e) {
    let i = codemirrorLanguageSupport.getTree(t).resolveInner(e + 1);
    return i.parent && i.from == e;
  }
  function tS(t, e, i) {
    let s = t.charCategorizer(e);
    if (s(t.sliceDoc(e - 1, e)) != codemirrorStateCore.CharType.Word) {
      return e;
    }
    for (let r of i) {
      let i = e - r.length;
      if (t.sliceDoc(i, e) == r && s(t.sliceDoc(i - 1, i)) != codemirrorStateCore.CharType.Word) {
        return i;
      }
    }
    return -1;
  }
  function tC(t = {}) {
    return [J, V, y.of(t), q, tA, _];
  }
  let tM = [{
    key: "Ctrl-Space",
    run: W
  }, {
    mac: "Alt-`",
    run: W
  }, {
    key: "Escape",
    run: t => {
      let e = t.state.field(V, false);
      return !!e && !!e.active.some(t => t.state != 0) && (t.dispatch({
        effects: v.of(null)
      }), true);
    }
  }, {
    key: "ArrowDown",
    run: H(true)
  }, {
    key: "ArrowUp",
    run: H(false)
  }, {
    key: "PageDown",
    run: H(true, "page")
  }, {
    key: "PageUp",
    run: H(false, "page")
  }, {
    key: "Enter",
    run: t => {
      let e = t.state.field(V, false);
      return !t.state.readOnly && !!e && !!e.open && !(e.open.selected < 0) && !e.open.disabled && !(Date.now() - e.open.timestamp < t.state.facet(y).interactionDelay) && F(t, e.open.options[e.open.selected]);
    }
  }];
  let tA = codemirrorStateCore.StateField.highest(codemirrorEditorViewCore.keymapFacet.computeN([y], t => t.facet(y).defaultKeymap ? [tM] : []));
  require.d(exports, {
    completionKeymap: function () {
      return tM;
    },
    closeBracketsKeymap: function () {
      return tw;
    },
    snippetTemplate: function () {
      return tl;
    },
    createCompletionSource: function () {
      return a;
    },
    contextFilter: function () {
      return h;
    },
    setupCloseBrackets: function () {
      return td;
    },
    autocompleteExtension: function () {
      return tC;
    }
  });
}