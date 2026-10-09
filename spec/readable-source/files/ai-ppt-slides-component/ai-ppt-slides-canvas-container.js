// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'AiPptSlidesCanvasContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60955.e28a9bd4.js
         * chunkId: 60955
         * moduleId: 871043
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var slidesToolbarComponent = require("slides-toolbar-component") /*id: 356709*/;
  var aiPptSlidesApp = require("ai-ppt-slides-app") /*id: 4760*/;
  var accessStatusConstants = require("access-status-constants") /*id: 76876*/;
  var exportFileTypes = require("export-file-types") /*id: 709576*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var flowAiPptIframeConstants = require("flow-ai-ppt-iframe-constants") /*id: 625035*/;
  let C = e => {
    let {
      token: t
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(false);
    let [n, s] = reactCoreLibraryReexport.useState(true);
    let [l, a] = reactCoreLibraryReexport.useState(true);
    let [d, u] = reactCoreLibraryReexport.useState(true);
    let [c, v] = reactCoreLibraryReexport.useState(0);
    let [p, f] = reactCoreLibraryReexport.useState(0);
    let _ = reactCoreLibraryReexport.useMemo(() => ({
      rpcClient: undefined
    }), []);
    let h = () => {
      var e;
      if ((e = _.rpcClient) !== null && e !== undefined) {
        e.historyCloseList();
      }
    };
    let C = async () => {
      var e;
      var r;
      var i;
      var n;
      let s = await ((r = _.rpcClient) === null || r === undefined ? undefined : (e = r.getCurrentMinorVersion) === null || e === undefined ? undefined : e.call(r));
      if (isUndefinedCheck.isUndefined(s) || !s) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[ai-ppt] revertToCurrentHistoryVersion",
          error: Error("getCurrentMinorVersion is undefined/empty"),
          meta: {
            version: s
          }
        });
        return;
      }
      let l = await ((n = _.rpcClient) === null || n === undefined ? undefined : (i = n.revertHistory) === null || i === undefined ? undefined : i.call(n, t, s));
      if ((l == null ? undefined : l.code) === 0 && (l == null ? undefined : l.data?.status) === 1) {
        h();
      }
      return l;
    };
    return {
      onInitSlideApp: e => {
        let {
          client: t
        } = e;
        _.rpcClient = t;
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryUIStateChange, e => {
          if (e === "historyHidden") {
            i(false);
          } else {
            i(true);
          }
        });
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryShouldShowRecover, e => {
          a(e);
        });
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryDisabledRecover, e => {
          s(e);
        });
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryDiffCount, e => {
          v(Number(e));
        });
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryDiffIndex, e => {
          f(Number(e));
        });
        t.on(flowAiPptIframeConstants.uiEventNames.onHistoryShouldShowPlayer, e => {
          if (isBooleanUtil.isBoolean(e)) {
            u(e);
          } else {
            u(true);
          }
        });
      },
      historyListShow: r,
      closeHistoryList: h,
      revertToCurrentHistoryVersion: C,
      playNextDiff: () => {
        var e;
        if ((e = _.rpcClient) !== null && e !== undefined) {
          e.historyPlayNextDiff();
        }
      },
      playPrevDiff: () => {
        var e;
        if ((e = _.rpcClient) !== null && e !== undefined) {
          e.historyPlayPrevDiff();
        }
      },
      getCurrentVersionCreateTime: () => {
        var e;
        var t;
        return ((t = _.rpcClient) === null || t === undefined ? undefined : (e = t.getCurrentVersionCreateTime) === null || e === undefined ? undefined : e.call(t)) || Promise.resolve(0);
      },
      disabledRecover: n,
      diffCount: c,
      diffIndex: p,
      showPlayer: d && c > 0,
      recoverVisible: l
    };
  };
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var asyncSkillMessageUtils = require("async-skill-message-utils") /*id: 200238*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let E = e => {
    let {
      message: i,
      docToken: n,
      messageId: s,
      conversationId: l,
      resourceType: a,
      artifactMetaId: d,
      isAutoOpen: u,
      blockType: c,
      blockStatus: v,
      trackParams: p,
      setCanvasLayoutTrackParams: f
    } = e;
    let _ = reactCoreLibraryReexport.useRef();
    let {
      enter_method: m
    } = p || {};
    let y = reactCoreLibraryReexport.useRef(() => ({}));
    let k = {
      skill_name: skillTypeMappings.getSkillName(i == null ? undefined : i.skill?.skill_type),
      skill_id: i == null ? undefined : i.skill?.skill_id_no_default,
      conversation_id: l || "",
      bot_id: (i == null ? undefined : i.bot_id) || "",
      message_id: s || "",
      canvas_type: "aippt_new",
      ...asyncSkillMessageUtils.buildSkillTrackParams(i, {
        customTrackInfo: {
          resource_id: n,
          resource_type: a,
          artifact_meta_id: d
        }
      })
    };
    let C = reactCoreLibraryReexport.useCallback(() => {
      if (m) {
        return m;
      }
      let e = "";
      if (c === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT_OP) {
        e = v === skillMessageLifecycleTypes.artifactOpStatus.ArtifactOPStatus_Processing ? u ? "aippt_tool_progress_card_auto" : "aippt_tool_progress_card_click" : u ? "aippt_tool_result_card_auto" : "aippt_tool_result_card_click";
      } else if (c === chatConstantsEnum.messageContentType.BLOCK_ARTIFACT) {
        e = v === skillMessageLifecycleTypes.artifactStatus.ArtifactStatus_Generating ? u ? "aippt_artifact_progress_card_auto" : "aippt_artifact_progress_card_click" : u ? "aippt_artifact_result_card_auto" : "aippt_artifact_result_card_click";
      }
      return e;
    }, [c, v, u, m]);
    y.current = () => ({
      ...k,
      enter_method: C()
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (f != null) {
        f(e => {
          let t = "ask_doubao";
          if (e === "standard" || e === "focus_chat") {
            t = "close";
          } else if (e === "canvas_immersive") {
            t = "hide_side_bar";
          }
          return {
            ...y.current(),
            button_name: t
          };
        });
      }
    }, []);
    return {
      trackOutputPreviewShow: () => {
        teaAnalyticsEventTracker.trackEvent("output_preview_show", {
          ...k,
          enter_method: C()
        });
        _.current = Date.now();
      },
      trackOutputPreviewClick: e => {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ...k,
          enter_method: C(),
          button_name: e
        });
      },
      trackOutputPreviewExit: () => {
        teaAnalyticsEventTracker.trackEvent("output_preview_exit", {
          ...k,
          stay_duration: isUndefinedCheck.isUndefined(_.current) ? undefined : Date.now() - _.current
        });
      },
      trackDownload: e => {
        teaAnalyticsEventTracker.trackEvent("download", {
          ...k,
          content_type: "aippt_new",
          content_sec_type: e === exportFileTypes.fileFormats.PPTX ? "pptx" : "pdf",
          section_id: (i == null ? undefined : i.section_id) || "",
          click_from: "canvas_function"
        });
      },
      trackSharePanel: e => {
        teaAnalyticsEventTracker.trackEvent("canvas_share_panel_click", {
          ...throttledOmitPathStringify.omitPathStringify(k, ["conversation_id", "bot_id"]),
          button_name: e
        });
      },
      getSlideMsgCommonParams: () => ({
        ...k,
        section_id: (i == null ? undefined : i.section_id) || "",
        enter_method: C()
      })
    };
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (i = {})[i.Message = 1] = "Message";
  i[i.Finish = 2] = "Finish";
  i[i.Error = 3] = "Error";
  let R = i;
  (n = {})[n.Default = 0] = "Default";
  n[n.Mobile = 1] = "Mobile";
  n[n.AIEdit = 2] = "AIEdit";
  let N = n;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var sseClientFactory = require("sse-client-factory") /*id: 474279*/;
  var sseConstants = require("sse-constants") /*id: 259486*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageInfraUtils = require("message-infra-utils") /*id: 716917*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  function B(e) {
    let {
      path: t,
      event: r,
      onMessage: i,
      onError: n,
      onFinish: o,
      getCommonHttpParams: s,
      getCommonHttpHeaders: l
    } = e;
    let a = "";
    let d = eventReportingService.createEventReporter({
      eventName: "[AI-PPT]stream_call_bot_for_image_prompt"
    });
    let u = sseClientFactory.createSseClient(messageInfraUtils.buildUrlWithQuery(t, s == null ? undefined : s()), {
      method: "POST",
      headers: [["content-type", "application/json"], ["Agw-Js-Conv", "str"], ...toEntriesUtil.toEntries((l == null ? undefined : l()) || {})],
      body: safeJsonUtils.safeStringify(r),
      credentials: "same-origin",
      onError: c,
      onMessage: function (e) {
        let {
          data: r = ""
        } = e;
        if (isUndefinedCheck.isUndefined(d == null ? undefined : d.getDuration()?.received_first_packet)) {
          d.addDurationPoint("received_first_packet");
        }
        let {
          event_data: n,
          event_type: s
        } = safeJsonUtils.safeParse(r, {});
        switch (s) {
          case R.Message:
            i(n, a);
            return;
          case R.Finish:
            o(true);
            d.addDurationPoint("success");
            d.success();
            return;
          case R.Error:
            c(JSON.stringify({
              message: n,
              code: chatCoreConstants.ErrorCodes.ServerError
            }));
            return;
          default:
            return;
        }
      },
      openInterceptor: v
    });
    function c(e) {
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
      d.error({
        reason: t == null ? undefined : t.message,
        meta: {
          error: t,
          log_id: a
        }
      });
      if (!u.isAborted) {
        n(t, a);
      }
    }
    async function v(e) {
      let t = e.headers.get("content-type");
      if (!(e == null ? undefined : e.ok) || !(e == null ? undefined : e.body)) {
        throw Error(JSON.stringify({
          message: `Invalid Response, ResponseStatus: ${e.statusText}`,
          code: chatCoreConstants.ErrorCodes.ResponseIsInvalid
        }));
      }
      if (!(t == null ? undefined : t.startsWith(sseConstants.eventStreamMimeType))) {
        let t = await e.json();
        throw Error(JSON.stringify({
          message: t.msg,
          code: t.code
        }));
      }
      a = e.headers.get("x-tt-logid") || "";
    }
    return u.cancel;
  }
  let Z = e => {
    let {
      event: r,
      onMessage: i,
      onError: n,
      onFinish: o
    } = e;
    let {
      getCommonHeaders: s,
      getCommonParams: l
    } = flowApiConfigManager.getFlowApiOptions() ?? {};
    return B({
      path: "/alice/aippt/images/recommend_prompts/sse",
      event: r,
      onMessage: e => {
        i(((e == null ? undefined : e.prompts) || []).filter(e => !!e));
      },
      onError: e => {
        n(Error(`sse error ${JSON.stringify(e)}`));
      },
      onFinish: () => {
        o();
      },
      getCommonHttpHeaders: s,
      getCommonHttpParams: l
    });
  };
  let F = e => {
    let {
      event: r,
      onMessage: i,
      onError: n,
      onFinish: o
    } = e;
    let {
      getCommonHeaders: s,
      getCommonParams: l
    } = flowApiConfigManager.getFlowApiOptions() ?? {};
    return B({
      path: "/alice/aippt/images/search_keywords/sse",
      event: r,
      onMessage: e => {
        i(((e == null ? undefined : e.keywords) || []).filter(e => !!e));
      },
      onError: e => {
        n(Error(`sse error ${JSON.stringify(e)}`));
      },
      onFinish: () => {
        o();
      },
      getCommonHttpHeaders: s,
      getCommonHttpParams: l
    });
  };
  let W = e => {
    let {
      event: r,
      onMessage: i,
      onError: n,
      onFinish: o
    } = e;
    let {
      getCommonHeaders: s,
      getCommonParams: l
    } = flowApiConfigManager.getFlowApiOptions() ?? {};
    return B({
      path: "/alice/aippt/images/ai_edit_prompts/sse",
      event: r,
      onMessage: e => {
        i(((e == null ? undefined : e.prompts) || []).filter(e => !!e));
      },
      onError: e => {
        n(Error(`sse error ${JSON.stringify(e)}`));
      },
      onFinish: () => {
        o();
      },
      getCommonHttpHeaders: s,
      getCommonHttpParams: l
    });
  };
  let $ = e => {
    let {
      getSlideMsgCommonParams: t,
      slidesToken: r
    } = e;
    let i = i18nTranslationUtils.useTranslationWithFallback();
    let n = reactCoreLibraryReexport.useRef();
    return {
      selectBarConfig: {
        imageReplace: {
          availableSubModeList: ["ai-generation", "search", "ai-edit", "upload"],
          handleReplaceImage: async e => {
            try {
              if (!n.current) {
                throw Error("rpcClient is undefined");
              }
              await n.current.handleReplaceImage(e);
            } catch (t) {
              loggerServiceCore.defaultLogger.persist.error({
                eventName: "[AI-PPT] imageReplace",
                error: t,
                meta: {
                  imageUrl: e
                }
              });
            }
          },
          requestImageSugList: async e => {
            let {
              mode: t,
              slidesToken: r,
              handleUpdate: i,
              handleError: o,
              handleFinish: s
            } = e;
            try {
              if (!n.current) {
                throw Error("rpcClient is undefined");
              }
              let e = await n.current.getSelectedPositions();
              let l = e[0];
              if (!l) {
                throw Error(`selectedBlock is undefined: ${JSON.stringify({
                  selectedPositions: e,
                  slidesToken: r
                })}`);
              }
              let a = {
                event: {
                  slide_presentation_id: r,
                  slide_id: l.slide_block_id,
                  selected_img_element_id: l.element_block_id
                },
                onMessage: i,
                onError: o,
                onFinish: s
              };
              if (t === "ai-generation") {
                Z(a);
              } else if (t === "search") {
                F(a);
              } else if (t === "ai-edit") {
                W(a);
              }
            } catch (e) {
              o(e);
            }
          },
          requestSearchImages: async e => {
            try {
              let {
                data: t,
                code: r,
                message: i
              } = await apiServicesCollection.AiPptFacadeApiService.AGWSearchPPTImages({
                query: e.trim()
              }, {
                overrideConfig: {
                  timeout: 60000
                }
              });
              if (r !== 0 || !t) {
                return Promise.reject(i);
              }
              return ((t == null ? undefined : t.images) || []).map(e => {
                return (e == null ? undefined : e.ori?.url) || (e == null ? undefined : e.thumbnail?.url) || "";
              }).filter(e => e !== "");
            } catch (e) {
              return Promise.reject(e);
            }
          },
          requestAiGenImages: async (e, t, i) => {
            try {
              let o;
              if (i) {
                if (n.current) {
                  let e = await n.current.getSelectedImageToken();
                  if (e) {
                    o = [{
                      derive_token: e,
                      presentation_id: r
                    }];
                  } else {
                    loggerServiceCore.defaultLogger.persist.error({
                      eventName: "[AI-PPT] requestAiGenImages",
                      error: Error("selectedToken is undefined")
                    });
                  }
                } else {
                  loggerServiceCore.defaultLogger.persist.error({
                    eventName: "[AI-PPT] requestAiGenImages",
                    error: Error("rpcClient is undefined")
                  });
                }
              }
              let {
                data: s,
                code: l,
                message: a
              } = await apiServicesCollection.AiPptFacadeApiService.AGWGenPPTImages({
                query: e.trim(),
                ratio: t,
                reference_images: o,
                scene: i ? N.AIEdit : undefined
              }, {
                overrideConfig: {
                  timeout: 60000
                }
              });
              if (l !== 0 || !s) {
                return Promise.reject(a);
              }
              return ((s == null ? undefined : s.images) || []).map(e => {
                return (e == null ? undefined : e.ori?.url) || (e == null ? undefined : e.thumbnail?.url) || "";
              }).filter(e => e !== "");
            } catch (e) {
              return Promise.reject(e);
            }
          }
        },
        trackSlidesEvent: e => {
          let r = t() || {};
          if (e.eventName !== "output_preview_click") {
            r = throttledOmitPathStringify.omitPathStringify(r, ["enter_method"]);
          }
          if (!["download", "right_click_copy"].includes(e.eventName)) {
            r = throttledOmitPathStringify.omitPathStringify(r, ["section_id"]);
          }
          teaAnalyticsEventTracker.trackEvent(e.eventName, {
            ...r,
            ...e.slideParams
          });
        },
        clearForceHideToolbox: () => {
          try {
            if (!n.current) {
              throw Error("rpcClient is undefined");
            }
            n.current.clearForceHideToolbox();
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "[AI-PPT] clearForceHideToolbox",
              error: e
            });
          }
        },
        forceHideToolbox: () => {
          try {
            if (!n.current) {
              throw Error("rpcClient is undefined");
            }
            n.current.forceHideToolbox();
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "[AI-PPT] forceHideToolbox",
              error: e
            });
          }
        },
        getElementReportParams: async () => {
          try {
            if (!n.current) {
              throw Error("rpcClient is undefined");
            }
            return await n.current.getElementReportParams();
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "[AI-PPT] getElementReportParams",
              error: e
            });
            return {};
          }
        },
        t: i
      },
      onInitSlideApp: e => {
        let {
          client: t
        } = e;
        n.current = t;
      }
    };
  };
  var skillChatInputStore = require("skill-chat-input-store") /*id: 355267*/;
  var asyncBusinessInputEngineSubmit_1 = require("async-business-input-engine-submit_1") /*id: 581606*/;
  var skillMessageBox = require("skill-message-box") /*id: 111120*/;
  var aiSlideMessageBuilder = require("ai-slide-message-builder") /*id: 329004*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  let X = e => {
    try {
      var t;
      var r;
      var i;
      var n;
      let {
        start: o,
        len: s
      } = (e == null ? undefined : (n = e.textView) === null || n === undefined ? undefined : (i = n.getSelection) === null || i === undefined ? undefined : (r = i.call(n)) === null || r === undefined ? undefined : (t = r.toPosition) === null || t === undefined ? undefined : t.call(r)) || {};
      if (isNumberUtil.isNumber(o) && isNumberUtil.isNumber(s) && s !== 0 && o >= 1) {
        return {
          start_offset: o - 1,
          end_offset: o + s - 1
        };
      }
    } catch {}
    return {};
  };
  let Q = e => {
    if ((e == null ? undefined : e.parentBlock?.blockType) === "table-cell") {
      return e.parentBlock;
    } else {
      return e;
    }
  };
  let Y = e => {
    let {
      resourceType: t,
      artifactMetaId: r,
      message: i,
      messageId: n,
      docToken: o,
      artifactVersionId: s
    } = e;
    return {
      getImService: () => skillMessageBox.getMessage("canvas", "vmokDoubaoIMService"),
      createIntelligentEditMessage: async e => {
        let {
          inputValue: t,
          blockList: r,
          structureVersion: i
        } = e;
        let n = skillMessageBox.getMessage("canvas", "vmokDoubaoIMService");
        if (!n) {
          return null;
        }
        let {
          conversationInfo: l
        } = n.getContext() || {};
        if (!l) {
          return null;
        }
        let {
          conversation_id: a
        } = l || {};
        return aiSlideMessageBuilder.createSlideMessage({
          conversationId: a ?? "",
          presentationId: o || "",
          artifactVersionId: s || "",
          inputValue: t,
          selectedPositions: (r == null ? undefined : r.map(e => {
            var i;
            let o = Q(e);
            let s = (o == null ? undefined : o.blockType) || "";
            return {
              slide_block_id: s === "slide" ? o.record?.id || "" : ((i = o.page) === null || i === undefined ? undefined : i.record?.id) || "",
              element_block_id: s === "slide" ? undefined : o.record?.id || "",
              ...X(o)
            };
          }).filter(Boolean)) || [],
          structureVersion: i
        });
      },
      getTrackCommonParams: () => asyncSkillMessageUtils.buildSkillTrackParams(i, {
        customTrackInfo: {
          resource_id: o,
          resource_type: t,
          artifact_meta_id: r
        }
      }),
      getMessageId: () => n || "",
      getDocToken: () => o,
      getArtifactVersionId: () => s
    };
  };
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let ei = () => {
    let {
      canvasLayoutState: e
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      canvasLayoutState: e.canvasLayoutState
    }), deepEqualityUtil.deepEqual);
    return {
      isWideScreenMode: e === chatPanelModes.PanelMode.FULL_IMMERSIVE || e === chatPanelModes.PanelMode.CANVAS_ONLY,
      exitWideScreen: reactCoreLibraryReexport.useCallback(() => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          if (e != null) {
            e.setCanvasLayoutState(chatPanelModes.PanelMode.SIDE_PANEL);
          }
        });
      }, [])
    };
  };
  let en = () => {
    let {
      exitWideScreen: e
    } = ei();
    let t = () => {
      e();
    };
    let r = reactCoreLibraryReexport.useRef(t);
    r.current = t;
    return {
      onInitSlideApp: e => {
        let {
          client: t
        } = e;
        t.on(flowAiPptIframeConstants.uiEventNames.onExitWideScreen, () => {
          r.current();
        });
      }
    };
  };
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  let ea = `skill_${chatAppEnums.SkillType.AIPPTSlides}`;
  let ed = e => {
    var n;
    if (!e) {
      return false;
    }
    let o = chatRefContentSelectors.getRefContentState(e);
    return (o == null ? undefined : o.channel) === ea && (o == null ? undefined : o.refContents?.length) === 1 && (o == null ? undefined : o.refContents[0]?.type) === "text" && (o == null ? undefined : (n = o.refContents[0]) === null || n === undefined ? undefined : n.extra?.is_from_ai_edit_slides_page);
  };
  let eu = e => {
    if (e && ed(e)) {
      chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(t => {
        if (t != null) {
          t.setRefContents({
            refContents: [],
            channel: ea
          }, e);
        }
      });
    }
  };
  let ec = e => {
    let {
      conversationId: t,
      docToken: r,
      resourceVersion: i
    } = e;
    let {
      isExpand: n
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return {
        isExpand: t
      };
    });
    let {
      exitWideScreen: s
    } = ei();
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [a, d] = reactCoreLibraryReexport.useState(undefined);
    let c = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        eu(t);
      }
    }, [n, t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (Number(i) > 0) {
        eu(t);
      }
    }, [t, i]);
    reactCoreLibraryReexport.useEffect(() => () => {
      eu(t);
    }, [r, t]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = c.current;
      if (!e || !t) {
        return;
      }
      let r = e => {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(r => {
          if (r != null) {
            r.setRefContents({
              refContents: [{
                type: "text",
                text: l("slides_quote_pageNumber", {
                  s_number: e
                }),
                extra: {
                  is_from_ai_edit_slides_page: "1"
                }
              }],
              channel: ea
            }, t);
          }
        });
      };
      let i = e => {
        let {
          pageNumber: i
        } = e || {};
        if (!isUndefinedCheck.isUndefined(i)) {
          s();
          chatStoreManager.getStore("chatInputStore").getState().updateActiveSkillTypeMap(t, chatAppEnums.SkillType.AIPPTSlides);
          r(i);
          aiPptTemplateStore_1.aiPptTemplateStore.getState().focusInput();
        }
      };
      e.on(flowAiPptIframeConstants.uiEventNames.onAIEditPage, i);
      let n = e => {
        let {
          pageNumber: i
        } = e || {};
        if (!isUndefinedCheck.isUndefined(i)) {
          if (i <= 0) {
            eu(t);
            return;
          }
          if (ed(t)) {
            r(i);
          }
        }
      };
      e.on(flowAiPptIframeConstants.uiEventNames.onActiveSlideChange, n);
      return () => {
        e.off(flowAiPptIframeConstants.uiEventNames.onAIEditPage, i);
        e.off(flowAiPptIframeConstants.uiEventNames.onActiveSlideChange, n);
      };
    }, [a, t, s]);
    return {
      onInitSlideApp: e => {
        let {
          client: t
        } = e;
        c.current = t;
        d(Date.now());
      }
    };
  };
  var artifactEnumConstants = require("artifact-enum-constants") /*id: 912769*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eg = e => {
    let t = new Date(e);
    let r = String(t.getMonth() + 1).padStart(2, "0");
    let i = String(t.getDate()).padStart(2, "0");
    let n = String(t.getHours()).padStart(2, "0");
    let o = String(t.getMinutes()).padStart(2, "0");
    return `${r}\u{6708}${i}\u{65E5} ${n}:${o}`;
  };
  let ey = e => {
    let {
      visible: t,
      onCancel: r,
      onConfirm: i,
      getCreateTime: n,
      loggerMetaInfo: s
    } = e;
    let l = i18nTranslationUtils.useTranslationWithFallback();
    let [a, d] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (n != null) {
        n().then(e => d(e));
      }
    }, [n]);
    let u = async () => {
      let e = samanthaToastFactory.toastInstance.info({
        content: l("slides_restoreRecord_toast_restoring"),
        duration: 0,
        showClose: true,
        icon: reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
          className: "size-16"
        })
      });
      try {
        let r = await i();
        if ((r == null ? undefined : r.code) === 0 && (r == null ? undefined : r.data?.status) === 1) {
          samanthaToastFactory.toastInstance.close(e);
          samanthaToastFactory.toastInstance.success(l("slides_restoreRecord_toast_restored"));
        } else {
          throw Error(`revertHistory error: ${JSON.stringify(r)}`);
        }
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[ai-ppt] revertHistory",
          error: t,
          meta: s
        });
        samanthaToastFactory.toastInstance.close(e);
        samanthaToastFactory.toastInstance.error(l("slides_restoreRecord_toast_restoreFail"));
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      title: l("slides_restoreRecord_header"),
      visible: t,
      onCancel: () => {
        r();
      },
      onOk: u,
      okText: l("slides_restoreRecord_btn_restore"),
      cancelText: l("cancel"),
      children: a > 0 && reactJsxRuntimeCoreReexport.jsx("div", {
        children: l("slides_restoreRecord_desc", {
          s_time: eg(a < 1000000000000 ? a * 1000 : a)
        })
      })
    });
  };
  var canvasAnalyticsTracker = require("canvas-analytics-tracker") /*id: 619081*/;
  let eC = e => {
    var t;
    let {
      createTime: r,
      sdkLoading: i,
      onRestoreVersionClick: n,
      onReturnLatestClick: s,
      revertHistory: l,
      conversationId: u,
      resourceVersion: c,
      docToken: v
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let [f, _] = reactCoreLibraryReexport.useState("");
    let [h, m] = reactCoreLibraryReexport.useState(false);
    let k = chatMessageStoreFactory.createMessageStore(e => conversationMessageUtils_1.getMessageById(e, u || "", f || ""));
    let C = k == null ? undefined : (t = k.content_blocks_v2) === null || t === undefined ? undefined : t.find(e => e.block_type === 10030);
    let b = () => {
      try {
        if (s != null) {
          s();
        }
        if (!C) {
          throw Error(`returnLatestVersion contentBlock is empty: ${JSON.stringify({
            contentBlock: C,
            targetMessage: k
          })}`);
        }
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => {
          if (e == null) {
            return undefined;
          } else {
            return e.openCanvasPanel(canvasAnalyticsTracker.createCanvasAnalyticsData({
              message: k,
              contentBlock: C,
              isAutoOpen: false,
              artifactBlockContent: (C == null ? undefined : C.content?.artifact_block) || {},
              onCloseCanvas: () => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel())
            }));
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[ai-ppt] returnLatestVersion",
          error: e,
          meta: {
            resourceVersion: c,
            docToken: v
          }
        });
      }
    };
    let w = async () => {
      if (isUndefinedCheck.isUndefined(c)) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "[ai-ppt] revertHistory",
          error: Error("resource_version is undefined"),
          meta: {
            resourceVersion: c,
            docToken: v
          }
        });
        return;
      }
      let t = await (l == null ? undefined : l(v || "", c || ""));
      if ((t == null ? undefined : t.code) === 0 && (t == null ? undefined : t.data?.status) === 1) {
        b();
      }
      return t;
    };
    reactCoreLibraryReexport.useEffect(() => {
      (async () => {
        try {
          var t;
          var r;
          let i = await apiServicesCollection.CreationArtifactApiService.AGWGetArtifactMetaByResource({
            resource_id: v || "",
            resource_type: artifactEnumConstants.ArtifactResourceType.SlidePPT,
            need_current_version: true
          });
          let {
            answer_message_id: n
          } = (i == null ? undefined : (r = i.data) === null || r === undefined ? undefined : (t = r.artifact_meta) === null || t === undefined ? undefined : t.current_version_info?.source_meta) || {};
          if (!n) {
            throw Error(`returnLatestVersion answer_message_id is empty: ${JSON.stringify({
              res: i
            })}`);
          }
          _(n || "");
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "[ai-ppt] returnLatestVersion",
            error: e,
            meta: {
              resourceVersion: c,
              docToken: v
            }
          });
        }
      })();
    }, [v]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          relative flex size-full flex-shrink-0 items-center justify-center
        `,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex h-full items-center gap-12",
          children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            color: "grey-outline",
            size: "sm",
            onClick: () => {
              n();
              m(true);
            },
            disabled: i || !C,
            children: p("slides_btn_restoreVersion")
          }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            color: "brand-filled",
            size: "sm",
            onClick: b,
            disabled: i || !C,
            children: p("slides_btn_returnLatest")
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(ey, {
        visible: h,
        onCancel: () => m(false),
        onConfirm: () => {
          m(false);
          return w();
        },
        loggerMetaInfo: {
          resourceVersion: c,
          docToken: v
        },
        getCreateTime: () => Promise.resolve(r)
      })]
    });
  };
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var chevronUpIconSvg = require("chevron-up-icon-svg") /*id: 88060*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  var titlePaddingResizeHook = require("title-padding-resize-hook") /*id: 588998*/;
  let eI = e => {
    let {
      closeHistoryList: t,
      revertToCurrentHistoryVersion: r,
      getCurrentVersionCreateTime: i,
      diffCount: n,
      diffIndex: s,
      disabledRecover: l,
      showPlayer: a,
      playNextDiff: d,
      playPrevDiff: u,
      recoverVisible: c
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let p = reactCoreLibraryReexport.useRef(null);
    let {
      width: f
    } = resizeObserverHooks.useResizeObserverEx({
      ref: p
    });
    let [_, h] = reactCoreLibraryReexport.useState(false);
    let [m, g] = reactCoreLibraryReexport.useState(false);
    let {
      titlePadding: y,
      wrapperRef: k
    } = titlePaddingResizeHook.useTitlePadding();
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = (e = p.current) === null || e === undefined ? undefined : e.children[0];
      if (!p.current || !(t instanceof HTMLElement)) {
        g(false);
        return;
      }
      g(t.offsetWidth > p.current.offsetWidth);
    }, [f]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex size-full items-center justify-between",
        ref: k,
        style: {
          paddingLeft: y
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex-1",
          children: reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
            variant: "text",
            leadingIcon: reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {}),
            onClick: t,
            children: v("slides_editHistory_btn_back")
          })
        }), c && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          color: "brand-filled",
          onClick: () => h(true),
          disabled: l,
          size: "sm",
          children: v("slides_btn_restoreVersion")
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "flex flex-1 items-center justify-end gap-8",
          children: a && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              ref: p,
              className: `
                  w-0 flex-1 overflow-hidden text-right text-nowrap
                  text-dbx-text-primary s-font-small-strong
                `,
              style: {
                visibility: m ? "hidden" : "visible"
              },
              children: reactJsxRuntimeCoreReexport.jsxs("span", {
                children: [`${v("slides_editHistory_editRecord")} `, reactJsxRuntimeCoreReexport.jsx("span", {
                  className: "text-s-color-brand-primary-default",
                  children: s + 1
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  children: "/"
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  children: n
                })]
              })
            }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              onClick: u,
              variant: "icon",
              color: "grey-filled",
              disabled: n <= 1,
              size: "sm",
              children: reactJsxRuntimeCoreReexport.jsx(chevronUpIconSvg.ChevronUpIcon, {
                className: "size-16"
              })
            }), reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              onClick: d,
              variant: "icon",
              color: "grey-filled",
              disabled: n <= 1,
              children: reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {})
            })]
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(ey, {
        visible: _,
        onCancel: () => h(false),
        onConfirm: () => {
          h(false);
          if (r == null) {
            return undefined;
          } else {
            return r();
          }
        },
        getCreateTime: i
      })]
    });
  };
  var chatCanvasHeaderComponent = require("chat-canvas-header-component") /*id: 468674*/;
  let eT = e => {
    let {
      scene: r,
      perfStartTime: i = Date.now(),
      driveClickTime: n,
      openCanvasTime: s = Date.now(),
      docToken: m,
      docTitle: g,
      pptStatus: y = accessStatusConstants.AccessStatus.Public,
      onInit: k,
      onCloseCanvas: b,
      messageId: w,
      conversationId: S,
      resourceVersion: x,
      artifactVersionId: P,
      isShareMode: I = false,
      resourceType: T,
      artifactMetaId: A,
      blockType: R,
      blockStatus: N,
      isAutoOpen: j,
      trackParams: D,
      setCanvasLayoutTrackParams: L
    } = e;
    let V = reactCoreLibraryReexport.useRef(null);
    let M = reactCoreLibraryReexport.useRef(null);
    let [H, O] = reactCoreLibraryReexport.useState(true);
    let [z, B] = reactCoreLibraryReexport.useState([]);
    let [Z, F] = reactCoreLibraryReexport.useState([]);
    let {
      onInitSlideApp: W,
      historyListShow: G,
      closeHistoryList: K,
      revertToCurrentHistoryVersion: U,
      playNextDiff: X,
      playPrevDiff: Q,
      getCurrentVersionCreateTime: ee,
      disabledRecover: et,
      diffCount: er,
      diffIndex: ei,
      showPlayer: eo,
      recoverVisible: es
    } = C({
      token: m
    });
    let {
      onInitSlideApp: el
    } = en();
    let ea = chatMessageStoreFactory.createMessageStore(e => conversationMessageUtils_1.getMessageById(e, S || "", w || ""));
    let {
      isExpand: ed
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t
      } = e;
      return {
        isExpand: t
      };
    });
    let eu = reactCoreLibraryReexport.useMemo(() => {
      var e;
      let t = ea == null ? undefined : (e = ea.content_blocks_v2) === null || e === undefined ? undefined : e.find(e => e.block_type === 10030);
      return (t == null ? undefined : t.is_finish) === true;
    }, [ea]) || I;
    let {
      trackOutputPreviewShow: ev,
      trackOutputPreviewClick: ep,
      trackOutputPreviewExit: ef,
      trackDownload: e_,
      trackSharePanel: eh,
      getSlideMsgCommonParams: eg
    } = E({
      message: ea,
      messageId: w,
      conversationId: S,
      docToken: m,
      resourceType: T,
      artifactMetaId: A,
      isAutoOpen: j,
      blockType: R,
      blockStatus: N,
      trackParams: D,
      setCanvasLayoutTrackParams: L
    });
    reactCoreLibraryReexport.useEffect(() => {
      skillChatInputStore.setChatInput(e => {
        let {
          refContents: t
        } = e;
        return asyncBusinessInputEngineSubmit_1.getAiEditActionContext({
          refContents: t
        });
      });
      return () => {
        skillChatInputStore.setChatInput(undefined);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      let e = new Set([]);
      let t = new Set([]);
      if (I) {
        t.add("share");
        t.add("extra");
      }
      if (!eu) {
        e.add("export");
        e.add("extra");
        e.add("presentation");
        e.add("share");
      }
      if (H) {
        e.add("export");
        e.add("extra");
        e.add("presentation");
        e.add("share");
      }
      if (userAgentDeviceDetector.isMobileCached()) {
        t.add("presentation");
        t.add("extra");
      }
      B(Array.from(e));
      F(Array.from(t));
    }, [I, eu, H]);
    reactCoreLibraryReexport.useEffect(() => {
      if (ed) {
        ev();
      }
    }, [String(x), m, w, ed]);
    let ey = Y({
      resourceType: T,
      artifactMetaId: A,
      message: ea,
      docToken: m,
      messageId: w,
      artifactVersionId: P
    });
    let {
      selectBarConfig: ek,
      onInitSlideApp: eb
    } = $({
      getSlideMsgCommonParams: eg,
      slidesToken: m
    });
    let {
      onInitSlideApp: ew
    } = ec({
      conversationId: S,
      docToken: m,
      resourceVersion: x
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l("wrapper-cMsLpX", disableSelectBarConst.disableSelectBar),
      ref: M,
      children: [reactJsxRuntimeCoreReexport.jsx(chatCanvasHeaderComponent.ChatCanvasHeader, {
        isShareMode: I,
        onClose: () => {
          b();
          ef();
        },
        children: Number(x) > 0 ? reactJsxRuntimeCoreReexport.jsx(eC, {
          createTime: Number(ea == null ? undefined : ea.create_time),
          docToken: m,
          conversationId: S,
          resourceVersion: x,
          sdkLoading: H,
          onRestoreVersionClick: () => {
            ep("return_to_history_version");
          },
          revertHistory: V.current?.revertHistory,
          onReturnLatestClick: () => {
            ep("update_to_newest_version");
          }
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: G ? reactJsxRuntimeCoreReexport.jsx(eI, {
            closeHistoryList: K,
            revertToCurrentHistoryVersion: U,
            playNextDiff: X,
            playPrevDiff: Q,
            getCurrentVersionCreateTime: ee,
            disabledRecover: et,
            diffCount: er,
            diffIndex: ei,
            showPlayer: eo,
            recoverVisible: es
          }) : reactJsxRuntimeCoreReexport.jsx(slidesToolbarComponent.SlidesToolbar, {
            sdkLoading: H,
            disableActions: z,
            removeActions: Z,
            getPopupContainer: () => {
              return M.current ?? document.body;
            },
            onDownloadClick: e => {
              var t;
              var r;
              if (e === exportFileTypes.fileFormats.PDF) {
                if ((t = V.current) !== null && t !== undefined) {
                  t.exportPDF();
                }
              } else if (e === exportFileTypes.fileFormats.PPTX) {
                if ((r = V.current) !== null && r !== undefined) {
                  r.exportPPTX();
                }
              }
              e_(e);
            },
            onPlay: e => {
              var t;
              var r;
              if (e === "beginning") {
                if ((t = V.current) !== null && t !== undefined) {
                  t.presentationFromBeginning();
                }
                ep("play_from_top");
              } else {
                if ((r = V.current) !== null && r !== undefined) {
                  r.presentationFromCurrentPage();
                }
                ep("play");
              }
            },
            onFontReplaceClick: () => {
              var e;
              var t;
              if ((t = V.current) !== null && t !== undefined && (e = t.openFontReplacePanel) !== null && e !== undefined) {
                e.call(t);
              }
            },
            onHistoryClick: () => {
              var e;
              if ((e = V.current) !== null && e !== undefined) {
                e.openHistoryList();
              }
              ep("history_version");
            },
            onDownloadDropdownVisible: e => {
              if (e) {
                ep("download");
              }
            },
            onShareBtnClick: e => {
              if (!e) {
                ep("share");
              }
            },
            onSharePanelBtnClick: e => {
              eh(e);
            },
            docToken: m,
            docTitle: g
          })
        })
      }), reactJsxRuntimeCoreReexport.jsx(aiPptSlidesApp.AiPptSlidesApp, {
        ref: V,
        onInit: e => {
          if (k != null) {
            k(e);
          }
          W(e);
          eb(e);
          ew(e);
          O(false);
          el(e);
          if (userAgentDeviceDetector.isMobileCached()) {
            e.client.switchReadonlyMode(true);
          }
        },
        scene: r,
        perfStartTime: i,
        driveClickTime: n,
        openCanvasTime: s,
        docToken: m,
        bizDeps: ey,
        getSlideMsgCommonParams: eg,
        version: x,
        pptStatus: y,
        onStartLoad: () => O(true),
        selectBarConfig: ek
      })]
    });
  };
  require.d(exports, {
    AiPptSlidesCanvasContainer: function () {
      return eT;
    }
  });
}