// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useCanvasTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: step-canvas-panel.5a261512.js
         * chunkId: 58536
         * moduleId: 854411
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var aiChatSkillInputUtils = require("ai-chat-skill-input-utils") /*id: 862269*/;
  var chatSkillPluginRegistry = require("chat-skill-plugin-registry") /*id: 500651*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var chatPanelLayoutResolver = require("chat-panel-layout-resolver") /*id: 424315*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  let g = e => {
    let {
      conversationId: t,
      messageId: n,
      artifact: g,
      clickFrom: f
    } = e;
    let {
      service: w
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let b = reactCoreLibraryReexport.useRef();
    let j = () => {
      if (n) {
        return conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t, n);
      }
    };
    let S = () => {
      let i = j();
      if (!i) {
        return;
      }
      let a = aiChatSkillInputUtils.getChatAction(i) || i.skill?.skill_type === chatAppEnums.SkillType.WriteAssistant;
      return {
        skill_id: a ? String(chatAppEnums.SkillType.WriteAssistant) : null,
        skill_name: a ? skillTypeMappings.getSkillName(chatAppEnums.SkillType.WriteAssistant) : null,
        conversation_id: t,
        bot_id: chatConversationBotId.getConversationBotId(t, true),
        message_id: n,
        section_id: i == null ? undefined : i.section_id,
        reply_id: i == null ? undefined : i.reply_id,
        is_by_step_writing: messageContentTypeAndStatusChecker.zwb(i) ? "1" : "0",
        click_from: f ?? ""
      };
    };
    let N = () => j() && {
      click_from: skillTypeMappings.getSkillPreview(chatAppEnums.SkillType.WriteAssistant)
    };
    let E = () => {
      if (!g) {
        return;
      }
      let {
        artifact_id: e,
        artifact_key: t
      } = g;
      return {
        ...(w == null ? undefined : w.getCanvasTeaParams()),
        canvas_id: e,
        canvas_key: t,
        show_status: "show"
      };
    };
    let C = () => {
      if (!g) {
        return;
      }
      let e = j();
      let t = {
        canvas_type: "writing"
      };
      if (chatSkillPluginRegistry.feedListItemMenuOptionPlugin(e)) {
        return {
          ...t,
          open_from: "edit_from_response"
        };
      } else {
        return t;
      }
    };
    let R = () => {
      let e = j();
      if (messageContentTypeAndStatusChecker.cnd(e)) {
        return {
          skill_id: String(chatAppEnums.SkillType.SkillDeepResearch),
          skill_name: skillTypeMappings.getSkillName(chatAppEnums.SkillType.SkillDeepResearch),
          deep_research_id: chatMessageBlockUtils.getDeepResearchId(e)
        };
      } else {
        return {};
      }
    };
    let W = () => {
      var i;
      let a = j();
      if ((a == null ? undefined : a.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask) {
        return {
          super_task_id: a == null ? undefined : a.async_task?.id,
          super_task_mode: (a == null ? undefined : (i = a.verbose) === null || i === undefined ? undefined : i.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
          skill_id: "138",
          skill_name: "super_task"
        };
      } else {
        return {};
      }
    };
    let M = skillPinModalCallback.useSkillPinCallback(e => {
      teaAnalyticsEventTracker.trackEvent("download", {
        ...S(),
        ...E(),
        ...R(),
        content_type: "ai_doc",
        content_sec_type: e,
        click_from: "canvas_function",
        ...W()
      });
    });
    let T = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        clickFrom: t
      } = e;
      teaAnalyticsEventTracker.trackEvent("copy", {
        ...S(),
        ...E(),
        ...R(),
        ...W(),
        click_from: t
      });
    });
    let $ = skillPinModalCallback.useSkillPinCallback(e => {
      if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
        teaAnalyticsEventTracker.trackEvent("output_preview_click", {
          ...S(),
          ...E(),
          ...N(),
          ...C(),
          ...R(),
          ...W(),
          button_name: e
        });
      }
    });
    let A = skillPinModalCallback.useSkillPinCallback(() => {
      teaAnalyticsEventTracker.trackEvent("output_preview_show", {
        ...S(),
        ...E(),
        ...C(),
        ...R(),
        ...W()
      });
      b.current = Date.now();
    });
    let Z = skillPinModalCallback.useSkillPinCallback(() => {
      teaAnalyticsEventTracker.trackEvent("output_preview_exit", {
        ...S(),
        ...E(),
        ...C(),
        ...R(),
        stay_duration: isUndefinedCheck.isUndefined(b.current) ? undefined : Date.now() - b.current,
        canvas_type: "writing",
        layout_type: chatPanelLayoutResolver.resolvePanelMode({
          canvasLayoutState: chatPanelModes.PanelMode.SIDE_PANEL
        })
      });
    });
    return useStableObjectHook.useStableObject({
      trackDownload: M,
      trackCopy: T,
      trackClick: $,
      trackShow: A,
      trackExit: Z,
      trackRegenerate: () => {
        teaAnalyticsEventTracker.trackEvent("click_regenerate", {
          ...S(),
          ...E(),
          click_from: "canvas_selction_bar"
        });
      },
      trackBreakMessage: () => {
        teaAnalyticsEventTracker.trackEvent("break_message", {
          ...S(),
          ...E(),
          click_from: "click_break_message",
          scene: "canvas_tool_list"
        });
      },
      trackSelectionBarShow: () => {
        teaAnalyticsEventTracker.trackEvent("text_selection_bar_show", {
          ...S(),
          ...E(),
          ...R()
        });
      },
      trackSelectionBarClick: e => {
        let {
          levelOne: t,
          levelTwo: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("text_selection_bar_click", {
          ...S(),
          ...E(),
          ...R(),
          button_name_level_one: t,
          button_name_level_two: n
        });
      },
      trackSelectionBarAction: e => {
        let {
          name: t,
          rewriteKey: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("selection_bar_action", {
          ...S(),
          ...E(),
          ...R(),
          button_name: t,
          rewrite_key: n
        });
      },
      trackActClick: () => {
        teaAnalyticsEventTracker.trackEvent("output_preview_act_click", {
          ...S(),
          ...E(),
          ...C(),
          ...R()
        });
      },
      trackEditSave: e => {
        let {
          editMethod: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("canvas_free_edit_save", {
          ...S(),
          ...E(),
          ...C(),
          ...R(),
          edit_method: t,
          save_time: Math.ceil(Date.now() / 1000)
        });
      },
      trackSendMessageStatus: e => {
        let {
          scene: t,
          success: n
        } = e;
        teaAnalyticsEventTracker.trackEvent("send_message_status", {
          ...S(),
          ...E(),
          scene: t,
          success: +!!n
        });
      },
      trackSlide: e => {
        let {
          direction: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("output_preview_slide", {
          ...S(),
          ...E(),
          ...C(),
          ...R(),
          slide_direction: t
        });
      },
      trackSearchExpandShow: () => {
        teaAnalyticsEventTracker.trackEvent("search_expand_show", {
          ...S(),
          ...E(),
          search_type: "writing"
        });
      },
      trackSearchExpandClick: e => {
        teaAnalyticsEventTracker.trackEvent("search_expand_click", {
          ...S(),
          ...E(),
          search_type: "writing",
          click_afterstatus: e ? "expand" : "close"
        });
      },
      trackSearchSingleCardShow: e => {
        teaAnalyticsEventTracker.trackEvent("search_singlecard_show", {
          ...S(),
          ...E(),
          search_type: "writing",
          reference_url: e
        });
      },
      trackSearchSingleCardClick: e => {
        teaAnalyticsEventTracker.trackEvent("search_singlecard_click", {
          ...S(),
          ...E(),
          search_type: "writing",
          reference_url: e
        });
      },
      getBaseParams: S,
      getClickParams: N,
      getCanvasParams: E,
      getBlockParams: R,
      trackEditDocButtonShow: () => {
        teaAnalyticsEventTracker.trackEvent("edit_doc_button_show", {
          ...S(),
          ...E(),
          ...C(),
          ...R(),
          show_from: "canvas_outside_doc_card"
        });
      }
    });
  };
  require.d(exports, {
    useCanvasTracker: function () {
      return g;
    }
  });
}