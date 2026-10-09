// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'useGuidanceConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59170.744060e8.js
         * chunkId: 59170
         * moduleId: 724345
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var useChatPopoverConfig = require("use-chat-popover-config") /*id: 82102*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  let s = e => {
    let {
      chatType: t,
      showBanner: r,
      isGuidanceInput: s
    } = e;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let c = chatGuidanceSelectors.hasActiveSkill();
    let d = !c && t === chatConversationTypes.ConversationTypes.NewThread;
    let p = r ?? (!c && (!s || !d));
    let {
      defaultOpenPopover: f,
      skillHeaderProps: m
    } = useChatPopoverConfig.useChatPopoverConfig({
      persistDefaultOpenPopoverWhenInteract: {
        prefix: "music"
      }
    });
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let v = u("chat_input_popover_toggle_button_templates");
    return {
      skillHeaderProps: {
        ...m,
        expandBtnText: v
      },
      popoverContainerProps: {
        popoverVisible: !!p && undefined,
        defaultOpenPopover: f,
        onPopoverVisibleChange: g
      },
      popoverProps: {
        visible: p,
        open: h
      },
      expandBtnText: v
    };
  };
  require.d(exports, {
    useGuidanceConfig: function () {
      return s;
    }
  });
}