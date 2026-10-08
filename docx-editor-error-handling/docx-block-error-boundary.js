// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'BlockErrorBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 649744
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var warningFilledIconComponent = require("warning-filled-icon-component") /*id: 787844*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var blockOopsServiceProvider = require("block-oops-service-provider") /*id: 574532*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxLazyConsumerConfig = require("docx-lazy-consumer-config") /*id: 157711*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var pageOopsServiceProvider = require("page-oops-service-provider") /*id: 695060*/;
  var uiActionConstants_1 = require("ui-action-constants_1") /*id: 837679*/;
  var docxErrorHandlerUtils = require("docx-error-handler-utils") /*id: 271803*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function k(e, i, r) {
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
  let {
    confirm: E
  } = dialogConfirmComponent.Dialog;
  function C(e, i, r) {
    try {
      e.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent(i, r);
    } catch (e) {}
  }
  class _ extends reactCoreLibraryReexport.Component {
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static keyOf(e) {
      return `message: ${e.message}; stack: ${e.stack}`;
    }
    static reset() {
      _.errorSet.clear();
    }
    static has(e) {
      let i = _.keyOf(e);
      return _.errorSet.has(i);
    }
    static add(e) {
      let i = _.keyOf(e);
      return _.errorSet.add(i);
    }
    static getOopsError(e, i) {
      let r;
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : collaborativeEditingFlowSyncModule.ErrorType.RENDER_ERROR;
      let {
        scm: o,
        scmDocx: l
      } = docxErrorStatusHandler.getScmDebugInfo();
      let a = i.type;
      if (e.detail) {
        r = e.detail;
      } else {
        let e = i.children.map(e => {
          if (e.type === "text") {
            var n;
            var o;
            var l;
            if (((l = i.snapshot.text) === null || l === undefined ? undefined : (o = l.initialAttributedTexts) === null || o === undefined ? undefined : (n = o.text) === null || n === undefined ? undefined : n["0"]?.length) === 0) {
              return docxUtilityHelpers.maskSensitiveData(e.recordId);
            }
          }
        }).join(":");
        r = `emptyChildIds: ${e}`;
      }
      return {
        code: n,
        type: collaborativeEditingFlowSyncModule.FlowSync.CLIENT_ERROR,
        msg: e.message || "Unknown render error",
        scmDocx: l,
        scm: o,
        blockType: a,
        fg: {
          allow_pre_edit: docxLazyConsumerConfig.isEnabled
        },
        detail: {
          blockId: docxUtilityHelpers.maskSensitiveData(i.recordId),
          extra: r
        },
        stack: JSON.stringify(e.stack)
      };
    }
    static reportError(e, i, r) {
      let n = docxErrorStatusHandler.isDebugModeEnabled();
      let o = _.has(e);
      if (!i.active) {
        C(i, "doc_bug_track_dev", {
          action: "block_view_unmount_error",
          info: JSON.stringify({
            id: docxUtilityHelpers.maskSensitiveData(i.recordId),
            ..._.getOopsError(e, i, r)
          })
        });
        return;
      }
      _.add(e);
      if (!n && !o) {
        C(i, "docx_block_oops_dev", _.getOopsError(e, i, r));
      }
      docxUtilityHelpers.captureException(e);
    }
    get service() {
      if (this._serviceLoader === null) {
        var e;
        this._serviceLoader = this.props.editorAPI.getService(blockOopsServiceProvider.blockOopsServiceId, {
          async: true,
          optional: true
        });
        if ((e = this._serviceLoader) !== null && e !== undefined) {
          e.then(e => {
            this._service = e;
            return e;
          });
        }
      }
      return this._service;
    }
    get isEditable() {
      return this.props.editorAPI.config.get("editable");
    }
    get isPageBlock() {
      return this.props.struct.isRoot() || this.props.struct.type === docBlockTypeConstants.blockTypeConstants.PAGE;
    }
    get enableDeleteBtn() {
      return browserEnvironmentDetectionUtils.browserEnv.isPcTemplate && this.isParentPageBlock && this.isEditable;
    }
    get isParentPageBlock() {
      let e = this.props.struct;
      let {
        parent: i
      } = e;
      if ((i == null ? undefined : i.isRoot()) || (i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.PAGE) {
        return true;
      }
      if (this.isParentViewBlock(e)) {
        let e = i == null ? undefined : i.parent;
        return (e == null ? undefined : e.isRoot()) || (e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.PAGE;
      }
      return false;
    }
    renderErrorBtn() {
      return reactJsxRuntimeCoreReexport.jsx(warningFilledIconComponent.WarningFilledIcon, {
        className: "error-icon-btn"
      });
    }
    renderCopyErrBtn() {
      return docxErrorDebugUtils.isDebugTraceEnabled() && reactJsxRuntimeCoreReexport.jsx("span", {
        className: "error-copy-btn",
        onClick: this.handleCopyError,
        children: t("CreationDoc_DocX_BugReport_Copy_btn")
      });
    }
    renderRetryBtn() {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "error-retry-btn",
        onClick: this.handleRetry,
        children: t("common.retry")
      });
    }
    renderDeleteBtn() {
      if (this.enableDeleteBtn) {
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: "error-delete-btn",
          onClick: this.handleDelete,
          children: t("common.delete")
        });
      } else {
        return null;
      }
    }
    renderContent() {
      let e = docxBlockUtils_1.getBlockTypeDisplayName(this.props.struct.type);
      let i = e ? t("LarkCCM_Docs_Blocks_Error_RenderError", {}, "", e) : t("LarkCCM_Docs_Blocks_Error_LoadError");
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [this.renderErrorBtn(), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "error-content",
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "error-text",
            children: i
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "error-btns",
            children: [this.renderRetryBtn(), this.renderDeleteBtn()]
          })]
        })]
      });
    }
    handleSkipNode() {
      let {
        struct: e,
        recursionProps: {
          blockManager: i
        }
      } = this.props;
      let {
        service: r
      } = this;
      let n = r && r.isRecordError(e.recordId);
      let {
        id: o
      } = e;
      let {
        error: l
      } = this.state;
      let s = !!l || !!n;
      if (s !== this.hasError) {
        this.hasError = s;
        if (s) {
          i.layoutManager.disableDescendantRender(o);
          return;
        }
        i.layoutManager.enableDescendantRender(o);
      }
    }
    componentDidUpdate() {
      this.handleSkipNode();
    }
    componentDidMount() {
      this.handleSkipNode();
    }
    componentDidCatch(e, i) {
      if (e) {
        if (this.isPageBlock) {
          this.props.editorAPI.getService(pageOopsServiceProvider.pageOopsProvider).showOopsModal({
            error: e,
            editable: false,
            ..._.getOopsError(e, this.props.struct)
          });
        } else {
          _.reportError(e, this.props.struct);
        }
      }
    }
    render() {
      let {
        service: e
      } = this;
      let {
        error: i
      } = this.state;
      let r = this.props.struct;
      let n = e && e.isRecordError(r.recordId);
      if (i || n) {
        if (this.isPageBlock) {
          return null;
        } else if (this.props.displaymode === "inline") {
          return reactJsxRuntimeCoreReexport.jsx("span", {
            contentEditable: false,
            suppressContentEditableWarning: true,
            className: "error-boundary-tip",
            children: this.renderContent()
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            contentEditable: false,
            suppressContentEditableWarning: true,
            className: "error-boundary-tip",
            children: this.renderContent()
          });
        }
      } else {
        return this.props.children;
      }
    }
    constructor(...e) {
      super(...e);
      k(this, "state", {
        error: null
      });
      k(this, "hasError", false);
      k(this, "_service", undefined);
      k(this, "_serviceLoader", null);
      k(this, "isParentViewBlock", e => {
        let {
          parent: i
        } = e;
        return (i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.VIEW;
      });
      k(this, "handleCopyError", () => {
        let {
          error: e
        } = this.state;
        if (!e) {
          return;
        }
        let i = docxErrorDebugUtils.createErrorObject(docxErrorDebugUtils.mergeErrorDetail(e, {
          code: collaborativeEditingFlowSyncModule.ErrorType.RENDER_ERROR
        }));
        docxErrorDebugUtils.copyErrorToClipboard(i);
      });
      k(this, "handleRetry", () => {
        docxErrorHandlerUtils.sendOopsEvent(uiActionConstants_1.actionKeys.REFRESH);
        let {
          props: e,
          service: i
        } = this;
        let r = e.struct;
        if (i && i.isRecordError(r.recordId)) {
          location.reload();
          return;
        }
        this.setState({
          error: null
        });
        e.editorAPI.viewService.requestBlockViewRender(r.id, {
          remount: true
        });
      });
      k(this, "handleDelete", () => {
        if (this.enableDeleteBtn) {
          E({
            type: "confirm",
            title: t("LarkCCM_Docs_Oops_DeleteUnload_Title", undefined, "Delete content?"),
            content: t("LarkCCM_Docs_Oops_DeleteUnload_Text", undefined, "Content not loaded will be deleted. You can view and restore them in edit history."),
            onOk: () => {
              docxErrorHandlerUtils.sendOopsEvent(uiActionConstants_1.actionKeys.DELETE);
              let {
                struct: e,
                editorAPI: i
              } = this.props;
              let r = e;
              if (this.isParentViewBlock(e)) {
                r = r.parent;
              }
              if (r && r.parent) {
                let e = r.parent.recordId;
                let {
                  recordId: n
                } = r;
                i.dataService.applyTransaction("keyevent:error-boundary:click-delete", i => {
                  i.removeChildren(e, [n]);
                }, {
                  undoable: false
                });
              }
            },
            okText: t("CreationDoc_common_DeleteConfirm"),
            cancelText: t("common.cancel")
          });
        }
      });
    }
  }
  k(_, "errorSet", new Set());
  require.d(exports, {
    BlockErrorBoundary: function () {
      return _;
    }
  });
}