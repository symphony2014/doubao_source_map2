// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatAiConstants'
// - Resolved require(447912) to 'chat-ai-constants'
// - Renamed variable 'r' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'o' to 'locationIconSvg'
// - Resolved require(379595) to 'location-icon-svg'
// - Renamed variable 'l' to 'skillChatInputModeSelectButton'
// - Resolved require(688578) to 'skill-chat-input-mode-select-button'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'u' to 'chatLoginModalManager'
// - Resolved require(516605) to 'chat-login-modal-manager'
// - Renamed variable '_' to 'trackingEventConstants'
// - Resolved require(402894) to 'tracking-event-constants'
// - Renamed variable 'p' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'm' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'f' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'g' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'v' to 'menuTagExposureHandler'
// - Resolved require(218519) to 'menu-tag-exposure-handler'
// - Renamed variable 'x' to 'businessInputLimitHook'
// - Resolved require(429337) to 'business-input-limit-hook'
// - Renamed variable 'b' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'S' to 'skillbarPromoteTag'
// - Resolved require(649962) to 'skillbar-promote-tag'
// - Renamed variable 'k' to 'deepThinkingControlHooks'
// - Resolved require(180129) to 'deep-thinking-control-hooks'
// - Renamed variable 'T' to 'driveUtilsModule_1'
// - Resolved require(671874) to 'drive-utils-module_1'
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'z' to 'renderSkillChatInputModeSelectButton' (module 688578)
// - Updated imported property 'w' to 'LocationIcon' (module 379595)
// - Updated imported property 'ES' to 'deepThinkMode' (module 447912)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'X' to 'useBusinessLimit' (module 429337)
// - Updated imported property 'QD' to 'useDeepThinkSwitch' (module 180129)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'gF' to 'selectUserInfoLoading' (module 480327)
// - Updated imported property 'NK' to 'loginModalManager' (module 516605)
// - Updated imported property 'x' to 'trackingEvents' (module 402894)
// - Updated imported property 'd' to 'DropdownMenuSource' (module 671874)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'P' to 'updateMenuTagExpose' (module 218519)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 734225
         */
module.exports = function (module, exports, require) {
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var locationIconSvg = require("location-icon-svg") /*id: 379595*/;
  var skillChatInputModeSelectButton = require("skill-chat-input-mode-select-button") /*id: 688578*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      modeItem: n,
      skill: d
    } = e;
    let s = !isUndefinedCheck.isUndefined(d);
    return reactJsxRuntimeCoreReexport.jsx(skillChatInputModeSelectButton.renderSkillChatInputModeSelectButton, {
      icon: reactJsxRuntimeCoreReexport.jsx(locationIconSvg.LocationIcon, {}),
      title: (n == null ? undefined : n.name) ?? "",
      disabled: s,
      value: chatAiConstants.deepThinkMode.ProModel,
      highLight: true
    });
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatLoginModalManager = require("chat-login-modal-manager") /*id: 516605*/;
  var trackingEventConstants = require("tracking-event-constants") /*id: 402894*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var menuTagExposureHandler = require("menu-tag-exposure-handler") /*id: 218519*/;
  var businessInputLimitHook = require("business-input-limit-hook") /*id: 429337*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var skillbarPromoteTag = require("skillbar-promote-tag") /*id: 649962*/;
  let w = e => {
    let {
      item: t,
      disable: n = false
    } = e;
    let {
      menu_type: i,
      new_menu_item_tag: o
    } = t ?? {};
    let l = chatStoreManager.getStore("deepThinkingControlStore");
    let {
      showInnerNewTag: d
    } = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => {
      return {
        showInnerNewTag: !isUndefinedCheck.isUndefined(i) && (e.newTagsExposeTime?.[String(i)] <= 3 || isUndefinedCheck.isUndefined(e.newTagsExposeTime?.[String(i)]))
      };
    }, deepEqualityUtil.deepEqual);
    let u = o && d;
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        let e = objectPathGetDefault.getObjectPathDefault(l.getState().newTagsExposeTime, `${i}`);
        let t = l.getState().newTagsExposeTime;
        if (isUndefinedCheck.isUndefined(e)) {
          l.setState({
            newTagsExposeTime: {
              ...t,
              [String(i)]: 1
            }
          });
        } else if (e < 4) {
          l.setState({
            newTagsExposeTime: {
              ...t,
              [String(i)]: e + 1
            }
          });
        }
      }
    }, []);
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(skillbarPromoteTag.NewTags, {
        disable: n
      });
    } else {
      return null;
    }
  };
  var deepThinkingControlHooks = require("deep-thinking-control-hooks") /*id: 180129*/;
  var driveUtilsModule_1 = require("drive-utils-module_1") /*id: 671874*/;
  let E = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatId: n,
      skill: l,
      modeItem: d
    } = e;
    let {
      getMenuListSubTitle: b,
      isMenuTypeLimited: S,
      handleLimited: E,
      handleUpdateExceedConfig: y
    } = businessInputLimitHook.useBusinessLimit();
    let R = chatStoreManager.useStoreSelector("chatInputStore", e => {
      return e.modeSelectValue ?? "0";
    }, deepEqualityUtil.deepEqual);
    let N = !isUndefinedCheck.isUndefined(l);
    let $ = S(chatAiConstants.deepThinkMode.ProModel);
    let C = N || $;
    let j = $ ? b(chatAiConstants.deepThinkMode.ProModel) : "";
    deepThinkingControlHooks.useDeepThinkSwitch(n, l == null ? undefined : l.skill_type);
    let D = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let I = userInfoStatusSelectors.selectUserInfoLoading();
    let {
      openRawLoginModal: A
    } = chatLoginModalManager.loginModalManager();
    let W = () => {
      let e = A({
        onSuccess: () => e(),
        loginNavigateRoute: window.location.pathname,
        loginNavigateQuery: {},
        trackInfo: {
          source: trackingEventConstants.trackingEvents.SKILL,
          fromPage: "chat"
        }
      });
    };
    let M = reactCoreLibraryReexport.useMemo(() => N ? t("expert_model_tooltip_error_unsupported") : $ ? t("expert_model_desc_limit_reached") : "", []);
    reactCoreLibraryReexport.useEffect(() => {
      y();
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(driveUtilsModule_1.DropdownMenuSource, {
      ...e,
      icon: reactJsxRuntimeCoreReexport.jsx(locationIconSvg.LocationIcon, {}),
      disabled: C,
      limitSubTitle: j,
      toolTips: M,
      tagNode: reactJsxRuntimeCoreReexport.jsx(w, {
        item: d,
        disable: C
      }),
      active: R === String(chatAiConstants.deepThinkMode.ProModel),
      onClick: () => {
        var e;
        let n = {
          skill_id: (l == null ? undefined : (e = l.skill_type) === null || e === undefined ? undefined : e.toString()) ?? null,
          skill_name: skillTypeMappings.getSkillName(l == null ? undefined : l.skill_type)
        };
        if (isUndefinedCheck.isUndefined(l)) {
          menuTagExposureHandler.updateMenuTagExpose(d);
          if (!I && !D) {
            W();
            return;
          }
          E(chatAiConstants.deepThinkMode.ProModel);
          if (!C) {
            teaAnalyticsEventTracker.trackEvent("deep_thinking_switch_click", {
              ...n,
              click_status: "pro"
            });
            chatStoreManager.getStore("chatInputStore").setState(() => ({
              modeSelectValue: String(chatAiConstants.deepThinkMode.ProModel)
            }));
          }
        }
      }
    });
  };
  function y(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class R {
    constructor() {
      y(this, "Content", E);
      y(this, "SelectedContent", d);
      y(this, "params", {
        value: chatAiConstants.deepThinkMode.ProModel
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ProModeSelectPlugin: function () {
      return R;
    }
  });
}