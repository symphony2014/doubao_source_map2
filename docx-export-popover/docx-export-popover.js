// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'DocXExportButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx-export-popover.ab82113b.js
         * chunkId: 65132
         * moduleId: 15743
         */
module.exports = function (module, exports, require) {
  var t;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var samanthaLoadingToastHook = require("samantha-loading-toast-hook") /*id: 170954*/;
  var rpcIframeClickHook = require("rpc-iframe-click-hook") /*id: 723840*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileJobStatusConsts = require("file-job-status-consts") /*id: 212138*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var docFileIconComponent = require("doc-file-icon-component") /*id: 936985*/;
  var pdfFileTypeIcon = require("pdf-file-type-icon") /*id: 604202*/;
  var fileTypeTxtIcon = require("file-type-txt-icon") /*id: 593286*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var filePermissionConstants = require("file-permission-constants") /*id: 890549*/;
  var rpcHostManager = require("rpc-host-manager") /*id: 953389*/;
  var corpcDebugLoggers = require("corpc-debug-loggers") /*id: 363765*/;
  var rpcChannelCore = require("rpc-channel-core") /*id: 737542*/;
  let O = corpcDebugLoggers.getServiceDebug("export");
  let S = {
    async exportDocFile(e, n) {
      let o = rpcHostManager.RpcHostManager.getInstance();
      if (!o) {
        O("[warn] RpcHost not initialized");
        return;
      }
      if (!n) {
        O("[warn] No client connected");
        return;
      }
      try {
        await o.call(n, "export.exportDocFile", e);
      } catch (e) {
        if (e instanceof rpcChannelCore.RpcError) {
          O("[warn] exportDocFile failed:", e.message);
        }
        throw e;
      }
    }
  };
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var docxSdkEventTracker = require("docx-sdk-event-tracker") /*id: 508502*/;
  (t = {})[t.Unknown = 0] = "Unknown";
  t[t.Word = 1] = "Word";
  t[t.PDF = 2] = "PDF";
  t[t.MarkDown = 3] = "MarkDown";
  t[t.WordDoc = 4] = "WordDoc";
  t[t.OtterPage = 101] = "OtterPage";
  let k = t;
  let b = {
    [k.Unknown]: "unknown",
    [k.Word]: "word",
    [k.WordDoc]: "word",
    [k.PDF]: "pdf",
    [k.MarkDown]: "markdown",
    [k.OtterPage]: "otter_page"
  };
  let m = e => {
    let {
      extraParams: n,
      docId: o
    } = e;
    let t = (e, t) => {
      let r = isFunctionUtil_1.isFunction(n) ? n() : n;
      docxSdkEventTracker.trackDocxEvent(e, {
        ...t,
        ...r,
        artifact_type: 1,
        page_token: o,
        folder_type: "writing",
        type: "file",
        button_name: "download"
      });
    };
    return {
      trackFileFunctionShow: () => {
        t("file_function_show");
      },
      trackFileFunctionClick: e => {
        let {
          type: n
        } = e;
        t("file_function_click", {
          export_type: b[n],
          if_multiple_choose: 0
        });
      },
      trackFileFunctionStatus: e => {
        let {
          success: n,
          code: o
        } = e;
        t("file_function_status", {
          button_name: "download",
          success: +!!n,
          code: o
        });
      }
    };
  };
  let x = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    FileType: P
  } = fileJobStatusConsts;
  let B = {
    [P.Word]: filePermissionConstants.fileExtensions.DOC,
    [P.PDF]: filePermissionConstants.fileExtensions.PDF,
    [P.MarkDown]: filePermissionConstants.fileExtensions.MARKDOWN
  };
  let C = e => {
    let {
      className: n,
      style: o,
      children: t,
      pageToken: i,
      version: l,
      visible: _,
      rpcClientId: D,
      reportParams: N,
      onVisibleChange: I,
      onBeforeExport: R,
      onExportSuccess: L,
      onExportError: O,
      spacing: F = 4,
      position: g = "bottomRight",
      trigger: k = "click",
      disabled: b,
      showToast: C = false,
      ...h
    } = e;
    let W = i18nTranslationUtils.useTranslationWithFallback();
    let {
      trackFileFunctionClick: y,
      trackFileFunctionShow: M,
      trackFileFunctionStatus: H
    } = m({
      extraParams: N,
      docId: i
    });
    let {
      loadingRef: V,
      setLoading: j
    } = samanthaLoadingToastHook.useLoadingToast({
      text: W("doc_editor_toolbar_download_loading"),
      closeWhenUnmount: false
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (_) {
        M();
      }
    }, [_]);
    let K = async e => {
      if (V.current) {
        samanthaToastFactory.toastInstance.info({
          content: W("doc_exporting")
        });
        return;
      }
      if (R != null) {
        R(e);
      }
      y({
        type: e
      });
      try {
        var n;
        if (C) {
          j(true);
        }
        await S.exportDocFile({
          type: B[e],
          pageToken: i,
          source: filePermissionConstants.spaceTypes.Doubao,
          docType: "docx",
          version: l
        }, D);
        if ((n = x.onDownloadStart) !== null && n !== undefined) {
          n.call(x);
        }
        if (L != null) {
          L(e);
        }
        H({
          success: true
        });
      } catch (e) {
        if (O != null) {
          O(e);
        }
        H({
          success: false,
          code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
        });
      } finally {
        if (C) {
          j(false);
        }
      }
    };
    let U = functionInvoker.invoke(() => [{
      label: "Word",
      icon: reactJsxRuntimeCoreReexport.jsx(docFileIconComponent.DocFileIcon, {}),
      value: "docx",
      onClick: () => K(P.Word)
    }, {
      label: "PDF",
      icon: reactJsxRuntimeCoreReexport.jsx(pdfFileTypeIcon.PdfFileIcon, {}),
      value: "pdf",
      onClick: () => K(P.PDF)
    }, {
      label: "Markdown",
      icon: reactJsxRuntimeCoreReexport.jsx(fileTypeTxtIcon.FileTypeTxtIcon, {}),
      value: "markdown",
      onClick: () => K(P.MarkDown)
    }]);
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentClassName: a("container-SREEeF", n),
      className: "popover-select-wrapper-hSAozA",
      contentProps: {
        "data-testid": "doc_export_popover"
      },
      style: o,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      wrapWhenSpecial: false,
      visible: _,
      onVisibleChange: I,
      iconSize: "middle",
      newIcon: true,
      options: U,
      spacing: F,
      position: g,
      trigger: k,
      disabled: b,
      onMouseDown: e => e.stopPropagation(),
      zIndex: 1100,
      ...h,
      children: reactCoreLibraryReexport.Children.toArray(t).find(reactCoreLibraryReexport.isValidElement)
    });
  };
  let h = e => {
    let {
      className: n,
      style: o,
      pageToken: t,
      version: i,
      reportParams: c,
      rpcClientId: _,
      disabled: u,
      hideText: s,
      onBeforeExport: E,
      onExportSuccess: A,
      onExportError: p
    } = e;
    let w = i18nTranslationUtils.useTranslationWithFallback();
    let [f, T] = reactCoreLibraryReexport.useState(false);
    rpcIframeClickHook.useRpcIframeClick(_, () => {
      T(false);
    });
    return reactJsxRuntimeCoreReexport.jsx(C, {
      pageToken: t,
      rpcClientId: _,
      version: i,
      reportParams: c,
      onVisibleChange: T,
      visible: f,
      trigger: "custom",
      onBeforeExport: E,
      onExportSuccess: A,
      onExportError: p,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "container_inner_download_btn",
        className: a("download-button-lIe2oP", n),
        style: o,
        disabled: u,
        tooltip: s ? w("doc_editor_toolbar_download") : undefined,
        title: s ? undefined : w("doc_editor_toolbar_download"),
        onClick: () => {
          if (!u) {
            T(e => !e);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
          className: "icon-download-nNBI4b"
        })
      })
    });
  };
  require.d(exports, {
    DocXExportButton: function () {
      return h;
    },
    DocXExportPopover: function () {
      return C;
    }
  });
}