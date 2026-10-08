// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'CodeToolThinking'
// - Renamed export 'o' to 'CodeToolBlockView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 294371
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var layoutCanvasTypes = require("layout-canvas-types") /*id: 9235*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var chatRtlIconComponent_1 = require("chat-rtl-icon-component_1") /*id: 524284*/;
  var threadToolBlockUtils = require("thread-tool-block-utils") /*id: 655171*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      message: n,
      blockId: g,
      parentId: _,
      isBlockFinished: b,
      blockContent: k,
      codeToolIndex: y
    } = e;
    let {
      is_finish: x
    } = n;
    let w = !x && !b;
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let R = codingSkillStoreModule.codingSkillStore(e => e.hasOpenCanvasViewInAsyncStreaming);
    let $ = codingSkillStoreModule.codingSkillStore(e => e.setHasOpenCanvasViewInAsyncStreaming);
    let C = reactCoreLibraryReexport.useMemo(() => `data_analysis_${y}.py`, [y]);
    let T = reactCoreLibraryReexport.useMemo(() => `${S("web_ai_coding_agent_tool_data_analysis")} ${C}`, [C]);
    let {
      code: j = "",
      content: N,
      std_out_list: E,
      summary: P,
      type: I
    } = k ?? {};
    let {
      conversation_id: W,
      reply_id: F
    } = n ?? {};
    let M = F + g;
    let A = messageContentTypeAndStatusChecker.F3w(n);
    let Z = reactCoreLibraryReexport.useMemo(() => !A && !!W, [W, A]);
    let B = () => {
      $(true);
    };
    let O = () => {
      if (!W) {
        return;
      }
      teaAnalyticsEventTracker.trackEvent("click_card", {
        code_language: "python",
        bot_id: n.bot_id,
        skill_id: n.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(n.skill?.skill_type_no_default),
        message_id: n.message_id,
        conversation_id: n.conversation_id,
        tool_file_name: C,
        button_name: "data_analysis"
      });
      teaAnalyticsEventTracker.trackEvent("click_pill_button", {
        button_name: "code",
        bot_id: n.bot_id,
        skill_id: n.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(n.skill?.skill_type_no_default),
        message_id: n.message_id,
        conversation_id: n.conversation_id,
        section_id: n.section_id,
        collection_id: n.ext?.collection_id,
        source: "cot",
        position: y
      });
      let f = N || j;
      let b = I === 1;
      let k = b ? threadToolBlockUtils.extractCodeBlock(f).value : f;
      let x = b ? (E || []).map(e => {
        let {
          type: t,
          content: n,
          ...i
        } = e;
        let {
          isCode: l,
          value: r
        } = threadToolBlockUtils.extractCodeBlock(n);
        return {
          ...i,
          type: t,
          content: l ? r : n
        };
      }) : E;
      let R = {
        type: artifactResourceType.ArtifactResourceType.Code,
        conversationId: n.conversation_id || "",
        messageId: n.message_id || "",
        isAgentTask: true,
        onClose: B,
        taskData: {
          type: layoutCanvasTypes.LayoutCanvasTypes.Code,
          codeData: {
            parentBlockId: _ || "",
            contentBlockId: g,
            headerIcon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {}),
            headerLabel: S("web_ai_coding_agent_tool_data_analysis"),
            code: k,
            fileName: C,
            stdOutList: x,
            isStreaming: w
          }
        },
        trackParams: {
          skill_id: n.skill?.skill_id_no_default || "",
          skill_name: skillTypeMappings.getSkillName(n.skill?.skill_type),
          bot_id: String(n.bot_id),
          section_id: n.section_id,
          canvas_type: "coding",
          agent_sub_type: "general_code"
        }
      };
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(R));
    };
    let D = n.skill?.skill_id === String(aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant);
    reactCoreLibraryReexport.useEffect(() => {
      if (w && !R && D) {
        O();
      }
    }, [w, R, D]);
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("show_pill_button", {
        button_name: "code",
        bot_id: n.bot_id,
        skill_id: n.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(n.skill?.skill_type_no_default),
        message_id: n.message_id,
        conversation_id: n.conversation_id,
        section_id: n.section_id,
        collection_id: n.ext?.collection_id,
        source: "cot",
        position: y
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
      title: P || T,
      loading: w,
      hoverable: Z,
      prefixIcon: w ? null : reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {}),
      showSuffixIcon: Z,
      onClick: () => {
        if (W && M && !A) {
          O();
        }
      }
    });
  };
  let _ = e => {
    let {
      message: t,
      contentBlock: n,
      isInCodeAssistProcessBlock: l
    } = e;
    let {
      id: r,
      content_obj: o,
      parent_id: a,
      parent_block_id: s,
      block_type: c,
      is_finish: d
    } = n || {};
    let u = a || s;
    let p = codingSkillStoreModule.codingSkillStore(e => e.blockIdToProcess);
    let m = reactCoreLibraryReexport.useMemo(() => {
      var e;
      var n;
      if (l) {
        let e = p[u ?? ""];
        if (e) {
          return e.filter(e => e.block_type === c).findIndex(e => "id" in e && e.id === r) + 1;
        } else {
          return 1;
        }
      }
      return (((n = t.content_blocks) === null || n === undefined ? undefined : (e = n.filter(e => e.block_type === c)) === null || e === undefined ? undefined : e.findIndex(e => e.id === r)) ?? 0) + 1;
    }, [r, u, c, p, t.content_blocks]);
    return reactJsxRuntimeCoreReexport.jsx(g, {
      message: t,
      blockId: r,
      parentId: u,
      isBlockFinished: d,
      blockContent: o,
      codeToolIndex: m
    });
  };
  require.d(exports, {
    CodeToolThinking: function () {
      return g;
    },
    CodeToolBlockView: function () {
      return _;
    }
  });
}