// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'BotShareButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 233953
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var a = clipboardCopyHelper;
  (i = {}).Shareable = "shareable";
  i.Disable = "disable";
  let s = i;
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var getBotRequestId = require("get-bot-request-id") /*id: 36990*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var domainUrlConverter = require("domain-url-converter") /*id: 42970*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var semiButtonWrapperForwardRef = require("semi-button-wrapper-forward-ref") /*id: 126818*/;
  var skillReceiveIconComponent = require("skill-receive-icon-component") /*id: 956389*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var botProfileUpdateActions = require("bot-profile-update-actions") /*id: 681495*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let I = e => {
    var t;
    let {
      conversationId: n,
      botId: i,
      style: o,
      className: I,
      icon: j,
      theme: R = "borderless",
      needToolTip: N = true,
      enterFrom: $,
      ...M
    } = e;
    let P = useLocationWrapper.useLocationWrapper();
    let L = i18nTranslationUtils.useTranslationWithFallback();
    let D = chatConversationSelectors.selectConversation(n || "") || {};
    let O = (D == null ? undefined : D.bot_id) || i || "";
    let Z = botStoreManager.selectBotInfo(O);
    let {
      share_info: A,
      creator_info: W = {},
      private_status: B
    } = Z || {};
    let {
      creator_id: F
    } = W;
    let z = !!F && F === chatUserInfoActions.getUserIdStr();
    let H = (t = chatConversationCheckers.isCocoConversation(D) || chatConversationCheckers.isCocoSubConv(D)) !== null && t !== undefined && t;
    let V = () => {
      a(domainUrlConverter.convertDomainUrl(A == null ? undefined : A.share_url, {
        dolaFillWWW: true
      }) || "");
      semiToastNotification.toastInstance.success({
        content: i18nTranslationUtils.i18nextTranslate("share_bot_copy_link"),
        showClose: false
      });
    };
    let {
      chatType: U
    } = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig || {};
    let X = U === chatConversationTypes.ConversationTypes.NewThread;
    let K = reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: !H && !X && reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperForwardRef.SemiButtonWrapperForwardRef, {
        ...M,
        theme: R,
        className: I,
        disabled: (A == null ? undefined : A.share_status) === s.Disable || !A,
        icon: j || reactJsxRuntimeCoreReexport.jsx(skillReceiveIconComponent.SkillReceiveIcon, {
          className: "text-black"
        }),
        onClick: () => {
          let t = (P == null ? undefined : P.state?.enter_from) === "bot_discover";
          teaAnalyticsEventTracker.trackEvent("click_share_bot", {
            enter_from: $ || "bot_setting",
            bot_id: O,
            chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), n, Z),
            user_id: t ? chatUserInfoActions.getUserIdStr() : undefined,
            req_id: t ? getBotRequestId.getBotRequestId(O) : undefined,
            recommend_from: t ? "bot_list_discover" : undefined
          });
          if (A == null ? undefined : A.share_url) {
            if (z && B === chatEnumConstants.VisibilityType.Private) {
              modalDialogComponent.Modal.confirm({
                title: L("double_confirm_visibility_title"),
                cancelText: L("double_confirm_visibility_cancle"),
                okText: L("double_confirm_visibility_confirm"),
                centered: true,
                onOk: () => {
                  V();
                  botProfileUpdateActions.changeBotVisibility(O, chatEnumConstants.VisibilityType.Unlisted, D == null ? undefined : D.conversation_id);
                }
              });
            } else {
              V();
            }
          }
        },
        style: o
      })
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!H && !X) {
        let i = (P == null ? undefined : P.state?.enter_from) === "bot_discover";
        teaAnalyticsEventTracker.trackEvent("share_bot_show", {
          bot_id: O,
          conversation_id: (D == null ? undefined : D.conversation_id) ?? "",
          conversation_type: D.conversation_type,
          chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(chatUserInfoActions.getUserIdStr(), n, Z),
          recommend_from: i ? "bot_list_discover" : undefined
        });
      }
    }, []);
    if (N) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (A == null ? undefined : A.is_show_share_tab) && reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
          content: (A == null ? undefined : A.share_status) === s.Disable ? reactJsxRuntimeCoreReexport.jsx("div", {
            children: L("cannot_share_yet")
          }) : null,
          className: (A == null ? undefined : A.share_status) === s.Disable ? "" : "hidden",
          children: K
        })
      });
    } else {
      return K;
    }
  };
  require.d(exports, {
    BotShareButton: function () {
      return I;
    }
  });
}