// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'useChatViewActions'
// - Renamed export 'X' to 'ChatViewProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-0.6fa2ce65.js
         * chunkId: 46805
         * moduleId: 969474
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var flowAcademicPageSymbol = require("flow-academic-page-symbol") /*id: 426805*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.createContext(null);
  let u = e => {
    let {
      children: t,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(d.Provider, {
      value: i,
      children: t
    });
  };
  let h = () => {
    let e = reactCoreLibraryReexport.useContext(d);
    let t = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    return {
      onOpenAcademicSearchCard: i => {
        if (e == null ? undefined : e.onOpenAcademicSearchCard) {
          return e.onOpenAcademicSearchCard(i);
        }
        if ((t == null ? undefined : t.chatType) === chatConversationTypes.ConversationTypes.Conversation || (t == null ? undefined : t.chatType) === chatConversationTypes.ConversationTypes.ThreadLocalConversation) {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.openCanvasPanel({
            conversationId: t.chatId,
            messageId: "",
            exactPluginIdentifier: flowAcademicPageSymbol.academicPageSymbol,
            academicPageData: i
          }, undefined, false));
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t.chatId || "", chatAppEnums.SkillType.AcademicSearch);
        }
      }
    };
  };
  require.d(exports, {
    useChatViewActions: function () {
      return h;
    },
    ChatViewProvider: function () {
      return u;
    }
  });
}