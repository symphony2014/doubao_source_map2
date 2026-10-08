// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ph' to 'equationPlaceholder'
// - Renamed export 'hx' to 'equationErrorView'
// - Renamed export 'CQ' to 'EquationRenderer'
// - Renamed export '_X' to 'EquationViewLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 541234
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var s;
  var l;
  var u;
  var a;
  var c;
  var d;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var h = reactLoadableComponent;
  require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var warningLightColorfulIcon = require("warning-light-colorful-icon") /*id: 665192*/;
  var equationRenderer = require("equation-renderer") /*id: 901840*/;
  var latexMathDetector = require("latex-math-detector") /*id: 803017*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var katexRendererLoader = require("katex-renderer-loader") /*id: 62741*/;
  var iosEditorLeafTextWrapper = require("ios-editor-leaf-text-wrapper") /*id: 575135*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  let C = null;
  async function R() {
    if (C) {
      return C;
    }
    try {
      return C = (await Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx_equation_view") /*id: 59870*/]).then(require.bind(require, "docx-equation-view-renderer") /*id: 674904*/)).renderEquationContent;
    } catch (e) {
      docxUtilityHelpers.captureException(`Failed to load equation compoennt: ${String(e)}`);
      return null;
    }
  }
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("empty-module") /*id: 165985*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function w(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let N = () => reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "equation-block-error-placeholder",
    children: [reactJsxRuntimeCoreReexport.jsx(warningLightColorfulIcon.WarningLightIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
      className: "equation-block-error-placeholder-text",
      children: t("CreationDoc_Docs_Equation.placeholder.error")
    })]
  });
  let A = e => {
    let n = t("CreationDoc_Docs_Equation.placeholder.edit");
    if (!e || browserEnvironmentDetectionUtils.browserDetector.isH5) {
      n = t("CreationDoc_Docs_Equation.placeholder.view");
    }
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "equation-block-placeholder",
      children: n
    });
  };
  let L = reactJsxRuntimeCoreReexport.jsx("div", {
    className: "equation-block-loading",
    children: reactJsxRuntimeCoreReexport.jsx("div", {
      className: "equation-block-loading-inner"
    })
  });
  let x = h({
    loader: () => Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx_equation_view") /*id: 59870*/]).then(require.bind(require, "docx-equation-view") /*id: 527705*/),
    loading: () => L,
    render: (e, n) => {
      let {
        instanceRef: r,
        ...i
      } = n;
      let o = e.default;
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...i,
        ref: r
      });
    }
  });
  let B = h.Map({
    loader: {
      View: () => Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx_equation_view") /*id: 59870*/]).then(require.bind(require, "equation-block-reexport") /*id: 607458*/),
      renderFunc: R
    },
    loading: () => L,
    render: (e, n) => {
      let {
        ...r
      } = n;
      let i = e.View.default;
      let o = e.renderFunc;
      return reactJsxRuntimeCoreReexport.jsx(i, {
        editor: r.editor,
        length: r.context.insert.length,
        objectID: r.objectID,
        zoneId: r.context.zoneId,
        defaultEquation: r.defaultEquation,
        displayMode: r.displayMode,
        popoverContainer: r.popoverContainer,
        renderEquationContent: o
      });
    }
  });
  let $ = e => {
    let n = [];
    let r = e;
    let {
      parent: i
    } = e;
    do {
      if (i) {
        let {
          position: e
        } = r;
        n.unshift(e);
        r = i;
        i = i.parent;
      }
    } while (i !== null && i !== r);
    return n;
  };
  c = reactDomContextDecorator.withContextConsumer();
  d = class e extends equationRenderer.EquationRenderer {
    get editorAPI() {
      return this.blockManager.editorAPI;
    }
    renderToString(e) {
      try {
        let n = katexRendererLoader.getKatexRenderer();
        if (!n) {
          katexRendererLoader.loadKatexRenderer();
          return;
        }
        return n.renderToString(`${String.raw`\displaystyle `}${e}`, {
          displayMode: true,
          leqno: false,
          fleqn: false,
          throwOnError: true,
          strict: "warn",
          trust: false,
          output: "html"
        });
      } catch (e) {
        return false;
      }
    }
    clearCounterMapDataByRecordId(n) {
      var r;
      if ((r = e.counterMap) !== null && r !== undefined) {
        r.forEach((r, i) => {
          if (r.recordId === n) {
            var o;
            if ((o = e.counterMap) !== null && o !== undefined) {
              o.delete(i);
            }
          }
        });
      }
    }
    getEquationCounterNum(e) {
      let n = this.renderToString(e);
      if (n) {
        return (n.match(/eqn-num/g) || []).length;
      } else {
        return 0;
      }
    }
    checkExistEquationCounter(e) {
      return !!(e.indexOf("{equation}") > -1) || !!(e.indexOf("{align}") > -1) || !!(e.indexOf("{alignat}") > -1) || !!(e.indexOf("{gather}") > -1);
    }
    updateBlockEquationCounter(n) {
      if (!n || !editorTextBlockUtilities.isTextBlock(n)) {
        return;
      }
      let {
        zoneState: r
      } = n;
      let i = r.getEntities([[e.KEY]]);
      if (i.length !== 0) {
        katexRendererLoader.loadKatexRenderer().then(() => {
          let r = {};
          let o = 0;
          i.map((n, i) => {
            let s = n.attributes[e.KEY];
            if (this.checkExistEquationCounter(s)) {
              let e = this.getEquationCounterNum(s);
              if (e > 0) {
                r[n.attributes.objectID] = [i, e];
                o += e;
              }
            }
          });
          if (o === 0) {
            return;
          }
          let s = [];
          if (e.counterMap) {
            for (let i in r) {
              let [o, l] = r[i];
              s.push(o);
              e.counterMap.set(i, {
                counterNum: l,
                recordId: n.recordId,
                objectID: i,
                positionPath: s
              });
            }
          }
        }).catch(e => {
          docxUtilityHelpers.captureException(`updateBlockEquationCounter occur error: ${String(e)}`);
          return null;
        });
      }
    }
    getPlaceholder() {
      return L;
    }
    get commentable() {
      let e = this.blockManager.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
        optional: true
      });
      return e != null && !!e.getCommentable() && undefined;
    }
    render(n) {
      var r;
      let {
        op: i,
        index: o,
        zoneId: s,
        lineState: l,
        attributes: {
          equation: u,
          objectID: a
        }
      } = n;
      if (typeof u != "string") {
        return n.children;
      }
      if (typeof a == "string") {
        n.key = a;
      } else {
        let e = l.getOps().indexOf(i);
        n.key = `equation-${s}-line-${o}-op-${e}`;
      }
      n.class += " docx-equation-block";
      n.domAttributes.objectId = a;
      if (!((r = e.counterMap) === null || r === undefined ? undefined : r.has(a))) {
        try {
          let e = this.blockManager.getBlockModelByBlockId(Number(s));
          if (e) {
            this.updateCurrentBlockEquationCounter(e);
          }
        } catch (e) {}
      }
      let {
        editorAPI: c
      } = this;
      let d = c.config.get("isSSR");
      let f = c.config.get("isShortcut");
      let h = c.config.get("isPDF");
      let p = c.config.get("isBidirectionalLink");
      let v = u;
      let g = this.shouldRenderPlainText && !this.isShareTextLinkOptFG;
      if (g) {
        v = `[${t("CreationDoc_Docs_Equation.title")}] `;
      }
      let _ = latexMathDetector.isLatexMathEnv(v) ? cssDisplayTypes.displayTypes.block : cssDisplayTypes.displayTypes.inline;
      n.class += ` equation-display-${_} equation-leaf`;
      if (d) {
        return this.getPlaceholder();
      } else if (f || h || p) {
        return reactJsxRuntimeCoreReexport.jsx(iosEditorLeafTextWrapper.IosLeafTextWrapper, {
          selectionAPI: this.selectionAPI,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: `editor-kit-equation-block ${g ? "is-plaintext-placeholder" : ""} ${browserEnvironmentDetectionUtils.browserDetector.isMobile ? "mobile" : ""}`,
            style: {
              width: _ === cssDisplayTypes.displayTypes.block ? "100%" : "auto"
            },
            children: reactJsxRuntimeCoreReexport.jsx(x, {
              value: v,
              viewDisplay: _,
              placeholder: A(this.editor.isEditable()),
              errorPlaceholder: N(),
              onDidRender: () => {
                this.handleEquationDidRender(Number(s), a);
              },
              getKatex: katexRendererLoader.loadKatexRenderer
            })
          })
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(B, {
          editor: this._editor,
          context: n,
          objectID: a,
          defaultEquation: u,
          displayMode: _,
          popoverContainer: e.popupWrapper
        });
      }
    }
    destroy() {
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.subs.forEach(e => e.unsubscribe());
    }
    constructor(n) {
      super(n);
      w(this, "editor", undefined);
      w(this, "blockManager", undefined);
      w(this, "selectionAPI", undefined);
      w(this, "shouldRenderPlainText", false);
      w(this, "isShareTextLinkOptFG", false);
      w(this, "dispatchRenderEventTimer", new Map());
      w(this, "subs", []);
      w(this, "handleContentChange", n => {
        let {
          previous: r,
          current: i,
          options: o
        } = n;
        if ((o == null ? undefined : o.type) === "transformEquationId") {
          return;
        }
        let s = r.getEntities([["equation"]]);
        let l = i.getEntities([["equation"]]);
        let u = new Set();
        let a = new Set();
        s.forEach(e => {
          u.add(e.attributes.objectID);
        });
        l.forEach(e => {
          a.add(e.attributes.objectID);
        });
        u.forEach(n => {
          if (!a.has(n)) {
            var r;
            if ((r = e.counterMap) !== null && r !== undefined) {
              r.delete(n);
            }
            this.calculateEquationCounter();
          }
        });
      });
      w(this, "handleMutations", e => {
        let {
          mutations: n
        } = e;
        for (let e of n.removed) {
          let {
            recordId: n
          } = e.block;
          this.clearCounterMapDataByRecordId(n);
          this.calculateEquationCounter();
        }
        for (let {
          block: e
        } of n.updated) {
          this.clearCounterMapDataByRecordId(e.recordId);
          if (q(e)) {
            this.updateBlockEquationCounter(docxEditorCore.getBlockModel(e));
          }
          this.calculateEquationCounter();
        }
      });
      w(this, "calculateEquationCounter", debounceUtil_1_1.debounce(() => {
        if (!e.counterMap) {
          return;
        }
        let n = new Map();
        let r = {};
        e.counterMap.forEach(e => {
          let i = e.positionPath;
          let o = n.get(e.recordId);
          if (o) {
            i = o.concat(e.positionPath);
          } else {
            let r = $(this.blockManager.getBlockModelsByRecordId(e.recordId)[0]);
            n.set(e.recordId, r);
            i = r.concat(e.positionPath);
          }
          i.reduce((n, r, o) => {
            n[r] ||= {
              children: {},
              current: []
            };
            if (o === i.length - 1) {
              n[r].current.push(e);
            }
            return n[r].children;
          }, r);
        });
        let i = 0;
        let o = n => {
          Object.keys(n).sort((e, n) => Number(e) - Number(n)).forEach(r => {
            let {
              current: s,
              children: l
            } = n[r];
            s.sort((e, n) => Number(e) - Number(n)).forEach(n => {
              e.counterIndexMap.set(n.objectID, i);
              i += n.counterNum;
            });
            if (Object.keys(l).length > 0) {
              o(l);
            }
          });
        };
        o(r);
        e.equationCounterIndexUpdateSignal.next(e.counterIndexMap);
      }, 1000));
      w(this, "initEquationCounter", () => {
        var n;
        e.counterMap = new Map();
        let {
          blockManager: r
        } = this;
        if ((n = r.structService.root) !== null && n !== undefined) {
          n.traverse(e => {
            if (!q(e)) {
              return;
            }
            let n = docxEditorCore.getBlockModel(e);
            if (n) {
              this.updateBlockEquationCounter(n);
            }
          });
        }
        this.calculateEquationCounter();
        this.subs.push(this.blockManager.structService.mutation$.subscribe(this.handleMutations));
      });
      w(this, "updateCurrentBlockEquationCounter", e => {
        this.updateBlockEquationCounter(e);
        this.calculateEquationCounter();
      });
      w(this, "handleEquationDidRender", (e, n) => {
        var r;
        var i;
        let o = this.blockManager.getBlockViewByBlockIdNotCheck(e);
        if (!this.isShareTextLinkOptFG || (o == null ? undefined : (r = o.hostElement) === null || r === undefined ? undefined : r.querySelector(".katex")) || (o == null ? undefined : (i = o.hostElement) === null || i === undefined ? undefined : i.querySelector(".equation-block-placeholder"))) {
          if (this.dispatchRenderEventTimer.has(n)) {
            window.clearTimeout(this.dispatchRenderEventTimer.get(n));
          }
          this.blockManager.layoutManager.notifyNodeHeightChange(e);
          let r = window.setTimeout(() => {
            window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("equationDidRender"));
            docxShortcutFeatureDetection.debugLogger(`[equation] render success: ${e}_${n}`);
          }, 100);
          this.dispatchRenderEventTimer.set(n, r);
        }
      });
      this.editor = n.editor;
      this.blockManager = n.blockManager;
      this.selectionAPI = n.selectionAPI;
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
      this.shouldRenderPlainText = !!this.editorAPI.config.get("shouldRenderPlainText");
      this.isShareTextLinkOptFG = !!this.editorAPI.config.get("isShareTextLinkOptFG");
      let {
        lazyRecordStatus: r
      } = n.blockManager;
      if (!e.counterMap && !this.editorAPI.config.get("isSSR") && !!r) {
        this.subs.push(r.applyAllDone$.subscribe(this.initEquationCounter));
      }
    }
  };
  w(d, "initEquationSet", new Set());
  w(d, "toolboxInsertEquationSet", new Set());
  w(d, "counterMap", undefined);
  w(d, "counterIndexMap", new Map());
  w(d, "equationCounterIndexUpdateSignal", new docxEditorCore.SubjectType());
  i = d.prototype;
  o = "render";
  s = [c];
  l = Object.getOwnPropertyDescriptor(d.prototype, "render");
  u = d.prototype;
  a = {};
  Object.keys(l).forEach(function (e) {
    a[e] = l[e];
  });
  a.enumerable = !!a.enumerable;
  a.configurable = !!a.configurable;
  if ("value" in a || a.initializer) {
    a.writable = true;
  }
  a = s.slice().reverse().reduce(function (e, n) {
    return n(i, o, e) || e;
  }, a);
  if (u && a.initializer !== undefined) {
    a.value = a.initializer ? a.initializer.call(u) : undefined;
    a.initializer = undefined;
  }
  if (a.initializer === undefined) {
    Object.defineProperty(i, o, a);
  }
  let F = d;
  function q(e) {
    if (!editorTextBlockUtilities.isAgendaBlock(e.type)) {
      return false;
    }
    let n = e.snapshot;
    return !!contentDeltaUtilityFunctions.y(n.text, F.KEY);
  }
  require.d(exports, {
    equationPlaceholder: function () {
      return A;
    },
    equationErrorView: function () {
      return N;
    },
    EquationRenderer: function () {
      return F;
    },
    EquationViewLoader: function () {
      return x;
    }
  });
}