// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useTemplateSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 906460
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  let a = e => {
    let {
      chatId: t,
      chatType: n,
      attachmentStates: a = []
    } = e;
    let s = reactCoreLibraryReexport.useRef({
      prompt: "",
      templateId: "",
      source: chatCoreConstants.MessageActions.Original
    });
    let l = chatConversationSelectors.selectConvLink(t, n);
    return {
      getTemplateSource: () => s.current,
      onPasteHandler: e => {
        let {
          text: t,
          isValidLink: n
        } = e;
        if ((!l || !n || a.length !== 0) && t && t.length > 20) {
          s.current.source = chatCoreConstants.MessageActions.Paste;
          s.current.templateId = "";
        }
      },
      onAfterSubmit: () => {
        s.current = {
          prompt: "",
          templateId: "",
          source: chatCoreConstants.MessageActions.Original
        };
      }
    };
  };
  require.d(exports, {
    useTemplateSource: function () {
      return a;
    }
  });
}