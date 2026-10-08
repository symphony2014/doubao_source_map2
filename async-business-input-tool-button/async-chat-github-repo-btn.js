// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'ChatGithubRepoBtn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 562891
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.0087 1.5C6.19766 1.5 1.5 6.19217 1.5 11.997C1.5 16.6371 4.50995 20.5649 8.68555 21.9551C9.2076 22.0596 9.39883 21.7292 9.39883 21.4513C9.39883 21.208 9.38162 20.3738 9.38162 19.5047C6.45836 20.1305 5.84962 18.2534 5.84962 18.2534C5.37983 17.0368 4.68375 16.7242 4.68375 16.7242C3.72697 16.0811 4.75345 16.0811 4.75345 16.0811C5.81477 16.1507 6.37167 17.1586 6.37167 17.1586C7.31103 18.7574 8.82472 18.3056 9.43368 18.0275C9.52058 17.3497 9.79914 16.8805 10.0949 16.6199C7.7634 16.3765 5.31035 15.4729 5.31035 11.4408C5.31035 10.2938 5.72765 9.35533 6.38888 8.62548C6.28456 8.36486 5.9191 7.28715 6.49342 5.84474C6.49342 5.84474 7.38073 5.56662 9.38141 6.92223C10.238 6.69245 11.1213 6.57556 12.0087 6.57458C12.896 6.57458 13.8005 6.69636 14.6358 6.92223C16.6366 5.56662 17.524 5.84474 17.524 5.84474C18.0983 7.28715 17.7326 8.36486 17.6283 8.62548C18.3069 9.35533 18.707 10.2938 18.707 11.4408C18.707 15.4729 16.254 16.359 13.905 16.6199C14.2879 16.95 14.6183 17.5756 14.6183 18.5663C14.6183 19.9739 14.6011 21.1037 14.6011 21.4511C14.6011 21.7292 14.7926 22.0596 15.3144 21.9553C19.49 20.5647 22.5 16.6371 22.5 11.997C22.5172 6.19217 17.8023 1.5 12.0087 1.5Z",
      fill: "currentColor"
    })
  });
  var marscodeGuestAccessHandler = require("marscode-guest-access-handler") /*id: 870433*/;
  var useGithubEventTracker = require("use-github-event-tracker") /*id: 212929*/;
  let p = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: p,
      trackParams: h,
      uploadTeaReport: f,
      toggleGithubModalVisible: m
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: v
    } = chatLauncherConfigHooks.useSkillToolLayout(p);
    let {
      onClickGuestDisabled: _
    } = marscodeGuestAccessHandler.useMarsCodeGuestAccess();
    let {
      sendGithubPopoverShowEvent: b
    } = useGithubEventTracker.useGithubTracker({
      trackParams: {
        enter_method: "chat_enter_bar"
      }
    });
    let y = "web_ai_coding_add_open_repo";
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
        ...h,
        option_label: y,
        show_position: 0,
        is_default: 0,
        is_choose_required: 0
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
      "data-testid": "upload_file_button",
      isOverflow: t,
      small: n,
      scene: p,
      leadingIcon: reactJsxRuntimeCoreReexport.jsx(c, {}),
      onClick: async () => {
        if (await _()) {
          if (f != null) {
            f("pull_code");
          }
          b();
          if (m != null) {
            m(true, "chat_enter_bar");
          }
          teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_click", {
            ...h,
            action_type: "click_to_open",
            option_label: y,
            show_position: 0,
            is_default: 0,
            is_choose_required: 0
          });
        }
      },
      className: v ? "" : "gap-0 px-9",
      children: v ? g(y) : ""
    });
  };
  require.d(exports, {
    ChatGithubRepoBtn: function () {
      return p;
    }
  });
}