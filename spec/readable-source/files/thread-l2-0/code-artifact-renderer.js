// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'renderCodeArtifact'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 573090
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var chatRtlIconComponent_1 = require("chat-rtl-icon-component_1") /*id: 524284*/;
  var layoutCanvasTypes = require("layout-canvas-types") /*id: 9235*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  function f(e) {
    let t = markdownParserSerializer.parseMarkdown(e).children.find(e => e.type === "code");
    if (t) {
      return t.value;
    } else {
      return "";
    }
  }
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      classname: n,
      iconClassName: v,
      trackParams: _,
      message: b,
      contentBlock: {
        id: k,
        content_obj: y,
        is_finish: x,
        parent_id: w
      },
      onClose: S
    } = e ?? {};
    let [R] = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => [e.isExpand && e.messageId === k]);
    let $ = function (e) {
      let {
        blockId: t,
        parentBlockId: n,
        message: l
      } = e;
      return reactCoreLibraryReexport.useMemo(() => {
        var i;
        var r;
        var o;
        var a;
        var c;
        var d;
        if (!t) {
          return 0;
        }
        if (!n) {
          return ((a = l.content_blocks) === null || a === undefined ? undefined : (o = a.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_CODE)) === null || o === undefined ? undefined : o.findIndex(e => e.id === t)) ?? 0;
        }
        let p = l.content_block_nodes?.[n];
        if (p) {
          if ((d = p.children) === null || d === undefined) {
            return undefined;
          } else if ((c = d.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_CODE)) === null || c === undefined) {
            return undefined;
          } else {
            return c.findIndex(e => e.id === t);
          }
        } else {
          return ((r = l.content_blocks) === null || r === undefined ? undefined : (i = r.filter(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_CODE)) === null || i === undefined ? undefined : i.findIndex(e => e.id === t)) ?? 0;
        }
      }, [n, t]);
    }({
      blockId: k,
      parentBlockId: w,
      message: b
    });
    let {
      code: C,
      summary: T,
      std_out_list: j,
      type: N
    } = y ?? {};
    let E = N === 1;
    let P = E ? f(C) : C;
    let I = E ? (j || []).map(e => {
      let {
        content: t,
        ...n
      } = e;
      return {
        ...n,
        content: f(t)
      };
    }) : j;
    let W = functionInvoker.invoke(() => ({
      type: artifactResourceType.ArtifactResourceType.Code,
      conversationId: b.conversation_id || "",
      messageId: k || "",
      isAgentTask: true,
      onClose: S,
      taskData: {
        type: layoutCanvasTypes.LayoutCanvasTypes.Code,
        codeData: {
          parentBlockId: w || "",
          contentBlockId: k,
          headerIcon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {}),
          headerLabel: t("web_ai_coding_agent_tool_data_analysis"),
          code: P,
          stdOutList: I,
          isStreaming: !x
        }
      },
      trackParams: _
    }));
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("show_pill_button", {
        button_name: "code",
        bot_id: b.bot_id,
        skill_id: b.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(b.skill?.skill_type_no_default),
        message_id: b.message_id,
        conversation_id: b.conversation_id,
        section_id: b.section_id,
        collection_id: b.ext?.collection_id,
        source: "cot",
        position: $ + 1
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
      title: T,
      classname: n,
      loading: !x,
      hoverable: true,
      prefixIcon: reactJsxRuntimeCoreReexport.jsx(chatRtlIconComponent_1.ChatRtlIcon, {
        className: v
      }),
      showSuffixIcon: true,
      onClick: () => {
        if (x) {
          if (R) {
            chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
            if (S != null) {
              S();
            }
            return;
          }
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(W));
          teaAnalyticsEventTracker.trackEvent("click_pill_button", {
            button_name: "code",
            bot_id: b.bot_id,
            skill_id: b.skill?.skill_id_no_default,
            skill_name: skillTypeMappings.getSkillName(b.skill?.skill_type_no_default),
            message_id: b.message_id,
            conversation_id: b.conversation_id,
            section_id: b.section_id,
            collection_id: b.ext?.collection_id,
            source: "cot",
            position: $ + 1
          });
        }
      }
    });
  };
  require.d(exports, {
    renderCodeArtifact: function () {
      return _;
    }
  });
}