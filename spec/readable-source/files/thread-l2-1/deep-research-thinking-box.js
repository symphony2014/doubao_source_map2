// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'DeepResearchBox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 743349
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var motionPresenceComponent = require("motion-presence-component") /*id: 591327*/;
  var motionComponentFactory_1 = require("motion-component-factory_1") /*id: 57495*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var protocolMessageConstants = require("protocol-message-constants") /*id: 444681*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useMultiClickHook = require("use-multi-click-hook") /*id: 398816*/;
  var animationDebugContext = require("animation-debug-context") /*id: 60445*/;
  var animationDebugControls = require("animation-debug-controls") /*id: 850149*/;
  var carouselStepNavigationControl = require("carousel-step-navigation-control") /*id: 77292*/;
  var thinkingBoxRootComponent = require("thinking-box-root-component") /*id: 465166*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var searchImageBlockComponent = require("search-image-block-component") /*id: 691965*/;
  var codeArtifactRenderer = require("code-artifact-renderer") /*id: 573090*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var searchOutlinedIconComponent_1 = require("search-outlined-icon-component_1") /*id: 772730*/;
  var magicIcon = require("magic-icon") /*id: 882435*/;
  var documentOutlinedIcon = require("document-outlined-icon") /*id: 700300*/;
  var fileUrlRefreshHook = require("file-url-refresh-hook") /*id: 875965*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let M = e => {
    let {
      logoUrl: t
    } = e;
    let {
      latestFileUrls: n
    } = fileUrlRefreshHook.useRefreshedFileUrls({
      fileUrls: [t]
    });
    if (n == null ? undefined : n[0]) {
      return reactJsxRuntimeCoreReexport.jsx("img", {
        className: "rounded-full",
        src: xssContentSanitizer.sanitizeUrl(n[0], null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d0-$-xWjN%RmhL-kdNe$Zta*pi$T$2$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZ*xreWFHa*tRek-1$2xkT2JHRllXbXhN$np*c1l6Tk9hRm95$lhSWk1qbDFaRWRXZFdSRE1Xb*lSemxxW$hrNW$WcFl%bXha$0$wc$l$TXhkMk50T1dw-$dFNTZ%RmRP-%dOdF$-%lpiW*gy$1RKemRt%khhSEJp-lhSd1ltMWpkRmx0T1RST$-wWnJX$mhDT%ZwW$N-WmlSemx1WW5re*FtSXlO$EJh$np$d1RHN$Nlb$ZI%m5s-%0xWj-"
        })
      });
    } else {
      return null;
    }
  };
  let A = e => {
    try {
      return new URL(e).hostname.replace(/^www\./, "");
    } catch (e) {
      return null;
    }
  };
  let Z = e => e.length === 0 || e.every(e => e.type === "thinking-start");
  let B = (e, t) => {
    let n = e[e.length - 1];
    if ((n == null ? undefined : n.type) !== "thinking-step") {
      e.push({
        type: "thinking-step",
        id: t.id,
        title: t.title
      });
    }
    let i = e[e.length - 1];
    if ((i == null ? undefined : i.type) !== "thinking-step") {
      throw Error(`Unexpected last result type. Expecting 'thinking-step', but got ${i == null ? undefined : i.type}`);
    }
    return i;
  };
  let O = (e, t, n) => {
    let i = [];
    let l = {
      previousTitle: t.researching,
      isTitleUsed: false,
      currentBlockType: null,
      lastBlockType: null
    };
    for (let y of e) {
      var r;
      var o;
      var g;
      switch (y.block_type) {
        case chatConstantsEnum.messageContentType.BLOCK_LOADING:
          break;
        case chatConstantsEnum.messageContentType.BLOCK_HEADER_TEXT:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let t = e == null ? undefined : (r = e.text) === null || r === undefined ? undefined : r.trim();
            if (t) {
              l.previousTitle = t;
              l.isTitleUsed = false;
            }
            if (i.length === 0) {
              i.push({
                type: "thinking-start",
                id: "thinking-start",
                title: t
              });
            }
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_TEXT:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let t = e == null ? undefined : (o = e.text) === null || o === undefined ? undefined : o.trim();
            if (t) {
              i.push({
                type: "thinking-step",
                id: y.id,
                title: l.previousTitle,
                message: t,
                headerAboveMessageForExpandedOnly: l.isTitleUsed || Z(i) ? undefined : l.previousTitle
              });
              l.isTitleUsed = true;
            }
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY:
          {
            l.currentBlockType = y.block_type;
            let e = y;
            let n = e.content_obj;
            let r = ((n == null ? undefined : n.queries) ?? []).map((t, n) => ({
              type: "tool-call",
              id: `${e.id}-${n}`,
              name: t,
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(searchOutlinedIconComponent_1.SearchOutlinedIcon, {
                className: "h-[14px] w-[14px]"
              })
            }));
            let o = B(i, {
              id: e.id,
              title: t.searching ?? "Searching"
            });
            o.tools = [...(o.tools ?? []), ...r];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_RESULT:
          {
            l.currentBlockType = y.block_type;
            let e = y;
            let t = e.content_obj;
            let n = ((t == null ? undefined : t.results) ?? []).map(e => e == null ? undefined : e.text_card).filter(Boolean).filter(e => e == null ? undefined : e.title).map((t, n) => {
              return {
                type: "tool-call",
                id: `${e.id}-${n}`,
                name: A((t == null ? undefined : t.url) ?? "") ?? (t == null ? undefined : t.title) ?? "",
                href: xssContentSanitizer.sanitizeUrl(t == null ? undefined : t.url, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d0-$-xWjN%RmhL-kdNe$Zta*pi$T$2$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZ*xreWFHa*tRek-1$2xkT2JHRllXbXhN$np*c1l6Tk9hRm95$lhSWk1qbDFaRWRXZFdSRE1Xb*lSemxxW$hrNW$WcFl%bXha$0$wc$l$TXhkMk50T1dw-$dFNTZ%RmRP-%dOdF$-%lpiW*gy$1RKemRt%khhSEJp-lhSd1ltMWpkRmx0T1RST$-wWnJX$mhDT%ZwW$N-WmtXRT$z$EZo%2IyRlhOWEpo$npWd$R*ZFNhR1JI%lhSWl-xSm9ZM*hT-kdOcE5%QmpNMmhvWTIxa01XTjNQ$DA9"
                }),
                leadingIcon: (t == null ? undefined : t.logo_url) ? reactJsxRuntimeCoreReexport.jsx(M, {
                  logoUrl: t == null ? undefined : t.logo_url
                }) : undefined,
                clickable: true,
                trailingIcon: null
              };
            });
            let r = B(i, {
              id: e.id,
              title: l.previousTitle
            });
            if (l.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY) {
              n.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            r.tools = [...(r.tools ?? []), ...n];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_LOCAL_LIFE:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let t = [{
              type: "tool-call",
              id: y.id,
              name: (e == null ? undefined : e.summary) ?? "",
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(magicIcon.MagicIcon, {})
            }];
            let n = B(i, {
              id: y.id,
              title: l.previousTitle
            });
            n.tools = [...(n.tools ?? []), ...t];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_LINKER_READER:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let {
              is_finish: t
            } = y ?? {};
            let n = [{
              type: "tool-call",
              id: y.id,
              name: (e == null ? undefined : e.summary) ?? "",
              status: t ? "finished" : "running",
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(documentOutlinedIcon.DocumentOutlined, {})
            }];
            let r = B(i, {
              id: y.id,
              title: l.previousTitle
            });
            if (l.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_LINKER_READER) {
              n.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            r.tools = [...(r.tools ?? []), ...n];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_ROUTE_PLAN:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let t = (g = y == null ? undefined : y.is_finish) === null || g === undefined || g;
            let {
              summary: n,
              start: r,
              end: o
            } = e ?? {};
            let a = functionInvoker.invoke(() => r && o ? `"${r} \u{2192} ${o}"` : "");
            let s = [{
              type: "tool-call",
              id: y.id,
              name: `${n ?? ""} ${a}`,
              status: t ? "finished" : "running",
              leadingIcon: reactJsxRuntimeCoreReexport.jsx(magicIcon.MagicIcon, {})
            }];
            let c = B(i, {
              id: y.id,
              title: l.previousTitle
            });
            if (l.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_ROUTE_PLAN) {
              s.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            c.tools = [...(c.tools ?? []), ...s];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            let {
              search_type: t
            } = e ?? {};
            if (t !== skillMessageLifecycleTypes.searchType.ImageSearchImage) {
              break;
            }
            let r = [{
              type: "tool-call-custom-component",
              id: y.id,
              component: reactJsxRuntimeCoreReexport.jsx(searchImageBlockComponent.SearchImageBlock, {
                message: n ?? {},
                contentBlock: y,
                classname: "!mt-0",
                imageListClassname: "!mb-0"
              })
            }];
            let o = B(i, {
              id: y.id,
              title: l.previousTitle
            });
            if (l.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_SEARCH_QUERY_RESULT) {
              r.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            o.tools = [...(o.tools ?? []), ...r];
            l.isTitleUsed = true;
            break;
          }
        case chatConstantsEnum.messageContentType.BLOCK_CODE:
          {
            l.currentBlockType = y.block_type;
            let e = [{
              type: "tool-call-custom-component",
              id: y.id,
              component: reactJsxRuntimeCoreReexport.jsx(codeArtifactRenderer.renderCodeArtifact, {
                classname: "!my-0",
                iconClassName: "text-14 text-s-color-text-tertiary",
                message: n ?? {},
                contentBlock: y
              })
            }];
            let t = B(i, {
              id: y.id,
              title: l.previousTitle
            });
            if (l.lastBlockType === chatConstantsEnum.messageContentType.BLOCK_CODE) {
              e.unshift({
                type: "magic-tool-element",
                magicElementType: "line-break"
              });
            }
            t.tools = [...(t.tools ?? []), ...e];
            l.isTitleUsed = true;
            break;
          }
        default:
          {
            l.currentBlockType = y.block_type;
            let e = y.content_obj;
            if (!flowDebugStatus.isDebugEnabled()) {
              break;
            }
            if (e) {
              i.push({
                type: "custom-component",
                id: y.id,
                title: l.previousTitle,
                component: reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: "px-[20px]",
                  children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                    children: ["❌ Unsupported block type ", y.block_type]
                  }), reactJsxRuntimeCoreReexport.jsx("pre", {
                    children: JSON.stringify(y, null, 2)
                  })]
                })
              });
            }
          }
      }
      l.lastBlockType = l.currentBlockType;
    }
    if (i.length === 0 || i.length > 0 && i[0].type !== "thinking-start") {
      i.unshift({
        type: "thinking-start",
        id: "thinking-start",
        title: t.researching
      });
    }
    return {
      result: i,
      lastUnusedBlockTitle: l.isTitleUsed ? null : l.previousTitle
    };
  };
  let D = (e, t, n) => {
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let r = {
      searching: l("web_deepResearch_header_searching") || "Searching",
      researching: l("web_deepResearch_status_researching") || "Researching",
      researched: l("web_deepResearch_status_researched") || "Researched"
    };
    return reactCoreLibraryReexport.useMemo(() => {
      let {
        result: i,
        lastUnusedBlockTitle: l
      } = O(e, r, n);
      if (!t) {
        i.push({
          type: "thinking-end",
          id: "thinking-end",
          title: l ?? r.researched
        });
      }
      return i;
    }, [e.length, t]);
  };
  var deepResearchStore = require("deep-research-store") /*id: 354150*/;
  let z = e => {
    let a = i18nTranslationUtils.useTranslationWithFallback();
    let [k, y] = reactCoreLibraryReexport.useState(false);
    let {
      scrollRef: R
    } = chatRefsContext.useChatRefs();
    let $ = reactCoreLibraryReexport.useRef(null);
    let {
      message: C,
      contentBlock: T
    } = e;
    let {
      id: j,
      content_obj: N
    } = T ?? {};
    let {
      status: E,
      resource_id: P,
      title: I,
      create_source: W,
      research_resource_id: M = ""
    } = N ?? {};
    let [A, Z = [], B] = deepResearchStore.getDeepResearchStore(e => [e.blockIdToProcessHasInitialized[j ?? ""], e.blockIdToProcess[j ?? ""], e.updateBlockIdToConvId], deepEqualityUtil_1.isDeepEqual);
    let {
      isSelectMode: O
    } = chatMessageShareSelectStore.chatMessageShareSelectStore();
    let z = chatMessageStatusCheck.isMessageFinished(C) || E === skillMessageLifecycleTypes.taskStatus.FINISH;
    let V = chatResponsiveSize.useChatScreenSize({
      sm: 400,
      md: 680
    });
    let H = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    let X = C.async_task?.status !== protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing;
    let J = C.async_task?.status === protocolMessageConstants.asyncTaskStatus.AsyncTaskStatusProcessing && E === skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let U = E === skillMessageLifecycleTypes.taskStatus.CANCEL;
    let K = a("web_deepResearch_status_researchStopped");
    let q = D(Z.filter(e => "content_obj" in e), J, C);
    let Q = q.length;
    let [G, Y] = reactCoreLibraryReexport.useState(Q - 1);
    reactCoreLibraryReexport.useEffect(() => {
      if (G === Q - 2) {
        Y(Math.max(Q - 1, 0));
      }
    }, [Q]);
    let ee = W === skillMessageLifecycleTypes.platformType.APP;
    let et = a(E === skillMessageLifecycleTypes.taskStatus.CANCEL ? "web_deepResearch_status_researchStopped" : E === skillMessageLifecycleTypes.taskStatus.PROCESSING ? "web_deepResearch_status_researching" : "web_deepResearch_status_researched");
    let en = a("web_deepResearch_desc_researchProgress", {
      brandName: `${brandNameConstants.getBrandName()} App `
    });
    let ei = reactCoreLibraryReexport.useCallback(() => {
      var t;
      if (!k) {
        loggerServiceCore.defaultLogger.persist.success({
          eventName: "on_dr_process_card_show_start",
          meta: {
            tool_call_count: Q,
            is_processing: J
          }
        });
        setTimeout(() => {
          var e;
          let t = (e = $.current) === null || e === undefined ? undefined : e.querySelector("[data-thinking-box=step-message]");
          loggerServiceCore.defaultLogger.persist.success({
            eventName: "on_dr_process_card_show_end",
            meta: {
              show_success: !!t,
              tool_call_count: Q,
              is_processing: J
            }
          });
        }, 1500);
      }
      teaAnalyticsEventTracker.trackEvent("click_card", {
        card_type: "dr_process_card",
        card_id: "",
        click_effect: k ? "fold" : "unfold",
        bot_id: C.bot_id,
        deep_research_id: (t = C.verbose) === null || t === undefined ? undefined : t.deep_research?.deep_research_id,
        dr_process_detail: q[q.length - 1]?.title,
        message_id: C.message_id,
        conversation_id: C.conversation_id
      });
      y(!k);
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (E !== skillMessageLifecycleTypes.taskStatus.PROCESSING && Z.length === 0 && !A) {
        let e = ee ? M : P;
        if (!e) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "deep_research_process_resourceid_empty",
            meta: {
              ...(N ?? {}),
              isAsyncFinish: X,
              messageId: C.message_id,
              isFromMobileApp: ee
            }
          });
          return;
        }
        deepResearchStore.getDeepResearchStore.getState().fetchDeepResearchProcessData({
          blockId: j ?? "",
          resourceId: e
        });
      }
    }, [E, Z, A]);
    reactCoreLibraryReexport.useEffect(() => {
      if (z) {
        y(false);
      }
    }, [z]);
    let el = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return t;
    });
    reactCoreLibraryReexport.useEffect(() => {
      var t;
      B({
        blockId: j,
        convId: C.conversation_id ?? "",
        status: X
      });
      teaAnalyticsEventTracker.trackEvent("show_card", {
        card_type: "dr_process_card",
        status: k ? "unfold" : "fold",
        bot_id: C.bot_id,
        deep_research_id: (t = C.verbose) === null || t === undefined ? undefined : t.deep_research?.deep_research_id,
        dr_process_detail: q[q.length - 1]?.title,
        message_id: C.message_id,
        conversation_id: C.conversation_id
      });
    }, [k]);
    let er = {
      expandTooltip: a("web_deepResearch_tooltip_expand", "展开"),
      collapseTooltip: a("web_deepResearch_tooltip_collapse", "收起"),
      fallbackTitle: a("web_deepResearch_status_researching", "搜集与分析资料中"),
      toolCallMore: a("web_deepResearch_tooltip_expand", "更多"),
      toolCallCollapse: a("web_deepResearch_tooltip_collapse", "收起"),
      taskDone: a("web_deepResearch_status_researched", "已搜集和分析资料")
    };
    let [eo, ea] = reactCoreLibraryReexport.useState(false);
    let {
      handleClick: es
    } = useMultiClickHook.useMultiClick({
      clickTimes: 10,
      autoResetIntervalInMs: 1000,
      onTrigger: () => {},
      onClick: e => {}
    });
    let ec = U ? K : X && G === Q - 1 ? I : undefined;
    let ed = !ee || ee && M && E !== skillMessageLifecycleTypes.taskStatus.PROCESSING;
    let eu = reactCoreLibraryReexport.useRef(null);
    let ep = reactCoreLibraryReexport.useCallback(() => {
      if (R.current?.pauseScrollAnchoring) {
        eu.current = R.current.pauseScrollAnchoring();
      }
    }, [R]);
    let em = reactCoreLibraryReexport.useCallback(() => {
      if (eu.current) {
        eu.current();
        eu.current = null;
      }
    }, []);
    if (E !== undefined && (C.async_task?.status !== undefined || ee)) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: s("container-WHryEq", {
          "finished-I4Odnt": !J,
          "share-ec08QY": O,
          "narrow-Z2D1Xa": V === "md" || V === "sm" || H
        }),
        "data-id": T == null ? undefined : T.id,
        "data-block-type": T.block_type,
        ref: $,
        children: ed ? reactJsxRuntimeCoreReexport.jsxs(animationDebugContext.AnimationDebugProv, {
          children: [reactJsxRuntimeCoreReexport.jsx(motionPresenceComponent.AnimatePresence, {
            mode: "popLayout",
            children: false
          }), reactJsxRuntimeCoreReexport.jsx(thinkingBoxRootComponent.ThinkingBox, {
            onTitleClick: es,
            translations: er,
            title: ec ?? undefined,
            thinkingTimeElapsed: null,
            currentThinkingStepIndex: undefined,
            thinkingData: q,
            expanded: k,
            onToggleExpandClick: ei,
            isCanvasOpen: el,
            onContainerAnimationStart: ep,
            onContainerAnimationEnd: em,
            hideBorder: true
          })]
        }) : reactJsxRuntimeCoreReexport.jsx(thinkingBoxRootComponent.ThinkingBox, {
          thinkingData: [{
            type: "thinking-end",
            id: "thinking-end",
            title: et
          }],
          hideExpandButton: true,
          isCanvasOpen: el,
          thinkingTimeElapsed: en,
          translations: er,
          hideBorder: true
        })
      });
    } else {
      return null;
    }
  };
  let V = (e, t, n) => Math.max(t, Math.min(e, n));
  require.d(exports, {
    DeepResearchBox: function () {
      return z;
    }
  });
}