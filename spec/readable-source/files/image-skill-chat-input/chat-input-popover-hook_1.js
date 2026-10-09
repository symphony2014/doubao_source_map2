// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useChatInputPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-skill-chat-input.5c53534b.js
         * chunkId: 45281
         * moduleId: 573572
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let o = function ({
    chatType: e,
    showBanner: t,
    isGuidanceInput: n = false
  } = {}) {
    let o = chatGuidanceSelectors.hasActiveSkill();
    let s = !o && e === chatConversationTypes.ConversationTypes.NewThread;
    let c = t ?? (!o && (!n || !s));
    let [u, d] = reactCoreLibraryReexport.useState(0);
    let [p, m] = reactCoreLibraryReexport.useState("");
    let h = i18nTranslationUtils.useTranslationWithFallback()("chat_input_popover_toggle_button_templates");
    return {
      activeIndex: u,
      selStyle: p,
      setLastStyle: m,
      skillHeaderProps: {
        expandBtnText: h
      },
      expandBtnText: h,
      popoverProps: {
        visible: c,
        activeIndex: u,
        onUpdateActiveIndex: d,
        onUpdateLastStyle: m
      },
      popoverContainerProps: {
        popoverVisible: !!c && undefined,
        keepDOMWhenPopoverHide: false,
        defaultOpenPopover: false
      }
    };
  };
  require.d(exports, {
    useChatInputPopover: function () {
      return o;
    }
  });
}