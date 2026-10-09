// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'registerOrderedList'
// - Renamed export 'u' to 'registerBulletList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 93973
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var readPdfGuidanceFooter = require("read-pdf-guidance-footer") /*id: 446560*/;
  var bulletBlockTypeClass = require("bullet-block-type-class") /*id: 611428*/;
  var docOrderedListBlock = require("doc-ordered-list-block") /*id: 34235*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editCheckerProvider = require("edit-checker-provider") /*id: 884051*/;
  var docBlockValidationUtils = require("doc-block-validation-utils") /*id: 906066*/;
  function g(e, i, r) {
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
  let p = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(n = class {
    constructor() {
      g(this, "blockType", docBlockTypeConstants.blockTypeConstants.BULLET);
      g(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || n;
  function m(e, i, r) {
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
  let v = dependencyInjectionContainer.Provide(editCheckerProvider.editCheckerProvider)(o = class {
    constructor() {
      m(this, "blockType", docBlockTypeConstants.blockTypeConstants.ORDERED);
      m(this, "checkFunc", docBlockValidationUtils.validateDeleteChild);
    }
  }) || o;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var y = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var textualContentWrapper = require("textual-content-wrapper") /*id: 858631*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docxTextBlockClickHandler = require("docx-text-block-click-handler") /*id: 90739*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let M = {
    1: "•",
    2: "◦",
    0: "▪"
  };
  class T extends docxTextBlockClickHandler.DocxTextBlockClickHandler {
    render() {
      let e = (docBlockDepthUtil.getBlockDepth(this.model) + 3) % 3;
      let i = y("bullet", {
        bulletUnedit: !this.editable
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "list-wrapper bullet-list",
        children: [reactJsxRuntimeCoreReexport.jsx(textualContentWrapper.TextualContentWrap, {
          model: this.model,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: y(["list", `list-style-group-${e}`, `list-align-${this.model.snapshot.align}`]),
            ref: this.contentRef,
            onClick: this.handleClickOuterEditor,
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              contentEditable: false,
              className: i,
              onClick: this.handleClickListStyle.bind(this),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "bullet-dot-style",
                children: M[e]
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "list-content",
              children: super.render()
            })]
          })
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount - docxBlockValidatorUtils_1.listTypeConstant,
            marginLeft: docxBlockValidatorUtils_1.listTypeConstant
          },
          className: "list-children",
          children: this.renderChildren()
        }) : null]
      });
    }
  }
  var stringFormatConversionUtils = require("string-format-conversion-utils") /*id: 708138*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var docColorUtils = require("doc-color-utils") /*id: 986243*/;
  var rootBlockIdExtractor = require("root-block-id-extractor") /*id: 274051*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxOverlayPositionWrapper = require("docx-overlay-position-wrapper") /*id: 901027*/;
  var syncedTranslationBlockUtils = require("synced-translation-block-utils") /*id: 956836*/;
  var listModifyPanelLoader = require("list-modify-panel-loader") /*id: 52633*/;
  function H(e, i, r) {
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
  class U extends docxTextBlockClickHandler.DocxTextBlockClickHandler {
    get pageToken() {
      return rootBlockIdExtractor.getRootBlockId(this.blockManager);
    }
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
    getOrderStringByOrderAndLevel(e, i) {
      if (i % 3 == 0) {
        return stringFormatConversionUtils.intToRoman(e);
      } else if (i % 3 == 1) {
        return `${e}`;
      } else if (i % 3 == 2) {
        return stringFormatConversionUtils.numToExcelCol(e);
      } else {
        return "";
      }
    }
    renderListModifyPanel() {
      let e = listModifyPanelLoader.retryableListModifyPanelLoader.getModuleInstance();
      return reactJsxRuntimeCoreReexport.jsx(e, {
        blockManager: this.blockManager,
        SelectionAPI: this.selectionAPI,
        blockId: this.id,
        recordId: this.record.id,
        updateVisible: this.updateVisible
      });
    }
    renderOrderIcon() {
      let {
        isHistory: e
      } = this.props.recursionProps;
      let {
        showListModifyPanel: i
      } = this.state;
      let r = syncedTranslationBlockUtils.hasTranslateSnapshot(this.model);
      let n = !e && this.editable && !r;
      let o = y("order", {
        orderUnedit: !this.editable || r,
        hover: i,
        button: n
      });
      if (n) {
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(docxOverlayPositionWrapper.DocxOverlayWrapper, {
            mask: true,
            reverse: true,
            direction: uiLayoutPositionEnums.positionAlignTypes.BottomLeft,
            boundary: this.getBoundary(),
            visible: i,
            target: this.listIconRef.current,
            blockManager: this.blockManager,
            selectionAPI: this.selectionAPI,
            className: `list-modify-panel ${docxEditorConstantsConfig.containerIds.LAZY_SELECTION_NODE}`,
            children: this.renderListModifyPanel()
          }, `${this.id}-${this.props.order}`), reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
            title: t("doc.list.set_the_number"),
            placement: "top",
            mouseEnterDelay: 300,
            children: reactJsxRuntimeCoreReexport.jsxs(universalButtonWrapper.UniversalButton, {
              type: "text",
              size: "large",
              color: "primary",
              className: o,
              onClick: this.handleClickListStyle,
              ref: this.listIconRef,
              contentEditable: false,
              children: [this.getOrderStringByOrderAndLevel(this.props.order || 1, this.props.level || 1), "."]
            })
          })]
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsxs("div", {
          contentEditable: false,
          className: o,
          onClick: this.handleClickListStyle,
          children: [this.getOrderStringByOrderAndLevel(this.props.order || 1, this.props.level || 1), "."]
        }, `${this.id}-${this.props.order}`);
      }
    }
    render() {
      let {
        revisionActiveColor: e
      } = this.state;
      let i = !!e;
      let r = i ? {
        "--ordered-list-revision-color": e
      } : {};
      let n = y("list-wrapper ordered-list", {
        "revision-active": i
      });
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n,
        style: r,
        children: [reactJsxRuntimeCoreReexport.jsx(textualContentWrapper.TextualContentWrap, {
          model: this.model,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: y(["list", `list-align-${this.model.snapshot.align}`]),
            ref: this.contentRef,
            onClick: this.handleClickOuterEditor,
            children: [this.renderOrderIcon(), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "list-content",
              children: super.render()
            })]
          })
        }), this.struct.children.length ? reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            paddingLeft: docxEditorConstantsConfig.defaultItemCount - docxBlockValidatorUtils_1.listTypeConstant,
            marginLeft: docxBlockValidatorUtils_1.listTypeConstant
          },
          className: "list-children",
          children: this.renderChildren()
        }) : undefined]
      });
    }
    constructor(...e) {
      super(...e);
      H(this, "listIconRef", reactCoreLibraryReexport.createRef());
      H(this, "handleEditableChange", null);
      H(this, "state", {
        showListModifyPanel: false,
        revisionActiveColor: undefined
      });
      H(this, "handleDragStatusChange", e => {
        if (e) {
          this.updateVisible(false);
        }
      });
      H(this, "handleClick", e => {
        let {
          target: i
        } = e;
        if (!i.closest(".list-modify-menu") && !i.closest(".list-modify-input") && e.target !== this.listIconRef.current) {
          this.updateVisible(false);
        }
      });
      H(this, "blockHideupdateVisible", (e, i) => {
        if (docxTableLayoutUtils.isInTableCell(i, this.id, this.blockManager)) {
          this.updateVisible(false);
        }
      });
      H(this, "handleClickListStyle", () => {
        super.handleClickListStyle();
        if (!this.state.showListModifyPanel) {
          this.updateVisible(true);
        }
      });
      H(this, "updateVisible", e => {
        if (e) {
          this.setState({
            showListModifyPanel: true
          });
          this.blockManager.eventEmitter.on(docxScrollableConstants.scrollEvents.ON_SCROLL, this.blockHideupdateVisible);
          document.addEventListener("click", this.handleClick);
        } else {
          this.setState({
            showListModifyPanel: false
          });
          this.blockManager.eventEmitter.off(docxScrollableConstants.scrollEvents.ON_SCROLL, this.blockHideupdateVisible);
          document.removeEventListener("click", this.handleClick);
        }
      });
      H(this, "getBoundary", () => this.blockManager.config.get("pageMainBoundary") || this.boundary);
    }
  }
  function W(e, i) {
    docxEditorCore.registerProviders([v]);
    readPdfGuidanceFooter.ReadPdfFooter(docOrderedListBlock.OrderedListBlock, U, e, i);
  }
  function V(e, i) {
    docxEditorCore.registerProviders([p]);
    readPdfGuidanceFooter.ReadPdfFooter(bulletBlockTypeClass.BulletBlockTypeClass, T, e, i);
  }
  require.d(exports, {
    registerOrderedList: function () {
      return W;
    },
    registerBulletList: function () {
      return V;
    }
  });
}