// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useFileOperationHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 160007
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var layoutCanvasTypes = require("layout-canvas-types") /*id: 9235*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  function u(e) {
    let {
      block: t,
      conversationId: n,
      message: u,
      isStreaming: p,
      parentId: m,
      blockId: v,
      onCloseCanvas: f
    } = e;
    let {
      operation_type: h,
      path: g,
      content: _
    } = t;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let k = reactCoreLibraryReexport.useMemo(() => {
      if (!n) {
        return false;
      }
      switch (h) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace:
          return true;
        default:
          return false;
      }
    }, [h, n, g]);
    let y = reactCoreLibraryReexport.useMemo(() => h === skillMessageLifecycleTypes.fileOperationType.FileOperationType_List ? g || "" : g && g.split("/").pop() || "", [h, g]);
    let x = () => {
      if (f != null) {
        f();
      }
    };
    let w = reactCoreLibraryReexport.useMemo(() => {
      switch (h) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
          return b("web_ai_coding_agent_tool_file_view");
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
          return b("web_ai_coding_agent_tool_file_create");
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Edit:
          return b("web_ai_coding_agent_tool_file_edit");
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_List:
          return b("web_ai_coding_agent_tool_category_view");
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace:
          return b("coding_website_build_editFile");
        default:
          return "";
      }
    }, [h, y]);
    let S = reactCoreLibraryReexport.useMemo(() => `${w} ${y || ""}`, [w, y]);
    return {
      isCanClick: k,
      toolTitle: S,
      toolLabel: w,
      fileName: y,
      isCanAutoOpenCanvas: reactCoreLibraryReexport.useMemo(() => h === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create || h === skillMessageLifecycleTypes.fileOperationType.FileOperationType_Replace, [h]),
      onClick: () => {
        if (!n || !u) {
          return;
        }
        let f = "";
        switch (h) {
          case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
            f = "view_file";
            break;
          case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
            f = "create_file";
            break;
          case skillMessageLifecycleTypes.fileOperationType.FileOperationType_List:
            f = "ls";
            break;
          case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Edit:
            f = "edit_file";
            break;
          default:
            f = "";
        }
        teaAnalyticsEventTracker.trackEvent("click_card", {
          code_language: "python",
          bot_id: u.bot_id,
          skill_id: u.skill?.skill_id_no_default,
          skill_name: skillTypeMappings.getSkillName(u.skill?.skill_type_no_default),
          message_id: u.message_id,
          conversation_id: u.conversation_id,
          tool_file_name: y,
          button_name: f
        });
        let g = {
          type: artifactResourceType.ArtifactResourceType.Code,
          conversationId: u.conversation_id || "",
          messageId: (u == null ? undefined : u.message_id) || "",
          isAgentTask: true,
          onClose: x,
          taskData: {
            type: layoutCanvasTypes.LayoutCanvasTypes.Code,
            codeData: {
              parentBlockId: m || "",
              contentBlockId: v,
              headerIcon: null,
              headerLabel: S,
              fileName: y,
              code: _,
              isStreaming: p
            }
          },
          trackParams: {
            skill_id: u.skill?.skill_id_no_default || "",
            skill_name: skillTypeMappings.getSkillName(u.skill?.skill_type),
            bot_id: String(u.bot_id),
            section_id: u.section_id,
            canvas_type: "coding",
            agent_sub_type: "general_code"
          }
        };
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(g));
      }
    };
  }
  require.d(exports, {
    useFileOperationHandler: function () {
      return u;
    }
  });
}