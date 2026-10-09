// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'GridBlockLayoutManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 924085
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var resizeObserverPolyfill = require("resize-observer-polyfill") /*id: 412454*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var gridLayoutManager = require("grid-layout-manager") /*id: 433020*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var editorUiConstants = require("editor-ui-constants") /*id: 455663*/;
  var focusObserver = require("focus-observer") /*id: 937828*/;
  var docxBlockUtils_2 = require("docx-block-utils_2") /*id: 239669*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var gridColumnSymbolHoverStateManager = require("grid-column-symbol-hover-state-manager") /*id: 313679*/;
  var docxGridColumnResizeHook = require("docx-grid-column-resize-hook") /*id: 202645*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var numberStringUtils = require("number-string-utils") /*id: 762471*/;
  var zIndexConstants = require("z-index-constants") /*id: 470454*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var pointerEventAdapterUtils = require("pointer-event-adapter-utils") /*id: 364859*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var touchInteractionUtil = require("touch-interaction-util") /*id: 593236*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var L = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 4,
    height: 3,
    fill: "none",
    viewBox: "0 0 4 3",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#BBBFC4",
      d: "M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    })
  });
  var addCircleIcon = require("add-circle-icon") /*id: 563524*/;
  function B(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  let x = (e, n, i) => docxTableLayoutUtils.findClosestTable(e, n) ? !browserEnvironmentDetectionUtils.browserDetector.isMobile || i >= docxLayoutConstants_1.configLimitMid : i >= docxLayoutConstants_1.configLimitMax;
  class U extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    static getClosestGridBlockId(e) {
      let n = e.closest(".j-grid-block");
      return n && docxBlockUtils_2.getBlockIdFromNode(n) || null;
    }
    get isWithBoundary() {
      return true;
    }
    get currentMultiBlockInLineValue() {
      return this.currentMultiBlockInLine;
    }
    setcurrentMultiBlockInLineValue(e) {
      this.currentMultiBlockInLine = e;
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.updateCurrentMultiBlockInLine(false);
      this.model.struct.addChildrenListener(this.handleBlockStructUpdate);
      focusObserver.FocusObserver.register(this.id, this.handleFocusChange);
      setTimeout(() => {
        this.watchContainerResize();
      }, 100);
      this.updateParentContainerWidth();
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isInVC) {
        this.blockManager.addListener(editorUiConstants.editorResizeClass, this.updateParentContainerWidth);
      }
    }
    blockViewDidMove() {
      super.blockViewDidMove();
      this.stopWatchContainerResize();
      setTimeout(() => {
        this.watchContainerResize();
      }, 100);
    }
    blockViewWillUnmount() {
      super.blockViewWillUnmount();
      this.model.struct.removeChildrenListener(this.handleBlockStructUpdate);
      this.stopWatchContainerResize();
      focusObserver.FocusObserver.unregister(this.id, this.handleFocusChange);
      this.handleUpdateIsHoverAddGridColumnSymbolInTable(false);
      try {
        this.editorAPI.getService(gridLayoutManager.GridLayoutManager).deleteCalculateModel(this.props.blockId);
      } catch (e) {}
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isInVC) {
        this.blockManager.removeListener(editorUiConstants.editorResizeClass, this.updateParentContainerWidth);
      }
    }
    onBufferEnter() {
      firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
        if (!this.model.isDestroyed) {
          this.updateParentContainerWidth();
        }
      });
    }
    updateCurrentMultiBlockInLine() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let {
        children: n
      } = this.struct;
      let i = null;
      if (n.length < 2) {
        this.currentMultiBlockInLine = null;
        return false;
      }
      for (let e = 0; e < n.length; e++) {
        let r = n[e].children[0];
        if (r) {
          if (i) {
            if (i === r.type) {
              continue;
            }
            i = null;
            break;
          }
          i = r.type;
        }
      }
      let r = i && this.currentMultiBlockInLine === i;
      if (i === docBlockTypeConstants.blockTypeConstants.IMAGE && e) {
        gridColumnLayoutUtils.logGridMultiPicEvent(this.blockManager, !!r);
      }
      this.currentMultiBlockInLine = i;
      return r;
    }
    changeWidthRatio(e, n) {
      let i = n / this.dragInfo.width;
      let r = this.getColumnByIndex(e);
      let o = this.getColumnByIndex(e + 1);
      let l = r.props.record.snapshot.width_ratio;
      let a = o.props.record.snapshot.width_ratio;
      if (l + a < docxLayoutConstants_1.configUnitFrac * 2) {
        return;
      }
      let s = Math.round((l + i) * 10) / 10;
      let c = (l + a) / 2 - l;
      let u = s - l;
      if (Math.abs(c - i) < 0.01) {
        i = c;
      } else if (Math.abs(u - i) < 0.01) {
        i = u;
      }
      if (l + i < docxLayoutConstants_1.configUnitFrac) {
        i = docxLayoutConstants_1.configUnitFrac - l;
      }
      if (a - i < docxLayoutConstants_1.configUnitFrac) {
        i = a - docxLayoutConstants_1.configUnitFrac;
      }
      this.idRatioMap.set(r.id, l + i);
      r.setState({
        widthRatio: l + i
      });
      this.idRatioMap.set(o.id, a - i);
      o.setState({
        widthRatio: a - i
      });
    }
    saveWidthRatio() {
      let e = this.blockManager.getBlockModelByBlockId(this.id).children.map(e => {
        let {
          id: n
        } = e;
        return this.blockManager.getBlockViewByBlockId(n);
      });
      this.blockManager.applyTransaction("saveWidthRatio", n => {
        e.forEach(e => {
          let i = e.model.snapshot.width_ratio;
          let r = e.state.widthRatio;
          if (i !== r) {
            this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(e.id, this.blockManager), {
              click: "block_resize",
              before_size: `1x${Math.round(i * 100)}`,
              after_size: `1x${Math.round(r * 100)}`
            });
          }
          n.replace(e.record.id, ["width_ratio"], e.state.widthRatio);
        });
      });
    }
    getColumnByIndex(e) {
      let {
        id: n
      } = this.blockManager.getBlockModelByBlockId(this.id).children[e];
      return this.blockManager.getBlockViewByBlockId(n);
    }
    async addColumnToRight(e) {
      await gridColumnLayoutUtils.addGridColumn({
        blockManager: this.blockManager,
        gridBlockId: this.id,
        columnIndex: e + 1,
        transactionName: "clickAddColumnBtn",
        highlight: true
      });
    }
    handleUpdateIsHoverAddGridColumnSymbolInTable(e) {
      let {
        id: n,
        blockManager: i
      } = this;
      let r = i.getBlockViewByBlockIdNotCheck(n);
      let o = false;
      if (e && r) {
        o = docxTableLayoutUtils.isInCellParent(r, i);
      }
      gridColumnSymbolHoverStateManager.triggerGridColumnSymbolHoverChange(o);
    }
    renderChildren(e) {
      let {
        props: n
      } = this;
      let {
        blockId: i,
        record: r,
        recursionProps: o
      } = n;
      let {
        blockManager: l
      } = o;
      let a = r.snapshot.children || [];
      let u = this.editable && a.length < docxLayoutConstants_1.configMarginMin;
      return reactJsxRuntimeCoreReexport.jsx(bearVirtualLayoutReconciler.RenderUnit, {
        id: i,
        reconciler: l.layoutManager.getReconciler(),
        renderChild: (n, i, r) => {
          let o = numberStringUtils.startsWithNumber(zIndexConstants.zIndexMax, n);
          let d = o ? numberStringUtils.stripNumberPart(zIndexConstants.zIndexMax, n) : n;
          let f = l.getRecordByBlockId(d).id;
          let g = a.indexOf(f) * 2 + +!!o;
          let p = g === a.length * 2 - 1;
          let m = Math.floor(g / 2);
          let v = this.state.draggingColumnGapIndex === m;
          if (o) {
            r.className = s("column-gap j-column-gap", {
              dragging: v,
              disabled: p,
              "opacity-higher-than-zero": browserEnvironmentDetectionUtils.browserDetector.isIPad && this.editable
            });
            let e = {
              [pointerEventAdapterUtils.reactEventNames.mousedown]: p ? undefined : e => this.handleMouseDown(e, m)
            };
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              contentEditable: false,
              className: "column-gap-inner",
              ...e,
              children: [u && !v && reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
                title: t("CreationDoc_Docs_DocXBlock_AddColumn_Title"),
                placement: "top",
                popupAlign: {
                  targetOffset: [0, 8]
                },
                mouseEnterDelay: 300,
                children: reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: "circle",
                  onMouseEnter: () => this.handleUpdateIsHoverAddGridColumnSymbolInTable(true),
                  onMouseLeave: () => this.handleUpdateIsHoverAddGridColumnSymbolInTable(false),
                  onClick: () => {
                    this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_content_page_click", docxEditorBlockMetadataUtils.getThrottledBlockPath(this.id, this.blockManager), {
                      click: "block_custom_action",
                      action_type: "click_add_column",
                      object_block_data: docxEditorBlockMetadataUtils.getMultipleBlockInfo([this.id], this.blockManager)
                    });
                    this.setState({
                      draggerKey: this.state.draggerKey + 1
                    });
                    this.addColumnToRight(m);
                    this.handleUpdateIsHoverAddGridColumnSymbolInTable(false);
                  },
                  children: [reactJsxRuntimeCoreReexport.jsx(L, {
                    className: "circle-dot"
                  }), reactJsxRuntimeCoreReexport.jsx(addCircleIcon.AddCircleIcon, {
                    className: "add-column"
                  })]
                })
              }), this.editable && reactJsxRuntimeCoreReexport.jsx("div", {
                className: s("dragger-hot-spots", {
                  "editable-cursor": this.editable && !p
                }),
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "dragger"
                })
              })]
            }, p ? "dragger-last" : `dragger-${this.state.draggerKey}-${m}`);
          }
          let _ = l.getBlockStructByBlockId(n);
          let y = this.idRatioMap.get(n);
          if (!y && _) {
            y = _.record.snapshot.width_ratio;
            this.idRatioMap.set(n, y);
          }
          return this.editorAPI.viewService.render(n, {
            recursionProps: Object.assign({}, this.props.recursionProps, {
              isInGrid: true
            }),
            hostElementRef: i,
            isVertical: e,
            style: gridColumnLayoutUtils.getGridColumnStyle(this.blockManager, n, e)
          });
        },
        className: "grid-render-unit",
        childContainerTag: numberStringUtils.startsWithNumber(zIndexConstants.zIndexMax, i) ? "div" : undefined,
        watchProps: {
          ...o,
          childrenIds: a,
          isVertical: e,
          draggingColumnGapIndex: this.state.draggingColumnGapIndex
        }
      });
    }
    render() {
      let {
        parentContainerWidth: e,
        isFocus: n,
        draggingColumnGapIndex: i
      } = this.state;
      let r = !!this.editorAPI.config.get("isH5SSR") || !x(this.blockManager, this.id, e) || browserEnvironmentDetectionUtils.browserDetector.isNonIPadMobile;
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("grid-block", "j-grid-block", {
          "grid-vertical": r,
          "grid-horizontal": !r,
          "grid-focus": n,
          "grid-editable": this.editable,
          "grid-dragging": i !== -1
        }),
        ref: this.ref,
        style: {
          borderRadius: 8
        },
        children: this.renderChildren(r)
      });
    }
    constructor(...e) {
      super(...e);
      B(this, "isAlignHorizontal", true);
      B(this, "idRatioMap", new Map());
      B(this, "currentMultiBlockInLine", null);
      B(this, "notifiedResizing", false);
      B(this, "ref", reactCoreLibraryReexport.createRef());
      B(this, "dragInfo", {
        x: 0,
        y: 0,
        columnGapIndex: -1,
        width: 0
      });
      B(this, "containerResizeObserver", undefined);
      B(this, "state", {
        draggingColumnGapIndex: -1,
        draggerKey: 1,
        parentContainerWidth: window.innerWidth,
        isFocus: false
      });
      B(this, "updateGridAndColumnSize", () => {
        let e = this.struct;
        let {
          children: n
        } = e;
        if (n.length < 2) {
          this.currentMultiBlockInLine = null;
          return;
        }
        let i = this.state.parentContainerWidth;
        let r = n.map(e => docxEditorCore.getBlockModel(e.children[0]));
        let o = gridColumnLayoutUtils.calculateBlockWidthRatios(this.currentMultiBlockInLine, i, r, this.blockManager) || [];
        if (o.length >= 2) {
          this.blockManager.applyTransaction("updateGridAndChildBlockRatio", n => {
            e.children.forEach((e, i) => {
              let {
                widthRatio: r
              } = o[i];
              if (Number.isNaN(r) || !r) {
                this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                  action: "column_block_width_ratio_invalid",
                  info: JSON.stringify({
                    recordId: docxUtilityHelpers.maskSensitiveData(e.recordId),
                    log_point: 3,
                    suspicious_var: {
                      width_ratio: r
                    }
                  })
                });
                r = 1 / o.length;
              }
              n.replace(e.recordId, ["width_ratio"], r);
              n.replace(o[i].id, ["image", "scale"], o[i].scale);
            });
          });
        }
      });
      B(this, "watchContainerResize", () => {
        let n = this.hostElement?.parentElement;
        if (n) {
          let e = new resizeObserverPolyfill.ResizeObserver(this.updateParentContainerWidth);
          e.observe(n);
          this.containerResizeObserver = e;
        }
      });
      B(this, "stopWatchContainerResize", () => {
        var e;
        if ((e = this.containerResizeObserver) !== null && e !== undefined) {
          e.disconnect();
        }
        delete this.containerResizeObserver;
      });
      B(this, "updateParentContainerWidth", () => {
        let n = this.hostElement?.parentElement;
        if (n && this.blockManager.layoutManager.isBlockActive(this.id)) {
          let e = n.clientWidth;
          if (e === this.state.parentContainerWidth) {
            return;
          }
          this.setState({
            parentContainerWidth: e
          }, () => {
            let n = x(this.blockManager, this.id, e);
            if (this.isAlignHorizontal !== n) {
              this.isAlignHorizontal = n;
              this.editorAPI.getService(gridLayoutManager.GridLayoutManager).saveCalculateModel(this.props.blockId, this.isAlignHorizontal);
              this.blockManager.layoutManager.didUpdateNode(this.id, true);
            }
          });
        }
      });
      B(this, "handleBlockStructUpdate", () => {
        this.updateCurrentMultiBlockInLine();
      });
      B(this, "handleFocusChange", e => {
        if (this.state.isFocus !== e) {
          this.setState({
            isFocus: e
          });
        }
      });
      B(this, "handleMouseDown", (e, n) => {
        if (!this.editable || e.target.tagName === "path") {
          return;
        }
        let i = this.ref.current ? this.ref.current.getBoundingClientRect().width : 0;
        this.dragInfo = {
          x: e.clientX,
          y: e.clientY,
          columnGapIndex: n,
          width: i
        };
        this.setState({
          draggingColumnGapIndex: n
        });
        document.body.classList.add("grid-block-dragging");
        if (browserEnvironmentDetectionUtils.browserDetector.isInChatTab && e.pointerId) {
          touchInteractionUtil.capturePointer(e);
        }
        document.addEventListener(pointerEventAdapterUtils.domEventNames.mousemove, this.handleMouseMove);
        document.addEventListener(pointerEventAdapterUtils.domEventNames.mouseup, this.handleMouseUp);
        document.addEventListener("pointercancel", this.handleMouseUp, {
          once: true
        });
      });
      B(this, "handleMouseMove", e => {
        if (!this.editable || (this.notifiedResizing || (this.notifiedResizing = true, this.blockManager.dispatch(docxEditorConstantsConfig.resizeGridEvent, true), docxGridColumnResizeHook.triggerGridResize(true)), isUndefinedCheck.isUndefined(e.clientX) || isUndefinedCheck.isUndefined(this.dragInfo.x))) {
          return;
        }
        let n = e.clientX - this.dragInfo.x;
        this.changeWidthRatio(this.dragInfo.columnGapIndex, n);
      });
      B(this, "handleMouseUp", () => {
        if (this.editable) {
          this.notifiedResizing = false;
          this.blockManager.dispatch(docxEditorConstantsConfig.resizeGridEvent, false);
          docxGridColumnResizeHook.triggerGridResize(false);
          document.removeEventListener(pointerEventAdapterUtils.domEventNames.mousemove, this.handleMouseMove);
          document.removeEventListener(pointerEventAdapterUtils.domEventNames.mouseup, this.handleMouseUp);
          document.removeEventListener("pointercancel", this.handleMouseUp);
          this.saveWidthRatio();
          document.body.classList.remove("grid-block-dragging");
          this.setState({
            draggingColumnGapIndex: -1
          });
          this.dragInfo = {
            x: 0,
            y: 0,
            columnGapIndex: -1,
            width: 0
          };
        }
      });
    }
  }
  B(U, "blockForLayoutNodeBuilder", new gridLayoutManager.GridLayoutManager());
  require.d(exports, {
    GridBlockLayoutManager: function () {
      return U;
    }
  });
}