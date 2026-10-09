// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'useChatFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 141886
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var chatFileUploadHandlers = require("chat-file-upload-handlers") /*id: 936472*/;
  var codeAssistantFileUpload = require("code-assistant-file-upload") /*id: 155525*/;
  let m = e => {
    var n;
    var m;
    let {
      chatId: g,
      chatType: v,
      skill: _,
      codeScene: b = "chat"
    } = e;
    let y = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: g ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let {
      addAttachment: w,
      addDirAttachment: x,
      addGitHubLink: C,
      clearAttachments: k,
      getPreGeneratedLocalMessageId: S,
      reuploadAttachment: E,
      deleteAttachment: T
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: g ?? "",
      skillType: chatAppEnums.SkillType.CodeAssistant
    });
    let j = v === chatConversationTypes.ConversationTypes.NewThread;
    let P = j && (m = chatConversationSelectors_2.getMainConversationLink(chatFeedStoreFactory.useFeedStore.getState())?.conversationId) !== null && m !== undefined ? m : g;
    let N = (_ == null ? undefined : (n = _.skill_type) === null || n === undefined ? undefined : n.toString()) || "";
    let R = (_ == null ? undefined : _.skill_type) || 0;
    let I = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (g) {
        chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
          if (e != null) {
            e.clearRefContents(g, {
              retainDisableRef: true
            });
          }
        });
      }
    });
    let O = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.some(e => e.type === "file"), [y]);
    let M = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.some(e => {
      let {
        fileName: t
      } = e;
      let n = getFileExtension.getFileExtension(t);
      return fileTypeDetectionUtils.isSpreadsheetFile(n) || fileTypeDetectionUtils.isCsvFile(n);
    }), [y]);
    let D = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.some(e => e.type === "directory"), [y]);
    let A = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.some(e => e.type === "image"), [y]);
    let $ = reactCoreLibraryReexport.useMemo(() => y == null ? undefined : y.some(e => e.type === "link"), [y]);
    let {
      handleAddGithubLink: L,
      handleAddFiles: F,
      handleAddDir: Z,
      handleAddImages: W
    } = chatFileUploadHandlers.useUploadHandlers({
      attachmentStates: y,
      addAttachment: w,
      addDirAttachment: x,
      addGitHubLink: C,
      isNewThread: j,
      chatId: g,
      conversationId: P,
      skillType: R,
      skillId: N,
      getPreGeneratedLocalMessageId: S,
      clearRefContent: I,
      trackExtraParams: {
        code_scene: b
      }
    });
    let z = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (D || $ || A || M) {
        k({});
      }
      return F(e);
    });
    let B = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (O || $ || A || M) {
        k({});
      }
      return Z(e);
    });
    let U = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      if (O || D || A || M) {
        k({});
      }
      return L(e, t);
    });
    let {
      handleAddCiFiles: V
    } = codeAssistantFileUpload.createUploadHandler({
      chatId: g,
      addAttachment: w,
      attachmentStates: y,
      getPreGeneratedLocalMessageId: S,
      codeScene: b
    });
    return {
      handleAddGithubLink: U,
      handleAddDir: B,
      handleAddFiles: z,
      handleAddDataAnalysisFiles: reactFunctionMemoHook.useMemoizedCallback((e, t) => {
        if (O && !M || D || $ || A) {
          k({});
        }
        return V(e, t);
      }),
      handleAddImages: reactFunctionMemoHook.useMemoizedCallback(e => {
        if (O || D || $ || M) {
          k({});
        }
        return W(e);
      }),
      clearAttachments: k,
      reuploadAttachment: E,
      deleteAttachment: T,
      clearRefContent: I
    };
  };
  require.d(exports, {
    useChatFileUpload: function () {
      return m;
    }
  });
}