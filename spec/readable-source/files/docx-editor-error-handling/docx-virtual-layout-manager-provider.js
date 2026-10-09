// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerVirtualLayoutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 338375
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var f;
  var g;
  var p;
  var m;
  var v;
  var b;
  var y;
  var S;
  var k;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var renderCacheManager = require("render-cache-manager") /*id: 318882*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var blockMacroUtils = require("block-macro-utils") /*id: 761509*/;
  class A extends reactCoreLibraryReexport.Component {
    shouldComponentUpdate(e) {
      let {
        struct: i
      } = this.props;
      if (!i.active) {
        return false;
      }
      let {
        renderProps: {
          recursionProps: r
        }
      } = this.props;
      return !deepEqualUtil_1.deepEqual(r, e.renderProps.recursionProps);
    }
    render() {
      let {
        struct: e,
        editorAPI: i,
        renderProps: r,
        layoutManager: n
      } = this.props;
      let o = i.config.get("slottedBlockTypes");
      return reactCoreLibraryReexport.createElement(bearVirtualLayoutReconciler.RenderUnit, {
        id: e.id,
        isRoot: e.isRoot(),
        reconciler: n.getReconciler(),
        renderChild: (e, n) => {
          let l = i.structService.getBlockStructByBlockId(e);
          if (o == null ? undefined : o.has(l.type)) {
            return blockMacroUtils.formatBlockTag(l.recordId);
          } else {
            return i.viewService.render(e, Object.assign({}, r, {
              hostElementRef: n
            }));
          }
        },
        watchProps: r.recursionProps || {},
        className: r.className || ""
      });
    }
  }
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  let $ = [docBlockTypeConstants.blockTypeConstants.VIEW];
  let H = new Set();
  function U(e, i, r) {
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
  let W = require("process-browser-shim") /*id: 488992*/.env.MOBILE_SSR;
  class V extends docxEditorBlockRenderer.ErrorBoundary {
    toggleHostClass(e, i) {
      let r = this.hostElementRef.current;
      if (!r) {
        return;
      }
      let {
        containerClass: n
      } = this;
      if (i) {
        if (!n) {
          n = new Set();
          this.containerClass = n;
        }
        n.add(e);
        r.classList.add(e);
      } else if (n && n.delete(e)) {
        r.classList.remove(e);
        if (n.size === 0) {
          this.containerClass = null;
        }
      }
    }
    shouldComponentUpdate(e, i) {
      var n;
      var o;
      let {
        struct: l
      } = e;
      if (!l.active) {
        return false;
      }
      let s = this.props.renderProps;
      let a = e.renderProps;
      if (!this.isRoot && (s.className !== a.className || !function (e, i) {
        if (e === i) {
          return true;
        }
        if (!e || !i) {
          return false;
        }
        let r = Object.keys(e);
        let n = Object.keys(i);
        if (r.length !== n.length) {
          return false;
        }
        for (let n of r) {
          if (e[n] !== i[n]) {
            return false;
          }
        }
        return true;
      }(s.attribute, a.attribute))) {
        this.shouldUpdateContainer = true;
        return true;
      }
      if (super.shouldComponentUpdate(e, i)) {
        return true;
      }
      let {
        recursionProps: c
      } = this.props.renderProps;
      let {
        recursionProps: d
      } = e.renderProps;
      if (c.globalRenderVersion !== d.globalRenderVersion) {
        return true;
      }
      let u = this.renderer.getBlockRegisterOptions(l.type)?.blockDeps;
      if (!u) {
        return false;
      }
      return (n = u.map(e => objectPathGetDefault.getObjectPathDefault(this.props, e))) !== (o = u.map(i => objectPathGetDefault.getObjectPathDefault(e, i))) && (n.length !== o.length || !n.every((e, i) => o[i] === e));
    }
    onBlockUpdate(e, i) {
      if (e.ops) {
        this.recordData = this.cloneRecordData();
      }
      super.onBlockUpdate(e, i);
    }
    renderImpl(e, i) {
      let {
        renderProps: r,
        struct: n
      } = this.props;
      let {
        className: o,
        attributes: l
      } = function (e, i, r) {
        let {
          renderProps: n,
          struct: o
        } = i;
        let {
          recursionProps: l
        } = n;
        let s = l && l.shouldRenderPlainText;
        let a = l && l.fold.isShow(o.id) ? "" : "block-hidden";
        let {
          className: c,
          attribute: d
        } = n;
        let u = o.id;
        let {
          recordId: h
        } = o;
        let f = `block docx-${e}-block`;
        if (c) {
          f += ` ${c}`;
        }
        if (a) {
          f += ` ${a}`;
        }
        if (s) {
          let e = function (e) {
            let {
              parent: i,
              id: r,
              type: n
            } = e;
            let o = [];
            if (i) {
              if (!docxShortcutFeatureDetection.isOkrContentHighlightShare() && !$.includes(docBlockTypeConstants.blockTypeConstants.OKR)) {
                $.push(docBlockTypeConstants.blockTypeConstants.OKR);
              }
              if (H.has(i.id) || $.includes(i.type)) {
                H.add(r);
              } else if (docxBlockTypeConstants_1.quoteBlockTypes.includes(n)) {
                o.push("text-card-text");
              } else {
                o.push("text-card-block");
              }
            }
            return o;
          }(o);
          if (e.length) {
            f += ` ${e.join(" ")}`;
          }
        }
        if (r) {
          for (let e of r) {
            f += ` ${e}`;
          }
        }
        let g = {
          "data-block-type": e
        };
        if (W) {
          g["data-block-id"] = u;
        } else {
          g["data-block-id"] = u;
          g["data-record-id"] = h;
        }
        return {
          className: f,
          attributes: Object.assign({}, g, d)
        };
      }(e.type, this.props, this.containerClass);
      if (!this.isRoot && (i || this.shouldUpdateContainer)) {
        this.shouldUpdateContainer = false;
        let {
          hostElementRef: e
        } = r;
        let i = e.current;
        i.className = o;
        for (let e of Object.keys(l)) {
          i.setAttribute(e, l[e]);
        }
      }
      let s = r.tag || (this.isRoot ? "div" : reactCoreLibraryReexport.Fragment);
      let a = s === reactCoreLibraryReexport.Fragment ? null : {
        ref: this.setRef,
        ...l,
        className: o,
        style: r.style
      };
      return reactCoreLibraryReexport.createElement(s, a, n.active ? super.renderImpl(e, i) : null);
    }
    getBlockProps(e) {
      let {
        struct: r
      } = this.props;
      let n = this.renderer.getBlockRegisterOptions(e.type);
      return Object.assign(super.getBlockProps(e), {
        record: this.recordData,
        blockId: r.id,
        recordId: r.recordId,
        parentId: r.parent?.id,
        hostElementRef: this.hostElementRef,
        options: n == null ? undefined : n.options,
        model: docxEditorCore.getBlockModel(r)
      });
    }
    setRef(e) {
      this.hostElementRef.current = e;
      let i = this.props.renderProps.onHostRefCallback;
      if (i) {
        i(e);
      }
    }
    cloneRecordData() {
      let {
        struct: {
          record: e
        }
      } = this.props;
      return {
        id: e.id,
        snapshot: deepCloneWrapper_1.deepClone(e.snapshot)
      };
    }
    constructor(e) {
      super(e);
      U(this, "isRoot", undefined);
      U(this, "recordData", undefined);
      U(this, "hostElementRef", undefined);
      U(this, "containerClass", null);
      U(this, "shouldUpdateContainer", false);
      let i = e.renderProps.hostElementRef || reactCoreLibraryReexport.createRef();
      this.hostElementRef = i;
      this.isRoot = i.current == null;
      this.setRef = this.setRef.bind(this);
      this.recordData = this.cloneRecordData();
    }
  }
  var layoutManagerToken = require("layout-manager-token") /*id: 709939*/;
  var renderEventUtils = require("render-event-utils") /*id: 978100*/;
  function K(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function X(e, i, r, n, o) {
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
  n = dependencyInjectionContainer.Dynamic();
  l = X((o = class extends docxEditorBlockRenderer.BlockRenderer {
    get isSSR() {
      return this.config.get("isSSR");
    }
    init() {
      super.init();
      this.subs.push(this.config.change$.subscribe(this.requestAllBlockViewsRender.bind(this)));
      if (this.isSSR) {
        this.subs.push(this.structService.ready$.subscribe(() => {
          this.onMount();
        }));
      }
    }
    destroy() {
      super.destroy();
      this.subs.forEach(e => e.unsubscribe());
    }
    requestBlockViewRender(e, i) {
      this.startTransaction(() => {
        let r = this.structService.getBlockStructByBlockId(e);
        if (r && !r.isInline()) {
          this.layoutManager.startTransaction(e => {
            e.update(r, undefined, i && i.remount);
          });
        }
        super.requestBlockViewRender(e, i);
      });
    }
    requestBlockViewsRenderByType(e, i) {
      if (!this.isMounted()) {
        return;
      }
      let r = i && i.remount;
      this.startTransaction(() => {
        this.layoutManager.startTransaction(i => {
          for (let n of this.structService.getBlockStructsByType(e)) {
            i.update(n, undefined, r);
            this.requestBlockElementRender(n.id, r);
          }
        });
      });
    }
    requestAllBlockViewsRender() {
      this.requestRenderRoot();
    }
    onBlockViewMount(e, i, r) {
      super.onBlockViewMount(e, i, r);
      let {
        layoutManager: n
      } = this;
      if (n.isBlockViewportEntered(e)) {
        i.enterBuffer();
        i.enterViewport();
      } else if (n.isBlockBufferEntered(e)) {
        i.enterBuffer();
      }
    }
    onBlockViewUnmount(e, i, r) {
      i.leaveBuffer();
      i.leaveViewport();
      super.onBlockViewUnmount(e, i, r);
    }
    onInlineMutation(e) {
      this.startTransaction(() => {
        for (let i of e) {
          switch (i.action) {
            case docxEditorCore.MutationAction.UPDATE:
              this.handleBlockUpdate(i);
              break;
            case docxEditorCore.MutationAction.REMOVE:
              renderCacheManager.renderCacheManager.deleteCacheWithEffect(i.block.id);
          }
        }
      });
    }
    handleMutations(e, i) {
      let {
        options: n,
        extra: o
      } = i;
      let {
        layoutManager: l
      } = this;
      let s = n && n.extra?.nonUserOperation;
      let a = n && syncedReferenceBlockUtils.isChangeFromCurrentEditor(n, this.editorAPI.id);
      let c = !renderEventUtils.isFlushInputTransaction(i);
      this.layoutManager.startTransaction(r => {
        if (c) {
          for (let i of e.removed) {
            let {
              block: e
            } = i;
            r.removeChild(i.parent, e, i.position);
            if (docxEditorCore.isMoveMutation(i)) {
              let e = this.handleBlockMove(i);
              if (e) {
                e.leaveBuffer();
                e.leaveViewport();
              }
            }
          }
          for (let i of e.added) {
            let {
              block: e
            } = i;
            r.insertChild(e.parent, e, undefined, !!i.moveFrom);
          }
        }
        let n = o && o.subTreeDirty;
        for (let o of e.updated) {
          let {
            block: e
          } = o;
          this.handleBlockUpdate(o, i);
          if (c) {
            r.update(e, o, !!o.originalType || n);
          } else {
            l.addNodeToNotifyHeightChange(e.id);
          }
        }
      }, !!a && !s);
    }
    startTransaction(e) {
      reactDomEntryWrapper.unstable_batchedUpdates(e);
    }
    handleBlockUpdate(e, i) {
      let {
        block: r,
        originalType: n
      } = e;
      let o = this.elements.get(r.id);
      if (o) {
        o.onBlockUpdate(e, i);
        this.requestBlockElementRender(r.id, !!n);
      }
    }
    onMountImpl() {
      let e;
      super.onMountImpl();
      let i = this.options.layoutConfig;
      (e = this.isSSR ? Object.assign({
        enableVirtualRender: true,
        enableIdleWorker: false,
        scroller: window,
        isSSR: true
      }, i) : Object.assign({
        scroller: this.config.get("scroller")
      }, i)).isDocxAtSheet = docHostTypeChecker.isSheetHost(this.config);
      this.layoutManager.start(e);
    }
    createRenderElement(e) {
      let {
        BlockContextProvider: i
      } = this.options;
      if (i) {
        return reactCoreLibraryReexport.createElement(i, {}, reactCoreLibraryReexport.createElement(V, e));
      } else {
        return reactCoreLibraryReexport.createElement(V, e);
      }
    }
    createRenderChildrenElement(e) {
      let {
        struct: i,
        renderProps: r
      } = e;
      return reactCoreLibraryReexport.createElement(A, {
        struct: i,
        renderProps: r || {},
        layoutManager: this.layoutManager,
        editorAPI: this.editorAPI
      });
    }
    getBlockProps(e, i) {
      if (e.isRoot() || e.isInline() || this.isSSR) {
        let e = this.getRecursionProps(i && i.recursionProps);
        return Object.assign({}, i, {
          recursionProps: e
        });
      }
      return i;
    }
    getRecursionProps(e) {
      let i = this.config.toPlainObject();
      return Object.assign(this.context.get().toPlainObject(), i, e, {
        globalRenderVersion: this.rootVersion
      });
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      K(this, "layoutManager", l, this);
      K(this, "config", s, this);
      K(this, "context", a, this);
      r = [];
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
      }(i = "subs", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, i, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = r;
      }
    }
  }).prototype, "layoutManager", [layoutManagerToken.layoutManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  s = X(o.prototype, "config", [docxEditorCore.CONFIG_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  a = X(o.prototype, "context", [n, compatibleEditorContext_1.compatibleContext], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let G = o;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var Q = debugBrowserConfig;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var lazyRecordClientvars = require("lazy-record-clientvars") /*id: 112384*/;
  var docxTableStickyUtils = require("docx-table-sticky-utils") /*id: 289191*/;
  var foldCodeEventTypes = require("fold-code-event-types") /*id: 525302*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var mainLayoutManagerProvider = require("main-layout-manager-provider") /*id: 351995*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var foldStatusConstants = require("fold-status-constants") /*id: 275668*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var docxVirtualLayoutConfig = require("docx-virtual-layout-config") /*id: 173628*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var layoutNodeChangesContext = require("layout-node-changes-context") /*id: 666088*/;
  var renderFeatureConstants = require("render-feature-constants") /*id: 362509*/;
  var layoutManagerProviderName = require("layout-manager-provider-name") /*id: 474937*/;
  function ey(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function eS(e, i, r) {
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
  function ek(e, i, r, n, o) {
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
  let eE = Q("subLayoutManager:service");
  c = dependencyInjectionContainer.Provide(layoutManagerProviderName.layoutManagerToken);
  d = dependencyInjectionContainer.Dynamic();
  u = dependencyInjectionContainer.Dynamic();
  let eC = c((y = class {
    getEditorWidth() {
      return this.editorWidth;
    }
    destroy() {
      if (this.isSubLayoutManager && !this.mainLayoutManager.isDestory()) {
        this.unConnectSubModelToLayoutTree();
      }
      this.bindInitEvent("off");
      this.bindStartEvent("off");
      this.notifyNodeHeightChangeInBatch.cancel();
      this.mainLayoutManager.unregister(this);
      this.context.destroy();
      this.nodeHeightChangeCallbackSet.clear();
      eE("subLayoutManager destory");
    }
    onServiceDispose() {
      this.destroy();
    }
    get enableVirtualRender() {
      return this.mainLayoutManager.getEnableVirtualRender();
    }
    start(e) {
      this.isStart = true;
      let i = this.structService.root;
      let r = this.context.buildInitialLayoutConfigs(i);
      this.bindStartEvent("on");
      this.mainLayoutManager.register(this, this.getLayoutManagerInfo());
      if (e.parentBlockId) {
        this.isSubLayoutManager = true;
        this.submitChangeNodesFromLayoutNodeConfig(e.parentBlockId, i, r);
        eE("child subLayoutManager start");
      } else {
        this.mainLayoutManager.start(e, r);
        eE("root subLayoutManager start");
      }
      this.scroller = this.mainLayoutManager.getScroller();
    }
    get isScrolling() {
      return this.reconciler.viewport.isScrolling();
    }
    waitForNextPaint() {
      let e = new Promise(e => {
        this.eventEmitter.addListenerOnce(renderEventConstants.paint, e);
      });
      return Promise.race([new Promise(e => {
        requestAnimationFrame(e);
      }), e]);
    }
    getContext() {
      return this.context;
    }
    getReconciler() {
      return this.reconciler;
    }
    getScroller() {
      return this.scroller;
    }
    isBlockViewportEntered(e) {
      return this.mainLayoutManager.isBlockViewportEntered(e);
    }
    isBlockBufferEntered(e) {
      return this.mainLayoutManager.isBlockBufferEntered(e);
    }
    addNodeToNotifyHeightChange(e) {
      this.heightChangedNodesInBatch.add(e);
      this.notifyNodeHeightChangeInBatch();
    }
    registerNodeHeightChangeCallback(e) {
      this.nodeHeightChangeCallbackSet.add(e);
    }
    unregisterNodeHeightChangeCallback(e) {
      this.nodeHeightChangeCallbackSet.delete(e);
    }
    didUpdateNode(e, i = false, r) {
      let n = this.structService.getBlockStructByBlockId(e);
      if (!n) {
        return;
      }
      let o = new Map();
      let l = {
        action: renderEventConstants.nodeActions.UPDATE
      };
      let s = (e, r) => {
        let n = this.context.getLayoutNodeConfig(e);
        r.set(e.id, {
          nodeId: e.id,
          config: n,
          modifications: [l]
        });
        this.context.iterateLayoutNodeChildren(e, (e, i) => {
          if (!i) {
            let r = this.structService.getBlockStructByBlockId(e);
            if (r) {
              i = this.context.getLayoutNodeConfig(r);
            }
          }
          r.set(e, {
            nodeId: e,
            config: i,
            modifications: [l]
          });
        });
        if (i) {
          e.children.forEach(e => s(e, r));
        }
      };
      s(n, o);
      this.addChangeNodesAndTryToSubmit(Array.from(o.values()), r);
    }
    enterFoldIgnoreMode() {
      return this.context.fold.enterIgnoreMode();
    }
    exitFoldIgnoreMode() {
      return this.context.fold.exitIgnoreMode();
    }
    ancestorBlockTypeId(e, i) {
      let r = this.structService.getBlockStructByBlockId(e);
      while (r) {
        if (r.type === i) {
          return r.id;
        }
        r = r.parent;
      }
      return null;
    }
    addChangeNodesAndTryToSubmit(e, i) {
      this.changeNodes.push(...e);
      this.tryToSubmitChangeNodes(i);
    }
    tryToSubmitChangeNodes(e) {
      if (!this.batchingChangeNodes) {
        this.submitChangeNodes(e);
      }
    }
    submitChangeNodes(e) {
      let {
        changeNodes: i
      } = this;
      if (i.length) {
        this.changeNodes = [];
        this.reconciler.didChangeNodes(i, e);
      }
    }
    getLayoutManagerInfo() {
      return {
        structService: this.structService,
        modelService: this.modelService,
        eventEmitter: this.eventEmitter,
        selectionAPI: this.selectionAPI,
        viewService: this.dynamicView,
        topChangedBlockIdsSubject: this.topChangedBlockIdsSubject,
        postDidChangeNodesSubject: this.postDidChangeNodesSubject,
        notifyUpdateActiveBlockIds: this.notifyUpdateActiveBlockIds,
        onSetScrollTopSubject: this.onSetScrollTopSubject
      };
    }
    submitChangeNodesFromLayoutNodeConfig(e, i, r) {
      this.connectSubDocToLayoutTreeMap.set(e, i);
      let n = this.context.getChangeNode(e);
      this.context.insertChildRaw(n, 0, i.id, r.get(i.id));
      for (let [e, o] of r) {
        let i = this.context.getChangeNode(e);
        i.config = o;
        if (Array.isArray(o.childIds)) {
          for (let e = 0; e < o.childIds.length; e++) {
            let n = o.childIds[e];
            this.context.insertChildRaw(i, e, o.childIds[e], r.get(n));
          }
        }
      }
      let o = this.context.flush();
      this.changeNodes.push(...o);
      this.submitChangeNodes();
    }
    unConnectSubModelToLayoutTree() {
      for (let [e, i] of this.connectSubDocToLayoutTreeMap) {
        let r = this.context.getChangeNode(e);
        this.context.removeChildRaw(r, 0, i.id);
        this.context.removeChildrenRecursively(i);
      }
      let e = this.context.flush();
      this.changeNodes.push(...e);
      this.submitChangeNodes();
      this.connectSubDocToLayoutTreeMap.clear();
    }
    bindInitEvent(e) {
      let {
        eventEmitter: i
      } = this;
      if (e === "on") {
        i.addListener(renderEventConstants.activeNodeActions.ADD, this.handleAddAdditionalActiveBlock);
        i.addListener(renderEventConstants.activeNodeActions.REMOVE, this.handleRemoveAdditionalActiveBlock);
      } else {
        i.removeListener(renderEventConstants.activeNodeActions.ADD, this.handleAddAdditionalActiveBlock);
        i.removeListener(renderEventConstants.activeNodeActions.REMOVE, this.handleRemoveAdditionalActiveBlock);
      }
    }
    bindScrollStartEvent(e, i) {
      this.eventEmitter[e](renderEventConstants.scrollStart, i);
    }
    bindScrollEndEvent(e, i) {
      this.eventEmitter[e](renderEventConstants.scrollEnd, i);
    }
    startTransaction(e, i) {
      ++this.batchingChangeNodes;
      try {
        e(this.context);
      } finally {
        let e = this.context.flush();
        if (e.length) {
          this.assignConfigForChangeNodes(e);
          this.changeNodes.push(...e);
        }
        if (!!(this.batchingChangeNodes > 0) && ! --this.batchingChangeNodes) {
          this.submitChangeNodes(i);
        }
      }
    }
    isLockViewportTurnOffAllowed() {
      return (!docxVirtualLayoutConfig.isMemoryRecycle() || !this.reconciler.isUserAnchorLocking()) && !docxFeatureFlags.isAyEnabled();
    }
    turnOffLockViewportTemporarily() {
      this.turnOffLockViewport();
      this.debounceTurnOnLockViewport();
    }
    assignConfigForChangeNodes(e) {
      let {
        context: i,
        structService: r
      } = this;
      let n = new Map();
      let o = e => {
        let o = n.get(e);
        if (o) {
          return o;
        }
        let l = r.getBlockStructByBlockId(e);
        o = l ? i.getLayoutNodeConfig(l) : {};
        n.set(e, o);
        return o;
      };
      for (let i of e) {
        let {
          modifications: e
        } = i;
        for (let i of e) {
          if (!i.config) {
            if (i.action === renderEventConstants.nodeActions.INSERT_CHILD && i.childId) {
              i.config = o(i.childId);
            } else if (i.action === renderEventConstants.nodeActions.UPDATE_PARENT && i.parentId) {
              i.config = o(i.parentId);
            }
          }
        }
        i.config ||= o(i.nodeId);
      }
    }
    isDescendantRenderDisabled(e) {
      return this.context.isDescendantRenderDisabled(e);
    }
    enableDescendantRender(e) {
      if (this.isDescendantRenderDisabled(e)) {
        if (!this.isStart) {
          this.context.enableDescendantRender(e);
          return;
        }
        this.startTransaction(i => {
          i.enableDescendantRender(e);
          i.updateRaw(i.getChangeNode(e), true);
        });
        this.eventEmitter.dispatch(renderFeatureConstants.descendantRenderKey, null, e);
      }
    }
    disableDescendantRender(e) {
      if (!this.isDescendantRenderDisabled(e)) {
        if (!this.isStart) {
          this.context.disableDescendantRender(e);
          return;
        }
        this.startTransaction(i => {
          i.disableDescendantRender(e);
          i.updateRaw(i.getChangeNode(e), true);
        });
      }
    }
    getViewportData() {
      return this.reconciler.getViewportData();
    }
    constructor(e, i) {
      var r;
      var n = this;
      eS(this, "topChangedBlockIdsSubject", new observableSubjectClass.Subject());
      eS(this, "topChangedBlockIds$", this.topChangedBlockIdsSubject);
      eS(this, "postDidChangeNodesSubject", new observableSubjectClass.Subject());
      eS(this, "postDidChangeNodes$", this.postDidChangeNodesSubject);
      eS(this, "onSetScrollTopSubject", new observableSubjectClass.Subject());
      eS(this, "onSetScrollTop$", this.onSetScrollTopSubject);
      eS(this, "batchingChangeNodes", 0);
      eS(this, "reconciler", undefined);
      eS(this, "changeNodes", []);
      eS(this, "editorWidth", 0);
      eS(this, "windowInnerHeight", 0);
      eS(this, "scroller", undefined);
      eS(this, "isStart", false);
      eS(this, "nodeHeightChangeCallbackSet", new Set());
      eS(this, "isSubLayoutManager", false);
      eS(this, "heightChangedNodesInBatch", new Set());
      ey(this, "context", f, this);
      ey(this, "dynamicView", g, this);
      ey(this, "modelService", p, this);
      ey(this, "structService", m, this);
      ey(this, "selectionAPI", v, this);
      ey(this, "editorAPI", b, this);
      eS(this, "connectSubDocToLayoutTreeMap", new Map());
      eS(this, "activeBlockIdSet", new Set());
      eS(this, "eventEmitter", undefined);
      eS(this, "mainLayoutManager", undefined);
      eS(this, "notifyUpdateActiveBlockIds", () => {
        let e = this.dynamicView.get();
        if (!e) {
          return;
        }
        let i = new Set();
        this.reconciler.getActiveNodes().forEach(r => {
          if (e.hasBlockViewByBlockId(r)) {
            i.add(r);
          }
        });
        this.activeBlockIdSet = i;
      });
      eS(this, "scrollTargetTable", undefined);
      eS(this, "scrollToSelection", async (e, i, r) => {
        this.structService.getBlockStructByBlockId(e);
        let {
          tableId: n
        } = r || {};
        if (n) {
          this.scrollTargetTable = n;
        }
        await this.reconciler.viewport.scrollToSelection(e, i);
        if (n) {
          this.scrollTargetTable = undefined;
        }
        if (!(r == null ? undefined : r.shipScrollToBlockInStickyTable)) {
          await docxTableStickyUtils.scrollToStickyBlock({
            blockId: e,
            blockManager: this.editorAPI.get(),
            scroller: this.getScroller(),
            getLayoutInfo: this.getLayoutInfo,
            isBlockInViewport: e => this.reconciler.getViewportNodes().includes(e)
          });
        }
      });
      eS(this, "setAnchorNode", (e, i, r) => {
        this.reconciler.viewport.updateViewportLockAnchorNode(e, i, r);
      });
      eS(this, "enterForceLayoutForAll", () => this.reconciler.enterForceLayoutForAll());
      eS(this, "quitForceLayoutForAll", () => this.reconciler.quitForceLayoutForAll());
      eS(this, "getViewportBlocks", () => this.filterUnExistNode(this.reconciler.getViewportNodes()));
      eS(this, "isBlockInViewport", e => {
        let {
          isInStickyTable: i,
          isInViewport: r
        } = docxTableStickyUtils.getStickyBlockInfo({
          blockId: e,
          blockManager: this.editorAPI.get(),
          getLayoutInfo: this.getLayoutInfo,
          isBlockInViewport: e => this.reconciler.getViewportNodes().includes(e)
        });
        if (i) {
          return r;
        }
        {
          let i = this.reconciler.getLayoutTree().getNode(e);
          return (!i || !this.reconciler.lockHeightPlugin.getLockedHeightAncestor(i)) && this.reconciler.getViewportNodes().includes(e);
        }
      });
      eS(this, "getBufferBlocks", () => this.filterUnExistNode(this.reconciler.getBufferNodes()));
      eS(this, "getActiveBlocks", () => this.activeBlockIdSet);
      eS(this, "isBlockActive", e => !!this.reconciler.getActiveNodes().has(e));
      eS(this, "getLayoutInfo", (e, i) => {
        let r = this.reconciler.getLayoutTree().getLayoutInfo(e);
        if (r) {
          return Object.assign({}, r, {
            top: r.top + (i ? 0 : this.reconciler.getContentAboveRootHeight())
          });
        } else {
          return null;
        }
      });
      eS(this, "getContentAboveRootHeight", () => this.reconciler.getContentAboveRootHeight());
      eS(this, "notifyNodeHeightChange", e => {
        this.reconciler.handleNodeHeightChange(e);
        this.nodeHeightChangeCallbackSet.forEach(i => i(e));
      });
      eS(this, "notifyRenderFinish", e => this.reconciler.handleAsyncNodeRenderFinish(e));
      eS(this, "notifyHeaderHeightChange", () => {
        if (this.isStart) {
          this.reconciler.handleContentAboveRootHeightChange();
          Promise.resolve().then(() => {
            this.topChangedBlockIdsSubject.next({
              ids: [this.structService.root.id],
              fromLock: true
            });
          }).catch(emptyExportFunction.emptyFunction);
        }
      });
      eS(this, "getViewportHelper", () => this.reconciler.viewport.getViewportHelper());
      eS(this, "renderNodeById", e => {
        let i = Array.isArray(e) ? e : [e];
        let {
          reconciler: r
        } = this;
        i.forEach(e => {
          if (r.isRenderDisabled(e)) {
            let i = this.ancestorBlockTypeId(e, docBlockTypeConstants.blockTypeConstants.TABLE);
            if (i && r.isDescendantRenderDisabled(i)) {
              this.enableDescendantRender(i);
            }
          }
        });
        return this.reconciler.renderNodeById(i);
      });
      eS(this, "renderNodeByIdSync", e => {
        let i = Array.isArray(e) ? e : [e];
        let {
          reconciler: r
        } = this;
        i.forEach(e => {
          if (r.isRenderDisabled(e)) {
            let i = this.ancestorBlockTypeId(e, docBlockTypeConstants.blockTypeConstants.TABLE);
            if (i) {
              if (this.dynamicView.get().hasBlockViewByBlockId(i)) {
                docxEditorEventConstantsAndManager.globalEventEmitter.emit(lazyRecordClientvars.tableHideLoading, i);
              } else if (r.isDescendantRenderDisabled(i)) {
                this.enableDescendantRender(i);
                this.reconciler.renderNodeByIdSync(i);
              }
            }
          }
        });
        this.reconciler.renderNodeByIdSync(i);
      });
      eS(this, "handleFoldStatusChangeViewDisplay", function (e) {
        let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let r = new Map();
        let {
          context: o
        } = n;
        e.forEach(e => {
          let {
            id: i
          } = e;
          let l = n.structService.getBlockStructByBlockId(i);
          if (!l) {
            return;
          }
          let {
            calculateModel: s
          } = o.getLayoutNodeConfig(l);
          r.set(i, s);
          o.iterateLayoutNodeChildren(l, (e, i) => {
            let s = n.structService.getBlockStructByBlockId(e);
            if (!i && s) {
              i = o.getLayoutNodeConfig(s);
            }
            let a = (i == null ? undefined : i.calculateModel) ?? bearVirtualLayoutReconciler.CalculateModel.VERTICAL;
            r.set(e, a);
          });
        });
        let l = n.reconciler.getLayoutTree();
        let s = [];
        r.forEach((e, i) => {
          let r = l.getNode(i);
          if (!r || r.node.calculateModel !== e) {
            s.push({
              nodeId: i,
              modifications: [{
                action: renderEventConstants.nodeActions.UPDATE
              }],
              config: {
                calculateModel: e
              }
            });
          }
        });
        if (s.length > 0) {
          n.addChangeNodesAndTryToSubmit(s, i);
          Promise.resolve().then(() => {
            n.eventEmitter.dispatch(foldStatusConstants.foldStatusPostView);
          });
        }
      });
      eS(this, "handleCodeFoldViewChange", debounceUtilWrapper.createDebounce(e => {
        let {
          blockId: i,
          folded: r,
          isLocal: n = true
        } = e;
        let o = this.structService.getBlockStructByBlockId(i);
        if (!o) {
          return;
        }
        let {
          calculateModel: l
        } = this.context.getLayoutNodeConfig(o);
        let s = [{
          nodeId: i,
          modifications: [{
            action: renderEventConstants.nodeActions.UPDATE
          }],
          config: {
            calculateModel: r ? bearVirtualLayoutReconciler.CalculateModel.IGNORE_CHILDREN : l
          }
        }];
        this.addChangeNodesAndTryToSubmit(s, n);
      }, 16));
      eS(this, "handleRetainModified", function (e, i) {
        let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
        let o = [];
        o.push({
          nodeId: e,
          modifications: [{
            action: renderEventConstants.nodeActions.UPDATE
          }],
          config: {
            shouldRetain: i
          }
        });
        n.addChangeNodesAndTryToSubmit(o, r);
      });
      eS(this, "bindStartEvent", e => {
        let {
          eventEmitter: i
        } = this;
        if (e === "on") {
          window.addEventListener("resize", this.handleWindowHeightChange);
          i.addListener(foldCodeEventTypes.foldCodeViewChange, this.handleCodeFoldViewChange);
          i.addListener(foldStatusConstants.foldStatusChangeView, this.handleFoldStatusChangeViewDisplay);
          i.addListener(editorUiConstants.editorResizeClass, this.handleResize);
          i.addListener(renderEventConstants.retainStatusChange, this.handleRetainModified);
        } else {
          i.removeListener(foldCodeEventTypes.foldCodeViewChange, this.handleCodeFoldViewChange);
          i.removeListener(foldStatusConstants.foldStatusChangeView, this.handleFoldStatusChangeViewDisplay);
          i.removeListener(editorUiConstants.editorResizeClass, this.handleResize);
          window.removeEventListener("resize", this.handleWindowHeightChange);
          i.removeListener(renderEventConstants.retainStatusChange, this.handleRetainModified);
        }
      });
      eS(this, "handleWindowHeightChange", () => {
        if (this.windowInnerHeight !== window.innerHeight) {
          this.windowInnerHeight = window.innerHeight;
          if (browserEnvDetectionUtil.browserDetector.isAndroid && this.isScrolling) {
            this.turnOffLockViewportTemporarily();
          }
          this.notifyHeaderHeightChange();
          this.reconciler.handleRootWidthResize();
        }
      });
      eS(this, "handleAddAdditionalActiveBlock", e => {
        this.mainLayoutManager.addAdditionalActiveBlock(e);
      });
      eS(this, "handleRemoveAdditionalActiveBlock", e => {
        this.mainLayoutManager.removeAdditionalActiveBlock(e);
      });
      eS(this, "filterUnExistNode", e => e.filter(e => this.dynamicView.get().hasBlockViewByBlockId(e)));
      eS(this, "turnOnLockViewport", () => {
        this.reconciler.turnOnLockViewport();
      });
      eS(this, "turnOffLockViewport", () => {
        this.reconciler.turnOffLockViewport();
      });
      eS(this, "debounceTurnOnLockViewport", debounceUtil_1_1.debounce(this.turnOnLockViewport, renderFeatureConstants.renderThreshold));
      eS(this, "notifyNodeHeightChangeInBatch", debounceUtil_1_1.debounce(() => {
        for (let e of this.heightChangedNodesInBatch) {
          this.notifyNodeHeightChange(e);
        }
        this.heightChangedNodesInBatch.clear();
      }, 50));
      eS(this, "handleResize", e => {
        let {
          editorWidth: i
        } = e;
        if (this.editorWidth !== i && !this.isSubLayoutManager) {
          this.editorWidth = i;
          this.notifyHeaderHeightChange();
          this.reconciler.handleRootWidthResize();
        }
      });
      this.eventEmitter = e;
      this.mainLayoutManager = i;
      eE("subLayoutManager constroutor");
      this.reconciler = (r = this.mainLayoutManager) === null || r === undefined ? undefined : r.getReconciler();
      this.bindInitEvent("on");
    }
  }, f = ek((h = y = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, eventEmitterProviderNameExport.eventEmitterProviderName), typescriptRuntimeHelpers.decorate(1, mainLayoutManagerProvider.mainLayoutManager), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined])], y)).prototype, "context", [layoutNodeChangesContext.layoutNodeChanges], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), g = ek(h.prototype, "dynamicView", [d, docxEditorCore.VIEW_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), p = ek(h.prototype, "modelService", [docxEditorCore.MODEL_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), m = ek(h.prototype, "structService", [docxEditorCore.BLOCK_STRUCT_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), v = ek(h.prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), b = ek(h.prototype, "editorAPI", [u, docxEditorCore.EDITOR_API_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h)) || h;
  var loadableBlockSchedulerProvider = require("loadable-block-scheduler-provider") /*id: 809759*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  function eI(e) {
    if (e && !e.show) {
      return bearVirtualLayoutReconciler.CalculateModel.IGNORE;
    } else {
      return bearVirtualLayoutReconciler.CalculateModel.VERTICAL;
    }
  }
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  function eT(e, i, r) {
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
  let ew = dependencyInjectionContainer.Provide(layoutNodeChangesContext.layoutNodeChanges)((k = class {
    buildInitialLayoutConfigs(e) {
      let i = new Map();
      let r = e => {
        let n = this.getLayoutNodeBuilderByBlock(e);
        if (n && n.shouldDisableDescendantRender) {
          this.nodesToDisabledDescendantRender.add(e.id);
        }
        let o = this.getLayoutNodeConfig(e, true);
        e.children.forEach(r);
        let l = e.editorAPI.getService(loadableBlockSchedulerProvider.schedulerProvider, {
          dynamic: true
        }).get();
        let s = l == null ? undefined : l.getSSRContent(e);
        if (o.defaultHeight && s && s.blockHeight) {
          o.defaultHeight = s.blockHeight;
        }
        let a = [];
        this.iterateLayoutNodeChildren(e, (e, r) => {
          a.push(e);
          if (!i.has(e)) {
            i.set(e, r || {});
          }
        });
        i.set(e.id, {
          ...o,
          childIds: a
        });
      };
      if (!e) {
        throw Error("[layoutManager]: cannot find root block");
      }
      r(e);
      return i;
    }
    isDescendantRenderDisabled(e) {
      return this.nodesToDisabledDescendantRender.has(e);
    }
    enableDescendantRender(e) {
      this.nodesToDisabledDescendantRender.delete(e);
    }
    disableDescendantRender(e) {
      this.nodesToDisabledDescendantRender.add(e);
    }
    destroy() {
      this.offBuilderListChange();
      this.nodeBuilders.get().forEach(e => {
        var i;
        if ((i = e.destroy) === null || i === undefined) {
          return undefined;
        } else {
          return i.call(e);
        }
      });
    }
    flush() {
      let {
        changeNodes: e
      } = this;
      this.changeNodes = [];
      return e;
    }
    getChangeNode(e) {
      let {
        changeNodes: i
      } = this;
      let r = i[i.length - 1];
      if (!r || r.nodeId !== e) {
        r = {
          nodeId: e,
          modifications: []
        };
        this.changeNodes.push(r);
      }
      return r;
    }
    addModification(e, i) {
      this.getChangeNode(e).modifications.push(i);
    }
    insertChild(e, i, r, n) {
      let o = this.getLayoutNodeBuilderByBlock(e);
      if (!n) {
        let e = this.getLayoutNodeBuilderByBlock(i);
        if (e && e.shouldDisableDescendantRender) {
          this.nodesToDisabledDescendantRender.add(i.id);
        }
      }
      if (o == null ? undefined : o.insertChild) {
        let r = this.getFoldState(e.id);
        o.insertChild(this, e, i, r);
        return;
      }
      let l = this.getChangeNode(e.id);
      this.insertChildRaw(l, i.position, i.id, r);
    }
    removeChild(e, i, r) {
      let n = this.getLayoutNodeBuilderByBlock(e);
      if (n == null ? undefined : n.removeChild) {
        let o = this.getFoldState(e.id);
        n.removeChild(this, e, i, r, o);
        return;
      }
      let o = this.getChangeNode(e.id);
      this.removeChildRaw(o, r, i.id);
    }
    removeChildrenRecursively(e) {
      e.children.forEach(i => {
        this.removeChild(e, i, 0);
      });
    }
    update(e, i, r) {
      let n = this.getLayoutNodeBuilderByBlock(e);
      let o = i && i.originalType;
      if (n && (o && n.shouldDisableDescendantRender && this.nodesToDisabledDescendantRender.add(e.id), n.update)) {
        n.update(this, e, i, r);
        return;
      }
      this.updateRaw(this.getChangeNode(e.id), r);
    }
    insertChildRaw(e, i, r, n) {
      e.modifications.push({
        childId: r,
        index: i,
        action: renderEventConstants.nodeActions.INSERT_CHILD,
        config: n
      });
    }
    removeChildRaw(e, i, r) {
      e.modifications.push({
        childId: r,
        index: i,
        action: renderEventConstants.nodeActions.DELETE_CHILD
      });
    }
    updateRaw(e, i) {
      e.modifications.push({
        action: renderEventConstants.nodeActions.UPDATE,
        subTreeDirty: i
      });
    }
    getLayoutNodeConfig(e, i) {
      let r = this.getLayoutNodeBuilderByBlock(e);
      let n = this.getFoldState(e.id);
      let o = this.nodesToDisabledDescendantRender.has(e.id) || e.isDataPending() || e.editorAPI.viewService.isBlockTypeSupported(e.type) !== docxEditorCore.SupportStatus.YES;
      let l = !!e.record.snapshot.comments && e.record.snapshot.comments.length > 0;
      if (r == null ? undefined : r.getLayoutNodeConfig) {
        let s = {
          disableDescendantRender: o,
          forceRenderCell: l,
          ...r.getLayoutNodeConfig(e, n, i)
        };
        s.calculateModel ||= eI(n);
        return s;
      }
      return {
        disableDescendantRender: o,
        forceRenderCell: l,
        calculateModel: eI(n)
      };
    }
    iterateLayoutNodeChildren(e, i) {
      let r = this.getLayoutNodeBuilderByBlock(e);
      if (r == null ? undefined : r.iterateLayoutNodeChildren) {
        r.iterateLayoutNodeChildren(e, this.getFoldState(e.id), i);
        return;
      }
      e.children.forEach(e => i(e.id));
    }
    getLayoutNodeBuilderByBlock(e) {
      this.nodeBuilderMap ||= new Map(this.nodeBuilders.get().map(e => [e.type, e]));
      let i = e.editorAPI.viewService.isBlockTypeSupported(e.type) === docxEditorCore.SupportStatus.YES ? e.type : docxEditorCore.FALLBACK_STATUS;
      return this.nodeBuilderMap.get(i);
    }
    getFoldState(e) {
      var i;
      if ((i = this.fold) === null || i === undefined) {
        return undefined;
      } else {
        return i.getFoldStateById(e);
      }
    }
    constructor(e, i) {
      eT(this, "changeNodes", []);
      eT(this, "nodeBuilderMap", null);
      eT(this, "offBuilderListChange", undefined);
      eT(this, "nodesToDisabledDescendantRender", new Set());
      eT(this, "nodeBuilders", undefined);
      eT(this, "fold", undefined);
      this.nodeBuilders = e;
      this.fold = i;
      this.offBuilderListChange = e.watch(() => {
        this.nodeBuilderMap = null;
      });
    }
  }, S = k = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, dependencyInjectionContainer.Dynamic()), typescriptRuntimeHelpers.decorate(0, dependencyInjectionContainer.Many()), typescriptRuntimeHelpers.decorate(0, layoutNodeBuilderReexport.layoutNodeBuilder), typescriptRuntimeHelpers.decorate(1, foldProviderAccessor.foldProvider), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined, undefined])], k))) || S;
  function eB(e) {
    docxEditorCore.registerProviders([eC, ew]);
    docxEditorCore.registerView({
      useFactory: () => {
        let i = dependencyInjectionContainer.instantiate(G, e);
        i.init();
        return i;
      }
    });
  }
  require.d(exports, {
    registerVirtualLayoutManager: function () {
      return eB;
    }
  });
}