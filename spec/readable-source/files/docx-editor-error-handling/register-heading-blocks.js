// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'registerHeadingBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 824975
         */
module.exports = function (module, exports, require) {
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var headingTypeConstants = require("heading-type-constants") /*id: 23420*/;
  var heading1BlockType = require("heading-1-block-type") /*id: 749441*/;
  var docxHeading2BlockClass = require("docx-heading2-block-class") /*id: 96328*/;
  var heading3BlockTypeClass = require("heading3-block-type-class") /*id: 163021*/;
  var heading4BlockModel = require("heading-4-block-model") /*id: 847242*/;
  var heading5BlockClass = require("heading5-block-class") /*id: 533757*/;
  var heading6DocBlockType = require("heading6-doc-block-type") /*id: 472578*/;
  var docHeading7Block = require("doc-heading-7-block") /*id: 711803*/;
  var heading8BlockClass = require("heading8-block-class") /*id: 214408*/;
  var heading9BlockClass = require("heading9-block-class") /*id: 690868*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function S(e) {
    let {
      record: i,
      modelService: r,
      lazyConsumer: n
    } = e;
    let {
      type: o
    } = e.action;
    if (n.isCriticalRecordsApplied() || o !== "UPDATE_ATTRIBUTE") {
      return true;
    }
    let {
      changedKey: l,
      newValue: s
    } = e.action;
    if (l === "folded") {
      let e = r.getBlockModelsByRecordId(i.id)[0];
      if (!e || e.snapshot.folded === false && s === true && !docBlockValidationUtils.validateNextHeadings(e)) {
        return false;
      }
    } else if (l === "type") {
      let e = r.getBlockModelsByRecordId(i.id)[0];
      if (!e) {
        return false;
      }
      {
        let i = e.type;
        let r = parseInt(/heading(\d)/.exec(i)[1], 10);
        let n = /heading(\d)/.test(s) ? parseInt(/heading(\d)/.exec(s)[1], 10) : null;
        if ((n === null || r < n) && !docBlockValidationUtils.validatePrevHeadings(e)) {
          return false;
        }
      }
    }
    return true;
  }
  let k = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(n = class {
    constructor(e) {
      var i;
      var r;
      this.blockType = e;
      if ((i = typeof (r = function (e, i) {
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
      }(i = "checkFunc", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: S,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = S;
      }
    }
  }) || n;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var R = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  var editorModeChangePlugin = require("editor-mode-change-plugin") /*id: 612759*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var handleEditorClickSelection = require("handle-editor-click-selection") /*id: 13387*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docxTextBlockModelManager = require("docx-text-block-model-manager") /*id: 568038*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var textualContentWrapper = require("textual-content-wrapper") /*id: 858631*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxOverlayPositionWrapper = require("docx-overlay-position-wrapper") /*id: 901027*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var inputDeviceTypes = require("input-device-types") /*id: 865354*/;
  var headingModifyPanelLoader = require("heading-modify-panel-loader") /*id: 399517*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function V(e, i, r) {
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
  class Z extends docxTextBlockModelManager.TextBlockManager {
    blockViewDidMount() {
      super.blockViewDidMount();
      this.handleEditableChange = this.blockManager.config.editableChange$.subscribe(e => {
        if (!e) {
          this.updateVisible(false);
        }
      });
      this.blockManager.addListener(docxDragDropConstants.dragStatusEvent, this.handleDragStatusChange);
    }
    blockViewWillUnmount() {
      var e;
      super.blockViewWillUnmount();
      if ((e = this.handleEditableChange) !== null && e !== undefined) {
        e.unsubscribe();
      }
      this.blockManager.removeListener(editorModeChangePlugin.editModeChangeEvent, this.handleEditModeUpdate);
      this.blockManager.removeListener(docxDragDropConstants.dragStatusEvent, this.handleDragStatusChange);
    }
    addRevisionHighlight(e, i) {
      super.addRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: docColorUtils.getRevisionUserColor(e, this.model.snapshot.revisions || [])
      });
    }
    removeRevisionHighlight(e, i) {
      super.removeRevisionHighlight(e, i);
      this.setState({
        revisionActiveColor: undefined
      });
    }
    renderListModifyPanel() {
      let {
        order: e,
        recursionProps: i
      } = this.props;
      let {
        headingModule: r
      } = i;
      let n = headingModifyPanelLoader.retryableHeadingModifyPanelLoader.getModuleInstance();
      return reactJsxRuntimeCoreReexport.jsx(n, {
        blockManager: this.blockManager,
        headingModule: r,
        blockId: this.id,
        recordId: this.record.id,
        order: e,
        updateVisible: this.updateVisible
      });
    }
    renderOrder() {
      let {
        order: e
      } = this.props;
      let {
        isHistory: i
      } = this.props.recursionProps;
      let {
        showListModifyPanel: r
      } = this.state;
      let n = syncedTranslationBlockUtils.hasTranslateSnapshot(this.model);
      let o = !i && this.editable && !this.shouldRenderPlainText && !n;
      let l = R("heading-order", {
        orderUnedit: !this.editable || n,
        hover: r,
        button: o
      });
      let s = reactJsxRuntimeCoreReexport.jsx("div", {
        className: l,
        contentEditable: false,
        suppressContentEditableWarning: true,
        children: e
      });
      let a = this.state.editMode === inputDeviceTypes.InputDeviceType.Keyboard;
      let c = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(docxOverlayPositionWrapper.DocxOverlayWrapper, {
          mask: true,
          reverse: true,
          direction: uiLayoutPositionEnums.positionAlignTypes.BottomLeft,
          boundary: this.getBoundary(),
          visible: r,
          target: this.headingIconRef.current,
          blockManager: this.blockManager,
          selectionAPI: this.selectionAPI,
          className: `list-modify-panel ${docxEditorConstantsConfig.containerIds.LAZY_SELECTION_NODE}`,
          children: this.renderListModifyPanel()
        }), reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          title: t("doc.list.set_the_number"),
          placement: "top",
          mouseEnterDelay: 300,
          disabled: a,
          onVisibleChange: this.handleTooltipVisibleChange,
          children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            type: "text",
            size: "large",
            color: "primary",
            className: l,
            onClick: this.handleClickListStyle,
            ref: this.headingIconRef,
            contentEditable: false,
            suppressContentEditableWarning: true,
            children: e
          })
        })]
      });
      if (e) {
        if (o) {
          return c;
        } else {
          return s;
        }
      } else {
        return null;
      }
    }
    render() {
      let {
        revisionActiveColor: e
      } = this.state;
      let i = !!e;
      let r = i ? {
        "--ordered-heading-revision-color": e
      } : {};
      let n = R("heading-block", {
        "revision-active": i
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n,
        style: r,
        ref: this.containerRef,
        children: [reactJsxRuntimeCoreReexport.jsx(textualContentWrapper.TextualContentWrap, {
          model: this.model,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: R(["heading", `heading-h${this.level}`, `heading-block-align-${this.snapshot.align}`]),
            onClick: e => handleEditorClickSelection.handleEditorClickSelection(this, e),
            children: [this.renderOrder(), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "heading-content",
              children: super.render()
            })]
          })
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: "heading-children",
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount
          },
          children: this.renderChildren()
        }) : null]
      });
    }
    constructor(...e) {
      super(...e);
      V(this, "level", undefined);
      V(this, "headingIconRef", reactCoreLibraryReexport.createRef());
      V(this, "handleEditableChange", null);
      V(this, "containerRef", reactCoreLibraryReexport.createRef());
      V(this, "state", {
        showListModifyPanel: false,
        editMode: inputDeviceTypes.InputDeviceType.Mouse,
        revisionActiveColor: undefined
      });
      V(this, "handleTooltipVisibleChange", e => {
        if (e) {
          this.blockManager.addListener(editorModeChangePlugin.editModeChangeEvent, this.handleEditModeUpdate);
        } else {
          this.blockManager.removeListener(editorModeChangePlugin.editModeChangeEvent, this.handleEditModeUpdate);
        }
      });
      V(this, "handleEditModeUpdate", e => {
        this.setState({
          editMode: e
        });
      });
      V(this, "handleClickListStyle", () => {
        if (!this.state.showListModifyPanel) {
          this.updateVisible(true);
        }
        if (!this.isFocus()) {
          editorRangeUtilities.selectToStart(this);
        }
      });
      V(this, "getBoundary", () => this.blockManager.config.get("pageMainBoundary") || this.boundary);
      V(this, "handleDragStatusChange", e => {
        if (e) {
          this.updateVisible(false);
        }
      });
      V(this, "handleClick", e => {
        let {
          target: i
        } = e;
        if (!i.closest(".heading-modify-menu") && !i.closest(".heading-modify-input") && e.target !== this.headingIconRef.current) {
          this.updateVisible(false);
        }
      });
      V(this, "blockHideupdateVisible", (e, i) => {
        if (docxTableLayoutUtils.isInTableCell(i, this.id, this.blockManager)) {
          this.updateVisible(false);
        }
      });
      V(this, "updateVisible", e => {
        if (e) {
          this.setState({
            showListModifyPanel: true
          });
          this.blockManager.eventEmitter.on(docxScrollableConstants.scrollEvents.ON_SCROLL, this.blockHideupdateVisible);
          document.addEventListener("click", this.handleClick);
        } else {
          var i;
          var r;
          this.setState({
            showListModifyPanel: false
          });
          let e = uiLayoutPositionUtils.getSelectionRange();
          if (!e || ((r = e.startContainer) === null || r === undefined ? undefined : (i = r.classList) === null || i === undefined ? undefined : i.contains("docx-popup-container"))) {
            let e = this.blockManager.getBlockViewByBlockId(this.id);
            e.setBlockFocus(true);
            e.focus();
          }
          this.blockManager.eventEmitter.off(docxScrollableConstants.scrollEvents.ON_SCROLL, this.blockHideupdateVisible);
          document.removeEventListener("click", this.handleClick);
        }
      });
    }
  }
  class z extends Z {
    get placeholder() {
      return "H1";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 1,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 1;
      }
    }
  }
  class K extends Z {
    get placeholder() {
      return "H2";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 2,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 2;
      }
    }
  }
  class X extends Z {
    get placeholder() {
      return "H3";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 3,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 3;
      }
    }
  }
  class G extends Z {
    get placeholder() {
      return "H4";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 4,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 4;
      }
    }
  }
  class q extends Z {
    get placeholder() {
      return "H5";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 5,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 5;
      }
    }
  }
  class J extends Z {
    get placeholder() {
      return "H6";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 6,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 6;
      }
    }
  }
  class Y extends Z {
    get placeholder() {
      return "H7";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 7,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 7;
      }
    }
  }
  class Q extends Z {
    get placeholder() {
      return "H8";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 8,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 8;
      }
    }
  }
  class ee extends Z {
    get placeholder() {
      return "H9";
    }
    constructor(...e) {
      var i;
      var r;
      super(...e);
      if ((i = typeof (r = function (e, i) {
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
      }(i = "level", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: 9,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = 9;
      }
    }
  }
  function et(e, i) {
    headingTypeConstants.headingBlockTypes.map(e => {
      docxEditorCore.registerProviders([{
        provide: editCheckerProvider.editCheckerProvider,
        useClass: k,
        args: [e]
      }]);
    });
    readPdfGuidanceFooter.ReadPdfFooter(heading1BlockType.Heading1BlockType, z, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(docxHeading2BlockClass.DocxHeading2Block, K, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading3BlockTypeClass.Heading3BlockType, X, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading4BlockModel.Heading4BlockModel, G, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading5BlockClass.Heading5Block, q, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading6DocBlockType.Heading6DocBlockType, J, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(docHeading7Block.Heading7Block, Y, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading8BlockClass.Heading8Block, Q, e, i);
    readPdfGuidanceFooter.ReadPdfFooter(heading9BlockClass.Heading9Block, ee, e, i);
  }
  require.d(exports, {
    registerHeadingBlocks: function () {
      return et;
    }
  });
}