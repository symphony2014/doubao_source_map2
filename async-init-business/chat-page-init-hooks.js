// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'chatPageInitService'
// - Renamed export 'h' to 'useBotLanguages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.2dd70858.js
         * chunkId: 51606
         * moduleId: 915217
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var initConversationMessageList = require("init-conversation-message-list") /*id: 767528*/;
  var setChatCreateStatus = require("set-chat-create-status") /*id: 890724*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  let s = () => ({
    initLoadMessageInChatPage: async e => {
      if (e) {
        setChatCreateStatus.setChatCreateStatus({
          conversationId: e,
          status: false
        });
        await initConversationMessageList.initMessageList({
          conversationId: e,
          messageIndex: Number.MAX_SAFE_INTEGER
        });
      }
    }
  });
  let l = e => {
    let [t, n] = reactCoreLibraryReexport.useState(null);
    let [a, r] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useEffect(() => {
      r(true);
      if (e !== undefined) {
        apiServicesCollection.AliceBotApiService.LanguageList({
          bot_id: e
        }).then(e => {
          let {
            data: t
          } = e;
          if ((t == null ? undefined : t.support_language_list) !== undefined) {
            n(t.support_language_list);
          }
          r(false);
        }).catch(() => {
          r(false);
        });
      }
    }, []);
    return {
      languages: t,
      loading: a
    };
  };
  require.d(exports, {
    chatPageInitService: function () {
      return s;
    },
    useBotLanguages: function () {
      return l;
    }
  });
}