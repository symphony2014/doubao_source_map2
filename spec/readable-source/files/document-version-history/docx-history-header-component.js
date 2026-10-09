// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'DocxHistoryHeader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 539080
         */
module.exports = function (module, exports, require) {
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var uiToastManager = require("ui-toast-manager") /*id: 117371*/;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var g = ["prefixId"];
  function m(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, g);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "m16.314 3.515-.707-.707a1 1 0 0 0-1.414 0l-7.779 7.778a2 2 0 0 0 0 2.829l7.779 7.778a1 1 0 0 0 1.414 0l.707-.707a1 1 0 0 0 0-1.414L9.243 12l7.07-7.072a1 1 0 0 0 0-1.414Z",
      fill: "currentColor"
    }));
  }
  var p = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: m
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "LeftBoldOutlined"
      }
    }));
  });
  var y = require("right-bold-outlined-icon") /*id: 971784*/.RightBoldOutlined;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var featureConfigManager = require("feature-config-manager") /*id: 53274*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docxEventCollectorWrapper = require("docx-event-collector-wrapper") /*id: 954913*/;
  var docxHistoryUtilities = require("docx-history-utilities") /*id: 525555*/;
  var documentHistoryService = require("document-history-service") /*id: 837313*/;
  var docxHistoryConstants = require("docx-history-constants") /*id: 995012*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var w = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#2B2F36",
      d: "M5.75 5a.75.75 0 0 0-.743.648L5 5.75v12.507c0 .38.282.694.648.743l.102.007h5.374a.375.375 0 0 0 .368-.3l.007-.075v-.75a.375.375 0 0 0-.3-.367l-.075-.008H6.5V6.5h10.046v4.128c0 .207.167.375.374.375h.75a.375.375 0 0 0 .375-.375V5.375a.375.375 0 0 0-.3-.367L17.67 5zm8.281 6.542c-.11 0-.217.04-.301.11l-3.145 2.661a.467.467 0 0 0 0 .713l3.145 2.66a.467.467 0 0 0 .768-.356v-1.824h4.629a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375h-4.63V12.01a.467.467 0 0 0-.466-.467"
    })
  });
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var fileTypeIconRegistry = require("file-type-icon-registry") /*id: 903941*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var capacityLimitConstants = require("capacity-limit-constants") /*id: 1853*/;
  (o = D || {})[o.DOCS_SIZE_LIMIT = collaborativeEditingFlowSyncModule.ErrorType.DOCS_SIZE_LIMIT] = "DOCS_SIZE_LIMIT";
  o[o.DOCS_COUNT_LIMIT = capacityLimitConstants.capacityLimits.DOCS_COUNT_LIMIT] = "DOCS_COUNT_LIMIT";
  o[o.FILE_SIZE_BEYOND_LIMIT = docxApiConstantsExports.driveErrors.FILE_SIZE_BEYOND_LIMIT] = "FILE_SIZE_BEYOND_LIMIT";
  var D = o;
  let j = [collaborativeEditingFlowSyncModule.ErrorType.DOCS_SIZE_LIMIT, capacityLimitConstants.capacityLimits.DOCS_COUNT_LIMIT, docxApiConstantsExports.driveErrors.FILE_SIZE_BEYOND_LIMIT];
  let B = {
    [D.FILE_SIZE_BEYOND_LIMIT]: [platformDocUtils.P4G.FILE_SIZE, {
      fileSizeLimitType: platformDocUtils.e2L.UPLOAD
    }],
    [D.DOCS_SIZE_LIMIT]: [platformDocUtils.P4G.STORAGE_SPACE, {
      type: platformDocUtils.UdD.EDIT_FILE,
      limitedType: platformDocUtils.Pl3.DOCS_STORAGE_LIMIT
    }],
    [D.DOCS_COUNT_LIMIT]: [platformDocUtils.P4G.STORAGE_SPACE, {
      type: platformDocUtils.UdD.CREATE_FILE,
      limitedType: platformDocUtils.Pl3.DOCS_NUM_LIMIT
    }, {
      createFileType: fileTypeConstants.BasicFileType.DOCX
    }]
  };
  let H = e => {
    if (B[e] && platformDocUtils.k2r) {
      platformDocUtils.k2r(...B[e]);
    }
  };
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var larkCcmOwnerExpiredConstants = require("lark-ccm-owner-expired-constants") /*id: 442235*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var embedInlineLinkComponent = require("embed-inline-link-component") /*id: 768824*/;
  function Y(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  let G = {
    [docxApiConstantsExports.capacityLimits.TENANT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_SPACE,
    [docxApiConstantsExports.driveErrors.COPY_ATTACHMENT]: platformDocUtils.P4G.STORAGE_SPACE,
    [docxApiConstantsExports.capacityLimits.USER_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_USER,
    [docxApiConstantsExports.driveErrors.USER_NO_DRIVE]: platformDocUtils.P4G.STORAGE_USER,
    [docxApiConstantsExports.capacityLimits.DEPARTMENT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_DEPARTMENT
  };
  class W extends reactCoreLibraryReexport.Component {
    showCloneSuccessModal(e, r) {
      uiToastManager.toastManager.destroy();
      return new Promise(i => {
        this.modalOpened = true;
        dialogConfirmComponent.Dialog.success({
          title: t("LarkCCM_Docx_VersionHistory_CopyCreated_Title"),
          content: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "clone-modal-content-text",
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              children: t("LarkCCM_Docx_VersionHistory_CopyCreated_Body")
            }), reactJsxRuntimeCoreReexport.jsx(embedInlineLinkComponent.EmbedInlineLink, {
              className: "embed-inline-link--hoverable",
              text: r,
              logo: reactJsxRuntimeCoreReexport.jsx(fileTypeIconRegistry.DocxFileIcon, {}),
              onClick: () => docUrlProcessingUtilities.openUrlSafely(e)
            })]
          }),
          okText: t("LarkCCM_Docx_VersionHistory_GotIt_Button"),
          onOk: () => {
            i(true);
            this.modalOpened = false;
          },
          onCancel: () => {
            i(false);
            this.modalOpened = false;
          },
          zIndex: 1100
        });
      });
    }
    showRevertLoading() {
      let e = t("history.restoring");
      uiToastManager.toastManager.loading({
        content: e,
        duration: 0,
        showCloseIcon: false,
        key: "history_reverting"
      });
      return () => {
        uiToastManager.toastManager.destroy("history_reverting");
      };
    }
    showRevertConfirmModal(e) {
      return new Promise(r => {
        this.modalOpened = true;
        dialogConfirmComponent.Dialog.confirm({
          title: t("history.restore_history.title"),
          content: reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "revert-modal-content-text",
              children: t("history.restore_confirm.message", {}, "", e)
            })
          }),
          okText: t("history.new.restore"),
          cancelText: t("history.cancel"),
          icon: null,
          onOk: () => {
            r(true);
            this.modalOpened = false;
          },
          onCancel: () => {
            r(false);
            this.modalOpened = false;
          },
          zIndex: 1100
        });
      });
    }
    componentDidMount() {
      this.setupSpacingObserver();
    }
    componentWillUnmount() {
      let {
        resizeObserver: e
      } = this;
      if (e) {
        e.disconnect();
      }
    }
    hideHistory() {
      if (platformEventDefinitions.eventConstants?.PC) {
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.HISTORY_X.TOGGLE);
      }
    }
    renderBack() {
      return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
        type: "text",
        className: "back",
        size: "large",
        icon: reactJsxRuntimeCoreReexport.jsx(w, {}),
        onClick: this.hideHistory.bind(this),
        children: this.state.isNarrowScreen ? t("doc_narrow_btn_return") : t("docs.history.back_btn")
      });
    }
    renderClone() {
      let e = this.state.isNarrowScreen ? t("doc_narrow_btn_copyFile") : t("LarkCCM_Docx_VersionHistory_CreateCopy_Button");
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "header-item header-item-button clone",
        children: this.props.createCopyAble ? reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          type: "primary",
          className: "clone-button",
          onClick: this.onClone,
          loading: this.state.cloning,
          children: e
        }) : reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          type: "primary",
          disabled: true,
          className: "disabled",
          children: e
        })
      });
    }
    renderRecover() {
      let {
        historyItem: e,
        historyItemIsNewest: r,
        status: i,
        historyReadonly: o
      } = this.props;
      let {
        recovering: n
      } = this.state;
      if (i === docxHistoryConstants.HistorySyncStatus.NO_SECRET || !e || o) {
        return null;
      }
      let l = ((e == null ? undefined : e.edit_time) || 0) < docxHistoryConstants.historyEpochTime;
      let s = n || r || l;
      let a = r ? t("history.restore_tips") : t("CreationDoc_DocX_VersionHistory_restore_no_hover");
      let u = this.state.isNarrowScreen ? t("doc_narrow_btn_restoreVersion") : t("docs.history.recover_btn");
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "header-item header-item-button recover",
        children: s ? reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          title: a,
          placement: "bottom",
          disabled: n,
          children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            type: "primary",
            disabled: true,
            className: "disabled",
            children: u
          })
        }) : reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          type: "primary",
          className: "recover-button",
          onClick: this.onRecover,
          children: u
        })
      });
    }
    getChangeCountText() {
      let {
        diffCount: e = 0,
        diffIndex: r = 0
      } = this.props;
      let i = r + 1;
      let o = e > 1;
      let n = "";
      if (i > 0) {
        return reactJsxRuntimeCoreReexport.jsxs("span", {
          className: "change-count",
          children: [this.state.isNarrowScreen ? "" : t("LarkCCM_DocHistory_EditRecordNum_Text"), reactJsxRuntimeCoreReexport.jsxs("b", {
            children: [reactJsxRuntimeCoreReexport.jsxs("span", {
              className: "highlight",
              children: ["\xA0", i]
            }), `/${e}`]
          })]
        });
      } else {
        n = o ? t("history.change_count_plural", {}, "", e.toString()) : t("history.change_count_singular", {}, "", e.toString());
        return reactJsxRuntimeCoreReexport.jsx("span", {
          className: "change-count",
          children: n
        });
      }
    }
    renderControl() {
      let {
        isShowDiff: e = false,
        diffCount: r = 0,
        status: i,
        diffIndex: o
      } = this.props;
      let {
        controlBtnWidth: n
      } = this.state;
      if (i === docxHistoryConstants.HistorySyncStatus.NO_SECRET || !e || !(r > 0)) {
        return null;
      }
      if (!n) {
        firstScreenEventHandlerUtils.scheduleAnimationFrameOrTimeout(() => {
          let e = document.querySelector(".down");
          let r = document.querySelector(".up");
          let i = Math.max((e == null ? undefined : e.clientWidth) || 0, (r == null ? undefined : r.clientWidth) || 0);
          this.setState({
            controlBtnWidth: i
          });
        }, 0);
      }
      let l = o <= 0;
      let s = o === r - 1;
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "header-item play-control",
        children: [reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          title: t("history.prev_edit"),
          overlayClassName: "docx-history-right-header__tooltip",
          placement: "bottom",
          children: reactJsxRuntimeCoreReexport.jsx(p, {
            className: "up",
            disabled: l,
            onClick: () => !l && this.jumpToPrev()
          })
        }), this.getChangeCountText(), reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          title: t("history.next_edit"),
          overlayClassName: "docx-history-right-header__tooltip",
          placement: "bottom",
          children: reactJsxRuntimeCoreReexport.jsx(y, {
            className: "down",
            disabled: s,
            onClick: () => !s && this.jumpToNext()
          })
        })]
      });
    }
    renderBtn() {
      let {
        historyItem: e
      } = this.props;
      if (e) {
        if (docxHistoryUtilities.isLocalHistory(e)) {
          return this.renderClone();
        } else {
          return this.renderRecover();
        }
      } else {
        return null;
      }
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "docx-history-left-header",
        children: [this.renderBack(), featureConfigManager.featureConfigManager.checkFeatureEnabled(platformDocUtils.kQ$.RevertDocHistory, platformDocUtils.tXw.Docs) && this.renderBtn(), this.renderControl()]
      });
    }
    constructor(...e) {
      super(...e);
      Y(this, "state", {
        recovering: false,
        cloning: false,
        controlBtnWidth: 0,
        isNarrowScreen: false
      });
      Y(this, "modalOpened", false);
      Y(this, "headerWidth", 0);
      Y(this, "resizeObserver", null);
      Y(this, "emitHistoryRestore", () => {
        docxEditorEventConstantsAndManager.globalEventEmitter.emit(docxHistoryConstants.historyRestoreAction);
      });
      Y(this, "onRecover", async () => {
        let {
          historyItem: r
        } = this.props;
        if (!r || this.modalOpened) {
          return;
        }
        let i = docxHistoryUtilities.hasMinorHistory(r);
        if (r.minor_history?.length) {
          r = r.minor_history[0];
        }
        let o = r.edit_time * 1000;
        let n = docxHistoryUtilities.formatHistoryDateTitle(o);
        if (!(await docxHistoryUtilities.restoreHistory(this.showRevertConfirmModal.bind(this), r, n, i))) {
          return;
        }
        let {
          version: l
        } = r;
        let a = {
          page_id: this.props.token,
          minor_version: l
        };
        let c = this.showRevertLoading();
        this.setState({
          recovering: true
        });
        docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.HISTORY.TOGGLE_REVERT);
        let d = new Date().getTime();
        let u = await documentHistoryService.historyService.revertHistoryAndGetStatus(a).catch(e => e);
        let h = new Date().getTime();
        c();
        this.setState({
          recovering: false
        });
        let f = parseInt(((h - d) / 1000).toFixed(0), 10);
        let g = docxHistoryUtilities.getHistoryResultStatus(u.data);
        if (g === docxHistoryConstants.HistoryResultStatus.SUCCESS) {
          uiToastManager.toastManager.success({
            content: t("history.restore_success.message", {}, "", n),
            showCloseIcon: false
          });
          this.hideHistory();
          this.emitHistoryRestore();
          docxEventCollectorWrapper.wrapEventCollector("history", {
            action: "restore_success",
            restore_status: "none",
            restore_duration: f
          });
          docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
            click: "restore_status",
            target: "none",
            version_time: docxHistoryUtilities.getEditTimeMs(r),
            is_large_version: String(i),
            status: "restore_success"
          });
        } else if (g === docxHistoryConstants.HistoryResultStatus.PARTIAL_SUCCESS) {
          uiToastManager.toastManager.error({
            content: t("LarkCCM_Docs_RestoreVersion_ErrorEdge_Toast"),
            showCloseIcon: true
          });
          this.hideHistory();
          this.emitHistoryRestore();
          docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
            click: "restore_status",
            target: "none",
            version_time: docxHistoryUtilities.getEditTimeMs(r),
            is_large_version: String(i),
            status: "restore_part_success"
          });
        } else if (docxApiConstantsExports.capacityLimitCodes.includes(u.code)) {
          if (platformDocUtils.k2r) {
            platformDocUtils.k2r(G[u.code], {
              type: "docx",
              mountNodeToken: this.props.token,
              mountPoint: docxApiConstantsExports.fileTypes.FILE
            });
          }
        } else if (j.includes(u.code)) {
          H(u.code);
        } else {
          let e = {
            900004230: t("CreationDoc_MultiGeo_900004230"),
            4290000: t("CreationDoc_Common_TooManyReq_Toast"),
            204: t("history.other_user_restoring"),
            fail: t("history.operate_error"),
            [larkCcmOwnerExpiredConstants.ownerExpiredId]: larkCcmOwnerExpiredConstants.ownerExpiredTooltip
          };
          let o = e[u.code] || e.fail;
          let n = Error("[new history] Revert failed");
          docxErrorToastHandler.showErrorWithDebug({
            content: o,
            showCloseIcon: false,
            errorContext: docxErrorDebugUtils.createErrorObject(u, n)
          });
          docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
            click: "restore_status",
            target: "none",
            version_time: docxHistoryUtilities.getEditTimeMs(r),
            is_large_version: String(i),
            status: "restore_failed"
          });
        }
      });
      Y(this, "onClone", async () => {
        if (!(await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.DOCCREATECOPY))) {
          return;
        }
        let {
          historyItem: e,
          createCopyAble: r,
          blockManager: i
        } = this.props;
        if (!e || !r || this.modalOpened || !i) {
          return;
        }
        let o = await docxHistoryUtilities.getHistorySnapshot(i, e);
        if (!o) {
          return;
        }
        let n = {
          type: fileTypeConstants.BasicFileType.DOCX,
          content: JSON.stringify(o.data.block_map)
        };
        this.setState({
          cloning: true
        });
        try {
          let {
            url: e,
            obj_token: r
          } = await platformDocUtils.cnj(n);
          let s = objectPathGetDefault.getObjectPathDefault(o, `data.block_map.${i.rootRecordId}.data.text.initialAttributedTexts.text.0`, t("common.unnamed_document"));
          this.showCloneSuccessModal(e, s.replace(/\n/g, ""));
          docxEventCollectorWrapper.wrapEventCollector("ccm_doc_file_clone_server", {
            status: 0,
            obj_id: platformDocUtils.p5T(this.props.token),
            obj_type: "docx",
            clone_obj_id: platformDocUtils.p5T(r),
            clone_obj_type: "docx",
            is_local_history: "true"
          });
        } catch (r) {
          if (docxApiConstantsExports.specificErrorCodes.includes(r.code)) {
            if (platformDocUtils.k2r) {
              platformDocUtils.k2r(G[r.code], {
                type: "docx"
              });
            }
          } else if (j.includes(r.code)) {
            H(r.code);
          } else if (docActionManager.alwaysAllowAction(r)) {
            uiToastManager.toastManager.error({
              content: t("LarkCCM_Docx_VersionHistory_Fail2MakeCopy_toast"),
              showCloseIcon: true
            });
          }
          docxEventCollectorWrapper.wrapEventCollector("ccm_doc_file_clone_server", {
            status: -1,
            obj_id: platformDocUtils.p5T(this.props.token),
            obj_type: "docx",
            is_local_history: "true"
          });
          docxEventCollectorWrapper.wrapEventCollector("docx_watchdog_dev", {
            action: "clone_fail",
            info: {
              local_id: e.id,
              edit_time: e.edit_time
            },
            error_msg: r instanceof Error ? r.message : r,
            error_code: r.code
          });
        } finally {
          this.setState({
            cloning: false
          });
        }
      });
      Y(this, "setupSpacingObserver", () => {
        let e = new ResizeObserver(() => {
          this.checkSpacing();
        });
        this.resizeObserver = e;
        requestAnimationFrame(() => {
          let r = document.querySelector(".docx-history-left-header .back");
          let i = document.querySelector(".docx-history-left-header");
          this.headerWidth = (i == null ? undefined : i.clientWidth) || 0;
          if (r && i) {
            e.observe(i);
            this.checkSpacing();
          }
        });
      });
      Y(this, "checkSpacing", () => {
        let r = document.querySelector(".docx-history-left-header .back");
        let i = document.querySelector(".docx-history-left-header .header-item-button button");
        let o = document.querySelector(".docx-history-left-header")?.clientWidth || 0;
        if (r && i && o > 0 && this.headerWidth > 0) {
          let e = r.getBoundingClientRect();
          let n = i.getBoundingClientRect().left - e.right;
          if (o > this.headerWidth) {
            this.setState({
              isNarrowScreen: n < 16
            });
            this.headerWidth = o;
          } else if (this.state.isNarrowScreen) {
            if (!this.state.isNarrowScreen) {
              this.headerWidth = o;
            }
          } else {
            this.setState({
              isNarrowScreen: n < 16
            });
            this.headerWidth = o;
          }
        }
      });
      Y(this, "jumpToNext", () => {
        this.jumpTo(this.props.diffIndex + 1);
        docxEventCollectorWrapper.wrapEventCollector("history", {
          action: "click_next",
          source: "btn"
        });
        docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
          click: "click_edit_item",
          target: "none",
          sub_click: "next"
        });
      });
      Y(this, "jumpToPrev", () => {
        this.jumpTo(this.props.diffIndex - 1);
        docxEventCollectorWrapper.wrapEventCollector("history", {
          action: "click_previous",
          source: "btn"
        });
        docxEventCollectorWrapper.wrapEventCollector("ccm_docs_history_page_click", {
          click: "click_edit_item",
          target: "none",
          sub_click: "previous"
        });
      });
      Y(this, "jumpTo", e => {
        let {
          diffCount: r
        } = this.props;
        if (e < 0) {
          e += r;
        } else if (e >= r) {
          e -= r;
        }
        this.props.onDiffIndexChange(e);
      });
    }
  }
  require.d(exports, {
    DocxHistoryHeader: function () {
      return W;
    }
  });
}