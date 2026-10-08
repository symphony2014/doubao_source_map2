// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'registerCodeBlockComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 799159
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var g = classnamesUtils;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var codeBlockHighlightjsConstants = require("code-block-highlightjs-constants") /*id: 433332*/;
  var highlightjsLanguageAliases = require("highlightjs-language-aliases") /*id: 807150*/;
  var editorConstantTypes = require("editor-constant-types") /*id: 392244*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var virtualListModule = require("virtual-list-module") /*id: 727271*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var codeHighlightController = require("code-highlight-controller") /*id: 63599*/;
  var highlightJsLoader = require("highlight-js-loader") /*id: 123513*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  function N(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class A {
    static getInstance() {
      A.instance ||= new A();
      return A.instance;
    }
    async getWorker() {
      await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        name: "docx.codeBlock.highlightWaitForStage",
        action: () => Promise.resolve(0)
      });
      if (this.worker) {
        return this.worker;
      } else {
        this.getWorkerPromise ||= new Promise(e => {
          docxTaskSchedulerUtilities.scheduleTaskWithConfig({
            name: "docx.codeBlock.highlight",
            action: () => require.e("code_worker") /*id: 85453*/.then(require.bind(require, "code-highlight-worker") /*id: 366070*/)
          }).then(i => {
            let {
              default: r
            } = i;
            this.worker = new r();
            e(this.worker);
          }).catch(e => {}).finally(() => {
            this.getWorkerPromise = null;
          });
        });
        return this.getWorkerPromise;
      }
    }
    initEvents() {
      this.getWorker().then(e => {
        e.addEventListener("message", this.onmessage);
      }).catch(e => {});
    }
    onHighlightTaskFinished(e) {
      let {
        zoneId: i,
        localMarks: r
      } = e;
      let n = this.highlightTasks.get(i);
      if (n == null ? undefined : n.length) {
        let {
          onLocalMarksReady: e
        } = n.shift();
        if (n.length === 0) {
          e(r);
          this.highlightTasks.delete(i);
        } else {
          this.runHighlightTask(i);
        }
      }
    }
    onIdentifyLanguageTaskFinished(e) {
      let {
        zoneId: i,
        localMarks: r,
        language: n
      } = e;
      let o = this.identifyLanguageTasks.get(i);
      if (o == null ? undefined : o.length) {
        let {
          onLanguageIdentified: e
        } = o.shift();
        if (o.length === 0) {
          e({
            localMarks: r,
            language: n
          });
          this.identifyLanguageTasks.delete(i);
        } else {
          this.runIdentifyLanguageTask(i);
        }
      }
    }
    runHighlightByWorker(e) {
      let {
        zoneId: i,
        code: r,
        language: n
      } = e;
      this.getWorker().then(e => {
        e.postMessage({
          type: codeBlockHighlightjsConstants.highlightOptions.HIGHLIGHT,
          payload: {
            zoneId: i,
            code: r,
            language: n
          }
        });
      }).catch(e => {});
    }
    runHighlightTask(e) {
      let i = this.highlightTasks.get(e);
      if (i == null ? undefined : i[0]) {
        let {
          code: r,
          language: n
        } = i[0];
        this.runHighlightByWorker({
          zoneId: e,
          code: r,
          language: n
        });
      }
    }
    runIdentifyLanguageTask(e) {
      let i = this.identifyLanguageTasks.get(e);
      if (i == null ? undefined : i[0]) {
        let {
          code: e,
          zoneId: r
        } = i[0];
        this.worker.postMessage({
          type: codeBlockHighlightjsConstants.highlightOptions.AUTO_IDENTIFY_LANGUAGE,
          payload: {
            code: e,
            zoneId: r
          }
        });
      }
    }
    addHighlightTask(e) {
      let {
        zoneId: i,
        code: r,
        language: n,
        onLocalMarksReady: o
      } = e;
      let l = {
        code: r,
        language: n,
        onLocalMarksReady: o
      };
      let s = this.highlightTasks.get(i);
      if (s) {
        this.highlightTasks.set(i, [s.shift(), l]);
      } else {
        this.highlightTasks.set(i, [l]);
        this.runHighlightTask(i);
      }
    }
    addIdentifyLanguageTask(e) {
      let {
        zoneId: i,
        code: r,
        onLanguageIdentified: n
      } = e;
      let o = {
        code: r,
        onLanguageIdentified: n,
        zoneId: i
      };
      let l = this.identifyLanguageTasks.get(i);
      if (l) {
        this.identifyLanguageTasks.set(i, [l.shift(), o]);
      } else {
        this.identifyLanguageTasks.set(i, [o]);
        this.runIdentifyLanguageTask(i);
      }
    }
    clearHighlightTask(e) {
      this.highlightTasks.delete(e);
    }
    clearIdentifyLanguageTask(e) {
      this.identifyLanguageTasks.delete(e);
    }
    subscribeDestroy(e) {
      if (!this.blockManager && e) {
        this.blockManager = e;
        this.blockManager.editorAPI.lifecycle.editorWillDestroy$.subscribe(() => {
          this.destroy();
        });
      }
    }
    destroy() {
      this.highlightTasks.clear();
      this.identifyLanguageTasks.clear();
      if (this.worker) {
        this.worker.terminate();
      }
      this.getWorkerPromise = null;
      this.blockManager = null;
      A.instance = null;
    }
    constructor() {
      N(this, "worker", undefined);
      N(this, "getWorkerPromise", undefined);
      N(this, "blockManager", undefined);
      N(this, "highlightTasks", undefined);
      N(this, "identifyLanguageTasks", undefined);
      N(this, "onmessage", e => {
        let {
          data: i
        } = e;
        switch (i.type) {
          case codeBlockHighlightjsConstants.highlightOptions.HIGHLIGHT:
            this.onHighlightTaskFinished(i.data);
            break;
          case codeBlockHighlightjsConstants.highlightOptions.AUTO_IDENTIFY_LANGUAGE:
            this.onIdentifyLanguageTaskFinished(i.data);
        }
      });
      this.highlightTasks = new Map();
      this.identifyLanguageTasks = new Map();
      this.initEvents();
    }
  }
  function P(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  N(A, "instance", undefined);
  class D extends codeHighlightController.HighlightController {
    get highlight() {
      return highlightJsLoader.getHighlightJs();
    }
    getFolded() {
      var e;
      return !!((e = this.codeFoldService) === null || e === undefined ? undefined : e.isFolded(this.blockId));
    }
    get codeWorkerManager() {
      return A.getInstance();
    }
    getHighlightMarksLimitPerLine() {
      return 1000;
    }
    get languageMap() {
      return highlightjsLanguageAliases.displayNames;
    }
    get sortedLanguageList() {
      return highlightjsLanguageAliases.languageNames;
    }
    get defaultLanguage() {
      return codeBlockHighlightjsConstants.plainTextLabel;
    }
    isCodeBlockZoneState(e) {
      let i = e.getZoneId();
      let r = this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(i));
      return r && r.type === docBlockTypeConstants.blockTypeConstants.CODE;
    }
    getLanguage(e) {
      let i = e.getZoneId();
      return this.blockManager.getBlockModelByBlockId(contentDeltaUtilityFunctions.toNumber(i)).language;
    }
    diffContentChanges(e) {
      let {
        previous: i,
        current: r,
        deltaSet: n
      } = e;
      let o = contentDeltaUtilityFunctions.toString(this.blockId);
      let l = r.getZoneState(o);
      let s = i.getZoneState(o);
      if (n.get(o) && l && this.isCodeBlockZoneState(l) && (!e.options.type || ["pasteTextIntoTextualBlock", "applyRemoteOperations"].includes(e.options.type) || (s == null ? undefined : s.getModelText()) !== l.getModelText())) {
        return {
          highlightZones: [{
            zoneId: o,
            async: l.getModelText().length < 500
          }],
          identifyZoneIds: []
        };
      } else {
        return {
          highlightZones: [],
          identifyZoneIds: []
        };
      }
    }
    highlightBlockWithRIC(e) {
      let i = contentDeltaUtilityFunctions.toString(e);
      this.addHighlightRICTask(i);
    }
    highlightBlock(e) {
      let i = contentDeltaUtilityFunctions.toString(e);
      this.highlightZone(i);
    }
    async identifyCodeLanguage(e) {
      return this.identifyLanguage(contentDeltaUtilityFunctions.toString(e));
    }
    constructor(e) {
      super(e);
      P(this, "blockManager", undefined);
      P(this, "blockId", undefined);
      P(this, "codeFoldService", undefined);
      this.blockManager = e.blockManager;
      this.blockId = e.blockId;
      this.codeFoldService = e.codeFoldService;
    }
  }
  var docxCaptionSlotDefinition = require("docx-caption-slot-definition") /*id: 591389*/;
  var docxCaptionTextCheck_1 = require("docx-caption-text-check_1") /*id: 289941*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var docxCodeblockConfigConstants = require("docx-codeblock-config-constants") /*id: 587865*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var codeFoldResizeConstants = require("code-fold-resize-constants") /*id: 637342*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var compatibleEditorContext = require("compatible-editor-context") /*id: 6849*/;
  var docxBlockRenderer = require("docx-block-renderer") /*id: 984324*/;
  var loadableBlockFetcherProvider = require("loadable-block-fetcher-provider") /*id: 289910*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var localTextHighlightProvider = require("local-text-highlight-provider") /*id: 790796*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var captionDefaultUtil = require("caption-default-util") /*id: 341053*/;
  var docxFindReplaceConfig = require("docx-find-replace-config") /*id: 106059*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var flowDocShortcutRenderer = require("flow-doc-shortcut-renderer") /*id: 900780*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  class er extends flowDocShortcutRenderer.DocShortcutRenderer {
    isAtLineEnd(e) {
      let {
        line: i,
        offset: r
      } = e;
      let n = this.editor.getContentState().getActiveZone().getLine(i);
      return n && r === n.length() - 1;
    }
    destroy() {
      super.destroy();
      this.editor.off(editorEventConstants.editorEventTypes.COMPOSITION_END, this.focusAtEnd);
      this.editor.off(editorEventConstants.editorEventTypes.DID_PASTE, this.focusAtEnd);
    }
    constructor(e) {
      var i;
      var r;
      var n;
      super(e);
      i = "focusAtEnd";
      r = () => {
        let e = this.editor.selection.getSelection();
        if (e.isCollapsed() && this.isAtLineEnd(e.end)) {
          docxCodeBlockUtils.scrollToCodeEnd(this.editor);
        }
      };
      if ((i = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, i || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
      this.editor.on(editorEventConstants.editorEventTypes.COMPOSITION_END, this.focusAtEnd);
      this.editor.on(editorEventConstants.editorEventTypes.DID_PASTE, this.focusAtEnd);
    }
  }
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var flowDocKeyboardShortcutHandler = require("flow-doc-keyboard-shortcut-handler") /*id: 682530*/;
  function el(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class es extends flowDocKeyboardShortcutHandler.FlowDocKeyboardShortcutHandler {
    deserialize(e) {
      let {
        deltaSet: i
      } = e;
      i.forEach(e => {
        e.ops.forEach(e => {
          if (deltaSetCore.isInsertString(e)) {
            e.insert = e.insert.replace(/(\r\n|\n|\r)/gm, "");
          }
        });
      });
      return i;
    }
    constructor(...e) {
      super(...e);
      el(this, "handleArrowDown", e => {
        this.preventKeyDownEvent(e);
        docxCodeBlockUtils.scrollToCodeEnd(this.editor);
      });
      el(this, "handleArrowUp", e => {
        this.preventKeyDownEvent(e);
        docxCodeBlockUtils.scrollToCodeStart(this.editor);
      });
      el(this, "handleArrowLeft", e => {
        let i = this.editor.selection.getSelection();
        if (i.isCollapsed() && this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleArrowRight", e => {
        let i = this.editor.selection.getSelection();
        if (i.isCollapsed() && this.isLastLine(i.end) && this.isAtLineEnd(i.end)) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleShiftArrowDown", e => {
        let i = this.editor.selection.getSelection();
        if (this.isLastLine(i.end) && this.isAtLineEnd(i.end)) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleShiftArrowUp", e => {
        let i = this.editor.selection.getSelection();
        if (this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleEsc", e => {
        this.preventKeyDownEvent(e);
      });
      el(this, "handleMetaA", e => {
        if (this.editor.selection.isSelectingAll()) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleBackSpace", e => {
        let i = this.editor.selection.getSelection();
        if (this.editor.isEmpty() && this.isFirstLine(i.start) && this.isAtLineStart(i.start)) {
          this.preventKeyDownEvent(e);
        }
      });
      el(this, "handleShiftEnter", e => {
        this.preventKeyDownEvent(e);
      });
    }
  }
  var ea = e => {
    let {
      blockManager: i,
      selectionAPI: r,
      blockId: n
    } = e;
    return e => ({
      plugins: [[es, {
        editor: e,
        blockManager: i,
        selectionAPI: r,
        blockId: n
      }], [er, {
        editor: e,
        onChange: () => i.dispatch(docxFindReplaceConfig.findReplaceEvents.THIRD_PARTY_CONTENT_CHANGE)
      }]],
      priority: 1
    });
  };
  var editorContentFoldOperations = require("editor-content-fold-operations") /*id: 35914*/;
  function ed(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  let eu = new class {
    constructor() {
      ed(this, "initCodeFoldState", e => {});
      ed(this, "isCodeLineCollapsed", (e, i, r) => false);
      ed(this, "clear", () => {});
    }
  }();
  var resizableDraggableWrapper_1 = require("resizable-draggable-wrapper_1") /*id: 218659*/;
  var layoutConstants = require("layout-constants") /*id: 773631*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var codeBlockResizeManager = require("code-block-resize-manager") /*id: 724319*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eb = docxEditorConstantsConfig.maxUndoSteps + 10;
  var ey = e => {
    let {
      className: i,
      blockId: r,
      selectionAPI: n,
      children: o,
      codeFoldService: l,
      codeResizeService: s,
      resizable: a,
      wrap: c,
      blockManager: d,
      blockView: u
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(a);
    let [m, v] = reactCoreLibraryReexport.useState(false);
    let [b, y] = reactCoreLibraryReexport.useState(a ? layoutConstants.scaleModes.Vertical : layoutConstants.scaleModes.None);
    let w = () => {
      let e = l == null ? undefined : l.isFolded(r);
      let i = s == null ? undefined : s.getIsSupportResize(r);
      if (f.current && !e && i) {
        return layoutConstants.scaleModes.Vertical;
      } else {
        return layoutConstants.scaleModes.None;
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = l == null ? undefined : l.codeFoldStatusChange$.subscribe(e => {
        let {
          blockId: i
        } = e;
        if (i === r) {
          y(w());
        }
      });
      let i = s == null ? undefined : s.codeLocalHeightChange$.subscribe(e => {
        let {
          blockId: i
        } = e;
        if (i === r) {
          y(w());
        }
      });
      return () => {
        e.unsubscribe();
        i.unsubscribe();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = s == null ? undefined : s.getRecordHeight(r);
      if (typeof e == "number") {
        if (s != null) {
          s.updateHeightByBlockId(r, e);
        }
      }
    }, [c]);
    reactCoreLibraryReexport.useEffect(() => {
      f.current = a;
      y(w());
    }, [a, c]);
    let k = g(codeBlockConstants.codeBlockResize, i, {
      resizing: m,
      resizable: b !== layoutConstants.scaleModes.None
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: k,
      ref: p,
      children: reactJsxRuntimeCoreReexport.jsx(resizableDraggableWrapper_1.ResizableDraggable, {
        type: b,
        sensitivity: 1,
        blockId: r,
        contentEditable: !m && a,
        suppressContentEditableWarning: true,
        selectionAPI: n,
        onResizeStart: () => {
          if (!a) {
            return;
          }
          let {
            viewport: e
          } = d.editorAPI.getService(compatibleEditorContext_1.compatibleContext);
          e.setPreventScroll(true);
          setTimeout(() => {
            e.setPreventScroll(false);
          }, 1000);
          v(true);
          if (s != null) {
            s.setCodePreHeightById(r);
          }
        },
        onResizeEnd: () => {
          if (!a) {
            return;
          }
          v(false);
          let e = s == null ? undefined : s.getCodeHeightById(r);
          if (s != null) {
            s.updateHeightByBlockId(r, Number(e), true);
          }
        },
        onResizeUpdate: (e, i, o, l) => {
          var c;
          var d;
          if (!u.isNewUI || !a) {
            return;
          }
          let h = s == null ? undefined : s.getCodeHeightById(r);
          let f = (c = p.current) === null || c === undefined ? undefined : c.getBoundingClientRect().top;
          let g = (d = p.current) === null || d === undefined ? undefined : d.getBoundingClientRect().bottom;
          if (g && g + e.lastDiffY > window.innerHeight) {
            e.lastDiffY = window.innerHeight - g;
          }
          if (g && g + e.lastDiffY < eb) {
            e.lastDiffY = eb - g;
          }
          let m = e.lastDiffY + Number(h);
          if (m >= codeBlockResizeManager.codeBlockHeightLimit || f && f > eb && l && l <= window.innerHeight - 80) {
            n.setPreventScroll(true);
          } else {
            n.setPreventScroll(false);
          }
          let v = s == null ? undefined : s.getLimitHeight(m);
          if (s != null) {
            s.updateHeightByBlockId(r, v);
          }
        },
        hiddenIconDirection: [layoutConstants.anchorPoints.Top],
        scrollResizable: a,
        scrollThreshold: {
          top: 120,
          bottom: 80
        },
        children: o
      })
    });
  };
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  var codeBlockEditorComponent = require("code-block-editor-component") /*id: 229165*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var clipboardServiceProviderExport = require("clipboard-service-provider-export") /*id: 555989*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  var uiActionConstants = require("ui-action-constants") /*id: 824909*/;
  var docBlockEventTracker = require("doc-block-event-tracker") /*id: 497225*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var fileActionManagerUtils = require("file-action-manager-utils") /*id: 180452*/;
  function eP(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class eD extends codeBlockEditorComponent.CodeBlockEditor {
    get codeModel() {
      let {
        blockManager: e
      } = this.block;
      return e.getBlockModelByBlockId(this.block.id);
    }
    get docxHighlightController() {
      return this.block.docxHighlightController;
    }
    get codeText() {
      return this.codeModel.getText();
    }
    get isEmptyCode() {
      return this.codeText === "\n";
    }
    componentDidMount() {
      super.componentDidMount();
      if (!this.isEmptyCode || this.getLanguage() !== codeBlockHighlightjsConstants.plainTextLabel) {
        this.hasIdentified = true;
      }
    }
    componentDidUpdate(e) {
      super.componentDidUpdate(e);
      if (this.props.wrap !== e.wrap || !this.props.folded && this.props.folded !== e.folded) {
        var i;
        if ((i = this.codeResizeService) !== null && i !== undefined) {
          i.updateCodeHeightMap(this.block.id);
        }
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount();
    }
    bindEvent(e) {
      super.bindEvent(e);
      let {
        editor: i
      } = this.props;
      if (e && !this.hasIdentified) {
        i.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
        this.selectionAPI.onSelectionChange(this.selectionChange);
      } else {
        i.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
        this.selectionAPI.offSelectionChange(this.selectionChange);
      }
    }
    get blockManager() {
      return this.block.blockManager;
    }
    get selectionAPI() {
      return this.block.selectionAPI;
    }
    handleRemainWindowResize() {
      super.handleRemainWindowResize();
      this.block.calcScrollStateToVc();
    }
    showCopiedToast() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
        docComponentStubConfig.toastStub.showToast({
          type: docComponentStubConfig.toastStub.EToastType.SUCCESS,
          message: t("common.copied"),
          duration: 1
        });
      } else {
        uiToastManager.toastManager.success({
          type: "success",
          content: t("common.copied")
        });
      }
    }
    constructor(e) {
      super(e);
      eP(this, "block", undefined);
      eP(this, "hasIdentified", undefined);
      eP(this, "asyncCalc", undefined);
      eP(this, "codeFoldService", undefined);
      eP(this, "codeResizeService", undefined);
      eP(this, "handleContentChange", e => {
        this.onPaste(e);
        this.onTextChange(e);
      });
      eP(this, "selectionChange", (e, i) => {
        let r = this.block.hostElement.querySelector(codeBlockConstants.codeBlockContentSelector);
        if (i.find(e => e.type === docxBlockSelectionHandler_1.blockTypes.BLOCK && e.id === this.block.id)) {
          if (r) {
            r.style.overflowY = "hidden";
          }
        } else if (r) {
          r.style.overflowY = "auto";
        }
      });
      eP(this, "onPaste", e => {
        let {
          options: i,
          previous: r,
          current: n
        } = e;
        let {
          type: o
        } = i;
        let {
          zoneId: l
        } = this.block.model;
        let s = r.getZoneState(l);
        let a = n.getZoneState(l);
        if (s && a && o === "pasteTextIntoTextualBlock" && s.isEmpty() && !a.isEmpty() && this.getLanguage() === codeBlockHighlightjsConstants.plainTextLabel) {
          var c;
          var d;
          if ((d = this.docxHighlightController) !== null && d !== undefined && (c = d.identifyCodeLanguage(this.block.id)) !== null && c !== undefined) {
            c.then(e => {
              let {
                language: i
              } = e;
              this.hasIdentified = true;
              return this.setLanguage(i);
            }).catch(e => {});
          }
        }
      });
      eP(this, "onTextChange", e => {
        let {
          previous: i,
          current: r,
          deltaSet: n
        } = e;
        let o = contentDeltaUtilityFunctions.toString(this.block.id);
        if (!n.get(o)) {
          return;
        }
        let l = i.getZoneState(o);
        let s = r.getZoneState(o);
        if (l && s) {
          if (l.getModelText() !== s.getModelText()) {
            var a;
            if ((a = this.codeResizeService) !== null && a !== undefined) {
              a.updateCodeHeightMap(this.block.id);
            }
          }
        }
      });
      eP(this, "handleScroll", e => {
        this.block.handleScroll(e);
      });
      eP(this, "toggleFoldedStatus", () => {
        var e;
        let {
          isHistory: i
        } = this.block;
        if (i) {
          return;
        }
        let r = !this.folded;
        if ((e = this.codeFoldService) !== null && e !== undefined) {
          e.updateFoldStatusByBlockId(this.block.id, r, this.block.isTextEditable);
        }
        docContentPageClickCollector.collectDocContentPageClick(this.block.id, {
          actionType: "fold_code_block",
          actionValue: this.getLanguage() || codeBlockHighlightjsConstants.plainTextLabel
        }, {
          blockManager: this.blockManager
        });
        if (browserEnvironmentDetectionUtils.browserDetector.isIOS && r) {
          this.block.realScroller.scrollTop -= 1;
        }
      });
      eP(this, "setLanguage", async e => {
        await this.block.blockManager.applyTransaction("codeblock:set-lang", i => i.replace(this.block.record.id, ["language"], e));
        localStorageUtils.setStorageItem(codeBlockHighlightjsConstants.lastLanguageStorageKey, e);
      });
      eP(this, "handleLanguageChange", e => {
        this.setLanguage(e);
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.codeLanguageSwitch, this.block, this.block.blockManager, {
          actionValue: {
            value1: e
          }
        });
      });
      eP(this, "handleWrapChange", () => {
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.codeAutoWrap, this.block, this.block.blockManager, {
          actionValue: {
            value1: String(!this.getWrap())
          }
        });
        setTimeout(() => {
          let e = !this.block.model.record.snapshot.wrap;
          this.block.blockManager.applyTransaction("codeblock:set-wrap", i => i.replace(this.block.record.id, ["wrap"], e));
          localStorageUtils.setStorageItem(codeBlockConstants.lastWrappedStatusKey, String(e));
        }, 100);
      });
      eP(this, "handleCopy", async () => {
        var e;
        if (!fileActionManagerUtils.getDefaultActionMgr(this.block.blockManager).checkAction(docActionManager.actionConstants.DOCCONTENTCOPY)) {
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            this.context.selectionAPI.removeAllSelection();
          }
          return;
        }
        if (this.isEmptyCode) {
          return;
        }
        let {
          instance: i
        } = (await this.block.editorAPI.getService(clipboardServiceProviderExport.clipboardServiceId, {
          async: true,
          optional: true
        })) || {};
        if (!i) {
          return;
        }
        i.copyBlockText(this.block.id);
        let r = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.block.blockManager.editorAPI);
        if (!clipboardSecurityChecker.getClipboardEnable(r)) {
          this.showCopiedToast();
        }
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.codeCopy, this.block, this.block.blockManager);
        this.block.selectionAPI.removeAllSelection();
        if ((e = window.getSelection()) !== null && e !== undefined) {
          e.removeAllRanges();
        }
      });
      eP(this, "showMobileLanguagePicker", () => {
        window.flow.biz.util.selectCodeBlockLanguage({
          value: this.getLanguage() || codeBlockHighlightjsConstants.plainTextLabel,
          list: highlightjsLanguageAliases.languageNames,
          callback: e => {
            let {
              value: i
            } = e;
            this.handleLanguageChange(i);
          }
        });
      });
      eP(this, "onMouseDownHeader", e => {
        var i;
        var r;
        var n;
        let {
          isMobile: o
        } = browserEnvironmentDetectionUtils.browserDetector;
        if ((!o || !((r = e.target) === null || r === undefined ? undefined : (i = r.closest) === null || i === undefined ? undefined : i.call(r, `.${codeBlockConstants.codeBlockCaption}`))) && o) {
          e.stopPropagation();
          e.preventDefault();
          this.block.selectionAPI.removeAllSelection();
          if ((n = window.getSelection()) !== null && n !== undefined) {
            n.removeAllRanges();
          }
        }
      });
      this.block = e.block;
      this.asyncCalc = e.asyncCalc;
      this.hasIdentified = false;
      this.codeFoldService = e.codeFoldService;
      this.codeResizeService = e.codeResizeService;
    }
  }
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var elementAnimationUtils = require("element-animation-utils") /*id: 518404*/;
  var docxBlockLoading = require("docx-block-loading") /*id: 973751*/;
  require("empty-module_6") /*id: 693252*/;
  var documentOverflowAndDimensionsUtils = require("document-overflow-and-dimensions-utils") /*id: 319019*/;
  function e$(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function eW(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function eV(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let eU = reactCoreLibraryReexport.memo(e => {
    let {
      id: i,
      loading: r,
      isShortcut: n,
      codeBlockViewRef: o,
      getCodeProfile: l,
      highlightBlock: s
    } = e;
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (o.current && !r) {
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.TTU, {
          id: i,
          time: new Date().getTime()
        });
      }
    }, [o.current, r]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (o.current) {
        if (n) {
          s();
        }
        blockLoadPerformanceTracker.BlockLoadPerformanceTracker.modifyBlockLoadRecord({
          id: i,
          profile: l()
        });
      }
    }, [o.current]);
    return null;
  });
  n = dependencyInjectionContainer.Optional();
  o = dependencyInjectionContainer.Optional();
  s = eV((l = class extends docxTextBlockModelManager.TextBlockManager {
    static getChildrenRecordListFromBlockStruct() {
      return [];
    }
    get editorContext() {
      return this.blockManager.editorAPI.getService(compatibleEditorContext.compatibleContext);
    }
    get commentModule() {
      return this.editorContext?.commentModule;
    }
    get isNewUI() {
      return docxCodeBlockUtils.hasCodeBlockCaption(this.model.snapshot);
    }
    get placeholder() {
      return "";
    }
    get isHistory() {
      return this.props.recursionProps.isHistory === true;
    }
    get isShortcut() {
      return this.props.recursionProps.isShortcut === true;
    }
    get isPDF() {
      return this.props.recursionProps.isPDF === true;
    }
    get asyncCalc() {
      return this.isShortcut;
    }
    get caption() {
      return captionDefaultUtil.getCaptionDefault(this.snapshot);
    }
    get codePlugin() {
      var e;
      if ((e = this.editor) === null || e === undefined) {
        return undefined;
      } else {
        return e.pluginManager.getPlugin(codeBlockHighlightjsConstants.codeBlockType);
      }
    }
    get inlineFoldModule() {
      var e;
      if ((e = this.codePlugin) === null || e === undefined) {
        return undefined;
      } else {
        return e.getFoldModule();
      }
    }
    get language() {
      return highlightjsLanguageAliases.displayNames[this.model.language] || this.model.language;
    }
    get zoneId() {
      return primitiveConverters.toString(this.id);
    }
    get disableHighlighInShortcut() {
      if (!this.isShortcut) {
        return false;
      }
      let e = false;
      let {
        zoneState: i
      } = this.model;
      for (let r of i.lines) {
        if (r.length() > 300) {
          e = true;
        }
      }
      return e;
    }
    get folded() {
      return docxViewStateUtil.getViewType(reduxStoreInitializer.reduxStore.getState()) !== viewStateTypeConstants.viewTypes.PAGINATION && this.state.folded;
    }
    get isUneditedTranslationMode() {
      return this.blockManager.editorAPI.config.get("isUneditedTranslationMode");
    }
    get shouldEnableVirtualList() {
      return !this.editorAPI.config.get("isSSR");
    }
    get docxHighlightController() {
      if (!this._docxHighlightController && this.editor) {
        this._docxHighlightController = new D({
          editor: this.editor,
          blockManager: this.blockManager,
          blockId: this.id,
          codeFoldService: this.codeFoldService
        });
      }
      return this._docxHighlightController;
    }
    get isBlockEditableOnFocused() {
      return !this.folded && this.isTextEditable && !this.state.loading && !this.revising;
    }
    get isMobile() {
      return browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isH5;
    }
    blockViewDidMove() {
      super.blockViewDidMove();
      this.highlightBlock();
    }
    blockViewDidMount() {
      var e;
      var i;
      var r;
      super.blockViewDidMount();
      this.onFoldInitialized();
      this.tryDeleteSSRCache();
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.id, this.blockManager), {
        click: "block_custom_action",
        action_type: "get_code_structure",
        action_value: {
          value1: String(this.model.zoneState.length())
        },
        object_block_data: docxEditorBlockMetadataUtils.getMultipleBlockInfo([this.id], this.blockManager)
      });
      if (!this.parentId) {
        return;
      }
      this.highlightBlock();
      let {
        editor: n
      } = this;
      let {
        zoneId: o
      } = this.model;
      let l = (e = n.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(o);
      if (l == null ? undefined : l.isEnabled) {
        this.subs.push(this.blockManager.layoutManager.topChangedBlockIds$.subscribe(this.handleLayoutChange.bind(this)));
      }
      this.subs.push((i = this.codeFoldService) === null || i === undefined ? undefined : i.codeFoldStatusChange$.subscribe(this.handleCodeFoldStatusChange));
      this.subs.push((r = this.codeResizeService) === null || r === undefined ? undefined : r.codeResizeHeightChange$.subscribe(this.handleCodeHeightChange));
      this.struct.addDataListener(this.handleRecordChange);
    }
    onBufferEnter() {
      var e;
      let {
        editor: i
      } = this;
      let {
        zoneId: r
      } = this.model;
      let n = (e = i.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(r);
      if ((n == null ? undefined : n.isEnabled) && n.isMounted && this.editorContainer && document.contains(this.editorContainer)) {
        n.handleViewportUpdate();
      }
    }
    blockViewWillUnmount() {
      var e;
      super.blockViewWillUnmount();
      this.offFoldInitialized();
      this.waitInitCallbacks = [];
      if ((e = this.docxHighlightController) !== null && e !== undefined) {
        e.reset();
      }
      this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
    }
    highlightBlock() {
      var e;
      var i;
      if (!this.disableHighlighInShortcut) {
        if (this.asyncCalc) {
          if ((e = this.docxHighlightController) !== null && e !== undefined) {
            e.highlightBlock(this.id);
          }
        } else if ((i = this.docxHighlightController) !== null && i !== undefined) {
          i.highlightBlockWithRIC(this.id);
        }
      }
    }
    blockViewDidUpdate(e, i) {
      var n;
      super.blockViewDidUpdate(e, i);
      if (e.record.snapshot.language !== this.props.record.snapshot.language) {
        this.highlightBlock();
        this.handleLanguageChange(this.snapshot.language);
      }
      if (e.record.snapshot.wrap !== this.props.record.snapshot.wrap) {
        let {
          editor: e,
          model: {
            zoneId: i
          }
        } = this;
        let r = (n = e.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(i);
        if (r == null ? undefined : r.isEnabled) {
          r.handleViewportUpdate({
            linesLayoutUpdate: true
          });
        }
      }
      this.topToRoot = this.blockManager.layoutManager.getLayoutInfo(this.id)?.top;
      this.tryDeleteSSRCache();
    }
    get editorContainer() {
      return this.model.zoneState.getContainer();
    }
    get realScroller() {
      return this.getResizeCodeScroller() ?? this.editorContainer;
    }
    renderComponent(e = false) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [super.render(), e && reactJsxRuntimeCoreReexport.jsx(eU, {
          id: this.id,
          loading: this.state.loading,
          isShortcut: this.isShortcut,
          highlightBlock: () => this.highlightBlock(),
          codeBlockViewRef: this.codeBlockViewRef,
          getCodeProfile: () => this.getCodeProfile()
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: "code-children",
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount
          },
          children: this.renderChildren()
        }) : null]
      });
    }
    forceRenderAll() {
      var e = arguments.length;
      var i = Array(e);
      var r = 0;
      for (; r < e; r++) {
        i[r] = arguments[r];
      }
      let {
        model: {
          virtualListModule: n
        }
      } = this;
      if (n == null ? undefined : n.isEnabled) {
        n.forceRenderAll(...i);
      }
    }
    cancelForceRenderAll() {
      let {
        model: {
          virtualListModule: e
        }
      } = this;
      if (e == null ? undefined : e.isEnabled) {
        e.cancelForceRenderAll();
      }
    }
    renderViewportByRect(e) {
      var i;
      let {
        editor: r
      } = this;
      let {
        zoneId: n,
        zoneState: o
      } = this.model;
      let l = (i = r.virtualListManager) === null || i === undefined ? undefined : i.getVirtualListModuleOfZone(n);
      if (l == null ? undefined : l.isEnabled) {
        let i = o.offsetToPoint(e);
        l.scrollIntoViewport(i.line, {
          shouldScroll: false
        });
      }
    }
    handleLayoutChange(e) {
      var r;
      if (e.ids.length === 0) {
        return;
      }
      let n = this.blockManager.layoutManager.isBlockInViewport(this.id);
      let o = this.blockManager.layoutManager.getLayoutInfo(this.id)?.top;
      if (n && o && o !== this.topToRoot) {
        let {
          editor: e,
          model: {
            zoneId: i
          }
        } = this;
        let n = (r = e.virtualListManager) === null || r === undefined ? undefined : r.getVirtualListModuleOfZone(i);
        if (n && n.isEnabled) {
          n.handleViewportUpdate();
        }
      }
      this.topToRoot = o;
    }
    get resizeBlockCls() {
      return g({
        "code-block-new-ui-not-editable": !this.isNewUI
      });
    }
    isNeedWaitFoldReady() {
      return !this.snapshot.folded && editorContentFoldOperations.hasFoldedContent(this.snapshot.text);
    }
    isNeedDisplayLoadingView() {
      return !this.isSSR && this.isNeedWaitFoldReady();
    }
    isNeedSyncFold() {
      return !!this.isSSR && this.isNeedWaitFoldReady();
    }
    renderZoneView(e, i = []) {
      let {
        editor: r,
        asyncCalc: n,
        docxHighlightController: o,
        codeFoldService: l,
        codeResizeService: s,
        language: a
      } = this;
      let {
        zoneId: c
      } = this.model;
      let {
        record: d,
        recursionProps: u,
        syncCursorBgColor: h,
        syncCursorSelected: p,
        syncCursorBorderColor: f
      } = this.props;
      let {
        editable: v,
        copyable: b
      } = u;
      let y = !!d.snapshot.wrap || this.isPDF;
      let k = this.dependencyManager.getPlugins(this.type);
      let S = this.shouldEnableVirtualList ? this.virtualListModule : undefined;
      let M = {
        editor: r,
        zoneId: c,
        editable: v && !this.folded,
        copyable: b,
        language: a,
        wrap: y,
        syncCursorSelected: p,
        syncCursorBorderColor: f,
        syncCursorBgColor: h,
        plugins: k,
        i18n: docxCodeblockConfigConstants.codeblockTextLabels,
        popupContainer: this.popupContainer,
        block: this,
        ...e,
        scrollerStyle: {
          height: this.state.scrollerHeight
        },
        scrollFollowCaret: true,
        asyncCalc: n,
        ButtonComponent: universalButtonWrapper.UniversalButton,
        customizedProviderFactories: i,
        modules: S,
        docxHighlightController: o,
        enableFolded: this.isNewUI && !this.state.isSingleShortcut,
        folded: this.folded,
        captionComponent: this.renderCaption(),
        onDropdownChange: this.handleDropdownChange,
        codeFoldService: l,
        codeResizeService: s,
        onDidPaint: this.onEditorDidPaint,
        containerClassName: g({
          "code-block-container-loading": this.state.loading
        })
      };
      let x = reactJsxRuntimeCoreReexport.jsxs(reactEditorContext.editorContext.Provider, {
        value: r,
        children: [reactJsxRuntimeCoreReexport.jsx(eD, {
          ...M,
          ref: this.codeBlockViewRef
        }), this.getLoadingView()]
      });
      if (!this.isNewUI || this.isMobile || this.isPresentationMode || this.isUneditedTranslationMode) {
        return x;
      } else {
        return reactJsxRuntimeCoreReexport.jsx(ey, {
          className: this.resizeBlockCls,
          blockId: this.id,
          blockView: this,
          selectionAPI: this.selectionAPI,
          codeFoldService: this.codeFoldService,
          codeResizeService: this.codeResizeService,
          hostElement: this.hostElement,
          resizable: this.isBlockEditableOnFocused,
          wrap: y,
          blockManager: this.blockManager,
          children: x
        });
      }
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(docxBlockRenderer.useBlockFetchStatus, {
        blockId: this.props.blockId,
        blockType: docBlockTypeConstants.blockTypeConstants.CODE,
        fetcher: this.fetcher,
        renderPlaceholder: () => this.renderComponent(),
        renderComponent: () => this.renderComponent(true)
      });
    }
    constructor(e) {
      var i;
      super(e);
      i = this;
      e$(this, "localTextHighlight", s, this);
      eW(this, "popupContainer", browserEnvironmentDetectionUtils.browserDetector.isSafari ? document.body : this.boundary.querySelector(".docx-popup-container") || document.body);
      eW(this, "codeBlockViewRef", reactCoreLibraryReexport.createRef());
      eW(this, "captionInstance", undefined);
      eW(this, "topToRoot", undefined);
      eW(this, "subs", []);
      e$(this, "fetcher", a, this);
      e$(this, "codeFoldService", c, this);
      e$(this, "codeResizeService", d, this);
      eW(this, "state", {
        loading: this.isNeedDisplayLoadingView(),
        folded: !!this.model.snapshot.folded,
        scrollerHeight: this.model.snapshot.height !== undefined ? Number(this.model.snapshot.height) : "",
        isSingleShortcut: false
      });
      eW(this, "_docxHighlightController", undefined);
      eW(this, "waitInitCallbacks", []);
      eW(this, "getCodeProfile", () => {
        let {
          zoneState: e
        } = this.model;
        return {
          code_lines_length: e.lines.length
        };
      });
      eW(this, "onEditorDidPaint", () => {
        var e;
        var i;
        var r;
        let n = (e = this.codeResizeService) === null || e === undefined ? undefined : e.getRecordHeight(this.id);
        n ||= (r = this.codeResizeService) === null || r === undefined ? undefined : r.getVListHeight(this.id);
        if ((i = this.codeResizeService) !== null && i !== undefined) {
          i.setCodeHeightById(this.id, Number(n));
        }
      });
      eW(this, "setIsSingleShortcut", function (e = false) {
        i.setState({
          isSingleShortcut: e && docxShortcutFeatureDetection.isTextCardAnchor()
        });
      });
      eW(this, "handleCodeFoldStatusChange", e => {
        let {
          blockId: i,
          folded: r
        } = e;
        if (this.model.id === i) {
          this.setState({
            folded: r
          });
        }
      });
      eW(this, "handleCodeHeightChange", e => {
        let {
          blockId: i,
          height: r
        } = e;
        if (this.model.id === i) {
          this.setState({
            scrollerHeight: r
          });
        }
      });
      eW(this, "handleRecordChange", (e, i) => {
        var r;
        var n;
        if ((r = this.codeFoldService) !== null && r !== undefined) {
          r.onRecordsChange(e, i, this.model.recordId, "folded");
        }
        if ((n = this.codeResizeService) !== null && n !== undefined) {
          n.onRecordsChange(e, i, this.model.recordId, "height");
        }
      });
      eW(this, "scrollable", true);
      eW(this, "enableDocumnetScroll", debounceUtil_1_1.debounce(() => {
        if (!this.scrollable) {
          this.scrollable = true;
          documentOverflowAndDimensionsUtils.toggleBodyOverflow(true);
        }
      }, 100));
      eW(this, "handleScroll", e => {
        let {
          blockManager: i
        } = this;
        this.localTextHighlight.reflush();
        i.editorAPI.getService(blockRectServiceId.blockRectServiceId).clearCache();
        this.calcScrollStateToVc();
        this.handleActiveScroll(e);
        if (browserEnvironmentDetectionUtils.browserDetector.isAndroid) {
          if (this.scrollable) {
            documentOverflowAndDimensionsUtils.toggleBodyOverflow(false);
            this.scrollable = false;
          }
          this.enableDocumnetScroll();
        }
      });
      eW(this, "calcScrollStateToVc", () => {});
      eW(this, "handleActiveScroll", e => {
        var i;
        if ((i = this.codeResizeService) !== null && i !== undefined) {
          i.setScrollType(this.id, e);
        }
      });
      eW(this, "setScrollLeft", e => {
        if (this.realScroller && e !== this.realScroller.scrollLeft) {
          elementAnimationUtils.animateElement({
            ele: this.realScroller,
            styles: {
              scrollLeft: e
            }
          });
        }
      });
      eW(this, "getScrollLeft", () => {
        return this.realScroller?.scrollLeft || 0;
      });
      eW(this, "takeScreenshot", async e => {
        let {
          status: i
        } = e;
        if (i === docBlockTypeConstants.positionConstants.start) {
          this.forceRenderAll();
          if (this.docxHighlightController) {
            return Promise.race([this.docxHighlightController.awaitHighlightRICFinished(), new Promise(e => {
              setTimeout(() => {
                e(undefined);
              }, 5000);
            })]);
          }
        } else if (i === docBlockTypeConstants.positionConstants.end) {
          this.cancelForceRenderAll();
        }
      });
      eW(this, "renderCaption", () => reactJsxRuntimeCoreReexport.jsx(docxCaptionSlotDefinition.getCaptionSlot, {
        blockManager: this.blockManager,
        selectionAPI: this.selectionAPI,
        refCallback: e => {
          this.captionInstance = e;
        },
        onCaptionActiveChange: e => {
          var i;
          var r;
          let {
            active: n
          } = e;
          if (n) {
            let e = (r = this.captionInstance) === null || r === undefined ? undefined : r.state.editor;
            if (e && docxCaptionTextCheck_1.isCaptionTextEmpty(objectPathGetDefault.getObjectPathDefault(this.snapshot, ["caption"]))) {
              e.setText("");
            }
            docContentPageClickCollector.collectDocContentPageClick(this.id, {
              actionType: "edit_code_block_title",
              actionValue: this.language
            }, {
              blockManager: this.blockManager
            });
          } else if ((i = this.captionInstance) !== null && i !== undefined) {
            i.resetOffset();
          }
        },
        block: this.model,
        recordId: this.record.id,
        placeholder: t("LarkCCM_Docs_CodeBlock_EnterName_Placeholder"),
        snapshotPath: ["caption"],
        caption: this.caption,
        align: docBlockTypeConstants.alignmentConstants.LEFT,
        editable: this.blockManager.config.get("editable") && !this.revising && this.isNewUI,
        editorClass: codeBlockConstants.codeBlockCaptionEditor,
        registerPlugins: ea({
          blockManager: this.blockManager,
          selectionAPI: this.selectionAPI,
          blockId: this.id
        })
      }));
      eW(this, "handleInnerLayoutUpdate", () => {
        this.blockManager.layoutManager.notifyNodeHeightChange(this.id);
      });
      eW(this, "getRootScroller", () => {
        var e;
        if (this.isMobile) {
          return window;
        } else {
          return ((e = this.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken, {
            optional: true
          })) === null || e === undefined ? undefined : e.getMainDocxEditorAPI().config.get("scroller")) ?? this.editorAPI.config.get("scroller");
        }
      });
      eW(this, "getResizeCodeScroller", () => {
        if (!this.isNewUI) {
          return;
        }
        let e = docxCodeBlockUtils.getCodeBlockContent(this.hostElement);
        if (e) {
          return e;
        }
      });
      eW(this, "getScroller", () => {
        let e = this.getResizeCodeScroller();
        return e || this.getRootScroller();
      });
      eW(this, "getOuterScroller", () => {
        if (this.getResizeCodeScroller()) {
          return this.getRootScroller();
        }
      });
      eW(this, "onFoldInitialized", () => {
        let {
          zoneId: e,
          inlineFoldModule: i
        } = this;
        if (!this.state.loading || (i == null ? undefined : i.isZoneInit(e))) {
          this.handleFoldInitialized(e);
          return;
        }
        if (i != null) {
          i.on(editorConstantTypes.ZoneFoldEvents.FoldInit, this.handleFoldInitialized);
        }
      });
      eW(this, "offFoldInitialized", () => {
        let {
          zoneId: e,
          inlineFoldModule: i
        } = this;
        if (i != null) {
          i.clearZoneFold(e);
        }
        if (i != null) {
          i.off(editorConstantTypes.ZoneFoldEvents.FoldInit, this.handleFoldInitialized);
        }
      });
      eW(this, "handleFoldInitialized", e => {
        if (this.zoneId === e) {
          this.setState({
            loading: false
          });
          this.waitInitCallbacks.forEach(e => e());
          window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("codeBlockDidRender"));
        }
      });
      eW(this, "getLoadingView", () => {
        if (!this.state.loading) {
          return null;
        }
        let e = this.blockManager.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv).getCodeSSRContent(this.record.id);
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "code-block-loading-container",
          children: [!!e && reactJsxRuntimeCoreReexport.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: xssContentSanitizer.sanitizeHtml(e, null, {
                logType: "react.dangerouslySetInnerHTML",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWFtSXl$bXhNTTFwd1dsa*pkb*t5T1d0-$$6RnBZa2M1-W1*N%1-b*FWMFpxWk$NeE1tRlhWak5N-mxKNlp$ZEdl$m96$m5vPQ"
              })
            }
          }), !e && reactJsxRuntimeCoreReexport.jsx(docxBlockLoading.DocxBlockLoading, {
            className: "code-block-default-loading",
            displayMode: docBlockTypeConstants.blockDisplayConstants.BLOCK
          })]
        });
      });
      eW(this, "tryDeleteSSRCache", () => {
        if (!this.state.loading) {
          this.blockManager.editorAPI.getService(schedulerProvidersAccessor.blockSchedulerProv).deleteCodeSSRContent(this.record.id);
        }
      });
      eW(this, "hasFoldedLine", () => editorContentFoldOperations.hasFoldedContent(this.snapshot.text));
      eW(this, "waitFoldInitialized", () => {
        if (this.state.loading) {
          return new Promise(e => this.waitInitCallbacks.push(e));
        }
      });
      eW(this, "forceHideLoading", () => this.setState({
        loading: false
      }));
      eW(this, "expandAnchorLines", async e => {
        var i;
        await this.waitFoldInitialized();
        if ((i = this.codeFoldService) !== null && i !== undefined) {
          i.forceShowCollapsedLinesByRange(this.id, e, this.editPermission);
        }
      });
      eW(this, "handleLanguageChange", e => {
        var i;
        if ((i = this.codePlugin) !== null && i !== undefined) {
          i.handleLanguageChange(this.zoneId, e);
        }
      });
      eW(this, "virtualListModule", {
        [editorModuleConstants.virtualListConsts.VirtualListModule]: [virtualListModule.VirtualListModule, {
          useIdleModule: true,
          useViewportLockModule: false,
          defaultLineHeight: 22,
          bufferHeight: () => this.isShortcut ? Infinity : this.isMobile ? window.innerHeight : Math.floor(window.innerHeight / 2),
          virtualListScroller: this.getScroller,
          outerScroller: this.getOuterScroller,
          onLayoutUpdate: this.handleInnerLayoutUpdate
        }]
      });
      eW(this, "handleDropdownChange", e => {
        if (e) {
          var i;
          var r;
          if ((i = this.captionInstance) !== null && i !== undefined) {
            i.resetStateAndSelections();
          }
          this.selectionAPI.removeAllSelection();
          if ((r = window.getSelection()) !== null && r !== undefined) {
            r.removeAllRanges();
          }
        }
      });
      if (this.isNeedSyncFold()) {
        eu.initCodeFoldState(this.record);
      }
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.INIT, {
        id: this.model.id,
        time: new Date().getTime(),
        type: this.model.type
      });
    }
  }).prototype, "localTextHighlight", [localTextHighlightProvider.localHighlightToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = eV(l.prototype, "fetcher", [loadableBlockFetcherProvider.loadableBlockToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  c = eV(l.prototype, "codeFoldService", [n, codeFoldResizeConstants.foldServiceName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  d = eV(l.prototype, "codeResizeService", [o, codeFoldResizeConstants.resizeServiceName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let eX = l;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var docCodeBlockDeltaHandler = require("doc-code-block-delta-handler") /*id: 566957*/;
  function eG(e, i) {
    readPdfGuidanceFooter.ReadPdfFooter(docCodeBlockDeltaHandler.CodeBlockHandler, eX, e, i);
  }
  require.d(exports, {
    registerCodeBlockComponent: function () {
      return eG;
    }
  });
}