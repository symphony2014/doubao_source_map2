// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxFoldExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 450933
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
  var blockQueryProviderName = require("block-query-provider-name") /*id: 856405*/;
  var blockTraversalOrder = require("block-traversal-order") /*id: 893047*/;
  var foldProviderAccessor = require("fold-provider-accessor") /*id: 786534*/;
  function p(e, i, r) {
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
  n = (c = class {
    apply(e) {
      return this.fold.findFoldedByBlock(e) || e;
    }
    constructor() {
      var e;
      var i;
      e = "fold";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      p(this, "type", undefined);
    }
  }).prototype;
  o = "fold";
  l = [foldProviderAccessor.foldProvider];
  a = {};
  Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  });
  a.enumerable = !!a.enumerable;
  a.configurable = !!a.configurable;
  if ("value" in a || a.initializer) {
    a.writable = true;
  }
  d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a;
  let m = c;
  class v extends m {
    constructor(...e) {
      super(...e);
      p(this, "type", blockTraversalOrder.BlockTraversalOrder.ON_FIRST_BLOCK_IN_PRE_ORDER);
    }
  }
  class b extends m {
    constructor(...e) {
      super(...e);
      p(this, "type", blockTraversalOrder.BlockTraversalOrder.ON_LAST_BLOCK_IN_PRE_ORDER);
    }
  }
  var docxFoldProviderName = require("docx-fold-provider-name") /*id: 207215*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var C = classnamesUtils;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var T = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#2B2F36",
      d: "M7.712 11.351 3.34 5.9a.45.45 0 0 1 0-.538.28.28 0 0 1 .215-.112h8.89c.168 0 .305.17.305.381a.43.43 0 0 1-.09.269l-4.372 5.451c-.159.199-.417.199-.576 0"
    })
  });
  var presentationZoomHoc = require("presentation-zoom-hoc") /*id: 782308*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var changeSourceConstants = require("change-source-constants") /*id: 363583*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var docPreEditChangeIntercept = require("doc-pre-edit-change-intercept") /*id: 98436*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  var useSelectionChangeTracker = require("use-selection-change-tracker") /*id: 472242*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var foldStatusConstants = require("fold-status-constants") /*id: 275668*/;
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  var docBlockEditUtils = require("doc-block-edit-utils") /*id: 546333*/;
  var docxEditorHoverManager = require("docx-editor-hover-manager") /*id: 803365*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var docxBlockFoldUtils = require("docx-block-fold-utils") /*id: 186232*/;
  let Q = "remove";
  let ee = e => {
    var i;
    let {
      blockId: r,
      recursionProps: {
        blockManager: n,
        isHistory: o,
        isPresentationMode: l,
        editPermission: s,
        editable: a,
        selectionAPI: c
      },
      fold: d,
      alwaysShowTooltip: u,
      disableTooltip: h,
      vcController: f
    } = e;
    let g = a && docComponentFeatureFlags.isContentFoldHidden();
    let p = !!((i = e.struct.parent) === null || i === undefined ? undefined : i.isRoot());
    let m = reactCoreLibraryReexport.useRef(null);
    let [v, b] = reactCoreLibraryReexport.useState(() => d.isFolded(r));
    let [y, E] = reactCoreLibraryReexport.useState(false);
    let _ = docxEditorEventConstantsAndManager.globalEditorState.hoverBlockId && docxEditorEventConstantsAndManager.globalEditorState.hoverBlockId === r && docxBlockFoldUtils.isBlockFoldable(docxEditorEventConstantsAndManager.globalEditorState.hoverBlockId, n);
    let $ = reactCoreLibraryReexport.useRef(_);
    let ee = reactCoreLibraryReexport.useRef();
    let [et, ei] = reactCoreLibraryReexport.useState(_);
    let er = reactReduxCore.useSelector(docxViewStateUtil.getViewType);
    let en = reactCoreLibraryReexport.useCallback((e, i) => {
      if (i === "add" && !et) {
        ei(true);
      }
      if (i === Q && et && !v) {
        ei(false);
      }
    }, [v, et]);
    let eo = reactCoreLibraryReexport.useCallback(e => {
      if (!u && m.current) {
        if (e) {
          $.current = e.id === r && docxBlockFoldUtils.isBlockFoldable(e.id, n);
          let i = e.id === r && docxBlockFoldUtils.isBlockFoldable(e.id, n) ? "add" : Q;
          en(m.current, i);
        } else {
          $.current = false;
          en(m.current, Q);
        }
      }
    }, [r, en]);
    let el = reactCoreLibraryReexport.useCallback(e => {
      if (m.current && e.length > 0 && e.some(e => e.id === r)) {
        let e = docxBlockFoldUtils.isBlockFoldable(r, n);
        $.current = e;
        en(m.current, e ? "add" : Q);
      }
    }, [r, en]);
    let es = reactCoreLibraryReexport.useCallback(() => {
      if (m.current) {
        $.current = true;
        en(m.current, "add");
      }
    }, [en]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        let {
          snapshot: e
        } = n.getBlockViewByBlockId(r).props.record;
        let i = e[docBlockConstants_1.editTypeConstants.change];
        if (docBlockEditUtils.validateBlockProps(i == null ? undefined : i.from, i == null ? undefined : i.to, docBlockConstants_1.blockAttributeKeys) === "folded") {
          es();
        }
      }
    }, [n, r, o, es]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = (e, i) => eo(i);
      n.addListener(docxEditorHoverManager.hoverBlockChangedEvent, e);
      return () => {
        n.removeListener(docxEditorHoverManager.hoverBlockChangedEvent, e);
      };
    }, [v, eo, el]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = d.changeReadOnlySignalReciver.subscribe(e => {
        let {
          blockId: i,
          folded: n
        } = e;
        if (i === r && n !== v) {
          b(n);
        }
      });
      return () => {
        e.unsubscribe();
      };
    }, [v, r]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        let {
          id: i,
          folded: n
        } = e;
        if (i === r && n !== v) {
          b(n);
        }
      };
      n.addListener(foldStatusConstants.foldSetState, e, r);
      return () => {
        n.removeListener(foldStatusConstants.foldSetState, e, r);
      };
    }, [v, r]);
    let ea = reactCoreLibraryReexport.useCallback((e, i) => {
      let {
        options: o
      } = i;
      let {
        ops: l
      } = e;
      if (!l || !o || browserEnvironmentDetectionUtils.browserDetector.isInVC && (f == null ? undefined : f.isFollow) && !(f == null ? undefined : f.isScreenMagicShare)) {
        return;
      }
      let s = l.find(e => e.p.includes("folded"));
      if (s && (collaborativeEditingFlowSyncModule.transformOperations(s) || collaborativeEditingFlowSyncModule.isCreateOperation(s))) {
        let e = !!s.action.oi;
        let i = syncedReferenceBlockUtils.isChangeFromCurrentEditor(o, n.editorAPI.id);
        n.dispatch(docxEditorConstantsConfig.toggleFold, [r, e, false, i]);
        b(e);
      }
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      let i = d.isFolded(r);
      if (v !== i) {
        b(i);
      }
      let {
        struct: n
      } = e;
      n.addDataListener(ea);
      return () => {
        n.removeDataListener(ea);
      };
    }, [r, ea]);
    let ec = reactCoreLibraryReexport.useCallback(e => {
      let i = docxEditorBlockMetadataUtils.getMultipleBlockInfo([r], n);
      let o = docxEditorBlockMetadataUtils.getThrottledBlockPath(r, n);
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", o, {
        click: "click_fold",
        sub_click: e ? "fold" : "unfold",
        action_object: "block",
        object_block_data: i
      });
    }, [r]);
    let ed = () => {
      var e;
      var l;
      var u;
      var h;
      var f;
      let g = !v;
      if (o) {
        return;
      }
      let p = d.getFoldStateMap();
      let m = n.getRecordByBlockId(r);
      let y = n.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
        optional: true
      });
      if (!m || y && !y.canBlockEditAndTryApply(m, m.snapshot.type, {
        type: "UPDATE_ATTRIBUTE",
        changedKey: "folded",
        newValue: g
      })) {
        docPreEditChangeIntercept.reportUserOperation({
          op_source: "fold_trigger",
          op_type: g ? "fold" : "unfold",
          edit_type: "UPDATE_ATTRIBUTE",
          interceptedRecord: m
        }, n);
        return;
      }
      let S = () => {
        n.dispatch(docxEditorConstantsConfig.toggleFold, [r, g]);
        b(g);
      };
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile && !a || (docxFeatureFlags.isNotEmbedDocx() ? !a : !s) || !s) {
        S();
        return;
      }
      let k = n.getBlockViewByBlockId(r);
      ec(g);
      if (k.type !== docBlockTypeConstants.blockTypeConstants.PENDING && k.record.snapshot.folded !== g) {
        n.applyTransaction("toggleFold", e => {
          e.replace(k.record.id, ["folded"], g);
        });
        if (docxFeatureFlags.isNotEmbedDocx()) {
          S();
        }
      } else {
        S();
      }
      docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorConstantsConfig.toggleAttribute, {
        operation_method: docxEditorConstantsConfig.inputTypeConstants.MOUSE,
        source: "other",
        action: `${k.type}_${g ? "collapse" : "expand"}`,
        block_id: r,
        blockManager: n
      });
      if (changeSourceConstants.isH5Browser) {
        if ((e = window.getSelection()) !== null && e !== undefined) {
          e.removeAllRanges();
        }
      } else if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        c.blur();
      } else {
        let e = [];
        c.getSelection().forEach(i => {
          e.push(i.id);
        });
        if (g && !p.get(r)?.show && e.some(e => {
          return p.get(e)?.closestFolderId === r;
        }) && (c.isTextSelectionAcrossBlocks() || c.isSingleTextSelection())) {
          c.removeAllSelection();
        }
        if ((h = window.getSelection()) === null || h === undefined ? undefined : (u = h.anchorNode) === null || u === undefined ? undefined : (l = u.parentElement) === null || l === undefined ? undefined : l.closest(".task-block-text-editor")) {
          if ((f = window.getSelection()) !== null && f !== undefined) {
            f.removeAllRanges();
          }
        }
        if (c.isSingleTextSelection(c.getSelection())) {
          c.removeAllSelection();
        }
      }
    };
    let eu = reactCoreLibraryReexport.useCallback(e => {
      if (e.detail >= 3) {
        e.preventDefault();
      }
      ed();
    }, [ed]);
    let eh = reactCoreLibraryReexport.useCallback(() => {
      if (ee.current) {
        clearTimeout(ee.current);
      }
      ee.current = window.setTimeout(() => {
        E(true);
      }, 200);
    }, [E]);
    let ef = reactCoreLibraryReexport.useCallback(() => {
      if (ee.current) {
        clearTimeout(ee.current);
      }
      E(false);
    }, [E]);
    reactCoreLibraryReexport.useEffect(() => {
      n.eventEmitter.addListener(renderEventConstants.leaveBuffer, ef, r);
      return () => {
        n.eventEmitter.removeListener(renderEventConstants.leaveBuffer, ef, r);
      };
    }, [ef]);
    let eg = C({
      "fold-wrapper": true,
      "fold-folded": v,
      "fold-show": !g && er !== viewStateTypeConstants.viewTypes.PAGINATION && ($.current || v || u),
      "can-fold": true,
      [`fold-block-id-${r}`]: true
    });
    let [ep, em] = reactCoreLibraryReexport.useState(false);
    let [ev, eb] = reactCoreLibraryReexport.useState(false);
    let ey = reactCoreLibraryReexport.useRef(0);
    let eS = C({
      "fold-handler": true,
      "touch-start": ep,
      "touch-end": ev
    });
    let ek = v ? t("mindnote.editor.expand") : t("etherpad.collapse");
    let eE = useSelectionChangeTracker.useSelectionChange(c);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `${C(eg, {
        "no-pointer-events": eE
      })}`,
      contentEditable: "false",
      suppressContentEditableWarning: true,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        style: (() => {
          if (!l || !p || syncedReferenceBlockUtils.isSyncedReferenceBlock(n.editorAPI)) {
            return {};
          }
          let e = docBlockZoomUtils.getDefaultLineHeight();
          if (browserEnvironmentDetectionUtils.browserDetector.firefox) {
            return {
              transformOrigin: "left top",
              transform: `scale(${e})`
            };
          } else {
            return {
              zoom: e
            };
          }
        })(),
        className: `${C(eg, {
          "fold-hide": g,
          "fold-show": !g && et && er !== viewStateTypeConstants.viewTypes.PAGINATION,
          "fold-handler-wrapper": true,
          "no-pointer-events": o || eE
        })}`,
        ref: m,
        children: reactJsxRuntimeCoreReexport.jsx(presentationZoomHoc.ZoomableDiv, {
          className: eS,
          onClick: eu,
          onMouseEnter: eh,
          onMouseLeave: ef,
          onTouchStart: () => {
            if (!ep && !o) {
              window.clearTimeout(ey.current);
              em(true);
            }
          },
          onTouchEnd: () => {
            if (!ev && !o) {
              eb(true);
              ey.current = window.setTimeout(() => {
                em(false);
                eb(false);
              }, 300);
            }
          },
          isPresentationMode: l,
          children: reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
            title: ek,
            placement: "top",
            visible: !h && y,
            getPopupContainer: () => document.body,
            overlayStyle: {
              pointerEvents: "none"
            },
            children: reactJsxRuntimeCoreReexport.jsx(presentationZoomHoc.ZoomableDiv, {
              className: "svg-wrapper",
              isPresentationMode: l,
              children: reactJsxRuntimeCoreReexport.jsx(T, {})
            })
          })
        })
      })
    });
  };
  class et extends editorContextFacade.EditorContextFacade {
    getAfterSlot(e) {
      let i = !!e.alwaysShowTooltip;
      let r = !!e.disableTooltip;
      return e => {
        let {
          blockId: n,
          struct: o,
          recursionProps: {
            blockManager: l
          }
        } = e;
        let [s, a] = reactCoreLibraryReexport.useState(() => docxBlockFoldUtils.isBlockFoldable(n, l));
        reactCoreLibraryReexport.useEffect(() => {
          let e = () => {
            let e = docxBlockFoldUtils.isBlockFoldable(n, l);
            if (e !== s) {
              a(e);
            }
          };
          o.addChildrenListener(e);
          return () => {
            o.removeChildrenListener(e);
          };
        }, [s, n]);
        if (s) {
          return reactJsxRuntimeCoreReexport.jsx(ee, {
            fold: this.fold,
            alwaysShowTooltip: i,
            disableTooltip: r,
            vcController: this.vcController,
            ...e
          });
        } else {
          return null;
        }
      };
    }
    constructor(...e) {
      var i;
      var r;
      var n;
      super(...e);
      i = "handleFolded";
      r = emptyExportFunction.emptyFunction;
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
    }
  }
  function ei() {
    docxEditorCore.registerViewExt(docxFoldProviderName.foldProviderName, et);
    docxEditorCore.registerProviders([{
      provide: blockQueryProviderName.blockQueryProvider,
      useClass: v
    }, {
      provide: blockQueryProviderName.blockQueryProvider,
      useClass: b
    }]);
  }
  require.d(exports, {
    DocxFoldExtension: function () {
      return ei;
    }
  });
}