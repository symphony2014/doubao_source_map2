// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'layoutCanvasTypes'
// - Resolved require(9235) to 'layout-canvas-types'
// - Renamed variable 'r' to 'chatItemComponent'
// - Resolved require(479771) to 'chat-item-component'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 's' to 'semiSpinComponent'
// - Resolved require(714437) to 'semi-spin-component'
// - Renamed variable 'c' to 'rtlChevronRightIcon'
// - Resolved require(946692) to 'rtl-chevron-right-icon'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'm' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'v' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'g' to 'artifactResourceType'
// - Resolved require(310450) to 'artifact-resource-type'
// - Renamed variable '_' to 'documentOutlinedIcon'
// - Resolved require(700300) to 'document-outlined-icon'
// - Renamed variable 'b' to 'rtlArrowLeftIcon'
// - Resolved require(31280) to 'rtl-arrow-left-icon'
// - Renamed variable 'k' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'y' to 'fileOperationHandler'
// - Resolved require(160007) to 'file-operation-handler'
// - Renamed variable 'w' to 'receiveFileOperationSymbol'
// - Resolved require(732161) to 'receive-file-operation-symbol'
// - Updated imported property 'Z' to 'Spin' (module 714437)
// - Updated imported property 'Z' to 'ChevronRightIcon' (module 946692)
// - Updated imported property 'a' to 'useFileOperationHandler' (module 160007)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'yk' to 'fileOperationType' (module 617019)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'j' to 'LayoutCanvasTypes' (module 9235)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Z' to 'DocumentOutlined' (module 700300)
// - Updated imported property 'Z' to 'RtlArrowLeftIcon' (module 31280)
// - Updated imported property 'q' to 'ChatItemComponent' (module 479771)
// - Updated imported property 'd' to 'receiveFileOperation' (module 732161)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 655882
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var layoutCanvasTypes = require("layout-canvas-types") /*id: 9235*/;
  var chatItemComponent = require("chat-item-component") /*id: 479771*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var rtlChevronRightIcon = require("rtl-chevron-right-icon") /*id: 946692*/;
  var d = {
    container: "container-RDHOW9",
    title: "title-Rj3iSi",
    desc: "desc-YVezDh",
    icon: "icon-eNQPcE",
    spin: "spin-m1eLaL"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      title: n,
      isLoading: i = false,
      desc: l,
      hoverable: r,
      prefixIcon: o,
      showSuffixIcon: p = true,
      onClick: m
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      className: a(d.container, {
        [d["container-hover"]]: r
      }),
      onClick: m,
      children: [i ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        wrapperClassName: d.spin,
        size: "small"
      }) : o, reactJsxRuntimeCoreReexport.jsx("div", {
        className: d.title,
        children: n
      }), l && reactJsxRuntimeCoreReexport.jsx("div", {
        className: d.desc,
        children: `\u{201C}${l}\u{201D}`
      }), p && reactJsxRuntimeCoreReexport.jsx(rtlChevronRightIcon.ChevronRightIcon, {
        className: a(d.icon, "text-12 -ml-4")
      })]
    });
  });
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var artifactResourceType = require("artifact-resource-type") /*id: 310450*/;
  var documentOutlinedIcon = require("document-outlined-icon") /*id: 700300*/;
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var fileOperationHandler = require("file-operation-handler") /*id: 160007*/;
  let x = e => {
    let {
      message: t,
      contentBlock: n
    } = e;
    let {
      id: o,
      content_obj: a,
      parent_id: s,
      is_finish: c
    } = n ?? {};
    let d = () => {
      C(true);
    };
    let {
      isCanClick: x,
      toolTitle: w,
      fileName: S,
      toolLabel: R
    } = fileOperationHandler.useFileOperationHandler({
      block: a,
      conversationId: t.conversation_id,
      message: t,
      isStreaming: !c,
      parentId: s,
      blockId: o,
      onCloseCanvas: d
    });
    let $ = codingSkillStoreModule.codingSkillStore(e => e.hasOpenCanvasViewInAsyncStreaming);
    let C = codingSkillStoreModule.codingSkillStore(e => e.setHasOpenCanvasViewInAsyncStreaming);
    let T = reactCoreLibraryReexport.useMemo(() => !c, [c]);
    let {
      operation_type: j,
      content: N
    } = a ?? {};
    let {
      conversation_id: E,
      reply_id: P
    } = t ?? {};
    let I = P + o;
    let W = () => {
      if (!E) {
        return;
      }
      let a = "";
      switch (j) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
          a = "view_file";
          break;
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
          a = "create_file";
          break;
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_List:
          a = "ls";
          break;
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Edit:
          a = "edit_file";
          break;
        default:
          a = "";
      }
      teaAnalyticsEventTracker.trackEvent("click_card", {
        code_language: "python",
        bot_id: t.bot_id,
        skill_id: t.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(t.skill?.skill_type_no_default),
        message_id: t.message_id,
        conversation_id: t.conversation_id,
        tool_file_name: S,
        button_name: a
      });
      let c = {
        type: artifactResourceType.ArtifactResourceType.Code,
        conversationId: t.conversation_id || "",
        messageId: t.message_id || "",
        isAgentTask: true,
        onClose: d,
        taskData: {
          type: layoutCanvasTypes.LayoutCanvasTypes.Code,
          codeData: {
            parentBlockId: s || "",
            contentBlockId: o,
            headerIcon: M,
            headerLabel: R,
            fileName: S,
            code: N,
            isStreaming: T
          }
        },
        trackParams: {
          skill_id: t.skill?.skill_id_no_default || "",
          skill_name: skillTypeMappings.getSkillName(t.skill?.skill_type),
          bot_id: String(t.bot_id),
          section_id: t.section_id,
          canvas_type: "coding",
          agent_sub_type: "general_code"
        }
      };
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel(c));
    };
    let F = () => {
      if (E && I && x) {
        W();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (T && x && !$) {
        F();
      }
    }, [T, x, $]);
    let M = reactCoreLibraryReexport.useMemo(() => {
      switch (j) {
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_View:
          return reactJsxRuntimeCoreReexport.jsx(documentOutlinedIcon.DocumentOutlined, {});
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Create:
        case skillMessageLifecycleTypes.fileOperationType.FileOperationType_Edit:
          return reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {});
        default:
          return null;
      }
    }, [j]);
    if (j === undefined) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(chatItemComponent.ChatItemComponent, {
        isShowDefaultBotIcon: !T,
        isTool: true,
        prefixIcon: T ? null : M,
        children: reactJsxRuntimeCoreReexport.jsx(p, {
          isLoading: T,
          hoverable: x,
          title: w,
          showSuffixIcon: x,
          onClick: F
        })
      });
    }
  };
  var receiveFileOperationSymbol = require("receive-file-operation-symbol") /*id: 732161*/;
  function S(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class R {
    constructor() {
      S(this, "pluginIdentifier", receiveFileOperationSymbol.receiveFileOperation);
      S(this, "type", "Container");
      S(this, "Content", x);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveFileOperationContentPlugin: function () {
      return R;
    }
  });
}