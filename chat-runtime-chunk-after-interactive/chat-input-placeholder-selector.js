// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'ChatInputPlaceholderSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 413435
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var skillPinChatInput = require("skill-pin-chat-input") /*id: 556035*/;
  var c = {
    "center-input": "center-input-oFzOro"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function p({
    className: e
  } = {}) {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let n = chatViewCoreSelectors.useChatType();
    let i = userInfoStatusSelectors.selectUserInfoFailed();
    return reactJsxRuntimeCoreReexport.jsx(skillPinChatInput.ChatInput, {
      className: r(e, i && n === chatConversationTypes.ConversationTypes.NewThread && c["center-input"]),
      placeholder: t(i ? "homepage_centered_input_placeholder" : "default_input_placeholder")
    });
  }
  require.d(exports, {
    ChatInputPlaceholderSelector: function () {
      return p;
    }
  });
}