// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'asyncBusinessInputToolButton'
// - Resolved require(168064) to 'async-business-input-tool-button'
// - Renamed variable 'a' to 'initializeModuleInstance'
// - Resolved require(233913) to 'initialize-module-instance'
// - Renamed variable 'o' to 'chatInputConstants'
// - Resolved require(918547) to 'chat-input-constants'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 's' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'p' to 'getFileExtension'
// - Resolved require(256745) to 'get-file-extension'
// - Renamed variable 'h' to 'fileTypeDetectionUtils'
// - Resolved require(393072) to 'file-type-detection-utils'
// - Renamed variable 'f' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'm' to 'asyncSkillConstants'
// - Resolved require(292316) to 'async-skill-constants'
// - Renamed variable 'g' to 'codingSkillChatInput_3'
// - Resolved require(117608) to 'coding-skill-chat-input_3'
// - Renamed variable 'v' to 'chatFileUploadHook_1'
// - Resolved require(141886) to 'chat-file-upload-hook_1'
// - Renamed variable '_' to 'chatDataAnalysisUpload'
// - Resolved require(572869) to 'chat-data-analysis-upload'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'n' to 'useCodingChatInput' (module 117608)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'l' to 'getFileExtension' (module 256745)
// - Updated imported property 'Be' to 'isSpreadsheetFile' (module 393072)
// - Updated imported property 'I9' to 'isCsvFile' (module 393072)
// - Updated imported property 'H' to 'useChatFileUpload' (module 141886)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'o' to 'initializeInstance' (module 233913)
// - Updated imported property '$' to 'chatInputConstants' (module 918547)
// - Updated imported property 'p' to 'resourceType' (module 292316)
// - Updated imported property 'B' to 'DataAnalysisUpload' (module 572869)
// - Updated imported property 'Q' to 'AsyncBusinessInputToolButton' (module 168064)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 245343
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncBusinessInputToolButton = require("async-business-input-tool-button") /*id: 168064*/;
  var initializeModuleInstance = require("initialize-module-instance") /*id: 233913*/;
  var chatInputConstants = require("chat-input-constants") /*id: 918547*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var asyncSkillConstants = require("async-skill-constants") /*id: 292316*/;
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  var chatFileUploadHook_1 = require("chat-file-upload-hook_1") /*id: 141886*/;
  var chatDataAnalysisUpload = require("chat-data-analysis-upload") /*id: 572869*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      isOverflow: n,
      isToolButtonSmall: y,
      scene: w,
      trackParams: x,
      chatId: C,
      skill: k
    } = e;
    let S = reactCoreLibraryReexport.useRef(null);
    let {
      isDevMode: E
    } = codingSkillChatInput_3.useCodingChatInput();
    let T = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let j = C ?? (T == null ? undefined : T.chatId) ?? "";
    let P = T == null ? undefined : T.chatType;
    let N = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: j,
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let R = reactCoreLibraryReexport.useMemo(() => N == null ? undefined : N.some(e => e.type === "file"), [N]);
    let I = reactCoreLibraryReexport.useMemo(() => N == null ? undefined : N.some(e => e.type === "directory"), [N]);
    let O = reactCoreLibraryReexport.useMemo(() => N == null ? undefined : N.some(e => e.type === "link"), [N]);
    let M = reactCoreLibraryReexport.useMemo(() => N == null ? undefined : N.some(e => e.type === "image"), [N]);
    let D = reactCoreLibraryReexport.useMemo(() => N == null ? undefined : N.some(e => {
      let {
        fileName: t
      } = e;
      let n = getFileExtension.getFileExtension(t);
      return fileTypeDetectionUtils.isSpreadsheetFile(n) || fileTypeDetectionUtils.isCsvFile(n);
    }), [N]);
    let {
      handleAddFiles: A,
      handleAddDir: $,
      handleAddImages: L,
      handleAddDataAnalysisFiles: F
    } = chatFileUploadHook_1.useChatFileUpload({
      chatId: j,
      skill: k,
      chatType: P,
      codeScene: E ? "build" : "chat"
    });
    let Z = reactFunctionMemoHook.useMemoizedCallback(e => {
      var t;
      var n;
      var i;
      teaAnalyticsEventTracker.trackEvent("pin_button_click", {
        button_name: e,
        skill_id: (k == null ? undefined : (t = k.skill_type) === null || t === undefined ? undefined : t.toString()) || chatAppEnums.SkillType.CodeAssistant.toString(),
        skill_name: skillTypeMappings.getSkillName((k == null ? undefined : k.skill_type) || chatAppEnums.SkillType.CodeAssistant) || "",
        click_from: "chat_enter_bar",
        code_scene: E ? "build" : "chat",
        current_page: ((i = location) === null || i === undefined ? undefined : (n = i.href) === null || n === undefined ? undefined : n.includes("coding")) ? "code_assistant_detail_page" : "chat"
      });
    });
    let W = reactCoreLibraryReexport.useCallback(e => {
      var t;
      if ((t = S.current) !== null && t !== undefined) {
        t.onClick(e || "upload_pinbutton");
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      initializeModuleInstance.initializeInstance.on(chatInputConstants.chatInputConstants.clickDataAnalysis, W);
      return () => {
        initializeModuleInstance.initializeInstance.off(chatInputConstants.chatInputConstants.clickDataAnalysis, W);
      };
    }, [W]);
    let z = R || I || O || D;
    let B = reactCoreLibraryReexport.useMemo(() => I ? asyncSkillConstants.resourceType.DIR : O ? asyncSkillConstants.resourceType.REPO : D ? asyncSkillConstants.resourceType.DATA_ANALYSIS : M ? asyncSkillConstants.resourceType.IMAGE : R ? asyncSkillConstants.resourceType.FILE : undefined, [I, O, D, M, R]);
    let U = reactCoreLibraryReexport.useCallback(() => reactJsxRuntimeCoreReexport.jsx(chatDataAnalysisUpload.DataAnalysisUpload, {
      ref: S,
      onChange: F
    }), [F]);
    return reactJsxRuntimeCoreReexport.jsx(asyncBusinessInputToolButton.AsyncBusinessInputToolButton, {
      isOverflow: n,
      isToolButtonSmall: y,
      scene: w,
      trackParams: x,
      uploadTeaReport: Z,
      uploadedFileType: B,
      handleAddFiles: A,
      handleAddDir: $,
      handleAddImages: L,
      onOpenDataAnalysis: W,
      renderDataAnalysisUpload: U,
      isUploadFileOpenDisabled: z,
      isShowUploadImage: true
    });
  };
  class w {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: y,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = y;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CodingUploadFilePlugin: function () {
      return w;
    }
  });
}