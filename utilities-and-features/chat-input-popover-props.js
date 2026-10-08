// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'getChatPopoverProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 66913
         */
module.exports = function (module, exports, require) {
  var codeRouteUtils = require("code-route-utils") /*id: 983618*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let o = function ({
    chatType: e,
    isGuidanceInput: t = false
  } = {}) {
    let r = chatGuidanceSelectors.hasActiveSkill() && !codeRouteUtils.isCodeChatRoute();
    let o = !r && e === chatConversationTypes.ConversationTypes.NewThread;
    let s = !r && (!t || !o);
    let u = i18nTranslationUtils.useTranslationWithFallback()("chat_input_popover_toggle_button_templates");
    return {
      skillHeaderProps: {
        expandBtnText: u
      },
      expandBtnText: u,
      popoverProps: {
        visible: s
      },
      popoverContainerProps: {
        popoverVisible: !!s && undefined,
        keepDOMWhenPopoverHide: false,
        defaultOpenPopover: false
      }
    };
  };
  require.d(exports, {
    getChatPopoverProps: function () {
      return o;
    }
  });
}