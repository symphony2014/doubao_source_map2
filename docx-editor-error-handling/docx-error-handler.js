// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'handleDocxError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 135685
         */
module.exports = function (module, exports, require) {
  let n;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var hostPlatformServiceTypes = require("host-platform-service-types") /*id: 857478*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docxErrorHandlerUtils = require("docx-error-handler-utils") /*id: 271803*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var dialogConfirmComponent = require("dialog-confirm-component") /*id: 103822*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var uiActionConstants_1 = require("ui-action-constants_1") /*id: 837679*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  let b = reactLoadableComponent({
    loader: () => require.e("oops_notice") /*id: 60975*/.then(require.bind(require, "oops-notice-dialog-component") /*id: 141014*/),
    loading: () => null
  });
  var docEventConstants = require("doc-event-constants") /*id: 816011*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var docsHelpCenterLinks = require("docs-help-center-links") /*id: 338838*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var B = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#F80",
      fillRule: "evenodd",
      d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z",
      clipRule: "evenodd"
    })
  });
  let P = {
    [docxErrorStatusHandler.errorStatusCategories.RefreshOnly]: [uiActionConstants_1.actionTypes.REFRESH, uiActionConstants_1.actionTypes.CANCEL],
    [docxErrorStatusHandler.errorStatusCategories.CopyRefresh]: [uiActionConstants_1.actionTypes.CONTACT, uiActionConstants_1.actionTypes.COPY, uiActionConstants_1.actionTypes.REFRESH, uiActionConstants_1.actionTypes.CANCEL],
    [docxErrorStatusHandler.errorStatusCategories.ContactUs]: [uiActionConstants_1.actionTypes.CONTACT, uiActionConstants_1.actionTypes.REFRESH, uiActionConstants_1.actionTypes.CANCEL],
    [docxErrorStatusHandler.errorStatusCategories.PermissionDenied]: [uiActionConstants_1.actionTypes.COPY, uiActionConstants_1.actionTypes.REFRESH, uiActionConstants_1.actionTypes.CANCEL],
    [docxErrorStatusHandler.errorStatusCategories.OverLimit]: [uiActionConstants_1.actionTypes.CREATE, uiActionConstants_1.actionTypes.REFRESH],
    [docxErrorStatusHandler.errorStatusCategories.DownloadDoubaoPcClient]: [uiActionConstants_1.actionTypes.PLAIN_REFRESH, uiActionConstants_1.actionTypes.DOWNLOAD_DOUBAO_PC_CLIENT]
  };
  let L = docsHelpCenterLinks.getHelpCenterUrl(t("LarkCCM_Docs_UseBlocks_HelpCenterLink_Feishu"), t("LarkCCM_Docs_UseBlocks_HelpCenterLink_Lark"));
  let N = () => !!document.queryCommandSupported && ["copy", "cut"].every(e => document.queryCommandSupported(e));
  let A = () => docxEditorEventConstantsAndManager.globalEventBus.emit(editorCommands.editorCommands.CopyAll, e => {
    docxErrorHandlerUtils.sendOopsEvent(uiActionConstants_1.actionKeys.COPY, e ? docEventConstants.copySuccessEvent : docEventConstants.copyFailEvent);
    docxErrorToastHandler.handleDocxToast({
      type: e ? "success" : "error",
      content: e ? t("CreationDoc_DocX_Copied_Toast") : t("CreationDoc_DocX_CopiedFailed_Toast"),
      errorContext: docxErrorDebugUtils.createErrorObject(Error("handleCopy failed!"))
    });
  });
  let O = () => {
    docxErrorHandlerUtils.sendOopsEvent(uiActionConstants_1.actionKeys.REFRESH);
    location.reload();
  };
  let D = () => {
    docxErrorHandlerUtils.sendOopsEvent(uiActionConstants_1.actionKeys.CREATE);
    reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.qm4({
      isCtrlOrMetaKeyClicked: false,
      createType: fileTypeConstants.BasicFileType.DOCX,
      isFromTemplateCenter: false,
      type: "CREATE"
    }));
  };
  var x = e => {
    let {
      type: i,
      code: r,
      editable: n,
      width: o = 420,
      onUnmount: s,
      getErrorContext: g
    } = e;
    let [p, v] = reactCoreLibraryReexport.useState(false);
    let k = false;
    let C = n && N();
    let _ = (P[r] || P[i] || P[uiActionConstants_1.actionTypes.CONTACT]).filter(e => !!C || e !== uiActionConstants_1.actionTypes.COPY).filter(e => !browserEnvironmentDetectionUtils.browserDetector.isH5 || e !== uiActionConstants_1.actionTypes.CREATE && e !== uiActionConstants_1.actionTypes.CONTACT);
    let I = _.map(e => {
      switch (e) {
        case uiActionConstants_1.actionTypes.COPY:
          k = true;
          return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            onClick: A,
            children: t("CreationDoc_DocX_CopyContent_Button")
          });
        case uiActionConstants_1.actionTypes.REFRESH:
          {
            let e = t("CreationDoc_DocX_Refresh_Button");
            let i = e;
            let r = false;
            if (browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms && (r = docxErrorHandlerUtils.getRefreshCountInRooms() < docEventConstants.eventTypeCode) && (i = t("LarkCCM_Rooms_Error_DocRefreshing_Button")) === "LarkCCM_Rooms_Error_DocRefreshing_Button") {
              i = e;
            }
            return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
              loading: r,
              type: "primary",
              onClick: O,
              style: {
                marginLeft: 12
              },
              children: i
            });
          }
        case uiActionConstants_1.actionTypes.CREATE:
          return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            onClick: () => {
              v(true);
              D();
            },
            loading: p,
            children: t("CreationDoc_Alert_CopyAll_NewDocs_btn")
          });
        case uiActionConstants_1.actionTypes.DOWNLOAD_DOUBAO_PC_CLIENT:
          {
            let {
              FusionDocDownloadClientBtn: e
            } = diContainerInstance.diContainer.get(hostPlatformServiceTypes.HostPlatformService);
            return reactJsxRuntimeCoreReexport.jsx(e, {
              className: `
              oops-modal__client-download-btn
            `,
              children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
                type: "primary",
                loading: p,
                style: {
                  marginLeft: 12
                },
                onClick: () => {
                  setTimeout(() => {
                    O();
                  }, 500);
                },
                children: t("doc_upgraded_updateApp_desktop_btn")
              })
            });
          }
        case uiActionConstants_1.actionTypes.PLAIN_REFRESH:
          return reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
            loading: false,
            onClick: O,
            style: {
              marginLeft: 12
            },
            children: t("CreationDoc_DocX_Refresh_Button")
          });
        default:
          return null;
      }
    }).filter(Boolean);
    reactCoreLibraryReexport.useEffect(() => {
      docxErrorHandlerUtils.initializeOopsCollector(i);
    }, []);
    let T = errorStatusCodes.ErrorCode.TooManyChildrenInBlock === r ? reactJsxRuntimeCoreReexport.jsx("a", {
      href: xssContentSanitizer.sanitizeUrl(L, null, {
        logType: "js.href/src",
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rWjNZME01ZDFsN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWpsMlkwaE5kbHBI-kdoa$J6bH$%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
      }),
      target: "_blank",
      rel: "noreferrer",
      children: t("LarkCCM_Docs_ContentLimitReached_LearnMore_Button")
    }) : null;
    let x = I.length > 2 || _.includes(uiActionConstants_1.actionTypes.CONTACT) && I.length === 2;
    let F = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "oops-modal__footer",
      children: [x ? I[0] : reactJsxRuntimeCoreReexport.jsx("div", {}), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "oops-modal__footer-right",
        children: x ? I.slice(1) : I
      })]
    });
    let {
      title: j,
      content: $
    } = docxErrorStatusHandler.getErrorDialogInfo(i, r, n);
    let H = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "oops-modal__header",
      children: [reactJsxRuntimeCoreReexport.jsx(B, {}), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "oops-modal__title",
        children: [" ", j, " "]
      })]
    });
    if (docComponentFeatureFlags.isImchatSyncedBlk()) {
      return reactJsxRuntimeCoreReexport.jsx(b, {
        message: $,
        copyable: k,
        handleCopy: A,
        handleRefresh: O
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(dialogConfirmComponent.Dialog, {
        visible: true,
        centered: true,
        width: o,
        header: H,
        footer: F,
        keyboardClosable: false,
        closable: false,
        onAfterClose: s,
        wrapClassName: "oops-modal",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "oops-modal__content",
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            children: [$, T]
          })
        })
      });
    }
  };
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  let H = false;
  docxErrorHandlerUtils.setupOopsGlobal();
  var U = e => {
    let {
      error: i,
      type: r,
      msg: l,
      code: u = 0,
      scmDocx: h,
      scm: f,
      url: g,
      queryParams: p,
      requestId: m,
      ttLogId: v,
      editable: b,
      detail: S,
      blockType: k,
      isDev: _ = docxErrorStatusHandler.isDebugModeEnabled()
    } = e;
    if (H) {
      return null;
    }
    H = true;
    diContainerInstance.diContainer.get(hostPlatformServiceTypes.HostPlatformService).getHostPlatform();
    hostPlatformServiceTypes.platformTypes.LocalDesktop;
    let I = u;
    let T = docxErrorStatusHandler.findErrorCategory(I) || docxErrorStatusHandler.errorStatusCategories.CopyRefresh;
    if (!_) {
      docxEventCollector.wrappedCollector("docx_sdk_oops_dev", {
        code: I,
        type: r,
        msg: l,
        requestId: m,
        ttLogId: v,
        scmDocx: h,
        scm: f,
        oopsType: T,
        blockType: k,
        detail: S,
        fg: {
          "ccm.docx.h5_enable_chunk_render": boolDefaultGetterUtil.getDefaultBool("ccm.docx.h5_enable_chunk_render", false)
        },
        stack: JSON.stringify(i.stack)
      });
    }
    if (I === errorStatusCodes.ErrorCode.TooManyReferChartsInDocs) {
      docxEventCollector.wrappedCollector("ccm_docs_sheet_chart_toast_view", {
        toast_type: "max_chart"
      });
    }
    docxUtilityHelpers.captureException(i);
    let B = document.createElement("div");
    document.body.appendChild(B);
    let P = () => {
      if (n !== undefined) {
        clearTimeout(n);
      }
      reactDomEntryWrapper.unmountComponentAtNode(B);
      if (B.parentNode) {
        B.parentNode.removeChild(B);
      }
      window.removeEventListener("popstate", P);
      H = false;
    };
    window.addEventListener("popstate", P);
    if (browserEnvironmentDetectionUtils.browserDetector.isDocComponent()) {
      platformDocUtils.nyL().then(e => {
        var i;
        if ((i = e.notifyDocShowOops) !== null && i !== undefined) {
          i.call(e, {
            code: I,
            msg: l
          });
        }
      }).catch(e => {});
    }
    if (browserEnvironmentDetectionUtils.browserDetector.isLark) {
      platformDocUtils.nyL().then(e => {
        var i;
        if ((i = e.sendCommandToLarkPrefetch) !== null && i !== undefined) {
          i.call(e, {
            command: "clearCache",
            options: {
              url: window.location.href
            }
          });
        }
      }).catch(e => {});
    }
    reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(x, {
      code: I,
      type: T,
      editable: b,
      getErrorContext: () => ({
        error: docxErrorDebugUtils.addHttpInfo(i, {
          code: I,
          url: g,
          queryParams: p,
          requestId: m,
          ttLogId: v,
          msg: l
        })
      }),
      onUnmount: P
    }), B, () => {
      if (browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms) {
        let e = docxErrorHandlerUtils.getRefreshCountInRooms();
        if (e < docEventConstants.eventTypeCode) {
          if (n !== undefined) {
            clearTimeout(n);
          }
          n = window.setTimeout(() => {
            docxErrorHandlerUtils.setRefreshCountInRooms(e + 1);
            window.location.reload();
          }, 100);
        }
      }
    });
    return P;
  };
  require.d(exports, {
    handleDocxError: function () {
      return U;
    }
  });
}