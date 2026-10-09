// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'renderDocumentRefAnchors'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 698453
         */
module.exports = function (module, exports, require) {
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var stringSliceLengthUtil = require("string-slice-length-util") /*id: 235558*/;
  var chatDocRefCheck = require("chat-doc-ref-check") /*id: 558708*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatCanvasFileHandler = require("chat-canvas-file-handler") /*id: 373517*/;
  var refContentCircleComponent = require("ref-content-circle-component") /*id: 595358*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var j = classnamesUtils;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var docFileIconComponent = require("doc-file-icon-component") /*id: 936985*/;
  var pdfFileTypeIcon = require("pdf-file-type-icon") /*id: 604202*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var skillReceiveMessageAction = require("skill-receive-message-action") /*id: 14727*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let B = e => {
    let {
      pdfId: t,
      pdfUrl: r
    } = e;
    return useRequestHook.useRequest(async () => {
      let {
        data: e = {}
      } = await apiServicesCollection.SamanthaApiService.GetPDFOcr({
        file_key: t,
        url: r,
        start_page: 0,
        end_page: 300
      });
      let {
        status: n
      } = e;
      if (n === "success") {
        return e.pdf_content;
      }
      throw Error(`status: ${n}`);
    }, {
      cacheKey: `document_ref_load_ocr_data:${t || r}`,
      staleTime: 60000,
      onError: e => {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "flow_pdf_page_anchor_ocr",
          error: e
        });
      }
    });
  };
  var L = {
    input: "input-nI_uTz",
    body: "body-jTfqYG",
    flash: "flash-fXYPHu"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "flex w-full flex-col gap-12",
    children: Array.from({
      length: 8
    }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
      className: j(L.input, L.flash)
    }, t))
  });
  let U = e => {
    let {
      message: t,
      clickable: r,
      onClick: n,
      documentRefMetaInfoData: i
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let {
      file_key: o,
      url: s
    } = i;
    let {
      filename: l
    } = chatMessageStoreFactory.createMessageStore(e => {
      if (s) {
        return {
          filename: s
        };
      }
      if (!t || !o) {
        return {
          filename: ""
        };
      }
      let {
        message: r
      } = conversationMessageUtils_1.processMessageList(e, t.conversation_id || "", e => {
        let {
          getMessage: t
        } = e;
        let r = t();
        if (r) {
          let e = skillReceiveMessageAction.filterAttachments(o, r);
          return !!e && !!(e.length > 0);
        }
        return false;
      });
      let n = r && arrayFirstElement.getFirstElement(skillReceiveMessageAction.filterAttachments(o, r));
      return {
        filename: (n == null ? undefined : n.file_name) || ""
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let {
      loading: c,
      data: u
    } = B({
      pdfId: o,
      pdfUrl: s || ""
    });
    let h = reactCoreLibraryReexport.useMemo(() => {
      var e;
      if (!u || !i) {
        return null;
      }
      let t = u.find(e => Number(e.page_id) + 1 === i.page);
      let r = t == null ? undefined : (e = t.text_blocks) === null || e === undefined ? undefined : e.find(e => {
        return deepEqualUtil_1.deepEqual([e.norm_box?.x0, e.norm_box?.y0, e.norm_box?.x1, e.norm_box?.y1], i.bbox);
      });
      return r || null;
    }, [u, i]);
    if (r) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: j("p-16 pb-12", {
          "cursor-pointer": r
        }),
        onClick: r ? n : emptyExportFunction.emptyFunction,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: j("flex items-center s-font-xxs text-s-color-text-tertiary"),
          children: [s && urlParamUtils.validateUrl(s.trim(), {
            allowedProtocols: ["https:"],
            allowedExtensions: ["doc", "docx"]
          }) || fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(l)) === "Document" ? reactJsxRuntimeCoreReexport.jsx(docFileIconComponent.DocFileIcon, {}) : reactJsxRuntimeCoreReexport.jsx(pdfFileTypeIcon.PdfFileIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mr-4 ml-6 grow truncate",
            children: l
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mr-4 shrink-0",
            children: a("skill_copliotreading_go_to_source")
          }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
            className: "p-2 text-16 text-s-color-text-primary"
          })]
        }), c ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
            className: "!my-12"
          }), reactJsxRuntimeCoreReexport.jsx(W, {})]
        }) : (h == null ? undefined : h.text) ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
            className: "!my-12"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: j("line-clamp-15 max-h-300 text-s-color-text-secondary", L.body),
            style: {
              "--base-font-size": "14px",
              "--base-font-weight": h.is_bold ? "bold" : "normal",
              "--base-font-style": h.is_italic ? "italic" : "normal"
            },
            children: h == null ? undefined : h.text
          })]
        }) : null]
      });
    } else {
      return null;
    }
  };
  let H = e => {
    let {
      message: t,
      clickable: r,
      onClick: n,
      documentRefMetaInfoData: i,
      getPopupContainer: a,
      children: o
    } = e;
    let [s, l] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          teaAnalyticsEventTracker.trackEvent("reference_card_show", {
            enter_from: (e == null ? undefined : e.exactImmersiveMode) ? "copilot" : "chat",
            collection_id: i.file_key || i.url || ""
          });
        });
      }
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: "w-300 rounded-12",
      autoAdjustOverflow: true,
      mouseEnterDelay: 200,
      mouseLeaveDelay: 200,
      spacing: 10,
      content: reactJsxRuntimeCoreReexport.jsx(U, {
        message: t,
        clickable: !!r,
        onClick: () => n == null ? undefined : n(),
        documentRefMetaInfoData: i
      }),
      getPopupContainer: a,
      clickToHide: true,
      onVisibleChange: e => l(e),
      children: o == null ? undefined : o(s)
    });
  };
  let z = e => e.page;
  let V = e => e ? {
    background: "var(--s-color-brand-primary-hover, #004ad9)",
    color: "var(--s-color-text-invert-primary, #fff) !important"
  } : {};
  let J = e => {
    let {
      value: t,
      content: r,
      message: n,
      viewOnly: i = false,
      options: a
    } = e;
    let {
      message_id: o
    } = n ?? {};
    let {
      onOpenFileByKey: s,
      onOpenFileByLink: b
    } = chatCanvasFileHandler.useCanvasFileHandler();
    let w = t && z(t);
    let x = arxivPdfUrlChecker_1.checkArxivPdfUrl((t == null ? undefined : t.url) || "");
    let k = async () => {
      if (!t) {
        return;
      }
      let r = (n == null ? undefined : n.skill?.skill_type_no_default) || null;
      let {
        file_key: i,
        url: a
      } = t;
      let c = {
        messageId: o,
        pdf: {
          anchorPage: w,
          highlightArea: [{
            page: w ?? 0,
            area: t.bbox,
            scrollIntoView: true
          }]
        },
        openFrom: "click_anchor_point"
      };
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
        teaAnalyticsEventTracker.trackEvent("reference_card_click", {
          enter_from: (e == null ? undefined : e.exactImmersiveMode) ? "copilot" : "chat",
          collection_id: i || a || ""
        });
      });
      if (i) {
        let e = i;
        try {
          if (fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(i)) === "Document") {
            let t = await getDocumentPdfKey.getDocumentPdfKey(i);
            if (t) {
              e = t;
            }
          }
        } finally {
          if (s != null) {
            s(e, "PDF", c, {
              messageId: o,
              skillType: r,
              entranceType: "click_ai_anchor_point",
              collectionId: i
            });
          }
        }
      } else if (a) {
        if (!x) {
          window.open(xssContentSanitizer.sanitizeUrl(a, null, {
            logType: "js.window.location",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWTIx$2F*cERPWHBq-l%xMld%ST$kR05IT1hW-$Z6$XdZM2s1-TJJe$RqRmlWM$oxWk$Ne*$WcFhXWFpo$npWcldsa*5k$1JJ$*pSWldFcH$aRmhO%FE9PQ"
          }));
          return;
        }
        if (b != null) {
          b(a, {
            ...c,
            attchmentType: x ? "pdf" : "unknown"
          }, {
            messageId: o,
            skillType: r,
            entranceType: "click_ai_anchor_point",
            collectionId: i
          });
        }
      }
    };
    let [C, j] = reactIntersectionObserver_1.useInView({
      triggerOnce: true,
      initialInView: false,
      threshold: 1
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (j) {
        teaAnalyticsEventTracker.trackEvent("show_immersiveread_anchor_point", {
          collection_id: (t == null ? undefined : t.file_key) || (t == null ? undefined : t.url),
          number: w
        });
      }
    }, [j]);
    let S = w && !i;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t && !isUndefinedCheck.isUndefined(w) && reactJsxRuntimeCoreReexport.jsx(H, {
        documentRefMetaInfoData: t,
        message: n,
        onClick: k,
        clickable: !!S,
        getPopupContainer: a == null ? undefined : a.getPopupContainer,
        children: e => reactJsxRuntimeCoreReexport.jsx(refContentCircleComponent.RefContentCircle, {
          ref: C,
          page: r,
          style: V(e),
          onClick: S ? () => {
            k();
            teaAnalyticsEventTracker.trackEvent("click_immersiveread_anchor_point", {
              collection_id: (t == null ? undefined : t.file_key) || (t == null ? undefined : t.url),
              number: w
            });
          } : undefined
        })
      })
    });
  };
  let X = (e, t) => t.map(t => {
    let {
      data: r
    } = t;
    return {
      ...t,
      data: {
        ...r,
        index: stringSliceLengthUtil.calcSliceLength(e, r.index)
      }
    };
  });
  let q = e => {
    let t = e.map(e => e.data);
    let r = throttledOrderByUtil.throttledOrderBy(t, ["page", "index"]);
    let i = 1;
    return r.reduce((e, t) => {
      var r;
      let n = (r = t.bbox) === null || r === undefined ? undefined : r.toString();
      if (n && !e[n]) {
        e[n] = i;
        i++;
      }
      return e;
    }, {});
  };
  let G = e => {
    let {
      messageText: t,
      metaInfos: r,
      message: o,
      viewOnly: l,
      options: c
    } = e;
    let d = X(t, r.filter(chatDocRefCheck.isDocumentRef));
    let u = collectionArrayGrouper.groupValuesToArray(d, e => e.data.index);
    let h = [];
    let p = q(d);
    for (let [e, t] of toEntriesUtil.toEntries(u)) {
      let r = [];
      for (let [i, a] of Object.entries(throttledOrderByUtil.throttledOrderBy(t, e => Number(e.data.page)).slice(0, 4))) {
        var f;
        r.push(reactJsxRuntimeCoreReexport.jsx(J, {
          value: a.data,
          content: p[(f = a.data.bbox) === null || f === undefined ? undefined : f.toString()] || 1,
          message: o,
          viewOnly: l,
          options: c
        }, `${e}/${i}`));
      }
      h.push({
        range: Number(e),
        render: () => reactJsxRuntimeCoreReexport.jsx("span", {
          children: r
        })
      });
    }
    return h;
  };
  require.d(exports, {
    renderDocumentRefAnchors: function () {
      return G;
    }
  });
}