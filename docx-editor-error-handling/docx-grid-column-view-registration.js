// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'registerGridBlock'
// - Renamed export 'c' to 'registerGridColumnBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 111546
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class p extends docBlockModelClass.DocBlockModel {
    constructor(e) {
      super(e);
    }
  }
  l = "type";
  s = docBlockTypeConstants.blockTypeConstants.GRID;
  if ((l = typeof (n = function (e, i) {
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
  }(l, "string")) == "symbol" ? n : n + "") in p) {
    Object.defineProperty(p, l, {
      value: s,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    p[l] = s;
  }
  class m extends docBlockModelClass.DocBlockModel {
    constructor(e) {
      super(e);
    }
  }
  a = "type";
  c = docBlockTypeConstants.blockTypeConstants.GRID_COLUMN;
  if ((a = typeof (o = function (e, i) {
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
  }(a, "string")) == "symbol" ? o : o + "") in m) {
    Object.defineProperty(m, a, {
      value: c,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    m[a] = c;
  }
  var gridLayoutManager = require("grid-layout-manager") /*id: 433020*/;
  var gridColumnLayoutNodeConfigProvider = require("grid-column-layout-node-config-provider") /*id: 323347*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function E(e, i, r) {
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
  let C = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(d = class {
    constructor() {
      E(this, "blockType", docBlockTypeConstants.blockTypeConstants.GRID_COLUMN);
      E(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || d;
  var gridBlockLayoutManager = require("grid-block-layout-manager") /*id: 924085*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var M = classnamesUtils;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function O(e, i, r, n, o) {
    return (r * 3 - n * 3 - i + o) * e * e * e + (n * 3 - r * 6 + i * 3) * e * e + (r * 3 - i * 3) * e + i;
  }
  function D(e, i, r, n, o) {
    return (r * 9 - n * 9 - i * 3 + o * 3) * e * e + (n * 6 - r * 12 + i * 6) * e + r * 3 - i * 3;
  }
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var docxGridColumnResizeHook = require("docx-grid-column-resize-hook") /*id: 202645*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function G(e, i, r) {
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
  class q extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get animateOnMount() {
      let {
        struct: i
      } = this;
      if (this.id !== docxEditorEventConstantsAndManager.globalEditorState.newGridColumnId) {
        return false;
      }
      let r = i.children[0];
      return !!r && i.children.length === 1 && !!editorTextBlockUtilities.isAgendaBlock(r.type) && docxEditorCore.getBlockModel(r)?.isEmpty;
    }
    get isWithBoundary() {
      return true;
    }
    setBlockStyle() {
      let e = this.blockEl;
      if (e) {
        if (this.props.isVertical) {
          e.style.flexGrow = `${this.state.widthRatio * 100}`;
          e.style.width = "unset";
        } else {
          e.style.flexGrow = "0";
          e.style.flexShrink = "0";
          e.style.width = `calc((100% - ${this.gapTotalWidth}px) * ${this.state.widthRatio})`;
        }
      }
      if (this.id === docxEditorEventConstantsAndManager.globalEditorState.newGridColumnId) {
        docxEditorEventConstantsAndManager.globalEditorState.newGridColumnId = null;
      }
    }
    attachBlockView() {
      this.resizeObserver = new resizeObserverPolyfill.ResizeObserver(this.handleSizeChange);
      this.resizeObserver.observe(this.blockEl);
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.checkSelfProps();
      if (this.animateOnMount) {
        this.performAnimation(0, this.props.record.snapshot.width_ratio);
      } else {
        this.setBlockStyle();
      }
      this.blockEl.addEventListener("click", this.handleClick);
      this.struct.addChildrenListener(this.handleBlockStructUpdate);
      this.attachBlockView();
    }
    blockViewDidUpdate(e, i) {
      super.blockViewDidUpdate(e, i);
      let r = e.record.snapshot.width_ratio;
      let n = this.props.record.snapshot.width_ratio;
      let o = this.state.widthRatio;
      if (r !== n && n !== o) {
        if (this.props.isVertical) {
          this.setState({
            widthRatio: n
          });
        } else {
          this.performAnimation(r, n);
        }
      }
      if (i.widthRatio !== o) {
        this.setBlockStyle();
        this.blockManager.layoutManager.didUpdateNode(this.id, true);
      }
      if (e.isVertical !== this.props.isVertical) {
        this.setBlockStyle();
      }
    }
    detachBlockView() {
      var e;
      this.handleSizeChange.cancel();
      if ((e = this.resizeObserver) !== null && e !== undefined) {
        e.disconnect();
      }
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.blockEl.removeEventListener("click", this.handleClick);
      this.model.struct.removeChildrenListener(this.handleBlockStructUpdate);
      if (this.gridTimer) {
        clearTimeout(this.gridTimer);
      }
      this.detachBlockView();
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: this.ref,
        className: "grid-column-block",
        children: [this.renderChildren(), this.renderPercent()]
      });
    }
    checkSelfProps() {
      let {
        parentId: e
      } = this.props;
      try {
        if (!e) {
          throw Error("column block should have a parent, but there is no parentId in props");
        }
        let i = this.blockManager.getBlockModelByBlockId(e);
        if (i.type !== docBlockTypeConstants.blockTypeConstants.GRID) {
          throw Error(`column block has an illegal parent type ${i.type}`);
        }
      } catch (e) {
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "column_check_self_props",
          info: {
            recordId: platformDocUtils.p5T(this.props.recordId),
            msg: e.message
          }
        });
        throw e;
      }
    }
    get gapTotalWidth() {
      let {
        parentId: e
      } = this.props;
      let i = null;
      if (e && this.blockManager.hasBlockStructByBlockId(e)) {
        i = this.blockManager.getBlockStructByBlockId(e);
      }
      return gridColumnLayoutUtils.calculateGridGutterWidth(i);
    }
    get blockEl() {
      return this.hostElement || (e => {
        let i = e == null ? undefined : e.parentElement;
        while (i) {
          let {
            blockType: e
          } = i.dataset;
          if (e === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
            return i;
          }
          i = i.parentElement;
        }
        return null;
      })(this.ref.current);
    }
    performAnimation(e, i) {
      docxGridColumnResizeHook.triggerGridResize(true);
      (function (e) {
        let {
          from: i,
          to: r,
          duration: n,
          ease: o = identityFunctionUtil_1.identity,
          onUpdate: l,
          onComplete: s
        } = e;
        let a = performance.now();
        requestAnimationFrame(function e(c) {
          let d = Math.max(0, Math.min((c - a) / n, 1));
          let u = o(d);
          l((1 - u) * i + u * r);
          if (d < 1) {
            requestAnimationFrame(e);
          } else {
            s();
          }
        });
      })({
        from: e,
        to: i,
        duration: 250,
        ease: function (e, i, r, n, o = 11) {
          if (e === i && r === n) {
            return e => e;
          } else {
            return function (e, i, r, n, o, l, s, a, c = 11) {
              let d = [];
              for (let i = 0, n = 1 / (c - 1); i < c; ++i) {
                d[i] = O(i * n, e, r, o, s);
              }
              return c => c === 0 ? i : c === 1 ? a : O(function (e, i, r, n, o, l) {
                let s;
                let a = 0;
                let c = 0;
                let d = 1 / (l.length - 1);
                while (++c < l.length - 1 && l[c] < e) {
                  a += d;
                }
                let u = a + (e - l[--c]) / (l[c + 1] - l[c]) * d;
                let h = D(u, i, r, n, o);
                if (h > -0.00001) {
                  c = 0;
                  do {
                    u -= (O(u, i, r, n, o) - e) / h;
                    if ((h = D(u, i, r, n, o)) > -0.00001 && h < 0.00001) {
                      break;
                    }
                  } while (++c < 4);
                  return u;
                }
                let f = a;
                let g = a + 0.1;
                c = 0;
                do {
                  if ((s = O(u = f + (g - f) * 0.5, i, r, n, o) - e) > 0) {
                    g = u;
                  } else {
                    f = u;
                  }
                } while ((s < -0.00001 || s > 0.00001) && ++c < 10);
                return u;
              }(c, e, r, o, s, d), i, n, l, a);
            }(0, 0, e, i, r, n, 1, 1, o);
          }
        }(0, 0, 1, 1),
        onUpdate: e => {
          let i = this.blockEl;
          if (i) {
            i.style.flexGrow = "0";
            i.style.flexShrink = "0";
            i.style.width = `calc((100% - ${this.gapTotalWidth}px) * ${e})`;
          }
        },
        onComplete: () => {
          this.setState({
            widthRatio: i
          }, () => {
            this.blockManager.layoutManager.didUpdateNode(this.id, true);
          });
          docxGridColumnResizeHook.triggerGridResize(false);
        }
      });
    }
    renderPercent() {
      let e = M("grid-column-percent", {
        "in-vc": browserEnvironmentDetectionUtils.browserDetector.isInVC
      });
      return reactJsxRuntimeCoreReexport.jsxs("span", {
        className: e,
        children: [Math.round(this.state.widthRatio * 100), "%"]
      });
    }
    constructor(...e) {
      super(...e);
      G(this, "state", {
        widthRatio: this.animateOnMount ? 0 : this.props.record.snapshot.width_ratio
      });
      G(this, "gridTimer", undefined);
      G(this, "ref", reactCoreLibraryReexport.createRef());
      G(this, "resizeObserver", undefined);
      G(this, "shouldNotifyGridToResize", false);
      G(this, "shouldNotifyGridToUpdate", false);
      G(this, "gridParent", null);
      G(this, "oldWidth", 0);
      G(this, "getLastChildBlock", () => {
        let e = this.blockManager.getBlockModelByBlockId(this.id);
        let i = lastElementHelper.getLastElement(e.children);
        if (i) {
          return this.blockManager.getBlockViewByBlockId(i == null ? undefined : i.id);
        }
      });
      G(this, "findLastEmptyTextualBlock", e => {
        let i = this.blockManager.getBlockModelByBlockId(e);
        if (i.children.length === 0) {
          return;
        }
        let r = i.children[i.children.length - 1];
        let n = this.blockManager.getBlockViewByBlockId(r.id);
        if (editorTextBlockUtilities.isTextEditable(n) && n.type === docBlockTypeConstants.blockTypeConstants.TEXT) {
          if (n.model.isEmpty) {
            return r.id;
          } else {
            return undefined;
          }
        }
      });
      G(this, "handleClick", async e => {
        if (!this.editable || e.target !== this.hostElement) {
          return;
        }
        let i = this.getLastChildBlock();
        let r = i == null ? undefined : i.hostElement.getBoundingClientRect().bottom;
        if (!r || e.y < r) {
          return;
        }
        let n = this.findLastEmptyTextualBlock(this.id);
        if (n) {
          let e = this.blockManager.getBlockViewByBlockId(n);
          return editorRangeUtilities.selectToEnd(e);
        }
        let o = "";
        await this.blockManager.applyTransaction("insertBlockWhenClickInColumn", e => {
          let i = this.blockManager.getRecordByBlockId(this.id);
          [o] = documentBlockOperations.insertNewChildren(e, i.id, this.record.snapshot.children.length, [documentNodeUtils_2.createDocumentNode({})]);
        });
        let l = this.blockManager.getBlockIdsByRecordId(o)[0];
        let s = this.blockManager.getBlockViewByBlockId(l);
        if (editorTextBlockUtilities.isTextEditable(s)) {
          s.focus();
        }
      });
      G(this, "handleBlockStructUpdate", (e, i) => {
        let r = e.block;
        let {
          options: n
        } = i;
        let {
          position: o
        } = r;
        let l = r.parent;
        if (e.action === docxEditorCore.MutationAction.REMOVE) {
          l = e.parent;
          o = e.position;
        }
        if (o === 0 && (this.gridParent = l.parent && this.editorAPI.viewService.getBlockViewByBlockId(l.parent.id) || null, changeSourceValidators.isUndoRedoSource(n) ? this.shouldNotifyGridToUpdate = true : this.shouldNotifyGridToResize = true, this.shouldNotifyGridToResize || this.shouldNotifyGridToUpdate)) {
          let i = n && n.from && n.from === collaborativeEditingFlowSyncModule.kq.REMOTE;
          setTimeout(() => {
            let r = this.blockManager.hasBlockViewByBlockId(l.id);
            let o = this.gridParent.updateCurrentMultiBlockInLine(r);
            let s = docxLayoutConstants_1.mutationActions.includes(e.action) && !changeSourceValidators.isPasteSource(n);
            if (!i && this.shouldNotifyGridToResize && o && this.editable && !s) {
              this.gridParent.updateGridAndColumnSize();
            }
            this.shouldNotifyGridToUpdate = false;
            this.shouldNotifyGridToResize = false;
          });
        }
      });
      G(this, "handleSizeChange", debounceUtilWrapper.createDebounce(e => {
        let {
          width: i
        } = e[0].contentRect;
        let r = this.oldWidth === 0 && i !== 0;
        let n = i === 0 || r || this.oldWidth === i;
        this.oldWidth = i;
        if (!n) {
          this.struct.traverse(e => {
            var i;
            if ((i = this.blockManager.getBlockViewByBlockIdNotCheck(e.id)) !== null && i !== undefined) {
              i.onResize();
            }
          });
        }
      }, 300));
    }
  }
  function J(e) {
    docxEditorCore.registerProviders([C, {
      provide: gridLayoutManager.GridLayoutManager,
      useClass: gridLayoutManager.GridLayoutManager
    }, {
      provide: gridColumnLayoutNodeConfigProvider.GridColumnLayoutNodeConfigProvider,
      useClass: gridColumnLayoutNodeConfigProvider.GridColumnLayoutNodeConfigProvider
    }, {
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useExisting: gridLayoutManager.GridLayoutManager
    }, {
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useExisting: gridColumnLayoutNodeConfigProvider.GridColumnLayoutNodeConfigProvider
    }]);
    docxEditorCore.registerViewModel(p, {
      viewCreator: gridBlockLayoutManager.GridBlockLayoutManager,
      extensions: e
    });
  }
  function Y(e) {
    docxEditorCore.registerViewModel(m, {
      viewCreator: q,
      blockDeps: ["renderProps.isVertical"],
      extensions: e
    });
  }
  G(q, "blockForLayoutNodeBuilder", new gridColumnLayoutNodeConfigProvider.GridColumnLayoutNodeConfigProvider());
  require.d(exports, {
    registerGridBlock: function () {
      return J;
    },
    registerGridColumnBlock: function () {
      return Y;
    }
  });
}