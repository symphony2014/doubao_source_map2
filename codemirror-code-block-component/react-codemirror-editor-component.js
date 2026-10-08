// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'CodeMirrorEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16516.625a9212.js
         * chunkId: 16516
         * moduleId: 160872
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classNamesUtil = require("class-names-util") /*id: 953283*/;
  var codemirrorReactWrapper = require("codemirror-react-wrapper") /*id: 479374*/;
  var codemirrorLangDefinitions = require("codemirror-lang-definitions") /*id: 773424*/;
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var codemirrorThemeBuilder = require("codemirror-theme-builder") /*id: 615084*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  let u = codemirrorThemeBuilder.createTheme({
    theme: "light",
    settings: {
      background: "#FFF",
      caret: "#000",
      fontFamily: "\"JetBrains Mono\", monospace",
      foreground: "#000",
      gutterBorder: "transparent",
      gutterBackground: "#FFF",
      gutterForeground: "#0000004D",
      selection: "#A9D6FF",
      selectionMatch: "#0000001A"
    },
    styles: [{
      tag: syntaxHighlightTags.defaultTags.content,
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.comment,
      color: "var(--code-doc)"
    }, {
      tag: syntaxHighlightTags.defaultTags.link,
      color: "var(--code-link)"
    }, {
      tag: syntaxHighlightTags.defaultTags.unit,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.name),
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.keyword,
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.processingInstruction,
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.propertyName),
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.name,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.variableName,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.className,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.bool,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.null,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.attributeValue,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.string,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.color,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.atom,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.attributeName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.propertyName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.typeName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.standard(syntaxHighlightTags.defaultTags.typeName),
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.tagName,
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.brace),
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.number,
      color: "var(--code-number)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.variableName),
      color: "var(--code-function)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.propertyName),
      color: "var(--code-function)"
    }, {
      tag: syntaxHighlightTags.defaultTags.heading,
      fontWeight: 600
    }]
  });
  let d = codemirrorThemeBuilder.createTheme({
    theme: "light",
    settings: {
      background: "#181A1F",
      caret: "#FFF",
      fontFamily: "\"JetBrains Mono\", monospace",
      foreground: "#FFF",
      gutterBorder: "transparent",
      gutterBackground: "#181A1F",
      gutterForeground: "#FFFFFF4d",
      selection: "#315779",
      selectionMatch: "#ffffff26"
    },
    styles: [{
      tag: syntaxHighlightTags.defaultTags.content,
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.comment,
      color: "var(--code-doc)"
    }, {
      tag: syntaxHighlightTags.defaultTags.link,
      color: "var(--code-link)"
    }, {
      tag: syntaxHighlightTags.defaultTags.unit,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.name),
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.keyword,
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.processingInstruction,
      color: "var(--code-key-control)"
    }, {
      tag: syntaxHighlightTags.defaultTags.definition(syntaxHighlightTags.defaultTags.propertyName),
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.name,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.variableName,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.className,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.bool,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.null,
      color: "var(--code-variable)"
    }, {
      tag: syntaxHighlightTags.defaultTags.attributeValue,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.string,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.color,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.atom,
      color: "var(--code-parameter)"
    }, {
      tag: syntaxHighlightTags.defaultTags.attributeName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.propertyName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.typeName,
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.standard(syntaxHighlightTags.defaultTags.typeName),
      color: "var(--code-attributes)"
    }, {
      tag: syntaxHighlightTags.defaultTags.tagName,
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.special(syntaxHighlightTags.defaultTags.brace),
      color: "var(--code-text)"
    }, {
      tag: syntaxHighlightTags.defaultTags.number,
      color: "var(--code-number)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.variableName),
      color: "var(--code-function)"
    }, {
      tag: syntaxHighlightTags.defaultTags.function(syntaxHighlightTags.defaultTags.propertyName),
      color: "var(--code-function)"
    }, {
      tag: syntaxHighlightTags.defaultTags.heading,
      fontWeight: 600
    }]
  });
  var codemirrorEditorUtils = require("codemirror-editor-utils") /*id: 977017*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var incrementalCounterUtil = require("incremental-counter-util") /*id: 767112*/;
  var codemirrorSearchReplacePlugin = require("codemirror-search-replace-plugin") /*id: 862867*/;
  function f(e, t) {
    let {
      mainOnly: r = true,
      includeContentSelection: o = true,
      includeEmptySelection: n = false,
      includeSearchSelection: i = false
    } = t;
    let a = r ? [e.selection.main] : e.selection.ranges;
    let l = (() => {
      if (i) {
        return;
      }
      let t = codemirrorSearchReplacePlugin.getQuery(e);
      if (!t.valid) {
        return;
      }
      let r = e.selection.main;
      let o = new codemirrorSearchReplacePlugin.SearchIterator(e.doc, t.search, 0);
      while (!o.done) {
        o.next();
        if (r.from === o.value.from && r.to === o.value.to) {
          return r;
        }
      }
    })();
    return a.filter(e => (!!i || !l || !e.eq(l)) && (o && !e.empty || n && e.empty)).map(r => ({
      pos: r.head,
      above: r.assoc === 1 || undefined,
      create: () => {
        let o = incrementalCounterUtil.incrementalCounter();
        let n = document.createElement("div");
        n.className = "cm-selection-menu";
        let i = {
          id: o,
          dom: n,
          range: r,
          state: e,
          isMain: r === e.selection.main
        };
        return {
          dom: n,
          offset: {
            x: 8,
            y: 8
          },
          mount: () => t.onMount(i),
          destroy: () => t.onDestroy(i)
        };
      },
      selectionRange: r
    }));
  }
  let b = e => codemirrorReactWrapper.PrecLevels.define({
    create: t => f(t, e),
    update: (t, r) => r.docChanged || r.selection ? f(r.state, e) : t,
    provide: e => codemirrorReactWrapper.tooltipsFacet.computeN([e], t => t.field(e))
  });
  let y = e => {
    let {
      style: t
    } = e;
    return codemirrorReactWrapper.EditorView.baseTheme({
      ".cm-tooltip.cm-selection-menu": {
        backgroundColor: "transparent",
        border: "none",
        ...t
      },
      ".cm-tooltip.cm-selection-menu:empty": {
        pointerEvents: "none"
      }
    });
  };
  let w = e => {
    let {
      cmRef: t,
      render: r,
      style: n,
      mainOnly: i,
      includeEmptySelection: a
    } = e;
    let [l, c] = reactCoreLibraryReexport.useState([]);
    let s = reactCoreLibraryReexport.useCallback(e => {
      Promise.resolve().then(() => {
        c(t => arrayUniqByMatcher.uniqByMatcher([e, ...t], "id"));
      });
    }, []);
    let u = reactCoreLibraryReexport.useCallback(e => {
      Promise.resolve().then(() => {
        c(t => t.filter(t => t.id !== e.id));
      });
    }, []);
    let d = reactCoreLibraryReexport.useCallback(e => {
      let o = t.current?.view;
      if (o) {
        let {
          doc: t
        } = e.state;
        let r = codemirrorEditorUtils.getVisibleLineRange(o);
        let n = t.lineAt(e.range.from);
        let i = t.lineAt(e.range.to);
        return {
          visible_range: {
            start_line: o.state.doc.lineAt(r.from).number,
            end_line: o.state.doc.lineAt(r.to).number
          },
          select_range: {
            start_line: n.number,
            start_column: e.range.from - n.from + 1,
            end_line: i.number,
            end_column: e.range.to - i.from + 1
          },
          cursor_line: t.lineAt(e.range.head).number,
          select_content: t.sliceString(n.from, i.to),
          user_select_code: t.sliceString(e.range.from, e.range.to)
        };
      }
    }, []);
    return {
      extension: reactCoreLibraryReexport.useMemo(() => {
        var e;
        return [b(e = {
          style: n,
          mainOnly: i,
          includeEmptySelection: a,
          onMount: s,
          onDestroy: u
        }), y(e)];
      }, [n, i, a]),
      portal: r && l.map(e => {
        return reactDomEntryWrapper.createPortal(r(d(e) ?? {}), e.dom);
      })
    };
  };
  function k(e, t, r) {
    var o;
    if ((t = typeof (o = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function _(e, t) {
    let {
      mainOnly: r = true,
      includeContentSelection: o = true,
      includeEmptySelection: n = false
    } = t;
    return (r ? [e.selection.main] : e.selection.ranges).filter(e => o && !e.empty || n && e.empty).map(r => ({
      pos: r.head,
      above: r.assoc !== 1 || undefined,
      create: () => {
        let o = incrementalCounterUtil.incrementalCounter();
        let n = document.createElement("div");
        n.className = "cm-read-only-tooltip";
        let i = {
          id: o,
          dom: n,
          range: r,
          state: e,
          isMain: r === e.selection.main
        };
        return {
          dom: n,
          offset: {
            x: 8,
            y: 8
          },
          mount: () => t.onMount(i),
          destroy: () => t.onDestroy(i)
        };
      },
      selectionRange: r
    }));
  }
  let x = codemirrorReactWrapper.EffectType.define();
  let J = codemirrorReactWrapper.PrecLevels.define({
    create: () => false,
    update: (e, t) => {
      for (let e of t.effects) {
        if (e.is(x)) {
          return e.value;
        }
      }
      return e;
    }
  });
  let F = codemirrorReactWrapper.EditorView.updateListener.of(e => {
    for (let t of e.transactions) {
      if (t.selection !== undefined) {
        e.view.dispatch({
          effects: x.of(false)
        });
        break;
      }
    }
  });
  let C = e => codemirrorReactWrapper.PrecLevels.define({
    create: t => t.field(J, false) ? _(t, e) : [],
    update: (t, r) => r.state.field(J, false) && !r.selection ? r.startState.field(J, false) ? t : _(r.state, e) : [],
    provide: e => codemirrorReactWrapper.tooltipsFacet.computeN([e], t => t.field(e))
  });
  let N = e => {
    let {
      style: t
    } = e;
    return codemirrorReactWrapper.EditorView.baseTheme({
      ".cm-tooltip.cm-read-only-tooltip": {
        backgroundColor: "transparent",
        border: "none",
        ...t
      },
      ".cm-tooltip.cm-read-only-tooltip:empty": {
        pointerEvents: "none"
      }
    });
  };
  let S = e => {
    let {
      cmRef: t,
      render: r,
      style: n,
      mainOnly: a,
      includeEmptySelection: l
    } = e;
    let [c, s] = reactCoreLibraryReexport.useState([]);
    let u = reactCoreLibraryReexport.useCallback(e => {
      Promise.resolve().then(() => {
        s(t => arrayUniqByMatcher.uniqByMatcher([e, ...t], "id"));
      });
    }, []);
    let d = reactCoreLibraryReexport.useCallback(e => {
      Promise.resolve().then(() => {
        s(t => t.filter(t => t.id !== e.id));
      });
    }, []);
    let g = reactCoreLibraryReexport.useCallback(e => {
      let o = t.current?.view;
      if (o) {
        let {
          doc: t
        } = e.state;
        let r = codemirrorEditorUtils.getVisibleLineRange(o);
        let n = t.lineAt(e.range.from);
        let i = t.lineAt(e.range.to);
        return {
          visible_range: {
            start_line: o.state.doc.lineAt(r.from).number,
            end_line: o.state.doc.lineAt(r.to).number
          },
          select_range: {
            start_line: n.number,
            start_column: e.range.from - n.from + 1,
            end_line: i.number,
            end_column: e.range.to - i.from + 1
          },
          cursor_line: t.lineAt(e.range.head).number,
          select_content: t.sliceString(n.from, i.to),
          user_select_code: t.sliceString(e.range.from, e.range.to)
        };
      }
    }, []);
    return {
      extension: reactCoreLibraryReexport.useMemo(() => {
        var e;
        return [J, C(e = {
          style: n,
          mainOnly: a,
          includeEmptySelection: l,
          onMount: u,
          onDestroy: d
        }), N(e), function (e = 3000) {
          return codemirrorReactWrapper.Plugin.fromClass(class {
            showTooltip() {
              this.view.dispatch({
                effects: x.of(true)
              });
            }
            hideTooltip() {
              this.view.dispatch({
                effects: x.of(false)
              });
            }
            update(e) {
              for (let t of e.transactions) {
                for (let e of t.effects) {
                  if (e.is(x)) {
                    if (e.value) {
                      this.resetTimer();
                    } else {
                      this.clearTimer();
                    }
                  }
                }
              }
            }
            clearTimer() {
              if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
              }
            }
            resetTimer() {
              this.clearTimer();
              this.timer = window.setTimeout(() => {
                this.view.dispatch({
                  effects: x.of(false)
                });
                this.timer = null;
              }, e);
            }
            check() {
              if (this.view.state.field(J, false)) {
                this.resetTimer();
              } else {
                this.clearTimer();
              }
            }
            destroy() {
              this.view.dom.removeEventListener("keydown", this.onKeyDown, true);
              this.view.dom.removeEventListener("paste", this.onPaste, true);
              if (this.timer) {
                clearTimeout(this.timer);
              }
            }
            constructor(e) {
              this.view = e;
              k(this, "timer", null);
              k(this, "onKeyDown", e => {
                if (!!this.view.state.readOnly && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1) {
                  this.showTooltip();
                }
              });
              k(this, "onPaste", () => {
                if (this.view.state.readOnly) {
                  this.showTooltip();
                }
              });
              this.view.contentDOM.addEventListener("keydown", this.onKeyDown, true);
              this.view.contentDOM.addEventListener("paste", this.onPaste, true);
              this.check();
            }
          });
        }(), F];
      }, [n, a, l]),
      portal: r && c.map(e => {
        return reactDomEntryWrapper.createPortal(r(g(e) ?? {}), e.dom);
      })
    };
  };
  var domElementCreator = require("dom-element-creator") /*id: 476723*/;
  let M = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M1.46967 8.4302C1.17678 8.1373 1.17678 7.66243 1.46967 7.36954L5.29289 3.54631C5.68342 3.15579 6.31658 3.15579 6.70711 3.54631L10.5303 7.36953C10.8232 7.66243 10.8232 8.1373 10.5303 8.4302C10.2374 8.72309 9.76256 8.72309 9.46967 8.4302L6 4.96053L2.53033 8.4302C2.23744 8.72309 1.76256 8.72309 1.46967 8.4302Z"
    fill="currentColor" fill-opacity="1" />
</svg>
`;
  let T = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M10.5303 3.55903C10.8232 3.85192 10.8232 4.32679 10.5303 4.61969L6.70711 8.44291C6.31658 8.83343 5.68342 8.83343 5.29289 8.44291L1.46967 4.61969C1.17678 4.32679 1.17678 3.85192 1.46967 3.55903C1.76256 3.26613 2.23744 3.26613 2.53033 3.55903L6 7.0287L9.46967 3.55903C9.76256 3.26613 10.2374 3.26613 10.5303 3.55903Z"
    fill="currentColor" fill-opacity="1" />
</svg>
`;
  let D = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" fill="none">
  <path
    d="M9.88921 9.88908C10.1821 9.59619 10.1821 9.12131 9.88921 8.82842L7.06078 5.99999L9.8892 3.17157C10.1821 2.87868 10.1821 2.40381 9.8892 2.11091C9.59631 1.81802 9.12143 1.81802 8.82854 2.11091L6.00012 4.93933L3.1717 2.11091C2.8788 1.81801 2.40393 1.81801 2.11104 2.11091C1.81814 2.4038 1.81814 2.87867 2.11104 3.17157L4.93946 5.99999L2.11103 8.82843C1.81813 9.12132 1.81813 9.59619 2.11103 9.88909C2.40392 10.182 2.87879 10.182 3.17169 9.88909L6.00012 7.06065L8.82855 9.88908C9.12144 10.182 9.59632 10.182 9.88921 9.88908Z"
    fill="currentColor" fill-opacity="1" />
</svg>
`;
  function E(e, t, r) {
    var o;
    if ((t = typeof (o = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  function P(e, t) {
    return e.state.phrase(t);
  }
  class A {
    commit() {
      let e = new codemirrorSearchReplacePlugin.SearchQuery({
        search: this.searchField.value,
        caseSensitive: this.caseField.checked,
        regexp: this.reField.checked,
        wholeWord: this.wordField.checked,
        replace: this.replaceField.value
      });
      if (!e.eq(this.query)) {
        this.query = e;
        this.view.dispatch({
          effects: codemirrorSearchReplacePlugin.searchEffectType.of(e)
        });
      }
    }
    keydown(e) {
      if (codemirrorReactWrapper.keyBindingHandler(this.view, e, "search-panel")) {
        e.preventDefault();
      } else if (e.keyCode == 13 && e.target == this.searchField) {
        e.preventDefault();
        (e.shiftKey ? codemirrorSearchReplacePlugin.selectPrevMatch : codemirrorSearchReplacePlugin.selectNextMatch)(this.view);
      } else if (e.keyCode == 13 && e.target == this.replaceField) {
        e.preventDefault();
        codemirrorSearchReplacePlugin.replaceNextMatch(this.view);
      }
    }
    update(e) {
      for (let t of e.transactions) {
        for (let e of t.effects) {
          if (e.is(codemirrorSearchReplacePlugin.searchEffectType) && !e.value.eq(this.query)) {
            this.setQuery(e.value);
          }
        }
      }
    }
    setQuery(e) {
      this.query = e;
      this.searchField.value = e.search;
      this.replaceField.value = e.replace;
      this.caseField.checked = e.caseSensitive;
      this.reField.checked = e.regexp;
      this.wordField.checked = e.wholeWord;
    }
    mount() {
      this.searchField.select();
    }
    get pos() {
      return 80;
    }
    get top() {
      return true;
    }
    constructor(e) {
      this.view = e;
      E(this, "searchField", undefined);
      E(this, "replaceField", undefined);
      E(this, "caseField", undefined);
      E(this, "reField", undefined);
      E(this, "wordField", undefined);
      E(this, "dom", undefined);
      E(this, "query", undefined);
      E(this, "matches", []);
      let t = this.query = codemirrorSearchReplacePlugin.getQuery(e.state);
      function r(e, t, r) {
        return domElementCreator.createDomElement("button", {
          class: "cm-button",
          name: e,
          onclick: t,
          type: "button"
        }, r);
      }
      function o(e) {
        return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
      }
      codemirrorSearchReplacePlugin.getQuery(e.state);
      this.commit = this.commit.bind(this);
      this.searchField = domElementCreator.createDomElement("input", {
        value: t.search,
        placeholder: "查找",
        "aria-label": P(e, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit
      });
      this.replaceField = domElementCreator.createDomElement("input", {
        value: t.replace,
        placeholder: P(e, "Replace"),
        "aria-label": P(e, "Replace"),
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
        checked: t.caseSensitive,
        onchange: this.commit
      });
      this.reField = domElementCreator.createDomElement("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: t.regexp,
        onchange: this.commit
      });
      this.wordField = domElementCreator.createDomElement("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: t.wholeWord,
        onchange: this.commit
      });
      this.dom = domElementCreator.createDomElement("div", {
        onkeydown: e => this.keydown(e),
        class: "cm-search"
      }, [this.searchField, r("prev", () => codemirrorSearchReplacePlugin.selectPrevMatch(e), [o(M)]), r("next", () => {
        codemirrorSearchReplacePlugin.selectNextMatch(e);
      }, [o(T)]), domElementCreator.createDomElement("button", {
        name: "close",
        onclick: () => codemirrorSearchReplacePlugin.closeSearch(e),
        "aria-label": P(e, "close"),
        type: "button"
      }, [o(D)])]);
    }
  }
  let O = codemirrorReactWrapper.EditorView.baseTheme({
    ".cm-panels-top:has(.cm-search:only-child)": {
      borderBottomWidth: "0px"
    },
    ".cm-panel.cm-search": {
      position: "absolute",
      right: "16px"
    }
  });
  let j = () => [O, codemirrorSearchReplacePlugin.searchPanel({
    top: true,
    createPanel: e => new A(e)
  })];
  let Z = codemirrorReactWrapper.EditorView.baseTheme({
    ".cm-foldGutter": {
      padding: "0 6px 0 2px"
    },
    ".cm-foldGutter .cm-gutterElement": {
      color: "#737780"
    },
    ".cm-foldGutter .cm-gutterElement .fold-button": {
      visibility: "hidden",
      opacity: "0",
      transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out"
    },
    ".cm-gutters:hover .cm-gutterElement .fold-button": {
      visibility: "visible",
      opacity: "1"
    }
  });
  let B = () => [codemirrorLanguageSupport.foldGutter({
    markerDOM: e => {
      let t = window.document.createElement("span");
      t.textContent = e ? "⌄" : "›";
      t.className = e ? "fold-button" : "unfold-button";
      return t;
    }
  }), Z];
  function q(e, t, r) {
    var o;
    if ((t = typeof (o = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  new class extends codemirrorReactWrapper.RangeValue {
    toDOM() {
      let e = document.createElement("div");
      e.style.width = "2px";
      return e;
    }
    constructor(...e) {
      super(...e);
      q(this, "elementClass", "cm-selection-gutter-element");
    }
  }();
  let H = new class extends codemirrorReactWrapper.RangeValue {
    constructor(...e) {
      super(...e);
      q(this, "elementClass", "cm-selectLineGutter");
    }
  }();
  let I = codemirrorReactWrapper.gutterMarkers.compute(["selection"], e => {
    let t = [];
    for (let r of e.selection.ranges) {
      if (!r.empty) {
        let o = e.doc.lineAt(r.from);
        let n = e.doc.lineAt(r.to);
        for (let r = o.number; r <= n.number; r++) {
          t.push({
            from: e.doc.line(r).from,
            to: e.doc.line(r).to,
            value: H
          });
        }
      }
    }
    return codemirrorReactWrapper.RangeSet.of(t);
  });
  let K = () => I;
  let R = codemirrorReactWrapper.Plugin.fromClass(class {
    destroy() {
      this.dom.remove();
    }
    constructor(e) {
      var t;
      var r;
      var o;
      this.view = e;
      r = undefined;
      if ((t = typeof (o = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var o = r.call(e, t || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(t = "dom", "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
      this.dom = document.createElement("div");
      this.dom.className = "cm-gutters-opposite";
      this.dom.style.minHeight = `${this.view.contentHeight / this.view.scaleY}px`;
      e.scrollDOM.insertBefore(this.dom, e.contentDOM.nextSibling);
    }
  });
  let W = codemirrorReactWrapper.EditorView.baseTheme({
    ".cm-gutters-opposite": {
      flexShrink: "0",
      position: "sticky",
      right: "0",
      height: "100%",
      backgroundColor: "#FFF"
    }
  });
  let Q = () => [R, W];
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let V = codemirrorReactWrapper.EditorView.theme({
    "&": {
      fontSize: "13px",
      fontWeight: "500",
      fontFeatureSettings: "\"liga\" 0, \"calt\" 0"
    },
    "&.cm-focused": {
      outline: "unset"
    },
    ".cm-gutters": {
      border: "none"
    },
    ".cm-gutters .cm-lineNumbers": {
      minWidth: "6ch"
    },
    ".cm-gutters .cm-lineNumbers .cm-selectLineGutter": {
      color: "var(--code-text)"
    },
    ".cm-activeLine": {
      background: "#afb6c326"
    },
    ".cm-activeLineGutter": {
      background: "unset",
      color: "var(--code-text)"
    },
    ".cm-line": {
      padding: "0 4px 0 1px"
    },
    ".cm-foldPlaceholder": {
      background: "unset",
      border: "none",
      color: "unset",
      letterSpacing: "-0.2em",
      padding: "0 0.2em 0 0"
    },
    ".cm-line:has(.cm-foldPlaceholder)": {
      background: "var(--primary-transparent-3, rgba(0, 102, 255, 0.15))"
    },
    ".cm-matchingBracket": {
      position: "relative"
    },
    ".cm-matchingBracket::before": {
      content: "\"\"",
      width: "100%",
      height: "100%",
      position: "absolute",
      border: "0.5px solid var(--s-color-text-quaternary, rgba(0, 0, 0, 0.30))",
      boxSizing: "border-box"
    }
  });
  let z = codemirrorReactWrapper.EditorView.theme({
    ".cm-deletedChunk": {
      backgroundColor: "rgba(255, 231, 231, 0.8)",
      paddingLeft: "0px"
    },
    "&.cm-merge-b .cm-changedLine": {
      backgroundColor: "rgba(218, 244, 224, 0.8)"
    },
    "&.cm-merge-b .cm-deletedText": {
      background: "rgba(255, 59, 48, 0.3)"
    },
    "&.cm-merge-b .cm-changedText": {
      background: "rgba(52, 199, 89, 0.3)"
    }
  });
  let $ = {
    gfm: "markdown",
    clike: "cpp"
  };
  let U = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      wrapperClassName: r,
      wrapperStyle: c,
      value: s,
      onChange: p,
      extensions: h,
      editable: g,
      readOnly: v,
      height: f,
      language: b = "text",
      renderSelectionMenu: y,
      selectionMenuConfig: k,
      renderReadOnlyTooltip: _,
      readOnlyTooltipConfig: x,
      theme: J = "light",
      onFold: F,
      onUnfold: C,
      ...N
    } = e;
    let L = reactCoreLibraryReexport.useRef(null);
    let [M, T] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      let t = codemirrorLanguageSupport.LanguageDescription.matchLanguageName(codemirrorLangDefinitions.languageDefinitions, $[b] ?? b);
      if (t) {
        t.load().then(e => T(e));
      } else {
        T(undefined);
      }
    }, [b]);
    let D = reactCoreLibraryReexport.useMemo(() => J === "light" ? u : J === "dark" ? d : J, [J]);
    let {
      extension: E,
      portal: P
    } = w({
      cmRef: L,
      render: y,
      ...k
    });
    let {
      extension: A,
      portal: O
    } = S({
      cmRef: L,
      render: _,
      includeContentSelection: true,
      includeEmptySelection: true,
      mainOnly: true,
      ...x
    });
    let Z = reactCoreLibraryReexport.useMemo(() => codemirrorReactWrapper.EditorView.updateListener.of(e => {
      e.transactions.forEach(e => e.effects.forEach(e => {
        if (e.is(codemirrorLanguageSupport.foldEffect)) {
          if (F != null) {
            F(e.value);
          }
        } else if (e.is(codemirrorLanguageSupport.unfoldEffect)) {
          if (C != null) {
            C(e.value);
          }
        }
      }));
    }), [F, C]);
    let q = reactCoreLibraryReexport.useMemo(() => {
      let e = [codemirrorReactWrapper.createEditorExtensions({
        foldGutter: false,
        autocompletion: false
      }), B(), codemirrorLanguageSupport.getFoldExtension({
        placeholderText: "···"
      }), K(), Q(), V, z, E, A, Z, j()];
      if (M) {
        e.push(M);
      }
      if (h) {
        e.push(h);
      }
      return e;
    }, [h, M, E]);
    let H = reactCoreLibraryReexport.useCallback(() => {
      var e;
      var t;
      if ((t = L.current) !== null && t !== undefined && (e = t.view) !== null && e !== undefined) {
        e.dispatch({
          effects: codemirrorReactWrapper.EditorView.scrollIntoView(0, {
            y: "start"
          })
        });
      }
    }, []);
    reactCoreLibraryReexport.useImperativeHandle(t, () => {
      let e = {};
      Object.defineProperty(e, "visible_range", {
        enumerable: true,
        get: () => {
          let t = L.current?.view;
          if (t) {
            let e = codemirrorEditorUtils.getVisibleLineRange(t);
            return {
              start_line: t.state.doc.lineAt(e.from).number,
              end_line: t.state.doc.lineAt(e.to).number
            };
          }
        }
      });
      return {
        ...L.current,
        context: e,
        scrollToTop: H
      };
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(codemirrorReactWrapper.CodeMirror, {
        ref: L,
        className: classNamesUtil.classNames_1({
          dark: J === "dark"
        }, r),
        style: c,
        height: f,
        value: s,
        extensions: q,
        onChange: p,
        theme: D,
        editable: g,
        readOnly: v,
        basicSetup: false,
        "data-language-input": b,
        "data-language": M == null ? undefined : M.language.name,
        ...N
      }), P, O]
    });
  });
  require.d(exports, {
    CodeMirrorEditor: function () {
      return U;
    }
  });
}