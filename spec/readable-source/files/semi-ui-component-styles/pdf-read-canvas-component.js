// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'ReadCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 787030
         */
module.exports = function (module, exports, require) {
  let n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var useLauncherSetting = require("use-launcher-setting") /*id: 310833*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var viewerControlBar = require("viewer-control-bar") /*id: 171255*/;
  var skeletonLoadingComponent = require("skeleton-loading-component") /*id: 437338*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      onClose: a
    } = e;
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      scrollToPage: emptyExportFunction.emptyFunction,
      refresh: emptyExportFunction.emptyFunction,
      clearFloating: emptyExportFunction.emptyFunction
    }), []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "container-ShU4KQ",
      children: [reactJsxRuntimeCoreReexport.jsx(viewerControlBar.ViewerControlBar, {
        className: "header-q1YpQF",
        pageConfig: {},
        scaleConfig: {},
        outlineConfig: {},
        translateConfig: {
          disabled: true
        },
        onDownload: emptyExportFunction.emptyFunction,
        onClose: a,
        disabled: true
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "inter-iJQISR",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "skeleton-wrapper-jRcZmC",
          children: reactJsxRuntimeCoreReexport.jsx(skeletonLoadingComponent.SkeletonLoading, {
            className: "pt-12",
            mode: "overlay"
          })
        })
      })]
    });
  });
  let p = e => {
    let {
      controllerRef: t,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(u, {
      ...a,
      ref: t
    });
  };
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let h = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        PdfScrollViewForLazy: e
      } = await Promise.all([require.e("katex-core-library") /*id: 21553*/, require.e("core-js-polyfills") /*id: 80332*/, require.e("html2canvas-renderer") /*id: 87547*/, require.e("mathjax-tex-renderer") /*id: 43274*/, require.e("semi-ui-primitives") /*id: 18629*/, require.e("pdf-processing-lib") /*id: 19054*/, require.e("new-pdf-scroll-view") /*id: 92089*/]).then(require.bind(require, "pdf-scroll-view-lazy") /*id: 880079*/);
      return {
        default: e
      };
    },
    fallback: {
      default: p
    }
  })), p);
  var aiSpaceEventReporter = require("ai-space-event-reporter") /*id: 946482*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let N = async e => {
    let {
      reportParams: a,
      extraExt: n,
      inputSkillObj: r,
      text: i,
      rawSendMessage: l,
      refContents: o
    } = e;
    let s = chatAppEnums.SkillType.Search;
    let c = o == null ? undefined : o.filter(e => e.type === "text");
    let d = c == null ? undefined : c[0]?.text;
    await l([{
      ...chatMessageBuilders.createTextMessage(d ?? i, {
        ...a
      }),
      extraExt: {
        input_skill: JSON.stringify({
          skill_id: s.toString(),
          skill_type: s,
          variables: {},
          ...r
        }),
        ...n
      }
    }]);
  };
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  let M = e => {
    let {
      chatId: t,
      extraExt: a,
      text: n,
      skillParam: r,
      refContents: i
    } = e;
    let l = aiChatEnumConstants.skillTypes.SkillSearch;
    let o = P({
      text: n,
      refContents: i
    });
    let s = {
      chat_ability: conversationMessageUtils.serializeAbilityData(l, r)
    };
    return conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(t),
      message: {
        content_blocks_v2: o,
        ext: {
          ...s,
          ...a
        }
      }
    });
  };
  let P = e => {
    let {
      text: t,
      refContents: a
    } = e;
    let n = chatTextBlockFactory.createTextBlock(t || "");
    let r = referenceBlockTransformer.transformReferences(a || []);
    return conversationMessageUtils.assembleContentBlocks({
      textBlock: n,
      referenceBlocks: r
    });
  };
  let F = async e => {
    var t;
    let {
      chatId: a,
      preGeneratedLocalMessageId: n,
      reportParams: r,
      extraExt: i,
      skillParamObj: l,
      refContents: o,
      text: s
    } = e;
    let c = {
      ...r
    };
    let d = M({
      text: s,
      chatId: a,
      extraExt: {
        ...i
      },
      skillParam: l && JSON.stringify(l),
      preGeneratedLocalMessageId: n,
      refContents: o
    });
    if ((t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService")) === null || t === undefined) {
      return undefined;
    } else {
      return t.sendMessage({
        message: d,
        session: {
          reportParams: c
        }
      });
    }
  };
  let L = () => {
    let {
      sendMessage: e
    } = chatServiceContext.useChatService("chatMessageService");
    return {
      sendMessage: reactFunctionMemoHook.useMemoizedCallback(async t => (await aiChatSkillConversationChecker.isValidSkillType(aiChatEnumConstants.skillTypes.SkillSearch)) ? F(t) : N({
        rawSendMessage: e,
        ...t
      }))
    };
  };
  var chatInputActionUtils = require("chat-input-action-utils") /*id: 678030*/;
  var chatSkillMessageSenderHook = require("chat-skill-message-sender-hook") /*id: 832138*/;
  var browserLanguageResolver = require("browser-language-resolver") /*id: 922449*/;
  var languageCodeEnumUtils = require("language-code-enum-utils") /*id: 964571*/;
  var fileClipboardUtils = require("file-clipboard-utils") /*id: 256419*/;
  var useAiChatSendMessage = require("use-ai-chat-send-message") /*id: 797491*/;
  var chatTranslateSkillService = require("chat-translate-skill-service") /*id: 437553*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  let X = () => {
    let e = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.canvasLayoutState === chatPanelModes.PanelMode.FULL_IMMERSIVE);
    return {
      isCanvasFullScreen: e,
      openCanvasFullScreen: reactFunctionMemoHook.useMemoizedCallback(() => {
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          canvasLayoutState: chatPanelModes.PanelMode.FULL_IMMERSIVE,
          preRenderNodeId: undefined
        });
      }),
      closeCanvasFullScreen: reactFunctionMemoHook.useMemoizedCallback(() => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.setCanvasLayoutState(chatPanelModes.PanelMode.CANVAS_ONLY));
      })
    };
  };
  let q = e => {
    let {
      translateConfig: t,
      pdfKey: a,
      pdfName: n,
      conversationId: i,
      botId: l
    } = e;
    let o = i18nTranslationUtils.useTranslationWithFallback();
    let {
      isCanvasFullScreen: s,
      closeCanvasFullScreen: c
    } = X();
    let {
      chatId: d
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let {
      skillMap: u,
      activeSkillType: p,
      closeSkillPanel: m
    } = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return {
        skillMap: e.skillMap,
        activeSkillType: d ? e.activeSkillTypeMap?.[d] : undefined,
        closeSkillPanel: e.closeSkillPanel
      };
    }, deepEqualUtil_1.deepEqual);
    let v = reactCoreLibraryReexport.useMemo(() => Object.values(u) || [], [u]);
    let {
      sendMessage: h
    } = chatSkillMessageSenderHook.useChatSkillMessageSender();
    let {
      sendMessage: _
    } = chatTranslateSkillService.translateService();
    let {
      sendMessage: g
    } = useAiChatSendMessage.useAiSendMessage();
    let {
      sendMessage: w
    } = L();
    let {
      enableImageVlm: k
    } = attachmentUploadStoreHooks.getUploadConfig();
    let y = reactCoreLibraryReexport.useMemo(() => ({
      collection_id: a,
      collection_name: n
    }), [a, n]);
    let S = reactCoreLibraryReexport.useMemo(() => v.find(e => (e == null ? undefined : e.skill_type) === chatAppEnums.SkillType.Translate), [v]);
    let A = reactCoreLibraryReexport.useMemo(() => v.find(e => (e == null ? undefined : e.skill_type) === chatAppEnums.SkillType.Search), [v]);
    let E = reactCoreLibraryReexport.useMemo(() => v.find(e => (e == null ? undefined : e.skill_type) === chatAppEnums.SkillType.ReadPDF), [v]);
    let N = reactCoreLibraryReexport.useMemo(() => v.find(e => (e == null ? undefined : e.skill_type) === chatAppEnums.SkillType.ExerciseAssistant), [v]);
    let T = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (s) {
        c();
      }
    });
    let j = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        text: n,
        area: r,
        page: l,
        sourceLanguage: o,
        targetLanguage: s
      } = e;
      if (!S || !t) {
        return;
      }
      let {
        skill_type: c
      } = S;
      let u = browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(o || t.sourceLanguage));
      let p = browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(s || t.targetLanguage)) || browserLanguageResolver.getPreferredLanguageInfo(languageCodeEnumUtils.LanguageCodeEnum.ZH);
      _({
        translateText: n,
        targetLangValue: (p == null ? undefined : p.name) || "",
        sourceLangName: u == null ? undefined : u.native,
        targetLangName: (p == null ? undefined : p.native) || "",
        chatId: i || d || "",
        extraExt: {
          pdf_hover_position: JSON.stringify({
            area: r,
            page: l,
            pdfKey: a
          }),
          send_from_canvas_action_bar: "1"
        },
        reportParams: {
          scene: "canvas_selection_translate",
          sec_scene: skillTypeMappings.getSkillActionClass(c),
          ...y
        }
      });
      T();
    });
    let I = reactFunctionMemoHook.useMemoizedCallback(e => {
      var n;
      var r;
      var l;
      var s;
      let {
        text: c,
        area: u,
        page: p
      } = e;
      if (!E) {
        return;
      }
      let m = (s = chatStoreManager.getStoreState("chatInputStore").skills) === null || s === undefined ? undefined : (l = s.input_config) === null || l === undefined ? undefined : (r = l.pdf_assistant) === null || r === undefined ? undefined : (n = r.pdf_hover_templates) === null || n === undefined ? undefined : n.find(e => e.skill_type === chatAppEnums.SkillType.ReadPDF.toString())?.key;
      if (m) {
        h({
          chatId: i || d || "",
          reportParams: {
            content_source: chatCoreConstants.MessageActions.ChangeTemplate,
            scene: "canvas_selection_explain",
            ...y
          },
          extraExt: {
            pdf_hover_position: JSON.stringify({
              area: u,
              page: p,
              pdfKey: a
            }),
            send_from_canvas_action_bar: "1"
          },
          inputSkillObj: {
            template_key: m,
            variables: {}
          },
          skillParamObj: chatInputActionUtils.getChatInputAction({
            templateKey: "explain"
          }),
          text: o("skill_copliotreading_explain"),
          refContents: [{
            type: "text",
            text: c
          }]
        });
        T();
      }
    });
    let M = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        text: t,
        area: n,
        page: r
      } = e;
      if (A) {
        w({
          text: o("search_about"),
          chatId: i || d || "",
          reportParams: {
            scene: "canvas_selection_search",
            content_source: chatCoreConstants.MessageActions.ChangeTemplate,
            ...y
          },
          refContents: [{
            type: "text",
            text: t
          }],
          extraExt: {
            pdf_hover_position: JSON.stringify({
              area: n,
              page: r,
              pdfKey: a
            }),
            send_from_canvas_action_bar: "1"
          }
        });
        T();
      }
    });
    let P = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        text: t
      } = e;
      if (t) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.setRefContents({
              refContents: [{
                type: "text",
                text: t
              }],
              channel: `skill_${chatAppEnums.SkillType.ReadPDF}`,
              source: chatAppEnums.SkillType.ReadPDF,
              scene: "canvas_selection_ask_doubao",
              reportParams: y,
              inputSkill: JSON.stringify({
                skill_id: chatAppEnums.SkillType.ReadPDF.toString(),
                skill_type: chatAppEnums.SkillType.ReadPDF,
                template_key: "query_with_reference",
                variables: {
                  reference_text: t
                }
              })
            }, chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "");
          }
        });
        T();
      }
    });
    let F = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let t;
      let {
        url: a,
        blob: n
      } = e;
      if (n) {
        t = n;
      } else if (a) {
        t = fileClipboardUtils.createFileObject(await fileClipboardUtils.fetchUrlBlob(a), "image.png");
      }
      if (t) {
        var r;
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.clearRefContents(chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig?.chatId ?? "", {
              retainDisableRef: true
            });
          }
        });
        if (p) {
          m(d || "");
        }
        let e = await chatIocServiceLoaderHook.loadServiceAsync("chatInputService");
        if (e != null && (r = e.addAttachment) !== null && r !== undefined) {
          r.call(e, {
            file: t,
            type: "image",
            ctx: {
              conversationId: i || d || "",
              chatType: "other_default",
              skillType: chatAppEnums.SkillType.ReadPDF || 0,
              skillId: chatAppEnums.SkillType.ReadPDF.toString() || "",
              uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE,
              botId: l,
              from: "",
              uploadWay: "",
              uploadCollectionWay: "single",
              uploadId: ""
            }
          });
        }
        T();
      }
    });
    let G = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        blob: t
      } = e;
      if (N && t) {
        g({
          chatId: i || d || "",
          reportParams: {
            scene: "exercise_skill_input",
            sec_scene: skillTypeMappings.getSkillActionClass(N.skill_type),
            from: "skill_input",
            ...y
          },
          image: t
        });
        T();
      }
    });
    return reactCoreLibraryReexport.useMemo(() => ({
      enableAskAIWithImage: k,
      onTranslate: S && t && j,
      onExplain: E && I,
      onSearch: A && M,
      onAskAIWithText: P,
      onAskAIWithImage: F,
      onSolveProblem: N && G
    }), [k, S, t, E, A, N]);
  };
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  let ea = e => {
    let {
      pdfId: t,
      outerPdfUrl: a,
      refreshKey: n
    } = e;
    let i = t || a;
    let [l, o] = useLocalStorageHook.useLocalStorage("read-preview-user-config");
    let [s, c] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (!i) {
        return;
      }
      let e = l == null ? undefined : l[i];
      if (!e) {
        return;
      }
      let {
        sp: t,
        s: a,
        tv: n,
        st: r,
        ot: o
      } = e;
      c({
        scrollPercent: t,
        scale: a,
        translatePageVisible: n,
        siderbarType: r,
        outlineType: o
      });
    }, [n]);
    return {
      userConfig: s,
      setUserConfig: reactFunctionMemoHook.useMemoizedCallback(e => {
        let n = t || a;
        if (!n) {
          return;
        }
        let r = function (e) {
          let t = {};
          if ("scrollPercent" in e) {
            t.sp = e.scrollPercent;
          }
          if ("scale" in e) {
            t.s = e.scale;
          }
          if ("translatePageVisible" in e) {
            t.tv = e.translatePageVisible;
          }
          if ("siderbarType" in e) {
            t.st = e.siderbarType;
          }
          if ("outlineType" in e) {
            t.ot = e.outlineType;
          }
          return t;
        }(e);
        if (!l) {
          o({
            [n]: r
          });
          return;
        }
        let i = {
          ...l
        };
        if (i[n]) {
          Object.assign(i[n], r);
        } else {
          Object.assign(i, {
            [n]: r
          });
        }
        objectExcludeFilterUtil.filterObjectExclude(i[n], e => isUndefinedCheck.isUndefined(e));
        o(i);
      })
    };
  };
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let ei = async e => {
    let {
      data: n
    } = await apiServicesCollection.ResourceApiService.GetFileURL({
      uris: [e],
      type: "file",
      expire_second: 604800
    });
    let {
      main_url: r,
      back_url: i
    } = (n == null ? undefined : n.file_urls?.[0]) ?? {};
    return r || i || "";
  };
  let el = e => {
    let {
      pdfId: t,
      outerPdfUrl: a
    } = e;
    let {
      data: n,
      loading: i
    } = useRequestHook.useRequest(async () => a || (t ? ei(t) : undefined), {
      refreshDeps: [t, a]
    });
    return reactCoreLibraryReexport.useMemo(() => ({
      pdfUrl: n,
      loading: i
    }), [n, i]);
  };
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  let em = e => {
    let {
      x0: t = 0,
      y0: a = 0,
      x1: n = 0,
      y1: r = 0
    } = e;
    return [t, a, n, r];
  };
  let ev = function (e = []) {
    return e.reduce((e, t) => {
      let {
        title: a,
        page_id: n,
        norm_box: r,
        outlines: i
      } = t;
      if (!a || isNullishCheck.isNil(n)) {
        return e;
      }
      let l = {
        title: a,
        key: `${n + 1}_${a}`,
        page: n + 1,
        area: r && em(r)
      };
      if (i == null ? undefined : i.length) {
        l.children = ev(i);
      }
      e.push(l);
      return e;
    }, []);
  };
  function eh(e) {
    return e.replace(/([\^$(){}+*?\-|\[\]\:\\])/g, "\\$1");
  }
  function e_(e, t) {
    if (e.length !== t.length) {
      return t.length - e.length;
    } else if (e === t) {
      return 0;
    } else if (e < t) {
      return -1;
    } else {
      return 1;
    }
  }
  function eg(e) {
    if (!e) {
      return "#000000";
    }
    let {
      red: t = 0,
      green: a = 0,
      blue: n = 0,
      alpha: r = 255
    } = e;
    let i = Math.max(0, Math.min(255, Math.round(t))).toString(16).padStart(2, "0");
    let l = Math.max(0, Math.min(255, Math.round(a))).toString(16).padStart(2, "0");
    let o = Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
    if (r === 255 || r === undefined) {
      return `#${i}${l}${o}`;
    }
    {
      let e = Math.max(0, Math.min(255, Math.round(r))).toString(16).padStart(2, "0");
      return `#${i}${l}${o}${e}`;
    }
  }
  let ef = "translate_image_uris";
  let ew = async e => {
    if (e) {
      try {
        let t = storagePersistenceUtil.setupPersistStorage({
          storageFn: storagePersistenceUtil.createStorageAdapter
        });
        let a = new URL(e).pathname;
        let {
          state: n
        } = (await t.getItem(ef)) || {};
        if (n == null ? undefined : n[a]) {
          return n[a];
        }
      } catch (e) {}
    }
  };
  let ek = async (e, t) => {
    if (e) {
      try {
        let a = storagePersistenceUtil.setupPersistStorage({
          storageFn: storagePersistenceUtil.createStorageAdapter
        });
        let n = new URL(e).pathname;
        let {
          state: r
        } = (await a.getItem(ef)) || {};
        if (r) {
          r[n] = t;
        } else {
          r = {
            [n]: t
          };
        }
        await a.setItem(ef, {
          state: r
        });
      } catch (e) {}
    }
  };
  let eb = e => {
    let {
      translations: t,
      allOcrData: a,
      imageBlock: n,
      imageInfo: r
    } = e;
    return t.map(e => {
      let c = a[Number(e.index ?? -1)];
      let {
        points: d,
        text_color: u,
        background_color: p
      } = c || {};
      let {
        norm_box: m
      } = n;
      if (!d || !r) {
        return;
      }
      let v = ((m == null ? undefined : m.x1) || 0) - ((m == null ? undefined : m.x0) || 0);
      let h = ((m == null ? undefined : m.y1) || 0) - ((m == null ? undefined : m.y0) || 0);
      let _ = [((m == null ? undefined : m.x0) || 0) + (d[0]?.x || 0) / r.imageWidth * v, ((m == null ? undefined : m.y0) || 0) + (d[0]?.y || 0) / r.imageHeight * h, ((m == null ? undefined : m.x0) || 0) + ((d[2]?.x || 0) + 2) / r.imageWidth * v, ((m == null ? undefined : m.y0) || 0) + ((d[2]?.y || 0) + 3) / r.imageHeight * h];
      return {
        text: e.res || "",
        area: _,
        sourceText: c.text || "",
        fontSize: 12,
        textColor: eg(u),
        backgroundColor: eg(p),
        label: "inner-image-text",
        loading: false
      };
    }).filter(Boolean);
  };
  let ex = e => e.flatMap(e => {
    let {
      page_id: t = 0,
      text_blocks: a = []
    } = e;
    if (a) {
      return a.map(e => ({
        ...e,
        page: t + 1
      }));
    } else {
      return [];
    }
  });
  let eC = e => {
    let {
      pdfId: t,
      outerPdfUrl: a
    } = e;
    let {
      loading: n,
      data: {
        pageChunks: i,
        pdfOutlines: l
      } = {}
    } = useRequestHook.useRequest(async () => {
      if (a || t) {
        try {
          for (let n of numericRangeUtil.createRange(15)) {
            var e;
            let {
              data: r = {}
            } = await apiServicesCollection.SamanthaApiService.GetPDFOcr({
              file_key: t,
              url: a,
              start_page: 0,
              end_page: 300
            });
            if ((e = r.pdf_content) !== null && e !== undefined) {
              e.forEach(e => {
                var t;
                if ((t = e.text_blocks) !== null && t !== undefined) {
                  t.forEach(e => {
                    e.font_size ||= 10;
                  });
                }
              });
            }
            let {
              status: i
            } = r;
            if (i === "success") {
              return {
                pageChunks: r.pdf_content,
                pdfOutlines: r.pdf_outlines
              };
            }
            if (i === "running") {
              await promiseAsyncUtilities.createDelayedPromise(2 ** Math.floor(n / 3) * 1000);
            }
            if (i === "timeout") {
              throw Error("ocr timeout");
            }
            if (i === "fail") {
              throw Error("ocr failed");
            }
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "flow_pdf_page_ocr_error",
            error: e
          });
          throw e;
        }
      }
    }, {
      refreshDeps: [t, a],
      cacheKey: `${t}-$${a}`,
      staleTime: -1
    });
    let o = reactCoreLibraryReexport.useMemo(() => i && ex(i), [i]);
    let s = reactCoreLibraryReexport.useMemo(() => l && ev(l), [l]);
    return {
      loading: n,
      pageChunks: i,
      blocks: o,
      pdfOutlines: l,
      outlineText: s
    };
  };
  let ey = e => {
    let {
      pdfId: t,
      outerPdfUrl: a,
      pdfScrollViewRef: n
    } = e;
    let [i, l] = reactCoreLibraryReexport.useState(false);
    let o = reactFunctionMemoHook.useMemoizedCallback(() => {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "immersive_reading_pdf_page_load_pdf_failed",
        meta: {
          pdf_id: t || "",
          outer_pdf_url: a || ""
        }
      });
      l(true);
    });
    let s = reactFunctionMemoHook.useMemoizedCallback(() => {
      var e;
      l(false);
      if ((e = n.current) !== null && e !== undefined) {
        e.refresh();
      }
    });
    reactCoreLibraryReexport.useEffect(() => () => {
      l(false);
    }, [t, a]);
    return reactCoreLibraryReexport.useMemo(() => ({
      isFailed: i,
      onFailed: o,
      reload: s
    }), [i]);
  };
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var useDeepCompareMemoHook = require("use-deep-compare-memo-hook") /*id: 880349*/;
  var arrayTakeRightUtil = require("array-take-right-util") /*id: 783389*/;
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var arxivPdfUrlChecker_1 = require("arxiv-pdf-url-checker_1") /*id: 82103*/;
  var chatBotStateConstants = require("chat-bot-state-constants") /*id: 924042*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let eW = async e => {
    var r;
    let l = (e == null ? undefined : e.create_time) ? new Date(parseInt(e.create_time.toString(), 10) * 1000) : undefined;
    if (e == null ? undefined : e.content_blocks_v2?.length) {
      let t = (r = e.content_blocks_v2) === null || r === undefined ? undefined : r.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_ATTACHMENT)?.[0];
      if (!t) {
        return [];
      }
      let {
        attachments: a
      } = t.content?.attachment_block || {};
      if (a == null ? undefined : a.length) {
        return (await Promise.all(a.map(async e => {
          if (e.type === attachmentConstants.AttachmentType.AttachmentTypeFile) {
            if (e.review_state === attachmentConstants.ReviewState.ReviewStateNotCompliant || e.parse_state === attachmentConstants.ParseState.ParseStateFail) {
              return;
            }
            let o = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.file?.name || ""));
            if (!["PDF", "Document"].includes(o)) {
              return;
            }
            return {
              key: e.file?.uri,
              fileKey: e.file?.uri,
              fileType: o,
              fileName: e.file?.name,
              bytes: Number(e.file?.size || 0),
              date: l
            };
          }
          if (e.type === attachmentConstants.AttachmentType.AttachmentTypeLink) {
            if (!e.link?.link_url || !(await arxivPdfUrlChecker_1.getArxivPdfStatus(e.link?.link_url || ""))) {
              return;
            }
            return {
              key: e.link?.link_url,
              fileUrl: e.link?.link_url,
              fileName: e.link?.link_title || e.link?.link_url,
              fileType: "PDF",
              date: l
            };
          }
        }))).filter(Boolean);
      } else {
        return [];
      }
    }
    if (e == null ? undefined : e.attachments?.length) {
      return (await Promise.all(e.attachments.map(async e => {
        switch (e.type) {
          case "file":
            {
              if (e.file_review_state === chatBotStateConstants.reviewStates.ReviewState_NotCompliant || e.file_parse_state === chatBotStateConstants.parseStates.ParseState_Failed) {
                return;
              }
              let t = fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.name || ""));
              if (!["PDF", "Document"].includes(t)) {
                return;
              }
              return {
                key: e.key,
                fileKey: e.key,
                fileType: t,
                fileName: e.name,
                bytes: e.size,
                date: l
              };
            }
          case "link":
            if (!e.url || !(await arxivPdfUrlChecker_1.getArxivPdfStatus(e.url))) {
              return;
            }
            return {
              key: e.key,
              fileUrl: e.url,
              fileName: e.url,
              fileType: "PDF",
              date: l
            };
          default:
            return;
        }
      }))).filter(Boolean);
    } else {
      return [];
    }
  };
  let eD = e => {
    let {
      chatId: t,
      maxMessages: a = 40
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState([]);
    let l = reactCoreLibraryReexport.useRef(0);
    let {
      messageLinkMap: o,
      messageMap: s
    } = chatMessageStoreFactory.createMessageStore(e => ({
      messageLinkMap: e.messageLinkMap,
      messageMap: e.messageMap
    }), deepEqualUtil_1.deepEqual);
    let c = t ? o[t] : null;
    let d = t ? s[t] : null;
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        l.current++;
        let e = l.current;
        if (!c || !d) {
          return;
        }
        let t = arrayTakeRightUtil.takeRight(c, a);
        if (!(t == null ? undefined : t.length)) {
          return;
        }
        let n = (await Promise.all(t.map(async e => {
          let t = d[e.messageId];
          return await eW(t);
        }))).flat();
        if (e === l.current) {
          i(arrayUniqByMatcher.uniqByMatcher(n, "key"));
        }
      })();
    }, [c, d]);
    return n;
  };
  let e$ = e => {
    let {
      assetListFromProps: t
    } = e;
    let a = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let n = useDeepCompareMemoHook.useDeepCompareMemo(t);
    let i = eD({
      chatId: a
    });
    return {
      assets: reactCoreLibraryReexport.useMemo(() => {
        let e = (n || []).concat(i);
        e.sort((e, t) => e.date ? t.date ? t.date.getTime() - e.date.getTime() : -1 : 1);
        return arrayUniqByMatcher.uniqByMatcher(e, "key");
      }, [n, i])
    };
  };
  let ez = e => {
    let {
      readContent: t
    } = e;
    let [a, n] = reactCoreLibraryReexport.useState(t.pdfAnchorConfig);
    let i = reactCoreLibraryReexport.useRef(t);
    reactCoreLibraryReexport.useEffect(() => {
      if (i.current.pdfId === t.pdfId && i.current.pdfUrl === t.pdfUrl) {
        n(t.pdfAnchorConfig);
      } else {
        setTimeout(() => {
          n(t.pdfAnchorConfig);
        }, 1000);
      }
      i.current = t;
    }, [t]);
    return {
      pdfAnchorConfig: a
    };
  };
  var arxivUrlNormalizer = require("arxiv-url-normalizer") /*id: 461857*/;
  var getDocumentPdfKey = require("get-document-pdf-key") /*id: 523108*/;
  let eO = e => {
    let [t, a] = reactCoreLibraryReexport.useState(e);
    reactCoreLibraryReexport.useEffect(() => {
      a(e);
    }, [e]);
    return [t, a];
  };
  let eK = e => {
    let {
      pdfId: t,
      pdfUrl: a,
      realFileKey: n,
      pdfName: i,
      assets: l,
      readContent: o
    } = e;
    let [s, c] = eO(t);
    let [d, u] = eO(a);
    let [p, m] = eO(n);
    let [v, h] = eO(i);
    let _ = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let {
        fileKey: t,
        fileType: a,
        fileUrl: n,
        fileName: r
      } = e;
      if (t) {
        let e = t;
        if (a === "Document") {
          let a = await getDocumentPdfKey.getDocumentPdfKey(t);
          if (a) {
            e = a;
          }
        }
        c(e);
        m(t);
        h(r);
        u(undefined);
      } else if (n) {
        u(arxivUrlNormalizer.normalizeArxivUrl(n));
        m(n);
        h(r || n);
        c(undefined);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (o.pdfId && o.pdfId !== s || o.pdfUrl && o.pdfUrl !== d) {
        c(o.pdfId);
        u(o.pdfUrl && arxivUrlNormalizer.normalizeArxivUrl(o.pdfUrl));
        m(o.realFileKey);
        h(o.pdfName);
      }
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (l.length && !v) {
        let e = p || d || s;
        let t = l == null ? undefined : l.find(t => t.key === e);
        h(t == null ? undefined : t.fileName);
      }
    }, [l]);
    return {
      pdfId: s,
      outerPdfUrl: d,
      realFileKey: p,
      pdfName: v,
      handleChangeActiveFile: _
    };
  };
  var translateServiceSelector = require("translate-service-selector") /*id: 512967*/;
  var browserLanguageConstants = require("browser-language-constants") /*id: 259969*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var observableFromSource = require("observable-from-source") /*id: 564103*/;
  var safeMergeMapOperator = require("safe-merge-map-operator") /*id: 396704*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var safeObservableOperator = require("safe-observable-operator") /*id: 15361*/;
  var observableOfUtility = require("observable-of-utility") /*id: 972100*/;
  var observableShareReplayOperator = require("observable-share-replay-operator") /*id: 669027*/;
  var emptyObservableInstance = require("empty-observable-instance") /*id: 724888*/;
  var observableMergeOperator = require("observable-merge-operator") /*id: 746368*/;
  var observableDelayOperator = require("observable-delay-operator") /*id: 577480*/;
  var rxjsAsyncScheduler = require("rxjs-async-scheduler") /*id: 648569*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  var observableTakeLastOperator = require("observable-take-last-operator") /*id: 766705*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var collectionPartitionFactory = require("collection-partition-factory") /*id: 505294*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var sseClientFactory = require("sse-client-factory") /*id: 474279*/;
  var sseConstants = require("sse-constants") /*id: 259486*/;
  var fileUploaderService = require("file-uploader-service") /*id: 566355*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var featureActionTypes = require("feature-action-types") /*id: 365460*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  function tv(e, t, a) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var a = e[Symbol.toPrimitive];
      if (a !== undefined) {
        var n = a.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = a;
    }
    return e;
  }
  class th {
    addPattern(e, t, a) {
      let [n, r] = t;
      e.push(eh(n));
      this.end[n] = {
        close: r,
        display: a,
        pattern: this.endPattern(r)
      };
    }
    endPattern(e) {
      return RegExp(`${eh(e)}|[{}]`, "g");
    }
    genPatterns() {
      let {
        options: e
      } = this;
      let t = [];
      let a = [];
      e.inlineMath.forEach(e => {
        this.addPattern(t, e, false);
      });
      e.displayMath.forEach(e => this.addPattern(t, e, true));
      if (t.length) {
        a.push(t.sort(e_).join("|"));
      }
      this.start = RegExp(a.join("|"), "g");
    }
    isMatchEscaped(e, t) {
      return !(t.index <= 0) && e.slice(t.index - 1, t.index) === "\\";
    }
    findEnd(e, t, a) {
      let n;
      let {
        close: r,
        pattern: i,
        display: l
      } = a;
      let o = i.lastIndex = t.index + t[0].length;
      let s = 0;
      while (n = i.exec(e)) {
        if (n[0] === r && !this.isMatchEscaped(e, n) && s === 0) {
          return {
            open: t[0],
            close: n[0],
            math: e.substr(o, n.index - o),
            start: t.index,
            end: n.index + n[0].length,
            display: l
          };
        }
        if (n[0] === "{") {
          s++;
        } else if (n[0] === "}" && s) {
          s--;
        }
      }
      return null;
    }
    findMath(e) {
      let t;
      let a = [];
      if (!this.start) {
        return a;
      }
      for (this.start.lastIndex = 0; t = this.start.exec(e);) {
        if (this.isMatchEscaped(e, t)) {
          continue;
        }
        let n = this.findEnd(e, t, this.end[t[0]]);
        if (n) {
          a.push(n);
          this.start.lastIndex = n.end;
        }
      }
      return a;
    }
    constructor(e) {
      tv(this, "options", undefined);
      tv(this, "start", null);
      tv(this, "end", {});
      this.options = Object.assign({}, th.DEFAULT_OPTIONS, e);
      this.genPatterns();
    }
  }
  tv(th, "DEFAULT_OPTIONS", {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]]
  });
  let t_ = e => e.replace(/([0-9a-f]{8})(?:\s*-\s*)([0-9a-f]{4})(?:\s*-\s*)(4[0-9a-f]{3})(?:\s*-\s*)([89ab][0-9a-f]{3})(?:\s*-\s*)([0-9a-f]{12})/gi, "$1-$2-$3-$4-$5");
  let tg = new th();
  let tf = e => {
    let t = tg.findMath(e);
    let a = {};
    let n = e;
    for (let e of t) {
      let {
        open: t,
        close: r,
        math: i
      } = e;
      let l = uuidGeneratorUtil.generateUuid();
      a[l] = e;
      n = n.replace(`${t}${i}${r}`, String(l));
    }
    return {
      text: n,
      mathMap: a
    };
  };
  let tw = (e, t, a) => {
    let n = Object.keys(t);
    if (n.length <= 0) {
      return e;
    } else {
      e = t_(e);
      return n.reduce((n, r) => {
        let {
          open: i,
          close: l,
          math: o,
          display: s
        } = t[r];
        let c = RegExp(r, "i");
        let d = n.search(c) >= 0;
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "restore-all-tex-status",
          meta: {
            succ: d,
            ...(d ? {} : {
              text: e,
              id: r,
              math: o,
              ...(a || {})
            })
          }
        });
        if (!d) {
          return n;
        }
        let u = s ? "\n" : "";
        return n.replace(c, () => `${u}${i}${o}${l}${u}`);
      }, e);
    }
  };
  let tk = "抱歉，我无法回答你的问题";
  let tb = e => {
    let {
      req: a,
      reportMeta: n,
      onMessage: r,
      onError: i,
      onFinish: l
    } = e;
    let o = "";
    let s = false;
    let {
      getCommonHeaders: c,
      getCommonParams: d
    } = flowApiConfigManager.getFlowApiOptions() ?? {};
    let u = eventReportingService.createEventReporter({
      eventName: "fetch_translate_stream",
      logger: loggerServiceCore.defaultLogger,
      meta: n
    });
    let p = sseClientFactory.createSseClient(urlParamUtils.appendUrlParams(a.url, (d == null ? undefined : d()) || {}), {
      method: "POST",
      headers: [["content-type", "application/json"], ...toEntriesUtil.toEntries((c == null ? undefined : c()) || {})],
      body: safeJsonUtils.safeStringify(a.body),
      credentials: "same-origin",
      onError: m,
      onMessage: function (e) {
        let {
          data: t = "",
          event: a
        } = e;
        if (!s) {
          u.addDurationPoint("received_first_packet");
          s = true;
        }
        switch (a) {
          case "json":
            r(safeJsonUtils.safeParse(t, {}), o);
            return;
          case "done":
            l(true);
            u.addDurationPoint("success");
            u.success();
            return;
          case "err":
            m(JSON.stringify({
              message: t,
              code: chatCoreConstants.ErrorCodes.ServerError
            }));
            throw Error(t);
          default:
            return;
        }
      },
      openInterceptor: v
    });
    function m(e) {
      let t = {
        message: "",
        code: 0
      };
      if (e instanceof Error) {
        t = {
          message: e.message,
          code: chatCoreConstants.ErrorCodes.FetchFailed
        };
      } else if (typeof e == "string") {
        t = JSON.parse(e);
      }
      u.error({
        reason: t == null ? undefined : t.message,
        meta: {
          error: t,
          log_id: o
        }
      });
      if (!p.isAborted) {
        i(t, o);
      }
    }
    async function v(e) {
      let t = e.headers.get("content-type");
      if (!(t == null ? undefined : t.startsWith(sseConstants.eventStreamMimeType))) {
        throw Error(JSON.stringify(await e.json()));
      }
      if (!(e == null ? undefined : e.ok) || !(e == null ? undefined : e.body)) {
        throw Error(JSON.stringify({
          msg: `Invalid Response, ResponseStatus: ${e.statusText}`,
          code: chatCoreConstants.ErrorCodes.ResponseIsInvalid
        }));
      }
      o = e.headers.get("x-tt-logid") || "";
    }
  };
  let tx = function (e = []) {
    let t = [];
    let a = 0;
    let n = [];
    let r = 0;
    e.forEach((e, i) => {
      if ((a += e.length) > 10000 || n.length + 1 > 50) {
        a = e.length;
        t.push({
          startIndex: r,
          value: n
        });
        r = i;
        n = [e];
      } else {
        n.push(e);
      }
    });
    if (n.length > 0) {
      t.push({
        startIndex: r,
        value: n
      });
    }
    return t;
  };
  let tC = e => {
    let {
      raw_text: t = [],
      target_lang: a,
      translate_service: n = translateServiceSelector.translateServiceEnum.LLM,
      scene: r = featureActionTypes.featureActionTypes.AIReader
    } = e;
    let i = tx(t);
    let l = (e, t) => {
      let {
        value: i,
        startIndex: o
      } = e;
      return new observableCoreClass.Observable(e => {
        let s;
        let c = new Map();
        let d = new Map();
        let u = i.map(e => tf(e));
        tb({
          req: {
            url: "/samantha/plugin/stream_article_translate",
            body: {
              raw_text: u.map(e => {
                let {
                  text: t
                } = e;
                return t;
              }),
              target_lang: a,
              translate_service: t ?? n,
              scene: r
            }
          },
          onMessage(a) {
            let {
              fallback_service: r,
              items: l
            } = a.data || {};
            s = r;
            if (l != null) {
              l.forEach(a => {
                if (!isNullishCheck.isNil(a.index) && !isNullishCheck.isNil(a.res)) {
                  let r = parseInt(a.index.toString(), 10);
                  if (isNullishCheck.isNil(t) && n === translateServiceSelector.translateServiceEnum.LLM && a.res === tk) {
                    d.set(r, i[r]);
                    return;
                  }
                  let l = {
                    ...a,
                    res: tw(a.res, u[r].mathMap, {
                      reqText: u[r].text
                    })
                  };
                  c.set(r, l);
                  e.next({
                    startIndex: o,
                    items: [l],
                    fallbackService: s
                  });
                }
              });
            }
          },
          onError(t) {
            e.error(t);
          },
          onFinish() {
            if (d.size > 0) {
              l({
                value: i.map((e, t) => d.get(t)).filter(e => !!e),
                startIndex: o
              }, translateServiceSelector.translateServiceEnum.MICROSOFT).subscribe({
                next: t => e.next(t),
                error: t => e.error(t),
                complete: () => e.complete()
              });
              loggerServiceCore.defaultLogger.persist.info({
                eventName: "read-canvas-llm-translate-reject",
                meta: {
                  rejectCount: d.size,
                  chunkCount: u.length,
                  platform: "web"
                }
              });
            } else {
              e.complete();
            }
          },
          reportMeta: {
            service: t ?? n,
            platform: "web",
            entry: "translate_pdf"
          }
        });
      });
    };
    return observableFromSource.fromAnySource(i).pipe(safeMergeMapOperator.createSafeMergeMap(e => {
      let t = Date.now();
      return l(e).pipe(observableSafeMapOperator.createSafeMapOperator(e => ({
        ...e,
        duration: Date.now() - t
      })), safeObservableOperator.createSafeOperator(a => {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "flow_pdf_page_translate_error",
          error: a
        });
        return observableOfUtility.observableOf({
          startIndex: e.startIndex,
          items: e.value.map(() => ({
            res: ""
          })),
          error: a,
          duration: Date.now() - t
        });
      }));
    }, 2), observableShareReplayOperator.shareReplayWithConfig());
  };
  let ty = e => {
    let {
      block: t,
      translateText: a,
      loading: n
    } = e;
    let {
      norm_box: r,
      text: i = "",
      font_size: l,
      is_bold: o,
      is_italic: s,
      label: c
    } = t;
    return {
      text: a || "",
      area: em(r || {
        x0: 0,
        x1: 0,
        y0: 0,
        y1: 0
      }),
      sourceText: i,
      fontSize: l,
      isBold: o,
      isItalic: s,
      label: c,
      loading: n
    };
  };
  let tS = (e, t, a) => {
    let {
      startIndex: n,
      items: r,
      error: i,
      fallbackService: l
    } = a;
    return observableFromSource.fromAnySource(r).pipe(safeMergeMapOperator.createSafeMergeMap(a => {
      let {
        res: r,
        index: o
      } = a;
      let s = t[n + Number(o)];
      if (!s) {
        return emptyObservableInstance.emptyObservable;
      }
      let {
        page: c,
        norm_box: d,
        text: u
      } = s;
      if (i && !e[c].error) {
        e[c].error = i;
        return observableOfUtility.observableOf({
          page: c,
          value: {
            error: i
          },
          fallbackService: l
        });
      }
      let p = e[c].data;
      if (d && p) {
        let e = p.findIndex(e => "sourceText" in e && e.sourceText === u && deepEqualUtil_1.deepEqual(e.area, em(d)));
        if (e > -1) {
          p[e] = ty({
            block: s,
            translateText: r
          });
        }
      }
      return observableOfUtility.observableOf({
        page: c,
        value: e[c],
        fallbackService: l
      });
    }));
  };
  let tA = e => {
    let {
      norm_box: t,
      label: a,
      loading: n,
      cleanImageUrl: r,
      textBlocks: i,
      url: l = ""
    } = e;
    return {
      area: em(t || {
        x0: 0,
        x1: 0,
        y0: 0,
        y1: 0
      }),
      url: l,
      label: a,
      loading: n,
      cleanImageUrl: r,
      textBlocks: i
    };
  };
  let tE = (e, t) => {
    let {
      page: a
    } = t;
    let n = e[a].data;
    if (n) {
      let e = n.findIndex(e => "url" in e && e.url === t.url);
      if (e > -1) {
        n[e] = tA(t);
      }
    }
    return {
      page: a,
      value: e[a]
    };
  };
  let tR = () => {
    if (!n) {
      n = new fileUploaderService.UploaderService({
        type: aiSpaceAttachmentConstants.attachmentTypes.Image,
        scene: aiSpaceAttachmentConstants.spaceSceneIds.BOT_CHAT,
        userId: chatUserInfoActions.getUserIdStr() ?? "",
        appId: uniParamsManager.uniParamsManager.getParam("aid")
      });
    }
    return n;
  };
  let tN = async e => {
    let {
      imageBlock: t,
      uploader: a,
      target_lang: n,
      translate_service: r,
      scene: i
    } = e;
    try {
      let e;
      let {
        url: l
      } = t;
      if (!l) {
        return;
      }
      let o = await ew(l);
      if (o) {
        e = o;
      } else {
        let t = await fetch(l).then(e => e.blob());
        let n = await new Promise((e, n) => {
          a.upload(t, {
            complete: t => {
              e({
                imageUri: t.uploadResult.ImageUri,
                imageMd5: t.uploadResult.ImageMd5,
                imageWidth: t.uploadResult.ImageWidth,
                imageHeight: t.uploadResult.ImageHeight
              });
            },
            error: e => {
              let {
                extra: t
              } = e;
              n(t.message);
            }
          });
        });
        if (!(n == null ? undefined : n.imageUri)) {
          return;
        }
        let {
          imageWidth: r,
          imageHeight: i
        } = n;
        if (!r || !i) {
          ({
            width: r,
            height: i
          } = await new Promise((e, a) => {
            if (!(t instanceof Blob)) {
              a(Error("参数必须是一个Blob对象"));
              return;
            }
            let n = new Image();
            let r = URL.createObjectURL(t);
            n.onload = () => {
              let t = {
                width: n.naturalWidth,
                height: n.naturalHeight
              };
              URL.revokeObjectURL(r);
              e(t);
            };
            n.onerror = () => {
              URL.revokeObjectURL(r);
              a(Error("图片加载失败"));
            };
            n.src = xssContentSanitizer.sanitizeUrl(r, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*x0-kRaT$dFcHNX$mRSZ*1NelNtcE1Na3B3Wldre*FtSXlNW*RpTWpWc1ltN$Nla3d6%214Wl-xRjBZM*hL-kdSd*JHe*tl$E-z$1ZjMWJHSkRP$zlpTWpse$kzaz$NR050%m5Wak1ua*9aRWRWZ*1SW$$uQmlTRTExWk$oT2FHTnRaREZqZHowOQ"
            });
          }));
        }
        e = {
          imageUri: n.imageUri,
          imageWidth: r,
          imageHeight: i
        };
        await ek(l, e);
      }
      let {
        data: s
      } = await apiServicesCollection.SamanthaApiService.ImageTranslate({
        uri: e.imageUri,
        target_lang: n,
        translate_service: r,
        scene: i
      });
      if (!s) {
        return;
      }
      let {
        uri: c,
        translations: d,
        ocr_data: u
      } = s;
      if (!c || !d || !u) {
        return;
      }
      let p = eb({
        translations: d,
        allOcrData: u,
        imageBlock: t,
        imageInfo: e
      });
      return {
        ...t,
        cleanImageUrl: "",
        textBlocks: p,
        loading: false
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: e
      });
      return;
    }
  };
  let tT = e => {
    let {
      imageBlocks: t = [],
      target_lang: a,
      translate_service: n = translateServiceSelector.translateServiceEnum.LLM,
      scene: r = featureActionTypes.featureActionTypes.AIReader
    } = e;
    if (!t.length) {
      return emptyObservableInstance.emptyObservable;
    }
    let i = tR();
    return observableFromSource.fromAnySource(t).pipe(safeMergeMapOperator.createSafeMergeMap(e => tN({
      imageBlock: e,
      uploader: i,
      target_lang: a,
      translate_service: n,
      scene: r
    }), 3));
  };
  let tj = e => {
    let {
      behaviorConfig: t
    } = e;
    return reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        translateBlocks: r,
        targetLanguage: i,
        translateService: l,
        sourceLanguage: o
      } = e;
      if (!(r == null ? undefined : r.length)) {
        return emptyObservableInstance.emptyObservable;
      }
      let s = {
        target_lang: browserLanguageResolver.getPreferredLanguageInfo(i ?? languageCodeEnumUtils.LanguageCodeEnum.EN)?.code ?? "en",
        translate_service: l || translateServiceSelector.translateServiceEnum.LLM
      };
      let [c, d] = collectionPartitionFactory.partitionCollection(r, e => e.label !== "image" && e.label !== "table");
      let u = tC({
        raw_text: c.map(e => {
          return e.text ?? "";
        }),
        ...s
      });
      let p = tT({
        imageBlocks: d,
        ...s
      });
      let m = safeObjectPropertyMap.safeObjectMap(collectionArrayGrouper.groupValuesToArray(r, "page"), e => ({
        loading: false,
        data: e.map(e => e.label === "image" || e.label === "table" ? tA({
          ...e,
          cleanImageUrl: "",
          textBlocks: [],
          loading: true
        }) : ty({
          block: e,
          loading: true
        }))
      }));
      let v = observableMergeOperator.mergeObservable(u.pipe(observableDelayOperator.createDelayOperator(rxjsAsyncScheduler.asyncScheduler_1), safeMergeMapOperator.createSafeMergeMap(e => e ? tS(m, c, e) : emptyObservableInstance.emptyObservable)), p.pipe(observableDelayOperator.createDelayOperator(rxjsAsyncScheduler.asyncScheduler_1), observableSafeFilter.createSafeFilter(e => !!e), observableSafeMapOperator.createSafeMapOperator(e => tE(m, e))));
      u.pipe(observableTakeLastOperator.takeLastOperator(1)).subscribe(e => {
        var a;
        if (t != null && (a = t.onTranslateReqFinish) !== null && a !== undefined) {
          a.call(t, {
            hasError: e.error,
            duration: e.duration,
            sourceLanguage: o,
            targetLanguage: i,
            clickFrom: "canvas_function_translate",
            translateService: l || translateServiceSelector.translateServiceEnum.LLM
          });
        }
      });
      return v;
    });
  };
  let tI = () => e => {
    let {
      targetLanguage: t,
      text: a
    } = e;
    let n = browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(browserLanguageConstants.languageConstants.BrowserLanguage));
    let r = browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(t)) || browserLanguageResolver.getPreferredLanguageInfo(languageCodeEnumUtils.LanguageCodeEnum.ZH);
    return new observableCoreClass.Observable(e => {
      tb({
        req: {
          url: "/samantha/plugin/stream_article_translate",
          body: {
            raw_text: [a],
            target_lang: (r == null ? undefined : r.code) || (n == null ? undefined : n.code) || "en",
            translate_service: translateServiceSelector.translateServiceEnum.LLM,
            scene: featureActionTypes.featureActionTypes.AIReader
          }
        },
        onMessage(t) {
          var n;
          var r;
          let i = (r = t.data) === null || r === undefined ? undefined : (n = r.items) === null || n === undefined ? undefined : n[0]?.res;
          if (i) {
            e.next(i);
          }
        },
        onError(t) {
          e.error(t);
        },
        onFinish() {
          e.complete();
        }
      });
    });
  };
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var i18nLanguageConstants = require("i18n-language-constants") /*id: 437736*/;
  let tF = async e => {
    try {
      if (!(e = e.trim())) {
        return;
      }
      let {
        franc: t
      } = await asyncRetryUtils.retryPromise(() => require.e("language-detection") /*id: 25841*/.then(require.bind(require, "language-detection-module") /*id: 433535*/));
      let n = t(e);
      return i18nLanguageConstants.languageCodeMap[n];
    } catch (e) {
      return;
    }
  };
  let tL = e => {
    let {
      pageChunks: t
    } = e;
    let [a, n] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      let e = safeArrayFlattenUtil.safeFlattenArray([0, 1].map(e => {
        return (t == null ? undefined : t[e]?.text_blocks) || [];
      }));
      let a = (e == null ? undefined : e.map(e => (e == null ? undefined : e.text) || "").filter(e => !!e).join(" ")) || "";
      if (a) {
        tF(a).then(e => {
          n(e);
        }).catch(e => {});
      }
    }, [t, tF]);
    reactCoreLibraryReexport.useEffect(() => () => {
      n(undefined);
    }, [t]);
    return {
      pdfLanguage: a
    };
  };
  let tZ = e => {
    let {
      pageChunks: t,
      ocrDataLoading: a,
      behaviorConfig: n
    } = e;
    let {
      openLoginModal: i
    } = chatLoginModalManager.loginModalManager();
    let [l, o] = reactCoreLibraryReexport.useState();
    let {
      pdfLanguage: s
    } = tL({
      pageChunks: t
    });
    let c = tj({
      behaviorConfig: n
    });
    let d = tI();
    let u = reactCoreLibraryReexport.useMemo(() => ({
      disabled: a || !t,
      pdfLanguage: s,
      defaultConfig: {
        translateService: translateServiceSelector.translateServiceEnum.LLM,
        showOriginalText: true,
        showTranslateImage: true,
        sourceLanguage: 0,
        targetLanguage: browserLanguageConstants.languageConstants.BrowserLanguage,
        enabled: false
      },
      fetchTranslate: c,
      fetchAITranslate: d,
      onConfigChange: o
    }), [a, t, s, c, d, o]);
    let p = reactFunctionMemoHook.useMemoizedCallback(() => userInfoStatusSelectors.isUserInfoFailed() ? (i({
      trackInfo: {
        source: trackingEventConstants.trackingEvents.PDF_CANVAS_TRANSLATE
      },
      onSuccess: chatSidebarStateManager.openSidebarIfDid
    }), Promise.resolve(false)) : Promise.resolve(true));
    return reactCoreLibraryReexport.useMemo(() => ({
      translateConfig: u,
      currentTranslateConfig: l,
      beforeTranslate: p
    }), [u, l]);
  };
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  let tD = e => {
    let {
      conversationId: t
    } = e;
    let {
      conversationId: a,
      botId: n
    } = chatFeedStoreFactory.useFeedStore(e => {
      var n;
      return {
        conversationId: ((n = e.localConversationMap[t]) === null || n === undefined ? undefined : n.local?.newConversationId) || t,
        botId: chatConversationSelectors_2.getBotId(e) || ""
      };
    }, deepEqualityUtil_1.isDeepEqual);
    return {
      conversationId: a,
      botId: n
    };
  };
  let t$ = e => {
    let {
      openFrom: t = ""
    } = e;
    return {
      logCanvasOpen: reactFunctionMemoHook.useMemoizedCallback(() => {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "read_canvas_open",
          meta: {
            openFrom: t,
            readCanvasLogV2: "1"
          }
        });
      }),
      logCanvasClose: reactFunctionMemoHook.useMemoizedCallback(() => {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "read_canvas_close",
          meta: {
            openFrom: t,
            readCanvasLogV2: "1"
          }
        });
      })
    };
  };
  let tz = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactCoreLibraryReexport.useMemo(() => ({
      outline_hidden: e("copilot_hide_sidebar"),
      outline_page_title: e("copilot_sidebar_menu_page"),
      outline_page_desc: e("copilot_sidebar_desc_page"),
      outline_text_title: e("copilot_sidebar_menu_outline"),
      outline_text_desc: e("copilot_sidebar_desc_outline"),
      outline_image_title: e("copilot_sidebar_menu_chart"),
      outline_image_desc: e("copilot_sidebar_desc_chart"),
      translate_all_article: e("skill_copliotreading_translate_all"),
      translate_source_language: e("skill_copliotreading_translate_source"),
      translate_target_language: e("skill_copliotreading_translate_to"),
      translate_show_raw_article: e("skill_copliotreading_translate_display_orignial"),
      translate_save_config: e("skill_copliotreading_translate_save_setting"),
      translate_auto_detect: e("skill_copliotreading_translate_autodetect"),
      translate_browser_language: e("skill_copliotreading_translate_browser_lang"),
      translate_loading: e("skill_copliotreading_toast_translating"),
      translate_switch_off: e("skill_copliotreading_translate_close"),
      translate_if_need_translate: e("skill_copliotreading_trans_confirm"),
      translate_translate_language_same_tooltip: e("flow_web_ext_sidebar_translate_notify"),
      translate_settings: e("skill_copliotreading_translation_setting"),
      translate_start: e("skill_copliotreading_start_translation"),
      translate_huoshan: e("skill_copliotreading_translate_huoshan"),
      translate_microsoft: e("skill_copliotreading_translate_microsoft"),
      translate_ai: e("flow_web_translateservice_enhanced"),
      translate_copy: e("cici_desktop_text_selection_skill_copy"),
      zoom_in_tooltip: e("read_file_zoom_in"),
      zoom_out_tooltip: e("read_file_zoom_out"),
      download_source_tooltip: e("read_file_download"),
      translate_disabled_tooltip: e("copilot_translate_OCR_failed"),
      screencapture_disable_tooltip: e("skill_copliotreading_screencapture_disable_tooltip"),
      exit_immersive_reading_tooltip: e("skill_copliotreading_exit"),
      hover_toolbar_ai_search: e("skill_search_title2"),
      hover_toolbar_explain: e("flow_web_ext_action_explain"),
      hover_toolbar_translate: e("flow_web_ext_action_translate"),
      hover_toolbar_copy: e("cici_desktop_text_selection_skill_copy"),
      toast_copy_success: e("skill_copliotreading_copy_success"),
      hover_toolbar_extract: e("skill_copliotreading_extract"),
      screenshot_capture: e("cici_desktop_screenshot_capture"),
      hover_toolbar_viewpic: e("skill_copliotreading_viewpic"),
      hover_toolbar_solve_problem: e("skill_label_solve_problem"),
      hover_toolbar_ask_ai: e("skill_copliotreading_askDoubao"),
      asset_list_close_sidebar: e("skill_copliotreading_collapse_tableofcontent"),
      asset_list_multi_title: e("skill_copliotreading_subtext_articles"),
      skill_read_period_today: e("skill_read_period_today"),
      skill_read_period_yesterday: e("skill_read_period_yesterday"),
      skill_read_period_days_earlier: e("skill_read_period_days_earlier"),
      skill_read_period_months_earlier: e("skill_read_period_months_earlier"),
      skill_read_period_weeks_earlier: e("skill_read_period_weeks_earlier"),
      skill_read_period_years_earlier: e("skill_read_period_years_earlier"),
      skill_copliotreading_fullscreen: e("skill_copliotreading_fullscreen"),
      skill_copliotreading_fullscreen_exit: e("skill_copliotreading_fullscreen_exit"),
      skill_copliotreading_contentoutline: e("skill_copliotreading_contentoutline"),
      skill_copliotreading_multifiles: e("skill_copliotreading_multifiles"),
      skill_copliotreading_multifiles_tooltip: e("skill_copliotreading_multifiles_tooltip"),
      read_tooltip_outline: e("read_tooltip_outline", {
        s_fileTopic: "{s_fileTopic}"
      }),
      translate_service_tips: e("skill_copliotreading_translate_tips"),
      translate_service_label: e("read_translate_service"),
      translate_in_progress: e("skill_copliotreading_toast_translating"),
      translate_doubao: e("flow_web_ext_sidebar_settings_translateservice_doubao"),
      translate_cici: e("dolaPC_web_ext_sidebar_settings_translateservice_dola"),
      translate_text_inside_image: e("extension_ai_image_translate_image_text"),
      ai_reading_translationDownload_download: e("ai_reading_translationDownload_download"),
      ai_reading_translationDownload_translating: e("ai_reading_translationDownload_translating"),
      ai_reading_cancel: e("ai_reading_cancel"),
      ai_reading_translationDownload_exporting: e("ai_reading_translationDownload_exporting"),
      ai_reading_translationDownload_downloading: e("ai_reading_translationDownload_downloading"),
      ai_reading_translationDownload_exceedLimit: e("ai_reading_translationDownload_exceedLimit"),
      read_translate_toast_serviceChange_capacity: e("read_translate_toast_serviceChange_capacity", {
        s_transService1: "{s_transService1}",
        s_transService2: "{s_transService2}"
      }),
      read_translate_toast_serviceChange_downloadNA: e("read_translate_toast_serviceChange_downloadNA", {
        s_transService1: "{s_transService1}",
        s_transService2: "{s_transService2}"
      }),
      read_translate_tag_translated: e("read_translate_tag_translated"),
      read_pageSize_autoFit: e("read_pageSize_autoFit"),
      read_pageSize_width: e("read_pageSize_width"),
      read_pageSize_height: e("read_pageSize_height"),
      read_pageSize_actualSize: e("read_pageSize_actualSize"),
      read_pageSize_autoFit_tooltip_unsupported: e("read_pageSize_autoFit_tooltip_unsupported"),
      onboarding_highlight_title: e("ai_reading_onboarding_highlight_title"),
      onboarding_highlight_desc: e("ai_reading_onboarding_highlight_desc"),
      onboarding_translate_title: e("ai_reading_onboarding_translate_title"),
      onboarding_translate_desc: e("ai_reading_onboarding_translate_desc"),
      onboarding_screenshot_title: e("ai_reading_onboarding_screenshot_title"),
      onboarding_screenshot_desc: e("ai_reading_onboarding_screenshot_desc"),
      onboarding_next: e("ai_reading_onboarding_next"),
      onboarding_done: e("ai_reading_onboarding_done")
    }), [e]);
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatPanelLayoutResolver = require("chat-panel-layout-resolver") /*id: 424315*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let tV = e => {
    let {
      conversationId: t,
      botId: a,
      messageId: n,
      collectionId: l,
      collectionName: o,
      skillType: s,
      customTeaParams: c
    } = e;
    let d = reactCoreLibraryReexport.useRef();
    let [u, p] = reactCoreLibraryReexport.useState(s);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        p(s);
      } else {
        let t = m();
        if (t && t.skill?.skill_type === aiAssistantSkillTypes.SkillTypes.SkillRead) {
          p(chatAppEnums.SkillType.ReadPDF);
        } else {
          p(s);
        }
      }
    }, [l]);
    let m = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (n) {
        return conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t, n);
      }
    });
    let v = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (objectPathGetDefault.getObjectPathDefault(t, "super_task_id")) {
        if (e === "output_preview_show" || e === "output_preview_click") {
          return throttledOmitPathStringify.omitPathStringify(t, "content_type");
        }
        if (e === "download") {
          return t;
        }
        if (e === "copy") {
          return {
            super_task_id: objectPathGetDefault.getObjectPathDefault(t, "super_task_id"),
            super_task_mode: objectPathGetDefault.getObjectPathDefault(t, "super_task_mode"),
            user_type: objectPathGetDefault.getObjectPathDefault(t, "user_type")
          };
        }
      }
    });
    let {
      service: h
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let _ = reactFunctionMemoHook.useMemoizedCallback(e => {
      let i = m();
      return {
        conversation_id: t || null,
        bot_id: a,
        message_id: n || null,
        section_id: (i == null ? undefined : i.section_id) ?? null,
        skill_id: u ? String(u) : null,
        skill_name: u ? skillTypeMappings.getSkillName(u) : null,
        collection_id: l,
        collection_name: o,
        ...(() => {
          let t = h == null ? undefined : h.getCanvasTeaParams();
          let a = v(e, c);
          if (isEmptyUtil.isEmpty(a)) {
            return t;
          } else {
            return {
              ...t,
              ...a
            };
          }
        })(),
        canvas_type: "read",
        show_status: "show"
      };
    });
    return reactCoreLibraryReexport.useMemo(() => ({
      onCanvasShow() {
        teaAnalyticsEventTracker.trackEvent("output_preview_show", {
          ..._("output_preview_show"),
          show_status: "show"
        });
        d.current = Date.now();
      },
      onCanvasExit() {
        teaAnalyticsEventTracker.trackEvent("output_preview_exit", {
          ..._("output_preview_exit"),
          canvas_type: "read",
          show_status: "show",
          layout_type: chatPanelLayoutResolver.resolvePanelMode({
            canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
          }),
          stay_duration: d.current ? Date.now() - d.current : -1
        });
      },
      onDownloadDropdownShow() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "download"
        });
      },
      onDownload() {
        teaAnalyticsEventTracker.trackEvent("download", {
          ..._("download"),
          click_from: "canvas_function",
          is_translated: 0
        });
      },
      onOpenFullScreen() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "full_screen"
        });
      },
      onCloseFullScreen() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "exit_full_screen"
        });
      },
      onClosePanel() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "close"
        });
      },
      onSwitchAsset() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "switch_file"
        });
      },
      onClickSwitchAsset(e) {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "switch_file_icon",
          open: e ? "open" : "close"
        });
      },
      onClickTranslate() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "translation"
        });
      },
      onClickCrop() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "screen_shot_ask_doubao"
        });
      },
      onOpenCatalog() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "catalog_expand"
        });
      },
      onCloseCatalog() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "catalog_fold"
        });
      },
      onZoomIn() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "zoom_in"
        });
      },
      onZoomOut() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "zoom_out"
        });
      },
      onPageSwitch() {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ..._("output_preview_click"),
          button_name: "page_switch"
        });
      },
      onShowCatalog() {
        teaAnalyticsEventTracker.trackEvent("canvas_read_catalog_show", {
          ..._("canvas_read_catalog_show")
        });
      },
      onClickCatalog(e) {
        let {
          outlineName: t,
          action: a
        } = e;
        teaAnalyticsEventTracker.trackEvent("canvas_read_catalog_click", {
          ..._("canvas_read_catalog_click"),
          tab_name: t,
          button_name: a
        });
      },
      onShowPopoverToolbar() {
        teaAnalyticsEventTracker.trackEvent("text_selection_bar_show", {
          ..._("text_selection_bar_show")
        });
      },
      onClickPopoverToolbar(e) {
        let {
          button: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("text_selection_bar_click", {
          ..._("text_selection_bar_click"),
          button_name_level_one: t
        });
      },
      onCopy() {
        teaAnalyticsEventTracker.trackEvent("copy", {
          ..._("copy"),
          click_from: "canvas_selection_bar"
        });
      },
      onAnyClick() {
        teaAnalyticsEventTracker.trackEvent("output_preview_act_click", {
          ..._("output_preview_act_click")
        });
      },
      onScrollPage(e) {
        teaAnalyticsEventTracker.trackEvent("output_preview_slide", {
          ..._("output_preview_slide"),
          screen_rate: 1,
          slide_direction: e
        });
      },
      onShowTranslateMoreList() {
        teaAnalyticsEventTracker.trackEvent("canvas_translate_list_show", {
          ..._("canvas_translate_list_show")
        });
      },
      onClickTranslateMoreList(e) {
        let {
          button: t,
          showOriginalText: a,
          showTranslateImage: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("canvas_translate_list_click", {
          ..._("canvas_translate_list_click"),
          button_name: (() => {
            let e = {
              original_language: "from_lan",
              translated_language: "to_lan",
              translate_service: "translate_type"
            };
            if (e[t]) {
              return e[t];
            }
            switch (t) {
              case "show_original_text":
                return `show_original_content_${a ? "on" : "off"}`;
              case "show_translate_image":
                return `ocr_translate_${n ? "on" : "off"}`;
              default:
                return "";
            }
          })()
        });
      },
      onTranslateReqFinish: e => {
        let {
          hasError: n,
          duration: r,
          sourceLanguage: i,
          targetLanguage: l,
          clickFrom: o,
          translateService: s
        } = e;
        teaAnalyticsEventTracker.trackEvent("canvas_translate_status", {
          ..._("canvas_translate_status"),
          status: +!n,
          duration: r,
          from_lan: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(i))?.code || "",
          to_lan: browserLanguageResolver.getPreferredLanguageInfo(browserLanguageResolver.resolveLanguageEnum(l))?.code || "",
          click_from: o,
          translate_type: {
            [translateServiceSelector.translateServiceEnum.LLM]: "doubao",
            [translateServiceSelector.translateServiceEnum.HUOSHAN]: "volcano_engine",
            [translateServiceSelector.translateServiceEnum.MICROSOFT]: "microsoft"
          }[s]
        });
      },
      onShowOnboarding() {
        teaAnalyticsEventTracker.trackEvent("copilot_popup_show", {
          ..._("copilot_popup_show")
        });
      },
      onClickOnboarding(e) {
        let {
          button_name: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("copilot_popup_click", {
          ..._("copilot_popup_click"),
          button_name: t
        });
      },
      onDownloadTranslation(e) {
        teaAnalyticsEventTracker.trackEvent("download", {
          ..._("download"),
          click_from: "canvas_function",
          is_translated: 1,
          ...e
        });
      },
      onCancelDownloadTranslation(e) {
        teaAnalyticsEventTracker.trackEvent("cancal_translation_click", {
          ..._("cancal_translation_click"),
          ...e
        });
      },
      onExportTranslation() {
        teaAnalyticsEventTracker.trackEvent("export_success", {
          ..._("export_success")
        });
      }
    }), []);
  };
  var buttonComponent = require("button-component") /*id: 899242*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  let tq = e => {
    let {
      onReload: t
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "container-ZfFMzD",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "modal-IAUL8J",
        children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
          className: "icon-BbFHgf"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "title-m_e5PZ",
          children: a("file_load_error")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "sub-title-IKGFEc",
          children: a("skill_copliotreading_link_error")
        }), reactJsxRuntimeCoreReexport.jsx(buttonComponent.Button, {
          className: "button-dflwZw",
          type: "primary",
          width: "fit",
          onClick: t,
          children: a("reload_page_btn")
        })]
      })
    });
  };
  let tY = e => {
    let {
      conversationId: o,
      messageId: s,
      readContent: c,
      previewCoverUrl: u,
      isCanvasOpened: p,
      disableActions: m,
      saveCanvasOpenState: v,
      removeCanvasOpenState: x,
      customRawFileDownload: C
    } = e;
    let y = chatFgStoreHooks.getSourceValue("disable_pdf_translate_service", {
      defaultValue: "0",
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1";
    let {
      assetList: S,
      openFrom: A
    } = c || {};
    let {
      assets: E
    } = e$({
      assetListFromProps: S
    });
    let {
      pdfId: R,
      outerPdfUrl: N,
      realFileKey: T,
      pdfName: j,
      handleChangeActiveFile: I
    } = eK({
      pdfId: c.pdfId,
      pdfUrl: c.pdfUrl,
      realFileKey: c.realFileKey,
      pdfName: c.pdfName,
      assets: E,
      readContent: c
    });
    let M = reactCoreLibraryReexport.useRef(null);
    let {
      conversationId: P,
      botId: F
    } = tD({
      conversationId: o
    });
    let L = tz();
    let Z = tV({
      conversationId: P,
      botId: F,
      messageId: s,
      collectionId: R || N,
      collectionName: j,
      skillType: c.teaCtx?.skillType,
      customTeaParams: c.teaCtx?.customTeaParams
    });
    let {
      data: B
    } = useLauncherSetting.useLauncherSetting();
    let {
      pdfUrl: W,
      loading: D
    } = el({
      pdfId: R,
      outerPdfUrl: N
    });
    let {
      pdfAnchorConfig: $
    } = ez({
      readContent: c
    });
    let {
      userConfig: z,
      setUserConfig: H
    } = ea({
      refreshKey: W,
      pdfId: R,
      outerPdfUrl: N
    });
    let {
      pageChunks: U,
      loading: O,
      blocks: K,
      outlineText: Q
    } = eC({
      pdfId: R,
      outerPdfUrl: N
    });
    let {
      isFailed: J,
      onFailed: V,
      reload: G
    } = ey({
      pdfId: R,
      outerPdfUrl: N,
      pdfScrollViewRef: M
    });
    let {
      translateConfig: Y,
      currentTranslateConfig: ee,
      beforeTranslate: et
    } = tZ({
      pageChunks: U,
      ocrDataLoading: O,
      blocks: K,
      behaviorConfig: Z
    });
    let en = q({
      translateConfig: ee,
      pdfKey: N ?? R,
      pdfName: j,
      conversationId: P,
      botId: F
    });
    let er = reactCoreLibraryReexport.useMemo(() => ({
      ...en,
      blocks: K
    }), [en, K]);
    let {
      isCanvasFullScreen: ei,
      openCanvasFullScreen: eo,
      closeCanvasFullScreen: es
    } = X();
    let {
      beforeDownload: ec
    } = function () {
      let {
        openLoginModal: e
      } = chatLoginModalManager.loginModalManager();
      return {
        beforeDownload: reactFunctionMemoHook.useMemoizedCallback(() => userInfoStatusSelectors.isUserInfoFailed() ? (e({
          trackInfo: {
            source: trackingEventConstants.trackingEvents.PDF_CANVAS_DOWNLOAD
          },
          onSuccess: chatSidebarStateManager.openSidebarIfDid
        }), Promise.resolve(false)) : Promise.resolve(true))
      };
    }();
    let ed = t$({
      openFrom: A
    });
    let eu = reactFunctionMemoHook.useMemoizedCallback(() => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      if (x != null) {
        x(P);
      }
      ed.logCanvasClose();
    });
    reactCoreLibraryReexport.useEffect(() => {
      Z.onCanvasShow();
      if (v != null) {
        v({
          conversationId: P,
          messageId: s,
          readContent: throttledOmitPathStringify.omitPathStringify(c, ["teaCtx"])
        });
      }
      ed.logCanvasOpen();
      return () => {
        Z.onCanvasExit();
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      aiSpaceEventReporter.reportFileOpen({
        key: T
      });
    }, []);
    let ep = reactFunctionMemoHook.useMemoizedCallback(() => {
      performanceStoreHook.usePerformanceStore.setState({
        urlActionDuration: {
          ...performanceStoreHook.usePerformanceStore.getState().urlActionDuration,
          urlActionCanvasEndTime: Date.now()
        }
      });
    });
    return reactJsxRuntimeCoreReexport.jsx(h, {
      isCanvasFullScreen: ei,
      openCanvasFullScreen: eo,
      closeCanvasFullScreen: es,
      disableTranslateServiceSelect: y,
      controllerRef: M,
      url: W,
      fileName: j,
      previewCoverUrl: u,
      loading: D || !p,
      page: $ == null ? undefined : $.page,
      highlightAreas: $ == null ? undefined : $.areas,
      proxyDomains: (B == null ? undefined : B.ai_reader?.proxy_domains) || [],
      onLoadError: V,
      onClose: eu,
      translateConfig: Y,
      toolbarConfig: er,
      pageChunks: U,
      ocrOutlineText: Q,
      ocrDataLoading: O,
      activeAssetKey: T || N || R,
      assetList: E,
      onSwitchAsset: I,
      i18nConfig: L,
      behaviorConfig: Z,
      extraNode: J && reactJsxRuntimeCoreReexport.jsx(tq, {
        onReload: G
      }),
      userConfig: z,
      setUserConfig: H,
      beforeDownload: ec,
      customRawFileDownload: C,
      beforeTranslate: et,
      onMount: ep,
      disableActions: m
    });
  };
  require.d(exports, {
    ReadCanvas: function () {
      return tY;
    }
  });
}