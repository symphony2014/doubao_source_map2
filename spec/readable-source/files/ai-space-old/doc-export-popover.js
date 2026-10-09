// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'DocExportButton'
// - Renamed export 'T' to 'FileType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 381123
         */
module.exports = function (module, exports, require) {
  let i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var samanthaLoadingToastHook = require("samantha-loading-toast-hook") /*id: 170954*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var fileJobStatusConsts = require("file-job-status-consts") /*id: 212138*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var docFileIconComponent = require("doc-file-icon-component") /*id: 936985*/;
  var pdfFileTypeIcon = require("pdf-file-type-icon") /*id: 604202*/;
  var fileTypeTxtIcon = require("file-type-txt-icon") /*id: 593286*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var docUpgradeStatusHook = require("doc-upgrade-status-hook") /*id: 439440*/;
  var feishuDocService = require("feishu-doc-service") /*id: 724566*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let R = () => i ||= new Promise((e, t) => {
    fetch("https://www.feishu.cn/space/api/infra/domains/all").then(e => e.json()).then(e => objectPathGetDefault.getObjectPathDefault(e, "data.doubao.internal_api", "")).then(e => {
      if (!e) {
        throw Error("url is empty");
      }
      return e;
    }).then(e => `https://${e}`).then(e).catch(t => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[AI-PPT] get_feishu_api_origin_error",
        error: t
      });
      i = undefined;
      e("https://www.feishu.cn");
    });
  });
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let j = {
    [fileJobStatusConsts.FileType.Unknown]: "unknown",
    [fileJobStatusConsts.FileType.Word]: "word",
    [fileJobStatusConsts.FileType.WordDoc]: "word",
    [fileJobStatusConsts.FileType.PDF]: "pdf",
    [fileJobStatusConsts.FileType.MarkDown]: "markdown",
    [fileJobStatusConsts.FileType.OtterPage]: "otter_page"
  };
  let N = e => {
    let {
      extraParams: t,
      docId: n
    } = e;
    let i = (e, i) => {
      let r = isFunctionUtil_1.isFunction(t) ? t() : t;
      teaAnalyticsEventTracker.trackEvent(e, {
        ...i,
        ...r,
        artifact_type: 1,
        page_token: n,
        folder_type: "writing",
        type: "file",
        button_name: "download"
      });
    };
    return {
      trackFileFunctionShow: () => {
        i("file_function_show");
      },
      trackFileFunctionClick: e => {
        let {
          type: t
        } = e;
        i("file_function_click", {
          export_type: j[t],
          if_multiple_choose: 0
        });
      },
      trackFileFunctionStatus: e => {
        let {
          success: t,
          code: n
        } = e;
        i("file_function_status", {
          button_name: "download",
          success: +!!t,
          code: n
        });
      }
    };
  };
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  async function I(e) {
    try {
      let t = await apiServicesCollection.OtterConvertApiService.AGWCreatePageExport(e);
      if (t.code === 0 && t.data) {
        return t.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(t)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_export_job",
        error: e
      });
      throw e;
    }
  }
  async function $(e) {
    let {
      jobId: t,
      jobTimeoutSec: n,
      queryIntervalSec: i
    } = e;
    try {
      let e = await M({
        requestFn: async () => await apiServicesCollection.OtterConvertApiService.AGWGetPageExport({
          job_id: t
        }),
        timeout: (n || 300) * 1000,
        interval: (i || 2) * 1000,
        maxConsecutiveErrors: 5,
        isDone: e => {
          return e.code === 0 && !!e.data?.url;
        }
      });
      return {
        url: e.data?.url || "",
        fileName: e.data?.file_name || ""
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "query_export_url",
        error: e
      });
      throw e;
    }
  }
  async function M(e) {
    let {
      requestFn: t,
      interval: n = 3000,
      timeout: i = 300000,
      maxConsecutiveErrors: r = 3,
      isDone: o
    } = e;
    let a = Date.now() + i;
    let l = 0;
    return new Promise((e, i) => {
      let s = async () => {
        try {
          let r = Date.now();
          let c = await t();
          l = 0;
          if (o(c)) {
            e(c);
            return;
          }
          if (r >= a) {
            i(Error(`Polling timeout reached. Stopping polling. lastRequestTime: ${r}, timeoutTime: ${a}`));
            return;
          }
          setTimeout(s, n);
        } catch (e) {
          if (++l >= r) {
            i(Error(`Request failed ${r} consecutive times. Aborting polling.`));
            return;
          }
          setTimeout(s, n);
        }
      };
      s();
    });
  }
  async function A(e) {
    return await M({
      requestFn: () => R().then(t => feishuDocService.getExportResult({
        origin: t,
        token: e.pageToken,
        ticket: e.ticket
      })),
      maxConsecutiveErrors: 60,
      isDone: e => !!e
    });
  }
  let F = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let {
    FileType: W
  } = fileJobStatusConsts;
  let Z = e => {
    let {
      className: t,
      style: n,
      children: i,
      pageToken: l,
      version: u,
      visible: h,
      reportParams: k,
      options: C,
      divider: E,
      onVisibleChange: T,
      onBeforeExport: j,
      handleCustomExport: P,
      onExportSuccess: M,
      onExportError: Z,
      unSupportedTypes: D = [],
      spacing: L = 4,
      position: B = "bottomRight",
      trigger: H = "click",
      disabled: V,
      ...z
    } = e;
    let U = i18nTranslationUtils.useTranslationWithFallback();
    let {
      trackFileFunctionClick: X,
      trackFileFunctionShow: G,
      trackFileFunctionStatus: J
    } = N({
      extraParams: k,
      docId: l
    });
    let {
      isDoubaoDoc: Q,
      loading: q,
      isUpdating: K
    } = docUpgradeStatusHook.getDocUpgradeInfo({
      docId: l
    });
    let Y = !Q && !q && !K;
    let {
      loadingRef: ee,
      setLoading: et
    } = samanthaLoadingToastHook.useLoadingToast({
      text: U("doc_editor_toolbar_download_loading"),
      closeWhenUnmount: false
    });
    async function en(e) {
      let t = await R();
      let n = e === W.Word ? "docx" : e === W.PDF ? "pdf" : "md";
      let {
        ticket: i
      } = await feishuDocService.createExportJob({
        origin: t,
        fileType: n,
        token: l
      });
      let {
        fileToken: o,
        fileName: a
      } = await A({
        pageToken: l,
        ticket: i
      });
      let s = await feishuDocService.downloadDocStream({
        origin: t,
        token: o
      });
      let c = `${a}.${n}`;
      let d = document.createElement("a");
      d.href = xssContentSanitizer.sanitizeUrl(window.URL.createObjectURL(s), null, {
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
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3e$RuWmlXR%oyWW0x$2RX%kl%WFph%npsc$p$TXhiR1ZJ%W5aamJsRjJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
      });
      d.download = c;
      d.click();
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (h) {
        G();
      }
    }, [h]);
    let ei = async e => {
      if (ee.current) {
        samanthaToastFactory.toastInstance.info({
          content: U("doc_exporting")
        });
        return;
      }
      if (j != null) {
        j(e);
      }
      X({
        type: e
      });
      et(true);
      if (P) {
        try {
          await P(e);
          J({
            success: true
          });
        } catch (e) {
          if (Z != null) {
            Z(e);
          }
          J({
            success: false,
            code: "0"
          });
        } finally {
          et(false);
        }
        return;
      }
      if (Y) {
        try {
          await en(e);
          J({
            success: true
          });
        } catch (e) {
          if (!Z && e instanceof Error && e.message === feishuDocService.FeishuDocErrors.NO_PERMISSION) {
            samanthaToastFactory.toastInstance.error({
              content: U("doc_share_access_msg_noAcess_owner")
            });
          }
          if (Z != null) {
            Z(e);
          }
          J({
            success: false,
            code: "0"
          });
        } finally {
          et(false);
        }
        return;
      }
      try {
        var t;
        let {
          job_id: n = "",
          job_timeout: i = 300,
          first_query_interval_sec: r = 2,
          query_interval_sec: o = 2
        } = await I({
          page_token: l,
          page_version: u,
          type: e
        });
        await promiseDelayUtil.delayPromise(r * 1000);
        let {
          url: a,
          fileName: s
        } = await $({
          jobId: n,
          jobTimeoutSec: i,
          queryIntervalSec: o
        });
        if ((t = F.onDownloadStart) !== null && t !== undefined) {
          t.call(F);
        }
        fileDownloadUtilities.downloadFileViaBlob(a, s);
        if (M != null) {
          M(e);
        }
        J({
          success: true
        });
      } catch (e) {
        if (Z != null) {
          Z(e);
        }
        J({
          success: false,
          code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
        });
      } finally {
        et(false);
      }
    };
    let er = functionInvoker.invoke(() => {
      let e = [...((D == null ? undefined : D.includes(W.Word)) ? [] : [{
        label: "Word",
        icon: reactJsxRuntimeCoreReexport.jsx(docFileIconComponent.DocFileIcon, {}),
        value: "docx",
        onClick: () => ei(W.Word)
      }]), ...((D == null ? undefined : D.includes(W.PDF)) ? [] : [{
        label: "PDF",
        icon: reactJsxRuntimeCoreReexport.jsx(pdfFileTypeIcon.PdfFileIcon, {}),
        value: "pdf",
        onClick: () => ei(W.PDF)
      }]), ...((D == null ? undefined : D.includes(W.MarkDown)) ? [] : [{
        label: "Markdown",
        icon: reactJsxRuntimeCoreReexport.jsx(fileTypeTxtIcon.FileTypeTxtIcon, {}),
        value: "markdown",
        onClick: () => ei(W.MarkDown)
      }])];
      if (isFunctionUtil_1.isFunction(C)) {
        return C(e);
      } else {
        return e;
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentClassName: s("container-hianyw", t),
      className: "popover-select-wrapper-pwGmx4",
      contentProps: {
        "data-testid": "doc_export_popover"
      },
      style: n,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      wrapWhenSpecial: false,
      visible: h,
      onVisibleChange: T,
      iconSize: "middle",
      newIcon: true,
      options: er,
      spacing: L,
      position: B,
      trigger: H,
      disabled: V,
      onMouseDown: e => e.stopPropagation(),
      zIndex: 1100,
      ...z,
      children: reactCoreLibraryReexport.Children.toArray(i).find(reactCoreLibraryReexport.isValidElement)
    });
  };
  let D = e => {
    let {
      className: t,
      style: n,
      pageToken: i,
      version: r,
      reportParams: a,
      disabled: l,
      hideText: c,
      unSupportedTypes: u = [],
      onBeforeExport: _,
      onExportSuccess: m,
      onExportError: v
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    let [p, g] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(Z, {
      pageToken: i,
      version: r,
      reportParams: a,
      onVisibleChange: g,
      visible: p,
      trigger: "custom",
      unSupportedTypes: u,
      onBeforeExport: _,
      onExportSuccess: m,
      onExportError: v,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        "data-testid": "container_inner_download_btn",
        className: s("download-button-xwFewx", t),
        style: n,
        disabled: l,
        tooltip: c ? f("doc_editor_toolbar_download") : undefined,
        title: c ? undefined : f("doc_editor_toolbar_download"),
        onClick: () => {
          if (!l) {
            g(true);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
          className: "icon-download-LWR64A"
        })
      })
    });
  };
  require.d(exports, {
    DocExportButton: function () {
      return D;
    },
    FileType: function () {
      return W;
    },
    DocXExportPopover: function () {
      return Z;
    }
  });
}