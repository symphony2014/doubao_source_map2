// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'ChatUrlActionPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69318.ea56e137.js
         * chunkId: 69318
         * moduleId: 742349
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var chatConstants = require("chat-constants") /*id: 777970*/;
  var chatFileOpenHandler = require("chat-file-open-handler") /*id: 145253*/;
  var chatCanvasContentOpener = require("chat-canvas-content-opener") /*id: 559958*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var messageAttachmentBlockFactory = require("message-attachment-block-factory") /*id: 930060*/;
  var chatRefsContext = require("chat-refs-context") /*id: 184894*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var conversationIdBroadcast = require("conversation-id-broadcast") /*id: 522337*/;
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  async function b(e) {
    return Promise.resolve(false);
  }
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  let L = {
    matcher: e => aiActionConstants.aiActionConstants.Send_Message === e,
    handler: async function (e) {
      let {
        payload: i,
        sendMessage: l,
        sendMessageV2: o,
        toggleDeepThink: s,
        options: c,
        updateActiveSkillTypeMap: d,
        openReadCanvasByFile: u,
        openReadCanvasByLink: p,
        openCodingCanvasByKey: m,
        openCodingCanvasByRepo: _,
        updateRefContents: v,
        toggleSuperTask: h
      } = e;
      if (!i) {
        return;
      }
      let f = Array.isArray(i) ? i : [i];
      if ((c == null ? undefined : c.deepThinkingSwitchValue) !== undefined || (c == null ? undefined : c.deepThinkingActiveType) !== undefined) {
        await s({
          deepThinkingSwitchValue: c.deepThinkingSwitchValue,
          deepThinkingActiveType: c.deepThinkingActiveType
        });
      }
      if (f.some(e => {
        let a = safeJsonUtils.safeParse(e == null ? undefined : e.extraExt?.input_skill, {});
        let n = aiAssistantSkillTypes.SkillTypes.DesExtSkillSuperTask;
        return (a == null ? undefined : a.skill_type) === n || (a == null ? undefined : a.skill_type) === `${n}`;
      })) {
        let e = c == null ? undefined : c.superTaskStatus?.safeToken;
        if (!e || !(await b(e))) {
          samanthaToastFactory.toastInstance.error("检测到豆包超能模式非正常访问，请注意浏览的网站是否安全");
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "super_task_attack_risk",
            error: Error("super_task_attack_risk"),
            meta: {
              token: e
            }
          });
          chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToChatGuidancePage());
          return;
        }
      }
      if (c == null ? undefined : c.superTaskStatus) {
        h(c.superTaskStatus || {
          switchValue: chatConstants.taskTypes.SuperTask,
          taskMode: chatConstants.complexityLevels.Simple
        });
      }
      if ((c == null ? undefined : c.activeSkill) && (c == null ? undefined : c.activeSkill.skillId) && (c == null ? undefined : c.activeSkill.skillId) && (c == null ? undefined : c.activeSkill.skillFrom)) {
        d(c == null ? undefined : c.activeSkill.skillId, c == null ? undefined : c.activeSkill.skillFrom);
      }
      if (c == null ? undefined : c.openReadCanvas) {
        let {
          link: e,
          fileName: t,
          uri: a
        } = c.openReadCanvas;
        if (a && t) {
          u(a, {
            fileName: t
          });
        } else if (e) {
          p(e);
        }
      }
      if (c == null ? undefined : c.openCodingCanvas) {
        let {
          key: e,
          repoId: t,
          repoName: a,
          repoUrl: n,
          type: i
        } = c.openCodingCanvas;
        if (e) {
          m(e, {
            attachments: [{
              type: i,
              key: e
            }]
          });
        } else if (t && a && n) {
          _({
            id: t,
            name: a,
            url: n
          });
        }
      }
      if ((c == null ? undefined : c.setRefContent?.skillId) && Array.isArray(c == null ? undefined : c.setRefContent?.refContents)) {
        let e = c.setRefContent.refContents.map(e => {
          let {
            type: t,
            fileKey: a,
            fileName: n,
            link: i,
            text: l
          } = e;
          return {
            type: t,
            fileKey: a,
            fileName: n,
            link: i,
            text: l
          };
        });
        v(c.setRefContent.skillId, e);
      }
      if (c == null ? undefined : c.useBlockMessage) {
        o(i.message, i.reportParams);
      } else {
        l(f, undefined, true);
      }
    }
  };
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  let D = e => /\/chat(\/\d*)?$/.test(e);
  function M(e) {
    var t;
    let {
      onReadyToParse: a = () => Promise.resolve(),
      isLazy: $ = false,
      plugins: b,
      phase2StartTime: E,
      resolveLocalConversationId: N,
      sendMessage: M
    } = e;
    let x = useNavigateRuntimeResolver.useNavigateResolver();
    let F = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId ?? "",
        chatType: e.currentChatViewConfig?.chatType ?? chatConversationTypes.ConversationTypes.ThreadLocalConversation
      };
    }, deepEqualityUtil.deepEqual);
    let O = chatServiceContext.useChatService("chatMessageService");
    let {
      openFileByKey: Z,
      openRepo: K,
      openArtifact: B
    } = chatCanvasContentOpener.useContentOpener();
    let {
      openFileByKey: z,
      openFileByLink: V
    } = chatFileOpenHandler.createChatFileHandler({
      chatViewConfig: F
    });
    let {
      openImageCanvas: U
    } = {
      openImageCanvas: e => {
        let {
          image: t,
          canvasLayoutState: a,
          imageCanvasInitStatus: n
        } = e;
        let {
          uri: i,
          url: l,
          name: r,
          width: o,
          height: s,
          initialEditTool: c
        } = t || {};
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "UrlAction_OpenImageCanvasStart"
        });
        let d = {
          url: l,
          format: getFileExtension.getFileExtension(r || ""),
          width: o ?? 200,
          height: s ?? 200
        };
        let u = {
          key: i,
          image_raw: d,
          image_ori: d,
          feedback: "",
          request_id: "",
          description: ""
        };
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          var t;
          if (e == null) {
            return undefined;
          } else if ((t = e.openCanvasPanel) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(e, {
              conversationId: "",
              messageId: "",
              canvasLayoutState: a,
              imageEditorProps: {
                imageCanvasInitStatus: n,
                image: u,
                autoScrollIntoViewMessageId: undefined,
                initialEditTool: c || "default",
                imageList: [u],
                editImageConfig: {},
                isLocalUploadImage: true,
                skillId: chatAppEnums.SkillType.ImageGeneration.toString(),
                skillName: "images_generation",
                onClose: () => {
                  chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
                }
              }
            });
          }
        });
      }
    };
    let [J, j] = edenxSearchParamsHook.resolveSearchParams();
    let H = reactCoreLibraryReexport.useRef(false);
    let X = reactCoreLibraryReexport.useRef("");
    let G = (t = J.get("action")) === null || t === undefined ? undefined : t.trim();
    let Q = J.get("preSendId");
    let q = reactCoreLibraryReexport.useRef(Date.now());
    let Y = reactCoreLibraryReexport.useRef();
    let ee = reactCoreLibraryReexport.useRef();
    let et = () => {
      if (D(X.current)) {
        let {
          pfTrackParams: e,
          pluginId: t
        } = ee.current || {};
        if (e) {
          performanceStoreHook.usePerformanceStore.setState({
            urlActionDuration: {
              urlActionNavEndTime: Date.now(),
              urlActionCanvasEventName: e.phaseCanvasRenderEventName || `urlparseplugin_canvasrender_duration${t ? `_${t}` : ""}`
            }
          });
        }
      }
    };
    let ea = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      z(...t);
      et();
    };
    let en = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      V(...t);
      et();
    };
    let ei = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      Z(...t);
      et();
    };
    let el = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      K(...t);
      et();
    };
    let er = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      B(...t);
      et();
    };
    let eo = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      Y.current ||= Date.now();
      let n = t == null ? undefined : t[0];
      if (typeof n == "string") {
        let e = n.split("?");
        let a = e[0];
        let i = new URLSearchParams(e[1] || "");
        let l = new URLSearchParams(J);
        l.delete("action");
        for (let [e, t] of i) {
          l.set(e, t);
        }
        t[0] = `${a}?${l.toString()}`;
      }
      return x(...t);
    };
    let es = async (e, t) => {
      let a = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
      if (a != null) {
        a.sendMessage({
          message: {
            ...e,
            local_conversation_id: N,
            conversation_type: chatCoreConstants.BotTypes.CocoSub
          },
          session: {
            reportParams: t
          }
        });
      }
    };
    let ec = function () {
      var t = arguments.length;
      var a = Array(t);
      var n = 0;
      for (; n < t; n++) {
        a[n] = arguments[n];
      }
      Y.current ||= Date.now();
      try {
        if (a[2]) {
          let t = Array.isArray(a[0]) ? a[0]?.[0] : a[0];
          let {
            extraExt: n,
            reportParams: i
          } = t || {};
          let {
            input_skill: l
          } = n || {};
          let r = {};
          if (typeof l == "string") {
            try {
              r = JSON.parse(l);
            } catch (e) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "urlaction_transform_blockmessage_parseskill_fail",
                error: e
              });
            }
          }
          if ((r == null ? undefined : r.skill_type) === aiChatEnumConstants.skillTypes.FreeChat) {
            let e = messageAttachmentBlockFactory.createAttachmentBlocks(t);
            if (e) {
              let t = conversationMessageUtils.createMessageObject({
                conversation: conversationMessageUtils.parseConversationId(N),
                message: {
                  content_blocks_v2: e,
                  ext: {
                    ...n,
                    chat_ability: conversationMessageUtils.serializeAbilityData(r == null ? undefined : r.skill_type, "")
                  }
                }
              });
              es(t, {
                reportParams: i
              });
              return Promise.resolve();
            }
          }
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "urlaction_transform_blockmessage_fail",
          error: e
        });
      }
      return (M ?? O.sendMessage)(a[0], a[1]);
    };
    let ed = e => {
      let {
        deepThinkingSwitchValue: t,
        deepThinkingActiveType: a
      } = e;
      let n = {
        deepThinkingSwitchValue: typeof t == "boolean" ? t : a === String(aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchTrue),
        deepThinkingSwitchUseAutoCot: a === String(aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchAuto)
      };
      return new Promise(e => {
        let t = chatStoreManager.getStore("deepThinkingControlStore");
        if ("persist" in t && !t.persist.hasHydrated()) {
          var a;
          let i = true;
          if ((a = t.persist) !== null && a !== undefined) {
            a.onFinishHydration(() => {
              if (i) {
                t.setState(n);
              }
              i = false;
              e(true);
            });
          }
          return;
        }
        t.setState(n);
        e(true);
      });
    };
    let eu = e => {
      if (e) {
        superTaskStore.superTaskStore.getState().setStatusByConvId("", {
          taskModeValue: e.taskMode || chatConstants.complexityLevels.Simple,
          switchValue: e.switchValue || chatConstants.taskTypes.Base
        });
      }
    };
    let ep = () => {
      chatStoreManager.getStore("chatViewCoreStore").setState({
        currentLocalConversationId: N
      });
    };
    let em = (e, t) => {
      let a = chatStoreManager.getStore("chatInputStore").getState();
      if (N) {
        a.updateActiveSkillTypeMap(N, e, t);
      }
    };
    let {
      addAttachmentDirectly: e_
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: N ?? ""
    });
    let eS = function () {
      var e = arguments.length;
      var t = Array(e);
      var a = 0;
      for (; a < e; a++) {
        t[a] = arguments[a];
      }
      chatStoreManager.getStore("chatViewCoreStore").setState({
        currentLocalConversationId: N
      });
      return e_(...t);
    };
    let ev = (e, t) => {
      if (N) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(a => {
          if (a != null) {
            a.setRefContents({
              refContents: t,
              channel: `skill_${e}`
            }, N);
          }
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = safeJsonUtils.safeParse(G, null);
      if (!e) {
        return;
      }
      let {
        pfTrackParams: t,
        pluginId: a
      } = e;
      if (t && !$) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: t.phase1EventName || `urlparseplugin_phase1_duration_${a}`,
          meta: {
            duration: Date.now() - t.startJumpTime,
            isLazy: !!$,
            pluginId: a
          }
        });
      }
      if (t && $ && E) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: t.phase2EventName || `urlparseplugin_phase2_duration_${a}`,
          meta: {
            duration: Date.now() - E,
            isLazy: !!$,
            pluginId: a
          }
        });
      }
      return () => {
        if (!D(X.current)) {
          if (t && Y.current) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: t.phaseNavEventName || `urlparseplugin_phasenav_duration${a ? `_${a}` : ""}`,
              meta: {
                duration: Date.now() - Y.current,
                isLazy: !!$
              }
            });
          }
          if (t) {
            performanceStoreHook.usePerformanceStore.setState({
              urlActionDuration: {
                urlActionNavEndTime: Date.now(),
                urlActionChatRenderEventName: t.phaseChatRenderEventName || `urlparseplugin_chatrender_duration${a ? `_${a}` : ""}`,
                urlActionCanvasEventName: t.phaseCanvasRenderEventName || `urlparseplugin_canvasrender_duration${a ? `_${a}` : ""}`
              }
            });
          }
        }
      };
    }, []);
    let eh = useLocationWrapper.useLocationWrapper();
    reactCoreLibraryReexport.useEffect(() => {
      if (X.current) {
        if (X.current !== eh.pathname) {
          H.current = false;
        }
      } else {
        X.current = eh.pathname;
      }
    }, [eh]);
    let ef = () => {
      J.delete("action");
      if (!["/chat/new-thread", "/chat/url-action"].includes(X.current)) {
        j(J, {
          replace: true
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!G || H.current) {
        return;
      }
      let e = safeJsonUtils.safeParse(G, null);
      if (!(e == null ? undefined : e.pluginId)) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "UrlParser_actionDataInvalid"
        });
        return;
      }
      ee.current = e;
      H.current = true;
      let {
        pluginId: t,
        payload: n
      } = e;
      let i = [...(b || []), L].find(e => e.matcher(t));
      if (!i) {
        return;
      }
      let {
        prehandler: l = () => Promise.resolve(undefined)
      } = i;
      (Q ? conversationIdBroadcast.getConversationId(Q) : Promise.resolve()).then(async t => {
        let r = t == null ? undefined : t.conversationId;
        if (!r) {
          await a();
        }
        H.current = true;
        Promise.all([l({
          payload: n,
          preSendConversationId: r
        })]).then(async t => {
          let [a] = t;
          let n = await chatIocServiceLoaderHook.loadServiceAsync("chatViewService");
          let l = {
            ...n,
            openCanvasPanel: function () {
              var e = arguments.length;
              var t = Array(e);
              var a = 0;
              for (; a < e; a++) {
                t[a] = arguments[a];
              }
              if (n != null) {
                n.openCanvasPanel(...t);
              }
              et();
            }
          };
          (function (e, t, a, n) {
            let {
              pluginId: i,
              payload: l,
              pfTrackParams: r,
              options: o
            } = e;
            if (i.startsWith("AISpace")) {
              pageVisitTrackContext.setVisitContext(chatPageRouteConstants.pageRoutes.AI_SPACE);
            }
            setTimeout(async () => {
              if (n != null) {
                n();
              }
              try {
                var e;
                let n = Date.now();
                await (t == null ? undefined : (e = t.handler) === null || e === undefined ? undefined : e.call(t, {
                  payload: l,
                  options: o,
                  ...a,
                  phase3EndTime: Date.now()
                }));
                loggerServiceCore.defaultLogger.persist.info({
                  eventName: r.phase4EventName || `urlparseplugin_phase4_duration${i ? `_${i}` : ""}`,
                  meta: {
                    duration: Date.now() - n
                  }
                });
              } catch {
                loggerServiceCore.defaultLogger.persist.info({
                  eventName: `UrlParser_PluginFail_${i}`,
                  meta: {
                    pluginId: i
                  }
                });
              }
            });
          })(e, i, {
            prehandlerData: a,
            navigate: eo,
            openImageCanvas: U,
            sendMessage: ec,
            sendMessageV2: es,
            openReadCanvasByFile: (e, t) => {
              let {
                fileName: a,
                originUri: n
              } = t;
              if (ea != null) {
                ea(e, "PDF", {
                  pdf: {
                    fileName: a,
                    realFileKey: n
                  }
                }, {
                  skillType: chatAppEnums.SkillType.ReadPDF
                });
              }
            },
            openReadCanvasByLink: e => {
              if (en != null) {
                en(e, {
                  attchmentType: "pdf"
                }, {
                  skillType: chatAppEnums.SkillType.ReadPDF
                });
              }
            },
            chatInputService: await chatIocServiceLoaderHook.loadServiceAsync("chatInputService"),
            chatViewService: l,
            getChatSlice: chatStoreManager.getStoreState,
            getChatService: chatIocServiceLoaderHook.loadServiceAsync,
            useChatRef: chatRefsContext.useChatRefs,
            toggleDeepThink: ed,
            UpdateChatIdToResolveLocalConversationId: ep,
            updateActiveSkillTypeMap: em,
            openCodingCanvasByKey: ei,
            openCodingCanvasByRepo: el,
            updateRefContents: ev,
            openCodingArtifact: er,
            toggleSuperTask: eu,
            addAttachmentDirectly: eS,
            preSendConversationId: r
          }, () => {
            ef();
            let {
              pfTrackParams: t,
              pluginId: a
            } = e;
            if (t) {
              loggerServiceCore.defaultLogger.persist.info({
                eventName: t.phase3EventName || `urlparseplugin_phase3_duration_${a}`,
                meta: {
                  duration: Date.now() - q.current,
                  isLazy: !!$,
                  pluginId: a
                }
              });
            }
          });
        });
      });
    }, [G]);
    return null;
  }
  require.d(exports, {
    ChatUrlActionPlugin: function () {
      return M;
    }
  });
}